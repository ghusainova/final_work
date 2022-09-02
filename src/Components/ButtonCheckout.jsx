import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  cursor: pointer;
  color: #ffffff;
  padding: 20px 80px;
  font-size: 21px;
  border-color: transparent;
  background-color: #323444;
  transition-property: color, border-color, background-color;
  transition-duration: 0.3s;
  &:hover{
    color: #323444;
    border-color: #323444;
    background-color: #ffffff;
  }
  &:focus {
    outline-style: #323444;
  }
`;
