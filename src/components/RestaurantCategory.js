import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({category, showItem,handleClick}) => {
//   const handleClick = () => {
//     setShowItem();
//   };

  return (
    <div className="w-9/12 mx-auto">
      {/* Item Header */}
      <div
        className="cursor-pointer p-4 mb-2 bg-gray-100 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-shadow"
        onClick={handleClick}
      >
        <span className="text-lg font-semibold text-gray-800">
          {category.title} ({category.itemCards.length})
        </span>
        <span className="text-lg text-gray-600">⬇️</span>
      </div>

      {/* Item List */}
      {showItem && (
        <div className="space-y-4">
          {category?.itemCards.map((item, index) => (
            <ItemList key={index} itemData={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
