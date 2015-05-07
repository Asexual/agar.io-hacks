// ==UserScript==
// @name         Agar.io cheatycodes / hacks
// @namespace    http://agar.io/
// @version      0.1
// @description  Random cheats to increase your cells survival rates!
// @author       Asexual
// @match        http://agar.io/
// @grant        none
// ==/UserScript==



(function(g, v) {
    function ua() {
        ea();
        setInterval(ea, 18E4);
        B = S = document.getElementById("canvas");
        d = B.getContext("2d");
        B.onmousedown = function(a) {
            if (fa) {
                var b = a.clientX - (5 + m / 5 / 2), c = a.clientY - (5 + m / 5 / 2);
                if (Math.sqrt(b * b + c * c) <= m / 5 / 2) {
                    G();
                    C(17);
                    return
                }
            }
            J = a.clientX;
            K = a.clientY;
            T();
            G()
        };
        B.onmousemove = function(a) {
            J = a.clientX;
            K = a.clientY;
            T()
        };
        B.onmouseup = function(a) {
        };
        var a = !1, b = !1, c = !1;
        g.onkeydown = function(f) {
            32 != f.keyCode || a || (G(), C(17), a = !0);
            81 != f.keyCode || b || (C(18), b = !0);
            87 != f.keyCode || c || (G(), C(21), c = !0)
        };
        g.onkeyup = function(f) {
            32 == f.keyCode && (a = !1);
            87 == f.keyCode && (c = !1);
            81 == f.keyCode && b && (C(19), b = !1)
        };
        g.onblur = function() {
            C(19);
            c = b = a = !1
        };
        g.onresize = ga;
        ga();
        g.requestAnimationFrame ? g.requestAnimationFrame(ha) : setInterval(U, 1E3 / 60);
        setInterval(G, 100);
        ia(v("#region").val())
    }
    function va() {
        for (var a = Number.POSITIVE_INFINITY, b = Number.POSITIVE_INFINITY, c = Number.NEGATIVE_INFINITY, f = Number.NEGATIVE_INFINITY, d = 0, e = 0; e < r.length; e++)
            d = Math.max(r[e].size, d), a = Math.min(r[e].x, a), b = Math.min(r[e].y, b), c = Math.max(r[e].x, c), f = Math.max(r[e].y, f);
        V = QUAD.init({minX: a - (d + 100),minY: b - (d + 100),maxX: c + (d + 100),maxY: f + (d + 100)});
        for (e = 0; e < r.length; e++)
            if (a = r[e], a.shouldRender())
                for (b = 0; b < a.points.length; ++b)
                    V.insert(a.points[b])
                    }
    function T() {
        L = (J - m / 2) / s + x;
        M = (K - p / 2) / s + y
    }
    function ea() {
        null == N && (N = {}, v("#region").children().each(function() {
            var a = v(this), b = a.val();
            b && (N[b] = a.text())
        }));
        v.get("http://m.agar.io/info", function(a) {
            for (var b in a.regions)
                v('#region option[value="' + b + '"]').text(N[b] + " (" + a.regions[b].numPlayers + " players)")
                }, 
              "json")
    }
    function ia(a) {
        a && a != W && (W = a, ja())
    }
    function ka() {
        v.ajax("http://m.agar.io/", {error: function() {
            setTimeout(ka, 1E3)
        },success: function(a) {
            a = a.split("\n");
            la("ws://" + a[0])
        },dataType: "text",method: "POST",cache: !1,crossDomain: !0,data: W || "?"})
    }
    function ja() {
        v("#connecting").show();
        ka()
    }
    function la(a) {
        h && (h.onopen = null, h.onmessage = null, h.onclose = null, h.close(), h = null);
        D = [];
        n = [];
        z = {};
        r = [];
        E = [];
        q = [];
        console.log("Connecting to " + a);
        h = new WebSocket(a);
        h.binaryType = "arraybuffer";
        h.onopen = wa;
        h.onmessage = xa;
        h.onclose = ya;
        h.onerror = function() {
            console.log("socket error")
        }
    }
    function wa(a) {
        v("#connecting").hide();
        console.log("socket open");
        a = new ArrayBuffer(5);
        var b = new DataView(a);
        b.setUint8(0, 255);
        b.setUint32(1, 1, !0);
        h.send(a);
        ma()
    }
    function ya(a) {
        console.log("socket close");
        setTimeout(ja, 500)
    }
    function xa(a) {
        function b() {
            for (var a = ""; ; ) {
                var b = f.getUint16(c, !0);
                c += 2;
                if (0 == b)
                    break;
                a += String.fromCharCode(b)
            }
            return a
        }
        var c = 1, f = new DataView(a.data);
        switch (f.getUint8(0)) {
            case 16:
                za(f);
                break;
            case 20:
                n = [];
                D = [];
                break;
            case 32:
                D.push(f.getUint32(1, !0));
                break;
            case 48:
                for (q = []; c < f.byteLength; )
                    q.push({id: 0,name: b()});
                na();
                break;
            case 49:
                a = f.getUint32(c, !0);
                c += 4;
                q = [];
                for (var d = 0; d < a; ++d) {
                    var e = f.getUint32(c, !0), c = c + 4;
                    q.push({id: e,name: b()})
                }
                na();
                break;
            case 64:
                X = f.getFloat64(1, !0), Y = f.getFloat64(9, !0), Z = f.getFloat64(17, !0), $ = f.getFloat64(25, !0), 0 == n.length && (x = (Z + X) / 2, y = ($ + Y) / 2)
        }
    }
    function za(a) {
        F = +new Date;
        var b = Math.random(), c = 1;
        aa = !1;
        for (var f = a.getUint16(c, !0), c = c + 2, d = 0; d < f; ++d) {
            var e = z[a.getUint32(c, !0)], t = 
                z[a.getUint32(c + 4, !0)], c = c + 8;
            e && t && (t.destroy(), t.ox = t.x, t.oy = t.y, t.oSize = t.size, t.nx = e.x, t.ny = e.y, t.nSize = t.size, t.updateTime = F)
        }
        for (; ; ) {
            f = a.getUint32(c, !0);
            c += 4;
            if (0 == f)
                break;
            var d = a.getFloat64(c, !0), c = c + 8, e = a.getFloat64(c, !0), c = c + 8, t = a.getFloat64(c, !0), c = c + 8, l = a.getUint8(c++), h = !1;
            if (0 == l)
                h = !0, l = "#33FF33";
            else if (255 == l) {
                var h = a.getUint8(c++), l = a.getUint8(c++), g = a.getUint8(c++), l = oa(h << 16 | l << 8 | g), g = a.getUint8(c++), h = !!(g & 1);
                g & 2 && (c += 4);
                g & 4 && (c += 8);
                g & 8 && (c += 16)
            } else {
                var l = 63487 | l << 16, k = (l >> 16 & 255) / 
                    255 * 360, m = (l >> 8 & 255) / 255, l = (l >> 0 & 255) / 255;
                if (0 == m)
                    l = l << 16 | l << 8 | l << 0;
                else {
                    var k = k / 60, g = ~~k, u = k - g, k = l * (1 - m), s = l * (1 - m * u), m = l * (1 - m * (1 - u)), p = u = 0, q = 0;
                    switch (g % 6) {
                        case 0:
                            u = l;
                            p = m;
                            q = k;
                            break;
                        case 1:
                            u = s;
                            p = l;
                            q = k;
                            break;
                        case 2:
                            u = k;
                            p = l;
                            q = m;
                            break;
                        case 3:
                            u = k;
                            p = s;
                            q = l;
                            break;
                        case 4:
                            u = m;
                            p = k;
                            q = l;
                            break;
                        case 5:
                            u = l, p = k, q = s
                    }
                    u = ~~(255 * u) & 255;
                    p = ~~(255 * p) & 255;
                    q = ~~(255 * q) & 255;
                    l = u << 16 | p << 8 | q
                }
                l = oa(l)
            }
            for (g = ""; ; ) {
                k = a.getUint16(c, !0);
                c += 2;
                if (0 == k)
                    break;
                g += String.fromCharCode(k)
            }
            k = null;
            z.hasOwnProperty(f) ? (k = z[f], k.updatePos(), k.ox = 
                                   k.x, k.oy = k.y, k.oSize = k.size, k.color = l) : (k = new pa(f, d, e, t, l, h, g), k.pX = d, k.pY = e);
            k.nx = d;
            k.ny = e;
            k.nSize = t;
            k.updateCode = b;
            k.updateTime = F;
            -1 != D.indexOf(f) && -1 == n.indexOf(k) && (document.getElementById("overlays").style.display = "none", n.push(k), 1 == n.length && (x = k.x, y = k.y))
        }
        a.getUint16(c, !0);
        c += 2;
        e = a.getUint32(c, !0);
        c += 4;
        for (d = 0; d < e; d++)
            f = a.getUint32(c, !0), c += 4, z[f] && (z[f].updateCode = b);
        for (d = 0; d < r.length; d++)
            r[d].updateCode != b && r[d--].destroy();
        aa && 0 == n.length && v("#overlays").fadeIn(3E3)
    }
    function G() {
        if (null != h && h.readyState == h.OPEN) {
            var a = J - m / 2, b = K - p / 2;
            64 > a * a + b * b || qa == L && ra == M || (qa = L, ra = M, a = new ArrayBuffer(21), b = new DataView(a), b.setUint8(0, 16), b.setFloat64(1, L, !0), b.setFloat64(9, M, !0), b.setUint32(17, 0, !0), h.send(a))
        }
    }
    function ma() {
        if (null != h && h.readyState == h.OPEN && null != H) {
            var a = new ArrayBuffer(1 + 2 * H.length), b = new DataView(a);
            b.setUint8(0, 0);
            for (var c = 0; c < H.length; ++c)
                b.setUint16(1 + 2 * c, H.charCodeAt(c), !0);
            h.send(a)
        }
    }
    function C(a) {
        if (null != h && h.readyState == h.OPEN) {
            var b = new ArrayBuffer(1);
            (new DataView(b)).setUint8(0, a);
            h.send(b)
        }
    }
    function ha() {
        U();
        g.requestAnimationFrame(ha)
    }
    function ga() {
        m = g.innerWidth;
        p = g.innerHeight;
        S.width = B.width = m;
        S.height = B.height = p;
        U()
    }
    function Aa() {
        if (0 != n.length) {
            for (var a = 0, b = 0; b < n.length; b++)
                a += n[b].size;
            a = Math.pow(Math.min(64 / a, 1), .4) * Math.max(p / 965, m / 1920);
            s = (9 * s + a) / 10
        }
    }
    function U() {
        var a = +new Date;
        ++Ba;
        Aa();
        F = +new Date;
        if (0 < n.length) {
            for (var b = 0, c = 0, f = 0; f < n.length; f++)
                n[f].updatePos(), b += n[f].x / n.length, c += n[f].y / n.length;
            x = (x + b) / 2;
            y = (y + c) / 2
        }
        va();
        T();
        d.clearRect(0, 0, m, p);
        d.fillStyle = 
            ba ? "#111111" : "#F2FBFF";
        d.fillRect(0, 0, m, p);
        d.save();
        d.strokeStyle = ba ? "#AAAAAA" : "#000000";
        d.globalAlpha = .2;

        s = 0.2;

        d.scale(s, s);
        b = m / s;
        c = p / s;
        for (f = -.5 + (-x + b / 2) % 50; f < b; f += 50)
            d.beginPath(), d.moveTo(f, 0), d.lineTo(f, c), d.stroke();
        for (f = -.5 + (-y + c / 2) % 50; f < c; f += 50)
            d.beginPath(), d.moveTo(0, f), d.lineTo(b, f), d.stroke();
        d.restore();
        r.sort(function(a, b) {
            return a.size == b.size ? a.id - b.id : a.size - b.size
        });
        d.save();
        d.translate(m / 2, p / 2);
        d.scale(s, s);
        d.translate(-x, -y);
        for (f = 0; f < E.length; f++)
            E[f].draw();
        for (f = 0; f < r.length; f++)
            r[f].draw();
        d.restore();
        A && 0 != q.length && d.drawImage(A, m - A.width - 10, 10);
        I = Math.max(I, Ca());
        0 != I && (null == O && (O = new P(24, "#FFFFFF")), O.setValue("Score: " + ~~(I / 100)), c = O.render(), b = c.width, d.globalAlpha = .2, d.fillStyle = "#000000", d.fillRect(10, p - 10 - 24 - 10, b + 10, 34), d.globalAlpha = 1, d.drawImage(c, 15, p - 10 - 24 - 5));
        Da();
        a = +new Date - a;
        a > 1E3 / 60 ? w -= .01 : a < 1E3 / 65 && (w += .01);
        .4 > w && (w = .4);
        1 < w && (w = 1)
    }
    function Da() {
        if (fa && ca.width) {
            var a = m / 5;
            d.drawImage(ca, 5, 5, a, a)
        }
    }
    function Ca() {
        for (var a = 0, b = 0; b < n.length; b++)
            a += n[b].nSize * n[b].nSize;
        return a
    }
    function na() {
        if (0 != q.length)
            if (Q) {
                A = document.createElement("canvas");
                var a = A.getContext("2d"), b = 60 + 24 * q.length, c = Math.min(200, .3 * m) / 200;
                A.width = 200 * c;
                A.height = b * c;
                a.scale(c, c);
                a.globalAlpha = .4;
                a.fillStyle = "#000000";
                a.fillRect(0, 0, 200, b);
                a.globalAlpha = 1;
                a.fillStyle = "#FFFFFF";
                c = null;
                c = "Asexual Cheats";
                a.font = "20px Ubuntu";
                a.fillText(c, 100 - a.measureText(c).width / 2, 40);
                a.font = "20px Ubuntu";
                for (b = 0; b < q.length; ++b)
                    c = q[b].name || "An unnamed cell", -1 != n.indexOf(q[b].id) && (c = n[0].name), Q || 0 != n.length && 
                        n[0].name == c || (c = "An unnamed cell"), c = b + 1 + ". " + c, a.fillText(c, 100 - a.measureText(c).width / 2, 70 + 24 * b)
                    } else
                        A = null
                        }
    function pa(a, b, c, d, g, e, h) {
        r.push(this);
        z[a] = this;
        this.id = a;
        this.ox = this.x = b;
        this.oy = this.y = c;
        this.oSize = this.size = d;
        this.color = g;
        this.isVirus = e;
        this.points = [];
        this.pointsAcc = [];
        this.createPoints();
        this.setName(h)
    }
    function oa(a) {
        for (a = a.toString(16); 6 > a.length; )
            a = "0" + a;
        return "#" + a
    }
    function P(a, b, c, d) {
        a && (this._size = a);
        b && (this._color = b);
        this._stroke = !!c;
        d && (this._strokeColor = d)
    }
    if ("agar.io" != g.location.hostname && "localhost" != g.location.hostname && "10.10.2.13" != g.location.hostname)
        g.location = "http://agar.io/";
    else {
        var S, d, B, m, p, V = null, h = null, x = 0, y = 0, D = [], n = [], z = {}, r = [], E = [], q = [], J = 0, K = 0, L = -1, M = -1, Ba = 0, F = 0, H = null, X = 0, Y = 0, Z = 1E4, $ = 1E4, s = 1, W = null, sa = !0, Q = !0, da = !1, aa = !1, I = 0, ba = !1, ta = !1, fa = "ontouchstart" in g && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), ca = new Image;
        ca.src = "img/split.png";
        var N = null;
        g.setNick = function(a) {
            v("#adsBottom").hide();
            H = a;
            ma();
            v("#overlays").hide();
            I = 0
        };
        g.setRegion = ia;
        g.setSkins = function(a) {
            sa = a
        };
        g.setNames = function(a) {
            Q = a
        };
        g.setDarkTheme = function(a) {
            ba = a
        };
        g.setColors = function(a) {
            da = a
        };
        g.setShowMass = function(a) {
            ta = a
        };
        g.connect = la;
        var qa = -1, ra = -1, A = null, w = 1, O = null, R = {}, Ea = "poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;hitler;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;ussr;pewdiepie;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;nazi;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;isis;doge".split(";"), Fa = ["m'blob"];
        pa.prototype = {id: 0,points: null,pointsAcc: null,name: null,nameCache: null,sizeCache: null,x: 0,y: 0,size: 0,ox: 0,oy: 0,oSize: 0,nx: 0,ny: 0,nSize: 0,updateTime: 0,updateCode: 0,drawTime: 0,destroyed: !1,isVirus: !1,destroy: function() {
            var a;
            for (a = 0; a < r.length; a++)
                if (r[a] == this) {
                    r.splice(a, 1);
                    break
                }
            delete z[this.id];
            a = n.indexOf(this);
            -1 != a && (aa = !0, n.splice(a, 1));
            a = D.indexOf(this.id);
            -1 != a && D.splice(a, 1);
            this.destroyed = !0;
            E.push(this)
        },getNameSize: function() {
            return Math.max(~~(.3 * this.size), 24)
        },setName: function(a) {
            if (this.name = a)
                null == this.nameCache ? this.nameCache = new P(this.getNameSize(), "#FFFFFF", !0, "#000000") : this.nameCache.setSize(this.getNameSize()), this.nameCache.setValue(this.name)
                },createPoints: function() {
                    for (var a = this.getNumPoints(); this.points.length > a; ) {
                        var b = ~~(Math.random() * this.points.length);
                        this.points.splice(b, 1);
                        this.pointsAcc.splice(b, 1)
                    }
                    0 == this.points.length && 0 < a && (this.points.push({c: this,v: this.size,x: this.x,y: this.y}), this.pointsAcc.push(Math.random() - .5));
                    for (; this.points.length < a; ) {
                        var b = ~~(Math.random() * this.points.length), c = this.points[b];
                        this.points.splice(b, 0, {c: this,v: c.v,x: c.x,y: c.y});
                        this.pointsAcc.splice(b, 0, this.pointsAcc[b])
                    }
                },getNumPoints: function() {
                    return ~~Math.max(this.size * s * (this.isVirus ? Math.min(2 * w, 1) : w), this.isVirus ? 10 : 5)
                },movePoints: function() {
                    this.createPoints();
                    for (var a = this.points, b = this.pointsAcc, c = b.concat(), d = a.concat(), g = d.length, e = 0; e < g; ++e) {
                        var h = c[(e - 1 + g) % g], l = c[(e + 1) % g];
                        b[e] += Math.random() - .5;
                        b[e] *= .7;
                        10 < b[e] && (b[e] = 10);
                        -10 > b[e] && (b[e] = -10);
                        b[e] = (h + l + 8 * b[e]) / 10
                    }
                    for (var n = 
                         this, e = 0; e < g; ++e) {
                        c = d[e].v;
                        h = d[(e - 1 + g) % g].v;
                        l = d[(e + 1) % g].v;
                        if (15 < this.size) {
                            var m = !1, k = a[e].x, p = a[e].y;
                            V.retrieve2(k - 5, p - 5, 10, 10, function(a) {
                                a.c != n && 25 > (k - a.x) * (k - a.x) + (p - a.y) * (p - a.y) && (m = !0)
                            });
                            !m && (a[e].x < X || a[e].y < Y || a[e].x > Z || a[e].y > $) && (m = !0);
                            m && (0 < b[e] && (b[e] = 0), b[e] -= 1)
                        }
                        c += b[e];
                        0 > c && (c = 0);
                        c = (12 * c + this.size) / 13;
                        a[e].v = (h + l + 8 * c) / 10;
                        h = 2 * Math.PI / g;
                        l = this.points[e].v;
                        this.isVirus && 0 == e % 2 && (l += 5);
                        a[e].x = this.x + Math.cos(h * e) * l;
                        a[e].y = this.y + Math.sin(h * e) * l
                    }
                },updatePos: function() {
                    var a;
                    a = (F - this.updateTime) / 
                        120;
                    a = 0 > a ? 0 : 1 < a ? 1 : a;
                    a = a * a * (3 - 2 * a);
                    var b = this.getNameSize();
                    if (this.destroyed && 1 <= a) {
                        var c = E.indexOf(this);
                        -1 != c && E.splice(c, 1)
                    }
                    this.x = a * (this.nx - this.ox) + this.ox;
                    this.y = a * (this.ny - this.oy) + this.oy;
                    this.size = a * (this.nSize - this.oSize) + this.oSize;
                    this.destroyed || b == this.getNameSize() || this.setName(this.name);
                    return a
                },shouldRender: function() {
                    return this.x + this.size + 40 < x - m / 2 / s || this.y + this.size + 40 < y - p / 2 / s || this.x - this.size - 40 > x + m / 2 / s || this.y - this.size - 40 > y + p / 2 / s ? !1 : !0
                },draw: function() {
                    if (this.shouldRender()) {
                        d.save();
                        this.drawTime = F;
                        var a = this.updatePos();
                        this.destroyed && (d.globalAlpha *= 1 - a);
                        this.movePoints();
                        da ? (d.fillStyle = "#FFFFFF", d.strokeStyle = "#AAAAAA") : (d.fillStyle = this.color, d.strokeStyle = this.color);
                        d.beginPath();
                        d.lineWidth = 10;
                        d.lineCap = "round";
                        d.lineJoin = this.isVirus ? "mitter" : "round";
                        a = this.getNumPoints();
                        d.moveTo(this.points[0].x, this.points[0].y);
                        for (var b = 1; b <= a; ++b) {
                            var c = b % a;
                            d.lineTo(this.points[c].x, this.points[c].y)
                        }
                        d.closePath();
                        a = this.name.toLowerCase();
                        sa ? -1 != Ea.indexOf(a) ? (R.hasOwnProperty(a) || (R[a] = new Image, R[a].src = "skins/" + a + ".png"), b = R[a]) : b = null : b = null;
                        a = b ? -1 != Fa.indexOf(a) : !1;
                        d.stroke();
                        d.fill();
                        null != b && 0 < b.width && !a && (d.save(), d.clip(), d.drawImage(b, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size), d.restore());
                        if (da || 15 < this.size)
                            d.strokeStyle = "#000000", d.globalAlpha *= .1, d.stroke();
                        d.globalAlpha = 1;
                        null != b && 0 < b.width && a && d.drawImage(b, this.x - 2 * this.size, this.y - 2 * this.size, 4 * this.size, 4 * this.size);
                        a = -1 != n.indexOf(this);
                        b = ~~this.y;
                        (Q || a) && this.name && this.nameCache && (c = this.nameCache.render(), d.drawImage(c, ~~this.x - ~~(c.width / 2), b - ~~(c.height / 2)), b += c.height / 2 + 4);
                        ta && a && (null == this.sizeCache && (this.sizeCache = new P(this.getNameSize() / 2, "#FFFFFF", !0, "#000000")), this.sizeCache.setSize(this.getNameSize() / 2), this.sizeCache.setValue(~~(this.size * this.size / 100)), c = this.sizeCache.render(), d.drawImage(c, ~~this.x - ~~(c.width / 2), b - ~~(c.height / 2)));
                        d.restore()
                    }
                }};
        P.prototype = {_value: "",_color: "#000000",_stroke: !1,_strokeColor: "#000000",_size: 16,_canvas: null,_ctx: null,_dirty: !1,setSize: function(a) {
            this._size != 
                a && (this._size = a, this._dirty = !0)
        },setColor: function(a) {
            this._color != a && (this._color = a, this._dirty = !0)
        },setStroke: function(a) {
            this._stroke != a && (this._stroke = a, this._dirty = !0)
        },setStrokeColor: function(a) {
            this._strokeColor != a && (this._strokeColor = a, this._dirty = !0)
        },setValue: function(a) {
            a != this._value && (this._value = a, this._dirty = !0)
        },render: function() {
            null == this._canvas && (this._canvas = document.createElement("canvas"), this._ctx = this._canvas.getContext("2d"));
            if (this._dirty) {
                var a = this._canvas, b = this._ctx, c = this._value, d = this._size, g = d + "px Ubuntu";
                b.font = g;
                var e = b.measureText(c).width, h = ~~(.2 * d);
                a.width = e + 6;
                a.height = d + h;
                b.font = g;
                b.globalAlpha = 1;
                b.lineWidth = 3;
                b.strokeStyle = this._strokeColor;
                b.fillStyle = this._color;
                this._stroke && b.strokeText(c, 3, d - h / 2);
                b.fillText(c, 3, d - h / 2)
            }
            return this._canvas
        }};
        g.onload = ua
    }
})(window, jQuery);
