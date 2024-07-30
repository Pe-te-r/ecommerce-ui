import { Castle, ChartCandlestick, CircleUser, Headset, House, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [showAuth,setShowAuth] = useState(false)
    return (
        <div className="bg-customYellow flex shadow-md justify-between py-4 pl-0 font-sans text-[20px]">
            <div className="border">
                <h3 className="py-2 px-4  bg-customBlue font-bree rounded-md"><span className='flex items-center'>Kirinyaga Market <ChartCandlestick size={20} className='ml-3' /></span></h3>
            </div>
            <div className="flex w-2/5 justify-between">
                <Link to='/' className="bg-customBtn  py-2 px-4 rounded hover:bg-blue-600"><span className='flex items-center'> <House size={16} className='mr-2'/>Home</span></Link>
                <button className="bg-customBtn  py-2 px-4 rounded hover:bg-blue-600">Items</button>
                <button className="bg-customBtn  py-2 px-4 rounded hover:bg-blue-600"><span className='flex items-center'><Castle size={16} className='mr-2'/>House</span></button>
                <button className="bg-customBtn  py-2 px-4 rounded hover:bg-blue-600"><span className='flex items-center'><Headset size={16} className='mr-2'/>Contact</span></button>
                <button className="bg-customBtn  py-2 px-4 rounded hover:bg-blue-600"><span className='flex items-center'><LayoutDashboard size={16} className='mr-2'/>Dashboard </span></button>
            </div>
            <div>
                <button className='bg-customLogin py-2 px-4 rounded hover:bg-green-600' onClick={()=>setShowAuth(!showAuth)}><span className='flex items-center'><CircleUser size={16} className='mr-2'/>Account</span></button>
            </div>
            {showAuth && (
                <div className="absolute top-20 right-0 w-48 shadow-lg rounded-md mt-1  p-1 z-50" style={{backgroundColor: '#F2CD1F'}}>
                <Link to='/auth' className="w-full block hover:bg-gray-700 py-2 px-4 rounded mb-2 bg-gray-600 text-white" >
                    Register
                </Link>
                <Link to='/auth' className="w-full bg-gray-600 py-2 px-4 rounded block hover:bg-gray-700 text-white">
                    Login
                </Link>
                </div>
            )}
        </div>
    )
}

export default NavBar
