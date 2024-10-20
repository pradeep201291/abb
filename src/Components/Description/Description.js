import BiddingDetails from "./BiddingDetails/BiddingDetails";
import "./Description.css";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductDetail from "./productDetail/ProductDetail";
import "./Description.css";
import Header from "../Header/Header";

const Description = () => {
  return (
    <div className="description_container">
      <Header />
      <div className="description_wrapper">
        <ProductDetail />
        <ProductDescription />
        <BiddingDetails />
      </div>
    </div>
  );
};

export default Description;
