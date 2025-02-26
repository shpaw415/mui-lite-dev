import { List, ListItem, ListItemText } from "@/mui/List";
import SVG from "@svg/filled/broken_image.svg";

export function ListItemTest() {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Element" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Element" />
      </ListItem>
    </List>
  );
}
