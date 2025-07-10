import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'
import portfolioImg from '../../resources/profolio.png';
import vehicleHistoryImg from '../../resources/CarMaintenance.png';

const PersonalProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website. Features smooth animations, professional design, and mobile-first approach.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: portfolioImg,
      github: "https://github.com/Fn-M/Portfolio",
      live: "https://github.com/Fn-M/Portfolio",
      featured: false
    },
    {
      id: 2,
      title: "Availabilty calendar",
      description: "A calendar to keep track of my interviews, work, and personal appointments. This project arose from the need to share my availabilty with recruiters and companies, while maintaining my privacy.",
      technologies: ["React", "Tailwind CSS", "AWS", "DynamoDB"],
      image: "https://plus.unsplash.com/premium_photo-1722945611742-096d5d1d6351?q=80&w=1011&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "http://s3-mybucket-8ff814cd-4ca3-4aa2-9e2d-969d57eb0f9e.s3-website-eu-west-1.amazonaws.com/",
      featured: false
    },
    {
      id: 3,
      title: "Automatic Timesheet Filler",
      description: "A console app that reads project hours from a CSV and automatically submits them to the company portal using web scraping, saving time on repetitive timesheet entries.",
      technologies: [".Net", "Console App", "Selenium", "Web Scrapping", "CSV files"],
      image: "https://www.officeclip.com/wp-content/uploads/BlogEngine/2020/timesheet-templates.jpg.webp",
      github: "",
      live: "",
      featured: false
    },
    {
      id: 4,
      title: "Health monitor (in progress...)",
      description: "A web app that allow to keep track of my health, by tracking the blood pressure and other indicators. It will align those indicators with the normal range of my age and gender, informing who healthy I am withing each indicator.",
      technologies: ["React", "Python", "Flask", "PostgreSQL", "Render"],
      image: "https://images.unsplash.com/photo-1714642596931-2293df25c4a3?q=80&w=1628&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "",
      live: "",
      featured: false
    },
    {
      id: 5,
      title: "Vehicle history (in progress...)",
      description: "A web app to manage and track your vehicle's complete history, including maintenance, inspections, and repairs. Data is entered manually, and future versions will use machine learning to identify maintenance patterns (like oil changes and brake replacements) and notify when it's time for service.",
      technologies: ["React", "Tailwind CSS", "AWS", "DynamoDB"],
      image: vehicleHistoryImg,
      github: "",
      live: "",
      featured: false
    }
  ]

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
          {projects.map((project, index) => (
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
                    {project.technologies.map((tech, techIndex) => (
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
            href="https://github.com/fabio-miranda"
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