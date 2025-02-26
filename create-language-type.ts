const exclude = ["SupportedLocales", "useLanguage"];
const languages = Object.keys(await import("./src/mui/locale")).filter(
  (l) => !exclude.includes(l)
);

await Bun.write(
  "languages-type.txt",
  `${languages.map((l) => `"${l}"`).join(" | ")}\n[${languages
    .map((c) => `"${c}"`)
    .join(", ")}]`
);

export { languages };
