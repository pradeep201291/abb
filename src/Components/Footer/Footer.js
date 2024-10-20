import { logo, copyRights } from "../../Utils/Icons";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="Footer_Container">
      <div className="Footer_Wrapper">
        <div className="Left_Section">
          <div className="Logo_Wrapper">
            <span className="Logo">{logo()}</span>
            <span className="Heading">
              <h2>Genix Auctions</h2>
            </span>
          </div>
          <div className="Nav_Wrapper">
            <div className="one_text">
              <span>Products</span>
              <span>About Us</span>
              <span>Contact</span>
            </div>

            <div className="two_text">
              <span>Actions</span>
            </div>

            <div className="two_text">
              <span>Bidding</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Copy_Rights_Wrapper">
            <span>{copyRights()} Copyright 2024, All Rights Reserved By Genix</span>
        </div>
    </footer>
  );
};

export default Footer
