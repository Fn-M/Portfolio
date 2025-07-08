import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ProfessionalProjects from './components/ProfessionalProjects'
import PersonalProjects from './components/PersonalProjects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AccessibilityMenu from './components/AccessibilityMenu'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      <Header />
      
      <main id="main-content" role="main" aria-label="Main content">
        <section id="home" aria-labelledby="hero-heading">
          <Hero />
        </section>
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="professional" aria-labelledby="professional-heading">
          <ProfessionalProjects />
        </section>
        <section id="personal" aria-labelledby="personal-heading">
          <PersonalProjects />
        </section>
        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>
        <section id="certifications" aria-labelledby="certifications-heading">
          <Certifications />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <AccessibilityMenu />
    </div>
  )
}

export default App 