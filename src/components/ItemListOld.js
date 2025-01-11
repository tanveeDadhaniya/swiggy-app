import { useState } from "react";
import RestaurantCategory from "./RestaurantCategoryold";

const ItemList = (props) => {
  let { data } = { props };
console.log(data)
//   const { restaurantCategory } = data.itemData;
// console.log(restaurantCategory)
  const [restaurantCategoryList, setRestaurantCategoryList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {restaurantCategory?.slice(2, -2).map((item, index) => {
        return (
          <div className="mb-4 border-b" key={index}>
            <button
              className="w-full text-lg text-blue-600 hover:text-blue-800 py-2"
              onClick={() => {
                setActiveIndex(activeIndex === index ? null : index); // Toggle active index
                setRestaurantCategoryList(item.card.card.itemCards);
              }}
            >
              <h3 className="font-semibold">
                {item?.card?.card?.title}{" "}
                <span className="text-sm text-gray-500">
                  ({item?.card?.card?.itemCards?.length})
                </span>
              </h3>
            </button>

            {activeIndex === index && (
              <div className="active mt-4">
                {restaurantCategoryList?.map((menuItem) => {
                  return (
                    <RestaurantCategory
                      key={menuItem.card.info.id}
                      menuItem={menuItem.card.info}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
