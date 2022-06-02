import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroSpan,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "../../styles";
import Video from "../../video/video.mp4";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="/hero">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Mobile Technology Innovation</HeroH1>
        <HeroP>
          Training outstanding Mobile technology Engineers in Nigeria and
          beyond. Aspiring to be the leading mobile components producer in
          Africa
        </HeroP>
        <HeroSpan>Efficiency we speak</HeroSpan>
        <HeroBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Learn more {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

// export default HeroSection;
