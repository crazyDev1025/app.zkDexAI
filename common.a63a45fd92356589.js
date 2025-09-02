"use strict";
(self.webpackChunknew_angular_hello_world =
  self.webpackChunknew_angular_hello_world || []).push([
  [592],
  {
    82016: (p) => {
      var l,
        a = "object" == typeof Reflect ? Reflect : null,
        h =
          a && "function" == typeof a.apply
            ? a.apply
            : function (e, t, r) {
                return Function.prototype.apply.call(e, t, r);
              };
      l =
        a && "function" == typeof a.ownKeys
          ? a.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var d =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (p.exports = o),
        (p.exports.once = function N(n, e) {
          return new Promise(function (t, r) {
            function i(s) {
              n.removeListener(e, f), r(s);
            }
            function f() {
              "function" == typeof n.removeListener &&
                n.removeListener("error", i),
                t([].slice.call(arguments));
            }
            E(n, e, f, { once: !0 }),
              "error" !== e &&
                (function M(n, e, t) {
                  "function" == typeof n.on && E(n, "error", e, t);
                })(n, i, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var L = 10;
      function v(n) {
        if ("function" != typeof n)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof n
          );
      }
      function m(n) {
        return void 0 === n._maxListeners
          ? o.defaultMaxListeners
          : n._maxListeners;
      }
      function y(n, e, t, r) {
        var i, f, s;
        if (
          (v(t),
          void 0 === (f = n._events)
            ? ((f = n._events = Object.create(null)), (n._eventsCount = 0))
            : (void 0 !== f.newListener &&
                (n.emit("newListener", e, t.listener ? t.listener : t),
                (f = n._events)),
              (s = f[e])),
          void 0 === s)
        )
          (s = f[e] = t), ++n._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = f[e] = r ? [t, s] : [s, t])
            : r
            ? s.unshift(t)
            : s.push(t),
          (i = m(n)) > 0 && s.length > i && !s.warned)
        ) {
          s.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = n),
            (u.type = e),
            (u.count = s.length),
            (function x(n) {
              console && console.warn && console.warn(n);
            })(u);
        }
        return n;
      }
      function C() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function g(n, e, t) {
        var r = { fired: !1, wrapFn: void 0, target: n, type: e, listener: t },
          i = C.bind(r);
        return (i.listener = t), (r.wrapFn = i), i;
      }
      function _(n, e, t) {
        var r = n._events;
        if (void 0 === r) return [];
        var i = r[e];
        return void 0 === i
          ? []
          : "function" == typeof i
          ? t
            ? [i.listener || i]
            : [i]
          : t
          ? (function R(n) {
              for (var e = new Array(n.length), t = 0; t < e.length; ++t)
                e[t] = n[t].listener || n[t];
              return e;
            })(i)
          : b(i, i.length);
      }
      function w(n) {
        var e = this._events;
        if (void 0 !== e) {
          var t = e[n];
          if ("function" == typeof t) return 1;
          if (void 0 !== t) return t.length;
        }
        return 0;
      }
      function b(n, e) {
        for (var t = new Array(e), r = 0; r < e; ++r) t[r] = n[r];
        return t;
      }
      function E(n, e, t, r) {
        if ("function" == typeof n.on) r.once ? n.once(e, t) : n.on(e, t);
        else {
          if ("function" != typeof n.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof n
            );
          n.addEventListener(e, function i(f) {
            r.once && n.removeEventListener(e, i), t(f);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return L;
        },
        set: function (n) {
          if ("number" != typeof n || n < 0 || d(n))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                n +
                "."
            );
          L = n;
        },
      }),
        (o.init = function () {
          (void 0 === this._events ||
            this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || d(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return m(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], r = 1; r < arguments.length; r++)
            t.push(arguments[r]);
          var i = "error" === e,
            f = this._events;
          if (void 0 !== f) i = i && void 0 === f.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var u = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((u.context = s), u);
          }
          var c = f[e];
          if (void 0 === c) return !1;
          if ("function" == typeof c) h(c, this, t);
          else {
            var O = c.length,
              A = b(c, O);
            for (r = 0; r < O; ++r) h(A[r], this, t);
          }
          return !0;
        }),
        (o.prototype.on = o.prototype.addListener =
          function (e, t) {
            return y(this, e, t, !1);
          }),
        (o.prototype.prependListener = function (e, t) {
          return y(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return v(t), this.on(e, g(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return v(t), this.prependListener(e, g(this, e, t)), this;
        }),
        (o.prototype.off = o.prototype.removeListener =
          function (e, t) {
            var r, i, f, s, u;
            if ((v(t), void 0 === (i = this._events))) return this;
            if (void 0 === (r = i[e])) return this;
            if (r === t || r.listener === t)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete i[e],
                  i.removeListener &&
                    this.emit("removeListener", e, r.listener || t));
            else if ("function" != typeof r) {
              for (f = -1, s = r.length - 1; s >= 0; s--)
                if (r[s] === t || r[s].listener === t) {
                  (u = r[s].listener), (f = s);
                  break;
                }
              if (f < 0) return this;
              0 === f
                ? r.shift()
                : (function j(n, e) {
                    for (; e + 1 < n.length; e++) n[e] = n[e + 1];
                    n.pop();
                  })(r, f),
                1 === r.length && (i[e] = r[0]),
                void 0 !== i.removeListener &&
                  this.emit("removeListener", e, u || t);
            }
            return this;
          }),
        (o.prototype.removeAllListeners = function (e) {
          var t, r, i;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== r[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete r[e]),
              this
            );
          if (0 === arguments.length) {
            var s,
              f = Object.keys(r);
            for (i = 0; i < f.length; ++i)
              "removeListener" !== (s = f[i]) && this.removeAllListeners(s);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = r[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return _(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return _(this, e, !1);
        }),
        (o.listenerCount = function (n, e) {
          return "function" == typeof n.listenerCount
            ? n.listenerCount(e)
            : w.call(n, e);
        }),
        (o.prototype.listenerCount = w),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? l(this._events) : [];
        });
    },
  },
]);
