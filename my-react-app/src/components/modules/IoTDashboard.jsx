import Card from '../ui/Card';

const IoTDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">IoT & Sensor Integration</h1>
        <p className="text-gray-600 mt-2">Real-time monitoring of farm conditions and animal health</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <div className="text-3xl mb-4">🌡️</div>
          <div className="text-2xl font-bold text-gray-900">24.5°C</div>
          <div className="text-gray-500">Barn Temperature</div>
          <div className="mt-2 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Normal
          </div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl mb-4">💧</div>
          <div className="text-2xl font-bold text-gray-900">65%</div>
          <div className="text-gray-500">Humidity</div>
          <div className="mt-2 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Optimal
          </div>
        </Card>

        <Card className="text-center">
          <div className="text-3xl mb-4">⚖️</div>
          <div className="text-2xl font-bold text-gray-900">452 kg</div>
          <div className="text-gray-500">Avg Animal Weight</div>
          <div className="mt-2 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Good
          </div>
        </Card>
      </div>
    </div>
  );
};

export default IoTDashboard;