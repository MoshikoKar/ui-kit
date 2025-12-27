import z, { useState as er, useId as Dr, useRef as $r, createContext as Wr, useContext as Gr } from "react";
var Ne = { exports: {} }, ue = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Br() {
  if (qe) return ue;
  qe = 1;
  var r = z, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(d, p, x) {
    var f, g = {}, y = null, P = null;
    x !== void 0 && (y = "" + x), p.key !== void 0 && (y = "" + p.key), p.ref !== void 0 && (P = p.ref);
    for (f in p) o.call(p, f) && !c.hasOwnProperty(f) && (g[f] = p[f]);
    if (d && d.defaultProps) for (f in p = d.defaultProps, p) g[f] === void 0 && (g[f] = p[f]);
    return { $$typeof: t, type: d, key: y, ref: P, props: g, _owner: i.current };
  }
  return ue.Fragment = n, ue.jsx = l, ue.jsxs = l, ue;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Vr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = z, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), P = Symbol.for("react.offscreen"), k = Symbol.iterator, h = "@@iterator";
    function v(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = k && e[k] || e[h];
      return typeof a == "function" ? a : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), b = 1; b < a; b++)
          u[b - 1] = arguments[b];
        B("error", e, u);
      }
    }
    function B(e, a, u) {
      {
        var b = N.ReactDebugCurrentFrame, E = b.getStackAddendum();
        E !== "" && (a += "%s", u = u.concat([E]));
        var S = u.map(function(C) {
          return String(C);
        });
        S.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var O = !1, V = !1, Y = !1, H = !1, me = !1, ee;
    ee = Symbol.for("react.module.reference");
    function ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || me || e === i || e === x || e === f || H || e === P || O || V || Y || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === l || e.$$typeof === d || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function ie(e, a, u) {
      var b = e.displayName;
      if (b)
        return b;
      var E = a.displayName || a.name || "";
      return E !== "" ? u + "(" + E + ")" : u;
    }
    function R(e) {
      return e.displayName || "Context";
    }
    function W(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case x:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var a = e;
            return R(a) + ".Consumer";
          case l:
            var u = e;
            return R(u._context) + ".Provider";
          case p:
            return ie(e, e.render, "ForwardRef");
          case g:
            var b = e.displayName || null;
            return b !== null ? b : W(e.type) || "Memo";
          case y: {
            var E = e, S = E._payload, C = E._init;
            try {
              return W(C(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, Z = 0, X, le, re, K, ce, D, Ae;
    function ze() {
    }
    ze.__reactDisabledLog = !0;
    function fr() {
      {
        if (Z === 0) {
          X = console.log, le = console.info, re = console.warn, K = console.error, ce = console.group, D = console.groupCollapsed, Ae = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ze,
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
        Z++;
      }
    }
    function pr() {
      {
        if (Z--, Z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: X
            }),
            info: F({}, e, {
              value: le
            }),
            warn: F({}, e, {
              value: re
            }),
            error: F({}, e, {
              value: K
            }),
            group: F({}, e, {
              value: ce
            }),
            groupCollapsed: F({}, e, {
              value: D
            }),
            groupEnd: F({}, e, {
              value: Ae
            })
          });
        }
        Z < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = N.ReactCurrentDispatcher, we;
    function xe(e, a, u) {
      {
        if (we === void 0)
          try {
            throw Error();
          } catch (E) {
            var b = E.stack.trim().match(/\n( *(at )?)/);
            we = b && b[1] || "";
          }
        return `
` + we + e;
      }
    }
    var _e = !1, he;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      he = new br();
    }
    function Me(e, a) {
      if (!e || _e)
        return "";
      {
        var u = he.get(e);
        if (u !== void 0)
          return u;
      }
      var b;
      _e = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = ye.current, ye.current = null, fr();
      try {
        if (a) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (L) {
              b = L;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (L) {
              b = L;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            b = L;
          }
          e();
        }
      } catch (L) {
        if (L && b && typeof L.stack == "string") {
          for (var w = L.stack.split(`
`), I = b.stack.split(`
`), A = w.length - 1, M = I.length - 1; A >= 1 && M >= 0 && w[A] !== I[M]; )
            M--;
          for (; A >= 1 && M >= 0; A--, M--)
            if (w[A] !== I[M]) {
              if (A !== 1 || M !== 1)
                do
                  if (A--, M--, M < 0 || w[A] !== I[M]) {
                    var $ = `
` + w[A].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, $), $;
                  }
                while (A >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        _e = !1, ye.current = S, pr(), Error.prepareStackTrace = E;
      }
      var oe = e ? e.displayName || e.name : "", Q = oe ? xe(oe) : "";
      return typeof e == "function" && he.set(e, Q), Q;
    }
    function mr(e, a, u) {
      return Me(e, !1);
    }
    function xr(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function ge(e, a, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, xr(e));
      if (typeof e == "string")
        return xe(e);
      switch (e) {
        case x:
          return xe("Suspense");
        case f:
          return xe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return mr(e.render);
          case g:
            return ge(e.type, a, u);
          case y: {
            var b = e, E = b._payload, S = b._init;
            try {
              return ge(S(E), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ie = {}, Le = N.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var a = e._owner, u = ge(e.type, e._source, a ? a.type : null);
        Le.setExtraStackFrame(u);
      } else
        Le.setExtraStackFrame(null);
    }
    function hr(e, a, u, b, E) {
      {
        var S = Function.call.bind(de);
        for (var C in e)
          if (S(e, C)) {
            var w = void 0;
            try {
              if (typeof e[C] != "function") {
                var I = Error((b || "React class") + ": " + u + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              w = e[C](a, C, b, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              w = A;
            }
            w && !(w instanceof Error) && (ve(E), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", b || "React class", u, C, typeof w), ve(null)), w instanceof Error && !(w.message in Ie) && (Ie[w.message] = !0, ve(E), j("Failed %s type: %s", u, w.message), ve(null));
          }
      }
    }
    var gr = Array.isArray;
    function Ce(e) {
      return gr(e);
    }
    function vr(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function yr(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Fe(e) {
      if (yr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(e)), Oe(e);
    }
    var De = N.ReactCurrentOwner, wr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, We;
    function _r(e) {
      if (de.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Cr(e) {
      if (de.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jr(e, a) {
      typeof e.ref == "string" && De.current;
    }
    function kr(e, a) {
      {
        var u = function() {
          $e || ($e = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Er(e, a) {
      {
        var u = function() {
          We || (We = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Rr = function(e, a, u, b, E, S, C) {
      var w = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: u,
        props: C,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return w._store = {}, Object.defineProperty(w._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(w, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.defineProperty(w, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(w.props), Object.freeze(w)), w;
    };
    function Sr(e, a, u, b, E) {
      {
        var S, C = {}, w = null, I = null;
        u !== void 0 && (Fe(u), w = "" + u), Cr(a) && (Fe(a.key), w = "" + a.key), _r(a) && (I = a.ref, jr(a, E));
        for (S in a)
          de.call(a, S) && !wr.hasOwnProperty(S) && (C[S] = a[S]);
        if (e && e.defaultProps) {
          var A = e.defaultProps;
          for (S in A)
            C[S] === void 0 && (C[S] = A[S]);
        }
        if (w || I) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          w && kr(C, M), I && Er(C, M);
        }
        return Rr(e, w, I, E, b, De.current, C);
      }
    }
    var je = N.ReactCurrentOwner, Ge = N.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var a = e._owner, u = ge(e.type, e._source, a ? a.type : null);
        Ge.setExtraStackFrame(u);
      } else
        Ge.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Be() {
      {
        if (je.current) {
          var e = W(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Nr(e) {
      return "";
    }
    var Ve = {};
    function Tr(e) {
      {
        var a = Be();
        if (!a) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function Ue(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = Tr(a);
        if (Ve[u])
          return;
        Ve[u] = !0;
        var b = "";
        e && e._owner && e._owner !== je.current && (b = " It was passed a child from " + W(e._owner.type) + "."), te(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, b), te(null);
      }
    }
    function Ye(e, a) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var u = 0; u < e.length; u++) {
            var b = e[u];
            Ee(b) && Ue(b, a);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = v(e);
          if (typeof E == "function" && E !== e.entries)
            for (var S = E.call(e), C; !(C = S.next()).done; )
              Ee(C.value) && Ue(C.value, a);
        }
      }
    }
    function Pr(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === g))
          u = a.propTypes;
        else
          return;
        if (u) {
          var b = W(a);
          hr(u, e.props, "prop", b, e);
        } else if (a.PropTypes !== void 0 && !ke) {
          ke = !0;
          var E = W(a);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(e) {
      {
        for (var a = Object.keys(e.props), u = 0; u < a.length; u++) {
          var b = a[u];
          if (b !== "children" && b !== "key") {
            te(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", b), te(null);
            break;
          }
        }
        e.ref !== null && (te(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    var Ze = {};
    function Ke(e, a, u, b, E, S) {
      {
        var C = ae(e);
        if (!C) {
          var w = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Nr();
          I ? w += I : w += Be();
          var A;
          e === null ? A = "null" : Ce(e) ? A = "array" : e !== void 0 && e.$$typeof === t ? (A = "<" + (W(e.type) || "Unknown") + " />", w = " Did you accidentally export a JSX literal instead of a component?") : A = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, w);
        }
        var M = Sr(e, a, u, E, S);
        if (M == null)
          return M;
        if (C) {
          var $ = a.children;
          if ($ !== void 0)
            if (b)
              if (Ce($)) {
                for (var oe = 0; oe < $.length; oe++)
                  Ye($[oe], e);
                Object.freeze && Object.freeze($);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye($, e);
        }
        if (de.call(a, "key")) {
          var Q = W(e), L = Object.keys(a).filter(function(Fr) {
            return Fr !== "key";
          }), Re = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[Q + Re]) {
            var Or = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, Q, Or, Q), Ze[Q + Re] = !0;
          }
        }
        return e === o ? Ar(M) : Pr(M), M;
      }
    }
    function zr(e, a, u) {
      return Ke(e, a, u, !0);
    }
    function Mr(e, a, u) {
      return Ke(e, a, u, !1);
    }
    var Ir = Mr, Lr = zr;
    fe.Fragment = o, fe.jsx = Ir, fe.jsxs = Lr;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Ne.exports = Br() : Ne.exports = Vr();
var s = Ne.exports;
function rr(r) {
  var t, n, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var i = r.length;
    for (t = 0; t < i; t++) r[t] && (n = rr(r[t])) && (o && (o += " "), o += n);
  } else for (n in r) r[n] && (o && (o += " "), o += n);
  return o;
}
function Ur() {
  for (var r, t, n = 0, o = "", i = arguments.length; n < i; n++) (r = arguments[n]) && (t = rr(r)) && (o && (o += " "), o += t);
  return o;
}
const Pe = "-", Yr = (r) => {
  const t = Kr(r), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = r;
  return {
    getClassGroupId: (l) => {
      const d = l.split(Pe);
      return d[0] === "" && d.length !== 1 && d.shift(), tr(d, t) || Zr(l);
    },
    getConflictingClassGroupIds: (l, d) => {
      const p = n[l] || [];
      return d && o[l] ? [...p, ...o[l]] : p;
    }
  };
}, tr = (r, t) => {
  var l;
  if (r.length === 0)
    return t.classGroupId;
  const n = r[0], o = t.nextPart.get(n), i = o ? tr(r.slice(1), o) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const c = r.join(Pe);
  return (l = t.validators.find(({
    validator: d
  }) => d(c))) == null ? void 0 : l.classGroupId;
}, He = /^\[(.+)\]$/, Zr = (r) => {
  if (He.test(r)) {
    const t = He.exec(r)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Kr = (r) => {
  const {
    theme: t,
    prefix: n
  } = r, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Jr(Object.entries(r.classGroups), n).forEach(([c, l]) => {
    Te(l, o, c, t);
  }), o;
}, Te = (r, t, n, o) => {
  r.forEach((i) => {
    if (typeof i == "string") {
      const c = i === "" ? t : Xe(t, i);
      c.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (qr(i)) {
        Te(i(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([c, l]) => {
      Te(l, Xe(t, c), n, o);
    });
  });
}, Xe = (r, t) => {
  let n = r;
  return t.split(Pe).forEach((o) => {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}, qr = (r) => r.isThemeGetter, Jr = (r, t) => t ? r.map(([n, o]) => {
  const i = o.map((c) => typeof c == "string" ? t + c : typeof c == "object" ? Object.fromEntries(Object.entries(c).map(([l, d]) => [t + l, d])) : c);
  return [n, i];
}) : r, Hr = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  const i = (c, l) => {
    n.set(c, l), t++, t > r && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(c) {
      let l = n.get(c);
      if (l !== void 0)
        return l;
      if ((l = o.get(c)) !== void 0)
        return i(c, l), l;
    },
    set(c, l) {
      n.has(c) ? n.set(c, l) : i(c, l);
    }
  };
}, or = "!", Xr = (r) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = r, o = t.length === 1, i = t[0], c = t.length, l = (d) => {
    const p = [];
    let x = 0, f = 0, g;
    for (let v = 0; v < d.length; v++) {
      let N = d[v];
      if (x === 0) {
        if (N === i && (o || d.slice(v, v + c) === t)) {
          p.push(d.slice(f, v)), f = v + c;
          continue;
        }
        if (N === "/") {
          g = v;
          continue;
        }
      }
      N === "[" ? x++ : N === "]" && x--;
    }
    const y = p.length === 0 ? d : d.substring(f), P = y.startsWith(or), k = P ? y.substring(1) : y, h = g && g > f ? g - f : void 0;
    return {
      modifiers: p,
      hasImportantModifier: P,
      baseClassName: k,
      maybePostfixModifierPosition: h
    };
  };
  return n ? (d) => n({
    className: d,
    parseClassName: l
  }) : l;
}, Qr = (r) => {
  if (r.length <= 1)
    return r;
  const t = [];
  let n = [];
  return r.forEach((o) => {
    o[0] === "[" ? (t.push(...n.sort(), o), n = []) : n.push(o);
  }), t.push(...n.sort()), t;
}, et = (r) => ({
  cache: Hr(r.cacheSize),
  parseClassName: Xr(r),
  ...Yr(r)
}), rt = /\s+/, tt = (r, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  } = t, c = [], l = r.trim().split(rt);
  let d = "";
  for (let p = l.length - 1; p >= 0; p -= 1) {
    const x = l[p], {
      modifiers: f,
      hasImportantModifier: g,
      baseClassName: y,
      maybePostfixModifierPosition: P
    } = n(x);
    let k = !!P, h = o(k ? y.substring(0, P) : y);
    if (!h) {
      if (!k) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      if (h = o(y), !h) {
        d = x + (d.length > 0 ? " " + d : d);
        continue;
      }
      k = !1;
    }
    const v = Qr(f).join(":"), N = g ? v + or : v, j = N + h;
    if (c.includes(j))
      continue;
    c.push(j);
    const B = i(h, k);
    for (let O = 0; O < B.length; ++O) {
      const V = B[O];
      c.push(N + V);
    }
    d = x + (d.length > 0 ? " " + d : d);
  }
  return d;
};
function ot() {
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
function nt(r, ...t) {
  let n, o, i, c = l;
  function l(p) {
    const x = t.reduce((f, g) => g(f), r());
    return n = et(x), o = n.cache.get, i = n.cache.set, c = d, d(p);
  }
  function d(p) {
    const x = o(p);
    if (x)
      return x;
    const f = tt(p, n);
    return i(p, f), f;
  }
  return function() {
    return c(ot.apply(null, arguments));
  };
}
const T = (r) => {
  const t = (n) => n[r] || [];
  return t.isThemeGetter = !0, t;
}, sr = /^\[(?:([a-z-]+):)?(.+)\]$/i, st = /^\d+\/\d+$/, at = /* @__PURE__ */ new Set(["px", "full", "screen"]), it = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, lt = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ct = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ut = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, U = (r) => ne(r) || at.has(r) || st.test(r), q = (r) => se(r, "length", vt), ne = (r) => !!r && !Number.isNaN(Number(r)), Se = (r) => se(r, "number", ne), pe = (r) => !!r && Number.isInteger(Number(r)), ft = (r) => r.endsWith("%") && ne(r.slice(0, -1)), m = (r) => sr.test(r), J = (r) => it.test(r), pt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), bt = (r) => se(r, pt, ar), mt = (r) => se(r, "position", ar), xt = /* @__PURE__ */ new Set(["image", "url"]), ht = (r) => se(r, xt, wt), gt = (r) => se(r, "", yt), be = () => !0, se = (r, t, n) => {
  const o = sr.exec(r);
  return o ? o[1] ? typeof t == "string" ? o[1] === t : t.has(o[1]) : n(o[2]) : !1;
}, vt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lt.test(r) && !ct.test(r)
), ar = () => !1, yt = (r) => dt.test(r), wt = (r) => ut.test(r), _t = () => {
  const r = T("colors"), t = T("spacing"), n = T("blur"), o = T("brightness"), i = T("borderColor"), c = T("borderRadius"), l = T("borderSpacing"), d = T("borderWidth"), p = T("contrast"), x = T("grayscale"), f = T("hueRotate"), g = T("invert"), y = T("gap"), P = T("gradientColorStops"), k = T("gradientColorStopPositions"), h = T("inset"), v = T("margin"), N = T("opacity"), j = T("padding"), B = T("saturate"), O = T("scale"), V = T("sepia"), Y = T("skew"), H = T("space"), me = T("translate"), ee = () => ["auto", "contain", "none"], ae = () => ["auto", "hidden", "clip", "visible", "scroll"], ie = () => ["auto", m, t], R = () => [m, t], W = () => ["", U, q], F = () => ["auto", ne, m], Z = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], X = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], re = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], K = () => ["", "0", m], ce = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], D = () => [ne, m];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [be],
      spacing: [U, q],
      blur: ["none", "", J, m],
      brightness: D(),
      borderColor: [r],
      borderRadius: ["none", "", "full", J, m],
      borderSpacing: R(),
      borderWidth: W(),
      contrast: D(),
      grayscale: K(),
      hueRotate: D(),
      invert: K(),
      gap: R(),
      gradientColorStops: [r],
      gradientColorStopPositions: [ft, q],
      inset: ie(),
      margin: ie(),
      opacity: D(),
      padding: R(),
      saturate: D(),
      scale: D(),
      sepia: K(),
      skew: D(),
      space: R(),
      translate: R()
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
        "break-after": ce()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ce()
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
        object: [...Z(), m]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ae()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ae()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ae()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ee()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ee()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ee()
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
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
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
        z: ["auto", pe, m]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ie()
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
        grow: K()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: K()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", pe, m]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [be]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", pe, m]
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
        "grid-rows": [be]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [pe, m]
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
        justify: ["normal", ...re()]
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
        content: ["normal", ...re(), "baseline"]
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
        "place-content": [...re(), "baseline"]
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
        p: [j]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [j]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [j]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [j]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [j]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [j]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [j]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [j]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [j]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [H]
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
        "space-y": [H]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Se]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [be]
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
        "line-clamp": ["none", ne, Se]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, m]
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
        "placeholder-opacity": [N]
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
        "text-opacity": [N]
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
        decoration: [...X(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", U, q]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", U, m]
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
        indent: R()
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
        "bg-opacity": [N]
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
        bg: [...Z(), mt]
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
        bg: ["auto", "cover", "contain", bt]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ht]
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
        from: [k]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [k]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [P]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [P]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [P]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [c]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [c]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [c]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [c]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [c]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [c]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [c]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [c]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [c]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [c]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [c]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [c]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [c]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [c]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [c]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [d]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [d]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [d]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [d]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [d]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [d]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [d]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [d]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [d]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [N]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...X(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [d]
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
        "divide-y": [d]
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
        "divide-opacity": [N]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: X()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...X()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, m]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [U, q]
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
        ring: W()
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
        "ring-opacity": [N]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [U, q]
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
        shadow: ["", "inner", "none", J, gt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [be]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [N]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        grayscale: [x]
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
        invert: [g]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [V]
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
        "backdrop-grayscale": [x]
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
        "backdrop-invert": [g]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [N]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [V]
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
        "border-spacing": [l]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [l]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [l]
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
        duration: D()
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
        delay: D()
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
        scale: [O]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [O]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [O]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [pe, m]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [me]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [me]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [Y]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [Y]
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
        "scroll-m": R()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
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
        stroke: [U, q, Se]
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
}, Ct = /* @__PURE__ */ nt(_t);
function _(...r) {
  return Ct(Ur(r));
}
const jt = {
  primary: "bg-primary text-black theme-light:text-white border border-primary shadow-[inset_-4px_-4px_8px_var(--color-primary-shadow-dark),inset_4px_4px_8px_var(--color-primary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-primary-shadow-dark),_inset_-3px_-3px_6px_var(--color-primary-shadow-light)] disabled:shadow-none disabled:bg-primary-disabled disabled:text-text-disabled",
  secondary: "bg-secondary text-white border border-secondary shadow-[inset_-4px_-4px_8px_var(--color-secondary-shadow-dark),inset_4px_4px_8px_var(--color-secondary-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-secondary-shadow-dark),_inset_-3px_-3px_6px_var(--color-secondary-shadow-light)] disabled:shadow-none disabled:bg-secondary-disabled disabled:text-text-disabled",
  danger: "bg-danger text-black theme-light:text-white border border-danger shadow-[inset_-4px_-4px_8px_var(--color-danger-shadow-dark),inset_4px_4px_8px_var(--color-danger-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-danger-shadow-dark),_inset_-3px_-3px_6px_var(--color-danger-shadow-light)] disabled:shadow-none disabled:bg-danger-disabled disabled:text-text-disabled",
  ghost: "bg-ghost text-text-primary border border-transparent shadow-[inset_-4px_-4px_8px_var(--color-ghost-shadow-dark),inset_4px_4px_8px_var(--color-ghost-shadow-light)] active:shadow-[inset_3px_3px_6px_var(--color-ghost-shadow-dark),_inset_-3px_-3px_6px_var(--color-ghost-shadow-light)] disabled:shadow-none disabled:bg-ghost-disabled disabled:text-text-disabled"
}, kt = {
  sm: "px-3 py-1 text-xs font-medium rounded-lg h-8",
  md: "px-4 py-1.5 text-sm font-medium rounded-lg h-10",
  lg: "px-6 py-2 text-md font-medium rounded-lg h-12"
}, ir = z.forwardRef(({
  variant: r = "primary",
  size: t = "md",
  loading: n = !1,
  disabled: o = !1,
  className: i,
  children: c,
  ...l
}, d) => /* @__PURE__ */ s.jsxs(
  "button",
  {
    ref: d,
    className: _(
      "inline-flex items-center justify-center",
      "font-medium transition-all duration-200",
      "focus-visible focus:outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
      jt[r],
      kt[t],
      i
    ),
    disabled: o || n,
    ...l,
    children: [
      /* @__PURE__ */ s.jsx("span", { className: _("inline-flex items-center", n ? "w-4 h-4 mr-2" : "w-0 h-4"), children: /* @__PURE__ */ s.jsxs(
        "svg",
        {
          className: _("animate-spin h-4 w-4", !n && "opacity-0"),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          children: [
            /* @__PURE__ */ s.jsx(
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
            /* @__PURE__ */ s.jsx(
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
      c
    ]
  }
));
ir.displayName = "Button";
const Et = "_button_7snfv_7", Rt = "_state_7snfv_75", St = "_icon_7snfv_149", Nt = "_outline_7snfv_207", G = {
  button: Et,
  "button--size-sm": "_button--size-sm_7snfv_59",
  state: Rt,
  "button--size-md": "_button--size-md_7snfv_83",
  "button--size-lg": "_button--size-lg_7snfv_107",
  icon: St,
  outline: Nt,
  "state--default": "_state--default_7snfv_231",
  "state--sent": "_state--sent_7snfv_717"
}, Qe = (r) => r.split("").map((t, n) => {
  const o = t === " " ? " " : t;
  return /* @__PURE__ */ s.jsx("span", { style: { "--i": n }, children: o }, n);
}), Tt = {
  sm: G["button--size-sm"],
  md: G["button--size-md"],
  lg: G["button--size-lg"]
}, Gt = ({
  children: r = "Send Message",
  successText: t = "Sent",
  onSubmit: n,
  disabled: o,
  size: i = "md",
  className: c,
  ...l
}) => {
  const [d, p] = er(!1), x = Dr(), f = $r(null), g = async (y) => {
    var P, k;
    if (n && !d)
      try {
        await n(), p(!0), (P = f.current) == null || P.focus(), setTimeout(() => {
          var h;
          p(!1), (h = f.current) == null || h.blur();
        }, 3e3);
      } catch (h) {
        console.error("Submit failed:", h);
      }
    (k = l.onClick) == null || k.call(l, y);
  };
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      ...l,
      ref: f,
      type: "submit",
      disabled: o,
      onClick: g,
      className: _(G.button, Tt[i], c),
      "aria-label": d ? "Submission successful" : l["aria-label"] || "Submit",
      "aria-disabled": o,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: G.outline }),
        /* @__PURE__ */ s.jsxs("div", { className: _(G.state, G["state--default"]), children: [
          /* @__PURE__ */ s.jsx("div", { className: G.icon, children: /* @__PURE__ */ s.jsxs(
            "svg",
            {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                /* @__PURE__ */ s.jsxs("g", { style: { filter: `url(#${x})` }, children: [
                  /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      d: "M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z",
                      fill: "currentColor"
                    }
                  ),
                  /* @__PURE__ */ s.jsx(
                    "path",
                    {
                      d: "M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z",
                      fill: "currentColor"
                    }
                  )
                ] }),
                /* @__PURE__ */ s.jsx("defs", { children: /* @__PURE__ */ s.jsx("filter", { id: x, children: /* @__PURE__ */ s.jsx(
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
          /* @__PURE__ */ s.jsx("p", { children: Qe(typeof r == "string" ? r : "Send Message") })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { className: _(G.state, G["state--sent"]), children: [
          /* @__PURE__ */ s.jsx("div", { className: G.icon, children: /* @__PURE__ */ s.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              height: "1em",
              width: "1em",
              strokeWidth: "0.5px",
              stroke: "black",
              children: /* @__PURE__ */ s.jsxs("g", { style: { filter: `url(#${x})` }, children: [
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                  }
                ),
                /* @__PURE__ */ s.jsx(
                  "path",
                  {
                    fill: "currentColor",
                    d: "M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                  }
                )
              ] })
            }
          ) }),
          /* @__PURE__ */ s.jsx("p", { children: Qe(t) })
        ] })
      ]
    }
  );
}, Pt = {
  sm: "px-3 py-1.5 text-xs rounded-md min-h-[2rem]",
  md: "px-4 py-2 text-sm rounded-md min-h-[2.5rem]",
  lg: "px-6 py-3 text-md rounded-lg min-h-[3rem]"
}, lr = z.forwardRef(({
  size: r = "md",
  error: t = !1,
  className: n,
  disabled: o,
  ...i
}, c) => /* @__PURE__ */ s.jsx(
  "input",
  {
    ref: c,
    className: _(
      "w-full",
      "bg-surface border border-border",
      "text-text-primary placeholder-text-secondary",
      "transition-colors duration-200",
      "focus-visible focus:outline-none focus:border-border-focus",
      "disabled:bg-surface-secondary disabled:text-text-disabled disabled:cursor-not-allowed",
      t && "border-danger focus:border-danger",
      Pt[r],
      n
    ),
    disabled: o,
    ...i
  }
));
lr.displayName = "Input";
const At = z.forwardRef(({
  label: r,
  error: t = !1,
  className: n,
  disabled: o,
  checked: i,
  onChange: c,
  ...l
}, d) => {
  const p = z.useId();
  return /* @__PURE__ */ s.jsxs("div", { className: _("flex items-center space-x-2", n), children: [
    /* @__PURE__ */ s.jsxs("label", { className: _("checkbox-container", o && "opacity-50 cursor-not-allowed", !o && "cursor-pointer"), children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          ref: d,
          id: p,
          type: "checkbox",
          disabled: o,
          checked: i,
          onChange: c,
          "aria-checked": i,
          "aria-invalid": t,
          "aria-disabled": o,
          ...l
        }
      ),
      /* @__PURE__ */ s.jsx("svg", { viewBox: "0 0 64 64", height: "1em", width: "1em", children: /* @__PURE__ */ s.jsx(
        "path",
        {
          d: "M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16",
          pathLength: "575.0541381835938",
          className: _("checkbox-path", t && "checkbox-path-error")
        }
      ) })
    ] }),
    r && /* @__PURE__ */ s.jsx(
      "label",
      {
        htmlFor: p,
        className: _(
          "text-sm font-medium select-none",
          o ? "text-text-disabled cursor-not-allowed" : "text-text-primary cursor-pointer"
        ),
        children: r
      }
    )
  ] });
});
At.displayName = "Checkbox";
const Bt = ({
  label: r,
  error: t = !1,
  className: n,
  disabled: o,
  checked: i,
  onChange: c,
  id: l,
  ...d
}) => {
  const p = l || z.useId(), x = (f) => {
    if ((f.key === "Enter" || f.key === " ") && !o) {
      f.preventDefault();
      const g = document.getElementById(p);
      if (g) {
        g.checked = !g.checked;
        const y = new Event("change", { bubbles: !0 });
        g.dispatchEvent(y);
      }
    }
  };
  return /* @__PURE__ */ s.jsxs("div", { className: _("toggle-wrapper", t && "toggle-wrapper--error", n), children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        id: p,
        className: "toggle-checkbox",
        type: "checkbox",
        checked: i,
        onChange: c,
        disabled: o,
        role: "switch",
        "aria-checked": i,
        "aria-disabled": o,
        ...d
      }
    ),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "toggle-container",
        onKeyDown: x,
        tabIndex: o ? -1 : 0,
        role: "button",
        "aria-hidden": "true",
        children: /* @__PURE__ */ s.jsx("div", { className: "toggle-button", children: /* @__PURE__ */ s.jsx("div", { className: "toggle-button-circles-container", children: Array.from({ length: 12 }).map((f, g) => /* @__PURE__ */ s.jsx("div", { className: "toggle-button-circle" }, g)) }) })
      }
    ),
    r && /* @__PURE__ */ s.jsx(
      "label",
      {
        htmlFor: p,
        className: _(
          "text-sm font-medium select-none ml-2",
          o ? "text-text-disabled cursor-not-allowed" : "text-text-primary cursor-pointer"
        ),
        children: r
      }
    )
  ] });
}, Vt = ({ className: r, ...t }) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: _(
      "card",
      "w-full",
      "rounded-lg border border-border",
      "bg-surface-secondary text-text-primary",
      "shadow-sm",
      r
    ),
    ...t
  }
), Ut = ({ className: r, ...t }) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: _("flex items-start justify-between gap-4 px-6 py-4 border-b border-border", r),
    ...t
  }
), Yt = ({ className: r, ...t }) => /* @__PURE__ */ s.jsx("div", { className: _("px-6 py-4", r), ...t }), Zt = ({ className: r, ...t }) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: _("flex items-center justify-end gap-3 px-6 py-4 border-t border-border", r),
    ...t
  }
), cr = {
  sm: 0.7,
  md: 1,
  lg: 1.3
}, Kt = ({ size: r = "md", className: t, ...n }) => {
  const o = 8 * cr[r];
  return /* @__PURE__ */ s.jsxs("div", { className: _("loader", t), style: { fontSize: `${o}px` }, ...n, children: [
    /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) }),
    /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) })
  ] });
}, qt = ({
  size: r = "md",
  variant: t = "inline",
  label: n,
  className: o,
  ...i
}) => {
  const c = 8 * cr[r];
  return t === "container" ? /* @__PURE__ */ s.jsx(
    "div",
    {
      className: _(
        "relative w-full min-h-[8rem] rounded-lg border border-border bg-surface-secondary flex items-center justify-center",
        o
      ),
      ...i,
      children: /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col items-center gap-3", children: [
        /* @__PURE__ */ s.jsxs("div", { className: "loader", style: { fontSize: `${c}px` }, children: [
          /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) }),
          /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) })
        ] }),
        n && /* @__PURE__ */ s.jsx("span", { className: "text-sm text-text-secondary", children: n })
      ] })
    }
  ) : /* @__PURE__ */ s.jsxs("div", { className: _("inline-flex items-center gap-2", o), ...i, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "loader", style: { fontSize: `${c}px` }, children: [
      /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-1", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) }),
      /* @__PURE__ */ s.jsx("div", { className: "loader-face loader-face-2", children: /* @__PURE__ */ s.jsx("div", { className: "loader-circle" }) })
    ] }),
    n && /* @__PURE__ */ s.jsx("span", { className: "text-sm text-text-secondary", children: n })
  ] });
}, dr = z.createContext(null), Jt = ({
  name: r,
  legend: t,
  value: n,
  defaultValue: o,
  disabled: i = !1,
  onValueChange: c,
  className: l,
  children: d,
  ...p
}) => {
  const x = n !== void 0, [f, g] = z.useState(o), y = x ? n : f, P = z.useCallback(
    (k) => {
      x || g(k), c == null || c(k);
    },
    [x, c]
  );
  return /* @__PURE__ */ s.jsx(dr.Provider, { value: { name: r, value: y, disabled: i, onValueChange: P }, children: /* @__PURE__ */ s.jsxs(
    "fieldset",
    {
      className: _("radio-input", i && "opacity-60", l),
      disabled: i,
      ...p,
      children: [
        t && /* @__PURE__ */ s.jsx("legend", { className: "text-sm font-medium text-text-primary", children: t }),
        d
      ]
    }
  ) });
}, Ht = ({
  label: r,
  value: t,
  disabled: n,
  checked: o,
  defaultChecked: i,
  name: c,
  onChange: l,
  onCheckedChange: d,
  className: p,
  ...x
}) => {
  const f = z.useContext(dr), g = z.useId(), y = !!(n ?? (f == null ? void 0 : f.disabled)), P = c ?? (f == null ? void 0 : f.name), k = !!f, h = o !== void 0, [v, N] = z.useState(!!i), j = k ? (f == null ? void 0 : f.value) === t : h ? !!o : v, B = (V) => {
    var H;
    const Y = V.target.checked;
    k && Y ? (H = f == null ? void 0 : f.onValueChange) == null || H.call(f, t) : h || N(Y), d == null || d(Y), l == null || l(V);
  }, O = /* @__PURE__ */ s.jsxs("label", { htmlFor: g, className: _(y && "cursor-not-allowed", p), role: "radio", "aria-checked": j, "aria-disabled": y, children: [
    /* @__PURE__ */ s.jsx(
      "input",
      {
        id: g,
        type: "radio",
        name: P,
        value: t,
        checked: j,
        disabled: y,
        onChange: B,
        role: "radio",
        "aria-checked": j,
        "aria-disabled": y,
        ...x
      }
    ),
    /* @__PURE__ */ s.jsx("span", { children: r || "" })
  ] });
  return k ? O : /* @__PURE__ */ s.jsx("div", { className: "radio-input", children: O });
}, zt = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-1",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-1",
  left: "right-full top-1/2 -translate-y-1/2 mr-1",
  right: "left-full top-1/2 -translate-y-1/2 ml-1"
}, Mt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-px",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-px",
  left: "left-full top-1/2 -translate-y-1/2 -ml-px",
  right: "right-full top-1/2 -translate-y-1/2 -mr-px"
}, It = {
  top: "border-t-border border-r-transparent border-b-transparent border-l-transparent border-t-[6px] border-r-[6px] border-l-[6px]",
  bottom: "border-b-border border-r-transparent border-t-transparent border-l-transparent border-b-[6px] border-r-[6px] border-l-[6px]",
  left: "border-l-border border-r-transparent border-t-transparent border-b-transparent border-l-[6px] border-t-[6px] border-b-[6px]",
  right: "border-r-border border-l-transparent border-t-transparent border-b-transparent border-r-[6px] border-t-[6px] border-b-[6px]"
}, Lt = {
  top: "top-full left-1/2 -translate-x-1/2 -mt-[5px]",
  bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-[5px]",
  left: "left-full top-1/2 -translate-y-1/2 -ml-[5px]",
  right: "right-full top-1/2 -translate-y-1/2 -mr-[5px]"
}, Xt = ({
  open: r,
  onOpenChange: t,
  content: n,
  position: o = "top",
  delay: i = 0,
  disabled: c = !1,
  children: l,
  className: d
}) => {
  const p = z.useRef(null), x = () => {
    p.current !== null && (window.clearTimeout(p.current), p.current = null);
  };
  z.useEffect(() => x, []);
  const f = () => {
    if (!c) {
      if (x(), i > 0) {
        p.current = window.setTimeout(() => t == null ? void 0 : t(!0), i);
        return;
      }
      t == null || t(!0);
    }
  }, g = () => {
    x(), t == null || t(!1);
  }, y = z.Children.only(l), P = z.useId();
  return /* @__PURE__ */ s.jsxs("span", { className: _("relative inline-block", d), children: [
    z.cloneElement(y, {
      "aria-describedby": r && !c ? P : void 0,
      onMouseEnter: (k) => {
        var h, v;
        (v = (h = y.props).onMouseEnter) == null || v.call(h, k), f();
      },
      onMouseLeave: (k) => {
        var h, v;
        (v = (h = y.props).onMouseLeave) == null || v.call(h, k), g();
      },
      onFocus: (k) => {
        var h, v;
        (v = (h = y.props).onFocus) == null || v.call(h, k), f();
      },
      onBlur: (k) => {
        var h, v;
        (v = (h = y.props).onBlur) == null || v.call(h, k), g();
      }
    }),
    r && !c && /* @__PURE__ */ s.jsxs(
      "span",
      {
        id: P,
        role: "tooltip",
        className: _(
          "absolute z-50 pointer-events-none",
          zt[o],
          "whitespace-nowrap",
          "rounded-md border border-border bg-surface text-text-primary",
          "px-3 py-2 text-xs shadow-md"
        ),
        children: [
          n,
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: _(
                "absolute w-0 h-0",
                Mt[o],
                It[o]
              )
            }
          ),
          /* @__PURE__ */ s.jsx(
            "span",
            {
              className: _(
                "absolute w-0 h-0 bg-surface",
                Lt[o],
                o === "top" && "border-t-[5px] border-r-[5px] border-l-[5px] border-t-surface border-r-transparent border-l-transparent",
                o === "bottom" && "border-b-[5px] border-r-[5px] border-l-[5px] border-b-surface border-r-transparent border-l-transparent",
                o === "left" && "border-l-[5px] border-t-[5px] border-b-[5px] border-l-surface border-t-transparent border-b-transparent",
                o === "right" && "border-r-[5px] border-t-[5px] border-b-[5px] border-r-surface border-t-transparent border-b-transparent"
              )
            }
          )
        ]
      }
    )
  ] });
}, ur = Wr(void 0), Qt = ({
  children: r,
  defaultTheme: t
}) => {
  const n = () => {
    if (typeof window < "u") {
      const l = localStorage.getItem("theme");
      if (l === "light" || l === "dark")
        return l;
    }
    return typeof window < "u" && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : t || "dark";
  }, [o, i] = er(n), c = z.useCallback((l) => {
    i(l), typeof window < "u" && localStorage.setItem("theme", l);
  }, []);
  return z.useEffect(() => {
    if (typeof document > "u") return;
    const l = document.documentElement;
    o === "light" ? (l.classList.add("theme-light"), l.classList.remove("theme-dark")) : (l.classList.add("theme-dark"), l.classList.remove("theme-light"));
  }, [o]), z.useEffect(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const l = window.matchMedia("(prefers-color-scheme: dark)"), d = (p) => {
      typeof window < "u" && !localStorage.getItem("theme") && i(p.matches ? "dark" : "light");
    };
    if (l.addEventListener)
      return l.addEventListener("change", d), () => l.removeEventListener("change", d);
    if (l.addListener)
      return l.addListener(d), () => l.removeListener(d);
  }, []), /* @__PURE__ */ s.jsx(ur.Provider, { value: { theme: o, setTheme: c }, children: r });
}, Ot = () => {
  const r = Gr(ur);
  if (r === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return r;
}, eo = ({
  className: r,
  showLabel: t = !0
}) => {
  const { theme: n, setTheme: o } = Ot(), i = n === "dark", c = () => {
    o(i ? "light" : "dark");
  }, l = (d) => {
    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), c());
  };
  return /* @__PURE__ */ s.jsxs("div", { className: _("flex items-center gap-3", r), children: [
    /* @__PURE__ */ s.jsxs(
      "label",
      {
        className: "theme-switch cursor-pointer",
        onKeyDown: l,
        tabIndex: 0,
        role: "switch",
        "aria-checked": i,
        "aria-label": i ? "Switch to light mode" : "Switch to dark mode",
        children: [
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "checkbox",
              className: "theme-switch__checkbox",
              checked: i,
              onChange: c,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ s.jsxs("div", { className: "theme-switch__container", children: [
            /* @__PURE__ */ s.jsx("div", { className: "theme-switch__clouds" }),
            /* @__PURE__ */ s.jsx("div", { className: "theme-switch__stars-container", children: /* @__PURE__ */ s.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 144 55", fill: "none", children: /* @__PURE__ */ s.jsx(
              "path",
              {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
                fill: "currentColor"
              }
            ) }) }),
            /* @__PURE__ */ s.jsx("div", { className: "theme-switch__circle-container", children: /* @__PURE__ */ s.jsx("div", { className: "theme-switch__sun-moon-container", children: /* @__PURE__ */ s.jsxs("div", { className: "theme-switch__moon", children: [
              /* @__PURE__ */ s.jsx("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s.jsx("div", { className: "theme-switch__spot" }),
              /* @__PURE__ */ s.jsx("div", { className: "theme-switch__spot" })
            ] }) }) })
          ] })
        ]
      }
    ),
    t && /* @__PURE__ */ s.jsx("span", { className: "text-sm font-medium text-text-primary", children: i ? "Dark" : "Light" })
  ] });
}, Ft = ({
  width: r = 315,
  aspectRatio: t = 1.33,
  className: n,
  children: o,
  ...i
}) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: _(
      "relative flex justify-center items-center overflow-hidden",
      "bg-surface-tertiary rounded-[24px]",
      "shadow-[0_4px_8px_rgba(0,0,0,0.2),0_8px_16px_rgba(0,0,0,0.2),0_0_8px_rgba(255,255,255,0.1),0_0_16px_rgba(255,255,255,0.08)]",
      "z-[8]",
      n
    ),
    style: {
      width: `${r + 1}px`,
      height: `${r * t + 1}px`
    },
    ...i,
    children: [
      /* @__PURE__ */ s.jsx(
        "div",
        {
          className: "absolute inset-[-50px] z-[-2] form-border-animation",
          style: {
            background: "conic-gradient(from 45deg, transparent 75%, var(--color-text-primary), transparent 100%)"
          }
        }
      ),
      o
    ]
  }
), Dt = ({
  width: r = 315,
  aspectRatio: t = 1.33,
  className: n,
  children: o,
  ...i
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: _(
      "absolute bg-surface-tertiary rounded-[24px] p-7 z-[10]",
      "backdrop-blur-[15px]",
      "shadow-[inset_0_40px_60px_-8px_rgba(255,255,255,0.12),inset_4px_0_12px_-6px_rgba(255,255,255,0.12),inset_0_0_12px_-4px_rgba(255,255,255,0.12)]",
      n
    ),
    style: {
      width: `${r}px`,
      height: `${r * t}px`
    },
    ...i,
    children: o
  }
), $t = ({ className: r, ...t }) => /* @__PURE__ */ s.jsxs(
  "div",
  {
    className: _(
      "w-[65px] h-[65px] rounded-[20px] border-2 border-white",
      "bg-gradient-to-br from-white/20 to-black/20",
      "shadow-[8px_8px_16px_rgba(0,0,0,0.2),-8px_-8px_16px_rgba(255,255,255,0.06)]",
      "flex justify-center items-center relative",
      r
    ),
    ...t,
    children: [
      /* @__PURE__ */ s.jsx("div", { className: "absolute bottom-[10px] w-1/2 h-[20%] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[20px] rounded-bl-[20px] border-[2.5px] border-white" }),
      /* @__PURE__ */ s.jsx("div", { className: "absolute top-[10px] w-[30%] h-[30%] rounded-full border-[2.5px] border-white" })
    ]
  }
), ro = ({
  title: r,
  showLogo: t = !1,
  footer: n,
  width: o = 315,
  aspectRatio: i = 1.33,
  className: c,
  children: l,
  ...d
}) => /* @__PURE__ */ s.jsx(Ft, { width: o, aspectRatio: i, children: /* @__PURE__ */ s.jsxs(Dt, { width: o, aspectRatio: i, children: [
  /* @__PURE__ */ s.jsxs(
    "form",
    {
      className: _("flex justify-center items-center flex-col gap-[10px]", c),
      ...d,
      children: [
        t && /* @__PURE__ */ s.jsx("div", { className: "flex justify-center items-center mb-2", children: /* @__PURE__ */ s.jsx($t, {}) }),
        r && /* @__PURE__ */ s.jsx("div", { className: "w-full text-center text-2xl font-bold py-1.5 text-text-primary flex justify-center items-center", children: r }),
        l
      ]
    }
  ),
  n && /* @__PURE__ */ s.jsx("div", { className: "w-full text-left text-text-secondary text-xs mt-4", children: n })
] }) }), to = ({
  label: r,
  error: t,
  className: n,
  size: o,
  ...i
}) => /* @__PURE__ */ s.jsxs("div", { className: "w-full", children: [
  r && /* @__PURE__ */ s.jsx("label", { className: "block text-text-primary text-sm mb-1.5", children: r }),
  /* @__PURE__ */ s.jsx(
    lr,
    {
      className: _(
        "w-full p-2.5 border-none rounded-xl bg-surface text-text-primary text-sm outline-none",
        "focus:border focus:border-border-focus",
        n
      ),
      error: t,
      size: o,
      ...i
    }
  )
] }), oo = ({
  variant: r = "primary",
  className: t,
  children: n,
  ...o
}) => r === "google" ? /* @__PURE__ */ s.jsx(
  "button",
  {
    className: _(
      "w-full h-10 border-none rounded-[20px] text-sm font-semibold cursor-pointer",
      "grid place-content-center gap-2.5 bg-surface-secondary text-text-primary",
      "transition-all duration-300",
      "shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)]",
      "hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)]",
      "flex justify-center items-center gap-2.5",
      t
    ),
    ...o,
    children: n
  }
) : /* @__PURE__ */ s.jsx(
  ir,
  {
    className: _(
      "w-full h-10 rounded-[20px] text-sm font-semibold mt-1.5",
      t
    ),
    variant: "primary",
    ...o,
    children: n
  }
), no = ({
  className: r,
  children: t,
  ...n
}) => /* @__PURE__ */ s.jsx(
  "div",
  {
    className: _(
      "w-full text-left text-text-secondary text-xs",
      r
    ),
    ...n,
    children: t
  }
), so = ({
  className: r,
  children: t,
  ...n
}) => /* @__PURE__ */ s.jsx(
  "a",
  {
    className: _(
      "relative text-text-secondary font-semibold no-underline transition-colors duration-300 ease-in-out",
      "hover:text-white",
      'after:content-[""] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-[width] after:duration-300 after:ease-in-out',
      "hover:after:w-full",
      r
    ),
    ...n,
    children: t
  }
);
export {
  ir as Button,
  Vt as Card,
  Yt as CardContent,
  Zt as CardFooter,
  Ut as CardHeader,
  At as Checkbox,
  ro as Form,
  oo as FormButton,
  to as FormField,
  no as FormFooter,
  so as FormFooterLink,
  lr as Input,
  qt as Loader,
  Ht as RadioButton,
  Jt as RadioGroup,
  Kt as Spinner,
  Gt as SubmitButton,
  Qt as ThemeProvider,
  eo as ThemeSwitch,
  Bt as Toggle,
  Xt as Tooltip,
  Ot as useTheme
};
