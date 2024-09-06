
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      {/* Left Section: Dashboard */}
      <h1 className="text-green-600 font-bold text-lg">Dashboard</h1>

      {/* Middle Section: Search Bar */}
      <div className="flex items-center w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 px-4 py-2 text-sm rounded-full focus:outline-none"
        />
      </div>

      {/* Right Section: Notification Icon */}
      <div className="flex items-center space-x-4">
        <FaBell className="text-green-600 text-xl cursor-pointer" />
        <img
          src="https://ik.imagekit.io/sti8lrsqsa/image.png?updatedAt=1684849005090"
          alt="Profile"
          className="w-10 h-15 rounded-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
