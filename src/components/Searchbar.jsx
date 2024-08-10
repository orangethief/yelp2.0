import {FaSearch} from 'react-icons/fa'

const Searchbar = () => {
  return (
    <>
     <div className="flex items-center justify-center space-x-2 sm:space-x-4 w-100% mx-auto px-6 bg-[#57886c] h-60">
        <input type="text" placeholder="Search for restaurants..." className="w-full sm:w-3/6 bg-[#F3F7F3] text-[#57886c] px-6 py-3 rounded" />
        <button className="w-14 rounded-lg hover:text-slate-950 hover:animate-pulse bg-white">
          <span className="flex h-10 items-center justify-center">
            <FaSearch className="text-[#57886c]" /> 
          </span>
        </button>
      </div>
    </>
  )
}

export default Searchbar