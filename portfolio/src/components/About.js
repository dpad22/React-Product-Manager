import React, { Component } from 'react';
import '../styles/About.css';


class About extends Component {
    render() {
        return (
        <div id="intro">
            <div className="row">
                <div id="left">
                    <img id="headshot" src="https://avatars1.githubusercontent.com/u/59618518?s=460&u=de438e7e2b1247e21ebd6f4778a50322d96510d5&v=4" alt="Headshot"></img>
                    <div className="contact-info">
                        <img id="contact-img" src="https://store-images.s-microsoft.com/image/apps.4725.14294378363439842.5d3bbc47-2b55-4ca4-8cdc-5708b4da8904.71d2f53c-05e2-4406-aac6-30cfb0de432b?mode=scale&q=90&h=200&w=200&background=%230078D7" alt="avatar" width="80" />
                        <h3>Contact info</h3>
                        <p class="contact-info">
                            Click the links to reach me via email =>
                            <a id="gmail"href="https://mail.google.com/mail/?view=cm&fs=1&to=dpadman2@gmail.com"> dpadman2@gmail.com </a>  
                            or through Linkedin => <a href="https://www.linkedin.com/in/dpadilla2/"><span><i class="fab fa-linkedin-in"></i></span></a>
                        </p>
                    </div>
                </div>
                <div id="right">
                    <p className="content">Hello, my name is David Padilla. I am a full stack web developer with a passion for creativity, gaming, sports, and Science Fiction.</p>
                    <p className="content">I am seeking positions as a front-end developer in the Dallas area. I have experience with React, MEAN, Ruby on Rails, and Python.</p>
                    <div>
                        <ul className="list">
                            <p className="content2">Experience</p>
                            <p className="list-header">Programming Languages:</p>
                            <li><i className="fab fa-js">JavaScript</i> | <i class="fab fa-python">Python</i> | Ruby</li>
                            <p className="list-header"> Frameworks & Technologies:</p>
                            <li><i className="fab fa-react">React</i> | <i className="fab fa-angular">Angular</i> | <i className="fab fa-node-js">Node.JS</i> | Django | Express | Ruby on Rails | MongoDB | TypeScript | <i className="fab fa-html5">HTML 5</i> | <i className="fab fa-css3">CSS 3</i> | Heroku | AWS </li>
                            <p className="list-header"> Additional Skills:</p>
                            <li>Agile Development | Project Planning | Data Analysis | Database Management | QA Testing | Communication | Team building | Adaptable</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default About;