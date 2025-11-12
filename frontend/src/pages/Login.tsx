import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import login from '../assets/login.webp'
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"

interface LoginProps{
    email: string,
    password: string
}

const Login = () => {
    const {register,handleSubmit,formState : {errors}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const [showPassword,setShowPassword] = useState(false)

    const handleSubmitLogin = (data:LoginProps)=>{
        console.log(data)
    }
  return (
    <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
            <form className="w-full max-w-md bg-white p-8 rounded-lg  shadow-sm">
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-medium">Rabbit</h2>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
                <p className="text-center mb-6">Enter your user name and password</p>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input {...register('email')} type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
                </div>
                <div className="mb-4 relative">
                    <div className="absolute right-2 cursor-pointer bottom-0 -translate-y-[30%] " onClick={()=>setShowPassword(!showPassword)}>
                        {
                        showPassword ? 
                        <FiEye className="text-2xl"></FiEye>:
                        <FiEyeOff className="text-2xl"></FiEyeOff>
                        }
                    </div>
                    
                    <label className="block text-sm font-semibold mb-2">Password</label>
                    <input {...register('password')} type={showPassword ? "text" : "password"} className="w-full p-2 border rounded" placeholder="Enter your password" />
                </div>
                <button onClick={handleSubmit(handleSubmitLogin)} type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold
                hover:bg-gray-800 transition"> Signin</button>

                <p className="mt-6 text-center text-sm">
                    Don't have an account?
                    <Link to='/register' className="text-blue-500">
                    Register
                    </Link>
                </p>
            </form>
        </div>

        <div className="hidden md:block w-1/2 bg-gray-800">
            <div className="h-full flex flex-col justify-center items-center">
                <img src={login} alt="Login image" className="h-[700px] w-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Login
