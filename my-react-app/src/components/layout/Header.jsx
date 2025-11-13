import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'

const Header = ({ onToggleSidebar, sidebarCollapsed }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 z-40">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaBars className="text-gray-600" />
          </button>
          
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-80">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none focus:outline-none w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FaBell className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <FaUserCircle className="text-gray-600 text-xl" />
            {!sidebarCollapsed && (
              <span className="text-gray-700 font-medium">John Doe</span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header