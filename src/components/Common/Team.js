import React, {Component} from "react"
import TeamOne from "./TeamOne"

import img1 from "../assets/img/team/1.jpg"
import img2 from "../assets/img/team/2.jpg"
import img3 from "../assets/img/team/3.jpg"

const members = [
        {title: 'Lead Marketer', image:img1, name: 'Kary Lanland'} ,
        {title: 'Lead Designer', image:img2, name: 'Munton Stred'} ,
        {title: 'Lead Engineer', image:img3, name: 'Cumhom Jonas'} 
]


class Team extends Component {

   
    render() {
        return (
            <div>
                <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                   
                   {members.map((member, index) => {
                       return <TeamOne {...member} key={index}/>
                   })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
            </div>
        )
    }
}


export default Team