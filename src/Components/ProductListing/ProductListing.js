import { productMockData } from "../../MockData/productListData";
import { arrowRight } from "../../Utils/Icons";
import Description from "../Description/Description";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

import "./ProductListing.css";

const ProductListing = () => {

  const navigate = useNavigate()

  const handleBidNow = (data) => {
    console.log(data)
    sessionStorage.setItem("itemSelected", JSON.stringify(data))
    const isLoggedIn =  JSON.parse(sessionStorage.getItem("isUserLoggedIn"))
    if (isLoggedIn) {
      navigate('/description/')
    } else {
      navigate('/login')
    }
  }

  return (
    <>
      <div className="Product_List_Container">
        <div className="Heading">
          <h1>
            Explore <span>Auctions</span>
          </h1>
        </div>
        <div className="Product_Card_Container">
          {productMockData.map((data) => {
            return (
              <div className="Product_Card_Wrapper">
                <div className="Img_Wrapper">
                  <img src={data.src} alt="Product_img" />
                </div>

                <div className="Details_Wrapper">
                  <span className="Badge_text">{data.badge}</span>
                  <h3 className="Heading">{data.heading}</h3>

                  <div className="Price_Wrapper">
                    <div className="Bid_Wrapper">
                      <span>Minimum Bid</span>
                      <span>{data.minimumBid}</span>
                    </div>

                    <div className="Bid_Wrapper">
                      <span>Current Bid</span>
                      <span>{data.currentBid}</span>
                    </div>
                  </div>

                  <span className="Sales_Text">Ends in : {data.saleEnd}</span>

                  <button className="Btn" onClick={() => handleBidNow(data)}>Bid now {arrowRight()}</button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="More_Btn">
          <button>Load more...</button>
        </div>
      </div>
      <Description />
      <Footer />
    </>
  );
};

export default ProductListing;
