import { CDN_URL } from "../utils/constants";
const Restrocard = ({resdata})=>{
    return (
        <div className="restro-card">
            
            <div className="restro-logo">
                    <img alt="res-logo" src={{CDN_URL}
           +
          resdata.cloudinaryImageId
        }></img>
            </div>
            <h3>{resdata.name}</h3>
            <h4>{resdata.cuisines.join(", ")}</h4>
            <h4>{resdata.deliveryTime}</h4>
            <h4>{resdata.avgRatingString}</h4>
        </div>
    )
}
export default Restrocard;