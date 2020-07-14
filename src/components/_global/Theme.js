import { theme } from "@chakra-ui/core";

const colors = {
  blue: {
    50: '#e8eaff',
    100: '#bec4f8',
    200: '#939ded',
    300: '#6876e4',
    400: '#3e4fdb',
    500: '#2436c1',
    600: '#1b2a97',
    700: '#111e6d',
    800: '#081244',
    900: '#02051c',
  },
  gray: {
    50: '#f3f2f2',
    100: '#d8d8d8',
    200: '#bebebe',
    300: '#a4a4a4',
    400: '#8b8b8b',
    500: '#717171',
    600: '#585858',
    700: '#3f3f3f',
    800: '#252525',
    900: '#0d0c0c',
  },
  purple: {
    50: '#f0eefb',
    100: '#d1cee3',
    200: '#b3aecf',
    300: '#958dbb',
    400: '#766ea8',
    500: '#5d548e',
    600: '#48416f',
    700: '#342e4f',
    800: '#1f1c31',
    900: '#0a0814',
  },
}

const appTheme = {
    ...theme,
    colors: {
        ...theme.colors,
        ...colors,
    },
};

const cssConfig = (theme) => ({
    light: {
      color: theme.colors.gray[900],
      bg: theme.colors.gray[50],
      borderColor: theme.colors.gray[200],
      placeholderColor: theme.colors.gray[500]
    },
    dark: {
      color: theme.colors.whiteAlpha[900],
      bg: theme.colors.gray[900],
      borderColor: theme.colors.whiteAlpha[300],
      placeholderColor: theme.colors.whiteAlpha[400]
    }
});

export {
    appTheme,
    cssConfig,
};