import { useState, useEffect } from "react";
import resList from "../../API file/restList";
import shuffledResList from "../../API file/shuffledResList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]); // Initially empty for all restarant
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // for filter

  // load data as useEffect comes to work
  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurants(shuffledResList);
      setFilteredRestaurants(shuffledResList); // Set data after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  // // Show shimmer while loading
  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Search here!"
            type="text"
            value={searchText} 
            onChange={(e) => setsearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = restaurants.filter(
                (res) =>
                  res.name &&
                  res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes); // these are the filter button that filter data according to the input value in the input field. As we try to change the data and search for some other thing then we'll not be able to search any this as we update the "restaurant state hook" and it only have the only the filtered data to resolve it we'll do - 
            }}
          >
            Search
          </button>
        </div>

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
        {filteredRestaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            cuisine={
              Array.isArray(res.cuisine) ? res.cuisine.join(", ") : res.cuisine
            }
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
