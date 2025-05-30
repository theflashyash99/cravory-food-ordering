import { useState, useEffect } from "react";
import resList from "../../API file/restList"; // Original list of restaurants
import shuffledResList from "../../API file/shuffledResList"; // Shuffled list for display
import RestaurantCard from "./RestaurantCard"; // Component to display individual restaurant details
import Shimmer from "./Shimmer"; // Loading placeholder component
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "react-chrome-dino";

const Body = () => {
  // State to hold the complete list of restaurants (for the filter)
  const [restaurants, setRestaurants] = useState([]);

  // State to hold the search input value
  const [searchText, setSearchText] = useState("");

  // State to hold the filtered list based on search or filters (for UI update)
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect to simulate data fetching on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      // Set both the complete and filtered restaurant lists after 2 seconds
      setRestaurants(shuffledResList);
      setFilteredRestaurants(shuffledResList);
    }, 2000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  // Conditional rendering: show Shimmer component while data is loading

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <>
        <h1>
          Look like you're offline!! Please check your internet connection.
        </h1>
        <DinoGame />
        
      </>
    );

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* Filter Section */}
      <div className="filter">
        {/* Search Container */}
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Search here!"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state on input change
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter restaurants based on the search text restaurant to filter from all and setFilteredRestaurant to to set the filter value in filter
              const filteredRes = restaurants.filter(
                (res) =>
                  res.name &&
                  res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes); // Update the filtered list
            }}
          >
            Search
          </button>
        </div>

        {/* Top Rated Restaurants Filter */}
        <button
          className="filter-btn"
          onClick={() => {
            // Filter restaurants with a star rating greater than 4
            const filteredList = resList.filter((res) => res.star > 4);
            setRestaurants(filteredList); // Update the complete list
            setFilteredRestaurants(filteredList); // Update the filtered list
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards Container */}
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <Link to="/restaurant/:resId" key={res.id}>
            <RestaurantCard
              key={res.id}
              name={res.name}
              cuisine={
                Array.isArray(res.cuisine)
                  ? res.cuisine.join(", ")
                  : res.cuisine
              }
              star={res.star}
              time={res.time}
              img={res.img}
              alt={res.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
