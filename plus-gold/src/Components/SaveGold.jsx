import React from "react";
import "./SaveGold.css";

const SaveGoals = () => {
  return (
    <div className="savegoals-section">
      <div className="savegoals-wrapper">
        <h2 className="goals-heading">Save for life goals</h2>
        <p className="goals-subheading">
          Save in Plus Gold for life events that matter
        </p>
        <div className="cards-wrapper">
          <div className="single-card-wrapper">
            <div className="single-card">
              <img src="https://plus-gold.vercel.app/static/media/wedding-card.19c33b1b575e39729e9884befe02b0a1.svg" alt="wedding" />
            </div>
          </div>
          <div className="single-card-wrapper">
            <div className="single-card">
              <img src="https://plus-gold.vercel.app/static/media/anniversary-card.bba9f9d16003127a3478d7dc34cca7f1.svg" alt="anniversary" />
            </div>
          </div>
          <div className="single-card-wrapper">
            <div className="single-card">
              <img src="https://plus-gold.vercel.app/static/media/dhanteras.92cd0cdd7edecc378267efa094ab0398.svg" alt="dhanteras" />
            </div>
          </div>
        </div>
        <div className="cta-button-wrapper">
          <button>Start Saving Now</button>
        </div>
      </div>
      <div className="curve-wrapper"></div>
    </div>
  );
};

export default SaveGoals;
