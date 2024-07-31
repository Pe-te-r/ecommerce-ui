import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import AdminDash from './pages/adminDashboard/AdminDash';
import AdminLocation from './pages/adminDashboard/adminLocations/AdminLocation';
function App() {
  
  const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth/> },
    { path: '/admin', element: <AdminDash/> ,
      children:[
        {path:'/admin/locations',element: <AdminLocation/>}
      ]
    }
  ])
  return (
    
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
