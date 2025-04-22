# Props.

- it's an concept of passing data dynamically into the component.

 ``` Syntax

const RestaurantCard = (props) => {
    return (
        <div className="res-card" style={style}>
            <img
                className="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yood4aumr1wbxed1odxk" alt="meghana-foods" />
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.star}</h4>
            <h4 >{props.time}</h4>
        </div>
 
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">

                <RestaurantCard name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="KFC" cuisine="Burger, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
                <RestaurantCard  name="Meghana Foods" cuisine="Biryani, North Indian, Asian" star="4.4 stars" time="38 min"/>
               </div>

        </div>
    )
}







`````