const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>ASUTP Copilot</strong>
      </div>
      <div>
        <span>Домашня работа №1 / Хабибуллин Айсан</span>
        <span>{currentYear}</span>
      </div>
    </footer>
  )
}

export default Footer
