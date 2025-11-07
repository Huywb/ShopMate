import { Link } from 'react-router-dom'
import  {MENU_ITEMS}  from '../../contants/data'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Search from './Search'
import CartDrawer from '../Layout/CartDrawer'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen,setDrawerOpen] = useState(true)
    const [navDrawerOpen,setNavDrawerOpen] = useState(false)

    const togggleNavDrawer = ()=>{
        setNavDrawerOpen(!navDrawerOpen)
    }

    const toggleDrawer = ()=>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-26'>
            <div>
                <Link to='/' className='text-2xl font-medium'>
                    ShopMate
                </Link>
            </div>

            <div className='hidden md:flex space-x-6'>
                {
                    MENU_ITEMS.map((item : any) => (
                        <Link to={item.link} className='text-gray-700 cursor-pointer hover:text-black text-sm font-medium uppercase' key={item.name}>
                            {item.name}
                        </Link>
                    ))
                }
            </div>

            <div className='flex items-center space-x-4'>
                <Link to='/profile' className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700'></HiOutlineUser>
                </Link>
                <button onClick={toggleDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700 cursor-pointer' />
                    <span className='absolute -top-1 bg-rabit-red text-white text-xs rounded-full px-2 py-0.5'>
                        4
                    </span>
                </button>
                
                <div className='overflow-y-hidden'>
                <Search />

                </div>

                <button onClick={togggleNavDrawer} className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}/>

        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white
            shadow-lg transform transition-transform duration-300 flex flex-col z-50
            ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`
        }>
            <div className='flex justify-end p-4'>
                <button onClick={togggleNavDrawer}>
                    <IoMdClose  className='w-6 h-6 text-gray-600 cursor-pointer'/>
                </button>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav>
                    {
                        MENU_ITEMS.map((item : any) => (
                            <Link to={item.link} onClick={togggleNavDrawer} key={item.name} className='block mb-3 text-gray-600 hover:text-black cursor-pointer'>
                                {item.name}
                            </Link>
                        ))
                    }
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar
