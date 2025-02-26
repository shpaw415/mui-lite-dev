import Button from "@/mui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/mui/Dialog";
import Divider from "@/mui/Divider";
import { useState } from "react";

export function DialogTest() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open</Button>
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        transition="slide"
      >
        <DialogTitle>Header Text</DialogTitle>
        <Divider />

        <DialogContent>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel
          scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </DialogContent>
        <Divider />

        <DialogActions>
          <Button color="warning" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color="success">Accept</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
