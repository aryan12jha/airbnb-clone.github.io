import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer section__padding'>
                <div className='footer__links'>
                    <div className='footer__content'>
                        <h4>Comapny</h4>
                        <a href='#'>About</a>
                        <a href='#'>Help</a>
                        <a href='#'>Terms & Privacy</a>
                    </div>
                    <div className='footer__content'>
                        <h4>Discover</h4>
                        <a href='#'>Trust & Safety</a>
                        <a href='#'>Gift Cards</a>
                        <a href='#'>Travel Credit</a>
                        <a href='#'>Site Map</a>
                    </div>
                    <div className='footer__content'>
                        <h4>For Jobs</h4>
                        <a href='#'>Job Opportunities</a>
                        
                    </div>
                    <div className='footer__content'>
                        <h4>Patnership</h4>
                        <a href='#'>OptiSync</a>
                        <a href='#'>TechSphere</a>
                        <a href='#'>ProActive</a>
                        <a href='#'>GlobalEdge</a>
                    </div>
                    <div className='footer__content'>
                        <h4>Follow Us on</h4>
                     <div className='social__media'>
                        <a href='#'><FacebookIcon></FacebookIcon></a>
                        <a href='#'><LinkedInIcon></LinkedInIcon></a>
                        <a href='#'><InstagramIcon></InstagramIcon></a>
                        <a href='#'><TwitterIcon></TwitterIcon></a>
                     </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer