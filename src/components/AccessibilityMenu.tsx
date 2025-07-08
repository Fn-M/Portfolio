import { useState } from 'react'
import { Settings, Type, Eye, Zap } from 'lucide-react'

const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100) // percentage
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const increaseFontSize = () => {
    if (fontSize < 150) {
      const newSize = fontSize + 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      const newSize = fontSize - 10
      setFontSize(newSize)
      document.documentElement.style.fontSize = `${newSize}%`
    }
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = '100%'
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.body.classList.toggle('high-contrast')
  }

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion)
    document.body.classList.toggle('reduced-motion')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Accessibility Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open accessibility menu"
        aria-expanded={isOpen}
      >
        <Settings size={24} aria-hidden="true" />
      </button>

      {/* Accessibility Menu Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-64">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Settings size={20} aria-hidden="true" />
            Accessibility
          </h3>

          {/* Font Size Controls */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Type size={16} aria-hidden="true" />
              Font Size
            </h4>
            <div className="flex items-center gap-2">
              <button
                onClick={decreaseFontSize}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                {fontSize}%
              </span>
              <button
                onClick={increaseFontSize}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Increase font size"
              >
                A+
              </button>
              <button
                onClick={resetFontSize}
                className="bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Reset font size"
              >
                Reset
              </button>
            </div>
          </div>

          {/* High Contrast Toggle */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={toggleHighContrast}
                className="sr-only"
              />
              <div className={`w-10 h-6 rounded-full transition-colors ${highContrast ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${highContrast ? 'translate-x-4' : 'translate-x-1'} mt-1`}></div>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">High Contrast</span>
              </div>
            </label>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={toggleReducedMotion}
                className="sr-only"
              />
              <div className={`w-10 h-6 rounded-full transition-colors ${reducedMotion ? 'bg-blue-600' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${reducedMotion ? 'translate-x-4' : 'translate-x-1'} mt-1`}></div>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">Reduced Motion</span>
              </div>
            </label>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="text-xs text-gray-500 border-t pt-2">
            <p>Keyboard shortcuts:</p>
            <ul className="mt-1 space-y-1">
              <li>• Tab: Navigate</li>
              <li>• Enter/Space: Activate</li>
              <li>• Escape: Close menus</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccessibilityMenu 