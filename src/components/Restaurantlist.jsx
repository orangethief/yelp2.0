import { useState, useEffect } from 'react';
import RestaurantItem from './RestaurantItem.jsx';

const Restaurantlist = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        let ignore = false;
        const getRestaurants = async () => {
            try {
                const res = await fetch("/src/restaurants.json");
                const data = await res.json();
                if (!ignore) {
                    setRestaurantList(data.restaurants);
                }
            } catch (error) {
                console.log("Error fetching data", error)
            }
        }
        getRestaurants();

        return () => {
            ignore = true;
        }
    }, [])

    return (
        <> 
        <section id='restaurants-container' className='grid grid-cols-3 gap-4 m-4'>
            
            {restaurantList.map(restaurant => {
                return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>
            })}
        </section>
        </>
    )
}

export default Restaurantlist