import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap, Award, Building } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        </motion.div>

        {/* Personal Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Hi, I'm Fábio!
              </p>
              <p>
                I'm a <span className="font-semibold text-blue-600">Senior Software Engineer</span> and <span className="font-semibold text-blue-600">Scrum Master</span> with over a decade of experience crafting robust software solutions in the banking and automotive leasing industries.
              </p>
              <p>
                Currently based in <span className="font-semibold">Rotterdam, Netherlands</span>, I specialize in leading remote development teams and implementing agile methodologies. I'm also passionate about AI and leveraging modern AI-powered tools to boost development efficiency and code quality.
              </p>
              <p>
                My journey started in Lisbon, Portugal, where I earned my Bachelor's in Computer Engineering. <span className="font-semibold">During my degree, I also participated in an Erasmus program in the Czech Republic (🇨🇿).</span> Since then, I've worked across Portugal (🇵🇹), Ireland (🇮🇪), and the Netherlands (🇳🇱), gaining valuable experience with multicultural teams.
              </p>
              <p>
                Over the years, I've grown from writing desktop applications to leading remote cross-functional teams and managing complex system migrations. This international experience has taught me the importance of effective communication, cultural sensitivity, and adapting to different work styles and methodologies.
              </p>
              <p>
                I'm passionate about mentoring junior developers, implementing best practices, and leveraging modern technologies to solve real-world problems. When I'm not coding, you'll find me gardening, reading books and scientific articles, or lost in the realm of space exploration 🚀
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Personal Information */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <User className="w-6 h-6" aria-hidden="true" />
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span>Rotterdam, Netherlands</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Available for new remote opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  <span>Bachelor in Computer Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" aria-hidden="true" />
                  <span>10+ years of experience</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Languages</h4>
              <div className="space-y-3" role="list" aria-label="Language proficiency levels">
                <div className="flex justify-between items-center" role="listitem">
                  <span className="font-medium">Portuguese</span>
                  <span className="text-blue-600 font-semibold">C2 (Native)</span>
                </div>
                <div className="flex justify-between items-center" role="listitem">
                  <span className="font-medium">English</span>
                  <span className="text-blue-600 font-semibold">C1 (Advanced)</span>
                </div>
                <div className="flex justify-between items-center" role="listitem">
                  <span className="font-medium">Dutch</span>
                  <span className="text-blue-600 font-semibold">A1 (Beginner)</span>
                </div>
                <div className="flex justify-between items-center" role="listitem">
                  <span className="font-medium">Spanish</span>
                  <span className="text-blue-600 font-semibold">A2 (Elementary)</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Expertise</h4>
              <ul className="space-y-2 text-gray-600" role="list" aria-label="Key areas of expertise">
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  Agile Methodologies & Scrum Master
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  .NET Technologies & C# Development
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  Team Leadership & Mentoring
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  System Migration & Legacy Modernization
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  CI/CD Implementation
                </li>
                <li className="flex items-center" role="listitem">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
                  Cross-functional Team Collaboration
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" aria-hidden="true" />
                Professional Journey
              </h4>
              <div className="space-y-6" role="list" aria-label="Professional experience timeline">
                {/* Ayvens/LeasePlan */}
                <div className="border-l-4 border-blue-500 pl-4" role="listitem">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900">
                      <a
                        href="https://www.ayvens.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      >
                        Ayvens
                      </a>{" "}
                      (formerly LeasePlan)
                    </h5>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Current</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Dublin & Amsterdam • November 2018 — Present</p>
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <h6 className="font-medium text-gray-800">Scrum Master & Team Lead</h6>
                        <span className="text-xs text-gray-500">Oct 2023 - Present</span>
                      </div>
                      <p className="text-xs text-gray-600">Amsterdam, Netherlands</p>
                      <p className="text-xs text-gray-700 mt-1">
                        Oversee project management and delivery as Scrum Master. Mentor junior developers and ensure adherence to best practices. Engage with stakeholders to understand their needs and ensure the team delivers the right solutions.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <h6 className="font-medium text-gray-800">Senior Software Engineer</h6>
                        <span className="text-xs text-gray-500">Apr 2022 - Oct 2023</span>
                      </div>
                      <p className="text-xs text-gray-600">Amsterdam, Netherlands</p>
                      <p className="text-xs text-gray-700 mt-1">
                        Led migration of solutions from legacy systems to the most modern .NET technologies. Oversaw deployments and managed production systems.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <div className="flex items-center justify-between mb-1">
                        <h6 className="font-medium text-gray-800">FullStack Developer</h6>
                        <span className="text-xs text-gray-500">Nov 2018 - Apr 2022</span>
                      </div>
                      <p className="text-xs text-gray-600">Dublin, Ireland</p>
                      <p className="text-xs text-gray-700 mt-1">
                        Developed, deployed, and maintained an internal web portal accessible across the EMEA region.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Banco Atlântico Europa */}
                <div className="border-l-4 border-green-500 pl-4" role="listitem">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900">
                      <a
                        href="https://www.atlantico.eu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      >
                        Banco Atlântico Europa
                      </a>
                    </h5>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Lisbon, Portugal • August 2015 — November 2018</p>
                  
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1">
                      <h6 className="font-medium text-gray-800">Lead Developer & Scrum Master</h6>
                      <span className="text-xs text-gray-500">Aug 2015 - Nov 2018</span>
                    </div>
                    <p className="text-xs text-gray-600">Lisbon, Portugal</p>
                    <p className="text-xs text-gray-700 mt-1">
                      Led the creation, deployment, and maintenance of a widely utilized internal portal for over 130 employees. 
                      Acted as Lead Developer and Scrum Master, mentoring junior developers and introducing Scrum methodologies to the IT team.
                    </p>
                  </div>
                </div>

                {/* Integer Consulting */}
                <div className="border-l-4 border-purple-500 pl-4" role="listitem">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900 mb-2">
                      <a
                        href="https://integerconsulting.pt/en/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      >
                        Integer Consulting
                      </a>
                    </h5>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">Lisbon, Portugal • September 2014 — August 2015</p>
                  
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-1">
                      <h6 className="font-medium text-gray-800">Software Developer</h6>
                      <span className="text-xs text-gray-500">Sep 2014 - Aug 2015</span>
                    </div>
                    <p className="text-xs text-gray-600">Lisbon, Portugal</p>
                    <p className="text-xs text-gray-700 mt-1">
                      Maintained a spectrum of software, including desktop applications and internal web applications. 
                      Developed and maintained various client solutions, including projects for{" "}
                      <a
                        href="https://www.cgd.pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 underline hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                      >
                        Caixa Geral de Depósitos
                      </a>, the largest bank in Portugal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 