import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';


import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  // NavLinks,
  NavLinks2,
  // NavLinkss,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';



const Navbar = ({toggle}) => {

  //use LOGOUT
  const { logout} = useLogout()
  const { user } =  useAuthContext()

  const handleClick = () => {
    logout();

  }

  const [scrollNav, setscrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80){
      setscrollNav(true);
    } else {
      setscrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
   }

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>NCJ</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            {/* <NavItem>
              <NavLinkss 
              to='/'
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >
              Home</NavLinkss>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="about"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >About</NavLinks>
            </NavItem> */}
            {/* <NavItem>
              <NavLinks to="services"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}
              >Services</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks2 to="/petboarding"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>Pet-boarding</NavLinks2>
            </NavItem>
            <NavItem>
              <NavLinks2 to="/search"
              smooth={true} 
              duration={500} 
              spy={true} 
              exact='true' 
              offset={-80}>Search Reservation</NavLinks2>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/reserve">Reserve Now </NavBtnLink>
            {user && (
              <>
            <span style={{color: "white"}}>{user.email}</span>
            <NavBtnLink to="/admin">Admin </NavBtnLink>
            <NavBtnLink onClick={handleClick}>Logout </NavBtnLink>
            </>
            )}
          </NavBtn>
          
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
