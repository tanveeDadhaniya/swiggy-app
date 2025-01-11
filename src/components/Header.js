import { useState , useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";


const Header = () => {
  const [btnName,setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUserName} = useContext(UserContext)
  return (
    <div className="flex justify-between bg-gray-50">
      <div className="logo-container">
        <img
          className="w-40 m-2 p-2"
          src={LOGO_URL}
        ></img>
      </div>
      <div className="">
        <ul className="flex p-4 m-4">
          <li className="p-2 m-2">
            {/* <div class= {onlineStatus ? "green-dot": "red-dot"}></div> */}
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-2 m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 m-2">
            <Link>Cart</Link>
          </li>
          <li className="p-2 m-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-2">
            <button className="px-4 bg-blue-200" onClick={() => {
              btnName === "Login" ?
              setBtnName("Logout") :
              setBtnName("Login")
            }}>{btnName}</button>
          </li>
          <li className="p-2 m-2">
            <span className="font-semibold"> {loggedInUserName}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;