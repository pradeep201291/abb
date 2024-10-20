import { logo, visibility } from "../../Utils/Icons";
import SignUpImg from "../../Assets/Login/signUp.svg";
import AppleImg from "../../Assets/Login/apple.png";
import GoogleImg from "../../Assets/Login/google.png";
import FBImg from "../../Assets/Login/fb.png";
import { useNavigate } from "react-router-dom";
import React from "react";

import "./signUp.css";

const SignUp = () => {
    const [firstname, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const naviagteToHome = (path = "") => {
    navigate(path);
  };

  const handleSignUp = () => {
    console.log(firstname, lastName, email, password)
    let userDetails = JSON.parse(sessionStorage.getItem('userProfileDetails'))
    userDetails?.length > 0 ? userDetails = userDetails : userDetails = [];
    const obj = {
        firstname: firstname,
        lastName: lastName,
        email: email,
        password: password
    }
    userDetails.push(obj)
    sessionStorage.setItem("userProfileDetails", JSON.stringify(userDetails))
    navigate('/login')
  }
  return (
    <div className="Login_Container">
      <div className="Login_Header" onClick={naviagteToHome}>
        <span className="Logo">{logo()}</span>
        <span className="Heading">
          <h2>Genix Auctions</h2>
        </span>
      </div>

      <div className="Login_Details_Wrapper signup_wrapper">
        <div className="Form_Wrapper">
          <div className="Form_Top">
            <h3 className="Heading">Sign up</h3>
            <span className="Sub_Text">
              New bidders, as soon as you have submitted your information you
              will be eligible to bid in the auction.
            </span>
          </div>
          <div className="Input_Container">
            <div className="Input_Wrapper">
              <label>First Name</label>
              <input type="email" placeholder="Olivia" onChange={(e)=>setFirstName(e.target.value)}/>
            </div>

            <div className="Input_Wrapper">
              <label>Last Name</label>
              <input type="email" placeholder="Rhye" onChange={(e)=>setLastName(e.target.value)}/>
            </div>

            <div className="Input_Wrapper">
              <label>Email Address</label>
              <input type="email" placeholder="hello@example.com" onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className="Input_Wrapper">
              <label>
                <span>Password</span>
                <span className="Forgot_pass">Forgot Password</span>
              </label>

              <input type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
              <span className="Eye_Icon">{visibility()}</span>
            </div>
          </div>

          <div className="Details_Bottom_Wrapper">
            <div className="Check_wrapper">
              <input type="checkbox" />
              <span>Keep me signed in</span>
            </div>
            <button onClick={handleSignUp}>Continue</button>
          </div>

          <div className="Social_Login_Container">
            <div className="Line_Wrapper">
              <div className="Line"></div>
              <span>or sign up with</span>
              <div className="Line"></div>
            </div>

            <div className="Button_Wrapper">
              <button>
                <img src={GoogleImg} alt="Google.png" />
                Google
              </button>
              <button>
                <img src={FBImg} alt="FB.png" />
                Apple
              </button>
              <button>
                <img src={AppleImg} alt="Apple.png" />
                Facebook
              </button>
            </div>

            <div className="Sign_up_text_wrapper" onClick={() => naviagteToHome('/login')}> 
              <span>
                Want to know more?{" "}
                <span className="Sign_up_text">Auction Rules</span>
              </span>
            </div>
          </div>
        </div>
        <div className="Img_Container">
          <div className="Img_Wrapper">
            <img src={SignUpImg} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
