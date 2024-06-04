import React from "react";
import "./SharkTank.css";
import { FaArrowRight } from "react-icons/fa6";

function SharkTank() {
  return (
    <div className="shark-presentation-section">
      <div className="shark-presentation-container">
        <div className="background-image">
          <img
            src="https://www.plusgold.in/images/sharkTankBgImage.png"
            alt=""
          />
        </div>
        <div className="presentation-text-area">
          <div className="left-text-area" >
            <div>
              <p>Plus Gold appearance in</p>
              <img
                src="https://www.plusgold.in/images/sharkTankLogo.png"
                alt=""
              />
            </div>
            <div className="margin-top-4" >
              <p>
                Watch our Shark <br />
                <span>
                  Tank pitch&nbsp; <FaArrowRight />
                </span>
              </p>
            </div>
          </div>
          <div className="video-container">
            <div>
              <video controls>
                <source
                  src="https://getplus-backend-prod.s3.ap-south-1.amazonaws.com/media/Plus+Gold+_+Thankyou+for+watching+.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharkTank;
