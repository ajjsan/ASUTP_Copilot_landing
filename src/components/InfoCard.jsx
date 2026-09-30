function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="info-card">
      <div className="card-icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}

export default InfoCard
