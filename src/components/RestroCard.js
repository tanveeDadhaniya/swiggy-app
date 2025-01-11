import { useContext } from "react";
import { CDN_LINK } from "../utils/constants";
import UserContext from "../utils/userContext";

const RestroCard = (props) => {
  const { restroList } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    restroList.info;
  const { loggedInUserName } = useContext(UserContext);
  return (
    <div className="w-64 p-4 m-2 bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image with consistent size */}
      <img
        className="h-40 w-full object-cover rounded-t-lg"
        src={CDN_LINK + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        {/* Restaurant Name */}
        <h4 className="text-lg font-sans font-bold truncate">{name}</h4>
        
        {/* Cuisines and other details */}
        <div className="text-sm text-gray-600">
          <h5 className="restro-cuisine">{cuisines.join(", ")}</h5>
          <h5 className="restro-cost">{costForTwo}</h5>
          <h5 className="text-yellow-500">{avgRating}★</h5>
          <h5 className="restro-delivery-time">{sla.slaString}</h5>
          <h5><span className="font-semibold">Username : </span>{loggedInUserName}</h5>
        </div>
      </div>
    </div>
  );

};
// Higher order components
export const enhancedRestro = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-700 text-slate-100 px-2 mx-2 rounded-sm">Veg</label>
        <RestroCard {...props}/>
      </div>
    ) 
  }
}

export default RestroCard;
