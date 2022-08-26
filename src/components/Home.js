import React, { useState } from "react";
import db from "../constants/db";

function Home() {
  const [checkout, setCheckout] = useState(false);

  const checkoutStyling = {
    backgroundColor: checkout ? "lightgray" : "lightgray",
    width: checkout ? "100%" : "30%",
  };

  console.log(db);
  return (
    <>
      <div className="home-outer">
        <div className="home-left">
          <div className="home-left-top">Jaden's Shoes</div>
          <div className="home-left-bot">
            {db.map((db) => (
              <div>
                <div className="home-left-bot-item">
                  <div
                    className="img-top"
                    style={{ backgroundImage: `url(${db.imageOne})` }}
                  >
                    <div className="img-add-to-cart">+</div>
                  </div>
                  <div className="img-bot">
                    {db.gender} {db.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home-right" style={checkoutStyling}>
          {checkout ? null : <div className="home-right-top"></div>}
          {checkout ? null : (
            <div className="home-right-middle">
              <div className="home-right-middle-item"></div>
            </div>
          )}
          {checkout ? null : (
            <div className="home-right-bottom">
              <button
                className="proceed-to-checkout"
                onClick={() => setCheckout(!checkout)}
              >
                Proceed to checkout
              </button>
            </div>
          )}
          {checkout ? (
            <div className="checkout-outer">
              <div className="checkout-left">
                <div className="checkout-left-inner">
                  <div className="checkout-left-inner-top">
                    <button onClick={() => setCheckout(!checkout)}>back</button>
                  </div>
                  <div className="checkout-left-inner-middle"></div>
                  <div className="checkout-left-inner-bottom"></div>
                </div>
              </div>
              <div className="checkout-right">
                <div className="checkout-right-inner">
                  <div className="checkout-right-inner-top"></div>
                  <div className="checkout-right-inner-middle"></div>
                  <div className="checkout-right-inner-bottom"></div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Home;
