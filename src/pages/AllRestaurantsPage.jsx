
/*import { Link } from 'react-router-dom' */

import Restaurantlist from "../components/Restaurantlist"
import Filter from "../components/Filter"

const AllRestaurantsPage = () => {
  return (
    <div>
        <h1 className='text-3xl text-center my-2 font-bold'>All Restaurants</h1>
        <Filter />
        <Restaurantlist/>
    </div>
    //here we will add the components for the All Restaurants page
  )
}

export default AllRestaurantsPage