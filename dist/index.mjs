import { jsxs as g, jsx as s } from "react/jsx-runtime";
import y, { useState as Ne, useId as We, useRef as Ze, createContext as Ue, useContext as Ye } from "react";
function Se(e) {
  var r, o, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var n = e.length;
    for (r = 0; r < n; r++) e[r] && (o = Se(e[r])) && (t && (t += " "), t += o);
  } else for (o in e) e[o] && (t && (t += " "), t += o);
  return t;
}
function qe() {
  for (var e, r, o = 0, t = "", n = arguments.length; o < n; o++) (e = arguments[o]) && (r = Se(e)) && (t && (t += " "), t += r);
  return t;
}
const Ke = (e, r) => {
  const o = new Array(e.length + r.length);
  for (let t = 0; t < e.length; t++)
    o[t] = e[t];
  for (let t = 0; t < r.length; t++)
    o[e.length + t] = r[t];
  return o;
}, Xe = (e, r) => ({
  classGroupId: e,
  validator: r
}), Me = (e = /* @__PURE__ */ new Map(), r = null, o) => ({
  nextPart: e,
  validators: r,
  classGroupId: o
}), se = "-", we = [], Je = "arbitrary..", Qe = (e) => {
  const r = tt(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (a) => {
      if (a.startsWith("[") && a.endsWith("]"))
        return et(a);
      const p = a.split(se), i = p[0] === "" && p.length > 1 ? 1 : 0;
      return Le(p, i, r);
    },
    getConflictingClassGroupIds: (a, p) => {
      if (p) {
        const i = t[a], f = o[a];
        return i ? f ? Ke(f, i) : i : f || we;
      }
      return o[a] || we;
    }
  };
}, Le = (e, r, o) => {
  if (e.length - r === 0)
    return o.classGroupId;
  const n = e[r], l = o.nextPart.get(n);
  if (l) {
    const f = Le(e, r + 1, l);
    if (f) return f;
  }
  const a = o.validators;
  if (a === null)
    return;
  const p = r === 0 ? e.join(se) : e.slice(r).join(se), i = a.length;
  for (let f = 0; f < i; f++) {
    const x = a[f];
    if (x.validator(p))
      return x.classGroupId;
  }
}, et = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), o = r.indexOf(":"), t = r.slice(0, o);
  return t ? Je + t : void 0;
})(), tt = (e) => {
  const {
    theme: r,
    classGroups: o
  } = e;
  return rt(o, r);
}, rt = (e, r) => {
  const o = Me();
  for (const t in e) {
    const n = e[t];
    pe(n, o, t, r);
  }
  return o;
}, pe = (e, r, o, t) => {
  const n = e.length;
  for (let l = 0; l < n; l++) {
    const a = e[l];
    ot(a, r, o, t);
  }
}, ot = (e, r, o, t) => {
  if (typeof e == "string") {
    st(e, r, o);
    return;
  }
  if (typeof e == "function") {
    nt(e, r, o, t);
    return;
  }
  at(e, r, o, t);
}, st = (e, r, o) => {
  const t = e === "" ? r : Ae(r, e);
  t.classGroupId = o;
}, nt = (e, r, o, t) => {
  if (lt(e)) {
    pe(e(t), r, o, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(Xe(o, e));
}, at = (e, r, o, t) => {
  const n = Object.entries(e), l = n.length;
  for (let a = 0; a < l; a++) {
    const [p, i] = n[a];
    pe(i, Ae(r, p), o, t);
  }
}, Ae = (e, r) => {
  let o = e;
  const t = r.split(se), n = t.length;
  for (let l = 0; l < n; l++) {
    const a = t[l];
    let p = o.nextPart.get(a);
    p || (p = Me(), o.nextPart.set(a, p)), o = p;
  }
  return o;
}, lt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, it = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const n = (l, a) => {
    o[l] = a, r++, r > e && (r = 0, t = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(l) {
      let a = o[l];
      if (a !== void 0)
        return a;
      if ((a = t[l]) !== void 0)
        return n(l, a), a;
    },
    set(l, a) {
      l in o ? o[l] = a : n(l, a);
    }
  };
}, de = "!", ve = ":", ct = [], ye = (e, r, o, t, n) => ({
  modifiers: e,
  hasImportantModifier: r,
  baseClassName: o,
  maybePostfixModifierPosition: t,
  isExternal: n
}), dt = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = e;
  let t = (n) => {
    const l = [];
    let a = 0, p = 0, i = 0, f;
    const x = n.length;
    for (let M = 0; M < x; M++) {
      const N = n[M];
      if (a === 0 && p === 0) {
        if (N === ve) {
          l.push(n.slice(i, M)), i = M + 1;
          continue;
        }
        if (N === "/") {
          f = M;
          continue;
        }
      }
      N === "[" ? a++ : N === "]" ? a-- : N === "(" ? p++ : N === ")" && p--;
    }
    const _ = l.length === 0 ? n : n.slice(i);
    let w = _, z = !1;
    _.endsWith(de) ? (w = _.slice(0, -1), z = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      _.startsWith(de) && (w = _.slice(1), z = !0)
    );
    const v = f && f > i ? f - i : void 0;
    return ye(l, z, w, v);
  };
  if (r) {
    const n = r + ve, l = t;
    t = (a) => a.startsWith(n) ? l(a.slice(n.length)) : ye(ct, !1, a, void 0, !0);
  }
  if (o) {
    const n = t;
    t = (l) => o({
      className: l,
      parseClassName: n
    });
  }
  return t;
}, pt = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, t) => {
    r.set(o, 1e6 + t);
  }), (o) => {
    const t = [];
    let n = [];
    for (let l = 0; l < o.length; l++) {
      const a = o[l], p = a[0] === "[", i = r.has(a);
      p || i ? (n.length > 0 && (n.sort(), t.push(...n), n = []), t.push(a)) : n.push(a);
    }
    return n.length > 0 && (n.sort(), t.push(...n)), t;
  };
}, mt = (e) => ({
  cache: it(e.cacheSize),
  parseClassName: dt(e),
  sortModifiers: pt(e),
  ...Qe(e)
}), ut = /\s+/, ft = (e, r) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: n,
    sortModifiers: l
  } = r, a = [], p = e.trim().split(ut);
  let i = "";
  for (let f = p.length - 1; f >= 0; f -= 1) {
    const x = p[f], {
      isExternal: _,
      modifiers: w,
      hasImportantModifier: z,
      baseClassName: v,
      maybePostfixModifierPosition: M
    } = o(x);
    if (_) {
      i = x + (i.length > 0 ? " " + i : i);
      continue;
    }
    let N = !!M, T = t(N ? v.substring(0, M) : v);
    if (!T) {
      if (!N) {
        i = x + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (T = t(v), !T) {
        i = x + (i.length > 0 ? " " + i : i);
        continue;
      }
      N = !1;
    }
    const F = w.length === 0 ? "" : w.length === 1 ? w[0] : l(w).join(":"), $ = z ? F + de : F, E = $ + T;
    if (a.indexOf(E) > -1)
      continue;
    a.push(E);
    const V = n(T, N);
    for (let A = 0; A < V.length; ++A) {
      const q = V[A];
      a.push($ + q);
    }
    i = x + (i.length > 0 ? " " + i : i);
  }
  return i;
}, ht = (...e) => {
  let r = 0, o, t, n = "";
  for (; r < e.length; )
    (o = e[r++]) && (t = Ie(o)) && (n && (n += " "), n += t);
  return n;
}, Ie = (e) => {
  if (typeof e == "string")
    return e;
  let r, o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = Ie(e[t])) && (o && (o += " "), o += r);
  return o;
}, bt = (e, ...r) => {
  let o, t, n, l;
  const a = (i) => {
    const f = r.reduce((x, _) => _(x), e());
    return o = mt(f), t = o.cache.get, n = o.cache.set, l = p, p(i);
  }, p = (i) => {
    const f = t(i);
    if (f)
      return f;
    const x = ft(i, o);
    return n(i, x), x;
  };
  return l = a, (...i) => l(ht(...i));
}, xt = [], k = (e) => {
  const r = (o) => o[e] || xt;
  return r.isThemeGetter = !0, r;
}, Re = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Te = /^\((?:(\w[\w-]*):)?(.+)\)$/i, gt = /^\d+\/\d+$/, _t = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, kt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Z = (e) => gt.test(e), b = (e) => !!e && !Number.isNaN(Number(e)), G = (e) => !!e && Number.isInteger(Number(e)), ie = (e) => e.endsWith("%") && b(e.slice(0, -1)), P = (e) => _t.test(e), Ct = () => !0, zt = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wt.test(e) && !vt.test(e)
), Ee = () => !1, Nt = (e) => yt.test(e), St = (e) => kt.test(e), Mt = (e) => !c(e) && !d(e), Lt = (e) => U(e, Be, Ee), c = (e) => Re.test(e), O = (e) => U(e, Pe, zt), ce = (e) => U(e, Et, b), ke = (e) => U(e, Ve, Ee), At = (e) => U(e, je, St), re = (e) => U(e, Fe, Nt), d = (e) => Te.test(e), K = (e) => Y(e, Pe), It = (e) => Y(e, Vt), Ce = (e) => Y(e, Ve), Rt = (e) => Y(e, Be), Tt = (e) => Y(e, je), oe = (e) => Y(e, Fe, !0), U = (e, r, o) => {
  const t = Re.exec(e);
  return t ? t[1] ? r(t[1]) : o(t[2]) : !1;
}, Y = (e, r, o = !1) => {
  const t = Te.exec(e);
  return t ? t[1] ? r(t[1]) : o : !1;
}, Ve = (e) => e === "position" || e === "percentage", je = (e) => e === "image" || e === "url", Be = (e) => e === "length" || e === "size" || e === "bg-size", Pe = (e) => e === "length", Et = (e) => e === "number", Vt = (e) => e === "family-name", Fe = (e) => e === "shadow", jt = () => {
  const e = k("color"), r = k("font"), o = k("text"), t = k("font-weight"), n = k("tracking"), l = k("leading"), a = k("breakpoint"), p = k("container"), i = k("spacing"), f = k("radius"), x = k("shadow"), _ = k("inset-shadow"), w = k("text-shadow"), z = k("drop-shadow"), v = k("blur"), M = k("perspective"), N = k("aspect"), T = k("ease"), F = k("animate"), $ = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], E = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], V = () => [...E(), d, c], A = () => ["auto", "hidden", "clip", "visible", "scroll"], q = () => ["auto", "contain", "none"], u = () => [d, c, i], j = () => [Z, "full", "auto", ...u()], me = () => [G, "none", "subgrid", d, c], ue = () => ["auto", {
    span: ["full", G, d, c]
  }, G, d, c], X = () => [G, "auto", d, c], fe = () => ["auto", "min", "max", "fr", d, c], ne = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], B = () => ["auto", ...u()], H = () => [Z, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...u()], m = () => [e, d, c], he = () => [...E(), Ce, ke, {
    position: [d, c]
  }], be = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], xe = () => ["auto", "cover", "contain", Rt, Lt, {
    size: [d, c]
  }], ae = () => [ie, K, O], S = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    f,
    d,
    c
  ], L = () => ["", b, K, O], J = () => ["solid", "dashed", "dotted", "double"], ge = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], C = () => [b, ie, Ce, ke], _e = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    d,
    c
  ], Q = () => ["none", b, d, c], ee = () => ["none", b, d, c], le = () => [b, d, c], te = () => [Z, "full", ...u()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [P],
      breakpoint: [P],
      color: [Ct],
      container: [P],
      "drop-shadow": [P],
      ease: ["in", "out", "in-out"],
      font: [Mt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [P],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [P],
      shadow: [P],
      spacing: ["px", b],
      text: [P],
      "text-shadow": [P],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Z, c, d, N]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [b, c, d, p]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $()
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
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
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
        object: V()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: A()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": A()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": A()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
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
        inset: j()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": j()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": j()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: j()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: j()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: j()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: j()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: j()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: j()
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
        z: [G, "auto", d, c]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Z, "full", "auto", p, ...u()]
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
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [b, Z, "auto", "initial", "none", c]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", b, d, c]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", b, d, c]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [G, "first", "last", "none", d, c]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": me()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ue()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": X()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": X()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": me()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ue()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": X()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": X()
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
        "auto-cols": fe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": fe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: u()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": u()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": u()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...ne(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...ne()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": ne()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: u()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: u()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: u()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: u()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: u()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: u()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: u()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: u()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: u()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: B()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: B()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: B()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: B()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: B()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: B()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: B()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: B()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: B()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": u()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": u()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: H()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [p, "screen", ...H()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          p,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...H()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          p,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [a]
          },
          ...H()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...H()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...H()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...H()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, K, O]
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
        font: [t, d, ce]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ie, c]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [It, c, r]
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
        tracking: [n, d, c]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [b, "none", d, ce]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...u()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", d, c]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", d, c]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: m()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: m()
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
        decoration: [b, "from-font", "auto", d, O]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: m()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [b, "auto", d, c]
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
        indent: u()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", d, c]
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
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
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
        content: ["none", d, c]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
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
        bg: he()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: be()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: xe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, G, d, c],
          radial: ["", d, c],
          conic: [G, d, c]
        }, Tt, At]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: m()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ae()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ae()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ae()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: m()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: m()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: m()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: S()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": S()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": S()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": S()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": S()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": S()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": S()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": S()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": S()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": S()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": S()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": S()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": S()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": S()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": S()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...J(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...J(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: m()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": m()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": m()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": m()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": m()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": m()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": m()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": m()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": m()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: m()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...J(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [b, d, c]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", b, K, O]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: m()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          x,
          oe,
          re
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: m()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", _, oe, re]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": m()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: m()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [b, O]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": m()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": m()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", w, oe, re]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": m()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b, d, c]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ge(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ge()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [b]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": C()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": m()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": m()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": C()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": m()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": m()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": C()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": m()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": m()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": C()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": m()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": m()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": C()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": m()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": m()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": C()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": m()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": m()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": C()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": m()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": m()
      }],
      "mask-image-radial": [{
        "mask-radial": [d, c]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": m()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": m()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": E()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [b]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": C()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": m()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": m()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: he()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: be()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: xe()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", d, c]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          d,
          c
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: _e()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [b, d, c]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [b, d, c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          z,
          oe,
          re
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": m()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", b, d, c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [b, d, c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", b, d, c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b, d, c]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", b, d, c]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          d,
          c
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": _e()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [b, d, c]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [b, d, c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", b, d, c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [b, d, c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", b, d, c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [b, d, c]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b, d, c]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", b, d, c]
      }],
      // --------------
      // --- Tables ---
      // --------------
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
        "border-spacing": u()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": u()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": u()
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
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", d, c]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [b, "initial", d, c]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", T, d, c]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [b, d, c]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", F, d, c]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [M, d, c]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": V()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ee()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ee()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ee()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ee()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [d, c, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: V()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: te()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": te()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": te()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": te()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: m()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: m()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", d, c]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
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
        "scroll-m": u()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": u()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": u()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": u()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": u()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": u()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": u()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": u()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": u()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": u()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": u()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": u()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": u()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": u()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": u()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": u()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": u()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": u()
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
        "will-change": ["auto", "scroll", "contents", "transform", d, c]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...m()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [b, K, O, ce]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...m()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
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
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Bt = /* @__PURE__ */ bt(jt);
function h(...e) {
  return Bt(qe(e));
}
const Pt = {
  primary: "text-[#7e97b8] bg-[#dbeafe] border-[rgba(255,255,255,0.333)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(59_130_246_/_48%)] hover:text-[#516d91] hover:bg-[#bfdbfe] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(59_130_246_/_48%)]",
  secondary: "text-[#6b7280] bg-[#d1fae5] border-[rgba(255,255,255,0.4)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(34_197_94_/_35%)] hover:text-[#4b5563] hover:bg-[#a7f3d0] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(34_197_94_/_35%)]",
  danger: "text-[#ef4444] bg-[#fecaca] border-[rgba(255,255,255,0.5)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(239_68_68_/_35%)] hover:text-[#dc2626] hover:bg-[#fed7d7] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(239_68_68_/_35%)]",
  ghost: "text-[#6b7280] bg-transparent border-[rgba(255,255,255,0.2)] shadow-[-4px_-2px_16px_0px_rgba(255,255,255,0.1),4px_2px_16px_0px_rgba(0,0,0,0.1)] hover:text-[#4b5563] hover:bg-[rgba(255,255,255,0.05)] hover:shadow-[-2px_-1px_8px_0px_rgba(255,255,255,0.1),2px_1px_8px_0px_rgba(0,0,0,0.1)]"
}, Ft = {
  sm: "px-4 py-2 pl-5 text-xs h-8",
  md: "px-6 py-4 pl-7 text-[13px] h-10",
  lg: "px-8 py-5 pl-9 text-sm h-12"
}, Ge = y.forwardRef(({
  variant: e = "primary",
  size: r = "md",
  loading: o = !1,
  disabled: t = !1,
  className: n,
  children: l,
  ...a
}, p) => /* @__PURE__ */ g(
  "button",
  {
    ref: p,
    className: h(
      "flex items-center justify-center gap-2.5",
      "font-inherit font-medium",
      "uppercase tracking-[0.4px]",
      "border-2 border-solid",
      "rounded-[40px]",
      "transform translate-x-0 translate-y-0 rotate-0",
      "transition-all duration-200",
      "active:shadow-none",
      "focus-visible focus:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      Pt[e],
      Ft[r],
      n
    ),
    disabled: t || o,
    ...a,
    children: [
      o && /* @__PURE__ */ g(
        "svg",
        {
          className: "animate-spin h-6 w-6",
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
      ),
      l
    ]
  }
));
Ge.displayName = "Button";
const Gt = "_button_1c7zz_7", $t = "_state_1c7zz_79", Ht = "_icon_1c7zz_151", Ot = "_outline_1c7zz_205", I = {
  button: Gt,
  "button--size-sm": "_button--size-sm_1c7zz_63",
  state: $t,
  "button--size-md": "_button--size-md_1c7zz_87",
  "button--size-lg": "_button--size-lg_1c7zz_111",
  icon: Ht,
  outline: Ot,
  "state--default": "_state--default_1c7zz_229",
  "state--sent": "_state--sent_1c7zz_651"
}, ze = (e) => e.split("").map((r, o) => /* @__PURE__ */ s("span", { style: { "--i": o }, children: r === " " ? " " : r }, o)), Dt = {
  sm: I["button--size-sm"],
  md: I["button--size-md"],
  lg: I["button--size-lg"]
}, Wt = {
  primary: "text-[#7e97b8] bg-[#dbeafe] border-[rgba(255,255,255,0.333)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(59_130_246_/_48%)] hover:text-[#516d91] hover:bg-[#bfdbfe] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(59_130_246_/_48%)]",
  secondary: "text-[#6b7280] bg-[#d1fae5] border-[rgba(255,255,255,0.4)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(34_197_94_/_35%)] hover:text-[#4b5563] hover:bg-[#a7f3d0] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(34_197_94_/_35%)]",
  danger: "text-[#ef4444] bg-[#fecaca] border-[rgba(255,255,255,0.5)] shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(239_68_68_/_35%)] hover:text-[#dc2626] hover:bg-[#fed7d7] hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(239_68_68_/_35%)]"
}, _r = ({
  children: e = "Send Message",
  successText: r = "Sent",
  onSubmit: o,
  disabled: t,
  variant: n = "primary",
  size: l = "md",
  className: a,
  ...p
}) => {
  const [i, f] = Ne(!1), x = We(), _ = Ze(null);
  return /* @__PURE__ */ g(
    "button",
    {
      ...p,
      ref: _,
      type: "submit",
      disabled: t,
      onClick: async (z) => {
        if (o && !i)
          try {
            await o(), f(!0), _.current?.focus(), setTimeout(() => {
              f(!1), _.current?.blur();
            }, 3e3);
          } catch (v) {
            console.error("Submit failed:", v);
          }
        p.onClick?.(z);
      },
      className: h(I.button, Wt[n], Dt[l], a),
      "aria-label": i ? "Submission successful" : p["aria-label"] || "Submit",
      "aria-disabled": t,
      children: [
        /* @__PURE__ */ s("div", { className: I.outline }),
        /* @__PURE__ */ g("div", { className: h(I.state, I["state--default"]), children: [
          /* @__PURE__ */ s("div", { className: I.icon, children: /* @__PURE__ */ g(
            "svg",
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ g("g", { style: { filter: `url(#${x})` }, children: [
                  /* @__PURE__ */ s(
                    "path",
                    {
                      d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      fill: "#6b7280"
                    }
                  ),
                  /* @__PURE__ */ s(
                    "path",
                    {
                      d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      fill: "#6b7280"
                    }
                  )
                ] }),
                /* @__PURE__ */ s("defs", { children: /* @__PURE__ */ s("filter", { id: x, children: /* @__PURE__ */ s(
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
          /* @__PURE__ */ s("p", { children: ze(typeof e == "string" ? e : "Send Message") })
        ] }),
        /* @__PURE__ */ g("div", { className: h(I.state, I["state--sent"]), children: [
          /* @__PURE__ */ s("div", { className: I.icon, children: /* @__PURE__ */ s(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              height: "1em",
              width: "1em",
              strokeWidth: "0.5px",
              stroke: "black",
              children: /* @__PURE__ */ g("g", { style: { filter: `url(#${x})` }, children: [
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
          /* @__PURE__ */ s("p", { children: ze(r) })
        ] })
      ]
    }
  );
}, Zt = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-[10px] text-base",
  lg: "px-6 py-3 text-lg"
}, $e = y.forwardRef(({
  size: e = "md",
  error: r = !1,
  className: o,
  disabled: t,
  ...n
}, l) => /* @__PURE__ */ g("div", { className: "relative inline-flex items-center", children: [
  /* @__PURE__ */ s(
    "input",
    {
      ref: l,
      className: h(
        "bg-transparent",
        "border-none",
        "outline-none",
        "w-[247px]",
        "rounded-full",
        "text-text-primary",
        "transition-colors duration-200",
        "disabled:text-text-disabled disabled:cursor-not-allowed",
        r ? "shadow-[inset_2px_5px_10px_var(--input-shadow-error)] cursor-help" : "shadow-[inset_2px_5px_10px_var(--input-shadow)]",
        Zt[e],
        o
      ),
      style: r ? { paddingRight: "2rem" } : void 0,
      disabled: t,
      "aria-invalid": r,
      ...n
    }
  ),
  r && /* @__PURE__ */ s(
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
$e.displayName = "Input";
const Ut = y.forwardRef(({
  label: e,
  error: r = !1,
  className: o,
  disabled: t,
  checked: n,
  onChange: l,
  ...a
}, p) => {
  const i = y.useId();
  return /* @__PURE__ */ g("div", { className: h("flex items-center space-x-2", t && "cursor-not-allowed", r && !t && "cursor-help", o), children: [
    /* @__PURE__ */ g("label", { className: h("checkbox-container", t && "opacity-50 cursor-not-allowed", r && !t && "cursor-help", !t && !r && "cursor-pointer"), children: [
      /* @__PURE__ */ s(
        "input",
        {
          ref: p,
          id: i,
          type: "checkbox",
          disabled: t,
          checked: n,
          onChange: l,
          "aria-checked": n,
          "aria-invalid": r,
          "aria-disabled": t,
          ...a
        }
      ),
      /* @__PURE__ */ s("svg", { viewBox: "0 0 64 64", height: "1em", width: "1em", children: /* @__PURE__ */ s(
        "path",
        {
          d: "M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",
          pathLength: "575.0541381835938",
          className: h("checkbox-path", r && "checkbox-path-error")
        }
      ) })
    ] }),
    e && /* @__PURE__ */ s(
      "label",
      {
        htmlFor: i,
        className: h(
          "text-sm font-medium select-none",
          t ? "text-text-disabled cursor-not-allowed" : r ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
});
Ut.displayName = "Checkbox";
const wr = ({
  label: e,
  error: r = !1,
  className: o,
  disabled: t,
  checked: n,
  onChange: l,
  id: a,
  ...p
}) => {
  const i = a || y.useId(), f = (x) => {
    if ((x.key === "Enter" || x.key === " ") && !t) {
      x.preventDefault();
      const _ = document.getElementById(i);
      if (_) {
        _.checked = !_.checked;
        const w = new Event("change", { bubbles: !0 });
        _.dispatchEvent(w);
      }
    }
  };
  return /* @__PURE__ */ g("div", { className: h("toggle-wrapper", r && "toggle-wrapper--error", t && "cursor-not-allowed", r && !t && "cursor-help", o), children: [
    /* @__PURE__ */ s(
      "input",
      {
        id: i,
        className: "toggle-checkbox",
        type: "checkbox",
        checked: n,
        onChange: l,
        disabled: t,
        role: "switch",
        "aria-checked": n,
        "aria-disabled": t,
        "aria-invalid": r,
        ...p
      }
    ),
    /* @__PURE__ */ s(
      "div",
      {
        className: h("toggle-container", t && "cursor-not-allowed", r && !t && "cursor-help"),
        onKeyDown: f,
        tabIndex: t ? -1 : 0,
        role: "button",
        "aria-hidden": "true",
        children: /* @__PURE__ */ s("div", { className: "toggle-button", children: /* @__PURE__ */ s("div", { className: "toggle-button-circles-container", children: Array.from({ length: 12 }).map((x, _) => /* @__PURE__ */ s("div", { className: "toggle-button-circle" }, _)) }) })
      }
    ),
    e && /* @__PURE__ */ s(
      "label",
      {
        htmlFor: i,
        className: h(
          "text-sm font-medium select-none ml-2",
          t ? "text-text-disabled cursor-not-allowed" : r ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
}, vr = ({ className: e, ...r }) => /* @__PURE__ */ s(
  "div",
  {
    className: h(
      "card",
      "w-full",
      "rounded-lg border border-border",
      "bg-surface-secondary text-text-primary",
      "shadow-sm",
      e
    ),
    ...r
  }
), yr = ({ className: e, ...r }) => /* @__PURE__ */ s(
  "div",
  {
    className: h("flex items-start justify-between gap-4 px-6 py-4 border-b border-border", e),
    ...r
  }
), kr = ({ className: e, ...r }) => /* @__PURE__ */ s("div", { className: h("px-6 py-4", e), ...r }), Cr = ({ className: e, ...r }) => /* @__PURE__ */ s(
  "div",
  {
    className: h("flex items-center justify-end gap-3 px-6 py-4 border-t border-border", e),
    ...r
  }
), He = {
  sm: 0.7,
  md: 1,
  lg: 1.3
}, zr = ({ size: e = "md", className: r, ...o }) => {
  const t = 8 * He[e];
  return /* @__PURE__ */ g("div", { className: h("loader", r), style: { fontSize: `${t}px` }, ...o, children: [
    /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
    /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
  ] });
}, Nr = ({
  size: e = "md",
  variant: r = "inline",
  label: o,
  className: t,
  ...n
}) => {
  const l = 8 * He[e];
  return r === "container" ? /* @__PURE__ */ s(
    "div",
    {
      className: h(
        "relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary flex items-center justify-center",
        t
      ),
      ...n,
      children: /* @__PURE__ */ g("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ g("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
          /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
          /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
        ] }),
        o && /* @__PURE__ */ s("span", { className: "text-sm text-text-secondary", children: o })
      ] })
    }
  ) : /* @__PURE__ */ g("div", { className: h("inline-flex items-center gap-2", t), ...n, children: [
    /* @__PURE__ */ g("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
      /* @__PURE__ */ s("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) }),
      /* @__PURE__ */ s("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s("div", { className: "loader-circle" }) })
    ] }),
    o && /* @__PURE__ */ s("span", { className: "text-sm text-text-secondary", children: o })
  ] });
}, Oe = y.createContext(null), Sr = ({
  name: e,
  legend: r,
  value: o,
  defaultValue: t,
  disabled: n = !1,
  onValueChange: l,
  className: a,
  children: p,
  ...i
}) => {
  const f = o !== void 0, [x, _] = y.useState(t), w = f ? o : x, z = y.useCallback(
    (v) => {
      f || _(v), l?.(v);
    },
    [f, l]
  );
  return /* @__PURE__ */ s(Oe.Provider, { value: { name: e, value: w, disabled: n, onValueChange: z }, children: /* @__PURE__ */ g(
    "fieldset",
    {
      className: h("radio-input", n && "opacity-60 cursor-not-allowed", a),
      disabled: n,
      ...i,
      children: [
        r && /* @__PURE__ */ s("legend", { className: "text-sm font-medium text-text-primary", children: r }),
        p
      ]
    }
  ) });
}, Mr = ({
  label: e,
  value: r,
  disabled: o,
  checked: t,
  defaultChecked: n,
  name: l,
  onChange: a,
  onCheckedChange: p,
  className: i,
  ...f
}) => {
  const x = y.useContext(Oe), _ = y.useId(), w = !!(o ?? x?.disabled), z = l ?? x?.name, v = !!x, M = t !== void 0, [N, T] = y.useState(!!n), F = v ? x?.value === r : M ? !!t : N, $ = (V) => {
    const A = V.target.checked;
    v && A ? x?.onValueChange?.(r) : M || T(A), p?.(A), a?.(V);
  }, E = /* @__PURE__ */ g("label", { htmlFor: _, className: h(w && "cursor-not-allowed", i), role: "radio", "aria-checked": F, "aria-disabled": w, children: [
    /* @__PURE__ */ s(
      "input",
      {
        id: _,
        type: "radio",
        name: z,
        value: r,
        checked: F,
        disabled: w,
        onChange: $,
        role: "radio",
        "aria-checked": F,
        "aria-disabled": w,
        ...f
      }
    ),
    /* @__PURE__ */ s("span", { children: e || "" })
  ] });
  return v ? E : /* @__PURE__ */ s("div", { className: "radio-input", children: E });
}, Yt = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
  left: "right-full top-1/2 -translate-y-1/2 mr-1",
  right: "left-full top-1/2 -translate-y-1/2 ml-1"
}, qt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-px",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-px",
  left: "left-full top-1/2 -translate-y-1/2 -ml-px",
  right: "right-full top-1/2 -translate-y-1/2 -mr-px"
}, Kt = {
  top: "border-t-border border-r-transparent border-b-transparent border-l-transparent border-t-[6px] border-r-[6px] border-l-[6px]",
  bottom: "border-b-border border-r-transparent border-t-transparent border-l-transparent border-b-[6px] border-r-[6px] border-l-[6px]",
  left: "border-l-border border-r-transparent border-t-transparent border-b-transparent border-l-[6px] border-t-[6px] border-b-[6px]",
  right: "border-r-border border-l-transparent border-t-transparent border-b-transparent border-r-[6px] border-t-[6px] border-b-[6px]"
}, Xt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-[5px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",
  left: "left-full top-1/2 -translate-y-1/2 -ml-[5px]",
  right: "right-full top-1/2 -translate-y-1/2 -mr-[5px]"
}, Lr = ({
  open: e,
  onOpenChange: r,
  content: o,
  position: t = "top",
  delay: n = 0,
  disabled: l = !1,
  children: a,
  className: p
}) => {
  const i = y.useRef(null), f = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null);
  };
  y.useEffect(() => f, []);
  const x = () => {
    if (!l) {
      if (f(), n > 0) {
        i.current = window.setTimeout(() => r?.(!0), n);
        return;
      }
      r?.(!0);
    }
  }, _ = () => {
    f(), r?.(!1);
  }, w = y.Children.only(a), z = y.useId();
  return /* @__PURE__ */ g("span", { className: h("relative inline-block", p), children: [
    y.cloneElement(w, {
      "aria-describedby": e && !l ? z : void 0,
      onMouseEnter: (v) => {
        w.props.onMouseEnter?.(v), x();
      },
      onMouseLeave: (v) => {
        w.props.onMouseLeave?.(v), _();
      },
      onFocus: (v) => {
        w.props.onFocus?.(v), x();
      },
      onBlur: (v) => {
        w.props.onBlur?.(v), _();
      }
    }),
    e && !l && /* @__PURE__ */ g(
      "span",
      {
        id: z,
        role: "tooltip",
        className: h(
          "absolute z-50 pointer-events-none",
          Yt[t],
          "whitespace-nowrap",
          "rounded-md border border-border bg-surface text-text-primary",
          "px-3 py-2 text-xs shadow-md"
        ),
        children: [
          o,
          /* @__PURE__ */ s(
            "span",
            {
              className: h(
                "absolute w-0 h-0",
                qt[t],
                Kt[t]
              )
            }
          ),
          /* @__PURE__ */ s(
            "span",
            {
              className: h(
                "absolute w-0 h-0 bg-surface",
                Xt[t],
                t === "top" && "border-t-[5px] border-r-[5px] border-l-[5px] border-t-surface border-r-transparent border-l-transparent",
                t === "bottom" && "border-b-[5px] border-r-[5px] border-l-[5px] border-b-surface border-r-transparent border-l-transparent",
                t === "left" && "border-l-[5px] border-t-[5px] border-b-[5px] border-l-surface border-t-transparent border-b-transparent",
                t === "right" && "border-r-[5px] border-t-[5px] border-b-[5px] border-r-surface border-t-transparent border-b-transparent"
              )
            }
          )
        ]
      }
    )
  ] });
}, De = Ue(void 0), Ar = ({
  children: e,
  defaultTheme: r
}) => {
  const o = () => {
    if (typeof window < "u") {
      const a = localStorage.getItem("theme");
      if (a === "light" || a === "dark")
        return a;
    }
    return typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r || "dark";
  }, [t, n] = Ne(o), l = y.useCallback((a) => {
    n(a), typeof window < "u" && localStorage.setItem("theme", a);
  }, []);
  return y.useEffect(() => {
    if (typeof document > "u") return;
    const a = document.documentElement;
    t === "light" ? (a.classList.add("theme-light"), a.classList.remove("theme-dark")) : (a.classList.add("theme-dark"), a.classList.remove("theme-light"));
  }, [t]), y.useEffect(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), p = (i) => {
      typeof window < "u" && !localStorage.getItem("theme") && n(i.matches ? "dark" : "light");
    };
    if (a.addEventListener)
      return a.addEventListener("change", p), () => a.removeEventListener("change", p);
    if (a.addListener)
      return a.addListener(p), () => a.removeListener(p);
  }, []), /* @__PURE__ */ s(De.Provider, { value: { theme: t, setTheme: l }, children: e });
}, Jt = () => {
  const e = Ye(De);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, Ir = ({
  className: e,
  showLabel: r = !0
}) => {
  const { theme: o, setTheme: t } = Jt(), n = o === "dark", l = () => {
    t(n ? "light" : "dark");
  }, a = (p) => {
    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), l());
  };
  return /* @__PURE__ */ g("div", { className: h("flex items-center gap-3", e), children: [
    /* @__PURE__ */ g(
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
          /* @__PURE__ */ g("div", { className: "theme-switch__container", children: [
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
            /* @__PURE__ */ s("div", { className: "theme-switch__circle-container", children: /* @__PURE__ */ s("div", { className: "theme-switch__sun-moon-container", children: /* @__PURE__ */ g("div", { className: "theme-switch__moon", children: [
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s("div", { className: "theme-switch__spot" })
            ] }) }) })
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ s("span", { className: "text-sm font-medium text-text-primary", children: n ? "Dark" : "Light" })
  ] });
}, Qt = ({
  width: e = 315,
  aspectRatio: r = 1.33,
  className: o,
  children: t,
  ...n
}) => /* @__PURE__ */ g(
  "div",
  {
    className: h(
      "relative flex justify-center items-center overflow-hidden",
      "bg-surface-tertiary rounded-[24px]",
      "shadow-[0_4px_8px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.2),0_0_8px_rgba(255,255,255,0.1),0_0_16px_rgba(255,255,255,0.08)]",
      "z-[8]",
      o
    ),
    style: {
      width: `${e + 1}px`,
      height: `${e * r + 1}px`
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
      t
    ]
  }
), er = ({
  width: e = 315,
  aspectRatio: r = 1.33,
  className: o,
  children: t,
  ...n
}) => /* @__PURE__ */ s(
  "div",
  {
    className: h(
      "absolute bg-surface-tertiary rounded-[24px] p-7 z-[10]",
      "backdrop-blur-[15px]",
      "shadow-[inset_0_40px_60px_-8px_rgba(255,255,255,0.12),inset_4px_0_12px_-6px_rgba(255,255,255,0.12),inset_0_0_12px_-4px_rgba(255,255,255,0.12)]",
      o
    ),
    style: {
      width: `${e}px`,
      height: `${e * r}px`
    },
    ...n,
    children: t
  }
), tr = ({ className: e, ...r }) => /* @__PURE__ */ g(
  "div",
  {
    className: h(
      "w-[65px] h-[65px] rounded-[20px] border-2 border-white",
      "bg-gradient-to-br from-white/20 to-black/20",
      "shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.06)]",
      "flex justify-center items-center relative",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ s("div", { className: "absolute bottom-[10px] w-1/2 h-[20%] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] border-[2.5px] border-white" }),
      /* @__PURE__ */ s("div", { className: "absolute top-[10px] w-[30%] h-[30%] rounded-full border-[2.5px] border-white" })
    ]
  }
), Rr = ({
  title: e,
  showLogo: r = !1,
  footer: o,
  width: t = 315,
  aspectRatio: n = 1.33,
  className: l,
  children: a,
  ...p
}) => /* @__PURE__ */ s(Qt, { width: t, aspectRatio: n, children: /* @__PURE__ */ g(er, { width: t, aspectRatio: n, children: [
  /* @__PURE__ */ g(
    "form",
    {
      className: h("flex justify-center items-center flex-col gap-[10px]", l),
      ...p,
      children: [
        r && /* @__PURE__ */ s("div", { className: "flex justify-center items-center mb-2", children: /* @__PURE__ */ s(tr, {}) }),
        e && /* @__PURE__ */ s("div", { className: "w-full text-center text-2xl font-bold py-1.5 text-text-primary flex justify-center items-center", children: e }),
        a
      ]
    }
  ),
  o && /* @__PURE__ */ s("div", { className: "w-full text-left text-text-secondary text-xs mt-4", children: o })
] }) }), Tr = ({
  label: e,
  error: r,
  className: o,
  size: t,
  ...n
}) => /* @__PURE__ */ g("div", { className: "w-full", children: [
  e && /* @__PURE__ */ s("label", { className: "block text-text-primary text-sm mb-1.5", children: e }),
  /* @__PURE__ */ s("div", { className: "flex justify-center", children: /* @__PURE__ */ s(
    $e,
    {
      className: h(
        "p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none",
        "focus:border focus:border-border-focus",
        o
      ),
      error: r,
      size: t,
      ...n
    }
  ) })
] }), Er = ({
  variant: e = "primary",
  className: r,
  children: o,
  ...t
}) => e === "google" ? /* @__PURE__ */ s(
  "button",
  {
    className: h(
      "w-full h-10 border-none rounded-[20px] text-sm font-semibold cursor-pointer",
      "grid place-content-center gap-2.5 bg-surface-secondary text-text-primary",
      "transition-all duration-300",
      "shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)]",
      "hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)]",
      "flex justify-center items-center gap-2.5",
      r
    ),
    ...t,
    children: o
  }
) : /* @__PURE__ */ s(
  Ge,
  {
    variant: "primary",
    className: h(
      "w-full h-10 rounded-[20px] text-sm font-semibold mt-1.5",
      r
    ),
    ...t,
    children: o
  }
), Vr = ({
  className: e,
  children: r,
  ...o
}) => /* @__PURE__ */ s(
  "div",
  {
    className: h(
      "w-full text-left text-text-secondary text-xs",
      e
    ),
    ...o,
    children: r
  }
), jr = ({
  className: e,
  children: r,
  ...o
}) => /* @__PURE__ */ s(
  "a",
  {
    className: h(
      "relative text-text-secondary font-semibold no-underline transition-colors duration-300 ease-in-out",
      "hover:text-white",
      'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-[width] after:duration-300 after:ease-in-out',
      "hover:after:w-full",
      e
    ),
    ...o,
    children: r
  }
), rr = "_container_1b55k_1", or = "_input_1b55k_119", sr = "_search__icon_1b55k_177", R = {
  container: rr,
  "container--size-sm": "_container--size-sm_1b55k_25",
  "container--size-md": "_container--size-md_1b55k_33",
  "container--size-lg": "_container--size-lg_1b55k_41",
  "search-container": "_search-container_1b55k_49",
  input: or,
  "input--size-sm": "_input--size-sm_1b55k_147",
  "input--size-md": "_input--size-md_1b55k_157",
  "input--size-lg": "_input--size-lg_1b55k_167",
  search__icon: sr
}, nr = {
  sm: {
    container: R["container--size-sm"],
    input: R["input--size-sm"]
  },
  md: {
    container: R["container--size-md"],
    input: R["input--size-md"]
  },
  lg: {
    container: R["container--size-lg"],
    input: R["input--size-lg"]
  }
}, ar = y.forwardRef(({
  size: e = "md",
  className: r,
  inputClassName: o,
  searchContainerClassName: t,
  ...n
}, l) => {
  const a = nr[e];
  return /* @__PURE__ */ s("div", { className: h(R.container, a.container, r), children: /* @__PURE__ */ g("div", { className: h(R["search-container"], t), children: [
    /* @__PURE__ */ s(
      "input",
      {
        ref: l,
        className: h(R.input, a.input, o),
        type: "search",
        ...n
      }
    ),
    /* @__PURE__ */ s("svg", { viewBox: "0 0 24 24", className: R.search__icon, "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ s("g", { children: /* @__PURE__ */ s("path", { d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" }) }) })
  ] }) });
});
ar.displayName = "SearchBar";
const lr = "_list_hdx8a_1", ir = "_listHorizontal_hdx8a_11", cr = "_iconContent_hdx8a_15", dr = "_tooltip_hdx8a_25", pr = "_tooltipHorizontal_hdx8a_46", mr = "_link_hdx8a_60", ur = "_filled_hdx8a_87", D = {
  list: lr,
  listHorizontal: ir,
  iconContent: cr,
  tooltip: dr,
  tooltipHorizontal: pr,
  link: mr,
  filled: ur
}, fr = (e) => {
  switch (e) {
    case "linkedin":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z",
          fill: "currentColor"
        }
      );
    case "github":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
          fill: "currentColor"
        }
      );
    case "instagram":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
          fill: "currentColor"
        }
      );
    case "youtube":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z",
          fill: "currentColor"
        }
      );
    case "facebook":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z",
          fill: "currentColor"
        }
      );
    case "spotify":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm3.67 11.56c-.13.21-.41.28-.62.15-1.69-1.03-3.81-1.26-6.3-.69-.24.05-.48-.1-.53-.34-.05-.24.1-.48.34-.53 2.7-.63 5.01-.37 6.89.81.21.13.28.41.15.62zm.89-1.96c-.16.25-.5.33-.75.17-1.93-1.18-4.87-1.52-7.15-.83-.29.08-.59-.1-.67-.39-.08-.29.1-.59.39-.67 2.58-.78 5.8-.4 7.98.95.25.16.33.5.17.75zm.11-2.08C10.15 6.6 6.03 6.4 3.48 7.23c-.36.11-.74-.06-.85-.42-.11-.36.06-.74.42-.85 2.99-.91 7.49-.68 10.27 1.07.32.19.42.63.23.95-.19.32-.63.42-.95.23z",
          fill: "currentColor"
        }
      );
    case "telegram":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z",
          fill: "currentColor"
        }
      );
    case "pinterest":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.937-3.977.937-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.223.907-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z",
          fill: "currentColor"
        }
      );
    case "x":
      return /* @__PURE__ */ s(
        "path",
        {
          d: "M9.653 7.722 15.5 1h-1.18L9.11 7.077 5.5 1H1l6.086 8.844L1 15h1.18l5.21-6.06L11.5 15H16zM2.5 2.18h1.5L13.5 13.82H12z",
          fill: "currentColor"
        }
      );
    default:
      return null;
  }
}, hr = (e) => ({
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
  youtube: "YouTube",
  facebook: "Facebook",
  spotify: "Spotify",
  telegram: "Telegram",
  pinterest: "Pinterest",
  x: "X"
})[e], br = y.forwardRef(({
  links: e,
  className: r,
  orientation: o = "vertical",
  ...t
}, n) => /* @__PURE__ */ s(
  "ul",
  {
    ref: n,
    className: h(
      D.list,
      o === "horizontal" && D.listHorizontal,
      r
    ),
    ...t,
    children: e.map((l, a) => {
      const p = l.label || hr(l.platform), i = fr(l.platform);
      return /* @__PURE__ */ g("li", { className: D.iconContent, children: [
        /* @__PURE__ */ g(
          "a",
          {
            href: l.url,
            "aria-label": p,
            "data-social": l.platform,
            className: D.link,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ s("div", { className: D.filled }),
              /* @__PURE__ */ s(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  fill: "currentColor",
                  viewBox: "0 0 16 16",
                  xmlSpace: "preserve",
                  "aria-hidden": "true",
                  children: i
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s("div", { className: h(
          D.tooltip,
          o === "horizontal" && D.tooltipHorizontal
        ), children: p })
      ] }, `${l.platform}-${a}`);
    })
  }
));
br.displayName = "SocialLinks";
export {
  Ge as Button,
  vr as Card,
  kr as CardContent,
  Cr as CardFooter,
  yr as CardHeader,
  Ut as Checkbox,
  Rr as Form,
  Er as FormButton,
  Tr as FormField,
  Vr as FormFooter,
  jr as FormFooterLink,
  $e as Input,
  Nr as Loader,
  Mr as RadioButton,
  Sr as RadioGroup,
  ar as SearchBar,
  br as SocialLinks,
  zr as Spinner,
  _r as SubmitButton,
  Ar as ThemeProvider,
  Ir as ThemeSwitch,
  wr as Toggle,
  Lr as Tooltip,
  Jt as useTheme
};
