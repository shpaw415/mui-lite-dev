import Alert from "@/mui/Alert";
import Snackbar from "@/mui/Snackbar";
import { useEffect, useState } from "react";

export default function SnackTest() {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setOpen((c) => !c);
    }, 5000);
  }, []);
  return (
    <Snackbar
      message="Bonjour"
      position="bottom-left"
      animationSide="bottom"
      open={open}
      animation="slide"
    >
      <Alert
        severity="success"
        title="Test"
        variant="filled"
        onClose={() => {}}
      />
    </Snackbar>
  );
}
