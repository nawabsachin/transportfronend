import { Navigate, Outlet } from 'react-router-dom';

const AdminRoutes = () => {
  const isAuth = localStorage.getItem('admin-auth');
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
