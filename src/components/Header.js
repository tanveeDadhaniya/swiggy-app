import {LOGO_URL} from "../utils/contants"

const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header;