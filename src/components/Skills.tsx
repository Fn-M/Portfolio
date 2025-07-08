import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud, Smartphone, Globe, Users, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "C#", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 80 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "C++", level: 65 }
      ]
    },
    {
      id: 2,
      title: "Frameworks & Technologies",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: ".NET Core", level: 95 },
        { name: "React JS", level: 80 },
        { name: "REST/SOAP APIs", level: 90 },
        { name: "MVC Pattern", level: 85 },
        { name: "Windows Services", level: 80 },
        { name: "KendoUI", level: 75 }
      ]
    },
    {
      id: 3,
      title: "Databases & Storage",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MS SQL Server", level: 90 },
        { name: "Oracle", level: 85 },
        { name: "SQL", level: 95 },
        { name: "Database Design", level: 85 },
        { name: "Data Migration", level: 80 },
        { name: "Performance Tuning", level: 75 }
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS", level: 80 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "Atlassian Bamboo", level: 80 },
        { name: "IIS", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Azure DevOps", level: 75 }
      ]
    },
    {
      id: 5,
      title: "Testing & Quality",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "MSTest", level: 85 },
        { name: "XUnit", level: 80 },
        { name: "NUnit", level: 85 },
        { name: "Selenium", level: 75 },
        { name: "Unit Testing", level: 90 },
        { name: "Integration Testing", level: 80 }
      ]
    },
    {
      id: 6,
      title: "Leadership & Agile",
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: "Scrum Master", level: 90 },
        { name: "Team Leadership", level: 85 },
        { name: "Agile Methodologies", level: 90 },
        { name: "Mentoring", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Stakeholder Communication", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over a decade of experience with enterprise technologies, focusing on .NET ecosystem, agile methodologies, and team leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full inline-block"></span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Focus</h3>
            <p className="text-gray-600 mb-6">
              My expertise centers around enterprise software development with a strong focus on .NET technologies, 
              agile methodologies, and team leadership. I specialize in system migrations, legacy modernization, 
              and building scalable solutions for the banking and automotive leasing industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Enterprise Software Development
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                System Migration & Modernization
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Agile Leadership & Mentoring
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 