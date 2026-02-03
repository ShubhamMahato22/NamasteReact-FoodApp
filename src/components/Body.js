console.log("restaurantList:", restaurantList);
console.log("isArray:", Array.isArray(restaurantList));

import Restrocard from "./Restrocard";
import {restaurantList} from "../utils/rawdata"
const Body = () =>{
    return (
        <div className="body">
           <div className="filter-btn">
               <button className="top-rated-rest"> Top rated restaurant</button>
           </div>
           <div className="res-container">
                {restaurantList.map((restaurant)=>(
                       <Restrocard  key={restaurant.info.id} resdata={restaurant.info}/>
                  ))}
           </div>
        </div>
    )
}

export default Body;