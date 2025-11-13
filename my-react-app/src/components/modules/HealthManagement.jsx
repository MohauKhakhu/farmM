import Card from '../ui/Card';
import StatusBadge from '../common/StatusBadge';

const HealthManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Animal Health Management</h1>
        <p className="text-gray-600 mt-2">Comprehensive health records and monitoring</p>
      </div>
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Overview</h3>
        <p>Health management content coming soon...</p>
      </Card>
    </div>
  );
};

export default HealthManagement;