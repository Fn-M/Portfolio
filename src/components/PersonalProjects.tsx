import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'
import portfolioImg from '../../resources/profolio.png';
import vehicleHistoryImg from '../../resources/CarMaintenance.png';
import personalProjectsRaw from '../../Resources/PersonalProjects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

type SocialLink = {
  name:string,
  url:string
}

const imageMap: Record<string, string> = {
  '../../resources/profolio.png': portfolioImg,
  '../../resources/CarMaintenance.png': vehicleHistoryImg,
};

const projects: Project[] = (personalProjectsRaw as Project[]).map((project) => ({
  ...project,
  image: project.image.startsWith('http') ? project.image : imageMap[project.image] || project.image,
}));

const PersonalProjects = () => {
  const socialLinks : SocialLink[] = JSON.parse(import.meta.env.VITE_SOCIAL_LINKS);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Side projects and tools I've developed to enhance my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              } flex flex-col`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={ "w-full h-full object-cover object-center transition-transform duration-300" }
                  style={
                    project.id === 1 ? { objectPosition: '50% 0%' } : 
                    project.id === 2 ? { objectPosition: '50% 25%' } : 
                    project.id === 3 ? { objectPosition: '50% 40%' } :
                    project.id === 5 ? { objectPosition: '50% 70%' } : {}
                  }
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-4 justify-between">
                  {project.github && 
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  }
                  {project.live &&
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm ml-auto"
                  >
                    <Globe size={16} />
                    Demo
                  </a>
                  }
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
            href={socialLinks.find(sl => sl.name==='github')?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
          >
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PersonalProjects 