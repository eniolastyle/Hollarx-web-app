import React, { useState } from "react";
import Future1 from "../../images/future1.jpg";
import Future2 from "../../images/future2.jpg";
import Future3 from "../../images/future3.jpg";
import National from "../../images/national.jpg";
import Kwaptech from "../../images/kwaptech.jpg";
import Quix from "../../images/quix.jpg";
import Part1 from "../../images/part-1.png";
import Part2 from "../../images/part-2.png";
import Part3 from "../../images/part-3.png";
import Part4 from "../../images/part-4.png";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsH2,
  HeroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
  ProjectsP,
  PartnerContainer,
  PartnerImg,
} from "../../styles";

export const Projects = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImg src={Future1} />
          <ProjectsH2>Future I</ProjectsH2>
          <ProjectsP>
            An Inspiring and educating session at Virtuos Sprout Academy.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Future2} />
          <ProjectsH2>Future I</ProjectsH2>
          <ProjectsP>
            Exchanging words of development with the inspired young souls.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Quix} />
          <ProjectsH2>Quix</ProjectsH2>
          <ProjectsP>
            Posters of marketing Quix. An innovation company Hollarx partnered
            with.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Kwaptech} />
          <ProjectsH2>Kwaptech</ProjectsH2>
          <ProjectsP>
            Hollarx CEO at the launching of KWAPTECH annual magazine.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={National} />
          <ProjectsH2>Mobile Ecosystem</ProjectsH2>
          <ProjectsP>
            The CEO of Hollarx at a national meeting of mobile engineering
            development in Oyo State.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Future3} />
          <ProjectsH2>Future I</ProjectsH2>
          <ProjectsP>
            The CTO while presenting to the students on Mobile Enigineering.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
      <HeroBtnWrapper>
        <Button
          to="projects"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          // primary="false"
          // dark="false"
        >
          View all {hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
      </HeroBtnWrapper>
      <PartnerContainer>
        <PartnerImg src={Part3} />
        <PartnerImg src={Part2} />
        <PartnerImg src={Part1} />
        <PartnerImg src={Part4} />
      </PartnerContainer>
    </ProjectsContainer>
  );
};
