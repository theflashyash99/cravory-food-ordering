import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=18495&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setresInfo(json.data)
  };

  if (resInfo === null) return (<Shimmer/>)
  
  const info = resInfo?.cards[2]?.card?.card?.info;

const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card?.card?.itemCards;

const allItems = itemCards?.map((item) => item?.card?.info);

console.log("All Menu Items:", allItems);


  const name = info?.name;
  const cuisines = info?.cuisines;
  const costForTwoMessage = info?.costForTwoMessage;


  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>

      <ul>Menu</ul>
     {itemCards.map(item => <li  key={item.card.info.id}>{item.card.info.name} - {"Rs - "}{item.card.info.price/100}</li>)}
    </div>
  ); 
};

export default RestaurantMenu;
