import Card from '../ui/Card';

const InventoryManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
        <p className="text-gray-600 mt-2">Track stock levels, expiry dates, and automate reordering</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Feed Stock</h3>
              <p className="text-sm text-gray-500 mt-1">Reorder in 7 days</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <span className="text-2xl">🌾</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">42%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Medication</h3>
              <p className="text-sm text-gray-500 mt-1">Adequate stock</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <span className="text-2xl">💊</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">68%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Equipment</h3>
              <p className="text-sm text-gray-500 mt-1">Fully stocked</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <span className="text-2xl">🔧</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">91%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Supplies</h3>
              <p className="text-sm text-gray-500 mt-1">Reorder now</p>
            </div>
            <div className="p-3 rounded-lg bg-red-100">
              <span className="text-2xl">📦</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">35%</p>
        </Card>
      </div>
    </div>
  );
};

export default InventoryManagement;