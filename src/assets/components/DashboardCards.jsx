const DashboardCards = () => {
  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Summary Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-gray-700 font-semibold text-lg mb-4">Summary</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-green-600 text-xl font-bold">220</h3>
            <p className="text-sm text-gray-600">Total Vehicles</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">456</h3>
            <p className="text-sm text-gray-600">Total Tyres</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">345</h3>
            <p className="text-sm text-gray-600">Tyres on Wheel</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">276</h3>
            <p className="text-sm text-gray-600">Available Stock</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">179</h3>
            <p className="text-sm text-gray-600">Total Scrap</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">225</h3>
            <p className="text-sm text-gray-600">Claim Tyres</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">156</h3>
            <p className="text-sm text-gray-600">Sent to Retread</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">314</h3>
            <p className="text-sm text-gray-600">New Tyres</p>
          </div>
          <div>
            <h3 className="text-green-600 text-xl font-bold">234</h3>
            <p className="text-sm text-gray-600">Reusable Tyres</p>
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-gray-700 font-semibold text-lg mb-4">Alerts</h2>
        <ul className="space-y-4">
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Unidentified Tyre</span>
            <span className="text-red-500 font-bold">351</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Missing Tyre</span>
            <span className="text-red-500 font-bold">122</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Low NSD</span>
            <span className="text-red-500 font-bold">165</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Vehicle Pending</span>
            <span className="text-red-500 font-bold">245</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Pending Alignment</span>
            <span className="text-red-500 font-bold">123</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Pending Rotation</span>
            <span className="text-red-500 font-bold">456</span>
          </li>
          <li className="flex justify-between">
            <span className="text-red-500">●</span>
            <span className="text-sm text-gray-600">Tyre Defects</span>
            <span className="text-red-500 font-bold">257</span>
          </li>
        </ul>
      </div>

      {/* Tyre Inventory Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-gray-700 font-semibold text-lg">Tyre Inventory</h2>
          <h3 className="text-green-600 text-xl font-bold">580</h3>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="p-2">NSD</th>
              <th className="p-2">New</th>
              <th className="p-2">Retread</th>
              <th className="p-2">Scrap</th>
              <th className="p-2">Total</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            <tr>
              <td className="p-2">4 - 8</td>
              <td className="p-2">51</td>
              <td className="p-2">25</td>
              <td className="p-2">25</td>
              <td className="p-2">152</td>
            </tr>
            <tr>
              <td className="p-2">8 - 12</td>
              <td className="p-2">45</td>
              <td className="p-2">69</td>
              <td className="p-2">69</td>
              <td className="p-2">185</td>
            </tr>
            <tr>
              <td className="p-2">12 - 16</td>
              <td className="p-2">56</td>
              <td className="p-2">14</td>
              <td className="p-2">14</td>
              <td className="p-2">86</td>
            </tr>
            <tr>
              <td className="p-2">16 - 20</td>
              <td className="p-2">84</td>
              <td className="p-2">41</td>
              <td className="p-2">41</td>
              <td className="p-2">194</td>
            </tr>
            <tr>
              <td className="p-2">20 - 24</td>
              <td className="p-2">72</td>
              <td className="p-2">21</td>
              <td className="p-2">21</td>
              <td className="p-2">123</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardCards;
