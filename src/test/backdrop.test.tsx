import Backdrop from "@/mui/Backdrop";
import { CircularProgress } from "@/mui/Progress";

export function BackdropTest() {
  return (
    <Backdrop
      open
      sx={{
        backgroundColor: {
          "bg-secondary": "theme",
        },
      }}
    >
      <CircularProgress color="error" />
    </Backdrop>
  );
}
