import Box from "@/mui/Box";
import Button from "@/mui/Button";
import Divider from "@/mui/Divider";
import Drawer from "@/mui/Drawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@/mui/List";
import ToolTip from "@/mui/ToolTip";
import SVG from "@svg/filled/broken_image.svg";
import { useRef, useState } from "react";

export function DrawerTest() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  return (
    <Box className="flex">
      <Drawer
        open={open}
        anchor="left"
        variant="persistent"
        onClose={() => setOpen(false)}
        width="200px"
        minifiedWidth="58px"
      >
        <List className="py-2">
          <ListSubheader
            className="py-0 h-8"
            sx={{
              height: open ? 58 : 0,
              overflow: "hidden",
              transition: "200ms ease-in-out",
            }}
          >
            Main items
          </ListSubheader>
          <ListItem className="flex-1">
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
          </ListItem>
          <ToolTip
            title="test"
            triggers={["hover"]}
            arrow
            sx={{
              marginLeft: 5,
              marginRight: 5,
              display: "flex",
              flex: 1,
            }}
            placement="right"
            offSet={10}
            disabled={open}
          >
            <ListItemButton
              className="flex-1"
              selected
              sx={{
                borderRadius: "15px",
                paddingLeft: 12,
              }}
            >
              <ListItemIcon>
                <SVG />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ToolTip>
        </List>
        <Divider variant="middle" />
      </Drawer>
      <Button ref={ref} onClick={() => setOpen(true)}>
        open
      </Button>
    </Box>
  );
}
