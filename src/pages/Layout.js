import React, { useContext } from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeContext } from './../context/ThemeContext';

const StyledHeader = styled.div`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const StyledBody = styled.div`
  background: ${(props) => props.theme.body.background};
  color: ${(props) => props.theme.body.color};
`;

const Layout = ({ children }) => {
  const [state] = useContext(ThemeContext);
  return (
    <ThemeProvider theme={state.currentTheme}>
      <StyledHeader>
        <Header label='Intranet Poudlard'></Header>
      </StyledHeader>
      <StyledBody>{children}</StyledBody>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
