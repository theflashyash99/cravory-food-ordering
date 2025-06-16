import menuItems from "../../API file/menuItems.js";
import allmenu from "../../not nedd/allmenu.js";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { MENU_API } from ".././utils/constant.js";

const FullRestaurantMenu = () => {
  const categories = menuItems;

  console.log(menuItems);

  return (
    <div className="mt-32">
      <h1 className="flex justify-center font-bold text-3xl my-10 ">
        Our Menu!
      </h1>
      <div className=" flex flex-col items-center">
        {categories.map((category,) => (
          <RestaurantCategory data={category} key={Math.random()} />
        ))}
      </div>

      {/* <div className="flex flex-wrap ">
        {menuItems.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.name} width="200" />
            <h2>{item.name}</h2>
            <p>Rating: {item.rating}</p>
            <p>Price: ₹{item.price}</p>
            <button>ADD</button>
            <hr />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FullRestaurantMenu;
