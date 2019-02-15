import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    //State
    //Lifecycle hooks
    constructor() {
        super();
        console.log("Portfolio container has rendered")
    }

    portfolioItems() {
        const data = ["CGI", "Bottega", "DXC Technology", "Freelance Development"];
        
        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"} />;
            // return <h2>{item}</h2>;
        })
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here....</h2>

                {this.portfolioItems()}
            </div>
        )
    }
}