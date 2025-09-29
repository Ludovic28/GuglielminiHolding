(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const o of u.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = n(l);
    fetch(l.href, u);
  }
})();
function hc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var es = { exports: {} },
  ol = {},
  ts = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bn = Symbol.for("react.element"),
  vc = Symbol.for("react.portal"),
  yc = Symbol.for("react.fragment"),
  gc = Symbol.for("react.strict_mode"),
  wc = Symbol.for("react.profiler"),
  Sc = Symbol.for("react.provider"),
  xc = Symbol.for("react.context"),
  kc = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.memo"),
  Pc = Symbol.for("react.lazy"),
  Ho = Symbol.iterator;
function Nc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ns = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  rs = Object.assign,
  ls = {};
function cn(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = ls), (this.updater = n || ns));
}
cn.prototype.isReactComponent = {};
cn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
cn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function us() {}
us.prototype = cn.prototype;
function Xu(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = ls), (this.updater = n || ns));
}
var Gu = (Xu.prototype = new us());
Gu.constructor = Xu;
rs(Gu, cn.prototype);
Gu.isPureReactComponent = !0;
var Qo = Array.isArray,
  os = Object.prototype.hasOwnProperty,
  Zu = { current: null },
  is = { key: !0, ref: !0, __self: !0, __source: !0 };
function ss(e, t, n) {
  var r,
    l = {},
    u = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (u = "" + t.key), t))
      os.call(t, r) && !is.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), f = 0; f < i; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in ((i = e.defaultProps), i)) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: bn, type: e, key: u, ref: o, props: l, _owner: Zu.current };
}
function _c(e, t) {
  return { $$typeof: bn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ju(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bn;
}
function jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Yo = /\/+/g;
function Pl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : t.toString(36);
}
function Er(e, t, n, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (u) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case bn:
          case vc:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Pl(o, 0) : r),
      Qo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Yo, "$&/") + "/"),
          Er(l, t, n, "", function (f) {
            return f;
          }))
        : l != null &&
          (Ju(l) &&
            (l = _c(
              l,
              n +
                (!l.key || (o && o.key === l.key) ? "" : ("" + l.key).replace(Yo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Qo(e)))
    for (var i = 0; i < e.length; i++) {
      u = e[i];
      var s = r + Pl(u, i);
      o += Er(u, t, n, s, l);
    }
  else if (((s = Nc(e)), typeof s == "function"))
    for (e = s.call(e), i = 0; !(u = e.next()).done; )
      ((u = u.value), (s = r + Pl(u, i++)), (o += Er(u, t, n, s, l)));
  else if (u === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      )
    );
  return o;
}
function or(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Er(e, r, "", "", function (u) {
      return t.call(n, u, l++);
    }),
    r
  );
}
function zc(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var fe = { current: null },
  Pr = { transition: null },
  Tc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Pr, ReactCurrentOwner: Zu };
function as() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: or,
  forEach: function (e, t, n) {
    or(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      or(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      or(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ju(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
T.Component = cn;
T.Fragment = yc;
T.Profiler = wc;
T.PureComponent = Xu;
T.StrictMode = gc;
T.Suspense = Cc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tc;
T.act = as;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = rs({}, e.props),
    l = e.key,
    u = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (o = Zu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var i = e.type.defaultProps;
    for (s in t)
      os.call(t, s) &&
        !is.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var f = 0; f < s; f++) i[f] = arguments[f + 2];
    r.children = i;
  }
  return { $$typeof: bn, type: e.type, key: l, ref: u, props: r, _owner: o };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: xc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Sc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ss;
T.createFactory = function (e) {
  var t = ss.bind(null, e);
  return ((t.type = e), t);
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: kc, render: e };
};
T.isValidElement = Ju;
T.lazy = function (e) {
  return { $$typeof: Pc, _payload: { _status: -1, _result: e }, _init: zc };
};
T.memo = function (e, t) {
  return { $$typeof: Ec, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Pr.transition;
  Pr.transition = {};
  try {
    e();
  } finally {
    Pr.transition = t;
  }
};
T.unstable_act = as;
T.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
T.useContext = function (e) {
  return fe.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
T.useId = function () {
  return fe.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return fe.current.useRef(e);
};
T.useState = function (e) {
  return fe.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return fe.current.useTransition();
};
T.version = "18.3.1";
ts.exports = T;
var Se = ts.exports;
const Lc = hc(Se);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rc = Se,
  Mc = Symbol.for("react.element"),
  Dc = Symbol.for("react.fragment"),
  Ic = Object.prototype.hasOwnProperty,
  Oc = Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function cs(e, t, n) {
  var r,
    l = {},
    u = null,
    o = null;
  (n !== void 0 && (u = "" + n),
    t.key !== void 0 && (u = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) Ic.call(t, r) && !Fc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Mc, type: e, key: u, ref: o, props: l, _owner: Oc.current };
}
ol.Fragment = Dc;
ol.jsx = cs;
ol.jsxs = cs;
es.exports = ol;
var m = es.exports,
  ql = {},
  fs = { exports: {} },
  Ee = {},
  ds = { exports: {} },
  ps = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, j) {
    var z = E.length;
    E.push(j);
    e: for (; 0 < z; ) {
      var X = (z - 1) >>> 1,
        b = E[X];
      if (0 < l(b, j)) ((E[X] = j), (E[z] = b), (z = X));
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var j = E[0],
      z = E.pop();
    if (z !== j) {
      E[0] = z;
      e: for (var X = 0, b = E.length, lr = b >>> 1; X < lr; ) {
        var xt = 2 * (X + 1) - 1,
          El = E[xt],
          kt = xt + 1,
          ur = E[kt];
        if (0 > l(El, z))
          kt < b && 0 > l(ur, El)
            ? ((E[X] = ur), (E[kt] = z), (X = kt))
            : ((E[X] = El), (E[xt] = z), (X = xt));
        else if (kt < b && 0 > l(ur, z)) ((E[X] = ur), (E[kt] = z), (X = kt));
        else break e;
      }
    }
    return j;
  }
  function l(E, j) {
    var z = E.sortIndex - j.sortIndex;
    return z !== 0 ? z : E.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var o = Date,
      i = o.now();
    e.unstable_now = function () {
      return o.now() - i;
    };
  }
  var s = [],
    f = [],
    v = 1,
    h = null,
    p = 3,
    w = !1,
    S = !1,
    x = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    a = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(E) {
    for (var j = n(f); j !== null; ) {
      if (j.callback === null) r(f);
      else if (j.startTime <= E) (r(f), (j.sortIndex = j.expirationTime), t(s, j));
      else break;
      j = n(f);
    }
  }
  function y(E) {
    if (((x = !1), d(E), !S))
      if (n(s) !== null) ((S = !0), kl(C));
      else {
        var j = n(f);
        j !== null && Cl(y, j.startTime - E);
      }
  }
  function C(E, j) {
    ((S = !1), x && ((x = !1), a(_), (_ = -1)), (w = !0));
    var z = p;
    try {
      for (d(j), h = n(s); h !== null && (!(h.expirationTime > j) || (E && !Re())); ) {
        var X = h.callback;
        if (typeof X == "function") {
          ((h.callback = null), (p = h.priorityLevel));
          var b = X(h.expirationTime <= j);
          ((j = e.unstable_now()),
            typeof b == "function" ? (h.callback = b) : h === n(s) && r(s),
            d(j));
        } else r(s);
        h = n(s);
      }
      if (h !== null) var lr = !0;
      else {
        var xt = n(f);
        (xt !== null && Cl(y, xt.startTime - j), (lr = !1));
      }
      return lr;
    } finally {
      ((h = null), (p = z), (w = !1));
    }
  }
  var P = !1,
    N = null,
    _ = -1,
    K = 5,
    L = -1;
  function Re() {
    return !(e.unstable_now() - L < K);
  }
  function pn() {
    if (N !== null) {
      var E = e.unstable_now();
      L = E;
      var j = !0;
      try {
        j = N(!0, E);
      } finally {
        j ? mn() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var mn;
  if (typeof c == "function")
    mn = function () {
      c(pn);
    };
  else if (typeof MessageChannel < "u") {
    var Wo = new MessageChannel(),
      mc = Wo.port2;
    ((Wo.port1.onmessage = pn),
      (mn = function () {
        mc.postMessage(null);
      }));
  } else
    mn = function () {
      F(pn, 0);
    };
  function kl(E) {
    ((N = E), P || ((P = !0), mn()));
  }
  function Cl(E, j) {
    _ = F(function () {
      E(e.unstable_now());
    }, j);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), kl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (K = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (E) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = p;
      }
      var z = p;
      p = j;
      try {
        return E();
      } finally {
        p = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, j) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = p;
      p = E;
      try {
        return j();
      } finally {
        p = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, j, z) {
      var X = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? X + z : X))
          : (z = X),
        E)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = z + b),
        (E = {
          id: v++,
          callback: j,
          priorityLevel: E,
          startTime: z,
          expirationTime: b,
          sortIndex: -1,
        }),
        z > X
          ? ((E.sortIndex = z),
            t(f, E),
            n(s) === null && E === n(f) && (x ? (a(_), (_ = -1)) : (x = !0), Cl(y, z - X)))
          : ((E.sortIndex = b), t(s, E), S || w || ((S = !0), kl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = Re),
    (e.unstable_wrapCallback = function (E) {
      var j = p;
      return function () {
        var z = p;
        p = j;
        try {
          return E.apply(this, arguments);
        } finally {
          p = z;
        }
      };
    }));
})(ps);
ds.exports = ps;
var Ac = ds.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uc = Se,
  Ce = Ac;
function g(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ms = new Set(),
  On = {};
function It(e, t) {
  (nn(e, t), nn(e + "Capture", t));
}
function nn(e, t) {
  for (On[e] = t, e = 0; e < t.length; e++) ms.add(t[e]);
}
var Ze = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  bl = Object.prototype.hasOwnProperty,
  $c =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ko = {},
  Xo = {};
function Vc(e) {
  return bl.call(Xo, e) ? !0 : bl.call(Ko, e) ? !1 : $c.test(e) ? (Xo[e] = !0) : ((Ko[e] = !0), !1);
}
function Bc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Wc(e, t, n, r) {
  if (t === null || typeof t > "u" || Bc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, u, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = o));
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  le[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var qu = /[\-:]([a-z])/g;
function bu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qu, bu);
    le[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(qu, bu);
    le[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(qu, bu);
  le[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eo(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Wc(t, n, l, r) && (n = null),
    r || l === null
      ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ir = Symbol.for("react.element"),
  At = Symbol.for("react.portal"),
  Ut = Symbol.for("react.fragment"),
  to = Symbol.for("react.strict_mode"),
  eu = Symbol.for("react.profiler"),
  hs = Symbol.for("react.provider"),
  vs = Symbol.for("react.context"),
  no = Symbol.for("react.forward_ref"),
  tu = Symbol.for("react.suspense"),
  nu = Symbol.for("react.suspense_list"),
  ro = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  ys = Symbol.for("react.offscreen"),
  Go = Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Go && e[Go]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Nl;
function Cn(e) {
  if (Nl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Nl = (t && t[1]) || "";
    }
  return (
    `
` +
    Nl +
    e
  );
}
var _l = !1;
function jl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          u = r.stack.split(`
`),
          o = l.length - 1,
          i = u.length - 1;
        1 <= o && 0 <= i && l[o] !== u[i];

      )
        i--;
      for (; 1 <= o && 0 <= i; o--, i--)
        if (l[o] !== u[i]) {
          if (o !== 1 || i !== 1)
            do
              if ((o--, i--, 0 > i || l[o] !== u[i])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= i);
          break;
        }
    }
  } finally {
    ((_l = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function Hc(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = jl(e.type, !1)), e);
    case 11:
      return ((e = jl(e.type.render, !1)), e);
    case 1:
      return ((e = jl(e.type, !0)), e);
    default:
      return "";
  }
}
function ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case At:
      return "Portal";
    case eu:
      return "Profiler";
    case to:
      return "StrictMode";
    case tu:
      return "Suspense";
    case nu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vs:
        return (e.displayName || "Context") + ".Consumer";
      case hs:
        return (e._context.displayName || "Context") + ".Provider";
      case no:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ro:
        return ((t = e.displayName || null), t !== null ? t : ru(e.type) || "Memo");
      case nt:
        ((t = e._payload), (e = e._init));
        try {
          return ru(e(t));
        } catch {}
    }
  return null;
}
function Qc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ru(t);
    case 8:
      return t === to ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Yc(e) {
  var t = gs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      u = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          ((r = "" + o), u.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function sr(e) {
  e._valueTracker || (e._valueTracker = Yc(e));
}
function ws(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Or(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function lu(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Zo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    }));
}
function Ss(e, t) {
  ((t = t.checked), t != null && eo(e, "checked", t, !1));
}
function uu(e, t) {
  Ss(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ou(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ou(e, t.type, vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function Jo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ou(e, t, n) {
  (t !== "number" || Or(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var En = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function iu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function qo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(g(92));
      if (En(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: vt(n) };
}
function xs(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function bo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ks(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function su(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ks(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var ar,
  Cs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        ar = ar || document.createElement("div"),
          ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _n = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(_n).forEach(function (e) {
  Kc.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_n[t] = _n[e]));
  });
});
function Es(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_n.hasOwnProperty(e) && _n[e])
      ? ("" + t).trim()
      : t + "px";
}
function Ps(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Es(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Xc = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function au(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function cu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var fu = null;
function lo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var du = null,
  Jt = null,
  qt = null;
function ei(e) {
  if ((e = nr(e))) {
    if (typeof du != "function") throw Error(g(280));
    var t = e.stateNode;
    t && ((t = fl(t)), du(e.stateNode, e.type, t));
  }
}
function Ns(e) {
  Jt ? (qt ? qt.push(e) : (qt = [e])) : (Jt = e);
}
function _s() {
  if (Jt) {
    var e = Jt,
      t = qt;
    if (((qt = Jt = null), ei(e), t)) for (e = 0; e < t.length; e++) ei(t[e]);
  }
}
function js(e, t) {
  return e(t);
}
function zs() {}
var zl = !1;
function Ts(e, t, n) {
  if (zl) return e(t, n);
  zl = !0;
  try {
    return js(e, t, n);
  } finally {
    ((zl = !1), (Jt !== null || qt !== null) && (zs(), _s()));
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var pu = !1;
if (Ze)
  try {
    var vn = {};
    (Object.defineProperty(vn, "passive", {
      get: function () {
        pu = !0;
      },
    }),
      window.addEventListener("test", vn, vn),
      window.removeEventListener("test", vn, vn));
  } catch {
    pu = !1;
  }
function Gc(e, t, n, r, l, u, o, i, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var jn = !1,
  Fr = null,
  Ar = !1,
  mu = null,
  Zc = {
    onError: function (e) {
      ((jn = !0), (Fr = e));
    },
  };
function Jc(e, t, n, r, l, u, o, i, s) {
  ((jn = !1), (Fr = null), Gc.apply(Zc, arguments));
}
function qc(e, t, n, r, l, u, o, i, s) {
  if ((Jc.apply(this, arguments), jn)) {
    if (jn) {
      var f = Fr;
      ((jn = !1), (Fr = null));
    } else throw Error(g(198));
    Ar || ((Ar = !0), (mu = f));
  }
}
function Ot(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ls(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function ti(e) {
  if (Ot(e) !== e) throw Error(g(188));
}
function bc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ot(e)), t === null)) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var u = l.alternate;
    if (u === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === n) return (ti(l), e);
        if (u === r) return (ti(l), t);
        u = u.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) ((n = l), (r = u));
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          ((o = !0), (n = l), (r = u));
          break;
        }
        if (i === r) {
          ((o = !0), (r = l), (n = u));
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === n) {
            ((o = !0), (n = u), (r = l));
            break;
          }
          if (i === r) {
            ((o = !0), (r = u), (n = l));
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Rs(e) {
  return ((e = bc(e)), e !== null ? Ms(e) : null);
}
function Ms(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ms(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ds = Ce.unstable_scheduleCallback,
  ni = Ce.unstable_cancelCallback,
  ef = Ce.unstable_shouldYield,
  tf = Ce.unstable_requestPaint,
  G = Ce.unstable_now,
  nf = Ce.unstable_getCurrentPriorityLevel,
  uo = Ce.unstable_ImmediatePriority,
  Is = Ce.unstable_UserBlockingPriority,
  Ur = Ce.unstable_NormalPriority,
  rf = Ce.unstable_LowPriority,
  Os = Ce.unstable_IdlePriority,
  il = null,
  We = null;
function lf(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(il, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Fe = Math.clz32 ? Math.clz32 : sf,
  uf = Math.log,
  of = Math.LN2;
function sf(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((uf(e) / of) | 0)) | 0);
}
var cr = 64,
  fr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function $r(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    u = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? (r = Pn(i)) : ((u &= o), u !== 0 && (r = Pn(u)));
  } else ((o = n & ~l), o !== 0 ? (r = Pn(o)) : u !== 0 && (r = Pn(u)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Fe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function af(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function cf(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes;
    0 < u;

  ) {
    var o = 31 - Fe(u),
      i = 1 << o,
      s = l[o];
    (s === -1 ? (!(i & n) || i & r) && (l[o] = af(i, t)) : s <= t && (e.expiredLanes |= i),
      (u &= ~i));
  }
}
function hu(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function Fs() {
  var e = cr;
  return ((cr <<= 1), !(cr & 4194240) && (cr = 64), e);
}
function Tl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function er(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Fe(t)),
    (e[t] = n));
}
function ff(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n),
      u = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~u));
  }
}
function oo(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var M = 0;
function As(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var Us,
  io,
  $s,
  Vs,
  Bs,
  vu = !1,
  dr = [],
  st = null,
  at = null,
  ct = null,
  Un = new Map(),
  $n = new Map(),
  lt = [],
  df =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ri(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      st = null;
      break;
    case "dragenter":
    case "dragleave":
      at = null;
      break;
    case "mouseover":
    case "mouseout":
      ct = null;
      break;
    case "pointerover":
    case "pointerout":
      Un.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $n.delete(t.pointerId);
  }
}
function yn(e, t, n, r, l, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: u,
        targetContainers: [l],
      }),
      t !== null && ((t = nr(t)), t !== null && io(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function pf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((st = yn(st, e, t, n, r, l)), !0);
    case "dragenter":
      return ((at = yn(at, e, t, n, r, l)), !0);
    case "mouseover":
      return ((ct = yn(ct, e, t, n, r, l)), !0);
    case "pointerover":
      var u = l.pointerId;
      return (Un.set(u, yn(Un.get(u) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return ((u = l.pointerId), $n.set(u, yn($n.get(u) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function Ws(e) {
  var t = Pt(e.target);
  if (t !== null) {
    var n = Ot(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ls(n)), t !== null)) {
          ((e.blockedOn = t),
            Bs(e.priority, function () {
              $s(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Nr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((fu = r), n.target.dispatchEvent(r), (fu = null));
    } else return ((t = nr(n)), t !== null && io(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function li(e, t, n) {
  Nr(e) && n.delete(t);
}
function mf() {
  ((vu = !1),
    st !== null && Nr(st) && (st = null),
    at !== null && Nr(at) && (at = null),
    ct !== null && Nr(ct) && (ct = null),
    Un.forEach(li),
    $n.forEach(li));
}
function gn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vu || ((vu = !0), Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, mf)));
}
function Vn(e) {
  function t(l) {
    return gn(l, e);
  }
  if (0 < dr.length) {
    gn(dr[0], e);
    for (var n = 1; n < dr.length; n++) {
      var r = dr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    st !== null && gn(st, e),
      at !== null && gn(at, e),
      ct !== null && gn(ct, e),
      Un.forEach(t),
      $n.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    ((r = lt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    (Ws(n), n.blockedOn === null && lt.shift());
}
var bt = et.ReactCurrentBatchConfig,
  Vr = !0;
function hf(e, t, n, r) {
  var l = M,
    u = bt.transition;
  bt.transition = null;
  try {
    ((M = 1), so(e, t, n, r));
  } finally {
    ((M = l), (bt.transition = u));
  }
}
function vf(e, t, n, r) {
  var l = M,
    u = bt.transition;
  bt.transition = null;
  try {
    ((M = 4), so(e, t, n, r));
  } finally {
    ((M = l), (bt.transition = u));
  }
}
function so(e, t, n, r) {
  if (Vr) {
    var l = yu(e, t, n, r);
    if (l === null) ($l(e, t, r, Br, n), ri(e, r));
    else if (pf(l, e, t, n, r)) r.stopPropagation();
    else if ((ri(e, r), t & 4 && -1 < df.indexOf(e))) {
      for (; l !== null; ) {
        var u = nr(l);
        if ((u !== null && Us(u), (u = yu(e, t, n, r)), u === null && $l(e, t, r, Br, n), u === l))
          break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var Br = null;
function yu(e, t, n, r) {
  if (((Br = null), (e = lo(r)), (e = Pt(e)), e !== null))
    if (((t = Ot(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ls(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Br = e), null);
}
function Hs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (nf()) {
        case uo:
          return 1;
        case Is:
          return 4;
        case Ur:
        case rf:
          return 16;
        case Os:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ot = null,
  ao = null,
  _r = null;
function Qs() {
  if (_r) return _r;
  var e,
    t = ao,
    n = t.length,
    r,
    l = "value" in ot ? ot.value : ot.textContent,
    u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[u - r]; r++);
  return (_r = l.slice(e, 1 < r ? 1 - r : void 0));
}
function jr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pr() {
  return !0;
}
function ui() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, u, o) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = o),
      (this.currentTarget = null));
    for (var i in e) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(u) : u[i]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? pr
        : ui),
      (this.isPropagationStopped = ui),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pr));
      },
      persist: function () {},
      isPersistent: pr,
    }),
    t
  );
}
var fn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  co = Pe(fn),
  tr = Q({}, fn, { view: 0, detail: 0 }),
  yf = Pe(tr),
  Ll,
  Rl,
  wn,
  sl = Q({}, tr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fo,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wn &&
            (wn && e.type === "mousemove"
              ? ((Ll = e.screenX - wn.screenX), (Rl = e.screenY - wn.screenY))
              : (Rl = Ll = 0),
            (wn = e)),
          Ll);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Rl;
    },
  }),
  oi = Pe(sl),
  gf = Q({}, sl, { dataTransfer: 0 }),
  wf = Pe(gf),
  Sf = Q({}, tr, { relatedTarget: 0 }),
  Ml = Pe(Sf),
  xf = Q({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  kf = Pe(xf),
  Cf = Q({}, fn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ef = Pe(Cf),
  Pf = Q({}, fn, { data: 0 }),
  ii = Pe(Pf),
  Nf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  _f = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  jf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function zf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jf[e]) ? !!t[e] : !1;
}
function fo() {
  return zf;
}
var Tf = Q({}, tr, {
    key: function (e) {
      if (e.key) {
        var t = Nf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? _f[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fo,
    charCode: function (e) {
      return e.type === "keypress" ? jr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  Lf = Pe(Tf),
  Rf = Q({}, sl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  si = Pe(Rf),
  Mf = Q({}, tr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fo,
  }),
  Df = Pe(Mf),
  If = Q({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Of = Pe(If),
  Ff = Q({}, sl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Af = Pe(Ff),
  Uf = [9, 13, 27, 32],
  po = Ze && "CompositionEvent" in window,
  zn = null;
Ze && "documentMode" in document && (zn = document.documentMode);
var $f = Ze && "TextEvent" in window && !zn,
  Ys = Ze && (!po || (zn && 8 < zn && 11 >= zn)),
  ai = " ",
  ci = !1;
function Ks(e, t) {
  switch (e) {
    case "keyup":
      return Uf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Xs(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var $t = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Xs(t);
    case "keypress":
      return t.which !== 32 ? null : ((ci = !0), ai);
    case "textInput":
      return ((e = t.data), e === ai && ci ? null : e);
    default:
      return null;
  }
}
function Bf(e, t) {
  if ($t)
    return e === "compositionend" || (!po && Ks(e, t))
      ? ((e = Qs()), (_r = ao = ot = null), ($t = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wf[e.type] : t === "textarea";
}
function Gs(e, t, n, r) {
  (Ns(r),
    (t = Wr(t, "onChange")),
    0 < t.length &&
      ((n = new co("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
}
var Tn = null,
  Bn = null;
function Hf(e) {
  oa(e, 0);
}
function al(e) {
  var t = Wt(e);
  if (ws(t)) return e;
}
function Qf(e, t) {
  if (e === "change") return t;
}
var Zs = !1;
if (Ze) {
  var Dl;
  if (Ze) {
    var Il = "oninput" in document;
    if (!Il) {
      var di = document.createElement("div");
      (di.setAttribute("oninput", "return;"), (Il = typeof di.oninput == "function"));
    }
    Dl = Il;
  } else Dl = !1;
  Zs = Dl && (!document.documentMode || 9 < document.documentMode);
}
function pi() {
  Tn && (Tn.detachEvent("onpropertychange", Js), (Bn = Tn = null));
}
function Js(e) {
  if (e.propertyName === "value" && al(Bn)) {
    var t = [];
    (Gs(t, Bn, e, lo(e)), Ts(Hf, t));
  }
}
function Yf(e, t, n) {
  e === "focusin"
    ? (pi(), (Tn = t), (Bn = n), Tn.attachEvent("onpropertychange", Js))
    : e === "focusout" && pi();
}
function Kf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return al(Bn);
}
function Xf(e, t) {
  if (e === "click") return al(t);
}
function Gf(e, t) {
  if (e === "input" || e === "change") return al(t);
}
function Zf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : Zf;
function Wn(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!bl.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function mi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function hi(e, t) {
  var n = mi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = mi(n);
  }
}
function qs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? qs(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function bs() {
  for (var e = window, t = Or(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Or(e.document);
  }
  return t;
}
function mo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jf(e) {
  var t = bs(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qs(n.ownerDocument.documentElement, n)) {
    if (r !== null && mo(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          u = Math.min(r.start, l);
        ((r = r.end === void 0 ? u : Math.min(r.end, l)),
          !e.extend && u > r && ((l = r), (r = u), (u = l)),
          (l = hi(n, u)));
        var o = hi(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          u > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var qf = Ze && "documentMode" in document && 11 >= document.documentMode,
  Vt = null,
  gu = null,
  Ln = null,
  wu = !1;
function vi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wu ||
    Vt == null ||
    Vt !== Or(r) ||
    ((r = Vt),
    "selectionStart" in r && mo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ln && Wn(Ln, r)) ||
      ((Ln = r),
      (r = Wr(gu, "onSelect")),
      0 < r.length &&
        ((t = new co("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vt))));
}
function mr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bt = {
    animationend: mr("Animation", "AnimationEnd"),
    animationiteration: mr("Animation", "AnimationIteration"),
    animationstart: mr("Animation", "AnimationStart"),
    transitionend: mr("Transition", "TransitionEnd"),
  },
  Ol = {},
  ea = {};
Ze &&
  ((ea = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function cl(e) {
  if (Ol[e]) return Ol[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ea) return (Ol[e] = t[n]);
  return e;
}
var ta = cl("animationend"),
  na = cl("animationiteration"),
  ra = cl("animationstart"),
  la = cl("transitionend"),
  ua = new Map(),
  yi =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function gt(e, t) {
  (ua.set(e, t), It(t, [e]));
}
for (var Fl = 0; Fl < yi.length; Fl++) {
  var Al = yi[Fl],
    bf = Al.toLowerCase(),
    ed = Al[0].toUpperCase() + Al.slice(1);
  gt(bf, "on" + ed);
}
gt(ta, "onAnimationEnd");
gt(na, "onAnimationIteration");
gt(ra, "onAnimationStart");
gt("dblclick", "onDoubleClick");
gt("focusin", "onFocus");
gt("focusout", "onBlur");
gt(la, "onTransitionEnd");
nn("onMouseEnter", ["mouseout", "mouseover"]);
nn("onMouseLeave", ["mouseout", "mouseover"]);
nn("onPointerEnter", ["pointerout", "pointerover"]);
nn("onPointerLeave", ["pointerout", "pointerover"]);
It("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
It(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
It("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
It("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
It("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  td = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function gi(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), qc(r, t, void 0, e), (e.currentTarget = null));
}
function oa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var i = r[o],
            s = i.instance,
            f = i.currentTarget;
          if (((i = i.listener), s !== u && l.isPropagationStopped())) break e;
          (gi(l, i, f), (u = s));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((i = r[o]),
            (s = i.instance),
            (f = i.currentTarget),
            (i = i.listener),
            s !== u && l.isPropagationStopped())
          )
            break e;
          (gi(l, i, f), (u = s));
        }
    }
  }
  if (Ar) throw ((e = mu), (Ar = !1), (mu = null), e);
}
function U(e, t) {
  var n = t[Eu];
  n === void 0 && (n = t[Eu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ia(t, e, 2, !1), n.add(r));
}
function Ul(e, t, n) {
  var r = 0;
  (t && (r |= 4), ia(n, e, r, t));
}
var hr = "_reactListening" + Math.random().toString(36).slice(2);
function Hn(e) {
  if (!e[hr]) {
    ((e[hr] = !0),
      ms.forEach(function (n) {
        n !== "selectionchange" && (td.has(n) || Ul(n, !1, e), Ul(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hr] || ((t[hr] = !0), Ul("selectionchange", !1, t));
  }
}
function ia(e, t, n, r) {
  switch (Hs(t)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = so;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !pu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function $l(e, t, n, r, l) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var i = r.stateNode.containerInfo;
        if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo), s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; i !== null; ) {
          if (((o = Pt(i)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = u = o;
            continue e;
          }
          i = i.parentNode;
        }
      }
      r = r.return;
    }
  Ts(function () {
    var f = u,
      v = lo(n),
      h = [];
    e: {
      var p = ua.get(e);
      if (p !== void 0) {
        var w = co,
          S = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Lf;
            break;
          case "focusin":
            ((S = "focus"), (w = Ml));
            break;
          case "focusout":
            ((S = "blur"), (w = Ml));
            break;
          case "beforeblur":
          case "afterblur":
            w = Ml;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = oi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Df;
            break;
          case ta:
          case na:
          case ra:
            w = kf;
            break;
          case la:
            w = Of;
            break;
          case "scroll":
            w = yf;
            break;
          case "wheel":
            w = Af;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = Ef;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = si;
        }
        var x = (t & 4) !== 0,
          F = !x && e === "scroll",
          a = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var y = d.stateNode;
          if (
            (d.tag === 5 &&
              y !== null &&
              ((d = y), a !== null && ((y = An(c, a)), y != null && x.push(Qn(c, y, d)))),
            F)
          )
            break;
          c = c.return;
        }
        0 < x.length && ((p = new w(p, S, null, n, v)), h.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          p && n !== fu && (S = n.relatedTarget || n.fromElement) && (Pt(S) || S[Je]))
        )
          break e;
        if (
          (w || p) &&
          ((p =
            v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window),
          w
            ? ((S = n.relatedTarget || n.toElement),
              (w = f),
              (S = S ? Pt(S) : null),
              S !== null && ((F = Ot(S)), S !== F || (S.tag !== 5 && S.tag !== 6)) && (S = null))
            : ((w = null), (S = f)),
          w !== S)
        ) {
          if (
            ((x = oi),
            (y = "onMouseLeave"),
            (a = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = si), (y = "onPointerLeave"), (a = "onPointerEnter"), (c = "pointer")),
            (F = w == null ? p : Wt(w)),
            (d = S == null ? p : Wt(S)),
            (p = new x(y, c + "leave", w, n, v)),
            (p.target = F),
            (p.relatedTarget = d),
            (y = null),
            Pt(v) === f &&
              ((x = new x(a, c + "enter", S, n, v)),
              (x.target = d),
              (x.relatedTarget = F),
              (y = x)),
            (F = y),
            w && S)
          )
            t: {
              for (x = w, a = S, c = 0, d = x; d; d = Ft(d)) c++;
              for (d = 0, y = a; y; y = Ft(y)) d++;
              for (; 0 < c - d; ) ((x = Ft(x)), c--);
              for (; 0 < d - c; ) ((a = Ft(a)), d--);
              for (; c--; ) {
                if (x === a || (a !== null && x === a.alternate)) break t;
                ((x = Ft(x)), (a = Ft(a)));
              }
              x = null;
            }
          else x = null;
          (w !== null && wi(h, p, w, x, !1), S !== null && F !== null && wi(h, F, S, x, !0));
        }
      }
      e: {
        if (
          ((p = f ? Wt(f) : window),
          (w = p.nodeName && p.nodeName.toLowerCase()),
          w === "select" || (w === "input" && p.type === "file"))
        )
          var C = Qf;
        else if (fi(p))
          if (Zs) C = Gf;
          else {
            C = Kf;
            var P = Yf;
          }
        else
          (w = p.nodeName) &&
            w.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = Xf);
        if (C && (C = C(e, f))) {
          Gs(h, C, n, v);
          break e;
        }
        (P && P(e, p, f),
          e === "focusout" &&
            (P = p._wrapperState) &&
            P.controlled &&
            p.type === "number" &&
            ou(p, "number", p.value));
      }
      switch (((P = f ? Wt(f) : window), e)) {
        case "focusin":
          (fi(P) || P.contentEditable === "true") && ((Vt = P), (gu = f), (Ln = null));
          break;
        case "focusout":
          Ln = gu = Vt = null;
          break;
        case "mousedown":
          wu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((wu = !1), vi(h, n, v));
          break;
        case "selectionchange":
          if (qf) break;
        case "keydown":
        case "keyup":
          vi(h, n, v);
      }
      var N;
      if (po)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        $t
          ? Ks(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      (_ &&
        (Ys &&
          n.locale !== "ko" &&
          ($t || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && $t && (N = Qs())
            : ((ot = v), (ao = "value" in ot ? ot.value : ot.textContent), ($t = !0))),
        (P = Wr(f, _)),
        0 < P.length &&
          ((_ = new ii(_, e, null, n, v)),
          h.push({ event: _, listeners: P }),
          N ? (_.data = N) : ((N = Xs(n)), N !== null && (_.data = N)))),
        (N = $f ? Vf(e, n) : Bf(e, n)) &&
          ((f = Wr(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new ii("onBeforeInput", "beforeinput", null, n, v)),
            h.push({ event: v, listeners: f }),
            (v.data = N))));
    }
    oa(h, t);
  });
}
function Qn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      u = l.stateNode;
    (l.tag === 5 &&
      u !== null &&
      ((l = u),
      (u = An(e, n)),
      u != null && r.unshift(Qn(e, u, l)),
      (u = An(e, t)),
      u != null && r.push(Qn(e, u, l))),
      (e = e.return));
  }
  return r;
}
function Ft(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wi(e, t, n, r, l) {
  for (var u = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n,
      s = i.alternate,
      f = i.stateNode;
    if (s !== null && s === r) break;
    (i.tag === 5 &&
      f !== null &&
      ((i = f),
      l
        ? ((s = An(n, u)), s != null && o.unshift(Qn(n, s, i)))
        : l || ((s = An(n, u)), s != null && o.push(Qn(n, s, i)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var nd = /\r\n?/g,
  rd = /\u0000|\uFFFD/g;
function Si(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      nd,
      `
`
    )
    .replace(rd, "");
}
function vr(e, t, n) {
  if (((t = Si(t)), Si(e) !== t && n)) throw Error(g(425));
}
function Hr() {}
var Su = null,
  xu = null;
function ku(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Cu = typeof setTimeout == "function" ? setTimeout : void 0,
  ld = typeof clearTimeout == "function" ? clearTimeout : void 0,
  xi = typeof Promise == "function" ? Promise : void 0,
  ud =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof xi < "u"
        ? function (e) {
            return xi.resolve(null).then(e).catch(od);
          }
        : Cu;
function od(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Vn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Vn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ki(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var dn = Math.random().toString(36).slice(2),
  Be = "__reactFiber$" + dn,
  Yn = "__reactProps$" + dn,
  Je = "__reactContainer$" + dn,
  Eu = "__reactEvents$" + dn,
  id = "__reactListeners$" + dn,
  sd = "__reactHandles$" + dn;
function Pt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Je] || n[Be])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = ki(e); e !== null; ) {
          if ((n = e[Be])) return n;
          e = ki(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function nr(e) {
  return (
    (e = e[Be] || e[Je]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function fl(e) {
  return e[Yn] || null;
}
var Pu = [],
  Ht = -1;
function wt(e) {
  return { current: e };
}
function $(e) {
  0 > Ht || ((e.current = Pu[Ht]), (Pu[Ht] = null), Ht--);
}
function A(e, t) {
  (Ht++, (Pu[Ht] = e.current), (e.current = t));
}
var yt = {},
  se = wt(yt),
  he = wt(!1),
  Tt = yt;
function rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    u;
  for (u in n) l[u] = t[u];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ve(e) {
  return ((e = e.childContextTypes), e != null);
}
function Qr() {
  ($(he), $(se));
}
function Ci(e, t, n) {
  if (se.current !== yt) throw Error(g(168));
  (A(se, t), A(he, n));
}
function sa(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Qc(e) || "Unknown", l));
  return Q({}, n, r);
}
function Yr(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yt),
    (Tt = se.current),
    A(se, e),
    A(he, he.current),
    !0
  );
}
function Ei(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  (n
    ? ((e = sa(e, t, Tt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(he),
      $(se),
      A(se, e))
    : $(he),
    A(he, n));
}
var Ye = null,
  dl = !1,
  Bl = !1;
function aa(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function ad(e) {
  ((dl = !0), aa(e));
}
function St() {
  if (!Bl && Ye !== null) {
    Bl = !0;
    var e = 0,
      t = M;
    try {
      var n = Ye;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ye = null), (dl = !1));
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Ds(uo, St), l);
    } finally {
      ((M = t), (Bl = !1));
    }
  }
  return null;
}
var Qt = [],
  Yt = 0,
  Kr = null,
  Xr = 0,
  Ne = [],
  _e = 0,
  Lt = null,
  Ke = 1,
  Xe = "";
function Ct(e, t) {
  ((Qt[Yt++] = Xr), (Qt[Yt++] = Kr), (Kr = e), (Xr = t));
}
function ca(e, t, n) {
  ((Ne[_e++] = Ke), (Ne[_e++] = Xe), (Ne[_e++] = Lt), (Lt = e));
  var r = Ke;
  e = Xe;
  var l = 32 - Fe(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var u = 32 - Fe(t) + l;
  if (30 < u) {
    var o = l - (l % 5);
    ((u = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ke = (1 << (32 - Fe(t) + l)) | (n << l) | r),
      (Xe = u + e));
  } else ((Ke = (1 << u) | (n << l) | r), (Xe = e));
}
function ho(e) {
  e.return !== null && (Ct(e, 1), ca(e, 1, 0));
}
function vo(e) {
  for (; e === Kr; ) ((Kr = Qt[--Yt]), (Qt[Yt] = null), (Xr = Qt[--Yt]), (Qt[Yt] = null));
  for (; e === Lt; )
    ((Lt = Ne[--_e]),
      (Ne[_e] = null),
      (Xe = Ne[--_e]),
      (Ne[_e] = null),
      (Ke = Ne[--_e]),
      (Ne[_e] = null));
}
var ke = null,
  xe = null,
  B = !1,
  Oe = null;
function fa(e, t) {
  var n = je(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Pi(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (xe = ft(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ke = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Lt !== null ? { id: Ke, overflow: Xe } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ke = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Nu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function _u(e) {
  if (B) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Pi(e, t)) {
        if (Nu(e)) throw Error(g(418));
        t = ft(n.nextSibling);
        var r = ke;
        t && Pi(e, t) ? fa(r, n) : ((e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e));
      }
    } else {
      if (Nu(e)) throw Error(g(418));
      ((e.flags = (e.flags & -4097) | 2), (B = !1), (ke = e));
    }
  }
}
function Ni(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ke = e;
}
function yr(e) {
  if (e !== ke) return !1;
  if (!B) return (Ni(e), (B = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Nu(e)) throw (da(), Error(g(418)));
    for (; t; ) (fa(e, t), (t = ft(t.nextSibling)));
  }
  if ((Ni(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = ke ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function da() {
  for (var e = xe; e; ) e = ft(e.nextSibling);
}
function ln() {
  ((xe = ke = null), (B = !1));
}
function yo(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
var cd = et.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r,
        u = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u
        ? t.ref
        : ((t = function (o) {
            var i = l.refs;
            o === null ? delete i[u] : (i[u] = o);
          }),
          (t._stringRef = u),
          t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function gr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    )
  );
}
function _i(e) {
  var t = e._init;
  return t(e._payload);
}
function pa(e) {
  function t(a, c) {
    if (e) {
      var d = a.deletions;
      d === null ? ((a.deletions = [c]), (a.flags |= 16)) : d.push(c);
    }
  }
  function n(a, c) {
    if (!e) return null;
    for (; c !== null; ) (t(a, c), (c = c.sibling));
    return null;
  }
  function r(a, c) {
    for (a = new Map(); c !== null; )
      (c.key !== null ? a.set(c.key, c) : a.set(c.index, c), (c = c.sibling));
    return a;
  }
  function l(a, c) {
    return ((a = ht(a, c)), (a.index = 0), (a.sibling = null), a);
  }
  function u(a, c, d) {
    return (
      (a.index = d),
      e
        ? ((d = a.alternate),
          d !== null ? ((d = d.index), d < c ? ((a.flags |= 2), c) : d) : ((a.flags |= 2), c))
        : ((a.flags |= 1048576), c)
    );
  }
  function o(a) {
    return (e && a.alternate === null && (a.flags |= 2), a);
  }
  function i(a, c, d, y) {
    return c === null || c.tag !== 6
      ? ((c = Gl(d, a.mode, y)), (c.return = a), c)
      : ((c = l(c, d)), (c.return = a), c);
  }
  function s(a, c, d, y) {
    var C = d.type;
    return C === Ut
      ? v(a, c, d.props.children, y, d.key)
      : c !== null &&
          (c.elementType === C ||
            (typeof C == "object" && C !== null && C.$$typeof === nt && _i(C) === c.type))
        ? ((y = l(c, d.props)), (y.ref = Sn(a, c, d)), (y.return = a), y)
        : ((y = Ir(d.type, d.key, d.props, null, a.mode, y)),
          (y.ref = Sn(a, c, d)),
          (y.return = a),
          y);
  }
  function f(a, c, d, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== d.containerInfo ||
      c.stateNode.implementation !== d.implementation
      ? ((c = Zl(d, a.mode, y)), (c.return = a), c)
      : ((c = l(c, d.children || [])), (c.return = a), c);
  }
  function v(a, c, d, y, C) {
    return c === null || c.tag !== 7
      ? ((c = zt(d, a.mode, y, C)), (c.return = a), c)
      : ((c = l(c, d)), (c.return = a), c);
  }
  function h(a, c, d) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return ((c = Gl("" + c, a.mode, d)), (c.return = a), c);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ir:
          return (
            (d = Ir(c.type, c.key, c.props, null, a.mode, d)),
            (d.ref = Sn(a, null, c)),
            (d.return = a),
            d
          );
        case At:
          return ((c = Zl(c, a.mode, d)), (c.return = a), c);
        case nt:
          var y = c._init;
          return h(a, y(c._payload), d);
      }
      if (En(c) || hn(c)) return ((c = zt(c, a.mode, d, null)), (c.return = a), c);
      gr(a, c);
    }
    return null;
  }
  function p(a, c, d, y) {
    var C = c !== null ? c.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return C !== null ? null : i(a, c, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ir:
          return d.key === C ? s(a, c, d, y) : null;
        case At:
          return d.key === C ? f(a, c, d, y) : null;
        case nt:
          return ((C = d._init), p(a, c, C(d._payload), y));
      }
      if (En(d) || hn(d)) return C !== null ? null : v(a, c, d, y, null);
      gr(a, d);
    }
    return null;
  }
  function w(a, c, d, y, C) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return ((a = a.get(d) || null), i(c, a, "" + y, C));
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case ir:
          return ((a = a.get(y.key === null ? d : y.key) || null), s(c, a, y, C));
        case At:
          return ((a = a.get(y.key === null ? d : y.key) || null), f(c, a, y, C));
        case nt:
          var P = y._init;
          return w(a, c, d, P(y._payload), C);
      }
      if (En(y) || hn(y)) return ((a = a.get(d) || null), v(c, a, y, C, null));
      gr(c, y);
    }
    return null;
  }
  function S(a, c, d, y) {
    for (var C = null, P = null, N = c, _ = (c = 0), K = null; N !== null && _ < d.length; _++) {
      N.index > _ ? ((K = N), (N = null)) : (K = N.sibling);
      var L = p(a, N, d[_], y);
      if (L === null) {
        N === null && (N = K);
        break;
      }
      (e && N && L.alternate === null && t(a, N),
        (c = u(L, c, _)),
        P === null ? (C = L) : (P.sibling = L),
        (P = L),
        (N = K));
    }
    if (_ === d.length) return (n(a, N), B && Ct(a, _), C);
    if (N === null) {
      for (; _ < d.length; _++)
        ((N = h(a, d[_], y)),
          N !== null && ((c = u(N, c, _)), P === null ? (C = N) : (P.sibling = N), (P = N)));
      return (B && Ct(a, _), C);
    }
    for (N = r(a, N); _ < d.length; _++)
      ((K = w(N, a, _, d[_], y)),
        K !== null &&
          (e && K.alternate !== null && N.delete(K.key === null ? _ : K.key),
          (c = u(K, c, _)),
          P === null ? (C = K) : (P.sibling = K),
          (P = K)));
    return (
      e &&
        N.forEach(function (Re) {
          return t(a, Re);
        }),
      B && Ct(a, _),
      C
    );
  }
  function x(a, c, d, y) {
    var C = hn(d);
    if (typeof C != "function") throw Error(g(150));
    if (((d = C.call(d)), d == null)) throw Error(g(151));
    for (
      var P = (C = null), N = c, _ = (c = 0), K = null, L = d.next();
      N !== null && !L.done;
      _++, L = d.next()
    ) {
      N.index > _ ? ((K = N), (N = null)) : (K = N.sibling);
      var Re = p(a, N, L.value, y);
      if (Re === null) {
        N === null && (N = K);
        break;
      }
      (e && N && Re.alternate === null && t(a, N),
        (c = u(Re, c, _)),
        P === null ? (C = Re) : (P.sibling = Re),
        (P = Re),
        (N = K));
    }
    if (L.done) return (n(a, N), B && Ct(a, _), C);
    if (N === null) {
      for (; !L.done; _++, L = d.next())
        ((L = h(a, L.value, y)),
          L !== null && ((c = u(L, c, _)), P === null ? (C = L) : (P.sibling = L), (P = L)));
      return (B && Ct(a, _), C);
    }
    for (N = r(a, N); !L.done; _++, L = d.next())
      ((L = w(N, a, _, L.value, y)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? _ : L.key),
          (c = u(L, c, _)),
          P === null ? (C = L) : (P.sibling = L),
          (P = L)));
    return (
      e &&
        N.forEach(function (pn) {
          return t(a, pn);
        }),
      B && Ct(a, _),
      C
    );
  }
  function F(a, c, d, y) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ut &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case ir:
          e: {
            for (var C = d.key, P = c; P !== null; ) {
              if (P.key === C) {
                if (((C = d.type), C === Ut)) {
                  if (P.tag === 7) {
                    (n(a, P.sibling), (c = l(P, d.props.children)), (c.return = a), (a = c));
                    break e;
                  }
                } else if (
                  P.elementType === C ||
                  (typeof C == "object" && C !== null && C.$$typeof === nt && _i(C) === P.type)
                ) {
                  (n(a, P.sibling),
                    (c = l(P, d.props)),
                    (c.ref = Sn(a, P, d)),
                    (c.return = a),
                    (a = c));
                  break e;
                }
                n(a, P);
                break;
              } else t(a, P);
              P = P.sibling;
            }
            d.type === Ut
              ? ((c = zt(d.props.children, a.mode, y, d.key)), (c.return = a), (a = c))
              : ((y = Ir(d.type, d.key, d.props, null, a.mode, y)),
                (y.ref = Sn(a, c, d)),
                (y.return = a),
                (a = y));
          }
          return o(a);
        case At:
          e: {
            for (P = d.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === d.containerInfo &&
                  c.stateNode.implementation === d.implementation
                ) {
                  (n(a, c.sibling), (c = l(c, d.children || [])), (c.return = a), (a = c));
                  break e;
                } else {
                  n(a, c);
                  break;
                }
              else t(a, c);
              c = c.sibling;
            }
            ((c = Zl(d, a.mode, y)), (c.return = a), (a = c));
          }
          return o(a);
        case nt:
          return ((P = d._init), F(a, c, P(d._payload), y));
      }
      if (En(d)) return S(a, c, d, y);
      if (hn(d)) return x(a, c, d, y);
      gr(a, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        c !== null && c.tag === 6
          ? (n(a, c.sibling), (c = l(c, d)), (c.return = a), (a = c))
          : (n(a, c), (c = Gl(d, a.mode, y)), (c.return = a), (a = c)),
        o(a))
      : n(a, c);
  }
  return F;
}
var un = pa(!0),
  ma = pa(!1),
  Gr = wt(null),
  Zr = null,
  Kt = null,
  go = null;
function wo() {
  go = Kt = Zr = null;
}
function So(e) {
  var t = Gr.current;
  ($(Gr), (e._currentValue = t));
}
function ju(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function en(e, t) {
  ((Zr = e),
    (go = Kt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), (e.firstContext = null)));
}
function Te(e) {
  var t = e._currentValue;
  if (go !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Kt === null)) {
      if (Zr === null) throw Error(g(308));
      ((Kt = e), (Zr.dependencies = { lanes: 0, firstContext: e }));
    } else Kt = Kt.next = e;
  return t;
}
var Nt = null;
function xo(e) {
  Nt === null ? (Nt = [e]) : Nt.push(e);
}
function ha(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), xo(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    qe(e, r)
  );
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function ko(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function va(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function dt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), xo(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    qe(e, n)
  );
}
function zr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), oo(e, n));
  }
}
function ji(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (u === null ? (l = u = o) : (u = u.next = o), (n = n.next));
      } while (n !== null);
      u === null ? (l = u = t) : (u = u.next = t);
    } else l = u = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: u,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Jr(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var u = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i,
      f = s.next;
    ((s.next = null), o === null ? (u = f) : (o.next = f), (o = s));
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (i = v.lastBaseUpdate),
      i !== o && (i === null ? (v.firstBaseUpdate = f) : (i.next = f), (v.lastBaseUpdate = s)));
  }
  if (u !== null) {
    var h = l.baseState;
    ((o = 0), (v = f = s = null), (i = u));
    do {
      var p = i.lane,
        w = i.eventTime;
      if ((r & p) === p) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            });
        e: {
          var S = e,
            x = i;
          switch (((p = t), (w = n), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                h = S.call(w, h, p);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (((S = x.payload), (p = typeof S == "function" ? S.call(w, h, p) : S), p == null))
                break e;
              h = Q({}, h, p);
              break e;
            case 2:
              rt = !0;
          }
        }
        i.callback !== null &&
          i.lane !== 0 &&
          ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [i]) : p.push(i));
      } else
        ((w = {
          eventTime: w,
          lane: p,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        }),
          v === null ? ((f = v = w), (s = h)) : (v = v.next = w),
          (o |= p));
      if (((i = i.next), i === null)) {
        if (((i = l.shared.pending), i === null)) break;
        ((p = i), (i = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null));
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((o |= l.lane), (l = l.next));
      while (l !== t);
    } else u === null && (l.shared.lanes = 0);
    ((Mt |= o), (e.lanes = o), (e.memoizedState = h));
  }
}
function zi(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(g(191, l));
        l.call(r);
      }
    }
}
var rr = {},
  He = wt(rr),
  Kn = wt(rr),
  Xn = wt(rr);
function _t(e) {
  if (e === rr) throw Error(g(174));
  return e;
}
function Co(e, t) {
  switch ((A(Xn, t), A(Kn, e), A(He, rr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : su(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = su(t, e)));
  }
  ($(He), A(He, t));
}
function on() {
  ($(He), $(Kn), $(Xn));
}
function ya(e) {
  _t(Xn.current);
  var t = _t(He.current),
    n = su(t, e.type);
  t !== n && (A(Kn, e), A(He, n));
}
function Eo(e) {
  Kn.current === e && ($(He), $(Kn));
}
var W = wt(0);
function qr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Wl = [];
function Po() {
  for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var Tr = et.ReactCurrentDispatcher,
  Hl = et.ReactCurrentBatchConfig,
  Rt = 0,
  H = null,
  J = null,
  ee = null,
  br = !1,
  Rn = !1,
  Gn = 0,
  fd = 0;
function ue() {
  throw Error(g(321));
}
function No(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function _o(e, t, n, r, l, u) {
  if (
    ((Rt = u),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Tr.current = e === null || e.memoizedState === null ? hd : vd),
    (e = n(r, l)),
    Rn)
  ) {
    u = 0;
    do {
      if (((Rn = !1), (Gn = 0), 25 <= u)) throw Error(g(301));
      ((u += 1), (ee = J = null), (t.updateQueue = null), (Tr.current = yd), (e = n(r, l)));
    } while (Rn);
  }
  if (
    ((Tr.current = el),
    (t = J !== null && J.next !== null),
    (Rt = 0),
    (ee = J = H = null),
    (br = !1),
    t)
  )
    throw Error(g(300));
  return e;
}
function jo() {
  var e = Gn !== 0;
  return ((Gn = 0), e);
}
function Ve() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e), ee);
}
function Le() {
  if (J === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = ee === null ? H.memoizedState : ee.next;
  if (t !== null) ((ee = t), (J = e));
  else {
    if (e === null) throw Error(g(310));
    ((J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e));
  }
  return ee;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ql(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    u = n.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      ((l.next = u.next), (u.next = o));
    }
    ((r.baseQueue = l = u), (n.pending = null));
  }
  if (l !== null) {
    ((u = l.next), (r = r.baseState));
    var i = (o = null),
      s = null,
      f = u;
    do {
      var v = f.lane;
      if ((Rt & v) === v)
        (s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action)));
      else {
        var h = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        (s === null ? ((i = s = h), (o = r)) : (s = s.next = h), (H.lanes |= v), (Mt |= v));
      }
      f = f.next;
    } while (f !== null && f !== u);
    (s === null ? (o = r) : (s.next = i),
      Ue(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((u = l.lane), (H.lanes |= u), (Mt |= u), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yl(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    u = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do ((u = e(u, o.action)), (o = o.next));
    while (o !== l);
    (Ue(u, t.memoizedState) || (me = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u));
  }
  return [u, r];
}
function ga() {}
function wa(e, t) {
  var n = H,
    r = Le(),
    l = t(),
    u = !Ue(r.memoizedState, l);
  if (
    (u && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    zo(ka.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || u || (ee !== null && ee.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Jn(9, xa.bind(null, n, r, l, t), void 0, null), te === null))
      throw Error(g(349));
    Rt & 30 || Sa(n, t, l);
  }
  return l;
}
function Sa(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function xa(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Ca(t) && Ea(e));
}
function ka(e, t, n) {
  return n(function () {
    Ca(t) && Ea(e);
  });
}
function Ca(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Ea(e) {
  var t = qe(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function Ti(e) {
  var t = Ve();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = md.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Pa() {
  return Le().memoizedState;
}
function Lr(e, t, n, r) {
  var l = Ve();
  ((H.flags |= e), (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r)));
}
function pl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (((u = o.destroy), r !== null && No(r, o.deps))) {
      l.memoizedState = Jn(t, n, u, r);
      return;
    }
  }
  ((H.flags |= e), (l.memoizedState = Jn(1 | t, n, u, r)));
}
function Li(e, t) {
  return Lr(8390656, 8, e, t);
}
function zo(e, t) {
  return pl(2048, 8, e, t);
}
function Na(e, t) {
  return pl(4, 2, e, t);
}
function _a(e, t) {
  return pl(4, 4, e, t);
}
function ja(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function za(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), pl(4, 4, ja.bind(null, t, e), n));
}
function To() {}
function Ta(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function La(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ra(e, t, n) {
  return Rt & 21
    ? (Ue(n, t) || ((n = Fs()), (H.lanes |= n), (Mt |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function dd(e, t) {
  var n = M;
  ((M = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Hl.transition;
  Hl.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((M = n), (Hl.transition = r));
  }
}
function Ma() {
  return Le().memoizedState;
}
function pd(e, t, n) {
  var r = mt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Da(e)))
    Ia(t, n);
  else if (((n = ha(e, t, n, r)), n !== null)) {
    var l = ce();
    (Ae(n, e, r, l), Oa(n, t, r));
  }
}
function md(e, t, n) {
  var r = mt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Da(e)) Ia(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && ((u = t.lastRenderedReducer), u !== null))
      try {
        var o = t.lastRenderedState,
          i = u(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = i), Ue(i, o))) {
          var s = t.interleaved;
          (s === null ? ((l.next = l), xo(t)) : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = ha(e, t, l, r)), n !== null && ((l = ce()), Ae(n, e, r, l), Oa(n, t, r)));
  }
}
function Da(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Ia(e, t) {
  Rn = br = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function Oa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), oo(e, n));
  }
}
var el = {
    readContext: Te,
    useCallback: ue,
    useContext: ue,
    useEffect: ue,
    useImperativeHandle: ue,
    useInsertionEffect: ue,
    useLayoutEffect: ue,
    useMemo: ue,
    useReducer: ue,
    useRef: ue,
    useState: ue,
    useDebugValue: ue,
    useDeferredValue: ue,
    useTransition: ue,
    useMutableSource: ue,
    useSyncExternalStore: ue,
    useId: ue,
    unstable_isNewReconciler: !1,
  },
  hd = {
    readContext: Te,
    useCallback: function (e, t) {
      return ((Ve().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: Te,
    useEffect: Li,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Lr(4194308, 4, ja.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return Lr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Lr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = pd.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Ti,
    useDebugValue: To,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Ti(!1),
        t = e[0];
      return ((e = dd.bind(null, e[1])), (Ve().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Ve();
      if (B) {
        if (n === void 0) throw Error(g(407));
        n = n();
      } else {
        if (((n = t()), te === null)) throw Error(g(349));
        Rt & 30 || Sa(r, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return (
        (l.queue = u),
        Li(ka.bind(null, r, u, e), [e]),
        (r.flags |= 2048),
        Jn(9, xa.bind(null, r, u, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = te.identifierPrefix;
      if (B) {
        var n = Xe,
          r = Ke;
        ((n = (r & ~(1 << (32 - Fe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Gn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = fd++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  vd = {
    readContext: Te,
    useCallback: Ta,
    useContext: Te,
    useEffect: zo,
    useImperativeHandle: za,
    useInsertionEffect: Na,
    useLayoutEffect: _a,
    useMemo: La,
    useReducer: Ql,
    useRef: Pa,
    useState: function () {
      return Ql(Zn);
    },
    useDebugValue: To,
    useDeferredValue: function (e) {
      var t = Le();
      return Ra(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Ql(Zn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: ga,
    useSyncExternalStore: wa,
    useId: Ma,
    unstable_isNewReconciler: !1,
  },
  yd = {
    readContext: Te,
    useCallback: Ta,
    useContext: Te,
    useEffect: zo,
    useImperativeHandle: za,
    useInsertionEffect: Na,
    useLayoutEffect: _a,
    useMemo: La,
    useReducer: Yl,
    useRef: Pa,
    useState: function () {
      return Yl(Zn);
    },
    useDebugValue: To,
    useDeferredValue: function (e) {
      var t = Le();
      return J === null ? (t.memoizedState = e) : Ra(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(Zn)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: ga,
    useSyncExternalStore: wa,
    useId: Ma,
    unstable_isNewReconciler: !1,
  };
function De(e, t) {
  if (e && e.defaultProps) {
    ((t = Q({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function zu(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var ml = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ot(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      u = Ge(r, l);
    ((u.payload = t),
      n != null && (u.callback = n),
      (t = dt(e, u, l)),
      t !== null && (Ae(t, e, l, r), zr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = mt(e),
      u = Ge(r, l);
    ((u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = dt(e, u, l)),
      t !== null && (Ae(t, e, l, r), zr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = mt(e),
      l = Ge(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = dt(e, l, r)),
      t !== null && (Ae(t, e, r, n), zr(t, e, r)));
  },
};
function Ri(e, t, n, r, l, u, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, u, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Wn(n, r) || !Wn(l, u)
        : !0
  );
}
function Fa(e, t, n) {
  var r = !1,
    l = yt,
    u = t.contextType;
  return (
    typeof u == "object" && u !== null
      ? (u = Te(u))
      : ((l = ve(t) ? Tt : se.current),
        (r = t.contextTypes),
        (u = (r = r != null) ? rn(e, l) : yt)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ml),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  );
}
function Mi(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ml.enqueueReplaceState(t, t.state, null));
}
function Tu(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), ko(e));
  var u = t.contextType;
  (typeof u == "object" && u !== null
    ? (l.context = Te(u))
    : ((u = ve(t) ? Tt : se.current), (l.context = rn(e, u))),
    (l.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == "function" && (zu(e, t, u, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && ml.enqueueReplaceState(l, l.state, null),
      Jr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function sn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Hc(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (u) {
    l =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Kl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Lu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Aa(e, t, n) {
  ((n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (nl || ((nl = !0), (Vu = r)), Lu(e, t));
    }),
    n
  );
}
function Ua(e, t, n) {
  ((n = Ge(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Lu(e, t);
      }));
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (n.callback = function () {
        (Lu(e, t), typeof r != "function" && (pt === null ? (pt = new Set([this])) : pt.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function Di(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gd();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = Rd.bind(null, e, t, n)), t.then(e, e));
}
function Ii(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Oi(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Ge(-1, 1)), (t.tag = 2), dt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var wd = et.ReactCurrentOwner,
  me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? ma(t, null, n, r) : un(t, e.child, n, r);
}
function Fi(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return (
    en(t, l),
    (r = _o(e, t, n, r, u, l)),
    (n = jo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), be(e, t, l))
      : (B && n && ho(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Ai(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" &&
      !Ao(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), $a(e, t, u, r, l))
      : ((e = Ir(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((u = e.child), !(e.lanes & l))) {
    var o = u.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Wn), n(o, r) && e.ref === t.ref))
      return be(e, t, l);
  }
  return ((t.flags |= 1), (e = ht(u, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function $a(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Wn(u, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = u), (e.lanes & l) !== 0)) e.flags & 131072 && (me = !0);
      else return ((t.lanes = e.lanes), be(e, t, l));
  }
  return Ru(e, t, n, r, l);
}
function Va(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        A(Gt, ge),
        (ge |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          A(Gt, ge),
          (ge |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = u !== null ? u.baseLanes : n),
        A(Gt, ge),
        (ge |= r));
    }
  else
    (u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
      A(Gt, ge),
      (ge |= r));
  return (ae(e, t, l, n), t.child);
}
function Ba(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ru(e, t, n, r, l) {
  var u = ve(n) ? Tt : se.current;
  return (
    (u = rn(t, u)),
    en(t, l),
    (n = _o(e, t, n, r, u, l)),
    (r = jo()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), be(e, t, l))
      : (B && r && ho(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Ui(e, t, n, r, l) {
  if (ve(n)) {
    var u = !0;
    Yr(t);
  } else u = !1;
  if ((en(t, l), t.stateNode === null)) (Rr(e, t), Fa(t, n, r), Tu(t, n, r, l), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      i = t.memoizedProps;
    o.props = i;
    var s = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Te(f))
      : ((f = ve(n) ? Tt : se.current), (f = rn(t, f)));
    var v = n.getDerivedStateFromProps,
      h = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    (h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== r || s !== f) && Mi(t, o, r, f)),
      (rt = !1));
    var p = t.memoizedState;
    ((o.state = p),
      Jr(t, r, o, l),
      (s = t.memoizedState),
      i !== r || p !== s || he.current || rt
        ? (typeof v == "function" && (zu(t, n, v, r), (s = t.memoizedState)),
          (i = rt || Ri(t, n, i, r, p, s, f))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = i))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
  } else {
    ((o = t.stateNode),
      va(e, t),
      (i = t.memoizedProps),
      (f = t.type === t.elementType ? i : De(t.type, i)),
      (o.props = f),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = ve(n) ? Tt : se.current), (s = rn(t, s))));
    var w = n.getDerivedStateFromProps;
    ((v = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((i !== h || p !== s) && Mi(t, o, r, s)),
      (rt = !1),
      (p = t.memoizedState),
      (o.state = p),
      Jr(t, r, o, l));
    var S = t.memoizedState;
    i !== h || p !== S || he.current || rt
      ? (typeof w == "function" && (zu(t, n, w, r), (S = t.memoizedState)),
        (f = rt || Ri(t, n, f, r, p, S, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (i === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (i === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Mu(e, t, n, r, u, l);
}
function Mu(e, t, n, r, l, u) {
  Ba(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (l && Ei(t, n, !1), be(e, t, u));
  ((r = t.stateNode), (wd.current = t));
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = un(t, e.child, null, u)), (t.child = un(t, null, i, u)))
      : ae(e, t, i, u),
    (t.memoizedState = r.state),
    l && Ei(t, n, !0),
    t.child
  );
}
function Wa(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Ci(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ci(e, t.context, !1),
    Co(e, t.containerInfo));
}
function $i(e, t, n, r, l) {
  return (ln(), yo(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var Du = { dehydrated: null, treeContext: null, retryLane: 0 };
function Iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ha(e, t, n) {
  var r = t.pendingProps,
    l = W.current,
    u = !1,
    o = (t.flags & 128) !== 0,
    i;
  if (
    ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    i ? ((u = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    A(W, l & 1),
    e === null)
  )
    return (
      _u(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          u
            ? ((r = t.mode),
              (u = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = o))
                : (u = yl(o, r, 0, null)),
              (e = zt(e, r, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = Iu(n)),
              (t.memoizedState = Du),
              e)
            : Lo(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
    return Sd(e, t, o, r, i, l, n);
  if (u) {
    ((u = r.fallback), (o = t.mode), (l = e.child), (i = l.sibling));
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = s), (t.deletions = null))
        : ((r = ht(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      i !== null ? (u = ht(i, u)) : ((u = zt(u, o, n, null)), (u.flags |= 2)),
      (u.return = t),
      (r.return = t),
      (r.sibling = u),
      (t.child = r),
      (r = u),
      (u = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Iu(n)
          : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (u.memoizedState = o),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = Du),
      r
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (r = ht(u, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Lo(e, t) {
  return (
    (t = yl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wr(e, t, n, r) {
  return (
    r !== null && yo(r),
    un(t, e.child, null, n),
    (e = Lo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sd(e, t, n, r, l, u, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Kl(Error(g(422)))), wr(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((u = r.fallback),
          (l = t.mode),
          (r = yl({ mode: "visible", children: r.children }, l, 0, null)),
          (u = zt(u, l, o, null)),
          (u.flags |= 2),
          (r.return = t),
          (u.return = t),
          (r.sibling = u),
          (t.child = r),
          t.mode & 1 && un(t, e.child, null, o),
          (t.child.memoizedState = Iu(o)),
          (t.memoizedState = Du),
          u);
  if (!(t.mode & 1)) return wr(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
    return ((r = i), (u = Error(g(419))), (r = Kl(u, r, void 0)), wr(e, t, o, r));
  }
  if (((i = (o & e.childLanes) !== 0), me || i)) {
    if (((r = te), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 && l !== u.retryLane && ((u.retryLane = l), qe(e, l), Ae(r, e, l, -1)));
    }
    return (Fo(), (r = Kl(Error(g(421)))), wr(e, t, o, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = Md.bind(null, e)), (l._reactRetry = t), null)
    : ((e = u.treeContext),
      (xe = ft(l.nextSibling)),
      (ke = t),
      (B = !0),
      (Oe = null),
      e !== null &&
        ((Ne[_e++] = Ke),
        (Ne[_e++] = Xe),
        (Ne[_e++] = Lt),
        (Ke = e.id),
        (Xe = e.overflow),
        (Lt = t)),
      (t = Lo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Vi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), ju(e.return, t, n));
}
function Xl(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = n),
      (u.tailMode = l));
}
function Qa(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    u = r.tail;
  if ((ae(e, t, r.children, n), (r = W.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Vi(e, n, t);
        else if (e.tag === 19) Vi(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((A(W, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && qr(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          Xl(t, !1, l, n, u));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && qr(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        Xl(t, !0, n, null, u);
        break;
      case "together":
        Xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Rr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function be(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Mt |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = ht(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function xd(e, t, n) {
  switch (t.tag) {
    case 3:
      (Wa(t), ln());
      break;
    case 5:
      ya(t);
      break;
    case 1:
      ve(t.type) && Yr(t);
      break;
    case 4:
      Co(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      (A(Gr, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (A(W, W.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Ha(e, t, n)
            : (A(W, W.current & 1), (e = be(e, t, n)), e !== null ? e.sibling : null);
      A(W, W.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qa(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        A(W, W.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), Va(e, t, n));
  }
  return be(e, t, n);
}
var Ya, Ou, Ka, Xa;
Ya = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ou = function () {};
Ka = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), _t(He.current));
    var u = null;
    switch (n) {
      case "input":
        ((l = lu(e, l)), (r = lu(e, r)), (u = []));
        break;
      case "select":
        ((l = Q({}, l, { value: void 0 })), (r = Q({}, r, { value: void 0 })), (u = []));
        break;
      case "textarea":
        ((l = iu(e, l)), (r = iu(e, r)), (u = []));
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
    }
    au(n, r);
    var o;
    n = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var i = l[f];
          for (o in i) i.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (On.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((i = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== i && (s != null || i != null))
      )
        if (f === "style")
          if (i) {
            for (o in i)
              !i.hasOwnProperty(o) || (s && s.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), (n[o] = s[o]));
          } else (n || (u || (u = []), u.push(f, n)), (n = s));
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (i = i ? i.__html : void 0),
              s != null && i !== s && (u = u || []).push(f, s))
            : f === "children"
              ? (typeof s != "string" && typeof s != "number") || (u = u || []).push(f, "" + s)
              : f !== "suppressContentEditableWarning" &&
                f !== "suppressHydrationWarning" &&
                (On.hasOwnProperty(f)
                  ? (s != null && f === "onScroll" && U("scroll", e), u || i === s || (u = []))
                  : (u = u || []).push(f, s));
    }
    n && (u = u || []).push("style", n);
    var f = u;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Xa = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function xn(e, t) {
  if (!B)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function kd(e, t, n) {
  var r = t.pendingProps;
  switch ((vo(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (oe(t), null);
    case 1:
      return (ve(t.type) && Qr(), oe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        on(),
        $(he),
        $(se),
        Po(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Oe !== null && (Hu(Oe), (Oe = null)))),
        Ou(e, t),
        oe(t),
        null
      );
    case 5:
      Eo(t);
      var l = _t(Xn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (Ka(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return (oe(t), null);
        }
        if (((e = _t(He.current)), yr(t))) {
          ((r = t.stateNode), (n = t.type));
          var u = t.memoizedProps;
          switch (((r[Be] = t), (r[Yn] = u), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (U("cancel", r), U("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) U(Nn[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (U("error", r), U("load", r));
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              (Zo(r, u), U("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!u.multiple }), U("invalid", r));
              break;
            case "textarea":
              (qo(r, u), U("invalid", r));
          }
          (au(n, u), (l = null));
          for (var o in u)
            if (u.hasOwnProperty(o)) {
              var i = u[o];
              o === "children"
                ? typeof i == "string"
                  ? r.textContent !== i &&
                    (u.suppressHydrationWarning !== !0 && vr(r.textContent, i, e),
                    (l = ["children", i]))
                  : typeof i == "number" &&
                    r.textContent !== "" + i &&
                    (u.suppressHydrationWarning !== !0 && vr(r.textContent, i, e),
                    (l = ["children", "" + i]))
                : On.hasOwnProperty(o) && i != null && o === "onScroll" && U("scroll", r);
            }
          switch (n) {
            case "input":
              (sr(r), Jo(r, u, !0));
              break;
            case "textarea":
              (sr(r), bo(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Hr);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ks(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Be] = t),
            (e[Yn] = r),
            Ya(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = cu(n, r)), n)) {
              case "dialog":
                (U("cancel", e), U("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (U("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) U(Nn[l], e);
                l = r;
                break;
              case "source":
                (U("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (U("error", e), U("load", e), (l = r));
                break;
              case "details":
                (U("toggle", e), (l = r));
                break;
              case "input":
                (Zo(e, r), (l = lu(e, r)), U("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  U("invalid", e));
                break;
              case "textarea":
                (qo(e, r), (l = iu(e, r)), U("invalid", e));
                break;
              default:
                l = r;
            }
            (au(n, l), (i = l));
            for (u in i)
              if (i.hasOwnProperty(u)) {
                var s = i[u];
                u === "style"
                  ? Ps(e, s)
                  : u === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Cs(e, s))
                    : u === "children"
                      ? typeof s == "string"
                        ? (n !== "textarea" || s !== "") && Fn(e, s)
                        : typeof s == "number" && Fn(e, "" + s)
                      : u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (On.hasOwnProperty(u)
                          ? s != null && u === "onScroll" && U("scroll", e)
                          : s != null && eo(e, u, s, o));
              }
            switch (n) {
              case "input":
                (sr(e), Jo(e, r, !1));
                break;
              case "textarea":
                (sr(e), bo(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (u = r.value),
                  u != null
                    ? Zt(e, !!r.multiple, u, !1)
                    : r.defaultValue != null && Zt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Hr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (oe(t), null);
    case 6:
      if (e && t.stateNode != null) Xa(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (((n = _t(Xn.current)), _t(He.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (u = r.nodeValue !== n) && ((e = ke), e !== null))
          )
            switch (e.tag) {
              case 3:
                vr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  vr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          u && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Be] = t),
            (t.stateNode = r));
      }
      return (oe(t), null);
    case 13:
      if (
        ($(W),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (B && xe !== null && t.mode & 1 && !(t.flags & 128))
          (da(), ln(), (t.flags |= 98560), (u = !1));
        else if (((u = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(g(318));
            if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
              throw Error(g(317));
            u[Be] = t;
          } else (ln(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (oe(t), (u = !1));
        } else (Oe !== null && (Hu(Oe), (Oe = null)), (u = !0));
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || W.current & 1 ? q === 0 && (q = 3) : Fo())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (on(), Ou(e, t), e === null && Hn(t.stateNode.containerInfo), oe(t), null);
    case 10:
      return (So(t.type._context), oe(t), null);
    case 17:
      return (ve(t.type) && Qr(), oe(t), null);
    case 19:
      if (($(W), (u = t.memoizedState), u === null)) return (oe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = u.rendering), o === null))
        if (r) xn(u, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = qr(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    xn(u, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((u = n),
                    (e = r),
                    (u.flags &= 14680066),
                    (o = u.alternate),
                    o === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = o.childLanes),
                        (u.lanes = o.lanes),
                        (u.child = o.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = o.memoizedProps),
                        (u.memoizedState = o.memoizedState),
                        (u.updateQueue = o.updateQueue),
                        (u.type = o.type),
                        (e = o.dependencies),
                        (u.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return (A(W, (W.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          u.tail !== null &&
            G() > an &&
            ((t.flags |= 128), (r = !0), xn(u, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = qr(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              xn(u, !0),
              u.tail === null && u.tailMode === "hidden" && !o.alternate && !B)
            )
              return (oe(t), null);
          } else
            2 * G() - u.renderingStartTime > an &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), xn(u, !1), (t.lanes = 4194304));
        u.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = u.last), n !== null ? (n.sibling = o) : (t.child = o), (u.last = o));
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = G()),
          (t.sibling = null),
          (n = W.current),
          A(W, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Oo(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Cd(e, t) {
  switch ((vo(t), t.tag)) {
    case 1:
      return (
        ve(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        on(),
        $(he),
        $(se),
        Po(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Eo(t), null);
    case 13:
      if (($(W), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(g(340));
        ln();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return ($(W), null);
    case 4:
      return (on(), null);
    case 10:
      return (So(t.type._context), null);
    case 22:
    case 23:
      return (Oo(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Sr = !1,
  ie = !1,
  Ed = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Fu(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Bi = !1;
function Pd(e, t) {
  if (((Su = Vr), (e = bs()), mo(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            u = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, u.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            i = -1,
            s = -1,
            f = 0,
            v = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (l !== 0 && h.nodeType !== 3) || (i = o + l),
                h !== u || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              ((p = h), (h = w));
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++f === l && (i = o),
                p === u && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              ((h = p), (p = h.parentNode));
            }
            h = w;
          }
          n = i === -1 || s === -1 ? null : { start: i, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xu = { focusedElem: e, selectionRange: n }, Vr = !1, k = t; k !== null; )
    if (((t = k), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (k = e));
    else
      for (; k !== null; ) {
        t = k;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    F = S.memoizedState,
                    a = t.stateNode,
                    c = a.getSnapshotBeforeUpdate(t.elementType === t.type ? x : De(t.type, x), F);
                  a.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(g(163));
            }
        } catch (y) {
          Y(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (k = e));
          break;
        }
        k = t.return;
      }
  return ((S = Bi), (Bi = !1), S);
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        ((l.destroy = void 0), u !== void 0 && Fu(t, n, u));
      }
      l = l.next;
    } while (l !== r);
  }
}
function hl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Au(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ga(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ga(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Be], delete t[Yn], delete t[Eu], delete t[id], delete t[sd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Za(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wi(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Za(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Uu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Hr)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Uu(e, t, n), e = e.sibling; e !== null; ) (Uu(e, t, n), (e = e.sibling));
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($u(e, t, n), e = e.sibling; e !== null; ) ($u(e, t, n), (e = e.sibling));
}
var ne = null,
  Ie = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) (Ja(e, t, n), (n = n.sibling));
}
function Ja(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(il, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Xt(n, t);
    case 6:
      var r = ne,
        l = Ie;
      ((ne = null),
        tt(e, t, n),
        (ne = r),
        (Ie = l),
        ne !== null &&
          (Ie
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode)));
      break;
    case 18:
      ne !== null &&
        (Ie
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8 ? Vl(e.parentNode, n) : e.nodeType === 1 && Vl(e, n),
            Vn(e))
          : Vl(ne, n.stateNode));
      break;
    case 4:
      ((r = ne),
        (l = Ie),
        (ne = n.stateNode.containerInfo),
        (Ie = !0),
        tt(e, t, n),
        (ne = r),
        (Ie = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var u = l,
            o = u.destroy;
          ((u = u.tag), o !== void 0 && (u & 2 || u & 4) && Fu(n, t, o), (l = l.next));
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ie && (Xt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (i) {
          Y(n, t, i);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), tt(e, t, n), (ie = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function Hi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new Ed()),
      t.forEach(function (r) {
        var l = Dd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Me(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e,
          o = t,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 5:
              ((ne = i.stateNode), (Ie = !1));
              break e;
            case 3:
              ((ne = i.stateNode.containerInfo), (Ie = !0));
              break e;
            case 4:
              ((ne = i.stateNode.containerInfo), (Ie = !0));
              break e;
          }
          i = i.return;
        }
        if (ne === null) throw Error(g(160));
        (Ja(u, o, l), (ne = null), (Ie = !1));
        var s = l.alternate;
        (s !== null && (s.return = null), (l.return = null));
      } catch (f) {
        Y(l, t, f);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (qa(t, e), (t = t.sibling));
}
function qa(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Me(t, e), $e(e), r & 4)) {
        try {
          (Mn(3, e, e.return), hl(3, e));
        } catch (x) {
          Y(e, e.return, x);
        }
        try {
          Mn(5, e, e.return);
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 1:
      (Me(t, e), $e(e), r & 512 && n !== null && Xt(n, n.return));
      break;
    case 5:
      if ((Me(t, e), $e(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Fn(l, "");
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var u = e.memoizedProps,
          o = n !== null ? n.memoizedProps : u,
          i = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            (i === "input" && u.type === "radio" && u.name != null && Ss(l, u), cu(i, o));
            var f = cu(i, u);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? Ps(l, h)
                : v === "dangerouslySetInnerHTML"
                  ? Cs(l, h)
                  : v === "children"
                    ? Fn(l, h)
                    : eo(l, v, h, f);
            }
            switch (i) {
              case "input":
                uu(l, u);
                break;
              case "textarea":
                xs(l, u);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var w = u.value;
                w != null
                  ? Zt(l, !!u.multiple, w, !1)
                  : p !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Zt(l, !!u.multiple, u.defaultValue, !0)
                      : Zt(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[Yn] = u;
          } catch (x) {
            Y(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Me(t, e), $e(e), r & 4)) {
        if (e.stateNode === null) throw Error(g(162));
        ((l = e.stateNode), (u = e.memoizedProps));
        try {
          l.nodeValue = u;
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 3:
      if ((Me(t, e), $e(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Vn(t.containerInfo);
        } catch (x) {
          Y(e, e.return, x);
        }
      break;
    case 4:
      (Me(t, e), $e(e));
      break;
    case 13:
      (Me(t, e),
        $e(e),
        (l = e.child),
        l.flags & 8192 &&
          ((u = l.memoizedState !== null),
          (l.stateNode.isHidden = u),
          !u || (l.alternate !== null && l.alternate.memoizedState !== null) || (Do = G())),
        r & 4 && Hi(e));
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (f = ie) || v), Me(t, e), (ie = f)) : Me(t, e),
        $e(e),
        r & 8192)
      ) {
        if (((f = e.memoizedState !== null), (e.stateNode.isHidden = f) && !v && e.mode & 1))
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((p = k), (w = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, p, p.return);
                  break;
                case 1:
                  Xt(p, p.return);
                  var S = p.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    ((r = p), (n = p.return));
                    try {
                      ((t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount());
                    } catch (x) {
                      Y(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Xt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Yi(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = p), (k = w)) : Yi(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                ((l = h.stateNode),
                  f
                    ? ((u = l.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((i = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o = s != null && s.hasOwnProperty("display") ? s.display : null),
                      (i.style.display = Es("display", o))));
              } catch (x) {
                Y(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (x) {
                Y(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) || h.memoizedState === null || h === e) &&
            h.child !== null
          ) {
            ((h.child.return = h), (h = h.child));
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            (v === h && (v = null), (h = h.return));
          }
          (v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling));
        }
      }
      break;
    case 19:
      (Me(t, e), $e(e), r & 4 && Hi(e));
      break;
    case 21:
      break;
    default:
      (Me(t, e), $e(e));
  }
}
function $e(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Za(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Fn(l, ""), (r.flags &= -33));
          var u = Wi(e);
          $u(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            i = Wi(e);
          Uu(e, i, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nd(e, t, n) {
  ((k = e), ba(e));
}
function ba(e, t, n) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Sr;
      if (!o) {
        var i = l.alternate,
          s = (i !== null && i.memoizedState !== null) || ie;
        i = Sr;
        var f = ie;
        if (((Sr = o), (ie = s) && !f))
          for (k = l; k !== null; )
            ((o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ki(l)
                : s !== null
                  ? ((s.return = o), (k = s))
                  : Ki(l));
        for (; u !== null; ) ((k = u), ba(u), (u = u.sibling));
        ((k = l), (Sr = i), (ie = f));
      }
      Qi(e);
    } else l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (k = u)) : Qi(e);
  }
}
function Qi(e) {
  for (; k !== null; ) {
    var t = k;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || hl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var u = t.updateQueue;
              u !== null && zi(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                zi(t, o, n);
              }
              break;
            case 5:
              var i = t.stateNode;
              if (n === null && t.flags & 4) {
                n = i;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Vn(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(g(163));
          }
        ie || (t.flags & 512 && Au(t));
      } catch (p) {
        Y(t, t.return, p);
      }
    }
    if (t === e) {
      k = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function Yi(e) {
  for (; k !== null; ) {
    var t = k;
    if (t === e) {
      k = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (k = n));
      break;
    }
    k = t.return;
  }
}
function Ki(e) {
  for (; k !== null; ) {
    var t = k;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            hl(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var u = t.return;
          try {
            Au(t);
          } catch (s) {
            Y(t, u, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Au(t);
          } catch (s) {
            Y(t, o, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      k = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      ((i.return = t.return), (k = i));
      break;
    }
    k = t.return;
  }
}
var _d = Math.ceil,
  tl = et.ReactCurrentDispatcher,
  Ro = et.ReactCurrentOwner,
  ze = et.ReactCurrentBatchConfig,
  R = 0,
  te = null,
  Z = null,
  re = 0,
  ge = 0,
  Gt = wt(0),
  q = 0,
  qn = null,
  Mt = 0,
  vl = 0,
  Mo = 0,
  Dn = null,
  pe = null,
  Do = 0,
  an = 1 / 0,
  Qe = null,
  nl = !1,
  Vu = null,
  pt = null,
  xr = !1,
  it = null,
  rl = 0,
  In = 0,
  Bu = null,
  Mr = -1,
  Dr = 0;
function ce() {
  return R & 6 ? G() : Mr !== -1 ? Mr : (Mr = G());
}
function mt(e) {
  return e.mode & 1
    ? R & 2 && re !== 0
      ? re & -re
      : cd.transition !== null
        ? (Dr === 0 && (Dr = Fs()), Dr)
        : ((e = M), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hs(e.type))), e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < In) throw ((In = 0), (Bu = null), Error(g(185)));
  (er(e, n, r),
    (!(R & 2) || e !== te) &&
      (e === te && (!(R & 2) && (vl |= n), q === 4 && ut(e, re)),
      ye(e, r),
      n === 1 && R === 0 && !(t.mode & 1) && ((an = G() + 500), dl && St())));
}
function ye(e, t) {
  var n = e.callbackNode;
  cf(e, t);
  var r = $r(e, e === te ? re : 0);
  if (r === 0) (n !== null && ni(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ni(n), t === 1))
      (e.tag === 0 ? ad(Xi.bind(null, e)) : aa(Xi.bind(null, e)),
        ud(function () {
          !(R & 6) && St();
        }),
        (n = null));
    else {
      switch (As(r)) {
        case 1:
          n = uo;
          break;
        case 4:
          n = Is;
          break;
        case 16:
          n = Ur;
          break;
        case 536870912:
          n = Os;
          break;
        default:
          n = Ur;
      }
      n = ic(n, ec.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function ec(e, t) {
  if (((Mr = -1), (Dr = 0), R & 6)) throw Error(g(327));
  var n = e.callbackNode;
  if (tn() && e.callbackNode !== n) return null;
  var r = $r(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ll(e, r);
  else {
    t = r;
    var l = R;
    R |= 2;
    var u = nc();
    (te !== e || re !== t) && ((Qe = null), (an = G() + 500), jt(e, t));
    do
      try {
        Td();
        break;
      } catch (i) {
        tc(e, i);
      }
    while (!0);
    (wo(), (tl.current = u), (R = l), Z !== null ? (t = 0) : ((te = null), (re = 0), (t = q)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = hu(e)), l !== 0 && ((r = l), (t = Wu(e, l)))), t === 1))
      throw ((n = qn), jt(e, 0), ut(e, r), ye(e, G()), n);
    if (t === 6) ut(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !jd(l) &&
          ((t = ll(e, r)), t === 2 && ((u = hu(e)), u !== 0 && ((r = u), (t = Wu(e, u)))), t === 1))
      )
        throw ((n = qn), jt(e, 0), ut(e, r), ye(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          Et(e, pe, Qe);
          break;
        case 3:
          if ((ut(e, r), (r & 130023424) === r && ((t = Do + 500 - G()), 10 < t))) {
            if ($r(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ce(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Cu(Et.bind(null, e, pe, Qe), t);
            break;
          }
          Et(e, pe, Qe);
          break;
        case 4:
          if ((ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Fe(r);
            ((u = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~u));
          }
          if (
            ((r = l),
            (r = G() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * _d(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cu(Et.bind(null, e, pe, Qe), r);
            break;
          }
          Et(e, pe, Qe);
          break;
        case 5:
          Et(e, pe, Qe);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return (ye(e, G()), e.callbackNode === n ? ec.bind(null, e) : null);
}
function Wu(e, t) {
  var n = Dn;
  return (
    e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
    (e = ll(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && Hu(t)),
    e
  );
}
function Hu(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function jd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function ut(e, t) {
  for (
    t &= ~Mo, t &= ~vl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Fe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Xi(e) {
  if (R & 6) throw Error(g(327));
  tn();
  var t = $r(e, 0);
  if (!(t & 1)) return (ye(e, G()), null);
  var n = ll(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hu(e);
    r !== 0 && ((t = r), (n = Wu(e, r)));
  }
  if (n === 1) throw ((n = qn), jt(e, 0), ut(e, t), ye(e, G()), n);
  if (n === 6) throw Error(g(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, pe, Qe),
    ye(e, G()),
    null
  );
}
function Io(e, t) {
  var n = R;
  R |= 1;
  try {
    return e(t);
  } finally {
    ((R = n), R === 0 && ((an = G() + 500), dl && St()));
  }
}
function Dt(e) {
  it !== null && it.tag === 0 && !(R & 6) && tn();
  var t = R;
  R |= 1;
  var n = ze.transition,
    r = M;
  try {
    if (((ze.transition = null), (M = 1), e)) return e();
  } finally {
    ((M = r), (ze.transition = n), (R = t), !(R & 6) && St());
  }
}
function Oo() {
  ((ge = Gt.current), $(Gt));
}
function jt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ld(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((vo(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && Qr());
          break;
        case 3:
          (on(), $(he), $(se), Po());
          break;
        case 5:
          Eo(r);
          break;
        case 4:
          on();
          break;
        case 13:
          $(W);
          break;
        case 19:
          $(W);
          break;
        case 10:
          So(r.type._context);
          break;
        case 22:
        case 23:
          Oo();
      }
      n = n.return;
    }
  if (
    ((te = e),
    (Z = e = ht(e.current, null)),
    (re = ge = t),
    (q = 0),
    (qn = null),
    (Mo = vl = Mt = 0),
    (pe = Dn = null),
    Nt !== null)
  ) {
    for (t = 0; t < Nt.length; t++)
      if (((n = Nt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          u = n.pending;
        if (u !== null) {
          var o = u.next;
          ((u.next = l), (r.next = o));
        }
        n.pending = r;
      }
    Nt = null;
  }
  return e;
}
function tc(e, t) {
  do {
    var n = Z;
    try {
      if ((wo(), (Tr.current = el), br)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        br = !1;
      }
      if (
        ((Rt = 0),
        (ee = J = H = null),
        (Rn = !1),
        (Gn = 0),
        (Ro.current = null),
        n === null || n.return === null)
      ) {
        ((q = 1), (qn = t), (Z = null));
        break;
      }
      e: {
        var u = e,
          o = n.return,
          i = n,
          s = t;
        if (
          ((t = re),
          (i.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            v = i,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = v.alternate;
            p
              ? ((v.updateQueue = p.updateQueue),
                (v.memoizedState = p.memoizedState),
                (v.lanes = p.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Ii(o);
          if (w !== null) {
            ((w.flags &= -257), Oi(w, o, i, u, t), w.mode & 1 && Di(u, f, t), (t = w), (s = f));
            var S = t.updateQueue;
            if (S === null) {
              var x = new Set();
              (x.add(s), (t.updateQueue = x));
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              (Di(u, f, t), Fo());
              break e;
            }
            s = Error(g(426));
          }
        } else if (B && i.mode & 1) {
          var F = Ii(o);
          if (F !== null) {
            (!(F.flags & 65536) && (F.flags |= 256), Oi(F, o, i, u, t), yo(sn(s, i)));
            break e;
          }
        }
        ((u = s = sn(s, i)), q !== 4 && (q = 2), Dn === null ? (Dn = [u]) : Dn.push(u), (u = o));
        do {
          switch (u.tag) {
            case 3:
              ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
              var a = Aa(u, s, t);
              ji(u, a);
              break e;
            case 1:
              i = s;
              var c = u.type,
                d = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (pt === null || !pt.has(d))))
              ) {
                ((u.flags |= 65536), (t &= -t), (u.lanes |= t));
                var y = Ua(u, i, t);
                ji(u, y);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      lc(n);
    } catch (C) {
      ((t = C), Z === n && n !== null && (Z = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function nc() {
  var e = tl.current;
  return ((tl.current = el), e === null ? el : e);
}
function Fo() {
  ((q === 0 || q === 3 || q === 2) && (q = 4),
    te === null || (!(Mt & 268435455) && !(vl & 268435455)) || ut(te, re));
}
function ll(e, t) {
  var n = R;
  R |= 2;
  var r = nc();
  (te !== e || re !== t) && ((Qe = null), jt(e, t));
  do
    try {
      zd();
      break;
    } catch (l) {
      tc(e, l);
    }
  while (!0);
  if ((wo(), (R = n), (tl.current = r), Z !== null)) throw Error(g(261));
  return ((te = null), (re = 0), q);
}
function zd() {
  for (; Z !== null; ) rc(Z);
}
function Td() {
  for (; Z !== null && !ef(); ) rc(Z);
}
function rc(e) {
  var t = oc(e.alternate, e, ge);
  ((e.memoizedProps = e.pendingProps), t === null ? lc(e) : (Z = t), (Ro.current = null));
}
function lc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Cd(n, t)), n !== null)) {
        ((n.flags &= 32767), (Z = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((q = 6), (Z = null));
        return;
      }
    } else if (((n = kd(n, t, ge)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Et(e, t, n) {
  var r = M,
    l = ze.transition;
  try {
    ((ze.transition = null), (M = 1), Ld(e, t, n, r));
  } finally {
    ((ze.transition = l), (M = r));
  }
  return null;
}
function Ld(e, t, n, r) {
  do tn();
  while (it !== null);
  if (R & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(g(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var u = n.lanes | n.childLanes;
  if (
    (ff(e, u),
    e === te && ((Z = te = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      xr ||
      ((xr = !0),
      ic(Ur, function () {
        return (tn(), null);
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    ((u = ze.transition), (ze.transition = null));
    var o = M;
    M = 1;
    var i = R;
    ((R |= 4),
      (Ro.current = null),
      Pd(e, n),
      qa(n, e),
      Jf(xu),
      (Vr = !!Su),
      (xu = Su = null),
      (e.current = n),
      Nd(n),
      tf(),
      (R = i),
      (M = o),
      (ze.transition = u));
  } else e.current = n;
  if (
    (xr && ((xr = !1), (it = e), (rl = l)),
    (u = e.pendingLanes),
    u === 0 && (pt = null),
    lf(n.stateNode),
    ye(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (nl) throw ((nl = !1), (e = Vu), (Vu = null), e);
  return (
    rl & 1 && e.tag !== 0 && tn(),
    (u = e.pendingLanes),
    u & 1 ? (e === Bu ? In++ : ((In = 0), (Bu = e))) : (In = 0),
    St(),
    null
  );
}
function tn() {
  if (it !== null) {
    var e = As(rl),
      t = ze.transition,
      n = M;
    try {
      if (((ze.transition = null), (M = 16 > e ? 16 : e), it === null)) var r = !1;
      else {
        if (((e = it), (it = null), (rl = 0), R & 6)) throw Error(g(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var u = k,
            o = u.child;
          if (k.flags & 16) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var f = i[s];
                for (k = f; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, v, u);
                  }
                  var h = v.child;
                  if (h !== null) ((h.return = v), (k = h));
                  else
                    for (; k !== null; ) {
                      v = k;
                      var p = v.sibling,
                        w = v.return;
                      if ((Ga(v), v === f)) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        ((p.return = w), (k = p));
                        break;
                      }
                      k = w;
                    }
                }
              }
              var S = u.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var F = x.sibling;
                    ((x.sibling = null), (x = F));
                  } while (x !== null);
                }
              }
              k = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) ((o.return = u), (k = o));
          else
            e: for (; k !== null; ) {
              if (((u = k), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, u, u.return);
                }
              var a = u.sibling;
              if (a !== null) {
                ((a.return = u.return), (k = a));
                break e;
              }
              k = u.return;
            }
        }
        var c = e.current;
        for (k = c; k !== null; ) {
          o = k;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) ((d.return = o), (k = d));
          else
            e: for (o = c; k !== null; ) {
              if (((i = k), i.flags & 2048))
                try {
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hl(9, i);
                  }
                } catch (C) {
                  Y(i, i.return, C);
                }
              if (i === o) {
                k = null;
                break e;
              }
              var y = i.sibling;
              if (y !== null) {
                ((y.return = i.return), (k = y));
                break e;
              }
              k = i.return;
            }
        }
        if (((R = l), St(), We && typeof We.onPostCommitFiberRoot == "function"))
          try {
            We.onPostCommitFiberRoot(il, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((M = n), (ze.transition = t));
    }
  }
  return !1;
}
function Gi(e, t, n) {
  ((t = sn(n, t)),
    (t = Aa(e, t, 1)),
    (e = dt(e, t, 1)),
    (t = ce()),
    e !== null && (er(e, 1, t), ye(e, t)));
}
function Y(e, t, n) {
  if (e.tag === 3) Gi(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gi(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r)))
        ) {
          ((e = sn(n, e)),
            (e = Ua(t, e, 1)),
            (t = dt(t, e, 1)),
            (e = ce()),
            t !== null && (er(t, 1, e), ye(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function Rd(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    te === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > G() - Do) ? jt(e, 0) : (Mo |= n)),
    ye(e, t));
}
function uc(e, t) {
  t === 0 && (e.mode & 1 ? ((t = fr), (fr <<= 1), !(fr & 130023424) && (fr = 4194304)) : (t = 1));
  var n = ce();
  ((e = qe(e, t)), e !== null && (er(e, t, n), ye(e, n)));
}
function Md(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), uc(e, n));
}
function Dd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  (r !== null && r.delete(t), uc(e, n));
}
var oc;
oc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((me = !1), xd(e, t, n));
      me = !!(e.flags & 131072);
    }
  else ((me = !1), B && t.flags & 1048576 && ca(t, Xr, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Rr(e, t), (e = t.pendingProps));
      var l = rn(t, se.current);
      (en(t, n), (l = _o(null, t, r, e, l, n)));
      var u = jo();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ve(r) ? ((u = !0), Yr(t)) : (u = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            ko(t),
            (l.updater = ml),
            (t.stateNode = l),
            (l._reactInternals = t),
            Tu(t, r, e, n),
            (t = Mu(null, t, r, !0, u, n)))
          : ((t.tag = 0), B && u && ho(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Rr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Od(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = Ru(null, t, r, e, n);
            break e;
          case 1:
            t = Ui(null, t, r, e, n);
            break e;
          case 11:
            t = Fi(null, t, r, e, n);
            break e;
          case 14:
            t = Ai(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(g(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ru(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ui(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wa(t), e === null)) throw Error(g(387));
        ((r = t.pendingProps), (u = t.memoizedState), (l = u.element), va(e, t), Jr(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), u.isDehydrated))
          if (
            ((u = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            ((l = sn(Error(g(423)), t)), (t = $i(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = sn(Error(g(424)), t)), (t = $i(e, t, r, n, l)));
            break e;
          } else
            for (
              xe = ft(t.stateNode.containerInfo.firstChild),
                ke = t,
                B = !0,
                Oe = null,
                n = ma(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((ln(), r === l)) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ya(t),
        e === null && _u(t),
        (r = t.type),
        (l = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (o = l.children),
        ku(r, l) ? (o = null) : u !== null && ku(r, u) && (t.flags |= 32),
        Ba(e, t),
        ae(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && _u(t), null);
    case 13:
      return Ha(e, t, n);
    case 4:
      return (
        Co(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = un(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Fi(e, t, r, l, n)
      );
    case 7:
      return (ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (u = t.memoizedProps),
          (o = l.value),
          A(Gr, r._currentValue),
          (r._currentValue = o),
          u !== null)
        )
          if (Ue(u.value, o)) {
            if (u.children === l.children && !he.current) {
              t = be(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var i = u.dependencies;
              if (i !== null) {
                o = u.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (u.tag === 1) {
                      ((s = Ge(-1, n & -n)), (s.tag = 2));
                      var f = u.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        (v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)),
                          (f.pending = s));
                      }
                    }
                    ((u.lanes |= n),
                      (s = u.alternate),
                      s !== null && (s.lanes |= n),
                      ju(u.return, n, t),
                      (i.lanes |= n));
                    break;
                  }
                  s = s.next;
                }
              } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
              else if (u.tag === 18) {
                if (((o = u.return), o === null)) throw Error(g(341));
                ((o.lanes |= n),
                  (i = o.alternate),
                  i !== null && (i.lanes |= n),
                  ju(o, n, t),
                  (o = u.sibling));
              } else o = u.child;
              if (o !== null) o.return = u;
              else
                for (o = u; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((u = o.sibling), u !== null)) {
                    ((u.return = o.return), (o = u));
                    break;
                  }
                  o = o.return;
                }
              u = o;
            }
        (ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        en(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (l = De(r, t.pendingProps)), (l = De(r.type, l)), Ai(e, t, r, l, n));
    case 15:
      return $a(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Rr(e, t),
        (t.tag = 1),
        ve(r) ? ((e = !0), Yr(t)) : (e = !1),
        en(t, n),
        Fa(t, r, l),
        Tu(t, r, l, n),
        Mu(null, t, r, !0, e, n)
      );
    case 19:
      return Qa(e, t, n);
    case 22:
      return Va(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function ic(e, t) {
  return Ds(e, t);
}
function Id(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function je(e, t, n, r) {
  return new Id(e, t, n, r);
}
function Ao(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function Od(e) {
  if (typeof e == "function") return Ao(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === no)) return 11;
    if (e === ro) return 14;
  }
  return 2;
}
function ht(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ir(e, t, n, r, l, u) {
  var o = 2;
  if (((r = e), typeof e == "function")) Ao(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Ut:
        return zt(n.children, l, u, t);
      case to:
        ((o = 8), (l |= 8));
        break;
      case eu:
        return ((e = je(12, n, t, l | 2)), (e.elementType = eu), (e.lanes = u), e);
      case tu:
        return ((e = je(13, n, t, l)), (e.elementType = tu), (e.lanes = u), e);
      case nu:
        return ((e = je(19, n, t, l)), (e.elementType = nu), (e.lanes = u), e);
      case ys:
        return yl(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hs:
              o = 10;
              break e;
            case vs:
              o = 9;
              break e;
            case no:
              o = 11;
              break e;
            case ro:
              o = 14;
              break e;
            case nt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(g(130, e == null ? e : typeof e, ""));
    }
  return ((t = je(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = u), t);
}
function zt(e, t, n, r) {
  return ((e = je(7, e, r, t)), (e.lanes = n), e);
}
function yl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = ys),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return ((e = je(6, e, null, t)), (e.lanes = n), e);
}
function Zl(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fd(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Tl(0)),
    (this.expirationTimes = Tl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Tl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function Uo(e, t, n, r, l, u, o, i, s) {
  return (
    (e = new Fd(e, t, n, i, s)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = je(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ko(u),
    e
  );
}
function Ad(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: At,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if (Ot(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return sa(e, n, t);
  }
  return t;
}
function ac(e, t, n, r, l, u, o, i, s) {
  return (
    (e = Uo(n, r, !0, e, l, u, o, i, s)),
    (e.context = sc(null)),
    (n = e.current),
    (r = ce()),
    (l = mt(n)),
    (u = Ge(r, l)),
    (u.callback = t ?? null),
    dt(n, u, l),
    (e.current.lanes = l),
    er(e, l, r),
    ye(e, r),
    e
  );
}
function gl(e, t, n, r) {
  var l = t.current,
    u = ce(),
    o = mt(l);
  return (
    (n = sc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ge(u, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dt(l, t, o)),
    e !== null && (Ae(e, l, o, u), zr(e, l, o)),
    o
  );
}
function ul(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zi(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function $o(e, t) {
  (Zi(e, t), (e = e.alternate) && Zi(e, t));
}
function Ud() {
  return null;
}
var cc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Vo(e) {
  this._internalRoot = e;
}
wl.prototype.render = Vo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  gl(e, t, null, null);
};
wl.prototype.unmount = Vo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Dt(function () {
      gl(null, e, null, null);
    }),
      (t[Je] = null));
  }
};
function wl(e) {
  this._internalRoot = e;
}
wl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Vs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    (lt.splice(n, 0, e), n === 0 && Ws(e));
  }
};
function Bo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ji() {}
function $d(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var f = ul(o);
        u.call(f);
      };
    }
    var o = ac(t, r, e, 0, null, !1, !1, "", Ji);
    return (
      (e._reactRootContainer = o),
      (e[Je] = o.current),
      Hn(e.nodeType === 8 ? e.parentNode : e),
      Dt(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function () {
      var f = ul(s);
      i.call(f);
    };
  }
  var s = Uo(e, 0, !1, null, null, !1, !1, "", Ji);
  return (
    (e._reactRootContainer = s),
    (e[Je] = s.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    Dt(function () {
      gl(t, s, n, r);
    }),
    s
  );
}
function xl(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function () {
        var s = ul(o);
        i.call(s);
      };
    }
    gl(t, o, e, l);
  } else o = $d(n, t, e, l, r);
  return ul(o);
}
Us = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (oo(t, n | 1), ye(t, G()), !(R & 6) && ((an = G() + 500), St()));
      }
      break;
    case 13:
      (Dt(function () {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Ae(r, e, 1, l);
        }
      }),
        $o(e, 1));
  }
};
io = function (e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      Ae(t, e, 134217728, n);
    }
    $o(e, 134217728);
  }
};
$s = function (e) {
  if (e.tag === 13) {
    var t = mt(e),
      n = qe(e, t);
    if (n !== null) {
      var r = ce();
      Ae(n, e, t, r);
    }
    $o(e, t);
  }
};
Vs = function () {
  return M;
};
Bs = function (e, t) {
  var n = M;
  try {
    return ((M = e), t());
  } finally {
    M = n;
  }
};
du = function (e, t, n) {
  switch (t) {
    case "input":
      if ((uu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = fl(r);
            if (!l) throw Error(g(90));
            (ws(r), uu(r, l));
          }
        }
      }
      break;
    case "textarea":
      xs(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Zt(e, !!n.multiple, t, !1));
  }
};
js = Io;
zs = Dt;
var Vd = { usingClientEntryPoint: !1, Events: [nr, Wt, fl, Ns, _s, Io] },
  kn = {
    findFiberByHostInstance: Pt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Bd = {
    bundleType: kn.bundleType,
    version: kn.version,
    rendererPackageName: kn.rendererPackageName,
    rendererConfig: kn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Rs(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: kn.findFiberByHostInstance || Ud,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var kr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!kr.isDisabled && kr.supportsFiber)
    try {
      ((il = kr.inject(Bd)), (We = kr));
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bo(t)) throw Error(g(200));
  return Ad(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Bo(e)) throw Error(g(299));
  var n = !1,
    r = "",
    l = cc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Uo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Je] = t.current),
    Hn(e.nodeType === 8 ? e.parentNode : e),
    new Vo(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(g(188))
      : ((e = Object.keys(e).join(",")), Error(g(268, e)));
  return ((e = Rs(t)), (e = e === null ? null : e.stateNode), e);
};
Ee.flushSync = function (e) {
  return Dt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Sl(t)) throw Error(g(200));
  return xl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Bo(e)) throw Error(g(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    u = "",
    o = cc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ac(t, null, e, 1, n ?? null, l, !1, u, o)),
    (e[Je] = t.current),
    Hn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new wl(t);
};
Ee.render = function (e, t, n) {
  if (!Sl(t)) throw Error(g(200));
  return xl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Sl(e)) throw Error(g(40));
  return e._reactRootContainer
    ? (Dt(function () {
        xl(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Je] = null));
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = Io;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Sl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return xl(e, t, n, !1, r);
};
Ee.version = "18.3.1-next-f1338f8080-20240426";
function fc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc);
    } catch (e) {
      console.error(e);
    }
}
(fc(), (fs.exports = Ee));
var Wd = fs.exports,
  qi = Wd;
((ql.createRoot = qi.createRoot), (ql.hydrateRoot = qi.hydrateRoot));
function Hd({ active: e, onChange: t, items: n }) {
  return m.jsx("nav", {
    className: "tabs",
    children: m.jsx("ul", {
      className: "flex gap-6",
      children: n.map((r) =>
        m.jsx(
          "li",
          {
            children: m.jsx("button", {
              className: `tab ${e === r.key ? "tab--active" : ""}`,
              onClick: () => (t == null ? void 0 : t(r.key)),
              "aria-current": e === r.key ? "page" : void 0,
              children: r.label,
            }),
          },
          r.key
        )
      ),
    }),
  });
}
function I({ label: e, children: t }) {
  return m.jsxs("label", {
    className: "flex flex-col gap-1",
    children: [m.jsx("span", { className: "field-label", children: e }), t],
  });
}
function O({ value: e, onChange: t, step: n = 0.01, min: r = 0, className: l, ...u }) {
  return m.jsx("input", {
    className: l ?? "input",
    type: "number",
    inputMode: "decimal",
    step: n,
    min: r,
    value: e,
    onChange: (o) => t(Number(o.target.value)),
    ...u,
  });
}
function D({ title: e, subtitle: t, value: n, highlight: r = !1, className: l }) {
  return m.jsxs("div", {
    className: `card ${r ? "card--highlight" : ""} ${l ?? ""}`,
    children: [
      m.jsx("div", { className: "text-sm text-gray-500", children: e }),
      t && m.jsx("div", { className: "text-xs text-gray-400", children: t }),
      m.jsx("div", { className: "text-xl font-semibold", children: n }),
    ],
  });
}
const we = (e) => {
  if (e === "" || e === null || e === void 0) return 0;
  const t = Number(e);
  return Number.isFinite(t) ? t : 0;
};
function dc(e) {
  const t = we(e.prixAchat),
    n = we(e.fraisNotairePct) / 100,
    r = we(e.travaux),
    l = t * n,
    u = t + l + r;
  return { fraisNotaire: l, coutTotal: u };
}
function Qd(e) {
  const { coutTotal: t, fraisNotaire: n } = dc(e),
    r = we(e.loyerMensuel),
    l = we(e.vacancePct) / 100,
    u = we(e.chargesNonRecupMensuelles),
    o = we(e.taxeFonciereAnnuelle),
    i = we(e.assuranceAnnuelle),
    s = we(e.autresChargesAnnuelles),
    f = we(e.mensualiteCredit),
    v = r * 12,
    h = v * (1 - l),
    p = o + i + s + u * 12,
    w = (v / Math.max(t, 1)) * 100,
    S = ((h - p) / Math.max(t, 1)) * 100,
    x = (h - p) / 12 - f;
  return {
    fraisNotaire: n,
    coutTotal: t,
    loyersAnnuelsBruts: v,
    loyersAnnuelsNetsVacance: h,
    chargesAnnuelles: p,
    rentabBrute: w,
    rentabNette: S,
    cashflowMensuelAvantImpots: x,
  };
}
function pc(e, t, n) {
  const r = Math.max(0, we(e)),
    l = we(t) / 100 / 12,
    u = Math.max(1, Math.round(we(n) * 12));
  let o;
  l === 0 ? (o = r / u) : (o = (r * l) / (1 - Math.pow(1 + l, -u)));
  const i = o * u,
    s = Math.max(0, i - r),
    f = o * 12;
  return { monthlyPayment: o, annualDebtService: f, totalInterest: s, totalPaid: i };
}
const V = (e) =>
    Number.isFinite(e) ? e.toLocaleString("fr-FR", { style: "currency", currency: "EUR" }) : "—",
  Qu = (e) => (Number.isFinite(e) ? `${e.toFixed(2)} %` : "—"),
  Cr = {
    prixAchat: 2e5,
    fraisNotairePct: 7.5,
    travaux: 1e4,
    loyerMensuel: 900,
    vacancePct: 5,
    chargesNonRecupMensuelles: 40,
    taxeFonciereAnnuelle: 900,
    assuranceAnnuelle: 120,
    autresChargesAnnuelles: 0,
    loanAmount: 0,
    loanRatePct: 3.5,
    loanYears: 25,
    mensualiteCredit: 0,
  },
  Yu = "immo-roi:form";
function Yd() {
  const [e, t] = Se.useState(() => {
    try {
      const o = localStorage.getItem(Yu),
        i = o ? JSON.parse(o) : void 0;
      return i ? { ...Cr, ...i } : Cr;
    } catch {
      return Cr;
    }
  });
  Se.useEffect(() => {
    localStorage.setItem(Yu, JSON.stringify(e));
  }, [e]);
  const n = (o, i) => t((s) => ({ ...s, [o]: i })),
    { coutTotal: r } = Se.useMemo(() => dc(e), [e.prixAchat, e.fraisNotairePct, e.travaux]),
    l = Se.useMemo(() => {
      const o = e.loanAmount > 0 ? e.loanAmount : r;
      return pc(o, e.loanRatePct, e.loanYears);
    }, [e.loanAmount, e.loanRatePct, e.loanYears, r]),
    u = Se.useMemo(() => {
      const o = { ...e, mensualiteCredit: l.monthlyPayment };
      return Qd(o);
    }, [e, l.monthlyPayment]);
  return (
    u.cashflowMensuelAvantImpots * 12,
    u.cashflowMensuelAvantImpots >= 0,
    m.jsx("div", {
      className: "mx-auto max-w-5xl px-4 py-8",
      children: m.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [
          m.jsxs("section", {
            className: "card",
            children: [
              m.jsx("h2", {
                className: "mb-4 text-center text-lg font-medium",
                children: "Paramètres — SCI",
              }),
              m.jsxs("div", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                children: [
                  m.jsx(I, {
                    label: "Prix d'achat (€)",
                    children: m.jsx(O, { value: e.prixAchat, onChange: (o) => n("prixAchat", o) }),
                  }),
                  m.jsx(I, {
                    label: "Frais de notaire (%)",
                    children: m.jsx(O, {
                      value: e.fraisNotairePct,
                      onChange: (o) => n("fraisNotairePct", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Travaux (€)",
                    children: m.jsx(O, { value: e.travaux, onChange: (o) => n("travaux", o) }),
                  }),
                  m.jsx(I, {
                    label: "Loyer mensuel brut (€)",
                    children: m.jsx(O, {
                      value: e.loyerMensuel,
                      onChange: (o) => n("loyerMensuel", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Vacance locative (%)",
                    children: m.jsx(O, {
                      value: e.vacancePct,
                      onChange: (o) => n("vacancePct", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Charges non récupérables (€/mois)",
                    children: m.jsx(O, {
                      value: e.chargesNonRecupMensuelles,
                      onChange: (o) => n("chargesNonRecupMensuelles", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Taxe foncière (€/an)",
                    children: m.jsx(O, {
                      value: e.taxeFonciereAnnuelle,
                      onChange: (o) => n("taxeFonciereAnnuelle", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Assurance PNO (€/an)",
                    children: m.jsx(O, {
                      value: e.assuranceAnnuelle,
                      onChange: (o) => n("assuranceAnnuelle", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Autres charges (€/an)",
                    children: m.jsx(O, {
                      value: e.autresChargesAnnuelles,
                      onChange: (o) => n("autresChargesAnnuelles", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Montant du prêt (€)",
                    children: m.jsx(O, {
                      value: e.loanAmount,
                      onChange: (o) => n("loanAmount", o),
                    }),
                  }),
                  m.jsx(I, {
                    label: "Durée du prêt (années)",
                    children: m.jsx(O, { value: e.loanYears, onChange: (o) => n("loanYears", o) }),
                  }),
                  m.jsx(I, {
                    label: "Taux du prêt (%)",
                    children: m.jsx(O, {
                      value: e.loanRatePct,
                      onChange: (o) => n("loanRatePct", o),
                    }),
                  }),
                ],
              }),
              m.jsxs("div", {
                className: "mt-4 flex justify-center gap-2",
                children: [
                  m.jsx("button", {
                    className: "btn",
                    onClick: () => t(Cr),
                    title: "Réinitialiser",
                    children: "Réinitialiser",
                  }),
                  m.jsx("button", {
                    className: "btn",
                    onClick: () => navigator.clipboard.writeText(JSON.stringify(e, null, 2)),
                    title: "Copier les paramètres",
                    children: "Copier",
                  }),
                ],
              }),
            ],
          }),
          m.jsxs("section", {
            className: "card",
            children: [
              m.jsx("h2", {
                className: "mb-4 text-center text-lg font-medium",
                children: "Résultats",
              }),
              (() => {
                const o = u.cashflowMensuelAvantImpots * 12,
                  i = u.cashflowMensuelAvantImpots >= 0,
                  s = o >= 0;
                return m.jsxs("div", {
                  className: "grid gap-4 sm:grid-cols-2",
                  children: [
                    m.jsx(D, {
                      title: "Coût total du projet",
                      subtitle: "Prix + notaire + travaux",
                      value: V(u.coutTotal),
                    }),
                    m.jsx(D, {
                      title: "Montant emprunté",
                      value: V(e.loanAmount && e.loanAmount > 0 ? e.loanAmount : u.coutTotal),
                    }),
                    m.jsx(D, {
                      title: `Mensualité (${e.loanYears} ans)`,
                      value: V(l.monthlyPayment),
                    }),
                    m.jsx(D, { title: "Annuité (12 × mensualité)", value: V(l.annualDebtService) }),
                    m.jsx(D, {
                      title: `Intérêts totaux (${e.loanYears} ans)`,
                      value: V(l.totalInterest),
                    }),
                    m.jsx(D, {
                      title: "Coût total du crédit",
                      subtitle: "Intérêts + principal",
                      value: V(l.totalPaid),
                    }),
                    m.jsx(D, { title: "Loyers annuels (bruts)", value: V(u.loyersAnnuelsBruts) }),
                    m.jsx(D, {
                      title: "Loyers annuels (après vacance)",
                      value: V(u.loyersAnnuelsNetsVacance),
                    }),
                    m.jsx(D, { title: "Charges annuelles", value: V(u.chargesAnnuelles) }),
                    m.jsx(D, {
                      title: "Cash-flow mensuel (après crédit)",
                      value: V(u.cashflowMensuelAvantImpots),
                      className: i
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-red-200 bg-red-50 text-red-900",
                    }),
                    m.jsx(D, {
                      title: "Cash-flow annuel (après crédit)",
                      value: V(o),
                      className: s
                        ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                        : "border-red-200 bg-red-50 text-red-900",
                    }),
                    m.jsx(D, { title: "Rentabilité brute", value: Qu(u.rentabBrute) }),
                    m.jsx(D, {
                      title: "Rentabilité nette (avant impôts)",
                      value: Qu(u.rentabNette),
                    }),
                  ],
                });
              })(),
              m.jsxs("div", {
                className: "mt-6 space-y-1 text-sm text-gray-600",
                children: [
                  m.jsx("p", { children: m.jsx("strong", { children: "Formules clés :" }) }),
                  m.jsxs("ul", {
                    className: "list-disc space-y-1 pl-5",
                    children: [
                      m.jsxs("li", {
                        children: [
                          "Mensualité = P × r / (1 − (1 + r)",
                          m.jsx("sup", { children: "−n" }),
                          ") (r = taux mensuel, n = nb mensualités)",
                        ],
                      }),
                      m.jsx("li", { children: "Annuité = 12 × mensualité" }),
                      m.jsx("li", { children: "Intérêts totaux = (mensualité × n) − P" }),
                      m.jsx("li", { children: "Cash-flow annuel = NOI − Annuité" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const bi = Yu + ":laundry",
  Jl = {
    openDays: 330,
    nbWashers: 6,
    washerPrice: 3.5,
    washerCyclesPerDay: 5,
    washerWaterPerCycleCost: 0.5,
    washerElecPerCycleCost: 0.3,
    nbDryers: 3,
    dryerPrice: 2.5,
    dryerCyclesPerDay: 6,
    dryerElecPerCycleCost: 0.8,
    otherChargesAnnual: 2e3,
    annualRentToSci: 9600,
    loanAmount: 5e4,
    loanRatePct: 3.5,
    loanYears: 7,
  };
function Kd() {
  const [e, t] = Se.useState(() => {
    try {
      const a = localStorage.getItem(bi),
        c = a ? JSON.parse(a) : void 0;
      return c ? { ...Jl, ...c } : Jl;
    } catch {
      return Jl;
    }
  });
  Se.useEffect(() => {
    localStorage.setItem(bi, JSON.stringify(e));
  }, [e]);
  const n = (a, c) => t((d) => ({ ...d, [a]: c })),
    r = e.nbWashers * e.washerCyclesPerDay * e.openDays,
    l = e.nbDryers * e.dryerCyclesPerDay * e.openDays,
    u = r * e.washerPrice,
    o = l * e.dryerPrice,
    i = u + o,
    s = r * e.washerWaterPerCycleCost,
    f = r * e.washerElecPerCycleCost + l * e.dryerElecPerCycleCost,
    v = s + f + e.otherChargesAnnual + e.annualRentToSci,
    h = Se.useMemo(
      () => pc(e.loanAmount, e.loanRatePct, e.loanYears),
      [e.loanAmount, e.loanRatePct, e.loanYears]
    ),
    p = i - v,
    w = p - h.annualDebtService,
    S = i > 0 ? (p / i) * 100 : 0,
    x = h.annualDebtService > 0 ? p / h.annualDebtService : 0,
    F = w >= 0;
  return m.jsx("div", {
    className: "mx-auto max-w-5xl px-4 py-8",
    children: m.jsxs("div", {
      className: "grid gap-6 lg:grid-cols-2",
      children: [
        m.jsxs("section", {
          className: "card",
          children: [
            m.jsx("h2", {
              className: "mb-4 text-center text-lg font-medium",
              children: "Paramètres — Laverie",
            }),
            m.jsxs("div", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
              children: [
                m.jsx(I, {
                  label: "Jours d’ouverture/an",
                  children: m.jsx(O, { value: e.openDays, onChange: (a) => n("openDays", a) }),
                }),
                m.jsx(I, {
                  label: "Nombre de lave-linge",
                  children: m.jsx(O, { value: e.nbWashers, onChange: (a) => n("nbWashers", a) }),
                }),
                m.jsx(I, {
                  label: "Prix cycle lave-linge (€)",
                  children: m.jsx(O, {
                    value: e.washerPrice,
                    onChange: (a) => n("washerPrice", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Cycles/jour/lave-linge",
                  children: m.jsx(O, {
                    value: e.washerCyclesPerDay,
                    onChange: (a) => n("washerCyclesPerDay", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Coût eau par cycle (LL) (€)",
                  children: m.jsx(O, {
                    value: e.washerWaterPerCycleCost,
                    onChange: (a) => n("washerWaterPerCycleCost", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Coût élec par cycle (LL) (€)",
                  children: m.jsx(O, {
                    value: e.washerElecPerCycleCost,
                    onChange: (a) => n("washerElecPerCycleCost", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Nombre de sèche-linge",
                  children: m.jsx(O, { value: e.nbDryers, onChange: (a) => n("nbDryers", a) }),
                }),
                m.jsx(I, {
                  label: "Prix cycle sèche-linge (€)",
                  children: m.jsx(O, { value: e.dryerPrice, onChange: (a) => n("dryerPrice", a) }),
                }),
                m.jsx(I, {
                  label: "Cycles/jour/sèche-linge",
                  children: m.jsx(O, {
                    value: e.dryerCyclesPerDay,
                    onChange: (a) => n("dryerCyclesPerDay", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Coût élec par cycle (SL) (€)",
                  children: m.jsx(O, {
                    value: e.dryerElecPerCycleCost,
                    onChange: (a) => n("dryerElecPerCycleCost", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Autres charges (€/an)",
                  children: m.jsx(O, {
                    value: e.otherChargesAnnual,
                    onChange: (a) => n("otherChargesAnnual", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Loyer annuel payé à la SCI (€/an)",
                  children: m.jsx(O, {
                    value: e.annualRentToSci,
                    onChange: (a) => n("annualRentToSci", a),
                  }),
                }),
                m.jsx(I, {
                  label: "Montant du prêt (€)",
                  children: m.jsx(O, { value: e.loanAmount, onChange: (a) => n("loanAmount", a) }),
                }),
                m.jsx(I, {
                  label: "Durée du prêt (années)",
                  children: m.jsx(O, { value: e.loanYears, onChange: (a) => n("loanYears", a) }),
                }),
                m.jsx(I, {
                  label: "Taux du prêt (%)",
                  children: m.jsx(O, {
                    value: e.loanRatePct,
                    onChange: (a) => n("loanRatePct", a),
                  }),
                }),
              ],
            }),
          ],
        }),
        m.jsxs("section", {
          className: "card",
          children: [
            m.jsx("h2", {
              className: "mb-4 text-center text-lg font-medium",
              children: "Résultats",
            }),
            m.jsxs("div", {
              className: "grid gap-4 sm:grid-cols-2",
              children: [
                m.jsx(D, { title: "CA lave-linge (annuel)", value: V(u) }),
                m.jsx(D, { title: "CA sèche-linge (annuel)", value: V(o) }),
                m.jsx(D, { title: "Chiffre d’affaires total (annuel)", value: V(i) }),
                m.jsx(D, { title: "Coût eau (annuel)", value: V(s) }),
                m.jsx(D, { title: "Coût électricité (annuel)", value: V(f) }),
                m.jsx(D, { title: "Autres charges (annuel)", value: V(e.otherChargesAnnual) }),
                m.jsx(D, { title: "Loyer SCI (annuel)", value: V(e.annualRentToSci) }),
                m.jsx(D, { title: "Charges totales (annuel)", value: V(v) }),
                m.jsx(D, { title: "EBITDA (avant crédit)", value: V(p) }),
                m.jsx(D, { title: "Marge EBITDA", value: Qu(S) }),
                m.jsx(D, { title: "Mensualité crédit", value: V(h.monthlyPayment) }),
                m.jsx(D, { title: "Annuité crédit", value: V(h.annualDebtService) }),
                m.jsx(D, { title: "Intérêts totaux", value: V(h.totalInterest) }),
                m.jsx(D, {
                  title: "Cash-flow net (après crédit, annuel)",
                  value: V(w),
                  className: F
                    ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                    : "border-red-200 bg-red-50 text-red-900",
                }),
                m.jsx(D, { title: "DSCR (EBITDA / Annuité)", value: x.toFixed(2) }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ku = [
    { key: "sci", label: "SCI", Component: Yd },
    { key: "laundry", label: "Laverie", Component: Kd },
  ],
  Xd = (e) => Ku.find((t) => t.key === e) ?? Ku[0];
function Gd() {
  const [e, t] = Se.useState("sci"),
    n = Xd(e).Component;
  return m.jsxs("div", {
    className: "flex min-h-screen flex-col",
    children: [
      m.jsx(Hd, {
        active: e,
        onChange: (r) => t(r),
        items: Ku.map(({ key: r, label: l }) => ({ key: r, label: l })),
      }),
      m.jsx("main", {
        className: "flex-1",
        children: m.jsx(Se.Suspense, {
          fallback: m.jsx("div", {
            className: "mx-auto max-w-5xl px-4 py-8",
            children: "Chargement…",
          }),
          children: m.jsx(n, {}),
        }),
      }),
    ],
  });
}
ql.createRoot(document.getElementById("root")).render(
  m.jsx(Lc.StrictMode, { children: m.jsx(Gd, {}) })
);
