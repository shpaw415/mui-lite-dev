import Backdrop from "@/mui/Backdrop";
import SpeedDial, { SpeedDialAction } from "@/mui/SpeedDial";
import SVG from "@svg/filled/broken_image.svg";
import { useState } from "react";

export default function SpeedDialTest() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Backdrop open={open} />
      <SpeedDial
        sx={{
          zIndex: 1500,
        }}
        trigger={["hover"]}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <SpeedDialAction tooltipOpen icon={<SVG />} tooltipTitle="test" />
        <SpeedDialAction tooltipOpen icon={<SVG />} tooltipTitle="test2" />
        <SpeedDialAction tooltipOpen icon={<SVG />} tooltipTitle="test3" />
      </SpeedDial>
    </>
  );
}
