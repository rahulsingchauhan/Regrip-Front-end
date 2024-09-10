import { Route, Routes } from 'react-router-dom';
import Navbar from '../assets/components/NavBar';
import Dashboard from '../pages/dashboard/Dashboard';

function PublicRoutes() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default PublicRoutes;
