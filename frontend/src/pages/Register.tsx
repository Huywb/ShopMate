import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import registerimage from '../assets/register.webp'
import { FiEye, FiEyeOff } from "react-icons/fi"
import { useState } from "react"
import { toast } from "sonner"

interface RegisterProps{
    email: string,
    password: string,
    confirmPassword: string
}

const Register = () => {
    const {register,handleSubmit,formState : {errors}} = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        }
    })

    const [showPassword,setShowPassword] = useState(false)
    const [showConfirmPassword,setShowConfirmPassword] = useState(false)

    const handleSubmitLogin = (data:RegisterProps)=>{
        if(data.password !== data.confirmPassword){
            toast("Password and confirmPassword need to correct")
        }else{
            console.log(data)
        }
    }
  return (
    <div className="flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
            <form className="w-full max-w-md bg-white p-8 rounded-lg  shadow-sm">
                <div className="flex justify-center mb-6">
                    <h2 className="text-xl font-medium">Rabbit</h2>
                </div>
                <h2 className="text-2xl font-bold text-center mb-6">Hey there!</h2>
                <p className="text-center mb-6">Register your user name and password</p>
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

                <div className="mb-4 relative">
                    <div className="absolute right-2 cursor-pointer bottom-0 -translate-y-[30%] " onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                        {
                        showConfirmPassword ? 
                        <FiEye className="text-2xl"></FiEye>:
                        <FiEyeOff className="text-2xl"></FiEyeOff>
                        }
                    </div>
                    
                    <label className="block text-sm font-semibold mb-2">Confirm Password</label>
                    <input {...register('confirmPassword')} type={showConfirmPassword ? "text" : "password"} className="w-full p-2 border rounded" placeholder="Enter your Confirm Password" />
                    
                </div>
                <button onClick={handleSubmit(handleSubmitLogin)} type="submit" className="w-full bg-black text-white p-2 rounded-lg font-semibold
                hover:bg-gray-800 transition"> Register</button>

                <p className="mt-6 text-center text-sm">
                   have an account?
                    <Link to='/login' className="text-blue-500">
                    Login
                    </Link>
                </p>
            </form>
        </div>

        <div className="hidden md:block w-1/2 bg-gray-800">
            <div className="h-full flex flex-col justify-center items-center">
                <img src={registerimage} alt="Login image" className="h-[700px] w-full object-cover" />
            </div>
        </div>
    </div>
  )
}

export default Register
