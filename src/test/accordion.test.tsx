import Accordion, {
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
} from "@/mui/Accordion";
import Button from "@/mui/Button";
import SVG from "@svg/filled/broken_image.svg";

export function AccordionTest() {
  return (
    <div>
      <Accordion
        disabled
        Summary={<AccordionSummary>Accordion 1</AccordionSummary>}
      >
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at
          quia alias vero assumenda ducimus animi facere quisquam, debitis
          nesciunt accusamus, blanditiis quae perspiciatis. Aut esse nesciunt
          consectetur eaque culpa!
        </AccordionDetails>
        <AccordionActions>
          <Button variant="text">Accept</Button>
          <Button variant="text">Cancel</Button>
        </AccordionActions>
      </Accordion>
      <Accordion Summary={<AccordionSummary>Accordion 2</AccordionSummary>}>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at
          quia alias vero assumenda ducimus animi facere quisquam, debitis
          nesciunt accusamus, blanditiis quae perspiciatis. Aut esse nesciunt
          consectetur eaque culpa!
        </AccordionDetails>
        <AccordionActions>
          <Button variant="text">Accept</Button>
          <Button variant="text">Cancel</Button>
        </AccordionActions>
      </Accordion>
      <Accordion
        Summary={
          <AccordionSummary expendIcon={<SVG />}>Accordion 1</AccordionSummary>
        }
      >
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, at
          quia alias vero assumenda ducimus animi facere quisquam, debitis
          nesciunt accusamus, blanditiis quae perspiciatis. Aut esse nesciunt
          consectetur eaque culpa!
        </AccordionDetails>
        <AccordionActions>
          <Button variant="text">Accept</Button>
          <Button variant="text">Cancel</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
