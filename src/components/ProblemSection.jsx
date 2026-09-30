import InfoCard from './InfoCard.jsx'
import SectionHeader from './SectionHeader.jsx'
import { problemCards } from '../data/demoIncidents.js'

function ProblemSection() {
  return (
    <section className="section" id="problem">
      <SectionHeader
        eyebrow="Проблема"
        title="Когда каждая минута имеет значение"
        text="В сопровождении промышленных АСУТП важно быстро собрать контекст, но решение остаётся за человеком." />
      <div className="card-grid three-columns">
        {problemCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  )
}

export default ProblemSection
