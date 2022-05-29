import React, { useState, useEffect } from 'react';
import { Button } from '../../Button/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { signInWithGoogle } from '../../../Firebase';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if(window.scrollY >= 80){
        setNavbar(true);
    } else{
        setNavbar(false);
    }
};

const navigate = useNavigate();

window.addEventListener('scroll', changeBackground);

  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <i className="fa fa-car"></i>
            Datalytics
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick={signInWithGoogle}>LOG IN <br/> with google</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
