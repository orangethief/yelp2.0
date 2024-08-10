//import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const RestaurantItem = ({ restaurant }) => {
    
    

    return (
        <div>
            <div id="restaurant-item" className="bg-[#7CA280] rounded-xl border-2 border-[#57886C]">
                <h1 className="text-center text-2xl m-2 font-bold">{restaurant.name}</h1>
                <p className="text-center text-xl m-2">{restaurant.city}</p>
                <span className="flex justify-center"><button className="m-2 bg-[#57886C] text-white rounded-lg p-1 hover:bg-white hover:text-[#57886C]"><Link to={`/restaurant/${restaurant.id}`}>See More</Link></button></span>
            </div>
        </div>
    )
}

export default RestaurantItem