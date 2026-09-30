import {
  ArrowDown,
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  Gauge,
  ServerCog,
} from 'lucide-react'
import { heroNodes } from '../data/demoIncidents.js'

function HeroVisual() {
  return (
    <div className="hero-console" aria-label="Демонстрационная визуализация интерфейса мониторинга">
      <div className="console-topbar">
        <span></span>
        <span></span>
        <span></span>
        <p>Industrial monitor / demo</p>
      </div>

      <div className="status-grid">
        <div className="metric-panel">
          <div className="metric-label">
            <ServerCog size={18} />
            Статус системы
          </div>
          <strong>Контур наблюдения</strong>
          <span className="status-pill status-ok">Активен</span>
        </div>
        <div className="metric-panel">
          <div className="metric-label">
            <Gauge size={18} />
            Канал PLC
          </div>
          <strong>PLC-102</strong>
          <span className="status-pill status-alert">Нет ответа</span>
        </div>
      </div>

      <div className="network-map">
        {heroNodes.map(({ label, icon: Icon, state }) => (
          <div className={`network-node ${state}`} key={label}>
            <Icon size={20} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="incident-stack">
        <div className="incident-row is-critical">
          <CircleAlert size={18} />
          <span>Потеря связи с PLC-102</span>
          <b>Высокий</b>
        </div>
        <div className="incident-row">
          <CheckCircle2 size={18} />
          <span>Температура в допустимом коридоре</span>
          <b>Норма</b>
        </div>
      </div>

      <div className="agent-note">
        <div className="agent-note-icon" aria-hidden="true">
          <BrainCircuit size={22} />
        </div>
        <div>
          <span>Рекомендация агента</span>
          <p>Начать с проверки питания шкафа и порта промышленной сети.</p>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero-section section" id="top">
      <div className="hero-content">
        <p className="eyebrow">Интеллектуальный помощник</p>
        <h1>ИИ-агент инженера АСУТП</h1>
        <p className="hero-lead">
          Система помогает быстрее анализировать техническую информацию из разных источников и автоматизировать устранение неисправностей.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#features">
            Возможности
            <ArrowDown size={18} />
          </a>
          <a className="button button-secondary" href="#demo">
            Демонстрация
          </a>
        </div>
      </div>
      <div className="hero-visual-wrap">
        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero
