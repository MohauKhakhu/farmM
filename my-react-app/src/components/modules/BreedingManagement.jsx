import Card from '../ui/Card';

const BreedingManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Stud & Breeding Management</h1>
        <p className="text-gray-600 mt-2">Advanced breeding programs and genetic tracking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Active Programs</h3>
              <p className="text-sm text-gray-500 mt-1">Across 3 species</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <span className="text-2xl">🧬</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">8</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Genetic Diversity</h3>
              <p className="text-sm text-gray-500 mt-1">Genetic health</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <span className="text-2xl">🌳</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">87%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Success Rate</h3>
              <p className="text-sm text-gray-500 mt-1">Successful conceptions</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-100">
              <span className="text-2xl">👶</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">92%</p>
        </Card>

        <Card className="card-hover">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Bull Testing</h3>
              <p className="text-sm text-gray-500 mt-1">Active Phase C tests</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-100">
              <span className="text-2xl">🔬</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mt-4">12</p>
        </Card>
      </div>
    </div>
  );
};

export default BreedingManagement;