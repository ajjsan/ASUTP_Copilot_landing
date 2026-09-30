import InfoCard from './InfoCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { benefits } from '../data/demoIncidents.js'

function BenefitsSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <section className="section" id="benefits">
        <SectionHeader
          eyebrow="Преимущества"
          title="Ожидаемые преимущества концепции"
          text="Это проектные ориентиры, а не результаты промышленных испытаний."
        />
        <div className="card-grid">
          {benefits.map((benefit) => (
            <InfoCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Финальный акцент</p>
          <h2>Инженер принимает решение. Агент помогает понять проблему.</h2>
          <p>
            ASU TP Copilot — концепция интеллектуальной поддержки сопровождения
            промышленной автоматизации.
          </p>
        </div>
        <button className="button button-primary" type="button" onClick={scrollToTop}>
          Вернуться к началу
        </button>
      </section>
    </>
  )
}

export default BenefitsSection
