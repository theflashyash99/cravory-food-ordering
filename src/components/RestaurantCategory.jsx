import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { toast } from "react-toastify";

const RestaurantCategory = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    dispatch(addItems(data));
    toast.success(`${data.name} added to cart!`);
    console.log(data);
  };

  return (
    <div className="p-3 px-6 flex justify-center">
      <div className="flex flex-col sm:flex-row max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        
        {/* Left Section: Info */}
        <div className="flex-1 p-3 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-1">{data.name}</h2>
            <p className="text-gray-700 text-sm">₹{data.price}</p>
            <p className="text-yellow-600 font-medium text-sm">⭐ {data.rating}</p>
            <p className="text-xs text-gray-500 mt-2">
              🍽️ Order from here the best food in town – handpicked just for your cravings!<br />
              From sizzling Tandoori delights to creamy Paneer Butter.
            </p>
          </div>

          <button
            onClick={() => handleAddItem(data)}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-1.5 px-4 rounded self-start"
            data-testid="foodItemInCart"
          >
            Add to Cart
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-full sm:w-40 h-40 sm:h-auto">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
