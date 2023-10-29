import React from 'react';

export const StarRating = ({ nOfRatings, rating }) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    const starClass = "fa fa-star checked product--details--star";
    stars.push(<span key={i} className={starClass}></span>);
  }

  for(let i = rating; i<5; i++) {
    const starClass = "fa fa-star product--details--star";
    stars.push(<span key={i} className={starClass}></span>);
  }

  return (
    <div>
      {stars}
      <span>{nOfRatings} Reviews</span>
    </div>
  );
};
