import  { useState } from 'react';

const ActionTable = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-8">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-4">
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === 'pending' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'
            }`}
            onClick={() => handleTabChange('pending')}
          >
            Pending Actions
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === 'completed' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'
            }`}
            onClick={() => handleTabChange('completed')}
          >
            Completed Actions
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === 'financial' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-600'
            }`}
            onClick={() => handleTabChange('financial')}
          >
            Financial Summary
          </button>
        </nav>
      </div>

      {/* Table Section */}
      <div className="mt-6">
        {activeTab === 'pending' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tyre S.No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Example Row for Pending Actions */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">22 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Rotation</td>
                  <td className="px-6 py-4 whitespace-nowrap">CZ89031132021</td>
                  <td className="px-6 py-4 whitespace-nowrap">Bridgestone</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-500">Pending</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">22 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Fitment</td>
                  <td className="px-6 py-4 whitespace-nowrap">CZ89031132022</td>
                  <td className="px-6 py-4 whitespace-nowrap">Goodyear</td>
                  <td className="px-6 py-4 whitespace-nowrap text-red-500">Pending</td>
                </tr>
                {/* Add more rows for Pending Actions if needed */}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tyre S.No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Example Row for Completed Actions */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">22 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Inspection</td>
                  <td className="px-6 py-4 whitespace-nowrap">CZ89031132021</td>
                  <td className="px-6 py-4 whitespace-nowrap">Bridgestone</td>
                  <td className="px-6 py-4 whitespace-nowrap">XYZ123PQR</td>
                  <td className="px-6 py-4 whitespace-nowrap">1000/20</td>
                  <td className="px-6 py-4 whitespace-nowrap">RJ 13 SR 2299</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-500">Completed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">22 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Alignment</td>
                  <td className="px-6 py-4 whitespace-nowrap">CZ89031132021</td>
                  <td className="px-6 py-4 whitespace-nowrap">Bridgestone</td>
                  <td className="px-6 py-4 whitespace-nowrap">XYZ123PQR</td>
                  <td className="px-6 py-4 whitespace-nowrap">1000/20</td>
                  <td className="px-6 py-4 whitespace-nowrap">RJ 13 SR 2299</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expense Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Example Row for Financial Summary */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">22 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Tyre Purchase</td>
                  <td className="px-6 py-4 whitespace-nowrap">$5000</td>
                  <td className="px-6 py-4 whitespace-nowrap">Purchase</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">21 Aug 24</td>
                  <td className="px-6 py-4 whitespace-nowrap">Maintenance</td>
                  <td className="px-6 py-4 whitespace-nowrap">$1500</td>
                  <td className="px-6 py-4 whitespace-nowrap">Repair</td>
                </tr>
                {/* Add more rows for Financial Summary as needed */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionTable;
