import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
function App() {
  
  const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/auth', element: <Auth/> }
  ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
