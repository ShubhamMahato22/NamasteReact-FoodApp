import Restrocard from "./Restrocard";
import { restaurantList } from "../utils/rawdata";
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants"
import Shimmer from "./Shimmer";
console.log(SWIGGY_API_URL);
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants]= useState([]);
  const [searchItem, setSearchItem] = useState("");
 
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };
    if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-btn">
        <div className="Search">
          <input
            className="Search-input"
            type="text"
            placeholder=" "
            value={searchItem}
            onChange={(e) => {
               setSearchItem(e.target.value);
            }}
          ></input>
          <button onClick={()=>{
           const filteredList = listOfRestaurants.filter((res) =>
           res.info.name.toLowerCase().includes(searchItem.toLowerCase())
            );
            setFilteredListOfRestaurants(filteredList);
          }}>Search</button>
        </div>
        <button
          className="top-rated-rest"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3,
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          {" "}
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurants?.map((restaurant) => (
          <Restrocard key={restaurant.info.id} resdata={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
