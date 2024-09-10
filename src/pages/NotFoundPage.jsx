import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <FaExclamationTriangle className="text-red-500 text-8xl mb-4 mx-auto" />
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <p className="text-xl text-gray-700 mb-6">Oops! The page you are looking for does not exist.</p>
        <Link
          to="/Dashboard"
          className="inline-block px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
