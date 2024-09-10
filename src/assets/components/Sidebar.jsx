import { useState } from 'react';
import { FaTachometerAlt, FaCogs, FaChartBar, FaTruck, FaWrench, FaFileAlt, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import { GiCarWheel } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const toggleReports = () => setIsReportsOpen(!isReportsOpen);
  const toggleInventory = () => setIsInventoryOpen(!isInventoryOpen);

  return (
    <div className="h-screen bg-white w-64 px-4 py-8 border-r sticky top-0">
      <div className="flex items-center mb-8">
        <img
          src="https://ik.imagekit.io/sti8lrsqsa/image.png?updatedAt=1684849005090"
          alt="User"
          className="rounded-full w-10 h-15 mr-2"
        />
        <div>
          <p className="text-lg font-semibold">Rahul Singh Chauhan</p>
          <a href="#" className="text-sm text-blue-500">View profile</a>
        </div>
      </div>

      <ul className="space-y-2">
        <li>
          <Link to={'/dashboard'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <FaTachometerAlt className="mr-3" />
            Dashboard
          </Link>
        </li>

        <li>
          <button onClick={toggleInventory} className="flex items-center justify-between p-2 w-full text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="flex items-center">
              <BsBoxSeam className="mr-3" />
              Inventory
            </div>
            {isInventoryOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </li>

        {isInventoryOpen && (
          <ul className="pl-6 space-y-2">
            <li>
              <Link to="/invetory/fitters" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <GiCarWheel className="mr-3" />
                Retreaders
              </Link>
            </li>
            <li>
              <Link to="/invetory/fitters" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <FaWrench className="mr-3" />
                Fitters
              </Link>
            </li>
          </ul>
        )}

        <li>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <FaTruck className="mr-3" />
            Vehicle Allocation
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <FaCogs className="mr-3" />
            Collection Request
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <FaCogs className="mr-3" />
            Dispatch Request
          </a>
        </li>

        <li>
          <button onClick={toggleReports} className="flex items-center justify-between p-2 w-full text-gray-700 hover:bg-gray-100 rounded-md">
            <div className="flex items-center">
              <FaFileAlt className="mr-3" />
              Reports
            </div>
            {isReportsOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </li>

        {isReportsOpen && (
          <ul className="pl-6 space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <FaChartBar className="mr-3" />
                Analytics
              </a>
            </li>
          </ul>
        )}

      </ul>

      <div className="mt-auto flex flex-col items-center text-gray-500 text-sm">
        <img src="https://regrip.in/wp-content/uploads/2024/05/Regrip-logo-1.png" alt="Regrip logo" draggable="false" className="mb-2" />
        <p>Version 2.3.4</p>
        <p className="text-xs">(DB02314)</p>
      </div>
    </div>
  );
}
