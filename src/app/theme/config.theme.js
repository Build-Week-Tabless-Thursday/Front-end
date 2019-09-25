import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, blueGrey } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: blue['900'],
      background: blue['700'],
    },
    secondary: {
      main: blueGrey['700'],
    },
    error: {
      main: red['A400'],
    },
    background: {
      default: 'white',
    },
  },
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: '#00000000',
        },
      },
    },
  },
});

export { Theme };
