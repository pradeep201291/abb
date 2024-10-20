import "./ProductDescription.css";
import reviewerImg from "../../../Assets/Login/Ellipse 14.png";

const ProductDescription = () => {
  const reviewerList = [
    {
      rating: 5,
      review:
        "These headphones are a game-changer for my daily commute. The noise-canceling feature works like a charm.",
      name: "Kristin Watson",
      postedDate: "March 14, 2021",
    },
    {
      rating: 5,
      review: "Im blown away by the sound clarity these headphones offer.",
      name: "Jenny Wilson",
      postedDate: "January 28, 2021",
    },
    {
      rating: 4,
      review:
        "As a frequent flyer, these headphones have become my must-have travel companion.",
      name: "Bessie Cooper",
      postedDate: "January 28, 2021",
    },
  ];

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => (
        <span key={index} className="star">
          ★
        </span> // Unicode star or you can use an icon
      ));
  };
  return (
    <div className="productdescription_container">
      <h5>Description</h5>
      <div className="detailed_para">
        <p>
          Immerse yourself in pristine sound quality with the Sony Black
          Headphones. Crafted for audiophiles and casual listeners alike, these
          headphones deliver an exceptional audio experience with deep, resonant
          bass and crystal-clear highs. The sleek black design complements any
          style, whether you're on the go or relaxing at home.
        </p>
        <p>
          Equipped with advanced noise-canceling technology, these headphones
          block out distractions so you can enjoy your music, podcasts, or calls
          without interference. Comfort is key with plush ear cushions that
          provide long-lasting comfort for extended listening sessions.
        </p>
        <p>
          Designed for convenience, these headphones feature easy-to-use
          controls for adjusting volume, skipping tracks, and taking calls on
          the go. Foldable and compact, they're perfect for travel and storage,
          ensuring you can take your music with you wherever you go.
        </p>
        <p>
          Whether you're commuting, working out, or simply unwinding, the Sony
          Black Headphones offer premium sound quality and comfort that elevate
          your listening experience to new heights.
        </p>
      </div>
      <div className="reviews_container">
        <h5>Reviews</h5>
        {reviewerList.map((val, ind) => (
          <div key={ind} className="review">
            <div className="review_header">
              <img src={reviewerImg} alt="Reviewer" className="reviewer_img" />
              <div className="reviewer_info">
                <div className="review_rating">{renderStars(val.rating)}</div>
                <p className="review_text">{val.review}</p>
                <p className="reviewer_name">{val.name}</p>
                <p className="review_posted_date">{val.postedDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
