import "./BiddingDetails.css";
import { arrowRight } from "../../../Utils/Icons";

const BiddingDetails = () => {
  const bidLists = [
    "The Floor bids $157 ",
    "The Floor bids $150",
    "Internet Bidder bids $145",
    "The Floor bids $140 ",
    "Internet Bidder bids $132",
    "The Floor bids $111 ",
    "Internet Bidder bids $109",
    "The Floor bids $105",
  ];
  return (
    <div>
      <div className="bid_lists">
        <ul>
          {bidLists.map((bid, index) => (
            <li key={index}>{bid}</li>
          ))}
        </ul>
      </div>
      <button>Bid now {arrowRight()}</button>
    </div>
  );
};

export default BiddingDetails;
