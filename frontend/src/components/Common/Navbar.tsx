import { Link } from 'react-router-dom'
import  MENU_ITEMS  from '../../contants/data'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import Search from './Search'

const Navbar = () => {
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
                <button className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                    <span className='absolute -top-1 bg-rabit-red text-white text-xs rounded-full px-2 py-0.5'>
                        4
                    </span>
                </button>
                
                <div className='overflow-y-hidden'>
                <Search />

                </div>

                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar
