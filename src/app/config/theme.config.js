import { createMuiTheme } from '@material-ui/core/styles';
import { red, indigo, pink } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo['500'],
    },
    secondary: {
      main: pink['500'],
    },
    error: {
      main: red['A400'],
    },
    background: {
      default: 'white',
    },
  },
});

export { Theme };
