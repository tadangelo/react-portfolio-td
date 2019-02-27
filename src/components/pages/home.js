import React from 'react';


import PortfolioContainer from "../portfolio/portfolio-container"

export default function() {
    return (
        <div>
            <div className="top-section">
                {/* <img src=""></img> */}
                <br />
            </div>

            <hr />
            <div className="middle-section">
                <h1>middle-section</h1>
                <br />
            </div>
            <hr />
            <PortfolioContainer />
            <hr />
            <div className="bottom-section">
                <h1>bottom-section</h1>
                <br />
            </div>
            <hr />
        </div>
    );
}