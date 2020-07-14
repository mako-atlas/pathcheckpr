import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";
import { Theme } from '../_global';

const AppLayout = ({children}) => {
  return (
    <ThemeProvider theme={Theme.appTheme}>
      <CSSReset config={Theme.cssConfig} />
      <ColorModeProvider>
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
