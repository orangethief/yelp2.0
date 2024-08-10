import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        let ignore = false;
        const getRestaurant = async () => {
            try {
                const res = await fetch("/src/restaurants.json");
                const data = await res.json();
                if (!ignore) {
                    setRestaurant(data.restaurants[1]);
                }
            } catch (error) {
                console.log("Error fetching data", error)
            }
        }
        getRestaurant();

        return () => {
            ignore = true;
        }
    }, [])

    return (
        <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.city}</p>
        </div>
    )
}

export default RestaurantDetail