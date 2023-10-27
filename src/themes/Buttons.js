import { createTheme } from "@mui/material/styles";

const createColor = (mainColor) => ({
  main: mainColor,
});

export const theme = createTheme({
  palette: {
    black: createColor('#000000'),
    apple: createColor('#5DBA40'),
    steelBlue: createColor('#5C76B7'),
    violet: createColor('#BC00A3'),
    chocolate: createColor("#722424")
  },
});
