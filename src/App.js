import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './pages/Home';
import LoginForm from './components/Home/LoginForm';
import Signup from './components/Home/Signup';
import './styles/Global.css';
import Carousel from './components/Home/Carousel';
import CommunitySection from './components/Home/CommunitySection';
import About from './components/Home/About';
import DashBoardUsuario from './pages/DashBoardUsuario';
import DashBoardEmpresa from './pages/DashBoardEmpresa';
import NavbarUsuario from './components/DashboardUsuario/NavbarUsuario';
import NavbarBusiness from './components/DashboardEmpresa/NavbarBusiness';
import UserProfile from './components/DashboardUsuario/UserProfile';
import Sidebar from './components/FeedOportunidades/Sidebar';
import PropostaProjetos from './components/FeedOportunidades/PropostaProjetos';

const Main = () => {
  return (
    <>
       <Routes>
        <Route path="/dashboardUsuario" element={<NavbarUsuario />} />
        <Route path="/userProfile" element={<NavbarUsuario />} />
        <Route path="/dashboardEmpresa" element={<NavbarBusiness />} />
        <Route path="/oportunidades" element={<PropostaProjetos />} />
        <Route path="*" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicos" element={<Carousel />} />
        <Route path="/comunidade" element={<CommunitySection />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboardUsuario" element={<DashBoardUsuario />} />
        <Route path="/dashboardEmpresa" element={<DashBoardEmpresa />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;