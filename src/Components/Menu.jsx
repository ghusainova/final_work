import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner'

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <Banner />
    <SectionMenu>
      <h2>Датчики механического воздействия</h2>
      <ListItem itemList={dbMenu.burger} setOpenItem={setOpenItem} />
    </SectionMenu>
    <SectionMenu>
      <h2>Другие датчики</h2>
      <ListItem itemList={dbMenu.other} setOpenItem={setOpenItem} />
    </SectionMenu>
  </MenuStyled>
);
