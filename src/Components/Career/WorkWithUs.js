import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

class Accordin extends React.Component {
  render() {
    return (
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton> BLA BLA</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>TEXT TESXT TESADSA</AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    );
  }
}
export default Accordin;
