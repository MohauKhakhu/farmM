import Sidebar from './Sidebar'
import Header from './Header'

const Layout = ({ 
  children, 
  activeModule, 
  setActiveModule, 
  sidebarCollapsed, 
  setSidebarCollapsed 
}) => {
  return (
    <div className="flex h-screen">
      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        collapsed={sidebarCollapsed}
      />
      
      <div className={`flex-1 flex flex-col ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'} transition-all duration-300`}>
        <Header 
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout