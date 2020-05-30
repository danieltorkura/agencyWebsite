import React, { Component } from "react"
import PortfolioItem from "./PortfolioItem"


import thumbnail from '../assets/img/portfolio/01-thumbnail.jpg'
import thumbnail1 from '../assets/img/portfolio/02-thumbnail.jpg'
import thumbnail2 from '../assets/img/portfolio/03-thumbnail.jpg'
import thumbnail3 from '../assets/img/portfolio/04-thumbnail.jpg'
import thumbnail4 from '../assets/img/portfolio/05-thumbnail.jpg'
import thumbnail5 from '../assets/img/portfolio/06-thumbnail.jpg'



const porfolio = [
    {title: 'Threads', subtitle: 'Illustration', image: thumbnail },
    {title: 'Explore', subtitle: 'Graphic Design', image: thumbnail1},
    {title: 'Finish', subtitle: 'Identity', image: thumbnail2},
    {title: 'Lines', subtitle: 'Lines', image: thumbnail3},
    {title: 'Southwest', subtitle: 'Southwest', image: thumbnail4},
    {title: 'Window', subtitle: 'Windows', image: thumbnail5}
]


class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="portfolio">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div className="row">
                            
                         {porfolio.map((item, index) => {
                             return <PortfolioItem {...item} key={index}/>
                         })}   
                           
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Portfolio