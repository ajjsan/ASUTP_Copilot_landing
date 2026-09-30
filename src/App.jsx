import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import WorkflowSection from './components/WorkflowSection.jsx'
import DemoSection from './components/DemoSection.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <WorkflowSection />
        <DemoSection />
        <BenefitsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
