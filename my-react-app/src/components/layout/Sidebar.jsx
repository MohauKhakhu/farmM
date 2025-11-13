import { useState } from 'react'
import { 
  FaTractor, FaChartPie, FaCow, FaShieldAlt, FaBoxes, 
  FaSeedling, FaSyringe, FaSatelliteDish, FaLock, FaDna,
  FaWheatAlt, FaWeightHanging, FaMoneyBillWave, FaUsers,
  FaLeaf, FaChartBar, FaHandsHelping, FaStore, FaCog,
  FaChevronDown, FaChevronRight
} from 'react-icons/fa'

const Sidebar = ({ activeModule, setActiveModule, collapsed }) => {
  const [openSubmenus, setOpenSubmenus] = useState({})

  const toggleSubmenu = (menuKey) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }))
  }

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: FaChartPie },
    {
      key: 'animal-management',
      label: 'Animal Management',
      icon: FaCow,
      submenu: [
        { key: 'animal-registry', label: 'Animal Registry' },
        { key: 'health-management', label: 'Health Management' },
        { key: 'breeding-records', label: 'Breeding Records' },
        { key: 'wearable-sensors', label: 'Wearable Sensors' },
      ]
    },
    {
      key: 'biosecurity',
      label: 'Biosecurity & Compliance',
      icon: FaShieldAlt,
      submenu: [
        { key: 'disease-tracking', label: 'Disease Tracking' },
        { key: 'visitor-logs', label: 'Visitor Logs' },
        { key: 'waste-management', label: 'Waste Management' },
        { key: 'audit-trail', label: 'Audit Trail' },
      ]
    },
    { key: 'inventory', label: 'Inventory Management', icon: FaBoxes },
    { key: 'crops', label: 'Crop Management', icon: FaSeedling },
    { key: 'vaccine', label: 'Vaccine Program', icon: FaSyringe },
    { key: 'iot', label: 'IoT & Sensors', icon: FaSatelliteDish },
    { key: 'cybersecurity', label: 'Cybersecurity', icon: FaLock },
    { key: 'breeding', label: 'Stud & Breeding', icon: FaDna },
    { key: 'feed', label: 'Feed Production', icon: FaWheatAlt },
    { key: 'feedlot', label: 'Feedlot Management', icon: FaWeightHanging },
    { key: 'finance', label: 'Financial Management', icon: FaMoneyBillWave },
    { key: 'workforce', label: 'Workforce Management', icon: FaUsers },
    { key: 'sustainability', label: 'Sustainability', icon: FaLeaf },
    { key: 'reports', label: 'Reports & Analytics', icon: FaChartBar },
    { key: 'mentorship', label: 'Mentorship Portal', icon: FaHandsHelping },
    { key: 'marketplace', label: 'Marketplace', icon: FaStore },
    { key: 'settings', label: 'Settings', icon: FaCog },
  ]

  return (
    <div className={`
      fixed inset-y-0 left-0 z-50 bg-primary-800 text-white
      ${collapsed ? 'w-20' : 'w-64'} 
      sidebar-transition
      flex flex-col
    `}>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-primary-700">
        <div className={`flex items-center space-x-3 ${collapsed ? 'justify-center' : ''}`}>
          <FaTractor className="text-2xl text-secondary-500" />
          {!collapsed && (
            <h1 className="text-xl font-bold text-white">Farm Management</h1>
          )}
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const hasSubmenu = item.submenu
            const isSubmenuOpen = openSubmenus[item.key]
            const isActive = activeModule === item.key || 
              (hasSubmenu && item.submenu.some(sub => sub.key === activeModule))

            return (
              <li key={item.key}>
                <button
                  onClick={() => hasSubmenu ? toggleSubmenu(item.key) : setActiveModule(item.key)}
                  className={`
                    w-full flex items-center justify-between p-3 rounded-lg
                    transition-colors duration-200
                    ${isActive ? 'bg-primary-900 text-white' : 'text-primary-100 hover:bg-primary-700'}
                    ${collapsed ? 'justify-center' : ''}
                  `}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="text-lg" />
                    {!collapsed && <span className="font-medium">{item.label}</span>}
                  </div>
                  
                  {hasSubmenu && !collapsed && (
                    <span className="text-sm">
                      {isSubmenuOpen ? <FaChevronDown /> : <FaChevronRight />}
                    </span>
                  )}
                </button>

                {/* Submenu */}
                {hasSubmenu && isSubmenuOpen && !collapsed && (
                  <ul className="ml-8 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.key}>
                        <button
                          onClick={() => setActiveModule(subItem.key)}
                          className={`
                            w-full text-left p-2 rounded-lg text-sm
                            transition-colors duration-200
                            ${activeModule === subItem.key 
                              ? 'bg-primary-700 text-white' 
                              : 'text-primary-200 hover:bg-primary-600'
                            }
                          `}
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar