import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: #101522;
`;
export const FooterWrap = styled.div`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  gap: 3rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    align-items: center;
    /* text-align: center !important; */
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;

  @media screen and (max-width: 420px) {
    border-top: 1px solid #fff;
    padding-top: 0.5rem;
  }
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: var(--primary-main-color);
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const SocialLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;

  &:hover {
    color: var(--primary-main-color);
    transition: 0.3s ease-out;
  }
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
  /* line-height: 1.5; */
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  gap: 1.2rem;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;

  &:hover {
    color: var(--primary-main-color);
    transition: 0.3s ease-out;
  }
`;
export const ServiceIconLink = styled.a`
  border-radius: 50px;
  background: var(--primary-main-color);
  white-space: nowrap;
  padding: 10px 22px;
  color: #010600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
  }
`;
