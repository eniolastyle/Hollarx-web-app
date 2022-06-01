import React from "react";
import Repair from "../../images/repair.svg";
import Institution from "../../images/edu.svg";
import Product from "../../images/product.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesImg,
  ServicesH2,
  ServicesP,
  NavBtn,
  ServiceIconLink,
} from "../../styles";
import { FaWhatsapp } from "react-icons/fa";

export const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesImg src={Repair} />
          <ServicesH2>Mobile Repair</ServicesH2>
          <ServicesP>
            We fix all kinds of mobile problems and our solutions assure you
            rest of mind.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesImg src={Institution} />
          <ServicesH2>Training Institution</ServicesH2>
          <ServicesP>
            We train Progressive minds to be globally recognised mobile
            engineers.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesImg src={Product} />
          <ServicesH2>Product</ServicesH2>
          <ServicesP>
            We sell all kinds of gadgets or accessories and mobile repair tools.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      <NavBtn style={{ display: "inline-block" }}>
        <ServiceIconLink
          href="https://wa.me/+2347033003154"
          target="_blank"
          aria-label="Whatsapp"
        >
          <FaWhatsapp />
          <span>Speak to us</span>
        </ServiceIconLink>
      </NavBtn>
    </ServicesContainer>
  );
};
