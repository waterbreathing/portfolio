import React, { Component } from 'react';
import './AboutMe.css'
import { FiGithub, FiLinkedin, FiSend, FiYoutube } from 'react-icons/fi';
// import Img1 from '../img/face1.jpg'


class AboutMe extends Component {
    state = {}

    // backgndImageStyle = {
    //     // style={{ backgroundImage: `url(${Img1})` }}
    //     // backgroundImage: `url(${Img1})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundColor: '76B5B0'


    // }
    render() {
        return (
            <div className='aboutMeContainer'  >
                <div className='mediaContainer'  >

                    <div className="gitHub icons"> <a rel="noopener noreferrer" href="https://github.com/waterbreathing/" target="_blank"> <FiGithub /> </a></div>
                    <div className="linkedIn icons"> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/michal-dzik-9b35b5191/" target="_blank"><FiLinkedin /></a></div>
                    <div className="mailMe icons"> <a rel="noopener noreferrer" href="mailto:mdzik@waterbreathing.com" target="_blank"><FiSend /></a></div>
                    <div className="youTube icons"> <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zGIp21wPNN0" target="_blank"><FiYoutube /></a></div>
                    <div className='aboutMe'>
                        I am a front-end developer and I'm looking for my first internship or a job. I value good, honest and intuitive design as well as reliable operation of websites. I have strong fundamentals of JS, React, JQuery, SASS, Flexbox, Grid, Git, OOP, RWD, HTML, CSS and can use them in junior-level tasks.
    I would like to join a creative team and increase my skills in front-end with an emphasis on JS and React.js. Currently exploring node.js, Express and mongoDB. My personal interests include art, music composition and psychology. You can listen to my music by clicking on youTube icon.
                    </div>
                    {/* <img src={Img1} alt="background" /> */}
                </div>
                <div className='dialogue' >
                    <p>Please tell me something about yourself.</p>
                    <p>I come from Poland but I live in the Netherlands. I have graduated Medical University and I have worked several years as a doctor. And yet I devoted the entire last year to intensive IT learning and multiple courses on programming and frontend development.</p>
                    <p>So you were involved in medicine. Why such a change?</p>
                    <p>It was a difficult decision related to burnout in medicine. The overall data suggest that one third of doctors suffer from burnout, the main challenge is what they do about it. I decided to radically change my career path to more satisfying.</p>
                    <p>Why would you like to work in the IT industry? Do you have any experience in this?</p>
                    <p>I have always felt some interest in this industry. If find it very challenging intellectually and requiring continuous development, what I appreciate a lot. That is a career that offers a legitimate chance to perform meaningful work and develop a genuine passion for the job. My experience is not commercial and is limited to carrying out my own test projects and tasks from courses. That is why I am looking for an internship or my first job; this is how you break vicious no-experience no-job circle, don’t you? </p>
                    <p>Do you think that you will manage in a completely new industry? </p>
                    <p>Yes, I often had to learn new difficult things, it always went quite smoothly. My professional career went well and I had some achievements. More importantly, I've never had conflicts with my colleagues or patients. </p>
                    <p>What are your strengths? </p>
                    <p>I am diligent and conscientious. Always get the work done, almost never late at work. I’m also easy-going and creative, I often have a lot of ideas. I think I’m a fast learner and I can also share my knowledge (I worked with students).</p>
                    <p>What are your weaknesses then?</p>
                    <p>Well, let me think… I didn't watch “The Game of Thrones’, we can’t talk about the story. Maybe this?</p>
                    <p>Why should we hire you?</p>
                    <p>I think I'm more stable than younger colleagues and less likely to leave a job. With more life experience comes better understanding of people and the world in general. Although in another industry, I am a proven reliable employee, and this is a matter of personality and not the workplace.</p>
                </div>
            </div>
        );
    }
}

export default AboutMe













// The MIT License (MIT)

// Copyright (c) 2013-2017 Cole Bemis

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.