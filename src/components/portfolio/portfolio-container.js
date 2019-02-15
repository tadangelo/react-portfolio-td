import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    //State
    //Lifecycle hooks
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                { title: "CGI" }, 
                { title: "Bottega" },
                { title: "Freelance Development" }
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    portfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
            // return <h2>{item}</h2>;
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Test"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}
           
           <hr/>

           <button onClick={ this.handlePageTitleUpdate }>Change Title</button>
           
            </div>
        )
    }
}