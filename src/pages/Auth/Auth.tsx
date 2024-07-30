import NavBar from "../../components/NavBar"
import image from '../../assets/Login.jpeg'
import InputDiv from "../../components/InputDiv"
import { Form } from "react-router-dom"
import { LogIn } from "lucide-react"

const Auth = () => {
    const handleSubmit=(e: React.FormEvent) => {
        e.preventDefault()

    }
    return (
        <div className="min-h-full h-screen bg-customAuth">
            <NavBar/>
            <div className="shadow-lg flex w-4/5 mx-auto h-4/5 my-10">
                <div style={{backgroundImage: `url(${image})`, }} className="w-1/2 h-full bg-no-repeat bg-cover bg-center"></div>
                <Form onSubmit={handleSubmit} className="bg-customLoginCompo w-1/2 flex flex-col justify-around h-full">
                    <h3 className="text-center font-bold font-serif text-[1.8rem]">Login</h3>
                    <div className="">
                        <InputDiv label="Username" type="text" name="username"/>
                    </div>     
                    <div className="">
                        <InputDiv label="Email" type="email" name="email"/>
                    </div>      
                    <div className="">
                        <InputDiv label="Password" type="password" name="password"/>
                    </div> 
                    {/* <div className="">
                        <InputDiv label="Password" type="password" name="password"/>
                    </div>    */}
                    <div className="w-4/5 mx-auto flex justify-between pt-2 pb-2 relative">
                        <button type="submit" className="bg-gray-500  py-2 px-4 rounded hover:bg-blue-600 absolute left-2"><span className='flex items-center'><LogIn  size={16} className='mr-2'/>Register now </span></button>
                        <button type="submit" className="bg-customLoginBtn  py-2 px-4 rounded hover:bg-blue-600 absolute right-2"><span className='flex items-center'><LogIn  size={16} className='mr-2'/>Login now </span></button>
                    </div>
                    <div className=" text-center">
                        <button type="button" className="text-red-800 right-1/3">Forgot password? Reset</button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Auth
