import React, { useState, useEffect } from "react";
import db from "../constants/db";

function Home() {
  const [checkout, setCheckout] = useState(false);
  const [catchId, setCatchId] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const checkoutStyling = {
    backgroundColor: checkout ? "lightgray" : "lightgray",
    width: checkout ? "100%" : "30%",
  };

  const addToCart = (props, props2, props3, props4, props5) => {
    setCatchId([
      ...catchId,
      {
        price: props,
        name: props2,
        type: props3,
        id: props4,
        imageOne: props5,
      },
    ]);
  };
  const handleDelete = (props) => {
    // console.log(props);
    var oldCatchId = [...catchId];
    console.log(oldCatchId);

    var removeIndex = oldCatchId.map((item) => item.id).indexOf(props);

    ~removeIndex && oldCatchId.splice(removeIndex, 1);

    setCatchId(oldCatchId);
  };

  useEffect(() => {
    let _catchId = [...catchId];
    let prices = [];
    for (let i = 0; i < _catchId.length; i++) {
      prices.push(_catchId[i].price);
    }
    console.log(prices);
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0);
    setTotalPrice(sum.toFixed(2));
  }, [addToCart, handleDelete]);

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
                      onClick={() =>
                        addToCart(
                          db.price,
                          db.name,
                          db.type,
                          db.id,
                          db.imageOne
                        )
                      }
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
          {checkout ? null : (
            <div className="home-right-top">$ {totalPrice}</div>
          )}
          {checkout ? null : (
            <div className="home-right-middle">
              <div className="home-right-middle-item">
                {catchId.map((catchId) => (
                  <div className="catch-id-box">
                    <div className="catch-id-box-left">
                      <div
                        className="catch-id-box-left-img"
                        style={{ backgroundImage: `url(${catchId.imageOne})` }}
                      ></div>
                    </div>
                    <div className="catch-id-box-right">
                      <div className="catch-id-box-price">{catchId.price}</div>
                      <div className="catch-id-box-name">{catchId.name}</div>
                      <div className="catch-id-box-type">{catchId.type}</div>
                    </div>

                    <div
                      className="delete-item"
                      onClick={() => handleDelete(catchId.id)}
                    >
                      X
                    </div>
                  </div>
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
