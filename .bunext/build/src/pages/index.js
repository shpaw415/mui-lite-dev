import {
  require_jsx_dev_runtime,
  require_react,
  require_react_dom,
  useLoadingEffect
} from "./../../chunk-kp8rnqgv.js";
import {
  __commonJS,
  __toESM
} from "./../../chunk-bc2nw43f.js";

// node_modules/color-name/index.js
var require_color_name = __commonJS((exports, module) => {
  module.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  };
});

// node_modules/css-unit-converter/index.js
var require_css_unit_converter = __commonJS((exports, module) => {
  var conversions = {
    px: {
      px: 1,
      cm: 96 / 2.54,
      mm: 96 / 25.4,
      in: 96,
      pt: 96 / 72,
      pc: 16
    },
    cm: {
      px: 2.54 / 96,
      cm: 1,
      mm: 0.1,
      in: 2.54,
      pt: 2.54 / 72,
      pc: 2.54 / 6
    },
    mm: {
      px: 25.4 / 96,
      cm: 10,
      mm: 1,
      in: 25.4,
      pt: 25.4 / 72,
      pc: 25.4 / 6
    },
    in: {
      px: 1 / 96,
      cm: 1 / 2.54,
      mm: 1 / 25.4,
      in: 1,
      pt: 1 / 72,
      pc: 1 / 6
    },
    pt: {
      px: 0.75,
      cm: 72 / 2.54,
      mm: 72 / 25.4,
      in: 72,
      pt: 1,
      pc: 12
    },
    pc: {
      px: 6 / 96,
      cm: 6 / 2.54,
      mm: 6 / 25.4,
      in: 6,
      pt: 6 / 72,
      pc: 1
    },
    deg: {
      deg: 1,
      grad: 0.9,
      rad: 180 / Math.PI,
      turn: 360
    },
    grad: {
      deg: 400 / 360,
      grad: 1,
      rad: 200 / Math.PI,
      turn: 400
    },
    rad: {
      deg: Math.PI / 180,
      grad: Math.PI / 200,
      rad: 1,
      turn: Math.PI * 2
    },
    turn: {
      deg: 1 / 360,
      grad: 1 / 400,
      rad: 0.5 / Math.PI,
      turn: 1
    },
    s: {
      s: 1,
      ms: 1 / 1000
    },
    ms: {
      s: 1000,
      ms: 1
    },
    Hz: {
      Hz: 1,
      kHz: 1000
    },
    kHz: {
      Hz: 1 / 1000,
      kHz: 1
    },
    dpi: {
      dpi: 1,
      dpcm: 1 / 2.54,
      dppx: 1 / 96
    },
    dpcm: {
      dpi: 2.54,
      dpcm: 1,
      dppx: 2.54 / 96
    },
    dppx: {
      dpi: 96,
      dpcm: 96 / 2.54,
      dppx: 1
    }
  };
  module.exports = function(value, sourceUnit, targetUnit, precision) {
    if (!conversions.hasOwnProperty(targetUnit))
      throw new Error("Cannot convert to " + targetUnit);
    if (!conversions[targetUnit].hasOwnProperty(sourceUnit))
      throw new Error("Cannot convert from " + sourceUnit + " to " + targetUnit);
    var converted = conversions[targetUnit][sourceUnit] * value;
    if (precision !== false) {
      precision = Math.pow(10, parseInt(precision) || 5);
      return Math.round(converted * precision) / precision;
    }
    return converted;
  };
});

// node_modules/css-color-converter/lib/index.js
var require_lib = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fromRgba = fromRgba;
  exports.fromRgb = fromRgb;
  exports.fromHsla = fromHsla;
  exports.fromHsl = fromHsl;
  exports.fromString = fromString;
  exports.default = undefined;
  var _colorName = _interopRequireDefault(require_color_name());
  var _cssUnitConverter = _interopRequireDefault(require_css_unit_converter());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0;i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o)
      return;
    if (typeof o === "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor)
      n = o.constructor.name;
    if (n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i = 0, arr2 = new Array(len);i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
      for (var _i = arr[Symbol.iterator](), _s;!(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  var hex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?$/;
  var shortHex = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])?$/;
  var rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
  var rgbfn = /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
  var rgbperc = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
  var rgbpercfn = /^rgba?\(\s*(\d+%)\s+(\d+%)\s+(\d+%)(?:\s*\/\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
  var hsl = /^hsla?\(\s*(\d+)(deg|rad|grad|turn)?\s*,\s*(\d+)%\s*,\s*(\d+)%(?:\s*,\s*(0|1|0?\.\d+|\d+%))?\s*\)$/;
  function contains(haystack, needle) {
    return haystack.indexOf(needle) > -1;
  }
  function rgbToHsl(r, g, b) {
    var rprim = r / 255;
    var gprim = g / 255;
    var bprim = b / 255;
    var cmax = Math.max(rprim, gprim, bprim);
    var cmin = Math.min(rprim, gprim, bprim);
    var delta = cmax - cmin;
    var l = (cmax + cmin) / 2;
    if (delta === 0) {
      return [0, 0, l * 100];
    }
    var s = delta / (1 - Math.abs(2 * l - 1));
    var h = function() {
      switch (cmax) {
        case rprim: {
          return (gprim - bprim) / delta % 6;
        }
        case gprim: {
          return (bprim - rprim) / delta + 2;
        }
        default: {
          return (rprim - gprim) / delta + 4;
        }
      }
    }();
    return [h * 60, s * 100, l * 100];
  }
  function hslToRgb(h, s, l) {
    var hprim = h / 60;
    var sprim = s / 100;
    var lprim = l / 100;
    var c = (1 - Math.abs(2 * lprim - 1)) * sprim;
    var x = c * (1 - Math.abs(hprim % 2 - 1));
    var m = lprim - c / 2;
    var _ref = function() {
      if (hprim < 1)
        return [c, x, 0];
      if (hprim < 2)
        return [x, c, 0];
      if (hprim < 3)
        return [0, c, x];
      if (hprim < 4)
        return [0, x, c];
      if (hprim < 5)
        return [x, 0, c];
      return [c, 0, x];
    }(), _ref2 = _slicedToArray(_ref, 3), rprim = _ref2[0], gprim = _ref2[1], bprim = _ref2[2];
    return [(rprim + m) * 255, (gprim + m) * 255, (bprim + m) * 255];
  }
  var Color = /* @__PURE__ */ function() {
    function Color2(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 4), r = _ref4[0], g = _ref4[1], b = _ref4[2], a = _ref4[3];
      _classCallCheck(this, Color2);
      this.values = [Math.max(Math.min(parseInt(r, 10), 255), 0), Math.max(Math.min(parseInt(g, 10), 255), 0), Math.max(Math.min(parseInt(b, 10), 255), 0), a == null ? 1 : Math.max(Math.min(parseFloat(a), 255), 0)];
    }
    _createClass(Color2, [{
      key: "toRgbString",
      value: function toRgbString() {
        var _this$values = _slicedToArray(this.values, 4), r = _this$values[0], g = _this$values[1], b = _this$values[2], a = _this$values[3];
        if (a === 1) {
          return "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
        }
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      }
    }, {
      key: "toHslString",
      value: function toHslString() {
        var _this$toHslaArray = this.toHslaArray(), _this$toHslaArray2 = _slicedToArray(_this$toHslaArray, 4), h = _this$toHslaArray2[0], s = _this$toHslaArray2[1], l = _this$toHslaArray2[2], a = _this$toHslaArray2[3];
        if (a === 1) {
          return "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)");
        }
        return "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(a, ")");
      }
    }, {
      key: "toHexString",
      value: function toHexString() {
        var _this$values2 = _slicedToArray(this.values, 4), r = _this$values2[0], g = _this$values2[1], b = _this$values2[2], a = _this$values2[3];
        r = Number(r).toString(16).padStart(2, "0");
        g = Number(g).toString(16).padStart(2, "0");
        b = Number(b).toString(16).padStart(2, "0");
        a = a < 1 ? parseInt(a * 255, 10).toString(16).padStart(2, "0") : "";
        return "#".concat(r).concat(g).concat(b).concat(a);
      }
    }, {
      key: "toRgbaArray",
      value: function toRgbaArray() {
        return this.values;
      }
    }, {
      key: "toHslaArray",
      value: function toHslaArray() {
        var _this$values3 = _slicedToArray(this.values, 4), r = _this$values3[0], g = _this$values3[1], b = _this$values3[2], a = _this$values3[3];
        var _rgbToHsl = rgbToHsl(r, g, b), _rgbToHsl2 = _slicedToArray(_rgbToHsl, 3), h = _rgbToHsl2[0], s = _rgbToHsl2[1], l = _rgbToHsl2[2];
        return [h, s, l, a];
      }
    }]);
    return Color2;
  }();
  function fromRgba(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 4), r = _ref6[0], g = _ref6[1], b = _ref6[2], a = _ref6[3];
    return new Color([r, g, b, a]);
  }
  function fromRgb(_ref7) {
    var _ref8 = _slicedToArray(_ref7, 3), r = _ref8[0], g = _ref8[1], b = _ref8[2];
    return fromRgba([r, g, b, 1]);
  }
  function fromHsla(_ref9) {
    var _ref10 = _slicedToArray(_ref9, 4), h = _ref10[0], s = _ref10[1], l = _ref10[2], a = _ref10[3];
    var _hslToRgb = hslToRgb(h, s, l), _hslToRgb2 = _slicedToArray(_hslToRgb, 3), r = _hslToRgb2[0], g = _hslToRgb2[1], b = _hslToRgb2[2];
    return fromRgba([r, g, b, a]);
  }
  function fromHsl(_ref11) {
    var _ref12 = _slicedToArray(_ref11, 3), h = _ref12[0], s = _ref12[1], l = _ref12[2];
    return fromHsla([h, s, l, 1]);
  }
  function fromHexString(str) {
    var _ref13 = hex.exec(str) || shortHex.exec(str), _ref14 = _slicedToArray(_ref13, 5), r = _ref14[1], g = _ref14[2], b = _ref14[3], a = _ref14[4];
    r = parseInt(r.length < 2 ? r.repeat(2) : r, 16);
    g = parseInt(g.length < 2 ? g.repeat(2) : g, 16);
    b = parseInt(b.length < 2 ? b.repeat(2) : b, 16);
    a = a && (parseInt(a.length < 2 ? a.repeat(2) : a, 16) / 255).toPrecision(1) || 1;
    return fromRgba([r, g, b, a]);
  }
  function fromRgbString(str) {
    var _ref15 = rgb.exec(str) || rgbperc.exec(str) || rgbfn.exec(str) || rgbpercfn.exec(str), _ref16 = _slicedToArray(_ref15, 5), r = _ref16[1], g = _ref16[2], b = _ref16[3], a = _ref16[4];
    r = contains(r, "%") ? parseInt(r, 10) * 255 / 100 : parseInt(r, 10);
    g = contains(g, "%") ? parseInt(g, 10) * 255 / 100 : parseInt(g, 10);
    b = contains(b, "%") > 0 ? parseInt(b, 10) * 255 / 100 : parseInt(b, 10);
    a = a === undefined ? 1 : parseFloat(a) / (contains(a, "%") ? 100 : 1);
    return fromRgba([r, g, b, a]);
  }
  function fromHslString(str) {
    var _hsl$exec = hsl.exec(str), _hsl$exec2 = _slicedToArray(_hsl$exec, 6), h = _hsl$exec2[1], unit = _hsl$exec2[2], s = _hsl$exec2[3], l = _hsl$exec2[4], a = _hsl$exec2[5];
    unit = unit || "deg";
    h = (0, _cssUnitConverter["default"])(parseFloat(h), unit, "deg");
    s = parseFloat(s);
    l = parseFloat(l);
    a = a === undefined ? 1 : parseFloat(a) / (contains(a, "%") ? 100 : 1);
    return fromHsla([h, s, l, a]);
  }
  function fromString(str) {
    if (_colorName["default"][str]) {
      return fromRgb(_colorName["default"][str]);
    }
    if (hex.test(str) || shortHex.test(str)) {
      return fromHexString(str);
    }
    if (rgb.test(str) || rgbperc.test(str) || rgbfn.test(str) || rgbpercfn.test(str)) {
      return fromRgbString(str);
    }
    if (hsl.test(str)) {
      return fromHslString(str);
    }
    return null;
  }
  var _default = {
    fromString,
    fromRgb,
    fromRgba,
    fromHsl,
    fromHsla
  };
  exports.default = _default;
});

// src/common/theme/index.tsx
var import_react2 = __toESM(require_react(), 1);

// src/common/utils.tsx
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var makeRand = () => Math.random().toString(36).slice(2, -1);
function randomString(len, unauthorized = []) {
  let str = "";
  while (str.length < len) {
    str += Array.from(makeRand()).filter((e) => !unauthorized.includes(e)).join("");
  }
  return str.slice(0, len);
}
function useClickAwayListener(callback, {
  deps,
  ...props
}) {
  const ref = useMuiRef(props.ref);
  import_react.useEffect(() => {
    let currentClick = false;
    const onElementClick = (ev) => {
      currentClick = true;
    };
    const onDocumentClick = (ev) => {
      if (currentClick) {
        currentClick = false;
      } else {
        if (!ref.current?.contains(ev.currentTarget))
          callback(ev);
      }
    };
    ref.current?.addEventListener("click", onElementClick);
    document.addEventListener("click", onDocumentClick);
    return () => {
      ref.current?.removeEventListener("click", onElementClick);
      document.removeEventListener("click", onDocumentClick);
    };
  }, [...deps || [], ref.current]);
  return ref;
}
var CurrentMediaQueryContext = import_react.createContext("md");
function GlobalMediaQueryProvider({ children }) {
  const mediaQuery = import_react.useContext(MediaQueryValuesContext);
  const [currentSx, setSxType] = import_react.useState("md");
  const keys = import_react.useMemo(() => Object.keys(mediaQuery).reverse(), []);
  import_react.useEffect(() => {
    const ctrl = new AbortController;
    const callback = () => setSxType((current) => keys.find((query) => window.innerWidth >= mediaQuery[query]) ?? current);
    window.addEventListener("resize", callback, { signal: ctrl.signal });
    callback();
    return () => ctrl.abort();
  }, []);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(CurrentMediaQueryContext, {
    value: currentSx,
    children
  }, undefined, false, undefined, this);
}
function useMediaQuery() {
  return import_react.useContext(CurrentMediaQueryContext);
}
function useRandomID(default_value, len) {
  const [id, setID] = import_react.useState(default_value || "");
  import_react.useEffect(() => {
    setID(randomString(len || 5, Array.from("1234567890")));
  }, []);
  return id;
}
function useMuiRef(ref) {
  const _ref = import_react.useRef(null);
  if (ref != null)
    return ref;
  return _ref;
}
var { fromString } = require_lib();
function ArrToStr(val) {
  return [val[0], val[1], val[2]].join(", ");
}
function ToGray(val, offset) {
  const upOrDown = val[0] + val[1] + val[2] > 765 / 2;
  return upOrDown ? [val[0] - offset, val[1] - offset, val[2] - offset] : [val[0] + offset, val[1] + offset, val[2] + offset];
}
function rm(val) {
  if (val < 0)
    return 0;
  return val;
}
function add(val) {
  if (val > 255)
    return 255;
  return val;
}
function Darker(val, offset) {
  return [rm(val[0] - offset), rm(val[1] - offset), rm(val[2] - offset)];
}
function Lighter(val, offset) {
  return [add(val[0] + offset), add(val[1] + offset), add(val[2] + offset)];
}
function ColorToRGBArray(color) {
  return fromString(color).toRgbaArray();
}
function RGBAArrayToRGB(rgba) {
  return [rgba[0], rgba[1], rgba[2]];
}
function useColorOverRide({
  colorOverRide,
  variable,
  offset
}, deps) {
  const overRideColorHex = import_react.useMemo(() => {
    if (!colorOverRide)
      return;
    const key = variable ?? "--color-override";
    const RGBAArray = fromString(colorOverRide).toRgbaArray();
    const offsetValues = offset?.(RGBAArray, {
      ToGray,
      Darker,
      Lighter
    }) || RGBAArray;
    return {
      [key]: ArrToStr(offsetValues)
    };
  }, [colorOverRide, variable, ...deps || []]);
  return overRideColorHex;
}
function useValueOverRide({
  valueOverRide,
  variable
}) {
  return valueOverRide ? { [variable]: `${valueOverRide}` } : undefined;
}
var PropsOverRideContext = import_react.createContext({});
function PropsOverRideProvider({
  children,
  props
}) {
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(PropsOverRideContext, {
    value: props,
    children
  }, undefined, false, undefined, this);
}
function usePropsOverRide(arg) {
  const props = import_react.useContext(PropsOverRideContext);
  const keyofBypass = Object.keys(arg[0]).filter((k) => arg[0][k] != null);
  if (Object.keys(props).length == 0)
    return {};
  return Object.assign({}, ...Object.keys(props).filter((e) => !keyofBypass.includes(e)).map((key) => ({ [key]: props[key] })));
}
function useIsOutOfViewport(ref, options) {
  const [isOutOfViewport, setIsOutOfViewport] = import_react.useState(false);
  import_react.useEffect(() => {
    if (!ref?.current)
      return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsOutOfViewport(entry.intersectionRatio < 1);
    }, {
      root: null,
      threshold: options?.threshold || [0, 1]
    });
    const element = ref.current;
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, options?.threshold]);
  return isOutOfViewport;
}
function getHTMLAndBody() {
  return {
    html: document?.querySelector("html"),
    body: document?.querySelector("body")
  };
}
function usePreventScroll() {
  const [, setCurrentStyles] = import_react.useState({
    overflow: undefined,
    padding: undefined
  });
  const preventScroll = import_react.useCallback(() => {
    const { html, body } = getHTMLAndBody();
    if (!html || !body)
      return;
    html.style.overflowY = "hidden";
  }, []);
  const restoreScroll = import_react.useCallback(() => {
    const { html, body } = getHTMLAndBody();
    if (!html || !body)
      return;
    setCurrentStyles((current) => {
      html.style.overflowY = current.overflow || "";
      body.style.paddingRight = current.padding || "";
      return current;
    });
  }, []);
  import_react.useEffect(() => {
    const { html, body } = getHTMLAndBody();
    if (!html || !body)
      return;
    setCurrentStyles({
      overflow: html.style.overflowY,
      padding: body.style.paddingRight
    });
    return restoreScroll;
  }, []);
  return [preventScroll, restoreScroll];
}
function MuiSSRPortal({ children }) {
  const mainRef = import_react.useContext(ThemeWrapperRefContext);
  if (typeof document != "undefined" && Boolean(mainRef?.current))
    return import_react_dom.createPortal(children, mainRef?.current);
  return /* @__PURE__ */ jsx_dev_runtime.jsxDEV(jsx_dev_runtime.Fragment, {}, undefined, false, undefined, this);
}

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0;t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length;f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/common/theme/index.tsx
var jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
var MediaQueryValuesContext = import_react2.createContext({
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
});
var MediaQueryKeys = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
];
var MediaQueryToNumbers = Object.assign({}, ...MediaQueryKeys.map((key, i) => ({ [key]: i })));
function sxToStyle(theme, currentTheme, mediaQuerySize, sxProps) {
  if (!sxProps)
    return {};
  const StyleKeys = Object.keys(sxProps);
  let hasSxMediaQueryKey = mediaQuerySize && StyleKeys.includes(mediaQuerySize);
  const ReturnAndSet = (key) => {
    hasSxMediaQueryKey = true;
    return sxProps[key];
  };
  const sxPropsAsMediaQuery = StyleKeys.map((key) => {
    if (key == mediaQuerySize)
      return sxProps[key];
    else if (MediaQueryKeys.includes(key)) {
      if (hasSxMediaQueryKey || !mediaQuerySize)
        return;
      else if (mediaQuerySize == "xs") {
        if (sxProps?.sm)
          return ReturnAndSet("sm");
        else if (sxProps?.md)
          return ReturnAndSet("md");
        else if (sxProps?.lg)
          return ReturnAndSet("lg");
      } else if (mediaQuerySize == "sm") {
        if (sxProps?.md)
          return ReturnAndSet("md");
        else if (sxProps?.lg)
          return ReturnAndSet("lg");
      } else if (mediaQuerySize == "md") {
        if (sxProps?.lg)
          return ReturnAndSet("lg");
      }
    } else if (mediaQuerySize && typeof sxProps[mediaQuerySize] != "undefined" && typeof sxProps[mediaQuerySize][key] != "undefined") {
      return { [key]: sxProps[mediaQuerySize][key] };
    } else
      return { [key]: sxProps[key] };
  }).filter((e) => e != null);
  return Object.assign({}, ...sxPropsAsMediaQuery.map((obj) => {
    const key = Object.keys(obj)[0];
    const val = obj[key];
    if (typeof val != "object")
      return { [key]: val };
    return Object.keys(val).map((k) => {
      const color = val[k];
      if (color == "theme") {
        return { [key]: theme[k][currentTheme] };
      }
      return { [key]: theme[k][color] };
    }).at(0);
  }));
}
var DefaultTheme = {
  "bg-surface": {
    light: "#ffffff",
    dark: "#121212",
    main: "#a3a3a3"
  },
  "bg-primary": {
    light: "#42a5f5",
    dark: "#1565c0",
    main: "#1976d2"
  },
  "bg-main": {
    dark: "#0f1214",
    light: "#ffffff",
    main: "#ffffff"
  },
  "bg-secondary": {
    light: "#ba68c8",
    dark: "#7b1fa2",
    main: "#9c27b0"
  },
  "bg-success": {
    light: "#4caf50",
    dark: "#1b5e20",
    main: "#2e7d32"
  },
  "bg-error": {
    light: "#ef5350",
    dark: "#c62828",
    main: "#d32f2f"
  },
  "bg-warning": {
    light: "#ed6c02",
    dark: "#f77102",
    main: "#db6809"
  },
  "text-primary": {
    light: "#42a5f5",
    dark: "#1565c0",
    main: "#1976d2"
  },
  "text-warning": {
    light: "#ed6c02",
    dark: "#f77102",
    main: "#db6809"
  },
  "text-main": {
    light: "#000000",
    dark: "#ffffff",
    main: "#333"
  },
  "text-secondary": {
    light: "#aa00ff",
    dark: "#d500f9",
    main: "#d400fa"
  },
  "text-error": {
    light: "#e57373",
    dark: "#d32f2f",
    main: "#f44336"
  },
  "text-success": {
    light: "#81c784",
    dark: "#388e3c",
    main: "#66bb6a"
  },
  "text-info": {
    light: "#03a9f4",
    dark: "#01579b",
    main: "#0288d1"
  },
  theme: "light",
  locale: "enUS"
};
var MuiColors = import_react2.createContext(structuredClone(DefaultTheme));
function StyleApplier(sx, apply) {
  if (!apply)
    return sx;
  if (!sx)
    return {};
  const sxCopy = structuredClone(sx);
  const applierKeys = Object.keys(apply);
  applierKeys.map((key) => {
    switch (key) {
      case "opacity":
        Object.keys(apply[key]).map((k) => {
          if (typeof sxCopy[k] != "string")
            return;
          sxCopy[k] = `rgba(${RGBAArrayToRGB(ColorToRGBArray(sxCopy[k])).join(", ")}, ${apply[key]?.[k]})`;
        });
    }
  });
  return sxCopy;
}
function useStyle(sxProps, apply) {
  const theme = import_react2.useContext(MuiColors);
  const mediaQuery = useMediaQuery();
  const [currentSx, setSx] = import_react2.useState(mediaQuery);
  import_react2.useEffect(() => {
    if (currentSx != mediaQuery)
      setSx(mediaQuery);
  }, [mediaQuery]);
  const currentSxJson = JSON.stringify(sxProps);
  const memorizedStyleFromSx = import_react2.useMemo(() => StyleApplier(sxToStyle(theme, theme.theme, currentSx, sxProps), apply), [currentSx, currentSxJson, theme.theme]);
  return {
    theme,
    styleFromSx: memorizedStyleFromSx
  };
}
var MuiVariableUpdater = import_react2.createContext(() => {});
var muiThemeExclude = ["theme", "locale"];
function ArrToStr2(val) {
  if (!Array.isArray(val) || val.length < 3)
    return;
  return [val.at(0), val.at(1), val.at(2)].join(", ");
}
function ThemeToCssVar(theme) {
  const currentTheme = theme.theme;
  const { fromString: fromString2 } = require_lib();
  return Object.keys(theme).filter((e) => !muiThemeExclude.includes(e)).map((key) => {
    let rgbArray = fromString2(theme[key][currentTheme])?.toRgbaArray?.();
    const currentColor = `--${key}: ${rgbArray && ArrToStr2(rgbArray)};`;
    rgbArray = fromString2(theme[key].light)?.toRgbaArray?.();
    const light = `--${key}-light: ${rgbArray && ArrToStr2(rgbArray)}`;
    rgbArray = fromString2(theme[key].dark)?.toRgbaArray?.();
    const dark = `--${key}-dark: ${rgbArray && ArrToStr2(rgbArray)}`;
    rgbArray = fromString2(theme[key].main)?.toRgbaArray?.();
    const main = `--${key}-main: ${rgbArray && ArrToStr2(rgbArray)}`;
    return `${currentColor};
${light};
${dark};
${main};`.replace(";;", ";");
  }).join(`
`);
}
function useClassNames({
  variant,
  state,
  component_name,
  className,
  overRide
}) {
  const calculated = import_react2.useCallback((state2) => {
    const componentName = "MUI_" + component_name;
    if (!state2)
      state2 = [];
    const _state = [
      ...state2.filter((e) => e).map((state3) => [
        variant && `MUI_${component_name}_${state3}${variant ? `_${variant}` : ""}`,
        `MUI_${component_name}_${state3}`,
        `_${state3}`
      ]).reduce((p, n) => [...p, ...n], []),
      className || "",
      variant && `MUI_${component_name}_${variant}`,
      overRide?.className && overRide.className,
      componentName
    ].filter((e) => e);
    return {
      component: componentName,
      combined: _state.join(" "),
      states: _state
    };
  }, [variant, className]);
  const calculatedValue = import_react2.useMemo(() => calculated(state), [state, className, variant]);
  return calculatedValue;
}
var ValueUpdateContext = import_react2.createContext([() => {}, () => {}]);
var ThemeWrapperRefContext = import_react2.createContext(null);
function ThemeProvider({
  children,
  theme,
  sx,
  WrapperElement = "main",
  className,
  ...props
}) {
  const style = useStyle(sx);
  const [currentTheme, setCurrentTheme] = import_react2.useState(structuredClone(DefaultTheme));
  const updateCallbacks = import_react2.useState([]);
  const json = JSON.stringify(theme);
  import_react2.useEffect(() => setCurrentTheme(theme), [json]);
  const wrapperRef = import_react2.useRef(props?.ref?.current || null);
  const id = "THEME_" + useRandomID().substring(0, 9);
  return /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(GlobalMediaQueryProvider, {
    children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(MuiColors, {
      value: currentTheme,
      children: [
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV("style", {
          type: "text/css",
          children: [
            `.${id}`,
            `{
${ThemeToCssVar(currentTheme)}
}`
          ]
        }, undefined, true, undefined, this),
        /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(WrapperElement, {
          ...props,
          className: clsx_default(id, `MUI_Theme_Wrapper MUI_${theme.theme}`, className),
          style: style.styleFromSx,
          ref: wrapperRef,
          children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ValueUpdateContext, {
            value: updateCallbacks,
            children: /* @__PURE__ */ jsx_dev_runtime2.jsxDEV(ThemeWrapperRefContext, {
              value: wrapperRef,
              children
            }, undefined, false, undefined, this)
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  }, undefined, false, undefined, this);
}
function useTheme(updateCallback, deps) {
  const colorContext = import_react2.useContext(MuiColors);
  const [, setCallback] = import_react2.useContext(ValueUpdateContext);
  import_react2.useEffect(() => {
    setCallback((e) => {
      updateCallback && e.push(updateCallback);
      return e;
    });
    return () => {
      setCallback((e) => {
        updateCallback && e.splice(e.indexOf(updateCallback, 1));
        return e;
      });
    };
  }, deps);
  const [, set] = import_react2.useState("light");
  import_react2.useEffect(() => {
    set(colorContext.theme);
  }, [colorContext.theme]);
  return colorContext;
}

// src/mui/Box/index.tsx
var import_react3 = __toESM(require_react(), 1);
function Box({
  sx,
  Element = "div",
  ...props
}) {
  const style = useStyle(sx);
  return import_react3.createElement(Element, { ...props, style: style.styleFromSx });
}

// client:/home/shpaw415/Documents/bun_module/mui-tailwind/src/pages/index.tsx
var import_react9 = __toESM(require_react(), 1);

// node_modules/@material-design-icons/svg/filled/broken_image.svg
var jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);

// src/common/ripple.tsx
var import_react4 = __toESM(require_react(), 1);
var jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var RippleContext = import_react4.createContext({});
function RippleBase({
  disabled,
  offset,
  ref,
  clickRef,
  sx,
  className,
  color,
  colorOverRide,
  preventClickElement
}) {
  const [ripples, setRipples] = import_react4.useState([]);
  const handleClick = import_react4.useCallback((e) => {
    if (disabled)
      return;
    clickRef?.current?.click();
    const container = ref.current;
    if (!container)
      return;
    !preventClickElement && container.click();
    const { left, top } = container.getBoundingClientRect();
    const x = e.clientX - left + (offset?.left || 0);
    const y = e.clientY - top + (offset?.top || 0);
    setRipples((prevRipples) => [...prevRipples, { x, y }]);
  }, []);
  import_react4.useEffect(() => {
    if (ripples.length > 0) {
      const timeout = setTimeout(() => {
        setRipples([]);
      }, 1e5);
      return () => clearTimeout(timeout);
    }
  }, [ripples]);
  import_react4.useEffect(() => {
    const ev = (e) => {
      handleClick(e);
    };
    ref.current?.addEventListener("click", ev);
    return () => {
      ref.current?.removeEventListener("click", ev);
    };
  }, []);
  const style = useStyle(sx);
  const rippleClass = useClassNames({
    component_name: "Ripple",
    state: [color],
    className
  });
  const overRide = useColorOverRide({ colorOverRide });
  return ripples.map((ripple, index) => /* @__PURE__ */ jsx_dev_runtime4.jsxDEV("span", {
    className: `absolute rounded-full bg-current opacity-40 animate-ripple w-[100px] h-[100px] ${rippleClass.combined}`,
    style: {
      left: ripple.x,
      top: ripple.y,
      ...overRide,
      ...style.styleFromSx
    },
    onClick: handleClick
  }, index, false, undefined, this));
}

// src/mui/Button/index.tsx
var jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
"use client";
function Button({
  children,
  sx,
  variant,
  color,
  className,
  size,
  ...props
}) {
  const override = usePropsOverRide(arguments);
  const style = useStyle({ ...sx, ...!color && override.sx });
  const classes = useClassNames({
    component_name: "Button",
    variant: variant || override.variant || "contained",
    state: [color || override.color, size || override?.size],
    className,
    overRide: override
  });
  const ref = useMuiRef(props.ref);
  return /* @__PURE__ */ jsx_dev_runtime5.jsxDEV("button", {
    className: clsx_default(classes.combined, {
      "text-white": override?.variant == "contained" || variant == "contained" || variant == undefined && override.variant == undefined
    }),
    style: style.styleFromSx,
    ...props,
    ref,
    children: [
      children,
      /* @__PURE__ */ jsx_dev_runtime5.jsxDEV(RippleBase, {
        ref,
        preventClickElement: true
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
var Button_default = Button;

// src/mui/ToolTip/index.tsx
var import_react5 = __toESM(require_react(), 1);

// src/mui/Typography/index.tsx
var jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
"use client";

// src/mui/ToolTip/index.tsx
var jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);

// src/mui/Paper/index.tsx
var import_react6 = __toESM(require_react(), 1);
function Paper({
  elevation = 1,
  sx,
  className,
  variant = "elevation",
  square,
  element = "div",
  ...props
}) {
  const theme = useTheme();
  const style = useStyle(sx);
  const calculatedOverlay = import_react6.useMemo(() => {
    if (theme.theme == "light" || variant == "outlined")
      return "none";
    const calculatedOverlayOpacity = (elevation * 0.165 / 24).toPrecision(3);
    return `linear-gradient(rgba(var(--bg-surface-light), ${calculatedOverlayOpacity}), rgba(var(--bg-surface-light), ${calculatedOverlayOpacity}))`;
  }, [elevation, theme.theme]);
  const overlayVariable = useValueOverRide({
    variable: "--Paper-overlay",
    valueOverRide: calculatedOverlay
  });
  const root = useClassNames({
    component_name: "Paper_Root",
    className,
    state: [elevation && `elevation${elevation}`, variant, square && "square"]
  });
  return import_react6.createElement(element, {
    className: root.combined,
    style: {
      ...overlayVariable,
      ...style.styleFromSx
    },
    ...props
  });
}

// src/mui/Menu/index.tsx
var import_react7 = __toESM(require_react(), 1);
var jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
function Menu({
  open,
  onClose,
  anchorEl,
  disablePreventScroll,
  placement = "bottom",
  className,
  transform,
  ...props
}) {
  const [prevent, restore] = usePreventScroll();
  const [preventClose, setPreventClose] = import_react7.useState(false);
  const menuRef = useMuiRef(props.ref);
  useClickAwayListener((e) => {
    if (!open || preventClose)
      return setPreventClose(false);
    onClose?.();
  }, { deps: [onClose, open, preventClose], ref: menuRef });
  import_react7.useEffect(() => {
    const ctrl = new AbortController;
    const handle = (e) => {
      setPreventClose(true);
    };
    anchorEl?.current?.addEventListener("click", handle, {
      signal: ctrl.signal
    });
    anchorEl?.current?.addEventListener("focus", handle, {
      signal: ctrl.signal
    });
    return () => ctrl.abort();
  }, []);
  const [coord, setCoord] = import_react7.useState();
  const [placement_override, set_placement_override] = import_react7.useState();
  const CoordSetter = import_react7.useCallback(() => {
    if (!open || !menuRef.current)
      return;
    const coord2 = anchorEl?.current?.getBoundingClientRect();
    const menuCoord = getComputedStyle(menuRef.current);
    switch (placement_override || placement) {
      case "bottom":
        setCoord({
          top: (coord2?.top || 0) + (coord2?.height || 0),
          left: coord2?.left || 0,
          transform: transform?.bottom
        });
        break;
      case "top":
        setCoord({
          top: (coord2?.top || 0) - (coord2?.height || 0) - parseInt(menuCoord.height),
          left: coord2?.left || 0,
          transform: transform?.top
        });
        break;
      case "left":
        setCoord({
          top: coord2?.top || 0,
          left: (coord2?.left || 0) - parseInt(menuCoord.width),
          transform: transform?.left
        });
        break;
      case "right":
        setCoord({
          top: coord2?.top || 0,
          left: (coord2?.left || 0) + parseInt(menuCoord.width) + (coord2?.width || 0),
          transform: transform?.right
        });
        break;
    }
  }, [open]);
  const menuIsVisible = useIsOutOfViewport(menuRef);
  import_react7.useEffect(() => {
    if (menuIsVisible || !open || placement_override === null) {
      if (menuIsVisible && placement_override === null)
        set_placement_override(undefined);
      return;
    }
    switch (placement) {
      case "top":
        if (placement_override == undefined)
          set_placement_override("bottom");
        else if (placement_override == "bottom" && !menuIsVisible)
          set_placement_override("left");
        else if (placement_override == "left" && !menuIsVisible)
          set_placement_override("right");
        else
          set_placement_override(null);
        break;
      case "bottom":
        if (placement_override == undefined)
          set_placement_override("top");
        else if (placement_override == "top" && !menuIsVisible)
          set_placement_override("left");
        else if (placement_override == "left" && !menuIsVisible)
          set_placement_override("right");
        else
          set_placement_override(null);
        break;
      case "left":
        if (placement_override == undefined)
          set_placement_override("right");
        else if (placement_override == "right" && !menuIsVisible)
          set_placement_override("top");
        else if (placement_override == "top" && !menuIsVisible)
          set_placement_override("bottom");
        else
          set_placement_override(null);
        break;
      case "right":
        if (placement_override == undefined)
          set_placement_override("left");
        else if (placement_override == "left" && !menuIsVisible)
          set_placement_override("top");
        else if (placement_override == "top" && !menuIsVisible)
          set_placement_override("bottom");
        else
          set_placement_override(null);
        break;
    }
    CoordSetter();
  }, [menuIsVisible, placement_override]);
  import_react7.useEffect(() => {
    CoordSetter();
    if (open) {
      !disablePreventScroll && setTimeout(() => prevent(), 100);
    } else {
      !disablePreventScroll && restore();
    }
  }, [open, anchorEl]);
  import_react7.useEffect(() => {
    window.addEventListener("resize", CoordSetter);
    return () => {
      window.removeEventListener("resize", CoordSetter);
    };
  }, [open]);
  const menu = useClassNames({
    component_name: "Menu_Root",
    state: [open && "open"],
    className
  });
  return /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(MuiSSRPortal, {
    children: /* @__PURE__ */ jsx_dev_runtime8.jsxDEV(Paper, {
      elevation: 8,
      ...props,
      ref: menuRef,
      className: menu.combined,
      sx: { ...coord, ...props.sx }
    }, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}

// src/mui/List/index.tsx
var import_react8 = __toESM(require_react(), 1);
var jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
function List({
  sx,
  subheader,
  children,
  disablePadding,
  component = "ul",
  dense,
  className,
  ...props
}) {
  const style = useStyle(sx);
  const root = useClassNames({
    component_name: "List_Root",
    className,
    state: [dense && "dense", disablePadding && "disabled-padding"]
  });
  return import_react8.createElement(component, {
    ...props,
    className: root.combined,
    style: style.styleFromSx,
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
      children: [
        subheader && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV("div", {
          className: "MUI_ListItem_SubHeader_Root",
          children: subheader
        }, undefined, false, undefined, this),
        children
      ]
    }, undefined, true, undefined, this)
  });
}
function ListItem({
  sx,
  component = "li",
  secondaryAction,
  disableGutters,
  disablePadding,
  className,
  alignItems = "center",
  dense,
  children,
  ...props
}) {
  const style = useStyle(sx);
  const root = useClassNames({
    component_name: "ListItem_Root",
    className,
    state: [
      disablePadding && "disabled-padding",
      dense && "dense",
      disableGutters && "disabled-gutters"
    ]
  });
  return import_react8.createElement(component, {
    ...props,
    style: style.styleFromSx,
    className: root.combined,
    children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(jsx_dev_runtime9.Fragment, {
      children: [
        children,
        secondaryAction && /* @__PURE__ */ jsx_dev_runtime9.jsxDEV("div", {
          className: "MUI_ListItem_SecondaryAction",
          children: /* @__PURE__ */ jsx_dev_runtime9.jsxDEV(PropsOverRideProvider, {
            props: {
              colorOverRide: style.theme.theme == "light" ? "black" : "white"
            },
            children: secondaryAction
          }, undefined, false, undefined, this)
        }, undefined, false, undefined, this)
      ]
    }, undefined, true, undefined, this)
  });
}

// client:/home/shpaw415/Documents/bun_module/mui-tailwind/src/pages/index.tsx
"use client";
globalThis.dry ??= false;
function TestPage() {
  return jsxDEV_7x81h0kn(Page, {
    disabled: true,
    lang: "frFR",
    children: jsxDEV_7x81h0kn(ToolTipTest, {}, undefined, false, undefined, this)
  }, undefined, false, undefined, this);
}
function Page({
  children,
  disabled,
  theme,
  lang = "enUS"
}) {
  useLoadingEffect(() => {
    if (globalThis.dry)
      window.location.reload();
    globalThis.dry = true;
  }, []);
  const [theme1, setTheme1] = import_react9.useState(structuredClone(DefaultTheme));
  const [theme2, setTheme2] = import_react9.useState(() => {
    const cTheme = structuredClone(DefaultTheme);
    cTheme.theme = "dark";
    cTheme.locale = lang;
    return cTheme;
  });
  const switcher = import_react9.useCallback((theme3) => {
    theme3.theme = theme3.theme == "light" ? "dark" : "light";
    return structuredClone(theme3);
  }, []);
  import_react9.useEffect(() => {
    if (theme) {
      setTheme1((c) => {
        c.theme = theme;
        c.locale = lang;
        return structuredClone(c);
      });
    }
  }, [theme]);
  return jsxDEV_7x81h0kn(Box, {
    className: "flex min-h-[100vh]",
    children: [
      jsxDEV_7x81h0kn(ThemeProvider, {
        className: "flex-1 min-h-full p-10 pt-16",
        theme: theme1,
        children: [
          jsxDEV_7x81h0kn(Button_default, {
            sx: {
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)"
            },
            onClick: () => {
              setTheme1((e) => switcher(e));
              setTheme2((e) => switcher(e));
            },
            children: "Theme Switcher"
          }, undefined, false, undefined, this),
          children
        ]
      }, undefined, true, undefined, this),
      !disabled && jsxDEV_7x81h0kn(ThemeProvider, {
        className: "flex-1 min-h-full p-10 pt-16",
        theme: theme2,
        children
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
function ToolTipTest() {
  const ref = import_react9.useRef(null);
  return jsxDEV_7x81h0kn(Fragment_8vg9x3sq, {
    children: [
      jsxDEV_7x81h0kn(Button_default, {
        ref,
        children: "Test"
      }, undefined, false, undefined, this),
      jsxDEV_7x81h0kn(Menu, {
        open: true,
        anchorEl: ref,
        children: jsxDEV_7x81h0kn(List, {
          children: [
            jsxDEV_7x81h0kn(ListItem, {
              children: "Hello"
            }, undefined, false, undefined, this),
            jsxDEV_7x81h0kn(ListItem, {
              children: "Hello"
            }, undefined, false, undefined, this),
            jsxDEV_7x81h0kn(ListItem, {
              children: "Hello"
            }, undefined, false, undefined, this)
          ]
        }, undefined, true, undefined, this)
      }, undefined, false, undefined, this)
    ]
  }, undefined, true, undefined, this);
}
export {
  TestPage as default
};
