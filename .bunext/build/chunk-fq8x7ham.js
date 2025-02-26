import {
  __toESM,
  match,
  require_jsx_dev_runtime,
  require_react,
  useReloadEffect
} from "./chunk-2m3fw5r9.js";
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/head.tsx
var import_react = __toESM(require_react(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);

class HeadDataClass {
  head = {};
  currentPath;
  setHead({ data, path }) {
    this.head[path] = data;
  }
  _setCurrentPath(path) {
    this.currentPath = path.split("pages").slice(1).join("pages").replace("/index.tsx", "");
    if (this.currentPath.length == 0)
      this.currentPath = "/";
  }
}
var Head = new HeadDataClass;
function deepMerge(obj, assign) {
  const copy = structuredClone(obj || {});
  for (const key of Object.keys(assign || {})) {
    switch (key) {
      case "author":
      case "publisher":
      case "title":
        copy[key] = assign[key];
        break;
      case "link":
      case "meta":
        if (copy[key])
          copy[key].push(...assign[key]);
        else
          copy[key] = assign[key];
        break;
    }
  }
  return copy;
}
function HeadElement({ currentPath }) {
  const globalX = globalThis;
  const [reload, setReload] = import_react.useState(false);
  useReloadEffect(() => {
    setReload(true);
  }, []);
  import_react.useEffect(() => {
    setReload(false);
  }, [reload]);
  let path = "";
  currentPath = currentPath.split("?")[0];
  if (typeof window != "undefined") {
    path = match(currentPath)?.path;
  } else {
    path = router2.server?.match(currentPath)?.name;
  }
  if (!path)
    throw new Error(currentPath + " not found");
  const data = typeof window != "undefined" ? deepMerge(globalX.__HEAD_DATA__["*"] || {}, globalX.__HEAD_DATA__[path]) : deepMerge(Head.head["*"] || {}, Head.head[path]);
  return !reload && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("head", {
    children: [
      data?.title && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("title", {
        children: data.title
      }, undefined, false, undefined, this),
      data?.author && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "author",
        content: data.author
      }, undefined, false, undefined, this),
      data?.publisher && /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        name: "publisher",
        content: data.publisher
      }, undefined, false, undefined, this),
      data?.meta && data.meta.map((e, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        ...e
      }, index, false, undefined, this)),
      data?.link && data.link.map((e, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("link", {
        ...e
      }, index, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
export { Head, HeadElement };
