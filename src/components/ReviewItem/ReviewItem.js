import React from "react";

const ReviewItem = (props) => {
  const { category } = props.item;
  return (
    <div>
      <div>
        <h1>{category}</h1>
      </div>
    </div>
  );
};

export default ReviewItem;
