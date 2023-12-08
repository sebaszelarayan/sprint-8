import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClientesPage } from "./pages/ClientesPage";
import { ClientesForms } from "./pages/ClientesForm";
import { Navigation } from "./components/Navigation";
import { BranchList } from "./components/Sucursales";

function App() {
  return (
    <body>
    <main class="container">
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/ClientesPage" element={<ClientesPage/>} />
        <Route path="/ClientesForms" element={<ClientesForms/>} />
        <Route path="/BranchList" element={<BranchList/>} />
      </Routes>
    </BrowserRouter>
    </main>
      
    </body>
  );
}
export default App;
