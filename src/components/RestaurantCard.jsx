const RestaurantCard = (props) => {
  const style = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div
      className="res-card m-2 mr-0 ml-0  mb-[-8px] p-4 w-[250px] rounded-lg  h-[350px] border-8 border-solid border-white    "
      style={style}
    >
      <img
        className="res-logo rounded-lg w-[250px] h-48  object-cover "
        src={props.img}
        alt={props.alt}
      />
      <h3 className="font-bold ">{props.name}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.star}</h4>
      <h4>{props.time}</h4>
    </div>
  );
};

// higher order component


 export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return (
      <div>
      <label className="absolute bg-black text-white p-2 m-2 rounded-lg ">Promoted</label>
      <RestaurantCard {...props}/>

      </div>
    )

  }
};


export default RestaurantCard;
