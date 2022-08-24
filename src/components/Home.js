import React from "react";

function Home() {
  return (
    <>
      <div className="home-outer">
        <div className="home-left">
          <div className="home-left-top">Jaden's Shoes</div>
          <div className="home-left-bot">
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
            <div className="home-left-bot-item"></div>
          </div>
        </div>
        <div className="home-right">
          <div className="home-right-top"></div>
          <div className="home-right-middle">
            <div className="home-right-middle-item"></div>
          </div>
          <div className="home-right-bottom">
            <div className="proceed-to-checkout"> Proceed to checkout </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
