import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    let [listOfRestaurants, setListOfRestaurants] = useState(resLists);

    return (
        <div className="body">
            <div className="filter">
            <button className="filter-btn" onClick={() =>{
                const filterData = resLists.filter((el) => el.rating >= 4);
                setListOfRestaurants(filterData);
            }}
                > 
                Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((element,index) => (
                        <RestaurantCard key={index} resData = {element}/> 
                    ))
                }
            </div>
        </div>
    )
}

export default Body;