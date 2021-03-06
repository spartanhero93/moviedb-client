import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#fff',
      default: 'white',
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#262f44',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text: {
      primary: '#20232a',
    },
    // error: will use the default color
  },
})

export default theme
