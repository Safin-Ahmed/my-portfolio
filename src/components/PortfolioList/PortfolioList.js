import React from "react";
import { products } from "../../data";
import Portfolio from "../Portfolio/Portfolio";
import "./PortfolioList.css";
const PortfolioList = () => {
  return (
    <div id="my-portfolio" className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Premium is what I believe in</h1>
        <p className="pl-desc">
          These are some of my best projects that I am really proud to share
        </p>
      </div>
      <div className="pl-list">
        {products.map((product) => (
          <Portfolio id={product.id} project={product}></Portfolio>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
