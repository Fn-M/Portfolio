import { motion } from 'framer-motion'
import { Code, Database, Palette, Cloud, Smartphone, Globe, Users, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "C#"},
        { name: "JavaScript"},
        { name: "SQL"},
        { name: "TypeScript"},
        { name: "HTML/CSS"},
        { name: "Python"},
        { name: "Java"}
      ]
    },
    {
      id: 2,
      title: "Frameworks & Technologies",
      icon: <Settings className="w-8 h-8" />,
      skills: [
        { name: ".NET Core" },
        { name: "React JS" },
        { name: "REST/SOAP APIs" },
        { name: "MVC Pattern" },
        { name: "Windows Services" },
        { name: "KendoUI" }
      ]
    },
    {
      id: 3,
      title: "Databases & Storage",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "MS SQL Server" },
        { name: "Oracle" },
        { name: "DynamoDB" },
        { name: "Database Design" },
        { name: "Data Migration" }
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "AWS" },
        { name: "GitLab CI/CD" },
        { name: "Atlassian Bamboo" },
        { name: "IIS" },
        { name: "Jira" }
      ]
    },
    {
      id: 5,
      title: "Testing & Quality",
      icon: <Globe className="w-8 h-8" />,
      skills: [
        { name: "MSTest" },
        { name: "XUnit" },
        { name: "NUnit" },
        { name: "Selenium" },
        { name: "Unit Testing" },
        { name: "Integration Testing" }
      ]
    },
    {
      id: 6,
      title: "Leadership & Agile",
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: "Scrum Master" },
        { name: "Team Leadership" },
        { name: "Agile Methodologies" },
        { name: "Mentoring" },
        { name: "Project Management" },
        { name: "Stakeholder Communication" }
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
      </div>
    </section>
  )
}

export default Skills 