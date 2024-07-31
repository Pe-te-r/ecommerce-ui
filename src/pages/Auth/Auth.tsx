import NavBar from "../../components/NavBar"
import image from '../../assets/Login.jpeg'
import InputDiv from "../../components/InputDiv"
import { Form, useNavigate } from "react-router-dom"
import { LogIn } from "lucide-react"
import { useEffect, useState } from "react"
import { UseLoginUserMutationL, UseRegisterUserMutation } from "../../api/auth&usersSlice"
import Loading from "../../Loading/Loading"
import { useDispatch } from "react-redux"
import { addToast } from "../../features/toastSlice"

const Auth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const loginData = {
        email: '',
        password: ''
    }

    const registerData = {
        first_name: '',
        last_name: '',
        userName: '',
        phone: '',
        email: '',
        password: '',
        location_id: ''
    }

    const [loginInfo, setLoginData] = useState(loginData)
    const [registerInfo, setRegisterData] = useState(registerData)
    const [sendRegister, { data: registerResult, isSuccess: registerSuccess }] = UseRegisterUserMutation()
    const [login, setLogin] = useState(true)
    
    useEffect(() => {
        if (registerResult && registerSuccess) {
            if (registerResult?.results) {
                dispatch(addToast({ id: Date.now(),message: "Registered successfully! Now login", type: 'success' }));
                setLogin(true)
            } else if (registerResult?.error) {
                dispatch(addToast({ id: Date.now(),message: registerResult.error, type: 'error' }));
            }
        }
    }, [registerResult, registerSuccess])
    
    const [loginUser, { data: loginReslts, isSuccess: loginSucccess, error: loginErrorData, isLoading: LoginLoading, isError: loginError }] = UseLoginUserMutationL()

    useEffect(() => {
        if (loginReslts && loginSucccess) {
            if (loginReslts?.error) {
                dispatch(addToast({ id: Date.now(),message: loginReslts.error, type: 'error' }));
            } else if (loginReslts?.results) {
                dispatch(addToast({ id: Date.now(),message: 'Logged in successfully!', type: 'success' }));
                navigate('/')
            }
        }
        if (loginError) {
            console.log(loginErrorData)
        }
    }, [loginReslts, loginSucccess, loginError])

    const [currentStep, setCurrentStep] = useState(1)

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        if (login) {
            setLoginData({ ...loginInfo, [name]: value })
        } else {
            setRegisterData({ ...registerInfo, [name]: value })
        }
    }

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentStep(currentStep + 1)
    }

    const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrentStep(currentStep - 1)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (login) {
            loginUser(loginInfo)
            console.log("Login Data:", loginInfo)
        } else {
            sendRegister(registerInfo)
            console.log("Register Data:", registerInfo)
        }
    }

    return (
        <div className="min-h-full h-screen bg-customAuth">
            <NavBar />
            <div className="shadow-lg flex w-4/5 mx-auto h-4/5 my-10">
                <div style={{ backgroundImage: `url(${image})` }} className="w-1/2 h-full bg-no-repeat bg-cover bg-center"></div>
                <Form onSubmit={handleSubmit} className="bg-customLoginCompo w-1/2 flex flex-col justify-around h-full">
                    <h3 className="text-center font-bold font-serif text-[1.8rem]">{login ? "Login" : `Register - Step ${currentStep}`}</h3>
                    {login ? (
                        <>
                            <InputDiv label="Email" type="email" name="email" value={loginInfo.email} onChange={handleChange} />
                            <InputDiv label="Password" type="password" name="password" value={loginInfo.password} onChange={handleChange} />
                        </>
                    ) : (
                        <>
                            {currentStep === 1 && (
                                <>
                                    <InputDiv label="First Name" type="text" name="first_name" value={registerInfo.first_name} onChange={handleChange} />
                                    <InputDiv label="Last Name" type="text" name="last_name" value={registerInfo.last_name} onChange={handleChange} />
                                    <InputDiv label="Phone" type="text" name="phone" value={registerInfo.phone} onChange={handleChange} />
                                </>
                            )}
                            {currentStep === 2 && (
                                <>
                                    <InputDiv label="Email" type="email" name="email" value={registerInfo.email} onChange={handleChange} />
                                <InputDiv label="Username" type="text" name="userName" value={registerInfo.userName} onChange={handleChange} />
                                </>
                            )}
                            {currentStep === 3 && (
                                <>
                                    <InputDiv label="Password" type="password" name="password" value={registerInfo.password} onChange={handleChange} />
                                    <InputDiv label="Location ID" type="text" name="location_id" value={registerInfo.location_id} onChange={handleChange} />
                                </>
                            )}
                        </>
                    )}
                    <div className="w-4/5 mx-auto flex justify-between pt-2 pb-2 relative">
                        {
                            currentStep <= 1 &&
                            <button onClick={() => setLogin(!login)} type="button" className="bg-gray-500 py-2 px-4 rounded hover:bg-blue-600 absolute left-2">
                                <span className='flex items-center'><LogIn size={16} className='mr-2' />{login ? "Register now" : "Login now"}</span>
                            </button>
                        }
                        {login ? (
                            <button type="submit" className="bg-customLoginBtn py-2 px-4 rounded hover:bg-blue-600 absolute right-2">
                                <span className='flex items-center'><LogIn size={16} className='mr-2' />{LoginLoading ? <Loading /> : 'Login now'}</span>
                            </button>
                        ) : (
                            <div className="flex justify-between w-full">
                                {currentStep > 1 && (
                                    <button type="button" onClick={handlePrev} className="bg-gray-500 py-2 px-4 rounded hover:bg-blue-600">
                                        Previous
                                    </button>
                                )}
                                {currentStep <= 2 ? (
                                    <button type="button" onClick={handleNext} className="bg-customLoginBtn py-2 px-4 right-2 absolute rounded hover:bg-blue-600">
                                        Next
                                    </button>
                                ) : (
                                    <button type="submit" className="bg-customLoginBtn py-2 px-4 rounded hover:bg-blue-600">
                                        Register now
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="text-center">
                        {login && (
                            <button type="button" className="text-red-800">Forgot password? Reset</button>
                        )}
                    </div>
                </Form>
            </div>
            {/* <Toaster /> */}
        </div>
    )
}

export default Auth
