import React, { Component } from "react";

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    //State
    //Lifecycle hooks
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: [
                { title: "CGI", category: "Enterprise", slug: 'CGI' }, 
                { title: "Bottega", category: "Enterprise", slug: 'Bottega' },
                { title: "Freelance Development", category: "Freelance", slug: 'Freelance' }
            ]
        };

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter
            })
        })
    }

    portfolioItems() {
        
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
            // return <h2>{item}</h2>;
        })
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Test"
    //     });
    // }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('Enterprise')}>
                    Enterprise
                </button>
                <button onClick={() => this.handleFilter('Freelance')}>
                    Freelance
                </button>

                {this.portfolioItems()}
           
           {/* <hr/> */}

           {/* <button onClick={ this.handlePageTitleUpdate }>Change Title</button> */}
           
            </div>
        )
    }
}