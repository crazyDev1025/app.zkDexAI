(self.webpackChunknew_angular_hello_world =
  self.webpackChunknew_angular_hello_world || []).push([
  [366],
  {
    35972: (Ce, M, W) => {
      "use strict";
      M.Xx = M._w = M.aP = M.KS = M.jQ = void 0;
      W(25465);
      const de = W(56713);
      W(43403);
      function X(B) {
        const V = new Float64Array(16);
        if (B) for (let Z = 0; Z < B.length; Z++) V[Z] = B[Z];
        return V;
      }
      (M.jQ = 64), (M.KS = 64), (M.aP = 32), (new Uint8Array(32)[0] = 9);
      const fe = X(),
        te = X([1]),
        ae =
          (X([
            30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
            16505, 36039, 65139, 11119, 27886, 20995,
          ]),
          X([
            61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
            33010, 6542, 64743, 22239, 55772, 9222,
          ])),
        Oe = X([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        ye = X([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]);
      X([
        41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
        11085, 57099, 20417, 9344, 11139,
      ]);
      function le(B, V) {
        for (let Z = 0; Z < 16; Z++) B[Z] = 0 | V[Z];
      }
      function Ge(B) {
        let V = 1;
        for (let Z = 0; Z < 16; Z++) {
          let h = B[Z] + V + 65535;
          (V = Math.floor(h / 65536)), (B[Z] = h - 65536 * V);
        }
        B[0] += V - 1 + 37 * (V - 1);
      }
      function Le(B, V, Z) {
        const h = ~(Z - 1);
        for (let D = 0; D < 16; D++) {
          const me = h & (B[D] ^ V[D]);
          (B[D] ^= me), (V[D] ^= me);
        }
      }
      function Ve(B, V) {
        const Z = X(),
          h = X();
        for (let D = 0; D < 16; D++) h[D] = V[D];
        Ge(h), Ge(h), Ge(h);
        for (let D = 0; D < 2; D++) {
          Z[0] = h[0] - 65517;
          for (let Re = 1; Re < 15; Re++)
            (Z[Re] = h[Re] - 65535 - ((Z[Re - 1] >> 16) & 1)),
              (Z[Re - 1] &= 65535);
          Z[15] = h[15] - 32767 - ((Z[14] >> 16) & 1);
          const me = (Z[15] >> 16) & 1;
          (Z[14] &= 65535), Le(h, Z, 1 - me);
        }
        for (let D = 0; D < 16; D++)
          (B[2 * D] = 255 & h[D]), (B[2 * D + 1] = h[D] >> 8);
      }
      function _t(B) {
        const V = new Uint8Array(32);
        return Ve(V, B), 1 & V[0];
      }
      function He(B, V, Z) {
        for (let h = 0; h < 16; h++) B[h] = V[h] + Z[h];
      }
      function K(B, V, Z) {
        for (let h = 0; h < 16; h++) B[h] = V[h] - Z[h];
      }
      function oe(B, V, Z) {
        let h,
          D,
          me = 0,
          Re = 0,
          We = 0,
          ot = 0,
          Xe = 0,
          nt = 0,
          zt = 0,
          nr = 0,
          ir = 0,
          $t = 0,
          Ht = 0,
          Pt = 0,
          Ot = 0,
          tt = 0,
          dt = 0,
          it = 0,
          st = 0,
          Bt = 0,
          Jt = 0,
          ur = 0,
          lr = 0,
          sr = 0,
          pr = 0,
          gr = 0,
          zr = 0,
          yr = 0,
          br = 0,
          un = 0,
          Jn = 0,
          ln = 0,
          fn = 0,
          Rt = Z[0],
          At = Z[1],
          Ft = Z[2],
          vt = Z[3],
          Vt = Z[4],
          Qt = Z[5],
          Dt = Z[6],
          jt = Z[7],
          mt = Z[8],
          Tt = Z[9],
          bt = Z[10],
          pt = Z[11],
          kt = Z[12],
          Yt = Z[13],
          Kt = Z[14],
          Gt = Z[15];
        (h = V[0]),
          (me += h * Rt),
          (Re += h * At),
          (We += h * Ft),
          (ot += h * vt),
          (Xe += h * Vt),
          (nt += h * Qt),
          (zt += h * Dt),
          (nr += h * jt),
          (ir += h * mt),
          ($t += h * Tt),
          (Ht += h * bt),
          (Pt += h * pt),
          (Ot += h * kt),
          (tt += h * Yt),
          (dt += h * Kt),
          (it += h * Gt),
          (h = V[1]),
          (Re += h * Rt),
          (We += h * At),
          (ot += h * Ft),
          (Xe += h * vt),
          (nt += h * Vt),
          (zt += h * Qt),
          (nr += h * Dt),
          (ir += h * jt),
          ($t += h * mt),
          (Ht += h * Tt),
          (Pt += h * bt),
          (Ot += h * pt),
          (tt += h * kt),
          (dt += h * Yt),
          (it += h * Kt),
          (st += h * Gt),
          (h = V[2]),
          (We += h * Rt),
          (ot += h * At),
          (Xe += h * Ft),
          (nt += h * vt),
          (zt += h * Vt),
          (nr += h * Qt),
          (ir += h * Dt),
          ($t += h * jt),
          (Ht += h * mt),
          (Pt += h * Tt),
          (Ot += h * bt),
          (tt += h * pt),
          (dt += h * kt),
          (it += h * Yt),
          (st += h * Kt),
          (Bt += h * Gt),
          (h = V[3]),
          (ot += h * Rt),
          (Xe += h * At),
          (nt += h * Ft),
          (zt += h * vt),
          (nr += h * Vt),
          (ir += h * Qt),
          ($t += h * Dt),
          (Ht += h * jt),
          (Pt += h * mt),
          (Ot += h * Tt),
          (tt += h * bt),
          (dt += h * pt),
          (it += h * kt),
          (st += h * Yt),
          (Bt += h * Kt),
          (Jt += h * Gt),
          (h = V[4]),
          (Xe += h * Rt),
          (nt += h * At),
          (zt += h * Ft),
          (nr += h * vt),
          (ir += h * Vt),
          ($t += h * Qt),
          (Ht += h * Dt),
          (Pt += h * jt),
          (Ot += h * mt),
          (tt += h * Tt),
          (dt += h * bt),
          (it += h * pt),
          (st += h * kt),
          (Bt += h * Yt),
          (Jt += h * Kt),
          (ur += h * Gt),
          (h = V[5]),
          (nt += h * Rt),
          (zt += h * At),
          (nr += h * Ft),
          (ir += h * vt),
          ($t += h * Vt),
          (Ht += h * Qt),
          (Pt += h * Dt),
          (Ot += h * jt),
          (tt += h * mt),
          (dt += h * Tt),
          (it += h * bt),
          (st += h * pt),
          (Bt += h * kt),
          (Jt += h * Yt),
          (ur += h * Kt),
          (lr += h * Gt),
          (h = V[6]),
          (zt += h * Rt),
          (nr += h * At),
          (ir += h * Ft),
          ($t += h * vt),
          (Ht += h * Vt),
          (Pt += h * Qt),
          (Ot += h * Dt),
          (tt += h * jt),
          (dt += h * mt),
          (it += h * Tt),
          (st += h * bt),
          (Bt += h * pt),
          (Jt += h * kt),
          (ur += h * Yt),
          (lr += h * Kt),
          (sr += h * Gt),
          (h = V[7]),
          (nr += h * Rt),
          (ir += h * At),
          ($t += h * Ft),
          (Ht += h * vt),
          (Pt += h * Vt),
          (Ot += h * Qt),
          (tt += h * Dt),
          (dt += h * jt),
          (it += h * mt),
          (st += h * Tt),
          (Bt += h * bt),
          (Jt += h * pt),
          (ur += h * kt),
          (lr += h * Yt),
          (sr += h * Kt),
          (pr += h * Gt),
          (h = V[8]),
          (ir += h * Rt),
          ($t += h * At),
          (Ht += h * Ft),
          (Pt += h * vt),
          (Ot += h * Vt),
          (tt += h * Qt),
          (dt += h * Dt),
          (it += h * jt),
          (st += h * mt),
          (Bt += h * Tt),
          (Jt += h * bt),
          (ur += h * pt),
          (lr += h * kt),
          (sr += h * Yt),
          (pr += h * Kt),
          (gr += h * Gt),
          (h = V[9]),
          ($t += h * Rt),
          (Ht += h * At),
          (Pt += h * Ft),
          (Ot += h * vt),
          (tt += h * Vt),
          (dt += h * Qt),
          (it += h * Dt),
          (st += h * jt),
          (Bt += h * mt),
          (Jt += h * Tt),
          (ur += h * bt),
          (lr += h * pt),
          (sr += h * kt),
          (pr += h * Yt),
          (gr += h * Kt),
          (zr += h * Gt),
          (h = V[10]),
          (Ht += h * Rt),
          (Pt += h * At),
          (Ot += h * Ft),
          (tt += h * vt),
          (dt += h * Vt),
          (it += h * Qt),
          (st += h * Dt),
          (Bt += h * jt),
          (Jt += h * mt),
          (ur += h * Tt),
          (lr += h * bt),
          (sr += h * pt),
          (pr += h * kt),
          (gr += h * Yt),
          (zr += h * Kt),
          (yr += h * Gt),
          (h = V[11]),
          (Pt += h * Rt),
          (Ot += h * At),
          (tt += h * Ft),
          (dt += h * vt),
          (it += h * Vt),
          (st += h * Qt),
          (Bt += h * Dt),
          (Jt += h * jt),
          (ur += h * mt),
          (lr += h * Tt),
          (sr += h * bt),
          (pr += h * pt),
          (gr += h * kt),
          (zr += h * Yt),
          (yr += h * Kt),
          (br += h * Gt),
          (h = V[12]),
          (Ot += h * Rt),
          (tt += h * At),
          (dt += h * Ft),
          (it += h * vt),
          (st += h * Vt),
          (Bt += h * Qt),
          (Jt += h * Dt),
          (ur += h * jt),
          (lr += h * mt),
          (sr += h * Tt),
          (pr += h * bt),
          (gr += h * pt),
          (zr += h * kt),
          (yr += h * Yt),
          (br += h * Kt),
          (un += h * Gt),
          (h = V[13]),
          (tt += h * Rt),
          (dt += h * At),
          (it += h * Ft),
          (st += h * vt),
          (Bt += h * Vt),
          (Jt += h * Qt),
          (ur += h * Dt),
          (lr += h * jt),
          (sr += h * mt),
          (pr += h * Tt),
          (gr += h * bt),
          (zr += h * pt),
          (yr += h * kt),
          (br += h * Yt),
          (un += h * Kt),
          (Jn += h * Gt),
          (h = V[14]),
          (dt += h * Rt),
          (it += h * At),
          (st += h * Ft),
          (Bt += h * vt),
          (Jt += h * Vt),
          (ur += h * Qt),
          (lr += h * Dt),
          (sr += h * jt),
          (pr += h * mt),
          (gr += h * Tt),
          (zr += h * bt),
          (yr += h * pt),
          (br += h * kt),
          (un += h * Yt),
          (Jn += h * Kt),
          (ln += h * Gt),
          (h = V[15]),
          (it += h * Rt),
          (st += h * At),
          (Bt += h * Ft),
          (Jt += h * vt),
          (ur += h * Vt),
          (lr += h * Qt),
          (sr += h * Dt),
          (pr += h * jt),
          (gr += h * mt),
          (zr += h * Tt),
          (yr += h * bt),
          (br += h * pt),
          (un += h * kt),
          (Jn += h * Yt),
          (ln += h * Kt),
          (fn += h * Gt),
          (me += 38 * st),
          (Re += 38 * Bt),
          (We += 38 * Jt),
          (ot += 38 * ur),
          (Xe += 38 * lr),
          (nt += 38 * sr),
          (zt += 38 * pr),
          (nr += 38 * gr),
          (ir += 38 * zr),
          ($t += 38 * yr),
          (Ht += 38 * br),
          (Pt += 38 * un),
          (Ot += 38 * Jn),
          (tt += 38 * ln),
          (dt += 38 * fn),
          (D = 1),
          (h = me + D + 65535),
          (D = Math.floor(h / 65536)),
          (me = h - 65536 * D),
          (h = Re + D + 65535),
          (D = Math.floor(h / 65536)),
          (Re = h - 65536 * D),
          (h = We + D + 65535),
          (D = Math.floor(h / 65536)),
          (We = h - 65536 * D),
          (h = ot + D + 65535),
          (D = Math.floor(h / 65536)),
          (ot = h - 65536 * D),
          (h = Xe + D + 65535),
          (D = Math.floor(h / 65536)),
          (Xe = h - 65536 * D),
          (h = nt + D + 65535),
          (D = Math.floor(h / 65536)),
          (nt = h - 65536 * D),
          (h = zt + D + 65535),
          (D = Math.floor(h / 65536)),
          (zt = h - 65536 * D),
          (h = nr + D + 65535),
          (D = Math.floor(h / 65536)),
          (nr = h - 65536 * D),
          (h = ir + D + 65535),
          (D = Math.floor(h / 65536)),
          (ir = h - 65536 * D),
          (h = $t + D + 65535),
          (D = Math.floor(h / 65536)),
          ($t = h - 65536 * D),
          (h = Ht + D + 65535),
          (D = Math.floor(h / 65536)),
          (Ht = h - 65536 * D),
          (h = Pt + D + 65535),
          (D = Math.floor(h / 65536)),
          (Pt = h - 65536 * D),
          (h = Ot + D + 65535),
          (D = Math.floor(h / 65536)),
          (Ot = h - 65536 * D),
          (h = tt + D + 65535),
          (D = Math.floor(h / 65536)),
          (tt = h - 65536 * D),
          (h = dt + D + 65535),
          (D = Math.floor(h / 65536)),
          (dt = h - 65536 * D),
          (h = it + D + 65535),
          (D = Math.floor(h / 65536)),
          (it = h - 65536 * D),
          (me += D - 1 + 37 * (D - 1)),
          (D = 1),
          (h = me + D + 65535),
          (D = Math.floor(h / 65536)),
          (me = h - 65536 * D),
          (h = Re + D + 65535),
          (D = Math.floor(h / 65536)),
          (Re = h - 65536 * D),
          (h = We + D + 65535),
          (D = Math.floor(h / 65536)),
          (We = h - 65536 * D),
          (h = ot + D + 65535),
          (D = Math.floor(h / 65536)),
          (ot = h - 65536 * D),
          (h = Xe + D + 65535),
          (D = Math.floor(h / 65536)),
          (Xe = h - 65536 * D),
          (h = nt + D + 65535),
          (D = Math.floor(h / 65536)),
          (nt = h - 65536 * D),
          (h = zt + D + 65535),
          (D = Math.floor(h / 65536)),
          (zt = h - 65536 * D),
          (h = nr + D + 65535),
          (D = Math.floor(h / 65536)),
          (nr = h - 65536 * D),
          (h = ir + D + 65535),
          (D = Math.floor(h / 65536)),
          (ir = h - 65536 * D),
          (h = $t + D + 65535),
          (D = Math.floor(h / 65536)),
          ($t = h - 65536 * D),
          (h = Ht + D + 65535),
          (D = Math.floor(h / 65536)),
          (Ht = h - 65536 * D),
          (h = Pt + D + 65535),
          (D = Math.floor(h / 65536)),
          (Pt = h - 65536 * D),
          (h = Ot + D + 65535),
          (D = Math.floor(h / 65536)),
          (Ot = h - 65536 * D),
          (h = tt + D + 65535),
          (D = Math.floor(h / 65536)),
          (tt = h - 65536 * D),
          (h = dt + D + 65535),
          (D = Math.floor(h / 65536)),
          (dt = h - 65536 * D),
          (h = it + D + 65535),
          (D = Math.floor(h / 65536)),
          (it = h - 65536 * D),
          (me += D - 1 + 37 * (D - 1)),
          (B[0] = me),
          (B[1] = Re),
          (B[2] = We),
          (B[3] = ot),
          (B[4] = Xe),
          (B[5] = nt),
          (B[6] = zt),
          (B[7] = nr),
          (B[8] = ir),
          (B[9] = $t),
          (B[10] = Ht),
          (B[11] = Pt),
          (B[12] = Ot),
          (B[13] = tt),
          (B[14] = dt),
          (B[15] = it);
      }
      function p(B, V) {
        oe(B, V, V);
      }
      function P(B, V) {
        const Z = X(),
          h = X(),
          D = X(),
          me = X(),
          Re = X(),
          We = X(),
          ot = X(),
          Xe = X(),
          nt = X();
        K(Z, B[1], B[0]),
          K(nt, V[1], V[0]),
          oe(Z, Z, nt),
          He(h, B[0], B[1]),
          He(nt, V[0], V[1]),
          oe(h, h, nt),
          oe(D, B[3], V[3]),
          oe(D, D, ae),
          oe(me, B[2], V[2]),
          He(me, me, me),
          K(Re, h, Z),
          K(We, me, D),
          He(ot, me, D),
          He(Xe, h, Z),
          oe(B[0], Re, We),
          oe(B[1], Xe, ot),
          oe(B[2], ot, We),
          oe(B[3], Re, Xe);
      }
      function v(B, V, Z) {
        for (let h = 0; h < 4; h++) Le(B[h], V[h], Z);
      }
      function d(B, V) {
        const Z = X(),
          h = X(),
          D = X();
        (function b(B, V) {
          const Z = X();
          let h;
          for (h = 0; h < 16; h++) Z[h] = V[h];
          for (h = 253; h >= 0; h--) p(Z, Z), 2 !== h && 4 !== h && oe(Z, Z, V);
          for (h = 0; h < 16; h++) B[h] = Z[h];
        })(D, V[2]),
          oe(Z, V[0], D),
          oe(h, V[1], D),
          Ve(B, h),
          (B[31] ^= _t(Z) << 7);
      }
      function C(B, V) {
        const Z = [X(), X(), X(), X()];
        le(Z[0], Oe),
          le(Z[1], ye),
          le(Z[2], te),
          oe(Z[3], Oe, ye),
          (function x(B, V, Z) {
            le(B[0], fe), le(B[1], te), le(B[2], te), le(B[3], fe);
            for (let h = 255; h >= 0; --h) {
              const D = (Z[(h / 8) | 0] >> (7 & h)) & 1;
              v(B, V, D), P(V, B), P(B, B), v(B, V, D);
            }
          })(B, Z, V);
      }
      M._w = function ue(B) {
        if (B.length !== M.aP)
          throw new Error(`ed25519: seed must be ${M.aP} bytes`);
        const V = (0, de.hash)(B);
        (V[0] &= 248), (V[31] &= 127), (V[31] |= 64);
        const Z = new Uint8Array(32),
          h = [X(), X(), X(), X()];
        C(h, V), d(Z, h);
        const D = new Uint8Array(64);
        return D.set(B), D.set(Z, 32), { publicKey: Z, secretKey: D };
      };
      const ee = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function q(B, V) {
        let Z, h, D, me;
        for (h = 63; h >= 32; --h) {
          for (Z = 0, D = h - 32, me = h - 12; D < me; ++D)
            (V[D] += Z - 16 * V[h] * ee[D - (h - 32)]),
              (Z = Math.floor((V[D] + 128) / 256)),
              (V[D] -= 256 * Z);
          (V[D] += Z), (V[h] = 0);
        }
        for (Z = 0, D = 0; D < 32; D++)
          (V[D] += Z - (V[31] >> 4) * ee[D]), (Z = V[D] >> 8), (V[D] &= 255);
        for (D = 0; D < 32; D++) V[D] -= Z * ee[D];
        for (h = 0; h < 32; h++) (V[h + 1] += V[h] >> 8), (B[h] = 255 & V[h]);
      }
      function we(B) {
        const V = new Float64Array(64);
        for (let Z = 0; Z < 64; Z++) V[Z] = B[Z];
        for (let Z = 0; Z < 64; Z++) B[Z] = 0;
        q(B, V);
      }
      M.Xx = function Ze(B, V) {
        const Z = new Float64Array(64),
          h = [X(), X(), X(), X()],
          D = (0, de.hash)(B.subarray(0, 32));
        (D[0] &= 248), (D[31] &= 127), (D[31] |= 64);
        const me = new Uint8Array(64);
        me.set(D.subarray(32), 32);
        const Re = new de.SHA512();
        Re.update(me.subarray(32)), Re.update(V);
        const We = Re.digest();
        Re.clean(),
          we(We),
          C(h, We),
          d(me, h),
          Re.reset(),
          Re.update(me.subarray(0, 32)),
          Re.update(B.subarray(32)),
          Re.update(V);
        const ot = Re.digest();
        we(ot);
        for (let Xe = 0; Xe < 32; Xe++) Z[Xe] = We[Xe];
        for (let Xe = 0; Xe < 32; Xe++)
          for (let nt = 0; nt < 32; nt++) Z[Xe + nt] += ot[Xe] * D[nt];
        return q(me.subarray(32), Z), me;
      };
    },
    56713: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 });
      var m = W(99546),
        ie = W(43403);
      (M.DIGEST_LENGTH = 64), (M.BLOCK_SIZE = 128);
      var de = (function () {
        function fe() {
          (this.digestLength = M.DIGEST_LENGTH),
            (this.blockSize = M.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (fe.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (fe.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (fe.prototype.clean = function () {
            ie.wipe(this._buffer),
              ie.wipe(this._tempHi),
              ie.wipe(this._tempLo),
              this.reset();
          }),
          (fe.prototype.update = function (te, se) {
            if ((void 0 === se && (se = te.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished."
              );
            var ae = 0;
            if (((this._bytesHashed += se), this._bufferLength > 0)) {
              for (; this._bufferLength < M.BLOCK_SIZE && se > 0; )
                (this._buffer[this._bufferLength++] = te[ae++]), se--;
              this._bufferLength === this.blockSize &&
                (X(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              se >= this.blockSize &&
              ((ae = X(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                te,
                ae,
                se
              )),
              (se %= this.blockSize));
              se > 0;

            )
              (this._buffer[this._bufferLength++] = te[ae++]), se--;
            return this;
          }),
          (fe.prototype.finish = function (te) {
            if (!this._finished) {
              var se = this._bytesHashed,
                ae = this._bufferLength,
                Oe = (se / 536870912) | 0,
                ye = se << 3,
                Ee = se % 128 < 112 ? 128 : 256;
              this._buffer[ae] = 128;
              for (var le = ae + 1; le < Ee - 8; le++) this._buffer[le] = 0;
              m.writeUint32BE(Oe, this._buffer, Ee - 8),
                m.writeUint32BE(ye, this._buffer, Ee - 4),
                X(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  Ee
                ),
                (this._finished = !0);
            }
            for (le = 0; le < this.digestLength / 8; le++)
              m.writeUint32BE(this._stateHi[le], te, 8 * le),
                m.writeUint32BE(this._stateLo[le], te, 8 * le + 4);
            return this;
          }),
          (fe.prototype.digest = function () {
            var te = new Uint8Array(this.digestLength);
            return this.finish(te), te;
          }),
          (fe.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (fe.prototype.restoreState = function (te) {
            return (
              this._stateHi.set(te.stateHi),
              this._stateLo.set(te.stateLo),
              (this._bufferLength = te.bufferLength),
              te.buffer && this._buffer.set(te.buffer),
              (this._bytesHashed = te.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (fe.prototype.cleanSavedState = function (te) {
            ie.wipe(te.stateHi),
              ie.wipe(te.stateLo),
              te.buffer && ie.wipe(te.buffer),
              (te.bufferLength = 0),
              (te.bytesHashed = 0);
          }),
          fe
        );
      })();
      M.SHA512 = de;
      var S = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function X(fe, te, se, ae, Oe, ye, Ee) {
        for (
          var d,
            x,
            C,
            ue,
            R,
            H,
            ee,
            q,
            le = se[0],
            Ge = se[1],
            Le = se[2],
            Ve = se[3],
            Je = se[4],
            lt = se[5],
            _t = se[6],
            ft = se[7],
            He = ae[0],
            K = ae[1],
            oe = ae[2],
            p = ae[3],
            b = ae[4],
            _ = ae[5],
            P = ae[6],
            v = ae[7];
          Ee >= 128;

        ) {
          for (var we = 0; we < 16; we++)
            (fe[we] = m.readUint32BE(Oe, (Ze = 8 * we + ye))),
              (te[we] = m.readUint32BE(Oe, Ze + 4));
          for (we = 0; we < 80; we++) {
            var h,
              zt,
              Qr = Ge,
              Yr = Le,
              ht = Ve,
              B = Je,
              V = lt,
              Z = _t,
              me = K,
              Re = oe,
              We = p,
              ot = b,
              Xe = _,
              nt = P;
            if (
              ((R = 65535 & (x = v)),
              (H = x >>> 16),
              (ee = 65535 & (d = ft)),
              (q = d >>> 16),
              (R +=
                65535 &
                (x =
                  ((b >>> 14) | (Je << 18)) ^
                  ((b >>> 18) | (Je << 14)) ^
                  ((Je >>> 9) | (b << 23)))),
              (H += x >>> 16),
              (ee +=
                65535 &
                (d =
                  ((Je >>> 14) | (b << 18)) ^
                  ((Je >>> 18) | (b << 14)) ^
                  ((b >>> 9) | (Je << 23)))),
              (q += d >>> 16),
              (R += 65535 & (x = (b & _) ^ (~b & P))),
              (H += x >>> 16),
              (ee += 65535 & (d = (Je & lt) ^ (~Je & _t))),
              (q += d >>> 16),
              (R += 65535 & (x = S[2 * we + 1])),
              (H += x >>> 16),
              (ee += 65535 & (d = S[2 * we])),
              (q += d >>> 16),
              (H += (x = te[we % 16]) >>> 16),
              (ee += 65535 & (d = fe[we % 16])),
              (q += d >>> 16),
              (ee += (H += (R += 65535 & x) >>> 16) >>> 16),
              (R = 65535 & (x = ue = (65535 & R) | (H << 16))),
              (H = x >>> 16),
              (ee = 65535 & (d = C = (65535 & ee) | ((q += ee >>> 16) << 16))),
              (q = d >>> 16),
              (R +=
                65535 &
                (x =
                  ((He >>> 28) | (le << 4)) ^
                  ((le >>> 2) | (He << 30)) ^
                  ((le >>> 7) | (He << 25)))),
              (H += x >>> 16),
              (ee +=
                65535 &
                (d =
                  ((le >>> 28) | (He << 4)) ^
                  ((He >>> 2) | (le << 30)) ^
                  ((He >>> 7) | (le << 25)))),
              (q += d >>> 16),
              (H += (x = (He & K) ^ (He & oe) ^ (K & oe)) >>> 16),
              (ee += 65535 & (d = (le & Ge) ^ (le & Le) ^ (Ge & Le))),
              (q += d >>> 16),
              (h =
                (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
                ((q += ee >>> 16) << 16)),
              (zt = (65535 & R) | (H << 16)),
              (R = 65535 & (x = We)),
              (H = x >>> 16),
              (ee = 65535 & (d = ht)),
              (q = d >>> 16),
              (H += (x = ue) >>> 16),
              (ee += 65535 & (d = C)),
              (q += d >>> 16),
              (Ge = le),
              (Le = Qr),
              (Ve = Yr),
              (Je = ht =
                (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
                ((q += ee >>> 16) << 16)),
              (lt = B),
              (_t = V),
              (ft = Z),
              (le = h),
              (K = He),
              (oe = me),
              (p = Re),
              (b = We = (65535 & R) | (H << 16)),
              (_ = ot),
              (P = Xe),
              (v = nt),
              (He = zt),
              we % 16 == 15)
            )
              for (var Ze = 0; Ze < 16; Ze++)
                (R = 65535 & (x = te[Ze])),
                  (H = x >>> 16),
                  (ee = 65535 & (d = fe[Ze])),
                  (q = d >>> 16),
                  (R += 65535 & (x = te[(Ze + 9) % 16])),
                  (H += x >>> 16),
                  (ee += 65535 & (d = fe[(Ze + 9) % 16])),
                  (q += d >>> 16),
                  (R +=
                    65535 &
                    (x =
                      (((ue = te[(Ze + 1) % 16]) >>> 1) |
                        ((C = fe[(Ze + 1) % 16]) << 31)) ^
                      ((ue >>> 8) | (C << 24)) ^
                      ((ue >>> 7) | (C << 25)))),
                  (H += x >>> 16),
                  (ee +=
                    65535 &
                    (d =
                      ((C >>> 1) | (ue << 31)) ^
                      ((C >>> 8) | (ue << 24)) ^
                      (C >>> 7))),
                  (q += d >>> 16),
                  (H +=
                    (x =
                      (((ue = te[(Ze + 14) % 16]) >>> 19) |
                        ((C = fe[(Ze + 14) % 16]) << 13)) ^
                      ((C >>> 29) | (ue << 3)) ^
                      ((ue >>> 6) | (C << 26))) >>> 16),
                  (ee +=
                    65535 &
                    (d =
                      ((C >>> 19) | (ue << 13)) ^
                      ((ue >>> 29) | (C << 3)) ^
                      (C >>> 6))),
                  (q += d >>> 16),
                  (fe[Ze] =
                    (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
                    ((q += ee >>> 16) << 16)),
                  (te[Ze] = (65535 & R) | (H << 16));
          }
          (R = 65535 & (x = He)),
            (H = x >>> 16),
            (ee = 65535 & (d = le)),
            (q = d >>> 16),
            (H += (x = ae[0]) >>> 16),
            (ee += 65535 & (d = se[0])),
            (q += d >>> 16),
            (se[0] = le =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[0] = He = (65535 & R) | (H << 16)),
            (R = 65535 & (x = K)),
            (H = x >>> 16),
            (ee = 65535 & (d = Ge)),
            (q = d >>> 16),
            (H += (x = ae[1]) >>> 16),
            (ee += 65535 & (d = se[1])),
            (q += d >>> 16),
            (se[1] = Ge =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[1] = K = (65535 & R) | (H << 16)),
            (R = 65535 & (x = oe)),
            (H = x >>> 16),
            (ee = 65535 & (d = Le)),
            (q = d >>> 16),
            (H += (x = ae[2]) >>> 16),
            (ee += 65535 & (d = se[2])),
            (q += d >>> 16),
            (se[2] = Le =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[2] = oe = (65535 & R) | (H << 16)),
            (R = 65535 & (x = p)),
            (H = x >>> 16),
            (ee = 65535 & (d = Ve)),
            (q = d >>> 16),
            (H += (x = ae[3]) >>> 16),
            (ee += 65535 & (d = se[3])),
            (q += d >>> 16),
            (se[3] = Ve =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[3] = p = (65535 & R) | (H << 16)),
            (R = 65535 & (x = b)),
            (H = x >>> 16),
            (ee = 65535 & (d = Je)),
            (q = d >>> 16),
            (H += (x = ae[4]) >>> 16),
            (ee += 65535 & (d = se[4])),
            (q += d >>> 16),
            (se[4] = Je =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[4] = b = (65535 & R) | (H << 16)),
            (R = 65535 & (x = _)),
            (H = x >>> 16),
            (ee = 65535 & (d = lt)),
            (q = d >>> 16),
            (H += (x = ae[5]) >>> 16),
            (ee += 65535 & (d = se[5])),
            (q += d >>> 16),
            (se[5] = lt =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[5] = _ = (65535 & R) | (H << 16)),
            (R = 65535 & (x = P)),
            (H = x >>> 16),
            (ee = 65535 & (d = _t)),
            (q = d >>> 16),
            (H += (x = ae[6]) >>> 16),
            (ee += 65535 & (d = se[6])),
            (q += d >>> 16),
            (se[6] = _t =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[6] = P = (65535 & R) | (H << 16)),
            (R = 65535 & (x = v)),
            (H = x >>> 16),
            (ee = 65535 & (d = ft)),
            (q = d >>> 16),
            (H += (x = ae[7]) >>> 16),
            (ee += 65535 & (d = se[7])),
            (q += d >>> 16),
            (se[7] = ft =
              (65535 & (ee += (H += (R += 65535 & x) >>> 16) >>> 16)) |
              ((q += ee >>> 16) << 16)),
            (ae[7] = v = (65535 & R) | (H << 16)),
            (ye += 128),
            (Ee -= 128);
        }
        return ye;
      }
      M.hash = function be(fe) {
        var te = new de();
        te.update(fe);
        var se = te.digest();
        return te.clean(), se;
      };
    },
    7263: (Ce, M) => {
      "use strict";
      function W() {
        return (
          (null == global ? void 0 : global.crypto) ||
          (null == global ? void 0 : global.msCrypto) ||
          {}
        );
      }
      function m() {
        const de = W();
        return de.subtle || de.webkitSubtle;
      }
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.isBrowserCryptoAvailable =
          M.getSubtleCrypto =
          M.getBrowerCrypto =
            void 0),
        (M.getBrowerCrypto = W),
        (M.getSubtleCrypto = m),
        (M.isBrowserCryptoAvailable = function ie() {
          return !!W() && !!m();
        });
    },
    24574: (Ce, M) => {
      "use strict";
      function W() {
        return (
          typeof document > "u" &&
          typeof navigator < "u" &&
          "ReactNative" === navigator.product
        );
      }
      function m() {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      }
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.isBrowser = M.isNode = M.isReactNative = void 0),
        (M.isReactNative = W),
        (M.isNode = m),
        (M.isBrowser = function ie() {
          return !W() && !m();
        });
    },
    92299: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 });
      const m = W(34308);
      m.__exportStar(W(7263), M), m.__exportStar(W(24574), M);
    },
    46366: (Ce, M, W) => {
      "use strict";
      W.r(M),
        W.d(M, {
          EthereumProvider: () => Gp,
          OPTIONAL_EVENTS: () => Uu,
          OPTIONAL_METHODS: () => Zu,
          REQUIRED_EVENTS: () => js,
          REQUIRED_METHODS: () => Fs,
          default: () => Ms,
        });
      var m = W(49671),
        ie = W(82016),
        de = W.n(ie),
        S = W(64778),
        X = W(17297),
        be = W(80986),
        fe = W(72997),
        te = W(62108);
      class se extends te.q {
        constructor(n) {
          super(), (this.opts = n), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class Oe extends te.q {
        constructor(n, t) {
          super(),
            (this.core = n),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class ye {
        constructor(n, t) {
          (this.logger = n), (this.core = t);
        }
      }
      class Ee extends te.q {
        constructor(n, t) {
          super(), (this.relayer = n), (this.logger = t);
        }
      }
      class le extends te.q {
        constructor(n) {
          super();
        }
      }
      class Ge {
        constructor(n, t, o, a) {
          (this.core = n), (this.logger = t), (this.name = o);
        }
      }
      class Ve extends te.q {
        constructor(n, t) {
          super(), (this.relayer = n), (this.logger = t);
        }
      }
      class lt extends te.q {
        constructor(n, t) {
          super(), (this.core = n), (this.logger = t);
        }
      }
      class ft {
        constructor(n, t) {
          (this.projectId = n), (this.logger = t);
        }
      }
      class K {
        constructor(n) {
          (this.opts = n), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class p {
        constructor(n) {
          this.client = n;
        }
      }
      const b = (y) =>
        JSON.stringify(y, (n, t) =>
          "bigint" == typeof t ? t.toString() + "n" : t
        );
      function P(y) {
        if ("string" != typeof y)
          throw new Error("Cannot safe json parse value of type " + typeof y);
        try {
          return ((y) => {
            const t = y.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            );
            return JSON.parse(t, (o, a) =>
              "string" == typeof a && a.match(/^\d+n$/)
                ? BigInt(a.substring(0, a.length - 1))
                : a
            );
          })(y);
        } catch {
          return y;
        }
      }
      function v(y) {
        return "string" == typeof y ? y : b(y) || "";
      }
      var d = W(35972),
        x = W(25465),
        C = W(35409);
      const ee = "base64url",
        q = "utf8",
        Ze = ":",
        Ae = "did",
        Qr = "key",
        Yr = "base58btc",
        ht = "z",
        B = "K36";
      var h = W(91376),
        D = W(90878),
        me = W(82269);
      function We(y) {
        return (0, D.B)((0, me.m)(v(y), q), ee);
      }
      function ot(y) {
        const n = (0, me.m)(B, Yr),
          t = ht + (0, D.B)((0, h.z)([n, y]), Yr);
        return [Ae, Qr, t].join(Ze);
      }
      function nt(y) {
        return (0, D.B)(y, ee);
      }
      function Pt(y = (0, x.randomBytes)(32)) {
        return d._w(y);
      }
      function tt() {
        return (tt = (0, m.Z)(function* (
          y,
          n,
          t,
          o,
          a = (0, C.fromMiliseconds)(Date.now())
        ) {
          const u = { alg: "EdDSA", typ: "JWT" },
            N = { iss: ot(o.publicKey), sub: y, aud: n, iat: a, exp: a + t },
            z = (function nr(y) {
              return (0, me.m)([We(y.header), We(y.payload)].join("."), "utf8");
            })({ header: u, payload: N });
          return (function $t(y) {
            return [We(y.header), We(y.payload), nt(y.signature)].join(".");
          })({ header: u, payload: N, signature: d.Xx(o.secretKey, z) });
        })).apply(this, arguments);
      }
      W(82768);
      var Bt = W(3544);
      const pr = "INTERNAL_ERROR",
        gr = "SERVER_ERROR",
        zr = [-32700, -32600, -32601, -32602, -32603],
        br = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [pr]: { code: -32603, message: "Internal error" },
          [gr]: { code: -32e3, message: "Server error" },
        },
        un = gr;
      function Rt(y) {
        return Object.keys(br).includes(y) ? br[y] : br[un];
      }
      function vt(y, n, t) {
        return y.message.includes("getaddrinfo ENOTFOUND") ||
          y.message.includes("connect ECONNREFUSED")
          ? new Error(`Unavailable ${t} RPC url at ${n}`)
          : y;
      }
      var Vt = W(92299);
      function Dt(y = 3) {
        return (
          Date.now() * Math.pow(10, y) +
          Math.floor(Math.random() * Math.pow(10, y))
        );
      }
      function jt(y = 6) {
        return BigInt(Dt(y));
      }
      function mt(y, n, t) {
        return { id: t || Dt(), jsonrpc: "2.0", method: y, params: n };
      }
      function Tt(y, n) {
        return { id: y, jsonrpc: "2.0", result: n };
      }
      function bt(y, n, t) {
        return { id: y, jsonrpc: "2.0", error: pt(n, t) };
      }
      function pt(y, n) {
        return typeof y > "u"
          ? Rt(pr)
          : ("string" == typeof y &&
              (y = Object.assign(Object.assign({}, Rt(gr)), { message: y })),
            typeof n < "u" && (y.data = n),
            (function ln(y) {
              return zr.includes(y);
            })(y.code) &&
              (y = (function At(y) {
                return Object.values(br).find((t) => t.code === y) || br[un];
              })(y.code)),
            y);
      }
      class kt {}
      class Kt extends kt {
        constructor() {
          super();
        }
      }
      class Gt extends Kt {
        constructor(n) {
          super();
        }
      }
      function ds(y, n) {
        const t = (function No(y) {
          const n = y.match(new RegExp(/^\w+:/, "gi"));
          if (n && n.length) return n[0];
        })(y);
        return !(typeof t > "u") && new RegExp(n).test(t);
      }
      function ps(y) {
        return ds(y, "^https?:");
      }
      function gs(y) {
        return ds(y, "^wss?:");
      }
      function hn(y) {
        return (
          "object" == typeof y &&
          "id" in y &&
          "jsonrpc" in y &&
          "2.0" === y.jsonrpc
        );
      }
      function ji(y) {
        return hn(y) && "method" in y;
      }
      function hi(y) {
        return hn(y) && (en(y) || Dr(y));
      }
      function en(y) {
        return "result" in y;
      }
      function Dr(y) {
        return "error" in y;
      }
      class Nr extends Gt {
        constructor(n) {
          super(n),
            (this.events = new ie.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(n)),
            this.connection.connected && this.registerEventListeners();
        }
        connect(n = this.connection) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.open(n);
          })();
        }
        disconnect() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.close();
          })();
        }
        on(n, t) {
          this.events.on(n, t);
        }
        once(n, t) {
          this.events.once(n, t);
        }
        off(n, t) {
          this.events.off(n, t);
        }
        removeListener(n, t) {
          this.events.removeListener(n, t);
        }
        request(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            return o.requestStrict(
              mt(n.method, n.params || [], n.id || jt().toString()),
              t
            );
          })();
        }
        requestStrict(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            return new Promise(
              (function () {
                var a = (0, m.Z)(function* (u, f) {
                  if (!o.connection.connected)
                    try {
                      yield o.open();
                    } catch (I) {
                      f(I);
                    }
                  o.events.on(`${n.id}`, (I) => {
                    Dr(I) ? f(I.error) : u(I.result);
                  });
                  try {
                    yield o.connection.send(n, t);
                  } catch (I) {
                    f(I);
                  }
                });
                return function (u, f) {
                  return a.apply(this, arguments);
                };
              })()
            );
          })();
        }
        setConnection(n = this.connection) {
          return n;
        }
        onPayload(n) {
          this.events.emit("payload", n),
            hi(n)
              ? this.events.emit(`${n.id}`, n)
              : this.events.emit("message", { type: n.method, data: n.params });
        }
        onClose(n) {
          n &&
            3e3 === n.code &&
            this.events.emit(
              "error",
              new Error(
                `WebSocket connection closed abnormally with code: ${n.code} ${
                  n.reason ? `(${n.reason})` : ""
                }`
              )
            ),
            this.events.emit("disconnect");
        }
        open(n = this.connection) {
          var t = this;
          return (0, m.Z)(function* () {
            (t.connection === n && t.connection.connected) ||
              (t.connection.connected && t.close(),
              "string" == typeof n &&
                (yield t.connection.open(n), (n = t.connection)),
              (t.connection = t.setConnection(n)),
              yield t.connection.open(),
              t.registerEventListeners(),
              t.events.emit("connect"));
          })();
        }
        close() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.connection.close();
          })();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (n) => this.onPayload(n)),
            this.connection.on("close", (n) => this.onClose(n)),
            this.connection.on("error", (n) => this.events.emit("error", n)),
            this.connection.on("register_error", (n) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      const ys = (y) => y.split("?")[0],
        Lo =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof global < "u" && typeof global.WebSocket < "u"
            ? global.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : W(3569);
      var Qn = W(12650),
        vs = W.n(Qn),
        qo = function ms(y, n) {
          if (y.length >= 255) throw new TypeError("Alphabet too long");
          for (var t = new Uint8Array(256), o = 0; o < t.length; o++)
            t[o] = 255;
          for (var a = 0; a < y.length; a++) {
            var u = y.charAt(a),
              f = u.charCodeAt(0);
            if (255 !== t[f]) throw new TypeError(u + " is ambiguous");
            t[f] = a;
          }
          var I = y.length,
            N = y.charAt(0),
            z = Math.log(I) / Math.log(256),
            G = Math.log(256) / Math.log(I);
          function xe(_e) {
            if ("string" != typeof _e) throw new TypeError("Expected String");
            if (0 === _e.length) return new Uint8Array();
            var ze = 0;
            if (" " !== _e[ze]) {
              for (var ke = 0, xt = 0; _e[ze] === N; ) ke++, ze++;
              for (
                var fr = ((_e.length - ze) * z + 1) >>> 0,
                  gt = new Uint8Array(fr);
                _e[ze];

              ) {
                var Mt = t[_e.charCodeAt(ze)];
                if (255 === Mt) return;
                for (
                  var ct = 0, Zt = fr - 1;
                  (0 !== Mt || ct < xt) && -1 !== Zt;
                  Zt--, ct++
                )
                  (gt[Zt] = (Mt += (I * gt[Zt]) >>> 0) % 256 >>> 0),
                    (Mt = (Mt / 256) >>> 0);
                if (0 !== Mt) throw new Error("Non-zero carry");
                (xt = ct), ze++;
              }
              if (" " !== _e[ze]) {
                for (var Qe = fr - xt; Qe !== fr && 0 === gt[Qe]; ) Qe++;
                for (
                  var ar = new Uint8Array(ke + (fr - Qe)), Un = ke;
                  Qe !== fr;

                )
                  ar[Un++] = gt[Qe++];
                return ar;
              }
            }
          }
          return {
            encode: function ce(_e) {
              if (
                (_e instanceof Uint8Array ||
                  (ArrayBuffer.isView(_e)
                    ? (_e = new Uint8Array(
                        _e.buffer,
                        _e.byteOffset,
                        _e.byteLength
                      ))
                    : Array.isArray(_e) && (_e = Uint8Array.from(_e))),
                !(_e instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === _e.length) return "";
              for (
                var ze = 0, ke = 0, xt = 0, fr = _e.length;
                xt !== fr && 0 === _e[xt];

              )
                xt++, ze++;
              for (
                var gt = ((fr - xt) * G + 1) >>> 0, Mt = new Uint8Array(gt);
                xt !== fr;

              ) {
                for (
                  var ct = _e[xt], Zt = 0, Qe = gt - 1;
                  (0 !== ct || Zt < ke) && -1 !== Qe;
                  Qe--, Zt++
                )
                  (Mt[Qe] = (ct += (256 * Mt[Qe]) >>> 0) % I >>> 0),
                    (ct = (ct / I) >>> 0);
                if (0 !== ct) throw new Error("Non-zero carry");
                (ke = Zt), xt++;
              }
              for (var ar = gt - ke; ar !== gt && 0 === Mt[ar]; ) ar++;
              for (var Un = N.repeat(ze); ar < gt; ++ar) Un += y.charAt(Mt[ar]);
              return Un;
            },
            decodeUnsafe: xe,
            decode: function Te(_e) {
              var ze = xe(_e);
              if (ze) return ze;
              throw new Error(`Non-${n} character`);
            },
          };
        };
      const bs = (y) => {
        if (y instanceof Uint8Array && "Uint8Array" === y.constructor.name)
          return y;
        if (y instanceof ArrayBuffer) return new Uint8Array(y);
        if (ArrayBuffer.isView(y))
          return new Uint8Array(y.buffer, y.byteOffset, y.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class $o {
        constructor(n, t, o) {
          (this.name = n), (this.prefix = t), (this.baseEncode = o);
        }
        encode(n) {
          if (n instanceof Uint8Array)
            return `${this.prefix}${this.baseEncode(n)}`;
          throw Error("Unknown type, must be binary type");
        }
      }
      class Ho {
        constructor(n, t, o) {
          if (((this.name = n), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = o);
        }
        decode(n) {
          if ("string" == typeof n) {
            if (n.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                `Unable to decode multibase string ${JSON.stringify(n)}, ${
                  this.name
                } decoder only supports inputs prefixed with ${this.prefix}`
              );
            return this.baseDecode(n.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(n) {
          return Yn(this, n);
        }
      }
      class xs {
        constructor(n) {
          this.decoders = n;
        }
        or(n) {
          return Yn(this, n);
        }
        decode(n) {
          const o = this.decoders[n[0]];
          if (o) return o.decode(n);
          throw RangeError(
            `Unable to decode multibase string ${JSON.stringify(
              n
            )}, only inputs prefixed with ${Object.keys(
              this.decoders
            )} are supported`
          );
        }
      }
      const Yn = (y, n) =>
        new xs({
          ...(y.decoders || { [y.prefix]: y }),
          ...(n.decoders || { [n.prefix]: n }),
        });
      class Ln {
        constructor(n, t, o, a) {
          (this.name = n),
            (this.prefix = t),
            (this.baseEncode = o),
            (this.baseDecode = a),
            (this.encoder = new $o(n, t, o)),
            (this.decoder = new Ho(n, t, a));
        }
        encode(n) {
          return this.encoder.encode(n);
        }
        decode(n) {
          return this.decoder.decode(n);
        }
      }
      const di = ({ name: y, prefix: n, encode: t, decode: o }) =>
          new Ln(y, n, t, o),
        Xn = ({ prefix: y, name: n, alphabet: t }) => {
          const { encode: o, decode: a } = qo(t, n);
          return di({ prefix: y, name: n, encode: o, decode: (u) => bs(a(u)) });
        },
        Xt = ({ name: y, prefix: n, bitsPerChar: t, alphabet: o }) =>
          di({
            prefix: n,
            name: y,
            encode: (a) =>
              ((y, n, t) => {
                const o = "=" === n[n.length - 1],
                  a = (1 << t) - 1;
                let u = "",
                  f = 0,
                  I = 0;
                for (let N = 0; N < y.length; ++N)
                  for (I = (I << 8) | y[N], f += 8; f > t; )
                    (f -= t), (u += n[a & (I >> f)]);
                if ((f && (u += n[a & (I << (t - f))]), o))
                  for (; (u.length * t) & 7; ) u += "=";
                return u;
              })(a, o, t),
            decode: (a) =>
              ((y, n, t, o) => {
                const a = {};
                for (let G = 0; G < n.length; ++G) a[n[G]] = G;
                let u = y.length;
                for (; "=" === y[u - 1]; ) --u;
                const f = new Uint8Array(((u * t) / 8) | 0);
                let I = 0,
                  N = 0,
                  z = 0;
                for (let G = 0; G < u; ++G) {
                  const ce = a[y[G]];
                  if (void 0 === ce)
                    throw new SyntaxError(`Non-${o} character`);
                  (N = (N << t) | ce),
                    (I += t),
                    I >= 8 && ((I -= 8), (f[z++] = 255 & (N >> I)));
                }
                if (I >= t || 255 & (N << (8 - I)))
                  throw new SyntaxError("Unexpected end of data");
                return f;
              })(a, o, t, y),
          }),
        Vo = di({
          prefix: "\0",
          name: "identity",
          encode: (y) => ((y) => new TextDecoder().decode(y))(y),
          decode: (y) => ((y) => new TextEncoder().encode(y))(y),
        });
      var ko = Object.freeze({ __proto__: null, identity: Vo });
      const Ko = Xt({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var xn = Object.freeze({ __proto__: null, base2: Ko });
      const Es = Xt({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var Go = Object.freeze({ __proto__: null, base8: Es });
      const pi = Xn({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var Wo = Object.freeze({ __proto__: null, base10: pi });
      const Mi = Xt({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Jo = Xt({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Is = Object.freeze({ __proto__: null, base16: Mi, base16upper: Jo });
      const Ss = Xt({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Ps = Xt({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        ei = Xt({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Os = Xt({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Qo = Xt({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Yo = Xt({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Xo = Xt({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        O = Xt({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        F = Xt({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var re = Object.freeze({
        __proto__: null,
        base32: Ss,
        base32upper: Ps,
        base32pad: ei,
        base32padupper: Os,
        base32hex: Qo,
        base32hexupper: Yo,
        base32hexpad: Xo,
        base32hexpadupper: O,
        base32z: F,
      });
      const pe = Xn({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        at = Xn({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var Ne = Object.freeze({ __proto__: null, base36: pe, base36upper: at });
      const It = Xn({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        Wt = Xn({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var er = Object.freeze({
        __proto__: null,
        base58btc: It,
        base58flickr: Wt,
      });
      const wt = Xt({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        wr = Xt({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        Fr = Xt({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        or = Xt({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var Pr = Object.freeze({
        __proto__: null,
        base64: wt,
        base64pad: wr,
        base64url: Fr,
        base64urlpad: or,
      });
      const xr = Array.from(
          "\u{1f680}\u{1fa90}\u2604\u{1f6f0}\u{1f30c}\u{1f311}\u{1f312}\u{1f313}\u{1f314}\u{1f315}\u{1f316}\u{1f317}\u{1f318}\u{1f30d}\u{1f30f}\u{1f30e}\u{1f409}\u2600\u{1f4bb}\u{1f5a5}\u{1f4be}\u{1f4bf}\u{1f602}\u2764\u{1f60d}\u{1f923}\u{1f60a}\u{1f64f}\u{1f495}\u{1f62d}\u{1f618}\u{1f44d}\u{1f605}\u{1f44f}\u{1f601}\u{1f525}\u{1f970}\u{1f494}\u{1f496}\u{1f499}\u{1f622}\u{1f914}\u{1f606}\u{1f644}\u{1f4aa}\u{1f609}\u263a\u{1f44c}\u{1f917}\u{1f49c}\u{1f614}\u{1f60e}\u{1f607}\u{1f339}\u{1f926}\u{1f389}\u{1f49e}\u270c\u2728\u{1f937}\u{1f631}\u{1f60c}\u{1f338}\u{1f64c}\u{1f60b}\u{1f497}\u{1f49a}\u{1f60f}\u{1f49b}\u{1f642}\u{1f493}\u{1f929}\u{1f604}\u{1f600}\u{1f5a4}\u{1f603}\u{1f4af}\u{1f648}\u{1f447}\u{1f3b6}\u{1f612}\u{1f92d}\u2763\u{1f61c}\u{1f48b}\u{1f440}\u{1f62a}\u{1f611}\u{1f4a5}\u{1f64b}\u{1f61e}\u{1f629}\u{1f621}\u{1f92a}\u{1f44a}\u{1f973}\u{1f625}\u{1f924}\u{1f449}\u{1f483}\u{1f633}\u270b\u{1f61a}\u{1f61d}\u{1f634}\u{1f31f}\u{1f62c}\u{1f643}\u{1f340}\u{1f337}\u{1f63b}\u{1f613}\u2b50\u2705\u{1f97a}\u{1f308}\u{1f608}\u{1f918}\u{1f4a6}\u2714\u{1f623}\u{1f3c3}\u{1f490}\u2639\u{1f38a}\u{1f498}\u{1f620}\u261d\u{1f615}\u{1f33a}\u{1f382}\u{1f33b}\u{1f610}\u{1f595}\u{1f49d}\u{1f64a}\u{1f639}\u{1f5e3}\u{1f4ab}\u{1f480}\u{1f451}\u{1f3b5}\u{1f91e}\u{1f61b}\u{1f534}\u{1f624}\u{1f33c}\u{1f62b}\u26bd\u{1f919}\u2615\u{1f3c6}\u{1f92b}\u{1f448}\u{1f62e}\u{1f646}\u{1f37b}\u{1f343}\u{1f436}\u{1f481}\u{1f632}\u{1f33f}\u{1f9e1}\u{1f381}\u26a1\u{1f31e}\u{1f388}\u274c\u270a\u{1f44b}\u{1f630}\u{1f928}\u{1f636}\u{1f91d}\u{1f6b6}\u{1f4b0}\u{1f353}\u{1f4a2}\u{1f91f}\u{1f641}\u{1f6a8}\u{1f4a8}\u{1f92c}\u2708\u{1f380}\u{1f37a}\u{1f913}\u{1f619}\u{1f49f}\u{1f331}\u{1f616}\u{1f476}\u{1f974}\u25b6\u27a1\u2753\u{1f48e}\u{1f4b8}\u2b07\u{1f628}\u{1f31a}\u{1f98b}\u{1f637}\u{1f57a}\u26a0\u{1f645}\u{1f61f}\u{1f635}\u{1f44e}\u{1f932}\u{1f920}\u{1f927}\u{1f4cc}\u{1f535}\u{1f485}\u{1f9d0}\u{1f43e}\u{1f352}\u{1f617}\u{1f911}\u{1f30a}\u{1f92f}\u{1f437}\u260e\u{1f4a7}\u{1f62f}\u{1f486}\u{1f446}\u{1f3a4}\u{1f647}\u{1f351}\u2744\u{1f334}\u{1f4a3}\u{1f438}\u{1f48c}\u{1f4cd}\u{1f940}\u{1f922}\u{1f445}\u{1f4a1}\u{1f4a9}\u{1f450}\u{1f4f8}\u{1f47b}\u{1f910}\u{1f92e}\u{1f3bc}\u{1f975}\u{1f6a9}\u{1f34e}\u{1f34a}\u{1f47c}\u{1f48d}\u{1f4e3}\u{1f942}"
        ),
        gn = xr.reduce((y, n, t) => ((y[t] = n), y), []),
        tn = xr.reduce((y, n, t) => ((y[n.codePointAt(0)] = t), y), []),
        gi = di({
          prefix: "\u{1f680}",
          name: "base256emoji",
          encode: function En(y) {
            return y.reduce((n, t) => n + gn[t], "");
          },
          decode: function Rs(y) {
            const n = [];
            for (const t of y) {
              const o = tn[t.codePointAt(0)];
              if (void 0 === o)
                throw new Error(`Non-base256emoji character: ${t}`);
              n.push(o);
            }
            return new Uint8Array(n);
          },
        });
      var yi = Object.freeze({ __proto__: null, base256emoji: gi }),
        $c = 128,
        Ih = -128,
        Sh = Math.pow(2, 31),
        Oh = 128,
        Bc = 127,
        Rh = Math.pow(2, 7),
        Ah = Math.pow(2, 14),
        Th = Math.pow(2, 21),
        Ch = Math.pow(2, 28),
        Dh = Math.pow(2, 35),
        Nh = Math.pow(2, 42),
        Fh = Math.pow(2, 49),
        jh = Math.pow(2, 56),
        Lh = Math.pow(2, 63),
        Zh = {
          encode: function Hc(y, n, t) {
            n = n || [];
            for (var o = (t = t || 0); y >= Sh; )
              (n[t++] = (255 & y) | $c), (y /= 128);
            for (; y & Ih; ) (n[t++] = (255 & y) | $c), (y >>>= 7);
            return (n[t] = 0 | y), (Hc.bytes = t - o + 1), n;
          },
          decode: function ea(y, o) {
            var f,
              t = 0,
              a = 0,
              u = (o = o || 0),
              I = y.length;
            do {
              if (u >= I)
                throw (
                  ((ea.bytes = 0), new RangeError("Could not decode varint"))
                );
              (f = y[u++]),
                (t += a < 28 ? (f & Bc) << a : (f & Bc) * Math.pow(2, a)),
                (a += 7);
            } while (f >= Oh);
            return (ea.bytes = u - o), t;
          },
          encodingLength: function (y) {
            return y < Rh
              ? 1
              : y < Ah
              ? 2
              : y < Th
              ? 3
              : y < Ch
              ? 4
              : y < Dh
              ? 5
              : y < Nh
              ? 6
              : y < Fh
              ? 7
              : y < jh
              ? 8
              : y < Lh
              ? 9
              : 10;
          },
        },
        Vc = Zh;
      const kc = (y, n, t = 0) => (Vc.encode(y, n, t), n),
        Kc = (y) => Vc.encodingLength(y),
        ta = (y, n) => {
          const t = n.byteLength,
            o = Kc(y),
            a = o + Kc(t),
            u = new Uint8Array(a + t);
          return kc(y, u, 0), kc(t, u, o), u.set(n, a), new Uh(y, t, n, u);
        };
      class Uh {
        constructor(n, t, o, a) {
          (this.code = n), (this.size = t), (this.digest = o), (this.bytes = a);
        }
      }
      const Gc = ({ name: y, code: n, encode: t }) => new qh(y, n, t);
      class qh {
        constructor(n, t, o) {
          (this.name = n), (this.code = t), (this.encode = o);
        }
        digest(n) {
          if (n instanceof Uint8Array) {
            const t = this.encode(n);
            return t instanceof Uint8Array
              ? ta(this.code, t)
              : t.then((o) => ta(this.code, o));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const Wc = (y) =>
          (function () {
            var n = (0, m.Z)(function* (t) {
              return new Uint8Array(yield crypto.subtle.digest(y, t));
            });
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
        zh = Gc({ name: "sha2-256", code: 18, encode: Wc("SHA-256") }),
        $h = Gc({ name: "sha2-512", code: 19, encode: Wc("SHA-512") });
      Object.freeze({ __proto__: null, sha256: zh, sha512: $h });
      const Qc = bs;
      Object.freeze({
        __proto__: null,
        identity: {
          code: 0,
          name: "identity",
          encode: Qc,
          digest: (y) => ta(0, Qc(y)),
        },
      }),
        new TextEncoder(),
        new TextDecoder();
      const Yc = {
        ...ko,
        ...xn,
        ...Go,
        ...Wo,
        ...Is,
        ...re,
        ...Ne,
        ...er,
        ...Pr,
        ...yi,
      };
      function Xc(y) {
        return null != globalThis.Buffer
          ? new Uint8Array(y.buffer, y.byteOffset, y.byteLength)
          : y;
      }
      function eu(y, n, t, o) {
        return {
          name: y,
          prefix: n,
          encoder: { name: y, prefix: n, encode: t },
          decoder: { decode: o },
        };
      }
      const tu = eu(
          "utf8",
          "u",
          (y) => "u" + new TextDecoder("utf8").decode(y),
          (y) => new TextEncoder().encode(y.substring(1))
        ),
        ra = eu(
          "ascii",
          "a",
          (y) => {
            let n = "a";
            for (let t = 0; t < y.length; t++) n += String.fromCharCode(y[t]);
            return n;
          },
          (y) => {
            const n = (function kh(y = 0) {
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? Xc(globalThis.Buffer.allocUnsafe(y))
                : new Uint8Array(y);
            })((y = y.substring(1)).length);
            for (let t = 0; t < y.length; t++) n[t] = y.charCodeAt(t);
            return n;
          }
        ),
        Kh = {
          utf8: tu,
          "utf-8": tu,
          hex: Yc.base16,
          latin1: ra,
          ascii: ra,
          binary: ra,
          ...Yc,
        },
        Mn = "wc@2:core:",
        Qh = { database: ":memory:" },
        nu = "client_ed25519_seed",
        Xh = C.ONE_DAY,
        id = C.SIX_HOURS,
        su = "wss://relay.walletconnect.com",
        ou = "wss://relay.walletconnect.org",
        ud = C.ONE_SECOND,
        yn_created = "subscription_created",
        yn_deleted = "subscription_deleted",
        yd = 1e3 * C.FIVE_SECONDS,
        Zi = {
          wc_pairingDelete: {
            req: { ttl: C.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: C.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: C.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: C.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: C.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: C.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        $r_expired = "expirer_expired",
        ia = "verify-api",
        As = "https://verify.walletconnect.com",
        au = "https://verify.walletconnect.org";
      class Ed {
        constructor(n, t) {
          var o = this;
          (this.core = n),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.init = (0, m.Z)(function* () {
              if (!o.initialized) {
                const a = yield o.getKeyChain();
                typeof a < "u" && (o.keychain = a), (o.initialized = !0);
              }
            })),
            (this.has = (a) => (this.isInitialized(), this.keychain.has(a))),
            (this.set = (function () {
              var a = (0, m.Z)(function* (u, f) {
                o.isInitialized(), o.keychain.set(u, f), yield o.persist();
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.get = (a) => {
              this.isInitialized();
              const u = this.keychain.get(a);
              if (typeof u > "u") {
                const { message: f } = (0, S.Z7)(
                  "NO_MATCHING_KEY",
                  `${this.name}: ${a}`
                );
                throw new Error(f);
              }
              return u;
            }),
            (this.del = (function () {
              var a = (0, m.Z)(function* (u) {
                o.isInitialized(), o.keychain.delete(u), yield o.persist();
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.core = n),
            (this.logger = (0, fe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        setKeyChain(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.core.storage.setItem(t.storageKey, (0, S.KC)(n));
          })();
        }
        getKeyChain() {
          var n = this;
          return (0, m.Z)(function* () {
            const t = yield n.core.storage.getItem(n.storageKey);
            return typeof t < "u" ? (0, S.IP)(t) : void 0;
          })();
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setKeyChain(n.keychain);
          })();
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class Id {
        constructor(n, t, o) {
          var a = this;
          (this.core = n),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = (0, m.Z)(function* () {
              a.initialized || (yield a.keychain.init(), (a.initialized = !0));
            })),
            (this.hasKeys = (u) => (
              this.isInitialized(), this.keychain.has(u)
            )),
            (this.getClientId = (0, m.Z)(function* () {
              return (
                a.isInitialized(), ot(Pt(yield a.getClientSeed()).publicKey)
              );
            })),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const u = (0, S.Au)();
              return this.setPrivateKey(u.publicKey, u.privateKey);
            }),
            (this.signJWT = (function () {
              var u = (0, m.Z)(function* (f) {
                a.isInitialized();
                const N = Pt(yield a.getClientSeed()),
                  z = (0, S.jd)();
                return yield (function Ot(y, n, t, o) {
                  return tt.apply(this, arguments);
                })(z, f, Xh, N);
              });
              return function (f) {
                return u.apply(this, arguments);
              };
            })()),
            (this.generateSharedKey = (u, f, I) => {
              this.isInitialized();
              const N = this.getPrivateKey(u),
                z = (0, S.m$)(N, f);
              return this.setSymKey(z, I);
            }),
            (this.setSymKey = (function () {
              var u = (0, m.Z)(function* (f, I) {
                a.isInitialized();
                const N = I || (0, S.Ym)(f);
                return yield a.keychain.set(N, f), N;
              });
              return function (f, I) {
                return u.apply(this, arguments);
              };
            })()),
            (this.deleteKeyPair = (function () {
              var u = (0, m.Z)(function* (f) {
                a.isInitialized(), yield a.keychain.del(f);
              });
              return function (f) {
                return u.apply(this, arguments);
              };
            })()),
            (this.deleteSymKey = (function () {
              var u = (0, m.Z)(function* (f) {
                a.isInitialized(), yield a.keychain.del(f);
              });
              return function (f) {
                return u.apply(this, arguments);
              };
            })()),
            (this.encode = (function () {
              var u = (0, m.Z)(function* (f, I, N) {
                a.isInitialized();
                const z = (0, S.EN)(N),
                  G = v(I);
                if ((0, S.Q8)(z)) {
                  const _e = z.senderPublicKey,
                    ze = z.receiverPublicKey;
                  f = yield a.generateSharedKey(_e, ze);
                }
                const ce = a.getSymKey(f),
                  { type: xe, senderPublicKey: Te } = z;
                return (0,
                S.HI)({ type: xe, symKey: ce, message: G, senderPublicKey: Te });
              });
              return function (f, I, N) {
                return u.apply(this, arguments);
              };
            })()),
            (this.decode = (function () {
              var u = (0, m.Z)(function* (f, I, N) {
                a.isInitialized();
                const z = (0, S.Ll)(I, N);
                if ((0, S.Q8)(z)) {
                  const G = z.receiverPublicKey,
                    ce = z.senderPublicKey;
                  f = yield a.generateSharedKey(G, ce);
                }
                try {
                  const G = a.getSymKey(f);
                  return P((0, S.pe)({ symKey: G, encoded: I }));
                } catch (G) {
                  a.logger.error(
                    `Failed to decode message from topic: '${f}', clientId: '${yield a.getClientId()}'`
                  ),
                    a.logger.error(G);
                }
              });
              return function (f, I, N) {
                return u.apply(this, arguments);
              };
            })()),
            (this.getPayloadType = (u) => {
              const f = (0, S.vB)(u);
              return (0, S.WG)(f.type);
            }),
            (this.getPayloadSenderPublicKey = (u) => {
              const f = (0, S.vB)(u);
              return f.senderPublicKey
                ? (0, Bt.BB)(f.senderPublicKey, S.AW)
                : void 0;
            }),
            (this.core = n),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.keychain = o || new Ed(this.core, this.logger));
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        setPrivateKey(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            return yield o.keychain.set(n, t), n;
          })();
        }
        getPrivateKey(n) {
          return this.keychain.get(n);
        }
        getClientSeed() {
          var n = this;
          return (0, m.Z)(function* () {
            let t = "";
            try {
              t = n.keychain.get(nu);
            } catch {
              (t = (0, S.jd)()), yield n.keychain.set(nu, t);
            }
            return (function Gh(y, n = "utf8") {
              const t = Kh[n];
              if (!t) throw new Error(`Unsupported encoding "${n}"`);
              return ("utf8" !== n && "utf-8" !== n) ||
                null == globalThis.Buffer ||
                null == globalThis.Buffer.from
                ? t.decoder.decode(`${t.prefix}${y}`)
                : Xc(globalThis.Buffer.from(y, "utf-8"));
            })(t, "base16");
          })();
        }
        getSymKey(n) {
          return this.keychain.get(n);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class Sd extends ye {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.logger = n),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.init = (0, m.Z)(function* () {
              if (!o.initialized) {
                o.logger.trace("Initialized");
                try {
                  const a = yield o.getRelayerMessages();
                  typeof a < "u" && (o.messages = a),
                    o.logger.debug(
                      `Successfully Restored records for ${o.name}`
                    ),
                    o.logger.trace({
                      type: "method",
                      method: "restore",
                      size: o.messages.size,
                    });
                } catch (a) {
                  o.logger.debug(`Failed to Restore records for ${o.name}`),
                    o.logger.error(a);
                } finally {
                  o.initialized = !0;
                }
              }
            })),
            (this.set = (function () {
              var a = (0, m.Z)(function* (u, f) {
                o.isInitialized();
                const I = (0, S.rj)(f);
                let N = o.messages.get(u);
                return (
                  typeof N > "u" && (N = {}),
                  typeof N[I] < "u" ||
                    ((N[I] = f), o.messages.set(u, N), yield o.persist()),
                  I
                );
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.get = (a) => {
              this.isInitialized();
              let u = this.messages.get(a);
              return typeof u > "u" && (u = {}), u;
            }),
            (this.has = (a, u) => (
              this.isInitialized(), typeof this.get(a)[(0, S.rj)(u)] < "u"
            )),
            (this.del = (function () {
              var a = (0, m.Z)(function* (u) {
                o.isInitialized(), o.messages.delete(u), yield o.persist();
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.logger = (0, fe.generateChildLogger)(n, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        setRelayerMessages(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.core.storage.setItem(t.storageKey, (0, S.KC)(n));
          })();
        }
        getRelayerMessages() {
          var n = this;
          return (0, m.Z)(function* () {
            const t = yield n.core.storage.getItem(n.storageKey);
            return typeof t < "u" ? (0, S.IP)(t) : void 0;
          })();
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setRelayerMessages(n.messages);
          })();
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class Pd extends Ee {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.relayer = n),
            (this.logger = t),
            (this.events = new ie.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, C.toMiliseconds)(C.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = (function () {
              var a = (0, m.Z)(function* (u, f, I) {
                var N;
                o.logger.debug("Publishing Payload"),
                  o.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: u, message: f, opts: I },
                  });
                try {
                  const z = I?.ttl || id,
                    G = (0, S._H)(I),
                    ce = I?.prompt || !1,
                    xe = I?.tag || 0,
                    Te = I?.id || jt().toString(),
                    _e = {
                      topic: u,
                      message: f,
                      opts: { ttl: z, relay: G, prompt: ce, tag: xe, id: Te },
                    },
                    ze = setTimeout(
                      () => o.queue.set(Te, _e),
                      o.publishTimeout
                    );
                  try {
                    yield yield (0, S.hF)(
                      o.rpcPublish(u, f, z, G, ce, xe, Te),
                      o.publishTimeout,
                      "Failed to publish payload, please try again."
                    ),
                      o.removeRequestFromQueue(Te),
                      o.relayer.events.emit("relayer_publish", _e);
                  } catch (ke) {
                    if (
                      (o.logger.debug("Publishing Payload stalled"),
                      (o.needsTransportRestart = !0),
                      null != (N = I?.internal) && N.throwOnFailedPublish)
                    )
                      throw (o.removeRequestFromQueue(Te), ke);
                    return;
                  } finally {
                    clearTimeout(ze);
                  }
                  o.logger.debug("Successfully Published Payload"),
                    o.logger.trace({
                      type: "method",
                      method: "publish",
                      params: { topic: u, message: f, opts: I },
                    });
                } catch (z) {
                  throw (
                    (o.logger.debug("Failed to Publish Payload"),
                    o.logger.error(z),
                    z)
                  );
                }
              });
              return function (u, f, I) {
                return a.apply(this, arguments);
              };
            })()),
            (this.on = (a, u) => {
              this.events.on(a, u);
            }),
            (this.once = (a, u) => {
              this.events.once(a, u);
            }),
            (this.off = (a, u) => {
              this.events.off(a, u);
            }),
            (this.removeListener = (a, u) => {
              this.events.removeListener(a, u);
            }),
            (this.relayer = n),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        rpcPublish(n, t, o, a, u, f, I) {
          var N, z, G, ce;
          const xe = {
            method: (0, S.cO)(a.protocol).publish,
            params: { topic: n, message: t, ttl: o, prompt: u, tag: f },
            id: I,
          };
          return (
            (0, S.o8)(null == (N = xe.params) ? void 0 : N.prompt) &&
              (null == (z = xe.params) || delete z.prompt),
            (0, S.o8)(null == (G = xe.params) ? void 0 : G.tag) &&
              (null == (ce = xe.params) || delete ce.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: xe,
            }),
            this.relayer.request(xe)
          );
        }
        removeRequestFromQueue(n) {
          this.queue.delete(n);
        }
        checkQueue() {
          var n = this;
          this.queue.forEach(
            (function () {
              var t = (0, m.Z)(function* (o) {
                const { topic: a, message: u, opts: f } = o;
                yield n.publish(a, u, f);
              });
              return function (o) {
                return t.apply(this, arguments);
              };
            })()
          );
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(be.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit("relayer_connection_stalled")
              );
            this.checkQueue();
          }),
            this.relayer.on("relayer_message_ack", (n) => {
              this.removeRequestFromQueue(n.id.toString());
            });
        }
      }
      class Od {
        constructor() {
          (this.map = new Map()),
            (this.set = (n, t) => {
              const o = this.get(n);
              this.exists(n, t) || this.map.set(n, [...o, t]);
            }),
            (this.get = (n) => this.map.get(n) || []),
            (this.exists = (n, t) => this.get(n).includes(t)),
            (this.delete = (n, t) => {
              if (typeof t > "u") return void this.map.delete(n);
              if (!this.map.has(n)) return;
              const o = this.get(n);
              if (!this.exists(n, t)) return;
              const a = o.filter((u) => u !== t);
              a.length ? this.map.set(n, a) : this.map.delete(n);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var Rd = Object.defineProperty,
        Ad = Object.defineProperties,
        Td = Object.getOwnPropertyDescriptors,
        cu = Object.getOwnPropertySymbols,
        Cd = Object.prototype.hasOwnProperty,
        Dd = Object.prototype.propertyIsEnumerable,
        uu = (y, n, t) =>
          n in y
            ? Rd(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        qi = (y, n) => {
          for (var t in n || (n = {})) Cd.call(n, t) && uu(y, t, n[t]);
          if (cu) for (var t of cu(n)) Dd.call(n, t) && uu(y, t, n[t]);
          return y;
        },
        sa = (y, n) => Ad(y, Td(n));
      class Nd extends Ve {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.relayer = n),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new Od()),
            (this.events = new ie.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Mn),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = (0, m.Z)(function* () {
              o.initialized ||
                (o.logger.trace("Initialized"),
                o.registerEventListeners(),
                (o.clientId = yield o.relayer.core.crypto.getClientId()));
            })),
            (this.subscribe = (function () {
              var a = (0, m.Z)(function* (u, f) {
                yield o.restartToComplete(),
                  o.isInitialized(),
                  o.logger.debug("Subscribing Topic"),
                  o.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: u, opts: f },
                  });
                try {
                  const I = (0, S._H)(f),
                    N = { topic: u, relay: I };
                  o.pending.set(u, N);
                  const z = yield o.rpcSubscribe(u, I);
                  return (
                    o.onSubscribe(z, N),
                    o.logger.debug("Successfully Subscribed Topic"),
                    o.logger.trace({
                      type: "method",
                      method: "subscribe",
                      params: { topic: u, opts: f },
                    }),
                    z
                  );
                } catch (I) {
                  throw (
                    (o.logger.debug("Failed to Subscribe Topic"),
                    o.logger.error(I),
                    I)
                  );
                }
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.unsubscribe = (function () {
              var a = (0, m.Z)(function* (u, f) {
                yield o.restartToComplete(),
                  o.isInitialized(),
                  typeof f?.id < "u"
                    ? yield o.unsubscribeById(u, f.id, f)
                    : yield o.unsubscribeByTopic(u, f);
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.isSubscribed = (function () {
              var a = (0, m.Z)(function* (u) {
                return (
                  !!o.topics.includes(u) ||
                  (yield new Promise((f, I) => {
                    const N = new C.Watch();
                    N.start(o.pendingSubscriptionWatchLabel);
                    const z = setInterval(() => {
                      !o.pending.has(u) &&
                        o.topics.includes(u) &&
                        (clearInterval(z),
                        N.stop(o.pendingSubscriptionWatchLabel),
                        f(!0)),
                        N.elapsed(o.pendingSubscriptionWatchLabel) >= yd &&
                          (clearInterval(z),
                          N.stop(o.pendingSubscriptionWatchLabel),
                          I(new Error("Subscription resolution timeout")));
                    }, o.pollingInterval);
                  }).catch(() => !1))
                );
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.on = (a, u) => {
              this.events.on(a, u);
            }),
            (this.once = (a, u) => {
              this.events.once(a, u);
            }),
            (this.off = (a, u) => {
              this.events.off(a, u);
            }),
            (this.removeListener = (a, u) => {
              this.events.removeListener(a, u);
            }),
            (this.restart = (0, m.Z)(function* () {
              (o.restartInProgress = !0),
                yield o.restore(),
                yield o.reset(),
                (o.restartInProgress = !1);
            })),
            (this.relayer = n),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(n, t) {
          let o = !1;
          try {
            o = this.getSubscription(n).topic === t;
          } catch {}
          return o;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        unsubscribeByTopic(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            const a = o.topicMap.get(n);
            yield Promise.all(
              a.map(
                (function () {
                  var u = (0, m.Z)(function* (f) {
                    return yield o.unsubscribeById(n, f, t);
                  });
                  return function (f) {
                    return u.apply(this, arguments);
                  };
                })()
              )
            );
          })();
        }
        unsubscribeById(n, t, o) {
          var a = this;
          return (0, m.Z)(function* () {
            a.logger.debug("Unsubscribing Topic"),
              a.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: n, id: t, opts: o },
              });
            try {
              const u = (0, S._H)(o);
              yield a.rpcUnsubscribe(n, t, u);
              const f = (0, S.D6)("USER_DISCONNECTED", `${a.name}, ${n}`);
              yield a.onUnsubscribe(n, t, f),
                a.logger.debug("Successfully Unsubscribed Topic"),
                a.logger.trace({
                  type: "method",
                  method: "unsubscribe",
                  params: { topic: n, id: t, opts: o },
                });
            } catch (u) {
              throw (
                (a.logger.debug("Failed to Unsubscribe Topic"),
                a.logger.error(u),
                u)
              );
            }
          })();
        }
        rpcSubscribe(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            const a = {
              method: (0, S.cO)(t.protocol).subscribe,
              params: { topic: n },
            };
            o.logger.debug("Outgoing Relay Payload"),
              o.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: a,
              });
            try {
              yield yield (0, S.hF)(o.relayer.request(a), o.subscribeTimeout);
            } catch {
              o.logger.debug("Outgoing Relay Subscribe Payload stalled"),
                o.relayer.events.emit("relayer_connection_stalled");
            }
            return (0, S.rj)(n + o.clientId);
          })();
        }
        rpcBatchSubscribe(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!n.length) return;
            const a = {
              method: (0, S.cO)(n[0].relay.protocol).batchSubscribe,
              params: { topics: n.map((u) => u.topic) },
            };
            t.logger.debug("Outgoing Relay Payload"),
              t.logger.trace({
                type: "payload",
                direction: "outgoing",
                request: a,
              });
            try {
              return yield yield (0,
              S.hF)(t.relayer.request(a), t.subscribeTimeout);
            } catch {
              t.logger.debug("Outgoing Relay Payload stalled"),
                t.relayer.events.emit("relayer_connection_stalled");
            }
          })();
        }
        rpcUnsubscribe(n, t, o) {
          const a = {
            method: (0, S.cO)(o.protocol).unsubscribe,
            params: { topic: n, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: a,
            }),
            this.relayer.request(a)
          );
        }
        onSubscribe(n, t) {
          this.setSubscription(n, sa(qi({}, t), { id: n })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(n) {
          n.length &&
            n.forEach((t) => {
              this.setSubscription(t.id, qi({}, t)),
                this.pending.delete(t.topic);
            });
        }
        onUnsubscribe(n, t, o) {
          var a = this;
          return (0, m.Z)(function* () {
            a.events.removeAllListeners(t),
              a.hasSubscription(t, n) && a.deleteSubscription(t, o),
              yield a.relayer.messages.del(n);
          })();
        }
        setRelayerSubscriptions(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.relayer.core.storage.setItem(t.storageKey, n);
          })();
        }
        getRelayerSubscriptions() {
          var n = this;
          return (0, m.Z)(function* () {
            return yield n.relayer.core.storage.getItem(n.storageKey);
          })();
        }
        setSubscription(n, t) {
          this.subscriptions.has(n) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: n,
              subscription: t,
            }),
            this.addSubscription(n, t));
        }
        addSubscription(n, t) {
          this.subscriptions.set(n, qi({}, t)),
            this.topicMap.set(t.topic, n),
            this.events.emit(yn_created, t);
        }
        getSubscription(n) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: n,
            });
          const t = this.subscriptions.get(n);
          if (!t) {
            const { message: o } = (0, S.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${n}`
            );
            throw new Error(o);
          }
          return t;
        }
        deleteSubscription(n, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: n,
              reason: t,
            });
          const o = this.getSubscription(n);
          this.subscriptions.delete(n),
            this.topicMap.delete(o.topic, n),
            this.events.emit(yn_deleted, sa(qi({}, o), { reason: t }));
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setRelayerSubscriptions(n.values),
              n.events.emit("subscription_sync");
          })();
        }
        reset() {
          var n = this;
          return (0, m.Z)(function* () {
            if (n.cached.length) {
              const t = Math.ceil(
                n.cached.length / n.batchSubscribeTopicsLimit
              );
              for (let o = 0; o < t; o++) {
                const a = n.cached.splice(0, n.batchSubscribeTopicsLimit);
                yield n.batchSubscribe(a);
              }
            }
            n.events.emit("subscription_resubscribed");
          })();
        }
        restore() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              const t = yield n.getRelayerSubscriptions();
              if (typeof t > "u" || !t.length) return;
              if (n.subscriptions.size) {
                const { message: o } = (0, S.Z7)(
                  "RESTORE_WILL_OVERRIDE",
                  n.name
                );
                throw (
                  (n.logger.error(o),
                  n.logger.error(`${n.name}: ${JSON.stringify(n.values)}`),
                  new Error(o))
                );
              }
              (n.cached = t),
                n.logger.debug(
                  `Successfully Restored subscriptions for ${n.name}`
                ),
                n.logger.trace({
                  type: "method",
                  method: "restore",
                  subscriptions: n.values,
                });
            } catch (t) {
              n.logger.debug(`Failed to Restore subscriptions for ${n.name}`),
                n.logger.error(t);
            }
          })();
        }
        batchSubscribe(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!n.length) return;
            const o = yield t.rpcBatchSubscribe(n);
            (0, S.qt)(o) &&
              t.onBatchSubscribe(o.map((a, u) => sa(qi({}, n[u]), { id: a })));
          })();
        }
        onConnect() {
          var n = this;
          return (0, m.Z)(function* () {
            n.restartInProgress || (yield n.restart(), n.onEnable());
          })();
        }
        onDisconnect() {
          this.onDisable();
        }
        checkPending() {
          var n = this;
          return (0, m.Z)(function* () {
            if (!n.initialized || n.relayer.transportExplicitlyClosed) return;
            const t = [];
            n.pending.forEach((o) => {
              t.push(o);
            }),
              yield n.batchSubscribe(t);
          })();
        }
        registerEventListeners() {
          var n = this;
          this.relayer.core.heartbeat.on(
            be.HEARTBEAT_EVENTS.pulse,
            (0, m.Z)(function* () {
              yield n.checkPending();
            })
          ),
            this.relayer.on(
              "relayer_connect",
              (0, m.Z)(function* () {
                yield n.onConnect();
              })
            ),
            this.relayer.on("relayer_disconnect", () => {
              this.onDisconnect();
            }),
            this.events.on(
              yn_created,
              (function () {
                var t = (0, m.Z)(function* (o) {
                  const a = yn_created;
                  n.logger.info(`Emitting ${a}`),
                    n.logger.debug({ type: "event", event: a, data: o }),
                    yield n.persist();
                });
                return function (o) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.events.on(
              yn_deleted,
              (function () {
                var t = (0, m.Z)(function* (o) {
                  const a = yn_deleted;
                  n.logger.info(`Emitting ${a}`),
                    n.logger.debug({ type: "event", event: a, data: o }),
                    yield n.persist();
                });
                return function (o) {
                  return t.apply(this, arguments);
                };
              })()
            );
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
        restartToComplete() {
          var n = this;
          return (0, m.Z)(function* () {
            n.restartInProgress &&
              (yield new Promise((t) => {
                const o = setInterval(() => {
                  n.restartInProgress || (clearInterval(o), t());
                }, n.pollingInterval);
              }));
          })();
        }
      }
      var Fd = Object.defineProperty,
        lu = Object.getOwnPropertySymbols,
        jd = Object.prototype.hasOwnProperty,
        Ld = Object.prototype.propertyIsEnumerable,
        fu = (y, n, t) =>
          n in y
            ? Fd(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t);
      class Zd extends le {
        constructor(n) {
          var t;
          super(n),
            (t = this),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new ie.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.request = (function () {
              var o = (0, m.Z)(function* (a) {
                t.logger.debug("Publishing Request Payload");
                try {
                  return (
                    yield t.toEstablishConnection(), yield t.provider.request(a)
                  );
                } catch (u) {
                  throw (
                    (t.logger.debug("Failed to Publish Request"),
                    t.logger.error(u),
                    u)
                  );
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onPayloadHandler = (o) => {
              this.onProviderPayload(o);
            }),
            (this.onConnectHandler = () => {
              this.events.emit("relayer_connect");
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (o) => {
              this.logger.error(o),
                this.events.emit("relayer_error", o),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on("payload", this.onPayloadHandler),
                this.provider.on("connect", this.onConnectHandler),
                this.provider.on("disconnect", this.onDisconnectHandler),
                this.provider.on("error", this.onProviderErrorHandler);
            }),
            (this.core = n.core),
            (this.logger =
              typeof n.logger < "u" && "string" != typeof n.logger
                ? (0, fe.generateChildLogger)(n.logger, this.name)
                : (0, fe.pino)(
                    (0, fe.getDefaultLoggerOptions)({
                      level: n.logger || "error",
                    })
                  )),
            (this.messages = new Sd(this.logger, n.core)),
            (this.subscriber = new Nd(this, this.logger)),
            (this.publisher = new Pd(this, this.logger)),
            (this.relayUrl = n?.relayUrl || su),
            (this.projectId = n.projectId),
            (this.provider = {});
        }
        init() {
          var n = this;
          return (0, m.Z)(function* () {
            n.logger.trace("Initialized"),
              n.registerEventListeners(),
              yield n.createProvider(),
              yield Promise.all([n.messages.init(), n.subscriber.init()]);
            try {
              yield n.transportOpen();
            } catch {
              n.logger.warn(
                `Connection via ${n.relayUrl} failed, attempting to connect via failover domain ${ou}...`
              ),
                yield n.restartTransport(ou);
            }
            (n.initialized = !0),
              setTimeout(
                (0, m.Z)(function* () {
                  0 === n.subscriber.topics.length &&
                    (n.logger.info(
                      "No topics subscribed to after init, closing transport"
                    ),
                    yield n.transportClose(),
                    (n.transportExplicitlyClosed = !1));
                }),
                1e4
              );
          })();
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        publish(n, t, o) {
          var a = this;
          return (0, m.Z)(function* () {
            a.isInitialized(),
              yield a.publisher.publish(n, t, o),
              yield a.recordMessageEvent({
                topic: n,
                message: t,
                publishedAt: Date.now(),
              });
          })();
        }
        subscribe(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            var a;
            o.isInitialized();
            let u =
              (null == (a = o.subscriber.topicMap.get(n)) ? void 0 : a[0]) ||
              "";
            return (
              u ||
              (yield Promise.all([
                new Promise((f) => {
                  o.subscriber.once(yn_created, (I) => {
                    I.topic === n && f();
                  });
                }),
                new Promise(
                  (function () {
                    var f = (0, m.Z)(function* (I) {
                      (u = yield o.subscriber.subscribe(n, t)), I();
                    });
                    return function (I) {
                      return f.apply(this, arguments);
                    };
                  })()
                ),
              ]),
              u)
            );
          })();
        }
        unsubscribe(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            o.isInitialized(), yield o.subscriber.unsubscribe(n, t);
          })();
        }
        on(n, t) {
          this.events.on(n, t);
        }
        once(n, t) {
          this.events.once(n, t);
        }
        off(n, t) {
          this.events.off(n, t);
        }
        removeListener(n, t) {
          this.events.removeListener(n, t);
        }
        transportClose() {
          var n = this;
          return (0, m.Z)(function* () {
            (n.transportExplicitlyClosed = !0),
              n.hasExperiencedNetworkDisruption && n.connected
                ? yield (0, S.hF)(
                    n.provider.disconnect(),
                    1e3,
                    "provider.disconnect()"
                  ).catch(() => n.onProviderDisconnect())
                : n.connected && (yield n.provider.disconnect());
          })();
        }
        transportOpen(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (
              ((t.transportExplicitlyClosed = !1),
              yield t.confirmOnlineStateOrThrow(),
              !t.connectionAttemptInProgress)
            ) {
              n &&
                n !== t.relayUrl &&
                ((t.relayUrl = n),
                yield t.transportClose(),
                yield t.createProvider()),
                (t.connectionAttemptInProgress = !0);
              try {
                yield Promise.all([
                  new Promise((o) => {
                    if (!t.initialized) return o();
                    t.subscriber.once("subscription_resubscribed", () => {
                      o();
                    });
                  }),
                  new Promise(
                    (function () {
                      var o = (0, m.Z)(function* (a, u) {
                        try {
                          yield (0,
                          S.hF)(t.provider.connect(), 1e4, `Socket stalled when trying to connect to ${t.relayUrl}`);
                        } catch (f) {
                          return void u(f);
                        }
                        a();
                      });
                      return function (a, u) {
                        return o.apply(this, arguments);
                      };
                    })()
                  ),
                ]);
              } catch (o) {
                if ((t.logger.error(o), !t.isConnectionStalled(o.message)))
                  throw o;
                t.provider.events.emit("disconnect");
              } finally {
                (t.connectionAttemptInProgress = !1),
                  (t.hasExperiencedNetworkDisruption = !1);
              }
            }
          })();
        }
        restartTransport(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.confirmOnlineStateOrThrow(),
              !t.connectionAttemptInProgress &&
                ((t.relayUrl = n || t.relayUrl),
                yield t.transportClose(),
                yield t.createProvider(),
                yield t.transportOpen());
          })();
        }
        confirmOnlineStateOrThrow() {
          return (0, m.Z)(function* () {
            if (!(yield (0, S.Gg)()))
              throw new Error(
                "No internet connection detected. Please restart your network and try again."
              );
          })();
        }
        isConnectionStalled(n) {
          return this.staleConnectionErrors.some((t) => n.includes(t));
        }
        createProvider() {
          var n = this;
          return (0, m.Z)(function* () {
            n.provider.connection && n.unregisterProviderListeners();
            const t = yield n.core.crypto.signJWT(n.relayUrl);
            (n.provider = new Nr(
              new (class Mo {
                constructor(n) {
                  if (
                    ((this.url = n),
                    (this.events = new ie.EventEmitter()),
                    (this.registering = !1),
                    !gs(n))
                  )
                    throw new Error(
                      `Provided URL is not compatible with WebSocket connection: ${n}`
                    );
                  this.url = n;
                }
                get connected() {
                  return typeof this.socket < "u";
                }
                get connecting() {
                  return this.registering;
                }
                on(n, t) {
                  this.events.on(n, t);
                }
                once(n, t) {
                  this.events.once(n, t);
                }
                off(n, t) {
                  this.events.off(n, t);
                }
                removeListener(n, t) {
                  this.events.removeListener(n, t);
                }
                open(n = this.url) {
                  var t = this;
                  return (0, m.Z)(function* () {
                    yield t.register(n);
                  })();
                }
                close() {
                  var n = this;
                  return (0, m.Z)(function* () {
                    return new Promise((t, o) => {
                      typeof n.socket > "u"
                        ? o(new Error("Connection already closed"))
                        : ((n.socket.onclose = (a) => {
                            n.onClose(a), t();
                          }),
                          n.socket.close());
                    });
                  })();
                }
                send(n, t) {
                  var o = this;
                  return (0, m.Z)(function* () {
                    typeof o.socket > "u" && (o.socket = yield o.register());
                    try {
                      o.socket.send(v(n));
                    } catch (a) {
                      o.onError(n.id, a);
                    }
                  })();
                }
                register(n = this.url) {
                  if (!gs(n))
                    throw new Error(
                      `Provided URL is not compatible with WebSocket connection: ${n}`
                    );
                  if (this.registering) {
                    const t = this.events.getMaxListeners();
                    return (
                      (this.events.listenerCount("register_error") >= t ||
                        this.events.listenerCount("open") >= t) &&
                        this.events.setMaxListeners(t + 1),
                      new Promise((o, a) => {
                        this.events.once("register_error", (u) => {
                          this.resetMaxListeners(), a(u);
                        }),
                          this.events.once("open", () => {
                            if (
                              (this.resetMaxListeners(),
                              typeof this.socket > "u")
                            )
                              return a(
                                new Error(
                                  "WebSocket connection is missing or invalid"
                                )
                              );
                            o(this.socket);
                          });
                      })
                    );
                  }
                  return (
                    (this.url = n),
                    (this.registering = !0),
                    new Promise((t, o) => {
                      const a = (0, Vt.isReactNative)()
                          ? void 0
                          : {
                              rejectUnauthorized:
                                ((y = n),
                                !new RegExp("wss?://localhost(:d{2,5})?").test(
                                  y
                                )),
                            },
                        u = new Lo(n, [], a);
                      var y;
                      typeof WebSocket < "u" ||
                      (typeof global < "u" && typeof global.WebSocket < "u") ||
                      (typeof window < "u" && typeof window.WebSocket < "u") ||
                      (typeof self < "u" && typeof self.WebSocket < "u")
                        ? (u.onerror = (f) => {
                            o(this.emitError(f.error));
                          })
                        : u.on("error", (f) => {
                            o(this.emitError(f));
                          }),
                        (u.onopen = () => {
                          this.onOpen(u), t(u);
                        });
                    })
                  );
                }
                onOpen(n) {
                  (n.onmessage = (t) => this.onPayload(t)),
                    (n.onclose = (t) => this.onClose(t)),
                    (this.socket = n),
                    (this.registering = !1),
                    this.events.emit("open");
                }
                onClose(n) {
                  (this.socket = void 0),
                    (this.registering = !1),
                    this.events.emit("close", n);
                }
                onPayload(n) {
                  if (typeof n.data > "u") return;
                  const t = "string" == typeof n.data ? P(n.data) : n.data;
                  this.events.emit("payload", t);
                }
                onError(n, t) {
                  const o = this.parseError(t),
                    u = bt(n, o.message || o.toString());
                  this.events.emit("payload", u);
                }
                parseError(n, t = this.url) {
                  return vt(n, ys(t), "WS");
                }
                resetMaxListeners() {
                  this.events.getMaxListeners() > 10 &&
                    this.events.setMaxListeners(10);
                }
                emitError(n) {
                  const t = this.parseError(
                    new Error(
                      n?.message ||
                        `WebSocket connection failed for host: ${ys(this.url)}`
                    )
                  );
                  return this.events.emit("register_error", t), t;
                }
              })(
                (0, S.$0)({
                  sdkVersion: "2.10.1",
                  protocol: n.protocol,
                  version: n.version,
                  relayUrl: n.relayUrl,
                  projectId: n.projectId,
                  auth: t,
                  useOnCloseEvent: !0,
                })
              )
            )),
              n.registerProviderListeners();
          })();
        }
        recordMessageEvent(n) {
          var t = this;
          return (0, m.Z)(function* () {
            const { topic: o, message: a } = n;
            yield t.messages.set(o, a);
          })();
        }
        shouldIgnoreMessageEvent(n) {
          var t = this;
          return (0, m.Z)(function* () {
            const { topic: o, message: a } = n;
            if (!a || 0 === a.length)
              return t.logger.debug(`Ignoring invalid/empty message: ${a}`), !0;
            if (!(yield t.subscriber.isSubscribed(o)))
              return (
                t.logger.debug(
                  `Ignoring message for non-subscribed topic ${o}`
                ),
                !0
              );
            const u = t.messages.has(o, a);
            return u && t.logger.debug(`Ignoring duplicate message: ${a}`), u;
          })();
        }
        onProviderPayload(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (
              (t.logger.debug("Incoming Relay Payload"),
              t.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: n,
              }),
              ji(n))
            ) {
              if (!n.method.endsWith("_subscription")) return;
              const o = n.params,
                { topic: a, message: u, publishedAt: f } = o.data,
                I = { topic: a, message: u, publishedAt: f };
              t.logger.debug("Emitting Relayer Payload"),
                t.logger.trace(
                  ((y, n) => {
                    for (var t in n || (n = {}))
                      jd.call(n, t) && fu(y, t, n[t]);
                    if (lu)
                      for (var t of lu(n)) Ld.call(n, t) && fu(y, t, n[t]);
                    return y;
                  })({ type: "event", event: o.id }, I)
                ),
                t.events.emit(o.id, I),
                yield t.acknowledgePayload(n),
                yield t.onMessageEvent(I);
            } else hi(n) && t.events.emit("relayer_message_ack", n);
          })();
        }
        onMessageEvent(n) {
          var t = this;
          return (0, m.Z)(function* () {
            (yield t.shouldIgnoreMessageEvent(n)) ||
              (t.events.emit("relayer_message", n),
              yield t.recordMessageEvent(n));
          })();
        }
        acknowledgePayload(n) {
          var t = this;
          return (0, m.Z)(function* () {
            const o = Tt(n.id, !0);
            yield t.provider.connection.send(o);
          })();
        }
        unregisterProviderListeners() {
          this.provider.off("payload", this.onPayloadHandler),
            this.provider.off("connect", this.onConnectHandler),
            this.provider.off("disconnect", this.onDisconnectHandler),
            this.provider.off("error", this.onProviderErrorHandler);
        }
        registerEventListeners() {
          var n = this;
          return (0, m.Z)(function* () {
            n.events.on("relayer_connection_stalled", () => {
              n.restartTransport().catch((o) => n.logger.error(o));
            });
            let t = yield (0, S.Gg)();
            (0, S.uw)(
              (function () {
                var o = (0, m.Z)(function* (a) {
                  n.initialized &&
                    t !== a &&
                    ((t = a),
                    a
                      ? yield n
                          .restartTransport()
                          .catch((u) => n.logger.error(u))
                      : ((n.hasExperiencedNetworkDisruption = !0),
                        yield n
                          .transportClose()
                          .catch((u) => n.logger.error(u))));
                });
                return function (a) {
                  return o.apply(this, arguments);
                };
              })()
            );
          })();
        }
        onProviderDisconnect() {
          this.events.emit("relayer_disconnect"), this.attemptToReconnect();
        }
        attemptToReconnect() {
          var n = this;
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(
              (0, m.Z)(function* () {
                yield n.restartTransport().catch((t) => n.logger.error(t));
              }),
              (0, C.toMiliseconds)(ud)
            ));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
        toEstablishConnection() {
          var n = this;
          return (0, m.Z)(function* () {
            if ((yield n.confirmOnlineStateOrThrow(), !n.connected)) {
              if (n.connectionAttemptInProgress)
                return yield new Promise((t) => {
                  const o = setInterval(() => {
                    n.connected && (clearInterval(o), t());
                  }, n.connectionStatusPollingInterval);
                });
              yield n.restartTransport();
            }
          })();
        }
      }
      var Ud = Object.defineProperty,
        hu = Object.getOwnPropertySymbols,
        qd = Object.prototype.hasOwnProperty,
        zd = Object.prototype.propertyIsEnumerable,
        du = (y, n, t) =>
          n in y
            ? Ud(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        pu = (y, n) => {
          for (var t in n || (n = {})) qd.call(n, t) && du(y, t, n[t]);
          if (hu) for (var t of hu(n)) zd.call(n, t) && du(y, t, n[t]);
          return y;
        };
      class Ts extends Ge {
        constructor(n, t, o, a = Mn, u = void 0) {
          var f;
          super(n, t, o, a),
            (f = this),
            (this.core = n),
            (this.logger = t),
            (this.name = o),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.init = (0, m.Z)(function* () {
              f.initialized ||
                (f.logger.trace("Initialized"),
                yield f.restore(),
                f.cached.forEach((I) => {
                  f.getKey && null !== I && !(0, S.o8)(I)
                    ? f.map.set(f.getKey(I), I)
                    : (0, S.xW)(I)
                    ? f.map.set(I.id, I)
                    : (0, S.h1)(I) && f.map.set(I.topic, I);
                }),
                (f.cached = []),
                (f.initialized = !0));
            })),
            (this.set = (function () {
              var I = (0, m.Z)(function* (N, z) {
                f.isInitialized(),
                  f.map.has(N)
                    ? yield f.update(N, z)
                    : (f.logger.debug("Setting value"),
                      f.logger.trace({
                        type: "method",
                        method: "set",
                        key: N,
                        value: z,
                      }),
                      f.map.set(N, z),
                      yield f.persist());
              });
              return function (N, z) {
                return I.apply(this, arguments);
              };
            })()),
            (this.get = (I) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: I }),
              this.getData(I)
            )),
            (this.getAll = (I) => (
              this.isInitialized(),
              I
                ? this.values.filter((N) =>
                    Object.keys(I).every((z) => vs()(N[z], I[z]))
                  )
                : this.values
            )),
            (this.update = (function () {
              var I = (0, m.Z)(function* (N, z) {
                f.isInitialized(),
                  f.logger.debug("Updating value"),
                  f.logger.trace({
                    type: "method",
                    method: "update",
                    key: N,
                    update: z,
                  });
                const G = pu(pu({}, f.getData(N)), z);
                f.map.set(N, G), yield f.persist();
              });
              return function (N, z) {
                return I.apply(this, arguments);
              };
            })()),
            (this.delete = (function () {
              var I = (0, m.Z)(function* (N, z) {
                f.isInitialized(),
                  f.map.has(N) &&
                    (f.logger.debug("Deleting value"),
                    f.logger.trace({
                      type: "method",
                      method: "delete",
                      key: N,
                      reason: z,
                    }),
                    f.map.delete(N),
                    yield f.persist());
              });
              return function (N, z) {
                return I.apply(this, arguments);
              };
            })()),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.storagePrefix = a),
            (this.getKey = u);
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        setDataStore(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.core.storage.setItem(t.storageKey, n);
          })();
        }
        getDataStore() {
          var n = this;
          return (0, m.Z)(function* () {
            return yield n.core.storage.getItem(n.storageKey);
          })();
        }
        getData(n) {
          const t = this.map.get(n);
          if (!t) {
            const { message: o } = (0, S.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${n}`
            );
            throw (this.logger.error(o), new Error(o));
          }
          return t;
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setDataStore(n.values);
          })();
        }
        restore() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              const t = yield n.getDataStore();
              if (typeof t > "u" || !t.length) return;
              if (n.map.size) {
                const { message: o } = (0, S.Z7)(
                  "RESTORE_WILL_OVERRIDE",
                  n.name
                );
                throw (n.logger.error(o), new Error(o));
              }
              (n.cached = t),
                n.logger.debug(`Successfully Restored value for ${n.name}`),
                n.logger.trace({
                  type: "method",
                  method: "restore",
                  value: n.values,
                });
            } catch (t) {
              n.logger.debug(`Failed to Restore value for ${n.name}`),
                n.logger.error(t);
            }
          })();
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class $d {
        constructor(n, t) {
          var o = this;
          (this.core = n),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (de())()),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.ignoredPayloadTypes = [S.rV]),
            (this.registeredMethods = []),
            (this.init = (0, m.Z)(function* () {
              o.initialized ||
                (yield o.pairings.init(),
                yield o.cleanup(),
                o.registerRelayerEvents(),
                o.registerExpirerEvents(),
                (o.initialized = !0),
                o.logger.trace("Initialized"));
            })),
            (this.register = ({ methods: a }) => {
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...a]),
                ]);
            }),
            (this.create = (0, m.Z)(function* () {
              o.isInitialized();
              const a = (0, S.jd)(),
                u = yield o.core.crypto.setSymKey(a),
                f = (0, S.gn)(C.FIVE_MINUTES),
                I = { protocol: "irn" },
                N = { topic: u, expiry: f, relay: I, active: !1 },
                z = (0, S.Bv)({
                  protocol: o.core.protocol,
                  version: o.core.version,
                  topic: u,
                  symKey: a,
                  relay: I,
                });
              return (
                yield o.pairings.set(u, N),
                yield o.core.relayer.subscribe(u),
                o.core.expirer.set(u, f),
                { topic: u, uri: z }
              );
            })),
            (this.pair = (function () {
              var a = (0, m.Z)(function* (u) {
                o.isInitialized(), o.isValidPair(u);
                const { topic: f, symKey: I, relay: N } = (0, S.he)(u.uri);
                let z;
                if (
                  o.pairings.keys.includes(f) &&
                  ((z = o.pairings.get(f)), z.active)
                )
                  throw new Error(
                    `Pairing already exists: ${f}. Please try again with a new connection URI.`
                  );
                o.core.crypto.keychain.has(f) ||
                  (yield o.core.crypto.setSymKey(I, f),
                  yield o.core.relayer.subscribe(f, { relay: N }));
                const G = (0, S.gn)(C.FIVE_MINUTES),
                  ce = { topic: f, relay: N, expiry: G, active: !1 };
                return (
                  yield o.pairings.set(f, ce),
                  o.core.expirer.set(f, G),
                  u.activatePairing && (yield o.activate({ topic: f })),
                  o.events.emit("pairing_create", ce),
                  ce
                );
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.activate = (function () {
              var a = (0, m.Z)(function* ({ topic: u }) {
                o.isInitialized();
                const f = (0, S.gn)(C.THIRTY_DAYS);
                yield o.pairings.update(u, { active: !0, expiry: f }),
                  o.core.expirer.set(u, f);
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.ping = (function () {
              var a = (0, m.Z)(function* (u) {
                o.isInitialized(), yield o.isValidPing(u);
                const { topic: f } = u;
                if (o.pairings.keys.includes(f)) {
                  const I = yield o.sendRequest(f, "wc_pairingPing", {}),
                    { done: N, resolve: z, reject: G } = (0, S.H1)();
                  o.events.once(
                    (0, S.E0)("pairing_ping", I),
                    ({ error: ce }) => {
                      ce ? G(ce) : z();
                    }
                  ),
                    yield N();
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.updateExpiry = (function () {
              var a = (0, m.Z)(function* ({ topic: u, expiry: f }) {
                o.isInitialized(), yield o.pairings.update(u, { expiry: f });
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.updateMetadata = (function () {
              var a = (0, m.Z)(function* ({ topic: u, metadata: f }) {
                o.isInitialized(),
                  yield o.pairings.update(u, { peerMetadata: f });
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = (function () {
              var a = (0, m.Z)(function* (u) {
                o.isInitialized(), yield o.isValidDisconnect(u);
                const { topic: f } = u;
                o.pairings.keys.includes(f) &&
                  (yield o.sendRequest(
                    f,
                    "wc_pairingDelete",
                    (0, S.D6)("USER_DISCONNECTED")
                  ),
                  yield o.deletePairing(f));
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.sendRequest = (function () {
              var a = (0, m.Z)(function* (u, f, I) {
                const N = mt(f, I),
                  z = yield o.core.crypto.encode(u, N),
                  G = Zi[f].req;
                return (
                  o.core.history.set(u, N),
                  o.core.relayer.publish(u, z, G),
                  N.id
                );
              });
              return function (u, f, I) {
                return a.apply(this, arguments);
              };
            })()),
            (this.sendResult = (function () {
              var a = (0, m.Z)(function* (u, f, I) {
                const N = Tt(u, I),
                  z = yield o.core.crypto.encode(f, N),
                  G = yield o.core.history.get(f, u),
                  ce = Zi[G.request.method].res;
                yield o.core.relayer.publish(f, z, ce),
                  yield o.core.history.resolve(N);
              });
              return function (u, f, I) {
                return a.apply(this, arguments);
              };
            })()),
            (this.sendError = (function () {
              var a = (0, m.Z)(function* (u, f, I) {
                const N = bt(u, I),
                  z = yield o.core.crypto.encode(f, N),
                  G = yield o.core.history.get(f, u),
                  ce = Zi[G.request.method]
                    ? Zi[G.request.method].res
                    : Zi.unregistered_method.res;
                yield o.core.relayer.publish(f, z, ce),
                  yield o.core.history.resolve(N);
              });
              return function (u, f, I) {
                return a.apply(this, arguments);
              };
            })()),
            (this.deletePairing = (function () {
              var a = (0, m.Z)(function* (u, f) {
                yield o.core.relayer.unsubscribe(u),
                  yield Promise.all([
                    o.pairings.delete(u, (0, S.D6)("USER_DISCONNECTED")),
                    o.core.crypto.deleteSymKey(u),
                    f ? Promise.resolve() : o.core.expirer.del(u),
                  ]);
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.cleanup = (0, m.Z)(function* () {
              const a = o.pairings.getAll().filter((u) => (0, S.Bw)(u.expiry));
              yield Promise.all(a.map((u) => o.deletePairing(u.topic)));
            })),
            (this.onRelayEventRequest = (a) => {
              const { topic: u, payload: f } = a;
              switch (f.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(u, f);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(u, f);
                default:
                  return this.onUnknownRpcMethodRequest(u, f);
              }
            }),
            (this.onRelayEventResponse = (function () {
              var a = (0, m.Z)(function* (u) {
                const { topic: f, payload: I } = u,
                  N = (yield o.core.history.get(f, I.id)).request.method;
                return "wc_pairingPing" === N
                  ? o.onPairingPingResponse(f, I)
                  : o.onUnknownRpcMethodResponse(N);
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.onPairingPingRequest = (function () {
              var a = (0, m.Z)(function* (u, f) {
                const { id: I } = f;
                try {
                  o.isValidPing({ topic: u }),
                    yield o.sendResult(I, u, !0),
                    o.events.emit("pairing_ping", { id: I, topic: u });
                } catch (N) {
                  yield o.sendError(I, u, N), o.logger.error(N);
                }
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.onPairingPingResponse = (a, u) => {
              const { id: f } = u;
              setTimeout(() => {
                en(u)
                  ? this.events.emit((0, S.E0)("pairing_ping", f), {})
                  : Dr(u) &&
                    this.events.emit((0, S.E0)("pairing_ping", f), {
                      error: u.error,
                    });
              }, 500);
            }),
            (this.onPairingDeleteRequest = (function () {
              var a = (0, m.Z)(function* (u, f) {
                const { id: I } = f;
                try {
                  o.isValidDisconnect({ topic: u }),
                    yield o.deletePairing(u),
                    o.events.emit("pairing_delete", { id: I, topic: u });
                } catch (N) {
                  yield o.sendError(I, u, N), o.logger.error(N);
                }
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.onUnknownRpcMethodRequest = (function () {
              var a = (0, m.Z)(function* (u, f) {
                const { id: I, method: N } = f;
                try {
                  if (o.registeredMethods.includes(N)) return;
                  const z = (0, S.D6)("WC_METHOD_UNSUPPORTED", N);
                  yield o.sendError(I, u, z), o.logger.error(z);
                } catch (z) {
                  yield o.sendError(I, u, z), o.logger.error(z);
                }
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.onUnknownRpcMethodResponse = (a) => {
              this.registeredMethods.includes(a) ||
                this.logger.error((0, S.D6)("WC_METHOD_UNSUPPORTED", a));
            }),
            (this.isValidPair = (a) => {
              if (!(0, S.EJ)(a)) {
                const { message: u } = (0, S.Z7)(
                  "MISSING_OR_INVALID",
                  `pair() params: ${a}`
                );
                throw new Error(u);
              }
              if (!(0, S.jv)(a.uri)) {
                const { message: u } = (0, S.Z7)(
                  "MISSING_OR_INVALID",
                  `pair() uri: ${a.uri}`
                );
                throw new Error(u);
              }
            }),
            (this.isValidPing = (function () {
              var a = (0, m.Z)(function* (u) {
                if (!(0, S.EJ)(u)) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `ping() params: ${u}`
                  );
                  throw new Error(I);
                }
                const { topic: f } = u;
                yield o.isValidPairingTopic(f);
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.isValidDisconnect = (function () {
              var a = (0, m.Z)(function* (u) {
                if (!(0, S.EJ)(u)) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `disconnect() params: ${u}`
                  );
                  throw new Error(I);
                }
                const { topic: f } = u;
                yield o.isValidPairingTopic(f);
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.isValidPairingTopic = (function () {
              var a = (0, m.Z)(function* (u) {
                if (!(0, S.M_)(u, !1)) {
                  const { message: f } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `pairing topic should be a string: ${u}`
                  );
                  throw new Error(f);
                }
                if (!o.pairings.keys.includes(u)) {
                  const { message: f } = (0, S.Z7)(
                    "NO_MATCHING_KEY",
                    `pairing topic doesn't exist: ${u}`
                  );
                  throw new Error(f);
                }
                if ((0, S.Bw)(o.pairings.get(u).expiry)) {
                  yield o.deletePairing(u);
                  const { message: f } = (0, S.Z7)(
                    "EXPIRED",
                    `pairing topic: ${u}`
                  );
                  throw new Error(f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.core = n),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.pairings = new Ts(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
        registerRelayerEvents() {
          var n = this;
          this.core.relayer.on(
            "relayer_message",
            (function () {
              var t = (0, m.Z)(function* (o) {
                const { topic: a, message: u } = o;
                if (
                  !n.pairings.keys.includes(a) ||
                  n.ignoredPayloadTypes.includes(
                    n.core.crypto.getPayloadType(u)
                  )
                )
                  return;
                const f = yield n.core.crypto.decode(a, u);
                try {
                  ji(f)
                    ? (n.core.history.set(a, f),
                      n.onRelayEventRequest({ topic: a, payload: f }))
                    : hi(f) &&
                      (yield n.core.history.resolve(f),
                      yield n.onRelayEventResponse({ topic: a, payload: f }),
                      n.core.history.delete(a, f.id));
                } catch (I) {
                  n.logger.error(I);
                }
              });
              return function (o) {
                return t.apply(this, arguments);
              };
            })()
          );
        }
        registerExpirerEvents() {
          var n = this;
          this.core.expirer.on(
            $r_expired,
            (function () {
              var t = (0, m.Z)(function* (o) {
                const { topic: a } = (0, S.iP)(o.target);
                a &&
                  n.pairings.keys.includes(a) &&
                  (yield n.deletePairing(a, !0),
                  n.events.emit("pairing_expire", { topic: a }));
              });
              return function (o) {
                return t.apply(this, arguments);
              };
            })()
          );
        }
      }
      class Hd extends Oe {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.core = n),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new ie.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.init = (0, m.Z)(function* () {
              o.initialized ||
                (o.logger.trace("Initialized"),
                yield o.restore(),
                o.cached.forEach((a) => o.records.set(a.id, a)),
                (o.cached = []),
                o.registerEventListeners(),
                (o.initialized = !0));
            })),
            (this.set = (a, u, f) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: a,
                  request: u,
                  chainId: f,
                }),
                this.records.has(u.id))
              )
                return;
              const I = {
                id: u.id,
                topic: a,
                request: { method: u.method, params: u.params || null },
                chainId: f,
                expiry: (0, S.gn)(C.THIRTY_DAYS),
              };
              this.records.set(I.id, I), this.events.emit("history_created", I);
            }),
            (this.resolve = (function () {
              var a = (0, m.Z)(function* (u) {
                if (
                  (o.isInitialized(),
                  o.logger.debug("Updating JSON-RPC response history record"),
                  o.logger.trace({
                    type: "method",
                    method: "update",
                    response: u,
                  }),
                  !o.records.has(u.id))
                )
                  return;
                const f = yield o.getRecord(u.id);
                typeof f.response > "u" &&
                  ((f.response = Dr(u)
                    ? { error: u.error }
                    : { result: u.result }),
                  o.records.set(f.id, f),
                  o.events.emit("history_updated", f));
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.get = (function () {
              var a = (0, m.Z)(function* (u, f) {
                return (
                  o.isInitialized(),
                  o.logger.debug("Getting record"),
                  o.logger.trace({
                    type: "method",
                    method: "get",
                    topic: u,
                    id: f,
                  }),
                  yield o.getRecord(f)
                );
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.delete = (a, u) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: u }),
                this.values.forEach((f) => {
                  if (f.topic === a) {
                    if (typeof u < "u" && f.id !== u) return;
                    this.records.delete(f.id),
                      this.events.emit("history_deleted", f);
                  }
                });
            }),
            (this.exists = (function () {
              var a = (0, m.Z)(function* (u, f) {
                return (
                  o.isInitialized(),
                  !!o.records.has(f) && (yield o.getRecord(f)).topic === u
                );
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.on = (a, u) => {
              this.events.on(a, u);
            }),
            (this.once = (a, u) => {
              this.events.once(a, u);
            }),
            (this.off = (a, u) => {
              this.events.off(a, u);
            }),
            (this.removeListener = (a, u) => {
              this.events.removeListener(a, u);
            }),
            (this.logger = (0, fe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const n = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const o = {
                topic: t.topic,
                request: mt(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return n.push(o);
            }),
            n
          );
        }
        setJsonRpcRecords(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.core.storage.setItem(t.storageKey, n);
          })();
        }
        getJsonRpcRecords() {
          var n = this;
          return (0, m.Z)(function* () {
            return yield n.core.storage.getItem(n.storageKey);
          })();
        }
        getRecord(n) {
          this.isInitialized();
          const t = this.records.get(n);
          if (!t) {
            const { message: o } = (0, S.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${n}`
            );
            throw new Error(o);
          }
          return t;
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setJsonRpcRecords(n.values), n.events.emit("history_sync");
          })();
        }
        restore() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              const t = yield n.getJsonRpcRecords();
              if (typeof t > "u" || !t.length) return;
              if (n.records.size) {
                const { message: o } = (0, S.Z7)(
                  "RESTORE_WILL_OVERRIDE",
                  n.name
                );
                throw (n.logger.error(o), new Error(o));
              }
              (n.cached = t),
                n.logger.debug(`Successfully Restored records for ${n.name}`),
                n.logger.trace({
                  type: "method",
                  method: "restore",
                  records: n.values,
                });
            } catch (t) {
              n.logger.debug(`Failed to Restore records for ${n.name}`),
                n.logger.error(t);
            }
          })();
        }
        registerEventListeners() {
          this.events.on("history_created", (n) => {
            const t = "history_created";
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, record: n }),
              this.persist();
          }),
            this.events.on("history_updated", (n) => {
              const t = "history_updated";
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: n }),
                this.persist();
            }),
            this.events.on("history_deleted", (n) => {
              const t = "history_deleted";
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, record: n }),
                this.persist();
            }),
            this.core.heartbeat.on(be.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((n) => {
              (0, C.toMiliseconds)(n.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(`Deleting expired history log: ${n.id}`),
                this.delete(n.topic, n.id));
            });
          } catch (n) {
            this.logger.warn(n);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class Bd extends lt {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.core = n),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new ie.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Mn),
            (this.init = (0, m.Z)(function* () {
              o.initialized ||
                (o.logger.trace("Initialized"),
                yield o.restore(),
                o.cached.forEach((a) => o.expirations.set(a.target, a)),
                (o.cached = []),
                o.registerEventListeners(),
                (o.initialized = !0));
            })),
            (this.has = (a) => {
              try {
                const u = this.formatTarget(a);
                return typeof this.getExpiration(u) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (a, u) => {
              this.isInitialized();
              const f = this.formatTarget(a),
                I = { target: f, expiry: u };
              this.expirations.set(f, I),
                this.checkExpiry(f, I),
                this.events.emit("expirer_created", {
                  target: f,
                  expiration: I,
                });
            }),
            (this.get = (a) => {
              this.isInitialized();
              const u = this.formatTarget(a);
              return this.getExpiration(u);
            }),
            (this.del = (a) => {
              if ((this.isInitialized(), this.has(a))) {
                const u = this.formatTarget(a),
                  f = this.getExpiration(u);
                this.expirations.delete(u),
                  this.events.emit("expirer_deleted", {
                    target: u,
                    expiration: f,
                  });
              }
            }),
            (this.on = (a, u) => {
              this.events.on(a, u);
            }),
            (this.once = (a, u) => {
              this.events.once(a, u);
            }),
            (this.off = (a, u) => {
              this.events.off(a, u);
            }),
            (this.removeListener = (a, u) => {
              this.events.removeListener(a, u);
            }),
            (this.logger = (0, fe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return this.storagePrefix + this.version + "//" + this.name;
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(n) {
          if ("string" == typeof n) return (0, S.Z4)(n);
          if ("number" == typeof n) return (0, S.Gq)(n);
          const { message: t } = (0, S.Z7)(
            "UNKNOWN_TYPE",
            "Target type: " + typeof n
          );
          throw new Error(t);
        }
        setExpirations(n) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.core.storage.setItem(t.storageKey, n);
          })();
        }
        getExpirations() {
          var n = this;
          return (0, m.Z)(function* () {
            return yield n.core.storage.getItem(n.storageKey);
          })();
        }
        persist() {
          var n = this;
          return (0, m.Z)(function* () {
            yield n.setExpirations(n.values), n.events.emit("expirer_sync");
          })();
        }
        restore() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              const t = yield n.getExpirations();
              if (typeof t > "u" || !t.length) return;
              if (n.expirations.size) {
                const { message: o } = (0, S.Z7)(
                  "RESTORE_WILL_OVERRIDE",
                  n.name
                );
                throw (n.logger.error(o), new Error(o));
              }
              (n.cached = t),
                n.logger.debug(
                  `Successfully Restored expirations for ${n.name}`
                ),
                n.logger.trace({
                  type: "method",
                  method: "restore",
                  expirations: n.values,
                });
            } catch (t) {
              n.logger.debug(`Failed to Restore expirations for ${n.name}`),
                n.logger.error(t);
            }
          })();
        }
        getExpiration(n) {
          const t = this.expirations.get(n);
          if (!t) {
            const { message: o } = (0, S.Z7)(
              "NO_MATCHING_KEY",
              `${this.name}: ${n}`
            );
            throw (this.logger.error(o), new Error(o));
          }
          return t;
        }
        checkExpiry(n, t) {
          const { expiry: o } = t;
          (0, C.toMiliseconds)(o) - Date.now() <= 0 && this.expire(n, t);
        }
        expire(n, t) {
          this.expirations.delete(n),
            this.events.emit($r_expired, { target: n, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((n, t) => this.checkExpiry(t, n));
        }
        registerEventListeners() {
          this.core.heartbeat.on(be.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on("expirer_created", (n) => {
              const t = "expirer_created";
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: n }),
                this.persist();
            }),
            this.events.on($r_expired, (n) => {
              const t = $r_expired;
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: n }),
                this.persist();
            }),
            this.events.on("expirer_deleted", (n) => {
              const t = "expirer_deleted";
              this.logger.info(`Emitting ${t}`),
                this.logger.debug({ type: "event", event: t, data: n }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: n } = (0, S.Z7)("NOT_INITIALIZED", this.name);
            throw new Error(n);
          }
        }
      }
      class Vd extends ft {
        constructor(n, t) {
          var o;
          super(n, t),
            (o = this),
            (this.projectId = n),
            (this.logger = t),
            (this.name = ia),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = (function () {
              var a = (0, m.Z)(function* (u) {
                if (o.verifyDisabled || (0, S.b$)() || !(0, S.jU)()) return;
                const f = u?.verifyUrl || As;
                o.verifyUrl !== f && o.removeIframe(), (o.verifyUrl = f);
                try {
                  yield o.createIframe();
                } catch (I) {
                  o.logger.info(`Verify iframe failed to load: ${o.verifyUrl}`),
                    o.logger.info(I);
                }
                if (!o.initialized) {
                  o.removeIframe(), (o.verifyUrl = au);
                  try {
                    yield o.createIframe();
                  } catch (I) {
                    o.logger.info(
                      `Verify iframe failed to load: ${o.verifyUrl}`
                    ),
                      o.logger.info(I),
                      (o.verifyDisabled = !0);
                  }
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.register = (function () {
              var a = (0, m.Z)(function* (u) {
                o.initialized
                  ? o.sendPost(u.attestationId)
                  : (o.addToQueue(u.attestationId), yield o.init());
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.resolve = (function () {
              var a = (0, m.Z)(function* (u) {
                if (o.isDevEnv) return "";
                const f = u?.verifyUrl || As;
                let I;
                try {
                  I = yield o.fetchAttestation(u.attestationId, f);
                } catch (N) {
                  o.logger.info(
                    `failed to resolve attestation: ${u.attestationId} from url: ${f}`
                  ),
                    o.logger.info(N),
                    (I = yield o.fetchAttestation(u.attestationId, au));
                }
                return I;
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.fetchAttestation = (function () {
              var a = (0, m.Z)(function* (u, f) {
                o.logger.info(`resolving attestation: ${u} from url: ${f}`);
                const I = o.startAbortTimer(2 * C.ONE_SECOND),
                  N = yield fetch(`${f}/attestation/${u}`, {
                    signal: o.abortController.signal,
                  });
                return (
                  clearTimeout(I), 200 === N.status ? yield N.json() : void 0
                );
              });
              return function (u, f) {
                return a.apply(this, arguments);
              };
            })()),
            (this.addToQueue = (a) => {
              this.queue.push(a);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((a) => this.sendPost(a)),
                (this.queue = []));
            }),
            (this.sendPost = (a) => {
              var u;
              try {
                if (!this.iframe) return;
                null == (u = this.iframe.contentWindow) ||
                  u.postMessage(a, "*"),
                  this.logger.info(`postMessage sent: ${a} ${this.verifyUrl}`);
              } catch {}
            }),
            (this.createIframe = (0, m.Z)(function* () {
              let a;
              const u = (f) => {
                "verify_ready" === f.data &&
                  ((o.initialized = !0),
                  o.processQueue(),
                  window.removeEventListener("message", u),
                  a());
              };
              yield Promise.race([
                new Promise((f) => {
                  if (document.getElementById(ia)) return f();
                  window.addEventListener("message", u);
                  const I = document.createElement("iframe");
                  (I.id = ia),
                    (I.src = `${o.verifyUrl}/${o.projectId}`),
                    (I.style.display = "none"),
                    document.body.append(I),
                    (o.iframe = I),
                    (a = f);
                }),
                new Promise((f, I) =>
                  setTimeout(() => {
                    window.removeEventListener("message", u),
                      I("verify iframe load timeout");
                  }, (0, C.toMiliseconds)(C.FIVE_SECONDS))
                ),
              ]);
            })),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.verifyUrl = As),
            (this.abortController = new AbortController()),
            (this.isDevEnv = (0, S.UG)() && process.env.IS_VITEST);
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        startAbortTimer(n) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, C.toMiliseconds)(n)
            )
          );
        }
      }
      var kd = Object.defineProperty,
        gu = Object.getOwnPropertySymbols,
        Kd = Object.prototype.hasOwnProperty,
        Gd = Object.prototype.propertyIsEnumerable,
        yu = (y, n, t) =>
          n in y
            ? kd(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        _u = (y, n) => {
          for (var t in n || (n = {})) Kd.call(n, t) && yu(y, t, n[t]);
          if (gu) for (var t of gu(n)) Gd.call(n, t) && yu(y, t, n[t]);
          return y;
        };
      class oa extends se {
        constructor(n) {
          super(n),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = "core"),
            (this.events = new ie.EventEmitter()),
            (this.initialized = !1),
            (this.on = (o, a) => this.events.on(o, a)),
            (this.once = (o, a) => this.events.once(o, a)),
            (this.off = (o, a) => this.events.off(o, a)),
            (this.removeListener = (o, a) => this.events.removeListener(o, a)),
            (this.projectId = n?.projectId),
            (this.relayUrl = n?.relayUrl || su);
          const t =
            typeof n?.logger < "u" && "string" != typeof n?.logger
              ? n.logger
              : (0, fe.pino)(
                  (0, fe.getDefaultLoggerOptions)({
                    level: n?.logger || "error",
                  })
                );
          (this.logger = (0, fe.generateChildLogger)(t, this.name)),
            (this.heartbeat = new be.HeartBeat()),
            (this.crypto = new Id(this, this.logger, n?.keychain)),
            (this.history = new Hd(this, this.logger)),
            (this.expirer = new Bd(this, this.logger)),
            (this.storage =
              null != n && n.storage
                ? n.storage
                : new X.ZP(_u(_u({}, Qh), n?.storageOptions))),
            (this.relayer = new Zd({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new $d(this, this.logger)),
            (this.verify = new Vd(this.projectId || "", this.logger));
        }
        static init(n) {
          return (0, m.Z)(function* () {
            const t = new oa(n);
            yield t.initialize();
            const o = yield t.crypto.getClientId();
            return yield t.storage.setItem("WALLETCONNECT_CLIENT_ID", o), t;
          })();
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        start() {
          var n = this;
          return (0, m.Z)(function* () {
            n.initialized || (yield n.initialize());
          })();
        }
        initialize() {
          var n = this;
          return (0, m.Z)(function* () {
            n.logger.trace("Initialized");
            try {
              yield n.crypto.init(),
                yield n.history.init(),
                yield n.expirer.init(),
                yield n.relayer.init(),
                yield n.heartbeat.init(),
                yield n.pairing.init(),
                (n.initialized = !0),
                n.logger.info("Core Initialization Success");
            } catch (t) {
              throw (
                (n.logger.warn(
                  `Core Initialization Failure at epoch ${Date.now()}`,
                  t
                ),
                n.logger.error(t.message),
                t)
              );
            }
          })();
        }
      }
      const Wd = oa,
        aa = "wc@2:client:",
        wu = "WALLETCONNECT_DEEPLINK_CHOICE",
        xu = "Proposal expired",
        Cs = C.SEVEN_DAYS,
        zi = {
          wc_sessionPropose: {
            req: { ttl: C.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: C.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: C.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: C.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: C.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: C.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: C.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: C.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: C.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: C.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: C.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: C.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: C.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: C.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: C.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: C.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        ua = { min: C.FIVE_MINUTES, max: C.SEVEN_DAYS },
        ep = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var tp = Object.defineProperty,
        rp = Object.defineProperties,
        np = Object.getOwnPropertyDescriptors,
        Eu = Object.getOwnPropertySymbols,
        ip = Object.prototype.hasOwnProperty,
        sp = Object.prototype.propertyIsEnumerable,
        Iu = (y, n, t) =>
          n in y
            ? tp(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        Or = (y, n) => {
          for (var t in n || (n = {})) ip.call(n, t) && Iu(y, t, n[t]);
          if (Eu) for (var t of Eu(n)) sp.call(n, t) && Iu(y, t, n[t]);
          return y;
        },
        $i = (y, n) => rp(y, np(n));
      class op extends p {
        constructor(n) {
          var t;
          super(n),
            (t = this),
            (this.name = "engine"),
            (this.events = new (de())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [S.rV]),
            (this.requestQueue = { state: "IDLE", queue: [] }),
            (this.sessionRequestQueue = { state: "IDLE", queue: [] }),
            (this.requestQueueDelay = C.ONE_SECOND),
            (this.init = (0, m.Z)(function* () {
              t.initialized ||
                (yield t.cleanup(),
                t.registerRelayerEvents(),
                t.registerExpirerEvents(),
                t.registerPairingEvents(),
                t.client.core.pairing.register({ methods: Object.keys(zi) }),
                (t.initialized = !0),
                setTimeout(() => {
                  (t.sessionRequestQueue.queue = t.getPendingSessionRequests()),
                    t.processSessionRequestQueue();
                }, (0, C.toMiliseconds)(t.requestQueueDelay)));
            })),
            (this.connect = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized();
                const u = $i(Or({}, a), {
                  requiredNamespaces: a.requiredNamespaces || {},
                  optionalNamespaces: a.optionalNamespaces || {},
                });
                yield t.isValidConnect(u);
                const {
                  pairingTopic: f,
                  requiredNamespaces: I,
                  optionalNamespaces: N,
                  sessionProperties: z,
                  relays: G,
                } = u;
                let xe,
                  ce = f,
                  Te = !1;
                if (
                  (ce && (Te = t.client.core.pairing.pairings.get(ce).active),
                  !ce || !Te)
                ) {
                  const { topic: ct, uri: Zt } =
                    yield t.client.core.pairing.create();
                  (ce = ct), (xe = Zt);
                }
                const _e = yield t.client.core.crypto.generateKeyPair(),
                  ze = Or(
                    {
                      requiredNamespaces: I,
                      optionalNamespaces: N,
                      relays: G ?? [{ protocol: "irn" }],
                      proposer: { publicKey: _e, metadata: t.client.metadata },
                    },
                    z && { sessionProperties: z }
                  ),
                  {
                    reject: ke,
                    resolve: xt,
                    done: fr,
                  } = (0, S.H1)(C.FIVE_MINUTES, xu);
                if (
                  (t.events.once(
                    (0, S.E0)("session_connect"),
                    (function () {
                      var ct = (0, m.Z)(function* ({ error: Zt, session: Qe }) {
                        if (Zt) ke(Zt);
                        else if (Qe) {
                          Qe.self.publicKey = _e;
                          const ar = $i(Or({}, Qe), {
                            requiredNamespaces: Qe.requiredNamespaces,
                            optionalNamespaces: Qe.optionalNamespaces,
                          });
                          yield t.client.session.set(Qe.topic, ar),
                            yield t.setExpiry(Qe.topic, Qe.expiry),
                            ce &&
                              (yield t.client.core.pairing.updateMetadata({
                                topic: ce,
                                metadata: Qe.peer.metadata,
                              })),
                            xt(ar);
                        }
                      });
                      return function (Zt) {
                        return ct.apply(this, arguments);
                      };
                    })()
                  ),
                  !ce)
                ) {
                  const { message: ct } = (0, S.Z7)(
                    "NO_MATCHING_KEY",
                    `connect() pairing topic: ${ce}`
                  );
                  throw new Error(ct);
                }
                const gt = yield t.sendRequest({
                    topic: ce,
                    method: "wc_sessionPropose",
                    params: ze,
                  }),
                  Mt = (0, S.gn)(C.FIVE_MINUTES);
                return (
                  yield t.setProposal(gt, Or({ id: gt, expiry: Mt }, ze)),
                  { uri: xe, approval: fr }
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.pair = (function () {
              var o = (0, m.Z)(function* (a) {
                return (
                  yield t.isInitialized(), yield t.client.core.pairing.pair(a)
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.approve = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidApprove(a);
                const {
                    id: u,
                    relayProtocol: f,
                    namespaces: I,
                    sessionProperties: N,
                  } = a,
                  z = t.client.proposal.get(u);
                let {
                  pairingTopic: G,
                  proposer: ce,
                  requiredNamespaces: xe,
                  optionalNamespaces: Te,
                } = z;
                (G = G || ""),
                  (0, S.L5)(xe) || (xe = (0, S.fc)(I, "approve()"));
                const _e = yield t.client.core.crypto.generateKeyPair(),
                  ze = ce.publicKey,
                  ke = yield t.client.core.crypto.generateSharedKey(_e, ze);
                G &&
                  u &&
                  (yield t.client.core.pairing.updateMetadata({
                    topic: G,
                    metadata: ce.metadata,
                  }),
                  yield t.sendResult({
                    id: u,
                    topic: G,
                    result: {
                      relay: { protocol: f ?? "irn" },
                      responderPublicKey: _e,
                    },
                  }),
                  yield t.client.proposal.delete(
                    u,
                    (0, S.D6)("USER_DISCONNECTED")
                  ),
                  yield t.client.core.pairing.activate({ topic: G }));
                const xt = Or(
                  {
                    relay: { protocol: f ?? "irn" },
                    namespaces: I,
                    requiredNamespaces: xe,
                    optionalNamespaces: Te,
                    pairingTopic: G,
                    controller: { publicKey: _e, metadata: t.client.metadata },
                    expiry: (0, S.gn)(Cs),
                  },
                  N && { sessionProperties: N }
                );
                yield t.client.core.relayer.subscribe(ke),
                  yield t.sendRequest({
                    topic: ke,
                    method: "wc_sessionSettle",
                    params: xt,
                    throwOnFailedPublish: !0,
                  });
                const fr = $i(Or({}, xt), {
                  topic: ke,
                  pairingTopic: G,
                  acknowledged: !1,
                  self: xt.controller,
                  peer: { publicKey: ce.publicKey, metadata: ce.metadata },
                  controller: _e,
                });
                return (
                  yield t.client.session.set(ke, fr),
                  yield t.setExpiry(ke, (0, S.gn)(Cs)),
                  {
                    topic: ke,
                    acknowledged: () =>
                      new Promise((gt) =>
                        setTimeout(() => gt(t.client.session.get(ke)), 500)
                      ),
                  }
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.reject = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidReject(a);
                const { id: u, reason: f } = a,
                  { pairingTopic: I } = t.client.proposal.get(u);
                I &&
                  (yield t.sendError(u, I, f),
                  yield t.client.proposal.delete(
                    u,
                    (0, S.D6)("USER_DISCONNECTED")
                  ));
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.update = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidUpdate(a);
                const { topic: u, namespaces: f } = a,
                  I = yield t.sendRequest({
                    topic: u,
                    method: "wc_sessionUpdate",
                    params: { namespaces: f },
                  }),
                  { done: N, resolve: z, reject: G } = (0, S.H1)();
                return (
                  t.events.once(
                    (0, S.E0)("session_update", I),
                    ({ error: ce }) => {
                      ce ? G(ce) : z();
                    }
                  ),
                  yield t.client.session.update(u, { namespaces: f }),
                  { acknowledged: N }
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.extend = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidExtend(a);
                const { topic: u } = a,
                  f = yield t.sendRequest({
                    topic: u,
                    method: "wc_sessionExtend",
                    params: {},
                  }),
                  { done: I, resolve: N, reject: z } = (0, S.H1)();
                return (
                  t.events.once(
                    (0, S.E0)("session_extend", f),
                    ({ error: G }) => {
                      G ? z(G) : N();
                    }
                  ),
                  yield t.setExpiry(u, (0, S.gn)(Cs)),
                  { acknowledged: I }
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.request = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidRequest(a);
                const { chainId: u, request: f, topic: I, expiry: N } = a,
                  z = Dt(),
                  { done: G, resolve: ce, reject: xe } = (0, S.H1)(N);
                return (
                  t.events.once(
                    (0, S.E0)("session_request", z),
                    ({ error: Te, result: _e }) => {
                      Te ? xe(Te) : ce(_e);
                    }
                  ),
                  yield Promise.all([
                    new Promise(
                      (function () {
                        var Te = (0, m.Z)(function* (_e) {
                          yield t
                            .sendRequest({
                              clientRpcId: z,
                              topic: I,
                              method: "wc_sessionRequest",
                              params: { request: f, chainId: u },
                              expiry: N,
                              throwOnFailedPublish: !0,
                            })
                            .catch((ze) => xe(ze)),
                            t.client.events.emit("session_request_sent", {
                              topic: I,
                              request: f,
                              chainId: u,
                              id: z,
                            }),
                            _e();
                        });
                        return function (_e) {
                          return Te.apply(this, arguments);
                        };
                      })()
                    ),
                    new Promise(
                      (function () {
                        var Te = (0, m.Z)(function* (_e) {
                          const ze = yield t.client.core.storage.getItem(wu);
                          (0, S.Hh)({ id: z, topic: I, wcDeepLink: ze }), _e();
                        });
                        return function (_e) {
                          return Te.apply(this, arguments);
                        };
                      })()
                    ),
                    G(),
                  ]).then((Te) => Te[2])
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.respond = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidRespond(a);
                const { topic: u, response: f } = a,
                  { id: I } = f;
                en(f)
                  ? yield t.sendResult({
                      id: I,
                      topic: u,
                      result: f.result,
                      throwOnFailedPublish: !0,
                    })
                  : Dr(f) && (yield t.sendError(I, u, f.error)),
                  t.cleanupAfterResponse(a);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.ping = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidPing(a);
                const { topic: u } = a;
                if (t.client.session.keys.includes(u)) {
                  const f = yield t.sendRequest({
                      topic: u,
                      method: "wc_sessionPing",
                      params: {},
                    }),
                    { done: I, resolve: N, reject: z } = (0, S.H1)();
                  t.events.once(
                    (0, S.E0)("session_ping", f),
                    ({ error: G }) => {
                      G ? z(G) : N();
                    }
                  ),
                    yield I();
                } else t.client.core.pairing.pairings.keys.includes(u) && (yield t.client.core.pairing.ping({ topic: u }));
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.emit = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidEmit(a);
                const { topic: u, event: f, chainId: I } = a;
                yield t.sendRequest({
                  topic: u,
                  method: "wc_sessionEvent",
                  params: { event: f, chainId: I },
                });
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.disconnect = (function () {
              var o = (0, m.Z)(function* (a) {
                yield t.isInitialized(), yield t.isValidDisconnect(a);
                const { topic: u } = a;
                t.client.session.keys.includes(u)
                  ? (yield t.sendRequest({
                      topic: u,
                      method: "wc_sessionDelete",
                      params: (0, S.D6)("USER_DISCONNECTED"),
                      throwOnFailedPublish: !0,
                    }),
                    yield t.deleteSession(u))
                  : yield t.client.core.pairing.disconnect({ topic: u });
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.find = (o) => (
              this.isInitialized(),
              this.client.session.getAll().filter((a) => (0, S.Ih)(a, o))
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = (function () {
              var o = (0, m.Z)(function* (a) {
                if (a.pairingTopic)
                  try {
                    const u = t.client.core.pairing.pairings.get(
                        a.pairingTopic
                      ),
                      f = t.client.core.pairing.pairings
                        .getAll()
                        .filter((I) => {
                          var N, z;
                          return (
                            (null == (N = I.peerMetadata) ? void 0 : N.url) &&
                            (null == (z = I.peerMetadata) ? void 0 : z.url) ===
                              a.peer.metadata.url &&
                            I.topic &&
                            I.topic !== u.topic
                          );
                        });
                    if (0 === f.length) return;
                    t.client.logger.info(
                      `Cleaning up ${f.length} duplicate pairing(s)`
                    ),
                      yield Promise.all(
                        f.map((I) =>
                          t.client.core.pairing.disconnect({ topic: I.topic })
                        )
                      ),
                      t.client.logger.info(
                        "Duplicate pairings clean up finished"
                      );
                  } catch (u) {
                    t.client.logger.error(u);
                  }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.deleteSession = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { self: f } = t.client.session.get(a);
                yield t.client.core.relayer.unsubscribe(a),
                  t.client.session.delete(a, (0, S.D6)("USER_DISCONNECTED")),
                  t.client.core.crypto.keychain.has(f.publicKey) &&
                    (yield t.client.core.crypto.deleteKeyPair(f.publicKey)),
                  t.client.core.crypto.keychain.has(a) &&
                    (yield t.client.core.crypto.deleteSymKey(a)),
                  u || t.client.core.expirer.del(a),
                  t.client.core.storage
                    .removeItem(wu)
                    .catch((I) => t.client.logger.warn(I));
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.deleteProposal = (function () {
              var o = (0, m.Z)(function* (a, u) {
                yield Promise.all([
                  t.client.proposal.delete(a, (0, S.D6)("USER_DISCONNECTED")),
                  u ? Promise.resolve() : t.client.core.expirer.del(a),
                ]);
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.deletePendingSessionRequest = (function () {
              var o = (0, m.Z)(function* (a, u, f = !1) {
                yield Promise.all([
                  t.client.pendingRequest.delete(a, u),
                  f ? Promise.resolve() : t.client.core.expirer.del(a),
                ]),
                  (t.sessionRequestQueue.queue =
                    t.sessionRequestQueue.queue.filter((I) => I.id !== a)),
                  f && (t.sessionRequestQueue.state = "IDLE");
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.setExpiry = (function () {
              var o = (0, m.Z)(function* (a, u) {
                t.client.session.keys.includes(a) &&
                  (yield t.client.session.update(a, { expiry: u })),
                  t.client.core.expirer.set(a, u);
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.setProposal = (function () {
              var o = (0, m.Z)(function* (a, u) {
                yield t.client.proposal.set(a, u),
                  t.client.core.expirer.set(a, u.expiry);
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.setPendingSessionRequest = (function () {
              var o = (0, m.Z)(function* (a) {
                const u = zi.wc_sessionRequest.req.ttl,
                  { id: f, topic: I, params: N, verifyContext: z } = a;
                yield t.client.pendingRequest.set(f, {
                  id: f,
                  topic: I,
                  params: N,
                  verifyContext: z,
                }),
                  u && t.client.core.expirer.set(f, (0, S.gn)(u));
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.sendRequest = (function () {
              var o = (0, m.Z)(function* (a) {
                const {
                    topic: u,
                    method: f,
                    params: I,
                    expiry: N,
                    relayRpcId: z,
                    clientRpcId: G,
                    throwOnFailedPublish: ce,
                  } = a,
                  xe = mt(f, I, G);
                if ((0, S.jU)() && ep.includes(f)) {
                  const ze = (0, S.rj)(JSON.stringify(xe));
                  t.client.core.verify.register({ attestationId: ze });
                }
                const Te = yield t.client.core.crypto.encode(u, xe),
                  _e = zi[f].req;
                return (
                  N && (_e.ttl = N),
                  z && (_e.id = z),
                  t.client.core.history.set(u, xe),
                  ce
                    ? ((_e.internal = $i(Or({}, _e.internal), {
                        throwOnFailedPublish: !0,
                      })),
                      yield t.client.core.relayer.publish(u, Te, _e))
                    : t.client.core.relayer
                        .publish(u, Te, _e)
                        .catch((ze) => t.client.logger.error(ze)),
                  xe.id
                );
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.sendResult = (function () {
              var o = (0, m.Z)(function* (a) {
                const {
                    id: u,
                    topic: f,
                    result: I,
                    throwOnFailedPublish: N,
                  } = a,
                  z = Tt(u, I),
                  G = yield t.client.core.crypto.encode(f, z),
                  ce = yield t.client.core.history.get(f, u),
                  xe = zi[ce.request.method].res;
                N
                  ? ((xe.internal = $i(Or({}, xe.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    yield t.client.core.relayer.publish(f, G, xe))
                  : t.client.core.relayer
                      .publish(f, G, xe)
                      .catch((Te) => t.client.logger.error(Te)),
                  yield t.client.core.history.resolve(z);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.sendError = (function () {
              var o = (0, m.Z)(function* (a, u, f) {
                const I = bt(a, f),
                  N = yield t.client.core.crypto.encode(u, I),
                  z = yield t.client.core.history.get(u, a);
                t.client.core.relayer.publish(u, N, zi[z.request.method].res),
                  yield t.client.core.history.resolve(I);
              });
              return function (a, u, f) {
                return o.apply(this, arguments);
              };
            })()),
            (this.cleanup = (0, m.Z)(function* () {
              const o = [],
                a = [];
              t.client.session.getAll().forEach((u) => {
                (0, S.Bw)(u.expiry) && o.push(u.topic);
              }),
                t.client.proposal.getAll().forEach((u) => {
                  (0, S.Bw)(u.expiry) && a.push(u.id);
                }),
                yield Promise.all([
                  ...o.map((u) => t.deleteSession(u)),
                  ...a.map((u) => t.deleteProposal(u)),
                ]);
            })),
            (this.onRelayEventRequest = (function () {
              var o = (0, m.Z)(function* (a) {
                t.requestQueue.queue.push(a), yield t.processRequestsQueue();
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.processRequestsQueue = (0, m.Z)(function* () {
              if ("ACTIVE" !== t.requestQueue.state) {
                for (
                  t.client.logger.info(
                    `Request queue starting with ${t.requestQueue.queue.length} requests`
                  );
                  t.requestQueue.queue.length > 0;

                ) {
                  t.requestQueue.state = "ACTIVE";
                  const o = t.requestQueue.queue.shift();
                  if (o)
                    try {
                      t.processRequest(o),
                        yield new Promise((a) => setTimeout(a, 300));
                    } catch (a) {
                      t.client.logger.warn(a);
                    }
                }
                t.requestQueue.state = "IDLE";
              } else t.client.logger.info("Request queue already active, skipping...");
            })),
            (this.processRequest = (o) => {
              const { topic: a, payload: u } = o,
                f = u.method;
              switch (f) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(a, u);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(a, u);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(a, u);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(a, u);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(a, u);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(a, u);
                case "wc_sessionRequest":
                  return this.onSessionRequest(a, u);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(a, u);
                default:
                  return this.client.logger.info(
                    `Unsupported request method ${f}`
                  );
              }
            }),
            (this.onRelayEventResponse = (function () {
              var o = (0, m.Z)(function* (a) {
                const { topic: u, payload: f } = a,
                  I = (yield t.client.core.history.get(u, f.id)).request.method;
                switch (I) {
                  case "wc_sessionPropose":
                    return t.onSessionProposeResponse(u, f);
                  case "wc_sessionSettle":
                    return t.onSessionSettleResponse(u, f);
                  case "wc_sessionUpdate":
                    return t.onSessionUpdateResponse(u, f);
                  case "wc_sessionExtend":
                    return t.onSessionExtendResponse(u, f);
                  case "wc_sessionPing":
                    return t.onSessionPingResponse(u, f);
                  case "wc_sessionRequest":
                    return t.onSessionRequestResponse(u, f);
                  default:
                    return t.client.logger.info(
                      `Unsupported response method ${I}`
                    );
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onRelayEventUnknownPayload = (o) => {
              const { topic: a } = o,
                { message: u } = (0, S.Z7)(
                  "MISSING_OR_INVALID",
                  `Decoded payload on topic ${a} is not identifiable as a JSON-RPC request or a response.`
                );
              throw new Error(u);
            }),
            (this.onSessionProposeRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { params: f, id: I } = u;
                try {
                  t.isValidConnect(Or({}, u.params));
                  const N = (0, S.gn)(C.FIVE_MINUTES),
                    z = Or({ id: I, pairingTopic: a, expiry: N }, f);
                  yield t.setProposal(I, z);
                  const G = (0, S.rj)(JSON.stringify(u)),
                    ce = yield t.getVerifyContext(G, z.proposer.metadata);
                  t.client.events.emit("session_proposal", {
                    id: I,
                    params: z,
                    verifyContext: ce,
                  });
                } catch (N) {
                  yield t.sendError(I, a, N), t.client.logger.error(N);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionProposeResponse = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f } = u;
                if (en(u)) {
                  const { result: I } = u;
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: I,
                  });
                  const N = t.client.proposal.get(f);
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: N,
                  });
                  const z = N.proposer.publicKey;
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: z,
                  });
                  const G = I.responderPublicKey;
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: G,
                  });
                  const ce = yield t.client.core.crypto.generateSharedKey(z, G);
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: ce,
                  });
                  const xe = yield t.client.core.relayer.subscribe(ce);
                  t.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: xe,
                  }),
                    yield t.client.core.pairing.activate({ topic: a });
                } else Dr(u) && (yield t.client.proposal.delete(f, (0, S.D6)("USER_DISCONNECTED")), t.events.emit((0, S.E0)("session_connect"), { error: u.error }));
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionSettleRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f, params: I } = u;
                try {
                  t.isValidSessionSettleRequest(I);
                  const {
                      relay: N,
                      controller: z,
                      expiry: G,
                      namespaces: ce,
                      requiredNamespaces: xe,
                      optionalNamespaces: Te,
                      sessionProperties: _e,
                      pairingTopic: ze,
                    } = u.params,
                    ke = Or(
                      {
                        topic: a,
                        relay: N,
                        expiry: G,
                        namespaces: ce,
                        acknowledged: !0,
                        pairingTopic: ze,
                        requiredNamespaces: xe,
                        optionalNamespaces: Te,
                        controller: z.publicKey,
                        self: { publicKey: "", metadata: t.client.metadata },
                        peer: { publicKey: z.publicKey, metadata: z.metadata },
                      },
                      _e && { sessionProperties: _e }
                    );
                  yield t.sendResult({ id: u.id, topic: a, result: !0 }),
                    t.events.emit((0, S.E0)("session_connect"), {
                      session: ke,
                    }),
                    t.cleanupDuplicatePairings(ke);
                } catch (N) {
                  yield t.sendError(f, a, N), t.client.logger.error(N);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionSettleResponse = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f } = u;
                en(u)
                  ? (yield t.client.session.update(a, { acknowledged: !0 }),
                    t.events.emit((0, S.E0)("session_approve", f), {}))
                  : Dr(u) &&
                    (yield t.client.session.delete(
                      a,
                      (0, S.D6)("USER_DISCONNECTED")
                    ),
                    t.events.emit((0, S.E0)("session_approve", f), {
                      error: u.error,
                    }));
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionUpdateRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { params: f, id: I } = u;
                try {
                  const N = `${a}_session_update`,
                    z = S.O6.get(N);
                  if (z && t.isRequestOutOfSync(z, I))
                    return void t.client.logger.info(
                      `Discarding out of sync request - ${I}`
                    );
                  t.isValidUpdate(Or({ topic: a }, f)),
                    yield t.client.session.update(a, {
                      namespaces: f.namespaces,
                    }),
                    yield t.sendResult({ id: I, topic: a, result: !0 }),
                    t.client.events.emit("session_update", {
                      id: I,
                      topic: a,
                      params: f,
                    }),
                    S.O6.set(N, I);
                } catch (N) {
                  yield t.sendError(I, a, N), t.client.logger.error(N);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isRequestOutOfSync = (o, a) =>
              parseInt(a.toString().slice(0, -3)) <=
              parseInt(o.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (o, a) => {
              const { id: u } = a;
              en(a)
                ? this.events.emit((0, S.E0)("session_update", u), {})
                : Dr(a) &&
                  this.events.emit((0, S.E0)("session_update", u), {
                    error: a.error,
                  });
            }),
            (this.onSessionExtendRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f } = u;
                try {
                  t.isValidExtend({ topic: a }),
                    yield t.setExpiry(a, (0, S.gn)(Cs)),
                    yield t.sendResult({ id: f, topic: a, result: !0 }),
                    t.client.events.emit("session_extend", { id: f, topic: a });
                } catch (I) {
                  yield t.sendError(f, a, I), t.client.logger.error(I);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionExtendResponse = (o, a) => {
              const { id: u } = a;
              en(a)
                ? this.events.emit((0, S.E0)("session_extend", u), {})
                : Dr(a) &&
                  this.events.emit((0, S.E0)("session_extend", u), {
                    error: a.error,
                  });
            }),
            (this.onSessionPingRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f } = u;
                try {
                  t.isValidPing({ topic: a }),
                    yield t.sendResult({ id: f, topic: a, result: !0 }),
                    t.client.events.emit("session_ping", { id: f, topic: a });
                } catch (I) {
                  yield t.sendError(f, a, I), t.client.logger.error(I);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionPingResponse = (o, a) => {
              const { id: u } = a;
              setTimeout(() => {
                en(a)
                  ? this.events.emit((0, S.E0)("session_ping", u), {})
                  : Dr(a) &&
                    this.events.emit((0, S.E0)("session_ping", u), {
                      error: a.error,
                    });
              }, 500);
            }),
            (this.onSessionDeleteRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f } = u;
                try {
                  t.isValidDisconnect({ topic: a, reason: u.params }),
                    yield Promise.all([
                      new Promise((I) => {
                        t.client.core.relayer.once(
                          "relayer_publish",
                          (0, m.Z)(function* () {
                            I(yield t.deleteSession(a));
                          })
                        );
                      }),
                      t.sendResult({ id: f, topic: a, result: !0 }),
                    ]),
                    t.client.events.emit("session_delete", { id: f, topic: a });
                } catch (I) {
                  t.client.logger.error(I);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f, params: I } = u;
                try {
                  t.isValidRequest(Or({ topic: a }, I));
                  const N = (0, S.rj)(
                      JSON.stringify(mt("wc_sessionRequest", I, f))
                    ),
                    z = t.client.session.get(a),
                    ce = {
                      id: f,
                      topic: a,
                      params: I,
                      verifyContext: yield t.getVerifyContext(
                        N,
                        z.peer.metadata
                      ),
                    };
                  yield t.setPendingSessionRequest(ce),
                    t.addSessionRequestToSessionRequestQueue(ce),
                    t.processSessionRequestQueue();
                } catch (N) {
                  yield t.sendError(f, a, N), t.client.logger.error(N);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.onSessionRequestResponse = (o, a) => {
              const { id: u } = a;
              en(a)
                ? this.events.emit((0, S.E0)("session_request", u), {
                    result: a.result,
                  })
                : Dr(a) &&
                  this.events.emit((0, S.E0)("session_request", u), {
                    error: a.error,
                  });
            }),
            (this.onSessionEventRequest = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const { id: f, params: I } = u;
                try {
                  const N = `${a}_session_event_${I.event.name}`,
                    z = S.O6.get(N);
                  if (z && t.isRequestOutOfSync(z, f))
                    return void t.client.logger.info(
                      `Discarding out of sync request - ${f}`
                    );
                  t.isValidEmit(Or({ topic: a }, I)),
                    t.client.events.emit("session_event", {
                      id: f,
                      topic: a,
                      params: I,
                    }),
                    S.O6.set(N, f);
                } catch (N) {
                  yield t.sendError(f, a, N), t.client.logger.error(N);
                }
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.addSessionRequestToSessionRequestQueue = (o) => {
              this.sessionRequestQueue.queue.push(o);
            }),
            (this.cleanupAfterResponse = (o) => {
              this.deletePendingSessionRequest(o.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = "IDLE"),
                    this.processSessionRequestQueue();
                }, (0, C.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.processSessionRequestQueue = () => {
              if ("ACTIVE" === this.sessionRequestQueue.state)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const o = this.sessionRequestQueue.queue[0];
              if (o)
                try {
                  (this.sessionRequestQueue.state = "ACTIVE"),
                    this.client.events.emit("session_request", o);
                } catch (a) {
                  this.client.logger.error(a);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.onPairingCreated = (o) => {
              if (o.active) return;
              const a = this.client.proposal
                .getAll()
                .find((u) => u.pairingTopic === o.topic);
              a &&
                this.onSessionProposeRequest(
                  o.topic,
                  mt(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: a.requiredNamespaces,
                      optionalNamespaces: a.optionalNamespaces,
                      relays: a.relays,
                      proposer: a.proposer,
                    },
                    a.id
                  )
                );
            }),
            (this.isValidConnect = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `connect() params: ${JSON.stringify(a)}`
                  );
                  throw new Error(G);
                }
                const {
                  pairingTopic: u,
                  requiredNamespaces: f,
                  optionalNamespaces: I,
                  sessionProperties: N,
                  relays: z,
                } = a;
                if (
                  ((0, S.o8)(u) || (yield t.isValidPairingTopic(u)),
                  !(0, S.PM)(z, !0))
                ) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `connect() relays: ${z}`
                  );
                  throw new Error(G);
                }
                !(0, S.o8)(f) &&
                  0 !== (0, S.L5)(f) &&
                  t.validateNamespaces(f, "requiredNamespaces"),
                  !(0, S.o8)(I) &&
                    0 !== (0, S.L5)(I) &&
                    t.validateNamespaces(I, "optionalNamespaces"),
                  (0, S.o8)(N) ||
                    t.validateSessionProps(N, "sessionProperties");
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.validateNamespaces = (o, a) => {
              const u = (0, S.n)(o, "connect()", a);
              if (u) throw new Error(u.message);
            }),
            (this.isValidApprove = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a))
                  throw new Error(
                    (0, S.Z7)(
                      "MISSING_OR_INVALID",
                      `approve() params: ${a}`
                    ).message
                  );
                const {
                  id: u,
                  namespaces: f,
                  relayProtocol: I,
                  sessionProperties: N,
                } = a;
                yield t.isValidProposalId(u);
                const z = t.client.proposal.get(u),
                  G = (0, S.in)(f, "approve()");
                if (G) throw new Error(G.message);
                const ce = (0, S.rF)(z.requiredNamespaces, f, "approve()");
                if (ce) throw new Error(ce.message);
                if (!(0, S.M_)(I, !0)) {
                  const { message: xe } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `approve() relayProtocol: ${I}`
                  );
                  throw new Error(xe);
                }
                (0, S.o8)(N) || t.validateSessionProps(N, "sessionProperties");
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidReject = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `reject() params: ${a}`
                  );
                  throw new Error(I);
                }
                const { id: u, reason: f } = a;
                if ((yield t.isValidProposalId(u), !(0, S.$t)(f))) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `reject() reason: ${JSON.stringify(f)}`
                  );
                  throw new Error(I);
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidSessionSettleRequest = (o) => {
              if (!(0, S.EJ)(o)) {
                const { message: G } = (0, S.Z7)(
                  "MISSING_OR_INVALID",
                  `onSessionSettleRequest() params: ${o}`
                );
                throw new Error(G);
              }
              const { relay: a, controller: u, namespaces: f, expiry: I } = o;
              if (!(0, S.Z2)(a)) {
                const { message: G } = (0, S.Z7)(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(G);
              }
              const N = (0, S.Dd)(u, "onSessionSettleRequest()");
              if (N) throw new Error(N.message);
              const z = (0, S.in)(f, "onSessionSettleRequest()");
              if (z) throw new Error(z.message);
              if ((0, S.Bw)(I)) {
                const { message: G } = (0, S.Z7)(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(G);
              }
            }),
            (this.isValidUpdate = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `update() params: ${a}`
                  );
                  throw new Error(G);
                }
                const { topic: u, namespaces: f } = a;
                yield t.isValidSessionTopic(u);
                const I = t.client.session.get(u),
                  N = (0, S.in)(f, "update()");
                if (N) throw new Error(N.message);
                const z = (0, S.rF)(I.requiredNamespaces, f, "update()");
                if (z) throw new Error(z.message);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidExtend = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: f } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `extend() params: ${a}`
                  );
                  throw new Error(f);
                }
                const { topic: u } = a;
                yield t.isValidSessionTopic(u);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidRequest = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `request() params: ${a}`
                  );
                  throw new Error(G);
                }
                const { topic: u, request: f, chainId: I, expiry: N } = a;
                yield t.isValidSessionTopic(u);
                const { namespaces: z } = t.client.session.get(u);
                if (!(0, S.p8)(z, I)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `request() chainId: ${I}`
                  );
                  throw new Error(G);
                }
                if (!(0, S.hH)(f)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `request() ${JSON.stringify(f)}`
                  );
                  throw new Error(G);
                }
                if (!(0, S.al)(z, I, f.method)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `request() method: ${f.method}`
                  );
                  throw new Error(G);
                }
                if (N && !(0, S.ON)(N, ua)) {
                  const { message: G } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `request() expiry: ${N}. Expiry must be a number (in seconds) between ${ua.min} and ${ua.max}`
                  );
                  throw new Error(G);
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidRespond = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `respond() params: ${a}`
                  );
                  throw new Error(I);
                }
                const { topic: u, response: f } = a;
                if ((yield t.isValidSessionTopic(u), !(0, S.JT)(f))) {
                  const { message: I } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `respond() response: ${JSON.stringify(f)}`
                  );
                  throw new Error(I);
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidPing = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: f } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `ping() params: ${a}`
                  );
                  throw new Error(f);
                }
                const { topic: u } = a;
                yield t.isValidSessionOrPairingTopic(u);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidEmit = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: z } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `emit() params: ${a}`
                  );
                  throw new Error(z);
                }
                const { topic: u, event: f, chainId: I } = a;
                yield t.isValidSessionTopic(u);
                const { namespaces: N } = t.client.session.get(u);
                if (!(0, S.p8)(N, I)) {
                  const { message: z } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `emit() chainId: ${I}`
                  );
                  throw new Error(z);
                }
                if (!(0, S.nf)(f)) {
                  const { message: z } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `emit() event: ${JSON.stringify(f)}`
                  );
                  throw new Error(z);
                }
                if (!(0, S.sI)(N, I, f.name)) {
                  const { message: z } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `emit() event: ${JSON.stringify(f)}`
                  );
                  throw new Error(z);
                }
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.isValidDisconnect = (function () {
              var o = (0, m.Z)(function* (a) {
                if (!(0, S.EJ)(a)) {
                  const { message: f } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `disconnect() params: ${a}`
                  );
                  throw new Error(f);
                }
                const { topic: u } = a;
                yield t.isValidSessionOrPairingTopic(u);
              });
              return function (a) {
                return o.apply(this, arguments);
              };
            })()),
            (this.getVerifyContext = (function () {
              var o = (0, m.Z)(function* (a, u) {
                const f = {
                  verified: {
                    verifyUrl: u.verifyUrl || As,
                    validation: "UNKNOWN",
                    origin: u.url || "",
                  },
                };
                try {
                  const I = yield t.client.core.verify.resolve({
                    attestationId: a,
                    verifyUrl: u.verifyUrl,
                  });
                  I &&
                    ((f.verified.origin = I.origin),
                    (f.verified.isScam = I.isScam),
                    (f.verified.validation =
                      I.origin === new URL(u.url).origin
                        ? "VALID"
                        : "INVALID"));
                } catch (I) {
                  t.client.logger.info(I);
                }
                return (
                  t.client.logger.info(`Verify context: ${JSON.stringify(f)}`),
                  f
                );
              });
              return function (a, u) {
                return o.apply(this, arguments);
              };
            })()),
            (this.validateSessionProps = (o, a) => {
              Object.values(o).forEach((u) => {
                if (!(0, S.M_)(u, !1)) {
                  const { message: f } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `${a} must be in Record<string, string> format. Received: ${JSON.stringify(
                      u
                    )}`
                  );
                  throw new Error(f);
                }
              });
            });
        }
        isInitialized() {
          var n = this;
          return (0, m.Z)(function* () {
            if (!n.initialized) {
              const { message: t } = (0, S.Z7)("NOT_INITIALIZED", n.name);
              throw new Error(t);
            }
            yield n.client.core.relayer.confirmOnlineStateOrThrow();
          })();
        }
        registerRelayerEvents() {
          var n = this;
          this.client.core.relayer.on(
            "relayer_message",
            (function () {
              var t = (0, m.Z)(function* (o) {
                const { topic: a, message: u } = o;
                if (
                  n.ignoredPayloadTypes.includes(
                    n.client.core.crypto.getPayloadType(u)
                  )
                )
                  return;
                const f = yield n.client.core.crypto.decode(a, u);
                try {
                  ji(f)
                    ? (n.client.core.history.set(a, f),
                      n.onRelayEventRequest({ topic: a, payload: f }))
                    : hi(f)
                    ? (yield n.client.core.history.resolve(f),
                      yield n.onRelayEventResponse({ topic: a, payload: f }),
                      n.client.core.history.delete(a, f.id))
                    : n.onRelayEventUnknownPayload({ topic: a, payload: f });
                } catch (I) {
                  n.client.logger.error(I);
                }
              });
              return function (o) {
                return t.apply(this, arguments);
              };
            })()
          );
        }
        registerExpirerEvents() {
          var n = this;
          this.client.core.expirer.on(
            $r_expired,
            (function () {
              var t = (0, m.Z)(function* (o) {
                const { topic: a, id: u } = (0, S.iP)(o.target);
                if (u && n.client.pendingRequest.keys.includes(u))
                  return yield n.deletePendingSessionRequest(
                    u,
                    (0, S.Z7)("EXPIRED"),
                    !0
                  );
                a
                  ? n.client.session.keys.includes(a) &&
                    (yield n.deleteSession(a, !0),
                    n.client.events.emit("session_expire", { topic: a }))
                  : u &&
                    (yield n.deleteProposal(u, !0),
                    n.client.events.emit("proposal_expire", { id: u }));
              });
              return function (o) {
                return t.apply(this, arguments);
              };
            })()
          );
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on("pairing_create", (n) =>
            this.onPairingCreated(n)
          );
        }
        isValidPairingTopic(n) {
          if (!(0, S.M_)(n, !1)) {
            const { message: t } = (0, S.Z7)(
              "MISSING_OR_INVALID",
              `pairing topic should be a string: ${n}`
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(n)) {
            const { message: t } = (0, S.Z7)(
              "NO_MATCHING_KEY",
              `pairing topic doesn't exist: ${n}`
            );
            throw new Error(t);
          }
          if ((0, S.Bw)(this.client.core.pairing.pairings.get(n).expiry)) {
            const { message: t } = (0, S.Z7)("EXPIRED", `pairing topic: ${n}`);
            throw new Error(t);
          }
        }
        isValidSessionTopic(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!(0, S.M_)(n, !1)) {
              const { message: o } = (0, S.Z7)(
                "MISSING_OR_INVALID",
                `session topic should be a string: ${n}`
              );
              throw new Error(o);
            }
            if (!t.client.session.keys.includes(n)) {
              const { message: o } = (0, S.Z7)(
                "NO_MATCHING_KEY",
                `session topic doesn't exist: ${n}`
              );
              throw new Error(o);
            }
            if ((0, S.Bw)(t.client.session.get(n).expiry)) {
              yield t.deleteSession(n);
              const { message: o } = (0, S.Z7)(
                "EXPIRED",
                `session topic: ${n}`
              );
              throw new Error(o);
            }
          })();
        }
        isValidSessionOrPairingTopic(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (t.client.session.keys.includes(n))
              yield t.isValidSessionTopic(n);
            else {
              if (!t.client.core.pairing.pairings.keys.includes(n)) {
                if ((0, S.M_)(n, !1)) {
                  const { message: o } = (0, S.Z7)(
                    "NO_MATCHING_KEY",
                    `session or pairing topic doesn't exist: ${n}`
                  );
                  throw new Error(o);
                }
                {
                  const { message: o } = (0, S.Z7)(
                    "MISSING_OR_INVALID",
                    `session or pairing topic should be a string: ${n}`
                  );
                  throw new Error(o);
                }
              }
              t.isValidPairingTopic(n);
            }
          })();
        }
        isValidProposalId(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!(0, S.Q0)(n)) {
              const { message: o } = (0, S.Z7)(
                "MISSING_OR_INVALID",
                `proposal id should be a number: ${n}`
              );
              throw new Error(o);
            }
            if (!t.client.proposal.keys.includes(n)) {
              const { message: o } = (0, S.Z7)(
                "NO_MATCHING_KEY",
                `proposal id doesn't exist: ${n}`
              );
              throw new Error(o);
            }
            if ((0, S.Bw)(t.client.proposal.get(n).expiry)) {
              yield t.deleteProposal(n);
              const { message: o } = (0, S.Z7)("EXPIRED", `proposal id: ${n}`);
              throw new Error(o);
            }
          })();
        }
      }
      class ap extends Ts {
        constructor(n, t) {
          super(n, t, "proposal", aa), (this.core = n), (this.logger = t);
        }
      }
      class cp extends Ts {
        constructor(n, t) {
          super(n, t, "session", aa), (this.core = n), (this.logger = t);
        }
      }
      class up extends Ts {
        constructor(n, t) {
          super(n, t, "request", aa, (o) => o.id),
            (this.core = n),
            (this.logger = t);
        }
      }
      class la extends K {
        constructor(n) {
          var t;
          super(n),
            (t = this),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = "client"),
            (this.events = new ie.EventEmitter()),
            (this.on = (a, u) => this.events.on(a, u)),
            (this.once = (a, u) => this.events.once(a, u)),
            (this.off = (a, u) => this.events.off(a, u)),
            (this.removeListener = (a, u) => this.events.removeListener(a, u)),
            (this.removeAllListeners = (a) =>
              this.events.removeAllListeners(a)),
            (this.connect = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.connect(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.pair = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.pair(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.approve = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.approve(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.reject = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.reject(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.update = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.update(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.extend = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.extend(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.request = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.request(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.respond = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.respond(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.ping = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.ping(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.emit = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.emit(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.disconnect = (function () {
              var a = (0, m.Z)(function* (u) {
                try {
                  return yield t.engine.disconnect(u);
                } catch (f) {
                  throw (t.logger.error(f.message), f);
                }
              });
              return function (u) {
                return a.apply(this, arguments);
              };
            })()),
            (this.find = (a) => {
              try {
                return this.engine.find(a);
              } catch (u) {
                throw (this.logger.error(u.message), u);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (a) {
                throw (this.logger.error(a.message), a);
              }
            }),
            (this.name = n?.name || "client"),
            (this.metadata = n?.metadata || (0, S.D)());
          const o =
            typeof n?.logger < "u" && "string" != typeof n?.logger
              ? n.logger
              : (0, fe.pino)(
                  (0, fe.getDefaultLoggerOptions)({
                    level: n?.logger || "error",
                  })
                );
          (this.core = n?.core || new Wd(n)),
            (this.logger = (0, fe.generateChildLogger)(o, this.name)),
            (this.session = new cp(this.core, this.logger)),
            (this.proposal = new ap(this.core, this.logger)),
            (this.pendingRequest = new up(this.core, this.logger)),
            (this.engine = new op(this));
        }
        static init(n) {
          return (0, m.Z)(function* () {
            const t = new la(n);
            return yield t.initialize(), t;
          })();
        }
        get context() {
          return (0, fe.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        initialize() {
          var n = this;
          return (0, m.Z)(function* () {
            n.logger.trace("Initialized");
            try {
              yield n.core.start(),
                yield n.session.init(),
                yield n.proposal.init(),
                yield n.pendingRequest.init(),
                yield n.engine.init(),
                n.core.verify.init({ verifyUrl: n.metadata.verifyUrl }),
                n.logger.info("SignClient Initialization Success");
            } catch (t) {
              throw (
                (n.logger.info("SignClient Initialization Failure"),
                n.logger.error(t.message),
                t)
              );
            }
          })();
        }
      }
      var lp = W(32055),
        Su = W.n(lp);
      const Pu = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class Ru {
        constructor(n, t = !1) {
          if (
            ((this.url = n),
            (this.disableProviderPing = t),
            (this.events = new ie.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !ps(n))
          )
            throw new Error(
              `Provided URL is not compatible with HTTP connection: ${n}`
            );
          (this.url = n), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(n, t) {
          this.events.on(n, t);
        }
        once(n, t) {
          this.events.once(n, t);
        }
        off(n, t) {
          this.events.off(n, t);
        }
        removeListener(n, t) {
          this.events.removeListener(n, t);
        }
        open(n = this.url) {
          var t = this;
          return (0, m.Z)(function* () {
            yield t.register(n);
          })();
        }
        close() {
          var n = this;
          return (0, m.Z)(function* () {
            if (!n.isAvailable) throw new Error("Connection already closed");
            n.onClose();
          })();
        }
        send(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            o.isAvailable || (yield o.register());
            try {
              const a = v(n),
                f = yield (yield Su()(
                  o.url,
                  Object.assign(Object.assign({}, Pu), { body: a })
                )).json();
              o.onPayload({ data: f });
            } catch (a) {
              o.onError(n.id, a);
            }
          })();
        }
        register(n = this.url) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!ps(n))
              throw new Error(
                `Provided URL is not compatible with HTTP connection: ${n}`
              );
            if (t.registering) {
              const o = t.events.getMaxListeners();
              return (
                (t.events.listenerCount("register_error") >= o ||
                  t.events.listenerCount("open") >= o) &&
                  t.events.setMaxListeners(o + 1),
                new Promise((a, u) => {
                  t.events.once("register_error", (f) => {
                    t.resetMaxListeners(), u(f);
                  }),
                    t.events.once("open", () => {
                      if ((t.resetMaxListeners(), typeof t.isAvailable > "u"))
                        return u(
                          new Error("HTTP connection is missing or invalid")
                        );
                      a();
                    });
                })
              );
            }
            (t.url = n), (t.registering = !0);
            try {
              if (!t.disableProviderPing) {
                const o = v({
                  id: 1,
                  jsonrpc: "2.0",
                  method: "test",
                  params: [],
                });
                yield Su()(
                  n,
                  Object.assign(Object.assign({}, Pu), { body: o })
                );
              }
              t.onOpen();
            } catch (o) {
              const a = t.parseError(o);
              throw (t.events.emit("register_error", a), t.onClose(), a);
            }
          })();
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(n) {
          if (typeof n.data > "u") return;
          const t = "string" == typeof n.data ? P(n.data) : n.data;
          this.events.emit("payload", t);
        }
        onError(n, t) {
          const o = this.parseError(t),
            u = bt(n, o.message || o.toString());
          this.events.emit("payload", u);
        }
        parseError(n, t = this.url) {
          return vt(n, t, "HTTP");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      const _i = Ru,
        Tu = "wc@2:universal_provider:";
      var y,
        n,
        Hi =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof global < "u"
            ? global
            : typeof self < "u"
            ? self
            : {},
        fa = { exports: {} };
      (y = fa),
        (n = fa.exports),
        function () {
          var t,
            f = "Expected a function",
            N = "__lodash_hash_undefined__",
            G = "__lodash_placeholder__",
            ri = 1 / 0,
            qn = 9007199254740991,
            vn = 4294967295,
            ig = [
              ["ary", 128],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", 16],
              ["flip", 512],
              ["partial", 32],
              ["partialRight", 64],
              ["rearg", 256],
            ],
            mi = "[object Arguments]",
            Us = "[object Array]",
            Vi = "[object Boolean]",
            ki = "[object Date]",
            qs = "[object Error]",
            zs = "[object Function]",
            Bu = "[object GeneratorFunction]",
            rn = "[object Map]",
            Ki = "[object Number]",
            Pn = "[object Object]",
            Vu = "[object Promise]",
            Gi = "[object RegExp]",
            nn = "[object Set]",
            Wi = "[object String]",
            $s = "[object Symbol]",
            Ji = "[object WeakMap]",
            Qi = "[object ArrayBuffer]",
            bi = "[object DataView]",
            _a = "[object Float32Array]",
            va = "[object Float64Array]",
            ma = "[object Int8Array]",
            ba = "[object Int16Array]",
            wa = "[object Int32Array]",
            xa = "[object Uint8Array]",
            Ea = "[object Uint8ClampedArray]",
            Ia = "[object Uint16Array]",
            Sa = "[object Uint32Array]",
            fg = /\b__p \+= '';/g,
            hg = /\b(__p \+=) '' \+/g,
            dg = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            ku = /&(?:amp|lt|gt|quot|#39);/g,
            Ku = /[&<>"']/g,
            pg = RegExp(ku.source),
            gg = RegExp(Ku.source),
            yg = /<%-([\s\S]+?)%>/g,
            _g = /<%([\s\S]+?)%>/g,
            Gu = /<%=([\s\S]+?)%>/g,
            vg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            mg = /^\w*$/,
            bg =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Pa = /[\\^$.*+?()[\]{}|]/g,
            wg = RegExp(Pa.source),
            Oa = /^\s+/,
            xg = /\s/,
            Eg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Ig = /\{\n\/\* \[wrapped with (.+)\] \*/,
            Sg = /,? & /,
            Pg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Og = /[()=,{}\[\]\/\s]/,
            Rg = /\\(\\)?/g,
            Ag = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            Wu = /\w*$/,
            Tg = /^[-+]0x[0-9a-f]+$/i,
            Cg = /^0b[01]+$/i,
            Dg = /^\[object .+?Constructor\]$/,
            Ng = /^0o[0-7]+$/i,
            Fg = /^(?:0|[1-9]\d*)$/,
            jg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Hs = /($^)/,
            Lg = /['\n\r\u2028\u2029\\]/g,
            Bs = "\\ud800-\\udfff",
            Ju = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Qu = "\\u2700-\\u27bf",
            Yu = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Xu = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            el = "\\ufe0e\\ufe0f",
            tl =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Bg = "[" + Bs + "]",
            rl = "[" + tl + "]",
            Vs = "[" + Ju + "]",
            nl = "\\d+",
            Vg = "[" + Qu + "]",
            il = "[" + Yu + "]",
            sl = "[^" + Bs + tl + nl + Qu + Yu + Xu + "]",
            Aa = "\\ud83c[\\udffb-\\udfff]",
            ol = "[^" + Bs + "]",
            Ta = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Ca = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            wi = "[" + Xu + "]",
            cl = "(?:" + il + "|" + sl + ")",
            Kg = "(?:" + wi + "|" + sl + ")",
            ul = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
            ll = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
            fl = "(?:" + Vs + "|" + Aa + ")?",
            hl = "[" + el + "]?",
            dl =
              hl +
              fl +
              "(?:\\u200d(?:" +
              [ol, Ta, Ca].join("|") +
              ")" +
              hl +
              fl +
              ")*",
            Qg = "(?:" + [Vg, Ta, Ca].join("|") + ")" + dl,
            Yg = "(?:" + [ol + Vs + "?", Vs, Ta, Ca, Bg].join("|") + ")",
            Xg = RegExp("['\u2019]", "g"),
            ey = RegExp(Vs, "g"),
            Da = RegExp(Aa + "(?=" + Aa + ")|" + Yg + dl, "g"),
            ty = RegExp(
              [
                wi +
                  "?" +
                  il +
                  "+" +
                  ul +
                  "(?=" +
                  [rl, wi, "$"].join("|") +
                  ")",
                Kg + "+" + ll + "(?=" + [rl, wi + cl, "$"].join("|") + ")",
                wi + "?" + cl + "+" + ul,
                wi + "+" + ll,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                nl,
                Qg,
              ].join("|"),
              "g"
            ),
            ry = RegExp("[\\u200d" + Bs + Ju + el + "]"),
            ny =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            iy = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            sy = -1,
            Et = {};
          (Et[_a] =
            Et[va] =
            Et[ma] =
            Et[ba] =
            Et[wa] =
            Et[xa] =
            Et[Ea] =
            Et[Ia] =
            Et[Sa] =
              !0),
            (Et[mi] =
              Et[Us] =
              Et[Qi] =
              Et[Vi] =
              Et[bi] =
              Et[ki] =
              Et[qs] =
              Et[zs] =
              Et[rn] =
              Et[Ki] =
              Et[Pn] =
              Et[Gi] =
              Et[nn] =
              Et[Wi] =
              Et[Ji] =
                !1);
          var yt = {};
          (yt[mi] =
            yt[Us] =
            yt[Qi] =
            yt[bi] =
            yt[Vi] =
            yt[ki] =
            yt[_a] =
            yt[va] =
            yt[ma] =
            yt[ba] =
            yt[wa] =
            yt[rn] =
            yt[Ki] =
            yt[Pn] =
            yt[Gi] =
            yt[nn] =
            yt[Wi] =
            yt[$s] =
            yt[xa] =
            yt[Ea] =
            yt[Ia] =
            yt[Sa] =
              !0),
            (yt[qs] = yt[zs] = yt[Ji] = !1);
          var uy = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            ly = parseFloat,
            fy = parseInt,
            pl = "object" == typeof Hi && Hi && Hi.Object === Object && Hi,
            hy =
              "object" == typeof self && self && self.Object === Object && self,
            hr = pl || hy || Function("return this")(),
            Na = n && !n.nodeType && n,
            ni = Na && y && !y.nodeType && y,
            gl = ni && ni.exports === Na,
            Fa = gl && pl.process,
            Hr = (function () {
              try {
                return (
                  (ni && ni.require && ni.require("util").types) ||
                  (Fa && Fa.binding && Fa.binding("util"))
                );
              } catch {}
            })(),
            yl = Hr && Hr.isArrayBuffer,
            _l = Hr && Hr.isDate,
            vl = Hr && Hr.isMap,
            ml = Hr && Hr.isRegExp,
            bl = Hr && Hr.isSet,
            wl = Hr && Hr.isTypedArray;
          function jr(j, k, $) {
            switch ($.length) {
              case 0:
                return j.call(k);
              case 1:
                return j.call(k, $[0]);
              case 2:
                return j.call(k, $[0], $[1]);
              case 3:
                return j.call(k, $[0], $[1], $[2]);
            }
            return j.apply(k, $);
          }
          function dy(j, k, $, ge) {
            for (var De = -1, Ye = null == j ? 0 : j.length; ++De < Ye; ) {
              var tr = j[De];
              k(ge, tr, $(tr), j);
            }
            return ge;
          }
          function Br(j, k) {
            for (
              var $ = -1, ge = null == j ? 0 : j.length;
              ++$ < ge && !1 !== k(j[$], $, j);

            );
            return j;
          }
          function py(j, k) {
            for (
              var $ = null == j ? 0 : j.length;
              $-- && !1 !== k(j[$], $, j);

            );
            return j;
          }
          function xl(j, k) {
            for (var $ = -1, ge = null == j ? 0 : j.length; ++$ < ge; )
              if (!k(j[$], $, j)) return !1;
            return !0;
          }
          function zn(j, k) {
            for (
              var $ = -1, ge = null == j ? 0 : j.length, De = 0, Ye = [];
              ++$ < ge;

            ) {
              var tr = j[$];
              k(tr, $, j) && (Ye[De++] = tr);
            }
            return Ye;
          }
          function ks(j, k) {
            return !(null == j || !j.length) && xi(j, k, 0) > -1;
          }
          function ja(j, k, $) {
            for (var ge = -1, De = null == j ? 0 : j.length; ++ge < De; )
              if ($(k, j[ge])) return !0;
            return !1;
          }
          function St(j, k) {
            for (
              var $ = -1, ge = null == j ? 0 : j.length, De = Array(ge);
              ++$ < ge;

            )
              De[$] = k(j[$], $, j);
            return De;
          }
          function $n(j, k) {
            for (var $ = -1, ge = k.length, De = j.length; ++$ < ge; )
              j[De + $] = k[$];
            return j;
          }
          function La(j, k, $, ge) {
            var De = -1,
              Ye = null == j ? 0 : j.length;
            for (ge && Ye && ($ = j[++De]); ++De < Ye; ) $ = k($, j[De], De, j);
            return $;
          }
          function gy(j, k, $, ge) {
            var De = null == j ? 0 : j.length;
            for (ge && De && ($ = j[--De]); De--; ) $ = k($, j[De], De, j);
            return $;
          }
          function Ma(j, k) {
            for (var $ = -1, ge = null == j ? 0 : j.length; ++$ < ge; )
              if (k(j[$], $, j)) return !0;
            return !1;
          }
          var yy = Za("length");
          function El(j, k, $) {
            var ge;
            return (
              $(j, function (De, Ye, tr) {
                if (k(De, Ye, tr)) return (ge = Ye), !1;
              }),
              ge
            );
          }
          function Ks(j, k, $, ge) {
            for (
              var De = j.length, Ye = $ + (ge ? 1 : -1);
              ge ? Ye-- : ++Ye < De;

            )
              if (k(j[Ye], Ye, j)) return Ye;
            return -1;
          }
          function xi(j, k, $) {
            return k == k
              ? (function Ty(j, k, $) {
                  for (var ge = $ - 1, De = j.length; ++ge < De; )
                    if (j[ge] === k) return ge;
                  return -1;
                })(j, k, $)
              : Ks(j, Il, $);
          }
          function my(j, k, $, ge) {
            for (var De = $ - 1, Ye = j.length; ++De < Ye; )
              if (ge(j[De], k)) return De;
            return -1;
          }
          function Il(j) {
            return j != j;
          }
          function Sl(j, k) {
            var $ = null == j ? 0 : j.length;
            return $ ? qa(j, k) / $ : NaN;
          }
          function Za(j) {
            return function (k) {
              return null == k ? t : k[j];
            };
          }
          function Ua(j) {
            return function (k) {
              return null == j ? t : j[k];
            };
          }
          function Pl(j, k, $, ge, De) {
            return (
              De(j, function (Ye, tr, ut) {
                $ = ge ? ((ge = !1), Ye) : k($, Ye, tr, ut);
              }),
              $
            );
          }
          function qa(j, k) {
            for (var $, ge = -1, De = j.length; ++ge < De; ) {
              var Ye = k(j[ge]);
              Ye !== t && ($ = $ === t ? Ye : $ + Ye);
            }
            return $;
          }
          function za(j, k) {
            for (var $ = -1, ge = Array(j); ++$ < j; ) ge[$] = k($);
            return ge;
          }
          function Ol(j) {
            return j && j.slice(0, Cl(j) + 1).replace(Oa, "");
          }
          function Lr(j) {
            return function (k) {
              return j(k);
            };
          }
          function $a(j, k) {
            return St(k, function ($) {
              return j[$];
            });
          }
          function Yi(j, k) {
            return j.has(k);
          }
          function Rl(j, k) {
            for (var $ = -1, ge = j.length; ++$ < ge && xi(k, j[$], 0) > -1; );
            return $;
          }
          function Al(j, k) {
            for (var $ = j.length; $-- && xi(k, j[$], 0) > -1; );
            return $;
          }
          var Ey = Ua({
              À: "A",
              Á: "A",
              Â: "A",
              Ã: "A",
              Ä: "A",
              Å: "A",
              à: "a",
              á: "a",
              â: "a",
              ã: "a",
              ä: "a",
              å: "a",
              Ç: "C",
              ç: "c",
              Ð: "D",
              ð: "d",
              È: "E",
              É: "E",
              Ê: "E",
              Ë: "E",
              è: "e",
              é: "e",
              ê: "e",
              ë: "e",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ï: "I",
              ì: "i",
              í: "i",
              î: "i",
              ï: "i",
              Ñ: "N",
              ñ: "n",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Õ: "O",
              Ö: "O",
              Ø: "O",
              ò: "o",
              ó: "o",
              ô: "o",
              õ: "o",
              ö: "o",
              ø: "o",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ü: "U",
              ù: "u",
              ú: "u",
              û: "u",
              ü: "u",
              Ý: "Y",
              ý: "y",
              ÿ: "y",
              Æ: "Ae",
              æ: "ae",
              Þ: "Th",
              þ: "th",
              ß: "ss",
              Ā: "A",
              Ă: "A",
              Ą: "A",
              ā: "a",
              ă: "a",
              ą: "a",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              Ď: "D",
              Đ: "D",
              ď: "d",
              đ: "d",
              Ē: "E",
              Ĕ: "E",
              Ė: "E",
              Ę: "E",
              Ě: "E",
              ē: "e",
              ĕ: "e",
              ė: "e",
              ę: "e",
              ě: "e",
              Ĝ: "G",
              Ğ: "G",
              Ġ: "G",
              Ģ: "G",
              ĝ: "g",
              ğ: "g",
              ġ: "g",
              ģ: "g",
              Ĥ: "H",
              Ħ: "H",
              ĥ: "h",
              ħ: "h",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              Į: "I",
              İ: "I",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              į: "i",
              ı: "i",
              Ĵ: "J",
              ĵ: "j",
              Ķ: "K",
              ķ: "k",
              ĸ: "k",
              Ĺ: "L",
              Ļ: "L",
              Ľ: "L",
              Ŀ: "L",
              Ł: "L",
              ĺ: "l",
              ļ: "l",
              ľ: "l",
              ŀ: "l",
              ł: "l",
              Ń: "N",
              Ņ: "N",
              Ň: "N",
              Ŋ: "N",
              ń: "n",
              ņ: "n",
              ň: "n",
              ŋ: "n",
              Ō: "O",
              Ŏ: "O",
              Ő: "O",
              ō: "o",
              ŏ: "o",
              ő: "o",
              Ŕ: "R",
              Ŗ: "R",
              Ř: "R",
              ŕ: "r",
              ŗ: "r",
              ř: "r",
              Ś: "S",
              Ŝ: "S",
              Ş: "S",
              Š: "S",
              ś: "s",
              ŝ: "s",
              ş: "s",
              š: "s",
              Ţ: "T",
              Ť: "T",
              Ŧ: "T",
              ţ: "t",
              ť: "t",
              ŧ: "t",
              Ũ: "U",
              Ū: "U",
              Ŭ: "U",
              Ů: "U",
              Ű: "U",
              Ų: "U",
              ũ: "u",
              ū: "u",
              ŭ: "u",
              ů: "u",
              ű: "u",
              ų: "u",
              Ŵ: "W",
              ŵ: "w",
              Ŷ: "Y",
              ŷ: "y",
              Ÿ: "Y",
              Ź: "Z",
              Ż: "Z",
              Ž: "Z",
              ź: "z",
              ż: "z",
              ž: "z",
              Ĳ: "IJ",
              ĳ: "ij",
              Œ: "Oe",
              œ: "oe",
              ŉ: "'n",
              ſ: "s",
            }),
            Iy = Ua({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function Sy(j) {
            return "\\" + uy[j];
          }
          function Ei(j) {
            return ry.test(j);
          }
          function Ha(j) {
            var k = -1,
              $ = Array(j.size);
            return (
              j.forEach(function (ge, De) {
                $[++k] = [De, ge];
              }),
              $
            );
          }
          function Tl(j, k) {
            return function ($) {
              return j(k($));
            };
          }
          function Hn(j, k) {
            for (var $ = -1, ge = j.length, De = 0, Ye = []; ++$ < ge; ) {
              var tr = j[$];
              (tr === k || tr === G) && ((j[$] = G), (Ye[De++] = $));
            }
            return Ye;
          }
          function Gs(j) {
            var k = -1,
              $ = Array(j.size);
            return (
              j.forEach(function (ge) {
                $[++k] = ge;
              }),
              $
            );
          }
          function Ii(j) {
            return Ei(j)
              ? (function Ny(j) {
                  for (var k = (Da.lastIndex = 0); Da.test(j); ) ++k;
                  return k;
                })(j)
              : yy(j);
          }
          function sn(j) {
            return Ei(j)
              ? (function Fy(j) {
                  return j.match(Da) || [];
                })(j)
              : (function _y(j) {
                  return j.split("");
                })(j);
          }
          function Cl(j) {
            for (var k = j.length; k-- && xg.test(j.charAt(k)); );
            return k;
          }
          var Dy = Ua({
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&quot;": '"',
              "&#39;": "'",
            }),
            Si = (function j(k) {
              var e,
                $ = (k =
                  null == k ? hr : Si.defaults(hr.Object(), k, Si.pick(hr, iy)))
                  .Array,
                ge = k.Date,
                De = k.Error,
                Ye = k.Function,
                tr = k.Math,
                ut = k.Object,
                Ba = k.RegExp,
                My = k.String,
                Vr = k.TypeError,
                Ws = $.prototype,
                Pi = ut.prototype,
                Js = k["__core-js_shared__"],
                Qs = Ye.prototype.toString,
                rt = Pi.hasOwnProperty,
                Uy = 0,
                Dl = (e = /[^.]+$/.exec(
                  (Js && Js.keys && Js.keys.IE_PROTO) || ""
                ))
                  ? "Symbol(src)_1." + e
                  : "",
                Ys = Pi.toString,
                qy = Qs.call(ut),
                zy = hr._,
                $y = Ba(
                  "^" +
                    Qs.call(rt)
                      .replace(Pa, "\\$&")
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                      ) +
                    "$"
                ),
                Xs = gl ? k.Buffer : t,
                Bn = k.Symbol,
                eo = k.Uint8Array,
                Nl = Xs ? Xs.allocUnsafe : t,
                to = Tl(ut.getPrototypeOf, ut),
                Fl = ut.create,
                jl = Pi.propertyIsEnumerable,
                ro = Ws.splice,
                Ll = Bn ? Bn.isConcatSpreadable : t,
                Xi = Bn ? Bn.iterator : t,
                ii = Bn ? Bn.toStringTag : t,
                no = (function () {
                  try {
                    var e = ui(ut, "defineProperty");
                    return e({}, "", {}), e;
                  } catch {}
                })(),
                Hy = k.clearTimeout !== hr.clearTimeout && k.clearTimeout,
                By = ge && ge.now !== hr.Date.now && ge.now,
                Vy = k.setTimeout !== hr.setTimeout && k.setTimeout,
                io = tr.ceil,
                so = tr.floor,
                Va = ut.getOwnPropertySymbols,
                ky = Xs ? Xs.isBuffer : t,
                Ml = k.isFinite,
                Ky = Ws.join,
                Gy = Tl(ut.keys, ut),
                rr = tr.max,
                vr = tr.min,
                Wy = ge.now,
                Jy = k.parseInt,
                Zl = tr.random,
                Qy = Ws.reverse,
                ka = ui(k, "DataView"),
                es = ui(k, "Map"),
                Ka = ui(k, "Promise"),
                Oi = ui(k, "Set"),
                ts = ui(k, "WeakMap"),
                rs = ui(ut, "create"),
                oo = ts && new ts(),
                Ri = {},
                Yy = li(ka),
                Xy = li(es),
                e0 = li(Ka),
                t0 = li(Oi),
                r0 = li(ts),
                ao = Bn ? Bn.prototype : t,
                ns = ao ? ao.valueOf : t,
                Ul = ao ? ao.toString : t;
              function w(e) {
                if (Nt(e) && !Fe(e) && !(e instanceof Be)) {
                  if (e instanceof kr) return e;
                  if (rt.call(e, "__wrapped__")) return zf(e);
                }
                return new kr(e);
              }
              var Ai = (function () {
                function e() {}
                return function (r) {
                  if (!Ct(r)) return {};
                  if (Fl) return Fl(r);
                  e.prototype = r;
                  var s = new e();
                  return (e.prototype = t), s;
                };
              })();
              function co() {}
              function kr(e, r) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__chain__ = !!r),
                  (this.__index__ = 0),
                  (this.__values__ = t);
              }
              function Be(e) {
                (this.__wrapped__ = e),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = vn),
                  (this.__views__ = []);
              }
              function si(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var l = e[r];
                  this.set(l[0], l[1]);
                }
              }
              function On(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var l = e[r];
                  this.set(l[0], l[1]);
                }
              }
              function Rn(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.clear(); ++r < s; ) {
                  var l = e[r];
                  this.set(l[0], l[1]);
                }
              }
              function oi(e) {
                var r = -1,
                  s = null == e ? 0 : e.length;
                for (this.__data__ = new Rn(); ++r < s; ) this.add(e[r]);
              }
              function on(e) {
                var r = (this.__data__ = new On(e));
                this.size = r.size;
              }
              function ql(e, r) {
                var s = Fe(e),
                  l = !s && fi(e),
                  g = !s && !l && Wn(e),
                  E = !s && !l && !g && Ni(e),
                  A = s || l || g || E,
                  T = A ? za(e.length, My) : [],
                  L = T.length;
                for (var Q in e)
                  (r || rt.call(e, Q)) &&
                    (!A ||
                      !(
                        "length" == Q ||
                        (g && ("offset" == Q || "parent" == Q)) ||
                        (E &&
                          ("buffer" == Q ||
                            "byteLength" == Q ||
                            "byteOffset" == Q)) ||
                        Dn(Q, L)
                      )) &&
                    T.push(Q);
                return T;
              }
              function zl(e) {
                var r = e.length;
                return r ? e[ic(0, r - 1)] : t;
              }
              function R0(e, r) {
                return Eo(Rr(e), ai(r, 0, e.length));
              }
              function A0(e) {
                return Eo(Rr(e));
              }
              function Ga(e, r, s) {
                ((s !== t && !an(e[r], s)) || (s === t && !(r in e))) &&
                  An(e, r, s);
              }
              function is(e, r, s) {
                var l = e[r];
                (!rt.call(e, r) || !an(l, s) || (s === t && !(r in e))) &&
                  An(e, r, s);
              }
              function uo(e, r) {
                for (var s = e.length; s--; ) if (an(e[s][0], r)) return s;
                return -1;
              }
              function T0(e, r, s, l) {
                return (
                  Vn(e, function (g, E, A) {
                    r(l, g, s(g), A);
                  }),
                  l
                );
              }
              function $l(e, r) {
                return e && bn(r, cr(r), e);
              }
              function An(e, r, s) {
                "__proto__" == r && no
                  ? no(e, r, {
                      configurable: !0,
                      enumerable: !0,
                      value: s,
                      writable: !0,
                    })
                  : (e[r] = s);
              }
              function Wa(e, r) {
                for (
                  var s = -1, l = r.length, g = $(l), E = null == e;
                  ++s < l;

                )
                  g[s] = E ? t : Ac(e, r[s]);
                return g;
              }
              function ai(e, r, s) {
                return (
                  e == e &&
                    (s !== t && (e = e <= s ? e : s),
                    r !== t && (e = e >= r ? e : r)),
                  e
                );
              }
              function Kr(e, r, s, l, g, E) {
                var A,
                  T = 1 & r,
                  L = 2 & r,
                  Q = 4 & r;
                if ((s && (A = g ? s(e, l, g, E) : s(e)), A !== t)) return A;
                if (!Ct(e)) return e;
                var Y = Fe(e);
                if (Y) {
                  if (
                    ((A = (function m_(e) {
                      var r = e.length,
                        s = new e.constructor(r);
                      return (
                        r &&
                          "string" == typeof e[0] &&
                          rt.call(e, "index") &&
                          ((s.index = e.index), (s.input = e.input)),
                        s
                      );
                    })(e)),
                    !T)
                  )
                    return Rr(e, A);
                } else {
                  var ne = mr(e),
                    he = ne == zs || ne == Bu;
                  if (Wn(e)) return df(e, T);
                  if (ne == Pn || ne == mi || (he && !g)) {
                    if (((A = L || he ? {} : Df(e)), !T))
                      return L
                        ? (function c_(e, r) {
                            return bn(e, Tf(e), r);
                          })(
                            e,
                            (function C0(e, r) {
                              return e && bn(r, Tr(r), e);
                            })(A, e)
                          )
                        : (function a_(e, r) {
                            return bn(e, vc(e), r);
                          })(e, $l(A, e));
                  } else {
                    if (!yt[ne]) return g ? e : {};
                    A = (function b_(e, r, s) {
                      var l = e.constructor;
                      switch (r) {
                        case Qi:
                          return fc(e);
                        case Vi:
                        case ki:
                          return new l(+e);
                        case bi:
                          return (function n_(e, r) {
                            var s = r ? fc(e.buffer) : e.buffer;
                            return new e.constructor(
                              s,
                              e.byteOffset,
                              e.byteLength
                            );
                          })(e, s);
                        case _a:
                        case va:
                        case ma:
                        case ba:
                        case wa:
                        case xa:
                        case Ea:
                        case Ia:
                        case Sa:
                          return pf(e, s);
                        case rn:
                          return new l();
                        case Ki:
                        case Wi:
                          return new l(e);
                        case Gi:
                          return (function i_(e) {
                            var r = new e.constructor(e.source, Wu.exec(e));
                            return (r.lastIndex = e.lastIndex), r;
                          })(e);
                        case nn:
                          return new l();
                        case $s:
                          return (function s_(e) {
                            return ns ? ut(ns.call(e)) : {};
                          })(e);
                      }
                    })(e, ne, T);
                  }
                }
                E || (E = new on());
                var ve = E.get(e);
                if (ve) return ve;
                E.set(e, A),
                  ah(e)
                    ? e.forEach(function (Pe) {
                        A.add(Kr(Pe, r, s, Pe, e, E));
                      })
                    : sh(e) &&
                      e.forEach(function (Pe, $e) {
                        A.set($e, Kr(Pe, r, s, $e, e, E));
                      });
                var Ue = Y ? t : (Q ? (L ? gc : pc) : L ? Tr : cr)(e);
                return (
                  Br(Ue || e, function (Pe, $e) {
                    Ue && (Pe = e[($e = Pe)]),
                      is(A, $e, Kr(Pe, r, s, $e, e, E));
                  }),
                  A
                );
              }
              function Hl(e, r, s) {
                var l = s.length;
                if (null == e) return !l;
                for (e = ut(e); l--; ) {
                  var g = s[l],
                    A = e[g];
                  if ((A === t && !(g in e)) || !(0, r[g])(A)) return !1;
                }
                return !0;
              }
              function Bl(e, r, s) {
                if ("function" != typeof e) throw new Vr(f);
                return fs(function () {
                  e.apply(t, s);
                }, r);
              }
              function ss(e, r, s, l) {
                var g = -1,
                  E = ks,
                  A = !0,
                  T = e.length,
                  L = [],
                  Q = r.length;
                if (!T) return L;
                s && (r = St(r, Lr(s))),
                  l
                    ? ((E = ja), (A = !1))
                    : r.length >= 200 && ((E = Yi), (A = !1), (r = new oi(r)));
                e: for (; ++g < T; ) {
                  var Y = e[g],
                    ne = null == s ? Y : s(Y);
                  if (((Y = l || 0 !== Y ? Y : 0), A && ne == ne)) {
                    for (var he = Q; he--; ) if (r[he] === ne) continue e;
                    L.push(Y);
                  } else E(r, ne, l) || L.push(Y);
                }
                return L;
              }
              (w.templateSettings = {
                escape: yg,
                evaluate: _g,
                interpolate: Gu,
                variable: "",
                imports: { _: w },
              }),
                ((w.prototype = co.prototype).constructor = w),
                ((kr.prototype = Ai(co.prototype)).constructor = kr),
                ((Be.prototype = Ai(co.prototype)).constructor = Be),
                (si.prototype.clear = function o0() {
                  (this.__data__ = rs ? rs(null) : {}), (this.size = 0);
                }),
                (si.prototype.delete = function a0(e) {
                  var r = this.has(e) && delete this.__data__[e];
                  return (this.size -= r ? 1 : 0), r;
                }),
                (si.prototype.get = function c0(e) {
                  var r = this.__data__;
                  if (rs) {
                    var s = r[e];
                    return s === N ? t : s;
                  }
                  return rt.call(r, e) ? r[e] : t;
                }),
                (si.prototype.has = function u0(e) {
                  var r = this.__data__;
                  return rs ? r[e] !== t : rt.call(r, e);
                }),
                (si.prototype.set = function l0(e, r) {
                  var s = this.__data__;
                  return (
                    (this.size += this.has(e) ? 0 : 1),
                    (s[e] = rs && r === t ? N : r),
                    this
                  );
                }),
                (On.prototype.clear = function f0() {
                  (this.__data__ = []), (this.size = 0);
                }),
                (On.prototype.delete = function h0(e) {
                  var r = this.__data__,
                    s = uo(r, e);
                  return !(
                    s < 0 ||
                    (s == r.length - 1 ? r.pop() : ro.call(r, s, 1),
                    --this.size,
                    0)
                  );
                }),
                (On.prototype.get = function d0(e) {
                  var r = this.__data__,
                    s = uo(r, e);
                  return s < 0 ? t : r[s][1];
                }),
                (On.prototype.has = function p0(e) {
                  return uo(this.__data__, e) > -1;
                }),
                (On.prototype.set = function g0(e, r) {
                  var s = this.__data__,
                    l = uo(s, e);
                  return (
                    l < 0 ? (++this.size, s.push([e, r])) : (s[l][1] = r), this
                  );
                }),
                (Rn.prototype.clear = function y0() {
                  (this.size = 0),
                    (this.__data__ = {
                      hash: new si(),
                      map: new (es || On)(),
                      string: new si(),
                    });
                }),
                (Rn.prototype.delete = function _0(e) {
                  var r = xo(this, e).delete(e);
                  return (this.size -= r ? 1 : 0), r;
                }),
                (Rn.prototype.get = function v0(e) {
                  return xo(this, e).get(e);
                }),
                (Rn.prototype.has = function m0(e) {
                  return xo(this, e).has(e);
                }),
                (Rn.prototype.set = function b0(e, r) {
                  var s = xo(this, e),
                    l = s.size;
                  return s.set(e, r), (this.size += s.size == l ? 0 : 1), this;
                }),
                (oi.prototype.add = oi.prototype.push =
                  function w0(e) {
                    return this.__data__.set(e, N), this;
                  }),
                (oi.prototype.has = function x0(e) {
                  return this.__data__.has(e);
                }),
                (on.prototype.clear = function E0() {
                  (this.__data__ = new On()), (this.size = 0);
                }),
                (on.prototype.delete = function I0(e) {
                  var r = this.__data__,
                    s = r.delete(e);
                  return (this.size = r.size), s;
                }),
                (on.prototype.get = function S0(e) {
                  return this.__data__.get(e);
                }),
                (on.prototype.has = function P0(e) {
                  return this.__data__.has(e);
                }),
                (on.prototype.set = function O0(e, r) {
                  var s = this.__data__;
                  if (s instanceof On) {
                    var l = s.__data__;
                    if (!es || l.length < 199)
                      return l.push([e, r]), (this.size = ++s.size), this;
                    s = this.__data__ = new Rn(l);
                  }
                  return s.set(e, r), (this.size = s.size), this;
                });
              var Vn = vf(mn),
                Vl = vf(Qa, !0);
              function N0(e, r) {
                var s = !0;
                return (
                  Vn(e, function (l, g, E) {
                    return (s = !!r(l, g, E));
                  }),
                  s
                );
              }
              function lo(e, r, s) {
                for (var l = -1, g = e.length; ++l < g; ) {
                  var E = e[l],
                    A = r(E);
                  if (null != A && (T === t ? A == A && !Zr(A) : s(A, T)))
                    var T = A,
                      L = E;
                }
                return L;
              }
              function kl(e, r) {
                var s = [];
                return (
                  Vn(e, function (l, g, E) {
                    r(l, g, E) && s.push(l);
                  }),
                  s
                );
              }
              function dr(e, r, s, l, g) {
                var E = -1,
                  A = e.length;
                for (s || (s = x_), g || (g = []); ++E < A; ) {
                  var T = e[E];
                  r > 0 && s(T)
                    ? r > 1
                      ? dr(T, r - 1, s, l, g)
                      : $n(g, T)
                    : l || (g[g.length] = T);
                }
                return g;
              }
              var Ja = mf(),
                Kl = mf(!0);
              function mn(e, r) {
                return e && Ja(e, r, cr);
              }
              function Qa(e, r) {
                return e && Kl(e, r, cr);
              }
              function fo(e, r) {
                return zn(r, function (s) {
                  return Nn(e[s]);
                });
              }
              function ci(e, r) {
                for (var s = 0, l = (r = Kn(r, e)).length; null != e && s < l; )
                  e = e[wn(r[s++])];
                return s && s == l ? e : t;
              }
              function Gl(e, r, s) {
                var l = r(e);
                return Fe(e) ? l : $n(l, s(e));
              }
              function Er(e) {
                return null == e
                  ? e === t
                    ? "[object Undefined]"
                    : "[object Null]"
                  : ii && ii in ut(e)
                  ? (function y_(e) {
                      var r = rt.call(e, ii),
                        s = e[ii];
                      try {
                        e[ii] = t;
                        var l = !0;
                      } catch {}
                      var g = Ys.call(e);
                      return l && (r ? (e[ii] = s) : delete e[ii]), g;
                    })(e)
                  : (function A_(e) {
                      return Ys.call(e);
                    })(e);
              }
              function Ya(e, r) {
                return e > r;
              }
              function j0(e, r) {
                return null != e && rt.call(e, r);
              }
              function L0(e, r) {
                return null != e && r in ut(e);
              }
              function Xa(e, r, s) {
                for (
                  var l = s ? ja : ks,
                    g = e[0].length,
                    E = e.length,
                    A = E,
                    T = $(E),
                    L = 1 / 0,
                    Q = [];
                  A--;

                ) {
                  var Y = e[A];
                  A && r && (Y = St(Y, Lr(r))),
                    (L = vr(Y.length, L)),
                    (T[A] =
                      !s && (r || (g >= 120 && Y.length >= 120))
                        ? new oi(A && Y)
                        : t);
                }
                Y = e[0];
                var ne = -1,
                  he = T[0];
                e: for (; ++ne < g && Q.length < L; ) {
                  var ve = Y[ne],
                    Se = r ? r(ve) : ve;
                  if (
                    ((ve = s || 0 !== ve ? ve : 0),
                    !(he ? Yi(he, Se) : l(Q, Se, s)))
                  ) {
                    for (A = E; --A; ) {
                      var Ue = T[A];
                      if (!(Ue ? Yi(Ue, Se) : l(e[A], Se, s))) continue e;
                    }
                    he && he.push(Se), Q.push(ve);
                  }
                }
                return Q;
              }
              function os(e, r, s) {
                var l = null == (e = Lf(e, (r = Kn(r, e)))) ? e : e[wn(Wr(r))];
                return null == l ? t : jr(l, e, s);
              }
              function Wl(e) {
                return Nt(e) && Er(e) == mi;
              }
              function as(e, r, s, l, g) {
                return (
                  e === r ||
                  (null == e || null == r || (!Nt(e) && !Nt(r))
                    ? e != e && r != r
                    : (function z0(e, r, s, l, g, E) {
                        var A = Fe(e),
                          T = Fe(r),
                          L = A ? Us : mr(e),
                          Q = T ? Us : mr(r),
                          Y = (L = L == mi ? Pn : L) == Pn,
                          ne = (Q = Q == mi ? Pn : Q) == Pn,
                          he = L == Q;
                        if (he && Wn(e)) {
                          if (!Wn(r)) return !1;
                          (A = !0), (Y = !1);
                        }
                        if (he && !Y)
                          return (
                            E || (E = new on()),
                            A || Ni(e)
                              ? Af(e, r, s, l, g, E)
                              : (function p_(e, r, s, l, g, E, A) {
                                  switch (s) {
                                    case bi:
                                      if (
                                        e.byteLength != r.byteLength ||
                                        e.byteOffset != r.byteOffset
                                      )
                                        return !1;
                                      (e = e.buffer), (r = r.buffer);
                                    case Qi:
                                      return !(
                                        e.byteLength != r.byteLength ||
                                        !E(new eo(e), new eo(r))
                                      );
                                    case Vi:
                                    case ki:
                                    case Ki:
                                      return an(+e, +r);
                                    case qs:
                                      return (
                                        e.name == r.name &&
                                        e.message == r.message
                                      );
                                    case Gi:
                                    case Wi:
                                      return e == r + "";
                                    case rn:
                                      var T = Ha;
                                    case nn:
                                      if (
                                        (T || (T = Gs),
                                        e.size != r.size && !(1 & l))
                                      )
                                        return !1;
                                      var Q = A.get(e);
                                      if (Q) return Q == r;
                                      (l |= 2), A.set(e, r);
                                      var Y = Af(T(e), T(r), l, g, E, A);
                                      return A.delete(e), Y;
                                    case $s:
                                      if (ns) return ns.call(e) == ns.call(r);
                                  }
                                  return !1;
                                })(e, r, L, s, l, g, E)
                          );
                        if (!(1 & s)) {
                          var ve = Y && rt.call(e, "__wrapped__"),
                            Se = ne && rt.call(r, "__wrapped__");
                          if (ve || Se) {
                            var Ue = ve ? e.value() : e,
                              Pe = Se ? r.value() : r;
                            return E || (E = new on()), g(Ue, Pe, s, l, E);
                          }
                        }
                        return (
                          !!he &&
                          (E || (E = new on()),
                          (function g_(e, r, s, l, g, E) {
                            var A = 1 & s,
                              T = pc(e),
                              L = T.length;
                            if (L != pc(r).length && !A) return !1;
                            for (var ne = L; ne--; ) {
                              var he = T[ne];
                              if (!(A ? he in r : rt.call(r, he))) return !1;
                            }
                            var ve = E.get(e),
                              Se = E.get(r);
                            if (ve && Se) return ve == r && Se == e;
                            var Ue = !0;
                            E.set(e, r), E.set(r, e);
                            for (var Pe = A; ++ne < L; ) {
                              var $e = e[(he = T[ne])],
                                Ke = r[he];
                              if (l)
                                var Ur = A
                                  ? l(Ke, $e, he, r, e, E)
                                  : l($e, Ke, he, e, r, E);
                              if (
                                !(Ur === t
                                  ? $e === Ke || g($e, Ke, s, l, E)
                                  : Ur)
                              ) {
                                Ue = !1;
                                break;
                              }
                              Pe || (Pe = "constructor" == he);
                            }
                            if (Ue && !Pe) {
                              var Sr = e.constructor,
                                qr = r.constructor;
                              Sr != qr &&
                                "constructor" in e &&
                                "constructor" in r &&
                                !(
                                  "function" == typeof Sr &&
                                  Sr instanceof Sr &&
                                  "function" == typeof qr &&
                                  qr instanceof qr
                                ) &&
                                (Ue = !1);
                            }
                            return E.delete(e), E.delete(r), Ue;
                          })(e, r, s, l, g, E))
                        );
                      })(e, r, s, l, as, g))
                );
              }
              function ec(e, r, s, l) {
                var g = s.length,
                  E = g,
                  A = !l;
                if (null == e) return !E;
                for (e = ut(e); g--; ) {
                  var T = s[g];
                  if (A && T[2] ? T[1] !== e[T[0]] : !(T[0] in e)) return !1;
                }
                for (; ++g < E; ) {
                  var L = (T = s[g])[0],
                    Q = e[L],
                    Y = T[1];
                  if (A && T[2]) {
                    if (Q === t && !(L in e)) return !1;
                  } else {
                    var ne = new on();
                    if (l) var he = l(Q, Y, L, e, r, ne);
                    if (!(he === t ? as(Y, Q, 3, l, ne) : he)) return !1;
                  }
                }
                return !0;
              }
              function Jl(e) {
                return (
                  !(
                    !Ct(e) ||
                    (function I_(e) {
                      return !!Dl && Dl in e;
                    })(e)
                  ) && (Nn(e) ? $y : Dg).test(li(e))
                );
              }
              function Ql(e) {
                return "function" == typeof e
                  ? e
                  : null == e
                  ? Cr
                  : "object" == typeof e
                  ? Fe(e)
                    ? ef(e[0], e[1])
                    : Xl(e)
                  : bh(e);
              }
              function tc(e) {
                if (!ls(e)) return Gy(e);
                var r = [];
                for (var s in ut(e))
                  rt.call(e, s) && "constructor" != s && r.push(s);
                return r;
              }
              function rc(e, r) {
                return e < r;
              }
              function Yl(e, r) {
                var s = -1,
                  l = Ar(e) ? $(e.length) : [];
                return (
                  Vn(e, function (g, E, A) {
                    l[++s] = r(g, E, A);
                  }),
                  l
                );
              }
              function Xl(e) {
                var r = _c(e);
                return 1 == r.length && r[0][2]
                  ? Ff(r[0][0], r[0][1])
                  : function (s) {
                      return s === e || ec(s, e, r);
                    };
              }
              function ef(e, r) {
                return mc(e) && Nf(r)
                  ? Ff(wn(e), r)
                  : function (s) {
                      var l = Ac(s, e);
                      return l === t && l === r ? Tc(s, e) : as(r, l, 3);
                    };
              }
              function ho(e, r, s, l, g) {
                e !== r &&
                  Ja(
                    r,
                    function (E, A) {
                      if ((g || (g = new on()), Ct(E)))
                        !(function K0(e, r, s, l, g, E, A) {
                          var T = wc(e, s),
                            L = wc(r, s),
                            Q = A.get(L);
                          if (Q) Ga(e, s, Q);
                          else {
                            var Y = E ? E(T, L, s + "", e, r, A) : t,
                              ne = Y === t;
                            if (ne) {
                              var he = Fe(L),
                                ve = !he && Wn(L),
                                Se = !he && !ve && Ni(L);
                              (Y = L),
                                he || ve || Se
                                  ? Fe(T)
                                    ? (Y = T)
                                    : Ut(T)
                                    ? (Y = Rr(T))
                                    : ve
                                    ? ((ne = !1), (Y = df(L, !0)))
                                    : Se
                                    ? ((ne = !1), (Y = pf(L, !0)))
                                    : (Y = [])
                                  : hs(L) || fi(L)
                                  ? ((Y = T),
                                    fi(T)
                                      ? (Y = lh(T))
                                      : (!Ct(T) || Nn(T)) && (Y = Df(L)))
                                  : (ne = !1);
                            }
                            ne && (A.set(L, Y), g(Y, L, l, E, A), A.delete(L)),
                              Ga(e, s, Y);
                          }
                        })(e, r, A, s, ho, l, g);
                      else {
                        var T = l ? l(wc(e, A), E, A + "", e, r, g) : t;
                        T === t && (T = E), Ga(e, A, T);
                      }
                    },
                    Tr
                  );
              }
              function tf(e, r) {
                var s = e.length;
                if (s) return Dn((r += r < 0 ? s : 0), s) ? e[r] : t;
              }
              function rf(e, r, s) {
                r = r.length
                  ? St(r, function (E) {
                      return Fe(E)
                        ? function (A) {
                            return ci(A, 1 === E.length ? E[0] : E);
                          }
                        : E;
                    })
                  : [Cr];
                var l = -1;
                return (
                  (r = St(r, Lr(Ie()))),
                  (function by(j, k) {
                    var $ = j.length;
                    for (j.sort(k); $--; ) j[$] = j[$].value;
                    return j;
                  })(
                    Yl(e, function (E, A, T) {
                      return {
                        criteria: St(r, function (Q) {
                          return Q(E);
                        }),
                        index: ++l,
                        value: E,
                      };
                    }),
                    function (E, A) {
                      return (function o_(e, r, s) {
                        for (
                          var l = -1,
                            g = e.criteria,
                            E = r.criteria,
                            A = g.length,
                            T = s.length;
                          ++l < A;

                        ) {
                          var L = gf(g[l], E[l]);
                          if (L)
                            return l >= T ? L : L * ("desc" == s[l] ? -1 : 1);
                        }
                        return e.index - r.index;
                      })(E, A, s);
                    }
                  )
                );
              }
              function nf(e, r, s) {
                for (var l = -1, g = r.length, E = {}; ++l < g; ) {
                  var A = r[l],
                    T = ci(e, A);
                  s(T, A) && cs(E, Kn(A, e), T);
                }
                return E;
              }
              function nc(e, r, s, l) {
                var g = l ? my : xi,
                  E = -1,
                  A = r.length,
                  T = e;
                for (e === r && (r = Rr(r)), s && (T = St(e, Lr(s))); ++E < A; )
                  for (
                    var L = 0, Q = r[E], Y = s ? s(Q) : Q;
                    (L = g(T, Y, L, l)) > -1;

                  )
                    T !== e && ro.call(T, L, 1), ro.call(e, L, 1);
                return e;
              }
              function sf(e, r) {
                for (var s = e ? r.length : 0, l = s - 1; s--; ) {
                  var g = r[s];
                  if (s == l || g !== E) {
                    var E = g;
                    Dn(g) ? ro.call(e, g, 1) : ac(e, g);
                  }
                }
                return e;
              }
              function ic(e, r) {
                return e + so(Zl() * (r - e + 1));
              }
              function sc(e, r) {
                var s = "";
                if (!e || r < 1 || r > qn) return s;
                do {
                  r % 2 && (s += e), (r = so(r / 2)) && (e += e);
                } while (r);
                return s;
              }
              function qe(e, r) {
                return xc(jf(e, r, Cr), e + "");
              }
              function Q0(e) {
                return zl(Fi(e));
              }
              function Y0(e, r) {
                var s = Fi(e);
                return Eo(s, ai(r, 0, s.length));
              }
              function cs(e, r, s, l) {
                if (!Ct(e)) return e;
                for (
                  var g = -1, E = (r = Kn(r, e)).length, A = E - 1, T = e;
                  null != T && ++g < E;

                ) {
                  var L = wn(r[g]),
                    Q = s;
                  if (
                    "__proto__" === L ||
                    "constructor" === L ||
                    "prototype" === L
                  )
                    return e;
                  if (g != A) {
                    var Y = T[L];
                    (Q = l ? l(Y, L, T) : t) === t &&
                      (Q = Ct(Y) ? Y : Dn(r[g + 1]) ? [] : {});
                  }
                  is(T, L, Q), (T = T[L]);
                }
                return e;
              }
              var of = oo
                  ? function (e, r) {
                      return oo.set(e, r), e;
                    }
                  : Cr,
                X0 = no
                  ? function (e, r) {
                      return no(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: Dc(r),
                        writable: !0,
                      });
                    }
                  : Cr;
              function e_(e) {
                return Eo(Fi(e));
              }
              function Gr(e, r, s) {
                var l = -1,
                  g = e.length;
                r < 0 && (r = -r > g ? 0 : g + r),
                  (s = s > g ? g : s) < 0 && (s += g),
                  (g = r > s ? 0 : (s - r) >>> 0),
                  (r >>>= 0);
                for (var E = $(g); ++l < g; ) E[l] = e[l + r];
                return E;
              }
              function t_(e, r) {
                var s;
                return (
                  Vn(e, function (l, g, E) {
                    return !(s = r(l, g, E));
                  }),
                  !!s
                );
              }
              function po(e, r, s) {
                var l = 0,
                  g = null == e ? l : e.length;
                if ("number" == typeof r && r == r && g <= 2147483647) {
                  for (; l < g; ) {
                    var E = (l + g) >>> 1,
                      A = e[E];
                    null !== A && !Zr(A) && (s ? A <= r : A < r)
                      ? (l = E + 1)
                      : (g = E);
                  }
                  return g;
                }
                return oc(e, r, Cr, s);
              }
              function oc(e, r, s, l) {
                var g = 0,
                  E = null == e ? 0 : e.length;
                if (0 === E) return 0;
                for (
                  var A = (r = s(r)) != r,
                    T = null === r,
                    L = Zr(r),
                    Q = r === t;
                  g < E;

                ) {
                  var Y = so((g + E) / 2),
                    ne = s(e[Y]),
                    he = ne !== t,
                    ve = null === ne,
                    Se = ne == ne,
                    Ue = Zr(ne);
                  if (A) var Pe = l || Se;
                  else
                    Pe = Q
                      ? Se && (l || he)
                      : T
                      ? Se && he && (l || !ve)
                      : L
                      ? Se && he && !ve && (l || !Ue)
                      : !ve && !Ue && (l ? ne <= r : ne < r);
                  Pe ? (g = Y + 1) : (E = Y);
                }
                return vr(E, 4294967294);
              }
              function af(e, r) {
                for (var s = -1, l = e.length, g = 0, E = []; ++s < l; ) {
                  var A = e[s],
                    T = r ? r(A) : A;
                  if (!s || !an(T, L)) {
                    var L = T;
                    E[g++] = 0 === A ? 0 : A;
                  }
                }
                return E;
              }
              function cf(e) {
                return "number" == typeof e ? e : Zr(e) ? NaN : +e;
              }
              function Mr(e) {
                if ("string" == typeof e) return e;
                if (Fe(e)) return St(e, Mr) + "";
                if (Zr(e)) return Ul ? Ul.call(e) : "";
                var r = e + "";
                return "0" == r && 1 / e == -ri ? "-0" : r;
              }
              function kn(e, r, s) {
                var l = -1,
                  g = ks,
                  E = e.length,
                  A = !0,
                  T = [],
                  L = T;
                if (s) (A = !1), (g = ja);
                else if (E >= 200) {
                  var Q = r ? null : h_(e);
                  if (Q) return Gs(Q);
                  (A = !1), (g = Yi), (L = new oi());
                } else L = r ? [] : T;
                e: for (; ++l < E; ) {
                  var Y = e[l],
                    ne = r ? r(Y) : Y;
                  if (((Y = s || 0 !== Y ? Y : 0), A && ne == ne)) {
                    for (var he = L.length; he--; )
                      if (L[he] === ne) continue e;
                    r && L.push(ne), T.push(Y);
                  } else g(L, ne, s) || (L !== T && L.push(ne), T.push(Y));
                }
                return T;
              }
              function ac(e, r) {
                return (
                  null == (e = Lf(e, (r = Kn(r, e)))) || delete e[wn(Wr(r))]
                );
              }
              function uf(e, r, s, l) {
                return cs(e, r, s(ci(e, r)), l);
              }
              function go(e, r, s, l) {
                for (
                  var g = e.length, E = l ? g : -1;
                  (l ? E-- : ++E < g) && r(e[E], E, e);

                );
                return s
                  ? Gr(e, l ? 0 : E, l ? E + 1 : g)
                  : Gr(e, l ? E + 1 : 0, l ? g : E);
              }
              function lf(e, r) {
                var s = e;
                return (
                  s instanceof Be && (s = s.value()),
                  La(
                    r,
                    function (l, g) {
                      return g.func.apply(g.thisArg, $n([l], g.args));
                    },
                    s
                  )
                );
              }
              function cc(e, r, s) {
                var l = e.length;
                if (l < 2) return l ? kn(e[0]) : [];
                for (var g = -1, E = $(l); ++g < l; )
                  for (var A = e[g], T = -1; ++T < l; )
                    T != g && (E[g] = ss(E[g] || A, e[T], r, s));
                return kn(dr(E, 1), r, s);
              }
              function ff(e, r, s) {
                for (var l = -1, g = e.length, E = r.length, A = {}; ++l < g; )
                  s(A, e[l], l < E ? r[l] : t);
                return A;
              }
              function uc(e) {
                return Ut(e) ? e : [];
              }
              function lc(e) {
                return "function" == typeof e ? e : Cr;
              }
              function Kn(e, r) {
                return Fe(e) ? e : mc(e, r) ? [e] : qf(et(e));
              }
              var r_ = qe;
              function Gn(e, r, s) {
                var l = e.length;
                return (s = s === t ? l : s), !r && s >= l ? e : Gr(e, r, s);
              }
              var hf =
                Hy ||
                function (e) {
                  return hr.clearTimeout(e);
                };
              function df(e, r) {
                if (r) return e.slice();
                var s = e.length,
                  l = Nl ? Nl(s) : new e.constructor(s);
                return e.copy(l), l;
              }
              function fc(e) {
                var r = new e.constructor(e.byteLength);
                return new eo(r).set(new eo(e)), r;
              }
              function pf(e, r) {
                var s = r ? fc(e.buffer) : e.buffer;
                return new e.constructor(s, e.byteOffset, e.length);
              }
              function gf(e, r) {
                if (e !== r) {
                  var s = e !== t,
                    l = null === e,
                    g = e == e,
                    E = Zr(e),
                    A = r !== t,
                    T = null === r,
                    L = r == r,
                    Q = Zr(r);
                  if (
                    (!T && !Q && !E && e > r) ||
                    (E && A && L && !T && !Q) ||
                    (l && A && L) ||
                    (!s && L) ||
                    !g
                  )
                    return 1;
                  if (
                    (!l && !E && !Q && e < r) ||
                    (Q && s && g && !l && !E) ||
                    (T && s && g) ||
                    (!A && g) ||
                    !L
                  )
                    return -1;
                }
                return 0;
              }
              function yf(e, r, s, l) {
                for (
                  var g = -1,
                    E = e.length,
                    A = s.length,
                    T = -1,
                    L = r.length,
                    Q = rr(E - A, 0),
                    Y = $(L + Q),
                    ne = !l;
                  ++T < L;

                )
                  Y[T] = r[T];
                for (; ++g < A; ) (ne || g < E) && (Y[s[g]] = e[g]);
                for (; Q--; ) Y[T++] = e[g++];
                return Y;
              }
              function _f(e, r, s, l) {
                for (
                  var g = -1,
                    E = e.length,
                    A = -1,
                    T = s.length,
                    L = -1,
                    Q = r.length,
                    Y = rr(E - T, 0),
                    ne = $(Y + Q),
                    he = !l;
                  ++g < Y;

                )
                  ne[g] = e[g];
                for (var ve = g; ++L < Q; ) ne[ve + L] = r[L];
                for (; ++A < T; ) (he || g < E) && (ne[ve + s[A]] = e[g++]);
                return ne;
              }
              function Rr(e, r) {
                var s = -1,
                  l = e.length;
                for (r || (r = $(l)); ++s < l; ) r[s] = e[s];
                return r;
              }
              function bn(e, r, s, l) {
                var g = !s;
                s || (s = {});
                for (var E = -1, A = r.length; ++E < A; ) {
                  var T = r[E],
                    L = l ? l(s[T], e[T], T, s, e) : t;
                  L === t && (L = e[T]), g ? An(s, T, L) : is(s, T, L);
                }
                return s;
              }
              function yo(e, r) {
                return function (s, l) {
                  var g = Fe(s) ? dy : T0,
                    E = r ? r() : {};
                  return g(s, e, Ie(l, 2), E);
                };
              }
              function Ti(e) {
                return qe(function (r, s) {
                  var l = -1,
                    g = s.length,
                    E = g > 1 ? s[g - 1] : t,
                    A = g > 2 ? s[2] : t;
                  for (
                    E = e.length > 3 && "function" == typeof E ? (g--, E) : t,
                      A && Ir(s[0], s[1], A) && ((E = g < 3 ? t : E), (g = 1)),
                      r = ut(r);
                    ++l < g;

                  ) {
                    var T = s[l];
                    T && e(r, T, l, E);
                  }
                  return r;
                });
              }
              function vf(e, r) {
                return function (s, l) {
                  if (null == s) return s;
                  if (!Ar(s)) return e(s, l);
                  for (
                    var g = s.length, E = r ? g : -1, A = ut(s);
                    (r ? E-- : ++E < g) && !1 !== l(A[E], E, A);

                  );
                  return s;
                };
              }
              function mf(e) {
                return function (r, s, l) {
                  for (var g = -1, E = ut(r), A = l(r), T = A.length; T--; ) {
                    var L = A[e ? T : ++g];
                    if (!1 === s(E[L], L, E)) break;
                  }
                  return r;
                };
              }
              function bf(e) {
                return function (r) {
                  var s = Ei((r = et(r))) ? sn(r) : t,
                    l = s ? s[0] : r.charAt(0),
                    g = s ? Gn(s, 1).join("") : r.slice(1);
                  return l[e]() + g;
                };
              }
              function Ci(e) {
                return function (r) {
                  return La(vh(_h(r).replace(Xg, "")), e, "");
                };
              }
              function us(e) {
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return new e();
                    case 1:
                      return new e(r[0]);
                    case 2:
                      return new e(r[0], r[1]);
                    case 3:
                      return new e(r[0], r[1], r[2]);
                    case 4:
                      return new e(r[0], r[1], r[2], r[3]);
                    case 5:
                      return new e(r[0], r[1], r[2], r[3], r[4]);
                    case 6:
                      return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
                    case 7:
                      return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
                  }
                  var s = Ai(e.prototype),
                    l = e.apply(s, r);
                  return Ct(l) ? l : s;
                };
              }
              function wf(e) {
                return function (r, s, l) {
                  var g = ut(r);
                  if (!Ar(r)) {
                    var E = Ie(s, 3);
                    (r = cr(r)),
                      (s = function (T) {
                        return E(g[T], T, g);
                      });
                  }
                  var A = e(r, s, l);
                  return A > -1 ? g[E ? r[A] : A] : t;
                };
              }
              function xf(e) {
                return Cn(function (r) {
                  var s = r.length,
                    l = s,
                    g = kr.prototype.thru;
                  for (e && r.reverse(); l--; ) {
                    var E = r[l];
                    if ("function" != typeof E) throw new Vr(f);
                    if (g && !A && "wrapper" == wo(E)) var A = new kr([], !0);
                  }
                  for (l = A ? l : s; ++l < s; ) {
                    var T = wo((E = r[l])),
                      L = "wrapper" == T ? yc(E) : t;
                    A =
                      L && bc(L[0]) && 424 == L[1] && !L[4].length && 1 == L[9]
                        ? A[wo(L[0])].apply(A, L[3])
                        : 1 == E.length && bc(E)
                        ? A[T]()
                        : A.thru(E);
                  }
                  return function () {
                    var Q = arguments,
                      Y = Q[0];
                    if (A && 1 == Q.length && Fe(Y)) return A.plant(Y).value();
                    for (
                      var ne = 0, he = s ? r[ne].apply(this, Q) : Y;
                      ++ne < s;

                    )
                      he = r[ne].call(this, he);
                    return he;
                  };
                });
              }
              function _o(e, r, s, l, g, E, A, T, L, Q) {
                var Y = 128 & r,
                  ne = 1 & r,
                  he = 2 & r,
                  ve = 24 & r,
                  Se = 512 & r,
                  Ue = he ? t : us(e);
                return function Pe() {
                  for (var $e = arguments.length, Ke = $($e), Ur = $e; Ur--; )
                    Ke[Ur] = arguments[Ur];
                  if (ve)
                    var Sr = Di(Pe),
                      qr = (function xy(j, k) {
                        for (var $ = j.length, ge = 0; $--; )
                          j[$] === k && ++ge;
                        return ge;
                      })(Ke, Sr);
                  if (
                    (l && (Ke = yf(Ke, l, g, ve)),
                    E && (Ke = _f(Ke, E, A, ve)),
                    ($e -= qr),
                    ve && $e < Q)
                  ) {
                    var qt = Hn(Ke, Sr);
                    return Sf(
                      e,
                      r,
                      _o,
                      Pe.placeholder,
                      s,
                      Ke,
                      qt,
                      T,
                      L,
                      Q - $e
                    );
                  }
                  var cn = ne ? s : this,
                    jn = he ? cn[e] : e;
                  return (
                    ($e = Ke.length),
                    T
                      ? (Ke = (function T_(e, r) {
                          for (
                            var s = e.length, l = vr(r.length, s), g = Rr(e);
                            l--;

                          ) {
                            var E = r[l];
                            e[l] = Dn(E, s) ? g[E] : t;
                          }
                          return e;
                        })(Ke, T))
                      : Se && $e > 1 && Ke.reverse(),
                    Y && L < $e && (Ke.length = L),
                    this &&
                      this !== hr &&
                      this instanceof Pe &&
                      (jn = Ue || us(jn)),
                    jn.apply(cn, Ke)
                  );
                };
              }
              function Ef(e, r) {
                return function (s, l) {
                  return (function Z0(e, r, s, l) {
                    return (
                      mn(e, function (g, E, A) {
                        r(l, s(g), E, A);
                      }),
                      l
                    );
                  })(s, e, r(l), {});
                };
              }
              function vo(e, r) {
                return function (s, l) {
                  var g;
                  if (s === t && l === t) return r;
                  if ((s !== t && (g = s), l !== t)) {
                    if (g === t) return l;
                    "string" == typeof s || "string" == typeof l
                      ? ((s = Mr(s)), (l = Mr(l)))
                      : ((s = cf(s)), (l = cf(l))),
                      (g = e(s, l));
                  }
                  return g;
                };
              }
              function hc(e) {
                return Cn(function (r) {
                  return (
                    (r = St(r, Lr(Ie()))),
                    qe(function (s) {
                      var l = this;
                      return e(r, function (g) {
                        return jr(g, l, s);
                      });
                    })
                  );
                });
              }
              function mo(e, r) {
                var s = (r = r === t ? " " : Mr(r)).length;
                if (s < 2) return s ? sc(r, e) : r;
                var l = sc(r, io(e / Ii(r)));
                return Ei(r) ? Gn(sn(l), 0, e).join("") : l.slice(0, e);
              }
              function If(e) {
                return function (r, s, l) {
                  return (
                    l && "number" != typeof l && Ir(r, s, l) && (s = l = t),
                    (r = Fn(r)),
                    s === t ? ((s = r), (r = 0)) : (s = Fn(s)),
                    (function J0(e, r, s, l) {
                      for (
                        var g = -1, E = rr(io((r - e) / (s || 1)), 0), A = $(E);
                        E--;

                      )
                        (A[l ? E : ++g] = e), (e += s);
                      return A;
                    })(r, s, (l = l === t ? (r < s ? 1 : -1) : Fn(l)), e)
                  );
                };
              }
              function bo(e) {
                return function (r, s) {
                  return (
                    ("string" == typeof r && "string" == typeof s) ||
                      ((r = Jr(r)), (s = Jr(s))),
                    e(r, s)
                  );
                };
              }
              function Sf(e, r, s, l, g, E, A, T, L, Q) {
                var Y = 8 & r;
                (r |= Y ? 32 : 64), 4 & (r &= ~(Y ? 64 : 32)) || (r &= -4);
                var Ue = [
                    e,
                    r,
                    g,
                    Y ? E : t,
                    Y ? A : t,
                    Y ? t : E,
                    Y ? t : A,
                    T,
                    L,
                    Q,
                  ],
                  Pe = s.apply(t, Ue);
                return bc(e) && Mf(Pe, Ue), (Pe.placeholder = l), Zf(Pe, e, r);
              }
              function dc(e) {
                var r = tr[e];
                return function (s, l) {
                  if (
                    ((s = Jr(s)), (l = null == l ? 0 : vr(Me(l), 292)) && Ml(s))
                  ) {
                    var g = (et(s) + "e").split("e");
                    return +(
                      (g = (et(r(g[0] + "e" + (+g[1] + l))) + "e").split(
                        "e"
                      ))[0] +
                      "e" +
                      (+g[1] - l)
                    );
                  }
                  return r(s);
                };
              }
              var h_ =
                Oi && 1 / Gs(new Oi([, -0]))[1] == ri
                  ? function (e) {
                      return new Oi(e);
                    }
                  : jc;
              function Pf(e) {
                return function (r) {
                  var s = mr(r);
                  return s == rn
                    ? Ha(r)
                    : s == nn
                    ? (function Ay(j) {
                        var k = -1,
                          $ = Array(j.size);
                        return (
                          j.forEach(function (ge) {
                            $[++k] = [ge, ge];
                          }),
                          $
                        );
                      })(r)
                    : (function wy(j, k) {
                        return St(k, function ($) {
                          return [$, j[$]];
                        });
                      })(r, e(r));
                };
              }
              function Tn(e, r, s, l, g, E, A, T) {
                var L = 2 & r;
                if (!L && "function" != typeof e) throw new Vr(f);
                var Q = l ? l.length : 0;
                if (
                  (Q || ((r &= -97), (l = g = t)),
                  (A = A === t ? A : rr(Me(A), 0)),
                  (T = T === t ? T : Me(T)),
                  (Q -= g ? g.length : 0),
                  64 & r)
                ) {
                  var Y = l,
                    ne = g;
                  l = g = t;
                }
                var he = L ? t : yc(e),
                  ve = [e, r, s, l, g, Y, ne, E, A, T];
                if (
                  (he &&
                    (function O_(e, r) {
                      var s = e[1],
                        l = r[1],
                        g = s | l;
                      if (
                        !(g < 131) &&
                        !(
                          (128 == l && 8 == s) ||
                          (128 == l && 256 == s && e[7].length <= r[8]) ||
                          (384 == l && r[7].length <= r[8] && 8 == s)
                        )
                      )
                        return e;
                      1 & l && ((e[2] = r[2]), (g |= 1 & s ? 0 : 4));
                      var T = r[3];
                      if (T) {
                        var L = e[3];
                        (e[3] = L ? yf(L, T, r[4]) : T),
                          (e[4] = L ? Hn(e[3], G) : r[4]);
                      }
                      (T = r[5]) &&
                        ((e[5] = (L = e[5]) ? _f(L, T, r[6]) : T),
                        (e[6] = L ? Hn(e[5], G) : r[6])),
                        (T = r[7]) && (e[7] = T),
                        128 & l &&
                          (e[8] = null == e[8] ? r[8] : vr(e[8], r[8])),
                        null == e[9] && (e[9] = r[9]),
                        (e[0] = r[0]),
                        (e[1] = g);
                    })(ve, he),
                  (e = ve[0]),
                  (r = ve[1]),
                  (s = ve[2]),
                  (l = ve[3]),
                  (g = ve[4]),
                  !(T = ve[9] =
                    ve[9] === t ? (L ? 0 : e.length) : rr(ve[9] - Q, 0)) &&
                    24 & r &&
                    (r &= -25),
                  r && 1 != r)
                )
                  Se =
                    8 == r || 16 == r
                      ? (function l_(e, r, s) {
                          var l = us(e);
                          return function g() {
                            for (
                              var E = arguments.length,
                                A = $(E),
                                T = E,
                                L = Di(g);
                              T--;

                            )
                              A[T] = arguments[T];
                            var Q =
                              E < 3 && A[0] !== L && A[E - 1] !== L
                                ? []
                                : Hn(A, L);
                            return (E -= Q.length) < s
                              ? Sf(
                                  e,
                                  r,
                                  _o,
                                  g.placeholder,
                                  t,
                                  A,
                                  Q,
                                  t,
                                  t,
                                  s - E
                                )
                              : jr(
                                  this && this !== hr && this instanceof g
                                    ? l
                                    : e,
                                  this,
                                  A
                                );
                          };
                        })(e, r, T)
                      : (32 != r && 33 != r) || g.length
                      ? _o.apply(t, ve)
                      : (function f_(e, r, s, l) {
                          var g = 1 & r,
                            E = us(e);
                          return function A() {
                            for (
                              var T = -1,
                                L = arguments.length,
                                Q = -1,
                                Y = l.length,
                                ne = $(Y + L),
                                he =
                                  this && this !== hr && this instanceof A
                                    ? E
                                    : e;
                              ++Q < Y;

                            )
                              ne[Q] = l[Q];
                            for (; L--; ) ne[Q++] = arguments[++T];
                            return jr(he, g ? s : this, ne);
                          };
                        })(e, r, s, l);
                else
                  var Se = (function u_(e, r, s) {
                    var l = 1 & r,
                      g = us(e);
                    return function E() {
                      return (
                        this && this !== hr && this instanceof E ? g : e
                      ).apply(l ? s : this, arguments);
                    };
                  })(e, r, s);
                return Zf((he ? of : Mf)(Se, ve), e, r);
              }
              function Of(e, r, s, l) {
                return e === t || (an(e, Pi[s]) && !rt.call(l, s)) ? r : e;
              }
              function Rf(e, r, s, l, g, E) {
                return (
                  Ct(e) &&
                    Ct(r) &&
                    (E.set(r, e), ho(e, r, t, Rf, E), E.delete(r)),
                  e
                );
              }
              function d_(e) {
                return hs(e) ? t : e;
              }
              function Af(e, r, s, l, g, E) {
                var A = 1 & s,
                  T = e.length,
                  L = r.length;
                if (T != L && !(A && L > T)) return !1;
                var Q = E.get(e),
                  Y = E.get(r);
                if (Q && Y) return Q == r && Y == e;
                var ne = -1,
                  he = !0,
                  ve = 2 & s ? new oi() : t;
                for (E.set(e, r), E.set(r, e); ++ne < T; ) {
                  var Se = e[ne],
                    Ue = r[ne];
                  if (l)
                    var Pe = A
                      ? l(Ue, Se, ne, r, e, E)
                      : l(Se, Ue, ne, e, r, E);
                  if (Pe !== t) {
                    if (Pe) continue;
                    he = !1;
                    break;
                  }
                  if (ve) {
                    if (
                      !Ma(r, function ($e, Ke) {
                        if (!Yi(ve, Ke) && (Se === $e || g(Se, $e, s, l, E)))
                          return ve.push(Ke);
                      })
                    ) {
                      he = !1;
                      break;
                    }
                  } else if (Se !== Ue && !g(Se, Ue, s, l, E)) {
                    he = !1;
                    break;
                  }
                }
                return E.delete(e), E.delete(r), he;
              }
              function Cn(e) {
                return xc(jf(e, t, Bf), e + "");
              }
              function pc(e) {
                return Gl(e, cr, vc);
              }
              function gc(e) {
                return Gl(e, Tr, Tf);
              }
              var yc = oo
                ? function (e) {
                    return oo.get(e);
                  }
                : jc;
              function wo(e) {
                for (
                  var r = e.name + "",
                    s = Ri[r],
                    l = rt.call(Ri, r) ? s.length : 0;
                  l--;

                ) {
                  var g = s[l],
                    E = g.func;
                  if (null == E || E == e) return g.name;
                }
                return r;
              }
              function Di(e) {
                return (rt.call(w, "placeholder") ? w : e).placeholder;
              }
              function Ie() {
                var e = w.iteratee || Nc;
                return (
                  (e = e === Nc ? Ql : e),
                  arguments.length ? e(arguments[0], arguments[1]) : e
                );
              }
              function xo(e, r) {
                var s = e.__data__;
                return (function E_(e) {
                  var r = typeof e;
                  return "string" == r ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                    ? "__proto__" !== e
                    : null === e;
                })(r)
                  ? s["string" == typeof r ? "string" : "hash"]
                  : s.map;
              }
              function _c(e) {
                for (var r = cr(e), s = r.length; s--; ) {
                  var l = r[s],
                    g = e[l];
                  r[s] = [l, g, Nf(g)];
                }
                return r;
              }
              function ui(e, r) {
                var s = (function Py(j, k) {
                  return null == j ? t : j[k];
                })(e, r);
                return Jl(s) ? s : t;
              }
              var vc = Va
                  ? function (e) {
                      return null == e
                        ? []
                        : ((e = ut(e)),
                          zn(Va(e), function (r) {
                            return jl.call(e, r);
                          }));
                    }
                  : Lc,
                Tf = Va
                  ? function (e) {
                      for (var r = []; e; ) $n(r, vc(e)), (e = to(e));
                      return r;
                    }
                  : Lc,
                mr = Er;
              function Cf(e, r, s) {
                for (var l = -1, g = (r = Kn(r, e)).length, E = !1; ++l < g; ) {
                  var A = wn(r[l]);
                  if (!(E = null != e && s(e, A))) break;
                  e = e[A];
                }
                return E || ++l != g
                  ? E
                  : !!(g = null == e ? 0 : e.length) &&
                      Ao(g) &&
                      Dn(A, g) &&
                      (Fe(e) || fi(e));
              }
              function Df(e) {
                return "function" != typeof e.constructor || ls(e)
                  ? {}
                  : Ai(to(e));
              }
              function x_(e) {
                return Fe(e) || fi(e) || !!(Ll && e && e[Ll]);
              }
              function Dn(e, r) {
                var s = typeof e;
                return (
                  !!(r = r ?? qn) &&
                  ("number" == s || ("symbol" != s && Fg.test(e))) &&
                  e > -1 &&
                  e % 1 == 0 &&
                  e < r
                );
              }
              function Ir(e, r, s) {
                if (!Ct(s)) return !1;
                var l = typeof r;
                return (
                  !!("number" == l
                    ? Ar(s) && Dn(r, s.length)
                    : "string" == l && r in s) && an(s[r], e)
                );
              }
              function mc(e, r) {
                if (Fe(e)) return !1;
                var s = typeof e;
                return (
                  !(
                    "number" != s &&
                    "symbol" != s &&
                    "boolean" != s &&
                    null != e &&
                    !Zr(e)
                  ) ||
                  mg.test(e) ||
                  !vg.test(e) ||
                  (null != r && e in ut(r))
                );
              }
              function bc(e) {
                var r = wo(e),
                  s = w[r];
                if ("function" != typeof s || !(r in Be.prototype)) return !1;
                if (e === s) return !0;
                var l = yc(s);
                return !!l && e === l[0];
              }
              ((ka && mr(new ka(new ArrayBuffer(1))) != bi) ||
                (es && mr(new es()) != rn) ||
                (Ka && mr(Ka.resolve()) != Vu) ||
                (Oi && mr(new Oi()) != nn) ||
                (ts && mr(new ts()) != Ji)) &&
                (mr = function (e) {
                  var r = Er(e),
                    s = r == Pn ? e.constructor : t,
                    l = s ? li(s) : "";
                  if (l)
                    switch (l) {
                      case Yy:
                        return bi;
                      case Xy:
                        return rn;
                      case e0:
                        return Vu;
                      case t0:
                        return nn;
                      case r0:
                        return Ji;
                    }
                  return r;
                });
              var S_ = Js ? Nn : Mc;
              function ls(e) {
                var r = e && e.constructor;
                return e === (("function" == typeof r && r.prototype) || Pi);
              }
              function Nf(e) {
                return e == e && !Ct(e);
              }
              function Ff(e, r) {
                return function (s) {
                  return null != s && s[e] === r && (r !== t || e in ut(s));
                };
              }
              function jf(e, r, s) {
                return (
                  (r = rr(r === t ? e.length - 1 : r, 0)),
                  function () {
                    for (
                      var l = arguments,
                        g = -1,
                        E = rr(l.length - r, 0),
                        A = $(E);
                      ++g < E;

                    )
                      A[g] = l[r + g];
                    g = -1;
                    for (var T = $(r + 1); ++g < r; ) T[g] = l[g];
                    return (T[r] = s(A)), jr(e, this, T);
                  }
                );
              }
              function Lf(e, r) {
                return r.length < 2 ? e : ci(e, Gr(r, 0, -1));
              }
              function wc(e, r) {
                if (
                  ("constructor" !== r || "function" != typeof e[r]) &&
                  "__proto__" != r
                )
                  return e[r];
              }
              var Mf = Uf(of),
                fs =
                  Vy ||
                  function (e, r) {
                    return hr.setTimeout(e, r);
                  },
                xc = Uf(X0);
              function Zf(e, r, s) {
                var l = r + "";
                return xc(
                  e,
                  (function w_(e, r) {
                    var s = r.length;
                    if (!s) return e;
                    var l = s - 1;
                    return (
                      (r[l] = (s > 1 ? "& " : "") + r[l]),
                      (r = r.join(s > 2 ? ", " : " ")),
                      e.replace(Eg, "{\n/* [wrapped with " + r + "] */\n")
                    );
                  })(
                    l,
                    (function C_(e, r) {
                      return (
                        Br(ig, function (s) {
                          var l = "_." + s[0];
                          r & s[1] && !ks(e, l) && e.push(l);
                        }),
                        e.sort()
                      );
                    })(
                      (function v_(e) {
                        var r = e.match(Ig);
                        return r ? r[1].split(Sg) : [];
                      })(l),
                      s
                    )
                  )
                );
              }
              function Uf(e) {
                var r = 0,
                  s = 0;
                return function () {
                  var l = Wy(),
                    g = 16 - (l - s);
                  if (((s = l), g > 0)) {
                    if (++r >= 800) return arguments[0];
                  } else r = 0;
                  return e.apply(t, arguments);
                };
              }
              function Eo(e, r) {
                var s = -1,
                  l = e.length,
                  g = l - 1;
                for (r = r === t ? l : r; ++s < r; ) {
                  var E = ic(s, g),
                    A = e[E];
                  (e[E] = e[s]), (e[s] = A);
                }
                return (e.length = r), e;
              }
              var qf = (function P_(e) {
                var r = Oo(e, function (l) {
                    return 500 === s.size && s.clear(), l;
                  }),
                  s = r.cache;
                return r;
              })(function (e) {
                var r = [];
                return (
                  46 === e.charCodeAt(0) && r.push(""),
                  e.replace(bg, function (s, l, g, E) {
                    r.push(g ? E.replace(Rg, "$1") : l || s);
                  }),
                  r
                );
              });
              function wn(e) {
                if ("string" == typeof e || Zr(e)) return e;
                var r = e + "";
                return "0" == r && 1 / e == -ri ? "-0" : r;
              }
              function li(e) {
                if (null != e) {
                  try {
                    return Qs.call(e);
                  } catch {}
                  try {
                    return e + "";
                  } catch {}
                }
                return "";
              }
              function zf(e) {
                if (e instanceof Be) return e.clone();
                var r = new kr(e.__wrapped__, e.__chain__);
                return (
                  (r.__actions__ = Rr(e.__actions__)),
                  (r.__index__ = e.__index__),
                  (r.__values__ = e.__values__),
                  r
                );
              }
              var j_ = qe(function (e, r) {
                  return Ut(e) ? ss(e, dr(r, 1, Ut, !0)) : [];
                }),
                L_ = qe(function (e, r) {
                  var s = Wr(r);
                  return (
                    Ut(s) && (s = t),
                    Ut(e) ? ss(e, dr(r, 1, Ut, !0), Ie(s, 2)) : []
                  );
                }),
                M_ = qe(function (e, r) {
                  var s = Wr(r);
                  return (
                    Ut(s) && (s = t), Ut(e) ? ss(e, dr(r, 1, Ut, !0), t, s) : []
                  );
                });
              function $f(e, r, s) {
                var l = null == e ? 0 : e.length;
                if (!l) return -1;
                var g = null == s ? 0 : Me(s);
                return g < 0 && (g = rr(l + g, 0)), Ks(e, Ie(r, 3), g);
              }
              function Hf(e, r, s) {
                var l = null == e ? 0 : e.length;
                if (!l) return -1;
                var g = l - 1;
                return (
                  s !== t &&
                    ((g = Me(s)), (g = s < 0 ? rr(l + g, 0) : vr(g, l - 1))),
                  Ks(e, Ie(r, 3), g, !0)
                );
              }
              function Bf(e) {
                return null != e && e.length ? dr(e, 1) : [];
              }
              function Vf(e) {
                return e && e.length ? e[0] : t;
              }
              var G_ = qe(function (e) {
                  var r = St(e, uc);
                  return r.length && r[0] === e[0] ? Xa(r) : [];
                }),
                W_ = qe(function (e) {
                  var r = Wr(e),
                    s = St(e, uc);
                  return (
                    r === Wr(s) ? (r = t) : s.pop(),
                    s.length && s[0] === e[0] ? Xa(s, Ie(r, 2)) : []
                  );
                }),
                J_ = qe(function (e) {
                  var r = Wr(e),
                    s = St(e, uc);
                  return (
                    (r = "function" == typeof r ? r : t) && s.pop(),
                    s.length && s[0] === e[0] ? Xa(s, t, r) : []
                  );
                });
              function Wr(e) {
                var r = null == e ? 0 : e.length;
                return r ? e[r - 1] : t;
              }
              var ev = qe(kf);
              function kf(e, r) {
                return e && e.length && r && r.length ? nc(e, r) : e;
              }
              var nv = Cn(function (e, r) {
                var s = null == e ? 0 : e.length,
                  l = Wa(e, r);
                return (
                  sf(
                    e,
                    St(r, function (g) {
                      return Dn(g, s) ? +g : g;
                    }).sort(gf)
                  ),
                  l
                );
              });
              function Ec(e) {
                return null == e ? e : Qy.call(e);
              }
              var mv = qe(function (e) {
                  return kn(dr(e, 1, Ut, !0));
                }),
                bv = qe(function (e) {
                  var r = Wr(e);
                  return Ut(r) && (r = t), kn(dr(e, 1, Ut, !0), Ie(r, 2));
                }),
                wv = qe(function (e) {
                  var r = Wr(e);
                  return (
                    (r = "function" == typeof r ? r : t),
                    kn(dr(e, 1, Ut, !0), t, r)
                  );
                });
              function Ic(e) {
                if (!e || !e.length) return [];
                var r = 0;
                return (
                  (e = zn(e, function (s) {
                    if (Ut(s)) return (r = rr(s.length, r)), !0;
                  })),
                  za(r, function (s) {
                    return St(e, Za(s));
                  })
                );
              }
              function Kf(e, r) {
                if (!e || !e.length) return [];
                var s = Ic(e);
                return null == r
                  ? s
                  : St(s, function (l) {
                      return jr(r, t, l);
                    });
              }
              var Sv = qe(function (e, r) {
                  return Ut(e) ? ss(e, r) : [];
                }),
                Pv = qe(function (e) {
                  return cc(zn(e, Ut));
                }),
                Ov = qe(function (e) {
                  var r = Wr(e);
                  return Ut(r) && (r = t), cc(zn(e, Ut), Ie(r, 2));
                }),
                Rv = qe(function (e) {
                  var r = Wr(e);
                  return (
                    (r = "function" == typeof r ? r : t), cc(zn(e, Ut), t, r)
                  );
                }),
                Av = qe(Ic),
                Dv = qe(function (e) {
                  var r = e.length,
                    s = r > 1 ? e[r - 1] : t;
                  return (
                    (s = "function" == typeof s ? (e.pop(), s) : t), Kf(e, s)
                  );
                });
              function Gf(e) {
                var r = w(e);
                return (r.__chain__ = !0), r;
              }
              function Io(e, r) {
                return r(e);
              }
              var Fv = Cn(function (e) {
                  var r = e.length,
                    s = r ? e[0] : 0,
                    l = this.__wrapped__,
                    g = function (E) {
                      return Wa(E, e);
                    };
                  return !(r > 1 || this.__actions__.length) &&
                    l instanceof Be &&
                    Dn(s)
                    ? ((l = l.slice(s, +s + (r ? 1 : 0))).__actions__.push({
                        func: Io,
                        args: [g],
                        thisArg: t,
                      }),
                      new kr(l, this.__chain__).thru(function (E) {
                        return r && !E.length && E.push(t), E;
                      }))
                    : this.thru(g);
                }),
                $v = yo(function (e, r, s) {
                  rt.call(e, s) ? ++e[s] : An(e, s, 1);
                }),
                Vv = wf($f),
                kv = wf(Hf);
              function Wf(e, r) {
                return (Fe(e) ? Br : Vn)(e, Ie(r, 3));
              }
              function Jf(e, r) {
                return (Fe(e) ? py : Vl)(e, Ie(r, 3));
              }
              var Jv = yo(function (e, r, s) {
                  rt.call(e, s) ? e[s].push(r) : An(e, s, [r]);
                }),
                Yv = qe(function (e, r, s) {
                  var l = -1,
                    g = "function" == typeof r,
                    E = Ar(e) ? $(e.length) : [];
                  return (
                    Vn(e, function (A) {
                      E[++l] = g ? jr(r, A, s) : os(A, r, s);
                    }),
                    E
                  );
                }),
                Xv = yo(function (e, r, s) {
                  An(e, s, r);
                });
              function So(e, r) {
                return (Fe(e) ? St : Yl)(e, Ie(r, 3));
              }
              var tm = yo(
                  function (e, r, s) {
                    e[s ? 0 : 1].push(r);
                  },
                  function () {
                    return [[], []];
                  }
                ),
                lm = qe(function (e, r) {
                  if (null == e) return [];
                  var s = r.length;
                  return (
                    s > 1 && Ir(e, r[0], r[1])
                      ? (r = [])
                      : s > 2 && Ir(r[0], r[1], r[2]) && (r = [r[0]]),
                    rf(e, dr(r, 1), [])
                  );
                }),
                Po =
                  By ||
                  function () {
                    return hr.Date.now();
                  };
              function Qf(e, r, s) {
                return (
                  (r = s ? t : r),
                  Tn(e, 128, t, t, t, t, (r = e && null == r ? e.length : r))
                );
              }
              function Yf(e, r) {
                var s;
                if ("function" != typeof r) throw new Vr(f);
                return (
                  (e = Me(e)),
                  function () {
                    return (
                      --e > 0 && (s = r.apply(this, arguments)),
                      e <= 1 && (r = t),
                      s
                    );
                  }
                );
              }
              var Sc = qe(function (e, r, s) {
                  var l = 1;
                  if (s.length) {
                    var g = Hn(s, Di(Sc));
                    l |= 32;
                  }
                  return Tn(e, l, r, s, g);
                }),
                Xf = qe(function (e, r, s) {
                  var l = 3;
                  if (s.length) {
                    var g = Hn(s, Di(Xf));
                    l |= 32;
                  }
                  return Tn(r, l, e, s, g);
                });
              function rh(e, r, s) {
                var l,
                  g,
                  E,
                  A,
                  T,
                  L,
                  Q = 0,
                  Y = !1,
                  ne = !1,
                  he = !0;
                if ("function" != typeof e) throw new Vr(f);
                function ve(qt) {
                  var cn = l,
                    jn = g;
                  return (l = g = t), (Q = qt), (A = e.apply(jn, cn));
                }
                function Pe(qt) {
                  var cn = qt - L;
                  return L === t || cn >= r || cn < 0 || (ne && qt - Q >= E);
                }
                function $e() {
                  var qt = Po();
                  if (Pe(qt)) return Ke(qt);
                  T = fs(
                    $e,
                    (function Ue(qt) {
                      var wh = r - (qt - L);
                      return ne ? vr(wh, E - (qt - Q)) : wh;
                    })(qt)
                  );
                }
                function Ke(qt) {
                  return (T = t), he && l ? ve(qt) : ((l = g = t), A);
                }
                function qr() {
                  var qt = Po(),
                    cn = Pe(qt);
                  if (((l = arguments), (g = this), (L = qt), cn)) {
                    if (T === t)
                      return (function Se(qt) {
                        return (Q = qt), (T = fs($e, r)), Y ? ve(qt) : A;
                      })(L);
                    if (ne) return hf(T), (T = fs($e, r)), ve(L);
                  }
                  return T === t && (T = fs($e, r)), A;
                }
                return (
                  (r = Jr(r) || 0),
                  Ct(s) &&
                    ((Y = !!s.leading),
                    (E = (ne = "maxWait" in s) ? rr(Jr(s.maxWait) || 0, r) : E),
                    (he = "trailing" in s ? !!s.trailing : he)),
                  (qr.cancel = function Ur() {
                    T !== t && hf(T), (Q = 0), (l = L = g = T = t);
                  }),
                  (qr.flush = function Sr() {
                    return T === t ? A : Ke(Po());
                  }),
                  qr
                );
              }
              var hm = qe(function (e, r) {
                  return Bl(e, 1, r);
                }),
                dm = qe(function (e, r, s) {
                  return Bl(e, Jr(r) || 0, s);
                });
              function Oo(e, r) {
                if (
                  "function" != typeof e ||
                  (null != r && "function" != typeof r)
                )
                  throw new Vr(f);
                var s = function () {
                  var l = arguments,
                    g = r ? r.apply(this, l) : l[0],
                    E = s.cache;
                  if (E.has(g)) return E.get(g);
                  var A = e.apply(this, l);
                  return (s.cache = E.set(g, A) || E), A;
                };
                return (s.cache = new (Oo.Cache || Rn)()), s;
              }
              function Ro(e) {
                if ("function" != typeof e) throw new Vr(f);
                return function () {
                  var r = arguments;
                  switch (r.length) {
                    case 0:
                      return !e.call(this);
                    case 1:
                      return !e.call(this, r[0]);
                    case 2:
                      return !e.call(this, r[0], r[1]);
                    case 3:
                      return !e.call(this, r[0], r[1], r[2]);
                  }
                  return !e.apply(this, r);
                };
              }
              Oo.Cache = Rn;
              var ym = r_(function (e, r) {
                  var s = (r =
                    1 == r.length && Fe(r[0])
                      ? St(r[0], Lr(Ie()))
                      : St(dr(r, 1), Lr(Ie()))).length;
                  return qe(function (l) {
                    for (var g = -1, E = vr(l.length, s); ++g < E; )
                      l[g] = r[g].call(this, l[g]);
                    return jr(e, this, l);
                  });
                }),
                Pc = qe(function (e, r) {
                  var s = Hn(r, Di(Pc));
                  return Tn(e, 32, t, r, s);
                }),
                nh = qe(function (e, r) {
                  var s = Hn(r, Di(nh));
                  return Tn(e, 64, t, r, s);
                }),
                _m = Cn(function (e, r) {
                  return Tn(e, 256, t, t, t, r);
                });
              function an(e, r) {
                return e === r || (e != e && r != r);
              }
              var Am = bo(Ya),
                Tm = bo(function (e, r) {
                  return e >= r;
                }),
                fi = Wl(
                  (function () {
                    return arguments;
                  })()
                )
                  ? Wl
                  : function (e) {
                      return (
                        Nt(e) && rt.call(e, "callee") && !jl.call(e, "callee")
                      );
                    },
                Fe = $.isArray,
                Cm = yl
                  ? Lr(yl)
                  : function U0(e) {
                      return Nt(e) && Er(e) == Qi;
                    };
              function Ar(e) {
                return null != e && Ao(e.length) && !Nn(e);
              }
              function Ut(e) {
                return Nt(e) && Ar(e);
              }
              var Wn = ky || Mc,
                Nm = _l
                  ? Lr(_l)
                  : function q0(e) {
                      return Nt(e) && Er(e) == ki;
                    };
              function Oc(e) {
                if (!Nt(e)) return !1;
                var r = Er(e);
                return (
                  r == qs ||
                  "[object DOMException]" == r ||
                  ("string" == typeof e.message &&
                    "string" == typeof e.name &&
                    !hs(e))
                );
              }
              function Nn(e) {
                if (!Ct(e)) return !1;
                var r = Er(e);
                return (
                  r == zs ||
                  r == Bu ||
                  "[object AsyncFunction]" == r ||
                  "[object Proxy]" == r
                );
              }
              function ih(e) {
                return "number" == typeof e && e == Me(e);
              }
              function Ao(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= qn;
              }
              function Ct(e) {
                var r = typeof e;
                return null != e && ("object" == r || "function" == r);
              }
              function Nt(e) {
                return null != e && "object" == typeof e;
              }
              var sh = vl
                ? Lr(vl)
                : function $0(e) {
                    return Nt(e) && mr(e) == rn;
                  };
              function oh(e) {
                return "number" == typeof e || (Nt(e) && Er(e) == Ki);
              }
              function hs(e) {
                if (!Nt(e) || Er(e) != Pn) return !1;
                var r = to(e);
                if (null === r) return !0;
                var s = rt.call(r, "constructor") && r.constructor;
                return (
                  "function" == typeof s && s instanceof s && Qs.call(s) == qy
                );
              }
              var Rc = ml
                  ? Lr(ml)
                  : function H0(e) {
                      return Nt(e) && Er(e) == Gi;
                    },
                ah = bl
                  ? Lr(bl)
                  : function B0(e) {
                      return Nt(e) && mr(e) == nn;
                    };
              function To(e) {
                return "string" == typeof e || (!Fe(e) && Nt(e) && Er(e) == Wi);
              }
              function Zr(e) {
                return "symbol" == typeof e || (Nt(e) && Er(e) == $s);
              }
              var Ni = wl
                  ? Lr(wl)
                  : function V0(e) {
                      return Nt(e) && Ao(e.length) && !!Et[Er(e)];
                    },
                Wm = bo(rc),
                Jm = bo(function (e, r) {
                  return e <= r;
                });
              function ch(e) {
                if (!e) return [];
                if (Ar(e)) return To(e) ? sn(e) : Rr(e);
                if (Xi && e[Xi])
                  return (function Ry(j) {
                    for (var k, $ = []; !(k = j.next()).done; ) $.push(k.value);
                    return $;
                  })(e[Xi]());
                var r = mr(e);
                return (r == rn ? Ha : r == nn ? Gs : Fi)(e);
              }
              function Fn(e) {
                return e
                  ? (e = Jr(e)) === ri || e === -ri
                    ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                    : e == e
                    ? e
                    : 0
                  : 0 === e
                  ? e
                  : 0;
              }
              function Me(e) {
                var r = Fn(e),
                  s = r % 1;
                return r == r ? (s ? r - s : r) : 0;
              }
              function uh(e) {
                return e ? ai(Me(e), 0, vn) : 0;
              }
              function Jr(e) {
                if ("number" == typeof e) return e;
                if (Zr(e)) return NaN;
                if (Ct(e)) {
                  var r = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = Ct(r) ? r + "" : r;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = Ol(e);
                var s = Cg.test(e);
                return s || Ng.test(e)
                  ? fy(e.slice(2), s ? 2 : 8)
                  : Tg.test(e)
                  ? NaN
                  : +e;
              }
              function lh(e) {
                return bn(e, Tr(e));
              }
              function et(e) {
                return null == e ? "" : Mr(e);
              }
              var Ym = Ti(function (e, r) {
                  if (ls(r) || Ar(r)) bn(r, cr(r), e);
                  else for (var s in r) rt.call(r, s) && is(e, s, r[s]);
                }),
                fh = Ti(function (e, r) {
                  bn(r, Tr(r), e);
                }),
                Co = Ti(function (e, r, s, l) {
                  bn(r, Tr(r), e, l);
                }),
                Xm = Ti(function (e, r, s, l) {
                  bn(r, cr(r), e, l);
                }),
                e1 = Cn(Wa),
                r1 = qe(function (e, r) {
                  e = ut(e);
                  var s = -1,
                    l = r.length,
                    g = l > 2 ? r[2] : t;
                  for (g && Ir(r[0], r[1], g) && (l = 1); ++s < l; )
                    for (
                      var E = r[s], A = Tr(E), T = -1, L = A.length;
                      ++T < L;

                    ) {
                      var Q = A[T],
                        Y = e[Q];
                      (Y === t || (an(Y, Pi[Q]) && !rt.call(e, Q))) &&
                        (e[Q] = E[Q]);
                    }
                  return e;
                }),
                n1 = qe(function (e) {
                  return e.push(t, Rf), jr(hh, t, e);
                });
              function Ac(e, r, s) {
                var l = null == e ? t : ci(e, r);
                return l === t ? s : l;
              }
              function Tc(e, r) {
                return null != e && Cf(e, r, L0);
              }
              var d1 = Ef(function (e, r, s) {
                  null != r &&
                    "function" != typeof r.toString &&
                    (r = Ys.call(r)),
                    (e[r] = s);
                }, Dc(Cr)),
                p1 = Ef(function (e, r, s) {
                  null != r &&
                    "function" != typeof r.toString &&
                    (r = Ys.call(r)),
                    rt.call(e, r) ? e[r].push(s) : (e[r] = [s]);
                }, Ie),
                g1 = qe(os);
              function cr(e) {
                return Ar(e) ? ql(e) : tc(e);
              }
              function Tr(e) {
                return Ar(e)
                  ? ql(e, !0)
                  : (function k0(e) {
                      if (!Ct(e))
                        return (function R_(e) {
                          var r = [];
                          if (null != e) for (var s in ut(e)) r.push(s);
                          return r;
                        })(e);
                      var r = ls(e),
                        s = [];
                      for (var l in e)
                        ("constructor" == l && (r || !rt.call(e, l))) ||
                          s.push(l);
                      return s;
                    })(e);
              }
              var v1 = Ti(function (e, r, s) {
                  ho(e, r, s);
                }),
                hh = Ti(function (e, r, s, l) {
                  ho(e, r, s, l);
                }),
                m1 = Cn(function (e, r) {
                  var s = {};
                  if (null == e) return s;
                  var l = !1;
                  (r = St(r, function (E) {
                    return (E = Kn(E, e)), l || (l = E.length > 1), E;
                  })),
                    bn(e, gc(e), s),
                    l && (s = Kr(s, 7, d_));
                  for (var g = r.length; g--; ) ac(s, r[g]);
                  return s;
                }),
                w1 = Cn(function (e, r) {
                  return null == e
                    ? {}
                    : (function G0(e, r) {
                        return nf(e, r, function (s, l) {
                          return Tc(e, l);
                        });
                      })(e, r);
                });
              function dh(e, r) {
                if (null == e) return {};
                var s = St(gc(e), function (l) {
                  return [l];
                });
                return (
                  (r = Ie(r)),
                  nf(e, s, function (l, g) {
                    return r(l, g[0]);
                  })
                );
              }
              var ph = Pf(cr),
                gh = Pf(Tr);
              function Fi(e) {
                return null == e ? [] : $a(e, cr(e));
              }
              var N1 = Ci(function (e, r, s) {
                return (r = r.toLowerCase()), e + (s ? yh(r) : r);
              });
              function yh(e) {
                return Cc(et(e).toLowerCase());
              }
              function _h(e) {
                return (e = et(e)) && e.replace(jg, Ey).replace(ey, "");
              }
              var M1 = Ci(function (e, r, s) {
                  return e + (s ? "-" : "") + r.toLowerCase();
                }),
                Z1 = Ci(function (e, r, s) {
                  return e + (s ? " " : "") + r.toLowerCase();
                }),
                U1 = bf("toLowerCase"),
                k1 = Ci(function (e, r, s) {
                  return e + (s ? "_" : "") + r.toLowerCase();
                }),
                G1 = Ci(function (e, r, s) {
                  return e + (s ? " " : "") + Cc(r);
                }),
                ib = Ci(function (e, r, s) {
                  return e + (s ? " " : "") + r.toUpperCase();
                }),
                Cc = bf("toUpperCase");
              function vh(e, r, s) {
                return (
                  (e = et(e)),
                  (r = s ? t : r) === t
                    ? (function Oy(j) {
                        return ny.test(j);
                      })(e)
                      ? (function jy(j) {
                          return j.match(ty) || [];
                        })(e)
                      : (function vy(j) {
                          return j.match(Pg) || [];
                        })(e)
                    : e.match(r) || []
                );
              }
              var mh = qe(function (e, r) {
                  try {
                    return jr(e, t, r);
                  } catch (s) {
                    return Oc(s) ? s : new De(s);
                  }
                }),
                sb = Cn(function (e, r) {
                  return (
                    Br(r, function (s) {
                      (s = wn(s)), An(e, s, Sc(e[s], e));
                    }),
                    e
                  );
                });
              function Dc(e) {
                return function () {
                  return e;
                };
              }
              var ub = xf(),
                lb = xf(!0);
              function Cr(e) {
                return e;
              }
              function Nc(e) {
                return Ql("function" == typeof e ? e : Kr(e, 1));
              }
              var db = qe(function (e, r) {
                  return function (s) {
                    return os(s, e, r);
                  };
                }),
                pb = qe(function (e, r) {
                  return function (s) {
                    return os(e, s, r);
                  };
                });
              function Fc(e, r, s) {
                var l = cr(r),
                  g = fo(r, l);
                null == s &&
                  (!Ct(r) || (!g.length && l.length)) &&
                  ((s = r), (r = e), (e = this), (g = fo(r, cr(r))));
                var E = !(Ct(s) && "chain" in s && !s.chain),
                  A = Nn(e);
                return (
                  Br(g, function (T) {
                    var L = r[T];
                    (e[T] = L),
                      A &&
                        (e.prototype[T] = function () {
                          var Q = this.__chain__;
                          if (E || Q) {
                            var Y = e(this.__wrapped__);
                            return (
                              (Y.__actions__ = Rr(this.__actions__)).push({
                                func: L,
                                args: arguments,
                                thisArg: e,
                              }),
                              (Y.__chain__ = Q),
                              Y
                            );
                          }
                          return L.apply(e, $n([this.value()], arguments));
                        });
                  }),
                  e
                );
              }
              function jc() {}
              var _b = hc(St),
                vb = hc(xl),
                mb = hc(Ma);
              function bh(e) {
                return mc(e)
                  ? Za(wn(e))
                  : (function W0(e) {
                      return function (r) {
                        return ci(r, e);
                      };
                    })(e);
              }
              var wb = If(),
                xb = If(!0);
              function Lc() {
                return [];
              }
              function Mc() {
                return !1;
              }
              var Ab = vo(function (e, r) {
                  return e + r;
                }, 0),
                Tb = dc("ceil"),
                Cb = vo(function (e, r) {
                  return e / r;
                }, 1),
                Db = dc("floor"),
                Ub = vo(function (e, r) {
                  return e * r;
                }, 1),
                qb = dc("round"),
                zb = vo(function (e, r) {
                  return e - r;
                }, 0);
              return (
                (w.after = function fm(e, r) {
                  if ("function" != typeof r) throw new Vr(f);
                  return (
                    (e = Me(e)),
                    function () {
                      if (--e < 1) return r.apply(this, arguments);
                    }
                  );
                }),
                (w.ary = Qf),
                (w.assign = Ym),
                (w.assignIn = fh),
                (w.assignInWith = Co),
                (w.assignWith = Xm),
                (w.at = e1),
                (w.before = Yf),
                (w.bind = Sc),
                (w.bindAll = sb),
                (w.bindKey = Xf),
                (w.castArray = function Em() {
                  if (!arguments.length) return [];
                  var e = arguments[0];
                  return Fe(e) ? e : [e];
                }),
                (w.chain = Gf),
                (w.chunk = function D_(e, r, s) {
                  r = (s ? Ir(e, r, s) : r === t) ? 1 : rr(Me(r), 0);
                  var l = null == e ? 0 : e.length;
                  if (!l || r < 1) return [];
                  for (var g = 0, E = 0, A = $(io(l / r)); g < l; )
                    A[E++] = Gr(e, g, (g += r));
                  return A;
                }),
                (w.compact = function N_(e) {
                  for (
                    var r = -1, s = null == e ? 0 : e.length, l = 0, g = [];
                    ++r < s;

                  ) {
                    var E = e[r];
                    E && (g[l++] = E);
                  }
                  return g;
                }),
                (w.concat = function F_() {
                  var e = arguments.length;
                  if (!e) return [];
                  for (var r = $(e - 1), s = arguments[0], l = e; l--; )
                    r[l - 1] = arguments[l];
                  return $n(Fe(s) ? Rr(s) : [s], dr(r, 1));
                }),
                (w.cond = function ob(e) {
                  var r = null == e ? 0 : e.length,
                    s = Ie();
                  return (
                    (e = r
                      ? St(e, function (l) {
                          if ("function" != typeof l[1]) throw new Vr(f);
                          return [s(l[0]), l[1]];
                        })
                      : []),
                    qe(function (l) {
                      for (var g = -1; ++g < r; ) {
                        var E = e[g];
                        if (jr(E[0], this, l)) return jr(E[1], this, l);
                      }
                    })
                  );
                }),
                (w.conforms = function ab(e) {
                  return (function D0(e) {
                    var r = cr(e);
                    return function (s) {
                      return Hl(s, e, r);
                    };
                  })(Kr(e, 1));
                }),
                (w.constant = Dc),
                (w.countBy = $v),
                (w.create = function t1(e, r) {
                  var s = Ai(e);
                  return null == r ? s : $l(s, r);
                }),
                (w.curry = function eh(e, r, s) {
                  var l = Tn(e, 8, t, t, t, t, t, (r = s ? t : r));
                  return (l.placeholder = eh.placeholder), l;
                }),
                (w.curryRight = function th(e, r, s) {
                  var l = Tn(e, 16, t, t, t, t, t, (r = s ? t : r));
                  return (l.placeholder = th.placeholder), l;
                }),
                (w.debounce = rh),
                (w.defaults = r1),
                (w.defaultsDeep = n1),
                (w.defer = hm),
                (w.delay = dm),
                (w.difference = j_),
                (w.differenceBy = L_),
                (w.differenceWith = M_),
                (w.drop = function Z_(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  return l
                    ? Gr(e, (r = s || r === t ? 1 : Me(r)) < 0 ? 0 : r, l)
                    : [];
                }),
                (w.dropRight = function U_(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  return l
                    ? Gr(
                        e,
                        0,
                        (r = l - (r = s || r === t ? 1 : Me(r))) < 0 ? 0 : r
                      )
                    : [];
                }),
                (w.dropRightWhile = function q_(e, r) {
                  return e && e.length ? go(e, Ie(r, 3), !0, !0) : [];
                }),
                (w.dropWhile = function z_(e, r) {
                  return e && e.length ? go(e, Ie(r, 3), !0) : [];
                }),
                (w.fill = function $_(e, r, s, l) {
                  var g = null == e ? 0 : e.length;
                  return g
                    ? (s &&
                        "number" != typeof s &&
                        Ir(e, r, s) &&
                        ((s = 0), (l = g)),
                      (function F0(e, r, s, l) {
                        var g = e.length;
                        for (
                          (s = Me(s)) < 0 && (s = -s > g ? 0 : g + s),
                            (l = l === t || l > g ? g : Me(l)) < 0 && (l += g),
                            l = s > l ? 0 : uh(l);
                          s < l;

                        )
                          e[s++] = r;
                        return e;
                      })(e, r, s, l))
                    : [];
                }),
                (w.filter = function Bv(e, r) {
                  return (Fe(e) ? zn : kl)(e, Ie(r, 3));
                }),
                (w.flatMap = function Kv(e, r) {
                  return dr(So(e, r), 1);
                }),
                (w.flatMapDeep = function Gv(e, r) {
                  return dr(So(e, r), ri);
                }),
                (w.flatMapDepth = function Wv(e, r, s) {
                  return (s = s === t ? 1 : Me(s)), dr(So(e, r), s);
                }),
                (w.flatten = Bf),
                (w.flattenDeep = function H_(e) {
                  return null != e && e.length ? dr(e, ri) : [];
                }),
                (w.flattenDepth = function B_(e, r) {
                  return null != e && e.length
                    ? dr(e, (r = r === t ? 1 : Me(r)))
                    : [];
                }),
                (w.flip = function pm(e) {
                  return Tn(e, 512);
                }),
                (w.flow = ub),
                (w.flowRight = lb),
                (w.fromPairs = function V_(e) {
                  for (
                    var r = -1, s = null == e ? 0 : e.length, l = {};
                    ++r < s;

                  ) {
                    var g = e[r];
                    l[g[0]] = g[1];
                  }
                  return l;
                }),
                (w.functions = function l1(e) {
                  return null == e ? [] : fo(e, cr(e));
                }),
                (w.functionsIn = function f1(e) {
                  return null == e ? [] : fo(e, Tr(e));
                }),
                (w.groupBy = Jv),
                (w.initial = function K_(e) {
                  return null != e && e.length ? Gr(e, 0, -1) : [];
                }),
                (w.intersection = G_),
                (w.intersectionBy = W_),
                (w.intersectionWith = J_),
                (w.invert = d1),
                (w.invertBy = p1),
                (w.invokeMap = Yv),
                (w.iteratee = Nc),
                (w.keyBy = Xv),
                (w.keys = cr),
                (w.keysIn = Tr),
                (w.map = So),
                (w.mapKeys = function y1(e, r) {
                  var s = {};
                  return (
                    (r = Ie(r, 3)),
                    mn(e, function (l, g, E) {
                      An(s, r(l, g, E), l);
                    }),
                    s
                  );
                }),
                (w.mapValues = function _1(e, r) {
                  var s = {};
                  return (
                    (r = Ie(r, 3)),
                    mn(e, function (l, g, E) {
                      An(s, g, r(l, g, E));
                    }),
                    s
                  );
                }),
                (w.matches = function fb(e) {
                  return Xl(Kr(e, 1));
                }),
                (w.matchesProperty = function hb(e, r) {
                  return ef(e, Kr(r, 1));
                }),
                (w.memoize = Oo),
                (w.merge = v1),
                (w.mergeWith = hh),
                (w.method = db),
                (w.methodOf = pb),
                (w.mixin = Fc),
                (w.negate = Ro),
                (w.nthArg = function yb(e) {
                  return (
                    (e = Me(e)),
                    qe(function (r) {
                      return tf(r, e);
                    })
                  );
                }),
                (w.omit = m1),
                (w.omitBy = function b1(e, r) {
                  return dh(e, Ro(Ie(r)));
                }),
                (w.once = function gm(e) {
                  return Yf(2, e);
                }),
                (w.orderBy = function em(e, r, s, l) {
                  return null == e
                    ? []
                    : (Fe(r) || (r = null == r ? [] : [r]),
                      Fe((s = l ? t : s)) || (s = null == s ? [] : [s]),
                      rf(e, r, s));
                }),
                (w.over = _b),
                (w.overArgs = ym),
                (w.overEvery = vb),
                (w.overSome = mb),
                (w.partial = Pc),
                (w.partialRight = nh),
                (w.partition = tm),
                (w.pick = w1),
                (w.pickBy = dh),
                (w.property = bh),
                (w.propertyOf = function bb(e) {
                  return function (r) {
                    return null == e ? t : ci(e, r);
                  };
                }),
                (w.pull = ev),
                (w.pullAll = kf),
                (w.pullAllBy = function tv(e, r, s) {
                  return e && e.length && r && r.length
                    ? nc(e, r, Ie(s, 2))
                    : e;
                }),
                (w.pullAllWith = function rv(e, r, s) {
                  return e && e.length && r && r.length ? nc(e, r, t, s) : e;
                }),
                (w.pullAt = nv),
                (w.range = wb),
                (w.rangeRight = xb),
                (w.rearg = _m),
                (w.reject = function im(e, r) {
                  return (Fe(e) ? zn : kl)(e, Ro(Ie(r, 3)));
                }),
                (w.remove = function iv(e, r) {
                  var s = [];
                  if (!e || !e.length) return s;
                  var l = -1,
                    g = [],
                    E = e.length;
                  for (r = Ie(r, 3); ++l < E; ) {
                    var A = e[l];
                    r(A, l, e) && (s.push(A), g.push(l));
                  }
                  return sf(e, g), s;
                }),
                (w.rest = function vm(e, r) {
                  if ("function" != typeof e) throw new Vr(f);
                  return qe(e, (r = r === t ? r : Me(r)));
                }),
                (w.reverse = Ec),
                (w.sampleSize = function om(e, r, s) {
                  return (
                    (r = (s ? Ir(e, r, s) : r === t) ? 1 : Me(r)),
                    (Fe(e) ? R0 : Y0)(e, r)
                  );
                }),
                (w.set = function E1(e, r, s) {
                  return null == e ? e : cs(e, r, s);
                }),
                (w.setWith = function I1(e, r, s, l) {
                  return (
                    (l = "function" == typeof l ? l : t),
                    null == e ? e : cs(e, r, s, l)
                  );
                }),
                (w.shuffle = function am(e) {
                  return (Fe(e) ? A0 : e_)(e);
                }),
                (w.slice = function sv(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  return l
                    ? (s && "number" != typeof s && Ir(e, r, s)
                        ? ((r = 0), (s = l))
                        : ((r = null == r ? 0 : Me(r)),
                          (s = s === t ? l : Me(s))),
                      Gr(e, r, s))
                    : [];
                }),
                (w.sortBy = lm),
                (w.sortedUniq = function hv(e) {
                  return e && e.length ? af(e) : [];
                }),
                (w.sortedUniqBy = function dv(e, r) {
                  return e && e.length ? af(e, Ie(r, 2)) : [];
                }),
                (w.split = function K1(e, r, s) {
                  return (
                    s && "number" != typeof s && Ir(e, r, s) && (r = s = t),
                    (s = s === t ? vn : s >>> 0)
                      ? (e = et(e)) &&
                        ("string" == typeof r || (null != r && !Rc(r))) &&
                        !(r = Mr(r)) &&
                        Ei(e)
                        ? Gn(sn(e), 0, s)
                        : e.split(r, s)
                      : []
                  );
                }),
                (w.spread = function mm(e, r) {
                  if ("function" != typeof e) throw new Vr(f);
                  return (
                    (r = null == r ? 0 : rr(Me(r), 0)),
                    qe(function (s) {
                      var l = s[r],
                        g = Gn(s, 0, r);
                      return l && $n(g, l), jr(e, this, g);
                    })
                  );
                }),
                (w.tail = function pv(e) {
                  var r = null == e ? 0 : e.length;
                  return r ? Gr(e, 1, r) : [];
                }),
                (w.take = function gv(e, r, s) {
                  return e && e.length
                    ? Gr(e, 0, (r = s || r === t ? 1 : Me(r)) < 0 ? 0 : r)
                    : [];
                }),
                (w.takeRight = function yv(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  return l
                    ? Gr(
                        e,
                        (r = l - (r = s || r === t ? 1 : Me(r))) < 0 ? 0 : r,
                        l
                      )
                    : [];
                }),
                (w.takeRightWhile = function _v(e, r) {
                  return e && e.length ? go(e, Ie(r, 3), !1, !0) : [];
                }),
                (w.takeWhile = function vv(e, r) {
                  return e && e.length ? go(e, Ie(r, 3)) : [];
                }),
                (w.tap = function Nv(e, r) {
                  return r(e), e;
                }),
                (w.throttle = function bm(e, r, s) {
                  var l = !0,
                    g = !0;
                  if ("function" != typeof e) throw new Vr(f);
                  return (
                    Ct(s) &&
                      ((l = "leading" in s ? !!s.leading : l),
                      (g = "trailing" in s ? !!s.trailing : g)),
                    rh(e, r, { leading: l, maxWait: r, trailing: g })
                  );
                }),
                (w.thru = Io),
                (w.toArray = ch),
                (w.toPairs = ph),
                (w.toPairsIn = gh),
                (w.toPath = function Ob(e) {
                  return Fe(e) ? St(e, wn) : Zr(e) ? [e] : Rr(qf(et(e)));
                }),
                (w.toPlainObject = lh),
                (w.transform = function S1(e, r, s) {
                  var l = Fe(e),
                    g = l || Wn(e) || Ni(e);
                  if (((r = Ie(r, 4)), null == s)) {
                    var E = e && e.constructor;
                    s = g
                      ? l
                        ? new E()
                        : []
                      : Ct(e) && Nn(E)
                      ? Ai(to(e))
                      : {};
                  }
                  return (
                    (g ? Br : mn)(e, function (A, T, L) {
                      return r(s, A, T, L);
                    }),
                    s
                  );
                }),
                (w.unary = function wm(e) {
                  return Qf(e, 1);
                }),
                (w.union = mv),
                (w.unionBy = bv),
                (w.unionWith = wv),
                (w.uniq = function xv(e) {
                  return e && e.length ? kn(e) : [];
                }),
                (w.uniqBy = function Ev(e, r) {
                  return e && e.length ? kn(e, Ie(r, 2)) : [];
                }),
                (w.uniqWith = function Iv(e, r) {
                  return (
                    (r = "function" == typeof r ? r : t),
                    e && e.length ? kn(e, t, r) : []
                  );
                }),
                (w.unset = function P1(e, r) {
                  return null == e || ac(e, r);
                }),
                (w.unzip = Ic),
                (w.unzipWith = Kf),
                (w.update = function O1(e, r, s) {
                  return null == e ? e : uf(e, r, lc(s));
                }),
                (w.updateWith = function R1(e, r, s, l) {
                  return (
                    (l = "function" == typeof l ? l : t),
                    null == e ? e : uf(e, r, lc(s), l)
                  );
                }),
                (w.values = Fi),
                (w.valuesIn = function A1(e) {
                  return null == e ? [] : $a(e, Tr(e));
                }),
                (w.without = Sv),
                (w.words = vh),
                (w.wrap = function xm(e, r) {
                  return Pc(lc(r), e);
                }),
                (w.xor = Pv),
                (w.xorBy = Ov),
                (w.xorWith = Rv),
                (w.zip = Av),
                (w.zipObject = function Tv(e, r) {
                  return ff(e || [], r || [], is);
                }),
                (w.zipObjectDeep = function Cv(e, r) {
                  return ff(e || [], r || [], cs);
                }),
                (w.zipWith = Dv),
                (w.entries = ph),
                (w.entriesIn = gh),
                (w.extend = fh),
                (w.extendWith = Co),
                Fc(w, w),
                (w.add = Ab),
                (w.attempt = mh),
                (w.camelCase = N1),
                (w.capitalize = yh),
                (w.ceil = Tb),
                (w.clamp = function T1(e, r, s) {
                  return (
                    s === t && ((s = r), (r = t)),
                    s !== t && (s = (s = Jr(s)) == s ? s : 0),
                    r !== t && (r = (r = Jr(r)) == r ? r : 0),
                    ai(Jr(e), r, s)
                  );
                }),
                (w.clone = function Im(e) {
                  return Kr(e, 4);
                }),
                (w.cloneDeep = function Pm(e) {
                  return Kr(e, 5);
                }),
                (w.cloneDeepWith = function Om(e, r) {
                  return Kr(e, 5, (r = "function" == typeof r ? r : t));
                }),
                (w.cloneWith = function Sm(e, r) {
                  return Kr(e, 4, (r = "function" == typeof r ? r : t));
                }),
                (w.conformsTo = function Rm(e, r) {
                  return null == r || Hl(e, r, cr(r));
                }),
                (w.deburr = _h),
                (w.defaultTo = function cb(e, r) {
                  return null == e || e != e ? r : e;
                }),
                (w.divide = Cb),
                (w.endsWith = function F1(e, r, s) {
                  (e = et(e)), (r = Mr(r));
                  var l = e.length,
                    g = (s = s === t ? l : ai(Me(s), 0, l));
                  return (s -= r.length) >= 0 && e.slice(s, g) == r;
                }),
                (w.eq = an),
                (w.escape = function j1(e) {
                  return (e = et(e)) && gg.test(e) ? e.replace(Ku, Iy) : e;
                }),
                (w.escapeRegExp = function L1(e) {
                  return (e = et(e)) && wg.test(e) ? e.replace(Pa, "\\$&") : e;
                }),
                (w.every = function Hv(e, r, s) {
                  var l = Fe(e) ? xl : N0;
                  return s && Ir(e, r, s) && (r = t), l(e, Ie(r, 3));
                }),
                (w.find = Vv),
                (w.findIndex = $f),
                (w.findKey = function i1(e, r) {
                  return El(e, Ie(r, 3), mn);
                }),
                (w.findLast = kv),
                (w.findLastIndex = Hf),
                (w.findLastKey = function s1(e, r) {
                  return El(e, Ie(r, 3), Qa);
                }),
                (w.floor = Db),
                (w.forEach = Wf),
                (w.forEachRight = Jf),
                (w.forIn = function o1(e, r) {
                  return null == e ? e : Ja(e, Ie(r, 3), Tr);
                }),
                (w.forInRight = function a1(e, r) {
                  return null == e ? e : Kl(e, Ie(r, 3), Tr);
                }),
                (w.forOwn = function c1(e, r) {
                  return e && mn(e, Ie(r, 3));
                }),
                (w.forOwnRight = function u1(e, r) {
                  return e && Qa(e, Ie(r, 3));
                }),
                (w.get = Ac),
                (w.gt = Am),
                (w.gte = Tm),
                (w.has = function h1(e, r) {
                  return null != e && Cf(e, r, j0);
                }),
                (w.hasIn = Tc),
                (w.head = Vf),
                (w.identity = Cr),
                (w.includes = function Qv(e, r, s, l) {
                  (e = Ar(e) ? e : Fi(e)), (s = s && !l ? Me(s) : 0);
                  var g = e.length;
                  return (
                    s < 0 && (s = rr(g + s, 0)),
                    To(e)
                      ? s <= g && e.indexOf(r, s) > -1
                      : !!g && xi(e, r, s) > -1
                  );
                }),
                (w.indexOf = function k_(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  if (!l) return -1;
                  var g = null == s ? 0 : Me(s);
                  return g < 0 && (g = rr(l + g, 0)), xi(e, r, g);
                }),
                (w.inRange = function C1(e, r, s) {
                  return (
                    (r = Fn(r)),
                    s === t ? ((s = r), (r = 0)) : (s = Fn(s)),
                    (function M0(e, r, s) {
                      return e >= vr(r, s) && e < rr(r, s);
                    })((e = Jr(e)), r, s)
                  );
                }),
                (w.invoke = g1),
                (w.isArguments = fi),
                (w.isArray = Fe),
                (w.isArrayBuffer = Cm),
                (w.isArrayLike = Ar),
                (w.isArrayLikeObject = Ut),
                (w.isBoolean = function Dm(e) {
                  return !0 === e || !1 === e || (Nt(e) && Er(e) == Vi);
                }),
                (w.isBuffer = Wn),
                (w.isDate = Nm),
                (w.isElement = function Fm(e) {
                  return Nt(e) && 1 === e.nodeType && !hs(e);
                }),
                (w.isEmpty = function jm(e) {
                  if (null == e) return !0;
                  if (
                    Ar(e) &&
                    (Fe(e) ||
                      "string" == typeof e ||
                      "function" == typeof e.splice ||
                      Wn(e) ||
                      Ni(e) ||
                      fi(e))
                  )
                    return !e.length;
                  var r = mr(e);
                  if (r == rn || r == nn) return !e.size;
                  if (ls(e)) return !tc(e).length;
                  for (var s in e) if (rt.call(e, s)) return !1;
                  return !0;
                }),
                (w.isEqual = function Lm(e, r) {
                  return as(e, r);
                }),
                (w.isEqualWith = function Mm(e, r, s) {
                  var l = (s = "function" == typeof s ? s : t) ? s(e, r) : t;
                  return l === t ? as(e, r, t, s) : !!l;
                }),
                (w.isError = Oc),
                (w.isFinite = function Zm(e) {
                  return "number" == typeof e && Ml(e);
                }),
                (w.isFunction = Nn),
                (w.isInteger = ih),
                (w.isLength = Ao),
                (w.isMap = sh),
                (w.isMatch = function Um(e, r) {
                  return e === r || ec(e, r, _c(r));
                }),
                (w.isMatchWith = function qm(e, r, s) {
                  return (
                    (s = "function" == typeof s ? s : t), ec(e, r, _c(r), s)
                  );
                }),
                (w.isNaN = function zm(e) {
                  return oh(e) && e != +e;
                }),
                (w.isNative = function $m(e) {
                  if (S_(e))
                    throw new De(
                      "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                    );
                  return Jl(e);
                }),
                (w.isNil = function Bm(e) {
                  return null == e;
                }),
                (w.isNull = function Hm(e) {
                  return null === e;
                }),
                (w.isNumber = oh),
                (w.isObject = Ct),
                (w.isObjectLike = Nt),
                (w.isPlainObject = hs),
                (w.isRegExp = Rc),
                (w.isSafeInteger = function Vm(e) {
                  return ih(e) && e >= -qn && e <= qn;
                }),
                (w.isSet = ah),
                (w.isString = To),
                (w.isSymbol = Zr),
                (w.isTypedArray = Ni),
                (w.isUndefined = function km(e) {
                  return e === t;
                }),
                (w.isWeakMap = function Km(e) {
                  return Nt(e) && mr(e) == Ji;
                }),
                (w.isWeakSet = function Gm(e) {
                  return Nt(e) && "[object WeakSet]" == Er(e);
                }),
                (w.join = function Q_(e, r) {
                  return null == e ? "" : Ky.call(e, r);
                }),
                (w.kebabCase = M1),
                (w.last = Wr),
                (w.lastIndexOf = function Y_(e, r, s) {
                  var l = null == e ? 0 : e.length;
                  if (!l) return -1;
                  var g = l;
                  return (
                    s !== t &&
                      (g = (g = Me(s)) < 0 ? rr(l + g, 0) : vr(g, l - 1)),
                    r == r
                      ? (function Cy(j, k, $) {
                          for (var ge = $ + 1; ge--; )
                            if (j[ge] === k) return ge;
                          return ge;
                        })(e, r, g)
                      : Ks(e, Il, g, !0)
                  );
                }),
                (w.lowerCase = Z1),
                (w.lowerFirst = U1),
                (w.lt = Wm),
                (w.lte = Jm),
                (w.max = function Nb(e) {
                  return e && e.length ? lo(e, Cr, Ya) : t;
                }),
                (w.maxBy = function Fb(e, r) {
                  return e && e.length ? lo(e, Ie(r, 2), Ya) : t;
                }),
                (w.mean = function jb(e) {
                  return Sl(e, Cr);
                }),
                (w.meanBy = function Lb(e, r) {
                  return Sl(e, Ie(r, 2));
                }),
                (w.min = function Mb(e) {
                  return e && e.length ? lo(e, Cr, rc) : t;
                }),
                (w.minBy = function Zb(e, r) {
                  return e && e.length ? lo(e, Ie(r, 2), rc) : t;
                }),
                (w.stubArray = Lc),
                (w.stubFalse = Mc),
                (w.stubObject = function Eb() {
                  return {};
                }),
                (w.stubString = function Ib() {
                  return "";
                }),
                (w.stubTrue = function Sb() {
                  return !0;
                }),
                (w.multiply = Ub),
                (w.nth = function X_(e, r) {
                  return e && e.length ? tf(e, Me(r)) : t;
                }),
                (w.noConflict = function gb() {
                  return hr._ === this && (hr._ = zy), this;
                }),
                (w.noop = jc),
                (w.now = Po),
                (w.pad = function q1(e, r, s) {
                  e = et(e);
                  var l = (r = Me(r)) ? Ii(e) : 0;
                  if (!r || l >= r) return e;
                  var g = (r - l) / 2;
                  return mo(so(g), s) + e + mo(io(g), s);
                }),
                (w.padEnd = function z1(e, r, s) {
                  e = et(e);
                  var l = (r = Me(r)) ? Ii(e) : 0;
                  return r && l < r ? e + mo(r - l, s) : e;
                }),
                (w.padStart = function $1(e, r, s) {
                  e = et(e);
                  var l = (r = Me(r)) ? Ii(e) : 0;
                  return r && l < r ? mo(r - l, s) + e : e;
                }),
                (w.parseInt = function H1(e, r, s) {
                  return (
                    s || null == r ? (r = 0) : r && (r = +r),
                    Jy(et(e).replace(Oa, ""), r || 0)
                  );
                }),
                (w.random = function D1(e, r, s) {
                  if (
                    (s && "boolean" != typeof s && Ir(e, r, s) && (r = s = t),
                    s === t &&
                      ("boolean" == typeof r
                        ? ((s = r), (r = t))
                        : "boolean" == typeof e && ((s = e), (e = t))),
                    e === t && r === t
                      ? ((e = 0), (r = 1))
                      : ((e = Fn(e)),
                        r === t ? ((r = e), (e = 0)) : (r = Fn(r))),
                    e > r)
                  ) {
                    var l = e;
                    (e = r), (r = l);
                  }
                  if (s || e % 1 || r % 1) {
                    var g = Zl();
                    return vr(
                      e + g * (r - e + ly("1e-" + ((g + "").length - 1))),
                      r
                    );
                  }
                  return ic(e, r);
                }),
                (w.reduce = function rm(e, r, s) {
                  var l = Fe(e) ? La : Pl,
                    g = arguments.length < 3;
                  return l(e, Ie(r, 4), s, g, Vn);
                }),
                (w.reduceRight = function nm(e, r, s) {
                  var l = Fe(e) ? gy : Pl,
                    g = arguments.length < 3;
                  return l(e, Ie(r, 4), s, g, Vl);
                }),
                (w.repeat = function B1(e, r, s) {
                  return (
                    (r = (s ? Ir(e, r, s) : r === t) ? 1 : Me(r)), sc(et(e), r)
                  );
                }),
                (w.replace = function V1() {
                  var e = arguments,
                    r = et(e[0]);
                  return e.length < 3 ? r : r.replace(e[1], e[2]);
                }),
                (w.result = function x1(e, r, s) {
                  var l = -1,
                    g = (r = Kn(r, e)).length;
                  for (g || ((g = 1), (e = t)); ++l < g; ) {
                    var E = null == e ? t : e[wn(r[l])];
                    E === t && ((l = g), (E = s)), (e = Nn(E) ? E.call(e) : E);
                  }
                  return e;
                }),
                (w.round = qb),
                (w.runInContext = j),
                (w.sample = function sm(e) {
                  return (Fe(e) ? zl : Q0)(e);
                }),
                (w.size = function cm(e) {
                  if (null == e) return 0;
                  if (Ar(e)) return To(e) ? Ii(e) : e.length;
                  var r = mr(e);
                  return r == rn || r == nn ? e.size : tc(e).length;
                }),
                (w.snakeCase = k1),
                (w.some = function um(e, r, s) {
                  var l = Fe(e) ? Ma : t_;
                  return s && Ir(e, r, s) && (r = t), l(e, Ie(r, 3));
                }),
                (w.sortedIndex = function ov(e, r) {
                  return po(e, r);
                }),
                (w.sortedIndexBy = function av(e, r, s) {
                  return oc(e, r, Ie(s, 2));
                }),
                (w.sortedIndexOf = function cv(e, r) {
                  var s = null == e ? 0 : e.length;
                  if (s) {
                    var l = po(e, r);
                    if (l < s && an(e[l], r)) return l;
                  }
                  return -1;
                }),
                (w.sortedLastIndex = function uv(e, r) {
                  return po(e, r, !0);
                }),
                (w.sortedLastIndexBy = function lv(e, r, s) {
                  return oc(e, r, Ie(s, 2), !0);
                }),
                (w.sortedLastIndexOf = function fv(e, r) {
                  if (null != e && e.length) {
                    var l = po(e, r, !0) - 1;
                    if (an(e[l], r)) return l;
                  }
                  return -1;
                }),
                (w.startCase = G1),
                (w.startsWith = function W1(e, r, s) {
                  return (
                    (e = et(e)),
                    (s = null == s ? 0 : ai(Me(s), 0, e.length)),
                    (r = Mr(r)),
                    e.slice(s, s + r.length) == r
                  );
                }),
                (w.subtract = zb),
                (w.sum = function $b(e) {
                  return e && e.length ? qa(e, Cr) : 0;
                }),
                (w.sumBy = function Hb(e, r) {
                  return e && e.length ? qa(e, Ie(r, 2)) : 0;
                }),
                (w.template = function J1(e, r, s) {
                  var l = w.templateSettings;
                  s && Ir(e, r, s) && (r = t),
                    (e = et(e)),
                    (r = Co({}, r, l, Of));
                  var T,
                    L,
                    g = Co({}, r.imports, l.imports, Of),
                    E = cr(g),
                    A = $a(g, E),
                    Q = 0,
                    Y = r.interpolate || Hs,
                    ne = "__p += '",
                    he = Ba(
                      (r.escape || Hs).source +
                        "|" +
                        Y.source +
                        "|" +
                        (Y === Gu ? Ag : Hs).source +
                        "|" +
                        (r.evaluate || Hs).source +
                        "|$",
                      "g"
                    ),
                    ve =
                      "//# sourceURL=" +
                      (rt.call(r, "sourceURL")
                        ? (r.sourceURL + "").replace(/\s/g, " ")
                        : "lodash.templateSources[" + ++sy + "]") +
                      "\n";
                  e.replace(he, function (Pe, $e, Ke, Ur, Sr, qr) {
                    return (
                      Ke || (Ke = Ur),
                      (ne += e.slice(Q, qr).replace(Lg, Sy)),
                      $e && ((T = !0), (ne += "' +\n__e(" + $e + ") +\n'")),
                      Sr && ((L = !0), (ne += "';\n" + Sr + ";\n__p += '")),
                      Ke &&
                        (ne +=
                          "' +\n((__t = (" +
                          Ke +
                          ")) == null ? '' : __t) +\n'"),
                      (Q = qr + Pe.length),
                      Pe
                    );
                  }),
                    (ne += "';\n");
                  var Se = rt.call(r, "variable") && r.variable;
                  if (Se) {
                    if (Og.test(Se))
                      throw new De(
                        "Invalid `variable` option passed into `_.template`"
                      );
                  } else ne = "with (obj) {\n" + ne + "\n}\n";
                  (ne = (L ? ne.replace(fg, "") : ne)
                    .replace(hg, "$1")
                    .replace(dg, "$1;")),
                    (ne =
                      "function(" +
                      (Se || "obj") +
                      ") {\n" +
                      (Se ? "" : "obj || (obj = {});\n") +
                      "var __t, __p = ''" +
                      (T ? ", __e = _.escape" : "") +
                      (L
                        ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                        : ";\n") +
                      ne +
                      "return __p\n}");
                  var Ue = mh(function () {
                    return Ye(E, ve + "return " + ne).apply(t, A);
                  });
                  if (((Ue.source = ne), Oc(Ue))) throw Ue;
                  return Ue;
                }),
                (w.times = function Pb(e, r) {
                  if ((e = Me(e)) < 1 || e > qn) return [];
                  var s = vn,
                    l = vr(e, vn);
                  (r = Ie(r)), (e -= vn);
                  for (var g = za(l, r); ++s < e; ) r(s);
                  return g;
                }),
                (w.toFinite = Fn),
                (w.toInteger = Me),
                (w.toLength = uh),
                (w.toLower = function Q1(e) {
                  return et(e).toLowerCase();
                }),
                (w.toNumber = Jr),
                (w.toSafeInteger = function Qm(e) {
                  return e ? ai(Me(e), -qn, qn) : 0 === e ? e : 0;
                }),
                (w.toString = et),
                (w.toUpper = function Y1(e) {
                  return et(e).toUpperCase();
                }),
                (w.trim = function X1(e, r, s) {
                  if ((e = et(e)) && (s || r === t)) return Ol(e);
                  if (!e || !(r = Mr(r))) return e;
                  var l = sn(e),
                    g = sn(r);
                  return Gn(l, Rl(l, g), Al(l, g) + 1).join("");
                }),
                (w.trimEnd = function eb(e, r, s) {
                  if ((e = et(e)) && (s || r === t))
                    return e.slice(0, Cl(e) + 1);
                  if (!e || !(r = Mr(r))) return e;
                  var l = sn(e);
                  return Gn(l, 0, Al(l, sn(r)) + 1).join("");
                }),
                (w.trimStart = function tb(e, r, s) {
                  if ((e = et(e)) && (s || r === t)) return e.replace(Oa, "");
                  if (!e || !(r = Mr(r))) return e;
                  var l = sn(e);
                  return Gn(l, Rl(l, sn(r))).join("");
                }),
                (w.truncate = function rb(e, r) {
                  var s = 30,
                    l = "...";
                  if (Ct(r)) {
                    var g = "separator" in r ? r.separator : g;
                    (s = "length" in r ? Me(r.length) : s),
                      (l = "omission" in r ? Mr(r.omission) : l);
                  }
                  var E = (e = et(e)).length;
                  if (Ei(e)) {
                    var A = sn(e);
                    E = A.length;
                  }
                  if (s >= E) return e;
                  var T = s - Ii(l);
                  if (T < 1) return l;
                  var L = A ? Gn(A, 0, T).join("") : e.slice(0, T);
                  if (g === t) return L + l;
                  if ((A && (T += L.length - T), Rc(g))) {
                    if (e.slice(T).search(g)) {
                      var Q,
                        Y = L;
                      for (
                        g.global || (g = Ba(g.source, et(Wu.exec(g)) + "g")),
                          g.lastIndex = 0;
                        (Q = g.exec(Y));

                      )
                        var ne = Q.index;
                      L = L.slice(0, ne === t ? T : ne);
                    }
                  } else if (e.indexOf(Mr(g), T) != T) {
                    var he = L.lastIndexOf(g);
                    he > -1 && (L = L.slice(0, he));
                  }
                  return L + l;
                }),
                (w.unescape = function nb(e) {
                  return (e = et(e)) && pg.test(e) ? e.replace(ku, Dy) : e;
                }),
                (w.uniqueId = function Rb(e) {
                  var r = ++Uy;
                  return et(e) + r;
                }),
                (w.upperCase = ib),
                (w.upperFirst = Cc),
                (w.each = Wf),
                (w.eachRight = Jf),
                (w.first = Vf),
                Fc(
                  w,
                  (function () {
                    var e = {};
                    return (
                      mn(w, function (r, s) {
                        rt.call(w.prototype, s) || (e[s] = r);
                      }),
                      e
                    );
                  })(),
                  { chain: !1 }
                ),
                (w.VERSION = "4.17.21"),
                Br(
                  [
                    "bind",
                    "bindKey",
                    "curry",
                    "curryRight",
                    "partial",
                    "partialRight",
                  ],
                  function (e) {
                    w[e].placeholder = w;
                  }
                ),
                Br(["drop", "take"], function (e, r) {
                  (Be.prototype[e] = function (s) {
                    s = s === t ? 1 : rr(Me(s), 0);
                    var l =
                      this.__filtered__ && !r ? new Be(this) : this.clone();
                    return (
                      l.__filtered__
                        ? (l.__takeCount__ = vr(s, l.__takeCount__))
                        : l.__views__.push({
                            size: vr(s, vn),
                            type: e + (l.__dir__ < 0 ? "Right" : ""),
                          }),
                      l
                    );
                  }),
                    (Be.prototype[e + "Right"] = function (s) {
                      return this.reverse()[e](s).reverse();
                    });
                }),
                Br(["filter", "map", "takeWhile"], function (e, r) {
                  var s = r + 1,
                    l = 1 == s || 3 == s;
                  Be.prototype[e] = function (g) {
                    var E = this.clone();
                    return (
                      E.__iteratees__.push({ iteratee: Ie(g, 3), type: s }),
                      (E.__filtered__ = E.__filtered__ || l),
                      E
                    );
                  };
                }),
                Br(["head", "last"], function (e, r) {
                  var s = "take" + (r ? "Right" : "");
                  Be.prototype[e] = function () {
                    return this[s](1).value()[0];
                  };
                }),
                Br(["initial", "tail"], function (e, r) {
                  var s = "drop" + (r ? "" : "Right");
                  Be.prototype[e] = function () {
                    return this.__filtered__ ? new Be(this) : this[s](1);
                  };
                }),
                (Be.prototype.compact = function () {
                  return this.filter(Cr);
                }),
                (Be.prototype.find = function (e) {
                  return this.filter(e).head();
                }),
                (Be.prototype.findLast = function (e) {
                  return this.reverse().find(e);
                }),
                (Be.prototype.invokeMap = qe(function (e, r) {
                  return "function" == typeof e
                    ? new Be(this)
                    : this.map(function (s) {
                        return os(s, e, r);
                      });
                })),
                (Be.prototype.reject = function (e) {
                  return this.filter(Ro(Ie(e)));
                }),
                (Be.prototype.slice = function (e, r) {
                  e = Me(e);
                  var s = this;
                  return s.__filtered__ && (e > 0 || r < 0)
                    ? new Be(s)
                    : (e < 0 ? (s = s.takeRight(-e)) : e && (s = s.drop(e)),
                      r !== t &&
                        (s = (r = Me(r)) < 0 ? s.dropRight(-r) : s.take(r - e)),
                      s);
                }),
                (Be.prototype.takeRightWhile = function (e) {
                  return this.reverse().takeWhile(e).reverse();
                }),
                (Be.prototype.toArray = function () {
                  return this.take(vn);
                }),
                mn(Be.prototype, function (e, r) {
                  var s = /^(?:filter|find|map|reject)|While$/.test(r),
                    l = /^(?:head|last)$/.test(r),
                    g = w[l ? "take" + ("last" == r ? "Right" : "") : r],
                    E = l || /^find/.test(r);
                  g &&
                    (w.prototype[r] = function () {
                      var A = this.__wrapped__,
                        T = l ? [1] : arguments,
                        L = A instanceof Be,
                        Q = T[0],
                        Y = L || Fe(A),
                        ne = function ($e) {
                          var Ke = g.apply(w, $n([$e], T));
                          return l && he ? Ke[0] : Ke;
                        };
                      Y &&
                        s &&
                        "function" == typeof Q &&
                        1 != Q.length &&
                        (L = Y = !1);
                      var he = this.__chain__,
                        Se = E && !he,
                        Ue = L && !this.__actions__.length;
                      if (!E && Y) {
                        A = Ue ? A : new Be(this);
                        var Pe = e.apply(A, T);
                        return (
                          Pe.__actions__.push({
                            func: Io,
                            args: [ne],
                            thisArg: t,
                          }),
                          new kr(Pe, he)
                        );
                      }
                      return Se && Ue
                        ? e.apply(this, T)
                        : ((Pe = this.thru(ne)),
                          Se ? (l ? Pe.value()[0] : Pe.value()) : Pe);
                    });
                }),
                Br(
                  ["pop", "push", "shift", "sort", "splice", "unshift"],
                  function (e) {
                    var r = Ws[e],
                      s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                      l = /^(?:pop|shift)$/.test(e);
                    w.prototype[e] = function () {
                      var g = arguments;
                      if (l && !this.__chain__) {
                        var E = this.value();
                        return r.apply(Fe(E) ? E : [], g);
                      }
                      return this[s](function (A) {
                        return r.apply(Fe(A) ? A : [], g);
                      });
                    };
                  }
                ),
                mn(Be.prototype, function (e, r) {
                  var s = w[r];
                  if (s) {
                    var l = s.name + "";
                    rt.call(Ri, l) || (Ri[l] = []),
                      Ri[l].push({ name: r, func: s });
                  }
                }),
                (Ri[_o(t, 2).name] = [{ name: "wrapper", func: t }]),
                (Be.prototype.clone = function n0() {
                  var e = new Be(this.__wrapped__);
                  return (
                    (e.__actions__ = Rr(this.__actions__)),
                    (e.__dir__ = this.__dir__),
                    (e.__filtered__ = this.__filtered__),
                    (e.__iteratees__ = Rr(this.__iteratees__)),
                    (e.__takeCount__ = this.__takeCount__),
                    (e.__views__ = Rr(this.__views__)),
                    e
                  );
                }),
                (Be.prototype.reverse = function i0() {
                  if (this.__filtered__) {
                    var e = new Be(this);
                    (e.__dir__ = -1), (e.__filtered__ = !0);
                  } else (e = this.clone()).__dir__ *= -1;
                  return e;
                }),
                (Be.prototype.value = function s0() {
                  var e = this.__wrapped__.value(),
                    r = this.__dir__,
                    s = Fe(e),
                    l = r < 0,
                    g = s ? e.length : 0,
                    E = (function __(e, r, s) {
                      for (var l = -1, g = s.length; ++l < g; ) {
                        var E = s[l],
                          A = E.size;
                        switch (E.type) {
                          case "drop":
                            e += A;
                            break;
                          case "dropRight":
                            r -= A;
                            break;
                          case "take":
                            r = vr(r, e + A);
                            break;
                          case "takeRight":
                            e = rr(e, r - A);
                        }
                      }
                      return { start: e, end: r };
                    })(0, g, this.__views__),
                    A = E.start,
                    T = E.end,
                    L = T - A,
                    Q = l ? T : A - 1,
                    Y = this.__iteratees__,
                    ne = Y.length,
                    he = 0,
                    ve = vr(L, this.__takeCount__);
                  if (!s || (!l && g == L && ve == L))
                    return lf(e, this.__actions__);
                  var Se = [];
                  e: for (; L-- && he < ve; ) {
                    for (var Ue = -1, Pe = e[(Q += r)]; ++Ue < ne; ) {
                      var $e = Y[Ue],
                        Ur = $e.type,
                        Sr = (0, $e.iteratee)(Pe);
                      if (2 == Ur) Pe = Sr;
                      else if (!Sr) {
                        if (1 == Ur) continue e;
                        break e;
                      }
                    }
                    Se[he++] = Pe;
                  }
                  return Se;
                }),
                (w.prototype.at = Fv),
                (w.prototype.chain = function jv() {
                  return Gf(this);
                }),
                (w.prototype.commit = function Lv() {
                  return new kr(this.value(), this.__chain__);
                }),
                (w.prototype.next = function Mv() {
                  this.__values__ === t && (this.__values__ = ch(this.value()));
                  var e = this.__index__ >= this.__values__.length;
                  return {
                    done: e,
                    value: e ? t : this.__values__[this.__index__++],
                  };
                }),
                (w.prototype.plant = function Uv(e) {
                  for (var r, s = this; s instanceof co; ) {
                    var l = zf(s);
                    (l.__index__ = 0),
                      (l.__values__ = t),
                      r ? (g.__wrapped__ = l) : (r = l);
                    var g = l;
                    s = s.__wrapped__;
                  }
                  return (g.__wrapped__ = e), r;
                }),
                (w.prototype.reverse = function qv() {
                  var e = this.__wrapped__;
                  if (e instanceof Be) {
                    var r = e;
                    return (
                      this.__actions__.length && (r = new Be(this)),
                      (r = r.reverse()).__actions__.push({
                        func: Io,
                        args: [Ec],
                        thisArg: t,
                      }),
                      new kr(r, this.__chain__)
                    );
                  }
                  return this.thru(Ec);
                }),
                (w.prototype.toJSON =
                  w.prototype.valueOf =
                  w.prototype.value =
                    function zv() {
                      return lf(this.__wrapped__, this.__actions__);
                    }),
                (w.prototype.first = w.prototype.head),
                Xi &&
                  (w.prototype[Xi] = function Zv() {
                    return this;
                  }),
                w
              );
            })();
          ni ? (((ni.exports = Si)._ = Si), (Na._ = Si)) : (hr._ = Si);
        }.call(Hi);
      var gp = Object.defineProperty,
        yp = Object.defineProperties,
        _p = Object.getOwnPropertyDescriptors,
        Cu = Object.getOwnPropertySymbols,
        vp = Object.prototype.hasOwnProperty,
        mp = Object.prototype.propertyIsEnumerable,
        Du = (y, n, t) =>
          n in y
            ? gp(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        Ds = (y, n) => {
          for (var t in n || (n = {})) vp.call(n, t) && Du(y, t, n[t]);
          if (Cu) for (var t of Cu(n)) mp.call(n, t) && Du(y, t, n[t]);
          return y;
        },
        bp = (y, n) => yp(y, _p(n));
      function vi(y, n, t) {
        var o;
        const a = (0, S.DQ)(y);
        return (
          (null == (o = n.rpcMap) ? void 0 : o[a.reference]) ||
          `https://rpc.walletconnect.com/v1/?chainId=${a.namespace}:${a.reference}&projectId=${t}`
        );
      }
      function ti(y) {
        return y.includes(":") ? y.split(":")[1] : y;
      }
      function Nu(y) {
        return y.map((n) => `${n.split(":")[0]}:${n.split(":")[1]}`);
      }
      function Fu(y) {
        var n, t, o, a;
        const u = {};
        if (!(0, S.L5)(y)) return u;
        for (const [f, I] of Object.entries(y)) {
          const N = (0, S.gp)(f) ? [f] : I.chains,
            z = I.methods || [],
            G = I.events || [],
            ce = I.rpcMap || {},
            xe = (0, S.M)(f);
          u[xe] = bp(Ds(Ds({}, u[xe]), I), {
            chains: (0, S.eG)(N, null == (n = u[xe]) ? void 0 : n.chains),
            methods: (0, S.eG)(z, null == (t = u[xe]) ? void 0 : t.methods),
            events: (0, S.eG)(G, null == (o = u[xe]) ? void 0 : o.events),
            rpcMap: Ds(Ds({}, ce), null == (a = u[xe]) ? void 0 : a.rpcMap),
          });
        }
        return u;
      }
      function Ep(y) {
        return y.includes(":") ? y.split(":")[2] : y;
      }
      function Ip(y) {
        const n = {};
        for (const [t, o] of Object.entries(y)) {
          const a = o.methods || [],
            u = o.events || [],
            f = o.accounts || [],
            I = (0, S.gp)(t) ? [t] : o.chains ? o.chains : Nu(o.accounts);
          n[t] = { chains: I, methods: a, events: u, accounts: f };
        }
        return n;
      }
      function ha(y) {
        return "number" == typeof y
          ? y
          : y.includes("0x")
          ? parseInt(y, 16)
          : y.includes(":")
          ? Number(y.split(":")[1])
          : Number(y);
      }
      const ju = {},
        Lt = (y) => ju[y],
        da = (y, n) => {
          ju[y] = n;
        };
      class Sp {
        constructor(n) {
          (this.name = "polkadot"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit("default_chain_changed", `${this.name}:${n}`);
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return (
            (n &&
              n
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = ti(t);
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || vi(n, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      class Pp {
        constructor(n) {
          (this.name = "eip155"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        request(n) {
          var t = this;
          return (0, m.Z)(function* () {
            switch (n.request.method) {
              case "eth_requestAccounts":
              case "eth_accounts":
                return t.getAccounts();
              case "wallet_switchEthereumChain":
                return yield t.handleSwitchChain(n);
              case "eth_chainId":
                return parseInt(t.getDefaultChain());
            }
            return t.namespace.methods.includes(n.request.method)
              ? yield t.client.request(n)
              : t.getHttpProvider().request(n.request);
          })();
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(parseInt(n), t),
            (this.chainId = parseInt(n)),
            this.events.emit("default_chain_changed", `${this.name}:${n}`);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        createHttpProvider(n, t) {
          const o =
            t ||
            vi(`${this.name}:${n}`, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new Ru(o, Lt("disableProviderPing")));
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = parseInt(ti(t));
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const n = this.chainId,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        handleSwitchChain(n) {
          var t = this;
          return (0, m.Z)(function* () {
            var o, a;
            let u = n.request.params
              ? null == (o = n.request.params[0])
                ? void 0
                : o.chainId
              : "0x0";
            u = u.startsWith("0x") ? u : `0x${u}`;
            const f = parseInt(u, 16);
            if (t.isChainApproved(f)) t.setDefaultChain(`${f}`);
            else {
              if (!t.namespace.methods.includes("wallet_switchEthereumChain"))
                throw new Error(
                  `Failed to switch to chain 'eip155:${f}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
                );
              yield t.client.request({
                topic: n.topic,
                request: { method: n.request.method, params: [{ chainId: u }] },
                chainId: null == (a = t.namespace.chains) ? void 0 : a[0],
              }),
                t.setDefaultChain(`${f}`);
            }
            return null;
          })();
        }
        isChainApproved(n) {
          return this.namespace.chains.includes(`${this.name}:${n}`);
        }
      }
      class Op {
        constructor(n) {
          (this.name = "solana"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit("default_chain_changed", `${this.name}:${n}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = ti(t);
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || vi(n, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      class Rp {
        constructor(n) {
          (this.name = "cosmos"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit(
              "default_chain_changed",
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = ti(t);
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || vi(n, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      class Ap {
        constructor(n) {
          (this.name = "cip34"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit(
              "default_chain_changed",
              `${this.name}:${this.chainId}`
            );
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              const o = this.getCardanoRPCUrl(t),
                a = ti(t);
              n[a] = this.createHttpProvider(a, o);
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        getCardanoRPCUrl(n) {
          const t = this.namespace.rpcMap;
          if (t) return t[n];
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || this.getCardanoRPCUrl(n);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      class Tp {
        constructor(n) {
          (this.name = "elrond"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit("default_chain_changed", `${this.name}:${n}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = ti(t);
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || vi(n, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      class Cp {
        constructor(n) {
          (this.name = "multiversx"),
            (this.namespace = n.namespace),
            (this.events = Lt("events")),
            (this.client = Lt("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(n) {
          this.namespace = Object.assign(this.namespace, n);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(n) {
          return this.namespace.methods.includes(n.request.method)
            ? this.client.request(n)
            : this.getHttpProvider().request(n.request);
        }
        setDefaultChain(n, t) {
          this.httpProviders[n] || this.setHttpProvider(n, t),
            (this.chainId = n),
            this.events.emit("default_chain_changed", `${this.name}:${n}`);
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const n = this.namespace.chains[0];
          if (!n) throw new Error("ChainId not found");
          return n.split(":")[1];
        }
        getAccounts() {
          const n = this.namespace.accounts;
          return n
            ? [
                ...new Set(
                  n
                    .filter((t) => t.split(":")[1] === this.chainId.toString())
                    .map((t) => t.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const n = {};
          return (
            this.namespace.chains.forEach((t) => {
              var o;
              const a = ti(t);
              n[a] = this.createHttpProvider(
                a,
                null == (o = this.namespace.rpcMap) ? void 0 : o[t]
              );
            }),
            n
          );
        }
        getHttpProvider() {
          const n = `${this.name}:${this.chainId}`,
            t = this.httpProviders[n];
          if (typeof t > "u")
            throw new Error(`JSON-RPC provider for ${n} not found`);
          return t;
        }
        setHttpProvider(n, t) {
          const o = this.createHttpProvider(n, t);
          o && (this.httpProviders[n] = o);
        }
        createHttpProvider(n, t) {
          const o = t || vi(n, this.namespace, this.client.core.projectId);
          if (!o) throw new Error(`No RPC url provided for chainId: ${n}`);
          return new Nr(new _i(o, Lt("disableProviderPing")));
        }
      }
      var Dp = Object.defineProperty,
        Np = Object.defineProperties,
        Fp = Object.getOwnPropertyDescriptors,
        Lu = Object.getOwnPropertySymbols,
        jp = Object.prototype.hasOwnProperty,
        Lp = Object.prototype.propertyIsEnumerable,
        Mu = (y, n, t) =>
          n in y
            ? Dp(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        Ns = (y, n) => {
          for (var t in n || (n = {})) jp.call(n, t) && Mu(y, t, n[t]);
          if (Lu) for (var t of Lu(n)) Lp.call(n, t) && Mu(y, t, n[t]);
          return y;
        },
        pa = (y, n) => Np(y, Fp(n));
      class ga {
        constructor(n) {
          (this.events = new (de())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = n),
            (this.logger =
              typeof n?.logger < "u" && "string" != typeof n?.logger
                ? n.logger
                : (0, fe.pino)(
                    (0, fe.getDefaultLoggerOptions)({
                      level: n?.logger || "error",
                    })
                  )),
            (this.disableProviderPing = n?.disableProviderPing || !1);
        }
        static init(n) {
          return (0, m.Z)(function* () {
            const t = new ga(n);
            return yield t.initialize(), t;
          })();
        }
        request(n, t) {
          var o = this;
          return (0, m.Z)(function* () {
            const [a, u] = o.validateChain(t);
            if (!o.session)
              throw new Error("Please call connect() before request()");
            return yield o
              .getProvider(a)
              .request({
                request: Ns({}, n),
                chainId: `${a}:${u}`,
                topic: o.session.topic,
              });
          })();
        }
        sendAsync(n, t, o) {
          this.request(n, o)
            .then((a) => t(null, a))
            .catch((a) => t(a, void 0));
        }
        enable() {
          var n = this;
          return (0, m.Z)(function* () {
            if (!n.client) throw new Error("Sign Client not initialized");
            return (
              n.session ||
                (yield n.connect({
                  namespaces: n.namespaces,
                  optionalNamespaces: n.optionalNamespaces,
                  sessionProperties: n.sessionProperties,
                })),
              yield n.requestAccounts()
            );
          })();
        }
        disconnect() {
          var n = this;
          return (0, m.Z)(function* () {
            var t;
            if (!n.session)
              throw new Error("Please call connect() before enable()");
            yield n.client.disconnect({
              topic: null == (t = n.session) ? void 0 : t.topic,
              reason: (0, S.D6)("USER_DISCONNECTED"),
            }),
              yield n.cleanup();
          })();
        }
        connect(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!t.client) throw new Error("Sign Client not initialized");
            if (
              (t.setNamespaces(n),
              yield t.cleanupPendingPairings(),
              !n.skipPairing)
            )
              return yield t.pair(n.pairingTopic);
          })();
        }
        on(n, t) {
          this.events.on(n, t);
        }
        once(n, t) {
          this.events.once(n, t);
        }
        removeListener(n, t) {
          this.events.removeListener(n, t);
        }
        off(n, t) {
          this.events.off(n, t);
        }
        get isWalletConnect() {
          return !0;
        }
        pair(n) {
          var t = this;
          return (0, m.Z)(function* () {
            t.shouldAbortPairingAttempt = !1;
            let o = 0;
            do {
              if (t.shouldAbortPairingAttempt)
                throw new Error("Pairing aborted");
              if (o >= t.maxPairingAttempts)
                throw new Error("Max auto pairing attempts reached");
              const { uri: a, approval: u } = yield t.client.connect({
                pairingTopic: n,
                requiredNamespaces: t.namespaces,
                optionalNamespaces: t.optionalNamespaces,
                sessionProperties: t.sessionProperties,
              });
              a && ((t.uri = a), t.events.emit("display_uri", a)),
                yield u()
                  .then((f) => {
                    (t.session = f),
                      t.namespaces ||
                        ((t.namespaces = Ip(f.namespaces)),
                        t.persist("namespaces", t.namespaces));
                  })
                  .catch((f) => {
                    if (f.message !== xu) throw f;
                    o++;
                  });
            } while (!t.session);
            return t.onConnect(), t.session;
          })();
        }
        setDefaultChain(n, t) {
          try {
            if (!this.session) return;
            const [o, a] = this.validateChain(n);
            this.getProvider(o).setDefaultChain(a, t);
          } catch (o) {
            if (!/Please call connect/.test(o.message)) throw o;
          }
        }
        cleanupPendingPairings(n = {}) {
          var t = this;
          return (0, m.Z)(function* () {
            t.logger.info("Cleaning up inactive pairings...");
            const o = t.client.pairing.getAll();
            if ((0, S.qt)(o)) {
              for (const a of o)
                n.deletePairings
                  ? t.client.core.expirer.set(a.topic, 0)
                  : yield t.client.core.relayer.subscriber.unsubscribe(a.topic);
              t.logger.info(`Inactive pairings cleared: ${o.length}`);
            }
          })();
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        checkStorage() {
          var n = this;
          return (0, m.Z)(function* () {
            (n.namespaces = yield n.getFromStore("namespaces")),
              (n.optionalNamespaces =
                (yield n.getFromStore("optionalNamespaces")) || {}),
              n.client.session.length &&
                ((n.session = n.client.session.get(
                  n.client.session.keys[n.client.session.keys.length - 1]
                )),
                n.createProviders());
          })();
        }
        initialize() {
          var n = this;
          return (0, m.Z)(function* () {
            n.logger.trace("Initialized"),
              yield n.createClient(),
              yield n.checkStorage(),
              n.registerEventListeners();
          })();
        }
        createClient() {
          var n = this;
          return (0, m.Z)(function* () {
            (n.client =
              n.providerOpts.client ||
              (yield la.init({
                logger: n.providerOpts.logger || "error",
                relayUrl:
                  n.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                projectId: n.providerOpts.projectId,
                metadata: n.providerOpts.metadata,
                storageOptions: n.providerOpts.storageOptions,
                storage: n.providerOpts.storage,
                name: n.providerOpts.name,
              }))),
              n.logger.trace("SignClient Initialized");
          })();
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()"
            );
          const n = [
            ...new Set(
              Object.keys(this.session.namespaces).map((t) => (0, S.M)(t))
            ),
          ];
          da("client", this.client),
            da("events", this.events),
            da("disableProviderPing", this.disableProviderPing),
            n.forEach((t) => {
              if (!this.session) return;
              const o = (function wp(y, n) {
                  const t = Object.keys(n.namespaces).filter((a) =>
                    a.includes(y)
                  );
                  if (!t.length) return [];
                  const o = [];
                  return (
                    t.forEach((a) => {
                      o.push(...n.namespaces[a].accounts);
                    }),
                    o
                  );
                })(t, this.session),
                a = Nu(o),
                u = (function xp(y = {}, n = {}) {
                  const t = Fu(y),
                    o = Fu(n);
                  return fa.exports.merge(t, o);
                })(this.namespaces, this.optionalNamespaces),
                f = pa(Ns({}, u[t]), { accounts: o, chains: a });
              switch (t) {
                case "eip155":
                  this.rpcProviders[t] = new Pp({ namespace: f });
                  break;
                case "solana":
                  this.rpcProviders[t] = new Op({ namespace: f });
                  break;
                case "cosmos":
                  this.rpcProviders[t] = new Rp({ namespace: f });
                  break;
                case "polkadot":
                  this.rpcProviders[t] = new Sp({ namespace: f });
                  break;
                case "cip34":
                  this.rpcProviders[t] = new Ap({ namespace: f });
                  break;
                case "elrond":
                  this.rpcProviders[t] = new Tp({ namespace: f });
                  break;
                case "multiversx":
                  this.rpcProviders[t] = new Cp({ namespace: f });
              }
            });
        }
        registerEventListeners() {
          var n = this;
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (t) => {
            this.events.emit("session_ping", t);
          }),
            this.client.on("session_event", (t) => {
              const { params: o } = t,
                { event: a } = o;
              if ("accountsChanged" === a.name) {
                const u = a.data;
                u &&
                  (0, S.qt)(u) &&
                  this.events.emit("accountsChanged", u.map(Ep));
              } else if ("chainChanged" === a.name) {
                const u = o.chainId,
                  f = o.event.data,
                  I = (0, S.M)(u),
                  N = ha(u) !== ha(f) ? `${I}:${ha(f)}` : u;
                this.onChainChanged(N);
              } else this.events.emit(a.name, a.data);
              this.events.emit("session_event", t);
            }),
            this.client.on("session_update", ({ topic: t, params: o }) => {
              var a;
              const { namespaces: u } = o,
                f = null == (a = this.client) ? void 0 : a.session.get(t);
              (this.session = pa(Ns({}, f), { namespaces: u })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: t, params: o });
            }),
            this.client.on(
              "session_delete",
              (function () {
                var t = (0, m.Z)(function* (o) {
                  yield n.cleanup(),
                    n.events.emit("session_delete", o),
                    n.events.emit(
                      "disconnect",
                      pa(Ns({}, (0, S.D6)("USER_DISCONNECTED")), {
                        data: o.topic,
                      })
                    );
                });
                return function (o) {
                  return t.apply(this, arguments);
                };
              })()
            ),
            this.on("default_chain_changed", (t) => {
              this.onChainChanged(t, !0);
            });
        }
        getProvider(n) {
          if (!this.rpcProviders[n])
            throw new Error(`Provider not found: ${n}`);
          return this.rpcProviders[n];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((n) => {
            var t;
            this.getProvider(n).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[n]
            );
          });
        }
        setNamespaces(n) {
          const {
            namespaces: t,
            optionalNamespaces: o,
            sessionProperties: a,
          } = n;
          t && Object.keys(t).length && (this.namespaces = t),
            o && Object.keys(o).length && (this.optionalNamespaces = o),
            (this.sessionProperties = a),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", o);
        }
        validateChain(n) {
          const [t, o] = n?.split(":") || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, o];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((f) => (0, S.M)(f))
              .includes(t)
          )
            throw new Error(
              `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
            );
          if (t && o) return [t, o];
          const a = (0, S.M)(Object.keys(this.namespaces)[0]);
          return [a, this.rpcProviders[a].getDefaultChain()];
        }
        requestAccounts() {
          var n = this;
          return (0, m.Z)(function* () {
            const [t] = n.validateChain();
            return yield n.getProvider(t).requestAccounts();
          })();
        }
        onChainChanged(n, t = !1) {
          var o;
          if (!this.namespaces) return;
          const [a, u] = this.validateChain(n);
          t || this.getProvider(a).setDefaultChain(u),
            ((null != (o = this.namespaces[a])
              ? o
              : this.namespaces[`${a}:${u}`]
            ).defaultChain = u),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", u);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        cleanup() {
          var n = this;
          return (0, m.Z)(function* () {
            (n.session = void 0),
              (n.namespaces = void 0),
              (n.optionalNamespaces = void 0),
              (n.sessionProperties = void 0),
              n.persist("namespaces", void 0),
              n.persist("optionalNamespaces", void 0),
              n.persist("sessionProperties", void 0),
              yield n.cleanupPendingPairings({ deletePairings: !0 });
          })();
        }
        persist(n, t) {
          this.client.core.storage.setItem(`${Tu}/${n}`, t);
        }
        getFromStore(n) {
          var t = this;
          return (0, m.Z)(function* () {
            return yield t.client.core.storage.getItem(`${Tu}/${n}`);
          })();
        }
      }
      const Mp = ga,
        Fs = ["eth_sendTransaction", "personal_sign"],
        Zu = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        js = ["chainChanged", "accountsChanged"],
        Uu = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var $p = Object.defineProperty,
        Hp = Object.defineProperties,
        Bp = Object.getOwnPropertyDescriptors,
        qu = Object.getOwnPropertySymbols,
        Vp = Object.prototype.hasOwnProperty,
        kp = Object.prototype.propertyIsEnumerable,
        zu = (y, n, t) =>
          n in y
            ? $p(y, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              })
            : (y[n] = t),
        Bi = (y, n) => {
          for (var t in n || (n = {})) Vp.call(n, t) && zu(y, t, n[t]);
          if (qu) for (var t of qu(n)) kp.call(n, t) && zu(y, t, n[t]);
          return y;
        },
        $u = (y, n) => Hp(y, Bp(n));
      function Ls(y) {
        return Number(y[0].split(":")[1]);
      }
      function ya(y) {
        return `0x${y.toString(16)}`;
      }
      class Ms {
        constructor() {
          (this.events = new ie.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = "wc@2:ethereum_provider:"),
            (this.on = (n, t) => (this.events.on(n, t), this)),
            (this.once = (n, t) => (this.events.once(n, t), this)),
            (this.removeListener = (n, t) => (
              this.events.removeListener(n, t), this
            )),
            (this.off = (n, t) => (this.events.off(n, t), this)),
            (this.parseAccount = (n) =>
              this.isCompatibleChainId(n) ? this.parseAccountId(n).address : n),
            (this.signer = {}),
            (this.rpc = {});
        }
        static init(n) {
          return (0, m.Z)(function* () {
            const t = new Ms();
            return yield t.initialize(n), t;
          })();
        }
        request(n) {
          var t = this;
          return (0, m.Z)(function* () {
            return yield t.signer.request(n, t.formatChainId(t.chainId));
          })();
        }
        sendAsync(n, t) {
          this.signer.sendAsync(n, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        enable() {
          var n = this;
          return (0, m.Z)(function* () {
            return (
              n.session || (yield n.connect()),
              yield n.request({ method: "eth_requestAccounts" })
            );
          })();
        }
        connect(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (!t.signer.client)
              throw new Error("Provider not initialized. Call init() first");
            t.loadConnectOpts(n);
            const { required: o, optional: a } = (function Kp(y) {
              const {
                chains: n,
                optionalChains: t,
                methods: o,
                optionalMethods: a,
                events: u,
                optionalEvents: f,
                rpcMap: I,
              } = y;
              if (!(0, S.qt)(n)) throw new Error("Invalid chains");
              const N = {
                  chains: n,
                  methods: o || Fs,
                  events: u || js,
                  rpcMap: Bi({}, n.length ? { [Ls(n)]: I[Ls(n)] } : {}),
                },
                z = u?.filter((Te) => !js.includes(Te)),
                G = o?.filter((Te) => !Fs.includes(Te));
              if (
                !(
                  t ||
                  f ||
                  a ||
                  (null != z && z.length) ||
                  (null != G && G.length)
                )
              )
                return { required: n.length ? N : void 0 };
              const xe = {
                chains: [
                  ...new Set(
                    (z?.length && G?.length) || !t
                      ? N.chains.concat(t || [])
                      : t
                  ),
                ],
                methods: [
                  ...new Set(N.methods.concat(null != a && a.length ? a : Zu)),
                ],
                events: [
                  ...new Set(N.events.concat(null != f && f.length ? f : Uu)),
                ],
                rpcMap: I,
              };
              return {
                required: n.length ? N : void 0,
                optional: t.length ? xe : void 0,
              };
            })(t.rpc);
            try {
              const u = yield new Promise(
                (function () {
                  var I = (0, m.Z)(function* (N, z) {
                    var G;
                    t.rpc.showQrModal &&
                      (null == (G = t.modal) ||
                        G.subscribeModal((ce) => {
                          !ce.open &&
                            !t.signer.session &&
                            (t.signer.abortPairingAttempt(),
                            z(
                              new Error(
                                "Connection request reset. Please try again."
                              )
                            ));
                        })),
                      yield t.signer
                        .connect(
                          $u(
                            Bi(
                              { namespaces: Bi({}, o && { [t.namespace]: o }) },
                              a && { optionalNamespaces: { [t.namespace]: a } }
                            ),
                            { pairingTopic: n?.pairingTopic }
                          )
                        )
                        .then((ce) => {
                          N(ce);
                        })
                        .catch((ce) => {
                          z(new Error(ce.message));
                        });
                  });
                  return function (N, z) {
                    return I.apply(this, arguments);
                  };
                })()
              );
              if (!u) return;
              const f = (0, S.gu)(u.namespaces, [t.namespace]);
              t.setChainIds(t.rpc.chains.length ? t.rpc.chains : f),
                t.setAccounts(f),
                t.events.emit("connect", { chainId: ya(t.chainId) });
            } catch (u) {
              throw (t.signer.logger.error(u), u);
            } finally {
              t.modal && t.modal.closeModal();
            }
          })();
        }
        disconnect() {
          var n = this;
          return (0, m.Z)(function* () {
            n.session && (yield n.signer.disconnect()), n.reset();
          })();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (n) => {
            const { params: t } = n,
              { event: o } = t;
            "accountsChanged" === o.name
              ? ((this.accounts = this.parseAccounts(o.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === o.name
              ? this.setChainId(this.formatChainId(o.data))
              : this.events.emit(o.name, o.data),
              this.events.emit("session_event", n);
          }),
            this.signer.on("chainChanged", (n) => {
              const t = parseInt(n);
              (this.chainId = t),
                this.events.emit("chainChanged", ya(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (n) => {
              this.events.emit("session_update", n);
            }),
            this.signer.on("session_delete", (n) => {
              this.reset(),
                this.events.emit("session_delete", n),
                this.events.emit(
                  "disconnect",
                  $u(Bi({}, (0, S.D6)("USER_DISCONNECTED")), {
                    data: n.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (n) => {
              var t, o;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (o = this.modal) || o.openModal({ uri: n })),
                this.events.emit("display_uri", n);
            });
        }
        switchEthereumChain(n) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: n.toString(16) }],
          });
        }
        isCompatibleChainId(n) {
          return "string" == typeof n && n.startsWith(`${this.namespace}:`);
        }
        formatChainId(n) {
          return `${this.namespace}:${n}`;
        }
        parseChainId(n) {
          return Number(n.split(":")[1]);
        }
        setChainIds(n) {
          const t = n
            .filter((o) => this.isCompatibleChainId(o))
            .map((o) => this.parseChainId(o));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", ya(this.chainId)),
            this.persist());
        }
        setChainId(n) {
          if (this.isCompatibleChainId(n)) {
            const t = this.parseChainId(n);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(n) {
          const [t, o, a] = n.split(":");
          return { chainId: `${t}:${o}`, address: a };
        }
        setAccounts(n) {
          (this.accounts = n
            .filter(
              (t) =>
                this.parseChainId(this.parseAccountId(t).chainId) ===
                this.chainId
            )
            .map((t) => this.parseAccountId(t).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(n) {
          var t, o;
          const a = null != (t = n?.chains) ? t : [],
            u = null != (o = n?.optionalChains) ? o : [],
            f = a.concat(u);
          if (!f.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          const I = a.length ? n?.methods || Fs : [],
            N = a.length ? n?.events || js : [],
            z = n?.optionalMethods || [],
            G = n?.optionalEvents || [],
            ce = n?.rpcMap || this.buildRpcMap(f, n.projectId),
            xe = n?.qrModalOptions || void 0;
          return {
            chains: a?.map((Te) => this.formatChainId(Te)),
            optionalChains: u.map((Te) => this.formatChainId(Te)),
            methods: I,
            events: N,
            optionalMethods: z,
            optionalEvents: G,
            rpcMap: ce,
            showQrModal: !(null == n || !n.showQrModal),
            qrModalOptions: xe,
            projectId: n.projectId,
            metadata: n.metadata,
          };
        }
        buildRpcMap(n, t) {
          const o = {};
          return (
            n.forEach((a) => {
              o[a] = this.getRpcUrl(a, t);
            }),
            o
          );
        }
        initialize(n) {
          var t = this;
          return (0, m.Z)(function* () {
            if (
              ((t.rpc = t.getRpcConfig(n)),
              (t.chainId = Ls(
                t.rpc.chains.length ? t.rpc.chains : t.rpc.optionalChains
              )),
              (t.signer = yield Mp.init({
                projectId: t.rpc.projectId,
                metadata: t.rpc.metadata,
                disableProviderPing: n.disableProviderPing,
                relayUrl: n.relayUrl,
                storageOptions: n.storageOptions,
              })),
              t.registerEventListeners(),
              yield t.loadPersistedSession(),
              t.rpc.showQrModal)
            ) {
              let o;
              try {
                const { WalletConnectModal: a } = yield W.e(301).then(
                  W.bind(W, 93301)
                );
                o = a;
              } catch {
                throw new Error(
                  "To use QR modal, please install @walletconnect/modal package"
                );
              }
              if (o)
                try {
                  t.modal = new o(
                    Bi(
                      {
                        walletConnectVersion: 2,
                        projectId: t.rpc.projectId,
                        standaloneChains: t.rpc.chains,
                      },
                      t.rpc.qrModalOptions
                    )
                  );
                } catch (a) {
                  throw (
                    (t.signer.logger.error(a),
                    new Error("Could not generate WalletConnectModal Instance"))
                  );
                }
            }
          })();
        }
        loadConnectOpts(n) {
          if (!n) return;
          const { chains: t, optionalChains: o, rpcMap: a } = n;
          t &&
            (0, S.qt)(t) &&
            ((this.rpc.chains = t.map((u) => this.formatChainId(u))),
            t.forEach((u) => {
              this.rpc.rpcMap[u] = a?.[u] || this.getRpcUrl(u);
            })),
            o &&
              (0, S.qt)(o) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains = o?.map((u) => this.formatChainId(u))),
              o.forEach((u) => {
                this.rpc.rpcMap[u] = a?.[u] || this.getRpcUrl(u);
              }));
        }
        getRpcUrl(n, t) {
          var o;
          return (
            (null == (o = this.rpc.rpcMap) ? void 0 : o[n]) ||
            `https://rpc.walletconnect.com/v1/?chainId=eip155:${n}&projectId=${
              t || this.rpc.projectId
            }`
          );
        }
        loadPersistedSession() {
          var n = this;
          return (0, m.Z)(function* () {
            if (!n.session) return;
            const t = yield n.signer.client.core.storage.getItem(
                `${n.STORAGE_KEY}/chainId`
              ),
              o = n.session.namespaces[`${n.namespace}:${t}`]
                ? n.session.namespaces[`${n.namespace}:${t}`]
                : n.session.namespaces[n.namespace];
            n.setChainIds(t ? [n.formatChainId(t)] : o?.accounts),
              n.setAccounts(o?.accounts);
          })();
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              `${this.STORAGE_KEY}/chainId`,
              this.chainId
            );
        }
        parseAccounts(n) {
          return "string" == typeof n || n instanceof String
            ? [this.parseAccount(n)]
            : n.map((t) => this.parseAccount(t));
        }
      }
      const Gp = Ms;
    },
    62108: (Ce, M, W) => {
      "use strict";
      W.d(M, { q: () => m });
      class m {}
    },
    70699: (Ce, M, W) => {
      "use strict";
      W.r(M), W.d(M, { IEvents: () => m.q });
      var m = W(62108);
    },
    94953: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.HEARTBEAT_EVENTS = M.HEARTBEAT_INTERVAL = void 0);
      const m = W(35409);
      (M.HEARTBEAT_INTERVAL = m.FIVE_SECONDS),
        (M.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    85368: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        W(39653).__exportStar(W(94953), M);
    },
    69754: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.HeartBeat = void 0);
      const m = W(39653),
        ie = W(82016),
        de = W(35409),
        S = W(14083),
        X = W(85368);
      class be extends S.IHeartBeat {
        constructor(te) {
          super(te),
            (this.events = new ie.EventEmitter()),
            (this.interval = X.HEARTBEAT_INTERVAL),
            (this.interval = te?.interval || X.HEARTBEAT_INTERVAL);
        }
        static init(te) {
          return m.__awaiter(this, void 0, void 0, function* () {
            const se = new be(te);
            return yield se.init(), se;
          });
        }
        init() {
          return m.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(te, se) {
          this.events.on(te, se);
        }
        once(te, se) {
          this.events.once(te, se);
        }
        off(te, se) {
          this.events.off(te, se);
        }
        removeListener(te, se) {
          this.events.removeListener(te, se);
        }
        initialize() {
          return m.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              de.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(X.HEARTBEAT_EVENTS.pulse);
        }
      }
      M.HeartBeat = be;
    },
    80986: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 });
      const m = W(39653);
      m.__exportStar(W(69754), M),
        m.__exportStar(W(14083), M),
        m.__exportStar(W(85368), M);
    },
    37293: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.IHeartBeat = void 0);
      const m = W(70699);
      M.IHeartBeat = class ie extends m.IEvents {
        constructor(S) {
          super();
        }
      };
    },
    14083: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        W(39653).__exportStar(W(37293), M);
    },
    17297: (Ce, M, W) => {
      "use strict";
      const ie = W(33893),
        de = W(55499),
        S = ie.__importDefault(W(52906)),
        X = W(25420);
      M.ZP = class be {
        constructor() {
          this.localStorage = S.default;
        }
        getKeys() {
          return ie.__awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.localStorage);
          });
        }
        getEntries() {
          return ie.__awaiter(this, void 0, void 0, function* () {
            return Object.entries(this.localStorage).map(X.parseEntry);
          });
        }
        getItem(te) {
          return ie.__awaiter(this, void 0, void 0, function* () {
            const se = this.localStorage.getItem(te);
            if (null !== se) return de.safeJsonParse(se);
          });
        }
        setItem(te, se) {
          return ie.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.setItem(te, de.safeJsonStringify(se));
          });
        }
        removeItem(te) {
          return ie.__awaiter(this, void 0, void 0, function* () {
            this.localStorage.removeItem(te);
          });
        }
      };
    },
    52906: (Ce) => {
      "use strict";
      !(function () {
        let M;
        function W() {}
        (M = W),
          (M.prototype.getItem = function (m) {
            return this.hasOwnProperty(m) ? String(this[m]) : null;
          }),
          (M.prototype.setItem = function (m, ie) {
            this[m] = String(ie);
          }),
          (M.prototype.removeItem = function (m) {
            delete this[m];
          }),
          (M.prototype.clear = function () {
            const m = this;
            Object.keys(m).forEach(function (ie) {
              (m[ie] = void 0), delete m[ie];
            });
          }),
          (M.prototype.key = function (m) {
            return (m = m || 0), Object.keys(this)[m];
          }),
          M.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          (Ce.exports =
            typeof global < "u" && global.localStorage
              ? global.localStorage
              : typeof window < "u" && window.localStorage
              ? window.localStorage
              : new W());
      })();
    },
    25420: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 });
      const m = W(33893);
      m.__exportStar(W(43680), M), m.__exportStar(W(10362), M);
    },
    43680: (Ce, M) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.IKeyValueStorage = void 0),
        (M.IKeyValueStorage = class W {});
    },
    10362: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.parseEntry = void 0);
      const m = W(55499);
      M.parseEntry = function ie(de) {
        var S;
        return [
          de[0],
          m.safeJsonParse(null !== (S = de[1]) && void 0 !== S ? S : ""),
        ];
      };
    },
    26904: (Ce, M) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.PINO_CUSTOM_CONTEXT_KEY = M.PINO_LOGGER_DEFAULTS = void 0),
        (M.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (M.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    72997: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }), (M.pino = void 0);
      const m = W(57121),
        ie = m.__importDefault(W(71590));
      Object.defineProperty(M, "pino", {
        enumerable: !0,
        get: function () {
          return ie.default;
        },
      }),
        m.__exportStar(W(26904), M),
        m.__exportStar(W(22723), M);
    },
    22723: (Ce, M, W) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.generateChildLogger =
          M.formatChildLoggerContext =
          M.getLoggerContext =
          M.setBrowserLoggerContext =
          M.getBrowserLoggerContext =
          M.getDefaultLoggerOptions =
            void 0);
      const m = W(26904);
      function de(te, se = m.PINO_CUSTOM_CONTEXT_KEY) {
        return te[se] || "";
      }
      function S(te, se, ae = m.PINO_CUSTOM_CONTEXT_KEY) {
        return (te[ae] = se), te;
      }
      function X(te, se = m.PINO_CUSTOM_CONTEXT_KEY) {
        let ae = "";
        return (
          (ae =
            typeof te.bindings > "u"
              ? de(te, se)
              : te.bindings().context || ""),
          ae
        );
      }
      function be(te, se, ae = m.PINO_CUSTOM_CONTEXT_KEY) {
        const Oe = X(te, ae);
        return Oe.trim() ? `${Oe}/${se}` : se;
      }
      (M.getDefaultLoggerOptions = function ie(te) {
        return Object.assign(Object.assign({}, te), {
          level: te?.level || m.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (M.getBrowserLoggerContext = de),
        (M.setBrowserLoggerContext = S),
        (M.getLoggerContext = X),
        (M.formatChildLoggerContext = be),
        (M.generateChildLogger = function fe(
          te,
          se,
          ae = m.PINO_CUSTOM_CONTEXT_KEY
        ) {
          const Oe = be(te, se, ae);
          return S(te.child({ context: Oe }), Oe, ae);
        });
    },
    82768: () => {},
    32055: function (Ce, M) {
      var de,
        W = typeof self < "u" ? self : this,
        m = (function () {
          function de() {
            (this.fetch = !1), (this.DOMException = W.DOMException);
          }
          return (de.prototype = W), new de();
        })();
      (de = m),
        (function (X) {
          var be_searchParams = "URLSearchParams" in de,
            be_iterable = "Symbol" in de && "iterator" in Symbol,
            be_blob =
              "FileReader" in de &&
              "Blob" in de &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch {
                  return !1;
                }
              })(),
            be_formData = "FormData" in de,
            be_arrayBuffer = "ArrayBuffer" in de;
          if (be_arrayBuffer)
            var te = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              se =
                ArrayBuffer.isView ||
                function (v) {
                  return (
                    v && te.indexOf(Object.prototype.toString.call(v)) > -1
                  );
                };
          function ae(v) {
            if (
              ("string" != typeof v && (v = String(v)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v))
            )
              throw new TypeError("Invalid character in header field name");
            return v.toLowerCase();
          }
          function Oe(v) {
            return "string" != typeof v && (v = String(v)), v;
          }
          function ye(v) {
            var d = {
              next: function () {
                var x = v.shift();
                return { done: void 0 === x, value: x };
              },
            };
            return (
              be_iterable &&
                (d[Symbol.iterator] = function () {
                  return d;
                }),
              d
            );
          }
          function Ee(v) {
            (this.map = {}),
              v instanceof Ee
                ? v.forEach(function (d, x) {
                    this.append(x, d);
                  }, this)
                : Array.isArray(v)
                ? v.forEach(function (d) {
                    this.append(d[0], d[1]);
                  }, this)
                : v &&
                  Object.getOwnPropertyNames(v).forEach(function (d) {
                    this.append(d, v[d]);
                  }, this);
          }
          function le(v) {
            if (v.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            v.bodyUsed = !0;
          }
          function Ge(v) {
            return new Promise(function (d, x) {
              (v.onload = function () {
                d(v.result);
              }),
                (v.onerror = function () {
                  x(v.error);
                });
            });
          }
          function Le(v) {
            var d = new FileReader(),
              x = Ge(d);
            return d.readAsArrayBuffer(v), x;
          }
          function lt(v) {
            if (v.slice) return v.slice(0);
            var d = new Uint8Array(v.byteLength);
            return d.set(new Uint8Array(v)), d.buffer;
          }
          function _t() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (v) {
                (this._bodyInit = v),
                  v
                    ? "string" == typeof v
                      ? (this._bodyText = v)
                      : be_blob && Blob.prototype.isPrototypeOf(v)
                      ? (this._bodyBlob = v)
                      : be_formData && FormData.prototype.isPrototypeOf(v)
                      ? (this._bodyFormData = v)
                      : be_searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(v)
                      ? (this._bodyText = v.toString())
                      : be_arrayBuffer &&
                        be_blob &&
                        (function fe(v) {
                          return v && DataView.prototype.isPrototypeOf(v);
                        })(v)
                      ? ((this._bodyArrayBuffer = lt(v.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : be_arrayBuffer &&
                        (ArrayBuffer.prototype.isPrototypeOf(v) || se(v))
                      ? (this._bodyArrayBuffer = lt(v))
                      : (this._bodyText = v = Object.prototype.toString.call(v))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" == typeof v
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : be_searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(v) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              be_blob &&
                ((this.blob = function () {
                  var v = le(this);
                  if (v) return v;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? le(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(Le);
                })),
              (this.text = function () {
                var v = le(this);
                if (v) return v;
                if (this._bodyBlob)
                  return (function Ve(v) {
                    var d = new FileReader(),
                      x = Ge(d);
                    return d.readAsText(v), x;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function Je(v) {
                      for (
                        var d = new Uint8Array(v),
                          x = new Array(d.length),
                          C = 0;
                        C < d.length;
                        C++
                      )
                        x[C] = String.fromCharCode(d[C]);
                      return x.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              be_formData &&
                (this.formData = function () {
                  return this.text().then(oe);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (Ee.prototype.append = function (v, d) {
            (v = ae(v)), (d = Oe(d));
            var x = this.map[v];
            this.map[v] = x ? x + ", " + d : d;
          }),
            (Ee.prototype.delete = function (v) {
              delete this.map[ae(v)];
            }),
            (Ee.prototype.get = function (v) {
              return (v = ae(v)), this.has(v) ? this.map[v] : null;
            }),
            (Ee.prototype.has = function (v) {
              return this.map.hasOwnProperty(ae(v));
            }),
            (Ee.prototype.set = function (v, d) {
              this.map[ae(v)] = Oe(d);
            }),
            (Ee.prototype.forEach = function (v, d) {
              for (var x in this.map)
                this.map.hasOwnProperty(x) && v.call(d, this.map[x], x, this);
            }),
            (Ee.prototype.keys = function () {
              var v = [];
              return (
                this.forEach(function (d, x) {
                  v.push(x);
                }),
                ye(v)
              );
            }),
            (Ee.prototype.values = function () {
              var v = [];
              return (
                this.forEach(function (d) {
                  v.push(d);
                }),
                ye(v)
              );
            }),
            (Ee.prototype.entries = function () {
              var v = [];
              return (
                this.forEach(function (d, x) {
                  v.push([x, d]);
                }),
                ye(v)
              );
            }),
            be_iterable &&
              (Ee.prototype[Symbol.iterator] = Ee.prototype.entries);
          var ft = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function K(v, d) {
            var x = (d = d || {}).body;
            if (v instanceof K) {
              if (v.bodyUsed) throw new TypeError("Already read");
              (this.url = v.url),
                (this.credentials = v.credentials),
                d.headers || (this.headers = new Ee(v.headers)),
                (this.method = v.method),
                (this.mode = v.mode),
                (this.signal = v.signal),
                !x &&
                  null != v._bodyInit &&
                  ((x = v._bodyInit), (v.bodyUsed = !0));
            } else this.url = String(v);
            if (
              ((this.credentials =
                d.credentials || this.credentials || "same-origin"),
              (d.headers || !this.headers) &&
                (this.headers = new Ee(d.headers)),
              (this.method = (function He(v) {
                var d = v.toUpperCase();
                return ft.indexOf(d) > -1 ? d : v;
              })(d.method || this.method || "GET")),
              (this.mode = d.mode || this.mode || null),
              (this.signal = d.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && x)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(x);
          }
          function oe(v) {
            var d = new FormData();
            return (
              v
                .trim()
                .split("&")
                .forEach(function (x) {
                  if (x) {
                    var C = x.split("="),
                      ue = C.shift().replace(/\+/g, " "),
                      R = C.join("=").replace(/\+/g, " ");
                    d.append(decodeURIComponent(ue), decodeURIComponent(R));
                  }
                }),
              d
            );
          }
          function p(v) {
            var d = new Ee();
            return (
              v
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (C) {
                  var ue = C.split(":"),
                    R = ue.shift().trim();
                  if (R) {
                    var H = ue.join(":").trim();
                    d.append(R, H);
                  }
                }),
              d
            );
          }
          function b(v, d) {
            d || (d = {}),
              (this.type = "default"),
              (this.status = void 0 === d.status ? 200 : d.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in d ? d.statusText : "OK"),
              (this.headers = new Ee(d.headers)),
              (this.url = d.url || ""),
              this._initBody(v);
          }
          (K.prototype.clone = function () {
            return new K(this, { body: this._bodyInit });
          }),
            _t.call(K.prototype),
            _t.call(b.prototype),
            (b.prototype.clone = function () {
              return new b(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Ee(this.headers),
                url: this.url,
              });
            }),
            (b.error = function () {
              var v = new b(null, { status: 0, statusText: "" });
              return (v.type = "error"), v;
            });
          var _ = [301, 302, 303, 307, 308];
          (b.redirect = function (v, d) {
            if (-1 === _.indexOf(d))
              throw new RangeError("Invalid status code");
            return new b(null, { status: d, headers: { location: v } });
          }),
            (X.DOMException = de.DOMException);
          try {
            new X.DOMException();
          } catch {
            (X.DOMException = function (d, x) {
              (this.message = d), (this.name = x);
              var C = Error(d);
              this.stack = C.stack;
            }),
              (X.DOMException.prototype = Object.create(Error.prototype)),
              (X.DOMException.prototype.constructor = X.DOMException);
          }
          function P(v, d) {
            return new Promise(function (x, C) {
              var ue = new K(v, d);
              if (ue.signal && ue.signal.aborted)
                return C(new X.DOMException("Aborted", "AbortError"));
              var R = new XMLHttpRequest();
              function H() {
                R.abort();
              }
              (R.onload = function () {
                var ee = {
                  status: R.status,
                  statusText: R.statusText,
                  headers: p(R.getAllResponseHeaders() || ""),
                };
                (ee.url =
                  "responseURL" in R
                    ? R.responseURL
                    : ee.headers.get("X-Request-URL")),
                  x(new b("response" in R ? R.response : R.responseText, ee));
              }),
                (R.onerror = function () {
                  C(new TypeError("Network request failed"));
                }),
                (R.ontimeout = function () {
                  C(new TypeError("Network request failed"));
                }),
                (R.onabort = function () {
                  C(new X.DOMException("Aborted", "AbortError"));
                }),
                R.open(ue.method, ue.url, !0),
                "include" === ue.credentials
                  ? (R.withCredentials = !0)
                  : "omit" === ue.credentials && (R.withCredentials = !1),
                "responseType" in R && be_blob && (R.responseType = "blob"),
                ue.headers.forEach(function (ee, q) {
                  R.setRequestHeader(q, ee);
                }),
                ue.signal &&
                  (ue.signal.addEventListener("abort", H),
                  (R.onreadystatechange = function () {
                    4 === R.readyState &&
                      ue.signal.removeEventListener("abort", H);
                  })),
                R.send(typeof ue._bodyInit > "u" ? null : ue._bodyInit);
            });
          }
          (P.polyfill = !0),
            de.fetch ||
              ((de.fetch = P),
              (de.Headers = Ee),
              (de.Request = K),
              (de.Response = b)),
            (X.Headers = Ee),
            (X.Request = K),
            (X.Response = b),
            (X.fetch = P),
            Object.defineProperty(X, "__esModule", { value: !0 });
        })({}),
        (m.fetch.ponyfill = !0),
        delete m.fetch.polyfill;
      var ie = m;
      ((M = ie.fetch).default = ie.fetch),
        (M.fetch = ie.fetch),
        (M.Headers = ie.Headers),
        (M.Request = ie.Request),
        (M.Response = ie.Response),
        (Ce.exports = M);
    },
    12650: (Ce, M, W) => {
      Ce = W.nmd(Ce);
      var ie = "__lodash_hash_undefined__",
        de = 1,
        S = 2,
        X = 9007199254740991,
        be = "[object Arguments]",
        fe = "[object Array]",
        te = "[object AsyncFunction]",
        se = "[object Boolean]",
        ae = "[object Date]",
        Oe = "[object Error]",
        ye = "[object Function]",
        Ee = "[object GeneratorFunction]",
        le = "[object Map]",
        Ge = "[object Number]",
        Le = "[object Null]",
        Ve = "[object Object]",
        Je = "[object Promise]",
        lt = "[object Proxy]",
        _t = "[object RegExp]",
        ft = "[object Set]",
        He = "[object String]",
        oe = "[object Undefined]",
        p = "[object WeakMap]",
        b = "[object ArrayBuffer]",
        _ = "[object DataView]",
        we = /^\[object .+?Constructor\]$/,
        Ze = /^(?:0|[1-9]\d*)$/,
        Ae = {};
      (Ae["[object Float32Array]"] =
        Ae["[object Float64Array]"] =
        Ae["[object Int8Array]"] =
        Ae["[object Int16Array]"] =
        Ae["[object Int32Array]"] =
        Ae["[object Uint8Array]"] =
        Ae["[object Uint8ClampedArray]"] =
        Ae["[object Uint16Array]"] =
        Ae["[object Uint32Array]"] =
          !0),
        (Ae[be] =
          Ae[fe] =
          Ae[b] =
          Ae[se] =
          Ae[_] =
          Ae[ae] =
          Ae[Oe] =
          Ae[ye] =
          Ae[le] =
          Ae[Ge] =
          Ae[Ve] =
          Ae[_t] =
          Ae[ft] =
          Ae[He] =
          Ae[p] =
            !1);
      var Qr =
          "object" == typeof global &&
          global &&
          global.Object === Object &&
          global,
        Yr = "object" == typeof self && self && self.Object === Object && self,
        ht = Qr || Yr || Function("return this")(),
        B = M && !M.nodeType && M,
        V = B && Ce && !Ce.nodeType && Ce,
        Z = V && V.exports === B,
        h = Z && Qr.process,
        D = (function () {
          try {
            return h && h.binding && h.binding("util");
          } catch {}
        })(),
        me = D && D.isTypedArray;
      function ot(O, F) {
        for (var re = -1, pe = null == O ? 0 : O.length; ++re < pe; )
          if (F(O[re], re, O)) return !0;
        return !1;
      }
      function zt(O, F) {
        return O.has(F);
      }
      function ir(O) {
        var F = -1,
          re = Array(O.size);
        return (
          O.forEach(function (pe, at) {
            re[++F] = [at, pe];
          }),
          re
        );
      }
      function Ht(O) {
        var F = -1,
          re = Array(O.size);
        return (
          O.forEach(function (pe) {
            re[++F] = pe;
          }),
          re
        );
      }
      var O,
        Pt = Array.prototype,
        tt = Object.prototype,
        dt = ht["__core-js_shared__"],
        it = Function.prototype.toString,
        st = tt.hasOwnProperty,
        Bt = (O = /[^.]+$/.exec((dt && dt.keys && dt.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + O
          : "",
        Jt = tt.toString,
        ur = RegExp(
          "^" +
            it
              .call(st)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        lr = Z ? ht.Buffer : void 0,
        sr = ht.Symbol,
        pr = ht.Uint8Array,
        gr = tt.propertyIsEnumerable,
        zr = Pt.splice,
        yr = sr ? sr.toStringTag : void 0,
        br = Object.getOwnPropertySymbols,
        un = lr ? lr.isBuffer : void 0,
        Jn = (function $t(O, F) {
          return function (re) {
            return O(F(re));
          };
        })(Object.keys, Object),
        ln = Ln(ht, "DataView"),
        fn = Ln(ht, "Map"),
        Rt = Ln(ht, "Promise"),
        At = Ln(ht, "Set"),
        Ft = Ln(ht, "WeakMap"),
        vt = Ln(Object, "create"),
        Vt = xn(ln),
        Qt = xn(fn),
        Dt = xn(Rt),
        jt = xn(At),
        mt = xn(Ft),
        Tt = sr ? sr.prototype : void 0,
        bt = Tt ? Tt.valueOf : void 0;
      function pt(O) {
        var F = -1,
          re = null == O ? 0 : O.length;
        for (this.clear(); ++F < re; ) {
          var pe = O[F];
          this.set(pe[0], pe[1]);
        }
      }
      function Xr(O) {
        var F = -1,
          re = null == O ? 0 : O.length;
        for (this.clear(); ++F < re; ) {
          var pe = O[F];
          this.set(pe[0], pe[1]);
        }
      }
      function hn(O) {
        var F = -1,
          re = null == O ? 0 : O.length;
        for (this.clear(); ++F < re; ) {
          var pe = O[F];
          this.set(pe[0], pe[1]);
        }
      }
      function Nr(O) {
        var F = -1,
          re = null == O ? 0 : O.length;
        for (this.__data__ = new hn(); ++F < re; ) this.add(O[F]);
      }
      function dn(O) {
        var F = (this.__data__ = new Xr(O));
        this.size = F.size;
      }
      function Li(O, F) {
        for (var re = O.length; re--; ) if (Es(O[re][0], F)) return re;
        return -1;
      }
      function Qn(O) {
        return null == O
          ? void 0 === O
            ? oe
            : Le
          : yr && yr in Object(O)
          ? (function di(O) {
              var F = st.call(O, yr),
                re = O[yr];
              try {
                O[yr] = void 0;
                var pe = !0;
              } catch {}
              var at = Jt.call(O);
              return pe && (F ? (O[yr] = re) : delete O[yr]), at;
            })(O)
          : (function Ko(O) {
              return Jt.call(O);
            })(O);
      }
      function vs(O) {
        return ei(O) && Qn(O) == be;
      }
      function ms(O, F, re, pe, at) {
        return (
          O === F ||
          (null == O || null == F || (!ei(O) && !ei(F))
            ? O != O && F != F
            : (function Uo(O, F, re, pe, at, Ne) {
                var It = pi(O),
                  Wt = pi(F),
                  er = It ? fe : pn(O),
                  wt = Wt ? fe : pn(F),
                  wr = (er = er == be ? Ve : er) == Ve,
                  Fr = (wt = wt == be ? Ve : wt) == Ve,
                  or = er == wt;
                if (or && Mi(O)) {
                  if (!Mi(F)) return !1;
                  (It = !0), (wr = !1);
                }
                if (or && !wr)
                  return (
                    Ne || (Ne = new dn()),
                    It || Os(O)
                      ? ws(O, F, re, pe, at, Ne)
                      : (function $o(O, F, re, pe, at, Ne, It) {
                          switch (re) {
                            case _:
                              if (
                                O.byteLength != F.byteLength ||
                                O.byteOffset != F.byteOffset
                              )
                                return !1;
                              (O = O.buffer), (F = F.buffer);
                            case b:
                              return !(
                                O.byteLength != F.byteLength ||
                                !Ne(new pr(O), new pr(F))
                              );
                            case se:
                            case ae:
                            case Ge:
                              return Es(+O, +F);
                            case Oe:
                              return O.name == F.name && O.message == F.message;
                            case _t:
                            case He:
                              return O == F + "";
                            case le:
                              var Wt = ir;
                            case ft:
                              if (
                                (Wt || (Wt = Ht),
                                O.size != F.size && !(pe & de))
                              )
                                return !1;
                              var wt = It.get(O);
                              if (wt) return wt == F;
                              (pe |= S), It.set(O, F);
                              var wr = ws(Wt(O), Wt(F), pe, at, Ne, It);
                              return It.delete(O), wr;
                            case "[object Symbol]":
                              if (bt) return bt.call(O) == bt.call(F);
                          }
                          return !1;
                        })(O, F, er, re, pe, at, Ne)
                  );
                if (!(re & de)) {
                  var Pr = wr && st.call(O, "__wrapped__"),
                    xr = Fr && st.call(F, "__wrapped__");
                  if (Pr || xr) {
                    var gn = Pr ? O.value() : O,
                      tn = xr ? F.value() : F;
                    return Ne || (Ne = new dn()), at(gn, tn, re, pe, Ne);
                  }
                }
                return (
                  !!or &&
                  (Ne || (Ne = new dn()),
                  (function Ho(O, F, re, pe, at, Ne) {
                    var It = re & de,
                      Wt = xs(O),
                      er = Wt.length;
                    if (er != xs(F).length && !It) return !1;
                    for (var Fr = er; Fr--; ) {
                      var or = Wt[Fr];
                      if (!(It ? or in F : st.call(F, or))) return !1;
                    }
                    var Pr = Ne.get(O);
                    if (Pr && Ne.get(F)) return Pr == F;
                    var xr = !0;
                    Ne.set(O, F), Ne.set(F, O);
                    for (var gn = It; ++Fr < er; ) {
                      var tn = O[(or = Wt[Fr])],
                        En = F[or];
                      if (pe)
                        var Rs = It
                          ? pe(En, tn, or, F, O, Ne)
                          : pe(tn, En, or, O, F, Ne);
                      if (
                        !(void 0 === Rs
                          ? tn === En || at(tn, En, re, pe, Ne)
                          : Rs)
                      ) {
                        xr = !1;
                        break;
                      }
                      gn || (gn = "constructor" == or);
                    }
                    if (xr && !gn) {
                      var gi = O.constructor,
                        yi = F.constructor;
                      gi != yi &&
                        "constructor" in O &&
                        "constructor" in F &&
                        !(
                          "function" == typeof gi &&
                          gi instanceof gi &&
                          "function" == typeof yi &&
                          yi instanceof yi
                        ) &&
                        (xr = !1);
                    }
                    return Ne.delete(O), Ne.delete(F), xr;
                  })(O, F, re, pe, at, Ne))
                );
              })(O, F, re, pe, ms, at))
        );
      }
      function ws(O, F, re, pe, at, Ne) {
        var It = re & de,
          Wt = O.length,
          er = F.length;
        if (Wt != er && !(It && er > Wt)) return !1;
        var wt = Ne.get(O);
        if (wt && Ne.get(F)) return wt == F;
        var wr = -1,
          Fr = !0,
          or = re & S ? new Nr() : void 0;
        for (Ne.set(O, F), Ne.set(F, O); ++wr < Wt; ) {
          var Pr = O[wr],
            xr = F[wr];
          if (pe)
            var gn = It ? pe(xr, Pr, wr, F, O, Ne) : pe(Pr, xr, wr, O, F, Ne);
          if (void 0 !== gn) {
            if (gn) continue;
            Fr = !1;
            break;
          }
          if (or) {
            if (
              !ot(F, function (tn, En) {
                if (!zt(or, En) && (Pr === tn || at(Pr, tn, re, pe, Ne)))
                  return or.push(En);
              })
            ) {
              Fr = !1;
              break;
            }
          } else if (Pr !== xr && !at(Pr, xr, re, pe, Ne)) {
            Fr = !1;
            break;
          }
        }
        return Ne.delete(O), Ne.delete(F), Fr;
      }
      function xs(O) {
        return (function Zo(O, F, re) {
          var pe = F(O);
          return pi(O)
            ? pe
            : (function We(O, F) {
                for (var re = -1, pe = F.length, at = O.length; ++re < pe; )
                  O[at + re] = F[re];
                return O;
              })(pe, re(O));
        })(O, Qo, Xn);
      }
      function Yn(O, F) {
        var re = O.__data__;
        return (function Xt(O) {
          var F = typeof O;
          return "string" == F ||
            "number" == F ||
            "symbol" == F ||
            "boolean" == F
            ? "__proto__" !== O
            : null === O;
        })(F)
          ? re["string" == typeof F ? "string" : "hash"]
          : re.map;
      }
      function Ln(O, F) {
        var re = (function nr(O, F) {
          return O?.[F];
        })(O, F);
        return (function qo(O) {
          return (
            !(
              !Ps(O) ||
              (function Vo(O) {
                return !!Bt && Bt in O;
              })(O)
            ) && (Is(O) ? ur : we).test(xn(O))
          );
        })(re)
          ? re
          : void 0;
      }
      (pt.prototype.clear = function kt() {
        (this.__data__ = vt ? vt(null) : {}), (this.size = 0);
      }),
        (pt.prototype.delete = function Yt(O) {
          var F = this.has(O) && delete this.__data__[O];
          return (this.size -= F ? 1 : 0), F;
        }),
        (pt.prototype.get = function Kt(O) {
          var F = this.__data__;
          if (vt) {
            var re = F[O];
            return re === ie ? void 0 : re;
          }
          return st.call(F, O) ? F[O] : void 0;
        }),
        (pt.prototype.has = function Gt(O) {
          var F = this.__data__;
          return vt ? void 0 !== F[O] : st.call(F, O);
        }),
        (pt.prototype.set = function Do(O, F) {
          var re = this.__data__;
          return (
            (this.size += this.has(O) ? 0 : 1),
            (re[O] = vt && void 0 === F ? ie : F),
            this
          );
        }),
        (Xr.prototype.clear = function No() {
          (this.__data__ = []), (this.size = 0);
        }),
        (Xr.prototype.delete = function ds(O) {
          var F = this.__data__,
            re = Li(F, O);
          return !(
            re < 0 ||
            (re == F.length - 1 ? F.pop() : zr.call(F, re, 1), --this.size, 0)
          );
        }),
        (Xr.prototype.get = function ps(O) {
          var F = this.__data__,
            re = Li(F, O);
          return re < 0 ? void 0 : F[re][1];
        }),
        (Xr.prototype.has = function gs(O) {
          return Li(this.__data__, O) > -1;
        }),
        (Xr.prototype.set = function Fo(O, F) {
          var re = this.__data__,
            pe = Li(re, O);
          return (
            pe < 0 ? (++this.size, re.push([O, F])) : (re[pe][1] = F), this
          );
        }),
        (hn.prototype.clear = function ji() {
          (this.size = 0),
            (this.__data__ = {
              hash: new pt(),
              map: new (fn || Xr)(),
              string: new pt(),
            });
        }),
        (hn.prototype.delete = function hi(O) {
          var F = Yn(this, O).delete(O);
          return (this.size -= F ? 1 : 0), F;
        }),
        (hn.prototype.get = function en(O) {
          return Yn(this, O).get(O);
        }),
        (hn.prototype.has = function Dr(O) {
          return Yn(this, O).has(O);
        }),
        (hn.prototype.set = function Zc(O, F) {
          var re = Yn(this, O),
            pe = re.size;
          return re.set(O, F), (this.size += re.size == pe ? 0 : 1), this;
        }),
        (Nr.prototype.add = Nr.prototype.push =
          function Uc(O) {
            return this.__data__.set(O, ie), this;
          }),
        (Nr.prototype.has = function qc(O) {
          return this.__data__.has(O);
        }),
        (dn.prototype.clear = function jo() {
          (this.__data__ = new Xr()), (this.size = 0);
        }),
        (dn.prototype.delete = function zc(O) {
          var F = this.__data__,
            re = F.delete(O);
          return (this.size = F.size), re;
        }),
        (dn.prototype.get = function ys(O) {
          return this.__data__.get(O);
        }),
        (dn.prototype.has = function _s(O) {
          return this.__data__.has(O);
        }),
        (dn.prototype.set = function Lo(O, F) {
          var re = this.__data__;
          if (re instanceof Xr) {
            var pe = re.__data__;
            if (!fn || pe.length < 199)
              return pe.push([O, F]), (this.size = ++re.size), this;
            re = this.__data__ = new hn(pe);
          }
          return re.set(O, F), (this.size = re.size), this;
        });
      var Xn = br
          ? function (O) {
              return null == O
                ? []
                : ((O = Object(O)),
                  (function Re(O, F) {
                    for (
                      var re = -1,
                        pe = null == O ? 0 : O.length,
                        at = 0,
                        Ne = [];
                      ++re < pe;

                    ) {
                      var It = O[re];
                      F(It, re, O) && (Ne[at++] = It);
                    }
                    return Ne;
                  })(br(O), function (F) {
                    return gr.call(O, F);
                  }));
            }
          : function Yo() {
              return [];
            },
        pn = Qn;
      function Bo(O, F) {
        return (
          !!(F = F ?? X) &&
          ("number" == typeof O || Ze.test(O)) &&
          O > -1 &&
          O % 1 == 0 &&
          O < F
        );
      }
      function xn(O) {
        if (null != O) {
          try {
            return it.call(O);
          } catch {}
          try {
            return O + "";
          } catch {}
        }
        return "";
      }
      function Es(O, F) {
        return O === F || (O != O && F != F);
      }
      ((ln && pn(new ln(new ArrayBuffer(1))) != _) ||
        (fn && pn(new fn()) != le) ||
        (Rt && pn(Rt.resolve()) != Je) ||
        (At && pn(new At()) != ft) ||
        (Ft && pn(new Ft()) != p)) &&
        (pn = function (O) {
          var F = Qn(O),
            re = F == Ve ? O.constructor : void 0,
            pe = re ? xn(re) : "";
          if (pe)
            switch (pe) {
              case Vt:
                return _;
              case Qt:
                return le;
              case Dt:
                return Je;
              case jt:
                return ft;
              case mt:
                return p;
            }
          return F;
        });
      var Go = vs(
          (function () {
            return arguments;
          })()
        )
          ? vs
          : function (O) {
              return ei(O) && st.call(O, "callee") && !gr.call(O, "callee");
            },
        pi = Array.isArray,
        Mi =
          un ||
          function Xo() {
            return !1;
          };
      function Is(O) {
        if (!Ps(O)) return !1;
        var F = Qn(O);
        return F == ye || F == Ee || F == te || F == lt;
      }
      function Ss(O) {
        return "number" == typeof O && O > -1 && O % 1 == 0 && O <= X;
      }
      function Ps(O) {
        var F = typeof O;
        return null != O && ("object" == F || "function" == F);
      }
      function ei(O) {
        return null != O && "object" == typeof O;
      }
      var Os = me
        ? (function nt(O) {
            return function (F) {
              return O(F);
            };
          })(me)
        : function bs(O) {
            return ei(O) && Ss(O.length) && !!Ae[Qn(O)];
          };
      function Qo(O) {
        return (function Wo(O) {
          return null != O && Ss(O.length) && !Is(O);
        })(O)
          ? (function Mo(O, F) {
              var re = pi(O),
                pe = !re && Go(O),
                at = !re && !pe && Mi(O),
                Ne = !re && !pe && !at && Os(O),
                It = re || pe || at || Ne,
                Wt = It
                  ? (function Xe(O, F) {
                      for (var re = -1, pe = Array(O); ++re < O; )
                        pe[re] = F(re);
                      return pe;
                    })(O.length, String)
                  : [],
                er = Wt.length;
              for (var wt in O)
                (F || st.call(O, wt)) &&
                  (!It ||
                    !(
                      "length" == wt ||
                      (at && ("offset" == wt || "parent" == wt)) ||
                      (Ne &&
                        ("buffer" == wt ||
                          "byteLength" == wt ||
                          "byteOffset" == wt)) ||
                      Bo(wt, er)
                    )) &&
                  Wt.push(wt);
              return Wt;
            })(O)
          : (function zo(O) {
              if (
                !(function ko(O) {
                  var F = O && O.constructor;
                  return O === (("function" == typeof F && F.prototype) || tt);
                })(O)
              )
                return Jn(O);
              var F = [];
              for (var re in Object(O))
                st.call(O, re) && "constructor" != re && F.push(re);
              return F;
            })(O);
      }
      Ce.exports = function Jo(O, F) {
        return ms(O, F);
      };
    },
    70514: (Ce) => {
      "use strict";
      function M(m) {
        try {
          return JSON.stringify(m);
        } catch {
          return '"[Circular]"';
        }
      }
      Ce.exports = function W(m, ie, de) {
        var S = (de && de.stringify) || M;
        if ("object" == typeof m && null !== m) {
          var be = ie.length + 1;
          if (1 === be) return m;
          var fe = new Array(be);
          fe[0] = S(m);
          for (var te = 1; te < be; te++) fe[te] = S(ie[te]);
          return fe.join(" ");
        }
        if ("string" != typeof m) return m;
        var se = ie.length;
        if (0 === se) return m;
        for (
          var ae = "", Oe = 0, ye = -1, Ee = (m && m.length) || 0, le = 0;
          le < Ee;

        ) {
          if (37 === m.charCodeAt(le) && le + 1 < Ee) {
            switch (((ye = ye > -1 ? ye : 0), m.charCodeAt(le + 1))) {
              case 100:
              case 102:
                if (Oe >= se || null == ie[Oe]) break;
                ye < le && (ae += m.slice(ye, le)),
                  (ae += Number(ie[Oe])),
                  (ye = le + 2),
                  le++;
                break;
              case 105:
                if (Oe >= se || null == ie[Oe]) break;
                ye < le && (ae += m.slice(ye, le)),
                  (ae += Math.floor(Number(ie[Oe]))),
                  (ye = le + 2),
                  le++;
                break;
              case 79:
              case 111:
              case 106:
                if (Oe >= se || void 0 === ie[Oe]) break;
                ye < le && (ae += m.slice(ye, le));
                var Ge = typeof ie[Oe];
                if ("string" === Ge) {
                  (ae += "'" + ie[Oe] + "'"), (ye = le + 2), le++;
                  break;
                }
                if ("function" === Ge) {
                  (ae += ie[Oe].name || "<anonymous>"), (ye = le + 2), le++;
                  break;
                }
                (ae += S(ie[Oe])), (ye = le + 2), le++;
                break;
              case 115:
                if (Oe >= se) break;
                ye < le && (ae += m.slice(ye, le)),
                  (ae += String(ie[Oe])),
                  (ye = le + 2),
                  le++;
                break;
              case 37:
                ye < le && (ae += m.slice(ye, le)),
                  (ae += "%"),
                  (ye = le + 2),
                  le++,
                  Oe--;
            }
            ++Oe;
          }
          ++le;
        }
        return -1 === ye ? m : (ye < Ee && (ae += m.slice(ye)), ae);
      };
    },
    55499: (Ce, M) => {
      "use strict";
      Object.defineProperty(M, "__esModule", { value: !0 }),
        (M.safeJsonParse = function W(ie) {
          if ("string" != typeof ie)
            throw new Error(
              "Cannot safe json parse value of type " + typeof ie
            );
          try {
            return JSON.parse(ie);
          } catch {
            return ie;
          }
        }),
        (M.safeJsonStringify = function m(ie) {
          return "string" == typeof ie
            ? ie
            : JSON.stringify(ie, (de, S) => (typeof S > "u" ? null : S));
        });
    },
    3569: (Ce) => {
      "use strict";
      Ce.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    34308: (Ce, M, W) => {
      "use strict";
      W.r(M),
        W.d(M, {
          __assign: () => de,
          __asyncDelegator: () => Je,
          __asyncGenerator: () => Ve,
          __asyncValues: () => lt,
          __await: () => Le,
          __awaiter: () => te,
          __classPrivateFieldGet: () => K,
          __classPrivateFieldSet: () => oe,
          __createBinding: () => ae,
          __decorate: () => X,
          __exportStar: () => Oe,
          __extends: () => ie,
          __generator: () => se,
          __importDefault: () => He,
          __importStar: () => ft,
          __makeTemplateObject: () => _t,
          __metadata: () => fe,
          __param: () => be,
          __read: () => Ee,
          __rest: () => S,
          __spread: () => le,
          __spreadArrays: () => Ge,
          __values: () => ye,
        });
      var m = function (p, b) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (_, P) {
              _.__proto__ = P;
            }) ||
          function (_, P) {
            for (var v in P) P.hasOwnProperty(v) && (_[v] = P[v]);
          })(p, b);
      };
      function ie(p, b) {
        function _() {
          this.constructor = p;
        }
        m(p, b),
          (p.prototype =
            null === b
              ? Object.create(b)
              : ((_.prototype = b.prototype), new _()));
      }
      var de = function () {
        return (
          (de =
            Object.assign ||
            function (b) {
              for (var _, P = 1, v = arguments.length; P < v; P++)
                for (var d in (_ = arguments[P]))
                  Object.prototype.hasOwnProperty.call(_, d) && (b[d] = _[d]);
              return b;
            }),
          de.apply(this, arguments)
        );
      };
      function S(p, b) {
        var _ = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) &&
            b.indexOf(P) < 0 &&
            (_[P] = p[P]);
        if (null != p && "function" == typeof Object.getOwnPropertySymbols) {
          var v = 0;
          for (P = Object.getOwnPropertySymbols(p); v < P.length; v++)
            b.indexOf(P[v]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(p, P[v]) &&
              (_[P[v]] = p[P[v]]);
        }
        return _;
      }
      function X(p, b, _, P) {
        var x,
          v = arguments.length,
          d =
            v < 3
              ? b
              : null === P
              ? (P = Object.getOwnPropertyDescriptor(b, _))
              : P;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          d = Reflect.decorate(p, b, _, P);
        else
          for (var C = p.length - 1; C >= 0; C--)
            (x = p[C]) &&
              (d = (v < 3 ? x(d) : v > 3 ? x(b, _, d) : x(b, _)) || d);
        return v > 3 && d && Object.defineProperty(b, _, d), d;
      }
      function be(p, b) {
        return function (_, P) {
          b(_, P, p);
        };
      }
      function fe(p, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(p, b);
      }
      function te(p, b, _, P) {
        return new (_ || (_ = Promise))(function (d, x) {
          function C(H) {
            try {
              R(P.next(H));
            } catch (ee) {
              x(ee);
            }
          }
          function ue(H) {
            try {
              R(P.throw(H));
            } catch (ee) {
              x(ee);
            }
          }
          function R(H) {
            H.done
              ? d(H.value)
              : (function v(d) {
                  return d instanceof _
                    ? d
                    : new _(function (x) {
                        x(d);
                      });
                })(H.value).then(C, ue);
          }
          R((P = P.apply(p, b || [])).next());
        });
      }
      function se(p, b) {
        var P,
          v,
          d,
          x,
          _ = {
            label: 0,
            sent: function () {
              if (1 & d[0]) throw d[1];
              return d[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (x = { next: C(0), throw: C(1), return: C(2) }),
          "function" == typeof Symbol &&
            (x[Symbol.iterator] = function () {
              return this;
            }),
          x
        );
        function C(R) {
          return function (H) {
            return (function ue(R) {
              if (P) throw new TypeError("Generator is already executing.");
              for (; _; )
                try {
                  if (
                    ((P = 1),
                    v &&
                      (d =
                        2 & R[0]
                          ? v.return
                          : R[0]
                          ? v.throw || ((d = v.return) && d.call(v), 0)
                          : v.next) &&
                      !(d = d.call(v, R[1])).done)
                  )
                    return d;
                  switch (((v = 0), d && (R = [2 & R[0], d.value]), R[0])) {
                    case 0:
                    case 1:
                      d = R;
                      break;
                    case 4:
                      return _.label++, { value: R[1], done: !1 };
                    case 5:
                      _.label++, (v = R[1]), (R = [0]);
                      continue;
                    case 7:
                      (R = _.ops.pop()), _.trys.pop();
                      continue;
                    default:
                      if (
                        !(d = (d = _.trys).length > 0 && d[d.length - 1]) &&
                        (6 === R[0] || 2 === R[0])
                      ) {
                        _ = 0;
                        continue;
                      }
                      if (3 === R[0] && (!d || (R[1] > d[0] && R[1] < d[3]))) {
                        _.label = R[1];
                        break;
                      }
                      if (6 === R[0] && _.label < d[1]) {
                        (_.label = d[1]), (d = R);
                        break;
                      }
                      if (d && _.label < d[2]) {
                        (_.label = d[2]), _.ops.push(R);
                        break;
                      }
                      d[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  R = b.call(p, _);
                } catch (H) {
                  (R = [6, H]), (v = 0);
                } finally {
                  P = d = 0;
                }
              if (5 & R[0]) throw R[1];
              return { value: R[0] ? R[1] : void 0, done: !0 };
            })([R, H]);
          };
        }
      }
      function ae(p, b, _, P) {
        void 0 === P && (P = _), (p[P] = b[_]);
      }
      function Oe(p, b) {
        for (var _ in p)
          "default" !== _ && !b.hasOwnProperty(_) && (b[_] = p[_]);
      }
      function ye(p) {
        var b = "function" == typeof Symbol && Symbol.iterator,
          _ = b && p[b],
          P = 0;
        if (_) return _.call(p);
        if (p && "number" == typeof p.length)
          return {
            next: function () {
              return (
                p && P >= p.length && (p = void 0),
                { value: p && p[P++], done: !p }
              );
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Ee(p, b) {
        var _ = "function" == typeof Symbol && p[Symbol.iterator];
        if (!_) return p;
        var v,
          x,
          P = _.call(p),
          d = [];
        try {
          for (; (void 0 === b || b-- > 0) && !(v = P.next()).done; )
            d.push(v.value);
        } catch (C) {
          x = { error: C };
        } finally {
          try {
            v && !v.done && (_ = P.return) && _.call(P);
          } finally {
            if (x) throw x.error;
          }
        }
        return d;
      }
      function le() {
        for (var p = [], b = 0; b < arguments.length; b++)
          p = p.concat(Ee(arguments[b]));
        return p;
      }
      function Ge() {
        for (var p = 0, b = 0, _ = arguments.length; b < _; b++)
          p += arguments[b].length;
        var P = Array(p),
          v = 0;
        for (b = 0; b < _; b++)
          for (var d = arguments[b], x = 0, C = d.length; x < C; x++, v++)
            P[v] = d[x];
        return P;
      }
      function Le(p) {
        return this instanceof Le ? ((this.v = p), this) : new Le(p);
      }
      function Ve(p, b, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var v,
          P = _.apply(p, b || []),
          d = [];
        return (
          (v = {}),
          x("next"),
          x("throw"),
          x("return"),
          (v[Symbol.asyncIterator] = function () {
            return this;
          }),
          v
        );
        function x(q) {
          P[q] &&
            (v[q] = function (we) {
              return new Promise(function (Ze, Ae) {
                d.push([q, we, Ze, Ae]) > 1 || C(q, we);
              });
            });
        }
        function C(q, we) {
          try {
            !(function ue(q) {
              q.value instanceof Le
                ? Promise.resolve(q.value.v).then(R, H)
                : ee(d[0][2], q);
            })(P[q](we));
          } catch (Ze) {
            ee(d[0][3], Ze);
          }
        }
        function R(q) {
          C("next", q);
        }
        function H(q) {
          C("throw", q);
        }
        function ee(q, we) {
          q(we), d.shift(), d.length && C(d[0][0], d[0][1]);
        }
      }
      function Je(p) {
        var b, _;
        return (
          (b = {}),
          P("next"),
          P("throw", function (v) {
            throw v;
          }),
          P("return"),
          (b[Symbol.iterator] = function () {
            return this;
          }),
          b
        );
        function P(v, d) {
          b[v] = p[v]
            ? function (x) {
                return (_ = !_)
                  ? { value: Le(p[v](x)), done: "return" === v }
                  : d
                  ? d(x)
                  : x;
              }
            : d;
        }
      }
      function lt(p) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var _,
          b = p[Symbol.asyncIterator];
        return b
          ? b.call(p)
          : ((p = ye(p)),
            (_ = {}),
            P("next"),
            P("throw"),
            P("return"),
            (_[Symbol.asyncIterator] = function () {
              return this;
            }),
            _);
        function P(d) {
          _[d] =
            p[d] &&
            function (x) {
              return new Promise(function (C, ue) {
                !(function v(d, x, C, ue) {
                  Promise.resolve(ue).then(function (R) {
                    d({ value: R, done: C });
                  }, x);
                })(C, ue, (x = p[d](x)).done, x.value);
              });
            };
        }
      }
      function _t(p, b) {
        return (
          Object.defineProperty
            ? Object.defineProperty(p, "raw", { value: b })
            : (p.raw = b),
          p
        );
      }
      function ft(p) {
        if (p && p.__esModule) return p;
        var b = {};
        if (null != p)
          for (var _ in p) Object.hasOwnProperty.call(p, _) && (b[_] = p[_]);
        return (b.default = p), b;
      }
      function He(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function K(p, b) {
        if (!b.has(p))
          throw new TypeError("attempted to get private field on non-instance");
        return b.get(p);
      }
      function oe(p, b, _) {
        if (!b.has(p))
          throw new TypeError("attempted to set private field on non-instance");
        return b.set(p, _), _;
      }
    },
    39653: (Ce, M, W) => {
      "use strict";
      W.r(M),
        W.d(M, {
          __assign: () => de,
          __asyncDelegator: () => Je,
          __asyncGenerator: () => Ve,
          __asyncValues: () => lt,
          __await: () => Le,
          __awaiter: () => te,
          __classPrivateFieldGet: () => K,
          __classPrivateFieldSet: () => oe,
          __createBinding: () => ae,
          __decorate: () => X,
          __exportStar: () => Oe,
          __extends: () => ie,
          __generator: () => se,
          __importDefault: () => He,
          __importStar: () => ft,
          __makeTemplateObject: () => _t,
          __metadata: () => fe,
          __param: () => be,
          __read: () => Ee,
          __rest: () => S,
          __spread: () => le,
          __spreadArrays: () => Ge,
          __values: () => ye,
        });
      var m = function (p, b) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (_, P) {
              _.__proto__ = P;
            }) ||
          function (_, P) {
            for (var v in P) P.hasOwnProperty(v) && (_[v] = P[v]);
          })(p, b);
      };
      function ie(p, b) {
        function _() {
          this.constructor = p;
        }
        m(p, b),
          (p.prototype =
            null === b
              ? Object.create(b)
              : ((_.prototype = b.prototype), new _()));
      }
      var de = function () {
        return (
          (de =
            Object.assign ||
            function (b) {
              for (var _, P = 1, v = arguments.length; P < v; P++)
                for (var d in (_ = arguments[P]))
                  Object.prototype.hasOwnProperty.call(_, d) && (b[d] = _[d]);
              return b;
            }),
          de.apply(this, arguments)
        );
      };
      function S(p, b) {
        var _ = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) &&
            b.indexOf(P) < 0 &&
            (_[P] = p[P]);
        if (null != p && "function" == typeof Object.getOwnPropertySymbols) {
          var v = 0;
          for (P = Object.getOwnPropertySymbols(p); v < P.length; v++)
            b.indexOf(P[v]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(p, P[v]) &&
              (_[P[v]] = p[P[v]]);
        }
        return _;
      }
      function X(p, b, _, P) {
        var x,
          v = arguments.length,
          d =
            v < 3
              ? b
              : null === P
              ? (P = Object.getOwnPropertyDescriptor(b, _))
              : P;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          d = Reflect.decorate(p, b, _, P);
        else
          for (var C = p.length - 1; C >= 0; C--)
            (x = p[C]) &&
              (d = (v < 3 ? x(d) : v > 3 ? x(b, _, d) : x(b, _)) || d);
        return v > 3 && d && Object.defineProperty(b, _, d), d;
      }
      function be(p, b) {
        return function (_, P) {
          b(_, P, p);
        };
      }
      function fe(p, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(p, b);
      }
      function te(p, b, _, P) {
        return new (_ || (_ = Promise))(function (d, x) {
          function C(H) {
            try {
              R(P.next(H));
            } catch (ee) {
              x(ee);
            }
          }
          function ue(H) {
            try {
              R(P.throw(H));
            } catch (ee) {
              x(ee);
            }
          }
          function R(H) {
            H.done
              ? d(H.value)
              : (function v(d) {
                  return d instanceof _
                    ? d
                    : new _(function (x) {
                        x(d);
                      });
                })(H.value).then(C, ue);
          }
          R((P = P.apply(p, b || [])).next());
        });
      }
      function se(p, b) {
        var P,
          v,
          d,
          x,
          _ = {
            label: 0,
            sent: function () {
              if (1 & d[0]) throw d[1];
              return d[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (x = { next: C(0), throw: C(1), return: C(2) }),
          "function" == typeof Symbol &&
            (x[Symbol.iterator] = function () {
              return this;
            }),
          x
        );
        function C(R) {
          return function (H) {
            return (function ue(R) {
              if (P) throw new TypeError("Generator is already executing.");
              for (; _; )
                try {
                  if (
                    ((P = 1),
                    v &&
                      (d =
                        2 & R[0]
                          ? v.return
                          : R[0]
                          ? v.throw || ((d = v.return) && d.call(v), 0)
                          : v.next) &&
                      !(d = d.call(v, R[1])).done)
                  )
                    return d;
                  switch (((v = 0), d && (R = [2 & R[0], d.value]), R[0])) {
                    case 0:
                    case 1:
                      d = R;
                      break;
                    case 4:
                      return _.label++, { value: R[1], done: !1 };
                    case 5:
                      _.label++, (v = R[1]), (R = [0]);
                      continue;
                    case 7:
                      (R = _.ops.pop()), _.trys.pop();
                      continue;
                    default:
                      if (
                        !(d = (d = _.trys).length > 0 && d[d.length - 1]) &&
                        (6 === R[0] || 2 === R[0])
                      ) {
                        _ = 0;
                        continue;
                      }
                      if (3 === R[0] && (!d || (R[1] > d[0] && R[1] < d[3]))) {
                        _.label = R[1];
                        break;
                      }
                      if (6 === R[0] && _.label < d[1]) {
                        (_.label = d[1]), (d = R);
                        break;
                      }
                      if (d && _.label < d[2]) {
                        (_.label = d[2]), _.ops.push(R);
                        break;
                      }
                      d[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  R = b.call(p, _);
                } catch (H) {
                  (R = [6, H]), (v = 0);
                } finally {
                  P = d = 0;
                }
              if (5 & R[0]) throw R[1];
              return { value: R[0] ? R[1] : void 0, done: !0 };
            })([R, H]);
          };
        }
      }
      function ae(p, b, _, P) {
        void 0 === P && (P = _), (p[P] = b[_]);
      }
      function Oe(p, b) {
        for (var _ in p)
          "default" !== _ && !b.hasOwnProperty(_) && (b[_] = p[_]);
      }
      function ye(p) {
        var b = "function" == typeof Symbol && Symbol.iterator,
          _ = b && p[b],
          P = 0;
        if (_) return _.call(p);
        if (p && "number" == typeof p.length)
          return {
            next: function () {
              return (
                p && P >= p.length && (p = void 0),
                { value: p && p[P++], done: !p }
              );
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Ee(p, b) {
        var _ = "function" == typeof Symbol && p[Symbol.iterator];
        if (!_) return p;
        var v,
          x,
          P = _.call(p),
          d = [];
        try {
          for (; (void 0 === b || b-- > 0) && !(v = P.next()).done; )
            d.push(v.value);
        } catch (C) {
          x = { error: C };
        } finally {
          try {
            v && !v.done && (_ = P.return) && _.call(P);
          } finally {
            if (x) throw x.error;
          }
        }
        return d;
      }
      function le() {
        for (var p = [], b = 0; b < arguments.length; b++)
          p = p.concat(Ee(arguments[b]));
        return p;
      }
      function Ge() {
        for (var p = 0, b = 0, _ = arguments.length; b < _; b++)
          p += arguments[b].length;
        var P = Array(p),
          v = 0;
        for (b = 0; b < _; b++)
          for (var d = arguments[b], x = 0, C = d.length; x < C; x++, v++)
            P[v] = d[x];
        return P;
      }
      function Le(p) {
        return this instanceof Le ? ((this.v = p), this) : new Le(p);
      }
      function Ve(p, b, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var v,
          P = _.apply(p, b || []),
          d = [];
        return (
          (v = {}),
          x("next"),
          x("throw"),
          x("return"),
          (v[Symbol.asyncIterator] = function () {
            return this;
          }),
          v
        );
        function x(q) {
          P[q] &&
            (v[q] = function (we) {
              return new Promise(function (Ze, Ae) {
                d.push([q, we, Ze, Ae]) > 1 || C(q, we);
              });
            });
        }
        function C(q, we) {
          try {
            !(function ue(q) {
              q.value instanceof Le
                ? Promise.resolve(q.value.v).then(R, H)
                : ee(d[0][2], q);
            })(P[q](we));
          } catch (Ze) {
            ee(d[0][3], Ze);
          }
        }
        function R(q) {
          C("next", q);
        }
        function H(q) {
          C("throw", q);
        }
        function ee(q, we) {
          q(we), d.shift(), d.length && C(d[0][0], d[0][1]);
        }
      }
      function Je(p) {
        var b, _;
        return (
          (b = {}),
          P("next"),
          P("throw", function (v) {
            throw v;
          }),
          P("return"),
          (b[Symbol.iterator] = function () {
            return this;
          }),
          b
        );
        function P(v, d) {
          b[v] = p[v]
            ? function (x) {
                return (_ = !_)
                  ? { value: Le(p[v](x)), done: "return" === v }
                  : d
                  ? d(x)
                  : x;
              }
            : d;
        }
      }
      function lt(p) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var _,
          b = p[Symbol.asyncIterator];
        return b
          ? b.call(p)
          : ((p = ye(p)),
            (_ = {}),
            P("next"),
            P("throw"),
            P("return"),
            (_[Symbol.asyncIterator] = function () {
              return this;
            }),
            _);
        function P(d) {
          _[d] =
            p[d] &&
            function (x) {
              return new Promise(function (C, ue) {
                !(function v(d, x, C, ue) {
                  Promise.resolve(ue).then(function (R) {
                    d({ value: R, done: C });
                  }, x);
                })(C, ue, (x = p[d](x)).done, x.value);
              });
            };
        }
      }
      function _t(p, b) {
        return (
          Object.defineProperty
            ? Object.defineProperty(p, "raw", { value: b })
            : (p.raw = b),
          p
        );
      }
      function ft(p) {
        if (p && p.__esModule) return p;
        var b = {};
        if (null != p)
          for (var _ in p) Object.hasOwnProperty.call(p, _) && (b[_] = p[_]);
        return (b.default = p), b;
      }
      function He(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function K(p, b) {
        if (!b.has(p))
          throw new TypeError("attempted to get private field on non-instance");
        return b.get(p);
      }
      function oe(p, b, _) {
        if (!b.has(p))
          throw new TypeError("attempted to set private field on non-instance");
        return b.set(p, _), _;
      }
    },
    33893: (Ce, M, W) => {
      "use strict";
      W.r(M),
        W.d(M, {
          __assign: () => de,
          __asyncDelegator: () => Je,
          __asyncGenerator: () => Ve,
          __asyncValues: () => lt,
          __await: () => Le,
          __awaiter: () => te,
          __classPrivateFieldGet: () => K,
          __classPrivateFieldSet: () => oe,
          __createBinding: () => ae,
          __decorate: () => X,
          __exportStar: () => Oe,
          __extends: () => ie,
          __generator: () => se,
          __importDefault: () => He,
          __importStar: () => ft,
          __makeTemplateObject: () => _t,
          __metadata: () => fe,
          __param: () => be,
          __read: () => Ee,
          __rest: () => S,
          __spread: () => le,
          __spreadArrays: () => Ge,
          __values: () => ye,
        });
      var m = function (p, b) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (_, P) {
              _.__proto__ = P;
            }) ||
          function (_, P) {
            for (var v in P) P.hasOwnProperty(v) && (_[v] = P[v]);
          })(p, b);
      };
      function ie(p, b) {
        function _() {
          this.constructor = p;
        }
        m(p, b),
          (p.prototype =
            null === b
              ? Object.create(b)
              : ((_.prototype = b.prototype), new _()));
      }
      var de = function () {
        return (
          (de =
            Object.assign ||
            function (b) {
              for (var _, P = 1, v = arguments.length; P < v; P++)
                for (var d in (_ = arguments[P]))
                  Object.prototype.hasOwnProperty.call(_, d) && (b[d] = _[d]);
              return b;
            }),
          de.apply(this, arguments)
        );
      };
      function S(p, b) {
        var _ = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) &&
            b.indexOf(P) < 0 &&
            (_[P] = p[P]);
        if (null != p && "function" == typeof Object.getOwnPropertySymbols) {
          var v = 0;
          for (P = Object.getOwnPropertySymbols(p); v < P.length; v++)
            b.indexOf(P[v]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(p, P[v]) &&
              (_[P[v]] = p[P[v]]);
        }
        return _;
      }
      function X(p, b, _, P) {
        var x,
          v = arguments.length,
          d =
            v < 3
              ? b
              : null === P
              ? (P = Object.getOwnPropertyDescriptor(b, _))
              : P;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          d = Reflect.decorate(p, b, _, P);
        else
          for (var C = p.length - 1; C >= 0; C--)
            (x = p[C]) &&
              (d = (v < 3 ? x(d) : v > 3 ? x(b, _, d) : x(b, _)) || d);
        return v > 3 && d && Object.defineProperty(b, _, d), d;
      }
      function be(p, b) {
        return function (_, P) {
          b(_, P, p);
        };
      }
      function fe(p, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(p, b);
      }
      function te(p, b, _, P) {
        return new (_ || (_ = Promise))(function (d, x) {
          function C(H) {
            try {
              R(P.next(H));
            } catch (ee) {
              x(ee);
            }
          }
          function ue(H) {
            try {
              R(P.throw(H));
            } catch (ee) {
              x(ee);
            }
          }
          function R(H) {
            H.done
              ? d(H.value)
              : (function v(d) {
                  return d instanceof _
                    ? d
                    : new _(function (x) {
                        x(d);
                      });
                })(H.value).then(C, ue);
          }
          R((P = P.apply(p, b || [])).next());
        });
      }
      function se(p, b) {
        var P,
          v,
          d,
          x,
          _ = {
            label: 0,
            sent: function () {
              if (1 & d[0]) throw d[1];
              return d[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (x = { next: C(0), throw: C(1), return: C(2) }),
          "function" == typeof Symbol &&
            (x[Symbol.iterator] = function () {
              return this;
            }),
          x
        );
        function C(R) {
          return function (H) {
            return (function ue(R) {
              if (P) throw new TypeError("Generator is already executing.");
              for (; _; )
                try {
                  if (
                    ((P = 1),
                    v &&
                      (d =
                        2 & R[0]
                          ? v.return
                          : R[0]
                          ? v.throw || ((d = v.return) && d.call(v), 0)
                          : v.next) &&
                      !(d = d.call(v, R[1])).done)
                  )
                    return d;
                  switch (((v = 0), d && (R = [2 & R[0], d.value]), R[0])) {
                    case 0:
                    case 1:
                      d = R;
                      break;
                    case 4:
                      return _.label++, { value: R[1], done: !1 };
                    case 5:
                      _.label++, (v = R[1]), (R = [0]);
                      continue;
                    case 7:
                      (R = _.ops.pop()), _.trys.pop();
                      continue;
                    default:
                      if (
                        !(d = (d = _.trys).length > 0 && d[d.length - 1]) &&
                        (6 === R[0] || 2 === R[0])
                      ) {
                        _ = 0;
                        continue;
                      }
                      if (3 === R[0] && (!d || (R[1] > d[0] && R[1] < d[3]))) {
                        _.label = R[1];
                        break;
                      }
                      if (6 === R[0] && _.label < d[1]) {
                        (_.label = d[1]), (d = R);
                        break;
                      }
                      if (d && _.label < d[2]) {
                        (_.label = d[2]), _.ops.push(R);
                        break;
                      }
                      d[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  R = b.call(p, _);
                } catch (H) {
                  (R = [6, H]), (v = 0);
                } finally {
                  P = d = 0;
                }
              if (5 & R[0]) throw R[1];
              return { value: R[0] ? R[1] : void 0, done: !0 };
            })([R, H]);
          };
        }
      }
      function ae(p, b, _, P) {
        void 0 === P && (P = _), (p[P] = b[_]);
      }
      function Oe(p, b) {
        for (var _ in p)
          "default" !== _ && !b.hasOwnProperty(_) && (b[_] = p[_]);
      }
      function ye(p) {
        var b = "function" == typeof Symbol && Symbol.iterator,
          _ = b && p[b],
          P = 0;
        if (_) return _.call(p);
        if (p && "number" == typeof p.length)
          return {
            next: function () {
              return (
                p && P >= p.length && (p = void 0),
                { value: p && p[P++], done: !p }
              );
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Ee(p, b) {
        var _ = "function" == typeof Symbol && p[Symbol.iterator];
        if (!_) return p;
        var v,
          x,
          P = _.call(p),
          d = [];
        try {
          for (; (void 0 === b || b-- > 0) && !(v = P.next()).done; )
            d.push(v.value);
        } catch (C) {
          x = { error: C };
        } finally {
          try {
            v && !v.done && (_ = P.return) && _.call(P);
          } finally {
            if (x) throw x.error;
          }
        }
        return d;
      }
      function le() {
        for (var p = [], b = 0; b < arguments.length; b++)
          p = p.concat(Ee(arguments[b]));
        return p;
      }
      function Ge() {
        for (var p = 0, b = 0, _ = arguments.length; b < _; b++)
          p += arguments[b].length;
        var P = Array(p),
          v = 0;
        for (b = 0; b < _; b++)
          for (var d = arguments[b], x = 0, C = d.length; x < C; x++, v++)
            P[v] = d[x];
        return P;
      }
      function Le(p) {
        return this instanceof Le ? ((this.v = p), this) : new Le(p);
      }
      function Ve(p, b, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var v,
          P = _.apply(p, b || []),
          d = [];
        return (
          (v = {}),
          x("next"),
          x("throw"),
          x("return"),
          (v[Symbol.asyncIterator] = function () {
            return this;
          }),
          v
        );
        function x(q) {
          P[q] &&
            (v[q] = function (we) {
              return new Promise(function (Ze, Ae) {
                d.push([q, we, Ze, Ae]) > 1 || C(q, we);
              });
            });
        }
        function C(q, we) {
          try {
            !(function ue(q) {
              q.value instanceof Le
                ? Promise.resolve(q.value.v).then(R, H)
                : ee(d[0][2], q);
            })(P[q](we));
          } catch (Ze) {
            ee(d[0][3], Ze);
          }
        }
        function R(q) {
          C("next", q);
        }
        function H(q) {
          C("throw", q);
        }
        function ee(q, we) {
          q(we), d.shift(), d.length && C(d[0][0], d[0][1]);
        }
      }
      function Je(p) {
        var b, _;
        return (
          (b = {}),
          P("next"),
          P("throw", function (v) {
            throw v;
          }),
          P("return"),
          (b[Symbol.iterator] = function () {
            return this;
          }),
          b
        );
        function P(v, d) {
          b[v] = p[v]
            ? function (x) {
                return (_ = !_)
                  ? { value: Le(p[v](x)), done: "return" === v }
                  : d
                  ? d(x)
                  : x;
              }
            : d;
        }
      }
      function lt(p) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var _,
          b = p[Symbol.asyncIterator];
        return b
          ? b.call(p)
          : ((p = ye(p)),
            (_ = {}),
            P("next"),
            P("throw"),
            P("return"),
            (_[Symbol.asyncIterator] = function () {
              return this;
            }),
            _);
        function P(d) {
          _[d] =
            p[d] &&
            function (x) {
              return new Promise(function (C, ue) {
                !(function v(d, x, C, ue) {
                  Promise.resolve(ue).then(function (R) {
                    d({ value: R, done: C });
                  }, x);
                })(C, ue, (x = p[d](x)).done, x.value);
              });
            };
        }
      }
      function _t(p, b) {
        return (
          Object.defineProperty
            ? Object.defineProperty(p, "raw", { value: b })
            : (p.raw = b),
          p
        );
      }
      function ft(p) {
        if (p && p.__esModule) return p;
        var b = {};
        if (null != p)
          for (var _ in p) Object.hasOwnProperty.call(p, _) && (b[_] = p[_]);
        return (b.default = p), b;
      }
      function He(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function K(p, b) {
        if (!b.has(p))
          throw new TypeError("attempted to get private field on non-instance");
        return b.get(p);
      }
      function oe(p, b, _) {
        if (!b.has(p))
          throw new TypeError("attempted to set private field on non-instance");
        return b.set(p, _), _;
      }
    },
    57121: (Ce, M, W) => {
      "use strict";
      W.r(M),
        W.d(M, {
          __assign: () => de,
          __asyncDelegator: () => Je,
          __asyncGenerator: () => Ve,
          __asyncValues: () => lt,
          __await: () => Le,
          __awaiter: () => te,
          __classPrivateFieldGet: () => K,
          __classPrivateFieldSet: () => oe,
          __createBinding: () => ae,
          __decorate: () => X,
          __exportStar: () => Oe,
          __extends: () => ie,
          __generator: () => se,
          __importDefault: () => He,
          __importStar: () => ft,
          __makeTemplateObject: () => _t,
          __metadata: () => fe,
          __param: () => be,
          __read: () => Ee,
          __rest: () => S,
          __spread: () => le,
          __spreadArrays: () => Ge,
          __values: () => ye,
        });
      var m = function (p, b) {
        return (m =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (_, P) {
              _.__proto__ = P;
            }) ||
          function (_, P) {
            for (var v in P) P.hasOwnProperty(v) && (_[v] = P[v]);
          })(p, b);
      };
      function ie(p, b) {
        function _() {
          this.constructor = p;
        }
        m(p, b),
          (p.prototype =
            null === b
              ? Object.create(b)
              : ((_.prototype = b.prototype), new _()));
      }
      var de = function () {
        return (
          (de =
            Object.assign ||
            function (b) {
              for (var _, P = 1, v = arguments.length; P < v; P++)
                for (var d in (_ = arguments[P]))
                  Object.prototype.hasOwnProperty.call(_, d) && (b[d] = _[d]);
              return b;
            }),
          de.apply(this, arguments)
        );
      };
      function S(p, b) {
        var _ = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) &&
            b.indexOf(P) < 0 &&
            (_[P] = p[P]);
        if (null != p && "function" == typeof Object.getOwnPropertySymbols) {
          var v = 0;
          for (P = Object.getOwnPropertySymbols(p); v < P.length; v++)
            b.indexOf(P[v]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(p, P[v]) &&
              (_[P[v]] = p[P[v]]);
        }
        return _;
      }
      function X(p, b, _, P) {
        var x,
          v = arguments.length,
          d =
            v < 3
              ? b
              : null === P
              ? (P = Object.getOwnPropertyDescriptor(b, _))
              : P;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          d = Reflect.decorate(p, b, _, P);
        else
          for (var C = p.length - 1; C >= 0; C--)
            (x = p[C]) &&
              (d = (v < 3 ? x(d) : v > 3 ? x(b, _, d) : x(b, _)) || d);
        return v > 3 && d && Object.defineProperty(b, _, d), d;
      }
      function be(p, b) {
        return function (_, P) {
          b(_, P, p);
        };
      }
      function fe(p, b) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
          return Reflect.metadata(p, b);
      }
      function te(p, b, _, P) {
        return new (_ || (_ = Promise))(function (d, x) {
          function C(H) {
            try {
              R(P.next(H));
            } catch (ee) {
              x(ee);
            }
          }
          function ue(H) {
            try {
              R(P.throw(H));
            } catch (ee) {
              x(ee);
            }
          }
          function R(H) {
            H.done
              ? d(H.value)
              : (function v(d) {
                  return d instanceof _
                    ? d
                    : new _(function (x) {
                        x(d);
                      });
                })(H.value).then(C, ue);
          }
          R((P = P.apply(p, b || [])).next());
        });
      }
      function se(p, b) {
        var P,
          v,
          d,
          x,
          _ = {
            label: 0,
            sent: function () {
              if (1 & d[0]) throw d[1];
              return d[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (x = { next: C(0), throw: C(1), return: C(2) }),
          "function" == typeof Symbol &&
            (x[Symbol.iterator] = function () {
              return this;
            }),
          x
        );
        function C(R) {
          return function (H) {
            return (function ue(R) {
              if (P) throw new TypeError("Generator is already executing.");
              for (; _; )
                try {
                  if (
                    ((P = 1),
                    v &&
                      (d =
                        2 & R[0]
                          ? v.return
                          : R[0]
                          ? v.throw || ((d = v.return) && d.call(v), 0)
                          : v.next) &&
                      !(d = d.call(v, R[1])).done)
                  )
                    return d;
                  switch (((v = 0), d && (R = [2 & R[0], d.value]), R[0])) {
                    case 0:
                    case 1:
                      d = R;
                      break;
                    case 4:
                      return _.label++, { value: R[1], done: !1 };
                    case 5:
                      _.label++, (v = R[1]), (R = [0]);
                      continue;
                    case 7:
                      (R = _.ops.pop()), _.trys.pop();
                      continue;
                    default:
                      if (
                        !(d = (d = _.trys).length > 0 && d[d.length - 1]) &&
                        (6 === R[0] || 2 === R[0])
                      ) {
                        _ = 0;
                        continue;
                      }
                      if (3 === R[0] && (!d || (R[1] > d[0] && R[1] < d[3]))) {
                        _.label = R[1];
                        break;
                      }
                      if (6 === R[0] && _.label < d[1]) {
                        (_.label = d[1]), (d = R);
                        break;
                      }
                      if (d && _.label < d[2]) {
                        (_.label = d[2]), _.ops.push(R);
                        break;
                      }
                      d[2] && _.ops.pop(), _.trys.pop();
                      continue;
                  }
                  R = b.call(p, _);
                } catch (H) {
                  (R = [6, H]), (v = 0);
                } finally {
                  P = d = 0;
                }
              if (5 & R[0]) throw R[1];
              return { value: R[0] ? R[1] : void 0, done: !0 };
            })([R, H]);
          };
        }
      }
      function ae(p, b, _, P) {
        void 0 === P && (P = _), (p[P] = b[_]);
      }
      function Oe(p, b) {
        for (var _ in p)
          "default" !== _ && !b.hasOwnProperty(_) && (b[_] = p[_]);
      }
      function ye(p) {
        var b = "function" == typeof Symbol && Symbol.iterator,
          _ = b && p[b],
          P = 0;
        if (_) return _.call(p);
        if (p && "number" == typeof p.length)
          return {
            next: function () {
              return (
                p && P >= p.length && (p = void 0),
                { value: p && p[P++], done: !p }
              );
            },
          };
        throw new TypeError(
          b ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Ee(p, b) {
        var _ = "function" == typeof Symbol && p[Symbol.iterator];
        if (!_) return p;
        var v,
          x,
          P = _.call(p),
          d = [];
        try {
          for (; (void 0 === b || b-- > 0) && !(v = P.next()).done; )
            d.push(v.value);
        } catch (C) {
          x = { error: C };
        } finally {
          try {
            v && !v.done && (_ = P.return) && _.call(P);
          } finally {
            if (x) throw x.error;
          }
        }
        return d;
      }
      function le() {
        for (var p = [], b = 0; b < arguments.length; b++)
          p = p.concat(Ee(arguments[b]));
        return p;
      }
      function Ge() {
        for (var p = 0, b = 0, _ = arguments.length; b < _; b++)
          p += arguments[b].length;
        var P = Array(p),
          v = 0;
        for (b = 0; b < _; b++)
          for (var d = arguments[b], x = 0, C = d.length; x < C; x++, v++)
            P[v] = d[x];
        return P;
      }
      function Le(p) {
        return this instanceof Le ? ((this.v = p), this) : new Le(p);
      }
      function Ve(p, b, _) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var v,
          P = _.apply(p, b || []),
          d = [];
        return (
          (v = {}),
          x("next"),
          x("throw"),
          x("return"),
          (v[Symbol.asyncIterator] = function () {
            return this;
          }),
          v
        );
        function x(q) {
          P[q] &&
            (v[q] = function (we) {
              return new Promise(function (Ze, Ae) {
                d.push([q, we, Ze, Ae]) > 1 || C(q, we);
              });
            });
        }
        function C(q, we) {
          try {
            !(function ue(q) {
              q.value instanceof Le
                ? Promise.resolve(q.value.v).then(R, H)
                : ee(d[0][2], q);
            })(P[q](we));
          } catch (Ze) {
            ee(d[0][3], Ze);
          }
        }
        function R(q) {
          C("next", q);
        }
        function H(q) {
          C("throw", q);
        }
        function ee(q, we) {
          q(we), d.shift(), d.length && C(d[0][0], d[0][1]);
        }
      }
      function Je(p) {
        var b, _;
        return (
          (b = {}),
          P("next"),
          P("throw", function (v) {
            throw v;
          }),
          P("return"),
          (b[Symbol.iterator] = function () {
            return this;
          }),
          b
        );
        function P(v, d) {
          b[v] = p[v]
            ? function (x) {
                return (_ = !_)
                  ? { value: Le(p[v](x)), done: "return" === v }
                  : d
                  ? d(x)
                  : x;
              }
            : d;
        }
      }
      function lt(p) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var _,
          b = p[Symbol.asyncIterator];
        return b
          ? b.call(p)
          : ((p = ye(p)),
            (_ = {}),
            P("next"),
            P("throw"),
            P("return"),
            (_[Symbol.asyncIterator] = function () {
              return this;
            }),
            _);
        function P(d) {
          _[d] =
            p[d] &&
            function (x) {
              return new Promise(function (C, ue) {
                !(function v(d, x, C, ue) {
                  Promise.resolve(ue).then(function (R) {
                    d({ value: R, done: C });
                  }, x);
                })(C, ue, (x = p[d](x)).done, x.value);
              });
            };
        }
      }
      function _t(p, b) {
        return (
          Object.defineProperty
            ? Object.defineProperty(p, "raw", { value: b })
            : (p.raw = b),
          p
        );
      }
      function ft(p) {
        if (p && p.__esModule) return p;
        var b = {};
        if (null != p)
          for (var _ in p) Object.hasOwnProperty.call(p, _) && (b[_] = p[_]);
        return (b.default = p), b;
      }
      function He(p) {
        return p && p.__esModule ? p : { default: p };
      }
      function K(p, b) {
        if (!b.has(p))
          throw new TypeError("attempted to get private field on non-instance");
        return b.get(p);
      }
      function oe(p, b, _) {
        if (!b.has(p))
          throw new TypeError("attempted to set private field on non-instance");
        return b.set(p, _), _;
      }
    },
    71590: (Ce, M, W) => {
      "use strict";
      const m = W(70514);
      Ce.exports = X;
      const ie =
          (function He() {
            function K(oe) {
              return typeof oe < "u" && oe;
            }
            try {
              return (
                typeof globalThis < "u" ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch {
              return K(self) || K(window) || K(this) || {};
            }
          })().console || {},
        de = {
          mapHttpRequest: Ge,
          mapHttpResponse: Ge,
          wrapRequestSerializer: Le,
          wrapResponseSerializer: Le,
          wrapErrorSerializer: Le,
          req: Ge,
          res: Ge,
          err: function Ee(K) {
            const oe = {
              type: K.constructor.name,
              msg: K.message,
              stack: K.stack,
            };
            for (const p in K) void 0 === oe[p] && (oe[p] = K[p]);
            return oe;
          },
        };
      function X(K) {
        (K = K || {}).browser = K.browser || {};
        const oe = K.browser.transmit;
        if (oe && "function" != typeof oe.send)
          throw Error("pino: transmit option must have a send function");
        const p = K.browser.write || ie;
        K.browser.write && (K.browser.asObject = !0);
        const b = K.serializers || {},
          _ = (function S(K, oe) {
            return Array.isArray(K)
              ? K.filter(function (b) {
                  return "!stdSerializers.err" !== b;
                })
              : !0 === K && Object.keys(oe);
          })(K.browser.serialize, b);
        let P = K.browser.serialize;
        Array.isArray(K.browser.serialize) &&
          K.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (P = !1),
          "function" == typeof p &&
            (p.error = p.fatal = p.warn = p.info = p.debug = p.trace = p),
          !1 === K.enabled && (K.level = "silent");
        const d = K.level || "info",
          x = Object.create(p);
        x.log || (x.log = Ve),
          Object.defineProperty(x, "levelVal", {
            get: function ue() {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(x, "level", {
            get: function R() {
              return this._level;
            },
            set: function H(q) {
              if ("silent" !== q && !this.levels.values[q])
                throw Error("unknown level " + q);
              (this._level = q),
                be(C, x, "error", "log"),
                be(C, x, "fatal", "error"),
                be(C, x, "warn", "error"),
                be(C, x, "info", "log"),
                be(C, x, "debug", "log"),
                be(C, x, "trace", "log");
            },
          });
        const C = {
          transmit: oe,
          serialize: _,
          asObject: K.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: le(K),
        };
        return (
          (x.levels = X.levels),
          (x.level = d),
          (x.setMaxListeners =
            x.getMaxListeners =
            x.emit =
            x.addListener =
            x.on =
            x.prependListener =
            x.once =
            x.prependOnceListener =
            x.removeListener =
            x.removeAllListeners =
            x.listeners =
            x.listenerCount =
            x.eventNames =
            x.write =
            x.flush =
              Ve),
          (x.serializers = b),
          (x._serialize = _),
          (x._stdErrSerialize = P),
          (x.child = function ee(q, we) {
            if (!q) throw new Error("missing bindings for child Pino");
            (we = we || {}),
              _ && q.serializers && (we.serializers = q.serializers);
            const Ze = we.serializers;
            if (_ && Ze) {
              var Ae = Object.assign({}, b, Ze),
                Qr = !0 === K.browser.serialize ? Object.keys(Ae) : _;
              delete q.serializers, se([q], Qr, Ae, this._stdErrSerialize);
            }
            function Yr(ht) {
              (this._childLevel = 1 + (0 | ht._childLevel)),
                (this.error = ae(ht, q, "error")),
                (this.fatal = ae(ht, q, "fatal")),
                (this.warn = ae(ht, q, "warn")),
                (this.info = ae(ht, q, "info")),
                (this.debug = ae(ht, q, "debug")),
                (this.trace = ae(ht, q, "trace")),
                Ae && ((this.serializers = Ae), (this._serialize = Qr)),
                oe &&
                  (this._logEvent = ye([].concat(ht._logEvent.bindings, q)));
            }
            return (Yr.prototype = this), new Yr(this);
          }),
          oe && (x._logEvent = ye()),
          x
        );
      }
      function be(K, oe, p, b) {
        const _ = Object.getPrototypeOf(oe);
        (oe[p] =
          oe.levelVal > oe.levels.values[p]
            ? Ve
            : _[p]
            ? _[p]
            : ie[p] || ie[b] || Ve),
          (function fe(K, oe, p) {
            (!K.transmit && oe[p] === Ve) ||
              (oe[p] = (function (b) {
                return function () {
                  const P = K.timestamp(),
                    v = new Array(arguments.length),
                    d =
                      Object.getPrototypeOf &&
                      Object.getPrototypeOf(this) === ie
                        ? ie
                        : this;
                  for (var x = 0; x < v.length; x++) v[x] = arguments[x];
                  if (
                    (K.serialize &&
                      !K.asObject &&
                      se(
                        v,
                        this._serialize,
                        this.serializers,
                        this._stdErrSerialize
                      ),
                    K.asObject
                      ? b.call(
                          d,
                          (function te(K, oe, p, b) {
                            K._serialize &&
                              se(
                                p,
                                K._serialize,
                                K.serializers,
                                K._stdErrSerialize
                              );
                            const _ = p.slice();
                            let P = _[0];
                            const v = {};
                            b && (v.time = b), (v.level = X.levels.values[oe]);
                            let d = 1 + (0 | K._childLevel);
                            if (
                              (d < 1 && (d = 1),
                              null !== P && "object" == typeof P)
                            ) {
                              for (; d-- && "object" == typeof _[0]; )
                                Object.assign(v, _.shift());
                              P = _.length ? m(_.shift(), _) : void 0;
                            } else
                              "string" == typeof P && (P = m(_.shift(), _));
                            return void 0 !== P && (v.msg = P), v;
                          })(this, p, v, P)
                        )
                      : b.apply(d, v),
                    K.transmit)
                  ) {
                    const C = K.transmit.level || oe.level,
                      R = X.levels.values[p];
                    if (R < X.levels.values[C]) return;
                    !(function Oe(K, oe, p) {
                      const b = oe.send,
                        _ = oe.ts,
                        P = oe.methodLevel,
                        v = oe.methodValue,
                        d = oe.val,
                        x = K._logEvent.bindings;
                      se(
                        p,
                        K._serialize || Object.keys(K.serializers),
                        K.serializers,
                        void 0 === K._stdErrSerialize || K._stdErrSerialize
                      ),
                        (K._logEvent.ts = _),
                        (K._logEvent.messages = p.filter(function (C) {
                          return -1 === x.indexOf(C);
                        })),
                        (K._logEvent.level.label = P),
                        (K._logEvent.level.value = v),
                        b(P, K._logEvent, d),
                        (K._logEvent = ye(x));
                    })(
                      this,
                      {
                        ts: P,
                        methodLevel: p,
                        methodValue: R,
                        transmitLevel: C,
                        transmitValue:
                          X.levels.values[K.transmit.level || oe.level],
                        send: K.transmit.send,
                        val: oe.levelVal,
                      },
                      v
                    );
                  }
                };
              })(oe[p]));
          })(K, oe, p);
      }
      function se(K, oe, p, b) {
        for (const _ in K)
          if (b && K[_] instanceof Error) K[_] = X.stdSerializers.err(K[_]);
          else if ("object" == typeof K[_] && !Array.isArray(K[_]))
            for (const P in K[_])
              oe && oe.indexOf(P) > -1 && P in p && (K[_][P] = p[P](K[_][P]));
      }
      function ae(K, oe, p) {
        return function () {
          const b = new Array(1 + arguments.length);
          b[0] = oe;
          for (var _ = 1; _ < b.length; _++) b[_] = arguments[_ - 1];
          return K[p].apply(this, b);
        };
      }
      function ye(K) {
        return {
          ts: 0,
          messages: [],
          bindings: K || [],
          level: { label: "", value: 0 },
        };
      }
      function le(K) {
        return "function" == typeof K.timestamp
          ? K.timestamp
          : !1 === K.timestamp
          ? Je
          : lt;
      }
      function Ge() {
        return {};
      }
      function Le(K) {
        return K;
      }
      function Ve() {}
      function Je() {
        return !1;
      }
      function lt() {
        return Date.now();
      }
      (X.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (X.stdSerializers = de),
        (X.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: Je,
            epochTime: lt,
            unixTime: function _t() {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function ft() {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
