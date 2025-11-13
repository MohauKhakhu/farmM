import Card from '../ui/Card';

const Cybersecurity = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cybersecurity & Data Protection</h1>
        <p className="text-gray-600 mt-2">Secure your farm data with advanced protection measures</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Data Encryption</h3>
              <p className="text-sm text-gray-500 mt-1">Encrypted data storage</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <span className="text-2xl">🔒</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">98%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Access Control</h3>
              <p className="text-sm text-gray-500 mt-1">Active user roles</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <span className="text-2xl">👥</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Anomaly Detection</h3>
              <p className="text-sm text-gray-500 mt-1">AI-detected anomalies</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">3</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Blockchain Records</h3>
              <p className="text-sm text-gray-500 mt-1">Immutable records</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <span className="text-2xl">⛓️</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">2,458</p>
        </Card>
      </div>
    </div>
  );
};

export default Cybersecurity;