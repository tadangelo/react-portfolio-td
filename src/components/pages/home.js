import React from 'react';

import PortfolioContainer from "../portfolio/portfolio-container"

export default function() {
    return (
        <div>
            <hr />
            <div className="top-section">
                <h1>top-section</h1>
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