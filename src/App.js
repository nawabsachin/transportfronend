import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './service';
import Gallery from './gellary';
// import AboutPage from './AboutPage';
import AboutPage from './Pages/AboutPage';
import Form from './Form';
import ContactSection from './contact';
// import Navbar from "./Navbar"
import NavBarHarsh from './NavBarHarsh';
import Footer from './Footer';
import AllPages from './AllPages';
import PrivacyPolicy from './Pages/PrivacyPolicy';

import ContactPage from './Pages/ContactPage';
import ProductPage from './Pages/ProductPage';
import ServicesSection from './Pages/ServicePage';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import AdminRoutes from './pages/AdminRoutes';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import AdminRoutes from './component/AdminRoutes';

import ProductForm from './component/ProductForm';
import ProductList from './component/ProductList';
import DeliveryInfoPage from './Pages/deliverypage';
import DashboardMain from './component/DarshMain';
import ContactMessages from './component/ContactList';
import OrderTable from './component/OrderTable';





function App() {
  return (
<>
{/* <div className="content"> */}
        <BrowserRouter>
       {/* <AllPages></AllPages> */}
        <Routes>
          <Route path='/' element={<AllPages />}></Route>
          {/* <Route path="/" element={
            <div>
              <div className="hero-text"></div>
              <div className="hero-image"></div>
            </div>
          } /> */}

          <Route path="/src/Pages/ServicePage.js" element={<ServicesSection/>} />
          <Route path="/src/Pages/AboutPage.js" element={<AboutPage/>} />
          <Route path="/transport11/src/contact.js" element={<ContactSection/>} />
          <Route path="/src/Pages/ProductPage.js" element={<ProductPage />} />
          <Route path="/src/Pages/ContactPage.js" element={<ContactPage />} />
          <Route path="/src/Pages/PrivacyPolicy.jsx" element={<PrivacyPolicy></PrivacyPolicy>} />
          {/* <Route path="/form/:type" element={<Form />} />  */}

          <Route path="/transport11/src/Form.js" element={<Form />} />
          
          <Route path="/transport11/src/component/Login.jsx" element={<Login />} />
          <Route path="/transport11/src/component/Dashboard.jsx" element={<Dashboard />} />
          <Route path="/transport11/src/component/AdminRoutes.jsx" element={<AdminRoutes />} />
         
          <Route path="/transport11/src/component/ProductList.jsx" element={<ProductList />} />
          <Route path="/transport11/src/component/ProductForm.jsx" element={<ProductForm />} />
           <Route path="/transport11/src/component/OrderTable.jsx" element={<OrderTable />} />
          <Route path="/transport11/src/Pages/deliverypage.jsx" element={<DeliveryInfoPage />} />
           <Route path="/transport11/src/component/DarshMain.jsx" element={<DashboardMain />} />
              <Route path="/transport11/src/component/ContactList.jsx" element={<ContactMessages />} />
        </Routes>
      
        </BrowserRouter>
      {/* </div> */}

</>
  );
}

export default App;
