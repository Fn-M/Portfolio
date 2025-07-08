/// <reference types="vite/client" />
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Globe } from 'lucide-react'

const Contact = () => {
  interface SocialLink {
    name: string,
    url: string, 
    icon: JSX.Element,
    color: string
  }

  const email = import.meta.env.VITE_CONTACT_EMAIL;
  const socialMediaConfig = {
    linkedin: {
      icon: <Linkedin className="w-5 h-5"/>,
      color: "hover:bg-blue-600"
    },
    github: {
      icon: <Github className="w-5 h-5"/>,
      color: "hover:bg-gray-800"
    },
    codeacademy: {
      icon: <Globe className="w-5 h-5"/>,
      color:"hover:bg-green-600"
    }
  };
  const socialLinks = (() => {
    try {
      return JSON.parse(import.meta.env.VITE_SOCIAL_LINKS).map((item: any): SocialLink => ({
        ...item,
        ...(socialMediaConfig[item.name as keyof typeof socialMediaConfig] || {
          icon: <Globe className="w-5 h-5" />,
          color: "hover:bg-gray-400"
        })
      }));
    } catch {
      return [];
    }
  })();
 


  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow me</h3>
            
            <div className="flex gap-4">
                {socialLinks.map((social: SocialLink, index:number) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-all duration-300 ${social.color} hover:text-white flex items-center gap-2`}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>

            {/* Availability */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Open to remote work</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">Interested in leadership roles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const subjectValue = form.subject.value;
                const messageValue = form.message.value;
                const to = email;
                const mailto = `mailto:${to}?subject=${encodeURIComponent(subjectValue)}&body=${encodeURIComponent(`${messageValue}`)}`;
                window.location.href = mailto;
              }}
            >
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can work together to bring your ideas to life. I'm excited to hear about your project!
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              <Mail size={16} />
              Start a Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 