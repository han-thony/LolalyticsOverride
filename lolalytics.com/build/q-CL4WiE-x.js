// Think Critically
import {$ as S, r as j, k as I, _ as E, u as A, a as D, E as v, K as p, O as b, f as w, w as B} from "./q-DMhZD469.js";
import {I as q} from "./q-Cf4lURvK.js";
import {P as L} from "./q-BsfSN1di.js";
const R = ()=>{
    const [u] = S();
    return u.items = []
}
  , V = u=>{
    const [i] = S();
    if (u.target.getAttribute("data-id")) {
        const r = u.target.getAttribute("data-id");
        i.items.includes(r) ? i.items = i.items.filter(h=>h != r) : i.items.push(r)
    }
}
  , W = j(I(()=>E(()=>import("./q-DW9U7Cz_.js"), []), "s_b6AdB7koous"))
  , X = (u,i,r)=>{
    const h = u.split("_")
      , d = h[0]
      , a = parseInt(h[1])
      , m = d === "xb" || d === "ab" || d === "eb" || d === "cb" ? "itemBootSet" : "itemSet";
    if (!i)
        return [];
    let g = [];
    const F = (t,e)=>i[t + e] ? i[t + e].map(o=>[o[0], (o[2] / o[1] * 100).toFixed(2), (o[1] / r * 100).toFixed(2), o[1]]) : []
      , O = (t,e)=>{
        const o = {};
        for (let n = e; n <= (t === "a" ? 5 : 6); n++) {
            const x = t + n;
            typeof i[x] > "u" || i[x].forEach(f=>{
                const s = f[0].substring(0, e * 5 - 1);
                typeof o[s] > "u" && (o[s] = [0, 0]),
                o[s][0] += f[1],
                o[s][1] += f[2]
            }
            )
        }
        return Object.keys(o).map(n=>[n, (o[n][1] / o[n][0] * 100).toFixed(2), (o[n][0] / r * 100).toFixed(2), o[n][0]])
    }
      , P = (t,e)=>{
        const o = {}
          , n = {};
        for (let s = 1; s <= e; s++) {
            const l = t + s;
            typeof i[l] > "u" || (typeof n[l] > "u" && (n[l] = new Object),
            i[l].forEach(c=>{
                n[l][c[0]] = [c[1], c[2]]
            }
            ))
        }
        const x = {};
        for (let s = e; s >= 2; s--) {
            const l = t + s;
            for (const c in n[l]) {
                const _ = c.substring(0, (s - 1) * 5 - 1);
                n[l] && typeof n[l][c] < "u" && (typeof x[_] > "u" && (x[_] = 0),
                x[_] += n[l][c][0])
            }
        }
        const f = {};
        for (let s = e; s >= 1; s--) {
            const l = t + s;
            if (!(typeof n[l] > "u"))
                for (const c in n[t + e]) {
                    typeof o[c] > "u" && (o[c] = [0, 0]);
                    const _ = c.substring(0, s * 5 - 1);
                    if (n[l] && typeof n[l][_] < "u") {
                        const $ = c.substring(0, (s + 1) * 5 - 1);
                        s === e ? f[c] = 1 : f[c] = typeof n[t + (s + 1)][$] < "u" ? n[t + (s + 1)][$][0] / x[_] * f[c] : 0,
                        o[c][0] += Math.floor(n[l][_][0] * f[c]),
                        o[c][1] += Math.floor(n[l][_][1] * f[c])
                    }
                }
        }
        return Object.keys(o).map(s=>[s, (o[s][1] / o[s][0] * 100).toFixed(2), (o[s][0] / r * 100).toFixed(2), o[s][0]])
    }
    ;
    if (d === "x" || d == "xb")
        g = F(m, a).sort((t,e)=>e[3] - t[3]);
    else if (d === "a" || d === "ab")
        g = O(m, a).sort((t,e)=>e[3] - t[3]);
    else if (d === "e" || d === "eb")
        g = P(m, a).filter(t=>t[3] > 1).sort((t,e)=>e[1] - t[1]);
    else {
        const t = {};
        O(m, a).forEach(e=>{
            t[e[0]] = [e[1] * e[3], e[3]]
        }
        ),
        P(m, a).forEach(e=>{
            t[e[0]] = [t[e[0]][0] + e[1] * e[3], t[e[0]][1] + e[3]]
        }
        ),
        F(m, a).forEach(e=>{
            t[e[0]] = [t[e[0]][0] - e[1] * e[3], t[e[0]][1] - e[3]]
        }
        ),
        g = Object.keys(t).map(e=>[e, (t[e][0] / t[e][1]).toFixed(2), (t[e][1] / r * 100).toFixed(2), t[e][1]]).sort((e,o)=>o[1] - e[1])
    }
    return g
}
  , K = u=>{
    const i = A("ab_3")
      , r = D({
        items: []
    })
      , h = I(()=>E(()=>Promise.resolve().then(()=>y), void 0), "s_BpW0kOFsn84", [r])
      , d = I(()=>E(()=>Promise.resolve().then(()=>y), void 0), "s_80IU3etqnGI", [r]);
    return v(w, {
        children: [v(W, {
            get selected() {
                return i.value
            },
            onClick$: I(()=>E(()=>Promise.resolve().then(()=>y), void 0), "s_80DrXFhqKP0", [u, i]),
            [p]: {
                selected: b(a=>a.value, [i]),
                onClick$: p
            }
        }, 3, "00_0"), v(q, {
            get data() {
                return u.filterData
            },
            click$: h,
            clear$: d,
            get excluded() {
                return r.items
            },
            [p]: {
                data: b(a=>a.filterData, [u]),
                click$: p,
                clear$: p,
                excluded: b(a=>a.items, [r])
            }
        }, 3, "00_1"), v(L, {
            data: i.value === "ab_3" ? u.tempData : X(i.value, u.data, u.n),
            get rows() {
                return parseInt(i.value.split("_")[1])
            },
            type: "itemSet",
            set: !0,
            get excluded() {
                return r.items
            },
            get h() {
                return ["h-0", "h-[116px]", "h-[168px]", "h-[220px]", "h-[272px]", "h-[324px]", "h-[376px]"][parseInt(i.value.split("_")[1])]
            },
            [p]: {
                rows: b(a=>parseInt(a.value.split("_")[1]), [i]),
                type: p,
                set: p,
                excluded: b(a=>a.items, [r]),
                h: b(a=>["h-0", "h-[116px]", "h-[168px]", "h-[220px]", "h-[272px]", "h-[324px]", "h-[376px]"][parseInt(a.value.split("_")[1])], [i])
            }
        }, 3, "00_2")]
    }, 1, "00_3")
}
  , M = u=>{
    const [i,r] = S();
    r.value = u.target.getAttribute("data-type") ?? "ab_3",
    i.click$()
}
  , y = Object.freeze(Object.defineProperty({
    __proto__: null,
    _hW: B,
    s_49wH1raIgdk: K,
    s_80DrXFhqKP0: M,
    s_80IU3etqnGI: R,
    s_BpW0kOFsn84: V
}, Symbol.toStringTag, {
    value: "Module"
}));
export {B as _hW, K as s_49wH1raIgdk, M as s_80DrXFhqKP0, R as s_80IU3etqnGI, V as s_BpW0kOFsn84};
