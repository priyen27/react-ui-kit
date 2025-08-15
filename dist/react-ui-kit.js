import * as d from "react";
import D, { forwardRef as pn, createElement as ut, useState as nt, useEffect as ct, createContext as Ln, useContext as Rn, useLayoutEffect as Ua, useRef as lt, useCallback as wt, useMemo as Zd, useImperativeHandle as Jd, isValidElement as $s } from "react";
import * as Ya from "react-dom";
import Rl from "react-dom";
import { FormProvider as Ty, useFormContext as Dy, Controller as ua } from "react-hook-form";
var Ni = { exports: {} }, Yr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ru;
function Iy() {
  if (Ru) return Yr;
  Ru = 1;
  var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(i, l, u) {
    var f, p = {}, g = null, m = null;
    u !== void 0 && (g = "" + u), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (f in l) r.call(l, f) && !a.hasOwnProperty(f) && (p[f] = l[f]);
    if (i && i.defaultProps) for (f in l = i.defaultProps, l) p[f] === void 0 && (p[f] = l[f]);
    return { $$typeof: t, type: i, key: g, ref: m, props: p, _owner: o.current };
  }
  return Yr.Fragment = n, Yr.jsx = s, Yr.jsxs = s, Yr;
}
var Kr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eu;
function Ay() {
  return Eu || (Eu = 1, process.env.NODE_ENV !== "production" && function() {
    var e = D, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function w(N) {
      if (N === null || typeof N != "object")
        return null;
      var Q = v && N[v] || N[h];
      return typeof Q == "function" ? Q : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(N) {
      {
        for (var Q = arguments.length, se = new Array(Q > 1 ? Q - 1 : 0), he = 1; he < Q; he++)
          se[he - 1] = arguments[he];
        b("error", N, se);
      }
    }
    function b(N, Q, se) {
      {
        var he = x.ReactDebugCurrentFrame, De = he.getStackAddendum();
        De !== "" && (Q += "%s", se = se.concat([De]));
        var ke = se.map(function(Ne) {
          return String(Ne);
        });
        ke.unshift("Warning: " + Q), Function.prototype.apply.call(console[N], console, ke);
      }
    }
    var S = !1, E = !1, R = !1, C = !1, M = !1, P;
    P = Symbol.for("react.module.reference");
    function j(N) {
      return !!(typeof N == "string" || typeof N == "function" || N === r || N === a || M || N === o || N === u || N === f || C || N === m || S || E || R || typeof N == "object" && N !== null && (N.$$typeof === g || N.$$typeof === p || N.$$typeof === s || N.$$typeof === i || N.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      N.$$typeof === P || N.getModuleId !== void 0));
    }
    function _(N, Q, se) {
      var he = N.displayName;
      if (he)
        return he;
      var De = Q.displayName || Q.name || "";
      return De !== "" ? se + "(" + De + ")" : se;
    }
    function k(N) {
      return N.displayName || "Context";
    }
    function W(N) {
      if (N == null)
        return null;
      if (typeof N.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof N == "function")
        return N.displayName || N.name || null;
      if (typeof N == "string")
        return N;
      switch (N) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case i:
            var Q = N;
            return k(Q) + ".Consumer";
          case s:
            var se = N;
            return k(se._context) + ".Provider";
          case l:
            return _(N, N.render, "ForwardRef");
          case p:
            var he = N.displayName || null;
            return he !== null ? he : W(N.type) || "Memo";
          case g: {
            var De = N, ke = De._payload, Ne = De._init;
            try {
              return W(Ne(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, G, F, L, z, oe, ae, $;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function V() {
      {
        if (U === 0) {
          G = console.log, F = console.info, L = console.warn, z = console.error, oe = console.group, ae = console.groupCollapsed, $ = console.groupEnd;
          var N = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: N,
            log: N,
            warn: N,
            error: N,
            group: N,
            groupCollapsed: N,
            groupEnd: N
          });
        }
        U++;
      }
    }
    function B() {
      {
        if (U--, U === 0) {
          var N = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, N, {
              value: G
            }),
            info: A({}, N, {
              value: F
            }),
            warn: A({}, N, {
              value: L
            }),
            error: A({}, N, {
              value: z
            }),
            group: A({}, N, {
              value: oe
            }),
            groupCollapsed: A({}, N, {
              value: ae
            }),
            groupEnd: A({}, N, {
              value: $
            })
          });
        }
        U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = x.ReactCurrentDispatcher, T;
    function Y(N, Q, se) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (De) {
            var he = De.stack.trim().match(/\n( *(at )?)/);
            T = he && he[1] || "";
          }
        return `
` + T + N;
      }
    }
    var J = !1, te;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      te = new ne();
    }
    function X(N, Q) {
      if (!N || J)
        return "";
      {
        var se = te.get(N);
        if (se !== void 0)
          return se;
      }
      var he;
      J = !0;
      var De = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = q.current, q.current = null, V();
      try {
        if (Q) {
          var Ne = function() {
            throw Error();
          };
          if (Object.defineProperty(Ne.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ne, []);
            } catch (Rt) {
              he = Rt;
            }
            Reflect.construct(N, [], Ne);
          } else {
            try {
              Ne.call();
            } catch (Rt) {
              he = Rt;
            }
            N.call(Ne.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            he = Rt;
          }
          N();
        }
      } catch (Rt) {
        if (Rt && he && typeof Rt.stack == "string") {
          for (var Ee = Rt.stack.split(`
`), xt = he.stack.split(`
`), Qe = Ee.length - 1, tt = xt.length - 1; Qe >= 1 && tt >= 0 && Ee[Qe] !== xt[tt]; )
            tt--;
          for (; Qe >= 1 && tt >= 0; Qe--, tt--)
            if (Ee[Qe] !== xt[tt]) {
              if (Qe !== 1 || tt !== 1)
                do
                  if (Qe--, tt--, tt < 0 || Ee[Qe] !== xt[tt]) {
                    var Lt = `
` + Ee[Qe].replace(" at new ", " at ");
                    return N.displayName && Lt.includes("<anonymous>") && (Lt = Lt.replace("<anonymous>", N.displayName)), typeof N == "function" && te.set(N, Lt), Lt;
                  }
                while (Qe >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = ke, B(), Error.prepareStackTrace = De;
      }
      var mr = N ? N.displayName || N.name : "", Yn = mr ? Y(mr) : "";
      return typeof N == "function" && te.set(N, Yn), Yn;
    }
    function K(N, Q, se) {
      return X(N, !1);
    }
    function ee(N) {
      var Q = N.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function re(N, Q, se) {
      if (N == null)
        return "";
      if (typeof N == "function")
        return X(N, ee(N));
      if (typeof N == "string")
        return Y(N);
      switch (N) {
        case u:
          return Y("Suspense");
        case f:
          return Y("SuspenseList");
      }
      if (typeof N == "object")
        switch (N.$$typeof) {
          case l:
            return K(N.render);
          case p:
            return re(N.type, Q, se);
          case g: {
            var he = N, De = he._payload, ke = he._init;
            try {
              return re(ke(De), Q, se);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, ye = {}, ge = x.ReactDebugCurrentFrame;
    function ue(N) {
      if (N) {
        var Q = N._owner, se = re(N.type, N._source, Q ? Q.type : null);
        ge.setExtraStackFrame(se);
      } else
        ge.setExtraStackFrame(null);
    }
    function Me(N, Q, se, he, De) {
      {
        var ke = Function.call.bind(pe);
        for (var Ne in N)
          if (ke(N, Ne)) {
            var Ee = void 0;
            try {
              if (typeof N[Ne] != "function") {
                var xt = Error((he || "React class") + ": " + se + " type `" + Ne + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof N[Ne] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw xt.name = "Invariant Violation", xt;
              }
              Ee = N[Ne](Q, Ne, he, se, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qe) {
              Ee = Qe;
            }
            Ee && !(Ee instanceof Error) && (ue(De), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", se, Ne, typeof Ee), ue(null)), Ee instanceof Error && !(Ee.message in ye) && (ye[Ee.message] = !0, ue(De), y("Failed %s type: %s", se, Ee.message), ue(null));
          }
      }
    }
    var Le = Array.isArray;
    function Te(N) {
      return Le(N);
    }
    function Ve(N) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, se = Q && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return se;
      }
    }
    function rt(N) {
      try {
        return st(N), !1;
      } catch {
        return !0;
      }
    }
    function st(N) {
      return "" + N;
    }
    function Ae(N) {
      if (rt(N))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(N)), st(N);
    }
    var Be = x.ReactCurrentOwner, tn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, it;
    function ht(N) {
      if (pe.call(N, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(N, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return N.ref !== void 0;
    }
    function Mt(N) {
      if (pe.call(N, "key")) {
        var Q = Object.getOwnPropertyDescriptor(N, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return N.key !== void 0;
    }
    function et(N, Q) {
      typeof N.ref == "string" && Be.current;
    }
    function dt(N, Q) {
      {
        var se = function() {
          Ct || (Ct = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        se.isReactWarning = !0, Object.defineProperty(N, "key", {
          get: se,
          configurable: !0
        });
      }
    }
    function nn(N, Q) {
      {
        var se = function() {
          it || (it = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        se.isReactWarning = !0, Object.defineProperty(N, "ref", {
          get: se,
          configurable: !0
        });
      }
    }
    var $t = function(N, Q, se, he, De, ke, Ne) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: N,
        key: Q,
        ref: se,
        props: Ne,
        // Record the component responsible for creating this element.
        _owner: ke
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: De
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function Un(N, Q, se, he, De) {
      {
        var ke, Ne = {}, Ee = null, xt = null;
        se !== void 0 && (Ae(se), Ee = "" + se), Mt(Q) && (Ae(Q.key), Ee = "" + Q.key), ht(Q) && (xt = Q.ref, et(Q, De));
        for (ke in Q)
          pe.call(Q, ke) && !tn.hasOwnProperty(ke) && (Ne[ke] = Q[ke]);
        if (N && N.defaultProps) {
          var Qe = N.defaultProps;
          for (ke in Qe)
            Ne[ke] === void 0 && (Ne[ke] = Qe[ke]);
        }
        if (Ee || xt) {
          var tt = typeof N == "function" ? N.displayName || N.name || "Unknown" : N;
          Ee && dt(Ne, tt), xt && nn(Ne, tt);
        }
        return $t(N, Ee, xt, De, he, Be.current, Ne);
      }
    }
    var ce = x.ReactCurrentOwner, Ce = x.ReactDebugCurrentFrame;
    function Se(N) {
      if (N) {
        var Q = N._owner, se = re(N.type, N._source, Q ? Q.type : null);
        Ce.setExtraStackFrame(se);
      } else
        Ce.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function be(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function je() {
      {
        if (ce.current) {
          var N = W(ce.current.type);
          if (N)
            return `

Check the render method of \`` + N + "`.";
        }
        return "";
      }
    }
    function Je(N) {
      return "";
    }
    var ie = {};
    function ve(N) {
      {
        var Q = je();
        if (!Q) {
          var se = typeof N == "string" ? N : N.displayName || N.name;
          se && (Q = `

Check the top-level render call using <` + se + ">.");
        }
        return Q;
      }
    }
    function Re(N, Q) {
      {
        if (!N._store || N._store.validated || N.key != null)
          return;
        N._store.validated = !0;
        var se = ve(Q);
        if (ie[se])
          return;
        ie[se] = !0;
        var he = "";
        N && N._owner && N._owner !== ce.current && (he = " It was passed a child from " + W(N._owner.type) + "."), Se(N), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', se, he), Se(null);
      }
    }
    function Ke(N, Q) {
      {
        if (typeof N != "object")
          return;
        if (Te(N))
          for (var se = 0; se < N.length; se++) {
            var he = N[se];
            be(he) && Re(he, Q);
          }
        else if (be(N))
          N._store && (N._store.validated = !0);
        else if (N) {
          var De = w(N);
          if (typeof De == "function" && De !== N.entries)
            for (var ke = De.call(N), Ne; !(Ne = ke.next()).done; )
              be(Ne.value) && Re(Ne.value, Q);
        }
      }
    }
    function We(N) {
      {
        var Q = N.type;
        if (Q == null || typeof Q == "string")
          return;
        var se;
        if (typeof Q == "function")
          se = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === p))
          se = Q.propTypes;
        else
          return;
        if (se) {
          var he = W(Q);
          Me(se, N.props, "prop", he, N);
        } else if (Q.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var De = W(Q);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", De || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vt(N) {
      {
        for (var Q = Object.keys(N.props), se = 0; se < Q.length; se++) {
          var he = Q[se];
          if (he !== "children" && he !== "key") {
            Se(N), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), Se(null);
            break;
          }
        }
        N.ref !== null && (Se(N), y("Invalid attribute `ref` supplied to `React.Fragment`."), Se(null));
      }
    }
    var Tt = {};
    function St(N, Q, se, he, De, ke) {
      {
        var Ne = j(N);
        if (!Ne) {
          var Ee = "";
          (N === void 0 || typeof N == "object" && N !== null && Object.keys(N).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var xt = Je();
          xt ? Ee += xt : Ee += je();
          var Qe;
          N === null ? Qe = "null" : Te(N) ? Qe = "array" : N !== void 0 && N.$$typeof === t ? (Qe = "<" + (W(N.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Qe = typeof N, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qe, Ee);
        }
        var tt = Un(N, Q, se, De, ke);
        if (tt == null)
          return tt;
        if (Ne) {
          var Lt = Q.children;
          if (Lt !== void 0)
            if (he)
              if (Te(Lt)) {
                for (var mr = 0; mr < Lt.length; mr++)
                  Ke(Lt[mr], N);
                Object.freeze && Object.freeze(Lt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(Lt, N);
        }
        if (pe.call(Q, "key")) {
          var Yn = W(N), Rt = Object.keys(Q).filter(function(My) {
            return My !== "key";
          }), Os = Rt.length > 0 ? "{key: someKey, " + Rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Tt[Yn + Os]) {
            var _y = Rt.length > 0 ? "{" + Rt.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Os, Yn, _y, Yn), Tt[Yn + Os] = !0;
          }
        }
        return N === r ? vt(tt) : We(tt), tt;
      }
    }
    function rn(N, Q, se) {
      return St(N, Q, se, !0);
    }
    function Ey(N, Q, se) {
      return St(N, Q, se, !1);
    }
    var Ny = Ey, Py = rn;
    Kr.Fragment = r, Kr.jsx = Ny, Kr.jsxs = Py;
  }()), Kr;
}
process.env.NODE_ENV === "production" ? Ni.exports = Iy() : Ni.exports = Ay();
var c = Ni.exports;
function Qd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Qd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ef() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Qd(e)) && (r && (r += " "), r += t);
  return r;
}
const El = "-", jy = (e) => {
  const t = Oy(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (s) => {
      const i = s.split(El);
      return i[0] === "" && i.length !== 1 && i.shift(), tf(i, t) || ky(s);
    },
    getConflictingClassGroupIds: (s, i) => {
      const l = n[s] || [];
      return i && r[s] ? [...l, ...r[s]] : l;
    }
  };
}, tf = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? tf(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const a = e.join(El);
  return (s = t.validators.find(({
    validator: i
  }) => i(a))) == null ? void 0 : s.classGroupId;
}, Nu = /^\[(.+)\]$/, ky = (e) => {
  if (Nu.test(e)) {
    const t = Nu.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Oy = (e) => {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ly(Object.entries(e.classGroups), n).forEach(([a, s]) => {
    Pi(s, r, a, t);
  }), r;
}, Pi = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const a = o === "" ? t : Pu(t, o);
      a.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if ($y(o)) {
        Pi(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([a, s]) => {
      Pi(s, Pu(t, a), n, r);
    });
  });
}, Pu = (e, t) => {
  let n = e;
  return t.split(El).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, $y = (e) => e.isThemeGetter, Ly = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i])) : a);
  return [n, o];
}) : e, Fy = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (a, s) => {
    n.set(a, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = n.get(a);
      if (s !== void 0)
        return s;
      if ((s = r.get(a)) !== void 0)
        return o(a, s), s;
    },
    set(a, s) {
      n.has(a) ? n.set(a, s) : o(a, s);
    }
  };
}, nf = "!", zy = (e) => {
  const {
    separator: t,
    experimentalParseClassName: n
  } = e, r = t.length === 1, o = t[0], a = t.length, s = (i) => {
    const l = [];
    let u = 0, f = 0, p;
    for (let w = 0; w < i.length; w++) {
      let x = i[w];
      if (u === 0) {
        if (x === o && (r || i.slice(w, w + a) === t)) {
          l.push(i.slice(f, w)), f = w + a;
          continue;
        }
        if (x === "/") {
          p = w;
          continue;
        }
      }
      x === "[" ? u++ : x === "]" && u--;
    }
    const g = l.length === 0 ? i : i.substring(f), m = g.startsWith(nf), v = m ? g.substring(1) : g, h = p && p > f ? p - f : void 0;
    return {
      modifiers: l,
      hasImportantModifier: m,
      baseClassName: v,
      maybePostfixModifierPosition: h
    };
  };
  return n ? (i) => n({
    className: i,
    parseClassName: s
  }) : s;
}, Vy = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, By = (e) => ({
  cache: Fy(e.cacheSize),
  parseClassName: zy(e),
  ...jy(e)
}), Hy = /\s+/, Gy = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, a = [], s = e.trim().split(Hy);
  let i = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const u = s[l], {
      modifiers: f,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: m
    } = n(u);
    let v = !!m, h = r(v ? g.substring(0, m) : g);
    if (!h) {
      if (!v) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (h = r(g), !h) {
        i = u + (i.length > 0 ? " " + i : i);
        continue;
      }
      v = !1;
    }
    const w = Vy(f).join(":"), x = p ? w + nf : w, y = x + h;
    if (a.includes(y))
      continue;
    a.push(y);
    const b = o(h, v);
    for (let S = 0; S < b.length; ++S) {
      const E = b[S];
      a.push(x + E);
    }
    i = u + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Wy() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = rf(t)) && (r && (r += " "), r += n);
  return r;
}
const rf = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = rf(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Uy(e, ...t) {
  let n, r, o, a = s;
  function s(l) {
    const u = t.reduce((f, p) => p(f), e());
    return n = By(u), r = n.cache.get, o = n.cache.set, a = i, i(l);
  }
  function i(l) {
    const u = r(l);
    if (u)
      return u;
    const f = Gy(l, n);
    return o(l, f), f;
  }
  return function() {
    return a(Wy.apply(null, arguments));
  };
}
const He = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, of = /^\[(?:([a-z-]+):)?(.+)\]$/i, Yy = /^\d+\/\d+$/, Ky = /* @__PURE__ */ new Set(["px", "full", "screen"]), qy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Xy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Zy = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qy = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, xn = (e) => Rr(e) || Ky.has(e) || Yy.test(e), Nn = (e) => Or(e, "length", ib), Rr = (e) => !!e && !Number.isNaN(Number(e)), Ls = (e) => Or(e, "number", Rr), qr = (e) => !!e && Number.isInteger(Number(e)), eb = (e) => e.endsWith("%") && Rr(e.slice(0, -1)), xe = (e) => of.test(e), Pn = (e) => qy.test(e), tb = /* @__PURE__ */ new Set(["length", "size", "percentage"]), nb = (e) => Or(e, tb, af), rb = (e) => Or(e, "position", af), ob = /* @__PURE__ */ new Set(["image", "url"]), ab = (e) => Or(e, ob, cb), sb = (e) => Or(e, "", lb), Xr = () => !0, Or = (e, t, n) => {
  const r = of.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, ib = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Xy.test(e) && !Zy.test(e)
), af = () => !1, lb = (e) => Jy.test(e), cb = (e) => Qy.test(e), ub = () => {
  const e = He("colors"), t = He("spacing"), n = He("blur"), r = He("brightness"), o = He("borderColor"), a = He("borderRadius"), s = He("borderSpacing"), i = He("borderWidth"), l = He("contrast"), u = He("grayscale"), f = He("hueRotate"), p = He("invert"), g = He("gap"), m = He("gradientColorStops"), v = He("gradientColorStopPositions"), h = He("inset"), w = He("margin"), x = He("opacity"), y = He("padding"), b = He("saturate"), S = He("scale"), E = He("sepia"), R = He("skew"), C = He("space"), M = He("translate"), P = () => ["auto", "contain", "none"], j = () => ["auto", "hidden", "clip", "visible", "scroll"], _ = () => ["auto", xe, t], k = () => [xe, t], W = () => ["", xn, Nn], A = () => ["auto", Rr, xe], U = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], G = () => ["solid", "dashed", "dotted", "double", "none"], F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], L = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], z = () => ["", "0", xe], oe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ae = () => [Rr, xe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xr],
      spacing: [xn, Nn],
      blur: ["none", "", Pn, xe],
      brightness: ae(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Pn, xe],
      borderSpacing: k(),
      borderWidth: W(),
      contrast: ae(),
      grayscale: z(),
      hueRotate: ae(),
      invert: z(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [eb, Nn],
      inset: _(),
      margin: _(),
      opacity: ae(),
      padding: k(),
      saturate: ae(),
      scale: ae(),
      sepia: z(),
      skew: ae(),
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
        aspect: ["auto", "square", "video", xe]
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
        columns: [Pn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": oe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": oe()
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
        object: [...U(), xe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
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
        z: ["auto", qr, xe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: _()
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
        flex: ["1", "auto", "initial", "none", xe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: z()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: z()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", qr, xe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", qr, xe]
        }, xe]
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
        "grid-rows": [Xr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [qr, xe]
        }, xe]
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
        "auto-cols": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", xe]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [g]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [g]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [g]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...L()]
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
        content: ["normal", ...L(), "baseline"]
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
        "place-content": [...L(), "baseline"]
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
        p: [y]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [y]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [y]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [y]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [y]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [y]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [y]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [y]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [y]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [C]
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
        "space-y": [C]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", xe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [xe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [xe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Pn]
        }, Pn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [xe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [xe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [xe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Pn, Nn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ls]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", xe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Rr, Ls]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", xn, xe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", xe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", xe]
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
        "placeholder-opacity": [x]
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
        "text-opacity": [x]
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
        decoration: [...G(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", xn, Nn]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", xn, xe]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", xe]
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
        content: ["none", xe]
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
        "bg-opacity": [x]
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
        bg: [...U(), rb]
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
        bg: ["auto", "cover", "contain", nb]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ab]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
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
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...G(), "hidden"]
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
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: G()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [o]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...G()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [xn, xe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [xn, Nn]
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
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [xn, Nn]
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
        shadow: ["", "inner", "none", Pn, sb]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...F(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": F()
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
        brightness: [r]
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
        "drop-shadow": ["", "none", Pn, xe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
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
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [b]
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
        "backdrop-blur": [n]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
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
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [b]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", xe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ae()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", xe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ae()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", xe]
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
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [qr, xe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [R]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [R]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", xe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", xe]
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
        "will-change": ["auto", "scroll", "contents", "transform", xe]
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
        stroke: [xn, Nn, Ls]
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
}, db = /* @__PURE__ */ Uy(ub);
function I(...e) {
  return db(ef(e));
}
const Nl = d.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ c.jsx(
    "input",
    {
      type: t,
      className: I(
        "flex h-[48px] w-full text-black leading-5 text-[14px] font-normal rounded-lg border border-solid border-[#E8E9EB] bg-white pl-4 pr-3 py-3 text-sm placeholder:text-[#C7CBD1] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-[#F7F8FA]",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Nl.displayName = "Input";
function fb(e, t) {
  const n = d.createContext(t), r = (a) => {
    const { children: s, ...i } = a, l = d.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ c.jsx(n.Provider, { value: l, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = d.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Fe(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = d.createContext(s), l = n.length;
    n = [...n, s];
    const u = (p) => {
      var x;
      const { scope: g, children: m, ...v } = p, h = ((x = g == null ? void 0 : g[e]) == null ? void 0 : x[l]) || i, w = d.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ c.jsx(h.Provider, { value: w, children: m });
    };
    u.displayName = a + "Provider";
    function f(p, g) {
      var h;
      const m = ((h = g == null ? void 0 : g[e]) == null ? void 0 : h[l]) || i, v = d.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${a}\``);
    }
    return [u, f];
  }
  const o = () => {
    const a = n.map((s) => d.createContext(s));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || a;
      return d.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: l } }),
        [i, l]
      );
    };
  };
  return o.scopeName = e, [r, pb(o, ...t)];
}
function pb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: l, scopeName: u }) => {
        const p = l(a)[`__scope${u}`];
        return { ...i, ...p };
      }, {});
      return d.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function _u(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function un(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = _u(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : _u(e[o], null);
        }
      };
  };
}
function le(...e) {
  return d.useCallback(un(...e), e);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
  const t = /* @__PURE__ */ mb(e), n = d.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = d.Children.toArray(a), l = i.find(gb);
    if (l) {
      const u = l.props.children, f = i.map((p) => p === l ? d.Children.count(u) > 1 ? d.Children.only(null) : d.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: d.isValidElement(u) ? d.cloneElement(u, void 0, f) : null });
    }
    return /* @__PURE__ */ c.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Pl = /* @__PURE__ */ An("Slot");
// @__NO_SIDE_EFFECTS__
function mb(e) {
  const t = d.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (d.isValidElement(o)) {
      const s = vb(o), i = hb(a, o.props);
      return o.type !== d.Fragment && (i.ref = r ? un(r, s) : s), d.cloneElement(o, i);
    }
    return d.Children.count(o) > 1 ? d.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var sf = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function lf(e) {
  const t = ({ children: n }) => /* @__PURE__ */ c.jsx(c.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = sf, t;
}
function gb(e) {
  return d.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === sf;
}
function hb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const l = a(...i);
      return o(...i), l;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function vb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Fn(e) {
  const t = e + "CollectionProvider", [n, r] = Fe(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (h) => {
    const { scope: w, children: x } = h, y = D.useRef(null), b = D.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ c.jsx(o, { scope: w, itemMap: b, collectionRef: y, children: x });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", l = /* @__PURE__ */ An(i), u = D.forwardRef(
    (h, w) => {
      const { scope: x, children: y } = h, b = a(i, x), S = le(w, b.collectionRef);
      return /* @__PURE__ */ c.jsx(l, { ref: S, children: y });
    }
  );
  u.displayName = i;
  const f = e + "CollectionItemSlot", p = "data-radix-collection-item", g = /* @__PURE__ */ An(f), m = D.forwardRef(
    (h, w) => {
      const { scope: x, children: y, ...b } = h, S = D.useRef(null), E = le(w, S), R = a(f, x);
      return D.useEffect(() => (R.itemMap.set(S, { ref: S, ...b }), () => void R.itemMap.delete(S))), /* @__PURE__ */ c.jsx(g, { [p]: "", ref: E, children: y });
    }
  );
  m.displayName = f;
  function v(h) {
    const w = a(e + "CollectionConsumer", h);
    return D.useCallback(() => {
      const y = w.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (R, C) => b.indexOf(R.ref.current) - b.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: m },
    v,
    r
  ];
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
var Ue = globalThis != null && globalThis.document ? d.useLayoutEffect : () => {
}, xb = d[" useInsertionEffect ".trim().toString()] || Ue;
function Ge({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = wb({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, l = i ? e : o;
  {
    const f = d.useRef(e !== void 0);
    d.useEffect(() => {
      const p = f.current;
      p !== i && console.warn(
        `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f.current = i;
    }, [i, r]);
  }
  const u = d.useCallback(
    (f) => {
      var p;
      if (i) {
        const g = yb(f) ? f(e) : f;
        g !== e && ((p = s.current) == null || p.call(s, g));
      } else
        a(f);
    },
    [i, e, a, s]
  );
  return [l, u];
}
function wb({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = d.useState(e), o = d.useRef(n), a = d.useRef(t);
  return xb(() => {
    a.current = t;
  }, [t]), d.useEffect(() => {
    var s;
    o.current !== n && ((s = a.current) == null || s.call(a, n), o.current = n);
  }, [n, o]), [n, r, a];
}
function yb(e) {
  return typeof e == "function";
}
var bb = [
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
  "select",
  "span",
  "svg",
  "ul"
], Z = bb.reduce((e, t) => {
  const n = /* @__PURE__ */ An(`Primitive.${t}`), r = d.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, l = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c.jsx(l, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Sa(e, t) {
  e && Ya.flushSync(() => e.dispatchEvent(t));
}
function Cb(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ye = (e) => {
  const { present: t, children: n } = e, r = Sb(t), o = typeof n == "function" ? n({ present: r.isPresent }) : d.Children.only(n), a = le(r.ref, Rb(o));
  return typeof n == "function" || r.isPresent ? d.cloneElement(o, { ref: a }) : null;
};
Ye.displayName = "Presence";
function Sb(e) {
  const [t, n] = d.useState(), r = d.useRef(null), o = d.useRef(e), a = d.useRef("none"), s = e ? "mounted" : "unmounted", [i, l] = Cb(s, {
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
  return d.useEffect(() => {
    const u = Xo(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), Ue(() => {
    const u = r.current, f = o.current;
    if (f !== e) {
      const g = a.current, m = Xo(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(f && g !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, l]), Ue(() => {
    if (t) {
      let u;
      const f = t.ownerDocument.defaultView ?? window, p = (m) => {
        const h = Xo(r.current).includes(m.animationName);
        if (m.target === t && h && (l("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = f.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, g = (m) => {
        m.target === t && (a.current = Xo(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        f.clearTimeout(u), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: d.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Xo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Rb(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Eb = d[" useId ".trim().toString()] || (() => {
}), Nb = 0;
function $e(e) {
  const [t, n] = d.useState(Eb());
  return Ue(() => {
    n((r) => r ?? String(Nb++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var Ka = "Collapsible", [Pb, cf] = Fe(Ka), [_b, _l] = Pb(Ka), uf = d.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [l, u] = Ge({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: Ka
    });
    return /* @__PURE__ */ c.jsx(
      _b,
      {
        scope: n,
        disabled: a,
        contentId: $e(),
        open: l,
        onOpenToggle: d.useCallback(() => u((f) => !f), [u]),
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            "data-state": Il(l),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
uf.displayName = Ka;
var df = "CollapsibleTrigger", Ml = d.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = _l(df, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Il(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Ml.displayName = df;
var Tl = "CollapsibleContent", Dl = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = _l(Tl, e.__scopeCollapsible);
    return /* @__PURE__ */ c.jsx(Ye, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ c.jsx(Mb, { ...r, ref: t, present: a }) });
  }
);
Dl.displayName = Tl;
var Mb = d.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = _l(Tl, n), [i, l] = d.useState(r), u = d.useRef(null), f = le(t, u), p = d.useRef(0), g = p.current, m = d.useRef(0), v = m.current, h = s.open || i, w = d.useRef(h), x = d.useRef(void 0);
  return d.useEffect(() => {
    const y = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Ue(() => {
    const y = u.current;
    if (y) {
      x.current = x.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const b = y.getBoundingClientRect();
      p.current = b.height, m.current = b.width, w.current || (y.style.transitionDuration = x.current.transitionDuration, y.style.animationName = x.current.animationName), l(r);
    }
  }, [s.open, r]), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-state": Il(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !h,
      ...a,
      ref: f,
      style: {
        "--radix-collapsible-content-height": g ? `${g}px` : void 0,
        "--radix-collapsible-content-width": v ? `${v}px` : void 0,
        ...e.style
      },
      children: h && o
    }
  );
});
function Il(e) {
  return e ? "open" : "closed";
}
var ff = uf, Tb = Ml, Db = Dl, Ib = d.createContext(void 0);
function Zt(e) {
  const t = d.useContext(Ib);
  return e || t || "ltr";
}
var Jt = "Accordion", Ab = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Al, jb, kb] = Fn(Jt), [qa, Z6] = Fe(Jt, [
  kb,
  cf
]), jl = cf(), pf = D.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ c.jsx(Al.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ c.jsx(Fb, { ...a, ref: t }) : /* @__PURE__ */ c.jsx(Lb, { ...o, ref: t }) });
  }
);
pf.displayName = Jt;
var [mf, Ob] = qa(Jt), [gf, $b] = qa(
  Jt,
  { collapsible: !1 }
), Lb = D.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, l] = Ge({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Jt
    });
    return /* @__PURE__ */ c.jsx(
      mf,
      {
        scope: e.__scopeAccordion,
        value: D.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: l,
        onItemClose: D.useCallback(() => a && l(""), [a, l]),
        children: /* @__PURE__ */ c.jsx(gf, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ c.jsx(hf, { ...s, ref: t }) })
      }
    );
  }
), Fb = D.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Ge({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Jt
  }), l = D.useCallback(
    (f) => i((p = []) => [...p, f]),
    [i]
  ), u = D.useCallback(
    (f) => i((p = []) => p.filter((g) => g !== f)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    mf,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: l,
      onItemClose: u,
      children: /* @__PURE__ */ c.jsx(gf, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ c.jsx(hf, { ...a, ref: t }) })
    }
  );
}), [zb, Xa] = qa(Jt), hf = D.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = D.useRef(null), l = le(i, t), u = jb(n), p = Zt(o) === "ltr", g = H(e.onKeyDown, (m) => {
      var M;
      if (!Ab.includes(m.key)) return;
      const v = m.target, h = u().filter((P) => {
        var j;
        return !((j = P.ref.current) != null && j.disabled);
      }), w = h.findIndex((P) => P.ref.current === v), x = h.length;
      if (w === -1) return;
      m.preventDefault();
      let y = w;
      const b = 0, S = x - 1, E = () => {
        y = w + 1, y > S && (y = b);
      }, R = () => {
        y = w - 1, y < b && (y = S);
      };
      switch (m.key) {
        case "Home":
          y = b;
          break;
        case "End":
          y = S;
          break;
        case "ArrowRight":
          a === "horizontal" && (p ? E() : R());
          break;
        case "ArrowDown":
          a === "vertical" && E();
          break;
        case "ArrowLeft":
          a === "horizontal" && (p ? R() : E());
          break;
        case "ArrowUp":
          a === "vertical" && R();
          break;
      }
      const C = y % x;
      (M = h[C].ref.current) == null || M.focus();
    });
    return /* @__PURE__ */ c.jsx(
      zb,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ c.jsx(Al.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            ...s,
            "data-orientation": a,
            ref: l,
            onKeyDown: r ? void 0 : g
          }
        ) })
      }
    );
  }
), Ra = "AccordionItem", [Vb, kl] = qa(Ra), vf = D.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = Xa(Ra, n), s = Ob(Ra, n), i = jl(n), l = $e(), u = r && s.value.includes(r) || !1, f = a.disabled || e.disabled;
    return /* @__PURE__ */ c.jsx(
      Vb,
      {
        scope: n,
        open: u,
        disabled: f,
        triggerId: l,
        children: /* @__PURE__ */ c.jsx(
          ff,
          {
            "data-orientation": a.orientation,
            "data-state": Sf(u),
            ...i,
            ...o,
            ref: t,
            disabled: f,
            open: u,
            onOpenChange: (p) => {
              p ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
vf.displayName = Ra;
var xf = "AccordionHeader", wf = D.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xa(Jt, n), a = kl(xf, n);
    return /* @__PURE__ */ c.jsx(
      Z.h3,
      {
        "data-orientation": o.orientation,
        "data-state": Sf(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
wf.displayName = xf;
var _i = "AccordionTrigger", yf = D.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xa(Jt, n), a = kl(_i, n), s = $b(_i, n), i = jl(n);
    return /* @__PURE__ */ c.jsx(Al.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Tb,
      {
        "aria-disabled": a.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...i,
        ...r,
        ref: t
      }
    ) });
  }
);
yf.displayName = _i;
var bf = "AccordionContent", Cf = D.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = Xa(Jt, n), a = kl(bf, n), s = jl(n);
    return /* @__PURE__ */ c.jsx(
      Db,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
Cf.displayName = bf;
function Sf(e) {
  return e ? "open" : "closed";
}
var Bb = pf, Hb = vf, Gb = wf, Rf = yf, Ef = Cf;
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Nf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ub = {
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
const Yb = pn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, l) => ut(
    "svg",
    {
      ref: l,
      ...Ub,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nf("lucide", o),
      ...i
    },
    [
      ...s.map(([u, f]) => ut(u, f)),
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
const bt = (e, t) => {
  const n = pn(
    ({ className: r, ...o }, a) => ut(Yb, {
      ref: a,
      iconNode: t,
      className: Nf(`lucide-${Wb(e)}`, r),
      ...o
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
const Kb = bt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qb = bt("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xb = bt("Calendar", [
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
const $r = bt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = bt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pf = bt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Za = bt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zb = bt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ja = bt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jb = bt("Dot", [
  ["circle", { cx: "12.1", cy: "12.1", r: "1", key: "18d7e5" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = bt("Ellipsis", [
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
const Qb = bt("GripVertical", [
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
const e1 = bt("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t1 = bt("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
/**
 * @license lucide-react v0.377.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mi = bt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), n1 = Bb, Mf = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Hb,
  {
    ref: n,
    className: I("border-b", e),
    ...t
  }
));
Mf.displayName = "AccordionItem";
const Tf = d.forwardRef(({ className: e, children: t, customIcon: n, ...r }, o) => /* @__PURE__ */ c.jsx(Gb, { className: "flex", children: /* @__PURE__ */ c.jsxs(
  Rf,
  {
    ref: o,
    className: I(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180 group",
      e
    ),
    ...r,
    children: [
      t,
      n || /* @__PURE__ */ c.jsx(Ol, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
Tf.displayName = Rf.displayName;
const Df = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Ef,
  {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: /* @__PURE__ */ c.jsx("div", { className: I("pb-4 pt-0", e), children: t })
  }
));
Df.displayName = Ef.displayName;
function Oe(e) {
  const t = d.useRef(e);
  return d.useEffect(() => {
    t.current = e;
  }), d.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function r1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e);
  d.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var o1 = "DismissableLayer", Ti = "dismissableLayer.update", a1 = "dismissableLayer.pointerDownOutside", s1 = "dismissableLayer.focusOutside", Mu, If = d.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zn = d.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...l
    } = e, u = d.useContext(If), [f, p] = d.useState(null), g = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = d.useState({}), v = le(t, (C) => p(C)), h = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), x = h.indexOf(w), y = f ? h.indexOf(f) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, S = y >= x, E = c1((C) => {
      const M = C.target, P = [...u.branches].some((j) => j.contains(M));
      !S || P || (o == null || o(C), s == null || s(C), C.defaultPrevented || i == null || i());
    }, g), R = u1((C) => {
      const M = C.target;
      [...u.branches].some((j) => j.contains(M)) || (a == null || a(C), s == null || s(C), C.defaultPrevented || i == null || i());
    }, g);
    return r1((C) => {
      y === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && i && (C.preventDefault(), i()));
    }, g), d.useEffect(() => {
      if (f)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Mu = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(f)), u.layers.add(f), Tu(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = Mu);
        };
    }, [f, g, n, u]), d.useEffect(() => () => {
      f && (u.layers.delete(f), u.layersWithOutsidePointerEventsDisabled.delete(f), Tu());
    }, [f, u]), d.useEffect(() => {
      const C = () => m({});
      return document.addEventListener(Ti, C), () => document.removeEventListener(Ti, C);
    }, []), /* @__PURE__ */ c.jsx(
      Z.div,
      {
        ...l,
        ref: v,
        style: {
          pointerEvents: b ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: H(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
zn.displayName = o1;
var i1 = "DismissableLayerBranch", l1 = d.forwardRef((e, t) => {
  const n = d.useContext(If), r = d.useRef(null), o = le(t, r);
  return d.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ c.jsx(Z.div, { ...e, ref: o });
});
l1.displayName = i1;
function c1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = d.useRef(!1), o = d.useRef(() => {
  });
  return d.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let l = function() {
          Af(
            a1,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function u1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Oe(e), r = d.useRef(!1);
  return d.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Af(s1, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Tu() {
  const e = new CustomEvent(Ti);
  document.dispatchEvent(e);
}
function Af(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? Sa(o, a) : o.dispatchEvent(a);
}
var Fs = "focusScope.autoFocusOnMount", zs = "focusScope.autoFocusOnUnmount", Du = { bubbles: !1, cancelable: !0 }, d1 = "FocusScope", Eo = d.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, l] = d.useState(null), u = Oe(o), f = Oe(a), p = d.useRef(null), g = le(t, (h) => l(h)), m = d.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  d.useEffect(() => {
    if (r) {
      let h = function(b) {
        if (m.paused || !i) return;
        const S = b.target;
        i.contains(S) ? p.current = S : Mn(p.current, { select: !0 });
      }, w = function(b) {
        if (m.paused || !i) return;
        const S = b.relatedTarget;
        S !== null && (i.contains(S) || Mn(p.current, { select: !0 }));
      }, x = function(b) {
        if (document.activeElement === document.body)
          for (const E of b)
            E.removedNodes.length > 0 && Mn(i);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", w);
      const y = new MutationObserver(x);
      return i && y.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", w), y.disconnect();
      };
    }
  }, [r, i, m.paused]), d.useEffect(() => {
    if (i) {
      Au.add(m);
      const h = document.activeElement;
      if (!i.contains(h)) {
        const x = new CustomEvent(Fs, Du);
        i.addEventListener(Fs, u), i.dispatchEvent(x), x.defaultPrevented || (f1(v1(jf(i)), { select: !0 }), document.activeElement === h && Mn(i));
      }
      return () => {
        i.removeEventListener(Fs, u), setTimeout(() => {
          const x = new CustomEvent(zs, Du);
          i.addEventListener(zs, f), i.dispatchEvent(x), x.defaultPrevented || Mn(h ?? document.body, { select: !0 }), i.removeEventListener(zs, f), Au.remove(m);
        }, 0);
      };
    }
  }, [i, u, f, m]);
  const v = d.useCallback(
    (h) => {
      if (!n && !r || m.paused) return;
      const w = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, x = document.activeElement;
      if (w && x) {
        const y = h.currentTarget, [b, S] = p1(y);
        b && S ? !h.shiftKey && x === S ? (h.preventDefault(), n && Mn(b, { select: !0 })) : h.shiftKey && x === b && (h.preventDefault(), n && Mn(S, { select: !0 })) : x === y && h.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ c.jsx(Z.div, { tabIndex: -1, ...s, ref: g, onKeyDown: v });
});
Eo.displayName = d1;
function f1(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Mn(r, { select: t }), document.activeElement !== n) return;
}
function p1(e) {
  const t = jf(e), n = Iu(t, e), r = Iu(t.reverse(), e);
  return [n, r];
}
function jf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Iu(e, t) {
  for (const n of e)
    if (!m1(n, { upTo: t })) return n;
}
function m1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function g1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Mn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && g1(e) && t && e.select();
  }
}
var Au = h1();
function h1() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = ju(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = ju(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function ju(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function v1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var x1 = "Portal", No = d.forwardRef((e, t) => {
  var i;
  const { container: n, ...r } = e, [o, a] = d.useState(!1);
  Ue(() => a(!0), []);
  const s = n || o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body);
  return s ? Rl.createPortal(/* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t }), s) : null;
});
No.displayName = x1;
var Vs = 0;
function Qa() {
  d.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? ku()), document.body.insertAdjacentElement("beforeend", e[1] ?? ku()), Vs++, () => {
      Vs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Vs--;
    };
  }, []);
}
function ku() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var on = function() {
  return on = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, on.apply(this, arguments);
};
function kf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function w1(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var da = "right-scroll-bar-position", fa = "width-before-scroll-bar", y1 = "with-scroll-bars-hidden", b1 = "--removed-body-scroll-bar-size";
function Bs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function C1(e, t) {
  var n = nt(function() {
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
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var S1 = typeof window < "u" ? d.useLayoutEffect : d.useEffect, Ou = /* @__PURE__ */ new WeakMap();
function R1(e, t) {
  var n = C1(null, function(r) {
    return e.forEach(function(o) {
      return Bs(o, r);
    });
  });
  return S1(function() {
    var r = Ou.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Bs(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Bs(i, s);
      });
    }
    Ou.set(n, e);
  }, [e]), n;
}
function E1(e) {
  return e;
}
function N1(e, t) {
  t === void 0 && (t = E1);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var l = function() {
        var f = s;
        s = [], f.forEach(a);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(f) {
          s.push(f), u();
        },
        filter: function(f) {
          return s = s.filter(f), n;
        }
      };
    }
  };
  return o;
}
function P1(e) {
  e === void 0 && (e = {});
  var t = N1(null);
  return t.options = on({ async: !0, ssr: !1 }, e), t;
}
var Of = function(e) {
  var t = e.sideCar, n = kf(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return d.createElement(r, on({}, n));
};
Of.isSideCarExport = !0;
function _1(e, t) {
  return e.useMedium(t), Of;
}
var $f = P1(), Hs = function() {
}, es = d.forwardRef(function(e, t) {
  var n = d.useRef(null), r = d.useState({
    onScrollCapture: Hs,
    onWheelCapture: Hs,
    onTouchMoveCapture: Hs
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, l = e.className, u = e.removeScrollBar, f = e.enabled, p = e.shards, g = e.sideCar, m = e.noRelative, v = e.noIsolation, h = e.inert, w = e.allowPinchZoom, x = e.as, y = x === void 0 ? "div" : x, b = e.gapMode, S = kf(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = g, R = R1([n, t]), C = on(on({}, S), o);
  return d.createElement(
    d.Fragment,
    null,
    f && d.createElement(E, { sideCar: $f, removeScrollBar: u, shards: p, noRelative: m, noIsolation: v, inert: h, setCallbacks: a, allowPinchZoom: !!w, lockRef: n, gapMode: b }),
    s ? d.cloneElement(d.Children.only(i), on(on({}, C), { ref: R })) : d.createElement(y, on({}, C, { className: l, ref: R }), i)
  );
});
es.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
es.classNames = {
  fullWidth: fa,
  zeroRight: da
};
var M1 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function T1() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = M1();
  return t && e.setAttribute("nonce", t), e;
}
function D1(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function I1(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var A1 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = T1()) && (D1(t, n), I1(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, j1 = function() {
  var e = A1();
  return function(t, n) {
    d.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Lf = function() {
  var e = j1(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, k1 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Gs = function(e) {
  return parseInt(e || "", 10) || 0;
}, O1 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Gs(n), Gs(r), Gs(o)];
}, $1 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return k1;
  var t = O1(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, L1 = Lf(), Er = "data-scroll-locked", F1 = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(y1, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Er, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(da, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(fa, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(da, " .").concat(da, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fa, " .").concat(fa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Er, `] {
    `).concat(b1, ": ").concat(i, `px;
  }
`);
}, $u = function() {
  var e = parseInt(document.body.getAttribute(Er) || "0", 10);
  return isFinite(e) ? e : 0;
}, z1 = function() {
  d.useEffect(function() {
    return document.body.setAttribute(Er, ($u() + 1).toString()), function() {
      var e = $u() - 1;
      e <= 0 ? document.body.removeAttribute(Er) : document.body.setAttribute(Er, e.toString());
    };
  }, []);
}, V1 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  z1();
  var a = d.useMemo(function() {
    return $1(o);
  }, [o]);
  return d.createElement(L1, { styles: F1(a, !t, o, n ? "" : "!important") });
}, Di = !1;
if (typeof window < "u")
  try {
    var Zo = Object.defineProperty({}, "passive", {
      get: function() {
        return Di = !0, !0;
      }
    });
    window.addEventListener("test", Zo, Zo), window.removeEventListener("test", Zo, Zo);
  } catch {
    Di = !1;
  }
var gr = Di ? { passive: !1 } : !1, B1 = function(e) {
  return e.tagName === "TEXTAREA";
}, Ff = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !B1(e) && n[t] === "visible")
  );
}, H1 = function(e) {
  return Ff(e, "overflowY");
}, G1 = function(e) {
  return Ff(e, "overflowX");
}, Lu = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = zf(e, r);
    if (o) {
      var a = Vf(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, W1 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, U1 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zf = function(e, t) {
  return e === "v" ? H1(t) : G1(t);
}, Vf = function(e, t) {
  return e === "v" ? W1(t) : U1(t);
}, Y1 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, K1 = function(e, t, n, r, o) {
  var a = Y1(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, l = t.contains(i), u = !1, f = s > 0, p = 0, g = 0;
  do {
    if (!i)
      break;
    var m = Vf(e, i), v = m[0], h = m[1], w = m[2], x = h - w - a * v;
    (v || x) && zf(e, i) && (p += x, g += v);
    var y = i.parentNode;
    i = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && i !== document.body || // self content
    l && (t.contains(i) || t === i)
  );
  return (f && Math.abs(p) < 1 || !f && Math.abs(g) < 1) && (u = !0), u;
}, Jo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Fu = function(e) {
  return [e.deltaX, e.deltaY];
}, zu = function(e) {
  return e && "current" in e ? e.current : e;
}, q1 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, X1 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Z1 = 0, hr = [];
function J1(e) {
  var t = d.useRef([]), n = d.useRef([0, 0]), r = d.useRef(), o = d.useState(Z1++)[0], a = d.useState(Lf)[0], s = d.useRef(e);
  d.useEffect(function() {
    s.current = e;
  }, [e]), d.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var h = w1([e.lockRef.current], (e.shards || []).map(zu), !0).filter(Boolean);
      return h.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = d.useCallback(function(h, w) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !s.current.allowPinchZoom;
    var x = Jo(h), y = n.current, b = "deltaX" in h ? h.deltaX : y[0] - x[0], S = "deltaY" in h ? h.deltaY : y[1] - x[1], E, R = h.target, C = Math.abs(b) > Math.abs(S) ? "h" : "v";
    if ("touches" in h && C === "h" && R.type === "range")
      return !1;
    var M = Lu(C, R);
    if (!M)
      return !0;
    if (M ? E = C : (E = C === "v" ? "h" : "v", M = Lu(C, R)), !M)
      return !1;
    if (!r.current && "changedTouches" in h && (b || S) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return K1(P, w, h, P === "h" ? b : S);
  }, []), l = d.useCallback(function(h) {
    var w = h;
    if (!(!hr.length || hr[hr.length - 1] !== a)) {
      var x = "deltaY" in w ? Fu(w) : Jo(w), y = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && q1(E.delta, x);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var b = (s.current.shards || []).map(zu).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), S = b.length > 0 ? i(w, b[0]) : !s.current.noIsolation;
        S && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = d.useCallback(function(h, w, x, y) {
    var b = { name: h, delta: w, target: x, should: y, shadowParent: Q1(x) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== b;
      });
    }, 1);
  }, []), f = d.useCallback(function(h) {
    n.current = Jo(h), r.current = void 0;
  }, []), p = d.useCallback(function(h) {
    u(h.type, Fu(h), h.target, i(h, e.lockRef.current));
  }, []), g = d.useCallback(function(h) {
    u(h.type, Jo(h), h.target, i(h, e.lockRef.current));
  }, []);
  d.useEffect(function() {
    return hr.push(a), e.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", l, gr), document.addEventListener("touchmove", l, gr), document.addEventListener("touchstart", f, gr), function() {
      hr = hr.filter(function(h) {
        return h !== a;
      }), document.removeEventListener("wheel", l, gr), document.removeEventListener("touchmove", l, gr), document.removeEventListener("touchstart", f, gr);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return d.createElement(
    d.Fragment,
    null,
    v ? d.createElement(a, { styles: X1(o) }) : null,
    m ? d.createElement(V1, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Q1(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const eC = _1($f, J1);
var Po = d.forwardRef(function(e, t) {
  return d.createElement(es, on({}, e, { ref: t, sideCar: eC }));
});
Po.classNames = es.classNames;
var tC = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, vr = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), ea = {}, Ws = 0, Bf = function(e) {
  return e && (e.host || Bf(e.parentNode));
}, nC = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Bf(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, rC = function(e, t, n, r) {
  var o = nC(t, Array.isArray(e) ? e : [e]);
  ea[n] || (ea[n] = /* @__PURE__ */ new WeakMap());
  var a = ea[n], s = [], i = /* @__PURE__ */ new Set(), l = new Set(o), u = function(p) {
    !p || i.has(p) || (i.add(p), u(p.parentNode));
  };
  o.forEach(u);
  var f = function(p) {
    !p || l.has(p) || Array.prototype.forEach.call(p.children, function(g) {
      if (i.has(g))
        f(g);
      else
        try {
          var m = g.getAttribute(r), v = m !== null && m !== "false", h = (vr.get(g) || 0) + 1, w = (a.get(g) || 0) + 1;
          vr.set(g, h), a.set(g, w), s.push(g), h === 1 && v && Qo.set(g, !0), w === 1 && g.setAttribute(n, "true"), v || g.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", g, x);
        }
    });
  };
  return f(t), i.clear(), Ws++, function() {
    s.forEach(function(p) {
      var g = vr.get(p) - 1, m = a.get(p) - 1;
      vr.set(p, g), a.set(p, m), g || (Qo.has(p) || p.removeAttribute(r), Qo.delete(p)), m || p.removeAttribute(n);
    }), Ws--, Ws || (vr = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), Qo = /* @__PURE__ */ new WeakMap(), ea = {});
  };
}, ts = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = tC(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), rC(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ns = "Dialog", [Hf, Gf] = Fe(ns), [oC, Qt] = Hf(ns), Wf = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = d.useRef(null), l = d.useRef(null), [u, f] = Ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: ns
  });
  return /* @__PURE__ */ c.jsx(
    oC,
    {
      scope: t,
      triggerRef: i,
      contentRef: l,
      contentId: $e(),
      titleId: $e(),
      descriptionId: $e(),
      open: u,
      onOpenChange: f,
      onOpenToggle: d.useCallback(() => f((p) => !p), [f]),
      modal: s,
      children: n
    }
  );
};
Wf.displayName = ns;
var Uf = "DialogTrigger", Yf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Uf, n), a = le(t, o.triggerRef);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Fl(o.open),
        ...r,
        ref: a,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
  }
);
Yf.displayName = Uf;
var $l = "DialogPortal", [aC, Kf] = Hf($l, {
  forceMount: void 0
}), qf = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Qt($l, t);
  return /* @__PURE__ */ c.jsx(aC, { scope: t, forceMount: n, children: d.Children.map(r, (s) => /* @__PURE__ */ c.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ c.jsx(No, { asChild: !0, container: o, children: s }) })) });
};
qf.displayName = $l;
var Ea = "DialogOverlay", Xf = d.forwardRef(
  (e, t) => {
    const n = Kf(Ea, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(Ea, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ c.jsx(iC, { ...o, ref: t }) }) : null;
  }
);
Xf.displayName = Ea;
var sC = /* @__PURE__ */ An("DialogOverlay.RemoveScroll"), iC = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Ea, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ c.jsx(Po, { as: sC, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          "data-state": Fl(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), er = "DialogContent", Zf = d.forwardRef(
  (e, t) => {
    const n = Kf(er, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Qt(er, e.__scopeDialog);
    return /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(lC, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(cC, { ...o, ref: t }) });
  }
);
Zf.displayName = er;
var lC = d.forwardRef(
  (e, t) => {
    const n = Qt(er, e.__scopeDialog), r = d.useRef(null), o = le(t, n.contentRef, r);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return ts(a);
    }, []), /* @__PURE__ */ c.jsx(
      Jf,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (a) => {
          var s;
          a.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: H(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), cC = d.forwardRef(
  (e, t) => {
    const n = Qt(er, e.__scopeDialog), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      Jf,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), Jf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Qt(er, n), l = d.useRef(null), u = le(t, l);
    return Qa(), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        Eo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ c.jsx(
            zn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Fl(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(dC, { titleId: i.titleId }),
        /* @__PURE__ */ c.jsx(pC, { contentRef: l, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Ll = "DialogTitle", Qf = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(Ll, n);
    return /* @__PURE__ */ c.jsx(Z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Qf.displayName = Ll;
var ep = "DialogDescription", tp = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(ep, n);
    return /* @__PURE__ */ c.jsx(Z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
tp.displayName = ep;
var np = "DialogClose", rp = d.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Qt(np, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
rp.displayName = np;
function Fl(e) {
  return e ? "open" : "closed";
}
var op = "DialogTitleWarning", [uC, ap] = fb(op, {
  contentName: er,
  titleName: Ll,
  docsSlug: "dialog"
}), dC = ({ titleId: e }) => {
  const t = ap(op), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return d.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, fC = "DialogDescriptionWarning", pC = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ap(fC).contentName}}.`;
  return d.useEffect(() => {
    var a;
    const o = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, _o = Wf, rs = Yf, Mo = qf, lr = Xf, cr = Zf, Lr = Qf, Fr = tp, ur = rp, sp = "AlertDialog", [mC, J6] = Fe(sp, [
  Gf
]), En = Gf(), ip = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = En(t);
  return /* @__PURE__ */ c.jsx(_o, { ...r, ...n, modal: !0 });
};
ip.displayName = sp;
var gC = "AlertDialogTrigger", lp = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = En(n);
    return /* @__PURE__ */ c.jsx(rs, { ...o, ...r, ref: t });
  }
);
lp.displayName = gC;
var hC = "AlertDialogPortal", cp = (e) => {
  const { __scopeAlertDialog: t, ...n } = e, r = En(t);
  return /* @__PURE__ */ c.jsx(Mo, { ...r, ...n });
};
cp.displayName = hC;
var vC = "AlertDialogOverlay", up = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = En(n);
    return /* @__PURE__ */ c.jsx(lr, { ...o, ...r, ref: t });
  }
);
up.displayName = vC;
var Nr = "AlertDialogContent", [xC, wC] = mC(Nr), yC = /* @__PURE__ */ lf("AlertDialogContent"), dp = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e, a = En(n), s = d.useRef(null), i = le(t, s), l = d.useRef(null);
    return /* @__PURE__ */ c.jsx(
      uC,
      {
        contentName: Nr,
        titleName: fp,
        docsSlug: "alert-dialog",
        children: /* @__PURE__ */ c.jsx(xC, { scope: n, cancelRef: l, children: /* @__PURE__ */ c.jsxs(
          cr,
          {
            role: "alertdialog",
            ...a,
            ...o,
            ref: i,
            onOpenAutoFocus: H(o.onOpenAutoFocus, (u) => {
              var f;
              u.preventDefault(), (f = l.current) == null || f.focus({ preventScroll: !0 });
            }),
            onPointerDownOutside: (u) => u.preventDefault(),
            onInteractOutside: (u) => u.preventDefault(),
            children: [
              /* @__PURE__ */ c.jsx(yC, { children: r }),
              /* @__PURE__ */ c.jsx(CC, { contentRef: s })
            ]
          }
        ) })
      }
    );
  }
);
dp.displayName = Nr;
var fp = "AlertDialogTitle", pp = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = En(n);
    return /* @__PURE__ */ c.jsx(Lr, { ...o, ...r, ref: t });
  }
);
pp.displayName = fp;
var mp = "AlertDialogDescription", gp = d.forwardRef((e, t) => {
  const { __scopeAlertDialog: n, ...r } = e, o = En(n);
  return /* @__PURE__ */ c.jsx(Fr, { ...o, ...r, ref: t });
});
gp.displayName = mp;
var bC = "AlertDialogAction", hp = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, o = En(n);
    return /* @__PURE__ */ c.jsx(ur, { ...o, ...r, ref: t });
  }
);
hp.displayName = bC;
var vp = "AlertDialogCancel", xp = d.forwardRef(
  (e, t) => {
    const { __scopeAlertDialog: n, ...r } = e, { cancelRef: o } = wC(vp, n), a = En(n), s = le(t, o);
    return /* @__PURE__ */ c.jsx(ur, { ...a, ...r, ref: s });
  }
);
xp.displayName = vp;
var CC = ({ contentRef: e }) => {
  const t = `\`${Nr}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${Nr}\` by passing a \`${mp}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${Nr}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return d.useEffect(() => {
    var r;
    document.getElementById(
      (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
    ) || console.warn(t);
  }, [t, e]), null;
}, SC = ip, RC = lp, EC = cp, wp = up, yp = dp, bp = hp, Cp = xp, Sp = pp, Rp = gp;
const Vu = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Bu = ef, dr = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Bu(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((u) => {
    const f = n == null ? void 0 : n[u], p = a == null ? void 0 : a[u];
    if (f === null) return null;
    const g = Vu(f) || Vu(p);
    return o[u][g];
  }), i = n && Object.entries(n).reduce((u, f) => {
    let [p, g] = f;
    return g === void 0 || (u[p] = g), u;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, f) => {
    let { class: p, className: g, ...m } = f;
    return Object.entries(m).every((v) => {
      let [h, w] = v;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...i
      }[h]) : {
        ...a,
        ...i
      }[h] === w;
    }) ? [
      ...u,
      p,
      g
    ] : u;
  }, []);
  return Bu(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Mr = dr(
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
), jt = d.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const s = r ? Pl : "button";
    return /* @__PURE__ */ c.jsx(
      s,
      {
        className: I(Mr({ variant: t, size: n, className: e })),
        ref: a,
        ...o
      }
    );
  }
);
jt.displayName = "Button";
const Q6 = SC, e5 = RC, NC = EC, Ep = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  wp,
  {
    className: I(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
Ep.displayName = wp.displayName;
const PC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsxs(NC, { children: [
  /* @__PURE__ */ c.jsx(Ep, {}),
  /* @__PURE__ */ c.jsx(
    yp,
    {
      ref: n,
      className: I(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg    ",
        e
      ),
      ...t
    }
  )
] }));
PC.displayName = yp.displayName;
const _C = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
_C.displayName = "AlertDialogHeader";
const MC = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
MC.displayName = "AlertDialogFooter";
const TC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Sp,
  {
    ref: n,
    className: I("text-lg font-semibold", e),
    ...t
  }
));
TC.displayName = Sp.displayName;
const DC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Rp,
  {
    ref: n,
    className: I("text-sm text-slate-500  ", e),
    ...t
  }
));
DC.displayName = Rp.displayName;
const IC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  bp,
  {
    ref: n,
    className: I(Mr(), e),
    ...t
  }
));
IC.displayName = bp.displayName;
const AC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Cp,
  {
    ref: n,
    className: I(
      Mr({ variant: "outline" }),
      "mt-2 sm:mt-0",
      e
    ),
    ...t
  }
));
AC.displayName = Cp.displayName;
const jC = dr(
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
), kC = d.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: I(jC({ variant: t }), e),
    ...n
  }
));
kC.displayName = "Alert";
const OC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "h5",
  {
    ref: n,
    className: I("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
OC.displayName = "AlertTitle";
const $C = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: I("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
$C.displayName = "AlertDescription";
var LC = "AspectRatio", Np = d.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Np.displayName = LC;
var FC = Np;
const t5 = FC;
var Ii = { exports: {} }, Us = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hu;
function zC() {
  if (Hu) return Us;
  Hu = 1;
  var e = D;
  function t(p, g) {
    return p === g && (p !== 0 || 1 / p === 1 / g) || p !== p && g !== g;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(p, g) {
    var m = g(), v = r({ inst: { value: m, getSnapshot: g } }), h = v[0].inst, w = v[1];
    return a(
      function() {
        h.value = m, h.getSnapshot = g, l(h) && w({ inst: h });
      },
      [p, m, g]
    ), o(
      function() {
        return l(h) && w({ inst: h }), p(function() {
          l(h) && w({ inst: h });
        });
      },
      [p]
    ), s(m), m;
  }
  function l(p) {
    var g = p.getSnapshot;
    p = p.value;
    try {
      var m = g();
      return !n(p, m);
    } catch {
      return !0;
    }
  }
  function u(p, g) {
    return g();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : i;
  return Us.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, Us;
}
var Ys = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gu;
function VC() {
  return Gu || (Gu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(m, v) {
      return m === v && (m !== 0 || 1 / m === 1 / v) || m !== m && v !== v;
    }
    function t(m, v) {
      f || o.startTransition === void 0 || (f = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = v();
      if (!p) {
        var w = v();
        a(h, w) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), p = !0);
      }
      w = s({
        inst: { value: h, getSnapshot: v }
      });
      var x = w[0].inst, y = w[1];
      return l(
        function() {
          x.value = h, x.getSnapshot = v, n(x) && y({ inst: x });
        },
        [m, h, v]
      ), i(
        function() {
          return n(x) && y({ inst: x }), m(function() {
            n(x) && y({ inst: x });
          });
        },
        [m]
      ), u(h), h;
    }
    function n(m) {
      var v = m.getSnapshot;
      m = m.value;
      try {
        var h = v();
        return !a(m, h);
      } catch {
        return !0;
      }
    }
    function r(m, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = D, a = typeof Object.is == "function" ? Object.is : e, s = o.useState, i = o.useEffect, l = o.useLayoutEffect, u = o.useDebugValue, f = !1, p = !1, g = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Ys.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : g, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Ys;
}
process.env.NODE_ENV === "production" ? Ii.exports = zC() : Ii.exports = VC();
var BC = Ii.exports;
function HC() {
  return BC.useSyncExternalStore(
    GC,
    () => !0,
    () => !1
  );
}
function GC() {
  return () => {
  };
}
var zl = "Avatar", [WC, n5] = Fe(zl), [UC, Pp] = WC(zl), _p = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = d.useState("idle");
    return /* @__PURE__ */ c.jsx(
      UC,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ c.jsx(Z.span, { ...r, ref: t })
      }
    );
  }
);
_p.displayName = zl;
var Mp = "AvatarImage", Tp = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, s = Pp(Mp, n), i = YC(r, a), l = Oe((u) => {
      o(u), s.onImageLoadingStatusChange(u);
    });
    return Ue(() => {
      i !== "idle" && l(i);
    }, [i, l]), i === "loaded" ? /* @__PURE__ */ c.jsx(Z.img, { ...a, ref: t, src: r }) : null;
  }
);
Tp.displayName = Mp;
var Dp = "AvatarFallback", Ip = d.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Pp(Dp, n), [s, i] = d.useState(r === void 0);
    return d.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c.jsx(Z.span, { ...o, ref: t }) : null;
  }
);
Ip.displayName = Dp;
function Wu(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function YC(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = HC(), o = d.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [s, i] = d.useState(
    () => Wu(a, e)
  );
  return Ue(() => {
    i(Wu(a, e));
  }, [a, e]), Ue(() => {
    const l = (p) => () => {
      i(p);
    };
    if (!a) return;
    const u = l("loaded"), f = l("error");
    return a.addEventListener("load", u), a.addEventListener("error", f), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", u), a.removeEventListener("error", f);
    };
  }, [a, n, t]), s;
}
var Ap = _p, jp = Tp, kp = Ip;
const KC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ap,
  {
    ref: n,
    className: I(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
KC.displayName = Ap.displayName;
const qC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jp,
  {
    ref: n,
    className: I("aspect-square h-full w-full", e),
    ...t
  }
));
qC.displayName = jp.displayName;
const XC = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  kp,
  {
    ref: n,
    className: I(
      "flex h-full w-full items-center justify-center rounded-full bg-slate-100  ",
      e
    ),
    ...t
  }
));
XC.displayName = kp.displayName;
const ZC = dr(
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
function Uu({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ c.jsx("div", { className: I(ZC({ variant: t }), e), ...n });
}
const JC = "data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='arrow-forward-small-line'%3e%3cpath%20id='Vector'%20d='M8.88566%208.24998L6.52864%205.89295C6.26829%205.6326%206.26829%205.21049%206.52864%204.95014C6.78899%204.6898%207.2111%204.6898%207.47145%204.95014L10.2999%207.77857C10.5602%208.03892%2010.5602%208.46103%2010.2999%208.72138L7.47145%2011.5498C7.2111%2011.8102%206.78899%2011.8102%206.52864%2011.5498C6.26829%2011.2895%206.26829%2010.8673%206.52864%2010.607L8.88566%208.24998Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e", QC = d.forwardRef(({ ...e }, t) => /* @__PURE__ */ c.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
QC.displayName = "Breadcrumb";
const eS = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "span",
  {
    ref: n,
    className: I(
      "flex flex-wrap items-center gap-1.5 break-words font-semibold text-[14px] text-[#000] sm:gap-2.5",
      e
    ),
    ...t
  }
));
eS.displayName = "BreadcrumbList";
const tS = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "span",
  {
    ref: n,
    className: I(
      "inline-flex items-center gap-1.5 font-semibold text-[14px] text-[#000] leading-5",
      e
    ),
    ...t
  }
));
tS.displayName = "BreadcrumbItem";
const nS = d.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? Pl : "a";
  return /* @__PURE__ */ c.jsx(o, { ref: r, className: I("transition-colors", t), ...n });
});
nS.displayName = "BreadcrumbLink";
const rS = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: I("font-semibold text-[14px] text-[#000]", e),
    ...t
  }
));
rS.displayName = "BreadcrumbPage";
const oS = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: I("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ c.jsx("img", { src: JC, alt: "forward-icon" })
  }
);
oS.displayName = "BreadcrumbSeparator";
const aS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: I("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ c.jsx(_f, { className: "h-4 w-4" }),
      /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
aS.displayName = "BreadcrumbElipssis";
function _e(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function kt(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function yt(e, t) {
  const n = _e(e);
  return isNaN(t) ? kt(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Yt(e, t) {
  const n = _e(e);
  if (isNaN(t)) return kt(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = kt(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Vl = 6048e5, sS = 864e5;
let iS = {};
function To() {
  return iS;
}
function dn(e, t) {
  var i, l, u, f;
  const n = To(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = _e(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function tr(e) {
  return dn(e, { weekStartsOn: 1 });
}
function Op(e) {
  const t = _e(e), n = t.getFullYear(), r = kt(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = tr(r), a = kt(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = tr(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Tr(e) {
  const t = _e(e);
  return t.setHours(0, 0, 0, 0), t;
}
function Na(e) {
  const t = _e(e), n = new Date(
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
function an(e, t) {
  const n = Tr(e), r = Tr(t), o = +n - Na(n), a = +r - Na(r);
  return Math.round((o - a) / sS);
}
function lS(e) {
  const t = Op(e), n = kt(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), tr(n);
}
function Ai(e, t) {
  const n = t * 7;
  return yt(e, n);
}
function cS(e, t) {
  return Yt(e, t * 12);
}
function uS(e) {
  let t;
  return e.forEach(function(n) {
    const r = _e(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function dS(e) {
  let t;
  return e.forEach((n) => {
    const r = _e(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Nt(e, t) {
  const n = Tr(e), r = Tr(t);
  return +n == +r;
}
function Bl(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function fS(e) {
  if (!Bl(e) && typeof e != "number")
    return !1;
  const t = _e(e);
  return !isNaN(Number(t));
}
function po(e, t) {
  const n = _e(e), r = _e(t), o = n.getFullYear() - r.getFullYear(), a = n.getMonth() - r.getMonth();
  return o * 12 + a;
}
function pS(e, t, n) {
  const r = dn(e, n), o = dn(t, n), a = +r - Na(r), s = +o - Na(o);
  return Math.round((a - s) / Vl);
}
function Hl(e) {
  const t = _e(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Pt(e) {
  const t = _e(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function $p(e) {
  const t = _e(e), n = kt(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Gl(e, t) {
  var i, l, u, f;
  const n = To(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? 0, o = _e(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Lp(e) {
  return Gl(e, { weekStartsOn: 1 });
}
const mS = {
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
}, gS = (e, t, n) => {
  let r;
  const o = mS[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function Ks(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const hS = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, vS = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, xS = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, wS = {
  date: Ks({
    formats: hS,
    defaultWidth: "full"
  }),
  time: Ks({
    formats: vS,
    defaultWidth: "full"
  }),
  dateTime: Ks({
    formats: xS,
    defaultWidth: "full"
  })
}, yS = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bS = (e, t, n, r) => yS[e];
function Zr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const CS = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, SS = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, RS = {
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
}, ES = {
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
}, NS = {
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
}, PS = {
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
}, _S = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, MS = {
  ordinalNumber: _S,
  era: Zr({
    values: CS,
    defaultWidth: "wide"
  }),
  quarter: Zr({
    values: SS,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Zr({
    values: RS,
    defaultWidth: "wide"
  }),
  day: Zr({
    values: ES,
    defaultWidth: "wide"
  }),
  dayPeriod: Zr({
    values: NS,
    defaultWidth: "wide",
    formattingValues: PS,
    defaultFormattingWidth: "wide"
  })
};
function Jr(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? DS(i, (p) => p.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      TS(i, (p) => p.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(l) : l, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const f = t.slice(s.length);
    return { value: u, rest: f };
  };
}
function TS(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function DS(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function IS(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const AS = /^(\d+)(th|st|nd|rd)?/i, jS = /\d+/i, kS = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, OS = {
  any: [/^b/i, /^(a|c)/i]
}, $S = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, LS = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, FS = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zS = {
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
}, VS = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, BS = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, HS = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, GS = {
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
}, WS = {
  ordinalNumber: IS({
    matchPattern: AS,
    parsePattern: jS,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jr({
    matchPatterns: kS,
    defaultMatchWidth: "wide",
    parsePatterns: OS,
    defaultParseWidth: "any"
  }),
  quarter: Jr({
    matchPatterns: $S,
    defaultMatchWidth: "wide",
    parsePatterns: LS,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jr({
    matchPatterns: FS,
    defaultMatchWidth: "wide",
    parsePatterns: zS,
    defaultParseWidth: "any"
  }),
  day: Jr({
    matchPatterns: VS,
    defaultMatchWidth: "wide",
    parsePatterns: BS,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jr({
    matchPatterns: HS,
    defaultMatchWidth: "any",
    parsePatterns: GS,
    defaultParseWidth: "any"
  })
}, Fp = {
  code: "en-US",
  formatDistance: gS,
  formatLong: wS,
  formatRelative: bS,
  localize: MS,
  match: WS,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function US(e) {
  const t = _e(e);
  return an(t, $p(t)) + 1;
}
function zp(e) {
  const t = _e(e), n = +tr(t) - +lS(t);
  return Math.round(n / Vl) + 1;
}
function Vp(e, t) {
  var f, p, g, m;
  const n = _e(e), r = n.getFullYear(), o = To(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (f = t == null ? void 0 : t.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = kt(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = dn(s, t), l = kt(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const u = dn(l, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function YS(e, t) {
  var i, l, u, f;
  const n = To(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((f = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : f.firstWeekContainsDate) ?? 1, o = Vp(e, t), a = kt(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), dn(a, t);
}
function Bp(e, t) {
  const n = _e(e), r = +dn(n, t) - +YS(n, t);
  return Math.round(r / Vl) + 1;
}
function Ie(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const _n = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Ie(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Ie(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Ie(e.getDate(), t.length);
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
    return Ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Ie(o, t.length);
  }
}, xr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Yu = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return _n.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Vp(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Ie(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Ie(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Op(e);
    return Ie(n, t.length);
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
    return Ie(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Ie(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return Ie(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return _n.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return Ie(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Bp(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = zp(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : _n.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = US(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Ie(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Ie(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Ie(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Ie(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = xr.noon : r === 0 ? o = xr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = xr.evening : r >= 12 ? o = xr.afternoon : r >= 4 ? o = xr.morning : o = xr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return _n.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : _n.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ie(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ie(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : _n.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : _n.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return _n.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return qu(r);
      case "XXXX":
      case "XX":
        return Xn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Xn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return qu(r);
      case "xxxx":
      case "xx":
        return Xn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Xn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ku(r, ":");
      case "OOOO":
      default:
        return "GMT" + Xn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ku(r, ":");
      case "zzzz":
      default:
        return "GMT" + Xn(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Ie(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Ie(r, t.length);
  }
};
function Ku(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Ie(a, 2);
}
function qu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Ie(Math.abs(e) / 60, 2) : Xn(e, t);
}
function Xn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Ie(Math.trunc(r / 60), 2), a = Ie(r % 60, 2);
  return n + o + t + a;
}
const Xu = (e, t) => {
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
}, Hp = (e, t) => {
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
}, KS = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Xu(e, t);
  let a;
  switch (r) {
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
  return a.replace("{{date}}", Xu(r, t)).replace("{{time}}", Hp(o, t));
}, qS = {
  p: Hp,
  P: KS
}, XS = /^D+$/, ZS = /^Y+$/, JS = ["D", "DD", "YY", "YYYY"];
function QS(e) {
  return XS.test(e);
}
function eR(e) {
  return ZS.test(e);
}
function tR(e, t, n) {
  const r = nR(e, t, n);
  if (console.warn(r), JS.includes(e)) throw new RangeError(r);
}
function nR(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const rR = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, oR = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, aR = /^'([^]*?)'?$/, sR = /''/g, iR = /[a-zA-Z]/;
function ln(e, t, n) {
  var f, p, g, m, v, h, w, x;
  const r = To(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Fp, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((p = (f = n == null ? void 0 : n.locale) == null ? void 0 : f.options) == null ? void 0 : p.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((h = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : h.weekStartsOn) ?? r.weekStartsOn ?? ((x = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : x.weekStartsOn) ?? 0, i = _e(e);
  if (!fS(i))
    throw new RangeError("Invalid time value");
  let l = t.match(oR).map((y) => {
    const b = y[0];
    if (b === "p" || b === "P") {
      const S = qS[b];
      return S(y, o.formatLong);
    }
    return y;
  }).join("").match(rR).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const b = y[0];
    if (b === "'")
      return { isToken: !1, value: lR(y) };
    if (Yu[b])
      return { isToken: !0, value: y };
    if (b.match(iR))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
  const u = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const b = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && eR(b) || !(n != null && n.useAdditionalDayOfYearTokens) && QS(b)) && tR(b, t, String(e));
    const S = Yu[b[0]];
    return S(i, b, o.localize, u);
  }).join("");
}
function lR(e) {
  const t = e.match(aR);
  return t ? t[1].replace(sR, "'") : e;
}
function cR(e) {
  const t = _e(e), n = t.getFullYear(), r = t.getMonth(), o = kt(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function uR(e) {
  return Math.trunc(+_e(e) / 1e3);
}
function dR(e) {
  const t = _e(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function fR(e, t) {
  return pS(
    dR(e),
    Pt(e),
    t
  ) + 1;
}
function ji(e, t) {
  const n = _e(e), r = _e(t);
  return n.getTime() > r.getTime();
}
function Gp(e, t) {
  const n = _e(e), r = _e(t);
  return +n < +r;
}
function Wl(e, t) {
  const n = _e(e), r = _e(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function pR(e, t) {
  const n = _e(e), r = _e(t);
  return n.getFullYear() === r.getFullYear();
}
function qs(e, t) {
  return yt(e, -t);
}
function Xs(e, t) {
  const n = _e(e), r = n.getFullYear(), o = n.getDate(), a = kt(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = cR(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function Zu(e, t) {
  const n = _e(e);
  return isNaN(+n) ? kt(e, NaN) : (n.setFullYear(t), n);
}
var me = function() {
  return me = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, me.apply(this, arguments);
};
function mR(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Wp(e, t, n) {
  for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Do(e) {
  return e.mode === "multiple";
}
function Io(e) {
  return e.mode === "range";
}
function os(e) {
  return e.mode === "single";
}
var gR = {
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
function hR(e, t) {
  return ln(e, "LLLL y", t);
}
function vR(e, t) {
  return ln(e, "d", t);
}
function xR(e, t) {
  return ln(e, "LLLL", t);
}
function wR(e) {
  return "".concat(e);
}
function yR(e, t) {
  return ln(e, "cccccc", t);
}
function bR(e, t) {
  return ln(e, "yyyy", t);
}
var CR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: hR,
  formatDay: vR,
  formatMonthCaption: xR,
  formatWeekNumber: wR,
  formatWeekdayName: yR,
  formatYearCaption: bR
}), SR = function(e, t, n) {
  return ln(e, "do MMMM (EEEE)", n);
}, RR = function() {
  return "Month: ";
}, ER = function() {
  return "Go to next month";
}, NR = function() {
  return "Go to previous month";
}, PR = function(e, t) {
  return ln(e, "cccc", t);
}, _R = function(e) {
  return "Week n. ".concat(e);
}, MR = function() {
  return "Year: ";
}, TR = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: SR,
  labelMonthDropdown: RR,
  labelNext: ER,
  labelPrevious: NR,
  labelWeekNumber: _R,
  labelWeekday: PR,
  labelYearDropdown: MR
});
function DR() {
  var e = "buttons", t = gR, n = Fp, r = {}, o = {}, a = 1, s = {}, i = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: CR,
    labels: TR,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: a,
    styles: s,
    today: i,
    mode: "default"
  };
}
function IR(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, a = e.fromDate, s = e.toDate;
  return r ? a = Pt(r) : t && (a = new Date(t, 0, 1)), o ? s = Hl(o) : n && (s = new Date(n, 11, 31)), {
    fromDate: a ? Tr(a) : void 0,
    toDate: s ? Tr(s) : void 0
  };
}
var Up = Ln(void 0);
function AR(e) {
  var t, n = e.initialProps, r = DR(), o = IR(n), a = o.fromDate, s = o.toDate, i = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  i !== "buttons" && (!a || !s) && (i = "buttons");
  var l;
  (os(n) || Do(n) || Io(n)) && (l = n.onSelect);
  var u = me(me(me({}, r), n), { captionLayout: i, classNames: me(me({}, r.classNames), n.classNames), components: me({}, n.components), formatters: me(me({}, r.formatters), n.formatters), fromDate: a, labels: me(me({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: me(me({}, r.modifiers), n.modifiers), modifiersClassNames: me(me({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: l, styles: me(me({}, r.styles), n.styles), toDate: s });
  return c.jsx(Up.Provider, { value: u, children: e.children });
}
function ze() {
  var e = Rn(Up);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Yp(e) {
  var t = ze(), n = t.locale, r = t.classNames, o = t.styles, a = t.formatters.formatCaption;
  return c.jsx("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: a(e.displayMonth, { locale: n }) });
}
function jR(e) {
  return c.jsx("svg", me({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: c.jsx("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Kp(e) {
  var t, n, r = e.onChange, o = e.value, a = e.children, s = e.caption, i = e.className, l = e.style, u = ze(), f = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : jR;
  return c.jsxs("div", { className: i, style: l, children: [c.jsx("span", { className: u.classNames.vhidden, children: e["aria-label"] }), c.jsx("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: a }), c.jsxs("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [s, c.jsx(f, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function kR(e) {
  var t, n = ze(), r = n.fromDate, o = n.toDate, a = n.styles, s = n.locale, i = n.formatters.formatMonthCaption, l = n.classNames, u = n.components, f = n.labels.labelMonthDropdown;
  if (!r)
    return c.jsx(c.Fragment, {});
  if (!o)
    return c.jsx(c.Fragment, {});
  var p = [];
  if (pR(r, o))
    for (var g = Pt(r), m = r.getMonth(); m <= o.getMonth(); m++)
      p.push(Xs(g, m));
  else
    for (var g = Pt(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      p.push(Xs(g, m));
  var v = function(w) {
    var x = Number(w.target.value), y = Xs(Pt(e.displayMonth), x);
    e.onChange(y);
  }, h = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Kp;
  return c.jsx(h, { name: "months", "aria-label": f(), className: l.dropdown_month, style: a.dropdown_month, onChange: v, value: e.displayMonth.getMonth(), caption: i(e.displayMonth, { locale: s }), children: p.map(function(w) {
    return c.jsx("option", { value: w.getMonth(), children: i(w, { locale: s }) }, w.getMonth());
  }) });
}
function OR(e) {
  var t, n = e.displayMonth, r = ze(), o = r.fromDate, a = r.toDate, s = r.locale, i = r.styles, l = r.classNames, u = r.components, f = r.formatters.formatYearCaption, p = r.labels.labelYearDropdown, g = [];
  if (!o)
    return c.jsx(c.Fragment, {});
  if (!a)
    return c.jsx(c.Fragment, {});
  for (var m = o.getFullYear(), v = a.getFullYear(), h = m; h <= v; h++)
    g.push(Zu($p(/* @__PURE__ */ new Date()), h));
  var w = function(y) {
    var b = Zu(Pt(n), Number(y.target.value));
    e.onChange(b);
  }, x = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Kp;
  return c.jsx(x, { name: "years", "aria-label": p(), className: l.dropdown_year, style: i.dropdown_year, onChange: w, value: n.getFullYear(), caption: f(n, { locale: s }), children: g.map(function(y) {
    return c.jsx("option", { value: y.getFullYear(), children: f(y, { locale: s }) }, y.getFullYear());
  }) });
}
function $R(e, t) {
  var n = nt(e), r = n[0], o = n[1], a = t === void 0 ? r : t;
  return [a, o];
}
function LR(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), a = e.toDate, s = e.fromDate, i = e.numberOfMonths, l = i === void 0 ? 1 : i;
  if (a && po(a, o) < 0) {
    var u = -1 * (l - 1);
    o = Yt(a, u);
  }
  return s && po(o, s) < 0 && (o = s), Pt(o);
}
function FR() {
  var e = ze(), t = LR(e), n = $R(t, e.month), r = n[0], o = n[1], a = function(s) {
    var i;
    if (!e.disableNavigation) {
      var l = Pt(s);
      o(l), (i = e.onMonthChange) === null || i === void 0 || i.call(e, l);
    }
  };
  return [r, a];
}
function zR(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = Pt(e), a = Pt(Yt(o, r)), s = po(a, o), i = [], l = 0; l < s; l++) {
    var u = Yt(o, l);
    i.push(u);
  }
  return n && (i = i.reverse()), i;
}
function VR(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return Yt(i, s);
    var l = po(n, e);
    if (!(l < a))
      return Yt(i, s);
  }
}
function BR(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, a = o === void 0 ? 1 : o, s = r ? a : 1, i = Pt(e);
    if (!n)
      return Yt(i, -s);
    var l = po(i, n);
    if (!(l <= 0))
      return Yt(i, -s);
  }
}
var qp = Ln(void 0);
function HR(e) {
  var t = ze(), n = FR(), r = n[0], o = n[1], a = zR(r, t), s = VR(r, t), i = BR(r, t), l = function(p) {
    return a.some(function(g) {
      return Wl(p, g);
    });
  }, u = function(p, g) {
    l(p) || (g && Gp(p, g) ? o(Yt(p, 1 + t.numberOfMonths * -1)) : o(p));
  }, f = {
    currentMonth: r,
    displayMonths: a,
    goToMonth: o,
    goToDate: u,
    previousMonth: i,
    nextMonth: s,
    isDateDisplayed: l
  };
  return c.jsx(qp.Provider, { value: f, children: e.children });
}
function Ao() {
  var e = Rn(qp);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function Ju(e) {
  var t, n = ze(), r = n.classNames, o = n.styles, a = n.components, s = Ao().goToMonth, i = function(f) {
    s(Yt(f, e.displayIndex ? -e.displayIndex : 0));
  }, l = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Yp, u = c.jsx(l, { id: e.id, displayMonth: e.displayMonth });
  return c.jsxs("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [c.jsx("div", { className: r.vhidden, children: u }), c.jsx(kR, { onChange: i, displayMonth: e.displayMonth }), c.jsx(OR, { onChange: i, displayMonth: e.displayMonth })] });
}
function GR(e) {
  return c.jsx("svg", me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: c.jsx("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function WR(e) {
  return c.jsx("svg", me({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: c.jsx("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var Pa = pn(function(e, t) {
  var n = ze(), r = n.classNames, o = n.styles, a = [r.button_reset, r.button];
  e.className && a.push(e.className);
  var s = a.join(" "), i = me(me({}, o.button_reset), o.button);
  return e.style && Object.assign(i, e.style), c.jsx("button", me({}, e, { ref: t, type: "button", className: s, style: i }));
});
function UR(e) {
  var t, n, r = ze(), o = r.dir, a = r.locale, s = r.classNames, i = r.styles, l = r.labels, u = l.labelPrevious, f = l.labelNext, p = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return c.jsx(c.Fragment, {});
  var g = u(e.previousMonth, { locale: a }), m = [
    s.nav_button,
    s.nav_button_previous
  ].join(" "), v = f(e.nextMonth, { locale: a }), h = [
    s.nav_button,
    s.nav_button_next
  ].join(" "), w = (t = p == null ? void 0 : p.IconRight) !== null && t !== void 0 ? t : WR, x = (n = p == null ? void 0 : p.IconLeft) !== null && n !== void 0 ? n : GR;
  return c.jsxs("div", { className: s.nav, style: i.nav, children: [!e.hidePrevious && c.jsx(Pa, { name: "previous-month", "aria-label": g, className: m, style: i.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? c.jsx(w, { className: s.nav_icon, style: i.nav_icon }) : c.jsx(x, { className: s.nav_icon, style: i.nav_icon }) }), !e.hideNext && c.jsx(Pa, { name: "next-month", "aria-label": v, className: h, style: i.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? c.jsx(x, { className: s.nav_icon, style: i.nav_icon }) : c.jsx(w, { className: s.nav_icon, style: i.nav_icon }) })] });
}
function Qu(e) {
  var t = ze().numberOfMonths, n = Ao(), r = n.previousMonth, o = n.nextMonth, a = n.goToMonth, s = n.displayMonths, i = s.findIndex(function(v) {
    return Wl(e.displayMonth, v);
  }), l = i === 0, u = i === s.length - 1, f = t > 1 && (l || !u), p = t > 1 && (u || !l), g = function() {
    r && a(r);
  }, m = function() {
    o && a(o);
  };
  return c.jsx(UR, { displayMonth: e.displayMonth, hideNext: f, hidePrevious: p, nextMonth: o, previousMonth: r, onPreviousClick: g, onNextClick: m });
}
function YR(e) {
  var t, n = ze(), r = n.classNames, o = n.disableNavigation, a = n.styles, s = n.captionLayout, i = n.components, l = (t = i == null ? void 0 : i.CaptionLabel) !== null && t !== void 0 ? t : Yp, u;
  return o ? u = c.jsx(l, { id: e.id, displayMonth: e.displayMonth }) : s === "dropdown" ? u = c.jsx(Ju, { displayMonth: e.displayMonth, id: e.id }) : s === "dropdown-buttons" ? u = c.jsxs(c.Fragment, { children: [c.jsx(Ju, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), c.jsx(Qu, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = c.jsxs(c.Fragment, { children: [c.jsx(l, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), c.jsx(Qu, { displayMonth: e.displayMonth, id: e.id })] }), c.jsx("div", { className: r.caption, style: a.caption, children: u });
}
function KR(e) {
  var t = ze(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? c.jsx("tfoot", { className: o, style: r.tfoot, children: c.jsx("tr", { children: c.jsx("td", { colSpan: 8, children: n }) }) }) : c.jsx(c.Fragment, {});
}
function qR(e, t, n) {
  for (var r = n ? tr(/* @__PURE__ */ new Date()) : dn(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], a = 0; a < 7; a++) {
    var s = yt(r, a);
    o.push(s);
  }
  return o;
}
function XR() {
  var e = ze(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, a = e.weekStartsOn, s = e.ISOWeek, i = e.formatters.formatWeekdayName, l = e.labels.labelWeekday, u = qR(o, a, s);
  return c.jsxs("tr", { style: n.head_row, className: t.head_row, children: [r && c.jsx("td", { style: n.head_cell, className: t.head_cell }), u.map(function(f, p) {
    return c.jsx("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": l(f, { locale: o }), children: i(f, { locale: o }) }, p);
  })] });
}
function ZR() {
  var e, t = ze(), n = t.classNames, r = t.styles, o = t.components, a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : XR;
  return c.jsx("thead", { style: r.head, className: n.head, children: c.jsx(a, {}) });
}
function JR(e) {
  var t = ze(), n = t.locale, r = t.formatters.formatDay;
  return c.jsx(c.Fragment, { children: r(e.date, { locale: n }) });
}
var Ul = Ln(void 0);
function QR(e) {
  if (!Do(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return c.jsx(Ul.Provider, { value: t, children: e.children });
  }
  return c.jsx(eE, { initialProps: e.initialProps, children: e.children });
}
function eE(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, a = t.max, s = function(u, f, p) {
    var g, m;
    (g = t.onDayClick) === null || g === void 0 || g.call(t, u, f, p);
    var v = !!(f.selected && o && (r == null ? void 0 : r.length) === o);
    if (!v) {
      var h = !!(!f.selected && a && (r == null ? void 0 : r.length) === a);
      if (!h) {
        var w = r ? Wp([], r) : [];
        if (f.selected) {
          var x = w.findIndex(function(y) {
            return Nt(u, y);
          });
          w.splice(x, 1);
        } else
          w.push(u);
        (m = t.onSelect) === null || m === void 0 || m.call(t, w, u, f, p);
      }
    }
  }, i = {
    disabled: []
  };
  r && i.disabled.push(function(u) {
    var f = a && r.length > a - 1, p = r.some(function(g) {
      return Nt(g, u);
    });
    return !!(f && !p);
  });
  var l = {
    selected: r,
    onDayClick: s,
    modifiers: i
  };
  return c.jsx(Ul.Provider, { value: l, children: n });
}
function Yl() {
  var e = Rn(Ul);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function tE(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? Nt(o, e) && Nt(r, e) ? void 0 : Nt(o, e) ? { from: o, to: void 0 } : Nt(r, e) ? void 0 : ji(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? ji(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Gp(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var Kl = Ln(void 0);
function nE(e) {
  if (!Io(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return c.jsx(Kl.Provider, { value: t, children: e.children });
  }
  return c.jsx(rE, { initialProps: e.initialProps, children: e.children });
}
function rE(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, a = o.from, s = o.to, i = t.min, l = t.max, u = function(m, v, h) {
    var w, x;
    (w = t.onDayClick) === null || w === void 0 || w.call(t, m, v, h);
    var y = tE(m, r);
    (x = t.onSelect) === null || x === void 0 || x.call(t, y, m, v, h);
  }, f = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (a ? (f.range_start = [a], s ? (f.range_end = [s], Nt(a, s) || (f.range_middle = [
    {
      after: a,
      before: s
    }
  ])) : f.range_end = [a]) : s && (f.range_start = [s], f.range_end = [s]), i && (a && !s && f.disabled.push({
    after: qs(a, i - 1),
    before: yt(a, i - 1)
  }), a && s && f.disabled.push({
    after: a,
    before: yt(a, i - 1)
  }), !a && s && f.disabled.push({
    after: qs(s, i - 1),
    before: yt(s, i - 1)
  })), l) {
    if (a && !s && (f.disabled.push({
      before: yt(a, -l + 1)
    }), f.disabled.push({
      after: yt(a, l - 1)
    })), a && s) {
      var p = an(s, a) + 1, g = l - p;
      f.disabled.push({
        before: qs(a, g)
      }), f.disabled.push({
        after: yt(s, g)
      });
    }
    !a && s && (f.disabled.push({
      before: yt(s, -l + 1)
    }), f.disabled.push({
      after: yt(s, l - 1)
    }));
  }
  return c.jsx(Kl.Provider, { value: { selected: r, onDayClick: u, modifiers: f }, children: n });
}
function ql() {
  var e = Rn(Kl);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function pa(e) {
  return Array.isArray(e) ? Wp([], e) : e !== void 0 ? [e] : [];
}
function oE(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = pa(o);
  }), t;
}
var Kt;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(Kt || (Kt = {}));
var aE = Kt.Selected, wn = Kt.Disabled, sE = Kt.Hidden, iE = Kt.Today, Zs = Kt.RangeEnd, Js = Kt.RangeMiddle, Qs = Kt.RangeStart, lE = Kt.Outside;
function cE(e, t, n) {
  var r, o = (r = {}, r[aE] = pa(e.selected), r[wn] = pa(e.disabled), r[sE] = pa(e.hidden), r[iE] = [e.today], r[Zs] = [], r[Js] = [], r[Qs] = [], r[lE] = [], r);
  return e.fromDate && o[wn].push({ before: e.fromDate }), e.toDate && o[wn].push({ after: e.toDate }), Do(e) ? o[wn] = o[wn].concat(t.modifiers[wn]) : Io(e) && (o[wn] = o[wn].concat(n.modifiers[wn]), o[Qs] = n.modifiers[Qs], o[Js] = n.modifiers[Js], o[Zs] = n.modifiers[Zs]), o;
}
var Xp = Ln(void 0);
function uE(e) {
  var t = ze(), n = Yl(), r = ql(), o = cE(t, n, r), a = oE(t.modifiers), s = me(me({}, o), a);
  return c.jsx(Xp.Provider, { value: s, children: e.children });
}
function Zp() {
  var e = Rn(Xp);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function dE(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function fE(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function pE(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function mE(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function gE(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function hE(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var a = an(o, r) < 0;
    a && (n = [o, r], r = n[0], o = n[1]);
    var s = an(e, r) >= 0 && an(o, e) >= 0;
    return s;
  }
  return o ? Nt(o, e) : r ? Nt(r, e) : !1;
}
function vE(e) {
  return Bl(e);
}
function xE(e) {
  return Array.isArray(e) && e.every(Bl);
}
function wE(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (vE(n))
      return Nt(e, n);
    if (xE(n))
      return n.includes(e);
    if (fE(n))
      return hE(e, n);
    if (gE(n))
      return n.dayOfWeek.includes(e.getDay());
    if (dE(n)) {
      var r = an(n.before, e), o = an(n.after, e), a = r > 0, s = o < 0, i = ji(n.before, n.after);
      return i ? s && a : a || s;
    }
    return pE(n) ? an(e, n.after) > 0 : mE(n) ? an(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function Xl(e, t, n) {
  var r = Object.keys(t).reduce(function(a, s) {
    var i = t[s];
    return wE(e, i) && a.push(s), a;
  }, []), o = {};
  return r.forEach(function(a) {
    return o[a] = !0;
  }), n && !Wl(e, n) && (o.outside = !0), o;
}
function yE(e, t) {
  for (var n = Pt(e[0]), r = Hl(e[e.length - 1]), o, a, s = n; s <= r; ) {
    var i = Xl(s, t), l = !i.disabled && !i.hidden;
    if (!l) {
      s = yt(s, 1);
      continue;
    }
    if (i.selected)
      return s;
    i.today && !a && (a = s), o || (o = s), s = yt(s, 1);
  }
  return a || o;
}
var bE = 365;
function Jp(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, a = t.modifiers, s = t.retry, i = s === void 0 ? { count: 0, lastFocused: e } : s, l = o.weekStartsOn, u = o.fromDate, f = o.toDate, p = o.locale, g = {
    day: yt,
    week: Ai,
    month: Yt,
    year: cS,
    startOfWeek: function(w) {
      return o.ISOWeek ? tr(w) : dn(w, { locale: p, weekStartsOn: l });
    },
    endOfWeek: function(w) {
      return o.ISOWeek ? Lp(w) : Gl(w, { locale: p, weekStartsOn: l });
    }
  }, m = g[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? m = uS([u, m]) : r === "after" && f && (m = dS([f, m]));
  var v = !0;
  if (a) {
    var h = Xl(m, a);
    v = !h.disabled && !h.hidden;
  }
  return v ? m : i.count > bE ? i.lastFocused : Jp(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: a,
    retry: me(me({}, i), { count: i.count + 1 })
  });
}
var Qp = Ln(void 0);
function CE(e) {
  var t = Ao(), n = Zp(), r = nt(), o = r[0], a = r[1], s = nt(), i = s[0], l = s[1], u = yE(t.displayMonths, n), f = o ?? (i && t.isDateDisplayed(i)) ? i : u, p = function() {
    l(o), a(void 0);
  }, g = function(w) {
    a(w);
  }, m = ze(), v = function(w, x) {
    if (o) {
      var y = Jp(o, {
        moveBy: w,
        direction: x,
        context: m,
        modifiers: n
      });
      Nt(o, y) || (t.goToDate(y, o), g(y));
    }
  }, h = {
    focusedDay: o,
    focusTarget: f,
    blur: p,
    focus: g,
    focusDayAfter: function() {
      return v("day", "after");
    },
    focusDayBefore: function() {
      return v("day", "before");
    },
    focusWeekAfter: function() {
      return v("week", "after");
    },
    focusWeekBefore: function() {
      return v("week", "before");
    },
    focusMonthBefore: function() {
      return v("month", "before");
    },
    focusMonthAfter: function() {
      return v("month", "after");
    },
    focusYearBefore: function() {
      return v("year", "before");
    },
    focusYearAfter: function() {
      return v("year", "after");
    },
    focusStartOfWeek: function() {
      return v("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return v("endOfWeek", "after");
    }
  };
  return c.jsx(Qp.Provider, { value: h, children: e.children });
}
function Zl() {
  var e = Rn(Qp);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function SE(e, t) {
  var n = Zp(), r = Xl(e, n, t);
  return r;
}
var Jl = Ln(void 0);
function RE(e) {
  if (!os(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return c.jsx(Jl.Provider, { value: t, children: e.children });
  }
  return c.jsx(EE, { initialProps: e.initialProps, children: e.children });
}
function EE(e) {
  var t = e.initialProps, n = e.children, r = function(a, s, i) {
    var l, u, f;
    if ((l = t.onDayClick) === null || l === void 0 || l.call(t, a, s, i), s.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, a, s, i);
      return;
    }
    (f = t.onSelect) === null || f === void 0 || f.call(t, a, a, s, i);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return c.jsx(Jl.Provider, { value: o, children: n });
}
function em() {
  var e = Rn(Jl);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function NE(e, t) {
  var n = ze(), r = em(), o = Yl(), a = ql(), s = Zl(), i = s.focusDayAfter, l = s.focusDayBefore, u = s.focusWeekAfter, f = s.focusWeekBefore, p = s.blur, g = s.focus, m = s.focusMonthBefore, v = s.focusMonthAfter, h = s.focusYearBefore, w = s.focusYearAfter, x = s.focusStartOfWeek, y = s.focusEndOfWeek, b = function(F) {
    var L, z, oe, ae;
    os(n) ? (L = r.onDayClick) === null || L === void 0 || L.call(r, e, t, F) : Do(n) ? (z = o.onDayClick) === null || z === void 0 || z.call(o, e, t, F) : Io(n) ? (oe = a.onDayClick) === null || oe === void 0 || oe.call(a, e, t, F) : (ae = n.onDayClick) === null || ae === void 0 || ae.call(n, e, t, F);
  }, S = function(F) {
    var L;
    g(e), (L = n.onDayFocus) === null || L === void 0 || L.call(n, e, t, F);
  }, E = function(F) {
    var L;
    p(), (L = n.onDayBlur) === null || L === void 0 || L.call(n, e, t, F);
  }, R = function(F) {
    var L;
    (L = n.onDayMouseEnter) === null || L === void 0 || L.call(n, e, t, F);
  }, C = function(F) {
    var L;
    (L = n.onDayMouseLeave) === null || L === void 0 || L.call(n, e, t, F);
  }, M = function(F) {
    var L;
    (L = n.onDayPointerEnter) === null || L === void 0 || L.call(n, e, t, F);
  }, P = function(F) {
    var L;
    (L = n.onDayPointerLeave) === null || L === void 0 || L.call(n, e, t, F);
  }, j = function(F) {
    var L;
    (L = n.onDayTouchCancel) === null || L === void 0 || L.call(n, e, t, F);
  }, _ = function(F) {
    var L;
    (L = n.onDayTouchEnd) === null || L === void 0 || L.call(n, e, t, F);
  }, k = function(F) {
    var L;
    (L = n.onDayTouchMove) === null || L === void 0 || L.call(n, e, t, F);
  }, W = function(F) {
    var L;
    (L = n.onDayTouchStart) === null || L === void 0 || L.call(n, e, t, F);
  }, A = function(F) {
    var L;
    (L = n.onDayKeyUp) === null || L === void 0 || L.call(n, e, t, F);
  }, U = function(F) {
    var L;
    switch (F.key) {
      case "ArrowLeft":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? i() : l();
        break;
      case "ArrowRight":
        F.preventDefault(), F.stopPropagation(), n.dir === "rtl" ? l() : i();
        break;
      case "ArrowDown":
        F.preventDefault(), F.stopPropagation(), u();
        break;
      case "ArrowUp":
        F.preventDefault(), F.stopPropagation(), f();
        break;
      case "PageUp":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? h() : m();
        break;
      case "PageDown":
        F.preventDefault(), F.stopPropagation(), F.shiftKey ? w() : v();
        break;
      case "Home":
        F.preventDefault(), F.stopPropagation(), x();
        break;
      case "End":
        F.preventDefault(), F.stopPropagation(), y();
        break;
    }
    (L = n.onDayKeyDown) === null || L === void 0 || L.call(n, e, t, F);
  }, G = {
    onClick: b,
    onFocus: S,
    onBlur: E,
    onKeyDown: U,
    onKeyUp: A,
    onMouseEnter: R,
    onMouseLeave: C,
    onPointerEnter: M,
    onPointerLeave: P,
    onTouchCancel: j,
    onTouchEnd: _,
    onTouchMove: k,
    onTouchStart: W
  };
  return G;
}
function PE() {
  var e = ze(), t = em(), n = Yl(), r = ql(), o = os(e) ? t.selected : Do(e) ? n.selected : Io(e) ? r.selected : void 0;
  return o;
}
function _E(e) {
  return Object.values(Kt).includes(e);
}
function ME(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (_E(r)) {
      var a = e.classNames["day_".concat(r)];
      a && n.push(a);
    }
  }), n;
}
function TE(e, t) {
  var n = me({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = me(me({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function DE(e, t, n) {
  var r, o, a, s = ze(), i = Zl(), l = SE(e, t), u = NE(e, l), f = PE(), p = !!(s.onDayClick || s.mode !== "default");
  ct(function() {
    var R;
    l.outside || i.focusedDay && p && Nt(i.focusedDay, e) && ((R = n.current) === null || R === void 0 || R.focus());
  }, [
    i.focusedDay,
    e,
    n,
    p,
    l.outside
  ]);
  var g = ME(s, l).join(" "), m = TE(s, l), v = !!(l.outside && !s.showOutsideDays || l.hidden), h = (a = (o = s.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : JR, w = c.jsx(h, { date: e, displayMonth: t, activeModifiers: l }), x = {
    style: m,
    className: g,
    children: w,
    role: "gridcell"
  }, y = i.focusTarget && Nt(i.focusTarget, e) && !l.outside, b = i.focusedDay && Nt(i.focusedDay, e), S = me(me(me({}, x), (r = { disabled: l.disabled, role: "gridcell" }, r["aria-selected"] = l.selected, r.tabIndex = b || y ? 0 : -1, r)), u), E = {
    isButton: p,
    isHidden: v,
    activeModifiers: l,
    selectedDays: f,
    buttonProps: S,
    divProps: x
  };
  return E;
}
function IE(e) {
  var t = lt(null), n = DE(e.date, e.displayMonth, t);
  return n.isHidden ? c.jsx("div", { role: "gridcell" }) : n.isButton ? c.jsx(Pa, me({ name: "day", ref: t }, n.buttonProps)) : c.jsx("div", me({}, n.divProps));
}
function AE(e) {
  var t = e.number, n = e.dates, r = ze(), o = r.onWeekNumberClick, a = r.styles, s = r.classNames, i = r.locale, l = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, f = u(Number(t), { locale: i });
  if (!o)
    return c.jsx("span", { className: s.weeknumber, style: a.weeknumber, children: f });
  var p = l(Number(t), { locale: i }), g = function(m) {
    o(t, n, m);
  };
  return c.jsx(Pa, { name: "week-number", "aria-label": p, className: s.weeknumber, style: a.weeknumber, onClick: g, children: f });
}
function jE(e) {
  var t, n, r = ze(), o = r.styles, a = r.classNames, s = r.showWeekNumber, i = r.components, l = (t = i == null ? void 0 : i.Day) !== null && t !== void 0 ? t : IE, u = (n = i == null ? void 0 : i.WeekNumber) !== null && n !== void 0 ? n : AE, f;
  return s && (f = c.jsx("td", { className: a.cell, style: o.cell, children: c.jsx(u, { number: e.weekNumber, dates: e.dates }) })), c.jsxs("tr", { className: a.row, style: o.row, children: [f, e.dates.map(function(p) {
    return c.jsx("td", { className: a.cell, style: o.cell, role: "presentation", children: c.jsx(l, { displayMonth: e.displayMonth, date: p }) }, uR(p));
  })] });
}
function ed(e, t, n) {
  for (var r = n != null && n.ISOWeek ? Lp(t) : Gl(t, n), o = n != null && n.ISOWeek ? tr(e) : dn(e, n), a = an(r, o), s = [], i = 0; i <= a; i++)
    s.push(yt(o, i));
  var l = s.reduce(function(u, f) {
    var p = n != null && n.ISOWeek ? zp(f) : Bp(f, n), g = u.find(function(m) {
      return m.weekNumber === p;
    });
    return g ? (g.dates.push(f), u) : (u.push({
      weekNumber: p,
      dates: [f]
    }), u);
  }, []);
  return l;
}
function kE(e, t) {
  var n = ed(Pt(e), Hl(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = fR(e, t);
    if (r < 6) {
      var o = n[n.length - 1], a = o.dates[o.dates.length - 1], s = Ai(a, 6 - r), i = ed(Ai(a, 1), s, t);
      n.push.apply(n, i);
    }
  }
  return n;
}
function OE(e) {
  var t, n, r, o = ze(), a = o.locale, s = o.classNames, i = o.styles, l = o.hideHead, u = o.fixedWeeks, f = o.components, p = o.weekStartsOn, g = o.firstWeekContainsDate, m = o.ISOWeek, v = kE(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: m,
    locale: a,
    weekStartsOn: p,
    firstWeekContainsDate: g
  }), h = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : ZR, w = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : jE, x = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : KR;
  return c.jsxs("table", { id: e.id, className: s.table, style: i.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!l && c.jsx(h, {}), c.jsx("tbody", { className: s.tbody, style: i.tbody, children: v.map(function(y) {
    return c.jsx(w, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), c.jsx(x, { displayMonth: e.displayMonth })] });
}
function $E() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var LE = $E() ? Ua : ct, ei = !1, FE = 0;
function td() {
  return "react-day-picker-".concat(++FE);
}
function zE(e) {
  var t, n = e ?? (ei ? td() : null), r = nt(n), o = r[0], a = r[1];
  return LE(function() {
    o === null && a(td());
  }, []), ct(function() {
    ei === !1 && (ei = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function VE(e) {
  var t, n, r = ze(), o = r.dir, a = r.classNames, s = r.styles, i = r.components, l = Ao().displayMonths, u = zE(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, p = [a.month], g = s.month, m = e.displayIndex === 0, v = e.displayIndex === l.length - 1, h = !m && !v;
  o === "rtl" && (t = [m, v], v = t[0], m = t[1]), m && (p.push(a.caption_start), g = me(me({}, g), s.caption_start)), v && (p.push(a.caption_end), g = me(me({}, g), s.caption_end)), h && (p.push(a.caption_between), g = me(me({}, g), s.caption_between));
  var w = (n = i == null ? void 0 : i.Caption) !== null && n !== void 0 ? n : YR;
  return c.jsxs("div", { className: p.join(" "), style: g, children: [c.jsx(w, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), c.jsx(OE, { id: f, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function BE(e) {
  var t = ze(), n = t.classNames, r = t.styles;
  return c.jsx("div", { className: n.months, style: r.months, children: e.children });
}
function HE(e) {
  var t, n, r = e.initialProps, o = ze(), a = Zl(), s = Ao(), i = nt(!1), l = i[0], u = i[1];
  ct(function() {
    o.initialFocus && a.focusTarget && (l || (a.focus(a.focusTarget), u(!0)));
  }, [
    o.initialFocus,
    l,
    a.focus,
    a.focusTarget,
    a
  ]);
  var f = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
  var p = me(me({}, o.styles.root), o.style), g = Object.keys(r).filter(function(v) {
    return v.startsWith("data-");
  }).reduce(function(v, h) {
    var w;
    return me(me({}, v), (w = {}, w[h] = r[h], w));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : BE;
  return c.jsx("div", me({ className: f.join(" "), style: p, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, g, { children: c.jsx(m, { children: s.displayMonths.map(function(v, h) {
    return c.jsx(VE, { displayIndex: h, displayMonth: v }, h);
  }) }) }));
}
function GE(e) {
  var t = e.children, n = mR(e, ["children"]);
  return c.jsx(AR, { initialProps: n, children: c.jsx(HR, { children: c.jsx(RE, { initialProps: n, children: c.jsx(QR, { initialProps: n, children: c.jsx(nE, { initialProps: n, children: c.jsx(uE, { children: c.jsx(CE, { children: t }) }) }) }) }) }) });
}
function WE(e) {
  return c.jsx(GE, me({}, e, { children: c.jsx(HE, { initialProps: e }) }));
}
function ki({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ c.jsx(
    WE,
    {
      showOutsideDays: n,
      className: I("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: I(
          Mr({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-slate-500 rounded-md w-9 font-normal text-[0.8rem]  ",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-slate-100/50 [&:has([aria-selected])]:bg-slate-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20    ",
        day: I(
          Mr({ variant: "secondary" }),
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
        IconLeft: () => /* @__PURE__ */ c.jsx(Pf, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ c.jsx(Za, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
ki.displayName = "Calendar";
const UE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: I(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm      ",
      e
    ),
    ...t
  }
));
UE.displayName = "Card";
const YE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: I("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
YE.displayName = "CardHeader";
const KE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "h3",
  {
    ref: n,
    className: I(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
KE.displayName = "CardTitle";
const qE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "p",
  {
    ref: n,
    className: I("text-sm text-slate-500  ", e),
    ...t
  }
));
qE.displayName = "CardDescription";
const XE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: I("p-6 pt-0", e), ...t }));
XE.displayName = "CardContent";
const ZE = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "div",
  {
    ref: n,
    className: I("flex items-center p-6 pt-0", e),
    ...t
  }
));
ZE.displayName = "CardFooter";
function JE(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function nd(e) {
  return JE(e) || Array.isArray(e);
}
function QE() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ql(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})), a = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== a ? !1 : n.every((s) => {
    const i = e[s], l = t[s];
    return typeof i == "function" ? `${i}` == `${l}` : !nd(i) || !nd(l) ? i === l : Ql(i, l);
  });
}
function rd(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function eN(e, t) {
  if (e.length !== t.length) return !1;
  const n = rd(e), r = rd(t);
  return n.every((o, a) => {
    const s = r[a];
    return Ql(o, s);
  });
}
function ec(e) {
  return typeof e == "number";
}
function Oi(e) {
  return typeof e == "string";
}
function as(e) {
  return typeof e == "boolean";
}
function od(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Xe(e) {
  return Math.abs(e);
}
function tc(e) {
  return Math.sign(e);
}
function co(e, t) {
  return Xe(e - t);
}
function tN(e, t) {
  if (e === 0 || t === 0 || Xe(e) <= Xe(t)) return 0;
  const n = co(Xe(e), Xe(t));
  return Xe(n / e);
}
function nN(e) {
  return Math.round(e * 100) / 100;
}
function mo(e) {
  return go(e).map(Number);
}
function Gt(e) {
  return e[jo(e)];
}
function jo(e) {
  return Math.max(0, e.length - 1);
}
function nc(e, t) {
  return t === jo(e);
}
function ad(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function go(e) {
  return Object.keys(e);
}
function tm(e, t) {
  return [e, t].reduce((n, r) => (go(r).forEach((o) => {
    const a = n[o], s = r[o], i = od(a) && od(s);
    n[o] = i ? tm(a, s) : s;
  }), n), {});
}
function $i(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function rN(e, t) {
  const n = {
    start: r,
    center: o,
    end: a
  };
  function r() {
    return 0;
  }
  function o(l) {
    return a(l) / 2;
  }
  function a(l) {
    return t - l;
  }
  function s(l, u) {
    return Oi(e) ? n[e](l) : e(t, l, u);
  }
  return {
    measure: s
  };
}
function ho() {
  let e = [];
  function t(o, a, s, i = {
    passive: !0
  }) {
    let l;
    if ("addEventListener" in o)
      o.addEventListener(a, s, i), l = () => o.removeEventListener(a, s, i);
    else {
      const u = o;
      u.addListener(s), l = () => u.removeListener(s);
    }
    return e.push(l), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function oN(e, t, n, r) {
  const o = ho(), a = 1e3 / 60;
  let s = null, i = 0, l = 0;
  function u() {
    o.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function f() {
    m(), o.clear();
  }
  function p(w) {
    if (!l) return;
    s || (s = w, n(), n());
    const x = w - s;
    for (s = w, i += x; i >= a; )
      n(), i -= a;
    const y = i / a;
    r(y), l && (l = t.requestAnimationFrame(p));
  }
  function g() {
    l || (l = t.requestAnimationFrame(p));
  }
  function m() {
    t.cancelAnimationFrame(l), s = null, i = 0, l = 0;
  }
  function v() {
    s = null, i = 0;
  }
  return {
    init: u,
    destroy: f,
    start: g,
    stop: m,
    update: n,
    render: r
  };
}
function aN(e, t) {
  const n = t === "rtl", r = e === "y", o = r ? "y" : "x", a = r ? "x" : "y", s = !r && n ? -1 : 1, i = f(), l = p();
  function u(v) {
    const {
      height: h,
      width: w
    } = v;
    return r ? h : w;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function p() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function g(v) {
    return v * s;
  }
  return {
    scroll: o,
    cross: a,
    startEdge: i,
    endEdge: l,
    measureSize: u,
    direction: g
  };
}
function nr(e = 0, t = 0) {
  const n = Xe(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function a(u) {
    return r(u) || o(u);
  }
  function s(u) {
    return a(u) ? r(u) ? e : t : u;
  }
  function i(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: s,
    reachedAny: a,
    reachedMax: o,
    reachedMin: r,
    removeOffset: i
  };
}
function nm(e, t, n) {
  const {
    constrain: r
  } = nr(0, e), o = e + 1;
  let a = s(t);
  function s(g) {
    return n ? Xe((o + g) % o) : r(g);
  }
  function i() {
    return a;
  }
  function l(g) {
    return a = s(g), p;
  }
  function u(g) {
    return f().set(i() + g);
  }
  function f() {
    return nm(e, i(), n);
  }
  const p = {
    get: i,
    set: l,
    add: u,
    clone: f
  };
  return p;
}
function sN(e, t, n, r, o, a, s, i, l, u, f, p, g, m, v, h, w, x, y) {
  const {
    cross: b,
    direction: S
  } = e, E = ["INPUT", "SELECT", "TEXTAREA"], R = {
    passive: !1
  }, C = ho(), M = ho(), P = nr(50, 225).constrain(m.measure(20)), j = {
    mouse: 300,
    touch: 400
  }, _ = {
    mouse: 500,
    touch: 600
  }, k = v ? 43 : 25;
  let W = !1, A = 0, U = 0, G = !1, F = !1, L = !1, z = !1;
  function oe(X) {
    if (!y) return;
    function K(re) {
      (as(y) || y(X, re)) && q(re);
    }
    const ee = t;
    C.add(ee, "dragstart", (re) => re.preventDefault(), R).add(ee, "touchmove", () => {
    }, R).add(ee, "touchend", () => {
    }).add(ee, "touchstart", K).add(ee, "mousedown", K).add(ee, "touchcancel", Y).add(ee, "contextmenu", Y).add(ee, "click", J, !0);
  }
  function ae() {
    C.clear(), M.clear();
  }
  function $() {
    const X = z ? n : t;
    M.add(X, "touchmove", T, R).add(X, "touchend", Y).add(X, "mousemove", T, R).add(X, "mouseup", Y);
  }
  function O(X) {
    const K = X.nodeName || "";
    return E.includes(K);
  }
  function V() {
    return (v ? _ : j)[z ? "mouse" : "touch"];
  }
  function B(X, K) {
    const ee = p.add(tc(X) * -1), re = f.byDistance(X, !v).distance;
    return v || Xe(X) < P ? re : w && K ? re * 0.5 : f.byIndex(ee.get(), 0).distance;
  }
  function q(X) {
    const K = $i(X, r);
    z = K, L = v && K && !X.buttons && W, W = co(o.get(), s.get()) >= 2, !(K && X.button !== 0) && (O(X.target) || (G = !0, a.pointerDown(X), u.useFriction(0).useDuration(0), o.set(s), $(), A = a.readPoint(X), U = a.readPoint(X, b), g.emit("pointerDown")));
  }
  function T(X) {
    if (!$i(X, r) && X.touches.length >= 2) return Y(X);
    const ee = a.readPoint(X), re = a.readPoint(X, b), pe = co(ee, A), ye = co(re, U);
    if (!F && !z && (!X.cancelable || (F = pe > ye, !F)))
      return Y(X);
    const ge = a.pointerMove(X);
    pe > h && (L = !0), u.useFriction(0.3).useDuration(0.75), i.start(), o.add(S(ge)), X.preventDefault();
  }
  function Y(X) {
    const ee = f.byDistance(0, !1).index !== p.get(), re = a.pointerUp(X) * V(), pe = B(S(re), ee), ye = tN(re, pe), ge = k - 10 * ye, ue = x + ye / 50;
    F = !1, G = !1, M.clear(), u.useDuration(ge).useFriction(ue), l.distance(pe, !v), z = !1, g.emit("pointerUp");
  }
  function J(X) {
    L && (X.stopPropagation(), X.preventDefault(), L = !1);
  }
  function te() {
    return G;
  }
  return {
    init: oe,
    destroy: ae,
    pointerDown: te
  };
}
function iN(e, t) {
  let r, o;
  function a(p) {
    return p.timeStamp;
  }
  function s(p, g) {
    const v = `client${(g || e.scroll) === "x" ? "X" : "Y"}`;
    return ($i(p, t) ? p : p.touches[0])[v];
  }
  function i(p) {
    return r = p, o = p, s(p);
  }
  function l(p) {
    const g = s(p) - s(o), m = a(p) - a(r) > 170;
    return o = p, m && (r = p), g;
  }
  function u(p) {
    if (!r || !o) return 0;
    const g = s(o) - s(r), m = a(p) - a(r), v = a(p) - a(o) > 170, h = g / m;
    return m && !v && Xe(h) > 0.1 ? h : 0;
  }
  return {
    pointerDown: i,
    pointerMove: l,
    pointerUp: u,
    readPoint: s
  };
}
function lN() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: o,
      offsetWidth: a,
      offsetHeight: s
    } = n;
    return {
      top: r,
      right: o + a,
      bottom: r + s,
      left: o,
      width: a,
      height: s
    };
  }
  return {
    measure: e
  };
}
function cN(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function uN(e, t, n, r, o, a, s) {
  const i = [e].concat(r);
  let l, u, f = [], p = !1;
  function g(w) {
    return o.measureSize(s.measure(w));
  }
  function m(w) {
    if (!a) return;
    u = g(e), f = r.map(g);
    function x(y) {
      for (const b of y) {
        if (p) return;
        const S = b.target === e, E = r.indexOf(b.target), R = S ? u : f[E], C = g(S ? e : r[E]);
        if (Xe(C - R) >= 0.5) {
          w.reInit(), t.emit("resize");
          break;
        }
      }
    }
    l = new ResizeObserver((y) => {
      (as(a) || a(w, y)) && x(y);
    }), n.requestAnimationFrame(() => {
      i.forEach((y) => l.observe(y));
    });
  }
  function v() {
    p = !0, l && l.disconnect();
  }
  return {
    init: m,
    destroy: v
  };
}
function dN(e, t, n, r, o, a) {
  let s = 0, i = 0, l = o, u = a, f = e.get(), p = 0;
  function g() {
    const R = r.get() - e.get(), C = !l;
    let M = 0;
    return C ? (s = 0, n.set(r), e.set(r), M = R) : (n.set(e), s += R / l, s *= u, f += s, e.add(s), M = f - p), i = tc(M), p = f, E;
  }
  function m() {
    const R = r.get() - t.get();
    return Xe(R) < 1e-3;
  }
  function v() {
    return l;
  }
  function h() {
    return i;
  }
  function w() {
    return s;
  }
  function x() {
    return b(o);
  }
  function y() {
    return S(a);
  }
  function b(R) {
    return l = R, E;
  }
  function S(R) {
    return u = R, E;
  }
  const E = {
    direction: h,
    duration: v,
    velocity: w,
    seek: g,
    settled: m,
    useBaseFriction: y,
    useBaseDuration: x,
    useFriction: S,
    useDuration: b
  };
  return E;
}
function fN(e, t, n, r, o) {
  const a = o.measure(10), s = o.measure(50), i = nr(0.1, 0.99);
  let l = !1;
  function u() {
    return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(m) {
    if (!u()) return;
    const v = e.reachedMin(t.get()) ? "min" : "max", h = Xe(e[v] - t.get()), w = n.get() - t.get(), x = i.constrain(h / s);
    n.subtract(w * x), !m && Xe(w) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function p(m) {
    l = !m;
  }
  return {
    shouldConstrain: u,
    constrain: f,
    toggleActive: p
  };
}
function pN(e, t, n, r, o) {
  const a = nr(-t + e, 0), s = p(), i = f(), l = g();
  function u(v, h) {
    return co(v, h) <= 1;
  }
  function f() {
    const v = s[0], h = Gt(s), w = s.lastIndexOf(v), x = s.indexOf(h) + 1;
    return nr(w, x);
  }
  function p() {
    return n.map((v, h) => {
      const {
        min: w,
        max: x
      } = a, y = a.constrain(v), b = !h, S = nc(n, h);
      return b ? x : S || u(w, y) ? w : u(x, y) ? x : y;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function g() {
    if (t <= e + o) return [a.max];
    if (r === "keepSnaps") return s;
    const {
      min: v,
      max: h
    } = i;
    return s.slice(v, h);
  }
  return {
    snapsContained: l,
    scrollContainLimit: i
  };
}
function mN(e, t, n) {
  const r = t[0], o = n ? r - e : Gt(t);
  return {
    limit: nr(o, r)
  };
}
function gN(e, t, n, r) {
  const a = t.min + 0.1, s = t.max + 0.1, {
    reachedMin: i,
    reachedMax: l
  } = nr(a, s);
  function u(g) {
    return g === 1 ? l(n.get()) : g === -1 ? i(n.get()) : !1;
  }
  function f(g) {
    if (!u(g)) return;
    const m = e * (g * -1);
    r.forEach((v) => v.add(m));
  }
  return {
    loop: f
  };
}
function hN(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(a) {
    const s = a - t;
    return n ? s / -n : 0;
  }
  return {
    get: r
  };
}
function vN(e, t, n, r, o) {
  const {
    startEdge: a,
    endEdge: s
  } = e, {
    groupSlides: i
  } = o, l = p().map(t.measure), u = g(), f = m();
  function p() {
    return i(r).map((h) => Gt(h)[s] - h[0][a]).map(Xe);
  }
  function g() {
    return r.map((h) => n[a] - h[a]).map((h) => -Xe(h));
  }
  function m() {
    return i(u).map((h) => h[0]).map((h, w) => h + l[w]);
  }
  return {
    snaps: u,
    snapsAligned: f
  };
}
function xN(e, t, n, r, o, a) {
  const {
    groupSlides: s
  } = o, {
    min: i,
    max: l
  } = r, u = f();
  function f() {
    const g = s(a), m = !e || t === "keepSnaps";
    return n.length === 1 ? [a] : m ? g : g.slice(i, l).map((v, h, w) => {
      const x = !h, y = nc(w, h);
      if (x) {
        const b = Gt(w[0]) + 1;
        return ad(b);
      }
      if (y) {
        const b = jo(a) - Gt(w)[0] + 1;
        return ad(b, Gt(w)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: u
  };
}
function wN(e, t, n, r, o) {
  const {
    reachedAny: a,
    removeOffset: s,
    constrain: i
  } = r;
  function l(v) {
    return v.concat().sort((h, w) => Xe(h) - Xe(w))[0];
  }
  function u(v) {
    const h = e ? s(v) : i(v), w = t.map((y, b) => ({
      diff: f(y - h, 0),
      index: b
    })).sort((y, b) => Xe(y.diff) - Xe(b.diff)), {
      index: x
    } = w[0];
    return {
      index: x,
      distance: h
    };
  }
  function f(v, h) {
    const w = [v, v + n, v - n];
    if (!e) return v;
    if (!h) return l(w);
    const x = w.filter((y) => tc(y) === h);
    return x.length ? l(x) : Gt(w) - n;
  }
  function p(v, h) {
    const w = t[v] - o.get(), x = f(w, h);
    return {
      index: v,
      distance: x
    };
  }
  function g(v, h) {
    const w = o.get() + v, {
      index: x,
      distance: y
    } = u(w), b = !e && a(w);
    if (!h || b) return {
      index: x,
      distance: v
    };
    const S = t[x] - y, E = v + f(S, 0);
    return {
      index: x,
      distance: E
    };
  }
  return {
    byDistance: g,
    byIndex: p,
    shortcut: f
  };
}
function yN(e, t, n, r, o, a, s) {
  function i(p) {
    const g = p.distance, m = p.index !== t.get();
    a.add(g), g && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), m && (n.set(t.get()), t.set(p.index), s.emit("select"));
  }
  function l(p, g) {
    const m = o.byDistance(p, g);
    i(m);
  }
  function u(p, g) {
    const m = t.clone().set(p), v = o.byIndex(m.get(), g);
    i(v);
  }
  return {
    distance: l,
    index: u
  };
}
function bN(e, t, n, r, o, a, s, i) {
  const l = {
    passive: !0,
    capture: !0
  };
  let u = 0;
  function f(m) {
    if (!i) return;
    function v(h) {
      if ((/* @__PURE__ */ new Date()).getTime() - u > 10) return;
      s.emit("slideFocusStart"), e.scrollLeft = 0;
      const y = n.findIndex((b) => b.includes(h));
      ec(y) && (o.useDuration(0), r.index(y, 0), s.emit("slideFocus"));
    }
    a.add(document, "keydown", p, !1), t.forEach((h, w) => {
      a.add(h, "focus", (x) => {
        (as(i) || i(m, x)) && v(w);
      }, l);
    });
  }
  function p(m) {
    m.code === "Tab" && (u = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: f
  };
}
function oo(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(l) {
    t = s(l);
  }
  function o(l) {
    t += s(l);
  }
  function a(l) {
    t -= s(l);
  }
  function s(l) {
    return ec(l) ? l : l.get();
  }
  return {
    get: n,
    set: r,
    add: o,
    subtract: a
  };
}
function rm(e, t) {
  const n = e.scroll === "x" ? s : i, r = t.style;
  let o = null, a = !1;
  function s(g) {
    return `translate3d(${g}px,0px,0px)`;
  }
  function i(g) {
    return `translate3d(0px,${g}px,0px)`;
  }
  function l(g) {
    if (a) return;
    const m = nN(e.direction(g));
    m !== o && (r.transform = n(m), o = m);
  }
  function u(g) {
    a = !g;
  }
  function f() {
    a || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: f,
    to: l,
    toggleActive: u
  };
}
function CN(e, t, n, r, o, a, s, i, l) {
  const f = mo(o), p = mo(o).reverse(), g = x().concat(y());
  function m(C, M) {
    return C.reduce((P, j) => P - o[j], M);
  }
  function v(C, M) {
    return C.reduce((P, j) => m(P, M) > 0 ? P.concat([j]) : P, []);
  }
  function h(C) {
    return a.map((M, P) => ({
      start: M - r[P] + 0.5 + C,
      end: M + t - 0.5 + C
    }));
  }
  function w(C, M, P) {
    const j = h(M);
    return C.map((_) => {
      const k = P ? 0 : -n, W = P ? n : 0, A = P ? "end" : "start", U = j[_][A];
      return {
        index: _,
        loopPoint: U,
        slideLocation: oo(-1),
        translate: rm(e, l[_]),
        target: () => i.get() > U ? k : W
      };
    });
  }
  function x() {
    const C = s[0], M = v(p, C);
    return w(M, n, !1);
  }
  function y() {
    const C = t - s[0] - 1, M = v(f, C);
    return w(M, -n, !0);
  }
  function b() {
    return g.every(({
      index: C
    }) => {
      const M = f.filter((P) => P !== C);
      return m(M, t) <= 0.1;
    });
  }
  function S() {
    g.forEach((C) => {
      const {
        target: M,
        translate: P,
        slideLocation: j
      } = C, _ = M();
      _ !== j.get() && (P.to(_), j.set(_));
    });
  }
  function E() {
    g.forEach((C) => C.translate.clear());
  }
  return {
    canLoop: b,
    clear: E,
    loop: S,
    loopPoints: g
  };
}
function SN(e, t, n) {
  let r, o = !1;
  function a(l) {
    if (!n) return;
    function u(f) {
      for (const p of f)
        if (p.type === "childList") {
          l.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      o || (as(n) || n(l, f)) && u(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function s() {
    r && r.disconnect(), o = !0;
  }
  return {
    init: a,
    destroy: s
  };
}
function RN(e, t, n, r) {
  const o = {};
  let a = null, s = null, i, l = !1;
  function u() {
    i = new IntersectionObserver((v) => {
      l || (v.forEach((h) => {
        const w = t.indexOf(h.target);
        o[w] = h;
      }), a = null, s = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((v) => i.observe(v));
  }
  function f() {
    i && i.disconnect(), l = !0;
  }
  function p(v) {
    return go(o).reduce((h, w) => {
      const x = parseInt(w), {
        isIntersecting: y
      } = o[x];
      return (v && y || !v && !y) && h.push(x), h;
    }, []);
  }
  function g(v = !0) {
    if (v && a) return a;
    if (!v && s) return s;
    const h = p(v);
    return v && (a = h), v || (s = h), h;
  }
  return {
    init: u,
    destroy: f,
    get: g
  };
}
function EN(e, t, n, r, o, a) {
  const {
    measureSize: s,
    startEdge: i,
    endEdge: l
  } = e, u = n[0] && o, f = v(), p = h(), g = n.map(s), m = w();
  function v() {
    if (!u) return 0;
    const y = n[0];
    return Xe(t[i] - y[i]);
  }
  function h() {
    if (!u) return 0;
    const y = a.getComputedStyle(Gt(r));
    return parseFloat(y.getPropertyValue(`margin-${l}`));
  }
  function w() {
    return n.map((y, b, S) => {
      const E = !b, R = nc(S, b);
      return E ? g[b] + f : R ? g[b] + p : S[b + 1][i] - y[i];
    }).map(Xe);
  }
  return {
    slideSizes: g,
    slideSizesWithGaps: m,
    startGap: f,
    endGap: p
  };
}
function NN(e, t, n, r, o, a, s, i, l) {
  const {
    startEdge: u,
    endEdge: f,
    direction: p
  } = e, g = ec(n);
  function m(x, y) {
    return mo(x).filter((b) => b % y === 0).map((b) => x.slice(b, b + y));
  }
  function v(x) {
    return x.length ? mo(x).reduce((y, b, S) => {
      const E = Gt(y) || 0, R = E === 0, C = b === jo(x), M = o[u] - a[E][u], P = o[u] - a[b][f], j = !r && R ? p(s) : 0, _ = !r && C ? p(i) : 0, k = Xe(P - _ - (M + j));
      return S && k > t + l && y.push(b), C && y.push(x.length), y;
    }, []).map((y, b, S) => {
      const E = Math.max(S[b - 1] || 0);
      return x.slice(E, y);
    }) : [];
  }
  function h(x) {
    return g ? m(x, n) : v(x);
  }
  return {
    groupSlides: h
  };
}
function PN(e, t, n, r, o, a, s) {
  const {
    align: i,
    axis: l,
    direction: u,
    startIndex: f,
    loop: p,
    duration: g,
    dragFree: m,
    dragThreshold: v,
    inViewThreshold: h,
    slidesToScroll: w,
    skipSnaps: x,
    containScroll: y,
    watchResize: b,
    watchSlides: S,
    watchDrag: E,
    watchFocus: R
  } = a, C = 2, M = lN(), P = M.measure(t), j = n.map(M.measure), _ = aN(l, u), k = _.measureSize(P), W = cN(k), A = rN(i, k), U = !p && !!y, G = p || !!y, {
    slideSizes: F,
    slideSizesWithGaps: L,
    startGap: z,
    endGap: oe
  } = EN(_, P, j, n, G, o), ae = NN(_, k, w, p, P, j, z, oe, C), {
    snaps: $,
    snapsAligned: O
  } = vN(_, A, P, j, ae), V = -Gt($) + Gt(L), {
    snapsContained: B,
    scrollContainLimit: q
  } = pN(k, V, O, y, C), T = U ? B : O, {
    limit: Y
  } = mN(V, T, p), J = nm(jo(T), f, p), te = J.clone(), ne = mo(n), X = ({
    dragHandler: it,
    scrollBody: ht,
    scrollBounds: Mt,
    options: {
      loop: et
    }
  }) => {
    et || Mt.constrain(it.pointerDown()), ht.seek();
  }, K = ({
    scrollBody: it,
    translate: ht,
    location: Mt,
    offsetLocation: et,
    previousLocation: dt,
    scrollLooper: nn,
    slideLooper: $t,
    dragHandler: Un,
    animation: ce,
    eventHandler: Ce,
    scrollBounds: Se,
    options: {
      loop: Pe
    }
  }, be) => {
    const je = it.settled(), Je = !Se.shouldConstrain(), ie = Pe ? je : je && Je, ve = ie && !Un.pointerDown();
    ve && ce.stop();
    const Re = Mt.get() * be + dt.get() * (1 - be);
    et.set(Re), Pe && (nn.loop(it.direction()), $t.loop()), ht.to(et.get()), ve && Ce.emit("settle"), ie || Ce.emit("scroll");
  }, ee = oN(r, o, () => X(Ct), (it) => K(Ct, it)), re = 0.68, pe = T[J.get()], ye = oo(pe), ge = oo(pe), ue = oo(pe), Me = oo(pe), Le = dN(ye, ue, ge, Me, g, re), Te = wN(p, T, V, Y, Me), Ve = yN(ee, J, te, Le, Te, Me, s), rt = hN(Y), st = ho(), Ae = RN(t, n, s, h), {
    slideRegistry: Be
  } = xN(U, y, T, q, ae, ne), tn = bN(e, n, Be, Ve, Le, st, s, R), Ct = {
    ownerDocument: r,
    ownerWindow: o,
    eventHandler: s,
    containerRect: P,
    slideRects: j,
    animation: ee,
    axis: _,
    dragHandler: sN(_, e, r, o, Me, iN(_, o), ye, ee, Ve, Le, Te, J, s, W, m, v, x, re, E),
    eventStore: st,
    percentOfView: W,
    index: J,
    indexPrevious: te,
    limit: Y,
    location: ye,
    offsetLocation: ue,
    previousLocation: ge,
    options: a,
    resizeHandler: uN(t, s, o, n, _, b, M),
    scrollBody: Le,
    scrollBounds: fN(Y, ue, Me, Le, W),
    scrollLooper: gN(V, Y, ue, [ye, ue, ge, Me]),
    scrollProgress: rt,
    scrollSnapList: T.map(rt.get),
    scrollSnaps: T,
    scrollTarget: Te,
    scrollTo: Ve,
    slideLooper: CN(_, k, V, F, L, $, T, ue, n),
    slideFocus: tn,
    slidesHandler: SN(t, s, S),
    slidesInView: Ae,
    slideIndexes: ne,
    slideRegistry: Be,
    slidesToScroll: ae,
    target: Me,
    translate: rm(_, t)
  };
  return Ct;
}
function _N() {
  let e = {}, t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((f) => f(t, u)), l;
  }
  function a(u, f) {
    return e[u] = r(u).concat([f]), l;
  }
  function s(u, f) {
    return e[u] = r(u).filter((p) => p !== f), l;
  }
  function i() {
    e = {};
  }
  const l = {
    init: n,
    emit: o,
    off: s,
    on: a,
    clear: i
  };
  return l;
}
const MN = {
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
  watchSlides: !0,
  watchFocus: !0
};
function TN(e) {
  function t(a, s) {
    return tm(a, s || {});
  }
  function n(a) {
    const s = a.breakpoints || {}, i = go(s).filter((l) => e.matchMedia(l).matches).map((l) => s[l]).reduce((l, u) => t(l, u), {});
    return t(a, i);
  }
  function r(a) {
    return a.map((s) => go(s.breakpoints || {})).reduce((s, i) => s.concat(i), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function DN(e) {
  let t = [];
  function n(a, s) {
    return t = s.filter(({
      options: i
    }) => e.optionsAtMedia(i).active !== !1), t.forEach((i) => i.init(a, e)), s.reduce((i, l) => Object.assign(i, {
      [l.name]: l
    }), {});
  }
  function r() {
    t = t.filter((a) => a.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function _a(e, t, n) {
  const r = e.ownerDocument, o = r.defaultView, a = TN(o), s = DN(a), i = ho(), l = _N(), {
    mergeOptions: u,
    optionsAtMedia: f,
    optionsMediaQueries: p
  } = a, {
    on: g,
    off: m,
    emit: v
  } = l, h = _;
  let w = !1, x, y = u(MN, _a.globalOptions), b = u(y), S = [], E, R, C;
  function M() {
    const {
      container: ne,
      slides: X
    } = b;
    R = (Oi(ne) ? e.querySelector(ne) : ne) || e.children[0];
    const ee = Oi(X) ? R.querySelectorAll(X) : X;
    C = [].slice.call(ee || R.children);
  }
  function P(ne) {
    const X = PN(e, R, C, r, o, ne, l);
    if (ne.loop && !X.slideLooper.canLoop()) {
      const K = Object.assign({}, ne, {
        loop: !1
      });
      return P(K);
    }
    return X;
  }
  function j(ne, X) {
    w || (y = u(y, ne), b = f(y), S = X || S, M(), x = P(b), p([y, ...S.map(({
      options: K
    }) => K)]).forEach((K) => i.add(K, "change", _)), b.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(te), x.eventHandler.init(te), x.resizeHandler.init(te), x.slidesHandler.init(te), x.options.loop && x.slideLooper.loop(), R.offsetParent && C.length && x.dragHandler.init(te), E = s.init(te, S)));
  }
  function _(ne, X) {
    const K = ae();
    k(), j(u({
      startIndex: K
    }, ne), X), l.emit("reInit");
  }
  function k() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), s.destroy(), i.clear();
  }
  function W() {
    w || (w = !0, i.clear(), k(), l.emit("destroy"), l.clear());
  }
  function A(ne, X, K) {
    !b.active || w || (x.scrollBody.useBaseFriction().useDuration(X === !0 ? 0 : b.duration), x.scrollTo.index(ne, K || 0));
  }
  function U(ne) {
    const X = x.index.add(1).get();
    A(X, ne, -1);
  }
  function G(ne) {
    const X = x.index.add(-1).get();
    A(X, ne, 1);
  }
  function F() {
    return x.index.add(1).get() !== ae();
  }
  function L() {
    return x.index.add(-1).get() !== ae();
  }
  function z() {
    return x.scrollSnapList;
  }
  function oe() {
    return x.scrollProgress.get(x.offsetLocation.get());
  }
  function ae() {
    return x.index.get();
  }
  function $() {
    return x.indexPrevious.get();
  }
  function O() {
    return x.slidesInView.get();
  }
  function V() {
    return x.slidesInView.get(!1);
  }
  function B() {
    return E;
  }
  function q() {
    return x;
  }
  function T() {
    return e;
  }
  function Y() {
    return R;
  }
  function J() {
    return C;
  }
  const te = {
    canScrollNext: F,
    canScrollPrev: L,
    containerNode: Y,
    internalEngine: q,
    destroy: W,
    off: m,
    on: g,
    emit: v,
    plugins: B,
    previousScrollSnap: $,
    reInit: h,
    rootNode: T,
    scrollNext: U,
    scrollPrev: G,
    scrollProgress: oe,
    scrollSnapList: z,
    scrollTo: A,
    selectedScrollSnap: ae,
    slideNodes: J,
    slidesInView: O,
    slidesNotInView: V
  };
  return j(t, n), setTimeout(() => l.emit("init"), 0), te;
}
_a.globalOptions = void 0;
function rc(e = {}, t = []) {
  const n = lt(e), r = lt(t), [o, a] = nt(), [s, i] = nt(), l = wt(() => {
    o && o.reInit(n.current, r.current);
  }, [o]);
  return ct(() => {
    Ql(n.current, e) || (n.current = e, l());
  }, [e, l]), ct(() => {
    eN(r.current, t) || (r.current = t, l());
  }, [t, l]), ct(() => {
    if (QE() && s) {
      _a.globalOptions = rc.globalOptions;
      const u = _a(s, n.current, r.current);
      return a(u), () => u.destroy();
    } else
      a(void 0);
  }, [s, a]), [i, o];
}
rc.globalOptions = void 0;
const om = d.createContext(null);
function ss() {
  const e = d.useContext(om);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const IN = d.forwardRef(
  ({
    orientation: e = "horizontal",
    opts: t,
    setApi: n,
    plugins: r,
    className: o,
    children: a,
    ...s
  }, i) => {
    const [l, u] = rc(
      {
        ...t,
        axis: e === "horizontal" ? "x" : "y"
      },
      r
    ), [f, p] = d.useState(!1), [g, m] = d.useState(!1), v = d.useCallback((y) => {
      y && (p(y.canScrollPrev()), m(y.canScrollNext()));
    }, []), h = d.useCallback(() => {
      u == null || u.scrollPrev();
    }, [u]), w = d.useCallback(() => {
      u == null || u.scrollNext();
    }, [u]), x = d.useCallback(
      (y) => {
        y.key === "ArrowLeft" ? (y.preventDefault(), h()) : y.key === "ArrowRight" && (y.preventDefault(), w());
      },
      [h, w]
    );
    return d.useEffect(() => {
      !u || !n || n(u);
    }, [u, n]), d.useEffect(() => {
      if (u)
        return v(u), u.on("reInit", v), u.on("select", v), () => {
          u == null || u.off("select", v);
        };
    }, [u, v]), /* @__PURE__ */ c.jsx(
      om.Provider,
      {
        value: {
          carouselRef: l,
          api: u,
          opts: t,
          orientation: e || ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: h,
          scrollNext: w,
          canScrollPrev: f,
          canScrollNext: g
        },
        children: /* @__PURE__ */ c.jsx(
          "div",
          {
            ref: i,
            onKeyDownCapture: x,
            className: I("relative", o),
            role: "region",
            "aria-roledescription": "carousel",
            ...s,
            children: a
          }
        )
      }
    );
  }
);
IN.displayName = "Carousel";
const AN = d.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = ss();
  return /* @__PURE__ */ c.jsx("div", { ref: r, className: "overflow-hidden", children: /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: n,
      className: I(
        "flex",
        o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        e
      ),
      ...t
    }
  ) });
});
AN.displayName = "CarouselContent";
const jN = d.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = ss();
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      ref: n,
      role: "group",
      "aria-roledescription": "slide",
      className: I(
        "min-w-0 shrink-0 grow-0 basis-full",
        r === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
});
jN.displayName = "CarouselItem";
const kN = d.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollPrev: s, canScrollPrev: i } = ss();
  return /* @__PURE__ */ c.jsxs(
    jt,
    {
      ref: o,
      variant: t,
      size: n,
      className: I(
        "absolute  h-8 w-8 rounded-full",
        a === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(Kb, { className: "h-4 w-4" }),
        /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
kN.displayName = "CarouselPrevious";
const ON = d.forwardRef(({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
  const { orientation: a, scrollNext: s, canScrollNext: i } = ss();
  return /* @__PURE__ */ c.jsxs(
    jt,
    {
      ref: o,
      variant: t,
      size: n,
      className: I(
        "absolute h-8 w-8 rounded-full",
        a === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...r,
      children: [
        /* @__PURE__ */ c.jsx(qb, { className: "h-4 w-4" }),
        /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
ON.displayName = "CarouselNext";
function zr(e) {
  const t = d.useRef({ value: e, previous: e });
  return d.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ko(e) {
  const [t, n] = d.useState(void 0);
  return Ue(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          s = u.inlineSize, i = u.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var is = "Checkbox", [$N, r5] = Fe(is), [LN, oc] = $N(is);
function FN(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: s,
    name: i,
    onCheckedChange: l,
    required: u,
    value: f = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [g, m] = Ge({
    prop: n,
    defaultProp: o ?? !1,
    onChange: l,
    caller: is
  }), [v, h] = d.useState(null), [w, x] = d.useState(null), y = d.useRef(!1), b = v ? !!s || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), S = {
    checked: g,
    disabled: a,
    setChecked: m,
    control: v,
    setControl: h,
    name: i,
    form: s,
    value: f,
    hasConsumerStoppedPropagationRef: y,
    required: u,
    defaultChecked: In(o) ? !1 : o,
    isFormControl: b,
    bubbleInput: w,
    setBubbleInput: x
  };
  return /* @__PURE__ */ c.jsx(
    LN,
    {
      scope: t,
      ...S,
      children: zN(p) ? p(S) : r
    }
  );
}
var am = "CheckboxTrigger", sm = d.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: s,
      disabled: i,
      checked: l,
      required: u,
      setControl: f,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: m,
      bubbleInput: v
    } = oc(am, e), h = le(o, f), w = d.useRef(l);
    return d.useEffect(() => {
      const x = a == null ? void 0 : a.form;
      if (x) {
        const y = () => p(w.current);
        return x.addEventListener("reset", y), () => x.removeEventListener("reset", y);
      }
    }, [a, p]), /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": In(l) ? "mixed" : l,
        "aria-required": u,
        "data-state": dm(l),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: s,
        ...r,
        ref: h,
        onKeyDown: H(t, (x) => {
          x.key === "Enter" && x.preventDefault();
        }),
        onClick: H(n, (x) => {
          p((y) => In(y) ? !0 : !y), v && m && (g.current = x.isPropagationStopped(), g.current || x.stopPropagation());
        })
      }
    );
  }
);
sm.displayName = am;
var ac = d.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: l,
      onCheckedChange: u,
      form: f,
      ...p
    } = e;
    return /* @__PURE__ */ c.jsx(
      FN,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: s,
        onCheckedChange: u,
        name: r,
        form: f,
        value: l,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
          /* @__PURE__ */ c.jsx(
            sm,
            {
              ...p,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          g && /* @__PURE__ */ c.jsx(
            um,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
ac.displayName = is;
var im = "CheckboxIndicator", lm = d.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = oc(im, n);
    return /* @__PURE__ */ c.jsx(
      Ye,
      {
        present: r || In(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            "data-state": dm(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
lm.displayName = im;
var cm = "CheckboxBubbleInput", um = d.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: s,
      required: i,
      disabled: l,
      name: u,
      value: f,
      form: p,
      bubbleInput: g,
      setBubbleInput: m
    } = oc(cm, e), v = le(n, m), h = zr(a), w = ko(r);
    d.useEffect(() => {
      const y = g;
      if (!y) return;
      const b = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(
        b,
        "checked"
      ).set, R = !o.current;
      if (h !== a && E) {
        const C = new Event("click", { bubbles: R });
        y.indeterminate = In(a), E.call(y, In(a) ? !1 : a), y.dispatchEvent(C);
      }
    }, [g, h, a, o]);
    const x = d.useRef(In(a) ? !1 : a);
    return /* @__PURE__ */ c.jsx(
      Z.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: s ?? x.current,
        required: i,
        disabled: l,
        name: u,
        value: f,
        form: p,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...w,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
um.displayName = cm;
function zN(e) {
  return typeof e == "function";
}
function In(e) {
  return e === "indeterminate";
}
function dm(e) {
  return In(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Jn = d.forwardRef(({ className: e, iconClassName: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  ac,
  {
    ref: r,
    className: I(
      "group peer h-6 w-6 shrink-0 rounded-[5px] border border-[#9B9EA3] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0073E6] data-[state=checked]:text-[#FFF] data-[state=checked]:border-none data-[state=indeterminate]:bg-[#0073E6] data-[state=indeterminate]:text-[#FFF] data-[state=indeterminate]:border-none",
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsxs(
      lm,
      {
        className: I("flex items-center justify-center text-current"),
        children: [
          /* @__PURE__ */ c.jsx(
            $r,
            {
              className: `h-5 w-5 hidden group-data-[state=checked]:block ${t}`
            }
          ),
          /* @__PURE__ */ c.jsx(
            e1,
            {
              className: `h-5 w-5 hidden group-data-[state=indeterminate]:block ${t}`
            }
          )
        ]
      }
    )
  }
));
Jn.displayName = ac.displayName;
const o5 = ff, a5 = Ml, s5 = Dl;
var sd = 1, VN = 0.9, BN = 0.8, HN = 0.17, ti = 0.1, ni = 0.999, GN = 0.9999, WN = 0.99, UN = /[\\\/_+.#"@\[\(\{&]/, YN = /[\\\/_+.#"@\[\(\{&]/g, KN = /[\s-]/, fm = /[\s-]/g;
function Li(e, t, n, r, o, a, s) {
  if (a === t.length) return o === e.length ? sd : WN;
  var i = `${o},${a}`;
  if (s[i] !== void 0) return s[i];
  for (var l = r.charAt(a), u = n.indexOf(l, o), f = 0, p, g, m, v; u >= 0; ) p = Li(e, t, n, r, u + 1, a + 1, s), p > f && (u === o ? p *= sd : UN.test(e.charAt(u - 1)) ? (p *= BN, m = e.slice(o, u - 1).match(YN), m && o > 0 && (p *= Math.pow(ni, m.length))) : KN.test(e.charAt(u - 1)) ? (p *= VN, v = e.slice(o, u - 1).match(fm), v && o > 0 && (p *= Math.pow(ni, v.length))) : (p *= HN, o > 0 && (p *= Math.pow(ni, u - o))), e.charAt(u) !== t.charAt(a) && (p *= GN)), (p < ti && n.charAt(u - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(u - 1) !== r.charAt(a)) && (g = Li(e, t, n, r, u + 1, a + 2, s), g * ti > p && (p = g * ti)), p > f && (f = p), u = n.indexOf(l, u + 1);
  return s[i] = f, f;
}
function id(e) {
  return e.toLowerCase().replace(fm, " ");
}
function qN(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Li(e, t, id(e), id(t), 0, 0, {});
}
var Qr = '[cmdk-group=""]', ri = '[cmdk-group-items=""]', XN = '[cmdk-group-heading=""]', pm = '[cmdk-item=""]', ld = `${pm}:not([aria-disabled="true"])`, Fi = "cmdk-item-select", yr = "data-value", ZN = (e, t, n) => qN(e, t, n), mm = d.createContext(void 0), Oo = () => d.useContext(mm), gm = d.createContext(void 0), sc = () => d.useContext(gm), hm = d.createContext(void 0), vm = d.forwardRef((e, t) => {
  let n = br(() => {
    var $, O;
    return { search: "", value: (O = ($ = e.value) != null ? $ : e.defaultValue) != null ? O : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = br(() => /* @__PURE__ */ new Set()), o = br(() => /* @__PURE__ */ new Map()), a = br(() => /* @__PURE__ */ new Map()), s = br(() => /* @__PURE__ */ new Set()), i = xm(e), { label: l, children: u, value: f, onValueChange: p, filter: g, shouldFilter: m, loop: v, disablePointerSelection: h = !1, vimBindings: w = !0, ...x } = e, y = $e(), b = $e(), S = $e(), E = d.useRef(null), R = iP();
  rr(() => {
    if (f !== void 0) {
      let $ = f.trim();
      n.current.value = $, C.emit();
    }
  }, [f]), rr(() => {
    R(6, W);
  }, []);
  let C = d.useMemo(() => ({ subscribe: ($) => (s.current.add($), () => s.current.delete($)), snapshot: () => n.current, setState: ($, O, V) => {
    var B, q, T, Y;
    if (!Object.is(n.current[$], O)) {
      if (n.current[$] = O, $ === "search") k(), j(), R(1, _);
      else if ($ === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let J = document.getElementById(S);
          J ? J.focus() : (B = document.getElementById(y)) == null || B.focus();
        }
        if (R(7, () => {
          var J;
          n.current.selectedItemId = (J = A()) == null ? void 0 : J.id, C.emit();
        }), V || R(5, W), ((q = i.current) == null ? void 0 : q.value) !== void 0) {
          let J = O ?? "";
          (Y = (T = i.current).onValueChange) == null || Y.call(T, J);
          return;
        }
      }
      C.emit();
    }
  }, emit: () => {
    s.current.forEach(($) => $());
  } }), []), M = d.useMemo(() => ({ value: ($, O, V) => {
    var B;
    O !== ((B = a.current.get($)) == null ? void 0 : B.value) && (a.current.set($, { value: O, keywords: V }), n.current.filtered.items.set($, P(O, V)), R(2, () => {
      j(), C.emit();
    }));
  }, item: ($, O) => (r.current.add($), O && (o.current.has(O) ? o.current.get(O).add($) : o.current.set(O, /* @__PURE__ */ new Set([$]))), R(3, () => {
    k(), j(), n.current.value || _(), C.emit();
  }), () => {
    a.current.delete($), r.current.delete($), n.current.filtered.items.delete($);
    let V = A();
    R(4, () => {
      k(), (V == null ? void 0 : V.getAttribute("id")) === $ && _(), C.emit();
    });
  }), group: ($) => (o.current.has($) || o.current.set($, /* @__PURE__ */ new Set()), () => {
    a.current.delete($), o.current.delete($);
  }), filter: () => i.current.shouldFilter, label: l || e["aria-label"], getDisablePointerSelection: () => i.current.disablePointerSelection, listId: y, inputId: S, labelId: b, listInnerRef: E }), []);
  function P($, O) {
    var V, B;
    let q = (B = (V = i.current) == null ? void 0 : V.filter) != null ? B : ZN;
    return $ ? q($, n.current.search, O) : 0;
  }
  function j() {
    if (!n.current.search || i.current.shouldFilter === !1) return;
    let $ = n.current.filtered.items, O = [];
    n.current.filtered.groups.forEach((B) => {
      let q = o.current.get(B), T = 0;
      q.forEach((Y) => {
        let J = $.get(Y);
        T = Math.max(J, T);
      }), O.push([B, T]);
    });
    let V = E.current;
    U().sort((B, q) => {
      var T, Y;
      let J = B.getAttribute("id"), te = q.getAttribute("id");
      return ((T = $.get(te)) != null ? T : 0) - ((Y = $.get(J)) != null ? Y : 0);
    }).forEach((B) => {
      let q = B.closest(ri);
      q ? q.appendChild(B.parentElement === q ? B : B.closest(`${ri} > *`)) : V.appendChild(B.parentElement === V ? B : B.closest(`${ri} > *`));
    }), O.sort((B, q) => q[1] - B[1]).forEach((B) => {
      var q;
      let T = (q = E.current) == null ? void 0 : q.querySelector(`${Qr}[${yr}="${encodeURIComponent(B[0])}"]`);
      T == null || T.parentElement.appendChild(T);
    });
  }
  function _() {
    let $ = U().find((V) => V.getAttribute("aria-disabled") !== "true"), O = $ == null ? void 0 : $.getAttribute(yr);
    C.setState("value", O || void 0);
  }
  function k() {
    var $, O, V, B;
    if (!n.current.search || i.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let q = 0;
    for (let T of r.current) {
      let Y = (O = ($ = a.current.get(T)) == null ? void 0 : $.value) != null ? O : "", J = (B = (V = a.current.get(T)) == null ? void 0 : V.keywords) != null ? B : [], te = P(Y, J);
      n.current.filtered.items.set(T, te), te > 0 && q++;
    }
    for (let [T, Y] of o.current) for (let J of Y) if (n.current.filtered.items.get(J) > 0) {
      n.current.filtered.groups.add(T);
      break;
    }
    n.current.filtered.count = q;
  }
  function W() {
    var $, O, V;
    let B = A();
    B && ((($ = B.parentElement) == null ? void 0 : $.firstChild) === B && ((V = (O = B.closest(Qr)) == null ? void 0 : O.querySelector(XN)) == null || V.scrollIntoView({ block: "nearest" })), B.scrollIntoView({ block: "nearest" }));
  }
  function A() {
    var $;
    return ($ = E.current) == null ? void 0 : $.querySelector(`${pm}[aria-selected="true"]`);
  }
  function U() {
    var $;
    return Array.from((($ = E.current) == null ? void 0 : $.querySelectorAll(ld)) || []);
  }
  function G($) {
    let O = U()[$];
    O && C.setState("value", O.getAttribute(yr));
  }
  function F($) {
    var O;
    let V = A(), B = U(), q = B.findIndex((Y) => Y === V), T = B[q + $];
    (O = i.current) != null && O.loop && (T = q + $ < 0 ? B[B.length - 1] : q + $ === B.length ? B[0] : B[q + $]), T && C.setState("value", T.getAttribute(yr));
  }
  function L($) {
    let O = A(), V = O == null ? void 0 : O.closest(Qr), B;
    for (; V && !B; ) V = $ > 0 ? aP(V, Qr) : sP(V, Qr), B = V == null ? void 0 : V.querySelector(ld);
    B ? C.setState("value", B.getAttribute(yr)) : F($);
  }
  let z = () => G(U().length - 1), oe = ($) => {
    $.preventDefault(), $.metaKey ? z() : $.altKey ? L(1) : F(1);
  }, ae = ($) => {
    $.preventDefault(), $.metaKey ? G(0) : $.altKey ? L(-1) : F(-1);
  };
  return d.createElement(Z.div, { ref: t, tabIndex: -1, ...x, "cmdk-root": "", onKeyDown: ($) => {
    var O;
    (O = x.onKeyDown) == null || O.call(x, $);
    let V = $.nativeEvent.isComposing || $.keyCode === 229;
    if (!($.defaultPrevented || V)) switch ($.key) {
      case "n":
      case "j": {
        w && $.ctrlKey && oe($);
        break;
      }
      case "ArrowDown": {
        oe($);
        break;
      }
      case "p":
      case "k": {
        w && $.ctrlKey && ae($);
        break;
      }
      case "ArrowUp": {
        ae($);
        break;
      }
      case "Home": {
        $.preventDefault(), G(0);
        break;
      }
      case "End": {
        $.preventDefault(), z();
        break;
      }
      case "Enter": {
        $.preventDefault();
        let B = A();
        if (B) {
          let q = new Event(Fi);
          B.dispatchEvent(q);
        }
      }
    }
  } }, d.createElement("label", { "cmdk-label": "", htmlFor: M.inputId, id: M.labelId, style: cP }, l), ls(e, ($) => d.createElement(gm.Provider, { value: C }, d.createElement(mm.Provider, { value: M }, $))));
}), JN = d.forwardRef((e, t) => {
  var n, r;
  let o = $e(), a = d.useRef(null), s = d.useContext(hm), i = Oo(), l = xm(e), u = (r = (n = l.current) == null ? void 0 : n.forceMount) != null ? r : s == null ? void 0 : s.forceMount;
  rr(() => {
    if (!u) return i.item(o, s == null ? void 0 : s.id);
  }, [u]);
  let f = wm(o, a, [e.value, e.children, a], e.keywords), p = sc(), g = jn((R) => R.value && R.value === f.current), m = jn((R) => u || i.filter() === !1 ? !0 : R.search ? R.filtered.items.get(o) > 0 : !0);
  d.useEffect(() => {
    let R = a.current;
    if (!(!R || e.disabled)) return R.addEventListener(Fi, v), () => R.removeEventListener(Fi, v);
  }, [m, e.onSelect, e.disabled]);
  function v() {
    var R, C;
    h(), (C = (R = l.current).onSelect) == null || C.call(R, f.current);
  }
  function h() {
    p.setState("value", f.current, !0);
  }
  if (!m) return null;
  let { disabled: w, value: x, onSelect: y, forceMount: b, keywords: S, ...E } = e;
  return d.createElement(Z.div, { ref: un(a, t), ...E, id: o, "cmdk-item": "", role: "option", "aria-disabled": !!w, "aria-selected": !!g, "data-disabled": !!w, "data-selected": !!g, onPointerMove: w || i.getDisablePointerSelection() ? void 0 : h, onClick: w ? void 0 : v }, e.children);
}), QN = d.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: o, ...a } = e, s = $e(), i = d.useRef(null), l = d.useRef(null), u = $e(), f = Oo(), p = jn((m) => o || f.filter() === !1 ? !0 : m.search ? m.filtered.groups.has(s) : !0);
  rr(() => f.group(s), []), wm(s, i, [e.value, e.heading, l]);
  let g = d.useMemo(() => ({ id: s, forceMount: o }), [o]);
  return d.createElement(Z.div, { ref: un(i, t), ...a, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, n && d.createElement("div", { ref: l, "cmdk-group-heading": "", "aria-hidden": !0, id: u }, n), ls(e, (m) => d.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? u : void 0 }, d.createElement(hm.Provider, { value: g }, m))));
}), eP = d.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, o = d.useRef(null), a = jn((s) => !s.search);
  return !n && !a ? null : d.createElement(Z.div, { ref: un(o, t), ...r, "cmdk-separator": "", role: "separator" });
}), tP = d.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, o = e.value != null, a = sc(), s = jn((u) => u.search), i = jn((u) => u.selectedItemId), l = Oo();
  return d.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), d.createElement(Z.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": l.listId, "aria-labelledby": l.labelId, "aria-activedescendant": i, id: l.inputId, type: "text", value: o ? e.value : s, onChange: (u) => {
    o || a.setState("search", u.target.value), n == null || n(u.target.value);
  } });
}), nP = d.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...o } = e, a = d.useRef(null), s = d.useRef(null), i = jn((u) => u.selectedItemId), l = Oo();
  return d.useEffect(() => {
    if (s.current && a.current) {
      let u = s.current, f = a.current, p, g = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let m = u.offsetHeight;
          f.style.setProperty("--cmdk-list-height", m.toFixed(1) + "px");
        });
      });
      return g.observe(u), () => {
        cancelAnimationFrame(p), g.unobserve(u);
      };
    }
  }, []), d.createElement(Z.div, { ref: un(a, t), ...o, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": i, "aria-label": r, id: l.listId }, ls(e, (u) => d.createElement("div", { ref: un(s, l.listInnerRef), "cmdk-list-sizer": "" }, u)));
}), rP = d.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: o, contentClassName: a, container: s, ...i } = e;
  return d.createElement(_o, { open: n, onOpenChange: r }, d.createElement(Mo, { container: s }, d.createElement(lr, { "cmdk-overlay": "", className: o }), d.createElement(cr, { "aria-label": e.label, "cmdk-dialog": "", className: a }, d.createElement(vm, { ref: t, ...i }))));
}), oP = d.forwardRef((e, t) => jn((n) => n.filtered.count === 0) ? d.createElement(Z.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), zi = d.forwardRef((e, t) => {
  let { progress: n, children: r, label: o = "Loading...", ...a } = e;
  return d.createElement(Z.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }, ls(e, (s) => d.createElement("div", { "aria-hidden": !0 }, s)));
}), _t = Object.assign(vm, { List: nP, Item: JN, Input: tP, Group: QN, Separator: eP, Dialog: rP, Empty: oP, Loading: zi });
function aP(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function sP(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function xm(e) {
  let t = d.useRef(e);
  return rr(() => {
    t.current = e;
  }), t;
}
var rr = typeof window > "u" ? d.useEffect : d.useLayoutEffect;
function br(e) {
  let t = d.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function jn(e) {
  let t = sc(), n = () => e(t.snapshot());
  return d.useSyncExternalStore(t.subscribe, n, n);
}
function wm(e, t, n, r = []) {
  let o = d.useRef(), a = Oo();
  return rr(() => {
    var s;
    let i = (() => {
      var u;
      for (let f of n) {
        if (typeof f == "string") return f.trim();
        if (typeof f == "object" && "current" in f) return f.current ? (u = f.current.textContent) == null ? void 0 : u.trim() : o.current;
      }
    })(), l = r.map((u) => u.trim());
    a.value(e, i, l), (s = t.current) == null || s.setAttribute(yr, i), o.current = i;
  }), o;
}
var iP = () => {
  let [e, t] = d.useState(), n = br(() => /* @__PURE__ */ new Map());
  return rr(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, o) => {
    n.current.set(r, o), t({});
  };
};
function lP(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function ls({ asChild: e, children: t }, n) {
  return e && d.isValidElement(t) ? d.cloneElement(lP(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var cP = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const uP = _o, i5 = rs, dP = Mo, l5 = ur, ym = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  lr,
  {
    ref: n,
    className: I(
      "fixed inset-0 z-50 bg-[#14151a80]  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
ym.displayName = lr.displayName;
const bm = d.forwardRef(({ className: e, children: t, closeIconClassName: n, ...r }, o) => /* @__PURE__ */ c.jsxs(dP, { children: [
  /* @__PURE__ */ c.jsx(ym, {}),
  /* @__PURE__ */ c.jsxs(
    cr,
    {
      ref: o,
      className: I(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-[80vw] translate-x-[-50%] translate-y-[-50%] gap-4 border border-[#E9E9E9] bg-white p-[60px] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ",
        e
      ),
      style: {
        boxShadow: "0px 12px 40px 0px rgba(0, 0, 0, 0.10);"
      },
      ...r,
      children: [
        t,
        /* @__PURE__ */ c.jsx(
          ur,
          {
            className: I(
              "absolute left-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500",
              n
            ),
            children: /* @__PURE__ */ c.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  /* @__PURE__ */ c.jsx(
                    "path",
                    {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z",
                      fill: "black"
                    }
                  ),
                  /* @__PURE__ */ c.jsx(
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
bm.displayName = cr.displayName;
const fP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
fP.displayName = "DialogHeader";
const pP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
pP.displayName = "DialogFooter";
const mP = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Lr,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
mP.displayName = Lr.displayName;
const gP = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fr,
  {
    ref: n,
    className: I("text-sm text-slate-500  ", e),
    ...t
  }
));
gP.displayName = Fr.displayName;
const ic = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  _t,
  {
    ref: n,
    className: I(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950    ",
      e
    ),
    ...t
  }
));
ic.displayName = _t.displayName;
const c5 = ({ children: e, ...t }) => /* @__PURE__ */ c.jsx(uP, { ...t, children: /* @__PURE__ */ c.jsx(bm, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ c.jsx(ic, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5  ", children: e }) }) }), Cm = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ c.jsx(t1, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ c.jsx(
    _t.Input,
    {
      ref: n,
      className: I(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50  ",
        e
      ),
      ...t
    }
  )
] }));
Cm.displayName = _t.Input.displayName;
const Sm = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  _t.List,
  {
    ref: n,
    className: I("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
    ...t
  }
));
Sm.displayName = _t.List.displayName;
const Rm = d.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  _t.Empty,
  {
    ref: t,
    className: "py-6 text-center text-sm",
    ...e
  }
));
Rm.displayName = _t.Empty.displayName;
const Em = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  _t.Group,
  {
    ref: n,
    className: I(
      "overflow-hidden p-1 text-slate-950 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500    ",
      e
    ),
    ...t
  }
));
Em.displayName = _t.Group.displayName;
const hP = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  _t.Separator,
  {
    ref: n,
    className: I("-mx-1 h-px bg-slate-200  ", e),
    ...t
  }
));
hP.displayName = _t.Separator.displayName;
const Vi = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  _t.Item,
  {
    ref: n,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...t
  }
));
Vi.displayName = _t.Item.displayName;
const vP = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
vP.displayName = "CommandShortcut";
const xP = ["top", "right", "bottom", "left"], kn = Math.min, It = Math.max, Ma = Math.round, ta = Math.floor, cn = (e) => ({
  x: e,
  y: e
}), wP = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yP = {
  start: "end",
  end: "start"
};
function Bi(e, t, n) {
  return It(e, kn(t, n));
}
function Cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sn(e) {
  return e.split("-")[0];
}
function Vr(e) {
  return e.split("-")[1];
}
function lc(e) {
  return e === "x" ? "y" : "x";
}
function cc(e) {
  return e === "y" ? "height" : "width";
}
const bP = /* @__PURE__ */ new Set(["top", "bottom"]);
function sn(e) {
  return bP.has(Sn(e)) ? "y" : "x";
}
function uc(e) {
  return lc(sn(e));
}
function CP(e, t, n) {
  n === void 0 && (n = !1);
  const r = Vr(e), o = uc(e), a = cc(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Ta(s)), [s, Ta(s)];
}
function SP(e) {
  const t = Ta(e);
  return [Hi(e), t, Hi(t)];
}
function Hi(e) {
  return e.replace(/start|end/g, (t) => yP[t]);
}
const cd = ["left", "right"], ud = ["right", "left"], RP = ["top", "bottom"], EP = ["bottom", "top"];
function NP(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ud : cd : t ? cd : ud;
    case "left":
    case "right":
      return t ? RP : EP;
    default:
      return [];
  }
}
function PP(e, t, n, r) {
  const o = Vr(e);
  let a = NP(Sn(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(Hi)))), a;
}
function Ta(e) {
  return e.replace(/left|right|bottom|top/g, (t) => wP[t]);
}
function _P(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Nm(e) {
  return typeof e != "number" ? _P(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Da(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function dd(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = sn(t), s = uc(t), i = cc(s), l = Sn(t), u = a === "y", f = r.x + r.width / 2 - o.width / 2, p = r.y + r.height / 2 - o.height / 2, g = r[i] / 2 - o[i] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: f,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: f,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: p
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: p
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (Vr(t)) {
    case "start":
      m[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += g * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const MP = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: f,
    y: p
  } = dd(u, r, l), g = r, m = {}, v = 0;
  for (let h = 0; h < i.length; h++) {
    const {
      name: w,
      fn: x
    } = i[h], {
      x: y,
      y: b,
      data: S,
      reset: E
    } = await x({
      x: f,
      y: p,
      initialPlacement: r,
      placement: g,
      strategy: o,
      middlewareData: m,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    f = y ?? f, p = b ?? p, m = {
      ...m,
      [w]: {
        ...m[w],
        ...S
      }
    }, E && v <= 50 && (v++, typeof E == "object" && (E.placement && (g = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: f,
      y: p
    } = dd(u, g, l)), h = -1);
  }
  return {
    x: f,
    y: p,
    placement: g,
    strategy: o,
    middlewareData: m
  };
};
async function vo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: f = "viewport",
    elementContext: p = "floating",
    altBoundary: g = !1,
    padding: m = 0
  } = Cn(t, e), v = Nm(m), w = i[g ? p === "floating" ? "reference" : "floating" : p], x = Da(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: f,
    strategy: l
  })), y = p === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, b = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), S = await (a.isElement == null ? void 0 : a.isElement(b)) ? await (a.getScale == null ? void 0 : a.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Da(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (x.top - E.top + v.top) / S.y,
    bottom: (E.bottom - x.bottom + v.bottom) / S.y,
    left: (x.left - E.left + v.left) / S.x,
    right: (E.right - x.right + v.right) / S.x
  };
}
const TP = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: l
    } = t, {
      element: u,
      padding: f = 0
    } = Cn(e, t) || {};
    if (u == null)
      return {};
    const p = Nm(f), g = {
      x: n,
      y: r
    }, m = uc(o), v = cc(m), h = await s.getDimensions(u), w = m === "y", x = w ? "top" : "left", y = w ? "bottom" : "right", b = w ? "clientHeight" : "clientWidth", S = a.reference[v] + a.reference[m] - g[m] - a.floating[v], E = g[m] - a.reference[m], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let C = R ? R[b] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(R))) && (C = i.floating[b] || a.floating[v]);
    const M = S / 2 - E / 2, P = C / 2 - h[v] / 2 - 1, j = kn(p[x], P), _ = kn(p[y], P), k = j, W = C - h[v] - _, A = C / 2 - h[v] / 2 + M, U = Bi(k, A, W), G = !l.arrow && Vr(o) != null && A !== U && a.reference[v] / 2 - (A < k ? j : _) - h[v] / 2 < 0, F = G ? A < k ? A - k : A - W : 0;
    return {
      [m]: g[m] + F,
      data: {
        [m]: U,
        centerOffset: A - U - F,
        ...G && {
          alignmentOffset: F
        }
      },
      reset: G
    };
  }
}), DP = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: l,
        elements: u
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !0,
        fallbackPlacements: g,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: h = !0,
        ...w
      } = Cn(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const x = Sn(o), y = sn(i), b = Sn(i) === i, S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), E = g || (b || !h ? [Ta(i)] : SP(i)), R = v !== "none";
      !g && R && E.push(...PP(i, h, v, S));
      const C = [i, ...E], M = await vo(t, w), P = [];
      let j = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (f && P.push(M[x]), p) {
        const A = CP(o, s, S);
        P.push(M[A[0]], M[A[1]]);
      }
      if (j = [...j, {
        placement: o,
        overflows: P
      }], !P.every((A) => A <= 0)) {
        var _, k;
        const A = (((_ = a.flip) == null ? void 0 : _.index) || 0) + 1, U = C[A];
        if (U && (!(p === "alignment" ? y !== sn(U) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        j.every((L) => sn(L.placement) === y ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: A,
              overflows: j
            },
            reset: {
              placement: U
            }
          };
        let G = (k = j.filter((F) => F.overflows[0] <= 0).sort((F, L) => F.overflows[1] - L.overflows[1])[0]) == null ? void 0 : k.placement;
        if (!G)
          switch (m) {
            case "bestFit": {
              var W;
              const F = (W = j.filter((L) => {
                if (R) {
                  const z = sn(L.placement);
                  return z === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  z === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((z) => z > 0).reduce((z, oe) => z + oe, 0)]).sort((L, z) => L[1] - z[1])[0]) == null ? void 0 : W[0];
              F && (G = F);
              break;
            }
            case "initialPlacement":
              G = i;
              break;
          }
        if (o !== G)
          return {
            reset: {
              placement: G
            }
          };
      }
      return {};
    }
  };
};
function fd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function pd(e) {
  return xP.some((t) => e[t] >= 0);
}
const IP = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Cn(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await vo(t, {
            ...o,
            elementContext: "reference"
          }), s = fd(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: pd(s)
            }
          };
        }
        case "escaped": {
          const a = await vo(t, {
            ...o,
            altBoundary: !0
          }), s = fd(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: pd(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Pm = /* @__PURE__ */ new Set(["left", "top"]);
async function AP(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Sn(n), i = Vr(n), l = sn(n) === "y", u = Pm.has(s) ? -1 : 1, f = a && l ? -1 : 1, p = Cn(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: v
  } = typeof p == "number" ? {
    mainAxis: p,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: p.mainAxis || 0,
    crossAxis: p.crossAxis || 0,
    alignmentAxis: p.alignmentAxis
  };
  return i && typeof v == "number" && (m = i === "end" ? v * -1 : v), l ? {
    x: m * f,
    y: g * u
  } : {
    x: g * u,
    y: m * f
  };
}
const jP = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, l = await AP(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, kP = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (w) => {
            let {
              x,
              y
            } = w;
            return {
              x,
              y
            };
          }
        },
        ...l
      } = Cn(e, t), u = {
        x: n,
        y: r
      }, f = await vo(t, l), p = sn(Sn(o)), g = lc(p);
      let m = u[g], v = u[p];
      if (a) {
        const w = g === "y" ? "top" : "left", x = g === "y" ? "bottom" : "right", y = m + f[w], b = m - f[x];
        m = Bi(y, m, b);
      }
      if (s) {
        const w = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", y = v + f[w], b = v - f[x];
        v = Bi(y, v, b);
      }
      const h = i.fn({
        ...t,
        [g]: m,
        [p]: v
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [g]: a,
            [p]: s
          }
        }
      };
    }
  };
}, OP = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Cn(e, t), f = {
        x: n,
        y: r
      }, p = sn(o), g = lc(p);
      let m = f[g], v = f[p];
      const h = Cn(i, t), w = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const b = g === "y" ? "height" : "width", S = a.reference[g] - a.floating[b] + w.mainAxis, E = a.reference[g] + a.reference[b] - w.mainAxis;
        m < S ? m = S : m > E && (m = E);
      }
      if (u) {
        var x, y;
        const b = g === "y" ? "width" : "height", S = Pm.has(Sn(o)), E = a.reference[p] - a.floating[b] + (S && ((x = s.offset) == null ? void 0 : x[p]) || 0) + (S ? 0 : w.crossAxis), R = a.reference[p] + a.reference[b] + (S ? 0 : ((y = s.offset) == null ? void 0 : y[p]) || 0) - (S ? w.crossAxis : 0);
        v < E ? v = E : v > R && (v = R);
      }
      return {
        [g]: m,
        [p]: v
      };
    }
  };
}, $P = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Cn(e, t), f = await vo(t, u), p = Sn(o), g = Vr(o), m = sn(o) === "y", {
        width: v,
        height: h
      } = a.floating;
      let w, x;
      p === "top" || p === "bottom" ? (w = p, x = g === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (x = p, w = g === "end" ? "top" : "bottom");
      const y = h - f.top - f.bottom, b = v - f.left - f.right, S = kn(h - f[w], y), E = kn(v - f[x], b), R = !t.middlewareData.shift;
      let C = S, M = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = b), (r = t.middlewareData.shift) != null && r.enabled.y && (C = y), R && !g) {
        const j = It(f.left, 0), _ = It(f.right, 0), k = It(f.top, 0), W = It(f.bottom, 0);
        m ? M = v - 2 * (j !== 0 || _ !== 0 ? j + _ : It(f.left, f.right)) : C = h - 2 * (k !== 0 || W !== 0 ? k + W : It(f.top, f.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: C
      });
      const P = await s.getDimensions(i.floating);
      return v !== P.width || h !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function cs() {
  return typeof window < "u";
}
function Br(e) {
  return _m(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function At(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function mn(e) {
  var t;
  return (t = (_m(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function _m(e) {
  return cs() ? e instanceof Node || e instanceof At(e).Node : !1;
}
function qt(e) {
  return cs() ? e instanceof Element || e instanceof At(e).Element : !1;
}
function fn(e) {
  return cs() ? e instanceof HTMLElement || e instanceof At(e).HTMLElement : !1;
}
function md(e) {
  return !cs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof At(e).ShadowRoot;
}
const LP = /* @__PURE__ */ new Set(["inline", "contents"]);
function $o(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = Xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !LP.has(o);
}
const FP = /* @__PURE__ */ new Set(["table", "td", "th"]);
function zP(e) {
  return FP.has(Br(e));
}
const VP = [":popover-open", ":modal"];
function us(e) {
  return VP.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const BP = ["transform", "translate", "scale", "rotate", "perspective"], HP = ["transform", "translate", "scale", "rotate", "perspective", "filter"], GP = ["paint", "layout", "strict", "content"];
function dc(e) {
  const t = fc(), n = qt(e) ? Xt(e) : e;
  return BP.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || HP.some((r) => (n.willChange || "").includes(r)) || GP.some((r) => (n.contain || "").includes(r));
}
function WP(e) {
  let t = On(e);
  for (; fn(t) && !Dr(t); ) {
    if (dc(t))
      return t;
    if (us(t))
      return null;
    t = On(t);
  }
  return null;
}
function fc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const UP = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Dr(e) {
  return UP.has(Br(e));
}
function Xt(e) {
  return At(e).getComputedStyle(e);
}
function ds(e) {
  return qt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function On(e) {
  if (Br(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    md(e) && e.host || // Fallback.
    mn(e)
  );
  return md(t) ? t.host : t;
}
function Mm(e) {
  const t = On(e);
  return Dr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && $o(t) ? t : Mm(t);
}
function xo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Mm(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = At(o);
  if (a) {
    const i = Gi(s);
    return t.concat(s, s.visualViewport || [], $o(o) ? o : [], i && n ? xo(i) : []);
  }
  return t.concat(o, xo(o, [], n));
}
function Gi(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Tm(e) {
  const t = Xt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = fn(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = Ma(n) !== a || Ma(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function pc(e) {
  return qt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = pc(e);
  if (!fn(t))
    return cn(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Tm(t);
  let s = (a ? Ma(n.width) : n.width) / r, i = (a ? Ma(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const YP = /* @__PURE__ */ cn(0);
function Dm(e) {
  const t = At(e);
  return !fc() || !t.visualViewport ? YP : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function KP(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== At(e) ? !1 : t;
}
function or(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = pc(e);
  let s = cn(1);
  t && (r ? qt(r) && (s = Pr(r)) : s = Pr(e));
  const i = KP(a, n, r) ? Dm(a) : cn(0);
  let l = (o.left + i.x) / s.x, u = (o.top + i.y) / s.y, f = o.width / s.x, p = o.height / s.y;
  if (a) {
    const g = At(a), m = r && qt(r) ? At(r) : r;
    let v = g, h = Gi(v);
    for (; h && r && m !== v; ) {
      const w = Pr(h), x = h.getBoundingClientRect(), y = Xt(h), b = x.left + (h.clientLeft + parseFloat(y.paddingLeft)) * w.x, S = x.top + (h.clientTop + parseFloat(y.paddingTop)) * w.y;
      l *= w.x, u *= w.y, f *= w.x, p *= w.y, l += b, u += S, v = At(h), h = Gi(v);
    }
  }
  return Da({
    width: f,
    height: p,
    x: l,
    y: u
  });
}
function mc(e, t) {
  const n = ds(e).scrollLeft;
  return t ? t.left + n : or(mn(e)).left + n;
}
function Im(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    mc(e, r)
  )), a = r.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function qP(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = mn(r), i = t ? us(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = cn(1);
  const f = cn(0), p = fn(r);
  if ((p || !p && !a) && ((Br(r) !== "body" || $o(s)) && (l = ds(r)), fn(r))) {
    const m = or(r);
    u = Pr(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop;
  }
  const g = s && !p && !a ? Im(s, l, !0) : cn(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + f.x + g.x,
    y: n.y * u.y - l.scrollTop * u.y + f.y + g.y
  };
}
function XP(e) {
  return Array.from(e.getClientRects());
}
function ZP(e) {
  const t = mn(e), n = ds(e), r = e.ownerDocument.body, o = It(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = It(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + mc(e);
  const i = -n.scrollTop;
  return Xt(r).direction === "rtl" && (s += It(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
function JP(e, t) {
  const n = At(e), r = mn(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, l = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = fc();
    (!u || u && t === "fixed") && (i = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
const QP = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function e_(e, t) {
  const n = or(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = fn(e) ? Pr(e) : cn(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, l = o * a.x, u = r * a.y;
  return {
    width: s,
    height: i,
    x: l,
    y: u
  };
}
function gd(e, t, n) {
  let r;
  if (t === "viewport")
    r = JP(e, n);
  else if (t === "document")
    r = ZP(mn(e));
  else if (qt(t))
    r = e_(t, n);
  else {
    const o = Dm(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return Da(r);
}
function Am(e, t) {
  const n = On(e);
  return n === t || !qt(n) || Dr(n) ? !1 : Xt(n).position === "fixed" || Am(n, t);
}
function t_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xo(e, [], !1).filter((i) => qt(i) && Br(i) !== "body"), o = null;
  const a = Xt(e).position === "fixed";
  let s = a ? On(e) : e;
  for (; qt(s) && !Dr(s); ) {
    const i = Xt(s), l = dc(s);
    !l && i.position === "fixed" && (o = null), (a ? !l && !o : !l && i.position === "static" && !!o && QP.has(o.position) || $o(s) && !l && Am(e, s)) ? r = r.filter((f) => f !== s) : o = i, s = On(s);
  }
  return t.set(e, r), r;
}
function n_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? us(t) ? [] : t_(t, this._c) : [].concat(n), r], i = s[0], l = s.reduce((u, f) => {
    const p = gd(t, f, o);
    return u.top = It(p.top, u.top), u.right = kn(p.right, u.right), u.bottom = kn(p.bottom, u.bottom), u.left = It(p.left, u.left), u;
  }, gd(t, i, o));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function r_(e) {
  const {
    width: t,
    height: n
  } = Tm(e);
  return {
    width: t,
    height: n
  };
}
function o_(e, t, n) {
  const r = fn(t), o = mn(t), a = n === "fixed", s = or(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = cn(0);
  function u() {
    l.x = mc(o);
  }
  if (r || !r && !a)
    if ((Br(t) !== "body" || $o(o)) && (i = ds(t)), r) {
      const m = or(t, !0, a, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const f = o && !r && !a ? Im(o, i) : cn(0), p = s.left + i.scrollLeft - l.x - f.x, g = s.top + i.scrollTop - l.y - f.y;
  return {
    x: p,
    y: g,
    width: s.width,
    height: s.height
  };
}
function oi(e) {
  return Xt(e).position === "static";
}
function hd(e, t) {
  if (!fn(e) || Xt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return mn(e) === n && (n = n.ownerDocument.body), n;
}
function jm(e, t) {
  const n = At(e);
  if (us(e))
    return n;
  if (!fn(e)) {
    let o = On(e);
    for (; o && !Dr(o); ) {
      if (qt(o) && !oi(o))
        return o;
      o = On(o);
    }
    return n;
  }
  let r = hd(e, t);
  for (; r && zP(r) && oi(r); )
    r = hd(r, t);
  return r && Dr(r) && oi(r) && !dc(r) ? n : r || WP(e) || n;
}
const a_ = async function(e) {
  const t = this.getOffsetParent || jm, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: o_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function s_(e) {
  return Xt(e).direction === "rtl";
}
const i_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: qP,
  getDocumentElement: mn,
  getClippingRect: n_,
  getOffsetParent: jm,
  getElementRects: a_,
  getClientRects: XP,
  getDimensions: r_,
  getScale: Pr,
  isElement: qt,
  isRTL: s_
};
function km(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function l_(e, t) {
  let n = null, r;
  const o = mn(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, l) {
    i === void 0 && (i = !1), l === void 0 && (l = 1), a();
    const u = e.getBoundingClientRect(), {
      left: f,
      top: p,
      width: g,
      height: m
    } = u;
    if (i || t(), !g || !m)
      return;
    const v = ta(p), h = ta(o.clientWidth - (f + g)), w = ta(o.clientHeight - (p + m)), x = ta(f), b = {
      rootMargin: -v + "px " + -h + "px " + -w + "px " + -x + "px",
      threshold: It(0, kn(1, l)) || 1
    };
    let S = !0;
    function E(R) {
      const C = R[0].intersectionRatio;
      if (C !== l) {
        if (!S)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !km(u, e.getBoundingClientRect()) && s(), S = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...b,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, b);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function c_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = pc(e), f = o || a ? [...u ? xo(u) : [], ...xo(t)] : [];
  f.forEach((x) => {
    o && x.addEventListener("scroll", n, {
      passive: !0
    }), a && x.addEventListener("resize", n);
  });
  const p = u && i ? l_(u, n) : null;
  let g = -1, m = null;
  s && (m = new ResizeObserver((x) => {
    let [y] = x;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let v, h = l ? or(e) : null;
  l && w();
  function w() {
    const x = or(e);
    h && !km(h, x) && n(), h = x, v = requestAnimationFrame(w);
  }
  return n(), () => {
    var x;
    f.forEach((y) => {
      o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n);
    }), p == null || p(), (x = m) == null || x.disconnect(), m = null, l && cancelAnimationFrame(v);
  };
}
const u_ = jP, d_ = kP, f_ = DP, p_ = $P, m_ = IP, vd = TP, g_ = OP, h_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: i_,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return MP(e, t, {
    ...o,
    platform: a
  });
};
var v_ = typeof document < "u", x_ = function() {
}, ma = v_ ? Ua : x_;
function Ia(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Ia(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !Ia(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Om(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function xd(e, t) {
  const n = Om(e);
  return Math.round(t * n) / n;
}
function ai(e) {
  const t = d.useRef(e);
  return ma(() => {
    t.current = e;
  }), t;
}
function w_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: l,
    open: u
  } = e, [f, p] = d.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [g, m] = d.useState(r);
  Ia(g, r) || m(r);
  const [v, h] = d.useState(null), [w, x] = d.useState(null), y = d.useCallback((L) => {
    L !== R.current && (R.current = L, h(L));
  }, []), b = d.useCallback((L) => {
    L !== C.current && (C.current = L, x(L));
  }, []), S = a || v, E = s || w, R = d.useRef(null), C = d.useRef(null), M = d.useRef(f), P = l != null, j = ai(l), _ = ai(o), k = ai(u), W = d.useCallback(() => {
    if (!R.current || !C.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: g
    };
    _.current && (L.platform = _.current), h_(R.current, C.current, L).then((z) => {
      const oe = {
        ...z,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: k.current !== !1
      };
      A.current && !Ia(M.current, oe) && (M.current = oe, Ya.flushSync(() => {
        p(oe);
      }));
    });
  }, [g, t, n, _, k]);
  ma(() => {
    u === !1 && M.current.isPositioned && (M.current.isPositioned = !1, p((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const A = d.useRef(!1);
  ma(() => (A.current = !0, () => {
    A.current = !1;
  }), []), ma(() => {
    if (S && (R.current = S), E && (C.current = E), S && E) {
      if (j.current)
        return j.current(S, E, W);
      W();
    }
  }, [S, E, W, j, P]);
  const U = d.useMemo(() => ({
    reference: R,
    floating: C,
    setReference: y,
    setFloating: b
  }), [y, b]), G = d.useMemo(() => ({
    reference: S,
    floating: E
  }), [S, E]), F = d.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!G.floating)
      return L;
    const z = xd(G.floating, f.x), oe = xd(G.floating, f.y);
    return i ? {
      ...L,
      transform: "translate(" + z + "px, " + oe + "px)",
      ...Om(G.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: z,
      top: oe
    };
  }, [n, i, G.floating, f.x, f.y]);
  return d.useMemo(() => ({
    ...f,
    update: W,
    refs: U,
    elements: G,
    floatingStyles: F
  }), [f, W, U, G, F]);
}
const y_ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? vd({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? vd({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, b_ = (e, t) => ({
  ...u_(e),
  options: [e, t]
}), C_ = (e, t) => ({
  ...d_(e),
  options: [e, t]
}), S_ = (e, t) => ({
  ...g_(e),
  options: [e, t]
}), R_ = (e, t) => ({
  ...f_(e),
  options: [e, t]
}), E_ = (e, t) => ({
  ...p_(e),
  options: [e, t]
}), N_ = (e, t) => ({
  ...m_(e),
  options: [e, t]
}), P_ = (e, t) => ({
  ...y_(e),
  options: [e, t]
});
var __ = "Arrow", $m = d.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ c.jsx(
    Z.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ c.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
$m.displayName = __;
var M_ = $m, gc = "Popper", [Lm, gn] = Fe(gc), [T_, Fm] = Lm(gc), zm = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = d.useState(null);
  return /* @__PURE__ */ c.jsx(T_, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
zm.displayName = gc;
var Vm = "PopperAnchor", Bm = d.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Fm(Vm, n), s = d.useRef(null), i = le(t, s);
    return d.useEffect(() => {
      a.onAnchorChange((r == null ? void 0 : r.current) || s.current);
    }), r ? null : /* @__PURE__ */ c.jsx(Z.div, { ...o, ref: i });
  }
);
Bm.displayName = Vm;
var hc = "PopperContent", [D_, I_] = Lm(hc), Hm = d.forwardRef(
  (e, t) => {
    var T, Y, J, te, ne, X;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: f = 0,
      sticky: p = "partial",
      hideWhenDetached: g = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: v,
      ...h
    } = e, w = Fm(hc, n), [x, y] = d.useState(null), b = le(t, (K) => y(K)), [S, E] = d.useState(null), R = ko(S), C = (R == null ? void 0 : R.width) ?? 0, M = (R == null ? void 0 : R.height) ?? 0, P = r + (a !== "center" ? "-" + a : ""), j = typeof f == "number" ? f : { top: 0, right: 0, bottom: 0, left: 0, ...f }, _ = Array.isArray(u) ? u : [u], k = _.length > 0, W = {
      padding: j,
      boundary: _.filter(j_),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: k
    }, { refs: A, floatingStyles: U, placement: G, isPositioned: F, middlewareData: L } = w_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...K) => c_(...K, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        b_({ mainAxis: o + M, alignmentAxis: s }),
        l && C_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: p === "partial" ? S_() : void 0,
          ...W
        }),
        l && R_({ ...W }),
        E_({
          ...W,
          apply: ({ elements: K, rects: ee, availableWidth: re, availableHeight: pe }) => {
            const { width: ye, height: ge } = ee.reference, ue = K.floating.style;
            ue.setProperty("--radix-popper-available-width", `${re}px`), ue.setProperty("--radix-popper-available-height", `${pe}px`), ue.setProperty("--radix-popper-anchor-width", `${ye}px`), ue.setProperty("--radix-popper-anchor-height", `${ge}px`);
          }
        }),
        S && P_({ element: S, padding: i }),
        k_({ arrowWidth: C, arrowHeight: M }),
        g && N_({ strategy: "referenceHidden", ...W })
      ]
    }), [z, oe] = Um(G), ae = Oe(v);
    Ue(() => {
      F && (ae == null || ae());
    }, [F, ae]);
    const $ = (T = L.arrow) == null ? void 0 : T.x, O = (Y = L.arrow) == null ? void 0 : Y.y, V = ((J = L.arrow) == null ? void 0 : J.centerOffset) !== 0, [B, q] = d.useState();
    return Ue(() => {
      x && q(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: A.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...U,
          transform: F ? U.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: B,
          "--radix-popper-transform-origin": [
            (te = L.transformOrigin) == null ? void 0 : te.x,
            (ne = L.transformOrigin) == null ? void 0 : ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((X = L.hide) == null ? void 0 : X.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ c.jsx(
          D_,
          {
            scope: n,
            placedSide: z,
            onArrowChange: E,
            arrowX: $,
            arrowY: O,
            shouldHideArrow: V,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                "data-side": z,
                "data-align": oe,
                ...h,
                ref: b,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: F ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Hm.displayName = hc;
var Gm = "PopperArrow", A_ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Wm = d.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = I_(Gm, r), s = A_[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ c.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
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
        },
        children: /* @__PURE__ */ c.jsx(
          M_,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Wm.displayName = Gm;
function j_(e) {
  return e !== null;
}
var k_ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, x, y;
    const { placement: n, rects: r, middlewareData: o } = t, s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0, i = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [u, f] = Um(n), p = { start: "0%", center: "50%", end: "100%" }[f], g = (((x = o.arrow) == null ? void 0 : x.x) ?? 0) + i / 2, m = (((y = o.arrow) == null ? void 0 : y.y) ?? 0) + l / 2;
    let v = "", h = "";
    return u === "bottom" ? (v = s ? p : `${g}px`, h = `${-l}px`) : u === "top" ? (v = s ? p : `${g}px`, h = `${r.floating.height + l}px`) : u === "right" ? (v = `${-l}px`, h = s ? p : `${m}px`) : u === "left" && (v = `${r.floating.width + l}px`, h = s ? p : `${m}px`), { data: { x: v, y: h } };
  }
});
function Um(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Hr = zm, Gr = Bm, Lo = Hm, Fo = Wm, si = "rovingFocusGroup.onEntryFocus", O_ = { bubbles: !1, cancelable: !0 }, zo = "RovingFocusGroup", [Wi, Ym, $_] = Fn(zo), [L_, hn] = Fe(
  zo,
  [$_]
), [F_, z_] = L_(zo), Km = d.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(Wi.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(Wi.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ c.jsx(V_, { ...e, ref: t }) }) })
);
Km.displayName = zo;
var V_ = d.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: f = !1,
    ...p
  } = e, g = d.useRef(null), m = le(t, g), v = Zt(a), [h, w] = Ge({
    prop: s,
    defaultProp: i ?? null,
    onChange: l,
    caller: zo
  }), [x, y] = d.useState(!1), b = Oe(u), S = Ym(n), E = d.useRef(!1), [R, C] = d.useState(0);
  return d.useEffect(() => {
    const M = g.current;
    if (M)
      return M.addEventListener(si, b), () => M.removeEventListener(si, b);
  }, [b]), /* @__PURE__ */ c.jsx(
    F_,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: h,
      onItemFocus: d.useCallback(
        (M) => w(M),
        [w]
      ),
      onItemShiftTab: d.useCallback(() => y(!0), []),
      onFocusableItemAdd: d.useCallback(
        () => C((M) => M + 1),
        []
      ),
      onFocusableItemRemove: d.useCallback(
        () => C((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          tabIndex: x || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...p,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: H(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: H(e.onFocus, (M) => {
            const P = !E.current;
            if (M.target === M.currentTarget && P && !x) {
              const j = new CustomEvent(si, O_);
              if (M.currentTarget.dispatchEvent(j), !j.defaultPrevented) {
                const _ = S().filter((G) => G.focusable), k = _.find((G) => G.active), W = _.find((G) => G.id === h), U = [k, W, ..._].filter(
                  Boolean
                ).map((G) => G.ref.current);
                Zm(U, f);
              }
            }
            E.current = !1;
          }),
          onBlur: H(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), qm = "RovingFocusGroupItem", Xm = d.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, l = $e(), u = a || l, f = z_(qm, n), p = f.currentTabStopId === u, g = Ym(n), { onFocusableItemAdd: m, onFocusableItemRemove: v, currentTabStopId: h } = f;
    return d.useEffect(() => {
      if (r)
        return m(), () => v();
    }, [r, m, v]), /* @__PURE__ */ c.jsx(
      Wi.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": f.orientation,
            ...i,
            ref: t,
            onMouseDown: H(e.onMouseDown, (w) => {
              r ? f.onItemFocus(u) : w.preventDefault();
            }),
            onFocus: H(e.onFocus, () => f.onItemFocus(u)),
            onKeyDown: H(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                f.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const x = G_(w, f.orientation, f.dir);
              if (x !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let b = g().filter((S) => S.focusable).map((S) => S.ref.current);
                if (x === "last") b.reverse();
                else if (x === "prev" || x === "next") {
                  x === "prev" && b.reverse();
                  const S = b.indexOf(w.currentTarget);
                  b = f.loop ? W_(b, S + 1) : b.slice(S + 1);
                }
                setTimeout(() => Zm(b));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: p, hasTabStop: h != null }) : s
          }
        )
      }
    );
  }
);
Xm.displayName = qm;
var B_ = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function H_(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function G_(e, t, n) {
  const r = H_(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return B_[r];
}
function Zm(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function W_(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Vo = Km, Bo = Xm, Ui = ["Enter", " "], U_ = ["ArrowDown", "PageUp", "Home"], Jm = ["ArrowUp", "PageDown", "End"], Y_ = [...U_, ...Jm], K_ = {
  ltr: [...Ui, "ArrowRight"],
  rtl: [...Ui, "ArrowLeft"]
}, q_ = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ho = "Menu", [wo, X_, Z_] = Fn(Ho), [fr, Go] = Fe(Ho, [
  Z_,
  gn,
  hn
]), Wo = gn(), Qm = hn(), [eg, Vn] = fr(Ho), [J_, Uo] = fr(Ho), tg = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Wo(t), [l, u] = d.useState(null), f = d.useRef(!1), p = Oe(a), g = Zt(o);
  return d.useEffect(() => {
    const m = () => {
      f.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => f.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ c.jsx(Hr, { ...i, children: /* @__PURE__ */ c.jsx(
    eg,
    {
      scope: t,
      open: n,
      onOpenChange: p,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ c.jsx(
        J_,
        {
          scope: t,
          onClose: d.useCallback(() => p(!1), [p]),
          isUsingKeyboardRef: f,
          dir: g,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
tg.displayName = Ho;
var Q_ = "MenuAnchor", vc = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Wo(n);
    return /* @__PURE__ */ c.jsx(Gr, { ...o, ...r, ref: t });
  }
);
vc.displayName = Q_;
var xc = "MenuPortal", [e2, ng] = fr(xc, {
  forceMount: void 0
}), rg = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Vn(xc, t);
  return /* @__PURE__ */ c.jsx(e2, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ c.jsx(No, { asChild: !0, container: o, children: r }) }) });
};
rg.displayName = xc;
var Ft = "MenuContent", [t2, wc] = fr(Ft), og = d.forwardRef(
  (e, t) => {
    const n = ng(Ft, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vn(Ft, e.__scopeMenu), s = Uo(Ft, e.__scopeMenu);
    return /* @__PURE__ */ c.jsx(wo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ c.jsx(wo.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ c.jsx(n2, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(r2, { ...o, ref: t }) }) }) });
  }
), n2 = d.forwardRef(
  (e, t) => {
    const n = Vn(Ft, e.__scopeMenu), r = d.useRef(null), o = le(t, r);
    return d.useEffect(() => {
      const a = r.current;
      if (a) return ts(a);
    }, []), /* @__PURE__ */ c.jsx(
      yc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), r2 = d.forwardRef((e, t) => {
  const n = Vn(Ft, e.__scopeMenu);
  return /* @__PURE__ */ c.jsx(
    yc,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), o2 = /* @__PURE__ */ An("MenuContent.ScrollLock"), yc = d.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: g,
      onDismiss: m,
      disableOutsideScroll: v,
      ...h
    } = e, w = Vn(Ft, n), x = Uo(Ft, n), y = Wo(n), b = Qm(n), S = X_(n), [E, R] = d.useState(null), C = d.useRef(null), M = le(t, C, w.onContentChange), P = d.useRef(0), j = d.useRef(""), _ = d.useRef(0), k = d.useRef(null), W = d.useRef("right"), A = d.useRef(0), U = v ? Po : d.Fragment, G = v ? { as: o2, allowPinchZoom: !0 } : void 0, F = (z) => {
      var T, Y;
      const oe = j.current + z, ae = S().filter((J) => !J.disabled), $ = document.activeElement, O = (T = ae.find((J) => J.ref.current === $)) == null ? void 0 : T.textValue, V = ae.map((J) => J.textValue), B = h2(V, oe, O), q = (Y = ae.find((J) => J.textValue === B)) == null ? void 0 : Y.ref.current;
      (function J(te) {
        j.current = te, window.clearTimeout(P.current), te !== "" && (P.current = window.setTimeout(() => J(""), 1e3));
      })(oe), q && setTimeout(() => q.focus());
    };
    d.useEffect(() => () => window.clearTimeout(P.current), []), Qa();
    const L = d.useCallback((z) => {
      var ae, $;
      return W.current === ((ae = k.current) == null ? void 0 : ae.side) && x2(z, ($ = k.current) == null ? void 0 : $.area);
    }, []);
    return /* @__PURE__ */ c.jsx(
      t2,
      {
        scope: n,
        searchRef: j,
        onItemEnter: d.useCallback(
          (z) => {
            L(z) && z.preventDefault();
          },
          [L]
        ),
        onItemLeave: d.useCallback(
          (z) => {
            var oe;
            L(z) || ((oe = C.current) == null || oe.focus(), R(null));
          },
          [L]
        ),
        onTriggerLeave: d.useCallback(
          (z) => {
            L(z) && z.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: _,
        onPointerGraceIntentChange: d.useCallback((z) => {
          k.current = z;
        }, []),
        children: /* @__PURE__ */ c.jsx(U, { ...G, children: /* @__PURE__ */ c.jsx(
          Eo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: H(a, (z) => {
              var oe;
              z.preventDefault(), (oe = C.current) == null || oe.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ c.jsx(
              zn,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: u,
                onPointerDownOutside: f,
                onFocusOutside: p,
                onInteractOutside: g,
                onDismiss: m,
                children: /* @__PURE__ */ c.jsx(
                  Vo,
                  {
                    asChild: !0,
                    ...b,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: R,
                    onEntryFocus: H(l, (z) => {
                      x.isUsingKeyboardRef.current || z.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ c.jsx(
                      Lo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": bg(w.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...y,
                        ...h,
                        ref: M,
                        style: { outline: "none", ...h.style },
                        onKeyDown: H(h.onKeyDown, (z) => {
                          const ae = z.target.closest("[data-radix-menu-content]") === z.currentTarget, $ = z.ctrlKey || z.altKey || z.metaKey, O = z.key.length === 1;
                          ae && (z.key === "Tab" && z.preventDefault(), !$ && O && F(z.key));
                          const V = C.current;
                          if (z.target !== V || !Y_.includes(z.key)) return;
                          z.preventDefault();
                          const q = S().filter((T) => !T.disabled).map((T) => T.ref.current);
                          Jm.includes(z.key) && q.reverse(), m2(q);
                        }),
                        onBlur: H(e.onBlur, (z) => {
                          z.currentTarget.contains(z.target) || (window.clearTimeout(P.current), j.current = "");
                        }),
                        onPointerMove: H(
                          e.onPointerMove,
                          yo((z) => {
                            const oe = z.target, ae = A.current !== z.clientX;
                            if (z.currentTarget.contains(oe) && ae) {
                              const $ = z.clientX > A.current ? "right" : "left";
                              W.current = $, A.current = z.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
og.displayName = Ft;
var a2 = "MenuGroup", bc = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { role: "group", ...r, ref: t });
  }
);
bc.displayName = a2;
var s2 = "MenuLabel", ag = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { ...r, ref: t });
  }
);
ag.displayName = s2;
var Aa = "MenuItem", wd = "menu.itemSelect", fs = d.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = d.useRef(null), s = Uo(Aa, e.__scopeMenu), i = wc(Aa, e.__scopeMenu), l = le(t, a), u = d.useRef(!1), f = () => {
      const p = a.current;
      if (!n && p) {
        const g = new CustomEvent(wd, { bubbles: !0, cancelable: !0 });
        p.addEventListener(wd, (m) => r == null ? void 0 : r(m), { once: !0 }), Sa(p, g), g.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ c.jsx(
      sg,
      {
        ...o,
        ref: l,
        disabled: n,
        onClick: H(e.onClick, f),
        onPointerDown: (p) => {
          var g;
          (g = e.onPointerDown) == null || g.call(e, p), u.current = !0;
        },
        onPointerUp: H(e.onPointerUp, (p) => {
          var g;
          u.current || (g = p.currentTarget) == null || g.click();
        }),
        onKeyDown: H(e.onKeyDown, (p) => {
          const g = i.searchRef.current !== "";
          n || g && p.key === " " || Ui.includes(p.key) && (p.currentTarget.click(), p.preventDefault());
        })
      }
    );
  }
);
fs.displayName = Aa;
var sg = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = wc(Aa, n), i = Qm(n), l = d.useRef(null), u = le(t, l), [f, p] = d.useState(!1), [g, m] = d.useState("");
    return d.useEffect(() => {
      const v = l.current;
      v && m((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ c.jsx(
      wo.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? g,
        children: /* @__PURE__ */ c.jsx(Bo, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            role: "menuitem",
            "data-highlighted": f ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: H(
              e.onPointerMove,
              yo((v) => {
                r ? s.onItemLeave(v) : (s.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: H(
              e.onPointerLeave,
              yo((v) => s.onItemLeave(v))
            ),
            onFocus: H(e.onFocus, () => p(!0)),
            onBlur: H(e.onBlur, () => p(!1))
          }
        ) })
      }
    );
  }
), i2 = "MenuCheckboxItem", ig = d.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(fg, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ c.jsx(
      fs,
      {
        role: "menuitemcheckbox",
        "aria-checked": ja(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Rc(n),
        onSelect: H(
          o.onSelect,
          () => r == null ? void 0 : r(ja(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ig.displayName = i2;
var lg = "MenuRadioGroup", [l2, c2] = fr(
  lg,
  { value: void 0, onValueChange: () => {
  } }
), cg = d.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = Oe(r);
    return /* @__PURE__ */ c.jsx(l2, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ c.jsx(bc, { ...o, ref: t }) });
  }
);
cg.displayName = lg;
var ug = "MenuRadioItem", dg = d.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = c2(ug, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ c.jsx(fg, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ c.jsx(
      fs,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Rc(a),
        onSelect: H(
          r.onSelect,
          () => {
            var s;
            return (s = o.onValueChange) == null ? void 0 : s.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
dg.displayName = ug;
var Cc = "MenuItemIndicator", [fg, u2] = fr(
  Cc,
  { checked: !1 }
), pg = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = u2(Cc, n);
    return /* @__PURE__ */ c.jsx(
      Ye,
      {
        present: r || ja(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ c.jsx(
          Z.span,
          {
            ...o,
            ref: t,
            "data-state": Rc(a.checked)
          }
        )
      }
    );
  }
);
pg.displayName = Cc;
var d2 = "MenuSeparator", mg = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
mg.displayName = d2;
var f2 = "MenuArrow", gg = d.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Wo(n);
    return /* @__PURE__ */ c.jsx(Fo, { ...o, ...r, ref: t });
  }
);
gg.displayName = f2;
var Sc = "MenuSub", [p2, hg] = fr(Sc), vg = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Vn(Sc, t), s = Wo(t), [i, l] = d.useState(null), [u, f] = d.useState(null), p = Oe(o);
  return d.useEffect(() => (a.open === !1 && p(!1), () => p(!1)), [a.open, p]), /* @__PURE__ */ c.jsx(Hr, { ...s, children: /* @__PURE__ */ c.jsx(
    eg,
    {
      scope: t,
      open: r,
      onOpenChange: p,
      content: u,
      onContentChange: f,
      children: /* @__PURE__ */ c.jsx(
        p2,
        {
          scope: t,
          contentId: $e(),
          triggerId: $e(),
          trigger: i,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
vg.displayName = Sc;
var ao = "MenuSubTrigger", xg = d.forwardRef(
  (e, t) => {
    const n = Vn(ao, e.__scopeMenu), r = Uo(ao, e.__scopeMenu), o = hg(ao, e.__scopeMenu), a = wc(ao, e.__scopeMenu), s = d.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: l } = a, u = { __scopeMenu: e.__scopeMenu }, f = d.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return d.useEffect(() => f, [f]), d.useEffect(() => {
      const p = i.current;
      return () => {
        window.clearTimeout(p), l(null);
      };
    }, [i, l]), /* @__PURE__ */ c.jsx(vc, { asChild: !0, ...u, children: /* @__PURE__ */ c.jsx(
      sg,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": bg(n.open),
        ...e,
        ref: un(t, o.onTriggerChange),
        onClick: (p) => {
          var g;
          (g = e.onClick) == null || g.call(e, p), !(e.disabled || p.defaultPrevented) && (p.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: H(
          e.onPointerMove,
          yo((p) => {
            a.onItemEnter(p), !p.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), f();
            }, 100));
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          yo((p) => {
            var m, v;
            f();
            const g = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (g) {
              const h = (v = n.content) == null ? void 0 : v.dataset.side, w = h === "right", x = w ? -5 : 5, y = g[w ? "left" : "right"], b = g[w ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: p.clientX + x, y: p.clientY },
                  { x: y, y: g.top },
                  { x: b, y: g.top },
                  { x: b, y: g.bottom },
                  { x: y, y: g.bottom }
                ],
                side: h
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(p), p.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: H(e.onKeyDown, (p) => {
          var m;
          const g = a.searchRef.current !== "";
          e.disabled || g && p.key === " " || K_[r.dir].includes(p.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), p.preventDefault());
        })
      }
    ) });
  }
);
xg.displayName = ao;
var wg = "MenuSubContent", yg = d.forwardRef(
  (e, t) => {
    const n = ng(Ft, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Vn(Ft, e.__scopeMenu), s = Uo(Ft, e.__scopeMenu), i = hg(wg, e.__scopeMenu), l = d.useRef(null), u = le(t, l);
    return /* @__PURE__ */ c.jsx(wo.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ c.jsx(wo.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ c.jsx(
      yc,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (f) => {
          var p;
          s.isUsingKeyboardRef.current && ((p = l.current) == null || p.focus()), f.preventDefault();
        },
        onCloseAutoFocus: (f) => f.preventDefault(),
        onFocusOutside: H(e.onFocusOutside, (f) => {
          f.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: H(e.onEscapeKeyDown, (f) => {
          s.onClose(), f.preventDefault();
        }),
        onKeyDown: H(e.onKeyDown, (f) => {
          var m;
          const p = f.currentTarget.contains(f.target), g = q_[s.dir].includes(f.key);
          p && g && (a.onOpenChange(!1), (m = i.trigger) == null || m.focus(), f.preventDefault());
        })
      }
    ) }) }) });
  }
);
yg.displayName = wg;
function bg(e) {
  return e ? "open" : "closed";
}
function ja(e) {
  return e === "indeterminate";
}
function Rc(e) {
  return ja(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function m2(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function g2(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function h2(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = g2(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function v2(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], u = i.x, f = i.y, p = l.x, g = l.y;
    f > r != g > r && n < (p - u) * (r - f) / (g - f) + u && (o = !o);
  }
  return o;
}
function x2(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return v2(n, t);
}
function yo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ec = tg, Nc = vc, Pc = rg, _c = og, Mc = bc, Tc = ag, Dc = fs, Ic = ig, Ac = cg, jc = dg, kc = pg, Oc = mg, $c = gg, Lc = vg, Fc = xg, zc = yg, Vc = "ContextMenu", [w2, u5] = Fe(Vc, [
  Go
]), pt = Go(), [y2, Cg] = w2(Vc), Sg = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: o, modal: a = !0 } = e, [s, i] = d.useState(!1), l = pt(t), u = Oe(r), f = d.useCallback(
    (p) => {
      i(p), u(p);
    },
    [u]
  );
  return /* @__PURE__ */ c.jsx(
    y2,
    {
      scope: t,
      open: s,
      onOpenChange: f,
      modal: a,
      children: /* @__PURE__ */ c.jsx(
        Ec,
        {
          ...l,
          dir: o,
          open: s,
          onOpenChange: f,
          modal: a,
          children: n
        }
      )
    }
  );
};
Sg.displayName = Vc;
var Rg = "ContextMenuTrigger", Eg = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...o } = e, a = Cg(Rg, n), s = pt(n), i = d.useRef({ x: 0, y: 0 }), l = d.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...i.current })
    }), u = d.useRef(0), f = d.useCallback(
      () => window.clearTimeout(u.current),
      []
    ), p = (g) => {
      i.current = { x: g.clientX, y: g.clientY }, a.onOpenChange(!0);
    };
    return d.useEffect(() => f, [f]), d.useEffect(() => void (r && f()), [r, f]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Nc, { ...s, virtualRef: l }),
      /* @__PURE__ */ c.jsx(
        Z.span,
        {
          "data-state": a.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...o,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : H(e.onContextMenu, (g) => {
            f(), p(g), g.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : H(
            e.onPointerDown,
            na((g) => {
              f(), u.current = window.setTimeout(() => p(g), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : H(e.onPointerMove, na(f)),
          onPointerCancel: r ? e.onPointerCancel : H(e.onPointerCancel, na(f)),
          onPointerUp: r ? e.onPointerUp : H(e.onPointerUp, na(f))
        }
      )
    ] });
  }
);
Eg.displayName = Rg;
var b2 = "ContextMenuPortal", Ng = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = pt(t);
  return /* @__PURE__ */ c.jsx(Pc, { ...r, ...n });
};
Ng.displayName = b2;
var Pg = "ContextMenuContent", _g = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = Cg(Pg, n), a = pt(n), s = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      _c,
      {
        ...a,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (i) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, i), !i.defaultPrevented && s.current && i.preventDefault(), s.current = !1;
        },
        onInteractOutside: (i) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, i), !i.defaultPrevented && !o.modal && (s.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
_g.displayName = Pg;
var C2 = "ContextMenuGroup", Mg = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ c.jsx(Mc, { ...o, ...r, ref: t });
  }
);
Mg.displayName = C2;
var S2 = "ContextMenuLabel", Tg = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ c.jsx(Tc, { ...o, ...r, ref: t });
  }
);
Tg.displayName = S2;
var R2 = "ContextMenuItem", Dg = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ c.jsx(Dc, { ...o, ...r, ref: t });
  }
);
Dg.displayName = R2;
var E2 = "ContextMenuCheckboxItem", Ig = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(Ic, { ...o, ...r, ref: t });
});
Ig.displayName = E2;
var N2 = "ContextMenuRadioGroup", Ag = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(Ac, { ...o, ...r, ref: t });
});
Ag.displayName = N2;
var P2 = "ContextMenuRadioItem", jg = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(jc, { ...o, ...r, ref: t });
});
jg.displayName = P2;
var _2 = "ContextMenuItemIndicator", kg = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(kc, { ...o, ...r, ref: t });
});
kg.displayName = _2;
var M2 = "ContextMenuSeparator", Og = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(Oc, { ...o, ...r, ref: t });
});
Og.displayName = M2;
var T2 = "ContextMenuArrow", D2 = d.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, o = pt(n);
    return /* @__PURE__ */ c.jsx($c, { ...o, ...r, ref: t });
  }
);
D2.displayName = T2;
var $g = "ContextMenuSub", Lg = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, open: o, defaultOpen: a } = e, s = pt(t), [i, l] = Ge({
    prop: o,
    defaultProp: a ?? !1,
    onChange: r,
    caller: $g
  });
  return /* @__PURE__ */ c.jsx(Lc, { ...s, open: i, onOpenChange: l, children: n });
};
Lg.displayName = $g;
var I2 = "ContextMenuSubTrigger", Fg = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(Fc, { ...o, ...r, ref: t });
});
Fg.displayName = I2;
var A2 = "ContextMenuSubContent", zg = d.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, o = pt(n);
  return /* @__PURE__ */ c.jsx(
    zc,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
zg.displayName = A2;
function na(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var j2 = Sg, k2 = Eg, Vg = Ng, Bg = _g, O2 = Mg, Hg = Tg, Gg = Dg, Wg = Ig, $2 = Ag, Ug = jg, Yg = kg, Kg = Og, L2 = Lg, qg = Fg, Xg = zg;
const d5 = j2, f5 = k2, p5 = O2, m5 = Vg, g5 = L2, h5 = $2, F2 = d.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  qg,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ c.jsx(Za, { className: "ml-auto h-4 w-4" })
    ]
  }
));
F2.displayName = qg.displayName;
const z2 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Xg,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
z2.displayName = Xg.displayName;
const V2 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(Vg, { children: /* @__PURE__ */ c.jsx(
  Bg,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
) }));
V2.displayName = Bg.displayName;
const B2 = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Gg,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
B2.displayName = Gg.displayName;
const H2 = d.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Wg,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Yg, { children: /* @__PURE__ */ c.jsx($r, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
H2.displayName = Wg.displayName;
const G2 = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Ug,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Yg, { children: /* @__PURE__ */ c.jsx(Ja, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
G2.displayName = Ug.displayName;
const W2 = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Hg,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold text-slate-950  ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
W2.displayName = Hg.displayName;
const U2 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Kg,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-slate-200  ", e),
    ...t
  }
));
U2.displayName = Kg.displayName;
const Y2 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
Y2.displayName = "ContextMenuShortcut";
function K2(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Zg = D.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
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
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), Yo = () => {
  const e = D.useContext(Zg);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
K2(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,100%,0)}}@keyframes slideFromTop{from{transform:translate3d(0,-100%,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,-100%,0)}}@keyframes slideFromLeft{from{transform:translate3d(-100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(-100%,0,0)}}@keyframes slideFromRight{from{transform:translate3d(100%,0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(100%,0,0)}}`);
const q2 = 24, X2 = typeof window < "u" ? Ua : ct;
function yd(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
function Z2() {
  return Bc(/^Mac/);
}
function J2() {
  return Bc(/^iPhone/);
}
function bd() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Q2() {
  return Bc(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Z2() && navigator.maxTouchPoints > 1;
}
function Jg() {
  return J2() || Q2();
}
function Bc(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const ii = typeof document < "u" && window.visualViewport;
function Cd(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Qg(e) {
  for (Cd(e) && (e = e.parentElement); e && !Cd(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const eM = /* @__PURE__ */ new Set([
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
let ra = 0, li;
function tM(e = {}) {
  let { isDisabled: t } = e;
  X2(() => {
    if (!t)
      return ra++, ra === 1 && Jg() && (li = nM()), () => {
        ra--, ra === 0 && (li == null || li());
      };
  }, [
    t
  ]);
}
function nM() {
  let e, t = 0, n = (p) => {
    e = Qg(p.target), !(e === document.documentElement && e === document.body) && (t = p.changedTouches[0].pageY);
  }, r = (p) => {
    if (!e || e === document.documentElement || e === document.body) {
      p.preventDefault();
      return;
    }
    let g = p.changedTouches[0].pageY, m = e.scrollTop, v = e.scrollHeight - e.clientHeight;
    v !== 0 && ((m <= 0 && g > t || m >= v && g < t) && p.preventDefault(), t = g);
  }, o = (p) => {
    let g = p.target;
    Yi(g) && g !== document.activeElement && (p.preventDefault(), g.style.transform = "translateY(-2000px)", g.focus(), requestAnimationFrame(() => {
      g.style.transform = "";
    }));
  }, a = (p) => {
    let g = p.target;
    Yi(g) && (g.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      g.style.transform = "", ii && (ii.height < window.innerHeight ? requestAnimationFrame(() => {
        Sd(g);
      }) : ii.addEventListener("resize", () => Sd(g), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, l = window.pageYOffset, u = yd(rM(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let f = yd(eo(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), eo(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), eo(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), eo(document, "focus", a, !0), eo(window, "scroll", s));
  return () => {
    u(), f(), window.scrollTo(i, l);
  };
}
function rM(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function eo(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Sd(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Qg(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + q2;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function Yi(e) {
  return e instanceof HTMLInputElement && !eM.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function oM(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function aM(...e) {
  return (t) => e.forEach((n) => oM(n, t));
}
function eh(...e) {
  return d.useCallback(aM(...e), e);
}
const th = /* @__PURE__ */ new WeakMap();
function ot(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && th.set(e, r);
}
function sM(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = th.get(e);
  n && (e.style[t] = n[t]);
}
const at = (e) => {
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
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[at(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[at(t) ? 5 : 4]) : null);
}
function iM(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function ci(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function lM(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const qe = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, nh = 0.4, cM = 0.25, uM = 100, rh = 8, Kn = 16, Ki = 26, ui = "vaul-dragging";
function oh(e) {
  const t = D.useRef(e);
  return D.useEffect(() => {
    t.current = e;
  }), D.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function dM({ defaultProp: e, onChange: t }) {
  const n = D.useState(e), [r] = n, o = D.useRef(r), a = oh(t);
  return D.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function ah({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = dM({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = oh(n), l = D.useCallback((u) => {
    if (a) {
      const p = typeof u == "function" ? u(e) : u;
      p !== e && i(p);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    l
  ];
}
function fM({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom", container: l, snapToSequentialPoint: u }) {
  const [f, p] = ah({
    prop: e,
    defaultProp: n == null ? void 0 : n[0],
    onChange: t
  }), [g, m] = D.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  D.useEffect(() => {
    function C() {
      m({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const v = D.useMemo(() => f === (n == null ? void 0 : n[n.length - 1]) || null, [
    n,
    f
  ]), h = D.useMemo(() => n == null ? void 0 : n.findIndex((C) => C === f), [
    n,
    f
  ]), w = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === f || !n, x = D.useMemo(() => {
    const C = l ? {
      width: l.getBoundingClientRect().width,
      height: l.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var M;
    return (M = n == null ? void 0 : n.map((P) => {
      const j = typeof P == "string";
      let _ = 0;
      if (j && (_ = parseInt(P, 10)), at(i)) {
        const W = j ? _ : g ? P * C.height : 0;
        return g ? i === "bottom" ? C.height - W : -C.height + W : W;
      }
      const k = j ? _ : g ? P * C.width : 0;
      return g ? i === "right" ? C.width - k : -C.width + k : k;
    })) != null ? M : [];
  }, [
    n,
    g,
    l
  ]), y = D.useMemo(() => h !== null ? x == null ? void 0 : x[h] : null, [
    x,
    h
  ]), b = D.useCallback((C) => {
    var M;
    const P = (M = x == null ? void 0 : x.findIndex((j) => j === C)) != null ? M : null;
    s(P), ot(r.current, {
      transition: `transform ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      transform: at(i) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    }), x && P !== x.length - 1 && P !== a && P < a ? ot(o.current, {
      transition: `opacity ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      opacity: "0"
    }) : ot(o.current, {
      transition: `opacity ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      opacity: "1"
    }), p(n == null ? void 0 : n[Math.max(P, 0)]);
  }, [
    r.current,
    n,
    x,
    a,
    o,
    p
  ]);
  D.useEffect(() => {
    if (f || e) {
      var C;
      const M = (C = n == null ? void 0 : n.findIndex((P) => P === e || P === f)) != null ? C : -1;
      x && M !== -1 && typeof x[M] == "number" && b(x[M]);
    }
  }, [
    f,
    e,
    n,
    x,
    b
  ]);
  function S({ draggedDistance: C, closeDrawer: M, velocity: P, dismissible: j }) {
    if (a === void 0) return;
    const _ = i === "bottom" || i === "right" ? (y ?? 0) - C : (y ?? 0) + C, k = h === a - 1, W = h === 0, A = C > 0;
    if (k && ot(o.current, {
      transition: `opacity ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`
    }), !u && P > 2 && !A) {
      j ? M() : b(x[0]);
      return;
    }
    if (!u && P > 2 && A && x && n) {
      b(x[n.length - 1]);
      return;
    }
    const U = x == null ? void 0 : x.reduce((F, L) => typeof F != "number" || typeof L != "number" ? F : Math.abs(L - _) < Math.abs(F - _) ? L : F), G = at(i) ? window.innerHeight : window.innerWidth;
    if (P > nh && Math.abs(C) < G * 0.4) {
      const F = A ? 1 : -1;
      if (F > 0 && v) {
        b(x[n.length - 1]);
        return;
      }
      if (W && F < 0 && j && M(), h === null) return;
      b(x[h + F]);
      return;
    }
    b(U);
  }
  function E({ draggedDistance: C }) {
    if (y === null) return;
    const M = i === "bottom" || i === "right" ? y - C : y + C;
    (i === "bottom" || i === "right") && M < x[x.length - 1] || (i === "top" || i === "left") && M > x[x.length - 1] || ot(r.current, {
      transform: at(i) ? `translate3d(0, ${M}px, 0)` : `translate3d(${M}px, 0, 0)`
    });
  }
  function R(C, M) {
    if (!n || typeof h != "number" || !x || a === void 0) return null;
    const P = h === a - 1;
    if (h >= a && M)
      return 0;
    if (P && !M) return 1;
    if (!w && !P) return null;
    const _ = P ? h + 1 : h - 1, k = P ? x[_] - x[_ - 1] : x[_ + 1] - x[_], W = C / Math.abs(k);
    return P ? 1 - W : W;
  }
  return {
    isLastSnapPoint: v,
    activeSnapPoint: f,
    shouldFade: w,
    getPercentageDragged: R,
    setActiveSnapPoint: p,
    activeSnapPointIndex: h,
    onRelease: S,
    onDrag: E,
    snapPointsOffset: x
  };
}
const pM = () => () => {
};
function mM() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Yo(), a = D.useRef(null), s = Zd(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - Ki) / window.innerWidth;
  }
  D.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const l = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!l) return;
      lM(r && !o ? ci(document.body, {
        background: "black"
      }) : pM, ci(l, {
        transformOrigin: at(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${qe.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${qe.EASE.join(",")})`
      }));
      const u = ci(l, {
        borderRadius: `${rh}px`,
        overflow: "hidden",
        ...at(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), a.current = window.setTimeout(() => {
          s ? document.body.style.background = s : document.body.style.removeProperty("background");
        }, qe.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    s
  ]);
}
let to = null;
function gM({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [s, i] = D.useState(() => typeof window < "u" ? window.location.href : ""), l = D.useRef(0), u = D.useCallback(() => {
    if (bd() && to === null && e && !a) {
      to = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: p, innerHeight: g } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-l.current}px`,
        left: `${-p}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const m = g - window.innerHeight;
        m && l.current >= g && (document.body.style.top = `${-(l.current + m)}px`);
      }), 300);
    }
  }, [
    e
  ]), f = D.useCallback(() => {
    if (bd() && to !== null && !a) {
      const p = -parseInt(document.body.style.top, 10), g = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, to), window.requestAnimationFrame(() => {
        if (o && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(g, p);
      }), to = null;
    }
  }, [
    s
  ]);
  return D.useEffect(() => {
    function p() {
      l.current = window.scrollY;
    }
    return p(), window.addEventListener("scroll", p), () => {
      window.removeEventListener("scroll", p);
    };
  }, []), D.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      f();
    }, 500)) : f());
  }, [
    e,
    r,
    s,
    t,
    n,
    u,
    f
  ]), {
    restorePositionSetting: f
  };
}
function hM({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: l = cM, scrollLockTimeout: u = uM, dismissible: f = !0, handleOnly: p = !1, fadeFromIndex: g = a && a.length - 1, activeSnapPoint: m, setActiveSnapPoint: v, fixed: h, modal: w = !0, onClose: x, nested: y, noBodyStyles: b, direction: S = "bottom", defaultOpen: E = !1, disablePreventScroll: R = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: M = !1, repositionInputs: P = !0, onAnimationEnd: j, container: _, autoFocus: k = !1 }) {
  var W, A;
  const [U = !1, G] = ah({
    defaultProp: E,
    prop: e,
    onChange: (ce) => {
      t == null || t(ce), !ce && !y && Ae(), setTimeout(() => {
        j == null || j(ce);
      }, qe.DURATION * 1e3), ce && !w && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), ce || (document.body.style.pointerEvents = "auto");
    }
  }), [F, L] = D.useState(!1), [z, oe] = D.useState(!1), [ae, $] = D.useState(!1), O = D.useRef(null), V = D.useRef(null), B = D.useRef(null), q = D.useRef(null), T = D.useRef(null), Y = D.useRef(!1), J = D.useRef(null), te = D.useRef(0), ne = D.useRef(!1), X = D.useRef(0), K = D.useRef(null), ee = D.useRef(((W = K.current) == null ? void 0 : W.getBoundingClientRect().height) || 0), re = D.useRef(((A = K.current) == null ? void 0 : A.getBoundingClientRect().width) || 0), pe = D.useRef(0), ye = D.useCallback((ce) => {
    a && ce === Te.length - 1 && (V.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ge, activeSnapPointIndex: ue, setActiveSnapPoint: Me, onRelease: Le, snapPointsOffset: Te, onDrag: Ve, shouldFade: rt, getPercentageDragged: st } = fM({
    snapPoints: a,
    activeSnapPointProp: m,
    setActiveSnapPointProp: v,
    drawerRef: K,
    fadeFromIndex: g,
    overlayRef: O,
    onSnapPointChange: ye,
    direction: S,
    container: _,
    snapToSequentialPoint: C
  });
  tM({
    isDisabled: !U || z || !w || ae || !F || !P || !R
  });
  const { restorePositionSetting: Ae } = gM({
    isOpen: U,
    modal: w,
    nested: y,
    hasBeenOpened: F,
    preventScrollRestoration: M,
    noBodyStyles: b
  });
  function Be() {
    return (window.innerWidth - Ki) / window.innerWidth;
  }
  function tn(ce) {
    var Ce, Se;
    !f && !a || K.current && !K.current.contains(ce.target) || (ee.current = ((Ce = K.current) == null ? void 0 : Ce.getBoundingClientRect().height) || 0, re.current = ((Se = K.current) == null ? void 0 : Se.getBoundingClientRect().width) || 0, oe(!0), B.current = /* @__PURE__ */ new Date(), Jg() && window.addEventListener("touchend", () => Y.current = !1, {
      once: !0
    }), ce.target.setPointerCapture(ce.pointerId), te.current = at(S) ? ce.pageY : ce.pageX);
  }
  function Ct(ce, Ce) {
    var Se, Pe;
    let be = ce;
    const je = (Se = window.getSelection()) == null ? void 0 : Se.toString(), Je = K.current ? oa(K.current, S) : null, ie = /* @__PURE__ */ new Date();
    if (be.hasAttribute("data-vaul-no-drag") || be.closest("[data-vaul-no-drag]"))
      return !1;
    if (S === "right" || S === "left")
      return !0;
    if (V.current && ie.getTime() - V.current.getTime() < 500)
      return !1;
    if (Je !== null && (S === "bottom" ? Je > 0 : Je < 0))
      return !0;
    if (je && je.length > 0)
      return !1;
    if (ie.getTime() - ((Pe = T.current) == null ? void 0 : Pe.getTime()) < u && Je === 0 || Ce)
      return T.current = ie, !1;
    for (; be; ) {
      if (be.scrollHeight > be.clientHeight) {
        if (be.scrollTop !== 0)
          return T.current = /* @__PURE__ */ new Date(), !1;
        if (be.getAttribute("role") === "dialog")
          return !0;
      }
      be = be.parentNode;
    }
    return !0;
  }
  function it(ce) {
    if (K.current && z) {
      const Ce = S === "bottom" || S === "right" ? 1 : -1, Se = (te.current - (at(S) ? ce.pageY : ce.pageX)) * Ce, Pe = Se > 0, be = a && !f && !Pe;
      if (be && ue === 0) return;
      const je = Math.abs(Se), Je = document.querySelector("[data-vaul-drawer-wrapper]"), ie = S === "bottom" || S === "top" ? ee.current : re.current;
      let ve = je / ie;
      const Re = st(je, Pe);
      if (Re !== null && (ve = Re), be && ve >= 1 || !Y.current && !Ct(ce.target, Pe)) return;
      if (K.current.classList.add(ui), Y.current = !0, ot(K.current, {
        transition: "none"
      }), ot(O.current, {
        transition: "none"
      }), a && Ve({
        draggedDistance: Se
      }), Pe && !a) {
        const We = iM(Se), vt = Math.min(We * -1, 0) * Ce;
        ot(K.current, {
          transform: at(S) ? `translate3d(0, ${vt}px, 0)` : `translate3d(${vt}px, 0, 0)`
        });
        return;
      }
      const Ke = 1 - ve;
      if ((rt || g && ue === g - 1) && (r == null || r(ce, ve), ot(O.current, {
        opacity: `${Ke}`,
        transition: "none"
      }, !0)), Je && O.current && s) {
        const We = Math.min(Be() + ve * (1 - Be()), 1), vt = 8 - ve * 8, Tt = Math.max(0, 14 - ve * 14);
        ot(Je, {
          borderRadius: `${vt}px`,
          transform: at(S) ? `scale(${We}) translate3d(0, ${Tt}px, 0)` : `scale(${We}) translate3d(${Tt}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const We = je * Ce;
        ot(K.current, {
          transform: at(S) ? `translate3d(0, ${We}px, 0)` : `translate3d(${We}px, 0, 0)`
        });
      }
    }
  }
  D.useEffect(() => {
    var ce;
    function Ce() {
      if (!K.current || !P) return;
      const Se = document.activeElement;
      if (Yi(Se) || ne.current) {
        var Pe;
        const be = ((Pe = window.visualViewport) == null ? void 0 : Pe.height) || 0, je = window.innerHeight;
        let Je = je - be;
        const ie = K.current.getBoundingClientRect().height || 0, ve = ie > je * 0.8;
        pe.current || (pe.current = ie);
        const Re = K.current.getBoundingClientRect().top;
        if (Math.abs(X.current - Je) > 60 && (ne.current = !ne.current), a && a.length > 0 && Te && ue) {
          const Ke = Te[ue] || 0;
          Je += Ke;
        }
        if (X.current = Je, ie > be || ne.current) {
          const Ke = K.current.getBoundingClientRect().height;
          let We = Ke;
          Ke > be && (We = be - (ve ? Re : Ki)), h ? K.current.style.height = `${Ke - Math.max(Je, 0)}px` : K.current.style.height = `${Math.max(We, be - Re)}px`;
        } else
          K.current.style.height = `${pe.current}px`;
        a && a.length > 0 && !ne.current ? K.current.style.bottom = "0px" : K.current.style.bottom = `${Math.max(Je, 0)}px`;
      }
    }
    return (ce = window.visualViewport) == null || ce.addEventListener("resize", Ce), () => {
      var Se;
      return (Se = window.visualViewport) == null ? void 0 : Se.removeEventListener("resize", Ce);
    };
  }, [
    ue,
    a,
    Te
  ]);
  function ht(ce) {
    et(), x == null || x(), ce || G(!1), setTimeout(() => {
      a && Me(a[0]);
    }, qe.DURATION * 1e3);
  }
  function Mt() {
    if (!K.current) return;
    const ce = document.querySelector("[data-vaul-drawer-wrapper]"), Ce = oa(K.current, S);
    ot(K.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`
    }), ot(O.current, {
      transition: `opacity ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      opacity: "1"
    }), s && Ce && Ce > 0 && U && ot(ce, {
      borderRadius: `${rh}px`,
      overflow: "hidden",
      ...at(S) ? {
        transform: `scale(${Be()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Be()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${qe.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${qe.EASE.join(",")})`
    }, !0);
  }
  function et() {
    !z || !K.current || (K.current.classList.remove(ui), Y.current = !1, oe(!1), q.current = /* @__PURE__ */ new Date());
  }
  function dt(ce) {
    if (!z || !K.current) return;
    K.current.classList.remove(ui), Y.current = !1, oe(!1), q.current = /* @__PURE__ */ new Date();
    const Ce = oa(K.current, S);
    if (!Ct(ce.target, !1) || !Ce || Number.isNaN(Ce) || B.current === null) return;
    const Se = q.current.getTime() - B.current.getTime(), Pe = te.current - (at(S) ? ce.pageY : ce.pageX), be = Math.abs(Pe) / Se;
    if (be > 0.05 && ($(!0), setTimeout(() => {
      $(!1);
    }, 200)), a) {
      Le({
        draggedDistance: Pe * (S === "bottom" || S === "right" ? 1 : -1),
        closeDrawer: ht,
        velocity: be,
        dismissible: f
      }), o == null || o(ce, !0);
      return;
    }
    if (S === "bottom" || S === "right" ? Pe > 0 : Pe < 0) {
      Mt(), o == null || o(ce, !0);
      return;
    }
    if (be > nh) {
      ht(), o == null || o(ce, !1);
      return;
    }
    var je;
    const Je = Math.min((je = K.current.getBoundingClientRect().height) != null ? je : 0, window.innerHeight);
    var ie;
    const ve = Math.min((ie = K.current.getBoundingClientRect().width) != null ? ie : 0, window.innerWidth), Re = S === "left" || S === "right";
    if (Math.abs(Ce) >= (Re ? ve : Je) * l) {
      ht(), o == null || o(ce, !1);
      return;
    }
    o == null || o(ce, !0), Mt();
  }
  D.useEffect(() => (U && (ot(document.documentElement, {
    scrollBehavior: "auto"
  }), V.current = /* @__PURE__ */ new Date()), () => {
    sM(document.documentElement, "scrollBehavior");
  }), [
    U
  ]);
  function nn(ce) {
    const Ce = ce ? (window.innerWidth - Kn) / window.innerWidth : 1, Se = ce ? -Kn : 0;
    J.current && window.clearTimeout(J.current), ot(K.current, {
      transition: `transform ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      transform: `scale(${Ce}) translate3d(0, ${Se}px, 0)`
    }), !ce && K.current && (J.current = setTimeout(() => {
      const Pe = oa(K.current, S);
      ot(K.current, {
        transition: "none",
        transform: at(S) ? `translate3d(0, ${Pe}px, 0)` : `translate3d(${Pe}px, 0, 0)`
      });
    }, 500));
  }
  function $t(ce, Ce) {
    if (Ce < 0) return;
    const Se = (window.innerWidth - Kn) / window.innerWidth, Pe = Se + Ce * (1 - Se), be = -Kn + Ce * Kn;
    ot(K.current, {
      transform: at(S) ? `scale(${Pe}) translate3d(0, ${be}px, 0)` : `scale(${Pe}) translate3d(${be}px, 0, 0)`,
      transition: "none"
    });
  }
  function Un(ce, Ce) {
    const Se = at(S) ? window.innerHeight : window.innerWidth, Pe = Ce ? (Se - Kn) / Se : 1, be = Ce ? -Kn : 0;
    Ce && ot(K.current, {
      transition: `transform ${qe.DURATION}s cubic-bezier(${qe.EASE.join(",")})`,
      transform: at(S) ? `scale(${Pe}) translate3d(0, ${be}px, 0)` : `scale(${Pe}) translate3d(${be}px, 0, 0)`
    });
  }
  return /* @__PURE__ */ D.createElement(_o, {
    defaultOpen: E,
    onOpenChange: (ce) => {
      !f && !ce || (ce ? L(!0) : ht(!0), G(ce));
    },
    open: U
  }, /* @__PURE__ */ D.createElement(Zg.Provider, {
    value: {
      activeSnapPoint: ge,
      snapPoints: a,
      setActiveSnapPoint: Me,
      drawerRef: K,
      overlayRef: O,
      onOpenChange: t,
      onPress: tn,
      onRelease: dt,
      onDrag: it,
      dismissible: f,
      handleOnly: p,
      isOpen: U,
      isDragging: z,
      shouldFade: rt,
      closeDrawer: ht,
      onNestedDrag: $t,
      onNestedOpenChange: nn,
      onNestedRelease: Un,
      keyboardIsOpen: ne,
      modal: w,
      snapPointsOffset: Te,
      direction: S,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: b,
      container: _,
      autoFocus: k
    }
  }, n));
}
const sh = /* @__PURE__ */ D.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: s, modal: i } = Yo(), l = eh(t, n), u = r && r.length > 0;
  return i ? /* @__PURE__ */ D.createElement(lr, {
    onMouseUp: o,
    ref: l,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && u ? "true" : "false",
    "data-vaul-snap-points-overlay": s && a ? "true" : "false",
    ...e
  }) : (typeof window < "u" && window.requestAnimationFrame(() => {
    document.body.style.pointerEvents = "auto";
  }), null);
});
sh.displayName = "Drawer.Overlay";
const ih = /* @__PURE__ */ D.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: s, onRelease: i, onDrag: l, keyboardIsOpen: u, snapPointsOffset: f, modal: p, isOpen: g, direction: m, snapPoints: v, container: h, handleOnly: w, autoFocus: x } = Yo(), [y, b] = D.useState(!1), S = eh(o, a), E = D.useRef(null), R = D.useRef(null), C = D.useRef(!1), M = v && v.length > 0;
  mM();
  const P = (_, k, W = 0) => {
    if (C.current) return !0;
    const A = Math.abs(_.y), U = Math.abs(_.x), G = U > A, F = [
      "bottom",
      "right"
    ].includes(k) ? 1 : -1;
    if (k === "left" || k === "right") {
      if (!(_.x * F < 0) && U >= 0 && U <= W)
        return G;
    } else if (!(_.y * F < 0) && A >= 0 && A <= W)
      return !G;
    return C.current = !0, !0;
  };
  D.useEffect(() => {
    M && window.requestAnimationFrame(() => {
      b(!0);
    });
  }, []);
  function j(_) {
    E.current = null, C.current = !1, i(_);
  }
  return /* @__PURE__ */ D.createElement(cr, {
    "data-vaul-drawer-direction": m,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": y ? "true" : "false",
    "data-vaul-snap-points": g && M ? "true" : "false",
    "data-vaul-custom-container": h ? "true" : "false",
    ...r,
    ref: S,
    style: f && f.length > 0 ? {
      "--snap-point-height": `${f[0]}px`,
      ...t
    } : t,
    onPointerDown: (_) => {
      w || (r.onPointerDown == null || r.onPointerDown.call(r, _), E.current = {
        x: _.pageX,
        y: _.pageY
      }, s(_));
    },
    onOpenAutoFocus: (_) => {
      n == null || n(_), x || _.preventDefault();
    },
    onPointerDownOutside: (_) => {
      if (e == null || e(_), !p || _.defaultPrevented) {
        _.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (_) => {
      if (!p) {
        _.preventDefault();
        return;
      }
    },
    onPointerMove: (_) => {
      if (R.current = _, w || (r.onPointerMove == null || r.onPointerMove.call(r, _), !E.current)) return;
      const k = _.pageY - E.current.y, W = _.pageX - E.current.x, A = _.pointerType === "touch" ? 10 : 2;
      P({
        x: W,
        y: k
      }, m, A) ? l(_) : (Math.abs(W) > A || Math.abs(k) > A) && (E.current = null);
    },
    onPointerUp: (_) => {
      r.onPointerUp == null || r.onPointerUp.call(r, _), E.current = null, C.current = !1, i(_);
    },
    onPointerOut: (_) => {
      r.onPointerOut == null || r.onPointerOut.call(r, _), j(R.current);
    },
    onContextMenu: (_) => {
      r.onContextMenu == null || r.onContextMenu.call(r, _), j(R.current);
    }
  });
});
ih.displayName = "Drawer.Content";
const vM = 250, xM = 120, wM = /* @__PURE__ */ D.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: l, dismissible: u, handleOnly: f, isOpen: p, onPress: g, onDrag: m } = Yo(), v = D.useRef(null), h = D.useRef(!1);
  function w() {
    if (h.current) {
      b();
      return;
    }
    window.setTimeout(() => {
      x();
    }, xM);
  }
  function x() {
    if (a || e || h.current) {
      b();
      return;
    }
    if (b(), (!s || s.length === 0) && u) {
      o();
      return;
    }
    if (i === s[s.length - 1] && u) {
      o();
      return;
    }
    const E = s.findIndex((C) => C === i);
    if (E === -1) return;
    const R = s[E + 1];
    l(R);
  }
  function y() {
    v.current = window.setTimeout(() => {
      h.current = !0;
    }, vM);
  }
  function b() {
    window.clearTimeout(v.current), h.current = !1;
  }
  return /* @__PURE__ */ D.createElement("div", {
    onClick: w,
    onPointerCancel: b,
    onPointerDown: (S) => {
      f && g(S), y();
    },
    onPointerMove: (S) => {
      f && m(S);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": p ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ D.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
wM.displayName = "Drawer.Handle";
function yM(e) {
  const t = Yo(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ D.createElement(Mo, {
    container: n,
    ...r
  });
}
const en = {
  Root: hM,
  Content: ih,
  Overlay: sh,
  Trigger: rs,
  Portal: yM,
  Close: ur,
  Title: Lr,
  Description: Fr
}, bM = ({
  shouldScaleBackground: e = !0,
  ...t
}) => /* @__PURE__ */ c.jsx(
  en.Root,
  {
    shouldScaleBackground: e,
    ...t
  }
);
bM.displayName = "Drawer";
const v5 = en.Trigger, CM = en.Portal, x5 = en.Close, lh = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  en.Overlay,
  {
    ref: n,
    className: I("fixed inset-0 z-50 bg-black/80", e),
    ...t
  }
));
lh.displayName = en.Overlay.displayName;
const SM = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(CM, { children: [
  /* @__PURE__ */ c.jsx(lh, {}),
  /* @__PURE__ */ c.jsxs(
    en.Content,
    {
      ref: r,
      className: I(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-slate-200 bg-white    ",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-slate-100  " }),
        t
      ]
    }
  )
] }));
SM.displayName = "DrawerContent";
const RM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I("grid gap-1.5 p-4 text-center sm:text-left", e),
    ...t
  }
);
RM.displayName = "DrawerHeader";
const EM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I("mt-auto flex flex-col gap-2 p-4", e),
    ...t
  }
);
EM.displayName = "DrawerFooter";
const NM = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  en.Title,
  {
    ref: n,
    className: I(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
NM.displayName = en.Title.displayName;
const PM = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  en.Description,
  {
    ref: n,
    className: I("text-sm text-slate-500  ", e),
    ...t
  }
));
PM.displayName = en.Description.displayName;
var ps = "DropdownMenu", [_M, w5] = Fe(
  ps,
  [Go]
), mt = Go(), [MM, ch] = _M(ps), uh = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, l = mt(t), u = d.useRef(null), [f, p] = Ge({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: ps
  });
  return /* @__PURE__ */ c.jsx(
    MM,
    {
      scope: t,
      triggerId: $e(),
      triggerRef: u,
      contentId: $e(),
      open: f,
      onOpenChange: p,
      onOpenToggle: d.useCallback(() => p((g) => !g), [p]),
      modal: i,
      children: /* @__PURE__ */ c.jsx(Ec, { ...l, open: f, onOpenChange: p, dir: r, modal: i, children: n })
    }
  );
};
uh.displayName = ps;
var dh = "DropdownMenuTrigger", Hc = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ch(dh, n), s = mt(n);
    return /* @__PURE__ */ c.jsx(Nc, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: un(t, a.triggerRef),
        onPointerDown: H(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: H(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Hc.displayName = dh;
var TM = "DropdownMenuPortal", fh = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = mt(t);
  return /* @__PURE__ */ c.jsx(Pc, { ...r, ...n });
};
fh.displayName = TM;
var ph = "DropdownMenuContent", mh = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ch(ph, n), a = mt(n), s = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      _c,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (i) => {
          var l;
          s.current || (l = o.triggerRef.current) == null || l.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, (i) => {
          const l = i.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, f = l.button === 2 || u;
          (!o.modal || f) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
mh.displayName = ph;
var DM = "DropdownMenuGroup", gh = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ c.jsx(Mc, { ...o, ...r, ref: t });
  }
);
gh.displayName = DM;
var IM = "DropdownMenuLabel", hh = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ c.jsx(Tc, { ...o, ...r, ref: t });
  }
);
hh.displayName = IM;
var AM = "DropdownMenuItem", vh = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ c.jsx(Dc, { ...o, ...r, ref: t });
  }
);
vh.displayName = AM;
var jM = "DropdownMenuCheckboxItem", xh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(Ic, { ...o, ...r, ref: t });
});
xh.displayName = jM;
var kM = "DropdownMenuRadioGroup", wh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(Ac, { ...o, ...r, ref: t });
});
wh.displayName = kM;
var OM = "DropdownMenuRadioItem", yh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(jc, { ...o, ...r, ref: t });
});
yh.displayName = OM;
var $M = "DropdownMenuItemIndicator", bh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(kc, { ...o, ...r, ref: t });
});
bh.displayName = $M;
var LM = "DropdownMenuSeparator", Ch = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(Oc, { ...o, ...r, ref: t });
});
Ch.displayName = LM;
var FM = "DropdownMenuArrow", zM = d.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
    return /* @__PURE__ */ c.jsx($c, { ...o, ...r, ref: t });
  }
);
zM.displayName = FM;
var VM = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = mt(t), [i, l] = Ge({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ c.jsx(Lc, { ...s, open: i, onOpenChange: l, children: n });
}, BM = "DropdownMenuSubTrigger", Sh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(Fc, { ...o, ...r, ref: t });
});
Sh.displayName = BM;
var HM = "DropdownMenuSubContent", Rh = d.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = mt(n);
  return /* @__PURE__ */ c.jsx(
    zc,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Rh.displayName = HM;
var GM = uh, WM = Hc, Eh = fh, Nh = mh, UM = gh, Ph = hh, _h = vh, Mh = xh, YM = wh, Th = yh, Dh = bh, Ih = Ch, KM = VM, Ah = Sh, jh = Rh;
const kh = GM, qM = WM, y5 = UM, b5 = Eh, XM = KM, C5 = YM, Oh = d.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Ah,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100  ",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ c.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "16",
          height: "16",
          viewBox: "0 0 16 16",
          fill: "none",
          children: /* @__PURE__ */ c.jsx(
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
Oh.displayName = Ah.displayName;
const $h = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jh,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
$h.displayName = jh.displayName;
const Gc = d.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ c.jsx(Eh, { children: /* @__PURE__ */ c.jsx(
  Nh,
  {
    ref: r,
    sideOffset: t,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...n
  }
) }));
Gc.displayName = Nh.displayName;
const ZM = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  _h,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
ZM.displayName = _h.displayName;
const Lh = d.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Mh,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Dh, { children: /* @__PURE__ */ c.jsx($r, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
Lh.displayName = Mh.displayName;
const JM = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Th,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Dh, { children: /* @__PURE__ */ c.jsx(Ja, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
JM.displayName = Th.displayName;
const Fh = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Ph,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
Fh.displayName = Ph.displayName;
const zh = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ih,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-slate-100  ", e),
    ...t
  }
));
zh.displayName = Ih.displayName;
const QM = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "span",
  {
    className: I("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
  }
);
QM.displayName = "DropdownMenuShortcut";
var e3 = "Label", Vh = d.forwardRef((e, t) => /* @__PURE__ */ c.jsx(
  Z.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Vh.displayName = e3;
var Bh = Vh;
const t3 = dr(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Hh = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Bh,
  {
    ref: n,
    className: I(t3(), e),
    ...t
  }
));
Hh.displayName = Bh.displayName;
const S5 = Ty, Gh = d.createContext(
  {}
), R5 = ({
  ...e
}) => /* @__PURE__ */ c.jsx(Gh.Provider, { value: { name: e.name }, children: /* @__PURE__ */ c.jsx(ua, { ...e }) }), ms = () => {
  const e = d.useContext(Gh), t = d.useContext(Wh), { getFieldState: n, formState: r } = Dy(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return {
    id: a,
    name: e.name,
    formItemId: `${a}-form-item`,
    formDescriptionId: `${a}-form-item-description`,
    formMessageId: `${a}-form-item-message`,
    ...o
  };
}, Wh = d.createContext(
  {}
), ga = d.forwardRef(({ className: e, ...t }, n) => {
  const r = d.useId();
  return /* @__PURE__ */ c.jsx(Wh.Provider, { value: { id: r }, children: /* @__PURE__ */ c.jsx("div", { ref: n, className: I("space-y-2", e), ...t }) });
});
ga.displayName = "FormItem";
const ha = d.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = ms();
  return /* @__PURE__ */ c.jsx(
    Hh,
    {
      ref: n,
      className: I(r && "text-red-500  ", "font-semibold", e),
      htmlFor: o,
      ...t
    }
  );
});
ha.displayName = "FormLabel";
const va = d.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: a } = ms();
  return /* @__PURE__ */ c.jsx(
    Pl,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${a}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
va.displayName = "FormControl";
const n3 = d.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ms();
  return /* @__PURE__ */ c.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: I("text-sm text-slate-500  ", e),
      ...t
    }
  );
});
n3.displayName = "FormDescription";
const r3 = d.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: a } = ms(), s = o ? String(o == null ? void 0 : o.message) : t;
  return s ? /* @__PURE__ */ c.jsx(
    "p",
    {
      ref: r,
      id: a,
      className: I("text-sm font-medium text-red-500  ", e),
      ...n,
      children: s
    }
  ) : null;
});
r3.displayName = "FormMessage";
var di, gs = "HoverCard", [Uh, E5] = Fe(gs, [
  gn
]), hs = gn(), [o3, Wc] = Uh(gs), Yh = (e) => {
  const {
    __scopeHoverCard: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    openDelay: s = 700,
    closeDelay: i = 300
  } = e, l = hs(t), u = d.useRef(0), f = d.useRef(0), p = d.useRef(!1), g = d.useRef(!1), [m, v] = Ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: gs
  }), h = d.useCallback(() => {
    clearTimeout(f.current), u.current = window.setTimeout(() => v(!0), s);
  }, [s, v]), w = d.useCallback(() => {
    clearTimeout(u.current), !p.current && !g.current && (f.current = window.setTimeout(() => v(!1), i));
  }, [i, v]), x = d.useCallback(() => v(!1), [v]);
  return d.useEffect(() => () => {
    clearTimeout(u.current), clearTimeout(f.current);
  }, []), /* @__PURE__ */ c.jsx(
    o3,
    {
      scope: t,
      open: m,
      onOpenChange: v,
      onOpen: h,
      onClose: w,
      onDismiss: x,
      hasSelectionRef: p,
      isPointerDownOnContentRef: g,
      children: /* @__PURE__ */ c.jsx(Hr, { ...l, children: n })
    }
  );
};
Yh.displayName = gs;
var Kh = "HoverCardTrigger", qh = d.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = Wc(Kh, n), a = hs(n);
    return /* @__PURE__ */ c.jsx(Gr, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      Z.a,
      {
        "data-state": o.open ? "open" : "closed",
        ...r,
        ref: t,
        onPointerEnter: H(e.onPointerEnter, Oa(o.onOpen)),
        onPointerLeave: H(e.onPointerLeave, Oa(o.onClose)),
        onFocus: H(e.onFocus, o.onOpen),
        onBlur: H(e.onBlur, o.onClose),
        onTouchStart: H(e.onTouchStart, (s) => s.preventDefault())
      }
    ) });
  }
);
qh.displayName = Kh;
var a3 = "HoverCardPortal", [N5, s3] = Uh(a3, {
  forceMount: void 0
}), ka = "HoverCardContent", Xh = d.forwardRef(
  (e, t) => {
    const n = s3(ka, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...o } = e, a = Wc(ka, e.__scopeHoverCard);
    return /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: /* @__PURE__ */ c.jsx(
      i3,
      {
        "data-state": a.open ? "open" : "closed",
        ...o,
        onPointerEnter: H(e.onPointerEnter, Oa(a.onOpen)),
        onPointerLeave: H(e.onPointerLeave, Oa(a.onClose)),
        ref: t
      }
    ) });
  }
);
Xh.displayName = ka;
var i3 = d.forwardRef((e, t) => {
  const {
    __scopeHoverCard: n,
    onEscapeKeyDown: r,
    onPointerDownOutside: o,
    onFocusOutside: a,
    onInteractOutside: s,
    ...i
  } = e, l = Wc(ka, n), u = hs(n), f = d.useRef(null), p = le(t, f), [g, m] = d.useState(!1);
  return d.useEffect(() => {
    if (g) {
      const v = document.body;
      return di = v.style.userSelect || v.style.webkitUserSelect, v.style.userSelect = "none", v.style.webkitUserSelect = "none", () => {
        v.style.userSelect = di, v.style.webkitUserSelect = di;
      };
    }
  }, [g]), d.useEffect(() => {
    if (f.current) {
      const v = () => {
        m(!1), l.isPointerDownOnContentRef.current = !1, setTimeout(() => {
          var w;
          ((w = document.getSelection()) == null ? void 0 : w.toString()) !== "" && (l.hasSelectionRef.current = !0);
        });
      };
      return document.addEventListener("pointerup", v), () => {
        document.removeEventListener("pointerup", v), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !1;
      };
    }
  }, [l.isPointerDownOnContentRef, l.hasSelectionRef]), d.useEffect(() => {
    f.current && u3(f.current).forEach((h) => h.setAttribute("tabindex", "-1"));
  }), /* @__PURE__ */ c.jsx(
    zn,
    {
      asChild: !0,
      disableOutsidePointerEvents: !1,
      onInteractOutside: s,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: H(a, (v) => {
        v.preventDefault();
      }),
      onDismiss: l.onDismiss,
      children: /* @__PURE__ */ c.jsx(
        Lo,
        {
          ...u,
          ...i,
          onPointerDown: H(i.onPointerDown, (v) => {
            v.currentTarget.contains(v.target) && m(!0), l.hasSelectionRef.current = !1, l.isPointerDownOnContentRef.current = !0;
          }),
          ref: p,
          style: {
            ...i.style,
            userSelect: g ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: g ? "text" : void 0,
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          }
        }
      )
    }
  );
}), l3 = "HoverCardArrow", c3 = d.forwardRef(
  (e, t) => {
    const { __scopeHoverCard: n, ...r } = e, o = hs(n);
    return /* @__PURE__ */ c.jsx(Fo, { ...o, ...r, ref: t });
  }
);
c3.displayName = l3;
function Oa(e) {
  return (t) => t.pointerType === "touch" ? void 0 : e();
}
function u3(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
var d3 = Yh, f3 = qh, Zh = Xh;
const P5 = d3, _5 = f3, p3 = d.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(
  Zh,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: I(
      "z-50 w-64 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...r
  }
));
p3.displayName = Zh.displayName;
var m3 = Object.defineProperty, g3 = Object.defineProperties, h3 = Object.getOwnPropertyDescriptors, $a = Object.getOwnPropertySymbols, Jh = Object.prototype.hasOwnProperty, Qh = Object.prototype.propertyIsEnumerable, Rd = (e, t, n) => t in e ? m3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, v3 = (e, t) => {
  for (var n in t || (t = {})) Jh.call(t, n) && Rd(e, n, t[n]);
  if ($a) for (var n of $a(t)) Qh.call(t, n) && Rd(e, n, t[n]);
  return e;
}, x3 = (e, t) => g3(e, h3(t)), w3 = (e, t) => {
  var n = {};
  for (var r in e) Jh.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && $a) for (var r of $a(e)) t.indexOf(r) < 0 && Qh.call(e, r) && (n[r] = e[r]);
  return n;
};
function y3(e) {
  let t = setTimeout(e, 0), n = setTimeout(e, 10), r = setTimeout(e, 50);
  return [t, n, r];
}
function b3(e) {
  let t = d.useRef();
  return d.useEffect(() => {
    t.current = e;
  }), t.current;
}
var C3 = 18, ev = 40, S3 = `${ev}px`, R3 = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");
function E3({ containerRef: e, inputRef: t, pushPasswordManagerStrategy: n, isFocused: r }) {
  let [o, a] = d.useState(!1), [s, i] = d.useState(!1), [l, u] = d.useState(!1), f = d.useMemo(() => n === "none" ? !1 : (n === "increase-width" || n === "experimental-no-flickering") && o && s, [o, s, n]), p = d.useCallback(() => {
    let g = e.current, m = t.current;
    if (!g || !m || l || n === "none") return;
    let v = g, h = v.getBoundingClientRect().left + v.offsetWidth, w = v.getBoundingClientRect().top + v.offsetHeight / 2, x = h - C3, y = w;
    document.querySelectorAll(R3).length === 0 && document.elementFromPoint(x, y) === g || (a(!0), u(!0));
  }, [e, t, l, n]);
  return d.useEffect(() => {
    let g = e.current;
    if (!g || n === "none") return;
    function m() {
      let h = window.innerWidth - g.getBoundingClientRect().right;
      i(h >= ev);
    }
    m();
    let v = setInterval(m, 1e3);
    return () => {
      clearInterval(v);
    };
  }, [e, n]), d.useEffect(() => {
    let g = r || document.activeElement === t.current;
    if (n === "none" || !g) return;
    let m = setTimeout(p, 0), v = setTimeout(p, 2e3), h = setTimeout(p, 5e3), w = setTimeout(() => {
      u(!0);
    }, 6e3);
    return () => {
      clearTimeout(m), clearTimeout(v), clearTimeout(h), clearTimeout(w);
    };
  }, [t, r, n, p]), { hasPWMBadge: o, willPushPWMBadge: f, PWM_BADGE_SPACE_WIDTH: S3 };
}
var tv = d.createContext({}), nv = d.forwardRef((e, t) => {
  var n = e, { value: r, onChange: o, maxLength: a, textAlign: s = "left", pattern: i, placeholder: l, inputMode: u = "numeric", onComplete: f, pushPasswordManagerStrategy: p = "increase-width", pasteTransformer: g, containerClassName: m, noScriptCSSFallback: v = N3, render: h, children: w } = n, x = w3(n, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "render", "children"]), y, b, S, E, R;
  let [C, M] = d.useState(typeof x.defaultValue == "string" ? x.defaultValue : ""), P = r ?? C, j = b3(P), _ = d.useCallback((ee) => {
    o == null || o(ee), M(ee);
  }, [o]), k = d.useMemo(() => i ? typeof i == "string" ? new RegExp(i) : i : null, [i]), W = d.useRef(null), A = d.useRef(null), U = d.useRef({ value: P, onChange: _, isIOS: typeof window < "u" && ((b = (y = window == null ? void 0 : window.CSS) == null ? void 0 : y.supports) == null ? void 0 : b.call(y, "-webkit-touch-callout", "none")) }), G = d.useRef({ prev: [(S = W.current) == null ? void 0 : S.selectionStart, (E = W.current) == null ? void 0 : E.selectionEnd, (R = W.current) == null ? void 0 : R.selectionDirection] });
  d.useImperativeHandle(t, () => W.current, []), d.useEffect(() => {
    let ee = W.current, re = A.current;
    if (!ee || !re) return;
    U.current.value !== ee.value && U.current.onChange(ee.value), G.current.prev = [ee.selectionStart, ee.selectionEnd, ee.selectionDirection];
    function pe() {
      if (document.activeElement !== ee) {
        $(null), V(null);
        return;
      }
      let ue = ee.selectionStart, Me = ee.selectionEnd, Le = ee.selectionDirection, Te = ee.maxLength, Ve = ee.value, rt = G.current.prev, st = -1, Ae = -1, Be;
      if (Ve.length !== 0 && ue !== null && Me !== null) {
        let ht = ue === Me, Mt = ue === Ve.length && Ve.length < Te;
        if (ht && !Mt) {
          let et = ue;
          if (et === 0) st = 0, Ae = 1, Be = "forward";
          else if (et === Te) st = et - 1, Ae = et, Be = "backward";
          else if (Te > 1 && Ve.length > 1) {
            let dt = 0;
            if (rt[0] !== null && rt[1] !== null) {
              Be = et < rt[1] ? "backward" : "forward";
              let nn = rt[0] === rt[1] && rt[0] < Te;
              Be === "backward" && !nn && (dt = -1);
            }
            st = dt + et, Ae = dt + et + 1;
          }
        }
        st !== -1 && Ae !== -1 && st !== Ae && W.current.setSelectionRange(st, Ae, Be);
      }
      let tn = st !== -1 ? st : ue, Ct = Ae !== -1 ? Ae : Me, it = Be ?? Le;
      $(tn), V(Ct), G.current.prev = [tn, Ct, it];
    }
    if (document.addEventListener("selectionchange", pe, { capture: !0 }), pe(), document.activeElement === ee && oe(!0), !document.getElementById("input-otp-style")) {
      let ue = document.createElement("style");
      if (ue.id = "input-otp-style", document.head.appendChild(ue), ue.sheet) {
        let Me = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        no(ue.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }"), no(ue.sheet, `[data-input-otp]:autofill { ${Me} }`), no(ue.sheet, `[data-input-otp]:-webkit-autofill { ${Me} }`), no(ue.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), no(ue.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let ye = () => {
      re && re.style.setProperty("--root-height", `${ee.clientHeight}px`);
    };
    ye();
    let ge = new ResizeObserver(ye);
    return ge.observe(ee), () => {
      document.removeEventListener("selectionchange", pe, { capture: !0 }), ge.disconnect();
    };
  }, []);
  let [F, L] = d.useState(!1), [z, oe] = d.useState(!1), [ae, $] = d.useState(null), [O, V] = d.useState(null);
  d.useEffect(() => {
    y3(() => {
      var ee, re, pe, ye;
      (ee = W.current) == null || ee.dispatchEvent(new Event("input"));
      let ge = (re = W.current) == null ? void 0 : re.selectionStart, ue = (pe = W.current) == null ? void 0 : pe.selectionEnd, Me = (ye = W.current) == null ? void 0 : ye.selectionDirection;
      ge !== null && ue !== null && ($(ge), V(ue), G.current.prev = [ge, ue, Me]);
    });
  }, [P, z]), d.useEffect(() => {
    j !== void 0 && P !== j && j.length < a && P.length === a && (f == null || f(P));
  }, [a, f, j, P]);
  let B = E3({ containerRef: A, inputRef: W, pushPasswordManagerStrategy: p, isFocused: z }), q = d.useCallback((ee) => {
    let re = ee.currentTarget.value.slice(0, a);
    if (re.length > 0 && k && !k.test(re)) {
      ee.preventDefault();
      return;
    }
    typeof j == "string" && re.length < j.length && document.dispatchEvent(new Event("selectionchange")), _(re);
  }, [a, _, j, k]), T = d.useCallback(() => {
    var ee;
    if (W.current) {
      let re = Math.min(W.current.value.length, a - 1), pe = W.current.value.length;
      (ee = W.current) == null || ee.setSelectionRange(re, pe), $(re), V(pe);
    }
    oe(!0);
  }, [a]), Y = d.useCallback((ee) => {
    var re, pe;
    let ye = W.current;
    if (!g && (!U.current.isIOS || !ee.clipboardData || !ye)) return;
    let ge = ee.clipboardData.getData("text/plain"), ue = g ? g(ge) : ge;
    ee.preventDefault();
    let Me = (re = W.current) == null ? void 0 : re.selectionStart, Le = (pe = W.current) == null ? void 0 : pe.selectionEnd, Te = (Me !== Le ? P.slice(0, Me) + ue + P.slice(Le) : P.slice(0, Me) + ue + P.slice(Me)).slice(0, a);
    if (Te.length > 0 && k && !k.test(Te)) return;
    ye.value = Te, _(Te);
    let Ve = Math.min(Te.length, a - 1), rt = Te.length;
    ye.setSelectionRange(Ve, rt), $(Ve), V(rt);
  }, [a, _, k, P]), J = d.useMemo(() => ({ position: "relative", cursor: x.disabled ? "default" : "text", userSelect: "none", WebkitUserSelect: "none", pointerEvents: "none" }), [x.disabled]), te = d.useMemo(() => ({ position: "absolute", inset: 0, width: B.willPushPWMBadge ? `calc(100% + ${B.PWM_BADGE_SPACE_WIDTH})` : "100%", clipPath: B.willPushPWMBadge ? `inset(0 ${B.PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0, height: "100%", display: "flex", textAlign: s, opacity: "1", color: "transparent", pointerEvents: "all", background: "transparent", caretColor: "transparent", border: "0 solid transparent", outline: "0 solid transparent", boxShadow: "none", lineHeight: "1", letterSpacing: "-.5em", fontSize: "var(--root-height)", fontFamily: "monospace", fontVariantNumeric: "tabular-nums" }), [B.PWM_BADGE_SPACE_WIDTH, B.willPushPWMBadge, s]), ne = d.useMemo(() => d.createElement("input", x3(v3({ autoComplete: x.autoComplete || "one-time-code" }, x), { "data-input-otp": !0, "data-input-otp-placeholder-shown": P.length === 0 || void 0, "data-input-otp-mss": ae, "data-input-otp-mse": O, inputMode: u, pattern: k == null ? void 0 : k.source, "aria-placeholder": l, style: te, maxLength: a, value: P, ref: W, onPaste: (ee) => {
    var re;
    Y(ee), (re = x.onPaste) == null || re.call(x, ee);
  }, onChange: q, onMouseOver: (ee) => {
    var re;
    L(!0), (re = x.onMouseOver) == null || re.call(x, ee);
  }, onMouseLeave: (ee) => {
    var re;
    L(!1), (re = x.onMouseLeave) == null || re.call(x, ee);
  }, onFocus: (ee) => {
    var re;
    T(), (re = x.onFocus) == null || re.call(x, ee);
  }, onBlur: (ee) => {
    var re;
    oe(!1), (re = x.onBlur) == null || re.call(x, ee);
  } })), [q, T, Y, u, te, a, O, ae, x, k == null ? void 0 : k.source, P]), X = d.useMemo(() => ({ slots: Array.from({ length: a }).map((ee, re) => {
    var pe;
    let ye = z && ae !== null && O !== null && (ae === O && re === ae || re >= ae && re < O), ge = P[re] !== void 0 ? P[re] : null, ue = P[0] !== void 0 ? null : (pe = l == null ? void 0 : l[re]) != null ? pe : null;
    return { char: ge, placeholderChar: ue, isActive: ye, hasFakeCaret: ye && ge === null };
  }), isFocused: z, isHovering: !x.disabled && F }), [z, F, a, O, ae, x.disabled, P]), K = d.useMemo(() => h ? h(X) : d.createElement(tv.Provider, { value: X }, w), [w, X, h]);
  return d.createElement(d.Fragment, null, v !== null && d.createElement("noscript", null, d.createElement("style", null, v)), d.createElement("div", { ref: A, "data-input-otp-container": !0, style: J, className: m }, K, d.createElement("div", { style: { position: "absolute", inset: 0, pointerEvents: "none" } }, ne)));
});
nv.displayName = "Input";
function no(e, t) {
  try {
    e.insertRule(t);
  } catch {
    console.error("input-otp could not insert CSS rule:", t);
  }
}
var N3 = `
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
const P3 = d.forwardRef(({ className: e, containerClassName: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  nv,
  {
    ref: r,
    containerClassName: I(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: I("disabled:cursor-not-allowed", e),
    ...n
  }
));
P3.displayName = "InputOTP";
const _3 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { ref: n, className: I("flex items-center", e), ...t }));
_3.displayName = "InputOTPGroup";
const M3 = d.forwardRef(({ index: e, className: t, ...n }, r) => {
  const o = d.useContext(tv), { char: a, hasFakeCaret: s, isActive: i } = o.slots[e];
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: r,
      className: I(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-slate-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md  ",
        i && "z-10 ring-2 ring-slate-950 ring-offset-white    ",
        t
      ),
      ...n,
      children: [
        a,
        s && /* @__PURE__ */ c.jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ c.jsx("div", { className: "h-4 w-px animate-caret-blink bg-slate-950 duration-1000  " }) })
      ]
    }
  );
});
M3.displayName = "InputOTPSlot";
const T3 = d.forwardRef(({ ...e }, t) => /* @__PURE__ */ c.jsx("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ c.jsx(Jb, {}) }));
T3.displayName = "InputOTPSeparator";
var Ko = "Menubar", [qi, D3, I3] = Fn(Ko), [rv, M5] = Fe(Ko, [
  I3,
  hn
]), gt = Go(), ov = hn(), [A3, Uc] = rv(Ko), av = d.forwardRef(
  (e, t) => {
    const {
      __scopeMenubar: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      loop: s = !0,
      dir: i,
      ...l
    } = e, u = Zt(i), f = ov(n), [p, g] = Ge({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Ko
    }), [m, v] = d.useState(null);
    return /* @__PURE__ */ c.jsx(
      A3,
      {
        scope: n,
        value: p,
        onMenuOpen: d.useCallback(
          (h) => {
            g(h), v(h);
          },
          [g]
        ),
        onMenuClose: d.useCallback(() => g(""), [g]),
        onMenuToggle: d.useCallback(
          (h) => {
            g((w) => w ? "" : h), v(h);
          },
          [g]
        ),
        dir: u,
        loop: s,
        children: /* @__PURE__ */ c.jsx(qi.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(qi.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
          Vo,
          {
            asChild: !0,
            ...f,
            orientation: "horizontal",
            loop: s,
            dir: u,
            currentTabStopId: m,
            onCurrentTabStopIdChange: v,
            children: /* @__PURE__ */ c.jsx(Z.div, { role: "menubar", ...l, ref: t })
          }
        ) }) })
      }
    );
  }
);
av.displayName = Ko;
var Yc = "MenubarMenu", [j3, sv] = rv(Yc), iv = (e) => {
  const { __scopeMenubar: t, value: n, ...r } = e, o = $e(), a = n || o || "LEGACY_REACT_AUTO_VALUE", s = Uc(Yc, t), i = gt(t), l = d.useRef(null), u = d.useRef(!1), f = s.value === a;
  return d.useEffect(() => {
    f || (u.current = !1);
  }, [f]), /* @__PURE__ */ c.jsx(
    j3,
    {
      scope: t,
      value: a,
      triggerId: $e(),
      triggerRef: l,
      contentId: $e(),
      wasKeyboardTriggerOpenRef: u,
      children: /* @__PURE__ */ c.jsx(
        Ec,
        {
          ...i,
          open: f,
          onOpenChange: (p) => {
            p || s.onMenuClose();
          },
          modal: !1,
          dir: s.dir,
          ...r
        }
      )
    }
  );
};
iv.displayName = Yc;
var Xi = "MenubarTrigger", lv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, disabled: r = !1, ...o } = e, a = ov(n), s = gt(n), i = Uc(Xi, n), l = sv(Xi, n), u = d.useRef(null), f = le(t, u, l.triggerRef), [p, g] = d.useState(!1), m = i.value === l.value;
    return /* @__PURE__ */ c.jsx(qi.ItemSlot, { scope: n, value: l.value, disabled: r, children: /* @__PURE__ */ c.jsx(
      Bo,
      {
        asChild: !0,
        ...a,
        focusable: !r,
        tabStopId: l.value,
        children: /* @__PURE__ */ c.jsx(Nc, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
          Z.button,
          {
            type: "button",
            role: "menuitem",
            id: l.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": m,
            "aria-controls": m ? l.contentId : void 0,
            "data-highlighted": p ? "" : void 0,
            "data-state": m ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: f,
            onPointerDown: H(e.onPointerDown, (v) => {
              !r && v.button === 0 && v.ctrlKey === !1 && (i.onMenuOpen(l.value), m || v.preventDefault());
            }),
            onPointerEnter: H(e.onPointerEnter, () => {
              var h;
              !!i.value && !m && (i.onMenuOpen(l.value), (h = u.current) == null || h.focus());
            }),
            onKeyDown: H(e.onKeyDown, (v) => {
              r || (["Enter", " "].includes(v.key) && i.onMenuToggle(l.value), v.key === "ArrowDown" && i.onMenuOpen(l.value), ["Enter", " ", "ArrowDown"].includes(v.key) && (l.wasKeyboardTriggerOpenRef.current = !0, v.preventDefault()));
            }),
            onFocus: H(e.onFocus, () => g(!0)),
            onBlur: H(e.onBlur, () => g(!1))
          }
        ) })
      }
    ) });
  }
);
lv.displayName = Xi;
var k3 = "MenubarPortal", cv = (e) => {
  const { __scopeMenubar: t, ...n } = e, r = gt(t);
  return /* @__PURE__ */ c.jsx(Pc, { ...r, ...n });
};
cv.displayName = k3;
var Zi = "MenubarContent", uv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, align: r = "start", ...o } = e, a = gt(n), s = Uc(Zi, n), i = sv(Zi, n), l = D3(n), u = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      _c,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        "data-radix-menubar-content": "",
        ...a,
        ...o,
        ref: t,
        align: r,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (f) => {
          var g;
          !!!s.value && !u.current && ((g = i.triggerRef.current) == null || g.focus()), u.current = !1, f.preventDefault();
        }),
        onFocusOutside: H(e.onFocusOutside, (f) => {
          const p = f.target;
          l().some((m) => {
            var v;
            return (v = m.ref.current) == null ? void 0 : v.contains(p);
          }) && f.preventDefault();
        }),
        onInteractOutside: H(e.onInteractOutside, () => {
          u.current = !0;
        }),
        onEntryFocus: (f) => {
          i.wasKeyboardTriggerOpenRef.current || f.preventDefault();
        },
        onKeyDown: H(
          e.onKeyDown,
          (f) => {
            if (["ArrowRight", "ArrowLeft"].includes(f.key)) {
              const p = f.target, g = p.hasAttribute("data-radix-menubar-subtrigger"), m = p.closest("[data-radix-menubar-content]") !== f.currentTarget, h = (s.dir === "rtl" ? "ArrowRight" : "ArrowLeft") === f.key;
              if (!h && g || m && h) return;
              let y = l().filter((E) => !E.disabled).map((E) => E.value);
              h && y.reverse();
              const b = y.indexOf(i.value);
              y = s.loop ? K3(y, b + 1) : y.slice(b + 1);
              const [S] = y;
              S && s.onMenuOpen(S);
            }
          },
          { checkForDefaultPrevented: !1 }
        ),
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
uv.displayName = Zi;
var O3 = "MenubarGroup", dv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Mc, { ...o, ...r, ref: t });
  }
);
dv.displayName = O3;
var $3 = "MenubarLabel", fv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Tc, { ...o, ...r, ref: t });
  }
);
fv.displayName = $3;
var L3 = "MenubarItem", pv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Dc, { ...o, ...r, ref: t });
  }
);
pv.displayName = L3;
var F3 = "MenubarCheckboxItem", mv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Ic, { ...o, ...r, ref: t });
  }
);
mv.displayName = F3;
var z3 = "MenubarRadioGroup", gv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Ac, { ...o, ...r, ref: t });
  }
);
gv.displayName = z3;
var V3 = "MenubarRadioItem", hv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(jc, { ...o, ...r, ref: t });
  }
);
hv.displayName = V3;
var B3 = "MenubarItemIndicator", vv = d.forwardRef((e, t) => {
  const { __scopeMenubar: n, ...r } = e, o = gt(n);
  return /* @__PURE__ */ c.jsx(kc, { ...o, ...r, ref: t });
});
vv.displayName = B3;
var H3 = "MenubarSeparator", xv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(Oc, { ...o, ...r, ref: t });
  }
);
xv.displayName = H3;
var G3 = "MenubarArrow", W3 = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx($c, { ...o, ...r, ref: t });
  }
);
W3.displayName = G3;
var wv = "MenubarSub", yv = (e) => {
  const { __scopeMenubar: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = gt(t), [i, l] = Ge({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: wv
  });
  return /* @__PURE__ */ c.jsx(Lc, { ...s, open: i, onOpenChange: l, children: n });
};
yv.displayName = wv;
var U3 = "MenubarSubTrigger", bv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(
      Fc,
      {
        "data-radix-menubar-subtrigger": "",
        ...o,
        ...r,
        ref: t
      }
    );
  }
);
bv.displayName = U3;
var Y3 = "MenubarSubContent", Cv = d.forwardRef(
  (e, t) => {
    const { __scopeMenubar: n, ...r } = e, o = gt(n);
    return /* @__PURE__ */ c.jsx(
      zc,
      {
        ...o,
        "data-radix-menubar-content": "",
        ...r,
        ref: t,
        style: {
          ...e.style,
          "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
          "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
          "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Cv.displayName = Y3;
function K3(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Sv = av, q3 = iv, Rv = lv, Ev = cv, Nv = uv, X3 = dv, Pv = fv, _v = pv, Mv = mv, Z3 = gv, Tv = hv, Dv = vv, Iv = xv, J3 = yv, Av = bv, jv = Cv;
const T5 = q3, D5 = X3, I5 = Ev, A5 = J3, j5 = Z3, Q3 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Sv,
  {
    ref: n,
    className: I(
      "flex h-10 items-center space-x-1 rounded-md border border-slate-200 bg-white p-1    ",
      e
    ),
    ...t
  }
));
Q3.displayName = Sv.displayName;
const eT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Rv,
  {
    ref: n,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      e
    ),
    ...t
  }
));
eT.displayName = Rv.displayName;
const tT = d.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Av,
  {
    ref: o,
    className: I(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900        ",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ c.jsx(Za, { className: "ml-auto h-4 w-4" })
    ]
  }
));
tT.displayName = Av.displayName;
const nT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  jv,
  {
    ref: n,
    className: I(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...t
  }
));
nT.displayName = jv.displayName;
const rT = d.forwardRef(
  ({ className: e, align: t = "start", alignOffset: n = -4, sideOffset: r = 8, ...o }, a) => /* @__PURE__ */ c.jsx(Ev, { children: /* @__PURE__ */ c.jsx(
    Nv,
    {
      ref: a,
      align: t,
      alignOffset: n,
      sideOffset: r,
      className: I(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
        e
      ),
      ...o
    }
  ) })
);
rT.displayName = Nv.displayName;
const oT = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  _v,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      t && "pl-8",
      e
    ),
    ...n
  }
));
oT.displayName = _v.displayName;
const aT = d.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Mv,
  {
    ref: o,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Dv, { children: /* @__PURE__ */ c.jsx($r, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
aT.displayName = Mv.displayName;
const sT = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  Tv,
  {
    ref: r,
    className: I(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50    ",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(Dv, { children: /* @__PURE__ */ c.jsx(Ja, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
sT.displayName = Tv.displayName;
const iT = d.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ c.jsx(
  Pv,
  {
    ref: r,
    className: I(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
iT.displayName = Pv.displayName;
const lT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Iv,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-slate-100  ", e),
    ...t
  }
));
lT.displayName = Iv.displayName;
const cT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "span",
  {
    className: I(
      "ml-auto text-xs tracking-widest text-slate-500  ",
      e
    ),
    ...t
  }
);
cT.displayname = "MenubarShortcut";
var kv = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), uT = "VisuallyHidden", Ov = d.forwardRef(
  (e, t) => /* @__PURE__ */ c.jsx(
    Z.span,
    {
      ...e,
      ref: t,
      style: { ...kv, ...e.style }
    }
  )
);
Ov.displayName = uT;
var $v = Ov, pr = "NavigationMenu", [Kc, Lv, dT] = Fn(pr), [Ji, fT, pT] = Fn(pr), [qc, k5] = Fe(
  pr,
  [dT, pT]
), [mT, zt] = qc(pr), [gT, hT] = qc(pr), Fv = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      delayDuration: s = 200,
      skipDelayDuration: i = 300,
      orientation: l = "horizontal",
      dir: u,
      ...f
    } = e, [p, g] = d.useState(null), m = le(t, (P) => g(P)), v = Zt(u), h = d.useRef(0), w = d.useRef(0), x = d.useRef(0), [y, b] = d.useState(!0), [S, E] = Ge({
      prop: r,
      onChange: (P) => {
        const j = P !== "", _ = i > 0;
        j ? (window.clearTimeout(x.current), _ && b(!1)) : (window.clearTimeout(x.current), x.current = window.setTimeout(
          () => b(!0),
          i
        )), o == null || o(P);
      },
      defaultProp: a ?? "",
      caller: pr
    }), R = d.useCallback(() => {
      window.clearTimeout(w.current), w.current = window.setTimeout(() => E(""), 150);
    }, [E]), C = d.useCallback(
      (P) => {
        window.clearTimeout(w.current), E(P);
      },
      [E]
    ), M = d.useCallback(
      (P) => {
        S === P ? window.clearTimeout(w.current) : h.current = window.setTimeout(() => {
          window.clearTimeout(w.current), E(P);
        }, s);
      },
      [S, E, s]
    );
    return d.useEffect(() => () => {
      window.clearTimeout(h.current), window.clearTimeout(w.current), window.clearTimeout(x.current);
    }, []), /* @__PURE__ */ c.jsx(
      zv,
      {
        scope: n,
        isRootMenu: !0,
        value: S,
        dir: v,
        orientation: l,
        rootNavigationMenu: p,
        onTriggerEnter: (P) => {
          window.clearTimeout(h.current), y ? M(P) : C(P);
        },
        onTriggerLeave: () => {
          window.clearTimeout(h.current), R();
        },
        onContentEnter: () => window.clearTimeout(w.current),
        onContentLeave: R,
        onItemSelect: (P) => {
          E((j) => j === P ? "" : P);
        },
        onItemDismiss: () => E(""),
        children: /* @__PURE__ */ c.jsx(
          Z.nav,
          {
            "aria-label": "Main",
            "data-orientation": l,
            dir: v,
            ...f,
            ref: m
          }
        )
      }
    );
  }
);
Fv.displayName = pr;
var Qi = "NavigationMenuSub", vT = d.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      ...i
    } = e, l = zt(Qi, n), [u, f] = Ge({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Qi
    });
    return /* @__PURE__ */ c.jsx(
      zv,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: l.dir,
        orientation: s,
        rootNavigationMenu: l.rootNavigationMenu,
        onTriggerEnter: (p) => f(p),
        onItemSelect: (p) => f(p),
        onItemDismiss: () => f(""),
        children: /* @__PURE__ */ c.jsx(Z.div, { "data-orientation": s, ...i, ref: t })
      }
    );
  }
);
vT.displayName = Qi;
var zv = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: a,
    children: s,
    value: i,
    onItemSelect: l,
    onItemDismiss: u,
    onTriggerEnter: f,
    onTriggerLeave: p,
    onContentEnter: g,
    onContentLeave: m
  } = e, [v, h] = d.useState(null), [w, x] = d.useState(/* @__PURE__ */ new Map()), [y, b] = d.useState(null);
  return /* @__PURE__ */ c.jsx(
    mT,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: i,
      previousValue: zr(i),
      baseId: $e(),
      dir: o,
      orientation: a,
      viewport: v,
      onViewportChange: h,
      indicatorTrack: y,
      onIndicatorTrackChange: b,
      onTriggerEnter: Oe(f),
      onTriggerLeave: Oe(p),
      onContentEnter: Oe(g),
      onContentLeave: Oe(m),
      onItemSelect: Oe(l),
      onItemDismiss: Oe(u),
      onViewportContentChange: d.useCallback((S, E) => {
        x((R) => (R.set(S, E), new Map(R)));
      }, []),
      onViewportContentRemove: d.useCallback((S) => {
        x((E) => E.has(S) ? (E.delete(S), new Map(E)) : E);
      }, []),
      children: /* @__PURE__ */ c.jsx(Kc.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(gT, { scope: t, items: w, children: s }) })
    }
  );
}, Vv = "NavigationMenuList", Bv = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(Vv, n), a = /* @__PURE__ */ c.jsx(Z.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ c.jsx(Z.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ c.jsx(Kc.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ c.jsx(Jv, { asChild: !0, children: a }) : a }) });
  }
);
Bv.displayName = Vv;
var Hv = "NavigationMenuItem", [xT, Gv] = qc(Hv), Wv = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, a = $e(), s = r || a || "LEGACY_REACT_AUTO_VALUE", i = d.useRef(null), l = d.useRef(null), u = d.useRef(null), f = d.useRef(() => {
    }), p = d.useRef(!1), g = d.useCallback((v = "start") => {
      if (i.current) {
        f.current();
        const h = tl(i.current);
        h.length && Jc(v === "start" ? h : h.reverse());
      }
    }, []), m = d.useCallback(() => {
      if (i.current) {
        const v = tl(i.current);
        v.length && (f.current = ET(v));
      }
    }, []);
    return /* @__PURE__ */ c.jsx(
      xT,
      {
        scope: n,
        value: s,
        triggerRef: l,
        contentRef: i,
        focusProxyRef: u,
        wasEscapeCloseRef: p,
        onEntryKeyDown: g,
        onFocusProxyEnter: g,
        onRootContentClose: m,
        onContentFocusOutside: m,
        children: /* @__PURE__ */ c.jsx(Z.li, { ...o, ref: t })
      }
    );
  }
);
Wv.displayName = Hv;
var el = "NavigationMenuTrigger", Uv = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, a = zt(el, e.__scopeNavigationMenu), s = Gv(el, e.__scopeNavigationMenu), i = d.useRef(null), l = le(i, s.triggerRef, t), u = e0(a.baseId, s.value), f = t0(a.baseId, s.value), p = d.useRef(!1), g = d.useRef(!1), m = s.value === a.value;
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(Kc.ItemSlot, { scope: n, value: s.value, children: /* @__PURE__ */ c.jsx(Qv, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Qc(m),
        "aria-expanded": m,
        "aria-controls": f,
        ...o,
        ref: l,
        onPointerEnter: H(e.onPointerEnter, () => {
          g.current = !1, s.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: H(
          e.onPointerMove,
          La(() => {
            r || g.current || s.wasEscapeCloseRef.current || p.current || (a.onTriggerEnter(s.value), p.current = !0);
          })
        ),
        onPointerLeave: H(
          e.onPointerLeave,
          La(() => {
            r || (a.onTriggerLeave(), p.current = !1);
          })
        ),
        onClick: H(e.onClick, () => {
          a.onItemSelect(s.value), g.current = m;
        }),
        onKeyDown: H(e.onKeyDown, (v) => {
          const w = { horizontal: "ArrowDown", vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[a.orientation];
          m && v.key === w && (s.onEntryKeyDown(), v.preventDefault());
        })
      }
    ) }) }),
    m && /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        $v,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: s.focusProxyRef,
          onFocus: (v) => {
            const h = s.contentRef.current, w = v.relatedTarget, x = w === i.current, y = h == null ? void 0 : h.contains(w);
            (x || !y) && s.onFocusProxyEnter(x ? "start" : "end");
          }
        }
      ),
      a.viewport && /* @__PURE__ */ c.jsx("span", { "aria-owns": f })
    ] })
  ] });
});
Uv.displayName = el;
var wT = "NavigationMenuLink", Ed = "navigationMenu.linkSelect", Yv = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...a } = e;
    return /* @__PURE__ */ c.jsx(Qv, { asChild: !0, children: /* @__PURE__ */ c.jsx(
      Z.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...a,
        ref: t,
        onClick: H(
          e.onClick,
          (s) => {
            const i = s.target, l = new CustomEvent(Ed, {
              bubbles: !0,
              cancelable: !0
            });
            if (i.addEventListener(Ed, (u) => o == null ? void 0 : o(u), { once: !0 }), Sa(i, l), !l.defaultPrevented && !s.metaKey) {
              const u = new CustomEvent(xa, {
                bubbles: !0,
                cancelable: !0
              });
              Sa(i, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Yv.displayName = wT;
var Xc = "NavigationMenuIndicator", Kv = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Xc, e.__scopeNavigationMenu), a = !!o.value;
  return o.indicatorTrack ? Rl.createPortal(
    /* @__PURE__ */ c.jsx(Ye, { present: n || a, children: /* @__PURE__ */ c.jsx(yT, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
Kv.displayName = Xc;
var yT = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = zt(Xc, n), a = Lv(n), [s, i] = d.useState(
    null
  ), [l, u] = d.useState(null), f = o.orientation === "horizontal", p = !!o.value;
  d.useEffect(() => {
    var h;
    const v = (h = a().find((w) => w.value === o.value)) == null ? void 0 : h.ref.current;
    v && i(v);
  }, [a, o.value]);
  const g = () => {
    s && u({
      size: f ? s.offsetWidth : s.offsetHeight,
      offset: f ? s.offsetLeft : s.offsetTop
    });
  };
  return nl(s, g), nl(o.indicatorTrack, g), l ? /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      "data-state": p ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...f ? {
          left: 0,
          width: l.size + "px",
          transform: `translateX(${l.offset}px)`
        } : {
          top: 0,
          height: l.size + "px",
          transform: `translateY(${l.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Ir = "NavigationMenuContent", qv = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = zt(Ir, e.__scopeNavigationMenu), a = Gv(Ir, e.__scopeNavigationMenu), s = le(a.contentRef, t), i = a.value === o.value, l = {
    value: a.value,
    triggerRef: a.triggerRef,
    focusProxyRef: a.focusProxyRef,
    wasEscapeCloseRef: a.wasEscapeCloseRef,
    onContentFocusOutside: a.onContentFocusOutside,
    onRootContentClose: a.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ c.jsx(bT, { forceMount: n, ...l, ref: s }) : /* @__PURE__ */ c.jsx(Ye, { present: n || i, children: /* @__PURE__ */ c.jsx(
    Xv,
    {
      "data-state": Qc(i),
      ...l,
      ref: s,
      onPointerEnter: H(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: H(
        e.onPointerLeave,
        La(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !i && o.isRootMenu ? "none" : void 0,
        ...l.style
      }
    }
  ) });
});
qv.displayName = Ir;
var bT = d.forwardRef((e, t) => {
  const n = zt(Ir, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ue(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ue(() => () => o(e.value), [e.value, o]), null;
}), xa = "navigationMenu.rootContentDismiss", Xv = d.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: a,
    wasEscapeCloseRef: s,
    onRootContentClose: i,
    onContentFocusOutside: l,
    ...u
  } = e, f = zt(Ir, n), p = d.useRef(null), g = le(p, t), m = e0(f.baseId, r), v = t0(f.baseId, r), h = Lv(n), w = d.useRef(null), { onItemDismiss: x } = f;
  d.useEffect(() => {
    const b = p.current;
    if (f.isRootMenu && b) {
      const S = () => {
        var E;
        x(), i(), b.contains(document.activeElement) && ((E = o.current) == null || E.focus());
      };
      return b.addEventListener(xa, S), () => b.removeEventListener(xa, S);
    }
  }, [f.isRootMenu, e.value, o, x, i]);
  const y = d.useMemo(() => {
    const S = h().map((j) => j.value);
    f.dir === "rtl" && S.reverse();
    const E = S.indexOf(f.value), R = S.indexOf(f.previousValue), C = r === f.value, M = R === S.indexOf(r);
    if (!C && !M) return w.current;
    const P = (() => {
      if (E !== R) {
        if (C && R !== -1) return E > R ? "from-end" : "from-start";
        if (M && E !== -1) return E > R ? "to-start" : "to-end";
      }
      return null;
    })();
    return w.current = P, P;
  }, [f.previousValue, f.value, f.dir, h, r]);
  return /* @__PURE__ */ c.jsx(Jv, { asChild: !0, children: /* @__PURE__ */ c.jsx(
    zn,
    {
      id: v,
      "aria-labelledby": m,
      "data-motion": y,
      "data-orientation": f.orientation,
      ...u,
      ref: g,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var S;
        const b = new Event(xa, {
          bubbles: !0,
          cancelable: !0
        });
        (S = p.current) == null || S.dispatchEvent(b);
      },
      onFocusOutside: H(e.onFocusOutside, (b) => {
        var E;
        l();
        const S = b.target;
        (E = f.rootNavigationMenu) != null && E.contains(S) && b.preventDefault();
      }),
      onPointerDownOutside: H(e.onPointerDownOutside, (b) => {
        var C;
        const S = b.target, E = h().some((M) => {
          var P;
          return (P = M.ref.current) == null ? void 0 : P.contains(S);
        }), R = f.isRootMenu && ((C = f.viewport) == null ? void 0 : C.contains(S));
        (E || R || !f.isRootMenu) && b.preventDefault();
      }),
      onKeyDown: H(e.onKeyDown, (b) => {
        var R;
        const S = b.altKey || b.ctrlKey || b.metaKey;
        if (b.key === "Tab" && !S) {
          const C = tl(b.currentTarget), M = document.activeElement, P = C.findIndex((k) => k === M), _ = b.shiftKey ? C.slice(0, P).reverse() : C.slice(P + 1, C.length);
          Jc(_) ? b.preventDefault() : (R = a.current) == null || R.focus();
        }
      }),
      onEscapeKeyDown: H(e.onEscapeKeyDown, (b) => {
        s.current = !0;
      })
    }
  ) });
}), Zc = "NavigationMenuViewport", Zv = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, a = !!zt(Zc, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ c.jsx(Ye, { present: n || a, children: /* @__PURE__ */ c.jsx(CT, { ...r, ref: t }) });
});
Zv.displayName = Zc;
var CT = d.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, a = zt(Zc, n), s = le(t, a.onViewportChange), i = hT(
    Ir,
    e.__scopeNavigationMenu
  ), [l, u] = d.useState(null), [f, p] = d.useState(null), g = l ? (l == null ? void 0 : l.width) + "px" : void 0, m = l ? (l == null ? void 0 : l.height) + "px" : void 0, v = !!a.value, h = v ? a.value : a.previousValue;
  return nl(f, () => {
    f && u({ width: f.offsetWidth, height: f.offsetHeight });
  }), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-state": Qc(v),
      "data-orientation": a.orientation,
      ...o,
      ref: s,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !v && a.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": g,
        "--radix-navigation-menu-viewport-height": m,
        ...o.style
      },
      onPointerEnter: H(e.onPointerEnter, a.onContentEnter),
      onPointerLeave: H(e.onPointerLeave, La(a.onContentLeave)),
      children: Array.from(i.items).map(([x, { ref: y, forceMount: b, ...S }]) => {
        const E = h === x;
        return /* @__PURE__ */ c.jsx(Ye, { present: b || E, children: /* @__PURE__ */ c.jsx(
          Xv,
          {
            ...S,
            ref: un(y, (R) => {
              E && R && p(R);
            })
          }
        ) }, x);
      })
    }
  );
}), ST = "FocusGroup", Jv = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = zt(ST, n);
    return /* @__PURE__ */ c.jsx(Ji.Provider, { scope: n, children: /* @__PURE__ */ c.jsx(Ji.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(Z.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Nd = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], RT = "FocusGroupItem", Qv = d.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = fT(n), a = zt(RT, n);
    return /* @__PURE__ */ c.jsx(Ji.ItemSlot, { scope: n, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        ...r,
        ref: t,
        onKeyDown: H(e.onKeyDown, (s) => {
          if (["Home", "End", ...Nd].includes(s.key)) {
            let l = o().map((p) => p.ref.current);
            if ([a.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(s.key) && l.reverse(), Nd.includes(s.key)) {
              const p = l.indexOf(s.currentTarget);
              l = l.slice(p + 1);
            }
            setTimeout(() => Jc(l)), s.preventDefault();
          }
        })
      }
    ) });
  }
);
function tl(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function ET(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function nl(e, t) {
  const n = Oe(t);
  Ue(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Qc(e) {
  return e ? "open" : "closed";
}
function e0(e, t) {
  return `${e}-trigger-${t}`;
}
function t0(e, t) {
  return `${e}-content-${t}`;
}
function La(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var n0 = Fv, r0 = Bv, NT = Wv, o0 = Uv, PT = Yv, a0 = Kv, s0 = qv, i0 = Zv;
const _T = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  n0,
  {
    ref: r,
    className: I(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ c.jsx(l0, {})
    ]
  }
));
_T.displayName = n0.displayName;
const MT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  r0,
  {
    ref: n,
    className: I(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      e
    ),
    ...t
  }
));
MT.displayName = r0.displayName;
const O5 = NT, TT = dr(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50              "
), DT = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  o0,
  {
    ref: r,
    className: I(TT(), "group", e),
    ...n,
    children: [
      t,
      "",
      /* @__PURE__ */ c.jsx(
        Ol,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        }
      )
    ]
  }
));
DT.displayName = o0.displayName;
const IT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  s0,
  {
    ref: n,
    className: I(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
      e
    ),
    ...t
  }
));
IT.displayName = s0.displayName;
const $5 = PT, l0 = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { className: I("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ c.jsx(
  i0,
  {
    className: I(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-slate-200 bg-white text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]      ",
      e
    ),
    ref: n,
    ...t
  }
) }));
l0.displayName = i0.displayName;
const AT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  a0,
  {
    ref: n,
    className: I(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      e
    ),
    ...t,
    children: /* @__PURE__ */ c.jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-slate-200 shadow-md  " })
  }
));
AT.displayName = a0.displayName;
const jT = ({ className: e, ...t }) => /* @__PURE__ */ c.jsx(
  "nav",
  {
    role: "navigation",
    "aria-label": "pagination",
    className: I("mx-auto flex w-full justify-center", e),
    ...t
  }
);
jT.displayName = "Pagination";
const kT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "ul",
  {
    ref: n,
    className: I("flex flex-row items-center gap-1", e),
    ...t
  }
));
kT.displayName = "PaginationContent";
const OT = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("li", { ref: n, className: I("", e), ...t }));
OT.displayName = "PaginationItem";
const eu = ({
  className: e,
  isActive: t,
  size: n = "icon",
  ...r
}) => /* @__PURE__ */ c.jsx(
  "a",
  {
    "aria-current": t ? "page" : void 0,
    className: I(
      Mr({
        variant: t ? "outline" : "default",
        size: n
      }),
      e
    ),
    ...r
  }
);
eu.displayName = "PaginationLink";
const $T = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsxs(
  eu,
  {
    "aria-label": "Go to previous page",
    size: "default",
    className: I("gap-1 pl-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ c.jsx(Pf, { className: "h-4 w-4" }),
      /* @__PURE__ */ c.jsx("span", { children: "Previous" })
    ]
  }
);
$T.displayName = "PaginationPrevious";
const LT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsxs(
  eu,
  {
    "aria-label": "Go to next page",
    size: "default",
    className: I("gap-1 pr-2.5", e),
    ...t,
    children: [
      /* @__PURE__ */ c.jsx("span", { children: "Next" }),
      /* @__PURE__ */ c.jsx(Za, { className: "h-4 w-4" })
    ]
  }
);
LT.displayName = "PaginationNext";
const FT = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsxs(
  "span",
  {
    "aria-hidden": !0,
    className: I("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ c.jsx(_f, { className: "h-4 w-4" }),
      /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "More pages" })
    ]
  }
);
FT.displayName = "PaginationEllipsis";
var vs = "Popover", [c0, L5] = Fe(vs, [
  gn
]), qo = gn(), [zT, Bn] = c0(vs), u0 = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = qo(t), l = d.useRef(null), [u, f] = d.useState(!1), [p, g] = Ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: vs
  });
  return /* @__PURE__ */ c.jsx(Hr, { ...i, children: /* @__PURE__ */ c.jsx(
    zT,
    {
      scope: t,
      contentId: $e(),
      triggerRef: l,
      open: p,
      onOpenChange: g,
      onOpenToggle: d.useCallback(() => g((m) => !m), [g]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: d.useCallback(() => f(!0), []),
      onCustomAnchorRemove: d.useCallback(() => f(!1), []),
      modal: s,
      children: n
    }
  ) });
};
u0.displayName = vs;
var d0 = "PopoverAnchor", VT = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(d0, n), a = qo(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return d.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ c.jsx(Gr, { ...a, ...r, ref: t });
  }
);
VT.displayName = d0;
var f0 = "PopoverTrigger", p0 = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(f0, n), a = qo(n), s = le(t, o.triggerRef), i = /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": x0(o.open),
        ...r,
        ref: s,
        onClick: H(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ c.jsx(Gr, { asChild: !0, ...a, children: i });
  }
);
p0.displayName = f0;
var tu = "PopoverPortal", [BT, HT] = c0(tu, {
  forceMount: void 0
}), m0 = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Bn(tu, t);
  return /* @__PURE__ */ c.jsx(BT, { scope: t, forceMount: n, children: /* @__PURE__ */ c.jsx(Ye, { present: n || a.open, children: /* @__PURE__ */ c.jsx(No, { asChild: !0, container: o, children: r }) }) });
};
m0.displayName = tu;
var Ar = "PopoverContent", g0 = d.forwardRef(
  (e, t) => {
    const n = HT(Ar, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Bn(Ar, e.__scopePopover);
    return /* @__PURE__ */ c.jsx(Ye, { present: r || a.open, children: a.modal ? /* @__PURE__ */ c.jsx(WT, { ...o, ref: t }) : /* @__PURE__ */ c.jsx(UT, { ...o, ref: t }) });
  }
);
g0.displayName = Ar;
var GT = /* @__PURE__ */ An("PopoverContent.RemoveScroll"), WT = d.forwardRef(
  (e, t) => {
    const n = Bn(Ar, e.__scopePopover), r = d.useRef(null), o = le(t, r), a = d.useRef(!1);
    return d.useEffect(() => {
      const s = r.current;
      if (s) return ts(s);
    }, []), /* @__PURE__ */ c.jsx(Po, { as: GT, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
      h0,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: H(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), a.current || (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: H(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0, u = i.button === 2 || l;
            a.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: H(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), UT = d.forwardRef(
  (e, t) => {
    const n = Bn(Ar, e.__scopePopover), r = d.useRef(!1), o = d.useRef(!1);
    return /* @__PURE__ */ c.jsx(
      h0,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var s, i;
          (s = e.onCloseAutoFocus) == null || s.call(e, a), a.defaultPrevented || (r.current || (i = n.triggerRef.current) == null || i.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          var l, u;
          (l = e.onInteractOutside) == null || l.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), h0 = d.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: l,
      onFocusOutside: u,
      onInteractOutside: f,
      ...p
    } = e, g = Bn(Ar, n), m = qo(n);
    return Qa(), /* @__PURE__ */ c.jsx(
      Eo,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ c.jsx(
          zn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: f,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: u,
            onDismiss: () => g.onOpenChange(!1),
            children: /* @__PURE__ */ c.jsx(
              Lo,
              {
                "data-state": x0(g.open),
                role: "dialog",
                id: g.contentId,
                ...m,
                ...p,
                ref: t,
                style: {
                  ...p.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), v0 = "PopoverClose", YT = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Bn(v0, n);
    return /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: H(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
YT.displayName = v0;
var KT = "PopoverArrow", qT = d.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = qo(n);
    return /* @__PURE__ */ c.jsx(Fo, { ...o, ...r, ref: t });
  }
);
qT.displayName = KT;
function x0(e) {
  return e ? "open" : "closed";
}
var XT = u0, ZT = p0, JT = m0, w0 = g0;
const y0 = XT, b0 = ZT, nu = d.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsx(JT, { children: /* @__PURE__ */ c.jsx(
  w0,
  {
    ref: o,
    align: t,
    sideOffset: n,
    className: I(
      "z-50 w-72 rounded-md border border-slate-200 bg-white p-4 text-slate-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2      ",
      e
    ),
    ...r
  }
) }));
nu.displayName = w0.displayName;
var ru = "Progress", ou = 100, [QT, F5] = Fe(ru), [eD, tD] = QT(ru), C0 = d.forwardRef(
  (e, t) => {
    const {
      __scopeProgress: n,
      value: r = null,
      max: o,
      getValueLabel: a = nD,
      ...s
    } = e;
    (o || o === 0) && !Pd(o) && console.error(rD(`${o}`, "Progress"));
    const i = Pd(o) ? o : ou;
    r !== null && !_d(r, i) && console.error(oD(`${r}`, "Progress"));
    const l = _d(r, i) ? r : null, u = Fa(l) ? a(l, i) : void 0;
    return /* @__PURE__ */ c.jsx(eD, { scope: n, value: l, max: i, children: /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "aria-valuemax": i,
        "aria-valuemin": 0,
        "aria-valuenow": Fa(l) ? l : void 0,
        "aria-valuetext": u,
        role: "progressbar",
        "data-state": E0(l, i),
        "data-value": l ?? void 0,
        "data-max": i,
        ...s,
        ref: t
      }
    ) });
  }
);
C0.displayName = ru;
var S0 = "ProgressIndicator", R0 = d.forwardRef(
  (e, t) => {
    const { __scopeProgress: n, ...r } = e, o = tD(S0, n);
    return /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": E0(o.value, o.max),
        "data-value": o.value ?? void 0,
        "data-max": o.max,
        ...r,
        ref: t
      }
    );
  }
);
R0.displayName = S0;
function nD(e, t) {
  return `${Math.round(e / t * 100)}%`;
}
function E0(e, t) {
  return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function Fa(e) {
  return typeof e == "number";
}
function Pd(e) {
  return Fa(e) && !isNaN(e) && e > 0;
}
function _d(e, t) {
  return Fa(e) && !isNaN(e) && e <= t && e >= 0;
}
function rD(e, t) {
  return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${ou}\`.`;
}
function oD(e, t) {
  return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${ou} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N0 = C0, aD = R0;
const sD = d.forwardRef(({ className: e, value: t, indicatorColor: n, ...r }, o) => /* @__PURE__ */ c.jsx(
  N0,
  {
    ref: o,
    className: I(
      "relative h-4 w-full overflow-hidden rounded-full bg-slate-100  ",
      e
    ),
    ...r,
    children: /* @__PURE__ */ c.jsx(
      aD,
      {
        className: `h-full w-full flex-1 bg-slate-900 transition-all ${n}`,
        style: { transform: `translateX(-${100 - (t || 0)}%)` }
      }
    )
  }
));
sD.displayName = N0.displayName;
var au = "Radio", [iD, P0] = Fe(au), [lD, cD] = iD(au), _0 = d.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: s,
      value: i = "on",
      onCheck: l,
      form: u,
      ...f
    } = e, [p, g] = d.useState(null), m = le(t, (w) => g(w)), v = d.useRef(!1), h = p ? u || !!p.closest("form") : !0;
    return /* @__PURE__ */ c.jsxs(lD, { scope: n, checked: o, disabled: s, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": I0(o),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: i,
          ...f,
          ref: m,
          onClick: H(e.onClick, (w) => {
            o || l == null || l(), h && (v.current = w.isPropagationStopped(), v.current || w.stopPropagation());
          })
        }
      ),
      h && /* @__PURE__ */ c.jsx(
        D0,
        {
          control: p,
          bubbles: !v.current,
          name: r,
          value: i,
          checked: o,
          required: a,
          disabled: s,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
_0.displayName = au;
var M0 = "RadioIndicator", T0 = d.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = cD(M0, n);
    return /* @__PURE__ */ c.jsx(Ye, { present: r || a.checked, children: /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": I0(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
T0.displayName = M0;
var uD = "RadioBubbleInput", D0 = d.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = d.useRef(null), i = le(s, a), l = zr(n), u = ko(t);
    return d.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && m) {
        const v = new Event("click", { bubbles: r });
        m.call(f, n), f.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ c.jsx(
      Z.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
D0.displayName = uD;
function I0(e) {
  return e ? "checked" : "unchecked";
}
var dD = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xs = "RadioGroup", [fD, z5] = Fe(xs, [
  hn,
  P0
]), A0 = hn(), j0 = P0(), [pD, mD] = fD(xs), k0 = d.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: s = !1,
      disabled: i = !1,
      orientation: l,
      dir: u,
      loop: f = !0,
      onValueChange: p,
      ...g
    } = e, m = A0(n), v = Zt(u), [h, w] = Ge({
      prop: a,
      defaultProp: o ?? null,
      onChange: p,
      caller: xs
    });
    return /* @__PURE__ */ c.jsx(
      pD,
      {
        scope: n,
        name: r,
        required: s,
        disabled: i,
        value: h,
        onValueChange: w,
        children: /* @__PURE__ */ c.jsx(
          Vo,
          {
            asChild: !0,
            ...m,
            orientation: l,
            dir: v,
            loop: f,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                role: "radiogroup",
                "aria-required": s,
                "aria-orientation": l,
                "data-disabled": i ? "" : void 0,
                dir: v,
                ...g,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
k0.displayName = xs;
var O0 = "RadioGroupItem", $0 = d.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = mD(O0, n), s = a.disabled || r, i = A0(n), l = j0(n), u = d.useRef(null), f = le(t, u), p = a.value === o.value, g = d.useRef(!1);
    return d.useEffect(() => {
      const m = (h) => {
        dD.includes(h.key) && (g.current = !0);
      }, v = () => g.current = !1;
      return document.addEventListener("keydown", m), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", m), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ c.jsx(
      Bo,
      {
        asChild: !0,
        ...i,
        focusable: !s,
        active: p,
        children: /* @__PURE__ */ c.jsx(
          _0,
          {
            disabled: s,
            required: a.required,
            checked: p,
            ...l,
            ...o,
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: H((m) => {
              m.key === "Enter" && m.preventDefault();
            }),
            onFocus: H(o.onFocus, () => {
              var m;
              g.current && ((m = u.current) == null || m.click());
            })
          }
        )
      }
    );
  }
);
$0.displayName = O0;
var gD = "RadioGroupIndicator", L0 = d.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = j0(n);
    return /* @__PURE__ */ c.jsx(T0, { ...o, ...r, ref: t });
  }
);
L0.displayName = gD;
var F0 = k0, z0 = $0, hD = L0;
const vD = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  F0,
  {
    className: I("grid gap-2", e),
    ...t,
    ref: n
  }
));
vD.displayName = F0.displayName;
const xD = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  z0,
  {
    ref: n,
    className: I(
      "aspect-square h-4 w-4 rounded-full border border-slate-200 border-slate-900 text-slate-900 ring-offset-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50          ",
      e
    ),
    ...t,
    children: /* @__PURE__ */ c.jsx(hD, { className: "flex items-center justify-center", children: /* @__PURE__ */ c.jsx(Ja, { className: "h-2.5 w-2.5 fill-current text-current" }) })
  }
));
xD.displayName = z0.displayName;
const ws = Ln(null);
ws.displayName = "PanelGroupContext";
const Ze = {
  group: "data-panel-group",
  groupDirection: "data-panel-group-direction",
  groupId: "data-panel-group-id",
  panel: "data-panel",
  panelCollapsible: "data-panel-collapsible",
  panelId: "data-panel-id",
  panelSize: "data-panel-size",
  resizeHandle: "data-resize-handle",
  resizeHandleActive: "data-resize-handle-active",
  resizeHandleEnabled: "data-panel-resize-handle-enabled",
  resizeHandleId: "data-panel-resize-handle-id",
  resizeHandleState: "data-resize-handle-state"
}, su = 10, Qn = Ua, Md = d.useId, wD = typeof Md == "function" ? Md : () => null;
let yD = 0;
function iu(e = null) {
  const t = wD(), n = lt(e || t || null);
  return n.current === null && (n.current = "" + yD++), e ?? n.current;
}
function V0({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: a,
  id: s,
  maxSize: i,
  minSize: l,
  onCollapse: u,
  onExpand: f,
  onResize: p,
  order: g,
  style: m,
  tagName: v = "div",
  ...h
}) {
  const w = Rn(ws);
  if (w === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: x,
    expandPanel: y,
    getPanelSize: b,
    getPanelStyle: S,
    groupId: E,
    isPanelCollapsed: R,
    reevaluatePanelConstraints: C,
    registerPanel: M,
    resizePanel: P,
    unregisterPanel: j
  } = w, _ = iu(s), k = lt({
    callbacks: {
      onCollapse: u,
      onExpand: f,
      onResize: p
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: i,
      minSize: l
    },
    id: _,
    idIsFromProps: s !== void 0,
    order: g
  });
  lt({
    didLogMissingDefaultSizeWarning: !1
  }), Qn(() => {
    const {
      callbacks: A,
      constraints: U
    } = k.current, G = {
      ...U
    };
    k.current.id = _, k.current.idIsFromProps = s !== void 0, k.current.order = g, A.onCollapse = u, A.onExpand = f, A.onResize = p, U.collapsedSize = n, U.collapsible = r, U.defaultSize = o, U.maxSize = i, U.minSize = l, (G.collapsedSize !== U.collapsedSize || G.collapsible !== U.collapsible || G.maxSize !== U.maxSize || G.minSize !== U.minSize) && C(k.current, G);
  }), Qn(() => {
    const A = k.current;
    return M(A), () => {
      j(A);
    };
  }, [g, _, M, j]), Jd(a, () => ({
    collapse: () => {
      x(k.current);
    },
    expand: (A) => {
      y(k.current, A);
    },
    getId() {
      return _;
    },
    getSize() {
      return b(k.current);
    },
    isCollapsed() {
      return R(k.current);
    },
    isExpanded() {
      return !R(k.current);
    },
    resize: (A) => {
      P(k.current, A);
    }
  }), [x, y, b, R, _, P]);
  const W = S(k.current, o);
  return ut(v, {
    ...h,
    children: e,
    className: t,
    id: _,
    style: {
      ...W,
      ...m
    },
    // CSS selectors
    [Ze.groupId]: E,
    [Ze.panel]: "",
    [Ze.panelCollapsible]: r || void 0,
    [Ze.panelId]: _,
    [Ze.panelSize]: parseFloat("" + W.flexGrow).toFixed(1)
  });
}
const B0 = pn((e, t) => ut(V0, {
  ...e,
  forwardedRef: t
}));
V0.displayName = "Panel";
B0.displayName = "forwardRef(Panel)";
let rl = null, wa = -1, Tn = null;
function bD(e, t) {
  if (t) {
    const n = (t & Y0) !== 0, r = (t & K0) !== 0, o = (t & q0) !== 0, a = (t & X0) !== 0;
    if (n)
      return o ? "se-resize" : a ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : a ? "nw-resize" : "w-resize";
    if (o)
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
function CD() {
  Tn !== null && (document.head.removeChild(Tn), rl = null, Tn = null, wa = -1);
}
function fi(e, t) {
  var n, r;
  const o = bD(e, t);
  if (rl !== o) {
    if (rl = o, Tn === null && (Tn = document.createElement("style"), document.head.appendChild(Tn)), wa >= 0) {
      var a;
      (a = Tn.sheet) === null || a === void 0 || a.removeRule(wa);
    }
    wa = (n = (r = Tn.sheet) === null || r === void 0 ? void 0 : r.insertRule(`*{cursor: ${o} !important;}`)) !== null && n !== void 0 ? n : -1;
  }
}
function H0(e) {
  return e.type === "keydown";
}
function G0(e) {
  return e.type.startsWith("pointer");
}
function W0(e) {
  return e.type.startsWith("mouse");
}
function ys(e) {
  if (G0(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (W0(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function SD() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function RD(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function ED(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: Id(e),
    b: Id(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  we(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: Dd(Td(n.a)),
    b: Dd(Td(n.b))
  };
  if (o.a === o.b) {
    const a = r.childNodes, s = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let i = a.length;
    for (; i--; ) {
      const l = a[i];
      if (l === s.a) return 1;
      if (l === s.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const ND = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function PD(e) {
  var t;
  const n = getComputedStyle((t = U0(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function _D(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || PD(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || ND.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Td(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (we(n, "Missing node"), _D(n)) return n;
  }
  return null;
}
function Dd(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Id(e) {
  const t = [];
  for (; e; )
    t.push(e), e = U0(e);
  return t;
}
function U0(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const Y0 = 1, K0 = 2, q0 = 4, X0 = 8, MD = SD() === "coarse";
let Wt = [], _r = !1, Zn = /* @__PURE__ */ new Map(), bs = /* @__PURE__ */ new Map();
const bo = /* @__PURE__ */ new Set();
function TD(e, t, n, r, o) {
  var a;
  const {
    ownerDocument: s
  } = t, i = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, l = (a = Zn.get(s)) !== null && a !== void 0 ? a : 0;
  return Zn.set(s, l + 1), bo.add(i), za(), function() {
    var f;
    bs.delete(e), bo.delete(i);
    const p = (f = Zn.get(s)) !== null && f !== void 0 ? f : 1;
    if (Zn.set(s, p - 1), za(), p === 1 && Zn.delete(s), Wt.includes(i)) {
      const g = Wt.indexOf(i);
      g >= 0 && Wt.splice(g, 1), cu(), o("up", !0, null);
    }
  };
}
function DD(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ys(e);
  _r = !0, lu({
    target: t,
    x: n,
    y: r
  }), za(), Wt.length > 0 && (Va("down", e), e.preventDefault(), Z0(t) || e.stopImmediatePropagation());
}
function pi(e) {
  const {
    x: t,
    y: n
  } = ys(e);
  if (_r && e.buttons === 0 && (_r = !1, Va("up", e)), !_r) {
    const {
      target: r
    } = e;
    lu({
      target: r,
      x: t,
      y: n
    });
  }
  Va("move", e), cu(), Wt.length > 0 && e.preventDefault();
}
function mi(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ys(e);
  bs.clear(), _r = !1, Wt.length > 0 && (e.preventDefault(), Z0(t) || e.stopImmediatePropagation()), Va("up", e), lu({
    target: t,
    x: n,
    y: r
  }), cu(), za();
}
function Z0(e) {
  let t = e;
  for (; t; ) {
    if (t.hasAttribute(Ze.resizeHandle))
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function lu({
  target: e,
  x: t,
  y: n
}) {
  Wt.splice(0);
  let r = null;
  (e instanceof HTMLElement || e instanceof SVGElement) && (r = e), bo.forEach((o) => {
    const {
      element: a,
      hitAreaMargins: s
    } = o, i = a.getBoundingClientRect(), {
      bottom: l,
      left: u,
      right: f,
      top: p
    } = i, g = MD ? s.coarse : s.fine;
    if (t >= u - g && t <= f + g && n >= p - g && n <= l + g) {
      if (r !== null && document.contains(r) && a !== r && !a.contains(r) && !r.contains(a) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      ED(r, a) > 0) {
        let v = r, h = !1;
        for (; v && !v.contains(a); ) {
          if (RD(v.getBoundingClientRect(), i)) {
            h = !0;
            break;
          }
          v = v.parentElement;
        }
        if (h)
          return;
      }
      Wt.push(o);
    }
  });
}
function gi(e, t) {
  bs.set(e, t);
}
function cu() {
  let e = !1, t = !1;
  Wt.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  bs.forEach((r) => {
    n |= r;
  }), e && t ? fi("intersection", n) : e ? fi("horizontal", n) : t ? fi("vertical", n) : CD();
}
let hi = new AbortController();
function za() {
  hi.abort(), hi = new AbortController();
  const e = {
    capture: !0,
    signal: hi.signal
  };
  bo.size && (_r ? (Wt.length > 0 && Zn.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("contextmenu", mi, e), r.addEventListener("pointerleave", pi, e), r.addEventListener("pointermove", pi, e));
  }), window.addEventListener("pointerup", mi, e), window.addEventListener("pointercancel", mi, e)) : Zn.forEach((t, n) => {
    const {
      body: r
    } = n;
    t > 0 && (r.addEventListener("pointerdown", DD, e), r.addEventListener("pointermove", pi, e));
  }));
}
function Va(e, t) {
  bo.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = Wt.includes(n);
    r(e, o, t);
  });
}
function ID() {
  const [e, t] = nt(0);
  return wt(() => t((n) => n + 1), []);
}
function we(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
function ar(e, t, n = su) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function bn(e, t, n = su) {
  return ar(e, t, n) === 0;
}
function Dt(e, t, n) {
  return ar(e, t, n) === 0;
}
function AD(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], a = t[r];
    if (!Dt(o, a, n))
      return !1;
  }
  return !0;
}
function Sr({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  we(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: a,
    maxSize: s = 100,
    minSize: i = 0
  } = r;
  if (ar(n, i) < 0)
    if (a) {
      const l = (o + i) / 2;
      ar(n, l) < 0 ? n = o : n = i;
    } else
      n = i;
  return n = Math.min(s, n), n = parseFloat(n.toFixed(su)), n;
}
function so({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: a
}) {
  if (Dt(e, 0))
    return t;
  const s = [...t], [i, l] = r;
  we(i != null, "Invalid first pivot index"), we(l != null, "Invalid second pivot index");
  let u = 0;
  if (a === "keyboard") {
    {
      const p = e < 0 ? l : i, g = n[p];
      we(g, `Panel constraints not found for index ${p}`);
      const {
        collapsedSize: m = 0,
        collapsible: v,
        minSize: h = 0
      } = g;
      if (v) {
        const w = t[p];
        if (we(w != null, `Previous layout not found for panel index ${p}`), Dt(w, m)) {
          const x = h - w;
          ar(x, Math.abs(e)) > 0 && (e = e < 0 ? 0 - x : x);
        }
      }
    }
    {
      const p = e < 0 ? i : l, g = n[p];
      we(g, `No panel constraints found for index ${p}`);
      const {
        collapsedSize: m = 0,
        collapsible: v,
        minSize: h = 0
      } = g;
      if (v) {
        const w = t[p];
        if (we(w != null, `Previous layout not found for panel index ${p}`), Dt(w, h)) {
          const x = w - m;
          ar(x, Math.abs(e)) > 0 && (e = e < 0 ? 0 - x : x);
        }
      }
    }
  }
  {
    const p = e < 0 ? 1 : -1;
    let g = e < 0 ? l : i, m = 0;
    for (; ; ) {
      const h = t[g];
      we(h != null, `Previous layout not found for panel index ${g}`);
      const x = Sr({
        panelConstraints: n,
        panelIndex: g,
        size: 100
      }) - h;
      if (m += x, g += p, g < 0 || g >= n.length)
        break;
    }
    const v = Math.min(Math.abs(e), Math.abs(m));
    e = e < 0 ? 0 - v : v;
  }
  {
    let g = e < 0 ? i : l;
    for (; g >= 0 && g < n.length; ) {
      const m = Math.abs(e) - Math.abs(u), v = t[g];
      we(v != null, `Previous layout not found for panel index ${g}`);
      const h = v - m, w = Sr({
        panelConstraints: n,
        panelIndex: g,
        size: h
      });
      if (!Dt(v, w) && (u += v - w, s[g] = w, u.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? g-- : g++;
    }
  }
  if (AD(o, s))
    return o;
  {
    const p = e < 0 ? l : i, g = t[p];
    we(g != null, `Previous layout not found for panel index ${p}`);
    const m = g + u, v = Sr({
      panelConstraints: n,
      panelIndex: p,
      size: m
    });
    if (s[p] = v, !Dt(v, m)) {
      let h = m - v, x = e < 0 ? l : i;
      for (; x >= 0 && x < n.length; ) {
        const y = s[x];
        we(y != null, `Previous layout not found for panel index ${x}`);
        const b = y + h, S = Sr({
          panelConstraints: n,
          panelIndex: x,
          size: b
        });
        if (Dt(y, S) || (h -= S - y, s[x] = S), Dt(h, 0))
          break;
        e > 0 ? x-- : x++;
      }
    }
  }
  const f = s.reduce((p, g) => g + p, 0);
  return Dt(f, 100) ? s : o;
}
function jD({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, a = 0, s = 0;
  const i = n[0];
  we(i != null, "No pivot index found"), t.forEach((p, g) => {
    const {
      constraints: m
    } = p, {
      maxSize: v = 100,
      minSize: h = 0
    } = m;
    g === i ? (r = h, o = v) : (a += h, s += v);
  });
  const l = Math.min(o, 100 - a), u = Math.max(r, 100 - s), f = e[i];
  return {
    valueMax: l,
    valueMin: u,
    valueNow: f
  };
}
function Co(e, t = document) {
  return Array.from(t.querySelectorAll(`[${Ze.resizeHandleId}][data-panel-group-id="${e}"]`));
}
function J0(e, t, n = document) {
  const o = Co(e, n).findIndex((a) => a.getAttribute(Ze.resizeHandleId) === t);
  return o ?? null;
}
function Q0(e, t, n) {
  const r = J0(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function ex(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function Cs(e, t = document) {
  const n = t.querySelector(`[${Ze.resizeHandleId}="${e}"]`);
  return n || null;
}
function kD(e, t, n, r = document) {
  var o, a, s, i;
  const l = Cs(t, r), u = Co(e, r), f = l ? u.indexOf(l) : -1, p = (o = (a = n[f]) === null || a === void 0 ? void 0 : a.id) !== null && o !== void 0 ? o : null, g = (s = (i = n[f + 1]) === null || i === void 0 ? void 0 : i.id) !== null && s !== void 0 ? s : null;
  return [p, g];
}
function OD({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: a,
  setLayout: s
}) {
  lt({
    didWarnAboutMissingResizeHandle: !1
  }), Qn(() => {
    if (!a)
      return;
    const i = Co(n, a);
    for (let l = 0; l < o.length - 1; l++) {
      const {
        valueMax: u,
        valueMin: f,
        valueNow: p
      } = jD({
        layout: r,
        panelsArray: o,
        pivotIndices: [l, l + 1]
      }), g = i[l];
      if (g != null) {
        const m = o[l];
        we(m, `No panel data found for index "${l}"`), g.setAttribute("aria-controls", m.id), g.setAttribute("aria-valuemax", "" + Math.round(u)), g.setAttribute("aria-valuemin", "" + Math.round(f)), g.setAttribute("aria-valuenow", p != null ? "" + Math.round(p) : "");
      }
    }
    return () => {
      i.forEach((l, u) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, a]), ct(() => {
    if (!a)
      return;
    const i = t.current;
    we(i, "Eager values not found");
    const {
      panelDataArray: l
    } = i, u = ex(n, a);
    we(u != null, `No group found for id "${n}"`);
    const f = Co(n, a);
    we(f, `No resize handles found for group id "${n}"`);
    const p = f.map((g) => {
      const m = g.getAttribute(Ze.resizeHandleId);
      we(m, "Resize handle element has no handle id attribute");
      const [v, h] = kD(n, m, l, a);
      if (v == null || h == null)
        return () => {
        };
      const w = (x) => {
        if (!x.defaultPrevented)
          switch (x.key) {
            case "Enter": {
              x.preventDefault();
              const y = l.findIndex((b) => b.id === v);
              if (y >= 0) {
                const b = l[y];
                we(b, `No panel data found for index ${y}`);
                const S = r[y], {
                  collapsedSize: E = 0,
                  collapsible: R,
                  minSize: C = 0
                } = b.constraints;
                if (S != null && R) {
                  const M = so({
                    delta: Dt(S, E) ? C - E : E - S,
                    initialLayout: r,
                    panelConstraints: l.map((P) => P.constraints),
                    pivotIndices: Q0(n, m, a),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== M && s(M);
                }
              }
              break;
            }
          }
      };
      return g.addEventListener("keydown", w), () => {
        g.removeEventListener("keydown", w);
      };
    });
    return () => {
      p.forEach((g) => g());
    };
  }, [a, e, t, n, r, o, s]);
}
function Ad(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function tx(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = ys(t);
  return n ? r : o;
}
function $D(e, t, n, r, o) {
  const a = n === "horizontal", s = Cs(t, o);
  we(s, `No resize handle element found for id "${t}"`);
  const i = s.getAttribute(Ze.groupId);
  we(i, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const u = tx(n, e), f = ex(i, o);
  we(f, `No group element found for id "${i}"`);
  const p = f.getBoundingClientRect(), g = a ? p.width : p.height;
  return (u - l) / g * 100;
}
function LD(e, t, n, r, o, a) {
  if (H0(e)) {
    const s = n === "horizontal";
    let i = 0;
    e.shiftKey ? i = 100 : o != null ? i = o : i = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = s ? 0 : i;
        break;
      case "ArrowLeft":
        l = s ? -i : 0;
        break;
      case "ArrowRight":
        l = s ? i : 0;
        break;
      case "ArrowUp":
        l = s ? 0 : -i;
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
    return r == null ? 0 : $D(e, t, n, r, a);
}
function FD({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((a) => a.constraints);
  let r = 0, o = 100;
  for (let a = 0; a < e.length; a++) {
    const s = n[a];
    we(s, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: i
    } = s;
    i != null && (r++, t[a] = i, o -= i);
  }
  for (let a = 0; a < e.length; a++) {
    const s = n[a];
    we(s, `Panel constraints not found for index ${a}`);
    const {
      defaultSize: i
    } = s;
    if (i != null)
      continue;
    const l = e.length - r, u = o / l;
    r++, t[a] = u, o -= u;
  }
  return t;
}
function wr(e, t, n) {
  t.forEach((r, o) => {
    const a = e[o];
    we(a, `Panel data not found for index ${o}`);
    const {
      callbacks: s,
      constraints: i,
      id: l
    } = a, {
      collapsedSize: u = 0,
      collapsible: f
    } = i, p = n[l];
    if (p == null || r !== p) {
      n[l] = r;
      const {
        onCollapse: g,
        onExpand: m,
        onResize: v
      } = s;
      v && v(r, p), f && (g || m) && (m && (p == null || bn(p, u)) && !bn(r, u) && m(), g && (p == null || !bn(p, u)) && bn(r, u) && g());
    }
  });
}
function aa(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function zD({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: a = 3
}) {
  const s = n[o];
  let i;
  return s == null ? i = e != null ? e.toPrecision(a) : "1" : r.length === 1 ? i = "1" : i = s.toPrecision(a), {
    flexBasis: 0,
    flexGrow: i,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function VD(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function jd(e) {
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
function nx(e) {
  return `react-resizable-panels:${e}`;
}
function rx(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: a
    } = t;
    return o ? r : a ? `${a}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function ox(e, t) {
  try {
    const n = nx(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function BD(e, t, n) {
  var r, o;
  const a = (r = ox(e, n)) !== null && r !== void 0 ? r : {}, s = rx(t);
  return (o = a[s]) !== null && o !== void 0 ? o : null;
}
function HD(e, t, n, r, o) {
  var a;
  const s = nx(e), i = rx(t), l = (a = ox(e, o)) !== null && a !== void 0 ? a : {};
  l[i] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(s, JSON.stringify(l));
  } catch (u) {
    console.error(u);
  }
}
function kd({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((a, s) => a + s, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((a) => `${a}%`).join(", ")}`);
  if (!Dt(r, 100) && n.length > 0)
    for (let a = 0; a < t.length; a++) {
      const s = n[a];
      we(s != null, `No layout data found for index ${a}`);
      const i = 100 / r * s;
      n[a] = i;
    }
  let o = 0;
  for (let a = 0; a < t.length; a++) {
    const s = n[a];
    we(s != null, `No layout data found for index ${a}`);
    const i = Sr({
      panelConstraints: t,
      panelIndex: a,
      size: s
    });
    s != i && (o += s - i, n[a] = i);
  }
  if (!Dt(o, 0))
    for (let a = 0; a < t.length; a++) {
      const s = n[a];
      we(s != null, `No layout data found for index ${a}`);
      const i = s + o, l = Sr({
        panelConstraints: t,
        panelIndex: a,
        size: i
      });
      if (s !== l && (o -= l - s, n[a] = l, Dt(o, 0)))
        break;
    }
  return n;
}
const GD = 100, io = {
  getItem: (e) => (jd(io), io.getItem(e)),
  setItem: (e, t) => {
    jd(io), io.setItem(e, t);
  }
}, Od = {};
function ax({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: a = null,
  onLayout: s = null,
  keyboardResizeBy: i = null,
  storage: l = io,
  style: u,
  tagName: f = "div",
  ...p
}) {
  const g = iu(a), m = lt(null), [v, h] = nt(null), [w, x] = nt([]), y = ID(), b = lt({}), S = lt(/* @__PURE__ */ new Map()), E = lt(0), R = lt({
    autoSaveId: e,
    direction: r,
    dragState: v,
    id: g,
    keyboardResizeBy: i,
    onLayout: s,
    storage: l
  }), C = lt({
    layout: w,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  lt({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Jd(o, () => ({
    getId: () => R.current.id,
    getLayout: () => {
      const {
        layout: O
      } = C.current;
      return O;
    },
    setLayout: (O) => {
      const {
        onLayout: V
      } = R.current, {
        layout: B,
        panelDataArray: q
      } = C.current, T = kd({
        layout: O,
        panelConstraints: q.map((Y) => Y.constraints)
      });
      Ad(B, T) || (x(T), C.current.layout = T, V && V(T), wr(q, T, b.current));
    }
  }), []), Qn(() => {
    R.current.autoSaveId = e, R.current.direction = r, R.current.dragState = v, R.current.id = g, R.current.onLayout = s, R.current.storage = l;
  }), OD({
    committedValuesRef: R,
    eagerValuesRef: C,
    groupId: g,
    layout: w,
    panelDataArray: C.current.panelDataArray,
    setLayout: x,
    panelGroupElement: m.current
  }), ct(() => {
    const {
      panelDataArray: O
    } = C.current;
    if (e) {
      if (w.length === 0 || w.length !== O.length)
        return;
      let V = Od[e];
      V == null && (V = VD(HD, GD), Od[e] = V);
      const B = [...O], q = new Map(S.current);
      V(e, B, q, w, l);
    }
  }, [e, w, l]), ct(() => {
  });
  const M = wt((O) => {
    const {
      onLayout: V
    } = R.current, {
      layout: B,
      panelDataArray: q
    } = C.current;
    if (O.constraints.collapsible) {
      const T = q.map((ne) => ne.constraints), {
        collapsedSize: Y = 0,
        panelSize: J,
        pivotIndices: te
      } = qn(q, O, B);
      if (we(J != null, `Panel size not found for panel "${O.id}"`), !bn(J, Y)) {
        S.current.set(O.id, J);
        const X = Cr(q, O) === q.length - 1 ? J - Y : Y - J, K = so({
          delta: X,
          initialLayout: B,
          panelConstraints: T,
          pivotIndices: te,
          prevLayout: B,
          trigger: "imperative-api"
        });
        aa(B, K) || (x(K), C.current.layout = K, V && V(K), wr(q, K, b.current));
      }
    }
  }, []), P = wt((O, V) => {
    const {
      onLayout: B
    } = R.current, {
      layout: q,
      panelDataArray: T
    } = C.current;
    if (O.constraints.collapsible) {
      const Y = T.map((ee) => ee.constraints), {
        collapsedSize: J = 0,
        panelSize: te = 0,
        minSize: ne = 0,
        pivotIndices: X
      } = qn(T, O, q), K = V ?? ne;
      if (bn(te, J)) {
        const ee = S.current.get(O.id), re = ee != null && ee >= K ? ee : K, ye = Cr(T, O) === T.length - 1 ? te - re : re - te, ge = so({
          delta: ye,
          initialLayout: q,
          panelConstraints: Y,
          pivotIndices: X,
          prevLayout: q,
          trigger: "imperative-api"
        });
        aa(q, ge) || (x(ge), C.current.layout = ge, B && B(ge), wr(T, ge, b.current));
      }
    }
  }, []), j = wt((O) => {
    const {
      layout: V,
      panelDataArray: B
    } = C.current, {
      panelSize: q
    } = qn(B, O, V);
    return we(q != null, `Panel size not found for panel "${O.id}"`), q;
  }, []), _ = wt((O, V) => {
    const {
      panelDataArray: B
    } = C.current, q = Cr(B, O);
    return zD({
      defaultSize: V,
      dragState: v,
      layout: w,
      panelData: B,
      panelIndex: q
    });
  }, [v, w]), k = wt((O) => {
    const {
      layout: V,
      panelDataArray: B
    } = C.current, {
      collapsedSize: q = 0,
      collapsible: T,
      panelSize: Y
    } = qn(B, O, V);
    return we(Y != null, `Panel size not found for panel "${O.id}"`), T === !0 && bn(Y, q);
  }, []), W = wt((O) => {
    const {
      layout: V,
      panelDataArray: B
    } = C.current, {
      collapsedSize: q = 0,
      collapsible: T,
      panelSize: Y
    } = qn(B, O, V);
    return we(Y != null, `Panel size not found for panel "${O.id}"`), !T || ar(Y, q) > 0;
  }, []), A = wt((O) => {
    const {
      panelDataArray: V
    } = C.current;
    V.push(O), V.sort((B, q) => {
      const T = B.order, Y = q.order;
      return T == null && Y == null ? 0 : T == null ? -1 : Y == null ? 1 : T - Y;
    }), C.current.panelDataArrayChanged = !0, y();
  }, [y]);
  Qn(() => {
    if (C.current.panelDataArrayChanged) {
      C.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: O,
        onLayout: V,
        storage: B
      } = R.current, {
        layout: q,
        panelDataArray: T
      } = C.current;
      let Y = null;
      if (O) {
        const te = BD(O, T, B);
        te && (S.current = new Map(Object.entries(te.expandToSizes)), Y = te.layout);
      }
      Y == null && (Y = FD({
        panelDataArray: T
      }));
      const J = kd({
        layout: Y,
        panelConstraints: T.map((te) => te.constraints)
      });
      Ad(q, J) || (x(J), C.current.layout = J, V && V(J), wr(T, J, b.current));
    }
  }), Qn(() => {
    const O = C.current;
    return () => {
      O.layout = [];
    };
  }, []);
  const U = wt((O) => {
    let V = !1;
    const B = m.current;
    return B && window.getComputedStyle(B, null).getPropertyValue("direction") === "rtl" && (V = !0), function(T) {
      T.preventDefault();
      const Y = m.current;
      if (!Y)
        return () => null;
      const {
        direction: J,
        dragState: te,
        id: ne,
        keyboardResizeBy: X,
        onLayout: K
      } = R.current, {
        layout: ee,
        panelDataArray: re
      } = C.current, {
        initialLayout: pe
      } = te ?? {}, ye = Q0(ne, O, Y);
      let ge = LD(T, O, J, te, X, Y);
      const ue = J === "horizontal";
      ue && V && (ge = -ge);
      const Me = re.map((Ve) => Ve.constraints), Le = so({
        delta: ge,
        initialLayout: pe ?? ee,
        panelConstraints: Me,
        pivotIndices: ye,
        prevLayout: ee,
        trigger: H0(T) ? "keyboard" : "mouse-or-touch"
      }), Te = !aa(ee, Le);
      (G0(T) || W0(T)) && E.current != ge && (E.current = ge, !Te && ge !== 0 ? ue ? gi(O, ge < 0 ? Y0 : K0) : gi(O, ge < 0 ? q0 : X0) : gi(O, 0)), Te && (x(Le), C.current.layout = Le, K && K(Le), wr(re, Le, b.current));
    };
  }, []), G = wt((O, V) => {
    const {
      onLayout: B
    } = R.current, {
      layout: q,
      panelDataArray: T
    } = C.current, Y = T.map((ee) => ee.constraints), {
      panelSize: J,
      pivotIndices: te
    } = qn(T, O, q);
    we(J != null, `Panel size not found for panel "${O.id}"`);
    const X = Cr(T, O) === T.length - 1 ? J - V : V - J, K = so({
      delta: X,
      initialLayout: q,
      panelConstraints: Y,
      pivotIndices: te,
      prevLayout: q,
      trigger: "imperative-api"
    });
    aa(q, K) || (x(K), C.current.layout = K, B && B(K), wr(T, K, b.current));
  }, []), F = wt((O, V) => {
    const {
      layout: B,
      panelDataArray: q
    } = C.current, {
      collapsedSize: T = 0,
      collapsible: Y
    } = V, {
      collapsedSize: J = 0,
      collapsible: te,
      maxSize: ne = 100,
      minSize: X = 0
    } = O.constraints, {
      panelSize: K
    } = qn(q, O, B);
    K != null && (Y && te && bn(K, T) ? bn(T, J) || G(O, J) : K < X ? G(O, X) : K > ne && G(O, ne));
  }, [G]), L = wt((O, V) => {
    const {
      direction: B
    } = R.current, {
      layout: q
    } = C.current;
    if (!m.current)
      return;
    const T = Cs(O, m.current);
    we(T, `Drag handle element not found for id "${O}"`);
    const Y = tx(B, V);
    h({
      dragHandleId: O,
      dragHandleRect: T.getBoundingClientRect(),
      initialCursorPosition: Y,
      initialLayout: q
    });
  }, []), z = wt(() => {
    h(null);
  }, []), oe = wt((O) => {
    const {
      panelDataArray: V
    } = C.current, B = Cr(V, O);
    B >= 0 && (V.splice(B, 1), delete b.current[O.id], C.current.panelDataArrayChanged = !0, y());
  }, [y]), ae = Zd(() => ({
    collapsePanel: M,
    direction: r,
    dragState: v,
    expandPanel: P,
    getPanelSize: j,
    getPanelStyle: _,
    groupId: g,
    isPanelCollapsed: k,
    isPanelExpanded: W,
    reevaluatePanelConstraints: F,
    registerPanel: A,
    registerResizeHandle: U,
    resizePanel: G,
    startDragging: L,
    stopDragging: z,
    unregisterPanel: oe,
    panelGroupElement: m.current
  }), [M, v, r, P, j, _, g, k, W, F, A, U, G, L, z, oe]), $ = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return ut(ws.Provider, {
    value: ae
  }, ut(f, {
    ...p,
    children: t,
    className: n,
    id: a,
    ref: m,
    style: {
      ...$,
      ...u
    },
    // CSS selectors
    [Ze.group]: "",
    [Ze.groupDirection]: r,
    [Ze.groupId]: g
  }));
}
const sx = pn((e, t) => ut(ax, {
  ...e,
  forwardedRef: t
}));
ax.displayName = "PanelGroup";
sx.displayName = "forwardRef(PanelGroup)";
function Cr(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function qn(e, t, n) {
  const r = Cr(e, t), a = r === e.length - 1 ? [r - 1, r] : [r, r + 1], s = n[r];
  return {
    ...t.constraints,
    panelSize: s,
    pivotIndices: a
  };
}
function WD({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  ct(() => {
    if (e || n == null || r == null)
      return;
    const o = Cs(t, r);
    if (o == null)
      return;
    const a = (s) => {
      if (!s.defaultPrevented)
        switch (s.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            s.preventDefault(), n(s);
            break;
          }
          case "F6": {
            s.preventDefault();
            const i = o.getAttribute(Ze.groupId);
            we(i, `No group element found for id "${i}"`);
            const l = Co(i, r), u = J0(i, t, r);
            we(u !== null, `No resize element found for id "${t}"`);
            const f = s.shiftKey ? u > 0 ? u - 1 : l.length - 1 : u + 1 < l.length ? u + 1 : 0;
            l[f].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", a), () => {
      o.removeEventListener("keydown", a);
    };
  }, [r, e, t, n]);
}
function ix({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: a,
  onClick: s,
  onDragging: i,
  onFocus: l,
  onPointerDown: u,
  onPointerUp: f,
  style: p = {},
  tabIndex: g = 0,
  tagName: m = "div",
  ...v
}) {
  var h, w;
  const x = lt(null), y = lt({
    onClick: s,
    onDragging: i,
    onPointerDown: u,
    onPointerUp: f
  });
  ct(() => {
    y.current.onClick = s, y.current.onDragging = i, y.current.onPointerDown = u, y.current.onPointerUp = f;
  });
  const b = Rn(ws);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: S,
    groupId: E,
    registerResizeHandle: R,
    startDragging: C,
    stopDragging: M,
    panelGroupElement: P
  } = b, j = iu(o), [_, k] = nt("inactive"), [W, A] = nt(!1), [U, G] = nt(null), F = lt({
    state: _
  });
  Qn(() => {
    F.current.state = _;
  }), ct(() => {
    if (n)
      G(null);
    else {
      const ae = R(j);
      G(() => ae);
    }
  }, [n, j, R]);
  const L = (h = r == null ? void 0 : r.coarse) !== null && h !== void 0 ? h : 15, z = (w = r == null ? void 0 : r.fine) !== null && w !== void 0 ? w : 5;
  return ct(() => {
    if (n || U == null)
      return;
    const ae = x.current;
    we(ae, "Element ref not attached");
    let $ = !1;
    return TD(j, ae, S, {
      coarse: L,
      fine: z
    }, (V, B, q) => {
      if (!B) {
        k("inactive");
        return;
      }
      switch (V) {
        case "down": {
          k("drag"), $ = !1, we(q, 'Expected event to be defined for "down" action'), C(j, q);
          const {
            onDragging: T,
            onPointerDown: Y
          } = y.current;
          T == null || T(!0), Y == null || Y();
          break;
        }
        case "move": {
          const {
            state: T
          } = F.current;
          $ = !0, T !== "drag" && k("hover"), we(q, 'Expected event to be defined for "move" action'), U(q);
          break;
        }
        case "up": {
          k("hover"), M();
          const {
            onClick: T,
            onDragging: Y,
            onPointerUp: J
          } = y.current;
          Y == null || Y(!1), J == null || J(), $ || T == null || T();
          break;
        }
      }
    });
  }, [L, S, n, z, R, j, U, C, M]), WD({
    disabled: n,
    handleId: j,
    resizeHandler: U,
    panelGroupElement: P
  }), ut(m, {
    ...v,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      A(!1), a == null || a();
    },
    onFocus: () => {
      A(!0), l == null || l();
    },
    ref: x,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...p
    },
    tabIndex: g,
    // CSS selectors
    [Ze.groupDirection]: S,
    [Ze.groupId]: E,
    [Ze.resizeHandle]: "",
    [Ze.resizeHandleActive]: _ === "drag" ? "pointer" : W ? "keyboard" : void 0,
    [Ze.resizeHandleEnabled]: !n,
    [Ze.resizeHandleId]: j,
    [Ze.resizeHandleState]: _
  });
}
ix.displayName = "PanelResizeHandle";
const V5 = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  sx,
  {
    className: I(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), B5 = B0, H5 = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
  ix,
  {
    className: I(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90    ",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ c.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200    ", children: /* @__PURE__ */ c.jsx(Qb, { className: "h-2.5 w-2.5" }) })
  }
);
function So(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function UD(e, t) {
  return d.useReducer((n, r) => t[n][r] ?? n, e);
}
var uu = "ScrollArea", [lx, G5] = Fe(uu), [YD, Vt] = lx(uu), cx = d.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, l] = d.useState(null), [u, f] = d.useState(null), [p, g] = d.useState(null), [m, v] = d.useState(null), [h, w] = d.useState(null), [x, y] = d.useState(0), [b, S] = d.useState(0), [E, R] = d.useState(!1), [C, M] = d.useState(!1), P = le(t, (_) => l(_)), j = Zt(o);
    return /* @__PURE__ */ c.jsx(
      YD,
      {
        scope: n,
        type: r,
        dir: j,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: u,
        onViewportChange: f,
        content: p,
        onContentChange: g,
        scrollbarX: m,
        onScrollbarXChange: v,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: R,
        scrollbarY: h,
        onScrollbarYChange: w,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: M,
        onCornerWidthChange: y,
        onCornerHeightChange: S,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            dir: j,
            ...s,
            ref: P,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": x + "px",
              "--radix-scroll-area-corner-height": b + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
cx.displayName = uu;
var ux = "ScrollAreaViewport", dx = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = Vt(ux, n), i = d.useRef(null), l = le(t, i, s.onViewportChange);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ c.jsx(
        Z.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: l,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ c.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
dx.displayName = ux;
var vn = "ScrollAreaScrollbar", du = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Vt(vn, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return d.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ c.jsx(KD, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ c.jsx(qD, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ c.jsx(fx, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ c.jsx(fu, { ...r, ref: t }) : null;
  }
);
du.displayName = vn;
var KD = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Vt(vn, e.__scopeScrollArea), [a, s] = d.useState(!1);
  return d.useEffect(() => {
    const i = o.scrollArea;
    let l = 0;
    if (i) {
      const u = () => {
        window.clearTimeout(l), s(!0);
      }, f = () => {
        l = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", u), i.addEventListener("pointerleave", f), () => {
        window.clearTimeout(l), i.removeEventListener("pointerenter", u), i.removeEventListener("pointerleave", f);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ c.jsx(Ye, { present: n || a, children: /* @__PURE__ */ c.jsx(
    fx,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), qD = d.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = Vt(vn, e.__scopeScrollArea), a = e.orientation === "horizontal", s = Rs(() => l("SCROLL_END"), 100), [i, l] = UD("hidden", {
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
  return d.useEffect(() => {
    if (i === "idle") {
      const u = window.setTimeout(() => l("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [i, o.scrollHideDelay, l]), d.useEffect(() => {
    const u = o.viewport, f = a ? "scrollLeft" : "scrollTop";
    if (u) {
      let p = u[f];
      const g = () => {
        const m = u[f];
        p !== m && (l("SCROLL"), s()), p = m;
      };
      return u.addEventListener("scroll", g), () => u.removeEventListener("scroll", g);
    }
  }, [o.viewport, a, l, s]), /* @__PURE__ */ c.jsx(Ye, { present: n || i !== "hidden", children: /* @__PURE__ */ c.jsx(
    fu,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: H(e.onPointerEnter, () => l("POINTER_ENTER")),
      onPointerLeave: H(e.onPointerLeave, () => l("POINTER_LEAVE"))
    }
  ) });
}), fx = d.forwardRef((e, t) => {
  const n = Vt(vn, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = d.useState(!1), i = e.orientation === "horizontal", l = Rs(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, f = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? u : f);
    }
  }, 10);
  return jr(n.viewport, l), jr(n.content, l), /* @__PURE__ */ c.jsx(Ye, { present: r || a, children: /* @__PURE__ */ c.jsx(
    fu,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), fu = d.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = Vt(vn, e.__scopeScrollArea), a = d.useRef(null), s = d.useRef(0), [i, l] = d.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = vx(i.viewport, i.content), f = {
    ...r,
    sizes: i,
    onSizesChange: l,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (g) => a.current = g,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (g) => s.current = g
  };
  function p(g, m) {
    return tI(g, s.current, i, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ c.jsx(
    XD,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const g = o.viewport.scrollLeft, m = $d(g, i, o.dir);
          a.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (g) => {
        o.viewport && (o.viewport.scrollLeft = g);
      },
      onDragScroll: (g) => {
        o.viewport && (o.viewport.scrollLeft = p(g, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ c.jsx(
    ZD,
    {
      ...f,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const g = o.viewport.scrollTop, m = $d(g, i);
          a.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (g) => {
        o.viewport && (o.viewport.scrollTop = g);
      },
      onDragScroll: (g) => {
        o.viewport && (o.viewport.scrollTop = p(g));
      }
    }
  ) : null;
}), XD = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Vt(vn, e.__scopeScrollArea), [s, i] = d.useState(), l = d.useRef(null), u = le(t, l, a.onScrollbarXChange);
  return d.useEffect(() => {
    l.current && i(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ c.jsx(
    mx,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ss(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.x),
      onDragScroll: (f) => e.onDragScroll(f.x),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const g = a.viewport.scrollLeft + f.deltaX;
          e.onWheelScroll(g), wx(g, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: l.current.clientWidth,
            paddingStart: Ha(s.paddingLeft),
            paddingEnd: Ha(s.paddingRight)
          }
        });
      }
    }
  );
}), ZD = d.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = Vt(vn, e.__scopeScrollArea), [s, i] = d.useState(), l = d.useRef(null), u = le(t, l, a.onScrollbarYChange);
  return d.useEffect(() => {
    l.current && i(getComputedStyle(l.current));
  }, [l]), /* @__PURE__ */ c.jsx(
    mx,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ss(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (f) => e.onThumbPointerDown(f.y),
      onDragScroll: (f) => e.onDragScroll(f.y),
      onWheelScroll: (f, p) => {
        if (a.viewport) {
          const g = a.viewport.scrollTop + f.deltaY;
          e.onWheelScroll(g), wx(g, p) && f.preventDefault();
        }
      },
      onResize: () => {
        l.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: l.current.clientHeight,
            paddingStart: Ha(s.paddingTop),
            paddingEnd: Ha(s.paddingBottom)
          }
        });
      }
    }
  );
}), [JD, px] = lx(vn), mx = d.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: l,
    onDragScroll: u,
    onWheelScroll: f,
    onResize: p,
    ...g
  } = e, m = Vt(vn, n), [v, h] = d.useState(null), w = le(t, (P) => h(P)), x = d.useRef(null), y = d.useRef(""), b = m.viewport, S = r.content - r.viewport, E = Oe(f), R = Oe(l), C = Rs(p, 10);
  function M(P) {
    if (x.current) {
      const j = P.clientX - x.current.left, _ = P.clientY - x.current.top;
      u({ x: j, y: _ });
    }
  }
  return d.useEffect(() => {
    const P = (j) => {
      const _ = j.target;
      (v == null ? void 0 : v.contains(_)) && E(j, S);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [b, v, S, E]), d.useEffect(R, [r, R]), jr(v, C), jr(m.content, C), /* @__PURE__ */ c.jsx(
    JD,
    {
      scope: n,
      scrollbar: v,
      hasThumb: o,
      onThumbChange: Oe(a),
      onThumbPointerUp: Oe(s),
      onThumbPositionChange: R,
      onThumbPointerDown: Oe(i),
      children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          ...g,
          ref: w,
          style: { position: "absolute", ...g.style },
          onPointerDown: H(e.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), x.current = v.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), M(P));
          }),
          onPointerMove: H(e.onPointerMove, M),
          onPointerUp: H(e.onPointerUp, (P) => {
            const j = P.target;
            j.hasPointerCapture(P.pointerId) && j.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), x.current = null;
          })
        }
      )
    }
  );
}), Ba = "ScrollAreaThumb", gx = d.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = px(Ba, e.__scopeScrollArea);
    return /* @__PURE__ */ c.jsx(Ye, { present: n || o.hasThumb, children: /* @__PURE__ */ c.jsx(QD, { ref: t, ...r }) });
  }
), QD = d.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = Vt(Ba, n), s = px(Ba, n), { onThumbPositionChange: i } = s, l = le(
      t,
      (p) => s.onThumbChange(p)
    ), u = d.useRef(void 0), f = Rs(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return d.useEffect(() => {
      const p = a.viewport;
      if (p) {
        const g = () => {
          if (f(), !u.current) {
            const m = nI(p, i);
            u.current = m, i();
          }
        };
        return i(), p.addEventListener("scroll", g), () => p.removeEventListener("scroll", g);
      }
    }, [a.viewport, f, i]), /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: l,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: H(e.onPointerDownCapture, (p) => {
          const m = p.target.getBoundingClientRect(), v = p.clientX - m.left, h = p.clientY - m.top;
          s.onThumbPointerDown({ x: v, y: h });
        }),
        onPointerUp: H(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
gx.displayName = Ba;
var pu = "ScrollAreaCorner", hx = d.forwardRef(
  (e, t) => {
    const n = Vt(pu, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ c.jsx(eI, { ...e, ref: t }) : null;
  }
);
hx.displayName = pu;
var eI = d.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = Vt(pu, n), [a, s] = d.useState(0), [i, l] = d.useState(0), u = !!(a && i);
  return jr(o.scrollbarX, () => {
    var p;
    const f = ((p = o.scrollbarX) == null ? void 0 : p.offsetHeight) || 0;
    o.onCornerHeightChange(f), l(f);
  }), jr(o.scrollbarY, () => {
    var p;
    const f = ((p = o.scrollbarY) == null ? void 0 : p.offsetWidth) || 0;
    o.onCornerWidthChange(f), s(f);
  }), u ? /* @__PURE__ */ c.jsx(
    Z.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: i,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function Ha(e) {
  return e ? parseInt(e, 10) : 0;
}
function vx(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ss(e) {
  const t = vx(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function tI(e, t, n, r = "ltr") {
  const o = Ss(n), a = o / 2, s = t || a, i = o - s, l = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - i, f = n.content - n.viewport, p = r === "ltr" ? [0, f] : [f * -1, 0];
  return xx([l, u], p)(e);
}
function $d(e, t, n = "ltr") {
  const r = Ss(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, l = n === "ltr" ? [0, s] : [s * -1, 0], u = So(e, l);
  return xx([0, s], [0, i])(u);
}
function xx(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function wx(e, t) {
  return e > 0 && e < t;
}
var nI = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Rs(e, t) {
  const n = Oe(e), r = d.useRef(0);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), d.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function jr(e, t) {
  const n = Oe(t);
  Ue(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var yx = cx, rI = dx, oI = hx;
const aI = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  yx,
  {
    ref: r,
    className: I("relative overflow-hidden", e),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx(rI, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ c.jsx(bx, {}),
      /* @__PURE__ */ c.jsx(oI, {})
    ]
  }
));
aI.displayName = yx.displayName;
const bx = d.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ c.jsx(
  du,
  {
    ref: r,
    orientation: t,
    className: I(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...n,
    children: /* @__PURE__ */ c.jsx(gx, { className: "relative flex-1 rounded-full bg-slate-200  " })
  }
));
bx.displayName = du.displayName;
var sI = [" ", "Enter", "ArrowUp", "ArrowDown"], iI = [" ", "Enter"], sr = "Select", [Es, Ns, lI] = Fn(sr), [Wr, W5] = Fe(sr, [
  lI,
  gn
]), Ps = gn(), [cI, Hn] = Wr(sr), [uI, dI] = Wr(sr), Cx = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    value: s,
    defaultValue: i,
    onValueChange: l,
    dir: u,
    name: f,
    autoComplete: p,
    disabled: g,
    required: m,
    form: v
  } = e, h = Ps(t), [w, x] = d.useState(null), [y, b] = d.useState(null), [S, E] = d.useState(!1), R = Zt(u), [C, M] = Ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: sr
  }), [P, j] = Ge({
    prop: s,
    defaultProp: i,
    onChange: l,
    caller: sr
  }), _ = d.useRef(null), k = w ? v || !!w.closest("form") : !0, [W, A] = d.useState(/* @__PURE__ */ new Set()), U = Array.from(W).map((G) => G.props.value).join(";");
  return /* @__PURE__ */ c.jsx(Hr, { ...h, children: /* @__PURE__ */ c.jsxs(
    cI,
    {
      required: m,
      scope: t,
      trigger: w,
      onTriggerChange: x,
      valueNode: y,
      onValueNodeChange: b,
      valueNodeHasChildren: S,
      onValueNodeHasChildrenChange: E,
      contentId: $e(),
      value: P,
      onValueChange: j,
      open: C,
      onOpenChange: M,
      dir: R,
      triggerPointerDownPosRef: _,
      disabled: g,
      children: [
        /* @__PURE__ */ c.jsx(Es.Provider, { scope: t, children: /* @__PURE__ */ c.jsx(
          uI,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: d.useCallback((G) => {
              A((F) => new Set(F).add(G));
            }, []),
            onNativeOptionRemove: d.useCallback((G) => {
              A((F) => {
                const L = new Set(F);
                return L.delete(G), L;
              });
            }, []),
            children: n
          }
        ) }),
        k ? /* @__PURE__ */ c.jsxs(
          Yx,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: f,
            autoComplete: p,
            value: P,
            onChange: (G) => j(G.target.value),
            disabled: g,
            form: v,
            children: [
              P === void 0 ? /* @__PURE__ */ c.jsx("option", { value: "" }) : null,
              Array.from(W)
            ]
          },
          U
        ) : null
      ]
    }
  ) });
};
Cx.displayName = sr;
var Sx = "SelectTrigger", Rx = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, a = Ps(n), s = Hn(Sx, n), i = s.disabled || r, l = le(t, s.onTriggerChange), u = Ns(n), f = d.useRef("touch"), [p, g, m] = qx((h) => {
      const w = u().filter((b) => !b.disabled), x = w.find((b) => b.value === s.value), y = Xx(w, h, x);
      y !== void 0 && s.onValueChange(y.value);
    }), v = (h) => {
      i || (s.onOpenChange(!0), m()), h && (s.triggerPointerDownPosRef.current = {
        x: Math.round(h.pageX),
        y: Math.round(h.pageY)
      });
    };
    return /* @__PURE__ */ c.jsx(Gr, { asChild: !0, ...a, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: i,
        "data-disabled": i ? "" : void 0,
        "data-placeholder": Kx(s.value) ? "" : void 0,
        ...o,
        ref: l,
        onClick: H(o.onClick, (h) => {
          h.currentTarget.focus(), f.current !== "mouse" && v(h);
        }),
        onPointerDown: H(o.onPointerDown, (h) => {
          f.current = h.pointerType;
          const w = h.target;
          w.hasPointerCapture(h.pointerId) && w.releasePointerCapture(h.pointerId), h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (v(h), h.preventDefault());
        }),
        onKeyDown: H(o.onKeyDown, (h) => {
          const w = p.current !== "";
          !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key), !(w && h.key === " ") && sI.includes(h.key) && (v(), h.preventDefault());
        })
      }
    ) });
  }
);
Rx.displayName = Sx;
var Ex = "SelectValue", Nx = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e, l = Hn(Ex, n), { onValueNodeHasChildrenChange: u } = l, f = a !== void 0, p = le(t, l.onValueNodeChange);
    return Ue(() => {
      u(f);
    }, [u, f]), /* @__PURE__ */ c.jsx(
      Z.span,
      {
        ...i,
        ref: p,
        style: { pointerEvents: "none" },
        children: Kx(l.value) ? /* @__PURE__ */ c.jsx(c.Fragment, { children: s }) : a
      }
    );
  }
);
Nx.displayName = Ex;
var fI = "SelectIcon", Px = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
Px.displayName = fI;
var pI = "SelectPortal", _x = (e) => /* @__PURE__ */ c.jsx(No, { asChild: !0, ...e });
_x.displayName = pI;
var ir = "SelectContent", Mx = d.forwardRef(
  (e, t) => {
    const n = Hn(ir, e.__scopeSelect), [r, o] = d.useState();
    if (Ue(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const a = r;
      return a ? Ya.createPortal(
        /* @__PURE__ */ c.jsx(Tx, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx(Es.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ c.jsx("div", { children: e.children }) }) }),
        a
      ) : null;
    }
    return /* @__PURE__ */ c.jsx(Dx, { ...e, ref: t });
  }
);
Mx.displayName = ir;
var Ht = 10, [Tx, Gn] = Wr(ir), mI = "SelectContentImpl", gI = /* @__PURE__ */ An("SelectContent.RemoveScroll"), Dx = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      //
      // PopperContent props
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: w,
      //
      ...x
    } = e, y = Hn(ir, n), [b, S] = d.useState(null), [E, R] = d.useState(null), C = le(t, (T) => S(T)), [M, P] = d.useState(null), [j, _] = d.useState(
      null
    ), k = Ns(n), [W, A] = d.useState(!1), U = d.useRef(!1);
    d.useEffect(() => {
      if (b) return ts(b);
    }, [b]), Qa();
    const G = d.useCallback(
      (T) => {
        const [Y, ...J] = k().map((X) => X.ref.current), [te] = J.slice(-1), ne = document.activeElement;
        for (const X of T)
          if (X === ne || (X == null || X.scrollIntoView({ block: "nearest" }), X === Y && E && (E.scrollTop = 0), X === te && E && (E.scrollTop = E.scrollHeight), X == null || X.focus(), document.activeElement !== ne)) return;
      },
      [k, E]
    ), F = d.useCallback(
      () => G([M, b]),
      [G, M, b]
    );
    d.useEffect(() => {
      W && F();
    }, [W, F]);
    const { onOpenChange: L, triggerPointerDownPosRef: z } = y;
    d.useEffect(() => {
      if (b) {
        let T = { x: 0, y: 0 };
        const Y = (te) => {
          var ne, X;
          T = {
            x: Math.abs(Math.round(te.pageX) - (((ne = z.current) == null ? void 0 : ne.x) ?? 0)),
            y: Math.abs(Math.round(te.pageY) - (((X = z.current) == null ? void 0 : X.y) ?? 0))
          };
        }, J = (te) => {
          T.x <= 10 && T.y <= 10 ? te.preventDefault() : b.contains(te.target) || L(!1), document.removeEventListener("pointermove", Y), z.current = null;
        };
        return z.current !== null && (document.addEventListener("pointermove", Y), document.addEventListener("pointerup", J, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", Y), document.removeEventListener("pointerup", J, { capture: !0 });
        };
      }
    }, [b, L, z]), d.useEffect(() => {
      const T = () => L(!1);
      return window.addEventListener("blur", T), window.addEventListener("resize", T), () => {
        window.removeEventListener("blur", T), window.removeEventListener("resize", T);
      };
    }, [L]);
    const [oe, ae] = qx((T) => {
      const Y = k().filter((ne) => !ne.disabled), J = Y.find((ne) => ne.ref.current === document.activeElement), te = Xx(Y, T, J);
      te && setTimeout(() => te.ref.current.focus());
    }), $ = d.useCallback(
      (T, Y, J) => {
        const te = !U.current && !J;
        (y.value !== void 0 && y.value === Y || te) && (P(T), te && (U.current = !0));
      },
      [y.value]
    ), O = d.useCallback(() => b == null ? void 0 : b.focus(), [b]), V = d.useCallback(
      (T, Y, J) => {
        const te = !U.current && !J;
        (y.value !== void 0 && y.value === Y || te) && _(T);
      },
      [y.value]
    ), B = r === "popper" ? ol : Ix, q = B === ol ? {
      side: i,
      sideOffset: l,
      align: u,
      alignOffset: f,
      arrowPadding: p,
      collisionBoundary: g,
      collisionPadding: m,
      sticky: v,
      hideWhenDetached: h,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ c.jsx(
      Tx,
      {
        scope: n,
        content: b,
        viewport: E,
        onViewportChange: R,
        itemRefCallback: $,
        selectedItem: M,
        onItemLeave: O,
        itemTextRefCallback: V,
        focusSelectedItem: F,
        selectedItemText: j,
        position: r,
        isPositioned: W,
        searchRef: oe,
        children: /* @__PURE__ */ c.jsx(Po, { as: gI, allowPinchZoom: !0, children: /* @__PURE__ */ c.jsx(
          Eo,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (T) => {
              T.preventDefault();
            },
            onUnmountAutoFocus: H(o, (T) => {
              var Y;
              (Y = y.trigger) == null || Y.focus({ preventScroll: !0 }), T.preventDefault();
            }),
            children: /* @__PURE__ */ c.jsx(
              zn,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (T) => T.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ c.jsx(
                  B,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (T) => T.preventDefault(),
                    ...x,
                    ...q,
                    onPlaced: () => A(!0),
                    ref: C,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...x.style
                    },
                    onKeyDown: H(x.onKeyDown, (T) => {
                      const Y = T.ctrlKey || T.altKey || T.metaKey;
                      if (T.key === "Tab" && T.preventDefault(), !Y && T.key.length === 1 && ae(T.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(T.key)) {
                        let te = k().filter((ne) => !ne.disabled).map((ne) => ne.ref.current);
                        if (["ArrowUp", "End"].includes(T.key) && (te = te.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(T.key)) {
                          const ne = T.target, X = te.indexOf(ne);
                          te = te.slice(X + 1);
                        }
                        setTimeout(() => G(te)), T.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Dx.displayName = mI;
var hI = "SelectItemAlignedPosition", Ix = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, a = Hn(ir, n), s = Gn(ir, n), [i, l] = d.useState(null), [u, f] = d.useState(null), p = le(t, (C) => f(C)), g = Ns(n), m = d.useRef(!1), v = d.useRef(!0), { viewport: h, selectedItem: w, selectedItemText: x, focusSelectedItem: y } = s, b = d.useCallback(() => {
    if (a.trigger && a.valueNode && i && u && h && w && x) {
      const C = a.trigger.getBoundingClientRect(), M = u.getBoundingClientRect(), P = a.valueNode.getBoundingClientRect(), j = x.getBoundingClientRect();
      if (a.dir !== "rtl") {
        const ne = j.left - M.left, X = P.left - ne, K = C.left - X, ee = C.width + K, re = Math.max(ee, M.width), pe = window.innerWidth - Ht, ye = So(X, [
          Ht,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(Ht, pe - re)
        ]);
        i.style.minWidth = ee + "px", i.style.left = ye + "px";
      } else {
        const ne = M.right - j.right, X = window.innerWidth - P.right - ne, K = window.innerWidth - C.right - X, ee = C.width + K, re = Math.max(ee, M.width), pe = window.innerWidth - Ht, ye = So(X, [
          Ht,
          Math.max(Ht, pe - re)
        ]);
        i.style.minWidth = ee + "px", i.style.right = ye + "px";
      }
      const _ = g(), k = window.innerHeight - Ht * 2, W = h.scrollHeight, A = window.getComputedStyle(u), U = parseInt(A.borderTopWidth, 10), G = parseInt(A.paddingTop, 10), F = parseInt(A.borderBottomWidth, 10), L = parseInt(A.paddingBottom, 10), z = U + G + W + L + F, oe = Math.min(w.offsetHeight * 5, z), ae = window.getComputedStyle(h), $ = parseInt(ae.paddingTop, 10), O = parseInt(ae.paddingBottom, 10), V = C.top + C.height / 2 - Ht, B = k - V, q = w.offsetHeight / 2, T = w.offsetTop + q, Y = U + G + T, J = z - Y;
      if (Y <= V) {
        const ne = _.length > 0 && w === _[_.length - 1].ref.current;
        i.style.bottom = "0px";
        const X = u.clientHeight - h.offsetTop - h.offsetHeight, K = Math.max(
          B,
          q + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (ne ? O : 0) + X + F
        ), ee = Y + K;
        i.style.height = ee + "px";
      } else {
        const ne = _.length > 0 && w === _[0].ref.current;
        i.style.top = "0px";
        const K = Math.max(
          V,
          U + h.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (ne ? $ : 0) + q
        ) + J;
        i.style.height = K + "px", h.scrollTop = Y - V + h.offsetTop;
      }
      i.style.margin = `${Ht}px 0`, i.style.minHeight = oe + "px", i.style.maxHeight = k + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    g,
    a.trigger,
    a.valueNode,
    i,
    u,
    h,
    w,
    x,
    a.dir,
    r
  ]);
  Ue(() => b(), [b]);
  const [S, E] = d.useState();
  Ue(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const R = d.useCallback(
    (C) => {
      C && v.current === !0 && (b(), y == null || y(), v.current = !1);
    },
    [b, y]
  );
  return /* @__PURE__ */ c.jsx(
    xI,
    {
      scope: n,
      contentWrapper: i,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: R,
      children: /* @__PURE__ */ c.jsx(
        "div",
        {
          ref: l,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: S
          },
          children: /* @__PURE__ */ c.jsx(
            Z.div,
            {
              ...o,
              ref: p,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
Ix.displayName = hI;
var vI = "SelectPopperPosition", ol = d.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Ht,
    ...a
  } = e, s = Ps(n);
  return /* @__PURE__ */ c.jsx(
    Lo,
    {
      ...s,
      ...a,
      ref: t,
      align: r,
      collisionPadding: o,
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
    }
  );
});
ol.displayName = vI;
var [xI, mu] = Wr(ir, {}), al = "SelectViewport", Ax = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, a = Gn(al, n), s = mu(al, n), i = le(t, a.onViewportChange), l = d.useRef(0);
    return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ c.jsx(Es.Slot, { scope: n, children: /* @__PURE__ */ c.jsx(
        Z.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: i,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            // Viewport should only be scrollable in the vertical direction.
            // This won't work in vertical writing modes, so we'll need to
            // revisit this if/when that is supported
            // https://developer.chrome.com/blog/vertical-form-controls
            overflow: "hidden auto",
            ...o.style
          },
          onScroll: H(o.onScroll, (u) => {
            const f = u.currentTarget, { contentWrapper: p, shouldExpandOnScrollRef: g } = s;
            if (g != null && g.current && p) {
              const m = Math.abs(l.current - f.scrollTop);
              if (m > 0) {
                const v = window.innerHeight - Ht * 2, h = parseFloat(p.style.minHeight), w = parseFloat(p.style.height), x = Math.max(h, w);
                if (x < v) {
                  const y = x + m, b = Math.min(v, y), S = y - b;
                  p.style.height = b + "px", p.style.bottom === "0px" && (f.scrollTop = S > 0 ? S : 0, p.style.justifyContent = "flex-end");
                }
              }
            }
            l.current = f.scrollTop;
          })
        }
      ) })
    ] });
  }
);
Ax.displayName = al;
var jx = "SelectGroup", [wI, yI] = Wr(jx), kx = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = $e();
    return /* @__PURE__ */ c.jsx(wI, { scope: n, id: o, children: /* @__PURE__ */ c.jsx(Z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
kx.displayName = jx;
var Ox = "SelectLabel", $x = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = yI(Ox, n);
    return /* @__PURE__ */ c.jsx(Z.div, { id: o.id, ...r, ref: t });
  }
);
$x.displayName = Ox;
var Ga = "SelectItem", [bI, Lx] = Wr(Ga), Fx = d.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: a,
      ...s
    } = e, i = Hn(Ga, n), l = Gn(Ga, n), u = i.value === r, [f, p] = d.useState(a ?? ""), [g, m] = d.useState(!1), v = le(
      t,
      (y) => {
        var b;
        return (b = l.itemRefCallback) == null ? void 0 : b.call(l, y, r, o);
      }
    ), h = $e(), w = d.useRef("touch"), x = () => {
      o || (i.onValueChange(r), i.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ c.jsx(
      bI,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: h,
        isSelected: u,
        onItemTextChange: d.useCallback((y) => {
          p((b) => b || ((y == null ? void 0 : y.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ c.jsx(
          Es.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: f,
            children: /* @__PURE__ */ c.jsx(
              Z.div,
              {
                role: "option",
                "aria-labelledby": h,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": u && g,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...s,
                ref: v,
                onFocus: H(s.onFocus, () => m(!0)),
                onBlur: H(s.onBlur, () => m(!1)),
                onClick: H(s.onClick, () => {
                  w.current !== "mouse" && x();
                }),
                onPointerUp: H(s.onPointerUp, () => {
                  w.current === "mouse" && x();
                }),
                onPointerDown: H(s.onPointerDown, (y) => {
                  w.current = y.pointerType;
                }),
                onPointerMove: H(s.onPointerMove, (y) => {
                  var b;
                  w.current = y.pointerType, o ? (b = l.onItemLeave) == null || b.call(l) : w.current === "mouse" && y.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: H(s.onPointerLeave, (y) => {
                  var b;
                  y.currentTarget === document.activeElement && ((b = l.onItemLeave) == null || b.call(l));
                }),
                onKeyDown: H(s.onKeyDown, (y) => {
                  var S;
                  ((S = l.searchRef) == null ? void 0 : S.current) !== "" && y.key === " " || (iI.includes(y.key) && x(), y.key === " " && y.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Fx.displayName = Ga;
var lo = "SelectItemText", zx = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...a } = e, s = Hn(lo, n), i = Gn(lo, n), l = Lx(lo, n), u = dI(lo, n), [f, p] = d.useState(null), g = le(
      t,
      (x) => p(x),
      l.onItemTextChange,
      (x) => {
        var y;
        return (y = i.itemTextRefCallback) == null ? void 0 : y.call(i, x, l.value, l.disabled);
      }
    ), m = f == null ? void 0 : f.textContent, v = d.useMemo(
      () => /* @__PURE__ */ c.jsx("option", { value: l.value, disabled: l.disabled, children: m }, l.value),
      [l.disabled, l.value, m]
    ), { onNativeOptionAdd: h, onNativeOptionRemove: w } = u;
    return Ue(() => (h(v), () => w(v)), [h, w, v]), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
      /* @__PURE__ */ c.jsx(Z.span, { id: l.textId, ...a, ref: g }),
      l.isSelected && s.valueNode && !s.valueNodeHasChildren ? Ya.createPortal(a.children, s.valueNode) : null
    ] });
  }
);
zx.displayName = lo;
var Vx = "SelectItemIndicator", Bx = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Lx(Vx, n).isSelected ? /* @__PURE__ */ c.jsx(Z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Bx.displayName = Vx;
var sl = "SelectScrollUpButton", Hx = d.forwardRef((e, t) => {
  const n = Gn(sl, e.__scopeSelect), r = mu(sl, e.__scopeSelect), [o, a] = d.useState(!1), s = le(t, r.onScrollButtonChange);
  return Ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollTop > 0;
        a(u);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Wx,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
      }
    }
  ) : null;
});
Hx.displayName = sl;
var il = "SelectScrollDownButton", Gx = d.forwardRef((e, t) => {
  const n = Gn(il, e.__scopeSelect), r = mu(il, e.__scopeSelect), [o, a] = d.useState(!1), s = le(t, r.onScrollButtonChange);
  return Ue(() => {
    if (n.viewport && n.isPositioned) {
      let i = function() {
        const u = l.scrollHeight - l.clientHeight, f = Math.ceil(l.scrollTop) < u;
        a(f);
      };
      const l = n.viewport;
      return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ c.jsx(
    Wx,
    {
      ...e,
      ref: s,
      onAutoScroll: () => {
        const { viewport: i, selectedItem: l } = n;
        i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
      }
    }
  ) : null;
});
Gx.displayName = il;
var Wx = d.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, a = Gn("SelectScrollButton", n), s = d.useRef(null), i = Ns(n), l = d.useCallback(() => {
    s.current !== null && (window.clearInterval(s.current), s.current = null);
  }, []);
  return d.useEffect(() => () => l(), [l]), Ue(() => {
    var f;
    const u = i().find((p) => p.ref.current === document.activeElement);
    (f = u == null ? void 0 : u.ref.current) == null || f.scrollIntoView({ block: "nearest" });
  }, [i]), /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: H(o.onPointerDown, () => {
        s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerMove: H(o.onPointerMove, () => {
        var u;
        (u = a.onItemLeave) == null || u.call(a), s.current === null && (s.current = window.setInterval(r, 50));
      }),
      onPointerLeave: H(o.onPointerLeave, () => {
        l();
      })
    }
  );
}), CI = "SelectSeparator", Ux = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ c.jsx(Z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Ux.displayName = CI;
var ll = "SelectArrow", SI = d.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Ps(n), a = Hn(ll, n), s = Gn(ll, n);
    return a.open && s.position === "popper" ? /* @__PURE__ */ c.jsx(Fo, { ...o, ...r, ref: t }) : null;
  }
);
SI.displayName = ll;
var RI = "SelectBubbleInput", Yx = d.forwardRef(
  ({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = d.useRef(null), a = le(r, o), s = zr(t);
    return d.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLSelectElement.prototype, f = Object.getOwnPropertyDescriptor(
        l,
        "value"
      ).set;
      if (s !== t && f) {
        const p = new Event("change", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(p);
      }
    }, [s, t]), /* @__PURE__ */ c.jsx(
      Z.select,
      {
        ...n,
        style: { ...kv, ...n.style },
        ref: a,
        defaultValue: t
      }
    );
  }
);
Yx.displayName = RI;
function Kx(e) {
  return e === "" || e === void 0;
}
function qx(e) {
  const t = Oe(e), n = d.useRef(""), r = d.useRef(0), o = d.useCallback(
    (s) => {
      const i = n.current + s;
      t(i), function l(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
      }(i);
    },
    [t]
  ), a = d.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return d.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function Xx(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = EI(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const l = s.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function EI(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var NI = Cx, Zx = Rx, PI = Nx, _I = Px, MI = _x, Jx = Mx, TI = Ax, DI = kx, Qx = $x, ew = Fx, II = zx, AI = Bx, tw = Hx, nw = Gx, rw = Ux;
const Ld = NI, U5 = DI, Fd = PI, cl = d.forwardRef(({ className: e, customSelectIcon: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(
  Zx,
  {
    ref: o,
    style: {
      boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.03)"
    },
    className: I(
      "flex h-10 w-full items-center text-black justify-between rounded-lg border border-[#E8E9EB] bg-white pt-3 pr-3 pb-3 pl-4 text-sm ring-offset-white placeholder:text-[#C7CBD1] focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ c.jsx(_I, { asChild: !0, children: t || /* @__PURE__ */ c.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "10",
          height: "6",
          viewBox: "0 0 10 6",
          fill: "none",
          children: /* @__PURE__ */ c.jsx(
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
cl.displayName = Zx.displayName;
const ow = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  tw,
  {
    ref: n,
    className: I(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ c.jsx(Zb, { className: "h-4 w-4" })
  }
));
ow.displayName = tw.displayName;
const aw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  nw,
  {
    ref: n,
    className: I(
      "flex cursor-pointer items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ c.jsx(Ol, { className: "h-4 w-4" })
  }
));
aw.displayName = nw.displayName;
const ul = d.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ c.jsx(MI, { children: /* @__PURE__ */ c.jsxs(
  Jx,
  {
    ref: o,
    className: I(
      "relative z-50 max-h-96 min-w-[8rem] p-0 overflow-hidden rounded-lg border border-[#E8E9EB] bg-white text-slate-950 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ c.jsx(ow, {}),
      /* @__PURE__ */ c.jsx(
        TI,
        {
          className: I(
            "p-0",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ c.jsx(aw, {})
    ]
  }
) }));
ul.displayName = Jx.displayName;
const jI = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Qx,
  {
    ref: n,
    className: I("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
jI.displayName = Qx.displayName;
const dl = d.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ c.jsxs(
  ew,
  {
    ref: r,
    className: I(
      "relative flex w-full cursor-pointer select-none items-center rounded-lg py-3 px-4 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-[#0073E6]",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ c.jsx("span", { className: "absolute hidden left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ c.jsx(AI, { children: /* @__PURE__ */ c.jsx($r, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ c.jsx(II, { children: t })
    ]
  }
));
dl.displayName = ew.displayName;
const kI = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  rw,
  {
    ref: n,
    className: I("-mx-1 my-1 h-px bg-slate-100 ", e),
    ...t
  }
));
kI.displayName = rw.displayName;
var OI = "Separator", zd = "horizontal", $I = ["horizontal", "vertical"], sw = d.forwardRef((e, t) => {
  const { decorative: n, orientation: r = zd, ...o } = e, a = LI(r) ? r : zd, i = n ? { role: "none" } : { "aria-orientation": a === "vertical" ? a : void 0, role: "separator" };
  return /* @__PURE__ */ c.jsx(
    Z.div,
    {
      "data-orientation": a,
      ...i,
      ...o,
      ref: t
    }
  );
});
sw.displayName = OI;
function LI(e) {
  return $I.includes(e);
}
var iw = sw;
const FI = d.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, o) => /* @__PURE__ */ c.jsx(
    iw,
    {
      ref: o,
      decorative: n,
      orientation: t,
      className: I(
        "shrink-0 bg-slate-200  ",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
FI.displayName = iw.displayName;
const Y5 = _o, K5 = rs, q5 = ur, zI = Mo, lw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  lr,
  {
    className: I(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t,
    ref: n
  }
));
lw.displayName = lr.displayName;
const VI = dr(
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
), BI = d.forwardRef(({ side: e = "right", className: t, children: n, ...r }, o) => /* @__PURE__ */ c.jsxs(zI, { children: [
  /* @__PURE__ */ c.jsx(lw, {}),
  /* @__PURE__ */ c.jsxs(
    cr,
    {
      ref: o,
      className: I(VI({ side: e }), t),
      ...r,
      children: [
        n,
        /* @__PURE__ */ c.jsxs(ur, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100      ", children: [
          /* @__PURE__ */ c.jsx(Mi, { className: "h-4 w-4" }),
          /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
BI.displayName = cr.displayName;
const HI = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col space-y-2 text-center sm:text-left",
      e
    ),
    ...t
  }
);
HI.displayName = "SheetHeader";
const GI = ({
  className: e,
  ...t
}) => /* @__PURE__ */ c.jsx(
  "div",
  {
    className: I(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
GI.displayName = "SheetFooter";
const WI = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Lr,
  {
    ref: n,
    className: I("text-lg font-semibold text-slate-950  ", e),
    ...t
  }
));
WI.displayName = Lr.displayName;
const UI = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Fr,
  {
    ref: n,
    className: I("text-sm text-slate-500  ", e),
    ...t
  }
));
UI.displayName = Fr.displayName;
function X5({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: I("animate-pulse rounded-md bg-slate-100  ", e),
      ...t
    }
  );
}
var cw = ["PageUp", "PageDown"], uw = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], dw = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, Ur = "Slider", [fl, YI, KI] = Fn(Ur), [fw, Z5] = Fe(Ur, [
  KI
]), [qI, _s] = fw(Ur), pw = d.forwardRef(
  (e, t) => {
    const {
      name: n,
      min: r = 0,
      max: o = 100,
      step: a = 1,
      orientation: s = "horizontal",
      disabled: i = !1,
      minStepsBetweenThumbs: l = 0,
      defaultValue: u = [r],
      value: f,
      onValueChange: p = () => {
      },
      onValueCommit: g = () => {
      },
      inverted: m = !1,
      form: v,
      ...h
    } = e, w = d.useRef(/* @__PURE__ */ new Set()), x = d.useRef(0), b = s === "horizontal" ? XI : ZI, [S = [], E] = Ge({
      prop: f,
      defaultProp: u,
      onChange: (_) => {
        var W;
        (W = [...w.current][x.current]) == null || W.focus(), p(_);
      }
    }), R = d.useRef(S);
    function C(_) {
      const k = nA(S, _);
      j(_, k);
    }
    function M(_) {
      j(_, x.current);
    }
    function P() {
      const _ = R.current[x.current];
      S[x.current] !== _ && g(S);
    }
    function j(_, k, { commit: W } = { commit: !1 }) {
      const A = sA(a), U = iA(Math.round((_ - r) / a) * a + r, A), G = So(U, [r, o]);
      E((F = []) => {
        const L = eA(F, G, k);
        if (aA(L, l * a)) {
          x.current = L.indexOf(G);
          const z = String(L) !== String(F);
          return z && W && g(L), z ? L : F;
        } else
          return F;
      });
    }
    return /* @__PURE__ */ c.jsx(
      qI,
      {
        scope: e.__scopeSlider,
        name: n,
        disabled: i,
        min: r,
        max: o,
        valueIndexToChangeRef: x,
        thumbs: w.current,
        values: S,
        orientation: s,
        form: v,
        children: /* @__PURE__ */ c.jsx(fl.Provider, { scope: e.__scopeSlider, children: /* @__PURE__ */ c.jsx(fl.Slot, { scope: e.__scopeSlider, children: /* @__PURE__ */ c.jsx(
          b,
          {
            "aria-disabled": i,
            "data-disabled": i ? "" : void 0,
            ...h,
            ref: t,
            onPointerDown: H(h.onPointerDown, () => {
              i || (R.current = S);
            }),
            min: r,
            max: o,
            inverted: m,
            onSlideStart: i ? void 0 : C,
            onSlideMove: i ? void 0 : M,
            onSlideEnd: i ? void 0 : P,
            onHomeKeyDown: () => !i && j(r, 0, { commit: !0 }),
            onEndKeyDown: () => !i && j(o, S.length - 1, { commit: !0 }),
            onStepKeyDown: ({ event: _, direction: k }) => {
              if (!i) {
                const U = cw.includes(_.key) || _.shiftKey && uw.includes(_.key) ? 10 : 1, G = x.current, F = S[G], L = a * U * k;
                j(F + L, G, { commit: !0 });
              }
            }
          }
        ) }) })
      }
    );
  }
);
pw.displayName = Ur;
var [mw, gw] = fw(Ur, {
  startEdge: "left",
  endEdge: "right",
  size: "width",
  direction: 1
}), XI = d.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      dir: o,
      inverted: a,
      onSlideStart: s,
      onSlideMove: i,
      onSlideEnd: l,
      onStepKeyDown: u,
      ...f
    } = e, [p, g] = d.useState(null), m = le(t, (b) => g(b)), v = d.useRef(void 0), h = Zt(o), w = h === "ltr", x = w && !a || !w && a;
    function y(b) {
      const S = v.current || p.getBoundingClientRect(), E = [0, S.width], C = gu(E, x ? [n, r] : [r, n]);
      return v.current = S, C(b - S.left);
    }
    return /* @__PURE__ */ c.jsx(
      mw,
      {
        scope: e.__scopeSlider,
        startEdge: x ? "left" : "right",
        endEdge: x ? "right" : "left",
        direction: x ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ c.jsx(
          hw,
          {
            dir: h,
            "data-orientation": "horizontal",
            ...f,
            ref: m,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: (b) => {
              const S = y(b.clientX);
              s == null || s(S);
            },
            onSlideMove: (b) => {
              const S = y(b.clientX);
              i == null || i(S);
            },
            onSlideEnd: () => {
              v.current = void 0, l == null || l();
            },
            onStepKeyDown: (b) => {
              const E = dw[x ? "from-left" : "from-right"].includes(b.key);
              u == null || u({ event: b, direction: E ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), ZI = d.forwardRef(
  (e, t) => {
    const {
      min: n,
      max: r,
      inverted: o,
      onSlideStart: a,
      onSlideMove: s,
      onSlideEnd: i,
      onStepKeyDown: l,
      ...u
    } = e, f = d.useRef(null), p = le(t, f), g = d.useRef(void 0), m = !o;
    function v(h) {
      const w = g.current || f.current.getBoundingClientRect(), x = [0, w.height], b = gu(x, m ? [r, n] : [n, r]);
      return g.current = w, b(h - w.top);
    }
    return /* @__PURE__ */ c.jsx(
      mw,
      {
        scope: e.__scopeSlider,
        startEdge: m ? "bottom" : "top",
        endEdge: m ? "top" : "bottom",
        size: "height",
        direction: m ? 1 : -1,
        children: /* @__PURE__ */ c.jsx(
          hw,
          {
            "data-orientation": "vertical",
            ...u,
            ref: p,
            style: {
              ...u.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: (h) => {
              const w = v(h.clientY);
              a == null || a(w);
            },
            onSlideMove: (h) => {
              const w = v(h.clientY);
              s == null || s(w);
            },
            onSlideEnd: () => {
              g.current = void 0, i == null || i();
            },
            onStepKeyDown: (h) => {
              const x = dw[m ? "from-bottom" : "from-top"].includes(h.key);
              l == null || l({ event: h, direction: x ? -1 : 1 });
            }
          }
        )
      }
    );
  }
), hw = d.forwardRef(
  (e, t) => {
    const {
      __scopeSlider: n,
      onSlideStart: r,
      onSlideMove: o,
      onSlideEnd: a,
      onHomeKeyDown: s,
      onEndKeyDown: i,
      onStepKeyDown: l,
      ...u
    } = e, f = _s(Ur, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        ...u,
        ref: t,
        onKeyDown: H(e.onKeyDown, (p) => {
          p.key === "Home" ? (s(p), p.preventDefault()) : p.key === "End" ? (i(p), p.preventDefault()) : cw.concat(uw).includes(p.key) && (l(p), p.preventDefault());
        }),
        onPointerDown: H(e.onPointerDown, (p) => {
          const g = p.target;
          g.setPointerCapture(p.pointerId), p.preventDefault(), f.thumbs.has(g) ? g.focus() : r(p);
        }),
        onPointerMove: H(e.onPointerMove, (p) => {
          p.target.hasPointerCapture(p.pointerId) && o(p);
        }),
        onPointerUp: H(e.onPointerUp, (p) => {
          const g = p.target;
          g.hasPointerCapture(p.pointerId) && (g.releasePointerCapture(p.pointerId), a(p));
        })
      }
    );
  }
), vw = "SliderTrack", xw = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = _s(vw, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-disabled": o.disabled ? "" : void 0,
        "data-orientation": o.orientation,
        ...r,
        ref: t
      }
    );
  }
);
xw.displayName = vw;
var pl = "SliderRange", ww = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, ...r } = e, o = _s(pl, n), a = gw(pl, n), s = d.useRef(null), i = le(t, s), l = o.values.length, u = o.values.map(
      (g) => Cw(g, o.min, o.max)
    ), f = l > 1 ? Math.min(...u) : 0, p = 100 - Math.max(...u);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-orientation": o.orientation,
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: i,
        style: {
          ...e.style,
          [a.startEdge]: f + "%",
          [a.endEdge]: p + "%"
        }
      }
    );
  }
);
ww.displayName = pl;
var ml = "SliderThumb", yw = d.forwardRef(
  (e, t) => {
    const n = YI(e.__scopeSlider), [r, o] = d.useState(null), a = le(t, (i) => o(i)), s = d.useMemo(
      () => r ? n().findIndex((i) => i.ref.current === r) : -1,
      [n, r]
    );
    return /* @__PURE__ */ c.jsx(JI, { ...e, ref: a, index: s });
  }
), JI = d.forwardRef(
  (e, t) => {
    const { __scopeSlider: n, index: r, name: o, ...a } = e, s = _s(ml, n), i = gw(ml, n), [l, u] = d.useState(null), f = le(t, (y) => u(y)), p = l ? s.form || !!l.closest("form") : !0, g = ko(l), m = s.values[r], v = m === void 0 ? 0 : Cw(m, s.min, s.max), h = tA(r, s.values.length), w = g == null ? void 0 : g[i.size], x = w ? rA(w, v, i.direction) : 0;
    return d.useEffect(() => {
      if (l)
        return s.thumbs.add(l), () => {
          s.thumbs.delete(l);
        };
    }, [l, s.thumbs]), /* @__PURE__ */ c.jsxs(
      "span",
      {
        style: {
          transform: "var(--radix-slider-thumb-transform)",
          position: "absolute",
          [i.startEdge]: `calc(${v}% + ${x}px)`
        },
        children: [
          /* @__PURE__ */ c.jsx(fl.ItemSlot, { scope: e.__scopeSlider, children: /* @__PURE__ */ c.jsx(
            Z.span,
            {
              role: "slider",
              "aria-label": e["aria-label"] || h,
              "aria-valuemin": s.min,
              "aria-valuenow": m,
              "aria-valuemax": s.max,
              "aria-orientation": s.orientation,
              "data-orientation": s.orientation,
              "data-disabled": s.disabled ? "" : void 0,
              tabIndex: s.disabled ? void 0 : 0,
              ...a,
              ref: f,
              style: m === void 0 ? { display: "none" } : e.style,
              onFocus: H(e.onFocus, () => {
                s.valueIndexToChangeRef.current = r;
              })
            }
          ) }),
          p && /* @__PURE__ */ c.jsx(
            bw,
            {
              name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
              form: s.form,
              value: m
            },
            r
          )
        ]
      }
    );
  }
);
yw.displayName = ml;
var QI = "RadioBubbleInput", bw = d.forwardRef(
  ({ __scopeSlider: e, value: t, ...n }, r) => {
    const o = d.useRef(null), a = le(o, r), s = zr(t);
    return d.useEffect(() => {
      const i = o.current;
      if (!i) return;
      const l = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(l, "value").set;
      if (s !== t && f) {
        const p = new Event("input", { bubbles: !0 });
        f.call(i, t), i.dispatchEvent(p);
      }
    }, [s, t]), /* @__PURE__ */ c.jsx(
      Z.input,
      {
        style: { display: "none" },
        ...n,
        ref: a,
        defaultValue: t
      }
    );
  }
);
bw.displayName = QI;
function eA(e = [], t, n) {
  const r = [...e];
  return r[n] = t, r.sort((o, a) => o - a);
}
function Cw(e, t, n) {
  const a = 100 / (n - t) * (e - t);
  return So(a, [0, 100]);
}
function tA(e, t) {
  return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function nA(e, t) {
  if (e.length === 1) return 0;
  const n = e.map((o) => Math.abs(o - t)), r = Math.min(...n);
  return n.indexOf(r);
}
function rA(e, t, n) {
  const r = e / 2, a = gu([0, 50], [0, r]);
  return (r - a(t) * n) * n;
}
function oA(e) {
  return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function aA(e, t) {
  if (t > 0) {
    const n = oA(e);
    return Math.min(...n) >= t;
  }
  return !0;
}
function gu(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function sA(e) {
  return (String(e).split(".")[1] || "").length;
}
function iA(e, t) {
  const n = Math.pow(10, t);
  return Math.round(e * n) / n;
}
var Sw = pw, lA = xw, cA = ww, uA = yw;
const dA = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsxs(
  Sw,
  {
    ref: n,
    className: I(
      "relative flex w-full touch-none select-none items-center",
      e
    ),
    ...t,
    children: [
      /* @__PURE__ */ c.jsx(lA, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100  ", children: /* @__PURE__ */ c.jsx(cA, { className: "absolute h-full bg-slate-900  " }) }),
      /* @__PURE__ */ c.jsx(uA, { className: "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50        " })
    ]
  }
));
dA.displayName = Sw.displayName;
var Vd = ["light", "dark"], fA = "(prefers-color-scheme: dark)", pA = d.createContext(void 0), mA = { setTheme: (e) => {
}, themes: [] }, gA = () => {
  var e;
  return (e = d.useContext(pA)) != null ? e : mA;
};
d.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: o, defaultTheme: a, value: s, attrs: i, nonce: l }) => {
  let u = a === "system", f = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((v) => `'${v}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`, p = o ? Vd.includes(a) && a ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "", g = (v, h = !1, w = !0) => {
    let x = s ? s[v] : v, y = h ? v + "|| ''" : `'${x}'`, b = "";
    return o && w && !h && Vd.includes(v) && (b += `d.style.colorScheme = '${v}';`), n === "class" ? h || x ? b += `c.add(${y})` : b += "null" : x && (b += `d[s](n,${y})`), b;
  }, m = e ? `!function(){${f}${g(e)}}()` : r ? `!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${fA}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}${u ? "" : "else{" + g(a, !1, !1) + "}"}${p}}catch(e){}}()` : `!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}else{${g(a, !1, !1)};}${p}}catch(t){}}();`;
  return d.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: m } });
});
var hA = (e) => {
  switch (e) {
    case "success":
      return wA;
    case "info":
      return bA;
    case "warning":
      return yA;
    case "error":
      return CA;
    default:
      return null;
  }
}, vA = Array(12).fill(0), xA = ({ visible: e, className: t }) => D.createElement("div", { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e }, D.createElement("div", { className: "sonner-spinner" }, vA.map((n, r) => D.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), wA = D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, D.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), yA = D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, D.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), bA = D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, D.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), CA = D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, D.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), SA = D.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, D.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), D.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })), RA = () => {
  let [e, t] = D.useState(document.hidden);
  return D.useEffect(() => {
    let n = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, gl = 1, EA = class {
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
      let { message: n, ...r } = e, o = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : gl++, a = this.toasts.find((i) => i.id === o), s = e.dismissible === void 0 ? !0 : e.dismissible;
      return this.dismissedToasts.has(o) && this.dismissedToasts.delete(o), a ? this.toasts = this.toasts.map((i) => i.id === o ? (this.publish({ ...i, ...e, id: o, title: n }), { ...i, ...e, id: o, dismissible: s, title: n }) : i) : this.addToast({ title: n, ...r, dismissible: s, id: o }), o;
    }, this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let n;
      t.loading !== void 0 && (n = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let r = e instanceof Promise ? e : e(), o = n !== void 0, a, s = r.then(async (l) => {
        if (a = ["resolve", l], D.isValidElement(l)) o = !1, this.create({ id: n, type: "default", message: l });
        else if (PA(l) && !l.ok) {
          o = !1;
          let u = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, f = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        } else if (t.success !== void 0) {
          o = !1;
          let u = typeof t.success == "function" ? await t.success(l) : t.success, f = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "success", message: u, description: f });
        }
      }).catch(async (l) => {
        if (a = ["reject", l], t.error !== void 0) {
          o = !1;
          let u = typeof t.error == "function" ? await t.error(l) : t.error, f = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: n, type: "error", message: u, description: f });
        }
      }).finally(() => {
        var l;
        o && (this.dismiss(n), n = void 0), (l = t.finally) == null || l.call(t);
      }), i = () => new Promise((l, u) => s.then(() => a[0] === "reject" ? u(a[1]) : l(a[1])).catch(u));
      return typeof n != "string" && typeof n != "number" ? { unwrap: i } : Object.assign(n, { unwrap: i });
    }, this.custom = (e, t) => {
      let n = (t == null ? void 0 : t.id) || gl++;
      return this.create({ jsx: e(n), id: n, ...t }), n;
    }, this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, Et = new EA(), NA = (e, t) => {
  let n = (t == null ? void 0 : t.id) || gl++;
  return Et.addToast({ title: e, ...t, id: n }), n;
}, PA = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", _A = NA, MA = () => Et.toasts, TA = () => Et.getActiveToasts(), Bd = Object.assign(_A, { success: Et.success, info: Et.info, warning: Et.warning, error: Et.error, custom: Et.custom, message: Et.message, promise: Et.promise, dismiss: Et.dismiss, loading: Et.loading }, { getHistory: MA, getToasts: TA });
function DA(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
DA(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function sa(e) {
  return e.label !== void 0;
}
var IA = 3, AA = "32px", jA = "16px", Hd = 4e3, kA = 356, OA = 14, $A = 20, LA = 200;
function Bt(...e) {
  return e.filter(Boolean).join(" ");
}
function FA(e) {
  let [t, n] = e.split("-"), r = [];
  return t && r.push(t), n && r.push(n), r;
}
var zA = (e) => {
  var t, n, r, o, a, s, i, l, u, f, p;
  let { invert: g, toast: m, unstyled: v, interacting: h, setHeights: w, visibleToasts: x, heights: y, index: b, toasts: S, expanded: E, removeToast: R, defaultRichColors: C, closeButton: M, style: P, cancelButtonStyle: j, actionButtonStyle: _, className: k = "", descriptionClassName: W = "", duration: A, position: U, gap: G, loadingIcon: F, expandByDefault: L, classNames: z, icons: oe, closeButtonAriaLabel: ae = "Close toast", pauseWhenPageIsHidden: $ } = e, [O, V] = D.useState(null), [B, q] = D.useState(null), [T, Y] = D.useState(!1), [J, te] = D.useState(!1), [ne, X] = D.useState(!1), [K, ee] = D.useState(!1), [re, pe] = D.useState(!1), [ye, ge] = D.useState(0), [ue, Me] = D.useState(0), Le = D.useRef(m.duration || A || Hd), Te = D.useRef(null), Ve = D.useRef(null), rt = b === 0, st = b + 1 <= x, Ae = m.type, Be = m.dismissible !== !1, tn = m.className || "", Ct = m.descriptionClassName || "", it = D.useMemo(() => y.findIndex((ie) => ie.toastId === m.id) || 0, [y, m.id]), ht = D.useMemo(() => {
    var ie;
    return (ie = m.closeButton) != null ? ie : M;
  }, [m.closeButton, M]), Mt = D.useMemo(() => m.duration || A || Hd, [m.duration, A]), et = D.useRef(0), dt = D.useRef(0), nn = D.useRef(0), $t = D.useRef(null), [Un, ce] = U.split("-"), Ce = D.useMemo(() => y.reduce((ie, ve, Re) => Re >= it ? ie : ie + ve.height, 0), [y, it]), Se = RA(), Pe = m.invert || g, be = Ae === "loading";
  dt.current = D.useMemo(() => it * G + Ce, [it, Ce]), D.useEffect(() => {
    Le.current = Mt;
  }, [Mt]), D.useEffect(() => {
    Y(!0);
  }, []), D.useEffect(() => {
    let ie = Ve.current;
    if (ie) {
      let ve = ie.getBoundingClientRect().height;
      return Me(ve), w((Re) => [{ toastId: m.id, height: ve, position: m.position }, ...Re]), () => w((Re) => Re.filter((Ke) => Ke.toastId !== m.id));
    }
  }, [w, m.id]), D.useLayoutEffect(() => {
    if (!T) return;
    let ie = Ve.current, ve = ie.style.height;
    ie.style.height = "auto";
    let Re = ie.getBoundingClientRect().height;
    ie.style.height = ve, Me(Re), w((Ke) => Ke.find((We) => We.toastId === m.id) ? Ke.map((We) => We.toastId === m.id ? { ...We, height: Re } : We) : [{ toastId: m.id, height: Re, position: m.position }, ...Ke]);
  }, [T, m.title, m.description, w, m.id]);
  let je = D.useCallback(() => {
    te(!0), ge(dt.current), w((ie) => ie.filter((ve) => ve.toastId !== m.id)), setTimeout(() => {
      R(m);
    }, LA);
  }, [m, R, w, dt]);
  D.useEffect(() => {
    if (m.promise && Ae === "loading" || m.duration === 1 / 0 || m.type === "loading") return;
    let ie;
    return E || h || $ && Se ? (() => {
      if (nn.current < et.current) {
        let ve = (/* @__PURE__ */ new Date()).getTime() - et.current;
        Le.current = Le.current - ve;
      }
      nn.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Le.current !== 1 / 0 && (et.current = (/* @__PURE__ */ new Date()).getTime(), ie = setTimeout(() => {
      var ve;
      (ve = m.onAutoClose) == null || ve.call(m, m), je();
    }, Le.current)), () => clearTimeout(ie);
  }, [E, h, m, Ae, $, Se, je]), D.useEffect(() => {
    m.delete && je();
  }, [je, m.delete]);
  function Je() {
    var ie, ve, Re;
    return oe != null && oe.loading ? D.createElement("div", { className: Bt(z == null ? void 0 : z.loader, (ie = m == null ? void 0 : m.classNames) == null ? void 0 : ie.loader, "sonner-loader"), "data-visible": Ae === "loading" }, oe.loading) : F ? D.createElement("div", { className: Bt(z == null ? void 0 : z.loader, (ve = m == null ? void 0 : m.classNames) == null ? void 0 : ve.loader, "sonner-loader"), "data-visible": Ae === "loading" }, F) : D.createElement(xA, { className: Bt(z == null ? void 0 : z.loader, (Re = m == null ? void 0 : m.classNames) == null ? void 0 : Re.loader), visible: Ae === "loading" });
  }
  return D.createElement("li", { tabIndex: 0, ref: Ve, className: Bt(k, tn, z == null ? void 0 : z.toast, (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast, z == null ? void 0 : z.default, z == null ? void 0 : z[Ae], (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[Ae]), "data-sonner-toast": "", "data-rich-colors": (r = m.richColors) != null ? r : C, "data-styled": !(m.jsx || m.unstyled || v), "data-mounted": T, "data-promise": !!m.promise, "data-swiped": re, "data-removed": J, "data-visible": st, "data-y-position": Un, "data-x-position": ce, "data-index": b, "data-front": rt, "data-swiping": ne, "data-dismissible": Be, "data-type": Ae, "data-invert": Pe, "data-swipe-out": K, "data-swipe-direction": B, "data-expanded": !!(E || L && T), style: { "--index": b, "--toasts-before": b, "--z-index": S.length - b, "--offset": `${J ? ye : dt.current}px`, "--initial-height": L ? "auto" : `${ue}px`, ...P, ...m.style }, onDragEnd: () => {
    X(!1), V(null), $t.current = null;
  }, onPointerDown: (ie) => {
    be || !Be || (Te.current = /* @__PURE__ */ new Date(), ge(dt.current), ie.target.setPointerCapture(ie.pointerId), ie.target.tagName !== "BUTTON" && (X(!0), $t.current = { x: ie.clientX, y: ie.clientY }));
  }, onPointerUp: () => {
    var ie, ve, Re, Ke;
    if (K || !Be) return;
    $t.current = null;
    let We = Number(((ie = Ve.current) == null ? void 0 : ie.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), vt = Number(((ve = Ve.current) == null ? void 0 : ve.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Tt = (/* @__PURE__ */ new Date()).getTime() - ((Re = Te.current) == null ? void 0 : Re.getTime()), St = O === "x" ? We : vt, rn = Math.abs(St) / Tt;
    if (Math.abs(St) >= $A || rn > 0.11) {
      ge(dt.current), (Ke = m.onDismiss) == null || Ke.call(m, m), q(O === "x" ? We > 0 ? "right" : "left" : vt > 0 ? "down" : "up"), je(), ee(!0), pe(!1);
      return;
    }
    X(!1), V(null);
  }, onPointerMove: (ie) => {
    var ve, Re, Ke, We;
    if (!$t.current || !Be || ((ve = window.getSelection()) == null ? void 0 : ve.toString().length) > 0) return;
    let vt = ie.clientY - $t.current.y, Tt = ie.clientX - $t.current.x, St = (Re = e.swipeDirections) != null ? Re : FA(U);
    !O && (Math.abs(Tt) > 1 || Math.abs(vt) > 1) && V(Math.abs(Tt) > Math.abs(vt) ? "x" : "y");
    let rn = { x: 0, y: 0 };
    O === "y" ? (St.includes("top") || St.includes("bottom")) && (St.includes("top") && vt < 0 || St.includes("bottom") && vt > 0) && (rn.y = vt) : O === "x" && (St.includes("left") || St.includes("right")) && (St.includes("left") && Tt < 0 || St.includes("right") && Tt > 0) && (rn.x = Tt), (Math.abs(rn.x) > 0 || Math.abs(rn.y) > 0) && pe(!0), (Ke = Ve.current) == null || Ke.style.setProperty("--swipe-amount-x", `${rn.x}px`), (We = Ve.current) == null || We.style.setProperty("--swipe-amount-y", `${rn.y}px`);
  } }, ht && !m.jsx ? D.createElement("button", { "aria-label": ae, "data-disabled": be, "data-close-button": !0, onClick: be || !Be ? () => {
  } : () => {
    var ie;
    je(), (ie = m.onDismiss) == null || ie.call(m, m);
  }, className: Bt(z == null ? void 0 : z.closeButton, (o = m == null ? void 0 : m.classNames) == null ? void 0 : o.closeButton) }, (a = oe == null ? void 0 : oe.close) != null ? a : SA) : null, m.jsx || $s(m.title) ? m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title : D.createElement(D.Fragment, null, Ae || m.icon || m.promise ? D.createElement("div", { "data-icon": "", className: Bt(z == null ? void 0 : z.icon, (s = m == null ? void 0 : m.classNames) == null ? void 0 : s.icon) }, m.promise || m.type === "loading" && !m.icon ? m.icon || Je() : null, m.type !== "loading" ? m.icon || (oe == null ? void 0 : oe[Ae]) || hA(Ae) : null) : null, D.createElement("div", { "data-content": "", className: Bt(z == null ? void 0 : z.content, (i = m == null ? void 0 : m.classNames) == null ? void 0 : i.content) }, D.createElement("div", { "data-title": "", className: Bt(z == null ? void 0 : z.title, (l = m == null ? void 0 : m.classNames) == null ? void 0 : l.title) }, typeof m.title == "function" ? m.title() : m.title), m.description ? D.createElement("div", { "data-description": "", className: Bt(W, Ct, z == null ? void 0 : z.description, (u = m == null ? void 0 : m.classNames) == null ? void 0 : u.description) }, typeof m.description == "function" ? m.description() : m.description) : null), $s(m.cancel) ? m.cancel : m.cancel && sa(m.cancel) ? D.createElement("button", { "data-button": !0, "data-cancel": !0, style: m.cancelButtonStyle || j, onClick: (ie) => {
    var ve, Re;
    sa(m.cancel) && Be && ((Re = (ve = m.cancel).onClick) == null || Re.call(ve, ie), je());
  }, className: Bt(z == null ? void 0 : z.cancelButton, (f = m == null ? void 0 : m.classNames) == null ? void 0 : f.cancelButton) }, m.cancel.label) : null, $s(m.action) ? m.action : m.action && sa(m.action) ? D.createElement("button", { "data-button": !0, "data-action": !0, style: m.actionButtonStyle || _, onClick: (ie) => {
    var ve, Re;
    sa(m.action) && ((Re = (ve = m.action).onClick) == null || Re.call(ve, ie), !ie.defaultPrevented && je());
  }, className: Bt(z == null ? void 0 : z.actionButton, (p = m == null ? void 0 : m.classNames) == null ? void 0 : p.actionButton) }, m.action.label) : null));
};
function Gd() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function VA(e, t) {
  let n = {};
  return [e, t].forEach((r, o) => {
    let a = o === 1, s = a ? "--mobile-offset" : "--offset", i = a ? jA : AA;
    function l(u) {
      ["top", "right", "bottom", "left"].forEach((f) => {
        n[`${s}-${f}`] = typeof u == "number" ? `${u}px` : u;
      });
    }
    typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach((u) => {
      r[u] === void 0 ? n[`${s}-${u}`] = i : n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u];
    }) : l(i);
  }), n;
}
var BA = pn(function(e, t) {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: a, closeButton: s, className: i, offset: l, mobileOffset: u, theme: f = "light", richColors: p, duration: g, style: m, visibleToasts: v = IA, toastOptions: h, dir: w = Gd(), gap: x = OA, loadingIcon: y, icons: b, containerAriaLabel: S = "Notifications", pauseWhenPageIsHidden: E } = e, [R, C] = D.useState([]), M = D.useMemo(() => Array.from(new Set([r].concat(R.filter(($) => $.position).map(($) => $.position)))), [R, r]), [P, j] = D.useState([]), [_, k] = D.useState(!1), [W, A] = D.useState(!1), [U, G] = D.useState(f !== "system" ? f : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), F = D.useRef(null), L = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), z = D.useRef(null), oe = D.useRef(!1), ae = D.useCallback(($) => {
    C((O) => {
      var V;
      return (V = O.find((B) => B.id === $.id)) != null && V.delete || Et.dismiss($.id), O.filter(({ id: B }) => B !== $.id);
    });
  }, []);
  return D.useEffect(() => Et.subscribe(($) => {
    if ($.dismiss) {
      C((O) => O.map((V) => V.id === $.id ? { ...V, delete: !0 } : V));
      return;
    }
    setTimeout(() => {
      Rl.flushSync(() => {
        C((O) => {
          let V = O.findIndex((B) => B.id === $.id);
          return V !== -1 ? [...O.slice(0, V), { ...O[V], ...$ }, ...O.slice(V + 1)] : [$, ...O];
        });
      });
    });
  }), []), D.useEffect(() => {
    if (f !== "system") {
      G(f);
      return;
    }
    if (f === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? G("dark") : G("light")), typeof window > "u") return;
    let $ = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      $.addEventListener("change", ({ matches: O }) => {
        G(O ? "dark" : "light");
      });
    } catch {
      $.addListener(({ matches: V }) => {
        try {
          G(V ? "dark" : "light");
        } catch (B) {
          console.error(B);
        }
      });
    }
  }, [f]), D.useEffect(() => {
    R.length <= 1 && k(!1);
  }, [R]), D.useEffect(() => {
    let $ = (O) => {
      var V, B;
      o.every((q) => O[q] || O.code === q) && (k(!0), (V = F.current) == null || V.focus()), O.code === "Escape" && (document.activeElement === F.current || (B = F.current) != null && B.contains(document.activeElement)) && k(!1);
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [o]), D.useEffect(() => {
    if (F.current) return () => {
      z.current && (z.current.focus({ preventScroll: !0 }), z.current = null, oe.current = !1);
    };
  }, [F.current]), D.createElement("section", { ref: t, "aria-label": `${S} ${L}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: !0 }, M.map(($, O) => {
    var V;
    let [B, q] = $.split("-");
    return R.length ? D.createElement("ol", { key: $, dir: w === "auto" ? Gd() : w, tabIndex: -1, ref: F, className: i, "data-sonner-toaster": !0, "data-theme": U, "data-y-position": B, "data-lifted": _ && R.length > 1 && !a, "data-x-position": q, style: { "--front-toast-height": `${((V = P[0]) == null ? void 0 : V.height) || 0}px`, "--width": `${kA}px`, "--gap": `${x}px`, ...m, ...VA(l, u) }, onBlur: (T) => {
      oe.current && !T.currentTarget.contains(T.relatedTarget) && (oe.current = !1, z.current && (z.current.focus({ preventScroll: !0 }), z.current = null));
    }, onFocus: (T) => {
      T.target instanceof HTMLElement && T.target.dataset.dismissible === "false" || oe.current || (oe.current = !0, z.current = T.relatedTarget);
    }, onMouseEnter: () => k(!0), onMouseMove: () => k(!0), onMouseLeave: () => {
      W || k(!1);
    }, onDragEnd: () => k(!1), onPointerDown: (T) => {
      T.target instanceof HTMLElement && T.target.dataset.dismissible === "false" || A(!0);
    }, onPointerUp: () => A(!1) }, R.filter((T) => !T.position && O === 0 || T.position === $).map((T, Y) => {
      var J, te;
      return D.createElement(zA, { key: T.id, icons: b, index: Y, toast: T, defaultRichColors: p, duration: (J = h == null ? void 0 : h.duration) != null ? J : g, className: h == null ? void 0 : h.className, descriptionClassName: h == null ? void 0 : h.descriptionClassName, invert: n, visibleToasts: v, closeButton: (te = h == null ? void 0 : h.closeButton) != null ? te : s, interacting: W, position: $, style: h == null ? void 0 : h.style, unstyled: h == null ? void 0 : h.unstyled, classNames: h == null ? void 0 : h.classNames, cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle, actionButtonStyle: h == null ? void 0 : h.actionButtonStyle, removeToast: ae, toasts: R.filter((ne) => ne.position == T.position), heights: P.filter((ne) => ne.position == T.position), setHeights: j, expandByDefault: a, gap: x, loadingIcon: y, expanded: _, pauseWhenPageIsHidden: E, swipeDirections: e.swipeDirections });
    })) : null;
  }));
});
const J5 = ({ ...e }) => {
  const { theme: t = "system" } = gA();
  return /* @__PURE__ */ c.jsx(
    BA,
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
}, Q5 = ({
  description: e,
  showCloseButton: t
}) => {
  Bd(
    /* @__PURE__ */ c.jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ c.jsx("div", { className: "pl-3", children: /* @__PURE__ */ c.jsx("p", { className: "text-xs text-[#212329]", children: e }) }),
      t && /* @__PURE__ */ c.jsx(
        "button",
        {
          onClick: () => Bd.dismiss(),
          className: "absolute top-4 right-4",
          children: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ c.jsx(
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
};
var Ms = "Switch", [HA, ek] = Fe(Ms), [GA, WA] = HA(Ms), Rw = d.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: s,
      disabled: i,
      value: l = "on",
      onCheckedChange: u,
      form: f,
      ...p
    } = e, [g, m] = d.useState(null), v = le(t, (b) => m(b)), h = d.useRef(!1), w = g ? f || !!g.closest("form") : !0, [x, y] = Ge({
      prop: o,
      defaultProp: a ?? !1,
      onChange: u,
      caller: Ms
    });
    return /* @__PURE__ */ c.jsxs(GA, { scope: n, checked: x, disabled: i, children: [
      /* @__PURE__ */ c.jsx(
        Z.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": x,
          "aria-required": s,
          "data-state": _w(x),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: l,
          ...p,
          ref: v,
          onClick: H(e.onClick, (b) => {
            y((S) => !S), w && (h.current = b.isPropagationStopped(), h.current || b.stopPropagation());
          })
        }
      ),
      w && /* @__PURE__ */ c.jsx(
        Pw,
        {
          control: g,
          bubbles: !h.current,
          name: r,
          value: l,
          checked: x,
          required: s,
          disabled: i,
          form: f,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Rw.displayName = Ms;
var Ew = "SwitchThumb", Nw = d.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = WA(Ew, n);
    return /* @__PURE__ */ c.jsx(
      Z.span,
      {
        "data-state": _w(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
Nw.displayName = Ew;
var UA = "SwitchBubbleInput", Pw = d.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const s = d.useRef(null), i = le(s, a), l = zr(n), u = ko(t);
    return d.useEffect(() => {
      const f = s.current;
      if (!f) return;
      const p = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (l !== n && m) {
        const v = new Event("click", { bubbles: r });
        m.call(f, n), f.dispatchEvent(v);
      }
    }, [l, n, r]), /* @__PURE__ */ c.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
        style: {
          ...o.style,
          ...u,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Pw.displayName = UA;
function _w(e) {
  return e ? "checked" : "unchecked";
}
var Mw = Rw, YA = Nw;
const KA = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Mw,
  {
    className: I(
      "peer inline-flex h-4 w-7 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#0073E6] data-[state=unchecked]:bg-[#9B9EA3]",
      e
    ),
    ...t,
    ref: n,
    children: /* @__PURE__ */ c.jsx(
      YA,
      {
        className: I(
          "pointer-events-none block h-3 w-3 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
KA.displayName = Mw.displayName;
const Tw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ c.jsx(
  "table",
  {
    ref: n,
    className: I("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
Tw.displayName = "Table";
const Dw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx("thead", { ref: n, className: I("[&_tr]:border-b", e), ...t }));
Dw.displayName = "TableHeader";
const Iw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tbody",
  {
    ref: n,
    className: I("[&_tr:last-child]:border-0", e),
    ...t
  }
));
Iw.displayName = "TableBody";
const qA = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tfoot",
  {
    ref: n,
    className: I(
      "border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0  ",
      e
    ),
    ...t
  }
));
qA.displayName = "TableFooter";
const ya = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "tr",
  {
    ref: n,
    className: I(
      "border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100    ",
      e
    ),
    ...t
  }
));
ya.displayName = "TableRow";
const Aw = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "th",
  {
    ref: n,
    className: I(
      "h-12 px-4 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0  ",
      e
    ),
    ...t
  }
));
Aw.displayName = "TableHead";
const hl = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "td",
  {
    ref: n,
    className: I("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
hl.displayName = "TableCell";
const XA = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  "caption",
  {
    ref: n,
    className: I("mt-4 text-sm text-slate-500  ", e),
    ...t
  }
));
XA.displayName = "TableCaption";
var Ts = "Tabs", [ZA, tk] = Fe(Ts, [
  hn
]), jw = hn(), [JA, hu] = ZA(Ts), kw = d.forwardRef(
  (e, t) => {
    const {
      __scopeTabs: n,
      value: r,
      onValueChange: o,
      defaultValue: a,
      orientation: s = "horizontal",
      dir: i,
      activationMode: l = "automatic",
      ...u
    } = e, f = Zt(i), [p, g] = Ge({
      prop: r,
      onChange: o,
      defaultProp: a ?? "",
      caller: Ts
    });
    return /* @__PURE__ */ c.jsx(
      JA,
      {
        scope: n,
        baseId: $e(),
        value: p,
        onValueChange: g,
        orientation: s,
        dir: f,
        activationMode: l,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            dir: f,
            "data-orientation": s,
            ...u,
            ref: t
          }
        )
      }
    );
  }
);
kw.displayName = Ts;
var Ow = "TabsList", $w = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, loop: r = !0, ...o } = e, a = hu(Ow, n), s = jw(n);
    return /* @__PURE__ */ c.jsx(
      Vo,
      {
        asChild: !0,
        ...s,
        orientation: a.orientation,
        dir: a.dir,
        loop: r,
        children: /* @__PURE__ */ c.jsx(
          Z.div,
          {
            role: "tablist",
            "aria-orientation": a.orientation,
            ...o,
            ref: t
          }
        )
      }
    );
  }
);
$w.displayName = Ow;
var Lw = "TabsTrigger", Fw = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e, s = hu(Lw, n), i = jw(n), l = Bw(s.baseId, r), u = Hw(s.baseId, r), f = r === s.value;
    return /* @__PURE__ */ c.jsx(
      Bo,
      {
        asChild: !0,
        ...i,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ c.jsx(
          Z.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": f,
            "aria-controls": u,
            "data-state": f ? "active" : "inactive",
            "data-disabled": o ? "" : void 0,
            disabled: o,
            id: l,
            ...a,
            ref: t,
            onMouseDown: H(e.onMouseDown, (p) => {
              !o && p.button === 0 && p.ctrlKey === !1 ? s.onValueChange(r) : p.preventDefault();
            }),
            onKeyDown: H(e.onKeyDown, (p) => {
              [" ", "Enter"].includes(p.key) && s.onValueChange(r);
            }),
            onFocus: H(e.onFocus, () => {
              const p = s.activationMode !== "manual";
              !f && !o && p && s.onValueChange(r);
            })
          }
        )
      }
    );
  }
);
Fw.displayName = Lw;
var zw = "TabsContent", Vw = d.forwardRef(
  (e, t) => {
    const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e, i = hu(zw, n), l = Bw(i.baseId, r), u = Hw(i.baseId, r), f = r === i.value, p = d.useRef(f);
    return d.useEffect(() => {
      const g = requestAnimationFrame(() => p.current = !1);
      return () => cancelAnimationFrame(g);
    }, []), /* @__PURE__ */ c.jsx(Ye, { present: o || f, children: ({ present: g }) => /* @__PURE__ */ c.jsx(
      Z.div,
      {
        "data-state": f ? "active" : "inactive",
        "data-orientation": i.orientation,
        role: "tabpanel",
        "aria-labelledby": l,
        hidden: !g,
        id: u,
        tabIndex: 0,
        ...s,
        ref: t,
        style: {
          ...e.style,
          animationDuration: p.current ? "0s" : void 0
        },
        children: g && a
      }
    ) });
  }
);
Vw.displayName = zw;
function Bw(e, t) {
  return `${e}-trigger-${t}`;
}
function Hw(e, t) {
  return `${e}-content-${t}`;
}
var QA = kw, Gw = $w, Ww = Fw, Uw = Vw;
const nk = QA, ej = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Gw,
  {
    ref: n,
    className: I("!flex h-10 items-center", e),
    ...t
  }
));
ej.displayName = Gw.displayName;
const tj = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Ww,
  {
    ref: n,
    className: I(
      "inline-flex border-b-2 border-b-white border-solid leading-5 items-center justify-center whitespace-nowrap px-[12px] pb-[14px] text-[14px] text-[#000000] font-normal transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-[#0073E6] data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-b-[#006DDA]",
      e
    ),
    ...t
  }
));
tj.displayName = Ww.displayName;
const nj = d.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
  Uw,
  {
    ref: n,
    className: I(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2    ",
      e
    ),
    ...t
  }
));
nj.displayName = Uw.displayName;
const rj = d.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ c.jsx(
    "textarea",
    {
      className: I(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50          ",
        e
      ),
      ref: n,
      ...t
    }
  )
);
rj.displayName = "Textarea";
var Yw = "Toggle", vu = d.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r, onPressedChange: o, ...a } = e, [s, i] = Ge({
    prop: n,
    onChange: o,
    defaultProp: r ?? !1,
    caller: Yw
  });
  return /* @__PURE__ */ c.jsx(
    Z.button,
    {
      type: "button",
      "aria-pressed": s,
      "data-state": s ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...a,
      ref: t,
      onClick: H(e.onClick, () => {
        e.disabled || i(!s);
      })
    }
  );
});
vu.displayName = Yw;
var Kw = vu, Wn = "ToggleGroup", [qw, rk] = Fe(Wn, [
  hn
]), Xw = hn(), xu = D.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single") {
    const o = r;
    return /* @__PURE__ */ c.jsx(oj, { ...o, ref: t });
  }
  if (n === "multiple") {
    const o = r;
    return /* @__PURE__ */ c.jsx(aj, { ...o, ref: t });
  }
  throw new Error(`Missing prop \`type\` expected on \`${Wn}\``);
});
xu.displayName = Wn;
var [Zw, Jw] = qw(Wn), oj = D.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Ge({
    prop: n,
    defaultProp: r ?? "",
    onChange: o,
    caller: Wn
  });
  return /* @__PURE__ */ c.jsx(
    Zw,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: D.useMemo(() => s ? [s] : [], [s]),
      onItemActivate: i,
      onItemDeactivate: D.useCallback(() => i(""), [i]),
      children: /* @__PURE__ */ c.jsx(Qw, { ...a, ref: t })
    }
  );
}), aj = D.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Ge({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Wn
  }), l = D.useCallback(
    (f) => i((p = []) => [...p, f]),
    [i]
  ), u = D.useCallback(
    (f) => i((p = []) => p.filter((g) => g !== f)),
    [i]
  );
  return /* @__PURE__ */ c.jsx(
    Zw,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: s,
      onItemActivate: l,
      onItemDeactivate: u,
      children: /* @__PURE__ */ c.jsx(Qw, { ...a, ref: t })
    }
  );
});
xu.displayName = Wn;
var [sj, ij] = qw(Wn), Qw = D.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: a,
      dir: s,
      loop: i = !0,
      ...l
    } = e, u = Xw(n), f = Zt(s), p = { role: "group", dir: f, ...l };
    return /* @__PURE__ */ c.jsx(sj, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ c.jsx(
      Vo,
      {
        asChild: !0,
        ...u,
        orientation: a,
        dir: f,
        loop: i,
        children: /* @__PURE__ */ c.jsx(Z.div, { ...p, ref: t })
      }
    ) : /* @__PURE__ */ c.jsx(Z.div, { ...p, ref: t }) });
  }
), Wa = "ToggleGroupItem", ey = D.forwardRef(
  (e, t) => {
    const n = Jw(Wa, e.__scopeToggleGroup), r = ij(Wa, e.__scopeToggleGroup), o = Xw(e.__scopeToggleGroup), a = n.value.includes(e.value), s = r.disabled || e.disabled, i = { ...e, pressed: a, disabled: s }, l = D.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ c.jsx(
      Bo,
      {
        asChild: !0,
        ...o,
        focusable: !s,
        active: a,
        ref: l,
        children: /* @__PURE__ */ c.jsx(Wd, { ...i, ref: t })
      }
    ) : /* @__PURE__ */ c.jsx(Wd, { ...i, ref: t });
  }
);
ey.displayName = Wa;
var Wd = D.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, a = Jw(Wa, n), s = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, i = a.type === "single" ? s : void 0;
    return /* @__PURE__ */ c.jsx(
      vu,
      {
        ...i,
        ...o,
        ref: t,
        onPressedChange: (l) => {
          l ? a.onItemActivate(r) : a.onItemDeactivate(r);
        }
      }
    );
  }
), ty = xu, ny = ey;
const ry = dr(
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
), lj = d.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ c.jsx(
  Kw,
  {
    ref: o,
    className: I(ry({ variant: t, size: n, className: e })),
    ...r
  }
));
lj.displayName = Kw.displayName;
const oy = d.createContext({
  size: "default",
  variant: "default"
}), cj = d.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, a) => /* @__PURE__ */ c.jsx(
  ty,
  {
    ref: a,
    className: I("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ c.jsx(oy.Provider, { value: { variant: t, size: n }, children: r })
  }
));
cj.displayName = ty.displayName;
const uj = d.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, a) => {
  const s = d.useContext(oy);
  return /* @__PURE__ */ c.jsx(
    ny,
    {
      ref: a,
      className: I(
        ry({
          variant: s.variant || n,
          size: s.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
uj.displayName = ny.displayName;
var [Ds, ok] = Fe("Tooltip", [
  gn
]), Is = gn(), ay = "TooltipProvider", dj = 700, vl = "tooltip.open", [fj, wu] = Ds(ay), sy = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = dj,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, s = d.useRef(!0), i = d.useRef(!1), l = d.useRef(0);
  return d.useEffect(() => {
    const u = l.current;
    return () => window.clearTimeout(u);
  }, []), /* @__PURE__ */ c.jsx(
    fj,
    {
      scope: t,
      isOpenDelayedRef: s,
      delayDuration: n,
      onOpen: d.useCallback(() => {
        window.clearTimeout(l.current), s.current = !1;
      }, []),
      onClose: d.useCallback(() => {
        window.clearTimeout(l.current), l.current = window.setTimeout(
          () => s.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: d.useCallback((u) => {
        i.current = u;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
sy.displayName = ay;
var Ro = "Tooltip", [pj, As] = Ds(Ro), iy = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: i
  } = e, l = wu(Ro, e.__scopeTooltip), u = Is(t), [f, p] = d.useState(null), g = $e(), m = d.useRef(0), v = s ?? l.disableHoverableContent, h = i ?? l.delayDuration, w = d.useRef(!1), [x, y] = Ge({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(vl))) : l.onClose(), a == null || a(C);
    },
    caller: Ro
  }), b = d.useMemo(() => x ? w.current ? "delayed-open" : "instant-open" : "closed", [x]), S = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, w.current = !1, y(!0);
  }, [y]), E = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = 0, y(!1);
  }, [y]), R = d.useCallback(() => {
    window.clearTimeout(m.current), m.current = window.setTimeout(() => {
      w.current = !0, y(!0), m.current = 0;
    }, h);
  }, [h, y]);
  return d.useEffect(() => () => {
    m.current && (window.clearTimeout(m.current), m.current = 0);
  }, []), /* @__PURE__ */ c.jsx(Hr, { ...u, children: /* @__PURE__ */ c.jsx(
    pj,
    {
      scope: t,
      contentId: g,
      open: x,
      stateAttribute: b,
      trigger: f,
      onTriggerChange: p,
      onTriggerEnter: d.useCallback(() => {
        l.isOpenDelayedRef.current ? R() : S();
      }, [l.isOpenDelayedRef, R, S]),
      onTriggerLeave: d.useCallback(() => {
        v ? E() : (window.clearTimeout(m.current), m.current = 0);
      }, [E, v]),
      onOpen: S,
      onClose: E,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
iy.displayName = Ro;
var xl = "TooltipTrigger", ly = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = As(xl, n), a = wu(xl, n), s = Is(n), i = d.useRef(null), l = le(t, i, o.onTriggerChange), u = d.useRef(!1), f = d.useRef(!1), p = d.useCallback(() => u.current = !1, []);
    return d.useEffect(() => () => document.removeEventListener("pointerup", p), [p]), /* @__PURE__ */ c.jsx(Gr, { asChild: !0, ...s, children: /* @__PURE__ */ c.jsx(
      Z.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: l,
        onPointerMove: H(e.onPointerMove, (g) => {
          g.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0);
        }),
        onPointerLeave: H(e.onPointerLeave, () => {
          o.onTriggerLeave(), f.current = !1;
        }),
        onPointerDown: H(e.onPointerDown, () => {
          o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", p, { once: !0 });
        }),
        onFocus: H(e.onFocus, () => {
          u.current || o.onOpen();
        }),
        onBlur: H(e.onBlur, o.onClose),
        onClick: H(e.onClick, o.onClose)
      }
    ) });
  }
);
ly.displayName = xl;
var mj = "TooltipPortal", [ak, gj] = Ds(mj, {
  forceMount: void 0
}), kr = "TooltipContent", cy = d.forwardRef(
  (e, t) => {
    const n = gj(kr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, s = As(kr, e.__scopeTooltip);
    return /* @__PURE__ */ c.jsx(Ye, { present: r || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ c.jsx(uy, { side: o, ...a, ref: t }) : /* @__PURE__ */ c.jsx(hj, { side: o, ...a, ref: t }) });
  }
), hj = d.forwardRef((e, t) => {
  const n = As(kr, e.__scopeTooltip), r = wu(kr, e.__scopeTooltip), o = d.useRef(null), a = le(t, o), [s, i] = d.useState(null), { trigger: l, onClose: u } = n, f = o.current, { onPointerInTransitChange: p } = r, g = d.useCallback(() => {
    i(null), p(!1);
  }, [p]), m = d.useCallback(
    (v, h) => {
      const w = v.currentTarget, x = { x: v.clientX, y: v.clientY }, y = yj(x, w.getBoundingClientRect()), b = bj(x, y), S = Cj(h.getBoundingClientRect()), E = Rj([...b, ...S]);
      i(E), p(!0);
    },
    [p]
  );
  return d.useEffect(() => () => g(), [g]), d.useEffect(() => {
    if (l && f) {
      const v = (w) => m(w, f), h = (w) => m(w, l);
      return l.addEventListener("pointerleave", v), f.addEventListener("pointerleave", h), () => {
        l.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", h);
      };
    }
  }, [l, f, m, g]), d.useEffect(() => {
    if (s) {
      const v = (h) => {
        const w = h.target, x = { x: h.clientX, y: h.clientY }, y = (l == null ? void 0 : l.contains(w)) || (f == null ? void 0 : f.contains(w)), b = !Sj(x, s);
        y ? g() : b && (g(), u());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [l, f, s, u, g]), /* @__PURE__ */ c.jsx(uy, { ...e, ref: a });
}), [vj, xj] = Ds(Ro, { isInside: !1 }), wj = /* @__PURE__ */ lf("TooltipContent"), uy = d.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...i
    } = e, l = As(kr, n), u = Is(n), { onClose: f } = l;
    return d.useEffect(() => (document.addEventListener(vl, f), () => document.removeEventListener(vl, f)), [f]), d.useEffect(() => {
      if (l.trigger) {
        const p = (g) => {
          const m = g.target;
          m != null && m.contains(l.trigger) && f();
        };
        return window.addEventListener("scroll", p, { capture: !0 }), () => window.removeEventListener("scroll", p, { capture: !0 });
      }
    }, [l.trigger, f]), /* @__PURE__ */ c.jsx(
      zn,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: f,
        children: /* @__PURE__ */ c.jsxs(
          Lo,
          {
            "data-state": l.stateAttribute,
            ...u,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ c.jsx(wj, { children: r }),
              /* @__PURE__ */ c.jsx(vj, { scope: n, isInside: !0, children: /* @__PURE__ */ c.jsx($v, { id: l.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
cy.displayName = kr;
var dy = "TooltipArrow", fy = d.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Is(n);
    return xj(
      dy,
      n
    ).isInside ? null : /* @__PURE__ */ c.jsx(Fo, { ...o, ...r, ref: t });
  }
);
fy.displayName = dy;
function yj(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function bj(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function Cj(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function Sj(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], l = t[s], u = i.x, f = i.y, p = l.x, g = l.y;
    f > r != g > r && n < (p - u) * (r - f) / (g - f) + u && (o = !o);
  }
  return o;
}
function Rj(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Ej(t);
}
function Ej(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], s = n[n.length - 2];
      if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Nj = sy, Pj = iy, _j = ly, py = cy, Mj = fy;
const Tj = Nj, Dj = Pj, Ij = _j, my = d.forwardRef(({ className: e, size: t, sideOffset: n = 4, ...r }, o) => /* @__PURE__ */ c.jsxs(
  py,
  {
    ref: o,
    sideOffset: n,
    className: I(
      "z-50 overflow-hidden rounded bg-black text-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e,
      t === "small" ? "px-2 py-[6px] text-[10px] leading-3" : "px-4 py-2  font-semibold text-xs"
    ),
    ...r,
    children: [
      r.children,
      /* @__PURE__ */ c.jsx(
        Mj,
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
my.displayName = py.displayName;
const sk = ({
  message: e = "",
  children: t,
  size: n = "medium",
  position: r = "top",
  className: o = "",
  ...a
}) => /* @__PURE__ */ c.jsx(Tj, { children: /* @__PURE__ */ c.jsxs(Dj, { children: [
  /* @__PURE__ */ c.jsx(Ij, { asChild: !0, children: t }),
  /* @__PURE__ */ c.jsx(
    my,
    {
      side: r,
      size: n,
      className: o,
      ...a,
      children: e
    }
  )
] }) }), ik = ({
  type: e = "grid",
  id: t,
  imageSrc: n,
  title: r,
  description: o,
  className: a,
  checked: s = !1,
  providerName: i,
  hasFavorite: l = !1,
  showPreview: u = !1,
  showCheckbox: f = !1,
  handleCheckboxChange: p = () => {
  },
  handleAssign: g = () => {
  },
  handleFavoriteClick: m = () => {
  },
  handleView: v = () => {
  },
  handleClickCard: h = () => {
  }
}) => {
  const w = "56.36%";
  return e === "grid" ? /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: I(
        "group cursor-pointer w-[220px] bg-[#FFF] outline outline-[1px] rounded-lg outline-[#E8E9EB] relative hover:outline-[#0073E6] hover:outline-[2px]",
        a
      ),
      onClick: () => h(t),
      "data-cy": "lesson-card",
      children: [
        /* @__PURE__ */ c.jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ c.jsx("div", { className: "relative w-full", style: { paddingTop: w }, "data-cy": "card-image", children: /* @__PURE__ */ c.jsx(
            "img",
            {
              src: n,
              alt: "card-img",
              className: "absolute top-0 left-0 w-full h-full object-cover rounded-t-lg",
              "data-cy": `card-image-${t}`
            }
          ) }),
          f && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `absolute top-[10px] left-[10px] ${s ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
              children: /* @__PURE__ */ c.jsx(
                Jn,
                {
                  checked: s,
                  id: t,
                  onCheckedChange: () => p == null ? void 0 : p(t),
                  onClick: (x) => x.stopPropagation(),
                  "data-cy": "lesson-card-checkbox"
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsxs("div", { className: "", children: [
            /* @__PURE__ */ c.jsx(
              "div",
              {
                className: `absolute 2xl-range:h-[20px] 2xl-range:w-[20px] cursor-pointer top-[10px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${l ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
                onClick: (x) => {
                  x.stopPropagation(), m(t);
                },
                "data-cy": "lesson-card-favorite-icon",
                children: l ? /* @__PURE__ */ c.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ c.jsx("g", { "clip-path": "url(#clip0_432_3321)", children: /* @__PURE__ */ c.jsx(
                        "path",
                        {
                          d: "M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z",
                          fill: "#0073E6"
                        }
                      ) }),
                      /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_432_3321", children: /* @__PURE__ */ c.jsx("rect", { width: "12", height: "12", fill: "white" }) }) })
                    ]
                  }
                ) : /* @__PURE__ */ c.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ c.jsx("g", { "clip-path": "url(#clip0_432_1968)", children: /* @__PURE__ */ c.jsx(
                        "path",
                        {
                          d: "M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z",
                          fill: "black"
                        }
                      ) }),
                      /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_432_1968", children: /* @__PURE__ */ c.jsx("rect", { width: "12", height: "12", fill: "white" }) }) })
                    ]
                  }
                )
              }
            ),
            u && /* @__PURE__ */ c.jsx(
              "div",
              {
                className: "absolute 2xl-range:h-[20px] 2xl-range:w-[20px] 2xl-range:top-[41px] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] right-[10px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center",
                onClick: (x) => {
                  x.stopPropagation(), v(t);
                },
                "data-cy": "lesson-card-preview-icon",
                children: /* @__PURE__ */ c.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "path",
                        {
                          d: "M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z",
                          fill: "black"
                        }
                      ),
                      /* @__PURE__ */ c.jsx(
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
            /* @__PURE__ */ c.jsx(
              jt,
              {
                variant: "default",
                className: "absolute 2xl-range:mt-0 h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] right-[10px] text-[#FFF] text-[12px] font-semibold text-center mt-2",
                onClick: (x) => {
                  x.stopPropagation(), g(t);
                },
                "data-cy": "lesson-card-assign-button",
                children: "Assign"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "p-4 h-[96px]", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-[14px] text-[#000] font-semibold leading-4 line-clamp-2", "data-cy": `lesson-title-${t}`, children: r }),
          /* @__PURE__ */ c.jsx("p", { className: "text-[12px] text-[#656870] font-normal mt-[4px] line-clamp-1", "data-cy": `provider-name-${t}`, children: `By ${i || "-"}` })
        ] })
      ]
    }
  ) : /* @__PURE__ */ c.jsxs(
    "div",
    {
      className: I(
        "group cursor-pointer flex relative w-full h-[126px] bg-[#FFF] outline rounded-lg outline-[1px] outline-[#E8E9EB] hover:outline-[#0073E6] hover:outline-[2px]",
        a
      ),
      onClick: () => h(t),
      "data-cy": "lesson-card",
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "min-w-[220px]", children: /* @__PURE__ */ c.jsx(
          "img",
          {
            src: n,
            alt: "card-img",
            className: "h-[126px] w-[220px] object-cover rounded-tl-lg rounded-bl-lg",
            "data-cy": `card-image-${t}`
          }
        ) }),
        f && /* @__PURE__ */ c.jsx(
          "div",
          {
            className: `absolute top-[10px] left-[10px] ${s ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
            children: /* @__PURE__ */ c.jsx(
              Jn,
              {
                checked: s,
                id: t,
                onCheckedChange: () => p == null ? void 0 : p(t),
                onClick: (x) => x.stopPropagation(),
                "data-cy": "lesson-card-checkbox"
              }
            )
          }
        ),
        /* @__PURE__ */ c.jsxs("div", { className: "", children: [
          /* @__PURE__ */ c.jsx(
            "div",
            {
              className: `absolute cursor-pointer top-[10px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center ${l ? "opacity-100" : "opacity-0 group-hover:opacity-100"} transition-opacity duration-300`,
              onClick: (x) => {
                x.stopPropagation(), m(t);
              },
              "data-cy": "lesson-card-favorite-icon",
              children: l ? /* @__PURE__ */ c.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ c.jsx("g", { "clip-path": "url(#clip0_432_3321)", children: /* @__PURE__ */ c.jsx(
                      "path",
                      {
                        d: "M6 2.41218C7.5 0.162179 12 0.162179 12 4.202C12 6.17545 10 8.49551 6 11.1622C2 8.49551 0 6.17545 0 4.202C0 0.162179 4.5 0.162179 6 2.41218Z",
                        fill: "#0073E6"
                      }
                    ) }),
                    /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_432_3321", children: /* @__PURE__ */ c.jsx("rect", { width: "12", height: "12", fill: "white" }) }) })
                  ]
                }
              ) : /* @__PURE__ */ c.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ c.jsx("g", { "clip-path": "url(#clip0_432_1968)", children: /* @__PURE__ */ c.jsx(
                      "path",
                      {
                        d: "M6 2.41221C7.5 0.16221 12 0.16221 12 4.20203C12 6.17548 10 8.49554 6 11.1622C2 8.49554 0 6.17548 0 4.20203C0 0.16221 4.5 0.16221 6 2.41221ZM11 4.20203C11 2.83571 10.3883 2.10362 9.39447 1.93422C8.42831 1.76953 7.33987 2.20518 6.83205 2.96691L6 4.21498L5.16795 2.96691C4.66013 2.20518 3.57169 1.76953 2.60554 1.93422C1.61171 2.10362 1 2.83571 1 4.20203C1 5.65503 2.63344 7.6236 6 9.95349C9.36656 7.6236 11 5.65503 11 4.20203Z",
                        fill: "black"
                      }
                    ) }),
                    /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_432_1968", children: /* @__PURE__ */ c.jsx("rect", { width: "12", height: "12", fill: "white" }) }) })
                  ]
                }
              )
            }
          ),
          u && /* @__PURE__ */ c.jsx(
            "div",
            {
              className: "absolute cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[45px] left-[185px] h-[24px] w-[24px] bg-[#FFF] rounded-[50%] flex justify-center items-center",
              onClick: (x) => {
                x.stopPropagation(), v(t);
              },
              "data-cy": "lesson-card-preview-icon",
              children: /* @__PURE__ */ c.jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  fill: "none",
                  children: [
                    /* @__PURE__ */ c.jsx(
                      "path",
                      {
                        d: "M6 7.75C6.9665 7.75 7.75 6.9665 7.75 6C7.75 5.0335 6.9665 4.25 6 4.25C5.0335 4.25 4.25 5.0335 4.25 6C4.25 6.9665 5.0335 7.75 6 7.75Z",
                        fill: "black"
                      }
                    ),
                    /* @__PURE__ */ c.jsx(
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
          /* @__PURE__ */ c.jsx(
            jt,
            {
              variant: "default",
              className: "absolute h-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-[70px] left-[145px] text-[#FFF] text-[12px] font-semibold text-center mt-2",
              onClick: (x) => {
                x.stopPropagation(), g(t);
              },
              "data-cy": "lesson-card-assign-button",
              children: "Assign"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs("div", { className: "p-[16px]", children: [
          /* @__PURE__ */ c.jsx("p", { className: "text-[14px] text-[#000] font-semibold leading-4 line-clamp-1", "data-cy": `lesson-title-${t}`, children: r }),
          /* @__PURE__ */ c.jsx("p", { className: "text-[12px] text-[#656870] font-normal leading-3 mt-[4px]", "data-cy": `provider-name-${t}`, children: `By ${i || "-"}` }),
          /* @__PURE__ */ c.jsx("p", { className: "text-[12px] text-[#212329] font-normal leading-4 mt-[12px] line-clamp-2", "data-cy": `lesson-description-${t}`, children: o })
        ] })
      ]
    }
  );
}, Aj = 1, jj = 1e6;
let vi = 0;
function kj() {
  return vi = (vi + 1) % Number.MAX_SAFE_INTEGER, vi.toString();
}
const xi = /* @__PURE__ */ new Map(), Ud = (e) => {
  if (xi.has(e))
    return;
  const t = setTimeout(() => {
    xi.delete(e), uo({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, jj);
  xi.set(e, t);
}, Oj = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, Aj)
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
      return n ? Ud(n) : e.toasts.forEach((r) => {
        Ud(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
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
}, ba = [];
let Ca = { toasts: [] };
function uo(e) {
  Ca = Oj(Ca, e), ba.forEach((t) => {
    t(Ca);
  });
}
function $j({ ...e }) {
  const t = kj(), n = (o) => uo({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => uo({ type: "DISMISS_TOAST", toastId: t });
  return uo({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function lk() {
  const [e, t] = d.useState(Ca);
  return d.useEffect(() => (ba.push(t), () => {
    const n = ba.indexOf(t);
    n > -1 && ba.splice(n, 1);
  }), [e]), {
    ...e,
    toast: $j,
    dismiss: (n) => uo({ type: "DISMISS_TOAST", toastId: n })
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
function Ot(e, t) {
  return (n) => {
    t.setState((r) => ({
      ...r,
      [e]: Dn(n, r[e])
    }));
  };
}
function js(e) {
  return e instanceof Function;
}
function Lj(e) {
  return Array.isArray(e) && e.every((t) => typeof t == "number");
}
function Fj(e, t) {
  const n = [], r = (o) => {
    o.forEach((a) => {
      n.push(a);
      const s = t(a);
      s != null && s.length && r(s);
    });
  };
  return r(e), n;
}
function de(e, t, n) {
  let r = [], o;
  return (a) => {
    let s;
    n.key && n.debug && (s = Date.now());
    const i = e(a);
    if (!(i.length !== r.length || i.some((f, p) => r[p] !== f)))
      return o;
    r = i;
    let u;
    if (n.key && n.debug && (u = Date.now()), o = t(...i), n == null || n.onChange == null || n.onChange(o), n.key && n.debug && n != null && n.debug()) {
      const f = Math.round((Date.now() - s) * 100) / 100, p = Math.round((Date.now() - u) * 100) / 100, g = p / 16, m = (v, h) => {
        for (v = String(v); v.length < h; )
          v = " " + v;
        return v;
      };
      console.info(`%c⏱ ${m(p, 5)} /${m(f, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * g, 120))}deg 100% 31%);`, n == null ? void 0 : n.key);
    }
    return o;
  };
}
function fe(e, t, n, r) {
  return {
    debug: () => {
      var o;
      return (o = e == null ? void 0 : e.debugAll) != null ? o : e[t];
    },
    key: process.env.NODE_ENV === "development" && n,
    onChange: r
  };
}
function zj(e, t, n, r) {
  const o = () => {
    var s;
    return (s = a.getValue()) != null ? s : e.options.renderFallbackValue;
  }, a = {
    id: `${t.id}_${n.id}`,
    row: t,
    column: n,
    getValue: () => t.getValue(r),
    renderValue: o,
    getContext: de(() => [e, n, t, a], (s, i, l, u) => ({
      table: s,
      column: i,
      row: l,
      cell: u,
      getValue: u.getValue,
      renderValue: u.renderValue
    }), fe(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((s) => {
    s.createCell == null || s.createCell(a, n, t, e);
  }, {}), a;
}
function Vj(e, t, n, r) {
  var o, a;
  const i = {
    ...e._getDefaultColumnDef(),
    ...t
  }, l = i.accessorKey;
  let u = (o = (a = i.id) != null ? a : l ? typeof String.prototype.replaceAll == "function" ? l.replaceAll(".", "_") : l.replace(/\./g, "_") : void 0) != null ? o : typeof i.header == "string" ? i.header : void 0, f;
  if (i.accessorFn ? f = i.accessorFn : l && (l.includes(".") ? f = (g) => {
    let m = g;
    for (const h of l.split(".")) {
      var v;
      m = (v = m) == null ? void 0 : v[h], process.env.NODE_ENV !== "production" && m === void 0 && console.warn(`"${h}" in deeply nested key "${l}" returned undefined.`);
    }
    return m;
  } : f = (g) => g[i.accessorKey]), !u)
    throw process.env.NODE_ENV !== "production" ? new Error(i.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let p = {
    id: `${String(u)}`,
    accessorFn: f,
    parent: r,
    depth: n,
    columnDef: i,
    columns: [],
    getFlatColumns: de(() => [!0], () => {
      var g;
      return [p, ...(g = p.columns) == null ? void 0 : g.flatMap((m) => m.getFlatColumns())];
    }, fe(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: de(() => [e._getOrderColumnsFn()], (g) => {
      var m;
      if ((m = p.columns) != null && m.length) {
        let v = p.columns.flatMap((h) => h.getLeafColumns());
        return g(v);
      }
      return [p];
    }, fe(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const g of e._features)
    g.createColumn == null || g.createColumn(p, e);
  return p;
}
const ft = "debugHeaders";
function Yd(e, t, n) {
  var r;
  let a = {
    id: (r = n.id) != null ? r : t.id,
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
      const s = [], i = (l) => {
        l.subHeaders && l.subHeaders.length && l.subHeaders.map(i), s.push(l);
      };
      return i(a), s;
    },
    getContext: () => ({
      table: e,
      header: a,
      column: t
    })
  };
  return e._features.forEach((s) => {
    s.createHeader == null || s.createHeader(a, e);
  }), a;
}
const Bj = {
  createTable: (e) => {
    e.getHeaderGroups = de(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => {
      var a, s;
      const i = (a = r == null ? void 0 : r.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? a : [], l = (s = o == null ? void 0 : o.map((p) => n.find((g) => g.id === p)).filter(Boolean)) != null ? s : [], u = n.filter((p) => !(r != null && r.includes(p.id)) && !(o != null && o.includes(p.id)));
      return ia(t, [...i, ...u, ...l], e);
    }, fe(e.options, ft, "getHeaderGroups")), e.getCenterHeaderGroups = de(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r, o) => (n = n.filter((a) => !(r != null && r.includes(a.id)) && !(o != null && o.includes(a.id))), ia(t, n, e, "center")), fe(e.options, ft, "getCenterHeaderGroups")), e.getLeftHeaderGroups = de(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (t, n, r) => {
      var o;
      const a = (o = r == null ? void 0 : r.map((s) => n.find((i) => i.id === s)).filter(Boolean)) != null ? o : [];
      return ia(t, a, e, "left");
    }, fe(e.options, ft, "getLeftHeaderGroups")), e.getRightHeaderGroups = de(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (t, n, r) => {
      var o;
      const a = (o = r == null ? void 0 : r.map((s) => n.find((i) => i.id === s)).filter(Boolean)) != null ? o : [];
      return ia(t, a, e, "right");
    }, fe(e.options, ft, "getRightHeaderGroups")), e.getFooterGroups = de(() => [e.getHeaderGroups()], (t) => [...t].reverse(), fe(e.options, ft, "getFooterGroups")), e.getLeftFooterGroups = de(() => [e.getLeftHeaderGroups()], (t) => [...t].reverse(), fe(e.options, ft, "getLeftFooterGroups")), e.getCenterFooterGroups = de(() => [e.getCenterHeaderGroups()], (t) => [...t].reverse(), fe(e.options, ft, "getCenterFooterGroups")), e.getRightFooterGroups = de(() => [e.getRightHeaderGroups()], (t) => [...t].reverse(), fe(e.options, ft, "getRightFooterGroups")), e.getFlatHeaders = de(() => [e.getHeaderGroups()], (t) => t.map((n) => n.headers).flat(), fe(e.options, ft, "getFlatHeaders")), e.getLeftFlatHeaders = de(() => [e.getLeftHeaderGroups()], (t) => t.map((n) => n.headers).flat(), fe(e.options, ft, "getLeftFlatHeaders")), e.getCenterFlatHeaders = de(() => [e.getCenterHeaderGroups()], (t) => t.map((n) => n.headers).flat(), fe(e.options, ft, "getCenterFlatHeaders")), e.getRightFlatHeaders = de(() => [e.getRightHeaderGroups()], (t) => t.map((n) => n.headers).flat(), fe(e.options, ft, "getRightFlatHeaders")), e.getCenterLeafHeaders = de(() => [e.getCenterFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), fe(e.options, ft, "getCenterLeafHeaders")), e.getLeftLeafHeaders = de(() => [e.getLeftFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), fe(e.options, ft, "getLeftLeafHeaders")), e.getRightLeafHeaders = de(() => [e.getRightFlatHeaders()], (t) => t.filter((n) => {
      var r;
      return !((r = n.subHeaders) != null && r.length);
    }), fe(e.options, ft, "getRightLeafHeaders")), e.getLeafHeaders = de(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (t, n, r) => {
      var o, a, s, i, l, u;
      return [...(o = (a = t[0]) == null ? void 0 : a.headers) != null ? o : [], ...(s = (i = n[0]) == null ? void 0 : i.headers) != null ? s : [], ...(l = (u = r[0]) == null ? void 0 : u.headers) != null ? l : []].map((f) => f.getLeafHeaders()).flat();
    }, fe(e.options, ft, "getLeafHeaders"));
  }
};
function ia(e, t, n, r) {
  var o, a;
  let s = 0;
  const i = function(g, m) {
    m === void 0 && (m = 1), s = Math.max(s, m), g.filter((v) => v.getIsVisible()).forEach((v) => {
      var h;
      (h = v.columns) != null && h.length && i(v.columns, m + 1);
    }, 0);
  };
  i(e);
  let l = [];
  const u = (g, m) => {
    const v = {
      depth: m,
      id: [r, `${m}`].filter(Boolean).join("_"),
      headers: []
    }, h = [];
    g.forEach((w) => {
      const x = [...h].reverse()[0], y = w.column.depth === v.depth;
      let b, S = !1;
      if (y && w.column.parent ? b = w.column.parent : (b = w.column, S = !0), x && (x == null ? void 0 : x.column) === b)
        x.subHeaders.push(w);
      else {
        const E = Yd(n, b, {
          id: [r, m, b.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: S,
          placeholderId: S ? `${h.filter((R) => R.column === b).length}` : void 0,
          depth: m,
          index: h.length
        });
        E.subHeaders.push(w), h.push(E);
      }
      v.headers.push(w), w.headerGroup = v;
    }), l.push(v), m > 0 && u(h, m - 1);
  }, f = t.map((g, m) => Yd(n, g, {
    depth: s,
    index: m
  }));
  u(f, s - 1), l.reverse();
  const p = (g) => g.filter((v) => v.column.getIsVisible()).map((v) => {
    let h = 0, w = 0, x = [0];
    v.subHeaders && v.subHeaders.length ? (x = [], p(v.subHeaders).forEach((b) => {
      let {
        colSpan: S,
        rowSpan: E
      } = b;
      h += S, x.push(E);
    })) : h = 1;
    const y = Math.min(...x);
    return w = w + y, v.colSpan = h, v.rowSpan = w, {
      colSpan: h,
      rowSpan: w
    };
  });
  return p((o = (a = l[0]) == null ? void 0 : a.headers) != null ? o : []), l;
}
const yu = (e, t, n, r, o, a, s) => {
  let i = {
    id: t,
    index: r,
    original: n,
    depth: o,
    parentId: s,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (l) => {
      if (i._valuesCache.hasOwnProperty(l))
        return i._valuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return i._valuesCache[l] = u.accessorFn(i.original, r), i._valuesCache[l];
    },
    getUniqueValues: (l) => {
      if (i._uniqueValuesCache.hasOwnProperty(l))
        return i._uniqueValuesCache[l];
      const u = e.getColumn(l);
      if (u != null && u.accessorFn)
        return u.columnDef.getUniqueValues ? (i._uniqueValuesCache[l] = u.columnDef.getUniqueValues(i.original, r), i._uniqueValuesCache[l]) : (i._uniqueValuesCache[l] = [i.getValue(l)], i._uniqueValuesCache[l]);
    },
    renderValue: (l) => {
      var u;
      return (u = i.getValue(l)) != null ? u : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => Fj(i.subRows, (l) => l.subRows),
    getParentRow: () => i.parentId ? e.getRow(i.parentId, !0) : void 0,
    getParentRows: () => {
      let l = [], u = i;
      for (; ; ) {
        const f = u.getParentRow();
        if (!f) break;
        l.push(f), u = f;
      }
      return l.reverse();
    },
    getAllCells: de(() => [e.getAllLeafColumns()], (l) => l.map((u) => zj(e, i, u, u.id)), fe(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: de(() => [i.getAllCells()], (l) => l.reduce((u, f) => (u[f.column.id] = f, u), {}), fe(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let l = 0; l < e._features.length; l++) {
    const u = e._features[l];
    u == null || u.createRow == null || u.createRow(i, e);
  }
  return i;
}, Hj = {
  createColumn: (e, t) => {
    e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, gy = (e, t, n) => {
  var r, o;
  const a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
  return !!(!((o = e.getValue(t)) == null || (o = o.toString()) == null || (o = o.toLowerCase()) == null) && o.includes(a));
};
gy.autoRemove = (e) => Ut(e);
const hy = (e, t, n) => {
  var r;
  return !!(!((r = e.getValue(t)) == null || (r = r.toString()) == null) && r.includes(n));
};
hy.autoRemove = (e) => Ut(e);
const vy = (e, t, n) => {
  var r;
  return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === (n == null ? void 0 : n.toLowerCase());
};
vy.autoRemove = (e) => Ut(e);
const xy = (e, t, n) => {
  var r;
  return (r = e.getValue(t)) == null ? void 0 : r.includes(n);
};
xy.autoRemove = (e) => Ut(e);
const wy = (e, t, n) => !n.some((r) => {
  var o;
  return !((o = e.getValue(t)) != null && o.includes(r));
});
wy.autoRemove = (e) => Ut(e) || !(e != null && e.length);
const yy = (e, t, n) => n.some((r) => {
  var o;
  return (o = e.getValue(t)) == null ? void 0 : o.includes(r);
});
yy.autoRemove = (e) => Ut(e) || !(e != null && e.length);
const by = (e, t, n) => e.getValue(t) === n;
by.autoRemove = (e) => Ut(e);
const Cy = (e, t, n) => e.getValue(t) == n;
Cy.autoRemove = (e) => Ut(e);
const bu = (e, t, n) => {
  let [r, o] = n;
  const a = e.getValue(t);
  return a >= r && a <= o;
};
bu.resolveFilterValue = (e) => {
  let [t, n] = e, r = typeof t != "number" ? parseFloat(t) : t, o = typeof n != "number" ? parseFloat(n) : n, a = t === null || Number.isNaN(r) ? -1 / 0 : r, s = n === null || Number.isNaN(o) ? 1 / 0 : o;
  if (a > s) {
    const i = a;
    a = s, s = i;
  }
  return [a, s];
};
bu.autoRemove = (e) => Ut(e) || Ut(e[0]) && Ut(e[1]);
const yn = {
  includesString: gy,
  includesStringSensitive: hy,
  equalsString: vy,
  arrIncludes: xy,
  arrIncludesAll: wy,
  arrIncludesSome: yy,
  equals: by,
  weakEquals: Cy,
  inNumberRange: bu
};
function Ut(e) {
  return e == null || e === "";
}
const Gj = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: Ot("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, t) => {
    e.getAutoFilterFn = () => {
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      return typeof r == "string" ? yn.includesString : typeof r == "number" ? yn.inNumberRange : typeof r == "boolean" || r !== null && typeof r == "object" ? yn.equals : Array.isArray(r) ? yn.arrIncludes : yn.weakEquals;
    }, e.getFilterFn = () => {
      var n, r;
      return js(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (n = (r = t.options.filterFns) == null ? void 0 : r[e.columnDef.filterFn]) != null ? n : yn[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var n, r, o;
      return ((n = e.columnDef.enableColumnFilter) != null ? n : !0) && ((r = t.options.enableColumnFilters) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var n;
      return (n = t.getState().columnFilters) == null || (n = n.find((r) => r.id === e.id)) == null ? void 0 : n.value;
    }, e.getFilterIndex = () => {
      var n, r;
      return (n = (r = t.getState().columnFilters) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.setFilterValue = (n) => {
      t.setColumnFilters((r) => {
        const o = e.getFilterFn(), a = r == null ? void 0 : r.find((f) => f.id === e.id), s = Dn(n, a ? a.value : void 0);
        if (Kd(o, s, e)) {
          var i;
          return (i = r == null ? void 0 : r.filter((f) => f.id !== e.id)) != null ? i : [];
        }
        const l = {
          id: e.id,
          value: s
        };
        if (a) {
          var u;
          return (u = r == null ? void 0 : r.map((f) => f.id === e.id ? l : f)) != null ? u : [];
        }
        return r != null && r.length ? [...r, l] : [l];
      });
    };
  },
  createRow: (e, t) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (t) => {
      const n = e.getAllLeafColumns(), r = (o) => {
        var a;
        return (a = Dn(t, o)) == null ? void 0 : a.filter((s) => {
          const i = n.find((l) => l.id === s.id);
          if (i) {
            const l = i.getFilterFn();
            if (Kd(l, s.value, i))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(r);
    }, e.resetColumnFilters = (t) => {
      var n, r;
      e.setColumnFilters(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.columnFilters) != null ? n : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function Kd(e, t, n) {
  return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || typeof t > "u" || typeof t == "string" && !t;
}
const Wj = (e, t, n) => n.reduce((r, o) => {
  const a = o.getValue(e);
  return r + (typeof a == "number" ? a : 0);
}, 0), Uj = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r > a || r === void 0 && a >= a) && (r = a);
  }), r;
}, Yj = (e, t, n) => {
  let r;
  return n.forEach((o) => {
    const a = o.getValue(e);
    a != null && (r < a || r === void 0 && a >= a) && (r = a);
  }), r;
}, Kj = (e, t, n) => {
  let r, o;
  return n.forEach((a) => {
    const s = a.getValue(e);
    s != null && (r === void 0 ? s >= s && (r = o = s) : (r > s && (r = s), o < s && (o = s)));
  }), [r, o];
}, qj = (e, t) => {
  let n = 0, r = 0;
  if (t.forEach((o) => {
    let a = o.getValue(e);
    a != null && (a = +a) >= a && (++n, r += a);
  }), n) return r / n;
}, Xj = (e, t) => {
  if (!t.length)
    return;
  const n = t.map((a) => a.getValue(e));
  if (!Lj(n))
    return;
  if (n.length === 1)
    return n[0];
  const r = Math.floor(n.length / 2), o = n.sort((a, s) => a - s);
  return n.length % 2 !== 0 ? o[r] : (o[r - 1] + o[r]) / 2;
}, Zj = (e, t) => Array.from(new Set(t.map((n) => n.getValue(e))).values()), Jj = (e, t) => new Set(t.map((n) => n.getValue(e))).size, Qj = (e, t) => t.length, wi = {
  sum: Wj,
  min: Uj,
  max: Yj,
  extent: Kj,
  mean: qj,
  median: Xj,
  unique: Zj,
  uniqueCount: Jj,
  count: Qj
}, e6 = {
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
    onGroupingChange: Ot("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, t) => {
    e.toggleGrouping = () => {
      t.setGrouping((n) => n != null && n.includes(e.id) ? n.filter((r) => r !== e.id) : [...n ?? [], e.id]);
    }, e.getCanGroup = () => {
      var n, r;
      return ((n = e.columnDef.enableGrouping) != null ? n : !0) && ((r = t.options.enableGrouping) != null ? r : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
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
      const n = t.getCoreRowModel().flatRows[0], r = n == null ? void 0 : n.getValue(e.id);
      if (typeof r == "number")
        return wi.sum;
      if (Object.prototype.toString.call(r) === "[object Date]")
        return wi.extent;
    }, e.getAggregationFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return js(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (n = (r = t.options.aggregationFns) == null ? void 0 : r[e.columnDef.aggregationFn]) != null ? n : wi[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
      var n, r;
      e.setGrouping(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.grouping) != null ? n : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, t) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
      if (e._groupingValuesCache.hasOwnProperty(n))
        return e._groupingValuesCache[n];
      const r = t.getColumn(n);
      return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, t, n, r) => {
    e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
      var o;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((o = n.subRows) != null && o.length);
    };
  }
};
function t6(e, t, n) {
  if (!(t != null && t.length) || !n)
    return e;
  const r = e.filter((a) => !t.includes(a.id));
  return n === "remove" ? r : [...t.map((a) => e.find((s) => s.id === a)).filter(Boolean), ...r];
}
const n6 = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: Ot("columnOrder", e)
  }),
  createColumn: (e, t) => {
    e.getIndex = de((n) => [fo(t, n)], (n) => n.findIndex((r) => r.id === e.id), fe(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => {
      var r;
      return ((r = fo(t, n)[0]) == null ? void 0 : r.id) === e.id;
    }, e.getIsLastColumn = (n) => {
      var r;
      const o = fo(t, n);
      return ((r = o[o.length - 1]) == null ? void 0 : r.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
      var n;
      e.setColumnOrder(t ? [] : (n = e.initialState.columnOrder) != null ? n : []);
    }, e._getOrderColumnsFn = de(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (t, n, r) => (o) => {
      let a = [];
      if (!(t != null && t.length))
        a = o;
      else {
        const s = [...t], i = [...o];
        for (; i.length && s.length; ) {
          const l = s.shift(), u = i.findIndex((f) => f.id === l);
          u > -1 && a.push(i.splice(u, 1)[0]);
        }
        a = [...a, ...i];
      }
      return t6(a, n, r);
    }, fe(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, yi = () => ({
  left: [],
  right: []
}), r6 = {
  getInitialState: (e) => ({
    columnPinning: yi(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: Ot("columnPinning", e)
  }),
  createColumn: (e, t) => {
    e.pin = (n) => {
      const r = e.getLeafColumns().map((o) => o.id).filter(Boolean);
      t.setColumnPinning((o) => {
        var a, s;
        if (n === "right") {
          var i, l;
          return {
            left: ((i = o == null ? void 0 : o.left) != null ? i : []).filter((p) => !(r != null && r.includes(p))),
            right: [...((l = o == null ? void 0 : o.right) != null ? l : []).filter((p) => !(r != null && r.includes(p))), ...r]
          };
        }
        if (n === "left") {
          var u, f;
          return {
            left: [...((u = o == null ? void 0 : o.left) != null ? u : []).filter((p) => !(r != null && r.includes(p))), ...r],
            right: ((f = o == null ? void 0 : o.right) != null ? f : []).filter((p) => !(r != null && r.includes(p)))
          };
        }
        return {
          left: ((a = o == null ? void 0 : o.left) != null ? a : []).filter((p) => !(r != null && r.includes(p))),
          right: ((s = o == null ? void 0 : o.right) != null ? s : []).filter((p) => !(r != null && r.includes(p)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((r) => {
      var o, a, s;
      return ((o = r.columnDef.enablePinning) != null ? o : !0) && ((a = (s = t.options.enableColumnPinning) != null ? s : t.options.enablePinning) != null ? a : !0);
    }), e.getIsPinned = () => {
      const n = e.getLeafColumns().map((i) => i.id), {
        left: r,
        right: o
      } = t.getState().columnPinning, a = n.some((i) => r == null ? void 0 : r.includes(i)), s = n.some((i) => o == null ? void 0 : o.includes(i));
      return a ? "left" : s ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      return o ? (n = (r = t.getState().columnPinning) == null || (r = r[o]) == null ? void 0 : r.indexOf(e.id)) != null ? n : -1 : 0;
    };
  },
  createRow: (e, t) => {
    e.getCenterVisibleCells = de(() => [e._getAllVisibleCells(), t.getState().columnPinning.left, t.getState().columnPinning.right], (n, r, o) => {
      const a = [...r ?? [], ...o ?? []];
      return n.filter((s) => !a.includes(s.column.id));
    }, fe(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = de(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (n, r) => (r ?? []).map((a) => n.find((s) => s.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "left"
    })), fe(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = de(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (n, r) => (r ?? []).map((a) => n.find((s) => s.column.id === a)).filter(Boolean).map((a) => ({
      ...a,
      position: "right"
    })), fe(t.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => {
      var n, r;
      return e.setColumnPinning(t ? yi() : (n = (r = e.initialState) == null ? void 0 : r.columnPinning) != null ? n : yi());
    }, e.getIsSomeColumnsPinned = (t) => {
      var n;
      const r = e.getState().columnPinning;
      if (!t) {
        var o, a;
        return !!((o = r.left) != null && o.length || (a = r.right) != null && a.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e.getLeftLeafColumns = de(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), fe(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = de(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (t, n) => (n ?? []).map((r) => t.find((o) => o.id === r)).filter(Boolean), fe(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = de(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (t, n, r) => {
      const o = [...n ?? [], ...r ?? []];
      return t.filter((a) => !o.includes(a.id));
    }, fe(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function o6(e) {
  return e || (typeof document < "u" ? document : null);
}
const la = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, bi = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), a6 = {
  getDefaultColumnDef: () => la,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: bi(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: Ot("columnSizing", e),
    onColumnSizingInfoChange: Ot("columnSizingInfo", e)
  }),
  createColumn: (e, t) => {
    e.getSize = () => {
      var n, r, o;
      const a = t.getState().columnSizing[e.id];
      return Math.min(Math.max((n = e.columnDef.minSize) != null ? n : la.minSize, (r = a ?? e.columnDef.size) != null ? r : la.size), (o = e.columnDef.maxSize) != null ? o : la.maxSize);
    }, e.getStart = de((n) => [n, fo(t, n), t.getState().columnSizing], (n, r) => r.slice(0, e.getIndex(n)).reduce((o, a) => o + a.getSize(), 0), fe(t.options, "debugColumns", "getStart")), e.getAfter = de((n) => [n, fo(t, n), t.getState().columnSizing], (n, r) => r.slice(e.getIndex(n) + 1).reduce((o, a) => o + a.getSize(), 0), fe(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
      t.setColumnSizing((n) => {
        let {
          [e.id]: r,
          ...o
        } = n;
        return o;
      });
    }, e.getCanResize = () => {
      var n, r;
      return ((n = e.columnDef.enableResizing) != null ? n : !0) && ((r = t.options.enableColumnResizing) != null ? r : !0);
    }, e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, t) => {
    e.getSize = () => {
      let n = 0;
      const r = (o) => {
        if (o.subHeaders.length)
          o.subHeaders.forEach(r);
        else {
          var a;
          n += (a = o.column.getSize()) != null ? a : 0;
        }
      };
      return r(e), n;
    }, e.getStart = () => {
      if (e.index > 0) {
        const n = e.headerGroup.headers[e.index - 1];
        return n.getStart() + n.getSize();
      }
      return 0;
    }, e.getResizeHandler = (n) => {
      const r = t.getColumn(e.column.id), o = r == null ? void 0 : r.getCanResize();
      return (a) => {
        if (!r || !o || (a.persist == null || a.persist(), Ci(a) && a.touches && a.touches.length > 1))
          return;
        const s = e.getSize(), i = e ? e.getLeafHeaders().map((x) => [x.column.id, x.column.getSize()]) : [[r.id, r.getSize()]], l = Ci(a) ? Math.round(a.touches[0].clientX) : a.clientX, u = {}, f = (x, y) => {
          typeof y == "number" && (t.setColumnSizingInfo((b) => {
            var S, E;
            const R = t.options.columnResizeDirection === "rtl" ? -1 : 1, C = (y - ((S = b == null ? void 0 : b.startOffset) != null ? S : 0)) * R, M = Math.max(C / ((E = b == null ? void 0 : b.startSize) != null ? E : 0), -0.999999);
            return b.columnSizingStart.forEach((P) => {
              let [j, _] = P;
              u[j] = Math.round(Math.max(_ + _ * M, 0) * 100) / 100;
            }), {
              ...b,
              deltaOffset: C,
              deltaPercentage: M
            };
          }), (t.options.columnResizeMode === "onChange" || x === "end") && t.setColumnSizing((b) => ({
            ...b,
            ...u
          })));
        }, p = (x) => f("move", x), g = (x) => {
          f("end", x), t.setColumnSizingInfo((y) => ({
            ...y,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, m = o6(n), v = {
          moveHandler: (x) => p(x.clientX),
          upHandler: (x) => {
            m == null || m.removeEventListener("mousemove", v.moveHandler), m == null || m.removeEventListener("mouseup", v.upHandler), g(x.clientX);
          }
        }, h = {
          moveHandler: (x) => (x.cancelable && (x.preventDefault(), x.stopPropagation()), p(x.touches[0].clientX), !1),
          upHandler: (x) => {
            var y;
            m == null || m.removeEventListener("touchmove", h.moveHandler), m == null || m.removeEventListener("touchend", h.upHandler), x.cancelable && (x.preventDefault(), x.stopPropagation()), g((y = x.touches[0]) == null ? void 0 : y.clientX);
          }
        }, w = s6() ? {
          passive: !1
        } : !1;
        Ci(a) ? (m == null || m.addEventListener("touchmove", h.moveHandler, w), m == null || m.addEventListener("touchend", h.upHandler, w)) : (m == null || m.addEventListener("mousemove", v.moveHandler, w), m == null || m.addEventListener("mouseup", v.upHandler, w)), t.setColumnSizingInfo((x) => ({
          ...x,
          startOffset: l,
          startSize: s,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: i,
          isResizingColumn: r.id
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
      e.setColumnSizingInfo(t ? bi() : (n = e.initialState.columnSizingInfo) != null ? n : bi());
    }, e.getTotalSize = () => {
      var t, n;
      return (t = (n = e.getHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getLeftTotalSize = () => {
      var t, n;
      return (t = (n = e.getLeftHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getCenterTotalSize = () => {
      var t, n;
      return (t = (n = e.getCenterHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    }, e.getRightTotalSize = () => {
      var t, n;
      return (t = (n = e.getRightHeaderGroups()[0]) == null ? void 0 : n.headers.reduce((r, o) => r + o.getSize(), 0)) != null ? t : 0;
    };
  }
};
let ca = null;
function s6() {
  if (typeof ca == "boolean") return ca;
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
  return ca = e, ca;
}
function Ci(e) {
  return e.type === "touchstart";
}
const i6 = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: Ot("columnVisibility", e)
  }),
  createColumn: (e, t) => {
    e.toggleVisibility = (n) => {
      e.getCanHide() && t.setColumnVisibility((r) => ({
        ...r,
        [e.id]: n ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var n, r;
      const o = e.columns;
      return (n = o.length ? o.some((a) => a.getIsVisible()) : (r = t.getState().columnVisibility) == null ? void 0 : r[e.id]) != null ? n : !0;
    }, e.getCanHide = () => {
      var n, r;
      return ((n = e.columnDef.enableHiding) != null ? n : !0) && ((r = t.options.enableHiding) != null ? r : !0);
    }, e.getToggleVisibilityHandler = () => (n) => {
      e.toggleVisibility == null || e.toggleVisibility(n.target.checked);
    };
  },
  createRow: (e, t) => {
    e._getAllVisibleCells = de(() => [e.getAllCells(), t.getState().columnVisibility], (n) => n.filter((r) => r.column.getIsVisible()), fe(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = de(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (n, r, o) => [...n, ...r, ...o], fe(t.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const t = (n, r) => de(() => [r(), r().filter((o) => o.getIsVisible()).map((o) => o.id).join("_")], (o) => o.filter((a) => a.getIsVisible == null ? void 0 : a.getIsVisible()), fe(e.options, "debugColumns", n));
    e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (n) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(n), e.resetColumnVisibility = (n) => {
      var r;
      e.setColumnVisibility(n ? {} : (r = e.initialState.columnVisibility) != null ? r : {});
    }, e.toggleAllColumnsVisible = (n) => {
      var r;
      n = (r = n) != null ? r : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((o, a) => ({
        ...o,
        [a.id]: n || !(a.getCanHide != null && a.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((n) => !(n.getIsVisible != null && n.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((n) => n.getIsVisible == null ? void 0 : n.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (n) => {
      var r;
      e.toggleAllColumnsVisible((r = n.target) == null ? void 0 : r.checked);
    };
  }
};
function fo(e, t) {
  return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const l6 = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, c6 = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: Ot("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (t) => {
      var n;
      const r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
      return typeof r == "string" || typeof r == "number";
    }
  }),
  createColumn: (e, t) => {
    e.getCanGlobalFilter = () => {
      var n, r, o, a;
      return ((n = e.columnDef.enableGlobalFilter) != null ? n : !0) && ((r = t.options.enableGlobalFilter) != null ? r : !0) && ((o = t.options.enableFilters) != null ? o : !0) && ((a = t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) != null ? a : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => yn.includesString, e.getGlobalFilterFn = () => {
      var t, n;
      const {
        globalFilterFn: r
      } = e.options;
      return js(r) ? r : r === "auto" ? e.getGlobalAutoFilterFn() : (t = (n = e.options.filterFns) == null ? void 0 : n[r]) != null ? t : yn[r];
    }, e.setGlobalFilter = (t) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
    }, e.resetGlobalFilter = (t) => {
      e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
    };
  }
}, u6 = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: Ot("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetExpanded = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetExpanded) != null ? r : !e.options.manualExpanding) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetExpanded(), n = !1;
        });
      }
    }, e.setExpanded = (r) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(r), e.toggleAllRowsExpanded = (r) => {
      r ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (r) => {
      var o, a;
      e.setExpanded(r ? {} : (o = (a = e.initialState) == null ? void 0 : a.expanded) != null ? o : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((r) => r.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (r) => {
      r.persist == null || r.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const r = e.getState().expanded;
      return r === !0 || Object.values(r).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const r = e.getState().expanded;
      return typeof r == "boolean" ? r === !0 : !(!Object.keys(r).length || e.getRowModel().flatRows.some((o) => !o.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let r = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((a) => {
        const s = a.split(".");
        r = Math.max(r, s.length);
      }), r;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, t) => {
    e.toggleExpanded = (n) => {
      t.setExpanded((r) => {
        var o;
        const a = r === !0 ? !0 : !!(r != null && r[e.id]);
        let s = {};
        if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((i) => {
          s[i] = !0;
        }) : s = r, n = (o = n) != null ? o : !a, !a && n)
          return {
            ...s,
            [e.id]: !0
          };
        if (a && !n) {
          const {
            [e.id]: i,
            ...l
          } = s;
          return l;
        }
        return r;
      });
    }, e.getIsExpanded = () => {
      var n;
      const r = t.getState().expanded;
      return !!((n = t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) != null ? n : r === !0 || r != null && r[e.id]);
    }, e.getCanExpand = () => {
      var n, r, o;
      return (n = t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) != null ? n : ((r = t.options.enableExpanding) != null ? r : !0) && !!((o = e.subRows) != null && o.length);
    }, e.getIsAllParentsExpanded = () => {
      let n = !0, r = e;
      for (; n && r.parentId; )
        r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
      return n;
    }, e.getToggleExpandedHandler = () => {
      const n = e.getCanExpand();
      return () => {
        n && e.toggleExpanded();
      };
    };
  }
}, wl = 0, yl = 10, Si = () => ({
  pageIndex: wl,
  pageSize: yl
}), d6 = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...Si(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: Ot("pagination", e)
  }),
  createTable: (e) => {
    let t = !1, n = !1;
    e._autoResetPageIndex = () => {
      var r, o;
      if (!t) {
        e._queue(() => {
          t = !0;
        });
        return;
      }
      if ((r = (o = e.options.autoResetAll) != null ? o : e.options.autoResetPageIndex) != null ? r : !e.options.manualPagination) {
        if (n) return;
        n = !0, e._queue(() => {
          e.resetPageIndex(), n = !1;
        });
      }
    }, e.setPagination = (r) => {
      const o = (a) => Dn(r, a);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(o);
    }, e.resetPagination = (r) => {
      var o;
      e.setPagination(r ? Si() : (o = e.initialState.pagination) != null ? o : Si());
    }, e.setPageIndex = (r) => {
      e.setPagination((o) => {
        let a = Dn(r, o.pageIndex);
        const s = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return a = Math.max(0, Math.min(a, s)), {
          ...o,
          pageIndex: a
        };
      });
    }, e.resetPageIndex = (r) => {
      var o, a;
      e.setPageIndex(r ? wl : (o = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageIndex) != null ? o : wl);
    }, e.resetPageSize = (r) => {
      var o, a;
      e.setPageSize(r ? yl : (o = (a = e.initialState) == null || (a = a.pagination) == null ? void 0 : a.pageSize) != null ? o : yl);
    }, e.setPageSize = (r) => {
      e.setPagination((o) => {
        const a = Math.max(1, Dn(r, o.pageSize)), s = o.pageSize * o.pageIndex, i = Math.floor(s / a);
        return {
          ...o,
          pageIndex: i,
          pageSize: a
        };
      });
    }, e.setPageCount = (r) => e.setPagination((o) => {
      var a;
      let s = Dn(r, (a = e.options.pageCount) != null ? a : -1);
      return typeof s == "number" && (s = Math.max(-1, s)), {
        ...o,
        pageCount: s
      };
    }), e.getPageOptions = de(() => [e.getPageCount()], (r) => {
      let o = [];
      return r && r > 0 && (o = [...new Array(r)].fill(null).map((a, s) => s)), o;
    }, fe(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: r
      } = e.getState().pagination, o = e.getPageCount();
      return o === -1 ? !0 : o === 0 ? !1 : r < o - 1;
    }, e.previousPage = () => e.setPageIndex((r) => r - 1), e.nextPage = () => e.setPageIndex((r) => r + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var r;
      return (r = e.options.pageCount) != null ? r : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var r;
      return (r = e.options.rowCount) != null ? r : e.getPrePaginationRowModel().rows.length;
    };
  }
}, Ri = () => ({
  top: [],
  bottom: []
}), f6 = {
  getInitialState: (e) => ({
    rowPinning: Ri(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: Ot("rowPinning", e)
  }),
  createRow: (e, t) => {
    e.pin = (n, r, o) => {
      const a = r ? e.getLeafRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], s = o ? e.getParentRows().map((l) => {
        let {
          id: u
        } = l;
        return u;
      }) : [], i = /* @__PURE__ */ new Set([...s, e.id, ...a]);
      t.setRowPinning((l) => {
        var u, f;
        if (n === "bottom") {
          var p, g;
          return {
            top: ((p = l == null ? void 0 : l.top) != null ? p : []).filter((h) => !(i != null && i.has(h))),
            bottom: [...((g = l == null ? void 0 : l.bottom) != null ? g : []).filter((h) => !(i != null && i.has(h))), ...Array.from(i)]
          };
        }
        if (n === "top") {
          var m, v;
          return {
            top: [...((m = l == null ? void 0 : l.top) != null ? m : []).filter((h) => !(i != null && i.has(h))), ...Array.from(i)],
            bottom: ((v = l == null ? void 0 : l.bottom) != null ? v : []).filter((h) => !(i != null && i.has(h)))
          };
        }
        return {
          top: ((u = l == null ? void 0 : l.top) != null ? u : []).filter((h) => !(i != null && i.has(h))),
          bottom: ((f = l == null ? void 0 : l.bottom) != null ? f : []).filter((h) => !(i != null && i.has(h)))
        };
      });
    }, e.getCanPin = () => {
      var n;
      const {
        enableRowPinning: r,
        enablePinning: o
      } = t.options;
      return typeof r == "function" ? r(e) : (n = r ?? o) != null ? n : !0;
    }, e.getIsPinned = () => {
      const n = [e.id], {
        top: r,
        bottom: o
      } = t.getState().rowPinning, a = n.some((i) => r == null ? void 0 : r.includes(i)), s = n.some((i) => o == null ? void 0 : o.includes(i));
      return a ? "top" : s ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var n, r;
      const o = e.getIsPinned();
      if (!o) return -1;
      const a = (n = o === "top" ? t.getTopRows() : t.getBottomRows()) == null ? void 0 : n.map((s) => {
        let {
          id: i
        } = s;
        return i;
      });
      return (r = a == null ? void 0 : a.indexOf(e.id)) != null ? r : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => {
      var n, r;
      return e.setRowPinning(t ? Ri() : (n = (r = e.initialState) == null ? void 0 : r.rowPinning) != null ? n : Ri());
    }, e.getIsSomeRowsPinned = (t) => {
      var n;
      const r = e.getState().rowPinning;
      if (!t) {
        var o, a;
        return !!((o = r.top) != null && o.length || (a = r.bottom) != null && a.length);
      }
      return !!((n = r[t]) != null && n.length);
    }, e._getPinnedRows = (t, n, r) => {
      var o;
      return ((o = e.options.keepPinnedRows) == null || o ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (n ?? []).map((s) => {
          const i = e.getRow(s, !0);
          return i.getIsAllParentsExpanded() ? i : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (n ?? []).map((s) => t.find((i) => i.id === s))
      )).filter(Boolean).map((s) => ({
        ...s,
        position: r
      }));
    }, e.getTopRows = de(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), fe(e.options, "debugRows", "getTopRows")), e.getBottomRows = de(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), fe(e.options, "debugRows", "getBottomRows")), e.getCenterRows = de(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (t, n, r) => {
      const o = /* @__PURE__ */ new Set([...n ?? [], ...r ?? []]);
      return t.filter((a) => !o.has(a.id));
    }, fe(e.options, "debugRows", "getCenterRows"));
  }
}, p6 = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: Ot("rowSelection", e),
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
        const r = {
          ...n
        }, o = e.getPreGroupedRowModel().flatRows;
        return t ? o.forEach((a) => {
          a.getCanSelect() && (r[a.id] = !0);
        }) : o.forEach((a) => {
          delete r[a.id];
        }), r;
      });
    }, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
      const r = typeof t < "u" ? t : !e.getIsAllPageRowsSelected(), o = {
        ...n
      };
      return e.getRowModel().rows.forEach((a) => {
        bl(o, a.id, r, !0, e);
      }), o;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = de(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Ei(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, fe(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = de(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Ei(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, fe(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = de(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Ei(e, n) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, fe(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const t = e.getFilteredRowModel().flatRows, {
        rowSelection: n
      } = e.getState();
      let r = !!(t.length && Object.keys(n).length);
      return r && t.some((o) => o.getCanSelect() && !n[o.id]) && (r = !1), r;
    }, e.getIsAllPageRowsSelected = () => {
      const t = e.getPaginationRowModel().flatRows.filter((o) => o.getCanSelect()), {
        rowSelection: n
      } = e.getState();
      let r = !!t.length;
      return r && t.some((o) => !n[o.id]) && (r = !1), r;
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
    e.toggleSelected = (n, r) => {
      const o = e.getIsSelected();
      t.setRowSelection((a) => {
        var s;
        if (n = typeof n < "u" ? n : !o, e.getCanSelect() && o === n)
          return a;
        const i = {
          ...a
        };
        return bl(i, e.id, n, (s = r == null ? void 0 : r.selectChildren) != null ? s : !0, t), i;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Cu(e, n);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Cl(e, n) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: n
      } = t.getState();
      return Cl(e, n) === "all";
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
      return (r) => {
        var o;
        n && e.toggleSelected((o = r.target) == null ? void 0 : o.checked);
      };
    };
  }
}, bl = (e, t, n, r, o) => {
  var a;
  const s = o.getRow(t, !0);
  n ? (s.getCanMultiSelect() || Object.keys(e).forEach((i) => delete e[i]), s.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = s.subRows) != null && a.length && s.getCanSelectSubRows() && s.subRows.forEach((i) => bl(e, i.id, n, r, o));
};
function Ei(e, t) {
  const n = e.getState().rowSelection, r = [], o = {}, a = function(s, i) {
    return s.map((l) => {
      var u;
      const f = Cu(l, n);
      if (f && (r.push(l), o[l.id] = l), (u = l.subRows) != null && u.length && (l = {
        ...l,
        subRows: a(l.subRows)
      }), f)
        return l;
    }).filter(Boolean);
  };
  return {
    rows: a(t.rows),
    flatRows: r,
    rowsById: o
  };
}
function Cu(e, t) {
  var n;
  return (n = t[e.id]) != null ? n : !1;
}
function Cl(e, t, n) {
  var r;
  if (!((r = e.subRows) != null && r.length)) return !1;
  let o = !0, a = !1;
  return e.subRows.forEach((s) => {
    if (!(a && !o) && (s.getCanSelect() && (Cu(s, t) ? a = !0 : o = !1), s.subRows && s.subRows.length)) {
      const i = Cl(s, t);
      i === "all" ? a = !0 : (i === "some" && (a = !0), o = !1);
    }
  }), o ? "all" : a ? "some" : !1;
}
const Sl = /([0-9]+)/gm, m6 = (e, t, n) => Sy($n(e.getValue(n)).toLowerCase(), $n(t.getValue(n)).toLowerCase()), g6 = (e, t, n) => Sy($n(e.getValue(n)), $n(t.getValue(n))), h6 = (e, t, n) => Su($n(e.getValue(n)).toLowerCase(), $n(t.getValue(n)).toLowerCase()), v6 = (e, t, n) => Su($n(e.getValue(n)), $n(t.getValue(n))), x6 = (e, t, n) => {
  const r = e.getValue(n), o = t.getValue(n);
  return r > o ? 1 : r < o ? -1 : 0;
}, w6 = (e, t, n) => Su(e.getValue(n), t.getValue(n));
function Su(e, t) {
  return e === t ? 0 : e > t ? 1 : -1;
}
function $n(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Sy(e, t) {
  const n = e.split(Sl).filter(Boolean), r = t.split(Sl).filter(Boolean);
  for (; n.length && r.length; ) {
    const o = n.shift(), a = r.shift(), s = parseInt(o, 10), i = parseInt(a, 10), l = [s, i].sort();
    if (isNaN(l[0])) {
      if (o > a)
        return 1;
      if (a > o)
        return -1;
      continue;
    }
    if (isNaN(l[1]))
      return isNaN(s) ? -1 : 1;
    if (s > i)
      return 1;
    if (i > s)
      return -1;
  }
  return n.length - r.length;
}
const ro = {
  alphanumeric: m6,
  alphanumericCaseSensitive: g6,
  text: h6,
  textCaseSensitive: v6,
  datetime: x6,
  basic: w6
}, y6 = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: Ot("sorting", e),
    isMultiSortEvent: (t) => t.shiftKey
  }),
  createColumn: (e, t) => {
    e.getAutoSortingFn = () => {
      const n = t.getFilteredRowModel().flatRows.slice(10);
      let r = !1;
      for (const o of n) {
        const a = o == null ? void 0 : o.getValue(e.id);
        if (Object.prototype.toString.call(a) === "[object Date]")
          return ro.datetime;
        if (typeof a == "string" && (r = !0, a.split(Sl).length > 1))
          return ro.alphanumeric;
      }
      return r ? ro.text : ro.basic;
    }, e.getAutoSortDir = () => {
      const n = t.getFilteredRowModel().flatRows[0];
      return typeof (n == null ? void 0 : n.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var n, r;
      if (!e)
        throw new Error();
      return js(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (n = (r = t.options.sortingFns) == null ? void 0 : r[e.columnDef.sortingFn]) != null ? n : ro[e.columnDef.sortingFn];
    }, e.toggleSorting = (n, r) => {
      const o = e.getNextSortingOrder(), a = typeof n < "u" && n !== null;
      t.setSorting((s) => {
        const i = s == null ? void 0 : s.find((m) => m.id === e.id), l = s == null ? void 0 : s.findIndex((m) => m.id === e.id);
        let u = [], f, p = a ? n : o === "desc";
        if (s != null && s.length && e.getCanMultiSort() && r ? i ? f = "toggle" : f = "add" : s != null && s.length && l !== s.length - 1 ? f = "replace" : i ? f = "toggle" : f = "replace", f === "toggle" && (a || o || (f = "remove")), f === "add") {
          var g;
          u = [...s, {
            id: e.id,
            desc: p
          }], u.splice(0, u.length - ((g = t.options.maxMultiSortColCount) != null ? g : Number.MAX_SAFE_INTEGER));
        } else f === "toggle" ? u = s.map((m) => m.id === e.id ? {
          ...m,
          desc: p
        } : m) : f === "remove" ? u = s.filter((m) => m.id !== e.id) : u = [{
          id: e.id,
          desc: p
        }];
        return u;
      });
    }, e.getFirstSortDir = () => {
      var n, r;
      return ((n = (r = e.columnDef.sortDescFirst) != null ? r : t.options.sortDescFirst) != null ? n : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (n) => {
      var r, o;
      const a = e.getFirstSortDir(), s = e.getIsSorted();
      return s ? s !== a && ((r = t.options.enableSortingRemoval) == null || r) && // If enableSortRemove, enable in general
      (!(n && (o = t.options.enableMultiRemove) != null) || o) ? !1 : s === "desc" ? "asc" : "desc" : a;
    }, e.getCanSort = () => {
      var n, r;
      return ((n = e.columnDef.enableSorting) != null ? n : !0) && ((r = t.options.enableSorting) != null ? r : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var n, r;
      return (n = (r = e.columnDef.enableMultiSort) != null ? r : t.options.enableMultiSort) != null ? n : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var n;
      const r = (n = t.getState().sorting) == null ? void 0 : n.find((o) => o.id === e.id);
      return r ? r.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var n, r;
      return (n = (r = t.getState().sorting) == null ? void 0 : r.findIndex((o) => o.id === e.id)) != null ? n : -1;
    }, e.clearSorting = () => {
      t.setSorting((n) => n != null && n.length ? n.filter((r) => r.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const n = e.getCanSort();
      return (r) => {
        n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
      var n, r;
      e.setSorting(t ? [] : (n = (r = e.initialState) == null ? void 0 : r.sorting) != null ? n : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, b6 = [
  Bj,
  i6,
  n6,
  r6,
  Hj,
  Gj,
  l6,
  //depends on ColumnFaceting
  c6,
  //depends on ColumnFiltering
  y6,
  e6,
  //depends on RowSorting
  u6,
  d6,
  f6,
  p6,
  a6
];
function C6(e) {
  var t, n;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const r = [...b6, ...(t = e._features) != null ? t : []];
  let o = {
    _features: r
  };
  const a = o._features.reduce((g, m) => Object.assign(g, m.getDefaultOptions == null ? void 0 : m.getDefaultOptions(o)), {}), s = (g) => o.options.mergeOptions ? o.options.mergeOptions(a, g) : {
    ...a,
    ...g
  };
  let l = {
    ...{},
    ...(n = e.initialState) != null ? n : {}
  };
  o._features.forEach((g) => {
    var m;
    l = (m = g.getInitialState == null ? void 0 : g.getInitialState(l)) != null ? m : l;
  });
  const u = [];
  let f = !1;
  const p = {
    _features: r,
    options: {
      ...a,
      ...e
    },
    initialState: l,
    _queue: (g) => {
      u.push(g), f || (f = !0, Promise.resolve().then(() => {
        for (; u.length; )
          u.shift()();
        f = !1;
      }).catch((m) => setTimeout(() => {
        throw m;
      })));
    },
    reset: () => {
      o.setState(o.initialState);
    },
    setOptions: (g) => {
      const m = Dn(g, o.options);
      o.options = s(m);
    },
    getState: () => o.options.state,
    setState: (g) => {
      o.options.onStateChange == null || o.options.onStateChange(g);
    },
    _getRowId: (g, m, v) => {
      var h;
      return (h = o.options.getRowId == null ? void 0 : o.options.getRowId(g, m, v)) != null ? h : `${v ? [v.id, m].join(".") : m}`;
    },
    getCoreRowModel: () => (o._getCoreRowModel || (o._getCoreRowModel = o.options.getCoreRowModel(o)), o._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => o.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (g, m) => {
      let v = (m ? o.getPrePaginationRowModel() : o.getRowModel()).rowsById[g];
      if (!v && (v = o.getCoreRowModel().rowsById[g], !v))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${g}`) : new Error();
      return v;
    },
    _getDefaultColumnDef: de(() => [o.options.defaultColumn], (g) => {
      var m;
      return g = (m = g) != null ? m : {}, {
        header: (v) => {
          const h = v.header.column.columnDef;
          return h.accessorKey ? h.accessorKey : h.accessorFn ? h.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (v) => {
          var h, w;
          return (h = (w = v.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? h : null;
        },
        ...o._features.reduce((v, h) => Object.assign(v, h.getDefaultColumnDef == null ? void 0 : h.getDefaultColumnDef()), {}),
        ...g
      };
    }, fe(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => o.options.columns,
    getAllColumns: de(() => [o._getColumnDefs()], (g) => {
      const m = function(v, h, w) {
        return w === void 0 && (w = 0), v.map((x) => {
          const y = Vj(o, x, w, h), b = x;
          return y.columns = b.columns ? m(b.columns, y, w + 1) : [], y;
        });
      };
      return m(g);
    }, fe(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: de(() => [o.getAllColumns()], (g) => g.flatMap((m) => m.getFlatColumns()), fe(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: de(() => [o.getAllFlatColumns()], (g) => g.reduce((m, v) => (m[v.id] = v, m), {}), fe(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: de(() => [o.getAllColumns(), o._getOrderColumnsFn()], (g, m) => {
      let v = g.flatMap((h) => h.getLeafColumns());
      return m(v);
    }, fe(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (g) => {
      const m = o._getAllFlatColumnsById()[g];
      return process.env.NODE_ENV !== "production" && !m && console.error(`[Table] Column with id '${g}' does not exist.`), m;
    }
  };
  Object.assign(o, p);
  for (let g = 0; g < o._features.length; g++) {
    const m = o._features[g];
    m == null || m.createTable == null || m.createTable(o);
  }
  return o;
}
function S6() {
  return (e) => de(() => [e.options.data], (t) => {
    const n = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, r = function(o, a, s) {
      a === void 0 && (a = 0);
      const i = [];
      for (let u = 0; u < o.length; u++) {
        const f = yu(e, e._getRowId(o[u], u, s), o[u], u, a, void 0, s == null ? void 0 : s.id);
        if (n.flatRows.push(f), n.rowsById[f.id] = f, i.push(f), e.options.getSubRows) {
          var l;
          f.originalSubRows = e.options.getSubRows(o[u], u), (l = f.originalSubRows) != null && l.length && (f.subRows = r(f.originalSubRows, a + 1, f));
        }
      }
      return i;
    };
    return n.rows = r(t), n;
  }, fe(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function R6(e) {
  const t = [], n = (r) => {
    var o;
    t.push(r), (o = r.subRows) != null && o.length && r.getIsExpanded() && r.subRows.forEach(n);
  };
  return e.rows.forEach(n), {
    rows: t,
    flatRows: e.flatRows,
    rowsById: e.rowsById
  };
}
function Ry(e, t, n) {
  return n.options.filterFromLeafRows ? E6(e, t, n) : N6(e, t, n);
}
function E6(e, t, n) {
  var r;
  const o = [], a = {}, s = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, i = function(l, u) {
    u === void 0 && (u = 0);
    const f = [];
    for (let g = 0; g < l.length; g++) {
      var p;
      let m = l[g];
      const v = yu(n, m.id, m.original, m.index, m.depth, void 0, m.parentId);
      if (v.columnFilters = m.columnFilters, (p = m.subRows) != null && p.length && u < s) {
        if (v.subRows = i(m.subRows, u + 1), m = v, t(m) && !v.subRows.length) {
          f.push(m), a[m.id] = m, o.push(m);
          continue;
        }
        if (t(m) || v.subRows.length) {
          f.push(m), a[m.id] = m, o.push(m);
          continue;
        }
      } else
        m = v, t(m) && (f.push(m), a[m.id] = m, o.push(m));
    }
    return f;
  };
  return {
    rows: i(e),
    flatRows: o,
    rowsById: a
  };
}
function N6(e, t, n) {
  var r;
  const o = [], a = {}, s = (r = n.options.maxLeafRowFilterDepth) != null ? r : 100, i = function(l, u) {
    u === void 0 && (u = 0);
    const f = [];
    for (let g = 0; g < l.length; g++) {
      let m = l[g];
      if (t(m)) {
        var p;
        if ((p = m.subRows) != null && p.length && u < s) {
          const h = yu(n, m.id, m.original, m.index, m.depth, void 0, m.parentId);
          h.subRows = i(m.subRows, u + 1), m = h;
        }
        f.push(m), o.push(m), a[m.id] = m;
      }
    }
    return f;
  };
  return {
    rows: i(e),
    flatRows: o,
    rowsById: a
  };
}
function P6() {
  return (e, t) => de(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter, e.getFilteredRowModel()], (n, r, o) => {
    if (!n.rows.length || !(r != null && r.length) && !o)
      return n;
    const a = [...r.map((i) => i.id).filter((i) => i !== t), o ? "__global__" : void 0].filter(Boolean), s = (i) => {
      for (let l = 0; l < a.length; l++)
        if (i.columnFilters[a[l]] === !1)
          return !1;
      return !0;
    };
    return Ry(n.rows, s, e);
  }, fe(e.options, "debugTable", "getFacetedRowModel"));
}
function _6() {
  return (e, t) => de(() => {
    var n;
    return [(n = e.getColumn(t)) == null ? void 0 : n.getFacetedRowModel()];
  }, (n) => {
    if (!n) return /* @__PURE__ */ new Map();
    let r = /* @__PURE__ */ new Map();
    for (let a = 0; a < n.flatRows.length; a++) {
      const s = n.flatRows[a].getUniqueValues(t);
      for (let i = 0; i < s.length; i++) {
        const l = s[i];
        if (r.has(l)) {
          var o;
          r.set(l, ((o = r.get(l)) != null ? o : 0) + 1);
        } else
          r.set(l, 1);
      }
    }
    return r;
  }, fe(e.options, "debugTable", `getFacetedUniqueValues_${t}`));
}
function M6() {
  return (e) => de(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (t, n, r) => {
    if (!t.rows.length || !(n != null && n.length) && !r) {
      for (let g = 0; g < t.flatRows.length; g++)
        t.flatRows[g].columnFilters = {}, t.flatRows[g].columnFiltersMeta = {};
      return t;
    }
    const o = [], a = [];
    (n ?? []).forEach((g) => {
      var m;
      const v = e.getColumn(g.id);
      if (!v)
        return;
      const h = v.getFilterFn();
      if (!h) {
        process.env.NODE_ENV !== "production" && console.warn(`Could not find a valid 'column.filterFn' for column with the ID: ${v.id}.`);
        return;
      }
      o.push({
        id: g.id,
        filterFn: h,
        resolvedValue: (m = h.resolveFilterValue == null ? void 0 : h.resolveFilterValue(g.value)) != null ? m : g.value
      });
    });
    const s = (n ?? []).map((g) => g.id), i = e.getGlobalFilterFn(), l = e.getAllLeafColumns().filter((g) => g.getCanGlobalFilter());
    r && i && l.length && (s.push("__global__"), l.forEach((g) => {
      var m;
      a.push({
        id: g.id,
        filterFn: i,
        resolvedValue: (m = i.resolveFilterValue == null ? void 0 : i.resolveFilterValue(r)) != null ? m : r
      });
    }));
    let u, f;
    for (let g = 0; g < t.flatRows.length; g++) {
      const m = t.flatRows[g];
      if (m.columnFilters = {}, o.length)
        for (let v = 0; v < o.length; v++) {
          u = o[v];
          const h = u.id;
          m.columnFilters[h] = u.filterFn(m, h, u.resolvedValue, (w) => {
            m.columnFiltersMeta[h] = w;
          });
        }
      if (a.length) {
        for (let v = 0; v < a.length; v++) {
          f = a[v];
          const h = f.id;
          if (f.filterFn(m, h, f.resolvedValue, (w) => {
            m.columnFiltersMeta[h] = w;
          })) {
            m.columnFilters.__global__ = !0;
            break;
          }
        }
        m.columnFilters.__global__ !== !0 && (m.columnFilters.__global__ = !1);
      }
    }
    const p = (g) => {
      for (let m = 0; m < s.length; m++)
        if (g.columnFilters[s[m]] === !1)
          return !1;
      return !0;
    };
    return Ry(t.rows, p, e);
  }, fe(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function T6(e) {
  return (t) => de(() => [t.getState().pagination, t.getPrePaginationRowModel(), t.options.paginateExpandedRows ? void 0 : t.getState().expanded], (n, r) => {
    if (!r.rows.length)
      return r;
    const {
      pageSize: o,
      pageIndex: a
    } = n;
    let {
      rows: s,
      flatRows: i,
      rowsById: l
    } = r;
    const u = o * a, f = u + o;
    s = s.slice(u, f);
    let p;
    t.options.paginateExpandedRows ? p = {
      rows: s,
      flatRows: i,
      rowsById: l
    } : p = R6({
      rows: s,
      flatRows: i,
      rowsById: l
    }), p.flatRows = [];
    const g = (m) => {
      p.flatRows.push(m), m.subRows.length && m.subRows.forEach(g);
    };
    return p.rows.forEach(g), p;
  }, fe(t.options, "debugTable", "getPaginationRowModel"));
}
function D6() {
  return (e) => de(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
    if (!n.rows.length || !(t != null && t.length))
      return n;
    const r = e.getState().sorting, o = [], a = r.filter((l) => {
      var u;
      return (u = e.getColumn(l.id)) == null ? void 0 : u.getCanSort();
    }), s = {};
    a.forEach((l) => {
      const u = e.getColumn(l.id);
      u && (s[l.id] = {
        sortUndefined: u.columnDef.sortUndefined,
        invertSorting: u.columnDef.invertSorting,
        sortingFn: u.getSortingFn()
      });
    });
    const i = (l) => {
      const u = l.map((f) => ({
        ...f
      }));
      return u.sort((f, p) => {
        for (let m = 0; m < a.length; m += 1) {
          var g;
          const v = a[m], h = s[v.id], w = h.sortUndefined, x = (g = v == null ? void 0 : v.desc) != null ? g : !1;
          let y = 0;
          if (w) {
            const b = f.getValue(v.id), S = p.getValue(v.id), E = b === void 0, R = S === void 0;
            if (E || R) {
              if (w === "first") return E ? -1 : 1;
              if (w === "last") return E ? 1 : -1;
              y = E && R ? 0 : E ? w : -w;
            }
          }
          if (y === 0 && (y = h.sortingFn(f, p, v.id)), y !== 0)
            return x && (y *= -1), h.invertSorting && (y *= -1), y;
        }
        return f.index - p.index;
      }), u.forEach((f) => {
        var p;
        o.push(f), (p = f.subRows) != null && p.length && (f.subRows = i(f.subRows));
      }), u;
    };
    return {
      rows: i(n.rows),
      flatRows: o,
      rowsById: n.rowsById
    };
  }, fe(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
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
function qd(e, t) {
  return e ? I6(e) ? /* @__PURE__ */ d.createElement(e, t) : e : null;
}
function I6(e) {
  return A6(e) || typeof e == "function" || j6(e);
}
function A6(e) {
  return typeof e == "function" && (() => {
    const t = Object.getPrototypeOf(e);
    return t.prototype && t.prototype.isReactComponent;
  })();
}
function j6(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function k6(e) {
  const t = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [n] = d.useState(() => ({
    current: C6(t)
  })), [r, o] = d.useState(() => n.current.initialState);
  return n.current.setOptions((a) => ({
    ...a,
    ...e,
    state: {
      ...r,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (s) => {
      o(s), e.onStateChange == null || e.onStateChange(s);
    }
  })), n.current;
}
function ks(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var O6 = ["color"], $6 = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = ks(e, O6);
  return ut("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), ut("path", {
    d: "M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), L6 = ["color"], F6 = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = ks(e, L6);
  return ut("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), ut("path", {
    d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), z6 = ["color"], V6 = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = ks(e, z6);
  return ut("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), ut("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
}), B6 = ["color"], H6 = /* @__PURE__ */ pn(function(e, t) {
  var n = e.color, r = n === void 0 ? "currentColor" : n, o = ks(e, B6);
  return ut("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, o, {
    ref: t
  }), ut("path", {
    d: "M5.5 3C4.67157 3 4 3.67157 4 4.5C4 5.32843 4.67157 6 5.5 6C6.32843 6 7 5.32843 7 4.5C7 3.67157 6.32843 3 5.5 3ZM3 5C3.01671 5 3.03323 4.99918 3.04952 4.99758C3.28022 6.1399 4.28967 7 5.5 7C6.71033 7 7.71978 6.1399 7.95048 4.99758C7.96677 4.99918 7.98329 5 8 5H13.5C13.7761 5 14 4.77614 14 4.5C14 4.22386 13.7761 4 13.5 4H8C7.98329 4 7.96677 4.00082 7.95048 4.00242C7.71978 2.86009 6.71033 2 5.5 2C4.28967 2 3.28022 2.86009 3.04952 4.00242C3.03323 4.00082 3.01671 4 3 4H1.5C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5H3ZM11.9505 10.9976C11.7198 12.1399 10.7103 13 9.5 13C8.28967 13 7.28022 12.1399 7.04952 10.9976C7.03323 10.9992 7.01671 11 7 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H7C7.01671 10 7.03323 10.0008 7.04952 10.0024C7.28022 8.8601 8.28967 8 9.5 8C10.7103 8 11.7198 8.8601 11.9505 10.0024C11.9668 10.0008 11.9833 10 12 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H12C11.9833 11 11.9668 10.9992 11.9505 10.9976ZM8 10.5C8 9.67157 8.67157 9 9.5 9C10.3284 9 11 9.67157 11 10.5C11 11.3284 10.3284 12 9.5 12C8.67157 12 8 11.3284 8 10.5Z",
    fill: r,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
function G6({
  table: e
}) {
  const t = e.getState().pagination, n = e.getCoreRowModel().rows.length, r = e.getState().pagination.pageIndex, o = e.getPageCount(), a = (s) => {
    const i = Number(s);
    i >= 0 && i < o && e.setPageIndex(i);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between px-2 border-t border-t-[#E8E9EB] ", children: [
    /* @__PURE__ */ c.jsxs(
      Ld,
      {
        value: `${e.getState().pagination.pageSize}`,
        onValueChange: (s) => {
          e.setPageSize(Number(s));
        },
        children: [
          /* @__PURE__ */ c.jsx(cl, { className: " !shadow-none border-none w-14", children: /* @__PURE__ */ c.jsx(Fd, { placeholder: e.getState().pagination.pageSize }) }),
          /* @__PURE__ */ c.jsx(ul, { side: "top", children: [10, 20, 30, 40, 50].map((s) => /* @__PURE__ */ c.jsx(dl, { value: `${s}`, children: s }, s)) })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [
      t.pageIndex * t.pageSize + 1,
      " –",
      " ",
      Math.min((t.pageIndex + 1) * t.pageSize, n),
      " of",
      " ",
      n,
      " items"
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ c.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ c.jsxs(
        Ld,
        {
          value: `${r}`,
          onValueChange: a,
          children: [
            /* @__PURE__ */ c.jsx(cl, { className: " !shadow-none border-none w-14  ", children: /* @__PURE__ */ c.jsx(Fd, {}) }),
            /* @__PURE__ */ c.jsx(ul, { side: "top", children: Array.from({ length: o }, (s, i) => /* @__PURE__ */ c.jsxs(dl, { value: `${i}`, children: [
              i + 1,
              " "
            ] }, i)) })
          ]
        }
      ) }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex  items-center justify-center text-sm !ml-0", children: [
        "of ",
        o,
        " pages"
      ] }),
      /* @__PURE__ */ c.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ c.jsxs(
          jt,
          {
            variant: "secondary",
            className: "h-8 w-8 p-0 focus:bg-transparent",
            onClick: () => e.previousPage(),
            disabled: !e.getCanPreviousPage(),
            children: [
              /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ c.jsx($6, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ c.jsxs(
          jt,
          {
            variant: "secondary",
            className: "h-8 w-8 p-0 focus:bg-transparent",
            onClick: () => e.nextPage(),
            disabled: !e.getCanNextPage(),
            children: [
              /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ c.jsx(F6, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function W6({
  table: e
}) {
  return /* @__PURE__ */ c.jsxs(kh, { children: [
    /* @__PURE__ */ c.jsx(Hc, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
      jt,
      {
        variant: "outline",
        size: "sm",
        className: "ml-auto hidden h-8 lg:flex",
        children: [
          /* @__PURE__ */ c.jsx(H6, { className: "mr-2 h-4 w-4" }),
          "View"
        ]
      }
    ) }),
    /* @__PURE__ */ c.jsxs(Gc, { align: "end", className: "w-[150px]", children: [
      /* @__PURE__ */ c.jsx(Fh, { children: "Toggle columns" }),
      /* @__PURE__ */ c.jsx(zh, {}),
      e.getAllColumns().filter(
        (t) => typeof t.accessorFn < "u" && t.getCanHide()
      ).map((t) => /* @__PURE__ */ c.jsx(
        Lh,
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
function U6({
  table: e
}) {
  var n;
  const t = e.getState().columnFilters.length > 0;
  return /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ c.jsxs("div", { className: "flex flex-1 items-center space-x-2", children: [
      /* @__PURE__ */ c.jsx(
        Nl,
        {
          placeholder: "Filter classes...",
          value: ((n = e.getColumn("className")) == null ? void 0 : n.getFilterValue()) ?? "",
          onChange: (r) => {
            var o;
            return (o = e.getColumn("className")) == null ? void 0 : o.setFilterValue(r.target.value);
          },
          className: "h-8 w-[150px] lg:w-[250px]"
        }
      ),
      t && /* @__PURE__ */ c.jsxs(
        jt,
        {
          variant: "secondary",
          onClick: () => e.resetColumnFilters(),
          className: "h-8 px-2 lg:px-3",
          children: [
            "Reset",
            /* @__PURE__ */ c.jsx(V6, { className: "ml-2 h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(W6, { table: e })
  ] });
}
function ck({
  columns: e,
  data: t,
  enableFiltering: n = !1,
  enablePagination: r = !1,
  enableRowSelection: o = !1,
  enableSorting: a = !1,
  enableColumnVisibility: s = !1
}) {
  var w;
  const [i, l] = d.useState({}), [u, f] = d.useState({}), [p, g] = d.useState(
    []
  ), [m, v] = d.useState([]), h = k6({
    data: t,
    columns: e,
    state: {
      sorting: m,
      columnVisibility: u,
      rowSelection: i,
      columnFilters: p
    },
    onRowSelectionChange: o ? l : void 0,
    onSortingChange: a ? v : void 0,
    onColumnFiltersChange: n ? g : void 0,
    onColumnVisibilityChange: s ? f : void 0,
    getCoreRowModel: S6(),
    getFilteredRowModel: n ? M6() : void 0,
    getPaginationRowModel: r ? T6() : void 0,
    getSortedRowModel: a ? D6() : void 0,
    getFacetedRowModel: n ? P6() : void 0,
    getFacetedUniqueValues: n ? _6() : void 0,
    manualPagination: !r,
    manualSorting: !a
  });
  return /* @__PURE__ */ c.jsxs("div", { className: "space-y-4", children: [
    n && /* @__PURE__ */ c.jsx(U6, { table: h }),
    /* @__PURE__ */ c.jsx("div", { className: "rounded-md  ", children: /* @__PURE__ */ c.jsxs(Tw, { children: [
      /* @__PURE__ */ c.jsx(Dw, { children: h.getHeaderGroups().map((x) => /* @__PURE__ */ c.jsx(ya, { className: " border-b-[#E8E9EB] ", children: x.headers.map((y) => /* @__PURE__ */ c.jsx(Aw, { colSpan: y.colSpan, children: y.isPlaceholder ? null : qd(
        y.column.columnDef.header,
        y.getContext()
      ) }, y.id)) }, x.id)) }),
      /* @__PURE__ */ c.jsx(Iw, { children: (w = h.getRowModel().rows) != null && w.length ? h.getRowModel().rows.map((x) => /* @__PURE__ */ c.jsx(
        ya,
        {
          "data-state": o && x.getIsSelected() ? "selected" : void 0,
          children: x.getVisibleCells().map((y) => /* @__PURE__ */ c.jsx(hl, { children: qd(
            y.column.columnDef.cell,
            y.getContext()
          ) }, y.id))
        },
        x.id
      )) : /* @__PURE__ */ c.jsx(ya, { children: /* @__PURE__ */ c.jsx(
        hl,
        {
          colSpan: e.length,
          className: "h-24 text-center",
          children: "No results."
        }
      ) }) })
    ] }) }),
    r && /* @__PURE__ */ c.jsx(G6, { table: h })
  ] });
}
const uk = ({ form: e, templateFields: t, parentFocusKey: n, childFocusKey: r }) => {
  const { register: o, control: a, watch: s, setValue: i } = e, [l, u] = nt(!1), [f, p] = nt({}), g = (R) => {
    p((C) => ({
      ...C,
      child: R
    }));
  }, m = (R) => {
    u(!0), p({
      parent: R
    });
  };
  ct(() => {
    n && m(n), r && g(r);
  }, [n, r]);
  const v = (R, C, M, P) => {
    R.forEach((j) => {
      i(
        `${C}.${M}.${j.key}`,
        P ? j.id : ""
      );
    });
  }, h = (R, C, M) => /* @__PURE__ */ c.jsx(
    ua,
    {
      control: a,
      name: `${R}.${C}.${M.key}`,
      render: ({ field: P }) => /* @__PURE__ */ c.jsxs(ga, { className: "flex items-center pr-4 py-3 first:pt-[16px] last:pb-0", children: [
        /* @__PURE__ */ c.jsx(va, { children: /* @__PURE__ */ c.jsx(
          Jn,
          {
            checked: s(`${R}.${C}.${M.key}`) === (M == null ? void 0 : M.id),
            onCheckedChange: (j) => P.onChange(j ? M.id : ""),
            className: "h-4 w-4 rounded-[3px]",
            iconClassName: "!h-4 !w-4",
            "data-cy": "filter-sub-child-checkbox"
          }
        ) }),
        /* @__PURE__ */ c.jsx(
          ha,
          {
            className: `!mt-0 !mb-0 text-[14px] font-normal ${s(`${R}.${C}.${M.key}`) === (M == null ? void 0 : M.id) ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
            children: M.label
          }
        )
      ] })
    },
    M.key
  ), w = (R, C) => {
    var M, P, j;
    if (((M = C.children) == null ? void 0 : M.length) > 0) {
      let _;
      const k = (P = C == null ? void 0 : C.children) == null ? void 0 : P.every(
        (A) => {
          var U;
          return ((U = s(`${R}.${C.key}.${A.key}`)) == null ? void 0 : U.length) > 0;
        }
      ), W = (j = C == null ? void 0 : C.children) == null ? void 0 : j.every(
        (A) => !s(`${R}.${C.key}.${A.key}`)
      );
      return k ? _ = !0 : W ? _ = !1 : _ = "indeterminate", /* @__PURE__ */ c.jsx(
        n1,
        {
          collapsible: !0,
          type: "single",
          className: "pl-8 pr-4 py-3 hover:bg-[#F7F8FA]",
          value: (f == null ? void 0 : f.child) === C.key ? C.key : null,
          onValueChange: (A) => {
            A === f.child ? p((U) => ({
              ...U,
              child: null
            })) : p((U) => ({
              ...U,
              child: A
            }));
          },
          "data-cy": "filter-accordion",
          children: /* @__PURE__ */ c.jsxs(Mf, { value: C == null ? void 0 : C.key, className: "border-none", children: [
            /* @__PURE__ */ c.jsx(Tf, { className: "border-none hover:no-underline pt-0 justify-end flex-row-reverse ml-[-16px] pb-0", children: /* @__PURE__ */ c.jsx(
              ua,
              {
                control: a,
                name: `${R}.${C.key}`,
                render: () => /* @__PURE__ */ c.jsxs(ga, { className: "flex items-center pl-2", children: [
                  /* @__PURE__ */ c.jsx(va, { children: /* @__PURE__ */ c.jsx(
                    Jn,
                    {
                      onClick: (A) => A.stopPropagation(),
                      checked: _,
                      onCheckedChange: (A) => v(
                        C.children,
                        R,
                        C.key,
                        A
                      ),
                      className: "h-4 w-4 rounded-[3px]",
                      iconClassName: "!h-4 !w-4",
                      "data-cy": "filter-parent-checkbox"
                    }
                  ) }),
                  /* @__PURE__ */ c.jsx(
                    ha,
                    {
                      className: `!mt-0 !mb-0 text-[14px] font-normal ${_ ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
                      children: C.label
                    }
                  )
                ] })
              }
            ) }),
            /* @__PURE__ */ c.jsx(Df, { className: "pb-0", children: /* @__PURE__ */ c.jsx("div", { className: "pl-2", "data-cy": "filter-children", children: C.children.map(
              (A) => h(R, C.key, A)
            ) }) })
          ] })
        },
        C.key
      );
    }
    return /* @__PURE__ */ c.jsx("div", { className: "pl-8 pr-4 py-3 hover:bg-[#F7F8FA]", children: /* @__PURE__ */ c.jsx(
      ua,
      {
        control: a,
        name: `${R}.${C.key}`,
        render: ({ field: _ }) => /* @__PURE__ */ c.jsxs(ga, { className: "flex items-center pl-2", children: [
          /* @__PURE__ */ c.jsx(va, { children: /* @__PURE__ */ c.jsx(
            Jn,
            {
              checked: !!_.value,
              onCheckedChange: (k) => _.onChange(k ? C.id : ""),
              className: "h-4 w-4 rounded-[3px]",
              iconClassName: "!h-4 !w-4",
              "data-cy": "filter-child-checkbox"
            }
          ) }),
          /* @__PURE__ */ c.jsx(
            ha,
            {
              className: `!mt-0 !mb-0 text-[14px] font-normal ${_.value ? "text-[#0073E6]" : "text-[#000]"} line-clamp-1 ml-[8px]`,
              children: C.label
            }
          )
        ] })
      }
    ) }, C.key);
  }, x = s(), y = (R) => {
    var C;
    return typeof R == "object" && R !== null ? (C = Object == null ? void 0 : Object.entries(R)) == null ? void 0 : C.some(([M, P]) => M === "search" ? !1 : y(P)) : !!R;
  }, b = y(x), S = (R) => {
    var C;
    return typeof R == "object" && R !== null ? (C = Object == null ? void 0 : Object.keys(R)) == null ? void 0 : C.some((P) => {
      const j = R[P];
      return j != null && j !== "";
    }) : R != null && R !== "";
  }, E = (R) => {
    var C;
    return (C = Object.keys(R)) == null ? void 0 : C.some((M) => {
      const P = R[M];
      return S(P);
    });
  };
  return /* @__PURE__ */ c.jsxs(
    kh,
    {
      open: l,
      onOpenChange: () => u((R) => !R),
      "data-cy": "filter-menu",
      children: [
        /* @__PURE__ */ c.jsxs(qM, { className: "flex items-center hover:bg-[#F7F8FA] hover:rounded-lg focus-visible:outline-none max-h-[32px] px-[12px] py-[8px] gap-x-[12px] min-w-[94px]", "data-cy": "filter-button", children: [
          /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: /* @__PURE__ */ c.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M1.33329 4H14.6666C15.0348 4 15.3333 4.29848 15.3333 4.66667C15.3333 5.03486 15.0348 5.33333 14.6666 5.33333H1.33329C0.965103 5.33333 0.666626 5.03486 0.666626 4.66667C0.666626 4.29848 0.965103 4 1.33329 4ZM3.33329 7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66667 12.6666 8.66667H3.33329C2.9651 8.66667 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333ZM5.33329 10.6667H10.6666C11.0348 10.6667 11.3333 10.9651 11.3333 11.3333C11.3333 11.7015 11.0348 12 10.6666 12H5.33329C4.9651 12 4.66663 11.7015 4.66663 11.3333C4.66663 10.9651 4.9651 10.6667 5.33329 10.6667Z",
                  fill: b ? "#0073E6" : "#9B9EA3"
                }
              )
            }
          ),
          /* @__PURE__ */ c.jsx(
            "button",
            {
              className: `${b ? "text-[#0073E6]" : "text-[#656870]"} text-[12px] font-semibold`,
              onClick: () => u(!0),
              children: "FILTER"
            }
          )
        ] }),
        /* @__PURE__ */ c.jsxs(
          Gc,
          {
            align: "start",
            className: "w-[220px] border rounded-lg border-solid border-[#E8E9EB] px-0 py-0",
            "data-cy": "filter-menu-content",
            children: [
              t == null ? void 0 : t.map((R) => {
                var P, j;
                const C = x && x[R == null ? void 0 : R.key], M = C && E(C);
                return /* @__PURE__ */ c.jsxs(
                  XM,
                  {
                    open: (f == null ? void 0 : f.parent) === (R == null ? void 0 : R.key),
                    "data-cy": "filter-sub-menu",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        Oh,
                        {
                          className: `text-[#000] text-[14px] h-[44px] hover:bg-[#F7F8FA] py-3 px-4 justify-between hover:cursor-pointer ${M ? "font-semibold" : "font-normal"}`,
                          onMouseEnter: () => p({ parent: R.key }),
                          children: R.label
                        }
                      ),
                      /* @__PURE__ */ c.jsxs(
                        $h,
                        {
                          className: "!pointer-events-auto w-[360px] p-0 border rounded-lg border-solid border-[#E8E9EB]",
                          "data-cy": "filter-sub-menu-content",
                          children: [
                            (R == null ? void 0 : R.showSearch) && /* @__PURE__ */ c.jsxs("div", { className: "p-[8px] border-b-[#E8E9EB] border-b border-solid flex items-center", children: [
                              /* @__PURE__ */ c.jsxs(
                                "svg",
                                {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "16",
                                  height: "16",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  className: "absolute left-[20px] top-[18px]",
                                  children: [
                                    /* @__PURE__ */ c.jsx("g", { clipPath: "url(#clip0_1572_2711)", children: /* @__PURE__ */ c.jsx(
                                      "path",
                                      {
                                        d: "M12.8967 11.0079L14.9705 13.0817C15.4912 13.6024 15.4912 14.4466 14.9705 14.9673C14.4498 15.488 13.6056 15.488 13.0849 14.9673L11.0117 12.8942C9.95743 13.593 8.69289 14 7.33329 14C3.65139 14 0.666626 11.0152 0.666626 7.33329C0.666626 3.65139 3.65139 0.666626 7.33329 0.666626C11.0152 0.666626 14 3.65139 14 7.33329C14 8.69125 13.594 9.95437 12.8967 11.0079ZM12 7.33329C12 4.75596 9.91062 2.66663 7.33329 2.66663C4.75596 2.66663 2.66663 4.75596 2.66663 7.33329C2.66663 9.91062 4.75596 12 7.33329 12C9.91062 12 12 9.91062 12 7.33329Z",
                                        fill: "#9B9EA3"
                                      }
                                    ) }),
                                    /* @__PURE__ */ c.jsx("defs", { children: /* @__PURE__ */ c.jsx("clipPath", { id: "clip0_1572_2711", children: /* @__PURE__ */ c.jsx("rect", { width: "16", height: "16", fill: "white" }) }) })
                                  ]
                                }
                              ),
                              /* @__PURE__ */ c.jsx(
                                Nl,
                                {
                                  type: "text",
                                  placeholder: "Search...",
                                  value: s(`${R.key}.search`),
                                  ...o(`${R.key}.search`),
                                  className: "w-full h-[32px] border-none rounded bg-[#F7F8FA] pl-[2rem] placeholder:text-[#656870] placeholder:text-[12px]",
                                  "data-cy": "filter-search-input"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ c.jsx("div", { className: "max-h-[360px] overflow-y-auto overflow-x-hidden", children: (j = (P = R.children) == null ? void 0 : P.filter(
                              (_) => {
                                var k;
                                return _.label.toLowerCase().includes(
                                  ((k = s(`${R.key}.search`)) == null ? void 0 : k.toLowerCase()) || ""
                                );
                              }
                            )) == null ? void 0 : j.map((_) => w(R.key, _)) }),
                            /* @__PURE__ */ c.jsxs(
                              jt,
                              {
                                variant: "secondary",
                                onClick: () => {
                                  i(`${R.key}.search`, null), R.children.forEach((_) => {
                                    i(`${R.key}.${_.key}`, null), _.children && _.children.forEach((k) => {
                                      i(
                                        `${R.key}.${_.key}.${k.key}`,
                                        null
                                      );
                                    });
                                  });
                                },
                                className: "w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]",
                                "data-cy": "clear-filter-button",
                                children: [
                                  /* @__PURE__ */ c.jsxs(
                                    "svg",
                                    {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "16",
                                      height: "16",
                                      viewBox: "0 0 16 16",
                                      fill: "none",
                                      children: [
                                        /* @__PURE__ */ c.jsx(
                                          "path",
                                          {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z",
                                            fill: "currentColor"
                                          }
                                        ),
                                        /* @__PURE__ */ c.jsx(
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
                  R.key
                );
              }),
              /* @__PURE__ */ c.jsxs(
                jt,
                {
                  variant: "secondary",
                  onClick: () => {
                    var R;
                    (R = Object.keys(x)) == null || R.map((C) => {
                      var P;
                      const M = x[C] || {};
                      (P = Object.keys(M)) == null || P.map(
                        (j) => i(`${C}.${j}`, null)
                      );
                    });
                  },
                  className: "w-full h-[48px] mt-2 justify-start items-center bg-[#F7F8FA] hover:bg-[#F7F8FA] px-5 py-4 text-[#656870] text-[12px] font-semibold border-t-[#E8E9EB] border-t border-solid rounded-none hover:text-[#1A86F3]",
                  "data-cy": "clear-all-filter-button",
                  children: [
                    /* @__PURE__ */ c.jsxs(
                      "svg",
                      {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: [
                          /* @__PURE__ */ c.jsx(
                            "path",
                            {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M12.8082 11.6701L14.576 13.4379C14.7061 13.5681 14.7061 13.7791 14.576 13.9093C14.4458 14.0395 14.2347 14.0395 14.1046 13.9093L12.3368 12.1415L10.569 13.9093C10.4389 14.0395 10.2278 14.0395 10.0976 13.9093C9.96746 13.7791 9.96746 13.5681 10.0976 13.4379L11.8654 11.6701L10.0976 9.90235C9.96746 9.77217 9.96746 9.56112 10.0976 9.43094C10.2278 9.30077 10.4389 9.30077 10.569 9.43094L12.3368 11.1987L14.1046 9.43094C14.2347 9.30077 14.4458 9.30077 14.576 9.43094C14.7061 9.56112 14.7061 9.77217 14.576 9.90235L12.8082 11.6701Z",
                              fill: "currentColor"
                            }
                          ),
                          /* @__PURE__ */ c.jsx(
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
}, dk = ({
  title: e = "",
  childKey: t,
  parentKey: n = "",
  handleCloseClick: r,
  handleChipClick: o
}) => /* @__PURE__ */ c.jsxs("div", { className: "group relative", children: [
  /* @__PURE__ */ c.jsx(
    "button",
    {
      onClick: () => o({ parent: n, child: t }),
      className: "relative px-3 py-1 ml-2 border cursor-pointer rounded-lg border-solid border-[#E8E9EB] text-[#656870] text-[14px] hover:border-[#0073E6] min-h-[32px]",
      children: e
    }
  ),
  /* @__PURE__ */ c.jsx(
    "button",
    {
      className: "p-0 absolute bg-transparent hover:bg-transparent right-[-5px] top-[-5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300",
      onClick: () => r({ parent: n, child: t }),
      children: /* @__PURE__ */ c.jsx(
        "svg",
        {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: /* @__PURE__ */ c.jsxs("g", { id: "circle_cross", children: [
            /* @__PURE__ */ c.jsx(
              "path",
              {
                id: "circle",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",
                fill: "#9B9EA3"
              }
            ),
            /* @__PURE__ */ c.jsx(
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
] }), fk = ({
  mode: e = "single",
  selected: t,
  selectedRange: n,
  classes: r,
  min: o,
  max: a,
  onSelect: s = () => {
  },
  required: i = !1,
  defaultMonth: l,
  hidden: u,
  calendarIcon: f
}) => {
  const [p, g] = d.useState(), [m, v] = d.useState();
  d.useEffect(() => {
    e === "single" ? g(t || void 0) : e === "range" && v(
      n ? {
        from: n == null ? void 0 : n.from,
        to: n == null ? void 0 : n.to
      } : void 0
    );
  }, []);
  const h = {
    defaultMonth: l == null ? void 0 : l.from,
    hidden: u,
    className: I(r == null ? void 0 : r.calendarClassName),
    classNames: {
      nav: "space-x-1 flex items-center",
      nav_button: I(
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 !rounded-[20px]"
      ),
      nav_button_previous: "!absolute left-1 w-fit h-fit",
      nav_button_next: "!absolute right-1 w-fit h-fit",
      head_row: "flex",
      head_cell: "rounded-md w-9 font-normal text-[0.8rem]",
      row: "flex w-full mt-2",
      cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
      day: I(
        "h-9 w-9 hover:!bg-[unset] hover:border hover:border-solid hover:border-[#333] hover:px-[8px] hover:py-[2px] hover:rounded-[10px] text-[#333]"
      ),
      day_selected: `bg-primary text-primary-foreground hover:!bg-red-100 !bg-red-100 ${e === "single" && "rounded-[10px]"}`,
      day_today: "!border !border-solid !border-[#333] !rounded-[10px]",
      day_outside: "opacity-30",
      day_range_start: "rounded-tl-[10px] rounded-bl-[10px]",
      day_range_end: "rounded-tr-[10px] rounded-br-[10px]"
    },
    min: o,
    max: a,
    required: i,
    toDate: /* @__PURE__ */ new Date()
  };
  return /* @__PURE__ */ c.jsxs(y0, { children: [
    /* @__PURE__ */ c.jsx(b0, { asChild: !0, children: /* @__PURE__ */ c.jsxs(
      jt,
      {
        variant: "outline",
        className: I(
          "justify-start text-left font-normal text-[#000] p-1 gap-0 min-w-0 h-fit",
          r == null ? void 0 : r.buttonClassName,
          !p && "text-muted-foreground"
        ),
        "data-cy": "date-picker-button",
        children: [
          f || /* @__PURE__ */ c.jsx(
            Xb,
            {
              className: I(
                "h-4 w-4",
                r == null ? void 0 : r.iconClassName,
                (p || m) && "mr-2"
              )
            }
          ),
          e === "single" ? p && ln(p, "PPP") : (m == null ? void 0 : m.from) && (m == null ? void 0 : m.to) && `${ln(m.from, "LLL d")} - ${ln(m.to, "PPP")}`
        ]
      }
    ) }),
    /* @__PURE__ */ c.jsx(nu, { className: "w-auto p-0", children: e === "single" ? /* @__PURE__ */ c.jsx(
      ki,
      {
        mode: e,
        selected: p,
        onSelect: (w) => {
          g(w), s(w || void 0);
        },
        ...h
      }
    ) : /* @__PURE__ */ c.jsx(
      ki,
      {
        mode: e,
        selected: m,
        onSelect: (w) => {
          v(w), w != null && w.from && (w != null && w.to) && s(w || void 0);
        },
        ...h
      }
    ) })
  ] });
}, Xd = ({
  size: e = 24,
  className: t,
  ...n
}) => /* @__PURE__ */ c.jsx(
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
    className: I("animate-spin", t),
    children: /* @__PURE__ */ c.jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
  }
), Y6 = D.forwardRef(
  ({
    options: e,
    onValueChange: t,
    defaultValue: n = [],
    placeholder: r = "Select options",
    maxCount: o = 3,
    asChild: a = !1,
    className: s,
    showSelectAll: i,
    fetchOptions: l,
    useServerSideSearch: u = !0,
    ...f
  }, p) => {
    var W;
    const [g, m] = nt(n), [v, h] = nt(!1), [w, x] = nt(e), [y, b] = nt(!1), S = D.useRef(null);
    ct(() => {
      JSON.stringify(g) !== JSON.stringify(n) && m(n);
    }, [n, g]);
    const E = (A) => {
      const U = g.some(
        (G) => G.value === A.value
      ) ? g.filter((G) => G.value !== A.value) : [...g, A];
      m(U), t(U);
    }, R = () => {
      m([]), t([]);
    }, C = () => {
      h((A) => !A);
    }, M = () => {
      const A = g.slice(0, o);
      m(A), t(A);
    }, P = () => {
      g.length === e.length ? R() : (m(e), t(e));
    }, j = (A, U) => {
      let G;
      return (F) => {
        clearTimeout(G), G = setTimeout(() => A(F), U);
      };
    }, _ = D.useCallback(
      j(async (A) => {
        if (A.length !== 0) {
          if (b(!0), u && l) {
            const G = (await l(A)).filter(
              (F) => !w.some((L) => L.value === F.value)
            );
            x((F) => [...F, ...G]);
          }
          b(!1);
        }
      }, 300),
      [l, e, w, u]
    ), k = w == null ? void 0 : w.filter(
      (A, U, G) => U === (G == null ? void 0 : G.findIndex((F) => (F == null ? void 0 : F.value) === (A == null ? void 0 : A.value)))
    );
    return /* @__PURE__ */ c.jsxs(y0, { open: v, onOpenChange: h, children: [
      /* @__PURE__ */ c.jsx(b0, { asChild: !0, children: /* @__PURE__ */ c.jsx(
        jt,
        {
          ref: S,
          onClick: C,
          className: I(
            "flex w-full py-3 !h-[48px] !m-0 px-4 rounded-lg border border-gray-300 items-center justify-between bg-white hover:bg-gray-100",
            s
          ),
          "data-cy": "multi-select-trigger",
          ...f,
          children: g.length > 0 ? /* @__PURE__ */ c.jsxs("div", { className: "flex justify-between items-center w-full", children: [
            /* @__PURE__ */ c.jsxs("div", { className: "flex flex-wrap gap-2 items-center", children: [
              g.slice(0, o).map((A) => /* @__PURE__ */ c.jsxs(
                Uu,
                {
                  className: "bg-[#F0F1F4] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]",
                  "data-cy": `selected-option-${A.value}`,
                  children: [
                    A.icon && /* @__PURE__ */ c.jsx(A.icon, { className: "h-4 w-4 mr-2" }),
                    A.label,
                    /* @__PURE__ */ c.jsx(
                      Mi,
                      {
                        className: "ml-2 h-4 w-4 cursor-pointer",
                        onClick: (U) => {
                          U.stopPropagation(), E(A);
                        },
                        "data-cy": `remove-option-${A.value}`
                      }
                    )
                  ]
                },
                A.value
              )),
              g.length > o && /* @__PURE__ */ c.jsxs(
                Uu,
                {
                  className: "bg-[#d9dadc] !h-[24px] text-[14px] leading-5 text-black flex gap-1 p-1 !rounded-[3px] hover:bg-[#F0F1F0]",
                  "data-cy": "more-options-badge",
                  children: [
                    `+ ${g.length - o} more`,
                    /* @__PURE__ */ c.jsx(
                      Mi,
                      {
                        className: "ml-2 h-4 w-4 cursor-pointer",
                        onClick: (A) => {
                          A.stopPropagation(), M();
                        },
                        "data-cy": "clear-extra-options"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ c.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "6",
                viewBox: "0 0 10 6",
                fill: "none",
                "data-cy": "dropdown-arrow",
                children: /* @__PURE__ */ c.jsx(
                  "path",
                  {
                    d: "M2.89706 0.5C1.82797 0.5 1.29257 1.79257 2.04853 2.54853L4.15147 4.65147C4.6201 5.1201 5.3799 5.1201 5.84853 4.65147L7.95147 2.54853C8.70743 1.79257 8.17203 0.5 7.10294 0.5H2.89706Z",
                    fill: "black"
                  }
                )
              }
            ) })
          ] }) : /* @__PURE__ */ c.jsxs("div", { className: "flex items-center justify-between w-full mx-auto", children: [
            /* @__PURE__ */ c.jsx(
              "span",
              {
                className: "text-[#C7CBD1] !text-[14px] !leading-5 font-normal ",
                "data-cy": "placeholder-text",
                children: r
              }
            ),
            /* @__PURE__ */ c.jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "6",
                viewBox: "0 0 10 6",
                fill: "none",
                "data-cy": "dropdown-arrow",
                children: /* @__PURE__ */ c.jsx(
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
      /* @__PURE__ */ c.jsx(
        nu,
        {
          className: "p-0 rounded-lg shadow-lg border border-gray-200",
          align: "start",
          onEscapeKeyDown: () => h(!1),
          style: {
            width: ((W = S.current) == null ? void 0 : W.offsetWidth) || "auto"
          },
          "data-cy": "popover-content",
          children: /* @__PURE__ */ c.jsxs(ic, { children: [
            /* @__PURE__ */ c.jsx(
              Cm,
              {
                placeholder: "Search...",
                onValueChange: _,
                "data-cy": "search-input"
              }
            ),
            /* @__PURE__ */ c.jsxs(Sm, { className: "w-full", children: [
              !y && /* @__PURE__ */ c.jsx(Rm, { "data-cy": "no-results", children: "No results found." }),
              y ? /* @__PURE__ */ c.jsx(
                zi,
                {
                  className: "flex items-center justify-center p-2",
                  "data-cy": "loading-spinner",
                  children: /* @__PURE__ */ c.jsx(Xd, {})
                }
              ) : /* @__PURE__ */ c.jsxs(Em, { children: [
                i && /* @__PURE__ */ c.jsxs(
                  Vi,
                  {
                    onSelect: P,
                    style: { pointerEvents: "auto", opacity: 1 },
                    className: "cursor-pointer",
                    "data-cy": "select-all-option",
                    children: [
                      /* @__PURE__ */ c.jsx(
                        "div",
                        {
                          className: I(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            g.length === e.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"
                          ),
                          children: /* @__PURE__ */ c.jsx($r, { className: "h-4 w-4" })
                        }
                      ),
                      /* @__PURE__ */ c.jsx("span", { children: "(Select All)" })
                    ]
                  },
                  "all"
                ),
                y && /* @__PURE__ */ c.jsx(
                  zi,
                  {
                    className: "flex items-center justify-center p-2",
                    "data-cy": "loading-spinner",
                    children: /* @__PURE__ */ c.jsx(Xd, {})
                  }
                ),
                k.map((A) => {
                  const U = g.some(
                    (G) => G.value === A.value
                  );
                  return /* @__PURE__ */ c.jsxs(
                    Vi,
                    {
                      onSelect: () => E(A),
                      style: { pointerEvents: "auto", opacity: 1 },
                      className: "cursor-pointer flex gap-2",
                      value: A.label,
                      "data-cy": `option-${A.value}`,
                      children: [
                        /* @__PURE__ */ c.jsx(
                          Jn,
                          {
                            checked: U,
                            className: "h-4 w-4",
                            "data-cy": `checkbox-${A.value}`
                          }
                        ),
                        A.icon && /* @__PURE__ */ c.jsx(A.icon, { className: "mr-2 h-4 w-4 text-[#C7CBD1] text-[14px] leading-5 font-normal " }),
                        /* @__PURE__ */ c.jsx("span", { className: U ? "text-[#0073E6]" : "", children: A.label })
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
Y6.displayName = "MultiSelect";
export {
  n1 as Accordion,
  Df as AccordionContent,
  Mf as AccordionItem,
  Tf as AccordionTrigger,
  kC as Alert,
  $C as AlertDescription,
  Q6 as AlertDialog,
  IC as AlertDialogAction,
  AC as AlertDialogCancel,
  PC as AlertDialogContent,
  DC as AlertDialogDescription,
  MC as AlertDialogFooter,
  _C as AlertDialogHeader,
  Ep as AlertDialogOverlay,
  NC as AlertDialogPortal,
  TC as AlertDialogTitle,
  e5 as AlertDialogTrigger,
  OC as AlertTitle,
  t5 as AspectRatio,
  KC as Avatar,
  XC as AvatarFallback,
  qC as AvatarImage,
  Uu as Badge,
  QC as Breadcrumb,
  aS as BreadcrumbEllipsis,
  tS as BreadcrumbItem,
  nS as BreadcrumbLink,
  eS as BreadcrumbList,
  rS as BreadcrumbPage,
  oS as BreadcrumbSeparator,
  jt as Button,
  ki as Calendar,
  UE as Card,
  XE as CardContent,
  qE as CardDescription,
  ZE as CardFooter,
  YE as CardHeader,
  KE as CardTitle,
  IN as Carousel,
  AN as CarouselContent,
  jN as CarouselItem,
  ON as CarouselNext,
  kN as CarouselPrevious,
  Jn as Checkbox,
  o5 as Collapsible,
  s5 as CollapsibleContent,
  a5 as CollapsibleTrigger,
  ic as Command,
  c5 as CommandDialog,
  Rm as CommandEmpty,
  Em as CommandGroup,
  Cm as CommandInput,
  Vi as CommandItem,
  Sm as CommandList,
  hP as CommandSeparator,
  vP as CommandShortcut,
  d5 as ContextMenu,
  H2 as ContextMenuCheckboxItem,
  V2 as ContextMenuContent,
  p5 as ContextMenuGroup,
  B2 as ContextMenuItem,
  W2 as ContextMenuLabel,
  m5 as ContextMenuPortal,
  h5 as ContextMenuRadioGroup,
  G2 as ContextMenuRadioItem,
  U2 as ContextMenuSeparator,
  Y2 as ContextMenuShortcut,
  g5 as ContextMenuSub,
  z2 as ContextMenuSubContent,
  F2 as ContextMenuSubTrigger,
  f5 as ContextMenuTrigger,
  ck as DataTable,
  fk as DatePicker,
  uP as Dialog,
  l5 as DialogClose,
  bm as DialogContent,
  gP as DialogDescription,
  pP as DialogFooter,
  fP as DialogHeader,
  ym as DialogOverlay,
  dP as DialogPortal,
  mP as DialogTitle,
  i5 as DialogTrigger,
  bM as Drawer,
  x5 as DrawerClose,
  SM as DrawerContent,
  PM as DrawerDescription,
  EM as DrawerFooter,
  RM as DrawerHeader,
  lh as DrawerOverlay,
  CM as DrawerPortal,
  NM as DrawerTitle,
  v5 as DrawerTrigger,
  kh as DropdownMenu,
  Lh as DropdownMenuCheckboxItem,
  Gc as DropdownMenuContent,
  y5 as DropdownMenuGroup,
  ZM as DropdownMenuItem,
  Fh as DropdownMenuLabel,
  b5 as DropdownMenuPortal,
  C5 as DropdownMenuRadioGroup,
  JM as DropdownMenuRadioItem,
  zh as DropdownMenuSeparator,
  QM as DropdownMenuShortcut,
  XM as DropdownMenuSub,
  $h as DropdownMenuSubContent,
  Oh as DropdownMenuSubTrigger,
  qM as DropdownMenuTrigger,
  dk as FilterChip,
  uk as Filters,
  S5 as Form,
  va as FormControl,
  n3 as FormDescription,
  R5 as FormField,
  ga as FormItem,
  ha as FormLabel,
  r3 as FormMessage,
  P5 as HoverCard,
  p3 as HoverCardContent,
  _5 as HoverCardTrigger,
  Nl as Input,
  P3 as InputOTP,
  _3 as InputOTPGroup,
  T3 as InputOTPSeparator,
  M3 as InputOTPSlot,
  Hh as Label,
  ik as LessonCard,
  Q3 as Menubar,
  aT as MenubarCheckboxItem,
  rT as MenubarContent,
  D5 as MenubarGroup,
  oT as MenubarItem,
  iT as MenubarLabel,
  T5 as MenubarMenu,
  I5 as MenubarPortal,
  j5 as MenubarRadioGroup,
  sT as MenubarRadioItem,
  lT as MenubarSeparator,
  cT as MenubarShortcut,
  A5 as MenubarSub,
  nT as MenubarSubContent,
  tT as MenubarSubTrigger,
  eT as MenubarTrigger,
  Y6 as MultiSelect,
  _T as NavigationMenu,
  IT as NavigationMenuContent,
  AT as NavigationMenuIndicator,
  O5 as NavigationMenuItem,
  $5 as NavigationMenuLink,
  MT as NavigationMenuList,
  DT as NavigationMenuTrigger,
  l0 as NavigationMenuViewport,
  jT as Pagination,
  kT as PaginationContent,
  FT as PaginationEllipsis,
  OT as PaginationItem,
  eu as PaginationLink,
  LT as PaginationNext,
  $T as PaginationPrevious,
  y0 as Popover,
  nu as PopoverContent,
  b0 as PopoverTrigger,
  sD as Progress,
  vD as RadioGroup,
  xD as RadioGroupItem,
  H5 as ResizableHandle,
  B5 as ResizablePanel,
  V5 as ResizablePanelGroup,
  aI as ScrollArea,
  bx as ScrollBar,
  Ld as Select,
  ul as SelectContent,
  U5 as SelectGroup,
  dl as SelectItem,
  jI as SelectLabel,
  aw as SelectScrollDownButton,
  ow as SelectScrollUpButton,
  kI as SelectSeparator,
  cl as SelectTrigger,
  Fd as SelectValue,
  FI as Separator,
  Y5 as Sheet,
  q5 as SheetClose,
  BI as SheetContent,
  UI as SheetDescription,
  GI as SheetFooter,
  HI as SheetHeader,
  lw as SheetOverlay,
  zI as SheetPortal,
  WI as SheetTitle,
  K5 as SheetTrigger,
  X5 as Skeleton,
  dA as Slider,
  KA as Switch,
  Tw as Table,
  Iw as TableBody,
  XA as TableCaption,
  hl as TableCell,
  qA as TableFooter,
  Aw as TableHead,
  Dw as TableHeader,
  ya as TableRow,
  nk as Tabs,
  nj as TabsContent,
  ej as TabsList,
  tj as TabsTrigger,
  rj as Textarea,
  J5 as Toaster,
  lj as Toggle,
  cj as ToggleGroup,
  uj as ToggleGroupItem,
  sk as Tooltip,
  jC as alertVariants,
  ZC as badgeVariants,
  Mr as buttonVariants,
  TT as navigationMenuTriggerStyle,
  Q5 as sonner,
  ry as toggleVariants,
  ms as useFormField,
  lk as useToast
};
