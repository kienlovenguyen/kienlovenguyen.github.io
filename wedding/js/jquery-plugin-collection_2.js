/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
      , E = C.document
      , r = Object.getPrototypeOf
      , s = t.slice
      , g = t.concat
      , u = t.push
      , i = t.indexOf
      , n = {}
      , o = n.toString
      , v = n.hasOwnProperty
      , a = v.toString
      , l = a.call(Object)
      , y = {}
      , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , x = function(e) {
        return null != e && e === e.window
    }
      , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
        t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
          , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || m(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    r = e[t],
                    "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                    o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                    i = !1,
                    a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t) {
            b(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r]))
                        break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
            0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
            t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
            e = e || C,
            E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                            n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                    f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                        o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                        f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                        n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
            e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
              , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                le(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--)
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
        i = se.isXML = function(e) {
            var t = e.namespaceURI
              , n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || n && n.nodeName || "HTML")
        }
        ,
        T = se.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
            E = !i(C),
            m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
            d.attributes = ce(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            d.getElementsByClassName = K.test(C.getElementsByClassName),
            d.getById = ce(function(e) {
                return a.appendChild(e).id = k,
                !C.getElementsByName || !C.getElementsByName(k).length
            }),
            d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ,
            b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        i = t.getElementsByName(e),
                        r = 0;
                        while (o = i[r++])
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            s = [],
            v = [],
            (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                e.querySelectorAll(":checked").length || v.push(":checked"),
                e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
            }),
            ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                a.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"),
                c.call(e, "[s!='']:x"),
                s.push("!=", $)
            }),
            v = v.length && new RegExp(v.join("|")),
            s = s.length && new RegExp(s.join("|")),
            t = K.test(a.compareDocumentPosition),
            y = t || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            D = t ? function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return l = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o)
                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o)
                    return pe(e, t);
                n = e;
                while (n = n.parentNode)
                    a.unshift(n);
                n = t;
                while (n = n.parentNode)
                    s.unshift(n);
                while (a[r] === s[r])
                    r++;
                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }
            ),
            C
        }
        ,
        se.matches = function(e, t) {
            return se(e, null, null, t)
        }
        ,
        se.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e),
            d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    A(t, !0)
                }
            return 0 < se(t, C, null, [e]).length
        }
        ,
        se.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e),
            y(e, t)
        }
        ,
        se.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()]
              , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        se.escape = function(e) {
            return (e + "").replace(re, ie)
        }
        ,
        se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates,
            u = !d.sortStable && e.slice(0),
            e.sort(D),
            l) {
                while (t = e[i++])
                    t === e[i] && (r = n.push(i));
                while (r--)
                    e.splice(n[r], 1)
            }
            return u = null,
            e
        }
        ,
        o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                while (t = e[r++])
                    n += o(t);
            return n
        }
        ,
        (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = se.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "",
                        "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3)
                      , m = "last" !== h.slice(-4)
                      , x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l])
                                        if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                            return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild],
                            m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if (1 === a.nodeType && ++d && a === e) {
                                        i[h] = [S, s, d];
                                        break
                                    }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                            !1 === d)
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                    if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                    a === e))
                                        break;
                            return (d -= v) === g || d % g == 0 && 0 <= d / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                    b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--)
                            e[n = P(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return a(e, 0, t)
                    }
                    ) : a
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = []
                      , i = []
                      , s = f(e.replace(B, "$1"));
                    return s[k] ? le(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--)
                            (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        s(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length
                    }
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n),
                    n = n.replace(te, ne).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !b.pseudos.empty(e)
                },
                header: function(e) {
                    return J.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ve(function() {
                    return [0]
                }),
                last: ve(function(e, t) {
                    return [t - 1]
                }),
                eq: ve(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
              , l = e.next
              , c = l || u
              , f = t && "parentNode" === c
              , p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n))
                            return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === S && r[1] === p)
                                    return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
            le(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                    for (var r = 0, i = t.length; r < i; r++)
                        se(e, t[r], n);
                    return n
                }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r),
                v) {
                    i = Te(p, u),
                    v(i, [], n, r),
                    o = i.length;
                    while (o--)
                        (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [],
                            o = p.length;
                            while (o--)
                                (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)
                            (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else
                    p = Te(p === t ? p.splice(l, p.length) : p),
                    y ? y(null, t, p, r) : H.apply(t, p)
            })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
        b.setFilters = new me,
        h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l)
                return t ? 0 : l.slice(0);
            a = e,
            s = [],
            u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                s.push(i = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(B, " ")
                }),
                a = a.slice(n.length)),
                b.filter)
                    !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }
        ,
        f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
            if (!a) {
                t || (t = h(e)),
                n = t.length;
                while (n--)
                    (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o,
                m = 0 < (y = i).length,
                x = 0 < v.length,
                r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0,
                            t || o.ownerDocument === C || (T(o),
                            n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--,
                        e && c.push(o))
                    }
                    if (u += l,
                    m && l !== u) {
                        a = 0;
                        while (s = y[a++])
                            s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--)
                                    c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f),
                        i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h,
                    w = p),
                    c
                }
                ,
                m ? le(r) : r))).selector = e
            }
            return a
        }
        ,
        g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i],
                    b.relative[s = a.type])
                        break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && xe(o)))
                            return H.apply(n, r),
                            n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
            n
        }
        ,
        d.sortStable = k.split("").sort(D).join("") === k,
        d.detectDuplicates = !!l,
        T(),
        d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        se
    }(C);
    k.find = h,
    k.expr = h.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.uniqueSort = k.unique = h.uniqueSort,
    k.text = h.getText,
    k.isXMLDoc = h.isXML,
    k.contains = h.contains,
    k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
          , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || q,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t,
                k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                D.test(r[1]) && k.isPlainObject(t))
                    for (r in t)
                        m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }
    ).prototype = k.fn,
    q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
      , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return P(e, "nextSibling")
        },
        prev: function(e) {
            return P(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
            k.merge([], e.childNodes))
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (O[r] || k.uniqueSort(n),
            H.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        k.each(e.match(R) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
            o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                    t = !1)
            }
            r.memory || (t = !1),
            i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                u.push(t)),
                function n(e) {
                    k.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments),
                t && !i && c()),
                this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return a = u = [],
                s = t = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                i || c()),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
    ,
    k.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , a = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                "catch": function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                    r = [e]),
                                    (s || o.resolveWith)(n, r))
                                }
                            }
                              , t = s ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                    u <= i + 1 && (a !== I && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                            C.setTimeout(t))
                        }
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                        o[1][3].add(l(0, e, m(t) ? t : M)),
                        o[2][3].add(l(0, e, m(n) ? n : I))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a
                }
            }
              , s = {};
            return k.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                a[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[t[0] + "With"] = n.fireWith
            }),
            a.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(e) {
            var n = arguments.length
              , t = n
              , r = Array(t)
              , i = s.call(arguments)
              , o = k.Deferred()
              , a = function(t) {
                return function(e) {
                    r[t] = this,
                    i[t] = 1 < arguments.length ? s.call(arguments) : e,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
            "pending" === o.state() || m(i[t] && i[t].then)))
                return o.then();
            while (t--)
                W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    k.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
        C.removeEventListener("load", B),
        k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }),
    k.ready.then = F.then,
    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
    C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
            n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(k(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
      , z = /^-ms-/
      , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
    Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[V(t)] = n;
            else
                for (r in t)
                    i[V(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                    while (n--)
                        delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var Q = new Y
      , J = new Y
      , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
    k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o),
                1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--)
                        a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                        ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                J.set(this, n)
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e)
                    return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() {
                    J.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                J.remove(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Q.get(e, t),
                n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                k.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Q.get(e, n) || Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    Q.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx";
            while (a--)
                (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
      , re = ["Top", "Right", "Bottom", "Left"]
      , ie = E.documentElement
      , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
      , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
        return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
    }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
      , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur()
        }
        : function() {
            return k.css(e, t, "")
        }
        , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
            l = l || c[3],
            c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                c /= o;
            c *= 2,
            k.style(e, t, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
            t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
            l[c] || (r.style.display = "")),
            "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
            a = (i = r).ownerDocument,
            s = i.nodeName,
            (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
            u = k.css(o, "display"),
            o.parentNode.removeChild(o),
            "none" === u && (u = "block"),
            ce[s] = u)))) : "none" !== n && (l[c] = "none",
            Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
      , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , he = /^$|^module$|\/(?:java|ecma)script/i
      , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
    ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                    s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                    u = ge[s] || ge._default,
                    a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                    c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
        d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
            a = ve(f.appendChild(o), "script"),
            l && ye(a),
            n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
    (xe = E.createElement("input")).setAttribute("type", "radio"),
    xe.setAttribute("checked", "checked"),
    xe.setAttribute("name", "t"),
    me.appendChild(xe),
    y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
    me.innerHTML = "<textarea>x</textarea>",
    y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
        (i = function(e) {
            return k().off(e),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = k.guid++)),
        e.each(function() {
            k.event.add(this, t, i, r, n)
        })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
        k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments),
                    Q.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n.value
                } else
                    r.length && (Q.set(this, i, {
                        value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = k.event.special[d] || {},
                    c = k.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && k.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        f = k.event.special[d] || {},
                        p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
            t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                    n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                        s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                        s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                        a = {},
                        n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
            s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                    !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                    !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    k.Event = function(e, t) {
        if (!(this instanceof k.Event))
            return new k.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[k.expando] = !0
    }
    ,
    k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp),
    k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        k.event.special[e] = {
            setup: function() {
                return De(this, e, Ne),
                !1
            },
            trigger: function() {
                return De(this, e),
                !0
            },
            delegateType: t
        }
    }),
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, r) {
            return Ae(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ae(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = Se),
            this.each(function() {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , qe = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
            a = Q.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
            u = k.extend({}, s),
            J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                k.map(a, Re),
                c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                r = 0,
                i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                    u = a[r],
                    void 0,
                    "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                    a = a || ve(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
    k.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Ie(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Ie(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (k.cleanData(ve(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                k(r[o])[a](t),
                u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
      , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
        t.getComputedStyle(e)
    }
      , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                a = 12 === t(e.marginLeft),
                u.style.right = "60%",
                o = 36 === t(e.right),
                r = 36 === t(e.width),
                u.style.position = "absolute",
                i = 12 === t(u.offsetWidth / 3),
                ie.removeChild(s),
                u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        y.clearCloneStyle = "content-box" === u.style.backgroundClip,
        k.extend(y, {
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelBoxStyles: function() {
                return e(),
                o
            },
            pixelPosition: function() {
                return e(),
                n
            },
            reliableMarginLeft: function() {
                return e(),
                a
            },
            scrollboxSize: function() {
                return e(),
                i
            }
        }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
      , Xe = E.createElement("div").style
      , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
              , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
      , Qe = /^--/
      , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
          , s = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
            r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
            "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
        u
    }
    function tt(e, t, n) {
        var r = Fe(e)
          , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
          , o = i
          , a = _e(e, t, r)
          , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) {
                if (t)
                    return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                        return tt(e, u, n)
                    })
            },
            set: function(e, t, n) {
                var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                t = k.css(e, u)),
                Ze(0, t, s)
            }
        }
    }),
    k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (k.cssHooks[i + o].set = Ze)
    }),
    k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((k.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || k.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : nt.propHooks._default.set(this),
            this
        }
    }).init.prototype = nt.prototype,
    (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    k.fx = nt.prototype.init,
    k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
        k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
        rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
            n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
            s.resolveWith(o, [l]),
            !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                o = e[n],
                Array.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                    delete e[r],
                    o)
                        n in e || (e[n] = o[n],
                        t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
            e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                dt.tweeners[n] = dt.tweeners[n] || [],
                dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
            s = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || s()
            }
            ),
            a.unqueued++,
            p.always(function() {
                p.always(function() {
                    a.unqueued--,
                    k.queue(e, "fx").length || a.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                st.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                l = e.style.display || l,
                c = k.css(e, "display"),
                fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                l = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                p.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                u = !1,
                d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                    p.done(function() {
                        for (r in g || fe([e]),
                        Q.remove(e, "fxshow"),
                        d)
                            k.style(e, r, d[r])
                    })),
                    u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                    u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            m(r.old) && r.old.call(this),
            r.queue && k.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t)
              , o = k.speed(e, n, r)
              , a = function() {
                var e = dt(this, k.extend({}, t), o);
                (i || Q.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            };
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = k.timers
                  , r = Q.get(this);
                if (t)
                    r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"),
            this.each(function() {
                var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (rt = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(),
        rt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        k.fx.start()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        it || (it = !0,
        lt())
    }
    ,
    k.fx.stop = function() {
        it = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    ot = E.createElement("input"),
    at = E.createElement("select").appendChild(E.createElement("option")),
    ot.type = "checkbox",
    y.checkOn = "" !== ot.value,
    y.optSelected = at.selected,
    (ot = E.createElement("input")).value = "t",
    ot.type = "radio",
    y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++])
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = gt[o],
            gt[o] = r,
            r = null != a(e, t, n) ? o : null,
            gt[o] = i),
            r
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i
      , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
    k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                i = k.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, xt(this)))
                });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, xt(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n),
                    r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " "))
                                r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i
              , a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, xt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0,
                    n = k(this),
                    r = bt(i);
                    while (e = r[t++])
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else
                    void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                    return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            a)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--)
                        ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < k.inArray(k(e).val(), t)
            }
        },
        y.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
      , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
            h.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                    Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                    e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                k.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
    k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return k.event.trigger(e, t, n, !0)
        }
    }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                Q.remove(e, r))
            }
        }
    });
    var Et = C.location
      , kt = Date.now()
      , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt = /\[\]$/
      , At = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(At, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(At, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g
      , Ht = /#.*$/
      , Ot = /([?&])_=[^&]*/
      , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Rt = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , It = {}
      , Wt = {}
      , $t = "*/".concat("*")
      , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
          , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                l(n),
                !1)
            }),
            r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
        e
    }
    Ft.href = Et.href,
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Et.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": $t,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = Pt.exec(p))
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return h ? p : null
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    a[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (h)
                            T.always(e[T.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t),
                    l(0, t),
                    this
                }
            };
            if (x.promise(T),
            v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
            v.type = t.method || t.type || v.method || v.type,
            v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url,
                    r.href = r.href,
                    v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
            _t(It, v, t, T),
            h)
                return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            v.type = v.type.toUpperCase(),
            v.hasContent = !Rt.test(v.type),
            f = v.url.replace(Ht, ""),
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
            v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
            delete v.data),
            !1 === v.cache && (f = f.replace(Ot, "$1"),
            o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
            v.url = f + o),
            v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
            (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
            v.headers)
                T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                return T.abort();
            if (u = "abort",
            b.add(v.complete),
            T.done(v.success),
            T.fail(v.error),
            c = _t(Wt, v, t, T)) {
                if (T.readyState = 1,
                g && m.trigger("ajaxSend", [T, v]),
                h)
                    return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1,
                    c.send(a, l)
                } catch (e) {
                    if (h)
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0,
                d && C.clearTimeout(d),
                c = void 0,
                p = r || "",
                T.readyState = 0 < e ? 4 : 0,
                i = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents, u = e.dataTypes;
                    while ("*" === u[0])
                        u.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0]in n)
                        o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o)
                        return o !== u[0] && u.unshift(o),
                        n[o]
                }(v, T, n)),
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters)
                            l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        u = o,
                        o = c.shift())
                            if ("*" === o)
                                o = u;
                            else if ("*" !== u && u !== o) {
                                if (!(a = l[u + " " + o] || l["* " + o]))
                                    for (i in l)
                                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                            c.unshift(s[1]));
                                            break
                                        }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else
                                        try {
                                            t = a(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: a ? e : "No conversion from " + u + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i),
                i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                o = s.data,
                i = !(a = s.error))) : (a = l,
                !e && l || (l = "error",
                e < 0 && (e = 0))),
                T.status = e,
                T.statusText = (t || l) + "",
                i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                T.statusCode(w),
                w = void 0,
                g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                b.fireWith(y, [T, l]),
                g && (m.trigger("ajaxComplete", [T, v]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, i) {
        k[i] = function(e, t, n, r) {
            return m(t) && (r = r || n,
            n = t,
            t = void 0),
            k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e))
        }
    }),
    k._evalUrl = function(e, t) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                k.globalEval(e, t)
            }
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])),
            t = k(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                var e = this;
                while (e.firstElementChild)
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e)
    }
    ,
    k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
      , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
    y.ajax = Xt = !!Xt,
    k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    a = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            o && a()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    k.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = k("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    E.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || k.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? k(C).removeProp(r) : C[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Gt.push(r)),
                o && m(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Vt.childNodes.length),
    k.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
        t.head.appendChild(r)) : t = E),
        o = !n && [],
        (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
        o && o.length && k(o).remove(),
        k.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)),
        e = e.slice(0, s)),
        m(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        0 < a.length && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = k.css(e, "top"),
            u = k.css(e, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            m(t) && (t = t.call(e, n, k.extend({}, s))),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                    i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - k.css(r, "marginTop", !0),
                    left: t.left - i.left - k.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position"))
                    e = e.offsetParent;
                return e || ie
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
            if (t)
                return t = _e(e, n),
                $e.test(t) ? k(e).position()[n] + "px" : t
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }),
    k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    k.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        m(e))
            return r = s.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i
    }
    ,
    k.holdReady = function(e) {
        e ? k.readyWait++ : k.ready(!0)
    }
    ,
    k.isArray = Array.isArray,
    k.parseJSON = JSON.parse,
    k.nodeName = A,
    k.isFunction = m,
    k.isWindow = x,
    k.camelCase = V,
    k.type = w,
    k.now = Date.now,
    k.isNumeric = function(e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
      , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
        k
    }
    ,
    e || (C.jQuery = C.$ = k),
    k
});

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
!function() {
    var t = !1;
    window.JQClass = function() {}
    ,
    JQClass.classes = {},
    JQClass.extend = function e(n) {
        function a() {
            !t && this._init && this._init.apply(this, arguments)
        }
        var s = this.prototype;
        t = !0;
        var i = new this;
        t = !1;
        for (var r in n)
            i[r] = "function" == typeof n[r] && "function" == typeof s[r] ? function(t, e) {
                return function() {
                    var n = this._super;
                    this._super = function(e) {
                        return s[t].apply(this, e || [])
                    }
                    ;
                    var a = e.apply(this, arguments);
                    return this._super = n,
                    a
                }
            }(r, n[r]) : n[r];
        return a.prototype = i,
        a.prototype.constructor = a,
        a.extend = e,
        a
    }
}(),
function($) {
    function camelCase(t) {
        return t.replace(/-([a-z])/g, function(t, e) {
            return e.toUpperCase()
        })
    }
    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return "is-" + this.name
        },
        _init: function() {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var t = camelCase(this.name);
            $[t] = this,
            $.fn[t] = function(e) {
                var n = Array.prototype.slice.call(arguments, 1);
                return $[t]._isNotChained(e, n) ? $[t][e].apply($[t], [this[0]].concat(n)) : this.each(function() {
                    if ("string" == typeof e) {
                        if ("_" === e[0] || !$[t][e])
                            throw "Unknown method: " + e;
                        $[t][e].apply($[t], [this].concat(n))
                    } else
                        $[t]._attach(this, e)
                })
            }
        },
        setDefaults: function(t) {
            $.extend(this.defaultOptions, t || {})
        },
        _isNotChained: function(t, e) {
            return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) ? !0 : $.inArray(t, this._getters) > -1
        },
        _attach: function(t, e) {
            if (t = $(t),
            !t.hasClass(this._getMarker())) {
                t.addClass(this._getMarker()),
                e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                var n = $.extend({
                    name: this.name,
                    elem: t,
                    options: e
                }, this._instSettings(t, e));
                t.data(this.name, n),
                this._postAttach(t, n),
                this.option(t, e)
            }
        },
        _instSettings: function(t, e) {
            return {}
        },
        _postAttach: function(t, e) {},
        _getMetadata: function(elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || "";
                data = data.replace(/'/g, '"'),
                data = data.replace(/([a-zA-Z0-9]+):/g, function(t, e, n) {
                    var a = data.substring(0, n).match(/"/g);
                    return a && a.length % 2 !== 0 ? e + ":" : '"' + e + '":'
                }),
                data = $.parseJSON("{" + data + "}");
                for (var name in data) {
                    var value = data[name];
                    "string" == typeof value && value.match(/^new Date\((.*)\)$/) && (data[name] = eval(value))
                }
                return data
            } catch (e) {
                return {}
            }
        },
        _getInst: function(t) {
            return $(t).data(this.name) || {}
        },
        option: function(t, e, n) {
            t = $(t);
            var a = t.data(this.name);
            if (!e || "string" == typeof e && null == n) {
                var s = (a || {}).options;
                return s && e ? s[e] : s
            }
            if (t.hasClass(this._getMarker())) {
                var s = e || {};
                "string" == typeof e && (s = {},
                s[e] = n),
                this._optionsChanged(t, a, s),
                $.extend(a.options, s)
            }
        },
        _optionsChanged: function(t, e, n) {},
        destroy: function(t) {
            t = $(t),
            t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)),
            t.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function(t, e) {}
    }),
    $.JQPlugin = {
        createPlugin: function(t, e) {
            "object" == typeof t && (e = t,
            t = "JQPlugin"),
            t = camelCase(t);
            var n = camelCase(e.name);
            JQClass.classes[n] = JQClass.classes[t].extend(e),
            new JQClass.classes[n]
        }
    }
}(jQuery);

/* http://keith-wood.name/countdown.html
 * Countdown for jQuery v2.0.2.
 * Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
 * Available under the MIT (http://keith-wood.name/licence.html) license.
 */
(function($) {
    var w = 'countdown';
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.JQPlugin.createPlugin({
        name: w,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: 'dHMS',
            layout: '',
            compact: false,
            padZeroes: false,
            significant: 0,
            description: '',
            expiryUrl: '',
            expiryText: '',
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            '': {
                labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
                labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
                compactLabels: ['y', 'm', 'w', 'd'],
                whichLabels: null,
                digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                timeSeparator: ':',
                isRTL: false
            }
        },
        _getters: ['getTimes'],
        _rtlClass: w + '-rtl',
        _sectionClass: w + '-section',
        _amountClass: w + '-amount',
        _periodClass: w + '-period',
        _rowClass: w + '-row',
        _holdingClass: w + '-holding',
        _showClass: w + '-show',
        _descrClass: w + '-descr',
        _timerElems: [],
        _init: function() {
            var c = this;
            this._super();
            this._serverSyncs = [];
            var d = (typeof Date.now == 'function' ? Date.now : function() {
                return new Date().getTime()
            }
            );
            var e = (window.performance && typeof window.performance.now == 'function');
            function timerCallBack(a) {
                var b = (a < 1e12 ? (e ? (performance.now() + performance.timing.navigationStart) : d()) : a || d());
                if (b - g >= 1000) {
                    c._updateElems();
                    g = b
                }
                f(timerCallBack)
            }
            var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            var g = 0;
            if (!f || $.noRequestAnimationFrame) {
                $.noRequestAnimationFrame = null;
                setInterval(function() {
                    c._updateElems()
                }, 980)
            } else {
                g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
                f(timerCallBack)
            }
        },
        UTCDate: function(a, b, c, e, f, g, h, i) {
            if (typeof b == 'object' && b.constructor == Date) {
                i = b.getMilliseconds();
                h = b.getSeconds();
                g = b.getMinutes();
                f = b.getHours();
                e = b.getDate();
                c = b.getMonth();
                b = b.getFullYear()
            }
            var d = new Date();
            d.setUTCFullYear(b);
            d.setUTCDate(1);
            d.setUTCMonth(c || 0);
            d.setUTCDate(e || 1);
            d.setUTCHours(f || 0);
            d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
            d.setUTCSeconds(h || 0);
            d.setUTCMilliseconds(i || 0);
            return d
        },
        periodsToSeconds: function(a) {
            return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
        },
        resync: function() {
            var d = this;
            $('.' + this._getMarker()).each(function() {
                var a = $.data(this, d.name);
                if (a.options.serverSync) {
                    var b = null;
                    for (var i = 0; i < d._serverSyncs.length; i++) {
                        if (d._serverSyncs[i][0] == a.options.serverSync) {
                            b = d._serverSyncs[i];
                            break
                        }
                    }
                    if (b[2] == null) {
                        var c = ($.isFunction(a.options.serverSync) ? a.options.serverSync.apply(this, []) : null);
                        b[2] = (c ? new Date().getTime() - c.getTime() : 0) - b[1]
                    }
                    if (a._since) {
                        a._since.setMilliseconds(a._since.getMilliseconds() + b[2])
                    }
                    a._until.setMilliseconds(a._until.getMilliseconds() + b[2])
                }
            });
            for (var i = 0; i < d._serverSyncs.length; i++) {
                if (d._serverSyncs[i][2] != null) {
                    d._serverSyncs[i][1] += d._serverSyncs[i][2];
                    delete d._serverSyncs[i][2]
                }
            }
        },
        _instSettings: function(a, b) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            }
        },
        _addElem: function(a) {
            if (!this._hasElem(a)) {
                this._timerElems.push(a)
            }
        },
        _hasElem: function(a) {
            return ($.inArray(a, this._timerElems) > -1)
        },
        _removeElem: function(b) {
            this._timerElems = $.map(this._timerElems, function(a) {
                return (a == b ? null : a)
            })
        },
        _updateElems: function() {
            for (var i = this._timerElems.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerElems[i])
            }
        },
        _optionsChanged: function(a, b, c) {
            if (c.layout) {
                c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }
            this._resetExtraLabels(b.options, c);
            var d = (b.options.timezone != c.timezone);
            $.extend(b.options, c);
            this._adjustSettings(a, b, c.until != null || c.since != null || d);
            var e = new Date();
            if ((b._since && b._since < e) || (b._until && b._until > e)) {
                this._addElem(a[0])
            }
            this._updateCountdown(a, b)
        },
        _updateCountdown: function(a, b) {
            a = a.jquery ? a : $(a);
            b = b || this._getInst(a);
            if (!b) {
                return
            }
            a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
            if ($.isFunction(b.options.onTick)) {
                var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
                if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
                    b.options.onTick.apply(a[0], [c])
                }
            }
            var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
            if (d && !b._expiring) {
                b._expiring = true;
                if (this._hasElem(a[0]) || b.options.alwaysExpire) {
                    this._removeElem(a[0]);
                    if ($.isFunction(b.options.onExpiry)) {
                        b.options.onExpiry.apply(a[0], [])
                    }
                    if (b.options.expiryText) {
                        var e = b.options.layout;
                        b.options.layout = b.options.expiryText;
                        this._updateCountdown(a[0], b);
                        b.options.layout = e
                    }
                    if (b.options.expiryUrl) {
                        window.location = b.options.expiryUrl
                    }
                }
                b._expiring = false
            } else if (b._hold == 'pause') {
                this._removeElem(a[0])
            }
        },
        _resetExtraLabels: function(a, b) {
            for (var n in b) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                    a[n] = b[n]
                }
            }
            for (var n in a) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/) && typeof b[n] === 'undefined') {
                    a[n] = null
                }
            }
        },
        _adjustSettings: function(a, b, c) {
            var d = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == b.options.serverSync) {
                    d = this._serverSyncs[i][1];
                    break
                }
            }
            if (d != null) {
                var e = (b.options.serverSync ? d : 0);
                var f = new Date()
            } else {
                var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null);
                var f = new Date();
                var e = (g ? f.getTime() - g.getTime() : 0);
                this._serverSyncs.push([b.options.serverSync, e])
            }
            var h = b.options.timezone;
            h = (h == null ? -f.getTimezoneOffset() : h);
            if (c || (!c && b._until == null && b._since == null)) {
                b._since = b.options.since;
                if (b._since != null) {
                    b._since = this.UTCDate(h, this._determineTime(b._since, null));
                    if (b._since && e) {
                        b._since.setMilliseconds(b._since.getMilliseconds() + e)
                    }
                }
                b._until = this.UTCDate(h, this._determineTime(b.options.until, f));
                if (e) {
                    b._until.setMilliseconds(b._until.getMilliseconds() + e)
                }
            }
            b._show = this._determineShow(b)
        },
        _preDestroy: function(a, b) {
            this._removeElem(a[0]);
            a.empty()
        },
        pause: function(a) {
            this._hold(a, 'pause')
        },
        lap: function(a) {
            this._hold(a, 'lap')
        },
        resume: function(a) {
            this._hold(a, null)
        },
        toggle: function(a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'pause' : 'resume'](a)
        },
        toggleLap: function(a) {
            var b = $.data(a, this.name) || {};
            this[!b._hold ? 'lap' : 'resume'](a)
        },
        _hold: function(a, b) {
            var c = $.data(a, this.name);
            if (c) {
                if (c._hold == 'pause' && !b) {
                    c._periods = c._savePeriods;
                    var d = (c._since ? '-' : '+');
                    c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
                    this._addElem(a)
                }
                c._hold = b;
                c._savePeriods = (b == 'pause' ? c._periods : null);
                $.data(a, this.name, c);
                this._updateCountdown(a, c)
            }
        },
        getTimes: function(a) {
            var b = $.data(a, this.name);
            return (!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
        },
        _determineTime: function(k, l) {
            var m = this;
            var n = function(a) {
                var b = new Date();
                b.setTime(b.getTime() + a * 1000);
                return b
            };
            var o = function(a) {
                a = a.toLowerCase();
                var b = new Date();
                var c = b.getFullYear();
                var d = b.getMonth();
                var e = b.getDate();
                var f = b.getHours();
                var g = b.getMinutes();
                var h = b.getSeconds();
                var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var j = i.exec(a);
                while (j) {
                    switch (j[2] || 's') {
                    case 's':
                        h += parseInt(j[1], 10);
                        break;
                    case 'm':
                        g += parseInt(j[1], 10);
                        break;
                    case 'h':
                        f += parseInt(j[1], 10);
                        break;
                    case 'd':
                        e += parseInt(j[1], 10);
                        break;
                    case 'w':
                        e += parseInt(j[1], 10) * 7;
                        break;
                    case 'o':
                        d += parseInt(j[1], 10);
                        e = Math.min(e, m._getDaysInMonth(c, d));
                        break;
                    case 'y':
                        c += parseInt(j[1], 10);
                        e = Math.min(e, m._getDaysInMonth(c, d));
                        break
                    }
                    j = i.exec(a)
                }
                return new Date(c,d,e,f,g,h,0)
            };
            var p = (k == null ? l : (typeof k == 'string' ? o(k) : (typeof k == 'number' ? n(k) : k)));
            if (p)
                p.setMilliseconds(0);
            return p
        },
        _getDaysInMonth: function(a, b) {
            return 32 - new Date(a,b,32).getDate()
        },
        _normalLabels: function(a) {
            return a
        },
        _generateHTML: function(c) {
            var d = this;
            c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
            var e = false;
            var f = 0;
            var g = c.options.significant;
            var h = $.extend({}, c._show);
            for (var i = Y; i <= S; i++) {
                e |= (c._show[i] == '?' && c._periods[i] > 0);
                h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
                f += (h[i] ? 1 : 0);
                g -= (c._periods[i] > 0 ? 1 : 0)
            }
            var j = [false, false, false, false, false, false, false];
            for (var i = S; i >= Y; i--) {
                if (c._show[i]) {
                    if (c._periods[i]) {
                        j[i] = true
                    } else {
                        j[i] = g > 0;
                        g--
                    }
                }
            }
            var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
            var l = c.options.whichLabels || this._normalLabels;
            var m = function(a) {
                var b = c.options['compactLabels' + l(c._periods[a])];
                return (h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
            };
            var n = (c.options.padZeroes ? 2 : 1);
            var o = function(a) {
                var b = c.options['labels' + l(c._periods[a])];
                return ((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '')
            };
            return (c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
        },
        _buildLayout: function(c, d, e, f, g, h) {
            var j = c.options[f ? 'compactLabels' : 'labels'];
            var k = c.options.whichLabels || this._normalLabels;
            var l = function(a) {
                return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
            };
            var m = function(a, b) {
                return c.options.digits[Math.floor(a / b) % 10]
            };
            var o = {
                desc: c.options.description,
                sep: c.options.timeSeparator,
                yl: l(Y),
                yn: this._minDigits(c, c._periods[Y], 1),
                ynn: this._minDigits(c, c._periods[Y], 2),
                ynnn: this._minDigits(c, c._periods[Y], 3),
                y1: m(c._periods[Y], 1),
                y10: m(c._periods[Y], 10),
                y100: m(c._periods[Y], 100),
                y1000: m(c._periods[Y], 1000),
                ol: l(O),
                on: this._minDigits(c, c._periods[O], 1),
                onn: this._minDigits(c, c._periods[O], 2),
                onnn: this._minDigits(c, c._periods[O], 3),
                o1: m(c._periods[O], 1),
                o10: m(c._periods[O], 10),
                o100: m(c._periods[O], 100),
                o1000: m(c._periods[O], 1000),
                wl: l(W),
                wn: this._minDigits(c, c._periods[W], 1),
                wnn: this._minDigits(c, c._periods[W], 2),
                wnnn: this._minDigits(c, c._periods[W], 3),
                w1: m(c._periods[W], 1),
                w10: m(c._periods[W], 10),
                w100: m(c._periods[W], 100),
                w1000: m(c._periods[W], 1000),
                dl: l(D),
                dn: this._minDigits(c, c._periods[D], 1),
                dnn: this._minDigits(c, c._periods[D], 2),
                dnnn: this._minDigits(c, c._periods[D], 3),
                d1: m(c._periods[D], 1),
                d10: m(c._periods[D], 10),
                d100: m(c._periods[D], 100),
                d1000: m(c._periods[D], 1000),
                hl: l(H),
                hn: this._minDigits(c, c._periods[H], 1),
                hnn: this._minDigits(c, c._periods[H], 2),
                hnnn: this._minDigits(c, c._periods[H], 3),
                h1: m(c._periods[H], 1),
                h10: m(c._periods[H], 10),
                h100: m(c._periods[H], 100),
                h1000: m(c._periods[H], 1000),
                ml: l(M),
                mn: this._minDigits(c, c._periods[M], 1),
                mnn: this._minDigits(c, c._periods[M], 2),
                mnnn: this._minDigits(c, c._periods[M], 3),
                m1: m(c._periods[M], 1),
                m10: m(c._periods[M], 10),
                m100: m(c._periods[M], 100),
                m1000: m(c._periods[M], 1000),
                sl: l(S),
                sn: this._minDigits(c, c._periods[S], 1),
                snn: this._minDigits(c, c._periods[S], 2),
                snnn: this._minDigits(c, c._periods[S], 3),
                s1: m(c._periods[S], 1),
                s10: m(c._periods[S], 10),
                s100: m(c._periods[S], 100),
                s1000: m(c._periods[S], 1000)
            };
            var p = e;
            for (var i = Y; i <= S; i++) {
                var q = 'yowdhms'.charAt(i);
                var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}','g');
                p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
            }
            $.each(o, function(n, v) {
                var a = new RegExp('\\{' + n + '\\}','g');
                p = p.replace(a, v)
            });
            return p
        },
        _minDigits: function(a, b, c) {
            b = '' + b;
            if (b.length >= c) {
                return this._translateDigits(a, b)
            }
            b = '0000000000' + b;
            return this._translateDigits(a, b.substr(b.length - c))
        },
        _translateDigits: function(b, c) {
            return ('' + c).replace(/[0-9]/g, function(a) {
                return b.options.digits[a]
            })
        },
        _determineShow: function(a) {
            var b = a.options.format;
            var c = [];
            c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
            c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
            c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
            c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
            c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
            c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
            c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
            return c
        },
        _calculatePeriods: function(c, d, e, f) {
            c._now = f;
            c._now.setMilliseconds(0);
            var g = new Date(c._now.getTime());
            if (c._since) {
                if (f.getTime() < c._since.getTime()) {
                    c._now = f = g
                } else {
                    f = c._since
                }
            } else {
                g.setTime(c._until.getTime());
                if (f.getTime() > c._until.getTime()) {
                    c._now = f = g
                }
            }
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (d[Y] || d[O]) {
                var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
                var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
                var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
                var l = function(a) {
                    return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
                };
                var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
                h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
                h[O] = (d[O] ? m - h[Y] * 12 : 0);
                f = new Date(f.getTime());
                var n = (f.getDate() == i);
                var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
                if (f.getDate() > o) {
                    f.setDate(o)
                }
                f.setFullYear(f.getFullYear() + h[Y]);
                f.setMonth(f.getMonth() + h[O]);
                if (n) {
                    f.setDate(o)
                }
            }
            var p = Math.floor((g.getTime() - f.getTime()) / 1000);
            var q = function(a, b) {
                h[a] = (d[a] ? Math.floor(p / b) : 0);
                p -= h[a] * b
            };
            q(W, 604800);
            q(D, 86400);
            q(H, 3600);
            q(M, 60);
            q(S, 1);
            if (p > 0 && !c._since) {
                var r = [1, 12, 4.3482, 7, 24, 60, 60];
                var s = S;
                var t = 1;
                for (var u = S; u >= Y; u--) {
                    if (d[u]) {
                        if (h[s] >= t) {
                            h[s] = 0;
                            p = 1
                        }
                        if (p > 0) {
                            h[u]++;
                            p = 0;
                            s = u;
                            t = 1
                        }
                    }
                    t *= r[u]
                }
            }
            if (e) {
                for (var u = Y; u <= S; u++) {
                    if (e && h[u]) {
                        e--
                    } else if (!e) {
                        h[u] = 0
                    }
                }
            }
            return h
        }
    })
}
)(jQuery);

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 */
!function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";
    function b(a) {
        if (a instanceof Date)
            return a;
        if (String(a).match(g))
            return String(a).match(/^[0-9]*$/) && (a = Number(a)),
            String(a).match(/\-/) && (a = String(a).replace(/\-/g, "/")),
            new Date(a);
        throw new Error("Couldn't cast `" + a + "` to a date object.")
    }
    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(b)
    }
    function d(a) {
        return function(b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                      , j = c(h[0])
                      , k = h[1] || ""
                      , l = h[3] || ""
                      , m = null;
                    h = h[2],
                    i.hasOwnProperty(h) && (m = i[h],
                    m = Number(a[m])),
                    null !== m && ("!" === k && (m = e(l, m)),
                    "" === k && m < 10 && (m = "0" + m.toString()),
                    b = b.replace(j, m.toString()))
                }
            return b = b.replace(/%%/, "%")
        }
    }
    function e(a, b) {
        var c = "s"
          , d = "";
        return a && (a = a.replace(/(:|;|\s)/gi, "").split(/\,/),
        1 === a.length ? c = a[0] : (d = a[0],
        c = a[1])),
        Math.abs(b) > 1 ? c : d
    }
    var f = []
      , g = []
      , h = {
        precision: 100,
        elapse: !1,
        defer: !1
    };
    g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g = new RegExp(g.join("|"));
    var i = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    }
      , j = function(b, c, d) {
        this.el = b,
        this.$el = a(b),
        this.interval = null,
        this.offset = {},
        this.options = a.extend({}, h),
        this.firstTick = !0,
        this.instanceNumber = f.length,
        f.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        d && ("function" == typeof d ? (this.$el.on("update.countdown", d),
        this.$el.on("stoped.countdown", d),
        this.$el.on("finish.countdown", d)) : this.options = a.extend({}, h, d)),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start()
    };
    a.extend(j.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
            this.interval = setInterval(function() {
                a.update.call(a)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this),
            f[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(a) {
            this.finalDate = b(a)
        },
        update: function() {
            if (0 === this.$el.closest("html").length)
                return void this.remove();
            var a, b = new Date;
            return a = this.finalDate.getTime() - b.getTime(),
            a = Math.ceil(a / 1e3),
            a = !this.options.elapse && a < 0 ? 0 : Math.abs(a),
            this.totalSecsLeft === a || this.firstTick ? void (this.firstTick = !1) : (this.totalSecsLeft = a,
            this.elapsed = b >= this.finalDate,
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - b.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            },
            void (this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(),
            this.dispatchEvent("finish"))))
        },
        dispatchEvent: function(b) {
            var c = a.Event(b + ".countdown");
            c.finalDate = this.finalDate,
            c.elapsed = this.elapsed,
            c.offset = a.extend({}, this.offset),
            c.strftime = d(this.offset),
            this.$el.trigger(c)
        }
    }),
    a.fn.countdown = function() {
        var b = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var c = a(this).data("countdown-instance");
            if (void 0 !== c) {
                var d = f[c]
                  , e = b[0];
                j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e),
                d.start()) : a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, e))
            } else
                new j(this,b[0],b[1])
        })
    }
});

/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 JÃ¶rn Zaefferer; Licensed MIT */
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length)
                return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"),
            c = new a.validator(b,this[0]),
            a.data(this[0], "validator", c),
            c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) {
                c.settings.submitHandler && (c.submitButton = b.target),
                a(this).hasClass("cancel") && (c.cancelSubmit = !0),
                void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }),
            this.on("submit.validate", function(b) {
                function d() {
                    var d, e;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),
                    e = c.settings.submitHandler.call(c, c.currentForm, b),
                    c.submitButton && d.remove(),
                    void 0 !== e ? e : !1) : !0
                }
                return c.settings.debug && b.preventDefault(),
                c.cancelSubmit ? (c.cancelSubmit = !1,
                d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0,
                !1) : d() : (c.focusInvalid(),
                !1)
            })),
            c)
        },
        valid: function() {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [],
            b = !0,
            c = a(this[0].form).validate(),
            this.each(function() {
                b = c.element(this) && b,
                b || (d = d.concat(c.errorList))
            }),
            c.errorList = d),
            b
        },
        rules: function(b, c) {
            if (this.length) {
                var d, e, f, g, h, i, j = this[0];
                if (b)
                    switch (d = a.data(j.form, "validator").settings,
                    e = d.rules,
                    f = a.validator.staticRules(j),
                    b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)),
                        delete f.messages,
                        e[j.name] = f,
                        c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {},
                        a.each(c.split(/\s/), function(b, c) {
                            i[c] = f[c],
                            delete f[c],
                            "required" === c && a(j).removeAttr("aria-required")
                        }),
                        i) : (delete e[j.name],
                        f)
                    }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j),
                g.required && (h = g.required,
                delete g.required,
                g = a.extend({
                    required: h
                }, g),
                a(j).attr("aria-required", "true")),
                g.remote && (h = g.remote,
                delete g.remote,
                g = a.extend(g, {
                    remote: h
                })),
                g
            }
        }
    }),
    a.extend(a.expr[":"], {
        blank: function(b) {
            return !a.trim("" + a(b).val())
        },
        filled: function(b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        },
        unchecked: function(b) {
            return !a(b).prop("checked")
        }
    }),
    a.validator = function(b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b),
        this.currentForm = c,
        this.init()
    }
    ,
    a.validator.format = function(b, c) {
        return 1 === arguments.length ? function() {
            var c = a.makeArray(arguments);
            return c.unshift(b),
            a.validator.format.apply(this, c)
        }
        : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)),
        c.constructor !== Array && (c = [c]),
        a.each(c, function(a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}","g"), function() {
                return c
            })
        }),
        b)
    }
    ,
    a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive = a,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function(b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = a.data(this.form, "validator")
                      , d = "on" + b.type.replace(/^validate/, "")
                      , e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }
                this.labelContainer = a(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm),
                this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function(b, c) {
                    "string" == typeof c && (c = c.split(/\s/)),
                    a.each(c, function(a, c) {
                        d[c] = b
                    })
                }),
                c = this.settings.rules,
                a.each(c, function(b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }),
                a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b),
                this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler),
                a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                a.extend(this.submitted, this.errorMap),
                this.invalid = a.extend({}, this.errorMap),
                this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++)
                    this.check(b[a]);
                return this.valid()
            },
            element: function(b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f),
                this.currentElements = a(f),
                d = this.groups[f.name],
                d && a.each(this.groups, function(a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))),
                    e && e.name in g.invalid && (g.currentElements.push(e),
                    h = h && g.check(e)))
                }),
                c = this.check(f) !== !1,
                h = h && c,
                c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                a(b).attr("aria-invalid", !c)),
                h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b),
                    this.errorList = a.map(this.errorMap, function(a, b) {
                        return {
                            message: a,
                            element: c.findByName(b)[0]
                        }
                    }),
                    this.successList = a.grep(this.successList, function(a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++)
                        this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""),
                        this.findByName(a[b].name).removeClass(this.settings.validClass);
                else
                    a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, c = 0;
                for (b in a)
                    a[b] && c++;
                return c
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text(""),
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (b) {}
            },
            findLastActive: function() {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function(a) {
                    return a.element.name === b.name
                }).length && b
            },
            elements: function() {
                var b = this
                  , c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]),
                    d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0,
                    !0)
                })
            },
            clean: function(b) {
                return a(b)[0]
            },
            errors: function() {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = a([]),
                this.toHide = a([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = a([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset(),
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(),
                "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"),
                d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"),
                d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f = a(b).rules(), g = a.map(f, function(a, b) {
                    return b
                }).length, h = !1, i = this.elementValue(b);
                if ("function" == typeof f.normalizer) {
                    if (i = f.normalizer.call(b, i),
                    "string" != typeof i)
                        throw new TypeError("The normalizer should return a string value.");
                    delete f.normalizer
                }
                for (d in f) {
                    e = {
                        method: d,
                        parameters: f[d]
                    };
                    try {
                        if (c = a.validator.methods[d].call(this, i, b, e.parameters),
                        "dependency-mismatch" === c && 1 === g) {
                            h = !0;
                            continue
                        }
                        if (h = !1,
                        "pending" === c)
                            return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c)
                            return this.formatAndAdd(b, e),
                            !1
                    } catch (j) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j),
                        j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."),
                        j
                    }
                }
                if (!h)
                    return this.objectLength(f) && this.successList.push(b),
                    !0
            },
            customDataMessage: function(b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            },
            customMessage: function(a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a])
                        return arguments[a]
            },
            defaultMessage: function(b, c) {
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>")
                  , e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)),
                d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({
                    message: c,
                    element: a,
                    method: b.method
                }),
                this.errorMap[a.name] = c,
                this.submitted[a.name] = c
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))),
                a
            },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++)
                    c = this.errorList[a],
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (a = 0; this.successList[a]; a++)
                        this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0,
                    b = this.validElements(); b[a]; a++)
                        this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return a(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""),
                d = h,
                this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b),
                h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"),
                j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f,
                a(b).attr("aria-describedby", j),
                e = this.groups[b.name],
                e && (g = this,
                a.each(g.groups, function(b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))),
                !c && this.settings.success && (h.text(""),
                "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)),
                this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b))
                  , d = a(b).attr("aria-describedby")
                  , e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")),
                this.errors().filter(e)
            },
            escapeCssMeta: function(a) {
                return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(b) {
                return this.checkable(b) && (b = this.findByName(b.name)),
                a(b).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                case "select":
                    return a("option:selected", c).length;
                case "input":
                    if (this.checkable(c))
                        return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(b, c) {
                    return !!a(b, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            },
            startRequest: function(b) {
                this.pending[b.name] || (this.pendingRequest++,
                a(b).addClass(this.settings.pendingClass),
                this.pending[b.name] = !0)
            },
            stopRequest: function(b, c) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[b.name],
                a(b).removeClass(this.settings.pendingClass),
                c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(),
                this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(b, c) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, {
                        method: c
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function(b) {
            var c = {}
              , d = a(b).attr("class");
            return d && a.each(d.split(" "), function() {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }),
            c
        },
        normalizeAttributeRule: function(a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d),
            isNaN(d) && (d = void 0)),
            d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                "required" === c ? (d = b.getAttribute(c),
                "" === d && (d = !0),
                d = !!d) : d = f.attr(c),
                this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength,
            e
        },
        dataRules: function(b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods)
                d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()),
                this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {}
              , d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}),
            c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1)
                    return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                    case "string":
                        f = !!a(e.depends, c.form).length;
                        break;
                    case "function":
                        f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)),
                    delete b[d])
                }
            }),
            a.each(b, function(d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }),
            a.each(["minlength", "maxlength"], function() {
                b[this] && (b[this] = Number(b[this]))
            }),
            a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                b[this] = [Number(c[0]), Number(c[1])]))
            }),
            a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max],
            delete b.min,
            delete b.max),
            null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength],
            delete b.minlength,
            delete b.maxlength)),
            b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() {
                    c[this] = !0
                }),
                b = c
            }
            return b
        },
        addMethod: function(b, c, d) {
            a.validator.methods[b] = c,
            a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b],
            c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function(b, c, d) {
                if (!this.depend(d, c))
                    return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            minlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            },
            maxlength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || d >= e
            },
            rangelength: function(b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            },
            min: function(a, b, c) {
                return this.optional(b) || a >= c
            },
            max: function(a, b, c) {
                return this.optional(b) || c >= a
            },
            range: function(a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            },
            step: function(b, c, d) {
                var e = a(c).attr("type")
                  , f = "Step attribute on input type " + e + " is not supported."
                  , g = ["text", "number", "range"]
                  , h = new RegExp("\\b" + e + "\\b")
                  , i = e && !h.test(g.join());
                if (i)
                    throw new Error(f);
                return this.optional(c) || b % d === 0
            },
            equalTo: function(b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    a(c).valid()
                }),
                b === e.val()
            },
            remote: function(b, c, d, e) {
                if (this.optional(c))
                    return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}),
                i.originalMessage = i.originalMessage || this.settings.messages[c.name][e],
                this.settings.messages[c.name][e] = i.message,
                d = "string" == typeof d && {
                    url: d
                } || d,
                h = a.param(a.extend({
                    data: b
                }, d.data)),
                i.old === h ? i.valid : (i.old = h,
                f = this,
                this.startRequest(c),
                g = {},
                g[c.name] = b,
                a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage,
                        j ? (h = f.formSubmitted,
                        f.resetInternals(),
                        f.toHide = f.errorsFor(c),
                        f.formSubmitted = h,
                        f.successList.push(c),
                        f.invalid[c.name] = !1,
                        f.showErrors()) : (d = {},
                        g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }),
                        d[c.name] = i.message = g,
                        f.invalid[c.name] = !0,
                        f.showErrors(d)),
                        i.valid = j,
                        f.stopRequest(c, j)
                    }
                }, d)),
                "pending")
            }
        }
    });
    var b, c = {};
    a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(),
        c[e] = d)
    }) : (b = a.ajax,
    a.ajax = function(d) {
        var e = ("mode"in d ? d : a.ajaxSettings).mode
          , f = ("port"in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(),
        c[f] = b.apply(this, arguments),
        c[f]) : b.apply(this, arguments)
    }
    )
});

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */
(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define(t) : e.Popper = t()
}
)(this, function() {
    'use strict';
    function e(e) {
        return e && '[object Function]' === {}.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType)
            return [];
        var o = getComputedStyle(e, null);
        return t ? o[t] : o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e : e.parentNode || e.host
    }
    function n(e) {
        if (!e)
            return document.body;
        switch (e.nodeName) {
        case 'HTML':
        case 'BODY':
            return e.ownerDocument.body;
        case '#document':
            return e.body;
        }
        var i = t(e)
          , r = i.overflow
          , p = i.overflowX
          , s = i.overflowY;
        return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
    }
    function r(e) {
        return 11 === e ? re : 10 === e ? pe : re || pe
    }
    function p(e) {
        if (!e)
            return document.documentElement;
        for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling; )
            n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }
    function s(e) {
        var t = e.nodeName;
        return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e : d(e.parentNode)
    }
    function a(e, t) {
        if (!e || !e.nodeType || !t || !t.nodeType)
            return document.documentElement;
        var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
          , n = o ? e : t
          , i = o ? t : e
          , r = document.createRange();
        r.setStart(n, 0),
        r.setEnd(i, 0);
        var l = r.commonAncestorContainer;
        if (e !== l && t !== l || n.contains(i))
            return s(l) ? l : p(l);
        var f = d(e);
        return f.host ? a(f.host, t) : a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top'
          , o = 'top' === t ? 'scrollTop' : 'scrollLeft'
          , n = e.nodeName;
        if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement
              , r = e.ownerDocument.scrollingElement || i;
            return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , n = l(t, 'top')
          , i = l(t, 'left')
          , r = o ? -1 : 1;
        return e.top += n * r,
        e.bottom += n * r,
        e.left += i * r,
        e.right += i * r,
        e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left' : 'Top'
          , n = 'Left' == o ? 'Right' : 'Bottom';
        return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0)
    }
    function c() {
        var e = document.body
          , t = document.documentElement
          , o = r(10) && getComputedStyle(t);
        return {
            height: h('Height', e, t, o),
            width: h('Width', e, t, o)
        }
    }
    function g(e) {
        return le({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {};
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top')
                  , i = l(e, 'left');
                o.top += n,
                o.left += i,
                o.bottom += n,
                o.right += i
            } else
                o = e.getBoundingClientRect()
        } catch (t) {}
        var p = {
            left: o.left,
            top: o.top,
            width: o.right - o.left,
            height: o.bottom - o.top
        }
          , s = 'HTML' === e.nodeName ? c() : {}
          , d = s.width || e.clientWidth || p.right - p.left
          , a = s.height || e.clientHeight || p.bottom - p.top
          , f = e.offsetWidth - d
          , h = e.offsetHeight - a;
        if (f || h) {
            var u = t(e);
            f -= m(u, 'x'),
            h -= m(u, 'y'),
            p.width -= f,
            p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
          , p = r(10)
          , s = 'HTML' === o.nodeName
          , d = u(e)
          , a = u(o)
          , l = n(e)
          , m = t(o)
          , h = parseFloat(m.borderTopWidth, 10)
          , c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName && (a.top = $(a.top, 0),
        a.left = $(a.left, 0));
        var b = g({
            top: d.top - a.top - h,
            left: d.left - a.left - c,
            width: d.width,
            height: d.height
        });
        if (b.marginTop = 0,
        b.marginLeft = 0,
        !p && s) {
            var y = parseFloat(m.marginTop, 10)
              , w = parseFloat(m.marginLeft, 10);
            b.top -= h - y,
            b.bottom -= h - y,
            b.left -= c - w,
            b.right -= c - w,
            b.marginTop = y,
            b.marginLeft = w
        }
        return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)),
        b
    }
    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = e.ownerDocument.documentElement
          , n = b(e, o)
          , i = $(o.clientWidth, window.innerWidth || 0)
          , r = $(o.clientHeight, window.innerHeight || 0)
          , p = t ? 0 : l(o)
          , s = t ? 0 : l(o, 'left')
          , d = {
            top: p - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: i,
            height: r
        };
        return g(d)
    }
    function w(e) {
        var n = e.nodeName;
        return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e))
    }
    function E(e) {
        if (!e || !e.parentElement || r())
            return document.documentElement;
        for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
            o = o.parentElement;
        return o || document.documentElement
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
          , s = {
            top: 0,
            left: 0
        }
          , d = p ? E(e) : a(e, t);
        if ('viewport' === r)
            s = y(d, p);
        else {
            var l;
            'scrollParent' === r ? (l = n(o(t)),
            'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
            var f = b(l, d, p);
            if ('HTML' === l.nodeName && !w(d)) {
                var m = c()
                  , h = m.height
                  , g = m.width;
                s.top += f.top - f.marginTop,
                s.bottom = h + f.top,
                s.left += f.left - f.marginLeft,
                s.right = g + f.left
            } else
                s = f
        }
        return s.left += i,
        s.top += i,
        s.right -= i,
        s.bottom -= i,
        s
    }
    function x(e) {
        var t = e.width
          , o = e.height;
        return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf('auto'))
            return e;
        var p = v(o, n, r, i)
          , s = {
            top: {
                width: p.width,
                height: t.top - p.top
            },
            right: {
                width: p.right - t.right,
                height: p.height
            },
            bottom: {
                width: p.width,
                height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left,
                height: p.height
            }
        }
          , d = Object.keys(s).map(function(e) {
            return le({
                key: e
            }, s[e], {
                area: x(s[e])
            })
        }).sort(function(e, t) {
            return t.area - e.area
        })
          , a = d.filter(function(e) {
            var t = e.width
              , n = e.height;
            return t >= o.clientWidth && n >= o.clientHeight
        })
          , l = 0 < a.length ? a[0].key : d[0].key
          , f = e.split('-')[1];
        return l + (f ? '-' + f : '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
          , i = n ? E(t) : a(t, o);
        return b(o, i, n)
    }
    function S(e) {
        var t = getComputedStyle(e)
          , o = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
          , n = parseFloat(t.marginLeft) + parseFloat(t.marginRight)
          , i = {
            width: e.offsetWidth + n,
            height: e.offsetHeight + o
        };
        return i
    }
    function T(e) {
        var t = {
            left: 'right',
            right: 'left',
            bottom: 'top',
            top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0];
        var n = S(e)
          , i = {
            width: n.width,
            height: n.height
        }
          , r = -1 !== ['right', 'left'].indexOf(o)
          , p = r ? 'top' : 'left'
          , s = r ? 'left' : 'top'
          , d = r ? 'height' : 'width'
          , a = r ? 'width' : 'height';
        return i[p] = t[p] + t[d] / 2 - n[d] / 2,
        i[s] = o === s ? t[s] - n[a] : t[T(s)],
        i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex)
            return e.findIndex(function(e) {
                return e[t] === o
            });
        var n = D(e, function(e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
        return i.forEach(function(t) {
            t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t['function'] || t.fn;
            t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper),
            o.offsets.reference = g(o.offsets.reference),
            o = n(o, t))
        }),
        o
    }
    function k() {
        if (!this.state.isDestroyed) {
            var e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed),
            e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            e.originalPlacement = e.placement,
            e.positionFixed = this.options.positionFixed,
            e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
            e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute',
            e = P(this.modifiers, e),
            this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
            this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function(e) {
            var o = e.name
              , n = e.enabled;
            return n && o === t
        })
    }
    function B(e) {
        for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n]
              , r = i ? '' + i + o : e;
            if ('undefined' != typeof document.body.style[r])
                return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = !0,
        W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'),
        this.popper.style.position = '',
        this.popper.style.top = '',
        this.popper.style.left = '',
        this.popper.style.right = '',
        this.popper.style.bottom = '',
        this.popper.style.willChange = '',
        this.popper.style[B('transform')] = ''),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function A(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName
          , p = r ? e.ownerDocument.defaultView : e;
        p.addEventListener(t, o, {
            passive: !0
        }),
        r || M(n(p.parentNode), t, o, i),
        i.push(p)
    }
    function I(e, t, o, i) {
        o.updateBound = i,
        A(e).addEventListener('resize', o.updateBound, {
            passive: !0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents),
        o.scrollElement = r,
        o.eventsEnabled = !0,
        o
    }
    function F() {
        this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound),
        t.scrollParents.forEach(function(e) {
            e.removeEventListener('scroll', t.updateBound)
        }),
        t.updateBound = null,
        t.scrollParents = [],
        t.scrollElement = null,
        t.eventsEnabled = !1,
        t
    }
    function U() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }
    function j(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = '';
            -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'),
            e.style[o] = t[o] + n
        })
    }
    function K(e, t) {
        Object.keys(t).forEach(function(o) {
            var n = t[o];
            !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
        })
    }
    function q(e, t, o) {
        var n = D(e, function(e) {
            var o = e.name;
            return o === t
        })
          , i = !!n && e.some(function(e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (!i) {
            var r = '`' + t + '`';
            console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function G(e) {
        return 'end' === e ? 'start' : 'start' === e ? 'end' : e
    }
    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          , o = me.indexOf(e)
          , n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse() : n
    }
    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , r = +i[1]
          , p = i[2];
        if (!r)
            return e;
        if (0 === p.indexOf('%')) {
            var s;
            switch (p) {
            case '%p':
                s = o;
                break;
            case '%':
            case '%r':
            default:
                s = n;
            }
            var d = g(s);
            return d[t] / 100 * r
        }
        if ('vh' === p || 'vw' === p) {
            var a;
            return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0),
            a / 100 * r
        }
        return r
    }
    function _(e, t, o, n) {
        var i = [0, 0]
          , r = -1 !== ['right', 'left'].indexOf(n)
          , p = e.split(/(\+|\-)/).map(function(e) {
            return e.trim()
        })
          , s = p.indexOf(D(p, function(e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/
          , a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
        return a = a.map(function(e, n) {
            var i = (1 === n ? !r : r) ? 'height' : 'width'
              , p = !1;
            return e.reduce(function(e, t) {
                return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t,
                p = !0,
                e) : p ? (e[e.length - 1] += t,
                p = !1,
                e) : e.concat(t)
            }, []).map(function(e) {
                return V(e, i, t, o)
            })
        }),
        a.forEach(function(e, t) {
            e.forEach(function(o, n) {
                Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
            })
        }),
        i
    }
    function X(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0];
        return o = Y(+n) ? [+n, 0] : _(n, p, s, d),
        'left' === d ? (p.top += o[0],
        p.left -= o[1]) : 'right' === d ? (p.top += o[0],
        p.left += o[1]) : 'top' === d ? (p.left += o[0],
        p.top -= o[1]) : 'bottom' === d && (p.left += o[0],
        p.top += o[1]),
        e.popper = p,
        e
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1)
        if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
            oe = 1;
            break
        }
    var i = ee && window.Promise
      , ie = i ? function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            window.Promise.resolve().then(function() {
                t = !1,
                e()
            }))
        }
    }
    : function(e) {
        var t = !1;
        return function() {
            t || (t = !0,
            setTimeout(function() {
                t = !1,
                e()
            }, oe))
        }
    }
      , re = ee && !!(window.MSInputMethodContext && document.documentMode)
      , pe = ee && /MSIE 10/.test(navigator.userAgent)
      , se = function(e, t) {
        if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
    }
      , de = function() {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++)
                o = t[n],
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                'value'in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
        }
        return function(t, o, n) {
            return o && e(t.prototype, o),
            n && e(t, n),
            t
        }
    }()
      , ae = function(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = o,
        e
    }
      , le = Object.assign || function(e) {
        for (var t, o = 1; o < arguments.length; o++)
            for (var n in t = arguments[o],
            t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return e
    }
      , fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']
      , me = fe.slice(3)
      , he = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
    }
      , ce = function() {
        function t(o, n) {
            var i = this
              , r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            se(this, t),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(i.update)
            }
            ,
            this.update = ie(this.update.bind(this)),
            this.options = le({}, t.Defaults, r),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = o && o.jquery ? o[0] : o,
            this.popper = n && n.jquery ? n[0] : n,
            this.options.modifiers = {},
            Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return le({
                    name: e
                }, i.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }),
            this.update();
            var p = this.options.eventsEnabled;
            p && this.enableEventListeners(),
            this.state.eventsEnabled = p
        }
        return de(t, [{
            key: 'update',
            value: function() {
                return k.call(this)
            }
        }, {
            key: 'destroy',
            value: function() {
                return H.call(this)
            }
        }, {
            key: 'enableEventListeners',
            value: function() {
                return F.call(this)
            }
        }, {
            key: 'disableEventListeners',
            value: function() {
                return U.call(this)
            }
        }]),
        t
    }();
    return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils,
    ce.placements = fe,
    ce.Defaults = {
        placement: 'bottom',
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = t.split('-')[1];
                    if (n) {
                        var i = e.offsets
                          , r = i.reference
                          , p = i.popper
                          , s = -1 !== ['bottom', 'top'].indexOf(o)
                          , d = s ? 'left' : 'top'
                          , a = s ? 'width' : 'height'
                          , l = {
                            start: ae({}, d, r[d]),
                            end: ae({}, d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({}, p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: X,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o && (o = p(o));
                    var n = B('transform')
                      , i = e.instance.popper.style
                      , r = i.top
                      , s = i.left
                      , d = i[n];
                    i.top = '',
                    i.left = '',
                    i[n] = '';
                    var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r,
                    i.left = s,
                    i[n] = d,
                    t.boundaries = a;
                    var l = t.priority
                      , f = e.offsets.popper
                      , m = {
                        primary: function(e) {
                            var o = f[e];
                            return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])),
                            ae({}, e, o)
                        },
                        secondary: function(e) {
                            var o = 'right' === e ? 'left' : 'top'
                              , n = f[o];
                            return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))),
                            ae({}, o, n)
                        }
                    };
                    return l.forEach(function(e) {
                        var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
                        f = le({}, f, m[t](e))
                    }),
                    e.offsets.popper = f,
                    e
                },
                priority: ['left', 'right', 'top', 'bottom'],
                padding: 5,
                boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets
                      , o = t.popper
                      , n = t.reference
                      , i = e.placement.split('-')[0]
                      , r = Z
                      , p = -1 !== ['top', 'bottom'].indexOf(i)
                      , s = p ? 'right' : 'bottom'
                      , d = p ? 'left' : 'top'
                      , a = p ? 'width' : 'height';
                    return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
                    o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
                    e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, o) {
                    var n;
                    if (!q(e.instance.modifiers, 'arrow', 'keepTogether'))
                        return e;
                    var i = o.element;
                    if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i),
                        !i)
                            return e;
                    } else if (!e.instance.popper.contains(i))
                        return console.warn('WARNING: `arrow.element` must be child of its popper element!'),
                        e;
                    var r = e.placement.split('-')[0]
                      , p = e.offsets
                      , s = p.popper
                      , d = p.reference
                      , a = -1 !== ['left', 'right'].indexOf(r)
                      , l = a ? 'height' : 'width'
                      , f = a ? 'Top' : 'Left'
                      , m = f.toLowerCase()
                      , h = a ? 'left' : 'top'
                      , c = a ? 'bottom' : 'right'
                      , u = S(i)[l];
                    d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)),
                    d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]),
                    e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] / 2 - u / 2
                      , y = t(e.instance.popper)
                      , w = parseFloat(y['margin' + f], 10)
                      , E = parseFloat(y['border' + f + 'Width'], 10)
                      , v = b - e.offsets.popper[m] - w - E;
                    return v = $(J(s[l] - u, v), 0),
                    e.arrowElement = i,
                    e.offsets.arrow = (n = {},
                    ae(n, m, Q(v)),
                    ae(n, h, ''),
                    n),
                    e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (W(e.instance.modifiers, 'inner'))
                        return e;
                    if (e.flipped && e.placement === e.originalPlacement)
                        return e;
                    var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                      , n = e.placement.split('-')[0]
                      , i = T(n)
                      , r = e.placement.split('-')[1] || ''
                      , p = [];
                    switch (t.behavior) {
                    case he.FLIP:
                        p = [n, i];
                        break;
                    case he.CLOCKWISE:
                        p = z(n);
                        break;
                    case he.COUNTERCLOCKWISE:
                        p = z(n, !0);
                        break;
                    default:
                        p = t.behavior;
                    }
                    return p.forEach(function(s, d) {
                        if (n !== s || p.length === d + 1)
                            return e;
                        n = e.placement.split('-')[0],
                        i = T(n);
                        var a = e.offsets.popper
                          , l = e.offsets.reference
                          , f = Z
                          , m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom)
                          , h = f(a.left) < f(o.left)
                          , c = f(a.right) > f(o.right)
                          , g = f(a.top) < f(o.top)
                          , u = f(a.bottom) > f(o.bottom)
                          , b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u
                          , y = -1 !== ['top', 'bottom'].indexOf(n)
                          , w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
                        (m || b || w) && (e.flipped = !0,
                        (m || b) && (n = p[d + 1]),
                        w && (r = G(r)),
                        e.placement = n + (r ? '-' + r : ''),
                        e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                        e = P(e.instance.modifiers, e, 'flip'))
                    }),
                    e
                },
                behavior: 'flip',
                padding: 5,
                boundariesElement: 'viewport'
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement
                      , o = t.split('-')[0]
                      , n = e.offsets
                      , i = n.popper
                      , r = n.reference
                      , p = -1 !== ['left', 'right'].indexOf(o)
                      , s = -1 === ['top', 'left'].indexOf(o);
                    return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0),
                    e.placement = T(t),
                    e.offsets.popper = g(i),
                    e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!q(e.instance.modifiers, 'hide', 'preventOverflow'))
                        return e;
                    var t = e.offsets.reference
                      , o = D(e.instance.modifiers, function(e) {
                        return 'preventOverflow' === e.name
                    }).boundaries;
                    if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (!0 === e.hide)
                            return e;
                        e.hide = !0,
                        e.attributes['x-out-of-boundaries'] = ''
                    } else {
                        if (!1 === e.hide)
                            return e;
                        e.hide = !1,
                        e.attributes['x-out-of-boundaries'] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var o = t.x
                      , n = t.y
                      , i = e.offsets.popper
                      , r = D(e.instance.modifiers, function(e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration;
                    void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration : r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    }, h = {
                        left: Z(i.left),
                        top: Q(i.top),
                        bottom: Q(i.bottom),
                        right: Z(i.right)
                    }, c = 'bottom' === o ? 'top' : 'bottom', g = 'right' === n ? 'left' : 'right', b = B('transform');
                    if (d = 'bottom' == c ? -f.height + h.bottom : h.top,
                    s = 'right' == g ? -f.width + h.right : h.left,
                    a && b)
                        m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)',
                        m[c] = 0,
                        m[g] = 0,
                        m.willChange = 'transform';
                    else {
                        var y = 'bottom' == c ? -1 : 1
                          , w = 'right' == g ? -1 : 1;
                        m[c] = d * y,
                        m[g] = s * w,
                        m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({}, E, e.attributes),
                    e.styles = le({}, m, e.styles),
                    e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles),
                    e
                },
                gpuAcceleration: !0,
                x: 'bottom',
                y: 'right'
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return j(e.instance.popper, e.styles),
                    K(e.instance.popper, e.attributes),
                    e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
                    e
                },
                onLoad: function(e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed)
                      , p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p),
                    j(t, {
                        position: o.positionFixed ? 'fixed' : 'absolute'
                    }),
                    o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ce
});

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = t || self).bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, g, u) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function l(o) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {}
              , e = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable
            }))),
            e.forEach(function(t) {
                var e, n, i;
                e = o,
                i = r[n = t],
                n in e ? Object.defineProperty(e, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = i
            })
        }
        return o
    }
    g = g && g.hasOwnProperty("default") ? g.default : g,
    u = u && u.hasOwnProperty("default") ? u.default : u;
    var e = "transitionend";
    function n(t) {
        var e = this
          , n = !1;
        return g(this).one(_.TRANSITION_END, function() {
            n = !0
        }),
        setTimeout(function() {
            n || _.triggerTransitionEnd(e)
        }, t),
        this
    }
    var _ = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(t) {
            for (; t += ~~(1e6 * Math.random()),
            document.getElementById(t); )
                ;
            return t
        },
        getSelectorFromElement: function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        getTransitionDurationFromElement: function(t) {
            if (!t)
                return 0;
            var e = g(t).css("transition-duration")
              , n = g(t).css("transition-delay")
              , i = parseFloat(e)
              , o = parseFloat(n);
            return i || o ? (e = e.split(",")[0],
            n = n.split(",")[0],
            1e3 * (parseFloat(e) + parseFloat(n))) : 0
        },
        reflow: function(t) {
            return t.offsetHeight
        },
        triggerTransitionEnd: function(t) {
            g(t).trigger(e)
        },
        supportsTransitionEnd: function() {
            return Boolean(e)
        },
        isElement: function(t) {
            return (t[0] || t).nodeType
        },
        typeCheckConfig: function(t, e, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i]
                      , r = e[i]
                      , s = r && _.isElement(r) ? "element" : (a = r,
                    {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s))
                        throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(t) {
            if (!document.documentElement.attachShadow)
                return null;
            if ("function" != typeof t.getRootNode)
                return t instanceof ShadowRoot ? t : t.parentNode ? _.findShadowRoot(t.parentNode) : null;
            var e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
    };
    g.fn.emulateTransitionEnd = n,
    g.event.special[_.TRANSITION_END] = {
        bindType: e,
        delegateType: e,
        handle: function(t) {
            if (g(t.target).is(this))
                return t.handleObj.handler.apply(this, arguments)
        }
    };
    var o = "alert"
      , r = "bs.alert"
      , a = "." + r
      , c = g.fn[o]
      , h = {
        CLOSE: "close" + a,
        CLOSED: "closed" + a,
        CLICK_DATA_API: "click" + a + ".data-api"
    }
      , f = "alert"
      , d = "fade"
      , m = "show"
      , p = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, r),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = _.getSelectorFromElement(t)
              , n = !1;
            return e && (n = document.querySelector(e)),
            n || (n = g(t).closest("." + f)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = g.Event(h.CLOSE);
            return g(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (g(e).removeClass(m),
            g(e).hasClass(d)) {
                var t = _.getTransitionDurationFromElement(e);
                g(e).one(_.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            g(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(r);
                e || (e = new i(this),
                t.data(r, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        i._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)),
    g.fn[o] = p._jQueryInterface,
    g.fn[o].Constructor = p,
    g.fn[o].noConflict = function() {
        return g.fn[o] = c,
        p._jQueryInterface
    }
    ;
    var v = "button"
      , y = "bs.button"
      , E = "." + y
      , C = ".data-api"
      , T = g.fn[v]
      , S = "active"
      , b = "btn"
      , I = "focus"
      , D = '[data-toggle^="button"]'
      , w = '[data-toggle="buttons"]'
      , A = 'input:not([type="hidden"])'
      , N = ".active"
      , O = ".btn"
      , k = {
        CLICK_DATA_API: "click" + E + C,
        FOCUS_BLUR_DATA_API: "focus" + E + C + " blur" + E + C
    }
      , P = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = g(this._element).closest(w)[0];
            if (n) {
                var i = this._element.querySelector(A);
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && this._element.classList.contains(S))
                            t = !1;
                        else {
                            var o = n.querySelector(N);
                            o && g(o).removeClass(S)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !this._element.classList.contains(S),
                        g(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(S)),
            t && g(this._element).toggleClass(S)
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, y),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(y);
                t || (t = new n(this),
                g(this).data(y, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        n
    }();
    g(document).on(k.CLICK_DATA_API, D, function(t) {
        t.preventDefault();
        var e = t.target;
        g(e).hasClass(b) || (e = g(e).closest(O)),
        P._jQueryInterface.call(g(e), "toggle")
    }).on(k.FOCUS_BLUR_DATA_API, D, function(t) {
        var e = g(t.target).closest(O)[0];
        g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
    g.fn[v] = P._jQueryInterface,
    g.fn[v].Constructor = P,
    g.fn[v].noConflict = function() {
        return g.fn[v] = T,
        P._jQueryInterface
    }
    ;
    var L = "carousel"
      , j = "bs.carousel"
      , H = "." + j
      , R = ".data-api"
      , x = g.fn[L]
      , F = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , U = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , W = "next"
      , q = "prev"
      , M = "left"
      , K = "right"
      , Q = {
        SLIDE: "slide" + H,
        SLID: "slid" + H,
        KEYDOWN: "keydown" + H,
        MOUSEENTER: "mouseenter" + H,
        MOUSELEAVE: "mouseleave" + H,
        TOUCHSTART: "touchstart" + H,
        TOUCHMOVE: "touchmove" + H,
        TOUCHEND: "touchend" + H,
        POINTERDOWN: "pointerdown" + H,
        POINTERUP: "pointerup" + H,
        DRAG_START: "dragstart" + H,
        LOAD_DATA_API: "load" + H + R,
        CLICK_DATA_API: "click" + H + R
    }
      , B = "carousel"
      , V = "active"
      , Y = "slide"
      , z = "carousel-item-right"
      , X = "carousel-item-left"
      , $ = "carousel-item-next"
      , G = "carousel-item-prev"
      , J = "pointer-event"
      , Z = ".active"
      , tt = ".active.carousel-item"
      , et = ".carousel-item"
      , nt = ".carousel-item img"
      , it = ".carousel-item-next, .carousel-item-prev"
      , ot = ".carousel-indicators"
      , rt = "[data-slide], [data-slide-to]"
      , st = '[data-ride="carousel"]'
      , at = {
        TOUCH: "touch",
        PEN: "pen"
    }
      , lt = function() {
        function r(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._element = t,
            this._indicatorsElement = this._element.querySelector(ot),
            this._touchSupported = "ontouchstart"in document.documentElement || 0 < navigator.maxTouchPoints,
            this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent),
            this._addEventListeners()
        }
        var t = r.prototype;
        return t.next = function() {
            this._isSliding || this._slide(W)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && g(this._element).is(":visible") && "hidden" !== g(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(q)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            this._element.querySelector(it) && (_.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = this._element.querySelector(tt);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    g(this._element).one(Q.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var i = n < t ? W : q;
                    this._slide(i, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            g(this._element).off(H),
            g.removeData(this._element, j),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, F, t),
            _.typeCheckConfig(L, t, U),
            t
        }
        ,
        t._handleSwipe = function() {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
                var e = t / this.touchDeltaX;
                0 < e && this.prev(),
                e < 0 && this.next()
            }
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && g(this._element).on(Q.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && g(this._element).on(Q.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            this._config.touch && this._addTouchEventListeners()
        }
        ,
        t._addTouchEventListeners = function() {
            var n = this;
            if (this._touchSupported) {
                var e = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = t.originalEvent.clientX : n._pointerEvent || (n.touchStartX = t.originalEvent.touches[0].clientX)
                }
                  , i = function(t) {
                    n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                    n._handleSwipe(),
                    "hover" === n._config.pause && (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval))
                };
                g(this._element.querySelectorAll(nt)).on(Q.DRAG_START, function(t) {
                    return t.preventDefault()
                }),
                this._pointerEvent ? (g(this._element).on(Q.POINTERDOWN, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.POINTERUP, function(t) {
                    return i(t)
                }),
                this._element.classList.add(J)) : (g(this._element).on(Q.TOUCHSTART, function(t) {
                    return e(t)
                }),
                g(this._element).on(Q.TOUCHMOVE, function(t) {
                    var e;
                    (e = t).originalEvent.touches && 1 < e.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = e.originalEvent.touches[0].clientX - n.touchStartX
                }),
                g(this._element).on(Q.TOUCHEND, function(t) {
                    return i(t)
                }))
            }
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case 37:
                    t.preventDefault(),
                    this.prev();
                    break;
                case 39:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(et)) : [],
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === W
              , i = t === q
              , o = this._getItemIndex(e)
              , r = this._items.length - 1;
            if ((i && 0 === o || n && o === r) && !this._config.wrap)
                return e;
            var s = (o + (t === q ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , i = this._getItemIndex(this._element.querySelector(tt))
              , o = g.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n
            });
            return g(this._element).trigger(o),
            o
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z));
                g(e).removeClass(V);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && g(n).addClass(V)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, i, o, r = this, s = this._element.querySelector(tt), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean(this._interval);
            if (o = t === W ? (n = X,
            i = $,
            M) : (n = z,
            i = G,
            K),
            l && g(l).hasClass(V))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() && s && l) {
                this._isSliding = !0,
                h && this.pause(),
                this._setActiveIndicatorElement(l);
                var u = g.Event(Q.SLID, {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                });
                if (g(this._element).hasClass(Y)) {
                    g(l).addClass(i),
                    _.reflow(l),
                    g(s).addClass(n),
                    g(l).addClass(n);
                    var f = parseInt(l.getAttribute("data-interval"), 10);
                    this._config.interval = f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
                    f) : this._config.defaultInterval || this._config.interval;
                    var d = _.getTransitionDurationFromElement(s);
                    g(s).one(_.TRANSITION_END, function() {
                        g(l).removeClass(n + " " + i).addClass(V),
                        g(s).removeClass(V + " " + i + " " + n),
                        r._isSliding = !1,
                        setTimeout(function() {
                            return g(r._element).trigger(u)
                        }, 0)
                    }).emulateTransitionEnd(d)
                } else
                    g(s).removeClass(V),
                    g(l).addClass(V),
                    this._isSliding = !1,
                    g(this._element).trigger(u);
                h && this.cycle()
            }
        }
        ,
        r._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this).data(j)
                  , e = l({}, F, g(this).data());
                "object" == typeof i && (e = l({}, e, i));
                var n = "string" == typeof i ? i : e.slide;
                if (t || (t = new r(this,e),
                g(this).data(j, t)),
                "number" == typeof i)
                    t.to(i);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && e.ride && (t.pause(),
                    t.cycle())
            })
        }
        ,
        r._dataApiClickHandler = function(t) {
            var e = _.getSelectorFromElement(this);
            if (e) {
                var n = g(e)[0];
                if (n && g(n).hasClass(B)) {
                    var i = l({}, g(n).data(), g(this).data())
                      , o = this.getAttribute("data-slide-to");
                    o && (i.interval = !1),
                    r._jQueryInterface.call(g(n), i),
                    o && g(n).data(j).to(o),
                    t.preventDefault()
                }
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return F
            }
        }]),
        r
    }();
    g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(st)), e = 0, n = t.length; e < n; e++) {
            var i = g(t[e]);
            lt._jQueryInterface.call(i, i.data())
        }
    }),
    g.fn[L] = lt._jQueryInterface,
    g.fn[L].Constructor = lt,
    g.fn[L].noConflict = function() {
        return g.fn[L] = x,
        lt._jQueryInterface
    }
    ;
    var ct = "collapse"
      , ht = "bs.collapse"
      , ut = "." + ht
      , ft = g.fn[ct]
      , dt = {
        toggle: !0,
        parent: ""
    }
      , gt = {
        toggle: "boolean",
        parent: "(string|element)"
    }
      , _t = {
        SHOW: "show" + ut,
        SHOWN: "shown" + ut,
        HIDE: "hide" + ut,
        HIDDEN: "hidden" + ut,
        CLICK_DATA_API: "click" + ut + ".data-api"
    }
      , mt = "show"
      , pt = "collapse"
      , vt = "collapsing"
      , yt = "collapsed"
      , Et = "width"
      , Ct = "height"
      , Tt = ".show, .collapsing"
      , St = '[data-toggle="collapse"]'
      , bt = function() {
        function a(e, t) {
            this._isTransitioning = !1,
            this._element = e,
            this._config = this._getConfig(t),
            this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n = [].slice.call(document.querySelectorAll(St)), i = 0, o = n.length; i < o; i++) {
                var r = n[i]
                  , s = _.getSelectorFromElement(r)
                  , a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                    return t === e
                });
                null !== s && 0 < a.length && (this._selector = s,
                this._triggerArray.push(r))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype;
        return t.toggle = function() {
            g(this._element).hasClass(mt) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !g(this._element).hasClass(mt) && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t) {
                return "string" == typeof n._config.parent ? t.getAttribute("data-parent") === n._config.parent : t.classList.contains(pt)
            })).length && (t = null),
            !(t && (e = g(t).not(this._selector).data(ht)) && e._isTransitioning))) {
                var i = g.Event(_t.SHOW);
                if (g(this._element).trigger(i),
                !i.isDefaultPrevented()) {
                    t && (a._jQueryInterface.call(g(t).not(this._selector), "hide"),
                    e || g(t).data(ht, null));
                    var o = this._getDimension();
                    g(this._element).removeClass(pt).addClass(vt),
                    this._element.style[o] = 0,
                    this._triggerArray.length && g(this._triggerArray).removeClass(yt).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var r = "scroll" + (o[0].toUpperCase() + o.slice(1))
                      , s = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                        n._element.style[o] = "",
                        n.setTransitioning(!1),
                        g(n._element).trigger(_t.SHOWN)
                    }).emulateTransitionEnd(s),
                    this._element.style[o] = this._element[r] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && g(this._element).hasClass(mt)) {
                var e = g.Event(_t.HIDE);
                if (g(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    _.reflow(this._element),
                    g(this._element).addClass(vt).removeClass(pt).removeClass(mt);
                    var i = this._triggerArray.length;
                    if (0 < i)
                        for (var o = 0; o < i; o++) {
                            var r = this._triggerArray[o]
                              , s = _.getSelectorFromElement(r);
                            if (null !== s)
                                g([].slice.call(document.querySelectorAll(s))).hasClass(mt) || g(r).addClass(yt).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    var a = _.getTransitionDurationFromElement(this._element);
                    g(this._element).one(_.TRANSITION_END, function() {
                        t.setTransitioning(!1),
                        g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ht),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = l({}, dt, t)).toggle = Boolean(t.toggle),
            _.typeCheckConfig(ct, t, gt),
            t
        }
        ,
        t._getDimension = function() {
            return g(this._element).hasClass(Et) ? Et : Ct
        }
        ,
        t._getParent = function() {
            var t, n = this;
            _.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]'
              , i = [].slice.call(t.querySelectorAll(e));
            return g(i).each(function(t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            var n = g(t).hasClass(mt);
            e.length && g(e).toggleClass(yt, !n).attr("aria-expanded", n)
        }
        ,
        a._getTargetFromElement = function(t) {
            var e = _.getSelectorFromElement(t);
            return e ? document.querySelector(e) : null
        }
        ,
        a._jQueryInterface = function(i) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(ht)
                  , n = l({}, dt, t.data(), "object" == typeof i && i ? i : {});
                if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || (e = new a(this,n),
                t.data(ht, e)),
                "string" == typeof i) {
                    if ("undefined" == typeof e[i])
                        throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        }
        ,
        s(a, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return dt
            }
        }]),
        a
    }();
    g(document).on(_t.CLICK_DATA_API, St, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = g(this)
          , e = _.getSelectorFromElement(this)
          , i = [].slice.call(document.querySelectorAll(e));
        g(i).each(function() {
            var t = g(this)
              , e = t.data(ht) ? "toggle" : n.data();
            bt._jQueryInterface.call(t, e)
        })
    }),
    g.fn[ct] = bt._jQueryInterface,
    g.fn[ct].Constructor = bt,
    g.fn[ct].noConflict = function() {
        return g.fn[ct] = ft,
        bt._jQueryInterface
    }
    ;
    var It = "dropdown"
      , Dt = "bs.dropdown"
      , wt = "." + Dt
      , At = ".data-api"
      , Nt = g.fn[It]
      , Ot = new RegExp("38|40|27")
      , kt = {
        HIDE: "hide" + wt,
        HIDDEN: "hidden" + wt,
        SHOW: "show" + wt,
        SHOWN: "shown" + wt,
        CLICK: "click" + wt,
        CLICK_DATA_API: "click" + wt + At,
        KEYDOWN_DATA_API: "keydown" + wt + At,
        KEYUP_DATA_API: "keyup" + wt + At
    }
      , Pt = "disabled"
      , Lt = "show"
      , jt = "dropup"
      , Ht = "dropright"
      , Rt = "dropleft"
      , xt = "dropdown-menu-right"
      , Ft = "position-static"
      , Ut = '[data-toggle="dropdown"]'
      , Wt = ".dropdown form"
      , qt = ".dropdown-menu"
      , Mt = ".navbar-nav"
      , Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
      , Qt = "top-start"
      , Bt = "top-end"
      , Vt = "bottom-start"
      , Yt = "bottom-end"
      , zt = "right-start"
      , Xt = "left-start"
      , $t = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    }
      , Gt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    }
      , Jt = function() {
        function c(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = c.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
                var t = c._getParentFromElement(this._element)
                  , e = g(this._menu).hasClass(Lt);
                if (c._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , i = g.Event(kt.SHOW, n);
                    if (g(t).trigger(i),
                    !i.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if ("undefined" == typeof u)
                                throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var o = this._element;
                            "parent" === this._config.reference ? o = t : _.isElement(this._config.reference) && (o = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (o = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && g(t).addClass(Ft),
                            this._popper = new u(o,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === g(t).closest(Mt).length && g(document.body).children().on("mouseover", null, g.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        g(this._menu).toggleClass(Lt),
                        g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.show = function() {
            if (!(this._element.disabled || g(this._element).hasClass(Pt) || g(this._menu).hasClass(Lt))) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.SHOW, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
            }
        }
        ,
        t.hide = function() {
            if (!this._element.disabled && !g(this._element).hasClass(Pt) && g(this._menu).hasClass(Lt)) {
                var t = {
                    relatedTarget: this._element
                }
                  , e = g.Event(kt.HIDE, t)
                  , n = c._getParentFromElement(this._element);
                g(n).trigger(e),
                e.isDefaultPrevented() || (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, Dt),
            g(this._element).off(wt),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            g(this._element).on(kt.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, this.constructor.Default, g(this._element).data(), t),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = c._getParentFromElement(this._element);
                t && (this._menu = t.querySelector(qt))
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = g(this._element.parentNode)
              , e = Vt;
            return t.hasClass(jt) ? (e = Qt,
            g(this._menu).hasClass(xt) && (e = Bt)) : t.hasClass(Ht) ? e = zt : t.hasClass(Rt) ? e = Xt : g(this._menu).hasClass(xt) && (e = Yt),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < g(this._element).closest(".navbar").length
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}),
                t
            }
            : t.offset = this._config.offset,
            t
        }
        ,
        t._getPopperConfig = function() {
            var t = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (t.modifiers.applyStyle = {
                enabled: !1
            }),
            t
        }
        ,
        c._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(Dt);
                if (t || (t = new c(this,"object" == typeof e ? e : null),
                g(this).data(Dt, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        c._clearMenus = function(t) {
            if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                for (var e = [].slice.call(document.querySelectorAll(Ut)), n = 0, i = e.length; n < i; n++) {
                    var o = c._getParentFromElement(e[n])
                      , r = g(e[n]).data(Dt)
                      , s = {
                        relatedTarget: e[n]
                    };
                    if (t && "click" === t.type && (s.clickEvent = t),
                    r) {
                        var a = r._menu;
                        if (g(o).hasClass(Lt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && g.contains(o, t.target))) {
                            var l = g.Event(kt.HIDE, s);
                            g(o).trigger(l),
                            l.isDefaultPrevented() || ("ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            g(a).removeClass(Lt),
                            g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                        }
                    }
                }
        }
        ,
        c._getParentFromElement = function(t) {
            var e, n = _.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)),
            e || t.parentNode
        }
        ,
        c._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || g(t.target).closest(qt).length)) : Ot.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Pt))) {
                var e = c._getParentFromElement(this)
                  , n = g(e).hasClass(Lt);
                if (n && (!n || 27 !== t.which && 32 !== t.which)) {
                    var i = [].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var o = i.indexOf(t.target);
                        38 === t.which && 0 < o && o--,
                        40 === t.which && o < i.length - 1 && o++,
                        o < 0 && (o = 0),
                        i[o].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var r = e.querySelector(Ut);
                        g(r).trigger("focus")
                    }
                    g(this).trigger("click")
                }
            }
        }
        ,
        s(c, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return $t
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Gt
            }
        }]),
        c
    }();
    g(document).on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API + " " + kt.KEYUP_DATA_API, Jt._clearMenus).on(kt.CLICK_DATA_API, Ut, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        Jt._jQueryInterface.call(g(this), "toggle")
    }).on(kt.CLICK_DATA_API, Wt, function(t) {
        t.stopPropagation()
    }),
    g.fn[It] = Jt._jQueryInterface,
    g.fn[It].Constructor = Jt,
    g.fn[It].noConflict = function() {
        return g.fn[It] = Nt,
        Jt._jQueryInterface
    }
    ;
    var Zt = "modal"
      , te = "bs.modal"
      , ee = "." + te
      , ne = g.fn[Zt]
      , ie = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    }
      , oe = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    }
      , re = {
        HIDE: "hide" + ee,
        HIDDEN: "hidden" + ee,
        SHOW: "show" + ee,
        SHOWN: "shown" + ee,
        FOCUSIN: "focusin" + ee,
        RESIZE: "resize" + ee,
        CLICK_DISMISS: "click.dismiss" + ee,
        KEYDOWN_DISMISS: "keydown.dismiss" + ee,
        MOUSEUP_DISMISS: "mouseup.dismiss" + ee,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee,
        CLICK_DATA_API: "click" + ee + ".data-api"
    }
      , se = "modal-dialog-scrollable"
      , ae = "modal-scrollbar-measure"
      , le = "modal-backdrop"
      , ce = "modal-open"
      , he = "fade"
      , ue = "show"
      , fe = ".modal-dialog"
      , de = ".modal-body"
      , ge = '[data-toggle="modal"]'
      , _e = '[data-dismiss="modal"]'
      , me = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , pe = ".sticky-top"
      , ve = function() {
        function o(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = t.querySelector(fe),
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollbarWidth = 0
        }
        var t = o.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
                g(this._element).hasClass(he) && (this._isTransitioning = !0);
                var n = g.Event(re.SHOW, {
                    relatedTarget: t
                });
                g(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function(t) {
                    return e.hide(t)
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function() {
                    g(e._element).one(re.MOUSEUP_DISMISS, function(t) {
                        g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            this._isShown && !this._isTransitioning) {
                var n = g.Event(re.HIDE);
                if (g(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var i = g(this._element).hasClass(he);
                    if (i && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    g(document).off(re.FOCUSIN),
                    g(this._element).removeClass(ue),
                    g(this._element).off(re.CLICK_DISMISS),
                    g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                    i) {
                        var o = _.getTransitionDurationFromElement(this._element);
                        g(this._element).one(_.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(o)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            [window, this._element, this._dialog].forEach(function(t) {
                return g(t).off(ee)
            }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._isTransitioning = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ie, t),
            _.typeCheckConfig(Zt, t, oe),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = g(this._element).hasClass(he);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            g(this._dialog).hasClass(se) ? this._dialog.querySelector(de).scrollTop = 0 : this._element.scrollTop = 0,
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus();
            var i = g.Event(re.SHOWN, {
                relatedTarget: t
            })
              , o = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                g(e._element).trigger(i)
            };
            if (n) {
                var r = _.getTransitionDurationFromElement(this._dialog);
                g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else
                o()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            g(document).off(re.FOCUSIN).on(re.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === g(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? g(this._element).on(re.KEYDOWN_DISMISS, function(t) {
                27 === t.which && (t.preventDefault(),
                e.hide())
            }) : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? g(window).on(re.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : g(window).off(re.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (g(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = g(this._element).hasClass(he) ? he : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = le,
                n && this._backdrop.classList.add(n),
                g(this._backdrop).appendTo(document.body),
                g(this._element).on(re.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && _.reflow(this._backdrop),
                g(this._backdrop).addClass(ue),
                !t)
                    return;
                if (!n)
                    return void t();
                var i = _.getTransitionDurationFromElement(this._backdrop);
                g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
                g(this._backdrop).removeClass(ue);
                var o = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (g(this._element).hasClass(he)) {
                    var r = _.getTransitionDurationFromElement(this._backdrop);
                    g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var o = this;
            if (this._isBodyOverflowing) {
                var t = [].slice.call(document.querySelectorAll(me))
                  , e = [].slice.call(document.querySelectorAll(pe));
                g(t).each(function(t, e) {
                    var n = e.style.paddingRight
                      , i = g(e).css("padding-right");
                    g(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px")
                }),
                g(e).each(function(t, e) {
                    var n = e.style.marginRight
                      , i = g(e).css("margin-right");
                    g(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight
                  , i = g(document.body).css("padding-right");
                g(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
            g(document.body).addClass(ce)
        }
        ,
        t._resetScrollbar = function() {
            var t = [].slice.call(document.querySelectorAll(me));
            g(t).each(function(t, e) {
                var n = g(e).data("padding-right");
                g(e).removeData("padding-right"),
                e.style.paddingRight = n || ""
            });
            var e = [].slice.call(document.querySelectorAll("" + pe));
            g(e).each(function(t, e) {
                var n = g(e).data("margin-right");
                "undefined" != typeof n && g(e).css("margin-right", n).removeData("margin-right")
            });
            var n = g(document.body).data("padding-right");
            g(document.body).removeData("padding-right"),
            document.body.style.paddingRight = n || ""
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = ae,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        o._jQueryInterface = function(n, i) {
            return this.each(function() {
                var t = g(this).data(te)
                  , e = l({}, ie, g(this).data(), "object" == typeof n && n ? n : {});
                if (t || (t = new o(this,e),
                g(this).data(te, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else
                    e.show && t.show(i)
            })
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return ie
            }
        }]),
        o
    }();
    g(document).on(re.CLICK_DATA_API, ge, function(t) {
        var e, n = this, i = _.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var o = g(e).data(te) ? "toggle" : l({}, g(e).data(), g(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var r = g(e).one(re.SHOW, function(t) {
            t.isDefaultPrevented() || r.one(re.HIDDEN, function() {
                g(n).is(":visible") && n.focus()
            })
        });
        ve._jQueryInterface.call(g(e), o, this)
    }),
    g.fn[Zt] = ve._jQueryInterface,
    g.fn[Zt].Constructor = ve,
    g.fn[Zt].noConflict = function() {
        return g.fn[Zt] = ne,
        ve._jQueryInterface
    }
    ;
    var ye = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]
      , Ee = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }
      , Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , Te = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;
    function Se(t, s, e) {
        if (0 === t.length)
            return t;
        if (e && "function" == typeof e)
            return e(t);
        for (var n = (new window.DOMParser).parseFromString(t, "text/html"), a = Object.keys(s), l = [].slice.call(n.body.querySelectorAll("*")), i = function(t, e) {
            var n = l[t]
              , i = n.nodeName.toLowerCase();
            if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                return n.parentNode.removeChild(n),
                "continue";
            var o = [].slice.call(n.attributes)
              , r = [].concat(s["*"] || [], s[i] || []);
            o.forEach(function(t) {
                (function(t, e) {
                    var n = t.nodeName.toLowerCase();
                    if (-1 !== e.indexOf(n))
                        return -1 === ye.indexOf(n) || Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te));
                    for (var i = e.filter(function(t) {
                        return t instanceof RegExp
                    }), o = 0, r = i.length; o < r; o++)
                        if (n.match(i[o]))
                            return !0;
                    return !1
                }
                )(t, r) || n.removeAttribute(t.nodeName)
            })
        }, o = 0, r = l.length; o < r; o++)
            i(o);
        return n.body.innerHTML
    }
    var be = "tooltip"
      , Ie = "bs.tooltip"
      , De = "." + Ie
      , we = g.fn[be]
      , Ae = "bs-tooltip"
      , Ne = new RegExp("(^|\\s)" + Ae + "\\S+","g")
      , Oe = ["sanitize", "whiteList", "sanitizeFn"]
      , ke = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(number|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacement: "(string|array)",
        boundary: "(string|element)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        whiteList: "object"
    }
      , Pe = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: "right",
        BOTTOM: "bottom",
        LEFT: "left"
    }
      , Le = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
        sanitize: !0,
        sanitizeFn: null,
        whiteList: Ee
    }
      , je = "show"
      , He = "out"
      , Re = {
        HIDE: "hide" + De,
        HIDDEN: "hidden" + De,
        SHOW: "show" + De,
        SHOWN: "shown" + De,
        INSERTED: "inserted" + De,
        CLICK: "click" + De,
        FOCUSIN: "focusin" + De,
        FOCUSOUT: "focusout" + De,
        MOUSEENTER: "mouseenter" + De,
        MOUSELEAVE: "mouseleave" + De
    }
      , xe = "fade"
      , Fe = "show"
      , Ue = ".tooltip-inner"
      , We = ".arrow"
      , qe = "hover"
      , Me = "focus"
      , Ke = "click"
      , Qe = "manual"
      , Be = function() {
        function i(t, e) {
            if ("undefined" == typeof u)
                throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = g(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    g(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (g(this.getTipElement()).hasClass(Fe))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && g(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === g(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = g.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                g(this.element).trigger(t);
                var n = _.findShadowRoot(this.element)
                  , i = g.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !i)
                    return;
                var o = this.getTipElement()
                  , r = _.getUID(this.constructor.NAME);
                o.setAttribute("id", r),
                this.element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && g(o).addClass(xe);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement
                  , a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                g(o).data(this.constructor.DATA_KEY, this),
                g.contains(this.element.ownerDocument.documentElement, this.tip) || g(o).appendTo(l),
                g(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new u(this.element,o,{
                    placement: a,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: We
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        return e._handlePopperPlacementChange(t)
                    }
                }),
                g(o).addClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().on("mouseover", null, g.noop);
                var c = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    g(e.element).trigger(e.constructor.Event.SHOWN),
                    t === He && e._leave(null, e)
                };
                if (g(this.tip).hasClass(xe)) {
                    var h = _.getTransitionDurationFromElement(this.tip);
                    g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
                } else
                    c()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , i = g.Event(this.constructor.Event.HIDE)
              , o = function() {
                e._hoverState !== je && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                g(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (g(this.element).trigger(i),
            !i.isDefaultPrevented()) {
                if (g(n).removeClass(Fe),
                "ontouchstart"in document.documentElement && g(document.body).children().off("mouseover", null, g.noop),
                this._activeTrigger[Ke] = !1,
                this._activeTrigger[Me] = !1,
                this._activeTrigger[qe] = !1,
                g(this.tip).hasClass(xe)) {
                    var r = _.getTransitionDurationFromElement(n);
                    g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
                } else
                    o();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass(Ae + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = this.getTipElement();
            this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
            g(t).removeClass(xe + " " + Fe)
        }
        ,
        t.setElementContent = function(t, e) {
            "object" != typeof e || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
            t.html(e)) : t.text(e) : this.config.html ? g(e).parent().is(t) || t.empty().append(e) : t.text(g(e).text())
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getOffset = function() {
            var e = this
              , t = {};
            return "function" == typeof this.config.offset ? t.fn = function(t) {
                return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}),
                t
            }
            : t.offset = this.config.offset,
            t
        }
        ,
        t._getContainer = function() {
            return !1 === this.config.container ? document.body : _.isElement(this.config.container) ? g(this.config.container) : g(document).find(this.config.container)
        }
        ,
        t._getAttachment = function(t) {
            return Pe[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var i = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    g(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(t) {
                        return i.toggle(t)
                    });
                else if (t !== Qe) {
                    var e = t === qe ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN
                      , n = t === qe ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                    g(i.element).on(e, i.config.selector, function(t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function(t) {
                        return i._leave(t)
                    })
                }
            }),
            g(this.element).closest(".modal").on("hide.bs.modal", function() {
                i.element && i.hide()
            }),
            this.config.selector ? this.config = l({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je ? e._hoverState = je : (clearTimeout(e._timeout),
            e._hoverState = je,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === je && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || g(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? Me : qe] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = He,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === He && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            var e = g(this.element).data();
            return Object.keys(e).forEach(function(t) {
                -1 !== Oe.indexOf(t) && delete e[t]
            }),
            "number" == typeof (t = l({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize && (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ne);
            null !== e && e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            var e = t.instance;
            this.tip = e.popper,
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (g(t).removeClass(xe),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ie)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ie, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Le
            }
        }, {
            key: "NAME",
            get: function() {
                return be
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ie
            }
        }, {
            key: "Event",
            get: function() {
                return Re
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return De
            }
        }, {
            key: "DefaultType",
            get: function() {
                return ke
            }
        }]),
        i
    }();
    g.fn[be] = Be._jQueryInterface,
    g.fn[be].Constructor = Be,
    g.fn[be].noConflict = function() {
        return g.fn[be] = we,
        Be._jQueryInterface
    }
    ;
    var Ve = "popover"
      , Ye = "bs.popover"
      , ze = "." + Ye
      , Xe = g.fn[Ve]
      , $e = "bs-popover"
      , Ge = new RegExp("(^|\\s)" + $e + "\\S+","g")
      , Je = l({}, Be.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    })
      , Ze = l({}, Be.DefaultType, {
        content: "(string|element|function)"
    })
      , tn = "fade"
      , en = "show"
      , nn = ".popover-header"
      , on = ".popover-body"
      , rn = {
        HIDE: "hide" + ze,
        HIDDEN: "hidden" + ze,
        SHOW: "show" + ze,
        SHOWN: "shown" + ze,
        INSERTED: "inserted" + ze,
        CLICK: "click" + ze,
        FOCUSIN: "focusin" + ze,
        FOCUSOUT: "focusout" + ze,
        MOUSEENTER: "mouseenter" + ze,
        MOUSELEAVE: "mouseleave" + ze
    }
      , sn = function(t) {
        var e, n;
        function i() {
            return t.apply(this, arguments) || this
        }
        n = t,
        (e = i).prototype = Object.create(n.prototype),
        (e.prototype.constructor = e).__proto__ = n;
        var o = i.prototype;
        return o.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        o.addAttachmentClass = function(t) {
            g(this.getTipElement()).addClass($e + "-" + t)
        }
        ,
        o.getTipElement = function() {
            return this.tip = this.tip || g(this.config.template)[0],
            this.tip
        }
        ,
        o.setContent = function() {
            var t = g(this.getTipElement());
            this.setElementContent(t.find(nn), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + " " + en)
        }
        ,
        o._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        o._cleanTipClass = function() {
            var t = g(this.getTipElement())
              , e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this).data(Ye)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this,e),
                g(this).data(Ye, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Je
            }
        }, {
            key: "NAME",
            get: function() {
                return Ve
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Ye
            }
        }, {
            key: "Event",
            get: function() {
                return rn
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return ze
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Ze
            }
        }]),
        i
    }(Be);
    g.fn[Ve] = sn._jQueryInterface,
    g.fn[Ve].Constructor = sn,
    g.fn[Ve].noConflict = function() {
        return g.fn[Ve] = Xe,
        sn._jQueryInterface
    }
    ;
    var an = "scrollspy"
      , ln = "bs.scrollspy"
      , cn = "." + ln
      , hn = g.fn[an]
      , un = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , fn = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , dn = {
        ACTIVATE: "activate" + cn,
        SCROLL: "scroll" + cn,
        LOAD_DATA_API: "load" + cn + ".data-api"
    }
      , gn = "dropdown-item"
      , _n = "active"
      , mn = '[data-spy="scroll"]'
      , pn = ".nav, .list-group"
      , vn = ".nav-link"
      , yn = ".nav-item"
      , En = ".list-group-item"
      , Cn = ".dropdown"
      , Tn = ".dropdown-item"
      , Sn = ".dropdown-toggle"
      , bn = "offset"
      , In = "position"
      , Dn = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + vn + "," + this._config.target + " " + En + "," + this._config.target + " " + Tn,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            g(this._scrollElement).on(dn.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? bn : In
              , o = "auto" === this._config.method ? t : this._config.method
              , r = o === In ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            [].slice.call(document.querySelectorAll(this._selector)).map(function(t) {
                var e, n = _.getSelectorFromElement(t);
                if (n && (e = document.querySelector(n)),
                e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height)
                        return [g(e)[o]().top + r, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = l({}, un, "object" == typeof t && t ? t : {})).target) {
                var e = g(t.target).attr("id");
                e || (e = _.getUID(an),
                g(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return _.typeCheckConfig(an, t, fn),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var i = this._targets[this._targets.length - 1];
                this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var o = this._offsets.length; o--; ) {
                    this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",").map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
              , n = g([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(gn) ? (n.closest(Cn).find(Sn).addClass(_n),
            n.addClass(_n)) : (n.addClass(_n),
            n.parents(pn).prev(vn + ", " + En).addClass(_n),
            n.parents(pn).prev(yn).children(vn).addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(t) {
                return t.classList.contains(_n)
            }).forEach(function(t) {
                return t.classList.remove(_n)
            })
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = g(this).data(ln);
                if (t || (t = new n(this,"object" == typeof e && e),
                g(this).data(ln, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "Default",
            get: function() {
                return un
            }
        }]),
        n
    }();
    g(window).on(dn.LOAD_DATA_API, function() {
        for (var t = [].slice.call(document.querySelectorAll(mn)), e = t.length; e--; ) {
            var n = g(t[e]);
            Dn._jQueryInterface.call(n, n.data())
        }
    }),
    g.fn[an] = Dn._jQueryInterface,
    g.fn[an].Constructor = Dn,
    g.fn[an].noConflict = function() {
        return g.fn[an] = hn,
        Dn._jQueryInterface
    }
    ;
    var wn = "bs.tab"
      , An = "." + wn
      , Nn = g.fn.tab
      , On = {
        HIDE: "hide" + An,
        HIDDEN: "hidden" + An,
        SHOW: "show" + An,
        SHOWN: "shown" + An,
        CLICK_DATA_API: "click" + An + ".data-api"
    }
      , kn = "dropdown-menu"
      , Pn = "active"
      , Ln = "disabled"
      , jn = "fade"
      , Hn = "show"
      , Rn = ".dropdown"
      , xn = ".nav, .list-group"
      , Fn = ".active"
      , Un = "> li > .active"
      , Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
      , qn = ".dropdown-toggle"
      , Mn = "> .dropdown-menu .active"
      , Kn = function() {
        function i(t) {
            this._element = t
        }
        var t = i.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && g(this._element).hasClass(Pn) || g(this._element).hasClass(Ln))) {
                var t, i, e = g(this._element).closest(xn)[0], o = _.getSelectorFromElement(this._element);
                if (e) {
                    var r = "UL" === e.nodeName || "OL" === e.nodeName ? Un : Fn;
                    i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
                }
                var s = g.Event(On.HIDE, {
                    relatedTarget: this._element
                })
                  , a = g.Event(On.SHOW, {
                    relatedTarget: i
                });
                if (i && g(i).trigger(s),
                g(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    o && (t = document.querySelector(o)),
                    this._activate(this._element, e);
                    var l = function() {
                        var t = g.Event(On.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = g.Event(On.SHOWN, {
                            relatedTarget: i
                        });
                        g(i).trigger(t),
                        g(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l) : l()
                }
            }
        }
        ,
        t.dispose = function() {
            g.removeData(this._element, wn),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var i = this
              , o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? g(e).children(Fn) : g(e).find(Un))[0]
              , r = n && o && g(o).hasClass(jn)
              , s = function() {
                return i._transitionComplete(t, o, n)
            };
            if (o && r) {
                var a = _.getTransitionDurationFromElement(o);
                g(o).removeClass(Hn).one(_.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                g(e).removeClass(Pn);
                var i = g(e.parentNode).find(Mn)[0];
                i && g(i).removeClass(Pn),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (g(t).addClass(Pn),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn)) {
                var o = g(t).closest(Rn)[0];
                if (o) {
                    var r = [].slice.call(o.querySelectorAll(qn));
                    g(r).addClass(Pn)
                }
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(wn);
                if (e || (e = new i(this),
                t.data(wn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }]),
        i
    }();
    g(document).on(On.CLICK_DATA_API, Wn, function(t) {
        t.preventDefault(),
        Kn._jQueryInterface.call(g(this), "show")
    }),
    g.fn.tab = Kn._jQueryInterface,
    g.fn.tab.Constructor = Kn,
    g.fn.tab.noConflict = function() {
        return g.fn.tab = Nn,
        Kn._jQueryInterface
    }
    ;
    var Qn = "toast"
      , Bn = "bs.toast"
      , Vn = "." + Bn
      , Yn = g.fn[Qn]
      , zn = {
        CLICK_DISMISS: "click.dismiss" + Vn,
        HIDE: "hide" + Vn,
        HIDDEN: "hidden" + Vn,
        SHOW: "show" + Vn,
        SHOWN: "shown" + Vn
    }
      , Xn = "fade"
      , $n = "hide"
      , Gn = "show"
      , Jn = "showing"
      , Zn = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ti = {
        animation: !0,
        autohide: !0,
        delay: 500
    }
      , ei = '[data-dismiss="toast"]'
      , ni = function() {
        function i(t, e) {
            this._element = t,
            this._config = this._getConfig(e),
            this._timeout = null,
            this._setListeners()
        }
        var t = i.prototype;
        return t.show = function() {
            var t = this;
            g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn);
            var e = function() {
                t._element.classList.remove(Jn),
                t._element.classList.add(Gn),
                g(t._element).trigger(zn.SHOWN),
                t._config.autohide && t.hide()
            };
            if (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        t.hide = function(t) {
            var e = this;
            this._element.classList.contains(Gn) && (g(this._element).trigger(zn.HIDE),
            t ? this._close() : this._timeout = setTimeout(function() {
                e._close()
            }, this._config.delay))
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            this._timeout = null,
            this._element.classList.contains(Gn) && this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            this._element = null,
            this._config = null
        }
        ,
        t._getConfig = function(t) {
            return t = l({}, ti, g(this._element).data(), "object" == typeof t && t ? t : {}),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
        }
        ,
        t._setListeners = function() {
            var t = this;
            g(this._element).on(zn.CLICK_DISMISS, ei, function() {
                return t.hide(!0)
            })
        }
        ,
        t._close = function() {
            var t = this
              , e = function() {
                t._element.classList.add($n),
                g(t._element).trigger(zn.HIDDEN)
            };
            if (this._element.classList.remove(Gn),
            this._config.animation) {
                var n = _.getTransitionDurationFromElement(this._element);
                g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
            } else
                e()
        }
        ,
        i._jQueryInterface = function(n) {
            return this.each(function() {
                var t = g(this)
                  , e = t.data(Bn);
                if (e || (e = new i(this,"object" == typeof n && n),
                t.data(Bn, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n](this)
                }
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return "4.3.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Zn
            }
        }, {
            key: "Default",
            get: function() {
                return ti
            }
        }]),
        i
    }();
    g.fn[Qn] = ni._jQueryInterface,
    g.fn[Qn].Constructor = ni,
    g.fn[Qn].noConflict = function() {
        return g.fn[Qn] = Yn,
        ni._jQueryInterface
    }
    ,
    function() {
        if ("undefined" == typeof g)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = g.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(),
    t.Util = _,
    t.Alert = p,
    t.Button = P,
    t.Carousel = lt,
    t.Collapse = bt,
    t.Dropdown = Jt,
    t.Modal = ve,
    t.Popover = sn,
    t.Scrollspy = Dn,
    t.Tab = Kn,
    t.Toast = ni,
    t.Tooltip = Be,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g > 0; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i,
                g -= 1;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return this._items = b.get().map(function(b) {
                return a(b)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"),
            b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            c = this.$element.children(b).width(),
            a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var e = -1
          , f = 30
          , g = this.width()
          , h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
            -1 === e
        }, this)),
        this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(),
                d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                    ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
        a = c + e,
        (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings
                      , e = c.center && Math.ceil(c.items / 2) || c.items
                      , f = c.center && -1 * e || 0
                      , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                      , h = this._core.clones().length
                      , i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                    c.loop && (g -= c.lazyLoadEager,
                    e++)); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }),
        a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
            d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.settings.lazyLoad
          , e = this._core.$stage.children().toArray().slice(b, c)
          , f = []
          , g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }),
        g = Math.max.apply(null, f),
        g <= 1 && d && this._previousHeight && (g = this._previousHeight),
        this._previousHeight = g,
        this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }),
            b.after(d),
            b.after(e)
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
        c.attr("height", h),
        c.attr("width", g),
        "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }
    ,
    e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
        c = c || this._core.settings.autoplayTimeout,
        e = Math.min(this._time % (this._timeout || c), c),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : b.clearTimeout(this._call),
        this._time += this.read() % c - e,
        this._timeout = c,
        this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        b.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        b.clearTimeout(this._call))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

// jquery.easing.min.js
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
}
)(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow
      , sqrt = Math.sqrt
      , sin = Math.sin
      , cos = Math.cos
      , PI = Math.PI
      , c1 = 1.70158
      , c2 = c1 * 1.525
      , c3 = c1 + 1
      , c4 = 2 * PI / 3
      , c5 = 2 * PI / 4.5;
    function bounceOut(x) {
        var n1 = 7.5625
          , d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function(x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function(x) {
            return x * x
        },
        easeOutQuad: function(x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function(x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function(x) {
            return x * x * x
        },
        easeOutCubic: function(x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function(x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function(x) {
            return x * x * x * x
        },
        easeOutQuart: function(x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function(x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function(x) {
            return x * x * x * x * x
        },
        easeOutQuint: function(x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function(x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function(x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function(x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function(x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function(x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function(x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function(x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function(x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function(x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function(x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function(x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
});

/*
 * VenoBox - jQuery Plugin
 * version: 1.8.6
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2019 Nicola Franchini - @nicolafranchini
 *
 */
!function(e) {
    "use strict";
    var s, i, a, c, o, t, d, l, r, n, v, u, b, k, p, m, h, f, g, x, y, w, C, _, B, P, E, O, D, M, N, U, V, I, z, R, X, Y, j, W, q;
    e.fn.extend({
        venobox: function($) {
            var A = this
              , H = e.extend({
                arrowsColor: "#B6B6B6",
                autoplay: !1,
                bgcolor: "#fff",
                border: "0",
                closeBackground: "#161617",
                closeColor: "#d2d2d2",
                framewidth: "",
                frameheight: "",
                gallItems: !1,
                infinigall: !1,
                htmlClose: "&times;",
                htmlNext: "<span>Next</span>",
                htmlPrev: "<span>Prev</span>",
                numeratio: !1,
                numerationBackground: "#161617",
                numerationColor: "#d2d2d2",
                numerationPosition: "top",
                overlayClose: !0,
                overlayColor: "rgba(23,23,23,0.85)",
                spinner: "double-bounce",
                spinColor: "#d2d2d2",
                titleattr: "title",
                titleBackground: "#161617",
                titleColor: "#d2d2d2",
                titlePosition: "top",
                cb_pre_open: function() {
                    return !0
                },
                cb_post_open: function() {},
                cb_pre_close: function() {
                    return !0
                },
                cb_post_close: function() {},
                cb_post_resize: function() {},
                cb_after_nav: function() {},
                cb_content_loaded: function() {},
                cb_init: function() {}
            }, $);
            return H.cb_init(A),
            this.each(function() {
                if ((D = e(this)).data("venobox"))
                    return !0;
                function $() {
                    y = D.data("gall"),
                    h = D.data("numeratio"),
                    u = D.data("gallItems"),
                    b = D.data("infinigall"),
                    k = u || e('.vbox-item[data-gall="' + y + '"]'),
                    w = k.eq(k.index(D) + 1),
                    C = k.eq(k.index(D) - 1),
                    w.length || !0 !== b || (w = k.eq(0)),
                    k.length >= 1 ? (M = k.index(D) + 1,
                    a.html(M + " / " + k.length)) : M = 1,
                    !0 === h ? a.show() : a.hide(),
                    "" !== x ? c.show() : c.hide(),
                    w.length || !0 === b ? (e(".vbox-next").css("display", "block"),
                    _ = !0) : (e(".vbox-next").css("display", "none"),
                    _ = !1),
                    k.index(D) > 0 || !0 === b ? (e(".vbox-prev").css("display", "block"),
                    B = !0) : (e(".vbox-prev").css("display", "none"),
                    B = !1),
                    !0 !== B && !0 !== _ || (d.on(K.DOWN, F),
                    d.on(K.MOVE, G),
                    d.on(K.UP, J))
                }
                function Q(e) {
                    return !(e.length < 1) && (!p && (p = !0,
                    f = e.data("overlay") || e.data("overlaycolor"),
                    n = e.data("framewidth"),
                    v = e.data("frameheight"),
                    o = e.data("border"),
                    i = e.data("bgcolor"),
                    l = e.data("href") || e.attr("href"),
                    s = e.data("autoplay"),
                    x = e.data("titleattr") && e.attr(e.data("titleattr")) || "",
                    e === C && d.addClass("vbox-animated").addClass("swipe-right"),
                    e === w && d.addClass("vbox-animated").addClass("swipe-left"),
                    E.show(),
                    void d.animate({
                        opacity: 0
                    }, 500, function() {
                        g.css("background", f),
                        d.removeClass("vbox-animated").removeClass("swipe-left").removeClass("swipe-right").css({
                            "margin-left": 0,
                            "margin-right": 0
                        }),
                        "iframe" == e.data("vbtype") ? ae() : "inline" == e.data("vbtype") ? oe() : "ajax" == e.data("vbtype") ? ie() : "video" == e.data("vbtype") ? ce(s) : (d.html('<img src="' + l + '">'),
                        te()),
                        D = e,
                        $(),
                        p = !1,
                        H.cb_after_nav(D, M, w, C)
                    })))
                }
                function S(e) {
                    27 === e.keyCode && T(),
                    37 == e.keyCode && !0 === B && Q(C),
                    39 == e.keyCode && !0 === _ && Q(w)
                }
                function T() {
                    if (!1 === H.cb_pre_close(D, M, w, C))
                        return !1;
                    e("body").off("keydown", S).removeClass("vbox-open"),
                    D.focus(),
                    g.animate({
                        opacity: 0
                    }, 500, function() {
                        g.remove(),
                        p = !1,
                        H.cb_post_close()
                    })
                }
                A.VBclose = function() {
                    T()
                }
                ,
                D.addClass("vbox-item"),
                D.data("framewidth", H.framewidth),
                D.data("frameheight", H.frameheight),
                D.data("border", H.border),
                D.data("bgcolor", H.bgcolor),
                D.data("numeratio", H.numeratio),
                D.data("gallItems", H.gallItems),
                D.data("infinigall", H.infinigall),
                D.data("overlaycolor", H.overlayColor),
                D.data("titleattr", H.titleattr),
                D.data("venobox", !0),
                D.on("click", function(u) {
                    if (u.preventDefault(),
                    D = e(this),
                    !1 === H.cb_pre_open(D))
                        return !1;
                    switch (A.VBnext = function() {
                        Q(w)
                    }
                    ,
                    A.VBprev = function() {
                        Q(C)
                    }
                    ,
                    f = D.data("overlay") || D.data("overlaycolor"),
                    n = D.data("framewidth"),
                    v = D.data("frameheight"),
                    s = D.data("autoplay") || H.autoplay,
                    o = D.data("border"),
                    i = D.data("bgcolor"),
                    _ = !1,
                    B = !1,
                    p = !1,
                    l = D.data("href") || D.attr("href"),
                    r = D.data("css") || "",
                    x = D.attr(D.data("titleattr")) || "",
                    P = '<div class="vbox-preloader">',
                    H.spinner) {
                    case "rotating-plane":
                        P += '<div class="sk-rotating-plane"></div>';
                        break;
                    case "double-bounce":
                        P += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                        break;
                    case "wave":
                        P += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                        break;
                    case "wandering-cubes":
                        P += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                        break;
                    case "spinner-pulse":
                        P += '<div class="sk-spinner sk-spinner-pulse"></div>';
                        break;
                    case "chasing-dots":
                        P += '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                        break;
                    case "three-bounce":
                        P += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                        break;
                    case "circle":
                        P += '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                        break;
                    case "cube-grid":
                        P += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                        break;
                    case "fading-circle":
                        P += '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                        break;
                    case "folding-cube":
                        P += '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
                    }
                    return P += "</div>",
                    O = '<a class="vbox-next">' + H.htmlNext + '</a><a class="vbox-prev">' + H.htmlPrev + "</a>",
                    U = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' + H.htmlClose + "</div>",
                    t = '<div class="vbox-overlay ' + r + '" style="background:' + f + '">' + P + '<div class="vbox-container"><div class="vbox-content"></div></div>' + U + O + "</div>",
                    e("body").append(t).addClass("vbox-open"),
                    e(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", H.spinColor),
                    g = e(".vbox-overlay"),
                    e(".vbox-container"),
                    d = e(".vbox-content"),
                    a = e(".vbox-num"),
                    c = e(".vbox-title"),
                    (E = e(".vbox-preloader")).show(),
                    c.css(H.titlePosition, "-1px"),
                    c.css({
                        color: H.titleColor,
                        "background-color": H.titleBackground
                    }),
                    e(".vbox-close").css({
                        color: H.closeColor,
                        "background-color": H.closeBackground
                    }),
                    e(".vbox-num").css(H.numerationPosition, "-1px"),
                    e(".vbox-num").css({
                        color: H.numerationColor,
                        "background-color": H.numerationBackground
                    }),
                    e(".vbox-next span, .vbox-prev span").css({
                        "border-top-color": H.arrowsColor,
                        "border-right-color": H.arrowsColor
                    }),
                    d.html(""),
                    d.css("opacity", "0"),
                    g.css("opacity", "0"),
                    $(),
                    g.animate({
                        opacity: 1
                    }, 250, function() {
                        "iframe" == D.data("vbtype") ? ae() : "inline" == D.data("vbtype") ? oe() : "ajax" == D.data("vbtype") ? ie() : "video" == D.data("vbtype") ? ce(s) : (d.html('<img src="' + l + '">'),
                        te()),
                        H.cb_post_open(D, M, w, C)
                    }),
                    e("body").keydown(S),
                    e(".vbox-prev").on("click", function() {
                        Q(C)
                    }),
                    e(".vbox-next").on("click", function() {
                        Q(w)
                    }),
                    !1
                });
                var Z = ".vbox-overlay";
                function F(e) {
                    d.addClass("vbox-animated"),
                    I = R = e.pageY,
                    z = X = e.pageX,
                    N = !0
                }
                function G(e) {
                    if (!0 === N) {
                        X = e.pageX,
                        R = e.pageY,
                        j = X - z,
                        W = R - I;
                        var s = Math.abs(j);
                        s > Math.abs(W) && s <= 100 && (e.preventDefault(),
                        d.css("margin-left", j))
                    }
                }
                function J(e) {
                    if (!0 === N) {
                        N = !1;
                        var s = D
                          , i = !1;
                        (Y = X - z) < 0 && !0 === _ && (s = w,
                        i = !0),
                        Y > 0 && !0 === B && (s = C,
                        i = !0),
                        Math.abs(Y) >= q && !0 === i ? Q(s) : d.css({
                            "margin-left": 0,
                            "margin-right": 0
                        })
                    }
                }
                H.overlayClose || (Z = ".vbox-close"),
                e("body").on("click touchstart", Z, function(s) {
                    (e(s.target).is(".vbox-overlay") || e(s.target).is(".vbox-content") || e(s.target).is(".vbox-close") || e(s.target).is(".vbox-preloader") || e(s.target).is(".vbox-container")) && T()
                }),
                z = 0,
                X = 0,
                Y = 0,
                q = 50,
                N = !1;
                var K = {
                    DOWN: "touchmousedown",
                    UP: "touchmouseup",
                    MOVE: "touchmousemove"
                }
                  , L = function(s) {
                    var i;
                    switch (s.type) {
                    case "mousedown":
                        i = K.DOWN;
                        break;
                    case "mouseup":
                    case "mouseout":
                        i = K.UP;
                        break;
                    case "mousemove":
                        i = K.MOVE;
                        break;
                    default:
                        return
                    }
                    var a = se(i, s, s.pageX, s.pageY);
                    e(s.target).trigger(a)
                }
                  , ee = function(s) {
                    var i;
                    switch (s.type) {
                    case "touchstart":
                        i = K.DOWN;
                        break;
                    case "touchend":
                        i = K.UP;
                        break;
                    case "touchmove":
                        i = K.MOVE;
                        break;
                    default:
                        return
                    }
                    var a, c = s.originalEvent.touches[0];
                    a = i == K.UP ? se(i, s, null, null) : se(i, s, c.pageX, c.pageY),
                    e(s.target).trigger(a)
                }
                  , se = function(s, i, a, c) {
                    return e.Event(s, {
                        pageX: a,
                        pageY: c,
                        originalEvent: i
                    })
                };
                function ie() {
                    e.ajax({
                        url: l,
                        cache: !1
                    }).done(function(e) {
                        d.html('<div class="vbox-inline">' + e + "</div>"),
                        te()
                    }).fail(function() {
                        d.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),
                        de()
                    })
                }
                function ae() {
                    d.html('<iframe class="venoframe" src="' + l + '"></iframe>'),
                    de()
                }
                function ce(e) {
                    var s, i = function(e) {
                        var s;
                        e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                        RegExp.$3.indexOf("youtu") > -1 ? s = "youtube" : RegExp.$3.indexOf("vimeo") > -1 && (s = "vimeo");
                        return {
                            type: s,
                            id: RegExp.$6
                        }
                    }(l), a = (e ? "?rel=0&autoplay=1" : "?rel=0") + function(e) {
                        var s = ""
                          , i = decodeURIComponent(e).split("?");
                        if (void 0 !== i[1]) {
                            var a, c, o = i[1].split("&");
                            for (c = 0; c < o.length; c++)
                                a = o[c].split("="),
                                s = s + "&" + a[0] + "=" + a[1]
                        }
                        return encodeURI(s)
                    }(l);
                    "vimeo" == i.type ? s = "https://player.vimeo.com/video/" : "youtube" == i.type && (s = "https://www.youtube.com/embed/"),
                    d.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' + s + i.id + a + '"></iframe>'),
                    de()
                }
                function oe() {
                    d.html('<div class="vbox-inline">' + e(l).html() + "</div>"),
                    de()
                }
                function te() {
                    (V = d.find("img")).length ? V.each(function() {
                        e(this).one("load", function() {
                            de()
                        })
                    }) : de()
                }
                function de() {
                    c.html(x),
                    d.find(">:first-child").addClass("vbox-figlio").css({
                        width: n,
                        height: v,
                        padding: o,
                        background: i
                    }),
                    e("img.vbox-figlio").on("dragstart", function(e) {
                        e.preventDefault()
                    }),
                    le(),
                    d.animate({
                        opacity: "1"
                    }, "slow", function() {
                        E.hide()
                    }),
                    H.cb_content_loaded(D, M, w, C)
                }
                function le() {
                    var s = d.outerHeight()
                      , i = e(window).height();
                    m = s + 60 < i ? (i - s) / 2 : "30px",
                    d.css("margin-top", m),
                    d.css("margin-bottom", m),
                    H.cb_post_resize()
                }
                "ontouchstart"in window ? (e(document).on("touchstart", ee),
                e(document).on("touchmove", ee),
                e(document).on("touchend", ee)) : (e(document).on("mousedown", L),
                e(document).on("mouseup", L),
                e(document).on("mouseout", L),
                e(document).on("mousemove", L)),
                e(window).resize(function() {
                    e(".vbox-content").length && setTimeout(le(), 800)
                })
            })
        }
    })
}(jQuery);

// shuffle.min.js
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Shuffle = e()
}(this, function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function e(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function i(t, i, n) {
        return i && e(t.prototype, i),
        n && e(t, n),
        t
    }
    function n(t) {
        return (n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function o(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }
    function r() {}
    r.prototype = {
        on: function(t, e, i) {
            var n = this.e || (this.e = {});
            return (n[t] || (n[t] = [])).push({
                fn: e,
                ctx: i
            }),
            this
        },
        once: function(t, e, i) {
            var n = this;
            function s() {
                n.off(t, s),
                e.apply(i, arguments)
            }
            return s._ = e,
            this.on(t, s, i)
        },
        emit: function(t) {
            for (var e = [].slice.call(arguments, 1), i = ((this.e || (this.e = {}))[t] || []).slice(), n = 0, s = i.length; n < s; n++)
                i[n].fn.apply(i[n].ctx, e);
            return this
        },
        off: function(t, e) {
            var i = this.e || (this.e = {})
              , n = i[t]
              , s = [];
            if (n && e)
                for (var o = 0, r = n.length; o < r; o++)
                    n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
            return s.length ? i[t] = s : delete i[t],
            this
        }
    };
    var l = r
      , a = "undefined" != typeof Element ? Element.prototype : {}
      , u = a.matches || a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector
      , h = function(t, e) {
        if (!t || 1 !== t.nodeType)
            return !1;
        if (u)
            return u.call(t, e);
        for (var i = t.parentNode.querySelectorAll(e), n = 0; n < i.length; n++)
            if (i[n] == t)
                return !0;
        return !1
    };
    var f = function(t, e) {
        var i, n, s, o, r = 0;
        return function() {
            i = this,
            n = arguments;
            var t = new Date - r;
            return o || (t >= e ? l() : o = setTimeout(l, e - t)),
            s
        }
        ;
        function l() {
            o = 0,
            r = +new Date,
            s = t.apply(i, n),
            i = null,
            n = null
        }
    };
    function c() {}
    function d(t) {
        return parseFloat(t) || 0
    }
    var m = function() {
        function e(i, n) {
            t(this, e),
            this.x = d(i),
            this.y = d(n)
        }
        return i(e, null, [{
            key: "equals",
            value: function(t, e) {
                return t.x === e.x && t.y === e.y
            }
        }]),
        e
    }()
      , p = function() {
        function e(i, n, s, o, r) {
            t(this, e),
            this.id = r,
            this.left = i,
            this.top = n,
            this.width = s,
            this.height = o
        }
        return i(e, null, [{
            key: "intersects",
            value: function(t, e) {
                return t.left < e.left + e.width && e.left < t.left + t.width && t.top < e.top + e.height && e.top < t.top + t.height
            }
        }]),
        e
    }()
      , v = {
        BASE: "shuffle",
        SHUFFLE_ITEM: "shuffle-item",
        VISIBLE: "shuffle-item--visible",
        HIDDEN: "shuffle-item--hidden"
    }
      , y = 0
      , g = function() {
        function e(i) {
            t(this, e),
            y += 1,
            this.id = y,
            this.element = i,
            this.isVisible = !0,
            this.isHidden = !1
        }
        return i(e, [{
            key: "show",
            value: function() {
                this.isVisible = !0,
                this.element.classList.remove(v.HIDDEN),
                this.element.classList.add(v.VISIBLE),
                this.element.removeAttribute("aria-hidden")
            }
        }, {
            key: "hide",
            value: function() {
                this.isVisible = !1,
                this.element.classList.remove(v.VISIBLE),
                this.element.classList.add(v.HIDDEN),
                this.element.setAttribute("aria-hidden", !0)
            }
        }, {
            key: "init",
            value: function() {
                this.addClasses([v.SHUFFLE_ITEM, v.VISIBLE]),
                this.applyCss(e.Css.INITIAL),
                this.scale = e.Scale.VISIBLE,
                this.point = new m
            }
        }, {
            key: "addClasses",
            value: function(t) {
                var e = this;
                t.forEach(function(t) {
                    e.element.classList.add(t)
                })
            }
        }, {
            key: "removeClasses",
            value: function(t) {
                var e = this;
                t.forEach(function(t) {
                    e.element.classList.remove(t)
                })
            }
        }, {
            key: "applyCss",
            value: function(t) {
                var e = this;
                Object.keys(t).forEach(function(i) {
                    e.element.style[i] = t[i]
                })
            }
        }, {
            key: "dispose",
            value: function() {
                this.removeClasses([v.HIDDEN, v.VISIBLE, v.SHUFFLE_ITEM]),
                this.element.removeAttribute("style"),
                this.element = null
            }
        }]),
        e
    }();
    g.Css = {
        INITIAL: {
            position: "absolute",
            top: 0,
            left: 0,
            visibility: "visible",
            "will-change": "transform"
        },
        VISIBLE: {
            before: {
                opacity: 1,
                visibility: "visible"
            },
            after: {
                transitionDelay: ""
            }
        },
        HIDDEN: {
            before: {
                opacity: 0
            },
            after: {
                visibility: "hidden",
                transitionDelay: ""
            }
        }
    },
    g.Scale = {
        VISIBLE: 1,
        HIDDEN: .001
    };
    var _ = null
      , E = function() {
        if (null !== _)
            return _;
        var t = document.body || document.documentElement
          , e = document.createElement("div");
        return e.style.cssText = "width:10px;padding:2px;box-sizing:border-box;",
        t.appendChild(e),
        _ = "10px" === window.getComputedStyle(e, null).width,
        t.removeChild(e),
        _
    };
    function I(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.getComputedStyle(t, null)
          , n = d(i[e]);
        return E() || "width" !== e ? E() || "height" !== e || (n += d(i.paddingTop) + d(i.paddingBottom) + d(i.borderTopWidth) + d(i.borderBottomWidth)) : n += d(i.paddingLeft) + d(i.paddingRight) + d(i.borderLeftWidth) + d(i.borderRightWidth),
        n
    }
    var b = {
        reverse: !1,
        by: null,
        compare: null,
        randomize: !1,
        key: "element"
    };
    function S(t, e) {
        var i = Object.assign({}, b, e)
          , n = Array.from(t)
          , s = !1;
        return t.length ? i.randomize ? function(t) {
            for (var e = t.length; e; ) {
                e -= 1;
                var i = Math.floor(Math.random() * (e + 1))
                  , n = t[i];
                t[i] = t[e],
                t[e] = n
            }
            return t
        }(t) : ("function" == typeof i.by ? t.sort(function(t, e) {
            if (s)
                return 0;
            var n = i.by(t[i.key])
              , o = i.by(e[i.key]);
            return void 0 === n && void 0 === o ? (s = !0,
            0) : n < o || "sortFirst" === n || "sortLast" === o ? -1 : n > o || "sortLast" === n || "sortFirst" === o ? 1 : 0
        }) : "function" == typeof i.compare && t.sort(i.compare),
        s ? n : (i.reverse && t.reverse(),
        t)) : []
    }
    var T = {}
      , k = "transitionend"
      , w = 0;
    function C(t) {
        return !!T[t] && (T[t].element.removeEventListener(k, T[t].listener),
        T[t] = null,
        !0)
    }
    function L(t, e) {
        var i = k + (w += 1)
          , n = function(t) {
            t.currentTarget === t.target && (C(i),
            e(t))
        };
        return t.addEventListener(k, n),
        T[i] = {
            element: t,
            listener: n
        },
        i
    }
    function D(t) {
        return Math.max.apply(Math, t)
    }
    function z(t, e, i, n) {
        var s = t / e;
        return Math.abs(Math.round(s) - s) < n && (s = Math.round(s)),
        Math.min(Math.ceil(s), i)
    }
    function M(t, e, i) {
        if (1 === e)
            return t;
        for (var n = [], s = 0; s <= i - e; s++)
            n.push(D(t.slice(s, s + e)));
        return n
    }
    function A(t, e) {
        for (var i, n = (i = t,
        Math.min.apply(Math, i)), s = 0, o = t.length; s < o; s++)
            if (t[s] >= n - e && t[s] <= n + e)
                return s;
        return 0
    }
    function F(t, e) {
        var i = {};
        t.forEach(function(t) {
            i[t.top] ? i[t.top].push(t) : i[t.top] = [t]
        });
        var n = []
          , s = []
          , o = [];
        return Object.keys(i).forEach(function(t) {
            var r = i[t];
            s.push(r);
            var l, a = r[r.length - 1], u = a.left + a.width, h = Math.round((e - u) / 2), f = r, c = !1;
            if (h > 0) {
                var d = [];
                (c = r.every(function(t) {
                    var e = new p(t.left + h,t.top,t.width,t.height,t.id)
                      , i = !n.some(function(t) {
                        return p.intersects(e, t)
                    });
                    return d.push(e),
                    i
                })) && (f = d)
            }
            if (!c && r.some(function(t) {
                return n.some(function(e) {
                    var i = p.intersects(t, e);
                    return i && (l = e),
                    i
                })
            })) {
                var m = o.findIndex(function(t) {
                    return t.includes(l)
                });
                o.splice(m, 1, s[m])
            }
            n = n.concat(f),
            o.push(f)
        }),
        [].concat.apply([], o).sort(function(t, e) {
            return t.id - e.id
        }).map(function(t) {
            return new m(t.left,t.top)
        })
    }
    function x(t) {
        return Array.from(new Set(t))
    }
    var O = 0
      , N = function(e) {
        function r(e) {
            var i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            t(this, r),
            (i = o(this, n(r).call(this))).options = Object.assign({}, r.options, s),
            i.options.delimeter && (i.options.delimiter = i.options.delimeter),
            i.lastSort = {},
            i.group = r.ALL_ITEMS,
            i.lastFilter = r.ALL_ITEMS,
            i.isEnabled = !0,
            i.isDestroyed = !1,
            i.isInitialized = !1,
            i._transitions = [],
            i.isTransitioning = !1,
            i._queue = [];
            var l = i._getElementOption(e);
            if (!l)
                throw new TypeError("Shuffle needs to be initialized with an element.");
            return i.element = l,
            i.id = "shuffle_" + O,
            O += 1,
            i._init(),
            i.isInitialized = !0,
            i
        }
        return function(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && s(t, e)
        }(r, l),
        i(r, [{
            key: "_init",
            value: function() {
                if (this.items = this._getItems(),
                this.options.sizer = this._getElementOption(this.options.sizer),
                this.element.classList.add(r.Classes.BASE),
                this._initItems(this.items),
                this._onResize = this._getResizeFunction(),
                window.addEventListener("resize", this._onResize),
                "complete" !== document.readyState) {
                    var t = this.layout.bind(this);
                    window.addEventListener("load", function e() {
                        window.removeEventListener("load", e),
                        t()
                    })
                }
                var e = window.getComputedStyle(this.element, null)
                  , i = r.getSize(this.element).width;
                this._validateStyles(e),
                this._setColumns(i),
                this.filter(this.options.group, this.options.initialSort),
                this.element.offsetWidth,
                this.setItemTransitions(this.items),
                this.element.style.transition = "height ".concat(this.options.speed, "ms ").concat(this.options.easing)
            }
        }, {
            key: "_getResizeFunction",
            value: function() {
                var t = this._handleResize.bind(this);
                return this.options.throttle ? this.options.throttle(t, this.options.throttleTime) : t
            }
        }, {
            key: "_getElementOption",
            value: function(t) {
                return "string" == typeof t ? this.element.querySelector(t) : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
            }
        }, {
            key: "_validateStyles",
            value: function(t) {
                "static" === t.position && (this.element.style.position = "relative"),
                "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
            }
        }, {
            key: "_filter",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastFilter
                  , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.items
                  , i = this._getFilteredSets(t, e);
                return this._toggleFilterClasses(i),
                this.lastFilter = t,
                "string" == typeof t && (this.group = t),
                i
            }
        }, {
            key: "_getFilteredSets",
            value: function(t, e) {
                var i = this
                  , n = []
                  , s = [];
                return t === r.ALL_ITEMS ? n = e : e.forEach(function(e) {
                    i._doesPassFilter(t, e.element) ? n.push(e) : s.push(e)
                }),
                {
                    visible: n,
                    hidden: s
                }
            }
        }, {
            key: "_doesPassFilter",
            value: function(t, e) {
                if ("function" == typeof t)
                    return t.call(e, e, this);
                var i = e.getAttribute("data-" + r.FILTER_ATTRIBUTE_KEY)
                  , n = this.options.delimiter ? i.split(this.options.delimiter) : JSON.parse(i);
                function s(t) {
                    return n.includes(t)
                }
                return Array.isArray(t) ? this.options.filterMode === r.FilterMode.ANY ? t.some(s) : t.every(s) : n.includes(t)
            }
        }, {
            key: "_toggleFilterClasses",
            value: function(t) {
                var e = t.visible
                  , i = t.hidden;
                e.forEach(function(t) {
                    t.show()
                }),
                i.forEach(function(t) {
                    t.hide()
                })
            }
        }, {
            key: "_initItems",
            value: function(t) {
                t.forEach(function(t) {
                    t.init()
                })
            }
        }, {
            key: "_disposeItems",
            value: function(t) {
                t.forEach(function(t) {
                    t.dispose()
                })
            }
        }, {
            key: "_updateItemCount",
            value: function() {
                this.visibleItems = this._getFilteredItems().length
            }
        }, {
            key: "setItemTransitions",
            value: function(t) {
                var e = this.options
                  , i = e.speed
                  , n = e.easing
                  , s = this.options.useTransforms ? ["transform"] : ["top", "left"]
                  , o = Object.keys(g.Css.HIDDEN.before).map(function(t) {
                    return t.replace(/([A-Z])/g, function(t, e) {
                        return "-".concat(e.toLowerCase())
                    })
                })
                  , r = s.concat(o).join();
                t.forEach(function(t) {
                    t.element.style.transitionDuration = i + "ms",
                    t.element.style.transitionTimingFunction = n,
                    t.element.style.transitionProperty = r
                })
            }
        }, {
            key: "_getItems",
            value: function() {
                var t = this;
                return Array.from(this.element.children).filter(function(e) {
                    return h(e, t.options.itemSelector)
                }).map(function(t) {
                    return new g(t)
                })
            }
        }, {
            key: "_mergeNewItems",
            value: function(t) {
                var e = Array.from(this.element.children);
                return S(this.items.concat(t), {
                    by: function(t) {
                        return e.indexOf(t)
                    }
                })
            }
        }, {
            key: "_getFilteredItems",
            value: function() {
                return this.items.filter(function(t) {
                    return t.isVisible
                })
            }
        }, {
            key: "_getConcealedItems",
            value: function() {
                return this.items.filter(function(t) {
                    return !t.isVisible
                })
            }
        }, {
            key: "_getColumnSize",
            value: function(t, e) {
                var i;
                return 0 === (i = "function" == typeof this.options.columnWidth ? this.options.columnWidth(t) : this.options.sizer ? r.getSize(this.options.sizer).width : this.options.columnWidth ? this.options.columnWidth : this.items.length > 0 ? r.getSize(this.items[0].element, !0).width : t) && (i = t),
                i + e
            }
        }, {
            key: "_getGutterSize",
            value: function(t) {
                return "function" == typeof this.options.gutterWidth ? this.options.gutterWidth(t) : this.options.sizer ? I(this.options.sizer, "marginLeft") : this.options.gutterWidth
            }
        }, {
            key: "_setColumns",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.getSize(this.element).width
                  , e = this._getGutterSize(t)
                  , i = this._getColumnSize(t, e)
                  , n = (t + e) / i;
                Math.abs(Math.round(n) - n) < this.options.columnThreshold && (n = Math.round(n)),
                this.cols = Math.max(Math.floor(n), 1),
                this.containerWidth = t,
                this.colWidth = i
            }
        }, {
            key: "_setContainerSize",
            value: function() {
                this.element.style.height = this._getContainerSize() + "px"
            }
        }, {
            key: "_getContainerSize",
            value: function() {
                return D(this.positions)
            }
        }, {
            key: "_getStaggerAmount",
            value: function(t) {
                return Math.min(t * this.options.staggerAmount, this.options.staggerAmountMax)
            }
        }, {
            key: "_dispatch",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.isDestroyed || (e.shuffle = this,
                this.emit(t, e))
            }
        }, {
            key: "_resetCols",
            value: function() {
                var t = this.cols;
                for (this.positions = []; t; )
                    t -= 1,
                    this.positions.push(0)
            }
        }, {
            key: "_layout",
            value: function(t) {
                var e = this
                  , i = this._getNextPositions(t)
                  , n = 0;
                t.forEach(function(t, s) {
                    function o() {
                        t.applyCss(g.Css.VISIBLE.after)
                    }
                    if (m.equals(t.point, i[s]) && !t.isHidden)
                        return t.applyCss(g.Css.VISIBLE.before),
                        void o();
                    t.point = i[s],
                    t.scale = g.Scale.VISIBLE,
                    t.isHidden = !1;
                    var r = e.getStylesForTransition(t, g.Css.VISIBLE.before);
                    r.transitionDelay = e._getStaggerAmount(n) + "ms",
                    e._queue.push({
                        item: t,
                        styles: r,
                        callback: o
                    }),
                    n += 1
                })
            }
        }, {
            key: "_getNextPositions",
            value: function(t) {
                var e = this;
                if (this.options.isCentered) {
                    var i = t.map(function(t, i) {
                        var n = r.getSize(t.element, !0)
                          , s = e._getItemPosition(n);
                        return new p(s.x,s.y,n.width,n.height,i)
                    });
                    return this.getTransformedPositions(i, this.containerWidth)
                }
                return t.map(function(t) {
                    return e._getItemPosition(r.getSize(t.element, !0))
                })
            }
        }, {
            key: "_getItemPosition",
            value: function(t) {
                return function(t) {
                    for (var e = t.itemSize, i = t.positions, n = t.gridSize, s = t.total, o = t.threshold, r = t.buffer, l = z(e.width, n, s, o), a = M(i, l, s), u = A(a, r), h = new m(n * u,a[u]), f = a[u] + e.height, c = 0; c < l; c++)
                        i[u + c] = f;
                    return h
                }({
                    itemSize: t,
                    positions: this.positions,
                    gridSize: this.colWidth,
                    total: this.cols,
                    threshold: this.options.columnThreshold,
                    buffer: this.options.buffer
                })
            }
        }, {
            key: "getTransformedPositions",
            value: function(t, e) {
                return F(t, e)
            }
        }, {
            key: "_shrink",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getConcealedItems()
                  , i = 0;
                e.forEach(function(e) {
                    function n() {
                        e.applyCss(g.Css.HIDDEN.after)
                    }
                    if (e.isHidden)
                        return e.applyCss(g.Css.HIDDEN.before),
                        void n();
                    e.scale = g.Scale.HIDDEN,
                    e.isHidden = !0;
                    var s = t.getStylesForTransition(e, g.Css.HIDDEN.before);
                    s.transitionDelay = t._getStaggerAmount(i) + "ms",
                    t._queue.push({
                        item: e,
                        styles: s,
                        callback: n
                    }),
                    i += 1
                })
            }
        }, {
            key: "_handleResize",
            value: function() {
                this.isEnabled && !this.isDestroyed && this.update()
            }
        }, {
            key: "getStylesForTransition",
            value: function(t, e) {
                var i = Object.assign({}, e);
                if (this.options.useTransforms) {
                    var n = this.options.roundTransforms ? Math.round(t.point.x) : t.point.x
                      , s = this.options.roundTransforms ? Math.round(t.point.y) : t.point.y;
                    i.transform = "translate(".concat(n, "px, ").concat(s, "px) scale(").concat(t.scale, ")")
                } else
                    i.left = t.point.x + "px",
                    i.top = t.point.y + "px";
                return i
            }
        }, {
            key: "_whenTransitionDone",
            value: function(t, e, i) {
                var n = L(t, function(t) {
                    e(),
                    i(null, t)
                });
                this._transitions.push(n)
            }
        }, {
            key: "_getTransitionFunction",
            value: function(t) {
                var e = this;
                return function(i) {
                    t.item.applyCss(t.styles),
                    e._whenTransitionDone(t.item.element, t.callback, i)
                }
            }
        }, {
            key: "_processQueue",
            value: function() {
                this.isTransitioning && this._cancelMovement();
                var t = this.options.speed > 0
                  , e = this._queue.length > 0;
                e && t && this.isInitialized ? this._startTransitions(this._queue) : e ? (this._styleImmediately(this._queue),
                this._dispatch(r.EventType.LAYOUT)) : this._dispatch(r.EventType.LAYOUT),
                this._queue.length = 0
            }
        }, {
            key: "_startTransitions",
            value: function(t) {
                var e = this;
                this.isTransitioning = !0,
                function(t, e, i) {
                    i || ("function" == typeof e ? (i = e,
                    e = null) : i = c);
                    var n = t && t.length;
                    if (!n)
                        return i(null, []);
                    var s = !1
                      , o = new Array(n);
                    function r(t) {
                        return function(e, r) {
                            if (!s) {
                                if (e)
                                    return i(e, o),
                                    void (s = !0);
                                o[t] = r,
                                --n || i(null, o)
                            }
                        }
                    }
                    t.forEach(e ? function(t, i) {
                        t.call(e, r(i))
                    }
                    : function(t, e) {
                        t(r(e))
                    }
                    )
                }(t.map(function(t) {
                    return e._getTransitionFunction(t)
                }), this._movementFinished.bind(this))
            }
        }, {
            key: "_cancelMovement",
            value: function() {
                this._transitions.forEach(C),
                this._transitions.length = 0,
                this.isTransitioning = !1
            }
        }, {
            key: "_styleImmediately",
            value: function(t) {
                if (t.length) {
                    var e = t.map(function(t) {
                        return t.item.element
                    });
                    r._skipTransitions(e, function() {
                        t.forEach(function(t) {
                            t.item.applyCss(t.styles),
                            t.callback()
                        })
                    })
                }
            }
        }, {
            key: "_movementFinished",
            value: function() {
                this._transitions.length = 0,
                this.isTransitioning = !1,
                this._dispatch(r.EventType.LAYOUT)
            }
        }, {
            key: "filter",
            value: function(t, e) {
                this.isEnabled && ((!t || t && 0 === t.length) && (t = r.ALL_ITEMS),
                this._filter(t),
                this._shrink(),
                this._updateItemCount(),
                this.sort(e))
            }
        }, {
            key: "sort",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.lastSort;
                if (this.isEnabled) {
                    this._resetCols();
                    var e = S(this._getFilteredItems(), t);
                    this._layout(e),
                    this._processQueue(),
                    this._setContainerSize(),
                    this.lastSort = t
                }
            }
        }, {
            key: "update",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.isEnabled && (t || this._setColumns(),
                this.sort())
            }
        }, {
            key: "layout",
            value: function() {
                this.update(!0)
            }
        }, {
            key: "add",
            value: function(t) {
                var e = this
                  , i = x(t).map(function(t) {
                    return new g(t)
                });
                this._initItems(i),
                this._resetCols();
                var n = S(this._mergeNewItems(i), this.lastSort)
                  , s = this._filter(this.lastFilter, n)
                  , o = function(t) {
                    return i.includes(t)
                }
                  , r = function(t) {
                    t.scale = g.Scale.HIDDEN,
                    t.isHidden = !0,
                    t.applyCss(g.Css.HIDDEN.before),
                    t.applyCss(g.Css.HIDDEN.after)
                }
                  , l = this._getNextPositions(s.visible);
                s.visible.forEach(function(t, i) {
                    o(t) && (t.point = l[i],
                    r(t),
                    t.applyCss(e.getStylesForTransition(t, {})))
                }),
                s.hidden.forEach(function(t) {
                    o(t) && r(t)
                }),
                this.element.offsetWidth,
                this.setItemTransitions(i),
                this.items = this._mergeNewItems(i),
                this.filter(this.lastFilter)
            }
        }, {
            key: "disable",
            value: function() {
                this.isEnabled = !1
            }
        }, {
            key: "enable",
            value: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.isEnabled = !0,
                t && this.update()
            }
        }, {
            key: "remove",
            value: function(t) {
                var e = this;
                if (t.length) {
                    var i = x(t)
                      , n = i.map(function(t) {
                        return e.getItemByElement(t)
                    }).filter(function(t) {
                        return !!t
                    });
                    this._toggleFilterClasses({
                        visible: [],
                        hidden: n
                    }),
                    this._shrink(n),
                    this.sort(),
                    this.items = this.items.filter(function(t) {
                        return !n.includes(t)
                    }),
                    this._updateItemCount(),
                    this.once(r.EventType.LAYOUT, function() {
                        e._disposeItems(n),
                        i.forEach(function(t) {
                            t.parentNode.removeChild(t)
                        }),
                        e._dispatch(r.EventType.REMOVED, {
                            collection: i
                        })
                    })
                }
            }
        }, {
            key: "getItemByElement",
            value: function(t) {
                return this.items.find(function(e) {
                    return e.element === t
                })
            }
        }, {
            key: "resetItems",
            value: function() {
                var t = this;
                this._disposeItems(this.items),
                this.isInitialized = !1,
                this.items = this._getItems(),
                this._initItems(this.items),
                this.once(r.EventType.LAYOUT, function() {
                    t.setItemTransitions(t.items),
                    t.isInitialized = !0
                }),
                this.filter(this.lastFilter)
            }
        }, {
            key: "destroy",
            value: function() {
                this._cancelMovement(),
                window.removeEventListener("resize", this._onResize),
                this.element.classList.remove("shuffle"),
                this.element.removeAttribute("style"),
                this._disposeItems(this.items),
                this.items.length = 0,
                this._transitions.length = 0,
                this.options.sizer = null,
                this.element = null,
                this.isDestroyed = !0,
                this.isEnabled = !1
            }
        }], [{
            key: "getSize",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                  , i = window.getComputedStyle(t, null)
                  , n = I(t, "width", i)
                  , s = I(t, "height", i);
                e && (n += I(t, "marginLeft", i) + I(t, "marginRight", i),
                s += I(t, "marginTop", i) + I(t, "marginBottom", i));
                return {
                    width: n,
                    height: s
                }
            }
        }, {
            key: "_skipTransitions",
            value: function(t, e) {
                var i = t.map(function(t) {
                    var e = t.style
                      , i = e.transitionDuration
                      , n = e.transitionDelay;
                    return e.transitionDuration = "0ms",
                    e.transitionDelay = "0ms",
                    {
                        duration: i,
                        delay: n
                    }
                });
                e(),
                t[0].offsetWidth,
                t.forEach(function(t, e) {
                    t.style.transitionDuration = i[e].duration,
                    t.style.transitionDelay = i[e].delay
                })
            }
        }]),
        r
    }();
    return N.ShuffleItem = g,
    N.ALL_ITEMS = "all",
    N.FILTER_ATTRIBUTE_KEY = "groups",
    N.EventType = {
        LAYOUT: "shuffle:layout",
        REMOVED: "shuffle:removed"
    },
    N.Classes = v,
    N.FilterMode = {
        ANY: "any",
        ALL: "all"
    },
    N.options = {
        group: N.ALL_ITEMS,
        speed: 250,
        easing: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        itemSelector: "*",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimiter: null,
        buffer: 0,
        columnThreshold: .01,
        initialSort: null,
        throttle: f,
        throttleTime: 300,
        staggerAmount: 15,
        staggerAmountMax: 150,
        useTransforms: !0,
        filterMode: N.FilterMode.ANY,
        isCentered: !1,
        roundTransforms: !0
    },
    N.Point = m,
    N.Rect = p,
    N.__sorter = S,
    N.__getColumnSpan = z,
    N.__getAvailablePositions = M,
    N.__getShortColumn = A,
    N.__getCenteredPositions = F,
    N
});

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], b);
    else if ("undefined" != typeof exports)
        b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports),
        a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";
    function c(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function")
    }
    function d(a, b) {
        return b.indexOf(a) >= 0
    }
    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }
    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }
    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1]
          , c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2]
          , d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
          , e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"),
        e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
        e.eventType = a) : e.eventName = a,
        e
    }
    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }
    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }
    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }
    function k() {
        return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
        function a(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.enumerable = d.enumerable || !1,
                d.configurable = !0,
                "value"in d && (d.writable = !0),
                Object.defineProperty(a, d.key, d)
            }
        }
        return function(b, c, d) {
            return c && a(b.prototype, c),
            d && a(b, d),
            b
        }
    }(), o = window.WeakMap || window.MozWeakMap || function() {
        function a() {
            c(this, a),
            this.keys = [],
            this.values = []
        }
        return n(a, [{
            key: "get",
            value: function(a) {
                for (var b = 0; b < this.keys.length; b++) {
                    var c = this.keys[b];
                    if (c === a)
                        return this.values[b]
                }
            }
        }, {
            key: "set",
            value: function(a, b) {
                for (var c = 0; c < this.keys.length; c++) {
                    var d = this.keys[c];
                    if (d === a)
                        return this.values[c] = b,
                        this
                }
                return this.keys.push(a),
                this.values.push(b),
                this
            }
        }]),
        a
    }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() {
            c(this, a),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return n(a, [{
            key: "observe",
            value: function() {}
        }]),
        a
    }(),
    l.notSupported = !0,
    m), q = window.getComputedStyle || function(a) {
        var b = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(c) {
                "float" === c && (c = "styleFloat"),
                b.test(c) && c.replace(b, function(a, b) {
                    return b.toUpperCase()
                });
                var d = a.currentStyle;
                return (null != d ? d[c] : void 0) || null
            }
        }
    }
    , r = function() {
        function a() {
            var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = function() {
                return "requestAnimationFrame"in window ? function(a) {
                    return window.requestAnimationFrame(a)
                }
                : function(a) {
                    return a()
                }
            }(),
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = e(b, this.defaults),
            null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)),
            this.animationNameCache = new o,
            this.wowEvent = g(this.config.boxClass)
        }
        return n(a, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var a = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            this.applyStyle(c, !0)
                        }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live) {
                    var d = new p(function(b) {
                        for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                var f = d.addedNodes[e];
                                a.doSync(f)
                            }
                    }
                    );
                    d.observe(document.body, {
                        childList: !0,
                        subtree: !0
                    })
                }
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                j(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                j(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                p.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(a) {
                if ("undefined" != typeof a && null !== a || (a = this.element),
                1 === a.nodeType) {
                    a = a.parentNode || a;
                    for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                        var e = b[c];
                        d(e, this.all) || (this.boxes.push(e),
                        this.all.push(e),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                        this.scrolled = !0)
                    }
                }
            }
        }, {
            key: "show",
            value: function(a) {
                return this.applyStyle(a),
                a.className = a.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(a),
                h(a, this.wowEvent),
                this.config.resetAnimation && (i(a, "animationend", this.resetAnimation),
                i(a, "oanimationend", this.resetAnimation),
                i(a, "webkitAnimationEnd", this.resetAnimation),
                i(a, "MSAnimationEnd", this.resetAnimation)),
                a
            }
        }, {
            key: "applyStyle",
            value: function(a, b) {
                var c = this
                  , d = a.getAttribute("data-wow-duration")
                  , e = a.getAttribute("data-wow-delay")
                  , f = a.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return c.customStyle(a, b, d, e, f)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var a = 0; a < this.boxes.length; a++) {
                    var b = this.boxes[a];
                    b.style.visibility = "visible"
                }
            }
        }, {
            key: "resetAnimation",
            value: function(a) {
                if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                    var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(a, b, c, d, e) {
                return b && this.cacheAnimationName(a),
                a.style.visibility = b ? "hidden" : "visible",
                c && this.vendorSet(a.style, {
                    animationDuration: c
                }),
                d && this.vendorSet(a.style, {
                    animationDelay: d
                }),
                e && this.vendorSet(a.style, {
                    animationIterationCount: e
                }),
                this.vendorSet(a.style, {
                    animationName: b ? "none" : this.cachedAnimationName(a)
                }),
                a
            }
        }, {
            key: "vendorSet",
            value: function(a, b) {
                for (var c in b)
                    if (b.hasOwnProperty(c)) {
                        var d = b[c];
                        a["" + c] = d;
                        for (var e = 0; e < this.vendors.length; e++) {
                            var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(a, b) {
                for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                    var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                }
                return d
            }
        }, {
            key: "animationName",
            value: function(a) {
                var b = void 0;
                try {
                    b = this.vendorCSS(a, "animation-name").cssText
                } catch (c) {
                    b = q(a).getPropertyValue("animation-name")
                }
                return "none" === b ? "" : b
            }
        }, {
            key: "cacheAnimationName",
            value: function(a) {
                return this.animationNameCache.set(a, this.animationName(a))
            }
        }, {
            key: "cachedAnimationName",
            value: function(a) {
                return this.animationNameCache.get(a)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var a = [], b = 0; b < this.boxes.length; b++) {
                        var c = this.boxes[b];
                        if (c) {
                            if (this.isVisible(c)) {
                                this.show(c);
                                continue
                            }
                            a.push(c)
                        }
                    }
                    this.boxes = a,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(a) {
                for (; void 0 === a.offsetTop; )
                    a = a.parentNode;
                for (var b = a.offsetTop; a.offsetParent; )
                    a = a.offsetParent,
                    b += a.offsetTop;
                return b
            }
        }, {
            key: "isVisible",
            value: function(a) {
                var b = a.getAttribute("data-wow-offset") || this.config.offset
                  , c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , d = c + Math.min(this.element.clientHeight, k()) - b
                  , e = this.offsetTop(a)
                  , f = e + a.clientHeight;
                return d >= e && f >= c
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && f(navigator.userAgent)
            }
        }]),
        a
    }();
    b["default"] = r,
    a.exports = b["default"]
});

// jquery.meanmenu.min.js
!function($) {
    "use strict";
    $.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "20px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = e.meanMenuTarget
              , t = e.meanMenuContainer
              , r = e.meanMenuClose
              , i = e.meanMenuCloseSize
              , s = e.meanMenuOpen
              , u = e.meanRevealPosition
              , m = e.meanRevealPositionDistance
              , l = e.meanRevealColour
              , o = e.meanScreenWidth
              , c = e.meanNavPush
              , v = ".meanmenu-reveal"
              , h = e.meanShowChildren
              , d = e.meanExpandableChildren
              , y = e.meanExpand
              , j = e.meanContract
              , Q = e.meanRemoveAttrs
              , f = e.onePage
              , g = e.meanDisplay
              , p = e.removeElements
              , C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0),
            (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = ""
              , x = function() {
                if ("center" === u) {
                    var e = window.innerWidth || document.documentElement.clientWidth
                      , n = e / 2 - 22 + "px";
                    w = "left:" + n + ";right:auto;",
                    C ? jQuery(".meanmenu-reveal").animate({
                        left: n
                    }) : jQuery(".meanmenu-reveal").css("left", n)
                }
            }
              , A = !1
              , E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"),
            "left" === u && (w = "left:" + m + ";right:auto;"),
            x();
            var M = ""
              , P = function() {
                M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
            }
              , W = function() {
                jQuery(".mean-bar,.mean-push").remove(),
                jQuery(t).removeClass("mean-container"),
                jQuery(n).css("display", g),
                A = !1,
                E = !1,
                jQuery(p).removeClass("mean-remove")
            }
              , b = function() {
                var e = "background:" + l + ";color:" + l + ";" + w;
                if (o >= a) {
                    jQuery(p).addClass("mean-remove"),
                    E = !0,
                    jQuery(t).addClass("mean-container"),
                    jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var r = jQuery(n).html();
                    jQuery(".mean-nav").html(r),
                    Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"),
                        jQuery(this).removeAttr("id")
                    }),
                    jQuery(n).before('<div class="mean-push" />'),
                    jQuery(".mean-push").css("margin-top", c),
                    jQuery(n).hide(),
                    jQuery(".meanmenu-reveal").show(),
                    jQuery(v).html(s),
                    M = jQuery(v),
                    jQuery(".mean-nav ul").hide(),
                    h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                    }),
                    jQuery(".mean-expand").on("click", function(e) {
                        e.preventDefault(),
                        jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y),
                        jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j),
                        jQuery(this).prev("ul").slideDown(300, function() {})),
                        jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(),
                    jQuery(".mean-nav ul li").last().addClass("mean-last"),
                    M.removeClass("meanclose"),
                    jQuery(M).click(function(e) {
                        e.preventDefault(),
                        A === !1 ? (M.css("text-align", "center"),
                        M.css("text-indent", "0"),
                        M.css("font-size", i),
                        jQuery(".mean-nav ul:first").slideDown(),
                        A = !0) : (jQuery(".mean-nav ul:first").slideUp(),
                        A = !1),
                        M.toggleClass("meanclose"),
                        P(),
                        jQuery(p).addClass("mean-remove")
                    }),
                    f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                        jQuery(".mean-nav ul:first").slideUp(),
                        A = !1,
                        jQuery(M).toggleClass("meanclose").html(s)
                    })
                } else
                    W()
            };
            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth,
                a > o,
                W(),
                o >= a ? (b(),
                x()) : W()
            }),
            jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth,
                C ? (x(),
                o >= a ? E === !1 && b() : W()) : (W(),
                o >= a && (b(),
                x()))
            }),
            b()
        })
    }
}(jQuery);

// fakeLoader.min.js
!function(d) {
    d.fakeLoader = function(i) {
        var s = d.extend({
            targetClass: "fakeLoader",
            timeToHide: 1200,
            bgColor: "#2ecc71",
            spinner: "spinner2"
        }, i)
          , c = '<div class="fl fl-spinner spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
          , e = d("body").find("." + s.targetClass);
        e.each(function() {
            switch (s.spinner) {
            case "spinner1":
                e.html(c);
                break;
            case "spinner2":
                e.html('<div class="fl fl-spinner spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>');
                break;
            case "spinner3":
                e.html('<div class="fl fl-spinner spinner3"><div class="dot1"></div><div class="dot2"></div></div>');
                break;
            case "spinner4":
                e.html('<div class="fl fl-spinner spinner4"></div>');
                break;
            case "spinner5":
                e.html('<div class="fl fl-spinner spinner5"><div class="cube1"></div><div class="cube2"></div></div>');
                break;
            case "spinner6":
                e.html('<div class="fl fl-spinner spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>');
                break;
            case "spinner7":
                e.html('<div class="fl fl-spinner spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>');
                break;
            default:
                e.html(c)
            }
        }),
        e.css({
            backgroundColor: s.bgColor
        }),
        setTimeout(function() {
            d(e).fadeOut()
        }, s.timeToHide)
    }
}(jQuery);

/*jquery.qrcode*/
(function(r) {
    r.fn.qrcode = function(h) {
        var s;
        function u(a) {
            this.mode = s;
            this.data = a
        }
        function o(a, c) {
            this.typeNumber = a;
            this.errorCorrectLevel = c;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = []
        }
        function q(a, c) {
            if (void 0 == a.length)
                throw Error(a.length + "/" + c);
            for (var d = 0; d < a.length && 0 == a[d]; )
                d++;
            this.num = Array(a.length - d + c);
            for (var b = 0; b < a.length - d; b++)
                this.num[b] = a[b + d]
        }
        function p(a, c) {
            this.totalCount = a;
            this.dataCount = c
        }
        function t() {
            this.buffer = [];
            this.length = 0
        }
        u.prototype = {
            getLength: function() {
                return this.data.length
            },
            write: function(a) {
                for (var c = 0; c < this.data.length; c++)
                    a.put(this.data.charCodeAt(c), 8)
            }
        };
        o.prototype = {
            addData: function(a) {
                this.dataList.push(new u(a));
                this.dataCache = null
            },
            isDark: function(a, c) {
                if (0 > a || this.moduleCount <= a || 0 > c || this.moduleCount <= c)
                    throw Error(a + "," + c);
                return this.modules[a][c]
            },
            getModuleCount: function() {
                return this.moduleCount
            },
            make: function() {
                if (1 > this.typeNumber) {
                    for (var a = 1, a = 1; 40 > a; a++) {
                        for (var c = p.getRSBlocks(a, this.errorCorrectLevel), d = new t, b = 0, e = 0; e < c.length; e++)
                            b += c[e].dataCount;
                        for (e = 0; e < this.dataList.length; e++)
                            c = this.dataList[e],
                            d.put(c.mode, 4),
                            d.put(c.getLength(), j.getLengthInBits(c.mode, a)),
                            c.write(d);
                        if (d.getLengthInBits() <= 8 * b)
                            break
                    }
                    this.typeNumber = a
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            },
            makeImpl: function(a, c) {
                this.moduleCount = 4 * this.typeNumber + 17;
                this.modules = Array(this.moduleCount);
                for (var d = 0; d < this.moduleCount; d++) {
                    this.modules[d] = Array(this.moduleCount);
                    for (var b = 0; b < this.moduleCount; b++)
                        this.modules[d][b] = null
                }
                this.setupPositionProbePattern(0, 0);
                this.setupPositionProbePattern(this.moduleCount - 7, 0);
                this.setupPositionProbePattern(0, this.moduleCount - 7);
                this.setupPositionAdjustPattern();
                this.setupTimingPattern();
                this.setupTypeInfo(a, c);
                7 <= this.typeNumber && this.setupTypeNumber(a);
                null == this.dataCache && (this.dataCache = o.createData(this.typeNumber, this.errorCorrectLevel, this.dataList));
                this.mapData(this.dataCache, c)
            },
            setupPositionProbePattern: function(a, c) {
                for (var d = -1; 7 >= d; d++)
                    if (!(-1 >= a + d || this.moduleCount <= a + d))
                        for (var b = -1; 7 >= b; b++)
                            -1 >= c + b || this.moduleCount <= c + b || (this.modules[a + d][c + b] = 0 <= d && 6 >= d && (0 == b || 6 == b) || 0 <= b && 6 >= b && (0 == d || 6 == d) || 2 <= d && 4 >= d && 2 <= b && 4 >= b ? !0 : !1)
            },
            getBestMaskPattern: function() {
                for (var a = 0, c = 0, d = 0; 8 > d; d++) {
                    this.makeImpl(!0, d);
                    var b = j.getLostPoint(this);
                    if (0 == d || a > b)
                        a = b,
                        c = d
                }
                return c
            },
            createMovieClip: function(a, c, d) {
                a = a.createEmptyMovieClip(c, d);
                this.make();
                for (c = 0; c < this.modules.length; c++)
                    for (var d = 1 * c, b = 0; b < this.modules[c].length; b++) {
                        var e = 1 * b;
                        this.modules[c][b] && (a.beginFill(0, 100),
                        a.moveTo(e, d),
                        a.lineTo(e + 1, d),
                        a.lineTo(e + 1, d + 1),
                        a.lineTo(e, d + 1),
                        a.endFill())
                    }
                return a
            },
            setupTimingPattern: function() {
                for (var a = 8; a < this.moduleCount - 8; a++)
                    null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
                for (a = 8; a < this.moduleCount - 8; a++)
                    null == this.modules[6][a] && (this.modules[6][a] = 0 == a % 2)
            },
            setupPositionAdjustPattern: function() {
                for (var a = j.getPatternPosition(this.typeNumber), c = 0; c < a.length; c++)
                    for (var d = 0; d < a.length; d++) {
                        var b = a[c]
                          , e = a[d];
                        if (null == this.modules[b][e])
                            for (var f = -2; 2 >= f; f++)
                                for (var i = -2; 2 >= i; i++)
                                    this.modules[b + f][e + i] = -2 == f || 2 == f || -2 == i || 2 == i || 0 == f && 0 == i ? !0 : !1
                    }
            },
            setupTypeNumber: function(a) {
                for (var c = j.getBCHTypeNumber(this.typeNumber), d = 0; 18 > d; d++) {
                    var b = !a && 1 == (c >> d & 1);
                    this.modules[Math.floor(d / 3)][d % 3 + this.moduleCount - 8 - 3] = b
                }
                for (d = 0; 18 > d; d++)
                    b = !a && 1 == (c >> d & 1),
                    this.modules[d % 3 + this.moduleCount - 8 - 3][Math.floor(d / 3)] = b
            },
            setupTypeInfo: function(a, c) {
                for (var d = j.getBCHTypeInfo(this.errorCorrectLevel << 3 | c), b = 0; 15 > b; b++) {
                    var e = !a && 1 == (d >> b & 1);
                    6 > b ? this.modules[b][8] = e : 8 > b ? this.modules[b + 1][8] = e : this.modules[this.moduleCount - 15 + b][8] = e
                }
                for (b = 0; 15 > b; b++)
                    e = !a && 1 == (d >> b & 1),
                    8 > b ? this.modules[8][this.moduleCount - b - 1] = e : 9 > b ? this.modules[8][15 - b - 1 + 1] = e : this.modules[8][15 - b - 1] = e;
                this.modules[this.moduleCount - 8][8] = !a
            },
            mapData: function(a, c) {
                for (var d = -1, b = this.moduleCount - 1, e = 7, f = 0, i = this.moduleCount - 1; 0 < i; i -= 2)
                    for (6 == i && i--; ; ) {
                        for (var g = 0; 2 > g; g++)
                            if (null == this.modules[b][i - g]) {
                                var n = !1;
                                f < a.length && (n = 1 == (a[f] >>> e & 1));
                                j.getMask(c, b, i - g) && (n = !n);
                                this.modules[b][i - g] = n;
                                e--;
                                -1 == e && (f++,
                                e = 7)
                            }
                        b += d;
                        if (0 > b || this.moduleCount <= b) {
                            b -= d;
                            d = -d;
                            break
                        }
                    }
            }
        };
        o.PAD0 = 236;
        o.PAD1 = 17;
        o.createData = function(a, c, d) {
            for (var c = p.getRSBlocks(a, c), b = new t, e = 0; e < d.length; e++) {
                var f = d[e];
                b.put(f.mode, 4);
                b.put(f.getLength(), j.getLengthInBits(f.mode, a));
                f.write(b)
            }
            for (e = a = 0; e < c.length; e++)
                a += c[e].dataCount;
            if (b.getLengthInBits() > 8 * a)
                throw Error("code length overflow. (" + b.getLengthInBits() + ">" + 8 * a + ")");
            for (b.getLengthInBits() + 4 <= 8 * a && b.put(0, 4); 0 != b.getLengthInBits() % 8; )
                b.putBit(!1);
            for (; !(b.getLengthInBits() >= 8 * a); ) {
                b.put(o.PAD0, 8);
                if (b.getLengthInBits() >= 8 * a)
                    break;
                b.put(o.PAD1, 8)
            }
            return o.createBytes(b, c)
        }
        ;
        o.createBytes = function(a, c) {
            for (var d = 0, b = 0, e = 0, f = Array(c.length), i = Array(c.length), g = 0; g < c.length; g++) {
                var n = c[g].dataCount
                  , h = c[g].totalCount - n
                  , b = Math.max(b, n)
                  , e = Math.max(e, h);
                f[g] = Array(n);
                for (var k = 0; k < f[g].length; k++)
                    f[g][k] = 255 & a.buffer[k + d];
                d += n;
                k = j.getErrorCorrectPolynomial(h);
                n = (new q(f[g],k.getLength() - 1)).mod(k);
                i[g] = Array(k.getLength() - 1);
                for (k = 0; k < i[g].length; k++)
                    h = k + n.getLength() - i[g].length,
                    i[g][k] = 0 <= h ? n.get(h) : 0
            }
            for (k = g = 0; k < c.length; k++)
                g += c[k].totalCount;
            d = Array(g);
            for (k = n = 0; k < b; k++)
                for (g = 0; g < c.length; g++)
                    k < f[g].length && (d[n++] = f[g][k]);
            for (k = 0; k < e; k++)
                for (g = 0; g < c.length; g++)
                    k < i[g].length && (d[n++] = i[g][k]);
            return d
        }
        ;
        s = 4;
        for (var j = {
            PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function(a) {
                for (var c = a << 10; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G15); )
                    c ^= j.G15 << j.getBCHDigit(c) - j.getBCHDigit(j.G15);
                return (a << 10 | c) ^ j.G15_MASK
            },
            getBCHTypeNumber: function(a) {
                for (var c = a << 12; 0 <= j.getBCHDigit(c) - j.getBCHDigit(j.G18); )
                    c ^= j.G18 << j.getBCHDigit(c) - j.getBCHDigit(j.G18);
                return a << 12 | c
            },
            getBCHDigit: function(a) {
                for (var c = 0; 0 != a; )
                    c++,
                    a >>>= 1;
                return c
            },
            getPatternPosition: function(a) {
                return j.PATTERN_POSITION_TABLE[a - 1]
            },
            getMask: function(a, c, d) {
                switch (a) {
                case 0:
                    return 0 == (c + d) % 2;
                case 1:
                    return 0 == c % 2;
                case 2:
                    return 0 == d % 3;
                case 3:
                    return 0 == (c + d) % 3;
                case 4:
                    return 0 == (Math.floor(c / 2) + Math.floor(d / 3)) % 2;
                case 5:
                    return 0 == c * d % 2 + c * d % 3;
                case 6:
                    return 0 == (c * d % 2 + c * d % 3) % 2;
                case 7:
                    return 0 == (c * d % 3 + (c + d) % 2) % 2;
                default:
                    throw Error("bad maskPattern:" + a);
                }
            },
            getErrorCorrectPolynomial: function(a) {
                for (var c = new q([1],0), d = 0; d < a; d++)
                    c = c.multiply(new q([1, l.gexp(d)],0));
                return c
            },
            getLengthInBits: function(a, c) {
                if (1 <= c && 10 > c)
                    switch (a) {
                    case 1:
                        return 10;
                    case 2:
                        return 9;
                    case s:
                        return 8;
                    case 8:
                        return 8;
                    default:
                        throw Error("mode:" + a);
                    }
                else if (27 > c)
                    switch (a) {
                    case 1:
                        return 12;
                    case 2:
                        return 11;
                    case s:
                        return 16;
                    case 8:
                        return 10;
                    default:
                        throw Error("mode:" + a);
                    }
                else if (41 > c)
                    switch (a) {
                    case 1:
                        return 14;
                    case 2:
                        return 13;
                    case s:
                        return 16;
                    case 8:
                        return 12;
                    default:
                        throw Error("mode:" + a);
                    }
                else
                    throw Error("type:" + c);
            },
            getLostPoint: function(a) {
                for (var c = a.getModuleCount(), d = 0, b = 0; b < c; b++)
                    for (var e = 0; e < c; e++) {
                        for (var f = 0, i = a.isDark(b, e), g = -1; 1 >= g; g++)
                            if (!(0 > b + g || c <= b + g))
                                for (var h = -1; 1 >= h; h++)
                                    0 > e + h || c <= e + h || 0 == g && 0 == h || i == a.isDark(b + g, e + h) && f++;
                        5 < f && (d += 3 + f - 5)
                    }
                for (b = 0; b < c - 1; b++)
                    for (e = 0; e < c - 1; e++)
                        if (f = 0,
                        a.isDark(b, e) && f++,
                        a.isDark(b + 1, e) && f++,
                        a.isDark(b, e + 1) && f++,
                        a.isDark(b + 1, e + 1) && f++,
                        0 == f || 4 == f)
                            d += 3;
                for (b = 0; b < c; b++)
                    for (e = 0; e < c - 6; e++)
                        a.isDark(b, e) && !a.isDark(b, e + 1) && a.isDark(b, e + 2) && a.isDark(b, e + 3) && a.isDark(b, e + 4) && !a.isDark(b, e + 5) && a.isDark(b, e + 6) && (d += 40);
                for (e = 0; e < c; e++)
                    for (b = 0; b < c - 6; b++)
                        a.isDark(b, e) && !a.isDark(b + 1, e) && a.isDark(b + 2, e) && a.isDark(b + 3, e) && a.isDark(b + 4, e) && !a.isDark(b + 5, e) && a.isDark(b + 6, e) && (d += 40);
                for (e = f = 0; e < c; e++)
                    for (b = 0; b < c; b++)
                        a.isDark(b, e) && f++;
                a = Math.abs(100 * f / c / c - 50) / 5;
                return d + 10 * a
            }
        }, l = {
            glog: function(a) {
                if (1 > a)
                    throw Error("glog(" + a + ")");
                return l.LOG_TABLE[a]
            },
            gexp: function(a) {
                for (; 0 > a; )
                    a += 255;
                for (; 256 <= a; )
                    a -= 255;
                return l.EXP_TABLE[a]
            },
            EXP_TABLE: Array(256),
            LOG_TABLE: Array(256)
        }, m = 0; 8 > m; m++)
            l.EXP_TABLE[m] = 1 << m;
        for (m = 8; 256 > m; m++)
            l.EXP_TABLE[m] = l.EXP_TABLE[m - 4] ^ l.EXP_TABLE[m - 5] ^ l.EXP_TABLE[m - 6] ^ l.EXP_TABLE[m - 8];
        for (m = 0; 255 > m; m++)
            l.LOG_TABLE[l.EXP_TABLE[m]] = m;
        q.prototype = {
            get: function(a) {
                return this.num[a]
            },
            getLength: function() {
                return this.num.length
            },
            multiply: function(a) {
                for (var c = Array(this.getLength() + a.getLength() - 1), d = 0; d < this.getLength(); d++)
                    for (var b = 0; b < a.getLength(); b++)
                        c[d + b] ^= l.gexp(l.glog(this.get(d)) + l.glog(a.get(b)));
                return new q(c,0)
            },
            mod: function(a) {
                if (0 > this.getLength() - a.getLength())
                    return this;
                for (var c = l.glog(this.get(0)) - l.glog(a.get(0)), d = Array(this.getLength()), b = 0; b < this.getLength(); b++)
                    d[b] = this.get(b);
                for (b = 0; b < a.getLength(); b++)
                    d[b] ^= l.gexp(l.glog(a.get(b)) + c);
                return (new q(d,0)).mod(a)
            }
        };
        p.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
        p.getRSBlocks = function(a, c) {
            var d = p.getRsBlockTable(a, c);
            if (void 0 == d)
                throw Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + c);
            for (var b = d.length / 3, e = [], f = 0; f < b; f++)
                for (var h = d[3 * f + 0], g = d[3 * f + 1], j = d[3 * f + 2], l = 0; l < h; l++)
                    e.push(new p(g,j));
            return e
        }
        ;
        p.getRsBlockTable = function(a, c) {
            switch (c) {
            case 1:
                return p.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case 0:
                return p.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case 3:
                return p.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case 2:
                return p.RS_BLOCK_TABLE[4 * (a - 1) + 3]
            }
        }
        ;
        t.prototype = {
            get: function(a) {
                return 1 == (this.buffer[Math.floor(a / 8)] >>> 7 - a % 8 & 1)
            },
            put: function(a, c) {
                for (var d = 0; d < c; d++)
                    this.putBit(1 == (a >>> c - d - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(a) {
                var c = Math.floor(this.length / 8);
                this.buffer.length <= c && this.buffer.push(0);
                a && (this.buffer[c] |= 128 >>> this.length % 8);
                this.length++
            }
        };
        "string" === typeof h && (h = {
            text: h
        });
        h = r.extend({}, {
            render: "canvas",
            width: 256,
            height: 256,
            typeNumber: -1,
            correctLevel: 2,
            background: "#ffffff",
            foreground: "#000000"
        }, h);
        return this.each(function() {
            var a;
            if ("canvas" == h.render) {
                a = new o(h.typeNumber,h.correctLevel);
                a.addData(h.text);
                a.make();
                var c = document.createElement("canvas");
                c.width = h.width;
                c.height = h.height;
                for (var d = c.getContext("2d"), b = h.width / a.getModuleCount(), e = h.height / a.getModuleCount(), f = 0; f < a.getModuleCount(); f++)
                    for (var i = 0; i < a.getModuleCount(); i++) {
                        d.fillStyle = a.isDark(f, i) ? h.foreground : h.background;
                        var g = Math.ceil((i + 1) * b) - Math.floor(i * b)
                          , j = Math.ceil((f + 1) * b) - Math.floor(f * b);
                        d.fillRect(Math.round(i * b), Math.round(f * e), g, j)
                    }
            } else {
                a = new o(h.typeNumber,h.correctLevel);
                a.addData(h.text);
                a.make();
                c = r("<table></table>").css("width", h.width + "px").css("height", h.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", h.background);
                d = h.width / a.getModuleCount();
                b = h.height / a.getModuleCount();
                for (e = 0; e < a.getModuleCount(); e++) {
                    f = r("<tr></tr>").css("height", b + "px").appendTo(c);
                    for (i = 0; i < a.getModuleCount(); i++)
                        r("<td></td>").css("width", d + "px").css("background-color", a.isDark(e, i) ? h.foreground : h.background).appendTo(f)
                }
            }
            a = c;
            jQuery(a).appendTo(this)
        })
    }
}
)(jQuery);

/*
 * ! fancyBox v2.1.5 fancyapps.com |
 *fancyapps.com/fancybox/#license
 */
(function(r, G, f, v) {
    var J = f("html")
      , n = f(r)
      , p = f(G)
      , b = f.fancybox = function() {
        b.open.apply(this, arguments)
    }
      , I = navigator.userAgent.match(/msie/i)
      , B = null
      , s = G.createTouch !== v
      , t = function(a) {
        return a && a.hasOwnProperty && a instanceof f
    }
      , q = function(a) {
        return a && "string" === f.type(a)
    }
      , E = function(a) {
        return q(a) && 0 < a.indexOf("%")
    }
      , l = function(a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }
      , w = function(a, b) {
        return l(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "auto",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(a, d) {
            if (a && (f.isPlainObject(d) || (d = {}),
            !1 !== b.close(!0)))
                return f.isArray(a) || (a = t(a) ? f(a).get() : [a]),
                f.each(a, function(e, c) {
                    var k = {}, g, h, j, m, l;
                    "object" === f.type(c) && (c.nodeType && (c = f(c)),
                    t(c) ? (k = {
                        href: c.data("fancybox-href") || c.attr("href"),
                        title: c.data("fancybox-title") || c.attr("title"),
                        isDom: !0,
                        element: c
                    },
                    f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                    g = d.href || k.href || (q(c) ? c : null);
                    h = d.title !== v ? d.title : k.title || "";
                    m = (j = d.content || k.content) ? "html" : d.type || k.type;
                    !m && k.isDom && (m = c.data("fancybox-type"),
                    m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                    q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html",
                    j = c)),
                    "ajax" === m && (l = g.split(/\s+/, 2),
                    g = l.shift(),
                    l = l.shift()));
                    j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline",
                    j = c));
                    f.extend(k, {
                        href: g,
                        type: m,
                        content: j,
                        title: h,
                        selector: l
                    });
                    a[e] = k
                }),
                b.opts = f.extend(!0, {}, b.defaults, d),
                d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1),
                b.group = a,
                b._start(b.opts.index)
        },
        cancel: function() {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(),
            b.ajaxLoad && b.ajaxLoad.abort(),
            b.ajaxLoad = null,
            b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null),
            a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(),
            b.coming = null,
            b.current || b._afterZoomOut(a))
        },
        close: function(a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(),
            b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
            b._afterZoomOut()) : (b.isOpen = b.isOpened = !1,
            b.isClosing = !0,
            f(".fancybox-item, .fancybox-nav").remove(),
            b.wrap.stop(!0, !0).removeClass("fancybox-opened"),
            b.transitions[b.current.closeMethod]())))
        },
        play: function(a) {
            var d = function() {
                clearTimeout(b.player.timer)
            }
              , e = function() {
                d();
                b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
            }
              , c = function() {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1))
                    b.player.isActive = !0,
                    p.bind({
                        "onCancel.player beforeClose.player": c,
                        "onUpdate.player": e,
                        "beforeLoad.player": d
                    }),
                    e(),
                    b.trigger("onPlayStart")
            } else
                c()
        },
        next: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next),
            b.jumpto(d.index + 1, a, "next"))
        },
        prev: function(a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev),
            b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function(a, d, e) {
            var c = b.current;
            c && (a = l(a),
            b.direction = d || c.direction[a >= c.index ? "next" : "prev"],
            b.router = e || "jumpto",
            c.loop && (0 > a && (a = c.group.length + a % c.group.length),
            a %= c.group.length),
            c.group[a] !== v && (b.cancel(),
            b._start(a)))
        },
        reposition: function(a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d),
            a && "scroll" === a.type ? (delete k.position,
            c.stop(!0, !0).animate(k, 200)) : (c.css(k),
            e.pos = f.extend({}, e.dim, k)))
        },
        update: function(a) {
            var d = a && a.type
              , e = !d || "orientationchange" === d;
            e && (clearTimeout(B),
            B = null);
            b.isOpen && !B && (B = setTimeout(function() {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"),
                (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(),
                "scroll" === d && c.canShrink || b.reposition(a),
                b.trigger("onUpdate"),
                B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function(a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView,
            s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"),
            b.trigger("onUpdate")),
            b.update())
        },
        hideLoading: function() {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function() {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function(a) {
                if (27 === (a.which || a.keyCode))
                    a.preventDefault(),
                    b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(),
            a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function() {
            var a = b.current && b.current.locked || !1
              , d = {
                x: n.scrollLeft(),
                y: n.scrollTop()
            };
            a ? (d.w = a[0].clientWidth,
            d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(),
            d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function() {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function() {
            var a = b.current, d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update),
            (d = a.keys) && p.bind("keydown.fb", function(e) {
                var c = e.which || e.keyCode
                  , k = e.target || e.srcElement;
                if (27 === c && b.coming)
                    return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
                    if (1 < a.group.length && k[c] !== v)
                        return b[d](k[c]),
                        e.preventDefault(),
                        !1;
                    if (-1 < f.inArray(c, k))
                        return b[d](),
                        e.preventDefault(),
                        !1
                })
            }),
            f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap"); )
                    j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight),
                    h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k)
                        b.prev(0 < g ? "down" : "left");
                    else if (0 > g || 0 > k)
                        b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function(a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)
                    return !1;
                c.helpers && f.each(c.helpers, function(d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))
                        b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function(a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)
                return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))
                b.coming = null;
            else {
                c = d.type;
                e = d.href;
                if (!c)
                    return b.coming = null,
                    b.current && b.router && "jumpto" !== b.router ? (b.current.index = a,
                    b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c)
                    d.autoHeight = d.autoWidth = !1,
                    d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)
                        return b._error("content")
                } else if (!e)
                    return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function(a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function() {
            var a = b.imgPreload = new Image;
            a.onload = function() {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            }
            ;
            a.onerror = function() {
                this.onload = this.onerror = null;
                b._error("image")
            }
            ;
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function() {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href,
                error: function(a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                },
                success: function(d, e) {
                    "success" === e && (a.content = d,
                    b._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var a = b.coming
              , d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function() {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {}
            });
            a.iframe.preload && (b.showLoading(),
            d.one("load", function() {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function() {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)
                f = a[(d.index + g) % e],
                "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function() {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)
                if (!1 === b.trigger("afterLoad", a, d))
                    a.wrap.stop(!0).trigger("onReset").remove(),
                    b.coming = null;
                else {
                    d && (b.trigger("beforeChange", d),
                    d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    b.unbindEvents();
                    e = a.content;
                    c = a.type;
                    k = a.scrolling;
                    f.extend(b, {
                        wrap: a.wrap,
                        skin: a.skin,
                        outer: a.outer,
                        inner: a.inner,
                        current: a,
                        previous: d
                    });
                    g = a.href;
                    switch (c) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),
                        e = e.show().detach(),
                        a.wrap.bind("onReset", function() {
                            f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case "image":
                        e = a.tpl.image.replace("{href}", g);
                        break;
                    case "swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>',
                        h = "",
                        f.each(a.swf, function(a, b) {
                            e += '<param name="' + a + '" value="' + b + '"></param>';
                            h += " " + a + '="' + b + '"'
                        }),
                        e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                    }
                    (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                    b.trigger("beforeShow");
                    a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                    b._setDimension();
                    b.reposition();
                    b.isOpen = !1;
                    b.coming = null;
                    b.bindEvents();
                    if (b.isOpened) {
                        if (d.prevMethod)
                            b.transitions[d.prevMethod]()
                    } else
                        f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                    b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                    b._preloadImages()
                }
        },
        _setDimension: function() {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content,
                h.autoHeight && 1 === H.data("ready"))
                    try {
                        H[0].contentWindow.document.location && (g.width(C).height(9999),
                        F = H.contents().find("body"),
                        q && F.css("overflow-x", "hidden"),
                        A = F.outerHeight(!0))
                    } catch (G) {}
            } else if (h.autoWidth || h.autoHeight)
                g.addClass("fancybox-tmp"),
                h.autoWidth || g.width(C),
                h.autoHeight || g.height(A),
                h.autoWidth && (C = g.width()),
                h.autoHeight && (A = g.height()),
                g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n),
            p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n,
            j = l(c / D)),
            j > p && (j = p,
            c = l(j * D)),
            c < m && (c = m,
            j = l(c / D)),
            j < u && (j = u,
            c = l(j * D))) : (c = Math.max(m, Math.min(c, n)),
            h.autoHeight && "iframe" !== h.type && (g.width(c),
            j = g.height()),
            j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)
                if (g.width(c).height(j),
                e.width(c + x),
                a = e.width(),
                y = e.height(),
                h.aspectRatio)
                    for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++); )
                        j = Math.max(u, Math.min(p, j - 10)),
                        c = l(j * D),
                        c < m && (c = m,
                        j = l(c / D)),
                        c > n && (c = n,
                        j = l(c / D)),
                        g.width(c).height(j),
                        e.width(c + x),
                        a = e.width(),
                        y = e.height();
                else
                    c = Math.max(m, Math.min(c, c - (a - z))),
                    j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {
                    width: w(a),
                    height: w(y)
                },
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function(a) {
            var d = b.current
              , e = b.getViewport()
              , c = d.margin
              , f = b.wrap.width() + c[1] + c[3]
              , g = b.wrap.height() + c[0] + c[2]
              , c = {
                position: "absolute",
                top: c[0],
                left: c[3]
            };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y,
            c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function() {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0,
            b.wrap.css("overflow", "visible").addClass("fancybox-opened"),
            b.update(),
            (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(),
                b[a.closeClick ? "close" : "next"]())
            }),
            a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
                a.preventDefault();
                b.close()
            }),
            a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev),
            (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)),
            b.trigger("afterShow"),
            !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1,
            b.play()))
        },
        _afterZoomOut: function(a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function() {
            var a = b.current
              , d = a.element
              , e = a.orig
              , c = {}
              , f = 50
              , g = 50
              , h = a.hPadding
              , j = a.wPadding
              , m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"),
            e.length || (e = d));
            t(e) ? (c = e.offset(),
            e.is("img") && (f = e.outerWidth(),
            g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio,
            c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked)
                c.top -= m.y,
                c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        },
        step: function(a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace
              , h = c.skinSpace;
            if ("width" === f || "height" === f)
                e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start),
                b.isClosing && (e = 1 - e),
                c = "width" === f ? c.wPadding : c.hPadding,
                c = a - c,
                b.skin[f](l("width" === f ? c : c - g * e)),
                b.inner[f](l("width" === f ? c : c - g * e - h * e))
        },
        zoomIn: function() {
            var a = b.current
              , d = a.pos
              , e = a.openEffect
              , c = "elastic" === e
              , k = f.extend({
                opacity: 1
            }, d);
            delete k.position;
            c ? (d = this.getOrigPosition(),
            a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        },
        zoomOut: function() {
            var a = b.current
              , d = a.closeEffect
              , e = "elastic" === d
              , c = {
                opacity: 0.1
            };
            e && (c = this.getOrigPosition(),
            a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        },
        changeIn: function() {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {
                opacity: 1
            }, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left",
            "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200),
            c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200),
            c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        },
        changeOut: function() {
            var a = b.previous
              , d = a.prevEffect
              , e = {
                opacity: 0.1
            }
              , c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed,
                easing: a.prevEasing,
                complete: function() {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !s,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function(a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
            this.fixed = !0)
        },
        open: function(a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)),
            this.update());
            a.closeClick && this.overlay.bind("click.overlay", function(a) {
                if (f(a.target).hasClass("fancybox-overlay"))
                    return b.isActive ? b.close() : d.close(),
                    !1
            });
            this.overlay.css(a.css).show()
        },
        close: function() {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"),
            a = n.scrollTop(),
            b = n.scrollLeft(),
            this.el.removeClass("fancybox-lock"),
            n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth),
            p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function(a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1),
            b.locked = this.overlay.append(b.wrap),
            b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function() {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"),
            this.el.addClass("fancybox-margin")),
            e = n.scrollTop(),
            c = n.scrollLeft(),
            this.el.addClass("fancybox-lock"),
            n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(a) {
            var d = b.current
              , e = d.title
              , c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                case "inside":
                    c = b.skin;
                    break;
                case "outside":
                    c = b.wrap;
                    break;
                case "over":
                    c = b.inner;
                    break;
                default:
                    c = b.skin,
                    d.appendTo("body"),
                    I && d.width(d.width()),
                    d.wrapInner('<span class="child"></span>'),
                    b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function(a) {
        var d, e = f(this), c = this.selector || "", k = function(g) {
            var h = f(this).blur(), j = d, k, l;
            !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group",
            l = h.attr(k),
            l || (k = "rel",
            l = h.get(0)[k]),
            l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e,
            h = h.filter("[" + k + '="' + l + '"]'),
            j = h.index(this)),
            a.index = j,
            !1 !== b.open(h, a) && g.preventDefault())
        };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    }
    ;
    p.ready(function() {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function() {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
              , b = a.children()
              , b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        }
        );
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {
            scrollbarWidth: f.scrollbarWidth(),
            fixed: f.support.fixedPosition,
            parent: f("body")
        });
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
}
)(window, document, jQuery);

/*! lightgallery - v1.6.11 - 2018-05-22
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof module && module.exports ? module.exports = b(require("jquery")) : b(a.jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        function b(b, d) {
            if (this.el = b,
            this.$el = a(b),
            this.s = a.extend({}, c, d),
            this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {},
            this.lGalleryOn = !1,
            this.lgBusy = !1,
            this.hideBartimeout = !1,
            this.isTouch = "ontouchstart"in document.documentElement,
            this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
            this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = a(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(a(this.s.selector)) : this.$items = this.$el.children(),
            this.$slide = "",
            this.$outer = "",
            this.init(),
            this
        }
        var c = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1
        };
        b.prototype.init = function() {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf("lg=" + this.s.galleryId) > 0 && (b.index = parseInt(c.split("&slide=")[1], 10),
            a("body").addClass("lg-from-hash"),
            a("body").hasClass("lg-on") || (setTimeout(function() {
                b.build(b.index)
            }),
            a("body").addClass("lg-on"))),
            b.s.dynamic ? (b.$el.trigger("onBeforeOpen.lg"),
            b.index = b.s.index || 0,
            a("body").hasClass("lg-on") || setTimeout(function() {
                b.build(b.index),
                a("body").addClass("lg-on")
            })) : b.$items.on("click.lgcustom", function(c) {
                try {
                    c.preventDefault(),
                    c.preventDefault()
                } catch (a) {
                    c.returnValue = !1
                }
                b.$el.trigger("onBeforeOpen.lg"),
                b.index = b.s.index || b.$items.index(this),
                a("body").hasClass("lg-on") || (b.build(b.index),
                a("body").addClass("lg-on"))
            })
        }
        ,
        b.prototype.build = function(b) {
            var c = this;
            c.structure(),
            a.each(a.fn.lightGallery.modules, function(b) {
                c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
            }),
            c.slide(b, !1, !1, !1),
            c.s.keyPress && c.keyPress(),
            c.$items.length > 1 ? (c.arrow(),
            setTimeout(function() {
                c.enableDrag(),
                c.enableSwipe()
            }, 50),
            c.s.mousewheel && c.mousewheel()) : c.$slide.on("click.lg", function() {
                c.$el.trigger("onSlideClick.lg")
            }),
            c.counter(),
            c.closeGallery(),
            c.$el.trigger("onAfterOpen.lg"),
            c.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
                c.$outer.removeClass("lg-hide-items"),
                clearTimeout(c.hideBartimeout),
                c.hideBartimeout = setTimeout(function() {
                    c.$outer.addClass("lg-hide-items")
                }, c.s.hideBarsDelay)
            }),
            c.$outer.trigger("mousemove.lg")
        }
        ,
        b.prototype.structure = function() {
            var b, c = "", d = "", e = 0, f = "", g = this;
            for (a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"),
            e = 0; e < this.$items.length; e++)
                c += '<div class="lg-item"></div>';
            if (this.s.controls && this.$items.length > 1 && (d = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"),
            ".lg-sub-html" === this.s.appendSubHtmlTo && (f = '<div class="lg-sub-html"></div>'),
            b = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + c + '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' + d + f + "</div></div>",
            a("body").append(b),
            this.$outer = a(".lg-outer"),
            this.$slide = this.$outer.find(".lg-item"),
            this.s.useLeft ? (this.$outer.addClass("lg-use-left"),
            this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"),
            g.setTop(),
            a(window).on("resize.lg orientationchange.lg", function() {
                setTimeout(function() {
                    g.setTop()
                }, 100)
            }),
            this.$slide.eq(this.index).addClass("lg-current"),
            this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"),
            this.s.speed = 0),
            this.$outer.addClass(this.s.mode),
            this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"),
            this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
            this.doCss()) {
                var h = this.$outer.find(".lg-inner");
                h.css("transition-timing-function", this.s.cssEasing),
                h.css("transition-duration", this.s.speed + "ms")
            }
            setTimeout(function() {
                a(".lg-backdrop").addClass("in")
            }),
            setTimeout(function() {
                g.$outer.addClass("lg-visible")
            }, this.s.backdropDuration),
            this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'),
            this.prevScrollTop = a(window).scrollTop()
        }
        ,
        b.prototype.setTop = function() {
            if ("100%" !== this.s.height) {
                var b = a(window).height()
                  , c = (b - parseInt(this.s.height, 10)) / 2
                  , d = this.$outer.find(".lg");
                b >= parseInt(this.s.height, 10) ? d.css("top", c + "px") : d.css("top", "0px")
            }
        }
        ,
        b.prototype.doCss = function() {
            return !!function() {
                var a = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
                  , b = document.documentElement
                  , c = 0;
                for (c = 0; c < a.length; c++)
                    if (a[c]in b.style)
                        return !0
            }()
        }
        ,
        b.prototype.isVideo = function(a, b) {
            var c;
            if (c = this.s.dynamic ? this.s.dynamicEl[b].html : this.$items.eq(b).attr("data-html"),
            !a)
                return c ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not pvovided on slide item " + (b + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),
                !1);
            var d = a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i)
              , e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i)
              , f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i)
              , g = a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return d ? {
                youtube: d
            } : e ? {
                vimeo: e
            } : f ? {
                dailymotion: f
            } : g ? {
                vk: g
            } : void 0
        }
        ,
        b.prototype.counter = function() {
            this.s.counter && a(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }
        ,
        b.prototype.addHtml = function(b) {
            var c, d, e = null;
            if (this.s.dynamic ? this.s.dynamicEl[b].subHtmlUrl ? c = this.s.dynamicEl[b].subHtmlUrl : e = this.s.dynamicEl[b].subHtml : (d = this.$items.eq(b),
            d.attr("data-sub-html-url") ? c = d.attr("data-sub-html-url") : (e = d.attr("data-sub-html"),
            this.s.getCaptionFromTitleOrAlt && !e && (e = d.attr("title") || d.find("img").first().attr("alt")))),
            !c)
                if (void 0 !== e && null !== e) {
                    var f = e.substring(0, 1);
                    "." !== f && "#" !== f || (e = this.s.subHtmlSelectorRelative && !this.s.dynamic ? d.find(e).html() : a(e).html())
                } else
                    e = "";
            ".lg-sub-html" === this.s.appendSubHtmlTo ? c ? this.$outer.find(this.s.appendSubHtmlTo).load(c) : this.$outer.find(this.s.appendSubHtmlTo).html(e) : c ? this.$slide.eq(b).load(c) : this.$slide.eq(b).append(e),
            void 0 !== e && null !== e && ("" === e ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
            this.$el.trigger("onAfterAppendSubHtml.lg", [b])
        }
        ,
        b.prototype.preload = function(a) {
            var b = 1
              , c = 1;
            for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
                this.loadContent(a + b, !1, 0);
            for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
                this.loadContent(a - c, !1, 0)
        }
        ,
        b.prototype.loadContent = function(b, c, d) {
            var e, f, g, h, i, j, k = this, l = !1, m = function(b) {
                for (var c = [], d = [], e = 0; e < b.length; e++) {
                    var g = b[e].split(" ");
                    "" === g[0] && g.splice(0, 1),
                    d.push(g[0]),
                    c.push(g[1])
                }
                for (var h = a(window).width(), i = 0; i < c.length; i++)
                    if (parseInt(c[i], 10) > h) {
                        f = d[i];
                        break
                    }
            };
            if (k.s.dynamic) {
                if (k.s.dynamicEl[b].poster && (l = !0,
                g = k.s.dynamicEl[b].poster),
                j = k.s.dynamicEl[b].html,
                f = k.s.dynamicEl[b].src,
                k.s.dynamicEl[b].responsive) {
                    m(k.s.dynamicEl[b].responsive.split(","))
                }
                h = k.s.dynamicEl[b].srcset,
                i = k.s.dynamicEl[b].sizes
            } else {
                if (k.$items.eq(b).attr("data-poster") && (l = !0,
                g = k.$items.eq(b).attr("data-poster")),
                j = k.$items.eq(b).attr("data-html"),
                f = k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src"),
                k.$items.eq(b).attr("data-responsive")) {
                    m(k.$items.eq(b).attr("data-responsive").split(","))
                }
                h = k.$items.eq(b).attr("data-srcset"),
                i = k.$items.eq(b).attr("data-sizes")
            }
            var n = !1;
            k.s.dynamic ? k.s.dynamicEl[b].iframe && (n = !0) : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
            var o = k.isVideo(f, b);
            if (!k.$slide.eq(b).hasClass("lg-loaded")) {
                if (n)
                    k.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + k.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + f + '"  allowfullscreen="true"></iframe></div></div>');
                else if (l) {
                    var p = "";
                    p = o && o.youtube ? "lg-has-youtube" : o && o.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                    k.$slide.eq(b).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + g + '" /></div></div>')
                } else
                    o ? (k.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                    k.$el.trigger("hasVideo.lg", [b, f, j])) : k.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + f + '" /></div>');
                if (k.$el.trigger("onAferAppendSlide.lg", [b]),
                e = k.$slide.eq(b).find(".lg-object"),
                i && e.attr("sizes", i),
                h) {
                    e.attr("srcset", h);
                    try {
                        picturefill({
                            elements: [e[0]]
                        })
                    } catch (a) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
                k.$slide.eq(b).addClass("lg-loaded")
            }
            k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                var c = 0;
                d && !a("body").hasClass("lg-from-hash") && (c = d),
                setTimeout(function() {
                    k.$slide.eq(b).addClass("lg-complete"),
                    k.$el.trigger("onSlideItemLoad.lg", [b, d || 0])
                }, c)
            }),
            o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
            !0 === c && (k.$slide.eq(b).hasClass("lg-complete") ? k.preload(b) : k.$slide.eq(b).find(".lg-object").on("load.lg error.lg", function() {
                k.preload(b)
            }))
        }
        ,
        b.prototype.slide = function(b, c, d, e) {
            var f = this.$outer.find(".lg-current").index()
              , g = this;
            if (!g.lGalleryOn || f !== b) {
                var h = this.$slide.length
                  , i = g.lGalleryOn ? this.s.speed : 0;
                if (!g.lgBusy) {
                    if (this.s.download) {
                        var j;
                        j = g.s.dynamic ? !1 !== g.s.dynamicEl[b].downloadUrl && (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src) : "false" !== g.$items.eq(b).attr("data-download-url") && (g.$items.eq(b).attr("data-download-url") || g.$items.eq(b).attr("href") || g.$items.eq(b).attr("data-src")),
                        j ? (a("#lg-download").attr("href", j),
                        g.$outer.removeClass("lg-hide-download")) : g.$outer.addClass("lg-hide-download")
                    }
                    if (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
                    g.lgBusy = !0,
                    clearTimeout(g.hideBartimeout),
                    ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout(function() {
                        g.addHtml(b)
                    }, i),
                    this.arrowDisable(b),
                    e || (b < f ? e = "prev" : b > f && (e = "next")),
                    c) {
                        this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                        var k, l;
                        h > 2 ? (k = b - 1,
                        l = b + 1,
                        0 === b && f === h - 1 ? (l = 0,
                        k = h - 1) : b === h - 1 && 0 === f && (l = 0,
                        k = h - 1)) : (k = 0,
                        l = 1),
                        "prev" === e ? g.$slide.eq(l).addClass("lg-next-slide") : g.$slide.eq(k).addClass("lg-prev-slide"),
                        g.$slide.eq(b).addClass("lg-current")
                    } else
                        g.$outer.addClass("lg-no-trans"),
                        this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                        "prev" === e ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                        this.$slide.eq(f).addClass("lg-next-slide")) : (this.$slide.eq(b).addClass("lg-next-slide"),
                        this.$slide.eq(f).addClass("lg-prev-slide")),
                        setTimeout(function() {
                            g.$slide.removeClass("lg-current"),
                            g.$slide.eq(b).addClass("lg-current"),
                            g.$outer.removeClass("lg-no-trans")
                        }, 50);
                    g.lGalleryOn ? (setTimeout(function() {
                        g.loadContent(b, !0, 0)
                    }, this.s.speed + 50),
                    setTimeout(function() {
                        g.lgBusy = !1,
                        g.$el.trigger("onAfterSlide.lg", [f, b, c, d])
                    }, this.s.speed)) : (g.loadContent(b, !0, g.s.backdropDuration),
                    g.lgBusy = !1,
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
                    g.lGalleryOn = !0,
                    this.s.counter && a("#lg-counter-current").text(b + 1)
                }
                g.index = b
            }
        }
        ,
        b.prototype.goToNextSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index + 1 < b.$slide.length ? (b.index++,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : c ? (b.index = 0,
            b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
            b.slide(b.index, a, !1, "next")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-right-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-right-end")
            }, 400)))
        }
        ,
        b.prototype.goToPrevSlide = function(a) {
            var b = this
              , c = b.s.loop;
            a && b.$slide.length < 3 && (c = !1),
            b.lgBusy || (b.index > 0 ? (b.index--,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : c ? (b.index = b.$items.length - 1,
            b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
            b.slide(b.index, a, !1, "prev")) : b.s.slideEndAnimatoin && !a && (b.$outer.addClass("lg-left-end"),
            setTimeout(function() {
                b.$outer.removeClass("lg-left-end")
            }, 400)))
        }
        ,
        b.prototype.keyPress = function() {
            var b = this;
            this.$items.length > 1 && a(window).on("keyup.lg", function(a) {
                b.$items.length > 1 && (37 === a.keyCode && (a.preventDefault(),
                b.goToPrevSlide()),
                39 === a.keyCode && (a.preventDefault(),
                b.goToNextSlide()))
            }),
            a(window).on("keydown.lg", function(a) {
                !0 === b.s.escKey && 27 === a.keyCode && (a.preventDefault(),
                b.$outer.hasClass("lg-thumb-open") ? b.$outer.removeClass("lg-thumb-open") : b.destroy())
            })
        }
        ,
        b.prototype.arrow = function() {
            var a = this;
            this.$outer.find(".lg-prev").on("click.lg", function() {
                a.goToPrevSlide()
            }),
            this.$outer.find(".lg-next").on("click.lg", function() {
                a.goToNextSlide()
            })
        }
        ,
        b.prototype.arrowDisable = function(a) {
            !this.s.loop && this.s.hideControlOnEnd && (a + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
            a > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }
        ,
        b.prototype.setTranslate = function(a, b, c) {
            this.s.useLeft ? a.css("left", b) : a.css({
                transform: "translate3d(" + b + "px, " + c + "px, 0px)"
            })
        }
        ,
        b.prototype.touchMove = function(b, c) {
            var d = c - b;
            Math.abs(d) > 15 && (this.$outer.addClass("lg-dragging"),
            this.setTranslate(this.$slide.eq(this.index), d, 0),
            this.setTranslate(a(".lg-prev-slide"), -this.$slide.eq(this.index).width() + d, 0),
            this.setTranslate(a(".lg-next-slide"), this.$slide.eq(this.index).width() + d, 0))
        }
        ,
        b.prototype.touchEnd = function(a) {
            var b = this;
            "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
            this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
            setTimeout(function() {
                b.$outer.removeClass("lg-dragging"),
                a < 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToNextSlide(!0) : a > 0 && Math.abs(a) > b.s.swipeThreshold ? b.goToPrevSlide(!0) : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
                b.$slide.removeAttr("style")
            }),
            setTimeout(function() {
                b.$outer.hasClass("lg-dragging") || "lg-slide" === b.s.mode || b.$outer.removeClass("lg-slide")
            }, b.s.speed + 100)
        }
        ,
        b.prototype.enableSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1;
            a.s.enableSwipe && a.doCss() && (a.$slide.on("touchstart.lg", function(c) {
                a.$outer.hasClass("lg-zoomed") || a.lgBusy || (c.preventDefault(),
                a.manageSwipeClass(),
                b = c.originalEvent.targetTouches[0].pageX)
            }),
            a.$slide.on("touchmove.lg", function(e) {
                a.$outer.hasClass("lg-zoomed") || (e.preventDefault(),
                c = e.originalEvent.targetTouches[0].pageX,
                a.touchMove(b, c),
                d = !0)
            }),
            a.$slide.on("touchend.lg", function() {
                a.$outer.hasClass("lg-zoomed") || (d ? (d = !1,
                a.touchEnd(c - b)) : a.$el.trigger("onSlideClick.lg"))
            }))
        }
        ,
        b.prototype.enableDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1;
            b.s.enableDrag && b.doCss() && (b.$slide.on("mousedown.lg", function(d) {
                b.$outer.hasClass("lg-zoomed") || b.lgBusy || a(d.target).text().trim() || (d.preventDefault(),
                b.manageSwipeClass(),
                c = d.pageX,
                e = !0,
                b.$outer.scrollLeft += 1,
                b.$outer.scrollLeft -= 1,
                b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                b.$el.trigger("onDragstart.lg"))
            }),
            a(window).on("mousemove.lg", function(a) {
                e && (f = !0,
                d = a.pageX,
                b.touchMove(c, d),
                b.$el.trigger("onDragmove.lg"))
            }),
            a(window).on("mouseup.lg", function(g) {
                f ? (f = !1,
                b.touchEnd(d - c),
                b.$el.trigger("onDragend.lg")) : (a(g.target).hasClass("lg-object") || a(g.target).hasClass("lg-video-play")) && b.$el.trigger("onSlideClick.lg"),
                e && (e = !1,
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }))
        }
        ,
        b.prototype.manageSwipeClass = function() {
            var a = this.index + 1
              , b = this.index - 1;
            this.s.loop && this.$slide.length > 2 && (0 === this.index ? b = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (a = 0)),
            this.$slide.removeClass("lg-next-slide lg-prev-slide"),
            b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
            this.$slide.eq(a).addClass("lg-next-slide")
        }
        ,
        b.prototype.mousewheel = function() {
            var a = this;
            a.$outer.on("mousewheel.lg", function(b) {
                b.deltaY && (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
                b.preventDefault())
            })
        }
        ,
        b.prototype.closeGallery = function() {
            var b = this
              , c = !1;
            this.$outer.find(".lg-close").on("click.lg", function() {
                b.destroy()
            }),
            b.s.closable && (b.$outer.on("mousedown.lg", function(b) {
                c = !!(a(b.target).is(".lg-outer") || a(b.target).is(".lg-item ") || a(b.target).is(".lg-img-wrap"))
            }),
            b.$outer.on("mousemove.lg", function() {
                c = !1
            }),
            b.$outer.on("mouseup.lg", function(d) {
                (a(d.target).is(".lg-outer") || a(d.target).is(".lg-item ") || a(d.target).is(".lg-img-wrap") && c) && (b.$outer.hasClass("lg-dragging") || b.destroy())
            }))
        }
        ,
        b.prototype.destroy = function(b) {
            var c = this;
            b || (c.$el.trigger("onBeforeClose.lg"),
            a(window).scrollTop(c.prevScrollTop)),
            b && (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
            this.$el.off(".lg.tm"),
            a.each(a.fn.lightGallery.modules, function(a) {
                c.modules[a] && c.modules[a].destroy()
            }),
            this.lGalleryOn = !1,
            clearTimeout(c.hideBartimeout),
            this.hideBartimeout = !1,
            a(window).off(".lg"),
            a("body").removeClass("lg-on lg-from-hash"),
            c.$outer && c.$outer.removeClass("lg-visible"),
            a(".lg-backdrop").removeClass("in"),
            setTimeout(function() {
                c.$outer && c.$outer.remove(),
                a(".lg-backdrop").remove(),
                b || c.$el.trigger("onCloseAfter.lg")
            }, c.s.backdropDuration + 50)
        }
        ,
        a.fn.lightGallery = function(c) {
            return this.each(function() {
                if (a.data(this, "lightGallery"))
                    try {
                        a(this).data("lightGallery").init()
                    } catch (a) {
                        console.error("lightGallery has not initiated properly")
                    }
                else
                    a.data(this, "lightGallery", new b(this,c))
            })
        }
        ,
        a.fn.lightGallery.modules = {}
    }()
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.core.s = a.extend({}, b, this.core.s),
            this.$el = a(c),
            this.$thumbOuter = null,
            this.thumbOuterWidth = 0,
            this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin),
            this.thumbIndex = this.core.index,
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            this.left = 0,
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = this;
            this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout(function() {
                a.core.$outer.addClass("lg-thumb-open")
            }, 700),
            this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"),
            this.build(),
            this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
            this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
            this.thumbClickable = !1) : this.thumbClickable = !0,
            this.toogle(),
            this.thumbkeyPress())
        }
        ,
        c.prototype.build = function() {
            function b(a, b, c) {
                var g, h = d.core.isVideo(a, c) || {}, i = "";
                h.youtube || h.vimeo || h.dailymotion ? h.youtube ? g = d.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + d.core.s.youtubeThumbSize + ".jpg" : b : h.vimeo ? d.core.s.loadVimeoThumbnail ? (g = "//i.vimeocdn.com/video/error_" + f + ".jpg",
                i = h.vimeo[1]) : g = b : h.dailymotion && (g = d.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + h.dailymotion[1] : b) : g = b,
                e += '<div data-vimeo-id="' + i + '" class="lg-thumb-item" style="width:' + d.core.s.thumbWidth + "px; height: " + d.core.s.thumbHeight + "; margin-right: " + d.core.s.thumbMargin + 'px"><img src="' + g + '" /></div>',
                i = ""
            }
            var c, d = this, e = "", f = "", g = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
            switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
                f = "640";
                break;
            case "thumbnail_medium":
                f = "200x150";
                break;
            case "thumbnail_small":
                f = "100x75"
            }
            if (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer"),
            d.thumbOuterWidth = d.$thumbOuter.width(),
            d.core.s.animateThumb && d.core.$outer.find(".lg-thumb").css({
                width: d.thumbTotalWidth + "px",
                position: "relative"
            }),
            this.core.s.animateThumb && d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
                for (var h = 0; h < d.core.s.dynamicEl.length; h++)
                    b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
            else
                d.core.$items.each(function(c) {
                    d.core.s.exThumbImage ? b(a(this).attr("href") || a(this).attr("data-src"), a(this).attr(d.core.s.exThumbImage), c) : b(a(this).attr("href") || a(this).attr("data-src"), a(this).find("img").attr("src"), c)
                });
            d.core.$outer.find(".lg-thumb").html(e),
            c = d.core.$outer.find(".lg-thumb-item"),
            c.each(function() {
                var b = a(this)
                  , c = b.attr("data-vimeo-id");
                c && a.getJSON("//www.vimeo.com/api/v2/video/" + c + ".json?callback=?", {
                    format: "json"
                }, function(a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize])
                })
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                c.removeClass("active"),
                c.eq(d.core.index).addClass("active")
            }),
            c.on("click.lg touchend.lg", function() {
                var b = a(this);
                setTimeout(function() {
                    (d.thumbClickable && !d.core.lgBusy || !d.core.doCss()) && (d.core.index = b.index(),
                    d.core.slide(d.core.index, !1, !0, !1))
                }, 50)
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function() {
                d.animateThumb(d.core.index)
            }),
            a(window).on("resize.lg.thumb orientationchange.lg.thumb", function() {
                setTimeout(function() {
                    d.animateThumb(d.core.index),
                    d.thumbOuterWidth = d.$thumbOuter.width()
                }, 200)
            })
        }
        ,
        c.prototype.setTranslate = function(a) {
            this.core.$outer.find(".lg-thumb").css({
                transform: "translate3d(-" + a + "px, 0px, 0px)"
            })
        }
        ,
        c.prototype.animateThumb = function(a) {
            var b = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                var c;
                switch (this.core.s.currentPagerPosition) {
                case "left":
                    c = 0;
                    break;
                case "middle":
                    c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case "right":
                    c = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c,
                this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
                this.left < 0 && (this.left = 0),
                this.core.lGalleryOn ? (b.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"),
                this.core.doCss() || b.animate({
                    left: -this.left + "px"
                }, this.core.s.speed)) : this.core.doCss() || b.css("left", -this.left + "px"),
                this.setTranslate(this.left)
            }
        }
        ,
        c.prototype.enableThumbDrag = function() {
            var b = this
              , c = 0
              , d = 0
              , e = !1
              , f = !1
              , g = 0;
            b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", function(a) {
                b.thumbTotalWidth > b.thumbOuterWidth && (a.preventDefault(),
                c = a.pageX,
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.thumbClickable = !1,
                b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.thumb", function(a) {
                e && (g = b.left,
                f = !0,
                d = a.pageX,
                b.$thumbOuter.addClass("lg-dragging"),
                g -= d - c,
                g > b.thumbTotalWidth - b.thumbOuterWidth && (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g))
            }),
            a(window).on("mouseup.lg.thumb", function() {
                f ? (f = !1,
                b.$thumbOuter.removeClass("lg-dragging"),
                b.left = g,
                Math.abs(d - c) < b.core.s.swipeThreshold && (b.thumbClickable = !0)) : b.thumbClickable = !0,
                e && (e = !1,
                b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            })
        }
        ,
        c.prototype.enableThumbSwipe = function() {
            var a = this
              , b = 0
              , c = 0
              , d = !1
              , e = 0;
            a.core.$outer.find(".lg-thumb").on("touchstart.lg", function(c) {
                a.thumbTotalWidth > a.thumbOuterWidth && (c.preventDefault(),
                b = c.originalEvent.targetTouches[0].pageX,
                a.thumbClickable = !1)
            }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function(f) {
                a.thumbTotalWidth > a.thumbOuterWidth && (f.preventDefault(),
                c = f.originalEvent.targetTouches[0].pageX,
                d = !0,
                a.$thumbOuter.addClass("lg-dragging"),
                e = a.left,
                e -= c - b,
                e > a.thumbTotalWidth - a.thumbOuterWidth && (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e))
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function() {
                a.thumbTotalWidth > a.thumbOuterWidth && d ? (d = !1,
                a.$thumbOuter.removeClass("lg-dragging"),
                Math.abs(c - b) < a.core.s.swipeThreshold && (a.thumbClickable = !0),
                a.left = e) : a.thumbClickable = !0
            })
        }
        ,
        c.prototype.toogle = function() {
            var a = this;
            a.core.s.toogleThumb && (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function() {
                a.core.$outer.toggleClass("lg-thumb-open")
            }))
        }
        ,
        c.prototype.thumbkeyPress = function() {
            var b = this;
            a(window).on("keydown.lg.thumb", function(a) {
                38 === a.keyCode ? (a.preventDefault(),
                b.core.$outer.addClass("lg-thumb-open")) : 40 === a.keyCode && (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"))
            })
        }
        ,
        c.prototype.destroy = function() {
            this.core.s.thumbnail && this.core.$items.length > 1 && (a(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"))
        }
        ,
        a.fn.lightGallery.modules.Thumbnail = c
    }()
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            fullScreen: !0
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            this.core.s = a.extend({}, b, this.core.s),
            this.init(),
            this
        };
        c.prototype.init = function() {
            var a = "";
            if (this.core.s.fullScreen) {
                if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled))
                    return;
                a = '<span class="lg-fullscreen lg-icon"></span>',
                this.core.$outer.find(".lg-toolbar").append(a),
                this.fullScreen()
            }
        }
        ,
        c.prototype.requestFullscreen = function() {
            var a = document.documentElement;
            a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }
        ,
        c.prototype.exitFullscreen = function() {
            document.fullscreenElement ? document.fullscreenElement() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
        ,
        c.prototype.fullScreen = function() {
            var b = this;
            a(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", function() {
                b.core.$outer.toggleClass("lg-fullscreen-on")
            }),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function() {
                document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? b.exitFullscreen() : b.requestFullscreen()
            })
        }
        ,
        c.prototype.destroy = function() {
            this.exitFullscreen(),
            a(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }
        ,
        a.fn.lightGallery.modules.fullscreen = c
    }()
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
        }
          , c = function(c) {
            return this.core = a(c).data("lightGallery"),
            this.$el = a(c),
            !(this.core.$items.length < 2) && (this.core.s = a.extend({}, b, this.core.s),
            this.interval = !1,
            this.fromAuto = !0,
            this.canceledOnTouch = !1,
            this.fourceAutoplayTemp = this.core.s.fourceAutoplay,
            this.core.doCss() || (this.core.s.progressBar = !1),
            this.init(),
            this)
        };
        c.prototype.init = function() {
            var a = this;
            a.core.s.autoplayControls && a.controls(),
            a.core.s.progressBar && a.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
            a.progress(),
            a.core.s.autoplay && a.$el.one("onSlideItemLoad.lg.tm", function() {
                a.startlAuto()
            }),
            a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function() {
                a.interval && (a.cancelAuto(),
                a.canceledOnTouch = !0)
            }),
            a.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", function() {
                !a.interval && a.canceledOnTouch && (a.startlAuto(),
                a.canceledOnTouch = !1)
            })
        }
        ,
        c.prototype.progress = function() {
            var a, b, c = this;
            c.$el.on("onBeforeSlide.lg.tm", function() {
                c.core.s.progressBar && c.fromAuto && (a = c.core.$outer.find(".lg-progress-bar"),
                b = c.core.$outer.find(".lg-progress"),
                c.interval && (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function() {
                    b.css("transition", "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"),
                    a.addClass("lg-start")
                }, 20))),
                c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
                c.fromAuto = !1
            })
        }
        ,
        c.prototype.controls = function() {
            var b = this
              , c = '<span class="lg-autoplay-button lg-icon"></span>';
            a(this.core.s.appendAutoplayControlsTo).append(c),
            b.core.$outer.find(".lg-autoplay-button").on("click.lg", function() {
                a(b.core.$outer).hasClass("lg-show-autoplay") ? (b.cancelAuto(),
                b.core.s.fourceAutoplay = !1) : b.interval || (b.startlAuto(),
                b.core.s.fourceAutoplay = b.fourceAutoplayTemp)
            })
        }
        ,
        c.prototype.startlAuto = function() {
            var a = this;
            a.core.$outer.find(".lg-progress").css("transition", "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            a.interval = setInterval(function() {
                a.core.index + 1 < a.core.$items.length ? a.core.index++ : a.core.index = 0,
                a.fromAuto = !0,
                a.core.slide(a.core.index, !1, !1, "next")
            }, a.core.s.speed + a.core.s.pause)
        }
        ,
        c.prototype.cancelAuto = function() {
            clearInterval(this.interval),
            this.interval = !1,
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }
        ,
        c.prototype.destroy = function() {
            this.cancelAuto(),
            this.core.$outer.find(".lg-progress-bar").remove()
        }
        ,
        a.fn.lightGallery.modules.autoplay = c
    }()
});
!function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(a) {
        return b(a)
    }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(this, function(a) {
    !function() {
        "use strict";
        var b = function() {
            var a = !1
              , b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            return b && parseInt(b[2], 10) < 54 && (a = !0),
            a
        }
          , c = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: b()
        }
          , d = function(b) {
            return this.core = a(b).data("lightGallery"),
            this.core.s = a.extend({}, c, this.core.s),
            this.core.s.zoom && this.core.doCss() && (this.init(),
            this.zoomabletimeout = !1,
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()),
            this
        };
        d.prototype.init = function() {
            var b = this
              , c = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
            b.core.s.actualSize && (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
            b.core.s.useLeftForZoom ? b.core.$outer.addClass("lg-use-left-for-zoom") : b.core.$outer.addClass("lg-use-transition-for-zoom"),
            this.core.$outer.find(".lg-toolbar").append(c),
            b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(c, d, e) {
                var f = b.core.s.enableZoomAfter + e;
                a("body").hasClass("lg-from-hash") && e ? f = 0 : a("body").removeClass("lg-from-hash"),
                b.zoomabletimeout = setTimeout(function() {
                    b.core.$slide.eq(d).addClass("lg-zoomable")
                }, f + 30)
            });
            var d = 1
              , e = function(c) {
                var d, e, f = b.core.$outer.find(".lg-current .lg-image"), g = (a(window).width() - f.prop("offsetWidth")) / 2, h = (a(window).height() - f.prop("offsetHeight")) / 2 + a(window).scrollTop();
                d = b.pageX - g,
                e = b.pageY - h;
                var i = (c - 1) * d
                  , j = (c - 1) * e;
                f.css("transform", "scale3d(" + c + ", " + c + ", 1)").attr("data-scale", c),
                b.core.s.useLeftForZoom ? f.parent().css({
                    left: -i + "px",
                    top: -j + "px"
                }).attr("data-x", i).attr("data-y", j) : f.parent().css("transform", "translate3d(-" + i + "px, -" + j + "px, 0)").attr("data-x", i).attr("data-y", j)
            }
              , f = function() {
                d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
                d < 1 && (d = 1),
                e(d)
            }
              , g = function(c, e, g, h) {
                var i, j = e.prop("offsetWidth");
                i = b.core.s.dynamic ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j : b.core.$items.eq(g).attr("data-width") || e[0].naturalWidth || j;
                var k;
                b.core.$outer.hasClass("lg-zoomed") ? d = 1 : i > j && (k = i / j,
                d = k || 2),
                h ? (b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop()) : (b.pageX = c.pageX || c.originalEvent.targetTouches[0].pageX,
                b.pageY = c.pageY || c.originalEvent.targetTouches[0].pageY),
                f(),
                setTimeout(function() {
                    b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }, 10)
            }
              , h = !1;
            b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(a, c) {
                var d = b.core.$slide.eq(c).find(".lg-image");
                d.on("dblclick", function(a) {
                    g(a, d, c)
                }),
                d.on("touchstart", function(a) {
                    h ? (clearTimeout(h),
                    h = null,
                    g(a, d, c)) : h = setTimeout(function() {
                        h = null
                    }, 300),
                    a.preventDefault()
                })
            }),
            a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
                b.pageX = a(window).width() / 2,
                b.pageY = a(window).height() / 2 + a(window).scrollTop(),
                e(d)
            }),
            a("#lg-zoom-out").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d -= b.core.s.scale,
                f())
            }),
            a("#lg-zoom-in").on("click.lg", function() {
                b.core.$outer.find(".lg-current .lg-image").length && (d += b.core.s.scale,
                f())
            }),
            a("#lg-actual-size").on("click.lg", function(a) {
                g(a, b.core.$slide.eq(b.core.index).find(".lg-image"), b.core.index, !0)
            }),
            b.core.$el.on("onBeforeSlide.lg.tm", function() {
                d = 1,
                b.resetZoom()
            }),
            b.zoomDrag(),
            b.zoomSwipe()
        }
        ,
        d.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            this.pageX = a(window).width() / 2,
            this.pageY = a(window).height() / 2 + a(window).scrollTop()
        }
        ,
        d.prototype.zoomSwipe = function() {
            var a = this
              , b = {}
              , c = {}
              , d = !1
              , e = !1
              , f = !1;
            a.core.$slide.on("touchstart.lg", function(c) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var d = a.core.$slide.eq(a.core.index).find(".lg-object");
                    f = d.prop("offsetHeight") * d.attr("data-scale") > a.core.$outer.find(".lg").height(),
                    e = d.prop("offsetWidth") * d.attr("data-scale") > a.core.$outer.find(".lg").width(),
                    (e || f) && (c.preventDefault(),
                    b = {
                        x: c.originalEvent.targetTouches[0].pageX,
                        y: c.originalEvent.targetTouches[0].pageY
                    })
                }
            }),
            a.core.$slide.on("touchmove.lg", function(g) {
                if (a.core.$outer.hasClass("lg-zoomed")) {
                    var h, i, j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                    g.preventDefault(),
                    d = !0,
                    c = {
                        x: g.originalEvent.targetTouches[0].pageX,
                        y: g.originalEvent.targetTouches[0].pageY
                    },
                    a.core.$outer.addClass("lg-zoom-dragging"),
                    i = f ? -Math.abs(j.attr("data-y")) + (c.y - b.y) : -Math.abs(j.attr("data-y")),
                    h = e ? -Math.abs(j.attr("data-x")) + (c.x - b.x) : -Math.abs(j.attr("data-x")),
                    (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) && (a.core.s.useLeftForZoom ? j.css({
                        left: h + "px",
                        top: i + "px"
                    }) : j.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
                }
            }),
            a.core.$slide.on("touchend.lg", function() {
                a.core.$outer.hasClass("lg-zoomed") && d && (d = !1,
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f))
            })
        }
        ,
        d.prototype.zoomDrag = function() {
            var b = this
              , c = {}
              , d = {}
              , e = !1
              , f = !1
              , g = !1
              , h = !1;
            b.core.$slide.on("mousedown.lg.zoom", function(d) {
                var f = b.core.$slide.eq(b.core.index).find(".lg-object");
                h = f.prop("offsetHeight") * f.attr("data-scale") > b.core.$outer.find(".lg").height(),
                g = f.prop("offsetWidth") * f.attr("data-scale") > b.core.$outer.find(".lg").width(),
                b.core.$outer.hasClass("lg-zoomed") && a(d.target).hasClass("lg-object") && (g || h) && (d.preventDefault(),
                c = {
                    x: d.pageX,
                    y: d.pageY
                },
                e = !0,
                b.core.$outer.scrollLeft += 1,
                b.core.$outer.scrollLeft -= 1,
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }),
            a(window).on("mousemove.lg.zoom", function(a) {
                if (e) {
                    var i, j, k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                    f = !0,
                    d = {
                        x: a.pageX,
                        y: a.pageY
                    },
                    b.core.$outer.addClass("lg-zoom-dragging"),
                    j = h ? -Math.abs(k.attr("data-y")) + (d.y - c.y) : -Math.abs(k.attr("data-y")),
                    i = g ? -Math.abs(k.attr("data-x")) + (d.x - c.x) : -Math.abs(k.attr("data-x")),
                    b.core.s.useLeftForZoom ? k.css({
                        left: i + "px",
                        top: j + "px"
                    }) : k.css("transform", "translate3d(" + i + "px, " + j + "px, 0)")
                }
            }),
            a(window).on("mouseup.lg.zoom", function(a) {
                e && (e = !1,
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f || c.x === d.x && c.y === d.y || (d = {
                    x: a.pageX,
                    y: a.pageY
                },
                b.touchendZoom(c, d, g, h)),
                f = !1),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            })
        }
        ,
        d.prototype.touchendZoom = function(a, b, c, d) {
            var e = this
              , f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap")
              , g = e.core.$slide.eq(e.core.index).find(".lg-object")
              , h = -Math.abs(f.attr("data-x")) + (b.x - a.x)
              , i = -Math.abs(f.attr("data-y")) + (b.y - a.y)
              , j = (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2
              , k = Math.abs(g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").height() + j)
              , l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2
              , m = Math.abs(g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) - e.core.$outer.find(".lg").width() + l);
            (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) && (d && (i <= -k ? i = -k : i >= -j && (i = -j)),
            c && (h <= -m ? h = -m : h >= -l && (h = -l)),
            d ? f.attr("data-y", Math.abs(i)) : i = -Math.abs(f.attr("data-y")),
            c ? f.attr("data-x", Math.abs(h)) : h = -Math.abs(f.attr("data-x")),
            e.core.s.useLeftForZoom ? f.css({
                left: h + "px",
                top: i + "px"
            }) : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"))
        }
        ,
        d.prototype.destroy = function() {
            var b = this;
            b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            b.zoomabletimeout = !1
        }
        ,
        a.fn.lightGallery.modules.zoom = d
    }()
});
