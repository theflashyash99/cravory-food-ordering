import resList from '../../API file/restList';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {}}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {resList.map((resList) => (
          <RestaurantCard
            key={resList.id}
            name={resList.name}
            cuisine={resList.cuisine}
            star={resList.star}
            time={resList.time}
            img={resList.img}
            alt={resList.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
