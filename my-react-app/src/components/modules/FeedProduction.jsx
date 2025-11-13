import Card from '../ui/Card';

const FeedProduction = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Feed Production & Inventory</h1>
        <p className="text-gray-600 mt-2">Optimize feed formulation and track production</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Daily Production</h3>
              <p className="text-sm text-gray-500 mt-1">Feed produced today</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <span className="text-2xl">🏭</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">2.5 tons</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Raw Material Stock</h3>
              <p className="text-sm text-gray-500 mt-1">Adequate for 2 weeks</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <span className="text-2xl">📦</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">68%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quality Score</h3>
              <p className="text-sm text-gray-500 mt-1">Excellent quality</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <span className="text-2xl">🏆</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">94%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Feedlot Consumption</h3>
              <p className="text-sm text-gray-500 mt-1">Daily average</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <span className="text-2xl">⚖️</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">1.8 tons</p>
        </Card>
      </div>
    </div>
  );
};

export default FeedProduction;