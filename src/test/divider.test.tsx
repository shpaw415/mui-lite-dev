import Box from "@/mui/Box";
import Divider from "@/mui/Divider";

export function DividerTest() {
  return (
    <Box
      sx={{ width: 200, display: "flex", flexDirection: "column" }}
      className="space-y-4"
    >
      <Divider />
      <Divider variant="inset" />
      <Divider variant="middle" />
    </Box>
  );
}
