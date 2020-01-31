import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blue from '@material-ui/core/colors/blue';


export default createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
    warning: deepPurple,
  },

  typography: {
    fontSize: 14,
  },

  overrides: {
    MuiButton: {
      root: {
        minWidth: '40px'
      }
    }
  }
});