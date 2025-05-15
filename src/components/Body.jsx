import { useState } from "react";
import resList from "../../API file/restList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // 1. Create a state to hold the restaurant list
  const [restaurants, setRestaurants] = useState(resList); 

  return (
    <div className="body">
      <div className="filter">
        {/* 2. On button click, update the state with filtered list */}
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
        {/* 3. Render the current state (filtered or full list) */}
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
