import "./StarRating.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function StarRating({ rating, numOfRatings }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#f5c518" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#f5c518" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ccc" />);
    }
  }

  return (
    <div className="rating">
      {stars}
      <span style={{ marginLeft: '8px' }}>
        {rating.toFixed(1)} ({numOfRatings} reviews)
      </span>
    </div>
  );
}
export default StarRating