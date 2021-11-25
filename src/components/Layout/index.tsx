import React from 'react';
import Content from '../Content';
import MainHeader from '../MainHeader';
import Menu from '../MenuSet/Menu';
import { Grid } from './styles';

const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHeader />
    <Menu />
    <Content>
      {children}
    </Content>
  </Grid>
)

export default Layout;