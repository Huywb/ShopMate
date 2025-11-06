import React, { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const Search = () => {

    const [searchItem,setSearchItem] = useState('')
    const [open,setOpen] = useState(false)

    const handleOpenSearchBar = ()=>{
        setOpen(!open)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("search",searchItem)
        setOpen(false)
    }
  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${open ? 
        'absolute top-0 left-0 w-full bg-white h-24 z-50' : 'w-auto'
    }
    `}>
        {
            open ? 
            (
                <form onSubmit={handleSearch} className='relative flex items-center justify-center w-full'>
                    <div className='relative w-1/2'>
                        <input 
                            type="text" 
                            placeholder='Search...'
                            onChange={(e)=>setSearchItem(e.target.value)}
                            value={searchItem}
                            className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none
                            w-full placeholder:text-gray-700
                            '   
                        />
                        
                    <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                        <HiMagnifyingGlass className='h-6 w-6' />
                    </button>
                    </div>
                    <button type='button' onClick={handleOpenSearchBar} className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800'>
                        <HiMiniXMark className='h-6 w-6' />
                    </button>
                </form>
            ): 
            (
                <button onClick={handleOpenSearchBar} className='cursor-pointer '>
                    <HiMagnifyingGlass className='h-6 w-6 text-gray-700 hover:text-black space-x-4' />
                </button>
            )
        }
    </div>
  )
}

export default Search
