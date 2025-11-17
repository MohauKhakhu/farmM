import { useState } from 'react'
import { 
  FaTractor, FaChartPie, FaCow, FaShieldAlt, FaBoxes, 
  FaSeedling, FaSyringe, FaSatelliteDish, FaLock, FaDna,
  FaWheatAlt, FaWeightHanging, FaMoneyBillWave, FaUsers,
  FaLeaf, FaChartBar, FaHandsHelping, FaStore, FaCog,
  FaChevronDown, FaChevronRight, FaSearch, FaBell, FaUserCircle,
  FaRobot, FaTimes, FaPaperPlane
} from 'react-icons/fa'
import './index.css'

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
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

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />
      case 'animal-registry':
        return <AnimalRegistry />
      case 'health-management':
        return <HealthManagement />
      case 'inventory':
        return <InventoryManagement />
      case 'iot':
        return <IoTDashboard />
      case 'cybersecurity':
        return <Cybersecurity />
      case 'breeding':
        return <BreedingManagement />
      case 'feed':
        return <FeedProduction />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`
          fixed inset-y-0 left-0 z-50 bg-green-800 text-white
          ${sidebarCollapsed ? 'w-20' : 'w-64'} 
          transition-all duration-300
          flex flex-col
        `}>
          {/* Logo */}
          <div className="p-4 border-b border-green-700 flex-shrink-0">
            <div className={`flex items-center space-x-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <FaTractor className="text-2xl text-yellow-400" />
              {!sidebarCollapsed && (
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
                        ${isActive ? 'bg-green-900 text-white' : 'text-green-100 hover:bg-green-700'}
                        ${sidebarCollapsed ? 'justify-center' : ''}
                      `}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="text-lg" />
                        {!sidebarCollapsed && <span className="font-medium">{item.label}</span>}
                      </div>
                      
                      {hasSubmenu && !sidebarCollapsed && (
                        <span className="text-sm">
                          {isSubmenuOpen ? <FaChevronDown /> : <FaChevronRight />}
                        </span>
                      )}
                    </button>

                    {/* Submenu */}
                    {hasSubmenu && isSubmenuOpen && !sidebarCollapsed && (
                      <ul className="ml-8 mt-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.key}>
                            <button
                              onClick={() => setActiveModule(subItem.key)}
                              className={`
                                w-full text-left p-2 rounded-lg text-sm
                                transition-colors duration-200
                                ${activeModule === subItem.key 
                                  ? 'bg-green-700 text-white' 
                                  : 'text-green-200 hover:bg-green-600'
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
        
        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'} transition-all duration-300`}>
          {/* Header */}
          <header className="bg-white shadow-sm border-b border-gray-200 z-40">
            <div className="flex items-center justify-between h-16 px-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaChartPie className="text-gray-600" />
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
                  <span className="text-gray-700 font-medium">John Doe</span>
                </button>
              </div>
            </div>
          </header>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto p-6">
            {renderModule()}
          </main>
        </div>
      </div>

      {/* AI Chat Assistant */}
      <ChatAssistant />
    </div>
  )
}

// Dashboard Component
const Dashboard = () => {
  const stats = [
    {
      title: 'Total Animals',
      value: '1,247',
      change: '+12 from last week',
      icon: FaCow,
      color: 'green'
    },
    {
      title: 'Milk Production',
      value: '2,458 L',
      change: 'Daily average',
      icon: FaWeightHanging,
      color: 'blue'
    },
    {
      title: 'Employees',
      value: '42',
      change: '18 currently working',
      icon: FaUsers,
      color: 'purple'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,850',
      change: '+8% from last month',
      icon: FaMoneyBillWave,
      color: 'green'
    },
    {
      title: 'IoT Sensor Status',
      value: '24/28',
      change: 'Active sensors',
      icon: FaSatelliteDish,
      color: 'blue'
    },
    {
      title: 'Feed Inventory',
      value: '68%',
      change: 'Reorder in 5 days',
      icon: FaWheatAlt,
      color: 'yellow'
    },
    {
      title: 'Biosecurity Score',
      value: '94%',
      change: 'Excellent',
      icon: FaShieldAlt,
      color: 'green'
    },
    {
      title: 'Sustainability Index',
      value: '87%',
      change: '+5% from last quarter',
      icon: FaLeaf,
      color: 'green'
    }
  ]

  const recentActivities = [
    { time: '10:30 AM', activity: 'Morning milking completed', employee: 'John Doe', status: 'completed' },
    { time: '9:15 AM', activity: 'Vaccination for Cow #234', employee: 'Dr. Smith', status: 'completed' },
    { time: '8:45 AM', activity: 'Feed delivery arrived', employee: 'Supplier', status: 'partial' },
    { time: 'Yesterday', activity: 'Equipment maintenance', employee: 'Robert Brown', status: 'completed' },
    { time: 'Yesterday', activity: 'New calf born (#287)', employee: 'System', status: 'completed' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Smart Dashboard</h1>
        <p className="text-gray-600 mt-2">Real-time overview of your farm operations</p>
      </div>

      {/* Alert */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <span className="text-yellow-400">⚠️</span>
          </div>
          <div className="ml-3">
            <p className="text-yellow-700">
              3 animals require vaccination today. <a href="#" className="underline">View schedule</a>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`text-${stat.color}-600 text-xl`} />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mt-4">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Filter
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentActivities.map((activity, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{activity.activity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{activity.employee}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'completed' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status === 'completed' ? 'Completed' : 'Partial'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// Animal Registry Component
const AnimalRegistry = () => {
  const [activeTab, setActiveTab] = useState('all-animals')

  const animals = [
    { id: '#B-2345', breed: 'Bonsmara', age: '3 years', weight: '450 kg', health: 'excellent', location: 'Pasture A' },
    { id: '#B-2346', breed: 'Angus', age: '2 years', weight: '380 kg', health: 'good', location: 'Feedlot B' },
    { id: '#B-2347', breed: 'Hereford', age: '4 years', weight: '520 kg', health: 'monitoring', location: 'Quarantine' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Animal Registry</h1>
        <p className="text-gray-600 mt-2">Comprehensive animal profiles and lineage tracking</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {['all-animals', 'add-animal', 'lineage', 'groups'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'all-animals' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Animal Registry</h3>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700">
                Add Animal
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Breed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {animals.map((animal, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{animal.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{animal.breed}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.age}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        animal.health === 'excellent' 
                          ? 'bg-green-100 text-green-800'
                          : animal.health === 'good'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {animal.health.charAt(0).toUpperCase() + animal.health.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{animal.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="text-green-600 hover:text-green-900">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

// Other Module Components (simplified for now)
const HealthManagement = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Animal Health Management</h1>
      <p className="text-gray-600 mt-2">Comprehensive health records and monitoring</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Overview</h3>
      <p>Health management features coming soon...</p>
    </div>
  </div>
)

const InventoryManagement = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
      <p className="text-gray-600 mt-2">Track stock levels, expiry dates, and automate reordering</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Inventory Overview</h3>
      <p>Inventory management features coming soon...</p>
    </div>
  </div>
)

const IoTDashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">IoT & Sensor Integration</h1>
      <p className="text-gray-600 mt-2">Real-time monitoring of farm conditions and animal health</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sensor Data</h3>
      <p>IoT monitoring features coming soon...</p>
    </div>
  </div>
)

const Cybersecurity = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Cybersecurity & Data Protection</h1>
      <p className="text-gray-600 mt-2">Secure your farm data with advanced protection measures</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h3>
      <p>Cybersecurity features coming soon...</p>
    </div>
  </div>
)

const BreedingManagement = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Stud & Breeding Management</h1>
      <p className="text-gray-600 mt-2">Advanced breeding programs and genetic tracking</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Breeding Programs</h3>
      <p>Breeding management features coming soon...</p>
    </div>
  </div>
)

const FeedProduction = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Feed Production & Inventory</h1>
      <p className="text-gray-600 mt-2">Optimize feed formulation and track production</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Overview</h3>
      <p>Feed production features coming soon...</p>
    </div>
  </div>
)

// AI Chat Assistant Component
const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your farm assistant. How can I help you today?", isUser: false },
    { 
      text: "I can help you with:\n- Animal health queries\n- Inventory management\n- Sensor data analysis\n- Breeding recommendations\n- Financial reports", 
      isUser: false 
    }
  ])
  const [inputMessage, setInputMessage] = useState('')

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const newMessage = { text: inputMessage, isUser: true }
    setMessages(prev => [...prev, newMessage])
    setInputMessage('')

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I understand your question about farm management. Let me check the data...",
        "Based on your farm's current status, I recommend checking the animal health records.",
        "I've analyzed the sensor data and everything looks normal.",
        "Would you like me to generate a report on that?",
        "I can help you with vaccination schedules, inventory management, or sensor data analysis."
      ]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }])
    }, 1000)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-700 transition-colors z-50"
        >
          <FaRobot className="text-xl" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-xl flex justify-between items-center">
            <h3 className="font-semibold">Farm AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                onClick={sendMessage}
                className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App