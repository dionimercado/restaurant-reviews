import React from "react";

// total number of stars
// const starTotal = 5;

// for (const rating in ratings) {
//   const starPercentage = (ratings[rating] / starTotal) * 100;
//   const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
//   document.querySelector(
//     `.${rating} .stars-inner`
//   ).style.width = starPercentageRounded;
// }

const Rating = ({ rating }) => (
  <div
    style={{
      fontSize: "13px",
      color: "orange"
    }}
  >
    <span className="mr-2">{rating}</span>
    <i className="fas fa-star" />
    <i className="fas fa-star-half-alt" />
    <i className="far fa-star" />
    <i className="far fa-star" />
    <i className="far fa-star" />
  </div>
);

export default Rating;
