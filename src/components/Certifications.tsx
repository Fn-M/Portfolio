import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Learn TypeScript",
      issuer: "Codecademy",
      date: "2025",
      link: "https://www.codecademy.com/profiles/FanMra/certificates/56fb1e71303e37b643bb1905f31c8a09",
      description: "Comprehensive course covering TypeScript fundamentals including types, functions, complex types, union types, type narrowing, and advanced object types. Enhanced JavaScript skills with type system for more reliable and maintainable code."
    },
    {
      id: 2,
      title: "Learn Python for Data Science",
      issuer: "Codecademy",
      date: "2025",
      link: "https://www.codecademy.com/profiles/FanMra/certificates/ac83e31a3e114189849dd4ee714834eb",
      description: "Comprehensive skill path covering Python programming for data science, including pandas, data cleaning, transformation, and analysis using Jupyter Notebook. Completed hands-on projects with real datasets."
    },
    {
      id: 3,
      title: "Learn React",
      issuer: "Codecademy",
      date: "2025",
      link: "https://www.codecademy.com/profiles/FanMra/certificates/af00e5032d0a68cc84879983f5d8333b",
      description: "Comprehensive course covering React fundamentals including JSX, components, props, state, hooks, and React programming patterns. Built interactive applications and learned modular development approach for powerful web applications."
    }
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud technologies, agile methodologies, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Issued:</span>
                  <span className="font-medium text-gray-700">{cert.date}</span>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Verify Certificate
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All certifications are verified and can be confirmed through their respective issuing organizations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications 