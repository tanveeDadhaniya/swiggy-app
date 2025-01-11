import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResturantDetail = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const menu = await (await fetch(MENU_API + resId)).json();
    setResInfo(menu);
  };
  return resInfo;
};

export default useResturantDetail;
