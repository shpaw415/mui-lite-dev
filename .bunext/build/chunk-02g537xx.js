import {
  RequestContext,
  __require,
  __toESM,
  generateRandomString,
  match,
  normalize,
  require_jsx_dev_runtime,
  require_react,
  useReloadEffect
} from "./chunk-dr59fgg2.js";
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/head.tsx
var import_react2 = __toESM(require_react(), 1);

// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/client/request.ts
var import_react = __toESM(require_react(), 1);
// module:/home/shpaw415/Documents/bun_module/mui-tailwind/node_modules/@bunpmjs/bunext/features/head.tsx
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
"use client";

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
function setParamOnDevMode() {
  if (true)
    return `?${generateRandomString(5)}`;
  else
    ;
}
function GlobalDataFromServerSide() {
  return {
    __CSS_PATHS__: router2.cssPathExists,
    __LAYOUT_ROUTE__: router2.layoutPaths,
    __PAGES_DIR__: router2.pageDir
  };
}
function GetCssPaths(match2, options) {
  if (!match2)
    return [];
  const globalX = typeof window != "undefined" ? globalThis : GlobalDataFromServerSide();
  let currentPath = "/";
  const cssPaths = [];
  const formatedPath = match2.path == "/" ? [""] : match2.path.split("/");
  for (const p of formatedPath) {
    currentPath += p.length > 0 ? p : "";
    if (globalX.__LAYOUT_ROUTE__.includes(currentPath)) {
      const normailizePath = normalize(`/${globalX.__PAGES_DIR__}${currentPath}/layout.css`);
      if (globalX.__CSS_PATHS__.includes(normailizePath))
        cssPaths.push(normailizePath + (options?.onlyFilePath ? "" : setParamOnDevMode()));
    }
    if (p.length > 0)
      currentPath += "/";
  }
  const cssPath = match2.value.split(".");
  cssPath.pop();
  if (globalX.__CSS_PATHS__.includes(normalize(`${cssPath.join(".")}.css`))) {
    cssPaths.push(normalize(`${cssPath.join(".")}.css${options?.onlyFilePath ? "" : setParamOnDevMode()}`));
  }
  return cssPaths;
}
var HeadContext = import_react2.createContext([() => {}, "/"]);
function HeadProvider({
  currentPath,
  children
}) {
  const globalX = globalThis;
  const [reload, setReload] = import_react2.useState(false);
  const request = import_react2.useContext(RequestContext);
  useReloadEffect(() => {
    setReload(true);
  }, []);
  import_react2.useEffect(() => {
    setReload(false);
  }, [reload]);
  currentPath = currentPath.split("?")[0];
  const path = import_react2.useMemo(() => {
    if (typeof window != "undefined") {
      return match(currentPath)?.path;
    } else {
      return router2.server?.match(currentPath)?.name;
    }
  }, [currentPath]);
  const [cssPaths, setCssPaths] = import_react2.useState([]);
  import_react2.useEffect(() => {
    setCssPaths(GetCssPaths(match(currentPath)));
  }, [currentPath]);
  if (!path)
    throw new Error(currentPath + " not found");
  const PreloadedHeadData = import_react2.useMemo(() => typeof window != "undefined" ? deepMerge(globalX.__HEAD_DATA__["*"] || {}, globalX.__HEAD_DATA__[path]) : deepMerge(Head.head["*"] || {}, {
    ...Head.head[path],
    ...request?.headData?.[path]
  }), [path]);
  const [data, setData] = import_react2.useState({});
  import_react2.useMemo(() => setData({}), [path]);
  const dataSetter = import_react2.useCallback((data2) => {
    setData(typeof window != "undefined" ? deepMerge(globalX.__HEAD_DATA__["*"] || {}, {
      ...globalX.__HEAD_DATA__[path],
      ...data2
    }) : deepMerge(Head.head["*"] || {}, { ...Head.head[path], ...data2 }));
  }, [path]);
  const providerData = import_react2.useMemo(() => [dataSetter, path], [dataSetter, path]);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(HeadContext.Provider, {
    value: providerData,
    children: [
      !reload && /* @__PURE__ */ jsx_dev_runtime.jsxDEV(HeadElement, {
        path,
        data: {
          ...PreloadedHeadData,
          ...data,
          link: [...data?.link ?? []]
        },
        style: cssPaths.map((link) => ({
          rel: "stylesheet",
          href: link
        }))
      }, undefined, false, undefined, this),
      children
    ]
  }, undefined, true, undefined, this);
}
function HeadElement({
  data,
  path,
  style
}) {
  const getPaths = () => GetCssPaths({
    value: normalize(`/${router2.pageDir}/${path}.js`),
    params: {},
    path
  }, {
    onlyFilePath: true
  }).map((path2) => `${router2.buildDir}${path2}`);
  const getStringData = (filePath) => {
    const buffer = (() => ({})).readFileSync(filePath);
    return buffer.toString("utf-8");
  };
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV("head", {
    suppressHydrationWarning: true,
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
      data?.meta?.map((e, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("meta", {
        ...e
      }, index, false, undefined, this)),
      data?.link?.map((e, index) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("link", {
        ...e
      }, index, false, undefined, this)),
      typeof window == "undefined" && getPaths().map((path2, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("style", {
        dangerouslySetInnerHTML: {
          __html: getStringData(path2)
        }
      }, i, false, undefined, this)),
      typeof window != "undefined" && style?.map((props, i) => /* @__PURE__ */ jsx_dev_runtime.jsxDEV("link", {
        rel: "stylesheet",
        ...props
      }, i, false, undefined, this))
    ]
  }, undefined, true, undefined, this);
}
export { Head, HeadProvider };
