import React from "react";
import styled from "styled-components";
import {
  FacebookRounded,
  Instagram,
  LinkedIn,
  Twitter,
  Email,
} from "@mui/icons-material";

const FooterContainer = styled.div`
  width: 100vw;
  
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  background-color:#080914;
  color:white;
  margin-top:5rem;
`;
const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  
  color: white;
  
`;
const Logo = styled.div`
  font-weight: 700;
  font-size: 25px;
  color: #7F17D5;
  margin-top:3rem;
`;
const Nav = styled.ul`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #7F17D5;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: white;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #7F17D5 ;
  }
`;
const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: white;
  text-align: center;
  margin-bottom:1rem;
   @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Moheenkhan Inamdar</Logo>
        <Nav>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          {/* <NavLink href="#Experience">Experience</NavLink> */}
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href='https://www.linkedin.com/in/moheenkhan-inamdar-bb62ba242' target="display">
            <LinkedIn />
          </SocialMediaIcon>
          <SocialMediaIcon href='https://www.instagram.com/moheenkhan_inamdar?igsh=MW02Y3hpc2tidGlpZw==' target="display">
            <Instagram />
          </SocialMediaIcon>
          <SocialMediaIcon href='mailto:moheenkhanpersonal@gmail.com' target="display">
            <Email />
          </SocialMediaIcon>

        </SocialMediaIcons>
        <Copyright>&copy; 2025 Moheenkhan Inamdar. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;