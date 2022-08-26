import React, { useState } from "react";
import db from "../constants/db";

function Home() {
  const [checkout, setCheckout] = useState(false);

  const checkoutStyling = {
    backgroundColor: checkout ? "rgb(77, 77, 77)" : "rgb(104, 104, 104)",
    width: checkout ? "100%" : "30%",
  };

  console.log(db);
  return (
    <>
      <div className="home-outer">
        <div className="home-left">
          <div className="home-left-top">Jaden's Shoes</div>
          <div className="home-left-bot">
            <div className="home-left-bot-item one">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item two">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item three">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item four">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item five">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item six">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item seven">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item eight">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
            <div className="home-left-bot-item nine">
              <div className="img-top">
                <div className="img-add-to-cart">+</div>
              </div>
              <div className="img-bot"></div>
            </div>
          </div>
        </div>
        <div className="home-right" style={checkoutStyling}>
          <div className="home-right-top"></div>
          <div className="home-right-middle">
            <div className="home-right-middle-item"></div>
          </div>
          <div className="home-right-bottom">
            <button
              className="proceed-to-checkout"
              onClick={() => setCheckout(!checkout)}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
