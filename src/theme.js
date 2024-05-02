import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(120, 143, 211)",
            contrastText: "rgb(255, 255, 255)",
        },
        secondary: {
            main: "rgb(187, 195, 247)"
        }
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: "20px 30px",
                    borderWidth: "1px",
                    backgroundColor: "rgb(185, 196, 214)",
                }
            }
        }
    },
});