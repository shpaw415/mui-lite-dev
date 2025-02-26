import Badge from "@/mui/Badge";
import SVG from "@svg/filled/broken_image.svg";

export function BadgeTest() {
  return (
    <Badge badgeContent={4} variant="dot" position="bottom-right">
      <SVG />
    </Badge>
  );
}
