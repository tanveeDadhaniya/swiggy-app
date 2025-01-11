import { HiStar } from "react-icons/hi";
import { MENU_ITEM_IMAGE_CDN_LINK } from "../utils/constants";

const ItemList = ({ itemData }) => {
  let eachItem = { ...itemData };
  let { price, name, ratings, imageId, description, defaultPrice } = {
    ...eachItem,
  };

  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        {/* Item Details - Text on the Left */}
        <div className="flex-1 pr-4 text-left">
          <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">
            ₹ {price ? price / 100 : defaultPrice / 100}
          </p>
          <div className="flex items-center space-x-1 text-sm">
            <span>{ratings?.aggregatedRating?.rating || "No ratings"}</span>
            <HiStar className="text-yellow-500 w-5 h-5" />
          </div>
          <span className="text-xs text-gray-600">{description}</span>
        </div>

        {/* Item Image - Right */}
        <div className="flex-shrink-0 ml-4">
          <img
            src={MENU_ITEM_IMAGE_CDN_LINK + imageId}
            alt={name}
            className="w-24 h-24 object-cover rounded-lg"
          />
          <button className="bg-green-400 m-2 px-2 border">Add +</button>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
