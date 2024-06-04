import React from "react";
import "./DownloadApp.css";

function DownloadApp() {
    return (
        <div className="app-download-section">
            <div className="app-download-wrapper">
                <div className="app-left-content">
                    <h2 className="app-title">Download the App</h2>
                    <p className="app-subtitle">
                        Plus, a revolutionary app that helps Indian homemakers to pre-plan
                        their jewellery purchase by saving monthly & gaining 10% IRR
                    </p>
                    <div>
                        <img src="https://i.postimg.cc/3RGdSCfj/Screenshot-2024-06-04-142921.png" alt="download-ad" />
                    </div>
                </div>
                <div className="app-right-content">
                    <img src="https://i.postimg.cc/L6pkjGFR/Screenshot-2024-06-04-142729.png" alt="mobile" />
                </div>
            </div>
        </div>
    );
};

export default DownloadApp;