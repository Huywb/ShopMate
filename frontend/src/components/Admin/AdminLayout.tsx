import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { MENU_ADMIN } from '../../contants/data'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { CgLogOut } from "react-icons/cg";

const AdminLayout = () => {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [showwSiderBarAdmin,setShwoSiderBarAdmin] = useState(false)

    const handleToggleShow = ()=>{
        setShwoSiderBarAdmin(!showwSiderBarAdmin)
    }

    const handleLogOut = ()=>{  
        navigate('/')
    }

  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>
      
      <div className='flex md:hidden p-4 bg-gray-900 text-white z-20'>
        <button onClick={handleToggleShow}>
            <FaBars size={24}/>
        </button>
        <h1 className='ml-4 text-xl font-medium '>Admin Dashboard</h1>
      </div>

      {showwSiderBarAdmin && (
        <div
            className="fixed inset-0 k bg-opacity-50 z-40 md:hidden"
            onClick={() => setShwoSiderBarAdmin(false)}
        ></div>
        )}
      
        
      <div className={`${showwSiderBarAdmin ? 'translate-x-0' : '-translate-x-full'} md:static md:translate-x-0 text-white p-4 px-8  w-90 h-screen z-50 bg-gray-900 transition-transform duration-300 absolute top-0 left-0`}>
            <h1 className='text-4xl font-bold mb-5'>Rabbit</h1>
            <Link to='/admin/dashboard' className='px-8 font-semibold text-xl w-full'>Admin Dashboard</Link>
            <div className='flex flex-col gap-6 py-4'>
                {
                    MENU_ADMIN.map((item,index)=>(
                        <Link key={index} className={`w-full flex gap-2 items-center text-xl ${pathname === item.link ? "bg-gray-600" : ''} py-4 p-2 rounded-lg`} to={`${item.link}`}>
                            {item.icons} {item.name}
                        </Link>
                    ))
                }
            </div>
            <button onClick={handleLogOut} className='flex gap-2 justify-center items-center w-full bg-red-600 p-2 rounded-lg hover:bg-red-500 transition duration-300 cursor-pointer'>
                <CgLogOut size={24}/>
                Logout
            </button>
      </div>

      <div className=' p-16 overflow-auto w-full h-screen '>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AdminLayout
