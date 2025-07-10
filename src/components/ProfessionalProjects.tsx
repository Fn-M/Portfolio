import { motion } from 'framer-motion'
import { ExternalLink, Users, Calendar } from 'lucide-react'
import professionalProjectsRaw from '../../Resources/ProfessionalProjects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  company: string;
  duration: string;
  teamSize: string;
  featured: boolean;
}

const projects: Project[] = professionalProjectsRaw as Project[];

const ProfessionalProjects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key projects and initiatives I've led throughout my career in banking and automotive leasing industries, demonstrating expertise in enterprise software development and team leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={
                    project.id === 1 ? { objectPosition: '50% 40%' } : 
                    project.id === 2 ? { objectPosition: 'center' } : 
                    project.id === 4 ? { objectPosition: 'top' } : 
                    project.id === 5 ? { objectPosition: '50% 55%' } :
                    project.id === 6 ? { objectPosition: '50% 0%' } :
                    project.id === 7 ? { objectPosition: '50% 60%' } :
                    project.id === 8 ? { objectPosition: '50% 20%' } : {}
                  }
                />
                {project.id !== 1 && (
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Project Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{project.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{project.teamSize}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Let's Work Together
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalProjects 