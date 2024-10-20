import { downArrow, logo, translate } from "../../Utils/Icons";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import ProfileImage from '../../Assets/Login/Dropdown.svg'

const Header = () => {
  const navigate = useNavigate();
  const naviagteTo = (path) => {
    console.log(typeof path, path);
    navigate(path);
  };
  const [isUserLoggedIn] = React.useState(
    JSON.parse(sessionStorage.getItem("isUserLoggedIn"))
  );
  return (
    <>
      <header className="Header_Container">
        <div className="Header_Wrapper">
          <div className="Header_Left" onClick={() => naviagteTo("/")}>
            <span className="Logo">{logo()}</span>
            <span className="Heading">
              <h2>Genix Auctions</h2>
            </span>
          </div>

          <div className="Header_Right">
            <span className="Nav_Section">
              <nav>
                <span>Actions {downArrow()}</span>
                <span>Bidding {downArrow()}</span>
                <span>About Us {downArrow()}</span>
                <span className="Translate">
                  {translate()}English {downArrow()}
                </span>
              </nav>
            </span>
            {!isUserLoggedIn && (
              <span className="Btn_Section">
                <button
                  className="Login_Btn"
                  onClick={() => naviagteTo("/login")}
                >
                  Login
                </button>
                <button
                  className="Started_Btn"
                  onClick={() => naviagteTo("/signUp")}
                >
                  Get Started
                </button>
              </span>
            )}
            {isUserLoggedIn && (
              <img src={ProfileImage}></img>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
