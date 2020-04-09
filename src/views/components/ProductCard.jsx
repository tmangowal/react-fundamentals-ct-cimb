import React from "react";

const ProductCard = (props) => {
  const { productData } = props;
  const { nama, harga, desc, discount, stock } = productData;

  const renderItem = () => {
    if (stock) {
      return (
        <>
          <h3>Nama: {nama}</h3>
          <h4>Harga: Rp. {harga}</h4>
          {
            // if ternary
            discount > 0 ? (
              <h4>
                Diskon {discount}% menjadi {harga - harga * (discount / 100)}
              </h4>
            ) : null

            // if (discount > 0) {
            //   return <h4>Diskon DISKON% menjadi HARGA_SETELAH_DISKON</h4>
            // } else {
            //   return null
            // }
          }
          <p>Description: {desc}</p>
        </>
      );
    } else {
      return <h2>Stock kosong!</h2>;
    }
  };

  return (
    <div
      style={{
        width: "240px",
        padding: "16px",
        border: "1px solid black",
        borderRadius: "7px",
      }}
    >
      {renderItem()}
    </div>
  );
};

export default ProductCard;
