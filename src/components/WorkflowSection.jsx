import SectionHeader from './SectionHeader.jsx'
import { workflowSteps } from '../data/demoIncidents.js'

function WorkflowSection() {
  return (
    <section className="section" id="workflow">
      <SectionHeader
        eyebrow="Как это работает"
        title="От события к понятному плану проверки"
        text="Агент структурирует информацию и готовит подсказки, но не управляет оборудованием и не заменяет инженера."
      />
      <div className="workflow">
        {workflowSteps.map((step, index) => (
          <article className="workflow-step" key={step.title}>
            <span className="step-index">{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WorkflowSection
