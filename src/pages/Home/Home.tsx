import NavBar from "../../components/NavBar"
import homeImage from '../../assets/home.jpeg'
import { Barcode } from "lucide-react"

const Home = () => {
    return (
        <div className="min-h-full h-screen bg-customHome">
            <NavBar/>
            <div className="w-4/5 h-4/5 bg-no-repeat bg-cover bg-center	my-10 mx-auto relative" style={{backgroundImage: `url(${homeImage})`, }}>        
                <button className="bg-gray-600 text-white absolute m-2 left-0 top-0 font-bold py-2 px-4 rounded hover:bg-gray-700">Get Started</button>
                <button className="bg-gray-600 text-white absolute m-2 right-0 bottom-0 font-bold py-2 px-4 rounded hover:bg-gray-700"><span className='flex items-center'> <Barcode size={16}  className='mr-2'/>Buy</span></button>
            </div>
        </div>
    )
}

export default Home

