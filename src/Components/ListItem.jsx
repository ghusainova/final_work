import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  //justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  font-size: 30px;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: #fff;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px #000;
    transition: box-shadow 500ms;
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{item.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</p>
      </Item>
    ))}
  </List>
);
