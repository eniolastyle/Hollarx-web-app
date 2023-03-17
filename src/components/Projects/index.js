import React, { useState } from 'react';
// import Future01 from "../../images/future01.jpg";
// import Future1 from "../../images/future1.jpg";
// import Future02 from "../../images/future02.jpg";
// // import Future2 from "../../images/future2.jpg";
// import Future03 from "../../images/future03.jpg";
// import Future3 from "../../images/future3.jpg";
// import ivtech from "../../images/ivtech.jpg";
// import National from "../../images/national.jpg";
// // import Kwaptech from "../../images/kwaptech.jpg";
// import Quix from "../../images/quix.jpg";
import Img1 from '../../images/1.jpg';
import Img2 from '../../images/2.jpeg';
// import Zonal from '../../images/zonal.jpg';
import Part1 from '../../images/part-1.png';
import Part2 from '../../images/part-2.png';
import Part3 from '../../images/part-3.png';
import Part4 from '../../images/part-4.png';
import Part5 from '../../images/part-5.png';
import Part6 from '../../images/part-6.png';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsImg,
  ProjectsH2,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ArrowBackWard,
  ArrowLeft,
  ProjectsP,
  PartnerContainer,
  PartnerImg,
  ProjectLink,
  Pagination,
} from '../../styles';

export const Projects = () => {
  const [hover, setHover] = useState(false);
  const [morePro, setMorePro] = useState(0);
  const maxMore = 2;

  const handleShowMore = () => {
    setMorePro((prePro) => prePro + 1);
  };

  const handleShowPrev = () => {
    setMorePro((prePro) => prePro - 1);
  };

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Success Stories</ProjectsH1>
      <ProjectsWrapper>
        {morePro === 0 && (
          <>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                An Inspiring and educating session at Diamond FM enlightening
                our youths on mobile technology.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                Exchanging words of hope with the inspired students of Ahbabud
                dinil Islami College, Ilorin-south LGA, Ilorin.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Mobile Ecosystem</ProjectsH2>
              <ProjectsP>
                Hollarx CEO recieving award of Excellence from KWAPTECH
                President, Engineer Amir at Zone C Headquater launch.
              </ProjectsP>
            </ProjectsCard>
          </>
        )}

        {morePro === 1 && (
          <>
            <ProjectsCard>
              <ProjectsImg src={Img2} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                Another view of the CTO's passionate conversation with the
                students of Ahbabud dinil Islami.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img2} />
              <ProjectsH2>Mobile Ecosystem</ProjectsH2>
              <ProjectsP>
                The CEO at a national meeting for mobile engineering development
                in Oyo State.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img2} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                The CTO while presenting to the students on Mobile Enigineering
                at Virtuos Sprout Academy.
              </ProjectsP>
            </ProjectsCard>
          </>
        )}

        {morePro === 2 && (
          <>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Quix</ProjectsH2>
              <ProjectsP>
                Posters of marketing Quix Protection. An innovation company
                Hollarx partnered with, from the United States of America.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                Introductory session at the Virtuos Sprouts Academy with the
                Hollarx team lead by the CEO and CTO, downtown Ilorin-south,
                Ilorin.
              </ProjectsP>
            </ProjectsCard>
            <ProjectsCard>
              <ProjectsImg src={Img1} />
              <ProjectsH2>Future I</ProjectsH2>
              <ProjectsP>
                A student workshop view taken while the Hollarx team visited the
                International Vocational and Technical Education Center in Kwara
                State.
              </ProjectsP>
            </ProjectsCard>
          </>
        )}
      </ProjectsWrapper>
      <Pagination>
        {morePro > 0 && (
          <HeroBtnWrapper>
            <ProjectLink
              onClick={morePro > 0 ? handleShowPrev : null}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              {hover ? <ArrowBackWard /> : <ArrowLeft />} Prev
            </ProjectLink>
          </HeroBtnWrapper>
        )}
        {morePro < maxMore && (
          <HeroBtnWrapper>
            <ProjectLink
              onClick={morePro < maxMore ? handleShowMore : null}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              Next {hover ? <ArrowForward /> : <ArrowRight />}
            </ProjectLink>
          </HeroBtnWrapper>
        )}
      </Pagination>
      <PartnerContainer>
        <PartnerImg src={Part3} />
        <PartnerImg src={Part6} />
        <PartnerImg src={Part2} />
        <PartnerImg src={Part1} />
        <PartnerImg src={Part4} />
        <PartnerImg src={Part5} hg={5} mg={0.5} />
      </PartnerContainer>
    </ProjectsContainer>
  );
};
