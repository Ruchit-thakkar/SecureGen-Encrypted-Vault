(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) u(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const m of h.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && u(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function u(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = c(d);
    fetch(d.href, h);
  }
})();
function Wg(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var Yu = { exports: {} },
  fi = {};
var Oh;
function Pg() {
  if (Oh) return fi;
  Oh = 1;
  var n = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function c(u, d, h) {
    var m = null;
    if (
      (h !== void 0 && (m = "" + h),
      d.key !== void 0 && (m = "" + d.key),
      "key" in d)
    ) {
      h = {};
      for (var g in d) g !== "key" && (h[g] = d[g]);
    } else h = d;
    return (
      (d = h.ref),
      { $$typeof: n, type: u, key: m, ref: d !== void 0 ? d : null, props: h }
    );
  }
  return ((fi.Fragment = s), (fi.jsx = c), (fi.jsxs = c), fi);
}
var Mh;
function Ig() {
  return (Mh || ((Mh = 1), (Yu.exports = Pg())), Yu.exports);
}
var o = Ig(),
  Vu = { exports: {} },
  re = {};
var Dh;
function eb() {
  if (Dh) return re;
  Dh = 1;
  var n = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    m = Symbol.for("react.context"),
    g = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    x = Symbol.for("react.memo"),
    v = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    R = Symbol.iterator;
  function G(k) {
    return k === null || typeof k != "object"
      ? null
      : ((k = (R && k[R]) || k["@@iterator"]),
        typeof k == "function" ? k : null);
  }
  var A = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    T = {};
  function Y(k, B, Z) {
    ((this.props = k),
      (this.context = B),
      (this.refs = T),
      (this.updater = Z || A));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (k, B) {
      if (typeof k != "object" && typeof k != "function" && k != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, k, B, "setState");
    }),
    (Y.prototype.forceUpdate = function (k) {
      this.updater.enqueueForceUpdate(this, k, "forceUpdate");
    }));
  function V() {}
  V.prototype = Y.prototype;
  function X(k, B, Z) {
    ((this.props = k),
      (this.context = B),
      (this.refs = T),
      (this.updater = Z || A));
  }
  var ae = (X.prototype = new V());
  ((ae.constructor = X), H(ae, Y.prototype), (ae.isPureReactComponent = !0));
  var $ = Array.isArray;
  function ue() {}
  var D = { H: null, A: null, T: null, S: null },
    P = Object.prototype.hasOwnProperty;
  function ie(k, B, Z) {
    var K = Z.ref;
    return {
      $$typeof: n,
      type: k,
      key: B,
      ref: K !== void 0 ? K : null,
      props: Z,
    };
  }
  function Ke(k, B) {
    return ie(k.type, B, k.props);
  }
  function Je(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }
  function Oe(k) {
    var B = { "=": "=0", ":": "=2" };
    return (
      "$" +
      k.replace(/[=:]/g, function (Z) {
        return B[Z];
      })
    );
  }
  var at = /\/+/g;
  function Xe(k, B) {
    return typeof k == "object" && k !== null && k.key != null
      ? Oe("" + k.key)
      : B.toString(36);
  }
  function ot(k) {
    switch (k.status) {
      case "fulfilled":
        return k.value;
      case "rejected":
        throw k.reason;
      default:
        switch (
          (typeof k.status == "string"
            ? k.then(ue, ue)
            : ((k.status = "pending"),
              k.then(
                function (B) {
                  k.status === "pending" &&
                    ((k.status = "fulfilled"), (k.value = B));
                },
                function (B) {
                  k.status === "pending" &&
                    ((k.status = "rejected"), (k.reason = B));
                },
              )),
          k.status)
        ) {
          case "fulfilled":
            return k.value;
          case "rejected":
            throw k.reason;
        }
    }
    throw k;
  }
  function M(k, B, Z, K, ne) {
    var ce = typeof k;
    (ce === "undefined" || ce === "boolean") && (k = null);
    var we = !1;
    if (k === null) we = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (k.$$typeof) {
            case n:
            case s:
              we = !0;
              break;
            case v:
              return ((we = k._init), M(we(k._payload), B, Z, K, ne));
          }
      }
    if (we)
      return (
        (ne = ne(k)),
        (we = K === "" ? "." + Xe(k, 0) : K),
        $(ne)
          ? ((Z = ""),
            we != null && (Z = we.replace(at, "$&/") + "/"),
            M(ne, B, Z, "", function (yn) {
              return yn;
            }))
          : ne != null &&
            (Je(ne) &&
              (ne = Ke(
                ne,
                Z +
                  (ne.key == null || (k && k.key === ne.key)
                    ? ""
                    : ("" + ne.key).replace(at, "$&/") + "/") +
                  we,
              )),
            B.push(ne)),
        1
      );
    we = 0;
    var rt = K === "" ? "." : K + ":";
    if ($(k))
      for (var He = 0; He < k.length; He++)
        ((K = k[He]), (ce = rt + Xe(K, He)), (we += M(K, B, Z, ce, ne)));
    else if (((He = G(k)), typeof He == "function"))
      for (k = He.call(k), He = 0; !(K = k.next()).done; )
        ((K = K.value), (ce = rt + Xe(K, He++)), (we += M(K, B, Z, ce, ne)));
    else if (ce === "object") {
      if (typeof k.then == "function") return M(ot(k), B, Z, K, ne);
      throw (
        (B = String(k)),
        Error(
          "Objects are not valid as a React child (found: " +
            (B === "[object Object]"
              ? "object with keys {" + Object.keys(k).join(", ") + "}"
              : B) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return we;
  }
  function Q(k, B, Z) {
    if (k == null) return k;
    var K = [],
      ne = 0;
    return (
      M(k, K, "", "", function (ce) {
        return B.call(Z, ce, ne++);
      }),
      K
    );
  }
  function I(k) {
    if (k._status === -1) {
      var B = k._result;
      ((B = B()),
        B.then(
          function (Z) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 1), (k._result = Z));
          },
          function (Z) {
            (k._status === 0 || k._status === -1) &&
              ((k._status = 2), (k._result = Z));
          },
        ),
        k._status === -1 && ((k._status = 0), (k._result = B)));
    }
    if (k._status === 1) return k._result.default;
    throw k._result;
  }
  var ye =
      typeof reportError == "function"
        ? reportError
        : function (k) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof k == "object" &&
                  k !== null &&
                  typeof k.message == "string"
                    ? String(k.message)
                    : String(k),
                error: k,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", k);
              return;
            }
            console.error(k);
          },
    ke = {
      map: Q,
      forEach: function (k, B, Z) {
        Q(
          k,
          function () {
            B.apply(this, arguments);
          },
          Z,
        );
      },
      count: function (k) {
        var B = 0;
        return (
          Q(k, function () {
            B++;
          }),
          B
        );
      },
      toArray: function (k) {
        return (
          Q(k, function (B) {
            return B;
          }) || []
        );
      },
      only: function (k) {
        if (!Je(k))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return k;
      },
    };
  return (
    (re.Activity = y),
    (re.Children = ke),
    (re.Component = Y),
    (re.Fragment = c),
    (re.Profiler = d),
    (re.PureComponent = X),
    (re.StrictMode = u),
    (re.Suspense = b),
    (re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D),
    (re.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (k) {
        return D.H.useMemoCache(k);
      },
    }),
    (re.cache = function (k) {
      return function () {
        return k.apply(null, arguments);
      };
    }),
    (re.cacheSignal = function () {
      return null;
    }),
    (re.cloneElement = function (k, B, Z) {
      if (k == null)
        throw Error(
          "The argument must be a React element, but you passed " + k + ".",
        );
      var K = H({}, k.props),
        ne = k.key;
      if (B != null)
        for (ce in (B.key !== void 0 && (ne = "" + B.key), B))
          !P.call(B, ce) ||
            ce === "key" ||
            ce === "__self" ||
            ce === "__source" ||
            (ce === "ref" && B.ref === void 0) ||
            (K[ce] = B[ce]);
      var ce = arguments.length - 2;
      if (ce === 1) K.children = Z;
      else if (1 < ce) {
        for (var we = Array(ce), rt = 0; rt < ce; rt++)
          we[rt] = arguments[rt + 2];
        K.children = we;
      }
      return ie(k.type, ne, K);
    }),
    (re.createContext = function (k) {
      return (
        (k = {
          $$typeof: m,
          _currentValue: k,
          _currentValue2: k,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (k.Provider = k),
        (k.Consumer = { $$typeof: h, _context: k }),
        k
      );
    }),
    (re.createElement = function (k, B, Z) {
      var K,
        ne = {},
        ce = null;
      if (B != null)
        for (K in (B.key !== void 0 && (ce = "" + B.key), B))
          P.call(B, K) &&
            K !== "key" &&
            K !== "__self" &&
            K !== "__source" &&
            (ne[K] = B[K]);
      var we = arguments.length - 2;
      if (we === 1) ne.children = Z;
      else if (1 < we) {
        for (var rt = Array(we), He = 0; He < we; He++)
          rt[He] = arguments[He + 2];
        ne.children = rt;
      }
      if (k && k.defaultProps)
        for (K in ((we = k.defaultProps), we))
          ne[K] === void 0 && (ne[K] = we[K]);
      return ie(k, ce, ne);
    }),
    (re.createRef = function () {
      return { current: null };
    }),
    (re.forwardRef = function (k) {
      return { $$typeof: g, render: k };
    }),
    (re.isValidElement = Je),
    (re.lazy = function (k) {
      return { $$typeof: v, _payload: { _status: -1, _result: k }, _init: I };
    }),
    (re.memo = function (k, B) {
      return { $$typeof: x, type: k, compare: B === void 0 ? null : B };
    }),
    (re.startTransition = function (k) {
      var B = D.T,
        Z = {};
      D.T = Z;
      try {
        var K = k(),
          ne = D.S;
        (ne !== null && ne(Z, K),
          typeof K == "object" &&
            K !== null &&
            typeof K.then == "function" &&
            K.then(ue, ye));
      } catch (ce) {
        ye(ce);
      } finally {
        (B !== null && Z.types !== null && (B.types = Z.types), (D.T = B));
      }
    }),
    (re.unstable_useCacheRefresh = function () {
      return D.H.useCacheRefresh();
    }),
    (re.use = function (k) {
      return D.H.use(k);
    }),
    (re.useActionState = function (k, B, Z) {
      return D.H.useActionState(k, B, Z);
    }),
    (re.useCallback = function (k, B) {
      return D.H.useCallback(k, B);
    }),
    (re.useContext = function (k) {
      return D.H.useContext(k);
    }),
    (re.useDebugValue = function () {}),
    (re.useDeferredValue = function (k, B) {
      return D.H.useDeferredValue(k, B);
    }),
    (re.useEffect = function (k, B) {
      return D.H.useEffect(k, B);
    }),
    (re.useEffectEvent = function (k) {
      return D.H.useEffectEvent(k);
    }),
    (re.useId = function () {
      return D.H.useId();
    }),
    (re.useImperativeHandle = function (k, B, Z) {
      return D.H.useImperativeHandle(k, B, Z);
    }),
    (re.useInsertionEffect = function (k, B) {
      return D.H.useInsertionEffect(k, B);
    }),
    (re.useLayoutEffect = function (k, B) {
      return D.H.useLayoutEffect(k, B);
    }),
    (re.useMemo = function (k, B) {
      return D.H.useMemo(k, B);
    }),
    (re.useOptimistic = function (k, B) {
      return D.H.useOptimistic(k, B);
    }),
    (re.useReducer = function (k, B, Z) {
      return D.H.useReducer(k, B, Z);
    }),
    (re.useRef = function (k) {
      return D.H.useRef(k);
    }),
    (re.useState = function (k) {
      return D.H.useState(k);
    }),
    (re.useSyncExternalStore = function (k, B, Z) {
      return D.H.useSyncExternalStore(k, B, Z);
    }),
    (re.useTransition = function () {
      return D.H.useTransition();
    }),
    (re.version = "19.2.4"),
    re
  );
}
var Uh;
function pc() {
  return (Uh || ((Uh = 1), (Vu.exports = eb())), Vu.exports);
}
var j = pc();
const bi = Wg(j);
var Xu = { exports: {} },
  hi = {},
  Qu = { exports: {} },
  Zu = {};
var Hh;
function tb() {
  return (
    Hh ||
      ((Hh = 1),
      (function (n) {
        function s(M, Q) {
          var I = M.length;
          M.push(Q);
          e: for (; 0 < I; ) {
            var ye = (I - 1) >>> 1,
              ke = M[ye];
            if (0 < d(ke, Q)) ((M[ye] = Q), (M[I] = ke), (I = ye));
            else break e;
          }
        }
        function c(M) {
          return M.length === 0 ? null : M[0];
        }
        function u(M) {
          if (M.length === 0) return null;
          var Q = M[0],
            I = M.pop();
          if (I !== Q) {
            M[0] = I;
            e: for (var ye = 0, ke = M.length, k = ke >>> 1; ye < k; ) {
              var B = 2 * (ye + 1) - 1,
                Z = M[B],
                K = B + 1,
                ne = M[K];
              if (0 > d(Z, I))
                K < ke && 0 > d(ne, Z)
                  ? ((M[ye] = ne), (M[K] = I), (ye = K))
                  : ((M[ye] = Z), (M[B] = I), (ye = B));
              else if (K < ke && 0 > d(ne, I))
                ((M[ye] = ne), (M[K] = I), (ye = K));
              else break e;
            }
          }
          return Q;
        }
        function d(M, Q) {
          var I = M.sortIndex - Q.sortIndex;
          return I !== 0 ? I : M.id - Q.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          n.unstable_now = function () {
            return h.now();
          };
        } else {
          var m = Date,
            g = m.now();
          n.unstable_now = function () {
            return m.now() - g;
          };
        }
        var b = [],
          x = [],
          v = 1,
          y = null,
          R = 3,
          G = !1,
          A = !1,
          H = !1,
          T = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function ae(M) {
          for (var Q = c(x); Q !== null; ) {
            if (Q.callback === null) u(x);
            else if (Q.startTime <= M)
              (u(x), (Q.sortIndex = Q.expirationTime), s(b, Q));
            else break;
            Q = c(x);
          }
        }
        function $(M) {
          if (((H = !1), ae(M), !A))
            if (c(b) !== null) ((A = !0), ue || ((ue = !0), Oe()));
            else {
              var Q = c(x);
              Q !== null && ot($, Q.startTime - M);
            }
        }
        var ue = !1,
          D = -1,
          P = 5,
          ie = -1;
        function Ke() {
          return T ? !0 : !(n.unstable_now() - ie < P);
        }
        function Je() {
          if (((T = !1), ue)) {
            var M = n.unstable_now();
            ie = M;
            var Q = !0;
            try {
              e: {
                ((A = !1), H && ((H = !1), V(D), (D = -1)), (G = !0));
                var I = R;
                try {
                  t: {
                    for (
                      ae(M), y = c(b);
                      y !== null && !(y.expirationTime > M && Ke());
                    ) {
                      var ye = y.callback;
                      if (typeof ye == "function") {
                        ((y.callback = null), (R = y.priorityLevel));
                        var ke = ye(y.expirationTime <= M);
                        if (((M = n.unstable_now()), typeof ke == "function")) {
                          ((y.callback = ke), ae(M), (Q = !0));
                          break t;
                        }
                        (y === c(b) && u(b), ae(M));
                      } else u(b);
                      y = c(b);
                    }
                    if (y !== null) Q = !0;
                    else {
                      var k = c(x);
                      (k !== null && ot($, k.startTime - M), (Q = !1));
                    }
                  }
                  break e;
                } finally {
                  ((y = null), (R = I), (G = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? Oe() : (ue = !1);
            }
          }
        }
        var Oe;
        if (typeof X == "function")
          Oe = function () {
            X(Je);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            Xe = at.port2;
          ((at.port1.onmessage = Je),
            (Oe = function () {
              Xe.postMessage(null);
            }));
        } else
          Oe = function () {
            Y(Je, 0);
          };
        function ot(M, Q) {
          D = Y(function () {
            M(n.unstable_now());
          }, Q);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (n.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (P = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (n.unstable_next = function (M) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = R;
            }
            var I = R;
            R = Q;
            try {
              return M();
            } finally {
              R = I;
            }
          }),
          (n.unstable_requestPaint = function () {
            T = !0;
          }),
          (n.unstable_runWithPriority = function (M, Q) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var I = R;
            R = M;
            try {
              return Q();
            } finally {
              R = I;
            }
          }),
          (n.unstable_scheduleCallback = function (M, Q, I) {
            var ye = n.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? ye + I : ye))
                : (I = ye),
              M)
            ) {
              case 1:
                var ke = -1;
                break;
              case 2:
                ke = 250;
                break;
              case 5:
                ke = 1073741823;
                break;
              case 4:
                ke = 1e4;
                break;
              default:
                ke = 5e3;
            }
            return (
              (ke = I + ke),
              (M = {
                id: v++,
                callback: Q,
                priorityLevel: M,
                startTime: I,
                expirationTime: ke,
                sortIndex: -1,
              }),
              I > ye
                ? ((M.sortIndex = I),
                  s(x, M),
                  c(b) === null &&
                    M === c(x) &&
                    (H ? (V(D), (D = -1)) : (H = !0), ot($, I - ye)))
                : ((M.sortIndex = ke),
                  s(b, M),
                  A || G || ((A = !0), ue || ((ue = !0), Oe()))),
              M
            );
          }),
          (n.unstable_shouldYield = Ke),
          (n.unstable_wrapCallback = function (M) {
            var Q = R;
            return function () {
              var I = R;
              R = Q;
              try {
                return M.apply(this, arguments);
              } finally {
                R = I;
              }
            };
          }));
      })(Zu)),
    Zu
  );
}
var Lh;
function ab() {
  return (Lh || ((Lh = 1), (Qu.exports = tb())), Qu.exports);
}
var $u = { exports: {} },
  lt = {};
var Bh;
function lb() {
  if (Bh) return lt;
  Bh = 1;
  var n = pc();
  function s(b) {
    var x = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        x += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      x +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var u = {
      d: {
        f: c,
        r: function () {
          throw Error(s(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function h(b, x, v) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: y == null ? null : "" + y,
      children: b,
      containerInfo: x,
      implementation: v,
    };
  }
  var m = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(b, x) {
    if (b === "font") return "";
    if (typeof x == "string") return x === "use-credentials" ? x : "";
  }
  return (
    (lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (lt.createPortal = function (b, x) {
      var v =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(s(299));
      return h(b, x, null, v);
    }),
    (lt.flushSync = function (b) {
      var x = m.T,
        v = u.p;
      try {
        if (((m.T = null), (u.p = 2), b)) return b();
      } finally {
        ((m.T = x), (u.p = v), u.d.f());
      }
    }),
    (lt.preconnect = function (b, x) {
      typeof b == "string" &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == "string"
                ? x === "use-credentials"
                  ? x
                  : ""
                : void 0))
          : (x = null),
        u.d.C(b, x));
    }),
    (lt.prefetchDNS = function (b) {
      typeof b == "string" && u.d.D(b);
    }),
    (lt.preinit = function (b, x) {
      if (typeof b == "string" && x && typeof x.as == "string") {
        var v = x.as,
          y = g(v, x.crossOrigin),
          R = typeof x.integrity == "string" ? x.integrity : void 0,
          G = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        v === "style"
          ? u.d.S(b, typeof x.precedence == "string" ? x.precedence : void 0, {
              crossOrigin: y,
              integrity: R,
              fetchPriority: G,
            })
          : v === "script" &&
            u.d.X(b, {
              crossOrigin: y,
              integrity: R,
              fetchPriority: G,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
      }
    }),
    (lt.preinitModule = function (b, x) {
      if (typeof b == "string")
        if (typeof x == "object" && x !== null) {
          if (x.as == null || x.as === "script") {
            var v = g(x.as, x.crossOrigin);
            u.d.M(b, {
              crossOrigin: v,
              integrity: typeof x.integrity == "string" ? x.integrity : void 0,
              nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            });
          }
        } else x == null && u.d.M(b);
    }),
    (lt.preload = function (b, x) {
      if (
        typeof b == "string" &&
        typeof x == "object" &&
        x !== null &&
        typeof x.as == "string"
      ) {
        var v = x.as,
          y = g(v, x.crossOrigin);
        u.d.L(b, v, {
          crossOrigin: y,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0,
        });
      }
    }),
    (lt.preloadModule = function (b, x) {
      if (typeof b == "string")
        if (x) {
          var v = g(x.as, x.crossOrigin);
          u.d.m(b, {
            as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
            crossOrigin: v,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          });
        } else u.d.m(b);
    }),
    (lt.requestFormReset = function (b) {
      u.d.r(b);
    }),
    (lt.unstable_batchedUpdates = function (b, x) {
      return b(x);
    }),
    (lt.useFormState = function (b, x, v) {
      return m.H.useFormState(b, x, v);
    }),
    (lt.useFormStatus = function () {
      return m.H.useHostTransitionStatus();
    }),
    (lt.version = "19.2.4"),
    lt
  );
}
var qh;
function nb() {
  if (qh) return $u.exports;
  qh = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (s) {
        console.error(s);
      }
  }
  return (n(), ($u.exports = lb()), $u.exports);
}
var Gh;
function ib() {
  if (Gh) return hi;
  Gh = 1;
  var n = ab(),
    s = pc(),
    c = nb();
  function u(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (h(e) !== e) throw Error(u(188));
  }
  function x(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var i = a.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (((l = i.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === a) return (b(i), e);
          if (r === l) return (b(i), t);
          r = r.sibling;
        }
        throw Error(u(188));
      }
      if (a.return !== l.return) ((a = i), (l = r));
      else {
        for (var f = !1, p = i.child; p; ) {
          if (p === a) {
            ((f = !0), (a = i), (l = r));
            break;
          }
          if (p === l) {
            ((f = !0), (l = i), (a = r));
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = r.child; p; ) {
            if (p === a) {
              ((f = !0), (a = r), (l = i));
              break;
            }
            if (p === l) {
              ((f = !0), (l = r), (a = i));
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(u(189));
        }
      }
      if (a.alternate !== l) throw Error(u(190));
    }
    if (a.tag !== 3) throw Error(u(188));
    return a.stateNode.current === a ? e : t;
  }
  function v(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = v(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var y = Object.assign,
    R = Symbol.for("react.element"),
    G = Symbol.for("react.transitional.element"),
    A = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    T = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    ae = Symbol.for("react.forward_ref"),
    $ = Symbol.for("react.suspense"),
    ue = Symbol.for("react.suspense_list"),
    D = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    ie = Symbol.for("react.activity"),
    Ke = Symbol.for("react.memo_cache_sentinel"),
    Je = Symbol.iterator;
  function Oe(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Je && e[Je]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var at = Symbol.for("react.client.reference");
  function Xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === at ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case Y:
        return "Profiler";
      case T:
        return "StrictMode";
      case $:
        return "Suspense";
      case ue:
        return "SuspenseList";
      case ie:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case A:
          return "Portal";
        case X:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case D:
          return (
            (t = e.displayName || null),
            t !== null ? t : Xe(e.type) || "Memo"
          );
        case P:
          ((t = e._payload), (e = e._init));
          try {
            return Xe(e(t));
          } catch {}
      }
    return null;
  }
  var ot = Array.isArray,
    M = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    ye = [],
    ke = -1;
  function k(e) {
    return { current: e };
  }
  function B(e) {
    0 > ke || ((e.current = ye[ke]), (ye[ke] = null), ke--);
  }
  function Z(e, t) {
    (ke++, (ye[ke] = e.current), (e.current = t));
  }
  var K = k(null),
    ne = k(null),
    ce = k(null),
    we = k(null);
  function rt(e, t) {
    switch ((Z(ce, t), Z(ne, e), Z(K, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ah(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = ah(t)), (e = lh(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (B(K), Z(K, e));
  }
  function He() {
    (B(K), B(ne), B(ce));
  }
  function yn(e) {
    e.memoizedState !== null && Z(we, e);
    var t = K.current,
      a = lh(t, e.type);
    t !== a && (Z(ne, e), Z(K, a));
  }
  function Ai(e) {
    (ne.current === e && (B(K), B(ne)),
      we.current === e && (B(we), (oi._currentValue = I)));
  }
  var Ss, Rc;
  function Ia(e) {
    if (Ss === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Ss = (t && t[1]) || ""),
          (Rc =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ss +
      e +
      Rc
    );
  }
  var js = !1;
  function Ns(e, t) {
    if (!e || js) return "";
    js = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var q = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(q.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(q, []);
                } catch (O) {
                  var _ = O;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (O) {
                  _ = O;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (O) {
                _ = O;
              }
              (q = e()) &&
                typeof q.catch == "function" &&
                q.catch(function () {});
            }
          } catch (O) {
            if (O && _ && typeof O.stack == "string") return [O.stack, _.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name",
      );
      i &&
        i.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = l.DetermineComponentFrameRoot(),
        f = r[0],
        p = r[1];
      if (f && p) {
        var w = f.split(`
`),
          E = p.split(`
`);
        for (
          i = l = 0;
          l < w.length && !w[l].includes("DetermineComponentFrameRoot");
        )
          l++;
        for (; i < E.length && !E[i].includes("DetermineComponentFrameRoot"); )
          i++;
        if (l === w.length || i === E.length)
          for (
            l = w.length - 1, i = E.length - 1;
            1 <= l && 0 <= i && w[l] !== E[i];
          )
            i--;
        for (; 1 <= l && 0 <= i; l--, i--)
          if (w[l] !== E[i]) {
            if (l !== 1 || i !== 1)
              do
                if ((l--, i--, 0 > i || w[l] !== E[i])) {
                  var U =
                    `
` + w[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", e.displayName)),
                    U
                  );
                }
              while (1 <= l && 0 <= i);
            break;
          }
      }
    } finally {
      ((js = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Ia(a) : "";
  }
  function _p(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ia(e.type);
      case 16:
        return Ia("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ia("Suspense Fallback")
          : Ia("Suspense");
      case 19:
        return Ia("SuspenseList");
      case 0:
      case 15:
        return Ns(e.type, !1);
      case 11:
        return Ns(e.type.render, !1);
      case 1:
        return Ns(e.type, !0);
      case 31:
        return Ia("Activity");
      default:
        return "";
    }
  }
  function Cc(e) {
    try {
      var t = "",
        a = null;
      do ((t += _p(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var zs = Object.prototype.hasOwnProperty,
    Es = n.unstable_scheduleCallback,
    _s = n.unstable_cancelCallback,
    Ap = n.unstable_shouldYield,
    Tp = n.unstable_requestPaint,
    bt = n.unstable_now,
    Rp = n.unstable_getCurrentPriorityLevel,
    Oc = n.unstable_ImmediatePriority,
    Mc = n.unstable_UserBlockingPriority,
    Ti = n.unstable_NormalPriority,
    Cp = n.unstable_LowPriority,
    Dc = n.unstable_IdlePriority,
    Op = n.log,
    Mp = n.unstable_setDisableYieldValue,
    vn = null,
    yt = null;
  function za(e) {
    if (
      (typeof Op == "function" && Mp(e),
      yt && typeof yt.setStrictMode == "function")
    )
      try {
        yt.setStrictMode(vn, e);
      } catch {}
  }
  var vt = Math.clz32 ? Math.clz32 : Hp,
    Dp = Math.log,
    Up = Math.LN2;
  function Hp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Dp(e) / Up) | 0)) | 0);
  }
  var Ri = 256,
    Ci = 262144,
    Oi = 4194304;
  function el(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Mi(e, t, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var i = 0,
      r = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var p = l & 134217727;
    return (
      p !== 0
        ? ((l = p & ~r),
          l !== 0
            ? (i = el(l))
            : ((f &= p),
              f !== 0
                ? (i = el(f))
                : a || ((a = p & ~e), a !== 0 && (i = el(a)))))
        : ((p = l & ~r),
          p !== 0
            ? (i = el(p))
            : f !== 0
              ? (i = el(f))
              : a || ((a = l & ~e), a !== 0 && (i = el(a)))),
      i === 0
        ? 0
        : t !== 0 &&
            t !== i &&
            (t & r) === 0 &&
            ((r = i & -i),
            (a = t & -t),
            r >= a || (r === 32 && (a & 4194048) !== 0))
          ? t
          : i
    );
  }
  function wn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Lp(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Uc() {
    var e = Oi;
    return ((Oi <<= 1), (Oi & 62914560) === 0 && (Oi = 4194304), e);
  }
  function As(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function kn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Bp(e, t, a, l, i, r) {
    var f = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var p = e.entanglements,
      w = e.expirationTimes,
      E = e.hiddenUpdates;
    for (a = f & ~a; 0 < a; ) {
      var U = 31 - vt(a),
        q = 1 << U;
      ((p[U] = 0), (w[U] = -1));
      var _ = E[U];
      if (_ !== null)
        for (E[U] = null, U = 0; U < _.length; U++) {
          var O = _[U];
          O !== null && (O.lane &= -536870913);
        }
      a &= ~q;
    }
    (l !== 0 && Hc(e, l, 0),
      r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t)));
  }
  function Hc(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - vt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 261930)));
  }
  function Lc(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - vt(a),
        i = 1 << l;
      ((i & t) | (e[l] & t) && (e[l] |= t), (a &= ~i));
    }
  }
  function Bc(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Ts(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Ts(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Rs(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function qc() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : zh(e.type));
  }
  function Gc(e, t) {
    var a = Q.p;
    try {
      return ((Q.p = e), t());
    } finally {
      Q.p = a;
    }
  }
  var Ea = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + Ea,
    ut = "__reactProps$" + Ea,
    Sl = "__reactContainer$" + Ea,
    Cs = "__reactEvents$" + Ea,
    qp = "__reactListeners$" + Ea,
    Gp = "__reactHandles$" + Ea,
    Yc = "__reactResources$" + Ea,
    Sn = "__reactMarker$" + Ea;
  function Os(e) {
    (delete e[Fe], delete e[ut], delete e[Cs], delete e[qp], delete e[Gp]);
  }
  function jl(e) {
    var t = e[Fe];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[Sl] || a[Fe])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = ch(e); e !== null; ) {
            if ((a = e[Fe])) return a;
            e = ch(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function Nl(e) {
    if ((e = e[Fe] || e[Sl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function jn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(u(33));
  }
  function zl(e) {
    var t = e[Yc];
    return (
      t ||
        (t = e[Yc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ze(e) {
    e[Sn] = !0;
  }
  var Vc = new Set(),
    Xc = {};
  function tl(e, t) {
    (El(e, t), El(e + "Capture", t));
  }
  function El(e, t) {
    for (Xc[e] = t, e = 0; e < t.length; e++) Vc.add(t[e]);
  }
  var Yp = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Qc = {},
    Zc = {};
  function Vp(e) {
    return zs.call(Zc, e)
      ? !0
      : zs.call(Qc, e)
        ? !1
        : Yp.test(e)
          ? (Zc[e] = !0)
          : ((Qc[e] = !0), !1);
  }
  function Di(e, t, a) {
    if (Vp(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function Ui(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function aa(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function At(e) {
    switch (typeof e) {
      case "bigint":
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
  function $c(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xp(e, t, a) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var i = l.get,
        r = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (f) {
            ((a = "" + f), r.call(this, f));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Ms(e) {
    if (!e._valueTracker) {
      var t = $c(e) ? "checked" : "value";
      e._valueTracker = Xp(e, t, "" + e[t]);
    }
  }
  function Kc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = $c(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function Hi(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Qp = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(Qp, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ds(e, t, a, l, i, r, f, p) {
    ((e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + At(t))
          : e.value !== "" + At(t) && (e.value = "" + At(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? Us(e, f, At(t))
        : a != null
          ? Us(e, f, At(a))
          : l != null && e.removeAttribute("value"),
      i == null && r != null && (e.defaultChecked = !!r),
      i != null &&
        (e.checked = i && typeof i != "function" && typeof i != "symbol"),
      p != null &&
      typeof p != "function" &&
      typeof p != "symbol" &&
      typeof p != "boolean"
        ? (e.name = "" + At(p))
        : e.removeAttribute("name"));
  }
  function Jc(e, t, a, l, i, r, f, p) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.type = r),
      t != null || a != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || t != null)) {
        Ms(e);
        return;
      }
      ((a = a != null ? "" + At(a) : ""),
        (t = t != null ? "" + At(t) : a),
        p || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? i),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = p ? e.checked : !!l),
      (e.defaultChecked = !!l),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f),
      Ms(e));
  }
  function Us(e, t, a) {
    (t === "number" && Hi(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function _l(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < a.length; i++) t["$" + a[i]] = !0;
      for (a = 0; a < e.length; a++)
        ((i = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== i && (e[a].selected = i),
          i && l && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + At(a), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === a) {
          ((e[i].selected = !0), l && (e[i].defaultSelected = !0));
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fc(e, t, a) {
    if (
      t != null &&
      ((t = "" + At(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + At(a) : "";
  }
  function Wc(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(u(92));
        if (ot(l)) {
          if (1 < l.length) throw Error(u(93));
          l = l[0];
        }
        a = l;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = At(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l),
      Ms(e));
  }
  function Al(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Zp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Pc(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : l
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Zp.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Ic(e, t, a) {
    if (t != null && typeof t != "object") throw Error(u(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
              ? (e.cssFloat = "")
              : (e[l] = ""));
      for (var i in t)
        ((l = t[i]), t.hasOwnProperty(i) && a[i] !== l && Pc(e, i, l));
    } else for (var r in t) t.hasOwnProperty(r) && Pc(e, r, t[r]);
  }
  function Hs(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var $p = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Kp =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Li(e) {
    return Kp.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function la() {}
  var Ls = null;
  function Bs(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Tl = null,
    Rl = null;
  function ed(e) {
    var t = Nl(e);
    if (t && (e = t.stateNode)) {
      var a = e[ut] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Ds(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + Tt("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var i = l[ut] || null;
                if (!i) throw Error(u(90));
                Ds(
                  l,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((l = a[t]), l.form === e.form && Kc(l));
          }
          break e;
        case "textarea":
          Fc(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && _l(e, !!a.multiple, t, !1));
      }
    }
  }
  var qs = !1;
  function td(e, t, a) {
    if (qs) return e(t, a);
    qs = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((qs = !1),
        (Tl !== null || Rl !== null) &&
          (Nr(), Tl && ((t = Tl), (e = Rl), (Rl = Tl = null), ed(t), e)))
      )
        for (t = 0; t < e.length; t++) ed(e[t]);
    }
  }
  function Nn(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[ut] || null;
    if (l === null) return null;
    a = l[t];
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
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(u(231, t, typeof a));
    return a;
  }
  var na = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Gs = !1;
  if (na)
    try {
      var zn = {};
      (Object.defineProperty(zn, "passive", {
        get: function () {
          Gs = !0;
        },
      }),
        window.addEventListener("test", zn, zn),
        window.removeEventListener("test", zn, zn));
    } catch {
      Gs = !1;
    }
  var _a = null,
    Ys = null,
    Bi = null;
  function ad() {
    if (Bi) return Bi;
    var e,
      t = Ys,
      a = t.length,
      l,
      i = "value" in _a ? _a.value : _a.textContent,
      r = i.length;
    for (e = 0; e < a && t[e] === i[e]; e++);
    var f = a - e;
    for (l = 1; l <= f && t[a - l] === i[r - l]; l++);
    return (Bi = i.slice(e, 1 < l ? 1 - l : void 0));
  }
  function qi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Gi() {
    return !0;
  }
  function ld() {
    return !1;
  }
  function ct(e) {
    function t(a, l, i, r, f) {
      ((this._reactName = a),
        (this._targetInst = i),
        (this.type = l),
        (this.nativeEvent = r),
        (this.target = f),
        (this.currentTarget = null));
      for (var p in e)
        e.hasOwnProperty(p) && ((a = e[p]), (this[p] = a ? a(r) : r[p]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Gi
          : ld),
        (this.isPropagationStopped = ld),
        this
      );
    }
    return (
      y(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Gi));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Gi));
        },
        persist: function () {},
        isPersistent: Gi,
      }),
      t
    );
  }
  var al = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Yi = ct(al),
    En = y({}, al, { view: 0, detail: 0 }),
    Jp = ct(En),
    Vs,
    Xs,
    _n,
    Vi = y({}, En, {
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
      getModifierState: Zs,
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
          : (e !== _n &&
              (_n && e.type === "mousemove"
                ? ((Vs = e.screenX - _n.screenX), (Xs = e.screenY - _n.screenY))
                : (Xs = Vs = 0),
              (_n = e)),
            Vs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Xs;
      },
    }),
    nd = ct(Vi),
    Fp = y({}, Vi, { dataTransfer: 0 }),
    Wp = ct(Fp),
    Pp = y({}, En, { relatedTarget: 0 }),
    Qs = ct(Pp),
    Ip = y({}, al, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ex = ct(Ip),
    tx = y({}, al, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ax = ct(tx),
    lx = y({}, al, { data: 0 }),
    id = ct(lx),
    nx = {
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
    ix = {
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
    rx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function sx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = rx[e])
        ? !!t[e]
        : !1;
  }
  function Zs() {
    return sx;
  }
  var ox = y({}, En, {
      key: function (e) {
        if (e.key) {
          var t = nx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? ix[e.keyCode] || "Unidentified"
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
      getModifierState: Zs,
      charCode: function (e) {
        return e.type === "keypress" ? qi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? qi(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    ux = ct(ox),
    cx = y({}, Vi, {
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
    rd = ct(cx),
    dx = y({}, En, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zs,
    }),
    fx = ct(dx),
    hx = y({}, al, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mx = ct(hx),
    px = y({}, Vi, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
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
    xx = ct(px),
    gx = y({}, al, { newState: 0, oldState: 0 }),
    bx = ct(gx),
    yx = [9, 13, 27, 32],
    $s = na && "CompositionEvent" in window,
    An = null;
  na && "documentMode" in document && (An = document.documentMode);
  var vx = na && "TextEvent" in window && !An,
    sd = na && (!$s || (An && 8 < An && 11 >= An)),
    od = " ",
    ud = !1;
  function cd(e, t) {
    switch (e) {
      case "keyup":
        return yx.indexOf(t.keyCode) !== -1;
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
  function dd(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Cl = !1;
  function wx(e, t) {
    switch (e) {
      case "compositionend":
        return dd(t);
      case "keypress":
        return t.which !== 32 ? null : ((ud = !0), od);
      case "textInput":
        return ((e = t.data), e === od && ud ? null : e);
      default:
        return null;
    }
  }
  function kx(e, t) {
    if (Cl)
      return e === "compositionend" || (!$s && cd(e, t))
        ? ((e = ad()), (Bi = Ys = _a = null), (Cl = !1), e)
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
        return sd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Sx = {
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
  function fd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Sx[e.type] : t === "textarea";
  }
  function hd(e, t, a, l) {
    (Tl ? (Rl ? Rl.push(l) : (Rl = [l])) : (Tl = l),
      (t = Cr(t, "onChange")),
      0 < t.length &&
        ((a = new Yi("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t })));
  }
  var Tn = null,
    Rn = null;
  function jx(e) {
    F0(e, 0);
  }
  function Xi(e) {
    var t = jn(e);
    if (Kc(t)) return e;
  }
  function md(e, t) {
    if (e === "change") return t;
  }
  var pd = !1;
  if (na) {
    var Ks;
    if (na) {
      var Js = "oninput" in document;
      if (!Js) {
        var xd = document.createElement("div");
        (xd.setAttribute("oninput", "return;"),
          (Js = typeof xd.oninput == "function"));
      }
      Ks = Js;
    } else Ks = !1;
    pd = Ks && (!document.documentMode || 9 < document.documentMode);
  }
  function gd() {
    Tn && (Tn.detachEvent("onpropertychange", bd), (Rn = Tn = null));
  }
  function bd(e) {
    if (e.propertyName === "value" && Xi(Rn)) {
      var t = [];
      (hd(t, Rn, e, Bs(e)), td(jx, t));
    }
  }
  function Nx(e, t, a) {
    e === "focusin"
      ? (gd(), (Tn = t), (Rn = a), Tn.attachEvent("onpropertychange", bd))
      : e === "focusout" && gd();
  }
  function zx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xi(Rn);
  }
  function Ex(e, t) {
    if (e === "click") return Xi(t);
  }
  function _x(e, t) {
    if (e === "input" || e === "change") return Xi(t);
  }
  function Ax(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == "function" ? Object.is : Ax;
  function Cn(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var i = a[l];
      if (!zs.call(t, i) || !wt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function yd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function vd(e, t) {
    var a = yd(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = yd(a);
    }
  }
  function wd(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? wd(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function kd(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Hi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = Hi(e.document);
    }
    return t;
  }
  function Fs(e) {
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
  var Tx = na && "documentMode" in document && 11 >= document.documentMode,
    Ol = null,
    Ws = null,
    On = null,
    Ps = !1;
  function Sd(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Ps ||
      Ol == null ||
      Ol !== Hi(l) ||
      ((l = Ol),
      "selectionStart" in l && Fs(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (On && Cn(On, l)) ||
        ((On = l),
        (l = Cr(Ws, "onSelect")),
        0 < l.length &&
          ((t = new Yi("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = Ol))));
  }
  function ll(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Ml = {
      animationend: ll("Animation", "AnimationEnd"),
      animationiteration: ll("Animation", "AnimationIteration"),
      animationstart: ll("Animation", "AnimationStart"),
      transitionrun: ll("Transition", "TransitionRun"),
      transitionstart: ll("Transition", "TransitionStart"),
      transitioncancel: ll("Transition", "TransitionCancel"),
      transitionend: ll("Transition", "TransitionEnd"),
    },
    Is = {},
    jd = {};
  na &&
    ((jd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ml.animationend.animation,
      delete Ml.animationiteration.animation,
      delete Ml.animationstart.animation),
    "TransitionEvent" in window || delete Ml.transitionend.transition);
  function nl(e) {
    if (Is[e]) return Is[e];
    if (!Ml[e]) return e;
    var t = Ml[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in jd) return (Is[e] = t[a]);
    return e;
  }
  var Nd = nl("animationend"),
    zd = nl("animationiteration"),
    Ed = nl("animationstart"),
    Rx = nl("transitionrun"),
    Cx = nl("transitionstart"),
    Ox = nl("transitioncancel"),
    _d = nl("transitionend"),
    Ad = new Map(),
    eo =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  eo.push("scrollEnd");
  function Yt(e, t) {
    (Ad.set(e, t), tl(t, [e]));
  }
  var Qi =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Rt = [],
    Dl = 0,
    to = 0;
  function Zi() {
    for (var e = Dl, t = (to = Dl = 0); t < e; ) {
      var a = Rt[t];
      Rt[t++] = null;
      var l = Rt[t];
      Rt[t++] = null;
      var i = Rt[t];
      Rt[t++] = null;
      var r = Rt[t];
      if (((Rt[t++] = null), l !== null && i !== null)) {
        var f = l.pending;
        (f === null ? (i.next = i) : ((i.next = f.next), (f.next = i)),
          (l.pending = i));
      }
      r !== 0 && Td(a, i, r);
    }
  }
  function $i(e, t, a, l) {
    ((Rt[Dl++] = e),
      (Rt[Dl++] = t),
      (Rt[Dl++] = a),
      (Rt[Dl++] = l),
      (to |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function ao(e, t, a, l) {
    return ($i(e, t, a, l), Ki(e));
  }
  function il(e, t) {
    return ($i(e, null, null, t), Ki(e));
  }
  function Td(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var i = !1, r = e.return; r !== null; )
      ((r.childLanes |= a),
        (l = r.alternate),
        l !== null && (l.childLanes |= a),
        r.tag === 22 &&
          ((e = r.stateNode), e === null || e._visibility & 1 || (i = !0)),
        (e = r),
        (r = r.return));
    return e.tag === 3
      ? ((r = e.stateNode),
        i &&
          t !== null &&
          ((i = 31 - vt(a)),
          (e = r.hiddenUpdates),
          (l = e[i]),
          l === null ? (e[i] = [t]) : l.push(t),
          (t.lane = a | 536870912)),
        r)
      : null;
  }
  function Ki(e) {
    if (50 < ti) throw ((ti = 0), (fu = null), Error(u(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ul = {};
  function Mx(e, t, a, l) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function kt(e, t, a, l) {
    return new Mx(e, t, a, l);
  }
  function lo(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function ia(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = kt(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Rd(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Ji(e, t, a, l, i, r) {
    var f = 0;
    if (((l = e), typeof e == "function")) lo(e) && (f = 1);
    else if (typeof e == "string")
      f = Bg(e, a, K.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ie:
          return (
            (e = kt(31, a, t, i)),
            (e.elementType = ie),
            (e.lanes = r),
            e
          );
        case H:
          return rl(a.children, i, r, t);
        case T:
          ((f = 8), (i |= 24));
          break;
        case Y:
          return (
            (e = kt(12, a, t, i | 2)),
            (e.elementType = Y),
            (e.lanes = r),
            e
          );
        case $:
          return ((e = kt(13, a, t, i)), (e.elementType = $), (e.lanes = r), e);
        case ue:
          return (
            (e = kt(19, a, t, i)),
            (e.elementType = ue),
            (e.lanes = r),
            e
          );
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
                f = 10;
                break e;
              case V:
                f = 9;
                break e;
              case ae:
                f = 11;
                break e;
              case D:
                f = 14;
                break e;
              case P:
                ((f = 16), (l = null));
                break e;
            }
          ((f = 29),
            (a = Error(u(130, e === null ? "null" : typeof e, ""))),
            (l = null));
      }
    return (
      (t = kt(f, a, t, i)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = r),
      t
    );
  }
  function rl(e, t, a, l) {
    return ((e = kt(7, e, l, t)), (e.lanes = a), e);
  }
  function no(e, t, a) {
    return ((e = kt(6, e, null, t)), (e.lanes = a), e);
  }
  function Cd(e) {
    var t = kt(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function io(e, t, a) {
    return (
      (t = kt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Od = new WeakMap();
  function Ct(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Od.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: Cc(t) }), Od.set(e, t), t);
    }
    return { value: e, source: t, stack: Cc(t) };
  }
  var Hl = [],
    Ll = 0,
    Fi = null,
    Mn = 0,
    Ot = [],
    Mt = 0,
    Aa = null,
    Jt = 1,
    Ft = "";
  function ra(e, t) {
    ((Hl[Ll++] = Mn), (Hl[Ll++] = Fi), (Fi = e), (Mn = t));
  }
  function Md(e, t, a) {
    ((Ot[Mt++] = Jt), (Ot[Mt++] = Ft), (Ot[Mt++] = Aa), (Aa = e));
    var l = Jt;
    e = Ft;
    var i = 32 - vt(l) - 1;
    ((l &= ~(1 << i)), (a += 1));
    var r = 32 - vt(t) + i;
    if (30 < r) {
      var f = i - (i % 5);
      ((r = (l & ((1 << f) - 1)).toString(32)),
        (l >>= f),
        (i -= f),
        (Jt = (1 << (32 - vt(t) + i)) | (a << i) | l),
        (Ft = r + e));
    } else ((Jt = (1 << r) | (a << i) | l), (Ft = e));
  }
  function ro(e) {
    e.return !== null && (ra(e, 1), Md(e, 1, 0));
  }
  function so(e) {
    for (; e === Fi; )
      ((Fi = Hl[--Ll]), (Hl[Ll] = null), (Mn = Hl[--Ll]), (Hl[Ll] = null));
    for (; e === Aa; )
      ((Aa = Ot[--Mt]),
        (Ot[Mt] = null),
        (Ft = Ot[--Mt]),
        (Ot[Mt] = null),
        (Jt = Ot[--Mt]),
        (Ot[Mt] = null));
  }
  function Dd(e, t) {
    ((Ot[Mt++] = Jt),
      (Ot[Mt++] = Ft),
      (Ot[Mt++] = Aa),
      (Jt = t.id),
      (Ft = t.overflow),
      (Aa = e));
  }
  var We = null,
    Ae = null,
    pe = !1,
    Ta = null,
    Dt = !1,
    oo = Error(u(519));
  function Ra(e) {
    var t = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Dn(Ct(t, e)), oo);
  }
  function Ud(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[Fe] = e), (t[ut] = l), a)) {
      case "dialog":
        (fe("cancel", t), fe("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        fe("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < li.length; a++) fe(li[a], t);
        break;
      case "source":
        fe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (fe("error", t), fe("load", t));
        break;
      case "details":
        fe("toggle", t);
        break;
      case "input":
        (fe("invalid", t),
          Jc(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case "select":
        fe("invalid", t);
        break;
      case "textarea":
        (fe("invalid", t), Wc(t, l.value, l.defaultValue, l.children));
    }
    ((a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      eh(t.textContent, a)
        ? (l.popover != null && (fe("beforetoggle", t), fe("toggle", t)),
          l.onScroll != null && fe("scroll", t),
          l.onScrollEnd != null && fe("scrollend", t),
          l.onClick != null && (t.onclick = la),
          (t = !0))
        : (t = !1),
      t || Ra(e, !0));
  }
  function Hd(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 31:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          We = We.return;
      }
  }
  function Bl(e) {
    if (e !== We) return !1;
    if (!pe) return (Hd(e), (pe = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Eu(e.type, e.memoizedProps))),
        (a = !a)),
      a && Ae && Ra(e),
      Hd(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ae = uh(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      Ae = uh(e);
    } else
      t === 27
        ? ((t = Ae), Qa(e.type) ? ((e = Cu), (Cu = null), (Ae = e)) : (Ae = t))
        : (Ae = We ? Ht(e.stateNode.nextSibling) : null);
    return !0;
  }
  function sl() {
    ((Ae = We = null), (pe = !1));
  }
  function uo() {
    var e = Ta;
    return (
      e !== null &&
        (mt === null ? (mt = e) : mt.push.apply(mt, e), (Ta = null)),
      e
    );
  }
  function Dn(e) {
    Ta === null ? (Ta = [e]) : Ta.push(e);
  }
  var co = k(null),
    ol = null,
    sa = null;
  function Ca(e, t, a) {
    (Z(co, t._currentValue), (t._currentValue = a));
  }
  function oa(e) {
    ((e._currentValue = co.current), B(co));
  }
  function fo(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function ho(e, t, a, l) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var f = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var p = r;
          r = i;
          for (var w = 0; w < t.length; w++)
            if (p.context === t[w]) {
              ((r.lanes |= a),
                (p = r.alternate),
                p !== null && (p.lanes |= a),
                fo(r.return, a, e),
                l || (f = null));
              break e;
            }
          r = p.next;
        }
      } else if (i.tag === 18) {
        if (((f = i.return), f === null)) throw Error(u(341));
        ((f.lanes |= a),
          (r = f.alternate),
          r !== null && (r.lanes |= a),
          fo(f, a, e),
          (f = null));
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((i = f.sibling), i !== null)) {
            ((i.return = f.return), (f = i));
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function ql(e, t, a, l) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(u(387));
        if (((f = f.memoizedProps), f !== null)) {
          var p = i.type;
          wt(i.pendingProps.value, f.value) ||
            (e !== null ? e.push(p) : (e = [p]));
        }
      } else if (i === we.current) {
        if (((f = i.alternate), f === null)) throw Error(u(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
          (e !== null ? e.push(oi) : (e = [oi]));
      }
      i = i.return;
    }
    (e !== null && ho(t, e, a, l), (t.flags |= 262144));
  }
  function Wi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ul(e) {
    ((ol = e),
      (sa = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Pe(e) {
    return Ld(ol, e);
  }
  function Pi(e, t) {
    return (ol === null && ul(e), Ld(e, t));
  }
  function Ld(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), sa === null)) {
      if (e === null) throw Error(u(308));
      ((sa = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else sa = sa.next = t;
    return a;
  }
  var Dx =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    Ux = n.unstable_scheduleCallback,
    Hx = n.unstable_NormalPriority,
    qe = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function mo() {
    return { controller: new Dx(), data: new Map(), refCount: 0 };
  }
  function Un(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Ux(Hx, function () {
          e.controller.abort();
        }));
  }
  var Hn = null,
    po = 0,
    Gl = 0,
    Yl = null;
  function Lx(e, t) {
    if (Hn === null) {
      var a = (Hn = []);
      ((po = 0),
        (Gl = bu()),
        (Yl = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        }));
    }
    return (po++, t.then(Bd, Bd), t);
  }
  function Bd() {
    if (--po === 0 && Hn !== null) {
      Yl !== null && (Yl.status = "fulfilled");
      var e = Hn;
      ((Hn = null), (Gl = 0), (Yl = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Bx(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (i) {
          a.push(i);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = "fulfilled"), (l.value = t));
          for (var i = 0; i < a.length; i++) (0, a[i])(t);
        },
        function (i) {
          for (l.status = "rejected", l.reason = i, i = 0; i < a.length; i++)
            (0, a[i])(void 0);
        },
      ),
      l
    );
  }
  var qd = M.S;
  M.S = function (e, t) {
    ((j0 = bt()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Lx(e, t),
      qd !== null && qd(e, t));
  };
  var cl = k(null);
  function xo() {
    var e = cl.current;
    return e !== null ? e : _e.pooledCache;
  }
  function Ii(e, t) {
    t === null ? Z(cl, cl.current) : Z(cl, t.pool);
  }
  function Gd() {
    var e = xo();
    return e === null ? null : { parent: qe._currentValue, pool: e };
  }
  var Vl = Error(u(460)),
    go = Error(u(474)),
    er = Error(u(542)),
    tr = { then: function () {} };
  function Yd(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Vd(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(la, la), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Qd(e), e);
      default:
        if (typeof t.status == "string") t.then(la, la);
        else {
          if (((e = _e), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "fulfilled"), (i.value = l));
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var i = t;
                  ((i.status = "rejected"), (i.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Qd(e), e);
        }
        throw ((fl = t), Vl);
    }
  }
  function dl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((fl = a), Vl)
        : a;
    }
  }
  var fl = null;
  function Xd() {
    if (fl === null) throw Error(u(459));
    var e = fl;
    return ((fl = null), e);
  }
  function Qd(e) {
    if (e === Vl || e === er) throw Error(u(483));
  }
  var Xl = null,
    Ln = 0;
  function ar(e) {
    var t = Ln;
    return ((Ln += 1), Xl === null && (Xl = []), Vd(Xl, e, t));
  }
  function Bn(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function lr(e, t) {
    throw t.$$typeof === R
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          u(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Zd(e) {
    function t(N, S) {
      if (e) {
        var z = N.deletions;
        z === null ? ((N.deletions = [S]), (N.flags |= 16)) : z.push(S);
      }
    }
    function a(N, S) {
      if (!e) return null;
      for (; S !== null; ) (t(N, S), (S = S.sibling));
      return null;
    }
    function l(N) {
      for (var S = new Map(); N !== null; )
        (N.key !== null ? S.set(N.key, N) : S.set(N.index, N), (N = N.sibling));
      return S;
    }
    function i(N, S) {
      return ((N = ia(N, S)), (N.index = 0), (N.sibling = null), N);
    }
    function r(N, S, z) {
      return (
        (N.index = z),
        e
          ? ((z = N.alternate),
            z !== null
              ? ((z = z.index), z < S ? ((N.flags |= 67108866), S) : z)
              : ((N.flags |= 67108866), S))
          : ((N.flags |= 1048576), S)
      );
    }
    function f(N) {
      return (e && N.alternate === null && (N.flags |= 67108866), N);
    }
    function p(N, S, z, L) {
      return S === null || S.tag !== 6
        ? ((S = no(z, N.mode, L)), (S.return = N), S)
        : ((S = i(S, z)), (S.return = N), S);
    }
    function w(N, S, z, L) {
      var ee = z.type;
      return ee === H
        ? U(N, S, z.props.children, L, z.key)
        : S !== null &&
            (S.elementType === ee ||
              (typeof ee == "object" &&
                ee !== null &&
                ee.$$typeof === P &&
                dl(ee) === S.type))
          ? ((S = i(S, z.props)), Bn(S, z), (S.return = N), S)
          : ((S = Ji(z.type, z.key, z.props, null, N.mode, L)),
            Bn(S, z),
            (S.return = N),
            S);
    }
    function E(N, S, z, L) {
      return S === null ||
        S.tag !== 4 ||
        S.stateNode.containerInfo !== z.containerInfo ||
        S.stateNode.implementation !== z.implementation
        ? ((S = io(z, N.mode, L)), (S.return = N), S)
        : ((S = i(S, z.children || [])), (S.return = N), S);
    }
    function U(N, S, z, L, ee) {
      return S === null || S.tag !== 7
        ? ((S = rl(z, N.mode, L, ee)), (S.return = N), S)
        : ((S = i(S, z)), (S.return = N), S);
    }
    function q(N, S, z) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((S = no("" + S, N.mode, z)), (S.return = N), S);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case G:
            return (
              (z = Ji(S.type, S.key, S.props, null, N.mode, z)),
              Bn(z, S),
              (z.return = N),
              z
            );
          case A:
            return ((S = io(S, N.mode, z)), (S.return = N), S);
          case P:
            return ((S = dl(S)), q(N, S, z));
        }
        if (ot(S) || Oe(S))
          return ((S = rl(S, N.mode, z, null)), (S.return = N), S);
        if (typeof S.then == "function") return q(N, ar(S), z);
        if (S.$$typeof === X) return q(N, Pi(N, S), z);
        lr(N, S);
      }
      return null;
    }
    function _(N, S, z, L) {
      var ee = S !== null ? S.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ee !== null ? null : p(N, S, "" + z, L);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case G:
            return z.key === ee ? w(N, S, z, L) : null;
          case A:
            return z.key === ee ? E(N, S, z, L) : null;
          case P:
            return ((z = dl(z)), _(N, S, z, L));
        }
        if (ot(z) || Oe(z)) return ee !== null ? null : U(N, S, z, L, null);
        if (typeof z.then == "function") return _(N, S, ar(z), L);
        if (z.$$typeof === X) return _(N, S, Pi(N, z), L);
        lr(N, z);
      }
      return null;
    }
    function O(N, S, z, L, ee) {
      if (
        (typeof L == "string" && L !== "") ||
        typeof L == "number" ||
        typeof L == "bigint"
      )
        return ((N = N.get(z) || null), p(S, N, "" + L, ee));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case G:
            return (
              (N = N.get(L.key === null ? z : L.key) || null),
              w(S, N, L, ee)
            );
          case A:
            return (
              (N = N.get(L.key === null ? z : L.key) || null),
              E(S, N, L, ee)
            );
          case P:
            return ((L = dl(L)), O(N, S, z, L, ee));
        }
        if (ot(L) || Oe(L))
          return ((N = N.get(z) || null), U(S, N, L, ee, null));
        if (typeof L.then == "function") return O(N, S, z, ar(L), ee);
        if (L.$$typeof === X) return O(N, S, z, Pi(S, L), ee);
        lr(S, L);
      }
      return null;
    }
    function J(N, S, z, L) {
      for (
        var ee = null, ge = null, W = S, oe = (S = 0), me = null;
        W !== null && oe < z.length;
        oe++
      ) {
        W.index > oe ? ((me = W), (W = null)) : (me = W.sibling);
        var be = _(N, W, z[oe], L);
        if (be === null) {
          W === null && (W = me);
          break;
        }
        (e && W && be.alternate === null && t(N, W),
          (S = r(be, S, oe)),
          ge === null ? (ee = be) : (ge.sibling = be),
          (ge = be),
          (W = me));
      }
      if (oe === z.length) return (a(N, W), pe && ra(N, oe), ee);
      if (W === null) {
        for (; oe < z.length; oe++)
          ((W = q(N, z[oe], L)),
            W !== null &&
              ((S = r(W, S, oe)),
              ge === null ? (ee = W) : (ge.sibling = W),
              (ge = W)));
        return (pe && ra(N, oe), ee);
      }
      for (W = l(W); oe < z.length; oe++)
        ((me = O(W, N, oe, z[oe], L)),
          me !== null &&
            (e &&
              me.alternate !== null &&
              W.delete(me.key === null ? oe : me.key),
            (S = r(me, S, oe)),
            ge === null ? (ee = me) : (ge.sibling = me),
            (ge = me)));
      return (
        e &&
          W.forEach(function (Fa) {
            return t(N, Fa);
          }),
        pe && ra(N, oe),
        ee
      );
    }
    function te(N, S, z, L) {
      if (z == null) throw Error(u(151));
      for (
        var ee = null, ge = null, W = S, oe = (S = 0), me = null, be = z.next();
        W !== null && !be.done;
        oe++, be = z.next()
      ) {
        W.index > oe ? ((me = W), (W = null)) : (me = W.sibling);
        var Fa = _(N, W, be.value, L);
        if (Fa === null) {
          W === null && (W = me);
          break;
        }
        (e && W && Fa.alternate === null && t(N, W),
          (S = r(Fa, S, oe)),
          ge === null ? (ee = Fa) : (ge.sibling = Fa),
          (ge = Fa),
          (W = me));
      }
      if (be.done) return (a(N, W), pe && ra(N, oe), ee);
      if (W === null) {
        for (; !be.done; oe++, be = z.next())
          ((be = q(N, be.value, L)),
            be !== null &&
              ((S = r(be, S, oe)),
              ge === null ? (ee = be) : (ge.sibling = be),
              (ge = be)));
        return (pe && ra(N, oe), ee);
      }
      for (W = l(W); !be.done; oe++, be = z.next())
        ((be = O(W, N, oe, be.value, L)),
          be !== null &&
            (e &&
              be.alternate !== null &&
              W.delete(be.key === null ? oe : be.key),
            (S = r(be, S, oe)),
            ge === null ? (ee = be) : (ge.sibling = be),
            (ge = be)));
      return (
        e &&
          W.forEach(function (Fg) {
            return t(N, Fg);
          }),
        pe && ra(N, oe),
        ee
      );
    }
    function Ee(N, S, z, L) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === H &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case G:
            e: {
              for (var ee = z.key; S !== null; ) {
                if (S.key === ee) {
                  if (((ee = z.type), ee === H)) {
                    if (S.tag === 7) {
                      (a(N, S.sibling),
                        (L = i(S, z.props.children)),
                        (L.return = N),
                        (N = L));
                      break e;
                    }
                  } else if (
                    S.elementType === ee ||
                    (typeof ee == "object" &&
                      ee !== null &&
                      ee.$$typeof === P &&
                      dl(ee) === S.type)
                  ) {
                    (a(N, S.sibling),
                      (L = i(S, z.props)),
                      Bn(L, z),
                      (L.return = N),
                      (N = L));
                    break e;
                  }
                  a(N, S);
                  break;
                } else t(N, S);
                S = S.sibling;
              }
              z.type === H
                ? ((L = rl(z.props.children, N.mode, L, z.key)),
                  (L.return = N),
                  (N = L))
                : ((L = Ji(z.type, z.key, z.props, null, N.mode, L)),
                  Bn(L, z),
                  (L.return = N),
                  (N = L));
            }
            return f(N);
          case A:
            e: {
              for (ee = z.key; S !== null; ) {
                if (S.key === ee)
                  if (
                    S.tag === 4 &&
                    S.stateNode.containerInfo === z.containerInfo &&
                    S.stateNode.implementation === z.implementation
                  ) {
                    (a(N, S.sibling),
                      (L = i(S, z.children || [])),
                      (L.return = N),
                      (N = L));
                    break e;
                  } else {
                    a(N, S);
                    break;
                  }
                else t(N, S);
                S = S.sibling;
              }
              ((L = io(z, N.mode, L)), (L.return = N), (N = L));
            }
            return f(N);
          case P:
            return ((z = dl(z)), Ee(N, S, z, L));
        }
        if (ot(z)) return J(N, S, z, L);
        if (Oe(z)) {
          if (((ee = Oe(z)), typeof ee != "function")) throw Error(u(150));
          return ((z = ee.call(z)), te(N, S, z, L));
        }
        if (typeof z.then == "function") return Ee(N, S, ar(z), L);
        if (z.$$typeof === X) return Ee(N, S, Pi(N, z), L);
        lr(N, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          S !== null && S.tag === 6
            ? (a(N, S.sibling), (L = i(S, z)), (L.return = N), (N = L))
            : (a(N, S), (L = no(z, N.mode, L)), (L.return = N), (N = L)),
          f(N))
        : a(N, S);
    }
    return function (N, S, z, L) {
      try {
        Ln = 0;
        var ee = Ee(N, S, z, L);
        return ((Xl = null), ee);
      } catch (W) {
        if (W === Vl || W === er) throw W;
        var ge = kt(29, W, null, N.mode);
        return ((ge.lanes = L), (ge.return = N), ge);
      }
    };
  }
  var hl = Zd(!0),
    $d = Zd(!1),
    Oa = !1;
  function bo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function yo(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Ma(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Da(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ve & 2) !== 0)) {
      var i = l.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (l.pending = t),
        (t = Ki(e)),
        Td(e, null, a),
        t
      );
    }
    return ($i(e, l, t, a), Ki(e));
  }
  function qn(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Lc(e, a));
    }
  }
  function vo(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var i = null,
        r = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var f = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (r === null ? (i = r = f) : (r = r.next = f), (a = a.next));
        } while (a !== null);
        r === null ? (i = r = t) : (r = r.next = t);
      } else i = r = t;
      ((a = {
        baseState: l.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var wo = !1;
  function Gn() {
    if (wo) {
      var e = Yl;
      if (e !== null) throw e;
    }
  }
  function Yn(e, t, a, l) {
    wo = !1;
    var i = e.updateQueue;
    Oa = !1;
    var r = i.firstBaseUpdate,
      f = i.lastBaseUpdate,
      p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var w = p,
        E = w.next;
      ((w.next = null), f === null ? (r = E) : (f.next = E), (f = w));
      var U = e.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (p = U.lastBaseUpdate),
        p !== f &&
          (p === null ? (U.firstBaseUpdate = E) : (p.next = E),
          (U.lastBaseUpdate = w)));
    }
    if (r !== null) {
      var q = i.baseState;
      ((f = 0), (U = E = w = null), (p = r));
      do {
        var _ = p.lane & -536870913,
          O = _ !== p.lane;
        if (O ? (he & _) === _ : (l & _) === _) {
          (_ !== 0 && _ === Gl && (wo = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: p.tag,
                  payload: p.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var J = e,
              te = p;
            _ = t;
            var Ee = a;
            switch (te.tag) {
              case 1:
                if (((J = te.payload), typeof J == "function")) {
                  q = J.call(Ee, q, _);
                  break e;
                }
                q = J;
                break e;
              case 3:
                J.flags = (J.flags & -65537) | 128;
              case 0:
                if (
                  ((J = te.payload),
                  (_ = typeof J == "function" ? J.call(Ee, q, _) : J),
                  _ == null)
                )
                  break e;
                q = y({}, q, _);
                break e;
              case 2:
                Oa = !0;
            }
          }
          ((_ = p.callback),
            _ !== null &&
              ((e.flags |= 64),
              O && (e.flags |= 8192),
              (O = i.callbacks),
              O === null ? (i.callbacks = [_]) : O.push(_)));
        } else
          ((O = {
            lane: _,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            U === null ? ((E = U = O), (w = q)) : (U = U.next = O),
            (f |= _));
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break;
          ((O = p),
            (p = O.next),
            (O.next = null),
            (i.lastBaseUpdate = O),
            (i.shared.pending = null));
        }
      } while (!0);
      (U === null && (w = q),
        (i.baseState = w),
        (i.firstBaseUpdate = E),
        (i.lastBaseUpdate = U),
        r === null && (i.shared.lanes = 0),
        (qa |= f),
        (e.lanes = f),
        (e.memoizedState = q));
    }
  }
  function Kd(e, t) {
    if (typeof e != "function") throw Error(u(191, e));
    e.call(t);
  }
  function Jd(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) Kd(a[e], t);
  }
  var Ql = k(null),
    nr = k(0);
  function Fd(e, t) {
    ((e = ga), Z(nr, e), Z(Ql, t), (ga = e | t.baseLanes));
  }
  function ko() {
    (Z(nr, ga), Z(Ql, Ql.current));
  }
  function So() {
    ((ga = nr.current), B(Ql), B(nr));
  }
  var St = k(null),
    Ut = null;
  function Ua(e) {
    var t = e.alternate;
    (Z(Le, Le.current & 1),
      Z(St, e),
      Ut === null &&
        (t === null || Ql.current !== null || t.memoizedState !== null) &&
        (Ut = e));
  }
  function jo(e) {
    (Z(Le, Le.current), Z(St, e), Ut === null && (Ut = e));
  }
  function Wd(e) {
    e.tag === 22
      ? (Z(Le, Le.current), Z(St, e), Ut === null && (Ut = e))
      : Ha();
  }
  function Ha() {
    (Z(Le, Le.current), Z(St, St.current));
  }
  function jt(e) {
    (B(St), Ut === e && (Ut = null), B(Le));
  }
  var Le = k(0);
  function ir(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Tu(a) || Ru(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
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
  var ua = 0,
    se = null,
    Ne = null,
    Ge = null,
    rr = !1,
    Zl = !1,
    ml = !1,
    sr = 0,
    Vn = 0,
    $l = null,
    qx = 0;
  function Me() {
    throw Error(u(321));
  }
  function No(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!wt(e[a], t[a])) return !1;
    return !0;
  }
  function zo(e, t, a, l, i, r) {
    return (
      (ua = r),
      (se = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? Df : Go),
      (ml = !1),
      (r = a(l, i)),
      (ml = !1),
      Zl && (r = Id(t, a, l, i)),
      Pd(e),
      r
    );
  }
  function Pd(e) {
    M.H = Zn;
    var t = Ne !== null && Ne.next !== null;
    if (((ua = 0), (Ge = Ne = se = null), (rr = !1), (Vn = 0), ($l = null), t))
      throw Error(u(300));
    e === null ||
      Ye ||
      ((e = e.dependencies), e !== null && Wi(e) && (Ye = !0));
  }
  function Id(e, t, a, l) {
    se = e;
    var i = 0;
    do {
      if ((Zl && ($l = null), (Vn = 0), (Zl = !1), 25 <= i))
        throw Error(u(301));
      if (((i += 1), (Ge = Ne = null), e.updateQueue != null)) {
        var r = e.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((M.H = Uf), (r = t(a, l)));
    } while (Zl);
    return r;
  }
  function Gx() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Xn(t) : t),
      (e = e.useState()[0]),
      (Ne !== null ? Ne.memoizedState : null) !== e && (se.flags |= 1024),
      t
    );
  }
  function Eo() {
    var e = sr !== 0;
    return ((sr = 0), e);
  }
  function _o(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function Ao(e) {
    if (rr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      rr = !1;
    }
    ((ua = 0), (Ge = Ne = se = null), (Zl = !1), (Vn = sr = 0), ($l = null));
  }
  function st() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ge === null ? (se.memoizedState = Ge = e) : (Ge = Ge.next = e), Ge);
  }
  function Be() {
    if (Ne === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Ge === null ? se.memoizedState : Ge.next;
    if (t !== null) ((Ge = t), (Ne = e));
    else {
      if (e === null)
        throw se.alternate === null ? Error(u(467)) : Error(u(310));
      ((Ne = e),
        (e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null,
        }),
        Ge === null ? (se.memoizedState = Ge = e) : (Ge = Ge.next = e));
    }
    return Ge;
  }
  function or() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Xn(e) {
    var t = Vn;
    return (
      (Vn += 1),
      $l === null && ($l = []),
      (e = Vd($l, e, t)),
      (t = se),
      (Ge === null ? t.memoizedState : Ge.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? Df : Go)),
      e
    );
  }
  function ur(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Xn(e);
      if (e.$$typeof === X) return Pe(e);
    }
    throw Error(u(438, String(e)));
  }
  function To(e) {
    var t = null,
      a = se.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = se.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (i) {
                return i.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = or()), (se.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = Ke;
    return (t.index++, a);
  }
  function ca(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function cr(e) {
    var t = Be();
    return Ro(t, Ne, e);
  }
  function Ro(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(u(311));
    l.lastRenderedReducer = a;
    var i = e.baseQueue,
      r = l.pending;
    if (r !== null) {
      if (i !== null) {
        var f = i.next;
        ((i.next = r.next), (r.next = f));
      }
      ((t.baseQueue = i = r), (l.pending = null));
    }
    if (((r = e.baseState), i === null)) e.memoizedState = r;
    else {
      t = i.next;
      var p = (f = null),
        w = null,
        E = t,
        U = !1;
      do {
        var q = E.lane & -536870913;
        if (q !== E.lane ? (he & q) === q : (ua & q) === q) {
          var _ = E.revertLane;
          if (_ === 0)
            (w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: E.action,
                  hasEagerState: E.hasEagerState,
                  eagerState: E.eagerState,
                  next: null,
                }),
              q === Gl && (U = !0));
          else if ((ua & _) === _) {
            ((E = E.next), _ === Gl && (U = !0));
            continue;
          } else
            ((q = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null,
            }),
              w === null ? ((p = w = q), (f = r)) : (w = w.next = q),
              (se.lanes |= _),
              (qa |= _));
          ((q = E.action),
            ml && a(r, q),
            (r = E.hasEagerState ? E.eagerState : a(r, q)));
        } else
          ((_ = {
            lane: q,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null,
          }),
            w === null ? ((p = w = _), (f = r)) : (w = w.next = _),
            (se.lanes |= q),
            (qa |= q));
        E = E.next;
      } while (E !== null && E !== t);
      if (
        (w === null ? (f = r) : (w.next = p),
        !wt(r, e.memoizedState) && ((Ye = !0), U && ((a = Yl), a !== null)))
      )
        throw a;
      ((e.memoizedState = r),
        (e.baseState = f),
        (e.baseQueue = w),
        (l.lastRenderedState = r));
    }
    return (i === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Co(e) {
    var t = Be(),
      a = t.queue;
    if (a === null) throw Error(u(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      i = a.pending,
      r = t.memoizedState;
    if (i !== null) {
      a.pending = null;
      var f = (i = i.next);
      do ((r = e(r, f.action)), (f = f.next));
      while (f !== i);
      (wt(r, t.memoizedState) || (Ye = !0),
        (t.memoizedState = r),
        t.baseQueue === null && (t.baseState = r),
        (a.lastRenderedState = r));
    }
    return [r, l];
  }
  function ef(e, t, a) {
    var l = se,
      i = Be(),
      r = pe;
    if (r) {
      if (a === void 0) throw Error(u(407));
      a = a();
    } else a = t();
    var f = !wt((Ne || i).memoizedState, a);
    if (
      (f && ((i.memoizedState = a), (Ye = !0)),
      (i = i.queue),
      Do(lf.bind(null, l, i, e), [e]),
      i.getSnapshot !== t || f || (Ge !== null && Ge.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Kl(9, { destroy: void 0 }, af.bind(null, l, i, a, t), null),
        _e === null)
      )
        throw Error(u(349));
      r || (ua & 127) !== 0 || tf(l, t, a);
    }
    return a;
  }
  function tf(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = se.updateQueue),
      t === null
        ? ((t = or()), (se.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function af(e, t, a, l) {
    ((t.value = a), (t.getSnapshot = l), nf(t) && rf(e));
  }
  function lf(e, t, a) {
    return a(function () {
      nf(t) && rf(e);
    });
  }
  function nf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !wt(e, a);
    } catch {
      return !0;
    }
  }
  function rf(e) {
    var t = il(e, 2);
    t !== null && pt(t, e, 2);
  }
  function Oo(e) {
    var t = st();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), ml)) {
        za(!0);
        try {
          a();
        } finally {
          za(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ca,
        lastRenderedState: e,
      }),
      t
    );
  }
  function sf(e, t, a, l) {
    return ((e.baseState = a), Ro(e, Ne, typeof l == "function" ? l : ca));
  }
  function Yx(e, t, a, l, i) {
    if (hr(e)) throw Error(u(485));
    if (((e = t.action), e !== null)) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          r.listeners.push(f);
        },
      };
      (M.T !== null ? a(!0) : (r.isTransition = !1),
        l(r),
        (a = t.pending),
        a === null
          ? ((r.next = t.pending = r), of(t, r))
          : ((r.next = a.next), (t.pending = a.next = r)));
    }
  }
  function of(e, t) {
    var a = t.action,
      l = t.payload,
      i = e.state;
    if (t.isTransition) {
      var r = M.T,
        f = {};
      M.T = f;
      try {
        var p = a(i, l),
          w = M.S;
        (w !== null && w(f, p), uf(e, t, p));
      } catch (E) {
        Mo(e, t, E);
      } finally {
        (r !== null && f.types !== null && (r.types = f.types), (M.T = r));
      }
    } else
      try {
        ((r = a(i, l)), uf(e, t, r));
      } catch (E) {
        Mo(e, t, E);
      }
  }
  function uf(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            cf(e, t, l);
          },
          function (l) {
            return Mo(e, t, l);
          },
        )
      : cf(e, t, a);
  }
  function cf(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      df(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), of(e, a))));
  }
  function Mo(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = "rejected"), (t.reason = a), df(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function df(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ff(e, t) {
    return t;
  }
  function hf(e, t) {
    if (pe) {
      var a = _e.formState;
      if (a !== null) {
        e: {
          var l = se;
          if (pe) {
            if (Ae) {
              t: {
                for (var i = Ae, r = Dt; i.nodeType !== 8; ) {
                  if (!r) {
                    i = null;
                    break t;
                  }
                  if (((i = Ht(i.nextSibling)), i === null)) {
                    i = null;
                    break t;
                  }
                }
                ((r = i.data), (i = r === "F!" || r === "F" ? i : null));
              }
              if (i) {
                ((Ae = Ht(i.nextSibling)), (l = i.data === "F!"));
                break e;
              }
            }
            Ra(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = st()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ff,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = Cf.bind(null, se, l)),
      (l.dispatch = a),
      (l = Oo(!1)),
      (r = qo.bind(null, se, !1, l.queue)),
      (l = st()),
      (i = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = i),
      (a = Yx.bind(null, se, i, r, a)),
      (i.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function mf(e) {
    var t = Be();
    return pf(t, Ne, e);
  }
  function pf(e, t, a) {
    if (
      ((t = Ro(e, t, ff)[0]),
      (e = cr(ca)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var l = Xn(t);
      } catch (f) {
        throw f === Vl ? er : f;
      }
    else l = t;
    t = Be();
    var i = t.queue,
      r = i.dispatch;
    return (
      a !== t.memoizedState &&
        ((se.flags |= 2048),
        Kl(9, { destroy: void 0 }, Vx.bind(null, i, a), null)),
      [l, r, e]
    );
  }
  function Vx(e, t) {
    e.action = t;
  }
  function xf(e) {
    var t = Be(),
      a = Ne;
    if (a !== null) return pf(t, a, e);
    (Be(), (t = t.memoizedState), (a = Be()));
    var l = a.queue.dispatch;
    return ((a.memoizedState = e), [t, l, !1]);
  }
  function Kl(e, t, a, l) {
    return (
      (e = { tag: e, create: a, deps: l, inst: t, next: null }),
      (t = se.updateQueue),
      t === null && ((t = or()), (se.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function gf() {
    return Be().memoizedState;
  }
  function dr(e, t, a, l) {
    var i = st();
    ((se.flags |= e),
      (i.memoizedState = Kl(
        1 | t,
        { destroy: void 0 },
        a,
        l === void 0 ? null : l,
      )));
  }
  function fr(e, t, a, l) {
    var i = Be();
    l = l === void 0 ? null : l;
    var r = i.memoizedState.inst;
    Ne !== null && l !== null && No(l, Ne.memoizedState.deps)
      ? (i.memoizedState = Kl(t, r, a, l))
      : ((se.flags |= e), (i.memoizedState = Kl(1 | t, r, a, l)));
  }
  function bf(e, t) {
    dr(8390656, 8, e, t);
  }
  function Do(e, t) {
    fr(2048, 8, e, t);
  }
  function Xx(e) {
    se.flags |= 4;
    var t = se.updateQueue;
    if (t === null) ((t = or()), (se.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function yf(e) {
    var t = Be().memoizedState;
    return (
      Xx({ ref: t, nextImpl: e }),
      function () {
        if ((ve & 2) !== 0) throw Error(u(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function vf(e, t) {
    return fr(4, 2, e, t);
  }
  function wf(e, t) {
    return fr(4, 4, e, t);
  }
  function kf(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Sf(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), fr(4, 4, kf.bind(null, t, e), a));
  }
  function Uo() {}
  function jf(e, t) {
    var a = Be();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && No(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function Nf(e, t) {
    var a = Be();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && No(t, l[1])) return l[0];
    if (((l = e()), ml)) {
      za(!0);
      try {
        e();
      } finally {
        za(!1);
      }
    }
    return ((a.memoizedState = [l, t]), l);
  }
  function Ho(e, t, a) {
    return a === void 0 || ((ua & 1073741824) !== 0 && (he & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = z0()), (se.lanes |= e), (qa |= e), a);
  }
  function zf(e, t, a, l) {
    return wt(a, t)
      ? a
      : Ql.current !== null
        ? ((e = Ho(e, a, l)), wt(e, t) || (Ye = !0), e)
        : (ua & 42) === 0 || ((ua & 1073741824) !== 0 && (he & 261930) === 0)
          ? ((Ye = !0), (e.memoizedState = a))
          : ((e = z0()), (se.lanes |= e), (qa |= e), t);
  }
  function Ef(e, t, a, l, i) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var f = M.T,
      p = {};
    ((M.T = p), qo(e, !1, t, a));
    try {
      var w = i(),
        E = M.S;
      if (
        (E !== null && E(p, w),
        w !== null && typeof w == "object" && typeof w.then == "function")
      ) {
        var U = Bx(w, l);
        Qn(e, t, U, Et(e));
      } else Qn(e, t, l, Et(e));
    } catch (q) {
      Qn(e, t, { then: function () {}, status: "rejected", reason: q }, Et());
    } finally {
      ((Q.p = r),
        f !== null && p.types !== null && (f.types = p.types),
        (M.T = f));
    }
  }
  function Qx() {}
  function Lo(e, t, a, l) {
    if (e.tag !== 5) throw Error(u(476));
    var i = _f(e).queue;
    Ef(
      e,
      i,
      t,
      I,
      a === null
        ? Qx
        : function () {
            return (Af(e), a(l));
          },
    );
  }
  function _f(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ca,
        lastRenderedState: I,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ca,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Af(e) {
    var t = _f(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Qn(e, t.next.queue, {}, Et()));
  }
  function Bo() {
    return Pe(oi);
  }
  function Tf() {
    return Be().memoizedState;
  }
  function Rf() {
    return Be().memoizedState;
  }
  function Zx(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Et();
          e = Ma(a);
          var l = Da(t, e, a);
          (l !== null && (pt(l, t, a), qn(l, t, a)),
            (t = { cache: mo() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function $x(e, t, a) {
    var l = Et();
    ((a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      hr(e)
        ? Of(t, a)
        : ((a = ao(e, t, a, l)), a !== null && (pt(a, e, l), Mf(a, t, l))));
  }
  function Cf(e, t, a) {
    var l = Et();
    Qn(e, t, a, l);
  }
  function Qn(e, t, a, l) {
    var i = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (hr(e)) Of(t, i);
    else {
      var r = e.alternate;
      if (
        e.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = t.lastRenderedReducer), r !== null)
      )
        try {
          var f = t.lastRenderedState,
            p = r(f, a);
          if (((i.hasEagerState = !0), (i.eagerState = p), wt(p, f)))
            return ($i(e, t, i, 0), _e === null && Zi(), !1);
        } catch {}
      if (((a = ao(e, t, i, l)), a !== null))
        return (pt(a, e, l), Mf(a, t, l), !0);
    }
    return !1;
  }
  function qo(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: bu(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hr(e))
    ) {
      if (t) throw Error(u(479));
    } else ((t = ao(e, a, l, 2)), t !== null && pt(t, e, 2));
  }
  function hr(e) {
    var t = e.alternate;
    return e === se || (t !== null && t === se);
  }
  function Of(e, t) {
    Zl = rr = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Mf(e, t, a) {
    if ((a & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (a |= l), (t.lanes = a), Lc(e, a));
    }
  }
  var Zn = {
    readContext: Pe,
    use: ur,
    useCallback: Me,
    useContext: Me,
    useEffect: Me,
    useImperativeHandle: Me,
    useLayoutEffect: Me,
    useInsertionEffect: Me,
    useMemo: Me,
    useReducer: Me,
    useRef: Me,
    useState: Me,
    useDebugValue: Me,
    useDeferredValue: Me,
    useTransition: Me,
    useSyncExternalStore: Me,
    useId: Me,
    useHostTransitionStatus: Me,
    useFormState: Me,
    useActionState: Me,
    useOptimistic: Me,
    useMemoCache: Me,
    useCacheRefresh: Me,
  };
  Zn.useEffectEvent = Me;
  var Df = {
      readContext: Pe,
      use: ur,
      useCallback: function (e, t) {
        return ((st().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: bf,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          dr(4194308, 4, kf.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return dr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        dr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = st();
        t = t === void 0 ? null : t;
        var l = e();
        if (ml) {
          za(!0);
          try {
            e();
          } finally {
            za(!1);
          }
        }
        return ((a.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, a) {
        var l = st();
        if (a !== void 0) {
          var i = a(t);
          if (ml) {
            za(!0);
            try {
              a(t);
            } finally {
              za(!1);
            }
          }
        } else i = t;
        return (
          (l.memoizedState = l.baseState = i),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i,
          }),
          (l.queue = e),
          (e = e.dispatch = $x.bind(null, se, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = st();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Oo(e);
        var t = e.queue,
          a = Cf.bind(null, se, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Uo,
      useDeferredValue: function (e, t) {
        var a = st();
        return Ho(a, e, t);
      },
      useTransition: function () {
        var e = Oo(!1);
        return (
          (e = Ef.bind(null, se, e.queue, !0, !1)),
          (st().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var l = se,
          i = st();
        if (pe) {
          if (a === void 0) throw Error(u(407));
          a = a();
        } else {
          if (((a = t()), _e === null)) throw Error(u(349));
          (he & 127) !== 0 || tf(l, t, a);
        }
        i.memoizedState = a;
        var r = { value: a, getSnapshot: t };
        return (
          (i.queue = r),
          bf(lf.bind(null, l, r, e), [e]),
          (l.flags |= 2048),
          Kl(9, { destroy: void 0 }, af.bind(null, l, r, a, t), null),
          a
        );
      },
      useId: function () {
        var e = st(),
          t = _e.identifierPrefix;
        if (pe) {
          var a = Ft,
            l = Jt;
          ((a = (l & ~(1 << (32 - vt(l) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = sr++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = qx++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Bo,
      useFormState: hf,
      useActionState: hf,
      useOptimistic: function (e) {
        var t = st();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = qo.bind(null, se, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: To,
      useCacheRefresh: function () {
        return (st().memoizedState = Zx.bind(null, se));
      },
      useEffectEvent: function (e) {
        var t = st(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((ve & 2) !== 0) throw Error(u(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Go = {
      readContext: Pe,
      use: ur,
      useCallback: jf,
      useContext: Pe,
      useEffect: Do,
      useImperativeHandle: Sf,
      useInsertionEffect: vf,
      useLayoutEffect: wf,
      useMemo: Nf,
      useReducer: cr,
      useRef: gf,
      useState: function () {
        return cr(ca);
      },
      useDebugValue: Uo,
      useDeferredValue: function (e, t) {
        var a = Be();
        return zf(a, Ne.memoizedState, e, t);
      },
      useTransition: function () {
        var e = cr(ca)[0],
          t = Be().memoizedState;
        return [typeof e == "boolean" ? e : Xn(e), t];
      },
      useSyncExternalStore: ef,
      useId: Tf,
      useHostTransitionStatus: Bo,
      useFormState: mf,
      useActionState: mf,
      useOptimistic: function (e, t) {
        var a = Be();
        return sf(a, Ne, e, t);
      },
      useMemoCache: To,
      useCacheRefresh: Rf,
    };
  Go.useEffectEvent = yf;
  var Uf = {
    readContext: Pe,
    use: ur,
    useCallback: jf,
    useContext: Pe,
    useEffect: Do,
    useImperativeHandle: Sf,
    useInsertionEffect: vf,
    useLayoutEffect: wf,
    useMemo: Nf,
    useReducer: Co,
    useRef: gf,
    useState: function () {
      return Co(ca);
    },
    useDebugValue: Uo,
    useDeferredValue: function (e, t) {
      var a = Be();
      return Ne === null ? Ho(a, e, t) : zf(a, Ne.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Co(ca)[0],
        t = Be().memoizedState;
      return [typeof e == "boolean" ? e : Xn(e), t];
    },
    useSyncExternalStore: ef,
    useId: Tf,
    useHostTransitionStatus: Bo,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function (e, t) {
      var a = Be();
      return Ne !== null
        ? sf(a, Ne, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: To,
    useCacheRefresh: Rf,
  };
  Uf.useEffectEvent = yf;
  function Yo(e, t, a, l) {
    ((t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : y({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var Vo = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = Et(),
        i = Ma(l);
      ((i.payload = t),
        a != null && (i.callback = a),
        (t = Da(e, i, l)),
        t !== null && (pt(t, e, l), qn(t, e, l)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = Et(),
        i = Ma(l);
      ((i.tag = 1),
        (i.payload = t),
        a != null && (i.callback = a),
        (t = Da(e, i, l)),
        t !== null && (pt(t, e, l), qn(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Et(),
        l = Ma(a);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Da(e, l, a)),
        t !== null && (pt(t, e, a), qn(t, e, a)));
    },
  };
  function Hf(e, t, a, l, i, r, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, r, f)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Cn(a, l) || !Cn(i, r)
          : !0
    );
  }
  function Lf(e, t, a, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && Vo.enqueueReplaceState(t, t.state, null));
  }
  function pl(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = y({}, a));
      for (var i in e) a[i] === void 0 && (a[i] = e[i]);
    }
    return a;
  }
  function Bf(e) {
    Qi(e);
  }
  function qf(e) {
    console.error(e);
  }
  function Gf(e) {
    Qi(e);
  }
  function mr(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Yf(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Xo(e, t, a) {
    return (
      (a = Ma(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        mr(e, t);
      }),
      a
    );
  }
  function Vf(e) {
    return ((e = Ma(e)), (e.tag = 3), e);
  }
  function Xf(e, t, a, l) {
    var i = a.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = l.value;
      ((e.payload = function () {
        return i(r);
      }),
        (e.callback = function () {
          Yf(t, a, l);
        }));
    }
    var f = a.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        (Yf(t, a, l),
          typeof i != "function" &&
            (Ga === null ? (Ga = new Set([this])) : Ga.add(this)));
        var p = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: p !== null ? p : "",
        });
      });
  }
  function Kx(e, t, a, l, i) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ql(t, a, i, !0),
        (a = St.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              Ut === null ? zr() : a.alternate === null && De === 0 && (De = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = i),
              l === tr
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  pu(e, l, i)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === tr
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  pu(e, l, i)),
              !1
            );
        }
        throw Error(u(435, a.tag));
      }
      return (pu(e, l, i), zr(), !1);
    }
    if (pe)
      return (
        (t = St.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = i),
            l !== oo && ((e = Error(u(422), { cause: l })), Dn(Ct(e, a))))
          : (l !== oo && ((t = Error(u(423), { cause: l })), Dn(Ct(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (i &= -i),
            (e.lanes |= i),
            (l = Ct(l, a)),
            (i = Xo(e.stateNode, l, i)),
            vo(e, i),
            De !== 4 && (De = 2)),
        !1
      );
    var r = Error(u(520), { cause: l });
    if (
      ((r = Ct(r, a)),
      ei === null ? (ei = [r]) : ei.push(r),
      De !== 4 && (De = 2),
      t === null)
    )
      return !0;
    ((l = Ct(l, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = i & -i),
            (a.lanes |= e),
            (e = Xo(a.stateNode, l, e)),
            vo(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (r = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Ga === null || !Ga.has(r)))))
          )
            return (
              (a.flags |= 65536),
              (i &= -i),
              (a.lanes |= i),
              (i = Vf(i)),
              Xf(i, e, a, l),
              vo(a, i),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Qo = Error(u(461)),
    Ye = !1;
  function Ie(e, t, a, l) {
    t.child = e === null ? $d(t, null, a, l) : hl(t, e.child, a, l);
  }
  function Qf(e, t, a, l, i) {
    a = a.render;
    var r = t.ref;
    if ("ref" in l) {
      var f = {};
      for (var p in l) p !== "ref" && (f[p] = l[p]);
    } else f = l;
    return (
      ul(t),
      (l = zo(e, t, a, f, r, i)),
      (p = Eo()),
      e !== null && !Ye
        ? (_o(e, t, i), da(e, t, i))
        : (pe && p && ro(t), (t.flags |= 1), Ie(e, t, l, i), t.child)
    );
  }
  function Zf(e, t, a, l, i) {
    if (e === null) {
      var r = a.type;
      return typeof r == "function" &&
        !lo(r) &&
        r.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = r), $f(e, t, r, l, i))
        : ((e = Ji(a.type, null, l, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((r = e.child), !Io(e, i))) {
      var f = r.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Cn), a(f, l) && e.ref === t.ref)
      )
        return da(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = ia(r, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function $f(e, t, a, l, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Cn(r, l) && e.ref === t.ref)
        if (((Ye = !1), (t.pendingProps = l = r), Io(e, i)))
          (e.flags & 131072) !== 0 && (Ye = !0);
        else return ((t.lanes = e.lanes), da(e, t, i));
    }
    return Zo(e, t, a, l, i);
  }
  function Kf(e, t, a, l) {
    var i = l.children,
      r = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | a : a), e !== null)) {
          for (l = t.child = e.child, i = 0; l !== null; )
            ((i = i | l.lanes | l.childLanes), (l = l.sibling));
          l = i & ~r;
        } else ((l = 0), (t.child = null));
        return Jf(e, t, r, a, l);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Ii(t, r !== null ? r.cachePool : null),
          r !== null ? Fd(t, r) : ko(),
          Wd(t));
      else
        return (
          (l = t.lanes = 536870912),
          Jf(e, t, r !== null ? r.baseLanes | a : a, a, l)
        );
    } else
      r !== null
        ? (Ii(t, r.cachePool), Fd(t, r), Ha(), (t.memoizedState = null))
        : (e !== null && Ii(t, null), ko(), Ha());
    return (Ie(e, t, i, a), t.child);
  }
  function $n(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Jf(e, t, a, l, i) {
    var r = xo();
    return (
      (r = r === null ? null : { parent: qe._currentValue, pool: r }),
      (t.memoizedState = { baseLanes: a, cachePool: r }),
      e !== null && Ii(t, null),
      ko(),
      Wd(t),
      e !== null && ql(e, t, l, !0),
      (t.childLanes = i),
      null
    );
  }
  function pr(e, t) {
    return (
      (t = gr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ff(e, t, a) {
    return (
      hl(t, e.child, null, a),
      (e = pr(t, t.pendingProps)),
      (e.flags |= 2),
      jt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Jx(e, t, a) {
    var l = t.pendingProps,
      i = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (pe) {
        if (l.mode === "hidden")
          return ((e = pr(t, l)), (t.lanes = 536870912), $n(null, e));
        if (
          (jo(t),
          (e = Ae)
            ? ((e = oh(e, Dt)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Aa !== null ? { id: Jt, overflow: Ft } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Cd(e)),
                (a.return = t),
                (t.child = a),
                (We = t),
                (Ae = null)))
            : (e = null),
          e === null)
        )
          throw Ra(t);
        return ((t.lanes = 536870912), null);
      }
      return pr(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
      if ((jo(t), i))
        if (t.flags & 256) ((t.flags &= -257), (t = Ff(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(u(558));
      else if (
        (Ye || ql(e, t, a, !1), (i = (a & e.childLanes) !== 0), Ye || i)
      ) {
        if (
          ((l = _e),
          l !== null && ((f = Bc(l, a)), f !== 0 && f !== r.retryLane))
        )
          throw ((r.retryLane = f), il(e, f), pt(l, e, f), Qo);
        (zr(), (t = Ff(e, t, a)));
      } else
        ((e = r.treeContext),
          (Ae = Ht(f.nextSibling)),
          (We = t),
          (pe = !0),
          (Ta = null),
          (Dt = !1),
          e !== null && Dd(t, e),
          (t = pr(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = ia(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function xr(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(u(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Zo(e, t, a, l, i) {
    return (
      ul(t),
      (a = zo(e, t, a, l, void 0, i)),
      (l = Eo()),
      e !== null && !Ye
        ? (_o(e, t, i), da(e, t, i))
        : (pe && l && ro(t), (t.flags |= 1), Ie(e, t, a, i), t.child)
    );
  }
  function Wf(e, t, a, l, i, r) {
    return (
      ul(t),
      (t.updateQueue = null),
      (a = Id(t, l, a, i)),
      Pd(e),
      (l = Eo()),
      e !== null && !Ye
        ? (_o(e, t, r), da(e, t, r))
        : (pe && l && ro(t), (t.flags |= 1), Ie(e, t, a, r), t.child)
    );
  }
  function Pf(e, t, a, l, i) {
    if ((ul(t), t.stateNode === null)) {
      var r = Ul,
        f = a.contextType;
      (typeof f == "object" && f !== null && (r = Pe(f)),
        (r = new a(l, r)),
        (t.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = Vo),
        (t.stateNode = r),
        (r._reactInternals = t),
        (r = t.stateNode),
        (r.props = l),
        (r.state = t.memoizedState),
        (r.refs = {}),
        bo(t),
        (f = a.contextType),
        (r.context = typeof f == "object" && f !== null ? Pe(f) : Ul),
        (r.state = t.memoizedState),
        (f = a.getDerivedStateFromProps),
        typeof f == "function" && (Yo(t, a, f, l), (r.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((f = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          f !== r.state && Vo.enqueueReplaceState(r, r.state, null),
          Yn(t, l, r, i),
          Gn(),
          (r.state = t.memoizedState)),
        typeof r.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      r = t.stateNode;
      var p = t.memoizedProps,
        w = pl(a, p);
      r.props = w;
      var E = r.context,
        U = a.contextType;
      ((f = Ul), typeof U == "object" && U !== null && (f = Pe(U)));
      var q = a.getDerivedStateFromProps;
      ((U =
        typeof q == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (p = t.pendingProps !== p),
        U ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((p || E !== f) && Lf(t, r, l, f)),
        (Oa = !1));
      var _ = t.memoizedState;
      ((r.state = _),
        Yn(t, l, r, i),
        Gn(),
        (E = t.memoizedState),
        p || _ !== E || Oa
          ? (typeof q == "function" && (Yo(t, a, q, l), (E = t.memoizedState)),
            (w = Oa || Hf(t, a, w, l, _, E, f))
              ? (U ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = E)),
            (r.props = l),
            (r.state = E),
            (r.context = f),
            (l = w))
          : (typeof r.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((r = t.stateNode),
        yo(e, t),
        (f = t.memoizedProps),
        (U = pl(a, f)),
        (r.props = U),
        (q = t.pendingProps),
        (_ = r.context),
        (E = a.contextType),
        (w = Ul),
        typeof E == "object" && E !== null && (w = Pe(E)),
        (p = a.getDerivedStateFromProps),
        (E =
          typeof p == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((f !== q || _ !== w) && Lf(t, r, l, w)),
        (Oa = !1),
        (_ = t.memoizedState),
        (r.state = _),
        Yn(t, l, r, i),
        Gn());
      var O = t.memoizedState;
      f !== q ||
      _ !== O ||
      Oa ||
      (e !== null && e.dependencies !== null && Wi(e.dependencies))
        ? (typeof p == "function" && (Yo(t, a, p, l), (O = t.memoizedState)),
          (U =
            Oa ||
            Hf(t, a, U, l, _, O, w) ||
            (e !== null && e.dependencies !== null && Wi(e.dependencies)))
            ? (E ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(l, O, w),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(l, O, w)),
              typeof r.componentDidUpdate == "function" && (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && _ === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = O)),
          (r.props = l),
          (r.state = O),
          (r.context = w),
          (l = U))
        : (typeof r.componentDidUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && _ === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (r = l),
      xr(e, t),
      (l = (t.flags & 128) !== 0),
      r || l
        ? ((r = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = hl(t, e.child, null, i)),
              (t.child = hl(t, null, a, i)))
            : Ie(e, t, a, i),
          (t.memoizedState = r.state),
          (e = t.child))
        : (e = da(e, t, i)),
      e
    );
  }
  function If(e, t, a, l) {
    return (sl(), (t.flags |= 256), Ie(e, t, a, l), t.child);
  }
  var $o = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Ko(e) {
    return { baseLanes: e, cachePool: Gd() };
  }
  function Jo(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= zt), e);
  }
  function e0(e, t, a) {
    var l = t.pendingProps,
      i = !1,
      r = (t.flags & 128) !== 0,
      f;
    if (
      ((f = r) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Le.current & 2) !== 0),
      f && ((i = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (pe) {
        if (
          (i ? Ua(t) : Ha(),
          (e = Ae)
            ? ((e = oh(e, Dt)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Aa !== null ? { id: Jt, overflow: Ft } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Cd(e)),
                (a.return = t),
                (t.child = a),
                (We = t),
                (Ae = null)))
            : (e = null),
          e === null)
        )
          throw Ra(t);
        return (Ru(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var p = l.children;
      return (
        (l = l.fallback),
        i
          ? (Ha(),
            (i = t.mode),
            (p = gr({ mode: "hidden", children: p }, i)),
            (l = rl(l, i, a, null)),
            (p.return = t),
            (l.return = t),
            (p.sibling = l),
            (t.child = p),
            (l = t.child),
            (l.memoizedState = Ko(a)),
            (l.childLanes = Jo(e, f, a)),
            (t.memoizedState = $o),
            $n(null, l))
          : (Ua(t), Fo(t, p))
      );
    }
    var w = e.memoizedState;
    if (w !== null && ((p = w.dehydrated), p !== null)) {
      if (r)
        t.flags & 256
          ? (Ua(t), (t.flags &= -257), (t = Wo(e, t, a)))
          : t.memoizedState !== null
            ? (Ha(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Ha(),
              (p = l.fallback),
              (i = t.mode),
              (l = gr({ mode: "visible", children: l.children }, i)),
              (p = rl(p, i, a, null)),
              (p.flags |= 2),
              (l.return = t),
              (p.return = t),
              (l.sibling = p),
              (t.child = l),
              hl(t, e.child, null, a),
              (l = t.child),
              (l.memoizedState = Ko(a)),
              (l.childLanes = Jo(e, f, a)),
              (t.memoizedState = $o),
              (t = $n(null, l)));
      else if ((Ua(t), Ru(p))) {
        if (((f = p.nextSibling && p.nextSibling.dataset), f)) var E = f.dgst;
        ((f = E),
          (l = Error(u(419))),
          (l.stack = ""),
          (l.digest = f),
          Dn({ value: l, source: null, stack: null }),
          (t = Wo(e, t, a)));
      } else if (
        (Ye || ql(e, t, a, !1), (f = (a & e.childLanes) !== 0), Ye || f)
      ) {
        if (
          ((f = _e),
          f !== null && ((l = Bc(f, a)), l !== 0 && l !== w.retryLane))
        )
          throw ((w.retryLane = l), il(e, l), pt(f, e, l), Qo);
        (Tu(p) || zr(), (t = Wo(e, t, a)));
      } else
        Tu(p)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = w.treeContext),
            (Ae = Ht(p.nextSibling)),
            (We = t),
            (pe = !0),
            (Ta = null),
            (Dt = !1),
            e !== null && Dd(t, e),
            (t = Fo(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return i
      ? (Ha(),
        (p = l.fallback),
        (i = t.mode),
        (w = e.child),
        (E = w.sibling),
        (l = ia(w, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = w.subtreeFlags & 65011712),
        E !== null ? (p = ia(E, p)) : ((p = rl(p, i, a, null)), (p.flags |= 2)),
        (p.return = t),
        (l.return = t),
        (l.sibling = p),
        (t.child = l),
        $n(null, l),
        (l = t.child),
        (p = e.child.memoizedState),
        p === null
          ? (p = Ko(a))
          : ((i = p.cachePool),
            i !== null
              ? ((w = qe._currentValue),
                (i = i.parent !== w ? { parent: w, pool: w } : i))
              : (i = Gd()),
            (p = { baseLanes: p.baseLanes | a, cachePool: i })),
        (l.memoizedState = p),
        (l.childLanes = Jo(e, f, a)),
        (t.memoizedState = $o),
        $n(e.child, l))
      : (Ua(t),
        (a = e.child),
        (e = a.sibling),
        (a = ia(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Fo(e, t) {
    return (
      (t = gr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function gr(e, t) {
    return ((e = kt(22, e, null, t)), (e.lanes = 0), e);
  }
  function Wo(e, t, a) {
    return (
      hl(t, e.child, null, a),
      (e = Fo(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function t0(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), fo(e.return, t, a));
  }
  function Po(e, t, a, l, i, r) {
    var f = e.memoizedState;
    f === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: i,
          treeForkCount: r,
        })
      : ((f.isBackwards = t),
        (f.rendering = null),
        (f.renderingStartTime = 0),
        (f.last = l),
        (f.tail = a),
        (f.tailMode = i),
        (f.treeForkCount = r));
  }
  function a0(e, t, a) {
    var l = t.pendingProps,
      i = l.revealOrder,
      r = l.tail;
    l = l.children;
    var f = Le.current,
      p = (f & 2) !== 0;
    if (
      (p ? ((f = (f & 1) | 2), (t.flags |= 128)) : (f &= 1),
      Z(Le, f),
      Ie(e, t, l, a),
      (l = pe ? Mn : 0),
      !p && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && t0(e, a, t);
        else if (e.tag === 19) t0(e, a, t);
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
    switch (i) {
      case "forwards":
        for (a = t.child, i = null; a !== null; )
          ((e = a.alternate),
            e !== null && ir(e) === null && (i = a),
            (a = a.sibling));
        ((a = i),
          a === null
            ? ((i = t.child), (t.child = null))
            : ((i = a.sibling), (a.sibling = null)),
          Po(t, !1, i, a, r, l));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ir(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
        }
        Po(t, !0, a, null, r, l);
        break;
      case "together":
        Po(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function da(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (qa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((ql(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (
        e = t.child, a = ia(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = ia(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function Io(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Wi(e)));
  }
  function Fx(e, t, a) {
    switch (t.tag) {
      case 3:
        (rt(t, t.stateNode.containerInfo),
          Ca(t, qe, e.memoizedState.cache),
          sl());
        break;
      case 27:
      case 5:
        yn(t);
        break;
      case 4:
        rt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ca(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), jo(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Ua(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? e0(e, t, a)
              : (Ua(t), (e = da(e, t, a)), e !== null ? e.sibling : null);
        Ua(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (ql(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          i)
        ) {
          if (l) return a0(e, t, a);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Z(Le, Le.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Kf(e, t, a, t.pendingProps));
      case 24:
        Ca(t, qe, e.memoizedState.cache);
    }
    return da(e, t, a);
  }
  function l0(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ye = !0;
      else {
        if (!Io(e, a) && (t.flags & 128) === 0) return ((Ye = !1), Fx(e, t, a));
        Ye = (e.flags & 131072) !== 0;
      }
    else ((Ye = !1), pe && (t.flags & 1048576) !== 0 && Md(t, Mn, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = dl(t.elementType)), (t.type = e), typeof e == "function"))
            lo(e)
              ? ((l = pl(e, l)), (t.tag = 1), (t = Pf(null, t, e, l, a)))
              : ((t.tag = 0), (t = Zo(null, t, e, l, a)));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === ae) {
                ((t.tag = 11), (t = Qf(null, t, e, l, a)));
                break e;
              } else if (i === D) {
                ((t.tag = 14), (t = Zf(null, t, e, l, a)));
                break e;
              }
            }
            throw ((t = Xe(e) || e), Error(u(306, t, "")));
          }
        }
        return t;
      case 0:
        return Zo(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((l = t.type), (i = pl(l, t.pendingProps)), Pf(e, t, l, i, a));
      case 3:
        e: {
          if ((rt(t, t.stateNode.containerInfo), e === null))
            throw Error(u(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          ((i = r.element), yo(e, t), Yn(t, l, null, a));
          var f = t.memoizedState;
          if (
            ((l = f.cache),
            Ca(t, qe, l),
            l !== r.cache && ho(t, [qe], a, !0),
            Gn(),
            (l = f.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: l, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = r),
              (t.memoizedState = r),
              t.flags & 256)
            ) {
              t = If(e, t, l, a);
              break e;
            } else if (l !== i) {
              ((i = Ct(Error(u(424)), t)), Dn(i), (t = If(e, t, l, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Ae = Ht(e.firstChild),
                  We = t,
                  pe = !0,
                  Ta = null,
                  Dt = !0,
                  a = $d(t, null, l, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((sl(), l === i)) {
              t = da(e, t, a);
              break e;
            }
            Ie(e, t, l, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          xr(e, t),
          e === null
            ? (a = mh(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : pe ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = Or(ce.current).createElement(a)),
                (l[Fe] = t),
                (l[ut] = e),
                et(l, a, e),
                Ze(l),
                (t.stateNode = l))
            : (t.memoizedState = mh(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          yn(t),
          e === null &&
            pe &&
            ((l = t.stateNode = dh(t.type, t.pendingProps, ce.current)),
            (We = t),
            (Dt = !0),
            (i = Ae),
            Qa(t.type) ? ((Cu = i), (Ae = Ht(l.firstChild))) : (Ae = i)),
          Ie(e, t, t.pendingProps.children, a),
          xr(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            pe &&
            ((i = l = Ae) &&
              ((l = zg(l, t.type, t.pendingProps, Dt)),
              l !== null
                ? ((t.stateNode = l),
                  (We = t),
                  (Ae = Ht(l.firstChild)),
                  (Dt = !1),
                  (i = !0))
                : (i = !1)),
            i || Ra(t)),
          yn(t),
          (i = t.type),
          (r = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (l = r.children),
          Eu(i, r) ? (l = null) : f !== null && Eu(i, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((i = zo(e, t, Gx, null, null, a)), (oi._currentValue = i)),
          xr(e, t),
          Ie(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            pe &&
            ((e = a = Ae) &&
              ((a = Eg(a, t.pendingProps, Dt)),
              a !== null
                ? ((t.stateNode = a), (We = t), (Ae = null), (e = !0))
                : (e = !1)),
            e || Ra(t)),
          null
        );
      case 13:
        return e0(e, t, a);
      case 4:
        return (
          rt(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = hl(t, null, l, a)) : Ie(e, t, l, a),
          t.child
        );
      case 11:
        return Qf(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Ie(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Ie(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Ie(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Ca(t, t.type, l.value),
          Ie(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (i = t.type._context),
          (l = t.pendingProps.children),
          ul(t),
          (i = Pe(i)),
          (l = l(i)),
          (t.flags |= 1),
          Ie(e, t, l, a),
          t.child
        );
      case 14:
        return Zf(e, t, t.type, t.pendingProps, a);
      case 15:
        return $f(e, t, t.type, t.pendingProps, a);
      case 19:
        return a0(e, t, a);
      case 31:
        return Jx(e, t, a);
      case 22:
        return Kf(e, t, a, t.pendingProps);
      case 24:
        return (
          ul(t),
          (l = Pe(qe)),
          e === null
            ? ((i = xo()),
              i === null &&
                ((i = _e),
                (r = mo()),
                (i.pooledCache = r),
                r.refCount++,
                r !== null && (i.pooledCacheLanes |= a),
                (i = r)),
              (t.memoizedState = { parent: l, cache: i }),
              bo(t),
              Ca(t, qe, i))
            : ((e.lanes & a) !== 0 && (yo(e, t), Yn(t, null, null, a), Gn()),
              (i = e.memoizedState),
              (r = t.memoizedState),
              i.parent !== l
                ? ((i = { parent: l, cache: l }),
                  (t.memoizedState = i),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = i),
                  Ca(t, qe, l))
                : ((l = r.cache),
                  Ca(t, qe, l),
                  l !== i.cache && ho(t, [qe], a, !0))),
          Ie(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(u(156, t.tag));
  }
  function fa(e) {
    e.flags |= 4;
  }
  function eu(e, t, a, l, i) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (i & 335544128) === i))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (T0()) e.flags |= 8192;
        else throw ((fl = tr), go);
    } else e.flags &= -16777217;
  }
  function n0(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !yh(t)))
      if (T0()) e.flags |= 8192;
      else throw ((fl = tr), go);
  }
  function br(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Uc() : 536870912), (e.lanes |= t), (Pl |= t)));
  }
  function Kn(e, t) {
    if (!pe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            (a.alternate !== null && (l = a), (a = a.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function Te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags & 65011712),
          (l |= i.flags & 65011712),
          (i.return = e),
          (i = i.sibling));
    else
      for (i = e.child; i !== null; )
        ((a |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (i.return = e),
          (i = i.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = a), t);
  }
  function Wx(e, t, a) {
    var l = t.pendingProps;
    switch ((so(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Te(t), null);
      case 1:
        return (Te(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          oa(qe),
          He(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (Bl(t)
              ? fa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), uo())),
          Te(t),
          null
        );
      case 26:
        var i = t.type,
          r = t.memoizedState;
        return (
          e === null
            ? (fa(t),
              r !== null ? (Te(t), n0(t, r)) : (Te(t), eu(t, i, null, l, a)))
            : r
              ? r !== e.memoizedState
                ? (fa(t), Te(t), n0(t, r))
                : (Te(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && fa(t),
                Te(t),
                eu(t, i, e, l, a)),
          null
        );
      case 27:
        if (
          (Ai(t),
          (a = ce.current),
          (i = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && fa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return (Te(t), null);
          }
          ((e = K.current),
            Bl(t) ? Ud(t) : ((e = dh(i, l, a)), (t.stateNode = e), fa(t)));
        }
        return (Te(t), null);
      case 5:
        if ((Ai(t), (i = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && fa(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(u(166));
            return (Te(t), null);
          }
          if (((r = K.current), Bl(t))) Ud(t);
          else {
            var f = Or(ce.current);
            switch (r) {
              case 1:
                r = f.createElementNS("http://www.w3.org/2000/svg", i);
                break;
              case 2:
                r = f.createElementNS("http://www.w3.org/1998/Math/MathML", i);
                break;
              default:
                switch (i) {
                  case "svg":
                    r = f.createElementNS("http://www.w3.org/2000/svg", i);
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i,
                    );
                    break;
                  case "script":
                    ((r = f.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof l.is == "string"
                        ? f.createElement("select", { is: l.is })
                        : f.createElement("select")),
                      l.multiple
                        ? (r.multiple = !0)
                        : l.size && (r.size = l.size));
                    break;
                  default:
                    r =
                      typeof l.is == "string"
                        ? f.createElement(i, { is: l.is })
                        : f.createElement(i);
                }
            }
            ((r[Fe] = t), (r[ut] = l));
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t) break e;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            t.stateNode = r;
            e: switch ((et(r, i, l), i)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && fa(t);
          }
        }
        return (
          Te(t),
          eu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && fa(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(u(166));
          if (((e = ce.current), Bl(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (i = We),
              i !== null)
            )
              switch (i.tag) {
                case 27:
                case 5:
                  l = i.memoizedProps;
              }
            ((e[Fe] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                eh(e.nodeValue, a)
              )),
              e || Ra(t, !0));
          } else
            ((e = Or(e).createTextNode(l)), (e[Fe] = t), (t.stateNode = e));
        }
        return (Te(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Bl(t)), a !== null)) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(u(557));
              e[Fe] = t;
            } else
              (sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Te(t), (e = !1));
          } else
            ((a = uo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          if ((t.flags & 128) !== 0) throw Error(u(558));
        }
        return (Te(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((i = Bl(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(u(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(u(317));
              i[Fe] = t;
            } else
              (sl(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Te(t), (i = !1));
          } else
            ((i = uo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (i = !0));
          if (!i) return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        return (
          jt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = l !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((l = t.child),
                (i = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (i = l.alternate.memoizedState.cachePool.pool),
                (r = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (r = l.memoizedState.cachePool.pool),
                r !== i && (l.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              br(t, t.updateQueue),
              Te(t),
              null)
        );
      case 4:
        return (He(), e === null && ku(t.stateNode.containerInfo), Te(t), null);
      case 10:
        return (oa(t.type), Te(t), null);
      case 19:
        if ((B(Le), (l = t.memoizedState), l === null)) return (Te(t), null);
        if (((i = (t.flags & 128) !== 0), (r = l.rendering), r === null))
          if (i) Kn(l, !1);
          else {
            if (De !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((r = ir(e)), r !== null)) {
                  for (
                    t.flags |= 128,
                      Kn(l, !1),
                      e = r.updateQueue,
                      t.updateQueue = e,
                      br(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (Rd(a, e), (a = a.sibling));
                  return (
                    Z(Le, (Le.current & 1) | 2),
                    pe && ra(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              bt() > Sr &&
              ((t.flags |= 128), (i = !0), Kn(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = ir(r)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                br(t, e),
                Kn(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !r.alternate &&
                  !pe)
              )
                return (Te(t), null);
            } else
              2 * bt() - l.renderingStartTime > Sr &&
                a !== 536870912 &&
                ((t.flags |= 128), (i = !0), Kn(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((r.sibling = t.child), (t.child = r))
            : ((e = l.last),
              e !== null ? (e.sibling = r) : (t.child = r),
              (l.last = r));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = bt()),
            (e.sibling = null),
            (a = Le.current),
            Z(Le, i ? (a & 1) | 2 : a & 1),
            pe && ra(t, l.treeForkCount),
            e)
          : (Te(t), null);
      case 22:
      case 23:
        return (
          jt(t),
          So(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Te(t),
          (a = t.updateQueue),
          a !== null && br(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && B(cl),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          oa(qe),
          Te(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function Px(e, t) {
    switch ((so(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          oa(qe),
          He(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ai(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((jt(t), t.alternate === null)) throw Error(u(340));
          sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (jt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(u(340));
          sl();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (B(Le), null);
      case 4:
        return (He(), null);
      case 10:
        return (oa(t.type), null);
      case 22:
      case 23:
        return (
          jt(t),
          So(),
          e !== null && B(cl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (oa(qe), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function i0(e, t) {
    switch ((so(t), t.tag)) {
      case 3:
        (oa(qe), He());
        break;
      case 26:
      case 27:
      case 5:
        Ai(t);
        break;
      case 4:
        He();
        break;
      case 31:
        t.memoizedState !== null && jt(t);
        break;
      case 13:
        jt(t);
        break;
      case 19:
        B(Le);
        break;
      case 10:
        oa(t.type);
        break;
      case 22:
      case 23:
        (jt(t), So(), e !== null && B(cl));
        break;
      case 24:
        oa(qe);
    }
  }
  function Jn(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var r = a.create,
              f = a.inst;
            ((l = r()), (f.destroy = l));
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (p) {
      je(t, t.return, p);
    }
  }
  function La(e, t, a) {
    try {
      var l = t.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        l = r;
        do {
          if ((l.tag & e) === e) {
            var f = l.inst,
              p = f.destroy;
            if (p !== void 0) {
              ((f.destroy = void 0), (i = t));
              var w = a,
                E = p;
              try {
                E();
              } catch (U) {
                je(i, w, U);
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (U) {
      je(t, t.return, U);
    }
  }
  function r0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Jd(t, a);
      } catch (l) {
        je(e, e.return, l);
      }
    }
  }
  function s0(e, t, a) {
    ((a.props = pl(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (l) {
      je(e, t, l);
    }
  }
  function Fn(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(l)) : (a.current = l);
      }
    } catch (i) {
      je(e, t, i);
    }
  }
  function Wt(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (i) {
          je(e, t, i);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (i) {
          je(e, t, i);
        }
      else a.current = null;
  }
  function o0(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (i) {
      je(e, e.return, i);
    }
  }
  function tu(e, t, a) {
    try {
      var l = e.stateNode;
      (vg(l, e.type, a, t), (l[ut] = t));
    } catch (i) {
      je(e, e.return, i);
    }
  }
  function u0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Qa(e.type)) ||
      e.tag === 4
    );
  }
  function au(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || u0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Qa(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lu(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = la)));
    else if (
      l !== 4 &&
      (l === 27 && Qa(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (lu(e, t, a), e = e.sibling; e !== null; )
        (lu(e, t, a), (e = e.sibling));
  }
  function yr(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Qa(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (yr(e, t, a), e = e.sibling; e !== null; )
        (yr(e, t, a), (e = e.sibling));
  }
  function c0(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var l = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      (et(t, l, a), (t[Fe] = e), (t[ut] = a));
    } catch (r) {
      je(e, e.return, r);
    }
  }
  var ha = !1,
    Ve = !1,
    nu = !1,
    d0 = typeof WeakSet == "function" ? WeakSet : Set,
    $e = null;
  function Ix(e, t) {
    if (((e = e.containerInfo), (Nu = qr), (e = kd(e)), Fs(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              (a.nodeType, r.nodeType);
            } catch {
              a = null;
              break e;
            }
            var f = 0,
              p = -1,
              w = -1,
              E = 0,
              U = 0,
              q = e,
              _ = null;
            t: for (;;) {
              for (
                var O;
                q !== a || (i !== 0 && q.nodeType !== 3) || (p = f + i),
                  q !== r || (l !== 0 && q.nodeType !== 3) || (w = f + l),
                  q.nodeType === 3 && (f += q.nodeValue.length),
                  (O = q.firstChild) !== null;
              )
                ((_ = q), (q = O));
              for (;;) {
                if (q === e) break t;
                if (
                  (_ === a && ++E === i && (p = f),
                  _ === r && ++U === l && (w = f),
                  (O = q.nextSibling) !== null)
                )
                  break;
                ((q = _), (_ = q.parentNode));
              }
              q = O;
            }
            a = p === -1 || w === -1 ? null : { start: p, end: w };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      zu = { focusedElem: e, selectionRange: a }, qr = !1, $e = t;
      $e !== null;
    )
      if (
        ((t = $e), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), ($e = e));
      else
        for (; $e !== null; ) {
          switch (((t = $e), (r = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((i = e[a]), (i.ref.impl = i.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                ((e = void 0),
                  (a = t),
                  (i = r.memoizedProps),
                  (r = r.memoizedState),
                  (l = a.stateNode));
                try {
                  var J = pl(a.type, i);
                  ((e = l.getSnapshotBeforeUpdate(J, r)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (te) {
                  je(a, a.return, te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  Au(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Au(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), ($e = e));
            break;
          }
          $e = t.return;
        }
  }
  function f0(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (pa(e, a), l & 4 && Jn(5, a));
        break;
      case 1:
        if ((pa(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              je(a, a.return, f);
            }
          else {
            var i = pl(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              je(a, a.return, f);
            }
          }
        (l & 64 && r0(a), l & 512 && Fn(a, a.return));
        break;
      case 3:
        if ((pa(e, a), l & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Jd(e, t);
          } catch (f) {
            je(a, a.return, f);
          }
        }
        break;
      case 27:
        t === null && l & 4 && c0(a);
      case 26:
      case 5:
        (pa(e, a), t === null && l & 4 && o0(a), l & 512 && Fn(a, a.return));
        break;
      case 12:
        pa(e, a);
        break;
      case 31:
        (pa(e, a), l & 4 && p0(e, a));
        break;
      case 13:
        (pa(e, a),
          l & 4 && x0(e, a),
          l & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = og.bind(null, a)), _g(e, a)))));
        break;
      case 22:
        if (((l = a.memoizedState !== null || ha), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Ve), (i = ha));
          var r = Ve;
          ((ha = l),
            (Ve = t) && !r ? xa(e, a, (a.subtreeFlags & 8772) !== 0) : pa(e, a),
            (ha = i),
            (Ve = r));
        }
        break;
      case 30:
        break;
      default:
        pa(e, a);
    }
  }
  function h0(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), h0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Os(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Re = null,
    dt = !1;
  function ma(e, t, a) {
    for (a = a.child; a !== null; ) (m0(e, t, a), (a = a.sibling));
  }
  function m0(e, t, a) {
    if (yt && typeof yt.onCommitFiberUnmount == "function")
      try {
        yt.onCommitFiberUnmount(vn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Ve || Wt(a, t),
          ma(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Ve || Wt(a, t);
        var l = Re,
          i = dt;
        (Qa(a.type) && ((Re = a.stateNode), (dt = !1)),
          ma(e, t, a),
          ii(a.stateNode),
          (Re = l),
          (dt = i));
        break;
      case 5:
        Ve || Wt(a, t);
      case 6:
        if (
          ((l = Re),
          (i = dt),
          (Re = null),
          ma(e, t, a),
          (Re = l),
          (dt = i),
          Re !== null)
        )
          if (dt)
            try {
              (Re.nodeType === 9
                ? Re.body
                : Re.nodeName === "HTML"
                  ? Re.ownerDocument.body
                  : Re
              ).removeChild(a.stateNode);
            } catch (r) {
              je(a, t, r);
            }
          else
            try {
              Re.removeChild(a.stateNode);
            } catch (r) {
              je(a, t, r);
            }
        break;
      case 18:
        Re !== null &&
          (dt
            ? ((e = Re),
              rh(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              sn(e))
            : rh(Re, a.stateNode));
        break;
      case 4:
        ((l = Re),
          (i = dt),
          (Re = a.stateNode.containerInfo),
          (dt = !0),
          ma(e, t, a),
          (Re = l),
          (dt = i));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (La(2, a, t), Ve || La(4, a, t), ma(e, t, a));
        break;
      case 1:
        (Ve ||
          (Wt(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && s0(a, t, l)),
          ma(e, t, a));
        break;
      case 21:
        ma(e, t, a);
        break;
      case 22:
        ((Ve = (l = Ve) || a.memoizedState !== null), ma(e, t, a), (Ve = l));
        break;
      default:
        ma(e, t, a);
    }
  }
  function p0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        sn(e);
      } catch (a) {
        je(t, t.return, a);
      }
    }
  }
  function x0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        sn(e);
      } catch (a) {
        je(t, t.return, a);
      }
  }
  function eg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new d0()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new d0()),
          t
        );
      default:
        throw Error(u(435, e.tag));
    }
  }
  function vr(e, t) {
    var a = eg(e);
    t.forEach(function (l) {
      if (!a.has(l)) {
        a.add(l);
        var i = ug.bind(null, e, l);
        l.then(i, i);
      }
    });
  }
  function ft(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l],
          r = e,
          f = t,
          p = f;
        e: for (; p !== null; ) {
          switch (p.tag) {
            case 27:
              if (Qa(p.type)) {
                ((Re = p.stateNode), (dt = !1));
                break e;
              }
              break;
            case 5:
              ((Re = p.stateNode), (dt = !1));
              break e;
            case 3:
            case 4:
              ((Re = p.stateNode.containerInfo), (dt = !0));
              break e;
          }
          p = p.return;
        }
        if (Re === null) throw Error(u(160));
        (m0(r, f, i),
          (Re = null),
          (dt = !1),
          (r = i.alternate),
          r !== null && (r.return = null),
          (i.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (g0(t, e), (t = t.sibling));
  }
  var Vt = null;
  function g0(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ft(t, e),
          ht(e),
          l & 4 && (La(3, e, e.return), Jn(3, e), La(5, e, e.return)));
        break;
      case 1:
        (ft(t, e),
          ht(e),
          l & 512 && (Ve || a === null || Wt(a, a.return)),
          l & 64 &&
            ha &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l))))));
        break;
      case 26:
        var i = Vt;
        if (
          (ft(t, e),
          ht(e),
          l & 512 && (Ve || a === null || Wt(a, a.return)),
          l & 4)
        ) {
          var r = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (a = e.memoizedProps),
                    (i = i.ownerDocument || i));
                  t: switch (l) {
                    case "title":
                      ((r = i.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Sn] ||
                          r[Fe] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = i.createElement(l)),
                          i.head.insertBefore(
                            r,
                            i.querySelector("head > title"),
                          )),
                        et(r, l, a),
                        (r[Fe] = e),
                        Ze(r),
                        (l = r));
                      break e;
                    case "link":
                      var f = gh("link", "href", i).get(l + (a.href || ""));
                      if (f) {
                        for (var p = 0; p < f.length; p++)
                          if (
                            ((r = f[p]),
                            r.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              r.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              r.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              r.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            f.splice(p, 1);
                            break t;
                          }
                      }
                      ((r = i.createElement(l)),
                        et(r, l, a),
                        i.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (f = gh("meta", "content", i).get(
                          l + (a.content || ""),
                        ))
                      ) {
                        for (p = 0; p < f.length; p++)
                          if (
                            ((r = f[p]),
                            r.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              r.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              r.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              r.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            f.splice(p, 1);
                            break t;
                          }
                      }
                      ((r = i.createElement(l)),
                        et(r, l, a),
                        i.head.appendChild(r));
                      break;
                    default:
                      throw Error(u(468, l));
                  }
                  ((r[Fe] = e), Ze(r), (l = r));
                }
                e.stateNode = l;
              } else bh(i, e.type, e.stateNode);
            else e.stateNode = xh(i, l, e.memoizedProps);
          else
            r !== l
              ? (r === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : r.count--,
                l === null
                  ? bh(i, e.type, e.stateNode)
                  : xh(i, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                tu(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (ft(t, e),
          ht(e),
          l & 512 && (Ve || a === null || Wt(a, a.return)),
          a !== null && l & 4 && tu(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (ft(t, e),
          ht(e),
          l & 512 && (Ve || a === null || Wt(a, a.return)),
          e.flags & 32)
        ) {
          i = e.stateNode;
          try {
            Al(i, "");
          } catch (J) {
            je(e, e.return, J);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((i = e.memoizedProps), tu(e, i, a !== null ? a.memoizedProps : i)),
          l & 1024 && (nu = !0));
        break;
      case 6:
        if ((ft(t, e), ht(e), l & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((l = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = l;
          } catch (J) {
            je(e, e.return, J);
          }
        }
        break;
      case 3:
        if (
          ((Ur = null),
          (i = Vt),
          (Vt = Mr(t.containerInfo)),
          ft(t, e),
          (Vt = i),
          ht(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            sn(t.containerInfo);
          } catch (J) {
            je(e, e.return, J);
          }
        nu && ((nu = !1), b0(e));
        break;
      case 4:
        ((l = Vt),
          (Vt = Mr(e.stateNode.containerInfo)),
          ft(t, e),
          ht(e),
          (Vt = l));
        break;
      case 12:
        (ft(t, e), ht(e));
        break;
      case 31:
        (ft(t, e),
          ht(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vr(e, l))));
        break;
      case 13:
        (ft(t, e),
          ht(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (kr = bt()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vr(e, l))));
        break;
      case 22:
        i = e.memoizedState !== null;
        var w = a !== null && a.memoizedState !== null,
          E = ha,
          U = Ve;
        if (
          ((ha = E || i),
          (Ve = U || w),
          ft(t, e),
          (Ve = U),
          (ha = E),
          ht(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = i ? t._visibility & -2 : t._visibility | 1,
              i && (a === null || w || ha || Ve || xl(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                w = a = t;
                try {
                  if (((r = w.stateNode), i))
                    ((f = r.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none"));
                  else {
                    p = w.stateNode;
                    var q = w.memoizedProps.style,
                      _ =
                        q != null && q.hasOwnProperty("display")
                          ? q.display
                          : null;
                    p.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (J) {
                  je(w, w.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = i ? "" : w.memoizedProps;
                } catch (J) {
                  je(w, w.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                w = t;
                try {
                  var O = w.stateNode;
                  i ? sh(O, !0) : sh(w.stateNode, !1);
                } catch (J) {
                  je(w, w.return, J);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), vr(e, a))));
        break;
      case 19:
        (ft(t, e),
          ht(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), vr(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ft(t, e), ht(e));
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (u0(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(u(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode,
              r = au(e);
            yr(e, r, i);
            break;
          case 5:
            var f = a.stateNode;
            a.flags & 32 && (Al(f, ""), (a.flags &= -33));
            var p = au(e);
            yr(e, p, f);
            break;
          case 3:
          case 4:
            var w = a.stateNode.containerInfo,
              E = au(e);
            lu(e, E, w);
            break;
          default:
            throw Error(u(161));
        }
      } catch (U) {
        je(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function b0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (b0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function pa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (f0(e, t.alternate, t), (t = t.sibling));
  }
  function xl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (La(4, t, t.return), xl(t));
          break;
        case 1:
          Wt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && s0(t, t.return, a),
            xl(t));
          break;
        case 27:
          ii(t.stateNode);
        case 26:
        case 5:
          (Wt(t, t.return), xl(t));
          break;
        case 22:
          t.memoizedState === null && xl(t);
          break;
        case 30:
          xl(t);
          break;
        default:
          xl(t);
      }
      e = e.sibling;
    }
  }
  function xa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        i = e,
        r = t,
        f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (xa(i, r, a), Jn(4, r));
          break;
        case 1:
          if (
            (xa(i, r, a),
            (l = r),
            (i = l.stateNode),
            typeof i.componentDidMount == "function")
          )
            try {
              i.componentDidMount();
            } catch (E) {
              je(l, l.return, E);
            }
          if (((l = r), (i = l.updateQueue), i !== null)) {
            var p = l.stateNode;
            try {
              var w = i.shared.hiddenCallbacks;
              if (w !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < w.length; i++)
                  Kd(w[i], p);
            } catch (E) {
              je(l, l.return, E);
            }
          }
          (a && f & 64 && r0(r), Fn(r, r.return));
          break;
        case 27:
          c0(r);
        case 26:
        case 5:
          (xa(i, r, a), a && l === null && f & 4 && o0(r), Fn(r, r.return));
          break;
        case 12:
          xa(i, r, a);
          break;
        case 31:
          (xa(i, r, a), a && f & 4 && p0(i, r));
          break;
        case 13:
          (xa(i, r, a), a && f & 4 && x0(i, r));
          break;
        case 22:
          (r.memoizedState === null && xa(i, r, a), Fn(r, r.return));
          break;
        case 30:
          break;
        default:
          xa(i, r, a);
      }
      t = t.sibling;
    }
  }
  function iu(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Un(a)));
  }
  function ru(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Un(e)));
  }
  function Xt(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (y0(e, t, a, l), (t = t.sibling));
  }
  function y0(e, t, a, l) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Xt(e, t, a, l), i & 2048 && Jn(9, t));
        break;
      case 1:
        Xt(e, t, a, l);
        break;
      case 3:
        (Xt(e, t, a, l),
          i & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Un(e))));
        break;
      case 12:
        if (i & 2048) {
          (Xt(e, t, a, l), (e = t.stateNode));
          try {
            var r = t.memoizedProps,
              f = r.id,
              p = r.onPostCommit;
            typeof p == "function" &&
              p(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (w) {
            je(t, t.return, w);
          }
        } else Xt(e, t, a, l);
        break;
      case 31:
        Xt(e, t, a, l);
        break;
      case 13:
        Xt(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        ((r = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? r._visibility & 2
              ? Xt(e, t, a, l)
              : Wn(e, t)
            : r._visibility & 2
              ? Xt(e, t, a, l)
              : ((r._visibility |= 2),
                Jl(e, t, a, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          i & 2048 && iu(f, t));
        break;
      case 24:
        (Xt(e, t, a, l), i & 2048 && ru(t.alternate, t));
        break;
      default:
        Xt(e, t, a, l);
    }
  }
  function Jl(e, t, a, l, i) {
    for (
      i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var r = e,
        f = t,
        p = a,
        w = l,
        E = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          (Jl(r, f, p, w, i), Jn(8, f));
          break;
        case 23:
          break;
        case 22:
          var U = f.stateNode;
          (f.memoizedState !== null
            ? U._visibility & 2
              ? Jl(r, f, p, w, i)
              : Wn(r, f)
            : ((U._visibility |= 2), Jl(r, f, p, w, i)),
            i && E & 2048 && iu(f.alternate, f));
          break;
        case 24:
          (Jl(r, f, p, w, i), i && E & 2048 && ru(f.alternate, f));
          break;
        default:
          Jl(r, f, p, w, i);
      }
      t = t.sibling;
    }
  }
  function Wn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          i = l.flags;
        switch (l.tag) {
          case 22:
            (Wn(a, l), i & 2048 && iu(l.alternate, l));
            break;
          case 24:
            (Wn(a, l), i & 2048 && ru(l.alternate, l));
            break;
          default:
            Wn(a, l);
        }
        t = t.sibling;
      }
  }
  var Pn = 8192;
  function Fl(e, t, a) {
    if (e.subtreeFlags & Pn)
      for (e = e.child; e !== null; ) (v0(e, t, a), (e = e.sibling));
  }
  function v0(e, t, a) {
    switch (e.tag) {
      case 26:
        (Fl(e, t, a),
          e.flags & Pn &&
            e.memoizedState !== null &&
            qg(a, Vt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Fl(e, t, a);
        break;
      case 3:
      case 4:
        var l = Vt;
        ((Vt = Mr(e.stateNode.containerInfo)), Fl(e, t, a), (Vt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Pn), (Pn = 16777216), Fl(e, t, a), (Pn = l))
            : Fl(e, t, a));
        break;
      default:
        Fl(e, t, a);
    }
  }
  function w0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function In(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (($e = l), S0(l, e));
        }
      w0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (k0(e), (e = e.sibling));
  }
  function k0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (In(e), e.flags & 2048 && La(9, e, e.return));
        break;
      case 3:
        In(e);
        break;
      case 12:
        In(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), wr(e))
          : In(e);
        break;
      default:
        In(e);
    }
  }
  function wr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (($e = l), S0(l, e));
        }
      w0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (La(8, t, t.return), wr(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), wr(t)));
          break;
        default:
          wr(t);
      }
      e = e.sibling;
    }
  }
  function S0(e, t) {
    for (; $e !== null; ) {
      var a = $e;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          La(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Un(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) ((l.return = a), ($e = l));
      else
        e: for (a = e; $e !== null; ) {
          l = $e;
          var i = l.sibling,
            r = l.return;
          if ((h0(l), l === a)) {
            $e = null;
            break e;
          }
          if (i !== null) {
            ((i.return = r), ($e = i));
            break e;
          }
          $e = r;
        }
    }
  }
  var tg = {
      getCacheForType: function (e) {
        var t = Pe(qe),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return Pe(qe).controller.signal;
      },
    },
    ag = typeof WeakMap == "function" ? WeakMap : Map,
    ve = 0,
    _e = null,
    de = null,
    he = 0,
    Se = 0,
    Nt = null,
    Ba = !1,
    Wl = !1,
    su = !1,
    ga = 0,
    De = 0,
    qa = 0,
    gl = 0,
    ou = 0,
    zt = 0,
    Pl = 0,
    ei = null,
    mt = null,
    uu = !1,
    kr = 0,
    j0 = 0,
    Sr = 1 / 0,
    jr = null,
    Ga = null,
    Qe = 0,
    Ya = null,
    Il = null,
    ba = 0,
    cu = 0,
    du = null,
    N0 = null,
    ti = 0,
    fu = null;
  function Et() {
    return (ve & 2) !== 0 && he !== 0 ? he & -he : M.T !== null ? bu() : qc();
  }
  function z0() {
    if (zt === 0)
      if ((he & 536870912) === 0 || pe) {
        var e = Ci;
        ((Ci <<= 1), (Ci & 3932160) === 0 && (Ci = 262144), (zt = e));
      } else zt = 536870912;
    return ((e = St.current), e !== null && (e.flags |= 32), zt);
  }
  function pt(e, t, a) {
    (((e === _e && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null) &&
      (en(e, 0), Va(e, he, zt, !1)),
      kn(e, a),
      ((ve & 2) === 0 || e !== _e) &&
        (e === _e &&
          ((ve & 2) === 0 && (gl |= a), De === 4 && Va(e, he, zt, !1)),
        Pt(e)));
  }
  function E0(e, t, a) {
    if ((ve & 6) !== 0) throw Error(u(327));
    var l = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || wn(e, t),
      i = l ? ig(e, t) : mu(e, t, !0),
      r = l;
    do {
      if (i === 0) {
        Wl && !l && Va(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), r && !lg(a))) {
          ((i = mu(e, t, !1)), (r = !1));
          continue;
        }
        if (i === 2) {
          if (((r = t), e.errorRecoveryDisabledLanes & r)) var f = 0;
          else
            ((f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0));
          if (f !== 0) {
            t = f;
            e: {
              var p = e;
              i = ei;
              var w = p.current.memoizedState.isDehydrated;
              if ((w && (en(p, f).flags |= 256), (f = mu(p, f, !1)), f !== 2)) {
                if (su && !w) {
                  ((p.errorRecoveryDisabledLanes |= r), (gl |= r), (i = 4));
                  break e;
                }
                ((r = mt),
                  (mt = i),
                  r !== null &&
                    (mt === null ? (mt = r) : mt.push.apply(mt, r)));
              }
              i = f;
            }
            if (((r = !1), i !== 2)) continue;
          }
        }
        if (i === 1) {
          (en(e, 0), Va(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (r = i), r)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Va(l, t, zt, !Ba);
              break e;
            case 2:
              mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((t & 62914560) === t && ((i = kr + 300 - bt()), 10 < i)) {
            if ((Va(l, t, zt, !Ba), Mi(l, 0, !0) !== 0)) break e;
            ((ba = t),
              (l.timeoutHandle = nh(
                _0.bind(
                  null,
                  l,
                  a,
                  mt,
                  jr,
                  uu,
                  t,
                  zt,
                  gl,
                  Pl,
                  Ba,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                i,
              )));
            break e;
          }
          _0(l, a, mt, jr, uu, t, zt, gl, Pl, Ba, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Pt(e);
  }
  function _0(e, t, a, l, i, r, f, p, w, E, U, q, _, O) {
    if (
      ((e.timeoutHandle = -1),
      (q = t.subtreeFlags),
      q & 8192 || (q & 16785408) === 16785408)
    ) {
      ((q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: la,
      }),
        v0(t, r, q));
      var J =
        (r & 62914560) === r ? kr - bt() : (r & 4194048) === r ? j0 - bt() : 0;
      if (((J = Gg(q, J)), J !== null)) {
        ((ba = r),
          (e.cancelPendingCommit = J(
            U0.bind(null, e, t, r, a, l, i, f, p, w, U, q, null, _, O),
          )),
          Va(e, r, f, !E));
        return;
      }
    }
    U0(e, t, r, a, l, i, f, p, w);
  }
  function lg(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var i = a[l],
            r = i.getSnapshot;
          i = i.value;
          try {
            if (!wt(r(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
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
  function Va(e, t, a, l) {
    ((t &= ~ou),
      (t &= ~gl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var i = t; 0 < i; ) {
      var r = 31 - vt(i),
        f = 1 << r;
      ((l[r] = -1), (i &= ~f));
    }
    a !== 0 && Hc(e, a, t);
  }
  function Nr() {
    return (ve & 6) === 0 ? (ai(0), !1) : !0;
  }
  function hu() {
    if (de !== null) {
      if (Se === 0) var e = de.return;
      else ((e = de), (sa = ol = null), Ao(e), (Xl = null), (Ln = 0), (e = de));
      for (; e !== null; ) (i0(e.alternate, e), (e = e.return));
      de = null;
    }
  }
  function en(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), Sg(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (ba = 0),
      hu(),
      (_e = e),
      (de = a = ia(e.current, null)),
      (he = t),
      (Se = 0),
      (Nt = null),
      (Ba = !1),
      (Wl = wn(e, t)),
      (su = !1),
      (Pl = zt = ou = gl = qa = De = 0),
      (mt = ei = null),
      (uu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var i = 31 - vt(l),
          r = 1 << i;
        ((t |= e[i]), (l &= ~r));
      }
    return ((ga = t), Zi(), a);
  }
  function A0(e, t) {
    ((se = null),
      (M.H = Zn),
      t === Vl || t === er
        ? ((t = Xd()), (Se = 3))
        : t === go
          ? ((t = Xd()), (Se = 4))
          : (Se =
              t === Qo
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Nt = t),
      de === null && ((De = 1), mr(e, Ct(t, e.current))));
  }
  function T0() {
    var e = St.current;
    return e === null
      ? !0
      : (he & 4194048) === he
        ? Ut === null
        : (he & 62914560) === he || (he & 536870912) !== 0
          ? e === Ut
          : !1;
  }
  function R0() {
    var e = M.H;
    return ((M.H = Zn), e === null ? Zn : e);
  }
  function C0() {
    var e = M.A;
    return ((M.A = tg), e);
  }
  function zr() {
    ((De = 4),
      Ba || ((he & 4194048) !== he && St.current !== null) || (Wl = !0),
      ((qa & 134217727) === 0 && (gl & 134217727) === 0) ||
        _e === null ||
        Va(_e, he, zt, !1));
  }
  function mu(e, t, a) {
    var l = ve;
    ve |= 2;
    var i = R0(),
      r = C0();
    ((_e !== e || he !== t) && ((jr = null), en(e, t)), (t = !1));
    var f = De;
    e: do
      try {
        if (Se !== 0 && de !== null) {
          var p = de,
            w = Nt;
          switch (Se) {
            case 8:
              (hu(), (f = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var E = Se;
              if (((Se = 0), (Nt = null), tn(e, p, w, E), a && Wl)) {
                f = 0;
                break e;
              }
              break;
            default:
              ((E = Se), (Se = 0), (Nt = null), tn(e, p, w, E));
          }
        }
        (ng(), (f = De));
        break;
      } catch (U) {
        A0(e, U);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (sa = ol = null),
      (ve = l),
      (M.H = i),
      (M.A = r),
      de === null && ((_e = null), (he = 0), Zi()),
      f
    );
  }
  function ng() {
    for (; de !== null; ) O0(de);
  }
  function ig(e, t) {
    var a = ve;
    ve |= 2;
    var l = R0(),
      i = C0();
    _e !== e || he !== t
      ? ((jr = null), (Sr = bt() + 500), en(e, t))
      : (Wl = wn(e, t));
    e: do
      try {
        if (Se !== 0 && de !== null) {
          t = de;
          var r = Nt;
          t: switch (Se) {
            case 1:
              ((Se = 0), (Nt = null), tn(e, t, r, 1));
              break;
            case 2:
            case 9:
              if (Yd(r)) {
                ((Se = 0), (Nt = null), M0(t));
                break;
              }
              ((t = function () {
                ((Se !== 2 && Se !== 9) || _e !== e || (Se = 7), Pt(e));
              }),
                r.then(t, t));
              break e;
            case 3:
              Se = 7;
              break e;
            case 4:
              Se = 5;
              break e;
            case 7:
              Yd(r)
                ? ((Se = 0), (Nt = null), M0(t))
                : ((Se = 0), (Nt = null), tn(e, t, r, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var p = de;
                  if (f ? yh(f) : p.stateNode.complete) {
                    ((Se = 0), (Nt = null));
                    var w = p.sibling;
                    if (w !== null) de = w;
                    else {
                      var E = p.return;
                      E !== null ? ((de = E), Er(E)) : (de = null);
                    }
                    break t;
                  }
              }
              ((Se = 0), (Nt = null), tn(e, t, r, 5));
              break;
            case 6:
              ((Se = 0), (Nt = null), tn(e, t, r, 6));
              break;
            case 8:
              (hu(), (De = 6));
              break e;
            default:
              throw Error(u(462));
          }
        }
        rg();
        break;
      } catch (U) {
        A0(e, U);
      }
    while (!0);
    return (
      (sa = ol = null),
      (M.H = l),
      (M.A = i),
      (ve = a),
      de !== null ? 0 : ((_e = null), (he = 0), Zi(), De)
    );
  }
  function rg() {
    for (; de !== null && !Ap(); ) O0(de);
  }
  function O0(e) {
    var t = l0(e.alternate, e, ga);
    ((e.memoizedProps = e.pendingProps), t === null ? Er(e) : (de = t));
  }
  function M0(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wf(a, t, t.pendingProps, t.type, void 0, he);
        break;
      case 11:
        t = Wf(a, t, t.pendingProps, t.type.render, t.ref, he);
        break;
      case 5:
        Ao(t);
      default:
        (i0(a, t), (t = de = Rd(t, ga)), (t = l0(a, t, ga)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Er(e) : (de = t));
  }
  function tn(e, t, a, l) {
    ((sa = ol = null), Ao(t), (Xl = null), (Ln = 0));
    var i = t.return;
    try {
      if (Kx(e, i, t, a, he)) {
        ((De = 1), mr(e, Ct(a, e.current)), (de = null));
        return;
      }
    } catch (r) {
      if (i !== null) throw ((de = i), r);
      ((De = 1), mr(e, Ct(a, e.current)), (de = null));
      return;
    }
    t.flags & 32768
      ? (pe || l === 1
          ? (e = !0)
          : Wl || (he & 536870912) !== 0
            ? (e = !1)
            : ((Ba = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = St.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        D0(t, e))
      : Er(t);
  }
  function Er(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        D0(t, Ba);
        return;
      }
      e = t.return;
      var a = Wx(t.alternate, t, ga);
      if (a !== null) {
        de = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    De === 0 && (De = 5);
  }
  function D0(e, t) {
    do {
      var a = Px(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (de = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        de = e;
        return;
      }
      de = e = a;
    } while (e !== null);
    ((De = 6), (de = null));
  }
  function U0(e, t, a, l, i, r, f, p, w) {
    e.cancelPendingCommit = null;
    do _r();
    while (Qe !== 0);
    if ((ve & 6) !== 0) throw Error(u(327));
    if (t !== null) {
      if (t === e.current) throw Error(u(177));
      if (
        ((r = t.lanes | t.childLanes),
        (r |= to),
        Bp(e, a, r, f, p, w),
        e === _e && ((de = _e = null), (he = 0)),
        (Il = t),
        (Ya = e),
        (ba = a),
        (cu = r),
        (du = i),
        (N0 = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            cg(Ti, function () {
              return (G0(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = M.T), (M.T = null), (i = Q.p), (Q.p = 2), (f = ve), (ve |= 4));
        try {
          Ix(e, t, a);
        } finally {
          ((ve = f), (Q.p = i), (M.T = l));
        }
      }
      ((Qe = 1), H0(), L0(), B0());
    }
  }
  function H0() {
    if (Qe === 1) {
      Qe = 0;
      var e = Ya,
        t = Il,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = Q.p;
        Q.p = 2;
        var i = ve;
        ve |= 4;
        try {
          g0(t, e);
          var r = zu,
            f = kd(e.containerInfo),
            p = r.focusedElem,
            w = r.selectionRange;
          if (
            f !== p &&
            p &&
            p.ownerDocument &&
            wd(p.ownerDocument.documentElement, p)
          ) {
            if (w !== null && Fs(p)) {
              var E = w.start,
                U = w.end;
              if ((U === void 0 && (U = E), "selectionStart" in p))
                ((p.selectionStart = E),
                  (p.selectionEnd = Math.min(U, p.value.length)));
              else {
                var q = p.ownerDocument || document,
                  _ = (q && q.defaultView) || window;
                if (_.getSelection) {
                  var O = _.getSelection(),
                    J = p.textContent.length,
                    te = Math.min(w.start, J),
                    Ee = w.end === void 0 ? te : Math.min(w.end, J);
                  !O.extend && te > Ee && ((f = Ee), (Ee = te), (te = f));
                  var N = vd(p, te),
                    S = vd(p, Ee);
                  if (
                    N &&
                    S &&
                    (O.rangeCount !== 1 ||
                      O.anchorNode !== N.node ||
                      O.anchorOffset !== N.offset ||
                      O.focusNode !== S.node ||
                      O.focusOffset !== S.offset)
                  ) {
                    var z = q.createRange();
                    (z.setStart(N.node, N.offset),
                      O.removeAllRanges(),
                      te > Ee
                        ? (O.addRange(z), O.extend(S.node, S.offset))
                        : (z.setEnd(S.node, S.offset), O.addRange(z)));
                  }
                }
              }
            }
            for (q = [], O = p; (O = O.parentNode); )
              O.nodeType === 1 &&
                q.push({ element: O, left: O.scrollLeft, top: O.scrollTop });
            for (
              typeof p.focus == "function" && p.focus(), p = 0;
              p < q.length;
              p++
            ) {
              var L = q[p];
              ((L.element.scrollLeft = L.left), (L.element.scrollTop = L.top));
            }
          }
          ((qr = !!Nu), (zu = Nu = null));
        } finally {
          ((ve = i), (Q.p = l), (M.T = a));
        }
      }
      ((e.current = t), (Qe = 2));
    }
  }
  function L0() {
    if (Qe === 2) {
      Qe = 0;
      var e = Ya,
        t = Il,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = M.T), (M.T = null));
        var l = Q.p;
        Q.p = 2;
        var i = ve;
        ve |= 4;
        try {
          f0(e, t.alternate, t);
        } finally {
          ((ve = i), (Q.p = l), (M.T = a));
        }
      }
      Qe = 3;
    }
  }
  function B0() {
    if (Qe === 4 || Qe === 3) {
      ((Qe = 0), Tp());
      var e = Ya,
        t = Il,
        a = ba,
        l = N0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Qe = 5)
        : ((Qe = 0), (Il = Ya = null), q0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (
        (i === 0 && (Ga = null),
        Rs(a),
        (t = t.stateNode),
        yt && typeof yt.onCommitFiberRoot == "function")
      )
        try {
          yt.onCommitFiberRoot(vn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = M.T), (i = Q.p), (Q.p = 2), (M.T = null));
        try {
          for (var r = e.onRecoverableError, f = 0; f < l.length; f++) {
            var p = l[f];
            r(p.value, { componentStack: p.stack });
          }
        } finally {
          ((M.T = t), (Q.p = i));
        }
      }
      ((ba & 3) !== 0 && _r(),
        Pt(e),
        (i = e.pendingLanes),
        (a & 261930) !== 0 && (i & 42) !== 0
          ? e === fu
            ? ti++
            : ((ti = 0), (fu = e))
          : (ti = 0),
        ai(0));
    }
  }
  function q0(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Un(t)));
  }
  function _r() {
    return (H0(), L0(), B0(), G0());
  }
  function G0() {
    if (Qe !== 5) return !1;
    var e = Ya,
      t = cu;
    cu = 0;
    var a = Rs(ba),
      l = M.T,
      i = Q.p;
    try {
      ((Q.p = 32 > a ? 32 : a), (M.T = null), (a = du), (du = null));
      var r = Ya,
        f = ba;
      if (((Qe = 0), (Il = Ya = null), (ba = 0), (ve & 6) !== 0))
        throw Error(u(331));
      var p = ve;
      if (
        ((ve |= 4),
        k0(r.current),
        y0(r, r.current, f, a),
        (ve = p),
        ai(0, !1),
        yt && typeof yt.onPostCommitFiberRoot == "function")
      )
        try {
          yt.onPostCommitFiberRoot(vn, r);
        } catch {}
      return !0;
    } finally {
      ((Q.p = i), (M.T = l), q0(e, t));
    }
  }
  function Y0(e, t, a) {
    ((t = Ct(a, t)),
      (t = Xo(e.stateNode, t, 2)),
      (e = Da(e, t, 2)),
      e !== null && (kn(e, 2), Pt(e)));
  }
  function je(e, t, a) {
    if (e.tag === 3) Y0(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Y0(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (Ga === null || !Ga.has(l)))
          ) {
            ((e = Ct(a, e)),
              (a = Vf(2)),
              (l = Da(t, a, 2)),
              l !== null && (Xf(a, l, t, e), kn(l, 2), Pt(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function pu(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ag();
      var i = new Set();
      l.set(t, i);
    } else ((i = l.get(t)), i === void 0 && ((i = new Set()), l.set(t, i)));
    i.has(a) ||
      ((su = !0), i.add(a), (e = sg.bind(null, e, t, a)), t.then(e, e));
  }
  function sg(e, t, a) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      _e === e &&
        (he & a) === a &&
        (De === 4 || (De === 3 && (he & 62914560) === he && 300 > bt() - kr)
          ? (ve & 2) === 0 && en(e, 0)
          : (ou |= a),
        Pl === he && (Pl = 0)),
      Pt(e));
  }
  function V0(e, t) {
    (t === 0 && (t = Uc()), (e = il(e, t)), e !== null && (kn(e, t), Pt(e)));
  }
  function og(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), V0(e, a));
  }
  function ug(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          i = e.memoizedState;
        i !== null && (a = i.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (l !== null && l.delete(t), V0(e, a));
  }
  function cg(e, t) {
    return Es(e, t);
  }
  var Ar = null,
    an = null,
    xu = !1,
    Tr = !1,
    gu = !1,
    Xa = 0;
  function Pt(e) {
    (e !== an &&
      e.next === null &&
      (an === null ? (Ar = an = e) : (an = an.next = e)),
      (Tr = !0),
      xu || ((xu = !0), fg()));
  }
  function ai(e, t) {
    if (!gu && Tr) {
      gu = !0;
      do
        for (var a = !1, l = Ar; l !== null; ) {
          if (e !== 0) {
            var i = l.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var f = l.suspendedLanes,
                p = l.pingedLanes;
              ((r = (1 << (31 - vt(42 | e) + 1)) - 1),
                (r &= i & ~(f & ~p)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((a = !0), $0(l, r));
          } else
            ((r = he),
              (r = Mi(
                l,
                l === _e ? r : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || wn(l, r) || ((a = !0), $0(l, r)));
          l = l.next;
        }
      while (a);
      gu = !1;
    }
  }
  function dg() {
    X0();
  }
  function X0() {
    Tr = xu = !1;
    var e = 0;
    Xa !== 0 && kg() && (e = Xa);
    for (var t = bt(), a = null, l = Ar; l !== null; ) {
      var i = l.next,
        r = Q0(l, t);
      (r === 0
        ? ((l.next = null),
          a === null ? (Ar = i) : (a.next = i),
          i === null && (an = a))
        : ((a = l), (e !== 0 || (r & 3) !== 0) && (Tr = !0)),
        (l = i));
    }
    ((Qe !== 0 && Qe !== 5) || ai(e), Xa !== 0 && (Xa = 0));
  }
  function Q0(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        i = e.expirationTimes,
        r = e.pendingLanes & -62914561;
      0 < r;
    ) {
      var f = 31 - vt(r),
        p = 1 << f,
        w = i[f];
      (w === -1
        ? ((p & a) === 0 || (p & l) !== 0) && (i[f] = Lp(p, t))
        : w <= t && (e.expiredLanes |= p),
        (r &= ~p));
    }
    if (
      ((t = _e),
      (a = he),
      (a = Mi(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      a === 0 ||
        (e === t && (Se === 2 || Se === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && _s(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || wn(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && _s(l), Rs(a))) {
        case 2:
        case 8:
          a = Mc;
          break;
        case 32:
          a = Ti;
          break;
        case 268435456:
          a = Dc;
          break;
        default:
          a = Ti;
      }
      return (
        (l = Z0.bind(null, e)),
        (a = Es(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && _s(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Z0(e, t) {
    if (Qe !== 0 && Qe !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (_r() && e.callbackNode !== a) return null;
    var l = he;
    return (
      (l = Mi(
        e,
        e === _e ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (E0(e, l, t),
          Q0(e, bt()),
          e.callbackNode != null && e.callbackNode === a
            ? Z0.bind(null, e)
            : null)
    );
  }
  function $0(e, t) {
    if (_r()) return null;
    E0(e, t, !0);
  }
  function fg() {
    jg(function () {
      (ve & 6) !== 0 ? Es(Oc, dg) : X0();
    });
  }
  function bu() {
    if (Xa === 0) {
      var e = Gl;
      (e === 0 && ((e = Ri), (Ri <<= 1), (Ri & 261888) === 0 && (Ri = 256)),
        (Xa = e));
    }
    return Xa;
  }
  function K0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : Li("" + e);
  }
  function J0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function hg(e, t, a, l, i) {
    if (t === "submit" && a && a.stateNode === i) {
      var r = K0((i[ut] || null).action),
        f = l.submitter;
      f &&
        ((t = (t = f[ut] || null)
          ? K0(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((r = t), (f = null)));
      var p = new Yi("action", "action", null, l, i);
      e.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Xa !== 0) {
                  var w = f ? J0(i, f) : new FormData(i);
                  Lo(
                    a,
                    { pending: !0, data: w, method: i.method, action: r },
                    null,
                    w,
                  );
                }
              } else
                typeof r == "function" &&
                  (p.preventDefault(),
                  (w = f ? J0(i, f) : new FormData(i)),
                  Lo(
                    a,
                    { pending: !0, data: w, method: i.method, action: r },
                    r,
                    w,
                  ));
            },
            currentTarget: i,
          },
        ],
      });
    }
  }
  for (var yu = 0; yu < eo.length; yu++) {
    var vu = eo[yu],
      mg = vu.toLowerCase(),
      pg = vu[0].toUpperCase() + vu.slice(1);
    Yt(mg, "on" + pg);
  }
  (Yt(Nd, "onAnimationEnd"),
    Yt(zd, "onAnimationIteration"),
    Yt(Ed, "onAnimationStart"),
    Yt("dblclick", "onDoubleClick"),
    Yt("focusin", "onFocus"),
    Yt("focusout", "onBlur"),
    Yt(Rx, "onTransitionRun"),
    Yt(Cx, "onTransitionStart"),
    Yt(Ox, "onTransitionCancel"),
    Yt(_d, "onTransitionEnd"),
    El("onMouseEnter", ["mouseout", "mouseover"]),
    El("onMouseLeave", ["mouseout", "mouseover"]),
    El("onPointerEnter", ["pointerout", "pointerover"]),
    El("onPointerLeave", ["pointerout", "pointerover"]),
    tl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    tl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    tl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    tl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    tl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    tl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var li =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    xg = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(li),
    );
  function F0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        i = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = l.length - 1; 0 <= f; f--) {
            var p = l[f],
              w = p.instance,
              E = p.currentTarget;
            if (((p = p.listener), w !== r && i.isPropagationStopped()))
              break e;
            ((r = p), (i.currentTarget = E));
            try {
              r(i);
            } catch (U) {
              Qi(U);
            }
            ((i.currentTarget = null), (r = w));
          }
        else
          for (f = 0; f < l.length; f++) {
            if (
              ((p = l[f]),
              (w = p.instance),
              (E = p.currentTarget),
              (p = p.listener),
              w !== r && i.isPropagationStopped())
            )
              break e;
            ((r = p), (i.currentTarget = E));
            try {
              r(i);
            } catch (U) {
              Qi(U);
            }
            ((i.currentTarget = null), (r = w));
          }
      }
    }
  }
  function fe(e, t) {
    var a = t[Cs];
    a === void 0 && (a = t[Cs] = new Set());
    var l = e + "__bubble";
    a.has(l) || (W0(t, e, 2, !1), a.add(l));
  }
  function wu(e, t, a) {
    var l = 0;
    (t && (l |= 4), W0(a, e, l, t));
  }
  var Rr = "_reactListening" + Math.random().toString(36).slice(2);
  function ku(e) {
    if (!e[Rr]) {
      ((e[Rr] = !0),
        Vc.forEach(function (a) {
          a !== "selectionchange" && (xg.has(a) || wu(a, !1, e), wu(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Rr] || ((t[Rr] = !0), wu("selectionchange", !1, t));
    }
  }
  function W0(e, t, a, l) {
    switch (zh(t)) {
      case 2:
        var i = Xg;
        break;
      case 8:
        i = Qg;
        break;
      default:
        i = Hu;
    }
    ((a = i.bind(null, t, a, e)),
      (i = void 0),
      !Gs ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      l
        ? i !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: i })
          : e.addEventListener(t, a, !0)
        : i !== void 0
          ? e.addEventListener(t, a, { passive: i })
          : e.addEventListener(t, a, !1));
  }
  function Su(e, t, a, l, i) {
    var r = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var f = l.tag;
        if (f === 3 || f === 4) {
          var p = l.stateNode.containerInfo;
          if (p === i) break;
          if (f === 4)
            for (f = l.return; f !== null; ) {
              var w = f.tag;
              if ((w === 3 || w === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (((f = jl(p)), f === null)) return;
            if (((w = f.tag), w === 5 || w === 6 || w === 26 || w === 27)) {
              l = r = f;
              continue e;
            }
            p = p.parentNode;
          }
        }
        l = l.return;
      }
    td(function () {
      var E = r,
        U = Bs(a),
        q = [];
      e: {
        var _ = Ad.get(e);
        if (_ !== void 0) {
          var O = Yi,
            J = e;
          switch (e) {
            case "keypress":
              if (qi(a) === 0) break e;
            case "keydown":
            case "keyup":
              O = ux;
              break;
            case "focusin":
              ((J = "focus"), (O = Qs));
              break;
            case "focusout":
              ((J = "blur"), (O = Qs));
              break;
            case "beforeblur":
            case "afterblur":
              O = Qs;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = nd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Wp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = fx;
              break;
            case Nd:
            case zd:
            case Ed:
              O = ex;
              break;
            case _d:
              O = mx;
              break;
            case "scroll":
            case "scrollend":
              O = Jp;
              break;
            case "wheel":
              O = xx;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = ax;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = rd;
              break;
            case "toggle":
            case "beforetoggle":
              O = bx;
          }
          var te = (t & 4) !== 0,
            Ee = !te && (e === "scroll" || e === "scrollend"),
            N = te ? (_ !== null ? _ + "Capture" : null) : _;
          te = [];
          for (var S = E, z; S !== null; ) {
            var L = S;
            if (
              ((z = L.stateNode),
              (L = L.tag),
              (L !== 5 && L !== 26 && L !== 27) ||
                z === null ||
                N === null ||
                ((L = Nn(S, N)), L != null && te.push(ni(S, L, z))),
              Ee)
            )
              break;
            S = S.return;
          }
          0 < te.length &&
            ((_ = new O(_, J, null, a, U)),
            q.push({ event: _, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((_ = e === "mouseover" || e === "pointerover"),
            (O = e === "mouseout" || e === "pointerout"),
            _ &&
              a !== Ls &&
              (J = a.relatedTarget || a.fromElement) &&
              (jl(J) || J[Sl]))
          )
            break e;
          if (
            (O || _) &&
            ((_ =
              U.window === U
                ? U
                : (_ = U.ownerDocument)
                  ? _.defaultView || _.parentWindow
                  : window),
            O
              ? ((J = a.relatedTarget || a.toElement),
                (O = E),
                (J = J ? jl(J) : null),
                J !== null &&
                  ((Ee = h(J)),
                  (te = J.tag),
                  J !== Ee || (te !== 5 && te !== 27 && te !== 6)) &&
                  (J = null))
              : ((O = null), (J = E)),
            O !== J)
          ) {
            if (
              ((te = nd),
              (L = "onMouseLeave"),
              (N = "onMouseEnter"),
              (S = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((te = rd),
                (L = "onPointerLeave"),
                (N = "onPointerEnter"),
                (S = "pointer")),
              (Ee = O == null ? _ : jn(O)),
              (z = J == null ? _ : jn(J)),
              (_ = new te(L, S + "leave", O, a, U)),
              (_.target = Ee),
              (_.relatedTarget = z),
              (L = null),
              jl(U) === E &&
                ((te = new te(N, S + "enter", J, a, U)),
                (te.target = z),
                (te.relatedTarget = Ee),
                (L = te)),
              (Ee = L),
              O && J)
            )
              t: {
                for (te = gg, N = O, S = J, z = 0, L = N; L; L = te(L)) z++;
                L = 0;
                for (var ee = S; ee; ee = te(ee)) L++;
                for (; 0 < z - L; ) ((N = te(N)), z--);
                for (; 0 < L - z; ) ((S = te(S)), L--);
                for (; z--; ) {
                  if (N === S || (S !== null && N === S.alternate)) {
                    te = N;
                    break t;
                  }
                  ((N = te(N)), (S = te(S)));
                }
                te = null;
              }
            else te = null;
            (O !== null && P0(q, _, O, te, !1),
              J !== null && Ee !== null && P0(q, Ee, J, te, !0));
          }
        }
        e: {
          if (
            ((_ = E ? jn(E) : window),
            (O = _.nodeName && _.nodeName.toLowerCase()),
            O === "select" || (O === "input" && _.type === "file"))
          )
            var ge = md;
          else if (fd(_))
            if (pd) ge = _x;
            else {
              ge = zx;
              var W = Nx;
            }
          else
            ((O = _.nodeName),
              !O ||
              O.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? E && Hs(E.elementType) && (ge = md)
                : (ge = Ex));
          if (ge && (ge = ge(e, E))) {
            hd(q, ge, a, U);
            break e;
          }
          (W && W(e, _, E),
            e === "focusout" &&
              E &&
              _.type === "number" &&
              E.memoizedProps.value != null &&
              Us(_, "number", _.value));
        }
        switch (((W = E ? jn(E) : window), e)) {
          case "focusin":
            (fd(W) || W.contentEditable === "true") &&
              ((Ol = W), (Ws = E), (On = null));
            break;
          case "focusout":
            On = Ws = Ol = null;
            break;
          case "mousedown":
            Ps = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Ps = !1), Sd(q, a, U));
            break;
          case "selectionchange":
            if (Tx) break;
          case "keydown":
          case "keyup":
            Sd(q, a, U);
        }
        var oe;
        if ($s)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          Cl
            ? cd(e, a) && (me = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (me = "onCompositionStart");
        (me &&
          (sd &&
            a.locale !== "ko" &&
            (Cl || me !== "onCompositionStart"
              ? me === "onCompositionEnd" && Cl && (oe = ad())
              : ((_a = U),
                (Ys = "value" in _a ? _a.value : _a.textContent),
                (Cl = !0))),
          (W = Cr(E, me)),
          0 < W.length &&
            ((me = new id(me, e, null, a, U)),
            q.push({ event: me, listeners: W }),
            oe
              ? (me.data = oe)
              : ((oe = dd(a)), oe !== null && (me.data = oe)))),
          (oe = vx ? wx(e, a) : kx(e, a)) &&
            ((me = Cr(E, "onBeforeInput")),
            0 < me.length &&
              ((W = new id("onBeforeInput", "beforeinput", null, a, U)),
              q.push({ event: W, listeners: me }),
              (W.data = oe))),
          hg(q, e, E, a, U));
      }
      F0(q, t);
    });
  }
  function ni(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Cr(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var i = e,
        r = i.stateNode;
      if (
        ((i = i.tag),
        (i !== 5 && i !== 26 && i !== 27) ||
          r === null ||
          ((i = Nn(e, a)),
          i != null && l.unshift(ni(e, i, r)),
          (i = Nn(e, t)),
          i != null && l.push(ni(e, i, r))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function gg(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function P0(e, t, a, l, i) {
    for (var r = t._reactName, f = []; a !== null && a !== l; ) {
      var p = a,
        w = p.alternate,
        E = p.stateNode;
      if (((p = p.tag), w !== null && w === l)) break;
      ((p !== 5 && p !== 26 && p !== 27) ||
        E === null ||
        ((w = E),
        i
          ? ((E = Nn(a, r)), E != null && f.unshift(ni(a, E, w)))
          : i || ((E = Nn(a, r)), E != null && f.push(ni(a, E, w)))),
        (a = a.return));
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var bg = /\r\n?/g,
    yg = /\u0000|\uFFFD/g;
  function I0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        bg,
        `
`,
      )
      .replace(yg, "");
  }
  function eh(e, t) {
    return ((t = I0(t)), I0(e) === t);
  }
  function ze(e, t, a, l, i, r) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || Al(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            Al(e, "" + l);
        break;
      case "className":
        Ui(e, "class", l);
        break;
      case "tabIndex":
        Ui(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ui(e, a, l);
        break;
      case "style":
        Ic(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          Ui(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((l = Li("" + l)), e.setAttribute(a, l));
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (a === "formAction"
              ? (t !== "input" && ze(e, t, "name", i.name, i, null),
                ze(e, t, "formEncType", i.formEncType, i, null),
                ze(e, t, "formMethod", i.formMethod, i, null),
                ze(e, t, "formTarget", i.formTarget, i, null))
              : (ze(e, t, "encType", i.encType, i, null),
                ze(e, t, "method", i.method, i, null),
                ze(e, t, "target", i.target, i, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((l = Li("" + l)), e.setAttribute(a, l));
        break;
      case "onClick":
        l != null && (e.onclick = la);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = Li("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
              l != null &&
              typeof l != "function" &&
              typeof l != "symbol"
            ? e.setAttribute(a, l)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        (fe("beforetoggle", e), fe("toggle", e), Di(e, "popover", l));
        break;
      case "xlinkActuate":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        aa(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        aa(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        aa(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        aa(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        Di(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = $p.get(a) || a), Di(e, a, l));
    }
  }
  function ju(e, t, a, l, i, r) {
    switch (a) {
      case "style":
        Ic(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(u(61));
          if (((a = l.__html), a != null)) {
            if (i.children != null) throw Error(u(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? Al(e, l)
          : (typeof l == "number" || typeof l == "bigint") && Al(e, "" + l);
        break;
      case "onScroll":
        l != null && fe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && fe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = la);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Xc.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((i = a.endsWith("Capture")),
              (t = a.slice(2, i ? a.length - 7 : void 0)),
              (r = e[ut] || null),
              (r = r != null ? r[a] : null),
              typeof r == "function" && e.removeEventListener(t, r, i),
              typeof l == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, i));
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
                ? e.setAttribute(a, "")
                : Di(e, a, l);
          }
    }
  }
  function et(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (fe("error", e), fe("load", e));
        var l = !1,
          i = !1,
          r;
        for (r in a)
          if (a.hasOwnProperty(r)) {
            var f = a[r];
            if (f != null)
              switch (r) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(u(137, t));
                default:
                  ze(e, t, r, f, a, null);
              }
          }
        (i && ze(e, t, "srcSet", a.srcSet, a, null),
          l && ze(e, t, "src", a.src, a, null));
        return;
      case "input":
        fe("invalid", e);
        var p = (r = f = i = null),
          w = null,
          E = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var U = a[l];
            if (U != null)
              switch (l) {
                case "name":
                  i = U;
                  break;
                case "type":
                  f = U;
                  break;
                case "checked":
                  w = U;
                  break;
                case "defaultChecked":
                  E = U;
                  break;
                case "value":
                  r = U;
                  break;
                case "defaultValue":
                  p = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(u(137, t));
                  break;
                default:
                  ze(e, t, l, U, a, null);
              }
          }
        Jc(e, r, p, w, E, f, i, !1);
        return;
      case "select":
        (fe("invalid", e), (l = f = r = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((p = a[i]), p != null))
            switch (i) {
              case "value":
                r = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                l = p;
              default:
                ze(e, t, i, p, a, null);
            }
        ((t = r),
          (a = f),
          (e.multiple = !!l),
          t != null ? _l(e, !!l, t, !1) : a != null && _l(e, !!l, a, !0));
        return;
      case "textarea":
        (fe("invalid", e), (r = i = l = null));
        for (f in a)
          if (a.hasOwnProperty(f) && ((p = a[f]), p != null))
            switch (f) {
              case "value":
                l = p;
                break;
              case "defaultValue":
                i = p;
                break;
              case "children":
                r = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(u(91));
                break;
              default:
                ze(e, t, f, p, a, null);
            }
        Wc(e, l, i, r);
        return;
      case "option":
        for (w in a)
          a.hasOwnProperty(w) &&
            ((l = a[w]), l != null) &&
            (w === "selected"
              ? (e.selected =
                  l && typeof l != "function" && typeof l != "symbol")
              : ze(e, t, w, l, a, null));
        return;
      case "dialog":
        (fe("beforetoggle", e),
          fe("toggle", e),
          fe("cancel", e),
          fe("close", e));
        break;
      case "iframe":
      case "object":
        fe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < li.length; l++) fe(li[l], e);
        break;
      case "image":
        (fe("error", e), fe("load", e));
        break;
      case "details":
        fe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (fe("error", e), fe("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (E in a)
          if (a.hasOwnProperty(E) && ((l = a[E]), l != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(u(137, t));
              default:
                ze(e, t, E, l, a, null);
            }
        return;
      default:
        if (Hs(t)) {
          for (U in a)
            a.hasOwnProperty(U) &&
              ((l = a[U]), l !== void 0 && ju(e, t, U, l, a, void 0));
          return;
        }
    }
    for (p in a)
      a.hasOwnProperty(p) && ((l = a[p]), l != null && ze(e, t, p, l, a, null));
  }
  function vg(e, t, a, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var i = null,
          r = null,
          f = null,
          p = null,
          w = null,
          E = null,
          U = null;
        for (O in a) {
          var q = a[O];
          if (a.hasOwnProperty(O) && q != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = q;
              default:
                l.hasOwnProperty(O) || ze(e, t, O, null, l, q);
            }
        }
        for (var _ in l) {
          var O = l[_];
          if (((q = a[_]), l.hasOwnProperty(_) && (O != null || q != null)))
            switch (_) {
              case "type":
                r = O;
                break;
              case "name":
                i = O;
                break;
              case "checked":
                E = O;
                break;
              case "defaultChecked":
                U = O;
                break;
              case "value":
                f = O;
                break;
              case "defaultValue":
                p = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(u(137, t));
                break;
              default:
                O !== q && ze(e, t, _, O, l, q);
            }
        }
        Ds(e, f, p, w, E, U, r, i);
        return;
      case "select":
        O = f = p = _ = null;
        for (r in a)
          if (((w = a[r]), a.hasOwnProperty(r) && w != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                O = w;
              default:
                l.hasOwnProperty(r) || ze(e, t, r, null, l, w);
            }
        for (i in l)
          if (
            ((r = l[i]),
            (w = a[i]),
            l.hasOwnProperty(i) && (r != null || w != null))
          )
            switch (i) {
              case "value":
                _ = r;
                break;
              case "defaultValue":
                p = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== w && ze(e, t, i, r, l, w);
            }
        ((t = p),
          (a = f),
          (l = O),
          _ != null
            ? _l(e, !!a, _, !1)
            : !!l != !!a &&
              (t != null ? _l(e, !!a, t, !0) : _l(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        O = _ = null;
        for (p in a)
          if (
            ((i = a[p]),
            a.hasOwnProperty(p) && i != null && !l.hasOwnProperty(p))
          )
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                ze(e, t, p, null, l, i);
            }
        for (f in l)
          if (
            ((i = l[f]),
            (r = a[f]),
            l.hasOwnProperty(f) && (i != null || r != null))
          )
            switch (f) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                O = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(u(91));
                break;
              default:
                i !== r && ze(e, t, f, i, l, r);
            }
        Fc(e, _, O);
        return;
      case "option":
        for (var J in a)
          ((_ = a[J]),
            a.hasOwnProperty(J) &&
              _ != null &&
              !l.hasOwnProperty(J) &&
              (J === "selected" ? (e.selected = !1) : ze(e, t, J, null, l, _)));
        for (w in l)
          ((_ = l[w]),
            (O = a[w]),
            l.hasOwnProperty(w) &&
              _ !== O &&
              (_ != null || O != null) &&
              (w === "selected"
                ? (e.selected =
                    _ && typeof _ != "function" && typeof _ != "symbol")
                : ze(e, t, w, _, l, O)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var te in a)
          ((_ = a[te]),
            a.hasOwnProperty(te) &&
              _ != null &&
              !l.hasOwnProperty(te) &&
              ze(e, t, te, null, l, _));
        for (E in l)
          if (
            ((_ = l[E]),
            (O = a[E]),
            l.hasOwnProperty(E) && _ !== O && (_ != null || O != null))
          )
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(u(137, t));
                break;
              default:
                ze(e, t, E, _, l, O);
            }
        return;
      default:
        if (Hs(t)) {
          for (var Ee in a)
            ((_ = a[Ee]),
              a.hasOwnProperty(Ee) &&
                _ !== void 0 &&
                !l.hasOwnProperty(Ee) &&
                ju(e, t, Ee, void 0, l, _));
          for (U in l)
            ((_ = l[U]),
              (O = a[U]),
              !l.hasOwnProperty(U) ||
                _ === O ||
                (_ === void 0 && O === void 0) ||
                ju(e, t, U, _, l, O));
          return;
        }
    }
    for (var N in a)
      ((_ = a[N]),
        a.hasOwnProperty(N) &&
          _ != null &&
          !l.hasOwnProperty(N) &&
          ze(e, t, N, null, l, _));
    for (q in l)
      ((_ = l[q]),
        (O = a[q]),
        !l.hasOwnProperty(q) ||
          _ === O ||
          (_ == null && O == null) ||
          ze(e, t, q, _, l, O));
  }
  function th(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function wg() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), l = 0;
        l < a.length;
        l++
      ) {
        var i = a[l],
          r = i.transferSize,
          f = i.initiatorType,
          p = i.duration;
        if (r && p && th(f)) {
          for (f = 0, p = i.responseEnd, l += 1; l < a.length; l++) {
            var w = a[l],
              E = w.startTime;
            if (E > p) break;
            var U = w.transferSize,
              q = w.initiatorType;
            U &&
              th(q) &&
              ((w = w.responseEnd), (f += U * (w < p ? 1 : (p - E) / (w - E))));
          }
          if ((--l, (t += (8 * (r + f)) / (i.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Nu = null,
    zu = null;
  function Or(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ah(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Eu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _u = null;
  function kg() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === _u
        ? !1
        : ((_u = e), !0)
      : ((_u = null), !1);
  }
  var nh = typeof setTimeout == "function" ? setTimeout : void 0,
    Sg = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ih = typeof Promise == "function" ? Promise : void 0,
    jg =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ih < "u"
          ? function (e) {
              return ih.resolve(null).then(e).catch(Ng);
            }
          : nh;
  function Ng(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Qa(e) {
    return e === "head";
  }
  function rh(e, t) {
    var a = t,
      l = 0;
    do {
      var i = a.nextSibling;
      if ((e.removeChild(a), i && i.nodeType === 8))
        if (((a = i.data), a === "/$" || a === "/&")) {
          if (l === 0) {
            (e.removeChild(i), sn(t));
            return;
          }
          l--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          l++;
        else if (a === "html") ii(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), ii(a));
          for (var r = a.firstChild; r; ) {
            var f = r.nextSibling,
              p = r.nodeName;
            (r[Sn] ||
              p === "SCRIPT" ||
              p === "STYLE" ||
              (p === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(r),
              (r = f));
          }
        } else a === "body" && ii(e.ownerDocument.body);
      a = i;
    } while (a);
    sn(t);
  }
  function sh(e, t) {
    var a = e;
    e = 0;
    do {
      var l = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        l && l.nodeType === 8)
      )
        if (((a = l.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = l;
    } while (a);
  }
  function Au(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Au(a), Os(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function zg(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var i = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
        if (!e[Sn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((r = e.getAttribute("rel")),
                r === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== i.rel ||
                e.getAttribute("href") !==
                  (i.href == null || i.href === "" ? null : i.href) ||
                e.getAttribute("crossorigin") !==
                  (i.crossOrigin == null ? null : i.crossOrigin) ||
                e.getAttribute("title") !== (i.title == null ? null : i.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((r = e.getAttribute("src")),
                (r !== (i.src == null ? null : i.src) ||
                  e.getAttribute("type") !== (i.type == null ? null : i.type) ||
                  e.getAttribute("crossorigin") !==
                    (i.crossOrigin == null ? null : i.crossOrigin)) &&
                  r &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r) return e;
      } else return e;
      if (((e = Ht(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Eg(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function oh(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = Ht(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Tu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ru(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function _g(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var l = function () {
        (t(), a.removeEventListener("DOMContentLoaded", l));
      };
      (a.addEventListener("DOMContentLoaded", l), (e._reactRetry = l));
    }
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Cu = null;
  function uh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Ht(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function ch(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function dh(e, t, a) {
    switch (((t = Or(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(u(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(u(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function ii(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Os(e);
  }
  var Lt = new Map(),
    fh = new Set();
  function Mr(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var ya = Q.d;
  Q.d = { f: Ag, r: Tg, D: Rg, C: Cg, L: Og, m: Mg, X: Ug, S: Dg, M: Hg };
  function Ag() {
    var e = ya.f(),
      t = Nr();
    return e || t;
  }
  function Tg(e) {
    var t = Nl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Af(t) : ya.r(e);
  }
  var ln = typeof document > "u" ? null : document;
  function hh(e, t, a) {
    var l = ln;
    if (l && typeof t == "string" && t) {
      var i = Tt(t);
      ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
        typeof a == "string" && (i += '[crossorigin="' + a + '"]'),
        fh.has(i) ||
          (fh.add(i),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(i) === null &&
            ((t = l.createElement("link")),
            et(t, "link", e),
            Ze(t),
            l.head.appendChild(t))));
    }
  }
  function Rg(e) {
    (ya.D(e), hh("dns-prefetch", e, null));
  }
  function Cg(e, t) {
    (ya.C(e, t), hh("preconnect", e, t));
  }
  function Og(e, t, a) {
    ya.L(e, t, a);
    var l = ln;
    if (l && e && t) {
      var i = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((i += '[imagesrcset="' + Tt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (i += '[imagesizes="' + Tt(a.imageSizes) + '"]'))
        : (i += '[href="' + Tt(e) + '"]');
      var r = i;
      switch (t) {
        case "style":
          r = nn(e);
          break;
        case "script":
          r = rn(e);
      }
      Lt.has(r) ||
        ((e = y(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        Lt.set(r, e),
        l.querySelector(i) !== null ||
          (t === "style" && l.querySelector(ri(r))) ||
          (t === "script" && l.querySelector(si(r))) ||
          ((t = l.createElement("link")),
          et(t, "link", e),
          Ze(t),
          l.head.appendChild(t)));
    }
  }
  function Mg(e, t) {
    ya.m(e, t);
    var a = ln;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        i =
          'link[rel="modulepreload"][as="' + Tt(l) + '"][href="' + Tt(e) + '"]',
        r = i;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = rn(e);
      }
      if (
        !Lt.has(r) &&
        ((e = y({ rel: "modulepreload", href: e }, t)),
        Lt.set(r, e),
        a.querySelector(i) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(si(r))) return;
        }
        ((l = a.createElement("link")),
          et(l, "link", e),
          Ze(l),
          a.head.appendChild(l));
      }
    }
  }
  function Dg(e, t, a) {
    ya.S(e, t, a);
    var l = ln;
    if (l && e) {
      var i = zl(l).hoistableStyles,
        r = nn(e);
      t = t || "default";
      var f = i.get(r);
      if (!f) {
        var p = { loading: 0, preload: null };
        if ((f = l.querySelector(ri(r)))) p.loading = 5;
        else {
          ((e = y({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = Lt.get(r)) && Ou(e, a));
          var w = (f = l.createElement("link"));
          (Ze(w),
            et(w, "link", e),
            (w._p = new Promise(function (E, U) {
              ((w.onload = E), (w.onerror = U));
            })),
            w.addEventListener("load", function () {
              p.loading |= 1;
            }),
            w.addEventListener("error", function () {
              p.loading |= 2;
            }),
            (p.loading |= 4),
            Dr(f, t, l));
        }
        ((f = { type: "stylesheet", instance: f, count: 1, state: p }),
          i.set(r, f));
      }
    }
  }
  function Ug(e, t) {
    ya.X(e, t);
    var a = ln;
    if (a && e) {
      var l = zl(a).hoistableScripts,
        i = rn(e),
        r = l.get(i);
      r ||
        ((r = a.querySelector(si(i))),
        r ||
          ((e = y({ src: e, async: !0 }, t)),
          (t = Lt.get(i)) && Mu(e, t),
          (r = a.createElement("script")),
          Ze(r),
          et(r, "link", e),
          a.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(i, r));
    }
  }
  function Hg(e, t) {
    ya.M(e, t);
    var a = ln;
    if (a && e) {
      var l = zl(a).hoistableScripts,
        i = rn(e),
        r = l.get(i);
      r ||
        ((r = a.querySelector(si(i))),
        r ||
          ((e = y({ src: e, async: !0, type: "module" }, t)),
          (t = Lt.get(i)) && Mu(e, t),
          (r = a.createElement("script")),
          Ze(r),
          et(r, "link", e),
          a.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        l.set(i, r));
    }
  }
  function mh(e, t, a, l) {
    var i = (i = ce.current) ? Mr(i) : null;
    if (!i) throw Error(u(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = nn(a.href)),
            (a = zl(i).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = nn(a.href);
          var r = zl(i).hoistableStyles,
            f = r.get(e);
          if (
            (f ||
              ((i = i.ownerDocument || i),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(e, f),
              (r = i.querySelector(ri(e))) &&
                !r._p &&
                ((f.instance = r), (f.state.loading = 5)),
              Lt.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                Lt.set(e, a),
                r || Lg(i, e, a, f.state))),
            t && l === null)
          )
            throw Error(u(528, ""));
          return f;
        }
        if (t && l !== null) throw Error(u(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = rn(a)),
              (a = zl(i).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function nn(e) {
    return 'href="' + Tt(e) + '"';
  }
  function ri(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ph(e) {
    return y({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Lg(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        et(t, "link", a),
        Ze(t),
        e.head.appendChild(t));
  }
  function rn(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function si(e) {
    return "script[async]" + e;
  }
  function xh(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + Tt(a.href) + '"]');
          if (l) return ((t.instance = l), Ze(l), l);
          var i = y({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            Ze(l),
            et(l, "style", i),
            Dr(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          i = nn(a.href);
          var r = e.querySelector(ri(i));
          if (r) return ((t.state.loading |= 4), (t.instance = r), Ze(r), r);
          ((l = ph(a)),
            (i = Lt.get(i)) && Ou(l, i),
            (r = (e.ownerDocument || e).createElement("link")),
            Ze(r));
          var f = r;
          return (
            (f._p = new Promise(function (p, w) {
              ((f.onload = p), (f.onerror = w));
            })),
            et(r, "link", l),
            (t.state.loading |= 4),
            Dr(r, a.precedence, e),
            (t.instance = r)
          );
        case "script":
          return (
            (r = rn(a.src)),
            (i = e.querySelector(si(r)))
              ? ((t.instance = i), Ze(i), i)
              : ((l = a),
                (i = Lt.get(r)) && ((l = y({}, a)), Mu(l, i)),
                (e = e.ownerDocument || e),
                (i = e.createElement("script")),
                Ze(i),
                et(i, "link", l),
                e.head.appendChild(i),
                (t.instance = i))
          );
        case "void":
          return null;
        default:
          throw Error(u(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Dr(l, a.precedence, e));
    return t.instance;
  }
  function Dr(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        i = l.length ? l[l.length - 1] : null,
        r = i,
        f = 0;
      f < l.length;
      f++
    ) {
      var p = l[f];
      if (p.dataset.precedence === t) r = p;
      else if (r !== i) break;
    }
    r
      ? r.parentNode.insertBefore(e, r.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Ou(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Mu(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ur = null;
  function gh(e, t, a) {
    if (Ur === null) {
      var l = new Map(),
        i = (Ur = new Map());
      i.set(a, l);
    } else ((i = Ur), (l = i.get(a)), l || ((l = new Map()), i.set(a, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), i = 0;
      i < a.length;
      i++
    ) {
      var r = a[i];
      if (
        !(
          r[Sn] ||
          r[Fe] ||
          (e === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var p = l.get(f);
        p ? p.push(r) : l.set(f, [r]);
      }
    }
    return l;
  }
  function bh(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function Bg(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function yh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function qg(e, t, a, l) {
    if (
      a.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var i = nn(l.href),
          r = t.querySelector(ri(i));
        if (r) {
          ((t = r._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = Hr.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = r),
            Ze(r));
          return;
        }
        ((r = t.ownerDocument || t),
          (l = ph(l)),
          (i = Lt.get(i)) && Ou(l, i),
          (r = r.createElement("link")),
          Ze(r));
        var f = r;
        ((f._p = new Promise(function (p, w) {
          ((f.onload = p), (f.onerror = w));
        })),
          et(r, "link", l),
          (a.instance = r));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = Hr.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Du = 0;
  function Gg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Br(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Br(e, e.stylesheets), e.unsuspend)) {
                var r = e.unsuspend;
                ((e.unsuspend = null), r());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Du === 0 && (Du = 62500 * wg());
            var i = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Br(e, e.stylesheets), e.unsuspend))
                ) {
                  var r = e.unsuspend;
                  ((e.unsuspend = null), r());
                }
              },
              (e.imgBytes > Du ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(i));
              }
            );
          }
        : null
    );
  }
  function Hr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Br(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Lr = null;
  function Br(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Lr = new Map()),
        t.forEach(Yg, e),
        (Lr = null),
        Hr.call(e)));
  }
  function Yg(e, t) {
    if (!(t.state.loading & 4)) {
      var a = Lr.get(e);
      if (a) var l = a.get(null);
      else {
        ((a = new Map()), Lr.set(e, a));
        for (
          var i = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < i.length;
          r++
        ) {
          var f = i[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (a.set(f.dataset.precedence, f), (l = f));
        }
        l && a.set(null, l);
      }
      ((i = t.instance),
        (f = i.getAttribute("data-precedence")),
        (r = a.get(f) || l),
        r === l && a.set(null, i),
        a.set(f, i),
        this.count++,
        (l = Hr.bind(this)),
        i.addEventListener("load", l),
        i.addEventListener("error", l),
        r
          ? r.parentNode.insertBefore(i, r.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(i, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var oi = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function Vg(e, t, a, l, i, r, f, p, w) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = As(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = As(0)),
      (this.hiddenUpdates = As(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = i),
      (this.onCaughtError = r),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = w),
      (this.incompleteTransitions = new Map()));
  }
  function vh(e, t, a, l, i, r, f, p, w, E, U, q) {
    return (
      (e = new Vg(e, t, a, f, w, E, U, q, p)),
      (t = 1),
      r === !0 && (t |= 24),
      (r = kt(3, null, null, t)),
      (e.current = r),
      (r.stateNode = e),
      (t = mo()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (r.memoizedState = { element: l, isDehydrated: a, cache: t }),
      bo(r),
      e
    );
  }
  function wh(e) {
    return e ? ((e = Ul), e) : Ul;
  }
  function kh(e, t, a, l, i, r) {
    ((i = wh(i)),
      l.context === null ? (l.context = i) : (l.pendingContext = i),
      (l = Ma(t)),
      (l.payload = { element: a }),
      (r = r === void 0 ? null : r),
      r !== null && (l.callback = r),
      (a = Da(e, l, t)),
      a !== null && (pt(a, e, t), qn(a, e, t)));
  }
  function Sh(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Uu(e, t) {
    (Sh(e, t), (e = e.alternate) && Sh(e, t));
  }
  function jh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = il(e, 67108864);
      (t !== null && pt(t, e, 67108864), Uu(e, 67108864));
    }
  }
  function Nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Et();
      t = Ts(t);
      var a = il(e, t);
      (a !== null && pt(a, e, t), Uu(e, t));
    }
  }
  var qr = !0;
  function Xg(e, t, a, l) {
    var i = M.T;
    M.T = null;
    var r = Q.p;
    try {
      ((Q.p = 2), Hu(e, t, a, l));
    } finally {
      ((Q.p = r), (M.T = i));
    }
  }
  function Qg(e, t, a, l) {
    var i = M.T;
    M.T = null;
    var r = Q.p;
    try {
      ((Q.p = 8), Hu(e, t, a, l));
    } finally {
      ((Q.p = r), (M.T = i));
    }
  }
  function Hu(e, t, a, l) {
    if (qr) {
      var i = Lu(l);
      if (i === null) (Su(e, t, l, Gr, a), Eh(e, l));
      else if ($g(i, e, t, a, l)) l.stopPropagation();
      else if ((Eh(e, l), t & 4 && -1 < Zg.indexOf(e))) {
        for (; i !== null; ) {
          var r = Nl(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var f = el(r.pendingLanes);
                  if (f !== 0) {
                    var p = r;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var w = 1 << (31 - vt(f));
                      ((p.entanglements[1] |= w), (f &= ~w));
                    }
                    (Pt(r), (ve & 6) === 0 && ((Sr = bt() + 500), ai(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((p = il(r, 2)), p !== null && pt(p, r, 2), Nr(), Uu(r, 2));
            }
          if (((r = Lu(l)), r === null && Su(e, t, l, Gr, a), r === i)) break;
          i = r;
        }
        i !== null && l.stopPropagation();
      } else Su(e, t, l, null, a);
    }
  }
  function Lu(e) {
    return ((e = Bs(e)), Bu(e));
  }
  var Gr = null;
  function Bu(e) {
    if (((Gr = null), (e = jl(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = m(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = g(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Gr = e), null);
  }
  function zh(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rp()) {
          case Oc:
            return 2;
          case Mc:
            return 8;
          case Ti:
          case Cp:
            return 32;
          case Dc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qu = !1,
    Za = null,
    $a = null,
    Ka = null,
    ui = new Map(),
    ci = new Map(),
    Ja = [],
    Zg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Eh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        $a = null;
        break;
      case "mouseover":
      case "mouseout":
        Ka = null;
        break;
      case "pointerover":
      case "pointerout":
        ui.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ci.delete(t.pointerId);
    }
  }
  function di(e, t, a, l, i, r) {
    return e === null || e.nativeEvent !== r
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: r,
          targetContainers: [i],
        }),
        t !== null && ((t = Nl(t)), t !== null && jh(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function $g(e, t, a, l, i) {
    switch (t) {
      case "focusin":
        return ((Za = di(Za, e, t, a, l, i)), !0);
      case "dragenter":
        return (($a = di($a, e, t, a, l, i)), !0);
      case "mouseover":
        return ((Ka = di(Ka, e, t, a, l, i)), !0);
      case "pointerover":
        var r = i.pointerId;
        return (ui.set(r, di(ui.get(r) || null, e, t, a, l, i)), !0);
      case "gotpointercapture":
        return (
          (r = i.pointerId),
          ci.set(r, di(ci.get(r) || null, e, t, a, l, i)),
          !0
        );
    }
    return !1;
  }
  function _h(e) {
    var t = jl(e.target);
    if (t !== null) {
      var a = h(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = m(a)), t !== null)) {
            ((e.blockedOn = t),
              Gc(e.priority, function () {
                Nh(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = g(a)), t !== null)) {
            ((e.blockedOn = t),
              Gc(e.priority, function () {
                Nh(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Yr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Lu(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        ((Ls = l), a.target.dispatchEvent(l), (Ls = null));
      } else return ((t = Nl(a)), t !== null && jh(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function Ah(e, t, a) {
    Yr(e) && a.delete(t);
  }
  function Kg() {
    ((qu = !1),
      Za !== null && Yr(Za) && (Za = null),
      $a !== null && Yr($a) && ($a = null),
      Ka !== null && Yr(Ka) && (Ka = null),
      ui.forEach(Ah),
      ci.forEach(Ah));
  }
  function Vr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      qu ||
        ((qu = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Kg)));
  }
  var Xr = null;
  function Th(e) {
    Xr !== e &&
      ((Xr = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        Xr === e && (Xr = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            i = e[t + 2];
          if (typeof l != "function") {
            if (Bu(l || a) === null) continue;
            break;
          }
          var r = Nl(a);
          r !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Lo(r, { pending: !0, data: i, method: a.method, action: l }, l, i));
        }
      }));
  }
  function sn(e) {
    function t(w) {
      return Vr(w, e);
    }
    (Za !== null && Vr(Za, e),
      $a !== null && Vr($a, e),
      Ka !== null && Vr(Ka, e),
      ui.forEach(t),
      ci.forEach(t));
    for (var a = 0; a < Ja.length; a++) {
      var l = Ja[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ja.length && ((a = Ja[0]), a.blockedOn === null); )
      (_h(a), a.blockedOn === null && Ja.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var i = a[l],
          r = a[l + 1],
          f = i[ut] || null;
        if (typeof r == "function") f || Th(a);
        else if (f) {
          var p = null;
          if (r && r.hasAttribute("formAction")) {
            if (((i = r), (f = r[ut] || null))) p = f.formAction;
            else if (Bu(i) !== null) continue;
          } else p = f.action;
          (typeof p == "function" ? (a[l + 1] = p) : (a.splice(l, 3), (l -= 3)),
            Th(a));
        }
      }
  }
  function Rh() {
    function e(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (f) {
              return (i = f);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (i !== null && (i(), (i = null)), l || setTimeout(a, 20));
    }
    function a() {
      if (!l && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var l = !1,
        i = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            i !== null && (i(), (i = null)));
        }
      );
    }
  }
  function Gu(e) {
    this._internalRoot = e;
  }
  ((Qr.prototype.render = Gu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(u(409));
      var a = t.current,
        l = Et();
      kh(a, l, e, t, null, null);
    }),
    (Qr.prototype.unmount = Gu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (kh(e.current, 2, null, e, null, null), Nr(), (t[Sl] = null));
        }
      }));
  function Qr(e) {
    this._internalRoot = e;
  }
  Qr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = qc();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Ja.length && t !== 0 && t < Ja[a].priority; a++);
      (Ja.splice(a, 0, e), a === 0 && _h(e));
    }
  };
  var Ch = s.version;
  if (Ch !== "19.2.4") throw Error(u(527, Ch, "19.2.4"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(u(188))
        : ((e = Object.keys(e).join(",")), Error(u(268, e)));
    return (
      (e = x(t)),
      (e = e !== null ? v(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Jg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zr.isDisabled && Zr.supportsFiber)
      try {
        ((vn = Zr.inject(Jg)), (yt = Zr));
      } catch {}
  }
  return (
    (hi.createRoot = function (e, t) {
      if (!d(e)) throw Error(u(299));
      var a = !1,
        l = "",
        i = Bf,
        r = qf,
        f = Gf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
          t.onCaughtError !== void 0 && (r = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError)),
        (t = vh(e, 1, !1, null, null, a, l, null, i, r, f, Rh)),
        (e[Sl] = t.current),
        ku(e),
        new Gu(t)
      );
    }),
    (hi.hydrateRoot = function (e, t, a) {
      if (!d(e)) throw Error(u(299));
      var l = !1,
        i = "",
        r = Bf,
        f = qf,
        p = Gf,
        w = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (r = a.onUncaughtError),
          a.onCaughtError !== void 0 && (f = a.onCaughtError),
          a.onRecoverableError !== void 0 && (p = a.onRecoverableError),
          a.formState !== void 0 && (w = a.formState)),
        (t = vh(e, 1, !0, t, a ?? null, l, i, w, r, f, p, Rh)),
        (t.context = wh(null)),
        (a = t.current),
        (l = Et()),
        (l = Ts(l)),
        (i = Ma(l)),
        (i.callback = null),
        Da(a, i, l),
        (a = l),
        (t.current.lanes = a),
        kn(t, a),
        Pt(t),
        (e[Sl] = t.current),
        ku(e),
        new Qr(t)
      );
    }),
    (hi.version = "19.2.4"),
    hi
  );
}
var Yh;
function rb() {
  if (Yh) return Xu.exports;
  Yh = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (s) {
        console.error(s);
      }
  }
  return (n(), (Xu.exports = ib()), Xu.exports);
}
var sb = rb();
var Vh = "popstate";
function ob(n = {}) {
  function s(u, d) {
    let { pathname: h, search: m, hash: g } = u.location;
    return nc(
      "",
      { pathname: h, search: m, hash: g },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
    );
  }
  function c(u, d) {
    return typeof d == "string" ? d : gi(d);
  }
  return cb(s, c, null, n);
}
function Ce(n, s) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(s);
}
function $t(n, s) {
  if (!n) {
    typeof console < "u" && console.warn(s);
    try {
      throw new Error(s);
    } catch {}
  }
}
function ub() {
  return Math.random().toString(36).substring(2, 10);
}
function Xh(n, s) {
  return { usr: n.state, key: n.key, idx: s };
}
function nc(n, s, c = null, u) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof s == "string" ? mn(s) : s),
    state: c,
    key: (s && s.key) || u || ub(),
  };
}
function gi({ pathname: n = "/", search: s = "", hash: c = "" }) {
  return (
    s && s !== "?" && (n += s.charAt(0) === "?" ? s : "?" + s),
    c && c !== "#" && (n += c.charAt(0) === "#" ? c : "#" + c),
    n
  );
}
function mn(n) {
  let s = {};
  if (n) {
    let c = n.indexOf("#");
    c >= 0 && ((s.hash = n.substring(c)), (n = n.substring(0, c)));
    let u = n.indexOf("?");
    (u >= 0 && ((s.search = n.substring(u)), (n = n.substring(0, u))),
      n && (s.pathname = n));
  }
  return s;
}
function cb(n, s, c, u = {}) {
  let { window: d = document.defaultView, v5Compat: h = !1 } = u,
    m = d.history,
    g = "POP",
    b = null,
    x = v();
  x == null && ((x = 0), m.replaceState({ ...m.state, idx: x }, ""));
  function v() {
    return (m.state || { idx: null }).idx;
  }
  function y() {
    g = "POP";
    let T = v(),
      Y = T == null ? null : T - x;
    ((x = T), b && b({ action: g, location: H.location, delta: Y }));
  }
  function R(T, Y) {
    g = "PUSH";
    let V = nc(H.location, T, Y);
    x = v() + 1;
    let X = Xh(V, x),
      ae = H.createHref(V);
    try {
      m.pushState(X, "", ae);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError") throw $;
      d.location.assign(ae);
    }
    h && b && b({ action: g, location: H.location, delta: 1 });
  }
  function G(T, Y) {
    g = "REPLACE";
    let V = nc(H.location, T, Y);
    x = v();
    let X = Xh(V, x),
      ae = H.createHref(V);
    (m.replaceState(X, "", ae),
      h && b && b({ action: g, location: H.location, delta: 0 }));
  }
  function A(T) {
    return db(T);
  }
  let H = {
    get action() {
      return g;
    },
    get location() {
      return n(d, m);
    },
    listen(T) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Vh, y),
        (b = T),
        () => {
          (d.removeEventListener(Vh, y), (b = null));
        }
      );
    },
    createHref(T) {
      return s(d, T);
    },
    createURL: A,
    encodeLocation(T) {
      let Y = A(T);
      return { pathname: Y.pathname, search: Y.search, hash: Y.hash };
    },
    push: R,
    replace: G,
    go(T) {
      return m.go(T);
    },
  };
  return H;
}
function db(n, s = !1) {
  let c = "http://localhost";
  (typeof window < "u" &&
    (c =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Ce(c, "No window.location.(origin|href) available to create URL"));
  let u = typeof n == "string" ? n : gi(n);
  return (
    (u = u.replace(/ $/, "%20")),
    !s && u.startsWith("//") && (u = c + u),
    new URL(u, c)
  );
}
function km(n, s, c = "/") {
  return fb(n, s, c, !1);
}
function fb(n, s, c, u) {
  let d = typeof s == "string" ? mn(s) : s,
    h = Sa(d.pathname || "/", c);
  if (h == null) return null;
  let m = Sm(n);
  hb(m);
  let g = null;
  for (let b = 0; g == null && b < m.length; ++b) {
    let x = jb(h);
    g = kb(m[b], x, u);
  }
  return g;
}
function Sm(n, s = [], c = [], u = "", d = !1) {
  let h = (m, g, b = d, x) => {
    let v = {
      relativePath: x === void 0 ? m.path || "" : x,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m,
    };
    if (v.relativePath.startsWith("/")) {
      if (!v.relativePath.startsWith(u) && b) return;
      (Ce(
        v.relativePath.startsWith(u),
        `Absolute route path "${v.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (v.relativePath = v.relativePath.slice(u.length)));
    }
    let y = ka([u, v.relativePath]),
      R = c.concat(v);
    (m.children &&
      m.children.length > 0 &&
      (Ce(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`,
      ),
      Sm(m.children, s, R, y, b)),
      !(m.path == null && !m.index) &&
        s.push({ path: y, score: vb(y, m.index), routesMeta: R }));
  };
  return (
    n.forEach((m, g) => {
      if (m.path === "" || !m.path?.includes("?")) h(m, g);
      else for (let b of jm(m.path)) h(m, g, !0, b);
    }),
    s
  );
}
function jm(n) {
  let s = n.split("/");
  if (s.length === 0) return [];
  let [c, ...u] = s,
    d = c.endsWith("?"),
    h = c.replace(/\?$/, "");
  if (u.length === 0) return d ? [h, ""] : [h];
  let m = jm(u.join("/")),
    g = [];
  return (
    g.push(...m.map((b) => (b === "" ? h : [h, b].join("/")))),
    d && g.push(...m),
    g.map((b) => (n.startsWith("/") && b === "" ? "/" : b))
  );
}
function hb(n) {
  n.sort((s, c) =>
    s.score !== c.score
      ? c.score - s.score
      : wb(
          s.routesMeta.map((u) => u.childrenIndex),
          c.routesMeta.map((u) => u.childrenIndex),
        ),
  );
}
var mb = /^:[\w-]+$/,
  pb = 3,
  xb = 2,
  gb = 1,
  bb = 10,
  yb = -2,
  Qh = (n) => n === "*";
function vb(n, s) {
  let c = n.split("/"),
    u = c.length;
  return (
    c.some(Qh) && (u += yb),
    s && (u += xb),
    c
      .filter((d) => !Qh(d))
      .reduce((d, h) => d + (mb.test(h) ? pb : h === "" ? gb : bb), u)
  );
}
function wb(n, s) {
  return n.length === s.length && n.slice(0, -1).every((u, d) => u === s[d])
    ? n[n.length - 1] - s[s.length - 1]
    : 0;
}
function kb(n, s, c = !1) {
  let { routesMeta: u } = n,
    d = {},
    h = "/",
    m = [];
  for (let g = 0; g < u.length; ++g) {
    let b = u[g],
      x = g === u.length - 1,
      v = h === "/" ? s : s.slice(h.length) || "/",
      y = us(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: x },
        v,
      ),
      R = b.route;
    if (
      (!y &&
        x &&
        c &&
        !u[u.length - 1].route.index &&
        (y = us(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          v,
        )),
      !y)
    )
      return null;
    (Object.assign(d, y.params),
      m.push({
        params: d,
        pathname: ka([h, y.pathname]),
        pathnameBase: _b(ka([h, y.pathnameBase])),
        route: R,
      }),
      y.pathnameBase !== "/" && (h = ka([h, y.pathnameBase])));
  }
  return m;
}
function us(n, s) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [c, u] = Sb(n.path, n.caseSensitive, n.end),
    d = s.match(c);
  if (!d) return null;
  let h = d[0],
    m = h.replace(/(.)\/+$/, "$1"),
    g = d.slice(1);
  return {
    params: u.reduce((x, { paramName: v, isOptional: y }, R) => {
      if (v === "*") {
        let A = g[R] || "";
        m = h.slice(0, h.length - A.length).replace(/(.)\/+$/, "$1");
      }
      const G = g[R];
      return (
        y && !G ? (x[v] = void 0) : (x[v] = (G || "").replace(/%2F/g, "/")),
        x
      );
    }, {}),
    pathname: h,
    pathnameBase: m,
    pattern: n,
  };
}
function Sb(n, s = !1, c = !0) {
  $t(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`,
  );
  let u = [],
    d =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (m, g, b) => (
            u.push({ paramName: g, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (u.push({ paramName: "*" }),
        (d += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : c
        ? (d += "\\/*$")
        : n !== "" && n !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, s ? void 0 : "i"), u]
  );
}
function jb(n) {
  try {
    return n
      .split("/")
      .map((s) => decodeURIComponent(s).replace(/\//g, "%2F"))
      .join("/");
  } catch (s) {
    return (
      $t(
        !1,
        `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`,
      ),
      n
    );
  }
}
function Sa(n, s) {
  if (s === "/") return n;
  if (!n.toLowerCase().startsWith(s.toLowerCase())) return null;
  let c = s.endsWith("/") ? s.length - 1 : s.length,
    u = n.charAt(c);
  return u && u !== "/" ? null : n.slice(c) || "/";
}
var Nb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function zb(n, s = "/") {
  let {
      pathname: c,
      search: u = "",
      hash: d = "",
    } = typeof n == "string" ? mn(n) : n,
    h;
  return (
    c
      ? ((c = c.replace(/\/\/+/g, "/")),
        c.startsWith("/") ? (h = Zh(c.substring(1), "/")) : (h = Zh(c, s)))
      : (h = s),
    { pathname: h, search: Ab(u), hash: Tb(d) }
  );
}
function Zh(n, s) {
  let c = s.replace(/\/+$/, "").split("/");
  return (
    n.split("/").forEach((d) => {
      d === ".." ? c.length > 1 && c.pop() : d !== "." && c.push(d);
    }),
    c.length > 1 ? c.join("/") : "/"
  );
}
function Ku(n, s, c, u) {
  return `Cannot include a '${n}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Eb(n) {
  return n.filter(
    (s, c) => c === 0 || (s.route.path && s.route.path.length > 0),
  );
}
function xc(n) {
  let s = Eb(n);
  return s.map((c, u) => (u === s.length - 1 ? c.pathname : c.pathnameBase));
}
function gc(n, s, c, u = !1) {
  let d;
  typeof n == "string"
    ? (d = mn(n))
    : ((d = { ...n }),
      Ce(
        !d.pathname || !d.pathname.includes("?"),
        Ku("?", "pathname", "search", d),
      ),
      Ce(
        !d.pathname || !d.pathname.includes("#"),
        Ku("#", "pathname", "hash", d),
      ),
      Ce(!d.search || !d.search.includes("#"), Ku("#", "search", "hash", d)));
  let h = n === "" || d.pathname === "",
    m = h ? "/" : d.pathname,
    g;
  if (m == null) g = c;
  else {
    let y = s.length - 1;
    if (!u && m.startsWith("..")) {
      let R = m.split("/");
      for (; R[0] === ".."; ) (R.shift(), (y -= 1));
      d.pathname = R.join("/");
    }
    g = y >= 0 ? s[y] : "/";
  }
  let b = zb(d, g),
    x = m && m !== "/" && m.endsWith("/"),
    v = (h || m === ".") && c.endsWith("/");
  return (!b.pathname.endsWith("/") && (x || v) && (b.pathname += "/"), b);
}
var ka = (n) => n.join("/").replace(/\/\/+/g, "/"),
  _b = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ab = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  Tb = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  Rb = class {
    constructor(n, s, c, u = !1) {
      ((this.status = n),
        (this.statusText = s || ""),
        (this.internal = u),
        c instanceof Error
          ? ((this.data = c.toString()), (this.error = c))
          : (this.data = c));
    }
  };
function Cb(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
function Ob(n) {
  return (
    n
      .map((s) => s.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var Nm =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function zm(n, s) {
  let c = n;
  if (typeof c != "string" || !Nb.test(c))
    return { absoluteURL: void 0, isExternal: !1, to: c };
  let u = c,
    d = !1;
  if (Nm)
    try {
      let h = new URL(window.location.href),
        m = c.startsWith("//") ? new URL(h.protocol + c) : new URL(c),
        g = Sa(m.pathname, s);
      m.origin === h.origin && g != null
        ? (c = g + m.search + m.hash)
        : (d = !0);
    } catch {
      $t(
        !1,
        `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: u, isExternal: d, to: c };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Em = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Em);
var Mb = ["GET", ...Em];
new Set(Mb);
var pn = j.createContext(null);
pn.displayName = "DataRouter";
var ms = j.createContext(null);
ms.displayName = "DataRouterState";
var Db = j.createContext(!1),
  _m = j.createContext({ isTransitioning: !1 });
_m.displayName = "ViewTransition";
var Ub = j.createContext(new Map());
Ub.displayName = "Fetchers";
var Hb = j.createContext(null);
Hb.displayName = "Await";
var _t = j.createContext(null);
_t.displayName = "Navigation";
var yi = j.createContext(null);
yi.displayName = "Location";
var ta = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
ta.displayName = "Route";
var bc = j.createContext(null);
bc.displayName = "RouteError";
var Am = "REACT_ROUTER_ERROR",
  Lb = "REDIRECT",
  Bb = "ROUTE_ERROR_RESPONSE";
function qb(n) {
  if (n.startsWith(`${Am}:${Lb}:{`))
    try {
      let s = JSON.parse(n.slice(28));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string" &&
        typeof s.location == "string" &&
        typeof s.reloadDocument == "boolean" &&
        typeof s.replace == "boolean"
      )
        return s;
    } catch {}
}
function Gb(n) {
  if (n.startsWith(`${Am}:${Bb}:{`))
    try {
      let s = JSON.parse(n.slice(40));
      if (
        typeof s == "object" &&
        s &&
        typeof s.status == "number" &&
        typeof s.statusText == "string"
      )
        return new Rb(s.status, s.statusText, s.data);
    } catch {}
}
function Yb(n, { relative: s } = {}) {
  Ce(
    xn(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: c, navigator: u } = j.useContext(_t),
    { hash: d, pathname: h, search: m } = wi(n, { relative: s }),
    g = h;
  return (
    c !== "/" && (g = h === "/" ? c : ka([c, h])),
    u.createHref({ pathname: g, search: m, hash: d })
  );
}
function xn() {
  return j.useContext(yi) != null;
}
function Na() {
  return (
    Ce(
      xn(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    j.useContext(yi).location
  );
}
var Tm =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rm(n) {
  j.useContext(_t).static || j.useLayoutEffect(n);
}
function vi() {
  let { isDataRoute: n } = j.useContext(ta);
  return n ? t1() : Vb();
}
function Vb() {
  Ce(
    xn(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let n = j.useContext(pn),
    { basename: s, navigator: c } = j.useContext(_t),
    { matches: u } = j.useContext(ta),
    { pathname: d } = Na(),
    h = JSON.stringify(xc(u)),
    m = j.useRef(!1);
  return (
    Rm(() => {
      m.current = !0;
    }),
    j.useCallback(
      (b, x = {}) => {
        if (($t(m.current, Tm), !m.current)) return;
        if (typeof b == "number") {
          c.go(b);
          return;
        }
        let v = gc(b, JSON.parse(h), d, x.relative === "path");
        (n == null &&
          s !== "/" &&
          (v.pathname = v.pathname === "/" ? s : ka([s, v.pathname])),
          (x.replace ? c.replace : c.push)(v, x.state, x));
      },
      [s, c, h, d, n],
    )
  );
}
j.createContext(null);
function wi(n, { relative: s } = {}) {
  let { matches: c } = j.useContext(ta),
    { pathname: u } = Na(),
    d = JSON.stringify(xc(c));
  return j.useMemo(() => gc(n, JSON.parse(d), u, s === "path"), [n, d, u, s]);
}
function Xb(n, s) {
  return Cm(n, s);
}
function Cm(n, s, c, u, d) {
  Ce(
    xn(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: h } = j.useContext(_t),
    { matches: m } = j.useContext(ta),
    g = m[m.length - 1],
    b = g ? g.params : {},
    x = g ? g.pathname : "/",
    v = g ? g.pathnameBase : "/",
    y = g && g.route;
  {
    let V = (y && y.path) || "";
    Mm(
      x,
      !y || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`,
    );
  }
  let R = Na(),
    G;
  if (s) {
    let V = typeof s == "string" ? mn(s) : s;
    (Ce(
      v === "/" || V.pathname?.startsWith(v),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${V.pathname}" was given in the \`location\` prop.`,
    ),
      (G = V));
  } else G = R;
  let A = G.pathname || "/",
    H = A;
  if (v !== "/") {
    let V = v.replace(/^\//, "").split("/");
    H = "/" + A.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let T = km(n, { pathname: H });
  ($t(
    y || T != null,
    `No routes matched location "${G.pathname}${G.search}${G.hash}" `,
  ),
    $t(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let Y = Jb(
    T &&
      T.map((V) =>
        Object.assign({}, V, {
          params: Object.assign({}, b, V.params),
          pathname: ka([
            v,
            h.encodeLocation
              ? h.encodeLocation(
                  V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : V.pathname,
          ]),
          pathnameBase:
            V.pathnameBase === "/"
              ? v
              : ka([
                  v,
                  h.encodeLocation
                    ? h.encodeLocation(
                        V.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : V.pathnameBase,
                ]),
        }),
      ),
    m,
    c,
    u,
    d,
  );
  return s && Y
    ? j.createElement(
        yi.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...G,
            },
            navigationType: "POP",
          },
        },
        Y,
      )
    : Y;
}
function Qb() {
  let n = e1(),
    s = Cb(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    c = n instanceof Error ? n.stack : null,
    u = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: u },
    h = { padding: "2px 4px", backgroundColor: u },
    m = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (m = j.createElement(
      j.Fragment,
      null,
      j.createElement("p", null, "💿 Hey developer 👋"),
      j.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        j.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        j.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement("h2", null, "Unexpected Application Error!"),
      j.createElement("h3", { style: { fontStyle: "italic" } }, s),
      c ? j.createElement("pre", { style: d }, c) : null,
      m,
    )
  );
}
var Zb = j.createElement(Qb, null),
  Om = class extends j.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, s) {
      return s.location !== n.location ||
        (s.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : s.error,
            location: s.location,
            revalidation: n.revalidation || s.revalidation,
          };
    }
    componentDidCatch(n, s) {
      this.props.onError
        ? this.props.onError(n, s)
        : console.error(
            "React Router caught the following error during render",
            n,
          );
    }
    render() {
      let n = this.state.error;
      if (
        this.context &&
        typeof n == "object" &&
        n &&
        "digest" in n &&
        typeof n.digest == "string"
      ) {
        const c = Gb(n.digest);
        c && (n = c);
      }
      let s =
        n !== void 0
          ? j.createElement(
              ta.Provider,
              { value: this.props.routeContext },
              j.createElement(bc.Provider, {
                value: n,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? j.createElement($b, { error: n }, s) : s;
    }
  };
Om.contextType = Db;
var Ju = new WeakMap();
function $b({ children: n, error: s }) {
  let { basename: c } = j.useContext(_t);
  if (
    typeof s == "object" &&
    s &&
    "digest" in s &&
    typeof s.digest == "string"
  ) {
    let u = qb(s.digest);
    if (u) {
      let d = Ju.get(s);
      if (d) throw d;
      let h = zm(u.location, c);
      if (Nm && !Ju.get(s))
        if (h.isExternal || u.reloadDocument)
          window.location.href = h.absoluteURL || h.to;
        else {
          const m = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(h.to, {
              replace: u.replace,
            }),
          );
          throw (Ju.set(s, m), m);
        }
      return j.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${h.absoluteURL || h.to}`,
      });
    }
  }
  return n;
}
function Kb({ routeContext: n, match: s, children: c }) {
  let u = j.useContext(pn);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (s.route.errorElement || s.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = s.route.id),
    j.createElement(ta.Provider, { value: n }, c)
  );
}
function Jb(n, s = [], c = null, u = null, d = null) {
  if (n == null) {
    if (!c) return null;
    if (c.errors) n = c.matches;
    else if (s.length === 0 && !c.initialized && c.matches.length > 0)
      n = c.matches;
    else return null;
  }
  let h = n,
    m = c?.errors;
  if (m != null) {
    let v = h.findIndex((y) => y.route.id && m?.[y.route.id] !== void 0);
    (Ce(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`,
    ),
      (h = h.slice(0, Math.min(h.length, v + 1))));
  }
  let g = !1,
    b = -1;
  if (c)
    for (let v = 0; v < h.length; v++) {
      let y = h[v];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (b = v),
        y.route.id)
      ) {
        let { loaderData: R, errors: G } = c,
          A =
            y.route.loader &&
            !R.hasOwnProperty(y.route.id) &&
            (!G || G[y.route.id] === void 0);
        if (y.route.lazy || A) {
          ((g = !0), b >= 0 ? (h = h.slice(0, b + 1)) : (h = [h[0]]));
          break;
        }
      }
    }
  let x =
    c && u
      ? (v, y) => {
          u(v, {
            location: c.location,
            params: c.matches?.[0]?.params ?? {},
            unstable_pattern: Ob(c.matches),
            errorInfo: y,
          });
        }
      : void 0;
  return h.reduceRight((v, y, R) => {
    let G,
      A = !1,
      H = null,
      T = null;
    c &&
      ((G = m && y.route.id ? m[y.route.id] : void 0),
      (H = y.route.errorElement || Zb),
      g &&
        (b < 0 && R === 0
          ? (Mm(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (A = !0),
            (T = null))
          : b === R &&
            ((A = !0), (T = y.route.hydrateFallbackElement || null))));
    let Y = s.concat(h.slice(0, R + 1)),
      V = () => {
        let X;
        return (
          G
            ? (X = H)
            : A
              ? (X = T)
              : y.route.Component
                ? (X = j.createElement(y.route.Component, null))
                : y.route.element
                  ? (X = y.route.element)
                  : (X = v),
          j.createElement(Kb, {
            match: y,
            routeContext: { outlet: v, matches: Y, isDataRoute: c != null },
            children: X,
          })
        );
      };
    return c && (y.route.ErrorBoundary || y.route.errorElement || R === 0)
      ? j.createElement(Om, {
          location: c.location,
          revalidation: c.revalidation,
          component: H,
          error: G,
          children: V(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: x,
        })
      : V();
  }, null);
}
function yc(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fb(n) {
  let s = j.useContext(pn);
  return (Ce(s, yc(n)), s);
}
function Wb(n) {
  let s = j.useContext(ms);
  return (Ce(s, yc(n)), s);
}
function Pb(n) {
  let s = j.useContext(ta);
  return (Ce(s, yc(n)), s);
}
function vc(n) {
  let s = Pb(n),
    c = s.matches[s.matches.length - 1];
  return (
    Ce(
      c.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    c.route.id
  );
}
function Ib() {
  return vc("useRouteId");
}
function e1() {
  let n = j.useContext(bc),
    s = Wb("useRouteError"),
    c = vc("useRouteError");
  return n !== void 0 ? n : s.errors?.[c];
}
function t1() {
  let { router: n } = Fb("useNavigate"),
    s = vc("useNavigate"),
    c = j.useRef(!1);
  return (
    Rm(() => {
      c.current = !0;
    }),
    j.useCallback(
      async (d, h = {}) => {
        ($t(c.current, Tm),
          c.current &&
            (typeof d == "number"
              ? await n.navigate(d)
              : await n.navigate(d, { fromRouteId: s, ...h })));
      },
      [n, s],
    )
  );
}
var $h = {};
function Mm(n, s, c) {
  !s && !$h[n] && (($h[n] = !0), $t(!1, c));
}
j.memo(a1);
function a1({ routes: n, future: s, state: c, onError: u }) {
  return Cm(n, void 0, c, u, s);
}
function wc({ to: n, replace: s, state: c, relative: u }) {
  Ce(
    xn(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: d } = j.useContext(_t);
  $t(
    !d,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: h } = j.useContext(ta),
    { pathname: m } = Na(),
    g = vi(),
    b = gc(n, xc(h), m, u === "path"),
    x = JSON.stringify(b);
  return (
    j.useEffect(() => {
      g(JSON.parse(x), { replace: s, state: c, relative: u });
    }, [g, x, u, s, c]),
    null
  );
}
function wa(n) {
  Ce(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function l1({
  basename: n = "/",
  children: s = null,
  location: c,
  navigationType: u = "POP",
  navigator: d,
  static: h = !1,
  unstable_useTransitions: m,
}) {
  Ce(
    !xn(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let g = n.replace(/^\/*/, "/"),
    b = j.useMemo(
      () => ({
        basename: g,
        navigator: d,
        static: h,
        unstable_useTransitions: m,
        future: {},
      }),
      [g, d, h, m],
    );
  typeof c == "string" && (c = mn(c));
  let {
      pathname: x = "/",
      search: v = "",
      hash: y = "",
      state: R = null,
      key: G = "default",
    } = c,
    A = j.useMemo(() => {
      let H = Sa(x, g);
      return H == null
        ? null
        : {
            location: { pathname: H, search: v, hash: y, state: R, key: G },
            navigationType: u,
          };
    }, [g, x, v, y, R, G, u]);
  return (
    $t(
      A != null,
      `<Router basename="${g}"> is not able to match the URL "${x}${v}${y}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    A == null
      ? null
      : j.createElement(
          _t.Provider,
          { value: b },
          j.createElement(yi.Provider, { children: s, value: A }),
        )
  );
}
function n1({ children: n, location: s }) {
  return Xb(ic(n), s);
}
function ic(n, s = []) {
  let c = [];
  return (
    j.Children.forEach(n, (u, d) => {
      if (!j.isValidElement(u)) return;
      let h = [...s, d];
      if (u.type === j.Fragment) {
        c.push.apply(c, ic(u.props.children, h));
        return;
      }
      (Ce(
        u.type === wa,
        `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Ce(
          !u.props.index || !u.props.children,
          "An index route cannot have child routes.",
        ));
      let m = {
        id: u.props.id || h.join("-"),
        caseSensitive: u.props.caseSensitive,
        element: u.props.element,
        Component: u.props.Component,
        index: u.props.index,
        path: u.props.path,
        middleware: u.props.middleware,
        loader: u.props.loader,
        action: u.props.action,
        hydrateFallbackElement: u.props.hydrateFallbackElement,
        HydrateFallback: u.props.HydrateFallback,
        errorElement: u.props.errorElement,
        ErrorBoundary: u.props.ErrorBoundary,
        hasErrorBoundary:
          u.props.hasErrorBoundary === !0 ||
          u.props.ErrorBoundary != null ||
          u.props.errorElement != null,
        shouldRevalidate: u.props.shouldRevalidate,
        handle: u.props.handle,
        lazy: u.props.lazy,
      };
      (u.props.children && (m.children = ic(u.props.children, h)), c.push(m));
    }),
    c
  );
}
var ls = "get",
  ns = "application/x-www-form-urlencoded";
function ps(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function i1(n) {
  return ps(n) && n.tagName.toLowerCase() === "button";
}
function r1(n) {
  return ps(n) && n.tagName.toLowerCase() === "form";
}
function s1(n) {
  return ps(n) && n.tagName.toLowerCase() === "input";
}
function o1(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function u1(n, s) {
  return n.button === 0 && (!s || s === "_self") && !o1(n);
}
var $r = null;
function c1() {
  if ($r === null)
    try {
      (new FormData(document.createElement("form"), 0), ($r = !1));
    } catch {
      $r = !0;
    }
  return $r;
}
var d1 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Fu(n) {
  return n != null && !d1.has(n)
    ? ($t(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ns}"`,
      ),
      null)
    : n;
}
function f1(n, s) {
  let c, u, d, h, m;
  if (r1(n)) {
    let g = n.getAttribute("action");
    ((u = g ? Sa(g, s) : null),
      (c = n.getAttribute("method") || ls),
      (d = Fu(n.getAttribute("enctype")) || ns),
      (h = new FormData(n)));
  } else if (i1(n) || (s1(n) && (n.type === "submit" || n.type === "image"))) {
    let g = n.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let b = n.getAttribute("formaction") || g.getAttribute("action");
    if (
      ((u = b ? Sa(b, s) : null),
      (c = n.getAttribute("formmethod") || g.getAttribute("method") || ls),
      (d =
        Fu(n.getAttribute("formenctype")) ||
        Fu(g.getAttribute("enctype")) ||
        ns),
      (h = new FormData(g, n)),
      !c1())
    ) {
      let { name: x, type: v, value: y } = n;
      if (v === "image") {
        let R = x ? `${x}.` : "";
        (h.append(`${R}x`, "0"), h.append(`${R}y`, "0"));
      } else x && h.append(x, y);
    }
  } else {
    if (ps(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((c = ls), (u = null), (d = ns), (m = n));
  }
  return (
    h && d === "text/plain" && ((m = h), (h = void 0)),
    { action: u, method: c.toLowerCase(), encType: d, formData: h, body: m }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function kc(n, s) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(s);
}
function h1(n, s, c, u) {
  let d =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : n;
  return (
    c
      ? d.pathname.endsWith("/")
        ? (d.pathname = `${d.pathname}_.${u}`)
        : (d.pathname = `${d.pathname}.${u}`)
      : d.pathname === "/"
        ? (d.pathname = `_root.${u}`)
        : s && Sa(d.pathname, s) === "/"
          ? (d.pathname = `${s.replace(/\/$/, "")}/_root.${u}`)
          : (d.pathname = `${d.pathname.replace(/\/$/, "")}.${u}`),
    d
  );
}
async function m1(n, s) {
  if (n.id in s) return s[n.id];
  try {
    let c = await import(n.module);
    return ((s[n.id] = c), c);
  } catch (c) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function p1(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
}
async function x1(n, s, c) {
  let u = await Promise.all(
    n.map(async (d) => {
      let h = s.routes[d.route.id];
      if (h) {
        let m = await m1(h, c);
        return m.links ? m.links() : [];
      }
      return [];
    }),
  );
  return v1(
    u
      .flat(1)
      .filter(p1)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" },
      ),
  );
}
function Kh(n, s, c, u, d, h) {
  let m = (b, x) => (c[x] ? b.route.id !== c[x].route.id : !0),
    g = (b, x) =>
      c[x].pathname !== b.pathname ||
      (c[x].route.path?.endsWith("*") && c[x].params["*"] !== b.params["*"]);
  return h === "assets"
    ? s.filter((b, x) => m(b, x) || g(b, x))
    : h === "data"
      ? s.filter((b, x) => {
          let v = u.routes[b.route.id];
          if (!v || !v.hasLoader) return !1;
          if (m(b, x) || g(b, x)) return !0;
          if (b.route.shouldRevalidate) {
            let y = b.route.shouldRevalidate({
              currentUrl: new URL(
                d.pathname + d.search + d.hash,
                window.origin,
              ),
              currentParams: c[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: b.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof y == "boolean") return y;
          }
          return !0;
        })
      : [];
}
function g1(n, s, { includeHydrateFallback: c } = {}) {
  return b1(
    n
      .map((u) => {
        let d = s.routes[u.route.id];
        if (!d) return [];
        let h = [d.module];
        return (
          d.clientActionModule && (h = h.concat(d.clientActionModule)),
          d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)),
          c &&
            d.hydrateFallbackModule &&
            (h = h.concat(d.hydrateFallbackModule)),
          d.imports && (h = h.concat(d.imports)),
          h
        );
      })
      .flat(1),
  );
}
function b1(n) {
  return [...new Set(n)];
}
function y1(n) {
  let s = {},
    c = Object.keys(n).sort();
  for (let u of c) s[u] = n[u];
  return s;
}
function v1(n, s) {
  let c = new Set();
  return (
    new Set(s),
    n.reduce((u, d) => {
      let h = JSON.stringify(y1(d));
      return (c.has(h) || (c.add(h), u.push({ key: h, link: d })), u);
    }, [])
  );
}
function Dm() {
  let n = j.useContext(pn);
  return (
    kc(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    n
  );
}
function w1() {
  let n = j.useContext(ms);
  return (
    kc(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    n
  );
}
var Sc = j.createContext(void 0);
Sc.displayName = "FrameworkContext";
function Um() {
  let n = j.useContext(Sc);
  return (
    kc(n, "You must render this element inside a <HydratedRouter> element"),
    n
  );
}
function k1(n, s) {
  let c = j.useContext(Sc),
    [u, d] = j.useState(!1),
    [h, m] = j.useState(!1),
    {
      onFocus: g,
      onBlur: b,
      onMouseEnter: x,
      onMouseLeave: v,
      onTouchStart: y,
    } = s,
    R = j.useRef(null);
  (j.useEffect(() => {
    if ((n === "render" && m(!0), n === "viewport")) {
      let H = (Y) => {
          Y.forEach((V) => {
            m(V.isIntersecting);
          });
        },
        T = new IntersectionObserver(H, { threshold: 0.5 });
      return (
        R.current && T.observe(R.current),
        () => {
          T.disconnect();
        }
      );
    }
  }, [n]),
    j.useEffect(() => {
      if (u) {
        let H = setTimeout(() => {
          m(!0);
        }, 100);
        return () => {
          clearTimeout(H);
        };
      }
    }, [u]));
  let G = () => {
      d(!0);
    },
    A = () => {
      (d(!1), m(!1));
    };
  return c
    ? n !== "intent"
      ? [h, R, {}]
      : [
          h,
          R,
          {
            onFocus: mi(g, G),
            onBlur: mi(b, A),
            onMouseEnter: mi(x, G),
            onMouseLeave: mi(v, A),
            onTouchStart: mi(y, G),
          },
        ]
    : [!1, R, {}];
}
function mi(n, s) {
  return (c) => {
    (n && n(c), c.defaultPrevented || s(c));
  };
}
function S1({ page: n, ...s }) {
  let { router: c } = Dm(),
    u = j.useMemo(() => km(c.routes, n, c.basename), [c.routes, n, c.basename]);
  return u ? j.createElement(N1, { page: n, matches: u, ...s }) : null;
}
function j1(n) {
  let { manifest: s, routeModules: c } = Um(),
    [u, d] = j.useState([]);
  return (
    j.useEffect(() => {
      let h = !1;
      return (
        x1(n, s, c).then((m) => {
          h || d(m);
        }),
        () => {
          h = !0;
        }
      );
    }, [n, s, c]),
    u
  );
}
function N1({ page: n, matches: s, ...c }) {
  let u = Na(),
    { future: d, manifest: h, routeModules: m } = Um(),
    { basename: g } = Dm(),
    { loaderData: b, matches: x } = w1(),
    v = j.useMemo(() => Kh(n, s, x, h, u, "data"), [n, s, x, h, u]),
    y = j.useMemo(() => Kh(n, s, x, h, u, "assets"), [n, s, x, h, u]),
    R = j.useMemo(() => {
      if (n === u.pathname + u.search + u.hash) return [];
      let H = new Set(),
        T = !1;
      if (
        (s.forEach((V) => {
          let X = h.routes[V.route.id];
          !X ||
            !X.hasLoader ||
            ((!v.some((ae) => ae.route.id === V.route.id) &&
              V.route.id in b &&
              m[V.route.id]?.shouldRevalidate) ||
            X.hasClientLoader
              ? (T = !0)
              : H.add(V.route.id));
        }),
        H.size === 0)
      )
        return [];
      let Y = h1(n, g, d.unstable_trailingSlashAwareDataRequests, "data");
      return (
        T &&
          H.size > 0 &&
          Y.searchParams.set(
            "_routes",
            s
              .filter((V) => H.has(V.route.id))
              .map((V) => V.route.id)
              .join(","),
          ),
        [Y.pathname + Y.search]
      );
    }, [g, d.unstable_trailingSlashAwareDataRequests, b, u, h, v, s, n, m]),
    G = j.useMemo(() => g1(y, h), [y, h]),
    A = j1(y);
  return j.createElement(
    j.Fragment,
    null,
    R.map((H) =>
      j.createElement("link", {
        key: H,
        rel: "prefetch",
        as: "fetch",
        href: H,
        ...c,
      }),
    ),
    G.map((H) =>
      j.createElement("link", { key: H, rel: "modulepreload", href: H, ...c }),
    ),
    A.map(({ key: H, link: T }) =>
      j.createElement("link", {
        key: H,
        nonce: c.nonce,
        ...T,
        crossOrigin: T.crossOrigin ?? c.crossOrigin,
      }),
    ),
  );
}
function z1(...n) {
  return (s) => {
    n.forEach((c) => {
      typeof c == "function" ? c(s) : c != null && (c.current = s);
    });
  };
}
var E1 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  E1 && (window.__reactRouterVersion = "7.13.0");
} catch {}
function _1({
  basename: n,
  children: s,
  unstable_useTransitions: c,
  window: u,
}) {
  let d = j.useRef();
  d.current == null && (d.current = ob({ window: u, v5Compat: !0 }));
  let h = d.current,
    [m, g] = j.useState({ action: h.action, location: h.location }),
    b = j.useCallback(
      (x) => {
        c === !1 ? g(x) : j.startTransition(() => g(x));
      },
      [c],
    );
  return (
    j.useLayoutEffect(() => h.listen(b), [h, b]),
    j.createElement(l1, {
      basename: n,
      children: s,
      location: m.location,
      navigationType: m.action,
      navigator: h,
      unstable_useTransitions: c,
    })
  );
}
var Hm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  qt = j.forwardRef(function (
    {
      onClick: s,
      discover: c = "render",
      prefetch: u = "none",
      relative: d,
      reloadDocument: h,
      replace: m,
      state: g,
      target: b,
      to: x,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: R,
      ...G
    },
    A,
  ) {
    let { basename: H, unstable_useTransitions: T } = j.useContext(_t),
      Y = typeof x == "string" && Hm.test(x),
      V = zm(x, H);
    x = V.to;
    let X = Yb(x, { relative: d }),
      [ae, $, ue] = k1(u, G),
      D = R1(x, {
        replace: m,
        state: g,
        target: b,
        preventScrollReset: v,
        relative: d,
        viewTransition: y,
        unstable_defaultShouldRevalidate: R,
        unstable_useTransitions: T,
      });
    function P(Ke) {
      (s && s(Ke), Ke.defaultPrevented || D(Ke));
    }
    let ie = j.createElement("a", {
      ...G,
      ...ue,
      href: V.absoluteURL || X,
      onClick: V.isExternal || h ? s : P,
      ref: z1(A, $),
      target: b,
      "data-discover": !Y && c === "render" ? "true" : void 0,
    });
    return ae && !Y
      ? j.createElement(j.Fragment, null, ie, j.createElement(S1, { page: X }))
      : ie;
  });
qt.displayName = "Link";
var tt = j.forwardRef(function (
  {
    "aria-current": s = "page",
    caseSensitive: c = !1,
    className: u = "",
    end: d = !1,
    style: h,
    to: m,
    viewTransition: g,
    children: b,
    ...x
  },
  v,
) {
  let y = wi(m, { relative: x.relative }),
    R = Na(),
    G = j.useContext(ms),
    { navigator: A, basename: H } = j.useContext(_t),
    T = G != null && U1(y) && g === !0,
    Y = A.encodeLocation ? A.encodeLocation(y).pathname : y.pathname,
    V = R.pathname,
    X =
      G && G.navigation && G.navigation.location
        ? G.navigation.location.pathname
        : null;
  (c ||
    ((V = V.toLowerCase()),
    (X = X ? X.toLowerCase() : null),
    (Y = Y.toLowerCase())),
    X && H && (X = Sa(X, H) || X));
  const ae = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
  let $ = V === Y || (!d && V.startsWith(Y) && V.charAt(ae) === "/"),
    ue =
      X != null &&
      (X === Y || (!d && X.startsWith(Y) && X.charAt(Y.length) === "/")),
    D = { isActive: $, isPending: ue, isTransitioning: T },
    P = $ ? s : void 0,
    ie;
  typeof u == "function"
    ? (ie = u(D))
    : (ie = [
        u,
        $ ? "active" : null,
        ue ? "pending" : null,
        T ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Ke = typeof h == "function" ? h(D) : h;
  return j.createElement(
    qt,
    {
      ...x,
      "aria-current": P,
      className: ie,
      ref: v,
      style: Ke,
      to: m,
      viewTransition: g,
    },
    typeof b == "function" ? b(D) : b,
  );
});
tt.displayName = "NavLink";
var A1 = j.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: s,
      navigate: c,
      reloadDocument: u,
      replace: d,
      state: h,
      method: m = ls,
      action: g,
      onSubmit: b,
      relative: x,
      preventScrollReset: v,
      viewTransition: y,
      unstable_defaultShouldRevalidate: R,
      ...G
    },
    A,
  ) => {
    let { unstable_useTransitions: H } = j.useContext(_t),
      T = M1(),
      Y = D1(g, { relative: x }),
      V = m.toLowerCase() === "get" ? "get" : "post",
      X = typeof g == "string" && Hm.test(g),
      ae = ($) => {
        if ((b && b($), $.defaultPrevented)) return;
        $.preventDefault();
        let ue = $.nativeEvent.submitter,
          D = ue?.getAttribute("formmethod") || m,
          P = () =>
            T(ue || $.currentTarget, {
              fetcherKey: s,
              method: D,
              navigate: c,
              replace: d,
              state: h,
              relative: x,
              preventScrollReset: v,
              viewTransition: y,
              unstable_defaultShouldRevalidate: R,
            });
        H && c !== !1 ? j.startTransition(() => P()) : P();
      };
    return j.createElement("form", {
      ref: A,
      method: V,
      action: Y,
      onSubmit: u ? b : ae,
      ...G,
      "data-discover": !X && n === "render" ? "true" : void 0,
    });
  },
);
A1.displayName = "Form";
function T1(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Lm(n) {
  let s = j.useContext(pn);
  return (Ce(s, T1(n)), s);
}
function R1(
  n,
  {
    target: s,
    replace: c,
    state: u,
    preventScrollReset: d,
    relative: h,
    viewTransition: m,
    unstable_defaultShouldRevalidate: g,
    unstable_useTransitions: b,
  } = {},
) {
  let x = vi(),
    v = Na(),
    y = wi(n, { relative: h });
  return j.useCallback(
    (R) => {
      if (u1(R, s)) {
        R.preventDefault();
        let G = c !== void 0 ? c : gi(v) === gi(y),
          A = () =>
            x(n, {
              replace: G,
              state: u,
              preventScrollReset: d,
              relative: h,
              viewTransition: m,
              unstable_defaultShouldRevalidate: g,
            });
        b ? j.startTransition(() => A()) : A();
      }
    },
    [v, x, y, c, u, s, n, d, h, m, g, b],
  );
}
var C1 = 0,
  O1 = () => `__${String(++C1)}__`;
function M1() {
  let { router: n } = Lm("useSubmit"),
    { basename: s } = j.useContext(_t),
    c = Ib(),
    u = n.fetch,
    d = n.navigate;
  return j.useCallback(
    async (h, m = {}) => {
      let { action: g, method: b, encType: x, formData: v, body: y } = f1(h, s);
      if (m.navigate === !1) {
        let R = m.fetcherKey || O1();
        await u(R, c, m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: y,
          formMethod: m.method || b,
          formEncType: m.encType || x,
          flushSync: m.flushSync,
        });
      } else
        await d(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: v,
          body: y,
          formMethod: m.method || b,
          formEncType: m.encType || x,
          replace: m.replace,
          state: m.state,
          fromRouteId: c,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition,
        });
    },
    [u, d, s, c],
  );
}
function D1(n, { relative: s } = {}) {
  let { basename: c } = j.useContext(_t),
    u = j.useContext(ta);
  Ce(u, "useFormAction must be used inside a RouteContext");
  let [d] = u.matches.slice(-1),
    h = { ...wi(n || ".", { relative: s }) },
    m = Na();
  if (n == null) {
    h.search = m.search;
    let g = new URLSearchParams(h.search),
      b = g.getAll("index");
    if (b.some((v) => v === "")) {
      (g.delete("index"),
        b.filter((y) => y).forEach((y) => g.append("index", y)));
      let v = g.toString();
      h.search = v ? `?${v}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      d.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    c !== "/" && (h.pathname = h.pathname === "/" ? c : ka([c, h.pathname])),
    gi(h)
  );
}
function U1(n, { relative: s } = {}) {
  let c = j.useContext(_m);
  Ce(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: u } = Lm("useViewTransitionState"),
    d = wi(n, { relative: s });
  if (!c.isTransitioning) return !1;
  let h = Sa(c.currentLocation.pathname, u) || c.currentLocation.pathname,
    m = Sa(c.nextLocation.pathname, u) || c.nextLocation.pathname;
  return us(d.pathname, m) != null || us(d.pathname, h) != null;
}
let H1 = { data: "" },
  L1 = (n) => {
    if (typeof window == "object") {
      let s =
        (n ? n.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (s.nonce = window.__nonce__),
        s.parentNode || (n || document.head).appendChild(s),
        s.firstChild
      );
    }
    return n || H1;
  },
  B1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  q1 = /\/\*[^]*?\*\/|  +/g,
  Jh = /\n+/g,
  Wa = (n, s) => {
    let c = "",
      u = "",
      d = "";
    for (let h in n) {
      let m = n[h];
      h[0] == "@"
        ? h[1] == "i"
          ? (c = h + " " + m + ";")
          : (u +=
              h[1] == "f"
                ? Wa(m, h)
                : h + "{" + Wa(m, h[1] == "k" ? "" : s) + "}")
        : typeof m == "object"
          ? (u += Wa(
              m,
              s
                ? s.replace(/([^,])+/g, (g) =>
                    h.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (b) =>
                      /&/.test(b) ? b.replace(/&/g, g) : g ? g + " " + b : b,
                    ),
                  )
                : h,
            ))
          : m != null &&
            ((h = /^--/.test(h) ? h : h.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (d += Wa.p ? Wa.p(h, m) : h + ":" + m + ";"));
    }
    return c + (s && d ? s + "{" + d + "}" : d) + u;
  },
  va = {},
  Bm = (n) => {
    if (typeof n == "object") {
      let s = "";
      for (let c in n) s += c + Bm(n[c]);
      return s;
    }
    return n;
  },
  G1 = (n, s, c, u, d) => {
    let h = Bm(n),
      m =
        va[h] ||
        (va[h] = ((b) => {
          let x = 0,
            v = 11;
          for (; x < b.length; ) v = (101 * v + b.charCodeAt(x++)) >>> 0;
          return "go" + v;
        })(h));
    if (!va[m]) {
      let b =
        h !== n
          ? n
          : ((x) => {
              let v,
                y,
                R = [{}];
              for (; (v = B1.exec(x.replace(q1, ""))); )
                v[4]
                  ? R.shift()
                  : v[3]
                    ? ((y = v[3].replace(Jh, " ").trim()),
                      R.unshift((R[0][y] = R[0][y] || {})))
                    : (R[0][v[1]] = v[2].replace(Jh, " ").trim());
              return R[0];
            })(n);
      va[m] = Wa(d ? { ["@keyframes " + m]: b } : b, c ? "" : "." + m);
    }
    let g = c && va.g ? va.g : null;
    return (
      c && (va.g = va[m]),
      ((b, x, v, y) => {
        y
          ? (x.data = x.data.replace(y, b))
          : x.data.indexOf(b) === -1 && (x.data = v ? b + x.data : x.data + b);
      })(va[m], s, u, g),
      m
    );
  },
  Y1 = (n, s, c) =>
    n.reduce((u, d, h) => {
      let m = s[h];
      if (m && m.call) {
        let g = m(c),
          b = (g && g.props && g.props.className) || (/^go/.test(g) && g);
        m = b
          ? "." + b
          : g && typeof g == "object"
            ? g.props
              ? ""
              : Wa(g, "")
            : g === !1
              ? ""
              : g;
      }
      return u + d + (m ?? "");
    }, "");
function xs(n) {
  let s = this || {},
    c = n.call ? n(s.p) : n;
  return G1(
    c.unshift
      ? c.raw
        ? Y1(c, [].slice.call(arguments, 1), s.p)
        : c.reduce((u, d) => Object.assign(u, d && d.call ? d(s.p) : d), {})
      : c,
    L1(s.target),
    s.g,
    s.o,
    s.k,
  );
}
let qm, rc, sc;
xs.bind({ g: 1 });
let ja = xs.bind({ k: 1 });
function V1(n, s, c, u) {
  ((Wa.p = s), (qm = n), (rc = c), (sc = u));
}
function Pa(n, s) {
  let c = this || {};
  return function () {
    let u = arguments;
    function d(h, m) {
      let g = Object.assign({}, h),
        b = g.className || d.className;
      ((c.p = Object.assign({ theme: rc && rc() }, g)),
        (c.o = / *go\d+/.test(b)),
        (g.className = xs.apply(c, u) + (b ? " " + b : "")));
      let x = n;
      return (
        n[0] && ((x = g.as || n), delete g.as),
        sc && x[0] && sc(g),
        qm(x, g)
      );
    }
    return d;
  };
}
var X1 = (n) => typeof n == "function",
  cs = (n, s) => (X1(n) ? n(s) : n),
  Q1 = (() => {
    let n = 0;
    return () => (++n).toString();
  })(),
  Gm = (() => {
    let n;
    return () => {
      if (n === void 0 && typeof window < "u") {
        let s = matchMedia("(prefers-reduced-motion: reduce)");
        n = !s || s.matches;
      }
      return n;
    };
  })(),
  Z1 = 20,
  jc = "default",
  Ym = (n, s) => {
    let { toastLimit: c } = n.settings;
    switch (s.type) {
      case 0:
        return { ...n, toasts: [s.toast, ...n.toasts].slice(0, c) };
      case 1:
        return {
          ...n,
          toasts: n.toasts.map((m) =>
            m.id === s.toast.id ? { ...m, ...s.toast } : m,
          ),
        };
      case 2:
        let { toast: u } = s;
        return Ym(n, {
          type: n.toasts.find((m) => m.id === u.id) ? 1 : 0,
          toast: u,
        });
      case 3:
        let { toastId: d } = s;
        return {
          ...n,
          toasts: n.toasts.map((m) =>
            m.id === d || d === void 0
              ? { ...m, dismissed: !0, visible: !1 }
              : m,
          ),
        };
      case 4:
        return s.toastId === void 0
          ? { ...n, toasts: [] }
          : { ...n, toasts: n.toasts.filter((m) => m.id !== s.toastId) };
      case 5:
        return { ...n, pausedAt: s.time };
      case 6:
        let h = s.time - (n.pausedAt || 0);
        return {
          ...n,
          pausedAt: void 0,
          toasts: n.toasts.map((m) => ({
            ...m,
            pauseDuration: m.pauseDuration + h,
          })),
        };
    }
  },
  is = [],
  Vm = { toasts: [], pausedAt: void 0, settings: { toastLimit: Z1 } },
  ea = {},
  Xm = (n, s = jc) => {
    ((ea[s] = Ym(ea[s] || Vm, n)),
      is.forEach(([c, u]) => {
        c === s && u(ea[s]);
      }));
  },
  Qm = (n) => Object.keys(ea).forEach((s) => Xm(n, s)),
  $1 = (n) => Object.keys(ea).find((s) => ea[s].toasts.some((c) => c.id === n)),
  gs =
    (n = jc) =>
    (s) => {
      Xm(s, n);
    },
  K1 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  J1 = (n = {}, s = jc) => {
    let [c, u] = j.useState(ea[s] || Vm),
      d = j.useRef(ea[s]);
    j.useEffect(
      () => (
        d.current !== ea[s] && u(ea[s]),
        is.push([s, u]),
        () => {
          let m = is.findIndex(([g]) => g === s);
          m > -1 && is.splice(m, 1);
        }
      ),
      [s],
    );
    let h = c.toasts.map((m) => {
      var g, b, x;
      return {
        ...n,
        ...n[m.type],
        ...m,
        removeDelay:
          m.removeDelay ||
          ((g = n[m.type]) == null ? void 0 : g.removeDelay) ||
          n?.removeDelay,
        duration:
          m.duration ||
          ((b = n[m.type]) == null ? void 0 : b.duration) ||
          n?.duration ||
          K1[m.type],
        style: {
          ...n.style,
          ...((x = n[m.type]) == null ? void 0 : x.style),
          ...m.style,
        },
      };
    });
    return { ...c, toasts: h };
  },
  F1 = (n, s = "blank", c) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: s,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: n,
    pauseDuration: 0,
    ...c,
    id: c?.id || Q1(),
  }),
  ki = (n) => (s, c) => {
    let u = F1(s, n, c);
    return (gs(u.toasterId || $1(u.id))({ type: 2, toast: u }), u.id);
  },
  xe = (n, s) => ki("blank")(n, s);
xe.error = ki("error");
xe.success = ki("success");
xe.loading = ki("loading");
xe.custom = ki("custom");
xe.dismiss = (n, s) => {
  let c = { type: 3, toastId: n };
  s ? gs(s)(c) : Qm(c);
};
xe.dismissAll = (n) => xe.dismiss(void 0, n);
xe.remove = (n, s) => {
  let c = { type: 4, toastId: n };
  s ? gs(s)(c) : Qm(c);
};
xe.removeAll = (n) => xe.remove(void 0, n);
xe.promise = (n, s, c) => {
  let u = xe.loading(s.loading, { ...c, ...c?.loading });
  return (
    typeof n == "function" && (n = n()),
    n
      .then((d) => {
        let h = s.success ? cs(s.success, d) : void 0;
        return (
          h ? xe.success(h, { id: u, ...c, ...c?.success }) : xe.dismiss(u),
          d
        );
      })
      .catch((d) => {
        let h = s.error ? cs(s.error, d) : void 0;
        h ? xe.error(h, { id: u, ...c, ...c?.error }) : xe.dismiss(u);
      }),
    n
  );
};
var W1 = 1e3,
  P1 = (n, s = "default") => {
    let { toasts: c, pausedAt: u } = J1(n, s),
      d = j.useRef(new Map()).current,
      h = j.useCallback((y, R = W1) => {
        if (d.has(y)) return;
        let G = setTimeout(() => {
          (d.delete(y), m({ type: 4, toastId: y }));
        }, R);
        d.set(y, G);
      }, []);
    j.useEffect(() => {
      if (u) return;
      let y = Date.now(),
        R = c.map((G) => {
          if (G.duration === 1 / 0) return;
          let A = (G.duration || 0) + G.pauseDuration - (y - G.createdAt);
          if (A < 0) {
            G.visible && xe.dismiss(G.id);
            return;
          }
          return setTimeout(() => xe.dismiss(G.id, s), A);
        });
      return () => {
        R.forEach((G) => G && clearTimeout(G));
      };
    }, [c, u, s]);
    let m = j.useCallback(gs(s), [s]),
      g = j.useCallback(() => {
        m({ type: 5, time: Date.now() });
      }, [m]),
      b = j.useCallback(
        (y, R) => {
          m({ type: 1, toast: { id: y, height: R } });
        },
        [m],
      ),
      x = j.useCallback(() => {
        u && m({ type: 6, time: Date.now() });
      }, [u, m]),
      v = j.useCallback(
        (y, R) => {
          let {
              reverseOrder: G = !1,
              gutter: A = 8,
              defaultPosition: H,
            } = R || {},
            T = c.filter(
              (X) => (X.position || H) === (y.position || H) && X.height,
            ),
            Y = T.findIndex((X) => X.id === y.id),
            V = T.filter((X, ae) => ae < Y && X.visible).length;
          return T.filter((X) => X.visible)
            .slice(...(G ? [V + 1] : [0, V]))
            .reduce((X, ae) => X + (ae.height || 0) + A, 0);
        },
        [c],
      );
    return (
      j.useEffect(() => {
        c.forEach((y) => {
          if (y.dismissed) h(y.id, y.removeDelay);
          else {
            let R = d.get(y.id);
            R && (clearTimeout(R), d.delete(y.id));
          }
        });
      }, [c, h]),
      {
        toasts: c,
        handlers: {
          updateHeight: b,
          startPause: g,
          endPause: x,
          calculateOffset: v,
        },
      }
    );
  },
  I1 = ja`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  ey = ja`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  ty = ja`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  ay = Pa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${I1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ey} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(n) => n.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ty} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  ly = ja`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  ny = Pa("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(n) => n.secondary || "#e0e0e0"};
  border-right-color: ${(n) => n.primary || "#616161"};
  animation: ${ly} 1s linear infinite;
`,
  iy = ja`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  ry = ja`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  sy = Pa("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(n) => n.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${iy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ry} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(n) => n.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  oy = Pa("div")`
  position: absolute;
`,
  uy = Pa("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  cy = ja`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  dy = Pa("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${cy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  fy = ({ toast: n }) => {
    let { icon: s, type: c, iconTheme: u } = n;
    return s !== void 0
      ? typeof s == "string"
        ? j.createElement(dy, null, s)
        : s
      : c === "blank"
        ? null
        : j.createElement(
            uy,
            null,
            j.createElement(ny, { ...u }),
            c !== "loading" &&
              j.createElement(
                oy,
                null,
                c === "error"
                  ? j.createElement(ay, { ...u })
                  : j.createElement(sy, { ...u }),
              ),
          );
  },
  hy = (n) => `
0% {transform: translate3d(0,${n * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  my = (n) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${n * -150}%,-1px) scale(.6); opacity:0;}
`,
  py = "0%{opacity:0;} 100%{opacity:1;}",
  xy = "0%{opacity:1;} 100%{opacity:0;}",
  gy = Pa("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  by = Pa("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  yy = (n, s) => {
    let c = n.includes("top") ? 1 : -1,
      [u, d] = Gm() ? [py, xy] : [hy(c), my(c)];
    return {
      animation: s
        ? `${ja(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${ja(d)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  vy = j.memo(({ toast: n, position: s, style: c, children: u }) => {
    let d = n.height
        ? yy(n.position || s || "top-center", n.visible)
        : { opacity: 0 },
      h = j.createElement(fy, { toast: n }),
      m = j.createElement(by, { ...n.ariaProps }, cs(n.message, n));
    return j.createElement(
      gy,
      { className: n.className, style: { ...d, ...c, ...n.style } },
      typeof u == "function"
        ? u({ icon: h, message: m })
        : j.createElement(j.Fragment, null, h, m),
    );
  });
V1(j.createElement);
var wy = ({
    id: n,
    className: s,
    style: c,
    onHeightUpdate: u,
    children: d,
  }) => {
    let h = j.useCallback(
      (m) => {
        if (m) {
          let g = () => {
            let b = m.getBoundingClientRect().height;
            u(n, b);
          };
          (g(),
            new MutationObserver(g).observe(m, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [n, u],
    );
    return j.createElement("div", { ref: h, className: s, style: c }, d);
  },
  ky = (n, s) => {
    let c = n.includes("top"),
      u = c ? { top: 0 } : { bottom: 0 },
      d = n.includes("center")
        ? { justifyContent: "center" }
        : n.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Gm() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${s * (c ? 1 : -1)}px)`,
      ...u,
      ...d,
    };
  },
  Sy = xs`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Kr = 16,
  jy = ({
    reverseOrder: n,
    position: s = "top-center",
    toastOptions: c,
    gutter: u,
    children: d,
    toasterId: h,
    containerStyle: m,
    containerClassName: g,
  }) => {
    let { toasts: b, handlers: x } = P1(c, h);
    return j.createElement(
      "div",
      {
        "data-rht-toaster": h || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Kr,
          left: Kr,
          right: Kr,
          bottom: Kr,
          pointerEvents: "none",
          ...m,
        },
        className: g,
        onMouseEnter: x.startPause,
        onMouseLeave: x.endPause,
      },
      b.map((v) => {
        let y = v.position || s,
          R = x.calculateOffset(v, {
            reverseOrder: n,
            gutter: u,
            defaultPosition: s,
          }),
          G = ky(y, R);
        return j.createElement(
          wy,
          {
            id: v.id,
            key: v.id,
            onHeightUpdate: x.updateHeight,
            className: v.visible ? Sy : "",
            style: G,
          },
          v.type === "custom"
            ? cs(v.message, v)
            : d
              ? d(v)
              : j.createElement(vy, { toast: v, position: y }),
        );
      }),
    );
  },
  nt = xe;
const Zm = (...n) =>
  n
    .filter((s, c, u) => !!s && s.trim() !== "" && u.indexOf(s) === c)
    .join(" ")
    .trim();
const Ny = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const zy = (n) =>
  n.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, c, u) =>
    u ? u.toUpperCase() : c.toLowerCase(),
  );
const Fh = (n) => {
  const s = zy(n);
  return s.charAt(0).toUpperCase() + s.slice(1);
};
var Ey = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const _y = (n) => {
  for (const s in n)
    if (s.startsWith("aria-") || s === "role" || s === "title") return !0;
  return !1;
};
const Ay = j.forwardRef(
  (
    {
      color: n = "currentColor",
      size: s = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: u,
      className: d = "",
      children: h,
      iconNode: m,
      ...g
    },
    b,
  ) =>
    j.createElement(
      "svg",
      {
        ref: b,
        ...Ey,
        width: s,
        height: s,
        stroke: n,
        strokeWidth: u ? (Number(c) * 24) / Number(s) : c,
        className: Zm("lucide", d),
        ...(!h && !_y(g) && { "aria-hidden": "true" }),
        ...g,
      },
      [
        ...m.map(([x, v]) => j.createElement(x, v)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
const F = (n, s) => {
  const c = j.forwardRef(({ className: u, ...d }, h) =>
    j.createElement(Ay, {
      ref: h,
      iconNode: s,
      className: Zm(`lucide-${Ny(Fh(n))}`, `lucide-${n}`, u),
      ...d,
    }),
  );
  return ((c.displayName = Fh(n)), c);
};
const Ty = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse",
      },
    ],
  ],
  Ry = F("activity", Ty);
const Cy = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  $m = F("arrow-right", Cy);
const Oy = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  My = F("arrow-up-right", Oy);
const Dy = [
    [
      "path",
      {
        d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
        key: "hh9hay",
      },
    ],
    ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ],
  Km = F("box", Dy);
const Uy = [
    ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
    ],
  ],
  Jm = F("briefcase", Uy);
const Hy = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  Ly = F("calendar", Hy);
const By = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  qy = F("check", By);
const Gy = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Yy = F("chevron-down", Gy);
const Vy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Si = F("circle-check", Vy);
const Xy = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  Qy = F("circle-x", Xy);
const Zy = [
    [
      "path",
      {
        d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",
        key: "1cez44",
      },
    ],
    ["path", { d: "m13 12-3 5h4l-3 5", key: "1t22er" }],
  ],
  $y = F("cloud-lightning", Zy);
const Ky = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  Jy = F("code-xml", Ky);
const Fy = [
    [
      "path",
      {
        d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",
        key: "11bfej",
      },
    ],
  ],
  Wy = F("command", Fy);
const Py = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  Iy = F("copy", Py);
const ev = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  Fm = F("database", ev);
const tv = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  Nc = F("download", tv);
const av = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  lv = F("eye-off", av);
const nv = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    [
      "path",
      {
        d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",
        key: "1oajmo",
      },
    ],
    [
      "path",
      {
        d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",
        key: "mpwhp6",
      },
    ],
  ],
  iv = F("file-braces", nv);
const rv = [
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M4 12v6", key: "bg1pfk" }],
    ["path", { d: "M4 14h2", key: "1sf9f8" }],
    [
      "path",
      {
        d: "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4",
        key: "d56i0q",
      },
    ],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  sv = F("file-key", rv);
const ov = [
    ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
    ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
    ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
    ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
    ["path", { d: "M2 16h.01", key: "1gqxmh" }],
    ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
    ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
    ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
    ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }],
  ],
  Wm = F("fingerprint-pattern", ov);
const uv = [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ],
  cv = F("git-branch", uv);
const dv = [
    [
      "path",
      {
        d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
        key: "tonef",
      },
    ],
    ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
  ],
  fv = F("github", dv);
const hv = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  mv = F("globe", hv);
const pv = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  xv = F("heart", pv);
const gv = [
    [
      "path",
      {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
        key: "yt0hxn",
      },
    ],
  ],
  gn = F("hexagon", gv);
const bv = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  Jr = F("house", bv);
const yv = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  Wh = F("info", yv);
const vv = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  wv = F("instagram", vv);
const kv = [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t",
      },
    ],
    [
      "circle",
      { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" },
    ],
  ],
  Sv = F("key-round", kv);
const jv = [
    [
      "path",
      {
        d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
        key: "g0fldk",
      },
    ],
    ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
    ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ],
  Nv = F("key", jv);
const zv = [
    ["path", { d: "M10 18v-7", key: "wt116b" }],
    [
      "path",
      {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m",
      },
    ],
    ["path", { d: "M14 18v-7", key: "vav6t3" }],
    ["path", { d: "M18 18v-7", key: "aexdmj" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M6 18v-7", key: "1ivflk" }],
  ],
  Pm = F("landmark", zv);
const Ev = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  _v = F("layers", Ev);
const Av = [
    [
      "rect",
      { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" },
    ],
    [
      "rect",
      { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
    ],
    [
      "rect",
      { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
    ],
    [
      "rect",
      { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
    ],
  ],
  Ph = F("layout-grid", Av);
const Tv = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  Rv = F("linkedin", Tv);
const Cv = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  vl = F("lock", Cv);
const Ov = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  oc = F("log-out", Ov);
const Mv = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  ds = F("mail", Mv);
const Dv = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Uv = F("menu", Dv);
const Hv = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  Lv = F("message-square", Hv);
const Bv = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  qv = F("moon", Bv);
const Gv = [
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
    ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
  ],
  Im = F("pencil", Gv);
const Yv = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Vv = F("phone", Yv);
const Xv = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  ep = F("plus", Xv);
const Qv = [
    [
      "path",
      {
        d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "14sxne",
      },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
    [
      "path",
      {
        d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
        key: "1hlbsb",
      },
    ],
    ["path", { d: "M16 16h5v5", key: "ccwih5" }],
  ],
  Zv = F("refresh-ccw", Qv);
const $v = [
    [
      "path",
      {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc",
      },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    [
      "path",
      {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3",
      },
    ],
    ["path", { d: "M8 16H3v5", key: "1cv678" }],
  ],
  tp = F("refresh-cw", $v);
const Kv = [
    [
      "path",
      { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" },
    ],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ],
  Jv = F("rotate-cw", Kv);
const Fv = [
    [
      "path",
      {
        d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
        key: "1c8476",
      },
    ],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
  ],
  Wv = F("save", Fv);
const Pv = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Iv = F("search", Pv);
const e2 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  t2 = F("send", e2);
const a2 = [
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        ry: "2",
        key: "ngkwjq",
      },
    ],
    [
      "rect",
      {
        width: "20",
        height: "8",
        x: "2",
        y: "14",
        rx: "2",
        ry: "2",
        key: "iecqi9",
      },
    ],
    ["line", { x1: "6", x2: "6.01", y1: "6", y2: "6", key: "16zg32" }],
    ["line", { x1: "6", x2: "6.01", y1: "18", y2: "18", key: "nzw8ys" }],
  ],
  uc = F("server", a2);
const l2 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "M12 8v4", key: "1got3b" }],
    ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ],
  n2 = F("shield-alert", l2);
const i2 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Gt = F("shield-check", i2);
const r2 = [
    ["path", { d: "M10 8h4", key: "1sr2af" }],
    ["path", { d: "M12 21v-9", key: "17s77i" }],
    ["path", { d: "M12 8V3", key: "13r4qs" }],
    ["path", { d: "M17 16h4", key: "h1uq16" }],
    ["path", { d: "M19 12V3", key: "o1uvq1" }],
    ["path", { d: "M19 21v-5", key: "qua636" }],
    ["path", { d: "M3 14h4", key: "bcjad9" }],
    ["path", { d: "M5 10V3", key: "cb8scm" }],
    ["path", { d: "M5 21v-7", key: "1w1uti" }],
  ],
  s2 = F("sliders-vertical", r2);
const o2 = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  ap = F("smartphone", o2);
const u2 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  c2 = F("sun", u2);
const d2 = [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }],
  ],
  f2 = F("terminal", d2);
const h2 = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  lp = F("trash-2", h2);
const m2 = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  p2 = F("twitter", m2);
const x2 = [
    ["path", { d: "M12 3v12", key: "1x0j5s" }],
    ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ],
  g2 = F("upload", x2);
const b2 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  cc = F("user", b2);
const y2 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  np = F("users", y2);
const v2 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  fs = F("x", v2);
const w2 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  fn = F("zap", w2);
function ip(n, s) {
  return function () {
    return n.apply(s, arguments);
  };
}
const { toString: k2 } = Object.prototype,
  { getPrototypeOf: zc } = Object,
  { iterator: bs, toStringTag: rp } = Symbol,
  ys = ((n) => (s) => {
    const c = k2.call(s);
    return n[c] || (n[c] = c.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Kt = (n) => ((n = n.toLowerCase()), (s) => ys(s) === n),
  vs = (n) => (s) => typeof s === n,
  { isArray: bn } = Array,
  hn = vs("undefined");
function ji(n) {
  return (
    n !== null &&
    !hn(n) &&
    n.constructor !== null &&
    !hn(n.constructor) &&
    xt(n.constructor.isBuffer) &&
    n.constructor.isBuffer(n)
  );
}
const sp = Kt("ArrayBuffer");
function S2(n) {
  let s;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (s = ArrayBuffer.isView(n))
      : (s = n && n.buffer && sp(n.buffer)),
    s
  );
}
const j2 = vs("string"),
  xt = vs("function"),
  op = vs("number"),
  Ni = (n) => n !== null && typeof n == "object",
  N2 = (n) => n === !0 || n === !1,
  rs = (n) => {
    if (ys(n) !== "object") return !1;
    const s = zc(n);
    return (
      (s === null ||
        s === Object.prototype ||
        Object.getPrototypeOf(s) === null) &&
      !(rp in n) &&
      !(bs in n)
    );
  },
  z2 = (n) => {
    if (!Ni(n) || ji(n)) return !1;
    try {
      return (
        Object.keys(n).length === 0 &&
        Object.getPrototypeOf(n) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  E2 = Kt("Date"),
  _2 = Kt("File"),
  A2 = Kt("Blob"),
  T2 = Kt("FileList"),
  R2 = (n) => Ni(n) && xt(n.pipe),
  C2 = (n) => {
    let s;
    return (
      n &&
      ((typeof FormData == "function" && n instanceof FormData) ||
        (xt(n.append) &&
          ((s = ys(n)) === "formdata" ||
            (s === "object" &&
              xt(n.toString) &&
              n.toString() === "[object FormData]"))))
    );
  },
  O2 = Kt("URLSearchParams"),
  [M2, D2, U2, H2] = ["ReadableStream", "Request", "Response", "Headers"].map(
    Kt,
  ),
  L2 = (n) =>
    n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(n, s, { allOwnKeys: c = !1 } = {}) {
  if (n === null || typeof n > "u") return;
  let u, d;
  if ((typeof n != "object" && (n = [n]), bn(n)))
    for (u = 0, d = n.length; u < d; u++) s.call(null, n[u], u, n);
  else {
    if (ji(n)) return;
    const h = c ? Object.getOwnPropertyNames(n) : Object.keys(n),
      m = h.length;
    let g;
    for (u = 0; u < m; u++) ((g = h[u]), s.call(null, n[g], g, n));
  }
}
function up(n, s) {
  if (ji(n)) return null;
  s = s.toLowerCase();
  const c = Object.keys(n);
  let u = c.length,
    d;
  for (; u-- > 0; ) if (((d = c[u]), s === d.toLowerCase())) return d;
  return null;
}
const bl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  cp = (n) => !hn(n) && n !== bl;
function dc() {
  const { caseless: n, skipUndefined: s } = (cp(this) && this) || {},
    c = {},
    u = (d, h) => {
      if (h === "__proto__" || h === "constructor" || h === "prototype") return;
      const m = (n && up(c, h)) || h;
      rs(c[m]) && rs(d)
        ? (c[m] = dc(c[m], d))
        : rs(d)
          ? (c[m] = dc({}, d))
          : bn(d)
            ? (c[m] = d.slice())
            : (!s || !hn(d)) && (c[m] = d);
    };
  for (let d = 0, h = arguments.length; d < h; d++)
    arguments[d] && zi(arguments[d], u);
  return c;
}
const B2 = (n, s, c, { allOwnKeys: u } = {}) => (
    zi(
      s,
      (d, h) => {
        c && xt(d)
          ? Object.defineProperty(n, h, {
              value: ip(d, c),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(n, h, {
              value: d,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: u },
    ),
    n
  ),
  q2 = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n),
  G2 = (n, s, c, u) => {
    ((n.prototype = Object.create(s.prototype, u)),
      Object.defineProperty(n.prototype, "constructor", {
        value: n,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(n, "super", { value: s.prototype }),
      c && Object.assign(n.prototype, c));
  },
  Y2 = (n, s, c, u) => {
    let d, h, m;
    const g = {};
    if (((s = s || {}), n == null)) return s;
    do {
      for (d = Object.getOwnPropertyNames(n), h = d.length; h-- > 0; )
        ((m = d[h]),
          (!u || u(m, n, s)) && !g[m] && ((s[m] = n[m]), (g[m] = !0)));
      n = c !== !1 && zc(n);
    } while (n && (!c || c(n, s)) && n !== Object.prototype);
    return s;
  },
  V2 = (n, s, c) => {
    ((n = String(n)),
      (c === void 0 || c > n.length) && (c = n.length),
      (c -= s.length));
    const u = n.indexOf(s, c);
    return u !== -1 && u === c;
  },
  X2 = (n) => {
    if (!n) return null;
    if (bn(n)) return n;
    let s = n.length;
    if (!op(s)) return null;
    const c = new Array(s);
    for (; s-- > 0; ) c[s] = n[s];
    return c;
  },
  Q2 = (
    (n) => (s) =>
      n && s instanceof n
  )(typeof Uint8Array < "u" && zc(Uint8Array)),
  Z2 = (n, s) => {
    const u = (n && n[bs]).call(n);
    let d;
    for (; (d = u.next()) && !d.done; ) {
      const h = d.value;
      s.call(n, h[0], h[1]);
    }
  },
  $2 = (n, s) => {
    let c;
    const u = [];
    for (; (c = n.exec(s)) !== null; ) u.push(c);
    return u;
  },
  K2 = Kt("HTMLFormElement"),
  J2 = (n) =>
    n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (c, u, d) {
      return u.toUpperCase() + d;
    }),
  Ih = (
    ({ hasOwnProperty: n }) =>
    (s, c) =>
      n.call(s, c)
  )(Object.prototype),
  F2 = Kt("RegExp"),
  dp = (n, s) => {
    const c = Object.getOwnPropertyDescriptors(n),
      u = {};
    (zi(c, (d, h) => {
      let m;
      (m = s(d, h, n)) !== !1 && (u[h] = m || d);
    }),
      Object.defineProperties(n, u));
  },
  W2 = (n) => {
    dp(n, (s, c) => {
      if (xt(n) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
        return !1;
      const u = n[c];
      if (xt(u)) {
        if (((s.enumerable = !1), "writable" in s)) {
          s.writable = !1;
          return;
        }
        s.set ||
          (s.set = () => {
            throw Error("Can not rewrite read-only method '" + c + "'");
          });
      }
    });
  },
  P2 = (n, s) => {
    const c = {},
      u = (d) => {
        d.forEach((h) => {
          c[h] = !0;
        });
      };
    return (bn(n) ? u(n) : u(String(n).split(s)), c);
  },
  I2 = () => {},
  e5 = (n, s) => (n != null && Number.isFinite((n = +n)) ? n : s);
function t5(n) {
  return !!(n && xt(n.append) && n[rp] === "FormData" && n[bs]);
}
const a5 = (n) => {
    const s = new Array(10),
      c = (u, d) => {
        if (Ni(u)) {
          if (s.indexOf(u) >= 0) return;
          if (ji(u)) return u;
          if (!("toJSON" in u)) {
            s[d] = u;
            const h = bn(u) ? [] : {};
            return (
              zi(u, (m, g) => {
                const b = c(m, d + 1);
                !hn(b) && (h[g] = b);
              }),
              (s[d] = void 0),
              h
            );
          }
        }
        return u;
      };
    return c(n, 0);
  },
  l5 = Kt("AsyncFunction"),
  n5 = (n) => n && (Ni(n) || xt(n)) && xt(n.then) && xt(n.catch),
  fp = ((n, s) =>
    n
      ? setImmediate
      : s
        ? ((c, u) => (
            bl.addEventListener(
              "message",
              ({ source: d, data: h }) => {
                d === bl && h === c && u.length && u.shift()();
              },
              !1,
            ),
            (d) => {
              (u.push(d), bl.postMessage(c, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (c) => setTimeout(c))(
    typeof setImmediate == "function",
    xt(bl.postMessage),
  ),
  i5 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(bl)
      : (typeof process < "u" && process.nextTick) || fp,
  r5 = (n) => n != null && xt(n[bs]),
  C = {
    isArray: bn,
    isArrayBuffer: sp,
    isBuffer: ji,
    isFormData: C2,
    isArrayBufferView: S2,
    isString: j2,
    isNumber: op,
    isBoolean: N2,
    isObject: Ni,
    isPlainObject: rs,
    isEmptyObject: z2,
    isReadableStream: M2,
    isRequest: D2,
    isResponse: U2,
    isHeaders: H2,
    isUndefined: hn,
    isDate: E2,
    isFile: _2,
    isBlob: A2,
    isRegExp: F2,
    isFunction: xt,
    isStream: R2,
    isURLSearchParams: O2,
    isTypedArray: Q2,
    isFileList: T2,
    forEach: zi,
    merge: dc,
    extend: B2,
    trim: L2,
    stripBOM: q2,
    inherits: G2,
    toFlatObject: Y2,
    kindOf: ys,
    kindOfTest: Kt,
    endsWith: V2,
    toArray: X2,
    forEachEntry: Z2,
    matchAll: $2,
    isHTMLForm: K2,
    hasOwnProperty: Ih,
    hasOwnProp: Ih,
    reduceDescriptors: dp,
    freezeMethods: W2,
    toObjectSet: P2,
    toCamelCase: J2,
    noop: I2,
    toFiniteNumber: e5,
    findKey: up,
    global: bl,
    isContextDefined: cp,
    isSpecCompliantForm: t5,
    toJSONObject: a5,
    isAsyncFn: l5,
    isThenable: n5,
    setImmediate: fp,
    asap: i5,
    isIterable: r5,
  };
let le = class hp extends Error {
  static from(s, c, u, d, h, m) {
    const g = new hp(s.message, c || s.code, u, d, h);
    return ((g.cause = s), (g.name = s.name), m && Object.assign(g, m), g);
  }
  constructor(s, c, u, d, h) {
    (super(s),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      c && (this.code = c),
      u && (this.config = u),
      d && (this.request = d),
      h && ((this.response = h), (this.status = h.status)));
  }
  toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  }
};
le.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
le.ERR_BAD_OPTION = "ERR_BAD_OPTION";
le.ECONNABORTED = "ECONNABORTED";
le.ETIMEDOUT = "ETIMEDOUT";
le.ERR_NETWORK = "ERR_NETWORK";
le.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
le.ERR_DEPRECATED = "ERR_DEPRECATED";
le.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
le.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
le.ERR_CANCELED = "ERR_CANCELED";
le.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
le.ERR_INVALID_URL = "ERR_INVALID_URL";
const s5 = null;
function fc(n) {
  return C.isPlainObject(n) || C.isArray(n);
}
function mp(n) {
  return C.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function em(n, s, c) {
  return n
    ? n
        .concat(s)
        .map(function (d, h) {
          return ((d = mp(d)), !c && h ? "[" + d + "]" : d);
        })
        .join(c ? "." : "")
    : s;
}
function o5(n) {
  return C.isArray(n) && !n.some(fc);
}
const u5 = C.toFlatObject(C, {}, null, function (s) {
  return /^is[A-Z]/.test(s);
});
function ws(n, s, c) {
  if (!C.isObject(n)) throw new TypeError("target must be an object");
  ((s = s || new FormData()),
    (c = C.toFlatObject(
      c,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (H, T) {
        return !C.isUndefined(T[H]);
      },
    )));
  const u = c.metaTokens,
    d = c.visitor || v,
    h = c.dots,
    m = c.indexes,
    b = (c.Blob || (typeof Blob < "u" && Blob)) && C.isSpecCompliantForm(s);
  if (!C.isFunction(d)) throw new TypeError("visitor must be a function");
  function x(A) {
    if (A === null) return "";
    if (C.isDate(A)) return A.toISOString();
    if (C.isBoolean(A)) return A.toString();
    if (!b && C.isBlob(A))
      throw new le("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(A) || C.isTypedArray(A)
      ? b && typeof Blob == "function"
        ? new Blob([A])
        : Buffer.from(A)
      : A;
  }
  function v(A, H, T) {
    let Y = A;
    if (A && !T && typeof A == "object") {
      if (C.endsWith(H, "{}"))
        ((H = u ? H : H.slice(0, -2)), (A = JSON.stringify(A)));
      else if (
        (C.isArray(A) && o5(A)) ||
        ((C.isFileList(A) || C.endsWith(H, "[]")) && (Y = C.toArray(A)))
      )
        return (
          (H = mp(H)),
          Y.forEach(function (X, ae) {
            !(C.isUndefined(X) || X === null) &&
              s.append(
                m === !0 ? em([H], ae, h) : m === null ? H : H + "[]",
                x(X),
              );
          }),
          !1
        );
    }
    return fc(A) ? !0 : (s.append(em(T, H, h), x(A)), !1);
  }
  const y = [],
    R = Object.assign(u5, {
      defaultVisitor: v,
      convertValue: x,
      isVisitable: fc,
    });
  function G(A, H) {
    if (!C.isUndefined(A)) {
      if (y.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      (y.push(A),
        C.forEach(A, function (Y, V) {
          (!(C.isUndefined(Y) || Y === null) &&
            d.call(s, Y, C.isString(V) ? V.trim() : V, H, R)) === !0 &&
            G(Y, H ? H.concat(V) : [V]);
        }),
        y.pop());
    }
  }
  if (!C.isObject(n)) throw new TypeError("data must be an object");
  return (G(n), s);
}
function tm(n) {
  const s = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function (u) {
    return s[u];
  });
}
function Ec(n, s) {
  ((this._pairs = []), n && ws(n, this, s));
}
const pp = Ec.prototype;
pp.append = function (s, c) {
  this._pairs.push([s, c]);
};
pp.toString = function (s) {
  const c = s
    ? function (u) {
        return s.call(this, u, tm);
      }
    : tm;
  return this._pairs
    .map(function (d) {
      return c(d[0]) + "=" + c(d[1]);
    }, "")
    .join("&");
};
function c5(n) {
  return encodeURIComponent(n)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function xp(n, s, c) {
  if (!s) return n;
  const u = (c && c.encode) || c5,
    d = C.isFunction(c) ? { serialize: c } : c,
    h = d && d.serialize;
  let m;
  if (
    (h
      ? (m = h(s, d))
      : (m = C.isURLSearchParams(s) ? s.toString() : new Ec(s, d).toString(u)),
    m)
  ) {
    const g = n.indexOf("#");
    (g !== -1 && (n = n.slice(0, g)),
      (n += (n.indexOf("?") === -1 ? "?" : "&") + m));
  }
  return n;
}
class am {
  constructor() {
    this.handlers = [];
  }
  use(s, c, u) {
    return (
      this.handlers.push({
        fulfilled: s,
        rejected: c,
        synchronous: u ? u.synchronous : !1,
        runWhen: u ? u.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(s) {
    this.handlers[s] && (this.handlers[s] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(s) {
    C.forEach(this.handlers, function (u) {
      u !== null && s(u);
    });
  }
}
const _c = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
  },
  d5 = typeof URLSearchParams < "u" ? URLSearchParams : Ec,
  f5 = typeof FormData < "u" ? FormData : null,
  h5 = typeof Blob < "u" ? Blob : null,
  m5 = {
    isBrowser: !0,
    classes: { URLSearchParams: d5, FormData: f5, Blob: h5 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ac = typeof window < "u" && typeof document < "u",
  hc = (typeof navigator == "object" && navigator) || void 0,
  p5 =
    Ac &&
    (!hc || ["ReactNative", "NativeScript", "NS"].indexOf(hc.product) < 0),
  x5 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  g5 = (Ac && window.location.href) || "http://localhost",
  b5 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ac,
        hasStandardBrowserEnv: p5,
        hasStandardBrowserWebWorkerEnv: x5,
        navigator: hc,
        origin: g5,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  it = { ...b5, ...m5 };
function y5(n, s) {
  return ws(n, new it.classes.URLSearchParams(), {
    visitor: function (c, u, d, h) {
      return it.isNode && C.isBuffer(c)
        ? (this.append(u, c.toString("base64")), !1)
        : h.defaultVisitor.apply(this, arguments);
    },
    ...s,
  });
}
function v5(n) {
  return C.matchAll(/\w+|\[(\w*)]/g, n).map((s) =>
    s[0] === "[]" ? "" : s[1] || s[0],
  );
}
function w5(n) {
  const s = {},
    c = Object.keys(n);
  let u;
  const d = c.length;
  let h;
  for (u = 0; u < d; u++) ((h = c[u]), (s[h] = n[h]));
  return s;
}
function gp(n) {
  function s(c, u, d, h) {
    let m = c[h++];
    if (m === "__proto__") return !0;
    const g = Number.isFinite(+m),
      b = h >= c.length;
    return (
      (m = !m && C.isArray(d) ? d.length : m),
      b
        ? (C.hasOwnProp(d, m) ? (d[m] = [d[m], u]) : (d[m] = u), !g)
        : ((!d[m] || !C.isObject(d[m])) && (d[m] = []),
          s(c, u, d[m], h) && C.isArray(d[m]) && (d[m] = w5(d[m])),
          !g)
    );
  }
  if (C.isFormData(n) && C.isFunction(n.entries)) {
    const c = {};
    return (
      C.forEachEntry(n, (u, d) => {
        s(v5(u), d, c, 0);
      }),
      c
    );
  }
  return null;
}
function k5(n, s, c) {
  if (C.isString(n))
    try {
      return ((s || JSON.parse)(n), C.trim(n));
    } catch (u) {
      if (u.name !== "SyntaxError") throw u;
    }
  return (c || JSON.stringify)(n);
}
const Ei = {
  transitional: _c,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (s, c) {
      const u = c.getContentType() || "",
        d = u.indexOf("application/json") > -1,
        h = C.isObject(s);
      if ((h && C.isHTMLForm(s) && (s = new FormData(s)), C.isFormData(s)))
        return d ? JSON.stringify(gp(s)) : s;
      if (
        C.isArrayBuffer(s) ||
        C.isBuffer(s) ||
        C.isStream(s) ||
        C.isFile(s) ||
        C.isBlob(s) ||
        C.isReadableStream(s)
      )
        return s;
      if (C.isArrayBufferView(s)) return s.buffer;
      if (C.isURLSearchParams(s))
        return (
          c.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          s.toString()
        );
      let g;
      if (h) {
        if (u.indexOf("application/x-www-form-urlencoded") > -1)
          return y5(s, this.formSerializer).toString();
        if ((g = C.isFileList(s)) || u.indexOf("multipart/form-data") > -1) {
          const b = this.env && this.env.FormData;
          return ws(
            g ? { "files[]": s } : s,
            b && new b(),
            this.formSerializer,
          );
        }
      }
      return h || d ? (c.setContentType("application/json", !1), k5(s)) : s;
    },
  ],
  transformResponse: [
    function (s) {
      const c = this.transitional || Ei.transitional,
        u = c && c.forcedJSONParsing,
        d = this.responseType === "json";
      if (C.isResponse(s) || C.isReadableStream(s)) return s;
      if (s && C.isString(s) && ((u && !this.responseType) || d)) {
        const m = !(c && c.silentJSONParsing) && d;
        try {
          return JSON.parse(s, this.parseReviver);
        } catch (g) {
          if (m)
            throw g.name === "SyntaxError"
              ? le.from(g, le.ERR_BAD_RESPONSE, this, null, this.response)
              : g;
        }
      }
      return s;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: it.classes.FormData, Blob: it.classes.Blob },
  validateStatus: function (s) {
    return s >= 200 && s < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Ei.headers[n] = {};
});
const S5 = C.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  j5 = (n) => {
    const s = {};
    let c, u, d;
    return (
      n &&
        n
          .split(
            `
`,
          )
          .forEach(function (m) {
            ((d = m.indexOf(":")),
              (c = m.substring(0, d).trim().toLowerCase()),
              (u = m.substring(d + 1).trim()),
              !(!c || (s[c] && S5[c])) &&
                (c === "set-cookie"
                  ? s[c]
                    ? s[c].push(u)
                    : (s[c] = [u])
                  : (s[c] = s[c] ? s[c] + ", " + u : u)));
          }),
      s
    );
  },
  lm = Symbol("internals");
function pi(n) {
  return n && String(n).trim().toLowerCase();
}
function ss(n) {
  return n === !1 || n == null ? n : C.isArray(n) ? n.map(ss) : String(n);
}
function N5(n) {
  const s = Object.create(null),
    c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; (u = c.exec(n)); ) s[u[1]] = u[2];
  return s;
}
const z5 = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Wu(n, s, c, u, d) {
  if (C.isFunction(u)) return u.call(this, s, c);
  if ((d && (s = c), !!C.isString(s))) {
    if (C.isString(u)) return s.indexOf(u) !== -1;
    if (C.isRegExp(u)) return u.test(s);
  }
}
function E5(n) {
  return n
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (s, c, u) => c.toUpperCase() + u);
}
function _5(n, s) {
  const c = C.toCamelCase(" " + s);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(n, u + c, {
      value: function (d, h, m) {
        return this[u].call(this, s, d, h, m);
      },
      configurable: !0,
    });
  });
}
let gt = class {
  constructor(s) {
    s && this.set(s);
  }
  set(s, c, u) {
    const d = this;
    function h(g, b, x) {
      const v = pi(b);
      if (!v) throw new Error("header name must be a non-empty string");
      const y = C.findKey(d, v);
      (!y || d[y] === void 0 || x === !0 || (x === void 0 && d[y] !== !1)) &&
        (d[y || b] = ss(g));
    }
    const m = (g, b) => C.forEach(g, (x, v) => h(x, v, b));
    if (C.isPlainObject(s) || s instanceof this.constructor) m(s, c);
    else if (C.isString(s) && (s = s.trim()) && !z5(s)) m(j5(s), c);
    else if (C.isObject(s) && C.isIterable(s)) {
      let g = {},
        b,
        x;
      for (const v of s) {
        if (!C.isArray(v))
          throw TypeError("Object iterator must return a key-value pair");
        g[(x = v[0])] = (b = g[x])
          ? C.isArray(b)
            ? [...b, v[1]]
            : [b, v[1]]
          : v[1];
      }
      m(g, c);
    } else s != null && h(c, s, u);
    return this;
  }
  get(s, c) {
    if (((s = pi(s)), s)) {
      const u = C.findKey(this, s);
      if (u) {
        const d = this[u];
        if (!c) return d;
        if (c === !0) return N5(d);
        if (C.isFunction(c)) return c.call(this, d, u);
        if (C.isRegExp(c)) return c.exec(d);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(s, c) {
    if (((s = pi(s)), s)) {
      const u = C.findKey(this, s);
      return !!(u && this[u] !== void 0 && (!c || Wu(this, this[u], u, c)));
    }
    return !1;
  }
  delete(s, c) {
    const u = this;
    let d = !1;
    function h(m) {
      if (((m = pi(m)), m)) {
        const g = C.findKey(u, m);
        g && (!c || Wu(u, u[g], g, c)) && (delete u[g], (d = !0));
      }
    }
    return (C.isArray(s) ? s.forEach(h) : h(s), d);
  }
  clear(s) {
    const c = Object.keys(this);
    let u = c.length,
      d = !1;
    for (; u--; ) {
      const h = c[u];
      (!s || Wu(this, this[h], h, s, !0)) && (delete this[h], (d = !0));
    }
    return d;
  }
  normalize(s) {
    const c = this,
      u = {};
    return (
      C.forEach(this, (d, h) => {
        const m = C.findKey(u, h);
        if (m) {
          ((c[m] = ss(d)), delete c[h]);
          return;
        }
        const g = s ? E5(h) : String(h).trim();
        (g !== h && delete c[h], (c[g] = ss(d)), (u[g] = !0));
      }),
      this
    );
  }
  concat(...s) {
    return this.constructor.concat(this, ...s);
  }
  toJSON(s) {
    const c = Object.create(null);
    return (
      C.forEach(this, (u, d) => {
        u != null && u !== !1 && (c[d] = s && C.isArray(u) ? u.join(", ") : u);
      }),
      c
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([s, c]) => s + ": " + c).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(s) {
    return s instanceof this ? s : new this(s);
  }
  static concat(s, ...c) {
    const u = new this(s);
    return (c.forEach((d) => u.set(d)), u);
  }
  static accessor(s) {
    const u = (this[lm] = this[lm] = { accessors: {} }).accessors,
      d = this.prototype;
    function h(m) {
      const g = pi(m);
      u[g] || (_5(d, m), (u[g] = !0));
    }
    return (C.isArray(s) ? s.forEach(h) : h(s), this);
  }
};
gt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
C.reduceDescriptors(gt.prototype, ({ value: n }, s) => {
  let c = s[0].toUpperCase() + s.slice(1);
  return {
    get: () => n,
    set(u) {
      this[c] = u;
    },
  };
});
C.freezeMethods(gt);
function Pu(n, s) {
  const c = this || Ei,
    u = s || c,
    d = gt.from(u.headers);
  let h = u.data;
  return (
    C.forEach(n, function (g) {
      h = g.call(c, h, d.normalize(), s ? s.status : void 0);
    }),
    d.normalize(),
    h
  );
}
function bp(n) {
  return !!(n && n.__CANCEL__);
}
let _i = class extends le {
  constructor(s, c, u) {
    (super(s ?? "canceled", le.ERR_CANCELED, c, u),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function yp(n, s, c) {
  const u = c.config.validateStatus;
  !c.status || !u || u(c.status)
    ? n(c)
    : s(
        new le(
          "Request failed with status code " + c.status,
          [le.ERR_BAD_REQUEST, le.ERR_BAD_RESPONSE][
            Math.floor(c.status / 100) - 4
          ],
          c.config,
          c.request,
          c,
        ),
      );
}
function A5(n) {
  const s = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return (s && s[1]) || "";
}
function T5(n, s) {
  n = n || 10;
  const c = new Array(n),
    u = new Array(n);
  let d = 0,
    h = 0,
    m;
  return (
    (s = s !== void 0 ? s : 1e3),
    function (b) {
      const x = Date.now(),
        v = u[h];
      (m || (m = x), (c[d] = b), (u[d] = x));
      let y = h,
        R = 0;
      for (; y !== d; ) ((R += c[y++]), (y = y % n));
      if (((d = (d + 1) % n), d === h && (h = (h + 1) % n), x - m < s)) return;
      const G = v && x - v;
      return G ? Math.round((R * 1e3) / G) : void 0;
    }
  );
}
function R5(n, s) {
  let c = 0,
    u = 1e3 / s,
    d,
    h;
  const m = (x, v = Date.now()) => {
    ((c = v), (d = null), h && (clearTimeout(h), (h = null)), n(...x));
  };
  return [
    (...x) => {
      const v = Date.now(),
        y = v - c;
      y >= u
        ? m(x, v)
        : ((d = x),
          h ||
            (h = setTimeout(() => {
              ((h = null), m(d));
            }, u - y)));
    },
    () => d && m(d),
  ];
}
const hs = (n, s, c = 3) => {
    let u = 0;
    const d = T5(50, 250);
    return R5((h) => {
      const m = h.loaded,
        g = h.lengthComputable ? h.total : void 0,
        b = m - u,
        x = d(b),
        v = m <= g;
      u = m;
      const y = {
        loaded: m,
        total: g,
        progress: g ? m / g : void 0,
        bytes: b,
        rate: x || void 0,
        estimated: x && g && v ? (g - m) / x : void 0,
        event: h,
        lengthComputable: g != null,
        [s ? "download" : "upload"]: !0,
      };
      n(y);
    }, c);
  },
  nm = (n, s) => {
    const c = n != null;
    return [(u) => s[0]({ lengthComputable: c, total: n, loaded: u }), s[1]];
  },
  im =
    (n) =>
    (...s) =>
      C.asap(() => n(...s)),
  C5 = it.hasStandardBrowserEnv
    ? ((n, s) => (c) => (
        (c = new URL(c, it.origin)),
        n.protocol === c.protocol &&
          n.host === c.host &&
          (s || n.port === c.port)
      ))(
        new URL(it.origin),
        it.navigator && /(msie|trident)/i.test(it.navigator.userAgent),
      )
    : () => !0,
  O5 = it.hasStandardBrowserEnv
    ? {
        write(n, s, c, u, d, h, m) {
          if (typeof document > "u") return;
          const g = [`${n}=${encodeURIComponent(s)}`];
          (C.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`),
            C.isString(u) && g.push(`path=${u}`),
            C.isString(d) && g.push(`domain=${d}`),
            h === !0 && g.push("secure"),
            C.isString(m) && g.push(`SameSite=${m}`),
            (document.cookie = g.join("; ")));
        },
        read(n) {
          if (typeof document > "u") return null;
          const s = document.cookie.match(
            new RegExp("(?:^|; )" + n + "=([^;]*)"),
          );
          return s ? decodeURIComponent(s[1]) : null;
        },
        remove(n) {
          this.write(n, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function M5(n) {
  return typeof n != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function D5(n, s) {
  return s ? n.replace(/\/?\/$/, "") + "/" + s.replace(/^\/+/, "") : n;
}
function vp(n, s, c) {
  let u = !M5(s);
  return n && (u || c == !1) ? D5(n, s) : s;
}
const rm = (n) => (n instanceof gt ? { ...n } : n);
function wl(n, s) {
  s = s || {};
  const c = {};
  function u(x, v, y, R) {
    return C.isPlainObject(x) && C.isPlainObject(v)
      ? C.merge.call({ caseless: R }, x, v)
      : C.isPlainObject(v)
        ? C.merge({}, v)
        : C.isArray(v)
          ? v.slice()
          : v;
  }
  function d(x, v, y, R) {
    if (C.isUndefined(v)) {
      if (!C.isUndefined(x)) return u(void 0, x, y, R);
    } else return u(x, v, y, R);
  }
  function h(x, v) {
    if (!C.isUndefined(v)) return u(void 0, v);
  }
  function m(x, v) {
    if (C.isUndefined(v)) {
      if (!C.isUndefined(x)) return u(void 0, x);
    } else return u(void 0, v);
  }
  function g(x, v, y) {
    if (y in s) return u(x, v);
    if (y in n) return u(void 0, x);
  }
  const b = {
    url: h,
    method: h,
    data: h,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    withXSRFToken: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: g,
    headers: (x, v, y) => d(rm(x), rm(v), y, !0),
  };
  return (
    C.forEach(Object.keys({ ...n, ...s }), function (v) {
      if (v === "__proto__" || v === "constructor" || v === "prototype") return;
      const y = C.hasOwnProp(b, v) ? b[v] : d,
        R = y(n[v], s[v], v);
      (C.isUndefined(R) && y !== g) || (c[v] = R);
    }),
    c
  );
}
const wp = (n) => {
    const s = wl({}, n);
    let {
      data: c,
      withXSRFToken: u,
      xsrfHeaderName: d,
      xsrfCookieName: h,
      headers: m,
      auth: g,
    } = s;
    if (
      ((s.headers = m = gt.from(m)),
      (s.url = xp(
        vp(s.baseURL, s.url, s.allowAbsoluteUrls),
        n.params,
        n.paramsSerializer,
      )),
      g &&
        m.set(
          "Authorization",
          "Basic " +
            btoa(
              (g.username || "") +
                ":" +
                (g.password ? unescape(encodeURIComponent(g.password)) : ""),
            ),
        ),
      C.isFormData(c))
    ) {
      if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
        m.setContentType(void 0);
      else if (C.isFunction(c.getHeaders)) {
        const b = c.getHeaders(),
          x = ["content-type", "content-length"];
        Object.entries(b).forEach(([v, y]) => {
          x.includes(v.toLowerCase()) && m.set(v, y);
        });
      }
    }
    if (
      it.hasStandardBrowserEnv &&
      (u && C.isFunction(u) && (u = u(s)), u || (u !== !1 && C5(s.url)))
    ) {
      const b = d && h && O5.read(h);
      b && m.set(d, b);
    }
    return s;
  },
  U5 = typeof XMLHttpRequest < "u",
  H5 =
    U5 &&
    function (n) {
      return new Promise(function (c, u) {
        const d = wp(n);
        let h = d.data;
        const m = gt.from(d.headers).normalize();
        let { responseType: g, onUploadProgress: b, onDownloadProgress: x } = d,
          v,
          y,
          R,
          G,
          A;
        function H() {
          (G && G(),
            A && A(),
            d.cancelToken && d.cancelToken.unsubscribe(v),
            d.signal && d.signal.removeEventListener("abort", v));
        }
        let T = new XMLHttpRequest();
        (T.open(d.method.toUpperCase(), d.url, !0), (T.timeout = d.timeout));
        function Y() {
          if (!T) return;
          const X = gt.from(
              "getAllResponseHeaders" in T && T.getAllResponseHeaders(),
            ),
            $ = {
              data:
                !g || g === "text" || g === "json"
                  ? T.responseText
                  : T.response,
              status: T.status,
              statusText: T.statusText,
              headers: X,
              config: n,
              request: T,
            };
          (yp(
            function (D) {
              (c(D), H());
            },
            function (D) {
              (u(D), H());
            },
            $,
          ),
            (T = null));
        }
        ("onloadend" in T
          ? (T.onloadend = Y)
          : (T.onreadystatechange = function () {
              !T ||
                T.readyState !== 4 ||
                (T.status === 0 &&
                  !(T.responseURL && T.responseURL.indexOf("file:") === 0)) ||
                setTimeout(Y);
            }),
          (T.onabort = function () {
            T &&
              (u(new le("Request aborted", le.ECONNABORTED, n, T)), (T = null));
          }),
          (T.onerror = function (ae) {
            const $ = ae && ae.message ? ae.message : "Network Error",
              ue = new le($, le.ERR_NETWORK, n, T);
            ((ue.event = ae || null), u(ue), (T = null));
          }),
          (T.ontimeout = function () {
            let ae = d.timeout
              ? "timeout of " + d.timeout + "ms exceeded"
              : "timeout exceeded";
            const $ = d.transitional || _c;
            (d.timeoutErrorMessage && (ae = d.timeoutErrorMessage),
              u(
                new le(
                  ae,
                  $.clarifyTimeoutError ? le.ETIMEDOUT : le.ECONNABORTED,
                  n,
                  T,
                ),
              ),
              (T = null));
          }),
          h === void 0 && m.setContentType(null),
          "setRequestHeader" in T &&
            C.forEach(m.toJSON(), function (ae, $) {
              T.setRequestHeader($, ae);
            }),
          C.isUndefined(d.withCredentials) ||
            (T.withCredentials = !!d.withCredentials),
          g && g !== "json" && (T.responseType = d.responseType),
          x && (([R, A] = hs(x, !0)), T.addEventListener("progress", R)),
          b &&
            T.upload &&
            (([y, G] = hs(b)),
            T.upload.addEventListener("progress", y),
            T.upload.addEventListener("loadend", G)),
          (d.cancelToken || d.signal) &&
            ((v = (X) => {
              T &&
                (u(!X || X.type ? new _i(null, n, T) : X),
                T.abort(),
                (T = null));
            }),
            d.cancelToken && d.cancelToken.subscribe(v),
            d.signal &&
              (d.signal.aborted
                ? v()
                : d.signal.addEventListener("abort", v))));
        const V = A5(d.url);
        if (V && it.protocols.indexOf(V) === -1) {
          u(new le("Unsupported protocol " + V + ":", le.ERR_BAD_REQUEST, n));
          return;
        }
        T.send(h || null);
      });
    },
  L5 = (n, s) => {
    const { length: c } = (n = n ? n.filter(Boolean) : []);
    if (s || c) {
      let u = new AbortController(),
        d;
      const h = function (x) {
        if (!d) {
          ((d = !0), g());
          const v = x instanceof Error ? x : this.reason;
          u.abort(
            v instanceof le ? v : new _i(v instanceof Error ? v.message : v),
          );
        }
      };
      let m =
        s &&
        setTimeout(() => {
          ((m = null), h(new le(`timeout of ${s}ms exceeded`, le.ETIMEDOUT)));
        }, s);
      const g = () => {
        n &&
          (m && clearTimeout(m),
          (m = null),
          n.forEach((x) => {
            x.unsubscribe
              ? x.unsubscribe(h)
              : x.removeEventListener("abort", h);
          }),
          (n = null));
      };
      n.forEach((x) => x.addEventListener("abort", h));
      const { signal: b } = u;
      return ((b.unsubscribe = () => C.asap(g)), b);
    }
  },
  B5 = function* (n, s) {
    let c = n.byteLength;
    if (c < s) {
      yield n;
      return;
    }
    let u = 0,
      d;
    for (; u < c; ) ((d = u + s), yield n.slice(u, d), (u = d));
  },
  q5 = async function* (n, s) {
    for await (const c of G5(n)) yield* B5(c, s);
  },
  G5 = async function* (n) {
    if (n[Symbol.asyncIterator]) {
      yield* n;
      return;
    }
    const s = n.getReader();
    try {
      for (;;) {
        const { done: c, value: u } = await s.read();
        if (c) break;
        yield u;
      }
    } finally {
      await s.cancel();
    }
  },
  sm = (n, s, c, u) => {
    const d = q5(n, s);
    let h = 0,
      m,
      g = (b) => {
        m || ((m = !0), u && u(b));
      };
    return new ReadableStream(
      {
        async pull(b) {
          try {
            const { done: x, value: v } = await d.next();
            if (x) {
              (g(), b.close());
              return;
            }
            let y = v.byteLength;
            if (c) {
              let R = (h += y);
              c(R);
            }
            b.enqueue(new Uint8Array(v));
          } catch (x) {
            throw (g(x), x);
          }
        },
        cancel(b) {
          return (g(b), d.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  om = 64 * 1024,
  { isFunction: Fr } = C,
  Y5 = (({ Request: n, Response: s }) => ({ Request: n, Response: s }))(
    C.global,
  ),
  { ReadableStream: um, TextEncoder: cm } = C.global,
  dm = (n, ...s) => {
    try {
      return !!n(...s);
    } catch {
      return !1;
    }
  },
  V5 = (n) => {
    n = C.merge.call({ skipUndefined: !0 }, Y5, n);
    const { fetch: s, Request: c, Response: u } = n,
      d = s ? Fr(s) : typeof fetch == "function",
      h = Fr(c),
      m = Fr(u);
    if (!d) return !1;
    const g = d && Fr(um),
      b =
        d &&
        (typeof cm == "function"
          ? (
              (A) => (H) =>
                A.encode(H)
            )(new cm())
          : async (A) => new Uint8Array(await new c(A).arrayBuffer())),
      x =
        h &&
        g &&
        dm(() => {
          let A = !1;
          const H = new c(it.origin, {
            body: new um(),
            method: "POST",
            get duplex() {
              return ((A = !0), "half");
            },
          }).headers.has("Content-Type");
          return A && !H;
        }),
      v = m && g && dm(() => C.isReadableStream(new u("").body)),
      y = { stream: v && ((A) => A.body) };
    d &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
        !y[A] &&
          (y[A] = (H, T) => {
            let Y = H && H[A];
            if (Y) return Y.call(H);
            throw new le(
              `Response type '${A}' is not supported`,
              le.ERR_NOT_SUPPORT,
              T,
            );
          });
      });
    const R = async (A) => {
        if (A == null) return 0;
        if (C.isBlob(A)) return A.size;
        if (C.isSpecCompliantForm(A))
          return (
            await new c(it.origin, { method: "POST", body: A }).arrayBuffer()
          ).byteLength;
        if (C.isArrayBufferView(A) || C.isArrayBuffer(A)) return A.byteLength;
        if ((C.isURLSearchParams(A) && (A = A + ""), C.isString(A)))
          return (await b(A)).byteLength;
      },
      G = async (A, H) => {
        const T = C.toFiniteNumber(A.getContentLength());
        return T ?? R(H);
      };
    return async (A) => {
      let {
          url: H,
          method: T,
          data: Y,
          signal: V,
          cancelToken: X,
          timeout: ae,
          onDownloadProgress: $,
          onUploadProgress: ue,
          responseType: D,
          headers: P,
          withCredentials: ie = "same-origin",
          fetchOptions: Ke,
        } = wp(A),
        Je = s || fetch;
      D = D ? (D + "").toLowerCase() : "text";
      let Oe = L5([V, X && X.toAbortSignal()], ae),
        at = null;
      const Xe =
        Oe &&
        Oe.unsubscribe &&
        (() => {
          Oe.unsubscribe();
        });
      let ot;
      try {
        if (
          ue &&
          x &&
          T !== "get" &&
          T !== "head" &&
          (ot = await G(P, Y)) !== 0
        ) {
          let k = new c(H, { method: "POST", body: Y, duplex: "half" }),
            B;
          if (
            (C.isFormData(Y) &&
              (B = k.headers.get("content-type")) &&
              P.setContentType(B),
            k.body)
          ) {
            const [Z, K] = nm(ot, hs(im(ue)));
            Y = sm(k.body, om, Z, K);
          }
        }
        C.isString(ie) || (ie = ie ? "include" : "omit");
        const M = h && "credentials" in c.prototype,
          Q = {
            ...Ke,
            signal: Oe,
            method: T.toUpperCase(),
            headers: P.normalize().toJSON(),
            body: Y,
            duplex: "half",
            credentials: M ? ie : void 0,
          };
        at = h && new c(H, Q);
        let I = await (h ? Je(at, Ke) : Je(H, Q));
        const ye = v && (D === "stream" || D === "response");
        if (v && ($ || (ye && Xe))) {
          const k = {};
          ["status", "statusText", "headers"].forEach((ne) => {
            k[ne] = I[ne];
          });
          const B = C.toFiniteNumber(I.headers.get("content-length")),
            [Z, K] = ($ && nm(B, hs(im($), !0))) || [];
          I = new u(
            sm(I.body, om, Z, () => {
              (K && K(), Xe && Xe());
            }),
            k,
          );
        }
        D = D || "text";
        let ke = await y[C.findKey(y, D) || "text"](I, A);
        return (
          !ye && Xe && Xe(),
          await new Promise((k, B) => {
            yp(k, B, {
              data: ke,
              headers: gt.from(I.headers),
              status: I.status,
              statusText: I.statusText,
              config: A,
              request: at,
            });
          })
        );
      } catch (M) {
        throw (
          Xe && Xe(),
          M && M.name === "TypeError" && /Load failed|fetch/i.test(M.message)
            ? Object.assign(
                new le("Network Error", le.ERR_NETWORK, A, at, M && M.response),
                { cause: M.cause || M },
              )
            : le.from(M, M && M.code, A, at, M && M.response)
        );
      }
    };
  },
  X5 = new Map(),
  kp = (n) => {
    let s = (n && n.env) || {};
    const { fetch: c, Request: u, Response: d } = s,
      h = [u, d, c];
    let m = h.length,
      g = m,
      b,
      x,
      v = X5;
    for (; g--; )
      ((b = h[g]),
        (x = v.get(b)),
        x === void 0 && v.set(b, (x = g ? new Map() : V5(s))),
        (v = x));
    return x;
  };
kp();
const Tc = { http: s5, xhr: H5, fetch: { get: kp } };
C.forEach(Tc, (n, s) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: s });
    } catch {}
    Object.defineProperty(n, "adapterName", { value: s });
  }
});
const fm = (n) => `- ${n}`,
  Q5 = (n) => C.isFunction(n) || n === null || n === !1;
function Z5(n, s) {
  n = C.isArray(n) ? n : [n];
  const { length: c } = n;
  let u, d;
  const h = {};
  for (let m = 0; m < c; m++) {
    u = n[m];
    let g;
    if (
      ((d = u),
      !Q5(u) && ((d = Tc[(g = String(u)).toLowerCase()]), d === void 0))
    )
      throw new le(`Unknown adapter '${g}'`);
    if (d && (C.isFunction(d) || (d = d.get(s)))) break;
    h[g || "#" + m] = d;
  }
  if (!d) {
    const m = Object.entries(h).map(
      ([b, x]) =>
        `adapter ${b} ` +
        (x === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let g = c
      ? m.length > 1
        ? `since :
` +
          m.map(fm).join(`
`)
        : " " + fm(m[0])
      : "as no adapter specified";
    throw new le(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT",
    );
  }
  return d;
}
const Sp = { getAdapter: Z5, adapters: Tc };
function Iu(n) {
  if (
    (n.cancelToken && n.cancelToken.throwIfRequested(),
    n.signal && n.signal.aborted)
  )
    throw new _i(null, n);
}
function hm(n) {
  return (
    Iu(n),
    (n.headers = gt.from(n.headers)),
    (n.data = Pu.call(n, n.transformRequest)),
    ["post", "put", "patch"].indexOf(n.method) !== -1 &&
      n.headers.setContentType("application/x-www-form-urlencoded", !1),
    Sp.getAdapter(
      n.adapter || Ei.adapter,
      n,
    )(n).then(
      function (u) {
        return (
          Iu(n),
          (u.data = Pu.call(n, n.transformResponse, u)),
          (u.headers = gt.from(u.headers)),
          u
        );
      },
      function (u) {
        return (
          bp(u) ||
            (Iu(n),
            u &&
              u.response &&
              ((u.response.data = Pu.call(n, n.transformResponse, u.response)),
              (u.response.headers = gt.from(u.response.headers)))),
          Promise.reject(u)
        );
      },
    )
  );
}
const jp = "1.13.5",
  ks = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (n, s) => {
    ks[n] = function (u) {
      return typeof u === n || "a" + (s < 1 ? "n " : " ") + n;
    };
  },
);
const mm = {};
ks.transitional = function (s, c, u) {
  function d(h, m) {
    return (
      "[Axios v" +
      jp +
      "] Transitional option '" +
      h +
      "'" +
      m +
      (u ? ". " + u : "")
    );
  }
  return (h, m, g) => {
    if (s === !1)
      throw new le(
        d(m, " has been removed" + (c ? " in " + c : "")),
        le.ERR_DEPRECATED,
      );
    return (
      c &&
        !mm[m] &&
        ((mm[m] = !0),
        console.warn(
          d(
            m,
            " has been deprecated since v" +
              c +
              " and will be removed in the near future",
          ),
        )),
      s ? s(h, m, g) : !0
    );
  };
};
ks.spelling = function (s) {
  return (c, u) => (console.warn(`${u} is likely a misspelling of ${s}`), !0);
};
function $5(n, s, c) {
  if (typeof n != "object")
    throw new le("options must be an object", le.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(n);
  let d = u.length;
  for (; d-- > 0; ) {
    const h = u[d],
      m = s[h];
    if (m) {
      const g = n[h],
        b = g === void 0 || m(g, h, n);
      if (b !== !0)
        throw new le("option " + h + " must be " + b, le.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0) throw new le("Unknown option " + h, le.ERR_BAD_OPTION);
  }
}
const os = { assertOptions: $5, validators: ks },
  Bt = os.validators;
let yl = class {
  constructor(s) {
    ((this.defaults = s || {}),
      (this.interceptors = { request: new am(), response: new am() }));
  }
  async request(s, c) {
    try {
      return await this._request(s, c);
    } catch (u) {
      if (u instanceof Error) {
        let d = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(d)
          : (d = new Error());
        const h = d.stack ? d.stack.replace(/^.+\n/, "") : "";
        try {
          u.stack
            ? h &&
              !String(u.stack).endsWith(h.replace(/^.+\n.+\n/, "")) &&
              (u.stack +=
                `
` + h)
            : (u.stack = h);
        } catch {}
      }
      throw u;
    }
  }
  _request(s, c) {
    (typeof s == "string" ? ((c = c || {}), (c.url = s)) : (c = s || {}),
      (c = wl(this.defaults, c)));
    const { transitional: u, paramsSerializer: d, headers: h } = c;
    (u !== void 0 &&
      os.assertOptions(
        u,
        {
          silentJSONParsing: Bt.transitional(Bt.boolean),
          forcedJSONParsing: Bt.transitional(Bt.boolean),
          clarifyTimeoutError: Bt.transitional(Bt.boolean),
          legacyInterceptorReqResOrdering: Bt.transitional(Bt.boolean),
        },
        !1,
      ),
      d != null &&
        (C.isFunction(d)
          ? (c.paramsSerializer = { serialize: d })
          : os.assertOptions(
              d,
              { encode: Bt.function, serialize: Bt.function },
              !0,
            )),
      c.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (c.allowAbsoluteUrls = !0)),
      os.assertOptions(
        c,
        {
          baseUrl: Bt.spelling("baseURL"),
          withXsrfToken: Bt.spelling("withXSRFToken"),
        },
        !0,
      ),
      (c.method = (c.method || this.defaults.method || "get").toLowerCase()));
    let m = h && C.merge(h.common, h[c.method]);
    (h &&
      C.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (A) => {
          delete h[A];
        },
      ),
      (c.headers = gt.concat(m, h)));
    const g = [];
    let b = !0;
    this.interceptors.request.forEach(function (H) {
      if (typeof H.runWhen == "function" && H.runWhen(c) === !1) return;
      b = b && H.synchronous;
      const T = c.transitional || _c;
      T && T.legacyInterceptorReqResOrdering
        ? g.unshift(H.fulfilled, H.rejected)
        : g.push(H.fulfilled, H.rejected);
    });
    const x = [];
    this.interceptors.response.forEach(function (H) {
      x.push(H.fulfilled, H.rejected);
    });
    let v,
      y = 0,
      R;
    if (!b) {
      const A = [hm.bind(this), void 0];
      for (
        A.unshift(...g), A.push(...x), R = A.length, v = Promise.resolve(c);
        y < R;
      )
        v = v.then(A[y++], A[y++]);
      return v;
    }
    R = g.length;
    let G = c;
    for (; y < R; ) {
      const A = g[y++],
        H = g[y++];
      try {
        G = A(G);
      } catch (T) {
        H.call(this, T);
        break;
      }
    }
    try {
      v = hm.call(this, G);
    } catch (A) {
      return Promise.reject(A);
    }
    for (y = 0, R = x.length; y < R; ) v = v.then(x[y++], x[y++]);
    return v;
  }
  getUri(s) {
    s = wl(this.defaults, s);
    const c = vp(s.baseURL, s.url, s.allowAbsoluteUrls);
    return xp(c, s.params, s.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function (s) {
  yl.prototype[s] = function (c, u) {
    return this.request(
      wl(u || {}, { method: s, url: c, data: (u || {}).data }),
    );
  };
});
C.forEach(["post", "put", "patch"], function (s) {
  function c(u) {
    return function (h, m, g) {
      return this.request(
        wl(g || {}, {
          method: s,
          headers: u ? { "Content-Type": "multipart/form-data" } : {},
          url: h,
          data: m,
        }),
      );
    };
  }
  ((yl.prototype[s] = c()), (yl.prototype[s + "Form"] = c(!0)));
});
let K5 = class Np {
  constructor(s) {
    if (typeof s != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function (h) {
      c = h;
    });
    const u = this;
    (this.promise.then((d) => {
      if (!u._listeners) return;
      let h = u._listeners.length;
      for (; h-- > 0; ) u._listeners[h](d);
      u._listeners = null;
    }),
      (this.promise.then = (d) => {
        let h;
        const m = new Promise((g) => {
          (u.subscribe(g), (h = g));
        }).then(d);
        return (
          (m.cancel = function () {
            u.unsubscribe(h);
          }),
          m
        );
      }),
      s(function (h, m, g) {
        u.reason || ((u.reason = new _i(h, m, g)), c(u.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(s) {
    if (this.reason) {
      s(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(s) : (this._listeners = [s]);
  }
  unsubscribe(s) {
    if (!this._listeners) return;
    const c = this._listeners.indexOf(s);
    c !== -1 && this._listeners.splice(c, 1);
  }
  toAbortSignal() {
    const s = new AbortController(),
      c = (u) => {
        s.abort(u);
      };
    return (
      this.subscribe(c),
      (s.signal.unsubscribe = () => this.unsubscribe(c)),
      s.signal
    );
  }
  static source() {
    let s;
    return {
      token: new Np(function (d) {
        s = d;
      }),
      cancel: s,
    };
  }
};
function J5(n) {
  return function (c) {
    return n.apply(null, c);
  };
}
function F5(n) {
  return C.isObject(n) && n.isAxiosError === !0;
}
const mc = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(mc).forEach(([n, s]) => {
  mc[s] = n;
});
function zp(n) {
  const s = new yl(n),
    c = ip(yl.prototype.request, s);
  return (
    C.extend(c, yl.prototype, s, { allOwnKeys: !0 }),
    C.extend(c, s, null, { allOwnKeys: !0 }),
    (c.create = function (d) {
      return zp(wl(n, d));
    }),
    c
  );
}
const Ue = zp(Ei);
Ue.Axios = yl;
Ue.CanceledError = _i;
Ue.CancelToken = K5;
Ue.isCancel = bp;
Ue.VERSION = jp;
Ue.toFormData = ws;
Ue.AxiosError = le;
Ue.Cancel = Ue.CanceledError;
Ue.all = function (s) {
  return Promise.all(s);
};
Ue.spread = J5;
Ue.isAxiosError = F5;
Ue.mergeConfig = wl;
Ue.AxiosHeaders = gt;
Ue.formToJSON = (n) => gp(C.isHTMLForm(n) ? new FormData(n) : n);
Ue.getAdapter = Sp.getAdapter;
Ue.HttpStatusCode = mc;
Ue.default = Ue;
const {
    Axios: v4,
    AxiosError: w4,
    CanceledError: k4,
    isCancel: S4,
    CancelToken: j4,
    VERSION: N4,
    all: z4,
    Cancel: E4,
    isAxiosError: _4,
    spread: A4,
    toFormData: T4,
    AxiosHeaders: R4,
    HttpStatusCode: C4,
    formToJSON: O4,
    getAdapter: M4,
    mergeConfig: D4,
  } = Ue,
  Zt = Ue.create({
    baseURL: "https://securegen-encrypted-vault.onrender.com//api",
    withCredentials: !0,
  }),
  Ep = j.createContext(),
  kl = () => j.useContext(Ep),
  W5 = ({ children: n }) => {
    const [s, c] = j.useState(null),
      [u, d] = j.useState(!0);
    j.useEffect(() => {
      (async () => {
        try {
          const { data: x } = await Zt.get("/auth/me");
          x.success && c(x.data);
        } catch {
          c(null);
        } finally {
          d(!1);
        }
      })();
    }, []);
    const h = async (b) => {
        try {
          const { data: x } = await Zt.post("/auth/login", b);
          if (x.success) return (c(x.data), nt.success(x.message), !0);
        } catch (x) {
          return (nt.error(x.response?.data?.message || "Login failed"), !1);
        }
      },
      m = async (b) => {
        try {
          const { data: x } = await Zt.post("/auth/register", b);
          if (x.success)
            return (nt.success("Account created! Please login."), !0);
        } catch (x) {
          return (
            nt.error(x.response?.data?.message || "Registration failed"),
            !1
          );
        }
      },
      g = async () => {
        try {
          (await Zt.post("/auth/logout"),
            c(null),
            nt.success("Logged out successfully"));
        } catch {
          (c(null), nt.error("Logout failed"));
        }
      };
    return o.jsx(Ep.Provider, {
      value: { user: s, loading: u, login: h, register: m, logout: g },
      children: n,
    });
  },
  Qt =
    "active:scale-[0.96] transition-transform duration-100 ease-in-out cursor-pointer select-none";
function P5({ isDark: n, setIsDark: s }) {
  const { user: c, logout: u } = kl(),
    [d, h] = j.useState(!1),
    [m, g] = j.useState(!1),
    b = () => h(!1),
    x = ({ isActive: y }) =>
      `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${Qt} ${y ? "bg-indigo-100 text-indigo-600 dark:bg-teal-500/10 dark:text-teal-400" : "text-stone-500 hover:bg-stone-100 dark:text-zinc-400 dark:hover:bg-zinc-800"}`,
    v = ({ isActive: y }) =>
      `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${Qt} ${y ? "bg-indigo-50 text-indigo-600 dark:bg-teal-500/10 dark:text-teal-400" : "text-stone-600 hover:bg-stone-100 dark:text-zinc-300 dark:hover:bg-zinc-800"}`;
  return o.jsx("nav", {
    className:
      "fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none",
    children: o.jsxs("div", {
      className:
        "relative pointer-events-auto w-full max-w-5xl backdrop-blur-xl border shadow-xl rounded-[2rem] md:rounded-full px-4 md:px-5 py-3 flex items-center justify-between transition-all duration-500 bg-white/80 border-stone-200/50 shadow-indigo-900/5 dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-black/50",
      children: [
        o.jsxs(qt, {
          to: "/",
          onClick: b,
          className: `flex items-center gap-3 mr-4 ${Qt}`,
          children: [
            m
              ? o.jsx("div", {
                  className:
                    "p-2 rounded-full transition-colors duration-500 bg-gradient-to-br from-indigo-500 to-purple-600 text-white dark:from-teal-400 dark:to-emerald-500 dark:text-zinc-950 shadow-lg shadow-indigo-500/20 dark:shadow-teal-500/20",
                  children: o.jsx(gn, {
                    size: 20,
                    strokeWidth: 2.5,
                    className: "fill-transparent",
                  }),
                })
              : o.jsx("img", {
                  src: n ? "/logo1.png" : "/logo2.png",
                  alt: "SecureGen Logo",
                  onError: () => g(!0),
                  className: "w-10 h-10 object-contain drop-shadow-md ",
                }),
            o.jsx("span", {
              className:
                "font-black tracking-tight text-lg text-stone-900 dark:text-white",
              children: "SecureGen",
            }),
          ],
        }),
        o.jsx("div", {
          className: "hidden md:flex flex-1 justify-center items-center gap-1",
          children: c
            ? o.jsxs(o.Fragment, {
                children: [
                  o.jsxs(tt, {
                    to: "/",
                    className: x,
                    end: !0,
                    children: [
                      o.jsx(Jr, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "Dashboard" }),
                    ],
                  }),
                  o.jsxs(tt, {
                    to: "/generator",
                    className: x,
                    children: [
                      o.jsx(fn, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "Generate" }),
                    ],
                  }),
                  o.jsxs(tt, {
                    to: "/vault",
                    className: x,
                    children: [
                      o.jsx(Ph, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "Vault" }),
                    ],
                  }),
                ],
              })
            : o.jsxs(o.Fragment, {
                children: [
                  o.jsxs(tt, {
                    to: "/",
                    className: x,
                    end: !0,
                    children: [
                      o.jsx(Jr, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "Home" }),
                    ],
                  }),
                  o.jsxs(tt, {
                    to: "/about",
                    className: x,
                    children: [
                      o.jsx(Wh, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "About" }),
                    ],
                  }),
                  o.jsxs(tt, {
                    to: "/contact",
                    className: x,
                    children: [
                      o.jsx(ds, { size: 14 }),
                      " ",
                      o.jsx("span", { children: "Contact us" }),
                    ],
                  }),
                ],
              }),
        }),
        o.jsxs("div", {
          className: "flex items-center gap-2 md:gap-3 ml-auto md:ml-4",
          children: [
            o.jsx("div", {
              className: "hidden md:flex items-center gap-3",
              children: c
                ? o.jsxs(o.Fragment, {
                    children: [
                      o.jsxs("div", {
                        className:
                          "flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700",
                        children: [
                          o.jsx(cc, {
                            size: 14,
                            className: "text-stone-400 dark:text-zinc-500",
                          }),
                          o.jsx("span", {
                            className:
                              "text-xs font-extrabold text-stone-600 dark:text-zinc-300 max-w-[100px] truncate",
                            children: c.fullName?.firstName || "User",
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        onClick: u,
                        className: `p-2 rounded-full text-stone-500 hover:bg-rose-50 hover:text-rose-500 dark:text-zinc-400 dark:hover:bg-rose-500/20 dark:hover:text-rose-400 transition-colors ${Qt}`,
                        title: "Logout",
                        children: o.jsx(oc, { size: 18 }),
                      }),
                    ],
                  })
                : o.jsxs(o.Fragment, {
                    children: [
                      o.jsx(tt, {
                        to: "/login",
                        className: `text-xs font-extrabold px-4 py-2 rounded-full text-stone-500 hover:bg-stone-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors ${Qt}`,
                        children: "Login",
                      }),
                      o.jsx(tt, {
                        to: "/register",
                        className: `text-xs font-bold px-5 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-md ${Qt}`,
                        children: "Sign up",
                      }),
                    ],
                  }),
            }),
            o.jsx("div", {
              className:
                "hidden md:block w-px h-6 bg-stone-200 dark:bg-zinc-700 mx-1",
            }),
            o.jsx("button", {
              onClick: () => s(!n),
              className: `relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none border-2 bg-stone-200 border-stone-300 dark:bg-zinc-800 dark:border-zinc-700 ${Qt}`,
              children: o.jsx("div", {
                className: `absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${n ? "translate-x-5 bg-zinc-950 text-teal-400" : "translate-x-0 bg-white text-orange-500"}`,
                children: n ? o.jsx(qv, { size: 10 }) : o.jsx(c2, { size: 10 }),
              }),
            }),
            o.jsx("button", {
              onClick: () => h(!d),
              className: `md:hidden p-2 rounded-full text-stone-600 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors ${Qt}`,
              children: d ? o.jsx(fs, { size: 20 }) : o.jsx(Uv, { size: 20 }),
            }),
          ],
        }),
        d &&
          o.jsx("div", {
            className:
              "absolute top-[110%] left-0 right-0 p-4 rounded-[2rem] md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-stone-200/50 dark:border-zinc-800/50 shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 flex flex-col gap-2 animate-in slide-in-from-top-4 fade-in duration-200 origin-top",
            children: c
              ? o.jsxs(o.Fragment, {
                  children: [
                    o.jsxs(tt, {
                      to: "/",
                      onClick: b,
                      className: v,
                      end: !0,
                      children: [
                        o.jsx(Jr, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "Dashboard" }),
                      ],
                    }),
                    o.jsxs(tt, {
                      to: "/generator",
                      onClick: b,
                      className: v,
                      children: [
                        o.jsx(fn, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "Generate Password" }),
                      ],
                    }),
                    o.jsxs(tt, {
                      to: "/vault",
                      onClick: b,
                      className: v,
                      children: [
                        o.jsx(Ph, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "Secure Vault" }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "h-px bg-stone-200 dark:bg-zinc-800 my-2",
                    }),
                    o.jsxs("div", {
                      className: "flex items-center justify-between px-2",
                      children: [
                        o.jsxs("div", {
                          className:
                            "flex items-center gap-2 text-stone-500 dark:text-zinc-400",
                          children: [
                            o.jsx(cc, { size: 16 }),
                            o.jsx("span", {
                              className:
                                "text-xs font-bold truncate max-w-[150px]",
                              children: c.fullName?.firstName || "User",
                            }),
                          ],
                        }),
                        o.jsxs("button", {
                          onClick: () => {
                            (u(), b());
                          },
                          className: `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 ${Qt}`,
                          children: [o.jsx(oc, { size: 14 }), " Logout"],
                        }),
                      ],
                    }),
                  ],
                })
              : o.jsxs(o.Fragment, {
                  children: [
                    o.jsxs(tt, {
                      to: "/",
                      onClick: b,
                      className: v,
                      end: !0,
                      children: [
                        o.jsx(Jr, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "Home" }),
                      ],
                    }),
                    o.jsxs(tt, {
                      to: "/about",
                      onClick: b,
                      className: v,
                      children: [
                        o.jsx(Wh, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "About" }),
                      ],
                    }),
                    o.jsxs(tt, {
                      to: "/contact",
                      onClick: b,
                      className: v,
                      children: [
                        o.jsx(ds, { size: 18 }),
                        " ",
                        o.jsx("span", { children: "Contact us" }),
                      ],
                    }),
                    o.jsx("div", {
                      className: "h-px bg-stone-200 dark:bg-zinc-800 my-2",
                    }),
                    o.jsxs("div", {
                      className: "flex flex-col gap-2",
                      children: [
                        o.jsx(tt, {
                          to: "/login",
                          onClick: b,
                          className: `text-center py-3 rounded-xl font-bold text-stone-700 bg-stone-100 dark:text-zinc-300 dark:bg-zinc-800/50 ${Qt}`,
                          children: "Login",
                        }),
                        o.jsx(tt, {
                          to: "/register",
                          onClick: b,
                          className: `text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-500 dark:to-emerald-500 shadow-lg ${Qt}`,
                          children: "Sign up",
                        }),
                      ],
                    }),
                  ],
                }),
          }),
      ],
    }),
  });
}
const pm = "active:scale-[0.97] transition-transform duration-200 ease-out";
function I5() {
  const [n, s] = j.useState({ email: "", password: "" }),
    { login: c } = kl(),
    u = vi(),
    [d, h] = j.useState(!1),
    m = async (g) => {
      (g.preventDefault(), h(!0), (await c(n)) && u("/"), h(!1));
    };
  return o.jsxs("div", {
    className:
      "w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10 pt-4",
    children: [
      o.jsxs("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg pointer-events-none dark:hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute top-0 left-0 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite]",
          }),
          o.jsx("div", {
            className:
              "absolute top-0 right-0 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_2s]",
          }),
          o.jsx("div", {
            className:
              "absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_4s]",
          }),
        ],
      }),
      o.jsxs("div", {
        className: "text-center mb-10 relative z-10",
        children: [
          o.jsxs("div", {
            className: "relative inline-flex justify-center mb-6",
            children: [
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-indigo-500/20 dark:bg-teal-500/20 blur-xl rounded-full animate-pulse",
              }),
              o.jsx("div", {
                className:
                  "relative p-4 bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-indigo-900/10 dark:shadow-black/50 transform -rotate-6 hover:rotate-0 transition-transform duration-500",
                children: o.jsx(gn, {
                  size: 40,
                  strokeWidth: 2,
                  className:
                    "text-indigo-600 dark:text-teal-400 fill-indigo-50 dark:fill-teal-500/10",
                }),
              }),
            ],
          }),
          o.jsxs("h2", {
            className:
              "text-4xl md:text-5xl font-black mb-3 text-stone-900 dark:text-white tracking-tight leading-tight",
            children: [
              "Welcome ",
              o.jsx("br", {}),
              o.jsx("span", {
                className:
                  "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400 drop-shadow-sm",
                children: "Back",
              }),
            ],
          }),
          o.jsx("p", {
            className:
              "text-indigo-950/60 dark:text-zinc-400 font-extrabold text-sm uppercase tracking-widest",
            children: "Access your secure vault",
          }),
        ],
      }),
      o.jsxs("div", {
        className:
          "relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 shadow-2xl shadow-indigo-900/10 bg-white/70 backdrop-blur-2xl border-white dark:bg-zinc-900/70 dark:border-zinc-800/80 dark:shadow-black/80",
        children: [
          o.jsx("div", {
            className:
              "h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-teal-400 dark:via-cyan-500 dark:to-emerald-500",
          }),
          o.jsxs("div", {
            className: "p-8 md:p-10 space-y-7",
            children: [
              o.jsxs("a", {
                href: "https://securegen-encrypted-vault.onrender.com/api/auth/google",
                className: `w-full flex justify-center items-center gap-3 py-4 px-4 bg-white dark:bg-zinc-950 border-2 border-indigo-50 dark:border-zinc-800/80 text-stone-700 dark:text-zinc-200 rounded-2xl font-black hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-500/5 dark:hover:border-zinc-700 transition-all duration-300 ${pm}`,
                children: [
                  o.jsx("img", {
                    src: "https://www.svgrepo.com/show/475656/google-color.svg",
                    alt: "Google",
                    className: "w-5 h-5",
                  }),
                  "Continue with Google",
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center w-full",
                children: [
                  o.jsx("div", {
                    className:
                      "flex-1 border-t-2 border-indigo-50 dark:border-zinc-800",
                  }),
                  o.jsx("span", {
                    className:
                      "px-4 text-[10px] font-black uppercase tracking-widest text-indigo-300 dark:text-zinc-600",
                    children: "Or email",
                  }),
                  o.jsx("div", {
                    className:
                      "flex-1 border-t-2 border-indigo-50 dark:border-zinc-800",
                  }),
                ],
              }),
              o.jsxs("form", {
                onSubmit: m,
                className: "space-y-6",
                children: [
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(ds, {
                        className:
                          "absolute left-5 top-4 text-indigo-300 dark:text-zinc-600 group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400 transition-colors z-10",
                        size: 20,
                      }),
                      o.jsx("input", {
                        id: "email",
                        type: "email",
                        placeholder: " ",
                        value: n.email,
                        onChange: (g) => s({ ...n, email: g.target.value }),
                        className:
                          "peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-indigo-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-indigo-500 dark:focus:border-teal-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                        required: !0,
                      }),
                      o.jsx("label", {
                        htmlFor: "email",
                        className:
                          "absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-400 cursor-text",
                        children: "Email Address",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(vl, {
                        className:
                          "absolute left-5 top-4 text-indigo-300 dark:text-zinc-600 group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400 transition-colors z-10",
                        size: 20,
                      }),
                      o.jsx("input", {
                        id: "password",
                        type: "password",
                        placeholder: " ",
                        value: n.password,
                        onChange: (g) => s({ ...n, password: g.target.value }),
                        className:
                          "peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-indigo-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-indigo-500 dark:focus:border-teal-500 outline-none transition-all font-black tracking-widest text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                        required: !0,
                      }),
                      o.jsx("label", {
                        htmlFor: "password",
                        className:
                          "absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-400 cursor-text",
                        children: "Master Password",
                      }),
                    ],
                  }),
                  o.jsx("button", {
                    type: "submit",
                    disabled: d,
                    className: `w-full py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 text-white shadow-xl shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:text-zinc-950 mt-4 transition-all duration-300 ${pm} disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`,
                    children: d
                      ? o.jsx("span", {
                          className:
                            "animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full",
                        })
                      : o.jsxs(o.Fragment, {
                          children: [
                            " ",
                            "Secure Login ",
                            o.jsx($m, { size: 18, strokeWidth: 3 }),
                            " ",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("p", {
        className:
          "text-center mt-8 text-[13px] text-stone-500 dark:text-zinc-500 font-bold tracking-wide",
        children: [
          "New to SecureGen?",
          " ",
          o.jsx(qt, {
            to: "/register",
            className:
              "text-indigo-600 dark:text-teal-400 font-black hover:underline transition-colors",
            children: "Create Account",
          }),
        ],
      }),
    ],
  });
}
const xm = "active:scale-[0.97] transition-transform duration-200 ease-out";
function e4() {
  const [n, s] = j.useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    }),
    { register: c } = kl(),
    u = vi(),
    [d, h] = j.useState(!1),
    m = async (b) => {
      (b.preventDefault(), h(!0));
      const x = {
        fullName: { firstName: n.firstName, lastName: n.lastName },
        email: n.email,
        phone: n.phone,
        password: n.password,
      };
      ((await c(x)) && u("/login"), h(!1));
    },
    g = (b) => s({ ...n, [b.target.name]: b.target.value });
  return o.jsxs("div", {
    className:
      "w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10 pt-4 pb-10",
    children: [
      o.jsxs("div", {
        className:
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg pointer-events-none dark:hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute top-0 left-10 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite]",
          }),
          o.jsx("div", {
            className:
              "absolute top-20 right-0 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_2s]",
          }),
          o.jsx("div", {
            className:
              "absolute -bottom-8 left-20 w-72 h-72 bg-orange-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_4s]",
          }),
        ],
      }),
      o.jsxs("div", {
        className: "text-center mb-10 relative z-10",
        children: [
          o.jsxs("div", {
            className: "relative inline-flex justify-center mb-6",
            children: [
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-purple-500/20 dark:bg-emerald-500/20 blur-xl rounded-full animate-pulse",
              }),
              o.jsx("div", {
                className:
                  "relative p-4 bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-purple-900/10 dark:shadow-black/50 transform rotate-6 hover:rotate-0 transition-transform duration-500",
                children: o.jsx(Gt, {
                  size: 40,
                  strokeWidth: 2,
                  className: "text-purple-600 dark:text-emerald-400",
                }),
              }),
            ],
          }),
          o.jsxs("h2", {
            className:
              "text-4xl md:text-5xl font-black mb-3 text-stone-900 dark:text-white tracking-tight leading-tight",
            children: [
              "Join ",
              o.jsx("br", {}),
              o.jsx("span", {
                className:
                  "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-emerald-400 dark:to-cyan-400 drop-shadow-sm",
                children: "SecureGen",
              }),
            ],
          }),
          o.jsx("p", {
            className:
              "text-purple-950/60 dark:text-zinc-400 font-extrabold text-sm uppercase tracking-widest",
            children: "Your digital life, protected.",
          }),
        ],
      }),
      o.jsxs("div", {
        className:
          "relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 shadow-2xl shadow-purple-900/10 bg-white/70 backdrop-blur-2xl border-white dark:bg-zinc-900/70 dark:border-zinc-800/80 dark:shadow-black/80",
        children: [
          o.jsx("div", {
            className:
              "h-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 dark:from-emerald-400 dark:via-cyan-500 dark:to-blue-600",
          }),
          o.jsxs("div", {
            className: "p-8 md:p-10 space-y-7",
            children: [
              o.jsxs("a", {
                href: "https://securegen-encrypted-vault.onrender.com/api/auth/google",
                className: `w-full flex justify-center items-center gap-3 py-4 px-4 bg-white dark:bg-zinc-950 border-2 border-purple-50 dark:border-zinc-800/80 text-stone-700 dark:text-zinc-200 rounded-2xl font-black hover:border-purple-100 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:border-zinc-700 transition-all duration-300 ${xm}`,
                children: [
                  o.jsx("img", {
                    src: "https://www.svgrepo.com/show/475656/google-color.svg",
                    alt: "Google",
                    className: "w-5 h-5",
                  }),
                  "Sign up with Google",
                ],
              }),
              o.jsxs("div", {
                className: "flex items-center w-full",
                children: [
                  o.jsx("div", {
                    className:
                      "flex-1 border-t-2 border-purple-50 dark:border-zinc-800",
                  }),
                  o.jsx("span", {
                    className:
                      "px-4 text-[10px] font-black uppercase tracking-widest text-purple-300 dark:text-zinc-600",
                    children: "Or email",
                  }),
                  o.jsx("div", {
                    className:
                      "flex-1 border-t-2 border-purple-50 dark:border-zinc-800",
                  }),
                ],
              }),
              o.jsxs("form", {
                onSubmit: m,
                className: "space-y-5",
                children: [
                  o.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      o.jsxs("div", {
                        className: "relative group",
                        children: [
                          o.jsx("input", {
                            id: "firstName",
                            name: "firstName",
                            type: "text",
                            placeholder: " ",
                            required: !0,
                            onChange: g,
                            className:
                              "peer w-full px-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                          }),
                          o.jsx("label", {
                            htmlFor: "firstName",
                            className:
                              "absolute left-5 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text",
                            children: "First Name",
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className: "relative group",
                        children: [
                          o.jsx("input", {
                            id: "lastName",
                            name: "lastName",
                            type: "text",
                            placeholder: " ",
                            required: !0,
                            onChange: g,
                            className:
                              "peer w-full px-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                          }),
                          o.jsx("label", {
                            htmlFor: "lastName",
                            className:
                              "absolute left-5 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text",
                            children: "Last Name",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(ds, {
                        className:
                          "absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10",
                        size: 20,
                      }),
                      o.jsx("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        placeholder: " ",
                        required: !0,
                        onChange: g,
                        className:
                          "peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                      }),
                      o.jsx("label", {
                        htmlFor: "email",
                        className:
                          "absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text",
                        children: "Email Address",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(Vv, {
                        className:
                          "absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10",
                        size: 20,
                      }),
                      o.jsx("input", {
                        id: "phone",
                        name: "phone",
                        type: "text",
                        placeholder: " ",
                        onChange: g,
                        className:
                          "peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                      }),
                      o.jsx("label", {
                        htmlFor: "phone",
                        className:
                          "absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text",
                        children: "Phone Number (Optional)",
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: "relative group",
                    children: [
                      o.jsx(vl, {
                        className:
                          "absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10",
                        size: 20,
                      }),
                      o.jsx("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        placeholder: " ",
                        required: !0,
                        onChange: g,
                        className:
                          "peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-black tracking-widest text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                      }),
                      o.jsx("label", {
                        htmlFor: "password",
                        className:
                          "absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text",
                        children: "Create Master Password",
                      }),
                    ],
                  }),
                  o.jsx("button", {
                    type: "submit",
                    disabled: d,
                    className: `w-full py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 text-white shadow-xl shadow-pink-500/20 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 dark:from-emerald-500 dark:to-cyan-600 dark:hover:from-emerald-400 dark:hover:to-cyan-500 dark:text-zinc-950 mt-6 transition-all duration-300 ${xm} disabled:opacity-70 disabled:cursor-not-allowed`,
                    children: d
                      ? "Initializing Vault..."
                      : o.jsxs(o.Fragment, {
                          children: [
                            " ",
                            o.jsx(fn, { size: 18, strokeWidth: 3 }),
                            " Create Account",
                            " ",
                          ],
                        }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("p", {
        className:
          "text-center mt-8 text-[13px] text-stone-500 dark:text-zinc-500 font-bold tracking-wide",
        children: [
          "Already have an account?",
          " ",
          o.jsx(qt, {
            to: "/login",
            className:
              "text-purple-600 dark:text-emerald-400 font-black hover:underline transition-colors",
            children: "Login",
          }),
        ],
      }),
    ],
  });
}
const t4 = () =>
    o.jsxs("div", {
      className:
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-white transition-colors duration-700",
      children: [
        o.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 dark:bg-teal-500/20 rounded-full blur-[80px] animate-pulse",
        }),
        o.jsxs("div", {
          className: "relative z-10 flex flex-col items-center",
          children: [
            o.jsxs("div", {
              className: "relative mb-8",
              children: [
                o.jsx("div", {
                  className:
                    "absolute inset-0 bg-indigo-500 dark:bg-teal-500 blur-xl opacity-30 animate-ping",
                }),
                o.jsx("div", {
                  className:
                    "relative p-6 rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-stone-100 dark:border-zinc-800",
                  children: o.jsx(gn, {
                    size: 48,
                    strokeWidth: 2,
                    className:
                      "text-indigo-600 dark:text-teal-500 animate-[spin_4s_linear_infinite]",
                  }),
                }),
              ],
            }),
            o.jsx("h1", {
              className: "text-2xl font-bold tracking-[0.2em] uppercase mb-2",
              children: "SecureGen",
            }),
            o.jsxs("div", {
              className:
                "flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-stone-200/50 dark:bg-zinc-800/50 backdrop-blur-sm",
              children: [
                o.jsx(cv, {
                  size: 12,
                  className: "text-indigo-500 dark:text-teal-500",
                }),
                o.jsx("span", {
                  className: "text-[10px] font-mono font-bold opacity-60",
                  children: "Verifying Session...",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  gm = ({ children: n }) => {
    const { user: s, loading: c } = kl(),
      u = Na();
    return c
      ? o.jsx(t4, {})
      : s
        ? n
        : o.jsx(wc, { to: "/login", state: { from: u }, replace: !0 });
  },
  a4 =
    "active:scale-[0.96] transition-transform duration-200 ease-out cursor-pointer select-none";
function l4() {
  const { user: n, logout: s } = kl(),
    c = vi(),
    [u, d] = j.useState([]),
    [h, m] = j.useState(!0),
    g = j.useMemo(() => {
      const y = new Date().getHours();
      return y < 12
        ? "Good Morning"
        : y < 18
          ? "Good Afternoon"
          : "Good Evening";
    }, []);
  j.useEffect(() => {
    (async () => {
      try {
        const R = await Zt.get("/vault/all");
        R.data.success && d(R.data.data);
      } catch (R) {
        (nt.error("Failed to load vault data"), console.error(R));
      } finally {
        m(!1);
      }
    })();
  }, []);
  const b = j.useMemo(() => {
      const y = u.length,
        R = (T) => {
          if (!T) return 0;
          let Y = 0;
          return (
            T.length > 8 && Y++,
            T.length > 12 && Y++,
            /[A-Z]/.test(T) && Y++,
            /[0-9]/.test(T) && Y++,
            /[^A-Za-z0-9]/.test(T) && Y++,
            Y
          );
        },
        G = u.filter((T) => R(T.password) >= 4).length,
        A = u.filter((T) => R(T.password) <= 2).length,
        H = y === 0 ? 0 : Math.round((G / y) * 100);
      return { total: y, strong: G, weak: A, score: H };
    }, [u]),
    x = async () => {
      try {
        (s(),
          c("/login"),
          nt.success("Logged out safely", {
            icon: "👋",
            style: { borderRadius: "12px", background: "#333", color: "#fff" },
          }));
      } catch {
        nt.error("Error logging out");
      }
    },
    v = async () => {
      m(!0);
      try {
        const y = await Zt.get("/vault/all");
        y.data.success &&
          (d(y.data.data),
          nt.success("Vault Synced Successfully", { icon: "✨" }));
      } catch {
        nt.error("Sync Failed");
      } finally {
        m(!1);
      }
    };
  return h
    ? o.jsx("div", {
        className: "w-full flex justify-center pt-20",
        children: o.jsx("div", {
          className:
            "animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600 dark:border-teal-400",
        }),
      })
    : o.jsxs("div", {
        className:
          "w-full max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500",
        children: [
          o.jsxs("div", {
            className:
              "relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center",
            children: [
              o.jsx("div", {
                className:
                  "absolute top-0 -left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:hidden pointer-events-none animate-pulse duration-1000",
              }),
              o.jsx("div", {
                className:
                  "absolute -bottom-10 left-40 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:hidden pointer-events-none",
              }),
              o.jsxs("div", {
                className:
                  "lg:col-span-2 flex flex-col justify-center space-y-5 relative z-10",
                children: [
                  o.jsxs("div", {
                    className:
                      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm shadow-indigo-200/50 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-teal-400 w-max backdrop-blur-md",
                    children: [
                      o.jsxs("span", {
                        className: "relative flex h-2 w-2",
                        children: [
                          o.jsx("span", {
                            className:
                              "animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 dark:bg-teal-400",
                          }),
                          o.jsx("span", {
                            className:
                              "relative inline-flex rounded-full h-2 w-2 bg-indigo-500 dark:bg-teal-500",
                          }),
                        ],
                      }),
                      "System Online",
                    ],
                  }),
                  o.jsxs("h1", {
                    className:
                      "text-5xl md:text-6xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1]",
                    children: [
                      g,
                      ",",
                      o.jsx("br", {}),
                      o.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400 drop-shadow-sm",
                        children:
                          n?.fullName?.firstName || n?.name || "Traveler",
                      }),
                    ],
                  }),
                  o.jsxs("p", {
                    className:
                      "text-stone-600 dark:text-zinc-400 text-sm md:text-base max-w-md font-bold leading-relaxed",
                    children: [
                      "Welcome to your",
                      " ",
                      o.jsx("span", {
                        className:
                          "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400",
                        children: "SecureGen Cloud Dashboard",
                      }),
                      ". All your credentials are encrypted, protected, and accessible anywhere.",
                    ],
                  }),
                ],
              }),
              o.jsx("div", {
                className:
                  "relative group rounded-[2.5rem] p-1.5 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 dark:shadow-black/60 transition-all duration-500 hover:-translate-y-1",
                children: o.jsxs("div", {
                  className:
                    "relative h-full w-full bg-white/70 backdrop-blur-2xl rounded-[2.2rem] p-7 dark:bg-zinc-950/90 overflow-hidden",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity dark:from-teal-500 dark:to-emerald-600 dark:opacity-20 pointer-events-none",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute -top-6 -right-6 text-indigo-500/10 dark:text-teal-500/5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none",
                      children: o.jsx(Gt, { size: 140, strokeWidth: 2 }),
                    }),
                    o.jsxs("div", {
                      className: "space-y-6 relative z-10",
                      children: [
                        o.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/50 transform group-hover:scale-105 transition-transform duration-300",
                              children: o.jsx(cc, {
                                size: 22,
                                strokeWidth: 2.5,
                              }),
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("p", {
                                  className:
                                    "text-[10px] uppercase font-black tracking-widest text-indigo-500 dark:text-zinc-500 mb-0.5",
                                  children: "Logged in as",
                                }),
                                o.jsx("p", {
                                  className:
                                    "text-sm font-black text-stone-900 dark:text-white truncate max-w-[140px]",
                                  children: n?.email || "user@securegen.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "flex items-center gap-4",
                          children: [
                            o.jsx("div", {
                              className:
                                "w-12 h-12 rounded-2xl bg-white/80 border-2 border-indigo-50 text-indigo-500 flex items-center justify-center shadow-sm dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400",
                              children: o.jsx(Ly, {
                                size: 22,
                                strokeWidth: 2.5,
                              }),
                            }),
                            o.jsxs("div", {
                              children: [
                                o.jsx("p", {
                                  className:
                                    "text-[10px] uppercase font-black tracking-widest text-indigo-500 dark:text-zinc-500 mb-0.5",
                                  children: "Last Login",
                                }),
                                o.jsx("p", {
                                  className:
                                    "text-sm font-black text-stone-900 dark:text-white",
                                  children: new Date().toLocaleDateString(),
                                }),
                              ],
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className:
                            "pt-5 border-t border-indigo-100/60 dark:border-zinc-800 flex justify-between items-center",
                          children: [
                            o.jsxs("span", {
                              className:
                                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-teal-500/10 text-[10px] font-black tracking-widest text-emerald-600 dark:text-teal-400 uppercase shadow-sm border border-emerald-100 dark:border-teal-500/20",
                              children: [
                                o.jsx(vl, { size: 12, strokeWidth: 3 }),
                                " Active Session",
                              ],
                            }),
                            o.jsx("span", {
                              className:
                                "text-[10px] font-black text-indigo-400 dark:text-zinc-600 bg-indigo-50/50 dark:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-indigo-100/50 dark:border-zinc-800",
                              children: "v1.1.0",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5",
            children: [
              o.jsx(Wr, {
                label: "Total Entries",
                value: b.total,
                icon: o.jsx(Nv, { size: 22 }),
                color: "text-indigo-600 dark:text-indigo-400",
                bg: "bg-indigo-100 dark:bg-indigo-500/20",
                border: "border-indigo-100 dark:border-indigo-500/20",
              }),
              o.jsx(Wr, {
                label: "Strong Passwords",
                value: b.strong,
                icon: o.jsx(Gt, { size: 22 }),
                color: "text-emerald-600 dark:text-emerald-400",
                bg: "bg-emerald-100 dark:bg-emerald-500/20",
                border: "border-emerald-100 dark:border-emerald-500/20",
              }),
              o.jsx(Wr, {
                label: "Weak Passwords",
                value: b.weak,
                icon: o.jsx(n2, { size: 22 }),
                color: "text-rose-600 dark:text-rose-400",
                bg: "bg-rose-100 dark:bg-rose-500/20",
                border: "border-rose-100 dark:border-rose-500/20",
              }),
              o.jsx(Wr, {
                label: "Security Score",
                value: `${b.score}%`,
                icon: o.jsx(Ry, { size: 22 }),
                color:
                  b.score > 70
                    ? "text-indigo-600 dark:text-teal-400"
                    : "text-amber-600 dark:text-amber-400",
                bg:
                  b.score > 70
                    ? "bg-indigo-100 dark:bg-teal-500/20"
                    : "bg-amber-100 dark:bg-amber-500/20",
                border:
                  b.score > 70
                    ? "border-indigo-100 dark:border-teal-500/20"
                    : "border-amber-100 dark:border-amber-500/20",
              }),
            ],
          }),
          o.jsxs("div", {
            children: [
              o.jsx("h3", {
                className:
                  "text-[11px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500 mb-4 px-1",
                children: "Quick Actions",
              }),
              o.jsxs("div", {
                className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                children: [
                  o.jsx(on, {
                    icon: o.jsx(ep, { size: 26, strokeWidth: 2.5 }),
                    title: "Add Entry",
                    desc: "Save new credentials",
                    onClick: () => c("/vault", { state: { openAdd: !0 } }),
                    primary: !0,
                  }),
                  o.jsx(on, {
                    icon: o.jsx(fn, { size: 26 }),
                    title: "Generator",
                    desc: "Create strong pass",
                    onClick: () => c("/generator"),
                  }),
                  o.jsx(on, {
                    icon: o.jsx(tp, { size: 26 }),
                    title: "Sync Vault",
                    desc: "Fetch latest data",
                    onClick: () => {
                      (c("/vault"), v());
                    },
                  }),
                  o.jsx(on, {
                    icon: o.jsx(Nc, { size: 26 }),
                    title: "Import",
                    desc: "Restore from JSON",
                    onClick: () => c("/vault"),
                  }),
                  o.jsx(on, {
                    icon: o.jsx(lp, { size: 26 }),
                    title: "Clean Up",
                    desc: "Manage weak items",
                    onClick: () => c("/vault", { state: { filter: "Weak" } }),
                  }),
                  o.jsx(on, {
                    icon: o.jsx(oc, { size: 26 }),
                    title: "Logout",
                    desc: "End session safely",
                    onClick: x,
                    danger: !0,
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function Wr({ label: n, value: s, icon: c, color: u, bg: d, border: h }) {
  return o.jsxs("div", {
    className: `relative overflow-hidden p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-900/40 ${h} shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:border-zinc-700`,
    children: [
      o.jsx("div", {
        className: `w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${d} ${u}`,
        children: c,
      }),
      o.jsx("p", {
        className:
          "text-3xl font-black text-stone-900 dark:text-white tracking-tight mb-1",
        children: s,
      }),
      o.jsx("p", {
        className:
          "text-[10px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500",
        children: n,
      }),
    ],
  });
}
function on({ icon: n, title: s, desc: c, onClick: u, primary: d, danger: h }) {
  return o.jsxs("button", {
    onClick: u,
    className: `group relative p-5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${a4}
        ${d ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-transparent text-white shadow-xl shadow-purple-500/20 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/40 hover:from-indigo-700 hover:to-purple-700 dark:hover:from-teal-400 dark:hover:to-emerald-500" : h ? "bg-rose-50/50 border-rose-100 text-rose-600 hover:bg-rose-100 hover:border-rose-200 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-rose-400 dark:hover:bg-rose-900/20 dark:hover:border-rose-800" : "bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10"}
      `,
    children: [
      o.jsx("div", {
        className: `transition-transform duration-300 group-hover:scale-110 ${d ? "text-white dark:text-zinc-950" : h ? "text-rose-500" : "text-indigo-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-teal-400"}`,
        children: n,
      }),
      o.jsxs("div", {
        children: [
          o.jsx("p", {
            className: `font-black text-[15px] tracking-wide mb-1 ${d ? "text-white dark:text-zinc-950" : ""}`,
            children: s,
          }),
          o.jsx("p", {
            className: `text-[10px] font-bold uppercase tracking-widest ${d ? "text-indigo-200 dark:text-teal-900" : "text-stone-400 dark:text-zinc-500"}`,
            children: c,
          }),
        ],
      }),
    ],
  });
}
const n4 = "active:scale-[0.96] transition-transform duration-200 ease-out";
function i4() {
  const [n, s] = j.useState(null),
    [c, u] = j.useState(!1);
  j.useEffect(() => {
    const h = (m) => {
      (m.preventDefault(), s(m), u(!0));
    };
    return (
      window.addEventListener("beforeinstallprompt", h),
      () => {
        window.removeEventListener("beforeinstallprompt", h);
      }
    );
  }, []);
  const d = async () => {
    if (!n) return;
    n.prompt();
    const { outcome: h } = await n.userChoice;
    (h === "accepted" &&
      (console.log("User accepted the install prompt"), u(!1)),
      s(null));
  };
  return c
    ? o.jsxs("button", {
        onClick: d,
        className: `group relative overflow-hidden flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-2xl font-bold text-white shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:text-zinc-950 transition-all ${n4}`,
        children: [
          o.jsx("div", {
            className:
              "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out",
          }),
          o.jsx(ap, { size: 18, strokeWidth: 2.5, className: "relative z-10" }),
          o.jsx("span", {
            className: "relative z-10 text-sm tracking-wide",
            children: "Install App",
          }),
          o.jsx(Nc, {
            size: 14,
            className:
              "relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all",
          }),
        ],
      })
    : null;
}
const ec = "active:scale-[0.96] transition-transform duration-200 ease-out";
function r4() {
  return o.jsxs("div", {
    className:
      "w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className:
          "fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]",
          }),
          o.jsx("div", {
            className:
              "absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_2s]",
          }),
        ],
      }),
      o.jsxs("section", {
        className:
          "relative w-full max-w-7xl px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-16 z-10",
        children: [
          o.jsxs("div", {
            className:
              "flex-1 space-y-8 text-center lg:text-left relative z-10",
            children: [
              o.jsxs("div", {
                className:
                  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 shadow-sm backdrop-blur-md mx-auto lg:mx-0",
                children: [
                  o.jsxs("span", {
                    className: "relative flex h-2.5 w-2.5",
                    children: [
                      o.jsx("span", {
                        className:
                          "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                      }),
                      o.jsx("span", {
                        className:
                          "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500",
                      }),
                    ],
                  }),
                  o.jsx("span", {
                    className:
                      "text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-zinc-400",
                    children: "SecureGen v1.1 Live",
                  }),
                ],
              }),
              o.jsxs("h1", {
                className:
                  "text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1]",
                children: [
                  "Secure Your ",
                  o.jsx("br", {}),
                  o.jsx("span", {
                    className:
                      "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-500 drop-shadow-sm",
                    children: "Digital Life",
                  }),
                  " ",
                  o.jsx("br", {}),
                  " in One Place.",
                ],
              }),
              o.jsxs("p", {
                className:
                  "text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed",
                children: [
                  "Generate, store, and protect passwords with military-grade AES-256 encryption.",
                  o.jsxs("span", {
                    className: "text-indigo-600 dark:text-teal-400",
                    children: [" ", "Zero browser storage. 100% cloud secure."],
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4",
                children: [
                  o.jsx(qt, {
                    to: "/register",
                    className: `w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-lg text-white bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-xl text-center ${ec}`,
                    children: "Get Started Free",
                  }),
                  o.jsx("div", {
                    className: "w-full sm:w-auto",
                    children: o.jsx(i4, {}),
                  }),
                  o.jsx(qt, {
                    to: "/login",
                    className: `w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-lg text-stone-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border-2 border-indigo-50 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-zinc-700 hover:shadow-lg text-center transition-all ${ec}`,
                    children: "Login to Vault",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex-1 w-full max-w-lg relative perspective-1000 group",
            children: [
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-teal-500 dark:to-emerald-500 blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 -z-10 rounded-full",
              }),
              o.jsxs("div", {
                className:
                  "relative z-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-zinc-700/50 shadow-2xl p-6 transform rotate-y-12 rotate-x-6 group-hover:rotate-0 transition-transform duration-700",
                children: [
                  o.jsxs("div", {
                    className:
                      "flex items-center gap-4 mb-6 pb-6 border-b border-indigo-100/50 dark:border-zinc-800",
                    children: [
                      o.jsx("div", {
                        className:
                          "w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30",
                        children: o.jsx(Gt, { size: 24, strokeWidth: 2.5 }),
                      }),
                      o.jsxs("div", {
                        className: "space-y-2 flex-1",
                        children: [
                          o.jsx("div", {
                            className:
                              "w-1/2 h-3 bg-stone-800 dark:bg-zinc-200 rounded-full",
                          }),
                          o.jsx("div", {
                            className:
                              "w-1/3 h-2 bg-stone-300 dark:bg-zinc-700 rounded-full",
                          }),
                        ],
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "space-y-4",
                    children: [
                      {
                        c: "bg-blue-500",
                        i: o.jsx(mv, { size: 14, className: "text-white" }),
                      },
                      {
                        c: "bg-emerald-500",
                        i: o.jsx(Fm, { size: 14, className: "text-white" }),
                      },
                      {
                        c: "bg-amber-500",
                        i: o.jsx(vl, { size: 14, className: "text-white" }),
                      },
                    ].map((n, s) =>
                      o.jsxs(
                        "div",
                        {
                          className:
                            "flex items-center justify-between p-4 rounded-2xl bg-white/80 dark:bg-zinc-950/80 border border-stone-100 dark:border-zinc-800 shadow-sm",
                          children: [
                            o.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                o.jsx("div", {
                                  className: `w-10 h-10 rounded-xl ${n.c} flex items-center justify-center shadow-md`,
                                  children: n.i,
                                }),
                                o.jsxs("div", {
                                  className: "space-y-1.5",
                                  children: [
                                    o.jsx("div", {
                                      className:
                                        "w-24 h-2.5 bg-stone-800 dark:bg-zinc-300 rounded-full",
                                    }),
                                    o.jsx("div", {
                                      className:
                                        "w-16 h-2 bg-stone-300 dark:bg-zinc-700 rounded-full",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("div", {
                              className: "flex gap-1.5",
                              children: [
                                o.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700",
                                }),
                                o.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700",
                                }),
                                o.jsx("div", {
                                  className:
                                    "w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700",
                                }),
                              ],
                            }),
                          ],
                        },
                        s,
                      ),
                    ),
                  }),
                  o.jsxs("div", {
                    className:
                      "absolute -bottom-6 -right-6 bg-white dark:bg-zinc-900 p-5 rounded-3xl shadow-2xl border border-stone-100 dark:border-zinc-800 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 delay-100",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3 mb-3",
                        children: [
                          o.jsx(fn, { size: 16, className: "text-amber-500" }),
                          o.jsx("span", {
                            className:
                              "text-xs font-black uppercase tracking-widest text-stone-900 dark:text-white",
                            children: "Generator",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className:
                          "font-mono text-lg font-bold text-indigo-600 dark:text-teal-400 bg-indigo-50 dark:bg-teal-500/10 px-4 py-2 rounded-xl",
                        children: "x9$K#mP2@vL",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsx("section", {
        className:
          "w-full bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border-y border-indigo-50 dark:border-zinc-800 py-16 relative z-10",
        children: o.jsxs("div", {
          className:
            "max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-indigo-50 dark:divide-zinc-800",
          children: [
            o.jsx(Pr, {
              icon: o.jsx(vl, {}),
              value: "AES-256",
              label: "End-to-End Encryption",
            }),
            o.jsx(Pr, {
              icon: o.jsx($y, {}),
              value: "Cloud",
              label: "Secure DB Storage",
            }),
            o.jsx(Pr, {
              icon: o.jsx(lv, {}),
              value: "Zero",
              label: "Plaintext Visibility",
            }),
            o.jsx(Pr, {
              icon: o.jsx(Si, {}),
              value: "100%",
              label: "Stateless JWT Auth",
            }),
          ],
        }),
      }),
      o.jsxs("section", {
        className: "w-full max-w-7xl px-6 py-32 relative z-10",
        children: [
          o.jsxs("div", {
            className: "text-center mb-20",
            children: [
              o.jsxs("h2", {
                className:
                  "text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-6 tracking-tight",
                children: [
                  "Everything you need. ",
                  o.jsx("br", {}),
                  " ",
                  o.jsx("span", {
                    className: "text-indigo-600 dark:text-teal-400",
                    children: "Nothing you don't.",
                  }),
                ],
              }),
              o.jsx("p", {
                className:
                  "text-stone-500 dark:text-zinc-400 font-bold text-lg max-w-2xl mx-auto",
                children:
                  "We stripped away the bloat and left only military-grade security wrapped in a beautiful, lightning-fast interface.",
              }),
            ],
          }),
          o.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
            children: [
              o.jsx(un, {
                icon: o.jsx(uc, {}),
                title: "Secure Cloud Vault",
                desc: "Passwords are encrypted client-side before being safely stored in our protected cloud database.",
                color: "text-indigo-600 dark:text-indigo-400",
                bg: "bg-indigo-100 dark:bg-indigo-500/20",
              }),
              o.jsx(un, {
                icon: o.jsx(fn, {}),
                title: "Smart Generator",
                desc: "Create uncrackable passwords instantly with adjustable length and complexity rules.",
                color: "text-amber-600 dark:text-amber-400",
                bg: "bg-amber-100 dark:bg-amber-500/20",
              }),
              o.jsx(un, {
                icon: o.jsx(Wm, {}),
                title: "Stateless Auth",
                desc: "Sessions are secured using strict HttpOnly JSON Web Tokens to prevent XSS attacks.",
                color: "text-emerald-600 dark:text-emerald-400",
                bg: "bg-emerald-100 dark:bg-emerald-500/20",
              }),
              o.jsx(un, {
                icon: o.jsx(Gt, {}),
                title: "Zero-Knowledge",
                desc: "We never store your master password. We couldn't read your vault even if we wanted to.",
                color: "text-rose-600 dark:text-rose-400",
                bg: "bg-rose-100 dark:bg-rose-500/20",
              }),
              o.jsx(un, {
                icon: o.jsx(ap, {}),
                title: "PWA Ready",
                desc: "Install SecureGen directly to your phone or desktop for a native-like app experience.",
                color: "text-purple-600 dark:text-purple-400",
                bg: "bg-purple-100 dark:bg-purple-500/20",
              }),
              o.jsx(un, {
                icon: o.jsx(Sv, {}),
                title: "JSON Backups",
                desc: "Your data is yours. Export an encrypted JSON backup of your vault at any time.",
                color: "text-blue-600 dark:text-blue-400",
                bg: "bg-blue-100 dark:bg-blue-500/20",
              }),
            ],
          }),
        ],
      }),
      o.jsx("section", {
        className:
          "w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-black  py-32 relative overflow-hidden shadow-2xl",
        children: o.jsxs("div", {
          className:
            "max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10",
          children: [
            o.jsxs("div", {
              className: "flex-1 space-y-8",
              children: [
                o.jsxs("div", {
                  className:
                    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-white",
                  children: [
                    o.jsx(Gt, { size: 16, strokeWidth: 2.5 }),
                    o.jsx("span", {
                      className:
                        "text-[11px] font-black uppercase tracking-widest",
                      children: "Zero-Trust Architecture",
                    }),
                  ],
                }),
                o.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-black leading-tight tracking-tight",
                  children: "Why trust SecureGen?",
                }),
                o.jsx("p", {
                  className: "text-lg leading-relaxed font-medium",
                  children:
                    "We do not store your raw passwords. We store encrypted hashes. Even in the highly unlikely event our database is compromised, your data remains a jumbled mess of characters impossible to decipher without your key.",
                }),
                o.jsxs("ul", {
                  className: "space-y-5 pt-4",
                  children: [
                    o.jsx(tc, { text: "Strict API validation middleware." }),
                    o.jsx(tc, { text: "Bcrypt hashing for Master Passwords." }),
                    o.jsx(tc, { text: "AES-256 cipher for Vault Entries." }),
                  ],
                }),
              ],
            }),
            o.jsx("div", {
              className: "flex-1 w-full flex justify-center",
              children: o.jsxs("div", {
                className:
                  "relative w-full max-w-sm aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full animate-pulse",
                  }),
                  o.jsx(sv, {
                    size: 80,
                    strokeWidth: 1.5,
                    className:
                      "text-indigo-400 mb-6 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]",
                  }),
                  o.jsx("h3", {
                    className: "text-2xl font-black  mb-2",
                    children: "Encryption isn't a feature.",
                  }),
                  o.jsx("p", {
                    className: " font-bold uppercase tracking-widest text-xs",
                    children: "It's the foundation.",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
      o.jsxs("section", {
        className: "w-full max-w-5xl px-6 py-32 relative z-10",
        children: [
          o.jsx("h2", {
            className:
              "text-4xl font-black text-center mb-16 text-stone-900 dark:text-white tracking-tight",
            children: "Simple, Transparent Pricing.",
          }),
          o.jsxs("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",
            children: [
              o.jsx(bm, {
                title: "Core Vault",
                price: "$0",
                desc: "Perfect for individuals.",
                features: [
                  "Unlimited Passwords",
                  "Password Generator",
                  "Cloud Sync",
                  "PWA Mobile Access",
                ],
              }),
              o.jsx(bm, {
                title: "Secure Pro",
                price: "$5",
                period: "/mo",
                desc: "For security enthusiasts.",
                recommended: !0,
                features: [
                  "Advanced Security Insights",
                  "Priority Support",
                  "Encrypted JSON Backups",
                  "Early Access Features",
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className: "w-full max-w-3xl px-6 pb-32 relative z-10",
        children: [
          o.jsx("h2", {
            className:
              "text-3xl font-black text-center mb-12 text-stone-900 dark:text-white tracking-tight",
            children: "Frequently Asked Questions",
          }),
          o.jsxs("div", {
            className: "space-y-4",
            children: [
              o.jsx(ac, {
                q: "Is my data stored in the browser?",
                a: "No. Browser local storage is highly vulnerable to XSS attacks. All sensitive data is encrypted and stored securely in our cloud database, and session tokens are locked in HttpOnly cookies.",
              }),
              o.jsx(ac, {
                q: "What happens if I lose my Master Password?",
                a: "Because we use a Zero-Knowledge architecture, we cannot recover or reset your Master Password. If you lose it, your vault data cannot be decrypted.",
              }),
              o.jsx(ac, {
                q: "Can I export my passwords?",
                a: "Yes! You can download a structured JSON backup of your entire vault at any time from your dashboard.",
              }),
            ],
          }),
        ],
      }),
      o.jsx("section", {
        className: "w-full px-6 pb-24 relative z-10",
        children: o.jsxs("div", {
          className:
            "w-full max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 text-center rounded-[3.5rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-purple-900/20",
          children: [
            o.jsx("div", {
              className:
                "absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay",
            }),
            o.jsxs("div", {
              className: "relative z-10",
              children: [
                o.jsxs("h2", {
                  className:
                    "text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight",
                  children: [
                    "Start Protecting Your ",
                    o.jsx("br", {}),
                    " Digital Identity Today.",
                  ],
                }),
                o.jsx("div", {
                  className:
                    "flex flex-col sm:flex-row justify-center gap-5 mt-12",
                  children: o.jsx(qt, {
                    to: "/register",
                    className: `px-10 py-5 bg-white text-indigo-900 dark:text-teal-900 rounded-2xl font-black text-lg shadow-2xl hover:-translate-y-1 transition-all ${ec}`,
                    children: "Create Free Account",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Pr({ icon: n, value: s, label: c }) {
  return o.jsxs("div", {
    className: "flex flex-col items-center text-center space-y-3 p-4",
    children: [
      o.jsx("div", {
        className:
          "text-indigo-500 dark:text-teal-400 mb-2 p-4 bg-indigo-50 dark:bg-zinc-800/50 rounded-2xl shadow-inner",
        children: bi.cloneElement(n, { size: 28, strokeWidth: 2 }),
      }),
      o.jsx("p", {
        className:
          "text-3xl font-black text-stone-900 dark:text-white tracking-tight",
        children: s,
      }),
      o.jsx("p", {
        className:
          "text-[11px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500",
        children: c,
      }),
    ],
  });
}
function un({ icon: n, title: s, desc: c, color: u, bg: d }) {
  return o.jsxs("div", {
    className:
      "p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white dark:border-zinc-800 shadow-xl shadow-stone-200/40 dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
    children: [
      o.jsx("div", {
        className: `mb-6 p-4 rounded-2xl w-fit shadow-inner ${d} ${u}`,
        children: bi.cloneElement(n, { size: 28, strokeWidth: 2.5 }),
      }),
      o.jsx("h3", {
        className:
          "text-2xl font-black mb-3 text-stone-900 dark:text-white tracking-tight",
        children: s,
      }),
      o.jsx("p", {
        className:
          "text-sm font-bold text-stone-500 dark:text-zinc-400 leading-relaxed",
        children: c,
      }),
    ],
  });
}
function tc({ text: n }) {
  return o.jsxs("li", {
    className: "flex items-center gap-4",
    children: [
      o.jsx("div", {
        className:
          "min-w-[24px] h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shadow-inner",
        children: o.jsx(Si, {
          size: 14,
          strokeWidth: 3,
          className: "text-white",
        }),
      }),
      o.jsx("span", { className: "font-bold  tracking-wide", children: n }),
    ],
  });
}
function bm({
  title: n,
  price: s,
  period: c,
  desc: u,
  features: d,
  recommended: h,
}) {
  return o.jsxs("div", {
    className: `p-10 rounded-[2.5rem] border-2 relative transition-all hover:-translate-y-1 ${h ? "bg-stone-900 text-white border-stone-900 dark:bg-zinc-900 dark:border-zinc-700 shadow-2xl shadow-indigo-900/20" : "bg-white/60 backdrop-blur-xl text-stone-900 border-stone-100 dark:bg-zinc-900/40 dark:text-white dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none"}`,
    children: [
      h &&
        o.jsx("div", {
          className:
            "absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg",
          children: "Most Popular",
        }),
      o.jsx("h3", { className: "text-2xl font-black mb-1", children: n }),
      o.jsx("p", {
        className: `text-sm font-bold mb-6 ${h ? "text-stone-400" : "text-stone-500 dark:text-zinc-400"}`,
        children: u,
      }),
      o.jsxs("div", {
        className:
          "flex items-baseline gap-1 mb-8 pb-8 border-b border-stone-200/20 dark:border-zinc-800",
        children: [
          o.jsx("span", {
            className: "text-5xl font-black tracking-tight",
            children: s,
          }),
          c &&
            o.jsx("span", { className: "font-bold opacity-60", children: c }),
        ],
      }),
      o.jsx("ul", {
        className: "space-y-4 mb-10",
        children: d.map((m, g) =>
          o.jsxs(
            "li",
            {
              className:
                "flex items-center gap-3 text-sm font-bold opacity-90 tracking-wide",
              children: [
                o.jsx(Si, {
                  size: 18,
                  strokeWidth: 3,
                  className: h ? "text-indigo-400" : "text-emerald-500",
                }),
                " ",
                m,
              ],
            },
            g,
          ),
        ),
      }),
      o.jsxs("button", {
        className: `w-full py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 ${h ? "bg-white text-stone-900 hover:bg-stone-100 shadow-xl" : "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"}`,
        children: ["Choose ", n],
      }),
    ],
  });
}
function ac({ q: n, a: s }) {
  return o.jsxs("details", {
    className:
      "group p-6 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-stone-100 dark:border-zinc-800 cursor-pointer shadow-sm hover:shadow-md transition-all",
    children: [
      o.jsxs("summary", {
        className:
          "flex justify-between items-center font-black text-lg text-stone-900 dark:text-zinc-100 list-none tracking-tight",
        children: [
          n,
          o.jsx("div", {
            className:
              "p-2 rounded-full bg-stone-100 dark:bg-zinc-800 group-open:bg-indigo-100 dark:group-open:bg-teal-900/30 transition-colors",
            children: o.jsx(Yy, {
              size: 18,
              strokeWidth: 3,
              className:
                "transition-transform duration-300 group-open:rotate-180 group-open:text-indigo-600 dark:group-open:text-teal-400",
            }),
          }),
        ],
      }),
      o.jsx("p", {
        className:
          "mt-4 text-sm font-semibold text-stone-500 dark:text-zinc-400 leading-relaxed pr-8",
        children: s,
      }),
    ],
  });
}
const ym = "active:scale-[0.97] transition-transform duration-200 ease-out";
function s4({ isDark: n }) {
  return o.jsxs("div", {
    className:
      "w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className:
          "fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]",
          }),
          o.jsx("div", {
            className:
              "absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_2s]",
          }),
        ],
      }),
      o.jsxs("section", {
        className:
          "relative w-full max-w-5xl px-6 py-24 md:py-32 text-center z-10",
        children: [
          o.jsxs("div", {
            className: "relative inline-flex justify-center mb-6",
            children: [
              o.jsx("div", {
                className:
                  "absolute inset-0 bg-indigo-500/20 dark:bg-teal-500/20 blur-2xl rounded-full animate-pulse",
              }),
              o.jsxs("div", {
                className:
                  "relative p-5 bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-indigo-900/10 dark:shadow-black/50 transform rotate-6 hover:rotate-0 transition-transform duration-500",
                children: [
                  o.jsx("img", {
                    src: "/logo2.png",
                    alt: "SecureGen Logo",
                    className:
                      "w-16 h-16 object-contain animate-[pulse_3s_ease-in-out_infinite]",
                    onError: (s) => {
                      ((s.target.style.display = "none"),
                        (s.target.nextSibling.style.display = "block"));
                    },
                  }),
                  o.jsx("div", {
                    style: { display: "none" },
                    children: o.jsx(gn, {
                      size: 64,
                      strokeWidth: 2,
                      className:
                        "text-indigo-600 dark:text-teal-400 fill-indigo-50 dark:fill-teal-500/10",
                    }),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("h1", {
            className:
              "text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1] mb-6",
            children: [
              "Security Without ",
              o.jsx("br", {}),
              o.jsx("span", {
                className:
                  "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-500 drop-shadow-sm",
                children: "Compromise.",
              }),
            ],
          }),
          o.jsx("p", {
            className:
              "text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed",
            children:
              "SecureGen eliminates insecure browser storage, replacing it with a beautifully designed, military-grade encrypted cloud vault.",
          }),
        ],
      }),
      o.jsxs("section", {
        className:
          "w-full max-w-6xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10",
        children: [
          o.jsxs("div", {
            className:
              "p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-rose-100 dark:border-rose-900/30 shadow-2xl shadow-rose-900/5 relative overflow-hidden group",
            children: [
              o.jsx("div", {
                className:
                  "absolute -top-20 -right-20 w-64 h-64 bg-rose-400/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-rose-400/30 transition-colors",
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4 mb-8 relative z-10",
                children: [
                  o.jsx("div", {
                    className:
                      "p-4 bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 rounded-2xl shadow-inner",
                    children: o.jsx(Qy, { size: 32, strokeWidth: 2.5 }),
                  }),
                  o.jsx("h2", {
                    className:
                      "text-3xl font-black text-stone-900 dark:text-white tracking-tight",
                    children: "The Problem",
                  }),
                ],
              }),
              o.jsxs("p", {
                className:
                  "text-stone-600 dark:text-zinc-400 mb-8 font-semibold text-lg relative z-10",
                children: [
                  "Traditional web tools rely on",
                  " ",
                  o.jsx("strong", {
                    className: "text-rose-600 dark:text-rose-400",
                    children: "Local Storage",
                  }),
                  ", leaving you exposed:",
                ],
              }),
              o.jsxs("ul", {
                className: "space-y-4 relative z-10",
                children: [
                  o.jsx(Ir, {
                    text: "Browser storage allows easy plaintext inspection.",
                  }),
                  o.jsx(Ir, {
                    text: "No mechanism for secure, automated session expiration.",
                  }),
                  o.jsx(Ir, {
                    text: "Highly vulnerable to Cross-Site Scripting (XSS).",
                  }),
                  o.jsx(Ir, {
                    text: "Lacks modern cryptographic encryption standards.",
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className:
              "p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-2xl shadow-emerald-900/5 relative overflow-hidden group",
            children: [
              o.jsx("div", {
                className:
                  "absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-400/30 transition-colors",
              }),
              o.jsxs("div", {
                className: "flex items-center gap-4 mb-8 relative z-10",
                children: [
                  o.jsx("div", {
                    className:
                      "p-4 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-2xl shadow-inner",
                    children: o.jsx(Si, { size: 32, strokeWidth: 2.5 }),
                  }),
                  o.jsx("h2", {
                    className:
                      "text-3xl font-black text-stone-900 dark:text-white tracking-tight",
                    children: "Our Solution",
                  }),
                ],
              }),
              o.jsxs("p", {
                className:
                  "text-stone-600 dark:text-zinc-400 mb-8 font-semibold text-lg relative z-10",
                children: [
                  "SecureGen adopts a",
                  " ",
                  o.jsx("strong", {
                    className: "text-emerald-600 dark:text-emerald-400",
                    children: "Zero-Trust Architecture",
                  }),
                  " ",
                  "via the cloud:",
                ],
              }),
              o.jsxs("ul", {
                className: "space-y-4 relative z-10",
                children: [
                  o.jsx(es, {
                    text: "End-to-end AES-256 encrypted database vault.",
                  }),
                  o.jsx(es, {
                    text: "Strict HttpOnly Cookies eradicate XSS token theft.",
                  }),
                  o.jsx(es, {
                    text: "JWT-based stateless, expirable authentication.",
                  }),
                  o.jsx(es, {
                    text: "Backend routes locked behind validation middleware.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className:
          "w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-black  py-32 my-12 relative overflow-hidden shadow-2xl",
        children: [
          o.jsx("div", {
            className:
              "absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50",
          }),
          o.jsx("div", {
            className: "max-w-6xl mx-auto px-6 relative z-10",
            children: o.jsxs("div", {
              className: "flex flex-col lg:flex-row gap-16 items-center",
              children: [
                o.jsxs("div", {
                  className: "flex-1 space-y-8",
                  children: [
                    o.jsxs("div", {
                      className:
                        "text-white inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300",
                      children: [
                        o.jsx(Gt, { size: 16, strokeWidth: 2.5 }),
                        o.jsx("span", {
                          className:
                            "  text-[11px] font-black uppercase tracking-widest",
                          children: "Core Philosophy",
                        }),
                      ],
                    }),
                    o.jsxs("h2", {
                      className:
                        "text-5xl font-black leading-tight tracking-tight",
                      children: [
                        "Security First. ",
                        o.jsx("br", {}),
                        o.jsx("span", {
                          className: "text-indigo-400",
                          children: "Always.",
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      className:
                        " text-lg leading-relaxed font-medium max-w-xl",
                      children:
                        "We believe security isn't a feature—it's the foundation. Every line of code in SecureGen is written assuming the network is hostile.",
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4",
                      children: [
                        o.jsx(ts, {
                          icon: o.jsx(vl, {}),
                          title: "AES-256",
                          desc: "Military-grade cipher.",
                        }),
                        o.jsx(ts, {
                          icon: o.jsx(uc, {}),
                          title: "Bcrypt Hashing",
                          desc: "Irreversible password hashing.",
                        }),
                        o.jsx(ts, {
                          icon: o.jsx(f2, {}),
                          title: "Strict API",
                          desc: "Middleware validated endpoints.",
                        }),
                        o.jsx(ts, {
                          icon: o.jsx(_v, {}),
                          title: "No Local Trace",
                          desc: "Zero plaintext storage.",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className:
                    "flex-1 flex justify-center relative w-full max-w-md",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute inset-0 bg-indigo-500/30 blur-[100px] rounded-full animate-pulse",
                    }),
                    o.jsx("div", {
                      className:
                        "relative z-10 w-full aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] flex items-center justify-center shadow-2xl shadow-black/50 transform rotate-3 hover:rotate-0 transition-transform duration-700",
                      children: o.jsx(Gt, {
                        size: 160,
                        strokeWidth: 1.5,
                        className:
                          " drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      o.jsxs("section", {
        className: "w-full max-w-6xl px-6 py-24 relative z-10",
        children: [
          o.jsxs("div", {
            className: "text-center mb-16",
            children: [
              o.jsx("h2", {
                className:
                  "text-4xl font-black text-stone-900 dark:text-white mb-4 tracking-tight",
                children: "Built on Modern Architecture",
              }),
              o.jsx("p", {
                className:
                  "text-stone-500 dark:text-zinc-400 font-bold text-lg",
                children:
                  "Transparency is key to trust. Here is what powers SecureGen.",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
            children: [
              o.jsx(as, {
                icon: o.jsx(Jy, {}),
                title: "React & Vite",
                desc: "Fast, component-based frontend rendering.",
              }),
              o.jsx(as, {
                icon: o.jsx(uc, {}),
                title: "Node & Express",
                desc: "Robust, scalable backend API infrastructure.",
              }),
              o.jsx(as, {
                icon: o.jsx(Fm, {}),
                title: "MongoDB Atlas",
                desc: "Flexible, document-based cloud storage.",
              }),
              o.jsx(as, {
                icon: o.jsx(vl, {}),
                title: "JWT & Bcrypt",
                desc: "Industry standard auth & hashing protocols.",
              }),
            ],
          }),
        ],
      }),
      o.jsx("section", {
        className: "w-full max-w-5xl px-6 pb-32 relative z-10",
        children: o.jsxs("div", {
          className:
            "w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 text-center rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/20",
          children: [
            o.jsx("div", {
              className:
                "absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay",
            }),
            o.jsx("div", {
              className:
                "absolute -left-20 -bottom-20 w-80 h-80 bg-white/20 blur-[100px] rounded-full pointer-events-none",
            }),
            o.jsxs("div", {
              className: "relative z-10",
              children: [
                o.jsxs("h2", {
                  className:
                    "text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight",
                  children: [
                    "Ready to Protect Your ",
                    o.jsx("br", {}),
                    " Digital Identity?",
                  ],
                }),
                o.jsx("p", {
                  className:
                    "text-white/80 font-bold mb-10 text-lg md:text-xl max-w-2xl mx-auto",
                  children:
                    "Join the secure, encrypted future of password management.",
                }),
                o.jsxs("div", {
                  className: "flex flex-col sm:flex-row justify-center gap-5",
                  children: [
                    o.jsx(qt, {
                      to: "/register",
                      className: `px-10 py-4 bg-white text-indigo-900 dark:text-teal-900 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all ${ym}`,
                      children: "Create Account",
                    }),
                    o.jsx(qt, {
                      to: "/login",
                      className: `px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-colors ${ym}`,
                      children: "Login to Vault",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function Ir({ text: n }) {
  return o.jsxs("li", {
    className: "flex items-start gap-4",
    children: [
      o.jsx("div", {
        className:
          "mt-1.5 min-w-[8px] h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]",
      }),
      o.jsx("span", {
        className:
          "text-[15px] font-bold text-stone-700 dark:text-zinc-300 leading-snug",
        children: n,
      }),
    ],
  });
}
function es({ text: n }) {
  return o.jsxs("li", {
    className: "flex items-start gap-4",
    children: [
      o.jsx("div", {
        className:
          "mt-1.5 min-w-[8px] h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]",
      }),
      o.jsx("span", {
        className:
          "text-[15px] font-bold text-stone-700 dark:text-zinc-300 leading-snug",
        children: n,
      }),
    ],
  });
}
function ts({ icon: n, title: s, desc: c }) {
  return o.jsxs("div", {
    className:
      "p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group",
    children: [
      o.jsx("div", {
        className:
          "mb-4 bg-indigo-500/20 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform",
        children: bi.cloneElement(n, { size: 24, strokeWidth: 2 }),
      }),
      o.jsx("h3", {
        className: "font-black  mb-1.5 text-lg tracking-wide",
        children: s,
      }),
      o.jsx("p", {
        className: "text-sm font-medium leading-relaxed",
        children: c,
      }),
    ],
  });
}
function as({ icon: n, title: s, desc: c }) {
  return o.jsxs("div", {
    className:
      "flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group",
    children: [
      o.jsx("div", {
        className:
          "mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 text-indigo-600 dark:text-teal-400 shadow-inner group-hover:scale-110 transition-transform",
        children: bi.cloneElement(n, { size: 32, strokeWidth: 2 }),
      }),
      o.jsx("h3", {
        className:
          "font-black text-xl text-stone-900 dark:text-white mb-3 tracking-tight",
        children: s,
      }),
      o.jsx("p", {
        className:
          "text-sm font-bold text-stone-500 dark:text-zinc-400 leading-relaxed",
        children: c,
      }),
    ],
  });
}
const o4 = "active:scale-[0.97] transition-transform duration-200 ease-out";
function u4() {
  const [n, s] = j.useState({
      name: "",
      email: "",
      subject: "General Support",
      message: "",
    }),
    [c, u] = j.useState(!1),
    d = (g) => {
      (g.preventDefault(),
        u(!0),
        setTimeout(() => {
          (nt.success("Message sent securely.", {
            icon: "🚀",
            style: { borderRadius: "12px", background: "#333", color: "#fff" },
          }),
            u(!1),
            s({
              name: "",
              email: "",
              subject: "General Support",
              message: "",
            }));
        }, 1500));
    },
    h = (g) => s({ ...n, [g.target.name]: g.target.value }),
    m = [
      {
        title: "LinkedIn",
        icon: o.jsx(Rv, { size: 20 }),
        href: "http://www.linkedin.com/in/ruchit-thakkar-38ab37379",
        color: "text-blue-600 dark:text-blue-400",
        bgHover: "group-hover:bg-blue-500/10",
        border: "group-hover:border-blue-500/50",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
      },
      {
        title: "X / Twitter",
        icon: o.jsx(p2, { size: 20 }),
        href: "https://x.com/RuchitThakkar19",
        color: "text-stone-800 dark:text-white",
        bgHover: "group-hover:bg-stone-500/10",
        border: "group-hover:border-stone-500/50",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(120,113,108,0.3)]",
      },
      {
        title: "Instagram",
        icon: o.jsx(wv, { size: 20 }),
        href: "https://www.instagram.com/ruchit1744",
        color: "text-pink-600 dark:text-pink-400",
        bgHover: "group-hover:bg-pink-500/10",
        border: "group-hover:border-pink-500/50",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]",
      },
      {
        title: "GitHub",
        icon: o.jsx(fv, { size: 20 }),
        href: "https://github.com/Ruchit-thakkar",
        color: "text-purple-600 dark:text-purple-300",
        bgHover: "group-hover:bg-purple-500/10",
        border: "group-hover:border-purple-500/50",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]",
      },
    ];
  return o.jsxs("div", {
    className:
      "w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden",
    children: [
      o.jsxs("div", {
        className:
          "fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden",
        children: [
          o.jsx("div", {
            className:
              "absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]",
          }),
          o.jsx("div", {
            className:
              "absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_3s]",
          }),
        ],
      }),
      o.jsxs("section", {
        className: "relative w-full max-w-5xl px-6 py-20 text-center z-10",
        children: [
          o.jsxs("div", {
            className:
              "inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 shadow-sm mx-auto backdrop-blur-md",
            children: [
              o.jsxs("span", {
                className: "relative flex h-2.5 w-2.5",
                children: [
                  o.jsx("span", {
                    className:
                      "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75",
                  }),
                  o.jsx("span", {
                    className:
                      "relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500",
                  }),
                ],
              }),
              o.jsx("span", {
                className:
                  "text-[10px] font-black uppercase tracking-widest text-stone-600 dark:text-zinc-300",
                children: "Support Systems Online",
              }),
            ],
          }),
          o.jsxs("h1", {
            className:
              "text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1] mb-6",
            children: [
              "Get in",
              " ",
              o.jsx("span", {
                className:
                  "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-cyan-400 dark:to-blue-500 drop-shadow-sm",
                children: "Touch",
              }),
            ],
          }),
          o.jsxs("p", {
            className:
              "text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed",
            children: [
              "Have questions, feedback, or security concerns? Every message is handled with strict",
              " ",
              o.jsx("span", {
                className: "text-stone-800 dark:text-white",
                children: "confidentiality and care.",
              }),
            ],
          }),
        ],
      }),
      o.jsxs("section", {
        className:
          "w-full max-w-6xl px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10",
        children: [
          o.jsxs("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
              o.jsxs("div", {
                className:
                  "p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-stone-100 dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none",
                children: [
                  o.jsx("h3", {
                    className:
                      "font-black text-stone-900 dark:text-white mb-6 uppercase tracking-widest text-xs",
                    children: "Our Commitment",
                  }),
                  o.jsxs("ul", {
                    className: "space-y-4",
                    children: [
                      o.jsx(lc, { text: "End-to-End Encryption" }),
                      o.jsx(lc, { text: "Under 24h Response Time" }),
                      o.jsx(lc, { text: "Strict GDPR Compliance" }),
                    ],
                  }),
                ],
              }),
              o.jsx("div", {
                className: "grid grid-cols-2 gap-4 pt-2",
                children: m.map((g, b) =>
                  o.jsxs(
                    "a",
                    {
                      href: g.href,
                      target: "_blank",
                      rel: "noreferrer",
                      className: `group relative overflow-hidden rounded-2xl bg-white border border-stone-200 p-5 transition-all duration-500 hover:-translate-y-1 dark:bg-[#12121A] dark:border-white/5 ${g.border} ${g.glow} shadow-lg shadow-stone-200/50 dark:shadow-none`,
                      children: [
                        o.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        }),
                        o.jsxs("div", {
                          className:
                            "relative z-10 flex flex-col justify-between h-full gap-3",
                          children: [
                            o.jsxs("div", {
                              className: "flex justify-between items-start",
                              children: [
                                o.jsx("div", {
                                  className: `p-2.5 rounded-xl bg-stone-50 dark:bg-white/5 backdrop-blur-md ${g.color} transition-transform duration-300 group-hover:scale-110 ${g.bgHover}`,
                                  children: g.icon,
                                }),
                                o.jsx(My, {
                                  size: 16,
                                  className:
                                    "text-stone-300 dark:text-zinc-600 transition-all duration-300 group-hover:text-stone-900 dark:group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1",
                                }),
                              ],
                            }),
                            o.jsx("span", {
                              className:
                                "text-sm font-bold text-stone-500 dark:text-zinc-400 group-hover:text-stone-900 dark:group-hover:text-white transition-colors",
                              children: g.title,
                            }),
                          ],
                        }),
                      ],
                    },
                    b,
                  ),
                ),
              }),
            ],
          }),
          o.jsx("div", {
            className: "lg:col-span-3",
            children: o.jsxs("div", {
              className:
                "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-orange-900/10 dark:shadow-black/50 border border-white dark:border-zinc-800 relative overflow-hidden",
              children: [
                o.jsx("div", {
                  className:
                    "h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-600",
                }),
                o.jsxs("div", {
                  className: "mb-10 mt-2",
                  children: [
                    o.jsx("h2", {
                      className:
                        "text-3xl font-black text-stone-900 dark:text-white tracking-tight",
                      children: "Send a Message",
                    }),
                    o.jsx("p", {
                      className:
                        "text-stone-500 dark:text-zinc-400 font-bold mt-2",
                      children:
                        "Fill out the form and our team will get back to you securely.",
                    }),
                  ],
                }),
                o.jsxs("form", {
                  onSubmit: d,
                  className: "space-y-6",
                  children: [
                    o.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                      children: [
                        o.jsxs("div", {
                          className: "relative group",
                          children: [
                            o.jsx("input", {
                              id: "name",
                              name: "name",
                              type: "text",
                              placeholder: " ",
                              required: !0,
                              value: n.name,
                              onChange: h,
                              className:
                                "peer w-full px-5 pt-7 pb-3 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                            }),
                            o.jsx("label", {
                              htmlFor: "name",
                              className:
                                "absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-orange-600 dark:peer-focus:text-cyan-400 cursor-text",
                              children: "Full Name",
                            }),
                          ],
                        }),
                        o.jsxs("div", {
                          className: "relative group",
                          children: [
                            o.jsx("input", {
                              id: "email",
                              name: "email",
                              type: "email",
                              placeholder: " ",
                              required: !0,
                              value: n.email,
                              onChange: h,
                              className:
                                "peer w-full px-5 pt-7 pb-3 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                            }),
                            o.jsx("label", {
                              htmlFor: "email",
                              className:
                                "absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-orange-600 dark:peer-focus:text-cyan-400 cursor-text",
                              children: "Email Address",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "relative",
                      children: [
                        o.jsxs("select", {
                          name: "subject",
                          value: n.subject,
                          onChange: h,
                          className:
                            "w-full px-5 py-4 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white appearance-none cursor-pointer focus:bg-white dark:focus:bg-zinc-900 shadow-inner",
                          children: [
                            o.jsx("option", { children: "General Support" }),
                            o.jsx("option", { children: "Account Issue" }),
                            o.jsx("option", {
                              children: "Security Vulnerability Report",
                            }),
                            o.jsx("option", { children: "Business Inquiry" }),
                          ],
                        }),
                        o.jsx("div", {
                          className:
                            "absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400",
                          children: o.jsx($m, {
                            size: 16,
                            className: "rotate-90",
                            strokeWidth: 3,
                          }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "relative group",
                      children: [
                        o.jsx(Lv, {
                          className:
                            "absolute left-5 top-5 text-orange-300 dark:text-zinc-600 group-focus-within:text-orange-500 dark:group-focus-within:text-cyan-400 transition-colors z-10",
                          size: 20,
                        }),
                        o.jsx("textarea", {
                          name: "message",
                          required: !0,
                          rows: "5",
                          placeholder: "How can we help you today?",
                          value: n.message,
                          onChange: h,
                          className:
                            "w-full pl-12 pr-5 py-5 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner resize-none custom-scrollbar",
                        }),
                      ],
                    }),
                    o.jsx("button", {
                      disabled: c,
                      className: `w-full py-4 rounded-2xl font-black text-[15px] text-white shadow-xl shadow-pink-500/20 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-500 dark:hover:to-blue-500 dark:text-zinc-950 flex items-center justify-center gap-2 mt-4 transition-all duration-300 ${o4} disabled:opacity-70`,
                      children: c
                        ? o.jsx("span", {
                            className:
                              "animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full",
                          })
                        : o.jsxs(o.Fragment, {
                            children: [
                              " ",
                              "Send Secure Message",
                              " ",
                              o.jsx(t2, { size: 18, strokeWidth: 2.5 }),
                              " ",
                            ],
                          }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function lc({ text: n }) {
  return o.jsxs("li", {
    className: "flex items-center gap-4",
    children: [
      o.jsx("div", {
        className:
          "w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shadow-inner",
        children: o.jsx(Si, {
          size: 16,
          strokeWidth: 3,
          className: "text-emerald-500",
        }),
      }),
      o.jsx("span", {
        className:
          "font-bold text-[15px] text-stone-700 dark:text-zinc-300 tracking-wide",
        children: n,
      }),
    ],
  });
}
const c4 = [
    {
      id: "Social",
      icon: o.jsx(np, { size: 18 }),
      color: "text-blue-600 dark:text-blue-400",
      bgActive:
        "bg-blue-100 border-blue-400 dark:bg-blue-500/20 dark:border-blue-500",
      bgInactive:
        "bg-blue-50/50 border-blue-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Banking",
      icon: o.jsx(Pm, { size: 18 }),
      color: "text-emerald-600 dark:text-emerald-400",
      bgActive:
        "bg-emerald-100 border-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500",
      bgInactive:
        "bg-emerald-50/50 border-emerald-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Work",
      icon: o.jsx(Jm, { size: 18 }),
      color: "text-purple-600 dark:text-purple-400",
      bgActive:
        "bg-purple-100 border-purple-400 dark:bg-purple-500/20 dark:border-purple-500",
      bgInactive:
        "bg-purple-50/50 border-purple-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Other",
      icon: o.jsx(Km, { size: 18 }),
      color: "text-amber-600 dark:text-amber-400",
      bgActive:
        "bg-amber-100 border-amber-400 dark:bg-amber-500/20 dark:border-amber-500",
      bgInactive:
        "bg-amber-50/50 border-amber-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
  ],
  cn = "active:scale-[0.96] transition-transform duration-200 ease-out";
function d4({ setGlobalGeneratedPassword: n }) {
  const [s, c] = j.useState(14),
    [u, d] = j.useState(""),
    [h, m] = j.useState(!0),
    [g, b] = j.useState(!1),
    [x, v] = j.useState(!1),
    [y, R] = j.useState(!1),
    [G, A] = j.useState({ title: "", desc: "", category: "Other" }),
    H = j.useMemo(() => {
      let $ = 0;
      return u
        ? (u.length > 8 && ($ += 1),
          u.length > 12 && ($ += 1),
          /[A-Z]/.test(u) && ($ += 1),
          /[0-9]/.test(u) && ($ += 1),
          /[^A-Za-z0-9]/.test(u) && ($ += 1),
          $)
        : 0;
    }, [u]),
    T = {
      0: {
        label: "Too Short",
        color: "from-stone-400 to-stone-500",
        text: "text-stone-500",
        width: "5%",
        shadow: "shadow-none",
      },
      1: {
        label: "Weak",
        color: "from-rose-400 to-rose-600",
        text: "text-rose-600 dark:text-rose-400",
        width: "20%",
        shadow: "shadow-rose-500/40",
      },
      2: {
        label: "Fair",
        color: "from-orange-400 to-orange-600",
        text: "text-orange-600 dark:text-orange-400",
        width: "40%",
        shadow: "shadow-orange-500/40",
      },
      3: {
        label: "Good",
        color: "from-amber-300 to-amber-500",
        text: "text-amber-600 dark:text-amber-400",
        width: "60%",
        shadow: "shadow-amber-500/40",
      },
      4: {
        label: "Strong",
        color: "from-emerald-400 to-emerald-600",
        text: "text-emerald-600 dark:text-emerald-400",
        width: "80%",
        shadow: "shadow-emerald-500/40",
      },
      5: {
        label: "Excellent",
        color:
          "from-indigo-500 to-purple-600 dark:from-teal-400 dark:to-emerald-500",
        text: "text-indigo-600 dark:text-teal-400",
        width: "100%",
        shadow: "shadow-indigo-500/50 dark:shadow-teal-400/40",
      },
    },
    Y = T[H] || T[0],
    V = () => {
      R(!0);
      const D = h
        ? "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*()_+"
        : "0123456789";
      let P = "";
      for (let ie = 0; ie < s; ie++)
        P += D.charAt(Math.floor(Math.random() * D.length));
      setTimeout(() => {
        (d(P), n && n(P), v(!1), R(!1));
      }, 150);
    };
  j.useEffect(() => {
    V();
  }, [s, h]);
  const X = () => {
      (navigator.clipboard.writeText(u),
        v(!0),
        nt.success("Password Copied", {
          icon: "✨",
          style: { borderRadius: "12px", background: "#333", color: "#fff" },
        }),
        setTimeout(() => v(!1), 2e3));
    },
    ae = async () => {
      if (!G.title) return nt.error("Title is required");
      try {
        (
          await Ue.post(
            "https://securegen-encrypted-vault.onrender.com/api/vault/add",
            {
              title: G.title,
              password: u,
              category: G.category,
              description: G.desc,
              securityLevel: H,
            },
            { withCredentials: !0 },
          )
        ).data.success &&
          (nt.success("Saved to Cloud Vault"),
          b(!1),
          A({ title: "", desc: "", category: "Other" }));
      } catch ($) {
        console.error($);
        const ue = $.response?.data?.message || "Failed to save entry";
        nt.error(ue);
      }
    };
  return o.jsxs("div", {
    className:
      "relative space-y-8 max-w-lg mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500",
    children: [
      o.jsx("div", {
        className: "relative group perspective-1000",
        children: o.jsxs("div", {
          onClick: X,
          className: `relative overflow-hidden rounded-[2rem] p-8 pb-14 text-center transition-all duration-300 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80 dark:bg-none dark:bg-zinc-900/60 backdrop-blur-xl border border-indigo-100/60 dark:border-zinc-800/60 shadow-xl shadow-indigo-900/5 dark:shadow-black/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300/60 dark:hover:border-teal-500/30 cursor-pointer ${cn}`,
          children: [
            o.jsx("div", {
              className: "absolute top-4 inset-x-0 flex justify-center",
              children: o.jsxs("div", {
                className: `px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white dark:bg-zinc-800/80 shadow-sm border border-stone-100 dark:border-zinc-700/50 ${Y.text} transition-colors flex items-center gap-1.5`,
                children: [o.jsx(Gt, { size: 14 }), Y.label],
              }),
            }),
            o.jsx("div", {
              className: `mt-8 font-mono text-3xl md:text-4xl font-black tracking-widest break-all transition-all duration-500 flex justify-center items-center min-h-[80px] ${x ? "text-emerald-500 dark:text-emerald-400 scale-105" : "text-indigo-950 dark:text-zinc-100"} ${y ? "blur-md opacity-0 scale-90 translate-y-2" : "blur-0 opacity-100 scale-100 translate-y-0"}`,
              children: u,
            }),
            o.jsxs("div", {
              className: `absolute bottom-4 right-5 flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${x ? "text-emerald-500" : "text-indigo-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-teal-400"}`,
              children: [
                x
                  ? o.jsx(qy, { size: 14, strokeWidth: 3 })
                  : o.jsx(Wy, { size: 14 }),
                x ? "COPIED" : "CLICK TO COPY",
              ],
            }),
            o.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-2 bg-stone-100 dark:bg-zinc-950",
              children: o.jsx("div", {
                className: `h-full transition-all duration-700 ease-out bg-gradient-to-r ${Y.color} ${Y.shadow}`,
                style: { width: Y.width },
              }),
            }),
          ],
        }),
      }),
      o.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
        children: [
          o.jsxs("div", {
            onClick: () => m(!h),
            className: `flex justify-between items-center p-5 rounded-3xl border transition-all cursor-pointer bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 dark:bg-zinc-900/40 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-zinc-700 ${cn}`,
            children: [
              o.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  o.jsx("div", {
                    className: `p-3 rounded-2xl transition-all duration-300 ${h ? "bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 dark:from-teal-500/20 dark:to-emerald-500/20 dark:text-teal-400" : "bg-stone-100 text-stone-400 dark:bg-zinc-800 dark:text-zinc-500"}`,
                    children: o.jsx(Wm, { size: 22 }),
                  }),
                  o.jsxs("div", {
                    children: [
                      o.jsx("div", {
                        className:
                          "text-sm font-extrabold text-stone-800 dark:text-zinc-200",
                        children: "Complex",
                      }),
                      o.jsx("div", {
                        className:
                          "text-[10px] font-bold text-stone-400 dark:text-zinc-500 uppercase tracking-widest",
                        children: h ? "Symbols & Caps" : "Numbers Only",
                      }),
                    ],
                  }),
                ],
              }),
              o.jsx("div", {
                className: `w-14 h-8 rounded-full transition-all duration-300 relative border-2 ${h ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent dark:from-teal-400 dark:to-emerald-500" : "bg-stone-200 border-stone-200 dark:bg-zinc-800 dark:border-zinc-800"}`,
                children: o.jsx("div", {
                  className: `absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${h ? "translate-x-6" : "translate-x-0"}`,
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className:
              "p-5 rounded-3xl border transition-colors bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 dark:bg-zinc-900/40 dark:border-zinc-800",
            children: [
              o.jsxs("div", {
                className: "flex justify-between items-center mb-5",
                children: [
                  o.jsxs("div", {
                    className:
                      "flex items-center gap-2 text-xs font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-widest",
                    children: [o.jsx(s2, { size: 14 }), " Length"],
                  }),
                  o.jsx("span", {
                    className:
                      "text-sm font-black text-indigo-600 dark:text-teal-400",
                    children: s,
                  }),
                ],
              }),
              o.jsxs("div", {
                className:
                  "relative w-full h-2.5 bg-stone-100 dark:bg-zinc-800 rounded-full shadow-inner",
                children: [
                  o.jsx("div", {
                    className:
                      "absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-teal-400 dark:to-emerald-500 rounded-full transition-all duration-150",
                    style: { width: `${((s - 4) / 28) * 100}%` },
                  }),
                  o.jsx("input", {
                    type: "range",
                    min: "4",
                    max: "32",
                    step: "1",
                    value: s,
                    onChange: ($) => c(Number($.target.value)),
                    className:
                      "absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      o.jsxs("div", {
        className: "flex gap-4",
        children: [
          o.jsxs("button", {
            onClick: V,
            className: `flex-1 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 dark:bg-zinc-900/50 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white transition-all ${cn}`,
            children: [
              o.jsx(tp, {
                size: 18,
                className: y
                  ? "animate-spin text-indigo-500 dark:text-teal-400"
                  : "",
              }),
              o.jsx("span", { className: "text-sm", children: "Regenerate" }),
            ],
          }),
          o.jsxs("button", {
            onClick: () => b(!0),
            className: `flex-1 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:shadow-teal-900/40 transition-all ${cn}`,
            children: [
              o.jsx(Wv, { size: 18 }),
              " ",
              o.jsx("span", {
                className: "text-sm",
                children: "Save to Vault",
              }),
            ],
          }),
        ],
      }),
      g &&
        o.jsxs("div", {
          className:
            "absolute inset-0 z-50 flex flex-col justify-end md:justify-center p-2 md:p-6 animate-in fade-in duration-200",
          children: [
            o.jsx("div", {
              className:
                "absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-md rounded-[2rem] md:rounded-3xl",
              onClick: () => b(!1),
            }),
            o.jsxs("div", {
              className:
                "relative bg-white dark:bg-zinc-950 border border-indigo-50 dark:border-zinc-800 p-6 rounded-[2rem] shadow-2xl animate-in slide-in-from-bottom-8 md:zoom-in-95 duration-300",
              children: [
                o.jsxs("div", {
                  className: "flex justify-between items-center mb-8",
                  children: [
                    o.jsxs("h3", {
                      className:
                        "text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white",
                      children: [
                        o.jsx(Gt, {
                          className: "text-indigo-500 dark:text-teal-400",
                          size: 24,
                        }),
                        " ",
                        "Add to Vault",
                      ],
                    }),
                    o.jsx("button", {
                      onClick: () => b(!1),
                      className:
                        "p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors",
                      children: o.jsx(fs, { size: 18 }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-6 mb-8",
                  children: [
                    o.jsxs("div", {
                      className: "relative",
                      children: [
                        o.jsx("input", {
                          autoFocus: !0,
                          className:
                            "peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent",
                          placeholder: "Title",
                          id: "title",
                          value: G.title,
                          onChange: ($) => A({ ...G, title: $.target.value }),
                        }),
                        o.jsx("label", {
                          htmlFor: "title",
                          className:
                            "absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text",
                          children: "Entry Title",
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest",
                          children: "Category",
                        }),
                        o.jsx("div", {
                          className: "grid grid-cols-4 gap-3",
                          children: c4.map(($) => {
                            const ue = G.category === $.id;
                            return o.jsxs(
                              "button",
                              {
                                onClick: () => A({ ...G, category: $.id }),
                                className: `flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${cn} ${ue ? $.bgActive : $.bgInactive}`,
                                children: [
                                  o.jsx("div", {
                                    className: `${$.color} ${ue ? "scale-110" : "opacity-70"} transition-transform duration-300`,
                                    children: $.icon,
                                  }),
                                  o.jsx("span", {
                                    className: `text-[9px] font-extrabold mt-2 uppercase tracking-widest transition-colors ${ue ? $.color : "text-stone-400 dark:text-zinc-500"}`,
                                    children: $.id,
                                  }),
                                ],
                              },
                              $.id,
                            );
                          }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      className: "relative",
                      children: [
                        o.jsx("input", {
                          className:
                            "peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent",
                          placeholder: "Notes",
                          id: "notes",
                          value: G.desc,
                          onChange: ($) => A({ ...G, desc: $.target.value }),
                        }),
                        o.jsx("label", {
                          htmlFor: "notes",
                          className:
                            "absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text",
                          children: "Optional Notes",
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: ae,
                  className: `w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 dark:hover:to-emerald-500 transition-all ${cn}`,
                  children: "Confirm & Save",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
const xi = [
    {
      id: "Social",
      icon: o.jsx(np, { size: 18 }),
      color: "text-blue-600 dark:text-blue-400",
      bgActive:
        "bg-blue-100 border-blue-400 dark:bg-blue-500/20 dark:border-blue-500",
      bgInactive:
        "bg-blue-50/50 border-blue-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Banking",
      icon: o.jsx(Pm, { size: 18 }),
      color: "text-emerald-600 dark:text-emerald-400",
      bgActive:
        "bg-emerald-100 border-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500",
      bgInactive:
        "bg-emerald-50/50 border-emerald-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Work",
      icon: o.jsx(Jm, { size: 18 }),
      color: "text-purple-600 dark:text-purple-400",
      bgActive:
        "bg-purple-100 border-purple-400 dark:bg-purple-500/20 dark:border-purple-500",
      bgInactive:
        "bg-purple-50/50 border-purple-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
    {
      id: "Other",
      icon: o.jsx(Km, { size: 18 }),
      color: "text-amber-600 dark:text-amber-400",
      bgActive:
        "bg-amber-100 border-amber-400 dark:bg-amber-500/20 dark:border-amber-500",
      bgInactive:
        "bg-amber-50/50 border-amber-100 dark:bg-zinc-900 dark:border-zinc-800",
    },
  ],
  It = "active:scale-[0.96] transition-transform duration-200 ease-out";
function f4() {
  const [n, s] = j.useState([]),
    [c, u] = j.useState(""),
    [d, h] = j.useState("All"),
    [m, g] = j.useState(null),
    [b, x] = j.useState(!0),
    [v, y] = j.useState(!1),
    [R, G] = j.useState({
      title: "",
      password: "",
      category: "Social",
      description: "",
    }),
    A = j.useRef(null);
  j.useEffect(() => {
    H();
  }, []);
  const H = async () => {
      try {
        const D = await Zt.get("/vault/all");
        if (D.data.success) {
          const P = D.data.data.map((ie) => ({ ...ie, id: ie._id }));
          s(P);
        }
      } catch (D) {
        xe.error(D.response?.data?.message || "Server connection error");
      } finally {
        x(!1);
      }
    },
    T = async () => {
      if (!R.title) return xe.error("Title is required");
      if (!R.password) return xe.error("Password is required");
      try {
        const D = await Zt.post("/vault/add", R);
        if (D.data.success) {
          const P = { ...D.data.data, id: D.data.data._id };
          (s([P, ...n]),
            y(!1),
            G({ title: "", password: "", category: "Social", description: "" }),
            xe.success("Entry Added to Vault", { icon: "✨" }));
        }
      } catch (D) {
        xe.error(D.response?.data?.message || "Failed to save to server");
      }
    },
    Y = async () => {
      if (!m.title) return xe.error("Title is required");
      try {
        const D = await Zt.put(`/vault/update/${m.id}`, m);
        D.data.success &&
          (s(
            n.map((P) =>
              P.id === m.id ? { ...D.data.data, id: D.data.data._id } : P,
            ),
          ),
          g(null),
          xe.success("Entry Updated"));
      } catch (D) {
        xe.error(D.response?.data?.message || "Update Failed");
      }
    },
    V = async (D) => {
      try {
        (await Zt.delete(`/vault/delete/${D}`)).data.success &&
          (s(n.filter((ie) => ie.id !== D)), xe.success("Entry Deleted"));
      } catch (P) {
        xe.error(P.response?.data?.message || "Failed to delete entry");
      }
    },
    X = () => {
      if (n.length === 0) return xe.error("Vault is empty");
      const D = new Blob([JSON.stringify(n, null, 2)], {
          type: "application/json",
        }),
        P = URL.createObjectURL(D),
        ie = document.createElement("a");
      ((ie.href = P),
        (ie.download = `securegen_backup_${new Date().toISOString().slice(0, 10)}.json`),
        document.body.appendChild(ie),
        ie.click(),
        document.body.removeChild(ie),
        xe.success("Backup Downloaded"));
    },
    ae = async (D) => {
      const P = D.target.files[0];
      if (!P) return;
      const ie = new FileReader();
      ((ie.onload = async (Ke) => {
        try {
          const Je = JSON.parse(Ke.target.result);
          if (!Array.isArray(Je)) throw new Error("Invalid Backup");
          let Oe = 0;
          for (const at of Je)
            try {
              (await Zt.post("/vault/add", at)).data.success && Oe++;
            } catch {
              console.error("Failed to import item", at.title);
            }
          Oe > 0 && (xe.success(`${Oe} entries restored!`), H());
        } catch {
          xe.error("Restore Failed. Invalid format.");
        }
      }),
        ie.readAsText(P),
        (D.target.value = null));
    },
    $ = () => {
      const D =
        "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*()_+";
      let P = "";
      for (let ie = 0; ie < 16; ie++)
        P += D.charAt(Math.floor(Math.random() * D.length));
      (g({ ...m, password: P }),
        xe.success("New Password Generated", { icon: "✨" }));
    },
    ue = n.filter((D) => {
      const P = D.title.toLowerCase().includes(c.toLowerCase()),
        ie = d === "All" || D.category === d;
      return P && ie;
    });
  return b
    ? o.jsx("div", {
        className: "flex items-center justify-center h-[520px]",
        children: o.jsx("div", {
          className:
            "animate-spin rounded-full h-10 w-10 border-b-4 border-indigo-600 dark:border-teal-400",
        }),
      })
    : o.jsxs("div", {
        className:
          "flex flex-col h-[520px] animate-in fade-in slide-in-from-bottom-4 duration-500 relative max-w-4xl mx-auto w-full",
        children: [
          o.jsxs("div", {
            className: "flex items-center gap-3 mb-5",
            children: [
              o.jsxs("div", {
                className: "relative flex-1 group",
                children: [
                  o.jsx(Iv, {
                    className:
                      "absolute left-4 top-3.5 text-indigo-300 dark:text-zinc-500 transition-colors group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400",
                    size: 18,
                  }),
                  o.jsx("input", {
                    className:
                      "w-full rounded-2xl pl-12 pr-4 py-3 text-sm outline-none transition-all font-bold border-2 bg-indigo-50/30 border-indigo-100 text-indigo-950 focus:border-indigo-500  focus:shadow-lg focus:shadow-indigo-500/10 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-white dark:focus:border-teal-500/50 dark:placeholder:text-zinc-600",
                    placeholder: "Search your secure vault...",
                    value: c,
                    onChange: (D) => u(D.target.value),
                  }),
                ],
              }),
              o.jsx("button", {
                onClick: () => y(!0),
                className: `p-3.5 rounded-2xl transition-all border-2 bg-gradient-to-br from-indigo-600 to-purple-600 border-transparent text-white shadow-lg shadow-purple-500/20 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/40 dark:hover:from-teal-400 dark:hover:to-emerald-500 ${It}`,
                children: o.jsx(ep, { size: 20, strokeWidth: 2.5 }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "flex gap-2 overflow-x-auto pb-4 custom-scrollbar mb-2",
            children: [
              o.jsx("button", {
                onClick: () => h("All"),
                className: `px-5 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border-2 whitespace-nowrap transition-all ${It} ${d === "All" ? "bg-stone-900 text-white border-stone-900 dark:bg-zinc-100 dark:text-zinc-900" : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700"}`,
                children: "All",
              }),
              xi.map((D) =>
                o.jsxs(
                  "button",
                  {
                    onClick: () => h(D.id),
                    className: `flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border-2 whitespace-nowrap transition-all ${It} ${d === D.id ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm dark:bg-teal-500/10 dark:border-teal-500 dark:text-teal-400" : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700"}`,
                    children: [
                      o.jsx("span", {
                        className:
                          d === D.id
                            ? "text-indigo-500 dark:text-teal-400 scale-110 transition-transform"
                            : "text-stone-400 dark:text-zinc-500",
                        children: bi.cloneElement(D.icon, { size: 14 }),
                      }),
                      D.id,
                    ],
                  },
                  D.id,
                ),
              ),
            ],
          }),
          o.jsx("div", {
            className:
              "flex-1 overflow-y-auto space-y-4 pr-1 pb-4 custom-scrollbar",
            children:
              ue.length === 0
                ? o.jsxs("div", {
                    className:
                      "h-48 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-indigo-100 bg-indigo-50/30 text-indigo-300 dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-700",
                    children: [
                      o.jsx(iv, {
                        size: 40,
                        strokeWidth: 1.5,
                        className:
                          "mb-3 opacity-50 text-indigo-400 dark:text-zinc-600",
                      }),
                      o.jsx("p", {
                        className:
                          "text-xs font-extrabold uppercase tracking-widest",
                        children: "Vault is Empty",
                      }),
                    ],
                  })
                : ue.map((D) =>
                    o.jsx(h4, { item: D, onDelete: V, onEdit: g }, D.id),
                  ),
          }),
          o.jsxs("div", {
            className:
              "pt-5 border-t border-indigo-50 dark:border-zinc-800 grid grid-cols-2 gap-4",
            children: [
              o.jsxs("button", {
                onClick: X,
                className: `flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border-2 transition-all bg-white border-indigo-50 text-indigo-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 ${It}`,
                children: [o.jsx(Nc, { size: 16 }), " Backup Vault"],
              }),
              o.jsxs("button", {
                onClick: () => A.current.click(),
                className: `flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border-2 transition-all bg-white border-indigo-50 text-indigo-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 ${It}`,
                children: [o.jsx(g2, { size: 16 }), " Restore JSON"],
              }),
              o.jsx("input", {
                type: "file",
                ref: A,
                onChange: ae,
                className: "hidden",
                accept: ".json",
              }),
            ],
          }),
          v &&
            o.jsxs(vm, {
              onClose: () => y(!1),
              children: [
                o.jsxs("div", {
                  className: "flex justify-between items-center mb-8",
                  children: [
                    o.jsxs("h3", {
                      className:
                        "text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white",
                      children: [
                        o.jsx(Gt, {
                          className: "text-indigo-500 dark:text-teal-400",
                          size: 24,
                        }),
                        " ",
                        "Add Manual Entry",
                      ],
                    }),
                    o.jsx("button", {
                      onClick: () => y(!1),
                      className:
                        "p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors",
                      children: o.jsx(fs, { size: 18 }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-5 mb-8",
                  children: [
                    o.jsx(dn, {
                      id: "title",
                      label: "Entry Title",
                      value: R.title,
                      onChange: (D) => G({ ...R, title: D.target.value }),
                      autoFocus: !0,
                    }),
                    o.jsx(dn, {
                      id: "password",
                      label: "Secure Password",
                      value: R.password,
                      onChange: (D) => G({ ...R, password: D.target.value }),
                      isMono: !0,
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest",
                          children: "Category",
                        }),
                        o.jsx("div", {
                          className: "grid grid-cols-4 gap-3",
                          children: xi.map((D) => {
                            const P = R.category === D.id;
                            return o.jsxs(
                              "button",
                              {
                                onClick: () => G({ ...R, category: D.id }),
                                className: `flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${It} ${P ? D.bgActive : D.bgInactive}`,
                                children: [
                                  o.jsx("div", {
                                    className: `${D.color} ${P ? "scale-110" : "opacity-70"} transition-transform duration-300`,
                                    children: D.icon,
                                  }),
                                  o.jsx("span", {
                                    className: `text-[9px] font-extrabold mt-2 uppercase tracking-widest transition-colors ${P ? D.color : "text-stone-400 dark:text-zinc-500"}`,
                                    children: D.id,
                                  }),
                                ],
                              },
                              D.id,
                            );
                          }),
                        }),
                      ],
                    }),
                    o.jsx(dn, {
                      id: "notes",
                      label: "Optional Notes",
                      value: R.description,
                      onChange: (D) => G({ ...R, description: D.target.value }),
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: T,
                  className: `w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 transition-all ${It}`,
                  children: "Confirm & Save Entry",
                }),
              ],
            }),
          m &&
            o.jsxs(vm, {
              onClose: () => g(null),
              children: [
                o.jsxs("div", {
                  className: "flex justify-between items-center mb-8",
                  children: [
                    o.jsxs("h3", {
                      className:
                        "text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white",
                      children: [
                        o.jsx(Im, {
                          className: "text-indigo-500 dark:text-teal-400",
                          size: 20,
                        }),
                        " ",
                        "Edit Entry",
                      ],
                    }),
                    o.jsx("button", {
                      onClick: () => g(null),
                      className:
                        "p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors",
                      children: o.jsx(fs, { size: 18 }),
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "space-y-5 mb-8",
                  children: [
                    o.jsx(dn, {
                      id: "edit-title",
                      label: "Entry Title",
                      value: m.title,
                      onChange: (D) => g({ ...m, title: D.target.value }),
                    }),
                    o.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        o.jsx("div", {
                          className: "flex-1",
                          children: o.jsx(dn, {
                            id: "edit-password",
                            label: "Secure Password",
                            value: m.password,
                            onChange: (D) =>
                              g({ ...m, password: D.target.value }),
                            isMono: !0,
                          }),
                        }),
                        o.jsx("button", {
                          onClick: $,
                          className: `px-4 rounded-2xl border-2 bg-indigo-50 border-indigo-100 text-indigo-600 hover:bg-indigo-100 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-teal-400 dark:hover:border-teal-500/50 transition-colors ${It}`,
                          children: o.jsx(Zv, { size: 18 }),
                        }),
                      ],
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("label", {
                          className:
                            "text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest",
                          children: "Category",
                        }),
                        o.jsx("div", {
                          className: "grid grid-cols-4 gap-3",
                          children: xi.map((D) => {
                            const P = m.category === D.id;
                            return o.jsxs(
                              "button",
                              {
                                onClick: () => g({ ...m, category: D.id }),
                                className: `flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${It} ${P ? D.bgActive : D.bgInactive}`,
                                children: [
                                  o.jsx("div", {
                                    className: `${D.color} ${P ? "scale-110" : "opacity-70"} transition-transform duration-300`,
                                    children: D.icon,
                                  }),
                                  o.jsx("span", {
                                    className: `text-[9px] font-extrabold mt-2 uppercase tracking-widest transition-colors ${P ? D.color : "text-stone-400 dark:text-zinc-500"}`,
                                    children: D.id,
                                  }),
                                ],
                              },
                              D.id,
                            );
                          }),
                        }),
                      ],
                    }),
                    o.jsx(dn, {
                      id: "edit-notes",
                      label: "Optional Notes",
                      value: m.description,
                      onChange: (D) => g({ ...m, description: D.target.value }),
                    }),
                  ],
                }),
                o.jsx("button", {
                  onClick: Y,
                  className: `w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 transition-all ${It}`,
                  children: "Save Changes",
                }),
              ],
            }),
        ],
      });
}
function vm({ children: n, onClose: s }) {
  return o.jsxs("div", {
    className:
      "absolute inset-0 z-50 flex flex-col justify-end md:justify-center p-2 md:p-6 animate-in fade-in duration-200",
    children: [
      o.jsx("div", {
        className:
          "absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-md rounded-[2rem] md:rounded-3xl",
        onClick: s,
      }),
      o.jsx("div", {
        className:
          "relative bg-white dark:bg-zinc-950 border border-indigo-50 dark:border-zinc-800 p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 animate-in slide-in-from-bottom-8 md:zoom-in-95 duration-300",
        children: n,
      }),
    ],
  });
}
function dn({
  id: n,
  label: s,
  value: c,
  onChange: u,
  autoFocus: d,
  isMono: h,
}) {
  return o.jsxs("div", {
    className: "relative",
    children: [
      o.jsx("input", {
        autoFocus: d,
        id: n,
        value: c,
        onChange: u,
        placeholder: s,
        className: `peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent ${h ? "font-mono tracking-wider" : ""}`,
      }),
      o.jsx("label", {
        htmlFor: n,
        className:
          "absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text",
        children: s,
      }),
    ],
  });
}
function h4({ item: n, onDelete: s, onEdit: c }) {
  const [u, d] = j.useState(!1),
    [h, m] = j.useState(!1),
    g = xi.find((y) => y.id === n.category) || xi[3],
    b = (y) => {
      (y.stopPropagation(),
        navigator.clipboard.writeText(n.password),
        xe.success("Copied", { icon: "✨" }));
    },
    x = () => {
      (d(!u), u && m(!1));
    },
    v =
      "absolute inset-0 w-full h-full rounded-[1.5rem] p-5 border backface-hidden transition-all duration-300";
  return o.jsx("div", {
    className:
      "group relative h-[120px] w-full perspective-1000 cursor-pointer",
    onClick: x,
    children: o.jsxs("div", {
      className: `relative w-full h-full transition-transform duration-500 transform-style-3d ${u ? "rotate-y-180" : ""}`,
      children: [
        o.jsx("div", {
          className: `${v} bg-gradient-to-br from-white to-indigo-50/30 border-indigo-100/60 shadow-lg shadow-indigo-900/5 group-hover:shadow-indigo-500/10 group-hover:border-indigo-300/60 dark:bg-none dark:bg-zinc-900/60 dark:border-zinc-800/60 dark:group-hover:border-teal-500/30 flex flex-col justify-center`,
          children: o.jsxs("div", {
            className: "flex items-center gap-5",
            children: [
              o.jsx("div", {
                className: `w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-105 ${g.bgActive}`,
                children: g.icon,
              }),
              o.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [
                  o.jsx("h3", {
                    className:
                      "font-black text-lg text-stone-900 dark:text-zinc-100 leading-tight truncate",
                    children: n.title,
                  }),
                  o.jsx("p", {
                    className:
                      "text-xs font-bold text-indigo-400 dark:text-zinc-500 mt-1 uppercase tracking-widest truncate",
                    children: n.description || n.category || "Secure Entry",
                  }),
                ],
              }),
              o.jsx("div", {
                className:
                  "ml-auto text-indigo-200 dark:text-zinc-700 transition-transform duration-300 group-hover:rotate-180 group-hover:text-indigo-500 dark:group-hover:text-teal-400",
                children: o.jsx(Jv, { size: 18, strokeWidth: 2.5 }),
              }),
            ],
          }),
        }),
        o.jsxs("div", {
          className: `${v} bg-indigo-50/80 border-indigo-200 dark:bg-zinc-950 dark:border-zinc-800 rotate-y-180 flex flex-col justify-between`,
          children: [
            o.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                o.jsxs("span", {
                  className:
                    "text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 flex items-center gap-1.5",
                  children: [o.jsx(Gt, { size: 12 }), " Protected Data"],
                }),
                o.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    o.jsx("button", {
                      onClick: (y) => {
                        (y.stopPropagation(), c(n));
                      },
                      className:
                        "p-2 bg-white text-indigo-500 shadow-sm rounded-xl hover:bg-indigo-500 hover:text-white dark:bg-zinc-900 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-zinc-900 transition-colors",
                      children: o.jsx(Im, { size: 14, strokeWidth: 2.5 }),
                    }),
                    o.jsx("button", {
                      onClick: (y) => {
                        (y.stopPropagation(), s(n.id));
                      },
                      className:
                        "p-2 bg-white text-rose-500 shadow-sm rounded-xl hover:bg-rose-500 hover:text-white dark:bg-zinc-900 dark:text-rose-400 dark:hover:bg-rose-500 dark:hover:text-white transition-colors",
                      children: o.jsx(lp, { size: 14, strokeWidth: 2.5 }),
                    }),
                  ],
                }),
              ],
            }),
            o.jsxs("div", {
              onClick: (y) => {
                (y.stopPropagation(), m(!h));
              },
              className:
                "flex items-center justify-between bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 border border-indigo-100 dark:border-zinc-800 shadow-sm group/pass hover:border-indigo-300 dark:hover:border-zinc-700 transition-colors",
              children: [
                o.jsx("div", {
                  className: `font-mono text-sm font-black tracking-widest transition-all duration-700 flex-1 truncate ${h ? "blur-0 text-stone-900 dark:text-white" : "blur-sm select-none text-stone-400 dark:text-zinc-500"}`,
                  children: h ? n.password : "••••••••••••••••",
                }),
                o.jsx("button", {
                  onClick: b,
                  className:
                    "text-indigo-300 hover:text-indigo-600 hover:scale-110 dark:text-zinc-600 dark:hover:text-teal-400 transition-all",
                  children: o.jsx(Iy, { size: 16, strokeWidth: 2.5 }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
if (typeof document < "u") {
  const n = document.createElement("style");
  ((n.textContent = `
      .perspective-1000 { perspective: 1000px; }
      .transform-style-3d { transform-style: preserve-3d; }
      .backface-hidden { backface-visibility: hidden; }
      .rotate-y-180 { transform: rotateY(180deg); }
    `),
    document.head.appendChild(n));
}
function m4() {
  const [n, s] = j.useState(() =>
      typeof window < "u"
        ? localStorage.getItem("theme") === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        : !0,
    ),
    [c, u] = j.useState(!0);
  return (
    j.useEffect(() => {
      const d = window.document.documentElement;
      n
        ? (d.classList.add("dark"), localStorage.setItem("theme", "dark"))
        : (d.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, [n]),
    j.useEffect(() => {
      const d = setTimeout(() => {
        u(!1);
      }, 4e3);
      return () => clearTimeout(d);
    }, []),
    o.jsx(_1, {
      children: o.jsx(W5, {
        children: c
          ? o.jsxs("div", {
              className:
                "relative min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-zinc-950 transition-colors duration-700 z-[9999]",
              children: [
                o.jsx("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-teal-500/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none",
                }),
                o.jsx(p4, { isDark: n }),
              ],
            })
          : o.jsxs("div", {
              className:
                "relative min-h-screen flex flex-col transition-colors duration-700 font-sans selection:bg-indigo-500 selection:text-white bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100 animate-in fade-in zoom-in-95 duration-1000",
              children: [
                o.jsx("div", {
                  className:
                    "fixed inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay",
                }),
                o.jsxs("div", {
                  className:
                    "fixed inset-0 overflow-hidden pointer-events-none",
                  children: [
                    o.jsx("div", {
                      className:
                        "absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] opacity-30 bg-indigo-300 mix-blend-multiply dark:bg-teal-900/40 dark:mix-blend-normal animate-pulse-slow",
                    }),
                    o.jsx("div", {
                      className:
                        "absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 bg-orange-200 mix-blend-multiply dark:bg-violet-900/30 dark:mix-blend-normal animate-pulse-slow",
                    }),
                  ],
                }),
                o.jsx(jy, { position: "bottom-center" }),
                o.jsx(P5, { isDark: n, setIsDark: s }),
                o.jsx("div", {
                  className:
                    "flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-6 relative z-10",
                  children: o.jsxs(n1, {
                    children: [
                      o.jsx(wa, { path: "/", element: o.jsx(x4, {}) }),
                      o.jsx(wa, { path: "/about", element: o.jsx(s4, {}) }),
                      o.jsx(wa, { path: "/contact", element: o.jsx(u4, {}) }),
                      o.jsx(wa, {
                        path: "/login",
                        element: o.jsx(wm, { children: o.jsx(I5, {}) }),
                      }),
                      o.jsx(wa, {
                        path: "/register",
                        element: o.jsx(wm, { children: o.jsx(e4, {}) }),
                      }),
                      o.jsx(wa, {
                        path: "/generator",
                        element: o.jsx(gm, { children: o.jsx(d4, {}) }),
                      }),
                      o.jsx(wa, {
                        path: "/vault",
                        element: o.jsx(gm, { children: o.jsx(f4, {}) }),
                      }),
                      o.jsx(wa, {
                        path: "*",
                        element: o.jsx(wc, { to: "/", replace: !0 }),
                      }),
                    ],
                  }),
                }),
                o.jsx("footer", {
                  className:
                    "relative z-10 w-full mt-auto border-t border-stone-200/40 dark:border-zinc-800/40 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-xl py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000",
                  children: o.jsxs("div", {
                    className:
                      "max-w-5xl mx-auto px-6 flex flex-col items-center gap-5",
                    children: [
                      o.jsxs("div", {
                        className: "flex flex-col items-center gap-2",
                        children: [
                          o.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [
                              o.jsx("img", {
                                src: n ? "/logo1.png" : "/logo2.png",
                                alt: "SecureGen Logo",
                                className: "w-8 h-8 object-contain",
                                onError: (d) => {
                                  ((d.target.style.display = "none"),
                                    (d.target.nextSibling.style.display =
                                      "block"));
                                },
                              }),
                              o.jsx("div", {
                                style: { display: "none" },
                                children: o.jsx(gn, {
                                  size: 20,
                                  strokeWidth: 2.5,
                                  className:
                                    "text-indigo-600 dark:text-teal-400",
                                }),
                              }),
                              o.jsx("span", {
                                className:
                                  "text-sm font-black tracking-widest uppercase text-stone-900 dark:text-white",
                                children: "SecureGen",
                              }),
                            ],
                          }),
                          o.jsx("p", {
                            className:
                              "text-xs font-bold text-stone-500 dark:text-zinc-500",
                            children:
                              "Military-grade encryption. Zero-knowledge architecture.",
                          }),
                        ],
                      }),
                      o.jsxs("div", {
                        className:
                          "flex items-center gap-6 text-xs font-extrabold text-stone-400 dark:text-zinc-600 uppercase tracking-wider",
                        children: [
                          o.jsx(qt, {
                            to: "/about",
                            className:
                              "hover:text-indigo-600 dark:hover:text-teal-400 transition-colors",
                            children: "About",
                          }),
                          o.jsx(qt, {
                            to: "/contact",
                            className:
                              "hover:text-indigo-600 dark:hover:text-teal-400 transition-colors",
                            children: "Support",
                          }),
                        ],
                      }),
                      o.jsx("div", {
                        className:
                          "w-16 h-0.5 rounded-full bg-stone-200 dark:bg-zinc-800",
                      }),
                      o.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs font-bold text-stone-500 dark:text-zinc-500",
                        children: [
                          o.jsxs("p", {
                            children: [
                              "© ",
                              new Date().getFullYear(),
                              " SecureGen. All rights reserved.",
                            ],
                          }),
                          o.jsx("div", {
                            className:
                              "hidden md:block w-1 h-1 rounded-full bg-stone-300 dark:bg-zinc-700",
                          }),
                          o.jsxs("p", {
                            className: "flex items-center gap-1.5",
                            children: [
                              "Crafted with",
                              " ",
                              o.jsx(xv, {
                                size: 12,
                                className:
                                  "text-rose-500 fill-rose-500 animate-pulse",
                              }),
                              " ",
                              "by",
                              " ",
                              o.jsx("a", {
                                href: "https://github.com/Ruchit",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-stone-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors",
                                children: "Ruchit",
                              }),
                              " ",
                              o.jsx("span", {
                                className:
                                  "opacity-60 bg-stone-200 dark:bg-zinc-800 px-2 py-0.5 rounded-md text-[10px] tracking-wider",
                                children: "DevNex",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
      }),
    })
  );
}
function p4({ isDark: n }) {
  const [s, c] = j.useState(!1);
  return o.jsxs("div", {
    className:
      "flex flex-col items-center justify-center w-full animate-in fade-in zoom-in duration-700 relative z-10",
    children: [
      o.jsxs("div", {
        className: "relative mb-8",
        children: [
          o.jsx("div", {
            className:
              "absolute inset-0 bg-indigo-500 dark:bg-teal-500 blur-2xl opacity-40 animate-pulse",
          }),
          o.jsx("div", {
            className:
              "relative p-6 rounded-[2rem] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-stone-100 dark:border-zinc-800 shadow-2xl flex items-center justify-center",
            children: s
              ? o.jsx(gn, {
                  size: 80,
                  strokeWidth: 1.5,
                  className:
                    "text-indigo-600 dark:text-teal-400 animate-[spin_3s_linear_infinite]",
                })
              : o.jsx("img", {
                  src: n ? "/logo1.png" : "/logo2.png",
                  alt: "SecureGen Loading",
                  onError: () => c(!0),
                  className:
                    "w-20 h-20 object-contain drop-shadow-lg animate-[pulse_1.5s_ease-in-out_infinite]",
                }),
          }),
        ],
      }),
      o.jsx("h1", {
        className:
          "text-3xl font-black tracking-widest uppercase mb-2 text-stone-900 dark:text-white",
        children: "SecureGen",
      }),
      o.jsxs("div", {
        className: "flex items-center gap-2 mt-2",
        children: [
          o.jsx("div", {
            className:
              "w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce",
            style: { animationDelay: "0ms" },
          }),
          o.jsx("div", {
            className:
              "w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce",
            style: { animationDelay: "150ms" },
          }),
          o.jsx("div", {
            className:
              "w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce",
            style: { animationDelay: "300ms" },
          }),
        ],
      }),
    ],
  });
}
function x4() {
  const { user: n, loading: s } = kl();
  return s ? null : n ? o.jsx(l4, {}) : o.jsx(r4, {});
}
function wm({ children: n }) {
  const { user: s, loading: c } = kl();
  return c ? null : s ? o.jsx(wc, { to: "/", replace: !0 }) : n;
}
sb.createRoot(document.getElementById("root")).render(o.jsx(m4, {}));
"serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((n) => console.log("SW registered!", n.scope))
      .catch((n) => console.error("SW failed!", n));
  });
