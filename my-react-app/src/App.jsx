import { useState } from 'react'
import Layout from './components/layout/Layout'
import Dashboard from './components/modules/Dashboard'
import AnimalRegistry from './components/modules/AnimalRegistry'
import HealthManagement from './components/modules/HealthManagement'
import InventoryManagement from './components/modules/InventoryManagement'
import IoTDashboard from './components/modules/IoTDashboard'
import Cybersecurity from './components/modules/Cybersecurity'
import BreedingManagement from './components/modules/BreedingManagement'
import FeedProduction from './components/modules/FeedProduction'
import ChatAssistant from './components/ui/ChatAssistant'
import './index.css'

function App() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

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
      <Layout
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      >
        {renderModule()}
      </Layout>
      <ChatAssistant />
    </div>
  )
}

export default App