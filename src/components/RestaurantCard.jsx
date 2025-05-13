const RestaurantCard = (props) => {
    const style = {
        backgroundColor: "#f0f0f0"
    };
    
    return (
        <div className="res-card" style={style}>
            <img
                className="res-logo"
                src={props.img} alt={props.alt} />
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.star}</h4>
            <h4 >{props.time}</h4>
        </div>

    )
}
 export default RestaurantCard;