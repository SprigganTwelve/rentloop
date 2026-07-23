import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";

function App() {
     return (
          <div className="lg:pl-64">
               <BrowserRouter>
                    <Routes>
                         <Route path="/" element={<Dashboard />} />
                    </Routes>
               </BrowserRouter>
          </div>
     );
}

export default App;
