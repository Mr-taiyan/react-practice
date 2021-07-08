import { createMuiTheme, createTheme } from "@material-ui/core";
import { palette, spacing, typography } from "@material-ui/system";
import styled, { ThemeProvider } from "styled-components";

const Box = styled.div`
  ${palette}${spacing}${typography}
`;

const theme = createMuiTheme();

export default function Demo() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        color="primary.main"
        bgcolor="background.paper"
        fontFamily="h6.fontFamily"
        p={{ xs: 2, sm: 3, md: 4 }}
      >
        $material-ui/system
      </Box>
    </ThemeProvider>
  );
}
