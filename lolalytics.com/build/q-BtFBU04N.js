// Think Critically
import {$ as I, r as w, k as S, _ as g, u as F, a as P, E as y, K as u, O as m, f as A, w as V} from "./q-DMhZD469.js";
import {I as D} from "./q-Cf4lURvK.js";
import {P as L} from "./q-BsfSN1di.js";
const z = f=>{
    const [n] = I();
    if (f.target.getAttribute("data-id")) {
        const a = f.target.getAttribute("data-id");
        n.items.includes(a) ? n.items = n.items.filter(h=>h != a) : n.items.push(a)
    }
}
  , C = f=>{
    const [n,a] = I();
    a.value = f.target.getAttribute("data-type") ?? "ab_3",
    n.click$()
}
  , H = w(S(()=>g(()=>import("./q-DA4Di0b1.js"), []), "s_cB9bcX3tfFU"))
  , M = (f,n,a)=>{
    const h = f.split("_")
      , x = h[0]
      , l = parseInt(h[1]);
    if (!n)
        return [];
    let v = [];
    const j = (t,e)=>n[t + e] ? n[t + e].map(o=>[o[0], (o[2] / o[1] * 100).toFixed(2), (o[1] / a * 100).toFixed(2), o[1]]) : []
      , b = (t,e)=>{
        const o = {};
        for (let i = e; i <= 6; i++) {
            const p = t + i;
            typeof n[p] > "u" || n[p].forEach(d=>{
                const s = d[0].split("_").slice(0, e).join("_");
                typeof o[s] > "u" && (o[s] = [0, 0]),
                o[s][0] += d[1],
                o[s][1] += d[2]
            }
            )
        }
        return Object.keys(o).map(i=>[i, (o[i][1] / o[i][0] * 100).toFixed(2), (o[i][0] / a * 100).toFixed(2), o[i][0]])
    }
      , O = (t,e)=>{
        const o = {}
          , i = {};
        for (let s = 1; s <= e; s++) {
            const r = t + s;
            typeof n[r] > "u" || (typeof i[r] > "u" && (i[r] = new Object),
            n[r].forEach(c=>{
                i[r][c[0]] = [c[1], c[2]]
            }
            ))
        }
        const p = {};
        for (let s = e; s >= 2; s--) {
            const r = t + s;
            for (const c in i[r]) {
                const _ = c.split("_").slice(0, s - 1).join("_");
                i[r] && typeof i[r][c] < "u" && (typeof p[_] > "u" && (p[_] = 0),
                p[_] += i[r][c][0])
            }
        }
        const d = {};
        for (let s = e; s >= 1; s--) {
            const r = t + s;
            if (!(typeof i[r] > "u"))
                for (const c in i[t + e]) {
                    typeof o[c] > "u" && (o[c] = [0, 0]);
                    const _ = c.split("_").slice(0, s).join("_");
                    if (i[r] && typeof i[r][_] < "u") {
                        const $ = c.split("_").slice(0, s + 1).join("_");
                        s === e ? d[c] = 1 : d[c] = typeof i[t + (s + 1)][$] < "u" ? i[t + (s + 1)][$][0] / p[_] * d[c] : 0,
                        o[c][0] += Math.floor(i[r][_][0] * d[c]),
                        o[c][1] += Math.floor(i[r][_][1] * d[c])
                    }
                }
        }
        return Object.keys(o).map(s=>[s, (o[s][1] / o[s][0] * 100).toFixed(2), (o[s][0] / a * 100).toFixed(2), o[s][0]])
    }
    ;
    if (x === "x")
        v = j("itemSet", l).sort((t,e)=>e[3] - t[3]);
    else if (x === "a")
        v = b("itemSet", l).sort((t,e)=>e[3] - t[3]);
    else if (x === "e") {
        const t = {};
        b("itemSet", l).forEach(e=>{
            t[e[0]] = [e[1] * e[3], e[3]]
        }
        ),
        O("itemSet", l).forEach(e=>{
            t[e[0]] = [t[e[0]][0] + e[1] * e[3], t[e[0]][1] + e[3]]
        }
        ),
        j("itemSet", l).forEach(e=>{
            t[e[0]] = [t[e[0]][0] - e[1] * e[3], t[e[0]][1] - e[3]]
        }
        ),
        v = Object.keys(t).map(e=>[e, (t[e][0] / t[e][1]).toFixed(2), (t[e][1] / a * 100).toFixed(2), t[e][1]]).sort((e,o)=>o[3] - e[3])
	}
    else {	
        const t = {};
        b("itemSet", l).forEach(e=>{
            t[e[0]] = [e[1] * e[3], e[3]]
        }
        ),
        O("itemSet", l).forEach(e=>{
            t[e[0]] = [t[e[0]][0] + e[1] * e[3], t[e[0]][1] + e[3]]
        }
        ),
        j("itemSet", l).forEach(e=>{
            t[e[0]] = [t[e[0]][0] - e[1] * e[3], t[e[0]][1] - e[3]]
        }
        ),
        v = Object.keys(t).map(e=>[e, (t[e][0] / t[e][1]).toFixed(2), (t[e][1] / a * 100).toFixed(2), t[e][1]]).filter(e=>e[3] > 99).sort((e,o)=>o[1] - e[1])
    }
    return v
}
  , R = f=>{
    const n = F("a_3")
      , a = P({
        items: []
    })
      , h = S(()=>g(()=>Promise.resolve().then(()=>E), void 0), "s_z9wf9hgyZWs", [a])
      , x = S(()=>g(()=>Promise.resolve().then(()=>E), void 0), "s_rGHylC0IVLo", [a]);
    return y(A, {
        children: [y(H, {
            get selected() {
                return n.value
            },
            onClick$: S(()=>g(()=>Promise.resolve().then(()=>E), void 0), "s_1qwZ7mVp2Hw", [f, n]),
            [u]: {
                selected: m(l=>l.value, [n]),
                onClick$: u
            }
        }, 3, "ah_0"), y(D, {
            get data() {
                return f.filterData
            },
            click$: h,
            clear$: x,
            get excluded() {
                return a.items
            },
            [u]: {
                data: m(l=>l.filterData, [f]),
                click$: u,
                clear$: u,
                excluded: m(l=>l.items, [a])
            }
        }, 3, "ah_1"), y(L, {
            data: n.value === "a_3" ? f.tempData : M(n.value, f.data, f.n),
            get rows() {
                return parseInt(n.value.split("_")[1])
            },
            type: "itemSet",
            set: !0,
            get excluded() {
                return a.items
            },
            get h() {
                return ["h-0", "h-[116px]", "h-[168px]", "h-[220px]", "h-[272px]", "h-[324px]", "h-[376px]"][parseInt(n.value.split("_")[1])]
            },
            [u]: {
                rows: m(l=>parseInt(l.value.split("_")[1]), [n]),
                type: u,
                set: u,
                excluded: m(l=>l.items, [a]),
                h: m(l=>["h-0", "h-[116px]", "h-[168px]", "h-[220px]", "h-[272px]", "h-[324px]", "h-[376px]"][parseInt(l.value.split("_")[1])], [n])
            }
        }, 3, "ah_2")]
    }, 1, "ah_3")
}
  , W = ()=>{
    const [f] = I();
    return f.items = []
}
  , E = Object.freeze(Object.defineProperty({
    __proto__: null,
    _hW: V,
    s_1qwZ7mVp2Hw: C,
    s_UGzMiklUd40: R,
    s_rGHylC0IVLo: W,
    s_z9wf9hgyZWs: z
}, Symbol.toStringTag, {
    value: "Module"
}));
export {V as _hW, C as s_1qwZ7mVp2Hw, R as s_UGzMiklUd40, W as s_rGHylC0IVLo, z as s_z9wf9hgyZWs};
