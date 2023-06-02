import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Resetpassword from './pages/Resetpassword';
import Forotpassword from './pages/Forgotpassword';
import Customers from './pages/Customers';
import Addproduct from './pages/Addproduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer" element={<Customers />} />
          <Route path="add-product" element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;