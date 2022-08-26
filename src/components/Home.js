import React, { useState } from "react";
import db from "../constants/db";

function Home() {
  const [checkout, setCheckout] = useState(false);
  const [catchId, setCatchId] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const checkoutStyling = {
    backgroundColor: checkout ? "lightgray" : "lightgray",
    width: checkout ? "100%" : "30%",
  };

  const addToCart = (props) => {
    setCatchId([...catchId, props]);
    setTotalPrice(5);
  };
  console.log(catchId);

  return (
    <>
      <div className="home-outer">
        <div className="home-left">
          <div className="home-left-top">Jaden's Shoes</div>
          <div className="home-left-bot">
            {db.map((db) => (
              <div key={db.id}>
                <div className="home-left-bot-item">
                  <div
                    className="img-top"
                    style={{ backgroundImage: `url(${db.imageOne})` }}
                  >
                    <div
                      className="img-add-to-cart"
                      onClick={() => addToCart(db.price)}
                    >
                      +
                    </div>
                  </div>
                  <div className="img-bot">
                    <div className="img-bot-left">
                      <div className="img-bot-left-top">{db.name}</div>
                      <div className="img-bot-left-bot">{db.type}</div>
                    </div>
                    <div className="img-bot-right">${db.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="home-right" style={checkoutStyling}>
          {checkout ? null : <div className="home-right-top">{totalPrice}</div>}
          {checkout ? null : (
            <div className="home-right-middle">
              <div className="home-right-middle-item">
                {catchId.map((catchId) => (
                  <div className="catch-id-box">{catchId}</div>
                ))}
              </div>
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
