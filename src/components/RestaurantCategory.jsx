import React from "react";

const RestaurantCategory = ({ data }) => {
  return (
    <div className="flex">
      <div className=" w-[500]  m-auto my-4 bg-gray-50 shadow-lg p-4">
        <span className="font-bold">{data.name}</span>
        <h3> ₹{data.price}</h3>
        <h2>⭐({data.rating})</h2>
        <p className=" font-thin text-xs">  🍽️ Order from here the best food in town – handpicked just for your cravings!<br />
  From sizzling Tandoori delights to creamy Paneer Butter.</p>
      </div>

     <div className=' '>
           <div className="w-44 rounded-md h-24 mt-4 overflow-hidden object-fill   shadow-lg  ">
            <img  src={data.image} />
            </div>
            <button className=" shadow-xl rounded-lg font-bold text-white bg-green-500 border border-solid p-1 absolte px-[42px] py-2 ">Add to Cart!</button>
        </div> 



    </div>
  );
};

{
  

}

export default RestaurantCategory;
