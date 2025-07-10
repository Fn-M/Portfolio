import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import certificates from '../../Resources/Certifications.json';
import { useState } from 'react';

// Helper to sort by date desc (year as string)
function sortByDateDesc(list: any[]) {
  return [...list].sort((a, b) => Number(b.date) - Number(a.date));
}

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const sorted = sortByDateDesc(certificates);
  const featured = sorted.filter(cert => cert.featured);
  const visibleCerts = showAll ? sorted : featured;

  return (
    <section id="certifications" className="py-10 bg-gray-50">
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
          {visibleCerts.map((cert, index) => (
            <motion.div
              key={cert.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group bg-gray-50 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-200 border border-gray-200 ${cert.featured ? 'border-blue-400' : ''}`}
              style={{ minHeight: 120 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold text-gray-900">{cert.title}</h3>
                    <span className="text-xs text-gray-500 ml-2">{cert.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">{cert.issuer}</span>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:underline text-xs flex items-center gap-1"
                    >
                      Verify <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(v => !v)}
            className="px-6 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium hover:bg-blue-200 transition-colors"
          >
            {showAll ? 'Show less' : 'Show all'}
          </button>
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