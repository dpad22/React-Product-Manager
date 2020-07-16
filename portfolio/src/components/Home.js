import React, { Component } from 'react';
import '../styles/Home.css'

class Home extends Component {
    render(){
        return(
            <div className="center">
                <h1 className="header">David Padilla</h1>
                <div id="content">
                    <h3>Full Stack Web Developer | Father | Husband | Gamer</h3>
                    <h5>Welcome to my portfolio. <a href="/About"> Learn more about me!</a></h5>
                </div>
            </div>
        )
    }
}
export default Home;