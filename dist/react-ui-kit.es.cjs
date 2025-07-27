import { jsx as b, jsxs as Q, Fragment as bn } from "react/jsx-runtime";
import * as $ from "react";
import M, { createContext as At, useMemo as nn, createElement as x, useContext as Ut, useCallback as he, forwardRef as I, Children as Kn, isValidElement as Pa, cloneElement as cl, Fragment as on, useRef as q, useEffect as le, useState as re, useLayoutEffect as Wa, useReducer as Hd } from "react";
import * as vv from "react-dom";
import ul, { flushSync as Bd, createPortal as Gd } from "react-dom";
function Wd(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var r = e.length;
      for (t = 0; t < r; t++)
        e[t] && (n = Wd(e[t])) && (o && (o += " "), o += n);
    } else
      for (n in e)
        e[n] && (o && (o += " "), o += n);
  return o;
}
function bv() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++)
    (e = arguments[n]) && (t = Wd(e)) && (o && (o += " "), o += t);
  return o;
}
const dl = "-";
function wv(e) {
  const t = xv(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  function r(i) {
    const s = i.split(dl);
    return s[0] === "" && s.length !== 1 && s.shift(), jd(s, t) || yv(i);
  }
  function a(i, s) {
    const l = n[i] || [];
    return s && o[i] ? [...l, ...o[i]] : l;
  }
  return {
    getClassGroupId: r,
    getConflictingClassGroupIds: a
  };
}
function jd(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], o = t.nextPart.get(n), r = o ? jd(e.slice(1), o) : void 0;
  if (r)
    return r;
  if (t.validators.length === 0)
    return;
  const a = e.join(dl);
  return (i = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : i.classGroupId;
}
const tu = /^\[(.+)\]$/;
function yv(e) {
  if (tu.test(e)) {
    const t = tu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function xv(e) {
  const {
    theme: t,
    prefix: n
  } = e, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Cv(Object.entries(e.classGroups), n).forEach(([a, i]) => {
    ms(i, o, a, t);
  }), o;
}
function ms(e, t, n, o) {
  e.forEach((r) => {
    if (typeof r == "string") {
      const a = r === "" ? t : nu(t, r);
      a.classGroupId = n;
      return;
    }
    if (typeof r == "function") {
      if ($v(r)) {
        ms(r(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: r,
        classGroupId: n
      });
      return;
    }
    Object.entries(r).forEach(([a, i]) => {
      ms(i, nu(t, a), n, o);
    });
  });
}
function nu(e, t) {
  let n = e;
  return t.split(dl).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function $v(e) {
  return e.isThemeGetter;
}
function Cv(e, t) {
  return t ? e.map(([n, o]) => {
    const r = o.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([i, s]) => [t + i, s])) : a);
    return [n, r];
  }) : e;
}
function Sv(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function r(a, i) {
    n.set(a, i), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(a) {
      let i = n.get(a);
      if (i !== void 0)
        return i;
      if ((i = o.get(a)) !== void 0)
        return r(a, i), i;
    },
    set(a, i) {
      n.has(a) ? n.set(a, i) : r(a, i);
    }
  };
}
const Ud = "!";
function _v(e) {
  const t = e.separator, n = t.length === 1, o = t[0], r = t.length;
  return function(i) {
    const s = [];
    let l = 0, c = 0, u;
    for (let g = 0; g < i.length; g++) {
      let h = i[g];
      if (l === 0) {
        if (h === o && (n || i.slice(g, g + r) === t)) {
          s.push(i.slice(c, g)), c = g + r;
          continue;
        }
        if (h === "/") {
          u = g;
          continue;
        }
      }
      h === "[" ? l++ : h === "]" && l--;
    }
    const d = s.length === 0 ? i : i.substring(c), f = d.startsWith(Ud), p = f ? d.substring(1) : d, m = u && u > c ? u - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: f,
      baseClassName: p,
      maybePostfixModifierPosition: m
    };
  };
}
function Ev(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}
function Pv(e) {
  return {
    cache: Sv(e.cacheSize),
    splitModifiers: _v(e),
    ...wv(e)
  };
}
const Rv = /\s+/;
function Mv(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r
  } = t, a = /* @__PURE__ */ new Set();
  return e.trim().split(Rv).map((i) => {
    const {
      modifiers: s,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = n(i);
    let d = o(u ? c.substring(0, u) : c), f = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (d = o(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      f = !1;
    }
    const p = Ev(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? p + Ud : p,
      classGroupId: d,
      originalClassName: i,
      hasPostfixModifier: f
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: l,
      hasPostfixModifier: c
    } = i, u = s + l;
    return a.has(u) ? !1 : (a.add(u), r(l, c).forEach((d) => a.add(s + d)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function Nv() {
  let e = 0, t, n, o = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Yd(t)) && (o && (o += " "), o += n);
  return o;
}
function Yd(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = Yd(e[o])) && (n && (n += " "), n += t);
  return n;
}
function Dv(e, ...t) {
  let n, o, r, a = i;
  function i(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = Pv(c), o = n.cache.get, r = n.cache.set, a = s, s(l);
  }
  function s(l) {
    const c = o(l);
    if (c)
      return c;
    const u = Mv(l, n);
    return r(l, u), u;
  }
  return function() {
    return a(Nv.apply(null, arguments));
  };
}
function Ge(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Kd = /^\[(?:([a-z-]+):)?(.+)\]$/i, Tv = /^\d+\/\d+$/, Av = /* @__PURE__ */ new Set(["px", "full", "screen"]), Iv = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ov = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kv = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Lv = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fv = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function pn(e) {
  return Un(e) || Av.has(e) || Tv.test(e);
}
function _n(e) {
  return Ao(e, "length", Uv);
}
function Un(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ur(e) {
  return Ao(e, "number", Un);
}
function jo(e) {
  return !!e && Number.isInteger(Number(e));
}
function zv(e) {
  return e.endsWith("%") && Un(e.slice(0, -1));
}
function Pe(e) {
  return Kd.test(e);
}
function En(e) {
  return Iv.test(e);
}
const Vv = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Hv(e) {
  return Ao(e, Vv, qd);
}
function Bv(e) {
  return Ao(e, "position", qd);
}
const Gv = /* @__PURE__ */ new Set(["image", "url"]);
function Wv(e) {
  return Ao(e, Gv, Kv);
}
function jv(e) {
  return Ao(e, "", Yv);
}
function Uo() {
  return !0;
}
function Ao(e, t, n) {
  const o = Kd.exec(e);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}
function Uv(e) {
  return Ov.test(e) && !kv.test(e);
}
function qd() {
  return !1;
}
function Yv(e) {
  return Lv.test(e);
}
function Kv(e) {
  return Fv.test(e);
}
function qv() {
  const e = Ge("colors"), t = Ge("spacing"), n = Ge("blur"), o = Ge("brightness"), r = Ge("borderColor"), a = Ge("borderRadius"), i = Ge("borderSpacing"), s = Ge("borderWidth"), l = Ge("contrast"), c = Ge("grayscale"), u = Ge("hueRotate"), d = Ge("invert"), f = Ge("gap"), p = Ge("gradientColorStops"), m = Ge("gradientColorStopPositions"), g = Ge("inset"), h = Ge("margin"), v = Ge("opacity"), w = Ge("padding"), y = Ge("saturate"), C = Ge("scale"), _ = Ge("sepia"), S = Ge("skew"), E = Ge("space"), T = Ge("translate"), N = () => ["auto", "contain", "none"], k = () => ["auto", "hidden", "clip", "visible", "scroll"], F = () => ["auto", Pe, t], z = () => [Pe, t], ae = () => ["", pn, _n], A = () => ["auto", Un, Pe], V = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], J = () => ["solid", "dashed", "dotted", "double", "none"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", Pe], se = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ee = () => [Un, Ur], R = () => [Un, Pe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Uo],
      spacing: [pn, _n],
      blur: ["none", "", En, Pe],
      brightness: ee(),
      borderColor: [e],
      borderRadius: ["none", "", "full", En, Pe],
      borderSpacing: z(),
      borderWidth: ae(),
      contrast: ee(),
      grayscale: X(),
      hueRotate: R(),
      invert: X(),
      gap: z(),
      gradientColorStops: [e],
      gradientColorStopPositions: [zv, _n],
      inset: F(),
      margin: F(),
      opacity: ee(),
      padding: z(),
      saturate: ee(),
      scale: ee(),
      sepia: X(),
      skew: R(),
      space: z(),
      translate: z()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Pe]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [En]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": se()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...V(), Pe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", jo, Pe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: F()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Pe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", jo, Pe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Uo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", jo, Pe]
        }, Pe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": A()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": A()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Uo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [jo, Pe]
        }, Pe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": A()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": A()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Pe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Pe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [E]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [E]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Pe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Pe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Pe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [En]
        }, En]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Pe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Pe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Pe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", En, _n]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ur]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Uo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Pe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Un, Ur]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", pn, Pe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Pe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Pe]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...J(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", pn, _n]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", pn, Pe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: z()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Pe]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Pe]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...V(), Bv]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hv]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Wv]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [p]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [p]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [p]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...J(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: J()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [r]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [r]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [r]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [r]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [r]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [r]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [r]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [r]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...J()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [pn, Pe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [pn, _n]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: ae()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [pn, _n]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", En, jv]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Uo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", En, Pe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Pe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: R()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Pe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: R()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Pe]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [jo, Pe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [T]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [T]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [S]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [S]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Pe]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Pe]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": z()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": z()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": z()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": z()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": z()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": z()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": z()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": z()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": z()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": z()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": z()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": z()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": z()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": z()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": z()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": z()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": z()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": z()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Pe]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [pn, _n, Ur]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Xv = /* @__PURE__ */ Dv(qv);
function L(...e) {
  return Xv(bv(e));
}
const fl = $.forwardRef(
  ({ className: e, type: t, ...n }, o) => /* @__PURE__ */ b(
    "input",
    {
      type: t,
      className: L(
        "flex h-[48px] w-full text-black leading-5 text-[14px] font-normal rounded-lg border border-solid border-[#E8E9EB] bg-white pl-4 pr-3 py-3 text-sm placeholder:text-[#C7CBD1] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F8FA]",
        e
      ),
      ref: o,
      ...n
    }
  )
);
fl.displayName = "Input";
function P() {
  return P = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, P.apply(this, arguments);
}
function Zv(e, t) {
  const n = /* @__PURE__ */ At(t);
  function o(a) {
    const { children: i, ...s } = a, l = nn(
      () => s,
      Object.values(s)
    );
    return /* @__PURE__ */ x(n.Provider, {
      value: l
    }, i);
  }
  function r(a) {
    const i = Ut(n);
    if (i)
      return i;
    if (t !== void 0)
      return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return o.displayName = e + "Provider", [
    o,
    r
  ];
}
function Ve(e, t = []) {
  let n = [];
  function o(a, i) {
    const s = /* @__PURE__ */ At(i), l = n.length;
    n = [
      ...n,
      i
    ];
    function c(d) {
      const { scope: f, children: p, ...m } = d, g = (f == null ? void 0 : f[e][l]) || s, h = nn(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ x(g.Provider, {
        value: h
      }, p);
    }
    function u(d, f) {
      const p = (f == null ? void 0 : f[e][l]) || s, m = Ut(p);
      if (m)
        return m;
      if (i !== void 0)
        return i;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return c.displayName = a + "Provider", [
      c,
      u
    ];
  }
  const r = () => {
    const a = n.map((i) => /* @__PURE__ */ At(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || a;
      return nn(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: l
          }
        }),
        [
          s,
          l
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    Qv(r, ...t)
  ];
}
function Qv(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(a) {
      const i = o.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(a)[`__scope${c}`];
        return {
          ...s,
          ...d
        };
      }, {});
      return nn(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Jv(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function _r(...e) {
  return (t) => e.forEach(
    (n) => Jv(n, t)
  );
}
function be(...e) {
  return he(_r(...e), e);
}
const Bt = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...o } = e, r = Kn.toArray(n), a = r.find(eb);
  if (a) {
    const i = a.props.children, s = r.map((l) => l === a ? Kn.count(i) > 1 ? Kn.only(null) : /* @__PURE__ */ Pa(i) ? i.props.children : null : l);
    return /* @__PURE__ */ x(gs, P({}, o, {
      ref: t
    }), /* @__PURE__ */ Pa(i) ? /* @__PURE__ */ cl(i, void 0, s) : null);
  }
  return /* @__PURE__ */ x(gs, P({}, o, {
    ref: t
  }), n);
});
Bt.displayName = "Slot";
const gs = /* @__PURE__ */ I((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ Pa(n) ? /* @__PURE__ */ cl(n, {
    ...tb(o, n.props),
    ref: t ? _r(t, n.ref) : n.ref
  }) : Kn.count(n) > 1 ? Kn.only(null) : null;
});
gs.displayName = "SlotClone";
const pl = ({ children: e }) => /* @__PURE__ */ x(on, null, e);
function eb(e) {
  return /* @__PURE__ */ Pa(e) && e.type === pl;
}
function tb(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], a = t[o];
    /^on[A-Z]/.test(o) ? r && a ? n[o] = (...s) => {
      a(...s), r(...s);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...a
    } : o === "className" && (n[o] = [
      r,
      a
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function Ln(e) {
  const t = e + "CollectionProvider", [n, o] = Ve(t), [r, a] = n(t, {
    collectionRef: {
      current: null
    },
    itemMap: /* @__PURE__ */ new Map()
  }), i = (p) => {
    const { scope: m, children: g } = p, h = M.useRef(null), v = M.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ M.createElement(r, {
      scope: m,
      itemMap: v,
      collectionRef: h
    }, g);
  }, s = e + "CollectionSlot", l = /* @__PURE__ */ M.forwardRef((p, m) => {
    const { scope: g, children: h } = p, v = a(s, g), w = be(m, v.collectionRef);
    return /* @__PURE__ */ M.createElement(Bt, {
      ref: w
    }, h);
  }), c = e + "CollectionItemSlot", u = "data-radix-collection-item", d = /* @__PURE__ */ M.forwardRef((p, m) => {
    const { scope: g, children: h, ...v } = p, w = M.useRef(null), y = be(m, w), C = a(c, g);
    return M.useEffect(() => (C.itemMap.set(w, {
      ref: w,
      ...v
    }), () => void C.itemMap.delete(w))), /* @__PURE__ */ M.createElement(Bt, {
      [u]: "",
      ref: y
    }, h);
  });
  function f(p) {
    const m = a(e + "CollectionConsumer", p);
    return M.useCallback(() => {
      const h = m.collectionRef.current;
      if (!h)
        return [];
      const v = Array.from(h.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (C, _) => v.indexOf(C.ref.current) - v.indexOf(_.ref.current)
      );
    }, [
      m.collectionRef,
      m.itemMap
    ]);
  }
  return [
    {
      Provider: i,
      Slot: l,
      ItemSlot: d
    },
    f,
    o
  ];
}
function Y(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function ke(e) {
  const t = q(e);
  return le(() => {
    t.current = e;
  }), nn(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Ue({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = nb({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : o, s = ke(n), l = he((c) => {
    if (a) {
      const d = typeof c == "function" ? c(e) : c;
      d !== e && s(d);
    } else
      r(c);
  }, [
    a,
    e,
    r,
    s
  ]);
  return [
    i,
    l
  ];
}
function nb({ defaultProp: e, onChange: t }) {
  const n = re(e), [o] = n, r = q(o), a = ke(t);
  return le(() => {
    r.current !== o && (a(o), r.current = o);
  }, [
    o,
    r,
    a
  ]), n;
}
const ob = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ie = ob.reduce((e, t) => {
  const n = /* @__PURE__ */ I((o, r) => {
    const { asChild: a, ...i } = o, s = a ? Bt : t;
    return le(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ x(s, P({}, i, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Ra(e, t) {
  e && Bd(
    () => e.dispatchEvent(t)
  );
}
const tt = globalThis != null && globalThis.document ? Wa : () => {
};
function rb(e, t) {
  return Hd((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const Ye = (e) => {
  const { present: t, children: n } = e, o = ab(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : Kn.only(n), a = be(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ cl(r, {
    ref: a
  }) : null;
};
Ye.displayName = "Presence";
function ab(e) {
  const [t, n] = re(), o = q({}), r = q(e), a = q("none"), i = e ? "mounted" : "unmounted", [s, l] = rb(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return le(() => {
    const c = Yr(o.current);
    a.current = s === "mounted" ? c : "none";
  }, [
    s
  ]), tt(() => {
    const c = o.current, u = r.current;
    if (u !== e) {
      const f = a.current, p = Yr(c);
      e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && f !== p ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    l
  ]), tt(() => {
    if (t) {
      const c = (d) => {
        const p = Yr(o.current).includes(d.animationName);
        d.target === t && p && Bd(
          () => l("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (a.current = Yr(o.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: he((c) => {
      c && (o.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Yr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const ib = $.useId || (() => {
});
let sb = 0;
function et(e) {
  const [t, n] = $.useState(ib());
  return tt(() => {
    e || n(
      (o) => o ?? String(sb++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const Xd = "Collapsible", [lb, Zd] = Ve(Xd), [cb, ml] = lb(Xd), ub = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, open: o, defaultOpen: r, disabled: a, onOpenChange: i, ...s } = e, [l = !1, c] = Ue({
    prop: o,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ x(cb, {
    scope: n,
    disabled: a,
    contentId: et(),
    open: l,
    onOpenToggle: he(
      () => c(
        (u) => !u
      ),
      [
        c
      ]
    )
  }, /* @__PURE__ */ x(ie.div, P({
    "data-state": gl(l),
    "data-disabled": a ? "" : void 0
  }, s, {
    ref: t
  })));
}), db = "CollapsibleTrigger", Qd = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, ...o } = e, r = ml(db, n);
  return /* @__PURE__ */ x(ie.button, P({
    type: "button",
    "aria-controls": r.contentId,
    "aria-expanded": r.open || !1,
    "data-state": gl(r.open),
    "data-disabled": r.disabled ? "" : void 0,
    disabled: r.disabled
  }, o, {
    ref: t,
    onClick: Y(e.onClick, r.onOpenToggle)
  }));
}), Jd = "CollapsibleContent", ef = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = ml(Jd, e.__scopeCollapsible);
  return /* @__PURE__ */ x(
    Ye,
    {
      present: n || r.open
    },
    ({ present: a }) => /* @__PURE__ */ x(fb, P({}, o, {
      ref: t,
      present: a
    }))
  );
}), fb = /* @__PURE__ */ I((e, t) => {
  const { __scopeCollapsible: n, present: o, children: r, ...a } = e, i = ml(Jd, n), [s, l] = re(o), c = q(null), u = be(t, c), d = q(0), f = d.current, p = q(0), m = p.current, g = i.open || s, h = q(g), v = q();
  return le(() => {
    const w = requestAnimationFrame(
      () => h.current = !1
    );
    return () => cancelAnimationFrame(w);
  }, []), tt(() => {
    const w = c.current;
    if (w) {
      v.current = v.current || {
        transitionDuration: w.style.transitionDuration,
        animationName: w.style.animationName
      }, w.style.transitionDuration = "0s", w.style.animationName = "none";
      const y = w.getBoundingClientRect();
      d.current = y.height, p.current = y.width, h.current || (w.style.transitionDuration = v.current.transitionDuration, w.style.animationName = v.current.animationName), l(o);
    }
  }, [
    i.open,
    o
  ]), /* @__PURE__ */ x(ie.div, P({
    "data-state": gl(i.open),
    "data-disabled": i.disabled ? "" : void 0,
    id: i.contentId,
    hidden: !g
  }, a, {
    ref: u,
    style: {
      "--radix-collapsible-content-height": f ? `${f}px` : void 0,
      "--radix-collapsible-content-width": m ? `${m}px` : void 0,
      ...e.style
    }
  }), g && r);
});
function gl(e) {
  return e ? "open" : "closed";
}
const tf = ub, pb = Qd, mb = ef, gb = /* @__PURE__ */ At(void 0);
function Yt(e) {
  const t = Ut(gb);
  return e || t || "ltr";
}
const Fn = "Accordion", hb = [
  "Home",
  "End",
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight"
], [hl, vb, bb] = Ln(Fn), [ja, WR] = Ve(Fn, [
  bb,
  Zd
]), vl = Zd(), nf = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { type: n, ...o } = e, r = o, a = o;
  return /* @__PURE__ */ M.createElement(hl.Provider, {
    scope: e.__scopeAccordion
  }, n === "multiple" ? /* @__PURE__ */ M.createElement($b, P({}, a, {
    ref: t
  })) : /* @__PURE__ */ M.createElement(xb, P({}, r, {
    ref: t
  })));
});
nf.propTypes = {
  type(e) {
    const t = e.value || e.defaultValue;
    return e.type && ![
      "single",
      "multiple"
    ].includes(e.type) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : e.type === "multiple" && typeof t == "string" ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : e.type === "single" && Array.isArray(t) ? new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null;
  }
};
const [of, wb] = ja(Fn), [rf, yb] = ja(Fn, {
  collapsible: !1
}), xb = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, collapsible: a = !1, ...i } = e, [s, l] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ M.createElement(of, {
    scope: e.__scopeAccordion,
    value: s ? [
      s
    ] : [],
    onItemOpen: l,
    onItemClose: M.useCallback(
      () => a && l(""),
      [
        a,
        l
      ]
    )
  }, /* @__PURE__ */ M.createElement(rf, {
    scope: e.__scopeAccordion,
    collapsible: a
  }, /* @__PURE__ */ M.createElement(af, P({}, i, {
    ref: t
  }))));
}), $b = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, ...a } = e, [i = [], s] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  }), l = M.useCallback(
    (u) => s(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      s
    ]
  ), c = M.useCallback(
    (u) => s(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      s
    ]
  );
  return /* @__PURE__ */ M.createElement(of, {
    scope: e.__scopeAccordion,
    value: i,
    onItemOpen: l,
    onItemClose: c
  }, /* @__PURE__ */ M.createElement(rf, {
    scope: e.__scopeAccordion,
    collapsible: !0
  }, /* @__PURE__ */ M.createElement(af, P({}, a, {
    ref: t
  }))));
}), [Cb, Ua] = ja(Fn), af = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeAccordion: n, disabled: o, dir: r, orientation: a = "vertical", ...i } = e, s = M.useRef(null), l = be(s, t), c = vb(n), d = Yt(r) === "ltr", f = Y(e.onKeyDown, (p) => {
    var m;
    if (!hb.includes(p.key))
      return;
    const g = p.target, h = c().filter((N) => {
      var k;
      return !((k = N.ref.current) !== null && k !== void 0 && k.disabled);
    }), v = h.findIndex(
      (N) => N.ref.current === g
    ), w = h.length;
    if (v === -1)
      return;
    p.preventDefault();
    let y = v;
    const C = 0, _ = w - 1, S = () => {
      y = v + 1, y > _ && (y = C);
    }, E = () => {
      y = v - 1, y < C && (y = _);
    };
    switch (p.key) {
      case "Home":
        y = C;
        break;
      case "End":
        y = _;
        break;
      case "ArrowRight":
        a === "horizontal" && (d ? S() : E());
        break;
      case "ArrowDown":
        a === "vertical" && S();
        break;
      case "ArrowLeft":
        a === "horizontal" && (d ? E() : S());
        break;
      case "ArrowUp":
        a === "vertical" && E();
        break;
    }
    const T = y % w;
    (m = h[T].ref.current) === null || m === void 0 || m.focus();
  });
  return /* @__PURE__ */ M.createElement(Cb, {
    scope: n,
    disabled: o,
    direction: r,
    orientation: a
  }, /* @__PURE__ */ M.createElement(hl.Slot, {
    scope: n
  }, /* @__PURE__ */ M.createElement(ie.div, P({}, i, {
    "data-orientation": a,
    ref: l,
    onKeyDown: o ? void 0 : f
  }))));
}), hs = "AccordionItem", [Sb, bl] = ja(hs), _b = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeAccordion: n, value: o, ...r } = e, a = Ua(hs, n), i = wb(hs, n), s = vl(n), l = et(), c = o && i.value.includes(o) || !1, u = a.disabled || e.disabled;
  return /* @__PURE__ */ M.createElement(Sb, {
    scope: n,
    open: c,
    disabled: u,
    triggerId: l
  }, /* @__PURE__ */ M.createElement(tf, P({
    "data-orientation": a.orientation,
    "data-state": sf(c)
  }, s, r, {
    ref: t,
    disabled: u,
    open: c,
    onOpenChange: (d) => {
      d ? i.onItemOpen(o) : i.onItemClose(o);
    }
  })));
}), Eb = "AccordionHeader", Pb = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Ua(Fn, n), a = bl(Eb, n);
  return /* @__PURE__ */ M.createElement(ie.h3, P({
    "data-orientation": r.orientation,
    "data-state": sf(a.open),
    "data-disabled": a.disabled ? "" : void 0
  }, o, {
    ref: t
  }));
}), ou = "AccordionTrigger", Rb = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Ua(Fn, n), a = bl(ou, n), i = yb(ou, n), s = vl(n);
  return /* @__PURE__ */ M.createElement(hl.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ M.createElement(pb, P({
    "aria-disabled": a.open && !i.collapsible || void 0,
    "data-orientation": r.orientation,
    id: a.triggerId
  }, s, o, {
    ref: t
  })));
}), Mb = "AccordionContent", Nb = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeAccordion: n, ...o } = e, r = Ua(Fn, n), a = bl(Mb, n), i = vl(n);
  return /* @__PURE__ */ M.createElement(mb, P({
    role: "region",
    "aria-labelledby": a.triggerId,
    "data-orientation": r.orientation
  }, i, o, {
    ref: t,
    style: {
      "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
      "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
      ...e.style
    }
  }));
});
function sf(e) {
  return e ? "open" : "closed";
}
const Db = nf, Tb = _b, Ab = Pb, lf = Rb, cf = Nb;
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), uf = (...e) => e.filter((t, n, o) => !!t && o.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ob = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kb = I(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: a,
    iconNode: i,
    ...s
  }, l) => x(
    "svg",
    {
      ref: l,
      ...Ob,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: uf("lucide", r),
      ...s
    },
    [
      ...i.map(([c, u]) => x(c, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = (e, t) => {
  const n = I(
    ({ className: o, ...r }, a) => x(kb, {
      ref: a,
      iconNode: t,
      className: uf(`lucide-${Ib(e)}`, o),
      ...r
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lb = ut("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = ut("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = ut("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = ut("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = ut("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const df = ut("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ya = ut("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vb = ut("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ka = ut("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = ut("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ff = ut("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = ut("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = ut("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = ut("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vs = ut("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), jb = Db, pf = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Tb,
  {
    ref: n,
    className: L("border-b", e),
    ...t
  }
));
pf.displayName = "AccordionItem";
const mf = $.forwardRef(({ className: e, children: t, customIcon: n, ...o }, r) => /* @__PURE__ */ b(Ab, { className: "flex", children: /* @__PURE__ */ Q(
  lf,
  {
    ref: r,
    className: L(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 group",
      e
    ),
    ...o,
    children: [
      t,
      n || /* @__PURE__ */ b(wl, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
mf.displayName = lf.displayName;
const gf = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ b(
  cf,
  {
    ref: o,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ b("div", { className: L("pb-4 pt-0", e), children: t })
  }
));
gf.displayName = cf.displayName;
function Ub(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e);
  le(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const bs = "dismissableLayer.update", Yb = "dismissableLayer.pointerDownOutside", Kb = "dismissableLayer.focusOutside";
let ru;
const qb = /* @__PURE__ */ At({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ao = /* @__PURE__ */ I((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: a, onFocusOutside: i, onInteractOutside: s, onDismiss: l, ...c } = e, u = Ut(qb), [d, f] = re(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = re({}), g = be(
    t,
    (T) => f(T)
  ), h = Array.from(u.layers), [v] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(v), y = d ? h.indexOf(d) : -1, C = u.layersWithOutsidePointerEventsDisabled.size > 0, _ = y >= w, S = Xb((T) => {
    const N = T.target, k = [
      ...u.branches
    ].some(
      (F) => F.contains(N)
    );
    !_ || k || (a == null || a(T), s == null || s(T), T.defaultPrevented || l == null || l());
  }, p), E = Zb((T) => {
    const N = T.target;
    [
      ...u.branches
    ].some(
      (F) => F.contains(N)
    ) || (i == null || i(T), s == null || s(T), T.defaultPrevented || l == null || l());
  }, p);
  return Ub((T) => {
    y === u.layers.size - 1 && (r == null || r(T), !T.defaultPrevented && l && (T.preventDefault(), l()));
  }, p), le(() => {
    if (d)
      return o && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ru = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), au(), () => {
        o && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = ru);
      };
  }, [
    d,
    p,
    o,
    u
  ]), le(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), au());
  }, [
    d,
    u
  ]), le(() => {
    const T = () => m({});
    return document.addEventListener(bs, T), () => document.removeEventListener(bs, T);
  }, []), /* @__PURE__ */ x(ie.div, P({}, c, {
    ref: g,
    style: {
      pointerEvents: C ? _ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Y(e.onFocusCapture, E.onFocusCapture),
    onBlurCapture: Y(e.onBlurCapture, E.onBlurCapture),
    onPointerDownCapture: Y(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function Xb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e), o = q(!1), r = q(() => {
  });
  return le(() => {
    const a = (s) => {
      if (s.target && !o.current) {
        let c = function() {
          hf(Yb, n, l, {
            discrete: !0
          });
        };
        const l = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = c, t.addEventListener("click", r.current, {
          once: !0
        })) : c();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, i = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function Zb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ke(e), o = q(!1);
  return le(() => {
    const r = (a) => {
      a.target && !o.current && hf(Kb, n, {
        originalEvent: a
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function au() {
  const e = new CustomEvent(bs);
  document.dispatchEvent(e);
}
function hf(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Ra(r, a) : r.dispatchEvent(a);
}
const Mi = "focusScope.autoFocusOnMount", Ni = "focusScope.autoFocusOnUnmount", iu = {
  bubbles: !1,
  cancelable: !0
}, qa = /* @__PURE__ */ I((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: a, ...i } = e, [s, l] = re(null), c = ke(r), u = ke(a), d = q(null), f = be(
    t,
    (g) => l(g)
  ), p = q({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  le(() => {
    if (o) {
      let g = function(y) {
        if (p.paused || !s)
          return;
        const C = y.target;
        s.contains(C) ? d.current = C : Rn(d.current, {
          select: !0
        });
      }, h = function(y) {
        if (p.paused || !s)
          return;
        const C = y.relatedTarget;
        C !== null && (s.contains(C) || Rn(d.current, {
          select: !0
        }));
      }, v = function(y) {
        if (document.activeElement === document.body)
          for (const _ of y)
            _.removedNodes.length > 0 && Rn(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", h);
      const w = new MutationObserver(v);
      return s && w.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", h), w.disconnect();
      };
    }
  }, [
    o,
    s,
    p.paused
  ]), le(() => {
    if (s) {
      lu.add(p);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const v = new CustomEvent(Mi, iu);
        s.addEventListener(Mi, c), s.dispatchEvent(v), v.defaultPrevented || (Qb(o1(vf(s)), {
          select: !0
        }), document.activeElement === g && Rn(s));
      }
      return () => {
        s.removeEventListener(Mi, c), setTimeout(() => {
          const v = new CustomEvent(Ni, iu);
          s.addEventListener(Ni, u), s.dispatchEvent(v), v.defaultPrevented || Rn(g ?? document.body, {
            select: !0
          }), s.removeEventListener(Ni, u), lu.remove(p);
        }, 0);
      };
    }
  }, [
    s,
    c,
    u,
    p
  ]);
  const m = he((g) => {
    if (!n && !o || p.paused)
      return;
    const h = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, v = document.activeElement;
    if (h && v) {
      const w = g.currentTarget, [y, C] = Jb(w);
      y && C ? !g.shiftKey && v === C ? (g.preventDefault(), n && Rn(y, {
        select: !0
      })) : g.shiftKey && v === y && (g.preventDefault(), n && Rn(C, {
        select: !0
      })) : v === w && g.preventDefault();
    }
  }, [
    n,
    o,
    p.paused
  ]);
  return /* @__PURE__ */ x(ie.div, P({
    tabIndex: -1
  }, i, {
    ref: f,
    onKeyDown: m
  }));
});
function Qb(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (Rn(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function Jb(e) {
  const t = vf(e), n = su(t, e), o = su(t.reverse(), e);
  return [
    n,
    o
  ];
}
function vf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function su(e, t) {
  for (const n of e)
    if (!e1(n, {
      upTo: t
    }))
      return n;
}
function e1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function t1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && t1(e) && t && e.select();
  }
}
const lu = n1();
function n1() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cu(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cu(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function cu(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function o1(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Xa = /* @__PURE__ */ I((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(ie.div, P({}, r, {
    ref: t
  })), o) : null;
});
let Di = 0;
function Za() {
  le(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : uu()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : uu()), Di++, () => {
      Di === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), Di--;
    };
  }, []);
}
function uu() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Mn = function() {
  return Mn = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Mn.apply(this, arguments);
};
function r1(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function a1(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, a; o < r; o++)
      (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var pa = "right-scroll-bar-position", ma = "width-before-scroll-bar", i1 = "with-scroll-bars-hidden", s1 = "--removed-body-scroll-bar-size";
function Ti(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function l1(e, t) {
  var n = re(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var c1 = typeof window < "u" ? $.useLayoutEffect : $.useEffect, du = /* @__PURE__ */ new WeakMap();
function u1(e, t) {
  var n = l1(null, function(o) {
    return e.forEach(function(r) {
      return Ti(r, o);
    });
  });
  return c1(function() {
    var o = du.get(n);
    if (o) {
      var r = new Set(o), a = new Set(e), i = n.current;
      r.forEach(function(s) {
        a.has(s) || Ti(s, null);
      }), a.forEach(function(s) {
        r.has(s) || Ti(s, i);
      });
    }
    du.set(n, e);
  }, [e]), n;
}
var Ma = function() {
  return Ma = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ma.apply(this, arguments);
};
function d1(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function f1(e) {
  return e;
}
function p1(e, t) {
  t === void 0 && (t = f1);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, o);
      return n.push(i), function() {
        n = n.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (o = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      o = !0;
      var i = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), i = n;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), n;
        }
      };
    }
  };
  return r;
}
function m1(e) {
  e === void 0 && (e = {});
  var t = p1(null);
  return t.options = Ma({ async: !0, ssr: !1 }, e), t;
}
var bf = function(e) {
  var t = e.sideCar, n = d1(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return $.createElement(o, Ma({}, n));
};
bf.isSideCarExport = !0;
function g1(e, t) {
  return e.useMedium(t), bf;
}
var wf = m1(), Ai = function() {
}, Qa = $.forwardRef(function(e, t) {
  var n = $.useRef(null), o = $.useState({
    onScrollCapture: Ai,
    onWheelCapture: Ai,
    onTouchMoveCapture: Ai
  }), r = o[0], a = o[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, m = e.inert, g = e.allowPinchZoom, h = e.as, v = h === void 0 ? "div" : h, w = r1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), y = f, C = u1([n, t]), _ = Mn(Mn({}, w), r);
  return $.createElement(
    $.Fragment,
    null,
    u && $.createElement(y, { sideCar: wf, removeScrollBar: c, shards: d, noIsolation: p, inert: m, setCallbacks: a, allowPinchZoom: !!g, lockRef: n }),
    i ? $.cloneElement($.Children.only(s), Mn(Mn({}, _), { ref: C })) : $.createElement(v, Mn({}, _, { className: l, ref: C }), s)
  );
});
Qa.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Qa.classNames = {
  fullWidth: ma,
  zeroRight: pa
};
var h1 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function v1() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = h1();
  return t && e.setAttribute("nonce", t), e;
}
function b1(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function w1(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var y1 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = v1()) && (b1(t, n), w1(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, x1 = function() {
  var e = y1();
  return function(t, n) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, yf = function() {
  var e = x1(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, $1 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ii = function(e) {
  return parseInt(e || "", 10) || 0;
}, C1 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ii(n), Ii(o), Ii(r)];
}, S1 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return $1;
  var t = C1(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, _1 = yf(), So = "data-scroll-locked", E1 = function(e, t, n, o) {
  var r = e.left, a = e.top, i = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(i1, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body[`).concat(So, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(pa, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(ma, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(pa, " .").concat(pa, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(ma, " .").concat(ma, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(So, `] {
    `).concat(s1, ": ").concat(s, `px;
  }
`);
}, fu = function() {
  var e = parseInt(document.body.getAttribute(So) || "0", 10);
  return isFinite(e) ? e : 0;
}, P1 = function() {
  $.useEffect(function() {
    return document.body.setAttribute(So, (fu() + 1).toString()), function() {
      var e = fu() - 1;
      e <= 0 ? document.body.removeAttribute(So) : document.body.setAttribute(So, e.toString());
    };
  }, []);
}, R1 = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o;
  P1();
  var a = $.useMemo(function() {
    return S1(r);
  }, [r]);
  return $.createElement(_1, { styles: E1(a, !t, r, n ? "" : "!important") });
}, ws = !1;
if (typeof window < "u")
  try {
    var Kr = Object.defineProperty({}, "passive", {
      get: function() {
        return ws = !0, !0;
      }
    });
    window.addEventListener("test", Kr, Kr), window.removeEventListener("test", Kr, Kr);
  } catch {
    ws = !1;
  }
var go = ws ? { passive: !1 } : !1, M1 = function(e) {
  return e.tagName === "TEXTAREA";
}, xf = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !M1(e) && n[t] === "visible")
  );
}, N1 = function(e) {
  return xf(e, "overflowY");
}, D1 = function(e) {
  return xf(e, "overflowX");
}, pu = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = $f(e, n);
    if (o) {
      var r = Cf(e, n), a = r[1], i = r[2];
      if (a > i)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, T1 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, A1 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, $f = function(e, t) {
  return e === "v" ? N1(t) : D1(t);
}, Cf = function(e, t) {
  return e === "v" ? T1(t) : A1(t);
}, I1 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, O1 = function(e, t, n, o, r) {
  var a = I1(e, window.getComputedStyle(t).direction), i = a * o, s = n.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = Cf(e, s), m = p[0], g = p[1], h = p[2], v = g - h - a * m;
    (m || v) && $f(e, s) && (d += v, f += m), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (d === 0 || !r) || !u && (f === 0 || !r)) && (c = !0), c;
}, qr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, mu = function(e) {
  return [e.deltaX, e.deltaY];
}, gu = function(e) {
  return e && "current" in e ? e.current : e;
}, k1 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, L1 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, F1 = 0, ho = [];
function z1(e) {
  var t = $.useRef([]), n = $.useRef([0, 0]), o = $.useRef(), r = $.useState(F1++)[0], a = $.useState(function() {
    return yf();
  })[0], i = $.useRef(e);
  $.useEffect(function() {
    i.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var g = a1([e.lockRef.current], (e.shards || []).map(gu), !0).filter(Boolean);
      return g.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), g.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = $.useCallback(function(g, h) {
    if ("touches" in g && g.touches.length === 2)
      return !i.current.allowPinchZoom;
    var v = qr(g), w = n.current, y = "deltaX" in g ? g.deltaX : w[0] - v[0], C = "deltaY" in g ? g.deltaY : w[1] - v[1], _, S = g.target, E = Math.abs(y) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && E === "h" && S.type === "range")
      return !1;
    var T = pu(E, S);
    if (!T)
      return !0;
    if (T ? _ = E : (_ = E === "v" ? "h" : "v", T = pu(E, S)), !T)
      return !1;
    if (!o.current && "changedTouches" in g && (y || C) && (o.current = _), !_)
      return !0;
    var N = o.current || _;
    return O1(N, h, g, N === "h" ? y : C, !0);
  }, []), l = $.useCallback(function(g) {
    var h = g;
    if (!(!ho.length || ho[ho.length - 1] !== a)) {
      var v = "deltaY" in h ? mu(h) : qr(h), w = t.current.filter(function(_) {
        return _.name === h.type && _.target === h.target && k1(_.delta, v);
      })[0];
      if (w && w.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!w) {
        var y = (i.current.shards || []).map(gu).filter(Boolean).filter(function(_) {
          return _.contains(h.target);
        }), C = y.length > 0 ? s(h, y[0]) : !i.current.noIsolation;
        C && h.cancelable && h.preventDefault();
      }
    }
  }, []), c = $.useCallback(function(g, h, v, w) {
    var y = { name: g, delta: h, target: v, should: w };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== y;
      });
    }, 1);
  }, []), u = $.useCallback(function(g) {
    n.current = qr(g), o.current = void 0;
  }, []), d = $.useCallback(function(g) {
    c(g.type, mu(g), g.target, s(g, e.lockRef.current));
  }, []), f = $.useCallback(function(g) {
    c(g.type, qr(g), g.target, s(g, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return ho.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, go), document.addEventListener("touchmove", l, go), document.addEventListener("touchstart", u, go), function() {
      ho = ho.filter(function(g) {
        return g !== a;
      }), document.removeEventListener("wheel", l, go), document.removeEventListener("touchmove", l, go), document.removeEventListener("touchstart", u, go);
    };
  }, []);
  var p = e.removeScrollBar, m = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    m ? $.createElement(a, { styles: L1(r) }) : null,
    p ? $.createElement(R1, { gapMode: "margin" }) : null
  );
}
const V1 = g1(wf, z1);
var Er = $.forwardRef(function(e, t) {
  return $.createElement(Qa, Mn({}, e, { ref: t, sideCar: V1 }));
});
Er.classNames = Qa.classNames;
var H1 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, vo = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Zr = {}, Oi = 0, Sf = function(e) {
  return e && (e.host || Sf(e.parentNode));
}, B1 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = Sf(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, G1 = function(e, t, n, o) {
  var r = B1(t, Array.isArray(e) ? e : [e]);
  Zr[n] || (Zr[n] = /* @__PURE__ */ new WeakMap());
  var a = Zr[n], i = [], s = /* @__PURE__ */ new Set(), l = new Set(r), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  r.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else
        try {
          var p = f.getAttribute(o), m = p !== null && p !== "false", g = (vo.get(f) || 0) + 1, h = (a.get(f) || 0) + 1;
          vo.set(f, g), a.set(f, h), i.push(f), g === 1 && m && Xr.set(f, !0), h === 1 && f.setAttribute(n, "true"), m || f.setAttribute(o, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", f, v);
        }
    });
  };
  return u(t), s.clear(), Oi++, function() {
    i.forEach(function(d) {
      var f = vo.get(d) - 1, p = a.get(d) - 1;
      vo.set(d, f), a.set(d, p), f || (Xr.has(d) || d.removeAttribute(o), Xr.delete(d)), p || d.removeAttribute(n);
    }), Oi--, Oi || (vo = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Zr = {});
  };
}, Ja = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = H1(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), G1(o, r, n, "aria-hidden")) : function() {
    return null;
  };
};
const _f = "Dialog", [Ef, Pf] = Ve(_f), [W1, Kt] = Ef(_f), j1 = (e) => {
  const { __scopeDialog: t, children: n, open: o, defaultOpen: r, onOpenChange: a, modal: i = !0 } = e, s = q(null), l = q(null), [c = !1, u] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ x(W1, {
    scope: t,
    triggerRef: s,
    contentRef: l,
    contentId: et(),
    titleId: et(),
    descriptionId: et(),
    open: c,
    onOpenChange: u,
    onOpenToggle: he(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: i
  }, n);
}, U1 = "DialogTrigger", Y1 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Kt(U1, n), a = be(t, r.triggerRef);
  return /* @__PURE__ */ x(ie.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": yl(r.open)
  }, o, {
    ref: a,
    onClick: Y(e.onClick, r.onOpenToggle)
  }));
}), Rf = "DialogPortal", [K1, Mf] = Ef(Rf, {
  forceMount: void 0
}), q1 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: o, container: r } = e, a = Kt(Rf, t);
  return /* @__PURE__ */ x(K1, {
    scope: t,
    forceMount: n
  }, Kn.map(
    o,
    (i) => /* @__PURE__ */ x(Ye, {
      present: n || a.open
    }, /* @__PURE__ */ x(Xa, {
      asChild: !0,
      container: r
    }, i))
  ));
}, ys = "DialogOverlay", X1 = /* @__PURE__ */ I((e, t) => {
  const n = Mf(ys, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = Kt(ys, e.__scopeDialog);
  return a.modal ? /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, /* @__PURE__ */ x(Z1, P({}, r, {
    ref: t
  }))) : null;
}), Z1 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Kt(ys, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ x(Er, {
      as: Bt,
      allowPinchZoom: !0,
      shards: [
        r.contentRef
      ]
    }, /* @__PURE__ */ x(ie.div, P({
      "data-state": yl(r.open)
    }, o, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...o.style
      }
    })))
  );
}), Eo = "DialogContent", Q1 = /* @__PURE__ */ I((e, t) => {
  const n = Mf(Eo, e.__scopeDialog), { forceMount: o = n.forceMount, ...r } = e, a = Kt(Eo, e.__scopeDialog);
  return /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ x(J1, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ x(ew, P({}, r, {
    ref: t
  })));
}), J1 = /* @__PURE__ */ I((e, t) => {
  const n = Kt(Eo, e.__scopeDialog), o = q(null), r = be(t, n.contentRef, o);
  return le(() => {
    const a = o.current;
    if (a)
      return Ja(a);
  }, []), /* @__PURE__ */ x(Nf, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Y(e.onCloseAutoFocus, (a) => {
      var i;
      a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus();
    }),
    onPointerDownOutside: Y(e.onPointerDownOutside, (a) => {
      const i = a.detail.originalEvent, s = i.button === 0 && i.ctrlKey === !0;
      (i.button === 2 || s) && a.preventDefault();
    }),
    onFocusOutside: Y(
      e.onFocusOutside,
      (a) => a.preventDefault()
    )
  }));
}), ew = /* @__PURE__ */ I((e, t) => {
  const n = Kt(Eo, e.__scopeDialog), o = q(!1), r = q(!1);
  return /* @__PURE__ */ x(Nf, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        o.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const l = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), Nf = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, ...i } = e, s = Kt(Eo, n), l = q(null), c = be(t, l);
  return Za(), /* @__PURE__ */ x(on, null, /* @__PURE__ */ x(qa, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ao, P({
    role: "dialog",
    id: s.contentId,
    "aria-describedby": s.descriptionId,
    "aria-labelledby": s.titleId,
    "data-state": yl(s.open)
  }, i, {
    ref: c,
    onDismiss: () => s.onOpenChange(!1)
  }))), !1);
}), Df = "DialogTitle", tw = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Kt(Df, n);
  return /* @__PURE__ */ x(ie.h2, P({
    id: r.titleId
  }, o, {
    ref: t
  }));
}), nw = "DialogDescription", ow = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Kt(nw, n);
  return /* @__PURE__ */ x(ie.p, P({
    id: r.descriptionId
  }, o, {
    ref: t
  }));
}), rw = "DialogClose", aw = /* @__PURE__ */ I((e, t) => {
  const { __scopeDialog: n, ...o } = e, r = Kt(rw, n);
  return /* @__PURE__ */ x(ie.button, P({
    type: "button"
  }, o, {
    ref: t,
    onClick: Y(
      e.onClick,
      () => r.onOpenChange(!1)
    )
  }));
});
function yl(e) {
  return e ? "open" : "closed";
}
const iw = "DialogTitleWarning", [sw, jR] = Zv(iw, {
  contentName: Eo,
  titleName: Df,
  docsSlug: "dialog"
}), Pr = j1, ei = Y1, Rr = q1, io = X1, so = Q1, Oo = tw, ko = ow, lo = aw, lw = "AlertDialog", [cw, UR] = Ve(lw, [
  Pf
]), xn = Pf(), uw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = xn(t);
  return /* @__PURE__ */ x(Pr, P({}, o, n, {
    modal: !0
  }));
}, dw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = xn(n);
  return /* @__PURE__ */ x(ei, P({}, r, o, {
    ref: t
  }));
}), fw = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, o = xn(t);
  return /* @__PURE__ */ x(Rr, P({}, o, n));
}, pw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = xn(n);
  return /* @__PURE__ */ x(io, P({}, r, o, {
    ref: t
  }));
}), Tf = "AlertDialogContent", [mw, gw] = cw(Tf), hw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, children: o, ...r } = e, a = xn(n), i = q(null), s = be(t, i), l = q(null);
  return /* @__PURE__ */ x(sw, {
    contentName: Tf,
    titleName: vw,
    docsSlug: "alert-dialog"
  }, /* @__PURE__ */ x(mw, {
    scope: n,
    cancelRef: l
  }, /* @__PURE__ */ x(so, P({
    role: "alertdialog"
  }, a, r, {
    ref: s,
    onOpenAutoFocus: Y(r.onOpenAutoFocus, (c) => {
      var u;
      c.preventDefault(), (u = l.current) === null || u === void 0 || u.focus({
        preventScroll: !0
      });
    }),
    onPointerDownOutside: (c) => c.preventDefault(),
    onInteractOutside: (c) => c.preventDefault()
  }), /* @__PURE__ */ x(pl, null, o), !1)));
}), vw = "AlertDialogTitle", bw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = xn(n);
  return /* @__PURE__ */ x(Oo, P({}, r, o, {
    ref: t
  }));
}), ww = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = xn(n);
  return /* @__PURE__ */ x(ko, P({}, r, o, {
    ref: t
  }));
}), yw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, r = xn(n);
  return /* @__PURE__ */ x(lo, P({}, r, o, {
    ref: t
  }));
}), xw = "AlertDialogCancel", $w = /* @__PURE__ */ I((e, t) => {
  const { __scopeAlertDialog: n, ...o } = e, { cancelRef: r } = gw(xw, n), a = xn(n), i = be(t, r);
  return /* @__PURE__ */ x(lo, P({}, a, o, {
    ref: i
  }));
}), Cw = uw, Sw = dw, _w = fw, Af = pw, If = hw, Of = yw, kf = $w, Lf = bw, Ff = ww;
function zf(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = zf(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function Ew() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = zf(e)) && (o && (o += " "), o += t);
  return o;
}
const hu = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, vu = Ew, co = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return vu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: r, defaultVariants: a } = t, i = Object.keys(r).map((c) => {
    const u = n == null ? void 0 : n[c], d = a == null ? void 0 : a[c];
    if (u === null)
      return null;
    const f = hu(u) || hu(d);
    return r[c][f];
  }), s = n && Object.entries(n).reduce((c, u) => {
    let [d, f] = u;
    return f === void 0 || (c[d] = f), c;
  }, {}), l = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, u) => {
    let { class: d, className: f, ...p } = u;
    return Object.entries(p).every((m) => {
      let [g, h] = m;
      return Array.isArray(h) ? h.includes({
        ...a,
        ...s
      }[g]) : {
        ...a,
        ...s
      }[g] === h;
    }) ? [
      ...c,
      d,
      f
    ] : c;
  }, []);
  return vu(e, i, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Po = co(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors ",
  {
    variants: {
      variant: {
        default: "bg-[#0073E6] text-white hover:bg-[#1A86F3] active:bg-[#006DDA] disabled:bg-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        secondary: "bg-[#FFF] text-[#000] hover:bg-[#E8E9EB] active:bg-[#9B9EA3] disabled:bg-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        outline: "border border-[#FFF]  text-[#FFF] hover:border-[#E8E9EB] active:border-[#9B9EA3] disabled:border-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        outline2: "border border-[#000] text-[#000] hover:border-[#4A4C52] active:border-[#000] disabled:border-[#4A4C52] disabled:text-[#C7CBD1] transition duration-100",
        link: "text-slate-900 underline-offset-4 hover:underline",
        destructive: "bg-[#DB0000] text-white hover:bg-red-500/90 ",
        ghost: "bg-transparent text-slate-900 hover:bg-slate-300"
      },
      size: {
        default: "min-w-[56px] px-3 py-2 h-9 rounded-lg text-sm",
        sm: "min-w-[56px] px-3 py-2 h-8 rounded-lg text-xs",
        lg: "min-w-[56px] px-6 py-3 h-12 rounded-lg text-base ",
        icon: "h-10 w-10 p-4 rounded-full text-lg flex flex-shrink-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Pt = $.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...r }, a) => /* @__PURE__ */ b(
    o ? Bt : "button",
    {
      className: L(Po({ variant: t, size: n, className: e })),
      ref: a,
      ...r
    }
  )
);
Pt.displayName = "Button";
const YR = Cw, KR = Sw, Pw = _w, Vf = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Af,
  {
    className: L(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Vf.displayName = Af.displayName;
const Rw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q(Pw, { children: [
  /* @__PURE__ */ b(Vf, {}),
  /* @__PURE__ */ b(
    If,
    {
      ref: n,
      className: L(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg    ",
        e
      ),
      ...t
    }
  )
] }));
Rw.displayName = If.displayName;
const Mw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Mw.displayName = "AlertDialogHeader";
const Nw = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
Nw.displayName = "AlertDialogFooter";
const Dw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Lf,
  {
    ref: n,
    className: L("text-lg font-semibold", e),
    ...t
  }
));
Dw.displayName = Lf.displayName;
const Tw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Ff,
  {
    ref: n,
    className: L("text-sm text-slate-500  ", e),
    ...t
  }
));
Tw.displayName = Ff.displayName;
const Aw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Of,
  {
    ref: n,
    className: L(Po(), e),
    ...t
  }
));
Aw.displayName = Of.displayName;
const Iw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  kf,
  {
    ref: n,
    className: L(
      Po({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
Iw.displayName = kf.displayName;
const Ow = co(
  "relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950    ",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950    ",
        destructive: "border-red-500/50 text-red-500   [&>svg]:text-red-500        "
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), kw = $.forwardRef(({ className: e, variant: t, ...n }, o) => /* @__PURE__ */ b(
  "div",
  {
    ref: o,
    role: "alert",
    className: L(Ow({ variant: t }), e),
    ...n
  }
));
kw.displayName = "Alert";
const Lw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "h5",
  {
    ref: n,
    className: L("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
Lw.displayName = "AlertTitle";
const Fw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "div",
  {
    ref: n,
    className: L("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
Fw.displayName = "AlertDescription";
const zw = /* @__PURE__ */ I((e, t) => {
  const { ratio: n = 1, style: o, ...r } = e;
  return /* @__PURE__ */ x("div", {
    style: {
      // ensures inner element is contained
      position: "relative",
      // ensures padding bottom trick maths works
      width: "100%",
      paddingBottom: `${100 / n}%`
    },
    "data-radix-aspect-ratio-wrapper": ""
  }, /* @__PURE__ */ x(ie.div, P({}, r, {
    ref: t,
    style: {
      ...o,
      // ensures children expand in ratio
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  })));
}), Vw = zw, qR = Vw, Hf = "Avatar", [Hw, XR] = Ve(Hf), [Bw, Bf] = Hw(Hf), Gw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, ...o } = e, [r, a] = re("idle");
  return /* @__PURE__ */ x(Bw, {
    scope: n,
    imageLoadingStatus: r,
    onImageLoadingStatusChange: a
  }, /* @__PURE__ */ x(ie.span, P({}, o, {
    ref: t
  })));
}), Ww = "AvatarImage", jw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, src: o, onLoadingStatusChange: r = () => {
  }, ...a } = e, i = Bf(Ww, n), s = Kw(o), l = ke((c) => {
    r(c), i.onImageLoadingStatusChange(c);
  });
  return tt(() => {
    s !== "idle" && l(s);
  }, [
    s,
    l
  ]), s === "loaded" ? /* @__PURE__ */ x(ie.img, P({}, a, {
    ref: t,
    src: o
  })) : null;
}), Uw = "AvatarFallback", Yw = /* @__PURE__ */ I((e, t) => {
  const { __scopeAvatar: n, delayMs: o, ...r } = e, a = Bf(Uw, n), [i, s] = re(o === void 0);
  return le(() => {
    if (o !== void 0) {
      const l = window.setTimeout(
        () => s(!0),
        o
      );
      return () => window.clearTimeout(l);
    }
  }, [
    o
  ]), i && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ x(ie.span, P({}, r, {
    ref: t
  })) : null;
});
function Kw(e) {
  const [t, n] = re("idle");
  return tt(() => {
    if (!e) {
      n("error");
      return;
    }
    let o = !0;
    const r = new window.Image(), a = (i) => () => {
      o && n(i);
    };
    return n("loading"), r.onload = a("loaded"), r.onerror = a("error"), r.src = e, () => {
      o = !1;
    };
  }, [
    e
  ]), t;
}
const Gf = Gw, Wf = jw, jf = Yw, qw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Gf,
  {
    ref: n,
    className: L(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
qw.displayName = Gf.displayName;
const Xw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Wf,
  {
    ref: n,
    className: L("aspect-square h-full w-full", e),
    ...t
  }
));
Xw.displayName = Wf.displayName;
const Zw = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  jf,
  {
    ref: n,
    className: L(
      "flex h-full w-full items-center justify-center rounded-full bg-slate-100  ",
      e
    ),
    ...t
  }
));
Zw.displayName = jf.displayName;
const Qw = co(
  "inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2    ",
  {
    variants: {
      variant: {
        default: "border-transparent bg-slate-900 text-slate-50 hover:bg-slate-900/80      ",
        secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80      ",
        destructive: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80      ",
        outline: "text-slate-950  "
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function bu({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ b("div", { className: L(Qw({ variant: t }), e), ...n });
}
const Jw = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='arrow-forward-small-line'%3e%3cpath%20id='Vector'%20d='M8.88566%208.24998L6.52864%205.89295C6.26829%205.6326%206.26829%205.21049%206.52864%204.95014C6.78899%204.6898%207.2111%204.6898%207.47145%204.95014L10.2999%207.77857C10.5602%208.03892%2010.5602%208.46103%2010.2999%208.72138L7.47145%2011.5498C7.2111%2011.8102%206.78899%2011.8102%206.52864%2011.5498C6.26829%2011.2895%206.26829%2010.8673%206.52864%2010.607L8.88566%208.24998Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e", ey = $.forwardRef(({ ...e }, t) => /* @__PURE__ */ b("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
ey.displayName = "Breadcrumb";
const ty = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "span",
  {
    ref: n,
    className: L(
      "flex flex-wrap items-center gap-1.5 break-words font-semibold text-[14px] text-[#000] sm:gap-2.5",
      e
    ),
    ...t
  }
));
ty.displayName = "BreadcrumbList";
const ny = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "span",
  {
    ref: n,
    className: L(
      "inline-flex items-center gap-1.5 font-semibold text-[14px] text-[#000] leading-5",
      e
    ),
    ...t
  }
));
ny.displayName = "BreadcrumbItem";
const oy = $.forwardRef(({ asChild: e, className: t, ...n }, o) => /* @__PURE__ */ b(e ? Bt : "a", { ref: o, className: L("transition-colors", t), ...n }));
oy.displayName = "BreadcrumbLink";
const ry = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: L("font-semibold text-[14px] text-[#000]", e),
    ...t
  }
));
ry.displayName = "BreadcrumbPage";
const ay = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ b(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: L("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ b("img", { src: Jw, alt: "forward-icon" })
  }
);
ay.displayName = "BreadcrumbSeparator";
const iy = ({
  className: e,
  ...t
}) => /* @__PURE__ */ Q(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: L("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ b(ff, { className: "h-4 w-4" }),
      /* @__PURE__ */ b("span", { className: "sr-only", children: "More" })
    ]
  }
);
iy.displayName = "BreadcrumbElipssis";
function De(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Rt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function lt(e, t) {
  const n = De(e);
  return isNaN(t) ? Rt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Gt(e, t) {
  const n = De(e);
  if (isNaN(t))
    return Rt(e, NaN);
  if (!t)
    return n;
  const o = n.getDate(), r = Rt(e, n.getTime());
  r.setMonth(n.getMonth() + t + 1, 0);
  const a = r.getDate();
  return o >= a ? r : (n.setFullYear(
    r.getFullYear(),
    r.getMonth(),
    o
  ), n);
}
const xl = 6048e5, sy = 864e5;
let ly = {};
function Mr() {
  return ly;
}
function rn(e, t) {
  var s, l, c, u;
  const n = Mr(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, r = De(e), a = r.getDay(), i = (a < o ? 7 : 0) + a - o;
  return r.setDate(r.getDate() - i), r.setHours(0, 0, 0, 0), r;
}
function Jn(e) {
  return rn(e, { weekStartsOn: 1 });
}
function Uf(e) {
  const t = De(e), n = t.getFullYear(), o = Rt(e, 0);
  o.setFullYear(n + 1, 0, 4), o.setHours(0, 0, 0, 0);
  const r = Jn(o), a = Rt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const i = Jn(a);
  return t.getTime() >= r.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Ro(e) {
  const t = De(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Na(e) {
  const t = De(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function en(e, t) {
  const n = Ro(e), o = Ro(t), r = +n - Na(n), a = +o - Na(o);
  return Math.round((r - a) / sy);
}
function cy(e) {
  const t = Uf(e), n = Rt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Jn(n);
}
function xs(e, t) {
  const n = t * 7;
  return lt(e, n);
}
function uy(e, t) {
  return Gt(e, t * 12);
}
function dy(e) {
  let t;
  return e.forEach(function(n) {
    const o = De(n);
    (t === void 0 || t < o || isNaN(Number(o))) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function fy(e) {
  let t;
  return e.forEach((n) => {
    const o = De(n);
    (!t || t > o || isNaN(+o)) && (t = o);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function bt(e, t) {
  const n = Ro(e), o = Ro(t);
  return +n == +o;
}
function $l(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function py(e) {
  if (!$l(e) && typeof e != "number")
    return !1;
  const t = De(e);
  return !isNaN(Number(t));
}
function ur(e, t) {
  const n = De(e), o = De(t), r = n.getFullYear() - o.getFullYear(), a = n.getMonth() - o.getMonth();
  return r * 12 + a;
}
function my(e, t, n) {
  const o = rn(e, n), r = rn(t, n), a = +o - Na(o), i = +r - Na(r);
  return Math.round((a - i) / xl);
}
function Cl(e) {
  const t = De(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function wt(e) {
  const t = De(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Yf(e) {
  const t = De(e), n = Rt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Sl(e, t) {
  var s, l, c, u;
  const n = Mr(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, r = De(e), a = r.getDay(), i = (a < o ? -7 : 0) + 6 - (a - o);
  return r.setDate(r.getDate() + i), r.setHours(23, 59, 59, 999), r;
}
function Kf(e) {
  return Sl(e, { weekStartsOn: 1 });
}
const gy = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, hy = (e, t, n) => {
  let o;
  const r = gy[e];
  return typeof r == "string" ? o = r : t === 1 ? o = r.one : o = r.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + o : o + " ago" : o;
};
function ki(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const vy = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, by = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, wy = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, yy = {
  date: ki({
    formats: vy,
    defaultWidth: "full"
  }),
  time: ki({
    formats: by,
    defaultWidth: "full"
  }),
  dateTime: ki({
    formats: wy,
    defaultWidth: "full"
  })
}, xy = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $y = (e, t, n, o) => xy[e];
function Yo(e) {
  return (t, n) => {
    const o = n != null && n.context ? String(n.context) : "standalone";
    let r;
    if (o === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = n != null && n.width ? String(n.width) : i;
      r = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = n != null && n.width ? String(n.width) : e.defaultWidth;
      r = e.values[s] || e.values[i];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return r[a];
  };
}
const Cy = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Sy = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _y = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ey = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Py = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ry = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, My = (e, t) => {
  const n = Number(e), o = n % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ny = {
  ordinalNumber: My,
  era: Yo({
    values: Cy,
    defaultWidth: "wide"
  }),
  quarter: Yo({
    values: Sy,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Yo({
    values: _y,
    defaultWidth: "wide"
  }),
  day: Yo({
    values: Ey,
    defaultWidth: "wide"
  }),
  dayPeriod: Yo({
    values: Py,
    defaultWidth: "wide",
    formattingValues: Ry,
    defaultFormattingWidth: "wide"
  })
};
function Ko(e) {
  return (t, n = {}) => {
    const o = n.width, r = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(r);
    if (!a)
      return null;
    const i = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Ty(s, (d) => d.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Dy(s, (d) => d.test(i))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(i.length);
    return { value: c, rest: u };
  };
}
function Dy(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Ty(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Ay(e) {
  return (t, n = {}) => {
    const o = t.match(e.matchPattern);
    if (!o)
      return null;
    const r = o[0], a = t.match(e.parsePattern);
    if (!a)
      return null;
    let i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const s = t.slice(r.length);
    return { value: i, rest: s };
  };
}
const Iy = /^(\d+)(th|st|nd|rd)?/i, Oy = /\d+/i, ky = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ly = {
  any: [/^b/i, /^(a|c)/i]
}, Fy = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, zy = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Vy = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Hy = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, By = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gy = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Wy = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jy = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Uy = {
  ordinalNumber: Ay({
    matchPattern: Iy,
    parsePattern: Oy,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Ko({
    matchPatterns: ky,
    defaultMatchWidth: "wide",
    parsePatterns: Ly,
    defaultParseWidth: "any"
  }),
  quarter: Ko({
    matchPatterns: Fy,
    defaultMatchWidth: "wide",
    parsePatterns: zy,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Ko({
    matchPatterns: Vy,
    defaultMatchWidth: "wide",
    parsePatterns: Hy,
    defaultParseWidth: "any"
  }),
  day: Ko({
    matchPatterns: By,
    defaultMatchWidth: "wide",
    parsePatterns: Gy,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ko({
    matchPatterns: Wy,
    defaultMatchWidth: "any",
    parsePatterns: jy,
    defaultParseWidth: "any"
  })
}, qf = {
  code: "en-US",
  formatDistance: hy,
  formatLong: yy,
  formatRelative: $y,
  localize: Ny,
  match: Uy,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Yy(e) {
  const t = De(e);
  return en(t, Yf(t)) + 1;
}
function Xf(e) {
  const t = De(e), n = +Jn(t) - +cy(t);
  return Math.round(n / xl) + 1;
}
function Zf(e, t) {
  var u, d, f, p;
  const n = De(e), o = n.getFullYear(), r = Mr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((p = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = Rt(e, 0);
  i.setFullYear(o + 1, 0, a), i.setHours(0, 0, 0, 0);
  const s = rn(i, t), l = Rt(e, 0);
  l.setFullYear(o, 0, a), l.setHours(0, 0, 0, 0);
  const c = rn(l, t);
  return n.getTime() >= s.getTime() ? o + 1 : n.getTime() >= c.getTime() ? o : o - 1;
}
function Ky(e, t) {
  var s, l, c, u;
  const n = Mr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, r = Zf(e, t), a = Rt(e, 0);
  return a.setFullYear(r, 0, o), a.setHours(0, 0, 0, 0), rn(a, t);
}
function Qf(e, t) {
  const n = De(e), o = +rn(n, t) - +Ky(n, t);
  return Math.round(o / xl) + 1;
}
function Oe(e, t) {
  const n = e < 0 ? "-" : "", o = Math.abs(e).toString().padStart(t, "0");
  return n + o;
}
const Pn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), o = n > 0 ? n : 1 - n;
    return Oe(t === "yy" ? o % 100 : o, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Oe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Oe(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return Oe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Oe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Oe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Oe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, o = e.getMilliseconds(), r = Math.trunc(
      o * Math.pow(10, n - 3)
    );
    return Oe(r, t.length);
  }
}, bo = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wu = {
  // Era
  G: function(e, t, n) {
    const o = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(o, { width: "abbreviated" });
      case "GGGGG":
        return n.era(o, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(o, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const o = e.getFullYear(), r = o > 0 ? o : 1 - o;
      return n.ordinalNumber(r, { unit: "year" });
    }
    return Pn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, o) {
    const r = Zf(e, o), a = r > 0 ? r : 1 - r;
    if (t === "YY") {
      const i = a % 100;
      return Oe(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Oe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Uf(e);
    return Oe(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return Oe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(o);
      case "QQ":
        return Oe(o, 2);
      case "Qo":
        return n.ordinalNumber(o, { unit: "quarter" });
      case "QQQ":
        return n.quarter(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(o, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const o = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(o);
      case "qq":
        return Oe(o, 2);
      case "qo":
        return n.ordinalNumber(o, { unit: "quarter" });
      case "qqq":
        return n.quarter(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(o, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const o = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Pn.M(e, t);
      case "Mo":
        return n.ordinalNumber(o + 1, { unit: "month" });
      case "MMM":
        return n.month(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(o, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(o, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const o = e.getMonth();
    switch (t) {
      case "L":
        return String(o + 1);
      case "LL":
        return Oe(o + 1, 2);
      case "Lo":
        return n.ordinalNumber(o + 1, { unit: "month" });
      case "LLL":
        return n.month(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(o, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(o, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, o) {
    const r = Qf(e, o);
    return t === "wo" ? n.ordinalNumber(r, { unit: "week" }) : Oe(r, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const o = Xf(e);
    return t === "Io" ? n.ordinalNumber(o, { unit: "week" }) : Oe(o, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const o = Yy(e);
    return t === "Do" ? n.ordinalNumber(o, { unit: "dayOfYear" }) : Oe(o, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const o = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, o) {
    const r = e.getDay(), a = (r - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Oe(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, o) {
    const r = e.getDay(), a = (r - o.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Oe(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(r, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(r, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const o = e.getDay(), r = o === 0 ? 7 : o;
    switch (t) {
      case "i":
        return String(r);
      case "ii":
        return Oe(r, t.length);
      case "io":
        return n.ordinalNumber(r, { unit: "day" });
      case "iii":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const o = e.getHours();
    let r;
    switch (o === 12 ? r = bo.noon : o === 0 ? r = bo.midnight : r = o / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const o = e.getHours();
    let r;
    switch (o >= 17 ? r = bo.evening : o >= 12 ? r = bo.afternoon : o >= 4 ? r = bo.morning : r = bo.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(r, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let o = e.getHours() % 12;
      return o === 0 && (o = 12), n.ordinalNumber(o, { unit: "hour" });
    }
    return Pn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Pn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const o = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(o, { unit: "hour" }) : Oe(o, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let o = e.getHours();
    return o === 0 && (o = 24), t === "ko" ? n.ordinalNumber(o, { unit: "hour" }) : Oe(o, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Pn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const o = e.getTimezoneOffset();
    if (o === 0)
      return "Z";
    switch (t) {
      case "X":
        return xu(o);
      case "XXXX":
      case "XX":
        return Gn(o);
      case "XXXXX":
      case "XXX":
      default:
        return Gn(o, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return xu(o);
      case "xxxx":
      case "xx":
        return Gn(o);
      case "xxxxx":
      case "xxx":
      default:
        return Gn(o, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + yu(o, ":");
      case "OOOO":
      default:
        return "GMT" + Gn(o, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const o = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + yu(o, ":");
      case "zzzz":
      default:
        return "GMT" + Gn(o, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const o = Math.trunc(e.getTime() / 1e3);
    return Oe(o, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const o = e.getTime();
    return Oe(o, t.length);
  }
};
function yu(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), r = Math.trunc(o / 60), a = o % 60;
  return a === 0 ? n + String(r) : n + String(r) + t + Oe(a, 2);
}
function xu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Oe(Math.abs(e) / 60, 2) : Gn(e, t);
}
function Gn(e, t = "") {
  const n = e > 0 ? "-" : "+", o = Math.abs(e), r = Oe(Math.trunc(o / 60), 2), a = Oe(o % 60, 2);
  return n + r + t + a;
}
const $u = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Jf = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, qy = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], o = n[1], r = n[2];
  if (!r)
    return $u(e, t);
  let a;
  switch (o) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", $u(o, t)).replace("{{time}}", Jf(r, t));
}, Xy = {
  p: Jf,
  P: qy
}, Zy = /^D+$/, Qy = /^Y+$/, Jy = ["D", "DD", "YY", "YYYY"];
function ex(e) {
  return Zy.test(e);
}
function tx(e) {
  return Qy.test(e);
}
function nx(e, t, n) {
  const o = ox(e, t, n);
  if (console.warn(o), Jy.includes(e))
    throw new RangeError(o);
}
function ox(e, t, n) {
  const o = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${o} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const rx = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, ax = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, ix = /^'([^]*?)'?$/, sx = /''/g, lx = /[a-zA-Z]/;
function tn(e, t, n) {
  var u, d, f, p, m, g, h, v;
  const o = Mr(), r = (n == null ? void 0 : n.locale) ?? o.locale ?? qf, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((p = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (m = n == null ? void 0 : n.locale) == null ? void 0 : m.options) == null ? void 0 : g.weekStartsOn) ?? o.weekStartsOn ?? ((v = (h = o.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? 0, s = De(e);
  if (!py(s))
    throw new RangeError("Invalid time value");
  let l = t.match(ax).map((w) => {
    const y = w[0];
    if (y === "p" || y === "P") {
      const C = Xy[y];
      return C(w, r.formatLong);
    }
    return w;
  }).join("").match(rx).map((w) => {
    if (w === "''")
      return { isToken: !1, value: "'" };
    const y = w[0];
    if (y === "'")
      return { isToken: !1, value: cx(w) };
    if (wu[y])
      return { isToken: !0, value: w };
    if (y.match(lx))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: w };
  });
  r.localize.preprocessor && (l = r.localize.preprocessor(s, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: i,
    locale: r
  };
  return l.map((w) => {
    if (!w.isToken)
      return w.value;
    const y = w.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && tx(y) || !(n != null && n.useAdditionalDayOfYearTokens) && ex(y)) && nx(y, t, String(e));
    const C = wu[y[0]];
    return C(s, y, r.localize, c);
  }).join("");
}
function cx(e) {
  const t = e.match(ix);
  return t ? t[1].replace(sx, "'") : e;
}
function ux(e) {
  const t = De(e), n = t.getFullYear(), o = t.getMonth(), r = Rt(e, 0);
  return r.setFullYear(n, o + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function dx(e) {
  return Math.trunc(+De(e) / 1e3);
}
function fx(e) {
  const t = De(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function px(e, t) {
  return my(
    fx(e),
    wt(e),
    t
  ) + 1;
}
function $s(e, t) {
  const n = De(e), o = De(t);
  return n.getTime() > o.getTime();
}
function ep(e, t) {
  const n = De(e), o = De(t);
  return +n < +o;
}
function _l(e, t) {
  const n = De(e), o = De(t);
  return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth();
}
function mx(e, t) {
  const n = De(e), o = De(t);
  return n.getFullYear() === o.getFullYear();
}
function Li(e, t) {
  return lt(e, -t);
}
function Fi(e, t) {
  const n = De(e), o = n.getFullYear(), r = n.getDate(), a = Rt(e, 0);
  a.setFullYear(o, t, 15), a.setHours(0, 0, 0, 0);
  const i = ux(a);
  return n.setMonth(t, Math.min(r, i)), n;
}
function Cu(e, t) {
  const n = De(e);
  return isNaN(+n) ? Rt(e, NaN) : (n.setFullYear(t), n);
}
var Ce = function() {
  return Ce = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ce.apply(this, arguments);
};
function gx(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function tp(e, t, n) {
  for (var o = 0, r = t.length, a; o < r; o++)
    (a || !(o in t)) && (a || (a = Array.prototype.slice.call(t, 0, o)), a[o] = t[o]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Nr(e) {
  return e.mode === "multiple";
}
function Dr(e) {
  return e.mode === "range";
}
function ti(e) {
  return e.mode === "single";
}
var hx = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function vx(e, t) {
  return tn(e, "LLLL y", t);
}
function bx(e, t) {
  return tn(e, "d", t);
}
function wx(e, t) {
  return tn(e, "LLLL", t);
}
function yx(e) {
  return "".concat(e);
}
function xx(e, t) {
  return tn(e, "cccccc", t);
}
function $x(e, t) {
  return tn(e, "yyyy", t);
}
var Cx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: vx,
  formatDay: bx,
  formatMonthCaption: wx,
  formatWeekNumber: yx,
  formatWeekdayName: xx,
  formatYearCaption: $x
}), Sx = function(e, t, n) {
  return tn(e, "do MMMM (EEEE)", n);
}, _x = function() {
  return "Month: ";
}, Ex = function() {
  return "Go to next month";
}, Px = function() {
  return "Go to previous month";
}, Rx = function(e, t) {
  return tn(e, "cccc", t);
}, Mx = function(e) {
  return "Week n. ".concat(e);
}, Nx = function() {
  return "Year: ";
}, Dx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: Sx,
  labelMonthDropdown: _x,
  labelNext: Ex,
  labelPrevious: Px,
  labelWeekNumber: Mx,
  labelWeekday: Rx,
  labelYearDropdown: Nx
});
function Tx() {
  var e = "buttons", t = hx, n = qf, o = {}, r = {}, a = 1, i = {}, s = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: Cx,
    labels: Dx,
    locale: n,
    modifiersClassNames: o,
    modifiers: r,
    numberOfMonths: a,
    styles: i,
    today: s,
    mode: "default"
  };
}
function Ax(e) {
  var t = e.fromYear, n = e.toYear, o = e.fromMonth, r = e.toMonth, a = e.fromDate, i = e.toDate;
  return o ? a = wt(o) : t && (a = new Date(t, 0, 1)), r ? i = Cl(r) : n && (i = new Date(n, 11, 31)), {
    fromDate: a ? Ro(a) : void 0,
    toDate: i ? Ro(i) : void 0
  };
}
var np = At(void 0);
function Ix(e) {
  var t, n = e.initialProps, o = Tx(), r = Ax(n), a = r.fromDate, i = r.toDate, s = (t = n.captionLayout) !== null && t !== void 0 ? t : o.captionLayout;
  s !== "buttons" && (!a || !i) && (s = "buttons");
  var l;
  (ti(n) || Nr(n) || Dr(n)) && (l = n.onSelect);
  var c = Ce(Ce(Ce({}, o), n), { captionLayout: s, classNames: Ce(Ce({}, o.classNames), n.classNames), components: Ce({}, n.components), formatters: Ce(Ce({}, o.formatters), n.formatters), fromDate: a, labels: Ce(Ce({}, o.labels), n.labels), mode: n.mode || o.mode, modifiers: Ce(Ce({}, o.modifiers), n.modifiers), modifiersClassNames: Ce(Ce({}, o.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: Ce(Ce({}, o.styles), n.styles), toDate: i });
  return b(np.Provider, { value: c, children: e.children });
}
function He() {
  var e = Ut(np);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function op(e) {
  var t = He(), n = t.locale, o = t.classNames, r = t.styles, a = t.formatters.formatCaption;
  return b("div", { className: o.caption_label, style: r.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function Ox(e) {
  return b("svg", Ce({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: b("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function rp(e) {
  var t, n, o = e.onChange, r = e.value, a = e.children, i = e.caption, s = e.className, l = e.style, c = He(), u = (n = (t = c.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Ox;
  return Q("div", { className: s, style: l, children: [b("span", { className: c.classNames.vhidden, children: e["aria-label"] }), b("select", { name: e.name, "aria-label": e["aria-label"], className: c.classNames.dropdown, style: c.styles.dropdown, value: r, onChange: o, children: a }), Q("div", { className: c.classNames.caption_label, style: c.styles.caption_label, "aria-hidden": "true", children: [i, b(u, { className: c.classNames.dropdown_icon, style: c.styles.dropdown_icon })] })] });
}
function kx(e) {
  var t, n = He(), o = n.fromDate, r = n.toDate, a = n.styles, i = n.locale, s = n.formatters.formatMonthCaption, l = n.classNames, c = n.components, u = n.labels.labelMonthDropdown;
  if (!o)
    return b(bn, {});
  if (!r)
    return b(bn, {});
  var d = [];
  if (mx(o, r))
    for (var f = wt(o), p = o.getMonth(); p <= r.getMonth(); p++)
      d.push(Fi(f, p));
  else
    for (var f = wt(/* @__PURE__ */ new Date()), p = 0; p <= 11; p++)
      d.push(Fi(f, p));
  var m = function(h) {
    var v = Number(h.target.value), w = Fi(wt(e.displayMonth), v);
    e.onChange(w);
  }, g = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : rp;
  return b(g, { name: "months", "aria-label": u(), className: l.dropdown_month, style: a.dropdown_month, onChange: m, value: e.displayMonth.getMonth(), caption: s(e.displayMonth, { locale: i }), children: d.map(function(h) {
    return b("option", { value: h.getMonth(), children: s(h, { locale: i }) }, h.getMonth());
  }) });
}
function Lx(e) {
  var t, n = e.displayMonth, o = He(), r = o.fromDate, a = o.toDate, i = o.locale, s = o.styles, l = o.classNames, c = o.components, u = o.formatters.formatYearCaption, d = o.labels.labelYearDropdown, f = [];
  if (!r)
    return b(bn, {});
  if (!a)
    return b(bn, {});
  for (var p = r.getFullYear(), m = a.getFullYear(), g = p; g <= m; g++)
    f.push(Cu(Yf(/* @__PURE__ */ new Date()), g));
  var h = function(w) {
    var y = Cu(wt(n), Number(w.target.value));
    e.onChange(y);
  }, v = (t = c == null ? void 0 : c.Dropdown) !== null && t !== void 0 ? t : rp;
  return b(v, { name: "years", "aria-label": d(), className: l.dropdown_year, style: s.dropdown_year, onChange: h, value: n.getFullYear(), caption: u(n, { locale: i }), children: f.map(function(w) {
    return b("option", { value: w.getFullYear(), children: u(w, { locale: i }) }, w.getFullYear());
  }) });
}
function Fx(e, t) {
  var n = re(e), o = n[0], r = n[1], a = t === void 0 ? o : t;
  return [a, r];
}
function zx(e) {
  var t = e.month, n = e.defaultMonth, o = e.today, r = t || n || o || /* @__PURE__ */ new Date(), a = e.toDate, i = e.fromDate, s = e.numberOfMonths, l = s === void 0 ? 1 : s;
  if (a && ur(a, r) < 0) {
    var c = -1 * (l - 1);
    r = Gt(a, c);
  }
  return i && ur(r, i) < 0 && (r = i), wt(r);
}
function Vx() {
  var e = He(), t = zx(e), n = Fx(t, e.month), o = n[0], r = n[1], a = function(i) {
    var s;
    if (!e.disableNavigation) {
      var l = wt(i);
      r(l), (s = e.onMonthChange) === null || s === void 0 || s.call(e, l);
    }
  };
  return [o, a];
}
function Hx(e, t) {
  for (var n = t.reverseMonths, o = t.numberOfMonths, r = wt(e), a = wt(Gt(r, o)), i = ur(a, r), s = [], l = 0; l < i; l++) {
    var c = Gt(r, l);
    s.push(c);
  }
  return n && (s = s.reverse()), s;
}
function Bx(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, o = t.pagedNavigation, r = t.numberOfMonths, a = r === void 0 ? 1 : r, i = o ? a : 1, s = wt(e);
    if (!n)
      return Gt(s, i);
    var l = ur(n, e);
    if (!(l < a))
      return Gt(s, i);
  }
}
function Gx(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, o = t.pagedNavigation, r = t.numberOfMonths, a = r === void 0 ? 1 : r, i = o ? a : 1, s = wt(e);
    if (!n)
      return Gt(s, -i);
    var l = ur(s, n);
    if (!(l <= 0))
      return Gt(s, -i);
  }
}
var ap = At(void 0);
function Wx(e) {
  var t = He(), n = Vx(), o = n[0], r = n[1], a = Hx(o, t), i = Bx(o, t), s = Gx(o, t), l = function(d) {
    return a.some(function(f) {
      return _l(d, f);
    });
  }, c = function(d, f) {
    l(d) || (f && ep(d, f) ? r(Gt(d, 1 + t.numberOfMonths * -1)) : r(d));
  }, u = {
    currentMonth: o,
    displayMonths: a,
    goToMonth: r,
    goToDate: c,
    previousMonth: s,
    nextMonth: i,
    isDateDisplayed: l
  };
  return b(ap.Provider, { value: u, children: e.children });
}
function Tr() {
  var e = Ut(ap);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Su(e) {
  var t, n = He(), o = n.classNames, r = n.styles, a = n.components, i = Tr().goToMonth, s = function(u) {
    i(Gt(u, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : op, c = b(l, { id: e.id, displayMonth: e.displayMonth });
  return Q("div", { className: o.caption_dropdowns, style: r.caption_dropdowns, children: [b("div", { className: o.vhidden, children: c }), b(kx, { onChange: s, displayMonth: e.displayMonth }), b(Lx, { onChange: s, displayMonth: e.displayMonth })] });
}
function jx(e) {
  return b("svg", Ce({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: b("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Ux(e) {
  return b("svg", Ce({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: b("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Da = I(function(e, t) {
  var n = He(), o = n.classNames, r = n.styles, a = [o.button_reset, o.button];
  e.className && a.push(e.className);
  var i = a.join(" "), s = Ce(Ce({}, r.button_reset), r.button);
  return e.style && Object.assign(s, e.style), b("button", Ce({}, e, { ref: t, type: "button", className: i, style: s }));
});
function Yx(e) {
  var t, n, o = He(), r = o.dir, a = o.locale, i = o.classNames, s = o.styles, l = o.labels, c = l.labelPrevious, u = l.labelNext, d = o.components;
  if (!e.nextMonth && !e.previousMonth)
    return b(bn, {});
  var f = c(e.previousMonth, { locale: a }), p = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), m = u(e.nextMonth, { locale: a }), g = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), h = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Ux, v = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : jx;
  return Q("div", { className: i.nav, style: s.nav, children: [!e.hidePrevious && b(Da, { name: "previous-month", "aria-label": f, className: p, style: s.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: r === "rtl" ? b(h, { className: i.nav_icon, style: s.nav_icon }) : b(v, { className: i.nav_icon, style: s.nav_icon }) }), !e.hideNext && b(Da, { name: "next-month", "aria-label": m, className: g, style: s.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: r === "rtl" ? b(v, { className: i.nav_icon, style: s.nav_icon }) : b(h, { className: i.nav_icon, style: s.nav_icon }) })] });
}
function _u(e) {
  var t = He().numberOfMonths, n = Tr(), o = n.previousMonth, r = n.nextMonth, a = n.goToMonth, i = n.displayMonths, s = i.findIndex(function(m) {
    return _l(e.displayMonth, m);
  }), l = s === 0, c = s === i.length - 1, u = t > 1 && (l || !c), d = t > 1 && (c || !l), f = function() {
    o && a(o);
  }, p = function() {
    r && a(r);
  };
  return b(Yx, { displayMonth: e.displayMonth, hideNext: u, hidePrevious: d, nextMonth: r, previousMonth: o, onPreviousClick: f, onNextClick: p });
}
function Kx(e) {
  var t, n = He(), o = n.classNames, r = n.disableNavigation, a = n.styles, i = n.captionLayout, s = n.components, l = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : op, c;
  return r ? c = b(l, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? c = b(Su, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? c = Q(bn, { children: [b(Su, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), b(_u, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : c = Q(bn, { children: [b(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), b(_u, { displayMonth: e.displayMonth, id: e.id })] }), b("div", { className: o.caption, style: a.caption, children: c });
}
function qx(e) {
  var t = He(), n = t.footer, o = t.styles, r = t.classNames.tfoot;
  return n ? b("tfoot", { className: r, style: o.tfoot, children: b("tr", { children: b("td", { colSpan: 8, children: n }) }) }) : b(bn, {});
}
function Xx(e, t, n) {
  for (var o = n ? Jn(/* @__PURE__ */ new Date()) : rn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), r = [], a = 0; a < 7; a++) {
    var i = lt(o, a);
    r.push(i);
  }
  return r;
}
function Zx() {
  var e = He(), t = e.classNames, n = e.styles, o = e.showWeekNumber, r = e.locale, a = e.weekStartsOn, i = e.ISOWeek, s = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, c = Xx(r, a, i);
  return Q("tr", { style: n.head_row, className: t.head_row, children: [o && b("td", { style: n.head_cell, className: t.head_cell }), c.map(function(u, d) {
    return b("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(u, { locale: r }), children: s(u, { locale: r }) }, d);
  })] });
}
function Qx() {
  var e, t = He(), n = t.classNames, o = t.styles, r = t.components, a = (e = r == null ? void 0 : r.HeadRow) !== null && e !== void 0 ? e : Zx;
  return b("thead", { style: o.head, className: n.head, children: b(a, {}) });
}
function Jx(e) {
  var t = He(), n = t.locale, o = t.formatters.formatDay;
  return b(bn, { children: o(e.date, { locale: n }) });
}
var El = At(void 0);
function e$(e) {
  if (!Nr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return b(El.Provider, { value: t, children: e.children });
  }
  return b(t$, { initialProps: e.initialProps, children: e.children });
}
function t$(e) {
  var t = e.initialProps, n = e.children, o = t.selected, r = t.min, a = t.max, i = function(c, u, d) {
    var f, p;
    (f = t.onDayClick) === null || f === void 0 || f.call(t, c, u, d);
    var m = !!(u.selected && r && (o == null ? void 0 : o.length) === r);
    if (!m) {
      var g = !!(!u.selected && a && (o == null ? void 0 : o.length) === a);
      if (!g) {
        var h = o ? tp([], o) : [];
        if (u.selected) {
          var v = h.findIndex(function(w) {
            return bt(c, w);
          });
          h.splice(v, 1);
        } else
          h.push(c);
        (p = t.onSelect) === null || p === void 0 || p.call(t, h, c, u, d);
      }
    }
  }, s = {
    disabled: []
  };
  o && s.disabled.push(function(c) {
    var u = a && o.length > a - 1, d = o.some(function(f) {
      return bt(f, c);
    });
    return !!(u && !d);
  });
  var l = {
    selected: o,
    onDayClick: i,
    modifiers: s
  };
  return b(El.Provider, { value: l, children: n });
}
function Pl() {
  var e = Ut(El);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function n$(e, t) {
  var n = t || {}, o = n.from, r = n.to;
  return o && r ? bt(r, e) && bt(o, e) ? void 0 : bt(r, e) ? { from: r, to: void 0 } : bt(o, e) ? void 0 : $s(o, e) ? { from: e, to: r } : { from: o, to: e } : r ? $s(e, r) ? { from: r, to: e } : { from: e, to: r } : o ? ep(e, o) ? { from: e, to: o } : { from: o, to: e } : { from: e, to: void 0 };
}
var Rl = At(void 0);
function o$(e) {
  if (!Dr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return b(Rl.Provider, { value: t, children: e.children });
  }
  return b(r$, { initialProps: e.initialProps, children: e.children });
}
function r$(e) {
  var t = e.initialProps, n = e.children, o = t.selected, r = o || {}, a = r.from, i = r.to, s = t.min, l = t.max, c = function(p, m, g) {
    var h, v;
    (h = t.onDayClick) === null || h === void 0 || h.call(t, p, m, g);
    var w = n$(p, o);
    (v = t.onSelect) === null || v === void 0 || v.call(t, w, p, m, g);
  }, u = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (u.range_start = [a], i ? (u.range_end = [i], bt(a, i) || (u.range_middle = [
    {
      after: a,
      before: i
    }
  ])) : u.range_end = [a]) : i && (u.range_start = [i], u.range_end = [i]), s && (a && !i && u.disabled.push({
    after: Li(a, s - 1),
    before: lt(a, s - 1)
  }), a && i && u.disabled.push({
    after: a,
    before: lt(a, s - 1)
  }), !a && i && u.disabled.push({
    after: Li(i, s - 1),
    before: lt(i, s - 1)
  })), l) {
    if (a && !i && (u.disabled.push({
      before: lt(a, -l + 1)
    }), u.disabled.push({
      after: lt(a, l - 1)
    })), a && i) {
      var d = en(i, a) + 1, f = l - d;
      u.disabled.push({
        before: Li(a, f)
      }), u.disabled.push({
        after: lt(i, f)
      });
    }
    !a && i && (u.disabled.push({
      before: lt(i, -l + 1)
    }), u.disabled.push({
      after: lt(i, l - 1)
    }));
  }
  return b(Rl.Provider, { value: { selected: o, onDayClick: c, modifiers: u }, children: n });
}
function Ml() {
  var e = Ut(Rl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function ga(e) {
  return Array.isArray(e) ? tp([], e) : e !== void 0 ? [e] : [];
}
function a$(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var o = n[0], r = n[1];
    t[o] = ga(r);
  }), t;
}
var Wt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Wt || (Wt = {}));
var i$ = Wt.Selected, mn = Wt.Disabled, s$ = Wt.Hidden, l$ = Wt.Today, zi = Wt.RangeEnd, Vi = Wt.RangeMiddle, Hi = Wt.RangeStart, c$ = Wt.Outside;
function u$(e, t, n) {
  var o, r = (o = {}, o[i$] = ga(e.selected), o[mn] = ga(e.disabled), o[s$] = ga(e.hidden), o[l$] = [e.today], o[zi] = [], o[Vi] = [], o[Hi] = [], o[c$] = [], o);
  return e.fromDate && r[mn].push({ before: e.fromDate }), e.toDate && r[mn].push({ after: e.toDate }), Nr(e) ? r[mn] = r[mn].concat(t.modifiers[mn]) : Dr(e) && (r[mn] = r[mn].concat(n.modifiers[mn]), r[Hi] = n.modifiers[Hi], r[Vi] = n.modifiers[Vi], r[zi] = n.modifiers[zi]), r;
}
var ip = At(void 0);
function d$(e) {
  var t = He(), n = Pl(), o = Ml(), r = u$(t, n, o), a = a$(t.modifiers), i = Ce(Ce({}, r), a);
  return b(ip.Provider, { value: i, children: e.children });
}
function sp() {
  var e = Ut(ip);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function f$(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function p$(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function m$(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function g$(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function h$(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function v$(e, t) {
  var n, o = t.from, r = t.to;
  if (o && r) {
    var a = en(r, o) < 0;
    a && (n = [r, o], o = n[0], r = n[1]);
    var i = en(e, o) >= 0 && en(r, e) >= 0;
    return i;
  }
  return r ? bt(r, e) : o ? bt(o, e) : !1;
}
function b$(e) {
  return $l(e);
}
function w$(e) {
  return Array.isArray(e) && e.every($l);
}
function y$(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (b$(n))
      return bt(e, n);
    if (w$(n))
      return n.includes(e);
    if (p$(n))
      return v$(e, n);
    if (h$(n))
      return n.dayOfWeek.includes(e.getDay());
    if (f$(n)) {
      var o = en(n.before, e), r = en(n.after, e), a = o > 0, i = r < 0, s = $s(n.before, n.after);
      return s ? i && a : a || i;
    }
    return m$(n) ? en(e, n.after) > 0 : g$(n) ? en(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Nl(e, t, n) {
  var o = Object.keys(t).reduce(function(a, i) {
    var s = t[i];
    return y$(e, s) && a.push(i), a;
  }, []), r = {};
  return o.forEach(function(a) {
    return r[a] = !0;
  }), n && !_l(e, n) && (r.outside = !0), r;
}
function x$(e, t) {
  for (var n = wt(e[0]), o = Cl(e[e.length - 1]), r, a, i = n; i <= o; ) {
    var s = Nl(i, t), l = !s.disabled && !s.hidden;
    if (!l) {
      i = lt(i, 1);
      continue;
    }
    if (s.selected)
      return i;
    s.today && !a && (a = i), r || (r = i), i = lt(i, 1);
  }
  return a || r;
}
var $$ = 365;
function lp(e, t) {
  var n = t.moveBy, o = t.direction, r = t.context, a = t.modifiers, i = t.retry, s = i === void 0 ? { count: 0, lastFocused: e } : i, l = r.weekStartsOn, c = r.fromDate, u = r.toDate, d = r.locale, f = {
    day: lt,
    week: xs,
    month: Gt,
    year: uy,
    startOfWeek: function(h) {
      return r.ISOWeek ? Jn(h) : rn(h, { locale: d, weekStartsOn: l });
    },
    endOfWeek: function(h) {
      return r.ISOWeek ? Kf(h) : Sl(h, { locale: d, weekStartsOn: l });
    }
  }, p = f[n](e, o === "after" ? 1 : -1);
  o === "before" && c ? p = dy([c, p]) : o === "after" && u && (p = fy([u, p]));
  var m = !0;
  if (a) {
    var g = Nl(p, a);
    m = !g.disabled && !g.hidden;
  }
  return m ? p : s.count > $$ ? s.lastFocused : lp(p, {
    moveBy: n,
    direction: o,
    context: r,
    modifiers: a,
    retry: Ce(Ce({}, s), { count: s.count + 1 })
  });
}
var cp = At(void 0);
function C$(e) {
  var t = Tr(), n = sp(), o = re(), r = o[0], a = o[1], i = re(), s = i[0], l = i[1], c = x$(t.displayMonths, n), u = r ?? (s && t.isDateDisplayed(s)) ? s : c, d = function() {
    l(r), a(void 0);
  }, f = function(h) {
    a(h);
  }, p = He(), m = function(h, v) {
    if (r) {
      var w = lp(r, {
        moveBy: h,
        direction: v,
        context: p,
        modifiers: n
      });
      bt(r, w) || (t.goToDate(w, r), f(w));
    }
  }, g = {
    focusedDay: r,
    focusTarget: u,
    blur: d,
    focus: f,
    focusDayAfter: function() {
      return m("day", "after");
    },
    focusDayBefore: function() {
      return m("day", "before");
    },
    focusWeekAfter: function() {
      return m("week", "after");
    },
    focusWeekBefore: function() {
      return m("week", "before");
    },
    focusMonthBefore: function() {
      return m("month", "before");
    },
    focusMonthAfter: function() {
      return m("month", "after");
    },
    focusYearBefore: function() {
      return m("year", "before");
    },
    focusYearAfter: function() {
      return m("year", "after");
    },
    focusStartOfWeek: function() {
      return m("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return m("endOfWeek", "after");
    }
  };
  return b(cp.Provider, { value: g, children: e.children });
}
function Dl() {
  var e = Ut(cp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function S$(e, t) {
  var n = sp(), o = Nl(e, n, t);
  return o;
}
var Tl = At(void 0);
function _$(e) {
  if (!ti(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return b(Tl.Provider, { value: t, children: e.children });
  }
  return b(E$, { initialProps: e.initialProps, children: e.children });
}
function E$(e) {
  var t = e.initialProps, n = e.children, o = function(a, i, s) {
    var l, c, u;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, i, s), i.selected && !t.required) {
      (c = t.onSelect) === null || c === void 0 || c.call(t, void 0, a, i, s);
      return;
    }
    (u = t.onSelect) === null || u === void 0 || u.call(t, a, a, i, s);
  }, r = {
    selected: t.selected,
    onDayClick: o
  };
  return b(Tl.Provider, { value: r, children: n });
}
function up() {
  var e = Ut(Tl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function P$(e, t) {
  var n = He(), o = up(), r = Pl(), a = Ml(), i = Dl(), s = i.focusDayAfter, l = i.focusDayBefore, c = i.focusWeekAfter, u = i.focusWeekBefore, d = i.blur, f = i.focus, p = i.focusMonthBefore, m = i.focusMonthAfter, g = i.focusYearBefore, h = i.focusYearAfter, v = i.focusStartOfWeek, w = i.focusEndOfWeek, y = function(H) {
    var K, X, se, ee;
    ti(n) ? (K = o.onDayClick) === null || K === void 0 || K.call(o, e, t, H) : Nr(n) ? (X = r.onDayClick) === null || X === void 0 || X.call(r, e, t, H) : Dr(n) ? (se = a.onDayClick) === null || se === void 0 || se.call(a, e, t, H) : (ee = n.onDayClick) === null || ee === void 0 || ee.call(n, e, t, H);
  }, C = function(H) {
    var K;
    f(e), (K = n.onDayFocus) === null || K === void 0 || K.call(n, e, t, H);
  }, _ = function(H) {
    var K;
    d(), (K = n.onDayBlur) === null || K === void 0 || K.call(n, e, t, H);
  }, S = function(H) {
    var K;
    (K = n.onDayMouseEnter) === null || K === void 0 || K.call(n, e, t, H);
  }, E = function(H) {
    var K;
    (K = n.onDayMouseLeave) === null || K === void 0 || K.call(n, e, t, H);
  }, T = function(H) {
    var K;
    (K = n.onDayPointerEnter) === null || K === void 0 || K.call(n, e, t, H);
  }, N = function(H) {
    var K;
    (K = n.onDayPointerLeave) === null || K === void 0 || K.call(n, e, t, H);
  }, k = function(H) {
    var K;
    (K = n.onDayTouchCancel) === null || K === void 0 || K.call(n, e, t, H);
  }, F = function(H) {
    var K;
    (K = n.onDayTouchEnd) === null || K === void 0 || K.call(n, e, t, H);
  }, z = function(H) {
    var K;
    (K = n.onDayTouchMove) === null || K === void 0 || K.call(n, e, t, H);
  }, ae = function(H) {
    var K;
    (K = n.onDayTouchStart) === null || K === void 0 || K.call(n, e, t, H);
  }, A = function(H) {
    var K;
    (K = n.onDayKeyUp) === null || K === void 0 || K.call(n, e, t, H);
  }, V = function(H) {
    var K;
    switch (H.key) {
      case "ArrowLeft":
        H.preventDefault(), H.stopPropagation(), n.dir === "rtl" ? s() : l();
        break;
      case "ArrowRight":
        H.preventDefault(), H.stopPropagation(), n.dir === "rtl" ? l() : s();
        break;
      case "ArrowDown":
        H.preventDefault(), H.stopPropagation(), c();
        break;
      case "ArrowUp":
        H.preventDefault(), H.stopPropagation(), u();
        break;
      case "PageUp":
        H.preventDefault(), H.stopPropagation(), H.shiftKey ? g() : p();
        break;
      case "PageDown":
        H.preventDefault(), H.stopPropagation(), H.shiftKey ? h() : m();
        break;
      case "Home":
        H.preventDefault(), H.stopPropagation(), v();
        break;
      case "End":
        H.preventDefault(), H.stopPropagation(), w();
        break;
    }
    (K = n.onDayKeyDown) === null || K === void 0 || K.call(n, e, t, H);
  }, J = {
    onClick: y,
    onFocus: C,
    onBlur: _,
    onKeyDown: V,
    onKeyUp: A,
    onMouseEnter: S,
    onMouseLeave: E,
    onPointerEnter: T,
    onPointerLeave: N,
    onTouchCancel: k,
    onTouchEnd: F,
    onTouchMove: z,
    onTouchStart: ae
  };
  return J;
}
function R$() {
  var e = He(), t = up(), n = Pl(), o = Ml(), r = ti(e) ? t.selected : Nr(e) ? n.selected : Dr(e) ? o.selected : void 0;
  return r;
}
function M$(e) {
  return Object.values(Wt).includes(e);
}
function N$(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(o) {
    var r = e.modifiersClassNames[o];
    if (r)
      n.push(r);
    else if (M$(o)) {
      var a = e.classNames["day_".concat(o)];
      a && n.push(a);
    }
  }), n;
}
function D$(e, t) {
  var n = Ce({}, e.styles.day);
  return Object.keys(t).forEach(function(o) {
    var r;
    n = Ce(Ce({}, n), (r = e.modifiersStyles) === null || r === void 0 ? void 0 : r[o]);
  }), n;
}
function T$(e, t, n) {
  var o, r, a, i = He(), s = Dl(), l = S$(e, t), c = P$(e, l), u = R$(), d = !!(i.onDayClick || i.mode !== "default");
  le(function() {
    var S;
    l.outside || s.focusedDay && d && bt(s.focusedDay, e) && ((S = n.current) === null || S === void 0 || S.focus());
  }, [
    s.focusedDay,
    e,
    n,
    d,
    l.outside
  ]);
  var f = N$(i, l).join(" "), p = D$(i, l), m = !!(l.outside && !i.showOutsideDays || l.hidden), g = (a = (r = i.components) === null || r === void 0 ? void 0 : r.DayContent) !== null && a !== void 0 ? a : Jx, h = b(g, { date: e, displayMonth: t, activeModifiers: l }), v = {
    style: p,
    className: f,
    children: h,
    role: "gridcell"
  }, w = s.focusTarget && bt(s.focusTarget, e) && !l.outside, y = s.focusedDay && bt(s.focusedDay, e), C = Ce(Ce(Ce({}, v), (o = { disabled: l.disabled, role: "gridcell" }, o["aria-selected"] = l.selected, o.tabIndex = y || w ? 0 : -1, o)), c), _ = {
    isButton: d,
    isHidden: m,
    activeModifiers: l,
    selectedDays: u,
    buttonProps: C,
    divProps: v
  };
  return _;
}
function A$(e) {
  var t = q(null), n = T$(e.date, e.displayMonth, t);
  return n.isHidden ? b("div", { role: "gridcell" }) : n.isButton ? b(Da, Ce({ name: "day", ref: t }, n.buttonProps)) : b("div", Ce({}, n.divProps));
}
function I$(e) {
  var t = e.number, n = e.dates, o = He(), r = o.onWeekNumberClick, a = o.styles, i = o.classNames, s = o.locale, l = o.labels.labelWeekNumber, c = o.formatters.formatWeekNumber, u = c(Number(t), { locale: s });
  if (!r)
    return b("span", { className: i.weeknumber, style: a.weeknumber, children: u });
  var d = l(Number(t), { locale: s }), f = function(p) {
    r(t, n, p);
  };
  return b(Da, { name: "week-number", "aria-label": d, className: i.weeknumber, style: a.weeknumber, onClick: f, children: u });
}
function O$(e) {
  var t, n, o = He(), r = o.styles, a = o.classNames, i = o.showWeekNumber, s = o.components, l = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : A$, c = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : I$, u;
  return i && (u = b("td", { className: a.cell, style: r.cell, children: b(c, { number: e.weekNumber, dates: e.dates }) })), Q("tr", { className: a.row, style: r.row, children: [u, e.dates.map(function(d) {
    return b("td", { className: a.cell, style: r.cell, role: "presentation", children: b(l, { displayMonth: e.displayMonth, date: d }) }, dx(d));
  })] });
}
function Eu(e, t, n) {
  for (var o = n != null && n.ISOWeek ? Kf(t) : Sl(t, n), r = n != null && n.ISOWeek ? Jn(e) : rn(e, n), a = en(o, r), i = [], s = 0; s <= a; s++)
    i.push(lt(r, s));
  var l = i.reduce(function(c, u) {
    var d = n != null && n.ISOWeek ? Xf(u) : Qf(u, n), f = c.find(function(p) {
      return p.weekNumber === d;
    });
    return f ? (f.dates.push(u), c) : (c.push({
      weekNumber: d,
      dates: [u]
    }), c);
  }, []);
  return l;
}
function k$(e, t) {
  var n = Eu(wt(e), Cl(e), t);
  if (t != null && t.useFixedWeeks) {
    var o = px(e, t);
    if (o < 6) {
      var r = n[n.length - 1], a = r.dates[r.dates.length - 1], i = xs(a, 6 - o), s = Eu(xs(a, 1), i, t);
      n.push.apply(n, s);
    }
  }
  return n;
}
function L$(e) {
  var t, n, o, r = He(), a = r.locale, i = r.classNames, s = r.styles, l = r.hideHead, c = r.fixedWeeks, u = r.components, d = r.weekStartsOn, f = r.firstWeekContainsDate, p = r.ISOWeek, m = k$(e.displayMonth, {
    useFixedWeeks: !!c,
    ISOWeek: p,
    locale: a,
    weekStartsOn: d,
    firstWeekContainsDate: f
  }), g = (t = u == null ? void 0 : u.Head) !== null && t !== void 0 ? t : Qx, h = (n = u == null ? void 0 : u.Row) !== null && n !== void 0 ? n : O$, v = (o = u == null ? void 0 : u.Footer) !== null && o !== void 0 ? o : qx;
  return Q("table", { id: e.id, className: i.table, style: s.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && b(g, {}), b("tbody", { className: i.tbody, style: s.tbody, children: m.map(function(w) {
    return b(h, { displayMonth: e.displayMonth, dates: w.dates, weekNumber: w.weekNumber }, w.weekNumber);
  }) }), b(v, { displayMonth: e.displayMonth })] });
}
function F$() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var z$ = F$() ? Wa : le, Bi = !1, V$ = 0;
function Pu() {
  return "react-day-picker-".concat(++V$);
}
function H$(e) {
  var t, n = e ?? (Bi ? Pu() : null), o = re(n), r = o[0], a = o[1];
  return z$(function() {
    r === null && a(Pu());
  }, []), le(function() {
    Bi === !1 && (Bi = !0);
  }, []), (t = e ?? r) !== null && t !== void 0 ? t : void 0;
}
function B$(e) {
  var t, n, o = He(), r = o.dir, a = o.classNames, i = o.styles, s = o.components, l = Tr().displayMonths, c = H$(o.id ? "".concat(o.id, "-").concat(e.displayIndex) : void 0), u = o.id ? "".concat(o.id, "-grid-").concat(e.displayIndex) : void 0, d = [a.month], f = i.month, p = e.displayIndex === 0, m = e.displayIndex === l.length - 1, g = !p && !m;
  r === "rtl" && (t = [p, m], m = t[0], p = t[1]), p && (d.push(a.caption_start), f = Ce(Ce({}, f), i.caption_start)), m && (d.push(a.caption_end), f = Ce(Ce({}, f), i.caption_end)), g && (d.push(a.caption_between), f = Ce(Ce({}, f), i.caption_between));
  var h = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Kx;
  return Q("div", { className: d.join(" "), style: f, children: [b(h, { id: c, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), b(L$, { id: u, "aria-labelledby": c, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function G$(e) {
  var t = He(), n = t.classNames, o = t.styles;
  return b("div", { className: n.months, style: o.months, children: e.children });
}
function W$(e) {
  var t, n, o = e.initialProps, r = He(), a = Dl(), i = Tr(), s = re(!1), l = s[0], c = s[1];
  le(function() {
    r.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), c(!0)));
  }, [
    r.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var u = [r.classNames.root, r.className];
  r.numberOfMonths > 1 && u.push(r.classNames.multiple_months), r.showWeekNumber && u.push(r.classNames.with_weeknumber);
  var d = Ce(Ce({}, r.styles.root), r.style), f = Object.keys(o).filter(function(m) {
    return m.startsWith("data-");
  }).reduce(function(m, g) {
    var h;
    return Ce(Ce({}, m), (h = {}, h[g] = o[g], h));
  }, {}), p = (n = (t = o.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : G$;
  return b("div", Ce({ className: u.join(" "), style: d, dir: r.dir, id: r.id, nonce: o.nonce, title: o.title, lang: o.lang }, f, { children: b(p, { children: i.displayMonths.map(function(m, g) {
    return b(B$, { displayIndex: g, displayMonth: m }, g);
  }) }) }));
}
function j$(e) {
  var t = e.children, n = gx(e, ["children"]);
  return b(Ix, { initialProps: n, children: b(Wx, { children: b(_$, { initialProps: n, children: b(e$, { initialProps: n, children: b(o$, { initialProps: n, children: b(d$, { children: b(C$, { children: t }) }) }) }) }) }) });
}
function U$(e) {
  return b(j$, Ce({}, e, { children: b(W$, { initialProps: e }) }));
}
function Cs({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...o
}) {
  return /* @__PURE__ */ b(
    U$,
    {
      showOutsideDays: n,
      className: L("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: L(
          Po({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]  ",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20    ",
        day: L(
          Po({ variant: "secondary" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected: "bg-slate-900 text-slate-50 hover:bg-slate-900 hover:text-slate-50 focus:bg-slate-900 focus:text-slate-50            ",
        day_today: "bg-slate-100 text-slate-900    ",
        day_outside: "day-outside text-slate-500 opacity-50 aria-selected:bg-slate-100/50 aria-selected:text-slate-500 aria-selected:opacity-30      ",
        day_disabled: "text-slate-500 opacity-50  ",
        day_range_middle: "aria-selected:bg-slate-100 aria-selected:text-slate-900    ",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ b(df, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ b(Ya, { className: "h-4 w-4" })
      },
      ...o
    }
  );
}
Cs.displayName = "Calendar";
const Y$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "div",
  {
    ref: n,
    className: L(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm      ",
      e
    ),
    ...t
  }
));
Y$.displayName = "Card";
const K$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "div",
  {
    ref: n,
    className: L("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
K$.displayName = "CardHeader";
const q$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "h3",
  {
    ref: n,
    className: L(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
q$.displayName = "CardTitle";
const X$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "p",
  {
    ref: n,
    className: L("text-sm text-slate-500  ", e),
    ...t
  }
));
X$.displayName = "CardDescription";
const Z$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("div", { ref: n, className: L("p-6 pt-0", e), ...t }));
Z$.displayName = "CardContent";
const Q$ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "div",
  {
    ref: n,
    className: L("flex items-center p-6 pt-0", e),
    ...t
  }
));
Q$.displayName = "CardFooter";
function J$(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ru(e) {
  return J$(e) || Array.isArray(e);
}
function e2() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Al(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length)
    return !1;
  const r = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return r !== a ? !1 : n.every((i) => {
    const s = e[i], l = t[i];
    return typeof s == "function" ? `${s}` == `${l}` : !Ru(s) || !Ru(l) ? s === l : Al(s, l);
  });
}
function Mu(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function t2(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = Mu(e), o = Mu(t);
  return n.every((r, a) => {
    const i = o[a];
    return Al(r, i);
  });
}
function Il(e) {
  return typeof e == "number";
}
function Ss(e) {
  return typeof e == "string";
}
function Ol(e) {
  return typeof e == "boolean";
}
function Nu(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function je(e) {
  return Math.abs(e);
}
function kl(e) {
  return Math.sign(e);
}
function ir(e, t) {
  return je(e - t);
}
function n2(e, t) {
  if (e === 0 || t === 0 || je(e) <= je(t))
    return 0;
  const n = ir(je(e), je(t));
  return je(n / e);
}
function dr(e) {
  return fr(e).map(Number);
}
function zt(e) {
  return e[Ar(e)];
}
function Ar(e) {
  return Math.max(0, e.length - 1);
}
function Ll(e, t) {
  return t === Ar(e);
}
function Du(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function fr(e) {
  return Object.keys(e);
}
function dp(e, t) {
  return [e, t].reduce((n, o) => (fr(o).forEach((r) => {
    const a = n[r], i = o[r], s = Nu(a) && Nu(i);
    n[r] = s ? dp(a, i) : i;
  }), n), {});
}
function _s(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function o2(e, t) {
  const n = {
    start: o,
    center: r,
    end: a
  };
  function o() {
    return 0;
  }
  function r(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function i(l, c) {
    return Ss(e) ? n[e](l) : e(t, l, c);
  }
  return {
    measure: i
  };
}
function pr() {
  let e = [];
  function t(r, a, i, s = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in r)
      r.addEventListener(a, i, s), l = () => r.removeEventListener(a, i, s);
    else {
      const c = r;
      c.addListener(i), l = () => c.removeListener(i);
    }
    return e.push(l), o;
  }
  function n() {
    e = e.filter((r) => r());
  }
  const o = {
    add: t,
    clear: n
  };
  return o;
}
function r2(e, t, n, o) {
  const r = pr(), a = 1e3 / 60;
  let i = null, s = 0, l = 0;
  function c() {
    r.add(e, "visibilitychange", () => {
      e.hidden && m();
    });
  }
  function u() {
    p(), r.clear();
  }
  function d(h) {
    if (!l)
      return;
    i || (i = h);
    const v = h - i;
    for (i = h, s += v; s >= a; )
      n(), s -= a;
    const w = je(s / a);
    o(w), l && t.requestAnimationFrame(d);
  }
  function f() {
    l || (l = t.requestAnimationFrame(d));
  }
  function p() {
    t.cancelAnimationFrame(l), i = null, s = 0, l = 0;
  }
  function m() {
    i = null, s = 0;
  }
  return {
    init: c,
    destroy: u,
    start: f,
    stop: p,
    update: n,
    render: o
  };
}
function a2(e, t) {
  const n = t === "rtl", o = e === "y", r = o ? "y" : "x", a = o ? "x" : "y", i = !o && n ? -1 : 1, s = u(), l = d();
  function c(m) {
    const {
      height: g,
      width: h
    } = m;
    return o ? g : h;
  }
  function u() {
    return o ? "top" : n ? "right" : "left";
  }
  function d() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function f(m) {
    return m * i;
  }
  return {
    scroll: r,
    cross: a,
    startEdge: s,
    endEdge: l,
    measureSize: c,
    direction: f
  };
}
function eo(e = 0, t = 0) {
  const n = je(e - t);
  function o(c) {
    return c < e;
  }
  function r(c) {
    return c > t;
  }
  function a(c) {
    return o(c) || r(c);
  }
  function i(c) {
    return a(c) ? o(c) ? e : t : c;
  }
  function s(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: a,
    reachedMax: r,
    reachedMin: o,
    removeOffset: s
  };
}
function fp(e, t, n) {
  const {
    constrain: o
  } = eo(0, e), r = e + 1;
  let a = i(t);
  function i(f) {
    return n ? je((r + f) % r) : o(f);
  }
  function s() {
    return a;
  }
  function l(f) {
    return a = i(f), d;
  }
  function c(f) {
    return u().set(s() + f);
  }
  function u() {
    return fp(e, s(), n);
  }
  const d = {
    get: s,
    set: l,
    add: c,
    clone: u
  };
  return d;
}
function i2(e, t, n, o, r, a, i, s, l, c, u, d, f, p, m, g, h, v, w) {
  const {
    cross: y,
    direction: C
  } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], S = {
    passive: !1
  }, E = pr(), T = pr(), N = eo(50, 225).constrain(p.measure(20)), k = {
    mouse: 300,
    touch: 400
  }, F = {
    mouse: 500,
    touch: 600
  }, z = m ? 43 : 25;
  let ae = !1, A = 0, V = 0, J = !1, H = !1, K = !1, X = !1;
  function se(O) {
    if (!w)
      return;
    function ne(de) {
      (Ol(w) || w(O, de)) && j(de);
    }
    const ge = t;
    E.add(ge, "dragstart", (de) => de.preventDefault(), S).add(ge, "touchmove", () => {
    }, S).add(ge, "touchend", () => {
    }).add(ge, "touchstart", ne).add(ge, "mousedown", ne).add(ge, "touchcancel", te).add(ge, "contextmenu", te).add(ge, "click", fe, !0);
  }
  function ee() {
    E.clear(), T.clear();
  }
  function R() {
    const O = X ? n : t;
    T.add(O, "touchmove", U, S).add(O, "touchend", te).add(O, "mousemove", U, S).add(O, "mouseup", te);
  }
  function B(O) {
    const ne = O.nodeName || "";
    return _.includes(ne);
  }
  function G() {
    return (m ? F : k)[X ? "mouse" : "touch"];
  }
  function W(O, ne) {
    const ge = d.add(kl(O) * -1), de = u.byDistance(O, !m).distance;
    return m || je(O) < N ? de : h && ne ? de * 0.5 : u.byIndex(ge.get(), 0).distance;
  }
  function j(O) {
    const ne = _s(O, o);
    X = ne, K = m && ne && !O.buttons && ae, ae = ir(r.get(), i.get()) >= 2, !(ne && O.button !== 0) && (B(O.target) || (J = !0, a.pointerDown(O), c.useFriction(0).useDuration(0), r.set(i), R(), A = a.readPoint(O), V = a.readPoint(O, y), f.emit("pointerDown")));
  }
  function U(O) {
    if (!_s(O, o) && O.touches.length >= 2)
      return te(O);
    const ge = a.readPoint(O), de = a.readPoint(O, y), Se = ir(ge, A), ve = ir(de, V);
    if (!H && !X && (!O.cancelable || (H = Se > ve, !H)))
      return te(O);
    const Ee = a.pointerMove(O);
    Se > g && (K = !0), c.useFriction(0.3).useDuration(1), s.start(), r.add(C(Ee)), O.preventDefault();
  }
  function te(O) {
    const ge = u.byDistance(0, !1).index !== d.get(), de = a.pointerUp(O) * G(), Se = W(C(de), ge), ve = n2(de, Se), Ee = z - 10 * ve, Ae = v + ve / 50;
    H = !1, J = !1, T.clear(), c.useDuration(Ee).useFriction(Ae), l.distance(Se, !m), X = !1, f.emit("pointerUp");
  }
  function fe(O) {
    K && (O.stopPropagation(), O.preventDefault(), K = !1);
  }
  function Z() {
    return J;
  }
  return {
    init: se,
    pointerDown: Z,
    destroy: ee
  };
}
function s2(e, t) {
  let o, r;
  function a(d) {
    return d.timeStamp;
  }
  function i(d, f) {
    const m = `client${(f || e.scroll) === "x" ? "X" : "Y"}`;
    return (_s(d, t) ? d : d.touches[0])[m];
  }
  function s(d) {
    return o = d, r = d, i(d);
  }
  function l(d) {
    const f = i(d) - i(r), p = a(d) - a(o) > 170;
    return r = d, p && (o = d), f;
  }
  function c(d) {
    if (!o || !r)
      return 0;
    const f = i(r) - i(o), p = a(d) - a(o), m = a(d) - a(r) > 170, g = f / p;
    return p && !m && je(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: s,
    pointerMove: l,
    pointerUp: c,
    readPoint: i
  };
}
function l2() {
  function e(n) {
    const {
      offsetTop: o,
      offsetLeft: r,
      offsetWidth: a,
      offsetHeight: i
    } = n;
    return {
      top: o,
      right: r + a,
      bottom: o + i,
      left: r,
      width: a,
      height: i
    };
  }
  return {
    measure: e
  };
}
function c2(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function u2(e, t, n, o, r, a, i) {
  let s, l, c = [], u = !1;
  function d(g) {
    return r.measureSize(i.measure(g));
  }
  function f(g) {
    if (!a)
      return;
    l = d(e), c = o.map(d);
    function h(w) {
      for (const y of w) {
        const C = y.target === e, _ = o.indexOf(y.target), S = C ? l : c[_], E = d(C ? e : o[_]);
        if (je(E - S) >= 0.5) {
          n.requestAnimationFrame(() => {
            g.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    s = new ResizeObserver((w) => {
      u || (Ol(a) || a(g, w)) && h(w);
    }), [e].concat(o).forEach((w) => s.observe(w));
  }
  function p() {
    s && s.disconnect(), u = !0;
  }
  return {
    init: f,
    destroy: p
  };
}
function d2(e, t, n, o, r) {
  let a = 0, i = 0, s = o, l = r, c = e.get(), u = 0;
  function d() {
    const _ = n.get() - e.get(), S = !s;
    let E = 0;
    return S ? (a = 0, e.set(n), E = _) : (a += _ / s, a *= l, c += a, e.add(a), E = c - u), i = kl(E), u = c, C;
  }
  function f() {
    const _ = n.get() - t.get();
    return je(_) < 1e-3;
  }
  function p() {
    return s;
  }
  function m() {
    return i;
  }
  function g() {
    return a;
  }
  function h() {
    return w(o);
  }
  function v() {
    return y(r);
  }
  function w(_) {
    return s = _, C;
  }
  function y(_) {
    return l = _, C;
  }
  const C = {
    direction: m,
    duration: p,
    velocity: g,
    seek: d,
    settled: f,
    useBaseFriction: v,
    useBaseDuration: h,
    useFriction: y,
    useDuration: w
  };
  return C;
}
function f2(e, t, n, o, r) {
  const a = r.measure(10), i = r.measure(50), s = eo(0.1, 0.99);
  let l = !1;
  function c() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function u(p) {
    if (!c())
      return;
    const m = e.reachedMin(t.get()) ? "min" : "max", g = je(e[m] - t.get()), h = n.get() - t.get(), v = s.constrain(g / i);
    n.subtract(h * v), !p && je(h) < a && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function d(p) {
    l = !p;
  }
  return {
    constrain: u,
    toggleActive: d
  };
}
function p2(e, t, n, o, r) {
  const a = eo(-t + e, 0), i = d(), s = u(), l = f();
  function c(m, g) {
    return ir(m, g) < 1;
  }
  function u() {
    const m = i[0], g = zt(i), h = i.lastIndexOf(m), v = i.indexOf(g) + 1;
    return eo(h, v);
  }
  function d() {
    return n.map((m, g) => {
      const {
        min: h,
        max: v
      } = a, w = a.constrain(m), y = !g, C = Ll(n, g);
      return y ? v : C || c(h, w) ? h : c(v, w) ? v : w;
    }).map((m) => parseFloat(m.toFixed(3)));
  }
  function f() {
    if (t <= e + r)
      return [a.max];
    if (o === "keepSnaps")
      return i;
    const {
      min: m,
      max: g
    } = s;
    return i.slice(m, g);
  }
  return {
    snapsContained: l,
    scrollContainLimit: s
  };
}
function m2(e, t, n) {
  const o = t[0], r = n ? o - e : zt(t);
  return {
    limit: eo(r, o)
  };
}
function g2(e, t, n, o) {
  const a = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: s,
    reachedMax: l
  } = eo(a, i);
  function c(f) {
    return f === 1 ? l(n.get()) : f === -1 ? s(n.get()) : !1;
  }
  function u(f) {
    if (!c(f))
      return;
    const p = e * (f * -1);
    o.forEach((m) => m.add(p));
  }
  return {
    loop: u
  };
}
function h2(e) {
  const {
    max: t,
    length: n
  } = e;
  function o(a) {
    const i = a - t;
    return n ? i / -n : 0;
  }
  return {
    get: o
  };
}
function v2(e, t, n, o, r) {
  const {
    startEdge: a,
    endEdge: i
  } = e, {
    groupSlides: s
  } = r, l = d().map(t.measure), c = f(), u = p();
  function d() {
    return s(o).map((g) => zt(g)[i] - g[0][a]).map(je);
  }
  function f() {
    return o.map((g) => n[a] - g[a]).map((g) => -je(g));
  }
  function p() {
    return s(c).map((g) => g[0]).map((g, h) => g + l[h]);
  }
  return {
    snaps: c,
    snapsAligned: u
  };
}
function b2(e, t, n, o, r, a) {
  const {
    groupSlides: i
  } = r, {
    min: s,
    max: l
  } = o, c = u();
  function u() {
    const f = i(a), p = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : p ? f : f.slice(s, l).map((m, g, h) => {
      const v = !g, w = Ll(h, g);
      if (v) {
        const y = zt(h[0]) + 1;
        return Du(y);
      }
      if (w) {
        const y = Ar(a) - zt(h)[0] + 1;
        return Du(y, zt(h)[0]);
      }
      return m;
    });
  }
  return {
    slideRegistry: c
  };
}
function w2(e, t, n, o, r) {
  const {
    reachedAny: a,
    removeOffset: i,
    constrain: s
  } = o;
  function l(m) {
    return m.concat().sort((g, h) => je(g) - je(h))[0];
  }
  function c(m) {
    const g = e ? i(m) : s(m), h = t.map((w, y) => ({
      diff: u(w - g, 0),
      index: y
    })).sort((w, y) => je(w.diff) - je(y.diff)), {
      index: v
    } = h[0];
    return {
      index: v,
      distance: g
    };
  }
  function u(m, g) {
    const h = [m, m + n, m - n];
    if (!e)
      return h[0];
    if (!g)
      return l(h);
    const v = h.filter((w) => kl(w) === g);
    return v.length ? l(v) : zt(h) - n;
  }
  function d(m, g) {
    const h = t[m] - r.get(), v = u(h, g);
    return {
      index: m,
      distance: v
    };
  }
  function f(m, g) {
    const h = r.get() + m, {
      index: v,
      distance: w
    } = c(h), y = !e && a(h);
    if (!g || y)
      return {
        index: v,
        distance: m
      };
    const C = t[v] - w, _ = m + u(C, 0);
    return {
      index: v,
      distance: _
    };
  }
  return {
    byDistance: f,
    byIndex: d,
    shortcut: u
  };
}
function y2(e, t, n, o, r, a, i) {
  function s(d) {
    const f = d.distance, p = d.index !== t.get();
    a.add(f), f && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), p && (n.set(t.get()), t.set(d.index), i.emit("select"));
  }
  function l(d, f) {
    const p = r.byDistance(d, f);
    s(p);
  }
  function c(d, f) {
    const p = t.clone().set(d), m = r.byIndex(p.get(), f);
    s(m);
  }
  return {
    distance: l,
    index: c
  };
}
function x2(e, t, n, o, r, a) {
  let i = 0;
  function s() {
    a.add(document, "keydown", l, !1), t.forEach(c);
  }
  function l(d) {
    d.code === "Tab" && (i = (/* @__PURE__ */ new Date()).getTime());
  }
  function c(d) {
    const f = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - i > 10)
        return;
      e.scrollLeft = 0;
      const g = t.indexOf(d), h = n.findIndex((v) => v.includes(g));
      Il(h) && (r.useDuration(0), o.index(h, 0));
    };
    a.add(d, "focus", f, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: s
  };
}
function ha(e) {
  let t = e;
  function n() {
    return t;
  }
  function o(l) {
    t = i(l);
  }
  function r(l) {
    t += i(l);
  }
  function a(l) {
    t -= i(l);
  }
  function i(l) {
    return Il(l) ? l : l.get();
  }
  return {
    get: n,
    set: o,
    add: r,
    subtract: a
  };
}
function pp(e, t) {
  const n = e.scroll === "x" ? a : i, o = t.style;
  let r = !1;
  function a(d) {
    return `translate3d(${d}px,0px,0px)`;
  }
  function i(d) {
    return `translate3d(0px,${d}px,0px)`;
  }
  function s(d) {
    r || (o.transform = n(e.direction(d)));
  }
  function l(d) {
    r = !d;
  }
  function c() {
    r || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: c,
    to: s,
    toggleActive: l
  };
}
function $2(e, t, n, o, r, a, i, s, l) {
  const u = dr(r), d = dr(r).reverse(), f = v().concat(w());
  function p(E, T) {
    return E.reduce((N, k) => N - r[k], T);
  }
  function m(E, T) {
    return E.reduce((N, k) => p(N, T) > 0 ? N.concat([k]) : N, []);
  }
  function g(E) {
    return a.map((T, N) => ({
      start: T - o[N] + 0.5 + E,
      end: T + t - 0.5 + E
    }));
  }
  function h(E, T, N) {
    const k = g(T);
    return E.map((F) => {
      const z = N ? 0 : -n, ae = N ? n : 0, A = N ? "end" : "start", V = k[F][A];
      return {
        index: F,
        loopPoint: V,
        slideLocation: ha(-1),
        translate: pp(e, l[F]),
        target: () => s.get() > V ? z : ae
      };
    });
  }
  function v() {
    const E = i[0], T = m(d, E);
    return h(T, n, !1);
  }
  function w() {
    const E = t - i[0] - 1, T = m(u, E);
    return h(T, -n, !0);
  }
  function y() {
    return f.every(({
      index: E
    }) => {
      const T = u.filter((N) => N !== E);
      return p(T, t) <= 0.1;
    });
  }
  function C() {
    f.forEach((E) => {
      const {
        target: T,
        translate: N,
        slideLocation: k
      } = E, F = T();
      F !== k.get() && (N.to(F), k.set(F));
    });
  }
  function _() {
    f.forEach((E) => E.translate.clear());
  }
  return {
    canLoop: y,
    clear: _,
    loop: C,
    loopPoints: f
  };
}
function C2(e, t, n) {
  let o, r = !1;
  function a(l) {
    if (!n)
      return;
    function c(u) {
      for (const d of u)
        if (d.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((u) => {
      r || (Ol(n) || n(l, u)) && c(u);
    }), o.observe(e, {
      childList: !0
    });
  }
  function i() {
    o && o.disconnect(), r = !0;
  }
  return {
    init: a,
    destroy: i
  };
}
function S2(e, t, n, o) {
  const r = {};
  let a = null, i = null, s, l = !1;
  function c() {
    s = new IntersectionObserver((m) => {
      l || (m.forEach((g) => {
        const h = t.indexOf(g.target);
        r[h] = g;
      }), a = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((m) => s.observe(m));
  }
  function u() {
    s && s.disconnect(), l = !0;
  }
  function d(m) {
    return fr(r).reduce((g, h) => {
      const v = parseInt(h), {
        isIntersecting: w
      } = r[v];
      return (m && w || !m && !w) && g.push(v), g;
    }, []);
  }
  function f(m = !0) {
    if (m && a)
      return a;
    if (!m && i)
      return i;
    const g = d(m);
    return m && (a = g), m || (i = g), g;
  }
  return {
    init: c,
    destroy: u,
    get: f
  };
}
function _2(e, t, n, o, r, a) {
  const {
    measureSize: i,
    startEdge: s,
    endEdge: l
  } = e, c = n[0] && r, u = m(), d = g(), f = n.map(i), p = h();
  function m() {
    if (!c)
      return 0;
    const w = n[0];
    return je(t[s] - w[s]);
  }
  function g() {
    if (!c)
      return 0;
    const w = a.getComputedStyle(zt(o));
    return parseFloat(w.getPropertyValue(`margin-${l}`));
  }
  function h() {
    return n.map((w, y, C) => {
      const _ = !y, S = Ll(C, y);
      return _ ? f[y] + u : S ? f[y] + d : C[y + 1][s] - w[s];
    }).map(je);
  }
  return {
    slideSizes: f,
    slideSizesWithGaps: p,
    startGap: u,
    endGap: d
  };
}
function E2(e, t, n, o, r, a, i, s, l) {
  const {
    startEdge: c,
    endEdge: u,
    direction: d
  } = e, f = Il(n);
  function p(v, w) {
    return dr(v).filter((y) => y % w === 0).map((y) => v.slice(y, y + w));
  }
  function m(v) {
    return v.length ? dr(v).reduce((w, y, C) => {
      const _ = zt(w) || 0, S = _ === 0, E = y === Ar(v), T = r[c] - a[_][c], N = r[c] - a[y][u], k = !o && S ? d(i) : 0, F = !o && E ? d(s) : 0, z = je(N - F - (T + k));
      return C && z > t + l && w.push(y), E && w.push(v.length), w;
    }, []).map((w, y, C) => {
      const _ = Math.max(C[y - 1] || 0);
      return v.slice(_, w);
    }) : [];
  }
  function g(v) {
    return f ? p(v, n) : m(v);
  }
  return {
    groupSlides: g
  };
}
function P2(e, t, n, o, r, a, i) {
  const {
    align: s,
    axis: l,
    direction: c,
    startIndex: u,
    loop: d,
    duration: f,
    dragFree: p,
    dragThreshold: m,
    inViewThreshold: g,
    slidesToScroll: h,
    skipSnaps: v,
    containScroll: w,
    watchResize: y,
    watchSlides: C,
    watchDrag: _
  } = a, S = 2, E = l2(), T = E.measure(t), N = n.map(E.measure), k = a2(l, c), F = k.measureSize(T), z = c2(F), ae = o2(s, F), A = !d && !!w, V = d || !!w, {
    slideSizes: J,
    slideSizesWithGaps: H,
    startGap: K,
    endGap: X
  } = _2(k, T, N, n, V, r), se = E2(k, F, h, d, T, N, K, X, S), {
    snaps: ee,
    snapsAligned: R
  } = v2(k, ae, T, N, se), B = -zt(ee) + zt(H), {
    snapsContained: G,
    scrollContainLimit: W
  } = p2(F, B, R, w, S), j = A ? G : R, {
    limit: U
  } = m2(B, j, d), te = fp(Ar(j), u, d), fe = te.clone(), Z = dr(n), ce = ({
    dragHandler: ot,
    scrollBody: xt,
    scrollBounds: mt,
    options: {
      loop: Fe
    }
  }) => {
    Fe || mt.constrain(ot.pointerDown()), xt.seek();
  }, O = ({
    scrollBody: ot,
    translate: xt,
    location: mt,
    offsetLocation: Fe,
    scrollLooper: ze,
    slideLooper: gt,
    dragHandler: Zt,
    animation: oe,
    eventHandler: me,
    options: {
      loop: we
    }
  }, ye) => {
    const Me = ot.velocity(), _e = ot.settled();
    _e && !Zt.pointerDown() && (oe.stop(), me.emit("settle")), _e || me.emit("scroll"), Fe.set(mt.get() - Me + Me * ye), we && (ze.loop(ot.direction()), gt.loop()), xt.to(Fe.get());
  }, ne = r2(o, r, () => ce(rt), (ot) => O(rt, ot)), ge = 0.68, de = j[te.get()], Se = ha(de), ve = ha(de), Ee = ha(de), Ae = d2(Se, ve, Ee, f, ge), qe = w2(d, j, B, U, Ee), Be = y2(ne, te, fe, Ae, qe, Ee, i), Ze = h2(U), Te = pr(), Xe = S2(t, n, i, g), {
    slideRegistry: Ke
  } = b2(A, w, j, W, se, Z), Dt = x2(e, n, Ke, Be, Ae, Te), rt = {
    ownerDocument: o,
    ownerWindow: r,
    eventHandler: i,
    containerRect: T,
    slideRects: N,
    animation: ne,
    axis: k,
    dragHandler: i2(k, e, o, r, Ee, s2(k, r), Se, ne, Be, Ae, qe, te, i, z, p, m, v, ge, _),
    eventStore: Te,
    percentOfView: z,
    index: te,
    indexPrevious: fe,
    limit: U,
    location: Se,
    offsetLocation: ve,
    options: a,
    resizeHandler: u2(t, i, r, n, k, y, E),
    scrollBody: Ae,
    scrollBounds: f2(U, ve, Ee, Ae, z),
    scrollLooper: g2(B, U, ve, [Se, ve, Ee]),
    scrollProgress: Ze,
    scrollSnapList: j.map(Ze.get),
    scrollSnaps: j,
    scrollTarget: qe,
    scrollTo: Be,
    slideLooper: $2(k, F, B, J, H, ee, j, ve, n),
    slideFocus: Dt,
    slidesHandler: C2(t, i, C),
    slidesInView: Xe,
    slideIndexes: Z,
    slideRegistry: Ke,
    slidesToScroll: se,
    target: Ee,
    translate: pp(k, t)
  };
  return rt;
}
function R2() {
  const e = {};
  let t;
  function n(l) {
    t = l;
  }
  function o(l) {
    return e[l] || [];
  }
  function r(l) {
    return o(l).forEach((c) => c(t, l)), s;
  }
  function a(l, c) {
    return e[l] = o(l).concat([c]), s;
  }
  function i(l, c) {
    return e[l] = o(l).filter((u) => u !== c), s;
  }
  const s = {
    init: n,
    emit: r,
    off: i,
    on: a
  };
  return s;
}
const M2 = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function N2(e) {
  function t(a, i) {
    return dp(a, i || {});
  }
  function n(a) {
    const i = a.breakpoints || {}, s = fr(i).filter((l) => e.matchMedia(l).matches).map((l) => i[l]).reduce((l, c) => t(l, c), {});
    return t(a, s);
  }
  function o(a) {
    return a.map((i) => fr(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function D2(e) {
  let t = [];
  function n(a, i) {
    return t = i.filter(({
      options: s
    }) => e.optionsAtMedia(s).active !== !1), t.forEach((s) => s.init(a, e)), i.reduce((s, l) => Object.assign(s, {
      [l.name]: l
    }), {});
  }
  function o() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: o
  };
}
function Ta(e, t, n) {
  const o = e.ownerDocument, r = o.defaultView, a = N2(r), i = D2(a), s = pr(), l = R2(), {
    mergeOptions: c,
    optionsAtMedia: u,
    optionsMediaQueries: d
  } = a, {
    on: f,
    off: p,
    emit: m
  } = l, g = F;
  let h = !1, v, w = c(M2, Ta.globalOptions), y = c(w), C = [], _, S, E;
  function T() {
    const {
      container: ce,
      slides: O
    } = y;
    S = (Ss(ce) ? e.querySelector(ce) : ce) || e.children[0];
    const ge = Ss(O) ? S.querySelectorAll(O) : O;
    E = [].slice.call(ge || S.children);
  }
  function N(ce) {
    const O = P2(e, S, E, o, r, ce, l);
    if (ce.loop && !O.slideLooper.canLoop()) {
      const ne = Object.assign({}, ce, {
        loop: !1
      });
      return N(ne);
    }
    return O;
  }
  function k(ce, O) {
    h || (w = c(w, ce), y = u(w), C = O || C, T(), v = N(y), d([w, ...C.map(({
      options: ne
    }) => ne)]).forEach((ne) => s.add(ne, "change", F)), y.active && (v.translate.to(v.location.get()), v.animation.init(), v.slidesInView.init(), v.slideFocus.init(), v.eventHandler.init(Z), v.resizeHandler.init(Z), v.slidesHandler.init(Z), v.options.loop && v.slideLooper.loop(), S.offsetParent && E.length && v.dragHandler.init(Z), _ = i.init(Z, C)));
  }
  function F(ce, O) {
    const ne = ee();
    z(), k(c({
      startIndex: ne
    }, ce), O), l.emit("reInit");
  }
  function z() {
    v.dragHandler.destroy(), v.eventStore.clear(), v.translate.clear(), v.slideLooper.clear(), v.resizeHandler.destroy(), v.slidesHandler.destroy(), v.slidesInView.destroy(), v.animation.destroy(), i.destroy(), s.clear();
  }
  function ae() {
    h || (h = !0, s.clear(), z(), l.emit("destroy"));
  }
  function A(ce, O, ne) {
    !y.active || h || (v.scrollBody.useBaseFriction().useDuration(O === !0 ? 0 : y.duration), v.scrollTo.index(ce, ne || 0));
  }
  function V(ce) {
    const O = v.index.add(1).get();
    A(O, ce, -1);
  }
  function J(ce) {
    const O = v.index.add(-1).get();
    A(O, ce, 1);
  }
  function H() {
    return v.index.add(1).get() !== ee();
  }
  function K() {
    return v.index.add(-1).get() !== ee();
  }
  function X() {
    return v.scrollSnapList;
  }
  function se() {
    return v.scrollProgress.get(v.location.get());
  }
  function ee() {
    return v.index.get();
  }
  function R() {
    return v.indexPrevious.get();
  }
  function B() {
    return v.slidesInView.get();
  }
  function G() {
    return v.slidesInView.get(!1);
  }
  function W() {
    return _;
  }
  function j() {
    return v;
  }
  function U() {
    return e;
  }
  function te() {
    return S;
  }
  function fe() {
    return E;
  }
  const Z = {
    canScrollNext: H,
    canScrollPrev: K,
    containerNode: te,
    internalEngine: j,
    destroy: ae,
    off: p,
    on: f,
    emit: m,
    plugins: W,
    previousScrollSnap: R,
    reInit: g,
    rootNode: U,
    scrollNext: V,
    scrollPrev: J,
    scrollProgress: se,
    scrollSnapList: X,
    scrollTo: A,
    selectedScrollSnap: ee,
    slideNodes: fe,
    slidesInView: B,
    slidesNotInView: G
  };
  return k(t, n), setTimeout(() => l.emit("init"), 0), Z;
}
Ta.globalOptions = void 0;
function Fl(e = {}, t = []) {
  const n = q(e), o = q(t), [r, a] = re(), [i, s] = re(), l = he(() => {
    r && r.reInit(n.current, o.current);
  }, [r]);
  return le(() => {
    if (e2() && i) {
      Ta.globalOptions = Fl.globalOptions;
      const c = Ta(i, n.current, o.current);
      return a(c), () => c.destroy();
    } else
      a(void 0);
  }, [i, a]), le(() => {
    Al(n.current, e) || (n.current = e, l());
  }, [e, l]), le(() => {
    t2(o.current, t) || (o.current = t, l());
  }, [t, l]), [s, r];
}
Fl.globalOptions = void 0;
const mp = $.createContext(null);
function ni() {
  const e = $.useContext(mp);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const T2 = $.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: o,
    className: r,
    children: a,
    ...i
  }, s) => {
    const [l, c] = Fl(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      o
    ), [u, d] = $.useState(!1), [f, p] = $.useState(!1), m = $.useCallback((w) => {
      w && (d(w.canScrollPrev()), p(w.canScrollNext()));
    }, []), g = $.useCallback(() => {
      c == null || c.scrollPrev();
    }, [c]), h = $.useCallback(() => {
      c == null || c.scrollNext();
    }, [c]), v = $.useCallback(
      (w) => {
        w.key === "ArrowLeft" ? (w.preventDefault(), g()) : w.key === "ArrowRight" && (w.preventDefault(), h());
      },
      [g, h]
    );
    return $.useEffect(() => {
      !c || !n || n(c);
    }, [c, n]), $.useEffect(() => {
      if (c)
        return m(c), c.on("reInit", m), c.on("select", m), () => {
          c == null || c.off("select", m);
        };
    }, [c, m]), /* @__PURE__ */ b(
      mp.Provider,
      {
        value: {
          carouselRef: l,
          api: c,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: g,
          scrollNext: h,
          canScrollPrev: u,
          canScrollNext: f
        },
        children: /* @__PURE__ */ b(
          "div",
          {
            ref: s,
            onKeyDownCapture: v,
            className: L("relative", r),
            role: "region",
            "aria-roledescription": "carousel",
            ...i,
            children: a
          }
        )
      }
    );
  }
);
T2.displayName = "Carousel";
const A2 = $.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: o, orientation: r } = ni();
  return /* @__PURE__ */ b("div", { ref: o, className: "overflow-hidden", children: /* @__PURE__ */ b(
    "div",
    {
      ref: n,
      className: L(
        "flex",
        r === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
A2.displayName = "CarouselContent";
const I2 = $.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: o } = ni();
  return /* @__PURE__ */ b(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: L(
        "min-w-0 shrink-0 grow-0 basis-full",
        o === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
I2.displayName = "CarouselItem";
const O2 = $.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, r) => {
  const { orientation: a, scrollPrev: i, canScrollPrev: s } = ni();
  return /* @__PURE__ */ Q(
    Pt,
    {
      ref: r,
      variant: t,
      size: n,
      className: L(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...o,
      children: [
        /* @__PURE__ */ b(Lb, { className: "h-4 w-4" }),
        /* @__PURE__ */ b("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
O2.displayName = "CarouselPrevious";
const k2 = $.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...o }, r) => {
  const { orientation: a, scrollNext: i, canScrollNext: s } = ni();
  return /* @__PURE__ */ Q(
    Pt,
    {
      ref: r,
      variant: t,
      size: n,
      className: L(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !s,
      onClick: i,
      ...o,
      children: [
        /* @__PURE__ */ b(Fb, { className: "h-4 w-4" }),
        /* @__PURE__ */ b("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
k2.displayName = "CarouselNext";
function Lo(e) {
  const t = q({
    value: e,
    previous: e
  });
  return nn(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
function Ir(e) {
  const [t, n] = re(void 0);
  return tt(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const a = r[0];
        let i, s;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          i = c.inlineSize, s = c.blockSize;
        } else
          i = e.offsetWidth, s = e.offsetHeight;
        n({
          width: i,
          height: s
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const gp = "Checkbox", [L2, ZR] = Ve(gp), [F2, z2] = L2(gp), V2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, name: o, checked: r, defaultChecked: a, required: i, disabled: s, value: l = "on", onCheckedChange: c, ...u } = e, [d, f] = re(null), p = be(
    t,
    (y) => f(y)
  ), m = q(!1), g = d ? !!d.closest("form") : !0, [h = !1, v] = Ue({
    prop: r,
    defaultProp: a,
    onChange: c
  }), w = q(h);
  return le(() => {
    const y = d == null ? void 0 : d.form;
    if (y) {
      const C = () => v(w.current);
      return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
    }
  }, [
    d,
    v
  ]), /* @__PURE__ */ x(F2, {
    scope: n,
    state: h,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "checkbox",
    "aria-checked": qn(h) ? "mixed" : h,
    "aria-required": i,
    "data-state": hp(h),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: l
  }, u, {
    ref: p,
    onKeyDown: Y(e.onKeyDown, (y) => {
      y.key === "Enter" && y.preventDefault();
    }),
    onClick: Y(e.onClick, (y) => {
      v(
        (C) => qn(C) ? !0 : !C
      ), g && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation());
    })
  })), g && /* @__PURE__ */ x(G2, {
    control: d,
    bubbles: !m.current,
    name: o,
    value: l,
    checked: h,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), H2 = "CheckboxIndicator", B2 = /* @__PURE__ */ I((e, t) => {
  const { __scopeCheckbox: n, forceMount: o, ...r } = e, a = z2(H2, n);
  return /* @__PURE__ */ x(Ye, {
    present: o || qn(a.state) || a.state === !0
  }, /* @__PURE__ */ x(ie.span, P({
    "data-state": hp(a.state),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t,
    style: {
      pointerEvents: "none",
      ...e.style
    }
  })));
}), G2 = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, a = q(null), i = Lo(n), s = Ir(t);
  return le(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: o
      });
      l.indeterminate = qn(n), d.call(l, qn(n) ? !1 : n), l.dispatchEvent(f);
    }
  }, [
    i,
    n,
    o
  ]), /* @__PURE__ */ x("input", P({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: qn(n) ? !1 : n
  }, r, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function qn(e) {
  return e === "indeterminate";
}
function hp(e) {
  return qn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const vp = V2, W2 = B2, Xn = $.forwardRef(({ className: e, iconClassName: t, ...n }, o) => /* @__PURE__ */ b(
  vp,
  {
    ref: o,
    className: L(
      "group peer h-6 w-6 shrink-0 rounded-[5px] border border-[#9B9EA3] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0073E6] data-[state=checked]:text-[#FFF] data-[state=checked]:border-none data-[state=indeterminate]:bg-[#0073E6] data-[state=indeterminate]:text-[#FFF] data-[state=indeterminate]:border-none",
      e
    ),
    ...n,
    children: /* @__PURE__ */ Q(
      W2,
      {
        className: L("flex items-center justify-center text-current"),
        children: [
          /* @__PURE__ */ b(
            Io,
            {
              className: `h-5 w-5 hidden group-data-[state=checked]:block ${t}`
            }
          ),
          /* @__PURE__ */ b(
            Gb,
            {
              className: `h-5 w-5 hidden group-data-[state=indeterminate]:block ${t}`
            }
          )
        ]
      }
    )
  }
));
Xn.displayName = vp.displayName;
const QR = tf, JR = Qd, eM = ef;
var Tu = 1, j2 = 0.9, U2 = 0.8, Y2 = 0.17, Gi = 0.1, Wi = 0.999, K2 = 0.9999, q2 = 0.99, X2 = /[\\\/_+.#"@\[\(\{&]/, Z2 = /[\\\/_+.#"@\[\(\{&]/g, Q2 = /[\s-]/, bp = /[\s-]/g;
function Es(e, t, n, o, r, a, i) {
  if (a === t.length)
    return r === e.length ? Tu : q2;
  var s = `${r},${a}`;
  if (i[s] !== void 0)
    return i[s];
  for (var l = o.charAt(a), c = n.indexOf(l, r), u = 0, d, f, p, m; c >= 0; )
    d = Es(e, t, n, o, c + 1, a + 1, i), d > u && (c === r ? d *= Tu : X2.test(e.charAt(c - 1)) ? (d *= U2, p = e.slice(r, c - 1).match(Z2), p && r > 0 && (d *= Math.pow(Wi, p.length))) : Q2.test(e.charAt(c - 1)) ? (d *= j2, m = e.slice(r, c - 1).match(bp), m && r > 0 && (d *= Math.pow(Wi, m.length))) : (d *= Y2, r > 0 && (d *= Math.pow(Wi, c - r))), e.charAt(c) !== t.charAt(a) && (d *= K2)), (d < Gi && n.charAt(c - 1) === o.charAt(a + 1) || o.charAt(a + 1) === o.charAt(a) && n.charAt(c - 1) !== o.charAt(a)) && (f = Es(e, t, n, o, c + 1, a + 2, i), f * Gi > d && (d = f * Gi)), d > u && (u = d), c = n.indexOf(l, c + 1);
  return i[s] = u, u;
}
function Au(e) {
  return e.toLowerCase().replace(bp, " ");
}
function J2(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Es(e, t, Au(e), Au(t), 0, 0, {});
}
var qo = '[cmdk-group=""]', ji = '[cmdk-group-items=""]', eC = '[cmdk-group-heading=""]', zl = '[cmdk-item=""]', Iu = `${zl}:not([aria-disabled="true"])`, Ps = "cmdk-item-select", jn = "data-value", tC = (e, t, n) => J2(e, t, n), wp = $.createContext(void 0), Or = () => $.useContext(wp), yp = $.createContext(void 0), Vl = () => $.useContext(yp), xp = $.createContext(void 0), $p = $.forwardRef((e, t) => {
  let n = xo(() => {
    var R, B;
    return { search: "", value: (B = (R = e.value) != null ? R : e.defaultValue) != null ? B : "", filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), o = xo(() => /* @__PURE__ */ new Set()), r = xo(() => /* @__PURE__ */ new Map()), a = xo(() => /* @__PURE__ */ new Map()), i = xo(() => /* @__PURE__ */ new Set()), s = Cp(e), { label: l, children: c, value: u, onValueChange: d, filter: f, shouldFilter: p, loop: m, disablePointerSelection: g = !1, vimBindings: h = !0, ...v } = e, w = $.useId(), y = $.useId(), C = $.useId(), _ = $.useRef(null), S = dC();
  to(() => {
    if (u !== void 0) {
      let R = u.trim();
      n.current.value = R, E.emit();
    }
  }, [u]), to(() => {
    S(6, ae);
  }, []);
  let E = $.useMemo(() => ({ subscribe: (R) => (i.current.add(R), () => i.current.delete(R)), snapshot: () => n.current, setState: (R, B, G) => {
    var W, j, U;
    if (!Object.is(n.current[R], B)) {
      if (n.current[R] = B, R === "search")
        z(), k(), S(1, F);
      else if (R === "value" && (G || S(5, ae), ((W = s.current) == null ? void 0 : W.value) !== void 0)) {
        let te = B ?? "";
        (U = (j = s.current).onValueChange) == null || U.call(j, te);
        return;
      }
      E.emit();
    }
  }, emit: () => {
    i.current.forEach((R) => R());
  } }), []), T = $.useMemo(() => ({ value: (R, B, G) => {
    var W;
    B !== ((W = a.current.get(R)) == null ? void 0 : W.value) && (a.current.set(R, { value: B, keywords: G }), n.current.filtered.items.set(R, N(B, G)), S(2, () => {
      k(), E.emit();
    }));
  }, item: (R, B) => (o.current.add(R), B && (r.current.has(B) ? r.current.get(B).add(R) : r.current.set(B, /* @__PURE__ */ new Set([R]))), S(3, () => {
    z(), k(), n.current.value || F(), E.emit();
  }), () => {
    a.current.delete(R), o.current.delete(R), n.current.filtered.items.delete(R);
    let G = A();
    S(4, () => {
      z(), (G == null ? void 0 : G.getAttribute("id")) === R && F(), E.emit();
    });
  }), group: (R) => (r.current.has(R) || r.current.set(R, /* @__PURE__ */ new Set()), () => {
    a.current.delete(R), r.current.delete(R);
  }), filter: () => s.current.shouldFilter, label: l || e["aria-label"], disablePointerSelection: g, listId: w, inputId: C, labelId: y, listInnerRef: _ }), []);
  function N(R, B) {
    var G, W;
    let j = (W = (G = s.current) == null ? void 0 : G.filter) != null ? W : tC;
    return R ? j(R, n.current.search, B) : 0;
  }
  function k() {
    if (!n.current.search || s.current.shouldFilter === !1)
      return;
    let R = n.current.filtered.items, B = [];
    n.current.filtered.groups.forEach((W) => {
      let j = r.current.get(W), U = 0;
      j.forEach((te) => {
        let fe = R.get(te);
        U = Math.max(fe, U);
      }), B.push([W, U]);
    });
    let G = _.current;
    V().sort((W, j) => {
      var U, te;
      let fe = W.getAttribute("id"), Z = j.getAttribute("id");
      return ((U = R.get(Z)) != null ? U : 0) - ((te = R.get(fe)) != null ? te : 0);
    }).forEach((W) => {
      let j = W.closest(ji);
      j ? j.appendChild(W.parentElement === j ? W : W.closest(`${ji} > *`)) : G.appendChild(W.parentElement === G ? W : W.closest(`${ji} > *`));
    }), B.sort((W, j) => j[1] - W[1]).forEach((W) => {
      let j = _.current.querySelector(`${qo}[${jn}="${encodeURIComponent(W[0])}"]`);
      j == null || j.parentElement.appendChild(j);
    });
  }
  function F() {
    let R = V().find((G) => G.getAttribute("aria-disabled") !== "true"), B = R == null ? void 0 : R.getAttribute(jn);
    E.setState("value", B || void 0);
  }
  function z() {
    var R, B, G, W;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = o.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let j = 0;
    for (let U of o.current) {
      let te = (B = (R = a.current.get(U)) == null ? void 0 : R.value) != null ? B : "", fe = (W = (G = a.current.get(U)) == null ? void 0 : G.keywords) != null ? W : [], Z = N(te, fe);
      n.current.filtered.items.set(U, Z), Z > 0 && j++;
    }
    for (let [U, te] of r.current)
      for (let fe of te)
        if (n.current.filtered.items.get(fe) > 0) {
          n.current.filtered.groups.add(U);
          break;
        }
    n.current.filtered.count = j;
  }
  function ae() {
    var R, B, G;
    let W = A();
    W && (((R = W.parentElement) == null ? void 0 : R.firstChild) === W && ((G = (B = W.closest(qo)) == null ? void 0 : B.querySelector(eC)) == null || G.scrollIntoView({ block: "nearest" })), W.scrollIntoView({ block: "nearest" }));
  }
  function A() {
    var R;
    return (R = _.current) == null ? void 0 : R.querySelector(`${zl}[aria-selected="true"]`);
  }
  function V() {
    var R;
    return Array.from((R = _.current) == null ? void 0 : R.querySelectorAll(Iu));
  }
  function J(R) {
    let B = V()[R];
    B && E.setState("value", B.getAttribute(jn));
  }
  function H(R) {
    var B;
    let G = A(), W = V(), j = W.findIndex((te) => te === G), U = W[j + R];
    (B = s.current) != null && B.loop && (U = j + R < 0 ? W[W.length - 1] : j + R === W.length ? W[0] : W[j + R]), U && E.setState("value", U.getAttribute(jn));
  }
  function K(R) {
    let B = A(), G = B == null ? void 0 : B.closest(qo), W;
    for (; G && !W; )
      G = R > 0 ? cC(G, qo) : uC(G, qo), W = G == null ? void 0 : G.querySelector(Iu);
    W ? E.setState("value", W.getAttribute(jn)) : H(R);
  }
  let X = () => J(V().length - 1), se = (R) => {
    R.preventDefault(), R.metaKey ? X() : R.altKey ? K(1) : H(1);
  }, ee = (R) => {
    R.preventDefault(), R.metaKey ? J(0) : R.altKey ? K(-1) : H(-1);
  };
  return $.createElement(ie.div, { ref: t, tabIndex: -1, ...v, "cmdk-root": "", onKeyDown: (R) => {
    var B;
    if ((B = v.onKeyDown) == null || B.call(v, R), !R.defaultPrevented)
      switch (R.key) {
        case "n":
        case "j": {
          h && R.ctrlKey && se(R);
          break;
        }
        case "ArrowDown": {
          se(R);
          break;
        }
        case "p":
        case "k": {
          h && R.ctrlKey && ee(R);
          break;
        }
        case "ArrowUp": {
          ee(R);
          break;
        }
        case "Home": {
          R.preventDefault(), J(0);
          break;
        }
        case "End": {
          R.preventDefault(), X();
          break;
        }
        case "Enter":
          if (!R.nativeEvent.isComposing && R.keyCode !== 229) {
            R.preventDefault();
            let G = A();
            if (G) {
              let W = new Event(Ps);
              G.dispatchEvent(W);
            }
          }
      }
  } }, $.createElement("label", { "cmdk-label": "", htmlFor: T.inputId, id: T.labelId, style: pC }, l), oi(e, (R) => $.createElement(yp.Provider, { value: E }, $.createElement(wp.Provider, { value: T }, R))));
}), nC = $.forwardRef((e, t) => {
  var n, o;
  let r = $.useId(), a = $.useRef(null), i = $.useContext(xp), s = Or(), l = Cp(e), c = (o = (n = l.current) == null ? void 0 : n.forceMount) != null ? o : i == null ? void 0 : i.forceMount;
  to(() => {
    if (!c)
      return s.item(r, i == null ? void 0 : i.id);
  }, [c]);
  let u = Sp(r, a, [e.value, e.children, a], e.keywords), d = Vl(), f = no((S) => S.value && S.value === u.current), p = no((S) => c || s.filter() === !1 ? !0 : S.search ? S.filtered.items.get(r) > 0 : !0);
  $.useEffect(() => {
    let S = a.current;
    if (!(!S || e.disabled))
      return S.addEventListener(Ps, m), () => S.removeEventListener(Ps, m);
  }, [p, e.onSelect, e.disabled]);
  function m() {
    var S, E;
    g(), (E = (S = l.current).onSelect) == null || E.call(S, u.current);
  }
  function g() {
    d.setState("value", u.current, !0);
  }
  if (!p)
    return null;
  let { disabled: h, value: v, onSelect: w, forceMount: y, keywords: C, ..._ } = e;
  return $.createElement(ie.div, { ref: mr([a, t]), ..._, id: r, "cmdk-item": "", role: "option", "aria-disabled": !!h, "aria-selected": !!f, "data-disabled": !!h, "data-selected": !!f, onPointerMove: h || s.disablePointerSelection ? void 0 : g, onClick: h ? void 0 : m }, e.children);
}), oC = $.forwardRef((e, t) => {
  let { heading: n, children: o, forceMount: r, ...a } = e, i = $.useId(), s = $.useRef(null), l = $.useRef(null), c = $.useId(), u = Or(), d = no((p) => r || u.filter() === !1 ? !0 : p.search ? p.filtered.groups.has(i) : !0);
  to(() => u.group(i), []), Sp(i, s, [e.value, e.heading, l]);
  let f = $.useMemo(() => ({ id: i, forceMount: r }), [r]);
  return $.createElement(ie.div, { ref: mr([s, t]), ...a, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && $.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), oi(e, (p) => $.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, $.createElement(xp.Provider, { value: f }, p))));
}), rC = $.forwardRef((e, t) => {
  let { alwaysRender: n, ...o } = e, r = $.useRef(null), a = no((i) => !i.search);
  return !n && !a ? null : $.createElement(ie.div, { ref: mr([r, t]), ...o, "cmdk-separator": "", role: "separator" });
}), aC = $.forwardRef((e, t) => {
  let { onValueChange: n, ...o } = e, r = e.value != null, a = Vl(), i = no((u) => u.search), s = no((u) => u.value), l = Or(), c = $.useMemo(() => {
    var u;
    let d = (u = l.listInnerRef.current) == null ? void 0 : u.querySelector(`${zl}[${jn}="${encodeURIComponent(s)}"]`);
    return d == null ? void 0 : d.getAttribute("id");
  }, []);
  return $.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), $.createElement(ie.input, { ref: t, ...o, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": c, id: l.inputId, type: "text", value: r ? e.value : i, onChange: (u) => {
    r || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), iC = $.forwardRef((e, t) => {
  let { children: n, label: o = "Suggestions", ...r } = e, a = $.useRef(null), i = $.useRef(null), s = Or();
  return $.useEffect(() => {
    if (i.current && a.current) {
      let l = i.current, c = a.current, u, d = new ResizeObserver(() => {
        u = requestAnimationFrame(() => {
          let f = l.offsetHeight;
          c.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return d.observe(l), () => {
        cancelAnimationFrame(u), d.unobserve(l);
      };
    }
  }, []), $.createElement(ie.div, { ref: mr([a, t]), ...r, "cmdk-list": "", role: "listbox", "aria-label": o, id: s.listId }, oi(e, (l) => $.createElement("div", { ref: mr([i, s.listInnerRef]), "cmdk-list-sizer": "" }, l)));
}), sC = $.forwardRef((e, t) => {
  let { open: n, onOpenChange: o, overlayClassName: r, contentClassName: a, container: i, ...s } = e;
  return $.createElement(Pr, { open: n, onOpenChange: o }, $.createElement(Rr, { container: i }, $.createElement(io, { "cmdk-overlay": "", className: r }), $.createElement(so, { "aria-label": e.label, "cmdk-dialog": "", className: a }, $.createElement($p, { ref: t, ...s }))));
}), lC = $.forwardRef((e, t) => no((n) => n.filtered.count === 0) ? $.createElement(ie.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Rs = $.forwardRef((e, t) => {
  let { progress: n, children: o, label: r = "Loading...", ...a } = e;
  return $.createElement(ie.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": r }, oi(e, (i) => $.createElement("div", { "aria-hidden": !0 }, i)));
}), yt = Object.assign($p, { List: iC, Item: nC, Input: aC, Group: oC, Separator: rC, Dialog: sC, Empty: lC, Loading: Rs });
function cC(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.nextElementSibling;
  }
}
function uC(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t))
      return n;
    n = n.previousElementSibling;
  }
}
function Cp(e) {
  let t = $.useRef(e);
  return to(() => {
    t.current = e;
  }), t;
}
var to = typeof window > "u" ? $.useEffect : $.useLayoutEffect;
function xo(e) {
  let t = $.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function mr(e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == "function" ? n(t) : n != null && (n.current = t);
    });
  };
}
function no(e) {
  let t = Vl(), n = () => e(t.snapshot());
  return $.useSyncExternalStore(t.subscribe, n, n);
}
function Sp(e, t, n, o = []) {
  let r = $.useRef(), a = Or();
  return to(() => {
    var i;
    let s = (() => {
      var c;
      for (let u of n) {
        if (typeof u == "string")
          return u.trim();
        if (typeof u == "object" && "current" in u)
          return u.current ? (c = u.current.textContent) == null ? void 0 : c.trim() : r.current;
      }
    })(), l = o.map((c) => c.trim());
    a.value(e, s, l), (i = t.current) == null || i.setAttribute(jn, s), r.current = s;
  }), r;
}
var dC = () => {
  let [e, t] = $.useState(), n = xo(() => /* @__PURE__ */ new Map());
  return to(() => {
    n.current.forEach((o) => o()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (o, r) => {
    n.current.set(o, r), t({});
  };
};
function fC(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function oi({ asChild: e, children: t }, n) {
  return e && $.isValidElement(t) ? $.cloneElement(fC(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var pC = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const mC = Pr, tM = ei, gC = Rr, nM = lo, _p = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  io,
  {
    ref: n,
    className: L(
      "fixed inset-0 z-50 bg-[#14151a80]  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
_p.displayName = io.displayName;
const Ep = $.forwardRef(({ className: e, children: t, closeIconClassName: n, ...o }, r) => /* @__PURE__ */ Q(gC, { children: [
  /* @__PURE__ */ b(_p, {}),
  /* @__PURE__ */ Q(
    so,
    {
      ref: r,
      className: L(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-[80vw] translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#E9E9E9] bg-white p-[60px] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ",
        e
      ),
      style: {
        boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.10);"
      },
      ...o,
      children: [
        t,
        /* @__PURE__ */ b(
          lo,
          {
            className: L(
              "absolute left-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500",
              n
            ),
            children: /* @__PURE__ */ Q(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  /* @__PURE__ */ b(
                    "path",
                    {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                      fill: "black"
                    }
                  ),
                  /* @__PURE__ */ b(
                    "path",
                    {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M16.2368 7.76324C15.8858 7.41225 15.3167 7.41225 14.9657 7.76324L12 10.729L9.03427 7.76324C8.68328 7.41225 8.11422 7.41225 7.76324 7.76324C7.41225 8.11422 7.41225 8.68328 7.76324 9.03427L10.729 12L7.76324 14.9657C7.41225 15.3167 7.41225 15.8858 7.76324 16.2368C8.11422 16.5877 8.68328 16.5877 9.03427 16.2368L12 13.271L14.9657 16.2368C15.3167 16.5877 15.8858 16.5877 16.2368 16.2368C16.5877 15.8858 16.5877 15.3167 16.2368 14.9657L13.271 12L16.2368 9.03427C16.5877 8.68328 16.5877 8.11422 16.2368 7.76324Z",
                      fill: "white"
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  )
] }));
Ep.displayName = so.displayName;
const hC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
hC.displayName = "DialogHeader";
const vC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
vC.displayName = "DialogFooter";
const bC = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Oo,
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
bC.displayName = Oo.displayName;
const wC = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  ko,
  {
    ref: n,
    className: L("text-sm text-slate-500  ", e),
    ...t
  }
));
wC.displayName = ko.displayName;
const Hl = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  yt,
  {
    ref: n,
    className: L(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950    ",
      e
    ),
    ...t
  }
));
Hl.displayName = yt.displayName;
const oM = ({ children: e, ...t }) => /* @__PURE__ */ b(mC, { ...t, children: /* @__PURE__ */ b(Ep, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ b(Hl, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5  ", children: e }) }) }), Pp = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ b(Wb, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ b(
    yt.Input,
    {
      ref: n,
      className: L(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50  ",
        e
      ),
      ...t
    }
  )
] }));
Pp.displayName = yt.Input.displayName;
const Rp = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  yt.List,
  {
    ref: n,
    className: L("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Rp.displayName = yt.List.displayName;
const Mp = $.forwardRef((e, t) => /* @__PURE__ */ b(
  yt.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Mp.displayName = yt.Empty.displayName;
const Np = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  yt.Group,
  {
    ref: n,
    className: L(
      "overflow-hidden p-1 text-slate-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500    ",
      e
    ),
    ...t
  }
));
Np.displayName = yt.Group.displayName;
const yC = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  yt.Separator,
  {
    ref: n,
    className: L("-mx-1 h-px bg-slate-200  ", e),
    ...t
  }
));
yC.displayName = yt.Separator.displayName;
const Ms = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  yt.Item,
  {
    ref: n,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...t
  }
));
Ms.displayName = yt.Item.displayName;
const xC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
xC.displayName = "CommandShortcut";
const $C = ["top", "right", "bottom", "left"], Tn = Math.min, _t = Math.max, Aa = Math.round, Qr = Math.floor, An = (e) => ({
  x: e,
  y: e
}), CC = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, SC = {
  start: "end",
  end: "start"
};
function Ns(e, t, n) {
  return _t(e, Tn(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function yn(e) {
  return e.split("-")[0];
}
function Fo(e) {
  return e.split("-")[1];
}
function Bl(e) {
  return e === "x" ? "y" : "x";
}
function Gl(e) {
  return e === "y" ? "height" : "width";
}
function zo(e) {
  return ["top", "bottom"].includes(yn(e)) ? "y" : "x";
}
function Wl(e) {
  return Bl(zo(e));
}
function _C(e, t, n) {
  n === void 0 && (n = !1);
  const o = Fo(e), r = Wl(e), a = Gl(r);
  let i = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (i = Ia(i)), [i, Ia(i)];
}
function EC(e) {
  const t = Ia(e);
  return [Ds(e), t, Ds(t)];
}
function Ds(e) {
  return e.replace(/start|end/g, (t) => SC[t]);
}
function PC(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], a = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? a : i;
    default:
      return [];
  }
}
function RC(e, t, n, o) {
  const r = Fo(e);
  let a = PC(yn(e), n === "start", o);
  return r && (a = a.map((i) => i + "-" + r), t && (a = a.concat(a.map(Ds)))), a;
}
function Ia(e) {
  return e.replace(/left|right|bottom|top/g, (t) => CC[t]);
}
function MC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Dp(e) {
  return typeof e != "number" ? MC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Oa(e) {
  const {
    x: t,
    y: n,
    width: o,
    height: r
  } = e;
  return {
    width: o,
    height: r,
    top: n,
    left: t,
    right: t + o,
    bottom: n + r,
    x: t,
    y: n
  };
}
function Ou(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const a = zo(t), i = Wl(t), s = Gl(i), l = yn(t), c = a === "y", u = o.x + o.width / 2 - r.width / 2, d = o.y + o.height / 2 - r.height / 2, f = o[s] / 2 - r[s] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: u,
        y: o.y - r.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: o.y + o.height
      };
      break;
    case "right":
      p = {
        x: o.x + o.width,
        y: d
      };
      break;
    case "left":
      p = {
        x: o.x - r.width,
        y: d
      };
      break;
    default:
      p = {
        x: o.x,
        y: o.y
      };
  }
  switch (Fo(t)) {
    case "start":
      p[i] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[i] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const NC = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: a = [],
    platform: i
  } = n, s = a.filter(Boolean), l = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: u,
    y: d
  } = Ou(c, o, l), f = o, p = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: h,
      fn: v
    } = s[g], {
      x: w,
      y,
      data: C,
      reset: _
    } = await v({
      x: u,
      y: d,
      initialPlacement: o,
      placement: f,
      strategy: r,
      middlewareData: p,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = y ?? d, p = {
      ...p,
      [h]: {
        ...p[h],
        ...C
      }
    }, _ && m <= 50 && (m++, typeof _ == "object" && (_.placement && (f = _.placement), _.rects && (c = _.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : _.rects), {
      x: u,
      y: d
    } = Ou(c, f, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: f,
    strategy: r,
    middlewareData: p
  };
};
async function gr(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: a,
    rects: i,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = wn(t, e), m = Dp(p), h = s[f ? d === "floating" ? "reference" : "floating" : d], v = Oa(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(h))) == null || n ? h : h.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = d === "floating" ? {
    x: o,
    y: r,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), C = await (a.isElement == null ? void 0 : a.isElement(y)) ? await (a.getScale == null ? void 0 : a.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Oa(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: y,
    strategy: l
  }) : w);
  return {
    top: (v.top - _.top + m.top) / C.y,
    bottom: (_.bottom - v.bottom + m.bottom) / C.y,
    left: (v.left - _.left + m.left) / C.x,
    right: (_.right - v.right + m.right) / C.x
  };
}
const DC = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: a,
      platform: i,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = wn(e, t) || {};
    if (c == null)
      return {};
    const d = Dp(u), f = {
      x: n,
      y: o
    }, p = Wl(r), m = Gl(p), g = await i.getDimensions(c), h = p === "y", v = h ? "top" : "left", w = h ? "bottom" : "right", y = h ? "clientHeight" : "clientWidth", C = a.reference[m] + a.reference[p] - f[p] - a.floating[m], _ = f[p] - a.reference[p], S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let E = S ? S[y] : 0;
    (!E || !await (i.isElement == null ? void 0 : i.isElement(S))) && (E = s.floating[y] || a.floating[m]);
    const T = C / 2 - _ / 2, N = E / 2 - g[m] / 2 - 1, k = Tn(d[v], N), F = Tn(d[w], N), z = k, ae = E - g[m] - F, A = E / 2 - g[m] / 2 + T, V = Ns(z, A, ae), J = !l.arrow && Fo(r) != null && A !== V && a.reference[m] / 2 - (A < z ? k : F) - g[m] / 2 < 0, H = J ? A < z ? A - z : A - ae : 0;
    return {
      [p]: f[p] + H,
      data: {
        [p]: V,
        centerOffset: A - V - H,
        ...J && {
          alignmentOffset: H
        }
      },
      reset: J
    };
  }
}), TC = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: a,
        rects: i,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...h
      } = wn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const v = yn(r), w = yn(s) === s, y = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), C = f || (w || !g ? [Ia(s)] : EC(s));
      !f && m !== "none" && C.push(...RC(s, g, m, y));
      const _ = [s, ...C], S = await gr(t, h), E = [];
      let T = ((o = a.flip) == null ? void 0 : o.overflows) || [];
      if (u && E.push(S[v]), d) {
        const z = _C(r, i, y);
        E.push(S[z[0]], S[z[1]]);
      }
      if (T = [...T, {
        placement: r,
        overflows: E
      }], !E.every((z) => z <= 0)) {
        var N, k;
        const z = (((N = a.flip) == null ? void 0 : N.index) || 0) + 1, ae = _[z];
        if (ae)
          return {
            data: {
              index: z,
              overflows: T
            },
            reset: {
              placement: ae
            }
          };
        let A = (k = T.filter((V) => V.overflows[0] <= 0).sort((V, J) => V.overflows[1] - J.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!A)
          switch (p) {
            case "bestFit": {
              var F;
              const V = (F = T.map((J) => [J.placement, J.overflows.filter((H) => H > 0).reduce((H, K) => H + K, 0)]).sort((J, H) => J[1] - H[1])[0]) == null ? void 0 : F[0];
              V && (A = V);
              break;
            }
            case "initialPlacement":
              A = s;
              break;
          }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function ku(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Lu(e) {
  return $C.some((t) => e[t] >= 0);
}
const AC = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = wn(e, t);
      switch (o) {
        case "referenceHidden": {
          const a = await gr(t, {
            ...r,
            elementContext: "reference"
          }), i = ku(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Lu(i)
            }
          };
        }
        case "escaped": {
          const a = await gr(t, {
            ...r,
            altBoundary: !0
          }), i = ku(a, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Lu(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function IC(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, a = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), i = yn(n), s = Fo(n), l = zo(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, u = a && l ? -1 : 1, d = wn(t, e);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: m
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), l ? {
    x: p * u,
    y: f * c
  } : {
    x: f * c,
    y: p * u
  };
}
const OC = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: a,
        placement: i,
        middlewareData: s
      } = t, l = await IC(t, e);
      return i === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: i
        }
      };
    }
  };
}, kC = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: a = !0,
        crossAxis: i = !1,
        limiter: s = {
          fn: (h) => {
            let {
              x: v,
              y: w
            } = h;
            return {
              x: v,
              y: w
            };
          }
        },
        ...l
      } = wn(e, t), c = {
        x: n,
        y: o
      }, u = await gr(t, l), d = zo(yn(r)), f = Bl(d);
      let p = c[f], m = c[d];
      if (a) {
        const h = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", w = p + u[h], y = p - u[v];
        p = Ns(w, p, y);
      }
      if (i) {
        const h = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", w = m + u[h], y = m - u[v];
        m = Ns(w, m, y);
      }
      const g = s.fn({
        ...t,
        [f]: p,
        [d]: m
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - o
        }
      };
    }
  };
}, LC = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: a,
        middlewareData: i
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = wn(e, t), u = {
        x: n,
        y: o
      }, d = zo(r), f = Bl(d);
      let p = u[f], m = u[d];
      const g = wn(s, t), h = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const y = f === "y" ? "height" : "width", C = a.reference[f] - a.floating[y] + h.mainAxis, _ = a.reference[f] + a.reference[y] - h.mainAxis;
        p < C ? p = C : p > _ && (p = _);
      }
      if (c) {
        var v, w;
        const y = f === "y" ? "width" : "height", C = ["top", "left"].includes(yn(r)), _ = a.reference[d] - a.floating[y] + (C && ((v = i.offset) == null ? void 0 : v[d]) || 0) + (C ? 0 : h.crossAxis), S = a.reference[d] + a.reference[y] + (C ? 0 : ((w = i.offset) == null ? void 0 : w[d]) || 0) - (C ? h.crossAxis : 0);
        m < _ ? m = _ : m > S && (m = S);
      }
      return {
        [f]: p,
        [d]: m
      };
    }
  };
}, FC = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: a
      } = t, {
        apply: i = () => {
        },
        ...s
      } = wn(e, t), l = await gr(t, s), c = yn(n), u = Fo(n), d = zo(n) === "y", {
        width: f,
        height: p
      } = o.floating;
      let m, g;
      c === "top" || c === "bottom" ? (m = c, g = u === (await (r.isRTL == null ? void 0 : r.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = c, m = u === "end" ? "top" : "bottom");
      const h = p - l[m], v = f - l[g], w = !t.middlewareData.shift;
      let y = h, C = v;
      if (d) {
        const S = f - l.left - l.right;
        C = u || w ? Tn(v, S) : S;
      } else {
        const S = p - l.top - l.bottom;
        y = u || w ? Tn(h, S) : S;
      }
      if (w && !u) {
        const S = _t(l.left, 0), E = _t(l.right, 0), T = _t(l.top, 0), N = _t(l.bottom, 0);
        d ? C = f - 2 * (S !== 0 || E !== 0 ? S + E : _t(l.left, l.right)) : y = p - 2 * (T !== 0 || N !== 0 ? T + N : _t(l.top, l.bottom));
      }
      await i({
        ...t,
        availableWidth: C,
        availableHeight: y
      });
      const _ = await r.getDimensions(a.floating);
      return f !== _.width || p !== _.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Vo(e) {
  return Tp(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function $n(e) {
  var t;
  return (t = (Tp(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Tp(e) {
  return e instanceof Node || e instanceof Et(e).Node;
}
function an(e) {
  return e instanceof Element || e instanceof Et(e).Element;
}
function sn(e) {
  return e instanceof HTMLElement || e instanceof Et(e).HTMLElement;
}
function Fu(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Et(e).ShadowRoot;
}
function kr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = jt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function zC(e) {
  return ["table", "td", "th"].includes(Vo(e));
}
function jl(e) {
  const t = Ul(), n = jt(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function VC(e) {
  let t = In(e);
  for (; sn(t) && !Mo(t); ) {
    if (jl(t))
      return t;
    t = In(t);
  }
  return null;
}
function Ul() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Mo(e) {
  return ["html", "body", "#document"].includes(Vo(e));
}
function jt(e) {
  return Et(e).getComputedStyle(e);
}
function ri(e) {
  return an(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function In(e) {
  if (Vo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fu(e) && e.host || // Fallback.
    $n(e)
  );
  return Fu(t) ? t.host : t;
}
function Ap(e) {
  const t = In(e);
  return Mo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : sn(t) && kr(t) ? t : Ap(t);
}
function hr(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = Ap(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = Et(r);
  return a ? t.concat(i, i.visualViewport || [], kr(r) ? r : [], i.frameElement && n ? hr(i.frameElement) : []) : t.concat(r, hr(r, [], n));
}
function Ip(e) {
  const t = jt(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = sn(e), a = r ? e.offsetWidth : n, i = r ? e.offsetHeight : o, s = Aa(n) !== a || Aa(o) !== i;
  return s && (n = a, o = i), {
    width: n,
    height: o,
    $: s
  };
}
function Yl(e) {
  return an(e) ? e : e.contextElement;
}
function _o(e) {
  const t = Yl(e);
  if (!sn(t))
    return An(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: a
  } = Ip(t);
  let i = (a ? Aa(n.width) : n.width) / o, s = (a ? Aa(n.height) : n.height) / r;
  return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: i,
    y: s
  };
}
const HC = /* @__PURE__ */ An(0);
function Op(e) {
  const t = Et(e);
  return !Ul() || !t.visualViewport ? HC : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function BC(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Et(e) ? !1 : t;
}
function oo(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), a = Yl(e);
  let i = An(1);
  t && (o ? an(o) && (i = _o(o)) : i = _o(e));
  const s = BC(a, n, o) ? Op(a) : An(0);
  let l = (r.left + s.x) / i.x, c = (r.top + s.y) / i.y, u = r.width / i.x, d = r.height / i.y;
  if (a) {
    const f = Et(a), p = o && an(o) ? Et(o) : o;
    let m = f, g = m.frameElement;
    for (; g && o && p !== m; ) {
      const h = _o(g), v = g.getBoundingClientRect(), w = jt(g), y = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * h.x, C = v.top + (g.clientTop + parseFloat(w.paddingTop)) * h.y;
      l *= h.x, c *= h.y, u *= h.x, d *= h.y, l += y, c += C, m = Et(g), g = m.frameElement;
    }
  }
  return Oa({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
const GC = [":popover-open", ":modal"];
function Kl(e) {
  return GC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function WC(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const a = r === "fixed", i = $n(o), s = t ? Kl(t.floating) : !1;
  if (o === i || s && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = An(1);
  const u = An(0), d = sn(o);
  if ((d || !d && !a) && ((Vo(o) !== "body" || kr(i)) && (l = ri(o)), sn(o))) {
    const f = oo(o);
    c = _o(o), u.x = f.x + o.clientLeft, u.y = f.y + o.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y
  };
}
function jC(e) {
  return Array.from(e.getClientRects());
}
function kp(e) {
  return oo($n(e)).left + ri(e).scrollLeft;
}
function UC(e) {
  const t = $n(e), n = ri(e), o = e.ownerDocument.body, r = _t(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), a = _t(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let i = -n.scrollLeft + kp(e);
  const s = -n.scrollTop;
  return jt(o).direction === "rtl" && (i += _t(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: a,
    x: i,
    y: s
  };
}
function YC(e, t) {
  const n = Et(e), o = $n(e), r = n.visualViewport;
  let a = o.clientWidth, i = o.clientHeight, s = 0, l = 0;
  if (r) {
    a = r.width, i = r.height;
    const c = Ul();
    (!c || c && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function KC(e, t) {
  const n = oo(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, a = sn(e) ? _o(e) : An(1), i = e.clientWidth * a.x, s = e.clientHeight * a.y, l = r * a.x, c = o * a.y;
  return {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function zu(e, t, n) {
  let o;
  if (t === "viewport")
    o = YC(e, n);
  else if (t === "document")
    o = UC($n(e));
  else if (an(t))
    o = KC(t, n);
  else {
    const r = Op(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Oa(o);
}
function Lp(e, t) {
  const n = In(e);
  return n === t || !an(n) || Mo(n) ? !1 : jt(n).position === "fixed" || Lp(n, t);
}
function qC(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = hr(e, [], !1).filter((s) => an(s) && Vo(s) !== "body"), r = null;
  const a = jt(e).position === "fixed";
  let i = a ? In(e) : e;
  for (; an(i) && !Mo(i); ) {
    const s = jt(i), l = jl(i);
    !l && s.position === "fixed" && (r = null), (a ? !l && !r : !l && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || kr(i) && !l && Lp(e, i)) ? o = o.filter((u) => u !== i) : r = s, i = In(i);
  }
  return t.set(e, o), o;
}
function XC(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const i = [...n === "clippingAncestors" ? Kl(t) ? [] : qC(t, this._c) : [].concat(n), o], s = i[0], l = i.reduce((c, u) => {
    const d = zu(t, u, r);
    return c.top = _t(d.top, c.top), c.right = Tn(d.right, c.right), c.bottom = Tn(d.bottom, c.bottom), c.left = _t(d.left, c.left), c;
  }, zu(t, s, r));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function ZC(e) {
  const {
    width: t,
    height: n
  } = Ip(e);
  return {
    width: t,
    height: n
  };
}
function QC(e, t, n) {
  const o = sn(t), r = $n(t), a = n === "fixed", i = oo(e, !0, a, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = An(0);
  if (o || !o && !a)
    if ((Vo(t) !== "body" || kr(r)) && (s = ri(t)), o) {
      const d = oo(t, !0, a, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else
      r && (l.x = kp(r));
  const c = i.left + s.scrollLeft - l.x, u = i.top + s.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: i.width,
    height: i.height
  };
}
function Ui(e) {
  return jt(e).position === "static";
}
function Vu(e, t) {
  return !sn(e) || jt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Fp(e, t) {
  const n = Et(e);
  if (Kl(e))
    return n;
  if (!sn(e)) {
    let r = In(e);
    for (; r && !Mo(r); ) {
      if (an(r) && !Ui(r))
        return r;
      r = In(r);
    }
    return n;
  }
  let o = Vu(e, t);
  for (; o && zC(o) && Ui(o); )
    o = Vu(o, t);
  return o && Mo(o) && Ui(o) && !jl(o) ? n : o || VC(e) || n;
}
const JC = async function(e) {
  const t = this.getOffsetParent || Fp, n = this.getDimensions, o = await n(e.floating);
  return {
    reference: QC(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function e6(e) {
  return jt(e).direction === "rtl";
}
const t6 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: WC,
  getDocumentElement: $n,
  getClippingRect: XC,
  getOffsetParent: Fp,
  getElementRects: JC,
  getClientRects: jC,
  getDimensions: ZC,
  getScale: _o,
  isElement: an,
  isRTL: e6
};
function n6(e, t) {
  let n = null, o;
  const r = $n(e);
  function a() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function i(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), a();
    const {
      left: c,
      top: u,
      width: d,
      height: f
    } = e.getBoundingClientRect();
    if (s || t(), !d || !f)
      return;
    const p = Qr(u), m = Qr(r.clientWidth - (c + d)), g = Qr(r.clientHeight - (u + f)), h = Qr(c), w = {
      rootMargin: -p + "px " + -m + "px " + -g + "px " + -h + "px",
      threshold: _t(0, Tn(1, l)) || 1
    };
    let y = !0;
    function C(_) {
      const S = _[0].intersectionRatio;
      if (S !== l) {
        if (!y)
          return i();
        S ? i(!1, S) : o = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      y = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, w);
    }
    n.observe(e);
  }
  return i(!0), a;
}
function o6(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: a = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = o, c = Yl(e), u = r || a ? [...c ? hr(c) : [], ...hr(t)] : [];
  u.forEach((v) => {
    r && v.addEventListener("scroll", n, {
      passive: !0
    }), a && v.addEventListener("resize", n);
  });
  const d = c && s ? n6(c, n) : null;
  let f = -1, p = null;
  i && (p = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === c && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = p) == null || y.observe(t);
    })), n();
  }), c && !l && p.observe(c), p.observe(t));
  let m, g = l ? oo(e) : null;
  l && h();
  function h() {
    const v = oo(e);
    g && (v.x !== g.x || v.y !== g.y || v.width !== g.width || v.height !== g.height) && n(), g = v, m = requestAnimationFrame(h);
  }
  return n(), () => {
    var v;
    u.forEach((w) => {
      r && w.removeEventListener("scroll", n), a && w.removeEventListener("resize", n);
    }), d == null || d(), (v = p) == null || v.disconnect(), p = null, l && cancelAnimationFrame(m);
  };
}
const r6 = OC, a6 = kC, i6 = TC, s6 = FC, l6 = AC, Hu = DC, c6 = LC, u6 = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: t6,
    ...n
  }, a = {
    ...r.platform,
    _c: o
  };
  return NC(e, t, {
    ...r,
    platform: a
  });
}, d6 = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? Hu({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? Hu({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var va = typeof document < "u" ? Wa : le;
function ka(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!ka(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const a = r[o];
      if (!(a === "_owner" && e.$$typeof) && !ka(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zp(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Bu(e, t) {
  const n = zp(e);
  return Math.round(t * n) / n;
}
function Gu(e) {
  const t = $.useRef(e);
  return va(() => {
    t.current = e;
  }), t;
}
function f6(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: a,
      floating: i
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = $.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, p] = $.useState(o);
  ka(f, o) || p(o);
  const [m, g] = $.useState(null), [h, v] = $.useState(null), w = $.useCallback((H) => {
    H !== S.current && (S.current = H, g(H));
  }, []), y = $.useCallback((H) => {
    H !== E.current && (E.current = H, v(H));
  }, []), C = a || m, _ = i || h, S = $.useRef(null), E = $.useRef(null), T = $.useRef(u), N = l != null, k = Gu(l), F = Gu(r), z = $.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const H = {
      placement: t,
      strategy: n,
      middleware: f
    };
    F.current && (H.platform = F.current), u6(S.current, E.current, H).then((K) => {
      const X = {
        ...K,
        isPositioned: !0
      };
      ae.current && !ka(T.current, X) && (T.current = X, vv.flushSync(() => {
        d(X);
      }));
    });
  }, [f, t, n, F]);
  va(() => {
    c === !1 && T.current.isPositioned && (T.current.isPositioned = !1, d((H) => ({
      ...H,
      isPositioned: !1
    })));
  }, [c]);
  const ae = $.useRef(!1);
  va(() => (ae.current = !0, () => {
    ae.current = !1;
  }), []), va(() => {
    if (C && (S.current = C), _ && (E.current = _), C && _) {
      if (k.current)
        return k.current(C, _, z);
      z();
    }
  }, [C, _, z, k, N]);
  const A = $.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: w,
    setFloating: y
  }), [w, y]), V = $.useMemo(() => ({
    reference: C,
    floating: _
  }), [C, _]), J = $.useMemo(() => {
    const H = {
      position: n,
      left: 0,
      top: 0
    };
    if (!V.floating)
      return H;
    const K = Bu(V.floating, u.x), X = Bu(V.floating, u.y);
    return s ? {
      ...H,
      transform: "translate(" + K + "px, " + X + "px)",
      ...zp(V.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: K,
      top: X
    };
  }, [n, s, V.floating, u.x, u.y]);
  return $.useMemo(() => ({
    ...u,
    update: z,
    refs: A,
    elements: V,
    floatingStyles: J
  }), [u, z, A, V, J]);
}
const p6 = /* @__PURE__ */ I((e, t) => {
  const { children: n, width: o = 10, height: r = 5, ...a } = e;
  return /* @__PURE__ */ x(ie.svg, P({}, a, {
    ref: t,
    width: o,
    height: r,
    viewBox: "0 0 30 10",
    preserveAspectRatio: "none"
  }), e.asChild ? n : /* @__PURE__ */ x("polygon", {
    points: "0,0 30,0 15,10"
  }));
}), m6 = p6, Vp = "Popper", [Hp, ln] = Ve(Vp), [g6, Bp] = Hp(Vp), h6 = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = re(null);
  return /* @__PURE__ */ x(g6, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, v6 = "PopperAnchor", b6 = /* @__PURE__ */ I((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, a = Bp(v6, n), i = q(null), s = be(t, i);
  return le(() => {
    a.onAnchorChange((o == null ? void 0 : o.current) || i.current);
  }), o ? null : /* @__PURE__ */ x(ie.div, P({}, r, {
    ref: s
  }));
}), Gp = "PopperContent", [w6, y6] = Hp(Gp), x6 = /* @__PURE__ */ I((e, t) => {
  var n, o, r, a, i, s, l, c;
  const { __scopePopper: u, side: d = "bottom", sideOffset: f = 0, align: p = "center", alignOffset: m = 0, arrowPadding: g = 0, avoidCollisions: h = !0, collisionBoundary: v = [], collisionPadding: w = 0, sticky: y = "partial", hideWhenDetached: C = !1, updatePositionStrategy: _ = "optimized", onPlaced: S, ...E } = e, T = Bp(Gp, u), [N, k] = re(null), F = be(
    t,
    (de) => k(de)
  ), [z, ae] = re(null), A = Ir(z), V = (n = A == null ? void 0 : A.width) !== null && n !== void 0 ? n : 0, J = (o = A == null ? void 0 : A.height) !== null && o !== void 0 ? o : 0, H = d + (p !== "center" ? "-" + p : ""), K = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, X = Array.isArray(v) ? v : [
    v
  ], se = X.length > 0, ee = {
    padding: K,
    boundary: X.filter(_6),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: se
  }, { refs: R, floatingStyles: B, placement: G, isPositioned: W, middlewareData: j } = f6({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: H,
    whileElementsMounted: (...de) => o6(...de, {
      animationFrame: _ === "always"
    }),
    elements: {
      reference: T.anchor
    },
    middleware: [
      r6({
        mainAxis: f + J,
        alignmentAxis: m
      }),
      h && a6({
        mainAxis: !0,
        crossAxis: !1,
        limiter: y === "partial" ? c6() : void 0,
        ...ee
      }),
      h && i6({
        ...ee
      }),
      s6({
        ...ee,
        apply: ({ elements: de, rects: Se, availableWidth: ve, availableHeight: Ee }) => {
          const { width: Ae, height: qe } = Se.reference, Be = de.floating.style;
          Be.setProperty("--radix-popper-available-width", `${ve}px`), Be.setProperty("--radix-popper-available-height", `${Ee}px`), Be.setProperty("--radix-popper-anchor-width", `${Ae}px`), Be.setProperty("--radix-popper-anchor-height", `${qe}px`);
        }
      }),
      z && d6({
        element: z,
        padding: g
      }),
      E6({
        arrowWidth: V,
        arrowHeight: J
      }),
      C && l6({
        strategy: "referenceHidden",
        ...ee
      })
    ]
  }), [U, te] = Wp(G), fe = ke(S);
  tt(() => {
    W && (fe == null || fe());
  }, [
    W,
    fe
  ]);
  const Z = (r = j.arrow) === null || r === void 0 ? void 0 : r.x, ce = (a = j.arrow) === null || a === void 0 ? void 0 : a.y, O = ((i = j.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0, [ne, ge] = re();
  return tt(() => {
    N && ge(window.getComputedStyle(N).zIndex);
  }, [
    N
  ]), /* @__PURE__ */ x("div", {
    ref: R.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...B,
      transform: W ? B.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: ne,
      "--radix-popper-transform-origin": [
        (s = j.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (l = j.transformOrigin) === null || l === void 0 ? void 0 : l.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ x(w6, {
    scope: u,
    placedSide: U,
    onArrowChange: ae,
    arrowX: Z,
    arrowY: ce,
    shouldHideArrow: O
  }, /* @__PURE__ */ x(ie.div, P({
    "data-side": U,
    "data-align": te
  }, E, {
    ref: F,
    style: {
      ...E.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: W ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (c = j.hide) !== null && c !== void 0 && c.referenceHidden ? 0 : void 0
    }
  }))));
}), $6 = "PopperArrow", C6 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, S6 = /* @__PURE__ */ I(function(t, n) {
  const { __scopePopper: o, ...r } = t, a = y6($6, o), i = C6[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x("span", {
      ref: a.onArrowChange,
      style: {
        position: "absolute",
        left: a.arrowX,
        top: a.arrowY,
        [i]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[a.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[a.placedSide],
        visibility: a.shouldHideArrow ? "hidden" : void 0
      }
    }, /* @__PURE__ */ x(m6, P({}, r, {
      ref: n,
      style: {
        ...r.style,
        // ensures the element can be measured correctly (mostly for if SVG)
        display: "block"
      }
    })))
  );
});
function _6(e) {
  return e !== null;
}
const E6 = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, a, i;
    const { placement: s, rects: l, middlewareData: c } = t, d = ((n = c.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, f = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [m, g] = Wp(s), h = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[g], v = ((o = (r = c.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + f / 2, w = ((a = (i = c.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
    let y = "", C = "";
    return m === "bottom" ? (y = d ? h : `${v}px`, C = `${-p}px`) : m === "top" ? (y = d ? h : `${v}px`, C = `${l.floating.height + p}px`) : m === "right" ? (y = `${-p}px`, C = d ? h : `${w}px`) : m === "left" && (y = `${l.floating.width + p}px`, C = d ? h : `${w}px`), {
      data: {
        x: y,
        y: C
      }
    };
  }
});
function Wp(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const Ho = h6, Lr = b6, Fr = x6, P6 = S6, Yi = "rovingFocusGroup.onEntryFocus", R6 = {
  bubbles: !1,
  cancelable: !0
}, ql = "RovingFocusGroup", [Ts, jp, M6] = Ln(ql), [N6, cn] = Ve(ql, [
  M6
]), [D6, T6] = N6(ql), A6 = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ x(Ts.Provider, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(Ts.Slot, {
  scope: e.__scopeRovingFocusGroup
}, /* @__PURE__ */ x(I6, P({}, e, {
  ref: t
}))))), I6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, orientation: o, loop: r = !1, dir: a, currentTabStopId: i, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: l, onEntryFocus: c, ...u } = e, d = q(null), f = be(t, d), p = Yt(a), [m = null, g] = Ue({
    prop: i,
    defaultProp: s,
    onChange: l
  }), [h, v] = re(!1), w = ke(c), y = jp(n), C = q(!1), [_, S] = re(0);
  return le(() => {
    const E = d.current;
    if (E)
      return E.addEventListener(Yi, w), () => E.removeEventListener(Yi, w);
  }, [
    w
  ]), /* @__PURE__ */ x(D6, {
    scope: n,
    orientation: o,
    dir: p,
    loop: r,
    currentTabStopId: m,
    onItemFocus: he(
      (E) => g(E),
      [
        g
      ]
    ),
    onItemShiftTab: he(
      () => v(!0),
      []
    ),
    onFocusableItemAdd: he(
      () => S(
        (E) => E + 1
      ),
      []
    ),
    onFocusableItemRemove: he(
      () => S(
        (E) => E - 1
      ),
      []
    )
  }, /* @__PURE__ */ x(ie.div, P({
    tabIndex: h || _ === 0 ? -1 : 0,
    "data-orientation": o
  }, u, {
    ref: f,
    style: {
      outline: "none",
      ...e.style
    },
    onMouseDown: Y(e.onMouseDown, () => {
      C.current = !0;
    }),
    onFocus: Y(e.onFocus, (E) => {
      const T = !C.current;
      if (E.target === E.currentTarget && T && !h) {
        const N = new CustomEvent(Yi, R6);
        if (E.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
          const k = y().filter(
            (V) => V.focusable
          ), F = k.find(
            (V) => V.active
          ), z = k.find(
            (V) => V.id === m
          ), A = [
            F,
            z,
            ...k
          ].filter(Boolean).map(
            (V) => V.ref.current
          );
          Up(A);
        }
      }
      C.current = !1;
    }),
    onBlur: Y(
      e.onBlur,
      () => v(!1)
    )
  })));
}), O6 = "RovingFocusGroupItem", k6 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRovingFocusGroup: n, focusable: o = !0, active: r = !1, tabStopId: a, ...i } = e, s = et(), l = a || s, c = T6(O6, n), u = c.currentTabStopId === l, d = jp(n), { onFocusableItemAdd: f, onFocusableItemRemove: p } = c;
  return le(() => {
    if (o)
      return f(), () => p();
  }, [
    o,
    f,
    p
  ]), /* @__PURE__ */ x(Ts.ItemSlot, {
    scope: n,
    id: l,
    focusable: o,
    active: r
  }, /* @__PURE__ */ x(ie.span, P({
    tabIndex: u ? 0 : -1,
    "data-orientation": c.orientation
  }, i, {
    ref: t,
    onMouseDown: Y(e.onMouseDown, (m) => {
      o ? c.onItemFocus(l) : m.preventDefault();
    }),
    onFocus: Y(
      e.onFocus,
      () => c.onItemFocus(l)
    ),
    onKeyDown: Y(e.onKeyDown, (m) => {
      if (m.key === "Tab" && m.shiftKey) {
        c.onItemShiftTab();
        return;
      }
      if (m.target !== m.currentTarget)
        return;
      const g = z6(m, c.orientation, c.dir);
      if (g !== void 0) {
        m.preventDefault();
        let v = d().filter(
          (w) => w.focusable
        ).map(
          (w) => w.ref.current
        );
        if (g === "last")
          v.reverse();
        else if (g === "prev" || g === "next") {
          g === "prev" && v.reverse();
          const w = v.indexOf(m.currentTarget);
          v = c.loop ? V6(v, w + 1) : v.slice(w + 1);
        }
        setTimeout(
          () => Up(v)
        );
      }
    })
  })));
}), L6 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function F6(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function z6(e, t, n) {
  const o = F6(e.key, n);
  if (!(t === "vertical" && [
    "ArrowLeft",
    "ArrowRight"
  ].includes(o)) && !(t === "horizontal" && [
    "ArrowUp",
    "ArrowDown"
  ].includes(o)))
    return L6[o];
}
function Up(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function V6(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const zr = A6, Vr = k6, As = [
  "Enter",
  " "
], H6 = [
  "ArrowDown",
  "PageUp",
  "Home"
], Yp = [
  "ArrowUp",
  "PageDown",
  "End"
], B6 = [
  ...H6,
  ...Yp
], G6 = {
  ltr: [
    ...As,
    "ArrowRight"
  ],
  rtl: [
    ...As,
    "ArrowLeft"
  ]
}, W6 = {
  ltr: [
    "ArrowLeft"
  ],
  rtl: [
    "ArrowRight"
  ]
}, ai = "Menu", [vr, j6, U6] = Ln(ai), [uo, Hr] = Ve(ai, [
  U6,
  ln,
  cn
]), ii = ln(), Kp = cn(), [qp, zn] = uo(ai), [Y6, Br] = uo(ai), K6 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: o, dir: r, onOpenChange: a, modal: i = !0 } = e, s = ii(t), [l, c] = re(null), u = q(!1), d = ke(a), f = Yt(r);
  return le(() => {
    const p = () => {
      u.current = !0, document.addEventListener("pointerdown", m, {
        capture: !0,
        once: !0
      }), document.addEventListener("pointermove", m, {
        capture: !0,
        once: !0
      });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", p, {
      capture: !0
    }), () => {
      document.removeEventListener("keydown", p, {
        capture: !0
      }), document.removeEventListener("pointerdown", m, {
        capture: !0
      }), document.removeEventListener("pointermove", m, {
        capture: !0
      });
    };
  }, []), /* @__PURE__ */ x(Ho, s, /* @__PURE__ */ x(qp, {
    scope: t,
    open: n,
    onOpenChange: d,
    content: l,
    onContentChange: c
  }, /* @__PURE__ */ x(Y6, {
    scope: t,
    onClose: he(
      () => d(!1),
      [
        d
      ]
    ),
    isUsingKeyboardRef: u,
    dir: f,
    modal: i
  }, o)));
}, Xp = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...o } = e, r = ii(n);
  return /* @__PURE__ */ x(Lr, P({}, r, o, {
    ref: t
  }));
}), Zp = "MenuPortal", [q6, Qp] = uo(Zp, {
  forceMount: void 0
}), X6 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: o, container: r } = e, a = zn(Zp, t);
  return /* @__PURE__ */ x(q6, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ye, {
    present: n || a.open
  }, /* @__PURE__ */ x(Xa, {
    asChild: !0,
    container: r
  }, o)));
}, Vt = "MenuContent", [Z6, Xl] = uo(Vt), Q6 = /* @__PURE__ */ I((e, t) => {
  const n = Qp(Vt, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, a = zn(Vt, e.__scopeMenu), i = Br(Vt, e.__scopeMenu);
  return /* @__PURE__ */ x(vr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, /* @__PURE__ */ x(vr.Slot, {
    scope: e.__scopeMenu
  }, i.modal ? /* @__PURE__ */ x(J6, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ x(e3, P({}, r, {
    ref: t
  })))));
}), J6 = /* @__PURE__ */ I((e, t) => {
  const n = zn(Vt, e.__scopeMenu), o = q(null), r = be(t, o);
  return le(() => {
    const a = o.current;
    if (a)
      return Ja(a);
  }, []), /* @__PURE__ */ x(Zl, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: !0,
    onFocusOutside: Y(
      e.onFocusOutside,
      (a) => a.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    ),
    onDismiss: () => n.onOpenChange(!1)
  }));
}), e3 = /* @__PURE__ */ I((e, t) => {
  const n = zn(Vt, e.__scopeMenu);
  return /* @__PURE__ */ x(Zl, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    onDismiss: () => n.onOpenChange(!1)
  }));
}), Zl = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, loop: o = !1, trapFocus: r, onOpenAutoFocus: a, onCloseAutoFocus: i, disableOutsidePointerEvents: s, onEntryFocus: l, onEscapeKeyDown: c, onPointerDownOutside: u, onFocusOutside: d, onInteractOutside: f, onDismiss: p, disableOutsideScroll: m, ...g } = e, h = zn(Vt, n), v = Br(Vt, n), w = ii(n), y = Kp(n), C = j6(n), [_, S] = re(null), E = q(null), T = be(t, E, h.onContentChange), N = q(0), k = q(""), F = q(0), z = q(null), ae = q("right"), A = q(0), V = m ? Er : on, J = m ? {
    as: Bt,
    allowPinchZoom: !0
  } : void 0, H = (X) => {
    var se, ee;
    const R = k.current + X, B = C().filter(
      (fe) => !fe.disabled
    ), G = document.activeElement, W = (se = B.find(
      (fe) => fe.ref.current === G
    )) === null || se === void 0 ? void 0 : se.textValue, j = B.map(
      (fe) => fe.textValue
    ), U = w3(j, R, W), te = (ee = B.find(
      (fe) => fe.textValue === U
    )) === null || ee === void 0 ? void 0 : ee.ref.current;
    (function fe(Z) {
      k.current = Z, window.clearTimeout(N.current), Z !== "" && (N.current = window.setTimeout(
        () => fe(""),
        1e3
      ));
    })(R), te && setTimeout(
      () => te.focus()
    );
  };
  le(() => () => window.clearTimeout(N.current), []), Za();
  const K = he((X) => {
    var se, ee;
    return ae.current === ((se = z.current) === null || se === void 0 ? void 0 : se.side) && x3(X, (ee = z.current) === null || ee === void 0 ? void 0 : ee.area);
  }, []);
  return /* @__PURE__ */ x(Z6, {
    scope: n,
    searchRef: k,
    onItemEnter: he((X) => {
      K(X) && X.preventDefault();
    }, [
      K
    ]),
    onItemLeave: he((X) => {
      var se;
      K(X) || ((se = E.current) === null || se === void 0 || se.focus(), S(null));
    }, [
      K
    ]),
    onTriggerLeave: he((X) => {
      K(X) && X.preventDefault();
    }, [
      K
    ]),
    pointerGraceTimerRef: F,
    onPointerGraceIntentChange: he((X) => {
      z.current = X;
    }, [])
  }, /* @__PURE__ */ x(V, J, /* @__PURE__ */ x(qa, {
    asChild: !0,
    trapped: r,
    onMountAutoFocus: Y(a, (X) => {
      var se;
      X.preventDefault(), (se = E.current) === null || se === void 0 || se.focus();
    }),
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ x(ao, {
    asChild: !0,
    disableOutsidePointerEvents: s,
    onEscapeKeyDown: c,
    onPointerDownOutside: u,
    onFocusOutside: d,
    onInteractOutside: f,
    onDismiss: p
  }, /* @__PURE__ */ x(zr, P({
    asChild: !0
  }, y, {
    dir: v.dir,
    orientation: "vertical",
    loop: o,
    currentTabStopId: _,
    onCurrentTabStopIdChange: S,
    onEntryFocus: Y(l, (X) => {
      v.isUsingKeyboardRef.current || X.preventDefault();
    })
  }), /* @__PURE__ */ x(Fr, P({
    role: "menu",
    "aria-orientation": "vertical",
    "data-state": am(h.open),
    "data-radix-menu-content": "",
    dir: v.dir
  }, w, g, {
    ref: T,
    style: {
      outline: "none",
      ...g.style
    },
    onKeyDown: Y(g.onKeyDown, (X) => {
      const ee = X.target.closest("[data-radix-menu-content]") === X.currentTarget, R = X.ctrlKey || X.altKey || X.metaKey, B = X.key.length === 1;
      ee && (X.key === "Tab" && X.preventDefault(), !R && B && H(X.key));
      const G = E.current;
      if (X.target !== G || !B6.includes(X.key))
        return;
      X.preventDefault();
      const j = C().filter(
        (U) => !U.disabled
      ).map(
        (U) => U.ref.current
      );
      Yp.includes(X.key) && j.reverse(), v3(j);
    }),
    onBlur: Y(e.onBlur, (X) => {
      X.currentTarget.contains(X.target) || (window.clearTimeout(N.current), k.current = "");
    }),
    onPointerMove: Y(e.onPointerMove, br((X) => {
      const se = X.target, ee = A.current !== X.clientX;
      if (X.currentTarget.contains(se) && ee) {
        const R = X.clientX > A.current ? "right" : "left";
        ae.current = R, A.current = X.clientX;
      }
    }))
  })))))));
}), Jp = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ x(ie.div, P({
    role: "group"
  }, o, {
    ref: t
  }));
}), t3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ x(ie.div, P({}, o, {
    ref: t
  }));
}), Is = "MenuItem", Wu = "menu.itemSelect", Ql = /* @__PURE__ */ I((e, t) => {
  const { disabled: n = !1, onSelect: o, ...r } = e, a = q(null), i = Br(Is, e.__scopeMenu), s = Xl(Is, e.__scopeMenu), l = be(t, a), c = q(!1), u = () => {
    const d = a.current;
    if (!n && d) {
      const f = new CustomEvent(Wu, {
        bubbles: !0,
        cancelable: !0
      });
      d.addEventListener(
        Wu,
        (p) => o == null ? void 0 : o(p),
        {
          once: !0
        }
      ), Ra(d, f), f.defaultPrevented ? c.current = !1 : i.onClose();
    }
  };
  return /* @__PURE__ */ x(em, P({}, r, {
    ref: l,
    disabled: n,
    onClick: Y(e.onClick, u),
    onPointerDown: (d) => {
      var f;
      (f = e.onPointerDown) === null || f === void 0 || f.call(e, d), c.current = !0;
    },
    onPointerUp: Y(e.onPointerUp, (d) => {
      var f;
      c.current || (f = d.currentTarget) === null || f === void 0 || f.click();
    }),
    onKeyDown: Y(e.onKeyDown, (d) => {
      const f = s.searchRef.current !== "";
      n || f && d.key === " " || As.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
    })
  }));
}), em = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, disabled: o = !1, textValue: r, ...a } = e, i = Xl(Is, n), s = Kp(n), l = q(null), c = be(t, l), [u, d] = re(!1), [f, p] = re("");
  return le(() => {
    const m = l.current;
    if (m) {
      var g;
      p(((g = m.textContent) !== null && g !== void 0 ? g : "").trim());
    }
  }, [
    a.children
  ]), /* @__PURE__ */ x(vr.ItemSlot, {
    scope: n,
    disabled: o,
    textValue: r ?? f
  }, /* @__PURE__ */ x(Vr, P({
    asChild: !0
  }, s, {
    focusable: !o
  }), /* @__PURE__ */ x(ie.div, P({
    role: "menuitem",
    "data-highlighted": u ? "" : void 0,
    "aria-disabled": o || void 0,
    "data-disabled": o ? "" : void 0
  }, a, {
    ref: c,
    onPointerMove: Y(e.onPointerMove, br((m) => {
      o ? i.onItemLeave(m) : (i.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus());
    })),
    onPointerLeave: Y(e.onPointerLeave, br(
      (m) => i.onItemLeave(m)
    )),
    onFocus: Y(
      e.onFocus,
      () => d(!0)
    ),
    onBlur: Y(
      e.onBlur,
      () => d(!1)
    )
  }))));
}), n3 = /* @__PURE__ */ I((e, t) => {
  const { checked: n = !1, onCheckedChange: o, ...r } = e;
  return /* @__PURE__ */ x(nm, {
    scope: e.__scopeMenu,
    checked: n
  }, /* @__PURE__ */ x(Ql, P({
    role: "menuitemcheckbox",
    "aria-checked": La(n) ? "mixed" : n
  }, r, {
    ref: t,
    "data-state": Jl(n),
    onSelect: Y(
      r.onSelect,
      () => o == null ? void 0 : o(La(n) ? !0 : !n),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), o3 = "MenuRadioGroup", [r3, a3] = uo(o3, {
  value: void 0,
  onValueChange: () => {
  }
}), i3 = /* @__PURE__ */ I((e, t) => {
  const { value: n, onValueChange: o, ...r } = e, a = ke(o);
  return /* @__PURE__ */ x(r3, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: a
  }, /* @__PURE__ */ x(Jp, P({}, r, {
    ref: t
  })));
}), s3 = "MenuRadioItem", l3 = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...o } = e, r = a3(s3, e.__scopeMenu), a = n === r.value;
  return /* @__PURE__ */ x(nm, {
    scope: e.__scopeMenu,
    checked: a
  }, /* @__PURE__ */ x(Ql, P({
    role: "menuitemradio",
    "aria-checked": a
  }, o, {
    ref: t,
    "data-state": Jl(a),
    onSelect: Y(o.onSelect, () => {
      var i;
      return (i = r.onValueChange) === null || i === void 0 ? void 0 : i.call(r, n);
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), tm = "MenuItemIndicator", [nm, c3] = uo(tm, {
  checked: !1
}), u3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, forceMount: o, ...r } = e, a = c3(tm, n);
  return /* @__PURE__ */ x(Ye, {
    present: o || La(a.checked) || a.checked === !0
  }, /* @__PURE__ */ x(ie.span, P({}, r, {
    ref: t,
    "data-state": Jl(a.checked)
  })));
}), d3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenu: n, ...o } = e;
  return /* @__PURE__ */ x(ie.div, P({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o, {
    ref: t
  }));
}), om = "MenuSub", [f3, rm] = uo(om), p3 = (e) => {
  const { __scopeMenu: t, children: n, open: o = !1, onOpenChange: r } = e, a = zn(om, t), i = ii(t), [s, l] = re(null), [c, u] = re(null), d = ke(r);
  return le(() => (a.open === !1 && d(!1), () => d(!1)), [
    a.open,
    d
  ]), /* @__PURE__ */ x(Ho, i, /* @__PURE__ */ x(qp, {
    scope: t,
    open: o,
    onOpenChange: d,
    content: c,
    onContentChange: u
  }, /* @__PURE__ */ x(f3, {
    scope: t,
    contentId: et(),
    triggerId: et(),
    trigger: s,
    onTriggerChange: l
  }, n)));
}, Jr = "MenuSubTrigger", m3 = /* @__PURE__ */ I((e, t) => {
  const n = zn(Jr, e.__scopeMenu), o = Br(Jr, e.__scopeMenu), r = rm(Jr, e.__scopeMenu), a = Xl(Jr, e.__scopeMenu), i = q(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = a, c = {
    __scopeMenu: e.__scopeMenu
  }, u = he(() => {
    i.current && window.clearTimeout(i.current), i.current = null;
  }, []);
  return le(
    () => u,
    [
      u
    ]
  ), le(() => {
    const d = s.current;
    return () => {
      window.clearTimeout(d), l(null);
    };
  }, [
    s,
    l
  ]), /* @__PURE__ */ x(Xp, P({
    asChild: !0
  }, c), /* @__PURE__ */ x(em, P({
    id: r.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": n.open,
    "aria-controls": r.contentId,
    "data-state": am(n.open)
  }, e, {
    ref: _r(t, r.onTriggerChange),
    onClick: (d) => {
      var f;
      (f = e.onClick) === null || f === void 0 || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
    },
    onPointerMove: Y(e.onPointerMove, br((d) => {
      a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !i.current && (a.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
        n.onOpenChange(!0), u();
      }, 100));
    })),
    onPointerLeave: Y(e.onPointerLeave, br((d) => {
      var f;
      u();
      const p = (f = n.content) === null || f === void 0 ? void 0 : f.getBoundingClientRect();
      if (p) {
        var m;
        const g = (m = n.content) === null || m === void 0 ? void 0 : m.dataset.side, h = g === "right", v = h ? -5 : 5, w = p[h ? "left" : "right"], y = p[h ? "right" : "left"];
        a.onPointerGraceIntentChange({
          area: [
            // consistently within polygon bounds
            {
              x: d.clientX + v,
              y: d.clientY
            },
            {
              x: w,
              y: p.top
            },
            {
              x: y,
              y: p.top
            },
            {
              x: y,
              y: p.bottom
            },
            {
              x: w,
              y: p.bottom
            }
          ],
          side: g
        }), window.clearTimeout(s.current), s.current = window.setTimeout(
          () => a.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (a.onTriggerLeave(d), d.defaultPrevented)
          return;
        a.onPointerGraceIntentChange(null);
      }
    })),
    onKeyDown: Y(e.onKeyDown, (d) => {
      const f = a.searchRef.current !== "";
      if (!(e.disabled || f && d.key === " ") && G6[o.dir].includes(d.key)) {
        var p;
        n.onOpenChange(!0), (p = n.content) === null || p === void 0 || p.focus(), d.preventDefault();
      }
    })
  })));
}), g3 = "MenuSubContent", h3 = /* @__PURE__ */ I((e, t) => {
  const n = Qp(Vt, e.__scopeMenu), { forceMount: o = n.forceMount, ...r } = e, a = zn(Vt, e.__scopeMenu), i = Br(Vt, e.__scopeMenu), s = rm(g3, e.__scopeMenu), l = q(null), c = be(t, l);
  return /* @__PURE__ */ x(vr.Provider, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, /* @__PURE__ */ x(vr.Slot, {
    scope: e.__scopeMenu
  }, /* @__PURE__ */ x(Zl, P({
    id: s.contentId,
    "aria-labelledby": s.triggerId
  }, r, {
    ref: c,
    align: "start",
    side: i.dir === "rtl" ? "left" : "right",
    disableOutsidePointerEvents: !1,
    disableOutsideScroll: !1,
    trapFocus: !1,
    onOpenAutoFocus: (u) => {
      var d;
      i.isUsingKeyboardRef.current && ((d = l.current) === null || d === void 0 || d.focus()), u.preventDefault();
    },
    onCloseAutoFocus: (u) => u.preventDefault(),
    onFocusOutside: Y(e.onFocusOutside, (u) => {
      u.target !== s.trigger && a.onOpenChange(!1);
    }),
    onEscapeKeyDown: Y(e.onEscapeKeyDown, (u) => {
      i.onClose(), u.preventDefault();
    }),
    onKeyDown: Y(e.onKeyDown, (u) => {
      const d = u.currentTarget.contains(u.target), f = W6[i.dir].includes(u.key);
      if (d && f) {
        var p;
        a.onOpenChange(!1), (p = s.trigger) === null || p === void 0 || p.focus(), u.preventDefault();
      }
    })
  })))));
});
function am(e) {
  return e ? "open" : "closed";
}
function La(e) {
  return e === "indeterminate";
}
function Jl(e) {
  return La(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function v3(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t))
      return;
}
function b3(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
function w3(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (c) => c === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = b3(e, Math.max(a, 0));
  r.length === 1 && (i = i.filter(
    (c) => c !== n
  ));
  const l = i.find(
    (c) => c.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function y3(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, c = t[i].x, u = t[i].y;
    l > o != u > o && n < (c - s) * (o - l) / (u - l) + s && (r = !r);
  }
  return r;
}
function x3(e, t) {
  if (!t)
    return !1;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return y3(n, t);
}
function br(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const ec = K6, tc = Xp, nc = X6, oc = Q6, rc = Jp, ac = t3, ic = Ql, sc = n3, lc = i3, cc = l3, uc = u3, dc = d3, fc = p3, pc = m3, mc = h3, im = "ContextMenu", [$3, rM] = Ve(im, [
  Hr
]), dt = Hr(), [C3, sm] = $3(im), S3 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: o, dir: r, modal: a = !0 } = e, [i, s] = re(!1), l = dt(t), c = ke(o), u = he((d) => {
    s(d), c(d);
  }, [
    c
  ]);
  return /* @__PURE__ */ x(C3, {
    scope: t,
    open: i,
    onOpenChange: u,
    modal: a
  }, /* @__PURE__ */ x(ec, P({}, l, {
    dir: r,
    open: i,
    onOpenChange: u,
    modal: a
  }), n));
}, _3 = "ContextMenuTrigger", E3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, disabled: o = !1, ...r } = e, a = sm(_3, n), i = dt(n), s = q({
    x: 0,
    y: 0
  }), l = q({
    getBoundingClientRect: () => DOMRect.fromRect({
      width: 0,
      height: 0,
      ...s.current
    })
  }), c = q(0), u = he(
    () => window.clearTimeout(c.current),
    []
  ), d = (f) => {
    s.current = {
      x: f.clientX,
      y: f.clientY
    }, a.onOpenChange(!0);
  };
  return le(
    () => u,
    [
      u
    ]
  ), le(
    () => void (o && u()),
    [
      o,
      u
    ]
  ), /* @__PURE__ */ x(on, null, /* @__PURE__ */ x(tc, P({}, i, {
    virtualRef: l
  })), /* @__PURE__ */ x(ie.span, P({
    "data-state": a.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0
  }, r, {
    ref: t,
    style: {
      WebkitTouchCallout: "none",
      ...e.style
    },
    onContextMenu: o ? e.onContextMenu : Y(e.onContextMenu, (f) => {
      u(), d(f), f.preventDefault();
    }),
    onPointerDown: o ? e.onPointerDown : Y(e.onPointerDown, ea((f) => {
      u(), c.current = window.setTimeout(
        () => d(f),
        700
      );
    })),
    onPointerMove: o ? e.onPointerMove : Y(e.onPointerMove, ea(u)),
    onPointerCancel: o ? e.onPointerCancel : Y(e.onPointerCancel, ea(u)),
    onPointerUp: o ? e.onPointerUp : Y(e.onPointerUp, ea(u))
  })));
}), P3 = (e) => {
  const { __scopeContextMenu: t, ...n } = e, o = dt(t);
  return /* @__PURE__ */ x(nc, P({}, o, n));
}, R3 = "ContextMenuContent", M3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = sm(R3, n), a = dt(n), i = q(!1);
  return /* @__PURE__ */ x(oc, P({}, a, o, {
    ref: t,
    side: "right",
    sideOffset: 2,
    align: "start",
    onCloseAutoFocus: (s) => {
      var l;
      (l = e.onCloseAutoFocus) === null || l === void 0 || l.call(e, s), !s.defaultPrevented && i.current && s.preventDefault(), i.current = !1;
    },
    onInteractOutside: (s) => {
      var l;
      (l = e.onInteractOutside) === null || l === void 0 || l.call(e, s), !s.defaultPrevented && !r.modal && (i.current = !0);
    },
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), N3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(rc, P({}, r, o, {
    ref: t
  }));
}), D3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(ac, P({}, r, o, {
    ref: t
  }));
}), T3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(ic, P({}, r, o, {
    ref: t
  }));
}), A3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(sc, P({}, r, o, {
    ref: t
  }));
}), I3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(lc, P({}, r, o, {
    ref: t
  }));
}), O3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(cc, P({}, r, o, {
    ref: t
  }));
}), k3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(uc, P({}, r, o, {
    ref: t
  }));
}), L3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(dc, P({}, r, o, {
    ref: t
  }));
}), F3 = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: o, open: r, defaultOpen: a } = e, i = dt(t), [s, l] = Ue({
    prop: r,
    defaultProp: a,
    onChange: o
  });
  return /* @__PURE__ */ x(fc, P({}, i, {
    open: s,
    onOpenChange: l
  }), n);
}, z3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(pc, P({}, r, o, {
    ref: t
  }));
}), V3 = /* @__PURE__ */ I((e, t) => {
  const { __scopeContextMenu: n, ...o } = e, r = dt(n);
  return /* @__PURE__ */ x(mc, P({}, r, o, {
    ref: t,
    style: {
      ...e.style,
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function ea(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
const H3 = S3, B3 = E3, lm = P3, cm = M3, G3 = N3, um = D3, dm = T3, fm = A3, W3 = I3, pm = O3, mm = k3, gm = L3, j3 = F3, hm = z3, vm = V3, aM = H3, iM = B3, sM = G3, lM = lm, cM = j3, uM = W3, U3 = $.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ Q(
  hm,
  {
    ref: r,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ b(Ya, { className: "ml-auto h-4 w-4" })
    ]
  }
));
U3.displayName = hm.displayName;
const Y3 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  vm,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
Y3.displayName = vm.displayName;
const K3 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(lm, { children: /* @__PURE__ */ b(
  cm,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
) }));
K3.displayName = cm.displayName;
const q3 = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  dm,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
q3.displayName = dm.displayName;
const X3 = $.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ Q(
  fm,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(mm, { children: /* @__PURE__ */ b(Io, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
X3.displayName = fm.displayName;
const Z3 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  pm,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(mm, { children: /* @__PURE__ */ b(Ka, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
Z3.displayName = pm.displayName;
const Q3 = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  um,
  {
    ref: o,
    className: L(
      "px-2 py-1.5 text-sm font-semibold text-slate-950  ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Q3.displayName = um.displayName;
const J3 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  gm,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-slate-200  ", e),
    ...t
  }
));
J3.displayName = gm.displayName;
const e5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
e5.displayName = "ContextMenuShortcut";
function t5(e) {
  if (typeof document > "u")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const bm = M.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  scaleBackground: () => {
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  handleOnly: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  visible: !1,
  closeDrawer: () => {
  },
  setVisible: () => {
  },
  direction: "bottom"
}), si = () => {
  const e = M.useContext(bm);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
t5("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const n5 = typeof window < "u" ? Wa : le;
function Os(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function o5() {
  return gc(/^Mac/);
}
function r5() {
  return gc(/^iPhone/);
}
function a5() {
  return gc(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  o5() && navigator.maxTouchPoints > 1;
}
function wm() {
  return r5() || a5();
}
function gc(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Ki = typeof document < "u" && window.visualViewport;
function ju(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function ym(e) {
  for (ju(e) && (e = e.parentElement); e && !ju(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const i5 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let ta = 0, qi;
function s5(e = {}) {
  let { isDisabled: t } = e;
  n5(() => {
    if (!t)
      return ta++, ta === 1 && (wm() ? qi = c5() : qi = l5()), () => {
        ta--, ta === 0 && qi();
      };
  }, [
    t
  ]);
}
function l5() {
  return Os(xm(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function c5() {
  let e, t = 0, n = (d) => {
    e = ym(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, o = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let f = d.changedTouches[0].pageY, p = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((p <= 0 && f > t || p >= m && f < t) && d.preventDefault(), t = f);
  }, r = (d) => {
    let f = d.target;
    ks(f) && f !== document.activeElement && (d.preventDefault(), f.style.transform = "translateY(-2000px)", f.focus(), requestAnimationFrame(() => {
      f.style.transform = "";
    }));
  }, a = (d) => {
    let f = d.target;
    ks(f) && (f.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      f.style.transform = "", Ki && (Ki.height < window.innerHeight ? requestAnimationFrame(() => {
        Uu(f);
      }) : Ki.addEventListener("resize", () => Uu(f), {
        once: !0
      }));
    }));
  }, i = () => {
    window.scrollTo(0, 0);
  }, s = window.pageXOffset, l = window.pageYOffset, c = Os(xm(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = Os(Xo(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), Xo(document, "touchmove", o, {
    passive: !1,
    capture: !0
  }), Xo(document, "touchend", r, {
    passive: !1,
    capture: !0
  }), Xo(document, "focus", a, !0), Xo(window, "scroll", i));
  return () => {
    c(), u(), window.scrollTo(s, l);
  };
}
function xm(e, t, n) {
  let o = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = o;
  };
}
function Xo(e, t, n, o) {
  return e.addEventListener(t, n, o), () => {
    e.removeEventListener(t, n, o);
  };
}
function Uu(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = ym(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let o = n.getBoundingClientRect().top, r = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const i = n.getBoundingClientRect().bottom;
      a > i && (n.scrollTop += r - o);
    }
    e = n.parentElement;
  }
}
function ks(e) {
  return e instanceof HTMLInputElement && !i5.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function u5(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function d5(...e) {
  return (t) => e.forEach((n) => u5(n, t));
}
function $m(...e) {
  return $.useCallback(d5(...e), e);
}
let Zo = null;
function f5({ isOpen: e, modal: t, nested: n, hasBeenOpened: o, preventScrollRestoration: r, noBodyStyles: a }) {
  const [i, s] = M.useState(() => typeof window < "u" ? window.location.href : ""), l = M.useRef(0), c = M.useCallback(() => {
    if (Zo === null && e && !a) {
      Zo = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: d, innerHeight: f } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const p = f - window.innerHeight;
        p && l.current >= f && (document.body.style.top = `${-(l.current + p)}px`);
      }), 300);
    }
  }, [
    e
  ]), u = M.useCallback(() => {
    if (Zo !== null && !a) {
      const d = -parseInt(document.body.style.top, 10), f = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, Zo), window.requestAnimationFrame(() => {
        if (r && i !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(f, d);
      }), Zo = null;
    }
  }, [
    i
  ]);
  return M.useEffect(() => {
    function d() {
      l.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), M.useEffect(() => {
    n || !o || (e ? (!window.matchMedia("(display-mode: standalone)").matches && c(), t || window.setTimeout(() => {
      u();
    }, 500)) : u());
  }, [
    e,
    o,
    i,
    t,
    n,
    c,
    u
  ]), {
    restorePositionSetting: u
  };
}
const Cm = /* @__PURE__ */ new WeakMap();
function We(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let o = {};
  Object.entries(t).forEach(([r, a]) => {
    if (r.startsWith("--")) {
      e.style.setProperty(r, a);
      return;
    }
    o[r] = e.style[r], e.style[r] = a;
  }), !n && Cm.set(e, o);
}
function na(e, t) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let n = Cm.get(e);
  n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([o, r]) => {
    e.style[o] = r;
  }));
}
const nt = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function oa(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), o = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let r = o.match(/^matrix3d\((.+)\)$/);
  return r ? parseFloat(r[1].split(", ")[nt(t) ? 13 : 12]) : (r = o.match(/^matrix\((.+)\)$/), r ? parseFloat(r[1].split(", ")[nt(t) ? 5 : 4]) : null);
}
function p5(e) {
  return 8 * (Math.log(e + 1) - 2);
}
const Le = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Sm = 0.4;
function _m(e) {
  const t = M.useRef(e);
  return M.useEffect(() => {
    t.current = e;
  }), M.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function m5({ defaultProp: e, onChange: t }) {
  const n = M.useState(e), [o] = n, r = M.useRef(o), a = _m(t);
  return M.useEffect(() => {
    r.current !== o && (a(o), r.current = o);
  }, [
    o,
    r,
    a
  ]), n;
}
function g5({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = m5({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, i = a ? e : o, s = _m(n), l = M.useCallback((c) => {
    if (a) {
      const d = typeof c == "function" ? c(e) : c;
      d !== e && s(d);
    } else
      r(c);
  }, [
    a,
    e,
    r,
    s
  ]);
  return [
    i,
    l
  ];
}
function h5({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: o, overlayRef: r, fadeFromIndex: a, onSnapPointChange: i, direction: s = "bottom" }) {
  const [l, c] = g5({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), u = M.useMemo(() => l === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    l
  ]), d = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === l || !n, f = M.useMemo(() => n == null ? void 0 : n.findIndex((y) => y === l), [
    n,
    l
  ]), p = M.useMemo(() => {
    var y;
    return (y = n == null ? void 0 : n.map((C) => {
      const _ = typeof window < "u", S = typeof C == "string";
      let E = 0;
      if (S && (E = parseInt(C, 10)), nt(s)) {
        const N = S ? E : _ ? C * window.innerHeight : 0;
        return _ ? s === "bottom" ? window.innerHeight - N : -window.innerHeight + N : N;
      }
      const T = S ? E : _ ? C * window.innerWidth : 0;
      return _ ? s === "right" ? window.innerWidth - T : -window.innerWidth + T : T;
    })) != null ? y : [];
  }, [
    n
  ]), m = M.useMemo(() => f !== null ? p == null ? void 0 : p[f] : null, [
    p,
    f
  ]), g = M.useCallback((y) => {
    var C;
    const _ = (C = p == null ? void 0 : p.findIndex((S) => S === y)) != null ? C : null;
    i(_), We(o.current, {
      transition: `transform ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      transform: nt(s) ? `translate3d(0, ${y}px, 0)` : `translate3d(${y}px, 0, 0)`
    }), p && _ !== p.length - 1 && _ !== a ? We(r.current, {
      transition: `opacity ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      opacity: "0"
    }) : We(r.current, {
      transition: `opacity ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      opacity: "1"
    }), c(_ !== null ? n == null ? void 0 : n[_] : null);
  }, [
    o.current,
    n,
    p,
    a,
    r,
    c
  ]);
  M.useEffect(() => {
    if (l || e) {
      var y;
      const C = (y = n == null ? void 0 : n.findIndex((_) => _ === e || _ === l)) != null ? y : -1;
      p && C !== -1 && typeof p[C] == "number" && g(p[C]);
    }
  }, [
    l,
    e,
    n,
    p,
    g
  ]);
  function h({ draggedDistance: y, closeDrawer: C, velocity: _, dismissible: S }) {
    if (a === void 0)
      return;
    const E = s === "bottom" || s === "right" ? (m ?? 0) - y : (m ?? 0) + y, T = f === a - 1, N = f === 0, k = y > 0;
    if (T && We(r.current, {
      transition: `opacity ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`
    }), _ > 2 && !k) {
      S ? C() : g(p[0]);
      return;
    }
    if (_ > 2 && k && p && n) {
      g(p[n.length - 1]);
      return;
    }
    const F = p == null ? void 0 : p.reduce((ae, A) => typeof ae != "number" || typeof A != "number" ? ae : Math.abs(A - E) < Math.abs(ae - E) ? A : ae), z = nt(s) ? window.innerHeight : window.innerWidth;
    if (_ > Sm && Math.abs(y) < z * 0.4) {
      const ae = k ? 1 : -1;
      if (ae > 0 && u) {
        g(p[n.length - 1]);
        return;
      }
      if (N && ae < 0 && S && C(), f === null)
        return;
      g(p[f + ae]);
      return;
    }
    g(F);
  }
  function v({ draggedDistance: y }) {
    if (m === null)
      return;
    const C = s === "bottom" || s === "right" ? m - y : m + y;
    (s === "bottom" || s === "right") && C < p[p.length - 1] || (s === "top" || s === "left") && C > p[p.length - 1] || We(o.current, {
      transform: nt(s) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    });
  }
  function w(y, C) {
    if (!n || typeof f != "number" || !p || a === void 0)
      return null;
    const _ = f === a - 1;
    if (f >= a && C)
      return 0;
    if (_ && !C)
      return 1;
    if (!d && !_)
      return null;
    const E = _ ? f + 1 : f - 1, T = _ ? p[E] - p[E - 1] : p[E + 1] - p[E], N = y / Math.abs(T);
    return _ ? 1 - N : N;
  }
  return {
    isLastSnapPoint: u,
    activeSnapPoint: l,
    shouldFade: d,
    getPercentageDragged: w,
    setActiveSnapPoint: c,
    activeSnapPointIndex: f,
    onRelease: h,
    onDrag: v,
    snapPointsOffset: p
  };
}
const v5 = 0.25, b5 = 100, Yu = 8, Hn = 16, Ku = 26, Xi = "vaul-dragging";
function Em({ open: e, onOpenChange: t, children: n, shouldScaleBackground: o, onDrag: r, onRelease: a, snapPoints: i, nested: s = !1, setBackgroundColorOnScale: l = !0, closeThreshold: c = v5, scrollLockTimeout: u = b5, dismissible: d = !0, handleOnly: f = !1, fadeFromIndex: p = i && i.length - 1, activeSnapPoint: m, setActiveSnapPoint: g, fixed: h, modal: v = !0, onClose: w, noBodyStyles: y, direction: C = "bottom", preventScrollRestoration: _ = !0, disablePreventScroll: S = !1 }) {
  var E;
  const [T = !1, N] = M.useState(!1), [k, F] = M.useState(!1), [z, ae] = M.useState(!1), [A, V] = M.useState(!1), [J, H] = M.useState(!1), [K, X] = M.useState(!1), se = M.useRef(null), ee = M.useRef(null), R = M.useRef(null), B = M.useRef(null), G = M.useRef(null), W = M.useRef(!1), j = M.useRef(null), U = M.useRef(0), te = M.useRef(!1), fe = M.useRef(0), Z = M.useRef(null), ce = M.useRef(((E = Z.current) == null ? void 0 : E.getBoundingClientRect().height) || 0), O = M.useRef(0), ne = M.useCallback((oe) => {
    i && oe === Ee.length - 1 && (ee.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ge, activeSnapPointIndex: de, setActiveSnapPoint: Se, onRelease: ve, snapPointsOffset: Ee, onDrag: Ae, shouldFade: qe, getPercentageDragged: Be } = h5({
    snapPoints: i,
    activeSnapPointProp: m,
    setActiveSnapPointProp: g,
    drawerRef: Z,
    fadeFromIndex: p,
    overlayRef: se,
    onSnapPointChange: ne,
    direction: C
  });
  s5({
    isDisabled: !T || J || !v || K || !k || S
  });
  const { restorePositionSetting: Ze } = f5({
    isOpen: T,
    modal: v,
    nested: s,
    hasBeenOpened: k,
    preventScrollRestoration: _,
    noBodyStyles: y
  });
  function Te() {
    return (window.innerWidth - Ku) / window.innerWidth;
  }
  function Xe(oe) {
    var me;
    !d && !i || Z.current && !Z.current.contains(oe.target) || (ce.current = ((me = Z.current) == null ? void 0 : me.getBoundingClientRect().height) || 0, H(!0), R.current = /* @__PURE__ */ new Date(), wm() && window.addEventListener("touchend", () => W.current = !1, {
      once: !0
    }), oe.target.setPointerCapture(oe.pointerId), U.current = nt(C) ? oe.clientY : oe.clientX);
  }
  function Ke(oe, me) {
    var we;
    let ye = oe;
    const Me = (we = window.getSelection()) == null ? void 0 : we.toString(), _e = Z.current ? oa(Z.current, C) : null, Qe = /* @__PURE__ */ new Date();
    if (ye.hasAttribute("data-vaul-no-drag") || ye.closest("[data-vaul-no-drag]"))
      return !1;
    if (C === "right" || C === "left")
      return !0;
    if (ee.current && Qe.getTime() - ee.current.getTime() < 500)
      return !1;
    if (_e !== null && (C === "bottom" ? _e > 0 : _e < 0))
      return !0;
    if (Me && Me.length > 0)
      return !1;
    if (G.current && Qe.getTime() - G.current.getTime() < u && _e === 0 || me)
      return G.current = Qe, !1;
    for (; ye; ) {
      if (ye.scrollHeight > ye.clientHeight) {
        if (ye.scrollTop !== 0)
          return G.current = /* @__PURE__ */ new Date(), !1;
        if (ye.getAttribute("role") === "dialog")
          return !0;
      }
      ye = ye.parentNode;
    }
    return !0;
  }
  function Dt(oe) {
    if (Z.current && J) {
      const me = C === "bottom" || C === "right" ? 1 : -1, we = (U.current - (nt(C) ? oe.clientY : oe.clientX)) * me, ye = we > 0, Me = i && !d && !ye;
      if (Me && de === 0)
        return;
      const _e = Math.abs(we), Qe = document.querySelector("[vaul-drawer-wrapper]");
      let Tt = _e / ce.current;
      const kt = Be(_e, ye);
      if (kt !== null && (Tt = kt), Me && Tt >= 1 || !W.current && !Ke(oe.target, ye))
        return;
      if (Z.current.classList.add(Xi), W.current = !0, We(Z.current, {
        transition: "none"
      }), We(se.current, {
        transition: "none"
      }), i && Ae({
        draggedDistance: we
      }), ye && !i) {
        const Qt = p5(we), Vn = Math.min(Qt * -1, 0) * me;
        We(Z.current, {
          transform: nt(C) ? `translate3d(0, ${Vn}px, 0)` : `translate3d(${Vn}px, 0, 0)`
        });
        return;
      }
      const Sn = 1 - Tt;
      if ((qe || p && de === p - 1) && (r == null || r(oe, Tt), We(se.current, {
        opacity: `${Sn}`,
        transition: "none"
      }, !0)), Qe && se.current && o) {
        const Qt = Math.min(Te() + Tt * (1 - Te()), 1), Vn = 8 - Tt * 8, jr = Math.max(0, 14 - Tt * 14);
        We(Qe, {
          borderRadius: `${Vn}px`,
          transform: nt(C) ? `scale(${Qt}) translate3d(0, ${jr}px, 0)` : `scale(${Qt}) translate3d(${jr}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!i) {
        const Qt = _e * me;
        We(Z.current, {
          transform: nt(C) ? `translate3d(0, ${Qt}px, 0)` : `translate3d(${Qt}px, 0, 0)`
        });
      }
    }
  }
  M.useEffect(() => () => {
    Fe(!1), Ze();
  }, []), M.useEffect(() => {
    var oe;
    function me() {
      if (!Z.current)
        return;
      const we = document.activeElement;
      if (ks(we) || te.current) {
        var ye;
        const Me = ((ye = window.visualViewport) == null ? void 0 : ye.height) || 0;
        let _e = window.innerHeight - Me;
        const Qe = Z.current.getBoundingClientRect().height || 0;
        O.current || (O.current = Qe);
        const Tt = Z.current.getBoundingClientRect().top;
        if (Math.abs(fe.current - _e) > 60 && (te.current = !te.current), i && i.length > 0 && Ee && de) {
          const kt = Ee[de] || 0;
          _e += kt;
        }
        if (fe.current = _e, Qe > Me || te.current) {
          const kt = Z.current.getBoundingClientRect().height;
          let Sn = kt;
          kt > Me && (Sn = Me - Ku), h ? Z.current.style.height = `${kt - Math.max(_e, 0)}px` : Z.current.style.height = `${Math.max(Sn, Me - Tt)}px`;
        } else
          Z.current.style.height = `${O.current}px`;
        i && i.length > 0 && !te.current ? Z.current.style.bottom = "0px" : Z.current.style.bottom = `${Math.max(_e, 0)}px`;
      }
    }
    return (oe = window.visualViewport) == null || oe.addEventListener("resize", me), () => {
      var we;
      return (we = window.visualViewport) == null ? void 0 : we.removeEventListener("resize", me);
    };
  }, [
    de,
    i,
    Ee
  ]);
  function rt() {
    Z.current && (xt(), w == null || w(), We(Z.current, {
      transform: nt(C) ? `translate3d(0, ${C === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${C === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`
    }), We(se.current, {
      opacity: "0",
      transition: `opacity ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`
    }), Fe(!1), setTimeout(() => {
      ae(!1), N(!1);
    }, 300), setTimeout(() => {
      i && Se(i[0]);
    }, Le.DURATION * 1e3));
  }
  M.useEffect(() => {
    if (!T && o) {
      const oe = setTimeout(() => {
        na(document.body);
      }, 200);
      return () => clearTimeout(oe);
    }
  }, [
    T,
    o
  ]), M.useLayoutEffect(() => {
    e ? (N(!0), F(!0)) : rt();
  }, [
    e
  ]), M.useEffect(() => {
    A && (t == null || t(T));
  }, [
    T
  ]), M.useEffect(() => {
    V(!0);
  }, []);
  function ot() {
    if (!Z.current)
      return;
    const oe = document.querySelector("[vaul-drawer-wrapper]"), me = oa(Z.current, C);
    We(Z.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`
    }), We(se.current, {
      transition: `opacity ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      opacity: "1"
    }), o && me && me > 0 && T && We(oe, {
      borderRadius: `${Yu}px`,
      overflow: "hidden",
      ...nt(C) ? {
        transform: `scale(${Te()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Te()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Le.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Le.EASE.join(",")})`
    }, !0);
  }
  function xt() {
    !J || !Z.current || (Z.current.classList.remove(Xi), W.current = !1, H(!1), B.current = /* @__PURE__ */ new Date());
  }
  function mt(oe) {
    if (!J || !Z.current)
      return;
    Z.current.classList.remove(Xi), W.current = !1, H(!1), B.current = /* @__PURE__ */ new Date();
    const me = oa(Z.current, C);
    if (!Ke(oe.target, !1) || !me || Number.isNaN(me) || R.current === null)
      return;
    const we = B.current.getTime() - R.current.getTime(), ye = U.current - (nt(C) ? oe.clientY : oe.clientX), Me = Math.abs(ye) / we;
    if (Me > 0.05 && (X(!0), setTimeout(() => {
      X(!1);
    }, 200)), i) {
      ve({
        draggedDistance: ye * (C === "bottom" || C === "right" ? 1 : -1),
        closeDrawer: rt,
        velocity: Me,
        dismissible: d
      }), a == null || a(oe, !0);
      return;
    }
    if (C === "bottom" || C === "right" ? ye > 0 : ye < 0) {
      ot(), a == null || a(oe, !0);
      return;
    }
    if (Me > Sm) {
      rt(), a == null || a(oe, !1);
      return;
    }
    var _e;
    const Qe = Math.min((_e = Z.current.getBoundingClientRect().height) != null ? _e : 0, window.innerHeight);
    if (me >= Qe * c) {
      rt(), a == null || a(oe, !1);
      return;
    }
    a == null || a(oe, !0), ot();
  }
  M.useEffect(() => {
    T && (We(document.documentElement, {
      scrollBehavior: "auto"
    }), ee.current = /* @__PURE__ */ new Date(), Fe(!0));
  }, [
    T
  ]), M.useEffect(() => {
    if (Z.current && z) {
      var oe;
      const me = Z == null || (oe = Z.current) == null ? void 0 : oe.querySelectorAll("*");
      me == null || me.forEach((we) => {
        const ye = we;
        (ye.scrollHeight > ye.clientHeight || ye.scrollWidth > ye.clientWidth) && ye.classList.add("vaul-scrollable");
      });
    }
  }, [
    z
  ]);
  function Fe(oe) {
    const me = document.querySelector("[vaul-drawer-wrapper]");
    !me || !o || (oe ? (l && (y || (We(document.body, {
      background: document.body.style.backgroundColor || document.body.style.background
    }), We(document.body, {
      background: "black"
    }, !0))), We(me, {
      borderRadius: `${Yu}px`,
      overflow: "hidden",
      ...nt(C) ? {
        transform: `scale(${Te()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Te()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Le.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Le.EASE.join(",")})`
    })) : (na(me, "overflow"), na(me, "transform"), na(me, "borderRadius"), We(me, {
      transitionProperty: "transform, border-radius",
      transitionDuration: `${Le.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${Le.EASE.join(",")})`
    })));
  }
  function ze(oe) {
    const me = oe ? (window.innerWidth - Hn) / window.innerWidth : 1, we = oe ? -Hn : 0;
    j.current && window.clearTimeout(j.current), We(Z.current, {
      transition: `transform ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      transform: `scale(${me}) translate3d(0, ${we}px, 0)`
    }), !oe && Z.current && (j.current = setTimeout(() => {
      const ye = oa(Z.current, C);
      We(Z.current, {
        transition: "none",
        transform: nt(C) ? `translate3d(0, ${ye}px, 0)` : `translate3d(${ye}px, 0, 0)`
      });
    }, 500));
  }
  function gt(oe, me) {
    if (me < 0)
      return;
    const we = nt(C) ? window.innerHeight : window.innerWidth, ye = (we - Hn) / we, Me = ye + me * (1 - ye), _e = -Hn + me * Hn;
    We(Z.current, {
      transform: nt(C) ? `scale(${Me}) translate3d(0, ${_e}px, 0)` : `scale(${Me}) translate3d(${_e}px, 0, 0)`,
      transition: "none"
    });
  }
  function Zt(oe, me) {
    const we = nt(C) ? window.innerHeight : window.innerWidth, ye = me ? (we - Hn) / we : 1, Me = me ? -Hn : 0;
    me && We(Z.current, {
      transition: `transform ${Le.DURATION}s cubic-bezier(${Le.EASE.join(",")})`,
      transform: nt(C) ? `scale(${ye}) translate3d(0, ${Me}px, 0)` : `scale(${ye}) translate3d(${Me}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ M.createElement(Pr, {
    modal: v,
    onOpenChange: (oe) => {
      if (e !== void 0) {
        t == null || t(oe);
        return;
      }
      oe ? (F(!0), N(oe)) : rt();
    },
    open: T
  }, /* @__PURE__ */ M.createElement(bm.Provider, {
    value: {
      visible: z,
      activeSnapPoint: ge,
      snapPoints: i,
      setActiveSnapPoint: Se,
      drawerRef: Z,
      overlayRef: se,
      scaleBackground: Fe,
      onOpenChange: t,
      onPress: Xe,
      setVisible: ae,
      onRelease: mt,
      onDrag: Dt,
      dismissible: d,
      handleOnly: f,
      isOpen: T,
      isDragging: J,
      shouldFade: qe,
      closeDrawer: rt,
      onNestedDrag: gt,
      onNestedOpenChange: ze,
      onNestedRelease: Zt,
      keyboardIsOpen: te,
      openProp: e,
      modal: v,
      snapPointsOffset: Ee,
      direction: C
    }
  }, n));
}
const w5 = 250, y5 = 120, Pm = /* @__PURE__ */ M.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, o) {
  const { visible: r, closeDrawer: a, isDragging: i, snapPoints: s, activeSnapPoint: l, setActiveSnapPoint: c, dismissible: u, handleOnly: d, onPress: f, onDrag: p } = si(), m = M.useRef(null), g = M.useRef(!1);
  function h() {
    if (g.current) {
      y();
      return;
    }
    window.setTimeout(() => {
      v();
    }, y5);
  }
  function v() {
    if (i || e || g.current) {
      y();
      return;
    }
    if (y(), (!s || s.length === 0) && u) {
      a();
      return;
    }
    if (l === s[s.length - 1] && u) {
      a();
      return;
    }
    const _ = s.findIndex((E) => E === l);
    if (_ === -1)
      return;
    const S = s[_ + 1];
    c(S);
  }
  function w() {
    m.current = window.setTimeout(() => {
      g.current = !0;
    }, w5);
  }
  function y() {
    window.clearTimeout(m.current), g.current = !1;
  }
  return /* @__PURE__ */ M.createElement("div", {
    onClick: h,
    onDoubleClick: () => {
      g.current = !0, a();
    },
    onPointerCancel: y,
    onPointerDown: (C) => {
      d && f(C), w();
    },
    onPointerMove: (C) => {
      d && p(C);
    },
    // onPointerUp is already handled by the content component
    ref: o,
    "vaul-drawer-visible": r ? "true" : "false",
    "vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ M.createElement("span", {
    "vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
Pm.displayName = "Drawer.Handle";
const Rm = /* @__PURE__ */ M.forwardRef(function({ children: e, ...t }, n) {
  const { overlayRef: o, snapPoints: r, onRelease: a, shouldFade: i, isOpen: s, visible: l } = si(), c = $m(n, o), u = r && r.length > 0;
  return /* @__PURE__ */ M.createElement(io, {
    onMouseUp: a,
    ref: c,
    "vaul-drawer-visible": l ? "true" : "false",
    "vaul-overlay": "",
    "vaul-snap-points": s && u ? "true" : "false",
    "vaul-snap-points-overlay": s && i ? "true" : "false",
    ...t
  });
});
Rm.displayName = "Drawer.Overlay";
const Mm = /* @__PURE__ */ M.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: t, onAnimationEnd: n, style: o, ...r }, a) {
  const { drawerRef: i, onPress: s, onRelease: l, onDrag: c, dismissible: u, keyboardIsOpen: d, snapPointsOffset: f, visible: p, closeDrawer: m, modal: g, openProp: h, onOpenChange: v, setVisible: w, handleOnly: y, direction: C } = si(), _ = $m(a, i), S = M.useRef(null), E = M.useRef(!1), T = (N, k, F = 0) => {
    if (E.current)
      return !0;
    const z = Math.abs(N.y), ae = Math.abs(N.x), A = ae > z, V = [
      "bottom",
      "right"
    ].includes(k) ? 1 : -1;
    if (k === "left" || k === "right") {
      if (!(N.x * V < 0) && ae >= 0 && ae <= F)
        return A;
    } else if (!(N.y * V < 0) && z >= 0 && z <= F)
      return !A;
    return E.current = !0, !0;
  };
  return M.useEffect(() => {
    w(!0);
  }, []), /* @__PURE__ */ M.createElement(so, {
    "vaul-drawer": "",
    "vaul-drawer-direction": C,
    "vaul-drawer-visible": p ? "true" : "false",
    ...r,
    ref: _,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...o
    } : o,
    onOpenAutoFocus: (N) => {
      if (e)
        e(N);
      else {
        var k;
        N.preventDefault(), (k = i.current) == null || k.focus();
      }
    },
    onPointerDown: (N) => {
      y || (r.onPointerDown == null || r.onPointerDown.call(r, N), S.current = {
        x: N.clientX,
        y: N.clientY
      }, s(N));
    },
    onPointerDownOutside: (N) => {
      if (t == null || t(N), !g || N.defaultPrevented) {
        N.preventDefault();
        return;
      }
      d.current && (d.current = !1), N.preventDefault(), v == null || v(!1), !(!u || h !== void 0) && m();
    },
    onFocusOutside: (N) => {
      if (!g) {
        N.preventDefault();
        return;
      }
    },
    onEscapeKeyDown: (N) => {
      if (!g) {
        N.preventDefault();
        return;
      }
    },
    onPointerMove: (N) => {
      if (y || (r.onPointerMove == null || r.onPointerMove.call(r, N), !S.current))
        return;
      const k = N.clientY - S.current.y, F = N.clientX - S.current.x, z = N.pointerType === "touch" ? 10 : 2;
      T({
        x: F,
        y: k
      }, C, z) ? c(N) : (Math.abs(F) > z || Math.abs(k) > z) && (S.current = null);
    },
    onPointerUp: (N) => {
      r.onPointerUp == null || r.onPointerUp.call(r, N), S.current = null, E.current = !1, l(N);
    }
  });
});
Mm.displayName = "Drawer.Content";
function x5({ onDrag: e, onOpenChange: t, ...n }) {
  const { onNestedDrag: o, onNestedOpenChange: r, onNestedRelease: a } = si();
  if (!o)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return /* @__PURE__ */ M.createElement(Em, {
    nested: !0,
    onClose: () => {
      r(!1);
    },
    onDrag: (i, s) => {
      o(i, s), e == null || e(i, s);
    },
    onOpenChange: (i) => {
      i && r(i), t == null || t(i);
    },
    onRelease: a,
    ...n
  });
}
const qt = {
  Root: Em,
  NestedRoot: x5,
  Content: Mm,
  Handle: Pm,
  Overlay: Rm,
  Trigger: ei,
  Portal: Rr,
  Close: lo,
  Title: Oo,
  Description: ko
}, $5 = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ b(
  qt.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
$5.displayName = "Drawer";
const dM = qt.Trigger, C5 = qt.Portal, fM = qt.Close, Nm = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  qt.Overlay,
  {
    ref: n,
    className: L("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
Nm.displayName = qt.Overlay.displayName;
const S5 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(C5, { children: [
  /* @__PURE__ */ b(Nm, {}),
  /* @__PURE__ */ Q(
    qt.Content,
    {
      ref: o,
      className: L(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-slate-200 bg-white    ",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ b("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-slate-100  " }),
        t
      ]
    }
  )
] }));
S5.displayName = "DrawerContent";
const _5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
_5.displayName = "DrawerHeader";
const E5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
E5.displayName = "DrawerFooter";
const P5 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  qt.Title,
  {
    ref: n,
    className: L(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
P5.displayName = qt.Title.displayName;
const R5 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  qt.Description,
  {
    ref: n,
    className: L("text-sm text-slate-500  ", e),
    ...t
  }
));
R5.displayName = qt.Description.displayName;
const Dm = "DropdownMenu", [M5, pM] = Ve(Dm, [
  Hr
]), ft = Hr(), [N5, Tm] = M5(Dm), D5 = (e) => {
  const { __scopeDropdownMenu: t, children: n, dir: o, open: r, defaultOpen: a, onOpenChange: i, modal: s = !0 } = e, l = ft(t), c = q(null), [u = !1, d] = Ue({
    prop: r,
    defaultProp: a,
    onChange: i
  });
  return /* @__PURE__ */ x(N5, {
    scope: t,
    triggerId: et(),
    triggerRef: c,
    contentId: et(),
    open: u,
    onOpenChange: d,
    onOpenToggle: he(
      () => d(
        (f) => !f
      ),
      [
        d
      ]
    ),
    modal: s
  }, /* @__PURE__ */ x(ec, P({}, l, {
    open: u,
    onOpenChange: d,
    dir: o,
    modal: s
  }), n));
}, T5 = "DropdownMenuTrigger", Am = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, disabled: o = !1, ...r } = e, a = Tm(T5, n), i = ft(n);
  return /* @__PURE__ */ x(tc, P({
    asChild: !0
  }, i), /* @__PURE__ */ x(ie.button, P({
    type: "button",
    id: a.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": a.open,
    "aria-controls": a.open ? a.contentId : void 0,
    "data-state": a.open ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: _r(t, a.triggerRef),
    onPointerDown: Y(e.onPointerDown, (s) => {
      !o && s.button === 0 && s.ctrlKey === !1 && (a.onOpenToggle(), a.open || s.preventDefault());
    }),
    onKeyDown: Y(e.onKeyDown, (s) => {
      o || ([
        "Enter",
        " "
      ].includes(s.key) && a.onOpenToggle(), s.key === "ArrowDown" && a.onOpenChange(!0), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(s.key) && s.preventDefault());
    })
  })));
}), A5 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, o = ft(t);
  return /* @__PURE__ */ x(nc, P({}, o, n));
}, I5 = "DropdownMenuContent", O5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = Tm(I5, n), a = ft(n), i = q(!1);
  return /* @__PURE__ */ x(oc, P({
    id: r.contentId,
    "aria-labelledby": r.triggerId
  }, a, o, {
    ref: t,
    onCloseAutoFocus: Y(e.onCloseAutoFocus, (s) => {
      var l;
      i.current || (l = r.triggerRef.current) === null || l === void 0 || l.focus(), i.current = !1, s.preventDefault();
    }),
    onInteractOutside: Y(e.onInteractOutside, (s) => {
      const l = s.detail.originalEvent, c = l.button === 0 && l.ctrlKey === !0, u = l.button === 2 || c;
      (!r.modal || u) && (i.current = !0);
    }),
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), k5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(rc, P({}, r, o, {
    ref: t
  }));
}), L5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(ac, P({}, r, o, {
    ref: t
  }));
}), F5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(ic, P({}, r, o, {
    ref: t
  }));
}), z5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(sc, P({}, r, o, {
    ref: t
  }));
}), V5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(lc, P({}, r, o, {
    ref: t
  }));
}), H5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(cc, P({}, r, o, {
    ref: t
  }));
}), B5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(uc, P({}, r, o, {
    ref: t
  }));
}), G5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(dc, P({}, r, o, {
    ref: t
  }));
}), W5 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: o, onOpenChange: r, defaultOpen: a } = e, i = ft(t), [s = !1, l] = Ue({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(fc, P({}, i, {
    open: s,
    onOpenChange: l
  }), n);
}, j5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(pc, P({}, r, o, {
    ref: t
  }));
}), U5 = /* @__PURE__ */ I((e, t) => {
  const { __scopeDropdownMenu: n, ...o } = e, r = ft(n);
  return /* @__PURE__ */ x(mc, P({}, r, o, {
    ref: t,
    style: {
      ...e.style,
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), Y5 = D5, K5 = Am, Im = A5, Om = O5, q5 = k5, km = L5, Lm = F5, Fm = z5, X5 = V5, zm = H5, Vm = B5, Hm = G5, Z5 = W5, Bm = j5, Gm = U5, Wm = Y5, Q5 = K5, mM = q5, gM = Im, J5 = Z5, hM = X5, jm = $.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ Q(
  Bm,
  {
    ref: r,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100  ",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ b(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          children: /* @__PURE__ */ b(
            "path",
            {
              d: "M8.41421 8.00006L6.29289 5.87874C5.90237 5.48821 5.90237 4.85505 6.29289 4.46452C6.68342 4.074 7.31658 4.074 7.70711 4.46452L10.5355 7.29295C10.9261 7.68348 10.9261 8.31664 10.5355 8.70716L7.70711 11.5356C7.31658 11.9261 6.68342 11.9261 6.29289 11.5356C5.90237 11.1451 5.90237 10.5119 6.29289 10.1214L8.41421 8.00006Z",
              fill: "currentColor"
            }
          )
        }
      )
    ]
  }
));
jm.displayName = Bm.displayName;
const Um = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Gm,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
Um.displayName = Gm.displayName;
const hc = $.forwardRef(({ className: e, sideOffset: t = 4, ...n }, o) => /* @__PURE__ */ b(Im, { children: /* @__PURE__ */ b(
  Om,
  {
    ref: o,
    sideOffset: t,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...n
  }
) }));
hc.displayName = Om.displayName;
const eS = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  Lm,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
eS.displayName = Lm.displayName;
const Ym = $.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ Q(
  Fm,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(Vm, { children: /* @__PURE__ */ b(Io, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Ym.displayName = Fm.displayName;
const tS = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  zm,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(Vm, { children: /* @__PURE__ */ b(Ka, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
tS.displayName = zm.displayName;
const Km = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  km,
  {
    ref: o,
    className: L(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Km.displayName = km.displayName;
const qm = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Hm,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-slate-100  ", e),
    ...t
  }
));
qm.displayName = Hm.displayName;
const nS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: L("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
nS.displayName = "DropdownMenuShortcut";
var oS = (e) => e.type === "checkbox", rS = (e) => e instanceof Date, Xm = (e) => e == null;
const aS = (e) => typeof e == "object";
var Bo = (e) => !Xm(e) && !Array.isArray(e) && aS(e) && !rS(e), iS = (e) => Bo(e) && e.target ? oS(e.target) ? e.target.checked : e.target.value : e, sS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, lS = (e, t) => e.has(sS(t)), cS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Bo(t) && t.hasOwnProperty("isPrototypeOf");
}, uS = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function vc(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(uS && (e instanceof Blob || e instanceof FileList)) && (n || Bo(e)))
    if (t = n ? [] : {}, !n && !cS(e))
      t = e;
    else
      for (const o in e)
        e.hasOwnProperty(o) && (t[o] = vc(e[o]));
  else
    return e;
  return t;
}
var Zm = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Ls = (e) => e === void 0, st = (e, t, n) => {
  if (!t || !Bo(e))
    return n;
  const o = Zm(t.split(/[,[\].]+?/)).reduce((r, a) => Xm(r) ? r : r[a], e);
  return Ls(o) || o === e ? Ls(e[t]) ? n : e[t] : o;
}, qu = (e) => typeof e == "boolean";
const Xu = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Zu = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Qm = M.createContext(null), li = () => M.useContext(Qm), dS = (e) => {
  const { children: t, ...n } = e;
  return M.createElement(Qm.Provider, { value: n }, t);
};
var fS = (e, t, n, o = !0) => {
  const r = {
    defaultValues: t._defaultValues
  };
  for (const a in e)
    Object.defineProperty(r, a, {
      get: () => {
        const i = a;
        return t._proxyFormState[i] !== Zu.all && (t._proxyFormState[i] = !o || Zu.all), n && (n[i] = !0), e[i];
      }
    });
  return r;
}, pS = (e) => Bo(e) && !Object.keys(e).length, mS = (e, t, n, o) => {
  n(e);
  const { name: r, ...a } = e;
  return pS(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((i) => t[i] === !o);
}, gS = (e) => Array.isArray(e) ? e : [e], Jm = (e, t, n) => !e || !t || e === t || gS(e).some((o) => o && (n ? o === t : o.startsWith(t) || t.startsWith(o)));
function eg(e) {
  const t = M.useRef(e);
  t.current = e, M.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function hS(e) {
  const t = li(), { control: n = t.control, disabled: o, name: r, exact: a } = e || {}, [i, s] = M.useState(n._formState), l = M.useRef(!0), c = M.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = M.useRef(r);
  return u.current = r, eg({
    disabled: o,
    next: (d) => l.current && Jm(u.current, d.name, a) && mS(d, c.current, n._updateFormState) && s({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), M.useEffect(() => (l.current = !0, c.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), fS(i, n, c.current, !1);
}
var vS = (e) => typeof e == "string", bS = (e, t, n, o, r) => vS(e) ? st(n, e, r) : Array.isArray(e) ? e.map((a) => st(n, a)) : n;
function wS(e) {
  const t = li(), { control: n = t.control, name: o, defaultValue: r, disabled: a, exact: i } = e || {}, s = M.useRef(o);
  s.current = o, eg({
    disabled: a,
    subject: n._subjects.values,
    next: (u) => {
      Jm(s.current, u.name, i) && c(vc(bS(s.current, n._names, u.values || n._formValues, !1, r)));
    }
  });
  const [l, c] = M.useState(n._getWatch(o, r));
  return M.useEffect(() => n._removeUnmounted()), l;
}
var yS = (e) => /^\w*$/.test(e), xS = (e) => Zm(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qu = (e, t, n) => {
  let o = -1;
  const r = yS(t) ? [t] : xS(t), a = r.length, i = a - 1;
  for (; ++o < a; ) {
    const s = r[o];
    let l = n;
    if (o !== i) {
      const c = e[s];
      l = Bo(c) || Array.isArray(c) ? c : isNaN(+r[o + 1]) ? {} : [];
    }
    e[s] = l, e = e[s];
  }
  return e;
};
function $S(e) {
  const t = li(), { name: n, disabled: o, control: r = t.control, shouldUnregister: a } = e, i = lS(r._names.array, n), s = wS({
    control: r,
    name: n,
    defaultValue: st(r._formValues, n, st(r._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = hS({
    control: r,
    name: n
  }), c = M.useRef(r.register(n, {
    ...e.rules,
    value: s,
    ...qu(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return M.useEffect(() => {
    const u = r._options.shouldUnregister || a, d = (f, p) => {
      const m = st(r._fields, f);
      m && (m._f.mount = p);
    };
    if (d(n, !0), u) {
      const f = vc(st(r._options.defaultValues, n));
      Qu(r._defaultValues, n, f), Ls(st(r._formValues, n)) && Qu(r._formValues, n, f);
    }
    return () => {
      (i ? u && !r._state.action : u) ? r.unregister(n) : d(n, !1);
    };
  }, [n, r, i, a]), M.useEffect(() => {
    st(r._fields, n) && r._updateDisabledField({
      disabled: o,
      fields: r._fields,
      name: n,
      value: st(r._fields, n)._f.value
    });
  }, [o, n, r]), {
    field: {
      name: n,
      value: s,
      ...qu(o) || l.disabled ? { disabled: l.disabled || o } : {},
      onChange: M.useCallback((u) => c.current.onChange({
        target: {
          value: iS(u),
          name: n
        },
        type: Xu.CHANGE
      }), [n]),
      onBlur: M.useCallback(() => c.current.onBlur({
        target: {
          value: st(r._formValues, n),
          name: n
        },
        type: Xu.BLUR
      }), [n, r]),
      ref: (u) => {
        const d = st(r._fields, n);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (f) => u.setCustomValidity(f),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!st(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!st(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!st(l.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!st(l.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => st(l.errors, n)
      }
    })
  };
}
const ba = (e) => e.render($S(e)), CS = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ x(ie.label, P({}, e, {
  ref: t,
  onMouseDown: (n) => {
    var o;
    (o = e.onMouseDown) === null || o === void 0 || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault();
  }
}))), tg = CS, SS = co(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ng = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  tg,
  {
    ref: n,
    className: L(SS(), e),
    ...t
  }
));
ng.displayName = tg.displayName;
const vM = dS, og = $.createContext(
  {}
), bM = ({
  ...e
}) => /* @__PURE__ */ b(og.Provider, { value: { name: e.name }, children: /* @__PURE__ */ b(ba, { ...e }) }), ci = () => {
  const e = $.useContext(og), t = $.useContext(rg), { getFieldState: n, formState: o } = li(), r = n(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...r
  };
}, rg = $.createContext(
  {}
), wa = $.forwardRef(({ className: e, ...t }, n) => {
  const o = $.useId();
  return /* @__PURE__ */ b(rg.Provider, { value: { id: o }, children: /* @__PURE__ */ b("div", { ref: n, className: L("space-y-2", e), ...t }) });
});
wa.displayName = "FormItem";
const ya = $.forwardRef(({ className: e, ...t }, n) => {
  const { error: o, formItemId: r } = ci();
  return /* @__PURE__ */ b(
    ng,
    {
      ref: n,
      className: L(o && "text-red-500  ", "font-semibold", e),
      htmlFor: r,
      ...t
    }
  );
});
ya.displayName = "FormLabel";
const xa = $.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: o, formDescriptionId: r, formMessageId: a } = ci();
  return /* @__PURE__ */ b(
    Bt,
    {
      ref: t,
      id: o,
      "aria-describedby": n ? `${r} ${a}` : `${r}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
xa.displayName = "FormControl";
const _S = $.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: o } = ci();
  return /* @__PURE__ */ b(
    "p",
    {
      ref: n,
      id: o,
      className: L("text-sm text-slate-500  ", e),
      ...t
    }
  );
});
_S.displayName = "FormDescription";
const ES = $.forwardRef(({ className: e, children: t, ...n }, o) => {
  const { error: r, formMessageId: a } = ci(), i = r ? String(r == null ? void 0 : r.message) : t;
  return i ? /* @__PURE__ */ b(
    "p",
    {
      ref: o,
      id: a,
      className: L("text-sm font-medium text-red-500  ", e),
      ...n,
      children: i
    }
  ) : null;
});
ES.displayName = "FormMessage";
let Zi;
const ag = "HoverCard", [ig, wM] = Ve(ag, [
  ln
]), bc = ln(), [PS, wc] = ig(ag), RS = (e) => {
  const { __scopeHoverCard: t, children: n, open: o, defaultOpen: r, onOpenChange: a, openDelay: i = 700, closeDelay: s = 300 } = e, l = bc(t), c = q(0), u = q(0), d = q(!1), f = q(!1), [p = !1, m] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  }), g = he(() => {
    clearTimeout(u.current), c.current = window.setTimeout(
      () => m(!0),
      i
    );
  }, [
    i,
    m
  ]), h = he(() => {
    clearTimeout(c.current), !d.current && !f.current && (u.current = window.setTimeout(
      () => m(!1),
      s
    ));
  }, [
    s,
    m
  ]), v = he(
    () => m(!1),
    [
      m
    ]
  );
  return le(() => () => {
    clearTimeout(c.current), clearTimeout(u.current);
  }, []), /* @__PURE__ */ x(PS, {
    scope: t,
    open: p,
    onOpenChange: m,
    onOpen: g,
    onClose: h,
    onDismiss: v,
    hasSelectionRef: d,
    isPointerDownOnContentRef: f
  }, /* @__PURE__ */ x(Ho, l, n));
}, MS = "HoverCardTrigger", NS = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, ...o } = e, r = wc(MS, n), a = bc(n);
  return /* @__PURE__ */ x(Lr, P({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.a, P({
    "data-state": r.open ? "open" : "closed"
  }, o, {
    ref: t,
    onPointerEnter: Y(e.onPointerEnter, Fa(r.onOpen)),
    onPointerLeave: Y(e.onPointerLeave, Fa(r.onClose)),
    onFocus: Y(e.onFocus, r.onOpen),
    onBlur: Y(e.onBlur, r.onClose),
    onTouchStart: Y(
      e.onTouchStart,
      (i) => i.preventDefault()
    )
  })));
}), DS = "HoverCardPortal", [yM, TS] = ig(DS, {
  forceMount: void 0
}), Fs = "HoverCardContent", AS = /* @__PURE__ */ I((e, t) => {
  const n = TS(Fs, e.__scopeHoverCard), { forceMount: o = n.forceMount, ...r } = e, a = wc(Fs, e.__scopeHoverCard);
  return /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, /* @__PURE__ */ x(IS, P({
    "data-state": a.open ? "open" : "closed"
  }, r, {
    onPointerEnter: Y(e.onPointerEnter, Fa(a.onOpen)),
    onPointerLeave: Y(e.onPointerLeave, Fa(a.onClose)),
    ref: t
  })));
}), IS = /* @__PURE__ */ I((e, t) => {
  const { __scopeHoverCard: n, onEscapeKeyDown: o, onPointerDownOutside: r, onFocusOutside: a, onInteractOutside: i, ...s } = e, l = wc(Fs, n), c = bc(n), u = q(null), d = be(t, u), [f, p] = re(!1);
  return le(() => {
    if (f) {
      const m = document.body;
      return Zi = m.style.userSelect || m.style.webkitUserSelect, m.style.userSelect = "none", m.style.webkitUserSelect = "none", () => {
        m.style.userSelect = Zi, m.style.webkitUserSelect = Zi;
      };
    }
  }, [
    f
  ]), le(() => {
    if (u.current) {
      const m = () => {
        p(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var g;
          ((g = document.getSelection()) === null || g === void 0 ? void 0 : g.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", m), () => {
        document.removeEventListener("pointerup", m), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [
    l.isPointerDownOnContentRef,
    l.hasSelectionRef
  ]), le(() => {
    u.current && OS(u.current).forEach(
      (g) => g.setAttribute("tabindex", "-1")
    );
  }), /* @__PURE__ */ x(ao, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onInteractOutside: i,
    onEscapeKeyDown: o,
    onPointerDownOutside: r,
    onFocusOutside: Y(a, (m) => {
      m.preventDefault();
    }),
    onDismiss: l.onDismiss
  }, /* @__PURE__ */ x(Fr, P({}, c, s, {
    onPointerDown: Y(s.onPointerDown, (m) => {
      m.currentTarget.contains(m.target) && p(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
    }),
    ref: d,
    style: {
      ...s.style,
      userSelect: f ? "text" : void 0,
      // Safari requires prefix
      WebkitUserSelect: f ? "text" : void 0,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }
  })));
});
function Fa(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function OS(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
const kS = RS, LS = NS, sg = AS, xM = kS, $M = LS, FS = $.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ b(
  sg,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: L(
      "z-50 w-64 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...o
  }
));
FS.displayName = sg.displayName;
var zS = Object.defineProperty, VS = Object.defineProperties, HS = Object.getOwnPropertyDescriptors, za = Object.getOwnPropertySymbols, lg = Object.prototype.hasOwnProperty, cg = Object.prototype.propertyIsEnumerable, Ju = (e, t, n) => t in e ? zS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, BS = (e, t) => {
  for (var n in t || (t = {}))
    lg.call(t, n) && Ju(e, n, t[n]);
  if (za)
    for (var n of za(t))
      cg.call(t, n) && Ju(e, n, t[n]);
  return e;
}, GS = (e, t) => VS(e, HS(t)), WS = (e, t) => {
  var n = {};
  for (var o in e)
    lg.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && za)
    for (var o of za(e))
      t.indexOf(o) < 0 && cg.call(e, o) && (n[o] = e[o]);
  return n;
}, jS = "^\\d+$";
function US(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), o = setTimeout(e, 50);
  return [t, n, o];
}
function YS(e) {
  let t = $.useRef();
  return $.useEffect(() => {
    t.current = e;
  }), t.current;
}
var KS = 18, ug = 40, qS = `${ug}px`, XS = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function ZS({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: o }) {
  let r = $.useRef({ done: !1, refocused: !1 }), [a, i] = $.useState(!1), [s, l] = $.useState(!1), [c, u] = $.useState(!1), d = $.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && a && s, [a, s, n]), f = $.useCallback(() => {
    let p = e.current, m = t.current;
    if (!p || !m || c || n === "none")
      return;
    let g = p, h = g.getBoundingClientRect().left + g.offsetWidth, v = g.getBoundingClientRect().top + g.offsetHeight / 2, w = h - KS, y = v;
    if (!(document.querySelectorAll(XS).length === 0 && document.elementFromPoint(w, y) === p) && (i(!0), u(!0), !r.current.refocused && document.activeElement === m)) {
      let C = [m.selectionStart, m.selectionEnd];
      m.blur(), m.focus(), m.setSelectionRange(C[0], C[1]), r.current.refocused = !0;
    }
  }, [e, t, c, n]);
  return $.useEffect(() => {
    let p = e.current;
    if (!p || n === "none")
      return;
    function m() {
      let h = window.innerWidth - p.getBoundingClientRect().right;
      l(h >= ug);
    }
    m();
    let g = setInterval(m, 1e3);
    return () => {
      clearInterval(g);
    };
  }, [e, n]), $.useEffect(() => {
    let p = o || document.activeElement === t.current;
    if (n === "none" || !p)
      return;
    let m = setTimeout(f, 0), g = setTimeout(f, 2e3), h = setTimeout(f, 5e3), v = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(g), clearTimeout(h), clearTimeout(v);
    };
  }, [t, o, n, f]), { hasPWMBadge: a, willPushPWMBadge: d, PWM_BADGE_SPACE_WIDTH: qS };
}
var dg = $.createContext({}), fg = $.forwardRef((e, t) => {
  var n = e, { value: o, onChange: r, maxLength: a, textAlign: i = "left", pattern: s = jS, inputMode: l = "numeric", onComplete: c, pushPasswordManagerStrategy: u = "increase-width", containerClassName: d, noScriptCSSFallback: f = QS, render: p, children: m } = n, g = WS(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "inputMode", "onComplete", "pushPasswordManagerStrategy", "containerClassName", "noScriptCSSFallback", "render", "children"]), h, v, w, y, C;
  let [_, S] = $.useState(typeof g.defaultValue == "string" ? g.defaultValue : ""), E = o ?? _, T = YS(E), N = $.useCallback((O) => {
    r == null || r(O), S(O);
  }, [r]), k = $.useMemo(() => s ? typeof s == "string" ? new RegExp(s) : s : null, [s]), F = $.useRef(null), z = $.useRef(null), ae = $.useRef({ value: E, onChange: N, isIOS: typeof window < "u" && ((v = (h = window == null ? void 0 : window.CSS) == null ? void 0 : h.supports) == null ? void 0 : v.call(h, "-webkit-touch-callout", "none")) }), A = $.useRef({ prev: [(w = F.current) == null ? void 0 : w.selectionStart, (y = F.current) == null ? void 0 : y.selectionEnd, (C = F.current) == null ? void 0 : C.selectionDirection] });
  $.useImperativeHandle(t, () => F.current, []), $.useEffect(() => {
    let O = F.current, ne = z.current;
    if (!O || !ne)
      return;
    ae.current.value !== O.value && ae.current.onChange(O.value), A.current.prev = [O.selectionStart, O.selectionEnd, O.selectionDirection];
    function ge() {
      if (document.activeElement !== O) {
        se(null), R(null);
        return;
      }
      let ve = O.selectionStart, Ee = O.selectionEnd, Ae = O.selectionDirection, qe = O.maxLength, Be = O.value, Ze = A.current.prev, Te = -1, Xe = -1, Ke;
      if (Be.length !== 0 && ve !== null && Ee !== null) {
        let xt = ve === Ee, mt = ve === Be.length && Be.length < qe;
        if (xt && !mt) {
          let Fe = ve;
          if (Fe === 0)
            Te = 0, Xe = 1, Ke = "forward";
          else if (Fe === qe)
            Te = Fe - 1, Xe = Fe, Ke = "backward";
          else if (qe > 1 && Be.length > 1) {
            let ze = 0;
            if (Ze[0] !== null && Ze[1] !== null) {
              Ke = Fe < Ze[1] ? "backward" : "forward";
              let gt = Ze[0] === Ze[1] && Ze[0] < qe;
              Ke === "backward" && !gt && (ze = -1);
            }
            Te = ze + Fe, Xe = ze + Fe + 1;
          }
        }
        Te !== -1 && Xe !== -1 && Te !== Xe && F.current.setSelectionRange(Te, Xe, Ke);
      }
      let Dt = Te !== -1 ? Te : ve, rt = Xe !== -1 ? Xe : Ee, ot = Ke ?? Ae;
      se(Dt), R(rt), A.current.prev = [Dt, rt, ot];
    }
    if (document.addEventListener("selectionchange", ge, { capture: !0 }), ge(), document.activeElement === O && K(!0), !document.getElementById("input-otp-style")) {
      let ve = document.createElement("style");
      if (ve.id = "input-otp-style", document.head.appendChild(ve), ve.sheet) {
        let Ee = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        Qo(ve.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), Qo(ve.sheet, `[data-input-otp]:autofill { ${Ee} }`), Qo(ve.sheet, `[data-input-otp]:-webkit-autofill { ${Ee} }`), Qo(ve.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Qo(ve.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let de = () => {
      ne && ne.style.setProperty("--root-height", `${O.clientHeight}px`);
    };
    de();
    let Se = new ResizeObserver(de);
    return Se.observe(O), () => {
      document.removeEventListener("selectionchange", ge, { capture: !0 }), Se.disconnect();
    };
  }, []);
  let [V, J] = $.useState(!1), [H, K] = $.useState(!1), [X, se] = $.useState(null), [ee, R] = $.useState(null);
  $.useEffect(() => {
    US(() => {
      var O, ne, ge, de;
      (O = F.current) == null || O.dispatchEvent(new Event("input"));
      let Se = (ne = F.current) == null ? void 0 : ne.selectionStart, ve = (ge = F.current) == null ? void 0 : ge.selectionEnd, Ee = (de = F.current) == null ? void 0 : de.selectionDirection;
      Se !== null && ve !== null && (se(Se), R(ve), A.current.prev = [Se, ve, Ee]);
    });
  }, [E, H]), $.useEffect(() => {
    T !== void 0 && E !== T && T.length < a && E.length === a && (c == null || c(E));
  }, [a, c, T, E]);
  let B = ZS({ containerRef: z, inputRef: F, pushPasswordManagerStrategy: u, isFocused: H }), G = $.useCallback((O) => {
    let ne = O.currentTarget.value.slice(0, a);
    if (ne.length > 0 && k && !k.test(ne)) {
      O.preventDefault();
      return;
    }
    typeof T == "string" && ne.length < T.length && document.dispatchEvent(new Event("selectionchange")), N(ne);
  }, [a, N, T, k]), W = $.useCallback(() => {
    var O;
    if (F.current) {
      let ne = Math.min(F.current.value.length, a - 1), ge = F.current.value.length;
      (O = F.current) == null || O.setSelectionRange(ne, ge), se(ne), R(ge);
    }
    K(!0);
  }, [a]), j = $.useCallback((O) => {
    var ne, ge;
    let de = F.current;
    if (!ae.current.isIOS || !O.clipboardData || !de)
      return;
    let Se = O.clipboardData.getData("text/plain");
    O.preventDefault();
    let ve = (ne = F.current) == null ? void 0 : ne.selectionStart, Ee = (ge = F.current) == null ? void 0 : ge.selectionEnd, Ae = (ve !== Ee ? E.slice(0, ve) + Se + E.slice(Ee) : E.slice(0, ve) + Se + E.slice(ve)).slice(0, a);
    if (Ae.length > 0 && k && !k.test(Ae))
      return;
    de.value = Ae, N(Ae);
    let qe = Math.min(Ae.length, a - 1), Be = Ae.length;
    de.setSelectionRange(qe, Be), se(qe), R(Be);
  }, [a, N, k, E]), U = $.useMemo(() => ({ position: "relative", cursor: g.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [g.disabled]), te = $.useMemo(() => ({ position: "absolute", inset: 0, width: B.willPushPWMBadge ? `calc(100% + ${B.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: B.willPushPWMBadge ? `inset(0 ${B.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: i, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [B.PWM_BADGE_SPACE_WIDTH, B.willPushPWMBadge, i]), fe = $.useMemo(() => $.createElement("input", GS(BS({ autoComplete: g.autoComplete || "one-time-code" }, g), { "data-input-otp": !0, "data-input-otp-mss": X, "data-input-otp-mse": ee, inputMode: l, pattern: k == null ? void 0 : k.source, style: te, maxLength: a, value: E, ref: F, onPaste: (O) => {
    var ne;
    j(O), (ne = g.onPaste) == null || ne.call(g, O);
  }, onChange: G, onMouseOver: (O) => {
    var ne;
    J(!0), (ne = g.onMouseOver) == null || ne.call(g, O);
  }, onMouseLeave: (O) => {
    var ne;
    J(!1), (ne = g.onMouseLeave) == null || ne.call(g, O);
  }, onFocus: (O) => {
    var ne;
    W(), (ne = g.onFocus) == null || ne.call(g, O);
  }, onBlur: (O) => {
    var ne;
    K(!1), (ne = g.onBlur) == null || ne.call(g, O);
  } })), [G, W, j, l, te, a, ee, X, g, k == null ? void 0 : k.source, E]), Z = $.useMemo(() => ({ slots: Array.from({ length: a }).map((O, ne) => {
    let ge = H && X !== null && ee !== null && (X === ee && ne === X || ne >= X && ne < ee), de = E[ne] !== void 0 ? E[ne] : null;
    return { char: de, isActive: ge, hasFakeCaret: ge && de === null };
  }), isFocused: H, isHovering: !g.disabled && V }), [H, V, a, ee, X, g.disabled, E]), ce = $.useMemo(() => p ? p(Z) : $.createElement(dg.Provider, { value: Z }, m), [m, Z, p]);
  return $.createElement($.Fragment, null, f !== null && $.createElement("noscript", null, $.createElement("style", null, f)), $.createElement("div", { ref: z, "data-input-otp-container": !0, style: U, className: d }, ce, $.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, fe)));
});
fg.displayName = "Input";
function Qo(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var QS = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
const JS = $.forwardRef(({ className: e, containerClassName: t, ...n }, o) => /* @__PURE__ */ b(
  fg,
  {
    ref: o,
    containerClassName: L(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: L("disabled:cursor-not-allowed", e),
    ...n
  }
));
JS.displayName = "InputOTP";
const e7 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("div", { ref: n, className: L("flex items-center", e), ...t }));
e7.displayName = "InputOTPGroup";
const t7 = $.forwardRef(({ index: e, className: t, ...n }, o) => {
  const r = $.useContext(dg), { char: a, hasFakeCaret: i, isActive: s } = r.slots[e];
  return /* @__PURE__ */ Q(
    "div",
    {
      ref: o,
      className: L(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-slate-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md  ",
        s && "z-10 ring-2 ring-slate-950 ring-offset-white    ",
        t
      ),
      ...n,
      children: [
        a,
        i && /* @__PURE__ */ b("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ b("div", { className: "h-4 w-px animate-caret-blink bg-slate-950 duration-1000  " }) })
      ]
    }
  );
});
t7.displayName = "InputOTPSlot";
const n7 = $.forwardRef(({ ...e }, t) => /* @__PURE__ */ b("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ b(Hb, {}) }));
n7.displayName = "InputOTPSeparator";
const yc = "Menubar", [zs, o7, r7] = Ln(yc), [pg, CM] = Ve(yc, [
  r7,
  cn
]), pt = Hr(), mg = cn(), [a7, xc] = pg(yc), i7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, value: o, onValueChange: r, defaultValue: a, loop: i = !0, dir: s, ...l } = e, c = Yt(s), u = mg(n), [d = "", f] = Ue({
    prop: o,
    onChange: r,
    defaultProp: a
  }), [p, m] = re(null);
  return /* @__PURE__ */ x(a7, {
    scope: n,
    value: d,
    onMenuOpen: he((g) => {
      f(g), m(g);
    }, [
      f
    ]),
    onMenuClose: he(
      () => f(""),
      [
        f
      ]
    ),
    onMenuToggle: he((g) => {
      f(
        (h) => h ? "" : g
      ), m(g);
    }, [
      f
    ]),
    dir: c,
    loop: i
  }, /* @__PURE__ */ x(zs.Provider, {
    scope: n
  }, /* @__PURE__ */ x(zs.Slot, {
    scope: n
  }, /* @__PURE__ */ x(zr, P({
    asChild: !0
  }, u, {
    orientation: "horizontal",
    loop: i,
    dir: c,
    currentTabStopId: p,
    onCurrentTabStopIdChange: m
  }), /* @__PURE__ */ x(ie.div, P({
    role: "menubar"
  }, l, {
    ref: t
  }))))));
}), gg = "MenubarMenu", [s7, hg] = pg(gg), l7 = (e) => {
  const { __scopeMenubar: t, value: n, ...o } = e, r = et(), a = n || r || "LEGACY_REACT_AUTO_VALUE", i = xc(gg, t), s = pt(t), l = q(null), c = q(!1), u = i.value === a;
  return le(() => {
    u || (c.current = !1);
  }, [
    u
  ]), /* @__PURE__ */ x(s7, {
    scope: t,
    value: a,
    triggerId: et(),
    triggerRef: l,
    contentId: et(),
    wasKeyboardTriggerOpenRef: c
  }, /* @__PURE__ */ x(ec, P({}, s, {
    open: u,
    onOpenChange: (d) => {
      d || i.onMenuClose();
    },
    modal: !1,
    dir: i.dir
  }, o)));
}, ed = "MenubarTrigger", c7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, disabled: o = !1, ...r } = e, a = mg(n), i = pt(n), s = xc(ed, n), l = hg(ed, n), c = q(null), u = be(t, c, l.triggerRef), [d, f] = re(!1), p = s.value === l.value;
  return /* @__PURE__ */ x(zs.ItemSlot, {
    scope: n,
    value: l.value,
    disabled: o
  }, /* @__PURE__ */ x(Vr, P({
    asChild: !0
  }, a, {
    focusable: !o,
    tabStopId: l.value
  }), /* @__PURE__ */ x(tc, P({
    asChild: !0
  }, i), /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "menuitem",
    id: l.triggerId,
    "aria-haspopup": "menu",
    "aria-expanded": p,
    "aria-controls": p ? l.contentId : void 0,
    "data-highlighted": d ? "" : void 0,
    "data-state": p ? "open" : "closed",
    "data-disabled": o ? "" : void 0,
    disabled: o
  }, r, {
    ref: u,
    onPointerDown: Y(e.onPointerDown, (m) => {
      !o && m.button === 0 && m.ctrlKey === !1 && (s.onMenuOpen(l.value), p || m.preventDefault());
    }),
    onPointerEnter: Y(e.onPointerEnter, () => {
      if (!!s.value && !p) {
        var g;
        s.onMenuOpen(l.value), (g = c.current) === null || g === void 0 || g.focus();
      }
    }),
    onKeyDown: Y(e.onKeyDown, (m) => {
      o || ([
        "Enter",
        " "
      ].includes(m.key) && s.onMenuToggle(l.value), m.key === "ArrowDown" && s.onMenuOpen(l.value), [
        "Enter",
        " ",
        "ArrowDown"
      ].includes(m.key) && (l.wasKeyboardTriggerOpenRef.current = !0, m.preventDefault()));
    }),
    onFocus: Y(
      e.onFocus,
      () => f(!0)
    ),
    onBlur: Y(
      e.onBlur,
      () => f(!1)
    )
  })))));
}), u7 = (e) => {
  const { __scopeMenubar: t, ...n } = e, o = pt(t);
  return /* @__PURE__ */ x(nc, P({}, o, n));
}, td = "MenubarContent", d7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, align: o = "start", ...r } = e, a = pt(n), i = xc(td, n), s = hg(td, n), l = o7(n), c = q(!1);
  return /* @__PURE__ */ x(oc, P({
    id: s.contentId,
    "aria-labelledby": s.triggerId,
    "data-radix-menubar-content": ""
  }, a, r, {
    ref: t,
    align: o,
    onCloseAutoFocus: Y(e.onCloseAutoFocus, (u) => {
      if (!!!i.value && !c.current) {
        var f;
        (f = s.triggerRef.current) === null || f === void 0 || f.focus();
      }
      c.current = !1, u.preventDefault();
    }),
    onFocusOutside: Y(e.onFocusOutside, (u) => {
      const d = u.target;
      l().some((p) => {
        var m;
        return (m = p.ref.current) === null || m === void 0 ? void 0 : m.contains(d);
      }) && u.preventDefault();
    }),
    onInteractOutside: Y(e.onInteractOutside, () => {
      c.current = !0;
    }),
    onEntryFocus: (u) => {
      s.wasKeyboardTriggerOpenRef.current || u.preventDefault();
    },
    onKeyDown: Y(e.onKeyDown, (u) => {
      if ([
        "ArrowRight",
        "ArrowLeft"
      ].includes(u.key)) {
        const d = u.target, f = d.hasAttribute("data-radix-menubar-subtrigger"), p = d.closest("[data-radix-menubar-content]") !== u.currentTarget, g = (i.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === u.key;
        if (!g && f || p && g)
          return;
        let w = l().filter(
          (_) => !_.disabled
        ).map(
          (_) => _.value
        );
        g && w.reverse();
        const y = w.indexOf(s.value);
        w = i.loop ? C7(w, y + 1) : w.slice(y + 1);
        const [C] = w;
        C && i.onMenuOpen(C);
      }
    }, {
      checkForDefaultPrevented: !1
    }),
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), f7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(rc, P({}, r, o, {
    ref: t
  }));
}), p7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(ac, P({}, r, o, {
    ref: t
  }));
}), m7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(ic, P({}, r, o, {
    ref: t
  }));
}), g7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(sc, P({}, r, o, {
    ref: t
  }));
}), h7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(lc, P({}, r, o, {
    ref: t
  }));
}), v7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(cc, P({}, r, o, {
    ref: t
  }));
}), b7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(uc, P({}, r, o, {
    ref: t
  }));
}), w7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(dc, P({}, r, o, {
    ref: t
  }));
}), y7 = (e) => {
  const { __scopeMenubar: t, children: n, open: o, onOpenChange: r, defaultOpen: a } = e, i = pt(t), [s = !1, l] = Ue({
    prop: o,
    defaultProp: a,
    onChange: r
  });
  return /* @__PURE__ */ x(fc, P({}, i, {
    open: s,
    onOpenChange: l
  }), n);
}, x7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(pc, P({
    "data-radix-menubar-subtrigger": ""
  }, r, o, {
    ref: t
  }));
}), $7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeMenubar: n, ...o } = e, r = pt(n);
  return /* @__PURE__ */ x(mc, P({}, r, {
    "data-radix-menubar-content": ""
  }, o, {
    ref: t,
    style: {
      ...e.style,
      "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
      "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
      "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
});
function C7(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const vg = i7, S7 = l7, bg = c7, wg = u7, yg = d7, _7 = f7, xg = p7, $g = m7, Cg = g7, E7 = h7, Sg = v7, _g = b7, Eg = w7, P7 = y7, Pg = x7, Rg = $7, SM = S7, _M = _7, EM = wg, PM = P7, RM = E7, R7 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  vg,
  {
    ref: n,
    className: L(
      "flex h-10 items-center space-x-1 rounded-md border border-slate-200 bg-white p-1    ",
      e
    ),
    ...t
  }
));
R7.displayName = vg.displayName;
const M7 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  bg,
  {
    ref: n,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      e
    ),
    ...t
  }
));
M7.displayName = bg.displayName;
const N7 = $.forwardRef(({ className: e, inset: t, children: n, ...o }, r) => /* @__PURE__ */ Q(
  Pg,
  {
    ref: r,
    className: L(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      t && "pl-8",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ b(Ya, { className: "ml-auto h-4 w-4" })
    ]
  }
));
N7.displayName = Pg.displayName;
const D7 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Rg,
  {
    ref: n,
    className: L(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
D7.displayName = Rg.displayName;
const T7 = $.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: o = 8, ...r }, a) => /* @__PURE__ */ b(wg, { children: /* @__PURE__ */ b(
    yg,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: o,
      className: L(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
        e
      ),
      ...r
    }
  ) })
);
T7.displayName = yg.displayName;
const A7 = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  $g,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
A7.displayName = $g.displayName;
const I7 = $.forwardRef(({ className: e, children: t, checked: n, ...o }, r) => /* @__PURE__ */ Q(
  Cg,
  {
    ref: r,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...o,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(_g, { children: /* @__PURE__ */ b(Io, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
I7.displayName = Cg.displayName;
const O7 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  Sg,
  {
    ref: o,
    className: L(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(_g, { children: /* @__PURE__ */ b(Ka, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
O7.displayName = Sg.displayName;
const k7 = $.forwardRef(({ className: e, inset: t, ...n }, o) => /* @__PURE__ */ b(
  xg,
  {
    ref: o,
    className: L(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
k7.displayName = xg.displayName;
const L7 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Eg,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-slate-100  ", e),
    ...t
  }
));
L7.displayName = Eg.displayName;
const F7 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "span",
  {
    className: L(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
F7.displayname = "MenubarShortcut";
const Mg = /* @__PURE__ */ I((e, t) => /* @__PURE__ */ x(ie.span, P({}, e, {
  ref: t,
  style: {
    // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    ...e.style
  }
}))), Ng = Mg, Gr = "NavigationMenu", [$c, Dg, z7] = Ln(Gr), [Vs, V7, H7] = Ln(Gr), [Cc, MM] = Ve(Gr, [
  z7,
  H7
]), [B7, Xt] = Cc(Gr), [G7, W7] = Cc(Gr), j7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: o, onValueChange: r, defaultValue: a, delayDuration: i = 200, skipDelayDuration: s = 300, orientation: l = "horizontal", dir: c, ...u } = e, [d, f] = re(null), p = be(
    t,
    (N) => f(N)
  ), m = Yt(c), g = q(0), h = q(0), v = q(0), [w, y] = re(!0), [C = "", _] = Ue({
    prop: o,
    onChange: (N) => {
      const k = N !== "", F = s > 0;
      k ? (window.clearTimeout(v.current), F && y(!1)) : (window.clearTimeout(v.current), v.current = window.setTimeout(
        () => y(!0),
        s
      )), r == null || r(N);
    },
    defaultProp: a
  }), S = he(() => {
    window.clearTimeout(h.current), h.current = window.setTimeout(
      () => _(""),
      150
    );
  }, [
    _
  ]), E = he((N) => {
    window.clearTimeout(h.current), _(N);
  }, [
    _
  ]), T = he((N) => {
    C === N ? window.clearTimeout(h.current) : g.current = window.setTimeout(() => {
      window.clearTimeout(h.current), _(N);
    }, i);
  }, [
    C,
    _,
    i
  ]);
  return le(() => () => {
    window.clearTimeout(g.current), window.clearTimeout(h.current), window.clearTimeout(v.current);
  }, []), /* @__PURE__ */ x(U7, {
    scope: n,
    isRootMenu: !0,
    value: C,
    dir: m,
    orientation: l,
    rootNavigationMenu: d,
    onTriggerEnter: (N) => {
      window.clearTimeout(g.current), w ? T(N) : E(N);
    },
    onTriggerLeave: () => {
      window.clearTimeout(g.current), S();
    },
    onContentEnter: () => window.clearTimeout(h.current),
    onContentLeave: S,
    onItemSelect: (N) => {
      _(
        (k) => k === N ? "" : N
      );
    },
    onItemDismiss: () => _("")
  }, /* @__PURE__ */ x(ie.nav, P({
    "aria-label": "Main",
    "data-orientation": l,
    dir: m
  }, u, {
    ref: p
  })));
}), U7 = (e) => {
  const { scope: t, isRootMenu: n, rootNavigationMenu: o, dir: r, orientation: a, children: i, value: s, onItemSelect: l, onItemDismiss: c, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, g] = re(null), [h, v] = re(/* @__PURE__ */ new Map()), [w, y] = re(null);
  return /* @__PURE__ */ x(B7, {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: o,
    value: s,
    previousValue: Lo(s),
    baseId: et(),
    dir: r,
    orientation: a,
    viewport: m,
    onViewportChange: g,
    indicatorTrack: w,
    onIndicatorTrackChange: y,
    onTriggerEnter: ke(u),
    onTriggerLeave: ke(d),
    onContentEnter: ke(f),
    onContentLeave: ke(p),
    onItemSelect: ke(l),
    onItemDismiss: ke(c),
    onViewportContentChange: he((C, _) => {
      v((S) => (S.set(C, _), new Map(S)));
    }, []),
    onViewportContentRemove: he((C) => {
      v((_) => _.has(C) ? (_.delete(C), new Map(_)) : _);
    }, [])
  }, /* @__PURE__ */ x($c.Provider, {
    scope: t
  }, /* @__PURE__ */ x(G7, {
    scope: t,
    items: h
  }, i)));
}, Y7 = "NavigationMenuList", K7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = Xt(Y7, n), a = /* @__PURE__ */ x(ie.ul, P({
    "data-orientation": r.orientation
  }, o, {
    ref: t
  }));
  return /* @__PURE__ */ x(ie.div, {
    style: {
      position: "relative"
    },
    ref: r.onIndicatorTrackChange
  }, /* @__PURE__ */ x($c.Slot, {
    scope: n
  }, r.isRootMenu ? /* @__PURE__ */ x(kg, {
    asChild: !0
  }, a) : a));
}), q7 = "NavigationMenuItem", [X7, Tg] = Cc(q7), Z7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: o, ...r } = e, a = et(), i = o || a || "LEGACY_REACT_AUTO_VALUE", s = q(null), l = q(null), c = q(null), u = q(() => {
  }), d = q(!1), f = he((m = "start") => {
    if (s.current) {
      u.current();
      const g = Hs(s.current);
      g.length && Sc(m === "start" ? g : g.reverse());
    }
  }, []), p = he(() => {
    if (s.current) {
      const m = Hs(s.current);
      m.length && (u.current = l4(m));
    }
  }, []);
  return /* @__PURE__ */ x(X7, {
    scope: n,
    value: i,
    triggerRef: l,
    contentRef: s,
    focusProxyRef: c,
    wasEscapeCloseRef: d,
    onEntryKeyDown: f,
    onFocusProxyEnter: f,
    onRootContentClose: p,
    onContentFocusOutside: p
  }, /* @__PURE__ */ x(ie.li, P({}, r, {
    ref: t
  })));
}), nd = "NavigationMenuTrigger", Q7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, disabled: o, ...r } = e, a = Xt(nd, e.__scopeNavigationMenu), i = Tg(nd, e.__scopeNavigationMenu), s = q(null), l = be(s, i.triggerRef, t), c = Fg(a.baseId, i.value), u = zg(a.baseId, i.value), d = q(!1), f = q(!1), p = i.value === a.value;
  return /* @__PURE__ */ x(on, null, /* @__PURE__ */ x($c.ItemSlot, {
    scope: n,
    value: i.value
  }, /* @__PURE__ */ x(Lg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.button, P({
    id: c,
    disabled: o,
    "data-disabled": o ? "" : void 0,
    "data-state": _c(p),
    "aria-expanded": p,
    "aria-controls": u
  }, r, {
    ref: l,
    onPointerEnter: Y(e.onPointerEnter, () => {
      f.current = !1, i.wasEscapeCloseRef.current = !1;
    }),
    onPointerMove: Y(e.onPointerMove, Va(() => {
      o || f.current || i.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(i.value), d.current = !0);
    })),
    onPointerLeave: Y(e.onPointerLeave, Va(() => {
      o || (a.onTriggerLeave(), d.current = !1);
    })),
    onClick: Y(e.onClick, () => {
      a.onItemSelect(i.value), f.current = p;
    }),
    onKeyDown: Y(e.onKeyDown, (m) => {
      const h = {
        horizontal: "ArrowDown",
        vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      }[a.orientation];
      p && m.key === h && (i.onEntryKeyDown(), m.preventDefault());
    })
  })))), p && /* @__PURE__ */ x(on, null, /* @__PURE__ */ x(Ng, {
    "aria-hidden": !0,
    tabIndex: 0,
    ref: i.focusProxyRef,
    onFocus: (m) => {
      const g = i.contentRef.current, h = m.relatedTarget, v = h === s.current, w = g == null ? void 0 : g.contains(h);
      (v || !w) && i.onFocusProxyEnter(v ? "start" : "end");
    }
  }), a.viewport && /* @__PURE__ */ x("span", {
    "aria-owns": u
  })));
}), od = "navigationMenu.linkSelect", J7 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, active: o, onSelect: r, ...a } = e;
  return /* @__PURE__ */ x(Lg, {
    asChild: !0
  }, /* @__PURE__ */ x(ie.a, P({
    "data-active": o ? "" : void 0,
    "aria-current": o ? "page" : void 0
  }, a, {
    ref: t,
    onClick: Y(e.onClick, (i) => {
      const s = i.target, l = new CustomEvent(od, {
        bubbles: !0,
        cancelable: !0
      });
      if (s.addEventListener(
        od,
        (c) => r == null ? void 0 : r(c),
        {
          once: !0
        }
      ), Ra(s, l), !l.defaultPrevented && !i.metaKey) {
        const c = new CustomEvent($a, {
          bubbles: !0,
          cancelable: !0
        });
        Ra(s, c);
      }
    }, {
      checkForDefaultPrevented: !1
    })
  })));
}), Ag = "NavigationMenuIndicator", e4 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = Xt(Ag, e.__scopeNavigationMenu), a = !!r.value;
  return r.indicatorTrack ? /* @__PURE__ */ ul.createPortal(/* @__PURE__ */ x(Ye, {
    present: n || a
  }, /* @__PURE__ */ x(t4, P({}, o, {
    ref: t
  }))), r.indicatorTrack) : null;
}), t4 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = Xt(Ag, n), a = Dg(n), [i, s] = re(null), [l, c] = re(null), u = r.orientation === "horizontal", d = !!r.value;
  le(() => {
    var p;
    const g = (p = a().find(
      (h) => h.value === r.value
    )) === null || p === void 0 ? void 0 : p.ref.current;
    g && s(g);
  }, [
    a,
    r.value
  ]);
  const f = () => {
    i && c({
      size: u ? i.offsetWidth : i.offsetHeight,
      offset: u ? i.offsetLeft : i.offsetTop
    });
  };
  return Bs(i, f), Bs(r.indicatorTrack, f), l ? /* @__PURE__ */ x(ie.div, P({
    "aria-hidden": !0,
    "data-state": d ? "visible" : "hidden",
    "data-orientation": r.orientation
  }, o, {
    ref: t,
    style: {
      position: "absolute",
      ...u ? {
        left: 0,
        width: l.size + "px",
        transform: `translateX(${l.offset}px)`
      } : {
        top: 0,
        height: l.size + "px",
        transform: `translateY(${l.offset}px)`
      },
      ...o.style
    }
  })) : null;
}), wr = "NavigationMenuContent", n4 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = Xt(wr, e.__scopeNavigationMenu), a = Tg(wr, e.__scopeNavigationMenu), i = be(a.contentRef, t), s = a.value === r.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...o
  };
  return r.viewport ? /* @__PURE__ */ x(o4, P({
    forceMount: n
  }, l, {
    ref: i
  })) : /* @__PURE__ */ x(Ye, {
    present: n || s
  }, /* @__PURE__ */ x(Ig, P({
    "data-state": _c(s)
  }, l, {
    ref: i,
    onPointerEnter: Y(e.onPointerEnter, r.onContentEnter),
    onPointerLeave: Y(e.onPointerLeave, Va(r.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !s && r.isRootMenu ? "none" : void 0,
      ...l.style
    }
  })));
}), o4 = /* @__PURE__ */ I((e, t) => {
  const n = Xt(wr, e.__scopeNavigationMenu), { onViewportContentChange: o, onViewportContentRemove: r } = n;
  return tt(() => {
    o(e.value, {
      ref: t,
      ...e
    });
  }, [
    e,
    t,
    o
  ]), tt(() => () => r(e.value), [
    e.value,
    r
  ]), null;
}), $a = "navigationMenu.rootContentDismiss", Ig = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, value: o, triggerRef: r, focusProxyRef: a, wasEscapeCloseRef: i, onRootContentClose: s, onContentFocusOutside: l, ...c } = e, u = Xt(wr, n), d = q(null), f = be(d, t), p = Fg(u.baseId, o), m = zg(u.baseId, o), g = Dg(n), h = q(null), { onItemDismiss: v } = u;
  le(() => {
    const y = d.current;
    if (u.isRootMenu && y) {
      const C = () => {
        var _;
        v(), s(), y.contains(document.activeElement) && ((_ = r.current) === null || _ === void 0 || _.focus());
      };
      return y.addEventListener($a, C), () => y.removeEventListener($a, C);
    }
  }, [
    u.isRootMenu,
    e.value,
    r,
    v,
    s
  ]);
  const w = nn(() => {
    const C = g().map(
      (k) => k.value
    );
    u.dir === "rtl" && C.reverse();
    const _ = C.indexOf(u.value), S = C.indexOf(u.previousValue), E = o === u.value, T = S === C.indexOf(o);
    if (!E && !T)
      return h.current;
    const N = (() => {
      if (_ !== S) {
        if (E && S !== -1)
          return _ > S ? "from-end" : "from-start";
        if (T && _ !== -1)
          return _ > S ? "to-start" : "to-end";
      }
      return null;
    })();
    return h.current = N, N;
  }, [
    u.previousValue,
    u.value,
    u.dir,
    g,
    o
  ]);
  return /* @__PURE__ */ x(kg, {
    asChild: !0
  }, /* @__PURE__ */ x(ao, P({
    id: m,
    "aria-labelledby": p,
    "data-motion": w,
    "data-orientation": u.orientation
  }, c, {
    ref: f,
    onDismiss: () => {
      var y;
      const C = new Event($a, {
        bubbles: !0,
        cancelable: !0
      });
      (y = d.current) === null || y === void 0 || y.dispatchEvent(C);
    },
    onFocusOutside: Y(e.onFocusOutside, (y) => {
      var C;
      l();
      const _ = y.target;
      (C = u.rootNavigationMenu) !== null && C !== void 0 && C.contains(_) && y.preventDefault();
    }),
    onPointerDownOutside: Y(e.onPointerDownOutside, (y) => {
      var C;
      const _ = y.target, S = g().some((T) => {
        var N;
        return (N = T.ref.current) === null || N === void 0 ? void 0 : N.contains(_);
      }), E = u.isRootMenu && ((C = u.viewport) === null || C === void 0 ? void 0 : C.contains(_));
      (S || E || !u.isRootMenu) && y.preventDefault();
    }),
    onKeyDown: Y(e.onKeyDown, (y) => {
      const C = y.altKey || y.ctrlKey || y.metaKey;
      if (y.key === "Tab" && !C) {
        const E = Hs(y.currentTarget), T = document.activeElement, N = E.findIndex(
          (z) => z === T
        ), F = y.shiftKey ? E.slice(0, N).reverse() : E.slice(N + 1, E.length);
        if (Sc(F))
          y.preventDefault();
        else {
          var S;
          (S = a.current) === null || S === void 0 || S.focus();
        }
      }
    }),
    onEscapeKeyDown: Y(e.onEscapeKeyDown, (y) => {
      i.current = !0;
    })
  })));
}), Og = "NavigationMenuViewport", r4 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, a = !!Xt(Og, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ x(Ye, {
    present: n || a
  }, /* @__PURE__ */ x(a4, P({}, o, {
    ref: t
  })));
}), a4 = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, children: o, ...r } = e, a = Xt(Og, n), i = be(t, a.onViewportChange), s = W7(wr, e.__scopeNavigationMenu), [l, c] = re(null), [u, d] = re(null), f = l ? (l == null ? void 0 : l.width) + "px" : void 0, p = l ? (l == null ? void 0 : l.height) + "px" : void 0, m = !!a.value, g = m ? a.value : a.previousValue;
  return Bs(u, () => {
    u && c({
      width: u.offsetWidth,
      height: u.offsetHeight
    });
  }), /* @__PURE__ */ x(ie.div, P({
    "data-state": _c(m),
    "data-orientation": a.orientation
  }, r, {
    ref: i,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !m && a.isRootMenu ? "none" : void 0,
      "--radix-navigation-menu-viewport-width": f,
      "--radix-navigation-menu-viewport-height": p,
      ...r.style
    },
    onPointerEnter: Y(e.onPointerEnter, a.onContentEnter),
    onPointerLeave: Y(e.onPointerLeave, Va(a.onContentLeave))
  }), Array.from(s.items).map(([v, { ref: w, forceMount: y, ...C }]) => {
    const _ = g === v;
    return /* @__PURE__ */ x(Ye, {
      key: v,
      present: y || _
    }, /* @__PURE__ */ x(Ig, P({}, C, {
      ref: _r(w, (S) => {
        _ && S && d(S);
      })
    })));
  }));
}), i4 = "FocusGroup", kg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = Xt(i4, n);
  return /* @__PURE__ */ x(Vs.Provider, {
    scope: n
  }, /* @__PURE__ */ x(Vs.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, P({
    dir: r.dir
  }, o, {
    ref: t
  }))));
}), rd = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
], s4 = "FocusGroupItem", Lg = /* @__PURE__ */ I((e, t) => {
  const { __scopeNavigationMenu: n, ...o } = e, r = V7(n), a = Xt(s4, n);
  return /* @__PURE__ */ x(Vs.ItemSlot, {
    scope: n
  }, /* @__PURE__ */ x(ie.button, P({}, o, {
    ref: t,
    onKeyDown: Y(e.onKeyDown, (i) => {
      if ([
        "Home",
        "End",
        ...rd
      ].includes(i.key)) {
        let l = r().map(
          (d) => d.ref.current
        );
        if ([
          a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
          "ArrowUp",
          "End"
        ].includes(i.key) && l.reverse(), rd.includes(i.key)) {
          const d = l.indexOf(i.currentTarget);
          l = l.slice(d + 1);
        }
        setTimeout(
          () => Sc(l)
        ), i.preventDefault();
      }
    })
  })));
});
function Hs(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Sc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function l4(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function Bs(e, t) {
  const n = ke(t);
  tt(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
function _c(e) {
  return e ? "open" : "closed";
}
function Fg(e, t) {
  return `${e}-trigger-${t}`;
}
function zg(e, t) {
  return `${e}-content-${t}`;
}
function Va(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
const Vg = j7, Hg = K7, c4 = Z7, Bg = Q7, u4 = J7, Gg = e4, Wg = n4, jg = r4, d4 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  Vg,
  {
    ref: o,
    className: L(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ b(Ug, {})
    ]
  }
));
d4.displayName = Vg.displayName;
const f4 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Hg,
  {
    ref: n,
    className: L(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
f4.displayName = Hg.displayName;
const NM = c4, p4 = co(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50              "
), m4 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  Bg,
  {
    ref: o,
    className: L(p4(), "group", e),
    ...n,
    children: [
      t,
      "",
      /* @__PURE__ */ b(
        wl,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
m4.displayName = Bg.displayName;
const g4 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Wg,
  {
    ref: n,
    className: L(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      e
    ),
    ...t
  }
));
g4.displayName = Wg.displayName;
const DM = u4, Ug = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("div", { className: L("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ b(
  jg,
  {
    className: L(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]      ",
      e
    ),
    ref: n,
    ...t
  }
) }));
Ug.displayName = jg.displayName;
const h4 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Gg,
  {
    ref: n,
    className: L(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md  " })
  }
));
h4.displayName = Gg.displayName;
const v4 = ({ className: e, ...t }) => /* @__PURE__ */ b(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: L("mx-auto flex w-full justify-center", e),
    ...t
  }
);
v4.displayName = "Pagination";
const b4 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "ul",
  {
    ref: n,
    className: L("flex flex-row items-center gap-1", e),
    ...t
  }
));
b4.displayName = "PaginationContent";
const w4 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("li", { ref: n, className: L("", e), ...t }));
w4.displayName = "PaginationItem";
const Ec = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...o
}) => /* @__PURE__ */ b(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: L(
      Po({
        variant: t ? "outline" : "default",
        size: n
      }),
      e
    ),
    ...o
  }
);
Ec.displayName = "PaginationLink";
const y4 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ Q(
  Ec,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: L("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ b(df, { className: "h-4 w-4" }),
      /* @__PURE__ */ b("span", { children: "Previous" })
    ]
  }
);
y4.displayName = "PaginationPrevious";
const x4 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ Q(
  Ec,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: L("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ b("span", { children: "Next" }),
      /* @__PURE__ */ b(Ya, { className: "h-4 w-4" })
    ]
  }
);
x4.displayName = "PaginationNext";
const $4 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ Q(
  "span",
  {
    "aria-hidden": !0,
    className: L("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ b(ff, { className: "h-4 w-4" }),
      /* @__PURE__ */ b("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
$4.displayName = "PaginationEllipsis";
const Yg = "Popover", [Kg, TM] = Ve(Yg, [
  ln
]), Pc = ln(), [C4, Go] = Kg(Yg), S4 = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: a, modal: i = !1 } = e, s = Pc(t), l = q(null), [c, u] = re(!1), [d = !1, f] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  });
  return /* @__PURE__ */ x(Ho, s, /* @__PURE__ */ x(C4, {
    scope: t,
    contentId: et(),
    triggerRef: l,
    open: d,
    onOpenChange: f,
    onOpenToggle: he(
      () => f(
        (p) => !p
      ),
      [
        f
      ]
    ),
    hasCustomAnchor: c,
    onCustomAnchorAdd: he(
      () => u(!0),
      []
    ),
    onCustomAnchorRemove: he(
      () => u(!1),
      []
    ),
    modal: i
  }, n));
}, _4 = "PopoverTrigger", E4 = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, ...o } = e, r = Go(_4, n), a = Pc(n), i = be(t, r.triggerRef), s = /* @__PURE__ */ x(ie.button, P({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Zg(r.open)
  }, o, {
    ref: i,
    onClick: Y(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? s : /* @__PURE__ */ x(Lr, P({
    asChild: !0
  }, a), s);
}), qg = "PopoverPortal", [P4, R4] = Kg(qg, {
  forceMount: void 0
}), M4 = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, a = Go(qg, t);
  return /* @__PURE__ */ x(P4, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ x(Ye, {
    present: n || a.open
  }, /* @__PURE__ */ x(Xa, {
    asChild: !0,
    container: r
  }, o)));
}, yr = "PopoverContent", N4 = /* @__PURE__ */ I((e, t) => {
  const n = R4(yr, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, a = Go(yr, e.__scopePopover);
  return /* @__PURE__ */ x(Ye, {
    present: o || a.open
  }, a.modal ? /* @__PURE__ */ x(D4, P({}, r, {
    ref: t
  })) : /* @__PURE__ */ x(T4, P({}, r, {
    ref: t
  })));
}), D4 = /* @__PURE__ */ I((e, t) => {
  const n = Go(yr, e.__scopePopover), o = q(null), r = be(t, o), a = q(!1);
  return le(() => {
    const i = o.current;
    if (i)
      return Ja(i);
  }, []), /* @__PURE__ */ x(Er, {
    as: Bt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(Xg, P({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Y(e.onCloseAutoFocus, (i) => {
      var s;
      i.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: Y(e.onPointerDownOutside, (i) => {
      const s = i.detail.originalEvent, l = s.button === 0 && s.ctrlKey === !0, c = s.button === 2 || l;
      a.current = c;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: Y(
      e.onFocusOutside,
      (i) => i.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), T4 = /* @__PURE__ */ I((e, t) => {
  const n = Go(yr, e.__scopePopover), o = q(!1), r = q(!1);
  return /* @__PURE__ */ x(Xg, P({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (a) => {
      var i;
      if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
        var s;
        o.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (a) => {
      var i, s;
      (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (o.current = !0, a.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const l = a.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), Xg = /* @__PURE__ */ I((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: a, disableOutsidePointerEvents: i, onEscapeKeyDown: s, onPointerDownOutside: l, onFocusOutside: c, onInteractOutside: u, ...d } = e, f = Go(yr, n), p = Pc(n);
  return Za(), /* @__PURE__ */ x(qa, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: a
  }, /* @__PURE__ */ x(ao, {
    asChild: !0,
    disableOutsidePointerEvents: i,
    onInteractOutside: u,
    onEscapeKeyDown: s,
    onPointerDownOutside: l,
    onFocusOutside: c,
    onDismiss: () => f.onOpenChange(!1)
  }, /* @__PURE__ */ x(Fr, P({
    "data-state": Zg(f.open),
    role: "dialog",
    id: f.contentId
  }, p, d, {
    ref: t,
    style: {
      ...d.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Zg(e) {
  return e ? "open" : "closed";
}
const A4 = S4, I4 = E4, O4 = M4, Qg = N4, Jg = A4, e0 = I4, Rc = $.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ b(O4, { children: /* @__PURE__ */ b(
  Qg,
  {
    ref: r,
    align: t,
    sideOffset: n,
    className: L(
      "z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...o
  }
) }));
Rc.displayName = Qg.displayName;
const t0 = "Progress", ui = 100, [k4, AM] = Ve(t0), [L4, F4] = k4(t0), n0 = /* @__PURE__ */ I((e, t) => {
  const { __scopeProgress: n, value: o, max: r, getValueLabel: a = H4, ...i } = e, s = Gs(r) ? r : ui, l = r0(o, s) ? o : null, c = Ha(l) ? a(l, s) : void 0;
  return /* @__PURE__ */ x(L4, {
    scope: n,
    value: l,
    max: s
  }, /* @__PURE__ */ x(ie.div, P({
    "aria-valuemax": s,
    "aria-valuemin": 0,
    "aria-valuenow": Ha(l) ? l : void 0,
    "aria-valuetext": c,
    role: "progressbar",
    "data-state": o0(l, s),
    "data-value": l ?? void 0,
    "data-max": s
  }, i, {
    ref: t
  })));
});
n0.propTypes = {
  max(e, t, n) {
    const o = e[t], r = String(o);
    return o && !Gs(o) ? new Error(B4(r, n)) : null;
  },
  value(e, t, n) {
    const o = e[t], r = String(o), a = Gs(e.max) ? e.max : ui;
    return o != null && !r0(o, a) ? new Error(G4(r, n)) : null;
  }
};
const z4 = "ProgressIndicator", V4 = /* @__PURE__ */ I((e, t) => {
  var n;
  const { __scopeProgress: o, ...r } = e, a = F4(z4, o);
  return /* @__PURE__ */ x(ie.div, P({
    "data-state": o0(a.value, a.max),
    "data-value": (n = a.value) !== null && n !== void 0 ? n : void 0,
    "data-max": a.max
  }, r, {
    ref: t
  }));
});
function H4(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function o0(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Ha(e) {
  return typeof e == "number";
}
function Gs(e) {
  return Ha(e) && !isNaN(e) && e > 0;
}
function r0(e, t) {
  return Ha(e) && !isNaN(e) && e <= t && e >= 0;
}
function B4(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ui}\`.`;
}
function G4(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ui} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
const a0 = n0, W4 = V4, j4 = $.forwardRef(({ className: e, value: t, indicatorColor: n, ...o }, r) => /* @__PURE__ */ b(
  a0,
  {
    ref: r,
    className: L(
      "relative h-4 w-full overflow-hidden rounded-full bg-slate-100  ",
      e
    ),
    ...o,
    children: /* @__PURE__ */ b(
      W4,
      {
        className: `h-full w-full flex-1 bg-slate-900 transition-all ${n}`,
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
j4.displayName = a0.displayName;
const i0 = "Radio", [U4, s0] = Ve(i0), [Y4, K4] = U4(i0), q4 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, name: o, checked: r = !1, required: a, disabled: i, value: s = "on", onCheck: l, ...c } = e, [u, d] = re(null), f = be(
    t,
    (g) => d(g)
  ), p = q(!1), m = u ? !!u.closest("form") : !0;
  return /* @__PURE__ */ x(Y4, {
    scope: n,
    checked: r,
    disabled: i
  }, /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "radio",
    "aria-checked": r,
    "data-state": l0(r),
    "data-disabled": i ? "" : void 0,
    disabled: i,
    value: s
  }, c, {
    ref: f,
    onClick: Y(e.onClick, (g) => {
      r || l == null || l(), m && (p.current = g.isPropagationStopped(), p.current || g.stopPropagation());
    })
  })), m && /* @__PURE__ */ x(Q4, {
    control: u,
    bubbles: !p.current,
    name: o,
    value: s,
    checked: r,
    required: a,
    disabled: i,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), X4 = "RadioIndicator", Z4 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadio: n, forceMount: o, ...r } = e, a = K4(X4, n);
  return /* @__PURE__ */ x(Ye, {
    present: o || a.checked
  }, /* @__PURE__ */ x(ie.span, P({
    "data-state": l0(a.checked),
    "data-disabled": a.disabled ? "" : void 0
  }, r, {
    ref: t
  })));
}), Q4 = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, a = q(null), i = Lo(n), s = Ir(t);
  return le(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: o
      });
      d.call(l, n), l.dispatchEvent(f);
    }
  }, [
    i,
    n,
    o
  ]), /* @__PURE__ */ x("input", P({
    type: "radio",
    "aria-hidden": !0,
    defaultChecked: n
  }, r, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function l0(e) {
  return e ? "checked" : "unchecked";
}
const J4 = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], c0 = "RadioGroup", [e8, IM] = Ve(c0, [
  cn,
  s0
]), u0 = cn(), d0 = s0(), [t8, n8] = e8(c0), o8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, name: o, defaultValue: r, value: a, required: i = !1, disabled: s = !1, orientation: l, dir: c, loop: u = !0, onValueChange: d, ...f } = e, p = u0(n), m = Yt(c), [g, h] = Ue({
    prop: a,
    defaultProp: r,
    onChange: d
  });
  return /* @__PURE__ */ x(t8, {
    scope: n,
    name: o,
    required: i,
    disabled: s,
    value: g,
    onValueChange: h
  }, /* @__PURE__ */ x(zr, P({
    asChild: !0
  }, p, {
    orientation: l,
    dir: m,
    loop: u
  }), /* @__PURE__ */ x(ie.div, P({
    role: "radiogroup",
    "aria-required": i,
    "aria-orientation": l,
    "data-disabled": s ? "" : void 0,
    dir: m
  }, f, {
    ref: t
  }))));
}), r8 = "RadioGroupItem", a8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, disabled: o, ...r } = e, a = n8(r8, n), i = a.disabled || o, s = u0(n), l = d0(n), c = q(null), u = be(t, c), d = a.value === r.value, f = q(!1);
  return le(() => {
    const p = (g) => {
      J4.includes(g.key) && (f.current = !0);
    }, m = () => f.current = !1;
    return document.addEventListener("keydown", p), document.addEventListener("keyup", m), () => {
      document.removeEventListener("keydown", p), document.removeEventListener("keyup", m);
    };
  }, []), /* @__PURE__ */ x(Vr, P({
    asChild: !0
  }, s, {
    focusable: !i,
    active: d
  }), /* @__PURE__ */ x(q4, P({
    disabled: i,
    required: a.required,
    checked: d
  }, l, r, {
    name: a.name,
    ref: u,
    onCheck: () => a.onValueChange(r.value),
    onKeyDown: Y((p) => {
      p.key === "Enter" && p.preventDefault();
    }),
    onFocus: Y(r.onFocus, () => {
      var p;
      f.current && ((p = c.current) === null || p === void 0 || p.click());
    })
  })));
}), i8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeRadioGroup: n, ...o } = e, r = d0(n);
  return /* @__PURE__ */ x(Z4, P({}, r, o, {
    ref: t
  }));
}), f0 = o8, p0 = a8, s8 = i8, l8 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  f0,
  {
    className: L("grid gap-2", e),
    ...t,
    ref: n
  }
));
l8.displayName = f0.displayName;
const c8 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  p0,
  {
    ref: n,
    className: L(
      "aspect-square h-4 w-4 rounded-full border border-slate-200 border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50          ",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(s8, { className: "flex items-center justify-center", children: /* @__PURE__ */ b(Ka, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
c8.displayName = p0.displayName;
const {
  createElement: No,
  createContext: u8,
  createRef: OM,
  forwardRef: m0,
  useCallback: $t,
  useContext: g0,
  useEffect: Zn,
  useImperativeHandle: h0,
  useLayoutEffect: d8,
  useMemo: f8,
  useRef: vt,
  useState: sr
} = $, ad = $.useId, p8 = d8, di = u8(null);
di.displayName = "PanelGroupContext";
const Qn = p8, m8 = typeof ad == "function" ? ad : () => null;
let g8 = 0;
function Mc(e = null) {
  const t = m8(), n = vt(e || t || null);
  return n.current === null && (n.current = "" + g8++), e ?? n.current;
}
function v0({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: o,
  defaultSize: r,
  forwardedRef: a,
  id: i,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: u,
  onResize: d,
  order: f,
  style: p,
  tagName: m = "div",
  ...g
}) {
  const h = g0(di);
  if (h === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: v,
    expandPanel: w,
    getPanelSize: y,
    getPanelStyle: C,
    groupId: _,
    isPanelCollapsed: S,
    reevaluatePanelConstraints: E,
    registerPanel: T,
    resizePanel: N,
    unregisterPanel: k
  } = h, F = Mc(i), z = vt({
    callbacks: {
      onCollapse: c,
      onExpand: u,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: o,
      defaultSize: r,
      maxSize: s,
      minSize: l
    },
    id: F,
    idIsFromProps: i !== void 0,
    order: f
  });
  vt({
    didLogMissingDefaultSizeWarning: !1
  }), Qn(() => {
    const {
      callbacks: A,
      constraints: V
    } = z.current, J = {
      ...V
    };
    z.current.id = F, z.current.idIsFromProps = i !== void 0, z.current.order = f, A.onCollapse = c, A.onExpand = u, A.onResize = d, V.collapsedSize = n, V.collapsible = o, V.defaultSize = r, V.maxSize = s, V.minSize = l, (J.collapsedSize !== V.collapsedSize || J.collapsible !== V.collapsible || J.maxSize !== V.maxSize || J.minSize !== V.minSize) && E(z.current, J);
  }), Qn(() => {
    const A = z.current;
    return T(A), () => {
      k(A);
    };
  }, [f, F, T, k]), h0(a, () => ({
    collapse: () => {
      v(z.current);
    },
    expand: (A) => {
      w(z.current, A);
    },
    getId() {
      return F;
    },
    getSize() {
      return y(z.current);
    },
    isCollapsed() {
      return S(z.current);
    },
    isExpanded() {
      return !S(z.current);
    },
    resize: (A) => {
      N(z.current, A);
    }
  }), [v, w, y, S, F, N]);
  const ae = C(z.current, r);
  return No(m, {
    ...g,
    children: e,
    className: t,
    id: i,
    style: {
      ...ae,
      ...p
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": o || void 0,
    "data-panel-group-id": _,
    "data-panel-id": F,
    "data-panel-size": parseFloat("" + ae.flexGrow).toFixed(1)
  });
}
const b0 = m0((e, t) => No(v0, {
  ...e,
  forwardedRef: t
}));
v0.displayName = "Panel";
b0.displayName = "forwardRef(Panel)";
let Ws = null, Yn = null;
function h8(e, t) {
  if (t) {
    const n = (t & C0) !== 0, o = (t & S0) !== 0, r = (t & _0) !== 0, a = (t & E0) !== 0;
    if (n)
      return r ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (o)
      return r ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (r)
      return "s-resize";
    if (a)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function v8() {
  Yn !== null && (document.head.removeChild(Yn), Ws = null, Yn = null);
}
function Qi(e, t) {
  const n = h8(e, t);
  Ws !== n && (Ws = n, Yn === null && (Yn = document.createElement("style"), document.head.appendChild(Yn)), Yn.innerHTML = `*{cursor: ${n}!important;}`);
}
function w0(e) {
  return e.type === "keydown";
}
function y0(e) {
  return e.type.startsWith("pointer");
}
function x0(e) {
  return e.type.startsWith("mouse");
}
function fi(e) {
  if (y0(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (x0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function b8() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function w8(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function y8(e, t) {
  if (e === t)
    throw new Error("Cannot compare node with itself");
  const n = {
    a: ld(e),
    b: ld(t)
  };
  let o;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), o = e;
  Re(o, "Stacking order can only be calculated for elements with a common ancestor");
  const r = {
    a: sd(id(n.a)),
    b: sd(id(n.b))
  };
  if (r.a === r.b) {
    const a = o.childNodes, i = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = a.length;
    for (; s--; ) {
      const l = a[s];
      if (l === i.a)
        return 1;
      if (l === i.b)
        return -1;
    }
  }
  return Math.sign(r.a - r.b);
}
const x8 = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function $8(e) {
  var t;
  const n = getComputedStyle((t = $0(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function C8(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || $8(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || x8.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function id(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (Re(n, "Missing node"), C8(n))
      return n;
  }
  return null;
}
function sd(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function ld(e) {
  const t = [];
  for (; e; )
    t.push(e), e = $0(e);
  return t;
}
function $0(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const C0 = 1, S0 = 2, _0 = 4, E0 = 8, S8 = b8() === "coarse";
let On = [], pi = !1, Nn = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map();
const xr = /* @__PURE__ */ new Set();
function _8(e, t, n, o, r) {
  var a;
  const {
    ownerDocument: i
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: o,
    setResizeHandlerState: r
  }, l = (a = Nn.get(i)) !== null && a !== void 0 ? a : 0;
  return Nn.set(i, l + 1), xr.add(s), Ba(), function() {
    var u;
    mi.delete(e), xr.delete(s);
    const d = (u = Nn.get(i)) !== null && u !== void 0 ? u : 1;
    Nn.set(i, d - 1), Ba(), d === 1 && Nn.delete(i);
  };
}
function cd(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: o
  } = fi(e);
  pi = !0, Nc({
    target: t,
    x: n,
    y: o
  }), Ba(), On.length > 0 && (Dc("down", e), e.preventDefault(), e.stopPropagation());
}
function Jo(e) {
  const {
    x: t,
    y: n
  } = fi(e);
  if (!pi) {
    const {
      target: o
    } = e;
    Nc({
      target: o,
      x: t,
      y: n
    });
  }
  Dc("move", e), P0(), On.length > 0 && e.preventDefault();
}
function wo(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: o
  } = fi(e);
  mi.clear(), pi = !1, On.length > 0 && e.preventDefault(), Dc("up", e), Nc({
    target: t,
    x: n,
    y: o
  }), P0(), Ba();
}
function Nc({
  target: e,
  x: t,
  y: n
}) {
  On.splice(0);
  let o = null;
  e instanceof HTMLElement && (o = e), xr.forEach((r) => {
    const {
      element: a,
      hitAreaMargins: i
    } = r, s = a.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: u,
      top: d
    } = s, f = S8 ? i.coarse : i.fine;
    if (t >= c - f && t <= u + f && n >= d - f && n <= l + f) {
      if (o !== null && a !== o && !a.contains(o) && !o.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      y8(o, a) > 0) {
        let m = o, g = !1;
        for (; m && !m.contains(a); ) {
          if (w8(m.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          m = m.parentElement;
        }
        if (g)
          return;
      }
      On.push(r);
    }
  });
}
function Ji(e, t) {
  mi.set(e, t);
}
function P0() {
  let e = !1, t = !1;
  On.forEach((o) => {
    const {
      direction: r
    } = o;
    r === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  mi.forEach((o) => {
    n |= o;
  }), e && t ? Qi("intersection", n) : e ? Qi("horizontal", n) : t ? Qi("vertical", n) : v8();
}
function Ba() {
  Nn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", wo), n.removeEventListener("pointerdown", cd), n.removeEventListener("pointerleave", Jo), n.removeEventListener("pointermove", Jo);
  }), window.removeEventListener("pointerup", wo), window.removeEventListener("pointercancel", wo), xr.size > 0 && (pi ? (On.length > 0 && Nn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", wo), n.addEventListener("pointerleave", Jo), n.addEventListener("pointermove", Jo));
  }), window.addEventListener("pointerup", wo), window.addEventListener("pointercancel", wo)) : Nn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", cd, {
      capture: !0
    }), n.addEventListener("pointermove", Jo));
  }));
}
function Dc(e, t) {
  xr.forEach((n) => {
    const {
      setResizeHandlerState: o
    } = n, r = On.includes(n);
    o(e, r, t);
  });
}
function Re(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const Tc = 10;
function ro(e, t, n = Tc) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function vn(e, t, n = Tc) {
  return ro(e, t, n) === 0;
}
function St(e, t, n) {
  return ro(e, t, n) === 0;
}
function E8(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const r = e[o], a = t[o];
    if (!St(r, a, n))
      return !1;
  }
  return !0;
}
function Co({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const o = e[t];
  Re(o != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: r = 0,
    collapsible: a,
    maxSize: i = 100,
    minSize: s = 0
  } = o;
  if (ro(n, s) < 0)
    if (a) {
      const l = (r + s) / 2;
      ro(n, l) < 0 ? n = r : n = s;
    } else
      n = s;
  return n = Math.min(i, n), n = parseFloat(n.toFixed(Tc)), n;
}
function rr({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: o,
  prevLayout: r,
  trigger: a
}) {
  if (St(e, 0))
    return t;
  const i = [...t], [s, l] = o;
  Re(s != null, "Invalid first pivot index"), Re(l != null, "Invalid second pivot index");
  let c = 0;
  if (a === "keyboard") {
    {
      const d = e < 0 ? l : s, f = n[d];
      Re(f, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: p = 0,
        collapsible: m,
        minSize: g = 0
      } = f;
      if (m) {
        const h = t[d];
        if (Re(h != null, `Previous layout not found for panel index ${d}`), St(h, p)) {
          const v = g - h;
          ro(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
    {
      const d = e < 0 ? s : l, f = n[d];
      Re(f, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: p = 0,
        collapsible: m,
        minSize: g = 0
      } = f;
      if (m) {
        const h = t[d];
        if (Re(h != null, `Previous layout not found for panel index ${d}`), St(h, g)) {
          const v = h - p;
          ro(v, Math.abs(e)) > 0 && (e = e < 0 ? 0 - v : v);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let f = e < 0 ? l : s, p = 0;
    for (; ; ) {
      const g = t[f];
      Re(g != null, `Previous layout not found for panel index ${f}`);
      const v = Co({
        panelConstraints: n,
        panelIndex: f,
        size: 100
      }) - g;
      if (p += v, f += d, f < 0 || f >= n.length)
        break;
    }
    const m = Math.min(Math.abs(e), Math.abs(p));
    e = e < 0 ? 0 - m : m;
  }
  {
    let f = e < 0 ? s : l;
    for (; f >= 0 && f < n.length; ) {
      const p = Math.abs(e) - Math.abs(c), m = t[f];
      Re(m != null, `Previous layout not found for panel index ${f}`);
      const g = m - p, h = Co({
        panelConstraints: n,
        panelIndex: f,
        size: g
      });
      if (!St(m, h) && (c += m - h, i[f] = h, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? f-- : f++;
    }
  }
  if (E8(r, i))
    return r;
  {
    const d = e < 0 ? l : s, f = t[d];
    Re(f != null, `Previous layout not found for panel index ${d}`);
    const p = f + c, m = Co({
      panelConstraints: n,
      panelIndex: d,
      size: p
    });
    if (i[d] = m, !St(m, p)) {
      let g = p - m, v = e < 0 ? l : s;
      for (; v >= 0 && v < n.length; ) {
        const w = i[v];
        Re(w != null, `Previous layout not found for panel index ${v}`);
        const y = w + g, C = Co({
          panelConstraints: n,
          panelIndex: v,
          size: y
        });
        if (St(w, C) || (g -= C - w, i[v] = C), St(g, 0))
          break;
        e > 0 ? v-- : v++;
      }
    }
  }
  const u = i.reduce((d, f) => f + d, 0);
  return St(u, 100) ? i : r;
}
function P8({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let o = 0, r = 100, a = 0, i = 0;
  const s = n[0];
  Re(s != null, "No pivot index found"), t.forEach((d, f) => {
    const {
      constraints: p
    } = d, {
      maxSize: m = 100,
      minSize: g = 0
    } = p;
    f === s ? (o = g, r = m) : (a += g, i += m);
  });
  const l = Math.min(r, 100 - a), c = Math.max(o, 100 - i), u = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: u
  };
}
function $r(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function R0(e, t, n = document) {
  const r = $r(e, n).findIndex((a) => a.getAttribute("data-panel-resize-handle-id") === t);
  return r ?? null;
}
function M0(e, t, n) {
  const o = R0(e, t, n);
  return o != null ? [o, o + 1] : [-1, -1];
}
function N0(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const o = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return o || null;
}
function gi(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function R8(e, t, n, o = document) {
  var r, a, i, s;
  const l = gi(t, o), c = $r(e, o), u = l ? c.indexOf(l) : -1, d = (r = (a = n[u]) === null || a === void 0 ? void 0 : a.id) !== null && r !== void 0 ? r : null, f = (i = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && i !== void 0 ? i : null;
  return [d, f];
}
function M8({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: o,
  panelDataArray: r,
  panelGroupElement: a,
  setLayout: i
}) {
  vt({
    didWarnAboutMissingResizeHandle: !1
  }), Qn(() => {
    if (!a)
      return;
    const s = $r(n, a);
    for (let l = 0; l < r.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: u,
        valueNow: d
      } = P8({
        layout: o,
        panelsArray: r,
        pivotIndices: [l, l + 1]
      }), f = s[l];
      if (f != null) {
        const p = r[l];
        Re(p, `No panel data found for index "${l}"`), f.setAttribute("aria-controls", p.id), f.setAttribute("aria-valuemax", "" + Math.round(c)), f.setAttribute("aria-valuemin", "" + Math.round(u)), f.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, o, r, a]), Zn(() => {
    if (!a)
      return;
    const s = t.current;
    Re(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = N0(n, a);
    Re(c != null, `No group found for id "${n}"`);
    const u = $r(n, a);
    Re(u, `No resize handles found for group id "${n}"`);
    const d = u.map((f) => {
      const p = f.getAttribute("data-panel-resize-handle-id");
      Re(p, "Resize handle element has no handle id attribute");
      const [m, g] = R8(n, p, l, a);
      if (m == null || g == null)
        return () => {
        };
      const h = (v) => {
        if (!v.defaultPrevented)
          switch (v.key) {
            case "Enter": {
              v.preventDefault();
              const w = l.findIndex((y) => y.id === m);
              if (w >= 0) {
                const y = l[w];
                Re(y, `No panel data found for index ${w}`);
                const C = o[w], {
                  collapsedSize: _ = 0,
                  collapsible: S,
                  minSize: E = 0
                } = y.constraints;
                if (C != null && S) {
                  const T = rr({
                    delta: St(C, _) ? E - _ : _ - C,
                    initialLayout: o,
                    panelConstraints: l.map((N) => N.constraints),
                    pivotIndices: M0(n, p, a),
                    prevLayout: o,
                    trigger: "keyboard"
                  });
                  o !== T && i(T);
                }
              }
              break;
            }
          }
      };
      return f.addEventListener("keydown", h), () => {
        f.removeEventListener("keydown", h);
      };
    });
    return () => {
      d.forEach((f) => f());
    };
  }, [a, e, t, n, o, r, i]);
}
function ud(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function D0(e, t) {
  const n = e === "horizontal", {
    x: o,
    y: r
  } = fi(t);
  return n ? o : r;
}
function N8(e, t, n, o, r) {
  const a = n === "horizontal", i = gi(t, r);
  Re(i, `No resize handle element found for id "${t}"`);
  const s = i.getAttribute("data-panel-group-id");
  Re(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = o;
  const c = D0(n, e), u = N0(s, r);
  Re(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), f = a ? d.width : d.height;
  return (c - l) / f * 100;
}
function D8(e, t, n, o, r, a) {
  if (w0(e)) {
    const i = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : r != null ? s = r : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = i ? 0 : s;
        break;
      case "ArrowLeft":
        l = i ? -s : 0;
        break;
      case "ArrowRight":
        l = i ? s : 0;
        break;
      case "ArrowUp":
        l = i ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return o == null ? 0 : N8(e, t, n, o, a);
}
function T8({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let o = 0, r = 100;
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    Re(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    s != null && (o++, t[a] = s, r -= s);
  }
  for (let a = 0; a < e.length; a++) {
    const i = n[a];
    Re(i, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: s
    } = i;
    if (s != null)
      continue;
    const l = e.length - o, c = r / l;
    o++, t[a] = c, r -= c;
  }
  return t;
}
function yo(e, t, n) {
  t.forEach((o, r) => {
    const a = e[r];
    Re(a, `Panel data not found for index ${r}`);
    const {
      callbacks: i,
      constraints: s,
      id: l
    } = a, {
      collapsedSize: c = 0,
      collapsible: u
    } = s, d = n[l];
    if (d == null || o !== d) {
      n[l] = o;
      const {
        onCollapse: f,
        onExpand: p,
        onResize: m
      } = i;
      m && m(o, d), u && (f || p) && (p && (d == null || vn(d, c)) && !vn(o, c) && p(), f && (d == null || !vn(d, c)) && vn(o, c) && f());
    }
  });
}
function ra(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function A8({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: o,
  panelIndex: r,
  precision: a = 3
}) {
  const i = n[r];
  let s;
  return i == null ? s = e != null ? e.toPrecision(a) : "1" : o.length === 1 ? s = "1" : s = i.toPrecision(a), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function I8(e, t = 10) {
  let n = null;
  return (...r) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...r);
    }, t);
  };
}
function dd(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function T0(e) {
  return `react-resizable-panels:${e}`;
}
function A0(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: o,
      idIsFromProps: r,
      order: a
    } = t;
    return r ? o : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function I0(e, t) {
  try {
    const n = T0(e), o = t.getItem(n);
    if (o) {
      const r = JSON.parse(o);
      if (typeof r == "object" && r != null)
        return r;
    }
  } catch {
  }
  return null;
}
function O8(e, t, n) {
  var o, r;
  const a = (o = I0(e, n)) !== null && o !== void 0 ? o : {}, i = A0(t);
  return (r = a[i]) !== null && r !== void 0 ? r : null;
}
function k8(e, t, n, o, r) {
  var a;
  const i = T0(e), s = A0(t), l = (a = I0(e, r)) !== null && a !== void 0 ? a : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: o
  };
  try {
    r.setItem(i, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function fd({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], o = n.reduce((a, i) => a + i, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!St(o, 100))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      Re(i != null, `No layout data found for index ${a}`);
      const s = 100 / o * i;
      n[a] = s;
    }
  let r = 0;
  for (let a = 0; a < t.length; a++) {
    const i = n[a];
    Re(i != null, `No layout data found for index ${a}`);
    const s = Co({
      panelConstraints: t,
      panelIndex: a,
      size: i
    });
    i != s && (r += i - s, n[a] = s);
  }
  if (!St(r, 0))
    for (let a = 0; a < t.length; a++) {
      const i = n[a];
      Re(i != null, `No layout data found for index ${a}`);
      const s = i + r, l = Co({
        panelConstraints: t,
        panelIndex: a,
        size: s
      });
      if (i !== l && (r -= l - i, n[a] = l, St(r, 0)))
        break;
    }
  return n;
}
const L8 = 100, ar = {
  getItem: (e) => (dd(ar), ar.getItem(e)),
  setItem: (e, t) => {
    dd(ar), ar.setItem(e, t);
  }
}, pd = {};
function O0({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: o,
  forwardedRef: r,
  id: a = null,
  onLayout: i = null,
  keyboardResizeBy: s = null,
  storage: l = ar,
  style: c,
  tagName: u = "div",
  ...d
}) {
  const f = Mc(a), p = vt(null), [m, g] = sr(null), [h, v] = sr([]), w = vt({}), y = vt(/* @__PURE__ */ new Map()), C = vt(0), _ = vt({
    autoSaveId: e,
    direction: o,
    dragState: m,
    id: f,
    keyboardResizeBy: s,
    onLayout: i,
    storage: l
  }), S = vt({
    layout: h,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  vt({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), h0(r, () => ({
    getId: () => _.current.id,
    getLayout: () => {
      const {
        layout: R
      } = S.current;
      return R;
    },
    setLayout: (R) => {
      const {
        onLayout: B
      } = _.current, {
        layout: G,
        panelDataArray: W
      } = S.current, j = fd({
        layout: R,
        panelConstraints: W.map((U) => U.constraints)
      });
      ud(G, j) || (v(j), S.current.layout = j, B && B(j), yo(W, j, w.current));
    }
  }), []), Qn(() => {
    _.current.autoSaveId = e, _.current.direction = o, _.current.dragState = m, _.current.id = f, _.current.onLayout = i, _.current.storage = l;
  }), M8({
    committedValuesRef: _,
    eagerValuesRef: S,
    groupId: f,
    layout: h,
    panelDataArray: S.current.panelDataArray,
    setLayout: v,
    panelGroupElement: p.current
  }), Zn(() => {
    const {
      panelDataArray: R
    } = S.current;
    if (e) {
      if (h.length === 0 || h.length !== R.length)
        return;
      let B = pd[e];
      B == null && (B = I8(k8, L8), pd[e] = B);
      const G = [...R], W = new Map(y.current);
      B(e, G, W, h, l);
    }
  }, [e, h, l]), Zn(() => {
  });
  const E = $t((R) => {
    const {
      onLayout: B
    } = _.current, {
      layout: G,
      panelDataArray: W
    } = S.current;
    if (R.constraints.collapsible) {
      const j = W.map((Z) => Z.constraints), {
        collapsedSize: U = 0,
        panelSize: te,
        pivotIndices: fe
      } = Bn(W, R, G);
      if (Re(te != null, `Panel size not found for panel "${R.id}"`), !vn(te, U)) {
        y.current.set(R.id, te);
        const ce = $o(W, R) === W.length - 1 ? te - U : U - te, O = rr({
          delta: ce,
          initialLayout: G,
          panelConstraints: j,
          pivotIndices: fe,
          prevLayout: G,
          trigger: "imperative-api"
        });
        ra(G, O) || (v(O), S.current.layout = O, B && B(O), yo(W, O, w.current));
      }
    }
  }, []), T = $t((R, B) => {
    const {
      onLayout: G
    } = _.current, {
      layout: W,
      panelDataArray: j
    } = S.current;
    if (R.constraints.collapsible) {
      const U = j.map((ne) => ne.constraints), {
        collapsedSize: te = 0,
        panelSize: fe = 0,
        minSize: Z = 0,
        pivotIndices: ce
      } = Bn(j, R, W), O = B ?? Z;
      if (vn(fe, te)) {
        const ne = y.current.get(R.id), ge = ne != null && ne >= O ? ne : O, Se = $o(j, R) === j.length - 1 ? fe - ge : ge - fe, ve = rr({
          delta: Se,
          initialLayout: W,
          panelConstraints: U,
          pivotIndices: ce,
          prevLayout: W,
          trigger: "imperative-api"
        });
        ra(W, ve) || (v(ve), S.current.layout = ve, G && G(ve), yo(j, ve, w.current));
      }
    }
  }, []), N = $t((R) => {
    const {
      layout: B,
      panelDataArray: G
    } = S.current, {
      panelSize: W
    } = Bn(G, R, B);
    return Re(W != null, `Panel size not found for panel "${R.id}"`), W;
  }, []), k = $t((R, B) => {
    const {
      panelDataArray: G
    } = S.current, W = $o(G, R);
    return A8({
      defaultSize: B,
      dragState: m,
      layout: h,
      panelData: G,
      panelIndex: W
    });
  }, [m, h]), F = $t((R) => {
    const {
      layout: B,
      panelDataArray: G
    } = S.current, {
      collapsedSize: W = 0,
      collapsible: j,
      panelSize: U
    } = Bn(G, R, B);
    return Re(U != null, `Panel size not found for panel "${R.id}"`), j === !0 && vn(U, W);
  }, []), z = $t((R) => {
    const {
      layout: B,
      panelDataArray: G
    } = S.current, {
      collapsedSize: W = 0,
      collapsible: j,
      panelSize: U
    } = Bn(G, R, B);
    return Re(U != null, `Panel size not found for panel "${R.id}"`), !j || ro(U, W) > 0;
  }, []), ae = $t((R) => {
    const {
      panelDataArray: B
    } = S.current;
    B.push(R), B.sort((G, W) => {
      const j = G.order, U = W.order;
      return j == null && U == null ? 0 : j == null ? -1 : U == null ? 1 : j - U;
    }), S.current.panelDataArrayChanged = !0;
  }, []);
  Qn(() => {
    if (S.current.panelDataArrayChanged) {
      S.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: R,
        onLayout: B,
        storage: G
      } = _.current, {
        layout: W,
        panelDataArray: j
      } = S.current;
      let U = null;
      if (R) {
        const fe = O8(R, j, G);
        fe && (y.current = new Map(Object.entries(fe.expandToSizes)), U = fe.layout);
      }
      U == null && (U = T8({
        panelDataArray: j
      }));
      const te = fd({
        layout: U,
        panelConstraints: j.map((fe) => fe.constraints)
      });
      ud(W, te) || (v(te), S.current.layout = te, B && B(te), yo(j, te, w.current));
    }
  }), Qn(() => {
    const R = S.current;
    return () => {
      R.layout = [];
    };
  }, []);
  const A = $t((R) => function(G) {
    G.preventDefault();
    const W = p.current;
    if (!W)
      return () => null;
    const {
      direction: j,
      dragState: U,
      id: te,
      keyboardResizeBy: fe,
      onLayout: Z
    } = _.current, {
      layout: ce,
      panelDataArray: O
    } = S.current, {
      initialLayout: ne
    } = U ?? {}, ge = M0(te, R, W);
    let de = D8(G, R, j, U, fe, W);
    if (de === 0)
      return;
    const Se = j === "horizontal";
    document.dir === "rtl" && Se && (de = -de);
    const ve = O.map((qe) => qe.constraints), Ee = rr({
      delta: de,
      initialLayout: ne ?? ce,
      panelConstraints: ve,
      pivotIndices: ge,
      prevLayout: ce,
      trigger: w0(G) ? "keyboard" : "mouse-or-touch"
    }), Ae = !ra(ce, Ee);
    (y0(G) || x0(G)) && C.current != de && (C.current = de, Ae ? Ji(R, 0) : Se ? Ji(R, de < 0 ? C0 : S0) : Ji(R, de < 0 ? _0 : E0)), Ae && (v(Ee), S.current.layout = Ee, Z && Z(Ee), yo(O, Ee, w.current));
  }, []), V = $t((R, B) => {
    const {
      onLayout: G
    } = _.current, {
      layout: W,
      panelDataArray: j
    } = S.current, U = j.map((ne) => ne.constraints), {
      panelSize: te,
      pivotIndices: fe
    } = Bn(j, R, W);
    Re(te != null, `Panel size not found for panel "${R.id}"`);
    const ce = $o(j, R) === j.length - 1 ? te - B : B - te, O = rr({
      delta: ce,
      initialLayout: W,
      panelConstraints: U,
      pivotIndices: fe,
      prevLayout: W,
      trigger: "imperative-api"
    });
    ra(W, O) || (v(O), S.current.layout = O, G && G(O), yo(j, O, w.current));
  }, []), J = $t((R, B) => {
    const {
      layout: G,
      panelDataArray: W
    } = S.current, {
      collapsedSize: j = 0,
      collapsible: U
    } = B, {
      collapsedSize: te = 0,
      collapsible: fe,
      maxSize: Z = 100,
      minSize: ce = 0
    } = R.constraints, {
      panelSize: O
    } = Bn(W, R, G);
    O != null && (U && fe && vn(O, j) ? vn(j, te) || V(R, te) : O < ce ? V(R, ce) : O > Z && V(R, Z));
  }, [V]), H = $t((R, B) => {
    const {
      direction: G
    } = _.current, {
      layout: W
    } = S.current;
    if (!p.current)
      return;
    const j = gi(R, p.current);
    Re(j, `Drag handle element not found for id "${R}"`);
    const U = D0(G, B);
    g({
      dragHandleId: R,
      dragHandleRect: j.getBoundingClientRect(),
      initialCursorPosition: U,
      initialLayout: W
    });
  }, []), K = $t(() => {
    g(null);
  }, []), X = $t((R) => {
    const {
      panelDataArray: B
    } = S.current, G = $o(B, R);
    G >= 0 && (B.splice(G, 1), delete w.current[R.id], S.current.panelDataArrayChanged = !0);
  }, []), se = f8(() => ({
    collapsePanel: E,
    direction: o,
    dragState: m,
    expandPanel: T,
    getPanelSize: N,
    getPanelStyle: k,
    groupId: f,
    isPanelCollapsed: F,
    isPanelExpanded: z,
    reevaluatePanelConstraints: J,
    registerPanel: ae,
    registerResizeHandle: A,
    resizePanel: V,
    startDragging: H,
    stopDragging: K,
    unregisterPanel: X,
    panelGroupElement: p.current
  }), [E, m, o, T, N, k, f, F, z, J, ae, A, V, H, K, X]), ee = {
    display: "flex",
    flexDirection: o === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return No(di.Provider, {
    value: se
  }, No(u, {
    ...d,
    children: t,
    className: n,
    id: a,
    ref: p,
    style: {
      ...ee,
      ...c
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": o,
    "data-panel-group-id": f
  }));
}
const k0 = m0((e, t) => No(O0, {
  ...e,
  forwardedRef: t
}));
O0.displayName = "PanelGroup";
k0.displayName = "forwardRef(PanelGroup)";
function $o(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function Bn(e, t, n) {
  const o = $o(e, t), a = o === e.length - 1 ? [o - 1, o] : [o, o + 1], i = n[o];
  return {
    ...t.constraints,
    panelSize: i,
    pivotIndices: a
  };
}
function F8({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: o
}) {
  Zn(() => {
    if (e || n == null || o == null)
      return;
    const r = gi(t, o);
    if (r == null)
      return;
    const a = (i) => {
      if (!i.defaultPrevented)
        switch (i.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            i.preventDefault(), n(i);
            break;
          }
          case "F6": {
            i.preventDefault();
            const s = r.getAttribute("data-panel-group-id");
            Re(s, `No group element found for id "${s}"`);
            const l = $r(s, o), c = R0(s, t, o);
            Re(c !== null, `No resize element found for id "${t}"`);
            const u = i.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[u].focus();
            break;
          }
        }
    };
    return r.addEventListener("keydown", a), () => {
      r.removeEventListener("keydown", a);
    };
  }, [o, e, t, n]);
}
function L0({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: o,
  id: r,
  onDragging: a,
  style: i = {},
  tabIndex: s = 0,
  tagName: l = "div",
  ...c
}) {
  var u, d;
  const f = vt(null), p = vt({
    onDragging: a
  });
  Zn(() => {
    p.current.onDragging = a;
  });
  const m = g0(di);
  if (m === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: g,
    groupId: h,
    registerResizeHandle: v,
    startDragging: w,
    stopDragging: y,
    panelGroupElement: C
  } = m, _ = Mc(r), [S, E] = sr("inactive"), [T, N] = sr(!1), [k, F] = sr(null), z = vt({
    state: S
  });
  Qn(() => {
    z.current.state = S;
  }), Zn(() => {
    if (n)
      F(null);
    else {
      const J = v(_);
      F(() => J);
    }
  }, [n, _, v]);
  const ae = (u = o == null ? void 0 : o.coarse) !== null && u !== void 0 ? u : 15, A = (d = o == null ? void 0 : o.fine) !== null && d !== void 0 ? d : 5;
  return Zn(() => {
    if (n || k == null)
      return;
    const J = f.current;
    return Re(J, "Element ref not attached"), _8(_, J, g, {
      coarse: ae,
      fine: A
    }, (K, X, se) => {
      if (X)
        switch (K) {
          case "down": {
            E("drag"), w(_, se);
            const {
              onDragging: ee
            } = p.current;
            ee && ee(!0);
            break;
          }
          case "move": {
            const {
              state: ee
            } = z.current;
            ee !== "drag" && E("hover"), k(se);
            break;
          }
          case "up": {
            E("hover"), y();
            const {
              onDragging: ee
            } = p.current;
            ee && ee(!1);
            break;
          }
        }
      else
        E("inactive");
    });
  }, [ae, g, n, A, v, _, k, w, y]), F8({
    disabled: n,
    handleId: _,
    resizeHandler: k,
    panelGroupElement: C
  }), No(l, {
    ...c,
    children: e,
    className: t,
    id: r,
    onBlur: () => N(!1),
    onFocus: () => N(!0),
    ref: f,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...i
    },
    tabIndex: s,
    // CSS selectors
    "data-panel-group-direction": g,
    "data-panel-group-id": h,
    "data-resize-handle": "",
    "data-resize-handle-active": S === "drag" ? "pointer" : T ? "keyboard" : void 0,
    "data-resize-handle-state": S,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": _
  });
}
L0.displayName = "PanelResizeHandle";
const kM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  k0,
  {
    className: L(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), LM = b0, FM = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ b(
  L0,
  {
    className: L(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90    ",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ b("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200    ", children: /* @__PURE__ */ b(Bb, { className: "h-2.5 w-2.5" }) })
  }
);
function Cr(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function z8(e, t) {
  return Hd((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const F0 = "ScrollArea", [z0, zM] = Ve(F0), [V8, Ot] = z0(F0), H8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, type: o = "hover", dir: r, scrollHideDelay: a = 600, ...i } = e, [s, l] = re(null), [c, u] = re(null), [d, f] = re(null), [p, m] = re(null), [g, h] = re(null), [v, w] = re(0), [y, C] = re(0), [_, S] = re(!1), [E, T] = re(!1), N = be(
    t,
    (F) => l(F)
  ), k = Yt(r);
  return /* @__PURE__ */ x(V8, {
    scope: n,
    type: o,
    dir: k,
    scrollHideDelay: a,
    scrollArea: s,
    viewport: c,
    onViewportChange: u,
    content: d,
    onContentChange: f,
    scrollbarX: p,
    onScrollbarXChange: m,
    scrollbarXEnabled: _,
    onScrollbarXEnabledChange: S,
    scrollbarY: g,
    onScrollbarYChange: h,
    scrollbarYEnabled: E,
    onScrollbarYEnabledChange: T,
    onCornerWidthChange: w,
    onCornerHeightChange: C
  }, /* @__PURE__ */ x(ie.div, P({
    dir: k
  }, i, {
    ref: N,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": v + "px",
      "--radix-scroll-area-corner-height": y + "px",
      ...e.style
    }
  })));
}), B8 = "ScrollAreaViewport", G8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, children: o, ...r } = e, a = Ot(B8, n), i = q(null), s = be(t, i, a.onViewportChange);
  return /* @__PURE__ */ x(on, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(ie.div, P({
    "data-radix-scroll-area-viewport": ""
  }, r, {
    ref: s,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: a.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: a.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ x("div", {
    ref: a.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, o)));
}), Cn = "ScrollAreaScrollbar", V0 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = Ot(Cn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: i } = r, s = e.orientation === "horizontal";
  return le(() => (s ? a(!0) : i(!0), () => {
    s ? a(!1) : i(!1);
  }), [
    s,
    a,
    i
  ]), r.type === "hover" ? /* @__PURE__ */ x(W8, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "scroll" ? /* @__PURE__ */ x(j8, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "auto" ? /* @__PURE__ */ x(H0, P({}, o, {
    ref: t,
    forceMount: n
  })) : r.type === "always" ? /* @__PURE__ */ x(Ac, P({}, o, {
    ref: t
  })) : null;
}), W8 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = Ot(Cn, e.__scopeScrollArea), [a, i] = re(!1);
  return le(() => {
    const s = r.scrollArea;
    let l = 0;
    if (s) {
      const c = () => {
        window.clearTimeout(l), i(!0);
      }, u = () => {
        l = window.setTimeout(
          () => i(!1),
          r.scrollHideDelay
        );
      };
      return s.addEventListener("pointerenter", c), s.addEventListener("pointerleave", u), () => {
        window.clearTimeout(l), s.removeEventListener("pointerenter", c), s.removeEventListener("pointerleave", u);
      };
    }
  }, [
    r.scrollArea,
    r.scrollHideDelay
  ]), /* @__PURE__ */ x(Ye, {
    present: n || a
  }, /* @__PURE__ */ x(H0, P({
    "data-state": a ? "visible" : "hidden"
  }, o, {
    ref: t
  })));
}), j8 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = Ot(Cn, e.__scopeScrollArea), a = e.orientation === "horizontal", i = vi(
    () => l("SCROLL_END"),
    100
  ), [s, l] = z8("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return le(() => {
    if (s === "idle") {
      const c = window.setTimeout(
        () => l("HIDE"),
        r.scrollHideDelay
      );
      return () => window.clearTimeout(c);
    }
  }, [
    s,
    r.scrollHideDelay,
    l
  ]), le(() => {
    const c = r.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (c) {
      let d = c[u];
      const f = () => {
        const p = c[u];
        d !== p && (l("SCROLL"), i()), d = p;
      };
      return c.addEventListener("scroll", f), () => c.removeEventListener("scroll", f);
    }
  }, [
    r.viewport,
    a,
    l,
    i
  ]), /* @__PURE__ */ x(Ye, {
    present: n || s !== "hidden"
  }, /* @__PURE__ */ x(Ac, P({
    "data-state": s === "hidden" ? "hidden" : "visible"
  }, o, {
    ref: t,
    onPointerEnter: Y(
      e.onPointerEnter,
      () => l("POINTER_ENTER")
    ),
    onPointerLeave: Y(
      e.onPointerLeave,
      () => l("POINTER_LEAVE")
    )
  })));
}), H0 = /* @__PURE__ */ I((e, t) => {
  const n = Ot(Cn, e.__scopeScrollArea), { forceMount: o, ...r } = e, [a, i] = re(!1), s = e.orientation === "horizontal", l = vi(() => {
    if (n.viewport) {
      const c = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(s ? c : u);
    }
  }, 10);
  return Do(n.viewport, l), Do(n.content, l), /* @__PURE__ */ x(Ye, {
    present: o || a
  }, /* @__PURE__ */ x(Ac, P({
    "data-state": a ? "visible" : "hidden"
  }, r, {
    ref: t
  })));
}), Ac = /* @__PURE__ */ I((e, t) => {
  const { orientation: n = "vertical", ...o } = e, r = Ot(Cn, e.__scopeScrollArea), a = q(null), i = q(0), [s, l] = re({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), c = j0(s.viewport, s.content), u = {
    ...o,
    sizes: s,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (f) => a.current = f,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (f) => i.current = f
  };
  function d(f, p) {
    return J8(f, i.current, s, p);
  }
  return n === "horizontal" ? /* @__PURE__ */ x(U8, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (r.viewport && a.current) {
        const f = r.viewport.scrollLeft, p = md(f, s, r.dir);
        a.current.style.transform = `translate3d(${p}px, 0, 0)`;
      }
    },
    onWheelScroll: (f) => {
      r.viewport && (r.viewport.scrollLeft = f);
    },
    onDragScroll: (f) => {
      r.viewport && (r.viewport.scrollLeft = d(f, r.dir));
    }
  })) : n === "vertical" ? /* @__PURE__ */ x(Y8, P({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (r.viewport && a.current) {
        const f = r.viewport.scrollTop, p = md(f, s);
        a.current.style.transform = `translate3d(0, ${p}px, 0)`;
      }
    },
    onWheelScroll: (f) => {
      r.viewport && (r.viewport.scrollTop = f);
    },
    onDragScroll: (f) => {
      r.viewport && (r.viewport.scrollTop = d(f));
    }
  })) : null;
}), U8 = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, a = Ot(Cn, e.__scopeScrollArea), [i, s] = re(), l = q(null), c = be(t, l, a.onScrollbarXChange);
  return le(() => {
    l.current && s(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ x(G0, P({
    "data-orientation": "horizontal"
  }, r, {
    ref: c,
    sizes: n,
    style: {
      bottom: 0,
      left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": hi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(f), Y0(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && a.viewport && i && o({
        content: a.viewport.scrollWidth,
        viewport: a.viewport.offsetWidth,
        scrollbar: {
          size: l.current.clientWidth,
          paddingStart: Ga(i.paddingLeft),
          paddingEnd: Ga(i.paddingRight)
        }
      });
    }
  }));
}), Y8 = /* @__PURE__ */ I((e, t) => {
  const { sizes: n, onSizesChange: o, ...r } = e, a = Ot(Cn, e.__scopeScrollArea), [i, s] = re(), l = q(null), c = be(t, l, a.onScrollbarYChange);
  return le(() => {
    l.current && s(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ x(G0, P({
    "data-orientation": "vertical"
  }, r, {
    ref: c,
    sizes: n,
    style: {
      top: 0,
      right: a.dir === "ltr" ? 0 : void 0,
      left: a.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": hi(n) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (a.viewport) {
        const f = a.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(f), Y0(f, d) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && a.viewport && i && o({
        content: a.viewport.scrollHeight,
        viewport: a.viewport.offsetHeight,
        scrollbar: {
          size: l.current.clientHeight,
          paddingStart: Ga(i.paddingTop),
          paddingEnd: Ga(i.paddingBottom)
        }
      });
    }
  }));
}), [K8, B0] = z0(Cn), G0 = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, sizes: o, hasThumb: r, onThumbChange: a, onThumbPointerUp: i, onThumbPointerDown: s, onThumbPositionChange: l, onDragScroll: c, onWheelScroll: u, onResize: d, ...f } = e, p = Ot(Cn, n), [m, g] = re(null), h = be(
    t,
    (N) => g(N)
  ), v = q(null), w = q(""), y = p.viewport, C = o.content - o.viewport, _ = ke(u), S = ke(l), E = vi(d, 10);
  function T(N) {
    if (v.current) {
      const k = N.clientX - v.current.left, F = N.clientY - v.current.top;
      c({
        x: k,
        y: F
      });
    }
  }
  return le(() => {
    const N = (k) => {
      const F = k.target;
      (m == null ? void 0 : m.contains(F)) && _(k, C);
    };
    return document.addEventListener("wheel", N, {
      passive: !1
    }), () => document.removeEventListener("wheel", N, {
      passive: !1
    });
  }, [
    y,
    m,
    C,
    _
  ]), le(S, [
    o,
    S
  ]), Do(m, E), Do(p.content, E), /* @__PURE__ */ x(K8, {
    scope: n,
    scrollbar: m,
    hasThumb: r,
    onThumbChange: ke(a),
    onThumbPointerUp: ke(i),
    onThumbPositionChange: S,
    onThumbPointerDown: ke(s)
  }, /* @__PURE__ */ x(ie.div, P({}, f, {
    ref: h,
    style: {
      position: "absolute",
      ...f.style
    },
    onPointerDown: Y(e.onPointerDown, (N) => {
      N.button === 0 && (N.target.setPointerCapture(N.pointerId), v.current = m.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", p.viewport && (p.viewport.style.scrollBehavior = "auto"), T(N));
    }),
    onPointerMove: Y(e.onPointerMove, T),
    onPointerUp: Y(e.onPointerUp, (N) => {
      const k = N.target;
      k.hasPointerCapture(N.pointerId) && k.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = w.current, p.viewport && (p.viewport.style.scrollBehavior = ""), v.current = null;
    })
  })));
}), js = "ScrollAreaThumb", q8 = /* @__PURE__ */ I((e, t) => {
  const { forceMount: n, ...o } = e, r = B0(js, e.__scopeScrollArea);
  return /* @__PURE__ */ x(Ye, {
    present: n || r.hasThumb
  }, /* @__PURE__ */ x(X8, P({
    ref: t
  }, o)));
}), X8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, style: o, ...r } = e, a = Ot(js, n), i = B0(js, n), { onThumbPositionChange: s } = i, l = be(
    t,
    (d) => i.onThumbChange(d)
  ), c = q(), u = vi(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return le(() => {
    const d = a.viewport;
    if (d) {
      const f = () => {
        if (u(), !c.current) {
          const p = e9(d, s);
          c.current = p, s();
        }
      };
      return s(), d.addEventListener("scroll", f), () => d.removeEventListener("scroll", f);
    }
  }, [
    a.viewport,
    u,
    s
  ]), /* @__PURE__ */ x(ie.div, P({
    "data-state": i.hasThumb ? "visible" : "hidden"
  }, r, {
    ref: l,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...o
    },
    onPointerDownCapture: Y(e.onPointerDownCapture, (d) => {
      const p = d.target.getBoundingClientRect(), m = d.clientX - p.left, g = d.clientY - p.top;
      i.onThumbPointerDown({
        x: m,
        y: g
      });
    }),
    onPointerUp: Y(e.onPointerUp, i.onThumbPointerUp)
  }));
}), W0 = "ScrollAreaCorner", Z8 = /* @__PURE__ */ I((e, t) => {
  const n = Ot(W0, e.__scopeScrollArea), o = !!(n.scrollbarX && n.scrollbarY);
  return n.type !== "scroll" && o ? /* @__PURE__ */ x(Q8, P({}, e, {
    ref: t
  })) : null;
}), Q8 = /* @__PURE__ */ I((e, t) => {
  const { __scopeScrollArea: n, ...o } = e, r = Ot(W0, n), [a, i] = re(0), [s, l] = re(0), c = !!(a && s);
  return Do(r.scrollbarX, () => {
    var u;
    const d = ((u = r.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    r.onCornerHeightChange(d), l(d);
  }), Do(r.scrollbarY, () => {
    var u;
    const d = ((u = r.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    r.onCornerWidthChange(d), i(d);
  }), c ? /* @__PURE__ */ x(ie.div, P({}, o, {
    ref: t,
    style: {
      width: a,
      height: s,
      position: "absolute",
      right: r.dir === "ltr" ? 0 : void 0,
      left: r.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function Ga(e) {
  return e ? parseInt(e, 10) : 0;
}
function j0(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function hi(e) {
  const t = j0(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, o = (e.scrollbar.size - n) * t;
  return Math.max(o, 18);
}
function J8(e, t, n, o = "ltr") {
  const r = hi(n), a = r / 2, i = t || a, s = r - i, l = n.scrollbar.paddingStart + i, c = n.scrollbar.size - n.scrollbar.paddingEnd - s, u = n.content - n.viewport, d = o === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return U0([
    l,
    c
  ], d)(e);
}
function md(e, t, n = "ltr") {
  const o = hi(t), r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - r, i = t.content - t.viewport, s = a - o, l = n === "ltr" ? [
    0,
    i
  ] : [
    i * -1,
    0
  ], c = Cr(e, l);
  return U0([
    0,
    i
  ], [
    0,
    s
  ])(c);
}
function U0(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function Y0(e, t) {
  return e > 0 && e < t;
}
const e9 = (e, t = () => {
}) => {
  let n = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, o = 0;
  return function r() {
    const a = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, i = n.left !== a.left, s = n.top !== a.top;
    (i || s) && t(), n = a, o = window.requestAnimationFrame(r);
  }(), () => window.cancelAnimationFrame(o);
};
function vi(e, t) {
  const n = ke(e), o = q(0);
  return le(
    () => () => window.clearTimeout(o.current),
    []
  ), he(() => {
    window.clearTimeout(o.current), o.current = window.setTimeout(n, t);
  }, [
    n,
    t
  ]);
}
function Do(e, t) {
  const n = ke(t);
  tt(() => {
    let o = 0;
    if (e) {
      const r = new ResizeObserver(() => {
        cancelAnimationFrame(o), o = window.requestAnimationFrame(n);
      });
      return r.observe(e), () => {
        window.cancelAnimationFrame(o), r.unobserve(e);
      };
    }
  }, [
    e,
    n
  ]);
}
const K0 = H8, t9 = G8, n9 = Z8, o9 = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  K0,
  {
    ref: o,
    className: L("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ b(t9, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ b(q0, {}),
      /* @__PURE__ */ b(n9, {})
    ]
  }
));
o9.displayName = K0.displayName;
const q0 = $.forwardRef(({ className: e, orientation: t = "vertical", ...n }, o) => /* @__PURE__ */ b(
  V0,
  {
    ref: o,
    orientation: t,
    className: L(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ b(q8, { className: "relative flex-1 rounded-full bg-slate-200  " })
  }
));
q0.displayName = V0.displayName;
const r9 = [
  " ",
  "Enter",
  "ArrowUp",
  "ArrowDown"
], a9 = [
  " ",
  "Enter"
], bi = "Select", [wi, yi, i9] = Ln(bi), [Wo, VM] = Ve(bi, [
  i9,
  ln
]), Ic = ln(), [s9, fo] = Wo(bi), [l9, c9] = Wo(bi), u9 = (e) => {
  const { __scopeSelect: t, children: n, open: o, defaultOpen: r, onOpenChange: a, value: i, defaultValue: s, onValueChange: l, dir: c, name: u, autoComplete: d, disabled: f, required: p } = e, m = Ic(t), [g, h] = re(null), [v, w] = re(null), [y, C] = re(!1), _ = Yt(c), [S = !1, E] = Ue({
    prop: o,
    defaultProp: r,
    onChange: a
  }), [T, N] = Ue({
    prop: i,
    defaultProp: s,
    onChange: l
  }), k = q(null), F = g ? !!g.closest("form") : !0, [z, ae] = re(/* @__PURE__ */ new Set()), A = Array.from(z).map(
    (V) => V.props.value
  ).join(";");
  return /* @__PURE__ */ x(Ho, m, /* @__PURE__ */ x(s9, {
    required: p,
    scope: t,
    trigger: g,
    onTriggerChange: h,
    valueNode: v,
    onValueNodeChange: w,
    valueNodeHasChildren: y,
    onValueNodeHasChildrenChange: C,
    contentId: et(),
    value: T,
    onValueChange: N,
    open: S,
    onOpenChange: E,
    dir: _,
    triggerPointerDownPosRef: k,
    disabled: f
  }, /* @__PURE__ */ x(wi.Provider, {
    scope: t
  }, /* @__PURE__ */ x(l9, {
    scope: e.__scopeSelect,
    onNativeOptionAdd: he((V) => {
      ae(
        (J) => new Set(J).add(V)
      );
    }, []),
    onNativeOptionRemove: he((V) => {
      ae((J) => {
        const H = new Set(J);
        return H.delete(V), H;
      });
    }, [])
  }, n)), F ? /* @__PURE__ */ x(eh, {
    key: A,
    "aria-hidden": !0,
    required: p,
    tabIndex: -1,
    name: u,
    autoComplete: d,
    value: T,
    onChange: (V) => N(V.target.value),
    disabled: f
  }, T === void 0 ? /* @__PURE__ */ x("option", {
    value: ""
  }) : null, Array.from(z)) : null));
}, d9 = "SelectTrigger", f9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, disabled: o = !1, ...r } = e, a = Ic(n), i = fo(d9, n), s = i.disabled || o, l = be(t, i.onTriggerChange), c = yi(n), [u, d, f] = th((m) => {
    const g = c().filter(
      (w) => !w.disabled
    ), h = g.find(
      (w) => w.value === i.value
    ), v = nh(g, m, h);
    v !== void 0 && i.onValueChange(v.value);
  }), p = () => {
    s || (i.onOpenChange(!0), f());
  };
  return /* @__PURE__ */ x(Lr, P({
    asChild: !0
  }, a), /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "combobox",
    "aria-controls": i.contentId,
    "aria-expanded": i.open,
    "aria-required": i.required,
    "aria-autocomplete": "none",
    dir: i.dir,
    "data-state": i.open ? "open" : "closed",
    disabled: s,
    "data-disabled": s ? "" : void 0,
    "data-placeholder": J0(i.value) ? "" : void 0
  }, r, {
    ref: l,
    onClick: Y(r.onClick, (m) => {
      m.currentTarget.focus();
    }),
    onPointerDown: Y(r.onPointerDown, (m) => {
      const g = m.target;
      g.hasPointerCapture(m.pointerId) && g.releasePointerCapture(m.pointerId), m.button === 0 && m.ctrlKey === !1 && (p(), i.triggerPointerDownPosRef.current = {
        x: Math.round(m.pageX),
        y: Math.round(m.pageY)
      }, m.preventDefault());
    }),
    onKeyDown: Y(r.onKeyDown, (m) => {
      const g = u.current !== "";
      !(m.ctrlKey || m.altKey || m.metaKey) && m.key.length === 1 && d(m.key), !(g && m.key === " ") && r9.includes(m.key) && (p(), m.preventDefault());
    })
  })));
}), p9 = "SelectValue", m9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: o, style: r, children: a, placeholder: i = "", ...s } = e, l = fo(p9, n), { onValueNodeHasChildrenChange: c } = l, u = a !== void 0, d = be(t, l.onValueNodeChange);
  return tt(() => {
    c(u);
  }, [
    c,
    u
  ]), /* @__PURE__ */ x(ie.span, P({}, s, {
    ref: d,
    style: {
      pointerEvents: "none"
    }
  }), J0(l.value) ? /* @__PURE__ */ x(on, null, i) : a);
}), g9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, children: o, ...r } = e;
  return /* @__PURE__ */ x(ie.span, P({
    "aria-hidden": !0
  }, r, {
    ref: t
  }), o || "▼");
}), h9 = (e) => /* @__PURE__ */ x(Xa, P({
  asChild: !0
}, e)), To = "SelectContent", v9 = /* @__PURE__ */ I((e, t) => {
  const n = fo(To, e.__scopeSelect), [o, r] = re();
  if (tt(() => {
    r(new DocumentFragment());
  }, []), !n.open) {
    const a = o;
    return a ? /* @__PURE__ */ Gd(/* @__PURE__ */ x(X0, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x(wi.Slot, {
      scope: e.__scopeSelect
    }, /* @__PURE__ */ x("div", null, e.children))), a) : null;
  }
  return /* @__PURE__ */ x(b9, P({}, e, {
    ref: t
  }));
}), gn = 10, [X0, po] = Wo(To), b9 = /* @__PURE__ */ I((e, t) => {
  const {
    __scopeSelect: n,
    position: o = "item-aligned",
    onCloseAutoFocus: r,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    side: s,
    sideOffset: l,
    align: c,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: m,
    hideWhenDetached: g,
    avoidCollisions: h,
    //
    ...v
  } = e, w = fo(To, n), [y, C] = re(null), [_, S] = re(null), E = be(
    t,
    (U) => C(U)
  ), [T, N] = re(null), [k, F] = re(null), z = yi(n), [ae, A] = re(!1), V = q(!1);
  le(() => {
    if (y)
      return Ja(y);
  }, [
    y
  ]), Za();
  const J = he((U) => {
    const [te, ...fe] = z().map(
      (O) => O.ref.current
    ), [Z] = fe.slice(-1), ce = document.activeElement;
    for (const O of U)
      if (O === ce || (O == null || O.scrollIntoView({
        block: "nearest"
      }), O === te && _ && (_.scrollTop = 0), O === Z && _ && (_.scrollTop = _.scrollHeight), O == null || O.focus(), document.activeElement !== ce))
        return;
  }, [
    z,
    _
  ]), H = he(
    () => J([
      T,
      y
    ]),
    [
      J,
      T,
      y
    ]
  );
  le(() => {
    ae && H();
  }, [
    ae,
    H
  ]);
  const { onOpenChange: K, triggerPointerDownPosRef: X } = w;
  le(() => {
    if (y) {
      let U = {
        x: 0,
        y: 0
      };
      const te = (Z) => {
        var ce, O, ne, ge;
        U = {
          x: Math.abs(Math.round(Z.pageX) - ((ce = (O = X.current) === null || O === void 0 ? void 0 : O.x) !== null && ce !== void 0 ? ce : 0)),
          y: Math.abs(Math.round(Z.pageY) - ((ne = (ge = X.current) === null || ge === void 0 ? void 0 : ge.y) !== null && ne !== void 0 ? ne : 0))
        };
      }, fe = (Z) => {
        U.x <= 10 && U.y <= 10 ? Z.preventDefault() : y.contains(Z.target) || K(!1), document.removeEventListener("pointermove", te), X.current = null;
      };
      return X.current !== null && (document.addEventListener("pointermove", te), document.addEventListener("pointerup", fe, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", te), document.removeEventListener("pointerup", fe, {
          capture: !0
        });
      };
    }
  }, [
    y,
    K,
    X
  ]), le(() => {
    const U = () => K(!1);
    return window.addEventListener("blur", U), window.addEventListener("resize", U), () => {
      window.removeEventListener("blur", U), window.removeEventListener("resize", U);
    };
  }, [
    K
  ]);
  const [se, ee] = th((U) => {
    const te = z().filter(
      (ce) => !ce.disabled
    ), fe = te.find(
      (ce) => ce.ref.current === document.activeElement
    ), Z = nh(te, U, fe);
    Z && setTimeout(
      () => Z.ref.current.focus()
    );
  }), R = he((U, te, fe) => {
    const Z = !V.current && !fe;
    (w.value !== void 0 && w.value === te || Z) && (N(U), Z && (V.current = !0));
  }, [
    w.value
  ]), B = he(
    () => y == null ? void 0 : y.focus(),
    [
      y
    ]
  ), G = he((U, te, fe) => {
    const Z = !V.current && !fe;
    (w.value !== void 0 && w.value === te || Z) && F(U);
  }, [
    w.value
  ]), W = o === "popper" ? gd : w9, j = W === gd ? {
    side: s,
    sideOffset: l,
    align: c,
    alignOffset: u,
    arrowPadding: d,
    collisionBoundary: f,
    collisionPadding: p,
    sticky: m,
    hideWhenDetached: g,
    avoidCollisions: h
  } : {};
  return /* @__PURE__ */ x(X0, {
    scope: n,
    content: y,
    viewport: _,
    onViewportChange: S,
    itemRefCallback: R,
    selectedItem: T,
    onItemLeave: B,
    itemTextRefCallback: G,
    focusSelectedItem: H,
    selectedItemText: k,
    position: o,
    isPositioned: ae,
    searchRef: se
  }, /* @__PURE__ */ x(Er, {
    as: Bt,
    allowPinchZoom: !0
  }, /* @__PURE__ */ x(qa, {
    asChild: !0,
    trapped: w.open,
    onMountAutoFocus: (U) => {
      U.preventDefault();
    },
    onUnmountAutoFocus: Y(r, (U) => {
      var te;
      (te = w.trigger) === null || te === void 0 || te.focus({
        preventScroll: !0
      }), U.preventDefault();
    })
  }, /* @__PURE__ */ x(ao, {
    asChild: !0,
    disableOutsidePointerEvents: !0,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (U) => U.preventDefault(),
    onDismiss: () => w.onOpenChange(!1)
  }, /* @__PURE__ */ x(W, P({
    role: "listbox",
    id: w.contentId,
    "data-state": w.open ? "open" : "closed",
    dir: w.dir,
    onContextMenu: (U) => U.preventDefault()
  }, v, j, {
    onPlaced: () => A(!0),
    ref: E,
    style: {
      // flex layout so we can place the scroll buttons properly
      display: "flex",
      flexDirection: "column",
      // reset the outline by default as the content MAY get focused
      outline: "none",
      ...v.style
    },
    onKeyDown: Y(v.onKeyDown, (U) => {
      const te = U.ctrlKey || U.altKey || U.metaKey;
      if (U.key === "Tab" && U.preventDefault(), !te && U.key.length === 1 && ee(U.key), [
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End"
      ].includes(U.key)) {
        let Z = z().filter(
          (ce) => !ce.disabled
        ).map(
          (ce) => ce.ref.current
        );
        if ([
          "ArrowUp",
          "End"
        ].includes(U.key) && (Z = Z.slice().reverse()), [
          "ArrowUp",
          "ArrowDown"
        ].includes(U.key)) {
          const ce = U.target, O = Z.indexOf(ce);
          Z = Z.slice(O + 1);
        }
        setTimeout(
          () => J(Z)
        ), U.preventDefault();
      }
    })
  }))))));
}), w9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, onPlaced: o, ...r } = e, a = fo(To, n), i = po(To, n), [s, l] = re(null), [c, u] = re(null), d = be(
    t,
    (E) => u(E)
  ), f = yi(n), p = q(!1), m = q(!0), { viewport: g, selectedItem: h, selectedItemText: v, focusSelectedItem: w } = i, y = he(() => {
    if (a.trigger && a.valueNode && s && c && g && h && v) {
      const E = a.trigger.getBoundingClientRect(), T = c.getBoundingClientRect(), N = a.valueNode.getBoundingClientRect(), k = v.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ce = k.left - T.left, O = N.left - ce, ne = E.left - O, ge = E.width + ne, de = Math.max(ge, T.width), Se = window.innerWidth - gn, ve = Cr(O, [
          gn,
          Se - de
        ]);
        s.style.minWidth = ge + "px", s.style.left = ve + "px";
      } else {
        const ce = T.right - k.right, O = window.innerWidth - N.right - ce, ne = window.innerWidth - E.right - O, ge = E.width + ne, de = Math.max(ge, T.width), Se = window.innerWidth - gn, ve = Cr(O, [
          gn,
          Se - de
        ]);
        s.style.minWidth = ge + "px", s.style.right = ve + "px";
      }
      const F = f(), z = window.innerHeight - gn * 2, ae = g.scrollHeight, A = window.getComputedStyle(c), V = parseInt(A.borderTopWidth, 10), J = parseInt(A.paddingTop, 10), H = parseInt(A.borderBottomWidth, 10), K = parseInt(A.paddingBottom, 10), X = V + J + ae + K + H, se = Math.min(h.offsetHeight * 5, X), ee = window.getComputedStyle(g), R = parseInt(ee.paddingTop, 10), B = parseInt(ee.paddingBottom, 10), G = E.top + E.height / 2 - gn, W = z - G, j = h.offsetHeight / 2, U = h.offsetTop + j, te = V + J + U, fe = X - te;
      if (te <= G) {
        const ce = h === F[F.length - 1].ref.current;
        s.style.bottom = "0px";
        const O = c.clientHeight - g.offsetTop - g.offsetHeight, ne = Math.max(W, j + (ce ? B : 0) + O + H), ge = te + ne;
        s.style.height = ge + "px";
      } else {
        const ce = h === F[0].ref.current;
        s.style.top = "0px";
        const ne = Math.max(G, V + g.offsetTop + (ce ? R : 0) + j) + fe;
        s.style.height = ne + "px", g.scrollTop = te - G + g.offsetTop;
      }
      s.style.margin = `${gn}px 0`, s.style.minHeight = se + "px", s.style.maxHeight = z + "px", o == null || o(), requestAnimationFrame(
        () => p.current = !0
      );
    }
  }, [
    f,
    a.trigger,
    a.valueNode,
    s,
    c,
    g,
    h,
    v,
    a.dir,
    o
  ]);
  tt(
    () => y(),
    [
      y
    ]
  );
  const [C, _] = re();
  tt(() => {
    c && _(window.getComputedStyle(c).zIndex);
  }, [
    c
  ]);
  const S = he((E) => {
    E && m.current === !0 && (y(), w == null || w(), m.current = !1);
  }, [
    y,
    w
  ]);
  return /* @__PURE__ */ x(y9, {
    scope: n,
    contentWrapper: s,
    shouldExpandOnScrollRef: p,
    onScrollButtonChange: S
  }, /* @__PURE__ */ x("div", {
    ref: l,
    style: {
      display: "flex",
      flexDirection: "column",
      position: "fixed",
      zIndex: C
    }
  }, /* @__PURE__ */ x(ie.div, P({}, r, {
    ref: d,
    style: {
      // When we get the height of the content, it includes borders. If we were to set
      // the height without having `boxSizing: 'border-box'` it would be too big.
      boxSizing: "border-box",
      // We need to ensure the content doesn't get taller than the wrapper
      maxHeight: "100%",
      ...r.style
    }
  }))));
}), gd = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, align: o = "start", collisionPadding: r = gn, ...a } = e, i = Ic(n);
  return /* @__PURE__ */ x(Fr, P({}, i, a, {
    ref: t,
    align: o,
    collisionPadding: r,
    style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      ...a.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }));
}), [y9, Oc] = Wo(To, {}), hd = "SelectViewport", x9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = po(hd, n), a = Oc(hd, n), i = be(t, r.onViewportChange), s = q(0);
  return /* @__PURE__ */ x(on, null, /* @__PURE__ */ x("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ x(wi.Slot, {
    scope: n
  }, /* @__PURE__ */ x(ie.div, P({
    "data-radix-select-viewport": "",
    role: "presentation"
  }, o, {
    ref: i,
    style: {
      // we use position: 'relative' here on the `viewport` so that when we call
      // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
      // (independent of the scrollUpButton).
      position: "relative",
      flex: 1,
      overflow: "auto",
      ...o.style
    },
    onScroll: Y(o.onScroll, (l) => {
      const c = l.currentTarget, { contentWrapper: u, shouldExpandOnScrollRef: d } = a;
      if (d != null && d.current && u) {
        const f = Math.abs(s.current - c.scrollTop);
        if (f > 0) {
          const p = window.innerHeight - gn * 2, m = parseFloat(u.style.minHeight), g = parseFloat(u.style.height), h = Math.max(m, g);
          if (h < p) {
            const v = h + f, w = Math.min(p, v), y = v - w;
            u.style.height = w + "px", u.style.bottom === "0px" && (c.scrollTop = y > 0 ? y : 0, u.style.justifyContent = "flex-end");
          }
        }
      }
      s.current = c.scrollTop;
    })
  }))));
}), $9 = "SelectGroup", [C9, S9] = Wo($9), _9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = et();
  return /* @__PURE__ */ x(C9, {
    scope: n,
    id: r
  }, /* @__PURE__ */ x(ie.div, P({
    role: "group",
    "aria-labelledby": r
  }, o, {
    ref: t
  })));
}), E9 = "SelectLabel", P9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...o } = e, r = S9(E9, n);
  return /* @__PURE__ */ x(ie.div, P({
    id: r.id
  }, o, {
    ref: t
  }));
}), Us = "SelectItem", [R9, Z0] = Wo(Us), M9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, value: o, disabled: r = !1, textValue: a, ...i } = e, s = fo(Us, n), l = po(Us, n), c = s.value === o, [u, d] = re(a ?? ""), [f, p] = re(!1), m = be(t, (v) => {
    var w;
    return (w = l.itemRefCallback) === null || w === void 0 ? void 0 : w.call(l, v, o, r);
  }), g = et(), h = () => {
    r || (s.onValueChange(o), s.onOpenChange(!1));
  };
  if (o === "")
    throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return /* @__PURE__ */ x(R9, {
    scope: n,
    value: o,
    disabled: r,
    textId: g,
    isSelected: c,
    onItemTextChange: he((v) => {
      d((w) => {
        var y;
        return w || ((y = v == null ? void 0 : v.textContent) !== null && y !== void 0 ? y : "").trim();
      });
    }, [])
  }, /* @__PURE__ */ x(wi.ItemSlot, {
    scope: n,
    value: o,
    disabled: r,
    textValue: u
  }, /* @__PURE__ */ x(ie.div, P({
    role: "option",
    "aria-labelledby": g,
    "data-highlighted": f ? "" : void 0,
    "aria-selected": c && f,
    "data-state": c ? "checked" : "unchecked",
    "aria-disabled": r || void 0,
    "data-disabled": r ? "" : void 0,
    tabIndex: r ? void 0 : -1
  }, i, {
    ref: m,
    onFocus: Y(
      i.onFocus,
      () => p(!0)
    ),
    onBlur: Y(
      i.onBlur,
      () => p(!1)
    ),
    onPointerUp: Y(i.onPointerUp, h),
    onPointerMove: Y(i.onPointerMove, (v) => {
      if (r) {
        var w;
        (w = l.onItemLeave) === null || w === void 0 || w.call(l);
      } else
        v.currentTarget.focus({
          preventScroll: !0
        });
    }),
    onPointerLeave: Y(i.onPointerLeave, (v) => {
      if (v.currentTarget === document.activeElement) {
        var w;
        (w = l.onItemLeave) === null || w === void 0 || w.call(l);
      }
    }),
    onKeyDown: Y(i.onKeyDown, (v) => {
      var w;
      ((w = l.searchRef) === null || w === void 0 ? void 0 : w.current) !== "" && v.key === " " || (a9.includes(v.key) && h(), v.key === " " && v.preventDefault());
    })
  }))));
}), aa = "SelectItemText", N9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, className: o, style: r, ...a } = e, i = fo(aa, n), s = po(aa, n), l = Z0(aa, n), c = c9(aa, n), [u, d] = re(null), f = be(
    t,
    (v) => d(v),
    l.onItemTextChange,
    (v) => {
      var w;
      return (w = s.itemTextRefCallback) === null || w === void 0 ? void 0 : w.call(s, v, l.value, l.disabled);
    }
  ), p = u == null ? void 0 : u.textContent, m = nn(
    () => /* @__PURE__ */ x("option", {
      key: l.value,
      value: l.value,
      disabled: l.disabled
    }, p),
    [
      l.disabled,
      l.value,
      p
    ]
  ), { onNativeOptionAdd: g, onNativeOptionRemove: h } = c;
  return tt(() => (g(m), () => h(m)), [
    g,
    h,
    m
  ]), /* @__PURE__ */ x(on, null, /* @__PURE__ */ x(ie.span, P({
    id: l.textId
  }, a, {
    ref: f
  })), l.isSelected && i.valueNode && !i.valueNodeHasChildren ? /* @__PURE__ */ Gd(a.children, i.valueNode) : null);
}), D9 = "SelectItemIndicator", T9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return Z0(D9, n).isSelected ? /* @__PURE__ */ x(ie.span, P({
    "aria-hidden": !0
  }, o, {
    ref: t
  })) : null;
}), vd = "SelectScrollUpButton", A9 = /* @__PURE__ */ I((e, t) => {
  const n = po(vd, e.__scopeSelect), o = Oc(vd, e.__scopeSelect), [r, a] = re(!1), i = be(t, o.onScrollButtonChange);
  return tt(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollTop > 0;
        a(c);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), r ? /* @__PURE__ */ x(Q0, P({}, e, {
    ref: i,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: l } = n;
      s && l && (s.scrollTop = s.scrollTop - l.offsetHeight);
    }
  })) : null;
}), bd = "SelectScrollDownButton", I9 = /* @__PURE__ */ I((e, t) => {
  const n = po(bd, e.__scopeSelect), o = Oc(bd, e.__scopeSelect), [r, a] = re(!1), i = be(t, o.onScrollButtonChange);
  return tt(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const c = s.scrollHeight - s.clientHeight, u = Math.ceil(s.scrollTop) < c;
        a(u);
      };
      const s = n.viewport;
      return l(), s.addEventListener("scroll", l), () => s.removeEventListener("scroll", l);
    }
  }, [
    n.viewport,
    n.isPositioned
  ]), r ? /* @__PURE__ */ x(Q0, P({}, e, {
    ref: i,
    onAutoScroll: () => {
      const { viewport: s, selectedItem: l } = n;
      s && l && (s.scrollTop = s.scrollTop + l.offsetHeight);
    }
  })) : null;
}), Q0 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, onAutoScroll: o, ...r } = e, a = po("SelectScrollButton", n), i = q(null), s = yi(n), l = he(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return le(() => () => l(), [
    l
  ]), tt(() => {
    var c;
    const u = s().find(
      (d) => d.ref.current === document.activeElement
    );
    u == null || (c = u.ref.current) === null || c === void 0 || c.scrollIntoView({
      block: "nearest"
    });
  }, [
    s
  ]), /* @__PURE__ */ x(ie.div, P({
    "aria-hidden": !0
  }, r, {
    ref: t,
    style: {
      flexShrink: 0,
      ...r.style
    },
    onPointerDown: Y(r.onPointerDown, () => {
      i.current === null && (i.current = window.setInterval(o, 50));
    }),
    onPointerMove: Y(r.onPointerMove, () => {
      var c;
      (c = a.onItemLeave) === null || c === void 0 || c.call(a), i.current === null && (i.current = window.setInterval(o, 50));
    }),
    onPointerLeave: Y(r.onPointerLeave, () => {
      l();
    })
  }));
}), O9 = /* @__PURE__ */ I((e, t) => {
  const { __scopeSelect: n, ...o } = e;
  return /* @__PURE__ */ x(ie.div, P({
    "aria-hidden": !0
  }, o, {
    ref: t
  }));
});
function J0(e) {
  return e === "" || e === void 0;
}
const eh = /* @__PURE__ */ I((e, t) => {
  const { value: n, ...o } = e, r = q(null), a = be(t, r), i = Lo(n);
  return le(() => {
    const s = r.current, l = window.HTMLSelectElement.prototype, u = Object.getOwnPropertyDescriptor(l, "value").set;
    if (i !== n && u) {
      const d = new Event("change", {
        bubbles: !0
      });
      u.call(s, n), s.dispatchEvent(d);
    }
  }, [
    i,
    n
  ]), /* @__PURE__ */ x(Mg, {
    asChild: !0
  }, /* @__PURE__ */ x("select", P({}, o, {
    ref: a,
    defaultValue: n
  })));
});
eh.displayName = "BubbleSelect";
function th(e) {
  const t = ke(e), n = q(""), o = q(0), r = he((i) => {
    const s = n.current + i;
    t(s), function l(c) {
      n.current = c, window.clearTimeout(o.current), c !== "" && (o.current = window.setTimeout(
        () => l(""),
        1e3
      ));
    }(s);
  }, [
    t
  ]), a = he(() => {
    n.current = "", window.clearTimeout(o.current);
  }, []);
  return le(() => () => window.clearTimeout(o.current), []), [
    n,
    r,
    a
  ];
}
function nh(e, t, n) {
  const r = t.length > 1 && Array.from(t).every(
    (c) => c === t[0]
  ) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let i = k9(e, Math.max(a, 0));
  r.length === 1 && (i = i.filter(
    (c) => c !== n
  ));
  const l = i.find(
    (c) => c.textValue.toLowerCase().startsWith(r.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function k9(e, t) {
  return e.map(
    (n, o) => e[(t + o) % e.length]
  );
}
const L9 = u9, oh = f9, F9 = m9, z9 = g9, V9 = h9, rh = v9, H9 = x9, B9 = _9, ah = P9, ih = M9, G9 = N9, W9 = T9, sh = A9, lh = I9, ch = O9, wd = L9, HM = B9, yd = F9, Ys = $.forwardRef(({ className: e, customSelectIcon: t, children: n, ...o }, r) => /* @__PURE__ */ Q(
  oh,
  {
    ref: r,
    style: {
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.03)"
    },
    className: L(
      "flex h-10 w-full items-center text-black justify-between rounded-lg border border-[#E8E9EB] bg-white pt-3 pr-3 pb-3 pl-4 text-sm ring-offset-white placeholder:text-[#C7CBD1] focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ",
      e
    ),
    ...o,
    children: [
      n,
      /* @__PURE__ */ b(z9, { asChild: !0, children: t || /* @__PURE__ */ b(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "10",
          height: "6",
          viewBox: "0 0 10 6",
          fill: "none",
          children: /* @__PURE__ */ b(
            "path",
            {
              d: "M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z",
              fill: "black"
            }
          )
        }
      ) })
    ]
  }
));
Ys.displayName = oh.displayName;
const uh = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  sh,
  {
    ref: n,
    className: L(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(Vb, { className: "h-4 w-4" })
  }
));
uh.displayName = sh.displayName;
const dh = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  lh,
  {
    ref: n,
    className: L(
      "flex cursor-pointer items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ b(wl, { className: "h-4 w-4" })
  }
));
dh.displayName = lh.displayName;
const Ks = $.forwardRef(({ className: e, children: t, position: n = "popper", ...o }, r) => /* @__PURE__ */ b(V9, { children: /* @__PURE__ */ Q(
  rh,
  {
    ref: r,
    className: L(
      "relative z-50 max-h-96 min-w-[8rem] p-0 overflow-hidden rounded-lg border border-[#E8E9EB] bg-white text-slate-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...o,
    children: [
      /* @__PURE__ */ b(uh, {}),
      /* @__PURE__ */ b(
        H9,
        {
          className: L(
            "p-0",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ b(dh, {})
    ]
  }
) }));
Ks.displayName = rh.displayName;
const j9 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  ah,
  {
    ref: n,
    className: L("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
j9.displayName = ah.displayName;
const qs = $.forwardRef(({ className: e, children: t, ...n }, o) => /* @__PURE__ */ Q(
  ih,
  {
    ref: o,
    className: L(
      "relative flex w-full cursor-pointer select-none items-center rounded-lg py-3 px-4 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-[#0073E6]",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ b("span", { className: "absolute hidden left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ b(W9, { children: /* @__PURE__ */ b(Io, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ b(G9, { children: t })
    ]
  }
));
qs.displayName = ih.displayName;
const U9 = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  ch,
  {
    ref: n,
    className: L("-mx-1 my-1 h-px bg-slate-100 ", e),
    ...t
  }
));
U9.displayName = ch.displayName;
const Xs = "horizontal", Y9 = [
  "horizontal",
  "vertical"
], fh = /* @__PURE__ */ I((e, t) => {
  const { decorative: n, orientation: o = Xs, ...r } = e, a = ph(o) ? o : Xs, s = n ? {
    role: "none"
  } : {
    "aria-orientation": a === "vertical" ? a : void 0,
    role: "separator"
  };
  return /* @__PURE__ */ x(ie.div, P({
    "data-orientation": a
  }, s, r, {
    ref: t
  }));
});
fh.propTypes = {
  orientation(e, t, n) {
    const o = e[t], r = String(o);
    return o && !ph(o) ? new Error(K9(r, n)) : null;
  }
};
function K9(e, t) {
  return `Invalid prop \`orientation\` of value \`${e}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${Xs}\`.`;
}
function ph(e) {
  return Y9.includes(e);
}
const mh = fh, q9 = $.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...o }, r) => /* @__PURE__ */ b(
    mh,
    {
      ref: r,
      decorative: n,
      orientation: t,
      className: L(
        "shrink-0 bg-slate-200  ",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...o
    }
  )
);
q9.displayName = mh.displayName;
const BM = Pr, GM = ei, WM = lo, X9 = Rr, gh = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  io,
  {
    className: L(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
gh.displayName = io.displayName;
const Z9 = co(
  "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500  ",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
), Q9 = $.forwardRef(({ side: e = "right", className: t, children: n, ...o }, r) => /* @__PURE__ */ Q(X9, { children: [
  /* @__PURE__ */ b(gh, {}),
  /* @__PURE__ */ Q(
    so,
    {
      ref: r,
      className: L(Z9({ side: e }), t),
      ...o,
      children: [
        n,
        /* @__PURE__ */ Q(lo, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100      ", children: [
          /* @__PURE__ */ b(vs, { className: "h-4 w-4" }),
          /* @__PURE__ */ b("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Q9.displayName = so.displayName;
const J9 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
J9.displayName = "SheetHeader";
const e_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ b(
  "div",
  {
    className: L(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
e_.displayName = "SheetFooter";
const t_ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Oo,
  {
    ref: n,
    className: L("text-lg font-semibold text-slate-950  ", e),
    ...t
  }
));
t_.displayName = Oo.displayName;
const n_ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  ko,
  {
    ref: n,
    className: L("text-sm text-slate-500  ", e),
    ...t
  }
));
n_.displayName = ko.displayName;
function jM({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ b(
    "div",
    {
      className: L("animate-pulse rounded-md bg-slate-100  ", e),
      ...t
    }
  );
}
const hh = [
  "PageUp",
  "PageDown"
], vh = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
], bh = {
  "from-left": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-right": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowRight"
  ],
  "from-bottom": [
    "Home",
    "PageDown",
    "ArrowDown",
    "ArrowLeft"
  ],
  "from-top": [
    "Home",
    "PageDown",
    "ArrowUp",
    "ArrowLeft"
  ]
}, Wr = "Slider", [Zs, o_, r_] = Ln(Wr), [wh, UM] = Ve(Wr, [
  r_
]), [a_, xi] = wh(Wr), i_ = /* @__PURE__ */ I((e, t) => {
  const { name: n, min: o = 0, max: r = 100, step: a = 1, orientation: i = "horizontal", disabled: s = !1, minStepsBetweenThumbs: l = 0, defaultValue: c = [
    o
  ], value: u, onValueChange: d = () => {
  }, onValueCommit: f = () => {
  }, inverted: p = !1, ...m } = e, [g, h] = re(null), v = be(
    t,
    (A) => h(A)
  ), w = q(/* @__PURE__ */ new Set()), y = q(0), C = i === "horizontal", _ = g ? !!g.closest("form") : !0, S = C ? s_ : l_, [E = [], T] = Ue({
    prop: u,
    defaultProp: c,
    onChange: (A) => {
      var V;
      (V = [
        ...w.current
      ][y.current]) === null || V === void 0 || V.focus(), d(A);
    }
  }), N = q(E);
  function k(A) {
    const V = v_(E, A);
    ae(A, V);
  }
  function F(A) {
    ae(A, y.current);
  }
  function z() {
    const A = N.current[y.current];
    E[y.current] !== A && f(E);
  }
  function ae(A, V, { commit: J } = {
    commit: !1
  }) {
    const H = x_(a), K = $_(Math.round((A - o) / a) * a + o, H), X = Cr(K, [
      o,
      r
    ]);
    T((se = []) => {
      const ee = g_(se, X, V);
      if (y_(ee, l * a)) {
        y.current = ee.indexOf(X);
        const R = String(ee) !== String(se);
        return R && J && f(ee), R ? ee : se;
      } else
        return se;
    });
  }
  return /* @__PURE__ */ x(a_, {
    scope: e.__scopeSlider,
    disabled: s,
    min: o,
    max: r,
    valueIndexToChangeRef: y,
    thumbs: w.current,
    values: E,
    orientation: i
  }, /* @__PURE__ */ x(Zs.Provider, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(Zs.Slot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(S, P({
    "aria-disabled": s,
    "data-disabled": s ? "" : void 0
  }, m, {
    ref: v,
    onPointerDown: Y(m.onPointerDown, () => {
      s || (N.current = E);
    }),
    min: o,
    max: r,
    inverted: p,
    onSlideStart: s ? void 0 : k,
    onSlideMove: s ? void 0 : F,
    onSlideEnd: s ? void 0 : z,
    onHomeKeyDown: () => !s && ae(o, 0, {
      commit: !0
    }),
    onEndKeyDown: () => !s && ae(r, E.length - 1, {
      commit: !0
    }),
    onStepKeyDown: ({ event: A, direction: V }) => {
      if (!s) {
        const K = hh.includes(A.key) || A.shiftKey && vh.includes(A.key) ? 10 : 1, X = y.current, se = E[X], ee = a * K * V;
        ae(se + ee, X, {
          commit: !0
        });
      }
    }
  })))), _ && E.map(
    (A, V) => /* @__PURE__ */ x(m_, {
      key: V,
      name: n ? n + (E.length > 1 ? "[]" : "") : void 0,
      value: A
    })
  ));
}), [yh, xh] = wh(Wr, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), s_ = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: o, dir: r, inverted: a, onSlideStart: i, onSlideMove: s, onSlideEnd: l, onStepKeyDown: c, ...u } = e, [d, f] = re(null), p = be(
    t,
    (y) => f(y)
  ), m = q(), g = Yt(r), h = g === "ltr", v = h && !a || !h && a;
  function w(y) {
    const C = m.current || d.getBoundingClientRect(), _ = [
      0,
      C.width
    ], E = kc(_, v ? [
      n,
      o
    ] : [
      o,
      n
    ]);
    return m.current = C, E(y - C.left);
  }
  return /* @__PURE__ */ x(yh, {
    scope: e.__scopeSlider,
    startEdge: v ? "left" : "right",
    endEdge: v ? "right" : "left",
    direction: v ? 1 : -1,
    size: "width"
  }, /* @__PURE__ */ x($h, P({
    dir: g,
    "data-orientation": "horizontal"
  }, u, {
    ref: p,
    style: {
      ...u.style,
      "--radix-slider-thumb-transform": "translateX(-50%)"
    },
    onSlideStart: (y) => {
      const C = w(y.clientX);
      i == null || i(C);
    },
    onSlideMove: (y) => {
      const C = w(y.clientX);
      s == null || s(C);
    },
    onSlideEnd: () => {
      m.current = void 0, l == null || l();
    },
    onStepKeyDown: (y) => {
      const _ = bh[v ? "from-left" : "from-right"].includes(y.key);
      c == null || c({
        event: y,
        direction: _ ? -1 : 1
      });
    }
  })));
}), l_ = /* @__PURE__ */ I((e, t) => {
  const { min: n, max: o, inverted: r, onSlideStart: a, onSlideMove: i, onSlideEnd: s, onStepKeyDown: l, ...c } = e, u = q(null), d = be(t, u), f = q(), p = !r;
  function m(g) {
    const h = f.current || u.current.getBoundingClientRect(), v = [
      0,
      h.height
    ], y = kc(v, p ? [
      o,
      n
    ] : [
      n,
      o
    ]);
    return f.current = h, y(g - h.top);
  }
  return /* @__PURE__ */ x(yh, {
    scope: e.__scopeSlider,
    startEdge: p ? "bottom" : "top",
    endEdge: p ? "top" : "bottom",
    size: "height",
    direction: p ? 1 : -1
  }, /* @__PURE__ */ x($h, P({
    "data-orientation": "vertical"
  }, c, {
    ref: d,
    style: {
      ...c.style,
      "--radix-slider-thumb-transform": "translateY(50%)"
    },
    onSlideStart: (g) => {
      const h = m(g.clientY);
      a == null || a(h);
    },
    onSlideMove: (g) => {
      const h = m(g.clientY);
      i == null || i(h);
    },
    onSlideEnd: () => {
      f.current = void 0, s == null || s();
    },
    onStepKeyDown: (g) => {
      const v = bh[p ? "from-bottom" : "from-top"].includes(g.key);
      l == null || l({
        event: g,
        direction: v ? -1 : 1
      });
    }
  })));
}), $h = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, onSlideStart: o, onSlideMove: r, onSlideEnd: a, onHomeKeyDown: i, onEndKeyDown: s, onStepKeyDown: l, ...c } = e, u = xi(Wr, n);
  return /* @__PURE__ */ x(ie.span, P({}, c, {
    ref: t,
    onKeyDown: Y(e.onKeyDown, (d) => {
      d.key === "Home" ? (i(d), d.preventDefault()) : d.key === "End" ? (s(d), d.preventDefault()) : hh.concat(vh).includes(d.key) && (l(d), d.preventDefault());
    }),
    onPointerDown: Y(e.onPointerDown, (d) => {
      const f = d.target;
      f.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(f) ? f.focus() : o(d);
    }),
    onPointerMove: Y(e.onPointerMove, (d) => {
      d.target.hasPointerCapture(d.pointerId) && r(d);
    }),
    onPointerUp: Y(e.onPointerUp, (d) => {
      const f = d.target;
      f.hasPointerCapture(d.pointerId) && (f.releasePointerCapture(d.pointerId), a(d));
    })
  }));
}), c_ = "SliderTrack", u_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...o } = e, r = xi(c_, n);
  return /* @__PURE__ */ x(ie.span, P({
    "data-disabled": r.disabled ? "" : void 0,
    "data-orientation": r.orientation
  }, o, {
    ref: t
  }));
}), xd = "SliderRange", d_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, ...o } = e, r = xi(xd, n), a = xh(xd, n), i = q(null), s = be(t, i), l = r.values.length, c = r.values.map(
    (f) => Ch(f, r.min, r.max)
  ), u = l > 1 ? Math.min(...c) : 0, d = 100 - Math.max(...c);
  return /* @__PURE__ */ x(ie.span, P({
    "data-orientation": r.orientation,
    "data-disabled": r.disabled ? "" : void 0
  }, o, {
    ref: s,
    style: {
      ...e.style,
      [a.startEdge]: u + "%",
      [a.endEdge]: d + "%"
    }
  }));
}), $d = "SliderThumb", f_ = /* @__PURE__ */ I((e, t) => {
  const n = o_(e.__scopeSlider), [o, r] = re(null), a = be(
    t,
    (s) => r(s)
  ), i = nn(
    () => o ? n().findIndex(
      (s) => s.ref.current === o
    ) : -1,
    [
      n,
      o
    ]
  );
  return /* @__PURE__ */ x(p_, P({}, e, {
    ref: a,
    index: i
  }));
}), p_ = /* @__PURE__ */ I((e, t) => {
  const { __scopeSlider: n, index: o, ...r } = e, a = xi($d, n), i = xh($d, n), [s, l] = re(null), c = be(
    t,
    (h) => l(h)
  ), u = Ir(s), d = a.values[o], f = d === void 0 ? 0 : Ch(d, a.min, a.max), p = h_(o, a.values.length), m = u == null ? void 0 : u[i.size], g = m ? b_(m, f, i.direction) : 0;
  return le(() => {
    if (s)
      return a.thumbs.add(s), () => {
        a.thumbs.delete(s);
      };
  }, [
    s,
    a.thumbs
  ]), /* @__PURE__ */ x("span", {
    style: {
      transform: "var(--radix-slider-thumb-transform)",
      position: "absolute",
      [i.startEdge]: `calc(${f}% + ${g}px)`
    }
  }, /* @__PURE__ */ x(Zs.ItemSlot, {
    scope: e.__scopeSlider
  }, /* @__PURE__ */ x(ie.span, P({
    role: "slider",
    "aria-label": e["aria-label"] || p,
    "aria-valuemin": a.min,
    "aria-valuenow": d,
    "aria-valuemax": a.max,
    "aria-orientation": a.orientation,
    "data-orientation": a.orientation,
    "data-disabled": a.disabled ? "" : void 0,
    tabIndex: a.disabled ? void 0 : 0
  }, r, {
    ref: c,
    style: d === void 0 ? {
      display: "none"
    } : e.style,
    onFocus: Y(e.onFocus, () => {
      a.valueIndexToChangeRef.current = o;
    })
  }))));
}), m_ = (e) => {
  const { value: t, ...n } = e, o = q(null), r = Lo(t);
  return le(() => {
    const a = o.current, i = window.HTMLInputElement.prototype, l = Object.getOwnPropertyDescriptor(i, "value").set;
    if (r !== t && l) {
      const c = new Event("input", {
        bubbles: !0
      });
      l.call(a, t), a.dispatchEvent(c);
    }
  }, [
    r,
    t
  ]), /* @__PURE__ */ x("input", P({
    style: {
      display: "none"
    }
  }, n, {
    ref: o,
    defaultValue: t
  }));
};
function g_(e = [], t, n) {
  const o = [
    ...e
  ];
  return o[n] = t, o.sort(
    (r, a) => r - a
  );
}
function Ch(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return Cr(a, [
    0,
    100
  ]);
}
function h_(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? [
    "Minimum",
    "Maximum"
  ][e] : void 0;
}
function v_(e, t) {
  if (e.length === 1)
    return 0;
  const n = e.map(
    (r) => Math.abs(r - t)
  ), o = Math.min(...n);
  return n.indexOf(o);
}
function b_(e, t, n) {
  const o = e / 2, a = kc([
    0,
    50
  ], [
    0,
    o
  ]);
  return (o - a(t) * n) * n;
}
function w_(e) {
  return e.slice(0, -1).map(
    (t, n) => e[n + 1] - t
  );
}
function y_(e, t) {
  if (t > 0) {
    const n = w_(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function kc(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const o = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + o * (n - e[0]);
  };
}
function x_(e) {
  return (String(e).split(".")[1] || "").length;
}
function $_(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
const Sh = i_, C_ = u_, S_ = d_, __ = f_, E_ = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ Q(
  Sh,
  {
    ref: n,
    className: L(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ b(C_, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100  ", children: /* @__PURE__ */ b(S_, { className: "absolute h-full bg-slate-900  " }) }),
      /* @__PURE__ */ b(__, { className: "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50        " })
    ]
  }
));
E_.displayName = Sh.displayName;
var Cd = ["light", "dark"], P_ = "(prefers-color-scheme: dark)", R_ = $.createContext(void 0), M_ = { setTheme: (e) => {
}, themes: [] }, N_ = () => {
  var e;
  return (e = $.useContext(R_)) != null ? e : M_;
};
$.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: o, enableColorScheme: r, defaultTheme: a, value: i, attrs: s, nonce: l }) => {
  let c = a === "system", u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${s.map((m) => `'${m}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, d = r ? Cd.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", f = (m, g = !1, h = !0) => {
    let v = i ? i[m] : m, w = g ? m + "|| ''" : `'${v}'`, y = "";
    return r && h && !g && Cd.includes(m) && (y += `d.style.colorScheme = '${m}';`), n === "class" ? g || v ? y += `c.add(${w})` : y += "null" : v && (y += `d[s](n,${w})`), y;
  }, p = e ? `!function(){${u}${f(e)}}()` : o ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${P_}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}${c ? "" : "else{" + f(a, !1, !1) + "}"}${d}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${i ? `var x=${JSON.stringify(i)};` : ""}${f(i ? "x[e]" : "e", !0)}}else{${f(a, !1, !1)};}${d}}catch(t){}}();`;
  return $.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: p } });
});
var { entries: _h, setPrototypeOf: Sd, isFrozen: D_, getPrototypeOf: T_, getOwnPropertyDescriptor: A_ } = Object, { freeze: ct, seal: It, create: Eh } = Object, { apply: Qs, construct: Js } = typeof Reflect < "u" && Reflect;
ct || (ct = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
Qs || (Qs = function(e, t, n) {
  return e.apply(t, n);
});
Js || (Js = function(e, t) {
  return new e(...t);
});
var ia = Mt(Array.prototype.forEach), _d = Mt(Array.prototype.pop), er = Mt(Array.prototype.push), Ca = Mt(String.prototype.toLowerCase), es = Mt(String.prototype.toString), Ed = Mt(String.prototype.match), tr = Mt(String.prototype.replace), I_ = Mt(String.prototype.indexOf), O_ = Mt(String.prototype.trim), Lt = Mt(Object.prototype.hasOwnProperty), Ct = Mt(RegExp.prototype.test), nr = k_(TypeError);
function Mt(e) {
  return function(t) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
      o[r - 1] = arguments[r];
    return Qs(e, t, o);
  };
}
function k_(e) {
  return function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
      n[o] = arguments[o];
    return Js(e, n);
  };
}
function Ne(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ca;
  Sd && Sd(e, null);
  let o = t.length;
  for (; o--; ) {
    let r = t[o];
    if (typeof r == "string") {
      let a = n(r);
      a !== r && (D_(t) || (t[o] = a), r = a);
    }
    e[r] = !0;
  }
  return e;
}
function L_(e) {
  for (let t = 0; t < e.length; t++)
    Lt(e, t) || (e[t] = null);
  return e;
}
function Wn(e) {
  let t = Eh(null);
  for (let [n, o] of _h(e))
    Lt(e, n) && (Array.isArray(o) ? t[n] = L_(o) : o && typeof o == "object" && o.constructor === Object ? t[n] = Wn(o) : t[n] = o);
  return t;
}
function sa(e, t) {
  for (; e !== null; ) {
    let o = A_(e, t);
    if (o) {
      if (o.get)
        return Mt(o.get);
      if (typeof o.value == "function")
        return Mt(o.value);
    }
    e = T_(e);
  }
  function n() {
    return null;
  }
  return n;
}
var Pd = ct(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ts = ct(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ns = ct(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), F_ = ct(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), os = ct(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), z_ = ct(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Rd = ct(["#text"]), Md = ct(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), rs = ct(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Nd = ct(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), la = ct(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), V_ = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), H_ = It(/<%[\w\W]*|[\w\W]*%>/gm), B_ = It(/\${[\w\W]*}/gm), G_ = It(/^data-[\-\w.\u00B7-\uFFFF]/), W_ = It(/^aria-[\-\w]+$/), Ph = It(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), j_ = It(/^(?:\w+script|data):/i), U_ = It(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Rh = It(/^html$/i), Y_ = It(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i), Dd = Object.freeze({ __proto__: null, MUSTACHE_EXPR: V_, ERB_EXPR: H_, TMPLIT_EXPR: B_, DATA_ATTR: G_, ARIA_ATTR: W_, IS_ALLOWED_URI: Ph, IS_SCRIPT_OR_DATA: j_, ATTR_WHITESPACE: U_, DOCTYPE_NAME: Rh, CUSTOM_ELEMENT: Y_ }), K_ = function() {
  return typeof window > "u" ? null : window;
}, q_ = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let n = null, o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (n = t.getAttribute(o));
  let r = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(r, { createHTML(a) {
      return a;
    }, createScriptURL(a) {
      return a;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
};
function Mh() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : K_(), t = (D) => Mh(D);
  if (t.version = "3.0.10", t.removed = [], !e || !e.document || e.document.nodeType !== 9)
    return t.isSupported = !1, t;
  let { document: n } = e, o = n, r = o.currentScript, { DocumentFragment: a, HTMLTemplateElement: i, Node: s, Element: l, NodeFilter: c, NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: d, DOMParser: f, trustedTypes: p } = e, m = l.prototype, g = sa(m, "cloneNode"), h = sa(m, "nextSibling"), v = sa(m, "childNodes"), w = sa(m, "parentNode");
  if (typeof i == "function") {
    let D = n.createElement("template");
    D.content && D.content.ownerDocument && (n = D.content.ownerDocument);
  }
  let y, C = "", { implementation: _, createNodeIterator: S, createDocumentFragment: E, getElementsByTagName: T } = n, { importNode: N } = o, k = {};
  t.isSupported = typeof _h == "function" && typeof w == "function" && _ && _.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: F, ERB_EXPR: z, TMPLIT_EXPR: ae, DATA_ATTR: A, ARIA_ATTR: V, IS_SCRIPT_OR_DATA: J, ATTR_WHITESPACE: H, CUSTOM_ELEMENT: K } = Dd, { IS_ALLOWED_URI: X } = Dd, se = null, ee = Ne({}, [...Pd, ...ts, ...ns, ...os, ...Rd]), R = null, B = Ne({}, [...Md, ...rs, ...Nd, ...la]), G = Object.seal(Eh(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), W = null, j = null, U = !0, te = !0, fe = !1, Z = !0, ce = !1, O = !1, ne = !1, ge = !1, de = !1, Se = !1, ve = !1, Ee = !0, Ae = !1, qe = "user-content-", Be = !0, Ze = !1, Te = {}, Xe = null, Ke = Ne({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Dt = null, rt = Ne({}, ["audio", "video", "img", "source", "image", "track"]), ot = null, xt = Ne({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", Fe = "http://www.w3.org/2000/svg", ze = "http://www.w3.org/1999/xhtml", gt = ze, Zt = !1, oe = null, me = Ne({}, [mt, Fe, ze], es), we = null, ye = ["application/xhtml+xml", "text/html"], Me = "text/html", _e = null, Qe = null, Tt = n.createElement("form"), kt = function(D) {
    return D instanceof RegExp || D instanceof Function;
  }, Sn = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Qe && Qe === D)) {
      if ((!D || typeof D != "object") && (D = {}), D = Wn(D), we = ye.indexOf(D.PARSER_MEDIA_TYPE) === -1 ? Me : D.PARSER_MEDIA_TYPE, _e = we === "application/xhtml+xml" ? es : Ca, se = Lt(D, "ALLOWED_TAGS") ? Ne({}, D.ALLOWED_TAGS, _e) : ee, R = Lt(D, "ALLOWED_ATTR") ? Ne({}, D.ALLOWED_ATTR, _e) : B, oe = Lt(D, "ALLOWED_NAMESPACES") ? Ne({}, D.ALLOWED_NAMESPACES, es) : me, ot = Lt(D, "ADD_URI_SAFE_ATTR") ? Ne(Wn(xt), D.ADD_URI_SAFE_ATTR, _e) : xt, Dt = Lt(D, "ADD_DATA_URI_TAGS") ? Ne(Wn(rt), D.ADD_DATA_URI_TAGS, _e) : rt, Xe = Lt(D, "FORBID_CONTENTS") ? Ne({}, D.FORBID_CONTENTS, _e) : Ke, W = Lt(D, "FORBID_TAGS") ? Ne({}, D.FORBID_TAGS, _e) : {}, j = Lt(D, "FORBID_ATTR") ? Ne({}, D.FORBID_ATTR, _e) : {}, Te = Lt(D, "USE_PROFILES") ? D.USE_PROFILES : !1, U = D.ALLOW_ARIA_ATTR !== !1, te = D.ALLOW_DATA_ATTR !== !1, fe = D.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = D.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ce = D.SAFE_FOR_TEMPLATES || !1, O = D.WHOLE_DOCUMENT || !1, de = D.RETURN_DOM || !1, Se = D.RETURN_DOM_FRAGMENT || !1, ve = D.RETURN_TRUSTED_TYPE || !1, ge = D.FORCE_BODY || !1, Ee = D.SANITIZE_DOM !== !1, Ae = D.SANITIZE_NAMED_PROPS || !1, Be = D.KEEP_CONTENT !== !1, Ze = D.IN_PLACE || !1, X = D.ALLOWED_URI_REGEXP || Ph, gt = D.NAMESPACE || ze, G = D.CUSTOM_ELEMENT_HANDLING || {}, D.CUSTOM_ELEMENT_HANDLING && kt(D.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (G.tagNameCheck = D.CUSTOM_ELEMENT_HANDLING.tagNameCheck), D.CUSTOM_ELEMENT_HANDLING && kt(D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (G.attributeNameCheck = D.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), D.CUSTOM_ELEMENT_HANDLING && typeof D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (G.allowCustomizedBuiltInElements = D.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ce && (te = !1), Se && (de = !0), Te && (se = Ne({}, Rd), R = [], Te.html === !0 && (Ne(se, Pd), Ne(R, Md)), Te.svg === !0 && (Ne(se, ts), Ne(R, rs), Ne(R, la)), Te.svgFilters === !0 && (Ne(se, ns), Ne(R, rs), Ne(R, la)), Te.mathMl === !0 && (Ne(se, os), Ne(R, Nd), Ne(R, la))), D.ADD_TAGS && (se === ee && (se = Wn(se)), Ne(se, D.ADD_TAGS, _e)), D.ADD_ATTR && (R === B && (R = Wn(R)), Ne(R, D.ADD_ATTR, _e)), D.ADD_URI_SAFE_ATTR && Ne(ot, D.ADD_URI_SAFE_ATTR, _e), D.FORBID_CONTENTS && (Xe === Ke && (Xe = Wn(Xe)), Ne(Xe, D.FORBID_CONTENTS, _e)), Be && (se["#text"] = !0), O && Ne(se, ["html", "head", "body"]), se.table && (Ne(se, ["tbody"]), delete W.tbody), D.TRUSTED_TYPES_POLICY) {
        if (typeof D.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw nr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof D.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw nr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        y = D.TRUSTED_TYPES_POLICY, C = y.createHTML("");
      } else
        y === void 0 && (y = q_(p, r)), y !== null && typeof C == "string" && (C = y.createHTML(""));
      ct && ct(D), Qe = D;
    }
  }, Qt = Ne({}, ["mi", "mo", "mn", "ms", "mtext"]), Vn = Ne({}, ["foreignobject", "desc", "title", "annotation-xml"]), jr = Ne({}, ["title", "style", "font", "a", "script"]), Wc = Ne({}, [...ts, ...ns, ...F_]), jc = Ne({}, [...os, ...z_]), mv = function(D) {
    let pe = w(D);
    (!pe || !pe.tagName) && (pe = { namespaceURI: gt, tagName: "template" });
    let ue = Ca(D.tagName), Ie = Ca(pe.tagName);
    return oe[D.namespaceURI] ? D.namespaceURI === Fe ? pe.namespaceURI === ze ? ue === "svg" : pe.namespaceURI === mt ? ue === "svg" && (Ie === "annotation-xml" || Qt[Ie]) : !!Wc[ue] : D.namespaceURI === mt ? pe.namespaceURI === ze ? ue === "math" : pe.namespaceURI === Fe ? ue === "math" && Vn[Ie] : !!jc[ue] : D.namespaceURI === ze ? pe.namespaceURI === Fe && !Vn[Ie] || pe.namespaceURI === mt && !Qt[Ie] ? !1 : !jc[ue] && (jr[ue] || !Wc[ue]) : !!(we === "application/xhtml+xml" && oe[D.namespaceURI]) : !1;
  }, mo = function(D) {
    er(t.removed, { element: D });
    try {
      D.parentNode.removeChild(D);
    } catch {
      D.remove();
    }
  }, Ri = function(D, pe) {
    try {
      er(t.removed, { attribute: pe.getAttributeNode(D), from: pe });
    } catch {
      er(t.removed, { attribute: null, from: pe });
    }
    if (pe.removeAttribute(D), D === "is" && !R[D])
      if (de || Se)
        try {
          mo(pe);
        } catch {
        }
      else
        try {
          pe.setAttribute(D, "");
        } catch {
        }
  }, Uc = function(D) {
    let pe = null, ue = null;
    if (ge)
      D = "<remove></remove>" + D;
    else {
      let Je = Ed(D, /^[\r\n\t ]+/);
      ue = Je && Je[0];
    }
    we === "application/xhtml+xml" && gt === ze && (D = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + D + "</body></html>");
    let Ie = y ? y.createHTML(D) : D;
    if (gt === ze)
      try {
        pe = new f().parseFromString(Ie, we);
      } catch {
      }
    if (!pe || !pe.documentElement) {
      pe = _.createDocument(gt, "template", null);
      try {
        pe.documentElement.innerHTML = Zt ? C : Ie;
      } catch {
      }
    }
    let at = pe.body || pe.documentElement;
    return D && ue && at.insertBefore(n.createTextNode(ue), at.childNodes[0] || null), gt === ze ? T.call(pe, O ? "html" : "body")[0] : O ? pe.documentElement : at;
  }, Yc = function(D) {
    return S.call(D.ownerDocument || D, D, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION, null);
  }, gv = function(D) {
    return D instanceof d && (typeof D.nodeName != "string" || typeof D.textContent != "string" || typeof D.removeChild != "function" || !(D.attributes instanceof u) || typeof D.removeAttribute != "function" || typeof D.setAttribute != "function" || typeof D.namespaceURI != "string" || typeof D.insertBefore != "function" || typeof D.hasChildNodes != "function");
  }, Kc = function(D) {
    return typeof s == "function" && D instanceof s;
  }, un = function(D, pe, ue) {
    k[D] && ia(k[D], (Ie) => {
      Ie.call(t, pe, ue, Qe);
    });
  }, qc = function(D) {
    let pe = null;
    if (un("beforeSanitizeElements", D, null), gv(D))
      return mo(D), !0;
    let ue = _e(D.nodeName);
    if (un("uponSanitizeElement", D, { tagName: ue, allowedTags: se }), D.hasChildNodes() && !Kc(D.firstElementChild) && Ct(/<[/\w]/g, D.innerHTML) && Ct(/<[/\w]/g, D.textContent))
      return mo(D), !0;
    if (!se[ue] || W[ue]) {
      if (!W[ue] && Zc(ue) && (G.tagNameCheck instanceof RegExp && Ct(G.tagNameCheck, ue) || G.tagNameCheck instanceof Function && G.tagNameCheck(ue)))
        return !1;
      if (Be && !Xe[ue]) {
        let Ie = w(D) || D.parentNode, at = v(D) || D.childNodes;
        if (at && Ie) {
          let Je = at.length;
          for (let dn = Je - 1; dn >= 0; --dn)
            Ie.insertBefore(g(at[dn], !0), h(D));
        }
      }
      return mo(D), !0;
    }
    return D instanceof l && !mv(D) || (ue === "noscript" || ue === "noembed" || ue === "noframes") && Ct(/<\/no(script|embed|frames)/i, D.innerHTML) ? (mo(D), !0) : (ce && D.nodeType === 3 && (pe = D.textContent, ia([F, z, ae], (Ie) => {
      pe = tr(pe, Ie, " ");
    }), D.textContent !== pe && (er(t.removed, { element: D.cloneNode() }), D.textContent = pe)), un("afterSanitizeElements", D, null), !1);
  }, Xc = function(D, pe, ue) {
    if (Ee && (pe === "id" || pe === "name") && (ue in n || ue in Tt))
      return !1;
    if (!(te && !j[pe] && Ct(A, pe)) && !(U && Ct(V, pe))) {
      if (!R[pe] || j[pe]) {
        if (!(Zc(D) && (G.tagNameCheck instanceof RegExp && Ct(G.tagNameCheck, D) || G.tagNameCheck instanceof Function && G.tagNameCheck(D)) && (G.attributeNameCheck instanceof RegExp && Ct(G.attributeNameCheck, pe) || G.attributeNameCheck instanceof Function && G.attributeNameCheck(pe)) || pe === "is" && G.allowCustomizedBuiltInElements && (G.tagNameCheck instanceof RegExp && Ct(G.tagNameCheck, ue) || G.tagNameCheck instanceof Function && G.tagNameCheck(ue))))
          return !1;
      } else if (!ot[pe] && !Ct(X, tr(ue, H, "")) && !((pe === "src" || pe === "xlink:href" || pe === "href") && D !== "script" && I_(ue, "data:") === 0 && Dt[D]) && !(fe && !Ct(J, tr(ue, H, ""))) && ue)
        return !1;
    }
    return !0;
  }, Zc = function(D) {
    return D !== "annotation-xml" && Ed(D, K);
  }, Qc = function(D) {
    un("beforeSanitizeAttributes", D, null);
    let { attributes: pe } = D;
    if (!pe)
      return;
    let ue = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: R }, Ie = pe.length;
    for (; Ie--; ) {
      let at = pe[Ie], { name: Je, namespaceURI: dn, value: fn } = at, Jt = _e(Je), ht = Je === "value" ? fn : O_(fn);
      if (ue.attrName = Jt, ue.attrValue = ht, ue.keepAttr = !0, ue.forceKeepAttr = void 0, un("uponSanitizeAttribute", D, ue), ht = ue.attrValue, ue.forceKeepAttr || (Ri(Je, D), !ue.keepAttr))
        continue;
      if (!Z && Ct(/\/>/i, ht)) {
        Ri(Je, D);
        continue;
      }
      ce && ia([F, z, ae], (eu) => {
        ht = tr(ht, eu, " ");
      });
      let Jc = _e(D.nodeName);
      if (Xc(Jc, Jt, ht)) {
        if (Ae && (Jt === "id" || Jt === "name") && (Ri(Je, D), ht = qe + ht), y && typeof p == "object" && typeof p.getAttributeType == "function" && !dn)
          switch (p.getAttributeType(Jc, Jt)) {
            case "TrustedHTML": {
              ht = y.createHTML(ht);
              break;
            }
            case "TrustedScriptURL": {
              ht = y.createScriptURL(ht);
              break;
            }
          }
        try {
          dn ? D.setAttributeNS(dn, Je, ht) : D.setAttribute(Je, ht), _d(t.removed);
        } catch {
        }
      }
    }
    un("afterSanitizeAttributes", D, null);
  }, hv = function D(pe) {
    let ue = null, Ie = Yc(pe);
    for (un("beforeSanitizeShadowDOM", pe, null); ue = Ie.nextNode(); )
      un("uponSanitizeShadowNode", ue, null), !qc(ue) && (ue.content instanceof a && D(ue.content), Qc(ue));
    un("afterSanitizeShadowDOM", pe, null);
  };
  return t.sanitize = function(D) {
    let pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ue = null, Ie = null, at = null, Je = null;
    if (Zt = !D, Zt && (D = "<!-->"), typeof D != "string" && !Kc(D))
      if (typeof D.toString == "function") {
        if (D = D.toString(), typeof D != "string")
          throw nr("dirty is not a string, aborting");
      } else
        throw nr("toString is not a function");
    if (!t.isSupported)
      return D;
    if (ne || Sn(pe), t.removed = [], typeof D == "string" && (Ze = !1), Ze) {
      if (D.nodeName) {
        let Jt = _e(D.nodeName);
        if (!se[Jt] || W[Jt])
          throw nr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (D instanceof s)
      ue = Uc("<!---->"), Ie = ue.ownerDocument.importNode(D, !0), Ie.nodeType === 1 && Ie.nodeName === "BODY" || Ie.nodeName === "HTML" ? ue = Ie : ue.appendChild(Ie);
    else {
      if (!de && !ce && !O && D.indexOf("<") === -1)
        return y && ve ? y.createHTML(D) : D;
      if (ue = Uc(D), !ue)
        return de ? null : ve ? C : "";
    }
    ue && ge && mo(ue.firstChild);
    let dn = Yc(Ze ? D : ue);
    for (; at = dn.nextNode(); )
      qc(at) || (at.content instanceof a && hv(at.content), Qc(at));
    if (Ze)
      return D;
    if (de) {
      if (Se)
        for (Je = E.call(ue.ownerDocument); ue.firstChild; )
          Je.appendChild(ue.firstChild);
      else
        Je = ue;
      return (R.shadowroot || R.shadowrootmode) && (Je = N.call(o, Je, !0)), Je;
    }
    let fn = O ? ue.outerHTML : ue.innerHTML;
    return O && se["!doctype"] && ue.ownerDocument && ue.ownerDocument.doctype && ue.ownerDocument.doctype.name && Ct(Rh, ue.ownerDocument.doctype.name) && (fn = "<!DOCTYPE " + ue.ownerDocument.doctype.name + `>
` + fn), ce && ia([F, z, ae], (Jt) => {
      fn = tr(fn, Jt, " ");
    }), y && ve ? y.createHTML(fn) : fn;
  }, t.setConfig = function() {
    let D = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Sn(D), ne = !0;
  }, t.clearConfig = function() {
    Qe = null, ne = !1;
  }, t.isValidAttribute = function(D, pe, ue) {
    Qe || Sn({});
    let Ie = _e(D), at = _e(pe);
    return Xc(Ie, at, ue);
  }, t.addHook = function(D, pe) {
    typeof pe == "function" && (k[D] = k[D] || [], er(k[D], pe));
  }, t.removeHook = function(D) {
    if (k[D])
      return _d(k[D]);
  }, t.removeHooks = function(D) {
    k[D] && (k[D] = []);
  }, t.removeAllHooks = function() {
    k = {};
  }, t;
}
var X_ = Mh(), Z_ = (e) => {
  switch (e) {
    case "success":
      return eE;
    case "info":
      return nE;
    case "warning":
      return tE;
    case "error":
      return oE;
    default:
      return null;
  }
}, Q_ = Array(12).fill(0), J_ = ({ visible: e }) => M.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, M.createElement("div", { className: "sonner-spinner" }, Q_.map((t, n) => M.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), eE = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), tE = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), nE = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), oE = M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, M.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), rE = () => {
  let [e, t] = M.useState(!1);
  return M.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, el = 1, aE = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: n, ...o } = e, r = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : el++, a = this.toasts.find((s) => s.id === r), i = e.dismissible === void 0 ? !0 : e.dismissible;
      return a ? this.toasts = this.toasts.map((s) => s.id === r ? (this.publish({ ...s, ...e, id: r, title: n }), { ...s, ...e, id: r, dismissible: i, title: n }) : s) : this.addToast({ title: n, ...o, dismissible: i, id: r }), r;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t)
        return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let o = e instanceof Promise ? e : e(), r = n !== void 0;
      return o.then((a) => {
        if (a && typeof a.ok == "boolean" && !a.ok) {
          r = !1;
          let i = typeof t.error == "function" ? t.error(`HTTP error! status: ${a.status}`) : t.error, s = typeof t.description == "function" ? t.description(`HTTP error! status: ${a.status}`) : t.description;
          this.create({ id: n, type: "error", message: i, description: s });
        } else if (t.success !== void 0) {
          r = !1;
          let i = typeof t.success == "function" ? t.success(a) : t.success, s = typeof t.description == "function" ? t.description(a) : t.description;
          this.create({ id: n, type: "success", message: i, description: s });
        }
      }).catch((a) => {
        if (t.error !== void 0) {
          r = !1;
          let i = typeof t.error == "function" ? t.error(a) : t.error, s = typeof t.description == "function" ? t.description(a) : t.description;
          this.create({ id: n, type: "error", message: i, description: s });
        }
      }).finally(() => {
        var a;
        r && (this.dismiss(n), n = void 0), (a = t.finally) == null || a.call(t);
      }), n;
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || el++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, Ft = new aE(), iE = (e, t) => {
  let n = (t == null ? void 0 : t.id) || el++;
  return Ft.addToast({ title: e, ...t, id: n }), n;
}, sE = iE, Td = Object.assign(sE, { success: Ft.success, info: Ft.info, warning: Ft.warning, error: Ft.error, custom: Ft.custom, message: Ft.message, promise: Ft.promise, dismiss: Ft.dismiss, loading: Ft.loading });
function lE(e, { insertAt: t } = {}) {
  if (typeof document > "u")
    return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
lE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ca(e) {
  return e.label !== void 0 && typeof e.onClick == "function";
}
var cE = 3, uE = "32px", dE = 4e3, fE = 356, pE = 14, mE = 20, gE = 200;
function hE(...e) {
  return e.filter(Boolean).join(" ");
}
var vE = (e) => {
  var t, n, o, r, a, i, s;
  let { invert: l, toast: c, unstyled: u, interacting: d, setHeights: f, visibleToasts: p, heights: m, index: g, toasts: h, expanded: v, removeToast: w, closeButton: y, style: C, cancelButtonStyle: _, actionButtonStyle: S, className: E = "", descriptionClassName: T = "", duration: N, position: k, gap: F, loadingIcon: z, expandByDefault: ae, classNames: A, icons: V, closeButtonAriaLabel: J = "Close toast", pauseWhenPageIsHidden: H, cn: K } = e, [X, se] = M.useState(!1), [ee, R] = M.useState(!1), [B, G] = M.useState(!1), [W, j] = M.useState(!1), [U, te] = M.useState(0), [fe, Z] = M.useState(0), ce = M.useRef(null), O = M.useRef(null), ne = g === 0, ge = g + 1 <= p, de = c.type, Se = c.dismissible !== !1, ve = c.className || "", Ee = c.descriptionClassName || "", Ae = M.useMemo(() => m.findIndex((oe) => oe.toastId === c.id) || 0, [m, c.id]), qe = M.useMemo(() => {
    var oe;
    return (oe = c.closeButton) != null ? oe : y;
  }, [c.closeButton, y]), Be = M.useMemo(() => c.duration || N || dE, [c.duration, N]), Ze = M.useRef(0), Te = M.useRef(0), Xe = M.useRef(0), Ke = M.useRef(null), [Dt, rt] = k.split("-"), ot = M.useMemo(() => m.reduce((oe, me, we) => we >= Ae ? oe : oe + me.height, 0), [m, Ae]), xt = rE(), mt = c.invert || l, Fe = de === "loading";
  Te.current = M.useMemo(() => Ae * F + ot, [Ae, ot]), M.useEffect(() => {
    se(!0);
  }, []), M.useLayoutEffect(() => {
    if (!X)
      return;
    let oe = O.current, me = oe.style.height;
    oe.style.height = "auto";
    let we = oe.getBoundingClientRect().height;
    oe.style.height = me, Z(we), f((ye) => ye.find((Me) => Me.toastId === c.id) ? ye.map((Me) => Me.toastId === c.id ? { ...Me, height: we } : Me) : [{ toastId: c.id, height: we, position: c.position }, ...ye]);
  }, [X, c.title, c.description, f, c.id]);
  let ze = M.useCallback(() => {
    R(!0), te(Te.current), f((oe) => oe.filter((me) => me.toastId !== c.id)), setTimeout(() => {
      w(c);
    }, gE);
  }, [c, w, f, Te]);
  M.useEffect(() => {
    if (c.promise && de === "loading" || c.duration === 1 / 0 || c.type === "loading")
      return;
    let oe, me = Be;
    return v || d || H && xt ? (() => {
      if (Xe.current < Ze.current) {
        let we = (/* @__PURE__ */ new Date()).getTime() - Ze.current;
        me = me - we;
      }
      Xe.current = (/* @__PURE__ */ new Date()).getTime();
    })() : me !== 1 / 0 && (Ze.current = (/* @__PURE__ */ new Date()).getTime(), oe = setTimeout(() => {
      var we;
      (we = c.onAutoClose) == null || we.call(c, c), ze();
    }, me)), () => clearTimeout(oe);
  }, [v, d, ae, c, Be, ze, c.promise, de, H, xt]), M.useEffect(() => {
    let oe = O.current;
    if (oe) {
      let me = oe.getBoundingClientRect().height;
      return Z(me), f((we) => [{ toastId: c.id, height: me, position: c.position }, ...we]), () => f((we) => we.filter((ye) => ye.toastId !== c.id));
    }
  }, [f, c.id]), M.useEffect(() => {
    c.delete && ze();
  }, [ze, c.delete]);
  function gt() {
    return V != null && V.loading ? M.createElement("div", { className: "sonner-loader", "data-visible": de === "loading" }, V.loading) : z ? M.createElement("div", { className: "sonner-loader", "data-visible": de === "loading" }, z) : M.createElement(J_, { visible: de === "loading" });
  }
  function Zt(oe) {
    return { __html: X_.sanitize(oe) };
  }
  return M.createElement("li", { "aria-live": c.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: O, className: K(E, ve, A == null ? void 0 : A.toast, (t = c == null ? void 0 : c.classNames) == null ? void 0 : t.toast, A == null ? void 0 : A.default, A == null ? void 0 : A[de], (n = c == null ? void 0 : c.classNames) == null ? void 0 : n[de]), "data-sonner-toast": "", "data-styled": !(c.jsx || c.unstyled || u), "data-mounted": X, "data-promise": !!c.promise, "data-removed": ee, "data-visible": ge, "data-y-position": Dt, "data-x-position": rt, "data-index": g, "data-front": ne, "data-swiping": B, "data-dismissible": Se, "data-type": de, "data-invert": mt, "data-swipe-out": W, "data-expanded": !!(v || ae && X), style: { "--index": g, "--toasts-before": g, "--z-index": h.length - g, "--offset": `${ee ? U : Te.current}px`, "--initial-height": ae ? "auto" : `${fe}px`, ...C, ...c.style }, onPointerDown: (oe) => {
    Fe || !Se || (ce.current = /* @__PURE__ */ new Date(), te(Te.current), oe.target.setPointerCapture(oe.pointerId), oe.target.tagName !== "BUTTON" && (G(!0), Ke.current = { x: oe.clientX, y: oe.clientY }));
  }, onPointerUp: () => {
    var oe, me, we, ye;
    if (W || !Se)
      return;
    Ke.current = null;
    let Me = Number(((oe = O.current) == null ? void 0 : oe.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), _e = (/* @__PURE__ */ new Date()).getTime() - ((me = ce.current) == null ? void 0 : me.getTime()), Qe = Math.abs(Me) / _e;
    if (Math.abs(Me) >= mE || Qe > 0.11) {
      te(Te.current), (we = c.onDismiss) == null || we.call(c, c), ze(), j(!0);
      return;
    }
    (ye = O.current) == null || ye.style.setProperty("--swipe-amount", "0px"), G(!1);
  }, onPointerMove: (oe) => {
    var me;
    if (!Ke.current || !Se)
      return;
    let we = oe.clientY - Ke.current.y, ye = oe.clientX - Ke.current.x, Me = (Dt === "top" ? Math.min : Math.max)(0, we), _e = oe.pointerType === "touch" ? 10 : 2;
    Math.abs(Me) > _e ? (me = O.current) == null || me.style.setProperty("--swipe-amount", `${we}px`) : Math.abs(ye) > _e && (Ke.current = null);
  } }, qe && !c.jsx ? M.createElement("button", { "aria-label": J, "data-disabled": Fe, "data-close-button": !0, onClick: Fe || !Se ? () => {
  } : () => {
    var oe;
    ze(), (oe = c.onDismiss) == null || oe.call(c, c);
  }, className: K(A == null ? void 0 : A.closeButton, (o = c == null ? void 0 : c.classNames) == null ? void 0 : o.closeButton) }, M.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, M.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), M.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, c.jsx || M.isValidElement(c.title) ? c.jsx || c.title : M.createElement(M.Fragment, null, de || c.icon || c.promise ? M.createElement("div", { "data-icon": "", className: K(A == null ? void 0 : A.icon) }, c.promise || c.type === "loading" && !c.icon ? c.icon || gt() : null, c.type !== "loading" ? c.icon || (V == null ? void 0 : V[de]) || Z_(de) : null) : null, M.createElement("div", { "data-content": "", className: K(A == null ? void 0 : A.content) }, M.createElement("div", { "data-title": "", className: K(A == null ? void 0 : A.title, (r = c == null ? void 0 : c.classNames) == null ? void 0 : r.title), dangerouslySetInnerHTML: Zt(c.title) }), c.description ? M.createElement("div", { "data-description": "", className: K(T, Ee, A == null ? void 0 : A.description, (a = c == null ? void 0 : c.classNames) == null ? void 0 : a.description), dangerouslySetInnerHTML: Zt(c.description) }) : null), M.isValidElement(c.cancel) ? c.cancel : c.cancel && ca(c.cancel) ? M.createElement("button", { "data-button": !0, "data-cancel": !0, style: c.cancelButtonStyle || _, onClick: (oe) => {
    ca(c.cancel) && Se && (ze(), c.cancel.onClick(oe));
  }, className: K(A == null ? void 0 : A.cancelButton, (i = c == null ? void 0 : c.classNames) == null ? void 0 : i.cancelButton) }, c.cancel.label) : null, M.isValidElement(c.action) ? c.action : c.action && ca(c.action) ? M.createElement("button", { "data-button": "", style: c.actionButtonStyle || S, onClick: (oe) => {
    ca(c.action) && (c.action.onClick(oe), !oe.defaultPrevented && ze());
  }, className: K(A == null ? void 0 : A.actionButton, (s = c == null ? void 0 : c.classNames) == null ? void 0 : s.actionButton) }, c.action.label) : null));
};
function Ad() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var bE = (e) => {
  let { invert: t, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: r, closeButton: a, className: i, offset: s, theme: l = "light", richColors: c, duration: u, style: d, visibleToasts: f = cE, toastOptions: p, dir: m = Ad(), gap: g = pE, loadingIcon: h, icons: v, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: y, cn: C = hE } = e, [_, S] = M.useState([]), E = M.useMemo(() => Array.from(new Set([n].concat(_.filter((ee) => ee.position).map((ee) => ee.position)))), [_, n]), [T, N] = M.useState([]), [k, F] = M.useState(!1), [z, ae] = M.useState(!1), [A, V] = M.useState(l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), J = M.useRef(null), H = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), K = M.useRef(null), X = M.useRef(!1), se = M.useCallback((ee) => S((R) => R.filter(({ id: B }) => B !== ee.id)), []);
  return M.useEffect(() => Ft.subscribe((ee) => {
    if (ee.dismiss) {
      S((R) => R.map((B) => B.id === ee.id ? { ...B, delete: !0 } : B));
      return;
    }
    setTimeout(() => {
      ul.flushSync(() => {
        S((R) => {
          let B = R.findIndex((G) => G.id === ee.id);
          return B !== -1 ? [...R.slice(0, B), { ...R[B], ...ee }, ...R.slice(B + 1)] : [ee, ...R];
        });
      });
    });
  }), []), M.useEffect(() => {
    if (l !== "system") {
      V(l);
      return;
    }
    l === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? V("dark") : V("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: ee }) => {
      V(ee ? "dark" : "light");
    });
  }, [l]), M.useEffect(() => {
    _.length <= 1 && F(!1);
  }, [_]), M.useEffect(() => {
    let ee = (R) => {
      var B, G;
      o.every((W) => R[W] || R.code === W) && (F(!0), (B = J.current) == null || B.focus()), R.code === "Escape" && (document.activeElement === J.current || (G = J.current) != null && G.contains(document.activeElement)) && F(!1);
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [o]), M.useEffect(() => {
    if (J.current)
      return () => {
        K.current && (K.current.focus({ preventScroll: !0 }), K.current = null, X.current = !1);
      };
  }, [J.current]), _.length ? M.createElement("section", { "aria-label": `${w} ${H}`, tabIndex: -1 }, E.map((ee, R) => {
    var B;
    let [G, W] = ee.split("-");
    return M.createElement("ol", { key: ee, dir: m === "auto" ? Ad() : m, tabIndex: -1, ref: J, className: i, "data-sonner-toaster": !0, "data-theme": A, "data-rich-colors": c, "data-y-position": G, "data-x-position": W, style: { "--front-toast-height": `${((B = T[0]) == null ? void 0 : B.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || uE, "--width": `${fE}px`, "--gap": `${g}px`, ...d }, onBlur: (j) => {
      X.current && !j.currentTarget.contains(j.relatedTarget) && (X.current = !1, K.current && (K.current.focus({ preventScroll: !0 }), K.current = null));
    }, onFocus: (j) => {
      j.target instanceof HTMLElement && j.target.dataset.dismissible === "false" || X.current || (X.current = !0, K.current = j.relatedTarget);
    }, onMouseEnter: () => F(!0), onMouseMove: () => F(!0), onMouseLeave: () => {
      z || F(!1);
    }, onPointerDown: (j) => {
      j.target instanceof HTMLElement && j.target.dataset.dismissible === "false" || ae(!0);
    }, onPointerUp: () => ae(!1) }, _.filter((j) => !j.position && R === 0 || j.position === ee).map((j, U) => {
      var te, fe;
      return M.createElement(vE, { key: j.id, icons: v, index: U, toast: j, duration: (te = p == null ? void 0 : p.duration) != null ? te : u, className: p == null ? void 0 : p.className, descriptionClassName: p == null ? void 0 : p.descriptionClassName, invert: t, visibleToasts: f, closeButton: (fe = p == null ? void 0 : p.closeButton) != null ? fe : a, interacting: z, position: ee, style: p == null ? void 0 : p.style, unstyled: p == null ? void 0 : p.unstyled, classNames: p == null ? void 0 : p.classNames, cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle, actionButtonStyle: p == null ? void 0 : p.actionButtonStyle, removeToast: se, toasts: _.filter((Z) => Z.position == j.position), heights: T.filter((Z) => Z.position == j.position), setHeights: N, expandByDefault: r, gap: g, loadingIcon: h, expanded: k, pauseWhenPageIsHidden: y, cn: C });
    }));
  })) : null;
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/
const YM = ({ ...e }) => {
  const { theme: t = "system" } = N_();
  return /* @__PURE__ */ b(
    bE,
    {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "rounded-lg flex border border-[#E8E9EB] bg-white w-[320px] h-[72px] pl-[16px] pr-[56px] py-4",
          description: "group-[.toast]:text-slate-500  ",
          actionButton: "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50    ",
          cancelButton: "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500    "
        }
      },
      ...e
    }
  );
}, KM = ({
  description: e,
  showCloseButton: t
}) => {
  Td(
    /* @__PURE__ */ Q("div", { className: "flex", children: [
      /* @__PURE__ */ b("div", { className: "pl-3", children: /* @__PURE__ */ b("p", { className: "text-xs text-[#212329]", children: e }) }),
      t && /* @__PURE__ */ b(
        "button",
        {
          onClick: () => Td.dismiss(),
          className: "absolute top-4 right-4",
          children: /* @__PURE__ */ b(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ b(
                "path",
                {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M8.94283 8.00001L12.4784 11.5355C12.7387 11.7959 12.7387 12.218 12.4784 12.4783C12.218 12.7387 11.7959 12.7387 11.5356 12.4783L8.00002 8.94281L4.46449 12.4783C4.20414 12.7387 3.78203 12.7387 3.52168 12.4783C3.26133 12.218 3.26133 11.7959 3.52168 11.5355L7.05721 8.00001L3.52168 4.46447C3.26133 4.20412 3.26133 3.78201 3.52168 3.52166C3.78203 3.26131 4.20414 3.26131 4.46449 3.52166L8.00002 7.0572L11.5356 3.52166C11.7959 3.26131 12.218 3.26131 12.4784 3.52166C12.7387 3.78201 12.7387 4.20412 12.4784 4.46447L8.94283 8.00001Z",
                  fill: "#9B9EA3"
                }
              )
            }
          )
        }
      )
    ] })
  );
}, Nh = "Switch", [wE, qM] = Ve(Nh), [yE, xE] = wE(Nh), $E = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, name: o, checked: r, defaultChecked: a, required: i, disabled: s, value: l = "on", onCheckedChange: c, ...u } = e, [d, f] = re(null), p = be(
    t,
    (w) => f(w)
  ), m = q(!1), g = d ? !!d.closest("form") : !0, [h = !1, v] = Ue({
    prop: r,
    defaultProp: a,
    onChange: c
  });
  return /* @__PURE__ */ x(yE, {
    scope: n,
    checked: h,
    disabled: s
  }, /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "switch",
    "aria-checked": h,
    "aria-required": i,
    "data-state": Dh(h),
    "data-disabled": s ? "" : void 0,
    disabled: s,
    value: l
  }, u, {
    ref: p,
    onClick: Y(e.onClick, (w) => {
      v(
        (y) => !y
      ), g && (m.current = w.isPropagationStopped(), m.current || w.stopPropagation());
    })
  })), g && /* @__PURE__ */ x(_E, {
    control: d,
    bubbles: !m.current,
    name: o,
    value: l,
    checked: h,
    required: i,
    disabled: s,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), CE = "SwitchThumb", SE = /* @__PURE__ */ I((e, t) => {
  const { __scopeSwitch: n, ...o } = e, r = xE(CE, n);
  return /* @__PURE__ */ x(ie.span, P({
    "data-state": Dh(r.checked),
    "data-disabled": r.disabled ? "" : void 0
  }, o, {
    ref: t
  }));
}), _E = (e) => {
  const { control: t, checked: n, bubbles: o = !0, ...r } = e, a = q(null), i = Lo(n), s = Ir(t);
  return le(() => {
    const l = a.current, c = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(c, "checked").set;
    if (i !== n && d) {
      const f = new Event("click", {
        bubbles: o
      });
      d.call(l, n), l.dispatchEvent(f);
    }
  }, [
    i,
    n,
    o
  ]), /* @__PURE__ */ x("input", P({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: n
  }, r, {
    tabIndex: -1,
    ref: a,
    style: {
      ...e.style,
      ...s,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Dh(e) {
  return e ? "checked" : "unchecked";
}
const Th = $E, EE = SE, PE = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Th,
  {
    className: L(
      "peer inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0073E6] data-[state=unchecked]:bg-[#9B9EA3]",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ b(
      EE,
      {
        className: L(
          "pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
PE.displayName = Th.displayName;
const Ah = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ b(
  "table",
  {
    ref: n,
    className: L("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Ah.displayName = "Table";
const Ih = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b("thead", { ref: n, className: L("[&_tr]:border-b", e), ...t }));
Ih.displayName = "TableHeader";
const Oh = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "tbody",
  {
    ref: n,
    className: L("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Oh.displayName = "TableBody";
const RE = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "tfoot",
  {
    ref: n,
    className: L(
      "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0  ",
      e
    ),
    ...t
  }
));
RE.displayName = "TableFooter";
const Sa = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "tr",
  {
    ref: n,
    className: L(
      "border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100    ",
      e
    ),
    ...t
  }
));
Sa.displayName = "TableRow";
const kh = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "th",
  {
    ref: n,
    className: L(
      "h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0  ",
      e
    ),
    ...t
  }
));
kh.displayName = "TableHead";
const tl = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "td",
  {
    ref: n,
    className: L("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
tl.displayName = "TableCell";
const ME = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  "caption",
  {
    ref: n,
    className: L("mt-4 text-sm text-slate-500  ", e),
    ...t
  }
));
ME.displayName = "TableCaption";
const Lh = "Tabs", [NE, XM] = Ve(Lh, [
  cn
]), Fh = cn(), [DE, Lc] = NE(Lh), TE = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: o, onValueChange: r, defaultValue: a, orientation: i = "horizontal", dir: s, activationMode: l = "automatic", ...c } = e, u = Yt(s), [d, f] = Ue({
    prop: o,
    onChange: r,
    defaultProp: a
  });
  return /* @__PURE__ */ x(DE, {
    scope: n,
    baseId: et(),
    value: d,
    onValueChange: f,
    orientation: i,
    dir: u,
    activationMode: l
  }, /* @__PURE__ */ x(ie.div, P({
    dir: u,
    "data-orientation": i
  }, c, {
    ref: t
  })));
}), AE = "TabsList", IE = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, loop: o = !0, ...r } = e, a = Lc(AE, n), i = Fh(n);
  return /* @__PURE__ */ x(zr, P({
    asChild: !0
  }, i, {
    orientation: a.orientation,
    dir: a.dir,
    loop: o
  }), /* @__PURE__ */ x(ie.div, P({
    role: "tablist",
    "aria-orientation": a.orientation
  }, r, {
    ref: t
  })));
}), OE = "TabsTrigger", kE = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: o, disabled: r = !1, ...a } = e, i = Lc(OE, n), s = Fh(n), l = zh(i.baseId, o), c = Vh(i.baseId, o), u = o === i.value;
  return /* @__PURE__ */ x(Vr, P({
    asChild: !0
  }, s, {
    focusable: !r,
    active: u
  }), /* @__PURE__ */ x(ie.button, P({
    type: "button",
    role: "tab",
    "aria-selected": u,
    "aria-controls": c,
    "data-state": u ? "active" : "inactive",
    "data-disabled": r ? "" : void 0,
    disabled: r,
    id: l
  }, a, {
    ref: t,
    onMouseDown: Y(e.onMouseDown, (d) => {
      !r && d.button === 0 && d.ctrlKey === !1 ? i.onValueChange(o) : d.preventDefault();
    }),
    onKeyDown: Y(e.onKeyDown, (d) => {
      [
        " ",
        "Enter"
      ].includes(d.key) && i.onValueChange(o);
    }),
    onFocus: Y(e.onFocus, () => {
      const d = i.activationMode !== "manual";
      !u && !r && d && i.onValueChange(o);
    })
  })));
}), LE = "TabsContent", FE = /* @__PURE__ */ I((e, t) => {
  const { __scopeTabs: n, value: o, forceMount: r, children: a, ...i } = e, s = Lc(LE, n), l = zh(s.baseId, o), c = Vh(s.baseId, o), u = o === s.value, d = q(u);
  return le(() => {
    const f = requestAnimationFrame(
      () => d.current = !1
    );
    return () => cancelAnimationFrame(f);
  }, []), /* @__PURE__ */ x(
    Ye,
    {
      present: r || u
    },
    ({ present: f }) => /* @__PURE__ */ x(ie.div, P({
      "data-state": u ? "active" : "inactive",
      "data-orientation": s.orientation,
      role: "tabpanel",
      "aria-labelledby": l,
      hidden: !f,
      id: c,
      tabIndex: 0
    }, i, {
      ref: t,
      style: {
        ...e.style,
        animationDuration: d.current ? "0s" : void 0
      }
    }), f && a)
  );
});
function zh(e, t) {
  return `${e}-trigger-${t}`;
}
function Vh(e, t) {
  return `${e}-content-${t}`;
}
const zE = TE, Hh = IE, Bh = kE, Gh = FE, ZM = zE, VE = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Hh,
  {
    ref: n,
    className: L("!flex h-10 items-center", e),
    ...t
  }
));
VE.displayName = Hh.displayName;
const HE = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Bh,
  {
    ref: n,
    className: L(
      "inline-flex border-b-2 border-b-white border-solid leading-5 items-center justify-center whitespace-nowrap px-[12px] pb-[14px] text-[14px] text-[#000000] font-normal transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#0073E6] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-b-[#006DDA]",
      e
    ),
    ...t
  }
));
HE.displayName = Bh.displayName;
const BE = $.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ b(
  Gh,
  {
    ref: n,
    className: L(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2    ",
      e
    ),
    ...t
  }
));
BE.displayName = Gh.displayName;
const GE = $.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ b(
    "textarea",
    {
      className: L(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50          ",
        e
      ),
      ref: n,
      ...t
    }
  )
);
GE.displayName = "Textarea";
const Wh = /* @__PURE__ */ I((e, t) => {
  const { pressed: n, defaultPressed: o = !1, onPressedChange: r, ...a } = e, [i = !1, s] = Ue({
    prop: n,
    onChange: r,
    defaultProp: o
  });
  return /* @__PURE__ */ x(ie.button, P({
    type: "button",
    "aria-pressed": i,
    "data-state": i ? "on" : "off",
    "data-disabled": e.disabled ? "" : void 0
  }, a, {
    ref: t,
    onClick: Y(e.onClick, () => {
      e.disabled || s(!i);
    })
  }));
}), jh = Wh, $i = "ToggleGroup", [Uh, QM] = Ve($i, [
  cn
]), Yh = cn(), WE = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { type: n, ...o } = e;
  if (n === "single") {
    const r = o;
    return /* @__PURE__ */ M.createElement(jE, P({}, r, {
      ref: t
    }));
  }
  if (n === "multiple") {
    const r = o;
    return /* @__PURE__ */ M.createElement(UE, P({}, r, {
      ref: t
    }));
  }
  throw new Error(`Missing prop \`type\` expected on \`${$i}\``);
}), [Kh, qh] = Uh($i), jE = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, ...a } = e, [i, s] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  });
  return /* @__PURE__ */ M.createElement(Kh, {
    scope: e.__scopeToggleGroup,
    type: "single",
    value: i ? [
      i
    ] : [],
    onItemActivate: s,
    onItemDeactivate: M.useCallback(
      () => s(""),
      [
        s
      ]
    )
  }, /* @__PURE__ */ M.createElement(Xh, P({}, a, {
    ref: t
  })));
}), UE = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { value: n, defaultValue: o, onValueChange: r = () => {
  }, ...a } = e, [i = [], s] = Ue({
    prop: n,
    defaultProp: o,
    onChange: r
  }), l = M.useCallback(
    (u) => s(
      (d = []) => [
        ...d,
        u
      ]
    ),
    [
      s
    ]
  ), c = M.useCallback(
    (u) => s(
      (d = []) => d.filter(
        (f) => f !== u
      )
    ),
    [
      s
    ]
  );
  return /* @__PURE__ */ M.createElement(Kh, {
    scope: e.__scopeToggleGroup,
    type: "multiple",
    value: i,
    onItemActivate: l,
    onItemDeactivate: c
  }, /* @__PURE__ */ M.createElement(Xh, P({}, a, {
    ref: t
  })));
}), [YE, KE] = Uh($i), Xh = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeToggleGroup: n, disabled: o = !1, rovingFocus: r = !0, orientation: a, dir: i, loop: s = !0, ...l } = e, c = Yh(n), u = Yt(i), d = {
    role: "group",
    dir: u,
    ...l
  };
  return /* @__PURE__ */ M.createElement(YE, {
    scope: n,
    rovingFocus: r,
    disabled: o
  }, r ? /* @__PURE__ */ M.createElement(zr, P({
    asChild: !0
  }, c, {
    orientation: a,
    dir: u,
    loop: s
  }), /* @__PURE__ */ M.createElement(ie.div, P({}, d, {
    ref: t
  }))) : /* @__PURE__ */ M.createElement(ie.div, P({}, d, {
    ref: t
  })));
}), nl = "ToggleGroupItem", qE = /* @__PURE__ */ M.forwardRef((e, t) => {
  const n = qh(nl, e.__scopeToggleGroup), o = KE(nl, e.__scopeToggleGroup), r = Yh(e.__scopeToggleGroup), a = n.value.includes(e.value), i = o.disabled || e.disabled, s = {
    ...e,
    pressed: a,
    disabled: i
  }, l = M.useRef(null);
  return o.rovingFocus ? /* @__PURE__ */ M.createElement(Vr, P({
    asChild: !0
  }, r, {
    focusable: !i,
    active: a,
    ref: l
  }), /* @__PURE__ */ M.createElement(Id, P({}, s, {
    ref: t
  }))) : /* @__PURE__ */ M.createElement(Id, P({}, s, {
    ref: t
  }));
}), Id = /* @__PURE__ */ M.forwardRef((e, t) => {
  const { __scopeToggleGroup: n, value: o, ...r } = e, a = qh(nl, n), i = {
    role: "radio",
    "aria-checked": e.pressed,
    "aria-pressed": void 0
  }, s = a.type === "single" ? i : void 0;
  return /* @__PURE__ */ M.createElement(Wh, P({}, s, r, {
    ref: t,
    onPressedChange: (l) => {
      l ? a.onItemActivate(o) : a.onItemDeactivate(o);
    }
  }));
}), Zh = WE, Qh = qE, Jh = co(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 hover:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900            ",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900      "
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), XE = $.forwardRef(({ className: e, variant: t, size: n, ...o }, r) => /* @__PURE__ */ b(
  jh,
  {
    ref: r,
    className: L(Jh({ variant: t, size: n, className: e })),
    ...o
  }
));
XE.displayName = jh.displayName;
const ev = $.createContext({
  size: "default",
  variant: "default"
}), ZE = $.forwardRef(({ className: e, variant: t, size: n, children: o, ...r }, a) => /* @__PURE__ */ b(
  Zh,
  {
    ref: a,
    className: L("flex items-center justify-center gap-1", e),
    ...r,
    children: /* @__PURE__ */ b(ev.Provider, { value: { variant: t, size: n }, children: o })
  }
));
ZE.displayName = Zh.displayName;
const QE = $.forwardRef(({ className: e, children: t, variant: n, size: o, ...r }, a) => {
  const i = $.useContext(ev);
  return /* @__PURE__ */ b(
    Qh,
    {
      ref: a,
      className: L(
        Jh({
          variant: i.variant || n,
          size: i.size || o
        }),
        e
      ),
      ...r,
      children: t
    }
  );
});
QE.displayName = Qh.displayName;
const [Ci, JM] = Ve("Tooltip", [
  ln
]), Si = ln(), JE = "TooltipProvider", eP = 700, ol = "tooltip.open", [tP, Fc] = Ci(JE), nP = (e) => {
  const { __scopeTooltip: t, delayDuration: n = eP, skipDelayDuration: o = 300, disableHoverableContent: r = !1, children: a } = e, [i, s] = re(!0), l = q(!1), c = q(0);
  return le(() => {
    const u = c.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ x(tP, {
    scope: t,
    isOpenDelayed: i,
    delayDuration: n,
    onOpen: he(() => {
      window.clearTimeout(c.current), s(!1);
    }, []),
    onClose: he(() => {
      window.clearTimeout(c.current), c.current = window.setTimeout(
        () => s(!0),
        o
      );
    }, [
      o
    ]),
    isPointerInTransitRef: l,
    onPointerInTransitChange: he((u) => {
      l.current = u;
    }, []),
    disableHoverableContent: r
  }, a);
}, zc = "Tooltip", [oP, _i] = Ci(zc), rP = (e) => {
  const { __scopeTooltip: t, children: n, open: o, defaultOpen: r = !1, onOpenChange: a, disableHoverableContent: i, delayDuration: s } = e, l = Fc(zc, e.__scopeTooltip), c = Si(t), [u, d] = re(null), f = et(), p = q(0), m = i ?? l.disableHoverableContent, g = s ?? l.delayDuration, h = q(!1), [v = !1, w] = Ue({
    prop: o,
    defaultProp: r,
    onChange: (E) => {
      E ? (l.onOpen(), document.dispatchEvent(new CustomEvent(ol))) : l.onClose(), a == null || a(E);
    }
  }), y = nn(() => v ? h.current ? "delayed-open" : "instant-open" : "closed", [
    v
  ]), C = he(() => {
    window.clearTimeout(p.current), h.current = !1, w(!0);
  }, [
    w
  ]), _ = he(() => {
    window.clearTimeout(p.current), w(!1);
  }, [
    w
  ]), S = he(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      h.current = !0, w(!0);
    }, g);
  }, [
    g,
    w
  ]);
  return le(() => () => window.clearTimeout(p.current), []), /* @__PURE__ */ x(Ho, c, /* @__PURE__ */ x(oP, {
    scope: t,
    contentId: f,
    open: v,
    stateAttribute: y,
    trigger: u,
    onTriggerChange: d,
    onTriggerEnter: he(() => {
      l.isOpenDelayed ? S() : C();
    }, [
      l.isOpenDelayed,
      S,
      C
    ]),
    onTriggerLeave: he(() => {
      m ? _() : window.clearTimeout(p.current);
    }, [
      _,
      m
    ]),
    onOpen: C,
    onClose: _,
    disableHoverableContent: m
  }, n));
}, Od = "TooltipTrigger", aP = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = _i(Od, n), a = Fc(Od, n), i = Si(n), s = q(null), l = be(t, s, r.onTriggerChange), c = q(!1), u = q(!1), d = he(
    () => c.current = !1,
    []
  );
  return le(() => () => document.removeEventListener("pointerup", d), [
    d
  ]), /* @__PURE__ */ x(Lr, P({
    asChild: !0
  }, i), /* @__PURE__ */ x(ie.button, P({
    // We purposefully avoid adding `type=button` here because tooltip triggers are also
    // commonly anchors and the anchor `type` attribute signifies MIME type.
    "aria-describedby": r.open ? r.contentId : void 0,
    "data-state": r.stateAttribute
  }, o, {
    ref: l,
    onPointerMove: Y(e.onPointerMove, (f) => {
      f.pointerType !== "touch" && !u.current && !a.isPointerInTransitRef.current && (r.onTriggerEnter(), u.current = !0);
    }),
    onPointerLeave: Y(e.onPointerLeave, () => {
      r.onTriggerLeave(), u.current = !1;
    }),
    onPointerDown: Y(e.onPointerDown, () => {
      c.current = !0, document.addEventListener("pointerup", d, {
        once: !0
      });
    }),
    onFocus: Y(e.onFocus, () => {
      c.current || r.onOpen();
    }),
    onBlur: Y(e.onBlur, r.onClose),
    onClick: Y(e.onClick, r.onClose)
  })));
}), iP = "TooltipPortal", [eN, sP] = Ci(iP, {
  forceMount: void 0
}), Sr = "TooltipContent", lP = /* @__PURE__ */ I((e, t) => {
  const n = sP(Sr, e.__scopeTooltip), { forceMount: o = n.forceMount, side: r = "top", ...a } = e, i = _i(Sr, e.__scopeTooltip);
  return /* @__PURE__ */ x(Ye, {
    present: o || i.open
  }, i.disableHoverableContent ? /* @__PURE__ */ x(tv, P({
    side: r
  }, a, {
    ref: t
  })) : /* @__PURE__ */ x(cP, P({
    side: r
  }, a, {
    ref: t
  })));
}), cP = /* @__PURE__ */ I((e, t) => {
  const n = _i(Sr, e.__scopeTooltip), o = Fc(Sr, e.__scopeTooltip), r = q(null), a = be(t, r), [i, s] = re(null), { trigger: l, onClose: c } = n, u = r.current, { onPointerInTransitChange: d } = o, f = he(() => {
    s(null), d(!1);
  }, [
    d
  ]), p = he((m, g) => {
    const h = m.currentTarget, v = {
      x: m.clientX,
      y: m.clientY
    }, w = mP(v, h.getBoundingClientRect()), y = gP(v, w), C = hP(g.getBoundingClientRect()), _ = bP([
      ...y,
      ...C
    ]);
    s(_), d(!0);
  }, [
    d
  ]);
  return le(() => () => f(), [
    f
  ]), le(() => {
    if (l && u) {
      const m = (h) => p(h, u), g = (h) => p(h, l);
      return l.addEventListener("pointerleave", m), u.addEventListener("pointerleave", g), () => {
        l.removeEventListener("pointerleave", m), u.removeEventListener("pointerleave", g);
      };
    }
  }, [
    l,
    u,
    p,
    f
  ]), le(() => {
    if (i) {
      const m = (g) => {
        const h = g.target, v = {
          x: g.clientX,
          y: g.clientY
        }, w = (l == null ? void 0 : l.contains(h)) || (u == null ? void 0 : u.contains(h)), y = !vP(v, i);
        w ? f() : y && (f(), c());
      };
      return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m);
    }
  }, [
    l,
    u,
    i,
    c,
    f
  ]), /* @__PURE__ */ x(tv, P({}, e, {
    ref: a
  }));
}), [uP, dP] = Ci(zc, {
  isInside: !1
}), tv = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, children: o, "aria-label": r, onEscapeKeyDown: a, onPointerDownOutside: i, ...s } = e, l = _i(Sr, n), c = Si(n), { onClose: u } = l;
  return le(() => (document.addEventListener(ol, u), () => document.removeEventListener(ol, u)), [
    u
  ]), le(() => {
    if (l.trigger) {
      const d = (f) => {
        const p = f.target;
        p != null && p.contains(l.trigger) && u();
      };
      return window.addEventListener("scroll", d, {
        capture: !0
      }), () => window.removeEventListener("scroll", d, {
        capture: !0
      });
    }
  }, [
    l.trigger,
    u
  ]), /* @__PURE__ */ x(ao, {
    asChild: !0,
    disableOutsidePointerEvents: !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: i,
    onFocusOutside: (d) => d.preventDefault(),
    onDismiss: u
  }, /* @__PURE__ */ x(Fr, P({
    "data-state": l.stateAttribute
  }, c, s, {
    ref: t,
    style: {
      ...s.style,
      "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
      "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
      "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }), /* @__PURE__ */ x(pl, null, o), /* @__PURE__ */ x(uP, {
    scope: n,
    isInside: !0
  }, /* @__PURE__ */ x(Ng, {
    id: l.contentId,
    role: "tooltip"
  }, r || o))));
}), fP = "TooltipArrow", pP = /* @__PURE__ */ I((e, t) => {
  const { __scopeTooltip: n, ...o } = e, r = Si(n);
  return dP(fP, n).isInside ? null : /* @__PURE__ */ x(P6, P({}, r, o, {
    ref: t
  }));
});
function mP(e, t) {
  const n = Math.abs(t.top - e.y), o = Math.abs(t.bottom - e.y), r = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, o, r, a)) {
    case a:
      return "left";
    case r:
      return "right";
    case n:
      return "top";
    case o:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function gP(e, t, n = 5) {
  const o = [];
  switch (t) {
    case "top":
      o.push({
        x: e.x - n,
        y: e.y + n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "bottom":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y - n
      });
      break;
    case "left":
      o.push({
        x: e.x + n,
        y: e.y - n
      }, {
        x: e.x + n,
        y: e.y + n
      });
      break;
    case "right":
      o.push({
        x: e.x - n,
        y: e.y - n
      }, {
        x: e.x - n,
        y: e.y + n
      });
      break;
  }
  return o;
}
function hP(e) {
  const { top: t, right: n, bottom: o, left: r } = e;
  return [
    {
      x: r,
      y: t
    },
    {
      x: n,
      y: t
    },
    {
      x: n,
      y: o
    },
    {
      x: r,
      y: o
    }
  ];
}
function vP(e, t) {
  const { x: n, y: o } = e;
  let r = !1;
  for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
    const s = t[a].x, l = t[a].y, c = t[i].x, u = t[i].y;
    l > o != u > o && n < (c - s) * (o - l) / (u - l) + s && (r = !r);
  }
  return r;
}
function bP(e) {
  const t = e.slice();
  return t.sort((n, o) => n.x < o.x ? -1 : n.x > o.x ? 1 : n.y < o.y ? -1 : n.y > o.y ? 1 : 0), wP(t);
}
function wP(e) {
  if (e.length <= 1)
    return e.slice();
  const t = [];
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], i = t[t.length - 2];
      if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x))
        t.pop();
      else
        break;
    }
    t.push(r);
  }
  t.pop();
  const n = [];
  for (let o = e.length - 1; o >= 0; o--) {
    const r = e[o];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], i = n[n.length - 2];
      if ((a.x - i.x) * (r.y - i.y) >= (a.y - i.y) * (r.x - i.x))
        n.pop();
      else
        break;
    }
    n.push(r);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
const yP = nP, xP = rP, $P = aP, nv = lP, CP = pP, SP = yP, _P = xP, EP = $P, ov = $.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...o }, r) => /* @__PURE__ */ Q(
  nv,
  {
    ref: r,
    sideOffset: n,
    className: L(
      "z-50 overflow-hidden rounded bg-black text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
      t === "small" ? "px-2 py-[6px] text-[10px] leading-3" : "px-4 py-2  font-semibold text-xs"
    ),
    ...o,
    children: [
      o.children,
      /* @__PURE__ */ b(
        CP,
        {
          width: t === "small" ? 9 : 12,
          height: t === "small" ? 4 : 6,
          offset: 0,
          style: { fill: "black" }
        }
      )
    ]
  }
));
ov.displayName = nv.displayName;
const tN = ({
  message: e = "",
  children: t,
  size: n = "medium",
  position: o = "top",
  className: r = "",
  ...a
}) => /* @__PURE__ */ b(SP, { children: /* @__PURE__ */ Q(_P, { children: [
  /* @__PURE__ */ b(EP, { asChild: !0, children: t }),
  /* @__PURE__ */ b(
    ov,
    {
      side: o,
      size: n,
      className: r,
      ...a,
      children: e
    }
  )
] }) }), nN = ({
  type: e = "grid",
  id: t,
  imageSrc: n,
  title: o,
  description: r,
  className: a,
  checked: i = !1,
  providerName: s,
  hasFavorite: l = !1,
  showPreview: c = !1,
  showCheckbox: u = !1,
  handleCheckboxChange: d = () => {
  },
  handleAssign: f = () => {
  },
  handleFavoriteClick: p = () => {
  },
  handleView: m = () => {
  },
  handleClickCard: g = () => {
  }
}) => {
  const h = "56.36%";
  return e === "grid" ? /* @__PURE__ */ Q(
    "div",
    {
      className: L(
        "group cursor-pointer w-[220px] bg-[#FFF] outline outline-[1px] rounded-lg outline-[#E8E9EB] relative hover:outline-[#0073E6] hover:outline-[2px]",
        a
      ),
      onClick: () => g(t),
      "data-cy": "lesson-card",
      children: [
        /* @__PURE__ */ Q("div", { className: "w-full", children: [
          /* @__PURE__ */ b("div", { className: "relative w-full", style: { paddingTop: h }, "data-cy": "card-image", children: /* @__PURE__ */ b(
            "img",
            {
              src: n,
              alt: "card-img",
              className: "absolute top-0 left-0 w-full h-full object-cover rounded-t-lg",
              "data-cy": `card-image-${t}`
            }
          ) }),
          u && /* @__PURE__ */ b(
            "div",
            {
              className: `absolute top-[10px] left-[10px] ${i ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
              children: /* @__PURE__ */ b(
                Xn,
                {
                  checked: i,
                  id: t,
                  onCheckedChange: () => d == null ? void 0 : d(t),
                  onClick: (v) => v.stopPropagation(),
                  "data-cy": "lesson-card-checkbox"
                }
              )
            }
          ),
          /* @__PURE__ */ Q("div", { className: "", children: [
            /* @__PURE__ */ b(
              "div",
              {
                className: `absolute 2xl-range:h-[20px] 2xl-range:w-[20px] cursor-pointer top-[10px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${l ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
                onClick: (v) => {
                  v.stopPropagation(), p(t);
                },
                "data-cy": "lesson-card-favorite-icon",
                children: l ? /* @__PURE__ */ Q(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ b("g", { "clip-path": "url(#clip0_432_3321)", children: /* @__PURE__ */ b(
                        "path",
                        {
                          d: "M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z",
                          fill: "#0073E6"
                        }
                      ) }),
                      /* @__PURE__ */ b("defs", { children: /* @__PURE__ */ b("clipPath", { id: "clip0_432_3321", children: /* @__PURE__ */ b("rect", { width: "12", height: "12", fill: "white" }) }) })
                    ]
                  }
                ) : /* @__PURE__ */ Q(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ b("g", { "clip-path": "url(#clip0_432_1968)", children: /* @__PURE__ */ b(
                        "path",
                        {
                          d: "M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z",
                          fill: "black"
                        }
                      ) }),
                      /* @__PURE__ */ b("defs", { children: /* @__PURE__ */ b("clipPath", { id: "clip0_432_1968", children: /* @__PURE__ */ b("rect", { width: "12", height: "12", fill: "white" }) }) })
                    ]
                  }
                )
              }
            ),
            c && /* @__PURE__ */ b(
              "div",
              {
                className: "absolute 2xl-range:h-[20px] 2xl-range:w-[20px] 2xl-range:top-[41px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center",
                onClick: (v) => {
                  v.stopPropagation(), m(t);
                },
                "data-cy": "lesson-card-preview-icon",
                children: /* @__PURE__ */ Q(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ b(
                        "path",
                        {
                          d: "M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z",
                          fill: "black"
                        }
                      ),
                      /* @__PURE__ */ b(
                        "path",
                        {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M6 2.5C8.64835 2.5 10.9345 3.93067 12 6C10.9345 8.06933 8.64834 9.5 6 9.5C3.35165 9.5 1.06551 8.06933 0 6C1.06551 3.93067 3.35166 2.5 6 2.5ZM6 3.5C8.08228 3.5 9.86934 4.52139 10.8432 6C9.86934 7.47861 8.08228 8.5 6 8.5C3.91772 8.5 2.13066 7.47861 1.15684 6C2.13067 4.52139 3.91772 3.5 6 3.5Z",
                          fill: "black"
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ b(
              Pt,
              {
                variant: "default",
                className: "absolute 2xl-range:mt-0 h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] right-[10px] text-[#FFF] text-[12px] font-semibold text-center mt-2",
                onClick: (v) => {
                  v.stopPropagation(), f(t);
                },
                "data-cy": "lesson-card-assign-button",
                children: "Assign"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ Q("div", { className: "p-4 h-[96px]", children: [
          /* @__PURE__ */ b("p", { className: "text-[14px] text-[#000] font-semibold leading-4 line-clamp-2", "data-cy": `lesson-title-${t}`, children: o }),
          /* @__PURE__ */ b("p", { className: "text-[12px] text-[#656870] font-normal mt-[4px] line-clamp-1", "data-cy": `provider-name-${t}`, children: `By ${s || "-"}` })
        ] })
      ]
    }
  ) : /* @__PURE__ */ Q(
    "div",
    {
      className: L(
        "group cursor-pointer flex relative w-full h-[126px] bg-[#FFF] outline rounded-lg outline-[1px] outline-[#E8E9EB] hover:outline-[#0073E6] hover:outline-[2px]",
        a
      ),
      onClick: () => g(t),
      "data-cy": "lesson-card",
      children: [
        /* @__PURE__ */ b("div", { className: "min-w-[220px]", children: /* @__PURE__ */ b(
          "img",
          {
            src: n,
            alt: "card-img",
            className: "h-[126px] w-[220px] object-cover rounded-tl-lg rounded-bl-lg",
            "data-cy": `card-image-${t}`
          }
        ) }),
        u && /* @__PURE__ */ b(
          "div",
          {
            className: `absolute top-[10px] left-[10px] ${i ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
            children: /* @__PURE__ */ b(
              Xn,
              {
                checked: i,
                id: t,
                onCheckedChange: () => d == null ? void 0 : d(t),
                onClick: (v) => v.stopPropagation(),
                "data-cy": "lesson-card-checkbox"
              }
            )
          }
        ),
        /* @__PURE__ */ Q("div", { className: "", children: [
          /* @__PURE__ */ b(
            "div",
            {
              className: `absolute cursor-pointer top-[10px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${l ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
              onClick: (v) => {
                v.stopPropagation(), p(t);
              },
              "data-cy": "lesson-card-favorite-icon",
              children: l ? /* @__PURE__ */ Q(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ b("g", { "clip-path": "url(#clip0_432_3321)", children: /* @__PURE__ */ b(
                      "path",
                      {
                        d: "M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z",
                        fill: "#0073E6"
                      }
                    ) }),
                    /* @__PURE__ */ b("defs", { children: /* @__PURE__ */ b("clipPath", { id: "clip0_432_3321", children: /* @__PURE__ */ b("rect", { width: "12", height: "12", fill: "white" }) }) })
                  ]
                }
              ) : /* @__PURE__ */ Q(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ b("g", { "clip-path": "url(#clip0_432_1968)", children: /* @__PURE__ */ b(
                      "path",
                      {
                        d: "M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z",
                        fill: "black"
                      }
                    ) }),
                    /* @__PURE__ */ b("defs", { children: /* @__PURE__ */ b("clipPath", { id: "clip0_432_1968", children: /* @__PURE__ */ b("rect", { width: "12", height: "12", fill: "white" }) }) })
                  ]
                }
              )
            }
          ),
          c && /* @__PURE__ */ b(
            "div",
            {
              className: "absolute cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center",
              onClick: (v) => {
                v.stopPropagation(), m(t);
              },
              "data-cy": "lesson-card-preview-icon",
              children: /* @__PURE__ */ Q(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ b(
                      "path",
                      {
                        d: "M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z",
                        fill: "black"
                      }
                    ),
                    /* @__PURE__ */ b(
                      "path",
                      {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M6 2.5C8.64835 2.5 10.9345 3.93067 12 6C10.9345 8.06933 8.64834 9.5 6 9.5C3.35165 9.5 1.06551 8.06933 0 6C1.06551 3.93067 3.35166 2.5 6 2.5ZM6 3.5C8.08228 3.5 9.86934 4.52139 10.8432 6C9.86934 7.47861 8.08228 8.5 6 8.5C3.91772 8.5 2.13066 7.47861 1.15684 6C2.13067 4.52139 3.91772 3.5 6 3.5Z",
                        fill: "black"
                      }
                    )
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ b(
            Pt,
            {
              variant: "default",
              className: "absolute h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] left-[145px] text-[#FFF] text-[12px] font-semibold text-center mt-2",
              onClick: (v) => {
                v.stopPropagation(), f(t);
              },
              "data-cy": "lesson-card-assign-button",
              children: "Assign"
            }
          )
        ] }),
        /* @__PURE__ */ Q("div", { className: "p-[16px]", children: [
          /* @__PURE__ */ b("p", { className: "text-[14px] text-[#000] font-semibold leading-4 line-clamp-1", "data-cy": `lesson-title-${t}`, children: o }),
          /* @__PURE__ */ b("p", { className: "text-[12px] text-[#656870] font-normal leading-3 mt-[4px]", "data-cy": `provider-name-${t}`, children: `By ${s || "-"}` }),
          /* @__PURE__ */ b("p", { className: "text-[12px] text-[#212329] font-normal leading-4 mt-[12px] line-clamp-2", "data-cy": `lesson-description-${t}`, children: r })
        ] })
      ]
    }
  );
}, PP = 1, RP = 1e6;
let as = 0;
function MP() {
  return as = (as + 1) % Number.MAX_SAFE_INTEGER, as.toString();
}
const is = /* @__PURE__ */ new Map(), kd = (e) => {
  if (is.has(e))
    return;
  const t = setTimeout(() => {
    is.delete(e), lr({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, RP);
  is.set(e, t);
}, NP = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, PP)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? kd(n) : e.toasts.forEach((o) => {
        kd(o.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (o) => o.id === n || n === void 0 ? {
            ...o,
            open: !1
          } : o
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, _a = [];
let Ea = { toasts: [] };
function lr(e) {
  Ea = NP(Ea, e), _a.forEach((t) => {
    t(Ea);
  });
}
function DP({ ...e }) {
  const t = MP(), n = (r) => lr({
    type: "UPDATE_TOAST",
    toast: { ...r, id: t }
  }), o = () => lr({ type: "DISMISS_TOAST", toastId: t });
  return lr({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (r) => {
        r || o();
      }
    }
  }), {
    id: t,
    dismiss: o,
    update: n
  };
}
function oN() {
  const [e, t] = $.useState(Ea);
  return $.useEffect(() => (_a.push(t), () => {
    const n = _a.indexOf(t);
    n > -1 && _a.splice(n, 1);
  }), [e]), {
    ...e,
    toast: DP,
    dismiss: (n) => lr({ type: "DISMISS_TOAST", toastId: n })
  };
}
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function Dn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nt(e, t) {
  return (n) => {
    t.setState((o) => ({
      ...o,
      [e]: Dn(n, o[e])
    }));
  };
}
function Ei(e) {
  return e instanceof Function;
}
function TP(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function AP(e, t) {
  const n = [], o = (r) => {
    r.forEach((a) => {
      n.push(a);
      const i = t(a);
      i != null && i.length && o(i);
    });
  };
  return o(e), n;
}
function xe(e, t, n) {
  let o = [], r;
  return (a) => {
    let i;
    n.key && n.debug && (i = Date.now());
    const s = e(a);
    if (!(s.length !== o.length || s.some((u, d) => o[d] !== u)))
      return r;
    o = s;
    let c;
    if (n.key && n.debug && (c = Date.now()), r = t(...s), n == null || n.onChange == null || n.onChange(r), n.key && n.debug && n != null && n.debug()) {
      const u = Math.round((Date.now() - i) * 100) / 100, d = Math.round((Date.now() - c) * 100) / 100, f = d / 16, p = (m, g) => {
        for (m = String(m); m.length < g; )
          m = " " + m;
        return m;
      };
      console.info(`%c⏱ ${p(d, 5)} /${p(u, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return r;
  };
}
function $e(e, t, n, o) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: o
  };
}
function IP(e, t, n, o) {
  const r = () => {
    var i;
    return (i = a.getValue()) != null ? i : e.options.renderFallbackValue;
  }, a = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(o),
    renderValue: r,
    getContext: xe(() => [e, n, t, a], (i, s, l, c) => ({
      table: i,
      column: s,
      row: l,
      cell: c,
      getValue: c.getValue,
      renderValue: c.renderValue
    }), $e(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((i) => {
    i.createCell == null || i.createCell(a, n, t, e);
  }, {}), a;
}
function OP(e, t, n, o) {
  var r, a;
  const s = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = s.accessorKey;
  let c = (r = (a = s.id) != null ? a : l ? l.replace(".", "_") : void 0) != null ? r : typeof s.header == "string" ? s.header : void 0, u;
  if (s.accessorFn ? u = s.accessorFn : l && (l.includes(".") ? u = (f) => {
    let p = f;
    for (const g of l.split(".")) {
      var m;
      p = (m = p) == null ? void 0 : m[g], process.env.NODE_ENV !== "production" && p === void 0 && console.warn(`"${g}" in deeply nested key "${l}" returned undefined.`);
    }
    return p;
  } : u = (f) => f[s.accessorKey]), !c)
    throw process.env.NODE_ENV !== "production" ? new Error(s.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let d = {
    id: `${String(c)}`,
    accessorFn: u,
    parent: o,
    depth: n,
    columnDef: s,
    columns: [],
    getFlatColumns: xe(() => [!0], () => {
      var f;
      return [d, ...(f = d.columns) == null ? void 0 : f.flatMap((p) => p.getFlatColumns())];
    }, $e(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: xe(() => [e._getOrderColumnsFn()], (f) => {
      var p;
      if ((p = d.columns) != null && p.length) {
        let m = d.columns.flatMap((g) => g.getLeafColumns());
        return f(m);
      }
      return [d];
    }, $e(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(d, e);
  return d;
}
const it = "debugHeaders";
function Ld(e, t, n) {
  var o;
  let a = {
    id: (o = n.id) != null ? o : t.id,
    column: t,
    index: n.index,
    isPlaceholder: !!n.isPlaceholder,
    placeholderId: n.placeholderId,
    depth: n.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const i = [], s = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(s), i.push(l);
      };
      return s(a), i;
    },
    getContext: () => ({
      table: e,
      header: a,
      column: t
    })
  };
  return e._features.forEach((i) => {
    i.createHeader == null || i.createHeader(a, e);
  }), a;
}
const kP = {
  createTable: (e) => {
    e.getHeaderGroups = xe(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => {
      var a, i;
      const s = (a = o == null ? void 0 : o.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? a : [], l = (i = r == null ? void 0 : r.map((d) => n.find((f) => f.id === d)).filter(Boolean)) != null ? i : [], c = n.filter((d) => !(o != null && o.includes(d.id)) && !(r != null && r.includes(d.id)));
      return ua(t, [...s, ...c, ...l], e);
    }, $e(e.options, it, "getHeaderGroups")), e.getCenterHeaderGroups = xe(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o, r) => (n = n.filter((a) => !(o != null && o.includes(a.id)) && !(r != null && r.includes(a.id))), ua(t, n, e, "center")), $e(e.options, it, "getCenterHeaderGroups")), e.getLeftHeaderGroups = xe(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, o) => {
      var r;
      const a = (r = o == null ? void 0 : o.map((i) => n.find((s) => s.id === i)).filter(Boolean)) != null ? r : [];
      return ua(t, a, e, "left");
    }, $e(e.options, it, "getLeftHeaderGroups")), e.getRightHeaderGroups = xe(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, o) => {
      var r;
      const a = (r = o == null ? void 0 : o.map((i) => n.find((s) => s.id === i)).filter(Boolean)) != null ? r : [];
      return ua(t, a, e, "right");
    }, $e(e.options, it, "getRightHeaderGroups")), e.getFooterGroups = xe(() => [e.getHeaderGroups()], (t) => [...t].reverse(), $e(e.options, it, "getFooterGroups")), e.getLeftFooterGroups = xe(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), $e(e.options, it, "getLeftFooterGroups")), e.getCenterFooterGroups = xe(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), $e(e.options, it, "getCenterFooterGroups")), e.getRightFooterGroups = xe(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), $e(e.options, it, "getRightFooterGroups")), e.getFlatHeaders = xe(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $e(e.options, it, "getFlatHeaders")), e.getLeftFlatHeaders = xe(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $e(e.options, it, "getLeftFlatHeaders")), e.getCenterFlatHeaders = xe(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $e(e.options, it, "getCenterFlatHeaders")), e.getRightFlatHeaders = xe(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), $e(e.options, it, "getRightFlatHeaders")), e.getCenterLeafHeaders = xe(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), $e(e.options, it, "getCenterLeafHeaders")), e.getLeftLeafHeaders = xe(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), $e(e.options, it, "getLeftLeafHeaders")), e.getRightLeafHeaders = xe(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var o;
      return !((o = n.subHeaders) != null && o.length);
    }), $e(e.options, it, "getRightLeafHeaders")), e.getLeafHeaders = xe(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, o) => {
      var r, a, i, s, l, c;
      return [...(r = (a = t[0]) == null ? void 0 : a.headers) != null ? r : [], ...(i = (s = n[0]) == null ? void 0 : s.headers) != null ? i : [], ...(l = (c = o[0]) == null ? void 0 : c.headers) != null ? l : []].map((u) => u.getLeafHeaders()).flat();
    }, $e(e.options, it, "getLeafHeaders"));
  }
};
function ua(e, t, n, o) {
  var r, a;
  let i = 0;
  const s = function(f, p) {
    p === void 0 && (p = 1), i = Math.max(i, p), f.filter((m) => m.getIsVisible()).forEach((m) => {
      var g;
      (g = m.columns) != null && g.length && s(m.columns, p + 1);
    }, 0);
  };
  s(e);
  let l = [];
  const c = (f, p) => {
    const m = {
      depth: p,
      id: [o, `${p}`].filter(Boolean).join("_"),
      headers: []
    }, g = [];
    f.forEach((h) => {
      const v = [...g].reverse()[0], w = h.column.depth === m.depth;
      let y, C = !1;
      if (w && h.column.parent ? y = h.column.parent : (y = h.column, C = !0), v && (v == null ? void 0 : v.column) === y)
        v.subHeaders.push(h);
      else {
        const _ = Ld(n, y, {
          id: [o, p, y.id, h == null ? void 0 : h.id].filter(Boolean).join("_"),
          isPlaceholder: C,
          placeholderId: C ? `${g.filter((S) => S.column === y).length}` : void 0,
          depth: p,
          index: g.length
        });
        _.subHeaders.push(h), g.push(_);
      }
      m.headers.push(h), h.headerGroup = m;
    }), l.push(m), p > 0 && c(g, p - 1);
  }, u = t.map((f, p) => Ld(n, f, {
    depth: i,
    index: p
  }));
  c(u, i - 1), l.reverse();
  const d = (f) => f.filter((m) => m.column.getIsVisible()).map((m) => {
    let g = 0, h = 0, v = [0];
    m.subHeaders && m.subHeaders.length ? (v = [], d(m.subHeaders).forEach((y) => {
      let {
        colSpan: C,
        rowSpan: _
      } = y;
      g += C, v.push(_);
    })) : g = 1;
    const w = Math.min(...v);
    return h = h + w, m.colSpan = g, m.rowSpan = h, {
      colSpan: g,
      rowSpan: h
    };
  });
  return d((r = (a = l[0]) == null ? void 0 : a.headers) != null ? r : []), l;
}
const Vc = (e, t, n, o, r, a, i) => {
  let s = {
    id: t,
    index: o,
    original: n,
    depth: r,
    parentId: i,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (s._valuesCache.hasOwnProperty(l))
        return s._valuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return s._valuesCache[l] = c.accessorFn(s.original, o), s._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (s._uniqueValuesCache.hasOwnProperty(l))
        return s._uniqueValuesCache[l];
      const c = e.getColumn(l);
      if (c != null && c.accessorFn)
        return c.columnDef.getUniqueValues ? (s._uniqueValuesCache[l] = c.columnDef.getUniqueValues(s.original, o), s._uniqueValuesCache[l]) : (s._uniqueValuesCache[l] = [s.getValue(l)], s._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var c;
      return (c = s.getValue(l)) != null ? c : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => AP(s.subRows, (l) => l.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], c = s;
      for (; ; ) {
        const u = c.getParentRow();
        if (!u)
          break;
        l.push(u), c = u;
      }
      return l.reverse();
    },
    getAllCells: xe(() => [e.getAllLeafColumns()], (l) => l.map((c) => IP(e, s, c, c.id)), $e(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: xe(() => [s.getAllCells()], (l) => l.reduce((c, u) => (c[u.column.id] = u, c), {}), $e(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const c = e._features[l];
    c == null || c.createRow == null || c.createRow(s, e);
  }
  return s;
}, LP = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, rv = (e, t, n) => {
  var o;
  const r = n.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(r));
};
rv.autoRemove = (e) => Ht(e);
const av = (e, t, n) => {
  var o;
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null) && o.includes(n));
};
av.autoRemove = (e) => Ht(e);
const iv = (e, t, n) => {
  var o;
  return ((o = e.getValue(t)) == null || (o = o.toString()) == null ? void 0 : o.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
iv.autoRemove = (e) => Ht(e);
const sv = (e, t, n) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(n);
};
sv.autoRemove = (e) => Ht(e) || !(e != null && e.length);
const lv = (e, t, n) => !n.some((o) => {
  var r;
  return !((r = e.getValue(t)) != null && r.includes(o));
});
lv.autoRemove = (e) => Ht(e) || !(e != null && e.length);
const cv = (e, t, n) => n.some((o) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(o);
});
cv.autoRemove = (e) => Ht(e) || !(e != null && e.length);
const uv = (e, t, n) => e.getValue(t) === n;
uv.autoRemove = (e) => Ht(e);
const dv = (e, t, n) => e.getValue(t) == n;
dv.autoRemove = (e) => Ht(e);
const Hc = (e, t, n) => {
  let [o, r] = n;
  const a = e.getValue(t);
  return a >= o && a <= r;
};
Hc.resolveFilterValue = (e) => {
  let [t, n] = e, o = typeof t != "number" ? parseFloat(t) : t, r = typeof n != "number" ? parseFloat(n) : n, a = t === null || Number.isNaN(o) ? -1 / 0 : o, i = n === null || Number.isNaN(r) ? 1 / 0 : r;
  if (a > i) {
    const s = a;
    a = i, i = s;
  }
  return [a, i];
};
Hc.autoRemove = (e) => Ht(e) || Ht(e[0]) && Ht(e[1]);
const hn = {
  includesString: rv,
  includesStringSensitive: av,
  equalsString: iv,
  arrIncludes: sv,
  arrIncludesAll: lv,
  arrIncludesSome: cv,
  equals: uv,
  weakEquals: dv,
  inNumberRange: Hc
};
function Ht(e) {
  return e == null || e === "";
}
const FP = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Nt("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
      return typeof o == "string" ? hn.includesString : typeof o == "number" ? hn.inNumberRange : typeof o == "boolean" || o !== null && typeof o == "object" ? hn.equals : Array.isArray(o) ? hn.arrIncludes : hn.weakEquals;
    }, e.getFilterFn = () => {
      var n, o;
      return Ei(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (o = t.options.filterFns) == null ? void 0 : o[e.columnDef.filterFn]) != null ? n : hn[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, o, r;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((o = t.options.enableColumnFilters) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((o) => o.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, o;
      return (n = (o = t.getState().columnFilters) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((o) => {
        const r = e.getFilterFn(), a = o == null ? void 0 : o.find((u) => u.id === e.id), i = Dn(n, a ? a.value : void 0);
        if (Fd(r, i, e)) {
          var s;
          return (s = o == null ? void 0 : o.filter((u) => u.id !== e.id)) != null ? s : [];
        }
        const l = {
          id: e.id,
          value: i
        };
        if (a) {
          var c;
          return (c = o == null ? void 0 : o.map((u) => u.id === e.id ? l : u)) != null ? c : [];
        }
        return o != null && o.length ? [...o, l] : [l];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), o = (r) => {
        var a;
        return (a = Dn(t, r)) == null ? void 0 : a.filter((i) => {
          const s = n.find((l) => l.id === i.id);
          if (s) {
            const l = s.getFilterFn();
            if (Fd(l, i.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(o);
    }, e.resetColumnFilters = (t) => {
      var n, o;
      e.setColumnFilters(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Fd(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const zP = (e, t, n) => n.reduce((o, r) => {
  const a = r.getValue(e);
  return o + (typeof a == "number" ? a : 0);
}, 0), VP = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const a = r.getValue(e);
    a != null && (o > a || o === void 0 && a >= a) && (o = a);
  }), o;
}, HP = (e, t, n) => {
  let o;
  return n.forEach((r) => {
    const a = r.getValue(e);
    a != null && (o < a || o === void 0 && a >= a) && (o = a);
  }), o;
}, BP = (e, t, n) => {
  let o, r;
  return n.forEach((a) => {
    const i = a.getValue(e);
    i != null && (o === void 0 ? i >= i && (o = r = i) : (o > i && (o = i), r < i && (r = i)));
  }), [o, r];
}, GP = (e, t) => {
  let n = 0, o = 0;
  if (t.forEach((r) => {
    let a = r.getValue(e);
    a != null && (a = +a) >= a && (++n, o += a);
  }), n)
    return o / n;
}, WP = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((a) => a.getValue(e));
  if (!TP(n))
    return;
  if (n.length === 1)
    return n[0];
  const o = Math.floor(n.length / 2), r = n.sort((a, i) => a - i);
  return n.length % 2 !== 0 ? r[o] : (r[o - 1] + r[o]) / 2;
}, jP = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), UP = (e, t) => new Set(t.map((n) => n.getValue(e))).size, YP = (e, t) => t.length, ss = {
  sum: zP,
  min: VP,
  max: HP,
  extent: BP,
  mean: GP,
  median: WP,
  unique: jP,
  uniqueCount: UP,
  count: YP
}, KP = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var t, n;
      return (t = (n = e.getValue()) == null || n.toString == null ? void 0 : n.toString()) != null ? t : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: Nt("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((o) => o !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, o;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((o = t.options.enableGrouping) != null ? o : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.includes(e.id);
    }, e.getGroupedIndex = () => {
      var n;
      return (n = t.getState().grouping) == null ? void 0 : n.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const n = e.getCanGroup();
      return () => {
        n && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const n = t.getCoreRowModel().flatRows[0], o = n == null ? void 0 : n.getValue(e.id);
      if (typeof o == "number")
        return ss.sum;
      if (Object.prototype.toString.call(o) === "[object Date]")
        return ss.extent;
    }, e.getAggregationFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return Ei(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (o = t.options.aggregationFns) == null ? void 0 : o[e.columnDef.aggregationFn]) != null ? n : ss[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, o;
      e.setGrouping(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const o = t.getColumn(n);
      return o != null && o.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = o.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, o) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = n.subRows) != null && r.length);
    };
  }
};
function qP(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const o = e.filter((a) => !t.includes(a.id));
  return n === "remove" ? o : [...t.map((a) => e.find((i) => i.id === a)).filter(Boolean), ...o];
}
const XP = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Nt("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = xe((n) => [cr(t, n)], (n) => n.findIndex((o) => o.id === e.id), $e(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var o;
      return ((o = cr(t, n)[0]) == null ? void 0 : o.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var o;
      const r = cr(t, n);
      return ((o = r[r.length - 1]) == null ? void 0 : o.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = xe(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, o) => (r) => {
      let a = [];
      if (!(t != null && t.length))
        a = r;
      else {
        const i = [...t], s = [...r];
        for (; s.length && i.length; ) {
          const l = i.shift(), c = s.findIndex((u) => u.id === l);
          c > -1 && a.push(s.splice(c, 1)[0]);
        }
        a = [...a, ...s];
      }
      return qP(a, n, o);
    }, $e(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, ls = () => ({
  left: [],
  right: []
}), ZP = {
  getInitialState: (e) => ({
    columnPinning: ls(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Nt("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const o = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      t.setColumnPinning((r) => {
        var a, i;
        if (n === "right") {
          var s, l;
          return {
            left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter((d) => !(o != null && o.includes(d))),
            right: [...((l = r == null ? void 0 : r.right) != null ? l : []).filter((d) => !(o != null && o.includes(d))), ...o]
          };
        }
        if (n === "left") {
          var c, u;
          return {
            left: [...((c = r == null ? void 0 : r.left) != null ? c : []).filter((d) => !(o != null && o.includes(d))), ...o],
            right: ((u = r == null ? void 0 : r.right) != null ? u : []).filter((d) => !(o != null && o.includes(d)))
          };
        }
        return {
          left: ((a = r == null ? void 0 : r.left) != null ? a : []).filter((d) => !(o != null && o.includes(d))),
          right: ((i = r == null ? void 0 : r.right) != null ? i : []).filter((d) => !(o != null && o.includes(d)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((o) => {
      var r, a, i;
      return ((r = o.columnDef.enablePinning) != null ? r : !0) && ((a = (i = t.options.enableColumnPinning) != null ? i : t.options.enablePinning) != null ? a : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((s) => s.id), {
        left: o,
        right: r
      } = t.getState().columnPinning, a = n.some((s) => o == null ? void 0 : o.includes(s)), i = n.some((s) => r == null ? void 0 : r.includes(s));
      return a ? "left" : i ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      return r ? (n = (o = t.getState().columnPinning) == null || (o = o[r]) == null ? void 0 : o.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = xe(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, o, r) => {
      const a = [...o ?? [], ...r ?? []];
      return n.filter((i) => !a.includes(i.column.id));
    }, $e(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = xe(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, o) => (o ?? []).map((a) => n.find((i) => i.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "left"
    })), $e(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = xe(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, o) => (o ?? []).map((a) => n.find((i) => i.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "right"
    })), $e(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, o;
      return e.setColumnPinning(t ? ls() : (n = (o = e.initialState) == null ? void 0 : o.columnPinning) != null ? n : ls());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const o = e.getState().columnPinning;
      if (!t) {
        var r, a;
        return !!((r = o.left) != null && r.length || (a = o.right) != null && a.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e.getLeftLeafColumns = xe(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), $e(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = xe(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((o) => t.find((r) => r.id === o)).filter(Boolean), $e(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = xe(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, o) => {
      const r = [...n ?? [], ...o ?? []];
      return t.filter((a) => !r.includes(a.id));
    }, $e(e.options, "debugColumns", "getCenterLeafColumns"));
  }
}, da = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, cs = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), QP = {
  getDefaultColumnDef: () => da,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: cs(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Nt("columnSizing", e),
    onColumnSizingInfoChange: Nt("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, o, r;
      const a = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : da.minSize, (o = a ?? e.columnDef.size) != null ? o : da.size), (r = e.columnDef.maxSize) != null ? r : da.maxSize);
    }, e.getStart = xe((n) => [n, cr(t, n), t.getState().columnSizing], (n, o) => o.slice(0, e.getIndex(n)).reduce((r, a) => r + a.getSize(), 0), $e(t.options, "debugColumns", "getStart")), e.getAfter = xe((n) => [n, cr(t, n), t.getState().columnSizing], (n, o) => o.slice(e.getIndex(n) + 1).reduce((r, a) => r + a.getSize(), 0), $e(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: o,
          ...r
        } = n;
        return r;
      });
    }, e.getCanResize = () => {
      var n, o;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((o = t.options.enableColumnResizing) != null ? o : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const o = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(o);
        else {
          var a;
          n += (a = r.column.getSize()) != null ? a : 0;
        }
      };
      return o(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const o = t.getColumn(e.column.id), r = o == null ? void 0 : o.getCanResize();
      return (a) => {
        if (!o || !r || (a.persist == null || a.persist(), us(a) && a.touches && a.touches.length > 1))
          return;
        const i = e.getSize(), s = e ? e.getLeafHeaders().map((v) => [v.column.id, v.column.getSize()]) : [[o.id, o.getSize()]], l = us(a) ? Math.round(a.touches[0].clientX) : a.clientX, c = {}, u = (v, w) => {
          typeof w == "number" && (t.setColumnSizingInfo((y) => {
            var C, _;
            const S = t.options.columnResizeDirection === "rtl" ? -1 : 1, E = (w - ((C = y == null ? void 0 : y.startOffset) != null ? C : 0)) * S, T = Math.max(E / ((_ = y == null ? void 0 : y.startSize) != null ? _ : 0), -0.999999);
            return y.columnSizingStart.forEach((N) => {
              let [k, F] = N;
              c[k] = Math.round(Math.max(F + F * T, 0) * 100) / 100;
            }), {
              ...y,
              deltaOffset: E,
              deltaPercentage: T
            };
          }), (t.options.columnResizeMode === "onChange" || v === "end") && t.setColumnSizing((y) => ({
            ...y,
            ...c
          })));
        }, d = (v) => u("move", v), f = (v) => {
          u("end", v), t.setColumnSizingInfo((w) => ({
            ...w,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, p = n || typeof document < "u" ? document : null, m = {
          moveHandler: (v) => d(v.clientX),
          upHandler: (v) => {
            p == null || p.removeEventListener("mousemove", m.moveHandler), p == null || p.removeEventListener("mouseup", m.upHandler), f(v.clientX);
          }
        }, g = {
          moveHandler: (v) => (v.cancelable && (v.preventDefault(), v.stopPropagation()), d(v.touches[0].clientX), !1),
          upHandler: (v) => {
            var w;
            p == null || p.removeEventListener("touchmove", g.moveHandler), p == null || p.removeEventListener("touchend", g.upHandler), v.cancelable && (v.preventDefault(), v.stopPropagation()), f((w = v.touches[0]) == null ? void 0 : w.clientX);
          }
        }, h = JP() ? {
          passive: !1
        } : !1;
        us(a) ? (p == null || p.addEventListener("touchmove", g.moveHandler, h), p == null || p.addEventListener("touchend", g.upHandler, h)) : (p == null || p.addEventListener("mousemove", m.moveHandler, h), p == null || p.addEventListener("mouseup", m.upHandler, h)), t.setColumnSizingInfo((v) => ({
          ...v,
          startOffset: l,
          startSize: i,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: o.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
      var n;
      e.setColumnSizing(t ? {} : (n = e.initialState.columnSizing) != null ? n : {});
    }, e.resetHeaderSizeInfo = (t) => {
      var n;
      e.setColumnSizingInfo(t ? cs() : (n = e.initialState.columnSizingInfo) != null ? n : cs());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((o, r) => o + r.getSize(), 0)) != null ? t : 0;
    };
  }
};
let fa = null;
function JP() {
  if (typeof fa == "boolean")
    return fa;
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    }, n = () => {
    };
    window.addEventListener("test", n, t), window.removeEventListener("test", n);
  } catch {
    e = !1;
  }
  return fa = e, fa;
}
function us(e) {
  return e.type === "touchstart";
}
const eR = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Nt("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((o) => ({
        ...o,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, o;
      const r = e.columns;
      return (n = r.length ? r.some((a) => a.getIsVisible()) : (o = t.getState().columnVisibility) == null ? void 0 : o[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, o;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((o = t.options.enableHiding) != null ? o : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = xe(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((o) => o.column.getIsVisible()), $e(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = xe(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, o, r) => [...n, ...o, ...r], $e(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, o) => xe(() => [o(), o().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((a) => a.getIsVisible == null ? void 0 : a.getIsVisible()), $e(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var o;
      e.setColumnVisibility(n ? {} : (o = e.initialState.columnVisibility) != null ? o : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var o;
      n = (o = n) != null ? o : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, a) => ({
        ...r,
        [a.id]: n || !(a.getCanHide != null && a.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var o;
      e.toggleAllColumnsVisible((o = n.target) == null ? void 0 : o.checked);
    };
  }
};
function cr(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const tR = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, nR = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Nt("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const o = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof o == "string" || typeof o == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, o, r, a;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((o = t.options.enableGlobalFilter) != null ? o : !0) && ((r = t.options.enableFilters) != null ? r : !0) && ((a = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? a : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => hn.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: o
      } = e.options;
      return Ei(o) ? o : o === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[o]) != null ? t : hn[o];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, oR = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Nt("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? o : !e.options.manualExpanding) {
        if (n)
          return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (o) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(o), e.toggleAllRowsExpanded = (o) => {
      o ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (o) => {
      var r, a;
      e.setExpanded(o ? {} : (r = (a = e.initialState) == null ? void 0 : a.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((o) => o.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (o) => {
      o.persist == null || o.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const o = e.getState().expanded;
      return o === !0 || Object.values(o).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const o = e.getState().expanded;
      return typeof o == "boolean" ? o === !0 : !(!Object.keys(o).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let o = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((a) => {
        const i = a.split(".");
        o = Math.max(o, i.length);
      }), o;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((o) => {
        var r;
        const a = o === !0 ? !0 : !!(o != null && o[e.id]);
        let i = {};
        if (o === !0 ? Object.keys(t.getRowModel().rowsById).forEach((s) => {
          i[s] = !0;
        }) : i = o, n = (r = n) != null ? r : !a, !a && n)
          return {
            ...i,
            [e.id]: !0
          };
        if (a && !n) {
          const {
            [e.id]: s,
            ...l
          } = i;
          return l;
        }
        return o;
      });
    }, e.getIsExpanded = () => {
      var n;
      const o = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : o === !0 || o != null && o[e.id]);
    }, e.getCanExpand = () => {
      var n, o, r;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((o = t.options.enableExpanding) != null ? o : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, o = e;
      for (; n && o.parentId; )
        o = t.getRow(o.parentId, !0), n = o.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, rl = 0, al = 10, ds = () => ({
  pageIndex: rl,
  pageSize: al
}), rR = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...ds(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Nt("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var o, r;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((o = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? o : !e.options.manualPagination) {
        if (n)
          return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (o) => {
      const r = (a) => Dn(o, a);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (o) => {
      var r;
      e.setPagination(o ? ds() : (r = e.initialState.pagination) != null ? r : ds());
    }, e.setPageIndex = (o) => {
      e.setPagination((r) => {
        let a = Dn(o, r.pageIndex);
        const i = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return a = Math.max(0, Math.min(a, i)), {
          ...r,
          pageIndex: a
        };
      });
    }, e.resetPageIndex = (o) => {
      var r, a;
      e.setPageIndex(o ? rl : (r = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageIndex) != null ? r : rl);
    }, e.resetPageSize = (o) => {
      var r, a;
      e.setPageSize(o ? al : (r = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageSize) != null ? r : al);
    }, e.setPageSize = (o) => {
      e.setPagination((r) => {
        const a = Math.max(1, Dn(o, r.pageSize)), i = r.pageSize * r.pageIndex, s = Math.floor(i / a);
        return {
          ...r,
          pageIndex: s,
          pageSize: a
        };
      });
    }, e.setPageCount = (o) => e.setPagination((r) => {
      var a;
      let i = Dn(o, (a = e.options.pageCount) != null ? a : -1);
      return typeof i == "number" && (i = Math.max(-1, i)), {
        ...r,
        pageCount: i
      };
    }), e.getPageOptions = xe(() => [e.getPageCount()], (o) => {
      let r = [];
      return o && o > 0 && (r = [...new Array(o)].fill(null).map((a, i) => i)), r;
    }, $e(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: o
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : o < r - 1;
    }, e.previousPage = () => e.setPageIndex((o) => o - 1), e.nextPage = () => e.setPageIndex((o) => o + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var o;
      return (o = e.options.pageCount) != null ? o : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var o;
      return (o = e.options.rowCount) != null ? o : e.getPrePaginationRowModel().rows.length;
    };
  }
}, fs = () => ({
  top: [],
  bottom: []
}), aR = {
  getInitialState: (e) => ({
    rowPinning: fs(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Nt("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, o, r) => {
      const a = o ? e.getLeafRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], i = r ? e.getParentRows().map((l) => {
        let {
          id: c
        } = l;
        return c;
      }) : [], s = /* @__PURE__ */ new Set([...i, e.id, ...a]);
      t.setRowPinning((l) => {
        var c, u;
        if (n === "bottom") {
          var d, f;
          return {
            top: ((d = l == null ? void 0 : l.top) != null ? d : []).filter((g) => !(s != null && s.has(g))),
            bottom: [...((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((g) => !(s != null && s.has(g))), ...Array.from(s)]
          };
        }
        if (n === "top") {
          var p, m;
          return {
            top: [...((p = l == null ? void 0 : l.top) != null ? p : []).filter((g) => !(s != null && s.has(g))), ...Array.from(s)],
            bottom: ((m = l == null ? void 0 : l.bottom) != null ? m : []).filter((g) => !(s != null && s.has(g)))
          };
        }
        return {
          top: ((c = l == null ? void 0 : l.top) != null ? c : []).filter((g) => !(s != null && s.has(g))),
          bottom: ((u = l == null ? void 0 : l.bottom) != null ? u : []).filter((g) => !(s != null && s.has(g)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: o,
        enablePinning: r
      } = t.options;
      return typeof o == "function" ? o(e) : (n = o ?? r) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: o,
        bottom: r
      } = t.getState().rowPinning, a = n.some((s) => o == null ? void 0 : o.includes(s)), i = n.some((s) => r == null ? void 0 : r.includes(s));
      return a ? "top" : i ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, o;
      const r = e.getIsPinned();
      if (!r)
        return -1;
      const a = (n = t._getPinnedRows(r)) == null ? void 0 : n.map((i) => {
        let {
          id: s
        } = i;
        return s;
      });
      return (o = a == null ? void 0 : a.indexOf(e.id)) != null ? o : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, o;
      return e.setRowPinning(t ? fs() : (n = (o = e.initialState) == null ? void 0 : o.rowPinning) != null ? n : fs());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const o = e.getState().rowPinning;
      if (!t) {
        var r, a;
        return !!((r = o.top) != null && r.length || (a = o.bottom) != null && a.length);
      }
      return !!((n = o[t]) != null && n.length);
    }, e._getPinnedRows = xe((t) => [e.getRowModel().rows, e.getState().rowPinning[t], t], (t, n, o) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((i) => {
          const s = e.getRow(i, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((i) => t.find((s) => s.id === i))
      )).filter(Boolean).map((i) => ({
        ...i,
        position: o
      }));
    }, $e(e.options, "debugRows", "_getPinnedRows")), e.getTopRows = () => e._getPinnedRows("top"), e.getBottomRows = () => e._getPinnedRows("bottom"), e.getCenterRows = xe(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, o) => {
      const r = /* @__PURE__ */ new Set([...n ?? [], ...o ?? []]);
      return t.filter((a) => !r.has(a.id));
    }, $e(e.options, "debugRows", "getCenterRows"));
  }
}, iR = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Nt("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => {
      var n;
      return e.setRowSelection(t ? {} : (n = e.initialState.rowSelection) != null ? n : {});
    }, e.toggleAllRowsSelected = (t) => {
      e.setRowSelection((n) => {
        t = typeof t < "u" ? t : !e.getIsAllRowsSelected();
        const o = {
          ...n
        }, r = e.getPreGroupedRowModel().flatRows;
        return t ? r.forEach((a) => {
          a.getCanSelect() && (o[a.id] = !0);
        }) : r.forEach((a) => {
          delete o[a.id];
        }), o;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const o = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), r = {
        ...n
      };
      return e.getRowModel().rows.forEach((a) => {
        il(r, a.id, o, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = xe(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? ps(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $e(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = xe(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? ps(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $e(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = xe(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? ps(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, $e(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let o = !!(t.length && Object.keys(n).length);
      return o && t.some((r) => r.getCanSelect() && !n[r.id]) && (o = !1), o;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let o = !!t.length;
      return o && t.some((r) => !n[r.id]) && (o = !1), o;
    }, e.getIsSomeRowsSelected = () => {
      var t;
      const n = Object.keys((t = e.getState().rowSelection) != null ? t : {}).length;
      return n > 0 && n < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : t.filter((n) => n.getCanSelect()).some((n) => n.getIsSelected() || n.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (t) => {
      e.toggleAllRowsSelected(t.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
      e.toggleAllPageRowsSelected(t.target.checked);
    };
  },
  createRow: (e, t) => {
    e.toggleSelected = (n, o) => {
      const r = e.getIsSelected();
      t.setRowSelection((a) => {
        var i;
        if (n = typeof n < "u" ? n : !r, e.getCanSelect() && r === n)
          return a;
        const s = {
          ...a
        };
        return il(s, e.id, n, (i = o == null ? void 0 : o.selectChildren) != null ? i : !0, t), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Bc(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return sl(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return sl(e, n) === "all";
    }, e.getCanSelect = () => {
      var n;
      return typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : (n = t.options.enableRowSelection) != null ? n : !0;
    }, e.getCanSelectSubRows = () => {
      var n;
      return typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : (n = t.options.enableSubRowSelection) != null ? n : !0;
    }, e.getCanMultiSelect = () => {
      var n;
      return typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : (n = t.options.enableMultiRowSelection) != null ? n : !0;
    }, e.getToggleSelectedHandler = () => {
      const n = e.getCanSelect();
      return (o) => {
        var r;
        n && e.toggleSelected((r = o.target) == null ? void 0 : r.checked);
      };
    };
  }
}, il = (e, t, n, o, r) => {
  var a;
  const i = r.getRow(t, !0);
  n ? (i.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), i.getCanSelect() && (e[t] = !0)) : delete e[t], o && (a = i.subRows) != null && a.length && i.getCanSelectSubRows() && i.subRows.forEach((s) => il(e, s.id, n, o, r));
};
function ps(e, t) {
  const n = e.getState().rowSelection, o = [], r = {}, a = function(i, s) {
    return i.map((l) => {
      var c;
      const u = Bc(l, n);
      if (u && (o.push(l), r[l.id] = l), (c = l.subRows) != null && c.length && (l = {
        ...l,
        subRows: a(l.subRows)
      }), u)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: a(t.rows),
    flatRows: o,
    rowsById: r
  };
}
function Bc(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function sl(e, t, n) {
  var o;
  if (!((o = e.subRows) != null && o.length))
    return !1;
  let r = !0, a = !1;
  return e.subRows.forEach((i) => {
    if (!(a && !r) && (i.getCanSelect() && (Bc(i, t) ? a = !0 : r = !1), i.subRows && i.subRows.length)) {
      const s = sl(i, t);
      s === "all" ? a = !0 : (s === "some" && (a = !0), r = !1);
    }
  }), r ? "all" : a ? "some" : !1;
}
const ll = /([0-9]+)/gm, sR = (e, t, n) => fv(kn(e.getValue(n)).toLowerCase(), kn(t.getValue(n)).toLowerCase()), lR = (e, t, n) => fv(kn(e.getValue(n)), kn(t.getValue(n))), cR = (e, t, n) => Gc(kn(e.getValue(n)).toLowerCase(), kn(t.getValue(n)).toLowerCase()), uR = (e, t, n) => Gc(kn(e.getValue(n)), kn(t.getValue(n))), dR = (e, t, n) => {
  const o = e.getValue(n), r = t.getValue(n);
  return o > r ? 1 : o < r ? -1 : 0;
}, fR = (e, t, n) => Gc(e.getValue(n), t.getValue(n));
function Gc(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function kn(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function fv(e, t) {
  const n = e.split(ll).filter(Boolean), o = t.split(ll).filter(Boolean);
  for (; n.length && o.length; ) {
    const r = n.shift(), a = o.shift(), i = parseInt(r, 10), s = parseInt(a, 10), l = [i, s].sort();
    if (isNaN(l[0])) {
      if (r > a)
        return 1;
      if (a > r)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(i) ? -1 : 1;
    if (i > s)
      return 1;
    if (s > i)
      return -1;
  }
  return n.length - o.length;
}
const or = {
  alphanumeric: sR,
  alphanumericCaseSensitive: lR,
  text: cR,
  textCaseSensitive: uR,
  datetime: dR,
  basic: fR
}, pR = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Nt("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let o = !1;
      for (const r of n) {
        const a = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(a) === "[object Date]")
          return or.datetime;
        if (typeof a == "string" && (o = !0, a.split(ll).length > 1))
          return or.alphanumeric;
      }
      return o ? or.text : or.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, o;
      if (!e)
        throw new Error();
      return Ei(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (o = t.options.sortingFns) == null ? void 0 : o[e.columnDef.sortingFn]) != null ? n : or[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, o) => {
      const r = e.getNextSortingOrder(), a = typeof n < "u" && n !== null;
      t.setSorting((i) => {
        const s = i == null ? void 0 : i.find((p) => p.id === e.id), l = i == null ? void 0 : i.findIndex((p) => p.id === e.id);
        let c = [], u, d = a ? n : r === "desc";
        if (i != null && i.length && e.getCanMultiSort() && o ? s ? u = "toggle" : u = "add" : i != null && i.length && l !== i.length - 1 ? u = "replace" : s ? u = "toggle" : u = "replace", u === "toggle" && (a || r || (u = "remove")), u === "add") {
          var f;
          c = [...i, {
            id: e.id,
            desc: d
          }], c.splice(0, c.length - ((f = t.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else
          u === "toggle" ? c = i.map((p) => p.id === e.id ? {
            ...p,
            desc: d
          } : p) : u === "remove" ? c = i.filter((p) => p.id !== e.id) : c = [{
            id: e.id,
            desc: d
          }];
        return c;
      });
    }, e.getFirstSortDir = () => {
      var n, o;
      return ((n = (o = e.columnDef.sortDescFirst) != null ? o : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var o, r;
      const a = e.getFirstSortDir(), i = e.getIsSorted();
      return i ? i !== a && ((o = t.options.enableSortingRemoval) == null || o) && // If enableSortRemove, enable in general
      (!(n && (r = t.options.enableMultiRemove) != null) || r) ? !1 : i === "desc" ? "asc" : "desc" : a;
    }, e.getCanSort = () => {
      var n, o;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((o = t.options.enableSorting) != null ? o : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, o;
      return (n = (o = e.columnDef.enableMultiSort) != null ? o : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const o = (n = t.getState().sorting) == null ? void 0 : n.find((r) => r.id === e.id);
      return o ? o.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, o;
      return (n = (o = t.getState().sorting) == null ? void 0 : o.findIndex((r) => r.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((o) => o.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (o) => {
        n && (o.persist == null || o.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(o) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, o;
      e.setSorting(t ? [] : (n = (o = e.initialState) == null ? void 0 : o.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, mR = [
  kP,
  eR,
  XP,
  ZP,
  LP,
  FP,
  tR,
  //depends on ColumnFaceting
  nR,
  //depends on ColumnFiltering
  pR,
  KP,
  //depends on RowSorting
  oR,
  rR,
  aR,
  iR,
  QP
];
function gR(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const o = [...mR, ...(t = e._features) != null ? t : []];
  let r = {
    _features: o
  };
  const a = r._features.reduce((f, p) => Object.assign(f, p.getDefaultOptions == null ? void 0 : p.getDefaultOptions(r)), {}), i = (f) => r.options.mergeOptions ? r.options.mergeOptions(a, f) : {
    ...a,
    ...f
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  r._features.forEach((f) => {
    var p;
    l = (p = f.getInitialState == null ? void 0 : f.getInitialState(l)) != null ? p : l;
  });
  const c = [];
  let u = !1;
  const d = {
    _features: o,
    options: {
      ...a,
      ...e
    },
    initialState: l,
    _queue: (f) => {
      c.push(f), u || (u = !0, Promise.resolve().then(() => {
        for (; c.length; )
          c.shift()();
        u = !1;
      }).catch((p) => setTimeout(() => {
        throw p;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (f) => {
      const p = Dn(f, r.options);
      r.options = i(p);
    },
    getState: () => r.options.state,
    setState: (f) => {
      r.options.onStateChange == null || r.options.onStateChange(f);
    },
    _getRowId: (f, p, m) => {
      var g;
      return (g = r.options.getRowId == null ? void 0 : r.options.getRowId(f, p, m)) != null ? g : `${m ? [m.id, p].join(".") : p}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, p) => {
      let m = (p ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
      if (!m && (m = r.getCoreRowModel().rowsById[f], !m))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return m;
    },
    _getDefaultColumnDef: xe(() => [r.options.defaultColumn], (f) => {
      var p;
      return f = (p = f) != null ? p : {}, {
        header: (m) => {
          const g = m.header.column.columnDef;
          return g.accessorKey ? g.accessorKey : g.accessorFn ? g.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (m) => {
          var g, h;
          return (g = (h = m.renderValue()) == null || h.toString == null ? void 0 : h.toString()) != null ? g : null;
        },
        ...r._features.reduce((m, g) => Object.assign(m, g.getDefaultColumnDef == null ? void 0 : g.getDefaultColumnDef()), {}),
        ...f
      };
    }, $e(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: xe(() => [r._getColumnDefs()], (f) => {
      const p = function(m, g, h) {
        return h === void 0 && (h = 0), m.map((v) => {
          const w = OP(r, v, h, g), y = v;
          return w.columns = y.columns ? p(y.columns, w, h + 1) : [], w;
        });
      };
      return p(f);
    }, $e(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: xe(() => [r.getAllColumns()], (f) => f.flatMap((p) => p.getFlatColumns()), $e(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: xe(() => [r.getAllFlatColumns()], (f) => f.reduce((p, m) => (p[m.id] = m, p), {}), $e(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: xe(() => [r.getAllColumns(), r._getOrderColumnsFn()], (f, p) => {
      let m = f.flatMap((g) => g.getLeafColumns());
      return p(m);
    }, $e(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const p = r._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !p && console.error(`[Table] Column with id '${f}' does not exist.`), p;
    }
  };
  Object.assign(r, d);
  for (let f = 0; f < r._features.length; f++) {
    const p = r._features[f];
    p == null || p.createTable == null || p.createTable(r);
  }
  return r;
}
function hR() {
  return (e) => xe(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, o = function(r, a, i) {
      a === void 0 && (a = 0);
      const s = [];
      for (let c = 0; c < r.length; c++) {
        const u = Vc(e, e._getRowId(r[c], c, i), r[c], c, a, void 0, i == null ? void 0 : i.id);
        if (n.flatRows.push(u), n.rowsById[u.id] = u, s.push(u), e.options.getSubRows) {
          var l;
          u.originalSubRows = e.options.getSubRows(r[c], c), (l = u.originalSubRows) != null && l.length && (u.subRows = o(u.originalSubRows, a + 1, u));
        }
      }
      return s;
    };
    return n.rows = o(t), n;
  }, $e(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function vR(e) {
  const t = [], n = (o) => {
    var r;
    t.push(o), (r = o.subRows) != null && r.length && o.getIsExpanded() && o.subRows.forEach(n);
  };
  return e.rows.forEach(n), {
    rows: t,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function pv(e, t, n) {
  return n.options.filterFromLeafRows ? bR(e, t, n) : wR(e, t, n);
}
function bR(e, t, n) {
  var o;
  const r = [], a = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, s = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      var d;
      let p = l[f];
      const m = Vc(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
      if (m.columnFilters = p.columnFilters, (d = p.subRows) != null && d.length && c < i) {
        if (m.subRows = s(p.subRows, c + 1), p = m, t(p) && !m.subRows.length) {
          u.push(p), a[p.id] = p, r.push(p);
          continue;
        }
        if (t(p) || m.subRows.length) {
          u.push(p), a[p.id] = p, r.push(p);
          continue;
        }
      } else
        p = m, t(p) && (u.push(p), a[p.id] = p, r.push(p));
    }
    return u;
  };
  return {
    rows: s(e),
    flatRows: r,
    rowsById: a
  };
}
function wR(e, t, n) {
  var o;
  const r = [], a = {}, i = (o = n.options.maxLeafRowFilterDepth) != null ? o : 100, s = function(l, c) {
    c === void 0 && (c = 0);
    const u = [];
    for (let f = 0; f < l.length; f++) {
      let p = l[f];
      if (t(p)) {
        var d;
        if ((d = p.subRows) != null && d.length && c < i) {
          const g = Vc(n, p.id, p.original, p.index, p.depth, void 0, p.parentId);
          g.subRows = s(p.subRows, c + 1), p = g;
        }
        u.push(p), r.push(p), a[p.id] = p;
      }
    }
    return u;
  };
  return {
    rows: s(e),
    flatRows: r,
    rowsById: a
  };
}
function yR() {
  return (e, t) => xe(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter, e.getFilteredRowModel()], (n, o, r) => {
    if (!n.rows.length || !(o != null && o.length) && !r)
      return n;
    const a = [...o.map((s) => s.id).filter((s) => s !== t), r ? "__global__" : void 0].filter(Boolean), i = (s) => {
      for (let l = 0; l < a.length; l++)
        if (s.columnFilters[a[l]] === !1)
          return !1;
      return !0;
    };
    return pv(n.rows, i, e);
  }, $e(e.options, "debugTable", "getFacetedRowModel"));
}
function xR() {
  return (e, t) => xe(() => {
    var n;
    return [(n = e.getColumn(t)) == null ? void 0 : n.getFacetedRowModel()];
  }, (n) => {
    if (!n)
      return /* @__PURE__ */ new Map();
    let o = /* @__PURE__ */ new Map();
    for (let a = 0; a < n.flatRows.length; a++) {
      const i = n.flatRows[a].getUniqueValues(t);
      for (let s = 0; s < i.length; s++) {
        const l = i[s];
        if (o.has(l)) {
          var r;
          o.set(l, ((r = o.get(l)) != null ? r : 0) + 1);
        } else
          o.set(l, 1);
      }
    }
    return o;
  }, $e(e.options, "debugTable", `getFacetedUniqueValues_${t}`));
}
function $R() {
  return (e) => xe(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, o) => {
    if (!t.rows.length || !(n != null && n.length) && !o) {
      for (let f = 0; f < t.flatRows.length; f++)
        t.flatRows[f].columnFilters = {}, t.flatRows[f].columnFiltersMeta = {};
      return t;
    }
    const r = [], a = [];
    (n ?? []).forEach((f) => {
      var p;
      const m = e.getColumn(f.id);
      if (!m)
        return;
      const g = m.getFilterFn();
      if (!g) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${m.id}.`);
        return;
      }
      r.push({
        id: f.id,
        filterFn: g,
        resolvedValue: (p = g.resolveFilterValue == null ? void 0 : g.resolveFilterValue(f.value)) != null ? p : f.value
      });
    });
    const i = n.map((f) => f.id), s = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((f) => f.getCanGlobalFilter());
    o && s && l.length && (i.push("__global__"), l.forEach((f) => {
      var p;
      a.push({
        id: f.id,
        filterFn: s,
        resolvedValue: (p = s.resolveFilterValue == null ? void 0 : s.resolveFilterValue(o)) != null ? p : o
      });
    }));
    let c, u;
    for (let f = 0; f < t.flatRows.length; f++) {
      const p = t.flatRows[f];
      if (p.columnFilters = {}, r.length)
        for (let m = 0; m < r.length; m++) {
          c = r[m];
          const g = c.id;
          p.columnFilters[g] = c.filterFn(p, g, c.resolvedValue, (h) => {
            p.columnFiltersMeta[g] = h;
          });
        }
      if (a.length) {
        for (let m = 0; m < a.length; m++) {
          u = a[m];
          const g = u.id;
          if (u.filterFn(p, g, u.resolvedValue, (h) => {
            p.columnFiltersMeta[g] = h;
          })) {
            p.columnFilters.__global__ = !0;
            break;
          }
        }
        p.columnFilters.__global__ !== !0 && (p.columnFilters.__global__ = !1);
      }
    }
    const d = (f) => {
      for (let p = 0; p < i.length; p++)
        if (f.columnFilters[i[p]] === !1)
          return !1;
      return !0;
    };
    return pv(t.rows, d, e);
  }, $e(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function CR(e) {
  return (t) => xe(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, o) => {
    if (!o.rows.length)
      return o;
    const {
      pageSize: r,
      pageIndex: a
    } = n;
    let {
      rows: i,
      flatRows: s,
      rowsById: l
    } = o;
    const c = r * a, u = c + r;
    i = i.slice(c, u);
    let d;
    t.options.paginateExpandedRows ? d = {
      rows: i,
      flatRows: s,
      rowsById: l
    } : d = vR({
      rows: i,
      flatRows: s,
      rowsById: l
    }), d.flatRows = [];
    const f = (p) => {
      d.flatRows.push(p), p.subRows.length && p.subRows.forEach(f);
    };
    return d.rows.forEach(f), d;
  }, $e(t.options, "debugTable", "getPaginationRowModel"));
}
function SR() {
  return (e) => xe(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const o = e.getState().sorting, r = [], a = o.filter((l) => {
      var c;
      return (c = e.getColumn(l.id)) == null ? void 0 : c.getCanSort();
    }), i = {};
    a.forEach((l) => {
      const c = e.getColumn(l.id);
      c && (i[l.id] = {
        sortUndefined: c.columnDef.sortUndefined,
        invertSorting: c.columnDef.invertSorting,
        sortingFn: c.getSortingFn()
      });
    });
    const s = (l) => {
      const c = l.map((u) => ({
        ...u
      }));
      return c.sort((u, d) => {
        for (let p = 0; p < a.length; p += 1) {
          var f;
          const m = a[p], g = i[m.id], h = g.sortUndefined, v = (f = m == null ? void 0 : m.desc) != null ? f : !1;
          let w = 0;
          if (h) {
            const y = u.getValue(m.id), C = d.getValue(m.id), _ = y === void 0, S = C === void 0;
            if (_ || S) {
              if (h === "first")
                return _ ? -1 : 1;
              if (h === "last")
                return _ ? 1 : -1;
              w = _ && S ? 0 : _ ? h : -h;
            }
          }
          if (w === 0 && (w = g.sortingFn(u, d, m.id)), w !== 0)
            return v && (w *= -1), g.invertSorting && (w *= -1), w;
        }
        return u.index - d.index;
      }), c.forEach((u) => {
        var d;
        r.push(u), (d = u.subRows) != null && d.length && (u.subRows = s(u.subRows));
      }), c;
    };
    return {
      rows: s(n.rows),
      flatRows: r,
      rowsById: n.rowsById
    };
  }, $e(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function zd(e, t) {
  return e ? _R(e) ? /* @__PURE__ */ $.createElement(e, t) : e : null;
}
function _R(e) {
  return ER(e) || typeof e == "function" || PR(e);
}
function ER(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function PR(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function RR(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = $.useState(() => ({
    current: gR(t)
  })), [o, r] = $.useState(() => n.current.initialState);
  return n.current.setOptions((a) => ({
    ...a,
    ...e,
    state: {
      ...o,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (i) => {
      r(i), e.onStateChange == null || e.onStateChange(i);
    }
  })), n.current;
}
function Pi(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, a;
  for (a = 0; a < o.length; a++)
    r = o[a], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
var MR = ["color"], NR = /* @__PURE__ */ I(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Pi(e, MR);
  return x("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), x("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), DR = ["color"], TR = /* @__PURE__ */ I(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Pi(e, DR);
  return x("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), x("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), AR = ["color"], IR = /* @__PURE__ */ I(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Pi(e, AR);
  return x("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), x("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), OR = ["color"], kR = /* @__PURE__ */ I(function(e, t) {
  var n = e.color, o = n === void 0 ? "currentColor" : n, r = Pi(e, OR);
  return x("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, r, {
    ref: t
  }), x("path", {
    d: "M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z",
    fill: o,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function LR({
  table: e
}) {
  const t = e.getState().pagination, n = e.getCoreRowModel().rows.length, o = e.getState().pagination.pageIndex, r = e.getPageCount(), a = (i) => {
    const s = Number(i);
    s >= 0 && s < r && e.setPageIndex(s);
  };
  return /* @__PURE__ */ Q("div", { className: "flex items-center justify-between px-2 border-t border-t-[#E8E9EB] ", children: [
    /* @__PURE__ */ Q(
      wd,
      {
        value: `${e.getState().pagination.pageSize}`,
        onValueChange: (i) => {
          e.setPageSize(Number(i));
        },
        children: [
          /* @__PURE__ */ b(Ys, { className: " !shadow-none border-none w-14", children: /* @__PURE__ */ b(yd, { placeholder: e.getState().pagination.pageSize }) }),
          /* @__PURE__ */ b(Ks, { side: "top", children: [10, 20, 30, 40, 50].map((i) => /* @__PURE__ */ b(qs, { value: `${i}`, children: i }, i)) })
        ]
      }
    ),
    /* @__PURE__ */ Q("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      t.pageIndex * t.pageSize + 1,
      " –",
      " ",
      Math.min((t.pageIndex + 1) * t.pageSize, n),
      " of",
      " ",
      n,
      " items"
    ] }),
    /* @__PURE__ */ Q("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ b("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ Q(
        wd,
        {
          value: `${o}`,
          onValueChange: a,
          children: [
            /* @__PURE__ */ b(Ys, { className: " !shadow-none border-none w-14  ", children: /* @__PURE__ */ b(yd, {}) }),
            /* @__PURE__ */ b(Ks, { side: "top", children: Array.from({ length: r }, (i, s) => /* @__PURE__ */ Q(qs, { value: `${s}`, children: [
              s + 1,
              " "
            ] }, s)) })
          ]
        }
      ) }),
      /* @__PURE__ */ Q("div", { className: "flex  items-center justify-center text-sm !ml-0", children: [
        "of ",
        r,
        " pages"
      ] }),
      /* @__PURE__ */ Q("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ Q(
          Pt,
          {
            variant: "secondary",
            className: "h-8 w-8 p-0 focus:bg-transparent",
            onClick: () => e.previousPage(),
            disabled: !e.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ b("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ b(NR, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ Q(
          Pt,
          {
            variant: "secondary",
            className: "h-8 w-8 p-0 focus:bg-transparent",
            onClick: () => e.nextPage(),
            disabled: !e.getCanNextPage(),
            children: [
              /* @__PURE__ */ b("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ b(TR, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function FR({
  table: e
}) {
  return /* @__PURE__ */ Q(Wm, { children: [
    /* @__PURE__ */ b(Am, { asChild: !0, children: /* @__PURE__ */ Q(
      Pt,
      {
        variant: "outline",
        size: "sm",
        className: "ml-auto hidden h-8 lg:flex",
        children: [
          /* @__PURE__ */ b(kR, { className: "mr-2 h-4 w-4" }),
          "View"
        ]
      }
    ) }),
    /* @__PURE__ */ Q(hc, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ b(Km, { children: "Toggle columns" }),
      /* @__PURE__ */ b(qm, {}),
      e.getAllColumns().filter(
        (t) => typeof t.accessorFn < "u" && t.getCanHide()
      ).map((t) => /* @__PURE__ */ b(
        Ym,
        {
          className: "capitalize",
          checked: t.getIsVisible(),
          onCheckedChange: (n) => t.toggleVisibility(!!n),
          children: t.id
        },
        t.id
      ))
    ] })
  ] });
}
function zR({
  table: e
}) {
  var n;
  const t = e.getState().columnFilters.length > 0;
  return /* @__PURE__ */ Q("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ Q("div", { className: "flex flex-1 items-center space-x-2", children: [
      /* @__PURE__ */ b(
        fl,
        {
          placeholder: "Filter classes...",
          value: ((n = e.getColumn("className")) == null ? void 0 : n.getFilterValue()) ?? "",
          onChange: (o) => {
            var r;
            return (r = e.getColumn("className")) == null ? void 0 : r.setFilterValue(o.target.value);
          },
          className: "h-8 w-[150px] lg:w-[250px]"
        }
      ),
      t && /* @__PURE__ */ Q(
        Pt,
        {
          variant: "secondary",
          onClick: () => e.resetColumnFilters(),
          className: "h-8 px-2 lg:px-3",
          children: [
            "Reset",
            /* @__PURE__ */ b(IR, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ b(FR, { table: e })
  ] });
}
function rN({
  columns: e,
  data: t,
  enableFiltering: n = !1,
  enablePagination: o = !1,
  enableRowSelection: r = !1,
  enableSorting: a = !1,
  enableColumnVisibility: i = !1
}) {
  var h;
  const [s, l] = $.useState({}), [c, u] = $.useState({}), [d, f] = $.useState(
    []
  ), [p, m] = $.useState([]), g = RR({
    data: t,
    columns: e,
    state: {
      sorting: p,
      columnVisibility: c,
      rowSelection: s,
      columnFilters: d
    },
    onRowSelectionChange: r ? l : void 0,
    onSortingChange: a ? m : void 0,
    onColumnFiltersChange: n ? f : void 0,
    onColumnVisibilityChange: i ? u : void 0,
    getCoreRowModel: hR(),
    getFilteredRowModel: n ? $R() : void 0,
    getPaginationRowModel: o ? CR() : void 0,
    getSortedRowModel: a ? SR() : void 0,
    getFacetedRowModel: n ? yR() : void 0,
    getFacetedUniqueValues: n ? xR() : void 0,
    manualPagination: !o,
    manualSorting: !a
  });
  return /* @__PURE__ */ Q("div", { className: "space-y-4", children: [
    n && /* @__PURE__ */ b(zR, { table: g }),
    /* @__PURE__ */ b("div", { className: "rounded-md  ", children: /* @__PURE__ */ Q(Ah, { children: [
      /* @__PURE__ */ b(Ih, { children: g.getHeaderGroups().map((v) => /* @__PURE__ */ b(Sa, { className: " border-b-[#E8E9EB] ", children: v.headers.map((w) => /* @__PURE__ */ b(kh, { colSpan: w.colSpan, children: w.isPlaceholder ? null : zd(
        w.column.columnDef.header,
        w.getContext()
      ) }, w.id)) }, v.id)) }),
      /* @__PURE__ */ b(Oh, { children: (h = g.getRowModel().rows) != null && h.length ? g.getRowModel().rows.map((v) => /* @__PURE__ */ b(
        Sa,
        {
          "data-state": r && v.getIsSelected() ? "selected" : void 0,
          children: v.getVisibleCells().map((w) => /* @__PURE__ */ b(tl, { children: zd(
            w.column.columnDef.cell,
            w.getContext()
          ) }, w.id))
        },
        v.id
      )) : /* @__PURE__ */ b(Sa, { children: /* @__PURE__ */ b(
        tl,
        {
          colSpan: e.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    o && /* @__PURE__ */ b(LR, { table: g })
  ] });
}
const aN = ({ form: e, templateFields: t, parentFocusKey: n, childFocusKey: o }) => {
  const { register: r, control: a, watch: i, setValue: s } = e, [l, c] = re(!1), [u, d] = re({}), f = (S) => {
    d((E) => ({
      ...E,
      child: S
    }));
  }, p = (S) => {
    c(!0), d({
      parent: S
    });
  };
  le(() => {
    n && p(n), o && f(o);
  }, [n, o]);
  const m = (S, E, T, N) => {
    S.forEach((k) => {
      s(
        `${E}.${T}.${k.key}`,
        N ? k.id : ""
      );
    });
  }, g = (S, E, T) => /* @__PURE__ */ b(
    ba,
    {
      control: a,
      name: `${S}.${E}.${T.key}`,
      render: ({ field: N }) => /* @__PURE__ */ Q(wa, { className: "flex items-center pr-4 py-3 first:pt-[16px] last:pb-0", children: [
        /* @__PURE__ */ b(xa, { children: /* @__PURE__ */ b(
          Xn,
          {
            checked: i(`${S}.${E}.${T.key}`) === (T == null ? void 0 : T.id),
            onCheckedChange: (k) => N.onChange(k ? T.id : ""),
            className: "h-4 w-4 rounded-[3px]",
            iconClassName: "!h-4 !w-4",
            "data-cy": "filter-sub-child-checkbox"
          }
        ) }),
        /* @__PURE__ */ b(
          ya,
          {
            className: `!mt-0 !mb-0 text-[14px] font-normal ${i(`${S}.${E}.${T.key}`) === (T == null ? void 0 : T.id) ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
            children: T.label
          }
        )
      ] })
    },
    T.key
  ), h = (S, E) => {
    var T, N, k;
    if (((T = E.children) == null ? void 0 : T.length) > 0) {
      let F;
      const z = (N = E == null ? void 0 : E.children) == null ? void 0 : N.every(
        (A) => {
          var V;
          return ((V = i(`${S}.${E.key}.${A.key}`)) == null ? void 0 : V.length) > 0;
        }
      ), ae = (k = E == null ? void 0 : E.children) == null ? void 0 : k.every(
        (A) => !i(`${S}.${E.key}.${A.key}`)
      );
      return z ? F = !0 : ae ? F = !1 : F = "indeterminate", /* @__PURE__ */ b(
        jb,
        {
          collapsible: !0,
          type: "single",
          className: "pl-8 pr-4 py-3 hover:bg-[#F7F8FA]",
          value: (u == null ? void 0 : u.child) === E.key ? E.key : null,
          onValueChange: (A) => {
            A === u.child ? d((V) => ({
              ...V,
              child: null
            })) : d((V) => ({
              ...V,
              child: A
            }));
          },
          "data-cy": "filter-accordion",
          children: /* @__PURE__ */ Q(pf, { value: E == null ? void 0 : E.key, className: "border-none", children: [
            /* @__PURE__ */ b(mf, { className: "border-none hover:no-underline pt-0 justify-end flex-row-reverse ml-[-16px] pb-0", children: /* @__PURE__ */ b(
              ba,
              {
                control: a,
                name: `${S}.${E.key}`,
                render: () => /* @__PURE__ */ Q(wa, { className: "flex items-center pl-2", children: [
                  /* @__PURE__ */ b(xa, { children: /* @__PURE__ */ b(
                    Xn,
                    {
                      onClick: (A) => A.stopPropagation(),
                      checked: F,
                      onCheckedChange: (A) => m(
                        E.children,
                        S,
                        E.key,
                        A
                      ),
                      className: "h-4 w-4 rounded-[3px]",
                      iconClassName: "!h-4 !w-4",
                      "data-cy": "filter-parent-checkbox"
                    }
                  ) }),
                  /* @__PURE__ */ b(
                    ya,
                    {
                      className: `!mt-0 !mb-0 text-[14px] font-normal ${F ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
                      children: E.label
                    }
                  )
                ] })
              }
            ) }),
            /* @__PURE__ */ b(gf, { className: "pb-0", children: /* @__PURE__ */ b("div", { className: "pl-2", "data-cy": "filter-children", children: E.children.map(
              (A) => g(S, E.key, A)
            ) }) })
          ] })
        },
        E.key
      );
    }
    return /* @__PURE__ */ b("div", { className: "pl-8 pr-4 py-3 hover:bg-[#F7F8FA]", children: /* @__PURE__ */ b(
      ba,
      {
        control: a,
        name: `${S}.${E.key}`,
        render: ({ field: F }) => /* @__PURE__ */ Q(wa, { className: "flex items-center pl-2", children: [
          /* @__PURE__ */ b(xa, { children: /* @__PURE__ */ b(
            Xn,
            {
              checked: !!F.value,
              onCheckedChange: (z) => F.onChange(z ? E.id : ""),
              className: "h-4 w-4 rounded-[3px]",
              iconClassName: "!h-4 !w-4",
              "data-cy": "filter-child-checkbox"
            }
          ) }),
          /* @__PURE__ */ b(
            ya,
            {
              className: `!mt-0 !mb-0 text-[14px] font-normal ${F.value ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
              children: E.label
            }
          )
        ] })
      }
    ) }, E.key);
  }, v = i(), w = (S) => {
    var E;
    return typeof S == "object" && S !== null ? (E = Object == null ? void 0 : Object.entries(S)) == null ? void 0 : E.some(([T, N]) => T === "search" ? !1 : w(N)) : !!S;
  }, y = w(v), C = (S) => {
    var E;
    return typeof S == "object" && S !== null ? (E = Object == null ? void 0 : Object.keys(S)) == null ? void 0 : E.some((N) => {
      const k = S[N];
      return k != null && k !== "";
    }) : S != null && S !== "";
  }, _ = (S) => {
    var E;
    return (E = Object.keys(S)) == null ? void 0 : E.some((T) => {
      const N = S[T];
      return C(N);
    });
  };
  return /* @__PURE__ */ Q(
    Wm,
    {
      open: l,
      onOpenChange: () => c((S) => !S),
      "data-cy": "filter-menu",
      children: [
        /* @__PURE__ */ Q(Q5, { className: "flex items-center hover:bg-[#F7F8FA] hover:rounded-lg focus-visible:outline-none max-h-[32px] px-[12px] py-[8px] gap-x-[12px] min-w-[94px]", "data-cy": "filter-button", children: [
          /* @__PURE__ */ b(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ b(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H10.6666C11.0348 10.6667 11.3333 10.9651 11.3333 11.3333C11.3333 11.7015 11.0348 12 10.6666 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z",
                  fill: y ? "#0073E6" : "#9B9EA3"
                }
              )
            }
          ),
          /* @__PURE__ */ b(
            "button",
            {
              className: `${y ? "text-[#0073E6]" : "text-[#656870]"} text-[12px] font-semibold`,
              onClick: () => c(!0),
              children: "FILTER"
            }
          )
        ] }),
        /* @__PURE__ */ Q(
          hc,
          {
            align: "start",
            className: "w-[220px] border rounded-lg border-solid border-[#E8E9EB] px-0 py-0",
            "data-cy": "filter-menu-content",
            children: [
              t == null ? void 0 : t.map((S) => {
                var N, k;
                const E = v && v[S == null ? void 0 : S.key], T = E && _(E);
                return /* @__PURE__ */ Q(
                  J5,
                  {
                    open: (u == null ? void 0 : u.parent) === (S == null ? void 0 : S.key),
                    "data-cy": "filter-sub-menu",
                    children: [
                      /* @__PURE__ */ b(
                        jm,
                        {
                          className: `text-[#000] text-[14px] h-[44px] hover:bg-[#F7F8FA] py-3 px-4 justify-between hover:cursor-pointer ${T ? "font-semibold" : "font-normal"}`,
                          onMouseEnter: () => d({ parent: S.key }),
                          children: S.label
                        }
                      ),
                      /* @__PURE__ */ Q(
                        Um,
                        {
                          className: "!pointer-events-auto w-[360px] p-0 border rounded-lg border-solid border-[#E8E9EB]",
                          "data-cy": "filter-sub-menu-content",
                          children: [
                            (S == null ? void 0 : S.showSearch) && /* @__PURE__ */ Q("div", { className: "p-[8px] border-b-[#E8E9EB] border-b border-solid flex items-center", children: [
                              /* @__PURE__ */ Q(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  className: "absolute left-[20px] top-[18px]",
                                  children: [
                                    /* @__PURE__ */ b("g", { clipPath: "url(#clip0_1572_2711)", children: /* @__PURE__ */ b(
                                      "path",
                                      {
                                        d: "M12.8967 11.0079L14.9705 13.0817C15.4912 13.6024 15.4912 14.4466 14.9705 14.9673C14.4498 15.488 13.6056 15.488 13.0849 14.9673L11.0117 12.8942C9.95743 13.593 8.69289 14 7.33329 14C3.65139 14 0.666626 11.0152 0.666626 7.33329C0.666626 3.65139 3.65139 0.666626 7.33329 0.666626C11.0152 0.666626 14 3.65139 14 7.33329C14 8.69125 13.594 9.95437 12.8967 11.0079ZM12 7.33329C12 4.75596 9.91062 2.66663 7.33329 2.66663C4.75596 2.66663 2.66663 4.75596 2.66663 7.33329C2.66663 9.91062 4.75596 12 7.33329 12C9.91062 12 12 9.91062 12 7.33329Z",
                                        fill: "#9B9EA3"
                                      }
                                    ) }),
                                    /* @__PURE__ */ b("defs", { children: /* @__PURE__ */ b("clipPath", { id: "clip0_1572_2711", children: /* @__PURE__ */ b("rect", { width: "16", height: "16", fill: "white" }) }) })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ b(
                                fl,
                                {
                                  type: "text",
                                  placeholder: "Search...",
                                  value: i(`${S.key}.search`),
                                  ...r(`${S.key}.search`),
                                  className: "w-full h-[32px] border-none rounded bg-[#F7F8FA] pl-[2rem] placeholder:text-[#656870] placeholder:text-[12px]",
                                  "data-cy": "filter-search-input"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ b("div", { className: "max-h-[360px] overflow-y-auto overflow-x-hidden", children: (k = (N = S.children) == null ? void 0 : N.filter(
                              (F) => {
                                var z;
                                return F.label.toLowerCase().includes(
                                  ((z = i(`${S.key}.search`)) == null ? void 0 : z.toLowerCase()) || ""
                                );
                              }
                            )) == null ? void 0 : k.map((F) => h(S.key, F)) }),
                            /* @__PURE__ */ Q(
                              Pt,
                              {
                                variant: "secondary",
                                onClick: () => {
                                  s(`${S.key}.search`, null), S.children.forEach((F) => {
                                    s(`${S.key}.${F.key}`, null), F.children && F.children.forEach((z) => {
                                      s(
                                        `${S.key}.${F.key}.${z.key}`,
                                        null
                                      );
                                    });
                                  });
                                },
                                className: "w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]",
                                "data-cy": "clear-filter-button",
                                children: [
                                  /* @__PURE__ */ Q(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "16",
                                      height: "16",
                                      viewBox: "0 0 16 16",
                                      fill: "none",
                                      children: [
                                        /* @__PURE__ */ b(
                                          "path",
                                          {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z",
                                            fill: "currentColor"
                                          }
                                        ),
                                        /* @__PURE__ */ b(
                                          "path",
                                          {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H9.33329C9.70148 10.6667 9.99996 10.9651 9.99996 11.3333C9.99996 11.7015 9.70148 12 9.33329 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z",
                                            fill: "currentColor"
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  "Clear Filters"
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  },
                  S.key
                );
              }),
              /* @__PURE__ */ Q(
                Pt,
                {
                  variant: "secondary",
                  onClick: () => {
                    var S;
                    (S = Object.keys(v)) == null || S.map((E) => {
                      var N;
                      const T = v[E] || {};
                      (N = Object.keys(T)) == null || N.map(
                        (k) => s(`${E}.${k}`, null)
                      );
                    });
                  },
                  className: "w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]",
                  "data-cy": "clear-all-filter-button",
                  children: [
                    /* @__PURE__ */ Q(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [
                          /* @__PURE__ */ b(
                            "path",
                            {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z",
                              fill: "currentColor"
                            }
                          ),
                          /* @__PURE__ */ b(
                            "path",
                            {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H9.33329C9.70148 10.6667 9.99996 10.9651 9.99996 11.3333C9.99996 11.7015 9.70148 12 9.33329 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z",
                              fill: "currentColor"
                            }
                          )
                        ]
                      }
                    ),
                    "Clear Filters"
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}, iN = ({
  title: e = "",
  childKey: t,
  parentKey: n = "",
  handleCloseClick: o,
  handleChipClick: r
}) => /* @__PURE__ */ Q("div", { className: "group relative", children: [
  /* @__PURE__ */ b(
    "button",
    {
      onClick: () => r({ parent: n, child: t }),
      className: "relative px-3 py-1 ml-2 border cursor-pointer rounded-lg border-solid border-[#E8E9EB] text-[#656870] text-[14px] hover:border-[#0073E6] min-h-[32px]",
      children: e
    }
  ),
  /* @__PURE__ */ b(
    "button",
    {
      className: "p-0 absolute bg-transparent hover:bg-transparent right-[-5px] top-[-5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
      onClick: () => o({ parent: n, child: t }),
      children: /* @__PURE__ */ b(
        "svg",
        {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ Q("g", { id: "circle_cross", children: [
            /* @__PURE__ */ b(
              "path",
              {
                id: "circle",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                fill: "#9B9EA3"
              }
            ),
            /* @__PURE__ */ b(
              "path",
              {
                id: "icon",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.88162 3.88162C3.70613 4.05711 3.70613 4.34164 3.88162 4.51713L5.36449 6L3.88162 7.48287C3.70613 7.65836 3.70613 7.94289 3.88162 8.11838C4.05711 8.29387 4.34164 8.29387 4.51713 8.11838L6 6.63551L7.48287 8.11838C7.65836 8.29387 7.94289 8.29387 8.11838 8.11838C8.29387 7.94289 8.29387 7.65836 8.11838 7.48287L6.63551 6L8.11838 4.51713C8.29387 4.34164 8.29387 4.05711 8.11838 3.88162C7.94289 3.70613 7.65836 3.70613 7.48287 3.88162L6 5.36449L4.51713 3.88162C4.34164 3.70613 4.05711 3.70613 3.88162 3.88162Z",
                fill: "white"
              }
            )
          ] })
        }
      )
    }
  )
] }), sN = ({
  mode: e = "single",
  selected: t,
  selectedRange: n,
  classes: o,
  min: r,
  max: a,
  onSelect: i = () => {
  },
  required: s = !1,
  defaultMonth: l,
  hidden: c,
  calendarIcon: u
}) => {
  const [d, f] = $.useState(), [p, m] = $.useState();
  $.useEffect(() => {
    e === "single" ? f(t || void 0) : e === "range" && m(
      n ? {
        from: n == null ? void 0 : n.from,
        to: n == null ? void 0 : n.to
      } : void 0
    );
  }, []);
  const g = {
    defaultMonth: l == null ? void 0 : l.from,
    hidden: c,
    className: L(o == null ? void 0 : o.calendarClassName),
    classNames: {
      nav: "space-x-1 flex items-center",
      nav_button: L(
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 !rounded-[20px]"
      ),
      nav_button_previous: "!absolute left-1 w-fit h-fit",
      nav_button_next: "!absolute right-1 w-fit h-fit",
      head_row: "flex",
      head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: L(
        "h-9 w-9 hover:!bg-[unset] hover:border hover:border-solid hover:border-[#333] hover:px-[8px] hover:py-[2px] hover:rounded-[10px] text-[#333]"
      ),
      day_selected: `bg-primary text-primary-foreground hover:!bg-red-100 !bg-red-100 ${e === "single" && "rounded-[10px]"}`,
      day_today: "!border !border-solid !border-[#333] !rounded-[10px]",
      day_outside: "opacity-30",
      day_range_start: "rounded-tl-[10px] rounded-bl-[10px]",
      day_range_end: "rounded-tr-[10px] rounded-br-[10px]"
    },
    min: r,
    max: a,
    required: s,
    toDate: /* @__PURE__ */ new Date()
  };
  return /* @__PURE__ */ Q(Jg, { children: [
    /* @__PURE__ */ b(e0, { asChild: !0, children: /* @__PURE__ */ Q(
      Pt,
      {
        variant: "outline",
        className: L(
          "justify-start text-left font-normal text-[#000] p-1 gap-0 min-w-0 h-fit",
          o == null ? void 0 : o.buttonClassName,
          !d && "text-muted-foreground"
        ),
        "data-cy": "date-picker-button",
        children: [
          u || /* @__PURE__ */ b(
            zb,
            {
              className: L(
                "h-4 w-4",
                o == null ? void 0 : o.iconClassName,
                (d || p) && "mr-2"
              )
            }
          ),
          e === "single" ? d && tn(d, "PPP") : (p == null ? void 0 : p.from) && (p == null ? void 0 : p.to) && `${tn(p.from, "LLL d")} - ${tn(p.to, "PPP")}`
        ]
      }
    ) }),
    /* @__PURE__ */ b(Rc, { className: "w-auto p-0", children: e === "single" ? /* @__PURE__ */ b(
      Cs,
      {
        mode: e,
        selected: d,
        onSelect: (h) => {
          f(h), i(h || void 0);
        },
        ...g
      }
    ) : /* @__PURE__ */ b(
      Cs,
      {
        mode: e,
        selected: p,
        onSelect: (h) => {
          m(h), h != null && h.from && (h != null && h.to) && i(h || void 0);
        },
        ...g
      }
    ) })
  ] });
}, Vd = ({
  size: e = 24,
  className: t,
  ...n
}) => /* @__PURE__ */ b(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: e,
    height: e,
    ...n,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: L("animate-spin", t),
    children: /* @__PURE__ */ b("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
  }
), VR = M.forwardRef(
  ({
    options: e,
    onValueChange: t,
    defaultValue: n = [],
    placeholder: o = "Select options",
    maxCount: r = 3,
    asChild: a = !1,
    className: i,
    showSelectAll: s,
    fetchOptions: l,
    useServerSideSearch: c = !0,
    ...u
  }, d) => {
    var ae;
    const [f, p] = re(n), [m, g] = re(!1), [h, v] = re(e), [w, y] = re(!1), C = M.useRef(null);
    le(() => {
      JSON.stringify(f) !== JSON.stringify(n) && p(n);
    }, [n, f]);
    const _ = (A) => {
      const V = f.some(
        (J) => J.value === A.value
      ) ? f.filter((J) => J.value !== A.value) : [...f, A];
      p(V), t(V);
    }, S = () => {
      p([]), t([]);
    }, E = () => {
      g((A) => !A);
    }, T = () => {
      const A = f.slice(0, r);
      p(A), t(A);
    }, N = () => {
      f.length === e.length ? S() : (p(e), t(e));
    }, k = (A, V) => {
      let J;
      return (H) => {
        clearTimeout(J), J = setTimeout(() => A(H), V);
      };
    }, F = M.useCallback(
      k(async (A) => {
        if (A.length !== 0) {
          if (y(!0), c && l) {
            const J = (await l(A)).filter(
              (H) => !h.some((K) => K.value === H.value)
            );
            v((H) => [...H, ...J]);
          }
          y(!1);
        }
      }, 300),
      [l, e, h, c]
    ), z = h == null ? void 0 : h.filter(
      (A, V, J) => V === (J == null ? void 0 : J.findIndex((H) => (H == null ? void 0 : H.value) === (A == null ? void 0 : A.value)))
    );
    return /* @__PURE__ */ Q(Jg, { open: m, onOpenChange: g, children: [
      /* @__PURE__ */ b(e0, { asChild: !0, children: /* @__PURE__ */ b(
        Pt,
        {
          ref: C,
          onClick: E,
          className: L(
            "flex w-full py-3 !h-[48px] !m-0 px-4 rounded-lg border border-gray-300 items-center justify-between bg-white hover:bg-gray-100",
            i
          ),
          "data-cy": "multi-select-trigger",
          ...u,
          children: f.length > 0 ? /* @__PURE__ */ Q("div", { className: "flex justify-between items-center w-full", children: [
            /* @__PURE__ */ Q("div", { className: "flex flex-wrap gap-2 items-center", children: [
              f.slice(0, r).map((A) => /* @__PURE__ */ Q(
                bu,
                {
                  className: "bg-[#F0F1F4] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]",
                  "data-cy": `selected-option-${A.value}`,
                  children: [
                    A.icon && /* @__PURE__ */ b(A.icon, { className: "h-4 w-4 mr-2" }),
                    A.label,
                    /* @__PURE__ */ b(
                      vs,
                      {
                        className: "ml-2 h-4 w-4 cursor-pointer",
                        onClick: (V) => {
                          V.stopPropagation(), _(A);
                        },
                        "data-cy": `remove-option-${A.value}`
                      }
                    )
                  ]
                },
                A.value
              )),
              f.length > r && /* @__PURE__ */ Q(
                bu,
                {
                  className: "bg-[#d9dadc] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]",
                  "data-cy": "more-options-badge",
                  children: [
                    `+ ${f.length - r} more`,
                    /* @__PURE__ */ b(
                      vs,
                      {
                        className: "ml-2 h-4 w-4 cursor-pointer",
                        onClick: (A) => {
                          A.stopPropagation(), T();
                        },
                        "data-cy": "clear-extra-options"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ b("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ b(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "6",
                viewBox: "0 0 10 6",
                fill: "none",
                "data-cy": "dropdown-arrow",
                children: /* @__PURE__ */ b(
                  "path",
                  {
                    d: "M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z",
                    fill: "black"
                  }
                )
              }
            ) })
          ] }) : /* @__PURE__ */ Q("div", { className: "flex items-center justify-between w-full mx-auto", children: [
            /* @__PURE__ */ b(
              "span",
              {
                className: "text-[#C7CBD1] !text-[14px] !leading-5 font-normal ",
                "data-cy": "placeholder-text",
                children: o
              }
            ),
            /* @__PURE__ */ b(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "6",
                viewBox: "0 0 10 6",
                fill: "none",
                "data-cy": "dropdown-arrow",
                children: /* @__PURE__ */ b(
                  "path",
                  {
                    d: "M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z",
                    fill: "black"
                  }
                )
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ b(
        Rc,
        {
          className: "p-0 rounded-lg shadow-lg border border-gray-200",
          align: "start",
          onEscapeKeyDown: () => g(!1),
          style: {
            width: ((ae = C.current) == null ? void 0 : ae.offsetWidth) || "auto"
          },
          "data-cy": "popover-content",
          children: /* @__PURE__ */ Q(Hl, { children: [
            /* @__PURE__ */ b(
              Pp,
              {
                placeholder: "Search...",
                onValueChange: F,
                "data-cy": "search-input"
              }
            ),
            /* @__PURE__ */ Q(Rp, { className: "w-full", children: [
              !w && /* @__PURE__ */ b(Mp, { "data-cy": "no-results", children: "No results found." }),
              w ? /* @__PURE__ */ b(
                Rs,
                {
                  className: "flex items-center justify-center p-2",
                  "data-cy": "loading-spinner",
                  children: /* @__PURE__ */ b(Vd, {})
                }
              ) : /* @__PURE__ */ Q(Np, { children: [
                s && /* @__PURE__ */ Q(
                  Ms,
                  {
                    onSelect: N,
                    style: { pointerEvents: "auto", opacity: 1 },
                    className: "cursor-pointer",
                    "data-cy": "select-all-option",
                    children: [
                      /* @__PURE__ */ b(
                        "div",
                        {
                          className: L(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            f.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ b(Io, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ b("span", { children: "(Select All)" })
                    ]
                  },
                  "all"
                ),
                w && /* @__PURE__ */ b(
                  Rs,
                  {
                    className: "flex items-center justify-center p-2",
                    "data-cy": "loading-spinner",
                    children: /* @__PURE__ */ b(Vd, {})
                  }
                ),
                z.map((A) => {
                  const V = f.some(
                    (J) => J.value === A.value
                  );
                  return /* @__PURE__ */ Q(
                    Ms,
                    {
                      onSelect: () => _(A),
                      style: { pointerEvents: "auto", opacity: 1 },
                      className: "cursor-pointer flex gap-2",
                      value: A.label,
                      "data-cy": `option-${A.value}`,
                      children: [
                        /* @__PURE__ */ b(
                          Xn,
                          {
                            checked: V,
                            className: "h-4 w-4",
                            "data-cy": `checkbox-${A.value}`
                          }
                        ),
                        A.icon && /* @__PURE__ */ b(A.icon, { className: "mr-2 h-4 w-4 text-[#C7CBD1] text-[14px] leading-5 font-normal " }),
                        /* @__PURE__ */ b("span", { className: V ? "text-[#0073E6]" : "", children: A.label })
                      ]
                    },
                    A.value
                  );
                })
              ] })
            ] })
          ] })
        }
      )
    ] });
  }
);
VR.displayName = "MultiSelect";
export {
  jb as Accordion,
  gf as AccordionContent,
  pf as AccordionItem,
  mf as AccordionTrigger,
  kw as Alert,
  Fw as AlertDescription,
  YR as AlertDialog,
  Aw as AlertDialogAction,
  Iw as AlertDialogCancel,
  Rw as AlertDialogContent,
  Tw as AlertDialogDescription,
  Nw as AlertDialogFooter,
  Mw as AlertDialogHeader,
  Vf as AlertDialogOverlay,
  Pw as AlertDialogPortal,
  Dw as AlertDialogTitle,
  KR as AlertDialogTrigger,
  Lw as AlertTitle,
  qR as AspectRatio,
  qw as Avatar,
  Zw as AvatarFallback,
  Xw as AvatarImage,
  bu as Badge,
  ey as Breadcrumb,
  iy as BreadcrumbEllipsis,
  ny as BreadcrumbItem,
  oy as BreadcrumbLink,
  ty as BreadcrumbList,
  ry as BreadcrumbPage,
  ay as BreadcrumbSeparator,
  Pt as Button,
  Cs as Calendar,
  Y$ as Card,
  Z$ as CardContent,
  X$ as CardDescription,
  Q$ as CardFooter,
  K$ as CardHeader,
  q$ as CardTitle,
  T2 as Carousel,
  A2 as CarouselContent,
  I2 as CarouselItem,
  k2 as CarouselNext,
  O2 as CarouselPrevious,
  Xn as Checkbox,
  QR as Collapsible,
  eM as CollapsibleContent,
  JR as CollapsibleTrigger,
  Hl as Command,
  oM as CommandDialog,
  Mp as CommandEmpty,
  Np as CommandGroup,
  Pp as CommandInput,
  Ms as CommandItem,
  Rp as CommandList,
  yC as CommandSeparator,
  xC as CommandShortcut,
  aM as ContextMenu,
  X3 as ContextMenuCheckboxItem,
  K3 as ContextMenuContent,
  sM as ContextMenuGroup,
  q3 as ContextMenuItem,
  Q3 as ContextMenuLabel,
  lM as ContextMenuPortal,
  uM as ContextMenuRadioGroup,
  Z3 as ContextMenuRadioItem,
  J3 as ContextMenuSeparator,
  e5 as ContextMenuShortcut,
  cM as ContextMenuSub,
  Y3 as ContextMenuSubContent,
  U3 as ContextMenuSubTrigger,
  iM as ContextMenuTrigger,
  rN as DataTable,
  sN as DatePicker,
  mC as Dialog,
  nM as DialogClose,
  Ep as DialogContent,
  wC as DialogDescription,
  vC as DialogFooter,
  hC as DialogHeader,
  _p as DialogOverlay,
  gC as DialogPortal,
  bC as DialogTitle,
  tM as DialogTrigger,
  $5 as Drawer,
  fM as DrawerClose,
  S5 as DrawerContent,
  R5 as DrawerDescription,
  E5 as DrawerFooter,
  _5 as DrawerHeader,
  Nm as DrawerOverlay,
  C5 as DrawerPortal,
  P5 as DrawerTitle,
  dM as DrawerTrigger,
  Wm as DropdownMenu,
  Ym as DropdownMenuCheckboxItem,
  hc as DropdownMenuContent,
  mM as DropdownMenuGroup,
  eS as DropdownMenuItem,
  Km as DropdownMenuLabel,
  gM as DropdownMenuPortal,
  hM as DropdownMenuRadioGroup,
  tS as DropdownMenuRadioItem,
  qm as DropdownMenuSeparator,
  nS as DropdownMenuShortcut,
  J5 as DropdownMenuSub,
  Um as DropdownMenuSubContent,
  jm as DropdownMenuSubTrigger,
  Q5 as DropdownMenuTrigger,
  iN as FilterChip,
  aN as Filters,
  vM as Form,
  xa as FormControl,
  _S as FormDescription,
  bM as FormField,
  wa as FormItem,
  ya as FormLabel,
  ES as FormMessage,
  xM as HoverCard,
  FS as HoverCardContent,
  $M as HoverCardTrigger,
  fl as Input,
  JS as InputOTP,
  e7 as InputOTPGroup,
  n7 as InputOTPSeparator,
  t7 as InputOTPSlot,
  ng as Label,
  nN as LessonCard,
  R7 as Menubar,
  I7 as MenubarCheckboxItem,
  T7 as MenubarContent,
  _M as MenubarGroup,
  A7 as MenubarItem,
  k7 as MenubarLabel,
  SM as MenubarMenu,
  EM as MenubarPortal,
  RM as MenubarRadioGroup,
  O7 as MenubarRadioItem,
  L7 as MenubarSeparator,
  F7 as MenubarShortcut,
  PM as MenubarSub,
  D7 as MenubarSubContent,
  N7 as MenubarSubTrigger,
  M7 as MenubarTrigger,
  VR as MultiSelect,
  d4 as NavigationMenu,
  g4 as NavigationMenuContent,
  h4 as NavigationMenuIndicator,
  NM as NavigationMenuItem,
  DM as NavigationMenuLink,
  f4 as NavigationMenuList,
  m4 as NavigationMenuTrigger,
  Ug as NavigationMenuViewport,
  v4 as Pagination,
  b4 as PaginationContent,
  $4 as PaginationEllipsis,
  w4 as PaginationItem,
  Ec as PaginationLink,
  x4 as PaginationNext,
  y4 as PaginationPrevious,
  Jg as Popover,
  Rc as PopoverContent,
  e0 as PopoverTrigger,
  j4 as Progress,
  l8 as RadioGroup,
  c8 as RadioGroupItem,
  FM as ResizableHandle,
  LM as ResizablePanel,
  kM as ResizablePanelGroup,
  o9 as ScrollArea,
  q0 as ScrollBar,
  wd as Select,
  Ks as SelectContent,
  HM as SelectGroup,
  qs as SelectItem,
  j9 as SelectLabel,
  dh as SelectScrollDownButton,
  uh as SelectScrollUpButton,
  U9 as SelectSeparator,
  Ys as SelectTrigger,
  yd as SelectValue,
  q9 as Separator,
  BM as Sheet,
  WM as SheetClose,
  Q9 as SheetContent,
  n_ as SheetDescription,
  e_ as SheetFooter,
  J9 as SheetHeader,
  gh as SheetOverlay,
  X9 as SheetPortal,
  t_ as SheetTitle,
  GM as SheetTrigger,
  jM as Skeleton,
  E_ as Slider,
  PE as Switch,
  Ah as Table,
  Oh as TableBody,
  ME as TableCaption,
  tl as TableCell,
  RE as TableFooter,
  kh as TableHead,
  Ih as TableHeader,
  Sa as TableRow,
  ZM as Tabs,
  BE as TabsContent,
  VE as TabsList,
  HE as TabsTrigger,
  GE as Textarea,
  YM as Toaster,
  XE as Toggle,
  ZE as ToggleGroup,
  QE as ToggleGroupItem,
  tN as Tooltip,
  Ow as alertVariants,
  Qw as badgeVariants,
  Po as buttonVariants,
  p4 as navigationMenuTriggerStyle,
  KM as sonner,
  Jh as toggleVariants,
  ci as useFormField,
  oN as useToast
};
