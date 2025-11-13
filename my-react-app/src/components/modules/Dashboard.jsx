import { FaCow, FaWeight, FaUsers, FaDollarSign, FaSatelliteDish, FaWheatAlt, FaShieldAlt, FaLeaf } from 'react-icons/fa'
import Card from '../ui/Card'
import Chart from '../ui/Chart'
import StatusBadge from '../common/StatusBadge'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Animals',
      value: '1,247',
      change: '+12 from last week',
      icon: FaCow,
      color: 'primary'
    },
    {
      title: 'Milk Production',
      value: '2,458 L',
      change: 'Daily average',
      icon: FaWeight,
      color: 'secondary'
    },
    {
      title: 'Employees',
      value: '42',
      change: '18 currently working',
      icon: FaUsers,
      color: 'primary'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,850',
      change: '+8% from last month',
      icon: FaDollarSign,
      color: 'secondary'
    },
    {
      title: 'IoT Sensor Status',
      value: '24/28',
      change: 'Active sensors',
      icon: FaSatelliteDish,
      color: 'primary'
    },
    {
      title: 'Feed Inventory',
      value: '68%',
      change: 'Reorder in 5 days',
      icon: FaWheatAlt,
      color: 'secondary'
    },
    {
      title: 'Biosecurity Score',
      value: '94%',
      change: 'Excellent',
      icon: FaShieldAlt,
      color: 'primary'
    },
    {
      title: 'Sustainability Index',
      value: '87%',
      change: '+5% from last quarter',
      icon: FaLeaf,
      color: 'secondary'
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
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
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
          <Card key={index} className="card-hover">
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
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Production Trends</h3>
          <Chart
            type="line"
            data={{
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              datasets: [
                {
                  label: 'Milk Production (L)',
                  data: [2200, 2350, 2400, 2300, 2450, 2500, 2550, 2600, 2580, 2620, 2650, 2700],
                  borderColor: '#4caf50',
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                },
                {
                  label: 'Feed Consumption (kg)',
                  data: [1800, 1850, 1900, 1950, 2000, 2050, 2100, 2150, 2200, 2250, 2300, 2350],
                  borderColor: '#ffc107',
                  backgroundColor: 'rgba(255, 193, 7, 0.1)',
                }
              ]
            }}
            height={300}
          />
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sensor Data</h3>
          <Chart
            type="bar"
            data={{
              labels: ['Barn A', 'Barn B', 'Pasture A', 'Pasture B', 'Feedlot'],
              datasets: [
                {
                  label: 'Temperature (°C)',
                  data: [24.5, 23.8, 22.1, 21.9, 25.2],
                  backgroundColor: 'rgba(76, 175, 80, 0.7)',
                },
                {
                  label: 'Humidity (%)',
                  data: [65, 68, 72, 70, 62],
                  backgroundColor: 'rgba(33, 150, 243, 0.7)',
                }
              ]
            }}
            height={300}
          />
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <div className="flex items-center justify-between mb-6">
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
                    <StatusBadge status={activity.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Dashboard