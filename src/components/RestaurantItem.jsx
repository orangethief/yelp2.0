//import {useState,useEffect} from 'react'

const RestaurantItem = ({ restaurant }) => {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <div>
            <div id="restaurant-item" className="bg-gray-300">
                <h1 className="text-center">{restaurant.name}</h1>
                <p className="text-center">{restaurant.city}</p>
                <button onClick={handleClick} className="bg-slate-700 text-white">See more</button>
            </div>
        </div>
    )
}

export default RestaurantItem