import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Bottom Section */}
        <div className="border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-300 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Fábio Miranda</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-300">© 2024 All rights reserved</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 