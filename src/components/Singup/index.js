import React, { useState, useRef } from "react";
import {
  FormContainer,
  FormWrapper,
  FormIcon,
  FormContent,
  Form,
  FormH1,
  Text,
  FormLabel,
  FormInput,
  FormButton,
  SuccessCard,
} from "../../styles";
import emailjs from "@emailjs/browser";

export const SignUp = () => {
  const form = useRef();
  const [formSuccess, setFormSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ktads0p",
        "template_nmojtoj",
        form.current,
        "4mwRCY_yss2BmCFyx"
      )
      .then(
        (result) => {
          setFormSuccess(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <FormContainer>
        <FormWrapper>
          <FormIcon to="/">hollarx</FormIcon>
          {formSuccess === false ? (
            <FormContent>
              <Form ref={form} onSubmit={sendEmail}>
                <FormH1>Coming Soon</FormH1>
                <Text>Please signup to get notified as soon as it's live</Text>
                <FormLabel htmlFor="for">Full Name</FormLabel>
                <FormInput type="text" name="full_name" required />
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" name="email" required />
                <FormLabel htmlFor="for">Phone Number</FormLabel>
                <FormInput type="text" name="phone_number" required />
                <FormButton type="submit" value="Send">
                  Stay Conected
                </FormButton>
              </Form>
            </FormContent>
          ) : (
            <FormContent>
              <SuccessCard>
                <FormH1>Thank You and God Bless</FormH1>
              </SuccessCard>
            </FormContent>
          )}
        </FormWrapper>
      </FormContainer>
    </>
  );
};
