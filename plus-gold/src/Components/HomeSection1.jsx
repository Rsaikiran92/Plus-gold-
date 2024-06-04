import React from "react";
import "./HomeSection1.css"

function HomeSection1() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-container">
          <div className="hero-text-section">
            <div className="hero-textarea">
              <p className="save-smartly-text">Save smartly in </p>
              <p className="gold-text"> GOLD</p>
              <p className="extra-gold-text">
                And get 10% extra gold every year!
              </p>
              <div className="saving-div">
                <button>Start Saving Now</button>
                <span>Trusted by 2Lakh + Indians</span>
              </div>
              <div className="powered-div">
                <p className="powered-text">Powered by</p>
                <div>
                  <img
                    src="https://www.plusgold.in/images/augmontLogo.svg"
                    alt="augmontLogo"
                  />
                </div>
                <div>
                  <img
                    src="https://www.plusgold.in/images/cashFreeSvnLogo.svg"
                    alt="cashFreeSvnLogo"
                  />
                </div>
                <div>
                  <img src="https://www.plusgold.in/images/npciLogo.svg" alt="npciLogo" />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-img-section">
            <div className="hero-bgImg">
              <div className="heroImg">
                <img
                  src="https://www.plusgold.in/images/sonakshiSinha.svg"
                  alt="sonakshiSinha"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="save-section">
        <div className="save-container">
          <div className="save-img">
            <img
              src="https://www.plusgold.in/images/oldWomenShowingJewellery.png"
              alt="an old women showing jewellery to a girl"
            />
          </div>
          <div className="save-textarea">
            <h2 className="save-like-your-mom-heading">Save like your mom</h2>
            <p className="helvetica-neue mb-1 buy-10grams-gr letter-spacing-for-gr">
              Buy 10gm <span className="gold-word">Gold</span> &amp; Get 1gm
              <span className="gold-word"> Gold</span> Extra
            </p>
            <p
              style={{ maxWidth: "470px", color: "#2B2B2B" }}
              className="helvetica-neue letter-spacing-for-gr save-like-your-mom-subtext"
            >
              Buy Gold through daily, weekly or monthly SIPs, or through
              One-Time payments &amp; get 10% extra Gold from Plus's partner
              jewellers
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;