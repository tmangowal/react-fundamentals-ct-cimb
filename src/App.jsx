import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewScreen from "./views/screens/NewScreen";
import TableProduct from "./views/components/TableProduct";
import CounterScreen from "./views/screens/CounterScreen";
import ProductCard from "./views/components/ProductCard";

import "./App.css";
import "./bootstrap.css";
import ExerciseCard from "./views/components/ExerciseCard";

import Handmaid from "./assets/images/handmaid.png";
import Crazy from "./assets/images/crazyRich.png";
import Brave from "./assets/images/brave.png";
import Educated from "./assets/images/educated.png";
import InputScreen from "./views/screens/InputScreen";
import AuthScreen from "./views/screens/AuthScreen";
import LifecycleScreen from "./views/screens/LifecycleScreen";
import HomeScreen from "./views/screens/HomeScreen";

function App() {
  // State

  let arrBooks = [
    {
      author: "Margaret Atwood",
      title: "The handmaid's tale",
      review: 4,
      desc: `This novel can be interpreted as a double narrative, Offred's tale and the handmaids' tales. The night...`,
      price: 18.99,
      discount: 60,
      image: Handmaid,
      stock: 7,
    },
    {
      author: "Kevin Kwan",
      title: "Crazy rich asians",
      review: 5,
      desc: `the outrageously funny debut novel about three super-rich, pedigreed Chinese families and the gossip...`,
      price: 24.12,
      discount: 80,
      image: Crazy,
      stock: 0,
    },
    {
      author: "Aldous Huxley",
      title: "Brave new world",
      review: 3,
      desc: `dystopian novel written in 1931 by English author Aldous Huxley, and published in 1932. Largely set in...`,
      price: 18.99,
      discount: 60,
      image: Brave,
      stock: 3,
    },
    {
      author: "Tara Westover",
      title: "Educated",
      review: 4.5,
      desc: `It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With...`,
      price: 34.21,
      discount: 0,
      image: Educated,
      stock: 3,
    },
  ];

  const renderBooks = () => {
    return arrBooks.map((val) => {
      return <ExerciseCard book={val} />;
    });
  };

  return (
    // <div className="App">
    //   <h1>Hello World!</h1>
    //   <CounterScreen />
    //   <InputScreen />
    //   <AuthScreen />
    //   <LifecycleScreen />
    // </div>
    <BrowserRouter>
      {/* <LifecycleScreen /> */}
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/auth" component={AuthScreen} />
        <Route exact path="/input" component={InputScreen} />
        <Route exact path="/counter" component={CounterScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
