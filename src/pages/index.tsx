"use client";
import { DefaultTheme, ThemeProvider, type MuiTheme } from "../common/theme";
import { useLoadingEffect } from "@bunext/internal/router/index";
import Box from "../mui/Box";
import { useCallback, useEffect, useRef, useState } from "react";

import SVG from "@svg/filled/broken_image.svg";
import Button from "../mui/Button";
import type { SupportedLocalesType } from "../mui/locale";
import ToolTip from "../mui/ToolTip";
import Menu from "../mui/Menu";
import { List, ListItem } from "../mui/List";

declare global {
  var dry: boolean;
}
globalThis.dry ??= false;

export default function TestPage() {
  return (
    <Page disabled lang="frFR">
      <ToolTipTest />
    </Page>
  );
}

function Page({
  children,
  disabled,
  theme,
  lang = "enUS",
}: {
  children: any;
  disabled?: boolean;
  theme?: "light" | "dark";
  lang?: SupportedLocalesType;
}) {
  useLoadingEffect(() => {
    if (globalThis.dry) window.location.reload();
    globalThis.dry = true;
  }, []);
  const [theme1, setTheme1] = useState(structuredClone(DefaultTheme));
  const [theme2, setTheme2] = useState(() => {
    const cTheme = structuredClone(DefaultTheme);
    cTheme.theme = "dark";
    cTheme.locale = lang;
    return cTheme;
  });
  const switcher = useCallback((theme: MuiTheme) => {
    theme.theme = theme.theme == "light" ? "dark" : "light";
    return structuredClone(theme);
  }, []);
  useEffect(() => {
    if (theme) {
      setTheme1((c) => {
        c.theme = theme;
        c.locale = lang;
        return structuredClone(c);
      });
    }
  }, [theme]);
  return (
    <Box className="flex min-h-[100vh]">
      <ThemeProvider className="flex-1 min-h-full p-10 pt-16" theme={theme1}>
        <Button
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClick={() => {
            setTheme1((e) => switcher(e));
            setTheme2((e) => switcher(e));
          }}
        >
          Theme Switcher
        </Button>
        {children}
      </ThemeProvider>
      {!disabled && (
        <ThemeProvider className="flex-1 min-h-full p-10 pt-16" theme={theme2}>
          {children}
        </ThemeProvider>
      )}
    </Box>
  );
}

function ToolTipTest() {
  const ref = useRef(null);
  return (
    <>
      <Button ref={ref}>Test</Button>
      <Menu open anchorEl={ref}>
        <List>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
          <ListItem>Hello</ListItem>
        </List>
      </Menu>
    </>
  );
}
