import { Rating } from "@material-ui/lab";
import React from "react";
// import profilePng from "../../images/cover.jpg";
import "./ReviewCard.css";

const profilePng = "https://res.cloudinary.com/dkchwqard/image/upload/v1674649844/ui%20images/profile_jskgxm.png"
const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img
        src={review.revuserurl ? review.revuserurl : profilePng}
        alt="User"
      />
      <p>{review.name}</p>
      <Rating {...options} />
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
