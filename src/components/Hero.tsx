import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Linkedin } from 'lucide-react'

type SocialLink = { name: string; url: string };

const Hero = () => {
  const socialLinks: SocialLink[] = JSON.parse(import.meta.env.VITE_SOCIAL_LINKS);
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      scrollToAbout()
    }
  }

  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-white mb-6">
            Fábio Miranda
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-8">
            Senior Software Engineer & Scrum Master
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Seasoned software developer with over a decade of experience in banking and automotive leasing industries. 
            Expert in leading remote development teams, implementing agile methodologies, and delivering robust software solutions.
          </p>

          {/* Location Info */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-20 text-white rounded-lg backdrop-blur-sm"
              aria-label="Location: Rotterdam, Netherlands"
            >
              <MapPin size={20} aria-hidden="true" />
              <span>Rotterdam, Netherlands</span>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              onClick={scrollToAbout}
              onKeyDown={handleKeyDown}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View my work and projects"
            >
              View My Work
            </motion.button>
            <motion.a
              href={socialLinks.find(sl => sl.name === 'linkedin')?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Connect with me on LinkedIn (opens in new tab)"
            >
              <Linkedin className="inline mr-2" size={20} aria-hidden="true" />
              Connect on LinkedIn
            </motion.a>
          </div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            onKeyDown={handleKeyDown}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900 rounded-full p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll down to learn more about me"
          >
            <ChevronDown size={30} className="text-white opacity-70" aria-hidden="true" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 