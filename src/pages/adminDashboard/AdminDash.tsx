import { Outlet } from 'react-router-dom';
import Sidebar from './adminSideNav';
import NavBar from '../../components/NavBar';

const AdminDashboard = () => {
    return (
        <>
            <NavBar/>
        <div className="flex h-screen ">
            <Sidebar />
            <div className="flex-1 bg-gray-100 p-4">
                <Outlet />
            </div>
        </div>
        </>
    );
};

export default AdminDashboard;
