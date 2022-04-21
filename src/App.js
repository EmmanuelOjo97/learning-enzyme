import React, { useState } from "react";
import "./app.css";
import { items } from "./data";

function App() {
  return (
    <div className="container">
      <h1>Basket</h1>
      {items.map((item) => {
        return (
          <div
            class="item"
            // style={{
            //   backgroundImage: `url(${item.img})`,
            //   // height: "250px",
            //   // width: "80%",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
            // }}
          >
            {/* <div class="icon">
              <img src="src/images/lion-king-photo-2.jpg" alt="" />
            </div> */}
            {/* <img src={item.img} alt="" className="item-image" /> */}
            <img
              src="https://www.thesun.co.uk/wp-content/uploads/2019/12/NINTCHDBPICT000546362051.jpg"
              alt=""
              className="icon"
            />
            <img src={item.img} alt="" className="item-image" />
            <div className="item-info">
              <p>{item.company}</p>
              <p>{item.itemName}</p>
              <p>{item.size}</p>
              <div class="priceAndUnit">
                <p>(unit 1)</p>
                <p>£{item.price}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div class=""></div>
    </div>
  );
}

export default App;
