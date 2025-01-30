import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#00d",
        },
    },
});

function AppWrapper({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppWrapper;
