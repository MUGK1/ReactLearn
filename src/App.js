import "./App.css";
import React from "react";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import data from "./data";

function App() {
  const cards = data.map(item => {
    return <Cards {...item} />;
  });

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
