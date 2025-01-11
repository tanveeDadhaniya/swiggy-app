import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantDetail from "../utils/useResturantDetail";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HiLocationMarker, HiStar } from "react-icons/hi"; // Heroicons
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantDetail = () => {
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-600">
        Looks like you're offline! Please check your internet connection.
      </h1>
    );
  }
  const { resId } = useParams();

  const [activeIndex, setActiveIndex] = useState(0);

  const restaurantData = useResturantDetail(resId);

  if (!restaurantData) {
    return <Shimmer />;
  }
  const restaurantDetails = restaurantData?.data?.cards[2]?.card?.card?.info;
  const restaurantCategory =
    restaurantData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index); // Toggle the visibility
  };
  const { name, avgRating, costForTwoMessage, cuisines, areaName, sla } =
    restaurantDetails;

  return (
    <div className="text-center bg-gray-50 py-6">
      {/* Restaurant Details */}
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
          <div className="flex justify-center items-center space-x-2 text-lg text-gray-600 mt-2">
            <div className="flex items-center space-x-1">
              <HiStar className="text-yellow-500 w-5 h-5" />
              <span>{avgRating}</span>
            </div>
            <span>-</span>
            <p>{costForTwoMessage}</p>
          </div>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-600 mt-2">
            <div className="flex items-center space-x-1">
              <HiLocationMarker className="text-gray-600 w-5 h-5" />
              <span>{areaName}</span>
            </div>
            <p className="text-gray-500">|</p>
            <p>{sla?.slaString}</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">{cuisines?.join(", ")}</p>
        </div>
      </div>
      {/* Restaurant Category */}
      <div className="flex flex-col items-center mt-8">
        {restaurantCategory.map((category, index) => (
          <RestaurantCategory
            key={index}
            category={category.card.card}
            showItem={index === activeIndex}
            handleClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
