import InfoCard from './InfoCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { features } from '../data/demoIncidents.js'

function FeaturesSection() {
  return (
    <section className="section section-muted" id="features">
      <SectionHeader
        eyebrow="Возможности"
        title="Один помощник — много систем"
        text="Концепция объединяет анализ данных, проверку и устранение неисправностей в едином интерфейсе, без необходимости использования стороннего инструментария."
      />
      <div className="card-grid">
        {features.map((feature) => (
          <InfoCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
