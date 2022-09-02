import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  z-index: 100;
  left: 0px;
  top: 0px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: #323444;
  color: #ffffff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;


const About = styled.p`
  display: flex;
  align-items: center;
`

const Contacts = styled.p`
  display: flex;
  align-items: center;
`

const Delivery = styled.p`
  display: flex;
  align-items: center;
`

const News = styled.p`
  display: flex;
  align-items: center;
`

const Login = styled.button`
  color: #ffffff;
  font-size: 14px;
  border: none;
  background: transparent;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="Лого" />
      <H1>PriborovNet</H1>
    </Logo>

      <News>
          <p>Склад</p>
      </News>

      <About>
          <p>БД поставщиков</p>
      </About>

      <Contacts>
          <p>БД клиентов</p>
      </Contacts>

      <Delivery>
          <p>Программа поставок</p>
      </Delivery>


      <Login>
      <img src={signImg} alt="Пользователь" />
      <p>Гульшат Хусаинова</p>
    </Login>
  </NavBarStyled>
);
