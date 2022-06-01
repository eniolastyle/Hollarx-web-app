import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  /* overflow: hidden; */
  background: var(--primary-main-color);
`;

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: column;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormIcon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
    /* margin-top: 10px; */
  }
`;

export const SuccessCard = styled.div`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  place-items: center;
  margin: 0 auto;
  padding: 60px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  margin-top: -40px;
  padding: 32px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
    margin-top: 30px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 10px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
`;

// export const FormTextArea = styled.textarea`
//   padding: 16px 16px;
//   margin-bottom: 32px;
//   border: none;
//   border-radius: 4px;
// `;

export const FormButton = styled.button`
  background: var(--primary-main-color);
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Text = styled.span`
  text-align: center;
  /* margin-top: 5px; */
  margin-bottom: 20px;
  color: #fff;
  font-size: 14px;
  color: var(--primary-main-color);
`;
