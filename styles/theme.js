import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

let theme = createTheme({
    direction: 'rtl',
    palette: {
        mode: "light",
        primary: {
            main: "#1ecbe1",
            light: "#4BD5E7",
            dark: "#127B88",
            contrastText: "#212121",
        },
        secondary: {
            main: "#E1341E",
            light: "#E75D4B",
            dark: "#982314",
            contrastText: "#ffffff",
        },
        other: {
            borderColor: "#cccccc",
        },
    },
    shape: {
        borderRadius: 12,
    },
    typography: {
        fontFamily: 'Vazir',
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                }
            }
        },
    },
}, faIR)

theme = responsiveFontSizes(theme);
export default theme;
