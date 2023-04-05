import styled from 'styled-components';
import { Field, Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
  padding: 10px;
  width: 400px;
  border: 1px solid black;
  height: 220px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 20px;
`;

export const Input = styled(Field)`
  width: 100%;
`;

export const Button = styled.button`
  background-color: lightblue;
  margin-top: 28px;
  border-radius: 4px;
  font-size: 14px;
  border: lightgray;
  padding: 14px;
  font-size: 18px;
`;
