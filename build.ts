import { cpSync } from "fs";

cpSync("./src/mui", "./dist/mui", { recursive: true, force: true });
cpSync("./static", "./dist/style", { recursive: true, force: true });
cpSync("./src/common", "./dist/common", { recursive: true, force: true });
