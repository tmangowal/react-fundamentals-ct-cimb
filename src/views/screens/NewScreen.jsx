import React from "react";

const KomponenAku = () => {
  const btnHandler = () => {
    alert("You clicked me!");
  };

  let hello = "testing";

  return (
    <div>
      <input onClick={btnHandler} type="button" value="Click me!" />
      <p>hello</p>
    </div>
  );
};

const NewScreen = () => {
  return (
    <div>
      <h1>Halo! Aku screen lama!</h1>
      <KomponenAku />
    </div>
  );
};

export default NewScreen;
