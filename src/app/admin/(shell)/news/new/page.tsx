import AdminNewsEditor from '@/components/AdminNewsEditor'

export const dynamic = 'force-dynamic'

function todayISO(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export default function AdminNewsNew() {
  return (
    <>
      <h1 className="admin_h1">新規 投稿</h1>
      <AdminNewsEditor
        mode="create"
        initial={{
          slug: '',
          title: '',
          date: todayISO(),
          category: 'info',
          summary: '',
          body: '',
        }}
      />
    </>
  )
}
