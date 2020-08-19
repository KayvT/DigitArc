import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2fd8c9",
    },

    secondary: {
      main: "#282828",
    },
  },
});
class Accordin extends React.Component {
  render() {
    return (
      <div className="accordinItem">
        <MuiThemeProvider theme={theme}>
          <Accordion color="primary">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{this.props.jobOpening.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{this.props.jobOpening.Description}</Typography>
            </AccordionDetails>
          </Accordion>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Accordin;
