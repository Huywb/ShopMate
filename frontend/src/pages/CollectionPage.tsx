import { useEffect, useRef, useState } from "react"
import { PlaholderProducts } from "../contants/data"
import { FaFilter } from "react-icons/fa"
import FilterSiderBar from "../components/Products/FilterSiderBar"

const CollectionPage = () => {
    const [products,setProducts] = useState([])
    const siderBarRef = useRef(null)
    const [showSiderBar,setShowSiderBar] = useState(false)

    const handleShowSiderBar = ()=>{
        setShowSiderBar(!showSiderBar)
    }

    const handleClickOutSide = (e:MouseEvent)=>{
        if(siderBarRef.current && !siderBarRef.current.contains(e.target)){
            setShowSiderBar(false)
        }
    }

    useEffect(()=>{
        setProducts(PlaholderProducts)
        document.addEventListener("mousedown",handleClickOutSide)
        return () => {
    document.removeEventListener("mousedown", handleClickOutSide);
  };
    },[])
  return (
    <div className="flex flex-col lg:flex-row">
      <button onClick={handleShowSiderBar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" /> Filters
      </button>

      <div ref={siderBarRef} className={`${showSiderBar ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 z-50 left-0
      w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSiderBar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
      </div>
    </div>
  )
}

export default CollectionPage
