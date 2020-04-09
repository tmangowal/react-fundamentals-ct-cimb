import React from "react";
import logo from "./logo.svg";

import NewScreen from "./views/screens/NewScreen";
import TableProduct from "./views/components/TableProduct";
import CounterScreen from "./views/screens/CounterScreen";
import ProductCard from "./views/components/ProductCard";

import "./App.css";

function App() {
  // let arr = ["Bandung", "Jakarta", "Tangerang"];

  let arrProducts = [
    {
      nama: "Sepatu Basket",
      harga: 2300000,
      desc: "Sepatu basket keluaran terbaru loh! Pake sepatu ini auto menang",
    },
    {
      nama: "Kaos Polo",
      harga: 250000,
      desc: "Tingkatkan penampilanmu menggunakan kaos berkelas ini",
    },
    {
      nama: "Celana Jeans",
      harga: 550000,
      desc: "Nyaman dan dengan bahan premium gan, stock selalu ready!",
    },
  ];

  // const renderArr = () => {
  //   return arr.map((val) => {
  //     return <CounterScreen kota={val} />;
  //   });
  // };

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ProductCard />
    </div>
  );
}

export default App;
