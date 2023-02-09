var tv = Object.defineProperty;
var ov = (e, t, o) =>
  t in e
    ? tv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o })
    : (e[t] = o);
var rv = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Bl = (e, t, o) => (ov(e, typeof t != "symbol" ? t + "" : t, o), o),
  Al = (e, t, o) => {
    if (!t.has(e)) throw TypeError("Cannot " + o);
  };
var Lt = (e, t, o) => (
    Al(e, t, "read from private field"), o ? o.call(e) : t.get(e)
  ),
  io = (e, t, o) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, o);
  },
  Or = (e, t, o, r) => (
    Al(e, t, "write to private field"), r ? r.call(e, o) : t.set(e, o), o
  );
var Zt = (e, t, o) => (Al(e, t, "access private method"), o);
var k5 = rv((Wt, Nt) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
      r(n);
    new MutationObserver((n) => {
      for (const i of n)
        if (i.type === "childList")
          for (const l of i.addedNodes)
            l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function o(n) {
      const i = {};
      return (
        n.integrity && (i.integrity = n.integrity),
        n.referrerpolicy && (i.referrerPolicy = n.referrerpolicy),
        n.crossorigin === "use-credentials"
          ? (i.credentials = "include")
          : n.crossorigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
        i
      );
    }
    function r(n) {
      if (n.ep) return;
      n.ep = !0;
      const i = o(n);
      fetch(n.href, i);
    }
  })();
  function Ua(e, t) {
    const o = Object.create(null),
      r = e.split(",");
    for (let n = 0; n < r.length; n++) o[r[n]] = !0;
    return t ? (n) => !!o[n.toLowerCase()] : (n) => !!o[n];
  }
  function Ga(e) {
    if (Me(e)) {
      const t = {};
      for (let o = 0; o < e.length; o++) {
        const r = e[o],
          n = ht(r) ? av(r) : Ga(r);
        if (n) for (const i in n) t[i] = n[i];
      }
      return t;
    } else {
      if (ht(e)) return e;
      if (nt(e)) return e;
    }
  }
  const nv = /;(?![^(]*\))/g,
    iv = /:([^]+)/,
    lv = /\/\*.*?\*\//gs;
  function av(e) {
    const t = {};
    return (
      e
        .replace(lv, "")
        .split(nv)
        .forEach((o) => {
          if (o) {
            const r = o.split(iv);
            r.length > 1 && (t[r[0].trim()] = r[1].trim());
          }
        }),
      t
    );
  }
  function qa(e) {
    let t = "";
    if (ht(e)) t = e;
    else if (Me(e))
      for (let o = 0; o < e.length; o++) {
        const r = qa(e[o]);
        r && (t += r + " ");
      }
    else if (nt(e)) for (const o in e) e[o] && (t += o + " ");
    return t.trim();
  }
  const sv =
      "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    cv = Ua(sv);
  function ru(e) {
    return !!e || e === "";
  }
  const Lr = (e) =>
      ht(e)
        ? e
        : e == null
        ? ""
        : Me(e) || (nt(e) && (e.toString === au || !Be(e.toString)))
        ? JSON.stringify(e, nu, 2)
        : String(e),
    nu = (e, t) =>
      t && t.__v_isRef
        ? nu(e, t.value)
        : Nr(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (o, [r, n]) => ((o[`${r} =>`] = n), o),
              {}
            ),
          }
        : iu(t)
        ? { [`Set(${t.size})`]: [...t.values()] }
        : nt(t) && !Me(t) && !su(t)
        ? String(t)
        : t,
    et = {},
    Wr = [],
    oo = () => {},
    dv = () => !1,
    uv = /^on[^a-z]/,
    ll = (e) => uv.test(e),
    Ya = (e) => e.startsWith("onUpdate:"),
    vt = Object.assign,
    Xa = (e, t) => {
      const o = e.indexOf(t);
      o > -1 && e.splice(o, 1);
    },
    fv = Object.prototype.hasOwnProperty,
    je = (e, t) => fv.call(e, t),
    Me = Array.isArray,
    Nr = (e) => al(e) === "[object Map]",
    iu = (e) => al(e) === "[object Set]",
    Be = (e) => typeof e == "function",
    ht = (e) => typeof e == "string",
    Za = (e) => typeof e == "symbol",
    nt = (e) => e !== null && typeof e == "object",
    lu = (e) => nt(e) && Be(e.then) && Be(e.catch),
    au = Object.prototype.toString,
    al = (e) => au.call(e),
    hv = (e) => al(e).slice(8, -1),
    su = (e) => al(e) === "[object Object]",
    Ja = (e) =>
      ht(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    _i = Ua(
      ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
    ),
    sl = (e) => {
      const t = Object.create(null);
      return (o) => t[o] || (t[o] = e(o));
    },
    pv = /-(\w)/g,
    Zr = sl((e) => e.replace(pv, (t, o) => (o ? o.toUpperCase() : ""))),
    vv = /\B([A-Z])/g,
    tn = sl((e) => e.replace(vv, "-$1").toLowerCase()),
    cu = sl((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    Hl = sl((e) => (e ? `on${cu(e)}` : "")),
    On = (e, t) => !Object.is(e, t),
    Fl = (e, t) => {
      for (let o = 0; o < e.length; o++) e[o](t);
    },
    Fi = (e, t, o) => {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        value: o,
      });
    },
    gv = (e) => {
      const t = parseFloat(e);
      return isNaN(t) ? e : t;
    },
    mv = (e) => {
      const t = ht(e) ? Number(e) : NaN;
      return isNaN(t) ? e : t;
    };
  let sc;
  const bv = () =>
    sc ||
    (sc =
      typeof globalThis < "u"
        ? globalThis
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : typeof global < "u"
        ? global
        : {});
  let Jt;
  class xv {
    constructor(t = !1) {
      (this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = Jt),
        !t &&
          Jt &&
          (this.index = (Jt.scopes || (Jt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const o = Jt;
        try {
          return (Jt = this), t();
        } finally {
          Jt = o;
        }
      }
    }
    on() {
      Jt = this;
    }
    off() {
      Jt = this.parent;
    }
    stop(t) {
      if (this._active) {
        let o, r;
        for (o = 0, r = this.effects.length; o < r; o++) this.effects[o].stop();
        for (o = 0, r = this.cleanups.length; o < r; o++) this.cleanups[o]();
        if (this.scopes)
          for (o = 0, r = this.scopes.length; o < r; o++)
            this.scopes[o].stop(!0);
        if (!this.detached && this.parent && !t) {
          const n = this.parent.scopes.pop();
          n &&
            n !== this &&
            ((this.parent.scopes[this.index] = n), (n.index = this.index));
        }
        (this.parent = void 0), (this._active = !1);
      }
    }
  }
  function Cv(e, t = Jt) {
    t && t.active && t.effects.push(e);
  }
  function yv() {
    return Jt;
  }
  const Qa = (e) => {
      const t = new Set(e);
      return (t.w = 0), (t.n = 0), t;
    },
    du = (e) => (e.w & Vo) > 0,
    uu = (e) => (e.n & Vo) > 0,
    wv = ({ deps: e }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Vo;
    },
    Sv = (e) => {
      const { deps: t } = e;
      if (t.length) {
        let o = 0;
        for (let r = 0; r < t.length; r++) {
          const n = t[r];
          du(n) && !uu(n) ? n.delete(e) : (t[o++] = n),
            (n.w &= ~Vo),
            (n.n &= ~Vo);
        }
        t.length = o;
      }
    },
    Di = new WeakMap();
  let wn = 0,
    Vo = 1;
  const fa = 30;
  let eo;
  const vr = Symbol(""),
    ha = Symbol("");
  class es {
    constructor(t, o = null, r) {
      (this.fn = t),
        (this.scheduler = o),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        Cv(this, r);
    }
    run() {
      if (!this.active) return this.fn();
      let t = eo,
        o = No;
      for (; t; ) {
        if (t === this) return;
        t = t.parent;
      }
      try {
        return (
          (this.parent = eo),
          (eo = this),
          (No = !0),
          (Vo = 1 << ++wn),
          wn <= fa ? wv(this) : cc(this),
          this.fn()
        );
      } finally {
        wn <= fa && Sv(this),
          (Vo = 1 << --wn),
          (eo = this.parent),
          (No = o),
          (this.parent = void 0),
          this.deferStop && this.stop();
      }
    }
    stop() {
      eo === this
        ? (this.deferStop = !0)
        : this.active &&
          (cc(this), this.onStop && this.onStop(), (this.active = !1));
    }
  }
  function cc(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let o = 0; o < t.length; o++) t[o].delete(e);
      t.length = 0;
    }
  }
  let No = !0;
  const fu = [];
  function on() {
    fu.push(No), (No = !1);
  }
  function rn() {
    const e = fu.pop();
    No = e === void 0 ? !0 : e;
  }
  function At(e, t, o) {
    if (No && eo) {
      let r = Di.get(e);
      r || Di.set(e, (r = new Map()));
      let n = r.get(o);
      n || r.set(o, (n = Qa())), hu(n);
    }
  }
  function hu(e, t) {
    let o = !1;
    wn <= fa ? uu(e) || ((e.n |= Vo), (o = !du(e))) : (o = !e.has(eo)),
      o && (e.add(eo), eo.deps.push(e));
  }
  function So(e, t, o, r, n, i) {
    const l = Di.get(e);
    if (!l) return;
    let a = [];
    if (t === "clear") a = [...l.values()];
    else if (o === "length" && Me(e)) {
      const s = Number(r);
      l.forEach((c, d) => {
        (d === "length" || d >= s) && a.push(c);
      });
    } else
      switch ((o !== void 0 && a.push(l.get(o)), t)) {
        case "add":
          Me(e)
            ? Ja(o) && a.push(l.get("length"))
            : (a.push(l.get(vr)), Nr(e) && a.push(l.get(ha)));
          break;
        case "delete":
          Me(e) || (a.push(l.get(vr)), Nr(e) && a.push(l.get(ha)));
          break;
        case "set":
          Nr(e) && a.push(l.get(vr));
          break;
      }
    if (a.length === 1) a[0] && pa(a[0]);
    else {
      const s = [];
      for (const c of a) c && s.push(...c);
      pa(Qa(s));
    }
  }
  function pa(e, t) {
    const o = Me(e) ? e : [...e];
    for (const r of o) r.computed && dc(r);
    for (const r of o) r.computed || dc(r);
  }
  function dc(e, t) {
    (e !== eo || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
  }
  function $v(e, t) {
    var o;
    return (o = Di.get(e)) === null || o === void 0 ? void 0 : o.get(t);
  }
  const Pv = Ua("__proto__,__v_isRef,__isVue"),
    pu = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== "arguments" && e !== "caller")
        .map((e) => Symbol[e])
        .filter(Za)
    ),
    Tv = ts(),
    zv = ts(!1, !0),
    Iv = ts(!0),
    uc = _v();
  function _v() {
    const e = {};
    return (
      ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
        e[t] = function (...o) {
          const r = Le(this);
          for (let i = 0, l = this.length; i < l; i++) At(r, "get", i + "");
          const n = r[t](...o);
          return n === -1 || n === !1 ? r[t](...o.map(Le)) : n;
        };
      }),
      ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
        e[t] = function (...o) {
          on();
          const r = Le(this)[t].apply(this, o);
          return rn(), r;
        };
      }),
      e
    );
  }
  function Mv(e) {
    const t = Le(this);
    return At(t, "has", e), t.hasOwnProperty(e);
  }
  function ts(e = !1, t = !1) {
    return function (r, n, i) {
      if (n === "__v_isReactive") return !e;
      if (n === "__v_isReadonly") return e;
      if (n === "__v_isShallow") return t;
      if (n === "__v_raw" && i === (e ? (t ? Uv : xu) : t ? bu : mu).get(r))
        return r;
      const l = Me(r);
      if (!e) {
        if (l && je(uc, n)) return Reflect.get(uc, n, i);
        if (n === "hasOwnProperty") return Mv;
      }
      const a = Reflect.get(r, n, i);
      return (Za(n) ? pu.has(n) : Pv(n)) || (e || At(r, "get", n), t)
        ? a
        : xt(a)
        ? l && Ja(n)
          ? a
          : a.value
        : nt(a)
        ? e
          ? Ko(a)
          : dl(a)
        : a;
    };
  }
  const kv = vu(),
    Ev = vu(!0);
  function vu(e = !1) {
    return function (o, r, n, i) {
      let l = o[r];
      if (Jr(l) && xt(l) && !xt(n)) return !1;
      if (
        !e &&
        (!Li(n) && !Jr(n) && ((l = Le(l)), (n = Le(n))),
        !Me(o) && xt(l) && !xt(n))
      )
        return (l.value = n), !0;
      const a = Me(o) && Ja(r) ? Number(r) < o.length : je(o, r),
        s = Reflect.set(o, r, n, i);
      return (
        o === Le(i) &&
          (a ? On(n, l) && So(o, "set", r, n) : So(o, "add", r, n)),
        s
      );
    };
  }
  function Rv(e, t) {
    const o = je(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && o && So(e, "delete", t, void 0), r;
  }
  function Ov(e, t) {
    const o = Reflect.has(e, t);
    return (!Za(t) || !pu.has(t)) && At(e, "has", t), o;
  }
  function Bv(e) {
    return At(e, "iterate", Me(e) ? "length" : vr), Reflect.ownKeys(e);
  }
  const gu = { get: Tv, set: kv, deleteProperty: Rv, has: Ov, ownKeys: Bv },
    Av = {
      get: Iv,
      set(e, t) {
        return !0;
      },
      deleteProperty(e, t) {
        return !0;
      },
    },
    Hv = vt({}, gu, { get: zv, set: Ev }),
    os = (e) => e,
    cl = (e) => Reflect.getPrototypeOf(e);
  function ci(e, t, o = !1, r = !1) {
    e = e.__v_raw;
    const n = Le(e),
      i = Le(t);
    o || (t !== i && At(n, "get", t), At(n, "get", i));
    const { has: l } = cl(n),
      a = r ? os : o ? is : Bn;
    if (l.call(n, t)) return a(e.get(t));
    if (l.call(n, i)) return a(e.get(i));
    e !== n && e.get(t);
  }
  function di(e, t = !1) {
    const o = this.__v_raw,
      r = Le(o),
      n = Le(e);
    return (
      t || (e !== n && At(r, "has", e), At(r, "has", n)),
      e === n ? o.has(e) : o.has(e) || o.has(n)
    );
  }
  function ui(e, t = !1) {
    return (
      (e = e.__v_raw), !t && At(Le(e), "iterate", vr), Reflect.get(e, "size", e)
    );
  }
  function fc(e) {
    e = Le(e);
    const t = Le(this);
    return cl(t).has.call(t, e) || (t.add(e), So(t, "add", e, e)), this;
  }
  function hc(e, t) {
    t = Le(t);
    const o = Le(this),
      { has: r, get: n } = cl(o);
    let i = r.call(o, e);
    i || ((e = Le(e)), (i = r.call(o, e)));
    const l = n.call(o, e);
    return (
      o.set(e, t), i ? On(t, l) && So(o, "set", e, t) : So(o, "add", e, t), this
    );
  }
  function pc(e) {
    const t = Le(this),
      { has: o, get: r } = cl(t);
    let n = o.call(t, e);
    n || ((e = Le(e)), (n = o.call(t, e))), r && r.call(t, e);
    const i = t.delete(e);
    return n && So(t, "delete", e, void 0), i;
  }
  function vc() {
    const e = Le(this),
      t = e.size !== 0,
      o = e.clear();
    return t && So(e, "clear", void 0, void 0), o;
  }
  function fi(e, t) {
    return function (r, n) {
      const i = this,
        l = i.__v_raw,
        a = Le(l),
        s = t ? os : e ? is : Bn;
      return (
        !e && At(a, "iterate", vr),
        l.forEach((c, d) => r.call(n, s(c), s(d), i))
      );
    };
  }
  function hi(e, t, o) {
    return function (...r) {
      const n = this.__v_raw,
        i = Le(n),
        l = Nr(i),
        a = e === "entries" || (e === Symbol.iterator && l),
        s = e === "keys" && l,
        c = n[e](...r),
        d = o ? os : t ? is : Bn;
      return (
        !t && At(i, "iterate", s ? ha : vr),
        {
          next() {
            const { value: u, done: h } = c.next();
            return h
              ? { value: u, done: h }
              : { value: a ? [d(u[0]), d(u[1])] : d(u), done: h };
          },
          [Symbol.iterator]() {
            return this;
          },
        }
      );
    };
  }
  function Ro(e) {
    return function (...t) {
      return e === "delete" ? !1 : this;
    };
  }
  function Fv() {
    const e = {
        get(i) {
          return ci(this, i);
        },
        get size() {
          return ui(this);
        },
        has: di,
        add: fc,
        set: hc,
        delete: pc,
        clear: vc,
        forEach: fi(!1, !1),
      },
      t = {
        get(i) {
          return ci(this, i, !1, !0);
        },
        get size() {
          return ui(this);
        },
        has: di,
        add: fc,
        set: hc,
        delete: pc,
        clear: vc,
        forEach: fi(!1, !0),
      },
      o = {
        get(i) {
          return ci(this, i, !0);
        },
        get size() {
          return ui(this, !0);
        },
        has(i) {
          return di.call(this, i, !0);
        },
        add: Ro("add"),
        set: Ro("set"),
        delete: Ro("delete"),
        clear: Ro("clear"),
        forEach: fi(!0, !1),
      },
      r = {
        get(i) {
          return ci(this, i, !0, !0);
        },
        get size() {
          return ui(this, !0);
        },
        has(i) {
          return di.call(this, i, !0);
        },
        add: Ro("add"),
        set: Ro("set"),
        delete: Ro("delete"),
        clear: Ro("clear"),
        forEach: fi(!0, !0),
      };
    return (
      ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
        (e[i] = hi(i, !1, !1)),
          (o[i] = hi(i, !0, !1)),
          (t[i] = hi(i, !1, !0)),
          (r[i] = hi(i, !0, !0));
      }),
      [e, o, t, r]
    );
  }
  const [Dv, Lv, Wv, Nv] = Fv();
  function rs(e, t) {
    const o = t ? (e ? Nv : Wv) : e ? Lv : Dv;
    return (r, n, i) =>
      n === "__v_isReactive"
        ? !e
        : n === "__v_isReadonly"
        ? e
        : n === "__v_raw"
        ? r
        : Reflect.get(je(o, n) && n in r ? o : r, n, i);
  }
  const jv = { get: rs(!1, !1) },
    Vv = { get: rs(!1, !0) },
    Kv = { get: rs(!0, !1) },
    mu = new WeakMap(),
    bu = new WeakMap(),
    xu = new WeakMap(),
    Uv = new WeakMap();
  function Gv(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function qv(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Gv(hv(e));
  }
  function dl(e) {
    return Jr(e) ? e : ns(e, !1, gu, jv, mu);
  }
  function Yv(e) {
    return ns(e, !1, Hv, Vv, bu);
  }
  function Ko(e) {
    return ns(e, !0, Av, Kv, xu);
  }
  function ns(e, t, o, r, n) {
    if (!nt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = n.get(e);
    if (i) return i;
    const l = qv(e);
    if (l === 0) return e;
    const a = new Proxy(e, l === 2 ? r : o);
    return n.set(e, a), a;
  }
  function jr(e) {
    return Jr(e) ? jr(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Jr(e) {
    return !!(e && e.__v_isReadonly);
  }
  function Li(e) {
    return !!(e && e.__v_isShallow);
  }
  function Cu(e) {
    return jr(e) || Jr(e);
  }
  function Le(e) {
    const t = e && e.__v_raw;
    return t ? Le(t) : e;
  }
  function Wi(e) {
    return Fi(e, "__v_skip", !0), e;
  }
  const Bn = (e) => (nt(e) ? dl(e) : e),
    is = (e) => (nt(e) ? Ko(e) : e);
  function yu(e) {
    No && eo && ((e = Le(e)), hu(e.dep || (e.dep = Qa())));
  }
  function wu(e, t) {
    e = Le(e);
    const o = e.dep;
    o && pa(o);
  }
  function xt(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function N(e) {
    return Xv(e, !1);
  }
  function Xv(e, t) {
    return xt(e) ? e : new Zv(e, t);
  }
  class Zv {
    constructor(t, o) {
      (this.__v_isShallow = o),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = o ? t : Le(t)),
        (this._value = o ? t : Bn(t));
    }
    get value() {
      return yu(this), this._value;
    }
    set value(t) {
      const o = this.__v_isShallow || Li(t) || Jr(t);
      (t = o ? t : Le(t)),
        On(t, this._rawValue) &&
          ((this._rawValue = t), (this._value = o ? t : Bn(t)), wu(this));
    }
  }
  function Ce(e) {
    return xt(e) ? e.value : e;
  }
  const Jv = {
    get: (e, t, o) => Ce(Reflect.get(e, t, o)),
    set: (e, t, o, r) => {
      const n = e[t];
      return xt(n) && !xt(o) ? ((n.value = o), !0) : Reflect.set(e, t, o, r);
    },
  };
  function Su(e) {
    return jr(e) ? e : new Proxy(e, Jv);
  }
  class Qv {
    constructor(t, o, r) {
      (this._object = t),
        (this._key = o),
        (this._defaultValue = r),
        (this.__v_isRef = !0);
    }
    get value() {
      const t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return $v(Le(this._object), this._key);
    }
  }
  function ke(e, t, o) {
    const r = e[t];
    return xt(r) ? r : new Qv(e, t, o);
  }
  var $u;
  class eg {
    constructor(t, o, r, n) {
      (this._setter = o),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this[$u] = !1),
        (this._dirty = !0),
        (this.effect = new es(t, () => {
          this._dirty || ((this._dirty = !0), wu(this));
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !n),
        (this.__v_isReadonly = r);
    }
    get value() {
      const t = Le(this);
      return (
        yu(t),
        (t._dirty || !t._cacheable) &&
          ((t._dirty = !1), (t._value = t.effect.run())),
        t._value
      );
    }
    set value(t) {
      this._setter(t);
    }
  }
  $u = "__v_isReadonly";
  function tg(e, t, o = !1) {
    let r, n;
    const i = Be(e);
    return (
      i ? ((r = e), (n = oo)) : ((r = e.get), (n = e.set)),
      new eg(r, n, i || !n, o)
    );
  }
  function jo(e, t, o, r) {
    let n;
    try {
      n = r ? e(...r) : e();
    } catch (i) {
      ul(i, t, o);
    }
    return n;
  }
  function Gt(e, t, o, r) {
    if (Be(e)) {
      const i = jo(e, t, o, r);
      return (
        i &&
          lu(i) &&
          i.catch((l) => {
            ul(l, t, o);
          }),
        i
      );
    }
    const n = [];
    for (let i = 0; i < e.length; i++) n.push(Gt(e[i], t, o, r));
    return n;
  }
  function ul(e, t, o, r = !0) {
    const n = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const l = t.proxy,
        a = o;
      for (; i; ) {
        const c = i.ec;
        if (c) {
          for (let d = 0; d < c.length; d++) if (c[d](e, l, a) === !1) return;
        }
        i = i.parent;
      }
      const s = t.appContext.config.errorHandler;
      if (s) {
        jo(s, null, 10, [e, l, a]);
        return;
      }
    }
    og(e, o, n, r);
  }
  function og(e, t, o, r = !0) {
    console.error(e);
  }
  let An = !1,
    va = !1;
  const Tt = [];
  let fo = 0;
  const Vr = [];
  let wo = null,
    ar = 0;
  const Pu = Promise.resolve();
  let ls = null;
  function $o(e) {
    const t = ls || Pu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function rg(e) {
    let t = fo + 1,
      o = Tt.length;
    for (; t < o; ) {
      const r = (t + o) >>> 1;
      Hn(Tt[r]) < e ? (t = r + 1) : (o = r);
    }
    return t;
  }
  function as(e) {
    (!Tt.length || !Tt.includes(e, An && e.allowRecurse ? fo + 1 : fo)) &&
      (e.id == null ? Tt.push(e) : Tt.splice(rg(e.id), 0, e), Tu());
  }
  function Tu() {
    !An && !va && ((va = !0), (ls = Pu.then(Iu)));
  }
  function ng(e) {
    const t = Tt.indexOf(e);
    t > fo && Tt.splice(t, 1);
  }
  function ig(e) {
    Me(e)
      ? Vr.push(...e)
      : (!wo || !wo.includes(e, e.allowRecurse ? ar + 1 : ar)) && Vr.push(e),
      Tu();
  }
  function gc(e, t = An ? fo + 1 : 0) {
    for (; t < Tt.length; t++) {
      const o = Tt[t];
      o && o.pre && (Tt.splice(t, 1), t--, o());
    }
  }
  function zu(e) {
    if (Vr.length) {
      const t = [...new Set(Vr)];
      if (((Vr.length = 0), wo)) {
        wo.push(...t);
        return;
      }
      for (
        wo = t, wo.sort((o, r) => Hn(o) - Hn(r)), ar = 0;
        ar < wo.length;
        ar++
      )
        wo[ar]();
      (wo = null), (ar = 0);
    }
  }
  const Hn = (e) => (e.id == null ? 1 / 0 : e.id),
    lg = (e, t) => {
      const o = Hn(e) - Hn(t);
      if (o === 0) {
        if (e.pre && !t.pre) return -1;
        if (t.pre && !e.pre) return 1;
      }
      return o;
    };
  function Iu(e) {
    (va = !1), (An = !0), Tt.sort(lg);
    const t = oo;
    try {
      for (fo = 0; fo < Tt.length; fo++) {
        const o = Tt[fo];
        o && o.active !== !1 && jo(o, null, 14);
      }
    } finally {
      (fo = 0),
        (Tt.length = 0),
        zu(),
        (An = !1),
        (ls = null),
        (Tt.length || Vr.length) && Iu();
    }
  }
  function ag(e, t, ...o) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || et;
    let n = o;
    const i = t.startsWith("update:"),
      l = i && t.slice(7);
    if (l && l in r) {
      const d = `${l === "modelValue" ? "model" : l}Modifiers`,
        { number: u, trim: h } = r[d] || et;
      h && (n = o.map((p) => (ht(p) ? p.trim() : p))), u && (n = o.map(gv));
    }
    let a,
      s = r[(a = Hl(t))] || r[(a = Hl(Zr(t)))];
    !s && i && (s = r[(a = Hl(tn(t)))]), s && Gt(s, e, 6, n);
    const c = r[a + "Once"];
    if (c) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      (e.emitted[a] = !0), Gt(c, e, 6, n);
    }
  }
  function _u(e, t, o = !1) {
    const r = t.emitsCache,
      n = r.get(e);
    if (n !== void 0) return n;
    const i = e.emits;
    let l = {},
      a = !1;
    if (!Be(e)) {
      const s = (c) => {
        const d = _u(c, t, !0);
        d && ((a = !0), vt(l, d));
      };
      !o && t.mixins.length && t.mixins.forEach(s),
        e.extends && s(e.extends),
        e.mixins && e.mixins.forEach(s);
    }
    return !i && !a
      ? (nt(e) && r.set(e, null), null)
      : (Me(i) ? i.forEach((s) => (l[s] = null)) : vt(l, i),
        nt(e) && r.set(e, l),
        l);
  }
  function fl(e, t) {
    return !e || !ll(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, "")),
        je(e, t[0].toLowerCase() + t.slice(1)) || je(e, tn(t)) || je(e, t));
  }
  let zt = null,
    Mu = null;
  function Ni(e) {
    const t = zt;
    return (zt = e), (Mu = (e && e.type.__scopeId) || null), t;
  }
  function Ze(e, t = zt, o) {
    if (!t || e._n) return e;
    const r = (...n) => {
      r._d && Tc(-1);
      const i = Ni(t);
      let l;
      try {
        l = e(...n);
      } finally {
        Ni(i), r._d && Tc(1);
      }
      return l;
    };
    return (r._n = !0), (r._c = !0), (r._d = !0), r;
  }
  function Dl(e) {
    const {
      type: t,
      vnode: o,
      proxy: r,
      withProxy: n,
      props: i,
      propsOptions: [l],
      slots: a,
      attrs: s,
      emit: c,
      render: d,
      renderCache: u,
      data: h,
      setupState: p,
      ctx: f,
      inheritAttrs: v,
    } = e;
    let b, g;
    const T = Ni(e);
    try {
      if (o.shapeFlag & 4) {
        const P = n || r;
        (b = uo(d.call(P, P, u, i, p, h, f))), (g = s);
      } else {
        const P = t;
        (b = uo(
          P.length > 1 ? P(i, { attrs: s, slots: a, emit: c }) : P(i, null)
        )),
          (g = t.props ? s : sg(s));
      }
    } catch (P) {
      (In.length = 0), ul(P, e, 1), (b = Te(jt));
    }
    let O = b;
    if (g && v !== !1) {
      const P = Object.keys(g),
        { shapeFlag: R } = O;
      P.length && R & 7 && (l && P.some(Ya) && (g = cg(g, l)), (O = Po(O, g)));
    }
    return (
      o.dirs &&
        ((O = Po(O)), (O.dirs = O.dirs ? O.dirs.concat(o.dirs) : o.dirs)),
      o.transition && (O.transition = o.transition),
      (b = O),
      Ni(T),
      b
    );
  }
  const sg = (e) => {
      let t;
      for (const o in e)
        (o === "class" || o === "style" || ll(o)) &&
          ((t || (t = {}))[o] = e[o]);
      return t;
    },
    cg = (e, t) => {
      const o = {};
      for (const r in e) (!Ya(r) || !(r.slice(9) in t)) && (o[r] = e[r]);
      return o;
    };
  function dg(e, t, o) {
    const { props: r, children: n, component: i } = e,
      { props: l, children: a, patchFlag: s } = t,
      c = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (o && s >= 0) {
      if (s & 1024) return !0;
      if (s & 16) return r ? mc(r, l, c) : !!l;
      if (s & 8) {
        const d = t.dynamicProps;
        for (let u = 0; u < d.length; u++) {
          const h = d[u];
          if (l[h] !== r[h] && !fl(c, h)) return !0;
        }
      }
    } else
      return (n || a) && (!a || !a.$stable)
        ? !0
        : r === l
        ? !1
        : r
        ? l
          ? mc(r, l, c)
          : !0
        : !!l;
    return !1;
  }
  function mc(e, t, o) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      if (t[i] !== e[i] && !fl(o, i)) return !0;
    }
    return !1;
  }
  function ug({ vnode: e, parent: t }, o) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = o), (t = t.parent);
  }
  const fg = (e) => e.__isSuspense;
  function hg(e, t) {
    t && t.pendingBranch
      ? Me(e)
        ? t.effects.push(...e)
        : t.effects.push(e)
      : ig(e);
  }
  function ot(e, t) {
    if (ft) {
      let o = ft.provides;
      const r = ft.parent && ft.parent.provides;
      r === o && (o = ft.provides = Object.create(r)), (o[e] = t);
    }
  }
  function Oe(e, t, o = !1) {
    const r = ft || zt;
    if (r) {
      const n =
        r.parent == null
          ? r.vnode.appContext && r.vnode.appContext.provides
          : r.parent.provides;
      if (n && e in n) return n[e];
      if (arguments.length > 1) return o && Be(t) ? t.call(r.proxy) : t;
    }
  }
  function po(e, t) {
    return ss(e, null, t);
  }
  const pi = {};
  function rt(e, t, o) {
    return ss(e, t, o);
  }
  function ss(
    e,
    t,
    { immediate: o, deep: r, flush: n, onTrack: i, onTrigger: l } = et
  ) {
    const a = yv() === (ft == null ? void 0 : ft.scope) ? ft : null;
    let s,
      c = !1,
      d = !1;
    if (
      (xt(e)
        ? ((s = () => e.value), (c = Li(e)))
        : jr(e)
        ? ((s = () => e), (r = !0))
        : Me(e)
        ? ((d = !0),
          (c = e.some((O) => jr(O) || Li(O))),
          (s = () =>
            e.map((O) => {
              if (xt(O)) return O.value;
              if (jr(O)) return dr(O);
              if (Be(O)) return jo(O, a, 2);
            })))
        : Be(e)
        ? t
          ? (s = () => jo(e, a, 2))
          : (s = () => {
              if (!(a && a.isUnmounted)) return u && u(), Gt(e, a, 3, [h]);
            })
        : (s = oo),
      t && r)
    ) {
      const O = s;
      s = () => dr(O());
    }
    let u,
      h = (O) => {
        u = g.onStop = () => {
          jo(O, a, 4);
        };
      },
      p;
    if (Nn)
      if (
        ((h = oo),
        t ? o && Gt(t, a, 3, [s(), d ? [] : void 0, h]) : s(),
        n === "sync")
      ) {
        const O = tm();
        p = O.__watcherHandles || (O.__watcherHandles = []);
      } else return oo;
    let f = d ? new Array(e.length).fill(pi) : pi;
    const v = () => {
      if (g.active)
        if (t) {
          const O = g.run();
          (r || c || (d ? O.some((P, R) => On(P, f[R])) : On(O, f))) &&
            (u && u(),
            Gt(t, a, 3, [O, f === pi ? void 0 : d && f[0] === pi ? [] : f, h]),
            (f = O));
        } else g.run();
    };
    v.allowRecurse = !!t;
    let b;
    n === "sync"
      ? (b = v)
      : n === "post"
      ? (b = () => Bt(v, a && a.suspense))
      : ((v.pre = !0), a && (v.id = a.uid), (b = () => as(v)));
    const g = new es(s, b);
    t
      ? o
        ? v()
        : (f = g.run())
      : n === "post"
      ? Bt(g.run.bind(g), a && a.suspense)
      : g.run();
    const T = () => {
      g.stop(), a && a.scope && Xa(a.scope.effects, g);
    };
    return p && p.push(T), T;
  }
  function pg(e, t, o) {
    const r = this.proxy,
      n = ht(e) ? (e.includes(".") ? ku(r, e) : () => r[e]) : e.bind(r, r);
    let i;
    Be(t) ? (i = t) : ((i = t.handler), (o = t));
    const l = ft;
    Qr(this);
    const a = ss(n, i.bind(r), o);
    return l ? Qr(l) : gr(), a;
  }
  function ku(e, t) {
    const o = t.split(".");
    return () => {
      let r = e;
      for (let n = 0; n < o.length && r; n++) r = r[o[n]];
      return r;
    };
  }
  function dr(e, t) {
    if (!nt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
    if ((t.add(e), xt(e))) dr(e.value, t);
    else if (Me(e)) for (let o = 0; o < e.length; o++) dr(e[o], t);
    else if (iu(e) || Nr(e))
      e.forEach((o) => {
        dr(o, t);
      });
    else if (su(e)) for (const o in e) dr(e[o], t);
    return e;
  }
  function Eu() {
    const e = {
      isMounted: !1,
      isLeaving: !1,
      isUnmounting: !1,
      leavingVNodes: new Map(),
    };
    return (
      _t(() => {
        e.isMounted = !0;
      }),
      Ct(() => {
        e.isUnmounting = !0;
      }),
      e
    );
  }
  const Vt = [Function, Array],
    vg = {
      name: "BaseTransition",
      props: {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Vt,
        onEnter: Vt,
        onAfterEnter: Vt,
        onEnterCancelled: Vt,
        onBeforeLeave: Vt,
        onLeave: Vt,
        onAfterLeave: Vt,
        onLeaveCancelled: Vt,
        onBeforeAppear: Vt,
        onAppear: Vt,
        onAfterAppear: Vt,
        onAppearCancelled: Vt,
      },
      setup(e, { slots: t }) {
        const o = an(),
          r = Eu();
        let n;
        return () => {
          const i = t.default && cs(t.default(), !0);
          if (!i || !i.length) return;
          let l = i[0];
          if (i.length > 1) {
            for (const v of i)
              if (v.type !== jt) {
                l = v;
                break;
              }
          }
          const a = Le(e),
            { mode: s } = a;
          if (r.isLeaving) return Ll(l);
          const c = bc(l);
          if (!c) return Ll(l);
          const d = Fn(c, a, r, o);
          Dn(c, d);
          const u = o.subTree,
            h = u && bc(u);
          let p = !1;
          const { getTransitionKey: f } = c.type;
          if (f) {
            const v = f();
            n === void 0 ? (n = v) : v !== n && ((n = v), (p = !0));
          }
          if (h && h.type !== jt && (!sr(c, h) || p)) {
            const v = Fn(h, a, r, o);
            if ((Dn(h, v), s === "out-in"))
              return (
                (r.isLeaving = !0),
                (v.afterLeave = () => {
                  (r.isLeaving = !1), o.update.active !== !1 && o.update();
                }),
                Ll(l)
              );
            s === "in-out" &&
              c.type !== jt &&
              (v.delayLeave = (b, g, T) => {
                const O = Ou(r, h);
                (O[String(h.key)] = h),
                  (b._leaveCb = () => {
                    g(), (b._leaveCb = void 0), delete d.delayedLeave;
                  }),
                  (d.delayedLeave = T);
              });
          }
          return l;
        };
      },
    },
    Ru = vg;
  function Ou(e, t) {
    const { leavingVNodes: o } = e;
    let r = o.get(t.type);
    return r || ((r = Object.create(null)), o.set(t.type, r)), r;
  }
  function Fn(e, t, o, r) {
    const {
        appear: n,
        mode: i,
        persisted: l = !1,
        onBeforeEnter: a,
        onEnter: s,
        onAfterEnter: c,
        onEnterCancelled: d,
        onBeforeLeave: u,
        onLeave: h,
        onAfterLeave: p,
        onLeaveCancelled: f,
        onBeforeAppear: v,
        onAppear: b,
        onAfterAppear: g,
        onAppearCancelled: T,
      } = t,
      O = String(e.key),
      P = Ou(o, e),
      R = (S, M) => {
        S && Gt(S, r, 9, M);
      },
      V = (S, M) => {
        const C = M[1];
        R(S, M),
          Me(S) ? S.every((_) => _.length <= 1) && C() : S.length <= 1 && C();
      },
      x = {
        mode: i,
        persisted: l,
        beforeEnter(S) {
          let M = a;
          if (!o.isMounted)
            if (n) M = v || a;
            else return;
          S._leaveCb && S._leaveCb(!0);
          const C = P[O];
          C && sr(e, C) && C.el._leaveCb && C.el._leaveCb(), R(M, [S]);
        },
        enter(S) {
          let M = s,
            C = c,
            _ = d;
          if (!o.isMounted)
            if (n) (M = b || s), (C = g || c), (_ = T || d);
            else return;
          let y = !1;
          const K = (S._enterCb = (H) => {
            y ||
              ((y = !0),
              H ? R(_, [S]) : R(C, [S]),
              x.delayedLeave && x.delayedLeave(),
              (S._enterCb = void 0));
          });
          M ? V(M, [S, K]) : K();
        },
        leave(S, M) {
          const C = String(e.key);
          if ((S._enterCb && S._enterCb(!0), o.isUnmounting)) return M();
          R(u, [S]);
          let _ = !1;
          const y = (S._leaveCb = (K) => {
            _ ||
              ((_ = !0),
              M(),
              K ? R(f, [S]) : R(p, [S]),
              (S._leaveCb = void 0),
              P[C] === e && delete P[C]);
          });
          (P[C] = e), h ? V(h, [S, y]) : y();
        },
        clone(S) {
          return Fn(S, t, o, r);
        },
      };
    return x;
  }
  function Ll(e) {
    if (hl(e)) return (e = Po(e)), (e.children = null), e;
  }
  function bc(e) {
    return hl(e) ? (e.children ? e.children[0] : void 0) : e;
  }
  function Dn(e, t) {
    e.shapeFlag & 6 && e.component
      ? Dn(e.component.subTree, t)
      : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
  }
  function cs(e, t = !1, o) {
    let r = [],
      n = 0;
    for (let i = 0; i < e.length; i++) {
      let l = e[i];
      const a =
        o == null ? l.key : String(o) + String(l.key != null ? l.key : i);
      l.type === Ye
        ? (l.patchFlag & 128 && n++, (r = r.concat(cs(l.children, t, a))))
        : (t || l.type !== jt) && r.push(a != null ? Po(l, { key: a }) : l);
    }
    if (n > 1) for (let i = 0; i < r.length; i++) r[i].patchFlag = -2;
    return r;
  }
  function ue(e) {
    return Be(e) ? { setup: e, name: e.name } : e;
  }
  const $n = (e) => !!e.type.__asyncLoader,
    hl = (e) => e.type.__isKeepAlive;
  function ds(e, t) {
    Bu(e, "a", t);
  }
  function us(e, t) {
    Bu(e, "da", t);
  }
  function Bu(e, t, o = ft) {
    const r =
      e.__wdc ||
      (e.__wdc = () => {
        let n = o;
        for (; n; ) {
          if (n.isDeactivated) return;
          n = n.parent;
        }
        return e();
      });
    if ((pl(t, r, o), o)) {
      let n = o.parent;
      for (; n && n.parent; )
        hl(n.parent.vnode) && gg(r, t, o, n), (n = n.parent);
    }
  }
  function gg(e, t, o, r) {
    const n = pl(t, e, r, !0);
    fs(() => {
      Xa(r[t], n);
    }, o);
  }
  function pl(e, t, o = ft, r = !1) {
    if (o) {
      const n = o[e] || (o[e] = []),
        i =
          t.__weh ||
          (t.__weh = (...l) => {
            if (o.isUnmounted) return;
            on(), Qr(o);
            const a = Gt(t, o, e, l);
            return gr(), rn(), a;
          });
      return r ? n.unshift(i) : n.push(i), i;
    }
  }
  const _o =
      (e) =>
      (t, o = ft) =>
        (!Nn || e === "sp") && pl(e, (...r) => t(...r), o),
    nn = _o("bm"),
    _t = _o("m"),
    mg = _o("bu"),
    Au = _o("u"),
    Ct = _o("bum"),
    fs = _o("um"),
    bg = _o("sp"),
    xg = _o("rtg"),
    Cg = _o("rtc");
  function yg(e, t = ft) {
    pl("ec", e, t);
  }
  function ln(e, t) {
    const o = zt;
    if (o === null) return e;
    const r = ml(o) || o.proxy,
      n = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [l, a, s, c = et] = t[i];
      l &&
        (Be(l) && (l = { mounted: l, updated: l }),
        l.deep && dr(a),
        n.push({
          dir: l,
          instance: r,
          value: a,
          oldValue: void 0,
          arg: s,
          modifiers: c,
        }));
    }
    return e;
  }
  function Qo(e, t, o, r) {
    const n = e.dirs,
      i = t && t.dirs;
    for (let l = 0; l < n.length; l++) {
      const a = n[l];
      i && (a.oldValue = i[l].value);
      let s = a.dir[r];
      s && (on(), Gt(s, o, 8, [e.el, a, e, t]), rn());
    }
  }
  const wg = Symbol();
  function Pn(e, t, o = {}, r, n) {
    if (zt.isCE || (zt.parent && $n(zt.parent) && zt.parent.isCE))
      return t !== "default" && (o.name = t), Te("slot", o, r && r());
    let i = e[t];
    i && i._c && (i._d = !1), Ht();
    const l = i && Hu(i(o)),
      a = gs(
        Ye,
        { key: o.key || (l && l.key) || `_${t}` },
        l || (r ? r() : []),
        l && e._ === 1 ? 64 : -2
      );
    return (
      !n && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]),
      i && i._c && (i._d = !0),
      a
    );
  }
  function Hu(e) {
    return e.some((t) =>
      Wn(t) ? !(t.type === jt || (t.type === Ye && !Hu(t.children))) : !0
    )
      ? e
      : null;
  }
  const ga = (e) => (e ? (qu(e) ? ml(e) || e.proxy : ga(e.parent)) : null),
    Tn = vt(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => e.props,
      $attrs: (e) => e.attrs,
      $slots: (e) => e.slots,
      $refs: (e) => e.refs,
      $parent: (e) => ga(e.parent),
      $root: (e) => ga(e.root),
      $emit: (e) => e.emit,
      $options: (e) => hs(e),
      $forceUpdate: (e) => e.f || (e.f = () => as(e.update)),
      $nextTick: (e) => e.n || (e.n = $o.bind(e.proxy)),
      $watch: (e) => pg.bind(e),
    }),
    Wl = (e, t) => e !== et && !e.__isScriptSetup && je(e, t),
    Sg = {
      get({ _: e }, t) {
        const {
          ctx: o,
          setupState: r,
          data: n,
          props: i,
          accessCache: l,
          type: a,
          appContext: s,
        } = e;
        let c;
        if (t[0] !== "$") {
          const p = l[t];
          if (p !== void 0)
            switch (p) {
              case 1:
                return r[t];
              case 2:
                return n[t];
              case 4:
                return o[t];
              case 3:
                return i[t];
            }
          else {
            if (Wl(r, t)) return (l[t] = 1), r[t];
            if (n !== et && je(n, t)) return (l[t] = 2), n[t];
            if ((c = e.propsOptions[0]) && je(c, t)) return (l[t] = 3), i[t];
            if (o !== et && je(o, t)) return (l[t] = 4), o[t];
            ma && (l[t] = 0);
          }
        }
        const d = Tn[t];
        let u, h;
        if (d) return t === "$attrs" && At(e, "get", t), d(e);
        if ((u = a.__cssModules) && (u = u[t])) return u;
        if (o !== et && je(o, t)) return (l[t] = 4), o[t];
        if (((h = s.config.globalProperties), je(h, t))) return h[t];
      },
      set({ _: e }, t, o) {
        const { data: r, setupState: n, ctx: i } = e;
        return Wl(n, t)
          ? ((n[t] = o), !0)
          : r !== et && je(r, t)
          ? ((r[t] = o), !0)
          : je(e.props, t) || (t[0] === "$" && t.slice(1) in e)
          ? !1
          : ((i[t] = o), !0);
      },
      has(
        {
          _: {
            data: e,
            setupState: t,
            accessCache: o,
            ctx: r,
            appContext: n,
            propsOptions: i,
          },
        },
        l
      ) {
        let a;
        return (
          !!o[l] ||
          (e !== et && je(e, l)) ||
          Wl(t, l) ||
          ((a = i[0]) && je(a, l)) ||
          je(r, l) ||
          je(Tn, l) ||
          je(n.config.globalProperties, l)
        );
      },
      defineProperty(e, t, o) {
        return (
          o.get != null
            ? (e._.accessCache[t] = 0)
            : je(o, "value") && this.set(e, t, o.value, null),
          Reflect.defineProperty(e, t, o)
        );
      },
    };
  let ma = !0;
  function $g(e) {
    const t = hs(e),
      o = e.proxy,
      r = e.ctx;
    (ma = !1), t.beforeCreate && xc(t.beforeCreate, e, "bc");
    const {
      data: n,
      computed: i,
      methods: l,
      watch: a,
      provide: s,
      inject: c,
      created: d,
      beforeMount: u,
      mounted: h,
      beforeUpdate: p,
      updated: f,
      activated: v,
      deactivated: b,
      beforeDestroy: g,
      beforeUnmount: T,
      destroyed: O,
      unmounted: P,
      render: R,
      renderTracked: V,
      renderTriggered: x,
      errorCaptured: S,
      serverPrefetch: M,
      expose: C,
      inheritAttrs: _,
      components: y,
      directives: K,
      filters: H,
    } = t;
    if ((c && Pg(c, r, null, e.appContext.config.unwrapInjectedRef), l))
      for (const F in l) {
        const Q = l[F];
        Be(Q) && (r[F] = Q.bind(o));
      }
    if (n) {
      const F = n.call(o, o);
      nt(F) && (e.data = dl(F));
    }
    if (((ma = !0), i))
      for (const F in i) {
        const Q = i[F],
          W = Be(Q) ? Q.bind(o, o) : Be(Q.get) ? Q.get.bind(o, o) : oo,
          ee = !Be(Q) && Be(Q.set) ? Q.set.bind(o) : oo,
          ve = B({ get: W, set: ee });
        Object.defineProperty(r, F, {
          enumerable: !0,
          configurable: !0,
          get: () => ve.value,
          set: (ae) => (ve.value = ae),
        });
      }
    if (a) for (const F in a) Fu(a[F], r, o, F);
    if (s) {
      const F = Be(s) ? s.call(o) : s;
      Reflect.ownKeys(F).forEach((Q) => {
        ot(Q, F[Q]);
      });
    }
    d && xc(d, e, "c");
    function k(F, Q) {
      Me(Q) ? Q.forEach((W) => F(W.bind(o))) : Q && F(Q.bind(o));
    }
    if (
      (k(nn, u),
      k(_t, h),
      k(mg, p),
      k(Au, f),
      k(ds, v),
      k(us, b),
      k(yg, S),
      k(Cg, V),
      k(xg, x),
      k(Ct, T),
      k(fs, P),
      k(bg, M),
      Me(C))
    )
      if (C.length) {
        const F = e.exposed || (e.exposed = {});
        C.forEach((Q) => {
          Object.defineProperty(F, Q, {
            get: () => o[Q],
            set: (W) => (o[Q] = W),
          });
        });
      } else e.exposed || (e.exposed = {});
    R && e.render === oo && (e.render = R),
      _ != null && (e.inheritAttrs = _),
      y && (e.components = y),
      K && (e.directives = K);
  }
  function Pg(e, t, o = oo, r = !1) {
    Me(e) && (e = ba(e));
    for (const n in e) {
      const i = e[n];
      let l;
      nt(i)
        ? "default" in i
          ? (l = Oe(i.from || n, i.default, !0))
          : (l = Oe(i.from || n))
        : (l = Oe(i)),
        xt(l) && r
          ? Object.defineProperty(t, n, {
              enumerable: !0,
              configurable: !0,
              get: () => l.value,
              set: (a) => (l.value = a),
            })
          : (t[n] = l);
    }
  }
  function xc(e, t, o) {
    Gt(Me(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, o);
  }
  function Fu(e, t, o, r) {
    const n = r.includes(".") ? ku(o, r) : () => o[r];
    if (ht(e)) {
      const i = t[e];
      Be(i) && rt(n, i);
    } else if (Be(e)) rt(n, e.bind(o));
    else if (nt(e))
      if (Me(e)) e.forEach((i) => Fu(i, t, o, r));
      else {
        const i = Be(e.handler) ? e.handler.bind(o) : t[e.handler];
        Be(i) && rt(n, i, e);
      }
  }
  function hs(e) {
    const t = e.type,
      { mixins: o, extends: r } = t,
      {
        mixins: n,
        optionsCache: i,
        config: { optionMergeStrategies: l },
      } = e.appContext,
      a = i.get(t);
    let s;
    return (
      a
        ? (s = a)
        : !n.length && !o && !r
        ? (s = t)
        : ((s = {}),
          n.length && n.forEach((c) => ji(s, c, l, !0)),
          ji(s, t, l)),
      nt(t) && i.set(t, s),
      s
    );
  }
  function ji(e, t, o, r = !1) {
    const { mixins: n, extends: i } = t;
    i && ji(e, i, o, !0), n && n.forEach((l) => ji(e, l, o, !0));
    for (const l in t)
      if (!(r && l === "expose")) {
        const a = Tg[l] || (o && o[l]);
        e[l] = a ? a(e[l], t[l]) : t[l];
      }
    return e;
  }
  const Tg = {
    data: Cc,
    props: ir,
    emits: ir,
    methods: ir,
    computed: ir,
    beforeCreate: Mt,
    created: Mt,
    beforeMount: Mt,
    mounted: Mt,
    beforeUpdate: Mt,
    updated: Mt,
    beforeDestroy: Mt,
    beforeUnmount: Mt,
    destroyed: Mt,
    unmounted: Mt,
    activated: Mt,
    deactivated: Mt,
    errorCaptured: Mt,
    serverPrefetch: Mt,
    components: ir,
    directives: ir,
    watch: Ig,
    provide: Cc,
    inject: zg,
  };
  function Cc(e, t) {
    return t
      ? e
        ? function () {
            return vt(
              Be(e) ? e.call(this, this) : e,
              Be(t) ? t.call(this, this) : t
            );
          }
        : t
      : e;
  }
  function zg(e, t) {
    return ir(ba(e), ba(t));
  }
  function ba(e) {
    if (Me(e)) {
      const t = {};
      for (let o = 0; o < e.length; o++) t[e[o]] = e[o];
      return t;
    }
    return e;
  }
  function Mt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function ir(e, t) {
    return e ? vt(vt(Object.create(null), e), t) : t;
  }
  function Ig(e, t) {
    if (!e) return t;
    if (!t) return e;
    const o = vt(Object.create(null), e);
    for (const r in t) o[r] = Mt(e[r], t[r]);
    return o;
  }
  function _g(e, t, o, r = !1) {
    const n = {},
      i = {};
    Fi(i, gl, 1), (e.propsDefaults = Object.create(null)), Du(e, t, n, i);
    for (const l in e.propsOptions[0]) l in n || (n[l] = void 0);
    o
      ? (e.props = r ? n : Yv(n))
      : e.type.props
      ? (e.props = n)
      : (e.props = i),
      (e.attrs = i);
  }
  function Mg(e, t, o, r) {
    const {
        props: n,
        attrs: i,
        vnode: { patchFlag: l },
      } = e,
      a = Le(n),
      [s] = e.propsOptions;
    let c = !1;
    if ((r || l > 0) && !(l & 16)) {
      if (l & 8) {
        const d = e.vnode.dynamicProps;
        for (let u = 0; u < d.length; u++) {
          let h = d[u];
          if (fl(e.emitsOptions, h)) continue;
          const p = t[h];
          if (s)
            if (je(i, h)) p !== i[h] && ((i[h] = p), (c = !0));
            else {
              const f = Zr(h);
              n[f] = xa(s, a, f, p, e, !1);
            }
          else p !== i[h] && ((i[h] = p), (c = !0));
        }
      }
    } else {
      Du(e, t, n, i) && (c = !0);
      let d;
      for (const u in a)
        (!t || (!je(t, u) && ((d = tn(u)) === u || !je(t, d)))) &&
          (s
            ? o &&
              (o[u] !== void 0 || o[d] !== void 0) &&
              (n[u] = xa(s, a, u, void 0, e, !0))
            : delete n[u]);
      if (i !== a)
        for (const u in i) (!t || !je(t, u)) && (delete i[u], (c = !0));
    }
    c && So(e, "set", "$attrs");
  }
  function Du(e, t, o, r) {
    const [n, i] = e.propsOptions;
    let l = !1,
      a;
    if (t)
      for (let s in t) {
        if (_i(s)) continue;
        const c = t[s];
        let d;
        n && je(n, (d = Zr(s)))
          ? !i || !i.includes(d)
            ? (o[d] = c)
            : ((a || (a = {}))[d] = c)
          : fl(e.emitsOptions, s) ||
            ((!(s in r) || c !== r[s]) && ((r[s] = c), (l = !0)));
      }
    if (i) {
      const s = Le(o),
        c = a || et;
      for (let d = 0; d < i.length; d++) {
        const u = i[d];
        o[u] = xa(n, s, u, c[u], e, !je(c, u));
      }
    }
    return l;
  }
  function xa(e, t, o, r, n, i) {
    const l = e[o];
    if (l != null) {
      const a = je(l, "default");
      if (a && r === void 0) {
        const s = l.default;
        if (l.type !== Function && Be(s)) {
          const { propsDefaults: c } = n;
          o in c ? (r = c[o]) : (Qr(n), (r = c[o] = s.call(null, t)), gr());
        } else r = s;
      }
      l[0] &&
        (i && !a ? (r = !1) : l[1] && (r === "" || r === tn(o)) && (r = !0));
    }
    return r;
  }
  function Lu(e, t, o = !1) {
    const r = t.propsCache,
      n = r.get(e);
    if (n) return n;
    const i = e.props,
      l = {},
      a = [];
    let s = !1;
    if (!Be(e)) {
      const d = (u) => {
        s = !0;
        const [h, p] = Lu(u, t, !0);
        vt(l, h), p && a.push(...p);
      };
      !o && t.mixins.length && t.mixins.forEach(d),
        e.extends && d(e.extends),
        e.mixins && e.mixins.forEach(d);
    }
    if (!i && !s) return nt(e) && r.set(e, Wr), Wr;
    if (Me(i))
      for (let d = 0; d < i.length; d++) {
        const u = Zr(i[d]);
        yc(u) && (l[u] = et);
      }
    else if (i)
      for (const d in i) {
        const u = Zr(d);
        if (yc(u)) {
          const h = i[d],
            p = (l[u] = Me(h) || Be(h) ? { type: h } : Object.assign({}, h));
          if (p) {
            const f = $c(Boolean, p.type),
              v = $c(String, p.type);
            (p[0] = f > -1),
              (p[1] = v < 0 || f < v),
              (f > -1 || je(p, "default")) && a.push(u);
          }
        }
      }
    const c = [l, a];
    return nt(e) && r.set(e, c), c;
  }
  function yc(e) {
    return e[0] !== "$";
  }
  function wc(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
  }
  function Sc(e, t) {
    return wc(e) === wc(t);
  }
  function $c(e, t) {
    return Me(t) ? t.findIndex((o) => Sc(o, e)) : Be(t) && Sc(t, e) ? 0 : -1;
  }
  const Wu = (e) => e[0] === "_" || e === "$stable",
    ps = (e) => (Me(e) ? e.map(uo) : [uo(e)]),
    kg = (e, t, o) => {
      if (t._n) return t;
      const r = Ze((...n) => ps(t(...n)), o);
      return (r._c = !1), r;
    },
    Nu = (e, t, o) => {
      const r = e._ctx;
      for (const n in e) {
        if (Wu(n)) continue;
        const i = e[n];
        if (Be(i)) t[n] = kg(n, i, r);
        else if (i != null) {
          const l = ps(i);
          t[n] = () => l;
        }
      }
    },
    ju = (e, t) => {
      const o = ps(t);
      e.slots.default = () => o;
    },
    Eg = (e, t) => {
      if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? ((e.slots = Le(t)), Fi(t, "_", o)) : Nu(t, (e.slots = {}));
      } else (e.slots = {}), t && ju(e, t);
      Fi(e.slots, gl, 1);
    },
    Rg = (e, t, o) => {
      const { vnode: r, slots: n } = e;
      let i = !0,
        l = et;
      if (r.shapeFlag & 32) {
        const a = t._;
        a
          ? o && a === 1
            ? (i = !1)
            : (vt(n, t), !o && a === 1 && delete n._)
          : ((i = !t.$stable), Nu(t, n)),
          (l = t);
      } else t && (ju(e, t), (l = { default: 1 }));
      if (i) for (const a in n) !Wu(a) && !(a in l) && delete n[a];
    };
  function Vu() {
    return {
      app: null,
      config: {
        isNativeTag: dv,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {},
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap(),
    };
  }
  let Og = 0;
  function Bg(e, t) {
    return function (r, n = null) {
      Be(r) || (r = Object.assign({}, r)), n != null && !nt(n) && (n = null);
      const i = Vu(),
        l = new Set();
      let a = !1;
      const s = (i.app = {
        _uid: Og++,
        _component: r,
        _props: n,
        _container: null,
        _context: i,
        _instance: null,
        version: om,
        get config() {
          return i.config;
        },
        set config(c) {},
        use(c, ...d) {
          return (
            l.has(c) ||
              (c && Be(c.install)
                ? (l.add(c), c.install(s, ...d))
                : Be(c) && (l.add(c), c(s, ...d))),
            s
          );
        },
        mixin(c) {
          return i.mixins.includes(c) || i.mixins.push(c), s;
        },
        component(c, d) {
          return d ? ((i.components[c] = d), s) : i.components[c];
        },
        directive(c, d) {
          return d ? ((i.directives[c] = d), s) : i.directives[c];
        },
        mount(c, d, u) {
          if (!a) {
            const h = Te(r, n);
            return (
              (h.appContext = i),
              d && t ? t(h, c) : e(h, c, u),
              (a = !0),
              (s._container = c),
              (c.__vue_app__ = s),
              ml(h.component) || h.component.proxy
            );
          }
        },
        unmount() {
          a && (e(null, s._container), delete s._container.__vue_app__);
        },
        provide(c, d) {
          return (i.provides[c] = d), s;
        },
      });
      return s;
    };
  }
  function Ca(e, t, o, r, n = !1) {
    if (Me(e)) {
      e.forEach((h, p) => Ca(h, t && (Me(t) ? t[p] : t), o, r, n));
      return;
    }
    if ($n(r) && !n) return;
    const i = r.shapeFlag & 4 ? ml(r.component) || r.component.proxy : r.el,
      l = n ? null : i,
      { i: a, r: s } = e,
      c = t && t.r,
      d = a.refs === et ? (a.refs = {}) : a.refs,
      u = a.setupState;
    if (
      (c != null &&
        c !== s &&
        (ht(c)
          ? ((d[c] = null), je(u, c) && (u[c] = null))
          : xt(c) && (c.value = null)),
      Be(s))
    )
      jo(s, a, 12, [l, d]);
    else {
      const h = ht(s),
        p = xt(s);
      if (h || p) {
        const f = () => {
          if (e.f) {
            const v = h ? (je(u, s) ? u[s] : d[s]) : s.value;
            n
              ? Me(v) && Xa(v, i)
              : Me(v)
              ? v.includes(i) || v.push(i)
              : h
              ? ((d[s] = [i]), je(u, s) && (u[s] = d[s]))
              : ((s.value = [i]), e.k && (d[e.k] = s.value));
          } else
            h
              ? ((d[s] = l), je(u, s) && (u[s] = l))
              : p && ((s.value = l), e.k && (d[e.k] = l));
        };
        l ? ((f.id = -1), Bt(f, o)) : f();
      }
    }
  }
  const Bt = hg;
  function Ag(e) {
    return Hg(e);
  }
  function Hg(e, t) {
    const o = bv();
    o.__VUE__ = !0;
    const {
        insert: r,
        remove: n,
        patchProp: i,
        createElement: l,
        createText: a,
        createComment: s,
        setText: c,
        setElementText: d,
        parentNode: u,
        nextSibling: h,
        setScopeId: p = oo,
        insertStaticContent: f,
      } = e,
      v = (
        w,
        I,
        L,
        X = null,
        Z = null,
        ne = null,
        se = !1,
        oe = null,
        Y = !!I.dynamicChildren
      ) => {
        if (w === I) return;
        w && !sr(w, I) && ((X = $e(w)), ae(w, Z, ne, !0), (w = null)),
          I.patchFlag === -2 && ((Y = !1), (I.dynamicChildren = null));
        const { type: z, ref: G, shapeFlag: ie } = I;
        switch (z) {
          case vl:
            b(w, I, L, X);
            break;
          case jt:
            g(w, I, L, X);
            break;
          case Nl:
            w == null && T(I, L, X, se);
            break;
          case Ye:
            y(w, I, L, X, Z, ne, se, oe, Y);
            break;
          default:
            ie & 1
              ? R(w, I, L, X, Z, ne, se, oe, Y)
              : ie & 6
              ? K(w, I, L, X, Z, ne, se, oe, Y)
              : (ie & 64 || ie & 128) &&
                z.process(w, I, L, X, Z, ne, se, oe, Y, ge);
        }
        G != null && Z && Ca(G, w && w.ref, ne, I || w, !I);
      },
      b = (w, I, L, X) => {
        if (w == null) r((I.el = a(I.children)), L, X);
        else {
          const Z = (I.el = w.el);
          I.children !== w.children && c(Z, I.children);
        }
      },
      g = (w, I, L, X) => {
        w == null ? r((I.el = s(I.children || "")), L, X) : (I.el = w.el);
      },
      T = (w, I, L, X) => {
        [w.el, w.anchor] = f(w.children, I, L, X, w.el, w.anchor);
      },
      O = ({ el: w, anchor: I }, L, X) => {
        let Z;
        for (; w && w !== I; ) (Z = h(w)), r(w, L, X), (w = Z);
        r(I, L, X);
      },
      P = ({ el: w, anchor: I }) => {
        let L;
        for (; w && w !== I; ) (L = h(w)), n(w), (w = L);
        n(I);
      },
      R = (w, I, L, X, Z, ne, se, oe, Y) => {
        (se = se || I.type === "svg"),
          w == null ? V(I, L, X, Z, ne, se, oe, Y) : M(w, I, Z, ne, se, oe, Y);
      },
      V = (w, I, L, X, Z, ne, se, oe) => {
        let Y, z;
        const {
          type: G,
          props: ie,
          shapeFlag: fe,
          transition: ye,
          dirs: _e,
        } = w;
        if (
          ((Y = w.el = l(w.type, ne, ie && ie.is, ie)),
          fe & 8
            ? d(Y, w.children)
            : fe & 16 &&
              S(w.children, Y, null, X, Z, ne && G !== "foreignObject", se, oe),
          _e && Qo(w, null, X, "created"),
          x(Y, w, w.scopeId, se, X),
          ie)
        ) {
          for (const Fe in ie)
            Fe !== "value" &&
              !_i(Fe) &&
              i(Y, Fe, null, ie[Fe], ne, w.children, X, Z, ze);
          "value" in ie && i(Y, "value", null, ie.value),
            (z = ie.onVnodeBeforeMount) && lo(z, X, w);
        }
        _e && Qo(w, null, X, "beforeMount");
        const De = (!Z || (Z && !Z.pendingBranch)) && ye && !ye.persisted;
        De && ye.beforeEnter(Y),
          r(Y, I, L),
          ((z = ie && ie.onVnodeMounted) || De || _e) &&
            Bt(() => {
              z && lo(z, X, w),
                De && ye.enter(Y),
                _e && Qo(w, null, X, "mounted");
            }, Z);
      },
      x = (w, I, L, X, Z) => {
        if ((L && p(w, L), X))
          for (let ne = 0; ne < X.length; ne++) p(w, X[ne]);
        if (Z) {
          let ne = Z.subTree;
          if (I === ne) {
            const se = Z.vnode;
            x(w, se, se.scopeId, se.slotScopeIds, Z.parent);
          }
        }
      },
      S = (w, I, L, X, Z, ne, se, oe, Y = 0) => {
        for (let z = Y; z < w.length; z++) {
          const G = (w[z] = oe ? Fo(w[z]) : uo(w[z]));
          v(null, G, I, L, X, Z, ne, se, oe);
        }
      },
      M = (w, I, L, X, Z, ne, se) => {
        const oe = (I.el = w.el);
        let { patchFlag: Y, dynamicChildren: z, dirs: G } = I;
        Y |= w.patchFlag & 16;
        const ie = w.props || et,
          fe = I.props || et;
        let ye;
        L && er(L, !1),
          (ye = fe.onVnodeBeforeUpdate) && lo(ye, L, I, w),
          G && Qo(I, w, L, "beforeUpdate"),
          L && er(L, !0);
        const _e = Z && I.type !== "foreignObject";
        if (
          (z
            ? C(w.dynamicChildren, z, oe, L, X, _e, ne)
            : se || Q(w, I, oe, null, L, X, _e, ne, !1),
          Y > 0)
        ) {
          if (Y & 16) _(oe, I, ie, fe, L, X, Z);
          else if (
            (Y & 2 &&
              ie.class !== fe.class &&
              i(oe, "class", null, fe.class, Z),
            Y & 4 && i(oe, "style", ie.style, fe.style, Z),
            Y & 8)
          ) {
            const De = I.dynamicProps;
            for (let Fe = 0; Fe < De.length; Fe++) {
              const Ke = De[Fe],
                st = ie[Ke],
                mt = fe[Ke];
              (mt !== st || Ke === "value") &&
                i(oe, Ke, st, mt, Z, w.children, L, X, ze);
            }
          }
          Y & 1 && w.children !== I.children && d(oe, I.children);
        } else !se && z == null && _(oe, I, ie, fe, L, X, Z);
        ((ye = fe.onVnodeUpdated) || G) &&
          Bt(() => {
            ye && lo(ye, L, I, w), G && Qo(I, w, L, "updated");
          }, X);
      },
      C = (w, I, L, X, Z, ne, se) => {
        for (let oe = 0; oe < I.length; oe++) {
          const Y = w[oe],
            z = I[oe],
            G =
              Y.el && (Y.type === Ye || !sr(Y, z) || Y.shapeFlag & 70)
                ? u(Y.el)
                : L;
          v(Y, z, G, null, X, Z, ne, se, !0);
        }
      },
      _ = (w, I, L, X, Z, ne, se) => {
        if (L !== X) {
          if (L !== et)
            for (const oe in L)
              !_i(oe) &&
                !(oe in X) &&
                i(w, oe, L[oe], null, se, I.children, Z, ne, ze);
          for (const oe in X) {
            if (_i(oe)) continue;
            const Y = X[oe],
              z = L[oe];
            Y !== z &&
              oe !== "value" &&
              i(w, oe, z, Y, se, I.children, Z, ne, ze);
          }
          "value" in X && i(w, "value", L.value, X.value);
        }
      },
      y = (w, I, L, X, Z, ne, se, oe, Y) => {
        const z = (I.el = w ? w.el : a("")),
          G = (I.anchor = w ? w.anchor : a(""));
        let { patchFlag: ie, dynamicChildren: fe, slotScopeIds: ye } = I;
        ye && (oe = oe ? oe.concat(ye) : ye),
          w == null
            ? (r(z, L, X), r(G, L, X), S(I.children, L, G, Z, ne, se, oe, Y))
            : ie > 0 && ie & 64 && fe && w.dynamicChildren
            ? (C(w.dynamicChildren, fe, L, Z, ne, se, oe),
              (I.key != null || (Z && I === Z.subTree)) && vs(w, I, !0))
            : Q(w, I, L, G, Z, ne, se, oe, Y);
      },
      K = (w, I, L, X, Z, ne, se, oe, Y) => {
        (I.slotScopeIds = oe),
          w == null
            ? I.shapeFlag & 512
              ? Z.ctx.activate(I, L, X, se, Y)
              : H(I, L, X, Z, ne, se, Y)
            : q(w, I, Y);
      },
      H = (w, I, L, X, Z, ne, se) => {
        const oe = (w.component = qg(w, X, Z));
        if ((hl(w) && (oe.ctx.renderer = ge), Yg(oe), oe.asyncDep)) {
          if ((Z && Z.registerDep(oe, k), !w.el)) {
            const Y = (oe.subTree = Te(jt));
            g(null, Y, I, L);
          }
          return;
        }
        k(oe, w, I, L, Z, ne, se);
      },
      q = (w, I, L) => {
        const X = (I.component = w.component);
        if (dg(w, I, L))
          if (X.asyncDep && !X.asyncResolved) {
            F(X, I, L);
            return;
          } else (X.next = I), ng(X.update), X.update();
        else (I.el = w.el), (X.vnode = I);
      },
      k = (w, I, L, X, Z, ne, se) => {
        const oe = () => {
            if (w.isMounted) {
              let { next: G, bu: ie, u: fe, parent: ye, vnode: _e } = w,
                De = G,
                Fe;
              er(w, !1),
                G ? ((G.el = _e.el), F(w, G, se)) : (G = _e),
                ie && Fl(ie),
                (Fe = G.props && G.props.onVnodeBeforeUpdate) &&
                  lo(Fe, ye, G, _e),
                er(w, !0);
              const Ke = Dl(w),
                st = w.subTree;
              (w.subTree = Ke),
                v(st, Ke, u(st.el), $e(st), w, Z, ne),
                (G.el = Ke.el),
                De === null && ug(w, Ke.el),
                fe && Bt(fe, Z),
                (Fe = G.props && G.props.onVnodeUpdated) &&
                  Bt(() => lo(Fe, ye, G, _e), Z);
            } else {
              let G;
              const { el: ie, props: fe } = I,
                { bm: ye, m: _e, parent: De } = w,
                Fe = $n(I);
              if (
                (er(w, !1),
                ye && Fl(ye),
                !Fe && (G = fe && fe.onVnodeBeforeMount) && lo(G, De, I),
                er(w, !0),
                ie && at)
              ) {
                const Ke = () => {
                  (w.subTree = Dl(w)), at(ie, w.subTree, w, Z, null);
                };
                Fe
                  ? I.type.__asyncLoader().then(() => !w.isUnmounted && Ke())
                  : Ke();
              } else {
                const Ke = (w.subTree = Dl(w));
                v(null, Ke, L, X, w, Z, ne), (I.el = Ke.el);
              }
              if ((_e && Bt(_e, Z), !Fe && (G = fe && fe.onVnodeMounted))) {
                const Ke = I;
                Bt(() => lo(G, De, Ke), Z);
              }
              (I.shapeFlag & 256 ||
                (De && $n(De.vnode) && De.vnode.shapeFlag & 256)) &&
                w.a &&
                Bt(w.a, Z),
                (w.isMounted = !0),
                (I = L = X = null);
            }
          },
          Y = (w.effect = new es(oe, () => as(z), w.scope)),
          z = (w.update = () => Y.run());
        (z.id = w.uid), er(w, !0), z();
      },
      F = (w, I, L) => {
        I.component = w;
        const X = w.vnode.props;
        (w.vnode = I),
          (w.next = null),
          Mg(w, I.props, X, L),
          Rg(w, I.children, L),
          on(),
          gc(),
          rn();
      },
      Q = (w, I, L, X, Z, ne, se, oe, Y = !1) => {
        const z = w && w.children,
          G = w ? w.shapeFlag : 0,
          ie = I.children,
          { patchFlag: fe, shapeFlag: ye } = I;
        if (fe > 0) {
          if (fe & 128) {
            ee(z, ie, L, X, Z, ne, se, oe, Y);
            return;
          } else if (fe & 256) {
            W(z, ie, L, X, Z, ne, se, oe, Y);
            return;
          }
        }
        ye & 8
          ? (G & 16 && ze(z, Z, ne), ie !== z && d(L, ie))
          : G & 16
          ? ye & 16
            ? ee(z, ie, L, X, Z, ne, se, oe, Y)
            : ze(z, Z, ne, !0)
          : (G & 8 && d(L, ""), ye & 16 && S(ie, L, X, Z, ne, se, oe, Y));
      },
      W = (w, I, L, X, Z, ne, se, oe, Y) => {
        (w = w || Wr), (I = I || Wr);
        const z = w.length,
          G = I.length,
          ie = Math.min(z, G);
        let fe;
        for (fe = 0; fe < ie; fe++) {
          const ye = (I[fe] = Y ? Fo(I[fe]) : uo(I[fe]));
          v(w[fe], ye, L, null, Z, ne, se, oe, Y);
        }
        z > G ? ze(w, Z, ne, !0, !1, ie) : S(I, L, X, Z, ne, se, oe, Y, ie);
      },
      ee = (w, I, L, X, Z, ne, se, oe, Y) => {
        let z = 0;
        const G = I.length;
        let ie = w.length - 1,
          fe = G - 1;
        for (; z <= ie && z <= fe; ) {
          const ye = w[z],
            _e = (I[z] = Y ? Fo(I[z]) : uo(I[z]));
          if (sr(ye, _e)) v(ye, _e, L, null, Z, ne, se, oe, Y);
          else break;
          z++;
        }
        for (; z <= ie && z <= fe; ) {
          const ye = w[ie],
            _e = (I[fe] = Y ? Fo(I[fe]) : uo(I[fe]));
          if (sr(ye, _e)) v(ye, _e, L, null, Z, ne, se, oe, Y);
          else break;
          ie--, fe--;
        }
        if (z > ie) {
          if (z <= fe) {
            const ye = fe + 1,
              _e = ye < G ? I[ye].el : X;
            for (; z <= fe; )
              v(
                null,
                (I[z] = Y ? Fo(I[z]) : uo(I[z])),
                L,
                _e,
                Z,
                ne,
                se,
                oe,
                Y
              ),
                z++;
          }
        } else if (z > fe) for (; z <= ie; ) ae(w[z], Z, ne, !0), z++;
        else {
          const ye = z,
            _e = z,
            De = new Map();
          for (z = _e; z <= fe; z++) {
            const Ge = (I[z] = Y ? Fo(I[z]) : uo(I[z]));
            Ge.key != null && De.set(Ge.key, z);
          }
          let Fe,
            Ke = 0;
          const st = fe - _e + 1;
          let mt = !1,
            no = 0;
          const Rt = new Array(st);
          for (z = 0; z < st; z++) Rt[z] = 0;
          for (z = ye; z <= ie; z++) {
            const Ge = w[z];
            if (Ke >= st) {
              ae(Ge, Z, ne, !0);
              continue;
            }
            let $;
            if (Ge.key != null) $ = De.get(Ge.key);
            else
              for (Fe = _e; Fe <= fe; Fe++)
                if (Rt[Fe - _e] === 0 && sr(Ge, I[Fe])) {
                  $ = Fe;
                  break;
                }
            $ === void 0
              ? ae(Ge, Z, ne, !0)
              : ((Rt[$ - _e] = z + 1),
                $ >= no ? (no = $) : (mt = !0),
                v(Ge, I[$], L, null, Z, ne, se, oe, Y),
                Ke++);
          }
          const St = mt ? Fg(Rt) : Wr;
          for (Fe = St.length - 1, z = st - 1; z >= 0; z--) {
            const Ge = _e + z,
              $ = I[Ge],
              j = Ge + 1 < G ? I[Ge + 1].el : X;
            Rt[z] === 0
              ? v(null, $, L, j, Z, ne, se, oe, Y)
              : mt && (Fe < 0 || z !== St[Fe] ? ve($, L, j, 2) : Fe--);
          }
        }
      },
      ve = (w, I, L, X, Z = null) => {
        const {
          el: ne,
          type: se,
          transition: oe,
          children: Y,
          shapeFlag: z,
        } = w;
        if (z & 6) {
          ve(w.component.subTree, I, L, X);
          return;
        }
        if (z & 128) {
          w.suspense.move(I, L, X);
          return;
        }
        if (z & 64) {
          se.move(w, I, L, ge);
          return;
        }
        if (se === Ye) {
          r(ne, I, L);
          for (let ie = 0; ie < Y.length; ie++) ve(Y[ie], I, L, X);
          r(w.anchor, I, L);
          return;
        }
        if (se === Nl) {
          O(w, I, L);
          return;
        }
        if (X !== 2 && z & 1 && oe)
          if (X === 0)
            oe.beforeEnter(ne), r(ne, I, L), Bt(() => oe.enter(ne), Z);
          else {
            const { leave: ie, delayLeave: fe, afterLeave: ye } = oe,
              _e = () => r(ne, I, L),
              De = () => {
                ie(ne, () => {
                  _e(), ye && ye();
                });
              };
            fe ? fe(ne, _e, De) : De();
          }
        else r(ne, I, L);
      },
      ae = (w, I, L, X = !1, Z = !1) => {
        const {
          type: ne,
          props: se,
          ref: oe,
          children: Y,
          dynamicChildren: z,
          shapeFlag: G,
          patchFlag: ie,
          dirs: fe,
        } = w;
        if ((oe != null && Ca(oe, null, L, w, !0), G & 256)) {
          I.ctx.deactivate(w);
          return;
        }
        const ye = G & 1 && fe,
          _e = !$n(w);
        let De;
        if ((_e && (De = se && se.onVnodeBeforeUnmount) && lo(De, I, w), G & 6))
          He(w.component, L, X);
        else {
          if (G & 128) {
            w.suspense.unmount(L, X);
            return;
          }
          ye && Qo(w, null, I, "beforeUnmount"),
            G & 64
              ? w.type.remove(w, I, L, Z, ge, X)
              : z && (ne !== Ye || (ie > 0 && ie & 64))
              ? ze(z, I, L, !1, !0)
              : ((ne === Ye && ie & 384) || (!Z && G & 16)) && ze(Y, I, L),
            X && he(w);
        }
        ((_e && (De = se && se.onVnodeUnmounted)) || ye) &&
          Bt(() => {
            De && lo(De, I, w), ye && Qo(w, null, I, "unmounted");
          }, L);
      },
      he = (w) => {
        const { type: I, el: L, anchor: X, transition: Z } = w;
        if (I === Ye) {
          We(L, X);
          return;
        }
        if (I === Nl) {
          P(w);
          return;
        }
        const ne = () => {
          n(L), Z && !Z.persisted && Z.afterLeave && Z.afterLeave();
        };
        if (w.shapeFlag & 1 && Z && !Z.persisted) {
          const { leave: se, delayLeave: oe } = Z,
            Y = () => se(L, ne);
          oe ? oe(w.el, ne, Y) : Y();
        } else ne();
      },
      We = (w, I) => {
        let L;
        for (; w !== I; ) (L = h(w)), n(w), (w = L);
        n(I);
      },
      He = (w, I, L) => {
        const { bum: X, scope: Z, update: ne, subTree: se, um: oe } = w;
        X && Fl(X),
          Z.stop(),
          ne && ((ne.active = !1), ae(se, w, I, L)),
          oe && Bt(oe, I),
          Bt(() => {
            w.isUnmounted = !0;
          }, I),
          I &&
            I.pendingBranch &&
            !I.isUnmounted &&
            w.asyncDep &&
            !w.asyncResolved &&
            w.suspenseId === I.pendingId &&
            (I.deps--, I.deps === 0 && I.resolve());
      },
      ze = (w, I, L, X = !1, Z = !1, ne = 0) => {
        for (let se = ne; se < w.length; se++) ae(w[se], I, L, X, Z);
      },
      $e = (w) =>
        w.shapeFlag & 6
          ? $e(w.component.subTree)
          : w.shapeFlag & 128
          ? w.suspense.next()
          : h(w.anchor || w.el),
      Ve = (w, I, L) => {
        w == null
          ? I._vnode && ae(I._vnode, null, null, !0)
          : v(I._vnode || null, w, I, null, null, null, L),
          gc(),
          zu(),
          (I._vnode = w);
      },
      ge = {
        p: v,
        um: ae,
        m: ve,
        r: he,
        mt: H,
        mc: S,
        pc: Q,
        pbc: C,
        n: $e,
        o: e,
      };
    let Ue, at;
    return (
      t && ([Ue, at] = t(ge)),
      { render: Ve, hydrate: Ue, createApp: Bg(Ve, Ue) }
    );
  }
  function er({ effect: e, update: t }, o) {
    e.allowRecurse = t.allowRecurse = o;
  }
  function vs(e, t, o = !1) {
    const r = e.children,
      n = t.children;
    if (Me(r) && Me(n))
      for (let i = 0; i < r.length; i++) {
        const l = r[i];
        let a = n[i];
        a.shapeFlag & 1 &&
          !a.dynamicChildren &&
          ((a.patchFlag <= 0 || a.patchFlag === 32) &&
            ((a = n[i] = Fo(n[i])), (a.el = l.el)),
          o || vs(l, a)),
          a.type === vl && (a.el = l.el);
      }
  }
  function Fg(e) {
    const t = e.slice(),
      o = [0];
    let r, n, i, l, a;
    const s = e.length;
    for (r = 0; r < s; r++) {
      const c = e[r];
      if (c !== 0) {
        if (((n = o[o.length - 1]), e[n] < c)) {
          (t[r] = n), o.push(r);
          continue;
        }
        for (i = 0, l = o.length - 1; i < l; )
          (a = (i + l) >> 1), e[o[a]] < c ? (i = a + 1) : (l = a);
        c < e[o[i]] && (i > 0 && (t[r] = o[i - 1]), (o[i] = r));
      }
    }
    for (i = o.length, l = o[i - 1]; i-- > 0; ) (o[i] = l), (l = t[l]);
    return o;
  }
  const Dg = (e) => e.__isTeleport,
    zn = (e) => e && (e.disabled || e.disabled === ""),
    Pc = (e) => typeof SVGElement < "u" && e instanceof SVGElement,
    ya = (e, t) => {
      const o = e && e.to;
      return ht(o) ? (t ? t(o) : null) : o;
    },
    Lg = {
      __isTeleport: !0,
      process(e, t, o, r, n, i, l, a, s, c) {
        const {
            mc: d,
            pc: u,
            pbc: h,
            o: { insert: p, querySelector: f, createText: v, createComment: b },
          } = c,
          g = zn(t.props);
        let { shapeFlag: T, children: O, dynamicChildren: P } = t;
        if (e == null) {
          const R = (t.el = v("")),
            V = (t.anchor = v(""));
          p(R, o, r), p(V, o, r);
          const x = (t.target = ya(t.props, f)),
            S = (t.targetAnchor = v(""));
          x && (p(S, x), (l = l || Pc(x)));
          const M = (C, _) => {
            T & 16 && d(O, C, _, n, i, l, a, s);
          };
          g ? M(o, V) : x && M(x, S);
        } else {
          t.el = e.el;
          const R = (t.anchor = e.anchor),
            V = (t.target = e.target),
            x = (t.targetAnchor = e.targetAnchor),
            S = zn(e.props),
            M = S ? o : V,
            C = S ? R : x;
          if (
            ((l = l || Pc(V)),
            P
              ? (h(e.dynamicChildren, P, M, n, i, l, a), vs(e, t, !0))
              : s || u(e, t, M, C, n, i, l, a, !1),
            g)
          )
            S || vi(t, o, R, c, 1);
          else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
            const _ = (t.target = ya(t.props, f));
            _ && vi(t, _, null, c, 0);
          } else S && vi(t, V, x, c, 1);
        }
        Ku(t);
      },
      remove(e, t, o, r, { um: n, o: { remove: i } }, l) {
        const {
          shapeFlag: a,
          children: s,
          anchor: c,
          targetAnchor: d,
          target: u,
          props: h,
        } = e;
        if ((u && i(d), (l || !zn(h)) && (i(c), a & 16)))
          for (let p = 0; p < s.length; p++) {
            const f = s[p];
            n(f, t, o, !0, !!f.dynamicChildren);
          }
      },
      move: vi,
      hydrate: Wg,
    };
  function vi(e, t, o, { o: { insert: r }, m: n }, i = 2) {
    i === 0 && r(e.targetAnchor, t, o);
    const { el: l, anchor: a, shapeFlag: s, children: c, props: d } = e,
      u = i === 2;
    if ((u && r(l, t, o), (!u || zn(d)) && s & 16))
      for (let h = 0; h < c.length; h++) n(c[h], t, o, 2);
    u && r(a, t, o);
  }
  function Wg(
    e,
    t,
    o,
    r,
    n,
    i,
    { o: { nextSibling: l, parentNode: a, querySelector: s } },
    c
  ) {
    const d = (t.target = ya(t.props, s));
    if (d) {
      const u = d._lpa || d.firstChild;
      if (t.shapeFlag & 16)
        if (zn(t.props))
          (t.anchor = c(l(e), t, a(e), o, r, n, i)), (t.targetAnchor = u);
        else {
          t.anchor = l(e);
          let h = u;
          for (; h; )
            if (
              ((h = l(h)),
              h && h.nodeType === 8 && h.data === "teleport anchor")
            ) {
              (t.targetAnchor = h),
                (d._lpa = t.targetAnchor && l(t.targetAnchor));
              break;
            }
          c(u, t, d, o, r, n, i);
        }
      Ku(t);
    }
    return t.anchor && l(t.anchor);
  }
  const Ng = Lg;
  function Ku(e) {
    const t = e.ctx;
    if (t && t.ut) {
      let o = e.children[0].el;
      for (; o !== e.targetAnchor; )
        o.nodeType === 1 && o.setAttribute("data-v-owner", t.uid),
          (o = o.nextSibling);
      t.ut();
    }
  }
  const Ye = Symbol(void 0),
    vl = Symbol(void 0),
    jt = Symbol(void 0),
    Nl = Symbol(void 0),
    In = [];
  let to = null;
  function Ht(e = !1) {
    In.push((to = e ? null : []));
  }
  function jg() {
    In.pop(), (to = In[In.length - 1] || null);
  }
  let Ln = 1;
  function Tc(e) {
    Ln += e;
  }
  function Uu(e) {
    return (
      (e.dynamicChildren = Ln > 0 ? to || Wr : null),
      jg(),
      Ln > 0 && to && to.push(e),
      e
    );
  }
  function ro(e, t, o, r, n, i) {
    return Uu(gt(e, t, o, r, n, i, !0));
  }
  function gs(e, t, o, r, n) {
    return Uu(Te(e, t, o, r, n, !0));
  }
  function Wn(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function sr(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const gl = "__vInternal",
    Gu = ({ key: e }) => e ?? null,
    Mi = ({ ref: e, ref_key: t, ref_for: o }) =>
      e != null
        ? ht(e) || xt(e) || Be(e)
          ? { i: zt, r: e, k: t, f: !!o }
          : e
        : null;
  function gt(
    e,
    t = null,
    o = null,
    r = 0,
    n = null,
    i = e === Ye ? 0 : 1,
    l = !1,
    a = !1
  ) {
    const s = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && Gu(t),
      ref: t && Mi(t),
      scopeId: Mu,
      slotScopeIds: null,
      children: o,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: n,
      dynamicChildren: null,
      appContext: null,
      ctx: zt,
    };
    return (
      a
        ? (ms(s, o), i & 128 && e.normalize(s))
        : o && (s.shapeFlag |= ht(o) ? 8 : 16),
      Ln > 0 &&
        !l &&
        to &&
        (s.patchFlag > 0 || i & 6) &&
        s.patchFlag !== 32 &&
        to.push(s),
      s
    );
  }
  const Te = Vg;
  function Vg(e, t = null, o = null, r = 0, n = null, i = !1) {
    if (((!e || e === wg) && (e = jt), Wn(e))) {
      const a = Po(e, t, !0);
      return (
        o && ms(a, o),
        Ln > 0 &&
          !i &&
          to &&
          (a.shapeFlag & 6 ? (to[to.indexOf(e)] = a) : to.push(a)),
        (a.patchFlag |= -2),
        a
      );
    }
    if ((Qg(e) && (e = e.__vccOpts), t)) {
      t = Kg(t);
      let { class: a, style: s } = t;
      a && !ht(a) && (t.class = qa(a)),
        nt(s) && (Cu(s) && !Me(s) && (s = vt({}, s)), (t.style = Ga(s)));
    }
    const l = ht(e) ? 1 : fg(e) ? 128 : Dg(e) ? 64 : nt(e) ? 4 : Be(e) ? 2 : 0;
    return gt(e, t, o, r, n, l, i, !0);
  }
  function Kg(e) {
    return e ? (Cu(e) || gl in e ? vt({}, e) : e) : null;
  }
  function Po(e, t, o = !1) {
    const { props: r, ref: n, patchFlag: i, children: l } = e,
      a = t ? $r(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: a,
      key: a && Gu(a),
      ref:
        t && t.ref
          ? o && n
            ? Me(n)
              ? n.concat(Mi(t))
              : [n, Mi(t)]
            : Mi(t)
          : n,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ye ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Po(e.ssContent),
      ssFallback: e.ssFallback && Po(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  }
  function kt(e = " ", t = 0) {
    return Te(vl, null, e, t);
  }
  function uo(e) {
    return e == null || typeof e == "boolean"
      ? Te(jt)
      : Me(e)
      ? Te(Ye, null, e.slice())
      : typeof e == "object"
      ? Fo(e)
      : Te(vl, null, String(e));
  }
  function Fo(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Po(e);
  }
  function ms(e, t) {
    let o = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (Me(t)) o = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const n = t.default;
        n && (n._c && (n._d = !1), ms(e, n()), n._c && (n._d = !0));
        return;
      } else {
        o = 32;
        const n = t._;
        !n && !(gl in t)
          ? (t._ctx = zt)
          : n === 3 &&
            zt &&
            (zt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
      }
    else
      Be(t)
        ? ((t = { default: t, _ctx: zt }), (o = 32))
        : ((t = String(t)), r & 64 ? ((o = 16), (t = [kt(t)])) : (o = 8));
    (e.children = t), (e.shapeFlag |= o);
  }
  function $r(...e) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o];
      for (const n in r)
        if (n === "class")
          t.class !== r.class && (t.class = qa([t.class, r.class]));
        else if (n === "style") t.style = Ga([t.style, r.style]);
        else if (ll(n)) {
          const i = t[n],
            l = r[n];
          l &&
            i !== l &&
            !(Me(i) && i.includes(l)) &&
            (t[n] = i ? [].concat(i, l) : l);
        } else n !== "" && (t[n] = r[n]);
    }
    return t;
  }
  function lo(e, t, o, r = null) {
    Gt(e, t, 7, [o, r]);
  }
  const Ug = Vu();
  let Gg = 0;
  function qg(e, t, o) {
    const r = e.type,
      n = (t ? t.appContext : e.appContext) || Ug,
      i = {
        uid: Gg++,
        vnode: e,
        type: r,
        parent: t,
        appContext: n,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new xv(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(n.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Lu(r, n),
        emitsOptions: _u(r, n),
        emit: null,
        emitted: null,
        propsDefaults: et,
        inheritAttrs: r.inheritAttrs,
        ctx: et,
        data: et,
        props: et,
        attrs: et,
        slots: et,
        refs: et,
        setupState: et,
        setupContext: null,
        suspense: o,
        suspenseId: o ? o.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null,
      };
    return (
      (i.ctx = { _: i }),
      (i.root = t ? t.root : i),
      (i.emit = ag.bind(null, i)),
      e.ce && e.ce(i),
      i
    );
  }
  let ft = null;
  const an = () => ft || zt,
    Qr = (e) => {
      (ft = e), e.scope.on();
    },
    gr = () => {
      ft && ft.scope.off(), (ft = null);
    };
  function qu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Nn = !1;
  function Yg(e, t = !1) {
    Nn = t;
    const { props: o, children: r } = e.vnode,
      n = qu(e);
    _g(e, o, n, t), Eg(e, r);
    const i = n ? Xg(e, t) : void 0;
    return (Nn = !1), i;
  }
  function Xg(e, t) {
    const o = e.type;
    (e.accessCache = Object.create(null)), (e.proxy = Wi(new Proxy(e.ctx, Sg)));
    const { setup: r } = o;
    if (r) {
      const n = (e.setupContext = r.length > 1 ? Jg(e) : null);
      Qr(e), on();
      const i = jo(r, e, 0, [e.props, n]);
      if ((rn(), gr(), lu(i))) {
        if ((i.then(gr, gr), t))
          return i
            .then((l) => {
              zc(e, l, t);
            })
            .catch((l) => {
              ul(l, e, 0);
            });
        e.asyncDep = i;
      } else zc(e, i, t);
    } else Yu(e, t);
  }
  function zc(e, t, o) {
    Be(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : nt(t) && (e.setupState = Su(t)),
      Yu(e, o);
  }
  let Ic;
  function Yu(e, t, o) {
    const r = e.type;
    if (!e.render) {
      if (!t && Ic && !r.render) {
        const n = r.template || hs(e).template;
        if (n) {
          const { isCustomElement: i, compilerOptions: l } =
              e.appContext.config,
            { delimiters: a, compilerOptions: s } = r,
            c = vt(vt({ isCustomElement: i, delimiters: a }, l), s);
          r.render = Ic(n, c);
        }
      }
      e.render = r.render || oo;
    }
    Qr(e), on(), $g(e), rn(), gr();
  }
  function Zg(e) {
    return new Proxy(e.attrs, {
      get(t, o) {
        return At(e, "get", "$attrs"), t[o];
      },
    });
  }
  function Jg(e) {
    const t = (r) => {
      e.exposed = r || {};
    };
    let o;
    return {
      get attrs() {
        return o || (o = Zg(e));
      },
      slots: e.slots,
      emit: e.emit,
      expose: t,
    };
  }
  function ml(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(Su(Wi(e.exposed)), {
          get(t, o) {
            if (o in t) return t[o];
            if (o in Tn) return Tn[o](e);
          },
          has(t, o) {
            return o in t || o in Tn;
          },
        }))
      );
  }
  function Qg(e) {
    return Be(e) && "__vccOpts" in e;
  }
  const B = (e, t) => tg(e, t, Nn);
  function m(e, t, o) {
    const r = arguments.length;
    return r === 2
      ? nt(t) && !Me(t)
        ? Wn(t)
          ? Te(e, null, [t])
          : Te(e, t)
        : Te(e, null, t)
      : (r > 3
          ? (o = Array.prototype.slice.call(arguments, 2))
          : r === 3 && Wn(o) && (o = [o]),
        Te(e, t, o));
  }
  const em = Symbol(""),
    tm = () => Oe(em),
    om = "3.2.47",
    rm = "http://www.w3.org/2000/svg",
    cr = typeof document < "u" ? document : null,
    _c = cr && cr.createElement("template"),
    nm = {
      insert: (e, t, o) => {
        t.insertBefore(e, o || null);
      },
      remove: (e) => {
        const t = e.parentNode;
        t && t.removeChild(e);
      },
      createElement: (e, t, o, r) => {
        const n = t
          ? cr.createElementNS(rm, e)
          : cr.createElement(e, o ? { is: o } : void 0);
        return (
          e === "select" &&
            r &&
            r.multiple != null &&
            n.setAttribute("multiple", r.multiple),
          n
        );
      },
      createText: (e) => cr.createTextNode(e),
      createComment: (e) => cr.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t;
      },
      setElementText: (e, t) => {
        e.textContent = t;
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => cr.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, "");
      },
      insertStaticContent(e, t, o, r, n, i) {
        const l = o ? o.previousSibling : t.lastChild;
        if (n && (n === i || n.nextSibling))
          for (
            ;
            t.insertBefore(n.cloneNode(!0), o),
              !(n === i || !(n = n.nextSibling));

          );
        else {
          _c.innerHTML = r ? `<svg>${e}</svg>` : e;
          const a = _c.content;
          if (r) {
            const s = a.firstChild;
            for (; s.firstChild; ) a.appendChild(s.firstChild);
            a.removeChild(s);
          }
          t.insertBefore(a, o);
        }
        return [
          l ? l.nextSibling : t.firstChild,
          o ? o.previousSibling : t.lastChild,
        ];
      },
    };
  function im(e, t, o) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
      t == null
        ? e.removeAttribute("class")
        : o
        ? e.setAttribute("class", t)
        : (e.className = t);
  }
  function lm(e, t, o) {
    const r = e.style,
      n = ht(o);
    if (o && !n) {
      if (t && !ht(t)) for (const i in t) o[i] == null && wa(r, i, "");
      for (const i in o) wa(r, i, o[i]);
    } else {
      const i = r.display;
      n ? t !== o && (r.cssText = o) : t && e.removeAttribute("style"),
        "_vod" in e && (r.display = i);
    }
  }
  const Mc = /\s*!important$/;
  function wa(e, t, o) {
    if (Me(o)) o.forEach((r) => wa(e, t, r));
    else if ((o == null && (o = ""), t.startsWith("--"))) e.setProperty(t, o);
    else {
      const r = am(e, t);
      Mc.test(o)
        ? e.setProperty(tn(r), o.replace(Mc, ""), "important")
        : (e[r] = o);
    }
  }
  const kc = ["Webkit", "Moz", "ms"],
    jl = {};
  function am(e, t) {
    const o = jl[t];
    if (o) return o;
    let r = Zr(t);
    if (r !== "filter" && r in e) return (jl[t] = r);
    r = cu(r);
    for (let n = 0; n < kc.length; n++) {
      const i = kc[n] + r;
      if (i in e) return (jl[t] = i);
    }
    return t;
  }
  const Ec = "http://www.w3.org/1999/xlink";
  function sm(e, t, o, r, n) {
    if (r && t.startsWith("xlink:"))
      o == null
        ? e.removeAttributeNS(Ec, t.slice(6, t.length))
        : e.setAttributeNS(Ec, t, o);
    else {
      const i = cv(t);
      o == null || (i && !ru(o))
        ? e.removeAttribute(t)
        : e.setAttribute(t, i ? "" : o);
    }
  }
  function cm(e, t, o, r, n, i, l) {
    if (t === "innerHTML" || t === "textContent") {
      r && l(r, n, i), (e[t] = o ?? "");
      return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
      e._value = o;
      const s = o ?? "";
      (e.value !== s || e.tagName === "OPTION") && (e.value = s),
        o == null && e.removeAttribute(t);
      return;
    }
    let a = !1;
    if (o === "" || o == null) {
      const s = typeof e[t];
      s === "boolean"
        ? (o = ru(o))
        : o == null && s === "string"
        ? ((o = ""), (a = !0))
        : s === "number" && ((o = 0), (a = !0));
    }
    try {
      e[t] = o;
    } catch {}
    a && e.removeAttribute(t);
  }
  function dm(e, t, o, r) {
    e.addEventListener(t, o, r);
  }
  function um(e, t, o, r) {
    e.removeEventListener(t, o, r);
  }
  function fm(e, t, o, r, n = null) {
    const i = e._vei || (e._vei = {}),
      l = i[t];
    if (r && l) l.value = r;
    else {
      const [a, s] = hm(t);
      if (r) {
        const c = (i[t] = gm(r, n));
        dm(e, a, c, s);
      } else l && (um(e, a, l, s), (i[t] = void 0));
    }
  }
  const Rc = /(?:Once|Passive|Capture)$/;
  function hm(e) {
    let t;
    if (Rc.test(e)) {
      t = {};
      let r;
      for (; (r = e.match(Rc)); )
        (e = e.slice(0, e.length - r[0].length)), (t[r[0].toLowerCase()] = !0);
    }
    return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t];
  }
  let Vl = 0;
  const pm = Promise.resolve(),
    vm = () => Vl || (pm.then(() => (Vl = 0)), (Vl = Date.now()));
  function gm(e, t) {
    const o = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= o.attached) return;
      Gt(mm(r, o.value), t, 5, [r]);
    };
    return (o.value = e), (o.attached = vm()), o;
  }
  function mm(e, t) {
    if (Me(t)) {
      const o = e.stopImmediatePropagation;
      return (
        (e.stopImmediatePropagation = () => {
          o.call(e), (e._stopped = !0);
        }),
        t.map((r) => (n) => !n._stopped && r && r(n))
      );
    } else return t;
  }
  const Oc = /^on[a-z]/,
    bm = (e, t, o, r, n = !1, i, l, a, s) => {
      t === "class"
        ? im(e, r, n)
        : t === "style"
        ? lm(e, o, r)
        : ll(t)
        ? Ya(t) || fm(e, t, o, r, l)
        : (
            t[0] === "."
              ? ((t = t.slice(1)), !0)
              : t[0] === "^"
              ? ((t = t.slice(1)), !1)
              : xm(e, t, r, n)
          )
        ? cm(e, t, r, i, l, a, s)
        : (t === "true-value"
            ? (e._trueValue = r)
            : t === "false-value" && (e._falseValue = r),
          sm(e, t, r, n));
    };
  function xm(e, t, o, r) {
    return r
      ? !!(
          t === "innerHTML" ||
          t === "textContent" ||
          (t in e && Oc.test(t) && Be(o))
        )
      : t === "spellcheck" ||
        t === "draggable" ||
        t === "translate" ||
        t === "form" ||
        (t === "list" && e.tagName === "INPUT") ||
        (t === "type" && e.tagName === "TEXTAREA") ||
        (Oc.test(t) && ht(o))
      ? !1
      : t in e;
  }
  const Oo = "transition",
    vn = "animation",
    vo = (e, { slots: t }) => m(Ru, Zu(e), t);
  vo.displayName = "Transition";
  const Xu = {
      name: String,
      type: String,
      css: { type: Boolean, default: !0 },
      duration: [String, Number, Object],
      enterFromClass: String,
      enterActiveClass: String,
      enterToClass: String,
      appearFromClass: String,
      appearActiveClass: String,
      appearToClass: String,
      leaveFromClass: String,
      leaveActiveClass: String,
      leaveToClass: String,
    },
    Cm = (vo.props = vt({}, Ru.props, Xu)),
    tr = (e, t = []) => {
      Me(e) ? e.forEach((o) => o(...t)) : e && e(...t);
    },
    Bc = (e) => (e ? (Me(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
  function Zu(e) {
    const t = {};
    for (const y in e) y in Xu || (t[y] = e[y]);
    if (e.css === !1) return t;
    const {
        name: o = "v",
        type: r,
        duration: n,
        enterFromClass: i = `${o}-enter-from`,
        enterActiveClass: l = `${o}-enter-active`,
        enterToClass: a = `${o}-enter-to`,
        appearFromClass: s = i,
        appearActiveClass: c = l,
        appearToClass: d = a,
        leaveFromClass: u = `${o}-leave-from`,
        leaveActiveClass: h = `${o}-leave-active`,
        leaveToClass: p = `${o}-leave-to`,
      } = e,
      f = ym(n),
      v = f && f[0],
      b = f && f[1],
      {
        onBeforeEnter: g,
        onEnter: T,
        onEnterCancelled: O,
        onLeave: P,
        onLeaveCancelled: R,
        onBeforeAppear: V = g,
        onAppear: x = T,
        onAppearCancelled: S = O,
      } = t,
      M = (y, K, H) => {
        Ho(y, K ? d : a), Ho(y, K ? c : l), H && H();
      },
      C = (y, K) => {
        (y._isLeaving = !1), Ho(y, u), Ho(y, p), Ho(y, h), K && K();
      },
      _ = (y) => (K, H) => {
        const q = y ? x : T,
          k = () => M(K, y, H);
        tr(q, [K, k]),
          Ac(() => {
            Ho(K, y ? s : i), yo(K, y ? d : a), Bc(q) || Hc(K, r, v, k);
          });
      };
    return vt(t, {
      onBeforeEnter(y) {
        tr(g, [y]), yo(y, i), yo(y, l);
      },
      onBeforeAppear(y) {
        tr(V, [y]), yo(y, s), yo(y, c);
      },
      onEnter: _(!1),
      onAppear: _(!0),
      onLeave(y, K) {
        y._isLeaving = !0;
        const H = () => C(y, K);
        yo(y, u),
          Qu(),
          yo(y, h),
          Ac(() => {
            y._isLeaving && (Ho(y, u), yo(y, p), Bc(P) || Hc(y, r, b, H));
          }),
          tr(P, [y, H]);
      },
      onEnterCancelled(y) {
        M(y, !1), tr(O, [y]);
      },
      onAppearCancelled(y) {
        M(y, !0), tr(S, [y]);
      },
      onLeaveCancelled(y) {
        C(y), tr(R, [y]);
      },
    });
  }
  function ym(e) {
    if (e == null) return null;
    if (nt(e)) return [Kl(e.enter), Kl(e.leave)];
    {
      const t = Kl(e);
      return [t, t];
    }
  }
  function Kl(e) {
    return mv(e);
  }
  function yo(e, t) {
    t.split(/\s+/).forEach((o) => o && e.classList.add(o)),
      (e._vtc || (e._vtc = new Set())).add(t);
  }
  function Ho(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const { _vtc: o } = e;
    o && (o.delete(t), o.size || (e._vtc = void 0));
  }
  function Ac(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let wm = 0;
  function Hc(e, t, o, r) {
    const n = (e._endId = ++wm),
      i = () => {
        n === e._endId && r();
      };
    if (o) return setTimeout(i, o);
    const { type: l, timeout: a, propCount: s } = Ju(e, t);
    if (!l) return r();
    const c = l + "end";
    let d = 0;
    const u = () => {
        e.removeEventListener(c, h), i();
      },
      h = (p) => {
        p.target === e && ++d >= s && u();
      };
    setTimeout(() => {
      d < s && u();
    }, a + 1),
      e.addEventListener(c, h);
  }
  function Ju(e, t) {
    const o = window.getComputedStyle(e),
      r = (f) => (o[f] || "").split(", "),
      n = r(`${Oo}Delay`),
      i = r(`${Oo}Duration`),
      l = Fc(n, i),
      a = r(`${vn}Delay`),
      s = r(`${vn}Duration`),
      c = Fc(a, s);
    let d = null,
      u = 0,
      h = 0;
    t === Oo
      ? l > 0 && ((d = Oo), (u = l), (h = i.length))
      : t === vn
      ? c > 0 && ((d = vn), (u = c), (h = s.length))
      : ((u = Math.max(l, c)),
        (d = u > 0 ? (l > c ? Oo : vn) : null),
        (h = d ? (d === Oo ? i.length : s.length) : 0));
    const p =
      d === Oo && /\b(transform|all)(,|$)/.test(r(`${Oo}Property`).toString());
    return { type: d, timeout: u, propCount: h, hasTransform: p };
  }
  function Fc(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((o, r) => Dc(o) + Dc(e[r])));
  }
  function Dc(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Qu() {
    return document.body.offsetHeight;
  }
  const ef = new WeakMap(),
    tf = new WeakMap(),
    of = {
      name: "TransitionGroup",
      props: vt({}, Cm, { tag: String, moveClass: String }),
      setup(e, { slots: t }) {
        const o = an(),
          r = Eu();
        let n, i;
        return (
          Au(() => {
            if (!n.length) return;
            const l = e.moveClass || `${e.name || "v"}-move`;
            if (!Im(n[0].el, o.vnode.el, l)) return;
            n.forEach(Pm), n.forEach(Tm);
            const a = n.filter(zm);
            Qu(),
              a.forEach((s) => {
                const c = s.el,
                  d = c.style;
                yo(c, l),
                  (d.transform = d.webkitTransform = d.transitionDuration = "");
                const u = (c._moveCb = (h) => {
                  (h && h.target !== c) ||
                    ((!h || /transform$/.test(h.propertyName)) &&
                      (c.removeEventListener("transitionend", u),
                      (c._moveCb = null),
                      Ho(c, l)));
                });
                c.addEventListener("transitionend", u);
              });
          }),
          () => {
            const l = Le(e),
              a = Zu(l);
            let s = l.tag || Ye;
            (n = i), (i = t.default ? cs(t.default()) : []);
            for (let c = 0; c < i.length; c++) {
              const d = i[c];
              d.key != null && Dn(d, Fn(d, a, r, o));
            }
            if (n)
              for (let c = 0; c < n.length; c++) {
                const d = n[c];
                Dn(d, Fn(d, a, r, o)), ef.set(d, d.el.getBoundingClientRect());
              }
            return Te(s, null, i);
          }
        );
      },
    },
    Sm = (e) => delete e.mode;
  of.props;
  const $m = of;
  function Pm(e) {
    const t = e.el;
    t._moveCb && t._moveCb(), t._enterCb && t._enterCb();
  }
  function Tm(e) {
    tf.set(e, e.el.getBoundingClientRect());
  }
  function zm(e) {
    const t = ef.get(e),
      o = tf.get(e),
      r = t.left - o.left,
      n = t.top - o.top;
    if (r || n) {
      const i = e.el.style;
      return (
        (i.transform = i.webkitTransform = `translate(${r}px,${n}px)`),
        (i.transitionDuration = "0s"),
        e
      );
    }
  }
  function Im(e, t, o) {
    const r = e.cloneNode();
    e._vtc &&
      e._vtc.forEach((l) => {
        l.split(/\s+/).forEach((a) => a && r.classList.remove(a));
      }),
      o.split(/\s+/).forEach((l) => l && r.classList.add(l)),
      (r.style.display = "none");
    const n = t.nodeType === 1 ? t : t.parentNode;
    n.appendChild(r);
    const { hasTransform: i } = Ju(r);
    return n.removeChild(r), i;
  }
  const bs = {
    beforeMount(e, { value: t }, { transition: o }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        o && t ? o.beforeEnter(e) : gn(e, t);
    },
    mounted(e, { value: t }, { transition: o }) {
      o && t && o.enter(e);
    },
    updated(e, { value: t, oldValue: o }, { transition: r }) {
      !t != !o &&
        (r
          ? t
            ? (r.beforeEnter(e), gn(e, !0), r.enter(e))
            : r.leave(e, () => {
                gn(e, !1);
              })
          : gn(e, t));
    },
    beforeUnmount(e, { value: t }) {
      gn(e, t);
    },
  };
  function gn(e, t) {
    e.style.display = t ? e._vod : "none";
  }
  const _m = vt({ patchProp: bm }, nm);
  let Lc;
  function Mm() {
    return Lc || (Lc = Ag(_m));
  }
  const km = (...e) => {
    const t = Mm().createApp(...e),
      { mount: o } = t;
    return (
      (t.mount = (r) => {
        const n = Em(r);
        if (!n) return;
        const i = t._component;
        !Be(i) && !i.render && !i.template && (i.template = n.innerHTML),
          (n.innerHTML = "");
        const l = o(n, !1, n instanceof SVGElement);
        return (
          n instanceof Element &&
            (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")),
          l
        );
      }),
      t
    );
  };
  function Em(e) {
    return ht(e) ? document.querySelector(e) : e;
  }
  let Vi = [];
  const rf = new WeakMap();
  function Rm() {
    Vi.forEach((e) => e(...rf.get(e))), (Vi = []);
  }
  function nf(e, ...t) {
    rf.set(e, t),
      !Vi.includes(e) && Vi.push(e) === 1 && requestAnimationFrame(Rm);
  }
  function en(e, t) {
    let { target: o } = e;
    for (; o; ) {
      if (o.dataset && o.dataset[t] !== void 0) return !0;
      o = o.parentElement;
    }
    return !1;
  }
  function jn(e) {
    return e.composedPath()[0] || null;
  }
  function Vn(e) {
    return typeof e == "string"
      ? e.endsWith("px")
        ? Number(e.slice(0, e.length - 2))
        : Number(e)
      : e;
  }
  function gi(e) {
    if (e != null)
      return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
  }
  function ki(e, t) {
    const o = e.trim().split(/\s+/g),
      r = { top: o[0] };
    switch (o.length) {
      case 1:
        (r.right = o[0]), (r.bottom = o[0]), (r.left = o[0]);
        break;
      case 2:
        (r.right = o[1]), (r.left = o[1]), (r.bottom = o[0]);
        break;
      case 3:
        (r.right = o[1]), (r.bottom = o[2]), (r.left = o[1]);
        break;
      case 4:
        (r.right = o[1]), (r.bottom = o[2]), (r.left = o[3]);
        break;
      default:
        throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
    }
    return t === void 0 ? r : r[t];
  }
  function Om(e, t) {
    const [o, r] = e.split(" ");
    return t ? (t === "row" ? o : r) : { row: o, col: r || o };
  }
  const Wc = {
      black: "#000",
      silver: "#C0C0C0",
      gray: "#808080",
      white: "#FFF",
      maroon: "#800000",
      red: "#F00",
      purple: "#800080",
      fuchsia: "#F0F",
      green: "#008000",
      lime: "#0F0",
      olive: "#808000",
      yellow: "#FF0",
      navy: "#000080",
      blue: "#00F",
      teal: "#008080",
      aqua: "#0FF",
      transparent: "#0000",
    },
    sn = "^\\s*",
    cn = "\\s*$",
    ur = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",
    fr = "([0-9A-Fa-f])",
    hr = "([0-9A-Fa-f]{2})",
    Bm = new RegExp(`${sn}rgb\\s*\\(${ur},${ur},${ur}\\)${cn}`),
    Am = new RegExp(`${sn}rgba\\s*\\(${ur},${ur},${ur},${ur}\\)${cn}`),
    Hm = new RegExp(`${sn}#${fr}${fr}${fr}${cn}`),
    Fm = new RegExp(`${sn}#${hr}${hr}${hr}${cn}`),
    Dm = new RegExp(`${sn}#${fr}${fr}${fr}${fr}${cn}`),
    Lm = new RegExp(`${sn}#${hr}${hr}${hr}${hr}${cn}`);
  function Ot(e) {
    return parseInt(e, 16);
  }
  function To(e) {
    try {
      let t;
      if ((t = Fm.exec(e))) return [Ot(t[1]), Ot(t[2]), Ot(t[3]), 1];
      if ((t = Bm.exec(e))) return [Pt(t[1]), Pt(t[5]), Pt(t[9]), 1];
      if ((t = Am.exec(e))) return [Pt(t[1]), Pt(t[5]), Pt(t[9]), _n(t[13])];
      if ((t = Hm.exec(e)))
        return [Ot(t[1] + t[1]), Ot(t[2] + t[2]), Ot(t[3] + t[3]), 1];
      if ((t = Lm.exec(e)))
        return [Ot(t[1]), Ot(t[2]), Ot(t[3]), _n(Ot(t[4]) / 255)];
      if ((t = Dm.exec(e)))
        return [
          Ot(t[1] + t[1]),
          Ot(t[2] + t[2]),
          Ot(t[3] + t[3]),
          _n(Ot(t[4] + t[4]) / 255),
        ];
      if (e in Wc) return To(Wc[e]);
      throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
    } catch (t) {
      throw t;
    }
  }
  function Wm(e) {
    return e > 1 ? 1 : e < 0 ? 0 : e;
  }
  function Sa(e, t, o, r) {
    return `rgba(${Pt(e)}, ${Pt(t)}, ${Pt(o)}, ${Wm(r)})`;
  }
  function Ul(e, t, o, r, n) {
    return Pt((e * t * (1 - r) + o * r) / n);
  }
  function be(e, t) {
    Array.isArray(e) || (e = To(e)), Array.isArray(t) || (t = To(t));
    const o = e[3],
      r = t[3],
      n = _n(o + r - o * r);
    return Sa(
      Ul(e[0], o, t[0], r, n),
      Ul(e[1], o, t[1], r, n),
      Ul(e[2], o, t[2], r, n),
      n
    );
  }
  function te(e, t) {
    const [o, r, n, i = 1] = Array.isArray(e) ? e : To(e);
    return t.alpha ? Sa(o, r, n, t.alpha) : Sa(o, r, n, i);
  }
  function ct(e, t) {
    const [o, r, n, i = 1] = Array.isArray(e) ? e : To(e),
      { lightness: l = 1, alpha: a = 1 } = t;
    return Nm([o * l, r * l, n * l, i * a]);
  }
  function _n(e) {
    const t = Math.round(Number(e) * 100) / 100;
    return t > 1 ? 1 : t < 0 ? 0 : t;
  }
  function Pt(e) {
    const t = Math.round(Number(e));
    return t > 255 ? 255 : t < 0 ? 0 : t;
  }
  function Nm(e) {
    const [t, o, r] = e;
    return 3 in e
      ? `rgba(${Pt(t)}, ${Pt(o)}, ${Pt(r)}, ${_n(e[3])})`
      : `rgba(${Pt(t)}, ${Pt(o)}, ${Pt(r)}, 1)`;
  }
  function jm(e = 8) {
    return Math.random()
      .toString(16)
      .slice(2, 2 + e);
  }
  function Vm(e, t = "default", o = []) {
    const n = e.$slots[t];
    return n === void 0 ? o : n();
  }
  function Mn(e, t = [], o) {
    const r = {};
    return (
      t.forEach((n) => {
        r[n] = e[n];
      }),
      Object.assign(r, o)
    );
  }
  function Ki(e, t = !0, o = []) {
    return (
      e.forEach((r) => {
        if (r !== null) {
          if (typeof r != "object") {
            (typeof r == "string" || typeof r == "number") &&
              o.push(kt(String(r)));
            return;
          }
          if (Array.isArray(r)) {
            Ki(r, t, o);
            return;
          }
          if (r.type === Ye) {
            if (r.children === null) return;
            Array.isArray(r.children) && Ki(r.children, t, o);
          } else r.type !== jt && o.push(r);
        }
      }),
      o
    );
  }
  function Re(e, ...t) {
    if (Array.isArray(e)) e.forEach((o) => Re(o, ...t));
    else return e(...t);
  }
  function xs(e) {
    return Object.keys(e);
  }
  const It = (e, ...t) =>
    typeof e == "function"
      ? e(...t)
      : typeof e == "string"
      ? kt(e)
      : typeof e == "number"
      ? kt(String(e))
      : null;
  function Kn(e, t) {
    console.error(`[naive/${e}]: ${t}`);
  }
  function Km(e, t) {
    throw new Error(`[naive/${e}]: ${t}`);
  }
  function Um(e) {
    switch (typeof e) {
      case "string":
        return e || void 0;
      case "number":
        return String(e);
      default:
        return;
    }
  }
  function Nc(e, t = "default", o = void 0) {
    const r = e[t];
    if (!r) return Kn("getFirstSlotVNode", `slot[${t}] is empty`), null;
    const n = Ki(r(o));
    return n.length === 1
      ? n[0]
      : (Kn("getFirstSlotVNode", `slot[${t}] should have exactly one child`),
        null);
  }
  function Gm(e) {
    return (t) => {
      t ? (e.value = t.$el) : (e.value = null);
    };
  }
  function ri(e) {
    return e.some((t) =>
      Wn(t) ? !(t.type === jt || (t.type === Ye && !ri(t.children))) : !0
    )
      ? e
      : null;
  }
  function Kr(e, t) {
    return (e && ri(e())) || t();
  }
  function qm(e, t, o) {
    return (e && ri(e(t))) || o(t);
  }
  function Ut(e, t) {
    const o = e && ri(e());
    return t(o || null);
  }
  function $a(e) {
    return !(e && ri(e()));
  }
  function Gl(e) {
    const t = e.filter((o) => o !== void 0);
    if (t.length !== 0)
      return t.length === 1
        ? t[0]
        : (o) => {
            e.forEach((r) => {
              r && r(o);
            });
          };
  }
  const Pa = ue({
      render() {
        var e, t;
        return (t = (e = this.$slots).default) === null || t === void 0
          ? void 0
          : t.call(e);
      },
    }),
    Ym = /^(\d|\.)+$/,
    jc = /(\d|\.)+/;
  function Ei(e, { c: t = 1, offset: o = 0, attachPx: r = !0 } = {}) {
    if (typeof e == "number") {
      const n = (e + o) * t;
      return n === 0 ? "0" : `${n}px`;
    } else if (typeof e == "string")
      if (Ym.test(e)) {
        const n = (Number(e) + o) * t;
        return r ? (n === 0 ? "0" : `${n}px`) : `${n}`;
      } else {
        const n = jc.exec(e);
        return n ? e.replace(jc, String((Number(n[0]) + o) * t)) : e;
      }
    return e;
  }
  function Ui(e) {
    return e.replace(/#|\(|\)|,|\s/g, "_");
  }
  function Xm(e) {
    let t = 0;
    for (let o = 0; o < e.length; ++o) e[o] === "&" && ++t;
    return t;
  }
  const lf = /\s*,(?![^(]*\))\s*/g,
    Zm = /\s+/g;
  function Jm(e, t) {
    const o = [];
    return (
      t.split(lf).forEach((r) => {
        let n = Xm(r);
        if (n) {
          if (n === 1) {
            e.forEach((l) => {
              o.push(r.replace("&", l));
            });
            return;
          }
        } else {
          e.forEach((l) => {
            o.push((l && l + " ") + r);
          });
          return;
        }
        let i = [r];
        for (; n--; ) {
          const l = [];
          i.forEach((a) => {
            e.forEach((s) => {
              l.push(a.replace("&", s));
            });
          }),
            (i = l);
        }
        i.forEach((l) => o.push(l));
      }),
      o
    );
  }
  function Qm(e, t) {
    const o = [];
    return (
      t.split(lf).forEach((r) => {
        e.forEach((n) => {
          o.push((n && n + " ") + r);
        });
      }),
      o
    );
  }
  function eb(e) {
    let t = [""];
    return (
      e.forEach((o) => {
        (o = o && o.trim()),
          o && (o.includes("&") ? (t = Jm(t, o)) : (t = Qm(t, o)));
      }),
      t.join(", ").replace(Zm, " ")
    );
  }
  function Vc(e) {
    if (!e) return;
    const t = e.parentElement;
    t && t.removeChild(e);
  }
  function bl(e) {
    return document.querySelector(`style[cssr-id="${e}"]`);
  }
  function tb(e) {
    const t = document.createElement("style");
    return t.setAttribute("cssr-id", e), t;
  }
  function mi(e) {
    return e ? /^\s*@(s|m)/.test(e) : !1;
  }
  const ob = /[A-Z]/g;
  function af(e) {
    return e.replace(ob, (t) => "-" + t.toLowerCase());
  }
  function rb(e, t = "  ") {
    return typeof e == "object" && e !== null
      ? ` {
` +
          Object.entries(e).map((o) => t + `  ${af(o[0])}: ${o[1]};`).join(`
`) +
          `
` +
          t +
          "}"
      : `: ${e};`;
  }
  function nb(e, t, o) {
    return typeof e == "function" ? e({ context: t.context, props: o }) : e;
  }
  function Kc(e, t, o, r) {
    if (!t) return "";
    const n = nb(t, o, r);
    if (!n) return "";
    if (typeof n == "string")
      return `${e} {
${n}
}`;
    const i = Object.keys(n);
    if (i.length === 0)
      return o.config.keepEmptyBlock
        ? e +
            ` {
}`
        : "";
    const l = e ? [e + " {"] : [];
    return (
      i.forEach((a) => {
        const s = n[a];
        if (a === "raw") {
          l.push(
            `
` +
              s +
              `
`
          );
          return;
        }
        (a = af(a)), s != null && l.push(`  ${a}${rb(s)}`);
      }),
      e && l.push("}"),
      l.join(`
`)
    );
  }
  function Ta(e, t, o) {
    e &&
      e.forEach((r) => {
        if (Array.isArray(r)) Ta(r, t, o);
        else if (typeof r == "function") {
          const n = r(t);
          Array.isArray(n) ? Ta(n, t, o) : n && o(n);
        } else r && o(r);
      });
  }
  function sf(e, t, o, r, n, i) {
    const l = e.$;
    let a = "";
    if (!l || typeof l == "string") mi(l) ? (a = l) : t.push(l);
    else if (typeof l == "function") {
      const d = l({ context: r.context, props: n });
      mi(d) ? (a = d) : t.push(d);
    } else if (
      (l.before && l.before(r.context), !l.$ || typeof l.$ == "string")
    )
      mi(l.$) ? (a = l.$) : t.push(l.$);
    else if (l.$) {
      const d = l.$({ context: r.context, props: n });
      mi(d) ? (a = d) : t.push(d);
    }
    const s = eb(t),
      c = Kc(s, e.props, r, n);
    a
      ? (o.push(`${a} {`),
        i &&
          c &&
          i.insertRule(`${a} {
${c}
}
`))
      : (i && c && i.insertRule(c), !i && c.length && o.push(c)),
      e.children &&
        Ta(e.children, { context: r.context, props: n }, (d) => {
          if (typeof d == "string") {
            const u = Kc(s, { raw: d }, r, n);
            i ? i.insertRule(u) : o.push(u);
          } else sf(d, t, o, r, n, i);
        }),
      t.pop(),
      a && o.push("}"),
      l && l.after && l.after(r.context);
  }
  function cf(e, t, o, r = !1) {
    const n = [];
    return (
      sf(e, [], n, t, o, r ? e.instance.__styleSheet : void 0),
      r
        ? ""
        : n.join(`

`)
    );
  }
  function Un(e) {
    for (var t = 0, o, r = 0, n = e.length; n >= 4; ++r, n -= 4)
      (o =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (o = (o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)),
        (o ^= o >>> 24),
        (t =
          ((o & 65535) * 1540483477 + (((o >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (n) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  typeof window < "u" && (window.__cssrContext = {});
  function ib(e, t, o) {
    const { els: r } = t;
    if (o === void 0) r.forEach(Vc), (t.els = []);
    else {
      const n = bl(o);
      n && r.includes(n) && (Vc(n), (t.els = r.filter((i) => i !== n)));
    }
  }
  function Uc(e, t) {
    e.push(t);
  }
  function lb(e, t, o, r, n, i, l, a, s) {
    if (i && !s) {
      if (o === void 0) {
        console.error("[css-render/mount]: `id` is required in `silent` mode.");
        return;
      }
      const h = window.__cssrContext;
      h[o] || ((h[o] = !0), cf(t, e, r, i));
      return;
    }
    let c;
    if ((o === void 0 && ((c = t.render(r)), (o = Un(c))), s)) {
      s.adapter(o, c ?? t.render(r));
      return;
    }
    const d = bl(o);
    if (d !== null && !l) return d;
    const u = d ?? tb(o);
    if ((c === void 0 && (c = t.render(r)), (u.textContent = c), d !== null))
      return d;
    if (a) {
      const h = document.head.querySelector(`meta[name="${a}"]`);
      if (h) return document.head.insertBefore(u, h), Uc(t.els, u), u;
    }
    return (
      n
        ? document.head.insertBefore(
            u,
            document.head.querySelector("style, link")
          )
        : document.head.appendChild(u),
      Uc(t.els, u),
      u
    );
  }
  function ab(e) {
    return cf(this, this.instance, e);
  }
  function sb(e = {}) {
    const {
      id: t,
      ssr: o,
      props: r,
      head: n = !1,
      silent: i = !1,
      force: l = !1,
      anchorMetaName: a,
    } = e;
    return lb(this.instance, this, t, r, n, i, l, a, o);
  }
  function cb(e = {}) {
    const { id: t } = e;
    ib(this.instance, this, t);
  }
  const bi = function (e, t, o, r) {
      return {
        instance: e,
        $: t,
        props: o,
        children: r,
        els: [],
        render: ab,
        mount: sb,
        unmount: cb,
      };
    },
    db = function (e, t, o, r) {
      return Array.isArray(t)
        ? bi(e, { $: null }, null, t)
        : Array.isArray(o)
        ? bi(e, t, null, o)
        : Array.isArray(r)
        ? bi(e, t, o, r)
        : bi(e, t, o, null);
    };
  function df(e = {}) {
    let t = null;
    const o = {
      c: (...r) => db(o, ...r),
      use: (r, ...n) => r.install(o, ...n),
      find: bl,
      context: {},
      config: e,
      get __styleSheet() {
        if (!t) {
          const r = document.createElement("style");
          return (
            document.head.appendChild(r),
            (t = document.styleSheets[document.styleSheets.length - 1]),
            t
          );
        }
        return t;
      },
    };
    return o;
  }
  function ub(e, t) {
    if (e === void 0) return !1;
    if (t) {
      const {
        context: { ids: o },
      } = t;
      return o.has(e);
    }
    return bl(e) !== null;
  }
  function fb(e) {
    let t = ".",
      o = "__",
      r = "--",
      n;
    if (e) {
      let f = e.blockPrefix;
      f && (t = f),
        (f = e.elementPrefix),
        f && (o = f),
        (f = e.modifierPrefix),
        f && (r = f);
    }
    const i = {
      install(f) {
        n = f.c;
        const v = f.context;
        (v.bem = {}), (v.bem.b = null), (v.bem.els = null);
      },
    };
    function l(f) {
      let v, b;
      return {
        before(g) {
          (v = g.bem.b), (b = g.bem.els), (g.bem.els = null);
        },
        after(g) {
          (g.bem.b = v), (g.bem.els = b);
        },
        $({ context: g, props: T }) {
          return (
            (f = typeof f == "string" ? f : f({ context: g, props: T })),
            (g.bem.b = f),
            `${(T == null ? void 0 : T.bPrefix) || t}${g.bem.b}`
          );
        },
      };
    }
    function a(f) {
      let v;
      return {
        before(b) {
          v = b.bem.els;
        },
        after(b) {
          b.bem.els = v;
        },
        $({ context: b, props: g }) {
          return (
            (f = typeof f == "string" ? f : f({ context: b, props: g })),
            (b.bem.els = f.split(",").map((T) => T.trim())),
            b.bem.els
              .map(
                (T) =>
                  `${(g == null ? void 0 : g.bPrefix) || t}${b.bem.b}${o}${T}`
              )
              .join(", ")
          );
        },
      };
    }
    function s(f) {
      return {
        $({ context: v, props: b }) {
          f = typeof f == "string" ? f : f({ context: v, props: b });
          const g = f.split(",").map((P) => P.trim());
          function T(P) {
            return g
              .map(
                (R) =>
                  `&${(b == null ? void 0 : b.bPrefix) || t}${v.bem.b}${
                    P !== void 0 ? `${o}${P}` : ""
                  }${r}${R}`
              )
              .join(", ");
          }
          const O = v.bem.els;
          return O !== null ? T(O[0]) : T();
        },
      };
    }
    function c(f) {
      return {
        $({ context: v, props: b }) {
          f = typeof f == "string" ? f : f({ context: v, props: b });
          const g = v.bem.els;
          return `&:not(${(b == null ? void 0 : b.bPrefix) || t}${v.bem.b}${
            g !== null && g.length > 0 ? `${o}${g[0]}` : ""
          }${r}${f})`;
        },
      };
    }
    return (
      Object.assign(i, {
        cB: (...f) => n(l(f[0]), f[1], f[2]),
        cE: (...f) => n(a(f[0]), f[1], f[2]),
        cM: (...f) => n(s(f[0]), f[1], f[2]),
        cNotM: (...f) => n(c(f[0]), f[1], f[2]),
      }),
      i
    );
  }
  function de(e, t) {
    return (
      e + (t === "default" ? "" : t.replace(/^[a-z]/, (o) => o.toUpperCase()))
    );
  }
  de("abc", "def");
  const hb = "n",
    pb = `.${hb}-`,
    vb = "__",
    gb = "--",
    uf = df(),
    ff = fb({ blockPrefix: pb, elementPrefix: vb, modifierPrefix: gb });
  uf.use(ff);
  const { c: D, find: R5 } = uf,
    { cB: U, cE: A, cM: re, cNotM: Je } = ff,
    mb = (...e) => D(">", [U(...e)]);
  let ql;
  function bb() {
    return (
      ql === void 0 &&
        (ql =
          navigator.userAgent.includes("Node.js") ||
          navigator.userAgent.includes("jsdom")),
      ql
    );
  }
  const ni = typeof document < "u" && typeof window < "u",
    xb = new WeakSet();
  function Cb(e) {
    xb.add(e);
  }
  function yb(e, t, o) {
    if (!t) return e;
    const r = N(e.value);
    let n = null;
    return (
      rt(e, (i) => {
        n !== null && window.clearTimeout(n),
          i === !0
            ? o && !o.value
              ? (r.value = !0)
              : (n = window.setTimeout(() => {
                  r.value = !0;
                }, t))
            : (r.value = !1);
      }),
      r
    );
  }
  function wb(e) {
    const t = N(!!e.value);
    if (t.value) return Ko(t);
    const o = rt(e, (r) => {
      r && ((t.value = !0), o());
    });
    return Ko(t);
  }
  function ut(e) {
    const t = B(e),
      o = N(t.value);
    return (
      rt(t, (r) => {
        o.value = r;
      }),
      typeof e == "function"
        ? o
        : {
            __v_isRef: !0,
            get value() {
              return o.value;
            },
            set value(r) {
              e.set(r);
            },
          }
    );
  }
  function hf() {
    return an() !== null;
  }
  const Cs = typeof window < "u";
  let Ur, kn;
  const Sb = () => {
    var e, t;
    (Ur = Cs
      ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) ===
          null || t === void 0
        ? void 0
        : t.ready
      : void 0),
      (kn = !1),
      Ur !== void 0
        ? Ur.then(() => {
            kn = !0;
          })
        : (kn = !0);
  };
  Sb();
  function $b(e) {
    if (kn) return;
    let t = !1;
    _t(() => {
      kn ||
        Ur == null ||
        Ur.then(() => {
          t || e();
        });
    }),
      Ct(() => {
        t = !0;
      });
  }
  function Ri(e) {
    return e.composedPath()[0];
  }
  const Pb = { mousemoveoutside: new WeakMap(), clickoutside: new WeakMap() };
  function Tb(e, t, o) {
    if (e === "mousemoveoutside") {
      const r = (n) => {
        t.contains(Ri(n)) || o(n);
      };
      return { mousemove: r, touchstart: r };
    } else if (e === "clickoutside") {
      let r = !1;
      const n = (l) => {
          r = !t.contains(Ri(l));
        },
        i = (l) => {
          r && (t.contains(Ri(l)) || o(l));
        };
      return { mousedown: n, mouseup: i, touchstart: n, touchend: i };
    }
    return (
      console.error(
        `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
      ),
      {}
    );
  }
  function pf(e, t, o) {
    const r = Pb[e];
    let n = r.get(t);
    n === void 0 && r.set(t, (n = new WeakMap()));
    let i = n.get(o);
    return i === void 0 && n.set(o, (i = Tb(e, t, o))), i;
  }
  function zb(e, t, o, r) {
    if (e === "mousemoveoutside" || e === "clickoutside") {
      const n = pf(e, t, o);
      return (
        Object.keys(n).forEach((i) => {
          dt(i, document, n[i], r);
        }),
        !0
      );
    }
    return !1;
  }
  function Ib(e, t, o, r) {
    if (e === "mousemoveoutside" || e === "clickoutside") {
      const n = pf(e, t, o);
      return (
        Object.keys(n).forEach((i) => {
          tt(i, document, n[i], r);
        }),
        !0
      );
    }
    return !1;
  }
  function _b() {
    if (typeof window > "u") return { on: () => {}, off: () => {} };
    const e = new WeakMap(),
      t = new WeakMap();
    function o() {
      e.set(this, !0);
    }
    function r() {
      e.set(this, !0), t.set(this, !0);
    }
    function n(x, S, M) {
      const C = x[S];
      return (
        (x[S] = function () {
          return M.apply(x, arguments), C.apply(x, arguments);
        }),
        x
      );
    }
    function i(x, S) {
      x[S] = Event.prototype[S];
    }
    const l = new WeakMap(),
      a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
    function s() {
      var x;
      return (x = l.get(this)) !== null && x !== void 0 ? x : null;
    }
    function c(x, S) {
      a !== void 0 &&
        Object.defineProperty(x, "currentTarget", {
          configurable: !0,
          enumerable: !0,
          get: S ?? a.get,
        });
    }
    const d = { bubble: {}, capture: {} },
      u = {};
    function h() {
      const x = function (S) {
        const { type: M, eventPhase: C, bubbles: _ } = S,
          y = Ri(S);
        if (C === 2) return;
        const K = C === 1 ? "capture" : "bubble";
        let H = y;
        const q = [];
        for (; H === null && (H = window), q.push(H), H !== window; )
          H = H.parentNode || null;
        const k = d.capture[M],
          F = d.bubble[M];
        if (
          (n(S, "stopPropagation", o),
          n(S, "stopImmediatePropagation", r),
          c(S, s),
          K === "capture")
        ) {
          if (k === void 0) return;
          for (let Q = q.length - 1; Q >= 0 && !e.has(S); --Q) {
            const W = q[Q],
              ee = k.get(W);
            if (ee !== void 0) {
              l.set(S, W);
              for (const ve of ee) {
                if (t.has(S)) break;
                ve(S);
              }
            }
            if (Q === 0 && !_ && F !== void 0) {
              const ve = F.get(W);
              if (ve !== void 0)
                for (const ae of ve) {
                  if (t.has(S)) break;
                  ae(S);
                }
            }
          }
        } else if (K === "bubble") {
          if (F === void 0) return;
          for (let Q = 0; Q < q.length && !e.has(S); ++Q) {
            const W = q[Q],
              ee = F.get(W);
            if (ee !== void 0) {
              l.set(S, W);
              for (const ve of ee) {
                if (t.has(S)) break;
                ve(S);
              }
            }
          }
        }
        i(S, "stopPropagation"), i(S, "stopImmediatePropagation"), c(S);
      };
      return (x.displayName = "evtdUnifiedHandler"), x;
    }
    function p() {
      const x = function (S) {
        const { type: M, eventPhase: C } = S;
        if (C !== 2) return;
        const _ = u[M];
        _ !== void 0 && _.forEach((y) => y(S));
      };
      return (x.displayName = "evtdUnifiedWindowEventHandler"), x;
    }
    const f = h(),
      v = p();
    function b(x, S) {
      const M = d[x];
      return (
        M[S] === void 0 &&
          ((M[S] = new Map()), window.addEventListener(S, f, x === "capture")),
        M[S]
      );
    }
    function g(x) {
      return (
        u[x] === void 0 && ((u[x] = new Set()), window.addEventListener(x, v)),
        u[x]
      );
    }
    function T(x, S) {
      let M = x.get(S);
      return M === void 0 && x.set(S, (M = new Set())), M;
    }
    function O(x, S, M, C) {
      const _ = d[S][M];
      if (_ !== void 0) {
        const y = _.get(x);
        if (y !== void 0 && y.has(C)) return !0;
      }
      return !1;
    }
    function P(x, S) {
      const M = u[x];
      return !!(M !== void 0 && M.has(S));
    }
    function R(x, S, M, C) {
      let _;
      if (
        (typeof C == "object" && C.once === !0
          ? (_ = (k) => {
              V(x, S, _, C), M(k);
            })
          : (_ = M),
        zb(x, S, _, C))
      )
        return;
      const K =
          C === !0 || (typeof C == "object" && C.capture === !0)
            ? "capture"
            : "bubble",
        H = b(K, x),
        q = T(H, S);
      if ((q.has(_) || q.add(_), S === window)) {
        const k = g(x);
        k.has(_) || k.add(_);
      }
    }
    function V(x, S, M, C) {
      if (Ib(x, S, M, C)) return;
      const y = C === !0 || (typeof C == "object" && C.capture === !0),
        K = y ? "capture" : "bubble",
        H = b(K, x),
        q = T(H, S);
      if (S === window && !O(S, y ? "bubble" : "capture", x, M) && P(x, M)) {
        const F = u[x];
        F.delete(M),
          F.size === 0 && (window.removeEventListener(x, v), (u[x] = void 0));
      }
      q.has(M) && q.delete(M),
        q.size === 0 && H.delete(S),
        H.size === 0 &&
          (window.removeEventListener(x, f, K === "capture"),
          (d[K][x] = void 0));
    }
    return { on: R, off: V };
  }
  const { on: dt, off: tt } = _b();
  let xi = 0;
  const Mb = typeof window < "u" && window.matchMedia !== void 0,
    mr = N(null);
  let Qt, pr;
  function Gi(e) {
    e.matches && (mr.value = "dark");
  }
  function qi(e) {
    e.matches && (mr.value = "light");
  }
  function kb() {
    (Qt = window.matchMedia("(prefers-color-scheme: dark)")),
      (pr = window.matchMedia("(prefers-color-scheme: light)")),
      Qt.matches
        ? (mr.value = "dark")
        : pr.matches
        ? (mr.value = "light")
        : (mr.value = null),
      Qt.addEventListener
        ? (Qt.addEventListener("change", Gi), pr.addEventListener("change", qi))
        : Qt.addListener && (Qt.addListener(Gi), pr.addListener(qi));
  }
  function Eb() {
    "removeEventListener" in Qt
      ? (Qt.removeEventListener("change", Gi),
        pr.removeEventListener("change", qi))
      : "removeListener" in Qt &&
        (Qt.removeListener(Gi), pr.removeListener(qi)),
      (Qt = void 0),
      (pr = void 0);
  }
  let Gc = !0;
  function Rb() {
    return (
      Mb &&
        (xi === 0 && kb(),
        Gc &&
          (Gc = hf()) &&
          (nn(() => {
            xi += 1;
          }),
          Ct(() => {
            (xi -= 1), xi === 0 && Eb();
          }))),
      Ko(mr)
    );
  }
  function yr(e, t) {
    return (
      rt(e, (o) => {
        o !== void 0 && (t.value = o);
      }),
      B(() => (e.value === void 0 ? t.value : e.value))
    );
  }
  function xl() {
    const e = N(!1);
    return (
      _t(() => {
        e.value = !0;
      }),
      Ko(e)
    );
  }
  function Cl(e, t) {
    return B(() => {
      for (const o of t) if (e[o] !== void 0) return e[o];
      return e[t[t.length - 1]];
    });
  }
  const Ob =
    (typeof window > "u"
      ? !1
      : /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) &&
    !window.MSStream;
  function Bb() {
    return Ob;
  }
  const Ab = { xs: 0, s: 640, m: 1024, l: 1280, xl: 1536, "2xl": 1920 };
  function Hb(e) {
    return `(min-width: ${e}px)`;
  }
  const mn = {};
  function qc(e = Ab) {
    if (!Cs) return B(() => []);
    if (typeof window.matchMedia != "function") return B(() => []);
    const t = N({}),
      o = Object.keys(e),
      r = (n, i) => {
        n.matches ? (t.value[i] = !0) : (t.value[i] = !1);
      };
    return (
      o.forEach((n) => {
        const i = e[n];
        let l, a;
        mn[i] === void 0
          ? ((l = window.matchMedia(Hb(i))),
            l.addEventListener
              ? l.addEventListener("change", (s) => {
                  a.forEach((c) => {
                    c(s, n);
                  });
                })
              : l.addListener &&
                l.addListener((s) => {
                  a.forEach((c) => {
                    c(s, n);
                  });
                }),
            (a = new Set()),
            (mn[i] = { mql: l, cbs: a }))
          : ((l = mn[i].mql), (a = mn[i].cbs)),
          a.add(r),
          l.matches &&
            a.forEach((s) => {
              s(l, n);
            });
      }),
      Ct(() => {
        o.forEach((n) => {
          const { cbs: i } = mn[e[n]];
          i.has(r) && i.delete(r);
        });
      }),
      B(() => {
        const { value: n } = t;
        return o.filter((i) => n[i]);
      })
    );
  }
  function Fb(e) {
    if (!Cs) return B(() => {});
    const t = e !== void 0 ? qc(e) : qc();
    return B(() => {
      const { value: o } = t;
      if (o.length !== 0) return o[o.length - 1];
    });
  }
  function Db(e = {}, t) {
    const o = dl({ ctrl: !1, command: !1, win: !1, shift: !1, tab: !1 }),
      { keydown: r, keyup: n } = e,
      i = (s) => {
        switch (s.key) {
          case "Control":
            o.ctrl = !0;
            break;
          case "Meta":
            (o.command = !0), (o.win = !0);
            break;
          case "Shift":
            o.shift = !0;
            break;
          case "Tab":
            o.tab = !0;
            break;
        }
        r !== void 0 &&
          Object.keys(r).forEach((c) => {
            if (c !== s.key) return;
            const d = r[c];
            if (typeof d == "function") d(s);
            else {
              const { stop: u = !1, prevent: h = !1 } = d;
              u && s.stopPropagation(), h && s.preventDefault(), d.handler(s);
            }
          });
      },
      l = (s) => {
        switch (s.key) {
          case "Control":
            o.ctrl = !1;
            break;
          case "Meta":
            (o.command = !1), (o.win = !1);
            break;
          case "Shift":
            o.shift = !1;
            break;
          case "Tab":
            o.tab = !1;
            break;
        }
        n !== void 0 &&
          Object.keys(n).forEach((c) => {
            if (c !== s.key) return;
            const d = n[c];
            if (typeof d == "function") d(s);
            else {
              const { stop: u = !1, prevent: h = !1 } = d;
              u && s.stopPropagation(), h && s.preventDefault(), d.handler(s);
            }
          });
      },
      a = () => {
        (t === void 0 || t.value) &&
          (dt("keydown", document, i), dt("keyup", document, l)),
          t !== void 0 &&
            rt(t, (s) => {
              s
                ? (dt("keydown", document, i), dt("keyup", document, l))
                : (tt("keydown", document, i), tt("keyup", document, l));
            });
      };
    return (
      hf()
        ? (nn(a),
          Ct(() => {
            (t === void 0 || t.value) &&
              (tt("keydown", document, i), tt("keyup", document, l));
          }))
        : a(),
      Ko(o)
    );
  }
  const ys = "n-internal-select-menu",
    vf = "n-internal-select-menu-body",
    ws = "n-modal-body",
    Ss = "n-drawer-body",
    yl = "n-popover-body",
    gf = "__disabled__";
  function zo(e) {
    const t = Oe(ws, null),
      o = Oe(Ss, null),
      r = Oe(yl, null),
      n = Oe(vf, null),
      i = N();
    if (typeof document < "u") {
      i.value = document.fullscreenElement;
      const l = () => {
        i.value = document.fullscreenElement;
      };
      _t(() => {
        dt("fullscreenchange", document, l);
      }),
        Ct(() => {
          tt("fullscreenchange", document, l);
        });
    }
    return ut(() => {
      var l;
      const { to: a } = e;
      return a !== void 0
        ? a === !1
          ? gf
          : a === !0
          ? i.value || "body"
          : a
        : t != null && t.value
        ? (l = t.value.$el) !== null && l !== void 0
          ? l
          : t.value
        : o != null && o.value
        ? o.value
        : r != null && r.value
        ? r.value
        : n != null && n.value
        ? n.value
        : a ?? (i.value || "body");
    });
  }
  zo.tdkey = gf;
  zo.propTo = { type: [String, Object, Boolean], default: void 0 };
  function za(e, t, o = "default") {
    const r = t[o];
    if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
    return r();
  }
  function Ia(e, t = !0, o = []) {
    return (
      e.forEach((r) => {
        if (r !== null) {
          if (typeof r != "object") {
            (typeof r == "string" || typeof r == "number") &&
              o.push(kt(String(r)));
            return;
          }
          if (Array.isArray(r)) {
            Ia(r, t, o);
            return;
          }
          if (r.type === Ye) {
            if (r.children === null) return;
            Array.isArray(r.children) && Ia(r.children, t, o);
          } else r.type !== jt && o.push(r);
        }
      }),
      o
    );
  }
  function Yc(e, t, o = "default") {
    const r = t[o];
    if (r === void 0) throw new Error(`[vueuc/${e}]: slot[${o}] is empty.`);
    const n = Ia(r());
    if (n.length === 1) return n[0];
    throw new Error(`[vueuc/${e}]: slot[${o}] should have exactly one child.`);
  }
  let Bo = null;
  function mf() {
    if (
      Bo === null &&
      ((Bo = document.getElementById("v-binder-view-measurer")), Bo === null)
    ) {
      (Bo = document.createElement("div")), (Bo.id = "v-binder-view-measurer");
      const { style: e } = Bo;
      (e.position = "fixed"),
        (e.left = "0"),
        (e.right = "0"),
        (e.top = "0"),
        (e.bottom = "0"),
        (e.pointerEvents = "none"),
        (e.visibility = "hidden"),
        document.body.appendChild(Bo);
    }
    return Bo.getBoundingClientRect();
  }
  function Lb(e, t) {
    const o = mf();
    return {
      top: t,
      left: e,
      height: 0,
      width: 0,
      right: o.width - e,
      bottom: o.height - t,
    };
  }
  function Yl(e) {
    const t = e.getBoundingClientRect(),
      o = mf();
    return {
      left: t.left - o.left,
      top: t.top - o.top,
      bottom: o.height + o.top - t.bottom,
      right: o.width + o.left - t.right,
      width: t.width,
      height: t.height,
    };
  }
  function Wb(e) {
    return e.nodeType === 9 ? null : e.parentNode;
  }
  function bf(e) {
    if (e === null) return null;
    const t = Wb(e);
    if (t === null) return null;
    if (t.nodeType === 9) return document;
    if (t.nodeType === 1) {
      const { overflow: o, overflowX: r, overflowY: n } = getComputedStyle(t);
      if (/(auto|scroll|overlay)/.test(o + n + r)) return t;
    }
    return bf(t);
  }
  const Nb = ue({
      name: "Binder",
      props: {
        syncTargetWithParent: Boolean,
        syncTarget: { type: Boolean, default: !0 },
      },
      setup(e) {
        var t;
        ot("VBinder", (t = an()) === null || t === void 0 ? void 0 : t.proxy);
        const o = Oe("VBinder", null),
          r = N(null),
          n = (g) => {
            (r.value = g), o && e.syncTargetWithParent && o.setTargetRef(g);
          };
        let i = [];
        const l = () => {
            let g = r.value;
            for (; (g = bf(g)), g !== null; ) i.push(g);
            for (const T of i) dt("scroll", T, u, !0);
          },
          a = () => {
            for (const g of i) tt("scroll", g, u, !0);
            i = [];
          },
          s = new Set(),
          c = (g) => {
            s.size === 0 && l(), s.has(g) || s.add(g);
          },
          d = (g) => {
            s.has(g) && s.delete(g), s.size === 0 && a();
          },
          u = () => {
            nf(h);
          },
          h = () => {
            s.forEach((g) => g());
          },
          p = new Set(),
          f = (g) => {
            p.size === 0 && dt("resize", window, b), p.has(g) || p.add(g);
          },
          v = (g) => {
            p.has(g) && p.delete(g), p.size === 0 && tt("resize", window, b);
          },
          b = () => {
            p.forEach((g) => g());
          };
        return (
          Ct(() => {
            tt("resize", window, b), a();
          }),
          {
            targetRef: r,
            setTargetRef: n,
            addScrollListener: c,
            removeScrollListener: d,
            addResizeListener: f,
            removeResizeListener: v,
          }
        );
      },
      render() {
        return za("binder", this.$slots);
      },
    }),
    $s = Nb,
    Ps = ue({
      name: "Target",
      setup() {
        const { setTargetRef: e, syncTarget: t } = Oe("VBinder");
        return {
          syncTarget: t,
          setTargetDirective: { mounted: e, updated: e },
        };
      },
      render() {
        const { syncTarget: e, setTargetDirective: t } = this;
        return e
          ? ln(Yc("follower", this.$slots), [[t]])
          : Yc("follower", this.$slots);
      },
    }),
    Br = "@@mmoContext",
    jb = {
      mounted(e, { value: t }) {
        (e[Br] = { handler: void 0 }),
          typeof t == "function" &&
            ((e[Br].handler = t), dt("mousemoveoutside", e, t));
      },
      updated(e, { value: t }) {
        const o = e[Br];
        typeof t == "function"
          ? o.handler
            ? o.handler !== t &&
              (tt("mousemoveoutside", e, o.handler),
              (o.handler = t),
              dt("mousemoveoutside", e, t))
            : ((e[Br].handler = t), dt("mousemoveoutside", e, t))
          : o.handler &&
            (tt("mousemoveoutside", e, o.handler), (o.handler = void 0));
      },
      unmounted(e) {
        const { handler: t } = e[Br];
        t && tt("mousemoveoutside", e, t), (e[Br].handler = void 0);
      },
    },
    Vb = jb,
    Ar = "@@coContext",
    Kb = {
      mounted(e, { value: t, modifiers: o }) {
        (e[Ar] = { handler: void 0 }),
          typeof t == "function" &&
            ((e[Ar].handler = t),
            dt("clickoutside", e, t, { capture: o.capture }));
      },
      updated(e, { value: t, modifiers: o }) {
        const r = e[Ar];
        typeof t == "function"
          ? r.handler
            ? r.handler !== t &&
              (tt("clickoutside", e, r.handler, { capture: o.capture }),
              (r.handler = t),
              dt("clickoutside", e, t, { capture: o.capture }))
            : ((e[Ar].handler = t),
              dt("clickoutside", e, t, { capture: o.capture }))
          : r.handler &&
            (tt("clickoutside", e, r.handler, { capture: o.capture }),
            (r.handler = void 0));
      },
      unmounted(e, { modifiers: t }) {
        const { handler: o } = e[Ar];
        o && tt("clickoutside", e, o, { capture: t.capture }),
          (e[Ar].handler = void 0);
      },
    },
    Yi = Kb;
  function Ub(e, t) {
    console.error(`[vdirs/${e}]: ${t}`);
  }
  class Gb {
    constructor() {
      (this.elementZIndex = new Map()), (this.nextZIndex = 2e3);
    }
    get elementCount() {
      return this.elementZIndex.size;
    }
    ensureZIndex(t, o) {
      const { elementZIndex: r } = this;
      if (o !== void 0) {
        (t.style.zIndex = `${o}`), r.delete(t);
        return;
      }
      const { nextZIndex: n } = this;
      (r.has(t) && r.get(t) + 1 === this.nextZIndex) ||
        ((t.style.zIndex = `${n}`),
        r.set(t, n),
        (this.nextZIndex = n + 1),
        this.squashState());
    }
    unregister(t, o) {
      const { elementZIndex: r } = this;
      r.has(t)
        ? r.delete(t)
        : o === void 0 &&
          Ub(
            "z-index-manager/unregister-element",
            "Element not found when unregistering."
          ),
        this.squashState();
    }
    squashState() {
      const { elementCount: t } = this;
      t || (this.nextZIndex = 2e3),
        this.nextZIndex - t > 2500 && this.rearrange();
    }
    rearrange() {
      const t = Array.from(this.elementZIndex.entries());
      t.sort((o, r) => o[1] - r[1]),
        (this.nextZIndex = 2e3),
        t.forEach((o) => {
          const r = o[0],
            n = this.nextZIndex++;
          `${n}` !== r.style.zIndex && (r.style.zIndex = `${n}`);
        });
    }
  }
  const Xl = new Gb(),
    Hr = "@@ziContext",
    qb = {
      mounted(e, t) {
        const { value: o = {} } = t,
          { zIndex: r, enabled: n } = o;
        (e[Hr] = { enabled: !!n, initialized: !1 }),
          n && (Xl.ensureZIndex(e, r), (e[Hr].initialized = !0));
      },
      updated(e, t) {
        const { value: o = {} } = t,
          { zIndex: r, enabled: n } = o,
          i = e[Hr].enabled;
        n && !i && (Xl.ensureZIndex(e, r), (e[Hr].initialized = !0)),
          (e[Hr].enabled = !!n);
      },
      unmounted(e, t) {
        if (!e[Hr].initialized) return;
        const { value: o = {} } = t,
          { zIndex: r } = o;
        Xl.unregister(e, r);
      },
    },
    xf = qb,
    Cf = Symbol("@css-render/vue3-ssr");
  function Yb(e, t) {
    return `<style cssr-id="${e}">
${t}
</style>`;
  }
  function Xb(e, t) {
    const o = Oe(Cf, null);
    if (o === null) {
      console.error("[css-render/vue3-ssr]: no ssr context found.");
      return;
    }
    const { styles: r, ids: n } = o;
    n.has(e) || (r !== null && (n.add(e), r.push(Yb(e, t))));
  }
  const Zb = typeof document < "u";
  function Pr() {
    if (Zb) return;
    const e = Oe(Cf, null);
    if (e !== null) return { adapter: Xb, context: e };
  }
  function Xc(e, t) {
    console.error(`[vueuc/${e}]: ${t}`);
  }
  const { c: Lo } = df(),
    Ts = "vueuc-style";
  function Zc(e) {
    return e & -e;
  }
  class Jb {
    constructor(t, o) {
      (this.l = t), (this.min = o);
      const r = new Array(t + 1);
      for (let n = 0; n < t + 1; ++n) r[n] = 0;
      this.ft = r;
    }
    add(t, o) {
      if (o === 0) return;
      const { l: r, ft: n } = this;
      for (t += 1; t <= r; ) (n[t] += o), (t += Zc(t));
    }
    get(t) {
      return this.sum(t + 1) - this.sum(t);
    }
    sum(t) {
      if ((t === void 0 && (t = this.l), t <= 0)) return 0;
      const { ft: o, min: r, l: n } = this;
      if (t > n)
        throw new Error("[FinweckTree.sum]: `i` is larger than length.");
      let i = t * r;
      for (; t > 0; ) (i += o[t]), (t -= Zc(t));
      return i;
    }
    getBound(t) {
      let o = 0,
        r = this.l;
      for (; r > o; ) {
        const n = Math.floor((o + r) / 2),
          i = this.sum(n);
        if (i > t) {
          r = n;
          continue;
        } else if (i < t) {
          if (o === n) return this.sum(o + 1) <= t ? o + 1 : n;
          o = n;
        } else return n;
      }
      return o;
    }
  }
  function Jc(e) {
    return typeof e == "string" ? document.querySelector(e) : e();
  }
  const Qb = ue({
      name: "LazyTeleport",
      props: {
        to: { type: [String, Object], default: void 0 },
        disabled: Boolean,
        show: { type: Boolean, required: !0 },
      },
      setup(e) {
        return {
          showTeleport: wb(ke(e, "show")),
          mergedTo: B(() => {
            const { to: t } = e;
            return t ?? "body";
          }),
        };
      },
      render() {
        return this.showTeleport
          ? this.disabled
            ? za("lazy-teleport", this.$slots)
            : m(
                Ng,
                { disabled: this.disabled, to: this.mergedTo },
                za("lazy-teleport", this.$slots)
              )
          : null;
      },
    }),
    Ci = { top: "bottom", bottom: "top", left: "right", right: "left" },
    Qc = { start: "end", center: "center", end: "start" },
    Zl = { top: "height", bottom: "height", left: "width", right: "width" },
    e0 = {
      "bottom-start": "top left",
      bottom: "top center",
      "bottom-end": "top right",
      "top-start": "bottom left",
      top: "bottom center",
      "top-end": "bottom right",
      "right-start": "top left",
      right: "center left",
      "right-end": "bottom left",
      "left-start": "top right",
      left: "center right",
      "left-end": "bottom right",
    },
    t0 = {
      "bottom-start": "bottom left",
      bottom: "bottom center",
      "bottom-end": "bottom right",
      "top-start": "top left",
      top: "top center",
      "top-end": "top right",
      "right-start": "top right",
      right: "center right",
      "right-end": "bottom right",
      "left-start": "top left",
      left: "center left",
      "left-end": "bottom left",
    },
    o0 = {
      "bottom-start": "right",
      "bottom-end": "left",
      "top-start": "right",
      "top-end": "left",
      "right-start": "bottom",
      "right-end": "top",
      "left-start": "bottom",
      "left-end": "top",
    },
    ed = { top: !0, bottom: !1, left: !0, right: !1 },
    td = { top: "end", bottom: "start", left: "end", right: "start" };
  function r0(e, t, o, r, n, i) {
    if (!n || i) return { placement: e, top: 0, left: 0 };
    const [l, a] = e.split("-");
    let s = a ?? "center",
      c = { top: 0, left: 0 };
    const d = (p, f, v) => {
        let b = 0,
          g = 0;
        const T = o[p] - t[f] - t[p];
        return (
          T > 0 && r && (v ? (g = ed[f] ? T : -T) : (b = ed[f] ? T : -T)),
          { left: b, top: g }
        );
      },
      u = l === "left" || l === "right";
    if (s !== "center") {
      const p = o0[e],
        f = Ci[p],
        v = Zl[p];
      if (o[v] > t[v]) {
        if (t[p] + t[v] < o[v]) {
          const b = (o[v] - t[v]) / 2;
          t[p] < b || t[f] < b
            ? t[p] < t[f]
              ? ((s = Qc[a]), (c = d(v, f, u)))
              : (c = d(v, p, u))
            : (s = "center");
        }
      } else o[v] < t[v] && t[f] < 0 && t[p] > t[f] && (s = Qc[a]);
    } else {
      const p = l === "bottom" || l === "top" ? "left" : "top",
        f = Ci[p],
        v = Zl[p],
        b = (o[v] - t[v]) / 2;
      (t[p] < b || t[f] < b) &&
        (t[p] > t[f]
          ? ((s = td[p]), (c = d(v, p, u)))
          : ((s = td[f]), (c = d(v, f, u))));
    }
    let h = l;
    return (
      t[l] < o[Zl[l]] && t[l] < t[Ci[l]] && (h = Ci[l]),
      { placement: s !== "center" ? `${h}-${s}` : h, left: c.left, top: c.top }
    );
  }
  function n0(e, t) {
    return t ? t0[e] : e0[e];
  }
  function i0(e, t, o, r, n, i) {
    if (i)
      switch (e) {
        case "bottom-start":
          return {
            top: `${Math.round(o.top - t.top + o.height)}px`,
            left: `${Math.round(o.left - t.left)}px`,
            transform: "translateY(-100%)",
          };
        case "bottom-end":
          return {
            top: `${Math.round(o.top - t.top + o.height)}px`,
            left: `${Math.round(o.left - t.left + o.width)}px`,
            transform: "translateX(-100%) translateY(-100%)",
          };
        case "top-start":
          return {
            top: `${Math.round(o.top - t.top)}px`,
            left: `${Math.round(o.left - t.left)}px`,
            transform: "",
          };
        case "top-end":
          return {
            top: `${Math.round(o.top - t.top)}px`,
            left: `${Math.round(o.left - t.left + o.width)}px`,
            transform: "translateX(-100%)",
          };
        case "right-start":
          return {
            top: `${Math.round(o.top - t.top)}px`,
            left: `${Math.round(o.left - t.left + o.width)}px`,
            transform: "translateX(-100%)",
          };
        case "right-end":
          return {
            top: `${Math.round(o.top - t.top + o.height)}px`,
            left: `${Math.round(o.left - t.left + o.width)}px`,
            transform: "translateX(-100%) translateY(-100%)",
          };
        case "left-start":
          return {
            top: `${Math.round(o.top - t.top)}px`,
            left: `${Math.round(o.left - t.left)}px`,
            transform: "",
          };
        case "left-end":
          return {
            top: `${Math.round(o.top - t.top + o.height)}px`,
            left: `${Math.round(o.left - t.left)}px`,
            transform: "translateY(-100%)",
          };
        case "top":
          return {
            top: `${Math.round(o.top - t.top)}px`,
            left: `${Math.round(o.left - t.left + o.width / 2)}px`,
            transform: "translateX(-50%)",
          };
        case "right":
          return {
            top: `${Math.round(o.top - t.top + o.height / 2)}px`,
            left: `${Math.round(o.left - t.left + o.width)}px`,
            transform: "translateX(-100%) translateY(-50%)",
          };
        case "left":
          return {
            top: `${Math.round(o.top - t.top + o.height / 2)}px`,
            left: `${Math.round(o.left - t.left)}px`,
            transform: "translateY(-50%)",
          };
        case "bottom":
        default:
          return {
            top: `${Math.round(o.top - t.top + o.height)}px`,
            left: `${Math.round(o.left - t.left + o.width / 2)}px`,
            transform: "translateX(-50%) translateY(-100%)",
          };
      }
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(o.top - t.top + o.height + r)}px`,
          left: `${Math.round(o.left - t.left + n)}px`,
          transform: "",
        };
      case "bottom-end":
        return {
          top: `${Math.round(o.top - t.top + o.height + r)}px`,
          left: `${Math.round(o.left - t.left + o.width + n)}px`,
          transform: "translateX(-100%)",
        };
      case "top-start":
        return {
          top: `${Math.round(o.top - t.top + r)}px`,
          left: `${Math.round(o.left - t.left + n)}px`,
          transform: "translateY(-100%)",
        };
      case "top-end":
        return {
          top: `${Math.round(o.top - t.top + r)}px`,
          left: `${Math.round(o.left - t.left + o.width + n)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "right-start":
        return {
          top: `${Math.round(o.top - t.top + r)}px`,
          left: `${Math.round(o.left - t.left + o.width + n)}px`,
          transform: "",
        };
      case "right-end":
        return {
          top: `${Math.round(o.top - t.top + o.height + r)}px`,
          left: `${Math.round(o.left - t.left + o.width + n)}px`,
          transform: "translateY(-100%)",
        };
      case "left-start":
        return {
          top: `${Math.round(o.top - t.top + r)}px`,
          left: `${Math.round(o.left - t.left + n)}px`,
          transform: "translateX(-100%)",
        };
      case "left-end":
        return {
          top: `${Math.round(o.top - t.top + o.height + r)}px`,
          left: `${Math.round(o.left - t.left + n)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "top":
        return {
          top: `${Math.round(o.top - t.top + r)}px`,
          left: `${Math.round(o.left - t.left + o.width / 2 + n)}px`,
          transform: "translateY(-100%) translateX(-50%)",
        };
      case "right":
        return {
          top: `${Math.round(o.top - t.top + o.height / 2 + r)}px`,
          left: `${Math.round(o.left - t.left + o.width + n)}px`,
          transform: "translateY(-50%)",
        };
      case "left":
        return {
          top: `${Math.round(o.top - t.top + o.height / 2 + r)}px`,
          left: `${Math.round(o.left - t.left + n)}px`,
          transform: "translateY(-50%) translateX(-100%)",
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(o.top - t.top + o.height + r)}px`,
          left: `${Math.round(o.left - t.left + o.width / 2 + n)}px`,
          transform: "translateX(-50%)",
        };
    }
  }
  const l0 = Lo([
      Lo(".v-binder-follower-container", {
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        height: "0",
        pointerEvents: "none",
        zIndex: "auto",
      }),
      Lo(
        ".v-binder-follower-content",
        { position: "absolute", zIndex: "auto" },
        [Lo("> *", { pointerEvents: "all" })]
      ),
    ]),
    zs = ue({
      name: "Follower",
      inheritAttrs: !1,
      props: {
        show: Boolean,
        enabled: { type: Boolean, default: void 0 },
        placement: { type: String, default: "bottom" },
        syncTrigger: { type: Array, default: ["resize", "scroll"] },
        to: [String, Object],
        flip: { type: Boolean, default: !0 },
        internalShift: Boolean,
        x: Number,
        y: Number,
        width: String,
        minWidth: String,
        containerClass: String,
        teleportDisabled: Boolean,
        zindexable: { type: Boolean, default: !0 },
        zIndex: Number,
        overlap: Boolean,
      },
      setup(e) {
        const t = Oe("VBinder"),
          o = ut(() => (e.enabled !== void 0 ? e.enabled : e.show)),
          r = N(null),
          n = N(null),
          i = () => {
            const { syncTrigger: h } = e;
            h.includes("scroll") && t.addScrollListener(s),
              h.includes("resize") && t.addResizeListener(s);
          },
          l = () => {
            t.removeScrollListener(s), t.removeResizeListener(s);
          };
        _t(() => {
          o.value && (s(), i());
        });
        const a = Pr();
        l0.mount({ id: "vueuc/binder", head: !0, anchorMetaName: Ts, ssr: a }),
          Ct(() => {
            l();
          }),
          $b(() => {
            o.value && s();
          });
        const s = () => {
          if (!o.value) return;
          const h = r.value;
          if (h === null) return;
          const p = t.targetRef,
            { x: f, y: v, overlap: b } = e,
            g = f !== void 0 && v !== void 0 ? Lb(f, v) : Yl(p);
          h.style.setProperty("--v-target-width", `${Math.round(g.width)}px`),
            h.style.setProperty(
              "--v-target-height",
              `${Math.round(g.height)}px`
            );
          const {
            width: T,
            minWidth: O,
            placement: P,
            internalShift: R,
            flip: V,
          } = e;
          h.setAttribute("v-placement", P),
            b
              ? h.setAttribute("v-overlap", "")
              : h.removeAttribute("v-overlap");
          const { style: x } = h;
          T === "target"
            ? (x.width = `${g.width}px`)
            : T !== void 0
            ? (x.width = T)
            : (x.width = ""),
            O === "target"
              ? (x.minWidth = `${g.width}px`)
              : O !== void 0
              ? (x.minWidth = O)
              : (x.minWidth = "");
          const S = Yl(h),
            M = Yl(n.value),
            { left: C, top: _, placement: y } = r0(P, g, S, R, V, b),
            K = n0(y, b),
            { left: H, top: q, transform: k } = i0(y, M, g, _, C, b);
          h.setAttribute("v-placement", y),
            h.style.setProperty("--v-offset-left", `${Math.round(C)}px`),
            h.style.setProperty("--v-offset-top", `${Math.round(_)}px`),
            (h.style.transform = `translateX(${H}) translateY(${q}) ${k}`),
            h.style.setProperty("--v-transform-origin", K),
            (h.style.transformOrigin = K);
        };
        rt(o, (h) => {
          h ? (i(), c()) : l();
        });
        const c = () => {
          $o()
            .then(s)
            .catch((h) => console.error(h));
        };
        [
          "placement",
          "x",
          "y",
          "internalShift",
          "flip",
          "width",
          "overlap",
          "minWidth",
        ].forEach((h) => {
          rt(ke(e, h), s);
        }),
          ["teleportDisabled"].forEach((h) => {
            rt(ke(e, h), c);
          }),
          rt(ke(e, "syncTrigger"), (h) => {
            h.includes("resize")
              ? t.addResizeListener(s)
              : t.removeResizeListener(s),
              h.includes("scroll")
                ? t.addScrollListener(s)
                : t.removeScrollListener(s);
          });
        const d = xl(),
          u = ut(() => {
            const { to: h } = e;
            if (h !== void 0) return h;
            d.value;
          });
        return {
          VBinder: t,
          mergedEnabled: o,
          offsetContainerRef: n,
          followerRef: r,
          mergedTo: u,
          syncPosition: s,
        };
      },
      render() {
        return m(
          Qb,
          {
            show: this.show,
            to: this.mergedTo,
            disabled: this.teleportDisabled,
          },
          {
            default: () => {
              var e, t;
              const o = m(
                "div",
                {
                  class: ["v-binder-follower-container", this.containerClass],
                  ref: "offsetContainerRef",
                },
                [
                  m(
                    "div",
                    { class: "v-binder-follower-content", ref: "followerRef" },
                    (t = (e = this.$slots).default) === null || t === void 0
                      ? void 0
                      : t.call(e)
                  ),
                ]
              );
              return this.zindexable
                ? ln(o, [
                    [xf, { enabled: this.mergedEnabled, zIndex: this.zIndex }],
                  ])
                : o;
            },
          }
        );
      },
    });
  var br = [],
    a0 = function () {
      return br.some(function (e) {
        return e.activeTargets.length > 0;
      });
    },
    s0 = function () {
      return br.some(function (e) {
        return e.skippedTargets.length > 0;
      });
    },
    od = "ResizeObserver loop completed with undelivered notifications.",
    c0 = function () {
      var e;
      typeof ErrorEvent == "function"
        ? (e = new ErrorEvent("error", { message: od }))
        : ((e = document.createEvent("Event")),
          e.initEvent("error", !1, !1),
          (e.message = od)),
        window.dispatchEvent(e);
    },
    Gn;
  (function (e) {
    (e.BORDER_BOX = "border-box"),
      (e.CONTENT_BOX = "content-box"),
      (e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
  })(Gn || (Gn = {}));
  var xr = function (e) {
      return Object.freeze(e);
    },
    d0 = (function () {
      function e(t, o) {
        (this.inlineSize = t), (this.blockSize = o), xr(this);
      }
      return e;
    })(),
    yf = (function () {
      function e(t, o, r, n) {
        return (
          (this.x = t),
          (this.y = o),
          (this.width = r),
          (this.height = n),
          (this.top = this.y),
          (this.left = this.x),
          (this.bottom = this.top + this.height),
          (this.right = this.left + this.width),
          xr(this)
        );
      }
      return (
        (e.prototype.toJSON = function () {
          var t = this,
            o = t.x,
            r = t.y,
            n = t.top,
            i = t.right,
            l = t.bottom,
            a = t.left,
            s = t.width,
            c = t.height;
          return {
            x: o,
            y: r,
            top: n,
            right: i,
            bottom: l,
            left: a,
            width: s,
            height: c,
          };
        }),
        (e.fromRect = function (t) {
          return new e(t.x, t.y, t.width, t.height);
        }),
        e
      );
    })(),
    Is = function (e) {
      return e instanceof SVGElement && "getBBox" in e;
    },
    wf = function (e) {
      if (Is(e)) {
        var t = e.getBBox(),
          o = t.width,
          r = t.height;
        return !o && !r;
      }
      var n = e,
        i = n.offsetWidth,
        l = n.offsetHeight;
      return !(i || l || e.getClientRects().length);
    },
    rd = function (e) {
      var t;
      if (e instanceof Element) return !0;
      var o =
        (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0
          ? void 0
          : t.defaultView;
      return !!(o && e instanceof o.Element);
    },
    u0 = function (e) {
      switch (e.tagName) {
        case "INPUT":
          if (e.type !== "image") break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
          return !0;
      }
      return !1;
    },
    En = typeof window < "u" ? window : {},
    yi = new WeakMap(),
    nd = /auto|scroll/,
    f0 = /^tb|vertical/,
    h0 = /msie|trident/i.test(En.navigator && En.navigator.userAgent),
    ao = function (e) {
      return parseFloat(e || "0");
    },
    Gr = function (e, t, o) {
      return (
        e === void 0 && (e = 0),
        t === void 0 && (t = 0),
        o === void 0 && (o = !1),
        new d0((o ? t : e) || 0, (o ? e : t) || 0)
      );
    },
    id = xr({
      devicePixelContentBoxSize: Gr(),
      borderBoxSize: Gr(),
      contentBoxSize: Gr(),
      contentRect: new yf(0, 0, 0, 0),
    }),
    Sf = function (e, t) {
      if ((t === void 0 && (t = !1), yi.has(e) && !t)) return yi.get(e);
      if (wf(e)) return yi.set(e, id), id;
      var o = getComputedStyle(e),
        r = Is(e) && e.ownerSVGElement && e.getBBox(),
        n = !h0 && o.boxSizing === "border-box",
        i = f0.test(o.writingMode || ""),
        l = !r && nd.test(o.overflowY || ""),
        a = !r && nd.test(o.overflowX || ""),
        s = r ? 0 : ao(o.paddingTop),
        c = r ? 0 : ao(o.paddingRight),
        d = r ? 0 : ao(o.paddingBottom),
        u = r ? 0 : ao(o.paddingLeft),
        h = r ? 0 : ao(o.borderTopWidth),
        p = r ? 0 : ao(o.borderRightWidth),
        f = r ? 0 : ao(o.borderBottomWidth),
        v = r ? 0 : ao(o.borderLeftWidth),
        b = u + c,
        g = s + d,
        T = v + p,
        O = h + f,
        P = a ? e.offsetHeight - O - e.clientHeight : 0,
        R = l ? e.offsetWidth - T - e.clientWidth : 0,
        V = n ? b + T : 0,
        x = n ? g + O : 0,
        S = r ? r.width : ao(o.width) - V - R,
        M = r ? r.height : ao(o.height) - x - P,
        C = S + b + R + T,
        _ = M + g + P + O,
        y = xr({
          devicePixelContentBoxSize: Gr(
            Math.round(S * devicePixelRatio),
            Math.round(M * devicePixelRatio),
            i
          ),
          borderBoxSize: Gr(C, _, i),
          contentBoxSize: Gr(S, M, i),
          contentRect: new yf(u, s, S, M),
        });
      return yi.set(e, y), y;
    },
    $f = function (e, t, o) {
      var r = Sf(e, o),
        n = r.borderBoxSize,
        i = r.contentBoxSize,
        l = r.devicePixelContentBoxSize;
      switch (t) {
        case Gn.DEVICE_PIXEL_CONTENT_BOX:
          return l;
        case Gn.BORDER_BOX:
          return n;
        default:
          return i;
      }
    },
    p0 = (function () {
      function e(t) {
        var o = Sf(t);
        (this.target = t),
          (this.contentRect = o.contentRect),
          (this.borderBoxSize = xr([o.borderBoxSize])),
          (this.contentBoxSize = xr([o.contentBoxSize])),
          (this.devicePixelContentBoxSize = xr([o.devicePixelContentBoxSize]));
      }
      return e;
    })(),
    Pf = function (e) {
      if (wf(e)) return 1 / 0;
      for (var t = 0, o = e.parentNode; o; ) (t += 1), (o = o.parentNode);
      return t;
    },
    v0 = function () {
      var e = 1 / 0,
        t = [];
      br.forEach(function (l) {
        if (l.activeTargets.length !== 0) {
          var a = [];
          l.activeTargets.forEach(function (c) {
            var d = new p0(c.target),
              u = Pf(c.target);
            a.push(d),
              (c.lastReportedSize = $f(c.target, c.observedBox)),
              u < e && (e = u);
          }),
            t.push(function () {
              l.callback.call(l.observer, a, l.observer);
            }),
            l.activeTargets.splice(0, l.activeTargets.length);
        }
      });
      for (var o = 0, r = t; o < r.length; o++) {
        var n = r[o];
        n();
      }
      return e;
    },
    ld = function (e) {
      br.forEach(function (o) {
        o.activeTargets.splice(0, o.activeTargets.length),
          o.skippedTargets.splice(0, o.skippedTargets.length),
          o.observationTargets.forEach(function (n) {
            n.isActive() &&
              (Pf(n.target) > e
                ? o.activeTargets.push(n)
                : o.skippedTargets.push(n));
          });
      });
    },
    g0 = function () {
      var e = 0;
      for (ld(e); a0(); ) (e = v0()), ld(e);
      return s0() && c0(), e > 0;
    },
    Jl,
    Tf = [],
    m0 = function () {
      return Tf.splice(0).forEach(function (e) {
        return e();
      });
    },
    b0 = function (e) {
      if (!Jl) {
        var t = 0,
          o = document.createTextNode(""),
          r = { characterData: !0 };
        new MutationObserver(function () {
          return m0();
        }).observe(o, r),
          (Jl = function () {
            o.textContent = "".concat(t ? t-- : t++);
          });
      }
      Tf.push(e), Jl();
    },
    x0 = function (e) {
      b0(function () {
        requestAnimationFrame(e);
      });
    },
    Oi = 0,
    C0 = function () {
      return !!Oi;
    },
    y0 = 250,
    w0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    ad = [
      "resize",
      "load",
      "transitionend",
      "animationend",
      "animationstart",
      "animationiteration",
      "keyup",
      "keydown",
      "mouseup",
      "mousedown",
      "mouseover",
      "mouseout",
      "blur",
      "focus",
    ],
    sd = function (e) {
      return e === void 0 && (e = 0), Date.now() + e;
    },
    Ql = !1,
    S0 = (function () {
      function e() {
        var t = this;
        (this.stopped = !0),
          (this.listener = function () {
            return t.schedule();
          });
      }
      return (
        (e.prototype.run = function (t) {
          var o = this;
          if ((t === void 0 && (t = y0), !Ql)) {
            Ql = !0;
            var r = sd(t);
            x0(function () {
              var n = !1;
              try {
                n = g0();
              } finally {
                if (((Ql = !1), (t = r - sd()), !C0())) return;
                n ? o.run(1e3) : t > 0 ? o.run(t) : o.start();
              }
            });
          }
        }),
        (e.prototype.schedule = function () {
          this.stop(), this.run();
        }),
        (e.prototype.observe = function () {
          var t = this,
            o = function () {
              return t.observer && t.observer.observe(document.body, w0);
            };
          document.body ? o() : En.addEventListener("DOMContentLoaded", o);
        }),
        (e.prototype.start = function () {
          var t = this;
          this.stopped &&
            ((this.stopped = !1),
            (this.observer = new MutationObserver(this.listener)),
            this.observe(),
            ad.forEach(function (o) {
              return En.addEventListener(o, t.listener, !0);
            }));
        }),
        (e.prototype.stop = function () {
          var t = this;
          this.stopped ||
            (this.observer && this.observer.disconnect(),
            ad.forEach(function (o) {
              return En.removeEventListener(o, t.listener, !0);
            }),
            (this.stopped = !0));
        }),
        e
      );
    })(),
    _a = new S0(),
    cd = function (e) {
      !Oi && e > 0 && _a.start(), (Oi += e), !Oi && _a.stop();
    },
    $0 = function (e) {
      return !Is(e) && !u0(e) && getComputedStyle(e).display === "inline";
    },
    P0 = (function () {
      function e(t, o) {
        (this.target = t),
          (this.observedBox = o || Gn.CONTENT_BOX),
          (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
      }
      return (
        (e.prototype.isActive = function () {
          var t = $f(this.target, this.observedBox, !0);
          return (
            $0(this.target) && (this.lastReportedSize = t),
            this.lastReportedSize.inlineSize !== t.inlineSize ||
              this.lastReportedSize.blockSize !== t.blockSize
          );
        }),
        e
      );
    })(),
    T0 = (function () {
      function e(t, o) {
        (this.activeTargets = []),
          (this.skippedTargets = []),
          (this.observationTargets = []),
          (this.observer = t),
          (this.callback = o);
      }
      return e;
    })(),
    wi = new WeakMap(),
    dd = function (e, t) {
      for (var o = 0; o < e.length; o += 1) if (e[o].target === t) return o;
      return -1;
    },
    Si = (function () {
      function e() {}
      return (
        (e.connect = function (t, o) {
          var r = new T0(t, o);
          wi.set(t, r);
        }),
        (e.observe = function (t, o, r) {
          var n = wi.get(t),
            i = n.observationTargets.length === 0;
          dd(n.observationTargets, o) < 0 &&
            (i && br.push(n),
            n.observationTargets.push(new P0(o, r && r.box)),
            cd(1),
            _a.schedule());
        }),
        (e.unobserve = function (t, o) {
          var r = wi.get(t),
            n = dd(r.observationTargets, o),
            i = r.observationTargets.length === 1;
          n >= 0 &&
            (i && br.splice(br.indexOf(r), 1),
            r.observationTargets.splice(n, 1),
            cd(-1));
        }),
        (e.disconnect = function (t) {
          var o = this,
            r = wi.get(t);
          r.observationTargets.slice().forEach(function (n) {
            return o.unobserve(t, n.target);
          }),
            r.activeTargets.splice(0, r.activeTargets.length);
        }),
        e
      );
    })(),
    z0 = (function () {
      function e(t) {
        if (arguments.length === 0)
          throw new TypeError(
            "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
          );
        if (typeof t != "function")
          throw new TypeError(
            "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
          );
        Si.connect(this, t);
      }
      return (
        (e.prototype.observe = function (t, o) {
          if (arguments.length === 0)
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!rd(t))
            throw new TypeError(
              "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Si.observe(this, t, o);
        }),
        (e.prototype.unobserve = function (t) {
          if (arguments.length === 0)
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
            );
          if (!rd(t))
            throw new TypeError(
              "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
            );
          Si.unobserve(this, t);
        }),
        (e.prototype.disconnect = function () {
          Si.disconnect(this);
        }),
        (e.toString = function () {
          return "function ResizeObserver () { [polyfill code] }";
        }),
        e
      );
    })();
  class I0 {
    constructor() {
      (this.handleResize = this.handleResize.bind(this)),
        (this.observer = new ((typeof window < "u" && window.ResizeObserver) ||
          z0)(this.handleResize)),
        (this.elHandlersMap = new Map());
    }
    handleResize(t) {
      for (const o of t) {
        const r = this.elHandlersMap.get(o.target);
        r !== void 0 && r(o);
      }
    }
    registerHandler(t, o) {
      this.elHandlersMap.set(t, o), this.observer.observe(t);
    }
    unregisterHandler(t) {
      this.elHandlersMap.has(t) &&
        (this.elHandlersMap.delete(t), this.observer.unobserve(t));
    }
  }
  const Xi = new I0(),
    qn = ue({
      name: "ResizeObserver",
      props: { onResize: Function },
      setup(e) {
        let t = !1;
        const o = an().proxy;
        function r(n) {
          const { onResize: i } = e;
          i !== void 0 && i(n);
        }
        _t(() => {
          const n = o.$el;
          if (n === void 0) {
            Xc("resize-observer", "$el does not exist.");
            return;
          }
          if (
            n.nextElementSibling !== n.nextSibling &&
            n.nodeType === 3 &&
            n.nodeValue !== ""
          ) {
            Xc(
              "resize-observer",
              "$el can not be observed (it may be a text node)."
            );
            return;
          }
          n.nextElementSibling !== null &&
            (Xi.registerHandler(n.nextElementSibling, r), (t = !0));
        }),
          Ct(() => {
            t && Xi.unregisterHandler(o.$el.nextElementSibling);
          });
      },
      render() {
        return Pn(this.$slots, "default");
      },
    });
  let $i;
  function _0() {
    return (
      $i === void 0 &&
        ("matchMedia" in window
          ? ($i = window.matchMedia("(pointer:coarse)").matches)
          : ($i = !1)),
      $i
    );
  }
  let ea;
  function ud() {
    return (
      ea === void 0 && (ea = "chrome" in window ? window.devicePixelRatio : 1),
      ea
    );
  }
  const M0 = Lo(
      ".v-vl",
      {
        maxHeight: "inherit",
        height: "100%",
        overflow: "auto",
        minWidth: "1px",
      },
      [
        Lo("&:not(.v-vl--show-scrollbar)", { scrollbarWidth: "none" }, [
          Lo(
            "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
            { width: 0, height: 0, display: "none" }
          ),
        ]),
      ]
    ),
    k0 = ue({
      name: "VirtualList",
      inheritAttrs: !1,
      props: {
        showScrollbar: { type: Boolean, default: !0 },
        items: { type: Array, default: () => [] },
        itemSize: { type: Number, required: !0 },
        itemResizable: Boolean,
        itemsStyle: [String, Object],
        visibleItemsTag: { type: [String, Object], default: "div" },
        visibleItemsProps: Object,
        ignoreItemResize: Boolean,
        onScroll: Function,
        onWheel: Function,
        onResize: Function,
        defaultScrollKey: [Number, String],
        defaultScrollIndex: Number,
        keyField: { type: String, default: "key" },
        paddingTop: { type: [Number, String], default: 0 },
        paddingBottom: { type: [Number, String], default: 0 },
      },
      setup(e) {
        const t = Pr();
        M0.mount({
          id: "vueuc/virtual-list",
          head: !0,
          anchorMetaName: Ts,
          ssr: t,
        }),
          _t(() => {
            const { defaultScrollIndex: _, defaultScrollKey: y } = e;
            _ != null ? f({ index: _ }) : y != null && f({ key: y });
          });
        let o = !1,
          r = !1;
        ds(() => {
          if (((o = !1), !r)) {
            r = !0;
            return;
          }
          f({ top: u.value, left: d });
        }),
          us(() => {
            (o = !0), r || (r = !0);
          });
        const n = B(() => {
            const _ = new Map(),
              { keyField: y } = e;
            return (
              e.items.forEach((K, H) => {
                _.set(K[y], H);
              }),
              _
            );
          }),
          i = N(null),
          l = N(void 0),
          a = new Map(),
          s = B(() => {
            const { items: _, itemSize: y, keyField: K } = e,
              H = new Jb(_.length, y);
            return (
              _.forEach((q, k) => {
                const F = q[K],
                  Q = a.get(F);
                Q !== void 0 && H.add(k, Q);
              }),
              H
            );
          }),
          c = N(0);
        let d = 0;
        const u = N(0),
          h = ut(() =>
            Math.max(s.value.getBound(u.value - Vn(e.paddingTop)) - 1, 0)
          ),
          p = B(() => {
            const { value: _ } = l;
            if (_ === void 0) return [];
            const { items: y, itemSize: K } = e,
              H = h.value,
              q = Math.min(H + Math.ceil(_ / K + 1), y.length - 1),
              k = [];
            for (let F = H; F <= q; ++F) k.push(y[F]);
            return k;
          }),
          f = (_, y) => {
            if (typeof _ == "number") {
              T(_, y, "auto");
              return;
            }
            const {
              left: K,
              top: H,
              index: q,
              key: k,
              position: F,
              behavior: Q,
              debounce: W = !0,
            } = _;
            if (K !== void 0 || H !== void 0) T(K, H, Q);
            else if (q !== void 0) g(q, Q, W);
            else if (k !== void 0) {
              const ee = n.value.get(k);
              ee !== void 0 && g(ee, Q, W);
            } else
              F === "bottom"
                ? T(0, Number.MAX_SAFE_INTEGER, Q)
                : F === "top" && T(0, 0, Q);
          };
        let v,
          b = null;
        function g(_, y, K) {
          const { value: H } = s,
            q = H.sum(_) + Vn(e.paddingTop);
          if (!K) i.value.scrollTo({ left: 0, top: q, behavior: y });
          else {
            (v = _),
              b !== null && window.clearTimeout(b),
              (b = window.setTimeout(() => {
                (v = void 0), (b = null);
              }, 16));
            const { scrollTop: k, offsetHeight: F } = i.value;
            if (q > k) {
              const Q = H.get(_);
              q + Q <= k + F ||
                i.value.scrollTo({ left: 0, top: q + Q - F, behavior: y });
            } else i.value.scrollTo({ left: 0, top: q, behavior: y });
          }
        }
        function T(_, y, K) {
          i.value.scrollTo({ left: _, top: y, behavior: K });
        }
        function O(_, y) {
          var K, H, q;
          if (o || e.ignoreItemResize || C(y.target)) return;
          const { value: k } = s,
            F = n.value.get(_),
            Q = k.get(F),
            W =
              (q =
                (H =
                  (K = y.borderBoxSize) === null || K === void 0
                    ? void 0
                    : K[0]) === null || H === void 0
                  ? void 0
                  : H.blockSize) !== null && q !== void 0
                ? q
                : y.contentRect.height;
          if (W === Q) return;
          W - e.itemSize === 0 ? a.delete(_) : a.set(_, W - e.itemSize);
          const ve = W - Q;
          if (ve === 0) return;
          k.add(F, ve);
          const ae = i.value;
          if (ae != null) {
            if (v === void 0) {
              const he = k.sum(F);
              ae.scrollTop > he && ae.scrollBy(0, ve);
            } else if (F < v) ae.scrollBy(0, ve);
            else if (F === v) {
              const he = k.sum(F);
              W + he > ae.scrollTop + ae.offsetHeight && ae.scrollBy(0, ve);
            }
            M();
          }
          c.value++;
        }
        const P = !_0();
        let R = !1;
        function V(_) {
          var y;
          (y = e.onScroll) === null || y === void 0 || y.call(e, _),
            (!P || !R) && M();
        }
        function x(_) {
          var y;
          if (((y = e.onWheel) === null || y === void 0 || y.call(e, _), P)) {
            const K = i.value;
            if (K != null) {
              if (
                _.deltaX === 0 &&
                ((K.scrollTop === 0 && _.deltaY <= 0) ||
                  (K.scrollTop + K.offsetHeight >= K.scrollHeight &&
                    _.deltaY >= 0))
              )
                return;
              _.preventDefault(),
                (K.scrollTop += _.deltaY / ud()),
                (K.scrollLeft += _.deltaX / ud()),
                M(),
                (R = !0),
                nf(() => {
                  R = !1;
                });
            }
          }
        }
        function S(_) {
          if (o || C(_.target) || _.contentRect.height === l.value) return;
          l.value = _.contentRect.height;
          const { onResize: y } = e;
          y !== void 0 && y(_);
        }
        function M() {
          const { value: _ } = i;
          _ != null && ((u.value = _.scrollTop), (d = _.scrollLeft));
        }
        function C(_) {
          let y = _;
          for (; y !== null; ) {
            if (y.style.display === "none") return !0;
            y = y.parentElement;
          }
          return !1;
        }
        return {
          listHeight: l,
          listStyle: { overflow: "auto" },
          keyToIndex: n,
          itemsStyle: B(() => {
            const { itemResizable: _ } = e,
              y = gi(s.value.sum());
            return (
              c.value,
              [
                e.itemsStyle,
                {
                  boxSizing: "content-box",
                  height: _ ? "" : y,
                  minHeight: _ ? y : "",
                  paddingTop: gi(e.paddingTop),
                  paddingBottom: gi(e.paddingBottom),
                },
              ]
            );
          }),
          visibleItemsStyle: B(
            () => (
              c.value, { transform: `translateY(${gi(s.value.sum(h.value))})` }
            )
          ),
          viewportItems: p,
          listElRef: i,
          itemsElRef: N(null),
          scrollTo: f,
          handleListResize: S,
          handleListScroll: V,
          handleListWheel: x,
          handleItemResize: O,
        };
      },
      render() {
        const {
          itemResizable: e,
          keyField: t,
          keyToIndex: o,
          visibleItemsTag: r,
        } = this;
        return m(
          qn,
          { onResize: this.handleListResize },
          {
            default: () => {
              var n, i;
              return m(
                "div",
                $r(this.$attrs, {
                  class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
                  onScroll: this.handleListScroll,
                  onWheel: this.handleListWheel,
                  ref: "listElRef",
                }),
                [
                  this.items.length !== 0
                    ? m(
                        "div",
                        {
                          ref: "itemsElRef",
                          class: "v-vl-items",
                          style: this.itemsStyle,
                        },
                        [
                          m(
                            r,
                            Object.assign(
                              {
                                class: "v-vl-visible-items",
                                style: this.visibleItemsStyle,
                              },
                              this.visibleItemsProps
                            ),
                            {
                              default: () =>
                                this.viewportItems.map((l) => {
                                  const a = l[t],
                                    s = o.get(a),
                                    c = this.$slots.default({
                                      item: l,
                                      index: s,
                                    })[0];
                                  return e
                                    ? m(
                                        qn,
                                        {
                                          key: a,
                                          onResize: (d) =>
                                            this.handleItemResize(a, d),
                                        },
                                        { default: () => c }
                                      )
                                    : ((c.key = a), c);
                                }),
                            }
                          ),
                        ]
                      )
                    : (i = (n = this.$slots).empty) === null || i === void 0
                    ? void 0
                    : i.call(n),
                ]
              );
            },
          }
        );
      },
    }),
    or = "v-hidden",
    E0 = Lo("[v-hidden]", { display: "none!important" }),
    fd = ue({
      name: "Overflow",
      props: {
        getCounter: Function,
        getTail: Function,
        updateCounter: Function,
        onUpdateOverflow: Function,
      },
      setup(e, { slots: t }) {
        const o = N(null),
          r = N(null);
        function n() {
          const { value: l } = o,
            { getCounter: a, getTail: s } = e;
          let c;
          if ((a !== void 0 ? (c = a()) : (c = r.value), !l || !c)) return;
          c.hasAttribute(or) && c.removeAttribute(or);
          const { children: d } = l,
            u = l.offsetWidth,
            h = [],
            p = t.tail ? (s == null ? void 0 : s()) : null;
          let f = p ? p.offsetWidth : 0,
            v = !1;
          const b = l.children.length - (t.tail ? 1 : 0);
          for (let T = 0; T < b - 1; ++T) {
            if (T < 0) continue;
            const O = d[T];
            if (v) {
              O.hasAttribute(or) || O.setAttribute(or, "");
              continue;
            } else O.hasAttribute(or) && O.removeAttribute(or);
            const P = O.offsetWidth;
            if (((f += P), (h[T] = P), f > u)) {
              const { updateCounter: R } = e;
              for (let V = T; V >= 0; --V) {
                const x = b - 1 - V;
                R !== void 0 ? R(x) : (c.textContent = `${x}`);
                const S = c.offsetWidth;
                if (((f -= h[V]), f + S <= u || V === 0)) {
                  (v = !0),
                    (T = V - 1),
                    p &&
                      (T === -1
                        ? ((p.style.maxWidth = `${u - S}px`),
                          (p.style.boxSizing = "border-box"))
                        : (p.style.maxWidth = ""));
                  break;
                }
              }
            }
          }
          const { onUpdateOverflow: g } = e;
          v
            ? g !== void 0 && g(!0)
            : (g !== void 0 && g(!1), c.setAttribute(or, ""));
        }
        const i = Pr();
        return (
          E0.mount({
            id: "vueuc/overflow",
            head: !0,
            anchorMetaName: Ts,
            ssr: i,
          }),
          _t(n),
          { selfRef: o, counterRef: r, sync: n }
        );
      },
      render() {
        const { $slots: e } = this;
        return (
          $o(this.sync),
          m("div", { class: "v-overflow", ref: "selfRef" }, [
            Pn(e, "default"),
            e.counter
              ? e.counter()
              : m("span", {
                  style: { display: "inline-block" },
                  ref: "counterRef",
                }),
            e.tail ? e.tail() : null,
          ])
        );
      },
    });
  function zf(e) {
    return e instanceof HTMLElement;
  }
  function If(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
      const o = e.childNodes[t];
      if (zf(o) && (Mf(o) || If(o))) return !0;
    }
    return !1;
  }
  function _f(e) {
    for (let t = e.childNodes.length - 1; t >= 0; t--) {
      const o = e.childNodes[t];
      if (zf(o) && (Mf(o) || _f(o))) return !0;
    }
    return !1;
  }
  function Mf(e) {
    if (!R0(e)) return !1;
    try {
      e.focus({ preventScroll: !0 });
    } catch {}
    return document.activeElement === e;
  }
  function R0(e) {
    if (
      e.tabIndex > 0 ||
      (e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    )
      return !0;
    if (e.getAttribute("disabled")) return !1;
    switch (e.nodeName) {
      case "A":
        return !!e.href && e.rel !== "ignore";
      case "INPUT":
        return e.type !== "hidden" && e.type !== "file";
      case "BUTTON":
      case "SELECT":
      case "TEXTAREA":
        return !0;
      default:
        return !1;
    }
  }
  let bn = [];
  const O0 = ue({
    name: "FocusTrap",
    props: {
      disabled: Boolean,
      active: Boolean,
      autoFocus: { type: Boolean, default: !0 },
      onEsc: Function,
      initialFocusTo: String,
      finalFocusTo: String,
      returnFocusOnDeactivated: { type: Boolean, default: !0 },
    },
    setup(e) {
      const t = jm(),
        o = N(null),
        r = N(null);
      let n = !1,
        i = !1;
      const l = typeof document > "u" ? null : document.activeElement;
      function a() {
        return bn[bn.length - 1] === t;
      }
      function s(b) {
        var g;
        b.code === "Escape" &&
          a() &&
          ((g = e.onEsc) === null || g === void 0 || g.call(e, b));
      }
      _t(() => {
        rt(
          () => e.active,
          (b) => {
            b
              ? (u(), dt("keydown", document, s))
              : (tt("keydown", document, s), n && h());
          },
          { immediate: !0 }
        );
      }),
        Ct(() => {
          tt("keydown", document, s), n && h();
        });
      function c(b) {
        if (!i && a()) {
          const g = d();
          if (g === null || g.contains(jn(b))) return;
          p("first");
        }
      }
      function d() {
        const b = o.value;
        if (b === null) return null;
        let g = b;
        for (
          ;
          (g = g.nextSibling),
            !(g === null || (g instanceof Element && g.tagName === "DIV"));

        );
        return g;
      }
      function u() {
        var b;
        if (!e.disabled) {
          if ((bn.push(t), e.autoFocus)) {
            const { initialFocusTo: g } = e;
            g === void 0
              ? p("first")
              : (b = Jc(g)) === null ||
                b === void 0 ||
                b.focus({ preventScroll: !0 });
          }
          (n = !0), document.addEventListener("focus", c, !0);
        }
      }
      function h() {
        var b;
        if (
          e.disabled ||
          (document.removeEventListener("focus", c, !0),
          (bn = bn.filter((T) => T !== t)),
          a())
        )
          return;
        const { finalFocusTo: g } = e;
        g !== void 0
          ? (b = Jc(g)) === null ||
            b === void 0 ||
            b.focus({ preventScroll: !0 })
          : e.returnFocusOnDeactivated &&
            l instanceof HTMLElement &&
            ((i = !0), l.focus({ preventScroll: !0 }), (i = !1));
      }
      function p(b) {
        if (a() && e.active) {
          const g = o.value,
            T = r.value;
          if (g !== null && T !== null) {
            const O = d();
            if (O == null || O === T) {
              (i = !0), g.focus({ preventScroll: !0 }), (i = !1);
              return;
            }
            i = !0;
            const P = b === "first" ? If(O) : _f(O);
            (i = !1), P || ((i = !0), g.focus({ preventScroll: !0 }), (i = !1));
          }
        }
      }
      function f(b) {
        if (i) return;
        const g = d();
        g !== null &&
          (b.relatedTarget !== null && g.contains(b.relatedTarget)
            ? p("last")
            : p("first"));
      }
      function v(b) {
        i ||
          (b.relatedTarget !== null && b.relatedTarget === o.value
            ? p("last")
            : p("first"));
      }
      return {
        focusableStartRef: o,
        focusableEndRef: r,
        focusableStyle: "position: absolute; height: 0; width: 0;",
        handleStartFocus: f,
        handleEndFocus: v,
      };
    },
    render() {
      const { default: e } = this.$slots;
      if (e === void 0) return null;
      if (this.disabled) return e();
      const { active: t, focusableStyle: o } = this;
      return m(Ye, null, [
        m("div", {
          "aria-hidden": "true",
          tabindex: t ? "0" : "-1",
          ref: "focusableStartRef",
          style: o,
          onFocus: this.handleStartFocus,
        }),
        e(),
        m("div", {
          "aria-hidden": "true",
          style: o,
          ref: "focusableEndRef",
          tabindex: t ? "0" : "-1",
          onFocus: this.handleEndFocus,
        }),
      ]);
    },
  });
  function kf(e, t) {
    t &&
      (_t(() => {
        const { value: o } = e;
        o && Xi.registerHandler(o, t);
      }),
      Ct(() => {
        const { value: o } = e;
        o && Xi.unregisterHandler(o);
      }));
  }
  function Ef(e) {
    const t = { isDeactivated: !1 };
    let o = !1;
    return (
      ds(() => {
        if (((t.isDeactivated = !1), !o)) {
          o = !0;
          return;
        }
        e();
      }),
      us(() => {
        (t.isDeactivated = !0), o || (o = !0);
      }),
      t
    );
  }
  const hd = "n-form-item";
  function _s(
    e,
    { defaultSize: t = "medium", mergedSize: o, mergedDisabled: r } = {}
  ) {
    const n = Oe(hd, null);
    ot(hd, null);
    const i = B(
        o
          ? () => o(n)
          : () => {
              const { size: s } = e;
              if (s) return s;
              if (n) {
                const { mergedSize: c } = n;
                if (c.value !== void 0) return c.value;
              }
              return t;
            }
      ),
      l = B(
        r
          ? () => r(n)
          : () => {
              const { disabled: s } = e;
              return s !== void 0 ? s : n ? n.disabled.value : !1;
            }
      ),
      a = B(() => {
        const { status: s } = e;
        return s || (n == null ? void 0 : n.mergedValidationStatus.value);
      });
    return (
      Ct(() => {
        n && n.restoreValidation();
      }),
      {
        mergedSizeRef: i,
        mergedDisabledRef: l,
        mergedStatusRef: a,
        nTriggerFormBlur() {
          n && n.handleContentBlur();
        },
        nTriggerFormChange() {
          n && n.handleContentChange();
        },
        nTriggerFormFocus() {
          n && n.handleContentFocus();
        },
        nTriggerFormInput() {
          n && n.handleContentInput();
        },
      }
    );
  }
  var B0 =
    typeof global == "object" && global && global.Object === Object && global;
  const Rf = B0;
  var A0 = typeof self == "object" && self && self.Object === Object && self,
    H0 = Rf || A0 || Function("return this")();
  const go = H0;
  var F0 = go.Symbol;
  const Uo = F0;
  var Of = Object.prototype,
    D0 = Of.hasOwnProperty,
    L0 = Of.toString,
    xn = Uo ? Uo.toStringTag : void 0;
  function W0(e) {
    var t = D0.call(e, xn),
      o = e[xn];
    try {
      e[xn] = void 0;
      var r = !0;
    } catch {}
    var n = L0.call(e);
    return r && (t ? (e[xn] = o) : delete e[xn]), n;
  }
  var N0 = Object.prototype,
    j0 = N0.toString;
  function V0(e) {
    return j0.call(e);
  }
  var K0 = "[object Null]",
    U0 = "[object Undefined]",
    pd = Uo ? Uo.toStringTag : void 0;
  function Tr(e) {
    return e == null
      ? e === void 0
        ? U0
        : K0
      : pd && pd in Object(e)
      ? W0(e)
      : V0(e);
  }
  function Go(e) {
    return e != null && typeof e == "object";
  }
  var G0 = "[object Symbol]";
  function Ms(e) {
    return typeof e == "symbol" || (Go(e) && Tr(e) == G0);
  }
  function Bf(e, t) {
    for (var o = -1, r = e == null ? 0 : e.length, n = Array(r); ++o < r; )
      n[o] = t(e[o], o, e);
    return n;
  }
  var q0 = Array.isArray;
  const qt = q0;
  var Y0 = 1 / 0,
    vd = Uo ? Uo.prototype : void 0,
    gd = vd ? vd.toString : void 0;
  function Af(e) {
    if (typeof e == "string") return e;
    if (qt(e)) return Bf(e, Af) + "";
    if (Ms(e)) return gd ? gd.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -Y0 ? "-0" : t;
  }
  function Yo(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  function ks(e) {
    return e;
  }
  var X0 = "[object AsyncFunction]",
    Z0 = "[object Function]",
    J0 = "[object GeneratorFunction]",
    Q0 = "[object Proxy]";
  function Es(e) {
    if (!Yo(e)) return !1;
    var t = Tr(e);
    return t == Z0 || t == J0 || t == X0 || t == Q0;
  }
  var ex = go["__core-js_shared__"];
  const ta = ex;
  var md = (function () {
    var e = /[^.]+$/.exec((ta && ta.keys && ta.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function tx(e) {
    return !!md && md in e;
  }
  var ox = Function.prototype,
    rx = ox.toString;
  function zr(e) {
    if (e != null) {
      try {
        return rx.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var nx = /[\\^$.*+?()[\]{}|]/g,
    ix = /^\[object .+?Constructor\]$/,
    lx = Function.prototype,
    ax = Object.prototype,
    sx = lx.toString,
    cx = ax.hasOwnProperty,
    dx = RegExp(
      "^" +
        sx
          .call(cx)
          .replace(nx, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function ux(e) {
    if (!Yo(e) || tx(e)) return !1;
    var t = Es(e) ? dx : ix;
    return t.test(zr(e));
  }
  function fx(e, t) {
    return e == null ? void 0 : e[t];
  }
  function Ir(e, t) {
    var o = fx(e, t);
    return ux(o) ? o : void 0;
  }
  var hx = Ir(go, "WeakMap");
  const Ma = hx;
  var bd = Object.create,
    px = (function () {
      function e() {}
      return function (t) {
        if (!Yo(t)) return {};
        if (bd) return bd(t);
        e.prototype = t;
        var o = new e();
        return (e.prototype = void 0), o;
      };
    })();
  const vx = px;
  function gx(e, t, o) {
    switch (o.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, o[0]);
      case 2:
        return e.call(t, o[0], o[1]);
      case 3:
        return e.call(t, o[0], o[1], o[2]);
    }
    return e.apply(t, o);
  }
  function mx(e, t) {
    var o = -1,
      r = e.length;
    for (t || (t = Array(r)); ++o < r; ) t[o] = e[o];
    return t;
  }
  var bx = 800,
    xx = 16,
    Cx = Date.now;
  function yx(e) {
    var t = 0,
      o = 0;
    return function () {
      var r = Cx(),
        n = xx - (r - o);
      if (((o = r), n > 0)) {
        if (++t >= bx) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  function wx(e) {
    return function () {
      return e;
    };
  }
  var Sx = (function () {
    try {
      var e = Ir(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  const Zi = Sx;
  var $x = Zi
    ? function (e, t) {
        return Zi(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: wx(t),
          writable: !0,
        });
      }
    : ks;
  const Px = $x;
  var Tx = yx(Px);
  const zx = Tx;
  var Ix = 9007199254740991,
    _x = /^(?:0|[1-9]\d*)$/;
  function Rs(e, t) {
    var o = typeof e;
    return (
      (t = t ?? Ix),
      !!t &&
        (o == "number" || (o != "symbol" && _x.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  function Os(e, t, o) {
    t == "__proto__" && Zi
      ? Zi(e, t, { configurable: !0, enumerable: !0, value: o, writable: !0 })
      : (e[t] = o);
  }
  function ii(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var Mx = Object.prototype,
    kx = Mx.hasOwnProperty;
  function Ex(e, t, o) {
    var r = e[t];
    (!(kx.call(e, t) && ii(r, o)) || (o === void 0 && !(t in e))) &&
      Os(e, t, o);
  }
  function Rx(e, t, o, r) {
    var n = !o;
    o || (o = {});
    for (var i = -1, l = t.length; ++i < l; ) {
      var a = t[i],
        s = r ? r(o[a], e[a], a, o, e) : void 0;
      s === void 0 && (s = e[a]), n ? Os(o, a, s) : Ex(o, a, s);
    }
    return o;
  }
  var xd = Math.max;
  function Ox(e, t, o) {
    return (
      (t = xd(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var r = arguments, n = -1, i = xd(r.length - t, 0), l = Array(i);
          ++n < i;

        )
          l[n] = r[t + n];
        n = -1;
        for (var a = Array(t + 1); ++n < t; ) a[n] = r[n];
        return (a[t] = o(l)), gx(e, this, a);
      }
    );
  }
  function Bx(e, t) {
    return zx(Ox(e, t, ks), e + "");
  }
  var Ax = 9007199254740991;
  function Bs(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ax;
  }
  function dn(e) {
    return e != null && Bs(e.length) && !Es(e);
  }
  function Hx(e, t, o) {
    if (!Yo(o)) return !1;
    var r = typeof t;
    return (r == "number" ? dn(o) && Rs(t, o.length) : r == "string" && t in o)
      ? ii(o[t], e)
      : !1;
  }
  function Fx(e) {
    return Bx(function (t, o) {
      var r = -1,
        n = o.length,
        i = n > 1 ? o[n - 1] : void 0,
        l = n > 2 ? o[2] : void 0;
      for (
        i = e.length > 3 && typeof i == "function" ? (n--, i) : void 0,
          l && Hx(o[0], o[1], l) && ((i = n < 3 ? void 0 : i), (n = 1)),
          t = Object(t);
        ++r < n;

      ) {
        var a = o[r];
        a && e(t, a, r, i);
      }
      return t;
    });
  }
  var Dx = Object.prototype;
  function As(e) {
    var t = e && e.constructor,
      o = (typeof t == "function" && t.prototype) || Dx;
    return e === o;
  }
  function Lx(e, t) {
    for (var o = -1, r = Array(e); ++o < e; ) r[o] = t(o);
    return r;
  }
  var Wx = "[object Arguments]";
  function Cd(e) {
    return Go(e) && Tr(e) == Wx;
  }
  var Hf = Object.prototype,
    Nx = Hf.hasOwnProperty,
    jx = Hf.propertyIsEnumerable,
    Vx = Cd(
      (function () {
        return arguments;
      })()
    )
      ? Cd
      : function (e) {
          return Go(e) && Nx.call(e, "callee") && !jx.call(e, "callee");
        };
  const Ji = Vx;
  function Kx() {
    return !1;
  }
  var Ff = typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    yd = Ff && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
    Ux = yd && yd.exports === Ff,
    wd = Ux ? go.Buffer : void 0,
    Gx = wd ? wd.isBuffer : void 0,
    qx = Gx || Kx;
  const Qi = qx;
  var Yx = "[object Arguments]",
    Xx = "[object Array]",
    Zx = "[object Boolean]",
    Jx = "[object Date]",
    Qx = "[object Error]",
    eC = "[object Function]",
    tC = "[object Map]",
    oC = "[object Number]",
    rC = "[object Object]",
    nC = "[object RegExp]",
    iC = "[object Set]",
    lC = "[object String]",
    aC = "[object WeakMap]",
    sC = "[object ArrayBuffer]",
    cC = "[object DataView]",
    dC = "[object Float32Array]",
    uC = "[object Float64Array]",
    fC = "[object Int8Array]",
    hC = "[object Int16Array]",
    pC = "[object Int32Array]",
    vC = "[object Uint8Array]",
    gC = "[object Uint8ClampedArray]",
    mC = "[object Uint16Array]",
    bC = "[object Uint32Array]",
    Qe = {};
  Qe[dC] =
    Qe[uC] =
    Qe[fC] =
    Qe[hC] =
    Qe[pC] =
    Qe[vC] =
    Qe[gC] =
    Qe[mC] =
    Qe[bC] =
      !0;
  Qe[Yx] =
    Qe[Xx] =
    Qe[sC] =
    Qe[Zx] =
    Qe[cC] =
    Qe[Jx] =
    Qe[Qx] =
    Qe[eC] =
    Qe[tC] =
    Qe[oC] =
    Qe[rC] =
    Qe[nC] =
    Qe[iC] =
    Qe[lC] =
    Qe[aC] =
      !1;
  function xC(e) {
    return Go(e) && Bs(e.length) && !!Qe[Tr(e)];
  }
  function CC(e) {
    return function (t) {
      return e(t);
    };
  }
  var Df = typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    Rn = Df && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
    yC = Rn && Rn.exports === Df,
    oa = yC && Rf.process,
    wC = (function () {
      try {
        var e = Rn && Rn.require && Rn.require("util").types;
        return e || (oa && oa.binding && oa.binding("util"));
      } catch {}
    })();
  const Sd = wC;
  var $d = Sd && Sd.isTypedArray,
    SC = $d ? CC($d) : xC;
  const Hs = SC;
  var $C = Object.prototype,
    PC = $C.hasOwnProperty;
  function Lf(e, t) {
    var o = qt(e),
      r = !o && Ji(e),
      n = !o && !r && Qi(e),
      i = !o && !r && !n && Hs(e),
      l = o || r || n || i,
      a = l ? Lx(e.length, String) : [],
      s = a.length;
    for (var c in e)
      (t || PC.call(e, c)) &&
        !(
          l &&
          (c == "length" ||
            (n && (c == "offset" || c == "parent")) ||
            (i && (c == "buffer" || c == "byteLength" || c == "byteOffset")) ||
            Rs(c, s))
        ) &&
        a.push(c);
    return a;
  }
  function Wf(e, t) {
    return function (o) {
      return e(t(o));
    };
  }
  var TC = Wf(Object.keys, Object);
  const zC = TC;
  var IC = Object.prototype,
    _C = IC.hasOwnProperty;
  function MC(e) {
    if (!As(e)) return zC(e);
    var t = [];
    for (var o in Object(e)) _C.call(e, o) && o != "constructor" && t.push(o);
    return t;
  }
  function Fs(e) {
    return dn(e) ? Lf(e) : MC(e);
  }
  function kC(e) {
    var t = [];
    if (e != null) for (var o in Object(e)) t.push(o);
    return t;
  }
  var EC = Object.prototype,
    RC = EC.hasOwnProperty;
  function OC(e) {
    if (!Yo(e)) return kC(e);
    var t = As(e),
      o = [];
    for (var r in e) (r == "constructor" && (t || !RC.call(e, r))) || o.push(r);
    return o;
  }
  function Nf(e) {
    return dn(e) ? Lf(e, !0) : OC(e);
  }
  var BC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    AC = /^\w*$/;
  function Ds(e, t) {
    if (qt(e)) return !1;
    var o = typeof e;
    return o == "number" ||
      o == "symbol" ||
      o == "boolean" ||
      e == null ||
      Ms(e)
      ? !0
      : AC.test(e) || !BC.test(e) || (t != null && e in Object(t));
  }
  var HC = Ir(Object, "create");
  const Yn = HC;
  function FC() {
    (this.__data__ = Yn ? Yn(null) : {}), (this.size = 0);
  }
  function DC(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var LC = "__lodash_hash_undefined__",
    WC = Object.prototype,
    NC = WC.hasOwnProperty;
  function jC(e) {
    var t = this.__data__;
    if (Yn) {
      var o = t[e];
      return o === LC ? void 0 : o;
    }
    return NC.call(t, e) ? t[e] : void 0;
  }
  var VC = Object.prototype,
    KC = VC.hasOwnProperty;
  function UC(e) {
    var t = this.__data__;
    return Yn ? t[e] !== void 0 : KC.call(t, e);
  }
  var GC = "__lodash_hash_undefined__";
  function qC(e, t) {
    var o = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (o[e] = Yn && t === void 0 ? GC : t),
      this
    );
  }
  function wr(e) {
    var t = -1,
      o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  wr.prototype.clear = FC;
  wr.prototype.delete = DC;
  wr.prototype.get = jC;
  wr.prototype.has = UC;
  wr.prototype.set = qC;
  function YC() {
    (this.__data__ = []), (this.size = 0);
  }
  function wl(e, t) {
    for (var o = e.length; o--; ) if (ii(e[o][0], t)) return o;
    return -1;
  }
  var XC = Array.prototype,
    ZC = XC.splice;
  function JC(e) {
    var t = this.__data__,
      o = wl(t, e);
    if (o < 0) return !1;
    var r = t.length - 1;
    return o == r ? t.pop() : ZC.call(t, o, 1), --this.size, !0;
  }
  function QC(e) {
    var t = this.__data__,
      o = wl(t, e);
    return o < 0 ? void 0 : t[o][1];
  }
  function ey(e) {
    return wl(this.__data__, e) > -1;
  }
  function ty(e, t) {
    var o = this.__data__,
      r = wl(o, e);
    return r < 0 ? (++this.size, o.push([e, t])) : (o[r][1] = t), this;
  }
  function Mo(e) {
    var t = -1,
      o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Mo.prototype.clear = YC;
  Mo.prototype.delete = JC;
  Mo.prototype.get = QC;
  Mo.prototype.has = ey;
  Mo.prototype.set = ty;
  var oy = Ir(go, "Map");
  const Xn = oy;
  function ry() {
    (this.size = 0),
      (this.__data__ = {
        hash: new wr(),
        map: new (Xn || Mo)(),
        string: new wr(),
      });
  }
  function ny(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function Sl(e, t) {
    var o = e.__data__;
    return ny(t) ? o[typeof t == "string" ? "string" : "hash"] : o.map;
  }
  function iy(e) {
    var t = Sl(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function ly(e) {
    return Sl(this, e).get(e);
  }
  function ay(e) {
    return Sl(this, e).has(e);
  }
  function sy(e, t) {
    var o = Sl(this, e),
      r = o.size;
    return o.set(e, t), (this.size += o.size == r ? 0 : 1), this;
  }
  function ko(e) {
    var t = -1,
      o = e == null ? 0 : e.length;
    for (this.clear(); ++t < o; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ko.prototype.clear = ry;
  ko.prototype.delete = iy;
  ko.prototype.get = ly;
  ko.prototype.has = ay;
  ko.prototype.set = sy;
  var cy = "Expected a function";
  function Ls(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(cy);
    var o = function () {
      var r = arguments,
        n = t ? t.apply(this, r) : r[0],
        i = o.cache;
      if (i.has(n)) return i.get(n);
      var l = e.apply(this, r);
      return (o.cache = i.set(n, l) || i), l;
    };
    return (o.cache = new (Ls.Cache || ko)()), o;
  }
  Ls.Cache = ko;
  var dy = 500;
  function uy(e) {
    var t = Ls(e, function (r) {
        return o.size === dy && o.clear(), r;
      }),
      o = t.cache;
    return t;
  }
  var fy =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    hy = /\\(\\)?/g,
    py = uy(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(fy, function (o, r, n, i) {
          t.push(n ? i.replace(hy, "$1") : r || o);
        }),
        t
      );
    });
  const vy = py;
  function jf(e) {
    return e == null ? "" : Af(e);
  }
  function Vf(e, t) {
    return qt(e) ? e : Ds(e, t) ? [e] : vy(jf(e));
  }
  var gy = 1 / 0;
  function $l(e) {
    if (typeof e == "string" || Ms(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -gy ? "-0" : t;
  }
  function Kf(e, t) {
    t = Vf(t, e);
    for (var o = 0, r = t.length; e != null && o < r; ) e = e[$l(t[o++])];
    return o && o == r ? e : void 0;
  }
  function my(e, t, o) {
    var r = e == null ? void 0 : Kf(e, t);
    return r === void 0 ? o : r;
  }
  function by(e, t) {
    for (var o = -1, r = t.length, n = e.length; ++o < r; ) e[n + o] = t[o];
    return e;
  }
  var xy = Wf(Object.getPrototypeOf, Object);
  const Uf = xy;
  var Cy = "[object Object]",
    yy = Function.prototype,
    wy = Object.prototype,
    Gf = yy.toString,
    Sy = wy.hasOwnProperty,
    $y = Gf.call(Object);
  function Py(e) {
    if (!Go(e) || Tr(e) != Cy) return !1;
    var t = Uf(e);
    if (t === null) return !0;
    var o = Sy.call(t, "constructor") && t.constructor;
    return typeof o == "function" && o instanceof o && Gf.call(o) == $y;
  }
  function Ty(e, t, o) {
    var r = -1,
      n = e.length;
    t < 0 && (t = -t > n ? 0 : n + t),
      (o = o > n ? n : o),
      o < 0 && (o += n),
      (n = t > o ? 0 : (o - t) >>> 0),
      (t >>>= 0);
    for (var i = Array(n); ++r < n; ) i[r] = e[r + t];
    return i;
  }
  function zy(e, t, o) {
    var r = e.length;
    return (o = o === void 0 ? r : o), !t && o >= r ? e : Ty(e, t, o);
  }
  var Iy = "\\ud800-\\udfff",
    _y = "\\u0300-\\u036f",
    My = "\\ufe20-\\ufe2f",
    ky = "\\u20d0-\\u20ff",
    Ey = _y + My + ky,
    Ry = "\\ufe0e\\ufe0f",
    Oy = "\\u200d",
    By = RegExp("[" + Oy + Iy + Ey + Ry + "]");
  function qf(e) {
    return By.test(e);
  }
  function Ay(e) {
    return e.split("");
  }
  var Yf = "\\ud800-\\udfff",
    Hy = "\\u0300-\\u036f",
    Fy = "\\ufe20-\\ufe2f",
    Dy = "\\u20d0-\\u20ff",
    Ly = Hy + Fy + Dy,
    Wy = "\\ufe0e\\ufe0f",
    Ny = "[" + Yf + "]",
    ka = "[" + Ly + "]",
    Ea = "\\ud83c[\\udffb-\\udfff]",
    jy = "(?:" + ka + "|" + Ea + ")",
    Xf = "[^" + Yf + "]",
    Zf = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Jf = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Vy = "\\u200d",
    Qf = jy + "?",
    eh = "[" + Wy + "]?",
    Ky = "(?:" + Vy + "(?:" + [Xf, Zf, Jf].join("|") + ")" + eh + Qf + ")*",
    Uy = eh + Qf + Ky,
    Gy = "(?:" + [Xf + ka + "?", ka, Zf, Jf, Ny].join("|") + ")",
    qy = RegExp(Ea + "(?=" + Ea + ")|" + Gy + Uy, "g");
  function Yy(e) {
    return e.match(qy) || [];
  }
  function Xy(e) {
    return qf(e) ? Yy(e) : Ay(e);
  }
  function Zy(e) {
    return function (t) {
      t = jf(t);
      var o = qf(t) ? Xy(t) : void 0,
        r = o ? o[0] : t.charAt(0),
        n = o ? zy(o, 1).join("") : t.slice(1);
      return r[e]() + n;
    };
  }
  var Jy = Zy("toUpperCase");
  const Qy = Jy;
  function e1() {
    (this.__data__ = new Mo()), (this.size = 0);
  }
  function t1(e) {
    var t = this.__data__,
      o = t.delete(e);
    return (this.size = t.size), o;
  }
  function o1(e) {
    return this.__data__.get(e);
  }
  function r1(e) {
    return this.__data__.has(e);
  }
  var n1 = 200;
  function i1(e, t) {
    var o = this.__data__;
    if (o instanceof Mo) {
      var r = o.__data__;
      if (!Xn || r.length < n1 - 1)
        return r.push([e, t]), (this.size = ++o.size), this;
      o = this.__data__ = new ko(r);
    }
    return o.set(e, t), (this.size = o.size), this;
  }
  function ho(e) {
    var t = (this.__data__ = new Mo(e));
    this.size = t.size;
  }
  ho.prototype.clear = e1;
  ho.prototype.delete = t1;
  ho.prototype.get = o1;
  ho.prototype.has = r1;
  ho.prototype.set = i1;
  var th = typeof Wt == "object" && Wt && !Wt.nodeType && Wt,
    Pd = th && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
    l1 = Pd && Pd.exports === th,
    Td = l1 ? go.Buffer : void 0,
    zd = Td ? Td.allocUnsafe : void 0;
  function a1(e, t) {
    if (t) return e.slice();
    var o = e.length,
      r = zd ? zd(o) : new e.constructor(o);
    return e.copy(r), r;
  }
  function s1(e, t) {
    for (var o = -1, r = e == null ? 0 : e.length, n = 0, i = []; ++o < r; ) {
      var l = e[o];
      t(l, o, e) && (i[n++] = l);
    }
    return i;
  }
  function c1() {
    return [];
  }
  var d1 = Object.prototype,
    u1 = d1.propertyIsEnumerable,
    Id = Object.getOwnPropertySymbols,
    f1 = Id
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              s1(Id(e), function (t) {
                return u1.call(e, t);
              }));
        }
      : c1;
  const h1 = f1;
  function p1(e, t, o) {
    var r = t(e);
    return qt(e) ? r : by(r, o(e));
  }
  function _d(e) {
    return p1(e, Fs, h1);
  }
  var v1 = Ir(go, "DataView");
  const Ra = v1;
  var g1 = Ir(go, "Promise");
  const Oa = g1;
  var m1 = Ir(go, "Set");
  const Ba = m1;
  var Md = "[object Map]",
    b1 = "[object Object]",
    kd = "[object Promise]",
    Ed = "[object Set]",
    Rd = "[object WeakMap]",
    Od = "[object DataView]",
    x1 = zr(Ra),
    C1 = zr(Xn),
    y1 = zr(Oa),
    w1 = zr(Ba),
    S1 = zr(Ma),
    lr = Tr;
  ((Ra && lr(new Ra(new ArrayBuffer(1))) != Od) ||
    (Xn && lr(new Xn()) != Md) ||
    (Oa && lr(Oa.resolve()) != kd) ||
    (Ba && lr(new Ba()) != Ed) ||
    (Ma && lr(new Ma()) != Rd)) &&
    (lr = function (e) {
      var t = Tr(e),
        o = t == b1 ? e.constructor : void 0,
        r = o ? zr(o) : "";
      if (r)
        switch (r) {
          case x1:
            return Od;
          case C1:
            return Md;
          case y1:
            return kd;
          case w1:
            return Ed;
          case S1:
            return Rd;
        }
      return t;
    });
  const Bd = lr;
  var $1 = go.Uint8Array;
  const el = $1;
  function P1(e) {
    var t = new e.constructor(e.byteLength);
    return new el(t).set(new el(e)), t;
  }
  function T1(e, t) {
    var o = t ? P1(e.buffer) : e.buffer;
    return new e.constructor(o, e.byteOffset, e.length);
  }
  function z1(e) {
    return typeof e.constructor == "function" && !As(e) ? vx(Uf(e)) : {};
  }
  var I1 = "__lodash_hash_undefined__";
  function _1(e) {
    return this.__data__.set(e, I1), this;
  }
  function M1(e) {
    return this.__data__.has(e);
  }
  function tl(e) {
    var t = -1,
      o = e == null ? 0 : e.length;
    for (this.__data__ = new ko(); ++t < o; ) this.add(e[t]);
  }
  tl.prototype.add = tl.prototype.push = _1;
  tl.prototype.has = M1;
  function k1(e, t) {
    for (var o = -1, r = e == null ? 0 : e.length; ++o < r; )
      if (t(e[o], o, e)) return !0;
    return !1;
  }
  function E1(e, t) {
    return e.has(t);
  }
  var R1 = 1,
    O1 = 2;
  function oh(e, t, o, r, n, i) {
    var l = o & R1,
      a = e.length,
      s = t.length;
    if (a != s && !(l && s > a)) return !1;
    var c = i.get(e),
      d = i.get(t);
    if (c && d) return c == t && d == e;
    var u = -1,
      h = !0,
      p = o & O1 ? new tl() : void 0;
    for (i.set(e, t), i.set(t, e); ++u < a; ) {
      var f = e[u],
        v = t[u];
      if (r) var b = l ? r(v, f, u, t, e, i) : r(f, v, u, e, t, i);
      if (b !== void 0) {
        if (b) continue;
        h = !1;
        break;
      }
      if (p) {
        if (
          !k1(t, function (g, T) {
            if (!E1(p, T) && (f === g || n(f, g, o, r, i))) return p.push(T);
          })
        ) {
          h = !1;
          break;
        }
      } else if (!(f === v || n(f, v, o, r, i))) {
        h = !1;
        break;
      }
    }
    return i.delete(e), i.delete(t), h;
  }
  function B1(e) {
    var t = -1,
      o = Array(e.size);
    return (
      e.forEach(function (r, n) {
        o[++t] = [n, r];
      }),
      o
    );
  }
  function A1(e) {
    var t = -1,
      o = Array(e.size);
    return (
      e.forEach(function (r) {
        o[++t] = r;
      }),
      o
    );
  }
  var H1 = 1,
    F1 = 2,
    D1 = "[object Boolean]",
    L1 = "[object Date]",
    W1 = "[object Error]",
    N1 = "[object Map]",
    j1 = "[object Number]",
    V1 = "[object RegExp]",
    K1 = "[object Set]",
    U1 = "[object String]",
    G1 = "[object Symbol]",
    q1 = "[object ArrayBuffer]",
    Y1 = "[object DataView]",
    Ad = Uo ? Uo.prototype : void 0,
    ra = Ad ? Ad.valueOf : void 0;
  function X1(e, t, o, r, n, i, l) {
    switch (o) {
      case Y1:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
          return !1;
        (e = e.buffer), (t = t.buffer);
      case q1:
        return !(e.byteLength != t.byteLength || !i(new el(e), new el(t)));
      case D1:
      case L1:
      case j1:
        return ii(+e, +t);
      case W1:
        return e.name == t.name && e.message == t.message;
      case V1:
      case U1:
        return e == t + "";
      case N1:
        var a = B1;
      case K1:
        var s = r & H1;
        if ((a || (a = A1), e.size != t.size && !s)) return !1;
        var c = l.get(e);
        if (c) return c == t;
        (r |= F1), l.set(e, t);
        var d = oh(a(e), a(t), r, n, i, l);
        return l.delete(e), d;
      case G1:
        if (ra) return ra.call(e) == ra.call(t);
    }
    return !1;
  }
  var Z1 = 1,
    J1 = Object.prototype,
    Q1 = J1.hasOwnProperty;
  function ew(e, t, o, r, n, i) {
    var l = o & Z1,
      a = _d(e),
      s = a.length,
      c = _d(t),
      d = c.length;
    if (s != d && !l) return !1;
    for (var u = s; u--; ) {
      var h = a[u];
      if (!(l ? h in t : Q1.call(t, h))) return !1;
    }
    var p = i.get(e),
      f = i.get(t);
    if (p && f) return p == t && f == e;
    var v = !0;
    i.set(e, t), i.set(t, e);
    for (var b = l; ++u < s; ) {
      h = a[u];
      var g = e[h],
        T = t[h];
      if (r) var O = l ? r(T, g, h, t, e, i) : r(g, T, h, e, t, i);
      if (!(O === void 0 ? g === T || n(g, T, o, r, i) : O)) {
        v = !1;
        break;
      }
      b || (b = h == "constructor");
    }
    if (v && !b) {
      var P = e.constructor,
        R = t.constructor;
      P != R &&
        "constructor" in e &&
        "constructor" in t &&
        !(
          typeof P == "function" &&
          P instanceof P &&
          typeof R == "function" &&
          R instanceof R
        ) &&
        (v = !1);
    }
    return i.delete(e), i.delete(t), v;
  }
  var tw = 1,
    Hd = "[object Arguments]",
    Fd = "[object Array]",
    Pi = "[object Object]",
    ow = Object.prototype,
    Dd = ow.hasOwnProperty;
  function rw(e, t, o, r, n, i) {
    var l = qt(e),
      a = qt(t),
      s = l ? Fd : Bd(e),
      c = a ? Fd : Bd(t);
    (s = s == Hd ? Pi : s), (c = c == Hd ? Pi : c);
    var d = s == Pi,
      u = c == Pi,
      h = s == c;
    if (h && Qi(e)) {
      if (!Qi(t)) return !1;
      (l = !0), (d = !1);
    }
    if (h && !d)
      return (
        i || (i = new ho()),
        l || Hs(e) ? oh(e, t, o, r, n, i) : X1(e, t, s, o, r, n, i)
      );
    if (!(o & tw)) {
      var p = d && Dd.call(e, "__wrapped__"),
        f = u && Dd.call(t, "__wrapped__");
      if (p || f) {
        var v = p ? e.value() : e,
          b = f ? t.value() : t;
        return i || (i = new ho()), n(v, b, o, r, i);
      }
    }
    return h ? (i || (i = new ho()), ew(e, t, o, r, n, i)) : !1;
  }
  function Ws(e, t, o, r, n) {
    return e === t
      ? !0
      : e == null || t == null || (!Go(e) && !Go(t))
      ? e !== e && t !== t
      : rw(e, t, o, r, Ws, n);
  }
  var nw = 1,
    iw = 2;
  function lw(e, t, o, r) {
    var n = o.length,
      i = n,
      l = !r;
    if (e == null) return !i;
    for (e = Object(e); n--; ) {
      var a = o[n];
      if (l && a[2] ? a[1] !== e[a[0]] : !(a[0] in e)) return !1;
    }
    for (; ++n < i; ) {
      a = o[n];
      var s = a[0],
        c = e[s],
        d = a[1];
      if (l && a[2]) {
        if (c === void 0 && !(s in e)) return !1;
      } else {
        var u = new ho();
        if (r) var h = r(c, d, s, e, t, u);
        if (!(h === void 0 ? Ws(d, c, nw | iw, r, u) : h)) return !1;
      }
    }
    return !0;
  }
  function rh(e) {
    return e === e && !Yo(e);
  }
  function aw(e) {
    for (var t = Fs(e), o = t.length; o--; ) {
      var r = t[o],
        n = e[r];
      t[o] = [r, n, rh(n)];
    }
    return t;
  }
  function nh(e, t) {
    return function (o) {
      return o == null ? !1 : o[e] === t && (t !== void 0 || e in Object(o));
    };
  }
  function sw(e) {
    var t = aw(e);
    return t.length == 1 && t[0][2]
      ? nh(t[0][0], t[0][1])
      : function (o) {
          return o === e || lw(o, e, t);
        };
  }
  function cw(e, t) {
    return e != null && t in Object(e);
  }
  function dw(e, t, o) {
    t = Vf(t, e);
    for (var r = -1, n = t.length, i = !1; ++r < n; ) {
      var l = $l(t[r]);
      if (!(i = e != null && o(e, l))) break;
      e = e[l];
    }
    return i || ++r != n
      ? i
      : ((n = e == null ? 0 : e.length),
        !!n && Bs(n) && Rs(l, n) && (qt(e) || Ji(e)));
  }
  function uw(e, t) {
    return e != null && dw(e, t, cw);
  }
  var fw = 1,
    hw = 2;
  function pw(e, t) {
    return Ds(e) && rh(t)
      ? nh($l(e), t)
      : function (o) {
          var r = my(o, e);
          return r === void 0 && r === t ? uw(o, e) : Ws(t, r, fw | hw);
        };
  }
  function vw(e) {
    return function (t) {
      return t == null ? void 0 : t[e];
    };
  }
  function gw(e) {
    return function (t) {
      return Kf(t, e);
    };
  }
  function mw(e) {
    return Ds(e) ? vw($l(e)) : gw(e);
  }
  function bw(e) {
    return typeof e == "function"
      ? e
      : e == null
      ? ks
      : typeof e == "object"
      ? qt(e)
        ? pw(e[0], e[1])
        : sw(e)
      : mw(e);
  }
  function xw(e) {
    return function (t, o, r) {
      for (var n = -1, i = Object(t), l = r(t), a = l.length; a--; ) {
        var s = l[e ? a : ++n];
        if (o(i[s], s, i) === !1) break;
      }
      return t;
    };
  }
  var Cw = xw();
  const ih = Cw;
  function yw(e, t) {
    return e && ih(e, t, Fs);
  }
  function ww(e, t) {
    return function (o, r) {
      if (o == null) return o;
      if (!dn(o)) return e(o, r);
      for (
        var n = o.length, i = t ? n : -1, l = Object(o);
        (t ? i-- : ++i < n) && r(l[i], i, l) !== !1;

      );
      return o;
    };
  }
  var Sw = ww(yw);
  const $w = Sw;
  function Aa(e, t, o) {
    ((o !== void 0 && !ii(e[t], o)) || (o === void 0 && !(t in e))) &&
      Os(e, t, o);
  }
  function Pw(e) {
    return Go(e) && dn(e);
  }
  function Ha(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
      return e[t];
  }
  function Tw(e) {
    return Rx(e, Nf(e));
  }
  function zw(e, t, o, r, n, i, l) {
    var a = Ha(e, o),
      s = Ha(t, o),
      c = l.get(s);
    if (c) {
      Aa(e, o, c);
      return;
    }
    var d = i ? i(a, s, o + "", e, t, l) : void 0,
      u = d === void 0;
    if (u) {
      var h = qt(s),
        p = !h && Qi(s),
        f = !h && !p && Hs(s);
      (d = s),
        h || p || f
          ? qt(a)
            ? (d = a)
            : Pw(a)
            ? (d = mx(a))
            : p
            ? ((u = !1), (d = a1(s, !0)))
            : f
            ? ((u = !1), (d = T1(s, !0)))
            : (d = [])
          : Py(s) || Ji(s)
          ? ((d = a), Ji(a) ? (d = Tw(a)) : (!Yo(a) || Es(a)) && (d = z1(s)))
          : (u = !1);
    }
    u && (l.set(s, d), n(d, s, r, i, l), l.delete(s)), Aa(e, o, d);
  }
  function lh(e, t, o, r, n) {
    e !== t &&
      ih(
        t,
        function (i, l) {
          if ((n || (n = new ho()), Yo(i))) zw(e, t, l, o, lh, r, n);
          else {
            var a = r ? r(Ha(e, l), i, l + "", e, t, n) : void 0;
            a === void 0 && (a = i), Aa(e, l, a);
          }
        },
        Nf
      );
  }
  function Iw(e, t) {
    var o = -1,
      r = dn(e) ? Array(e.length) : [];
    return (
      $w(e, function (n, i, l) {
        r[++o] = t(n, i, l);
      }),
      r
    );
  }
  function _w(e, t) {
    var o = qt(e) ? Bf : Iw;
    return o(e, bw(t));
  }
  var Mw = Fx(function (e, t, o) {
    lh(e, t, o);
  });
  const Sn = Mw,
    Xo = {
      fontFamily:
        'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      fontFamilyMono:
        "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
      fontWeight: "400",
      fontWeightStrong: "500",
      cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
      cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
      cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
      borderRadius: "3px",
      borderRadiusSmall: "2px",
      fontSize: "14px",
      fontSizeMini: "12px",
      fontSizeTiny: "12px",
      fontSizeSmall: "14px",
      fontSizeMedium: "14px",
      fontSizeLarge: "15px",
      fontSizeHuge: "16px",
      lineHeight: "1.6",
      heightMini: "16px",
      heightTiny: "22px",
      heightSmall: "28px",
      heightMedium: "34px",
      heightLarge: "40px",
      heightHuge: "46px",
    },
    { fontSize: kw, fontFamily: Ew, lineHeight: Rw } = Xo,
    ah = D(
      "body",
      `
 margin: 0;
 font-size: ${kw};
 font-family: ${Ew};
 line-height: ${Rw};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,
      [
        D(
          "input",
          `
 font-family: inherit;
 font-size: inherit;
 `
        ),
      ]
    ),
    Io = "n-config-provider",
    Zn = "naive-ui-style";
  function Ae(e, t, o, r, n, i) {
    const l = Pr(),
      a = Oe(Io, null);
    if (o) {
      const c = () => {
        const d = i == null ? void 0 : i.value;
        o.mount({
          id: d === void 0 ? t : d + t,
          head: !0,
          props: { bPrefix: d ? `.${d}-` : void 0 },
          anchorMetaName: Zn,
          ssr: l,
        }),
          (a != null && a.preflightStyleDisabled) ||
            ah.mount({ id: "n-global", head: !0, anchorMetaName: Zn, ssr: l });
      };
      l ? c() : nn(c);
    }
    return B(() => {
      var c;
      const {
          theme: { common: d, self: u, peers: h = {} } = {},
          themeOverrides: p = {},
          builtinThemeOverrides: f = {},
        } = n,
        { common: v, peers: b } = p,
        {
          common: g = void 0,
          [e]: { common: T = void 0, self: O = void 0, peers: P = {} } = {},
        } = (a == null ? void 0 : a.mergedThemeRef.value) || {},
        { common: R = void 0, [e]: V = {} } =
          (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {},
        { common: x, peers: S = {} } = V,
        M = Sn({}, d || T || g || r.common, R, x, v),
        C = Sn(
          (c = u || O || r.self) === null || c === void 0 ? void 0 : c(M),
          f,
          V,
          p
        );
      return {
        common: M,
        self: C,
        peers: Sn({}, r.peers, P, h),
        peerOverrides: Sn({}, f.peers, S, b),
      };
    });
  }
  Ae.props = {
    theme: Object,
    themeOverrides: Object,
    builtinThemeOverrides: Object,
  };
  const sh = "n";
  function yt(e = {}, t = { defaultBordered: !0 }) {
    const o = Oe(Io, null);
    return {
      inlineThemeDisabled: o == null ? void 0 : o.inlineThemeDisabled,
      mergedRtlRef: o == null ? void 0 : o.mergedRtlRef,
      mergedComponentPropsRef: o == null ? void 0 : o.mergedComponentPropsRef,
      mergedBreakpointsRef: o == null ? void 0 : o.mergedBreakpointsRef,
      mergedBorderedRef: B(() => {
        var r, n;
        const { bordered: i } = e;
        return i !== void 0
          ? i
          : (n =
              (r = o == null ? void 0 : o.mergedBorderedRef.value) !== null &&
              r !== void 0
                ? r
                : t.defaultBordered) !== null && n !== void 0
          ? n
          : !0;
      }),
      mergedClsPrefixRef: B(
        () => (o == null ? void 0 : o.mergedClsPrefixRef.value) || sh
      ),
      namespaceRef: B(() => (o == null ? void 0 : o.mergedNamespaceRef.value)),
    };
  }
  const Ow = {
      name: "en-US",
      global: {
        undo: "Undo",
        redo: "Redo",
        confirm: "Confirm",
        clear: "Clear",
      },
      Popconfirm: { positiveText: "Confirm", negativeText: "Cancel" },
      Cascader: {
        placeholder: "Please Select",
        loading: "Loading",
        loadingRequiredMessage: (e) =>
          `Please load all ${e}'s descendants before checking it.`,
      },
      Time: { dateFormat: "yyyy-MM-dd", dateTimeFormat: "yyyy-MM-dd HH:mm:ss" },
      DatePicker: {
        yearFormat: "yyyy",
        monthFormat: "MMM",
        dayFormat: "eeeeee",
        yearTypeFormat: "yyyy",
        monthTypeFormat: "yyyy-MM",
        dateFormat: "yyyy-MM-dd",
        dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
        quarterFormat: "yyyy-qqq",
        clear: "Clear",
        now: "Now",
        confirm: "Confirm",
        selectTime: "Select Time",
        selectDate: "Select Date",
        datePlaceholder: "Select Date",
        datetimePlaceholder: "Select Date and Time",
        monthPlaceholder: "Select Month",
        yearPlaceholder: "Select Year",
        quarterPlaceholder: "Select Quarter",
        startDatePlaceholder: "Start Date",
        endDatePlaceholder: "End Date",
        startDatetimePlaceholder: "Start Date and Time",
        endDatetimePlaceholder: "End Date and Time",
        startMonthPlaceholder: "Start Month",
        endMonthPlaceholder: "End Month",
        monthBeforeYear: !0,
        firstDayOfWeek: 6,
        today: "Today",
      },
      DataTable: {
        checkTableAll: "Select all in the table",
        uncheckTableAll: "Unselect all in the table",
        confirm: "Confirm",
        clear: "Clear",
      },
      LegacyTransfer: { sourceTitle: "Source", targetTitle: "Target" },
      Transfer: {
        selectAll: "Select all",
        unselectAll: "Unselect all",
        clearAll: "Clear",
        total: (e) => `Total ${e} items`,
        selected: (e) => `${e} items selected`,
      },
      Empty: { description: "No Data" },
      Select: { placeholder: "Please Select" },
      TimePicker: {
        placeholder: "Select Time",
        positiveText: "OK",
        negativeText: "Cancel",
        now: "Now",
      },
      Pagination: { goto: "Goto", selectionSuffix: "page" },
      DynamicTags: { add: "Add" },
      Log: { loading: "Loading" },
      Input: { placeholder: "请在此输入" },
      InputNumber: { placeholder: "请在此输入" },
      DynamicInput: { create: "Create" },
      ThemeEditor: {
        title: "Theme Editor",
        clearAllVars: "Clear All Variables",
        clearSearch: "Clear Search",
        filterCompName: "Filter Component Name",
        filterVarName: "Filter Variable Name",
        import: "Import",
        export: "Export",
        restore: "Reset to Default",
      },
      Image: {
        tipPrevious: "Previous picture (←)",
        tipNext: "Next picture (→)",
        tipCounterclockwise: "Counterclockwise",
        tipClockwise: "Clockwise",
        tipZoomOut: "Zoom out",
        tipZoomIn: "Zoom in",
        tipClose: "Close (Esc)",
        tipOriginalSize: "Zoom to original size",
      },
    },
    Bw = Ow;
  function na(e) {
    return function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        o = t.width ? String(t.width) : e.defaultWidth,
        r = e.formats[o] || e.formats[e.defaultWidth];
      return r;
    };
  }
  function Cn(e) {
    return function (t, o) {
      var r = o != null && o.context ? String(o.context) : "standalone",
        n;
      if (r === "formatting" && e.formattingValues) {
        var i = e.defaultFormattingWidth || e.defaultWidth,
          l = o != null && o.width ? String(o.width) : i;
        n = e.formattingValues[l] || e.formattingValues[i];
      } else {
        var a = e.defaultWidth,
          s = o != null && o.width ? String(o.width) : e.defaultWidth;
        n = e.values[s] || e.values[a];
      }
      var c = e.argumentCallback ? e.argumentCallback(t) : t;
      return n[c];
    };
  }
  function yn(e) {
    return function (t) {
      var o =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = o.width,
        n = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
        i = t.match(n);
      if (!i) return null;
      var l = i[0],
        a = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
        s = Array.isArray(a)
          ? Hw(a, function (u) {
              return u.test(l);
            })
          : Aw(a, function (u) {
              return u.test(l);
            }),
        c;
      (c = e.valueCallback ? e.valueCallback(s) : s),
        (c = o.valueCallback ? o.valueCallback(c) : c);
      var d = t.slice(l.length);
      return { value: c, rest: d };
    };
  }
  function Aw(e, t) {
    for (var o in e) if (e.hasOwnProperty(o) && t(e[o])) return o;
  }
  function Hw(e, t) {
    for (var o = 0; o < e.length; o++) if (t(e[o])) return o;
  }
  function Fw(e) {
    return function (t) {
      var o =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = t.match(e.matchPattern);
      if (!r) return null;
      var n = r[0],
        i = t.match(e.parsePattern);
      if (!i) return null;
      var l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
      l = o.valueCallback ? o.valueCallback(l) : l;
      var a = t.slice(n.length);
      return { value: l, rest: a };
    };
  }
  var Dw = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
    },
    Lw = function (t, o, r) {
      var n,
        i = Dw[t];
      return (
        typeof i == "string"
          ? (n = i)
          : o === 1
          ? (n = i.one)
          : (n = i.other.replace("{{count}}", o.toString())),
        r != null && r.addSuffix
          ? r.comparison && r.comparison > 0
            ? "in " + n
            : n + " ago"
          : n
      );
    };
  const Ww = Lw;
  var Nw = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy",
    },
    jw = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a",
    },
    Vw = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
    },
    Kw = {
      date: na({ formats: Nw, defaultWidth: "full" }),
      time: na({ formats: jw, defaultWidth: "full" }),
      dateTime: na({ formats: Vw, defaultWidth: "full" }),
    };
  const Uw = Kw;
  var Gw = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    },
    qw = function (t, o, r, n) {
      return Gw[t];
    };
  const Yw = qw;
  var Xw = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"],
    },
    Zw = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
    },
    Jw = {
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
        "Dec",
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
        "December",
      ],
    },
    Qw = {
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
        "Saturday",
      ],
    },
    eS = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night",
      },
    },
    tS = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night",
      },
    },
    oS = function (t, o) {
      var r = Number(t),
        n = r % 100;
      if (n > 20 || n < 10)
        switch (n % 10) {
          case 1:
            return r + "st";
          case 2:
            return r + "nd";
          case 3:
            return r + "rd";
        }
      return r + "th";
    },
    rS = {
      ordinalNumber: oS,
      era: Cn({ values: Xw, defaultWidth: "wide" }),
      quarter: Cn({
        values: Zw,
        defaultWidth: "wide",
        argumentCallback: function (t) {
          return t - 1;
        },
      }),
      month: Cn({ values: Jw, defaultWidth: "wide" }),
      day: Cn({ values: Qw, defaultWidth: "wide" }),
      dayPeriod: Cn({
        values: eS,
        defaultWidth: "wide",
        formattingValues: tS,
        defaultFormattingWidth: "wide",
      }),
    };
  const nS = rS;
  var iS = /^(\d+)(th|st|nd|rd)?/i,
    lS = /\d+/i,
    aS = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i,
    },
    sS = { any: [/^b/i, /^(a|c)/i] },
    cS = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i,
    },
    dS = { any: [/1/i, /2/i, /3/i, /4/i] },
    uS = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
    },
    fS = {
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
        /^d/i,
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
        /^d/i,
      ],
    },
    hS = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
    },
    pS = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
    },
    vS = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
    },
    gS = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i,
      },
    },
    mS = {
      ordinalNumber: Fw({
        matchPattern: iS,
        parsePattern: lS,
        valueCallback: function (t) {
          return parseInt(t, 10);
        },
      }),
      era: yn({
        matchPatterns: aS,
        defaultMatchWidth: "wide",
        parsePatterns: sS,
        defaultParseWidth: "any",
      }),
      quarter: yn({
        matchPatterns: cS,
        defaultMatchWidth: "wide",
        parsePatterns: dS,
        defaultParseWidth: "any",
        valueCallback: function (t) {
          return t + 1;
        },
      }),
      month: yn({
        matchPatterns: uS,
        defaultMatchWidth: "wide",
        parsePatterns: fS,
        defaultParseWidth: "any",
      }),
      day: yn({
        matchPatterns: hS,
        defaultMatchWidth: "wide",
        parsePatterns: pS,
        defaultParseWidth: "any",
      }),
      dayPeriod: yn({
        matchPatterns: vS,
        defaultMatchWidth: "any",
        parsePatterns: gS,
        defaultParseWidth: "any",
      }),
    };
  const bS = mS;
  var xS = {
    code: "en-US",
    formatDistance: Ww,
    formatLong: Uw,
    formatRelative: Yw,
    localize: nS,
    match: bS,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
  const CS = xS,
    yS = { name: "en-US", locale: CS },
    wS = yS;
  function Ns(e) {
    const { mergedLocaleRef: t, mergedDateLocaleRef: o } = Oe(Io, null) || {},
      r = B(() => {
        var i, l;
        return (l =
          (i = t == null ? void 0 : t.value) === null || i === void 0
            ? void 0
            : i[e]) !== null && l !== void 0
          ? l
          : Bw[e];
      });
    return {
      dateLocaleRef: B(() => {
        var i;
        return (i = o == null ? void 0 : o.value) !== null && i !== void 0
          ? i
          : wS;
      }),
      localeRef: r,
    };
  }
  function _r(e, t, o) {
    if (!t) return;
    const r = Pr(),
      n = Oe(Io, null),
      i = () => {
        const l = o == null ? void 0 : o.value;
        t.mount({
          id: l === void 0 ? e : l + e,
          head: !0,
          anchorMetaName: Zn,
          props: { bPrefix: l ? `.${l}-` : void 0 },
          ssr: r,
        }),
          (n != null && n.preflightStyleDisabled) ||
            ah.mount({ id: "n-global", head: !0, anchorMetaName: Zn, ssr: r });
      };
    r ? i() : nn(i);
  }
  function wt(e, t, o, r) {
    var n;
    o || Km("useThemeClass", "cssVarsRef is not passed");
    const i =
        (n = Oe(Io, null)) === null || n === void 0
          ? void 0
          : n.mergedThemeHashRef,
      l = N(""),
      a = Pr();
    let s;
    const c = `__${e}`,
      d = () => {
        let u = c;
        const h = t ? t.value : void 0,
          p = i == null ? void 0 : i.value;
        p && (u += "-" + p), h && (u += "-" + h);
        const { themeOverrides: f, builtinThemeOverrides: v } = r;
        f && (u += "-" + Un(JSON.stringify(f))),
          v && (u += "-" + Un(JSON.stringify(v))),
          (l.value = u),
          (s = () => {
            const b = o.value;
            let g = "";
            for (const T in b) g += `${T}: ${b[T]};`;
            D(`.${u}`, g).mount({ id: u, ssr: a }), (s = void 0);
          });
      };
    return (
      po(() => {
        d();
      }),
      {
        themeClass: l,
        onRender: () => {
          s == null || s();
        },
      }
    );
  }
  function un(e, t, o) {
    if (!t) return;
    const r = Pr(),
      n = B(() => {
        const { value: l } = t;
        if (!l) return;
        const a = l[e];
        if (a) return a;
      }),
      i = () => {
        po(() => {
          const { value: l } = o,
            a = `${l}${e}Rtl`;
          if (ub(a, r)) return;
          const { value: s } = n;
          s &&
            s.style.mount({
              id: a,
              head: !0,
              anchorMetaName: Zn,
              props: { bPrefix: l ? `.${l}-` : void 0 },
              ssr: r,
            });
        });
      };
    return r ? i() : nn(i), n;
  }
  function ch(e, t) {
    return ue({
      name: Qy(e),
      setup() {
        var o;
        const r =
          (o = Oe(Io, null)) === null || o === void 0
            ? void 0
            : o.mergedIconsRef;
        return () => {
          var n;
          const i =
            (n = r == null ? void 0 : r.value) === null || n === void 0
              ? void 0
              : n[e];
          return i ? i() : t;
        };
      },
    });
  }
  const SS = ue({
      name: "Checkmark",
      render() {
        return m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
          m(
            "g",
            { fill: "none" },
            m("path", {
              d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
              fill: "currentColor",
            })
          )
        );
      },
    }),
    $S = ue({
      name: "ChevronRight",
      render() {
        return m(
          "svg",
          {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          m("path", {
            d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
            fill: "currentColor",
          })
        );
      },
    }),
    PS = ch(
      "close",
      m(
        "svg",
        {
          viewBox: "0 0 12 12",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": !0,
        },
        m(
          "g",
          {
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
          m(
            "g",
            { fill: "currentColor", "fill-rule": "nonzero" },
            m("path", {
              d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z",
            })
          )
        )
      )
    ),
    TS = ue({
      name: "Eye",
      render() {
        return m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
          m("path", {
            d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
            fill: "none",
            stroke: "currentColor",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "32",
          }),
          m("circle", {
            cx: "256",
            cy: "256",
            r: "80",
            fill: "none",
            stroke: "currentColor",
            "stroke-miterlimit": "10",
            "stroke-width": "32",
          })
        );
      },
    }),
    zS = ue({
      name: "EyeOff",
      render() {
        return m(
          "svg",
          { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
          m("path", {
            d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
            fill: "currentColor",
          }),
          m("path", {
            d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
            fill: "currentColor",
          }),
          m("path", {
            d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
            fill: "currentColor",
          }),
          m("path", {
            d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
            fill: "currentColor",
          }),
          m("path", {
            d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
            fill: "currentColor",
          })
        );
      },
    }),
    IS = ue({
      name: "Empty",
      render() {
        return m(
          "svg",
          {
            viewBox: "0 0 28 28",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          m("path", {
            d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
            fill: "currentColor",
          }),
          m("path", {
            d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
            fill: "currentColor",
          })
        );
      },
    }),
    _S = ue({
      name: "ChevronDown",
      render() {
        return m(
          "svg",
          {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          m("path", {
            d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
            fill: "currentColor",
          })
        );
      },
    }),
    MS = ch(
      "clear",
      m(
        "svg",
        {
          viewBox: "0 0 16 16",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
        },
        m(
          "g",
          {
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
          m(
            "g",
            { fill: "currentColor", "fill-rule": "nonzero" },
            m("path", {
              d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z",
            })
          )
        )
      )
    ),
    kS = ue({
      name: "ChevronDownFilled",
      render() {
        return m(
          "svg",
          {
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          m("path", {
            d: "M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",
            fill: "currentColor",
          })
        );
      },
    }),
    js = ue({
      name: "BaseIconSwitchTransition",
      setup(e, { slots: t }) {
        const o = xl();
        return () =>
          m(vo, { name: "icon-switch-transition", appear: o.value }, t);
      },
    }),
    dh = ue({
      name: "FadeInExpandTransition",
      props: {
        appear: Boolean,
        group: Boolean,
        mode: String,
        onLeave: Function,
        onAfterLeave: Function,
        onAfterEnter: Function,
        width: Boolean,
        reverse: Boolean,
      },
      setup(e, { slots: t }) {
        function o(a) {
          e.width
            ? (a.style.maxWidth = `${a.offsetWidth}px`)
            : (a.style.maxHeight = `${a.offsetHeight}px`),
            a.offsetWidth;
        }
        function r(a) {
          e.width ? (a.style.maxWidth = "0") : (a.style.maxHeight = "0"),
            a.offsetWidth;
          const { onLeave: s } = e;
          s && s();
        }
        function n(a) {
          e.width ? (a.style.maxWidth = "") : (a.style.maxHeight = "");
          const { onAfterLeave: s } = e;
          s && s();
        }
        function i(a) {
          if (((a.style.transition = "none"), e.width)) {
            const s = a.offsetWidth;
            (a.style.maxWidth = "0"),
              a.offsetWidth,
              (a.style.transition = ""),
              (a.style.maxWidth = `${s}px`);
          } else if (e.reverse)
            (a.style.maxHeight = `${a.offsetHeight}px`),
              a.offsetHeight,
              (a.style.transition = ""),
              (a.style.maxHeight = "0");
          else {
            const s = a.offsetHeight;
            (a.style.maxHeight = "0"),
              a.offsetWidth,
              (a.style.transition = ""),
              (a.style.maxHeight = `${s}px`);
          }
          a.offsetWidth;
        }
        function l(a) {
          var s;
          e.width
            ? (a.style.maxWidth = "")
            : e.reverse || (a.style.maxHeight = ""),
            (s = e.onAfterEnter) === null || s === void 0 || s.call(e);
        }
        return () => {
          const a = e.group ? $m : vo;
          return m(
            a,
            {
              name: e.width
                ? "fade-in-width-expand-transition"
                : "fade-in-height-expand-transition",
              mode: e.mode,
              appear: e.appear,
              onEnter: i,
              onAfterEnter: l,
              onBeforeLeave: o,
              onLeave: r,
              onAfterLeave: n,
            },
            t
          );
        };
      },
    }),
    ES = U(
      "base-icon",
      `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
      [
        D(
          "svg",
          `
 height: 1em;
 width: 1em;
 `
        ),
      ]
    ),
    qo = ue({
      name: "BaseIcon",
      props: {
        role: String,
        ariaLabel: String,
        ariaDisabled: { type: Boolean, default: void 0 },
        ariaHidden: { type: Boolean, default: void 0 },
        clsPrefix: { type: String, required: !0 },
        onClick: Function,
        onMousedown: Function,
        onMouseup: Function,
      },
      setup(e) {
        _r("-base-icon", ES, ke(e, "clsPrefix"));
      },
      render() {
        return m(
          "i",
          {
            class: `${this.clsPrefix}-base-icon`,
            onClick: this.onClick,
            onMousedown: this.onMousedown,
            onMouseup: this.onMouseup,
            role: this.role,
            "aria-label": this.ariaLabel,
            "aria-hidden": this.ariaHidden,
            "aria-disabled": this.ariaDisabled,
          },
          this.$slots
        );
      },
    }),
    RS = U(
      "base-close",
      `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,
      [
        re(
          "absolute",
          `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `
        ),
        D(
          "&::before",
          `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `
        ),
        Je("disabled", [
          D(
            "&:hover",
            `
 color: var(--n-close-icon-color-hover);
 `
          ),
          D(
            "&:hover::before",
            `
 background-color: var(--n-close-color-hover);
 `
          ),
          D(
            "&:focus::before",
            `
 background-color: var(--n-close-color-hover);
 `
          ),
          D(
            "&:active",
            `
 color: var(--n-close-icon-color-pressed);
 `
          ),
          D(
            "&:active::before",
            `
 background-color: var(--n-close-color-pressed);
 `
          ),
        ]),
        re(
          "disabled",
          `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `
        ),
        re("round", [
          D(
            "&::before",
            `
 border-radius: 50%;
 `
          ),
        ]),
      ]
    ),
    OS = ue({
      name: "BaseClose",
      props: {
        isButtonTag: { type: Boolean, default: !0 },
        clsPrefix: { type: String, required: !0 },
        disabled: { type: Boolean, default: void 0 },
        focusable: { type: Boolean, default: !0 },
        round: Boolean,
        onClick: Function,
        absolute: Boolean,
      },
      setup(e) {
        return (
          _r("-base-close", RS, ke(e, "clsPrefix")),
          () => {
            const {
              clsPrefix: t,
              disabled: o,
              absolute: r,
              round: n,
              isButtonTag: i,
            } = e;
            return m(
              i ? "button" : "div",
              {
                type: i ? "button" : void 0,
                tabindex: o || !e.focusable ? -1 : 0,
                "aria-disabled": o,
                "aria-label": "close",
                role: i ? void 0 : "button",
                disabled: o,
                class: [
                  `${t}-base-close`,
                  r && `${t}-base-close--absolute`,
                  o && `${t}-base-close--disabled`,
                  n && `${t}-base-close--round`,
                ],
                onMousedown: (a) => {
                  e.focusable || a.preventDefault();
                },
                onClick: e.onClick,
              },
              m(qo, { clsPrefix: t }, { default: () => m(PS, null) })
            );
          }
        );
      },
    }),
    BS = ue({
      props: { onFocus: Function, onBlur: Function },
      setup(e) {
        return () =>
          m("div", {
            style: "width: 0; height: 0",
            tabindex: 0,
            onFocus: e.onFocus,
            onBlur: e.onBlur,
          });
      },
    }),
    { cubicBezierEaseInOut: AS } = Xo;
  function ol({
    originalTransform: e = "",
    left: t = 0,
    top: o = 0,
    transition: r = `all .3s ${AS} !important`,
  } = {}) {
    return [
      D(
        "&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",
        { transform: e + " scale(0.75)", left: t, top: o, opacity: 0 }
      ),
      D(
        "&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",
        { transform: `scale(1) ${e}`, left: t, top: o, opacity: 1 }
      ),
      D(
        "&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",
        {
          transformOrigin: "center",
          position: "absolute",
          left: t,
          top: o,
          transition: r,
        }
      ),
    ];
  }
  const HS = D([
      D(
        "@keyframes loading-container-rotate",
        `
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `
      ),
      D(
        "@keyframes loading-layer-rotate",
        `
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `
      ),
      D(
        "@keyframes loading-left-spin",
        `
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `
      ),
      D(
        "@keyframes loading-right-spin",
        `
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `
      ),
      U(
        "base-loading",
        `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,
        [
          A(
            "transition-wrapper",
            `
 position: absolute;
 width: 100%;
 height: 100%;
 `,
            [ol()]
          ),
          A(
            "container",
            `
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,
            [
              A(
                "svg",
                `
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `
              ),
              A(
                "container-layer",
                `
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,
                [
                  A(
                    "container-layer-left",
                    `
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,
                    [
                      A(
                        "svg",
                        `
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `
                      ),
                    ]
                  ),
                  A(
                    "container-layer-patch",
                    `
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,
                    [
                      A(
                        "svg",
                        `
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `
                      ),
                    ]
                  ),
                  A(
                    "container-layer-right",
                    `
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,
                    [
                      A(
                        "svg",
                        `
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `
                      ),
                    ]
                  ),
                ]
              ),
            ]
          ),
          A(
            "placeholder",
            `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
            [
              ol({
                left: "50%",
                top: "50%",
                originalTransform: "translateX(-50%) translateY(-50%)",
              }),
            ]
          ),
        ]
      ),
    ]),
    FS = {
      strokeWidth: { type: Number, default: 28 },
      stroke: { type: String, default: void 0 },
    },
    Vs = ue({
      name: "BaseLoading",
      props: Object.assign(
        {
          clsPrefix: { type: String, required: !0 },
          show: { type: Boolean, default: !0 },
          scale: { type: Number, default: 1 },
          radius: { type: Number, default: 100 },
        },
        FS
      ),
      setup(e) {
        _r("-base-loading", HS, ke(e, "clsPrefix"));
      },
      render() {
        const {
            clsPrefix: e,
            radius: t,
            strokeWidth: o,
            stroke: r,
            scale: n,
          } = this,
          i = t / n;
        return m(
          "div",
          { class: `${e}-base-loading`, role: "img", "aria-label": "loading" },
          m(js, null, {
            default: () =>
              this.show
                ? m(
                    "div",
                    {
                      key: "icon",
                      class: `${e}-base-loading__transition-wrapper`,
                    },
                    m(
                      "div",
                      { class: `${e}-base-loading__container` },
                      m(
                        "div",
                        { class: `${e}-base-loading__container-layer` },
                        m(
                          "div",
                          { class: `${e}-base-loading__container-layer-left` },
                          m(
                            "svg",
                            {
                              class: `${e}-base-loading__svg`,
                              viewBox: `0 0 ${2 * i} ${2 * i}`,
                              xmlns: "http://www.w3.org/2000/svg",
                              style: { color: r },
                            },
                            m("circle", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": o,
                              "stroke-linecap": "round",
                              cx: i,
                              cy: i,
                              r: t - o / 2,
                              "stroke-dasharray": 4.91 * t,
                              "stroke-dashoffset": 2.46 * t,
                            })
                          )
                        ),
                        m(
                          "div",
                          { class: `${e}-base-loading__container-layer-patch` },
                          m(
                            "svg",
                            {
                              class: `${e}-base-loading__svg`,
                              viewBox: `0 0 ${2 * i} ${2 * i}`,
                              xmlns: "http://www.w3.org/2000/svg",
                              style: { color: r },
                            },
                            m("circle", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": o,
                              "stroke-linecap": "round",
                              cx: i,
                              cy: i,
                              r: t - o / 2,
                              "stroke-dasharray": 4.91 * t,
                              "stroke-dashoffset": 2.46 * t,
                            })
                          )
                        ),
                        m(
                          "div",
                          { class: `${e}-base-loading__container-layer-right` },
                          m(
                            "svg",
                            {
                              class: `${e}-base-loading__svg`,
                              viewBox: `0 0 ${2 * i} ${2 * i}`,
                              xmlns: "http://www.w3.org/2000/svg",
                              style: { color: r },
                            },
                            m("circle", {
                              fill: "none",
                              stroke: "currentColor",
                              "stroke-width": o,
                              "stroke-linecap": "round",
                              cx: i,
                              cy: i,
                              r: t - o / 2,
                              "stroke-dasharray": 4.91 * t,
                              "stroke-dashoffset": 2.46 * t,
                            })
                          )
                        )
                      )
                    )
                  )
                : m(
                    "div",
                    {
                      key: "placeholder",
                      class: `${e}-base-loading__placeholder`,
                    },
                    this.$slots
                  ),
          })
        );
      },
    });
  function Ld(e) {
    return Array.isArray(e) ? e : [e];
  }
  const Fa = { STOP: "STOP" };
  function uh(e, t) {
    const o = t(e);
    e.children !== void 0 &&
      o !== Fa.STOP &&
      e.children.forEach((r) => uh(r, t));
  }
  function DS(e, t = {}) {
    const { preserveGroup: o = !1 } = t,
      r = [],
      n = o
        ? (l) => {
            l.isLeaf || (r.push(l.key), i(l.children));
          }
        : (l) => {
            l.isLeaf || (l.isGroup || r.push(l.key), i(l.children));
          };
    function i(l) {
      l.forEach(n);
    }
    return i(e), r;
  }
  function LS(e, t) {
    const { isLeaf: o } = e;
    return o !== void 0 ? o : !t(e);
  }
  function WS(e) {
    return e.children;
  }
  function NS(e) {
    return e.key;
  }
  function jS() {
    return !1;
  }
  function VS(e, t) {
    const { isLeaf: o } = e;
    return !(o === !1 && !Array.isArray(t(e)));
  }
  function KS(e) {
    return e.disabled === !0;
  }
  function US(e, t) {
    return e.isLeaf === !1 && !Array.isArray(t(e));
  }
  function ia(e) {
    var t;
    return e == null
      ? []
      : Array.isArray(e)
      ? e
      : (t = e.checkedKeys) !== null && t !== void 0
      ? t
      : [];
  }
  function la(e) {
    var t;
    return e == null || Array.isArray(e)
      ? []
      : (t = e.indeterminateKeys) !== null && t !== void 0
      ? t
      : [];
  }
  function GS(e, t) {
    const o = new Set(e);
    return (
      t.forEach((r) => {
        o.has(r) || o.add(r);
      }),
      Array.from(o)
    );
  }
  function qS(e, t) {
    const o = new Set(e);
    return (
      t.forEach((r) => {
        o.has(r) && o.delete(r);
      }),
      Array.from(o)
    );
  }
  function YS(e) {
    return (e == null ? void 0 : e.type) === "group";
  }
  function XS(e) {
    const t = new Map();
    return (
      e.forEach((o, r) => {
        t.set(o.key, r);
      }),
      (o) => {
        var r;
        return (r = t.get(o)) !== null && r !== void 0 ? r : null;
      }
    );
  }
  class ZS extends Error {
    constructor() {
      super(),
        (this.message =
          "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
    }
  }
  function JS(e, t, o, r) {
    return rl(t.concat(e), o, r, !1);
  }
  function QS(e, t) {
    const o = new Set();
    return (
      e.forEach((r) => {
        const n = t.treeNodeMap.get(r);
        if (n !== void 0) {
          let i = n.parent;
          for (; i !== null && !(i.disabled || o.has(i.key)); )
            o.add(i.key), (i = i.parent);
        }
      }),
      o
    );
  }
  function e2(e, t, o, r) {
    const n = rl(t, o, r, !1),
      i = rl(e, o, r, !0),
      l = QS(e, o),
      a = [];
    return (
      n.forEach((s) => {
        (i.has(s) || l.has(s)) && a.push(s);
      }),
      a.forEach((s) => n.delete(s)),
      n
    );
  }
  function aa(e, t) {
    const {
      checkedKeys: o,
      keysToCheck: r,
      keysToUncheck: n,
      indeterminateKeys: i,
      cascade: l,
      leafOnly: a,
      checkStrategy: s,
      allowNotLoaded: c,
    } = e;
    if (!l)
      return r !== void 0
        ? { checkedKeys: GS(o, r), indeterminateKeys: Array.from(i) }
        : n !== void 0
        ? { checkedKeys: qS(o, n), indeterminateKeys: Array.from(i) }
        : { checkedKeys: Array.from(o), indeterminateKeys: Array.from(i) };
    const { levelTreeNodeMap: d } = t;
    let u;
    n !== void 0
      ? (u = e2(n, o, t, c))
      : r !== void 0
      ? (u = JS(r, o, t, c))
      : (u = rl(o, t, c, !1));
    const h = s === "parent",
      p = s === "child" || a,
      f = u,
      v = new Set(),
      b = Math.max.apply(null, Array.from(d.keys()));
    for (let g = b; g >= 0; g -= 1) {
      const T = g === 0,
        O = d.get(g);
      for (const P of O) {
        if (P.isLeaf) continue;
        const { key: R, shallowLoaded: V } = P;
        if (
          (p &&
            V &&
            P.children.forEach((C) => {
              !C.disabled &&
                !C.isLeaf &&
                C.shallowLoaded &&
                f.has(C.key) &&
                f.delete(C.key);
            }),
          P.disabled || !V)
        )
          continue;
        let x = !0,
          S = !1,
          M = !0;
        for (const C of P.children) {
          const _ = C.key;
          if (!C.disabled) {
            if ((M && (M = !1), f.has(_))) S = !0;
            else if (v.has(_)) {
              (S = !0), (x = !1);
              break;
            } else if (((x = !1), S)) break;
          }
        }
        x && !M
          ? (h &&
              P.children.forEach((C) => {
                !C.disabled && f.has(C.key) && f.delete(C.key);
              }),
            f.add(R))
          : S && v.add(R),
          T && p && f.has(R) && f.delete(R);
      }
    }
    return { checkedKeys: Array.from(f), indeterminateKeys: Array.from(v) };
  }
  function rl(e, t, o, r) {
    const { treeNodeMap: n, getChildren: i } = t,
      l = new Set(),
      a = new Set(e);
    return (
      e.forEach((s) => {
        const c = n.get(s);
        c !== void 0 &&
          uh(c, (d) => {
            if (d.disabled) return Fa.STOP;
            const { key: u } = d;
            if (!l.has(u) && (l.add(u), a.add(u), US(d.rawNode, i))) {
              if (r) return Fa.STOP;
              if (!o) throw new ZS();
            }
          });
      }),
      a
    );
  }
  function t2(e, { includeGroup: t = !1, includeSelf: o = !0 }, r) {
    var n;
    const i = r.treeNodeMap;
    let l =
      e == null ? null : (n = i.get(e)) !== null && n !== void 0 ? n : null;
    const a = { keyPath: [], treeNodePath: [], treeNode: l };
    if (l != null && l.ignored) return (a.treeNode = null), a;
    for (; l; )
      !l.ignored && (t || !l.isGroup) && a.treeNodePath.push(l), (l = l.parent);
    return (
      a.treeNodePath.reverse(),
      o || a.treeNodePath.pop(),
      (a.keyPath = a.treeNodePath.map((s) => s.key)),
      a
    );
  }
  function o2(e) {
    if (e.length === 0) return null;
    const t = e[0];
    return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
  }
  function r2(e, t) {
    const o = e.siblings,
      r = o.length,
      { index: n } = e;
    return t ? o[(n + 1) % r] : n === o.length - 1 ? null : o[n + 1];
  }
  function Wd(e, t, { loop: o = !1, includeDisabled: r = !1 } = {}) {
    const n = t === "prev" ? n2 : r2,
      i = { reverse: t === "prev" };
    let l = !1,
      a = null;
    function s(c) {
      if (c !== null) {
        if (c === e) {
          if (!l) l = !0;
          else if (!e.disabled && !e.isGroup) {
            a = e;
            return;
          }
        } else if ((!c.disabled || r) && !c.ignored && !c.isGroup) {
          a = c;
          return;
        }
        if (c.isGroup) {
          const d = Ks(c, i);
          d !== null ? (a = d) : s(n(c, o));
        } else {
          const d = n(c, !1);
          if (d !== null) s(d);
          else {
            const u = i2(c);
            u != null && u.isGroup ? s(n(u, o)) : o && s(n(c, !0));
          }
        }
      }
    }
    return s(e), a;
  }
  function n2(e, t) {
    const o = e.siblings,
      r = o.length,
      { index: n } = e;
    return t ? o[(n - 1 + r) % r] : n === 0 ? null : o[n - 1];
  }
  function i2(e) {
    return e.parent;
  }
  function Ks(e, t = {}) {
    const { reverse: o = !1 } = t,
      { children: r } = e;
    if (r) {
      const { length: n } = r,
        i = o ? n - 1 : 0,
        l = o ? -1 : n,
        a = o ? -1 : 1;
      for (let s = i; s !== l; s += a) {
        const c = r[s];
        if (!c.disabled && !c.ignored)
          if (c.isGroup) {
            const d = Ks(c, t);
            if (d !== null) return d;
          } else return c;
      }
    }
    return null;
  }
  const l2 = {
    getChild() {
      return this.ignored ? null : Ks(this);
    },
    getParent() {
      const { parent: e } = this;
      return e != null && e.isGroup ? e.getParent() : e;
    },
    getNext(e = {}) {
      return Wd(this, "next", e);
    },
    getPrev(e = {}) {
      return Wd(this, "prev", e);
    },
  };
  function a2(e, t) {
    const o = t ? new Set(t) : void 0,
      r = [];
    function n(i) {
      i.forEach((l) => {
        r.push(l),
          !(l.isLeaf || !l.children || l.ignored) &&
            (l.isGroup || o === void 0 || o.has(l.key)) &&
            n(l.children);
      });
    }
    return n(e), r;
  }
  function s2(e, t) {
    const o = e.key;
    for (; t; ) {
      if (t.key === o) return !0;
      t = t.parent;
    }
    return !1;
  }
  function fh(e, t, o, r, n, i = null, l = 0) {
    const a = [];
    return (
      e.forEach((s, c) => {
        var d;
        const u = Object.create(r);
        if (
          ((u.rawNode = s),
          (u.siblings = a),
          (u.level = l),
          (u.index = c),
          (u.isFirstChild = c === 0),
          (u.isLastChild = c + 1 === e.length),
          (u.parent = i),
          !u.ignored)
        ) {
          const h = n(s);
          Array.isArray(h) && (u.children = fh(h, t, o, r, n, u, l + 1));
        }
        a.push(u),
          t.set(u.key, u),
          o.has(l) || o.set(l, []),
          (d = o.get(l)) === null || d === void 0 || d.push(u);
      }),
      a
    );
  }
  function Us(e, t = {}) {
    var o;
    const r = new Map(),
      n = new Map(),
      {
        getDisabled: i = KS,
        getIgnored: l = jS,
        getIsGroup: a = YS,
        getKey: s = NS,
      } = t,
      c = (o = t.getChildren) !== null && o !== void 0 ? o : WS,
      d = t.ignoreEmptyChildren
        ? (P) => {
            const R = c(P);
            return Array.isArray(R) ? (R.length ? R : null) : R;
          }
        : c,
      u = Object.assign(
        {
          get key() {
            return s(this.rawNode);
          },
          get disabled() {
            return i(this.rawNode);
          },
          get isGroup() {
            return a(this.rawNode);
          },
          get isLeaf() {
            return LS(this.rawNode, d);
          },
          get shallowLoaded() {
            return VS(this.rawNode, d);
          },
          get ignored() {
            return l(this.rawNode);
          },
          contains(P) {
            return s2(this, P);
          },
        },
        l2
      ),
      h = fh(e, r, n, u, d);
    function p(P) {
      if (P == null) return null;
      const R = r.get(P);
      return R && !R.isGroup && !R.ignored ? R : null;
    }
    function f(P) {
      if (P == null) return null;
      const R = r.get(P);
      return R && !R.ignored ? R : null;
    }
    function v(P, R) {
      const V = f(P);
      return V ? V.getPrev(R) : null;
    }
    function b(P, R) {
      const V = f(P);
      return V ? V.getNext(R) : null;
    }
    function g(P) {
      const R = f(P);
      return R ? R.getParent() : null;
    }
    function T(P) {
      const R = f(P);
      return R ? R.getChild() : null;
    }
    const O = {
      treeNodes: h,
      treeNodeMap: r,
      levelTreeNodeMap: n,
      maxLevel: Math.max(...n.keys()),
      getChildren: d,
      getFlattenedNodes(P) {
        return a2(h, P);
      },
      getNode: p,
      getPrev: v,
      getNext: b,
      getParent: g,
      getChild: T,
      getFirstAvailableNode() {
        return o2(h);
      },
      getPath(P, R = {}) {
        return t2(P, R, O);
      },
      getCheckedKeys(P, R = {}) {
        const {
          cascade: V = !0,
          leafOnly: x = !1,
          checkStrategy: S = "all",
          allowNotLoaded: M = !1,
        } = R;
        return aa(
          {
            checkedKeys: ia(P),
            indeterminateKeys: la(P),
            cascade: V,
            leafOnly: x,
            checkStrategy: S,
            allowNotLoaded: M,
          },
          O
        );
      },
      check(P, R, V = {}) {
        const {
          cascade: x = !0,
          leafOnly: S = !1,
          checkStrategy: M = "all",
          allowNotLoaded: C = !1,
        } = V;
        return aa(
          {
            checkedKeys: ia(R),
            indeterminateKeys: la(R),
            keysToCheck: P == null ? [] : Ld(P),
            cascade: x,
            leafOnly: S,
            checkStrategy: M,
            allowNotLoaded: C,
          },
          O
        );
      },
      uncheck(P, R, V = {}) {
        const {
          cascade: x = !0,
          leafOnly: S = !1,
          checkStrategy: M = "all",
          allowNotLoaded: C = !1,
        } = V;
        return aa(
          {
            checkedKeys: ia(R),
            indeterminateKeys: la(R),
            keysToUncheck: P == null ? [] : Ld(P),
            cascade: x,
            leafOnly: S,
            checkStrategy: M,
            allowNotLoaded: C,
          },
          O
        );
      },
      getNonLeafKeys(P = {}) {
        return DS(h, P);
      },
    };
    return O;
  }
  const pe = {
      neutralBase: "#000",
      neutralInvertBase: "#fff",
      neutralTextBase: "#fff",
      neutralPopover: "rgb(72, 72, 78)",
      neutralCard: "rgb(24, 24, 28)",
      neutralModal: "rgb(44, 44, 50)",
      neutralBody: "rgb(16, 16, 20)",
      alpha1: "0.9",
      alpha2: "0.82",
      alpha3: "0.52",
      alpha4: "0.38",
      alpha5: "0.28",
      alphaClose: "0.52",
      alphaDisabled: "0.38",
      alphaDisabledInput: "0.06",
      alphaPending: "0.09",
      alphaTablePending: "0.06",
      alphaTableStriped: "0.05",
      alphaPressed: "0.05",
      alphaAvatar: "0.18",
      alphaRail: "0.2",
      alphaProgressRail: "0.12",
      alphaBorder: "0.24",
      alphaDivider: "0.09",
      alphaInput: "0.1",
      alphaAction: "0.06",
      alphaTab: "0.04",
      alphaScrollbar: "0.2",
      alphaScrollbarHover: "0.3",
      alphaCode: "0.12",
      alphaTag: "0.2",
      primaryHover: "#7fe7c4",
      primaryDefault: "#63e2b7",
      primaryActive: "#5acea7",
      primarySuppl: "rgb(42, 148, 125)",
      infoHover: "#8acbec",
      infoDefault: "#70c0e8",
      infoActive: "#66afd3",
      infoSuppl: "rgb(56, 137, 197)",
      errorHover: "#e98b8b",
      errorDefault: "#e88080",
      errorActive: "#e57272",
      errorSuppl: "rgb(208, 58, 82)",
      warningHover: "#f5d599",
      warningDefault: "#f2c97d",
      warningActive: "#e6c260",
      warningSuppl: "rgb(240, 138, 0)",
      successHover: "#7fe7c4",
      successDefault: "#63e2b7",
      successActive: "#5acea7",
      successSuppl: "rgb(42, 148, 125)",
    },
    c2 = To(pe.neutralBase),
    hh = To(pe.neutralInvertBase),
    d2 = "rgba(" + hh.slice(0, 3).join(", ") + ", ";
  function Ne(e) {
    return d2 + String(e) + ")";
  }
  function u2(e) {
    const t = Array.from(hh);
    return (t[3] = Number(e)), be(c2, t);
  }
  const f2 = Object.assign(Object.assign({ name: "common" }, Xo), {
      baseColor: pe.neutralBase,
      primaryColor: pe.primaryDefault,
      primaryColorHover: pe.primaryHover,
      primaryColorPressed: pe.primaryActive,
      primaryColorSuppl: pe.primarySuppl,
      infoColor: pe.infoDefault,
      infoColorHover: pe.infoHover,
      infoColorPressed: pe.infoActive,
      infoColorSuppl: pe.infoSuppl,
      successColor: pe.successDefault,
      successColorHover: pe.successHover,
      successColorPressed: pe.successActive,
      successColorSuppl: pe.successSuppl,
      warningColor: pe.warningDefault,
      warningColorHover: pe.warningHover,
      warningColorPressed: pe.warningActive,
      warningColorSuppl: pe.warningSuppl,
      errorColor: pe.errorDefault,
      errorColorHover: pe.errorHover,
      errorColorPressed: pe.errorActive,
      errorColorSuppl: pe.errorSuppl,
      textColorBase: pe.neutralTextBase,
      textColor1: Ne(pe.alpha1),
      textColor2: Ne(pe.alpha2),
      textColor3: Ne(pe.alpha3),
      textColorDisabled: Ne(pe.alpha4),
      placeholderColor: Ne(pe.alpha4),
      placeholderColorDisabled: Ne(pe.alpha5),
      iconColor: Ne(pe.alpha4),
      iconColorDisabled: Ne(pe.alpha5),
      iconColorHover: Ne(Number(pe.alpha4) * 1.25),
      iconColorPressed: Ne(Number(pe.alpha4) * 0.8),
      opacity1: pe.alpha1,
      opacity2: pe.alpha2,
      opacity3: pe.alpha3,
      opacity4: pe.alpha4,
      opacity5: pe.alpha5,
      dividerColor: Ne(pe.alphaDivider),
      borderColor: Ne(pe.alphaBorder),
      closeIconColorHover: Ne(Number(pe.alphaClose)),
      closeIconColor: Ne(Number(pe.alphaClose)),
      closeIconColorPressed: Ne(Number(pe.alphaClose)),
      closeColorHover: "rgba(255, 255, 255, .12)",
      closeColorPressed: "rgba(255, 255, 255, .08)",
      clearColor: Ne(pe.alpha4),
      clearColorHover: ct(Ne(pe.alpha4), { alpha: 1.25 }),
      clearColorPressed: ct(Ne(pe.alpha4), { alpha: 0.8 }),
      scrollbarColor: Ne(pe.alphaScrollbar),
      scrollbarColorHover: Ne(pe.alphaScrollbarHover),
      scrollbarWidth: "5px",
      scrollbarHeight: "5px",
      scrollbarBorderRadius: "5px",
      progressRailColor: Ne(pe.alphaProgressRail),
      railColor: Ne(pe.alphaRail),
      popoverColor: pe.neutralPopover,
      tableColor: pe.neutralCard,
      cardColor: pe.neutralCard,
      modalColor: pe.neutralModal,
      bodyColor: pe.neutralBody,
      tagColor: u2(pe.alphaTag),
      avatarColor: Ne(pe.alphaAvatar),
      invertedColor: pe.neutralBase,
      inputColor: Ne(pe.alphaInput),
      codeColor: Ne(pe.alphaCode),
      tabColor: Ne(pe.alphaTab),
      actionColor: Ne(pe.alphaAction),
      tableHeaderColor: Ne(pe.alphaAction),
      hoverColor: Ne(pe.alphaPending),
      tableColorHover: Ne(pe.alphaTablePending),
      tableColorStriped: Ne(pe.alphaTableStriped),
      pressedColor: Ne(pe.alphaPressed),
      opacityDisabled: pe.alphaDisabled,
      inputColorDisabled: Ne(pe.alphaDisabledInput),
      buttonColor2: "rgba(255, 255, 255, .08)",
      buttonColor2Hover: "rgba(255, 255, 255, .12)",
      buttonColor2Pressed: "rgba(255, 255, 255, .08)",
      boxShadow1:
        "0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",
      boxShadow2:
        "0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",
      boxShadow3:
        "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
    }),
    ce = f2,
    we = {
      neutralBase: "#FFF",
      neutralInvertBase: "#000",
      neutralTextBase: "#000",
      neutralPopover: "#fff",
      neutralCard: "#fff",
      neutralModal: "#fff",
      neutralBody: "#fff",
      alpha1: "0.82",
      alpha2: "0.72",
      alpha3: "0.38",
      alpha4: "0.24",
      alpha5: "0.18",
      alphaClose: "0.6",
      alphaDisabled: "0.5",
      alphaDisabledInput: "0.02",
      alphaPending: "0.05",
      alphaTablePending: "0.02",
      alphaPressed: "0.07",
      alphaAvatar: "0.2",
      alphaRail: "0.14",
      alphaProgressRail: ".08",
      alphaBorder: "0.12",
      alphaDivider: "0.06",
      alphaInput: "0",
      alphaAction: "0.02",
      alphaTab: "0.04",
      alphaScrollbar: "0.25",
      alphaScrollbarHover: "0.4",
      alphaCode: "0.05",
      alphaTag: "0.02",
      primaryHover: "#36ad6a",
      primaryDefault: "#18a058",
      primaryActive: "#0c7a43",
      primarySuppl: "#36ad6a",
      infoHover: "#4098fc",
      infoDefault: "#2080f0",
      infoActive: "#1060c9",
      infoSuppl: "#4098fc",
      errorHover: "#de576d",
      errorDefault: "#d03050",
      errorActive: "#ab1f3f",
      errorSuppl: "#de576d",
      warningHover: "#fcb040",
      warningDefault: "#f0a020",
      warningActive: "#c97c10",
      warningSuppl: "#fcb040",
      successHover: "#36ad6a",
      successDefault: "#18a058",
      successActive: "#0c7a43",
      successSuppl: "#36ad6a",
    },
    h2 = To(we.neutralBase),
    ph = To(we.neutralInvertBase),
    p2 = "rgba(" + ph.slice(0, 3).join(", ") + ", ";
  function Nd(e) {
    return p2 + String(e) + ")";
  }
  function $t(e) {
    const t = Array.from(ph);
    return (t[3] = Number(e)), be(h2, t);
  }
  const v2 = Object.assign(Object.assign({ name: "common" }, Xo), {
      baseColor: we.neutralBase,
      primaryColor: we.primaryDefault,
      primaryColorHover: we.primaryHover,
      primaryColorPressed: we.primaryActive,
      primaryColorSuppl: we.primarySuppl,
      infoColor: we.infoDefault,
      infoColorHover: we.infoHover,
      infoColorPressed: we.infoActive,
      infoColorSuppl: we.infoSuppl,
      successColor: we.successDefault,
      successColorHover: we.successHover,
      successColorPressed: we.successActive,
      successColorSuppl: we.successSuppl,
      warningColor: we.warningDefault,
      warningColorHover: we.warningHover,
      warningColorPressed: we.warningActive,
      warningColorSuppl: we.warningSuppl,
      errorColor: we.errorDefault,
      errorColorHover: we.errorHover,
      errorColorPressed: we.errorActive,
      errorColorSuppl: we.errorSuppl,
      textColorBase: we.neutralTextBase,
      textColor1: "rgb(31, 34, 37)",
      textColor2: "rgb(51, 54, 57)",
      textColor3: "rgb(118, 124, 130)",
      textColorDisabled: $t(we.alpha4),
      placeholderColor: $t(we.alpha4),
      placeholderColorDisabled: $t(we.alpha5),
      iconColor: $t(we.alpha4),
      iconColorHover: ct($t(we.alpha4), { lightness: 0.75 }),
      iconColorPressed: ct($t(we.alpha4), { lightness: 0.9 }),
      iconColorDisabled: $t(we.alpha5),
      opacity1: we.alpha1,
      opacity2: we.alpha2,
      opacity3: we.alpha3,
      opacity4: we.alpha4,
      opacity5: we.alpha5,
      dividerColor: "rgb(239, 239, 245)",
      borderColor: "rgb(224, 224, 230)",
      closeIconColor: $t(Number(we.alphaClose)),
      closeIconColorHover: $t(Number(we.alphaClose)),
      closeIconColorPressed: $t(Number(we.alphaClose)),
      closeColorHover: "rgba(0, 0, 0, .09)",
      closeColorPressed: "rgba(0, 0, 0, .13)",
      clearColor: $t(we.alpha4),
      clearColorHover: ct($t(we.alpha4), { lightness: 0.75 }),
      clearColorPressed: ct($t(we.alpha4), { lightness: 0.9 }),
      scrollbarColor: Nd(we.alphaScrollbar),
      scrollbarColorHover: Nd(we.alphaScrollbarHover),
      scrollbarWidth: "5px",
      scrollbarHeight: "5px",
      scrollbarBorderRadius: "5px",
      progressRailColor: $t(we.alphaProgressRail),
      railColor: "rgb(219, 219, 223)",
      popoverColor: we.neutralPopover,
      tableColor: we.neutralCard,
      cardColor: we.neutralCard,
      modalColor: we.neutralModal,
      bodyColor: we.neutralBody,
      tagColor: "#eee",
      avatarColor: $t(we.alphaAvatar),
      invertedColor: "rgb(0, 20, 40)",
      inputColor: $t(we.alphaInput),
      codeColor: "rgb(244, 244, 248)",
      tabColor: "rgb(247, 247, 250)",
      actionColor: "rgb(250, 250, 252)",
      tableHeaderColor: "rgb(250, 250, 252)",
      hoverColor: "rgb(243, 243, 245)",
      tableColorHover: "rgba(0, 0, 100, 0.03)",
      tableColorStriped: "rgba(0, 0, 100, 0.02)",
      pressedColor: "rgb(237, 237, 239)",
      opacityDisabled: we.alphaDisabled,
      inputColorDisabled: "rgb(250, 250, 252)",
      buttonColor2: "rgba(46, 51, 56, .05)",
      buttonColor2Hover: "rgba(46, 51, 56, .09)",
      buttonColor2Pressed: "rgba(46, 51, 56, .13)",
      boxShadow1:
        "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
      boxShadow2:
        "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
      boxShadow3:
        "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)",
    }),
    Et = v2,
    g2 = {
      iconSizeSmall: "34px",
      iconSizeMedium: "40px",
      iconSizeLarge: "46px",
      iconSizeHuge: "52px",
    },
    vh = (e) => {
      const {
        textColorDisabled: t,
        iconColor: o,
        textColor2: r,
        fontSizeSmall: n,
        fontSizeMedium: i,
        fontSizeLarge: l,
        fontSizeHuge: a,
      } = e;
      return Object.assign(Object.assign({}, g2), {
        fontSizeSmall: n,
        fontSizeMedium: i,
        fontSizeLarge: l,
        fontSizeHuge: a,
        textColor: t,
        iconColor: o,
        extraTextColor: r,
      });
    },
    m2 = { name: "Empty", common: Et, self: vh },
    Gs = m2,
    b2 = { name: "Empty", common: ce, self: vh },
    Mr = b2,
    x2 = U(
      "empty",
      `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,
      [
        A(
          "icon",
          `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,
          [
            D("+", [
              A(
                "description",
                `
 margin-top: 8px;
 `
              ),
            ]),
          ]
        ),
        A(
          "description",
          `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `
        ),
        A(
          "extra",
          `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `
        ),
      ]
    ),
    C2 = Object.assign(Object.assign({}, Ae.props), {
      description: String,
      showDescription: { type: Boolean, default: !0 },
      showIcon: { type: Boolean, default: !0 },
      size: { type: String, default: "medium" },
      renderIcon: Function,
    }),
    y2 = ue({
      name: "Empty",
      props: C2,
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Empty", "-empty", x2, Gs, e, t),
          { localeRef: n } = Ns("Empty"),
          i = Oe(Io, null),
          l = B(() => {
            var d, u, h;
            return (d = e.description) !== null && d !== void 0
              ? d
              : (h =
                  (u = i == null ? void 0 : i.mergedComponentPropsRef.value) ===
                    null || u === void 0
                    ? void 0
                    : u.Empty) === null || h === void 0
              ? void 0
              : h.description;
          }),
          a = B(() => {
            var d, u;
            return (
              ((u =
                (d = i == null ? void 0 : i.mergedComponentPropsRef.value) ===
                  null || d === void 0
                  ? void 0
                  : d.Empty) === null || u === void 0
                ? void 0
                : u.renderIcon) || (() => m(IS, null))
            );
          }),
          s = B(() => {
            const { size: d } = e,
              {
                common: { cubicBezierEaseInOut: u },
                self: {
                  [de("iconSize", d)]: h,
                  [de("fontSize", d)]: p,
                  textColor: f,
                  iconColor: v,
                  extraTextColor: b,
                },
              } = r.value;
            return {
              "--n-icon-size": h,
              "--n-font-size": p,
              "--n-bezier": u,
              "--n-text-color": f,
              "--n-icon-color": v,
              "--n-extra-text-color": b,
            };
          }),
          c = o
            ? wt(
                "empty",
                B(() => {
                  let d = "";
                  const { size: u } = e;
                  return (d += u[0]), d;
                }),
                s,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          mergedRenderIcon: a,
          localizedDescription: B(() => l.value || n.value.description),
          cssVars: o ? void 0 : s,
          themeClass: c == null ? void 0 : c.themeClass,
          onRender: c == null ? void 0 : c.onRender,
        };
      },
      render() {
        const { $slots: e, mergedClsPrefix: t, onRender: o } = this;
        return (
          o == null || o(),
          m(
            "div",
            { class: [`${t}-empty`, this.themeClass], style: this.cssVars },
            this.showIcon
              ? m(
                  "div",
                  { class: `${t}-empty__icon` },
                  e.icon
                    ? e.icon()
                    : m(
                        qo,
                        { clsPrefix: t },
                        { default: this.mergedRenderIcon }
                      )
                )
              : null,
            this.showDescription
              ? m(
                  "div",
                  { class: `${t}-empty__description` },
                  e.default ? e.default() : this.localizedDescription
                )
              : null,
            e.extra ? m("div", { class: `${t}-empty__extra` }, e.extra()) : null
          )
        );
      },
    }),
    gh = (e) => {
      const { scrollbarColor: t, scrollbarColorHover: o } = e;
      return { color: t, colorHover: o };
    },
    w2 = { name: "Scrollbar", common: Et, self: gh },
    qs = w2,
    S2 = { name: "Scrollbar", common: ce, self: gh },
    Ft = S2,
    { cubicBezierEaseInOut: jd } = Xo;
  function $2({
    name: e = "fade-in",
    enterDuration: t = "0.2s",
    leaveDuration: o = "0.2s",
    enterCubicBezier: r = jd,
    leaveCubicBezier: n = jd,
  } = {}) {
    return [
      D(`&.${e}-transition-enter-active`, {
        transition: `all ${t} ${r}!important`,
      }),
      D(`&.${e}-transition-leave-active`, {
        transition: `all ${o} ${n}!important`,
      }),
      D(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
        opacity: 0,
      }),
      D(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
        opacity: 1,
      }),
    ];
  }
  const P2 = U(
      "scrollbar",
      `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,
      [
        D(">", [
          U(
            "scrollbar-container",
            `
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,
            [
              D(
                "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
                `
 width: 0;
 height: 0;
 display: none;
 `
              ),
              D(">", [
                U(
                  "scrollbar-content",
                  `
 box-sizing: border-box;
 min-width: 100%;
 `
                ),
              ]),
            ]
          ),
        ]),
        D(">, +", [
          U(
            "scrollbar-rail",
            `
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,
            [
              re(
                "horizontal",
                `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,
                [
                  D(">", [
                    A(
                      "scrollbar",
                      `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `
                    ),
                  ]),
                ]
              ),
              re(
                "vertical",
                `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,
                [
                  D(">", [
                    A(
                      "scrollbar",
                      `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `
                    ),
                  ]),
                ]
              ),
              re("disabled", [
                D(">", [A("scrollbar", { pointerEvents: "none" })]),
              ]),
              D(">", [
                A(
                  "scrollbar",
                  `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,
                  [
                    $2(),
                    D("&:hover", {
                      backgroundColor: "var(--n-scrollbar-color-hover)",
                    }),
                  ]
                ),
              ]),
            ]
          ),
        ]),
      ]
    ),
    T2 = Object.assign(Object.assign({}, Ae.props), {
      size: { type: Number, default: 5 },
      duration: { type: Number, default: 0 },
      scrollable: { type: Boolean, default: !0 },
      xScrollable: Boolean,
      trigger: { type: String, default: "hover" },
      useUnifiedContainer: Boolean,
      triggerDisplayManually: Boolean,
      container: Function,
      content: Function,
      containerClass: String,
      containerStyle: [String, Object],
      contentClass: String,
      contentStyle: [String, Object],
      horizontalRailStyle: [String, Object],
      verticalRailStyle: [String, Object],
      onScroll: Function,
      onWheel: Function,
      onResize: Function,
      internalOnUpdateScrollLeft: Function,
      internalHoistYRail: Boolean,
    }),
    mh = ue({
      name: "Scrollbar",
      props: T2,
      inheritAttrs: !1,
      setup(e) {
        const {
            mergedClsPrefixRef: t,
            inlineThemeDisabled: o,
            mergedRtlRef: r,
          } = yt(e),
          n = un("Scrollbar", r, t),
          i = N(null),
          l = N(null),
          a = N(null),
          s = N(null),
          c = N(null),
          d = N(null),
          u = N(null),
          h = N(null),
          p = N(null),
          f = N(null),
          v = N(null),
          b = N(0),
          g = N(0),
          T = N(!1),
          O = N(!1);
        let P = !1,
          R = !1,
          V,
          x,
          S = 0,
          M = 0,
          C = 0,
          _ = 0;
        const y = Bb(),
          K = B(() => {
            const { value: $ } = h,
              { value: j } = d,
              { value: le } = f;
            return $ === null || j === null || le === null
              ? 0
              : Math.min($, (le * $) / j + e.size * 1.5);
          }),
          H = B(() => `${K.value}px`),
          q = B(() => {
            const { value: $ } = p,
              { value: j } = u,
              { value: le } = v;
            return $ === null || j === null || le === null
              ? 0
              : (le * $) / j + e.size * 1.5;
          }),
          k = B(() => `${q.value}px`),
          F = B(() => {
            const { value: $ } = h,
              { value: j } = b,
              { value: le } = d,
              { value: me } = f;
            if ($ === null || le === null || me === null) return 0;
            {
              const xe = le - $;
              return xe ? (j / xe) * (me - K.value) : 0;
            }
          }),
          Q = B(() => `${F.value}px`),
          W = B(() => {
            const { value: $ } = p,
              { value: j } = g,
              { value: le } = u,
              { value: me } = v;
            if ($ === null || le === null || me === null) return 0;
            {
              const xe = le - $;
              return xe ? (j / xe) * (me - q.value) : 0;
            }
          }),
          ee = B(() => `${W.value}px`),
          ve = B(() => {
            const { value: $ } = h,
              { value: j } = d;
            return $ !== null && j !== null && j > $;
          }),
          ae = B(() => {
            const { value: $ } = p,
              { value: j } = u;
            return $ !== null && j !== null && j > $;
          }),
          he = B(() => {
            const { trigger: $ } = e;
            return $ === "none" || T.value;
          }),
          We = B(() => {
            const { trigger: $ } = e;
            return $ === "none" || O.value;
          }),
          He = B(() => {
            const { container: $ } = e;
            return $ ? $() : l.value;
          }),
          ze = B(() => {
            const { content: $ } = e;
            return $ ? $() : a.value;
          }),
          $e = Ef(() => {
            e.container || Ue({ top: b.value, left: g.value });
          }),
          Ve = () => {
            $e.isDeactivated || fe();
          },
          ge = ($) => {
            if ($e.isDeactivated) return;
            const { onResize: j } = e;
            j && j($), fe();
          },
          Ue = ($, j) => {
            if (!e.scrollable) return;
            if (typeof $ == "number") {
              w(j ?? 0, $, 0, !1, "auto");
              return;
            }
            const {
              left: le,
              top: me,
              index: xe,
              elSize: Pe,
              position: Ie,
              behavior: Ee,
              el: bt,
              debounce: Xt = !0,
            } = $;
            (le !== void 0 || me !== void 0) && w(le ?? 0, me ?? 0, 0, !1, Ee),
              bt !== void 0
                ? w(0, bt.offsetTop, bt.offsetHeight, Xt, Ee)
                : xe !== void 0 && Pe !== void 0
                ? w(0, xe * Pe, Pe, Xt, Ee)
                : Ie === "bottom"
                ? w(0, Number.MAX_SAFE_INTEGER, 0, !1, Ee)
                : Ie === "top" && w(0, 0, 0, !1, Ee);
          },
          at = ($, j) => {
            if (!e.scrollable) return;
            const { value: le } = He;
            le &&
              (typeof $ == "object" ? le.scrollBy($) : le.scrollBy($, j || 0));
          };
        function w($, j, le, me, xe) {
          const { value: Pe } = He;
          if (Pe) {
            if (me) {
              const { scrollTop: Ie, offsetHeight: Ee } = Pe;
              if (j > Ie) {
                j + le <= Ie + Ee ||
                  Pe.scrollTo({ left: $, top: j + le - Ee, behavior: xe });
                return;
              }
            }
            Pe.scrollTo({ left: $, top: j, behavior: xe });
          }
        }
        function I() {
          se(), oe(), fe();
        }
        function L() {
          X();
        }
        function X() {
          Z(), ne();
        }
        function Z() {
          x !== void 0 && window.clearTimeout(x),
            (x = window.setTimeout(() => {
              O.value = !1;
            }, e.duration));
        }
        function ne() {
          V !== void 0 && window.clearTimeout(V),
            (V = window.setTimeout(() => {
              T.value = !1;
            }, e.duration));
        }
        function se() {
          V !== void 0 && window.clearTimeout(V), (T.value = !0);
        }
        function oe() {
          x !== void 0 && window.clearTimeout(x), (O.value = !0);
        }
        function Y($) {
          const { onScroll: j } = e;
          j && j($), z();
        }
        function z() {
          const { value: $ } = He;
          $ &&
            ((b.value = $.scrollTop),
            (g.value = $.scrollLeft * (n != null && n.value ? -1 : 1)));
        }
        function G() {
          const { value: $ } = ze;
          $ && ((d.value = $.offsetHeight), (u.value = $.offsetWidth));
          const { value: j } = He;
          j && ((h.value = j.offsetHeight), (p.value = j.offsetWidth));
          const { value: le } = c,
            { value: me } = s;
          le && (v.value = le.offsetWidth), me && (f.value = me.offsetHeight);
        }
        function ie() {
          const { value: $ } = He;
          $ &&
            ((b.value = $.scrollTop),
            (g.value = $.scrollLeft * (n != null && n.value ? -1 : 1)),
            (h.value = $.offsetHeight),
            (p.value = $.offsetWidth),
            (d.value = $.scrollHeight),
            (u.value = $.scrollWidth));
          const { value: j } = c,
            { value: le } = s;
          j && (v.value = j.offsetWidth), le && (f.value = le.offsetHeight);
        }
        function fe() {
          e.scrollable && (e.useUnifiedContainer ? ie() : (G(), z()));
        }
        function ye($) {
          var j;
          return !(
            !((j = i.value) === null || j === void 0) && j.contains(jn($))
          );
        }
        function _e($) {
          $.preventDefault(),
            $.stopPropagation(),
            (R = !0),
            dt("mousemove", window, De, !0),
            dt("mouseup", window, Fe, !0),
            (M = g.value),
            (C =
              n != null && n.value ? window.innerWidth - $.clientX : $.clientX);
        }
        function De($) {
          if (!R) return;
          V !== void 0 && window.clearTimeout(V),
            x !== void 0 && window.clearTimeout(x);
          const { value: j } = p,
            { value: le } = u,
            { value: me } = q;
          if (j === null || le === null) return;
          const Pe =
              ((n != null && n.value
                ? window.innerWidth - $.clientX - C
                : $.clientX - C) *
                (le - j)) /
              (j - me),
            Ie = le - j;
          let Ee = M + Pe;
          (Ee = Math.min(Ie, Ee)), (Ee = Math.max(Ee, 0));
          const { value: bt } = He;
          if (bt) {
            bt.scrollLeft = Ee * (n != null && n.value ? -1 : 1);
            const { internalOnUpdateScrollLeft: Xt } = e;
            Xt && Xt(Ee);
          }
        }
        function Fe($) {
          $.preventDefault(),
            $.stopPropagation(),
            tt("mousemove", window, De, !0),
            tt("mouseup", window, Fe, !0),
            (R = !1),
            fe(),
            ye($) && X();
        }
        function Ke($) {
          $.preventDefault(),
            $.stopPropagation(),
            (P = !0),
            dt("mousemove", window, st, !0),
            dt("mouseup", window, mt, !0),
            (S = b.value),
            (_ = $.clientY);
        }
        function st($) {
          if (!P) return;
          V !== void 0 && window.clearTimeout(V),
            x !== void 0 && window.clearTimeout(x);
          const { value: j } = h,
            { value: le } = d,
            { value: me } = K;
          if (j === null || le === null) return;
          const Pe = (($.clientY - _) * (le - j)) / (j - me),
            Ie = le - j;
          let Ee = S + Pe;
          (Ee = Math.min(Ie, Ee)), (Ee = Math.max(Ee, 0));
          const { value: bt } = He;
          bt && (bt.scrollTop = Ee);
        }
        function mt($) {
          $.preventDefault(),
            $.stopPropagation(),
            tt("mousemove", window, st, !0),
            tt("mouseup", window, mt, !0),
            (P = !1),
            fe(),
            ye($) && X();
        }
        po(() => {
          const { value: $ } = ae,
            { value: j } = ve,
            { value: le } = t,
            { value: me } = c,
            { value: xe } = s;
          me &&
            ($
              ? me.classList.remove(`${le}-scrollbar-rail--disabled`)
              : me.classList.add(`${le}-scrollbar-rail--disabled`)),
            xe &&
              (j
                ? xe.classList.remove(`${le}-scrollbar-rail--disabled`)
                : xe.classList.add(`${le}-scrollbar-rail--disabled`));
        }),
          _t(() => {
            e.container || fe();
          }),
          Ct(() => {
            V !== void 0 && window.clearTimeout(V),
              x !== void 0 && window.clearTimeout(x),
              tt("mousemove", window, st, !0),
              tt("mouseup", window, mt, !0);
          });
        const no = Ae("Scrollbar", "-scrollbar", P2, qs, e, t),
          Rt = B(() => {
            const {
              common: {
                cubicBezierEaseInOut: $,
                scrollbarBorderRadius: j,
                scrollbarHeight: le,
                scrollbarWidth: me,
              },
              self: { color: xe, colorHover: Pe },
            } = no.value;
            return {
              "--n-scrollbar-bezier": $,
              "--n-scrollbar-color": xe,
              "--n-scrollbar-color-hover": Pe,
              "--n-scrollbar-border-radius": j,
              "--n-scrollbar-width": me,
              "--n-scrollbar-height": le,
            };
          }),
          St = o ? wt("scrollbar", void 0, Rt, e) : void 0;
        return Object.assign(
          Object.assign(
            {},
            {
              scrollTo: Ue,
              scrollBy: at,
              sync: fe,
              syncUnifiedContainer: ie,
              handleMouseEnterWrapper: I,
              handleMouseLeaveWrapper: L,
            }
          ),
          {
            mergedClsPrefix: t,
            rtlEnabled: n,
            containerScrollTop: b,
            wrapperRef: i,
            containerRef: l,
            contentRef: a,
            yRailRef: s,
            xRailRef: c,
            needYBar: ve,
            needXBar: ae,
            yBarSizePx: H,
            xBarSizePx: k,
            yBarTopPx: Q,
            xBarLeftPx: ee,
            isShowXBar: he,
            isShowYBar: We,
            isIos: y,
            handleScroll: Y,
            handleContentResize: Ve,
            handleContainerResize: ge,
            handleYScrollMouseDown: Ke,
            handleXScrollMouseDown: _e,
            cssVars: o ? void 0 : Rt,
            themeClass: St == null ? void 0 : St.themeClass,
            onRender: St == null ? void 0 : St.onRender,
          }
        );
      },
      render() {
        var e;
        const {
          $slots: t,
          mergedClsPrefix: o,
          triggerDisplayManually: r,
          rtlEnabled: n,
          internalHoistYRail: i,
        } = this;
        if (!this.scrollable)
          return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
        const l = this.trigger === "none",
          a = () =>
            m(
              "div",
              {
                ref: "yRailRef",
                class: [`${o}-scrollbar-rail`, `${o}-scrollbar-rail--vertical`],
                "data-scrollbar-rail": !0,
                style: this.verticalRailStyle,
                "aria-hidden": !0,
              },
              m(l ? Pa : vo, l ? null : { name: "fade-in-transition" }, {
                default: () =>
                  this.needYBar && this.isShowYBar && !this.isIos
                    ? m("div", {
                        class: `${o}-scrollbar-rail__scrollbar`,
                        style: { height: this.yBarSizePx, top: this.yBarTopPx },
                        onMousedown: this.handleYScrollMouseDown,
                      })
                    : null,
              })
            ),
          s = () => {
            var d, u;
            return (
              (d = this.onRender) === null || d === void 0 || d.call(this),
              m(
                "div",
                $r(this.$attrs, {
                  role: "none",
                  ref: "wrapperRef",
                  class: [
                    `${o}-scrollbar`,
                    this.themeClass,
                    n && `${o}-scrollbar--rtl`,
                  ],
                  style: this.cssVars,
                  onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
                  onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper,
                }),
                [
                  this.container
                    ? (u = t.default) === null || u === void 0
                      ? void 0
                      : u.call(t)
                    : m(
                        "div",
                        {
                          role: "none",
                          ref: "containerRef",
                          class: [
                            `${o}-scrollbar-container`,
                            this.containerClass,
                          ],
                          style: this.containerStyle,
                          onScroll: this.handleScroll,
                          onWheel: this.onWheel,
                        },
                        m(
                          qn,
                          { onResize: this.handleContentResize },
                          {
                            default: () =>
                              m(
                                "div",
                                {
                                  ref: "contentRef",
                                  role: "none",
                                  style: [
                                    {
                                      width: this.xScrollable
                                        ? "fit-content"
                                        : null,
                                    },
                                    this.contentStyle,
                                  ],
                                  class: [
                                    `${o}-scrollbar-content`,
                                    this.contentClass,
                                  ],
                                },
                                t
                              ),
                          }
                        )
                      ),
                  i ? null : a(),
                  this.xScrollable &&
                    m(
                      "div",
                      {
                        ref: "xRailRef",
                        class: [
                          `${o}-scrollbar-rail`,
                          `${o}-scrollbar-rail--horizontal`,
                        ],
                        style: this.horizontalRailStyle,
                        "data-scrollbar-rail": !0,
                        "aria-hidden": !0,
                      },
                      m(
                        l ? Pa : vo,
                        l ? null : { name: "fade-in-transition" },
                        {
                          default: () =>
                            this.needXBar && this.isShowXBar && !this.isIos
                              ? m("div", {
                                  class: `${o}-scrollbar-rail__scrollbar`,
                                  style: {
                                    width: this.xBarSizePx,
                                    right: n ? this.xBarLeftPx : void 0,
                                    left: n ? void 0 : this.xBarLeftPx,
                                  },
                                  onMousedown: this.handleXScrollMouseDown,
                                })
                              : null,
                        }
                      )
                    ),
                ]
              )
            );
          },
          c = this.container
            ? s()
            : m(qn, { onResize: this.handleContainerResize }, { default: s });
        return i ? m(Ye, null, c, a()) : c;
      },
    }),
    Ys = mh,
    bh = mh,
    z2 = {
      height: "calc(var(--n-option-height) * 7.6)",
      paddingSmall: "4px 0",
      paddingMedium: "4px 0",
      paddingLarge: "4px 0",
      paddingHuge: "4px 0",
      optionPaddingSmall: "0 12px",
      optionPaddingMedium: "0 12px",
      optionPaddingLarge: "0 12px",
      optionPaddingHuge: "0 12px",
      loadingSize: "18px",
    },
    xh = (e) => {
      const {
        borderRadius: t,
        popoverColor: o,
        textColor3: r,
        dividerColor: n,
        textColor2: i,
        primaryColorPressed: l,
        textColorDisabled: a,
        primaryColor: s,
        opacityDisabled: c,
        hoverColor: d,
        fontSizeSmall: u,
        fontSizeMedium: h,
        fontSizeLarge: p,
        fontSizeHuge: f,
        heightSmall: v,
        heightMedium: b,
        heightLarge: g,
        heightHuge: T,
      } = e;
      return Object.assign(Object.assign({}, z2), {
        optionFontSizeSmall: u,
        optionFontSizeMedium: h,
        optionFontSizeLarge: p,
        optionFontSizeHuge: f,
        optionHeightSmall: v,
        optionHeightMedium: b,
        optionHeightLarge: g,
        optionHeightHuge: T,
        borderRadius: t,
        color: o,
        groupHeaderTextColor: r,
        actionDividerColor: n,
        optionTextColor: i,
        optionTextColorPressed: l,
        optionTextColorDisabled: a,
        optionTextColorActive: s,
        optionOpacityDisabled: c,
        optionCheckColor: s,
        optionColorPending: d,
        optionColorActive: "rgba(0, 0, 0, 0)",
        optionColorActivePending: d,
        actionTextColor: i,
        loadingColor: s,
      });
    },
    I2 = {
      name: "InternalSelectMenu",
      common: Et,
      peers: { Scrollbar: qs, Empty: Gs },
      self: xh,
    },
    Ch = I2,
    _2 = {
      name: "InternalSelectMenu",
      common: ce,
      peers: { Scrollbar: Ft, Empty: Mr },
      self: xh,
    },
    li = _2;
  function M2(e, t) {
    return m(
      vo,
      { name: "fade-in-scale-up-transition" },
      {
        default: () =>
          e
            ? m(
                qo,
                { clsPrefix: t, class: `${t}-base-select-option__check` },
                { default: () => m(SS) }
              )
            : null,
      }
    );
  }
  const Vd = ue({
      name: "NBaseSelectOption",
      props: {
        clsPrefix: { type: String, required: !0 },
        tmNode: { type: Object, required: !0 },
      },
      setup(e) {
        const {
            valueRef: t,
            pendingTmNodeRef: o,
            multipleRef: r,
            valueSetRef: n,
            renderLabelRef: i,
            renderOptionRef: l,
            labelFieldRef: a,
            valueFieldRef: s,
            showCheckmarkRef: c,
            nodePropsRef: d,
            handleOptionClick: u,
            handleOptionMouseEnter: h,
          } = Oe(ys),
          p = ut(() => {
            const { value: g } = o;
            return g ? e.tmNode.key === g.key : !1;
          });
        function f(g) {
          const { tmNode: T } = e;
          T.disabled || u(g, T);
        }
        function v(g) {
          const { tmNode: T } = e;
          T.disabled || h(g, T);
        }
        function b(g) {
          const { tmNode: T } = e,
            { value: O } = p;
          T.disabled || O || h(g, T);
        }
        return {
          multiple: r,
          isGrouped: ut(() => {
            const { tmNode: g } = e,
              { parent: T } = g;
            return T && T.rawNode.type === "group";
          }),
          showCheckmark: c,
          nodeProps: d,
          isPending: p,
          isSelected: ut(() => {
            const { value: g } = t,
              { value: T } = r;
            if (g === null) return !1;
            const O = e.tmNode.rawNode[s.value];
            if (T) {
              const { value: P } = n;
              return P.has(O);
            } else return g === O;
          }),
          labelField: a,
          renderLabel: i,
          renderOption: l,
          handleMouseMove: b,
          handleMouseEnter: v,
          handleClick: f,
        };
      },
      render() {
        const {
            clsPrefix: e,
            tmNode: { rawNode: t },
            isSelected: o,
            isPending: r,
            isGrouped: n,
            showCheckmark: i,
            nodeProps: l,
            renderOption: a,
            renderLabel: s,
            handleClick: c,
            handleMouseEnter: d,
            handleMouseMove: u,
          } = this,
          h = M2(o, e),
          p = s ? [s(t, o), i && h] : [It(t[this.labelField], t, o), i && h],
          f = l == null ? void 0 : l(t),
          v = m(
            "div",
            Object.assign({}, f, {
              class: [
                `${e}-base-select-option`,
                t.class,
                f == null ? void 0 : f.class,
                {
                  [`${e}-base-select-option--disabled`]: t.disabled,
                  [`${e}-base-select-option--selected`]: o,
                  [`${e}-base-select-option--grouped`]: n,
                  [`${e}-base-select-option--pending`]: r,
                  [`${e}-base-select-option--show-checkmark`]: i,
                },
              ],
              style: [(f == null ? void 0 : f.style) || "", t.style || ""],
              onClick: Gl([c, f == null ? void 0 : f.onClick]),
              onMouseenter: Gl([d, f == null ? void 0 : f.onMouseenter]),
              onMousemove: Gl([u, f == null ? void 0 : f.onMousemove]),
            }),
            m("div", { class: `${e}-base-select-option__content` }, p)
          );
        return t.render
          ? t.render({ node: v, option: t, selected: o })
          : a
          ? a({ node: v, option: t, selected: o })
          : v;
      },
    }),
    Kd = ue({
      name: "NBaseSelectGroupHeader",
      props: {
        clsPrefix: { type: String, required: !0 },
        tmNode: { type: Object, required: !0 },
      },
      setup() {
        const {
          renderLabelRef: e,
          renderOptionRef: t,
          labelFieldRef: o,
          nodePropsRef: r,
        } = Oe(ys);
        return { labelField: o, nodeProps: r, renderLabel: e, renderOption: t };
      },
      render() {
        const {
            clsPrefix: e,
            renderLabel: t,
            renderOption: o,
            nodeProps: r,
            tmNode: { rawNode: n },
          } = this,
          i = r == null ? void 0 : r(n),
          l = t ? t(n, !1) : It(n[this.labelField], n, !1),
          a = m(
            "div",
            Object.assign({}, i, {
              class: [
                `${e}-base-select-group-header`,
                i == null ? void 0 : i.class,
              ],
            }),
            l
          );
        return n.render
          ? n.render({ node: a, option: n })
          : o
          ? o({ node: a, option: n, selected: !1 })
          : a;
      },
    }),
    { cubicBezierEaseIn: Ud, cubicBezierEaseOut: Gd } = Xo;
  function Xs({
    transformOrigin: e = "inherit",
    duration: t = ".2s",
    enterScale: o = ".9",
    originalTransform: r = "",
    originalTransition: n = "",
  } = {}) {
    return [
      D("&.fade-in-scale-up-transition-leave-active", {
        transformOrigin: e,
        transition: `opacity ${t} ${Ud}, transform ${t} ${Ud} ${n && "," + n}`,
      }),
      D("&.fade-in-scale-up-transition-enter-active", {
        transformOrigin: e,
        transition: `opacity ${t} ${Gd}, transform ${t} ${Gd} ${n && "," + n}`,
      }),
      D(
        "&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",
        { opacity: 0, transform: `${r} scale(${o})` }
      ),
      D(
        "&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",
        { opacity: 1, transform: `${r} scale(1)` }
      ),
    ];
  }
  const k2 = U(
      "base-select-menu",
      `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,
      [
        U(
          "scrollbar",
          `
 max-height: var(--n-height);
 `
        ),
        U(
          "virtual-list",
          `
 max-height: var(--n-height);
 `
        ),
        U(
          "base-select-option",
          `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,
          [
            A(
              "content",
              `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `
            ),
          ]
        ),
        U(
          "base-select-group-header",
          `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `
        ),
        U(
          "base-select-menu-option-wrapper",
          `
 position: relative;
 width: 100%;
 `
        ),
        A(
          "loading, empty",
          `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `
        ),
        A(
          "loading",
          `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `
        ),
        A(
          "action",
          `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `
        ),
        U(
          "base-select-group-header",
          `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `
        ),
        U(
          "base-select-option",
          `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,
          [
            re(
              "show-checkmark",
              `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `
            ),
            D(
              "&::before",
              `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `
            ),
            D(
              "&:active",
              `
 color: var(--n-option-text-color-pressed);
 `
            ),
            re(
              "grouped",
              `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `
            ),
            re("pending", [
              D(
                "&::before",
                `
 background-color: var(--n-option-color-pending);
 `
              ),
            ]),
            re(
              "selected",
              `
 color: var(--n-option-text-color-active);
 `,
              [
                D(
                  "&::before",
                  `
 background-color: var(--n-option-color-active);
 `
                ),
                re("pending", [
                  D(
                    "&::before",
                    `
 background-color: var(--n-option-color-active-pending);
 `
                  ),
                ]),
              ]
            ),
            re(
              "disabled",
              `
 cursor: not-allowed;
 `,
              [
                Je(
                  "selected",
                  `
 color: var(--n-option-text-color-disabled);
 `
                ),
                re(
                  "selected",
                  `
 opacity: var(--n-option-opacity-disabled);
 `
                ),
              ]
            ),
            A(
              "check",
              `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,
              [Xs({ enterScale: "0.5" })]
            ),
          ]
        ),
      ]
    ),
    E2 = ue({
      name: "InternalSelectMenu",
      props: Object.assign(Object.assign({}, Ae.props), {
        clsPrefix: { type: String, required: !0 },
        scrollable: { type: Boolean, default: !0 },
        treeMate: { type: Object, required: !0 },
        multiple: Boolean,
        size: { type: String, default: "medium" },
        value: { type: [String, Number, Array], default: null },
        autoPending: Boolean,
        virtualScroll: { type: Boolean, default: !0 },
        show: { type: Boolean, default: !0 },
        labelField: { type: String, default: "label" },
        valueField: { type: String, default: "value" },
        loading: Boolean,
        focusable: Boolean,
        renderLabel: Function,
        renderOption: Function,
        nodeProps: Function,
        showCheckmark: { type: Boolean, default: !0 },
        onMousedown: Function,
        onScroll: Function,
        onFocus: Function,
        onBlur: Function,
        onKeyup: Function,
        onKeydown: Function,
        onTabOut: Function,
        onMouseenter: Function,
        onMouseleave: Function,
        onResize: Function,
        resetMenuOnOptionsChange: { type: Boolean, default: !0 },
        inlineThemeDisabled: Boolean,
        onToggle: Function,
      }),
      setup(e) {
        const t = Ae(
            "InternalSelectMenu",
            "-internal-select-menu",
            k2,
            Ch,
            e,
            ke(e, "clsPrefix")
          ),
          o = N(null),
          r = N(null),
          n = N(null),
          i = B(() => e.treeMate.getFlattenedNodes()),
          l = B(() => XS(i.value)),
          a = N(null);
        function s() {
          const { treeMate: W } = e;
          let ee = null;
          const { value: ve } = e;
          ve === null
            ? (ee = W.getFirstAvailableNode())
            : (e.multiple
                ? (ee = W.getNode((ve || [])[(ve || []).length - 1]))
                : (ee = W.getNode(ve)),
              (!ee || ee.disabled) && (ee = W.getFirstAvailableNode())),
            _(ee || null);
        }
        function c() {
          const { value: W } = a;
          W && !e.treeMate.getNode(W.key) && (a.value = null);
        }
        let d;
        rt(
          () => e.show,
          (W) => {
            W
              ? (d = rt(
                  () => e.treeMate,
                  () => {
                    e.resetMenuOnOptionsChange
                      ? (e.autoPending ? s() : c(), $o(y))
                      : c();
                  },
                  { immediate: !0 }
                ))
              : d == null || d();
          },
          { immediate: !0 }
        ),
          Ct(() => {
            d == null || d();
          });
        const u = B(() => Vn(t.value.self[de("optionHeight", e.size)])),
          h = B(() => ki(t.value.self[de("padding", e.size)])),
          p = B(() =>
            e.multiple && Array.isArray(e.value) ? new Set(e.value) : new Set()
          ),
          f = B(() => {
            const W = i.value;
            return W && W.length === 0;
          });
        function v(W) {
          const { onToggle: ee } = e;
          ee && ee(W);
        }
        function b(W) {
          const { onScroll: ee } = e;
          ee && ee(W);
        }
        function g(W) {
          var ee;
          (ee = n.value) === null || ee === void 0 || ee.sync(), b(W);
        }
        function T() {
          var W;
          (W = n.value) === null || W === void 0 || W.sync();
        }
        function O() {
          const { value: W } = a;
          return W || null;
        }
        function P(W, ee) {
          ee.disabled || _(ee, !1);
        }
        function R(W, ee) {
          ee.disabled || v(ee);
        }
        function V(W) {
          var ee;
          en(W, "action") ||
            (ee = e.onKeyup) === null ||
            ee === void 0 ||
            ee.call(e, W);
        }
        function x(W) {
          var ee;
          en(W, "action") ||
            (ee = e.onKeydown) === null ||
            ee === void 0 ||
            ee.call(e, W);
        }
        function S(W) {
          var ee;
          (ee = e.onMousedown) === null || ee === void 0 || ee.call(e, W),
            !e.focusable && W.preventDefault();
        }
        function M() {
          const { value: W } = a;
          W && _(W.getNext({ loop: !0 }), !0);
        }
        function C() {
          const { value: W } = a;
          W && _(W.getPrev({ loop: !0 }), !0);
        }
        function _(W, ee = !1) {
          (a.value = W), ee && y();
        }
        function y() {
          var W, ee;
          const ve = a.value;
          if (!ve) return;
          const ae = l.value(ve.key);
          ae !== null &&
            (e.virtualScroll
              ? (W = r.value) === null ||
                W === void 0 ||
                W.scrollTo({ index: ae })
              : (ee = n.value) === null ||
                ee === void 0 ||
                ee.scrollTo({ index: ae, elSize: u.value }));
        }
        function K(W) {
          var ee, ve;
          !((ee = o.value) === null || ee === void 0) &&
            ee.contains(W.target) &&
            ((ve = e.onFocus) === null || ve === void 0 || ve.call(e, W));
        }
        function H(W) {
          var ee, ve;
          (!((ee = o.value) === null || ee === void 0) &&
            ee.contains(W.relatedTarget)) ||
            (ve = e.onBlur) === null ||
            ve === void 0 ||
            ve.call(e, W);
        }
        ot(ys, {
          handleOptionMouseEnter: P,
          handleOptionClick: R,
          valueSetRef: p,
          pendingTmNodeRef: a,
          nodePropsRef: ke(e, "nodeProps"),
          showCheckmarkRef: ke(e, "showCheckmark"),
          multipleRef: ke(e, "multiple"),
          valueRef: ke(e, "value"),
          renderLabelRef: ke(e, "renderLabel"),
          renderOptionRef: ke(e, "renderOption"),
          labelFieldRef: ke(e, "labelField"),
          valueFieldRef: ke(e, "valueField"),
        }),
          ot(vf, o),
          _t(() => {
            const { value: W } = n;
            W && W.sync();
          });
        const q = B(() => {
            const { size: W } = e,
              {
                common: { cubicBezierEaseInOut: ee },
                self: {
                  height: ve,
                  borderRadius: ae,
                  color: he,
                  groupHeaderTextColor: We,
                  actionDividerColor: He,
                  optionTextColorPressed: ze,
                  optionTextColor: $e,
                  optionTextColorDisabled: Ve,
                  optionTextColorActive: ge,
                  optionOpacityDisabled: Ue,
                  optionCheckColor: at,
                  actionTextColor: w,
                  optionColorPending: I,
                  optionColorActive: L,
                  loadingColor: X,
                  loadingSize: Z,
                  optionColorActivePending: ne,
                  [de("optionFontSize", W)]: se,
                  [de("optionHeight", W)]: oe,
                  [de("optionPadding", W)]: Y,
                },
              } = t.value;
            return {
              "--n-height": ve,
              "--n-action-divider-color": He,
              "--n-action-text-color": w,
              "--n-bezier": ee,
              "--n-border-radius": ae,
              "--n-color": he,
              "--n-option-font-size": se,
              "--n-group-header-text-color": We,
              "--n-option-check-color": at,
              "--n-option-color-pending": I,
              "--n-option-color-active": L,
              "--n-option-color-active-pending": ne,
              "--n-option-height": oe,
              "--n-option-opacity-disabled": Ue,
              "--n-option-text-color": $e,
              "--n-option-text-color-active": ge,
              "--n-option-text-color-disabled": Ve,
              "--n-option-text-color-pressed": ze,
              "--n-option-padding": Y,
              "--n-option-padding-left": ki(Y, "left"),
              "--n-option-padding-right": ki(Y, "right"),
              "--n-loading-color": X,
              "--n-loading-size": Z,
            };
          }),
          { inlineThemeDisabled: k } = e,
          F = k
            ? wt(
                "internal-select-menu",
                B(() => e.size[0]),
                q,
                e
              )
            : void 0,
          Q = { selfRef: o, next: M, prev: C, getPendingTmNode: O };
        return (
          kf(o, e.onResize),
          Object.assign(
            {
              mergedTheme: t,
              virtualListRef: r,
              scrollbarRef: n,
              itemSize: u,
              padding: h,
              flattenedNodes: i,
              empty: f,
              virtualListContainer() {
                const { value: W } = r;
                return W == null ? void 0 : W.listElRef;
              },
              virtualListContent() {
                const { value: W } = r;
                return W == null ? void 0 : W.itemsElRef;
              },
              doScroll: b,
              handleFocusin: K,
              handleFocusout: H,
              handleKeyUp: V,
              handleKeyDown: x,
              handleMouseDown: S,
              handleVirtualListResize: T,
              handleVirtualListScroll: g,
              cssVars: k ? void 0 : q,
              themeClass: F == null ? void 0 : F.themeClass,
              onRender: F == null ? void 0 : F.onRender,
            },
            Q
          )
        );
      },
      render() {
        const {
          $slots: e,
          virtualScroll: t,
          clsPrefix: o,
          mergedTheme: r,
          themeClass: n,
          onRender: i,
        } = this;
        return (
          i == null || i(),
          m(
            "div",
            {
              ref: "selfRef",
              tabindex: this.focusable ? 0 : -1,
              class: [
                `${o}-base-select-menu`,
                n,
                this.multiple && `${o}-base-select-menu--multiple`,
              ],
              style: this.cssVars,
              onFocusin: this.handleFocusin,
              onFocusout: this.handleFocusout,
              onKeyup: this.handleKeyUp,
              onKeydown: this.handleKeyDown,
              onMousedown: this.handleMouseDown,
              onMouseenter: this.onMouseenter,
              onMouseleave: this.onMouseleave,
            },
            this.loading
              ? m(
                  "div",
                  { class: `${o}-base-select-menu__loading` },
                  m(Vs, { clsPrefix: o, strokeWidth: 20 })
                )
              : this.empty
              ? m(
                  "div",
                  { class: `${o}-base-select-menu__empty`, "data-empty": !0 },
                  Kr(e.empty, () => [
                    m(y2, {
                      theme: r.peers.Empty,
                      themeOverrides: r.peerOverrides.Empty,
                    }),
                  ])
                )
              : m(
                  Ys,
                  {
                    ref: "scrollbarRef",
                    theme: r.peers.Scrollbar,
                    themeOverrides: r.peerOverrides.Scrollbar,
                    scrollable: this.scrollable,
                    container: t ? this.virtualListContainer : void 0,
                    content: t ? this.virtualListContent : void 0,
                    onScroll: t ? void 0 : this.doScroll,
                  },
                  {
                    default: () =>
                      t
                        ? m(
                            k0,
                            {
                              ref: "virtualListRef",
                              class: `${o}-virtual-list`,
                              items: this.flattenedNodes,
                              itemSize: this.itemSize,
                              showScrollbar: !1,
                              paddingTop: this.padding.top,
                              paddingBottom: this.padding.bottom,
                              onResize: this.handleVirtualListResize,
                              onScroll: this.handleVirtualListScroll,
                              itemResizable: !0,
                            },
                            {
                              default: ({ item: l }) =>
                                l.isGroup
                                  ? m(Kd, {
                                      key: l.key,
                                      clsPrefix: o,
                                      tmNode: l,
                                    })
                                  : l.ignored
                                  ? null
                                  : m(Vd, {
                                      clsPrefix: o,
                                      key: l.key,
                                      tmNode: l,
                                    }),
                            }
                          )
                        : m(
                            "div",
                            {
                              class: `${o}-base-select-menu-option-wrapper`,
                              style: {
                                paddingTop: this.padding.top,
                                paddingBottom: this.padding.bottom,
                              },
                            },
                            this.flattenedNodes.map((l) =>
                              l.isGroup
                                ? m(Kd, { key: l.key, clsPrefix: o, tmNode: l })
                                : m(Vd, { clsPrefix: o, key: l.key, tmNode: l })
                            )
                          ),
                  }
                ),
            Ut(
              e.action,
              (l) =>
                l && [
                  m(
                    "div",
                    {
                      class: `${o}-base-select-menu__action`,
                      "data-action": !0,
                      key: "action",
                    },
                    l
                  ),
                  m(BS, { onFocus: this.onTabOut, key: "focus-detector" }),
                ]
            )
          )
        );
      },
    }),
    R2 = U(
      "base-wave",
      `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`
    ),
    O2 = ue({
      name: "BaseWave",
      props: { clsPrefix: { type: String, required: !0 } },
      setup(e) {
        _r("-base-wave", R2, ke(e, "clsPrefix"));
        const t = N(null),
          o = N(!1);
        let r = null;
        return (
          Ct(() => {
            r !== null && window.clearTimeout(r);
          }),
          {
            active: o,
            selfRef: t,
            play() {
              r !== null &&
                (window.clearTimeout(r), (o.value = !1), (r = null)),
                $o(() => {
                  var n;
                  (n = t.value) === null || n === void 0 || n.offsetHeight,
                    (o.value = !0),
                    (r = window.setTimeout(() => {
                      (o.value = !1), (r = null);
                    }, 1e3));
                });
            },
          }
        );
      },
      render() {
        const { clsPrefix: e } = this;
        return m("div", {
          ref: "selfRef",
          "aria-hidden": !0,
          class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`],
        });
      },
    }),
    B2 = {
      space: "6px",
      spaceArrow: "10px",
      arrowOffset: "10px",
      arrowOffsetVertical: "10px",
      arrowHeight: "6px",
      padding: "8px 14px",
    },
    yh = (e) => {
      const {
        boxShadow2: t,
        popoverColor: o,
        textColor2: r,
        borderRadius: n,
        fontSize: i,
        dividerColor: l,
      } = e;
      return Object.assign(Object.assign({}, B2), {
        fontSize: i,
        borderRadius: n,
        color: o,
        dividerColor: l,
        textColor: r,
        boxShadow: t,
      });
    },
    A2 = { name: "Popover", common: Et, self: yh },
    Pl = A2,
    H2 = { name: "Popover", common: ce, self: yh },
    kr = H2,
    sa = { top: "bottom", bottom: "top", left: "right", right: "left" },
    pt = "var(--n-arrow-height) * 1.414",
    F2 = D([
      U(
        "popover",
        `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,
        [
          D(">", [
            U(
              "scrollbar",
              `
 height: inherit;
 max-height: inherit;
 `
            ),
          ]),
          Je(
            "raw",
            `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,
            [
              Je("scrollable", [
                Je("show-header-or-footer", "padding: var(--n-padding);"),
              ]),
            ]
          ),
          A(
            "header",
            `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `
          ),
          A(
            "footer",
            `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `
          ),
          re("scrollable, show-header-or-footer", [
            A(
              "content",
              `
 padding: var(--n-padding);
 `
            ),
          ]),
        ]
      ),
      U(
        "popover-shared",
        `
 transform-origin: inherit;
 `,
        [
          U(
            "popover-arrow-wrapper",
            `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,
            [
              U(
                "popover-arrow",
                `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${pt});
 height: calc(${pt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `
              ),
            ]
          ),
          D(
            "&.popover-transition-enter-from, &.popover-transition-leave-to",
            `
 opacity: 0;
 transform: scale(.85);
 `
          ),
          D(
            "&.popover-transition-enter-to, &.popover-transition-leave-from",
            `
 transform: scale(1);
 opacity: 1;
 `
          ),
          D(
            "&.popover-transition-enter-active",
            `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `
          ),
          D(
            "&.popover-transition-leave-active",
            `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `
          ),
        ]
      ),
      Kt(
        "top-start",
        `
 top: calc(${pt} / -2);
 left: calc(${Co("top-start")} - var(--v-offset-left));
 `
      ),
      Kt(
        "top",
        `
 top: calc(${pt} / -2);
 transform: translateX(calc(${pt} / -2)) rotate(45deg);
 left: 50%;
 `
      ),
      Kt(
        "top-end",
        `
 top: calc(${pt} / -2);
 right: calc(${Co("top-end")} + var(--v-offset-left));
 `
      ),
      Kt(
        "bottom-start",
        `
 bottom: calc(${pt} / -2);
 left: calc(${Co("bottom-start")} - var(--v-offset-left));
 `
      ),
      Kt(
        "bottom",
        `
 bottom: calc(${pt} / -2);
 transform: translateX(calc(${pt} / -2)) rotate(45deg);
 left: 50%;
 `
      ),
      Kt(
        "bottom-end",
        `
 bottom: calc(${pt} / -2);
 right: calc(${Co("bottom-end")} + var(--v-offset-left));
 `
      ),
      Kt(
        "left-start",
        `
 left: calc(${pt} / -2);
 top: calc(${Co("left-start")} - var(--v-offset-top));
 `
      ),
      Kt(
        "left",
        `
 left: calc(${pt} / -2);
 transform: translateY(calc(${pt} / -2)) rotate(45deg);
 top: 50%;
 `
      ),
      Kt(
        "left-end",
        `
 left: calc(${pt} / -2);
 bottom: calc(${Co("left-end")} + var(--v-offset-top));
 `
      ),
      Kt(
        "right-start",
        `
 right: calc(${pt} / -2);
 top: calc(${Co("right-start")} - var(--v-offset-top));
 `
      ),
      Kt(
        "right",
        `
 right: calc(${pt} / -2);
 transform: translateY(calc(${pt} / -2)) rotate(45deg);
 top: 50%;
 `
      ),
      Kt(
        "right-end",
        `
 right: calc(${pt} / -2);
 bottom: calc(${Co("right-end")} + var(--v-offset-top));
 `
      ),
      ..._w(
        {
          top: ["right-start", "left-start"],
          right: ["top-end", "bottom-end"],
          bottom: ["right-end", "left-end"],
          left: ["top-start", "bottom-start"],
        },
        (e, t) => {
          const o = ["right", "left"].includes(t),
            r = o ? "width" : "height";
          return e.map((n) => {
            const i = n.split("-")[1] === "end",
              a = `calc((${`var(--v-target-${r}, 0px)`} - ${pt}) / 2)`,
              s = Co(n);
            return D(`[v-placement="${n}"] >`, [
              U("popover-shared", [
                re("center-arrow", [
                  U(
                    "popover-arrow",
                    `${t}: calc(max(${a}, ${s}) ${
                      i ? "+" : "-"
                    } var(--v-offset-${o ? "left" : "top"}));`
                  ),
                ]),
              ]),
            ]);
          });
        }
      ),
    ]);
  function Co(e) {
    return ["top", "bottom"].includes(e.split("-")[0])
      ? "var(--n-arrow-offset)"
      : "var(--n-arrow-offset-vertical)";
  }
  function Kt(e, t) {
    const o = e.split("-")[0],
      r = ["top", "bottom"].includes(o)
        ? "height: var(--n-space-arrow);"
        : "width: var(--n-space-arrow);";
    return D(`[v-placement="${e}"] >`, [
      U(
        "popover-shared",
        `
 margin-${sa[o]}: var(--n-space);
 `,
        [
          re(
            "show-arrow",
            `
 margin-${sa[o]}: var(--n-space-arrow);
 `
          ),
          re(
            "overlap",
            `
 margin: 0;
 `
          ),
          mb(
            "popover-arrow-wrapper",
            `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${o}: 100%;
 ${sa[o]}: auto;
 ${r}
 `,
            [U("popover-arrow", t)]
          ),
        ]
      ),
    ]);
  }
  const wh = Object.assign(Object.assign({}, Ae.props), {
      to: zo.propTo,
      show: Boolean,
      trigger: String,
      showArrow: Boolean,
      delay: Number,
      duration: Number,
      raw: Boolean,
      arrowPointToCenter: Boolean,
      arrowStyle: [String, Object],
      displayDirective: String,
      x: Number,
      y: Number,
      flip: Boolean,
      overlap: Boolean,
      placement: String,
      width: [Number, String],
      keepAliveOnHover: Boolean,
      scrollable: Boolean,
      contentStyle: [Object, String],
      headerStyle: [Object, String],
      footerStyle: [Object, String],
      internalDeactivateImmediately: Boolean,
      animated: Boolean,
      onClickoutside: Function,
      internalTrapFocus: Boolean,
      internalOnAfterLeave: Function,
      minWidth: Number,
      maxWidth: Number,
    }),
    Sh = ({ arrowStyle: e, clsPrefix: t }) =>
      m(
        "div",
        { key: "__popover-arrow__", class: `${t}-popover-arrow-wrapper` },
        m("div", { class: `${t}-popover-arrow`, style: e })
      ),
    D2 = ue({
      name: "PopoverBody",
      inheritAttrs: !1,
      props: wh,
      setup(e, { slots: t, attrs: o }) {
        const {
            namespaceRef: r,
            mergedClsPrefixRef: n,
            inlineThemeDisabled: i,
          } = yt(e),
          l = Ae("Popover", "-popover", F2, Pl, e, n),
          a = N(null),
          s = Oe("NPopover"),
          c = N(null),
          d = N(e.show),
          u = N(!1);
        po(() => {
          const { show: x } = e;
          x && !bb() && !e.internalDeactivateImmediately && (u.value = !0);
        });
        const h = B(() => {
            const { trigger: x, onClickoutside: S } = e,
              M = [],
              {
                positionManuallyRef: { value: C },
              } = s;
            return (
              C ||
                (x === "click" &&
                  !S &&
                  M.push([Yi, P, void 0, { capture: !0 }]),
                x === "hover" && M.push([Vb, O])),
              S && M.push([Yi, P, void 0, { capture: !0 }]),
              (e.displayDirective === "show" || (e.animated && u.value)) &&
                M.push([bs, e.show]),
              M
            );
          }),
          p = B(() => {
            const x = e.width === "trigger" ? void 0 : Ei(e.width),
              S = [];
            x && S.push({ width: x });
            const { maxWidth: M, minWidth: C } = e;
            return (
              M && S.push({ maxWidth: Ei(M) }),
              C && S.push({ maxWidth: Ei(C) }),
              i || S.push(f.value),
              S
            );
          }),
          f = B(() => {
            const {
              common: {
                cubicBezierEaseInOut: x,
                cubicBezierEaseIn: S,
                cubicBezierEaseOut: M,
              },
              self: {
                space: C,
                spaceArrow: _,
                padding: y,
                fontSize: K,
                textColor: H,
                dividerColor: q,
                color: k,
                boxShadow: F,
                borderRadius: Q,
                arrowHeight: W,
                arrowOffset: ee,
                arrowOffsetVertical: ve,
              },
            } = l.value;
            return {
              "--n-box-shadow": F,
              "--n-bezier": x,
              "--n-bezier-ease-in": S,
              "--n-bezier-ease-out": M,
              "--n-font-size": K,
              "--n-text-color": H,
              "--n-color": k,
              "--n-divider-color": q,
              "--n-border-radius": Q,
              "--n-arrow-height": W,
              "--n-arrow-offset": ee,
              "--n-arrow-offset-vertical": ve,
              "--n-padding": y,
              "--n-space": C,
              "--n-space-arrow": _,
            };
          }),
          v = i ? wt("popover", void 0, f, e) : void 0;
        s.setBodyInstance({ syncPosition: b }),
          Ct(() => {
            s.setBodyInstance(null);
          }),
          rt(ke(e, "show"), (x) => {
            e.animated || (x ? (d.value = !0) : (d.value = !1));
          });
        function b() {
          var x;
          (x = a.value) === null || x === void 0 || x.syncPosition();
        }
        function g(x) {
          e.trigger === "hover" &&
            e.keepAliveOnHover &&
            e.show &&
            s.handleMouseEnter(x);
        }
        function T(x) {
          e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(x);
        }
        function O(x) {
          e.trigger === "hover" &&
            !R().contains(jn(x)) &&
            s.handleMouseMoveOutside(x);
        }
        function P(x) {
          ((e.trigger === "click" && !R().contains(jn(x))) ||
            e.onClickoutside) &&
            s.handleClickOutside(x);
        }
        function R() {
          return s.getTriggerElement();
        }
        ot(yl, c), ot(Ss, null), ot(ws, null);
        function V() {
          if (
            (v == null || v.onRender(),
            !(
              e.displayDirective === "show" ||
              e.show ||
              (e.animated && u.value)
            ))
          )
            return null;
          let S;
          const M = s.internalRenderBodyRef.value,
            { value: C } = n;
          if (M)
            S = M(
              [
                `${C}-popover-shared`,
                v == null ? void 0 : v.themeClass.value,
                e.overlap && `${C}-popover-shared--overlap`,
                e.showArrow && `${C}-popover-shared--show-arrow`,
                e.arrowPointToCenter && `${C}-popover-shared--center-arrow`,
              ],
              c,
              p.value,
              g,
              T
            );
          else {
            const { value: _ } = s.extraClassRef,
              { internalTrapFocus: y } = e,
              K = !$a(t.header) || !$a(t.footer),
              H = () => {
                var q;
                const k = K
                    ? m(
                        Ye,
                        null,
                        Ut(t.header, (W) =>
                          W
                            ? m(
                                "div",
                                {
                                  class: `${C}-popover__header`,
                                  style: e.headerStyle,
                                },
                                W
                              )
                            : null
                        ),
                        Ut(t.default, (W) =>
                          W
                            ? m(
                                "div",
                                {
                                  class: `${C}-popover__content`,
                                  style: e.contentStyle,
                                },
                                t
                              )
                            : null
                        ),
                        Ut(t.footer, (W) =>
                          W
                            ? m(
                                "div",
                                {
                                  class: `${C}-popover__footer`,
                                  style: e.footerStyle,
                                },
                                W
                              )
                            : null
                        )
                      )
                    : e.scrollable
                    ? (q = t.default) === null || q === void 0
                      ? void 0
                      : q.call(t)
                    : m(
                        "div",
                        {
                          class: `${C}-popover__content`,
                          style: e.contentStyle,
                        },
                        t
                      ),
                  F = e.scrollable
                    ? m(
                        bh,
                        {
                          contentClass: K ? void 0 : `${C}-popover__content`,
                          contentStyle: K ? void 0 : e.contentStyle,
                        },
                        { default: () => k }
                      )
                    : k,
                  Q = e.showArrow
                    ? Sh({ arrowStyle: e.arrowStyle, clsPrefix: C })
                    : null;
                return [F, Q];
              };
            S = m(
              "div",
              $r(
                {
                  class: [
                    `${C}-popover`,
                    `${C}-popover-shared`,
                    v == null ? void 0 : v.themeClass.value,
                    _.map((q) => `${C}-${q}`),
                    {
                      [`${C}-popover--scrollable`]: e.scrollable,
                      [`${C}-popover--show-header-or-footer`]: K,
                      [`${C}-popover--raw`]: e.raw,
                      [`${C}-popover-shared--overlap`]: e.overlap,
                      [`${C}-popover-shared--show-arrow`]: e.showArrow,
                      [`${C}-popover-shared--center-arrow`]:
                        e.arrowPointToCenter,
                    },
                  ],
                  ref: c,
                  style: p.value,
                  onKeydown: s.handleKeydown,
                  onMouseenter: g,
                  onMouseleave: T,
                },
                o
              ),
              y ? m(O0, { active: e.show, autoFocus: !0 }, { default: H }) : H()
            );
          }
          return ln(S, h.value);
        }
        return {
          displayed: u,
          namespace: r,
          isMounted: s.isMountedRef,
          zIndex: s.zIndexRef,
          followerRef: a,
          adjustedTo: zo(e),
          followerEnabled: d,
          renderContentNode: V,
        };
      },
      render() {
        return m(
          zs,
          {
            ref: "followerRef",
            zIndex: this.zIndex,
            show: this.show,
            enabled: this.followerEnabled,
            to: this.adjustedTo,
            x: this.x,
            y: this.y,
            flip: this.flip,
            placement: this.placement,
            containerClass: this.namespace,
            overlap: this.overlap,
            width: this.width === "trigger" ? "target" : void 0,
            teleportDisabled: this.adjustedTo === zo.tdkey,
          },
          {
            default: () =>
              this.animated
                ? m(
                    vo,
                    {
                      name: "popover-transition",
                      appear: this.isMounted,
                      onEnter: () => {
                        this.followerEnabled = !0;
                      },
                      onAfterLeave: () => {
                        var e;
                        (e = this.internalOnAfterLeave) === null ||
                          e === void 0 ||
                          e.call(this),
                          (this.followerEnabled = !1),
                          (this.displayed = !1);
                      },
                    },
                    { default: this.renderContentNode }
                  )
                : this.renderContentNode(),
          }
        );
      },
    }),
    L2 = Object.keys(wh),
    W2 = {
      focus: ["onFocus", "onBlur"],
      click: ["onClick"],
      hover: ["onMouseenter", "onMouseleave"],
      manual: [],
      nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"],
    };
  function N2(e, t, o) {
    W2[t].forEach((r) => {
      e.props ? (e.props = Object.assign({}, e.props)) : (e.props = {});
      const n = e.props[r],
        i = o[r];
      n
        ? (e.props[r] = (...l) => {
            n(...l), i(...l);
          })
        : (e.props[r] = i);
    });
  }
  const j2 = kt("").type,
    Tl = {
      show: { type: Boolean, default: void 0 },
      defaultShow: Boolean,
      showArrow: { type: Boolean, default: !0 },
      trigger: { type: String, default: "hover" },
      delay: { type: Number, default: 100 },
      duration: { type: Number, default: 100 },
      raw: Boolean,
      placement: { type: String, default: "top" },
      x: Number,
      y: Number,
      arrowPointToCenter: Boolean,
      disabled: Boolean,
      getDisabled: Function,
      displayDirective: { type: String, default: "if" },
      arrowStyle: [String, Object],
      flip: { type: Boolean, default: !0 },
      animated: { type: Boolean, default: !0 },
      width: { type: [Number, String], default: void 0 },
      overlap: Boolean,
      keepAliveOnHover: { type: Boolean, default: !0 },
      zIndex: Number,
      to: zo.propTo,
      scrollable: Boolean,
      contentStyle: [Object, String],
      headerStyle: [Object, String],
      footerStyle: [Object, String],
      onClickoutside: Function,
      "onUpdate:show": [Function, Array],
      onUpdateShow: [Function, Array],
      internalDeactivateImmediately: Boolean,
      internalSyncTargetWithParent: Boolean,
      internalInheritedEventHandlers: { type: Array, default: () => [] },
      internalTrapFocus: Boolean,
      internalExtraClass: { type: Array, default: () => [] },
      onShow: [Function, Array],
      onHide: [Function, Array],
      arrow: { type: Boolean, default: void 0 },
      minWidth: Number,
      maxWidth: Number,
    },
    V2 = Object.assign(Object.assign(Object.assign({}, Ae.props), Tl), {
      internalOnAfterLeave: Function,
      internalRenderBody: Function,
    }),
    zl = ue({
      name: "Popover",
      inheritAttrs: !1,
      props: V2,
      __popover__: !0,
      setup(e) {
        const t = xl(),
          o = N(null),
          r = B(() => e.show),
          n = N(e.defaultShow),
          i = yr(r, n),
          l = ut(() => (e.disabled ? !1 : i.value)),
          a = () => {
            if (e.disabled) return !0;
            const { getDisabled: H } = e;
            return !!(H != null && H());
          },
          s = () => (a() ? !1 : i.value),
          c = Cl(e, ["arrow", "showArrow"]),
          d = B(() => (e.overlap ? !1 : c.value));
        let u = null;
        const h = N(null),
          p = N(null),
          f = ut(() => e.x !== void 0 && e.y !== void 0);
        function v(H) {
          const {
            "onUpdate:show": q,
            onUpdateShow: k,
            onShow: F,
            onHide: Q,
          } = e;
          (n.value = H),
            q && Re(q, H),
            k && Re(k, H),
            H && F && Re(F, !0),
            H && Q && Re(Q, !1);
        }
        function b() {
          u && u.syncPosition();
        }
        function g() {
          const { value: H } = h;
          H && (window.clearTimeout(H), (h.value = null));
        }
        function T() {
          const { value: H } = p;
          H && (window.clearTimeout(H), (p.value = null));
        }
        function O() {
          const H = a();
          if (e.trigger === "focus" && !H) {
            if (s()) return;
            v(!0);
          }
        }
        function P() {
          const H = a();
          if (e.trigger === "focus" && !H) {
            if (!s()) return;
            v(!1);
          }
        }
        function R() {
          const H = a();
          if (e.trigger === "hover" && !H) {
            if ((T(), h.value !== null || s())) return;
            const q = () => {
                v(!0), (h.value = null);
              },
              { delay: k } = e;
            k === 0 ? q() : (h.value = window.setTimeout(q, k));
          }
        }
        function V() {
          const H = a();
          if (e.trigger === "hover" && !H) {
            if ((g(), p.value !== null || !s())) return;
            const q = () => {
                v(!1), (p.value = null);
              },
              { duration: k } = e;
            k === 0 ? q() : (p.value = window.setTimeout(q, k));
          }
        }
        function x() {
          V();
        }
        function S(H) {
          var q;
          s() &&
            (e.trigger === "click" && (g(), T(), v(!1)),
            (q = e.onClickoutside) === null || q === void 0 || q.call(e, H));
        }
        function M() {
          if (e.trigger === "click" && !a()) {
            g(), T();
            const H = !s();
            v(H);
          }
        }
        function C(H) {
          e.internalTrapFocus && H.key === "Escape" && (g(), T(), v(!1));
        }
        function _(H) {
          n.value = H;
        }
        function y() {
          var H;
          return (H = o.value) === null || H === void 0 ? void 0 : H.targetRef;
        }
        function K(H) {
          u = H;
        }
        return (
          ot("NPopover", {
            getTriggerElement: y,
            handleKeydown: C,
            handleMouseEnter: R,
            handleMouseLeave: V,
            handleClickOutside: S,
            handleMouseMoveOutside: x,
            setBodyInstance: K,
            positionManuallyRef: f,
            isMountedRef: t,
            zIndexRef: ke(e, "zIndex"),
            extraClassRef: ke(e, "internalExtraClass"),
            internalRenderBodyRef: ke(e, "internalRenderBody"),
          }),
          po(() => {
            i.value && a() && v(!1);
          }),
          {
            binderInstRef: o,
            positionManually: f,
            mergedShowConsideringDisabledProp: l,
            uncontrolledShow: n,
            mergedShowArrow: d,
            getMergedShow: s,
            setShow: _,
            handleClick: M,
            handleMouseEnter: R,
            handleMouseLeave: V,
            handleFocus: O,
            handleBlur: P,
            syncPosition: b,
          }
        );
      },
      render() {
        var e;
        const { positionManually: t, $slots: o } = this;
        let r,
          n = !1;
        if (
          !t &&
          (o.activator ? (r = Nc(o, "activator")) : (r = Nc(o, "trigger")), r)
        ) {
          (r = Po(r)), (r = r.type === j2 ? m("span", [r]) : r);
          const i = {
            onClick: this.handleClick,
            onMouseenter: this.handleMouseEnter,
            onMouseleave: this.handleMouseLeave,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
          };
          if (!((e = r.type) === null || e === void 0) && e.__popover__)
            (n = !0),
              r.props ||
                (r.props = {
                  internalSyncTargetWithParent: !0,
                  internalInheritedEventHandlers: [],
                }),
              (r.props.internalSyncTargetWithParent = !0),
              r.props.internalInheritedEventHandlers
                ? (r.props.internalInheritedEventHandlers = [
                    i,
                    ...r.props.internalInheritedEventHandlers,
                  ])
                : (r.props.internalInheritedEventHandlers = [i]);
          else {
            const { internalInheritedEventHandlers: l } = this,
              a = [i, ...l],
              s = {
                onBlur: (c) => {
                  a.forEach((d) => {
                    d.onBlur(c);
                  });
                },
                onFocus: (c) => {
                  a.forEach((d) => {
                    d.onFocus(c);
                  });
                },
                onClick: (c) => {
                  a.forEach((d) => {
                    d.onClick(c);
                  });
                },
                onMouseenter: (c) => {
                  a.forEach((d) => {
                    d.onMouseenter(c);
                  });
                },
                onMouseleave: (c) => {
                  a.forEach((d) => {
                    d.onMouseleave(c);
                  });
                },
              };
            N2(r, l ? "nested" : t ? "manual" : this.trigger, s);
          }
        }
        return m(
          $s,
          {
            ref: "binderInstRef",
            syncTarget: !n,
            syncTargetWithParent: this.internalSyncTargetWithParent,
          },
          {
            default: () => {
              this.mergedShowConsideringDisabledProp;
              const i = this.getMergedShow();
              return [
                this.internalTrapFocus && i
                  ? ln(m("div", { style: { position: "fixed", inset: 0 } }), [
                      [xf, { enabled: i, zIndex: this.zIndex }],
                    ])
                  : null,
                t ? null : m(Ps, null, { default: () => r }),
                m(
                  D2,
                  Mn(
                    this.$props,
                    L2,
                    Object.assign(Object.assign({}, this.$attrs), {
                      showArrow: this.mergedShowArrow,
                      show: i,
                    })
                  ),
                  {
                    default: () => {
                      var l, a;
                      return (a = (l = this.$slots).default) === null ||
                        a === void 0
                        ? void 0
                        : a.call(l);
                    },
                    header: () => {
                      var l, a;
                      return (a = (l = this.$slots).header) === null ||
                        a === void 0
                        ? void 0
                        : a.call(l);
                    },
                    footer: () => {
                      var l, a;
                      return (a = (l = this.$slots).footer) === null ||
                        a === void 0
                        ? void 0
                        : a.call(l);
                    },
                  }
                ),
              ];
            },
          }
        );
      },
    }),
    $h = {
      closeIconSizeTiny: "12px",
      closeIconSizeSmall: "12px",
      closeIconSizeMedium: "14px",
      closeIconSizeLarge: "14px",
      closeSizeTiny: "16px",
      closeSizeSmall: "16px",
      closeSizeMedium: "18px",
      closeSizeLarge: "18px",
      padding: "0 7px",
      closeMargin: "0 0 0 4px",
      closeMarginRtl: "0 4px 0 0",
    },
    K2 = {
      name: "Tag",
      common: ce,
      self(e) {
        const {
          textColor2: t,
          primaryColorHover: o,
          primaryColorPressed: r,
          primaryColor: n,
          infoColor: i,
          successColor: l,
          warningColor: a,
          errorColor: s,
          baseColor: c,
          borderColor: d,
          tagColor: u,
          opacityDisabled: h,
          closeIconColor: p,
          closeIconColorHover: f,
          closeIconColorPressed: v,
          closeColorHover: b,
          closeColorPressed: g,
          borderRadiusSmall: T,
          fontSizeMini: O,
          fontSizeTiny: P,
          fontSizeSmall: R,
          fontSizeMedium: V,
          heightMini: x,
          heightTiny: S,
          heightSmall: M,
          heightMedium: C,
          buttonColor2Hover: _,
          buttonColor2Pressed: y,
          fontWeightStrong: K,
        } = e;
        return Object.assign(Object.assign({}, $h), {
          closeBorderRadius: T,
          heightTiny: x,
          heightSmall: S,
          heightMedium: M,
          heightLarge: C,
          borderRadius: T,
          opacityDisabled: h,
          fontSizeTiny: O,
          fontSizeSmall: P,
          fontSizeMedium: R,
          fontSizeLarge: V,
          fontWeightStrong: K,
          textColorCheckable: t,
          textColorHoverCheckable: t,
          textColorPressedCheckable: t,
          textColorChecked: c,
          colorCheckable: "#0000",
          colorHoverCheckable: _,
          colorPressedCheckable: y,
          colorChecked: n,
          colorCheckedHover: o,
          colorCheckedPressed: r,
          border: `1px solid ${d}`,
          textColor: t,
          color: u,
          colorBordered: "#0000",
          closeIconColor: p,
          closeIconColorHover: f,
          closeIconColorPressed: v,
          closeColorHover: b,
          closeColorPressed: g,
          borderPrimary: `1px solid ${te(n, { alpha: 0.3 })}`,
          textColorPrimary: n,
          colorPrimary: te(n, { alpha: 0.16 }),
          colorBorderedPrimary: "#0000",
          closeIconColorPrimary: ct(n, { lightness: 0.7 }),
          closeIconColorHoverPrimary: ct(n, { lightness: 0.7 }),
          closeIconColorPressedPrimary: ct(n, { lightness: 0.7 }),
          closeColorHoverPrimary: te(n, { alpha: 0.16 }),
          closeColorPressedPrimary: te(n, { alpha: 0.12 }),
          borderInfo: `1px solid ${te(i, { alpha: 0.3 })}`,
          textColorInfo: i,
          colorInfo: te(i, { alpha: 0.16 }),
          colorBorderedInfo: "#0000",
          closeIconColorInfo: ct(i, { alpha: 0.7 }),
          closeIconColorHoverInfo: ct(i, { alpha: 0.7 }),
          closeIconColorPressedInfo: ct(i, { alpha: 0.7 }),
          closeColorHoverInfo: te(i, { alpha: 0.16 }),
          closeColorPressedInfo: te(i, { alpha: 0.12 }),
          borderSuccess: `1px solid ${te(l, { alpha: 0.3 })}`,
          textColorSuccess: l,
          colorSuccess: te(l, { alpha: 0.16 }),
          colorBorderedSuccess: "#0000",
          closeIconColorSuccess: ct(l, { alpha: 0.7 }),
          closeIconColorHoverSuccess: ct(l, { alpha: 0.7 }),
          closeIconColorPressedSuccess: ct(l, { alpha: 0.7 }),
          closeColorHoverSuccess: te(l, { alpha: 0.16 }),
          closeColorPressedSuccess: te(l, { alpha: 0.12 }),
          borderWarning: `1px solid ${te(a, { alpha: 0.3 })}`,
          textColorWarning: a,
          colorWarning: te(a, { alpha: 0.16 }),
          colorBorderedWarning: "#0000",
          closeIconColorWarning: ct(a, { alpha: 0.7 }),
          closeIconColorHoverWarning: ct(a, { alpha: 0.7 }),
          closeIconColorPressedWarning: ct(a, { alpha: 0.7 }),
          closeColorHoverWarning: te(a, { alpha: 0.16 }),
          closeColorPressedWarning: te(a, { alpha: 0.11 }),
          borderError: `1px solid ${te(s, { alpha: 0.3 })}`,
          textColorError: s,
          colorError: te(s, { alpha: 0.16 }),
          colorBorderedError: "#0000",
          closeIconColorError: ct(s, { alpha: 0.7 }),
          closeIconColorHoverError: ct(s, { alpha: 0.7 }),
          closeIconColorPressedError: ct(s, { alpha: 0.7 }),
          closeColorHoverError: te(s, { alpha: 0.16 }),
          closeColorPressedError: te(s, { alpha: 0.12 }),
        });
      },
    },
    Ph = K2,
    U2 = (e) => {
      const {
        textColor2: t,
        primaryColorHover: o,
        primaryColorPressed: r,
        primaryColor: n,
        infoColor: i,
        successColor: l,
        warningColor: a,
        errorColor: s,
        baseColor: c,
        borderColor: d,
        opacityDisabled: u,
        tagColor: h,
        closeIconColor: p,
        closeIconColorHover: f,
        closeIconColorPressed: v,
        borderRadiusSmall: b,
        fontSizeMini: g,
        fontSizeTiny: T,
        fontSizeSmall: O,
        fontSizeMedium: P,
        heightMini: R,
        heightTiny: V,
        heightSmall: x,
        heightMedium: S,
        closeColorHover: M,
        closeColorPressed: C,
        buttonColor2Hover: _,
        buttonColor2Pressed: y,
        fontWeightStrong: K,
      } = e;
      return Object.assign(Object.assign({}, $h), {
        closeBorderRadius: b,
        heightTiny: R,
        heightSmall: V,
        heightMedium: x,
        heightLarge: S,
        borderRadius: b,
        opacityDisabled: u,
        fontSizeTiny: g,
        fontSizeSmall: T,
        fontSizeMedium: O,
        fontSizeLarge: P,
        fontWeightStrong: K,
        textColorCheckable: t,
        textColorHoverCheckable: t,
        textColorPressedCheckable: t,
        textColorChecked: c,
        colorCheckable: "#0000",
        colorHoverCheckable: _,
        colorPressedCheckable: y,
        colorChecked: n,
        colorCheckedHover: o,
        colorCheckedPressed: r,
        border: `1px solid ${d}`,
        textColor: t,
        color: h,
        colorBordered: "rgb(250, 250, 252)",
        closeIconColor: p,
        closeIconColorHover: f,
        closeIconColorPressed: v,
        closeColorHover: M,
        closeColorPressed: C,
        borderPrimary: `1px solid ${te(n, { alpha: 0.3 })}`,
        textColorPrimary: n,
        colorPrimary: te(n, { alpha: 0.12 }),
        colorBorderedPrimary: te(n, { alpha: 0.1 }),
        closeIconColorPrimary: n,
        closeIconColorHoverPrimary: n,
        closeIconColorPressedPrimary: n,
        closeColorHoverPrimary: te(n, { alpha: 0.12 }),
        closeColorPressedPrimary: te(n, { alpha: 0.18 }),
        borderInfo: `1px solid ${te(i, { alpha: 0.3 })}`,
        textColorInfo: i,
        colorInfo: te(i, { alpha: 0.12 }),
        colorBorderedInfo: te(i, { alpha: 0.1 }),
        closeIconColorInfo: i,
        closeIconColorHoverInfo: i,
        closeIconColorPressedInfo: i,
        closeColorHoverInfo: te(i, { alpha: 0.12 }),
        closeColorPressedInfo: te(i, { alpha: 0.18 }),
        borderSuccess: `1px solid ${te(l, { alpha: 0.3 })}`,
        textColorSuccess: l,
        colorSuccess: te(l, { alpha: 0.12 }),
        colorBorderedSuccess: te(l, { alpha: 0.1 }),
        closeIconColorSuccess: l,
        closeIconColorHoverSuccess: l,
        closeIconColorPressedSuccess: l,
        closeColorHoverSuccess: te(l, { alpha: 0.12 }),
        closeColorPressedSuccess: te(l, { alpha: 0.18 }),
        borderWarning: `1px solid ${te(a, { alpha: 0.35 })}`,
        textColorWarning: a,
        colorWarning: te(a, { alpha: 0.15 }),
        colorBorderedWarning: te(a, { alpha: 0.12 }),
        closeIconColorWarning: a,
        closeIconColorHoverWarning: a,
        closeIconColorPressedWarning: a,
        closeColorHoverWarning: te(a, { alpha: 0.12 }),
        closeColorPressedWarning: te(a, { alpha: 0.18 }),
        borderError: `1px solid ${te(s, { alpha: 0.23 })}`,
        textColorError: s,
        colorError: te(s, { alpha: 0.1 }),
        colorBorderedError: te(s, { alpha: 0.08 }),
        closeIconColorError: s,
        closeIconColorHoverError: s,
        closeIconColorPressedError: s,
        closeColorHoverError: te(s, { alpha: 0.12 }),
        closeColorPressedError: te(s, { alpha: 0.18 }),
      });
    },
    G2 = { name: "Tag", common: Et, self: U2 },
    q2 = G2,
    Y2 = {
      color: Object,
      type: { type: String, default: "default" },
      round: Boolean,
      size: { type: String, default: "medium" },
      closable: Boolean,
      disabled: { type: Boolean, default: void 0 },
    },
    X2 = U(
      "tag",
      `
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,
      [
        re(
          "strong",
          `
 font-weight: var(--n-font-weight-strong);
 `
        ),
        A(
          "border",
          `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `
        ),
        A(
          "icon",
          `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `
        ),
        A(
          "avatar",
          `
 display: flex;
 margin: 0 6px 0 0;
 `
        ),
        A(
          "close",
          `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
        ),
        re(
          "round",
          `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,
          [
            A(
              "icon",
              `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `
            ),
            A(
              "avatar",
              `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `
            ),
            re(
              "closable",
              `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `
            ),
          ]
        ),
        re("icon, avatar", [
          re(
            "round",
            `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `
          ),
        ]),
        re(
          "disabled",
          `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `
        ),
        re(
          "checkable",
          `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,
          [
            Je("disabled", [
              D(
                "&:hover",
                "background-color: var(--n-color-hover-checkable);",
                [Je("checked", "color: var(--n-text-color-hover-checkable);")]
              ),
              D(
                "&:active",
                "background-color: var(--n-color-pressed-checkable);",
                [Je("checked", "color: var(--n-text-color-pressed-checkable);")]
              ),
            ]),
            re(
              "checked",
              `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,
              [
                Je("disabled", [
                  D(
                    "&:hover",
                    "background-color: var(--n-color-checked-hover);"
                  ),
                  D(
                    "&:active",
                    "background-color: var(--n-color-checked-pressed);"
                  ),
                ]),
              ]
            ),
          ]
        ),
      ]
    ),
    Z2 = Object.assign(Object.assign(Object.assign({}, Ae.props), Y2), {
      bordered: { type: Boolean, default: void 0 },
      checked: Boolean,
      checkable: Boolean,
      strong: Boolean,
      triggerClickOnClose: Boolean,
      onClose: [Array, Function],
      onMouseenter: Function,
      onMouseleave: Function,
      "onUpdate:checked": Function,
      onUpdateChecked: Function,
      internalCloseFocusable: { type: Boolean, default: !0 },
      internalCloseIsButtonTag: { type: Boolean, default: !0 },
      onCheckedChange: Function,
    }),
    J2 = "n-tag",
    ca = ue({
      name: "Tag",
      props: Z2,
      setup(e) {
        const t = N(null),
          {
            mergedBorderedRef: o,
            mergedClsPrefixRef: r,
            inlineThemeDisabled: n,
            mergedRtlRef: i,
          } = yt(e),
          l = Ae("Tag", "-tag", X2, q2, e, r);
        ot(J2, { roundRef: ke(e, "round") });
        function a(p) {
          if (!e.disabled && e.checkable) {
            const {
              checked: f,
              onCheckedChange: v,
              onUpdateChecked: b,
              "onUpdate:checked": g,
            } = e;
            b && b(!f), g && g(!f), v && v(!f);
          }
        }
        function s(p) {
          if ((e.triggerClickOnClose || p.stopPropagation(), !e.disabled)) {
            const { onClose: f } = e;
            f && Re(f, p);
          }
        }
        const c = {
            setTextContent(p) {
              const { value: f } = t;
              f && (f.textContent = p);
            },
          },
          d = un("Tag", i, r),
          u = B(() => {
            const {
                type: p,
                size: f,
                color: { color: v, textColor: b } = {},
              } = e,
              {
                common: { cubicBezierEaseInOut: g },
                self: {
                  padding: T,
                  closeMargin: O,
                  closeMarginRtl: P,
                  borderRadius: R,
                  opacityDisabled: V,
                  textColorCheckable: x,
                  textColorHoverCheckable: S,
                  textColorPressedCheckable: M,
                  textColorChecked: C,
                  colorCheckable: _,
                  colorHoverCheckable: y,
                  colorPressedCheckable: K,
                  colorChecked: H,
                  colorCheckedHover: q,
                  colorCheckedPressed: k,
                  closeBorderRadius: F,
                  fontWeightStrong: Q,
                  [de("colorBordered", p)]: W,
                  [de("closeSize", f)]: ee,
                  [de("closeIconSize", f)]: ve,
                  [de("fontSize", f)]: ae,
                  [de("height", f)]: he,
                  [de("color", p)]: We,
                  [de("textColor", p)]: He,
                  [de("border", p)]: ze,
                  [de("closeIconColor", p)]: $e,
                  [de("closeIconColorHover", p)]: Ve,
                  [de("closeIconColorPressed", p)]: ge,
                  [de("closeColorHover", p)]: Ue,
                  [de("closeColorPressed", p)]: at,
                },
              } = l.value;
            return {
              "--n-font-weight-strong": Q,
              "--n-avatar-size-override": `calc(${he} - 8px)`,
              "--n-bezier": g,
              "--n-border-radius": R,
              "--n-border": ze,
              "--n-close-icon-size": ve,
              "--n-close-color-pressed": at,
              "--n-close-color-hover": Ue,
              "--n-close-border-radius": F,
              "--n-close-icon-color": $e,
              "--n-close-icon-color-hover": Ve,
              "--n-close-icon-color-pressed": ge,
              "--n-close-icon-color-disabled": $e,
              "--n-close-margin": O,
              "--n-close-margin-rtl": P,
              "--n-close-size": ee,
              "--n-color": v || (o.value ? W : We),
              "--n-color-checkable": _,
              "--n-color-checked": H,
              "--n-color-checked-hover": q,
              "--n-color-checked-pressed": k,
              "--n-color-hover-checkable": y,
              "--n-color-pressed-checkable": K,
              "--n-font-size": ae,
              "--n-height": he,
              "--n-opacity-disabled": V,
              "--n-padding": T,
              "--n-text-color": b || He,
              "--n-text-color-checkable": x,
              "--n-text-color-checked": C,
              "--n-text-color-hover-checkable": S,
              "--n-text-color-pressed-checkable": M,
            };
          }),
          h = n
            ? wt(
                "tag",
                B(() => {
                  let p = "";
                  const {
                    type: f,
                    size: v,
                    color: { color: b, textColor: g } = {},
                  } = e;
                  return (
                    (p += f[0]),
                    (p += v[0]),
                    b && (p += `a${Ui(b)}`),
                    g && (p += `b${Ui(g)}`),
                    o.value && (p += "c"),
                    p
                  );
                }),
                u,
                e
              )
            : void 0;
        return Object.assign(Object.assign({}, c), {
          rtlEnabled: d,
          mergedClsPrefix: r,
          contentRef: t,
          mergedBordered: o,
          handleClick: a,
          handleCloseClick: s,
          cssVars: n ? void 0 : u,
          themeClass: h == null ? void 0 : h.themeClass,
          onRender: h == null ? void 0 : h.onRender,
        });
      },
      render() {
        var e, t;
        const {
          mergedClsPrefix: o,
          rtlEnabled: r,
          closable: n,
          color: { borderColor: i } = {},
          round: l,
          onRender: a,
          $slots: s,
        } = this;
        a == null || a();
        const c = Ut(
            s.avatar,
            (u) => u && m("div", { class: `${o}-tag__avatar` }, u)
          ),
          d = Ut(s.icon, (u) => u && m("div", { class: `${o}-tag__icon` }, u));
        return m(
          "div",
          {
            class: [
              `${o}-tag`,
              this.themeClass,
              {
                [`${o}-tag--rtl`]: r,
                [`${o}-tag--strong`]: this.strong,
                [`${o}-tag--disabled`]: this.disabled,
                [`${o}-tag--checkable`]: this.checkable,
                [`${o}-tag--checked`]: this.checkable && this.checked,
                [`${o}-tag--round`]: l,
                [`${o}-tag--avatar`]: c,
                [`${o}-tag--icon`]: d,
                [`${o}-tag--closable`]: n,
              },
            ],
            style: this.cssVars,
            onClick: this.handleClick,
            onMouseenter: this.onMouseenter,
            onMouseleave: this.onMouseleave,
          },
          d || c,
          m(
            "span",
            { class: `${o}-tag__content`, ref: "contentRef" },
            (t = (e = this.$slots).default) === null || t === void 0
              ? void 0
              : t.call(e)
          ),
          !this.checkable && n
            ? m(OS, {
                clsPrefix: o,
                class: `${o}-tag__close`,
                disabled: this.disabled,
                onClick: this.handleCloseClick,
                focusable: this.internalCloseFocusable,
                round: l,
                isButtonTag: this.internalCloseIsButtonTag,
                absolute: !0,
              })
            : null,
          !this.checkable && this.mergedBordered
            ? m("div", { class: `${o}-tag__border`, style: { borderColor: i } })
            : null
        );
      },
    }),
    Q2 = U(
      "base-clear",
      `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,
      [
        D(">", [
          A(
            "clear",
            `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,
            [
              D(
                "&:hover",
                `
 color: var(--n-clear-color-hover)!important;
 `
              ),
              D(
                "&:active",
                `
 color: var(--n-clear-color-pressed)!important;
 `
              ),
            ]
          ),
          A(
            "placeholder",
            `
 display: flex;
 `
          ),
          A(
            "clear, placeholder",
            `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,
            [
              ol({
                originalTransform: "translateX(-50%) translateY(-50%)",
                left: "50%",
                top: "50%",
              }),
            ]
          ),
        ]),
      ]
    ),
    Da = ue({
      name: "BaseClear",
      props: {
        clsPrefix: { type: String, required: !0 },
        show: Boolean,
        onClear: Function,
      },
      setup(e) {
        return (
          _r("-base-clear", Q2, ke(e, "clsPrefix")),
          {
            handleMouseDown(t) {
              t.preventDefault();
            },
          }
        );
      },
      render() {
        const { clsPrefix: e } = this;
        return m(
          "div",
          { class: `${e}-base-clear` },
          m(js, null, {
            default: () => {
              var t, o;
              return this.show
                ? m(
                    "div",
                    {
                      key: "dismiss",
                      class: `${e}-base-clear__clear`,
                      onClick: this.onClear,
                      onMousedown: this.handleMouseDown,
                      "data-clear": !0,
                    },
                    Kr(this.$slots.icon, () => [
                      m(qo, { clsPrefix: e }, { default: () => m(MS, null) }),
                    ])
                  )
                : m(
                    "div",
                    { key: "icon", class: `${e}-base-clear__placeholder` },
                    (o = (t = this.$slots).placeholder) === null || o === void 0
                      ? void 0
                      : o.call(t)
                  );
            },
          })
        );
      },
    }),
    Th = ue({
      name: "InternalSelectionSuffix",
      props: {
        clsPrefix: { type: String, required: !0 },
        showArrow: { type: Boolean, default: void 0 },
        showClear: { type: Boolean, default: void 0 },
        loading: { type: Boolean, default: !1 },
        onClear: Function,
      },
      setup(e, { slots: t }) {
        return () => {
          const { clsPrefix: o } = e;
          return m(
            Vs,
            {
              clsPrefix: o,
              class: `${o}-base-suffix`,
              strokeWidth: 24,
              scale: 0.85,
              show: e.loading,
            },
            {
              default: () =>
                e.showArrow
                  ? m(
                      Da,
                      { clsPrefix: o, show: e.showClear, onClear: e.onClear },
                      {
                        placeholder: () =>
                          m(
                            qo,
                            { clsPrefix: o, class: `${o}-base-suffix__arrow` },
                            {
                              default: () => Kr(t.default, () => [m(_S, null)]),
                            }
                          ),
                      }
                    )
                  : null,
            }
          );
        };
      },
    }),
    zh = {
      paddingSingle: "0 26px 0 12px",
      paddingMultiple: "3px 26px 0 12px",
      clearSize: "16px",
      arrowSize: "16px",
    },
    e$ = (e) => {
      const {
        borderRadius: t,
        textColor2: o,
        textColorDisabled: r,
        inputColor: n,
        inputColorDisabled: i,
        primaryColor: l,
        primaryColorHover: a,
        warningColor: s,
        warningColorHover: c,
        errorColor: d,
        errorColorHover: u,
        borderColor: h,
        iconColor: p,
        iconColorDisabled: f,
        clearColor: v,
        clearColorHover: b,
        clearColorPressed: g,
        placeholderColor: T,
        placeholderColorDisabled: O,
        fontSizeTiny: P,
        fontSizeSmall: R,
        fontSizeMedium: V,
        fontSizeLarge: x,
        heightTiny: S,
        heightSmall: M,
        heightMedium: C,
        heightLarge: _,
      } = e;
      return Object.assign(Object.assign({}, zh), {
        fontSizeTiny: P,
        fontSizeSmall: R,
        fontSizeMedium: V,
        fontSizeLarge: x,
        heightTiny: S,
        heightSmall: M,
        heightMedium: C,
        heightLarge: _,
        borderRadius: t,
        textColor: o,
        textColorDisabled: r,
        placeholderColor: T,
        placeholderColorDisabled: O,
        color: n,
        colorDisabled: i,
        colorActive: n,
        border: `1px solid ${h}`,
        borderHover: `1px solid ${a}`,
        borderActive: `1px solid ${l}`,
        borderFocus: `1px solid ${a}`,
        boxShadowHover: "none",
        boxShadowActive: `0 0 0 2px ${te(l, { alpha: 0.2 })}`,
        boxShadowFocus: `0 0 0 2px ${te(l, { alpha: 0.2 })}`,
        caretColor: l,
        arrowColor: p,
        arrowColorDisabled: f,
        loadingColor: l,
        borderWarning: `1px solid ${s}`,
        borderHoverWarning: `1px solid ${c}`,
        borderActiveWarning: `1px solid ${s}`,
        borderFocusWarning: `1px solid ${c}`,
        boxShadowHoverWarning: "none",
        boxShadowActiveWarning: `0 0 0 2px ${te(s, { alpha: 0.2 })}`,
        boxShadowFocusWarning: `0 0 0 2px ${te(s, { alpha: 0.2 })}`,
        colorActiveWarning: n,
        caretColorWarning: s,
        borderError: `1px solid ${d}`,
        borderHoverError: `1px solid ${u}`,
        borderActiveError: `1px solid ${d}`,
        borderFocusError: `1px solid ${u}`,
        boxShadowHoverError: "none",
        boxShadowActiveError: `0 0 0 2px ${te(d, { alpha: 0.2 })}`,
        boxShadowFocusError: `0 0 0 2px ${te(d, { alpha: 0.2 })}`,
        colorActiveError: n,
        caretColorError: d,
        clearColor: v,
        clearColorHover: b,
        clearColorPressed: g,
      });
    },
    t$ = {
      name: "InternalSelection",
      common: Et,
      peers: { Popover: Pl },
      self: e$,
    },
    Ih = t$,
    o$ = {
      name: "InternalSelection",
      common: ce,
      peers: { Popover: kr },
      self(e) {
        const {
          borderRadius: t,
          textColor2: o,
          textColorDisabled: r,
          inputColor: n,
          inputColorDisabled: i,
          primaryColor: l,
          primaryColorHover: a,
          warningColor: s,
          warningColorHover: c,
          errorColor: d,
          errorColorHover: u,
          iconColor: h,
          iconColorDisabled: p,
          clearColor: f,
          clearColorHover: v,
          clearColorPressed: b,
          placeholderColor: g,
          placeholderColorDisabled: T,
          fontSizeTiny: O,
          fontSizeSmall: P,
          fontSizeMedium: R,
          fontSizeLarge: V,
          heightTiny: x,
          heightSmall: S,
          heightMedium: M,
          heightLarge: C,
        } = e;
        return Object.assign(Object.assign({}, zh), {
          fontSizeTiny: O,
          fontSizeSmall: P,
          fontSizeMedium: R,
          fontSizeLarge: V,
          heightTiny: x,
          heightSmall: S,
          heightMedium: M,
          heightLarge: C,
          borderRadius: t,
          textColor: o,
          textColorDisabled: r,
          placeholderColor: g,
          placeholderColorDisabled: T,
          color: n,
          colorDisabled: i,
          colorActive: te(l, { alpha: 0.1 }),
          border: "1px solid #0000",
          borderHover: `1px solid ${a}`,
          borderActive: `1px solid ${l}`,
          borderFocus: `1px solid ${a}`,
          boxShadowHover: "none",
          boxShadowActive: `0 0 8px 0 ${te(l, { alpha: 0.4 })}`,
          boxShadowFocus: `0 0 8px 0 ${te(l, { alpha: 0.4 })}`,
          caretColor: l,
          arrowColor: h,
          arrowColorDisabled: p,
          loadingColor: l,
          borderWarning: `1px solid ${s}`,
          borderHoverWarning: `1px solid ${c}`,
          borderActiveWarning: `1px solid ${s}`,
          borderFocusWarning: `1px solid ${c}`,
          boxShadowHoverWarning: "none",
          boxShadowActiveWarning: `0 0 8px 0 ${te(s, { alpha: 0.4 })}`,
          boxShadowFocusWarning: `0 0 8px 0 ${te(s, { alpha: 0.4 })}`,
          colorActiveWarning: te(s, { alpha: 0.1 }),
          caretColorWarning: s,
          borderError: `1px solid ${d}`,
          borderHoverError: `1px solid ${u}`,
          borderActiveError: `1px solid ${d}`,
          borderFocusError: `1px solid ${u}`,
          boxShadowHoverError: "none",
          boxShadowActiveError: `0 0 8px 0 ${te(d, { alpha: 0.4 })}`,
          boxShadowFocusError: `0 0 8px 0 ${te(d, { alpha: 0.4 })}`,
          colorActiveError: te(d, { alpha: 0.1 }),
          caretColorError: d,
          clearColor: f,
          clearColorHover: v,
          clearColorPressed: b,
        });
      },
    },
    Zs = o$,
    r$ = D([
      U(
        "base-selection",
        `
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,
        [
          U(
            "base-loading",
            `
 color: var(--n-loading-color);
 `
          ),
          U("base-selection-tags", "min-height: var(--n-height);"),
          A(
            "border, state-border",
            `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `
          ),
          A(
            "state-border",
            `
 z-index: 1;
 border-color: #0000;
 `
          ),
          U(
            "base-suffix",
            `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,
            [
              A(
                "arrow",
                `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `
              ),
            ]
          ),
          U(
            "base-selection-overlay",
            `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,
            [
              A(
                "wrapper",
                `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `
              ),
            ]
          ),
          U(
            "base-selection-placeholder",
            `
 color: var(--n-placeholder-color);
 `,
            [
              A(
                "inner",
                `
 max-width: 50%;
 overflow: hidden;
 `
              ),
            ]
          ),
          U(
            "base-selection-tags",
            `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `
          ),
          U(
            "base-selection-label",
            `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,
            [
              U(
                "base-selection-input",
                `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,
                [
                  A(
                    "content",
                    `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `
                  ),
                ]
              ),
              A(
                "render-label",
                `
 color: var(--n-text-color);
 `
              ),
            ]
          ),
          Je("disabled", [
            D("&:hover", [
              A(
                "state-border",
                `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `
              ),
            ]),
            re("focus", [
              A(
                "state-border",
                `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `
              ),
            ]),
            re("active", [
              A(
                "state-border",
                `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `
              ),
              U(
                "base-selection-label",
                "background-color: var(--n-color-active);"
              ),
              U(
                "base-selection-tags",
                "background-color: var(--n-color-active);"
              ),
            ]),
          ]),
          re("disabled", "cursor: not-allowed;", [
            A(
              "arrow",
              `
 color: var(--n-arrow-color-disabled);
 `
            ),
            U(
              "base-selection-label",
              `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,
              [
                U(
                  "base-selection-input",
                  `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `
                ),
                A(
                  "render-label",
                  `
 color: var(--n-text-color-disabled);
 `
                ),
              ]
            ),
            U(
              "base-selection-tags",
              `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `
            ),
            U(
              "base-selection-placeholder",
              `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `
            ),
          ]),
          U(
            "base-selection-input-tag",
            `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 50%;
 vertical-align: bottom;
 `,
            [
              A(
                "input",
                `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 50%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `
              ),
              A(
                "mirror",
                `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `
              ),
            ]
          ),
          ["warning", "error"].map((e) =>
            re(`${e}-status`, [
              A("state-border", `border: var(--n-border-${e});`),
              Je("disabled", [
                D("&:hover", [
                  A(
                    "state-border",
                    `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `
                  ),
                ]),
                re("active", [
                  A(
                    "state-border",
                    `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `
                  ),
                  U(
                    "base-selection-label",
                    `background-color: var(--n-color-active-${e});`
                  ),
                  U(
                    "base-selection-tags",
                    `background-color: var(--n-color-active-${e});`
                  ),
                ]),
                re("focus", [
                  A(
                    "state-border",
                    `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `
                  ),
                ]),
              ]),
            ])
          ),
        ]
      ),
      U(
        "base-selection-popover",
        `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `
      ),
      U(
        "base-selection-tag-wrapper",
        `
 max-width: 50%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,
        [
          D("&:last-child", "padding-right: 0;"),
          U(
            "tag",
            `
 font-size: 14px;
 max-width: 50%;
 `,
            [
              A(
                "content",
                `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `
              ),
            ]
          ),
        ]
      ),
    ]),
    n$ = ue({
      name: "InternalSelection",
      props: Object.assign(Object.assign({}, Ae.props), {
        clsPrefix: { type: String, required: !0 },
        bordered: { type: Boolean, default: void 0 },
        active: Boolean,
        pattern: { type: String, default: "" },
        placeholder: String,
        selectedOption: { type: Object, default: null },
        selectedOptions: { type: Array, default: null },
        labelField: { type: String, default: "label" },
        valueField: { type: String, default: "value" },
        multiple: Boolean,
        filterable: Boolean,
        clearable: Boolean,
        disabled: Boolean,
        size: { type: String, default: "medium" },
        loading: Boolean,
        autofocus: Boolean,
        showArrow: { type: Boolean, default: !0 },
        inputProps: Object,
        focused: Boolean,
        renderTag: Function,
        onKeydown: Function,
        onClick: Function,
        onBlur: Function,
        onFocus: Function,
        onDeleteOption: Function,
        maxTagCount: [String, Number],
        onClear: Function,
        onPatternInput: Function,
        onPatternFocus: Function,
        onPatternBlur: Function,
        renderLabel: Function,
        status: String,
        inlineThemeDisabled: Boolean,
        ignoreComposition: { type: Boolean, default: !0 },
        onResize: Function,
      }),
      setup(e) {
        const t = N(null),
          o = N(null),
          r = N(null),
          n = N(null),
          i = N(null),
          l = N(null),
          a = N(null),
          s = N(null),
          c = N(null),
          d = N(null),
          u = N(!1),
          h = N(!1),
          p = N(!1),
          f = Ae(
            "InternalSelection",
            "-internal-selection",
            r$,
            Ih,
            e,
            ke(e, "clsPrefix")
          ),
          v = B(() => e.clearable && !e.disabled && (p.value || e.active)),
          b = B(() =>
            e.selectedOption
              ? e.renderTag
                ? e.renderTag({
                    option: e.selectedOption,
                    handleClose: () => {},
                  })
                : e.renderLabel
                ? e.renderLabel(e.selectedOption, !0)
                : It(e.selectedOption[e.labelField], e.selectedOption, !0)
              : e.placeholder
          ),
          g = B(() => {
            const z = e.selectedOption;
            if (z) return z[e.labelField];
          }),
          T = B(() =>
            e.multiple
              ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length)
              : e.selectedOption !== null
          );
        function O() {
          var z;
          const { value: G } = t;
          if (G) {
            const { value: ie } = o;
            ie &&
              ((ie.style.width = `${G.offsetWidth}px`),
              e.maxTagCount !== "responsive" &&
                ((z = c.value) === null || z === void 0 || z.sync()));
          }
        }
        function P() {
          const { value: z } = d;
          z && (z.style.display = "none");
        }
        function R() {
          const { value: z } = d;
          z && (z.style.display = "inline-block");
        }
        rt(ke(e, "active"), (z) => {
          z || P();
        }),
          rt(ke(e, "pattern"), () => {
            e.multiple && $o(O);
          });
        function V(z) {
          const { onFocus: G } = e;
          G && G(z);
        }
        function x(z) {
          const { onBlur: G } = e;
          G && G(z);
        }
        function S(z) {
          const { onDeleteOption: G } = e;
          G && G(z);
        }
        function M(z) {
          const { onClear: G } = e;
          G && G(z);
        }
        function C(z) {
          const { onPatternInput: G } = e;
          G && G(z);
        }
        function _(z) {
          var G;
          (!z.relatedTarget ||
            !(
              !((G = r.value) === null || G === void 0) &&
              G.contains(z.relatedTarget)
            )) &&
            V(z);
        }
        function y(z) {
          var G;
          (!((G = r.value) === null || G === void 0) &&
            G.contains(z.relatedTarget)) ||
            x(z);
        }
        function K(z) {
          M(z);
        }
        function H() {
          p.value = !0;
        }
        function q() {
          p.value = !1;
        }
        function k(z) {
          !e.active ||
            !e.filterable ||
            (z.target !== o.value && z.preventDefault());
        }
        function F(z) {
          S(z);
        }
        function Q(z) {
          if (z.key === "Backspace" && !W.value && !e.pattern.length) {
            const { selectedOptions: G } = e;
            G != null && G.length && F(G[G.length - 1]);
          }
        }
        const W = N(!1);
        let ee = null;
        function ve(z) {
          const { value: G } = t;
          if (G) {
            const ie = z.target.value;
            (G.textContent = ie), O();
          }
          e.ignoreComposition && W.value ? (ee = z) : C(z);
        }
        function ae() {
          W.value = !0;
        }
        function he() {
          (W.value = !1), e.ignoreComposition && C(ee), (ee = null);
        }
        function We(z) {
          var G;
          (h.value = !0),
            (G = e.onPatternFocus) === null || G === void 0 || G.call(e, z);
        }
        function He(z) {
          var G;
          (h.value = !1),
            (G = e.onPatternBlur) === null || G === void 0 || G.call(e, z);
        }
        function ze() {
          var z, G;
          if (e.filterable)
            (h.value = !1),
              (z = l.value) === null || z === void 0 || z.blur(),
              (G = o.value) === null || G === void 0 || G.blur();
          else if (e.multiple) {
            const { value: ie } = n;
            ie == null || ie.blur();
          } else {
            const { value: ie } = i;
            ie == null || ie.blur();
          }
        }
        function $e() {
          var z, G, ie;
          e.filterable
            ? ((h.value = !1),
              (z = l.value) === null || z === void 0 || z.focus())
            : e.multiple
            ? (G = n.value) === null || G === void 0 || G.focus()
            : (ie = i.value) === null || ie === void 0 || ie.focus();
        }
        function Ve() {
          const { value: z } = o;
          z && (R(), z.focus());
        }
        function ge() {
          const { value: z } = o;
          z && z.blur();
        }
        function Ue(z) {
          const { value: G } = a;
          G && G.setTextContent(`+${z}`);
        }
        function at() {
          const { value: z } = s;
          return z;
        }
        function w() {
          return o.value;
        }
        let I = null;
        function L() {
          I !== null && window.clearTimeout(I);
        }
        function X() {
          e.disabled ||
            e.active ||
            (L(),
            (I = window.setTimeout(() => {
              T.value && (u.value = !0);
            }, 100)));
        }
        function Z() {
          L();
        }
        function ne(z) {
          z || (L(), (u.value = !1));
        }
        rt(T, (z) => {
          z || (u.value = !1);
        }),
          _t(() => {
            po(() => {
              const z = l.value;
              z && (z.tabIndex = e.disabled || h.value ? -1 : 0);
            });
          }),
          kf(r, e.onResize);
        const { inlineThemeDisabled: se } = e,
          oe = B(() => {
            const { size: z } = e,
              {
                common: { cubicBezierEaseInOut: G },
                self: {
                  borderRadius: ie,
                  color: fe,
                  placeholderColor: ye,
                  textColor: _e,
                  paddingSingle: De,
                  paddingMultiple: Fe,
                  caretColor: Ke,
                  colorDisabled: st,
                  textColorDisabled: mt,
                  placeholderColorDisabled: no,
                  colorActive: Rt,
                  boxShadowFocus: St,
                  boxShadowActive: Ge,
                  boxShadowHover: $,
                  border: j,
                  borderFocus: le,
                  borderHover: me,
                  borderActive: xe,
                  arrowColor: Pe,
                  arrowColorDisabled: Ie,
                  loadingColor: Ee,
                  colorActiveWarning: bt,
                  boxShadowFocusWarning: Xt,
                  boxShadowActiveWarning: Er,
                  boxShadowHoverWarning: Rr,
                  borderWarning: Ml,
                  borderFocusWarning: kl,
                  borderHoverWarning: si,
                  borderActiveWarning: Eo,
                  colorActiveError: E,
                  boxShadowFocusError: J,
                  boxShadowActiveError: Se,
                  boxShadowHoverError: Xe,
                  borderError: it,
                  borderFocusError: qe,
                  borderHoverError: mo,
                  borderActiveError: bo,
                  clearColor: xo,
                  clearColorHover: Zo,
                  clearColorPressed: Jo,
                  clearSize: pn,
                  arrowSize: El,
                  [de("height", z)]: Rl,
                  [de("fontSize", z)]: Ol,
                },
              } = f.value;
            return {
              "--n-bezier": G,
              "--n-border": j,
              "--n-border-active": xe,
              "--n-border-focus": le,
              "--n-border-hover": me,
              "--n-border-radius": ie,
              "--n-box-shadow-active": Ge,
              "--n-box-shadow-focus": St,
              "--n-box-shadow-hover": $,
              "--n-caret-color": Ke,
              "--n-color": fe,
              "--n-color-active": Rt,
              "--n-color-disabled": st,
              "--n-font-size": Ol,
              "--n-height": Rl,
              "--n-padding-single": De,
              "--n-padding-multiple": Fe,
              "--n-placeholder-color": ye,
              "--n-placeholder-color-disabled": no,
              "--n-text-color": _e,
              "--n-text-color-disabled": mt,
              "--n-arrow-color": Pe,
              "--n-arrow-color-disabled": Ie,
              "--n-loading-color": Ee,
              "--n-color-active-warning": bt,
              "--n-box-shadow-focus-warning": Xt,
              "--n-box-shadow-active-warning": Er,
              "--n-box-shadow-hover-warning": Rr,
              "--n-border-warning": Ml,
              "--n-border-focus-warning": kl,
              "--n-border-hover-warning": si,
              "--n-border-active-warning": Eo,
              "--n-color-active-error": E,
              "--n-box-shadow-focus-error": J,
              "--n-box-shadow-active-error": Se,
              "--n-box-shadow-hover-error": Xe,
              "--n-border-error": it,
              "--n-border-focus-error": qe,
              "--n-border-hover-error": mo,
              "--n-border-active-error": bo,
              "--n-clear-size": pn,
              "--n-clear-color": xo,
              "--n-clear-color-hover": Zo,
              "--n-clear-color-pressed": Jo,
              "--n-arrow-size": El,
            };
          }),
          Y = se
            ? wt(
                "internal-selection",
                B(() => e.size[0]),
                oe,
                e
              )
            : void 0;
        return {
          mergedTheme: f,
          mergedClearable: v,
          patternInputFocused: h,
          filterablePlaceholder: b,
          label: g,
          selected: T,
          showTagsPanel: u,
          isComposing: W,
          counterRef: a,
          counterWrapperRef: s,
          patternInputMirrorRef: t,
          patternInputRef: o,
          selfRef: r,
          multipleElRef: n,
          singleElRef: i,
          patternInputWrapperRef: l,
          overflowRef: c,
          inputTagElRef: d,
          handleMouseDown: k,
          handleFocusin: _,
          handleClear: K,
          handleMouseEnter: H,
          handleMouseLeave: q,
          handleDeleteOption: F,
          handlePatternKeyDown: Q,
          handlePatternInputInput: ve,
          handlePatternInputBlur: He,
          handlePatternInputFocus: We,
          handleMouseEnterCounter: X,
          handleMouseLeaveCounter: Z,
          handleFocusout: y,
          handleCompositionEnd: he,
          handleCompositionStart: ae,
          onPopoverUpdateShow: ne,
          focus: $e,
          focusInput: Ve,
          blur: ze,
          blurInput: ge,
          updateCounter: Ue,
          getCounter: at,
          getTail: w,
          renderLabel: e.renderLabel,
          cssVars: se ? void 0 : oe,
          themeClass: Y == null ? void 0 : Y.themeClass,
          onRender: Y == null ? void 0 : Y.onRender,
        };
      },
      render() {
        const {
          status: e,
          multiple: t,
          size: o,
          disabled: r,
          filterable: n,
          maxTagCount: i,
          bordered: l,
          clsPrefix: a,
          onRender: s,
          renderTag: c,
          renderLabel: d,
        } = this;
        s == null || s();
        const u = i === "responsive",
          h = typeof i == "number",
          p = u || h,
          f = m(Pa, null, {
            default: () =>
              m(
                Th,
                {
                  clsPrefix: a,
                  loading: this.loading,
                  showArrow: this.showArrow,
                  showClear: this.mergedClearable && this.selected,
                  onClear: this.handleClear,
                },
                {
                  default: () => {
                    var b, g;
                    return (g = (b = this.$slots).arrow) === null ||
                      g === void 0
                      ? void 0
                      : g.call(b);
                  },
                }
              ),
          });
        let v;
        if (t) {
          const { labelField: b } = this,
            g = (y) =>
              m(
                "div",
                { class: `${a}-base-selection-tag-wrapper`, key: y.value },
                c
                  ? c({
                      option: y,
                      handleClose: () => this.handleDeleteOption(y),
                    })
                  : m(
                      ca,
                      {
                        size: o,
                        closable: !y.disabled,
                        disabled: r,
                        onClose: () => this.handleDeleteOption(y),
                        internalCloseIsButtonTag: !1,
                        internalCloseFocusable: !1,
                      },
                      { default: () => (d ? d(y, !0) : It(y[b], y, !0)) }
                    )
              ),
            T = () =>
              (h ? this.selectedOptions.slice(0, i) : this.selectedOptions).map(
                g
              ),
            O = n
              ? m(
                  "div",
                  {
                    class: `${a}-base-selection-input-tag`,
                    ref: "inputTagElRef",
                    key: "__input-tag__",
                  },
                  m(
                    "input",
                    Object.assign({}, this.inputProps, {
                      ref: "patternInputRef",
                      tabindex: -1,
                      disabled: r,
                      value: this.pattern,
                      autofocus: this.autofocus,
                      class: `${a}-base-selection-input-tag__input`,
                      onBlur: this.handlePatternInputBlur,
                      onFocus: this.handlePatternInputFocus,
                      onKeydown: this.handlePatternKeyDown,
                      onInput: this.handlePatternInputInput,
                      onCompositionstart: this.handleCompositionStart,
                      onCompositionend: this.handleCompositionEnd,
                    })
                  ),
                  m(
                    "span",
                    {
                      ref: "patternInputMirrorRef",
                      class: `${a}-base-selection-input-tag__mirror`,
                    },
                    this.pattern
                  )
                )
              : null,
            P = u
              ? () =>
                  m(
                    "div",
                    {
                      class: `${a}-base-selection-tag-wrapper`,
                      ref: "counterWrapperRef",
                    },
                    m(ca, {
                      size: o,
                      ref: "counterRef",
                      onMouseenter: this.handleMouseEnterCounter,
                      onMouseleave: this.handleMouseLeaveCounter,
                      disabled: r,
                    })
                  )
              : void 0;
          let R;
          if (h) {
            const y = this.selectedOptions.length - i;
            y > 0 &&
              (R = m(
                "div",
                {
                  class: `${a}-base-selection-tag-wrapper`,
                  key: "__counter__",
                },
                m(
                  ca,
                  {
                    size: o,
                    ref: "counterRef",
                    onMouseenter: this.handleMouseEnterCounter,
                    disabled: r,
                  },
                  { default: () => `+${y}` }
                )
              ));
          }
          const V = u
              ? n
                ? m(
                    fd,
                    {
                      ref: "overflowRef",
                      updateCounter: this.updateCounter,
                      getCounter: this.getCounter,
                      getTail: this.getTail,
                      style: {
                        width: "100%",
                        display: "flex",
                        overflow: "hidden",
                      },
                    },
                    { default: T, counter: P, tail: () => O }
                  )
                : m(
                    fd,
                    {
                      ref: "overflowRef",
                      updateCounter: this.updateCounter,
                      getCounter: this.getCounter,
                      style: {
                        width: "100%",
                        display: "flex",
                        overflow: "hidden",
                      },
                    },
                    { default: T, counter: P }
                  )
              : h
              ? T().concat(R)
              : T(),
            x = p
              ? () =>
                  m(
                    "div",
                    { class: `${a}-base-selection-popover` },
                    u ? T() : this.selectedOptions.map(g)
                  )
              : void 0,
            S = p
              ? {
                  show: this.showTagsPanel,
                  trigger: "hover",
                  overlap: !0,
                  placement: "top",
                  width: "trigger",
                  onUpdateShow: this.onPopoverUpdateShow,
                  theme: this.mergedTheme.peers.Popover,
                  themeOverrides: this.mergedTheme.peerOverrides.Popover,
                }
              : null,
            C = (
              this.selected
                ? !1
                : this.active
                ? !this.pattern && !this.isComposing
                : !0
            )
              ? m(
                  "div",
                  {
                    class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`,
                  },
                  m(
                    "div",
                    { class: `${a}-base-selection-placeholder__inner` },
                    this.placeholder
                  )
                )
              : null,
            _ = n
              ? m(
                  "div",
                  {
                    ref: "patternInputWrapperRef",
                    class: `${a}-base-selection-tags`,
                  },
                  V,
                  u ? null : O,
                  f
                )
              : m(
                  "div",
                  {
                    ref: "multipleElRef",
                    class: `${a}-base-selection-tags`,
                    tabindex: r ? void 0 : 0,
                  },
                  V,
                  f
                );
          v = m(
            Ye,
            null,
            p
              ? m(
                  zl,
                  Object.assign({}, S, {
                    scrollable: !0,
                    style: "max-height: calc(var(--v-target-height) * 6.6);",
                  }),
                  { trigger: () => _, default: x }
                )
              : _,
            C
          );
        } else if (n) {
          const b = this.pattern || this.isComposing,
            g = this.active ? !b : !this.selected,
            T = this.active ? !1 : this.selected;
          v = m(
            "div",
            {
              ref: "patternInputWrapperRef",
              class: `${a}-base-selection-label`,
            },
            m(
              "input",
              Object.assign({}, this.inputProps, {
                ref: "patternInputRef",
                class: `${a}-base-selection-input`,
                value: this.active ? this.pattern : "",
                placeholder: "",
                readonly: r,
                disabled: r,
                tabindex: -1,
                autofocus: this.autofocus,
                onFocus: this.handlePatternInputFocus,
                onBlur: this.handlePatternInputBlur,
                onInput: this.handlePatternInputInput,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd,
              })
            ),
            T
              ? m(
                  "div",
                  {
                    class: `${a}-base-selection-label__render-label ${a}-base-selection-overlay`,
                    key: "input",
                  },
                  m(
                    "div",
                    { class: `${a}-base-selection-overlay__wrapper` },
                    c
                      ? c({
                          option: this.selectedOption,
                          handleClose: () => {},
                        })
                      : d
                      ? d(this.selectedOption, !0)
                      : It(this.label, this.selectedOption, !0)
                  )
                )
              : null,
            g
              ? m(
                  "div",
                  {
                    class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`,
                    key: "placeholder",
                  },
                  m(
                    "div",
                    { class: `${a}-base-selection-overlay__wrapper` },
                    this.filterablePlaceholder
                  )
                )
              : null,
            f
          );
        } else
          v = m(
            "div",
            {
              ref: "singleElRef",
              class: `${a}-base-selection-label`,
              tabindex: this.disabled ? void 0 : 0,
            },
            this.label !== void 0
              ? m(
                  "div",
                  {
                    class: `${a}-base-selection-input`,
                    title: Um(this.label),
                    key: "input",
                  },
                  m(
                    "div",
                    { class: `${a}-base-selection-input__content` },
                    c
                      ? c({
                          option: this.selectedOption,
                          handleClose: () => {},
                        })
                      : d
                      ? d(this.selectedOption, !0)
                      : It(this.label, this.selectedOption, !0)
                  )
                )
              : m(
                  "div",
                  {
                    class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`,
                    key: "placeholder",
                  },
                  m(
                    "div",
                    { class: `${a}-base-selection-placeholder__inner` },
                    this.placeholder
                  )
                ),
            f
          );
        return m(
          "div",
          {
            ref: "selfRef",
            class: [
              `${a}-base-selection`,
              this.themeClass,
              e && `${a}-base-selection--${e}-status`,
              {
                [`${a}-base-selection--active`]: this.active,
                [`${a}-base-selection--selected`]:
                  this.selected || (this.active && this.pattern),
                [`${a}-base-selection--disabled`]: this.disabled,
                [`${a}-base-selection--multiple`]: this.multiple,
                [`${a}-base-selection--focus`]: this.focused,
              },
            ],
            style: this.cssVars,
            onClick: this.onClick,
            onMouseenter: this.handleMouseEnter,
            onMouseleave: this.handleMouseLeave,
            onKeydown: this.onKeydown,
            onFocusin: this.handleFocusin,
            onFocusout: this.handleFocusout,
            onMousedown: this.handleMouseDown,
          },
          v,
          l ? m("div", { class: `${a}-base-selection__border` }) : null,
          l ? m("div", { class: `${a}-base-selection__state-border` }) : null
        );
      },
    }),
    { cubicBezierEaseInOut: Ao } = Xo;
  function i$({ duration: e = ".2s", delay: t = ".1s" } = {}) {
    return [
      D(
        "&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",
        { opacity: 1 }
      ),
      D(
        "&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",
        `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `
      ),
      D(
        "&.fade-in-width-expand-transition-leave-active",
        `
 overflow: hidden;
 transition:
 opacity ${e} ${Ao},
 max-width ${e} ${Ao} ${t},
 margin-left ${e} ${Ao} ${t},
 margin-right ${e} ${Ao} ${t};
 `
      ),
      D(
        "&.fade-in-width-expand-transition-enter-active",
        `
 overflow: hidden;
 transition:
 opacity ${e} ${Ao} ${t},
 max-width ${e} ${Ao},
 margin-left ${e} ${Ao},
 margin-right ${e} ${Ao};
 `
      ),
    ];
  }
  const l$ = {
      iconMargin: "11px 8px 0 12px",
      iconMarginRtl: "11px 12px 0 8px",
      iconSize: "24px",
      closeIconSize: "16px",
      closeSize: "20px",
      closeMargin: "13px 14px 0 0",
      closeMarginRtl: "13px 0 0 14px",
      padding: "13px",
    },
    a$ = {
      name: "Alert",
      common: ce,
      self(e) {
        const {
          lineHeight: t,
          borderRadius: o,
          fontWeightStrong: r,
          dividerColor: n,
          inputColor: i,
          textColor1: l,
          textColor2: a,
          closeColorHover: s,
          closeColorPressed: c,
          closeIconColor: d,
          closeIconColorHover: u,
          closeIconColorPressed: h,
          infoColorSuppl: p,
          successColorSuppl: f,
          warningColorSuppl: v,
          errorColorSuppl: b,
          fontSize: g,
        } = e;
        return Object.assign(Object.assign({}, l$), {
          fontSize: g,
          lineHeight: t,
          titleFontWeight: r,
          borderRadius: o,
          border: `1px solid ${n}`,
          color: i,
          titleTextColor: l,
          iconColor: a,
          contentTextColor: a,
          closeBorderRadius: o,
          closeColorHover: s,
          closeColorPressed: c,
          closeIconColor: d,
          closeIconColorHover: u,
          closeIconColorPressed: h,
          borderInfo: `1px solid ${te(p, { alpha: 0.35 })}`,
          colorInfo: te(p, { alpha: 0.25 }),
          titleTextColorInfo: l,
          iconColorInfo: p,
          contentTextColorInfo: a,
          closeColorHoverInfo: s,
          closeColorPressedInfo: c,
          closeIconColorInfo: d,
          closeIconColorHoverInfo: u,
          closeIconColorPressedInfo: h,
          borderSuccess: `1px solid ${te(f, { alpha: 0.35 })}`,
          colorSuccess: te(f, { alpha: 0.25 }),
          titleTextColorSuccess: l,
          iconColorSuccess: f,
          contentTextColorSuccess: a,
          closeColorHoverSuccess: s,
          closeColorPressedSuccess: c,
          closeIconColorSuccess: d,
          closeIconColorHoverSuccess: u,
          closeIconColorPressedSuccess: h,
          borderWarning: `1px solid ${te(v, { alpha: 0.35 })}`,
          colorWarning: te(v, { alpha: 0.25 }),
          titleTextColorWarning: l,
          iconColorWarning: v,
          contentTextColorWarning: a,
          closeColorHoverWarning: s,
          closeColorPressedWarning: c,
          closeIconColorWarning: d,
          closeIconColorHoverWarning: u,
          closeIconColorPressedWarning: h,
          borderError: `1px solid ${te(b, { alpha: 0.35 })}`,
          colorError: te(b, { alpha: 0.25 }),
          titleTextColorError: l,
          iconColorError: b,
          contentTextColorError: a,
          closeColorHoverError: s,
          closeColorPressedError: c,
          closeIconColorError: d,
          closeIconColorHoverError: u,
          closeIconColorPressedError: h,
        });
      },
    },
    s$ = a$,
    {
      cubicBezierEaseInOut: so,
      cubicBezierEaseOut: c$,
      cubicBezierEaseIn: d$,
    } = Xo;
  function u$({
    overflow: e = "hidden",
    duration: t = ".3s",
    originalTransition: o = "",
    leavingDelay: r = "0s",
    foldPadding: n = !1,
    enterToProps: i = void 0,
    leaveToProps: l = void 0,
    reverse: a = !1,
  } = {}) {
    const s = a ? "leave" : "enter",
      c = a ? "enter" : "leave";
    return [
      D(
        `&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`,
        Object.assign(Object.assign({}, i), { opacity: 1 })
      ),
      D(
        `&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`,
        Object.assign(Object.assign({}, l), {
          opacity: 0,
          marginTop: "0 !important",
          marginBottom: "0 !important",
          paddingTop: n ? "0 !important" : void 0,
          paddingBottom: n ? "0 !important" : void 0,
        })
      ),
      D(
        `&.fade-in-height-expand-transition-${c}-active`,
        `
 overflow: ${e};
 transition:
 max-height ${t} ${so} ${r},
 opacity ${t} ${c$} ${r},
 margin-top ${t} ${so} ${r},
 margin-bottom ${t} ${so} ${r},
 padding-top ${t} ${so} ${r},
 padding-bottom ${t} ${so} ${r}
 ${o ? "," + o : ""}
 `
      ),
      D(
        `&.fade-in-height-expand-transition-${s}-active`,
        `
 overflow: ${e};
 transition:
 max-height ${t} ${so},
 opacity ${t} ${d$},
 margin-top ${t} ${so},
 margin-bottom ${t} ${so},
 padding-top ${t} ${so},
 padding-bottom ${t} ${so}
 ${o ? "," + o : ""}
 `
      ),
    ];
  }
  const f$ = {
      linkFontSize: "13px",
      linkPadding: "0 0 0 16px",
      railWidth: "4px",
    },
    h$ = (e) => {
      const {
        borderRadius: t,
        railColor: o,
        primaryColor: r,
        primaryColorHover: n,
        primaryColorPressed: i,
        textColor2: l,
      } = e;
      return Object.assign(Object.assign({}, f$), {
        borderRadius: t,
        railColor: o,
        railColorActive: r,
        linkColor: te(r, { alpha: 0.15 }),
        linkTextColor: l,
        linkTextColorHover: n,
        linkTextColorPressed: i,
        linkTextColorActive: r,
      });
    },
    p$ = { name: "Anchor", common: ce, self: h$ },
    v$ = p$;
  function nl(e) {
    return e.type === "group";
  }
  function _h(e) {
    return e.type === "ignored";
  }
  function da(e, t) {
    try {
      return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
    } catch {
      return !1;
    }
  }
  function g$(e, t) {
    return {
      getIsGroup: nl,
      getIgnored: _h,
      getKey(r) {
        return nl(r) ? r.name || r.key || "key-required" : r[e];
      },
      getChildren(r) {
        return r[t];
      },
    };
  }
  function m$(e, t, o, r) {
    if (!t) return e;
    function n(i) {
      if (!Array.isArray(i)) return [];
      const l = [];
      for (const a of i)
        if (nl(a)) {
          const s = n(a[r]);
          s.length && l.push(Object.assign({}, a, { [r]: s }));
        } else {
          if (_h(a)) continue;
          t(o, a) && l.push(a);
        }
      return l;
    }
    return n(e);
  }
  function b$(e, t, o) {
    const r = new Map();
    return (
      e.forEach((n) => {
        nl(n)
          ? n[o].forEach((i) => {
              r.set(i[t], i);
            })
          : r.set(n[t], n);
      }),
      r
    );
  }
  const x$ = ni && "chrome" in window;
  ni && navigator.userAgent.includes("Firefox");
  const Mh = ni && navigator.userAgent.includes("Safari") && !x$,
    kh = {
      paddingTiny: "0 8px",
      paddingSmall: "0 10px",
      paddingMedium: "0 12px",
      paddingLarge: "0 14px",
      clearSize: "16px",
    },
    C$ = {
      name: "Input",
      common: ce,
      self(e) {
        const {
          textColor2: t,
          textColor3: o,
          textColorDisabled: r,
          primaryColor: n,
          primaryColorHover: i,
          inputColor: l,
          inputColorDisabled: a,
          warningColor: s,
          warningColorHover: c,
          errorColor: d,
          errorColorHover: u,
          borderRadius: h,
          lineHeight: p,
          fontSizeTiny: f,
          fontSizeSmall: v,
          fontSizeMedium: b,
          fontSizeLarge: g,
          heightTiny: T,
          heightSmall: O,
          heightMedium: P,
          heightLarge: R,
          clearColor: V,
          clearColorHover: x,
          clearColorPressed: S,
          placeholderColor: M,
          placeholderColorDisabled: C,
          iconColor: _,
          iconColorDisabled: y,
          iconColorHover: K,
          iconColorPressed: H,
        } = e;
        return Object.assign(Object.assign({}, kh), {
          countTextColorDisabled: r,
          countTextColor: o,
          heightTiny: T,
          heightSmall: O,
          heightMedium: P,
          heightLarge: R,
          fontSizeTiny: f,
          fontSizeSmall: v,
          fontSizeMedium: b,
          fontSizeLarge: g,
          lineHeight: p,
          lineHeightTextarea: p,
          borderRadius: h,
          iconSize: "16px",
          groupLabelColor: l,
          textColor: t,
          textColorDisabled: r,
          textDecorationColor: t,
          groupLabelTextColor: t,
          caretColor: n,
          placeholderColor: M,
          placeholderColorDisabled: C,
          color: l,
          colorDisabled: a,
          colorFocus: te(n, { alpha: 0.1 }),
          groupLabelBorder: "1px solid #0000",
          border: "1px solid #0000",
          borderHover: `1px solid ${i}`,
          borderDisabled: "1px solid #0000",
          borderFocus: `1px solid ${i}`,
          boxShadowFocus: `0 0 8px 0 ${te(n, { alpha: 0.3 })}`,
          loadingColor: n,
          loadingColorWarning: s,
          borderWarning: `1px solid ${s}`,
          borderHoverWarning: `1px solid ${c}`,
          colorFocusWarning: te(s, { alpha: 0.1 }),
          borderFocusWarning: `1px solid ${c}`,
          boxShadowFocusWarning: `0 0 8px 0 ${te(s, { alpha: 0.3 })}`,
          caretColorWarning: s,
          loadingColorError: d,
          borderError: `1px solid ${d}`,
          borderHoverError: `1px solid ${u}`,
          colorFocusError: te(d, { alpha: 0.1 }),
          borderFocusError: `1px solid ${u}`,
          boxShadowFocusError: `0 0 8px 0 ${te(d, { alpha: 0.3 })}`,
          caretColorError: d,
          clearColor: V,
          clearColorHover: x,
          clearColorPressed: S,
          iconColor: _,
          iconColorDisabled: y,
          iconColorHover: K,
          iconColorPressed: H,
          suffixTextColor: t,
        });
      },
    },
    Yt = C$,
    y$ = (e) => {
      const {
        textColor2: t,
        textColor3: o,
        textColorDisabled: r,
        primaryColor: n,
        primaryColorHover: i,
        inputColor: l,
        inputColorDisabled: a,
        borderColor: s,
        warningColor: c,
        warningColorHover: d,
        errorColor: u,
        errorColorHover: h,
        borderRadius: p,
        lineHeight: f,
        fontSizeTiny: v,
        fontSizeSmall: b,
        fontSizeMedium: g,
        fontSizeLarge: T,
        heightTiny: O,
        heightSmall: P,
        heightMedium: R,
        heightLarge: V,
        actionColor: x,
        clearColor: S,
        clearColorHover: M,
        clearColorPressed: C,
        placeholderColor: _,
        placeholderColorDisabled: y,
        iconColor: K,
        iconColorDisabled: H,
        iconColorHover: q,
        iconColorPressed: k,
      } = e;
      return Object.assign(Object.assign({}, kh), {
        countTextColorDisabled: r,
        countTextColor: o,
        heightTiny: O,
        heightSmall: P,
        heightMedium: R,
        heightLarge: V,
        fontSizeTiny: v,
        fontSizeSmall: b,
        fontSizeMedium: g,
        fontSizeLarge: T,
        lineHeight: f,
        lineHeightTextarea: f,
        borderRadius: p,
        iconSize: "16px",
        groupLabelColor: x,
        groupLabelTextColor: t,
        textColor: t,
        textColorDisabled: r,
        textDecorationColor: t,
        caretColor: n,
        placeholderColor: _,
        placeholderColorDisabled: y,
        color: l,
        colorDisabled: a,
        colorFocus: l,
        groupLabelBorder: `1px solid ${s}`,
        border: `1px solid ${s}`,
        borderHover: `1px solid ${i}`,
        borderDisabled: `1px solid ${s}`,
        borderFocus: `1px solid ${i}`,
        boxShadowFocus: `0 0 0 2px ${te(n, { alpha: 0.2 })}`,
        loadingColor: n,
        loadingColorWarning: c,
        borderWarning: `1px solid ${c}`,
        borderHoverWarning: `1px solid ${d}`,
        colorFocusWarning: l,
        borderFocusWarning: `1px solid ${d}`,
        boxShadowFocusWarning: `0 0 0 2px ${te(c, { alpha: 0.2 })}`,
        caretColorWarning: c,
        loadingColorError: u,
        borderError: `1px solid ${u}`,
        borderHoverError: `1px solid ${h}`,
        colorFocusError: l,
        borderFocusError: `1px solid ${h}`,
        boxShadowFocusError: `0 0 0 2px ${te(u, { alpha: 0.2 })}`,
        caretColorError: u,
        clearColor: S,
        clearColorHover: M,
        clearColorPressed: C,
        iconColor: K,
        iconColorDisabled: H,
        iconColorHover: q,
        iconColorPressed: k,
        suffixTextColor: t,
      });
    },
    w$ = { name: "Input", common: Et, self: y$ },
    S$ = w$,
    Eh = "n-input";
  function $$(e) {
    let t = 0;
    for (const o of e) t++;
    return t;
  }
  function Ti(e) {
    return e === "" || e == null;
  }
  function P$(e) {
    const t = N(null);
    function o() {
      const { value: i } = e;
      if (!(i != null && i.focus)) {
        n();
        return;
      }
      const { selectionStart: l, selectionEnd: a, value: s } = i;
      if (l == null || a == null) {
        n();
        return;
      }
      t.value = {
        start: l,
        end: a,
        beforeText: s.slice(0, l),
        afterText: s.slice(a),
      };
    }
    function r() {
      var i;
      const { value: l } = t,
        { value: a } = e;
      if (!l || !a) return;
      const { value: s } = a,
        { start: c, beforeText: d, afterText: u } = l;
      let h = s.length;
      if (s.endsWith(u)) h = s.length - u.length;
      else if (s.startsWith(d)) h = d.length;
      else {
        const p = d[c - 1],
          f = s.indexOf(p, c - 1);
        f !== -1 && (h = f + 1);
      }
      (i = a.setSelectionRange) === null || i === void 0 || i.call(a, h, h);
    }
    function n() {
      t.value = null;
    }
    return rt(e, n), { recordCursor: o, restoreCursor: r };
  }
  const qd = ue({
      name: "InputWordCount",
      setup(e, { slots: t }) {
        const {
            mergedValueRef: o,
            maxlengthRef: r,
            mergedClsPrefixRef: n,
            countGraphemesRef: i,
          } = Oe(Eh),
          l = B(() => {
            const { value: a } = o;
            return a === null || Array.isArray(a) ? 0 : (i.value || $$)(a);
          });
        return () => {
          const { value: a } = r,
            { value: s } = o;
          return m(
            "span",
            { class: `${n.value}-input-word-count` },
            qm(
              t.default,
              { value: s === null || Array.isArray(s) ? "" : s },
              () => [a === void 0 ? l.value : `${l.value} / ${a}`]
            )
          );
        };
      },
    }),
    T$ = U(
      "input",
      `
 max-width: 50%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,
      [
        A(
          "input, textarea",
          `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `
        ),
        A(
          "input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",
          `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `
        ),
        A(
          "input-el, textarea-el",
          `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,
          [
            D(
              "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
              `
 width: 0;
 height: 0;
 display: none;
 `
            ),
            D(
              "&::placeholder",
              `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `
            ),
            D("&:-webkit-autofill ~", [A("placeholder", "display: none;")]),
          ]
        ),
        re("round", [
          Je("textarea", "border-radius: calc(var(--n-height) / 2);"),
        ]),
        A(
          "placeholder",
          `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,
          [
            D(
              "span",
              `
 width: 100%;
 display: inline-block;
 `
            ),
          ]
        ),
        re("textarea", [A("placeholder", "overflow: visible;")]),
        Je("autosize", "width: 100%;"),
        re("autosize", [
          A(
            "textarea-el, input-el",
            `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `
          ),
        ]),
        U(
          "input-wrapper",
          `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `
        ),
        A(
          "input-mirror",
          `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `
        ),
        A(
          "input-el",
          `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,
          [
            D("+", [
              A(
                "placeholder",
                `
 display: flex;
 align-items: center; 
 `
              ),
            ]),
          ]
        ),
        Je("textarea", [A("placeholder", "white-space: nowrap;")]),
        A(
          "eye",
          `
 transition: color .3s var(--n-bezier);
 `
        ),
        re("textarea", "width: 100%;", [
          U(
            "input-word-count",
            `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `
          ),
          re("resizable", [
            U(
              "input-wrapper",
              `
 resize: vertical;
 min-height: var(--n-height);
 `
            ),
          ]),
          A(
            "textarea-el, textarea-mirror, placeholder",
            `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `
          ),
          A(
            "textarea-mirror",
            `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `
          ),
        ]),
        re("pair", [
          A("input-el, placeholder", "text-align: center;"),
          A(
            "separator",
            `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,
            [
              U(
                "icon",
                `
 color: var(--n-icon-color);
 `
              ),
              U(
                "base-icon",
                `
 color: var(--n-icon-color);
 `
              ),
            ]
          ),
        ]),
        re(
          "disabled",
          `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,
          [
            A("border", "border: var(--n-border-disabled);"),
            A(
              "input-el, textarea-el",
              `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `
            ),
            A("placeholder", "color: var(--n-placeholder-color-disabled);"),
            A("separator", "color: var(--n-text-color-disabled);", [
              U(
                "icon",
                `
 color: var(--n-icon-color-disabled);
 `
              ),
              U(
                "base-icon",
                `
 color: var(--n-icon-color-disabled);
 `
              ),
            ]),
            U(
              "input-word-count",
              `
 color: var(--n-count-text-color-disabled);
 `
            ),
            A("suffix, prefix", "color: var(--n-text-color-disabled);", [
              U(
                "icon",
                `
 color: var(--n-icon-color-disabled);
 `
              ),
              U(
                "internal-icon",
                `
 color: var(--n-icon-color-disabled);
 `
              ),
            ]),
          ]
        ),
        Je("disabled", [
          A(
            "eye",
            `
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,
            [
              D(
                "&:hover",
                `
 color: var(--n-icon-color-hover);
 `
              ),
              D(
                "&:active",
                `
 color: var(--n-icon-color-pressed);
 `
              ),
            ]
          ),
          D("&:hover", [A("state-border", "border: var(--n-border-hover);")]),
          re("focus", "background-color: var(--n-color-focus);", [
            A(
              "state-border",
              `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `
            ),
          ]),
        ]),
        A(
          "border, state-border",
          `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `
        ),
        A(
          "state-border",
          `
 border-color: #0000;
 z-index: 1;
 `
        ),
        A("prefix", "margin-right: 4px;"),
        A(
          "suffix",
          `
 margin-left: 4px;
 `
        ),
        A(
          "suffix, prefix",
          `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,
          [
            U(
              "base-loading",
              `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `
            ),
            U(
              "base-clear",
              `
 font-size: var(--n-icon-size);
 `,
              [
                A("placeholder", [
                  U(
                    "base-icon",
                    `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `
                  ),
                ]),
              ]
            ),
            D(">", [
              U(
                "icon",
                `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `
              ),
            ]),
            U(
              "base-icon",
              `
 font-size: var(--n-icon-size);
 `
            ),
          ]
        ),
        U(
          "input-word-count",
          `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `
        ),
        ["warning", "error"].map((e) =>
          re(`${e}-status`, [
            Je("disabled", [
              U(
                "base-loading",
                `
 color: var(--n-loading-color-${e})
 `
              ),
              A(
                "input-el, textarea-el",
                `
 caret-color: var(--n-caret-color-${e});
 `
              ),
              A(
                "state-border",
                `
 border: var(--n-border-${e});
 `
              ),
              D("&:hover", [
                A(
                  "state-border",
                  `
 border: var(--n-border-hover-${e});
 `
                ),
              ]),
              D(
                "&:focus",
                `
 background-color: var(--n-color-focus-${e});
 `,
                [
                  A(
                    "state-border",
                    `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `
                  ),
                ]
              ),
              re(
                "focus",
                `
 background-color: var(--n-color-focus-${e});
 `,
                [
                  A(
                    "state-border",
                    `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `
                  ),
                ]
              ),
            ]),
          ])
        ),
      ]
    ),
    z$ = U("input", [
      re("disabled", [
        A(
          "input-el, textarea-el",
          `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `
        ),
      ]),
    ]),
    I$ = Object.assign(Object.assign({}, Ae.props), {
      bordered: { type: Boolean, default: void 0 },
      type: { type: String, default: "text" },
      placeholder: [Array, String],
      defaultValue: { type: [String, Array], default: null },
      value: [String, Array],
      disabled: { type: Boolean, default: void 0 },
      size: String,
      rows: { type: [Number, String], default: 3 },
      round: Boolean,
      minlength: [String, Number],
      maxlength: [String, Number],
      clearable: Boolean,
      autosize: { type: [Boolean, Object], default: !1 },
      pair: Boolean,
      separator: String,
      readonly: { type: [String, Boolean], default: !1 },
      passivelyActivated: Boolean,
      showPasswordOn: String,
      stateful: { type: Boolean, default: !0 },
      autofocus: Boolean,
      inputProps: Object,
      resizable: { type: Boolean, default: !0 },
      showCount: Boolean,
      loading: { type: Boolean, default: void 0 },
      allowInput: Function,
      renderCount: Function,
      onMousedown: Function,
      onKeydown: Function,
      onKeyup: Function,
      onInput: [Function, Array],
      onFocus: [Function, Array],
      onBlur: [Function, Array],
      onClick: [Function, Array],
      onChange: [Function, Array],
      onClear: [Function, Array],
      countGraphemes: Function,
      status: String,
      "onUpdate:value": [Function, Array],
      onUpdateValue: [Function, Array],
      textDecoration: [String, Array],
      attrSize: { type: Number, default: 20 },
      onInputBlur: [Function, Array],
      onInputFocus: [Function, Array],
      onDeactivate: [Function, Array],
      onActivate: [Function, Array],
      onWrapperFocus: [Function, Array],
      onWrapperBlur: [Function, Array],
      internalDeactivateOnEnter: Boolean,
      internalForceFocus: Boolean,
      internalLoadingBeforeSuffix: Boolean,
      showPasswordToggle: Boolean,
    }),
    _$ = ue({
      name: "Input",
      props: I$,
      setup(e) {
        const {
            mergedClsPrefixRef: t,
            mergedBorderedRef: o,
            inlineThemeDisabled: r,
            mergedRtlRef: n,
          } = yt(e),
          i = Ae("Input", "-input", T$, S$, e, t);
        Mh && _r("-input-safari", z$, t);
        const l = N(null),
          a = N(null),
          s = N(null),
          c = N(null),
          d = N(null),
          u = N(null),
          h = N(null),
          p = P$(h),
          f = N(null),
          { localeRef: v } = Ns("Input"),
          b = N(e.defaultValue),
          g = ke(e, "value"),
          T = yr(g, b),
          O = _s(e),
          { mergedSizeRef: P, mergedDisabledRef: R, mergedStatusRef: V } = O,
          x = N(!1),
          S = N(!1),
          M = N(!1),
          C = N(!1);
        let _ = null;
        const y = B(() => {
            const { placeholder: E, pair: J } = e;
            return J
              ? Array.isArray(E)
                ? E
                : E === void 0
                ? ["", ""]
                : [E, E]
              : E === void 0
              ? [v.value.placeholder]
              : [E];
          }),
          K = B(() => {
            const { value: E } = M,
              { value: J } = T,
              { value: Se } = y;
            return !E && (Ti(J) || (Array.isArray(J) && Ti(J[0]))) && Se[0];
          }),
          H = B(() => {
            const { value: E } = M,
              { value: J } = T,
              { value: Se } = y;
            return !E && Se[1] && (Ti(J) || (Array.isArray(J) && Ti(J[1])));
          }),
          q = ut(() => e.internalForceFocus || x.value),
          k = ut(() => {
            if (R.value || e.readonly || !e.clearable || (!q.value && !S.value))
              return !1;
            const { value: E } = T,
              { value: J } = q;
            return e.pair
              ? !!(Array.isArray(E) && (E[0] || E[1])) && (S.value || J)
              : !!E && (S.value || J);
          }),
          F = B(() => {
            const { showPasswordOn: E } = e;
            if (E) return E;
            if (e.showPasswordToggle) return "click";
          }),
          Q = N(!1),
          W = B(() => {
            const { textDecoration: E } = e;
            return E
              ? Array.isArray(E)
                ? E.map((J) => ({ textDecoration: J }))
                : [{ textDecoration: E }]
              : ["", ""];
          }),
          ee = N(void 0),
          ve = () => {
            var E, J;
            if (e.type === "textarea") {
              const { autosize: Se } = e;
              if (
                (Se &&
                  (ee.value =
                    (J =
                      (E = f.value) === null || E === void 0
                        ? void 0
                        : E.$el) === null || J === void 0
                      ? void 0
                      : J.offsetWidth),
                !a.value || typeof Se == "boolean")
              )
                return;
              const {
                  paddingTop: Xe,
                  paddingBottom: it,
                  lineHeight: qe,
                } = window.getComputedStyle(a.value),
                mo = Number(Xe.slice(0, -2)),
                bo = Number(it.slice(0, -2)),
                xo = Number(qe.slice(0, -2)),
                { value: Zo } = s;
              if (!Zo) return;
              if (Se.minRows) {
                const Jo = Math.max(Se.minRows, 1),
                  pn = `${mo + bo + xo * Jo}px`;
                Zo.style.minHeight = pn;
              }
              if (Se.maxRows) {
                const Jo = `${mo + bo + xo * Se.maxRows}px`;
                Zo.style.maxHeight = Jo;
              }
            }
          },
          ae = B(() => {
            const { maxlength: E } = e;
            return E === void 0 ? void 0 : Number(E);
          });
        _t(() => {
          const { value: E } = T;
          Array.isArray(E) || Ie(E);
        });
        const he = an().proxy;
        function We(E) {
          const { onUpdateValue: J, "onUpdate:value": Se, onInput: Xe } = e,
            { nTriggerFormInput: it } = O;
          J && Re(J, E), Se && Re(Se, E), Xe && Re(Xe, E), (b.value = E), it();
        }
        function He(E) {
          const { onChange: J } = e,
            { nTriggerFormChange: Se } = O;
          J && Re(J, E), (b.value = E), Se();
        }
        function ze(E) {
          const { onBlur: J } = e,
            { nTriggerFormBlur: Se } = O;
          J && Re(J, E), Se();
        }
        function $e(E) {
          const { onFocus: J } = e,
            { nTriggerFormFocus: Se } = O;
          J && Re(J, E), Se();
        }
        function Ve(E) {
          const { onClear: J } = e;
          J && Re(J, E);
        }
        function ge(E) {
          const { onInputBlur: J } = e;
          J && Re(J, E);
        }
        function Ue(E) {
          const { onInputFocus: J } = e;
          J && Re(J, E);
        }
        function at() {
          const { onDeactivate: E } = e;
          E && Re(E);
        }
        function w() {
          const { onActivate: E } = e;
          E && Re(E);
        }
        function I(E) {
          const { onClick: J } = e;
          J && Re(J, E);
        }
        function L(E) {
          const { onWrapperFocus: J } = e;
          J && Re(J, E);
        }
        function X(E) {
          const { onWrapperBlur: J } = e;
          J && Re(J, E);
        }
        function Z() {
          M.value = !0;
        }
        function ne(E) {
          (M.value = !1), E.target === u.value ? se(E, 1) : se(E, 0);
        }
        function se(E, J = 0, Se = "input") {
          const Xe = E.target.value;
          if (
            (Ie(Xe),
            E instanceof InputEvent && !E.isComposing && (M.value = !1),
            e.type === "textarea")
          ) {
            const { value: qe } = f;
            qe && qe.syncUnifiedContainer();
          }
          if (((_ = Xe), M.value)) return;
          p.recordCursor();
          const it = oe(Xe);
          if (it)
            if (!e.pair) Se === "input" ? We(Xe) : He(Xe);
            else {
              let { value: qe } = T;
              Array.isArray(qe) ? (qe = [qe[0], qe[1]]) : (qe = ["", ""]),
                (qe[J] = Xe),
                Se === "input" ? We(qe) : He(qe);
            }
          he.$forceUpdate(), it || $o(p.restoreCursor);
        }
        function oe(E) {
          const { countGraphemes: J, maxlength: Se, minlength: Xe } = e;
          if (J) {
            let qe;
            if (
              (Se !== void 0 &&
                (qe === void 0 && (qe = J(E)), qe > Number(Se))) ||
              (Xe !== void 0 && (qe === void 0 && (qe = J(E)), qe < Number(Se)))
            )
              return !1;
          }
          const { allowInput: it } = e;
          return typeof it == "function" ? it(E) : !0;
        }
        function Y(E) {
          ge(E),
            E.relatedTarget === l.value && at(),
            (E.relatedTarget !== null &&
              (E.relatedTarget === d.value ||
                E.relatedTarget === u.value ||
                E.relatedTarget === a.value)) ||
              (C.value = !1),
            fe(E, "blur"),
            (h.value = null);
        }
        function z(E, J) {
          Ue(E),
            (x.value = !0),
            (C.value = !0),
            w(),
            fe(E, "focus"),
            J === 0
              ? (h.value = d.value)
              : J === 1
              ? (h.value = u.value)
              : J === 2 && (h.value = a.value);
        }
        function G(E) {
          e.passivelyActivated && (X(E), fe(E, "blur"));
        }
        function ie(E) {
          e.passivelyActivated && ((x.value = !0), L(E), fe(E, "focus"));
        }
        function fe(E, J) {
          (E.relatedTarget !== null &&
            (E.relatedTarget === d.value ||
              E.relatedTarget === u.value ||
              E.relatedTarget === a.value ||
              E.relatedTarget === l.value)) ||
            (J === "focus"
              ? ($e(E), (x.value = !0))
              : J === "blur" && (ze(E), (x.value = !1)));
        }
        function ye(E, J) {
          se(E, J, "change");
        }
        function _e(E) {
          I(E);
        }
        function De(E) {
          Ve(E), e.pair ? (We(["", ""]), He(["", ""])) : (We(""), He(""));
        }
        function Fe(E) {
          const { onMousedown: J } = e;
          J && J(E);
          const { tagName: Se } = E.target;
          if (Se !== "INPUT" && Se !== "TEXTAREA") {
            if (e.resizable) {
              const { value: Xe } = l;
              if (Xe) {
                const {
                    left: it,
                    top: qe,
                    width: mo,
                    height: bo,
                  } = Xe.getBoundingClientRect(),
                  xo = 14;
                if (
                  it + mo - xo < E.clientX &&
                  E.clientX < it + mo &&
                  qe + bo - xo < E.clientY &&
                  E.clientY < qe + bo
                )
                  return;
              }
            }
            E.preventDefault(), x.value || $();
          }
        }
        function Ke() {
          var E;
          (S.value = !0),
            e.type === "textarea" &&
              ((E = f.value) === null ||
                E === void 0 ||
                E.handleMouseEnterWrapper());
        }
        function st() {
          var E;
          (S.value = !1),
            e.type === "textarea" &&
              ((E = f.value) === null ||
                E === void 0 ||
                E.handleMouseLeaveWrapper());
        }
        function mt() {
          R.value || (F.value === "click" && (Q.value = !Q.value));
        }
        function no(E) {
          if (R.value) return;
          E.preventDefault();
          const J = (Xe) => {
            Xe.preventDefault(), tt("mouseup", document, J);
          };
          if ((dt("mouseup", document, J), F.value !== "mousedown")) return;
          Q.value = !0;
          const Se = () => {
            (Q.value = !1), tt("mouseup", document, Se);
          };
          dt("mouseup", document, Se);
        }
        function Rt(E) {
          var J;
          switch (
            ((J = e.onKeydown) === null || J === void 0 || J.call(e, E), E.key)
          ) {
            case "Escape":
              Ge();
              break;
            case "Enter":
              St(E);
              break;
          }
        }
        function St(E) {
          var J, Se;
          if (e.passivelyActivated) {
            const { value: Xe } = C;
            if (Xe) {
              e.internalDeactivateOnEnter && Ge();
              return;
            }
            E.preventDefault(),
              e.type === "textarea"
                ? (J = a.value) === null || J === void 0 || J.focus()
                : (Se = d.value) === null || Se === void 0 || Se.focus();
          }
        }
        function Ge() {
          e.passivelyActivated &&
            ((C.value = !1),
            $o(() => {
              var E;
              (E = l.value) === null || E === void 0 || E.focus();
            }));
        }
        function $() {
          var E, J, Se;
          R.value ||
            (e.passivelyActivated
              ? (E = l.value) === null || E === void 0 || E.focus()
              : ((J = a.value) === null || J === void 0 || J.focus(),
                (Se = d.value) === null || Se === void 0 || Se.focus()));
        }
        function j() {
          var E;
          !((E = l.value) === null || E === void 0) &&
            E.contains(document.activeElement) &&
            document.activeElement.blur();
        }
        function le() {
          var E, J;
          (E = a.value) === null || E === void 0 || E.select(),
            (J = d.value) === null || J === void 0 || J.select();
        }
        function me() {
          R.value || (a.value ? a.value.focus() : d.value && d.value.focus());
        }
        function xe() {
          const { value: E } = l;
          E != null &&
            E.contains(document.activeElement) &&
            E !== document.activeElement &&
            Ge();
        }
        function Pe(E) {
          if (e.type === "textarea") {
            const { value: J } = a;
            J == null || J.scrollTo(E);
          } else {
            const { value: J } = d;
            J == null || J.scrollTo(E);
          }
        }
        function Ie(E) {
          const { type: J, pair: Se, autosize: Xe } = e;
          if (!Se && Xe)
            if (J === "textarea") {
              const { value: it } = s;
              it &&
                (it.textContent =
                  (E ?? "") +
                  `\r
`);
            } else {
              const { value: it } = c;
              it && (E ? (it.textContent = E) : (it.innerHTML = "&nbsp;"));
            }
        }
        function Ee() {
          ve();
        }
        const bt = N({ top: "0" });
        function Xt(E) {
          var J;
          const { scrollTop: Se } = E.target;
          (bt.value.top = `${-Se}px`),
            (J = f.value) === null || J === void 0 || J.syncUnifiedContainer();
        }
        let Er = null;
        po(() => {
          const { autosize: E, type: J } = e;
          E && J === "textarea"
            ? (Er = rt(T, (Se) => {
                !Array.isArray(Se) && Se !== _ && Ie(Se);
              }))
            : Er == null || Er();
        });
        let Rr = null;
        po(() => {
          e.type === "textarea"
            ? (Rr = rt(T, (E) => {
                var J;
                !Array.isArray(E) &&
                  E !== _ &&
                  ((J = f.value) === null ||
                    J === void 0 ||
                    J.syncUnifiedContainer());
              }))
            : Rr == null || Rr();
        }),
          ot(Eh, {
            mergedValueRef: T,
            maxlengthRef: ae,
            mergedClsPrefixRef: t,
            countGraphemesRef: ke(e, "countGraphemes"),
          });
        const Ml = {
            wrapperElRef: l,
            inputElRef: d,
            textareaElRef: a,
            isCompositing: M,
            focus: $,
            blur: j,
            select: le,
            deactivate: xe,
            activate: me,
            scrollTo: Pe,
          },
          kl = un("Input", n, t),
          si = B(() => {
            const { value: E } = P,
              {
                common: { cubicBezierEaseInOut: J },
                self: {
                  color: Se,
                  borderRadius: Xe,
                  textColor: it,
                  caretColor: qe,
                  caretColorError: mo,
                  caretColorWarning: bo,
                  textDecorationColor: xo,
                  border: Zo,
                  borderDisabled: Jo,
                  borderHover: pn,
                  borderFocus: El,
                  placeholderColor: Rl,
                  placeholderColorDisabled: Ol,
                  lineHeightTextarea: Cp,
                  colorDisabled: yp,
                  colorFocus: wp,
                  textColorDisabled: Sp,
                  boxShadowFocus: $p,
                  iconSize: Pp,
                  colorFocusWarning: Tp,
                  boxShadowFocusWarning: zp,
                  borderWarning: Ip,
                  borderFocusWarning: _p,
                  borderHoverWarning: Mp,
                  colorFocusError: kp,
                  boxShadowFocusError: Ep,
                  borderError: Rp,
                  borderFocusError: Op,
                  borderHoverError: Bp,
                  clearSize: Ap,
                  clearColor: Hp,
                  clearColorHover: Fp,
                  clearColorPressed: Dp,
                  iconColor: Lp,
                  iconColorDisabled: Wp,
                  suffixTextColor: Np,
                  countTextColor: jp,
                  countTextColorDisabled: Vp,
                  iconColorHover: Kp,
                  iconColorPressed: Up,
                  loadingColor: Gp,
                  loadingColorError: qp,
                  loadingColorWarning: Yp,
                  [de("padding", E)]: Xp,
                  [de("fontSize", E)]: Zp,
                  [de("height", E)]: Jp,
                },
              } = i.value,
              { left: Qp, right: ev } = ki(Xp);
            return {
              "--n-bezier": J,
              "--n-count-text-color": jp,
              "--n-count-text-color-disabled": Vp,
              "--n-color": Se,
              "--n-font-size": Zp,
              "--n-border-radius": Xe,
              "--n-height": Jp,
              "--n-padding-left": Qp,
              "--n-padding-right": ev,
              "--n-text-color": it,
              "--n-caret-color": qe,
              "--n-text-decoration-color": xo,
              "--n-border": Zo,
              "--n-border-disabled": Jo,
              "--n-border-hover": pn,
              "--n-border-focus": El,
              "--n-placeholder-color": Rl,
              "--n-placeholder-color-disabled": Ol,
              "--n-icon-size": Pp,
              "--n-line-height-textarea": Cp,
              "--n-color-disabled": yp,
              "--n-color-focus": wp,
              "--n-text-color-disabled": Sp,
              "--n-box-shadow-focus": $p,
              "--n-loading-color": Gp,
              "--n-caret-color-warning": bo,
              "--n-color-focus-warning": Tp,
              "--n-box-shadow-focus-warning": zp,
              "--n-border-warning": Ip,
              "--n-border-focus-warning": _p,
              "--n-border-hover-warning": Mp,
              "--n-loading-color-warning": Yp,
              "--n-caret-color-error": mo,
              "--n-color-focus-error": kp,
              "--n-box-shadow-focus-error": Ep,
              "--n-border-error": Rp,
              "--n-border-focus-error": Op,
              "--n-border-hover-error": Bp,
              "--n-loading-color-error": qp,
              "--n-clear-color": Hp,
              "--n-clear-size": Ap,
              "--n-clear-color-hover": Fp,
              "--n-clear-color-pressed": Dp,
              "--n-icon-color": Lp,
              "--n-icon-color-hover": Kp,
              "--n-icon-color-pressed": Up,
              "--n-icon-color-disabled": Wp,
              "--n-suffix-text-color": Np,
            };
          }),
          Eo = r
            ? wt(
                "input",
                B(() => {
                  const { value: E } = P;
                  return E[0];
                }),
                si,
                e
              )
            : void 0;
        return Object.assign(Object.assign({}, Ml), {
          wrapperElRef: l,
          inputElRef: d,
          inputMirrorElRef: c,
          inputEl2Ref: u,
          textareaElRef: a,
          textareaMirrorElRef: s,
          textareaScrollbarInstRef: f,
          rtlEnabled: kl,
          uncontrolledValue: b,
          mergedValue: T,
          passwordVisible: Q,
          mergedPlaceholder: y,
          showPlaceholder1: K,
          showPlaceholder2: H,
          mergedFocus: q,
          isComposing: M,
          activated: C,
          showClearButton: k,
          mergedSize: P,
          mergedDisabled: R,
          textDecorationStyle: W,
          mergedClsPrefix: t,
          mergedBordered: o,
          mergedShowPasswordOn: F,
          placeholderStyle: bt,
          mergedStatus: V,
          textAreaScrollContainerWidth: ee,
          handleTextAreaScroll: Xt,
          handleCompositionStart: Z,
          handleCompositionEnd: ne,
          handleInput: se,
          handleInputBlur: Y,
          handleInputFocus: z,
          handleWrapperBlur: G,
          handleWrapperFocus: ie,
          handleMouseEnter: Ke,
          handleMouseLeave: st,
          handleMouseDown: Fe,
          handleChange: ye,
          handleClick: _e,
          handleClear: De,
          handlePasswordToggleClick: mt,
          handlePasswordToggleMousedown: no,
          handleWrapperKeydown: Rt,
          handleTextAreaMirrorResize: Ee,
          getTextareaScrollContainer: () => a.value,
          mergedTheme: i,
          cssVars: r ? void 0 : si,
          themeClass: Eo == null ? void 0 : Eo.themeClass,
          onRender: Eo == null ? void 0 : Eo.onRender,
        });
      },
      render() {
        var e, t;
        const {
            mergedClsPrefix: o,
            mergedStatus: r,
            themeClass: n,
            type: i,
            countGraphemes: l,
            onRender: a,
          } = this,
          s = this.$slots;
        return (
          a == null || a(),
          m(
            "div",
            {
              ref: "wrapperElRef",
              class: [
                `${o}-input`,
                n,
                r && `${o}-input--${r}-status`,
                {
                  [`${o}-input--rtl`]: this.rtlEnabled,
                  [`${o}-input--disabled`]: this.mergedDisabled,
                  [`${o}-input--textarea`]: i === "textarea",
                  [`${o}-input--resizable`]: this.resizable && !this.autosize,
                  [`${o}-input--autosize`]: this.autosize,
                  [`${o}-input--round`]: this.round && i !== "textarea",
                  [`${o}-input--pair`]: this.pair,
                  [`${o}-input--focus`]: this.mergedFocus,
                  [`${o}-input--stateful`]: this.stateful,
                },
              ],
              style: this.cssVars,
              tabindex:
                !this.mergedDisabled &&
                this.passivelyActivated &&
                !this.activated
                  ? 0
                  : void 0,
              onFocus: this.handleWrapperFocus,
              onBlur: this.handleWrapperBlur,
              onClick: this.handleClick,
              onMousedown: this.handleMouseDown,
              onMouseenter: this.handleMouseEnter,
              onMouseleave: this.handleMouseLeave,
              onCompositionstart: this.handleCompositionStart,
              onCompositionend: this.handleCompositionEnd,
              onKeyup: this.onKeyup,
              onKeydown: this.handleWrapperKeydown,
            },
            m(
              "div",
              { class: `${o}-input-wrapper` },
              Ut(
                s.prefix,
                (c) => c && m("div", { class: `${o}-input__prefix` }, c)
              ),
              i === "textarea"
                ? m(
                    Ys,
                    {
                      ref: "textareaScrollbarInstRef",
                      class: `${o}-input__textarea`,
                      container: this.getTextareaScrollContainer,
                      triggerDisplayManually: !0,
                      useUnifiedContainer: !0,
                      internalHoistYRail: !0,
                    },
                    {
                      default: () => {
                        var c, d;
                        const { textAreaScrollContainerWidth: u } = this,
                          h = { width: this.autosize && u && `${u}px` };
                        return m(
                          Ye,
                          null,
                          m(
                            "textarea",
                            Object.assign({}, this.inputProps, {
                              ref: "textareaElRef",
                              class: [
                                `${o}-input__textarea-el`,
                                (c = this.inputProps) === null || c === void 0
                                  ? void 0
                                  : c.class,
                              ],
                              autofocus: this.autofocus,
                              rows: Number(this.rows),
                              placeholder: this.placeholder,
                              value: this.mergedValue,
                              disabled: this.mergedDisabled,
                              maxlength: l ? void 0 : this.maxlength,
                              minlength: l ? void 0 : this.minlength,
                              readonly: this.readonly,
                              tabindex:
                                this.passivelyActivated && !this.activated
                                  ? -1
                                  : void 0,
                              style: [
                                this.textDecorationStyle[0],
                                (d = this.inputProps) === null || d === void 0
                                  ? void 0
                                  : d.style,
                                h,
                              ],
                              onBlur: this.handleInputBlur,
                              onFocus: (p) => this.handleInputFocus(p, 2),
                              onInput: this.handleInput,
                              onChange: this.handleChange,
                              onScroll: this.handleTextAreaScroll,
                            })
                          ),
                          this.showPlaceholder1
                            ? m(
                                "div",
                                {
                                  class: `${o}-input__placeholder`,
                                  style: [this.placeholderStyle, h],
                                  key: "placeholder",
                                },
                                this.mergedPlaceholder[0]
                              )
                            : null,
                          this.autosize
                            ? m(
                                qn,
                                { onResize: this.handleTextAreaMirrorResize },
                                {
                                  default: () =>
                                    m("div", {
                                      ref: "textareaMirrorElRef",
                                      class: `${o}-input__textarea-mirror`,
                                      key: "mirror",
                                    }),
                                }
                              )
                            : null
                        );
                      },
                    }
                  )
                : m(
                    "div",
                    { class: `${o}-input__input` },
                    m(
                      "input",
                      Object.assign(
                        {
                          type:
                            i === "password" &&
                            this.mergedShowPasswordOn &&
                            this.passwordVisible
                              ? "text"
                              : i,
                        },
                        this.inputProps,
                        {
                          ref: "inputElRef",
                          class: [
                            `${o}-input__input-el`,
                            (e = this.inputProps) === null || e === void 0
                              ? void 0
                              : e.class,
                          ],
                          style: [
                            this.textDecorationStyle[0],
                            (t = this.inputProps) === null || t === void 0
                              ? void 0
                              : t.style,
                          ],
                          tabindex:
                            this.passivelyActivated && !this.activated
                              ? -1
                              : void 0,
                          placeholder: this.mergedPlaceholder[0],
                          disabled: this.mergedDisabled,
                          maxlength: l ? void 0 : this.maxlength,
                          minlength: l ? void 0 : this.minlength,
                          value: Array.isArray(this.mergedValue)
                            ? this.mergedValue[0]
                            : this.mergedValue,
                          readonly: this.readonly,
                          autofocus: this.autofocus,
                          size: this.attrSize,
                          onBlur: this.handleInputBlur,
                          onFocus: (c) => this.handleInputFocus(c, 0),
                          onInput: (c) => this.handleInput(c, 0),
                          onChange: (c) => this.handleChange(c, 0),
                        }
                      )
                    ),
                    this.showPlaceholder1
                      ? m(
                          "div",
                          { class: `${o}-input__placeholder` },
                          m("span", null, this.mergedPlaceholder[0])
                        )
                      : null,
                    this.autosize
                      ? m(
                          "div",
                          {
                            class: `${o}-input__input-mirror`,
                            key: "mirror",
                            ref: "inputMirrorElRef",
                          },
                          " "
                        )
                      : null
                  ),
              !this.pair &&
                Ut(s.suffix, (c) =>
                  c ||
                  this.clearable ||
                  this.showCount ||
                  this.mergedShowPasswordOn ||
                  this.loading !== void 0
                    ? m("div", { class: `${o}-input__suffix` }, [
                        Ut(
                          s["clear-icon-placeholder"],
                          (d) =>
                            (this.clearable || d) &&
                            m(
                              Da,
                              {
                                clsPrefix: o,
                                show: this.showClearButton,
                                onClear: this.handleClear,
                              },
                              {
                                placeholder: () => d,
                                icon: () => {
                                  var u, h;
                                  return (h = (u = this.$slots)[
                                    "clear-icon"
                                  ]) === null || h === void 0
                                    ? void 0
                                    : h.call(u);
                                },
                              }
                            )
                        ),
                        this.internalLoadingBeforeSuffix ? null : c,
                        this.loading !== void 0
                          ? m(Th, {
                              clsPrefix: o,
                              loading: this.loading,
                              showArrow: !1,
                              showClear: !1,
                              style: this.cssVars,
                            })
                          : null,
                        this.internalLoadingBeforeSuffix ? c : null,
                        this.showCount && this.type !== "textarea"
                          ? m(qd, null, {
                              default: (d) => {
                                var u;
                                return (u = s.count) === null || u === void 0
                                  ? void 0
                                  : u.call(s, d);
                              },
                            })
                          : null,
                        this.mergedShowPasswordOn && this.type === "password"
                          ? m(
                              "div",
                              {
                                class: `${o}-input__eye`,
                                onMousedown: this.handlePasswordToggleMousedown,
                                onClick: this.handlePasswordToggleClick,
                              },
                              this.passwordVisible
                                ? Kr(s["password-visible-icon"], () => [
                                    m(
                                      qo,
                                      { clsPrefix: o },
                                      { default: () => m(TS, null) }
                                    ),
                                  ])
                                : Kr(s["password-invisible-icon"], () => [
                                    m(
                                      qo,
                                      { clsPrefix: o },
                                      { default: () => m(zS, null) }
                                    ),
                                  ])
                            )
                          : null,
                      ])
                    : null
                )
            ),
            this.pair
              ? m(
                  "span",
                  { class: `${o}-input__separator` },
                  Kr(s.separator, () => [this.separator])
                )
              : null,
            this.pair
              ? m(
                  "div",
                  { class: `${o}-input-wrapper` },
                  m(
                    "div",
                    { class: `${o}-input__input` },
                    m("input", {
                      ref: "inputEl2Ref",
                      type: this.type,
                      class: `${o}-input__input-el`,
                      tabindex:
                        this.passivelyActivated && !this.activated
                          ? -1
                          : void 0,
                      placeholder: this.mergedPlaceholder[1],
                      disabled: this.mergedDisabled,
                      maxlength: l ? void 0 : this.maxlength,
                      minlength: l ? void 0 : this.minlength,
                      value: Array.isArray(this.mergedValue)
                        ? this.mergedValue[1]
                        : void 0,
                      readonly: this.readonly,
                      style: this.textDecorationStyle[1],
                      onBlur: this.handleInputBlur,
                      onFocus: (c) => this.handleInputFocus(c, 1),
                      onInput: (c) => this.handleInput(c, 1),
                      onChange: (c) => this.handleChange(c, 1),
                    }),
                    this.showPlaceholder2
                      ? m(
                          "div",
                          { class: `${o}-input__placeholder` },
                          m("span", null, this.mergedPlaceholder[1])
                        )
                      : null
                  ),
                  Ut(
                    s.suffix,
                    (c) =>
                      (this.clearable || c) &&
                      m("div", { class: `${o}-input__suffix` }, [
                        this.clearable &&
                          m(
                            Da,
                            {
                              clsPrefix: o,
                              show: this.showClearButton,
                              onClear: this.handleClear,
                            },
                            {
                              icon: () => {
                                var d;
                                return (d = s["clear-icon"]) === null ||
                                  d === void 0
                                  ? void 0
                                  : d.call(s);
                              },
                              placeholder: () => {
                                var d;
                                return (d = s["clear-icon-placeholder"]) ===
                                  null || d === void 0
                                  ? void 0
                                  : d.call(s);
                              },
                            }
                          ),
                        c,
                      ])
                  )
                )
              : null,
            this.mergedBordered
              ? m("div", { class: `${o}-input__border` })
              : null,
            this.mergedBordered
              ? m("div", { class: `${o}-input__state-border` })
              : null,
            this.showCount && i === "textarea"
              ? m(qd, null, {
                  default: (c) => {
                    var d;
                    const { renderCount: u } = this;
                    return u
                      ? u(c)
                      : (d = s.count) === null || d === void 0
                      ? void 0
                      : d.call(s, c);
                  },
                })
              : null
          )
        );
      },
    });
  function M$(e) {
    const { boxShadow2: t } = e;
    return { menuBoxShadow: t };
  }
  const k$ = {
      name: "AutoComplete",
      common: ce,
      peers: { InternalSelectMenu: li, Input: Yt },
      self: M$,
    },
    E$ = k$,
    R$ = (e) => {
      const {
        borderRadius: t,
        avatarColor: o,
        cardColor: r,
        fontSize: n,
        heightTiny: i,
        heightSmall: l,
        heightMedium: a,
        heightLarge: s,
        heightHuge: c,
        modalColor: d,
        popoverColor: u,
      } = e;
      return {
        borderRadius: t,
        fontSize: n,
        border: `2px solid ${r}`,
        heightTiny: i,
        heightSmall: l,
        heightMedium: a,
        heightLarge: s,
        heightHuge: c,
        color: be(r, o),
        colorModal: be(d, o),
        colorPopover: be(u, o),
      };
    },
    O$ = { name: "Avatar", common: ce, self: R$ },
    Rh = O$,
    B$ = () => ({ gap: "-12px" }),
    A$ = { name: "AvatarGroup", common: ce, peers: { Avatar: Rh }, self: B$ },
    H$ = A$,
    F$ = {
      width: "44px",
      height: "44px",
      borderRadius: "22px",
      iconSize: "26px",
    },
    D$ = {
      name: "BackTop",
      common: ce,
      self(e) {
        const {
          popoverColor: t,
          textColor2: o,
          primaryColorHover: r,
          primaryColorPressed: n,
        } = e;
        return Object.assign(Object.assign({}, F$), {
          color: t,
          textColor: o,
          iconColor: o,
          iconColorHover: r,
          iconColorPressed: n,
          boxShadow: "0 2px 8px 0px rgba(0, 0, 0, .12)",
          boxShadowHover: "0 2px 12px 0px rgba(0, 0, 0, .18)",
          boxShadowPressed: "0 2px 12px 0px rgba(0, 0, 0, .18)",
        });
      },
    },
    L$ = D$,
    W$ = {
      name: "Badge",
      common: ce,
      self(e) {
        const {
          errorColorSuppl: t,
          infoColorSuppl: o,
          successColorSuppl: r,
          warningColorSuppl: n,
          fontFamily: i,
        } = e;
        return {
          color: t,
          colorInfo: o,
          colorSuccess: r,
          colorError: t,
          colorWarning: n,
          fontSize: "12px",
          fontFamily: i,
        };
      },
    },
    N$ = W$,
    j$ = { fontWeightActive: "400" },
    V$ = (e) => {
      const {
        fontSize: t,
        textColor3: o,
        textColor2: r,
        borderRadius: n,
        buttonColor2Hover: i,
        buttonColor2Pressed: l,
      } = e;
      return Object.assign(Object.assign({}, j$), {
        fontSize: t,
        itemLineHeight: "1.25",
        itemTextColor: o,
        itemTextColorHover: r,
        itemTextColorPressed: r,
        itemTextColorActive: r,
        itemBorderRadius: n,
        itemColorHover: i,
        itemColorPressed: l,
        separatorColor: o,
      });
    },
    K$ = { name: "Breadcrumb", common: ce, self: V$ },
    U$ = K$;
  function rr(e) {
    return be(e, [255, 255, 255, 0.16]);
  }
  function zi(e) {
    return be(e, [0, 0, 0, 0.12]);
  }
  const Oh = "n-button-group",
    G$ = {
      paddingTiny: "0 6px",
      paddingSmall: "0 10px",
      paddingMedium: "0 14px",
      paddingLarge: "0 18px",
      paddingRoundTiny: "0 10px",
      paddingRoundSmall: "0 14px",
      paddingRoundMedium: "0 18px",
      paddingRoundLarge: "0 22px",
      iconMarginTiny: "6px",
      iconMarginSmall: "6px",
      iconMarginMedium: "6px",
      iconMarginLarge: "6px",
      iconSizeTiny: "14px",
      iconSizeSmall: "18px",
      iconSizeMedium: "18px",
      iconSizeLarge: "20px",
      rippleDuration: ".6s",
    },
    Bh = (e) => {
      const {
        heightTiny: t,
        heightSmall: o,
        heightMedium: r,
        heightLarge: n,
        borderRadius: i,
        fontSizeTiny: l,
        fontSizeSmall: a,
        fontSizeMedium: s,
        fontSizeLarge: c,
        opacityDisabled: d,
        textColor2: u,
        textColor3: h,
        primaryColorHover: p,
        primaryColorPressed: f,
        borderColor: v,
        primaryColor: b,
        baseColor: g,
        infoColor: T,
        infoColorHover: O,
        infoColorPressed: P,
        successColor: R,
        successColorHover: V,
        successColorPressed: x,
        warningColor: S,
        warningColorHover: M,
        warningColorPressed: C,
        errorColor: _,
        errorColorHover: y,
        errorColorPressed: K,
        fontWeight: H,
        buttonColor2: q,
        buttonColor2Hover: k,
        buttonColor2Pressed: F,
        fontWeightStrong: Q,
      } = e;
      return Object.assign(Object.assign({}, G$), {
        heightTiny: t,
        heightSmall: o,
        heightMedium: r,
        heightLarge: n,
        borderRadiusTiny: i,
        borderRadiusSmall: i,
        borderRadiusMedium: i,
        borderRadiusLarge: i,
        fontSizeTiny: l,
        fontSizeSmall: a,
        fontSizeMedium: s,
        fontSizeLarge: c,
        opacityDisabled: d,
        colorOpacitySecondary: "0.16",
        colorOpacitySecondaryHover: "0.22",
        colorOpacitySecondaryPressed: "0.28",
        colorSecondary: q,
        colorSecondaryHover: k,
        colorSecondaryPressed: F,
        colorTertiary: q,
        colorTertiaryHover: k,
        colorTertiaryPressed: F,
        colorQuaternary: "#0000",
        colorQuaternaryHover: k,
        colorQuaternaryPressed: F,
        color: "#0000",
        colorHover: "#0000",
        colorPressed: "#0000",
        colorFocus: "#0000",
        colorDisabled: "#0000",
        textColor: u,
        textColorTertiary: h,
        textColorHover: p,
        textColorPressed: f,
        textColorFocus: p,
        textColorDisabled: u,
        textColorText: u,
        textColorTextHover: p,
        textColorTextPressed: f,
        textColorTextFocus: p,
        textColorTextDisabled: u,
        textColorGhost: u,
        textColorGhostHover: p,
        textColorGhostPressed: f,
        textColorGhostFocus: p,
        textColorGhostDisabled: u,
        border: `1px solid ${v}`,
        borderHover: `1px solid ${p}`,
        borderPressed: `1px solid ${f}`,
        borderFocus: `1px solid ${p}`,
        borderDisabled: `1px solid ${v}`,
        rippleColor: b,
        colorPrimary: b,
        colorHoverPrimary: p,
        colorPressedPrimary: f,
        colorFocusPrimary: p,
        colorDisabledPrimary: b,
        textColorPrimary: g,
        textColorHoverPrimary: g,
        textColorPressedPrimary: g,
        textColorFocusPrimary: g,
        textColorDisabledPrimary: g,
        textColorTextPrimary: b,
        textColorTextHoverPrimary: p,
        textColorTextPressedPrimary: f,
        textColorTextFocusPrimary: p,
        textColorTextDisabledPrimary: u,
        textColorGhostPrimary: b,
        textColorGhostHoverPrimary: p,
        textColorGhostPressedPrimary: f,
        textColorGhostFocusPrimary: p,
        textColorGhostDisabledPrimary: b,
        borderPrimary: `1px solid ${b}`,
        borderHoverPrimary: `1px solid ${p}`,
        borderPressedPrimary: `1px solid ${f}`,
        borderFocusPrimary: `1px solid ${p}`,
        borderDisabledPrimary: `1px solid ${b}`,
        rippleColorPrimary: b,
        colorInfo: T,
        colorHoverInfo: O,
        colorPressedInfo: P,
        colorFocusInfo: O,
        colorDisabledInfo: T,
        textColorInfo: g,
        textColorHoverInfo: g,
        textColorPressedInfo: g,
        textColorFocusInfo: g,
        textColorDisabledInfo: g,
        textColorTextInfo: T,
        textColorTextHoverInfo: O,
        textColorTextPressedInfo: P,
        textColorTextFocusInfo: O,
        textColorTextDisabledInfo: u,
        textColorGhostInfo: T,
        textColorGhostHoverInfo: O,
        textColorGhostPressedInfo: P,
        textColorGhostFocusInfo: O,
        textColorGhostDisabledInfo: T,
        borderInfo: `1px solid ${T}`,
        borderHoverInfo: `1px solid ${O}`,
        borderPressedInfo: `1px solid ${P}`,
        borderFocusInfo: `1px solid ${O}`,
        borderDisabledInfo: `1px solid ${T}`,
        rippleColorInfo: T,
        colorSuccess: R,
        colorHoverSuccess: V,
        colorPressedSuccess: x,
        colorFocusSuccess: V,
        colorDisabledSuccess: R,
        textColorSuccess: g,
        textColorHoverSuccess: g,
        textColorPressedSuccess: g,
        textColorFocusSuccess: g,
        textColorDisabledSuccess: g,
        textColorTextSuccess: R,
        textColorTextHoverSuccess: V,
        textColorTextPressedSuccess: x,
        textColorTextFocusSuccess: V,
        textColorTextDisabledSuccess: u,
        textColorGhostSuccess: R,
        textColorGhostHoverSuccess: V,
        textColorGhostPressedSuccess: x,
        textColorGhostFocusSuccess: V,
        textColorGhostDisabledSuccess: R,
        borderSuccess: `1px solid ${R}`,
        borderHoverSuccess: `1px solid ${V}`,
        borderPressedSuccess: `1px solid ${x}`,
        borderFocusSuccess: `1px solid ${V}`,
        borderDisabledSuccess: `1px solid ${R}`,
        rippleColorSuccess: R,
        colorWarning: S,
        colorHoverWarning: M,
        colorPressedWarning: C,
        colorFocusWarning: M,
        colorDisabledWarning: S,
        textColorWarning: g,
        textColorHoverWarning: g,
        textColorPressedWarning: g,
        textColorFocusWarning: g,
        textColorDisabledWarning: g,
        textColorTextWarning: S,
        textColorTextHoverWarning: M,
        textColorTextPressedWarning: C,
        textColorTextFocusWarning: M,
        textColorTextDisabledWarning: u,
        textColorGhostWarning: S,
        textColorGhostHoverWarning: M,
        textColorGhostPressedWarning: C,
        textColorGhostFocusWarning: M,
        textColorGhostDisabledWarning: S,
        borderWarning: `1px solid ${S}`,
        borderHoverWarning: `1px solid ${M}`,
        borderPressedWarning: `1px solid ${C}`,
        borderFocusWarning: `1px solid ${M}`,
        borderDisabledWarning: `1px solid ${S}`,
        rippleColorWarning: S,
        colorError: _,
        colorHoverError: y,
        colorPressedError: K,
        colorFocusError: y,
        colorDisabledError: _,
        textColorError: g,
        textColorHoverError: g,
        textColorPressedError: g,
        textColorFocusError: g,
        textColorDisabledError: g,
        textColorTextError: _,
        textColorTextHoverError: y,
        textColorTextPressedError: K,
        textColorTextFocusError: y,
        textColorTextDisabledError: u,
        textColorGhostError: _,
        textColorGhostHoverError: y,
        textColorGhostPressedError: K,
        textColorGhostFocusError: y,
        textColorGhostDisabledError: _,
        borderError: `1px solid ${_}`,
        borderHoverError: `1px solid ${y}`,
        borderPressedError: `1px solid ${K}`,
        borderFocusError: `1px solid ${y}`,
        borderDisabledError: `1px solid ${_}`,
        rippleColorError: _,
        waveOpacity: "0.6",
        fontWeight: H,
        fontWeightStrong: Q,
      });
    },
    q$ = { name: "Button", common: Et, self: Bh },
    Y$ = q$,
    X$ = {
      name: "Button",
      common: ce,
      self(e) {
        const t = Bh(e);
        return (
          (t.waveOpacity = "0.8"),
          (t.colorOpacitySecondary = "0.16"),
          (t.colorOpacitySecondaryHover = "0.2"),
          (t.colorOpacitySecondaryPressed = "0.12"),
          t
        );
      },
    },
    Dt = X$,
    Z$ = D([
      U(
        "button",
        `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
        [
          re("color", [
            A("border", { borderColor: "var(--n-border-color)" }),
            re("disabled", [
              A("border", { borderColor: "var(--n-border-color-disabled)" }),
            ]),
            Je("disabled", [
              D("&:focus", [
                A("state-border", {
                  borderColor: "var(--n-border-color-focus)",
                }),
              ]),
              D("&:hover", [
                A("state-border", {
                  borderColor: "var(--n-border-color-hover)",
                }),
              ]),
              D("&:active", [
                A("state-border", {
                  borderColor: "var(--n-border-color-pressed)",
                }),
              ]),
              re("pressed", [
                A("state-border", {
                  borderColor: "var(--n-border-color-pressed)",
                }),
              ]),
            ]),
          ]),
          re(
            "disabled",
            {
              backgroundColor: "var(--n-color-disabled)",
              color: "var(--n-text-color-disabled)",
            },
            [A("border", { border: "var(--n-border-disabled)" })]
          ),
          Je("disabled", [
            D(
              "&:focus",
              {
                backgroundColor: "var(--n-color-focus)",
                color: "var(--n-text-color-focus)",
              },
              [A("state-border", { border: "var(--n-border-focus)" })]
            ),
            D(
              "&:hover",
              {
                backgroundColor: "var(--n-color-hover)",
                color: "var(--n-text-color-hover)",
              },
              [A("state-border", { border: "var(--n-border-hover)" })]
            ),
            D(
              "&:active",
              {
                backgroundColor: "var(--n-color-pressed)",
                color: "var(--n-text-color-pressed)",
              },
              [A("state-border", { border: "var(--n-border-pressed)" })]
            ),
            re(
              "pressed",
              {
                backgroundColor: "var(--n-color-pressed)",
                color: "var(--n-text-color-pressed)",
              },
              [A("state-border", { border: "var(--n-border-pressed)" })]
            ),
          ]),
          re("loading", "cursor: wait;"),
          U(
            "base-wave",
            `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,
            [
              re("active", {
                zIndex: 1,
                animationName: "button-wave-spread, button-wave-opacity",
              }),
            ]
          ),
          ni && "MozBoxSizing" in document.createElement("div").style
            ? D("&::moz-focus-inner", { border: 0 })
            : null,
          A(
            "border, state-border",
            `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `
          ),
          A("border", { border: "var(--n-border)" }),
          A("state-border", {
            border: "var(--n-border)",
            borderColor: "#0000",
            zIndex: 1,
          }),
          A(
            "icon",
            `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,
            [
              U(
                "icon-slot",
                `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,
                [ol({ top: "50%", originalTransform: "translateY(-50%)" })]
              ),
              i$(),
            ]
          ),
          A(
            "content",
            `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,
            [
              D("~", [
                A("icon", { margin: "var(--n-icon-margin)", marginRight: 0 }),
              ]),
            ]
          ),
          re(
            "block",
            `
 display: flex;
 width: 100%;
 `
          ),
          re("dashed", [
            A("border, state-border", { borderStyle: "dashed !important" }),
          ]),
          re("disabled", {
            cursor: "not-allowed",
            opacity: "var(--n-opacity-disabled)",
          }),
        ]
      ),
      D("@keyframes button-wave-spread", {
        from: { boxShadow: "0 0 0.5px 0 var(--n-ripple-color)" },
        to: { boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)" },
      }),
      D("@keyframes button-wave-opacity", {
        from: { opacity: "var(--n-wave-opacity)" },
        to: { opacity: 0 },
      }),
    ]),
    J$ = Object.assign(Object.assign({}, Ae.props), {
      color: String,
      textColor: String,
      text: Boolean,
      block: Boolean,
      loading: Boolean,
      disabled: Boolean,
      circle: Boolean,
      size: String,
      ghost: Boolean,
      round: Boolean,
      secondary: Boolean,
      tertiary: Boolean,
      quaternary: Boolean,
      strong: Boolean,
      focusable: { type: Boolean, default: !0 },
      keyboard: { type: Boolean, default: !0 },
      tag: { type: String, default: "button" },
      type: { type: String, default: "default" },
      dashed: Boolean,
      renderIcon: Function,
      iconPlacement: { type: String, default: "left" },
      attrType: { type: String, default: "button" },
      bordered: { type: Boolean, default: !0 },
      onClick: [Function, Array],
      nativeFocusBehavior: { type: Boolean, default: !Mh },
    }),
    Q$ = ue({
      name: "Button",
      props: J$,
      setup(e) {
        const t = N(null),
          o = N(null),
          r = N(!1),
          n = ut(
            () =>
              !e.quaternary &&
              !e.tertiary &&
              !e.secondary &&
              !e.text &&
              (!e.color || e.ghost || e.dashed) &&
              e.bordered
          ),
          i = Oe(Oh, {}),
          { mergedSizeRef: l } = _s(
            {},
            {
              defaultSize: "medium",
              mergedSize: (P) => {
                const { size: R } = e;
                if (R) return R;
                const { size: V } = i;
                if (V) return V;
                const { mergedSize: x } = P || {};
                return x ? x.value : "medium";
              },
            }
          ),
          a = B(() => e.focusable && !e.disabled),
          s = (P) => {
            var R;
            a.value || P.preventDefault(),
              !e.nativeFocusBehavior &&
                (P.preventDefault(),
                !e.disabled &&
                  a.value &&
                  ((R = t.value) === null ||
                    R === void 0 ||
                    R.focus({ preventScroll: !0 })));
          },
          c = (P) => {
            var R;
            if (!e.disabled && !e.loading) {
              const { onClick: V } = e;
              V && Re(V, P),
                e.text || (R = o.value) === null || R === void 0 || R.play();
            }
          },
          d = (P) => {
            switch (P.key) {
              case "Enter":
                if (!e.keyboard) return;
                r.value = !1;
            }
          },
          u = (P) => {
            switch (P.key) {
              case "Enter":
                if (!e.keyboard || e.loading) {
                  P.preventDefault();
                  return;
                }
                r.value = !0;
            }
          },
          h = () => {
            r.value = !1;
          },
          {
            inlineThemeDisabled: p,
            mergedClsPrefixRef: f,
            mergedRtlRef: v,
          } = yt(e),
          b = Ae("Button", "-button", Z$, Y$, e, f),
          g = un("Button", v, f),
          T = B(() => {
            const P = b.value,
              {
                common: { cubicBezierEaseInOut: R, cubicBezierEaseOut: V },
                self: x,
              } = P,
              {
                rippleDuration: S,
                opacityDisabled: M,
                fontWeight: C,
                fontWeightStrong: _,
              } = x,
              y = l.value,
              {
                dashed: K,
                type: H,
                ghost: q,
                text: k,
                color: F,
                round: Q,
                circle: W,
                textColor: ee,
                secondary: ve,
                tertiary: ae,
                quaternary: he,
                strong: We,
              } = e,
              He = { "font-weight": We ? _ : C };
            let ze = {
              "--n-color": "initial",
              "--n-color-hover": "initial",
              "--n-color-pressed": "initial",
              "--n-color-focus": "initial",
              "--n-color-disabled": "initial",
              "--n-ripple-color": "initial",
              "--n-text-color": "initial",
              "--n-text-color-hover": "initial",
              "--n-text-color-pressed": "initial",
              "--n-text-color-focus": "initial",
              "--n-text-color-disabled": "initial",
            };
            const $e = H === "tertiary",
              Ve = H === "default",
              ge = $e ? "default" : H;
            if (k) {
              const Y = ee || F;
              ze = {
                "--n-color": "#0000",
                "--n-color-hover": "#0000",
                "--n-color-pressed": "#0000",
                "--n-color-focus": "#0000",
                "--n-color-disabled": "#0000",
                "--n-ripple-color": "#0000",
                "--n-text-color": Y || x[de("textColorText", ge)],
                "--n-text-color-hover": Y
                  ? rr(Y)
                  : x[de("textColorTextHover", ge)],
                "--n-text-color-pressed": Y
                  ? zi(Y)
                  : x[de("textColorTextPressed", ge)],
                "--n-text-color-focus": Y
                  ? rr(Y)
                  : x[de("textColorTextHover", ge)],
                "--n-text-color-disabled":
                  Y || x[de("textColorTextDisabled", ge)],
              };
            } else if (q || K) {
              const Y = ee || F;
              ze = {
                "--n-color": "#0000",
                "--n-color-hover": "#0000",
                "--n-color-pressed": "#0000",
                "--n-color-focus": "#0000",
                "--n-color-disabled": "#0000",
                "--n-ripple-color": F || x[de("rippleColor", ge)],
                "--n-text-color": Y || x[de("textColorGhost", ge)],
                "--n-text-color-hover": Y
                  ? rr(Y)
                  : x[de("textColorGhostHover", ge)],
                "--n-text-color-pressed": Y
                  ? zi(Y)
                  : x[de("textColorGhostPressed", ge)],
                "--n-text-color-focus": Y
                  ? rr(Y)
                  : x[de("textColorGhostHover", ge)],
                "--n-text-color-disabled":
                  Y || x[de("textColorGhostDisabled", ge)],
              };
            } else if (ve) {
              const Y = Ve
                  ? x.textColor
                  : $e
                  ? x.textColorTertiary
                  : x[de("color", ge)],
                z = F || Y,
                G = H !== "default" && H !== "tertiary";
              ze = {
                "--n-color": G
                  ? te(z, { alpha: Number(x.colorOpacitySecondary) })
                  : x.colorSecondary,
                "--n-color-hover": G
                  ? te(z, { alpha: Number(x.colorOpacitySecondaryHover) })
                  : x.colorSecondaryHover,
                "--n-color-pressed": G
                  ? te(z, { alpha: Number(x.colorOpacitySecondaryPressed) })
                  : x.colorSecondaryPressed,
                "--n-color-focus": G
                  ? te(z, { alpha: Number(x.colorOpacitySecondaryHover) })
                  : x.colorSecondaryHover,
                "--n-color-disabled": x.colorSecondary,
                "--n-ripple-color": "#0000",
                "--n-text-color": z,
                "--n-text-color-hover": z,
                "--n-text-color-pressed": z,
                "--n-text-color-focus": z,
                "--n-text-color-disabled": z,
              };
            } else if (ae || he) {
              const Y = Ve
                  ? x.textColor
                  : $e
                  ? x.textColorTertiary
                  : x[de("color", ge)],
                z = F || Y;
              ae
                ? ((ze["--n-color"] = x.colorTertiary),
                  (ze["--n-color-hover"] = x.colorTertiaryHover),
                  (ze["--n-color-pressed"] = x.colorTertiaryPressed),
                  (ze["--n-color-focus"] = x.colorSecondaryHover),
                  (ze["--n-color-disabled"] = x.colorTertiary))
                : ((ze["--n-color"] = x.colorQuaternary),
                  (ze["--n-color-hover"] = x.colorQuaternaryHover),
                  (ze["--n-color-pressed"] = x.colorQuaternaryPressed),
                  (ze["--n-color-focus"] = x.colorQuaternaryHover),
                  (ze["--n-color-disabled"] = x.colorQuaternary)),
                (ze["--n-ripple-color"] = "#0000"),
                (ze["--n-text-color"] = z),
                (ze["--n-text-color-hover"] = z),
                (ze["--n-text-color-pressed"] = z),
                (ze["--n-text-color-focus"] = z),
                (ze["--n-text-color-disabled"] = z);
            } else
              ze = {
                "--n-color": F || x[de("color", ge)],
                "--n-color-hover": F ? rr(F) : x[de("colorHover", ge)],
                "--n-color-pressed": F ? zi(F) : x[de("colorPressed", ge)],
                "--n-color-focus": F ? rr(F) : x[de("colorFocus", ge)],
                "--n-color-disabled": F || x[de("colorDisabled", ge)],
                "--n-ripple-color": F || x[de("rippleColor", ge)],
                "--n-text-color":
                  ee ||
                  (F
                    ? x.textColorPrimary
                    : $e
                    ? x.textColorTertiary
                    : x[de("textColor", ge)]),
                "--n-text-color-hover":
                  ee ||
                  (F ? x.textColorHoverPrimary : x[de("textColorHover", ge)]),
                "--n-text-color-pressed":
                  ee ||
                  (F
                    ? x.textColorPressedPrimary
                    : x[de("textColorPressed", ge)]),
                "--n-text-color-focus":
                  ee ||
                  (F ? x.textColorFocusPrimary : x[de("textColorFocus", ge)]),
                "--n-text-color-disabled":
                  ee ||
                  (F
                    ? x.textColorDisabledPrimary
                    : x[de("textColorDisabled", ge)]),
              };
            let Ue = {
              "--n-border": "initial",
              "--n-border-hover": "initial",
              "--n-border-pressed": "initial",
              "--n-border-focus": "initial",
              "--n-border-disabled": "initial",
            };
            k
              ? (Ue = {
                  "--n-border": "none",
                  "--n-border-hover": "none",
                  "--n-border-pressed": "none",
                  "--n-border-focus": "none",
                  "--n-border-disabled": "none",
                })
              : (Ue = {
                  "--n-border": x[de("border", ge)],
                  "--n-border-hover": x[de("borderHover", ge)],
                  "--n-border-pressed": x[de("borderPressed", ge)],
                  "--n-border-focus": x[de("borderFocus", ge)],
                  "--n-border-disabled": x[de("borderDisabled", ge)],
                });
            const {
                [de("height", y)]: at,
                [de("fontSize", y)]: w,
                [de("padding", y)]: I,
                [de("paddingRound", y)]: L,
                [de("iconSize", y)]: X,
                [de("borderRadius", y)]: Z,
                [de("iconMargin", y)]: ne,
                waveOpacity: se,
              } = x,
              oe = {
                "--n-width": W && !k ? at : "initial",
                "--n-height": k ? "initial" : at,
                "--n-font-size": w,
                "--n-padding": W || k ? "initial" : Q ? L : I,
                "--n-icon-size": X,
                "--n-icon-margin": ne,
                "--n-border-radius": k ? "initial" : W || Q ? at : Z,
              };
            return Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    {
                      "--n-bezier": R,
                      "--n-bezier-ease-out": V,
                      "--n-ripple-duration": S,
                      "--n-opacity-disabled": M,
                      "--n-wave-opacity": se,
                    },
                    He
                  ),
                  ze
                ),
                Ue
              ),
              oe
            );
          }),
          O = p
            ? wt(
                "button",
                B(() => {
                  let P = "";
                  const {
                    dashed: R,
                    type: V,
                    ghost: x,
                    text: S,
                    color: M,
                    round: C,
                    circle: _,
                    textColor: y,
                    secondary: K,
                    tertiary: H,
                    quaternary: q,
                    strong: k,
                  } = e;
                  R && (P += "a"),
                    x && (P += "b"),
                    S && (P += "c"),
                    C && (P += "d"),
                    _ && (P += "e"),
                    K && (P += "f"),
                    H && (P += "g"),
                    q && (P += "h"),
                    k && (P += "i"),
                    M && (P += "j" + Ui(M)),
                    y && (P += "k" + Ui(y));
                  const { value: F } = l;
                  return (P += "l" + F[0]), (P += "m" + V[0]), P;
                }),
                T,
                e
              )
            : void 0;
        return {
          selfElRef: t,
          waveElRef: o,
          mergedClsPrefix: f,
          mergedFocusable: a,
          mergedSize: l,
          showBorder: n,
          enterPressed: r,
          rtlEnabled: g,
          handleMousedown: s,
          handleKeydown: u,
          handleBlur: h,
          handleKeyup: d,
          handleClick: c,
          customColorCssVars: B(() => {
            const { color: P } = e;
            if (!P) return null;
            const R = rr(P);
            return {
              "--n-border-color": P,
              "--n-border-color-hover": R,
              "--n-border-color-pressed": zi(P),
              "--n-border-color-focus": R,
              "--n-border-color-disabled": P,
            };
          }),
          cssVars: p ? void 0 : T,
          themeClass: O == null ? void 0 : O.themeClass,
          onRender: O == null ? void 0 : O.onRender,
        };
      },
      render() {
        const { mergedClsPrefix: e, tag: t, onRender: o } = this;
        o == null || o();
        const r = Ut(
          this.$slots.default,
          (n) => n && m("span", { class: `${e}-button__content` }, n)
        );
        return m(
          t,
          {
            ref: "selfElRef",
            class: [
              this.themeClass,
              `${e}-button`,
              `${e}-button--${this.type}-type`,
              `${e}-button--${this.mergedSize}-type`,
              this.rtlEnabled && `${e}-button--rtl`,
              this.disabled && `${e}-button--disabled`,
              this.block && `${e}-button--block`,
              this.enterPressed && `${e}-button--pressed`,
              !this.text && this.dashed && `${e}-button--dashed`,
              this.color && `${e}-button--color`,
              this.secondary && `${e}-button--secondary`,
              this.loading && `${e}-button--loading`,
              this.ghost && `${e}-button--ghost`,
            ],
            tabindex: this.mergedFocusable ? 0 : -1,
            type: this.attrType,
            style: this.cssVars,
            disabled: this.disabled,
            onClick: this.handleClick,
            onBlur: this.handleBlur,
            onMousedown: this.handleMousedown,
            onKeyup: this.handleKeyup,
            onKeydown: this.handleKeydown,
          },
          this.iconPlacement === "right" && r,
          m(
            dh,
            { width: !0 },
            {
              default: () =>
                Ut(
                  this.$slots.icon,
                  (n) =>
                    (this.loading || this.renderIcon || n) &&
                    m(
                      "span",
                      {
                        class: `${e}-button__icon`,
                        style: { margin: $a(this.$slots.default) ? "0" : "" },
                      },
                      m(js, null, {
                        default: () =>
                          this.loading
                            ? m(Vs, {
                                clsPrefix: e,
                                key: "loading",
                                class: `${e}-icon-slot`,
                                strokeWidth: 20,
                              })
                            : m(
                                "div",
                                {
                                  key: "icon",
                                  class: `${e}-icon-slot`,
                                  role: "none",
                                },
                                this.renderIcon ? this.renderIcon() : n
                              ),
                      })
                    )
                ),
            }
          ),
          this.iconPlacement === "left" && r,
          this.text ? null : m(O2, { ref: "waveElRef", clsPrefix: e }),
          this.showBorder
            ? m("div", {
                "aria-hidden": !0,
                class: `${e}-button__border`,
                style: this.customColorCssVars,
              })
            : null,
          this.showBorder
            ? m("div", {
                "aria-hidden": !0,
                class: `${e}-button__state-border`,
                style: this.customColorCssVars,
              })
            : null
        );
      },
    }),
    Wo = Q$,
    lt = "0!important",
    Ah = "-1px!important";
  function Fr(e) {
    return re(e + "-type", [
      D("& +", [
        U("button", {}, [
          re(e + "-type", [
            A("border", { borderLeftWidth: lt }),
            A("state-border", { left: Ah }),
          ]),
        ]),
      ]),
    ]);
  }
  function Dr(e) {
    return re(e + "-type", [
      D("& +", [
        U("button", [
          re(e + "-type", [
            A("border", { borderTopWidth: lt }),
            A("state-border", { top: Ah }),
          ]),
        ]),
      ]),
    ]);
  }
  const eP = U(
      "button-group",
      `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,
      [
        Je("vertical", { flexDirection: "row" }, [
          Je("rtl", [
            U("button", [
              D(
                "&:first-child:not(:last-child)",
                `
 margin-right: ${lt};
 border-top-right-radius: ${lt};
 border-bottom-right-radius: ${lt};
 `
              ),
              D(
                "&:last-child:not(:first-child)",
                `
 margin-left: ${lt};
 border-top-left-radius: ${lt};
 border-bottom-left-radius: ${lt};
 `
              ),
              D(
                "&:not(:first-child):not(:last-child)",
                `
 margin-left: ${lt};
 margin-right: ${lt};
 border-radius: ${lt};
 `
              ),
              Fr("default"),
              re("ghost", [
                Fr("primary"),
                Fr("info"),
                Fr("success"),
                Fr("warning"),
                Fr("error"),
              ]),
            ]),
          ]),
        ]),
        re("vertical", { flexDirection: "column" }, [
          U("button", [
            D(
              "&:first-child:not(:last-child)",
              `
 margin-bottom: ${lt};
 margin-left: ${lt};
 margin-right: ${lt};
 border-bottom-left-radius: ${lt};
 border-bottom-right-radius: ${lt};
 `
            ),
            D(
              "&:last-child:not(:first-child)",
              `
 margin-top: ${lt};
 margin-left: ${lt};
 margin-right: ${lt};
 border-top-left-radius: ${lt};
 border-top-right-radius: ${lt};
 `
            ),
            D(
              "&:not(:first-child):not(:last-child)",
              `
 margin: ${lt};
 border-radius: ${lt};
 `
            ),
            Dr("default"),
            re("ghost", [
              Dr("primary"),
              Dr("info"),
              Dr("success"),
              Dr("warning"),
              Dr("error"),
            ]),
          ]),
        ]),
      ]
    ),
    tP = { size: { type: String, default: void 0 }, vertical: Boolean },
    Hh = ue({
      name: "ButtonGroup",
      props: tP,
      setup(e) {
        const { mergedClsPrefixRef: t, mergedRtlRef: o } = yt(e);
        return (
          _r("-button-group", eP, t),
          ot(Oh, e),
          { rtlEnabled: un("ButtonGroup", o, t), mergedClsPrefix: t }
        );
      },
      render() {
        const { mergedClsPrefix: e } = this;
        return m(
          "div",
          {
            class: [
              `${e}-button-group`,
              this.rtlEnabled && `${e}-button-group--rtl`,
              this.vertical && `${e}-button-group--vertical`,
            ],
            role: "group",
          },
          this.$slots
        );
      },
    }),
    oP = { titleFontSize: "22px" },
    rP = (e) => {
      const {
        borderRadius: t,
        fontSize: o,
        lineHeight: r,
        textColor2: n,
        textColor1: i,
        textColorDisabled: l,
        dividerColor: a,
        fontWeightStrong: s,
        primaryColor: c,
        baseColor: d,
        hoverColor: u,
        cardColor: h,
        modalColor: p,
        popoverColor: f,
      } = e;
      return Object.assign(Object.assign({}, oP), {
        borderRadius: t,
        borderColor: be(h, a),
        borderColorModal: be(p, a),
        borderColorPopover: be(f, a),
        textColor: n,
        titleFontWeight: s,
        titleTextColor: i,
        dayTextColor: l,
        fontSize: o,
        lineHeight: r,
        dateColorCurrent: c,
        dateTextColorCurrent: d,
        cellColorHover: be(h, u),
        cellColorHoverModal: be(p, u),
        cellColorHoverPopover: be(f, u),
        cellColor: h,
        cellColorModal: p,
        cellColorPopover: f,
        barColor: c,
      });
    },
    nP = { name: "Calendar", common: ce, peers: { Button: Dt }, self: rP },
    iP = nP,
    lP = (e) => {
      const {
        fontSize: t,
        boxShadow2: o,
        popoverColor: r,
        textColor2: n,
        borderRadius: i,
        borderColor: l,
        heightSmall: a,
        heightMedium: s,
        heightLarge: c,
        fontSizeSmall: d,
        fontSizeMedium: u,
        fontSizeLarge: h,
        dividerColor: p,
      } = e;
      return {
        panelFontSize: t,
        boxShadow: o,
        color: r,
        textColor: n,
        borderRadius: i,
        border: `1px solid ${l}`,
        heightSmall: a,
        heightMedium: s,
        heightLarge: c,
        fontSizeSmall: d,
        fontSizeMedium: u,
        fontSizeLarge: h,
        dividerColor: p,
      };
    },
    aP = {
      name: "ColorPicker",
      common: ce,
      peers: { Input: Yt, Button: Dt },
      self: lP,
    },
    sP = aP,
    cP = {
      paddingSmall: "12px 16px 12px",
      paddingMedium: "19px 24px 20px",
      paddingLarge: "23px 32px 24px",
      paddingHuge: "27px 40px 28px",
      titleFontSizeSmall: "16px",
      titleFontSizeMedium: "18px",
      titleFontSizeLarge: "18px",
      titleFontSizeHuge: "18px",
      closeIconSize: "18px",
      closeSize: "22px",
    },
    dP = (e) => {
      const {
        primaryColor: t,
        borderRadius: o,
        lineHeight: r,
        fontSize: n,
        cardColor: i,
        textColor2: l,
        textColor1: a,
        dividerColor: s,
        fontWeightStrong: c,
        closeIconColor: d,
        closeIconColorHover: u,
        closeIconColorPressed: h,
        closeColorHover: p,
        closeColorPressed: f,
        modalColor: v,
        boxShadow1: b,
        popoverColor: g,
        actionColor: T,
      } = e;
      return Object.assign(Object.assign({}, cP), {
        lineHeight: r,
        color: i,
        colorModal: v,
        colorPopover: g,
        colorTarget: t,
        colorEmbedded: T,
        colorEmbeddedModal: T,
        colorEmbeddedPopover: T,
        textColor: l,
        titleTextColor: a,
        borderColor: s,
        actionColor: T,
        titleFontWeight: c,
        closeColorHover: p,
        closeColorPressed: f,
        closeBorderRadius: o,
        closeIconColor: d,
        closeIconColorHover: u,
        closeIconColorPressed: h,
        fontSizeSmall: n,
        fontSizeMedium: n,
        fontSizeLarge: n,
        fontSizeHuge: n,
        boxShadow: b,
        borderRadius: o,
      });
    },
    uP = {
      name: "Card",
      common: ce,
      self(e) {
        const t = dP(e),
          { cardColor: o, modalColor: r, popoverColor: n } = e;
        return (
          (t.colorEmbedded = o),
          (t.colorEmbeddedModal = r),
          (t.colorEmbeddedPopover = n),
          t
        );
      },
    },
    Fh = uP,
    fP = (e) => ({
      dotSize: "8px",
      dotColor: "rgba(255, 255, 255, .3)",
      dotColorActive: "rgba(255, 255, 255, 1)",
      dotColorFocus: "rgba(255, 255, 255, .5)",
      dotLineWidth: "16px",
      dotLineWidthActive: "24px",
      arrowColor: "#eee",
    }),
    hP = { name: "Carousel", common: ce, self: fP },
    pP = hP,
    vP = {
      sizeSmall: "14px",
      sizeMedium: "16px",
      sizeLarge: "18px",
      labelPadding: "0 8px",
      labelFontWeight: "400",
    },
    gP = (e) => {
      const {
        baseColor: t,
        inputColorDisabled: o,
        cardColor: r,
        modalColor: n,
        popoverColor: i,
        textColorDisabled: l,
        borderColor: a,
        primaryColor: s,
        textColor2: c,
        fontSizeSmall: d,
        fontSizeMedium: u,
        fontSizeLarge: h,
        borderRadiusSmall: p,
        lineHeight: f,
      } = e;
      return Object.assign(Object.assign({}, vP), {
        labelLineHeight: f,
        fontSizeSmall: d,
        fontSizeMedium: u,
        fontSizeLarge: h,
        borderRadius: p,
        color: t,
        colorChecked: s,
        colorDisabled: o,
        colorDisabledChecked: o,
        colorTableHeader: r,
        colorTableHeaderModal: n,
        colorTableHeaderPopover: i,
        checkMarkColor: t,
        checkMarkColorDisabled: l,
        checkMarkColorDisabledChecked: l,
        border: `1px solid ${a}`,
        borderDisabled: `1px solid ${a}`,
        borderDisabledChecked: `1px solid ${a}`,
        borderChecked: `1px solid ${s}`,
        borderFocus: `1px solid ${s}`,
        boxShadowFocus: `0 0 0 2px ${te(s, { alpha: 0.3 })}`,
        textColor: c,
        textColorDisabled: l,
      });
    },
    mP = {
      name: "Checkbox",
      common: ce,
      self(e) {
        const { cardColor: t } = e,
          o = gP(e);
        return (o.color = "#0000"), (o.checkMarkColor = t), o;
      },
    },
    fn = mP,
    bP = (e) => {
      const {
        borderRadius: t,
        boxShadow2: o,
        popoverColor: r,
        textColor2: n,
        textColor3: i,
        primaryColor: l,
        textColorDisabled: a,
        dividerColor: s,
        hoverColor: c,
        fontSizeMedium: d,
        heightMedium: u,
      } = e;
      return {
        menuBorderRadius: t,
        menuColor: r,
        menuBoxShadow: o,
        menuDividerColor: s,
        menuHeight: "calc(var(--n-option-height) * 6.6)",
        optionArrowColor: i,
        optionHeight: u,
        optionFontSize: d,
        optionColorHover: c,
        optionTextColor: n,
        optionTextColorActive: l,
        optionTextColorDisabled: a,
        optionCheckMarkColor: l,
        loadingColor: l,
        columnWidth: "180px",
      };
    },
    xP = {
      name: "Cascader",
      common: ce,
      peers: {
        InternalSelectMenu: li,
        InternalSelection: Zs,
        Scrollbar: Ft,
        Checkbox: fn,
        Empty: Gs,
      },
      self: bP,
    },
    CP = xP,
    yP = {
      name: "Code",
      common: ce,
      self(e) {
        const {
          textColor2: t,
          fontSize: o,
          fontWeightStrong: r,
          textColor3: n,
        } = e;
        return {
          textColor: t,
          fontSize: o,
          fontWeightStrong: r,
          "mono-3": "#5c6370",
          "hue-1": "#56b6c2",
          "hue-2": "#61aeee",
          "hue-3": "#c678dd",
          "hue-4": "#98c379",
          "hue-5": "#e06c75",
          "hue-5-2": "#be5046",
          "hue-6": "#d19a66",
          "hue-6-2": "#e6c07b",
          lineNumberTextColor: n,
        };
      },
    },
    Dh = yP,
    wP = (e) => {
      const {
        fontWeight: t,
        textColor1: o,
        textColor2: r,
        textColorDisabled: n,
        dividerColor: i,
        fontSize: l,
      } = e;
      return {
        titleFontSize: l,
        titleFontWeight: t,
        dividerColor: i,
        titleTextColor: o,
        titleTextColorDisabled: n,
        fontSize: l,
        textColor: r,
        arrowColor: r,
        arrowColorDisabled: n,
        itemMargin: "16px 0 0 0",
      };
    },
    SP = { name: "Collapse", common: ce, self: wP },
    $P = SP,
    PP = (e) => {
      const { cubicBezierEaseInOut: t } = e;
      return { bezier: t };
    },
    TP = { name: "CollapseTransition", common: ce, self: PP },
    zP = TP,
    IP = {
      abstract: Boolean,
      bordered: { type: Boolean, default: void 0 },
      clsPrefix: String,
      locale: Object,
      dateLocale: Object,
      namespace: String,
      rtl: Array,
      tag: { type: String, default: "div" },
      hljs: Object,
      katex: Object,
      theme: Object,
      themeOverrides: Object,
      componentOptions: Object,
      icons: Object,
      breakpoints: Object,
      preflightStyleDisabled: Boolean,
      inlineThemeDisabled: { type: Boolean, default: void 0 },
      as: {
        type: String,
        validator: () => (
          Kn(
            "config-provider",
            "`as` is deprecated, please use `tag` instead."
          ),
          !0
        ),
        default: void 0,
      },
    },
    _P = ue({
      name: "ConfigProvider",
      alias: ["App"],
      props: IP,
      setup(e) {
        const t = Oe(Io, null),
          o = B(() => {
            const { theme: f } = e;
            if (f === null) return;
            const v = t == null ? void 0 : t.mergedThemeRef.value;
            return f === void 0
              ? v
              : v === void 0
              ? f
              : Object.assign({}, v, f);
          }),
          r = B(() => {
            const { themeOverrides: f } = e;
            if (f !== null) {
              if (f === void 0)
                return t == null ? void 0 : t.mergedThemeOverridesRef.value;
              {
                const v = t == null ? void 0 : t.mergedThemeOverridesRef.value;
                return v === void 0 ? f : Sn({}, v, f);
              }
            }
          }),
          n = ut(() => {
            const { namespace: f } = e;
            return f === void 0
              ? t == null
                ? void 0
                : t.mergedNamespaceRef.value
              : f;
          }),
          i = ut(() => {
            const { bordered: f } = e;
            return f === void 0
              ? t == null
                ? void 0
                : t.mergedBorderedRef.value
              : f;
          }),
          l = B(() => {
            const { icons: f } = e;
            return f === void 0
              ? t == null
                ? void 0
                : t.mergedIconsRef.value
              : f;
          }),
          a = B(() => {
            const { componentOptions: f } = e;
            return f !== void 0
              ? f
              : t == null
              ? void 0
              : t.mergedComponentPropsRef.value;
          }),
          s = B(() => {
            const { clsPrefix: f } = e;
            return f !== void 0
              ? f
              : t == null
              ? void 0
              : t.mergedClsPrefixRef.value;
          }),
          c = B(() => {
            var f;
            const { rtl: v } = e;
            if (v === void 0) return t == null ? void 0 : t.mergedRtlRef.value;
            const b = {};
            for (const g of v)
              (b[g.name] = Wi(g)),
                (f = g.peers) === null ||
                  f === void 0 ||
                  f.forEach((T) => {
                    T.name in b || (b[T.name] = Wi(T));
                  });
            return b;
          }),
          d = B(
            () =>
              e.breakpoints ||
              (t == null ? void 0 : t.mergedBreakpointsRef.value)
          ),
          u =
            e.inlineThemeDisabled ||
            (t == null ? void 0 : t.inlineThemeDisabled),
          h =
            e.preflightStyleDisabled ||
            (t == null ? void 0 : t.preflightStyleDisabled),
          p = B(() => {
            const { value: f } = o,
              { value: v } = r,
              b = v && Object.keys(v).length !== 0,
              g = f == null ? void 0 : f.name;
            return g
              ? b
                ? `${g}-${Un(JSON.stringify(r.value))}`
                : g
              : b
              ? Un(JSON.stringify(r.value))
              : "";
          });
        return (
          ot(Io, {
            mergedThemeHashRef: p,
            mergedBreakpointsRef: d,
            mergedRtlRef: c,
            mergedIconsRef: l,
            mergedComponentPropsRef: a,
            mergedBorderedRef: i,
            mergedNamespaceRef: n,
            mergedClsPrefixRef: s,
            mergedLocaleRef: B(() => {
              const { locale: f } = e;
              if (f !== null)
                return f === void 0
                  ? t == null
                    ? void 0
                    : t.mergedLocaleRef.value
                  : f;
            }),
            mergedDateLocaleRef: B(() => {
              const { dateLocale: f } = e;
              if (f !== null)
                return f === void 0
                  ? t == null
                    ? void 0
                    : t.mergedDateLocaleRef.value
                  : f;
            }),
            mergedHljsRef: B(() => {
              const { hljs: f } = e;
              return f === void 0
                ? t == null
                  ? void 0
                  : t.mergedHljsRef.value
                : f;
            }),
            mergedKatexRef: B(() => {
              const { katex: f } = e;
              return f === void 0
                ? t == null
                  ? void 0
                  : t.mergedKatexRef.value
                : f;
            }),
            mergedThemeRef: o,
            mergedThemeOverridesRef: r,
            inlineThemeDisabled: u || !1,
            preflightStyleDisabled: h || !1,
          }),
          {
            mergedClsPrefix: s,
            mergedBordered: i,
            mergedNamespace: n,
            mergedTheme: o,
            mergedThemeOverrides: r,
          }
        );
      },
      render() {
        var e, t, o, r;
        return this.abstract
          ? (r = (o = this.$slots).default) === null || r === void 0
            ? void 0
            : r.call(o)
          : m(
              this.as || this.tag,
              { class: `${this.mergedClsPrefix || sh}-config-provider` },
              (t = (e = this.$slots).default) === null || t === void 0
                ? void 0
                : t.call(e)
            );
      },
    }),
    MP = {
      name: "Popselect",
      common: ce,
      peers: { Popover: kr, InternalSelectMenu: li },
    },
    Lh = MP;
  function Wh(e) {
    const { boxShadow2: t } = e;
    return { menuBoxShadow: t };
  }
  const kP = {
      name: "Select",
      common: Et,
      peers: { InternalSelection: Ih, InternalSelectMenu: Ch },
      self: Wh,
    },
    EP = kP,
    RP = {
      name: "Select",
      common: ce,
      peers: { InternalSelection: Zs, InternalSelectMenu: li },
      self: Wh,
    },
    Nh = RP,
    OP = D([
      U(
        "select",
        `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `
      ),
      U(
        "select-menu",
        `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,
        [
          Xs({
            originalTransition:
              "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)",
          }),
        ]
      ),
    ]),
    BP = Object.assign(Object.assign({}, Ae.props), {
      to: zo.propTo,
      bordered: { type: Boolean, default: void 0 },
      clearable: Boolean,
      clearFilterAfterSelect: { type: Boolean, default: !0 },
      options: { type: Array, default: () => [] },
      defaultValue: { type: [String, Number, Array], default: null },
      value: [String, Number, Array],
      placeholder: String,
      menuProps: Object,
      multiple: Boolean,
      size: String,
      filterable: Boolean,
      disabled: { type: Boolean, default: void 0 },
      remote: Boolean,
      loading: Boolean,
      filter: Function,
      placement: { type: String, default: "bottom-start" },
      widthMode: { type: String, default: "trigger" },
      tag: Boolean,
      onCreate: Function,
      fallbackOption: { type: [Function, Boolean], default: void 0 },
      show: { type: Boolean, default: void 0 },
      showArrow: { type: Boolean, default: !0 },
      maxTagCount: [Number, String],
      consistentMenuWidth: { type: Boolean, default: !0 },
      virtualScroll: { type: Boolean, default: !0 },
      labelField: { type: String, default: "label" },
      valueField: { type: String, default: "value" },
      childrenField: { type: String, default: "children" },
      renderLabel: Function,
      renderOption: Function,
      renderTag: Function,
      "onUpdate:value": [Function, Array],
      inputProps: Object,
      nodeProps: Function,
      ignoreComposition: { type: Boolean, default: !0 },
      showOnFocus: Boolean,
      onUpdateValue: [Function, Array],
      onBlur: [Function, Array],
      onClear: [Function, Array],
      onFocus: [Function, Array],
      onScroll: [Function, Array],
      onSearch: [Function, Array],
      onUpdateShow: [Function, Array],
      "onUpdate:show": [Function, Array],
      displayDirective: { type: String, default: "show" },
      resetMenuOnOptionsChange: { type: Boolean, default: !0 },
      status: String,
      showCheckmark: { type: Boolean, default: !0 },
      onChange: [Function, Array],
      items: Array,
    }),
    AP = ue({
      name: "Select",
      props: BP,
      setup(e) {
        const {
            mergedClsPrefixRef: t,
            mergedBorderedRef: o,
            namespaceRef: r,
            inlineThemeDisabled: n,
          } = yt(e),
          i = Ae("Select", "-select", OP, EP, e, t),
          l = N(e.defaultValue),
          a = ke(e, "value"),
          s = yr(a, l),
          c = N(!1),
          d = N(""),
          u = B(() => {
            const { valueField: $, childrenField: j } = e,
              le = g$($, j);
            return Us(y.value, le);
          }),
          h = B(() => b$(C.value, e.valueField, e.childrenField)),
          p = N(!1),
          f = yr(ke(e, "show"), p),
          v = N(null),
          b = N(null),
          g = N(null),
          { localeRef: T } = Ns("Select"),
          O = B(() => {
            var $;
            return ($ = e.placeholder) !== null && $ !== void 0
              ? $
              : T.value.placeholder;
          }),
          P = Cl(e, ["items", "options"]),
          R = [],
          V = N([]),
          x = N([]),
          S = N(new Map()),
          M = B(() => {
            const { fallbackOption: $ } = e;
            if ($ === void 0) {
              const { labelField: j, valueField: le } = e;
              return (me) => ({ [j]: String(me), [le]: me });
            }
            return $ === !1 ? !1 : (j) => Object.assign($(j), { value: j });
          }),
          C = B(() => x.value.concat(V.value).concat(P.value)),
          _ = B(() => {
            const { filter: $ } = e;
            if ($) return $;
            const { labelField: j, valueField: le } = e;
            return (me, xe) => {
              if (!xe) return !1;
              const Pe = xe[j];
              if (typeof Pe == "string") return da(me, Pe);
              const Ie = xe[le];
              return typeof Ie == "string"
                ? da(me, Ie)
                : typeof Ie == "number"
                ? da(me, String(Ie))
                : !1;
            };
          }),
          y = B(() => {
            if (e.remote) return P.value;
            {
              const { value: $ } = C,
                { value: j } = d;
              return !j.length || !e.filterable
                ? $
                : m$($, _.value, j, e.childrenField);
            }
          });
        function K($) {
          const j = e.remote,
            { value: le } = S,
            { value: me } = h,
            { value: xe } = M,
            Pe = [];
          return (
            $.forEach((Ie) => {
              if (me.has(Ie)) Pe.push(me.get(Ie));
              else if (j && le.has(Ie)) Pe.push(le.get(Ie));
              else if (xe) {
                const Ee = xe(Ie);
                Ee && Pe.push(Ee);
              }
            }),
            Pe
          );
        }
        const H = B(() => {
            if (e.multiple) {
              const { value: $ } = s;
              return Array.isArray($) ? K($) : [];
            }
            return null;
          }),
          q = B(() => {
            const { value: $ } = s;
            return !e.multiple && !Array.isArray($)
              ? $ === null
                ? null
                : K([$])[0] || null
              : null;
          }),
          k = _s(e),
          { mergedSizeRef: F, mergedDisabledRef: Q, mergedStatusRef: W } = k;
        function ee($, j) {
          const { onChange: le, "onUpdate:value": me, onUpdateValue: xe } = e,
            { nTriggerFormChange: Pe, nTriggerFormInput: Ie } = k;
          le && Re(le, $, j),
            xe && Re(xe, $, j),
            me && Re(me, $, j),
            (l.value = $),
            Pe(),
            Ie();
        }
        function ve($) {
          const { onBlur: j } = e,
            { nTriggerFormBlur: le } = k;
          j && Re(j, $), le();
        }
        function ae() {
          const { onClear: $ } = e;
          $ && Re($);
        }
        function he($) {
          const { onFocus: j, showOnFocus: le } = e,
            { nTriggerFormFocus: me } = k;
          j && Re(j, $), me(), le && Ve();
        }
        function We($) {
          const { onSearch: j } = e;
          j && Re(j, $);
        }
        function He($) {
          const { onScroll: j } = e;
          j && Re(j, $);
        }
        function ze() {
          var $;
          const { remote: j, multiple: le } = e;
          if (j) {
            const { value: me } = S;
            if (le) {
              const { valueField: xe } = e;
              ($ = H.value) === null ||
                $ === void 0 ||
                $.forEach((Pe) => {
                  me.set(Pe[xe], Pe);
                });
            } else {
              const xe = q.value;
              xe && me.set(xe[e.valueField], xe);
            }
          }
        }
        function $e($) {
          const { onUpdateShow: j, "onUpdate:show": le } = e;
          j && Re(j, $), le && Re(le, $), (p.value = $);
        }
        function Ve() {
          Q.value || ($e(!0), (p.value = !0), e.filterable && mt());
        }
        function ge() {
          $e(!1);
        }
        function Ue() {
          (d.value = ""), (x.value = R);
        }
        const at = N(!1);
        function w() {
          e.filterable && (at.value = !0);
        }
        function I() {
          e.filterable && ((at.value = !1), f.value || Ue());
        }
        function L() {
          Q.value || (f.value ? (e.filterable ? mt() : ge()) : Ve());
        }
        function X($) {
          var j, le;
          (!(
            (le =
              (j = g.value) === null || j === void 0 ? void 0 : j.selfRef) ===
              null || le === void 0
          ) &&
            le.contains($.relatedTarget)) ||
            ((c.value = !1), ve($), ge());
        }
        function Z($) {
          he($), (c.value = !0);
        }
        function ne($) {
          c.value = !0;
        }
        function se($) {
          var j;
          (!((j = v.value) === null || j === void 0) &&
            j.$el.contains($.relatedTarget)) ||
            ((c.value = !1), ve($), ge());
        }
        function oe() {
          var $;
          ($ = v.value) === null || $ === void 0 || $.focus(), ge();
        }
        function Y($) {
          var j;
          f.value &&
            ((!((j = v.value) === null || j === void 0) &&
              j.$el.contains(jn($))) ||
              ge());
        }
        function z($) {
          if (!Array.isArray($)) return [];
          if (M.value) return Array.from($);
          {
            const { remote: j } = e,
              { value: le } = h;
            if (j) {
              const { value: me } = S;
              return $.filter((xe) => le.has(xe) || me.has(xe));
            } else return $.filter((me) => le.has(me));
          }
        }
        function G($) {
          ie($.rawNode);
        }
        function ie($) {
          if (Q.value) return;
          const {
            tag: j,
            remote: le,
            clearFilterAfterSelect: me,
            valueField: xe,
          } = e;
          if (j && !le) {
            const { value: Pe } = x,
              Ie = Pe[0] || null;
            if (Ie) {
              const Ee = V.value;
              Ee.length ? Ee.push(Ie) : (V.value = [Ie]), (x.value = R);
            }
          }
          if ((le && S.value.set($[xe], $), e.multiple)) {
            const Pe = z(s.value),
              Ie = Pe.findIndex((Ee) => Ee === $[xe]);
            if (~Ie) {
              if ((Pe.splice(Ie, 1), j && !le)) {
                const Ee = fe($[xe]);
                ~Ee && (V.value.splice(Ee, 1), me && (d.value = ""));
              }
            } else Pe.push($[xe]), me && (d.value = "");
            ee(Pe, K(Pe));
          } else {
            if (j && !le) {
              const Pe = fe($[xe]);
              ~Pe ? (V.value = [V.value[Pe]]) : (V.value = R);
            }
            st(), ge(), ee($[xe], $);
          }
        }
        function fe($) {
          return V.value.findIndex((le) => le[e.valueField] === $);
        }
        function ye($) {
          f.value || Ve();
          const { value: j } = $.target;
          d.value = j;
          const { tag: le, remote: me } = e;
          if ((We(j), le && !me)) {
            if (!j) {
              x.value = R;
              return;
            }
            const { onCreate: xe } = e,
              Pe = xe ? xe(j) : { [e.labelField]: j, [e.valueField]: j },
              { valueField: Ie } = e;
            P.value.some((Ee) => Ee[Ie] === Pe[Ie]) ||
            V.value.some((Ee) => Ee[Ie] === Pe[Ie])
              ? (x.value = R)
              : (x.value = [Pe]);
          }
        }
        function _e($) {
          $.stopPropagation();
          const { multiple: j } = e;
          !j && e.filterable && ge(), ae(), j ? ee([], []) : ee(null, null);
        }
        function De($) {
          !en($, "action") && !en($, "empty") && $.preventDefault();
        }
        function Fe($) {
          He($);
        }
        function Ke($) {
          var j, le, me, xe, Pe;
          switch ($.key) {
            case " ":
              if (e.filterable) break;
              $.preventDefault();
            case "Enter":
              if (
                !(!((j = v.value) === null || j === void 0) && j.isComposing)
              ) {
                if (f.value) {
                  const Ie =
                    (le = g.value) === null || le === void 0
                      ? void 0
                      : le.getPendingTmNode();
                  Ie ? G(Ie) : e.filterable || (ge(), st());
                } else if ((Ve(), e.tag && at.value)) {
                  const Ie = x.value[0];
                  if (Ie) {
                    const Ee = Ie[e.valueField],
                      { value: bt } = s;
                    (e.multiple &&
                      Array.isArray(bt) &&
                      bt.some((Xt) => Xt === Ee)) ||
                      ie(Ie);
                  }
                }
              }
              $.preventDefault();
              break;
            case "ArrowUp":
              if (($.preventDefault(), e.loading)) return;
              f.value &&
                ((me = g.value) === null || me === void 0 || me.prev());
              break;
            case "ArrowDown":
              if (($.preventDefault(), e.loading)) return;
              f.value
                ? (xe = g.value) === null || xe === void 0 || xe.next()
                : Ve();
              break;
            case "Escape":
              f.value && (Cb($), ge()),
                (Pe = v.value) === null || Pe === void 0 || Pe.focus();
              break;
          }
        }
        function st() {
          var $;
          ($ = v.value) === null || $ === void 0 || $.focus();
        }
        function mt() {
          var $;
          ($ = v.value) === null || $ === void 0 || $.focusInput();
        }
        function no() {
          var $;
          f.value &&
            (($ = b.value) === null || $ === void 0 || $.syncPosition());
        }
        ze(), rt(ke(e, "options"), ze);
        const Rt = {
            focus: () => {
              var $;
              ($ = v.value) === null || $ === void 0 || $.focus();
            },
            blur: () => {
              var $;
              ($ = v.value) === null || $ === void 0 || $.blur();
            },
          },
          St = B(() => {
            const {
              self: { menuBoxShadow: $ },
            } = i.value;
            return { "--n-menu-box-shadow": $ };
          }),
          Ge = n ? wt("select", void 0, St, e) : void 0;
        return Object.assign(Object.assign({}, Rt), {
          mergedStatus: W,
          mergedClsPrefix: t,
          mergedBordered: o,
          namespace: r,
          treeMate: u,
          isMounted: xl(),
          triggerRef: v,
          menuRef: g,
          pattern: d,
          uncontrolledShow: p,
          mergedShow: f,
          adjustedTo: zo(e),
          uncontrolledValue: l,
          mergedValue: s,
          followerRef: b,
          localizedPlaceholder: O,
          selectedOption: q,
          selectedOptions: H,
          mergedSize: F,
          mergedDisabled: Q,
          focused: c,
          activeWithoutMenuOpen: at,
          inlineThemeDisabled: n,
          onTriggerInputFocus: w,
          onTriggerInputBlur: I,
          handleTriggerOrMenuResize: no,
          handleMenuFocus: ne,
          handleMenuBlur: se,
          handleMenuTabOut: oe,
          handleTriggerClick: L,
          handleToggle: G,
          handleDeleteOption: ie,
          handlePatternInput: ye,
          handleClear: _e,
          handleTriggerBlur: X,
          handleTriggerFocus: Z,
          handleKeydown: Ke,
          handleMenuAfterLeave: Ue,
          handleMenuClickOutside: Y,
          handleMenuScroll: Fe,
          handleMenuKeydown: Ke,
          handleMenuMousedown: De,
          mergedTheme: i,
          cssVars: n ? void 0 : St,
          themeClass: Ge == null ? void 0 : Ge.themeClass,
          onRender: Ge == null ? void 0 : Ge.onRender,
        });
      },
      render() {
        return m(
          "div",
          { class: `${this.mergedClsPrefix}-select` },
          m($s, null, {
            default: () => [
              m(Ps, null, {
                default: () =>
                  m(
                    n$,
                    {
                      ref: "triggerRef",
                      inlineThemeDisabled: this.inlineThemeDisabled,
                      status: this.mergedStatus,
                      inputProps: this.inputProps,
                      clsPrefix: this.mergedClsPrefix,
                      showArrow: this.showArrow,
                      maxTagCount: this.maxTagCount,
                      bordered: this.mergedBordered,
                      active: this.activeWithoutMenuOpen || this.mergedShow,
                      pattern: this.pattern,
                      placeholder: this.localizedPlaceholder,
                      selectedOption: this.selectedOption,
                      selectedOptions: this.selectedOptions,
                      multiple: this.multiple,
                      renderTag: this.renderTag,
                      renderLabel: this.renderLabel,
                      filterable: this.filterable,
                      clearable: this.clearable,
                      disabled: this.mergedDisabled,
                      size: this.mergedSize,
                      theme: this.mergedTheme.peers.InternalSelection,
                      labelField: this.labelField,
                      valueField: this.valueField,
                      themeOverrides:
                        this.mergedTheme.peerOverrides.InternalSelection,
                      loading: this.loading,
                      focused: this.focused,
                      onClick: this.handleTriggerClick,
                      onDeleteOption: this.handleDeleteOption,
                      onPatternInput: this.handlePatternInput,
                      onClear: this.handleClear,
                      onBlur: this.handleTriggerBlur,
                      onFocus: this.handleTriggerFocus,
                      onKeydown: this.handleKeydown,
                      onPatternBlur: this.onTriggerInputBlur,
                      onPatternFocus: this.onTriggerInputFocus,
                      onResize: this.handleTriggerOrMenuResize,
                      ignoreComposition: this.ignoreComposition,
                    },
                    {
                      arrow: () => {
                        var e, t;
                        return [
                          (t = (e = this.$slots).arrow) === null || t === void 0
                            ? void 0
                            : t.call(e),
                        ];
                      },
                    }
                  ),
              }),
              m(
                zs,
                {
                  ref: "followerRef",
                  show: this.mergedShow,
                  to: this.adjustedTo,
                  teleportDisabled: this.adjustedTo === zo.tdkey,
                  containerClass: this.namespace,
                  width: this.consistentMenuWidth ? "target" : void 0,
                  minWidth: "target",
                  placement: this.placement,
                },
                {
                  default: () =>
                    m(
                      vo,
                      {
                        name: "fade-in-scale-up-transition",
                        appear: this.isMounted,
                        onAfterLeave: this.handleMenuAfterLeave,
                      },
                      {
                        default: () => {
                          var e, t, o;
                          return this.mergedShow ||
                            this.displayDirective === "show"
                            ? ((e = this.onRender) === null ||
                                e === void 0 ||
                                e.call(this),
                              ln(
                                m(
                                  E2,
                                  Object.assign({}, this.menuProps, {
                                    ref: "menuRef",
                                    onResize: this.handleTriggerOrMenuResize,
                                    inlineThemeDisabled:
                                      this.inlineThemeDisabled,
                                    virtualScroll:
                                      this.consistentMenuWidth &&
                                      this.virtualScroll,
                                    class: [
                                      `${this.mergedClsPrefix}-select-menu`,
                                      this.themeClass,
                                      (t = this.menuProps) === null ||
                                      t === void 0
                                        ? void 0
                                        : t.class,
                                    ],
                                    clsPrefix: this.mergedClsPrefix,
                                    focusable: !0,
                                    labelField: this.labelField,
                                    valueField: this.valueField,
                                    autoPending: !0,
                                    nodeProps: this.nodeProps,
                                    theme:
                                      this.mergedTheme.peers.InternalSelectMenu,
                                    themeOverrides:
                                      this.mergedTheme.peerOverrides
                                        .InternalSelectMenu,
                                    treeMate: this.treeMate,
                                    multiple: this.multiple,
                                    size: "medium",
                                    renderOption: this.renderOption,
                                    renderLabel: this.renderLabel,
                                    value: this.mergedValue,
                                    style: [
                                      (o = this.menuProps) === null ||
                                      o === void 0
                                        ? void 0
                                        : o.style,
                                      this.cssVars,
                                    ],
                                    onToggle: this.handleToggle,
                                    onScroll: this.handleMenuScroll,
                                    onFocus: this.handleMenuFocus,
                                    onBlur: this.handleMenuBlur,
                                    onKeydown: this.handleMenuKeydown,
                                    onTabOut: this.handleMenuTabOut,
                                    onMousedown: this.handleMenuMousedown,
                                    show: this.mergedShow,
                                    showCheckmark: this.showCheckmark,
                                    resetMenuOnOptionsChange:
                                      this.resetMenuOnOptionsChange,
                                  }),
                                  {
                                    empty: () => {
                                      var r, n;
                                      return [
                                        (n = (r = this.$slots).empty) ===
                                          null || n === void 0
                                          ? void 0
                                          : n.call(r),
                                      ];
                                    },
                                    action: () => {
                                      var r, n;
                                      return [
                                        (n = (r = this.$slots).action) ===
                                          null || n === void 0
                                          ? void 0
                                          : n.call(r),
                                      ];
                                    },
                                  }
                                ),
                                this.displayDirective === "show"
                                  ? [
                                      [bs, this.mergedShow],
                                      [
                                        Yi,
                                        this.handleMenuClickOutside,
                                        void 0,
                                        { capture: !0 },
                                      ],
                                    ]
                                  : [
                                      [
                                        Yi,
                                        this.handleMenuClickOutside,
                                        void 0,
                                        { capture: !0 },
                                      ],
                                    ]
                              ))
                            : null;
                        },
                      }
                    ),
                }
              ),
            ],
          })
        );
      },
    }),
    HP = {
      itemPaddingSmall: "0 4px",
      itemMarginSmall: "0 0 0 8px",
      itemMarginSmallRtl: "0 8px 0 0",
      itemPaddingMedium: "0 4px",
      itemMarginMedium: "0 0 0 8px",
      itemMarginMediumRtl: "0 8px 0 0",
      itemPaddingLarge: "0 4px",
      itemMarginLarge: "0 0 0 8px",
      itemMarginLargeRtl: "0 8px 0 0",
      buttonIconSizeSmall: "14px",
      buttonIconSizeMedium: "16px",
      buttonIconSizeLarge: "18px",
      inputWidthSmall: "60px",
      selectWidthSmall: "unset",
      inputMarginSmall: "0 0 0 8px",
      inputMarginSmallRtl: "0 8px 0 0",
      selectMarginSmall: "0 0 0 8px",
      prefixMarginSmall: "0 8px 0 0",
      suffixMarginSmall: "0 0 0 8px",
      inputWidthMedium: "60px",
      selectWidthMedium: "unset",
      inputMarginMedium: "0 0 0 8px",
      inputMarginMediumRtl: "0 8px 0 0",
      selectMarginMedium: "0 0 0 8px",
      prefixMarginMedium: "0 8px 0 0",
      suffixMarginMedium: "0 0 0 8px",
      inputWidthLarge: "60px",
      selectWidthLarge: "unset",
      inputMarginLarge: "0 0 0 8px",
      inputMarginLargeRtl: "0 8px 0 0",
      selectMarginLarge: "0 0 0 8px",
      prefixMarginLarge: "0 8px 0 0",
      suffixMarginLarge: "0 0 0 8px",
    },
    FP = (e) => {
      const {
        textColor2: t,
        primaryColor: o,
        primaryColorHover: r,
        primaryColorPressed: n,
        inputColorDisabled: i,
        textColorDisabled: l,
        borderColor: a,
        borderRadius: s,
        fontSizeTiny: c,
        fontSizeSmall: d,
        fontSizeMedium: u,
        heightTiny: h,
        heightSmall: p,
        heightMedium: f,
      } = e;
      return Object.assign(Object.assign({}, HP), {
        buttonColor: "#0000",
        buttonColorHover: "#0000",
        buttonColorPressed: "#0000",
        buttonBorder: `1px solid ${a}`,
        buttonBorderHover: `1px solid ${a}`,
        buttonBorderPressed: `1px solid ${a}`,
        buttonIconColor: t,
        buttonIconColorHover: t,
        buttonIconColorPressed: t,
        itemTextColor: t,
        itemTextColorHover: r,
        itemTextColorPressed: n,
        itemTextColorActive: o,
        itemTextColorDisabled: l,
        itemColor: "#0000",
        itemColorHover: "#0000",
        itemColorPressed: "#0000",
        itemColorActive: "#0000",
        itemColorActiveHover: "#0000",
        itemColorDisabled: i,
        itemBorder: "1px solid #0000",
        itemBorderHover: "1px solid #0000",
        itemBorderPressed: "1px solid #0000",
        itemBorderActive: `1px solid ${o}`,
        itemBorderDisabled: `1px solid ${a}`,
        itemBorderRadius: s,
        itemSizeSmall: h,
        itemSizeMedium: p,
        itemSizeLarge: f,
        itemFontSizeSmall: c,
        itemFontSizeMedium: d,
        itemFontSizeLarge: u,
        jumperFontSizeSmall: c,
        jumperFontSizeMedium: d,
        jumperFontSizeLarge: u,
        jumperTextColor: t,
        jumperTextColorDisabled: l,
      });
    },
    DP = {
      name: "Pagination",
      common: ce,
      peers: { Select: Nh, Input: Yt, Popselect: Lh },
      self(e) {
        const { primaryColor: t, opacity3: o } = e,
          r = te(t, { alpha: Number(o) }),
          n = FP(e);
        return (
          (n.itemBorderActive = `1px solid ${r}`),
          (n.itemBorderDisabled = "1px solid #0000"),
          n
        );
      },
    },
    jh = DP,
    Vh = { padding: "8px 14px" },
    LP = {
      name: "Tooltip",
      common: ce,
      peers: { Popover: kr },
      self(e) {
        const {
          borderRadius: t,
          boxShadow2: o,
          popoverColor: r,
          textColor2: n,
        } = e;
        return Object.assign(Object.assign({}, Vh), {
          borderRadius: t,
          boxShadow: o,
          color: r,
          textColor: n,
        });
      },
    },
    Il = LP,
    WP = (e) => {
      const { borderRadius: t, boxShadow2: o, baseColor: r } = e;
      return Object.assign(Object.assign({}, Vh), {
        borderRadius: t,
        boxShadow: o,
        color: be(r, "rgba(0, 0, 0, .85)"),
        textColor: r,
      });
    },
    NP = { name: "Tooltip", common: Et, peers: { Popover: Pl }, self: WP },
    Kh = NP,
    jP = { name: "Ellipsis", common: ce, peers: { Tooltip: Il } },
    Uh = jP,
    VP = {
      radioSizeSmall: "14px",
      radioSizeMedium: "16px",
      radioSizeLarge: "18px",
      labelPadding: "0 8px",
      labelFontWeight: "400",
    },
    KP = {
      name: "Radio",
      common: ce,
      self(e) {
        const {
          borderColor: t,
          primaryColor: o,
          baseColor: r,
          textColorDisabled: n,
          inputColorDisabled: i,
          textColor2: l,
          opacityDisabled: a,
          borderRadius: s,
          fontSizeSmall: c,
          fontSizeMedium: d,
          fontSizeLarge: u,
          heightSmall: h,
          heightMedium: p,
          heightLarge: f,
          lineHeight: v,
        } = e;
        return Object.assign(Object.assign({}, VP), {
          labelLineHeight: v,
          buttonHeightSmall: h,
          buttonHeightMedium: p,
          buttonHeightLarge: f,
          fontSizeSmall: c,
          fontSizeMedium: d,
          fontSizeLarge: u,
          boxShadow: `inset 0 0 0 1px ${t}`,
          boxShadowActive: `inset 0 0 0 1px ${o}`,
          boxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${te(o, {
            alpha: 0.3,
          })}`,
          boxShadowHover: `inset 0 0 0 1px ${o}`,
          boxShadowDisabled: `inset 0 0 0 1px ${t}`,
          color: "#0000",
          colorDisabled: i,
          colorActive: "#0000",
          textColor: l,
          textColorDisabled: n,
          dotColorActive: o,
          dotColorDisabled: t,
          buttonBorderColor: t,
          buttonBorderColorActive: o,
          buttonBorderColorHover: o,
          buttonColor: "#0000",
          buttonColorActive: o,
          buttonTextColor: l,
          buttonTextColorActive: r,
          buttonTextColorHover: o,
          opacityDisabled: a,
          buttonBoxShadowFocus: `inset 0 0 0 1px ${o}, 0 0 0 2px ${te(o, {
            alpha: 0.3,
          })}`,
          buttonBoxShadowHover: `inset 0 0 0 1px ${o}`,
          buttonBoxShadow: "inset 0 0 0 1px #0000",
          buttonBorderRadius: s,
        });
      },
    },
    Gh = KP,
    UP = {
      padding: "4px 0",
      optionIconSizeSmall: "14px",
      optionIconSizeMedium: "16px",
      optionIconSizeLarge: "16px",
      optionIconSizeHuge: "18px",
      optionSuffixWidthSmall: "14px",
      optionSuffixWidthMedium: "14px",
      optionSuffixWidthLarge: "16px",
      optionSuffixWidthHuge: "16px",
      optionIconSuffixWidthSmall: "32px",
      optionIconSuffixWidthMedium: "32px",
      optionIconSuffixWidthLarge: "36px",
      optionIconSuffixWidthHuge: "36px",
      optionPrefixWidthSmall: "14px",
      optionPrefixWidthMedium: "14px",
      optionPrefixWidthLarge: "16px",
      optionPrefixWidthHuge: "16px",
      optionIconPrefixWidthSmall: "36px",
      optionIconPrefixWidthMedium: "36px",
      optionIconPrefixWidthLarge: "40px",
      optionIconPrefixWidthHuge: "40px",
    },
    qh = (e) => {
      const {
        primaryColor: t,
        textColor2: o,
        dividerColor: r,
        hoverColor: n,
        popoverColor: i,
        invertedColor: l,
        borderRadius: a,
        fontSizeSmall: s,
        fontSizeMedium: c,
        fontSizeLarge: d,
        fontSizeHuge: u,
        heightSmall: h,
        heightMedium: p,
        heightLarge: f,
        heightHuge: v,
        textColor3: b,
        opacityDisabled: g,
      } = e;
      return Object.assign(Object.assign({}, UP), {
        optionHeightSmall: h,
        optionHeightMedium: p,
        optionHeightLarge: f,
        optionHeightHuge: v,
        borderRadius: a,
        fontSizeSmall: s,
        fontSizeMedium: c,
        fontSizeLarge: d,
        fontSizeHuge: u,
        optionTextColor: o,
        optionTextColorHover: o,
        optionTextColorActive: t,
        optionTextColorChildActive: t,
        color: i,
        dividerColor: r,
        suffixColor: o,
        prefixColor: o,
        optionColorHover: n,
        optionColorActive: te(t, { alpha: 0.1 }),
        groupHeaderTextColor: b,
        optionTextColorInverted: "#BBB",
        optionTextColorHoverInverted: "#FFF",
        optionTextColorActiveInverted: "#FFF",
        optionTextColorChildActiveInverted: "#FFF",
        colorInverted: l,
        dividerColorInverted: "#BBB",
        suffixColorInverted: "#BBB",
        prefixColorInverted: "#BBB",
        optionColorHoverInverted: t,
        optionColorActiveInverted: t,
        groupHeaderTextColorInverted: "#AAA",
        optionOpacityDisabled: g,
      });
    },
    Yh = { name: "Dropdown", common: Et, peers: { Popover: Pl }, self: qh },
    GP = {
      name: "Dropdown",
      common: ce,
      peers: { Popover: kr },
      self(e) {
        const { primaryColorSuppl: t, primaryColor: o, popoverColor: r } = e,
          n = qh(e);
        return (
          (n.colorInverted = r),
          (n.optionColorActive = te(o, { alpha: 0.15 })),
          (n.optionColorActiveInverted = t),
          (n.optionColorHoverInverted = t),
          n
        );
      },
    },
    Js = GP,
    qP = {
      thPaddingSmall: "8px",
      thPaddingMedium: "12px",
      thPaddingLarge: "12px",
      tdPaddingSmall: "8px",
      tdPaddingMedium: "12px",
      tdPaddingLarge: "12px",
      sorterSize: "15px",
      resizableContainerSize: "8px",
      resizableSize: "2px",
      filterSize: "15px",
      paginationMargin: "12px 0 0 0",
      emptyPadding: "48px 0",
      actionPadding: "8px 12px",
      actionButtonMargin: "0 8px 0 0",
    },
    YP = (e) => {
      const {
        cardColor: t,
        modalColor: o,
        popoverColor: r,
        textColor2: n,
        textColor1: i,
        tableHeaderColor: l,
        tableColorHover: a,
        iconColor: s,
        primaryColor: c,
        fontWeightStrong: d,
        borderRadius: u,
        lineHeight: h,
        fontSizeSmall: p,
        fontSizeMedium: f,
        fontSizeLarge: v,
        dividerColor: b,
        heightSmall: g,
        opacityDisabled: T,
        tableColorStriped: O,
      } = e;
      return Object.assign(Object.assign({}, qP), {
        actionDividerColor: b,
        lineHeight: h,
        borderRadius: u,
        fontSizeSmall: p,
        fontSizeMedium: f,
        fontSizeLarge: v,
        borderColor: be(t, b),
        tdColorHover: be(t, a),
        tdColorStriped: be(t, O),
        thColor: be(t, l),
        thColorHover: be(be(t, l), a),
        tdColor: t,
        tdTextColor: n,
        thTextColor: i,
        thFontWeight: d,
        thButtonColorHover: a,
        thIconColor: s,
        thIconColorActive: c,
        borderColorModal: be(o, b),
        tdColorHoverModal: be(o, a),
        tdColorStripedModal: be(o, O),
        thColorModal: be(o, l),
        thColorHoverModal: be(be(o, l), a),
        tdColorModal: o,
        borderColorPopover: be(r, b),
        tdColorHoverPopover: be(r, a),
        tdColorStripedPopover: be(r, O),
        thColorPopover: be(r, l),
        thColorHoverPopover: be(be(r, l), a),
        tdColorPopover: r,
        boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
        boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
        loadingColor: c,
        loadingSize: g,
        opacityLoading: T,
      });
    },
    XP = {
      name: "DataTable",
      common: ce,
      peers: {
        Button: Dt,
        Checkbox: fn,
        Radio: Gh,
        Pagination: jh,
        Scrollbar: Ft,
        Empty: Mr,
        Popover: kr,
        Ellipsis: Uh,
        Dropdown: Js,
      },
      self(e) {
        const t = YP(e);
        return (
          (t.boxShadowAfter = "inset 12px 0 8px -12px rgba(0, 0, 0, .36)"),
          (t.boxShadowBefore = "inset -12px 0 8px -12px rgba(0, 0, 0, .36)"),
          t
        );
      },
    },
    ZP = XP,
    JP = Object.assign(Object.assign({}, Tl), Ae.props),
    QP = ue({
      name: "Tooltip",
      props: JP,
      __popover__: !0,
      setup(e) {
        const t = Ae("Tooltip", "-tooltip", void 0, Kh, e),
          o = N(null);
        return Object.assign(
          Object.assign(
            {},
            {
              syncPosition() {
                o.value.syncPosition();
              },
              setShow(n) {
                o.value.setShow(n);
              },
            }
          ),
          {
            popoverRef: o,
            mergedTheme: t,
            popoverThemeOverrides: B(() => t.value.self),
          }
        );
      },
      render() {
        const { mergedTheme: e, internalExtraClass: t } = this;
        return m(
          zl,
          Object.assign(Object.assign({}, this.$props), {
            theme: e.peers.Popover,
            themeOverrides: e.peerOverrides.Popover,
            builtinThemeOverrides: this.popoverThemeOverrides,
            internalExtraClass: t.concat("tooltip"),
            ref: "popoverRef",
          }),
          this.$slots
        );
      },
    }),
    Xh = ue({
      name: "DropdownDivider",
      props: { clsPrefix: { type: String, required: !0 } },
      render() {
        return m("div", { class: `${this.clsPrefix}-dropdown-divider` });
      },
    }),
    Zh = (e) => {
      const {
        textColorBase: t,
        opacity1: o,
        opacity2: r,
        opacity3: n,
        opacity4: i,
        opacity5: l,
      } = e;
      return {
        color: t,
        opacity1Depth: o,
        opacity2Depth: r,
        opacity3Depth: n,
        opacity4Depth: i,
        opacity5Depth: l,
      };
    },
    eT = { name: "Icon", common: Et, self: Zh },
    tT = eT,
    oT = { name: "Icon", common: ce, self: Zh },
    rT = oT,
    nT = U(
      "icon",
      `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
      [
        re("color-transition", { transition: "color .3s var(--n-bezier)" }),
        re("depth", { color: "var(--n-color)" }, [
          D("svg", {
            opacity: "var(--n-opacity)",
            transition: "opacity .3s var(--n-bezier)",
          }),
        ]),
        D("svg", { height: "1em", width: "1em" }),
      ]
    ),
    iT = Object.assign(Object.assign({}, Ae.props), {
      depth: [String, Number],
      size: [Number, String],
      color: String,
      component: Object,
    }),
    Sr = ue({
      _n_icon__: !0,
      name: "Icon",
      inheritAttrs: !1,
      props: iT,
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Icon", "-icon", nT, tT, e, t),
          n = B(() => {
            const { depth: l } = e,
              {
                common: { cubicBezierEaseInOut: a },
                self: s,
              } = r.value;
            if (l !== void 0) {
              const { color: c, [`opacity${l}Depth`]: d } = s;
              return { "--n-bezier": a, "--n-color": c, "--n-opacity": d };
            }
            return { "--n-bezier": a, "--n-color": "", "--n-opacity": "" };
          }),
          i = o
            ? wt(
                "icon",
                B(() => `${e.depth || "d"}`),
                n,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          mergedStyle: B(() => {
            const { size: l, color: a } = e;
            return { fontSize: Ei(l), color: a };
          }),
          cssVars: o ? void 0 : n,
          themeClass: i == null ? void 0 : i.themeClass,
          onRender: i == null ? void 0 : i.onRender,
        };
      },
      render() {
        var e;
        const {
          $parent: t,
          depth: o,
          mergedClsPrefix: r,
          component: n,
          onRender: i,
          themeClass: l,
        } = this;
        return (
          !((e = t == null ? void 0 : t.$options) === null || e === void 0) &&
            e._n_icon__ &&
            Kn("icon", "don't wrap `n-icon` inside `n-icon`"),
          i == null || i(),
          m(
            "i",
            $r(this.$attrs, {
              role: "img",
              class: [
                `${r}-icon`,
                l,
                {
                  [`${r}-icon--depth`]: o,
                  [`${r}-icon--color-transition`]: o !== void 0,
                },
              ],
              style: [this.cssVars, this.mergedStyle],
            }),
            n ? m(n) : this.$slots
          )
        );
      },
    }),
    Qs = "n-dropdown-menu",
    _l = "n-dropdown",
    Yd = "n-dropdown-option";
  function La(e, t) {
    return e.type === "submenu" || (e.type === void 0 && e[t] !== void 0);
  }
  function lT(e) {
    return e.type === "group";
  }
  function Jh(e) {
    return e.type === "divider";
  }
  function aT(e) {
    return e.type === "render";
  }
  const Qh = ue({
      name: "DropdownOption",
      props: {
        clsPrefix: { type: String, required: !0 },
        tmNode: { type: Object, required: !0 },
        parentKey: { type: [String, Number], default: null },
        placement: { type: String, default: "right-start" },
        props: Object,
        scrollable: Boolean,
      },
      setup(e) {
        const t = Oe(_l),
          {
            hoverKeyRef: o,
            keyboardKeyRef: r,
            lastToggledSubmenuKeyRef: n,
            pendingKeyPathRef: i,
            activeKeyPathRef: l,
            animatedRef: a,
            mergedShowRef: s,
            renderLabelRef: c,
            renderIconRef: d,
            labelFieldRef: u,
            childrenFieldRef: h,
            renderOptionRef: p,
            nodePropsRef: f,
            menuPropsRef: v,
          } = t,
          b = Oe(Yd, null),
          g = Oe(Qs),
          T = Oe(yl),
          O = B(() => e.tmNode.rawNode),
          P = B(() => {
            const { value: F } = h;
            return La(e.tmNode.rawNode, F);
          }),
          R = B(() => {
            const { disabled: F } = e.tmNode;
            return F;
          }),
          V = B(() => {
            if (!P.value) return !1;
            const { key: F, disabled: Q } = e.tmNode;
            if (Q) return !1;
            const { value: W } = o,
              { value: ee } = r,
              { value: ve } = n,
              { value: ae } = i;
            return W !== null
              ? ae.includes(F)
              : ee !== null
              ? ae.includes(F) && ae[ae.length - 1] !== F
              : ve !== null
              ? ae.includes(F)
              : !1;
          }),
          x = B(() => r.value === null && !a.value),
          S = yb(V, 300, x),
          M = B(() => !!(b != null && b.enteringSubmenuRef.value)),
          C = N(!1);
        ot(Yd, { enteringSubmenuRef: C });
        function _() {
          C.value = !0;
        }
        function y() {
          C.value = !1;
        }
        function K() {
          const { parentKey: F, tmNode: Q } = e;
          Q.disabled ||
            (s.value && ((n.value = F), (r.value = null), (o.value = Q.key)));
        }
        function H() {
          const { tmNode: F } = e;
          F.disabled || (s.value && o.value !== F.key && K());
        }
        function q(F) {
          if (e.tmNode.disabled || !s.value) return;
          const { relatedTarget: Q } = F;
          Q &&
            !en({ target: Q }, "dropdownOption") &&
            !en({ target: Q }, "scrollbarRail") &&
            (o.value = null);
        }
        function k() {
          const { value: F } = P,
            { tmNode: Q } = e;
          s.value &&
            !F &&
            !Q.disabled &&
            (t.doSelect(Q.key, Q.rawNode), t.doUpdateShow(!1));
        }
        return {
          labelField: u,
          renderLabel: c,
          renderIcon: d,
          siblingHasIcon: g.showIconRef,
          siblingHasSubmenu: g.hasSubmenuRef,
          menuProps: v,
          popoverBody: T,
          animated: a,
          mergedShowSubmenu: B(() => S.value && !M.value),
          rawNode: O,
          hasSubmenu: P,
          pending: ut(() => {
            const { value: F } = i,
              { key: Q } = e.tmNode;
            return F.includes(Q);
          }),
          childActive: ut(() => {
            const { value: F } = l,
              { key: Q } = e.tmNode,
              W = F.findIndex((ee) => Q === ee);
            return W === -1 ? !1 : W < F.length - 1;
          }),
          active: ut(() => {
            const { value: F } = l,
              { key: Q } = e.tmNode,
              W = F.findIndex((ee) => Q === ee);
            return W === -1 ? !1 : W === F.length - 1;
          }),
          mergedDisabled: R,
          renderOption: p,
          nodeProps: f,
          handleClick: k,
          handleMouseMove: H,
          handleMouseEnter: K,
          handleMouseLeave: q,
          handleSubmenuBeforeEnter: _,
          handleSubmenuAfterEnter: y,
        };
      },
      render() {
        var e, t;
        const {
          animated: o,
          rawNode: r,
          mergedShowSubmenu: n,
          clsPrefix: i,
          siblingHasIcon: l,
          siblingHasSubmenu: a,
          renderLabel: s,
          renderIcon: c,
          renderOption: d,
          nodeProps: u,
          props: h,
          scrollable: p,
        } = this;
        let f = null;
        if (n) {
          const T =
            (e = this.menuProps) === null || e === void 0
              ? void 0
              : e.call(this, r, r.children);
          f = m(
            ep,
            Object.assign({}, T, {
              clsPrefix: i,
              scrollable: this.scrollable,
              tmNodes: this.tmNode.children,
              parentKey: this.tmNode.key,
            })
          );
        }
        const v = {
            class: [
              `${i}-dropdown-option-body`,
              this.pending && `${i}-dropdown-option-body--pending`,
              this.active && `${i}-dropdown-option-body--active`,
              this.childActive && `${i}-dropdown-option-body--child-active`,
              this.mergedDisabled && `${i}-dropdown-option-body--disabled`,
            ],
            onMousemove: this.handleMouseMove,
            onMouseenter: this.handleMouseEnter,
            onMouseleave: this.handleMouseLeave,
            onClick: this.handleClick,
          },
          b = u == null ? void 0 : u(r),
          g = m(
            "div",
            Object.assign(
              {
                class: [`${i}-dropdown-option`, b == null ? void 0 : b.class],
                "data-dropdown-option": !0,
              },
              b
            ),
            m("div", $r(v, h), [
              m(
                "div",
                {
                  class: [
                    `${i}-dropdown-option-body__prefix`,
                    l && `${i}-dropdown-option-body__prefix--show-icon`,
                  ],
                },
                [c ? c(r) : It(r.icon)]
              ),
              m(
                "div",
                {
                  "data-dropdown-option": !0,
                  class: `${i}-dropdown-option-body__label`,
                },
                s
                  ? s(r)
                  : It(
                      (t = r[this.labelField]) !== null && t !== void 0
                        ? t
                        : r.title
                    )
              ),
              m(
                "div",
                {
                  "data-dropdown-option": !0,
                  class: [
                    `${i}-dropdown-option-body__suffix`,
                    a && `${i}-dropdown-option-body__suffix--has-submenu`,
                  ],
                },
                this.hasSubmenu
                  ? m(Sr, null, { default: () => m($S, null) })
                  : null
              ),
            ]),
            this.hasSubmenu
              ? m($s, null, {
                  default: () => [
                    m(Ps, null, {
                      default: () =>
                        m(
                          "div",
                          { class: `${i}-dropdown-offset-container` },
                          m(
                            zs,
                            {
                              show: this.mergedShowSubmenu,
                              placement: this.placement,
                              to: (p && this.popoverBody) || void 0,
                              teleportDisabled: !p,
                            },
                            {
                              default: () =>
                                m(
                                  "div",
                                  { class: `${i}-dropdown-menu-wrapper` },
                                  o
                                    ? m(
                                        vo,
                                        {
                                          onBeforeEnter:
                                            this.handleSubmenuBeforeEnter,
                                          onAfterEnter:
                                            this.handleSubmenuAfterEnter,
                                          name: "fade-in-scale-up-transition",
                                          appear: !0,
                                        },
                                        { default: () => f }
                                      )
                                    : f
                                ),
                            }
                          )
                        ),
                    }),
                  ],
                })
              : null
          );
        return d ? d({ node: g, option: r }) : g;
      },
    }),
    sT = ue({
      name: "DropdownGroupHeader",
      props: {
        clsPrefix: { type: String, required: !0 },
        tmNode: { type: Object, required: !0 },
      },
      setup() {
        const { showIconRef: e, hasSubmenuRef: t } = Oe(Qs),
          {
            renderLabelRef: o,
            labelFieldRef: r,
            nodePropsRef: n,
            renderOptionRef: i,
          } = Oe(_l);
        return {
          labelField: r,
          showIcon: e,
          hasSubmenu: t,
          renderLabel: o,
          nodeProps: n,
          renderOption: i,
        };
      },
      render() {
        var e;
        const {
            clsPrefix: t,
            hasSubmenu: o,
            showIcon: r,
            nodeProps: n,
            renderLabel: i,
            renderOption: l,
          } = this,
          { rawNode: a } = this.tmNode,
          s = m(
            "div",
            Object.assign(
              { class: `${t}-dropdown-option` },
              n == null ? void 0 : n(a)
            ),
            m(
              "div",
              {
                class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`,
              },
              m(
                "div",
                {
                  "data-dropdown-option": !0,
                  class: [
                    `${t}-dropdown-option-body__prefix`,
                    r && `${t}-dropdown-option-body__prefix--show-icon`,
                  ],
                },
                It(a.icon)
              ),
              m(
                "div",
                {
                  class: `${t}-dropdown-option-body__label`,
                  "data-dropdown-option": !0,
                },
                i
                  ? i(a)
                  : It(
                      (e = a.title) !== null && e !== void 0
                        ? e
                        : a[this.labelField]
                    )
              ),
              m("div", {
                class: [
                  `${t}-dropdown-option-body__suffix`,
                  o && `${t}-dropdown-option-body__suffix--has-submenu`,
                ],
                "data-dropdown-option": !0,
              })
            )
          );
        return l ? l({ node: s, option: a }) : s;
      },
    }),
    cT = ue({
      name: "NDropdownGroup",
      props: {
        clsPrefix: { type: String, required: !0 },
        tmNode: { type: Object, required: !0 },
        parentKey: { type: [String, Number], default: null },
      },
      render() {
        const { tmNode: e, parentKey: t, clsPrefix: o } = this,
          { children: r } = e;
        return m(
          Ye,
          null,
          m(sT, { clsPrefix: o, tmNode: e, key: e.key }),
          r == null
            ? void 0
            : r.map((n) => {
                const { rawNode: i } = n;
                return i.show === !1
                  ? null
                  : Jh(i)
                  ? m(Xh, { clsPrefix: o, key: n.key })
                  : n.isGroup
                  ? (Kn(
                      "dropdown",
                      "`group` node is not allowed to be put in `group` node."
                    ),
                    null)
                  : m(Qh, {
                      clsPrefix: o,
                      tmNode: n,
                      parentKey: t,
                      key: n.key,
                    });
              })
        );
      },
    }),
    dT = ue({
      name: "DropdownRenderOption",
      props: { tmNode: { type: Object, required: !0 } },
      render() {
        const {
          rawNode: { render: e, props: t },
        } = this.tmNode;
        return m("div", t, [e == null ? void 0 : e()]);
      },
    }),
    ep = ue({
      name: "DropdownMenu",
      props: {
        scrollable: Boolean,
        showArrow: Boolean,
        arrowStyle: [String, Object],
        clsPrefix: { type: String, required: !0 },
        tmNodes: { type: Array, default: () => [] },
        parentKey: { type: [String, Number], default: null },
      },
      setup(e) {
        const { renderIconRef: t, childrenFieldRef: o } = Oe(_l);
        ot(Qs, {
          showIconRef: B(() => {
            const n = t.value;
            return e.tmNodes.some((i) => {
              var l;
              if (i.isGroup)
                return (l = i.children) === null || l === void 0
                  ? void 0
                  : l.some(({ rawNode: s }) => (n ? n(s) : s.icon));
              const { rawNode: a } = i;
              return n ? n(a) : a.icon;
            });
          }),
          hasSubmenuRef: B(() => {
            const { value: n } = o;
            return e.tmNodes.some((i) => {
              var l;
              if (i.isGroup)
                return (l = i.children) === null || l === void 0
                  ? void 0
                  : l.some(({ rawNode: s }) => La(s, n));
              const { rawNode: a } = i;
              return La(a, n);
            });
          }),
        });
        const r = N(null);
        return ot(ws, null), ot(Ss, null), ot(yl, r), { bodyRef: r };
      },
      render() {
        const { parentKey: e, clsPrefix: t, scrollable: o } = this,
          r = this.tmNodes.map((n) => {
            const { rawNode: i } = n;
            return i.show === !1
              ? null
              : aT(i)
              ? m(dT, { tmNode: n, key: n.key })
              : Jh(i)
              ? m(Xh, { clsPrefix: t, key: n.key })
              : lT(i)
              ? m(cT, { clsPrefix: t, tmNode: n, parentKey: e, key: n.key })
              : m(Qh, {
                  clsPrefix: t,
                  tmNode: n,
                  parentKey: e,
                  key: n.key,
                  props: i.props,
                  scrollable: o,
                });
          });
        return m(
          "div",
          {
            class: [
              `${t}-dropdown-menu`,
              o && `${t}-dropdown-menu--scrollable`,
            ],
            ref: "bodyRef",
          },
          o
            ? m(
                bh,
                { contentClass: `${t}-dropdown-menu__content` },
                { default: () => r }
              )
            : r,
          this.showArrow
            ? Sh({ clsPrefix: t, arrowStyle: this.arrowStyle })
            : null
        );
      },
    }),
    uT = U(
      "dropdown-menu",
      `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,
      [
        Xs(),
        U(
          "dropdown-option",
          `
 position: relative;
 `,
          [
            D(
              "a",
              `
 text-decoration: none;
 color: inherit;
 outline: none;
 `,
              [
                D(
                  "&::before",
                  `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `
                ),
              ]
            ),
            U(
              "dropdown-option-body",
              `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,
              [
                D(
                  "&::before",
                  `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `
                ),
                Je("disabled", [
                  re(
                    "pending",
                    `
 color: var(--n-option-text-color-hover);
 `,
                    [
                      A(
                        "prefix, suffix",
                        `
 color: var(--n-option-text-color-hover);
 `
                      ),
                      D(
                        "&::before",
                        "background-color: var(--n-option-color-hover);"
                      ),
                    ]
                  ),
                  re(
                    "active",
                    `
 color: var(--n-option-text-color-active);
 `,
                    [
                      A(
                        "prefix, suffix",
                        `
 color: var(--n-option-text-color-active);
 `
                      ),
                      D(
                        "&::before",
                        "background-color: var(--n-option-color-active);"
                      ),
                    ]
                  ),
                  re(
                    "child-active",
                    `
 color: var(--n-option-text-color-child-active);
 `,
                    [
                      A(
                        "prefix, suffix",
                        `
 color: var(--n-option-text-color-child-active);
 `
                      ),
                    ]
                  ),
                ]),
                re(
                  "disabled",
                  `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `
                ),
                re(
                  "group",
                  `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,
                  [
                    A(
                      "prefix",
                      `
 width: calc(var(--n-option-prefix-width) / 2);
 `,
                      [
                        re(
                          "show-icon",
                          `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `
                        ),
                      ]
                    ),
                  ]
                ),
                A(
                  "prefix",
                  `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,
                  [
                    re(
                      "show-icon",
                      `
 width: var(--n-option-icon-prefix-width);
 `
                    ),
                    U(
                      "icon",
                      `
 font-size: var(--n-option-icon-size);
 `
                    ),
                  ]
                ),
                A(
                  "label",
                  `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `
                ),
                A(
                  "suffix",
                  `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,
                  [
                    re(
                      "has-submenu",
                      `
 width: var(--n-option-icon-suffix-width);
 `
                    ),
                    U(
                      "icon",
                      `
 font-size: var(--n-option-icon-size);
 `
                    ),
                  ]
                ),
                U("dropdown-menu", "pointer-events: all;"),
              ]
            ),
            U(
              "dropdown-offset-container",
              `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `
            ),
          ]
        ),
        U(
          "dropdown-divider",
          `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `
        ),
        U(
          "dropdown-menu-wrapper",
          `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `
        ),
        D(">", [
          U(
            "scrollbar",
            `
 height: inherit;
 max-height: inherit;
 `
          ),
        ]),
        Je(
          "scrollable",
          `
 padding: var(--n-padding);
 `
        ),
        re("scrollable", [
          A(
            "content",
            `
 padding: var(--n-padding);
 `
          ),
        ]),
      ]
    ),
    fT = {
      animated: { type: Boolean, default: !0 },
      keyboard: { type: Boolean, default: !0 },
      size: { type: String, default: "medium" },
      inverted: Boolean,
      placement: { type: String, default: "bottom" },
      onSelect: [Function, Array],
      options: { type: Array, default: () => [] },
      menuProps: Function,
      showArrow: Boolean,
      renderLabel: Function,
      renderIcon: Function,
      renderOption: Function,
      nodeProps: Function,
      labelField: { type: String, default: "label" },
      keyField: { type: String, default: "key" },
      childrenField: { type: String, default: "children" },
      value: [String, Number],
    },
    hT = Object.keys(Tl),
    pT = Object.assign(Object.assign(Object.assign({}, Tl), fT), Ae.props),
    vT = ue({
      name: "Dropdown",
      inheritAttrs: !1,
      props: pT,
      setup(e) {
        const t = N(!1),
          o = yr(ke(e, "show"), t),
          r = B(() => {
            const { keyField: y, childrenField: K } = e;
            return Us(e.options, {
              getKey(H) {
                return H[y];
              },
              getDisabled(H) {
                return H.disabled === !0;
              },
              getIgnored(H) {
                return H.type === "divider" || H.type === "render";
              },
              getChildren(H) {
                return H[K];
              },
            });
          }),
          n = B(() => r.value.treeNodes),
          i = N(null),
          l = N(null),
          a = N(null),
          s = B(() => {
            var y, K, H;
            return (H =
              (K = (y = i.value) !== null && y !== void 0 ? y : l.value) !==
                null && K !== void 0
                ? K
                : a.value) !== null && H !== void 0
              ? H
              : null;
          }),
          c = B(() => r.value.getPath(s.value).keyPath),
          d = B(() => r.value.getPath(e.value).keyPath),
          u = ut(() => e.keyboard && o.value);
        Db(
          {
            keydown: {
              ArrowUp: { prevent: !0, handler: R },
              ArrowRight: { prevent: !0, handler: P },
              ArrowDown: { prevent: !0, handler: V },
              ArrowLeft: { prevent: !0, handler: O },
              Enter: { prevent: !0, handler: x },
              Escape: T,
            },
          },
          u
        );
        const { mergedClsPrefixRef: h, inlineThemeDisabled: p } = yt(e),
          f = Ae("Dropdown", "-dropdown", uT, Yh, e, h);
        ot(_l, {
          labelFieldRef: ke(e, "labelField"),
          childrenFieldRef: ke(e, "childrenField"),
          renderLabelRef: ke(e, "renderLabel"),
          renderIconRef: ke(e, "renderIcon"),
          hoverKeyRef: i,
          keyboardKeyRef: l,
          lastToggledSubmenuKeyRef: a,
          pendingKeyPathRef: c,
          activeKeyPathRef: d,
          animatedRef: ke(e, "animated"),
          mergedShowRef: o,
          nodePropsRef: ke(e, "nodeProps"),
          renderOptionRef: ke(e, "renderOption"),
          menuPropsRef: ke(e, "menuProps"),
          doSelect: v,
          doUpdateShow: b,
        }),
          rt(o, (y) => {
            !e.animated && !y && g();
          });
        function v(y, K) {
          const { onSelect: H } = e;
          H && Re(H, y, K);
        }
        function b(y) {
          const { "onUpdate:show": K, onUpdateShow: H } = e;
          K && Re(K, y), H && Re(H, y), (t.value = y);
        }
        function g() {
          (i.value = null), (l.value = null), (a.value = null);
        }
        function T() {
          b(!1);
        }
        function O() {
          M("left");
        }
        function P() {
          M("right");
        }
        function R() {
          M("up");
        }
        function V() {
          M("down");
        }
        function x() {
          const y = S();
          y != null && y.isLeaf && o.value && (v(y.key, y.rawNode), b(!1));
        }
        function S() {
          var y;
          const { value: K } = r,
            { value: H } = s;
          return !K || H === null
            ? null
            : (y = K.getNode(H)) !== null && y !== void 0
            ? y
            : null;
        }
        function M(y) {
          const { value: K } = s,
            {
              value: { getFirstAvailableNode: H },
            } = r;
          let q = null;
          if (K === null) {
            const k = H();
            k !== null && (q = k.key);
          } else {
            const k = S();
            if (k) {
              let F;
              switch (y) {
                case "down":
                  F = k.getNext();
                  break;
                case "up":
                  F = k.getPrev();
                  break;
                case "right":
                  F = k.getChild();
                  break;
                case "left":
                  F = k.getParent();
                  break;
              }
              F && (q = F.key);
            }
          }
          q !== null && ((i.value = null), (l.value = q));
        }
        const C = B(() => {
            const { size: y, inverted: K } = e,
              {
                common: { cubicBezierEaseInOut: H },
                self: q,
              } = f.value,
              {
                padding: k,
                dividerColor: F,
                borderRadius: Q,
                optionOpacityDisabled: W,
                [de("optionIconSuffixWidth", y)]: ee,
                [de("optionSuffixWidth", y)]: ve,
                [de("optionIconPrefixWidth", y)]: ae,
                [de("optionPrefixWidth", y)]: he,
                [de("fontSize", y)]: We,
                [de("optionHeight", y)]: He,
                [de("optionIconSize", y)]: ze,
              } = q,
              $e = {
                "--n-bezier": H,
                "--n-font-size": We,
                "--n-padding": k,
                "--n-border-radius": Q,
                "--n-option-height": He,
                "--n-option-prefix-width": he,
                "--n-option-icon-prefix-width": ae,
                "--n-option-suffix-width": ve,
                "--n-option-icon-suffix-width": ee,
                "--n-option-icon-size": ze,
                "--n-divider-color": F,
                "--n-option-opacity-disabled": W,
              };
            return (
              K
                ? (($e["--n-color"] = q.colorInverted),
                  ($e["--n-option-color-hover"] = q.optionColorHoverInverted),
                  ($e["--n-option-color-active"] = q.optionColorActiveInverted),
                  ($e["--n-option-text-color"] = q.optionTextColorInverted),
                  ($e["--n-option-text-color-hover"] =
                    q.optionTextColorHoverInverted),
                  ($e["--n-option-text-color-active"] =
                    q.optionTextColorActiveInverted),
                  ($e["--n-option-text-color-child-active"] =
                    q.optionTextColorChildActiveInverted),
                  ($e["--n-prefix-color"] = q.prefixColorInverted),
                  ($e["--n-suffix-color"] = q.suffixColorInverted),
                  ($e["--n-group-header-text-color"] =
                    q.groupHeaderTextColorInverted))
                : (($e["--n-color"] = q.color),
                  ($e["--n-option-color-hover"] = q.optionColorHover),
                  ($e["--n-option-color-active"] = q.optionColorActive),
                  ($e["--n-option-text-color"] = q.optionTextColor),
                  ($e["--n-option-text-color-hover"] = q.optionTextColorHover),
                  ($e["--n-option-text-color-active"] =
                    q.optionTextColorActive),
                  ($e["--n-option-text-color-child-active"] =
                    q.optionTextColorChildActive),
                  ($e["--n-prefix-color"] = q.prefixColor),
                  ($e["--n-suffix-color"] = q.suffixColor),
                  ($e["--n-group-header-text-color"] = q.groupHeaderTextColor)),
              $e
            );
          }),
          _ = p
            ? wt(
                "dropdown",
                B(() => `${e.size[0]}${e.inverted ? "i" : ""}`),
                C,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: h,
          mergedTheme: f,
          tmNodes: n,
          mergedShow: o,
          handleAfterLeave: () => {
            e.animated && g();
          },
          doUpdateShow: b,
          cssVars: p ? void 0 : C,
          themeClass: _ == null ? void 0 : _.themeClass,
          onRender: _ == null ? void 0 : _.onRender,
        };
      },
      render() {
        const e = (r, n, i, l, a) => {
            var s;
            const { mergedClsPrefix: c, menuProps: d } = this;
            (s = this.onRender) === null || s === void 0 || s.call(this);
            const u =
                (d == null
                  ? void 0
                  : d(
                      void 0,
                      this.tmNodes.map((p) => p.rawNode)
                    )) || {},
              h = {
                ref: Gm(n),
                class: [r, `${c}-dropdown`, this.themeClass],
                clsPrefix: c,
                tmNodes: this.tmNodes,
                style: [i, this.cssVars],
                showArrow: this.showArrow,
                arrowStyle: this.arrowStyle,
                scrollable: this.scrollable,
                onMouseenter: l,
                onMouseleave: a,
              };
            return m(ep, $r(this.$attrs, h, u));
          },
          { mergedTheme: t } = this,
          o = {
            show: this.mergedShow,
            theme: t.peers.Popover,
            themeOverrides: t.peerOverrides.Popover,
            internalOnAfterLeave: this.handleAfterLeave,
            internalRenderBody: e,
            onUpdateShow: this.doUpdateShow,
            "onUpdate:show": void 0,
          };
        return m(zl, Object.assign({}, Mn(this.$props, hT), o), {
          trigger: () => {
            var r, n;
            return (n = (r = this.$slots).default) === null || n === void 0
              ? void 0
              : n.call(r);
          },
        });
      },
    }),
    gT = {
      itemFontSize: "12px",
      itemHeight: "36px",
      itemWidth: "52px",
      panelActionPadding: "8px 0",
    },
    mT = (e) => {
      const {
        popoverColor: t,
        textColor2: o,
        primaryColor: r,
        hoverColor: n,
        dividerColor: i,
        opacityDisabled: l,
        boxShadow2: a,
        borderRadius: s,
        iconColor: c,
        iconColorDisabled: d,
      } = e;
      return Object.assign(Object.assign({}, gT), {
        panelColor: t,
        panelBoxShadow: a,
        panelDividerColor: i,
        itemTextColor: o,
        itemTextColorActive: r,
        itemColorHover: n,
        itemOpacityDisabled: l,
        itemBorderRadius: s,
        borderRadius: s,
        iconColor: c,
        iconColorDisabled: d,
      });
    },
    bT = {
      name: "TimePicker",
      common: ce,
      peers: { Scrollbar: Ft, Button: Dt, Input: Yt },
      self: mT,
    },
    tp = bT,
    xT = {
      itemSize: "24px",
      itemCellWidth: "38px",
      itemCellHeight: "32px",
      scrollItemWidth: "80px",
      scrollItemHeight: "40px",
      panelExtraFooterPadding: "8px 12px",
      panelActionPadding: "8px 12px",
      calendarTitlePadding: "0",
      calendarTitleHeight: "28px",
      arrowSize: "14px",
      panelHeaderPadding: "8px 12px",
      calendarDaysHeight: "32px",
      calendarTitleGridTempateColumns: "28px 28px 1fr 28px 28px",
      calendarLeftPaddingDate: "6px 12px 4px 12px",
      calendarLeftPaddingDatetime: "4px 12px",
      calendarLeftPaddingDaterange: "6px 12px 4px 12px",
      calendarLeftPaddingDatetimerange: "4px 12px",
      calendarLeftPaddingMonth: "0",
      calendarLeftPaddingYear: "0",
      calendarLeftPaddingQuarter: "0",
      calendarLeftPaddingMonthrange: "0",
      calendarLeftPaddingQuarterrange: "0",
      calendarLeftPaddingYearrange: "0",
      calendarRightPaddingDate: "6px 12px 4px 12px",
      calendarRightPaddingDatetime: "4px 12px",
      calendarRightPaddingDaterange: "6px 12px 4px 12px",
      calendarRightPaddingDatetimerange: "4px 12px",
      calendarRightPaddingMonth: "0",
      calendarRightPaddingYear: "0",
      calendarRightPaddingQuarter: "0",
      calendarRightPaddingMonthrange: "0",
      calendarRightPaddingQuarterrange: "0",
      calendarRightPaddingYearrange: "0",
    },
    CT = (e) => {
      const {
        hoverColor: t,
        fontSize: o,
        textColor2: r,
        textColorDisabled: n,
        popoverColor: i,
        primaryColor: l,
        borderRadiusSmall: a,
        iconColor: s,
        iconColorDisabled: c,
        textColor1: d,
        dividerColor: u,
        boxShadow2: h,
        borderRadius: p,
        fontWeightStrong: f,
      } = e;
      return Object.assign(Object.assign({}, xT), {
        itemFontSize: o,
        calendarDaysFontSize: o,
        calendarTitleFontSize: o,
        itemTextColor: r,
        itemTextColorDisabled: n,
        itemTextColorActive: i,
        itemTextColorCurrent: l,
        itemColorIncluded: te(l, { alpha: 0.1 }),
        itemColorHover: t,
        itemColorDisabled: t,
        itemColorActive: l,
        itemBorderRadius: a,
        panelColor: i,
        panelTextColor: r,
        arrowColor: s,
        calendarTitleTextColor: d,
        calendarTitleColorHover: t,
        calendarDaysTextColor: r,
        panelHeaderDividerColor: u,
        calendarDaysDividerColor: u,
        calendarDividerColor: u,
        panelActionDividerColor: u,
        panelBoxShadow: h,
        panelBorderRadius: p,
        calendarTitleFontWeight: f,
        scrollItemBorderRadius: p,
        iconColor: s,
        iconColorDisabled: c,
      });
    },
    yT = {
      name: "DatePicker",
      common: ce,
      peers: { Input: Yt, Button: Dt, TimePicker: tp, Scrollbar: Ft },
      self(e) {
        const { popoverColor: t, hoverColor: o, primaryColor: r } = e,
          n = CT(e);
        return (
          (n.itemColorDisabled = be(t, o)),
          (n.itemColorIncluded = te(r, { alpha: 0.15 })),
          (n.itemColorHover = be(t, o)),
          n
        );
      },
    },
    wT = yT,
    ST = {
      thPaddingBorderedSmall: "8px 12px",
      thPaddingBorderedMedium: "12px 16px",
      thPaddingBorderedLarge: "16px 24px",
      thPaddingSmall: "0",
      thPaddingMedium: "0",
      thPaddingLarge: "0",
      tdPaddingBorderedSmall: "8px 12px",
      tdPaddingBorderedMedium: "12px 16px",
      tdPaddingBorderedLarge: "16px 24px",
      tdPaddingSmall: "0 0 8px 0",
      tdPaddingMedium: "0 0 12px 0",
      tdPaddingLarge: "0 0 16px 0",
    },
    $T = (e) => {
      const {
        tableHeaderColor: t,
        textColor2: o,
        textColor1: r,
        cardColor: n,
        modalColor: i,
        popoverColor: l,
        dividerColor: a,
        borderRadius: s,
        fontWeightStrong: c,
        lineHeight: d,
        fontSizeSmall: u,
        fontSizeMedium: h,
        fontSizeLarge: p,
      } = e;
      return Object.assign(Object.assign({}, ST), {
        lineHeight: d,
        fontSizeSmall: u,
        fontSizeMedium: h,
        fontSizeLarge: p,
        titleTextColor: r,
        thColor: be(n, t),
        thColorModal: be(i, t),
        thColorPopover: be(l, t),
        thTextColor: r,
        thFontWeight: c,
        tdTextColor: o,
        tdColor: n,
        tdColorModal: i,
        tdColorPopover: l,
        borderColor: be(n, a),
        borderColorModal: be(i, a),
        borderColorPopover: be(l, a),
        borderRadius: s,
      });
    },
    PT = { name: "Descriptions", common: ce, self: $T },
    TT = PT,
    zT = {
      titleFontSize: "18px",
      padding: "16px 28px 20px 28px",
      iconSize: "28px",
      actionSpace: "12px",
      contentMargin: "8px 0 16px 0",
      iconMargin: "0 4px 0 0",
      iconMarginIconTop: "4px 0 8px 0",
      closeSize: "22px",
      closeIconSize: "18px",
      closeMargin: "20px 26px 0 0",
      closeMarginIconTop: "10px 16px 0 0",
    },
    IT = (e) => {
      const {
        textColor1: t,
        textColor2: o,
        modalColor: r,
        closeIconColor: n,
        closeIconColorHover: i,
        closeIconColorPressed: l,
        closeColorHover: a,
        closeColorPressed: s,
        infoColor: c,
        successColor: d,
        warningColor: u,
        errorColor: h,
        primaryColor: p,
        dividerColor: f,
        borderRadius: v,
        fontWeightStrong: b,
        lineHeight: g,
        fontSize: T,
      } = e;
      return Object.assign(Object.assign({}, zT), {
        fontSize: T,
        lineHeight: g,
        border: `1px solid ${f}`,
        titleTextColor: t,
        textColor: o,
        color: r,
        closeColorHover: a,
        closeColorPressed: s,
        closeIconColor: n,
        closeIconColorHover: i,
        closeIconColorPressed: l,
        closeBorderRadius: v,
        iconColor: p,
        iconColorInfo: c,
        iconColorSuccess: d,
        iconColorWarning: u,
        iconColorError: h,
        borderRadius: v,
        titleFontWeight: b,
      });
    },
    _T = { name: "Dialog", common: ce, peers: { Button: Dt }, self: IT },
    op = _T,
    MT = (e) => {
      const { modalColor: t, textColor2: o, boxShadow3: r } = e;
      return { color: t, textColor: o, boxShadow: r };
    },
    kT = {
      name: "Modal",
      common: ce,
      peers: { Scrollbar: Ft, Dialog: op, Card: Fh },
      self: MT,
    },
    ET = kT,
    RT = (e) => {
      const { textColor1: t, dividerColor: o, fontWeightStrong: r } = e;
      return { textColor: t, color: o, fontWeight: r };
    },
    OT = { name: "Divider", common: ce, self: RT },
    BT = OT,
    AT = (e) => {
      const {
        modalColor: t,
        textColor1: o,
        textColor2: r,
        boxShadow3: n,
        lineHeight: i,
        fontWeightStrong: l,
        dividerColor: a,
        closeColorHover: s,
        closeColorPressed: c,
        closeIconColor: d,
        closeIconColorHover: u,
        closeIconColorPressed: h,
        borderRadius: p,
        primaryColorHover: f,
      } = e;
      return {
        bodyPadding: "16px 24px",
        headerPadding: "16px 24px",
        footerPadding: "16px 24px",
        color: t,
        textColor: r,
        titleTextColor: o,
        titleFontSize: "18px",
        titleFontWeight: l,
        boxShadow: n,
        lineHeight: i,
        headerBorderBottom: `1px solid ${a}`,
        footerBorderTop: `1px solid ${a}`,
        closeIconColor: d,
        closeIconColorHover: u,
        closeIconColorPressed: h,
        closeSize: "22px",
        closeIconSize: "18px",
        closeColorHover: s,
        closeColorPressed: c,
        closeBorderRadius: p,
        resizableTriggerColorHover: f,
      };
    },
    HT = { name: "Drawer", common: ce, peers: { Scrollbar: Ft }, self: AT },
    FT = HT,
    DT = { actionMargin: "0 0 0 20px", actionMarginRtl: "0 20px 0 0" },
    LT = {
      name: "DynamicInput",
      common: ce,
      peers: { Input: Yt, Button: Dt },
      self() {
        return DT;
      },
    },
    WT = LT,
    rp = { gapSmall: "4px 8px", gapMedium: "8px 12px", gapLarge: "12px 16px" },
    NT = {
      name: "Space",
      self() {
        return rp;
      },
    },
    np = NT,
    jT = () => rp,
    VT = { name: "Space", self: jT },
    KT = VT;
  let ua;
  const UT = () => {
      if (!ni) return !0;
      if (ua === void 0) {
        const e = document.createElement("div");
        (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.rowGap = "1px"),
          e.appendChild(document.createElement("div")),
          e.appendChild(document.createElement("div")),
          document.body.appendChild(e);
        const t = e.scrollHeight === 1;
        return document.body.removeChild(e), (ua = t);
      }
      return ua;
    },
    GT = Object.assign(Object.assign({}, Ae.props), {
      align: String,
      justify: { type: String, default: "start" },
      inline: Boolean,
      vertical: Boolean,
      size: { type: [String, Number, Array], default: "medium" },
      wrapItem: { type: Boolean, default: !0 },
      itemStyle: [String, Object],
      wrap: { type: Boolean, default: !0 },
      internalUseGap: { type: Boolean, default: void 0 },
    }),
    ip = ue({
      name: "Space",
      props: GT,
      setup(e) {
        const { mergedClsPrefixRef: t, mergedRtlRef: o } = yt(e),
          r = Ae("Space", "-space", void 0, KT, e, t),
          n = un("Space", o, t);
        return {
          useGap: UT(),
          rtlEnabled: n,
          mergedClsPrefix: t,
          margin: B(() => {
            const { size: i } = e;
            if (Array.isArray(i)) return { horizontal: i[0], vertical: i[1] };
            if (typeof i == "number") return { horizontal: i, vertical: i };
            const {
                self: { [de("gap", i)]: l },
              } = r.value,
              { row: a, col: s } = Om(l);
            return { horizontal: Vn(s), vertical: Vn(a) };
          }),
        };
      },
      render() {
        const {
            vertical: e,
            align: t,
            inline: o,
            justify: r,
            itemStyle: n,
            margin: i,
            wrap: l,
            mergedClsPrefix: a,
            rtlEnabled: s,
            useGap: c,
            wrapItem: d,
            internalUseGap: u,
          } = this,
          h = Ki(Vm(this));
        if (!h.length) return null;
        const p = `${i.horizontal}px`,
          f = `${i.horizontal / 2}px`,
          v = `${i.vertical}px`,
          b = `${i.vertical / 2}px`,
          g = h.length - 1,
          T = r.startsWith("space-");
        return m(
          "div",
          {
            role: "none",
            class: [`${a}-space`, s && `${a}-space--rtl`],
            style: {
              display: o ? "inline-flex" : "flex",
              flexDirection: e ? "column" : "row",
              justifyContent: ["start", "end"].includes(r) ? "flex-" + r : r,
              flexWrap: !l || e ? "nowrap" : "wrap",
              marginTop: c || e ? "" : `-${b}`,
              marginBottom: c || e ? "" : `-${b}`,
              alignItems: t,
              gap: c ? `${i.vertical}px ${i.horizontal}px` : "",
            },
          },
          !d && (c || u)
            ? h
            : h.map((O, P) =>
                m(
                  "div",
                  {
                    role: "none",
                    style: [
                      n,
                      { maxWidth: "100%" },
                      c
                        ? ""
                        : e
                        ? { marginBottom: P !== g ? v : "" }
                        : s
                        ? {
                            marginLeft: T
                              ? r === "space-between" && P === g
                                ? ""
                                : f
                              : P !== g
                              ? p
                              : "",
                            marginRight: T
                              ? r === "space-between" && P === 0
                                ? ""
                                : f
                              : "",
                            paddingTop: b,
                            paddingBottom: b,
                          }
                        : {
                            marginRight: T
                              ? r === "space-between" && P === g
                                ? ""
                                : f
                              : P !== g
                              ? p
                              : "",
                            marginLeft: T
                              ? r === "space-between" && P === 0
                                ? ""
                                : f
                              : "",
                            paddingTop: b,
                            paddingBottom: b,
                          },
                    ],
                  },
                  O
                )
              )
        );
      },
    }),
    qT = {
      name: "DynamicTags",
      common: ce,
      peers: { Input: Yt, Button: Dt, Tag: Ph, Space: np },
      self() {
        return { inputWidth: "64px" };
      },
    },
    YT = qT,
    XT = { name: "Element", common: ce },
    ZT = XT,
    JT = {
      feedbackPadding: "4px 0 0 2px",
      feedbackHeightSmall: "24px",
      feedbackHeightMedium: "24px",
      feedbackHeightLarge: "26px",
      feedbackFontSizeSmall: "13px",
      feedbackFontSizeMedium: "14px",
      feedbackFontSizeLarge: "14px",
      labelFontSizeLeftSmall: "14px",
      labelFontSizeLeftMedium: "14px",
      labelFontSizeLeftLarge: "15px",
      labelFontSizeTopSmall: "13px",
      labelFontSizeTopMedium: "14px",
      labelFontSizeTopLarge: "14px",
      labelHeightSmall: "24px",
      labelHeightMedium: "26px",
      labelHeightLarge: "28px",
      labelPaddingVertical: "0 0 6px 2px",
      labelPaddingHorizontal: "0 12px 0 0",
      labelTextAlignVertical: "left",
      labelTextAlignHorizontal: "right",
      labelFontWeight: "400",
    },
    QT = (e) => {
      const {
        heightSmall: t,
        heightMedium: o,
        heightLarge: r,
        textColor1: n,
        errorColor: i,
        warningColor: l,
        lineHeight: a,
        textColor3: s,
      } = e;
      return Object.assign(Object.assign({}, JT), {
        blankHeightSmall: t,
        blankHeightMedium: o,
        blankHeightLarge: r,
        lineHeight: a,
        labelTextColor: n,
        asteriskColor: i,
        feedbackTextColorError: i,
        feedbackTextColorWarning: l,
        feedbackTextColor: s,
      });
    },
    ez = { name: "Form", common: ce, self: QT },
    tz = ez,
    oz = {
      name: "GradientText",
      common: ce,
      self(e) {
        const {
          primaryColor: t,
          successColor: o,
          warningColor: r,
          errorColor: n,
          infoColor: i,
          primaryColorSuppl: l,
          successColorSuppl: a,
          warningColorSuppl: s,
          errorColorSuppl: c,
          infoColorSuppl: d,
          fontWeightStrong: u,
        } = e;
        return {
          fontWeight: u,
          rotate: "252deg",
          colorStartPrimary: t,
          colorEndPrimary: l,
          colorStartInfo: i,
          colorEndInfo: d,
          colorStartWarning: r,
          colorEndWarning: s,
          colorStartError: n,
          colorEndError: c,
          colorStartSuccess: o,
          colorEndSuccess: a,
        };
      },
    },
    rz = oz,
    nz = (e) => {
      const { primaryColor: t, baseColor: o } = e;
      return { color: t, iconColor: o };
    },
    iz = { name: "IconWrapper", common: ce, self: nz },
    lz = iz,
    az = {
      closeMargin: "16px 12px",
      closeSize: "20px",
      closeIconSize: "16px",
      width: "365px",
      padding: "16px",
      titleFontSize: "16px",
      metaFontSize: "12px",
      descriptionFontSize: "12px",
    },
    sz = (e) => {
      const {
        textColor2: t,
        successColor: o,
        infoColor: r,
        warningColor: n,
        errorColor: i,
        popoverColor: l,
        closeIconColor: a,
        closeIconColorHover: s,
        closeIconColorPressed: c,
        closeColorHover: d,
        closeColorPressed: u,
        textColor1: h,
        textColor3: p,
        borderRadius: f,
        fontWeightStrong: v,
        boxShadow2: b,
        lineHeight: g,
        fontSize: T,
      } = e;
      return Object.assign(Object.assign({}, az), {
        borderRadius: f,
        lineHeight: g,
        fontSize: T,
        headerFontWeight: v,
        iconColor: t,
        iconColorSuccess: o,
        iconColorInfo: r,
        iconColorWarning: n,
        iconColorError: i,
        color: l,
        textColor: t,
        closeIconColor: a,
        closeIconColorHover: s,
        closeIconColorPressed: c,
        closeBorderRadius: f,
        closeColorHover: d,
        closeColorPressed: u,
        headerTextColor: h,
        descriptionTextColor: p,
        actionTextColor: t,
        boxShadow: b,
      });
    },
    cz = {
      name: "Notification",
      common: ce,
      peers: { Scrollbar: Ft },
      self: sz,
    },
    dz = cz,
    uz = {
      margin: "0 0 8px 0",
      padding: "10px 20px",
      maxWidth: "720px",
      minWidth: "420px",
      iconMargin: "0 10px 0 0",
      closeMargin: "0 0 0 10px",
      closeSize: "20px",
      closeIconSize: "16px",
      iconSize: "20px",
      fontSize: "14px",
    },
    fz = (e) => {
      const {
        textColor2: t,
        closeIconColor: o,
        closeIconColorHover: r,
        closeIconColorPressed: n,
        infoColor: i,
        successColor: l,
        errorColor: a,
        warningColor: s,
        popoverColor: c,
        boxShadow2: d,
        primaryColor: u,
        lineHeight: h,
        borderRadius: p,
        closeColorHover: f,
        closeColorPressed: v,
      } = e;
      return Object.assign(Object.assign({}, uz), {
        closeBorderRadius: p,
        textColor: t,
        textColorInfo: t,
        textColorSuccess: t,
        textColorError: t,
        textColorWarning: t,
        textColorLoading: t,
        color: c,
        colorInfo: c,
        colorSuccess: c,
        colorError: c,
        colorWarning: c,
        colorLoading: c,
        boxShadow: d,
        boxShadowInfo: d,
        boxShadowSuccess: d,
        boxShadowError: d,
        boxShadowWarning: d,
        boxShadowLoading: d,
        iconColor: t,
        iconColorInfo: i,
        iconColorSuccess: l,
        iconColorWarning: s,
        iconColorError: a,
        iconColorLoading: u,
        closeColorHover: f,
        closeColorPressed: v,
        closeIconColor: o,
        closeIconColorHover: r,
        closeIconColorPressed: n,
        closeColorHoverInfo: f,
        closeColorPressedInfo: v,
        closeIconColorInfo: o,
        closeIconColorHoverInfo: r,
        closeIconColorPressedInfo: n,
        closeColorHoverSuccess: f,
        closeColorPressedSuccess: v,
        closeIconColorSuccess: o,
        closeIconColorHoverSuccess: r,
        closeIconColorPressedSuccess: n,
        closeColorHoverError: f,
        closeColorPressedError: v,
        closeIconColorError: o,
        closeIconColorHoverError: r,
        closeIconColorPressedError: n,
        closeColorHoverWarning: f,
        closeColorPressedWarning: v,
        closeIconColorWarning: o,
        closeIconColorHoverWarning: r,
        closeIconColorPressedWarning: n,
        closeColorHoverLoading: f,
        closeColorPressedLoading: v,
        closeIconColorLoading: o,
        closeIconColorHoverLoading: r,
        closeIconColorPressedLoading: n,
        loadingColor: u,
        lineHeight: h,
        borderRadius: p,
      });
    },
    hz = { name: "Message", common: ce, self: fz },
    pz = hz,
    vz = { name: "ButtonGroup", common: ce },
    gz = vz,
    mz = {
      name: "InputNumber",
      common: ce,
      peers: { Button: Dt, Input: Yt },
      self(e) {
        const { textColorDisabled: t } = e;
        return { iconColorDisabled: t };
      },
    },
    bz = mz,
    xz = {
      name: "Layout",
      common: ce,
      peers: { Scrollbar: Ft },
      self(e) {
        const {
          textColor2: t,
          bodyColor: o,
          popoverColor: r,
          cardColor: n,
          dividerColor: i,
          scrollbarColor: l,
          scrollbarColorHover: a,
        } = e;
        return {
          textColor: t,
          textColorInverted: t,
          color: o,
          colorEmbedded: o,
          headerColor: n,
          headerColorInverted: n,
          footerColor: n,
          footerColorInverted: n,
          headerBorderColor: i,
          headerBorderColorInverted: i,
          footerBorderColor: i,
          footerBorderColorInverted: i,
          siderBorderColor: i,
          siderBorderColorInverted: i,
          siderColor: n,
          siderColorInverted: n,
          siderToggleButtonBorder: "1px solid transparent",
          siderToggleButtonColor: r,
          siderToggleButtonIconColor: t,
          siderToggleButtonIconColorInverted: t,
          siderToggleBarColor: be(o, l),
          siderToggleBarColorHover: be(o, a),
          __invertScrollbar: "false",
        };
      },
    },
    Cz = xz,
    yz = (e) => {
      const {
        baseColor: t,
        textColor2: o,
        bodyColor: r,
        cardColor: n,
        dividerColor: i,
        actionColor: l,
        scrollbarColor: a,
        scrollbarColorHover: s,
        invertedColor: c,
      } = e;
      return {
        textColor: o,
        textColorInverted: "#FFF",
        color: r,
        colorEmbedded: l,
        headerColor: n,
        headerColorInverted: c,
        footerColor: l,
        footerColorInverted: c,
        headerBorderColor: i,
        headerBorderColorInverted: c,
        footerBorderColor: i,
        footerBorderColorInverted: c,
        siderBorderColor: i,
        siderBorderColorInverted: c,
        siderColor: n,
        siderColorInverted: c,
        siderToggleButtonBorder: `1px solid ${i}`,
        siderToggleButtonColor: t,
        siderToggleButtonIconColor: o,
        siderToggleButtonIconColorInverted: o,
        siderToggleBarColor: be(r, a),
        siderToggleBarColorHover: be(r, s),
        __invertScrollbar: "true",
      };
    },
    wz = { name: "Layout", common: Et, peers: { Scrollbar: qs }, self: yz },
    ec = wz,
    Sz = (e) => {
      const {
        textColor2: t,
        cardColor: o,
        modalColor: r,
        popoverColor: n,
        dividerColor: i,
        borderRadius: l,
        fontSize: a,
        hoverColor: s,
      } = e;
      return {
        textColor: t,
        color: o,
        colorHover: s,
        colorModal: r,
        colorHoverModal: be(r, s),
        colorPopover: n,
        colorHoverPopover: be(n, s),
        borderColor: i,
        borderColorModal: be(r, i),
        borderColorPopover: be(n, i),
        borderRadius: l,
        fontSize: a,
      };
    },
    $z = { name: "List", common: ce, self: Sz },
    Pz = $z,
    Tz = {
      name: "LoadingBar",
      common: ce,
      self(e) {
        const { primaryColor: t } = e;
        return { colorError: "red", colorLoading: t, height: "2px" };
      },
    },
    zz = Tz,
    Iz = {
      name: "Log",
      common: ce,
      peers: { Scrollbar: Ft, Code: Dh },
      self(e) {
        const {
          textColor2: t,
          inputColor: o,
          fontSize: r,
          primaryColor: n,
        } = e;
        return {
          loaderFontSize: r,
          loaderTextColor: t,
          loaderColor: o,
          loaderBorder: "1px solid #0000",
          loadingColor: n,
        };
      },
    },
    _z = Iz,
    Mz = {
      name: "Mention",
      common: ce,
      peers: { InternalSelectMenu: li, Input: Yt },
      self(e) {
        const { boxShadow2: t } = e;
        return { menuBoxShadow: t };
      },
    },
    kz = Mz;
  function Ez(e, t, o, r) {
    return {
      itemColorHoverInverted: "#0000",
      itemColorActiveInverted: t,
      itemColorActiveHoverInverted: t,
      itemColorActiveCollapsedInverted: t,
      itemTextColorInverted: e,
      itemTextColorHoverInverted: o,
      itemTextColorChildActiveInverted: o,
      itemTextColorChildActiveHoverInverted: o,
      itemTextColorActiveInverted: o,
      itemTextColorActiveHoverInverted: o,
      itemTextColorHorizontalInverted: e,
      itemTextColorHoverHorizontalInverted: o,
      itemTextColorChildActiveHorizontalInverted: o,
      itemTextColorChildActiveHoverHorizontalInverted: o,
      itemTextColorActiveHorizontalInverted: o,
      itemTextColorActiveHoverHorizontalInverted: o,
      itemIconColorInverted: e,
      itemIconColorHoverInverted: o,
      itemIconColorActiveInverted: o,
      itemIconColorActiveHoverInverted: o,
      itemIconColorChildActiveInverted: o,
      itemIconColorChildActiveHoverInverted: o,
      itemIconColorCollapsedInverted: e,
      itemIconColorHorizontalInverted: e,
      itemIconColorHoverHorizontalInverted: o,
      itemIconColorActiveHorizontalInverted: o,
      itemIconColorActiveHoverHorizontalInverted: o,
      itemIconColorChildActiveHorizontalInverted: o,
      itemIconColorChildActiveHoverHorizontalInverted: o,
      arrowColorInverted: e,
      arrowColorHoverInverted: o,
      arrowColorActiveInverted: o,
      arrowColorActiveHoverInverted: o,
      arrowColorChildActiveInverted: o,
      arrowColorChildActiveHoverInverted: o,
      groupTextColorInverted: r,
    };
  }
  const lp = (e) => {
      const {
        borderRadius: t,
        textColor3: o,
        primaryColor: r,
        textColor2: n,
        textColor1: i,
        fontSize: l,
        dividerColor: a,
        hoverColor: s,
        primaryColorHover: c,
      } = e;
      return Object.assign(
        {
          borderRadius: t,
          color: "#0000",
          groupTextColor: o,
          itemColorHover: s,
          itemColorActive: te(r, { alpha: 0.1 }),
          itemColorActiveHover: te(r, { alpha: 0.1 }),
          itemColorActiveCollapsed: te(r, { alpha: 0.1 }),
          itemTextColor: n,
          itemTextColorHover: n,
          itemTextColorActive: r,
          itemTextColorActiveHover: r,
          itemTextColorChildActive: r,
          itemTextColorChildActiveHover: r,
          itemTextColorHorizontal: n,
          itemTextColorHoverHorizontal: c,
          itemTextColorActiveHorizontal: r,
          itemTextColorActiveHoverHorizontal: r,
          itemTextColorChildActiveHorizontal: r,
          itemTextColorChildActiveHoverHorizontal: r,
          itemIconColor: i,
          itemIconColorHover: i,
          itemIconColorActive: r,
          itemIconColorActiveHover: r,
          itemIconColorChildActive: r,
          itemIconColorChildActiveHover: r,
          itemIconColorCollapsed: i,
          itemIconColorHorizontal: i,
          itemIconColorHoverHorizontal: c,
          itemIconColorActiveHorizontal: r,
          itemIconColorActiveHoverHorizontal: r,
          itemIconColorChildActiveHorizontal: r,
          itemIconColorChildActiveHoverHorizontal: r,
          itemHeight: "42px",
          arrowColor: n,
          arrowColorHover: n,
          arrowColorActive: r,
          arrowColorActiveHover: r,
          arrowColorChildActive: r,
          arrowColorChildActiveHover: r,
          colorInverted: "#0000",
          borderColorHorizontal: "#0000",
          fontSize: l,
          dividerColor: a,
        },
        Ez("#BBB", r, "#FFF", "#AAA")
      );
    },
    Rz = {
      name: "Menu",
      common: Et,
      peers: { Tooltip: Kh, Dropdown: Yh },
      self: lp,
    },
    Oz = Rz,
    Bz = {
      name: "Menu",
      common: ce,
      peers: { Tooltip: Il, Dropdown: Js },
      self(e) {
        const { primaryColor: t, primaryColorSuppl: o } = e,
          r = lp(e);
        return (
          (r.itemColorActive = te(t, { alpha: 0.15 })),
          (r.itemColorActiveHover = te(t, { alpha: 0.15 })),
          (r.itemColorActiveCollapsed = te(t, { alpha: 0.15 })),
          (r.itemColorActiveInverted = o),
          (r.itemColorActiveHoverInverted = o),
          (r.itemColorActiveCollapsedInverted = o),
          r
        );
      },
    },
    Az = Bz,
    Hz = { titleFontSize: "18px", backSize: "22px" };
  function Fz(e) {
    const {
      textColor1: t,
      textColor2: o,
      textColor3: r,
      fontSize: n,
      fontWeightStrong: i,
      primaryColorHover: l,
      primaryColorPressed: a,
    } = e;
    return Object.assign(Object.assign({}, Hz), {
      titleFontWeight: i,
      fontSize: n,
      titleTextColor: t,
      backColor: o,
      backColorHover: l,
      backColorPressed: a,
      subtitleTextColor: r,
    });
  }
  const Dz = { name: "PageHeader", common: ce, self: Fz },
    Lz = { iconSize: "22px" },
    Wz = (e) => {
      const { fontSize: t, warningColor: o } = e;
      return Object.assign(Object.assign({}, Lz), {
        fontSize: t,
        iconColor: o,
      });
    },
    Nz = {
      name: "Popconfirm",
      common: ce,
      peers: { Button: Dt, Popover: kr },
      self: Wz,
    },
    jz = Nz,
    Vz = (e) => {
      const {
        infoColor: t,
        successColor: o,
        warningColor: r,
        errorColor: n,
        textColor2: i,
        progressRailColor: l,
        fontSize: a,
        fontWeight: s,
      } = e;
      return {
        fontSize: a,
        fontSizeCircle: "28px",
        fontWeightCircle: s,
        railColor: l,
        railHeight: "8px",
        iconSizeCircle: "36px",
        iconSizeLine: "18px",
        iconColor: t,
        iconColorInfo: t,
        iconColorSuccess: o,
        iconColorWarning: r,
        iconColorError: n,
        textColorCircle: i,
        textColorLineInner: "rgb(255, 255, 255)",
        textColorLineOuter: i,
        fillColor: t,
        fillColorInfo: t,
        fillColorSuccess: o,
        fillColorWarning: r,
        fillColorError: n,
        lineBgProcessing:
          "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",
      };
    },
    Kz = {
      name: "Progress",
      common: ce,
      self(e) {
        const t = Vz(e);
        return (
          (t.textColorLineInner = "rgb(0, 0, 0)"),
          (t.lineBgProcessing =
            "linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"),
          t
        );
      },
    },
    ap = Kz,
    Uz = {
      name: "Rate",
      common: ce,
      self(e) {
        const { railColor: t } = e;
        return {
          itemColor: t,
          itemColorActive: "#CCAA33",
          itemSize: "20px",
          sizeSmall: "16px",
          sizeMedium: "20px",
          sizeLarge: "24px",
        };
      },
    },
    Gz = Uz,
    qz = {
      titleFontSizeSmall: "26px",
      titleFontSizeMedium: "32px",
      titleFontSizeLarge: "40px",
      titleFontSizeHuge: "48px",
      fontSizeSmall: "14px",
      fontSizeMedium: "14px",
      fontSizeLarge: "15px",
      fontSizeHuge: "16px",
      iconSizeSmall: "64px",
      iconSizeMedium: "80px",
      iconSizeLarge: "100px",
      iconSizeHuge: "125px",
      iconColor418: void 0,
      iconColor404: void 0,
      iconColor403: void 0,
      iconColor500: void 0,
    },
    Yz = (e) => {
      const {
        textColor2: t,
        textColor1: o,
        errorColor: r,
        successColor: n,
        infoColor: i,
        warningColor: l,
        lineHeight: a,
        fontWeightStrong: s,
      } = e;
      return Object.assign(Object.assign({}, qz), {
        lineHeight: a,
        titleFontWeight: s,
        titleTextColor: o,
        textColor: t,
        iconColorError: r,
        iconColorSuccess: n,
        iconColorInfo: i,
        iconColorWarning: l,
      });
    },
    Xz = { name: "Result", common: ce, self: Yz },
    Zz = Xz,
    Jz = {
      railHeight: "4px",
      railWidthVertical: "4px",
      handleSize: "18px",
      dotHeight: "8px",
      dotWidth: "8px",
      dotBorderRadius: "4px",
    },
    Qz = {
      name: "Slider",
      common: ce,
      self(e) {
        const t = "0 2px 8px 0 rgba(0, 0, 0, 0.12)",
          {
            railColor: o,
            modalColor: r,
            primaryColorSuppl: n,
            popoverColor: i,
            textColor2: l,
            cardColor: a,
            borderRadius: s,
            fontSize: c,
            opacityDisabled: d,
          } = e;
        return Object.assign(Object.assign({}, Jz), {
          fontSize: c,
          markFontSize: c,
          railColor: o,
          railColorHover: o,
          fillColor: n,
          fillColorHover: n,
          opacityDisabled: d,
          handleColor: "#FFF",
          dotColor: a,
          dotColorModal: r,
          dotColorPopover: i,
          handleBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
          handleBoxShadowHover: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
          handleBoxShadowActive: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
          handleBoxShadowFocus: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
          indicatorColor: i,
          indicatorBoxShadow: t,
          indicatorTextColor: l,
          indicatorBorderRadius: s,
          dotBorder: `2px solid ${o}`,
          dotBorderActive: `2px solid ${n}`,
          dotBoxShadow: "",
        });
      },
    },
    eI = Qz,
    tI = (e) => {
      const {
        opacityDisabled: t,
        heightTiny: o,
        heightSmall: r,
        heightMedium: n,
        heightLarge: i,
        heightHuge: l,
        primaryColor: a,
        fontSize: s,
      } = e;
      return {
        fontSize: s,
        textColor: a,
        sizeTiny: o,
        sizeSmall: r,
        sizeMedium: n,
        sizeLarge: i,
        sizeHuge: l,
        color: a,
        opacitySpinning: t,
      };
    },
    oI = { name: "Spin", common: ce, self: tI },
    rI = oI,
    nI = (e) => {
      const { textColor2: t, textColor3: o, fontSize: r, fontWeight: n } = e;
      return {
        labelFontSize: r,
        labelFontWeight: n,
        valueFontWeight: n,
        valueFontSize: "24px",
        labelTextColor: o,
        valuePrefixTextColor: t,
        valueSuffixTextColor: t,
        valueTextColor: t,
      };
    },
    iI = { name: "Statistic", common: ce, self: nI },
    lI = iI,
    aI = {
      stepHeaderFontSizeSmall: "14px",
      stepHeaderFontSizeMedium: "16px",
      indicatorIndexFontSizeSmall: "14px",
      indicatorIndexFontSizeMedium: "16px",
      indicatorSizeSmall: "22px",
      indicatorSizeMedium: "28px",
      indicatorIconSizeSmall: "14px",
      indicatorIconSizeMedium: "18px",
    },
    sI = (e) => {
      const {
        fontWeightStrong: t,
        baseColor: o,
        textColorDisabled: r,
        primaryColor: n,
        errorColor: i,
        textColor1: l,
        textColor2: a,
      } = e;
      return Object.assign(Object.assign({}, aI), {
        stepHeaderFontWeight: t,
        indicatorTextColorProcess: o,
        indicatorTextColorWait: r,
        indicatorTextColorFinish: n,
        indicatorTextColorError: i,
        indicatorBorderColorProcess: n,
        indicatorBorderColorWait: r,
        indicatorBorderColorFinish: n,
        indicatorBorderColorError: i,
        indicatorColorProcess: n,
        indicatorColorWait: "#0000",
        indicatorColorFinish: "#0000",
        indicatorColorError: "#0000",
        splitorColorProcess: r,
        splitorColorWait: r,
        splitorColorFinish: n,
        splitorColorError: r,
        headerTextColorProcess: l,
        headerTextColorWait: r,
        headerTextColorFinish: r,
        headerTextColorError: i,
        descriptionTextColorProcess: a,
        descriptionTextColorWait: r,
        descriptionTextColorFinish: r,
        descriptionTextColorError: i,
      });
    },
    cI = { name: "Steps", common: ce, self: sI },
    dI = cI,
    uI = {
      buttonHeightSmall: "14px",
      buttonHeightMedium: "18px",
      buttonHeightLarge: "22px",
      buttonWidthSmall: "14px",
      buttonWidthMedium: "18px",
      buttonWidthLarge: "22px",
      buttonWidthPressedSmall: "20px",
      buttonWidthPressedMedium: "24px",
      buttonWidthPressedLarge: "28px",
      railHeightSmall: "18px",
      railHeightMedium: "22px",
      railHeightLarge: "26px",
      railWidthSmall: "32px",
      railWidthMedium: "40px",
      railWidthLarge: "48px",
    },
    fI = {
      name: "Switch",
      common: ce,
      self(e) {
        const {
            primaryColorSuppl: t,
            opacityDisabled: o,
            borderRadius: r,
            primaryColor: n,
            textColor2: i,
            baseColor: l,
          } = e,
          a = "rgba(255, 255, 255, .20)";
        return Object.assign(Object.assign({}, uI), {
          iconColor: l,
          textColor: i,
          loadingColor: t,
          opacityDisabled: o,
          railColor: a,
          railColorActive: t,
          buttonBoxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.4)",
          buttonColor: "#FFF",
          railBorderRadiusSmall: r,
          railBorderRadiusMedium: r,
          railBorderRadiusLarge: r,
          buttonBorderRadiusSmall: r,
          buttonBorderRadiusMedium: r,
          buttonBorderRadiusLarge: r,
          boxShadowFocus: `0 0 8px 0 ${te(n, { alpha: 0.3 })}`,
        });
      },
    },
    hI = fI,
    pI = {
      thPaddingSmall: "6px",
      thPaddingMedium: "12px",
      thPaddingLarge: "12px",
      tdPaddingSmall: "6px",
      tdPaddingMedium: "12px",
      tdPaddingLarge: "12px",
    },
    vI = (e) => {
      const {
        dividerColor: t,
        cardColor: o,
        modalColor: r,
        popoverColor: n,
        tableHeaderColor: i,
        tableColorStriped: l,
        textColor1: a,
        textColor2: s,
        borderRadius: c,
        fontWeightStrong: d,
        lineHeight: u,
        fontSizeSmall: h,
        fontSizeMedium: p,
        fontSizeLarge: f,
      } = e;
      return Object.assign(Object.assign({}, pI), {
        fontSizeSmall: h,
        fontSizeMedium: p,
        fontSizeLarge: f,
        lineHeight: u,
        borderRadius: c,
        borderColor: be(o, t),
        borderColorModal: be(r, t),
        borderColorPopover: be(n, t),
        tdColor: o,
        tdColorModal: r,
        tdColorPopover: n,
        tdColorStriped: be(o, l),
        tdColorStripedModal: be(r, l),
        tdColorStripedPopover: be(n, l),
        thColor: be(o, i),
        thColorModal: be(r, i),
        thColorPopover: be(n, i),
        thTextColor: a,
        tdTextColor: s,
        thFontWeight: d,
      });
    },
    gI = { name: "Table", common: ce, self: vI },
    mI = gI,
    bI = {
      tabFontSizeSmall: "14px",
      tabFontSizeMedium: "14px",
      tabFontSizeLarge: "16px",
      tabGapSmallLine: "36px",
      tabGapMediumLine: "36px",
      tabGapLargeLine: "36px",
      tabPaddingSmallLine: "6px 0",
      tabPaddingMediumLine: "10px 0",
      tabPaddingLargeLine: "14px 0",
      tabPaddingVerticalSmallLine: "0 6px",
      tabPaddingVerticalMediumLine: "0 10px",
      tabPaddingVerticalLargeLine: "0 14px",
      tabGapSmallBar: "36px",
      tabGapMediumBar: "36px",
      tabGapLargeBar: "36px",
      tabPaddingSmallBar: "4px 0",
      tabPaddingMediumBar: "6px 0",
      tabPaddingLargeBar: "10px 0",
      tabPaddingVerticalSmallBar: "0 4px",
      tabPaddingVerticalMediumBar: "0 6px ",
      tabPaddingVerticalLargeBar: "0 10px ",
      tabGapSmallCard: "4px",
      tabGapMediumCard: "4px",
      tabGapLargeCard: "4px",
      tabPaddingSmallCard: "6px 10px",
      tabPaddingMediumCard: "8px 12px",
      tabPaddingLargeCard: "8px 16px",
      tabPaddingSmallSegment: "4px 0",
      tabPaddingMediumSegment: "6px 0",
      tabPaddingLargeSegment: "8px 0",
      tabPaddingVerticalLargeSegment: "0 8px",
      tabPaddingVerticalSmallCard: "10px 6px",
      tabPaddingVerticalMediumCard: "12px 8px",
      tabPaddingVerticalLargeCard: "16px 8px",
      tabPaddingVerticalSmallSegment: "0 4px",
      tabPaddingVerticalMediumSegment: "0 6px",
      tabGapSmallSegment: "0",
      tabGapMediumSegment: "0",
      tabGapLargeSegment: "0",
      panePaddingSmall: "8px 0 0 0",
      panePaddingMedium: "12px 0 0 0",
      panePaddingLarge: "16px 0 0 0",
      closeSize: "18px",
      closeIconSize: "14px",
    },
    xI = (e) => {
      const {
        textColor2: t,
        primaryColor: o,
        textColorDisabled: r,
        closeIconColor: n,
        closeIconColorHover: i,
        closeIconColorPressed: l,
        closeColorHover: a,
        closeColorPressed: s,
        tabColor: c,
        baseColor: d,
        dividerColor: u,
        fontWeight: h,
        textColor1: p,
        borderRadius: f,
        fontSize: v,
        fontWeightStrong: b,
      } = e;
      return Object.assign(Object.assign({}, bI), {
        colorSegment: c,
        tabFontSizeCard: v,
        tabTextColorLine: p,
        tabTextColorActiveLine: o,
        tabTextColorHoverLine: o,
        tabTextColorDisabledLine: r,
        tabTextColorSegment: p,
        tabTextColorActiveSegment: t,
        tabTextColorHoverSegment: t,
        tabTextColorDisabledSegment: r,
        tabTextColorBar: p,
        tabTextColorActiveBar: o,
        tabTextColorHoverBar: o,
        tabTextColorDisabledBar: r,
        tabTextColorCard: p,
        tabTextColorHoverCard: p,
        tabTextColorActiveCard: o,
        tabTextColorDisabledCard: r,
        barColor: o,
        closeIconColor: n,
        closeIconColorHover: i,
        closeIconColorPressed: l,
        closeColorHover: a,
        closeColorPressed: s,
        closeBorderRadius: f,
        tabColor: c,
        tabColorSegment: d,
        tabBorderColor: u,
        tabFontWeightActive: h,
        tabFontWeight: h,
        tabBorderRadius: f,
        paneTextColor: t,
        fontWeightStrong: b,
      });
    },
    CI = {
      name: "Tabs",
      common: ce,
      self(e) {
        const t = xI(e),
          { inputColor: o } = e;
        return (t.colorSegment = o), (t.tabColorSegment = o), t;
      },
    },
    yI = CI,
    wI = (e) => {
      const {
        textColor1: t,
        textColor2: o,
        fontWeightStrong: r,
        fontSize: n,
      } = e;
      return {
        fontSize: n,
        titleTextColor: t,
        textColor: o,
        titleFontWeight: r,
      };
    },
    SI = { name: "Thing", common: ce, self: wI },
    $I = SI,
    PI = {
      titleMarginMedium: "0 0 6px 0",
      titleMarginLarge: "-2px 0 6px 0",
      titleFontSizeMedium: "14px",
      titleFontSizeLarge: "16px",
      iconSizeMedium: "14px",
      iconSizeLarge: "14px",
    },
    TI = {
      name: "Timeline",
      common: ce,
      self(e) {
        const {
          textColor3: t,
          infoColorSuppl: o,
          errorColorSuppl: r,
          successColorSuppl: n,
          warningColorSuppl: i,
          textColor1: l,
          textColor2: a,
          railColor: s,
          fontWeightStrong: c,
          fontSize: d,
        } = e;
        return Object.assign(Object.assign({}, PI), {
          contentFontSize: d,
          titleFontWeight: c,
          circleBorder: `2px solid ${t}`,
          circleBorderInfo: `2px solid ${o}`,
          circleBorderError: `2px solid ${r}`,
          circleBorderSuccess: `2px solid ${n}`,
          circleBorderWarning: `2px solid ${i}`,
          iconColor: t,
          iconColorInfo: o,
          iconColorError: r,
          iconColorSuccess: n,
          iconColorWarning: i,
          titleTextColor: l,
          contentTextColor: a,
          metaTextColor: t,
          lineColor: s,
        });
      },
    },
    zI = TI,
    II = {
      extraFontSizeSmall: "12px",
      extraFontSizeMedium: "12px",
      extraFontSizeLarge: "14px",
      titleFontSizeSmall: "14px",
      titleFontSizeMedium: "16px",
      titleFontSizeLarge: "16px",
      closeSize: "20px",
      closeIconSize: "16px",
      headerHeightSmall: "44px",
      headerHeightMedium: "44px",
      headerHeightLarge: "50px",
    },
    _I = {
      name: "Transfer",
      common: ce,
      peers: { Checkbox: fn, Scrollbar: Ft, Input: Yt, Empty: Mr, Button: Dt },
      self(e) {
        const {
          fontWeight: t,
          fontSizeLarge: o,
          fontSizeMedium: r,
          fontSizeSmall: n,
          heightLarge: i,
          heightMedium: l,
          borderRadius: a,
          inputColor: s,
          tableHeaderColor: c,
          textColor1: d,
          textColorDisabled: u,
          textColor2: h,
          textColor3: p,
          hoverColor: f,
          closeColorHover: v,
          closeColorPressed: b,
          closeIconColor: g,
          closeIconColorHover: T,
          closeIconColorPressed: O,
          dividerColor: P,
        } = e;
        return Object.assign(Object.assign({}, II), {
          itemHeightSmall: l,
          itemHeightMedium: l,
          itemHeightLarge: i,
          fontSizeSmall: n,
          fontSizeMedium: r,
          fontSizeLarge: o,
          borderRadius: a,
          dividerColor: P,
          borderColor: "#0000",
          listColor: s,
          headerColor: c,
          titleTextColor: d,
          titleTextColorDisabled: u,
          extraTextColor: p,
          extraTextColorDisabled: u,
          itemTextColor: h,
          itemTextColorDisabled: u,
          itemColorPending: f,
          titleFontWeight: t,
          closeColorHover: v,
          closeColorPressed: b,
          closeIconColor: g,
          closeIconColorHover: T,
          closeIconColorPressed: O,
        });
      },
    },
    MI = _I,
    kI = (e) => {
      const {
        borderRadiusSmall: t,
        hoverColor: o,
        pressedColor: r,
        primaryColor: n,
        textColor3: i,
        textColor2: l,
        textColorDisabled: a,
        fontSize: s,
      } = e;
      return {
        fontSize: s,
        nodeBorderRadius: t,
        nodeColorHover: o,
        nodeColorPressed: r,
        nodeColorActive: te(n, { alpha: 0.1 }),
        arrowColor: i,
        nodeTextColor: l,
        nodeTextColorDisabled: a,
        loadingColor: n,
        dropMarkColor: n,
      };
    },
    EI = {
      name: "Tree",
      common: ce,
      peers: { Checkbox: fn, Scrollbar: Ft, Empty: Mr },
      self(e) {
        const { primaryColor: t } = e,
          o = kI(e);
        return (o.nodeColorActive = te(t, { alpha: 0.15 })), o;
      },
    },
    sp = EI,
    RI = {
      name: "TreeSelect",
      common: ce,
      peers: { Tree: sp, Empty: Mr, InternalSelection: Zs },
    },
    OI = RI,
    BI = {
      headerFontSize1: "30px",
      headerFontSize2: "22px",
      headerFontSize3: "18px",
      headerFontSize4: "16px",
      headerFontSize5: "16px",
      headerFontSize6: "16px",
      headerMargin1: "28px 0 20px 0",
      headerMargin2: "28px 0 20px 0",
      headerMargin3: "28px 0 20px 0",
      headerMargin4: "28px 0 18px 0",
      headerMargin5: "28px 0 18px 0",
      headerMargin6: "28px 0 18px 0",
      headerPrefixWidth1: "16px",
      headerPrefixWidth2: "16px",
      headerPrefixWidth3: "12px",
      headerPrefixWidth4: "12px",
      headerPrefixWidth5: "12px",
      headerPrefixWidth6: "12px",
      headerBarWidth1: "4px",
      headerBarWidth2: "4px",
      headerBarWidth3: "3px",
      headerBarWidth4: "3px",
      headerBarWidth5: "3px",
      headerBarWidth6: "3px",
      pMargin: "16px 0 16px 0",
      liMargin: ".25em 0 0 0",
      olPadding: "0 0 0 2em",
      ulPadding: "0 0 0 2em",
    },
    cp = (e) => {
      const {
        primaryColor: t,
        textColor2: o,
        borderColor: r,
        lineHeight: n,
        fontSize: i,
        borderRadiusSmall: l,
        dividerColor: a,
        fontWeightStrong: s,
        textColor1: c,
        textColor3: d,
        infoColor: u,
        warningColor: h,
        errorColor: p,
        successColor: f,
        codeColor: v,
      } = e;
      return Object.assign(Object.assign({}, BI), {
        aTextColor: t,
        blockquoteTextColor: o,
        blockquotePrefixColor: r,
        blockquoteLineHeight: n,
        blockquoteFontSize: i,
        codeBorderRadius: l,
        liTextColor: o,
        liLineHeight: n,
        liFontSize: i,
        hrColor: a,
        headerFontWeight: s,
        headerTextColor: c,
        pTextColor: o,
        pTextColor1Depth: c,
        pTextColor2Depth: o,
        pTextColor3Depth: d,
        pLineHeight: n,
        pFontSize: i,
        headerBarColor: t,
        headerBarColorPrimary: t,
        headerBarColorInfo: u,
        headerBarColorError: p,
        headerBarColorWarning: h,
        headerBarColorSuccess: f,
        textColor: o,
        textColor1Depth: c,
        textColor2Depth: o,
        textColor3Depth: d,
        textColorPrimary: t,
        textColorInfo: u,
        textColorSuccess: f,
        textColorWarning: h,
        textColorError: p,
        codeTextColor: o,
        codeColor: v,
        codeBorder: "1px solid #0000",
      });
    },
    AI = { name: "Typography", common: Et, self: cp },
    dp = AI,
    HI = { name: "Typography", common: ce, self: cp },
    FI = HI,
    DI = (e) => {
      const {
        iconColor: t,
        primaryColor: o,
        errorColor: r,
        textColor2: n,
        successColor: i,
        opacityDisabled: l,
        actionColor: a,
        borderColor: s,
        hoverColor: c,
        lineHeight: d,
        borderRadius: u,
        fontSize: h,
      } = e;
      return {
        fontSize: h,
        lineHeight: d,
        borderRadius: u,
        draggerColor: a,
        draggerBorder: `1px dashed ${s}`,
        draggerBorderHover: `1px dashed ${o}`,
        itemColorHover: c,
        itemColorHoverError: te(r, { alpha: 0.06 }),
        itemTextColor: n,
        itemTextColorError: r,
        itemTextColorSuccess: i,
        itemIconColor: t,
        itemDisabledOpacity: l,
        itemBorderImageCardError: `1px solid ${r}`,
        itemBorderImageCard: `1px solid ${s}`,
      };
    },
    LI = {
      name: "Upload",
      common: ce,
      peers: { Button: Dt, Progress: ap },
      self(e) {
        const { errorColor: t } = e,
          o = DI(e);
        return (o.itemColorHoverError = te(t, { alpha: 0.09 })), o;
      },
    },
    WI = LI,
    NI = {
      name: "Watermark",
      common: ce,
      self(e) {
        const { fontFamily: t } = e;
        return { fontFamily: t };
      },
    },
    jI = NI,
    VI = { name: "Row", common: ce },
    KI = VI,
    UI = {
      name: "Image",
      common: ce,
      peers: { Tooltip: Il },
      self: (e) => {
        const { textColor2: t } = e;
        return {
          toolbarIconColor: t,
          toolbarColor: "rgba(0, 0, 0, .35)",
          toolbarBoxShadow: "none",
          toolbarBorderRadius: "24px",
        };
      },
    },
    GI = "n-layout-sider",
    tc = { type: String, default: "static" },
    qI = U(
      "layout",
      `
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,
      [
        U(
          "layout-scroll-container",
          `
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `
        ),
        re(
          "absolute-positioned",
          `

 `
        ),
      ]
    ),
    YI = {
      embedded: Boolean,
      position: tc,
      nativeScrollbar: { type: Boolean, default: !0 },
      scrollbarProps: Object,
      onScroll: Function,
      contentStyle: { type: [String, Object], default: "" },
      hasSider: Boolean,
      siderPlacement: { type: String, default: "left" },
    },
    XI = "n-layout";
  function up(e) {
    return ue({
      name: e ? "LayoutContent" : "Layout",
      props: Object.assign(Object.assign({}, Ae.props), YI),
      setup(t) {
        const o = N(null),
          r = N(null),
          { mergedClsPrefixRef: n, inlineThemeDisabled: i } = yt(t),
          l = Ae("Layout", "-layout", qI, ec, t, n);
        function a(v, b) {
          if (t.nativeScrollbar) {
            const { value: g } = o;
            g && (b === void 0 ? g.scrollTo(v) : g.scrollTo(v, b));
          } else {
            const { value: g } = r;
            g && g.scrollTo(v, b);
          }
        }
        ot(XI, t);
        let s = 0,
          c = 0;
        const d = (v) => {
          var b;
          const g = v.target;
          (s = g.scrollLeft),
            (c = g.scrollTop),
            (b = t.onScroll) === null || b === void 0 || b.call(t, v);
        };
        Ef(() => {
          if (t.nativeScrollbar) {
            const v = o.value;
            v && ((v.scrollTop = c), (v.scrollLeft = s));
          }
        });
        const u = {
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            flexDirection: "row",
          },
          h = { scrollTo: a },
          p = B(() => {
            const {
              common: { cubicBezierEaseInOut: v },
              self: b,
            } = l.value;
            return {
              "--n-bezier": v,
              "--n-color": t.embedded ? b.colorEmbedded : b.color,
              "--n-text-color": b.textColor,
            };
          }),
          f = i
            ? wt(
                "layout",
                B(() => (t.embedded ? "e" : "")),
                p,
                t
              )
            : void 0;
        return Object.assign(
          {
            mergedClsPrefix: n,
            scrollableElRef: o,
            scrollbarInstRef: r,
            hasSiderStyle: u,
            mergedTheme: l,
            handleNativeElScroll: d,
            cssVars: i ? void 0 : p,
            themeClass: f == null ? void 0 : f.themeClass,
            onRender: f == null ? void 0 : f.onRender,
          },
          h
        );
      },
      render() {
        var t;
        const { mergedClsPrefix: o, hasSider: r } = this;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const n = r ? this.hasSiderStyle : void 0,
          i = [
            this.themeClass,
            e && `${o}-layout-content`,
            `${o}-layout`,
            `${o}-layout--${this.position}-positioned`,
          ];
        return m(
          "div",
          { class: i, style: this.cssVars },
          this.nativeScrollbar
            ? m(
                "div",
                {
                  ref: "scrollableElRef",
                  class: `${o}-layout-scroll-container`,
                  style: [this.contentStyle, n],
                  onScroll: this.handleNativeElScroll,
                },
                this.$slots
              )
            : m(
                Ys,
                Object.assign({}, this.scrollbarProps, {
                  onScroll: this.onScroll,
                  ref: "scrollbarInstRef",
                  theme: this.mergedTheme.peers.Scrollbar,
                  themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                  contentStyle: [this.contentStyle, n],
                }),
                this.$slots
              )
        );
      },
    });
  }
  const ZI = up(!1),
    JI = up(!0),
    QI = U(
      "layout-header",
      `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,
      [
        re(
          "absolute-positioned",
          `

 `
        ),
        re(
          "bordered",
          `
 border-bottom: solid 1px var(--n-border-color);
 `
        ),
      ]
    ),
    e_ = {
      position: tc,
      inverted: Boolean,
      bordered: { type: Boolean, default: !1 },
    },
    t_ = ue({
      name: "LayoutHeader",
      props: Object.assign(Object.assign({}, Ae.props), e_),
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Layout", "-layout-header", QI, ec, e, t),
          n = B(() => {
            const {
                common: { cubicBezierEaseInOut: l },
                self: a,
              } = r.value,
              s = { "--n-bezier": l };
            return (
              e.inverted
                ? ((s["--n-color"] = a.headerColorInverted),
                  (s["--n-text-color"] = a.textColorInverted),
                  (s["--n-border-color"] = a.headerBorderColorInverted))
                : ((s["--n-color"] = a.headerColor),
                  (s["--n-text-color"] = a.textColor),
                  (s["--n-border-color"] = a.headerBorderColor)),
              s
            );
          }),
          i = o
            ? wt(
                "layout-header",
                B(() => (e.inverted ? "a" : "b")),
                n,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          cssVars: o ? void 0 : n,
          themeClass: i == null ? void 0 : i.themeClass,
          onRender: i == null ? void 0 : i.onRender,
        };
      },
      render() {
        var e;
        const { mergedClsPrefix: t } = this;
        return (
          (e = this.onRender) === null || e === void 0 || e.call(this),
          m(
            "div",
            {
              class: [
                `${t}-layout-header`,
                this.themeClass,
                this.position &&
                  `${t}-layout-header--${this.position}-positioned`,
                this.bordered && `${t}-layout-header--bordered`,
              ],
              style: this.cssVars,
            },
            this.$slots
          )
        );
      },
    }),
    o_ = U(
      "layout-footer",
      `
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,
      [
        re(
          "absolute-positioned",
          `
 `
        ),
        re(
          "bordered",
          `
 border-top: solid 1px var(--n-border-color);
 `
        ),
      ]
    ),
    r_ = Object.assign(Object.assign({}, Ae.props), {
      inverted: Boolean,
      position: tc,
      bordered: Boolean,
    }),
    n_ = ue({
      name: "LayoutFooter",
      props: r_,
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Layout", "-layout-footer", o_, ec, e, t),
          n = B(() => {
            const {
                common: { cubicBezierEaseInOut: l },
                self: a,
              } = r.value,
              s = { "--n-bezier": l };
            return (
              e.inverted
                ? ((s["--n-color"] = a.footerColorInverted),
                  (s["--n-text-color"] = a.textColorInverted),
                  (s["--n-border-color"] = a.footerBorderColorInverted))
                : ((s["--n-color"] = a.footerColor),
                  (s["--n-text-color"] = a.textColor),
                  (s["--n-border-color"] = a.footerBorderColor)),
              s
            );
          }),
          i = o
            ? wt(
                "layout-footer",
                B(() => (e.inverted ? "a" : "b")),
                n,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          cssVars: o ? void 0 : n,
          themeClass: i == null ? void 0 : i.themeClass,
          onRender: i == null ? void 0 : i.onRender,
        };
      },
      render() {
        var e;
        const { mergedClsPrefix: t } = this;
        return (
          (e = this.onRender) === null || e === void 0 || e.call(this),
          m(
            "div",
            {
              class: [
                `${t}-layout-footer`,
                this.themeClass,
                this.position &&
                  `${t}-layout-footer--${this.position}-positioned`,
                this.bordered && `${t}-layout-footer--bordered`,
              ],
              style: this.cssVars,
            },
            this.$slots
          )
        );
      },
    }),
    i_ = { extraFontSize: "12px", width: "440px" },
    l_ = {
      name: "Transfer",
      common: ce,
      peers: { Checkbox: fn, Scrollbar: Ft, Input: Yt, Empty: Mr, Button: Dt },
      self(e) {
        const {
          iconColorDisabled: t,
          iconColor: o,
          fontWeight: r,
          fontSizeLarge: n,
          fontSizeMedium: i,
          fontSizeSmall: l,
          heightLarge: a,
          heightMedium: s,
          heightSmall: c,
          borderRadius: d,
          inputColor: u,
          tableHeaderColor: h,
          textColor1: p,
          textColorDisabled: f,
          textColor2: v,
          hoverColor: b,
        } = e;
        return Object.assign(Object.assign({}, i_), {
          itemHeightSmall: c,
          itemHeightMedium: s,
          itemHeightLarge: a,
          fontSizeSmall: l,
          fontSizeMedium: i,
          fontSizeLarge: n,
          borderRadius: d,
          borderColor: "#0000",
          listColor: u,
          headerColor: h,
          titleTextColor: p,
          titleTextColorDisabled: f,
          extraTextColor: v,
          filterDividerColor: "#0000",
          itemTextColor: v,
          itemTextColorDisabled: f,
          itemColorPending: b,
          titleFontWeight: r,
          iconColor: o,
          iconColorDisabled: t,
        });
      },
    },
    a_ = l_,
    ai = "n-menu",
    oc = "n-submenu",
    rc = "n-menu-item-group",
    Ii = 8;
  function nc(e) {
    const t = Oe(ai),
      { props: o, mergedCollapsedRef: r } = t,
      n = Oe(oc, null),
      i = Oe(rc, null),
      l = B(() => o.mode === "horizontal"),
      a = B(() =>
        l.value ? o.dropdownPlacement : "tmNodes" in e ? "right-start" : "right"
      ),
      s = B(() => {
        var h;
        return Math.max(
          (h = o.collapsedIconSize) !== null && h !== void 0 ? h : o.iconSize,
          o.iconSize
        );
      }),
      c = B(() => {
        var h;
        return !l.value &&
          e.root &&
          r.value &&
          (h = o.collapsedIconSize) !== null &&
          h !== void 0
          ? h
          : o.iconSize;
      }),
      d = B(() => {
        if (l.value) return;
        const { collapsedWidth: h, indent: p, rootIndent: f } = o,
          { root: v, isGroup: b } = e,
          g = f === void 0 ? p : f;
        if (v) return r.value ? h / 2 - s.value / 2 : g;
        if (i) return p / 2 + i.paddingLeftRef.value;
        if (n) return (b ? p / 2 : p) + n.paddingLeftRef.value;
      }),
      u = B(() => {
        const { collapsedWidth: h, indent: p, rootIndent: f } = o,
          { value: v } = s,
          { root: b } = e;
        return l.value || !b || !r.value
          ? Ii
          : (f === void 0 ? p : f) + v + Ii - (h + v) / 2;
      });
    return {
      dropdownPlacement: a,
      activeIconSize: c,
      maxIconSize: s,
      paddingLeft: d,
      iconMarginRight: u,
      NMenu: t,
      NSubmenu: n,
    };
  }
  const ic = {
      internalKey: { type: [String, Number], required: !0 },
      root: Boolean,
      isGroup: Boolean,
      level: { type: Number, required: !0 },
      title: [String, Function],
      extra: [String, Function],
    },
    fp = Object.assign(Object.assign({}, ic), {
      tmNode: { type: Object, required: !0 },
      tmNodes: { type: Array, required: !0 },
    }),
    s_ = ue({
      name: "MenuOptionGroup",
      props: fp,
      setup(e) {
        ot(oc, null);
        const t = nc(e);
        ot(rc, { paddingLeftRef: t.paddingLeft });
        const { mergedClsPrefixRef: o, props: r } = Oe(ai);
        return function () {
          const { value: n } = o,
            i = t.paddingLeft.value,
            { nodeProps: l } = r,
            a = l == null ? void 0 : l(e.tmNode.rawNode);
          return m(
            "div",
            { class: `${n}-menu-item-group`, role: "group" },
            m(
              "div",
              Object.assign({}, a, {
                class: [
                  `${n}-menu-item-group-title`,
                  a == null ? void 0 : a.class,
                ],
                style: [
                  (a == null ? void 0 : a.style) || "",
                  i !== void 0 ? `padding-left: ${i}px;` : "",
                ],
              }),
              It(e.title),
              e.extra ? m(Ye, null, " ", It(e.extra)) : null
            ),
            m(
              "div",
              null,
              e.tmNodes.map((s) => lc(s, r))
            )
          );
        };
      },
    }),
    hp = ue({
      name: "MenuOptionContent",
      props: {
        collapsed: Boolean,
        disabled: Boolean,
        title: [String, Function],
        icon: Function,
        extra: [String, Function],
        showArrow: Boolean,
        childActive: Boolean,
        hover: Boolean,
        paddingLeft: Number,
        selected: Boolean,
        maxIconSize: { type: Number, required: !0 },
        activeIconSize: { type: Number, required: !0 },
        iconMarginRight: { type: Number, required: !0 },
        clsPrefix: { type: String, required: !0 },
        onClick: Function,
        tmNode: { type: Object, required: !0 },
      },
      setup(e) {
        const { props: t } = Oe(ai);
        return {
          menuProps: t,
          style: B(() => {
            const { paddingLeft: o } = e;
            return { paddingLeft: o && `${o}px` };
          }),
          iconStyle: B(() => {
            const { maxIconSize: o, activeIconSize: r, iconMarginRight: n } = e;
            return {
              width: `${o}px`,
              height: `${o}px`,
              fontSize: `${r}px`,
              marginRight: `${n}px`,
            };
          }),
        };
      },
      render() {
        const {
            clsPrefix: e,
            tmNode: t,
            menuProps: {
              renderIcon: o,
              renderLabel: r,
              renderExtra: n,
              expandIcon: i,
            },
          } = this,
          l = o ? o(t.rawNode) : It(this.icon);
        return m(
          "div",
          {
            onClick: (a) => {
              var s;
              (s = this.onClick) === null || s === void 0 || s.call(this, a);
            },
            role: "none",
            class: [
              `${e}-menu-item-content`,
              {
                [`${e}-menu-item-content--selected`]: this.selected,
                [`${e}-menu-item-content--collapsed`]: this.collapsed,
                [`${e}-menu-item-content--child-active`]: this.childActive,
                [`${e}-menu-item-content--disabled`]: this.disabled,
                [`${e}-menu-item-content--hover`]: this.hover,
              },
            ],
            style: this.style,
          },
          l &&
            m(
              "div",
              {
                class: `${e}-menu-item-content__icon`,
                style: this.iconStyle,
                role: "none",
              },
              [l]
            ),
          m(
            "div",
            { class: `${e}-menu-item-content-header`, role: "none" },
            r ? r(t.rawNode) : It(this.title),
            this.extra || n
              ? m(
                  "span",
                  { class: `${e}-menu-item-content-header__extra` },
                  " ",
                  n ? n(t.rawNode) : It(this.extra)
                )
              : null
          ),
          this.showArrow
            ? m(
                qo,
                {
                  ariaHidden: !0,
                  class: `${e}-menu-item-content__arrow`,
                  clsPrefix: e,
                },
                { default: () => (i ? i(t.rawNode) : m(kS, null)) }
              )
            : null
        );
      },
    }),
    pp = Object.assign(Object.assign({}, ic), {
      rawNodes: { type: Array, default: () => [] },
      tmNodes: { type: Array, default: () => [] },
      tmNode: { type: Object, required: !0 },
      disabled: { type: Boolean, default: !1 },
      icon: Function,
      onClick: Function,
    }),
    c_ = ue({
      name: "Submenu",
      props: pp,
      setup(e) {
        const t = nc(e),
          { NMenu: o, NSubmenu: r } = t,
          { props: n, mergedCollapsedRef: i, mergedThemeRef: l } = o,
          a = B(() => {
            const { disabled: h } = e;
            return (r != null && r.mergedDisabledRef.value) || n.disabled
              ? !0
              : h;
          }),
          s = N(!1);
        ot(oc, { paddingLeftRef: t.paddingLeft, mergedDisabledRef: a }),
          ot(rc, null);
        function c() {
          const { onClick: h } = e;
          h && h();
        }
        function d() {
          a.value || (i.value || o.toggleExpand(e.internalKey), c());
        }
        function u(h) {
          s.value = h;
        }
        return {
          menuProps: n,
          mergedTheme: l,
          doSelect: o.doSelect,
          inverted: o.invertedRef,
          isHorizontal: o.isHorizontalRef,
          mergedClsPrefix: o.mergedClsPrefixRef,
          maxIconSize: t.maxIconSize,
          activeIconSize: t.activeIconSize,
          iconMarginRight: t.iconMarginRight,
          dropdownPlacement: t.dropdownPlacement,
          dropdownShow: s,
          paddingLeft: t.paddingLeft,
          mergedDisabled: a,
          mergedValue: o.mergedValueRef,
          childActive: ut(() => o.activePathRef.value.includes(e.internalKey)),
          collapsed: B(() =>
            n.mode === "horizontal"
              ? !1
              : i.value
              ? !0
              : !o.mergedExpandedKeysRef.value.includes(e.internalKey)
          ),
          dropdownEnabled: B(
            () => !a.value && (n.mode === "horizontal" || i.value)
          ),
          handlePopoverShowChange: u,
          handleClick: d,
        };
      },
      render() {
        var e;
        const {
            mergedClsPrefix: t,
            menuProps: { renderIcon: o, renderLabel: r },
          } = this,
          n = () => {
            const {
                isHorizontal: l,
                paddingLeft: a,
                collapsed: s,
                mergedDisabled: c,
                maxIconSize: d,
                activeIconSize: u,
                title: h,
                childActive: p,
                icon: f,
                handleClick: v,
                menuProps: { nodeProps: b },
                dropdownShow: g,
                iconMarginRight: T,
                tmNode: O,
                mergedClsPrefix: P,
              } = this,
              R = b == null ? void 0 : b(O.rawNode);
            return m(
              "div",
              Object.assign({}, R, {
                class: [`${P}-menu-item`, R == null ? void 0 : R.class],
                role: "menuitem",
              }),
              m(hp, {
                tmNode: O,
                paddingLeft: a,
                collapsed: s,
                disabled: c,
                iconMarginRight: T,
                maxIconSize: d,
                activeIconSize: u,
                title: h,
                extra: this.extra,
                showArrow: !l,
                childActive: p,
                clsPrefix: P,
                icon: f,
                hover: g,
                onClick: v,
              })
            );
          },
          i = () =>
            m(dh, null, {
              default: () => {
                const { tmNodes: l, collapsed: a } = this;
                return a
                  ? null
                  : m(
                      "div",
                      { class: `${t}-submenu-children`, role: "menu" },
                      l.map((s) => lc(s, this.menuProps))
                    );
              },
            });
        return this.root
          ? m(
              vT,
              Object.assign(
                { size: "large", trigger: "hover" },
                (e = this.menuProps) === null || e === void 0
                  ? void 0
                  : e.dropdownProps,
                {
                  themeOverrides: this.mergedTheme.peerOverrides.Dropdown,
                  theme: this.mergedTheme.peers.Dropdown,
                  builtinThemeOverrides: {
                    fontSizeLarge: "14px",
                    optionIconSizeLarge: "18px",
                  },
                  value: this.mergedValue,
                  disabled: !this.dropdownEnabled,
                  placement: this.dropdownPlacement,
                  keyField: this.menuProps.keyField,
                  labelField: this.menuProps.labelField,
                  childrenField: this.menuProps.childrenField,
                  onUpdateShow: this.handlePopoverShowChange,
                  options: this.rawNodes,
                  onSelect: this.doSelect,
                  inverted: this.inverted,
                  renderIcon: o,
                  renderLabel: r,
                }
              ),
              {
                default: () =>
                  m(
                    "div",
                    {
                      class: `${t}-submenu`,
                      role: "menuitem",
                      "aria-expanded": !this.collapsed,
                    },
                    n(),
                    this.isHorizontal ? null : i()
                  ),
              }
            )
          : m(
              "div",
              {
                class: `${t}-submenu`,
                role: "menuitem",
                "aria-expanded": !this.collapsed,
              },
              n(),
              i()
            );
      },
    }),
    vp = Object.assign(Object.assign({}, ic), {
      tmNode: { type: Object, required: !0 },
      disabled: Boolean,
      icon: Function,
      onClick: Function,
    }),
    d_ = ue({
      name: "MenuOption",
      props: vp,
      setup(e) {
        const t = nc(e),
          { NSubmenu: o, NMenu: r } = t,
          { props: n, mergedClsPrefixRef: i, mergedCollapsedRef: l } = r,
          a = o ? o.mergedDisabledRef : { value: !1 },
          s = B(() => a.value || e.disabled);
        function c(u) {
          const { onClick: h } = e;
          h && h(u);
        }
        function d(u) {
          s.value || (r.doSelect(e.internalKey, e.tmNode.rawNode), c(u));
        }
        return {
          mergedClsPrefix: i,
          dropdownPlacement: t.dropdownPlacement,
          paddingLeft: t.paddingLeft,
          iconMarginRight: t.iconMarginRight,
          maxIconSize: t.maxIconSize,
          activeIconSize: t.activeIconSize,
          mergedTheme: r.mergedThemeRef,
          menuProps: n,
          dropdownEnabled: ut(
            () => e.root && l.value && n.mode !== "horizontal" && !s.value
          ),
          selected: ut(() => r.mergedValueRef.value === e.internalKey),
          mergedDisabled: s,
          handleClick: d,
        };
      },
      render() {
        const {
            mergedClsPrefix: e,
            mergedTheme: t,
            tmNode: o,
            menuProps: { renderLabel: r, nodeProps: n },
          } = this,
          i = n == null ? void 0 : n(o.rawNode);
        return m(
          "div",
          Object.assign({}, i, {
            role: "menuitem",
            class: [`${e}-menu-item`, i == null ? void 0 : i.class],
          }),
          m(
            QP,
            {
              theme: t.peers.Tooltip,
              themeOverrides: t.peerOverrides.Tooltip,
              trigger: "hover",
              placement: this.dropdownPlacement,
              disabled: !this.dropdownEnabled || this.title === void 0,
              internalExtraClass: ["menu-tooltip"],
            },
            {
              default: () => (r ? r(o.rawNode) : It(this.title)),
              trigger: () =>
                m(hp, {
                  tmNode: o,
                  clsPrefix: e,
                  paddingLeft: this.paddingLeft,
                  iconMarginRight: this.iconMarginRight,
                  maxIconSize: this.maxIconSize,
                  activeIconSize: this.activeIconSize,
                  selected: this.selected,
                  title: this.title,
                  extra: this.extra,
                  disabled: this.mergedDisabled,
                  icon: this.icon,
                  onClick: this.handleClick,
                }),
            }
          )
        );
      },
    }),
    u_ = ue({
      name: "MenuDivider",
      setup() {
        const e = Oe(ai),
          { mergedClsPrefixRef: t, isHorizontalRef: o } = e;
        return () =>
          o.value ? null : m("div", { class: `${t.value}-menu-divider` });
      },
    }),
    f_ = xs(fp),
    h_ = xs(vp),
    p_ = xs(pp);
  function gp(e) {
    return e.type === "divider" || e.type === "render";
  }
  function v_(e) {
    return e.type === "divider";
  }
  function lc(e, t) {
    const { rawNode: o } = e,
      { show: r } = o;
    if (r === !1) return null;
    if (gp(o))
      return v_(o) ? m(u_, Object.assign({ key: e.key }, o.props)) : null;
    const { labelField: n } = t,
      { key: i, level: l, isGroup: a } = e,
      s = Object.assign(Object.assign({}, o), {
        title: o.title || o[n],
        extra: o.titleExtra || o.extra,
        key: i,
        internalKey: i,
        level: l,
        root: l === 0,
        isGroup: a,
      });
    return e.children
      ? e.isGroup
        ? m(s_, Mn(s, f_, { tmNode: e, tmNodes: e.children, key: i }))
        : m(
            c_,
            Mn(s, p_, {
              key: i,
              rawNodes: o[t.childrenField],
              tmNodes: e.children,
              tmNode: e,
            })
          )
      : m(d_, Mn(s, h_, { key: i, tmNode: e }));
  }
  const Xd = [
      D("&::before", "background-color: var(--n-item-color-hover);"),
      A(
        "arrow",
        `
 color: var(--n-arrow-color-hover);
 `
      ),
      A(
        "icon",
        `
 color: var(--n-item-icon-color-hover);
 `
      ),
      U(
        "menu-item-content-header",
        `
 color: var(--n-item-text-color-hover);
 `,
        [
          D(
            "a",
            `
 color: var(--n-item-text-color-hover);
 `
          ),
          A(
            "extra",
            `
 color: var(--n-item-text-color-hover);
 `
          ),
        ]
      ),
    ],
    Zd = [
      A(
        "icon",
        `
 color: var(--n-item-icon-color-hover-horizontal);
 `
      ),
      U(
        "menu-item-content-header",
        `
 color: var(--n-item-text-color-hover-horizontal);
 `,
        [
          D(
            "a",
            `
 color: var(--n-item-text-color-hover-horizontal);
 `
          ),
          A(
            "extra",
            `
 color: var(--n-item-text-color-hover-horizontal);
 `
          ),
        ]
      ),
    ],
    g_ = D([
      U(
        "menu",
        `
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,
        [
          re(
            "horizontal",
            `
 display: inline-flex;
 padding-bottom: 0;
 `,
            [
              U("submenu", "margin: 0;"),
              U("menu-item", "margin: 0;"),
              U(
                "menu-item-content",
                `
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,
                [
                  D("&::before", "display: none;"),
                  re(
                    "selected",
                    "border-bottom: 2px solid var(--n-border-color-horizontal)"
                  ),
                ]
              ),
              U("menu-item-content", [
                re("selected", [
                  A(
                    "icon",
                    "color: var(--n-item-icon-color-active-horizontal);"
                  ),
                  U(
                    "menu-item-content-header",
                    `
 color: var(--n-item-text-color-active-horizontal);
 `,
                    [
                      D(
                        "a",
                        "color: var(--n-item-text-color-active-horizontal);"
                      ),
                      A(
                        "extra",
                        "color: var(--n-item-text-color-active-horizontal);"
                      ),
                    ]
                  ),
                ]),
                re(
                  "child-active",
                  `
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,
                  [
                    U(
                      "menu-item-content-header",
                      `
 color: var(--n-item-text-color-child-active-horizontal);
 `,
                      [
                        D(
                          "a",
                          `
 color: var(--n-item-text-color-child-active-horizontal);
 `
                        ),
                        A(
                          "extra",
                          `
 color: var(--n-item-text-color-child-active-horizontal);
 `
                        ),
                      ]
                    ),
                    A(
                      "icon",
                      `
 color: var(--n-item-icon-color-child-active-horizontal);
 `
                    ),
                  ]
                ),
                Je("disabled", [
                  Je("selected, child-active", [D("&:focus-within", Zd)]),
                  re("selected", [
                    nr(null, [
                      A(
                        "icon",
                        "color: var(--n-item-icon-color-active-hover-horizontal);"
                      ),
                      U(
                        "menu-item-content-header",
                        `
 color: var(--n-item-text-color-active-hover-horizontal);
 `,
                        [
                          D(
                            "a",
                            "color: var(--n-item-text-color-active-hover-horizontal);"
                          ),
                          A(
                            "extra",
                            "color: var(--n-item-text-color-active-hover-horizontal);"
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  re("child-active", [
                    nr(null, [
                      A(
                        "icon",
                        "color: var(--n-item-icon-color-child-active-hover-horizontal);"
                      ),
                      U(
                        "menu-item-content-header",
                        `
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,
                        [
                          D(
                            "a",
                            "color: var(--n-item-text-color-child-active-hover-horizontal);"
                          ),
                          A(
                            "extra",
                            "color: var(--n-item-text-color-child-active-hover-horizontal);"
                          ),
                        ]
                      ),
                    ]),
                  ]),
                  nr(
                    "border-bottom: 2px solid var(--n-border-color-horizontal);",
                    Zd
                  ),
                ]),
                U("menu-item-content-header", [
                  D("a", "color: var(--n-item-text-color-horizontal);"),
                ]),
              ]),
            ]
          ),
          re("collapsed", [
            U("menu-item-content", [
              re("selected", [
                D(
                  "&::before",
                  `
 background-color: var(--n-item-color-active-collapsed) !important;
 `
                ),
              ]),
              U("menu-item-content-header", "opacity: 0;"),
              A("arrow", "opacity: 0;"),
              A("icon", "color: var(--n-item-icon-color-collapsed);"),
            ]),
          ]),
          U(
            "menu-item",
            `
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `
          ),
          U(
            "menu-item-content",
            `
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,
            [
              D("> *", "z-index: 1;"),
              D(
                "&::before",
                `
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `
              ),
              re(
                "disabled",
                `
 opacity: .45;
 cursor: not-allowed;
 `
              ),
              re("collapsed", [A("arrow", "transform: rotate(0);")]),
              re("selected", [
                D("&::before", "background-color: var(--n-item-color-active);"),
                A("arrow", "color: var(--n-arrow-color-active);"),
                A("icon", "color: var(--n-item-icon-color-active);"),
                U(
                  "menu-item-content-header",
                  `
 color: var(--n-item-text-color-active);
 `,
                  [
                    D("a", "color: var(--n-item-text-color-active);"),
                    A("extra", "color: var(--n-item-text-color-active);"),
                  ]
                ),
              ]),
              re("child-active", [
                U(
                  "menu-item-content-header",
                  `
 color: var(--n-item-text-color-child-active);
 `,
                  [
                    D(
                      "a",
                      `
 color: var(--n-item-text-color-child-active);
 `
                    ),
                    A(
                      "extra",
                      `
 color: var(--n-item-text-color-child-active);
 `
                    ),
                  ]
                ),
                A(
                  "arrow",
                  `
 color: var(--n-arrow-color-child-active);
 `
                ),
                A(
                  "icon",
                  `
 color: var(--n-item-icon-color-child-active);
 `
                ),
              ]),
              Je("disabled", [
                Je("selected, child-active", [D("&:focus-within", Xd)]),
                re("selected", [
                  nr(null, [
                    A("arrow", "color: var(--n-arrow-color-active-hover);"),
                    A("icon", "color: var(--n-item-icon-color-active-hover);"),
                    U(
                      "menu-item-content-header",
                      `
 color: var(--n-item-text-color-active-hover);
 `,
                      [
                        D("a", "color: var(--n-item-text-color-active-hover);"),
                        A(
                          "extra",
                          "color: var(--n-item-text-color-active-hover);"
                        ),
                      ]
                    ),
                  ]),
                ]),
                re("child-active", [
                  nr(null, [
                    A(
                      "arrow",
                      "color: var(--n-arrow-color-child-active-hover);"
                    ),
                    A(
                      "icon",
                      "color: var(--n-item-icon-color-child-active-hover);"
                    ),
                    U(
                      "menu-item-content-header",
                      `
 color: var(--n-item-text-color-child-active-hover);
 `,
                      [
                        D(
                          "a",
                          "color: var(--n-item-text-color-child-active-hover);"
                        ),
                        A(
                          "extra",
                          "color: var(--n-item-text-color-child-active-hover);"
                        ),
                      ]
                    ),
                  ]),
                ]),
                re("selected", [
                  nr(null, [
                    D(
                      "&::before",
                      "background-color: var(--n-item-color-active-hover);"
                    ),
                  ]),
                ]),
                nr(null, Xd),
              ]),
              A(
                "icon",
                `
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `
              ),
              A(
                "arrow",
                `
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `
              ),
              U(
                "menu-item-content-header",
                `
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,
                [
                  D(
                    "a",
                    `
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,
                    [
                      D(
                        "&::before",
                        `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `
                      ),
                    ]
                  ),
                  A(
                    "extra",
                    `
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `
                  ),
                ]
              ),
            ]
          ),
          U(
            "submenu",
            `
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,
            [
              U(
                "menu-item-content",
                `
 height: var(--n-item-height);
 `
              ),
              U(
                "submenu-children",
                `
 overflow: hidden;
 padding: 0;
 `,
                [u$({ duration: ".2s" })]
              ),
            ]
          ),
          U("menu-item-group", [
            U(
              "menu-item-group-title",
              `
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `
            ),
          ]),
        ]
      ),
      U("menu-tooltip", [
        D(
          "a",
          `
 color: inherit;
 text-decoration: none;
 `
        ),
      ]),
      U(
        "menu-divider",
        `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `
      ),
    ]);
  function nr(e, t) {
    return [re("hover", e, t), D("&:hover", e, t)];
  }
  const m_ = Object.assign(Object.assign({}, Ae.props), {
      options: { type: Array, default: () => [] },
      collapsed: { type: Boolean, default: void 0 },
      collapsedWidth: { type: Number, default: 48 },
      iconSize: { type: Number, default: 20 },
      collapsedIconSize: { type: Number, default: 24 },
      rootIndent: Number,
      indent: { type: Number, default: 32 },
      labelField: { type: String, default: "label" },
      keyField: { type: String, default: "key" },
      childrenField: { type: String, default: "children" },
      disabledField: { type: String, default: "disabled" },
      defaultExpandAll: Boolean,
      defaultExpandedKeys: Array,
      expandedKeys: Array,
      value: [String, Number],
      defaultValue: { type: [String, Number], default: null },
      mode: { type: String, default: "vertical" },
      watchProps: { type: Array, default: void 0 },
      disabled: Boolean,
      show: { type: Boolean, defalut: !0 },
      inverted: Boolean,
      "onUpdate:expandedKeys": [Function, Array],
      onUpdateExpandedKeys: [Function, Array],
      onUpdateValue: [Function, Array],
      "onUpdate:value": [Function, Array],
      expandIcon: Function,
      renderIcon: Function,
      renderLabel: Function,
      renderExtra: Function,
      dropdownProps: Object,
      accordion: Boolean,
      nodeProps: Function,
      items: Array,
      onOpenNamesChange: [Function, Array],
      onSelect: [Function, Array],
      onExpandedNamesChange: [Function, Array],
      expandedNames: Array,
      defaultExpandedNames: Array,
      dropdownPlacement: { type: String, default: "bottom" },
    }),
    b_ = ue({
      name: "Menu",
      props: m_,
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Menu", "-menu", g_, Oz, e, t),
          n = Oe(GI, null),
          i = B(() => {
            var S;
            const { collapsed: M } = e;
            if (M !== void 0) return M;
            if (n) {
              const { collapseModeRef: C, collapsedRef: _ } = n;
              if (C.value === "width")
                return (S = _.value) !== null && S !== void 0 ? S : !1;
            }
            return !1;
          }),
          l = B(() => {
            const { keyField: S, childrenField: M, disabledField: C } = e;
            return Us(e.items || e.options, {
              getIgnored(_) {
                return gp(_);
              },
              getChildren(_) {
                return _[M];
              },
              getDisabled(_) {
                return _[C];
              },
              getKey(_) {
                var y;
                return (y = _[S]) !== null && y !== void 0 ? y : _.name;
              },
            });
          }),
          a = B(() => new Set(l.value.treeNodes.map((S) => S.key))),
          { watchProps: s } = e,
          c = N(null);
        s != null && s.includes("defaultValue")
          ? po(() => {
              c.value = e.defaultValue;
            })
          : (c.value = e.defaultValue);
        const d = ke(e, "value"),
          u = yr(d, c),
          h = N([]),
          p = () => {
            h.value = e.defaultExpandAll
              ? l.value.getNonLeafKeys()
              : e.defaultExpandedNames ||
                e.defaultExpandedKeys ||
                l.value.getPath(u.value, { includeSelf: !1 }).keyPath;
          };
        s != null && s.includes("defaultExpandedKeys") ? po(p) : p();
        const f = Cl(e, ["expandedNames", "expandedKeys"]),
          v = yr(f, h),
          b = B(() => l.value.treeNodes),
          g = B(() => l.value.getPath(u.value).keyPath);
        ot(ai, {
          props: e,
          mergedCollapsedRef: i,
          mergedThemeRef: r,
          mergedValueRef: u,
          mergedExpandedKeysRef: v,
          activePathRef: g,
          mergedClsPrefixRef: t,
          isHorizontalRef: B(() => e.mode === "horizontal"),
          invertedRef: ke(e, "inverted"),
          doSelect: T,
          toggleExpand: P,
        });
        function T(S, M) {
          const { "onUpdate:value": C, onUpdateValue: _, onSelect: y } = e;
          _ && Re(_, S, M), C && Re(C, S, M), y && Re(y, S, M), (c.value = S);
        }
        function O(S) {
          const {
            "onUpdate:expandedKeys": M,
            onUpdateExpandedKeys: C,
            onExpandedNamesChange: _,
            onOpenNamesChange: y,
          } = e;
          M && Re(M, S),
            C && Re(C, S),
            _ && Re(_, S),
            y && Re(y, S),
            (h.value = S);
        }
        function P(S) {
          const M = Array.from(v.value),
            C = M.findIndex((_) => _ === S);
          if (~C) M.splice(C, 1);
          else {
            if (e.accordion && a.value.has(S)) {
              const _ = M.findIndex((y) => a.value.has(y));
              _ > -1 && M.splice(_, 1);
            }
            M.push(S);
          }
          O(M);
        }
        const R = (S) => {
            const M = l.value.getPath(S ?? u.value, {
              includeSelf: !1,
            }).keyPath;
            if (!M.length) return;
            const C = Array.from(v.value),
              _ = new Set([...C, ...M]);
            e.accordion &&
              a.value.forEach((y) => {
                _.has(y) && !M.includes(y) && _.delete(y);
              }),
              O(Array.from(_));
          },
          V = B(() => {
            const { inverted: S } = e,
              {
                common: { cubicBezierEaseInOut: M },
                self: C,
              } = r.value,
              {
                borderRadius: _,
                borderColorHorizontal: y,
                fontSize: K,
                itemHeight: H,
                dividerColor: q,
              } = C,
              k = {
                "--n-divider-color": q,
                "--n-bezier": M,
                "--n-font-size": K,
                "--n-border-color-horizontal": y,
                "--n-border-radius": _,
                "--n-item-height": H,
              };
            return (
              S
                ? ((k["--n-group-text-color"] = C.groupTextColorInverted),
                  (k["--n-color"] = C.colorInverted),
                  (k["--n-item-text-color"] = C.itemTextColorInverted),
                  (k["--n-item-text-color-hover"] =
                    C.itemTextColorHoverInverted),
                  (k["--n-item-text-color-active"] =
                    C.itemTextColorActiveInverted),
                  (k["--n-item-text-color-child-active"] =
                    C.itemTextColorChildActiveInverted),
                  (k["--n-item-text-color-child-active-hover"] =
                    C.itemTextColorChildActiveInverted),
                  (k["--n-item-text-color-active-hover"] =
                    C.itemTextColorActiveHoverInverted),
                  (k["--n-item-icon-color"] = C.itemIconColorInverted),
                  (k["--n-item-icon-color-hover"] =
                    C.itemIconColorHoverInverted),
                  (k["--n-item-icon-color-active"] =
                    C.itemIconColorActiveInverted),
                  (k["--n-item-icon-color-active-hover"] =
                    C.itemIconColorActiveHoverInverted),
                  (k["--n-item-icon-color-child-active"] =
                    C.itemIconColorChildActiveInverted),
                  (k["--n-item-icon-color-child-active-hover"] =
                    C.itemIconColorChildActiveHoverInverted),
                  (k["--n-item-icon-color-collapsed"] =
                    C.itemIconColorCollapsedInverted),
                  (k["--n-item-text-color-horizontal"] =
                    C.itemTextColorHorizontalInverted),
                  (k["--n-item-text-color-hover-horizontal"] =
                    C.itemTextColorHoverHorizontalInverted),
                  (k["--n-item-text-color-active-horizontal"] =
                    C.itemTextColorActiveHorizontalInverted),
                  (k["--n-item-text-color-child-active-horizontal"] =
                    C.itemTextColorChildActiveHorizontalInverted),
                  (k["--n-item-text-color-child-active-hover-horizontal"] =
                    C.itemTextColorChildActiveHoverHorizontalInverted),
                  (k["--n-item-text-color-active-hover-horizontal"] =
                    C.itemTextColorActiveHoverHorizontalInverted),
                  (k["--n-item-icon-color-horizontal"] =
                    C.itemIconColorHorizontalInverted),
                  (k["--n-item-icon-color-hover-horizontal"] =
                    C.itemIconColorHoverHorizontalInverted),
                  (k["--n-item-icon-color-active-horizontal"] =
                    C.itemIconColorActiveHorizontalInverted),
                  (k["--n-item-icon-color-active-hover-horizontal"] =
                    C.itemIconColorActiveHoverHorizontalInverted),
                  (k["--n-item-icon-color-child-active-horizontal"] =
                    C.itemIconColorChildActiveHorizontalInverted),
                  (k["--n-item-icon-color-child-active-hover-horizontal"] =
                    C.itemIconColorChildActiveHoverHorizontalInverted),
                  (k["--n-arrow-color"] = C.arrowColorInverted),
                  (k["--n-arrow-color-hover"] = C.arrowColorHoverInverted),
                  (k["--n-arrow-color-active"] = C.arrowColorActiveInverted),
                  (k["--n-arrow-color-active-hover"] =
                    C.arrowColorActiveHoverInverted),
                  (k["--n-arrow-color-child-active"] =
                    C.arrowColorChildActiveInverted),
                  (k["--n-arrow-color-child-active-hover"] =
                    C.arrowColorChildActiveHoverInverted),
                  (k["--n-item-color-hover"] = C.itemColorHoverInverted),
                  (k["--n-item-color-active"] = C.itemColorActiveInverted),
                  (k["--n-item-color-active-hover"] =
                    C.itemColorActiveHoverInverted),
                  (k["--n-item-color-active-collapsed"] =
                    C.itemColorActiveCollapsedInverted))
                : ((k["--n-group-text-color"] = C.groupTextColor),
                  (k["--n-color"] = C.color),
                  (k["--n-item-text-color"] = C.itemTextColor),
                  (k["--n-item-text-color-hover"] = C.itemTextColorHover),
                  (k["--n-item-text-color-active"] = C.itemTextColorActive),
                  (k["--n-item-text-color-child-active"] =
                    C.itemTextColorChildActive),
                  (k["--n-item-text-color-child-active-hover"] =
                    C.itemTextColorChildActiveHover),
                  (k["--n-item-text-color-active-hover"] =
                    C.itemTextColorActiveHover),
                  (k["--n-item-icon-color"] = C.itemIconColor),
                  (k["--n-item-icon-color-hover"] = C.itemIconColorHover),
                  (k["--n-item-icon-color-active"] = C.itemIconColorActive),
                  (k["--n-item-icon-color-active-hover"] =
                    C.itemIconColorActiveHover),
                  (k["--n-item-icon-color-child-active"] =
                    C.itemIconColorChildActive),
                  (k["--n-item-icon-color-child-active-hover"] =
                    C.itemIconColorChildActiveHover),
                  (k["--n-item-icon-color-collapsed"] =
                    C.itemIconColorCollapsed),
                  (k["--n-item-text-color-horizontal"] =
                    C.itemTextColorHorizontal),
                  (k["--n-item-text-color-hover-horizontal"] =
                    C.itemTextColorHoverHorizontal),
                  (k["--n-item-text-color-active-horizontal"] =
                    C.itemTextColorActiveHorizontal),
                  (k["--n-item-text-color-child-active-horizontal"] =
                    C.itemTextColorChildActiveHorizontal),
                  (k["--n-item-text-color-child-active-hover-horizontal"] =
                    C.itemTextColorChildActiveHoverHorizontal),
                  (k["--n-item-text-color-active-hover-horizontal"] =
                    C.itemTextColorActiveHoverHorizontal),
                  (k["--n-item-icon-color-horizontal"] =
                    C.itemIconColorHorizontal),
                  (k["--n-item-icon-color-hover-horizontal"] =
                    C.itemIconColorHoverHorizontal),
                  (k["--n-item-icon-color-active-horizontal"] =
                    C.itemIconColorActiveHorizontal),
                  (k["--n-item-icon-color-active-hover-horizontal"] =
                    C.itemIconColorActiveHoverHorizontal),
                  (k["--n-item-icon-color-child-active-horizontal"] =
                    C.itemIconColorChildActiveHorizontal),
                  (k["--n-item-icon-color-child-active-hover-horizontal"] =
                    C.itemIconColorChildActiveHoverHorizontal),
                  (k["--n-arrow-color"] = C.arrowColor),
                  (k["--n-arrow-color-hover"] = C.arrowColorHover),
                  (k["--n-arrow-color-active"] = C.arrowColorActive),
                  (k["--n-arrow-color-active-hover"] = C.arrowColorActiveHover),
                  (k["--n-arrow-color-child-active"] = C.arrowColorChildActive),
                  (k["--n-arrow-color-child-active-hover"] =
                    C.arrowColorChildActiveHover),
                  (k["--n-item-color-hover"] = C.itemColorHover),
                  (k["--n-item-color-active"] = C.itemColorActive),
                  (k["--n-item-color-active-hover"] = C.itemColorActiveHover),
                  (k["--n-item-color-active-collapsed"] =
                    C.itemColorActiveCollapsed)),
              k
            );
          }),
          x = o
            ? wt(
                "menu",
                B(() => (e.inverted ? "a" : "b")),
                V,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          controlledExpandedKeys: f,
          uncontrolledExpanededKeys: h,
          mergedExpandedKeys: v,
          uncontrolledValue: c,
          mergedValue: u,
          activePath: g,
          tmNodes: b,
          mergedTheme: r,
          mergedCollapsed: i,
          cssVars: o ? void 0 : V,
          themeClass: x == null ? void 0 : x.themeClass,
          onRender: x == null ? void 0 : x.onRender,
          showOption: R,
        };
      },
      render() {
        const {
          mergedClsPrefix: e,
          mode: t,
          themeClass: o,
          onRender: r,
        } = this;
        return (
          r == null || r(),
          m(
            "div",
            {
              role: t === "horizontal" ? "menubar" : "menu",
              class: [
                `${e}-menu`,
                o,
                `${e}-menu--${t}`,
                this.mergedCollapsed && `${e}-menu--collapsed`,
              ],
              style: this.cssVars,
            },
            this.tmNodes.map((n) => lc(n, this.$props))
          )
        );
      },
    }),
    x_ = {
      name: "Skeleton",
      common: ce,
      self(e) {
        const {
          heightSmall: t,
          heightMedium: o,
          heightLarge: r,
          borderRadius: n,
        } = e;
        return {
          color: "rgba(255, 255, 255, 0.12)",
          colorEnd: "rgba(255, 255, 255, 0.18)",
          borderRadius: n,
          heightSmall: t,
          heightMedium: o,
          heightLarge: r,
        };
      },
    },
    C_ = U(
      "h",
      `
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,
      [
        D("&:first-child", { marginTop: 0 }),
        re(
          "prefix-bar",
          { position: "relative", paddingLeft: "var(--n-prefix-width)" },
          [
            re("align-text", { paddingLeft: 0 }, [
              D("&::before", { left: "calc(-1 * var(--n-prefix-width))" }),
            ]),
            D(
              "&::before",
              `
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `
            ),
            D("&::before", { backgroundColor: "var(--n-bar-color)" }),
          ]
        ),
      ]
    ),
    y_ = Object.assign(Object.assign({}, Ae.props), {
      type: { type: String, default: "default" },
      prefix: String,
      alignText: Boolean,
    }),
    hn = (e) =>
      ue({
        name: `H${e}`,
        props: y_,
        setup(t) {
          const { mergedClsPrefixRef: o, inlineThemeDisabled: r } = yt(t),
            n = Ae("Typography", "-h", C_, dp, t, o),
            i = B(() => {
              const { type: a } = t,
                {
                  common: { cubicBezierEaseInOut: s },
                  self: {
                    headerFontWeight: c,
                    headerTextColor: d,
                    [de("headerPrefixWidth", e)]: u,
                    [de("headerFontSize", e)]: h,
                    [de("headerMargin", e)]: p,
                    [de("headerBarWidth", e)]: f,
                    [de("headerBarColor", a)]: v,
                  },
                } = n.value;
              return {
                "--n-bezier": s,
                "--n-font-size": h,
                "--n-margin": p,
                "--n-bar-color": v,
                "--n-bar-width": f,
                "--n-font-weight": c,
                "--n-text-color": d,
                "--n-prefix-width": u,
              };
            }),
            l = r
              ? wt(
                  `h${e}`,
                  B(() => t.type[0]),
                  i,
                  t
                )
              : void 0;
          return {
            mergedClsPrefix: o,
            cssVars: r ? void 0 : i,
            themeClass: l == null ? void 0 : l.themeClass,
            onRender: l == null ? void 0 : l.onRender,
          };
        },
        render() {
          var t;
          const {
            prefix: o,
            alignText: r,
            mergedClsPrefix: n,
            cssVars: i,
            $slots: l,
          } = this;
          return (
            (t = this.onRender) === null || t === void 0 || t.call(this),
            m(
              `h${e}`,
              {
                class: [
                  `${n}-h`,
                  `${n}-h${e}`,
                  this.themeClass,
                  { [`${n}-h--prefix-bar`]: o, [`${n}-h--align-text`]: r },
                ],
                style: i,
              },
              l
            )
          );
        },
      }),
    w_ = hn("1");
  hn("2");
  hn("3");
  hn("4");
  hn("5");
  hn("6");
  const S_ = U(
      "text",
      `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,
      [
        re(
          "strong",
          `
 font-weight: var(--n-font-weight-strong);
 `
        ),
        re("italic", { fontStyle: "italic" }),
        re("underline", { textDecoration: "underline" }),
        re(
          "code",
          `
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `
        ),
      ]
    ),
    $_ = Object.assign(Object.assign({}, Ae.props), {
      code: Boolean,
      type: { type: String, default: "default" },
      delete: Boolean,
      strong: Boolean,
      italic: Boolean,
      underline: Boolean,
      depth: [String, Number],
      tag: String,
      as: { type: String, validator: () => !0, default: void 0 },
    }),
    Wa = ue({
      name: "Text",
      props: $_,
      setup(e) {
        const { mergedClsPrefixRef: t, inlineThemeDisabled: o } = yt(e),
          r = Ae("Typography", "-text", S_, dp, e, t),
          n = B(() => {
            const { depth: l, type: a } = e,
              s =
                a === "default"
                  ? l === void 0
                    ? "textColor"
                    : `textColor${l}Depth`
                  : de("textColor", a),
              {
                common: {
                  fontWeightStrong: c,
                  fontFamilyMono: d,
                  cubicBezierEaseInOut: u,
                },
                self: {
                  codeTextColor: h,
                  codeBorderRadius: p,
                  codeColor: f,
                  codeBorder: v,
                  [s]: b,
                },
              } = r.value;
            return {
              "--n-bezier": u,
              "--n-text-color": b,
              "--n-font-weight-strong": c,
              "--n-font-famliy-mono": d,
              "--n-code-border-radius": p,
              "--n-code-text-color": h,
              "--n-code-color": f,
              "--n-code-border": v,
            };
          }),
          i = o
            ? wt(
                "text",
                B(() => `${e.type[0]}${e.depth || ""}`),
                n,
                e
              )
            : void 0;
        return {
          mergedClsPrefix: t,
          compitableTag: Cl(e, ["as", "tag"]),
          cssVars: o ? void 0 : n,
          themeClass: i == null ? void 0 : i.themeClass,
          onRender: i == null ? void 0 : i.onRender,
        };
      },
      render() {
        var e, t, o;
        const { mergedClsPrefix: r } = this;
        (e = this.onRender) === null || e === void 0 || e.call(this);
        const n = [
            `${r}-text`,
            this.themeClass,
            {
              [`${r}-text--code`]: this.code,
              [`${r}-text--delete`]: this.delete,
              [`${r}-text--strong`]: this.strong,
              [`${r}-text--italic`]: this.italic,
              [`${r}-text--underline`]: this.underline,
            },
          ],
          i =
            (o = (t = this.$slots).default) === null || o === void 0
              ? void 0
              : o.call(t);
        return this.code
          ? m(
              "code",
              { class: n, style: this.cssVars },
              this.delete ? m("del", null, i) : i
            )
          : this.delete
          ? m("del", { class: n, style: this.cssVars }, i)
          : m(
              this.compitableTag || "span",
              { class: n, style: this.cssVars },
              i
            );
      },
    }),
    P_ = () => ({}),
    T_ = { name: "Equation", common: ce, self: P_ },
    z_ = T_,
    I_ = {
      name: "dark",
      common: ce,
      Alert: s$,
      Anchor: v$,
      AutoComplete: E$,
      Avatar: Rh,
      AvatarGroup: H$,
      BackTop: L$,
      Badge: N$,
      Breadcrumb: U$,
      Button: Dt,
      ButtonGroup: gz,
      Calendar: iP,
      Card: Fh,
      Carousel: pP,
      Cascader: CP,
      Checkbox: fn,
      Code: Dh,
      Collapse: $P,
      CollapseTransition: zP,
      ColorPicker: sP,
      DataTable: ZP,
      DatePicker: wT,
      Descriptions: TT,
      Dialog: op,
      Divider: BT,
      Drawer: FT,
      Dropdown: Js,
      DynamicInput: WT,
      DynamicTags: YT,
      Element: ZT,
      Empty: Mr,
      Ellipsis: Uh,
      Equation: z_,
      Form: tz,
      GradientText: rz,
      Icon: rT,
      IconWrapper: lz,
      Image: UI,
      Input: Yt,
      InputNumber: bz,
      LegacyTransfer: a_,
      Layout: Cz,
      List: Pz,
      LoadingBar: zz,
      Log: _z,
      Menu: Az,
      Mention: kz,
      Message: pz,
      Modal: ET,
      Notification: dz,
      PageHeader: Dz,
      Pagination: jh,
      Popconfirm: jz,
      Popover: kr,
      Popselect: Lh,
      Progress: ap,
      Radio: Gh,
      Rate: Gz,
      Result: Zz,
      Row: KI,
      Scrollbar: Ft,
      Select: Nh,
      Skeleton: x_,
      Slider: eI,
      Space: np,
      Spin: rI,
      Statistic: lI,
      Steps: dI,
      Switch: hI,
      Table: mI,
      Tabs: yI,
      Tag: Ph,
      Thing: $I,
      TimePicker: tp,
      Timeline: zI,
      Tooltip: Il,
      Transfer: MI,
      Tree: sp,
      TreeSelect: OI,
      Typography: FI,
      Upload: WI,
      Watermark: jI,
    },
    __ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 192 512",
    },
    M_ = gt(
      "path",
      {
        d: "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z",
        fill: "currentColor",
      },
      null,
      -1
    ),
    k_ = [M_],
    E_ = ue({
      name: "CaretLeft",
      render: function (t, o) {
        return Ht(), ro("svg", __, k_);
      },
    }),
    R_ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 192 512",
    },
    O_ = gt(
      "path",
      {
        d: "M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z",
        fill: "currentColor",
      },
      null,
      -1
    ),
    B_ = [O_],
    A_ = ue({
      name: "CaretRight",
      render: function (t, o) {
        return Ht(), ro("svg", R_, B_);
      },
    }),
    H_ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 496 512",
    },
    F_ = gt(
      "path",
      {
        d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z",
        fill: "currentColor",
      },
      null,
      -1
    ),
    D_ = [F_],
    L_ = ue({
      name: "Github",
      render: function (t, o) {
        return Ht(), ro("svg", H_, D_);
      },
    }),
    W_ = ["src"],
    N_ = ue({
      __name: "MyHeader",
      props: { icon: null, homepage: null },
      setup(e) {
        const t = e;
        function o() {
          window.open("https://github.com/LibreService", "_blank");
        }
        function r() {
          window.open(t.homepage, "_blank");
        }
        return (n, i) => (
          Ht(),
          ro(
            Ye,
            null,
            [
              gt(
                "div",
                {
                  style: {
                    "padding-left": "24px",
                    display: "flex",
                    "align-items": "center",
                    cursor: "pointer",
                  },
                  onClick: o,
                },
                [
                  gt(
                    "img",
                    { src: e.icon, style: { width: "48px", height: "48px" } },
                    null,
                    8,
                    W_
                  ),
                  Te(
                    Ce(Wa),
                    { style: { "font-size": "18px", "margin-left": "12px" } },
                    { default: Ze(() => [kt(" LibreService ")]), _: 1 }
                  ),
                ]
              ),
              Te(
                Ce(Sr),
                {
                  size: 28,
                  style: { "padding-right": "16px", cursor: "pointer" },
                  onClick: r,
                },
                { default: Ze(() => [Te(Ce(L_))]), _: 1 }
              ),
            ],
            64
          )
        );
      },
    }),
    j_ = ue({
      __name: "MyLayout",
      setup(e) {
        return (t, o) => (
          Ht(),
          ro(
            Ye,
            null,
            [
              Te(
                Ce(t_),
                {
                  bordered: "",
                  style: {
                    height: "0px",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "space-between",
                  },
                },
                { default: Ze(() => [Pn(t.$slots, "header")]), _: 3 }
              ),
              Te(
                Ce(ZI),
                {
                  position: "absolute",
                  "native-scrollbar": !1,
                  style: { top: "16px" },
                  "content-style":
                    "height: 100%; display: flex; flex-direction: column",
                },
                {
                  default: Ze(() => [
                    Te(
                      Ce(JI),
                      { style: { flex: "1 0 auto" } },
                      { default: Ze(() => [Pn(t.$slots, "content")]), _: 3 }
                    ),
                    Te(
                      Ce(n_),
                      { style: { "flex-shrink": "0", "margin-top": "16px" } },
                      { default: Ze(() => [Pn(t.$slots, "footer")]), _: 3 }
                    ),
                  ]),
                  _: 3,
                }
              ),
            ],
            64
          )
        );
      },
    }),
    V_ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 16 16",
    },
    K_ = gt(
      "g",
      { fill: "none" },
      [
        gt("path", {
          d: "M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0-1A5 5 0 1 1 8 3a5 5 0 0 1 0 10z",
          fill: "currentColor",
        }),
      ],
      -1
    ),
    U_ = [K_],
    G_ = ue({
      name: "Circle16Regular",
      render: function (t, o) {
        return Ht(), ro("svg", V_, U_);
      },
    }),
    q_ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 20 20",
    },
    Y_ = gt(
      "g",
      { fill: "none" },
      [
        gt("path", {
          d: "M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8zM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4zM4 6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17h6.232A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6z",
          fill: "currentColor",
        }),
      ],
      -1
    ),
    X_ = [Y_],
    Z_ = ue({
      name: "Copy20Regular",
      render: function (t, o) {
        return Ht(), ro("svg", q_, X_);
      },
    }),
    J_ = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 20 20",
    },
    Q_ = gt(
      "g",
      { fill: "none" },
      [
        gt("path", {
          d: "M5.92 2.228a.5.5 0 0 0-.84.544L9.405 9.43L7.48 12.39a3 3 0 1 0 .779.636L10 10.348l1.74 2.68a3 3 0 1 0 .779-.636L5.92 2.227zM14 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4zM4 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm7.192-6.489l-.596-.918l3.485-5.365a.5.5 0 0 1 .838.544l-3.727 5.74z",
          fill: "currentColor",
        }),
      ],
      -1
    ),
    e5 = [Q_],
    t5 = ue({
      name: "Cut20Regular",
      render: function (t, o) {
        return Ht(), ro("svg", J_, e5);
      },
    }),
    o5 = {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 16 16",
    },
    r5 = gt(
      "g",
      { fill: "none" },
      [
        gt("path", {
          d: "M7.85 3.015a5 5 0 1 1-4.585 7.712c1.403-.38 3.316-1.302 4.16-3.551c.552-1.474.584-2.938.425-4.16zM13.456 8a6 6 0 0 0-6.21-5.996a.5.5 0 0 0-.475.592c.23 1.214.28 2.728-.283 4.228c-.8 2.134-2.802 2.84-4.077 3.071a.5.5 0 0 0-.361.71A6 6 0 0 0 13.456 8z",
          fill: "currentColor",
        }),
      ],
      -1
    ),
    n5 = [r5],
    i5 = ue({
      name: "WeatherMoon16Regular",
      render: function (t, o) {
        return Ht(), ro("svg", o5, n5);
      },
    });
  class mp extends Error {}
  class l5 extends mp {
    constructor(...t) {
      super(...t), (this.name = "RunningTaskSkippedError");
    }
  }
  class a5 extends mp {
    constructor(...t) {
      super(...t), (this.name = "PendingTaskSkippedError");
    }
  }
  class s5 {
    constructor(t) {
      Bl(this, "buffer");
      this.buffer = t;
    }
  }
  var Yr, Do, co, Qn, Xr, Bi, ei, Na, ti, ja, il, bp, oi, Va;
  class c5 {
    constructor(t) {
      io(this, Xr);
      io(this, ei);
      io(this, ti);
      io(this, il);
      io(this, oi);
      Bl(this, "worker");
      io(this, Yr, void 0);
      io(this, Do, []);
      io(this, co, null);
      io(this, Qn, {});
      Or(this, Yr, t),
        (this.worker = new Worker(t)),
        Zt(this, Xr, Bi).call(this);
    }
    register(t) {
      return (...o) =>
        new Promise((r, n) =>
          Zt(this, il, bp).call(this, {
            name: t,
            args: o,
            transferableIndices: [],
            resolve: r,
            reject: n,
          })
        );
    }
    skip() {
      return Zt(this, oi, Va).call(this)
        ? ((this.worker = new Worker(Lt(this, Yr))),
          Zt(this, Xr, Bi).call(this),
          Zt(this, ti, ja).call(this),
          !0)
        : !1;
    }
    skipAll() {
      if (!Zt(this, oi, Va).call(this)) return !1;
      for (const { reject: t } of Lt(this, Do))
        t(new a5("Pending task skipped."));
      return (
        Or(this, Do, []),
        (this.worker = new Worker(Lt(this, Yr))),
        Zt(this, Xr, Bi).call(this),
        !0
      );
    }
    control(t, o) {
      Lt(this, Qn)[t] = o;
    }
  }
  (Yr = new WeakMap()),
    (Do = new WeakMap()),
    (co = new WeakMap()),
    (Qn = new WeakMap()),
    (Xr = new WeakSet()),
    (Bi = function () {
      this.worker.onmessage = (t) => {
        const { type: o } = t.data;
        if (o === "control") {
          const { name: r, args: n } = t.data,
            i = Lt(this, Qn)[r];
          i ? i(...n) : console.warn(`No handler for command ${r}`);
        } else {
          const {
            args: r,
            transferableIndices: n,
            resolve: i,
            reject: l,
          } = Lt(this, co);
          if (
            (Or(this, co, null), Zt(this, ti, ja).call(this), o === "success")
          ) {
            const { result: a, transferables: s } = t.data;
            s.forEach((c, d) => {
              r[n[d]].buffer = c;
            }),
              i(a);
          } else {
            const { name: a, message: s } = t.data.error,
              c = new Error(s);
            (c.name = a), l(c);
          }
        }
      };
    }),
    (ei = new WeakSet()),
    (Na = function (t) {
      const { name: o, args: r, transferableIndices: n } = t,
        i = [],
        l = r.map((a, s) =>
          a && a.constructor === s5
            ? (n.push(s), i.push(a.buffer), a.buffer)
            : a
        );
      Or(this, co, t),
        this.worker.postMessage(
          { name: o, args: l, transferableIndices: n },
          i
        );
    }),
    (ti = new WeakSet()),
    (ja = function () {
      if (Lt(this, Do).length) {
        const t = Lt(this, Do).shift();
        Zt(this, ei, Na).call(this, t);
      }
    }),
    (il = new WeakSet()),
    (bp = function (t) {
      Lt(this, co) ? Lt(this, Do).push(t) : Zt(this, ei, Na).call(this, t);
    }),
    (oi = new WeakSet()),
    (Va = function () {
      if (!Lt(this, co)) return !1;
      this.worker.terminate();
      const { reject: t } = Lt(this, co);
      return t(new l5("Running task skipped.")), Or(this, co, null), !0;
    });
  const ac = new c5("/ShanRenMaLTS/dist/worker.js"),
    d5 = ac.register("setIME"),
    Jn = ac.register("setOption"),
    u5 = ac.register("process"),
    Jd = "simplification",
    qr = N(!1),
    Ai = N(!1),
    Hi = N(!1);
  function xp() {
    (qr.value = !qr.value), Jn("ascii_mode", qr.value);
  }
  async function Qd(e, t, o) {
    for (const r of e) r !== t && (await Jn(r, !1));
    return Jn(t, o);
  }
  function f5() {
    (Ai.value = !Ai.value), Jn("full_shape", Ai.value);
  }
  function h5() {
    (Hi.value = !Hi.value), Jn("ascii_punct", Hi.value);
  }
  const p5 = Fb(),
    eu = B(() => p5.value === "xs");
  function Cr(e) {
    return document.querySelector(e);
  }
  const tu = [
      {
        id: "ShanRenMaLTS",
        name: "山人码LTS 45万词库 N+N",
        target: "ShanRenMaLTS",
        license: "GPL-3.0-only",
        variants: [
          { id: "simplification", name: "简" },
          { id: "noop", name: "繁" },
        ],
      },
    ],
    v5 = ue({
      __name: "MyMenu",
      props: { textareaSelector: null },
      setup(e) {
        const t = e,
          o = N(tu[0].id),
          r = {},
          n = {},
          i = [];
        for (const f of tu)
          if (
            (i.push({ label: f.name, value: f.id }),
            (n[f.id] = N(0)),
            f.variants
              ? f.variants.length
                ? (r[f.id] = f.variants.map((v) => ({ ...v, value: !0 })))
                : (r[f.id] = [{ id: "", name: "", value: !0 }])
              : (r[f.id] = [
                  { id: Jd, name: "简", value: !0 },
                  { id: Jd, name: "繁", value: !1 },
                ]),
            f.family)
          )
            for (const { id: v, name: b } of f.family)
              i.push({ label: b, value: v }), (n[v] = N(0)), (r[v] = r[f.id]);
        const l = B(() => r[o.value]),
          a = B({
            get() {
              return n[o.value].value;
            },
            set(f) {
              n[o.value].value = f;
            },
          }),
          s = B(() => l.value[a.value].name),
          c = B(() => l.value.length === 1),
          d = N(!1);
        async function u(f) {
          p(), (d.value = !0);
          try {
            await d5(f), (o.value = f);
            const v = l.value[a.value];
            await Qd(
              l.value.map((b) => b.id),
              v.id,
              v.value
            );
          } catch (v) {
            console.error(v);
          }
          d.value = !1;
        }
        function h() {
          a.value = (a.value + 1) % l.value.length;
          const f = l.value[a.value];
          Qd(
            l.value.map((v) => v.id),
            f.id,
            f.value
          );
        }
        function p() {
          Cr(t.textareaSelector).focus();
        }
        return (f, v) => (
          Ht(),
          gs(Ce(ip), null, {
            default: Ze(() => [
              Te(
                Ce(AP),
                {
                  style: { width: "240px" },
                  value: o.value,
                  options: i,
                  loading: d.value,
                  "onUpdate:value": u,
                },
                null,
                8,
                ["value", "loading"]
              ),
              Te(
                Ce(Hh),
                { class: "square-group", onClick: p },
                {
                  default: Ze(() => [
                    Te(
                      Ce(Wo),
                      { secondary: "", onClick: Ce(xp) },
                      {
                        default: Ze(() => [kt(Lr(Ce(qr) ? "En" : "中"), 1)]),
                        _: 1,
                      },
                      8,
                      ["onClick"]
                    ),
                    Te(
                      Ce(Wo),
                      { secondary: "", disabled: Ce(qr) || Ce(c), onClick: h },
                      { default: Ze(() => [kt(Lr(Ce(s)), 1)]), _: 1 },
                      8,
                      ["disabled"]
                    ),
                    Te(
                      Ce(Wo),
                      { secondary: "", onClick: Ce(f5) },
                      {
                        icon: Ze(() => [
                          Te(
                            Ce(Sr),
                            { component: Ce(Ai) ? Ce(G_) : Ce(i5) },
                            null,
                            8,
                            ["component"]
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["onClick"]
                    ),
                    Te(
                      Ce(Wo),
                      { secondary: "", disabled: Ce(qr), onClick: Ce(h5) },
                      {
                        default: Ze(() => [kt(Lr(Ce(Hi) ? "." : "。"), 1)]),
                        _: 1,
                      },
                      8,
                      ["disabled", "onClick"]
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          })
        );
      },
    });
  var Ka = {},
    g5 = {
      get exports() {
        return Ka;
      },
      set exports(e) {
        Ka = e;
      },
    };
  (function (e) {
    (function () {
      var t = [
          "direction",
          "boxSizing",
          "width",
          "height",
          "overflowX",
          "overflowY",
          "borderTopWidth",
          "borderRightWidth",
          "borderBottomWidth",
          "borderLeftWidth",
          "borderStyle",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "fontStyle",
          "fontVariant",
          "fontWeight",
          "fontStretch",
          "fontSize",
          "fontSizeAdjust",
          "lineHeight",
          "fontFamily",
          "textAlign",
          "textTransform",
          "textIndent",
          "textDecoration",
          "letterSpacing",
          "wordSpacing",
          "tabSize",
          "MozTabSize",
        ],
        o = typeof window < "u",
        r = o && window.mozInnerScreenX != null;
      function n(i, l, a) {
        if (!o)
          throw new Error(
            "textarea-caret-position#getCaretCoordinates should only be called in a browser"
          );
        var s = (a && a.debug) || !1;
        if (s) {
          var c = document.querySelector(
            "#input-textarea-caret-position-mirror-div"
          );
          c && c.parentNode.removeChild(c);
        }
        var d = document.createElement("div");
        (d.id = "input-textarea-caret-position-mirror-div"),
          document.body.appendChild(d);
        var u = d.style,
          h = window.getComputedStyle
            ? window.getComputedStyle(i)
            : i.currentStyle,
          p = i.nodeName === "INPUT";
        (u.whiteSpace = "pre-wrap"),
          p || (u.wordWrap = "break-word"),
          (u.position = "absolute"),
          s || (u.visibility = "hidden"),
          t.forEach(function (b) {
            p && b === "lineHeight" ? (u.lineHeight = h.height) : (u[b] = h[b]);
          }),
          r
            ? i.scrollHeight > parseInt(h.height) && (u.overflowY = "scroll")
            : (u.overflow = "hidden"),
          (d.textContent = i.value.substring(0, l)),
          p && (d.textContent = d.textContent.replace(/\s/g, " "));
        var f = document.createElement("span");
        (f.textContent = i.value.substring(l) || "."), d.appendChild(f);
        var v = {
          top: f.offsetTop + parseInt(h.borderTopWidth),
          left: f.offsetLeft + parseInt(h.borderLeftWidth),
          height: parseInt(h.lineHeight),
        };
        return (
          s ? (f.style.backgroundColor = "#aaa") : document.body.removeChild(d),
          v
        );
      }
      e.exports = n;
    })();
  })(g5);
  const m5 = Ka,
    b5 = gt("br", null, null, -1),
    x5 = gt("br", null, null, -1),
    C5 = ue({
      __name: "MyPanel",
      props: {
        textareaSelector: null,
        text: null,
        updateText: { type: Function },
      },
      setup(e) {
        const t = e,
          { textareaSelector: o, updateText: r } = t,
          n = ke(t, "text"),
          i = N(0),
          l = N(0),
          a = N(!1),
          s = N(!1),
          c = N(0),
          d = N(0),
          u = N(""),
          h = N(""),
          p = N(""),
          f = N([]),
          v = N("1"),
          b = N(!0),
          g = N(!1),
          T = N(!1),
          O = N(!1),
          P = N(!1),
          R = ["Control", "Alt", "Meta"],
          V = {
            Escape: "Escape",
            Backspace: "BackSpace",
            Delete: "Delete",
            Enter: "Return",
            Home: "Home",
            End: "End",
            PageUp: "Page_Up",
            PageDown: "Page_Down",
            ArrowUp: "Up",
            ArrowRight: "Right",
            ArrowDown: "Down",
            ArrowLeft: "Left",
          },
          x = { " ": "space", ",": "comma", ".": "period" };
        function S(ae) {
          return /^[a-z0-9!"#$%&'()*+,./:;<=>?@[\] ^_`{|}~\\-]$/i.test(ae);
        }
        function M(ae) {
          const he = Cr(o),
            { selectionStart: We, selectionEnd: He } = he;
          r(n.value.slice(0, We) + ae + n.value.slice(He)),
            $o(() => {
              he.selectionEnd = We + ae.length;
            });
        }
        async function C(ae) {
          const he = JSON.parse(await u5(ae));
          he.state === 0
            ? ((T.value = !1), (O.value = !1), (s.value = !1), M(he.committed))
            : he.state === 1
            ? ((u.value = he.head),
              (h.value = he.body),
              (p.value = he.tail),
              (v.value = (he.highlighted + 1).toString()),
              (f.value = he.candidates.map((We, He) => ({
                label: `${He + 1} ${We}`,
                key: (He + 1).toString(),
              }))),
              (b.value = he.page === 0),
              (g.value = he.isLastPage),
              (O.value = !0),
              he.committed && M(he.committed))
            : ((T.value = !1), (O.value = !1), S(ae) && M(ae)),
            Cr(o).focus();
        }
        function _(ae) {
          const { key: he } = ae;
          if (he === "Shift") {
            P.value = !0;
            return;
          }
          P.value = !1;
          const We = S(he),
            He = Cr(o);
          if (!T.value && (document.activeElement !== He || !We)) return;
          for (const ge of R) if (ae.getModifierState(ge) && We) return;
          const ze = ae.getModifierState("Control"),
            $e = ae.getModifierState("Shift");
          let Ve;
          if (We) Ve = he;
          else if ($e && he === "Delete") Ve = "{Shift+Delete}";
          else if (ze && $e && he === "Enter") Ve = "{Control+Shift+Return}";
          else if ((ze || $e) && he === "Enter") Ve = "{Shift+Return}";
          else
            for (const [ge, Ue] of Object.entries(V))
              he === ge && (Ve = `{${Ue}}`);
          if (Ve !== void 0) {
            if (!s.value) {
              const ge = He.getBoundingClientRect(),
                Ue = m5(He, He.selectionStart);
              (c.value = ge.x + Ue.left),
                (d.value = eu.value
                  ? 8
                  : ge.y + Ue.top + Ue.height - He.scrollTop);
            }
            (T.value = !0), ae.preventDefault(), C(Ve);
          }
        }
        function y(ae) {
          const { key: he } = ae;
          he === "Shift" && P.value && xp(),
            (P.value = !1),
            S(he) && C(`{Release+${x[he] || he}}`);
        }
        function K(ae) {
          C(ae);
        }
        function H(ae) {
          return ae.touches.length === 1 ? ae.touches[0] : void 0;
        }
        function q(ae, he) {
          (i.value = ae), (l.value = he);
          const We = document.querySelector(".n-popover");
          (c.value = We.getBoundingClientRect().left), (a.value = !0);
        }
        function k(ae) {
          q(ae.clientX, ae.clientY);
        }
        function F(ae) {
          const he = H(ae);
          he && q(he.clientX, he.clientY);
        }
        function Q(ae, he) {
          a.value &&
            ((s.value = !0),
            (c.value += ae - i.value),
            (d.value += he - l.value),
            (i.value = ae),
            (l.value = he));
        }
        function W(ae) {
          Q(ae.clientX, ae.clientY);
        }
        function ee(ae) {
          const he = H(ae);
          he && Q(he.clientX, he.clientY);
        }
        function ve() {
          a.value = !1;
        }
        return (
          _t(() => {
            document.addEventListener("keydown", _),
              document.addEventListener("keyup", y),
              document.addEventListener("mousemove", W),
              document.addEventListener("touchmove", ee),
              document.addEventListener("mouseup", ve),
              document.addEventListener("touchend", ve);
          }),
          fs(() => {
            document.removeEventListener("keydown", _),
              document.removeEventListener("keyup", y),
              document.removeEventListener("mousemove", W),
              document.removeEventListener("touchmove", ee),
              document.removeEventListener("mouseup", ve),
              document.removeEventListener("touchend", ve);
          }),
          (ae, he) => (
            Ht(),
            gs(
              Ce(zl),
              {
                show: O.value,
                "show-arrow": !1,
                x: c.value,
                y: d.value,
                flip: !a.value,
                placement: "bottom-start",
                trigger: "manual",
                style: { cursor: "move" },
                onMousedown: k,
                onTouchstart: F,
              },
              {
                default: Ze(() => [
                  Te(
                    Ce(Wa),
                    { type: "success" },
                    { default: Ze(() => [kt(Lr(u.value), 1)]), _: 1 }
                  ),
                  kt("  "),
                  Te(
                    Ce(Wa),
                    { type: "info" },
                    { default: Ze(() => [kt(Lr(h.value), 1)]), _: 1 }
                  ),
                  kt("  " + Lr(p.value) + " ", 1),
                  b5,
                  ln(
                    Te(
                      Ce(b_),
                      {
                        options: f.value,
                        mode: Ce(eu) ? "vertical" : "horizontal",
                        value: v.value,
                        "onUpdate:value": K,
                      },
                      null,
                      8,
                      ["options", "mode", "value"]
                    ),
                    [[bs, f.value.length]]
                  ),
                  x5,
                  Te(
                    Ce(Wo),
                    { text: "", disabled: b.value },
                    {
                      default: Ze(() => [
                        Te(
                          Ce(Sr),
                          {
                            component: Ce(E_),
                            onClick: he[0] || (he[0] = (We) => C("-")),
                          },
                          null,
                          8,
                          ["component"]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                  Te(
                    Ce(Wo),
                    { text: "", disabled: g.value },
                    {
                      default: Ze(() => [
                        Te(
                          Ce(Sr),
                          {
                            component: Ce(A_),
                            onClick: he[1] || (he[1] = (We) => C("=")),
                          },
                          null,
                          8,
                          ["component"]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["disabled"]
                  ),
                ]),
                _: 1,
              },
              8,
              ["show", "x", "y", "flip"]
            )
          )
        );
      },
    }),
    y5 = ue({
      __name: "MainView",
      setup(e) {
        const t = "#container textarea";
        let o = 0,
          r = 0;
        const n = N("");
        function i(d) {
          n.value = d;
        }
        function l() {
          const d = Cr(t);
          (o = d.selectionStart), (r = d.selectionEnd);
        }
        function a() {
          const d = Cr(t);
          (d.selectionStart = o), (d.selectionEnd = r);
        }
        function s() {
          return Cr(t).focus(), navigator.clipboard.writeText(n.value);
        }
        async function c() {
          await s(), (n.value = "");
        }
        return (d, u) => (
          Ht(),
          ro(
            Ye,
            null,
            [
              Te(
                Ce(ip),
                { vertical: "", class: "my-column" },
                {
                  default: Ze(() => [
                    Te(v5, { "textarea-selector": t }),
                    Te(
                      Ce(_$),
                      {
                        id: "container",
                        value: n.value,
                        "onUpdate:value": u[0] || (u[0] = (h) => (n.value = h)),
                        type: "textarea",
                        rows: 15,
                        clearable: "",
                        onBlur: l,
                        onFocus: a,
                      },
                      null,
                      8,
                      ["value"]
                    ),
                    Te(
                      Ce(Hh),
                      { class: "square-group" },
                      {
                        default: Ze(() => [
                          Te(
                            Ce(Wo),
                            {
                              secondary: "",
                              style: { "font-size": "24px" },
                              onClick: c,
                            },
                            {
                              default: Ze(() => [
                                Te(Ce(Sr), { component: Ce(t5) }, null, 8, [
                                  "component",
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                          Te(
                            Ce(Wo),
                            {
                              secondary: "",
                              style: { "font-size": "24px" },
                              onClick: s,
                            },
                            {
                              default: Ze(() => [
                                Te(Ce(Sr), { component: Ce(Z_) }, null, 8, [
                                  "component",
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
              Te(
                C5,
                { "textarea-selector": t, text: n.value, "update-text": i },
                null,
                8,
                ["text"]
              ),
            ],
            64
          )
        );
      },
    }),
    w5 = "modulepreload",
    S5 = function (e) {
      return "/ShanRenMaLTS/dist/" + e;
    },
    ou = {},
    $5 = function (t, o, r) {
      if (!o || o.length === 0) return t();
      const n = document.getElementsByTagName("link");
      return Promise.all(
        o.map((i) => {
          if (((i = S5(i)), i in ou)) return;
          ou[i] = !0;
          const l = i.endsWith(".css"),
            a = l ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let d = n.length - 1; d >= 0; d--) {
              const u = n[d];
              if (u.href === i && (!l || u.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${i}"]${a}`)) return;
          const c = document.createElement("link");
          if (
            ((c.rel = l ? "stylesheet" : w5),
            l || ((c.as = "script"), (c.crossOrigin = "")),
            (c.href = i),
            document.head.appendChild(c),
            l)
          )
            return new Promise((d, u) => {
              c.addEventListener("load", d),
                c.addEventListener("error", () =>
                  u(new Error(`Unable to preload CSS for ${i}`))
                );
            });
        })
      ).then(() => t());
    };
  function P5(e = {}) {
    const {
      immediate: t = !1,
      onNeedRefresh: o,
      onOfflineReady: r,
      onRegistered: n,
      onRegisteredSW: i,
      onRegisterError: l,
    } = e;
    let a, s;
    const c = async (u = !0) => {
      await s;
    };
    async function d() {
      if ("serviceWorker" in navigator) {
        const { Workbox: u } = await $5(
          () =>
            import("/ShanRenMaLTS/dist/assets/workbox-window.prod.es5-295a6886.js"),
          []
        );
        (a = new u("/ShanRenMaLTS/dist/sw.js", {
          scope: "/ShanRenMaLTS/dist/",
          type: "classic",
        })),
          a.addEventListener("activated", (h) => {
            (h.isUpdate || h.isExternal) && window.location.reload();
          }),
          a.addEventListener("installed", (h) => {
            h.isUpdate || r == null || r();
          }),
          a
            .register({ immediate: t })
            .then((h) => {
              i ? i("/ShanRenMaLTS/dist/sw.js", h) : n == null || n(h);
            })
            .catch((h) => {
              l == null || l(h);
            });
      }
    }
    return (s = d()), c;
  }
  function T5(e = {}) {
    const {
        immediate: t = !0,
        onNeedRefresh: o,
        onOfflineReady: r,
        onRegistered: n,
        onRegisteredSW: i,
        onRegisterError: l,
      } = e,
      a = N(!1),
      s = N(!1);
    return {
      updateServiceWorker: P5({
        immediate: t,
        onNeedRefresh() {
          (a.value = !0), o == null || o();
        },
        onOfflineReady() {
          (s.value = !0), r == null || r();
        },
        onRegistered: n,
        onRegisteredSW: i,
        onRegisterError: l,
      }),
      offlineReady: s,
      needRefresh: a,
    };
  }
  const z5 = ue({
      __name: "MyPwa",
      setup(e) {
        return T5({ immediate: !0 }), () => {};
      },
    }),
    I5 = "https://github.com/LibreService/my_rime",
    _5 = {
      style: {
        cursor: "pointer",
        "text-align": "center",
        "margin-top": "16px",
      },
    },
    M5 = ue({
      __name: "App",
      setup(e) {
        const t = Rb();
        return (o, r) => (
          Ht(),
          ro(
            Ye,
            null,
            [
              Te(z5),
              Te(
                Ce(_P),
                { theme: Ce(t) === "dark" ? Ce(I_) : null },
                {
                  default: Ze(() => [Te(Ce(j_), null, {
					 content: Ze(() => [
                        Te(y5),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
                8,
                ["theme"]
              ),
            ],
            64
          )
        );
      },
    });
  km(M5).mount("#app");
});
export default k5();
