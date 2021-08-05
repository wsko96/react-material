import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
           light: '#777',
           main: '#555',
           dark: '#000',
        },
        secondary: {
          main: '#f44336',
        },
    },
    typography: {
        h6: {
            fontFamily: 'Ubuntu',
        },
        button: {
            fontStyle: 'italic',
        },
    }
});

export default theme;
