import { motion } from 'framer-motion'
import { ExternalLink, Users, Calendar } from 'lucide-react'

const ProfessionalProjects = () => {
  const projects = [
    { // Scrum Implementation & Team Leadership
      id: 4,
      title: "Scrum Implementation & Team Leadership",
      description: "Introduced and implemented Scrum methodologies within IT development teams. Led cross-functional collaboration with D-level and C-level executives to align technological initiatives with business objectives.",
      technologies: ["Scrum", "Agile", "Team Leadership", "Stakeholder Management", "Project Management"],
      image: "https://images.unsplash.com/photo-1746729798021-129315426424?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Multiple Companies",
      duration: "Ongoing",
      teamSize: "Scrum Master & Team Lead",
      featured: false
    },
    { // Automotive Leasing Portal
      id: 1,
      title: "Automotive Leasing Portal",
      description: "Developed, deployed, and maintained a comprehensive internal web portal accessible across the EMEA region for LeasePlan/Ayvens. The portal serves as a central hub for internal operations, reporting, and process management, integrating with multiple third party systems.",
      technologies: [".NET Core", "C#", "React JS", "SQL Server", "SOAP APIs", "REST APIs", "IIS", "GitLab CI/CD"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      company: "Ayvens (formerly LeasePlan)",
      duration: "6 years",
      teamSize: "Cross-functional team",
      featured: false
    },
    { // Legacy System Migration
      id: 2,
      title: "Legacy System Migration",
      description: "Led the migration of critical business solutions from legacy systems to modern .NET architecture. Managed production deployments and ensured system stability during the transition period.",
      technologies: [".NET Core", "C#", "SQL Server", "Windows Services", "GitLab CI/CD", "AWS", "xUnit", "NUnit"],
      image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Ayvens (formerly LeasePlan)",
      duration: "1 year",
      teamSize: "Senior Developer",
      featured: false
    },
    { // Banking Internal Portal
      id: 3,
      title: "Banking Internal Portal",
      description: "Created, deployed, and maintained a widely utilized internal portal for over 150 employees at Banco Atlântico Europa. Implemented digitization and automation to enhance productivity.",
      technologies: [".NET MVC", "C#", "REST API", "SQL Server", "Oracle", "Azure DevOps", "Selenium"],
      image: "https://images.unsplash.com/photo-1720135885458-0af8193c4a0f?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Banco Atlântico Europa",
      duration: "3 years",
      teamSize: "Lead Developer",
      featured: false
    },
    { // ATM Integration Platform
      id: 5,
      title: "ATM Integration Platform",
      description: "Led the integration of specialized ATM software, enabling secure and efficient management of cash operations, transaction monitoring, and remote diagnostics. Coordinated with hardware vendors and internal teams to ensure seamless deployment and compliance with banking standards.",
      technologies: [".NET", "C#", "ATM Software", "SQL Server", "Windows Services", "Security", "Vendor APIs"],
      image: "https://images.unsplash.com/photo-1562235323-cd8f789b0445?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Banco Atlântico Europa",
      duration: "2 years",
      teamSize: "Integration Lead",
      featured: false
    },
    { // CGD Real Estate Management Portal
      id: 6,
      title: "Real Estate Management Portal",
      description: "Developed an internal portal to manage and commercialize bank-repossessed properties, streamlining property registration, tracking, and listing for sale through the bank and real estate partners.",
      technologies: [".NET MVC", "C#", "SOAP API", "Real Estate Workflows"],
      image: "https://plus.unsplash.com/premium_photo-1661402026197-9c73c1c05a43?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      company: "Caixa Geral de Depósitos",
      duration: "1 year",
      teamSize: "Fullstack Developer",
      featured: false
    },
    { // Stock Trading SPA
      id: 7,
      title: "Stock Trading Order Portal",
      description: "Developed a single-page application (SPA) for an internal portal, enabling client managers to register buy and sell orders on the stock market. Built with Angular, the app allowed searching for stocks by ISIN, displaying price charts for recent weeks and months, managing client portfolios, and submitting orders directly to the broker.",
      technologies: ["Angular", "SPA", "REST API", "Price Charts", "Broker Integration"],
      image: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // imagem de mercado de ações
      company: "Banco Atlântico Europa",
      duration: "1 year",
      teamSize: "Frontend Developer",
      featured: false
    },
    { // Namibia Branch Regulatory Expansion
      id: 8,
      title: "Namibia Branch Regulatory Expansion",
      description: "Led the technical expansion to open a new branch in Namibia, adapting banking solutions to local legal and data protection requirements. Mentored two junior developers throughout the project.",
      technologies: [".NET", "C#", "Regulatory Compliance", "Integrations", "REST API", "Data Protection", "Banking Solutions", "Internationalization", "Stakeholder Management"],
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // pessoas a trabalhar em equipa num escritório
      company: "Banco Atlântico Europa",
      duration: "1 year",
      teamSize: "Integration & Mentorship",
      featured: false
    }
  ]

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