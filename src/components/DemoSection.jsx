import { useEffect, useState } from 'react'
import { BrainCircuit, CheckCircle2, ChevronRight, ClipboardList, TimerReset } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'
import { demoIncidents } from '../data/demoIncidents.js'

const initialTimer = {
  isSolving: false,
  secondsLeft: 15,
  solutionMessage: '',
}

function getSolutionMessage(incident) {
  return `Разбор завершён: для инцидента «${incident.title}» подготовлен план проверки. Первым действием рекомендуется: ${incident.checks[0].toLowerCase()}.`
}

function DemoSection() {
  const [selectedId, setSelectedId] = useState(demoIncidents[0].id)
  const [incidentTimers, setIncidentTimers] = useState({})
  const selectedIncident = demoIncidents.find((incident) => incident.id === selectedId)
  const selectedTimer = incidentTimers[selectedId] ?? initialTimer
  const hasRunningTimers = Object.values(incidentTimers).some((timer) => timer.isSolving)
  const IncidentIcon = selectedIncident.icon

  useEffect(() => {
    if (!hasRunningTimers) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setIncidentTimers((currentTimers) => {
        let hasChanges = false

        const nextTimers = Object.fromEntries(
          Object.entries(currentTimers).map(([incidentId, timer]) => {
            if (!timer.isSolving) {
              return [incidentId, timer]
            }

            hasChanges = true
            const nextSeconds = Math.max(timer.secondsLeft - 1, 0)
            const incident = demoIncidents.find((item) => item.id === incidentId)

            return [
              incidentId,
              {
                isSolving: nextSeconds > 0,
                secondsLeft: nextSeconds,
                solutionMessage:
                  nextSeconds === 0 && incident
                    ? getSolutionMessage(incident)
                    : timer.solutionMessage,
              },
            ]
          }),
        )

        if (!hasChanges) {
          return currentTimers
        }

        return nextTimers
      })
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [hasRunningTimers])

  const handleSelectIncident = (incidentId) => {
    setSelectedId(incidentId)
  }

  const handleSolve = () => {
    setIncidentTimers((currentTimers) => ({
      ...currentTimers,
      [selectedId]: {
        isSolving: true,
        secondsLeft: 15,
        solutionMessage: '',
      },
    }))
  }

  return (
    <section className="section section-muted" id="demo">
      <SectionHeader
        eyebrow="Демонстрация интерфейса"
        title="Фрагмент приложения ASU TP Copilot"
        text="Блок работает на заранее подготовленных демонстрационных данных."
      />

      <div className="demo-shell">
        <aside className="incident-list" aria-label="Список демонстрационных инцидентов">
          <div className="panel-title">
            <ClipboardList size={20} />
            Инциденты
          </div>
          {demoIncidents.map((incident) => {
            const Icon = incident.icon
            const isActive = incident.id === selectedId
            const incidentTimer = incidentTimers[incident.id]
            const timerLabel = incidentTimer?.isSolving
              ? ` · анализ ${incidentTimer.secondsLeft} сек.`
              : incidentTimer?.solutionMessage
                ? ' · готово'
                : ''

            return (
              <button
                className={`incident-button ${isActive ? 'is-active' : ''} ${
                  incidentTimer?.isSolving ? 'is-solving' : ''
                } ${incidentTimer?.solutionMessage ? 'is-solved' : ''}`}
                key={incident.id}
                type="button"
                onClick={() => handleSelectIncident(incident.id)}
                aria-pressed={isActive}
              >
                <span className={`priority-dot ${incident.accent}`}></span>
                <Icon size={19} />
                <span>
                  <b>{incident.title}</b>
                  <small>
                    {incident.time} · {incident.priority}
                    {timerLabel}
                  </small>
                </span>
                <ChevronRight size={17} />
              </button>
            )
          })}
        </aside>

        <article className="analysis-panel">
          <div className="analysis-header">
            <div className={`analysis-icon ${selectedIncident.accent}`} aria-hidden="true">
              <IncidentIcon size={26} />
            </div>
            <div>
              <span>{selectedIncident.status}</span>
              <h3>{selectedIncident.title}</h3>
              <p>{selectedIncident.equipment}</p>
            </div>
          </div>

          <div className="analysis-grid">
            <div className="analysis-card">
              <h4>Наблюдаемые признаки</h4>
              <ul>
                {selectedIncident.symptoms.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </ul>
            </div>
            <div className="analysis-card accent-card">
              <div className="panel-title">
                <BrainCircuit size={20} />
                Результат анализа
              </div>
              <p>{selectedIncident.analysis}</p>
            </div>
          </div>

          <div className="recommendation-block">
            <h4>Рекомендации по дальнейшим проверкам</h4>
            <ol>
              {selectedIncident.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ol>
          </div>

          <div className="solve-panel">
            <div>
              <span className="solve-label">Интерактивный сценарий</span>
              <h4>Имитация подготовки результата</h4>
              <p>
                Таймер показывает демонстрационный процесс обработки заранее
                подготовленных данных. Реальная диагностика или подключение к
                оборудованию не выполняются.
              </p>
            </div>
            <button
              className="button button-primary solve-button"
              type="button"
              onClick={handleSolve}
              disabled={selectedTimer.isSolving}
            >
              {selectedTimer.isSolving ? (
                <>
                  <TimerReset size={18} />
                  Анализ: {selectedTimer.secondsLeft} сек.
                </>
              ) : (
                'Решить проблему'
              )}
            </button>
            {selectedTimer.solutionMessage && (
              <div className="solution-result" role="status">
                <CheckCircle2 size={20} />
                <p>{selectedTimer.solutionMessage}</p>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  )
}

export default DemoSection
