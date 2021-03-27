import React from "react";
import styled from "styled-components";
import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "./validationSchema";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 50px;
  form {
    width: 400px;
  }
  button {
    width: 100px;
  }
  ErrorMessage {
    color: red;
  }
`;

const StyledError = styled.span`
  color: red;
`;

const initialValues = {
  email: "",
  password: "",
};

const onSubmit = (values, actions) => {
  console.log("hello");
  console.log(values);
};
export const UserForm = () => {
  return (
    <FormContainer>
      <StyledForm>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <div>
                <h2>Live Modification</h2>
                <pre>{JSON.stringify(values, null, 3)}</pre>
              </div>
              <FormGroup label="Email" labelFor="email">
                <InputGroup
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter the email"
                  value={values.email}
                  intent={Intent.PRIMARY}
                />
                <ErrorMessage name="email">
                  {(errMsg) => <StyledError>{errMsg}</StyledError>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup label="Password" labelFor="password">
                <InputGroup
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter the password"
                  value={values.password}
                  intent={Intent.PRIMARY}
                />
                <ErrorMessage name="password">
                  {(errMsg) => <StyledError>{errMsg}</StyledError>}
                </ErrorMessage>
              </FormGroup>

              <Button onClick={handleSubmit} intent={Intent.SUCCESS}>
                LOGIN
              </Button>
            </Form>
          )}
        </Formik>
      </StyledForm>
    </FormContainer>
  );
};
