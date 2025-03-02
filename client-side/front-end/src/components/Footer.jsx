import '../App.css'
import {Link}  from 'react-router-dom'

function Footer() {
    return(
        <div className='footer'>
                <div className='footer-about'>
                    <h4>About Me</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quia, <br/>
                        dignissimos est dolor laboriosam saepe labore at eius itaque tenetur<br/>
                         aliquam provident suscipit quibusdam ratione facere, ipsam, minus aliquid cupiditate.
                    </p>
                </div>

                <div className='quick-links'>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                        </li>
                    </ul>
                </div>

                <div className='newsletter'>
                    <p>subscribe to out newsletter</p>
                    <div>
                        <input type="email" name="" id="email-input" />
                    </div>
                </div>
        </div>
    )
}

export default Footer;