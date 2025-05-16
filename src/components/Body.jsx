import { useState, useEffect } from "react";
import resList from "../../API file/restList";
import shuffledResList from "../../API file/shuffledResList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]); // Initially empty

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurants(shuffledResList); // Set data after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // // Show shimmer while loading
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurants.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter((res) => res.star > 4);
            setRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {restaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            cuisine={Array.isArray(res.cuisine) ? res.cuisine.join(", ") : res.cuisine}
            star={res.star}
            time={res.time}
            img={res.img}
            alt={res.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
