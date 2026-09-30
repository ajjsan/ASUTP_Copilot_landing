import { Cpu } from 'lucide-react'

const navItems = [
  { href: '#features', label: 'Возможности' },
  { href: '#workflow', label: 'Как это работает' },
  { href: '#benefits', label: 'Преимущества' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="ASU TP Copilot — к началу">
        <span className="brand-mark" aria-hidden="true">
          <Cpu size={22} />
        </span>
        <span>ASUTP Copilot</span>
      </a>

      <nav className="nav" aria-label="Основная навигация">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="nav-button" href="#demo">
          Демо
        </a>
      </nav>
    </header>
  )
}

export default Header
