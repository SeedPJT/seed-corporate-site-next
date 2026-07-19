// 簡易 session = HMAC-SHA256 で signed cookie。 middleware ( edge runtime) と route handler
// ( node runtime) 両方 で verify する ため Web Crypto API を利用 = 依存 追加 なし。
// cookie value 形式 = `${payload}.${sig}` 、 payload = `${expiryMs}` ( 期限 UTC ms のみ)。
// 期限 は 現在 + 7 日 で 発行、 login で 都度 更新。

const COOKIE_NAME = 'admin_session'
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 日

function getSecret(): string {
  const s = process.env.SESSION_SECRET
  if (!s) throw new Error('SESSION_SECRET env が設定 されて い ません')
  return s
}

async function importKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

function bytesToHex(bytes: ArrayBuffer): string {
  return Array.from(new Uint8Array(bytes))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

function hexToBytes(hex: string): ArrayBuffer {
  if (hex.length % 2 !== 0) throw new Error('invalid hex')
  const buf = new ArrayBuffer(hex.length / 2)
  const view = new Uint8Array(buf)
  for (let i = 0; i < view.length; i++) {
    view[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16)
  }
  return buf
}

async function sign(payload: string): Promise<string> {
  const key = await importKey(getSecret())
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload))
  return bytesToHex(sig)
}

async function verify(payload: string, sig: string): Promise<boolean> {
  const key = await importKey(getSecret())
  return crypto.subtle.verify(
    'HMAC',
    key,
    hexToBytes(sig),
    new TextEncoder().encode(payload),
  )
}

export async function issueSessionCookie(): Promise<{ name: string; value: string; maxAge: number }> {
  const expiry = Date.now() + SESSION_TTL_MS
  const payload = String(expiry)
  const sig = await sign(payload)
  return {
    name: COOKIE_NAME,
    value: `${payload}.${sig}`,
    maxAge: SESSION_TTL_MS / 1000,
  }
}

export async function verifySessionCookieValue(value: string | undefined): Promise<boolean> {
  if (!value) return false
  const dot = value.indexOf('.')
  if (dot < 0) return false
  const payload = value.slice(0, dot)
  const sig = value.slice(dot + 1)
  const expiry = Number(payload)
  if (!Number.isFinite(expiry) || Date.now() > expiry) return false
  try {
    return await verify(payload, sig)
  } catch {
    return false
  }
}

export const SESSION_COOKIE_NAME = COOKIE_NAME
