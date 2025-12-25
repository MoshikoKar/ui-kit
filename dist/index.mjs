import z, { useState as er, useId as Ir, createContext as Lr, useContext as Fr } from "react";
var Se = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Wr() {
  if (Je) return ce;
  Je = 1;
  var r = z, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, p, g) {
    var f, w = {}, y = null, E = null;
    g !== void 0 && (y = "" + g), p.key !== void 0 && (y = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (f in p) o.call(p, f) && !i.hasOwnProperty(f) && (w[f] = p[f]);
    if (l && l.defaultProps) for (f in p = l.defaultProps, p) w[f] === void 0 && (w[f] = p[f]);
    return { $$typeof: t, type: l, key: y, ref: E, props: w, _owner: a.current };
  }
  return ce.Fragment = n, ce.jsx = d, ce.jsxs = d, ce;
}
var de = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Gr() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), C = Symbol.iterator, v = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = C && e[C] || e[v];
      return typeof s == "function" ? s : null;
    }
    var T = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), b = 1; b < s; b++)
          c[b - 1] = arguments[b];
        V("error", e, c);
      }
    }
    function V(e, s, c) {
      {
        var b = T.ReactDebugCurrentFrame, j = b.getStackAddendum();
        j !== "" && (s += "%s", c = c.concat([j]));
        var _ = c.map(function(x) {
          return String(x);
        });
        _.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var L = !1, D = !1, K = !1, pe = !1, be = !1, X;
    X = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === i || be || e === a || e === g || e === f || pe || e === E || L || D || K || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === w || e.$$typeof === d || e.$$typeof === l || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function se(e, s, c) {
      var b = e.displayName;
      if (b)
        return b;
      var j = s.displayName || s.name || "";
      return j !== "" ? c + "(" + j + ")" : c;
    }
    function k(e) {
      return e.displayName || "Context";
    }
    function $(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var s = e;
            return k(s) + ".Consumer";
          case d:
            var c = e;
            return k(c._context) + ".Provider";
          case p:
            return se(e, e.render, "ForwardRef");
          case w:
            var b = e.displayName || null;
            return b !== null ? b : $(e.type) || "Memo";
          case y: {
            var j = e, _ = j._payload, x = j._init;
            try {
              return $(x(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, U = 0, Z, ae, Q, Y, ie, W, Ae;
    function Ne() {
    }
    Ne.__reactDisabledLog = !0;
    function cr() {
      {
        if (U === 0) {
          Z = console.log, ae = console.info, Q = console.warn, Y = console.error, ie = console.group, W = console.groupCollapsed, Ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ne,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        U++;
      }
    }
    function dr() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: Z
            }),
            info: F({}, e, {
              value: ae
            }),
            warn: F({}, e, {
              value: Q
            }),
            error: F({}, e, {
              value: Y
            }),
            group: F({}, e, {
              value: ie
            }),
            groupCollapsed: F({}, e, {
              value: W
            }),
            groupEnd: F({}, e, {
              value: Ae
            })
          });
        }
        U < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = T.ReactCurrentDispatcher, ye;
    function me(e, s, c) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (j) {
            var b = j.stack.trim().match(/\n( *(at )?)/);
            ye = b && b[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var we = !1, ge;
    {
      var ur = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ur();
    }
    function Oe(e, s) {
      if (!e || we)
        return "";
      {
        var c = ge.get(e);
        if (c !== void 0)
          return c;
      }
      var b;
      we = !0;
      var j = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = xe.current, xe.current = null, cr();
      try {
        if (s) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (I) {
              b = I;
            }
            Reflect.construct(e, [], x);
          } else {
            try {
              x.call();
            } catch (I) {
              b = I;
            }
            e.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            b = I;
          }
          e();
        }
      } catch (I) {
        if (I && b && typeof I.stack == "string") {
          for (var h = I.stack.split(`
`), M = b.stack.split(`
`), A = h.length - 1, N = M.length - 1; A >= 1 && N >= 0 && h[A] !== M[N]; )
            N--;
          for (; A >= 1 && N >= 0; A--, N--)
            if (h[A] !== M[N]) {
              if (A !== 1 || N !== 1)
                do
                  if (A--, N--, N < 0 || h[A] !== M[N]) {
                    var G = `
` + h[A].replace(" at new ", " at ");
                    return e.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, G), G;
                  }
                while (A >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        we = !1, xe.current = _, dr(), Error.prepareStackTrace = j;
      }
      var re = e ? e.displayName || e.name : "", H = re ? me(re) : "";
      return typeof e == "function" && ge.set(e, H), H;
    }
    function fr(e, s, c) {
      return Oe(e, !1);
    }
    function pr(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function he(e, s, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, pr(e));
      if (typeof e == "string")
        return me(e);
      switch (e) {
        case g:
          return me("Suspense");
        case f:
          return me("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return fr(e.render);
          case w:
            return he(e.type, s, c);
          case y: {
            var b = e, j = b._payload, _ = b._init;
            try {
              return he(_(j), s, c);
            } catch {
            }
          }
        }
      return "";
    }
    var le = Object.prototype.hasOwnProperty, Me = {}, ze = T.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var s = e._owner, c = he(e.type, e._source, s ? s.type : null);
        ze.setExtraStackFrame(c);
      } else
        ze.setExtraStackFrame(null);
    }
    function br(e, s, c, b, j) {
      {
        var _ = Function.call.bind(le);
        for (var x in e)
          if (_(e, x)) {
            var h = void 0;
            try {
              if (typeof e[x] != "function") {
                var M = Error((b || "React class") + ": " + c + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              h = e[x](s, x, b, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              h = A;
            }
            h && !(h instanceof Error) && (ve(j), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", c, x, typeof h), ve(null)), h instanceof Error && !(h.message in Me) && (Me[h.message] = !0, ve(j), R("Failed %s type: %s", c, h.message), ve(null));
          }
      }
    }
    var mr = Array.isArray;
    function Ce(e) {
      return mr(e);
    }
    function gr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function hr(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function Le(e) {
      if (hr(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Ie(e);
    }
    var Fe = T.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Ge;
    function xr(e) {
      if (le.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function yr(e) {
      if (le.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function wr(e, s) {
      typeof e.ref == "string" && Fe.current;
    }
    function Cr(e, s) {
      {
        var c = function() {
          We || (We = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Rr(e, s) {
      {
        var c = function() {
          Ge || (Ge = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var jr = function(e, s, c, b, j, _, x) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: c,
        props: x,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: j
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Er(e, s, c, b, j) {
      {
        var _, x = {}, h = null, M = null;
        c !== void 0 && (Le(c), h = "" + c), yr(s) && (Le(s.key), h = "" + s.key), xr(s) && (M = s.ref, wr(s, j));
        for (_ in s)
          le.call(s, _) && !vr.hasOwnProperty(_) && (x[_] = s[_]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (_ in A)
            x[_] === void 0 && (x[_] = A[_]);
        }
        if (h || M) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && Cr(x, N), M && Rr(x, N);
        }
        return jr(e, h, M, j, b, Fe.current, x);
      }
    }
    var Re = T.ReactCurrentOwner, $e = T.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var s = e._owner, c = he(e.type, e._source, s ? s.type : null);
        $e.setExtraStackFrame(c);
      } else
        $e.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function De() {
      {
        if (Re.current) {
          var e = $(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      return "";
    }
    var Ve = {};
    function _r(e) {
      {
        var s = De();
        if (!s) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (s = `

Check the top-level render call using <` + c + ">.");
        }
        return s;
      }
    }
    function Be(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = _r(s);
        if (Ve[c])
          return;
        Ve[c] = !0;
        var b = "";
        e && e._owner && e._owner !== Re.current && (b = " It was passed a child from " + $(e._owner.type) + "."), ee(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, b), ee(null);
      }
    }
    function Ue(e, s) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var c = 0; c < e.length; c++) {
            var b = e[c];
            Ee(b) && Be(b, s);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var j = S(e);
          if (typeof j == "function" && j !== e.entries)
            for (var _ = j.call(e), x; !(x = _.next()).done; )
              Ee(x.value) && Be(x.value, s);
        }
      }
    }
    function Sr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var c;
        if (typeof s == "function")
          c = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === w))
          c = s.propTypes;
        else
          return;
        if (c) {
          var b = $(s);
          br(c, e.props, "prop", b, e);
        } else if (s.PropTypes !== void 0 && !je) {
          je = !0;
          var j = $(s);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", j || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tr(e) {
      {
        for (var s = Object.keys(e.props), c = 0; c < s.length; c++) {
          var b = s[c];
          if (b !== "children" && b !== "key") {
            ee(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Ye = {};
    function qe(e, s, c, b, j, _) {
      {
        var x = ne(e);
        if (!x) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = kr();
          M ? h += M : h += De();
          var A;
          e === null ? A = "null" : Ce(e) ? A = "array" : e !== void 0 && e.$$typeof === t ? (A = "<" + ($(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, h);
        }
        var N = Er(e, s, c, j, _);
        if (N == null)
          return N;
        if (x) {
          var G = s.children;
          if (G !== void 0)
            if (b)
              if (Ce(G)) {
                for (var re = 0; re < G.length; re++)
                  Ue(G[re], e);
                Object.freeze && Object.freeze(G);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(G, e);
        }
        if (le.call(s, "key")) {
          var H = $(e), I = Object.keys(s).filter(function(zr) {
            return zr !== "key";
          }), ke = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[H + ke]) {
            var Mr = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, H, Mr, H), Ye[H + ke] = !0;
          }
        }
        return e === o ? Tr(N) : Sr(N), N;
      }
    }
    function Pr(e, s, c) {
      return qe(e, s, c, !0);
    }
    function Ar(e, s, c) {
      return qe(e, s, c, !1);
    }
    var Nr = Ar, Or = Pr;
    de.Fragment = o, de.jsx = Nr, de.jsxs = Or;
  }()), de;
}
process.env.NODE_ENV === "production" ? Se.exports = Wr() : Se.exports = Gr();
var u = Se.exports;
function rr(r) {
  var t, n, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var a = r.length;
    for (t = 0; t < a; t++) r[t] && (n = rr(r[t])) && (o && (o += " "), o += n);
  } else for (n in r) r[n] && (o && (o += " "), o += n);
  return o;
}
function $r() {
  for (var r, t, n = 0, o = "", a = arguments.length; n < a; n++) (r = arguments[n]) && (t = rr(r)) && (o && (o += " "), o += t);
  return o;
}
const Pe = "-", Dr = (r) => {
  const t = Br(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = r;
  return {
    getClassGroupId: (d) => {
      const l = d.split(Pe);
      return l[0] === "" && l.length !== 1 && l.shift(), tr(l, t) || Vr(d);
    },
    getConflictingClassGroupIds: (d, l) => {
      const p = n[d] || [];
      return l && o[d] ? [...p, ...o[d]] : p;
    }
  };
}, tr = (r, t) => {
  var d;
  if (r.length === 0)
    return t.classGroupId;
  const n = r[0], o = t.nextPart.get(n), a = o ? tr(r.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const i = r.join(Pe);
  return (d = t.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : d.classGroupId;
}, Ze = /^\[(.+)\]$/, Vr = (r) => {
  if (Ze.test(r)) {
    const t = Ze.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Br = (r) => {
  const {
    theme: t,
    prefix: n
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yr(Object.entries(r.classGroups), n).forEach(([i, d]) => {
    Te(d, o, i, t);
  }), o;
}, Te = (r, t, n, o) => {
  r.forEach((a) => {
    if (typeof a == "string") {
      const i = a === "" ? t : He(t, a);
      i.classGroupId = n;
      return;
    }
    if (typeof a == "function") {
      if (Ur(a)) {
        Te(a(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: n
      });
      return;
    }
    Object.entries(a).forEach(([i, d]) => {
      Te(d, He(t, i), n, o);
    });
  });
}, He = (r, t) => {
  let n = r;
  return t.split(Pe).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, Ur = (r) => r.isThemeGetter, Yr = (r, t) => t ? r.map(([n, o]) => {
  const a = o.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([d, l]) => [t + d, l])) : i);
  return [n, a];
}) : r, qr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const a = (i, d) => {
    n.set(i, d), t++, t > r && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let d = n.get(i);
      if (d !== void 0)
        return d;
      if ((d = o.get(i)) !== void 0)
        return a(i, d), d;
    },
    set(i, d) {
      n.has(i) ? n.set(i, d) : a(i, d);
    }
  };
}, or = "!", Jr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = r, o = t.length === 1, a = t[0], i = t.length, d = (l) => {
    const p = [];
    let g = 0, f = 0, w;
    for (let S = 0; S < l.length; S++) {
      let T = l[S];
      if (g === 0) {
        if (T === a && (o || l.slice(S, S + i) === t)) {
          p.push(l.slice(f, S)), f = S + i;
          continue;
        }
        if (T === "/") {
          w = S;
          continue;
        }
      }
      T === "[" ? g++ : T === "]" && g--;
    }
    const y = p.length === 0 ? l : l.substring(f), E = y.startsWith(or), C = E ? y.substring(1) : y, v = w && w > f ? w - f : void 0;
    return {
      modifiers: p,
      hasImportantModifier: E,
      baseClassName: C,
      maybePostfixModifierPosition: v
    };
  };
  return n ? (l) => n({
    className: l,
    parseClassName: d
  }) : d;
}, Kr = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let n = [];
  return r.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, Zr = (r) => ({
  cache: qr(r.cacheSize),
  parseClassName: Jr(r),
  ...Dr(r)
}), Hr = /\s+/, Xr = (r, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: a
  } = t, i = [], d = r.trim().split(Hr);
  let l = "";
  for (let p = d.length - 1; p >= 0; p -= 1) {
    const g = d[p], {
      modifiers: f,
      hasImportantModifier: w,
      baseClassName: y,
      maybePostfixModifierPosition: E
    } = n(g);
    let C = !!E, v = o(C ? y.substring(0, E) : y);
    if (!v) {
      if (!C) {
        l = g + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = o(y), !v) {
        l = g + (l.length > 0 ? " " + l : l);
        continue;
      }
      C = !1;
    }
    const S = Kr(f).join(":"), T = w ? S + or : S, R = T + v;
    if (i.includes(R))
      continue;
    i.push(R);
    const V = a(v, C);
    for (let L = 0; L < V.length; ++L) {
      const D = V[L];
      i.push(T + D);
    }
    l = g + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function Qr() {
  let r = 0, t, n, o = "";
  for (; r < arguments.length; )
    (t = arguments[r++]) && (n = nr(t)) && (o && (o += " "), o += n);
  return o;
}
const nr = (r) => {
  if (typeof r == "string")
    return r;
  let t, n = "";
  for (let o = 0; o < r.length; o++)
    r[o] && (t = nr(r[o])) && (n && (n += " "), n += t);
  return n;
};
function et(r, ...t) {
  let n, o, a, i = d;
  function d(p) {
    const g = t.reduce((f, w) => w(f), r());
    return n = Zr(g), o = n.cache.get, a = n.cache.set, i = l, l(p);
  }
  function l(p) {
    const g = o(p);
    if (g)
      return g;
    const f = Xr(p, n);
    return a(p, f), f;
  }
  return function() {
    return i(Qr.apply(null, arguments));
  };
}
const P = (r) => {
  const t = (n) => n[r] || [];
  return t.isThemeGetter = !0, t;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, rt = /^\d+\/\d+$/, tt = /* @__PURE__ */ new Set(["px", "full", "screen"]), ot = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, nt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, st = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, at = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, it = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, B = (r) => te(r) || tt.has(r) || rt.test(r), q = (r) => oe(r, "length", mt), te = (r) => !!r && !Number.isNaN(Number(r)), _e = (r) => oe(r, "number", te), ue = (r) => !!r && Number.isInteger(Number(r)), lt = (r) => r.endsWith("%") && te(r.slice(0, -1)), m = (r) => sr.test(r), J = (r) => ot.test(r), ct = /* @__PURE__ */ new Set(["length", "size", "percentage"]), dt = (r) => oe(r, ct, ar), ut = (r) => oe(r, "position", ar), ft = /* @__PURE__ */ new Set(["image", "url"]), pt = (r) => oe(r, ft, ht), bt = (r) => oe(r, "", gt), fe = () => !0, oe = (r, t, n) => {
  const o = sr.exec(r);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, mt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  nt.test(r) && !st.test(r)
), ar = () => !1, gt = (r) => at.test(r), ht = (r) => it.test(r), vt = () => {
  const r = P("colors"), t = P("spacing"), n = P("blur"), o = P("brightness"), a = P("borderColor"), i = P("borderRadius"), d = P("borderSpacing"), l = P("borderWidth"), p = P("contrast"), g = P("grayscale"), f = P("hueRotate"), w = P("invert"), y = P("gap"), E = P("gradientColorStops"), C = P("gradientColorStopPositions"), v = P("inset"), S = P("margin"), T = P("opacity"), R = P("padding"), V = P("saturate"), L = P("scale"), D = P("sepia"), K = P("skew"), pe = P("space"), be = P("translate"), X = () => ["auto", "contain", "none"], ne = () => ["auto", "hidden", "clip", "visible", "scroll"], se = () => ["auto", m, t], k = () => [m, t], $ = () => ["", B, q], F = () => ["auto", te, m], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Z = () => ["solid", "dashed", "dotted", "double", "none"], ae = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Y = () => ["", "0", m], ie = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [te, m];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [fe],
      spacing: [B, q],
      blur: ["none", "", J, m],
      brightness: W(),
      borderColor: [r],
      borderRadius: ["none", "", "full", J, m],
      borderSpacing: k(),
      borderWidth: $(),
      contrast: W(),
      grayscale: Y(),
      hueRotate: W(),
      invert: Y(),
      gap: k(),
      gradientColorStops: [r],
      gradientColorStopPositions: [lt, q],
      inset: se(),
      margin: se(),
      opacity: W(),
      padding: k(),
      saturate: W(),
      scale: W(),
      sepia: Y(),
      skew: W(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", m]
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
        columns: [J]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ie()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ie()
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
        object: [...U(), m]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ne()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ne()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ne()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: X()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": X()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": X()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", ue, m]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: se()
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
        flex: ["1", "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Y()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Y()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ue, m]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [fe]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ue, m]
        }, m]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [fe]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ue, m]
        }, m]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        "auto-cols": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Q()]
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
        content: ["normal", ...Q(), "baseline"]
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
        "place-content": [...Q(), "baseline"]
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
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [S]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [S]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [S]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [S]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [S]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [S]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [S]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [S]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [S]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [pe]
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
        "space-y": [pe]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", m, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [m, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [m, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [J]
        }, J]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [m, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [m, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [m, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [m, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", J, q]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", _e]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [fe]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", te, _e]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", B, m]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", m]
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
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [T]
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
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [T]
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
        decoration: [...Z(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", B, q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", B, m]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m]
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
        content: ["none", m]
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
        "bg-opacity": [T]
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
        bg: [...U(), ut]
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
        bg: ["auto", "cover", "contain", dt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, pt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [E]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [E]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [T]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Z(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
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
        "divide-y": [l]
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
        "divide-opacity": [T]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Z()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Z()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [B, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [B, q]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: $()
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
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [T]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [B, q]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", J, bt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [fe]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [T]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ae(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ae()
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
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", J, m]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [g]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [f]
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
        saturate: [V]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [D]
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
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [g]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [f]
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
        "backdrop-opacity": [T]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [V]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [D]
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
        "border-spacing": [d]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [d]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [d]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", m]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", m]
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
        scale: [L]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [L]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [L]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ue, m]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [be]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [be]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [K]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [K]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", m]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", m]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [B, q, _e]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
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
}, xt = /* @__PURE__ */ et(vt);
function O(...r) {
  return xt($r(r));
}
const yt = {
  primary: "bg-primary text-text-primary border border-primary hover:bg-primary-hover focus:bg-primary-active disabled:bg-primary-disabled disabled:text-text-disabled",
  secondary: "bg-secondary text-text-primary border border-secondary hover:bg-secondary-hover focus:bg-secondary-active disabled:bg-secondary-disabled disabled:text-text-disabled",
  danger: "bg-danger text-text-primary border border-danger hover:bg-danger-hover focus:bg-danger-active disabled:bg-danger-disabled disabled:text-text-disabled",
  ghost: "bg-ghost text-text-primary border border-transparent hover:bg-ghost-hover focus:bg-ghost-active disabled:bg-ghost-disabled disabled:text-text-disabled"
}, wt = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-md min-h-[2rem]",
  md: "px-4 py-2 text-sm font-medium rounded-md min-h-[2.5rem]",
  lg: "px-6 py-3 text-md font-medium rounded-lg min-h-[3rem]"
}, kt = ({
  variant: r = "primary",
  size: t = "md",
  loading: n = !1,
  disabled: o = !1,
  className: a,
  children: i,
  ...d
}) => /* @__PURE__ */ u.jsxs(
  "button",
  {
    className: O(
      "inline-flex items-center justify-center",
      "font-medium transition-colors duration-200",
      "focus-visible focus:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      yt[r],
      wt[t],
      a
    ),
    disabled: o || n,
    ...d,
    children: [
      n && /* @__PURE__ */ u.jsxs(
        "svg",
        {
          className: "animate-spin -ml-1 mr-2 h-4 w-4",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ u.jsx(
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
            /* @__PURE__ */ u.jsx(
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
      i
    ]
  }
), Xe = (r) => r.split("").map((t, n) => {
  const o = t === " " ? " " : t;
  return /* @__PURE__ */ u.jsx("span", { style: { "--i": n }, children: o }, n);
}), _t = ({
  children: r = "Send Message",
  successText: t = "Sent",
  onSubmit: n,
  disabled: o,
  loading: a,
  className: i,
  ...d
}) => {
  const [l, p] = er(!1), g = Ir(), f = async (w) => {
    var y;
    if (n && !l && !a)
      try {
        await n(), p(!0), setTimeout(() => p(!1), 3e3);
      } catch (E) {
        console.error("Submit failed:", E);
      }
    (y = d.onClick) == null || y.call(d, w);
  };
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      ...d,
      type: "submit",
      disabled: o || l || a,
      onClick: f,
      className: O("button", l && "button--sent", i),
      "aria-label": l ? "Submission successful" : void 0,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "outline" }),
        /* @__PURE__ */ u.jsxs("div", { className: "state state--default", children: [
          /* @__PURE__ */ u.jsx("div", { className: "icon", children: /* @__PURE__ */ u.jsxs(
            "svg",
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ u.jsxs("g", { style: { filter: `url(#${g})` }, children: [
                  /* @__PURE__ */ u.jsx(
                    "path",
                    {
                      d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    "path",
                    {
                      d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      fill: "currentColor"
                    }
                  )
                ] }),
                /* @__PURE__ */ u.jsx("defs", { children: /* @__PURE__ */ u.jsx("filter", { id: g, children: /* @__PURE__ */ u.jsx(
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
          /* @__PURE__ */ u.jsx("p", { children: Xe(typeof r == "string" ? r : "Send Message") })
        ] }),
        /* @__PURE__ */ u.jsxs("div", { className: "state state--sent", children: [
          /* @__PURE__ */ u.jsx("div", { className: "icon", children: /* @__PURE__ */ u.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              height: "1em",
              width: "1em",
              strokeWidth: "0.5px",
              stroke: "black",
              children: /* @__PURE__ */ u.jsxs("g", { style: { filter: `url(#${g})` }, children: [
                /* @__PURE__ */ u.jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ u.jsx("p", { children: Xe(t) })
        ] })
      ]
    }
  );
}, Ct = {
  sm: "px-3 py-1.5 text-xs rounded-md min-h-[2rem]",
  md: "px-4 py-2 text-sm rounded-md min-h-[2.5rem]",
  lg: "px-6 py-3 text-md rounded-lg min-h-[3rem]"
}, St = ({
  size: r = "md",
  error: t = !1,
  className: n,
  disabled: o,
  ...a
}) => /* @__PURE__ */ u.jsx(
  "input",
  {
    className: O(
      "w-full",
      "bg-surface border border-border",
      "text-text-primary placeholder-text-secondary",
      "transition-colors duration-200",
      "focus-visible focus:outline-none focus:border-border-focus",
      "disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed",
      t && "border-danger focus:border-danger",
      Ct[r],
      n
    ),
    disabled: o,
    ...a
  }
), Tt = ({
  label: r,
  error: t = !1,
  className: n,
  disabled: o,
  checked: a,
  onChange: i,
  ...d
}) => {
  const l = z.useId();
  return /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        id: l,
        type: "checkbox",
        className: O(
          "w-4 h-4",
          "bg-surface border border-border rounded",
          "text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0",
          "transition-colors duration-200",
          "disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed",
          t && "border-danger focus:border-danger focus:ring-danger",
          n
        ),
        disabled: o,
        checked: a,
        onChange: i,
        ...d
      }
    ),
    r && /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: l,
        className: O(
          "text-sm font-medium select-none",
          o ? "text-text-disabled cursor-not-allowed" : "text-text-primary cursor-pointer"
        ),
        children: r
      }
    )
  ] });
}, Pt = ({
  label: r,
  error: t = !1,
  className: n,
  disabled: o,
  checked: a,
  onChange: i,
  ...d
}) => {
  const l = z.useId();
  return /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-3", children: [
    r && /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: l,
        className: O(
          "text-sm font-medium select-none",
          o ? "text-text-disabled cursor-not-allowed" : "text-text-primary cursor-pointer"
        ),
        children: r
      }
    ),
    /* @__PURE__ */ u.jsx(
      "button",
      {
        type: "button",
        role: "switch",
        "aria-checked": a,
        "aria-labelledby": r ? l : void 0,
        className: O(
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent",
          "transition-colors duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          a ? "bg-primary" : "bg-surface-secondary",
          o && "cursor-not-allowed opacity-50",
          t && "focus:ring-danger",
          n
        ),
        disabled: o,
        onClick: () => i == null ? void 0 : i({ target: { checked: !a } }),
        children: /* @__PURE__ */ u.jsx(
          "span",
          {
            "aria-hidden": "true",
            className: O(
              "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-text-primary shadow ring-0",
              "transition duration-200 ease-in-out",
              a ? "translate-x-5" : "translate-x-0"
            )
          }
        )
      }
    ),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        id: l,
        type: "checkbox",
        className: "sr-only",
        disabled: o,
        checked: a,
        onChange: i,
        ...d
      }
    )
  ] });
}, At = ({ className: r, ...t }) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: O(
      "w-full",
      "rounded-lg border border-border",
      "bg-surface-secondary text-text-primary",
      "shadow-sm",
      r
    ),
    ...t
  }
), Nt = ({ className: r, ...t }) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: O("flex items-start justify-between gap-4 px-6 py-4 border-b border-border", r),
    ...t
  }
), Ot = ({ className: r, ...t }) => /* @__PURE__ */ u.jsx("div", { className: O("px-6 py-4", r), ...t }), Mt = ({ className: r, ...t }) => /* @__PURE__ */ u.jsx(
  "div",
  {
    className: O("flex items-center justify-end gap-3 px-6 py-4 border-t border-border", r),
    ...t
  }
), Rt = {
  sm: 14,
  md: 18,
  lg: 24
}, Qe = ({ size: r = "md", className: t, ...n }) => {
  const o = Rt[r];
  return /* @__PURE__ */ u.jsxs(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 24 24",
      fill: "none",
      role: "status",
      "aria-label": "Loading",
      className: O("animate-spin text-text-primary", t),
      ...n,
      children: [
        /* @__PURE__ */ u.jsx(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "4",
            className: "opacity-25"
          }
        ),
        /* @__PURE__ */ u.jsx(
          "path",
          {
            fill: "currentColor",
            className: "opacity-75",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  );
}, zt = ({
  size: r = "md",
  variant: t = "inline",
  label: n = "Loading",
  className: o,
  ...a
}) => t === "container" ? /* @__PURE__ */ u.jsx(
  "div",
  {
    className: O(
      "relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary",
      o
    ),
    ...a,
    children: /* @__PURE__ */ u.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ u.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ u.jsx(Qe, { size: r }),
      /* @__PURE__ */ u.jsx("span", { className: "text-sm text-text-secondary", children: n })
    ] }) })
  }
) : /* @__PURE__ */ u.jsxs("div", { className: O("inline-flex items-center gap-2", o), ...a, children: [
  /* @__PURE__ */ u.jsx(Qe, { size: r }),
  /* @__PURE__ */ u.jsx("span", { className: "text-sm text-text-secondary", children: n })
] }), ir = z.createContext(null), It = ({
  name: r,
  legend: t,
  value: n,
  defaultValue: o,
  disabled: a = !1,
  onValueChange: i,
  className: d,
  children: l,
  ...p
}) => {
  const g = n !== void 0, [f, w] = z.useState(o), y = g ? n : f, E = z.useCallback(
    (C) => {
      g || w(C), i == null || i(C);
    },
    [g, i]
  );
  return /* @__PURE__ */ u.jsx(ir.Provider, { value: { name: r, value: y, disabled: a, onValueChange: E }, children: /* @__PURE__ */ u.jsxs(
    "fieldset",
    {
      className: O("space-y-3", a && "opacity-60", d),
      disabled: a,
      ...p,
      children: [
        t && /* @__PURE__ */ u.jsx("legend", { className: "text-sm font-medium text-text-primary", children: t }),
        l
      ]
    }
  ) });
}, Lt = ({
  label: r,
  value: t,
  disabled: n,
  checked: o,
  defaultChecked: a,
  name: i,
  onChange: d,
  onCheckedChange: l,
  className: p,
  ...g
}) => {
  const f = z.useContext(ir), w = z.useId(), y = !!(n ?? (f == null ? void 0 : f.disabled)), E = i ?? (f == null ? void 0 : f.name), C = !!f, v = o !== void 0, [S, T] = z.useState(!!a), R = C ? (f == null ? void 0 : f.value) === t : v ? !!o : S, V = (L) => {
    var K;
    const D = L.target.checked;
    C && D ? (K = f == null ? void 0 : f.onValueChange) == null || K.call(f, t) : v || T(D), l == null || l(D), d == null || d(L);
  };
  return /* @__PURE__ */ u.jsxs("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        id: w,
        type: "radio",
        name: E,
        value: t,
        checked: R,
        disabled: y,
        onChange: V,
        className: O(
          "w-4 h-4",
          "bg-surface border border-border rounded-full",
          "text-primary focus:ring-primary focus:ring-2 focus:ring-offset-0",
          "transition-colors duration-200",
          "disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed",
          p
        ),
        ...g
      }
    ),
    r && /* @__PURE__ */ u.jsx(
      "label",
      {
        htmlFor: w,
        className: O(
          "text-sm font-medium select-none",
          y ? "text-text-disabled cursor-not-allowed" : "text-text-primary cursor-pointer"
        ),
        children: r
      }
    )
  ] });
}, jt = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2"
}, Ft = ({
  open: r,
  onOpenChange: t,
  content: n,
  position: o = "top",
  delay: a = 0,
  disabled: i = !1,
  children: d,
  className: l
}) => {
  const p = z.useRef(null), g = () => {
    p.current !== null && (window.clearTimeout(p.current), p.current = null);
  };
  z.useEffect(() => g, []);
  const f = () => {
    if (!i) {
      if (g(), a > 0) {
        p.current = window.setTimeout(() => t == null ? void 0 : t(!0), a);
        return;
      }
      t == null || t(!0);
    }
  }, w = () => {
    g(), t == null || t(!1);
  }, y = z.Children.only(d);
  return /* @__PURE__ */ u.jsxs("span", { className: O("relative inline-flex", l), children: [
    z.cloneElement(y, {
      onMouseEnter: (E) => {
        var C, v;
        (v = (C = y.props).onMouseEnter) == null || v.call(C, E), f();
      },
      onMouseLeave: (E) => {
        var C, v;
        (v = (C = y.props).onMouseLeave) == null || v.call(C, E), w();
      },
      onFocus: (E) => {
        var C, v;
        (v = (C = y.props).onFocus) == null || v.call(C, E), f();
      },
      onBlur: (E) => {
        var C, v;
        (v = (C = y.props).onBlur) == null || v.call(C, E), w();
      }
    }),
    r && !i && /* @__PURE__ */ u.jsx(
      "span",
      {
        role: "tooltip",
        className: O(
          "absolute z-50",
          jt[o],
          "max-w-xs",
          "rounded-md border border-border bg-surface text-text-primary",
          "px-3 py-2 text-xs shadow-md"
        ),
        children: n
      }
    )
  ] });
}, lr = Lr(void 0), Wt = ({
  children: r,
  defaultTheme: t = "dark"
}) => {
  const [n, o] = er(t);
  return z.useEffect(() => {
    const a = document.documentElement;
    n === "light" ? (a.classList.add("theme-light"), a.classList.remove("theme-dark")) : (a.classList.add("theme-dark"), a.classList.remove("theme-light"));
  }, [n]), /* @__PURE__ */ u.jsx(lr.Provider, { value: { theme: n, setTheme: o }, children: r });
}, Gt = () => {
  const r = Fr(lr);
  if (r === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return r;
};
export {
  kt as Button,
  At as Card,
  Ot as CardContent,
  Mt as CardFooter,
  Nt as CardHeader,
  Tt as Checkbox,
  St as Input,
  zt as Loader,
  Lt as RadioButton,
  It as RadioGroup,
  Qe as Spinner,
  _t as SubmitButton,
  Wt as ThemeProvider,
  Pt as Toggle,
  Ft as Tooltip,
  Gt as useTheme
};
