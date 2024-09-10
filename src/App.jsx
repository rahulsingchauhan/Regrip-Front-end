import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './assets/components/Sidebar';
import PublicRoutes from './routes/PublicRoutes';
import NotFoundPage from './pages/NotFoundPage'; // Import the new NotFoundPage

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/dashboard/*" element={<PublicRoutes />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
