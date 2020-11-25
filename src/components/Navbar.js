import React,{ useState } from 'react';
import {Button} from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setclick] = useState(false);
    const [dropdown, setDropdown] = useState(false);




    const handleclick = ()=> setclick(!click)

    const closeMobileMenu = ()=>setclick(false);

    const onMouseEnter= () => {
        if(window.innerwidth< 960){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    };

    const onMouseLeave= () => {
        if(window.innerwidth< 960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    };

    return (
        <>
            <nav  className='navbar'>
                <Link to='/' className='navbar-logo'>
                    NAIR<i class='fab fa-firstdraft' />
                </Link>
                <div className='menu-icon'  onClick={handleclick}>
                    <i className={click ? 'fas fa-times':'fas fa-bars'} />
                </div>
                <ul className={click?'nav-menu active':'nav-menu'}>



                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>



                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            services<i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown /> }

                    </li>


                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            contact
                        </Link>
                    </li>



                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    
                </ul>
                <Button />
            </nav>   
        </>
    )
    
}

export default Navbar;