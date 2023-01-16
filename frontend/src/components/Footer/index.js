import React from 'react';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink, 
  SocialMedia, 
  SocialMediaWrap, 
  SocialLogo, 
  WebsiteRights, 
  SocialIcons, 
  SocialIconLink
} from './FooterElements'


const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
   }


  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">LoremLorem</FooterLink>
                <FooterLink to="/signin">Lorem</FooterLink>
                <FooterLink to="/signin">LoremLoremsss</FooterLink>        
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">LoremLorem</FooterLink>
                <FooterLink to="/signin">Lorem</FooterLink>
                <FooterLink to="/signin">LoremLoremsss</FooterLink>        
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Sponsorships</FooterLink>
                <FooterLink to="/signin">CEOs</FooterLink>   
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>       
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                  NCJ
                </SocialLogo>
                <WebsiteRights>NCJ © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                <SocialIcons>
                  <SocialIconLink href="/" taget="_blank" aria-label="Facebook">
                    <FaFacebook/>
                  </SocialIconLink>
                  <SocialIconLink href="/" taget="_blank" aria-label="Instagram">
                    <FaInstagram/>
                  </SocialIconLink>
                  <SocialIconLink href="/" taget="_blank" aria-label="Youtube">
                    <FaYoutube/>
                  </SocialIconLink>
                  <SocialIconLink href="/" taget="_blank" aria-label="Twitter">
                    <FaTwitter/>
                  </SocialIconLink>
                  <SocialIconLink href="/" taget="_blank" aria-label="Linkedin">
                    <FaLinkedin/>
                  </SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
