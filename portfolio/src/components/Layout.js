import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Layout.css';



class Layout extends Component {
    render(){
        return(
            <div>
                


                {/* <navbar className="navbar">
                    <NavLink exact to="/" class="link">Home</NavLink>
                    <NavLink exact to="/About" class="link">About</NavLink>
                    <NavLink exact to="/Projects" class="link">Projects</NavLink>
                    <NavLink exact to="/Hobbies" class="link">Hobbies</NavLink>
                </navbar> */}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;