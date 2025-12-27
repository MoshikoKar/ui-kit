import { jsxs as f, jsx as s } from "react/jsx-runtime";
import C, { useState as se, useId as fe, useRef as xe, createContext as ge, useContext as we } from "react";
function ne(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (t = 0; t < n; t++) e[t] && (o = ne(e[t])) && (r && (r += " "), r += o);
  } else for (o in e) e[o] && (r && (r += " "), r += o);
  return r;
}
function ye() {
  for (var e, t, o = 0, r = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (t = ne(e)) && (r && (r += " "), r += t);
  return r;
}
const J = "-", ve = (e) => {
  const t = Ce(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (a) => {
      const i = a.split(J);
      return i[0] === "" && i.length !== 1 && i.shift(), ae(i, t) || _e(a);
    },
    getConflictingClassGroupIds: (a, i) => {
      const d = o[a] || [];
      return i && r[a] ? [...d, ...r[a]] : d;
    }
  };
}, ae = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const o = e[0], r = t.nextPart.get(o), n = r ? ae(e.slice(1), r) : void 0;
  if (n)
    return n;
  if (t.validators.length === 0)
    return;
  const l = e.join(J);
  return (a = t.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : a.classGroupId;
}, te = /^\[(.+)\]$/, _e = (e) => {
  if (te.test(e)) {
    const t = te.exec(e)[1], o = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (o)
      return "arbitrary.." + o;
  }
}, Ce = (e) => {
  const {
    theme: t,
    prefix: o
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ne(Object.entries(e.classGroups), o).forEach(([l, a]) => {
    K(a, r, l, t);
  }), r;
}, K = (e, t, o, r) => {
  e.forEach((n) => {
    if (typeof n == "string") {
      const l = n === "" ? t : re(t, n);
      l.classGroupId = o;
      return;
    }
    if (typeof n == "function") {
      if (ke(n)) {
        K(n(r), t, o, r);
        return;
      }
      t.validators.push({
        validator: n,
        classGroupId: o
      });
      return;
    }
    Object.entries(n).forEach(([l, a]) => {
      K(a, re(t, l), o, r);
    });
  });
}, re = (e, t) => {
  let o = e;
  return t.split(J).forEach((r) => {
    o.nextPart.has(r) || o.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), o = o.nextPart.get(r);
  }), o;
}, ke = (e) => e.isThemeGetter, Ne = (e, t) => t ? e.map(([o, r]) => {
  const n = r.map((l) => typeof l == "string" ? t + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([a, i]) => [t + a, i])) : l);
  return [o, n];
}) : e, ze = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const n = (l, a) => {
    o.set(l, a), t++, t > e && (t = 0, r = o, o = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let a = o.get(l);
      if (a !== void 0)
        return a;
      if ((a = r.get(l)) !== void 0)
        return n(l, a), a;
    },
    set(l, a) {
      o.has(l) ? o.set(l, a) : n(l, a);
    }
  };
}, le = "!", Me = (e) => {
  const {
    separator: t,
    experimentalParseClassName: o
  } = e, r = t.length === 1, n = t[0], l = t.length, a = (i) => {
    const d = [];
    let h = 0, c = 0, w;
    for (let b = 0; b < i.length; b++) {
      let k = i[b];
      if (h === 0) {
        if (k === n && (r || i.slice(b, b + l) === t)) {
          d.push(i.slice(c, b)), c = b + l;
          continue;
        }
        if (k === "/") {
          w = b;
          continue;
        }
      }
      k === "[" ? h++ : k === "]" && h--;
    }
    const x = d.length === 0 ? i : i.substring(c), _ = x.startsWith(le), g = _ ? x.substring(1) : x, u = w && w > c ? w - c : void 0;
    return {
      modifiers: d,
      hasImportantModifier: _,
      baseClassName: g,
      maybePostfixModifierPosition: u
    };
  };
  return o ? (i) => o({
    className: i,
    parseClassName: a
  }) : a;
}, Se = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let o = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...o.sort(), r), o = []) : o.push(r);
  }), t.push(...o.sort()), t;
}, Le = (e) => ({
  cache: ze(e.cacheSize),
  parseClassName: Me(e),
  ...ve(e)
}), Ae = /\s+/, Ie = (e, t) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: n
  } = t, l = [], a = e.trim().split(Ae);
  let i = "";
  for (let d = a.length - 1; d >= 0; d -= 1) {
    const h = a[d], {
      modifiers: c,
      hasImportantModifier: w,
      baseClassName: x,
      maybePostfixModifierPosition: _
    } = o(h);
    let g = !!_, u = r(g ? x.substring(0, _) : x);
    if (!u) {
      if (!g) {
        i = h + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (u = r(x), !u) {
        i = h + (i.length > 0 ? " " + i : i);
        continue;
      }
      g = !1;
    }
    const b = Se(c).join(":"), k = w ? b + le : b, N = k + u;
    if (l.includes(N))
      continue;
    l.push(N);
    const R = n(u, g);
    for (let M = 0; M < R.length; ++M) {
      const E = R[M];
      l.push(k + E);
    }
    i = h + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Re() {
  let e = 0, t, o, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (o = ie(t)) && (r && (r += " "), r += o);
  return r;
}
const ie = (e) => {
  if (typeof e == "string")
    return e;
  let t, o = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = ie(e[r])) && (o && (o += " "), o += t);
  return o;
};
function Ee(e, ...t) {
  let o, r, n, l = a;
  function a(d) {
    const h = t.reduce((c, w) => w(c), e());
    return o = Le(h), r = o.cache.get, n = o.cache.set, l = i, i(d);
  }
  function i(d) {
    const h = r(d);
    if (h)
      return h;
    const c = Ie(d, o);
    return n(d, c), c;
  }
  return function() {
    return l(Re.apply(null, arguments));
  };
}
const y = (e) => {
  const t = (o) => o[e] || [];
  return t.isThemeGetter = !0, t;
}, ce = /^\[(?:([a-z-]+):)?(.+)\]$/i, Te = /^\d+\/\d+$/, je = /* @__PURE__ */ new Set(["px", "full", "screen"]), Ge = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Be = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Fe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, $e = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e) => j(e) || je.has(e) || Te.test(e), A = (e) => G(e, "length", Ke), j = (e) => !!e && !Number.isNaN(Number(e)), D = (e) => G(e, "number", j), F = (e) => !!e && Number.isInteger(Number(e)), Ve = (e) => e.endsWith("%") && j(e.slice(0, -1)), p = (e) => ce.test(e), I = (e) => Ge.test(e), We = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Ze = (e) => G(e, We, de), Ue = (e) => G(e, "position", de), He = /* @__PURE__ */ new Set(["image", "url"]), qe = (e) => G(e, He, Qe), De = (e) => G(e, "", Je), $ = () => !0, G = (e, t, o) => {
  const r = ce.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : o(r[2]) : !1;
}, Ke = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Be.test(e) && !Pe.test(e)
), de = () => !1, Je = (e) => Fe.test(e), Qe = (e) => $e.test(e), Xe = () => {
  const e = y("colors"), t = y("spacing"), o = y("blur"), r = y("brightness"), n = y("borderColor"), l = y("borderRadius"), a = y("borderSpacing"), i = y("borderWidth"), d = y("contrast"), h = y("grayscale"), c = y("hueRotate"), w = y("invert"), x = y("gap"), _ = y("gradientColorStops"), g = y("gradientColorStopPositions"), u = y("inset"), b = y("margin"), k = y("opacity"), N = y("padding"), R = y("saturate"), M = y("scale"), E = y("sepia"), T = y("skew"), B = y("space"), Q = y("translate"), Z = () => ["auto", "contain", "none"], U = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", p, t], v = () => [p, t], X = () => ["", L, A], V = () => ["auto", j, p], Y = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], W = () => ["solid", "dashed", "dotted", "double", "none"], O = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], P = () => ["", "0", p], ee = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [j, p];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [$],
      spacing: [L, A],
      blur: ["none", "", I, p],
      brightness: S(),
      borderColor: [e],
      borderRadius: ["none", "", "full", I, p],
      borderSpacing: v(),
      borderWidth: X(),
      contrast: S(),
      grayscale: P(),
      hueRotate: S(),
      invert: P(),
      gap: v(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ve, A],
      inset: H(),
      margin: H(),
      opacity: S(),
      padding: v(),
      saturate: S(),
      scale: S(),
      sepia: P(),
      skew: S(),
      space: v(),
      translate: v()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", p]
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
        columns: [I]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ee()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ee()
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
        object: [...Y(), p]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: U()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": U()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": U()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Z()
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
        inset: [u]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [u]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [u]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [u]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [u]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [u]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [u]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [u]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [u]
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
        z: ["auto", F, p]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: H()
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
        flex: ["1", "auto", "initial", "none", p]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: P()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: P()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", F, p]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [$]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", F, p]
        }, p]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [$]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [F, p]
        }, p]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
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
        "auto-cols": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", p]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...q()]
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
        content: ["normal", ...q(), "baseline"]
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
        "place-content": [...q(), "baseline"]
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
        p: [N]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [N]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [N]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [N]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [N]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [N]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [N]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [N]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [N]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [B]
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
        "space-y": [B]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", p, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [p, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [p, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [I]
        }, I]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [p, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [p, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [p, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", I, A]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", D]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$]
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
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", p]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", j, D]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, p]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", p]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", p]
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
        "placeholder-opacity": [k]
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
        "text-opacity": [k]
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", L, A]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", L, p]
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
        indent: v()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", p]
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
        content: ["none", p]
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
        "bg-opacity": [k]
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
        bg: [...Y(), Ue]
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
        bg: ["auto", "cover", "contain", Ze]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qe]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [g]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [_]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [_]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [_]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [k]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...W(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [k]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: W()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [n]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [n]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [n]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [n]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [n]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [n]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [n]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [n]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [n]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [n]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...W()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [L, p]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [L, A]
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
        ring: X()
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
        "ring-opacity": [k]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [L, A]
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
        shadow: ["", "inner", "none", I, De]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [$]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [k]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...O(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": O()
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
        blur: [o]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", I, p]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [w]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-blur": [o]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [w]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [k]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", p]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: S()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", p]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: S()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", p]
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
        scale: [M]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [M]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [M]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [F, p]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Q]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Q]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [T]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [T]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", p]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", p]
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
        "scroll-m": v()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": v()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": v()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": v()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": v()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": v()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": v()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": v()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": v()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": v()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": v()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": v()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": v()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": v()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": v()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": v()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": v()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": v()
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
        "will-change": ["auto", "scroll", "contents", "transform", p]
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
        stroke: [L, A, D]
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
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
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
}, Ye = /* @__PURE__ */ Ee(Xe);
function m(...e) {
  return Ye(ye(e));
}
const Oe = {
  primary: "bg-primary text-black theme-light:text-white border border-primary shadow-[inset_-4px_-4px_8px_var(--color-primary-shadow-dark),inset_4px_4px_8px_var(--color-primary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-primary-shadow-dark),_inset_-3px_-3px_6px_var(--color-primary-shadow-light)] disabled:shadow-none disabled:bg-primary-disabled disabled:text-text-disabled",
  secondary: "bg-secondary text-white border border-secondary shadow-[inset_-4px_-4px_8px_var(--color-secondary-shadow-dark),inset_4px_4px_8px_var(--color-secondary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-secondary-shadow-dark),_inset_-3px_-3px_6px_var(--color-secondary-shadow-light)] disabled:shadow-none disabled:bg-secondary-disabled disabled:text-text-disabled",
  danger: "bg-danger text-black theme-light:text-white border border-danger shadow-[inset_-4px_-4px_8px_var(--color-danger-shadow-dark),inset_4px_4px_8px_var(--color-danger-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-danger-shadow-dark),_inset_-3px_-3px_6px_var(--color-danger-shadow-light)] disabled:shadow-none disabled:bg-danger-disabled disabled:text-text-disabled",
  ghost: "bg-ghost text-text-primary border border-transparent shadow-[inset_-4px_-4px_8px_var(--color-ghost-shadow-dark),inset_4px_4px_8px_var(--color-ghost-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-ghost-shadow-dark),_inset_-3px_-3px_6px_var(--color-ghost-shadow-light)] disabled:shadow-none disabled:bg-ghost-disabled disabled:text-text-disabled"
}, et = {
  sm: "px-3 py-1 text-xs font-medium rounded-lg h-8",
  md: "px-4 py-1.5 text-sm font-medium rounded-lg h-10",
  lg: "px-6 py-2 text-md font-medium rounded-lg h-12"
}, pe = C.forwardRef(({
  variant: e = "primary",
  size: t = "md",
  loading: o = !1,
  disabled: r = !1,
  className: n,
  children: l,
  ...a
}, i) => /* @__PURE__ */ f(
  "button",
  {
    ref: i,
    className: m(
      "inline-flex items-center justify-center",
      "font-medium transition-all duration-200",
      "focus-visible focus:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      Oe[e],
      et[t],
      n
    ),
    disabled: r || o,
    ...a,
    children: [
      /* @__PURE__ */ s("span", { className: m("inline-flex items-center", o ? "w-4 h-4 mr-2" : "w-0 h-4"), children: /* @__PURE__ */ f(
        "svg",
        {
          className: m("animate-spin h-4 w-4", !o && "opacity-0"),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ s(
              "circle",
              {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4"
              }
            ),
            /* @__PURE__ */ s(
              "path",
              {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              }
            )
          ]
        }
      ) }),
      l
    ]
  }
));
pe.displayName = "Button";
const tt = "_button_7snfv_7", rt = "_state_7snfv_75", ot = "_icon_7snfv_149", st = "_outline_7snfv_207", z = {
  button: tt,
  "button--size-sm": "_button--size-sm_7snfv_59",
  state: rt,
  "button--size-md": "_button--size-md_7snfv_83",
  "button--size-lg": "_button--size-lg_7snfv_107",
  icon: ot,
  outline: st,
  "state--default": "_state--default_7snfv_231",
  "state--sent": "_state--sent_7snfv_717"
}, oe = (e) => e.split("").map((t, o) => /* @__PURE__ */ s("span", { style: { "--i": o }, children: t === " " ? " " : t }, o)), nt = {
  sm: z["button--size-sm"],
  md: z["button--size-md"],
  lg: z["button--size-lg"]
}, gt = ({
  children: e = "Send Message",
  successText: t = "Sent",
  onSubmit: o,
  disabled: r,
  size: n = "md",
  className: l,
  ...a
}) => {
  const [i, d] = se(!1), h = fe(), c = xe(null);
  return /* @__PURE__ */ f(
    "button",
    {
      ...a,
      ref: c,
      type: "submit",
      disabled: r,
      onClick: async (x) => {
        var _, g;
        if (o && !i)
          try {
            await o(), d(!0), (_ = c.current) == null || _.focus(), setTimeout(() => {
              var u;
              d(!1), (u = c.current) == null || u.blur();
            }, 3e3);
          } catch (u) {
            console.error("Submit failed:", u);
          }
        (g = a.onClick) == null || g.call(a, x);
      },
      className: m(z.button, nt[n], l),
      "aria-label": i ? "Submission successful" : a["aria-label"] || "Submit",
      "aria-disabled": r,
      children: [
        /* @__PURE__ */ s("div", { className: z.outline }),
        /* @__PURE__ */ f("div", { className: m(z.state, z["state--default"]), children: [
          /* @__PURE__ */ s("div", { className: z.icon, children: /* @__PURE__ */ f(
            "svg",
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ f("g", { style: { filter: `url(#${h})` }, children: [
                  /* @__PURE__ */ s(
                    "path",
                    {
                      d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "path",
                    {
                      d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      fill: "currentColor"
                    }
                  )
                ] }),
                /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("filter", { id: h, children: /* @__PURE__ */ s(
                  "feDropShadow",
                  {
                    dx: "0",
                    dy: "1",
                    stdDeviation: "0.6",
                    floodOpacity: "0.5"
                  }
                ) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ s("p", { children: oe(typeof e == "string" ? e : "Send Message") })
        ] }),
        /* @__PURE__ */ f("div", { className: m(z.state, z["state--sent"]), children: [
          /* @__PURE__ */ s("div", { className: z.icon, children: /* @__PURE__ */ s(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              height: "1em",
              width: "1em",
              strokeWidth: "0.5px",
              stroke: "black",
              children: /* @__PURE__ */ f("g", { style: { filter: `url(#${h})` }, children: [
                /* @__PURE__ */ s(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  }
                ),
                /* @__PURE__ */ s(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ s("p", { children: oe(t) })
        ] })
      ]
    }
  );
}, at = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-[10px] text-base",
  lg: "px-6 py-3 text-lg"
}, ue = C.forwardRef(({
  size: e = "md",
  error: t = !1,
  className: o,
  disabled: r,
  ...n
}, l) => /* @__PURE__ */ f("div", { className: "relative inline-flex items-center", children: [
  /* @__PURE__ */ s(
    "input",
    {
      ref: l,
      className: m(
        "bg-transparent",
        "border-none",
        "outline-none",
        "max-w-[190px]",
        "rounded-full",
        "text-text-primary",
        "transition-colors duration-200",
        "disabled:text-text-disabled disabled:cursor-not-allowed",
        t ? "shadow-[inset_2px_5px_10px_var(--input-shadow-error)] cursor-help" : "shadow-[inset_2px_5px_10px_var(--input-shadow)]",
        at[e],
        o
      ),
      style: t ? { paddingRight: "2rem" } : void 0,
      disabled: r,
      "aria-invalid": t,
      ...n
    }
  ),
  t && /* @__PURE__ */ s(
    "svg",
    {
      className: "absolute right-2 w-4 h-4 text-danger pointer-events-none flex-shrink-0",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "2",
      "aria-hidden": "true",
      children: /* @__PURE__ */ s(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      )
    }
  )
] }));
ue.displayName = "Input";
const lt = C.forwardRef(({
  label: e,
  error: t = !1,
  className: o,
  disabled: r,
  checked: n,
  onChange: l,
  ...a
}, i) => {
  const d = C.useId();
  return /* @__PURE__ */ f("div", { className: m("flex items-center space-x-2", r && "cursor-not-allowed", t && !r && "cursor-help", o), children: [
    /* @__PURE__ */ f("label", { className: m("checkbox-container", r && "opacity-50 cursor-not-allowed", t && !r && "cursor-help", !r && !t && "cursor-pointer"), children: [
      /* @__PURE__ */ s(
        "input",
        {
          ref: i,
          id: d,
          type: "checkbox",
          disabled: r,
          checked: n,
          onChange: l,
          "aria-checked": n,
          "aria-invalid": t,
          "aria-disabled": r,
          ...a
        }
      ),
      /* @__PURE__ */ s("svg", { viewBox: "0 0 64 64", height: "1em", width: "1em", children: /* @__PURE__ */ s(
        "path",
        {
          d: "M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",
          pathLength: "575.0541381835938",
          className: m("checkbox-path", t && "checkbox-path-error")
        }
      ) })
    ] }),
    e && /* @__PURE__ */ s(
      "label",
      {
        htmlFor: d,
        className: m(
          "text-sm font-medium select-none",
          r ? "text-text-disabled cursor-not-allowed" : t ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
});
lt.displayName = "Checkbox";
const wt = ({
  label: e,
  error: t = !1,
  className: o,
  disabled: r,
  checked: n,
  onChange: l,
  id: a,
  ...i
}) => {
  const d = a || C.useId(), h = (c) => {
    if ((c.key === "Enter" || c.key === " ") && !r) {
      c.preventDefault();
      const w = document.getElementById(d);
      if (w) {
        w.checked = !w.checked;
        const x = new Event("change", { bubbles: !0 });
        w.dispatchEvent(x);
      }
    }
  };
  return /* @__PURE__ */ f("div", { className: m("toggle-wrapper", t && "toggle-wrapper--error", r && "cursor-not-allowed", t && !r && "cursor-help", o), children: [
    /* @__PURE__ */ s(
      "input",
      {
        id: d,
        className: "toggle-checkbox",
        type: "checkbox",
        checked: n,
        onChange: l,
        disabled: r,
        role: "switch",
        "aria-checked": n,
        "aria-disabled": r,
        "aria-invalid": t,
        ...i
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        className: m("toggle-container", r && "cursor-not-allowed", t && !r && "cursor-help"),
        onKeyDown: h,
        tabIndex: r ? -1 : 0,
        role: "button",
        "aria-hidden": "true",
        children: /* @__PURE__ */ s("div", { className: "toggle-button", children: /* @__PURE__ */ s("div", { className: "toggle-button-circles-container", children: Array.from({ length: 12 }).map((c, w) => /* @__PURE__ */ s("div", { className: "toggle-button-circle" }, w)) }) })
      }
    ),
    e && /* @__PURE__ */ s(
      "label",
      {
        htmlFor: d,
        className: m(
          "text-sm font-medium select-none ml-2",
          r ? "text-text-disabled cursor-not-allowed" : t ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
}, yt = ({ className: e, ...t }) => /* @__PURE__ */ s(
  "div",
  {
    className: m(
      "card",
      "w-full",
      "rounded-lg border border-border",
      "bg-surface-secondary text-text-primary",
      "shadow-sm",
      e
    ),
    ...t
  }
), vt = ({ className: e, ...t }) => /* @__PURE__ */ s(
  "div",
  {
    className: m("flex items-start justify-between gap-4 px-6 py-4 border-b border-border", e),
    ...t
  }
), _t = ({ className: e, ...t }) => /* @__PURE__ */ s("div", { className: m("px-6 py-4", e), ...t }), Ct = ({ className: e, ...t }) => /* @__PURE__ */ s(
  "div",
  {
    className: m("flex items-center justify-end gap-3 px-6 py-4 border-t border-border", e),
    ...t
  }
), me = {
  sm: 0.7,
  md: 1,
  lg: 1.3
}, kt = ({ size: e = "md", className: t, ...o }) => {
  const r = 8 * me[e];
  return /* @__PURE__ */ f("div", { className: m("loader", t), style: { fontSize: `${r}px` }, ...o, children: [
    /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
    /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
  ] });
}, Nt = ({
  size: e = "md",
  variant: t = "inline",
  label: o,
  className: r,
  ...n
}) => {
  const l = 8 * me[e];
  return t === "container" ? /* @__PURE__ */ s(
    "div",
    {
      className: m(
        "relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary flex items-center justify-center",
        r
      ),
      ...n,
      children: /* @__PURE__ */ f("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ f("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
          /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
          /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
        ] }),
        o && /* @__PURE__ */ s("span", { className: "text-sm text-text-secondary", children: o })
      ] })
    }
  ) : /* @__PURE__ */ f("div", { className: m("inline-flex items-center gap-2", r), ...n, children: [
    /* @__PURE__ */ f("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
      /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
      /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
    ] }),
    o && /* @__PURE__ */ s("span", { className: "text-sm text-text-secondary", children: o })
  ] });
}, be = C.createContext(null), zt = ({
  name: e,
  legend: t,
  value: o,
  defaultValue: r,
  disabled: n = !1,
  onValueChange: l,
  className: a,
  children: i,
  ...d
}) => {
  const h = o !== void 0, [c, w] = C.useState(r), x = h ? o : c, _ = C.useCallback(
    (g) => {
      h || w(g), l == null || l(g);
    },
    [h, l]
  );
  return /* @__PURE__ */ s(be.Provider, { value: { name: e, value: x, disabled: n, onValueChange: _ }, children: /* @__PURE__ */ f(
    "fieldset",
    {
      className: m("radio-input", n && "opacity-60 cursor-not-allowed", a),
      disabled: n,
      ...d,
      children: [
        t && /* @__PURE__ */ s("legend", { className: "text-sm font-medium text-text-primary", children: t }),
        i
      ]
    }
  ) });
}, Mt = ({
  label: e,
  value: t,
  disabled: o,
  checked: r,
  defaultChecked: n,
  name: l,
  onChange: a,
  onCheckedChange: i,
  className: d,
  ...h
}) => {
  const c = C.useContext(be), w = C.useId(), x = !!(o ?? (c == null ? void 0 : c.disabled)), _ = l ?? (c == null ? void 0 : c.name), g = !!c, u = r !== void 0, [b, k] = C.useState(!!n), N = g ? (c == null ? void 0 : c.value) === t : u ? !!r : b, R = (E) => {
    var B;
    const T = E.target.checked;
    g && T ? (B = c == null ? void 0 : c.onValueChange) == null || B.call(c, t) : u || k(T), i == null || i(T), a == null || a(E);
  }, M = /* @__PURE__ */ f("label", { htmlFor: w, className: m(x && "cursor-not-allowed", d), role: "radio", "aria-checked": N, "aria-disabled": x, children: [
    /* @__PURE__ */ s(
      "input",
      {
        id: w,
        type: "radio",
        name: _,
        value: t,
        checked: N,
        disabled: x,
        onChange: R,
        role: "radio",
        "aria-checked": N,
        "aria-disabled": x,
        ...h
      }
    ),
    /* @__PURE__ */ s("span", { children: e || "" })
  ] });
  return g ? M : /* @__PURE__ */ s("div", { className: "radio-input", children: M });
}, it = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
  left: "right-full top-1/2 -translate-y-1/2 mr-1",
  right: "left-full top-1/2 -translate-y-1/2 ml-1"
}, ct = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-px",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-px",
  left: "left-full top-1/2 -translate-y-1/2 -ml-px",
  right: "right-full top-1/2 -translate-y-1/2 -mr-px"
}, dt = {
  top: "border-t-border border-r-transparent border-b-transparent border-l-transparent border-t-[6px] border-r-[6px] border-l-[6px]",
  bottom: "border-b-border border-r-transparent border-t-transparent border-l-transparent border-b-[6px] border-r-[6px] border-l-[6px]",
  left: "border-l-border border-r-transparent border-t-transparent border-b-transparent border-l-[6px] border-t-[6px] border-b-[6px]",
  right: "border-r-border border-l-transparent border-t-transparent border-b-transparent border-r-[6px] border-t-[6px] border-b-[6px]"
}, pt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-[5px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",
  left: "left-full top-1/2 -translate-y-1/2 -ml-[5px]",
  right: "right-full top-1/2 -translate-y-1/2 -mr-[5px]"
}, St = ({
  open: e,
  onOpenChange: t,
  content: o,
  position: r = "top",
  delay: n = 0,
  disabled: l = !1,
  children: a,
  className: i
}) => {
  const d = C.useRef(null), h = () => {
    d.current !== null && (window.clearTimeout(d.current), d.current = null);
  };
  C.useEffect(() => h, []);
  const c = () => {
    if (!l) {
      if (h(), n > 0) {
        d.current = window.setTimeout(() => t == null ? void 0 : t(!0), n);
        return;
      }
      t == null || t(!0);
    }
  }, w = () => {
    h(), t == null || t(!1);
  }, x = C.Children.only(a), _ = C.useId();
  return /* @__PURE__ */ f("span", { className: m("relative inline-block", i), children: [
    C.cloneElement(x, {
      "aria-describedby": e && !l ? _ : void 0,
      onMouseEnter: (g) => {
        var u, b;
        (b = (u = x.props).onMouseEnter) == null || b.call(u, g), c();
      },
      onMouseLeave: (g) => {
        var u, b;
        (b = (u = x.props).onMouseLeave) == null || b.call(u, g), w();
      },
      onFocus: (g) => {
        var u, b;
        (b = (u = x.props).onFocus) == null || b.call(u, g), c();
      },
      onBlur: (g) => {
        var u, b;
        (b = (u = x.props).onBlur) == null || b.call(u, g), w();
      }
    }),
    e && !l && /* @__PURE__ */ f(
      "span",
      {
        id: _,
        role: "tooltip",
        className: m(
          "absolute z-50 pointer-events-none",
          it[r],
          "whitespace-nowrap",
          "rounded-md border border-border bg-surface text-text-primary",
          "px-3 py-2 text-xs shadow-md"
        ),
        children: [
          o,
          /* @__PURE__ */ s(
            "span",
            {
              className: m(
                "absolute w-0 h-0",
                ct[r],
                dt[r]
              )
            }
          ),
          /* @__PURE__ */ s(
            "span",
            {
              className: m(
                "absolute w-0 h-0 bg-surface",
                pt[r],
                r === "top" && "border-t-[5px] border-r-[5px] border-l-[5px] border-t-surface border-r-transparent border-l-transparent",
                r === "bottom" && "border-b-[5px] border-r-[5px] border-l-[5px] border-b-surface border-r-transparent border-l-transparent",
                r === "left" && "border-l-[5px] border-t-[5px] border-b-[5px] border-l-surface border-t-transparent border-b-transparent",
                r === "right" && "border-r-[5px] border-t-[5px] border-b-[5px] border-r-surface border-t-transparent border-b-transparent"
              )
            }
          )
        ]
      }
    )
  ] });
}, he = ge(void 0), Lt = ({
  children: e,
  defaultTheme: t
}) => {
  const o = () => {
    if (typeof window < "u") {
      const a = localStorage.getItem("theme");
      if (a === "light" || a === "dark")
        return a;
    }
    return typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : t || "dark";
  }, [r, n] = se(o), l = C.useCallback((a) => {
    n(a), typeof window < "u" && localStorage.setItem("theme", a);
  }, []);
  return C.useEffect(() => {
    if (typeof document > "u") return;
    const a = document.documentElement;
    r === "light" ? (a.classList.add("theme-light"), a.classList.remove("theme-dark")) : (a.classList.add("theme-dark"), a.classList.remove("theme-light"));
  }, [r]), C.useEffect(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), i = (d) => {
      typeof window < "u" && !localStorage.getItem("theme") && n(d.matches ? "dark" : "light");
    };
    if (a.addEventListener)
      return a.addEventListener("change", i), () => a.removeEventListener("change", i);
    if (a.addListener)
      return a.addListener(i), () => a.removeListener(i);
  }, []), /* @__PURE__ */ s(he.Provider, { value: { theme: r, setTheme: l }, children: e });
}, ut = () => {
  const e = we(he);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, At = ({
  className: e,
  showLabel: t = !0
}) => {
  const { theme: o, setTheme: r } = ut(), n = o === "dark", l = () => {
    r(n ? "light" : "dark");
  }, a = (i) => {
    (i.key === "Enter" || i.key === " ") && (i.preventDefault(), l());
  };
  return /* @__PURE__ */ f("div", { className: m("flex items-center gap-3", e), children: [
    /* @__PURE__ */ f(
      "label",
      {
        className: "theme-switch cursor-pointer",
        onKeyDown: a,
        tabIndex: 0,
        role: "switch",
        "aria-checked": n,
        "aria-label": n ? "Switch to light mode" : "Switch to dark mode",
        children: [
          /* @__PURE__ */ s(
            "input",
            {
              type: "checkbox",
              className: "theme-switch__checkbox",
              checked: n,
              onChange: l,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ f("div", { className: "theme-switch__container", children: [
            /* @__PURE__ */ s("div", { className: "theme-switch__clouds" }),
            /* @__PURE__ */ s("div", { className: "theme-switch__stars-container", children: /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 144 55", fill: "none", children: /* @__PURE__ */ s(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
                fill: "currentColor"
              }
            ) }) }),
            /* @__PURE__ */ s("div", { className: "theme-switch__circle-container", children: /* @__PURE__ */ s("div", { className: "theme-switch__sun-moon-container", children: /* @__PURE__ */ f("div", { className: "theme-switch__moon", children: [
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" })
            ] }) }) })
          ] })
        ]
      }
    ),
    t && /* @__PURE__ */ s("span", { className: "text-sm font-medium text-text-primary", children: n ? "Dark" : "Light" })
  ] });
}, mt = ({
  width: e = 315,
  aspectRatio: t = 1.33,
  className: o,
  children: r,
  ...n
}) => /* @__PURE__ */ f(
  "div",
  {
    className: m(
      "relative flex justify-center items-center overflow-hidden",
      "bg-surface-tertiary rounded-[24px]",
      "shadow-[0_4px_8px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.2),0_0_8px_rgba(255,255,255,0.1),0_0_16px_rgba(255,255,255,0.08)]",
      "z-[8]",
      o
    ),
    style: {
      width: `${e + 1}px`,
      height: `${e * t + 1}px`
    },
    ...n,
    children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "absolute inset-[-50px] z-[-2] form-border-animation",
          style: {
            background: "conic-gradient(from 45deg, transparent 75%, var(--color-text-primary), transparent 100%)"
          }
        }
      ),
      r
    ]
  }
), bt = ({
  width: e = 315,
  aspectRatio: t = 1.33,
  className: o,
  children: r,
  ...n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: m(
      "absolute bg-surface-tertiary rounded-[24px] p-7 z-[10]",
      "backdrop-blur-[15px]",
      "shadow-[inset_0_40px_60px_-8px_rgba(255,255,255,0.12),inset_4px_0_12px_-6px_rgba(255,255,255,0.12),inset_0_0_12px_-4px_rgba(255,255,255,0.12)]",
      o
    ),
    style: {
      width: `${e}px`,
      height: `${e * t}px`
    },
    ...n,
    children: r
  }
), ht = ({ className: e, ...t }) => /* @__PURE__ */ f(
  "div",
  {
    className: m(
      "w-[65px] h-[65px] rounded-[20px] border-2 border-white",
      "bg-gradient-to-br from-white/20 to-black/20",
      "shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.06)]",
      "flex justify-center items-center relative",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ s("div", { className: "absolute bottom-[10px] w-1/2 h-[20%] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] border-[2.5px] border-white" }),
      /* @__PURE__ */ s("div", { className: "absolute top-[10px] w-[30%] h-[30%] rounded-full border-[2.5px] border-white" })
    ]
  }
), It = ({
  title: e,
  showLogo: t = !1,
  footer: o,
  width: r = 315,
  aspectRatio: n = 1.33,
  className: l,
  children: a,
  ...i
}) => /* @__PURE__ */ s(mt, { width: r, aspectRatio: n, children: /* @__PURE__ */ f(bt, { width: r, aspectRatio: n, children: [
  /* @__PURE__ */ f(
    "form",
    {
      className: m("flex justify-center items-center flex-col gap-[10px]", l),
      ...i,
      children: [
        t && /* @__PURE__ */ s("div", { className: "flex justify-center items-center mb-2", children: /* @__PURE__ */ s(ht, {}) }),
        e && /* @__PURE__ */ s("div", { className: "w-full text-center text-2xl font-bold py-1.5 text-text-primary flex justify-center items-center", children: e }),
        a
      ]
    }
  ),
  o && /* @__PURE__ */ s("div", { className: "w-full text-left text-text-secondary text-xs mt-4", children: o })
] }) }), Rt = ({
  label: e,
  error: t,
  className: o,
  size: r,
  ...n
}) => /* @__PURE__ */ f("div", { className: "w-full", children: [
  e && /* @__PURE__ */ s("label", { className: "block text-text-primary text-sm mb-1.5", children: e }),
  /* @__PURE__ */ s("div", { className: "flex justify-center", children: /* @__PURE__ */ s(
    ue,
    {
      className: m(
        "p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none",
        "focus:border focus:border-border-focus",
        o
      ),
      error: t,
      size: r,
      ...n
    }
  ) })
] }), Et = ({
  variant: e = "primary",
  className: t,
  children: o,
  ...r
}) => e === "google" ? /* @__PURE__ */ s(
  "button",
  {
    className: m(
      "w-full h-10 border-none rounded-[20px] text-sm font-semibold cursor-pointer",
      "grid place-content-center gap-2.5 bg-surface-secondary text-text-primary",
      "transition-all duration-300",
      "shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)]",
      "hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)]",
      "flex justify-center items-center gap-2.5",
      t
    ),
    ...r,
    children: o
  }
) : /* @__PURE__ */ s(
  pe,
  {
    className: m(
      "w-full h-10 rounded-[20px] text-sm font-semibold mt-1.5",
      t
    ),
    variant: "primary",
    ...r,
    children: o
  }
), Tt = ({
  className: e,
  children: t,
  ...o
}) => /* @__PURE__ */ s(
  "div",
  {
    className: m(
      "w-full text-left text-text-secondary text-xs",
      e
    ),
    ...o,
    children: t
  }
), jt = ({
  className: e,
  children: t,
  ...o
}) => /* @__PURE__ */ s(
  "a",
  {
    className: m(
      "relative text-text-secondary font-semibold no-underline transition-colors duration-300 ease-in-out",
      "hover:text-white",
      'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-[width] after:duration-300 after:ease-in-out',
      "hover:after:w-full",
      e
    ),
    ...o,
    children: t
  }
);
export {
  pe as Button,
  yt as Card,
  _t as CardContent,
  Ct as CardFooter,
  vt as CardHeader,
  lt as Checkbox,
  It as Form,
  Et as FormButton,
  Rt as FormField,
  Tt as FormFooter,
  jt as FormFooterLink,
  ue as Input,
  Nt as Loader,
  Mt as RadioButton,
  zt as RadioGroup,
  kt as Spinner,
  gt as SubmitButton,
  Lt as ThemeProvider,
  At as ThemeSwitch,
  wt as Toggle,
  St as Tooltip,
  ut as useTheme
};
