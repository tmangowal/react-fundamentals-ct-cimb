import React from "react";

const ProductCard = (props) => {
  return (
    <div
      style={{
        width: "240px",
        padding: "16px",
        border: "1px solid black",
        borderRadius: "7px",
      }}
    >
      <h3>Nama: Nama Product</h3>
      <h4>Harga: Rp.sekian</h4>
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat dolorum, velit eveniet porro ex illum esse nisi nobis quia
        nesciunt! Magnam nemo itaque esse dolore accusamus consequuntur hic
        dolorem quaerat.
      </p>
    </div>
  );
};

export default ProductCard;
