import menuItems from "../../API file/menuItems.js";

const FullRestaurantMenu = () => {
  return (
    <>
      <h1>Our Menu!</h1>

      <div>
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
      </div>
    </>
  );
};

export default FullRestaurantMenu;
