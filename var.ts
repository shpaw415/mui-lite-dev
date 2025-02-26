import { argv } from "bun";
import {
  DefaultTheme,
  ThemeToCssVar,
  type MuiTheme,
  type Schemes,
} from "./src/common/theme/index";

const arg = argv[2] as "css" | "config";

function MakeVarCss() {
  Bun.write(
    "var.css",
    `:root { 
    ${ThemeToCssVar(DefaultTheme)}
    }`
  );
}

function MakeVarTailwindConfig() {
  const colors: Record<string, string> = {};
  const backgroundColor: Record<string, string> = {};
  (Object.keys(DefaultTheme) as Array<keyof MuiTheme>)
    .filter((e) => e != "theme")
    .map((key) => {
      if (key.startsWith("bg-")) {
        const formatedkey = key.replace("bg-", "");
        (Object.keys(DefaultTheme[key]) as Array<keyof Schemes>).map((k) => {
          backgroundColor[`${formatedkey}-${k}`] = `var(--${key}-${k})`;
        });
        backgroundColor[formatedkey] = `var(--${key})`;
      } else if (key.startsWith("text-")) {
        const formatedkey = key.replace("text-", "");
        (Object.keys(DefaultTheme[key]) as Array<keyof Schemes>).map((k) => {
          colors[`${formatedkey}-${k}`] = `var(--${key}-${k})`;
        });
        colors[formatedkey] = `var(--${key})`;
      }
    });

  Bun.write(
    "var.json",
    JSON.stringify(
      {
        colors,
        backgroundColor,
      },
      null,
      2
    )
  );
}

switch (arg) {
  case "css":
    MakeVarCss();
    break;
  case "config":
    MakeVarTailwindConfig();
    break;
}
