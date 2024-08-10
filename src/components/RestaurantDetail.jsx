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
            <div className="flex justify-center "><div className="p-6 m-5 w-full rounded-lg text-center bg-[#7CA280]">
            <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-xl">{restaurant.city}</p>
            <div>
            {restaurant.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p className="text-xl">{comment.text}</p>
                    </div>
                )
            })}
            </div> </div>
        </div>
        )}
        </>
        
    )
}

export default RestaurantDetail