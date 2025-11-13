import { useState } from 'react'
import './index.css'

// Simple icons using emojis instead of react-icons
const Icons = {
  Dashboard: '📊',
  Animals: '🐄',
  Inventory: '📦',
  IoT: '📡',
  Security: '🔒',
  Breeding: '🧬',
  Feed: '🌾',
  Tractor: '🚜',
  User: '👤',
  Bell: '🔔',
  Robot: '🤖'
}

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const menuItems = [
    { key: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
    { key: 'animals', label: 'Animal Management', icon: Icons.Animals },
    { key: 'inventory', label: 'Inventory', icon: Icons.Inventory },
    { key: 'iot', label: 'IoT & Sensors', icon: Icons.IoT },
    { key: 'security', label: 'Cybersecurity', icon: Icons.Security },
    { key: 'breeding', label: 'Breeding', icon: Icons.Breeding },
    { key: 'feed', label: 'Feed Production', icon: Icons.Feed },
  ]

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />
      case 'animals':
        return <AnimalManagement />
      case 'inventory':
        return <InventoryManagement />
      case 'iot':
        return <IoTDashboard />
      case 'security':
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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`bg-green-800 text-white ${sidebarCollapsed ? 'w-20' : 'w-64'} transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-green-700 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{Icons.Tractor}</span>
            {!sidebarCollapsed && <h1 className="text-xl font-bold">Farm Management</h1>}
          </div>
        </div>
        
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map(item => (
            <button
              key={item.key}
              onClick={() => setActiveModule(item.key)}
              className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                activeModule === item.key ? 'bg-green-900 text-white' : 'text-green-100 hover:bg-green-700'
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
            >
              <span className="text-xl">{item.icon}</span>
              {!sidebarCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between h-16 px-6">
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 text-xl"
            >
              ☰
            </button>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 text-xl">
                {Icons.Bell}
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100">
                <span className="text-xl">{Icons.User}</span>
                {!sidebarCollapsed && <span>John Doe</span>}
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderModule()}
        </main>
      </div>

      {/* Chat Bot */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-700 text-xl">
        {Icons.Robot}
      </button>
    </div>
  )
}

// Dashboard Component
const Dashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Smart Dashboard</h1>
      <p className="text-gray-600">Real-time overview of your farm operations</p>
    </div>

    {/* Alert */}
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
      <div className="flex">
        <div className="flex-shrink-0">⚠️</div>
        <div className="ml-3">
          <p className="text-yellow-700">
            <span className="font-medium">Warning:</span> 3 animals require vaccination today.
          </p>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total Animals" 
        value="1,247" 
        change="+12 from last week" 
        icon="🐄"
        color="green"
      />
      <StatCard 
        title="Milk Production" 
        value="2,458 L" 
        change="Daily average" 
        icon="🥛"
        color="blue"
      />
      <StatCard 
        title="Employees" 
        value="42" 
        change="18 currently working" 
        icon="👥"
        color="purple"
      />
      <StatCard 
        title="Monthly Revenue" 
        value="$24,850" 
        change="+8% from last month" 
        icon="💰"
        color="green"
      />
    </div>

    {/* More Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="IoT Sensors" 
        value="24/28" 
        change="Active sensors" 
        icon="📡"
        color="blue"
      />
      <StatCard 
        title="Feed Inventory" 
        value="68%" 
        change="Reorder in 5 days" 
        icon="🌾"
        color="yellow"
      />
      <StatCard 
        title="Biosecurity" 
        value="94%" 
        change="Excellent" 
        icon="🛡️"
        color="green"
      />
      <StatCard 
        title="Sustainability" 
        value="87%" 
        change="+5% from last quarter" 
        icon="🌱"
        color="green"
      />
    </div>
  </div>
)

// Stat Card Component
const StatCard = ({ title, value, change, icon, color = 'green' }) => {
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{change}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <span className="text-xl">{icon}</span>
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900 mt-4">{value}</p>
    </div>
  )
}

// Other Module Components
const AnimalManagement = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Animal Management</h1>
      <p className="text-gray-600">Manage your livestock and health records</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Animal Registry</h3>
      <p>Animal management features coming soon...</p>
    </div>
  </div>
)

const InventoryManagement = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
      <p className="text-gray-600">Track stock levels and automate reordering</p>
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
      <h1 className="text-3xl font-bold text-gray-900">IoT & Sensors</h1>
      <p className="text-gray-600">Real-time monitoring of farm conditions</p>
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
      <h1 className="text-3xl font-bold text-gray-900">Cybersecurity</h1>
      <p className="text-gray-600">Protect your farm data and systems</p>
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
      <h1 className="text-3xl font-bold text-gray-900">Breeding Management</h1>
      <p className="text-gray-600">Advanced breeding programs and genetics</p>
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
      <h1 className="text-3xl font-bold text-gray-900">Feed Production</h1>
      <p className="text-gray-600">Optimize feed formulation and production</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Overview</h3>
      <p>Feed production features coming soon...</p>
    </div>
  </div>
)

export default App