import Sidebar from "./assets/components/Sidebar"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import PublicRoutes from "./routes/PublicRoutes"
const App = () => {
  return (
      <BrowserRouter>
        <div className="flex">
          <Sidebar/>
          <Routes>
            <Route path="/dashboard/*" element={<PublicRoutes/>} />
          </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App