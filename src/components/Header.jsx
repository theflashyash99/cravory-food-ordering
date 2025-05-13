import {LOGO_URL} from '../utils/constant.js'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <img src={img1} alt="qw"/> // not working ++++++++++++++++++++++++++++++++++++++++ */}

                </ul>

            </div>
        </div>
    )

}

export default Header;