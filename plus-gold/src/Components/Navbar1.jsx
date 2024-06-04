import React from "react";
import "./Navbar1.css";
import { IoClose } from "react-icons/io5";

function SharkContainer() {
    return (
        <div className="main-container">
            <img
                src="https://www.plusgold.in/images/banner_shark_tank_india.png"
                alt="sharkTankBanner"
                className="img"
            />
            <div className="btn" >
                <IoClose />
            </div>
        </div>
    );
};

export default SharkContainer;
