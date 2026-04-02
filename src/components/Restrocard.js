import {CDN_URL} from "../utils/constants";
const Restrocard = ({resdata})=>{
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        deliveryTime
    } = resdata;
    return (
        <div className="restro-card">
            
            <div className="restro-logo">
                    <img alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{avgRatingString}</h4>
        </div>
    )
}
export default Restrocard;