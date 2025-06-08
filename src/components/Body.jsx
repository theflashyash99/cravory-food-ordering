import { useState, useEffect, useContext } from "react";
import resList from "../../API file/restList"; // Original list of restaurants
import shuffledResList from "../../API file/shuffledResList"; // Shuffled list for display
import RestaurantCard, {withPromotedLabel}  from "./RestaurantCard"; // Component to display individual restaurant details
import Shimmer from "./Shimmer"; // Loading placeholder component
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "react-chrome-dino";
import UserContext from "../utils/userContext";

const Body = () => {
  // State to hold the complete list of restaurants (for the filter)
  const [restaurants, setRestaurants] = useState([]);

  // State to hold the search input value
  const [searchText, setSearchText] = useState("");

  // State to hold the filtered list based on search or filters (for UI update)
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // higher order component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

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
        <h1 className="mt-32 flex justify-center font-sans font-bold">
          Look like you're offline!! Please check your internet connection.
        </h1>
        <div className="border border-solid border-black border-dotted m-16">
          <DinoGame />
        </div>
        <div>
          <h1 className="flex justify-center font-bold text-xl  mb-10">
            {" "}
            Press Space to Play!!!
          </h1>
        </div>
      </>
    );

    const {loggedInUser , setUserName} = useContext(UserContext);

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body mt-28 mb-3  ">
      {/* Filter Section */}
      <div className="filter flex justify-center h-25 m-[-20px] ">
        {/* Search Container */}
        <div className="search-container m-4 p-4">
          <input
            className="search-input border border-solid border-black rounded-lg h-8  px-36 justify-start"
            placeholder="Find your flavor..."
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // Update searchText state on input change
          />
          <button
            className="search-btn px-2  m-2  h-10  mr-10 bg-green-200  rounded-lg  "
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
        <div className="p-4 m-4 mx-[-55px] ">
          <div className="  bg-green-100 px-2 m-2  items-center justify-center flex rounded-lg h-10 bg-yellow-300 ">
            <button
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
          <div>
          <input
            className="search-input border border-solid border-black rounded-lg h-8  px-6 justify-start"
            placeholder="Change User Name"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)} // Update searchText state on input change
          />
          </div>

        </div>

        {/* Top Rated Restaurants Filter */}
      </div>

      {/* Restaurant Cards Container */}
      
      <div className="res-container flex flex-wrap  justify-center rounded-lg  ">
        {filteredRestaurants.map((res) => (
          <Link to="/restaurant/:resId" key={res.id}>

           {
             res.promoted ? ( <RestaurantCardPromoted 
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
            />) :

             ( <RestaurantCard
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
            />)




           }
          
           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
