import { useState, useEffect, useContext } from "react";
import resList from "../../API file/restList";
import shuffledResList from "../../API file/shuffledResList";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DinoGame from "react-chrome-dino";
import UserContext from "../utils/UserContext";

const ITEMS_PER_PAGE = 12;

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // new

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRestaurants(shuffledResList);
      setFilteredRestaurants(shuffledResList);
    }, 10);
    return () => clearTimeout(timer);
  }, []);

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const totalPages = Math.ceil(filteredRestaurants.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const paginatedRestaurants = filteredRestaurants.slice(startIdx, endIdx);

  const handleSearch = () => {
    const filteredRes = restaurants.filter((res) =>
      res.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRes);
    setCurrentPage(1); // reset to first page
  };

  if (onlineStatus === false) {
    return (
      <div className="mt-32 px-4">
        <h1 className="text-center font-bold text-xl mb-4">
          Looks like you're offline! Please check your internet connection.
        </h1>
        <div className="border border-dotted border-black m-4 p-4">
          <DinoGame />
        </div>
        <h1 className="text-center font-bold text-xl mt-4">
          Press Space to Play!!!
        </h1>
      </div>
    );
  }

  if (restaurants.length === 0) return <Shimmer />;

  return (
    <div className="mt-28 mb-8 px-4 sm:px-8">
      {/* Search & Filters */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center w-full lg:w-auto gap-2">
          <input
            className="border border-black rounded-lg h-10 px-4 w-full sm:w-72"
            placeholder="Find your flavor..."
            type="text"
            value={searchText}
            data-testid="searchInput"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
          <button
            className="bg-yellow-300 hover:bg-yellow-400 px-4 py-2 rounded-lg w-full sm:w-auto"
            onClick={() => {
              const filteredList = resList.filter((res) => res.star > 4);
              setRestaurants(filteredList);
              setFilteredRestaurants(filteredList);
              setCurrentPage(1); // reset page on filter
            }}
          >
            Top Rated Restaurants
          </button>
          <input
            className="border border-black rounded-lg h-10 px-4 w-full sm:w-72"
            placeholder="Change User Name"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {paginatedRestaurants.map((res) => (
          <Link to={`/restaurant/${res.id}`} key={res.id}>
            {res.promoted ? (
              <RestaurantCardPromoted {...res} />
            ) : (
              <RestaurantCard {...res} />
            )}
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-4 text-sm font-medium">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ← Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 bg-red-500 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
