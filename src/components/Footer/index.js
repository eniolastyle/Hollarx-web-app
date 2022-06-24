import React from "react";
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
  SocialIconLink,
} from "../../styles";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/">Tesmonials</FooterLink>
              <FooterLink to="/">Our Vision &amp; Mission </FooterLink>
              <FooterLink to="/">Services</FooterLink>
              <FooterLink to="/">Projects</FooterLink>
              <FooterLink to="/">Partners</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Courses</FooterLinkTitle>
              <FooterLink to="/">Basic Electronics</FooterLink>
              <FooterLink to="/">Mobile Engineering</FooterLink>
              <FooterLink to="/">PCB Designs</FooterLink>
              <FooterLink to="/">Product Designs</FooterLink>
              <FooterLink to="/">Mobile Programing</FooterLink>
              <FooterLink to="/">Career Mentorship</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Return Policies</FooterLink>
              <FooterLink to="/">Delivery Services</FooterLink>
              <FooterLink to="/">Waranties</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinkItems>
            {/* <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">LinkedIn</FooterLink>
              <FooterLink to="/">Whatsapp</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="/hero"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              hollarx
            </SocialLogo>
            <WebsiteRights>
              +2347033003154 | +2348169279994 <br />
              hollarx24@gmail.com <br />
              hollarx &copy; {new Date().getFullYear()} All right reserverd.{" "}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://web.facebook.com/Hollarx-Mobile-Communication-105740498828320"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UC_nYjh9vrFvEtXzvv0Dzzgg"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/hollarxmobile/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};
