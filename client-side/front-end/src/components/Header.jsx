import '../App.css'
import {Link}  from 'react-router-dom'

function Header (){
    return(
        <div className='header-div'>
            
            <nav>
                <h1>Portfolio</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
            </nav>
        </div>
    )
}
        
export default Header;