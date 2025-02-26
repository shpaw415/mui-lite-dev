import Avatar from "@/mui/Avatar";
import IconButton from "@/mui/IconButton";
import {
  Collapse,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@/mui/List";
import Paper from "@/mui/Paper";
import SVG from "@svg/filled/broken_image.svg";
import { useState } from "react";

export function ListTest() {
  const [open, setOpen] = useState(true);
  return (
    <Paper elevation={10}>
      <List
        dense
        disablePadding
        subheader="Header test"
        sx={{
          maxHeight: 200,
          overflow: "auto",
          backgroundColor: {
            "bg-main": "theme",
          },
        }}
      >
        <ListItem disableGutters>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton>
              <SVG />
            </IconButton>
          }
        >
          <ListItemButton selected>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => setOpen((c) => !c)}>
            <ListItemText primary="open collapsed" />
            <SVG className="fill-current" />
          </ListItemButton>
        </ListItem>
        <Collapse open={open}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SVG />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Collapsed ListItem" secondary="helpText" />
          </ListItem>
        </Collapse>
        <ListItem>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListSubheader>My header</ListSubheader>
        <ListItem>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => console.log("test")}>
            <ListItemIcon>
              <SVG />
            </ListItemIcon>
            <ListItemText primary="break" />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
}
