import React from "react";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "typeface-raleway";
import "./Pages.css";

const Home = () => {
  return (
    <div>
      <h1 className="Welcome" style={{ fontFamily: "raleway" }}>
        {" "}
        Welcome to E-Shoes
      </h1>
      <div>
        <ItemListContainer />
      </div>
    </div>
  );
};

export default Home;
