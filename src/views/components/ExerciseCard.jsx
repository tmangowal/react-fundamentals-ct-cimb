import React from "react";

import Handmaid from "../../assets/images/handmaid.png";
import Button from "./Button";

const ExerciseCard = (props) => {
  const {
    author,
    title,
    review,
    desc,
    price,
    discount,
    image,
    stock,
  } = props.book;
  const gray = "#5C6A79";

  return (
    <div
      style={{
        width: "424px",
      }}
      className="row p-4"
    >
      <div className="col-6">
        {/* FALLBACK */}
        <img src={image || Handmaid} width="100%" alt="handmaid" />
      </div>
      <div className="col-6 text-left">
        <div className="mt-4">
          <div style={{ fontSize: "10px", color: gray }}>
            {author || "Author's name not available"}
          </div>
          <div style={{ fontSize: "16px", fontWeight: 800 }}>
            {title || "the handmaid's tale"}
          </div>
          <div style={{ fontSize: "10px" }}>
            {review || "0"} / 5 &nbsp;Review
          </div>
          <div className="mt-3" style={{ fontSize: "10px", color: gray }}>
            {desc || `No desc available`}
          </div>
          <div className="mt-3" style={{ fontSize: "13px" }}>
            {discount > 0 ? (
              <>
                <span style={{ fontWeight: 700 }}>
                  ${price - price * (discount / 100)}{" "}
                </span>
                <span
                  className="ml-2"
                  style={{ textDecoration: "line-through", color: gray }}
                >
                  {" "}
                  ${price}
                </span>
              </>
            ) : (
              <span style={{ fontWeight: 700 }}>${price} </span>
            )}
          </div>
          <div className="mt-3">
            <Button disabled={stock <= 0}>BUY NOW</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
