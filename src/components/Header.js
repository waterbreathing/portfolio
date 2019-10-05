import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './Header.css'
import { FiGithub, FiLinkedin, FiSend, FiYoutube } from 'react-icons/fi';


const Header = () => {
    return (
        <div>
            <div className='headerTopContainer'>
                <h1 className='headerTop' >Michal's portfolio</h1>
                {/* <h2><em> I believe in "less is more"</em></h2> */}
                <div className='headerIcons'>
                    <div className="gitHubHeader"> <a rel="noopener noreferrer" href="https://github.com/waterbreathing/" target="_blank"> <FiGithub /> </a></div>
                    <div className="linkedInHeader"> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/michal-dzik-9b35b5191/" target="_blank"><FiLinkedin /></a></div>
                    <div className="mailMeHeader"> <a rel="noopener noreferrer" href="mailto:mdzik@waterbreathing.com" target="_blank"><FiSend /></a></div>
                    <div className="youTubeHeader"> <a rel="noopener noreferrer" href="https://www.youtube.com/watch?v=zGIp21wPNN0" target="_blank"><FiYoutube /></a></div>
                </div>
            </div>
            <nav className='naviContainer'>
                <ul className='naviList'>
                    <li>  <NavLink to='/' exact>TodoElastic</NavLink> </li>
                    <li>  <NavLink to='/fetchAPI' exact>FetchAPI</NavLink> </li>
                    <li>  <NavLink to='/aboutMe' exact>AboutMe</NavLink> </li>

                </ul>
            </nav>

        </div>
    );
}

export default Header;