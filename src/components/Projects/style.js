import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding: 7rem 0 0 0;

  /* @media screen and (max-width: 898px) {
    /* height: 1100px; */
  /* }
  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  } */
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    h2 {
      color: var(--primary-main-color);
    }
  }
`;

export const ProjectsImg = styled.img`
  height: 150px;
  width: 260px;
  margin-bottom: 10px;
  object-fit: cover;
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: #fff;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;

export const PartnerContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

export const PartnerImg = styled.img`
  height: 7rem;
`;
