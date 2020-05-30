import React, { Component } from "react"
import Header from "../Common/Header"

import Service from '../Common/Service'
import Portfolio from "../Common/Portfolio"
import Team from "../Common/Team"
import Clients from '../Common/Clients'



class Home extends Component {
    render() {
        return (
            <div>
                <Header
                title="Welcome to our Studio"
                subtitle="IT IS NICE TO MEET YOU"
                buttonText="Tell me more"
                link="/services"
                showButton="true"
                image='https://i.picsum.photos/id/1059/7360/4912.jpg'
                />
                <Service/>
                <Portfolio/>
                <Team/>
                <Clients/>
            </div>
        )
    }
}

export default Home