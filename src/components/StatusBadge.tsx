type Status = 'deployed' | 'active' | 'classified' | 'upcoming'

const cfg: Record<Status, { label: string; cls: string }> = {
  deployed:   { label:'Deployed',   cls:'s-deployed'   },
  active:     { label:'Active',     cls:'s-active'     },
  classified: { label:'Classified', cls:'s-classified' },
  upcoming:   { label:'Upcoming',   cls:'s-upcoming'   },
}

export default function StatusBadge({ status }: { status: Status }) {
  const { label, cls } = cfg[status]
  return (
    <div className={`status-badge ${cls}`}>
      <span className="status-dot"/>
      {label}
    </div>
  )
}
