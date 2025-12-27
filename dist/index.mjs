import { jsxs as x, jsx as a } from "react/jsx-runtime";
import C, { useState as _e, useId as $e, useRef as We, createContext as Ze, useContext as Ue } from "react";
function Ne(e) {
  var r, o, t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (r = 0; r < s; r++) e[r] && (o = Ne(e[r])) && (t && (t += " "), t += o);
  } else for (o in e) e[o] && (t && (t += " "), t += o);
  return t;
}
function He() {
  for (var e, r, o = 0, t = "", s = arguments.length; o < s; o++) (e = arguments[o]) && (r = Ne(e)) && (t && (t += " "), t += r);
  return t;
}
const qe = (e, r) => {
  const o = new Array(e.length + r.length);
  for (let t = 0; t < e.length; t++)
    o[t] = e[t];
  for (let t = 0; t < r.length; t++)
    o[e.length + t] = r[t];
  return o;
}, Ke = (e, r) => ({
  classGroupId: e,
  validator: r
}), ze = (e = /* @__PURE__ */ new Map(), r = null, o) => ({
  nextPart: e,
  validators: r,
  classGroupId: o
}), re = "-", xe = [], Ye = "arbitrary..", Xe = (e) => {
  const r = Qe(e), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: t
  } = e;
  return {
    getClassGroupId: (n) => {
      if (n.startsWith("[") && n.endsWith("]"))
        return Je(n);
      const m = n.split(re), i = m[0] === "" && m.length > 1 ? 1 : 0;
      return Se(m, i, r);
    },
    getConflictingClassGroupIds: (n, m) => {
      if (m) {
        const i = t[n], u = o[n];
        return i ? u ? qe(u, i) : i : u || xe;
      }
      return o[n] || xe;
    }
  };
}, Se = (e, r, o) => {
  if (e.length - r === 0)
    return o.classGroupId;
  const s = e[r], l = o.nextPart.get(s);
  if (l) {
    const u = Se(e, r + 1, l);
    if (u) return u;
  }
  const n = o.validators;
  if (n === null)
    return;
  const m = r === 0 ? e.join(re) : e.slice(r).join(re), i = n.length;
  for (let u = 0; u < i; u++) {
    const b = n[u];
    if (b.validator(m))
      return b.classGroupId;
  }
}, Je = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const r = e.slice(1, -1), o = r.indexOf(":"), t = r.slice(0, o);
  return t ? Ye + t : void 0;
})(), Qe = (e) => {
  const {
    theme: r,
    classGroups: o
  } = e;
  return et(o, r);
}, et = (e, r) => {
  const o = ze();
  for (const t in e) {
    const s = e[t];
    ce(s, o, t, r);
  }
  return o;
}, ce = (e, r, o, t) => {
  const s = e.length;
  for (let l = 0; l < s; l++) {
    const n = e[l];
    tt(n, r, o, t);
  }
}, tt = (e, r, o, t) => {
  if (typeof e == "string") {
    rt(e, r, o);
    return;
  }
  if (typeof e == "function") {
    ot(e, r, o, t);
    return;
  }
  st(e, r, o, t);
}, rt = (e, r, o) => {
  const t = e === "" ? r : Me(r, e);
  t.classGroupId = o;
}, ot = (e, r, o, t) => {
  if (nt(e)) {
    ce(e(t), r, o, t);
    return;
  }
  r.validators === null && (r.validators = []), r.validators.push(Ke(o, e));
}, st = (e, r, o, t) => {
  const s = Object.entries(e), l = s.length;
  for (let n = 0; n < l; n++) {
    const [m, i] = s[n];
    ce(i, Me(r, m), o, t);
  }
}, Me = (e, r) => {
  let o = e;
  const t = r.split(re), s = t.length;
  for (let l = 0; l < s; l++) {
    const n = t[l];
    let m = o.nextPart.get(n);
    m || (m = ze(), o.nextPart.set(n, m)), o = m;
  }
  return o;
}, nt = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, at = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let r = 0, o = /* @__PURE__ */ Object.create(null), t = /* @__PURE__ */ Object.create(null);
  const s = (l, n) => {
    o[l] = n, r++, r > e && (r = 0, t = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(l) {
      let n = o[l];
      if (n !== void 0)
        return n;
      if ((n = t[l]) !== void 0)
        return s(l, n), n;
    },
    set(l, n) {
      l in o ? o[l] = n : s(l, n);
    }
  };
}, ie = "!", we = ":", lt = [], ye = (e, r, o, t, s) => ({
  modifiers: e,
  hasImportantModifier: r,
  baseClassName: o,
  maybePostfixModifierPosition: t,
  isExternal: s
}), it = (e) => {
  const {
    prefix: r,
    experimentalParseClassName: o
  } = e;
  let t = (s) => {
    const l = [];
    let n = 0, m = 0, i = 0, u;
    const b = s.length;
    for (let M = 0; M < b; M++) {
      const z = s[M];
      if (n === 0 && m === 0) {
        if (z === we) {
          l.push(s.slice(i, M)), i = M + 1;
          continue;
        }
        if (z === "/") {
          u = M;
          continue;
        }
      }
      z === "[" ? n++ : z === "]" ? n-- : z === "(" ? m++ : z === ")" && m--;
    }
    const w = l.length === 0 ? s : s.slice(i);
    let y = w, N = !1;
    w.endsWith(ie) ? (y = w.slice(0, -1), N = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      w.startsWith(ie) && (y = w.slice(1), N = !0)
    );
    const v = u && u > i ? u - i : void 0;
    return ye(l, N, y, v);
  };
  if (r) {
    const s = r + we, l = t;
    t = (n) => n.startsWith(s) ? l(n.slice(s.length)) : ye(lt, !1, n, void 0, !0);
  }
  if (o) {
    const s = t;
    t = (l) => o({
      className: l,
      parseClassName: s
    });
  }
  return t;
}, ct = (e) => {
  const r = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((o, t) => {
    r.set(o, 1e6 + t);
  }), (o) => {
    const t = [];
    let s = [];
    for (let l = 0; l < o.length; l++) {
      const n = o[l], m = n[0] === "[", i = r.has(n);
      m || i ? (s.length > 0 && (s.sort(), t.push(...s), s = []), t.push(n)) : s.push(n);
    }
    return s.length > 0 && (s.sort(), t.push(...s)), t;
  };
}, dt = (e) => ({
  cache: at(e.cacheSize),
  parseClassName: it(e),
  sortModifiers: ct(e),
  ...Xe(e)
}), mt = /\s+/, pt = (e, r) => {
  const {
    parseClassName: o,
    getClassGroupId: t,
    getConflictingClassGroupIds: s,
    sortModifiers: l
  } = r, n = [], m = e.trim().split(mt);
  let i = "";
  for (let u = m.length - 1; u >= 0; u -= 1) {
    const b = m[u], {
      isExternal: w,
      modifiers: y,
      hasImportantModifier: N,
      baseClassName: v,
      maybePostfixModifierPosition: M
    } = o(b);
    if (w) {
      i = b + (i.length > 0 ? " " + i : i);
      continue;
    }
    let z = !!M, R = t(z ? v.substring(0, M) : v);
    if (!R) {
      if (!z) {
        i = b + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (R = t(v), !R) {
        i = b + (i.length > 0 ? " " + i : i);
        continue;
      }
      z = !1;
    }
    const G = y.length === 0 ? "" : y.length === 1 ? y[0] : l(y).join(":"), V = N ? G + ie : G, T = V + R;
    if (n.indexOf(T) > -1)
      continue;
    n.push(T);
    const E = s(R, z);
    for (let L = 0; L < E.length; ++L) {
      const H = E[L];
      n.push(V + H);
    }
    i = b + (i.length > 0 ? " " + i : i);
  }
  return i;
}, ut = (...e) => {
  let r = 0, o, t, s = "";
  for (; r < e.length; )
    (o = e[r++]) && (t = Ae(o)) && (s && (s += " "), s += t);
  return s;
}, Ae = (e) => {
  if (typeof e == "string")
    return e;
  let r, o = "";
  for (let t = 0; t < e.length; t++)
    e[t] && (r = Ae(e[t])) && (o && (o += " "), o += r);
  return o;
}, ht = (e, ...r) => {
  let o, t, s, l;
  const n = (i) => {
    const u = r.reduce((b, w) => w(b), e());
    return o = dt(u), t = o.cache.get, s = o.cache.set, l = m, m(i);
  }, m = (i) => {
    const u = t(i);
    if (u)
      return u;
    const b = pt(i, o);
    return s(i, b), b;
  };
  return l = n, (...i) => l(ut(...i));
}, ft = [], k = (e) => {
  const r = (o) => o[e] || ft;
  return r.isThemeGetter = !0, r;
}, Le = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ie = /^\((?:(\w[\w-]*):)?(.+)\)$/i, bt = /^\d+\/\d+$/, gt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, wt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, yt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, vt = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, W = (e) => bt.test(e), f = (e) => !!e && !Number.isNaN(Number(e)), B = (e) => !!e && Number.isInteger(Number(e)), ae = (e) => e.endsWith("%") && f(e.slice(0, -1)), F = (e) => gt.test(e), kt = () => !0, Ct = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xt.test(e) && !wt.test(e)
), Re = () => !1, _t = (e) => yt.test(e), Nt = (e) => vt.test(e), zt = (e) => !c(e) && !d(e), St = (e) => Z(e, je, Re), c = (e) => Le.test(e), D = (e) => Z(e, Pe, Ct), le = (e) => Z(e, Rt, f), ve = (e) => Z(e, Te, Re), Mt = (e) => Z(e, Ee, Nt), ee = (e) => Z(e, Fe, _t), d = (e) => Ie.test(e), q = (e) => U(e, Pe), At = (e) => U(e, Tt), ke = (e) => U(e, Te), Lt = (e) => U(e, je), It = (e) => U(e, Ee), te = (e) => U(e, Fe, !0), Z = (e, r, o) => {
  const t = Le.exec(e);
  return t ? t[1] ? r(t[1]) : o(t[2]) : !1;
}, U = (e, r, o = !1) => {
  const t = Ie.exec(e);
  return t ? t[1] ? r(t[1]) : o : !1;
}, Te = (e) => e === "position" || e === "percentage", Ee = (e) => e === "image" || e === "url", je = (e) => e === "length" || e === "size" || e === "bg-size", Pe = (e) => e === "length", Rt = (e) => e === "number", Tt = (e) => e === "family-name", Fe = (e) => e === "shadow", Et = () => {
  const e = k("color"), r = k("font"), o = k("text"), t = k("font-weight"), s = k("tracking"), l = k("leading"), n = k("breakpoint"), m = k("container"), i = k("spacing"), u = k("radius"), b = k("shadow"), w = k("inset-shadow"), y = k("text-shadow"), N = k("drop-shadow"), v = k("blur"), M = k("perspective"), z = k("aspect"), R = k("ease"), G = k("animate"), V = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], T = () => [
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
  ], E = () => [...T(), d, c], L = () => ["auto", "hidden", "clip", "visible", "scroll"], H = () => ["auto", "contain", "none"], h = () => [d, c, i], j = () => [W, "full", "auto", ...h()], de = () => [B, "none", "subgrid", d, c], me = () => ["auto", {
    span: ["full", B, d, c]
  }, B, d, c], K = () => [B, "auto", d, c], pe = () => ["auto", "min", "max", "fr", d, c], oe = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...h()], O = () => [W, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...h()], p = () => [e, d, c], ue = () => [...T(), ke, ve, {
    position: [d, c]
  }], he = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], fe = () => ["auto", "cover", "contain", Lt, St, {
    size: [d, c]
  }], se = () => [ae, q, D], S = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    d,
    c
  ], A = () => ["", f, q, D], Y = () => ["solid", "dashed", "dotted", "double"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _ = () => [f, ae, ke, ve], ge = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    d,
    c
  ], X = () => ["none", f, d, c], J = () => ["none", f, d, c], ne = () => [f, d, c], Q = () => [W, "full", ...h()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [F],
      breakpoint: [F],
      color: [kt],
      container: [F],
      "drop-shadow": [F],
      ease: ["in", "out", "in-out"],
      font: [zt],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [F],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [F],
      shadow: [F],
      spacing: ["px", f],
      text: [F],
      "text-shadow": [F],
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
        aspect: ["auto", "square", W, c, d, z]
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
        columns: [f, c, d, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": V()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": V()
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
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: H()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": H()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": H()
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
        z: [B, "auto", d, c]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [W, "full", "auto", m, ...h()]
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
        flex: [f, W, "auto", "initial", "none", c]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", f, d, c]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", f, d, c]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [B, "first", "last", "none", d, c]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": de()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: me()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": de()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: me()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        "auto-cols": pe()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": pe()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: h()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": h()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": h()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...oe(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...oe()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": oe()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: h()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: h()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: h()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: h()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: h()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: h()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: h()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: h()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: h()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": h()
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
        "space-y": h()
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
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...O()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...O()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [n]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, q, D]
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
        font: [t, d, le]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", ae, c]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [At, c, r]
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
        tracking: [s, d, c]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [f, "none", d, le]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          l,
          ...h()
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
        placeholder: p()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: p()
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
        decoration: [...Y(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [f, "from-font", "auto", d, D]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: p()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [f, "auto", d, c]
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
        indent: h()
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
        bg: ue()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: he()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: fe()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, B, d, c],
          radial: ["", d, c],
          conic: [B, d, c]
        }, It, Mt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: p()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: se()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: se()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: se()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: p()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: p()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: p()
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
        border: A()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": A()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": A()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": A()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": A()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": A()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": A()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": A()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": A()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": A()
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
        "divide-y": A()
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
        border: [...Y(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Y(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: p()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": p()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": p()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": p()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": p()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": p()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": p()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": p()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": p()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: p()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Y(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [f, d, c]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", f, q, D]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: p()
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
          b,
          te,
          ee
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: p()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", w, te, ee]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": p()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: A()
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
        ring: p()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [f, D]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": p()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": A()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": p()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, te, ee]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": p()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [f, d, c]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...be(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
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
        "mask-linear": [f]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": _()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": _()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": p()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": p()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": _()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": _()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": p()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": p()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": _()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": _()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": p()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": p()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": _()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": _()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": p()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": p()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": _()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": _()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": p()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": p()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": _()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": _()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": p()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": p()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": _()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": _()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": p()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": p()
      }],
      "mask-image-radial": [{
        "mask-radial": [d, c]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": _()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": _()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": p()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": p()
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
        "mask-radial-at": T()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [f]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": _()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": _()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": p()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": p()
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
        mask: ue()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: he()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: fe()
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
        blur: ge()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [f, d, c]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [f, d, c]
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
          N,
          te,
          ee
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": p()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", f, d, c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f, d, c]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", f, d, c]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [f, d, c]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", f, d, c]
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
        "backdrop-blur": ge()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [f, d, c]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [f, d, c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", f, d, c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f, d, c]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", f, d, c]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [f, d, c]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [f, d, c]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", f, d, c]
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
        "border-spacing": h()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": h()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": h()
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
        duration: [f, "initial", d, c]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", R, d, c]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [f, d, c]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", G, d, c]
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
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
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
        skew: ne()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ne()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ne()
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
        origin: E()
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
        translate: Q()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Q()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Q()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Q()
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
        accent: p()
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
        caret: p()
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
        "scroll-m": h()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": h()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": h()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": h()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": h()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": h()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": h()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": h()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": h()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": h()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": h()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": h()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": h()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": h()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": h()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": h()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": h()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": h()
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
        fill: ["none", ...p()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [f, q, D, le]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...p()]
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
}, jt = /* @__PURE__ */ ht(Et);
function g(...e) {
  return jt(He(e));
}
const Pt = {
  primary: "bg-primary text-black theme-light:text-white border border-primary shadow-[inset_-4px_-4px_8px_var(--color-primary-shadow-dark),inset_4px_4px_8px_var(--color-primary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-primary-shadow-dark),_inset_-3px_-3px_6px_var(--color-primary-shadow-light)] disabled:shadow-none disabled:bg-primary-disabled disabled:text-text-disabled",
  secondary: "bg-secondary text-white border border-secondary shadow-[inset_-4px_-4px_8px_var(--color-secondary-shadow-dark),inset_4px_4px_8px_var(--color-secondary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-secondary-shadow-dark),_inset_-3px_-3px_6px_var(--color-secondary-shadow-light)] disabled:shadow-none disabled:bg-secondary-disabled disabled:text-text-disabled",
  danger: "bg-danger text-black theme-light:text-white border border-danger shadow-[inset_-4px_-4px_8px_var(--color-danger-shadow-dark),inset_4px_4px_8px_var(--color-danger-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-danger-shadow-dark),_inset_-3px_-3px_6px_var(--color-danger-shadow-light)] disabled:shadow-none disabled:bg-danger-disabled disabled:text-text-disabled",
  ghost: "bg-ghost text-text-primary border border-transparent shadow-[inset_-4px_-4px_8px_var(--color-ghost-shadow-dark),inset_4px_4px_8px_var(--color-ghost-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-ghost-shadow-dark),_inset_-3px_-3px_6px_var(--color-ghost-shadow-light)] disabled:shadow-none disabled:bg-ghost-disabled disabled:text-text-disabled"
}, Ft = {
  sm: "px-3 py-1 text-xs font-medium rounded-lg h-8",
  md: "px-4 py-1.5 text-sm font-medium rounded-lg h-10",
  lg: "px-6 py-2 text-md font-medium rounded-lg h-12"
}, Ge = C.forwardRef(({
  variant: e = "primary",
  size: r = "md",
  loading: o = !1,
  disabled: t = !1,
  className: s,
  children: l,
  ...n
}, m) => /* @__PURE__ */ x(
  "button",
  {
    ref: m,
    className: g(
      "inline-flex items-center justify-center",
      "font-medium transition-all duration-200",
      "focus-visible focus:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      Pt[e],
      Ft[r],
      s
    ),
    disabled: t || o,
    ...n,
    children: [
      /* @__PURE__ */ a("span", { className: g("inline-flex items-center", o ? "w-4 h-4 mr-2" : "w-0 h-4"), children: /* @__PURE__ */ x(
        "svg",
        {
          className: g("animate-spin h-4 w-4", !o && "opacity-0"),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ a(
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
            /* @__PURE__ */ a(
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
Ge.displayName = "Button";
const Gt = "_button_7snfv_7", Bt = "_state_7snfv_75", Vt = "_icon_7snfv_149", Ot = "_outline_7snfv_207", I = {
  button: Gt,
  "button--size-sm": "_button--size-sm_7snfv_59",
  state: Bt,
  "button--size-md": "_button--size-md_7snfv_83",
  "button--size-lg": "_button--size-lg_7snfv_107",
  icon: Vt,
  outline: Ot,
  "state--default": "_state--default_7snfv_231",
  "state--sent": "_state--sent_7snfv_717"
}, Ce = (e) => e.split("").map((r, o) => /* @__PURE__ */ a("span", { style: { "--i": o }, children: r === " " ? " " : r }, o)), Dt = {
  sm: I["button--size-sm"],
  md: I["button--size-md"],
  lg: I["button--size-lg"]
}, tr = ({
  children: e = "Send Message",
  successText: r = "Sent",
  onSubmit: o,
  disabled: t,
  size: s = "md",
  className: l,
  ...n
}) => {
  const [m, i] = _e(!1), u = $e(), b = We(null);
  return /* @__PURE__ */ x(
    "button",
    {
      ...n,
      ref: b,
      type: "submit",
      disabled: t,
      onClick: async (y) => {
        if (o && !m)
          try {
            await o(), i(!0), b.current?.focus(), setTimeout(() => {
              i(!1), b.current?.blur();
            }, 3e3);
          } catch (N) {
            console.error("Submit failed:", N);
          }
        n.onClick?.(y);
      },
      className: g(I.button, Dt[s], l),
      "aria-label": m ? "Submission successful" : n["aria-label"] || "Submit",
      "aria-disabled": t,
      children: [
        /* @__PURE__ */ a("div", { className: I.outline }),
        /* @__PURE__ */ x("div", { className: g(I.state, I["state--default"]), children: [
          /* @__PURE__ */ a("div", { className: I.icon, children: /* @__PURE__ */ x(
            "svg",
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ x("g", { style: { filter: `url(#${u})` }, children: [
                  /* @__PURE__ */ a(
                    "path",
                    {
                      d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ a(
                    "path",
                    {
                      d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      fill: "currentColor"
                    }
                  )
                ] }),
                /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("filter", { id: u, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ a("p", { children: Ce(typeof e == "string" ? e : "Send Message") })
        ] }),
        /* @__PURE__ */ x("div", { className: g(I.state, I["state--sent"]), children: [
          /* @__PURE__ */ a("div", { className: I.icon, children: /* @__PURE__ */ a(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              height: "1em",
              width: "1em",
              strokeWidth: "0.5px",
              stroke: "black",
              children: /* @__PURE__ */ x("g", { style: { filter: `url(#${u})` }, children: [
                /* @__PURE__ */ a(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  }
                ),
                /* @__PURE__ */ a(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ a("p", { children: Ce(r) })
        ] })
      ]
    }
  );
}, $t = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-[10px] text-base",
  lg: "px-6 py-3 text-lg"
}, Be = C.forwardRef(({
  size: e = "md",
  error: r = !1,
  className: o,
  disabled: t,
  ...s
}, l) => /* @__PURE__ */ x("div", { className: "relative inline-flex items-center", children: [
  /* @__PURE__ */ a(
    "input",
    {
      ref: l,
      className: g(
        "bg-transparent",
        "border-none",
        "outline-none",
        "max-w-[190px]",
        "rounded-full",
        "text-text-primary",
        "transition-colors duration-200",
        "disabled:text-text-disabled disabled:cursor-not-allowed",
        r ? "shadow-[inset_2px_5px_10px_var(--input-shadow-error)] cursor-help" : "shadow-[inset_2px_5px_10px_var(--input-shadow)]",
        $t[e],
        o
      ),
      style: r ? { paddingRight: "2rem" } : void 0,
      disabled: t,
      "aria-invalid": r,
      ...s
    }
  ),
  r && /* @__PURE__ */ a(
    "svg",
    {
      className: "absolute right-2 w-4 h-4 text-danger pointer-events-none flex-shrink-0",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      strokeWidth: "2",
      "aria-hidden": "true",
      children: /* @__PURE__ */ a(
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
Be.displayName = "Input";
const Wt = C.forwardRef(({
  label: e,
  error: r = !1,
  className: o,
  disabled: t,
  checked: s,
  onChange: l,
  ...n
}, m) => {
  const i = C.useId();
  return /* @__PURE__ */ x("div", { className: g("flex items-center space-x-2", t && "cursor-not-allowed", r && !t && "cursor-help", o), children: [
    /* @__PURE__ */ x("label", { className: g("checkbox-container", t && "opacity-50 cursor-not-allowed", r && !t && "cursor-help", !t && !r && "cursor-pointer"), children: [
      /* @__PURE__ */ a(
        "input",
        {
          ref: m,
          id: i,
          type: "checkbox",
          disabled: t,
          checked: s,
          onChange: l,
          "aria-checked": s,
          "aria-invalid": r,
          "aria-disabled": t,
          ...n
        }
      ),
      /* @__PURE__ */ a("svg", { viewBox: "0 0 64 64", height: "1em", width: "1em", children: /* @__PURE__ */ a(
        "path",
        {
          d: "M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",
          pathLength: "575.0541381835938",
          className: g("checkbox-path", r && "checkbox-path-error")
        }
      ) })
    ] }),
    e && /* @__PURE__ */ a(
      "label",
      {
        htmlFor: i,
        className: g(
          "text-sm font-medium select-none",
          t ? "text-text-disabled cursor-not-allowed" : r ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
});
Wt.displayName = "Checkbox";
const rr = ({
  label: e,
  error: r = !1,
  className: o,
  disabled: t,
  checked: s,
  onChange: l,
  id: n,
  ...m
}) => {
  const i = n || C.useId(), u = (b) => {
    if ((b.key === "Enter" || b.key === " ") && !t) {
      b.preventDefault();
      const w = document.getElementById(i);
      if (w) {
        w.checked = !w.checked;
        const y = new Event("change", { bubbles: !0 });
        w.dispatchEvent(y);
      }
    }
  };
  return /* @__PURE__ */ x("div", { className: g("toggle-wrapper", r && "toggle-wrapper--error", t && "cursor-not-allowed", r && !t && "cursor-help", o), children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: i,
        className: "toggle-checkbox",
        type: "checkbox",
        checked: s,
        onChange: l,
        disabled: t,
        role: "switch",
        "aria-checked": s,
        "aria-disabled": t,
        "aria-invalid": r,
        ...m
      }
    ),
    /* @__PURE__ */ a(
      "div",
      {
        className: g("toggle-container", t && "cursor-not-allowed", r && !t && "cursor-help"),
        onKeyDown: u,
        tabIndex: t ? -1 : 0,
        role: "button",
        "aria-hidden": "true",
        children: /* @__PURE__ */ a("div", { className: "toggle-button", children: /* @__PURE__ */ a("div", { className: "toggle-button-circles-container", children: Array.from({ length: 12 }).map((b, w) => /* @__PURE__ */ a("div", { className: "toggle-button-circle" }, w)) }) })
      }
    ),
    e && /* @__PURE__ */ a(
      "label",
      {
        htmlFor: i,
        className: g(
          "text-sm font-medium select-none ml-2",
          t ? "text-text-disabled cursor-not-allowed" : r ? "text-text-primary cursor-help" : "text-text-primary cursor-pointer"
        ),
        children: e
      }
    )
  ] });
}, or = ({ className: e, ...r }) => /* @__PURE__ */ a(
  "div",
  {
    className: g(
      "card",
      "w-full",
      "rounded-lg border border-border",
      "bg-surface-secondary text-text-primary",
      "shadow-sm",
      e
    ),
    ...r
  }
), sr = ({ className: e, ...r }) => /* @__PURE__ */ a(
  "div",
  {
    className: g("flex items-start justify-between gap-4 px-6 py-4 border-b border-border", e),
    ...r
  }
), nr = ({ className: e, ...r }) => /* @__PURE__ */ a("div", { className: g("px-6 py-4", e), ...r }), ar = ({ className: e, ...r }) => /* @__PURE__ */ a(
  "div",
  {
    className: g("flex items-center justify-end gap-3 px-6 py-4 border-t border-border", e),
    ...r
  }
), Ve = {
  sm: 0.7,
  md: 1,
  lg: 1.3
}, lr = ({ size: e = "md", className: r, ...o }) => {
  const t = 8 * Ve[e];
  return /* @__PURE__ */ x("div", { className: g("loader", r), style: { fontSize: `${t}px` }, ...o, children: [
    /* @__PURE__ */ a("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) }),
    /* @__PURE__ */ a("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) })
  ] });
}, ir = ({
  size: e = "md",
  variant: r = "inline",
  label: o,
  className: t,
  ...s
}) => {
  const l = 8 * Ve[e];
  return r === "container" ? /* @__PURE__ */ a(
    "div",
    {
      className: g(
        "relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary flex items-center justify-center",
        t
      ),
      ...s,
      children: /* @__PURE__ */ x("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ x("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
          /* @__PURE__ */ a("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) }),
          /* @__PURE__ */ a("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) })
        ] }),
        o && /* @__PURE__ */ a("span", { className: "text-sm text-text-secondary", children: o })
      ] })
    }
  ) : /* @__PURE__ */ x("div", { className: g("inline-flex items-center gap-2", t), ...s, children: [
    /* @__PURE__ */ x("div", { className: "loader", style: { fontSize: `${l}px` }, children: [
      /* @__PURE__ */ a("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) }),
      /* @__PURE__ */ a("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ a("div", { className: "loader-circle" }) })
    ] }),
    o && /* @__PURE__ */ a("span", { className: "text-sm text-text-secondary", children: o })
  ] });
}, Oe = C.createContext(null), cr = ({
  name: e,
  legend: r,
  value: o,
  defaultValue: t,
  disabled: s = !1,
  onValueChange: l,
  className: n,
  children: m,
  ...i
}) => {
  const u = o !== void 0, [b, w] = C.useState(t), y = u ? o : b, N = C.useCallback(
    (v) => {
      u || w(v), l?.(v);
    },
    [u, l]
  );
  return /* @__PURE__ */ a(Oe.Provider, { value: { name: e, value: y, disabled: s, onValueChange: N }, children: /* @__PURE__ */ x(
    "fieldset",
    {
      className: g("radio-input", s && "opacity-60 cursor-not-allowed", n),
      disabled: s,
      ...i,
      children: [
        r && /* @__PURE__ */ a("legend", { className: "text-sm font-medium text-text-primary", children: r }),
        m
      ]
    }
  ) });
}, dr = ({
  label: e,
  value: r,
  disabled: o,
  checked: t,
  defaultChecked: s,
  name: l,
  onChange: n,
  onCheckedChange: m,
  className: i,
  ...u
}) => {
  const b = C.useContext(Oe), w = C.useId(), y = !!(o ?? b?.disabled), N = l ?? b?.name, v = !!b, M = t !== void 0, [z, R] = C.useState(!!s), G = v ? b?.value === r : M ? !!t : z, V = (E) => {
    const L = E.target.checked;
    v && L ? b?.onValueChange?.(r) : M || R(L), m?.(L), n?.(E);
  }, T = /* @__PURE__ */ x("label", { htmlFor: w, className: g(y && "cursor-not-allowed", i), role: "radio", "aria-checked": G, "aria-disabled": y, children: [
    /* @__PURE__ */ a(
      "input",
      {
        id: w,
        type: "radio",
        name: N,
        value: r,
        checked: G,
        disabled: y,
        onChange: V,
        role: "radio",
        "aria-checked": G,
        "aria-disabled": y,
        ...u
      }
    ),
    /* @__PURE__ */ a("span", { children: e || "" })
  ] });
  return v ? T : /* @__PURE__ */ a("div", { className: "radio-input", children: T });
}, Zt = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
  left: "right-full top-1/2 -translate-y-1/2 mr-1",
  right: "left-full top-1/2 -translate-y-1/2 ml-1"
}, Ut = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-px",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-px",
  left: "left-full top-1/2 -translate-y-1/2 -ml-px",
  right: "right-full top-1/2 -translate-y-1/2 -mr-px"
}, Ht = {
  top: "border-t-border border-r-transparent border-b-transparent border-l-transparent border-t-[6px] border-r-[6px] border-l-[6px]",
  bottom: "border-b-border border-r-transparent border-t-transparent border-l-transparent border-b-[6px] border-r-[6px] border-l-[6px]",
  left: "border-l-border border-r-transparent border-t-transparent border-b-transparent border-l-[6px] border-t-[6px] border-b-[6px]",
  right: "border-r-border border-l-transparent border-t-transparent border-b-transparent border-r-[6px] border-t-[6px] border-b-[6px]"
}, qt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-[5px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",
  left: "left-full top-1/2 -translate-y-1/2 -ml-[5px]",
  right: "right-full top-1/2 -translate-y-1/2 -mr-[5px]"
}, mr = ({
  open: e,
  onOpenChange: r,
  content: o,
  position: t = "top",
  delay: s = 0,
  disabled: l = !1,
  children: n,
  className: m
}) => {
  const i = C.useRef(null), u = () => {
    i.current !== null && (window.clearTimeout(i.current), i.current = null);
  };
  C.useEffect(() => u, []);
  const b = () => {
    if (!l) {
      if (u(), s > 0) {
        i.current = window.setTimeout(() => r?.(!0), s);
        return;
      }
      r?.(!0);
    }
  }, w = () => {
    u(), r?.(!1);
  }, y = C.Children.only(n), N = C.useId();
  return /* @__PURE__ */ x("span", { className: g("relative inline-block", m), children: [
    C.cloneElement(y, {
      "aria-describedby": e && !l ? N : void 0,
      onMouseEnter: (v) => {
        y.props.onMouseEnter?.(v), b();
      },
      onMouseLeave: (v) => {
        y.props.onMouseLeave?.(v), w();
      },
      onFocus: (v) => {
        y.props.onFocus?.(v), b();
      },
      onBlur: (v) => {
        y.props.onBlur?.(v), w();
      }
    }),
    e && !l && /* @__PURE__ */ x(
      "span",
      {
        id: N,
        role: "tooltip",
        className: g(
          "absolute z-50 pointer-events-none",
          Zt[t],
          "whitespace-nowrap",
          "rounded-md border border-border bg-surface text-text-primary",
          "px-3 py-2 text-xs shadow-md"
        ),
        children: [
          o,
          /* @__PURE__ */ a(
            "span",
            {
              className: g(
                "absolute w-0 h-0",
                Ut[t],
                Ht[t]
              )
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              className: g(
                "absolute w-0 h-0 bg-surface",
                qt[t],
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
}, De = Ze(void 0), pr = ({
  children: e,
  defaultTheme: r
}) => {
  const o = () => {
    if (typeof window < "u") {
      const n = localStorage.getItem("theme");
      if (n === "light" || n === "dark")
        return n;
    }
    return typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r || "dark";
  }, [t, s] = _e(o), l = C.useCallback((n) => {
    s(n), typeof window < "u" && localStorage.setItem("theme", n);
  }, []);
  return C.useEffect(() => {
    if (typeof document > "u") return;
    const n = document.documentElement;
    t === "light" ? (n.classList.add("theme-light"), n.classList.remove("theme-dark")) : (n.classList.add("theme-dark"), n.classList.remove("theme-light"));
  }, [t]), C.useEffect(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const n = window.matchMedia("(prefers-color-scheme: dark)"), m = (i) => {
      typeof window < "u" && !localStorage.getItem("theme") && s(i.matches ? "dark" : "light");
    };
    if (n.addEventListener)
      return n.addEventListener("change", m), () => n.removeEventListener("change", m);
    if (n.addListener)
      return n.addListener(m), () => n.removeListener(m);
  }, []), /* @__PURE__ */ a(De.Provider, { value: { theme: t, setTheme: l }, children: e });
}, Kt = () => {
  const e = Ue(De);
  if (e === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return e;
}, ur = ({
  className: e,
  showLabel: r = !0
}) => {
  const { theme: o, setTheme: t } = Kt(), s = o === "dark", l = () => {
    t(s ? "light" : "dark");
  }, n = (m) => {
    (m.key === "Enter" || m.key === " ") && (m.preventDefault(), l());
  };
  return /* @__PURE__ */ x("div", { className: g("flex items-center gap-3", e), children: [
    /* @__PURE__ */ x(
      "label",
      {
        className: "theme-switch cursor-pointer",
        onKeyDown: n,
        tabIndex: 0,
        role: "switch",
        "aria-checked": s,
        "aria-label": s ? "Switch to light mode" : "Switch to dark mode",
        children: [
          /* @__PURE__ */ a(
            "input",
            {
              type: "checkbox",
              className: "theme-switch__checkbox",
              checked: s,
              onChange: l,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ x("div", { className: "theme-switch__container", children: [
            /* @__PURE__ */ a("div", { className: "theme-switch__clouds" }),
            /* @__PURE__ */ a("div", { className: "theme-switch__stars-container", children: /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 144 55", fill: "none", children: /* @__PURE__ */ a(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
                fill: "currentColor"
              }
            ) }) }),
            /* @__PURE__ */ a("div", { className: "theme-switch__circle-container", children: /* @__PURE__ */ a("div", { className: "theme-switch__sun-moon-container", children: /* @__PURE__ */ x("div", { className: "theme-switch__moon", children: [
              /* @__PURE__ */ a("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ a("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ a("div", { className: "theme-switch__spot" })
            ] }) }) })
          ] })
        ]
      }
    ),
    r && /* @__PURE__ */ a("span", { className: "text-sm font-medium text-text-primary", children: s ? "Dark" : "Light" })
  ] });
}, Yt = ({
  width: e = 315,
  aspectRatio: r = 1.33,
  className: o,
  children: t,
  ...s
}) => /* @__PURE__ */ x(
  "div",
  {
    className: g(
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
    ...s,
    children: [
      /* @__PURE__ */ a(
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
), Xt = ({
  width: e = 315,
  aspectRatio: r = 1.33,
  className: o,
  children: t,
  ...s
}) => /* @__PURE__ */ a(
  "div",
  {
    className: g(
      "absolute bg-surface-tertiary rounded-[24px] p-7 z-[10]",
      "backdrop-blur-[15px]",
      "shadow-[inset_0_40px_60px_-8px_rgba(255,255,255,0.12),inset_4px_0_12px_-6px_rgba(255,255,255,0.12),inset_0_0_12px_-4px_rgba(255,255,255,0.12)]",
      o
    ),
    style: {
      width: `${e}px`,
      height: `${e * r}px`
    },
    ...s,
    children: t
  }
), Jt = ({ className: e, ...r }) => /* @__PURE__ */ x(
  "div",
  {
    className: g(
      "w-[65px] h-[65px] rounded-[20px] border-2 border-white",
      "bg-gradient-to-br from-white/20 to-black/20",
      "shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.06)]",
      "flex justify-center items-center relative",
      e
    ),
    ...r,
    children: [
      /* @__PURE__ */ a("div", { className: "absolute bottom-[10px] w-1/2 h-[20%] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] border-[2.5px] border-white" }),
      /* @__PURE__ */ a("div", { className: "absolute top-[10px] w-[30%] h-[30%] rounded-full border-[2.5px] border-white" })
    ]
  }
), hr = ({
  title: e,
  showLogo: r = !1,
  footer: o,
  width: t = 315,
  aspectRatio: s = 1.33,
  className: l,
  children: n,
  ...m
}) => /* @__PURE__ */ a(Yt, { width: t, aspectRatio: s, children: /* @__PURE__ */ x(Xt, { width: t, aspectRatio: s, children: [
  /* @__PURE__ */ x(
    "form",
    {
      className: g("flex justify-center items-center flex-col gap-[10px]", l),
      ...m,
      children: [
        r && /* @__PURE__ */ a("div", { className: "flex justify-center items-center mb-2", children: /* @__PURE__ */ a(Jt, {}) }),
        e && /* @__PURE__ */ a("div", { className: "w-full text-center text-2xl font-bold py-1.5 text-text-primary flex justify-center items-center", children: e }),
        n
      ]
    }
  ),
  o && /* @__PURE__ */ a("div", { className: "w-full text-left text-text-secondary text-xs mt-4", children: o })
] }) }), fr = ({
  label: e,
  error: r,
  className: o,
  size: t,
  ...s
}) => /* @__PURE__ */ x("div", { className: "w-full", children: [
  e && /* @__PURE__ */ a("label", { className: "block text-text-primary text-sm mb-1.5", children: e }),
  /* @__PURE__ */ a("div", { className: "flex justify-center", children: /* @__PURE__ */ a(
    Be,
    {
      className: g(
        "p-3 border-none rounded-xl bg-surface text-text-primary text-sm outline-none",
        "focus:border focus:border-border-focus",
        o
      ),
      error: r,
      size: t,
      ...s
    }
  ) })
] }), br = ({
  variant: e = "primary",
  className: r,
  children: o,
  ...t
}) => e === "google" ? /* @__PURE__ */ a(
  "button",
  {
    className: g(
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
) : /* @__PURE__ */ a(
  Ge,
  {
    className: g(
      "w-full h-10 rounded-[20px] text-sm font-semibold mt-1.5",
      r
    ),
    variant: "primary",
    ...t,
    children: o
  }
), gr = ({
  className: e,
  children: r,
  ...o
}) => /* @__PURE__ */ a(
  "div",
  {
    className: g(
      "w-full text-left text-text-secondary text-xs",
      e
    ),
    ...o,
    children: r
  }
), xr = ({
  className: e,
  children: r,
  ...o
}) => /* @__PURE__ */ a(
  "a",
  {
    className: g(
      "relative text-text-secondary font-semibold no-underline transition-colors duration-300 ease-in-out",
      "hover:text-white",
      'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-[width] after:duration-300 after:ease-in-out',
      "hover:after:w-full",
      e
    ),
    ...o,
    children: r
  }
);
export {
  Ge as Button,
  or as Card,
  nr as CardContent,
  ar as CardFooter,
  sr as CardHeader,
  Wt as Checkbox,
  hr as Form,
  br as FormButton,
  fr as FormField,
  gr as FormFooter,
  xr as FormFooterLink,
  Be as Input,
  ir as Loader,
  dr as RadioButton,
  cr as RadioGroup,
  lr as Spinner,
  tr as SubmitButton,
  pr as ThemeProvider,
  ur as ThemeSwitch,
  rr as Toggle,
  mr as Tooltip,
  Kt as useTheme
};
