import React, { useState } from "react";
import BeautyStars from "beauty-stars";

const Rating = ({ testRating, rate, filterByRate }) => {
  const [rating, setRating] = useState(rate);

  return (
    <div className="rating-stars">
      {testRating ? (
        <BeautyStars
          value={rating}
          onChange={(value) => {
            setRating(value);
            filterByRate(value);
          }}
          size="15px"
        />
      ) : (
        <BeautyStars value={rating} size="15px" />
      )}
    </div>
  );
};

export default Rating;
