import { useState, useEffect } from 'react'

const RestaurantDetail = () => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        let ignore = false;
        const getRestaurant = async () => {
            try {
                const res = await fetch("/src/restaurants.json");
                const data = await res.json();
                if (!ignore) {
                    setRestaurant(data.restaurants[0]);
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
        <>
        {restaurant && (
            <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.city}</p>
            <div>
            {restaurant.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
            </div> 
        </div>
        )}
        </>
        
    )
}

export default RestaurantDetail