import RestroCard, { enhancedRestro } from "./RestroCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body = () => {
  let [listOfRestaurant, setlistOfRestaurant] = useState([]);
  let [filterListOfRestaurant, setfilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUserName, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchRestaurantList();
  }, []);
  // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  const fetchRestaurantList = async () => {
    let dataList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let jsonData = await dataList.json();
    setlistOfRestaurant(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterListOfRestaurant(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>
        Look's Like you are Offline!! Please check your internet connection.
      </h1>
    );
  }

  const VegRestro = enhancedRestro(RestroCard);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="px-4">
        <input
          type="text"
          className="bg-slate-50 border m-4"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="bg-blue-300 px-4 border"
          onClick={() => {
            let filteredRestaurant = listOfRestaurant.filter((res) => {
              return (
                res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res?.info?.cuisines
                  .join(", ")
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
            });
            setfilterListOfRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="p-2 bg-blue-600 border-collapse text-white m-4"
          onClick={() => {
            let filteredRestaurant = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilterListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
        <span>Enter Name : </span>
        <input
          className="border border-black px-2"
          value={loggedInUserName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>

      <div className="grid grid-cols-5">
        {filterListOfRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurantmenu/" + restaurant.info.id}
            >
              {restaurant.info?.veg ? (
                <VegRestro restroList={restaurant} />
              ) : (
                <RestroCard restroList={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
