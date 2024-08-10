import { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem.jsx';

const Restaurantlist = ({restaurants}) => {
    return (
        <>
        <section id='restaurants-container' className='grid grid-cols-3 gap-4'>
            {restaurants.map(restaurant => {
                return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            })}
        </section>
        </>
    )
}

export default Restaurantlist