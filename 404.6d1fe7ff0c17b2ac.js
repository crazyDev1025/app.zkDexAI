(self.webpackChunknew_angular_hello_world =
  self.webpackChunknew_angular_hello_world || []).push([
  [404],
  {
    76010: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CoinbaseWalletSDK = void 0);
      const e = t(55605),
        g = t(84110),
        u = t(98169),
        d = t(61579),
        o = t(43723),
        i = t(68509),
        s = t(89311),
        l = t(81260),
        b = t(7938);
      class h {
        constructor(c) {
          var n, f, v;
          (this._appName = ""),
            (this._appLogoUrl = null),
            (this._relay = null),
            (this._relayEventManager = null);
          const E = c.linkAPIUrl || g.LINK_API_URL;
          let w;
          if (
            ((w = c.uiConstructor
              ? c.uiConstructor
              : (S) => new o.WalletSDKUI(S)),
            (this._overrideIsMetaMask =
              !(typeof c.overrideIsMetaMask > "u") && c.overrideIsMetaMask),
            (this._overrideIsCoinbaseWallet =
              null === (n = c.overrideIsCoinbaseWallet) || void 0 === n || n),
            (this._overrideIsCoinbaseBrowser =
              null !== (f = c.overrideIsCoinbaseBrowser) && void 0 !== f && f),
            c.diagnosticLogger && c.eventListener)
          )
            throw new Error(
              "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger"
            );
          (this._diagnosticLogger = c.eventListener
            ? { log: c.eventListener.onEvent }
            : c.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (v = c.reloadOnDisconnect) || void 0 === v || v);
          const C = new URL(E);
          (this._storage = new u.ScopedLocalStorage(
            `-walletlink:${C.protocol}//${C.host}`
          )),
            this._storage.setItem("version", h.VERSION),
            !this.walletExtension &&
              !this.coinbaseBrowser &&
              ((this._relayEventManager = new s.WalletSDKRelayEventManager()),
              (this._relay = new i.WalletSDKRelay({
                linkAPIUrl: E,
                version: b.LIB_VERSION,
                darkMode: !!c.darkMode,
                uiConstructor: w,
                storage: this._storage,
                relayEventManager: this._relayEventManager,
                diagnosticLogger: this._diagnosticLogger,
                reloadOnDisconnect: this._reloadOnDisconnect,
              })),
              this.setAppInfo(c.appName, c.appLogoUrl),
              !c.headlessMode && this._relay.attachUI());
        }
        makeWeb3Provider(c = "", n = 1) {
          const f = this.walletExtension;
          if (f)
            return (
              this.isCipherProvider(f) || f.setProviderInfo(c, n),
              !1 === this._reloadOnDisconnect &&
                "function" == typeof f.disableReloadOnDisconnect &&
                f.disableReloadOnDisconnect(),
              f
            );
          const v = this.coinbaseBrowser;
          if (v) return v;
          const E = this._relay;
          if (!E || !this._relayEventManager || !this._storage)
            throw new Error("Relay not initialized, should never happen");
          return (
            c || E.setConnectDisabled(!0),
            new d.CoinbaseWalletProvider({
              relayProvider: () => Promise.resolve(E),
              relayEventManager: this._relayEventManager,
              storage: this._storage,
              jsonRpcUrl: c,
              chainId: n,
              qrUrl: this.getQrUrl(),
              diagnosticLogger: this._diagnosticLogger,
              overrideIsMetaMask: this._overrideIsMetaMask,
              overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
              overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser,
            })
          );
        }
        setAppInfo(c, n) {
          var f;
          (this._appName = c || "DApp"),
            (this._appLogoUrl = n || (0, l.getFavicon)());
          const v = this.walletExtension;
          v
            ? this.isCipherProvider(v) ||
              v.setAppInfo(this._appName, this._appLogoUrl)
            : null === (f = this._relay) ||
              void 0 === f ||
              f.setAppInfo(this._appName, this._appLogoUrl);
        }
        disconnect() {
          var c;
          const n = this.walletExtension;
          n
            ? n.close()
            : null === (c = this._relay) || void 0 === c || c.resetAndReload();
        }
        getQrUrl() {
          var c, n;
          return null !==
            (n =
              null === (c = this._relay) || void 0 === c
                ? void 0
                : c.getQRCodeUrl()) && void 0 !== n
            ? n
            : null;
        }
        getCoinbaseWalletLogo(c, n = 240) {
          return (0, e.walletLogo)(c, n);
        }
        get walletExtension() {
          var c;
          return null !== (c = window.coinbaseWalletExtension) && void 0 !== c
            ? c
            : window.walletLinkExtension;
        }
        get coinbaseBrowser() {
          var c, n;
          try {
            const f =
              null !== (c = window.ethereum) && void 0 !== c
                ? c
                : null === (n = window.top) || void 0 === n
                ? void 0
                : n.ethereum;
            return f && "isCoinbaseBrowser" in f && f.isCoinbaseBrowser
              ? f
              : void 0;
          } catch {
            return;
          }
        }
        isCipherProvider(c) {
          return "boolean" == typeof c.isCipher && c.isCipher;
        }
      }
      (r.CoinbaseWalletSDK = h), (h.VERSION = b.LIB_VERSION);
    },
    55605: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.walletLogo = void 0),
        (r.walletLogo = (e, g) => {
          let u;
          switch (e) {
            case "standard":
            default:
              return (
                (u = g),
                `data:image/svg+xml,%3Csvg width='${g}' height='${u}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
              );
            case "circle":
              return (
                (u = g),
                `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${g}' height='${u}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
              );
            case "text":
              return (
                (u = (0.1 * g).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${g}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogo":
              return (
                (u = (0.25 * g).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${g}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
            case "textLight":
              return (
                (u = (0.1 * g).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${g}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
              );
            case "textWithLogoLight":
              return (
                (u = (0.25 * g).toFixed(2)),
                `data:image/svg+xml,%3Csvg width='${g}' height='${u}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
              );
          }
        });
    },
    68771: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}");
    },
    85174: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (O) {
          return O && O.__esModule ? O : { default: O };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CoinbaseAppSteps =
          r.CoinbaseWalletSteps =
          r.ConnectItem =
          r.ConnectContent =
            void 0);
      const g = e(t(46915)),
        u = t(24354),
        d = t(70491),
        o = t(81260),
        i = t(7938),
        s = t(53729),
        l = e(t(46678)),
        b = e(t(43710)),
        h = t(63801),
        p = e(t(937)),
        c = e(t(40469)),
        n = t(25068),
        f = t(95911),
        v = t(67560),
        E = e(t(68771)),
        w = {
          "coinbase-wallet-app": {
            title: "Coinbase Wallet app",
            description: "Connect with your self-custody wallet",
            icon: b.default,
            steps: N,
          },
          "coinbase-app": {
            title: "Coinbase app",
            description: "Connect with your Coinbase account",
            icon: l.default,
            steps: U,
          },
        },
        C = (O) => ("coinbase-app" === O ? p.default : c.default),
        A = (O) => ("light" === O ? "#FFFFFF" : "#0A0B0D");
      function M({
        title: O,
        description: D,
        icon: K,
        selected: G,
        theme: re,
        onClick: ue,
      }) {
        return (0, u.h)(
          "div",
          {
            onClick: ue,
            class: (0, g.default)("-cbwsdk-connect-item", re, { selected: G }),
          },
          (0, u.h)("div", null, (0, u.h)("img", { src: K, alt: O })),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-connect-item-copy-wrapper" },
            (0, u.h)("h3", { class: "-cbwsdk-connect-item-title" }, O),
            (0, u.h)("p", { class: "-cbwsdk-connect-item-description" }, D)
          )
        );
      }
      function N({ theme: O }) {
        return (0, u.h)(
          "ol",
          { class: "-cbwsdk-wallet-steps" },
          (0, u.h)(
            "li",
            { class: (0, g.default)("-cbwsdk-wallet-steps-item", O) },
            (0, u.h)(
              "div",
              { class: "-cbwsdk-wallet-steps-item-wrapper" },
              "Open Coinbase Wallet app"
            )
          ),
          (0, u.h)(
            "li",
            { class: (0, g.default)("-cbwsdk-wallet-steps-item", O) },
            (0, u.h)(
              "div",
              { class: "-cbwsdk-wallet-steps-item-wrapper" },
              (0, u.h)(
                "span",
                null,
                "Tap ",
                (0, u.h)("strong", null, "Scan"),
                " "
              ),
              (0, u.h)(
                "span",
                {
                  class: (0, g.default)(
                    "-cbwsdk-wallet-steps-pad-left",
                    "-cbwsdk-wallet-steps-icon",
                    O
                  ),
                },
                (0, u.h)(h.QRCodeIcon, { fill: A(O) })
              )
            )
          )
        );
      }
      function U({ theme: O }) {
        return (0, u.h)(
          "ol",
          { class: "-cbwsdk-wallet-steps" },
          (0, u.h)(
            "li",
            { class: (0, g.default)("-cbwsdk-wallet-steps-item", O) },
            (0, u.h)(
              "div",
              { class: "-cbwsdk-wallet-steps-item-wrapper" },
              "Open Coinbase app"
            )
          ),
          (0, u.h)(
            "li",
            { class: (0, g.default)("-cbwsdk-wallet-steps-item", O) },
            (0, u.h)(
              "div",
              { class: "-cbwsdk-wallet-steps-item-wrapper" },
              (0, u.h)("span", null, "Tap ", (0, u.h)("strong", null, "More")),
              (0, u.h)(
                "span",
                {
                  class: (0, g.default)(
                    "-cbwsdk-wallet-steps-pad-left",
                    "-cbwsdk-wallet-steps-icon",
                    O
                  ),
                },
                (0, u.h)(n.StatusDotIcon, { fill: A(O) })
              ),
              (0, u.h)(
                "span",
                { class: "-cbwsdk-wallet-steps-pad-left" },
                "then ",
                (0, u.h)("strong", null, "Scan")
              ),
              (0, u.h)(
                "span",
                {
                  class: (0, g.default)(
                    "-cbwsdk-wallet-steps-pad-left",
                    "-cbwsdk-wallet-steps-icon",
                    O
                  ),
                },
                (0, u.h)(h.QRCodeIcon, { fill: A(O) })
              )
            )
          )
        );
      }
      (r.ConnectContent = function S(O) {
        const { theme: D } = O,
          [K, G] = (0, d.useState)("coinbase-wallet-app"),
          re = (0, d.useCallback)((I) => {
            G(I);
          }, []),
          ue = (0, o.createQrUrl)(
            O.sessionId,
            O.sessionSecret,
            O.linkAPIUrl,
            O.isParentConnection,
            O.version,
            O.chainId
          );
        if (!K) return null;
        const m = w[K].steps,
          _ = "coinbase-app" === K;
        return (0, u.h)(
          "div",
          {
            "data-testid": "connect-content",
            class: (0, g.default)("-cbwsdk-connect-content", D),
          },
          (0, u.h)("style", null, E.default),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-connect-content-header" },
            (0, u.h)(
              "h2",
              { class: (0, g.default)("-cbwsdk-connect-content-heading", D) },
              "Scan to connect with one of our mobile apps"
            ),
            O.onCancel &&
              (0, u.h)(
                "button",
                {
                  type: "button",
                  class: "-cbwsdk-cancel-button",
                  onClick: O.onCancel,
                },
                (0, u.h)(s.CloseIcon, {
                  fill: "light" === D ? "#0A0B0D" : "#FFFFFF",
                })
              )
          ),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-connect-content-layout" },
            (0, u.h)(
              "div",
              { class: "-cbwsdk-connect-content-column-left" },
              (0, u.h)(
                "div",
                null,
                Object.entries(w).map(([I, R]) =>
                  (0, u.h)(M, {
                    key: I,
                    title: R.title,
                    description: R.description,
                    icon: R.icon,
                    selected: K === I,
                    onClick: () => re(I),
                    theme: D,
                  })
                )
              ),
              _ &&
                (0, u.h)(
                  "div",
                  {
                    class: (0, g.default)(
                      "-cbwsdk-connect-content-update-app",
                      D
                    ),
                  },
                  "Don\u2019t see a ",
                  (0, u.h)("strong", null, "Scan"),
                  " option? Update your Coinbase app to the latest version and try again."
                )
            ),
            (0, u.h)(
              "div",
              { class: "-cbwsdk-connect-content-column-right" },
              (0, u.h)(
                "div",
                { class: "-cbwsdk-connect-content-qr-wrapper" },
                (0, u.h)(f.QRCode, {
                  content: ue,
                  width: 200,
                  height: 200,
                  fgColor: "#000",
                  bgColor: "transparent",
                  image: { svg: C(K), width: 25, height: 25 },
                }),
                (0, u.h)("input", {
                  type: "hidden",
                  name: "cbw-cbwsdk-version",
                  value: i.LIB_VERSION,
                }),
                (0, u.h)("input", { type: "hidden", value: ue })
              ),
              (0, u.h)(m, { theme: D }),
              !O.isConnected &&
                (0, u.h)(
                  "div",
                  {
                    "data-testid": "connecting-spinner",
                    class: (0, g.default)(
                      "-cbwsdk-connect-content-qr-connecting",
                      D
                    ),
                  },
                  (0, u.h)(v.Spinner, {
                    size: 36,
                    color: "dark" === D ? "#FFF" : "#000",
                  }),
                  (0, u.h)("p", null, "Connecting...")
                )
            )
          )
        );
      }),
        (r.ConnectItem = M),
        (r.CoinbaseWalletSteps = N),
        (r.CoinbaseAppSteps = U);
    },
    17147: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}");
    },
    63161: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (b) {
          return b && b.__esModule ? b : { default: b };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ConnectDialog = void 0);
      const g = e(t(46915)),
        u = t(24354),
        d = t(70491),
        o = t(85174),
        i = t(40804),
        s = e(t(17147));
      r.ConnectDialog = (b) => {
        const { isOpen: h, darkMode: p } = b,
          [c, n] = (0, d.useState)(!h),
          [f, v] = (0, d.useState)(!h);
        (0, d.useEffect)(() => {
          const w = [
            window.setTimeout(() => {
              v(!h);
            }, 10),
          ];
          return (
            h
              ? n(!1)
              : w.push(
                  window.setTimeout(() => {
                    n(!0);
                  }, 360)
                ),
            () => {
              w.forEach(window.clearTimeout);
            }
          );
        }, [b.isOpen]);
        const E = p ? "dark" : "light";
        return (0, u.h)(
          "div",
          {
            class: (0, g.default)(
              "-cbwsdk-connect-dialog-container",
              c && "-cbwsdk-connect-dialog-container-hidden"
            ),
          },
          (0, u.h)("style", null, s.default),
          (0, u.h)("div", {
            class: (0, g.default)(
              "-cbwsdk-connect-dialog-backdrop",
              E,
              f && "-cbwsdk-connect-dialog-backdrop-hidden"
            ),
          }),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-connect-dialog" },
            (0, u.h)(
              "div",
              {
                class: (0, g.default)(
                  "-cbwsdk-connect-dialog-box",
                  f && "-cbwsdk-connect-dialog-box-hidden"
                ),
              },
              b.connectDisabled
                ? null
                : (0, u.h)(o.ConnectContent, {
                    theme: E,
                    version: b.version,
                    sessionId: b.sessionId,
                    sessionSecret: b.sessionSecret,
                    linkAPIUrl: b.linkAPIUrl,
                    isConnected: b.isConnected,
                    isParentConnection: b.isParentConnection,
                    chainId: b.chainId,
                    onCancel: b.onCancel,
                  }),
              (0, u.h)(i.TryExtensionContent, { theme: E })
            )
          )
        );
      };
    },
    23824: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.LinkFlow = void 0);
      const e = t(24354),
        g = t(45397),
        u = t(63161);
      r.LinkFlow = class d {
        constructor(i) {
          (this.extensionUI$ = new g.BehaviorSubject({})),
            (this.subscriptions = new g.Subscription()),
            (this.isConnected = !1),
            (this.chainId = 1),
            (this.isOpen = !1),
            (this.onCancel = null),
            (this.root = null),
            (this.connectDisabled = !1),
            (this.darkMode = i.darkMode),
            (this.version = i.version),
            (this.sessionId = i.sessionId),
            (this.sessionSecret = i.sessionSecret),
            (this.linkAPIUrl = i.linkAPIUrl),
            (this.isParentConnection = i.isParentConnection),
            (this.connected$ = i.connected$),
            (this.chainId$ = i.chainId$);
        }
        attach(i) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-link-flow-root"),
            i.appendChild(this.root),
            this.render(),
            this.subscriptions.add(
              this.connected$.subscribe((s) => {
                this.isConnected !== s &&
                  ((this.isConnected = s), this.render());
              })
            ),
            this.subscriptions.add(
              this.chainId$.subscribe((s) => {
                this.chainId !== s && ((this.chainId = s), this.render());
              })
            );
        }
        detach() {
          var i;
          this.root &&
            (this.subscriptions.unsubscribe(),
            (0, e.render)(null, this.root),
            null === (i = this.root.parentElement) ||
              void 0 === i ||
              i.removeChild(this.root));
        }
        setConnectDisabled(i) {
          this.connectDisabled = i;
        }
        open(i) {
          (this.isOpen = !0), (this.onCancel = i.onCancel), this.render();
        }
        close() {
          (this.isOpen = !1), (this.onCancel = null), this.render();
        }
        render() {
          if (!this.root) return;
          const i = this.extensionUI$.subscribe(() => {
            this.root &&
              (0, e.render)(
                (0, e.h)(u.ConnectDialog, {
                  darkMode: this.darkMode,
                  version: this.version,
                  sessionId: this.sessionId,
                  sessionSecret: this.sessionSecret,
                  linkAPIUrl: this.linkAPIUrl,
                  isOpen: this.isOpen,
                  isConnected: this.isConnected,
                  isParentConnection: this.isParentConnection,
                  chainId: this.chainId,
                  onCancel: this.onCancel,
                  connectDisabled: this.connectDisabled,
                }),
                this.root
              );
          });
          this.subscriptions.add(i);
        }
      };
    },
    95911: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (i) {
          return i && i.__esModule ? i : { default: i };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.QRCode = void 0);
      const g = t(24354),
        u = t(70491),
        d = e(t(38167));
      r.QRCode = (i) => {
        const [s, l] = (0, u.useState)("");
        return (
          (0, u.useEffect)(() => {
            var b, h;
            const p = new d.default({
                content: i.content,
                background: i.bgColor || "#ffffff",
                color: i.fgColor || "#000000",
                container: "svg",
                ecl: "M",
                width: null !== (b = i.width) && void 0 !== b ? b : 256,
                height: null !== (h = i.height) && void 0 !== h ? h : 256,
                padding: 0,
                image: i.image,
              }),
              c = Buffer.from(p.svg(), "utf8").toString("base64");
            l(`data:image/svg+xml;base64,${c}`);
          }),
          s ? (0, g.h)("img", { src: s, alt: "QR Code" }) : null
        );
      };
    },
    65392: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}");
    },
    99045: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (p) {
          return p && p.__esModule ? p : { default: p };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SnackbarInstance = r.SnackbarContainer = r.Snackbar = void 0);
      const g = e(t(46915)),
        u = t(24354),
        d = t(70491),
        o = e(t(65392));
      function s(p) {
        return "coinbase-app" === p
          ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+"
          : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
      }
      (r.Snackbar = class l {
        constructor(c) {
          (this.items = new Map()),
            (this.nextItemKey = 0),
            (this.root = null),
            (this.darkMode = c.darkMode);
        }
        attach(c) {
          (this.root = document.createElement("div")),
            (this.root.className = "-cbwsdk-snackbar-root"),
            c.appendChild(this.root),
            this.render();
        }
        presentItem(c) {
          const n = this.nextItemKey++;
          return (
            this.items.set(n, c),
            this.render(),
            () => {
              this.items.delete(n), this.render();
            }
          );
        }
        clear() {
          this.items.clear(), this.render();
        }
        render() {
          this.root &&
            (0, u.render)(
              (0, u.h)(
                "div",
                null,
                (0, u.h)(
                  r.SnackbarContainer,
                  { darkMode: this.darkMode },
                  Array.from(this.items.entries()).map(([c, n]) =>
                    (0, u.h)(
                      r.SnackbarInstance,
                      Object.assign({}, n, { key: c })
                    )
                  )
                )
              ),
              this.root
            );
        }
      }),
        (r.SnackbarContainer = (p) =>
          (0, u.h)(
            "div",
            { class: (0, g.default)("-cbwsdk-snackbar-container") },
            (0, u.h)("style", null, o.default),
            (0, u.h)("div", { class: "-cbwsdk-snackbar" }, p.children)
          )),
        (r.SnackbarInstance = ({
          autoExpand: p,
          message: c,
          menuItems: n,
          appSrc: f,
        }) => {
          const [v, E] = (0, d.useState)(!0),
            [w, C] = (0, d.useState)(p ?? !1);
          return (
            (0, d.useEffect)(() => {
              const S = [
                window.setTimeout(() => {
                  E(!1);
                }, 1),
                window.setTimeout(() => {
                  C(!0);
                }, 1e4),
              ];
              return () => {
                S.forEach(window.clearTimeout);
              };
            }),
            (0, u.h)(
              "div",
              {
                class: (0, g.default)(
                  "-cbwsdk-snackbar-instance",
                  v && "-cbwsdk-snackbar-instance-hidden",
                  w && "-cbwsdk-snackbar-instance-expanded"
                ),
              },
              (0, u.h)(
                "div",
                {
                  class: "-cbwsdk-snackbar-instance-header",
                  onClick: () => {
                    C(!w);
                  },
                },
                (0, u.h)("img", {
                  src: s(f),
                  class: "-cbwsdk-snackbar-instance-header-cblogo",
                }),
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-header-message" },
                  c
                ),
                (0, u.h)(
                  "div",
                  { class: "-gear-container" },
                  !w &&
                    (0, u.h)(
                      "svg",
                      {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      (0, u.h)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "12",
                        fill: "#F5F7F8",
                      })
                    ),
                  (0, u.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand",
                  })
                )
              ),
              n &&
                n.length > 0 &&
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-snackbar-instance-menu" },
                  n.map((S, M) =>
                    (0, u.h)(
                      "div",
                      {
                        class: (0, g.default)(
                          "-cbwsdk-snackbar-instance-menu-item",
                          S.isRed &&
                            "-cbwsdk-snackbar-instance-menu-item-is-red"
                        ),
                        onClick: S.onClick,
                        key: M,
                      },
                      (0, u.h)(
                        "svg",
                        {
                          width: S.svgWidth,
                          height: S.svgHeight,
                          viewBox: "0 0 10 11",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                        (0, u.h)("path", {
                          "fill-rule": S.defaultFillRule,
                          "clip-rule": S.defaultClipRule,
                          d: S.path,
                          fill: "#AAAAAA",
                        })
                      ),
                      (0, u.h)(
                        "span",
                        {
                          class: (0, g.default)(
                            "-cbwsdk-snackbar-instance-menu-item-info",
                            S.isRed &&
                              "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                          ),
                        },
                        S.info
                      )
                    )
                  )
                )
            )
          );
        });
    },
    49081: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}");
    },
    67560: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (o) {
          return o && o.__esModule ? o : { default: o };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Spinner = void 0);
      const g = t(24354),
        u = e(t(49081));
      r.Spinner = (o) => {
        var i;
        const s = null !== (i = o.size) && void 0 !== i ? i : 64,
          l = o.color || "#000";
        return (0, g.h)(
          "div",
          { class: "-cbwsdk-spinner" },
          (0, g.h)("style", null, u.default),
          (0, g.h)(
            "svg",
            {
              viewBox: "0 0 100 100",
              xmlns: "http://www.w3.org/2000/svg",
              style: { width: s, height: s },
            },
            (0, g.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: l } })
          )
        );
      };
    },
    23226: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}");
    },
    40804: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (h) {
          return h && h.__esModule ? h : { default: h };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.TryExtensionContent = void 0);
      const g = e(t(46915)),
        u = t(24354),
        d = t(70491),
        o = t(92407),
        i = t(7877),
        s = t(89294),
        l = e(t(23226));
      r.TryExtensionContent = function b({ theme: h }) {
        const [p, c] = (0, d.useState)(!1),
          n = (0, d.useCallback)(() => {
            window.open(
              "https://api.wallet.coinbase.com/rpc/v2/desktop/chrome",
              "_blank"
            );
          }, []),
          f = (0, d.useCallback)(() => {
            p ? window.location.reload() : (n(), c(!0));
          }, [n, p]);
        return (0, u.h)(
          "div",
          { class: (0, g.default)("-cbwsdk-try-extension", h) },
          (0, u.h)("style", null, l.default),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-try-extension-column-half" },
            (0, u.h)(
              "h3",
              { class: (0, g.default)("-cbwsdk-try-extension-heading", h) },
              "Or try the Coinbase Wallet browser extension"
            ),
            (0, u.h)(
              "div",
              { class: "-cbwsdk-try-extension-cta-wrapper" },
              (0, u.h)(
                "button",
                {
                  class: (0, g.default)("-cbwsdk-try-extension-cta", h),
                  onClick: f,
                },
                p ? "Refresh" : "Install"
              ),
              (0, u.h)(
                "div",
                null,
                !p &&
                  (0, u.h)(o.ArrowLeftIcon, {
                    class: "-cbwsdk-try-extension-cta-icon",
                    fill: "light" === h ? "#0052FF" : "#588AF5",
                  })
              )
            )
          ),
          (0, u.h)(
            "div",
            { class: "-cbwsdk-try-extension-column-half" },
            (0, u.h)(
              "ul",
              { class: "-cbwsdk-try-extension-list" },
              (0, u.h)(
                "li",
                { class: "-cbwsdk-try-extension-list-item" },
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                  (0, u.h)(
                    "span",
                    {
                      class: (0, g.default)(
                        "-cbwsdk-try-extension-list-item-icon",
                        h
                      ),
                    },
                    (0, u.h)(i.LaptopIcon, {
                      fill: "light" === h ? "#0A0B0D" : "#FFFFFF",
                    })
                  )
                ),
                (0, u.h)(
                  "div",
                  {
                    class: (0, g.default)(
                      "-cbwsdk-try-extension-list-item-copy",
                      h
                    ),
                  },
                  "Connect with dapps with just one click on your desktop browser"
                )
              ),
              (0, u.h)(
                "li",
                { class: "-cbwsdk-try-extension-list-item" },
                (0, u.h)(
                  "div",
                  { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
                  (0, u.h)(
                    "span",
                    {
                      class: (0, g.default)(
                        "-cbwsdk-try-extension-list-item-icon",
                        h
                      ),
                    },
                    (0, u.h)(s.SafeIcon, {
                      fill: "light" === h ? "#0A0B0D" : "#FFFFFF",
                    })
                  )
                ),
                (0, u.h)(
                  "div",
                  {
                    class: (0, g.default)(
                      "-cbwsdk-try-extension-list-item-copy",
                      h
                    ),
                  },
                  "Add an additional layer of security by using a supported Ledger hardware wallet"
                )
              )
            )
          )
        );
      };
    },
    92407: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ArrowLeftIcon = void 0);
      const e = t(24354);
      r.ArrowLeftIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z",
          })
        );
      };
    },
    53729: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CloseIcon = void 0);
      const e = t(24354);
      r.CloseIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "40",
              height: "40",
              viewBox: "0 0 40 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z",
          })
        );
      };
    },
    7877: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.LaptopIcon = void 0);
      const e = t(24354);
      r.LaptopIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z",
          }),
          (0, e.h)("path", {
            d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z",
          })
        );
      };
    },
    63801: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.QRCodeIcon = void 0);
      const e = t(24354);
      r.QRCodeIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 10 10",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z",
          }),
          (0, e.h)("path", {
            d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z",
          }),
          (0, e.h)("path", {
            d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z",
          }),
          (0, e.h)("path", {
            d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z",
          }),
          (0, e.h)("path", {
            d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z",
          }),
          (0, e.h)("path", {
            d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z",
          }),
          (0, e.h)("path", {
            d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z",
          }),
          (0, e.h)("path", {
            d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z",
          }),
          (0, e.h)("path", {
            d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z",
          })
        );
      };
    },
    937: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>\n        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>\n        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>\n    </svg>\n');
    },
    40469: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          '\n    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <circle cx="50" cy="50" r="50" fill="white"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>\n        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>\n    </svg>\n');
    },
    89294: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SafeIcon = void 0);
      const e = t(24354);
      r.SafeIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "14",
              height: "14",
              viewBox: "0 0 14 14",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z",
          })
        );
      };
    },
    25068: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.StatusDotIcon = void 0);
      const e = t(24354);
      r.StatusDotIcon = function g(u) {
        return (0, e.h)(
          "svg",
          Object.assign(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 10 10",
              xmlns: "http://www.w3.org/2000/svg",
            },
            u
          ),
          (0, e.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z",
          })
        );
      };
    },
    46678: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");
    },
    43710: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==");
    },
    42423: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ClientMessagePublishEvent =
          r.ClientMessageSetSessionConfig =
          r.ClientMessageGetSessionConfig =
          r.ClientMessageIsLinked =
          r.ClientMessageHostSession =
            void 0),
        (r.ClientMessageHostSession = function t(o) {
          return Object.assign({ type: "HostSession" }, o);
        }),
        (r.ClientMessageIsLinked = function e(o) {
          return Object.assign({ type: "IsLinked" }, o);
        }),
        (r.ClientMessageGetSessionConfig = function g(o) {
          return Object.assign({ type: "GetSessionConfig" }, o);
        }),
        (r.ClientMessageSetSessionConfig = function u(o) {
          return Object.assign({ type: "SetSessionConfig" }, o);
        }),
        (r.ClientMessagePublishEvent = function d(o) {
          return Object.assign({ type: "PublishEvent" }, o);
        });
    },
    32051: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EVENTS = void 0),
        (r.EVENTS = {
          STARTED_CONNECTING: "walletlink_sdk.started.connecting",
          CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
          DISCONNECTED: "walletlink_sdk.disconnected",
          METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
          LINKED: "walletlink_sdk.linked",
          FAILURE: "walletlink_sdk.generic_failure",
          SESSION_CONFIG_RECEIVED:
            "walletlink_sdk.session_config_event_received",
          ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
          SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
          UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
          SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
          GENERAL_ERROR: "walletlink_sdk.general_error",
          WEB3_REQUEST: "walletlink_sdk.web3.request",
          WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
          WEB3_RESPONSE: "walletlink_sdk.web3.response",
          UNKNOWN_ADDRESS_ENCOUNTERED:
            "walletlink_sdk.unknown_address_encountered",
        });
    },
    77517: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.RxWebSocket = r.ConnectionState = void 0);
      const e = t(45397),
        g = t(58551);
      var u, o;
      ((o = u = r.ConnectionState || (r.ConnectionState = {}))[
        (o.DISCONNECTED = 0)
      ] = "DISCONNECTED"),
        (o[(o.CONNECTING = 1)] = "CONNECTING"),
        (o[(o.CONNECTED = 2)] = "CONNECTED"),
        (r.RxWebSocket = class d {
          constructor(i, s = WebSocket) {
            (this.WebSocketClass = s),
              (this.webSocket = null),
              (this.connectionStateSubject = new e.BehaviorSubject(
                u.DISCONNECTED
              )),
              (this.incomingDataSubject = new e.Subject()),
              (this.url = i.replace(/^http/, "ws"));
          }
          connect() {
            return this.webSocket
              ? (0, e.throwError)(new Error("webSocket object is not null"))
              : new e.Observable((i) => {
                  let s;
                  try {
                    this.webSocket = s = new this.WebSocketClass(this.url);
                  } catch (l) {
                    return void i.error(l);
                  }
                  this.connectionStateSubject.next(u.CONNECTING),
                    (s.onclose = (l) => {
                      this.clearWebSocket(),
                        i.error(
                          new Error(`websocket error ${l.code}: ${l.reason}`)
                        ),
                        this.connectionStateSubject.next(u.DISCONNECTED);
                    }),
                    (s.onopen = (l) => {
                      i.next(),
                        i.complete(),
                        this.connectionStateSubject.next(u.CONNECTED);
                    }),
                    (s.onmessage = (l) => {
                      this.incomingDataSubject.next(l.data);
                    });
                }).pipe((0, g.take)(1));
          }
          disconnect() {
            const { webSocket: i } = this;
            if (i) {
              this.clearWebSocket(),
                this.connectionStateSubject.next(u.DISCONNECTED);
              try {
                i.close();
              } catch {}
            }
          }
          get connectionState$() {
            return this.connectionStateSubject.asObservable();
          }
          get incomingData$() {
            return this.incomingDataSubject.asObservable();
          }
          get incomingJSONData$() {
            return this.incomingData$.pipe(
              (0, g.flatMap)((i) => {
                let s;
                try {
                  s = JSON.parse(i);
                } catch {
                  return (0, e.empty)();
                }
                return (0, e.of)(s);
              })
            );
          }
          sendData(i) {
            const { webSocket: s } = this;
            if (!s) throw new Error("websocket is not connected");
            s.send(i);
          }
          clearWebSocket() {
            const { webSocket: i } = this;
            i &&
              ((this.webSocket = null),
              (i.onclose = null),
              (i.onerror = null),
              (i.onmessage = null),
              (i.onopen = null));
          }
        });
    },
    65124: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isServerMessageFail = void 0),
        (r.isServerMessageFail = function t(e) {
          return (
            e &&
            "Fail" === e.type &&
            "number" == typeof e.id &&
            "string" == typeof e.sessionId &&
            "string" == typeof e.error
          );
        });
    },
    86745: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletSDKConnection = void 0);
      const e = t(45397),
        g = t(58551),
        u = t(66293),
        d = t(56703),
        o = t(42423),
        i = t(32051),
        s = t(77517),
        l = t(65124);
      r.WalletSDKConnection = class p {
        constructor(n, f, v, E, w = WebSocket) {
          (this.sessionId = n),
            (this.sessionKey = f),
            (this.diagnostic = E),
            (this.subscriptions = new e.Subscription()),
            (this.destroyed = !1),
            (this.lastHeartbeatResponse = 0),
            (this.nextReqId = (0, d.IntNumber)(1)),
            (this.connectedSubject = new e.BehaviorSubject(!1)),
            (this.linkedSubject = new e.BehaviorSubject(!1)),
            (this.sessionConfigSubject = new e.ReplaySubject(1));
          const C = new s.RxWebSocket(v + "/rpc", w);
          (this.ws = C),
            this.subscriptions.add(
              C.connectionState$
                .pipe(
                  (0, g.tap)((A) => {
                    var S;
                    return null === (S = this.diagnostic) || void 0 === S
                      ? void 0
                      : S.log(i.EVENTS.CONNECTED_STATE_CHANGE, {
                          state: A,
                          sessionIdHash: u.Session.hash(n),
                        });
                  }),
                  (0, g.skip)(1),
                  (0, g.filter)(
                    (A) =>
                      A === s.ConnectionState.DISCONNECTED && !this.destroyed
                  ),
                  (0, g.delay)(5e3),
                  (0, g.filter)((A) => !this.destroyed),
                  (0, g.flatMap)((A) => C.connect()),
                  (0, g.retry)()
                )
                .subscribe()
            ),
            this.subscriptions.add(
              C.connectionState$
                .pipe(
                  (0, g.skip)(2),
                  (0, g.switchMap)((A) =>
                    (0, e.iif)(
                      () => A === s.ConnectionState.CONNECTED,
                      this.authenticate().pipe(
                        (0, g.tap)((S) => this.sendIsLinked()),
                        (0, g.tap)((S) => this.sendGetSessionConfig()),
                        (0, g.map)((S) => !0)
                      ),
                      (0, e.of)(!1)
                    )
                  ),
                  (0, g.distinctUntilChanged)(),
                  (0, g.catchError)((A) => (0, e.of)(!1))
                )
                .subscribe((A) => this.connectedSubject.next(A))
            ),
            this.subscriptions.add(
              C.connectionState$
                .pipe(
                  (0, g.skip)(1),
                  (0, g.switchMap)((A) =>
                    (0, e.iif)(
                      () => A === s.ConnectionState.CONNECTED,
                      (0, e.timer)(0, 1e4)
                    )
                  )
                )
                .subscribe((A) =>
                  0 === A ? this.updateLastHeartbeat() : this.heartbeat()
                )
            ),
            this.subscriptions.add(
              C.incomingData$
                .pipe((0, g.filter)((A) => "h" === A))
                .subscribe((A) => this.updateLastHeartbeat())
            ),
            this.subscriptions.add(
              C.incomingJSONData$
                .pipe(
                  (0, g.filter)((A) =>
                    ["IsLinkedOK", "Linked"].includes(A.type)
                  )
                )
                .subscribe((A) => {
                  var S;
                  const M = A;
                  null === (S = this.diagnostic) ||
                    void 0 === S ||
                    S.log(i.EVENTS.LINKED, {
                      sessionIdHash: u.Session.hash(n),
                      linked: M.linked,
                      type: A.type,
                      onlineGuests: M.onlineGuests,
                    }),
                    this.linkedSubject.next(M.linked || M.onlineGuests > 0);
                })
            ),
            this.subscriptions.add(
              C.incomingJSONData$
                .pipe(
                  (0, g.filter)((A) =>
                    ["GetSessionConfigOK", "SessionConfigUpdated"].includes(
                      A.type
                    )
                  )
                )
                .subscribe((A) => {
                  var S;
                  const M = A;
                  null === (S = this.diagnostic) ||
                    void 0 === S ||
                    S.log(i.EVENTS.SESSION_CONFIG_RECEIVED, {
                      sessionIdHash: u.Session.hash(n),
                      metadata_keys:
                        M && M.metadata ? Object.keys(M.metadata) : void 0,
                    }),
                    this.sessionConfigSubject.next({
                      webhookId: M.webhookId,
                      webhookUrl: M.webhookUrl,
                      metadata: M.metadata,
                    });
                })
            );
        }
        connect() {
          var n;
          if (this.destroyed) throw new Error("instance is destroyed");
          null === (n = this.diagnostic) ||
            void 0 === n ||
            n.log(i.EVENTS.STARTED_CONNECTING, {
              sessionIdHash: u.Session.hash(this.sessionId),
            }),
            this.ws.connect().subscribe();
        }
        destroy() {
          var n;
          this.subscriptions.unsubscribe(),
            this.ws.disconnect(),
            null === (n = this.diagnostic) ||
              void 0 === n ||
              n.log(i.EVENTS.DISCONNECTED, {
                sessionIdHash: u.Session.hash(this.sessionId),
              }),
            (this.destroyed = !0);
        }
        get isDestroyed() {
          return this.destroyed;
        }
        get connected$() {
          return this.connectedSubject.asObservable();
        }
        get onceConnected$() {
          return this.connected$.pipe(
            (0, g.filter)((n) => n),
            (0, g.take)(1),
            (0, g.map)(() => {})
          );
        }
        get linked$() {
          return this.linkedSubject.asObservable();
        }
        get onceLinked$() {
          return this.linked$.pipe(
            (0, g.filter)((n) => n),
            (0, g.take)(1),
            (0, g.map)(() => {})
          );
        }
        get sessionConfig$() {
          return this.sessionConfigSubject.asObservable();
        }
        get incomingEvent$() {
          return this.ws.incomingJSONData$.pipe(
            (0, g.filter)(
              (n) =>
                "Event" === n.type &&
                "string" == typeof n.sessionId &&
                "string" == typeof n.eventId &&
                "string" == typeof n.event &&
                "string" == typeof n.data
            ),
            (0, g.map)((n) => n)
          );
        }
        setSessionMetadata(n, f) {
          const v = (0, o.ClientMessageSetSessionConfig)({
            id: (0, d.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            metadata: { [n]: f },
          });
          return this.onceConnected$.pipe(
            (0, g.flatMap)((E) => this.makeRequest(v)),
            (0, g.map)((E) => {
              if ((0, l.isServerMessageFail)(E))
                throw new Error(E.error || "failed to set session metadata");
            })
          );
        }
        publishEvent(n, f, v = !1) {
          const E = (0, o.ClientMessagePublishEvent)({
            id: (0, d.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            event: n,
            data: f,
            callWebhook: v,
          });
          return this.onceLinked$.pipe(
            (0, g.flatMap)((w) => this.makeRequest(E)),
            (0, g.map)((w) => {
              if ((0, l.isServerMessageFail)(w))
                throw new Error(w.error || "failed to publish event");
              return w.eventId;
            })
          );
        }
        sendData(n) {
          this.ws.sendData(JSON.stringify(n));
        }
        updateLastHeartbeat() {
          this.lastHeartbeatResponse = Date.now();
        }
        heartbeat() {
          if (Date.now() - this.lastHeartbeatResponse > 2e4)
            this.ws.disconnect();
          else
            try {
              this.ws.sendData("h");
            } catch {}
        }
        makeRequest(n, f = 6e4) {
          const v = n.id;
          try {
            this.sendData(n);
          } catch (E) {
            return (0, e.throwError)(E);
          }
          return this.ws.incomingJSONData$.pipe(
            (0, g.timeoutWith)(
              f,
              (0, e.throwError)(new Error(`request ${v} timed out`))
            ),
            (0, g.filter)((E) => E.id === v),
            (0, g.take)(1)
          );
        }
        authenticate() {
          const n = (0, o.ClientMessageHostSession)({
            id: (0, d.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            sessionKey: this.sessionKey,
          });
          return this.makeRequest(n).pipe(
            (0, g.map)((f) => {
              if ((0, l.isServerMessageFail)(f))
                throw new Error(f.error || "failed to authentcate");
            })
          );
        }
        sendIsLinked() {
          const n = (0, o.ClientMessageIsLinked)({
            id: (0, d.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
          });
          this.sendData(n);
        }
        sendGetSessionConfig() {
          const n = (0, o.ClientMessageGetSessionConfig)({
            id: (0, d.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
          });
          this.sendData(n);
        }
      };
    },
    84110: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.LINK_API_URL = void 0),
        (r.LINK_API_URL = "https://www.walletlink.org");
    },
    23139: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getErrorCode =
          r.serializeError =
          r.standardErrors =
          r.standardErrorMessage =
          r.standardErrorCodes =
            void 0);
      const e = t(90664),
        g = t(75800),
        u = t(7938);
      (r.standardErrorCodes = Object.freeze(
        Object.assign(Object.assign({}, e.errorCodes), {
          provider: Object.freeze(
            Object.assign(Object.assign({}, e.errorCodes.provider), {
              unsupportedChain: 4902,
            })
          ),
        })
      )),
        (r.standardErrorMessage = function d(h) {
          return void 0 !== h ? (0, e.getMessageFromCode)(h) : "Unknown error";
        }),
        (r.standardErrors = Object.freeze(
          Object.assign(Object.assign({}, e.ethErrors), {
            provider: Object.freeze(
              Object.assign(Object.assign({}, e.ethErrors.provider), {
                unsupportedChain: (h = "") =>
                  e.ethErrors.provider.custom({
                    code: r.standardErrorCodes.provider.unsupportedChain,
                    message: `Unrecognized chain ID ${h}. Try adding the chain using wallet_addEthereumChain first.`,
                  }),
              })
            ),
          })
        )),
        (r.serializeError = function o(h, p) {
          const c = (0, e.serializeError)(
              (function i(h) {
                return "string" == typeof h
                  ? { message: h, code: r.standardErrorCodes.rpc.internal }
                  : (0, g.isErrorResponse)(h)
                  ? Object.assign(Object.assign({}, h), {
                      message: h.errorMessage,
                      code: h.errorCode,
                      data: { method: h.method, result: h.result },
                    })
                  : h;
              })(h),
              { shouldIncludeStack: !0 }
            ),
            n = new URL(
              "https://docs.cloud.coinbase.com/wallet-sdk/docs/errors"
            );
          n.searchParams.set("version", u.LIB_VERSION),
            n.searchParams.set("code", c.code.toString());
          const f = (function s(h, p) {
            var c;
            const n = null === (c = h) || void 0 === c ? void 0 : c.method;
            return (
              n ||
              (void 0 !== p
                ? "string" == typeof p
                  ? p
                  : Array.isArray(p)
                  ? p.length > 0
                    ? p[0].method
                    : void 0
                  : p.method
                : void 0)
            );
          })(c.data, p);
          return (
            f && n.searchParams.set("method", f),
            n.searchParams.set("message", c.message),
            Object.assign(Object.assign({}, c), { docUrl: n.href })
          );
        }),
        (r.getErrorCode = function l(h) {
          var p;
          return "number" == typeof h
            ? h
            : (function b(h) {
                return (
                  "object" == typeof h &&
                  null !== h &&
                  ("number" == typeof h.code || "number" == typeof h.errorCode)
                );
              })(h)
            ? null !== (p = h.code) && void 0 !== p
              ? p
              : h.errorCode
            : void 0;
        });
    },
    29404: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CoinbaseWalletProvider = r.CoinbaseWalletSDK = void 0);
      const e = t(76010),
        g = t(61579);
      var u = t(76010);
      Object.defineProperty(r, "CoinbaseWalletSDK", {
        enumerable: !0,
        get: function () {
          return u.CoinbaseWalletSDK;
        },
      });
      var d = t(61579);
      Object.defineProperty(r, "CoinbaseWalletProvider", {
        enumerable: !0,
        get: function () {
          return d.CoinbaseWalletProvider;
        },
      }),
        (r.default = e.CoinbaseWalletSDK),
        typeof window < "u" &&
          ((window.CoinbaseWalletSDK = e.CoinbaseWalletSDK),
          (window.CoinbaseWalletProvider = g.CoinbaseWalletProvider),
          (window.WalletLink = e.CoinbaseWalletSDK),
          (window.WalletLinkProvider = g.CoinbaseWalletProvider));
    },
    98169: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ScopedLocalStorage = void 0),
        (r.ScopedLocalStorage = class t {
          constructor(g) {
            this.scope = g;
          }
          setItem(g, u) {
            localStorage.setItem(this.scopedKey(g), u);
          }
          getItem(g) {
            return localStorage.getItem(this.scopedKey(g));
          }
          removeItem(g) {
            localStorage.removeItem(this.scopedKey(g));
          }
          clear() {
            const g = this.scopedKey(""),
              u = [];
            for (let d = 0; d < localStorage.length; d++) {
              const o = localStorage.key(d);
              "string" == typeof o && o.startsWith(g) && u.push(o);
            }
            u.forEach((d) => localStorage.removeItem(d));
          }
          scopedKey(g) {
            return `${this.scope}:${g}`;
          }
        });
    },
    93187: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.default =
          '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}');
    },
    8070: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (d) {
          return d && d.__esModule ? d : { default: d };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.injectCssReset = void 0);
      const g = e(t(93187));
      r.injectCssReset = function u() {
        const d = document.createElement("style");
        (d.type = "text/css"),
          d.appendChild(document.createTextNode(g.default)),
          document.documentElement.appendChild(d);
      };
    },
    61579: function (L, r, t) {
      "use strict";
      var e = t(59344).default,
        g =
          (this && this.__importDefault) ||
          function (A) {
            return A && A.__esModule ? A : { default: A };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.CoinbaseWalletProvider = void 0);
      const u = g(t(91184)),
        d = g(t(62662)),
        o = t(32051),
        i = t(23139),
        s = t(66293),
        l = t(9740),
        b = t(82844),
        h = t(75800),
        p = t(81260),
        c = g(t(83348)),
        n = t(94016),
        f = t(61234),
        v = t(82506),
        E = "DefaultChainId",
        w = "DefaultJsonRpcUrl";
      r.CoinbaseWalletProvider = class C extends u.default {
        constructor(S) {
          var M, N;
          super(),
            (this._filterPolyfill = new n.FilterPolyfill(this)),
            (this._subscriptionManager = new v.SubscriptionManager(this)),
            (this._relay = null),
            (this._addresses = []),
            (this.hasMadeFirstChainChangedEmission = !1),
            (this.setProviderInfo = this.setProviderInfo.bind(this)),
            (this.updateProviderInfo = this.updateProviderInfo.bind(this)),
            (this.getChainId = this.getChainId.bind(this)),
            (this.setAppInfo = this.setAppInfo.bind(this)),
            (this.enable = this.enable.bind(this)),
            (this.close = this.close.bind(this)),
            (this.send = this.send.bind(this)),
            (this.sendAsync = this.sendAsync.bind(this)),
            (this.request = this.request.bind(this)),
            (this._setAddresses = this._setAddresses.bind(this)),
            (this.scanQRCode = this.scanQRCode.bind(this)),
            (this.genericRequest = this.genericRequest.bind(this)),
            (this._chainIdFromOpts = S.chainId),
            (this._jsonRpcUrlFromOpts = S.jsonRpcUrl),
            (this._overrideIsMetaMask = S.overrideIsMetaMask),
            (this._relayProvider = S.relayProvider),
            (this._storage = S.storage),
            (this._relayEventManager = S.relayEventManager),
            (this.diagnostic = S.diagnosticLogger),
            (this.reloadOnDisconnect = !0),
            (this.isCoinbaseWallet =
              null === (M = S.overrideIsCoinbaseWallet) || void 0 === M || M),
            (this.isCoinbaseBrowser =
              null !== (N = S.overrideIsCoinbaseBrowser) && void 0 !== N && N),
            (this.qrUrl = S.qrUrl);
          const U = this.getChainId(),
            O = (0, p.prepend0x)(U.toString(16));
          this.emit("connect", { chainIdStr: O });
          const D = this._storage.getItem(l.LOCAL_STORAGE_ADDRESSES_KEY);
          if (D) {
            const K = D.split(" ");
            "" !== K[0] &&
              ((this._addresses = K.map((G) => (0, p.ensureAddressString)(G))),
              this.emit("accountsChanged", K));
          }
          this._subscriptionManager.events.on("notification", (K) => {
            this.emit("message", { type: K.method, data: K.params });
          }),
            this._isAuthorized() && this.initializeRelay(),
            window.addEventListener("message", (K) => {
              var G;
              if (
                K.origin === location.origin &&
                K.source === window &&
                "walletLinkMessage" === K.data.type
              ) {
                if ("dappChainSwitched" === K.data.data.action) {
                  const ue =
                    null !== (G = K.data.data.jsonRpcUrl) && void 0 !== G
                      ? G
                      : this.jsonRpcUrl;
                  this.updateProviderInfo(ue, Number(K.data.data.chainId));
                }
                "addressChanged" === K.data.data.action &&
                  this._setAddresses([K.data.data.address]);
              }
            });
        }
        get selectedAddress() {
          return this._addresses[0] || void 0;
        }
        get networkVersion() {
          return this.getChainId().toString(10);
        }
        get chainId() {
          return (0, p.prepend0x)(this.getChainId().toString(16));
        }
        get isWalletLink() {
          return !0;
        }
        get isMetaMask() {
          return this._overrideIsMetaMask;
        }
        get host() {
          return this.jsonRpcUrl;
        }
        get connected() {
          return !0;
        }
        isConnected() {
          return !0;
        }
        get jsonRpcUrl() {
          var S;
          return null !== (S = this._storage.getItem(w)) && void 0 !== S
            ? S
            : this._jsonRpcUrlFromOpts;
        }
        set jsonRpcUrl(S) {
          this._storage.setItem(w, S);
        }
        disableReloadOnDisconnect() {
          this.reloadOnDisconnect = !1;
        }
        setProviderInfo(S, M) {
          this.isCoinbaseBrowser ||
            ((this._chainIdFromOpts = M), (this._jsonRpcUrlFromOpts = S)),
            this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
        }
        updateProviderInfo(S, M) {
          this.jsonRpcUrl = S;
          const N = this.getChainId();
          this._storage.setItem(E, M.toString(10)),
            ((0, p.ensureIntNumber)(M) !== N ||
              !this.hasMadeFirstChainChangedEmission) &&
              (this.emit("chainChanged", this.getChainId()),
              (this.hasMadeFirstChainChangedEmission = !0));
        }
        watchAsset(S, M, N, U, O, D) {
          var K = this;
          return e(function* () {
            return !!(yield (yield K.initializeRelay()).watchAsset(
              S,
              M,
              N,
              U,
              O,
              D?.toString()
            ).promise).result;
          })();
        }
        addEthereumChain(S, M, N, U, O, D) {
          var K = this;
          return e(function* () {
            var G, re;
            if ((0, p.ensureIntNumber)(S) === K.getChainId()) return !1;
            const ue = yield K.initializeRelay(),
              P = ue.inlineAddEthereumChain(S.toString());
            !K._isAuthorized() &&
              !P &&
              (yield ue.requestEthereumAccounts().promise);
            const m = yield ue.addEthereumChain(S.toString(), M, O, N, U, D)
              .promise;
            return (
              !0 ===
                (null === (G = m.result) || void 0 === G
                  ? void 0
                  : G.isApproved) && K.updateProviderInfo(M[0], S),
              !0 ===
                (null === (re = m.result) || void 0 === re
                  ? void 0
                  : re.isApproved)
            );
          })();
        }
        switchEthereumChain(S) {
          var M = this;
          return e(function* () {
            const U = yield (yield M.initializeRelay()).switchEthereumChain(
              S.toString(10),
              M.selectedAddress || void 0
            ).promise;
            if ((0, h.isErrorResponse)(U) && U.errorCode)
              throw U.errorCode ===
                i.standardErrorCodes.provider.unsupportedChain
                ? i.standardErrors.provider.unsupportedChain(S)
                : i.standardErrors.provider.custom({
                    message: U.errorMessage,
                    code: U.errorCode,
                  });
            const O = U.result;
            O.isApproved &&
              O.rpcUrl.length > 0 &&
              M.updateProviderInfo(O.rpcUrl, S);
          })();
        }
        setAppInfo(S, M) {
          this.initializeRelay().then((N) => N.setAppInfo(S, M));
        }
        enable() {
          var S = this;
          return e(function* () {
            var M;
            return (
              null === (M = S.diagnostic) ||
                void 0 === M ||
                M.log(o.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: "provider::enable",
                  addresses_length: S._addresses.length,
                  sessionIdHash: S._relay
                    ? s.Session.hash(S._relay.session.id)
                    : void 0,
                }),
              S._isAuthorized()
                ? [...S._addresses]
                : yield S.send(f.JSONRPCMethod.eth_requestAccounts)
            );
          })();
        }
        close() {
          var S = this;
          return e(function* () {
            (yield S.initializeRelay()).resetAndReload();
          })();
        }
        send(S, M) {
          try {
            const N = this._send(S, M);
            if (N instanceof Promise)
              return N.catch((U) => {
                throw (0, i.serializeError)(U, S);
              });
          } catch (N) {
            throw (0, i.serializeError)(N, S);
          }
        }
        _send(S, M) {
          if ("string" == typeof S) {
            const U = S,
              O = Array.isArray(M) ? M : void 0 !== M ? [M] : [];
            return this._sendRequestAsync({
              jsonrpc: "2.0",
              id: 0,
              method: U,
              params: O,
            }).then((K) => K.result);
          }
          return "function" == typeof M
            ? this._sendAsync(S, M)
            : Array.isArray(S)
            ? S.map((O) => this._sendRequest(O))
            : this._sendRequest(S);
        }
        sendAsync(S, M) {
          var N = this;
          return e(function* () {
            try {
              return N._sendAsync(S, M).catch((U) => {
                throw (0, i.serializeError)(U, S);
              });
            } catch (U) {
              return Promise.reject((0, i.serializeError)(U, S));
            }
          })();
        }
        _sendAsync(S, M) {
          var N = this;
          return e(function* () {
            if ("function" != typeof M) throw new Error("callback is required");
            if (Array.isArray(S)) {
              const O = M;
              return void N._sendMultipleRequestsAsync(S)
                .then((D) => O(null, D))
                .catch((D) => O(D, null));
            }
            const U = M;
            return N._sendRequestAsync(S)
              .then((O) => U(null, O))
              .catch((O) => U(O, null));
          })();
        }
        request(S) {
          var M = this;
          return e(function* () {
            try {
              return M._request(S).catch((N) => {
                throw (0, i.serializeError)(N, S.method);
              });
            } catch (N) {
              return Promise.reject((0, i.serializeError)(N, S.method));
            }
          })();
        }
        _request(S) {
          var M = this;
          return e(function* () {
            if (!S || "object" != typeof S || Array.isArray(S))
              throw i.standardErrors.rpc.invalidRequest({
                message: "Expected a single, non-array, object argument.",
                data: S,
              });
            const { method: N, params: U } = S;
            if ("string" != typeof N || 0 === N.length)
              throw i.standardErrors.rpc.invalidRequest({
                message: "'args.method' must be a non-empty string.",
                data: S,
              });
            if (
              void 0 !== U &&
              !Array.isArray(U) &&
              ("object" != typeof U || null === U)
            )
              throw i.standardErrors.rpc.invalidRequest({
                message:
                  "'args.params' must be an object or array if provided.",
                data: S,
              });
            const O = void 0 === U ? [] : U,
              D = M._relayEventManager.makeRequestId();
            return (yield M._sendRequestAsync({
              method: N,
              params: O,
              jsonrpc: "2.0",
              id: D,
            })).result;
          })();
        }
        scanQRCode(S) {
          var M = this;
          return e(function* () {
            var N;
            const O = yield (yield M.initializeRelay()).scanQRCode(
              (0, p.ensureRegExpString)(S)
            ).promise;
            if ("string" != typeof O.result)
              throw (0, i.serializeError)(
                null !== (N = O.errorMessage) && void 0 !== N
                  ? N
                  : "result was not a string",
                b.Web3Method.scanQRCode
              );
            return O.result;
          })();
        }
        genericRequest(S, M) {
          var N = this;
          return e(function* () {
            var U;
            const D = yield (yield N.initializeRelay()).genericRequest(S, M)
              .promise;
            if ("string" != typeof D.result)
              throw (0, i.serializeError)(
                null !== (U = D.errorMessage) && void 0 !== U
                  ? U
                  : "result was not a string",
                b.Web3Method.generic
              );
            return D.result;
          })();
        }
        selectProvider(S) {
          var M = this;
          return e(function* () {
            var N;
            const O = yield (yield M.initializeRelay()).selectProvider(S)
              .promise;
            if ("string" != typeof O.result)
              throw (0, i.serializeError)(
                null !== (N = O.errorMessage) && void 0 !== N
                  ? N
                  : "result was not a string",
                b.Web3Method.selectProvider
              );
            return O.result;
          })();
        }
        supportsSubscriptions() {
          return !1;
        }
        subscribe() {
          throw new Error("Subscriptions are not supported");
        }
        unsubscribe() {
          throw new Error("Subscriptions are not supported");
        }
        disconnect() {
          return !0;
        }
        _sendRequest(S) {
          const M = { jsonrpc: "2.0", id: S.id },
            { method: N } = S;
          if (
            ((M.result = this._handleSynchronousMethods(S)),
            void 0 === M.result)
          )
            throw new Error(
              `Coinbase Wallet does not support calling ${N} synchronously without a callback. Please provide a callback parameter to call ${N} asynchronously.`
            );
          return M;
        }
        _setAddresses(S, M) {
          if (!Array.isArray(S)) throw new Error("addresses is not an array");
          const N = S.map((U) => (0, p.ensureAddressString)(U));
          JSON.stringify(N) !== JSON.stringify(this._addresses) &&
            ((this._addresses = N),
            this.emit("accountsChanged", this._addresses),
            this._storage.setItem(l.LOCAL_STORAGE_ADDRESSES_KEY, N.join(" ")));
        }
        _sendRequestAsync(S) {
          return new Promise((M, N) => {
            try {
              const U = this._handleSynchronousMethods(S);
              if (void 0 !== U)
                return M({ jsonrpc: "2.0", id: S.id, result: U });
              const O = this._handleAsynchronousFilterMethods(S);
              if (void 0 !== O)
                return void O.then((K) =>
                  M(Object.assign(Object.assign({}, K), { id: S.id }))
                ).catch((K) => N(K));
              const D = this._handleSubscriptionMethods(S);
              if (void 0 !== D)
                return void D.then((K) =>
                  M({ jsonrpc: "2.0", id: S.id, result: K.result })
                ).catch((K) => N(K));
            } catch (U) {
              return N(U);
            }
            this._handleAsynchronousMethods(S)
              .then(
                (U) => U && M(Object.assign(Object.assign({}, U), { id: S.id }))
              )
              .catch((U) => N(U));
          });
        }
        _sendMultipleRequestsAsync(S) {
          return Promise.all(S.map((M) => this._sendRequestAsync(M)));
        }
        _handleSynchronousMethods(S) {
          const { method: M } = S,
            N = S.params || [];
          switch (M) {
            case f.JSONRPCMethod.eth_accounts:
              return this._eth_accounts();
            case f.JSONRPCMethod.eth_coinbase:
              return this._eth_coinbase();
            case f.JSONRPCMethod.eth_uninstallFilter:
              return this._eth_uninstallFilter(N);
            case f.JSONRPCMethod.net_version:
              return this._net_version();
            case f.JSONRPCMethod.eth_chainId:
              return this._eth_chainId();
            default:
              return;
          }
        }
        _handleAsynchronousMethods(S) {
          var M = this;
          return e(function* () {
            const { method: N } = S,
              U = S.params || [];
            switch (N) {
              case f.JSONRPCMethod.eth_requestAccounts:
                return M._eth_requestAccounts();
              case f.JSONRPCMethod.eth_sign:
                return M._eth_sign(U);
              case f.JSONRPCMethod.eth_ecRecover:
                return M._eth_ecRecover(U);
              case f.JSONRPCMethod.personal_sign:
                return M._personal_sign(U);
              case f.JSONRPCMethod.personal_ecRecover:
                return M._personal_ecRecover(U);
              case f.JSONRPCMethod.eth_signTransaction:
                return M._eth_signTransaction(U);
              case f.JSONRPCMethod.eth_sendRawTransaction:
                return M._eth_sendRawTransaction(U);
              case f.JSONRPCMethod.eth_sendTransaction:
                return M._eth_sendTransaction(U);
              case f.JSONRPCMethod.eth_signTypedData_v1:
                return M._eth_signTypedData_v1(U);
              case f.JSONRPCMethod.eth_signTypedData_v2:
                return M._throwUnsupportedMethodError();
              case f.JSONRPCMethod.eth_signTypedData_v3:
                return M._eth_signTypedData_v3(U);
              case f.JSONRPCMethod.eth_signTypedData_v4:
              case f.JSONRPCMethod.eth_signTypedData:
                return M._eth_signTypedData_v4(U);
              case f.JSONRPCMethod.cbWallet_arbitrary:
                return M._cbwallet_arbitrary(U);
              case f.JSONRPCMethod.wallet_addEthereumChain:
                return M._wallet_addEthereumChain(U);
              case f.JSONRPCMethod.wallet_switchEthereumChain:
                return M._wallet_switchEthereumChain(U);
              case f.JSONRPCMethod.wallet_watchAsset:
                return M._wallet_watchAsset(U);
            }
            return (yield M.initializeRelay()).makeEthereumJSONRPCRequest(
              S,
              M.jsonRpcUrl
            );
          })();
        }
        _handleAsynchronousFilterMethods(S) {
          const { method: M } = S,
            N = S.params || [];
          switch (M) {
            case f.JSONRPCMethod.eth_newFilter:
              return this._eth_newFilter(N);
            case f.JSONRPCMethod.eth_newBlockFilter:
              return this._eth_newBlockFilter();
            case f.JSONRPCMethod.eth_newPendingTransactionFilter:
              return this._eth_newPendingTransactionFilter();
            case f.JSONRPCMethod.eth_getFilterChanges:
              return this._eth_getFilterChanges(N);
            case f.JSONRPCMethod.eth_getFilterLogs:
              return this._eth_getFilterLogs(N);
          }
        }
        _handleSubscriptionMethods(S) {
          switch (S.method) {
            case f.JSONRPCMethod.eth_subscribe:
            case f.JSONRPCMethod.eth_unsubscribe:
              return this._subscriptionManager.handleRequest(S);
          }
        }
        _isKnownAddress(S) {
          try {
            const M = (0, p.ensureAddressString)(S);
            return this._addresses
              .map((U) => (0, p.ensureAddressString)(U))
              .includes(M);
          } catch {}
          return !1;
        }
        _ensureKnownAddress(S) {
          var M;
          if (!this._isKnownAddress(S))
            throw (
              (null === (M = this.diagnostic) ||
                void 0 === M ||
                M.log(o.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED),
              new Error("Unknown Ethereum address"))
            );
        }
        _prepareTransactionParams(S) {
          const M = S.from
            ? (0, p.ensureAddressString)(S.from)
            : this.selectedAddress;
          if (!M) throw new Error("Ethereum address is unavailable");
          return (
            this._ensureKnownAddress(M),
            {
              fromAddress: M,
              toAddress: S.to ? (0, p.ensureAddressString)(S.to) : null,
              weiValue:
                null != S.value ? (0, p.ensureBN)(S.value) : new d.default(0),
              data: S.data ? (0, p.ensureBuffer)(S.data) : Buffer.alloc(0),
              nonce: null != S.nonce ? (0, p.ensureIntNumber)(S.nonce) : null,
              gasPriceInWei:
                null != S.gasPrice ? (0, p.ensureBN)(S.gasPrice) : null,
              maxFeePerGas:
                null != S.maxFeePerGas ? (0, p.ensureBN)(S.maxFeePerGas) : null,
              maxPriorityFeePerGas:
                null != S.maxPriorityFeePerGas
                  ? (0, p.ensureBN)(S.maxPriorityFeePerGas)
                  : null,
              gasLimit: null != S.gas ? (0, p.ensureBN)(S.gas) : null,
              chainId: this.getChainId(),
            }
          );
        }
        _isAuthorized() {
          return this._addresses.length > 0;
        }
        _requireAuthorization() {
          if (!this._isAuthorized())
            throw i.standardErrors.provider.unauthorized({});
        }
        _throwUnsupportedMethodError() {
          throw i.standardErrors.provider.unsupportedMethod({});
        }
        _signEthereumMessage(S, M, N, U) {
          var O = this;
          return e(function* () {
            O._ensureKnownAddress(M);
            try {
              return {
                jsonrpc: "2.0",
                id: 0,
                result: (yield (yield O.initializeRelay()).signEthereumMessage(
                  S,
                  M,
                  N,
                  U
                ).promise).result,
              };
            } catch (D) {
              throw "string" == typeof D.message &&
                D.message.match(/(denied|rejected)/i)
                ? i.standardErrors.provider.userRejectedRequest(
                    "User denied message signature"
                  )
                : D;
            }
          })();
        }
        _ethereumAddressFromSignedMessage(S, M, N) {
          var U = this;
          return e(function* () {
            return {
              jsonrpc: "2.0",
              id: 0,
              result:
                (yield (yield U.initializeRelay()).ethereumAddressFromSignedMessage(
                  S,
                  M,
                  N
                ).promise).result,
            };
          })();
        }
        _eth_accounts() {
          return [...this._addresses];
        }
        _eth_coinbase() {
          return this.selectedAddress || null;
        }
        _net_version() {
          return this.getChainId().toString(10);
        }
        _eth_chainId() {
          return (0, p.hexStringFromIntNumber)(this.getChainId());
        }
        getChainId() {
          const S = this._storage.getItem(E);
          if (!S) return (0, p.ensureIntNumber)(this._chainIdFromOpts);
          const M = parseInt(S, 10);
          return (0, p.ensureIntNumber)(M);
        }
        _eth_requestAccounts() {
          var S = this;
          return e(function* () {
            var M;
            if (
              (null === (M = S.diagnostic) ||
                void 0 === M ||
                M.log(o.EVENTS.ETH_ACCOUNTS_STATE, {
                  method: "provider::_eth_requestAccounts",
                  addresses_length: S._addresses.length,
                  sessionIdHash: S._relay
                    ? s.Session.hash(S._relay.session.id)
                    : void 0,
                }),
              S._isAuthorized())
            )
              return Promise.resolve({
                jsonrpc: "2.0",
                id: 0,
                result: S._addresses,
              });
            let N;
            try {
              N = yield (yield S.initializeRelay()).requestEthereumAccounts()
                .promise;
            } catch (U) {
              throw "string" == typeof U.message &&
                U.message.match(/(denied|rejected)/i)
                ? i.standardErrors.provider.userRejectedRequest(
                    "User denied account authorization"
                  )
                : U;
            }
            if (!N.result) throw new Error("accounts received is empty");
            return (
              S._setAddresses(N.result),
              S.isCoinbaseBrowser ||
                (yield S.switchEthereumChain(S.getChainId())),
              { jsonrpc: "2.0", id: 0, result: S._addresses }
            );
          })();
        }
        _eth_sign(S) {
          this._requireAuthorization();
          const M = (0, p.ensureAddressString)(S[0]),
            N = (0, p.ensureBuffer)(S[1]);
          return this._signEthereumMessage(N, M, !1);
        }
        _eth_ecRecover(S) {
          const M = (0, p.ensureBuffer)(S[0]),
            N = (0, p.ensureBuffer)(S[1]);
          return this._ethereumAddressFromSignedMessage(M, N, !1);
        }
        _personal_sign(S) {
          this._requireAuthorization();
          const M = (0, p.ensureBuffer)(S[0]),
            N = (0, p.ensureAddressString)(S[1]);
          return this._signEthereumMessage(M, N, !0);
        }
        _personal_ecRecover(S) {
          const M = (0, p.ensureBuffer)(S[0]),
            N = (0, p.ensureBuffer)(S[1]);
          return this._ethereumAddressFromSignedMessage(M, N, !0);
        }
        _eth_signTransaction(S) {
          var M = this;
          return e(function* () {
            M._requireAuthorization();
            const N = M._prepareTransactionParams(S[0] || {});
            try {
              return {
                jsonrpc: "2.0",
                id: 0,
                result:
                  (yield (yield M.initializeRelay()).signEthereumTransaction(N)
                    .promise).result,
              };
            } catch (U) {
              throw "string" == typeof U.message &&
                U.message.match(/(denied|rejected)/i)
                ? i.standardErrors.provider.userRejectedRequest(
                    "User denied transaction signature"
                  )
                : U;
            }
          })();
        }
        _eth_sendRawTransaction(S) {
          var M = this;
          return e(function* () {
            const N = (0, p.ensureBuffer)(S[0]);
            return {
              jsonrpc: "2.0",
              id: 0,
              result:
                (yield (yield M.initializeRelay()).submitEthereumTransaction(
                  N,
                  M.getChainId()
                ).promise).result,
            };
          })();
        }
        _eth_sendTransaction(S) {
          var M = this;
          return e(function* () {
            M._requireAuthorization();
            const N = M._prepareTransactionParams(S[0] || {});
            try {
              return {
                jsonrpc: "2.0",
                id: 0,
                result:
                  (yield (yield M.initializeRelay()).signAndSubmitEthereumTransaction(
                    N
                  ).promise).result,
              };
            } catch (U) {
              throw "string" == typeof U.message &&
                U.message.match(/(denied|rejected)/i)
                ? i.standardErrors.provider.userRejectedRequest(
                    "User denied transaction signature"
                  )
                : U;
            }
          })();
        }
        _eth_signTypedData_v1(S) {
          var M = this;
          return e(function* () {
            M._requireAuthorization();
            const N = (0, p.ensureParsedJSONObject)(S[0]),
              U = (0, p.ensureAddressString)(S[1]);
            M._ensureKnownAddress(U);
            const O = c.default.hashForSignTypedDataLegacy({ data: N }),
              D = JSON.stringify(N, null, 2);
            return M._signEthereumMessage(O, U, !1, D);
          })();
        }
        _eth_signTypedData_v3(S) {
          var M = this;
          return e(function* () {
            M._requireAuthorization();
            const N = (0, p.ensureAddressString)(S[0]),
              U = (0, p.ensureParsedJSONObject)(S[1]);
            M._ensureKnownAddress(N);
            const O = c.default.hashForSignTypedData_v3({ data: U }),
              D = JSON.stringify(U, null, 2);
            return M._signEthereumMessage(O, N, !1, D);
          })();
        }
        _eth_signTypedData_v4(S) {
          var M = this;
          return e(function* () {
            M._requireAuthorization();
            const N = (0, p.ensureAddressString)(S[0]),
              U = (0, p.ensureParsedJSONObject)(S[1]);
            M._ensureKnownAddress(N);
            const O = c.default.hashForSignTypedData_v4({ data: U }),
              D = JSON.stringify(U, null, 2);
            return M._signEthereumMessage(O, N, !1, D);
          })();
        }
        _cbwallet_arbitrary(S) {
          var M = this;
          return e(function* () {
            const N = S[0],
              U = S[1];
            if ("string" != typeof U)
              throw new Error("parameter must be a string");
            if ("object" != typeof N || null === N)
              throw new Error("parameter must be an object");
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield M.genericRequest(N, U),
            };
          })();
        }
        _wallet_addEthereumChain(S) {
          var M = this;
          return e(function* () {
            var N, U, O, D;
            const K = S[0];
            if (
              0 ===
              (null === (N = K.rpcUrls) || void 0 === N ? void 0 : N.length)
            )
              return {
                jsonrpc: "2.0",
                id: 0,
                error: { code: 2, message: "please pass in at least 1 rpcUrl" },
              };
            if (!K.chainName || "" === K.chainName.trim())
              throw i.standardErrors.rpc.invalidParams(
                "chainName is a required field"
              );
            if (!K.nativeCurrency)
              throw i.standardErrors.rpc.invalidParams(
                "nativeCurrency is a required field"
              );
            const G = parseInt(K.chainId, 16);
            return (yield M.addEthereumChain(
              G,
              null !== (U = K.rpcUrls) && void 0 !== U ? U : [],
              null !== (O = K.blockExplorerUrls) && void 0 !== O ? O : [],
              K.chainName,
              null !== (D = K.iconUrls) && void 0 !== D ? D : [],
              K.nativeCurrency
            ))
              ? { jsonrpc: "2.0", id: 0, result: null }
              : {
                  jsonrpc: "2.0",
                  id: 0,
                  error: { code: 2, message: "unable to add ethereum chain" },
                };
          })();
        }
        _wallet_switchEthereumChain(S) {
          var M = this;
          return e(function* () {
            const N = S[0];
            return (
              yield M.switchEthereumChain(parseInt(N.chainId, 16)),
              { jsonrpc: "2.0", id: 0, result: null }
            );
          })();
        }
        _wallet_watchAsset(S) {
          var M = this;
          return e(function* () {
            const N = Array.isArray(S) ? S[0] : S;
            if (!N.type)
              throw i.standardErrors.rpc.invalidParams("Type is required");
            if ("ERC20" !== N?.type)
              throw i.standardErrors.rpc.invalidParams(
                `Asset of type '${N.type}' is not supported`
              );
            if (!N?.options)
              throw i.standardErrors.rpc.invalidParams("Options are required");
            if (!N?.options.address)
              throw i.standardErrors.rpc.invalidParams("Address is required");
            const U = M.getChainId(),
              { address: O, symbol: D, image: K, decimals: G } = N.options;
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield M.watchAsset(N.type, O, D, G, K, U),
            };
          })();
        }
        _eth_uninstallFilter(S) {
          const M = (0, p.ensureHexString)(S[0]);
          return this._filterPolyfill.uninstallFilter(M);
        }
        _eth_newFilter(S) {
          var M = this;
          return e(function* () {
            const N = S[0];
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield M._filterPolyfill.newFilter(N),
            };
          })();
        }
        _eth_newBlockFilter() {
          var S = this;
          return e(function* () {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield S._filterPolyfill.newBlockFilter(),
            };
          })();
        }
        _eth_newPendingTransactionFilter() {
          var S = this;
          return e(function* () {
            return {
              jsonrpc: "2.0",
              id: 0,
              result: yield S._filterPolyfill.newPendingTransactionFilter(),
            };
          })();
        }
        _eth_getFilterChanges(S) {
          const M = (0, p.ensureHexString)(S[0]);
          return this._filterPolyfill.getFilterChanges(M);
        }
        _eth_getFilterLogs(S) {
          const M = (0, p.ensureHexString)(S[0]);
          return this._filterPolyfill.getFilterLogs(M);
        }
        initializeRelay() {
          return this._relay
            ? Promise.resolve(this._relay)
            : this._relayProvider().then(
                (S) => (
                  S.setAccountsCallback((M, N) => this._setAddresses(M, N)),
                  S.setChainCallback((M, N) => {
                    this.updateProviderInfo(N, parseInt(M, 10));
                  }),
                  S.setDappDefaultChainCallback(this._chainIdFromOpts),
                  (this._relay = S),
                  S
                )
              );
        }
      };
    },
    94016: (L, r, t) => {
      "use strict";
      var e = t(59344).default;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.filterFromParam = r.FilterPolyfill = void 0);
      const g = t(56703),
        u = t(81260),
        o = { jsonrpc: "2.0", id: 0 };
      function s(n) {
        return {
          fromBlock: b(n.fromBlock),
          toBlock: b(n.toBlock),
          addresses:
            void 0 === n.address
              ? null
              : Array.isArray(n.address)
              ? n.address
              : [n.address],
          topics: n.topics || [],
        };
      }
      function l(n) {
        const f = {
          fromBlock: h(n.fromBlock),
          toBlock: h(n.toBlock),
          topics: n.topics,
        };
        return null !== n.addresses && (f.address = n.addresses), f;
      }
      function b(n) {
        if (void 0 === n || "latest" === n || "pending" === n) return "latest";
        if ("earliest" === n) return (0, g.IntNumber)(0);
        if ((0, u.isHexString)(n)) return (0, u.intNumberFromHexString)(n);
        throw new Error(`Invalid block option: ${String(n)}`);
      }
      function h(n) {
        return "latest" === n ? n : (0, u.hexStringFromIntNumber)(n);
      }
      function p() {
        return Object.assign(Object.assign({}, o), {
          error: { code: -32e3, message: "filter not found" },
        });
      }
      function c() {
        return Object.assign(Object.assign({}, o), { result: [] });
      }
      (r.FilterPolyfill = class i {
        constructor(f) {
          (this.logFilters = new Map()),
            (this.blockFilters = new Set()),
            (this.pendingTransactionFilters = new Set()),
            (this.cursors = new Map()),
            (this.timeouts = new Map()),
            (this.nextFilterId = (0, g.IntNumber)(1)),
            (this.provider = f);
        }
        newFilter(f) {
          var v = this;
          return e(function* () {
            const E = s(f),
              w = v.makeFilterId(),
              C = yield v.setInitialCursorPosition(w, E.fromBlock);
            return (
              console.log(
                `Installing new log filter(${w}):`,
                E,
                "initial cursor position:",
                C
              ),
              v.logFilters.set(w, E),
              v.setFilterTimeout(w),
              (0, u.hexStringFromIntNumber)(w)
            );
          })();
        }
        newBlockFilter() {
          var f = this;
          return e(function* () {
            const v = f.makeFilterId(),
              E = yield f.setInitialCursorPosition(v, "latest");
            return (
              console.log(
                `Installing new block filter (${v}) with initial cursor position:`,
                E
              ),
              f.blockFilters.add(v),
              f.setFilterTimeout(v),
              (0, u.hexStringFromIntNumber)(v)
            );
          })();
        }
        newPendingTransactionFilter() {
          var f = this;
          return e(function* () {
            const v = f.makeFilterId(),
              E = yield f.setInitialCursorPosition(v, "latest");
            return (
              console.log(
                `Installing new block filter (${v}) with initial cursor position:`,
                E
              ),
              f.pendingTransactionFilters.add(v),
              f.setFilterTimeout(v),
              (0, u.hexStringFromIntNumber)(v)
            );
          })();
        }
        uninstallFilter(f) {
          const v = (0, u.intNumberFromHexString)(f);
          return (
            console.log(`Uninstalling filter (${v})`), this.deleteFilter(v), !0
          );
        }
        getFilterChanges(f) {
          const v = (0, u.intNumberFromHexString)(f);
          return (
            this.timeouts.has(v) && this.setFilterTimeout(v),
            this.logFilters.has(v)
              ? this.getLogFilterChanges(v)
              : this.blockFilters.has(v)
              ? this.getBlockFilterChanges(v)
              : this.pendingTransactionFilters.has(v)
              ? this.getPendingTransactionFilterChanges(v)
              : Promise.resolve(p())
          );
        }
        getFilterLogs(f) {
          var v = this;
          return e(function* () {
            const E = (0, u.intNumberFromHexString)(f),
              w = v.logFilters.get(E);
            return w
              ? v.sendAsyncPromise(
                  Object.assign(Object.assign({}, o), {
                    method: "eth_getLogs",
                    params: [l(w)],
                  })
                )
              : p();
          })();
        }
        makeFilterId() {
          return (0, g.IntNumber)(++this.nextFilterId);
        }
        sendAsyncPromise(f) {
          return new Promise((v, E) => {
            this.provider.sendAsync(f, (w, C) =>
              w
                ? E(w)
                : Array.isArray(C) || null == C
                ? E(
                    new Error(
                      `unexpected response received: ${JSON.stringify(C)}`
                    )
                  )
                : void v(C)
            );
          });
        }
        deleteFilter(f) {
          console.log(`Deleting filter (${f})`),
            this.logFilters.delete(f),
            this.blockFilters.delete(f),
            this.pendingTransactionFilters.delete(f),
            this.cursors.delete(f),
            this.timeouts.delete(f);
        }
        getLogFilterChanges(f) {
          var v = this;
          return e(function* () {
            const E = v.logFilters.get(f),
              w = v.cursors.get(f);
            if (!w || !E) return p();
            const C = yield v.getCurrentBlockHeight(),
              A = "latest" === E.toBlock ? C : E.toBlock;
            if (w > C || w > E.toBlock) return c();
            console.log(`Fetching logs from ${w} to ${A} for filter ${f}`);
            const S = yield v.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_getLogs",
                params: [
                  l(
                    Object.assign(Object.assign({}, E), {
                      fromBlock: w,
                      toBlock: A,
                    })
                  ),
                ],
              })
            );
            if (Array.isArray(S.result)) {
              const M = S.result.map((U) =>
                  (0, u.intNumberFromHexString)(U.blockNumber || "0x0")
                ),
                N = Math.max(...M);
              if (N && N > w) {
                const U = (0, g.IntNumber)(N + 1);
                console.log(
                  `Moving cursor position for filter (${f}) from ${w} to ${U}`
                ),
                  v.cursors.set(f, U);
              }
            }
            return S;
          })();
        }
        getBlockFilterChanges(f) {
          var v = this;
          return e(function* () {
            const E = v.cursors.get(f);
            if (!E) return p();
            const w = yield v.getCurrentBlockHeight();
            if (E > w) return c();
            console.log(`Fetching blocks from ${E} to ${w} for filter (${f})`);
            const C = (yield Promise.all(
                (0, u.range)(E, w + 1).map((S) =>
                  v.getBlockHashByNumber((0, g.IntNumber)(S))
                )
              )).filter((S) => !!S),
              A = (0, g.IntNumber)(E + C.length);
            return (
              console.log(
                `Moving cursor position for filter (${f}) from ${E} to ${A}`
              ),
              v.cursors.set(f, A),
              Object.assign(Object.assign({}, o), { result: C })
            );
          })();
        }
        getPendingTransactionFilterChanges(f) {
          return e(function* () {
            return Promise.resolve(c());
          })();
        }
        setInitialCursorPosition(f, v) {
          var E = this;
          return e(function* () {
            const w = yield E.getCurrentBlockHeight(),
              C = "number" == typeof v && v > w ? v : w;
            return E.cursors.set(f, C), C;
          })();
        }
        setFilterTimeout(f) {
          const v = this.timeouts.get(f);
          v && window.clearTimeout(v);
          const E = window.setTimeout(() => {
            console.log(`Filter (${f}) timed out`), this.deleteFilter(f);
          }, 3e5);
          this.timeouts.set(f, E);
        }
        getCurrentBlockHeight() {
          var f = this;
          return e(function* () {
            const { result: v } = yield f.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_blockNumber",
                params: [],
              })
            );
            return (0, u.intNumberFromHexString)((0, u.ensureHexString)(v));
          })();
        }
        getBlockHashByNumber(f) {
          var v = this;
          return e(function* () {
            const E = yield v.sendAsyncPromise(
              Object.assign(Object.assign({}, o), {
                method: "eth_getBlockByNumber",
                params: [(0, u.hexStringFromIntNumber)(f), !1],
              })
            );
            return E.result && "string" == typeof E.result.hash
              ? (0, u.ensureHexString)(E.result.hash)
              : null;
          })();
        }
      }),
        (r.filterFromParam = s);
    },
    61234: (L, r) => {
      "use strict";
      var e;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.JSONRPCMethod = void 0),
        ((e = r.JSONRPCMethod || (r.JSONRPCMethod = {})).eth_accounts =
          "eth_accounts"),
        (e.eth_coinbase = "eth_coinbase"),
        (e.net_version = "net_version"),
        (e.eth_chainId = "eth_chainId"),
        (e.eth_uninstallFilter = "eth_uninstallFilter"),
        (e.eth_requestAccounts = "eth_requestAccounts"),
        (e.eth_sign = "eth_sign"),
        (e.eth_ecRecover = "eth_ecRecover"),
        (e.personal_sign = "personal_sign"),
        (e.personal_ecRecover = "personal_ecRecover"),
        (e.eth_signTransaction = "eth_signTransaction"),
        (e.eth_sendRawTransaction = "eth_sendRawTransaction"),
        (e.eth_sendTransaction = "eth_sendTransaction"),
        (e.eth_signTypedData_v1 = "eth_signTypedData_v1"),
        (e.eth_signTypedData_v2 = "eth_signTypedData_v2"),
        (e.eth_signTypedData_v3 = "eth_signTypedData_v3"),
        (e.eth_signTypedData_v4 = "eth_signTypedData_v4"),
        (e.eth_signTypedData = "eth_signTypedData"),
        (e.cbWallet_arbitrary = "walletlink_arbitrary"),
        (e.wallet_addEthereumChain = "wallet_addEthereumChain"),
        (e.wallet_switchEthereumChain = "wallet_switchEthereumChain"),
        (e.wallet_watchAsset = "wallet_watchAsset"),
        (e.eth_subscribe = "eth_subscribe"),
        (e.eth_unsubscribe = "eth_unsubscribe"),
        (e.eth_newFilter = "eth_newFilter"),
        (e.eth_newBlockFilter = "eth_newBlockFilter"),
        (e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter"),
        (e.eth_getFilterChanges = "eth_getFilterChanges"),
        (e.eth_getFilterLogs = "eth_getFilterLogs");
    },
    82506: (L, r, t) => {
      "use strict";
      var e = t(59344).default;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SubscriptionManager = void 0);
      const g = t(21496),
        u = t(34035),
        d = () => {};
      r.SubscriptionManager = class o {
        constructor(s) {
          const l = new g.PollingBlockTracker({
              provider: s,
              pollingInterval: 15e3,
              setSkipCacheFlag: !0,
            }),
            { events: b, middleware: h } = u({ blockTracker: l, provider: s });
          (this.events = b), (this.subscriptionMiddleware = h);
        }
        handleRequest(s) {
          var l = this;
          return e(function* () {
            const b = {};
            return yield l.subscriptionMiddleware(s, b, d, d), b;
          })();
        }
        destroy() {
          this.subscriptionMiddleware.destroy();
        }
      };
    },
    43723: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletSDKUI = void 0);
      const e = t(23824),
        g = t(99045),
        u = t(8070);
      r.WalletSDKUI = class d {
        constructor(i) {
          (this.standalone = null),
            (this.attached = !1),
            (this.appSrc = null),
            (this.snackbar = new g.Snackbar({ darkMode: i.darkMode })),
            (this.linkFlow = new e.LinkFlow({
              darkMode: i.darkMode,
              version: i.version,
              sessionId: i.session.id,
              sessionSecret: i.session.secret,
              linkAPIUrl: i.linkAPIUrl,
              connected$: i.connected$,
              chainId$: i.chainId$,
              isParentConnection: !1,
            }));
        }
        attach() {
          if (this.attached)
            throw new Error("Coinbase Wallet SDK UI is already attached");
          const i = document.documentElement,
            s = document.createElement("div");
          (s.className = "-cbwsdk-css-reset"),
            i.appendChild(s),
            this.linkFlow.attach(s),
            this.snackbar.attach(s),
            (this.attached = !0),
            (0, u.injectCssReset)();
        }
        setConnectDisabled(i) {
          this.linkFlow.setConnectDisabled(i);
        }
        addEthereumChain(i) {}
        watchAsset(i) {}
        switchEthereumChain(i) {}
        requestEthereumAccounts(i) {
          this.linkFlow.open({ onCancel: i.onCancel });
        }
        hideRequestEthereumAccounts() {
          this.linkFlow.close();
        }
        signEthereumMessage(i) {}
        signEthereumTransaction(i) {}
        submitEthereumTransaction(i) {}
        ethereumAddressFromSignedMessage(i) {}
        showConnecting(i) {
          let s;
          return (
            (s = i.isUnlinkedErrorState
              ? {
                  autoExpand: !0,
                  message: "Connection lost",
                  appSrc: this.appSrc,
                  menuItems: [
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: i.onResetConnection,
                    },
                  ],
                }
              : {
                  message: "Confirm on phone",
                  appSrc: this.appSrc,
                  menuItems: [
                    {
                      isRed: !0,
                      info: "Cancel transaction",
                      svgWidth: "11",
                      svgHeight: "11",
                      path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                      defaultFillRule: "inherit",
                      defaultClipRule: "inherit",
                      onClick: i.onCancel,
                    },
                    {
                      isRed: !1,
                      info: "Reset connection",
                      svgWidth: "10",
                      svgHeight: "11",
                      path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                      defaultFillRule: "evenodd",
                      defaultClipRule: "evenodd",
                      onClick: i.onResetConnection,
                    },
                  ],
                }),
            this.snackbar.presentItem(s)
          );
        }
        setAppSrc(i) {
          this.appSrc = i;
        }
        reloadUI() {
          document.location.reload();
        }
        inlineAccountsResponse() {
          return !1;
        }
        inlineAddEthereumChain(i) {
          return !1;
        }
        inlineWatchAsset() {
          return !1;
        }
        inlineSwitchEthereumChain() {
          return !1;
        }
        setStandalone(i) {
          this.standalone = i;
        }
        isStandalone() {
          var i;
          return null !== (i = this.standalone) && void 0 !== i && i;
        }
      };
    },
    47600: (L, r) => {
      "use strict";
      var e;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.RelayMessageType = void 0),
        ((e =
          r.RelayMessageType || (r.RelayMessageType = {})).SESSION_ID_REQUEST =
          "SESSION_ID_REQUEST"),
        (e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE"),
        (e.LINKED = "LINKED"),
        (e.UNLINKED = "UNLINKED"),
        (e.WEB3_REQUEST = "WEB3_REQUEST"),
        (e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED"),
        (e.WEB3_RESPONSE = "WEB3_RESPONSE");
    },
    66293: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Session = void 0);
      const e = t(97965),
        g = t(81260),
        u = "session:id",
        d = "session:secret",
        o = "session:linked";
      class i {
        constructor(l, b, h, p) {
          (this._storage = l),
            (this._id = b || (0, g.randomBytesHex)(16)),
            (this._secret = h || (0, g.randomBytesHex)(32)),
            (this._key = new e.sha256()
              .update(`${this._id}, ${this._secret} WalletLink`)
              .digest("hex")),
            (this._linked = !!p);
        }
        static load(l) {
          const b = l.getItem(u),
            h = l.getItem(o),
            p = l.getItem(d);
          return b && p ? new i(l, b, p, "1" === h) : null;
        }
        static hash(l) {
          return new e.sha256().update(l).digest("hex");
        }
        get id() {
          return this._id;
        }
        get secret() {
          return this._secret;
        }
        get key() {
          return this._key;
        }
        get linked() {
          return this._linked;
        }
        set linked(l) {
          (this._linked = l), this.persistLinked();
        }
        save() {
          return (
            this._storage.setItem(u, this._id),
            this._storage.setItem(d, this._secret),
            this.persistLinked(),
            this
          );
        }
        persistLinked() {
          this._storage.setItem(o, this._linked ? "1" : "0");
        }
      }
      r.Session = i;
    },
    68509: function (L, r, t) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (U, O, D, K) {
                void 0 === K && (K = D),
                  Object.defineProperty(U, K, {
                    enumerable: !0,
                    get: function () {
                      return O[D];
                    },
                  });
              }
            : function (U, O, D, K) {
                void 0 === K && (K = D), (U[K] = O[D]);
              }),
        g =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (U, O) {
                Object.defineProperty(U, "default", {
                  enumerable: !0,
                  value: O,
                });
              }
            : function (U, O) {
                U.default = O;
              }),
        u =
          (this && this.__decorate) ||
          function (U, O, D, K) {
            var ue,
              G = arguments.length,
              re =
                G < 3
                  ? O
                  : null === K
                  ? (K = Object.getOwnPropertyDescriptor(O, D))
                  : K;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              re = Reflect.decorate(U, O, D, K);
            else
              for (var P = U.length - 1; P >= 0; P--)
                (ue = U[P]) &&
                  (re =
                    (G < 3 ? ue(re) : G > 3 ? ue(O, D, re) : ue(O, D)) || re);
            return G > 3 && re && Object.defineProperty(O, D, re), re;
          },
        d =
          (this && this.__importStar) ||
          function (U) {
            if (U && U.__esModule) return U;
            var O = {};
            if (null != U)
              for (var D in U)
                "default" !== D &&
                  Object.prototype.hasOwnProperty.call(U, D) &&
                  e(O, U, D);
            return g(O, U), O;
          },
        o =
          (this && this.__importDefault) ||
          function (U) {
            return U && U.__esModule ? U : { default: U };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletSDKRelay = void 0);
      const i = o(t(81979)),
        s = t(45397),
        l = t(58551),
        b = t(32051),
        h = t(86745),
        p = t(23139),
        c = t(56703),
        n = t(81260),
        f = d(t(28148)),
        v = t(66293),
        E = t(9740),
        w = t(82844),
        C = t(53724),
        A = t(7112),
        S = t(75800),
        M = t(79197);
      class N extends E.WalletSDKRelayAbstract {
        constructor(O) {
          var D;
          super(),
            (this.accountsCallback = null),
            (this.chainCallback = null),
            (this.dappDefaultChainSubject = new s.BehaviorSubject(1)),
            (this.dappDefaultChain = 1),
            (this.appName = ""),
            (this.appLogoUrl = null),
            (this.subscriptions = new s.Subscription()),
            (this.linkAPIUrl = O.linkAPIUrl),
            (this.storage = O.storage),
            (this.options = O);
          const { session: K, ui: G, connection: re } = this.subscribe();
          if (
            ((this._session = K),
            (this.connection = re),
            (this.relayEventManager = O.relayEventManager),
            O.diagnosticLogger && O.eventListener)
          )
            throw new Error(
              "Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger"
            );
          (this.diagnostic = O.eventListener
            ? { log: O.eventListener.onEvent }
            : O.diagnosticLogger),
            (this._reloadOnDisconnect =
              null === (D = O.reloadOnDisconnect) || void 0 === D || D),
            (this.ui = G);
        }
        subscribe() {
          this.subscriptions.add(
            this.dappDefaultChainSubject.subscribe((G) => {
              this.dappDefaultChain !== G && (this.dappDefaultChain = G);
            })
          );
          const O =
              v.Session.load(this.storage) ||
              new v.Session(this.storage).save(),
            D = new h.WalletSDKConnection(
              O.id,
              O.key,
              this.linkAPIUrl,
              this.diagnostic
            );
          this.subscriptions.add(
            D.sessionConfig$.subscribe({
              next: (G) => {
                this.onSessionConfigChanged(G);
              },
              error: () => {
                var G;
                null === (G = this.diagnostic) ||
                  void 0 === G ||
                  G.log(b.EVENTS.GENERAL_ERROR, {
                    message: "error while invoking session config callback",
                  });
              },
            })
          ),
            this.subscriptions.add(
              D.incomingEvent$
                .pipe((0, l.filter)((G) => "Web3Response" === G.event))
                .subscribe({ next: this.handleIncomingEvent })
            ),
            this.subscriptions.add(
              D.linked$
                .pipe(
                  (0, l.skip)(1),
                  (0, l.tap)((G) => {
                    var re;
                    this.isLinked = G;
                    const ue = this.storage.getItem(
                      E.LOCAL_STORAGE_ADDRESSES_KEY
                    );
                    if (
                      (G && (this.session.linked = G),
                      (this.isUnlinkedErrorState = !1),
                      ue)
                    ) {
                      const P = ue.split(" "),
                        m =
                          "true" ===
                          this.storage.getItem("IsStandaloneSigning");
                      if ("" !== P[0] && !G && this.session.linked && !m) {
                        this.isUnlinkedErrorState = !0;
                        const _ = this.getSessionIdHash();
                        null === (re = this.diagnostic) ||
                          void 0 === re ||
                          re.log(b.EVENTS.UNLINKED_ERROR_STATE, {
                            sessionIdHash: _,
                          });
                      }
                    }
                  })
                )
                .subscribe()
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) => !!G.metadata && "1" === G.metadata.__destroyed
                  )
                )
                .subscribe(() => {
                  var G;
                  return (
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.METADATA_DESTROYED, {
                        alreadyDestroyed: D.isDestroyed,
                        sessionIdHash: this.getSessionIdHash(),
                      }),
                    this.resetAndReload()
                  );
                })
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) => G.metadata && void 0 !== G.metadata.WalletUsername
                  )
                )
                .pipe(
                  (0, l.mergeMap)((G) =>
                    f.decrypt(G.metadata.WalletUsername, O.secret)
                  )
                )
                .subscribe({
                  next: (G) => {
                    this.storage.setItem(E.WALLET_USER_NAME_KEY, G);
                  },
                  error: () => {
                    var G;
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "username",
                      });
                  },
                })
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) => G.metadata && void 0 !== G.metadata.AppVersion
                  )
                )
                .pipe(
                  (0, l.mergeMap)((G) =>
                    f.decrypt(G.metadata.AppVersion, O.secret)
                  )
                )
                .subscribe({
                  next: (G) => {
                    this.storage.setItem(E.APP_VERSION_KEY, G);
                  },
                  error: () => {
                    var G;
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "appversion",
                      });
                  },
                })
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) =>
                      G.metadata &&
                      void 0 !== G.metadata.ChainId &&
                      void 0 !== G.metadata.JsonRpcUrl
                  )
                )
                .pipe(
                  (0, l.mergeMap)((G) =>
                    (0, s.zip)(
                      f.decrypt(G.metadata.ChainId, O.secret),
                      f.decrypt(G.metadata.JsonRpcUrl, O.secret)
                    )
                  )
                )
                .pipe((0, l.distinctUntilChanged)())
                .subscribe({
                  next: ([G, re]) => {
                    this.chainCallback && this.chainCallback(G, re);
                  },
                  error: () => {
                    var G;
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "chainId|jsonRpcUrl",
                      });
                  },
                })
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) => G.metadata && void 0 !== G.metadata.EthereumAddress
                  )
                )
                .pipe(
                  (0, l.mergeMap)((G) =>
                    f.decrypt(G.metadata.EthereumAddress, O.secret)
                  )
                )
                .subscribe({
                  next: (G) => {
                    this.accountsCallback && this.accountsCallback([G]),
                      N.accountRequestCallbackIds.size > 0 &&
                        (Array.from(
                          N.accountRequestCallbackIds.values()
                        ).forEach((re) => {
                          const ue = (0, M.Web3ResponseMessage)({
                            id: re,
                            response: (0, S.RequestEthereumAccountsResponse)([
                              G,
                            ]),
                          });
                          this.invokeCallback(
                            Object.assign(Object.assign({}, ue), { id: re })
                          );
                        }),
                        N.accountRequestCallbackIds.clear());
                  },
                  error: () => {
                    var G;
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "selectedAddress",
                      });
                  },
                })
            ),
            this.subscriptions.add(
              D.sessionConfig$
                .pipe(
                  (0, l.filter)(
                    (G) => G.metadata && void 0 !== G.metadata.AppSrc
                  )
                )
                .pipe(
                  (0, l.mergeMap)((G) => f.decrypt(G.metadata.AppSrc, O.secret))
                )
                .subscribe({
                  next: (G) => {
                    this.ui.setAppSrc(G);
                  },
                  error: () => {
                    var G;
                    null === (G = this.diagnostic) ||
                      void 0 === G ||
                      G.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "appSrc",
                      });
                  },
                })
            );
          const K = this.options.uiConstructor({
            linkAPIUrl: this.options.linkAPIUrl,
            version: this.options.version,
            darkMode: this.options.darkMode,
            session: O,
            connected$: D.connected$,
            chainId$: this.dappDefaultChainSubject,
          });
          return D.connect(), { session: O, ui: K, connection: D };
        }
        attachUI() {
          this.ui.attach();
        }
        resetAndReload() {
          this.connection
            .setSessionMetadata("__destroyed", "1")
            .pipe(
              (0, l.timeout)(1e3),
              (0, l.catchError)((O) => (0, s.of)(null))
            )
            .subscribe(
              (O) => {
                var D, K, G;
                const re = this.ui.isStandalone();
                try {
                  this.subscriptions.unsubscribe();
                } catch {
                  null === (D = this.diagnostic) ||
                    void 0 === D ||
                    D.log(b.EVENTS.GENERAL_ERROR, {
                      message: "Had error unsubscribing",
                    });
                }
                null === (K = this.diagnostic) ||
                  void 0 === K ||
                  K.log(b.EVENTS.SESSION_STATE_CHANGE, {
                    method: "relay::resetAndReload",
                    sessionMetadataChange: "__destroyed, 1",
                    sessionIdHash: this.getSessionIdHash(),
                  }),
                  this.connection.destroy();
                const ue = v.Session.load(this.storage);
                if (
                  (ue?.id === this._session.id
                    ? this.storage.clear()
                    : ue &&
                      (null === (G = this.diagnostic) ||
                        void 0 === G ||
                        G.log(b.EVENTS.SKIPPED_CLEARING_SESSION, {
                          sessionIdHash: this.getSessionIdHash(),
                          storedSessionIdHash: v.Session.hash(ue.id),
                        })),
                  this._reloadOnDisconnect)
                )
                  return void this.ui.reloadUI();
                this.accountsCallback && this.accountsCallback([], !0),
                  (this.subscriptions = new s.Subscription());
                const { session: P, ui: m, connection: _ } = this.subscribe();
                (this._session = P),
                  (this.connection = _),
                  (this.ui = m),
                  re && this.ui.setStandalone && this.ui.setStandalone(!0),
                  this.attachUI();
              },
              (O) => {
                var D;
                null === (D = this.diagnostic) ||
                  void 0 === D ||
                  D.log(b.EVENTS.FAILURE, {
                    method: "relay::resetAndReload",
                    message: `failed to reset and reload with ${O}`,
                    sessionIdHash: this.getSessionIdHash(),
                  });
              }
            );
        }
        setAppInfo(O, D) {
          (this.appName = O), (this.appLogoUrl = D);
        }
        getStorageItem(O) {
          return this.storage.getItem(O);
        }
        get session() {
          return this._session;
        }
        setStorageItem(O, D) {
          this.storage.setItem(O, D);
        }
        signEthereumMessage(O, D, K, G) {
          return this.sendRequest({
            method: w.Web3Method.signEthereumMessage,
            params: {
              message: (0, n.hexStringFromBuffer)(O, !0),
              address: D,
              addPrefix: K,
              typedDataJson: G || null,
            },
          });
        }
        ethereumAddressFromSignedMessage(O, D, K) {
          return this.sendRequest({
            method: w.Web3Method.ethereumAddressFromSignedMessage,
            params: {
              message: (0, n.hexStringFromBuffer)(O, !0),
              signature: (0, n.hexStringFromBuffer)(D, !0),
              addPrefix: K,
            },
          });
        }
        signEthereumTransaction(O) {
          return this.sendRequest({
            method: w.Web3Method.signEthereumTransaction,
            params: {
              fromAddress: O.fromAddress,
              toAddress: O.toAddress,
              weiValue: (0, n.bigIntStringFromBN)(O.weiValue),
              data: (0, n.hexStringFromBuffer)(O.data, !0),
              nonce: O.nonce,
              gasPriceInWei: O.gasPriceInWei
                ? (0, n.bigIntStringFromBN)(O.gasPriceInWei)
                : null,
              maxFeePerGas: O.gasPriceInWei
                ? (0, n.bigIntStringFromBN)(O.gasPriceInWei)
                : null,
              maxPriorityFeePerGas: O.gasPriceInWei
                ? (0, n.bigIntStringFromBN)(O.gasPriceInWei)
                : null,
              gasLimit: O.gasLimit
                ? (0, n.bigIntStringFromBN)(O.gasLimit)
                : null,
              chainId: O.chainId,
              shouldSubmit: !1,
            },
          });
        }
        signAndSubmitEthereumTransaction(O) {
          return this.sendRequest({
            method: w.Web3Method.signEthereumTransaction,
            params: {
              fromAddress: O.fromAddress,
              toAddress: O.toAddress,
              weiValue: (0, n.bigIntStringFromBN)(O.weiValue),
              data: (0, n.hexStringFromBuffer)(O.data, !0),
              nonce: O.nonce,
              gasPriceInWei: O.gasPriceInWei
                ? (0, n.bigIntStringFromBN)(O.gasPriceInWei)
                : null,
              maxFeePerGas: O.maxFeePerGas
                ? (0, n.bigIntStringFromBN)(O.maxFeePerGas)
                : null,
              maxPriorityFeePerGas: O.maxPriorityFeePerGas
                ? (0, n.bigIntStringFromBN)(O.maxPriorityFeePerGas)
                : null,
              gasLimit: O.gasLimit
                ? (0, n.bigIntStringFromBN)(O.gasLimit)
                : null,
              chainId: O.chainId,
              shouldSubmit: !0,
            },
          });
        }
        submitEthereumTransaction(O, D) {
          return this.sendRequest({
            method: w.Web3Method.submitEthereumTransaction,
            params: {
              signedTransaction: (0, n.hexStringFromBuffer)(O, !0),
              chainId: D,
            },
          });
        }
        scanQRCode(O) {
          return this.sendRequest({
            method: w.Web3Method.scanQRCode,
            params: { regExp: O },
          });
        }
        getQRCodeUrl() {
          return (0, n.createQrUrl)(
            this._session.id,
            this._session.secret,
            this.linkAPIUrl,
            !1,
            this.options.version,
            this.dappDefaultChain
          );
        }
        genericRequest(O, D) {
          return this.sendRequest({
            method: w.Web3Method.generic,
            params: { action: D, data: O },
          });
        }
        sendGenericMessage(O) {
          return this.sendRequest(O);
        }
        sendRequest(O) {
          let D = null;
          const K = (0, n.randomBytesHex)(8),
            G = (ue) => {
              this.publishWeb3RequestCanceledEvent(K),
                this.handleErrorResponse(K, O.method, ue),
                D?.();
            };
          return {
            promise: new Promise((ue, P) => {
              this.ui.isStandalone() ||
                (D = this.ui.showConnecting({
                  isUnlinkedErrorState: this.isUnlinkedErrorState,
                  onCancel: G,
                  onResetConnection: this.resetAndReload,
                })),
                this.relayEventManager.callbacks.set(K, (m) => {
                  if ((D?.(), m.errorMessage))
                    return P(new Error(m.errorMessage));
                  ue(m);
                }),
                this.ui.isStandalone()
                  ? this.sendRequestStandalone(K, O)
                  : this.publishWeb3RequestEvent(K, O);
            }),
            cancel: G,
          };
        }
        setConnectDisabled(O) {
          this.ui.setConnectDisabled(O);
        }
        setAccountsCallback(O) {
          this.accountsCallback = O;
        }
        setChainCallback(O) {
          this.chainCallback = O;
        }
        setDappDefaultChainCallback(O) {
          this.dappDefaultChainSubject.next(O);
        }
        publishWeb3RequestEvent(O, D) {
          var K;
          const G = (0, A.Web3RequestMessage)({ id: O, request: D }),
            re = v.Session.load(this.storage);
          null === (K = this.diagnostic) ||
            void 0 === K ||
            K.log(b.EVENTS.WEB3_REQUEST, {
              eventId: G.id,
              method: `relay::${G.request.method}`,
              sessionIdHash: this.getSessionIdHash(),
              storedSessionIdHash: re ? v.Session.hash(re.id) : "",
              isSessionMismatched: (re?.id !== this._session.id).toString(),
            }),
            this.subscriptions.add(
              this.publishEvent("Web3Request", G, !0).subscribe({
                next: (ue) => {
                  var P;
                  null === (P = this.diagnostic) ||
                    void 0 === P ||
                    P.log(b.EVENTS.WEB3_REQUEST_PUBLISHED, {
                      eventId: G.id,
                      method: `relay::${G.request.method}`,
                      sessionIdHash: this.getSessionIdHash(),
                      storedSessionIdHash: re ? v.Session.hash(re.id) : "",
                      isSessionMismatched: (
                        re?.id !== this._session.id
                      ).toString(),
                    });
                },
                error: (ue) => {
                  this.handleWeb3ResponseMessage(
                    (0, M.Web3ResponseMessage)({
                      id: G.id,
                      response: {
                        method: G.request.method,
                        errorMessage: ue.message,
                      },
                    })
                  );
                },
              })
            );
        }
        publishWeb3RequestCanceledEvent(O) {
          const D = (0, C.Web3RequestCanceledMessage)(O);
          this.subscriptions.add(
            this.publishEvent("Web3RequestCanceled", D, !1).subscribe()
          );
        }
        publishEvent(O, D, K) {
          const G = this.session.secret;
          return new s.Observable((re) => {
            f.encrypt(
              JSON.stringify(
                Object.assign(Object.assign({}, D), { origin: location.origin })
              ),
              G
            ).then((ue) => {
              re.next(ue), re.complete();
            });
          }).pipe(
            (0, l.mergeMap)((re) => this.connection.publishEvent(O, re, K))
          );
        }
        handleIncomingEvent(O) {
          try {
            this.subscriptions.add(
              (0, s.from)(f.decrypt(O.data, this.session.secret))
                .pipe((0, l.map)((D) => JSON.parse(D)))
                .subscribe({
                  next: (D) => {
                    const K = (0, M.isWeb3ResponseMessage)(D) ? D : null;
                    K && this.handleWeb3ResponseMessage(K);
                  },
                  error: () => {
                    var D;
                    null === (D = this.diagnostic) ||
                      void 0 === D ||
                      D.log(b.EVENTS.GENERAL_ERROR, {
                        message: "Had error decrypting",
                        value: "incomingEvent",
                      });
                  },
                })
            );
          } catch {
            return;
          }
        }
        handleWeb3ResponseMessage(O) {
          var D;
          const { response: K } = O;
          if (
            (null === (D = this.diagnostic) ||
              void 0 === D ||
              D.log(b.EVENTS.WEB3_RESPONSE, {
                eventId: O.id,
                method: `relay::${K.method}`,
                sessionIdHash: this.getSessionIdHash(),
              }),
            (0, S.isRequestEthereumAccountsResponse)(K))
          )
            return (
              N.accountRequestCallbackIds.forEach((G) =>
                this.invokeCallback(
                  Object.assign(Object.assign({}, O), { id: G })
                )
              ),
              void N.accountRequestCallbackIds.clear()
            );
          this.invokeCallback(O);
        }
        handleErrorResponse(O, D, K, G) {
          var re;
          const ue =
            null !== (re = K?.message) && void 0 !== re
              ? re
              : (0, p.standardErrorMessage)(G);
          this.handleWeb3ResponseMessage(
            (0, M.Web3ResponseMessage)({
              id: O,
              response: { method: D, errorMessage: ue, errorCode: G },
            })
          );
        }
        invokeCallback(O) {
          const D = this.relayEventManager.callbacks.get(O.id);
          D && (D(O.response), this.relayEventManager.callbacks.delete(O.id));
        }
        requestEthereumAccounts() {
          const O = {
              method: w.Web3Method.requestEthereumAccounts,
              params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null,
              },
            },
            K = (0, n.randomBytesHex)(8),
            G = (ue) => {
              this.publishWeb3RequestCanceledEvent(K),
                this.handleErrorResponse(K, O.method, ue);
            };
          return {
            promise: new Promise((ue, P) => {
              var m;
              this.relayEventManager.callbacks.set(K, (I) => {
                if ((this.ui.hideRequestEthereumAccounts(), I.errorMessage))
                  return P(new Error(I.errorMessage));
                ue(I);
              });
              const _ =
                (null === (m = window?.navigator) || void 0 === m
                  ? void 0
                  : m.userAgent) || null;
              if (
                _ &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                  _
                )
              ) {
                let I;
                try {
                  I =
                    (0, n.isInIFrame)() && window.top
                      ? window.top.location
                      : window.location;
                } catch {
                  I = window.location;
                }
                I.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(
                  I.href
                )}`;
              } else {
                if (this.ui.inlineAccountsResponse())
                  this.ui.requestEthereumAccounts({
                    onCancel: G,
                    onAccounts: (R) => {
                      this.handleWeb3ResponseMessage(
                        (0, M.Web3ResponseMessage)({
                          id: K,
                          response: (0, S.RequestEthereumAccountsResponse)(R),
                        })
                      );
                    },
                  });
                else {
                  const I = p.standardErrors.provider.userRejectedRequest(
                    "User denied account authorization"
                  );
                  this.ui.requestEthereumAccounts({ onCancel: () => G(I) });
                }
                N.accountRequestCallbackIds.add(K),
                  !this.ui.inlineAccountsResponse() &&
                    !this.ui.isStandalone() &&
                    this.publishWeb3RequestEvent(K, O);
              }
            }),
            cancel: G,
          };
        }
        selectProvider(O) {
          const D = {
              method: w.Web3Method.selectProvider,
              params: { providerOptions: O },
            },
            K = (0, n.randomBytesHex)(8);
          return {
            cancel: (ue) => {
              this.publishWeb3RequestCanceledEvent(K),
                this.handleErrorResponse(K, D.method, ue);
            },
            promise: new Promise((ue, P) => {
              this.relayEventManager.callbacks.set(K, (I) => {
                if (I.errorMessage) return P(new Error(I.errorMessage));
                ue(I);
              }),
                this.ui.selectProvider &&
                  this.ui.selectProvider({
                    onApprove: (I) => {
                      this.handleWeb3ResponseMessage(
                        (0, M.Web3ResponseMessage)({
                          id: K,
                          response: (0, S.SelectProviderResponse)(I),
                        })
                      );
                    },
                    onCancel: (I) => {
                      this.handleWeb3ResponseMessage(
                        (0, M.Web3ResponseMessage)({
                          id: K,
                          response: (0, S.SelectProviderResponse)(
                            c.ProviderType.Unselected
                          ),
                        })
                      );
                    },
                    providerOptions: O,
                  });
            }),
          };
        }
        watchAsset(O, D, K, G, re, ue) {
          const P = {
            method: w.Web3Method.watchAsset,
            params: {
              type: O,
              options: { address: D, symbol: K, decimals: G, image: re },
              chainId: ue,
            },
          };
          let m = null;
          const _ = (0, n.randomBytesHex)(8),
            I = (T) => {
              this.publishWeb3RequestCanceledEvent(_),
                this.handleErrorResponse(_, P.method, T),
                m?.();
            };
          return (
            this.ui.inlineWatchAsset() ||
              (m = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: I,
                onResetConnection: this.resetAndReload,
              })),
            {
              cancel: I,
              promise: new Promise((T, F) => {
                this.relayEventManager.callbacks.set(_, (x) => {
                  if ((m?.(), x.errorMessage))
                    return F(new Error(x.errorMessage));
                  T(x);
                }),
                  this.ui.inlineWatchAsset() &&
                    this.ui.watchAsset({
                      onApprove: () => {
                        this.handleWeb3ResponseMessage(
                          (0, M.Web3ResponseMessage)({
                            id: _,
                            response: (0, S.WatchAssetReponse)(!0),
                          })
                        );
                      },
                      onCancel: (x) => {
                        this.handleWeb3ResponseMessage(
                          (0, M.Web3ResponseMessage)({
                            id: _,
                            response: (0, S.WatchAssetReponse)(!1),
                          })
                        );
                      },
                      type: O,
                      address: D,
                      symbol: K,
                      decimals: G,
                      image: re,
                      chainId: ue,
                    }),
                  !this.ui.inlineWatchAsset() &&
                    !this.ui.isStandalone() &&
                    this.publishWeb3RequestEvent(_, P);
              }),
            }
          );
        }
        addEthereumChain(O, D, K, G, re, ue) {
          const P = {
            method: w.Web3Method.addEthereumChain,
            params: {
              chainId: O,
              rpcUrls: D,
              blockExplorerUrls: G,
              chainName: re,
              iconUrls: K,
              nativeCurrency: ue,
            },
          };
          let m = null;
          const _ = (0, n.randomBytesHex)(8),
            I = (T) => {
              this.publishWeb3RequestCanceledEvent(_),
                this.handleErrorResponse(_, P.method, T),
                m?.();
            };
          return (
            this.ui.inlineAddEthereumChain(O) ||
              (m = this.ui.showConnecting({
                isUnlinkedErrorState: this.isUnlinkedErrorState,
                onCancel: I,
                onResetConnection: this.resetAndReload,
              })),
            {
              promise: new Promise((T, F) => {
                this.relayEventManager.callbacks.set(_, (x) => {
                  if ((m?.(), x.errorMessage))
                    return F(new Error(x.errorMessage));
                  T(x);
                }),
                  this.ui.inlineAddEthereumChain(O) &&
                    this.ui.addEthereumChain({
                      onCancel: (x) => {
                        this.handleWeb3ResponseMessage(
                          (0, M.Web3ResponseMessage)({
                            id: _,
                            response: (0, S.AddEthereumChainResponse)({
                              isApproved: !1,
                              rpcUrl: "",
                            }),
                          })
                        );
                      },
                      onApprove: (x) => {
                        this.handleWeb3ResponseMessage(
                          (0, M.Web3ResponseMessage)({
                            id: _,
                            response: (0, S.AddEthereumChainResponse)({
                              isApproved: !0,
                              rpcUrl: x,
                            }),
                          })
                        );
                      },
                      chainId: P.params.chainId,
                      rpcUrls: P.params.rpcUrls,
                      blockExplorerUrls: P.params.blockExplorerUrls,
                      chainName: P.params.chainName,
                      iconUrls: P.params.iconUrls,
                      nativeCurrency: P.params.nativeCurrency,
                    }),
                  !this.ui.inlineAddEthereumChain(O) &&
                    !this.ui.isStandalone() &&
                    this.publishWeb3RequestEvent(_, P);
              }),
              cancel: I,
            }
          );
        }
        switchEthereumChain(O, D) {
          const K = {
              method: w.Web3Method.switchEthereumChain,
              params: Object.assign({ chainId: O }, { address: D }),
            },
            G = (0, n.randomBytesHex)(8);
          return {
            promise: new Promise((P, m) => {
              this.relayEventManager.callbacks.set(G, (R) =>
                (0, S.isErrorResponse)(R) && R.errorCode
                  ? m(
                      p.standardErrors.provider.custom({
                        code: R.errorCode,
                        message:
                          "Unrecognized chain ID. Try adding the chain using addEthereumChain first.",
                      })
                    )
                  : R.errorMessage
                  ? m(new Error(R.errorMessage))
                  : void P(R)
              ),
                this.ui.switchEthereumChain({
                  onCancel: (R) => {
                    var T;
                    if (R) {
                      const F =
                        null !== (T = (0, p.getErrorCode)(R)) && void 0 !== T
                          ? T
                          : p.standardErrorCodes.provider.unsupportedChain;
                      this.handleErrorResponse(
                        G,
                        w.Web3Method.switchEthereumChain,
                        R instanceof Error
                          ? R
                          : p.standardErrors.provider.unsupportedChain(O),
                        F
                      );
                    } else
                      this.handleWeb3ResponseMessage(
                        (0, M.Web3ResponseMessage)({
                          id: G,
                          response: (0, S.SwitchEthereumChainResponse)({
                            isApproved: !1,
                            rpcUrl: "",
                          }),
                        })
                      );
                  },
                  onApprove: (R) => {
                    this.handleWeb3ResponseMessage(
                      (0, M.Web3ResponseMessage)({
                        id: G,
                        response: (0, S.SwitchEthereumChainResponse)({
                          isApproved: !0,
                          rpcUrl: R,
                        }),
                      })
                    );
                  },
                  chainId: K.params.chainId,
                  address: K.params.address,
                }),
                !this.ui.inlineSwitchEthereumChain() &&
                  !this.ui.isStandalone() &&
                  this.publishWeb3RequestEvent(G, K);
            }),
            cancel: (P) => {
              this.publishWeb3RequestCanceledEvent(G),
                this.handleErrorResponse(G, K.method, P);
            },
          };
        }
        inlineAddEthereumChain(O) {
          return this.ui.inlineAddEthereumChain(O);
        }
        getSessionIdHash() {
          return v.Session.hash(this._session.id);
        }
        sendRequestStandalone(O, D) {
          const K = (re) => {
              this.handleErrorResponse(O, D.method, re);
            },
            G = (re) => {
              this.handleWeb3ResponseMessage(
                (0, M.Web3ResponseMessage)({ id: O, response: re })
              );
            };
          switch (D.method) {
            case w.Web3Method.signEthereumMessage:
              this.ui.signEthereumMessage({
                request: D,
                onSuccess: G,
                onCancel: K,
              });
              break;
            case w.Web3Method.signEthereumTransaction:
              this.ui.signEthereumTransaction({
                request: D,
                onSuccess: G,
                onCancel: K,
              });
              break;
            case w.Web3Method.submitEthereumTransaction:
              this.ui.submitEthereumTransaction({
                request: D,
                onSuccess: G,
                onCancel: K,
              });
              break;
            case w.Web3Method.ethereumAddressFromSignedMessage:
              this.ui.ethereumAddressFromSignedMessage({
                request: D,
                onSuccess: G,
              });
              break;
            default:
              K();
          }
        }
        onSessionConfigChanged(O) {}
      }
      (N.accountRequestCallbackIds = new Set()),
        u([i.default], N.prototype, "resetAndReload", null),
        u([i.default], N.prototype, "handleIncomingEvent", null),
        (r.WalletSDKRelay = N);
    },
    9740: (L, r, t) => {
      "use strict";
      var e = t(59344).default;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletSDKRelayAbstract =
          r.APP_VERSION_KEY =
          r.LOCAL_STORAGE_ADDRESSES_KEY =
          r.WALLET_USER_NAME_KEY =
            void 0);
      const g = t(23139);
      (r.WALLET_USER_NAME_KEY = "walletUsername"),
        (r.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses"),
        (r.APP_VERSION_KEY = "AppVersion"),
        (r.WalletSDKRelayAbstract = class u {
          makeEthereumJSONRPCRequest(o, i) {
            return e(function* () {
              if (!i) throw new Error("Error: No jsonRpcUrl provided");
              return window
                .fetch(i, {
                  method: "POST",
                  body: JSON.stringify(o),
                  mode: "cors",
                  headers: { "Content-Type": "application/json" },
                })
                .then((s) => s.json())
                .then((s) => {
                  if (!s) throw g.standardErrors.rpc.parse({});
                  const l = s,
                    { error: b } = l;
                  if (b) throw (0, g.serializeError)(b, o.method);
                  return l;
                });
            })();
          }
        });
    },
    89311: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.WalletSDKRelayEventManager = void 0);
      const e = t(81260);
      r.WalletSDKRelayEventManager = class g {
        constructor() {
          (this._nextRequestId = 0), (this.callbacks = new Map());
        }
        makeRequestId() {
          this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
          const d = this._nextRequestId,
            o = (0, e.prepend0x)(d.toString(16));
          return this.callbacks.get(o) && this.callbacks.delete(o), d;
        }
      };
    },
    82844: (L, r) => {
      "use strict";
      var e;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Web3Method = void 0),
        ((e = r.Web3Method || (r.Web3Method = {})).requestEthereumAccounts =
          "requestEthereumAccounts"),
        (e.signEthereumMessage = "signEthereumMessage"),
        (e.signEthereumTransaction = "signEthereumTransaction"),
        (e.submitEthereumTransaction = "submitEthereumTransaction"),
        (e.ethereumAddressFromSignedMessage =
          "ethereumAddressFromSignedMessage"),
        (e.scanQRCode = "scanQRCode"),
        (e.generic = "generic"),
        (e.childRequestEthereumAccounts = "childRequestEthereumAccounts"),
        (e.addEthereumChain = "addEthereumChain"),
        (e.switchEthereumChain = "switchEthereumChain"),
        (e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest"),
        (e.watchAsset = "watchAsset"),
        (e.selectProvider = "selectProvider");
    },
    53724: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Web3RequestCanceledMessage = void 0);
      const e = t(47600);
      r.Web3RequestCanceledMessage = function g(u) {
        return { type: e.RelayMessageType.WEB3_REQUEST_CANCELED, id: u };
      };
    },
    7112: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.Web3RequestMessage = void 0);
      const e = t(47600);
      r.Web3RequestMessage = function g(u) {
        return Object.assign({ type: e.RelayMessageType.WEB3_REQUEST }, u);
      };
    },
    75800: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EthereumAddressFromSignedMessageResponse =
          r.SubmitEthereumTransactionResponse =
          r.SignEthereumTransactionResponse =
          r.SignEthereumMessageResponse =
          r.isRequestEthereumAccountsResponse =
          r.SelectProviderResponse =
          r.WatchAssetReponse =
          r.RequestEthereumAccountsResponse =
          r.SwitchEthereumChainResponse =
          r.AddEthereumChainResponse =
          r.isErrorResponse =
            void 0);
      const e = t(82844);
      (r.isErrorResponse = function g(n) {
        var f, v;
        return (
          void 0 !== (null === (f = n) || void 0 === f ? void 0 : f.method) &&
          void 0 !==
            (null === (v = n) || void 0 === v ? void 0 : v.errorMessage)
        );
      }),
        (r.AddEthereumChainResponse = function u(n) {
          return { method: e.Web3Method.addEthereumChain, result: n };
        }),
        (r.SwitchEthereumChainResponse = function d(n) {
          return { method: e.Web3Method.switchEthereumChain, result: n };
        }),
        (r.RequestEthereumAccountsResponse = function o(n) {
          return { method: e.Web3Method.requestEthereumAccounts, result: n };
        }),
        (r.WatchAssetReponse = function i(n) {
          return { method: e.Web3Method.watchAsset, result: n };
        }),
        (r.SelectProviderResponse = function s(n) {
          return { method: e.Web3Method.selectProvider, result: n };
        }),
        (r.isRequestEthereumAccountsResponse = function l(n) {
          return n && n.method === e.Web3Method.requestEthereumAccounts;
        }),
        (r.SignEthereumMessageResponse = function b(n) {
          return { method: e.Web3Method.signEthereumMessage, result: n };
        }),
        (r.SignEthereumTransactionResponse = function h(n) {
          return { method: e.Web3Method.signEthereumTransaction, result: n };
        }),
        (r.SubmitEthereumTransactionResponse = function p(n) {
          return { method: e.Web3Method.submitEthereumTransaction, result: n };
        }),
        (r.EthereumAddressFromSignedMessageResponse = function c(n) {
          return {
            method: e.Web3Method.ethereumAddressFromSignedMessage,
            result: n,
          };
        });
    },
    79197: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isWeb3ResponseMessage = r.Web3ResponseMessage = void 0);
      const e = t(47600);
      (r.Web3ResponseMessage = function g(d) {
        return Object.assign({ type: e.RelayMessageType.WEB3_RESPONSE }, d);
      }),
        (r.isWeb3ResponseMessage = function u(d) {
          return d && d.type === e.RelayMessageType.WEB3_RESPONSE;
        });
    },
    28148: (L, r, t) => {
      "use strict";
      var e = t(59344).default;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.decrypt = r.encrypt = void 0);
      const g = t(81260);
      function d() {
        return (d = e(function* (i, s) {
          if (64 !== s.length) throw Error("secret must be 256 bits");
          const l = crypto.getRandomValues(new Uint8Array(12)),
            b = yield crypto.subtle.importKey(
              "raw",
              (0, g.hexStringToUint8Array)(s),
              { name: "aes-gcm" },
              !1,
              ["encrypt", "decrypt"]
            ),
            h = new TextEncoder(),
            p = yield window.crypto.subtle.encrypt(
              { name: "AES-GCM", iv: l },
              b,
              h.encode(i)
            ),
            n = p.slice(p.byteLength - 16),
            f = p.slice(0, p.byteLength - 16),
            v = new Uint8Array(n),
            E = new Uint8Array(f),
            w = new Uint8Array([...l, ...v, ...E]);
          return (0, g.uint8ArrayToHex)(w);
        })).apply(this, arguments);
      }
      (r.encrypt = function u(i, s) {
        return d.apply(this, arguments);
      }),
        (r.decrypt = function o(i, s) {
          if (64 !== s.length) throw Error("secret must be 256 bits");
          return new Promise((l, b) => {
            e(function* () {
              const h = yield crypto.subtle.importKey(
                  "raw",
                  (0, g.hexStringToUint8Array)(s),
                  { name: "aes-gcm" },
                  !1,
                  ["encrypt", "decrypt"]
                ),
                p = (0, g.hexStringToUint8Array)(i),
                c = p.slice(0, 12),
                n = p.slice(12, 28),
                f = p.slice(28),
                v = new Uint8Array([...f, ...n]),
                E = { name: "AES-GCM", iv: new Uint8Array(c) };
              try {
                const w = yield window.crypto.subtle.decrypt(E, h, v),
                  C = new TextDecoder();
                l(C.decode(w));
              } catch (w) {
                b(w);
              }
            })();
          });
        });
    },
    56703: (L, r) => {
      "use strict";
      var u;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ProviderType =
          r.RegExpString =
          r.IntNumber =
          r.BigIntString =
          r.AddressString =
          r.HexString =
          r.OpaqueType =
            void 0),
        (r.OpaqueType = function t() {
          return (u) => u;
        }),
        (r.HexString = (u) => u),
        (r.AddressString = (u) => u),
        (r.BigIntString = (u) => u),
        (r.IntNumber = function e(u) {
          return Math.floor(u);
        }),
        (r.RegExpString = (u) => u),
        ((u = r.ProviderType || (r.ProviderType = {})).CoinbaseWallet =
          "CoinbaseWallet"),
        (u.MetaMask = "MetaMask"),
        (u.Unselected = "");
    },
    81260: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (_) {
          return _ && _.__esModule ? _ : { default: _ };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.isInIFrame =
          r.createQrUrl =
          r.getFavicon =
          r.range =
          r.isBigNumber =
          r.ensureParsedJSONObject =
          r.ensureBN =
          r.ensureRegExpString =
          r.ensureIntNumber =
          r.ensureBuffer =
          r.ensureAddressString =
          r.ensureEvenLengthHexString =
          r.ensureHexString =
          r.isHexString =
          r.prepend0x =
          r.strip0x =
          r.has0xPrefix =
          r.hexStringFromIntNumber =
          r.intNumberFromHexString =
          r.bigIntStringFromBN =
          r.hexStringFromBuffer =
          r.hexStringToUint8Array =
          r.uint8ArrayToHex =
          r.randomBytesHex =
            void 0);
      const g = e(t(62662)),
        u = t(76104),
        d = t(23139),
        o = t(56703),
        i = /^[0-9]*$/,
        s = /^[a-f0-9]*$/;
      function b(_) {
        return [..._].map((I) => I.toString(16).padStart(2, "0")).join("");
      }
      function v(_) {
        return _.startsWith("0x") || _.startsWith("0X");
      }
      function E(_) {
        return v(_) ? _.slice(2) : _;
      }
      function w(_) {
        return v(_) ? "0x" + _.slice(2) : "0x" + _;
      }
      function C(_) {
        if ("string" != typeof _) return !1;
        const I = E(_).toLowerCase();
        return s.test(I);
      }
      function A(_, I = !1) {
        if ("string" == typeof _) {
          const R = E(_).toLowerCase();
          if (s.test(R)) return (0, o.HexString)(I ? "0x" + R : R);
        }
        throw d.standardErrors.rpc.invalidParams(
          `"${String(_)}" is not a hexadecimal string`
        );
      }
      function S(_, I = !1) {
        let R = A(_, !1);
        return (
          R.length % 2 == 1 && (R = (0, o.HexString)("0" + R)),
          I ? (0, o.HexString)("0x" + R) : R
        );
      }
      function U(_) {
        if ("number" == typeof _ && Number.isInteger(_))
          return (0, o.IntNumber)(_);
        if ("string" == typeof _) {
          if (i.test(_)) return (0, o.IntNumber)(Number(_));
          if (C(_))
            return (0, o.IntNumber)(new g.default(S(_, !1), 16).toNumber());
        }
        throw d.standardErrors.rpc.invalidParams(
          `Not an integer: ${String(_)}`
        );
      }
      function G(_) {
        if (null == _ || "function" != typeof _.constructor) return !1;
        const { constructor: I } = _;
        return "function" == typeof I.config && "number" == typeof I.EUCLID;
      }
      (r.randomBytesHex = function l(_) {
        return b(crypto.getRandomValues(new Uint8Array(_)));
      }),
        (r.uint8ArrayToHex = b),
        (r.hexStringToUint8Array = function h(_) {
          return new Uint8Array(_.match(/.{1,2}/g).map((I) => parseInt(I, 16)));
        }),
        (r.hexStringFromBuffer = function p(_, I = !1) {
          const R = _.toString("hex");
          return (0, o.HexString)(I ? "0x" + R : R);
        }),
        (r.bigIntStringFromBN = function c(_) {
          return (0, o.BigIntString)(_.toString(10));
        }),
        (r.intNumberFromHexString = function n(_) {
          return (0, o.IntNumber)(new g.default(S(_, !1), 16).toNumber());
        }),
        (r.hexStringFromIntNumber = function f(_) {
          return (0, o.HexString)("0x" + new g.default(_).toString(16));
        }),
        (r.has0xPrefix = v),
        (r.strip0x = E),
        (r.prepend0x = w),
        (r.isHexString = C),
        (r.ensureHexString = A),
        (r.ensureEvenLengthHexString = S),
        (r.ensureAddressString = function M(_) {
          if ("string" == typeof _) {
            const I = E(_).toLowerCase();
            if (C(I) && 40 === I.length) return (0, o.AddressString)(w(I));
          }
          throw d.standardErrors.rpc.invalidParams(
            `Invalid Ethereum address: ${String(_)}`
          );
        }),
        (r.ensureBuffer = function N(_) {
          if (Buffer.isBuffer(_)) return _;
          if ("string" == typeof _) {
            if (C(_)) {
              const I = S(_, !1);
              return Buffer.from(I, "hex");
            }
            return Buffer.from(_, "utf8");
          }
          throw d.standardErrors.rpc.invalidParams(
            `Not binary data: ${String(_)}`
          );
        }),
        (r.ensureIntNumber = U),
        (r.ensureRegExpString = function O(_) {
          if (_ instanceof RegExp) return (0, o.RegExpString)(_.toString());
          throw d.standardErrors.rpc.invalidParams(
            `Not a RegExp: ${String(_)}`
          );
        }),
        (r.ensureBN = function D(_) {
          if (null !== _ && (g.default.isBN(_) || G(_)))
            return new g.default(_.toString(10), 10);
          if ("number" == typeof _) return new g.default(U(_));
          if ("string" == typeof _) {
            if (i.test(_)) return new g.default(_, 10);
            if (C(_)) return new g.default(S(_, !1), 16);
          }
          throw d.standardErrors.rpc.invalidParams(
            `Not an integer: ${String(_)}`
          );
        }),
        (r.ensureParsedJSONObject = function K(_) {
          if ("string" == typeof _) return JSON.parse(_);
          if ("object" == typeof _) return _;
          throw d.standardErrors.rpc.invalidParams(
            `Not a JSON string or an object: ${String(_)}`
          );
        }),
        (r.isBigNumber = G),
        (r.range = function re(_, I) {
          return Array.from({ length: I - _ }, (R, T) => _ + T);
        }),
        (r.getFavicon = function ue() {
          const _ =
              document.querySelector('link[sizes="192x192"]') ||
              document.querySelector('link[sizes="180x180"]') ||
              document.querySelector('link[rel="icon"]') ||
              document.querySelector('link[rel="shortcut icon"]'),
            { protocol: I, host: R } = document.location,
            T = _ ? _.getAttribute("href") : null;
          return !T || T.startsWith("javascript:")
            ? null
            : T.startsWith("http://") ||
              T.startsWith("https://") ||
              T.startsWith("data:")
            ? T
            : T.startsWith("//")
            ? I + T
            : `${I}//${R}${T}`;
        }),
        (r.createQrUrl = function P(_, I, R, T, F, J) {
          return `${R}/#/link?${(0, u.stringify)({
            [T ? "parent-id" : "id"]: _,
            secret: I,
            server: R,
            v: F,
            chainId: J,
          })}`;
        }),
        (r.isInIFrame = function m() {
          try {
            return null !== window.frameElement;
          } catch {
            return !1;
          }
        });
    },
    37252: (L, r, t) => {
      const e = t(92814),
        g = t(62662);
      function u(f) {
        return f.startsWith("int[")
          ? "int256" + f.slice(3)
          : "int" === f
          ? "int256"
          : f.startsWith("uint[")
          ? "uint256" + f.slice(4)
          : "uint" === f
          ? "uint256"
          : f.startsWith("fixed[")
          ? "fixed128x128" + f.slice(5)
          : "fixed" === f
          ? "fixed128x128"
          : f.startsWith("ufixed[")
          ? "ufixed128x128" + f.slice(6)
          : "ufixed" === f
          ? "ufixed128x128"
          : f;
      }
      function d(f) {
        return parseInt(/^\D+(\d+)$/.exec(f)[1], 10);
      }
      function o(f) {
        var v = /^\D+(\d+)x(\d+)$/.exec(f);
        return [parseInt(v[1], 10), parseInt(v[2], 10)];
      }
      function i(f) {
        var v = f.match(/(.*)\[(.*?)\]$/);
        return v ? ("" === v[2] ? "dynamic" : parseInt(v[2], 10)) : null;
      }
      function s(f) {
        var v = typeof f;
        if ("string" === v)
          return e.isHexString(f)
            ? new g(e.stripHexPrefix(f), 16)
            : new g(f, 10);
        if ("number" === v) return new g(f);
        if (f.toArray) return f;
        throw new Error("Argument is not a number");
      }
      function l(f, v) {
        var E, w, C, A;
        if ("address" === f) return l("uint160", s(v));
        if ("bool" === f) return l("uint8", v ? 1 : 0);
        if ("string" === f) return l("bytes", new Buffer(v, "utf8"));
        if (
          (function h(f) {
            return f.lastIndexOf("]") === f.length - 1;
          })(f)
        ) {
          if (typeof v.length > "u") throw new Error("Not an array?");
          if ("dynamic" !== (E = i(f)) && 0 !== E && v.length > E)
            throw new Error("Elements exceed array size: " + E);
          for (A in ((C = []),
          (f = f.slice(0, f.lastIndexOf("["))),
          "string" == typeof v && (v = JSON.parse(v)),
          v))
            C.push(l(f, v[A]));
          if ("dynamic" === E) {
            var S = l("uint256", v.length);
            C.unshift(S);
          }
          return Buffer.concat(C);
        }
        if ("bytes" === f)
          return (
            (v = new Buffer(v)),
            (C = Buffer.concat([l("uint256", v.length), v])),
            v.length % 32 != 0 &&
              (C = Buffer.concat([C, e.zeros(32 - (v.length % 32))])),
            C
          );
        if (f.startsWith("bytes")) {
          if ((E = d(f)) < 1 || E > 32)
            throw new Error("Invalid bytes<N> width: " + E);
          return e.setLengthRight(v, 32);
        }
        if (f.startsWith("uint")) {
          if ((E = d(f)) % 8 || E < 8 || E > 256)
            throw new Error("Invalid uint<N> width: " + E);
          if ((w = s(v)).bitLength() > E)
            throw new Error(
              "Supplied uint exceeds width: " + E + " vs " + w.bitLength()
            );
          if (w < 0) throw new Error("Supplied uint is negative");
          return w.toArrayLike(Buffer, "be", 32);
        }
        if (f.startsWith("int")) {
          if ((E = d(f)) % 8 || E < 8 || E > 256)
            throw new Error("Invalid int<N> width: " + E);
          if ((w = s(v)).bitLength() > E)
            throw new Error(
              "Supplied int exceeds width: " + E + " vs " + w.bitLength()
            );
          return w.toTwos(256).toArrayLike(Buffer, "be", 32);
        }
        if (f.startsWith("ufixed")) {
          if (((E = o(f)), (w = s(v)) < 0))
            throw new Error("Supplied ufixed is negative");
          return l("uint256", w.mul(new g(2).pow(new g(E[1]))));
        }
        if (f.startsWith("fixed"))
          return (E = o(f)), l("int256", s(v).mul(new g(2).pow(new g(E[1]))));
        throw new Error("Unsupported or invalid type: " + f);
      }
      function b(f) {
        return "string" === f || "bytes" === f || "dynamic" === i(f);
      }
      function c(f, v) {
        if (f.length !== v.length)
          throw new Error("Number of types are not matching the values");
        for (var E, w, C = [], A = 0; A < f.length; A++) {
          var S = u(f[A]),
            M = v[A];
          if ("bytes" === S) C.push(M);
          else if ("string" === S) C.push(new Buffer(M, "utf8"));
          else if ("bool" === S) C.push(new Buffer(M ? "01" : "00", "hex"));
          else if ("address" === S) C.push(e.setLength(M, 20));
          else if (S.startsWith("bytes")) {
            if ((E = d(S)) < 1 || E > 32)
              throw new Error("Invalid bytes<N> width: " + E);
            C.push(e.setLengthRight(M, E));
          } else if (S.startsWith("uint")) {
            if ((E = d(S)) % 8 || E < 8 || E > 256)
              throw new Error("Invalid uint<N> width: " + E);
            if ((w = s(M)).bitLength() > E)
              throw new Error(
                "Supplied uint exceeds width: " + E + " vs " + w.bitLength()
              );
            C.push(w.toArrayLike(Buffer, "be", E / 8));
          } else {
            if (!S.startsWith("int"))
              throw new Error("Unsupported or invalid type: " + S);
            if ((E = d(S)) % 8 || E < 8 || E > 256)
              throw new Error("Invalid int<N> width: " + E);
            if ((w = s(M)).bitLength() > E)
              throw new Error(
                "Supplied int exceeds width: " + E + " vs " + w.bitLength()
              );
            C.push(w.toTwos(E).toArrayLike(Buffer, "be", E / 8));
          }
        }
        return Buffer.concat(C);
      }
      L.exports = {
        rawEncode: function p(f, v) {
          var E = [],
            w = [],
            C = 32 * f.length;
          for (var A in f) {
            var S = u(f[A]),
              N = l(S, v[A]);
            b(S)
              ? (E.push(l("uint256", C)), w.push(N), (C += N.length))
              : E.push(N);
          }
          return Buffer.concat(E.concat(w));
        },
        solidityPack: c,
        soliditySHA3: function n(f, v) {
          return e.keccak(c(f, v));
        },
      };
    },
    83348: (L, r, t) => {
      const e = t(92814),
        g = t(37252),
        u = {
          type: "object",
          properties: {
            types: {
              type: "object",
              additionalProperties: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    type: { type: "string" },
                  },
                  required: ["name", "type"],
                },
              },
            },
            primaryType: { type: "string" },
            domain: { type: "object" },
            message: { type: "object" },
          },
          required: ["types", "primaryType", "domain", "message"],
        },
        d = {
          encodeData(i, s, l, b = !0) {
            const h = ["bytes32"],
              p = [this.hashType(i, l)];
            if (b) {
              const c = (n, f, v) => {
                if (void 0 !== l[f])
                  return [
                    "bytes32",
                    null == v
                      ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                      : e.keccak(this.encodeData(f, v, l, b)),
                  ];
                if (void 0 === v)
                  throw new Error(`missing value for field ${n} of type ${f}`);
                if ("bytes" === f) return ["bytes32", e.keccak(v)];
                if ("string" === f)
                  return (
                    "string" == typeof v && (v = Buffer.from(v, "utf8")),
                    ["bytes32", e.keccak(v)]
                  );
                if (f.lastIndexOf("]") === f.length - 1) {
                  const E = f.slice(0, f.lastIndexOf("[")),
                    w = v.map((C) => c(n, E, C));
                  return [
                    "bytes32",
                    e.keccak(
                      g.rawEncode(
                        w.map(([C]) => C),
                        w.map(([, C]) => C)
                      )
                    ),
                  ];
                }
                return [f, v];
              };
              for (const n of l[i]) {
                const [f, v] = c(n.name, n.type, s[n.name]);
                h.push(f), p.push(v);
              }
            } else
              for (const c of l[i]) {
                let n = s[c.name];
                if (void 0 !== n)
                  if ("bytes" === c.type)
                    h.push("bytes32"), (n = e.keccak(n)), p.push(n);
                  else if ("string" === c.type)
                    h.push("bytes32"),
                      "string" == typeof n && (n = Buffer.from(n, "utf8")),
                      (n = e.keccak(n)),
                      p.push(n);
                  else if (void 0 !== l[c.type])
                    h.push("bytes32"),
                      (n = e.keccak(this.encodeData(c.type, n, l, b))),
                      p.push(n);
                  else {
                    if (c.type.lastIndexOf("]") === c.type.length - 1)
                      throw new Error(
                        "Arrays currently unimplemented in encodeData"
                      );
                    h.push(c.type), p.push(n);
                  }
              }
            return g.rawEncode(h, p);
          },
          encodeType(i, s) {
            let l = "",
              b = this.findTypeDependencies(i, s).filter((h) => h !== i);
            b = [i].concat(b.sort());
            for (const h of b) {
              if (!s[h]) throw new Error("No type definition specified: " + h);
              l +=
                h +
                "(" +
                s[h].map(({ name: c, type: n }) => n + " " + c).join(",") +
                ")";
            }
            return l;
          },
          findTypeDependencies(i, s, l = []) {
            if (((i = i.match(/^\w*/)[0]), l.includes(i) || void 0 === s[i]))
              return l;
            l.push(i);
            for (const b of s[i])
              for (const h of this.findTypeDependencies(b.type, s, l))
                !l.includes(h) && l.push(h);
            return l;
          },
          hashStruct(i, s, l, b = !0) {
            return e.keccak(this.encodeData(i, s, l, b));
          },
          hashType(i, s) {
            return e.keccak(this.encodeType(i, s));
          },
          sanitizeData(i) {
            const s = {};
            for (const l in u.properties) i[l] && (s[l] = i[l]);
            return (
              s.types &&
                (s.types = Object.assign({ EIP712Domain: [] }, s.types)),
              s
            );
          },
          hash(i, s = !0) {
            const l = this.sanitizeData(i),
              b = [Buffer.from("1901", "hex")];
            return (
              b.push(this.hashStruct("EIP712Domain", l.domain, l.types, s)),
              "EIP712Domain" !== l.primaryType &&
                b.push(this.hashStruct(l.primaryType, l.message, l.types, s)),
              e.keccak(Buffer.concat(b))
            );
          },
        };
      L.exports = {
        TYPED_MESSAGE_SCHEMA: u,
        TypedDataUtils: d,
        hashForSignTypedDataLegacy: function (i) {
          return (function o(i) {
            const s = new Error("Expect argument to be non-empty array");
            if ("object" != typeof i || !i.length) throw s;
            const l = i.map(function (p) {
                return "bytes" === p.type ? e.toBuffer(p.value) : p.value;
              }),
              b = i.map(function (p) {
                return p.type;
              }),
              h = i.map(function (p) {
                if (!p.name) throw s;
                return p.type + " " + p.name;
              });
            return g.soliditySHA3(
              ["bytes32", "bytes32"],
              [
                g.soliditySHA3(new Array(i.length).fill("string"), h),
                g.soliditySHA3(b, l),
              ]
            );
          })(i.data);
        },
        hashForSignTypedData_v3: function (i) {
          return d.hash(i.data, !1);
        },
        hashForSignTypedData_v4: function (i) {
          return d.hash(i.data);
        },
      };
    },
    92814: (L, r, t) => {
      const e = t(70568),
        g = t(62662);
      function u(c) {
        return Buffer.allocUnsafe(c).fill(0);
      }
      function d(c, n, f) {
        const v = u(n);
        return (
          (c = i(c)),
          f
            ? c.length < n
              ? (c.copy(v), v)
              : c.slice(0, n)
            : c.length < n
            ? (c.copy(v, n - c.length), v)
            : c.slice(-n)
        );
      }
      function i(c) {
        if (!Buffer.isBuffer(c))
          if (Array.isArray(c)) c = Buffer.from(c);
          else if ("string" == typeof c)
            c = h(c)
              ? Buffer.from(
                  (function b(c) {
                    return c.length % 2 ? "0" + c : c;
                  })(p(c)),
                  "hex"
                )
              : Buffer.from(c);
          else if ("number" == typeof c) c = intToBuffer(c);
          else if (null == c) c = Buffer.allocUnsafe(0);
          else if (g.isBN(c)) c = c.toArrayLike(Buffer);
          else {
            if (!c.toArray) throw new Error("invalid type");
            c = Buffer.from(c.toArray());
          }
        return c;
      }
      function h(c) {
        return "string" == typeof c && c.match(/^0x[0-9A-Fa-f]*$/);
      }
      function p(c) {
        return "string" == typeof c && c.startsWith("0x") ? c.slice(2) : c;
      }
      L.exports = {
        zeros: u,
        setLength: d,
        setLengthRight: function o(c, n) {
          return d(c, n, !0);
        },
        isHexString: h,
        stripHexPrefix: p,
        toBuffer: i,
        bufferToHex: function s(c) {
          return "0x" + (c = i(c)).toString("hex");
        },
        keccak: function l(c, n) {
          return (
            (c = i(c)),
            n || (n = 256),
            e("keccak" + n)
              .update(c)
              .digest()
          );
        },
      };
    },
    38167: (L) => {
      function r(c) {
        (this.mode = e.MODE_8BIT_BYTE), (this.data = c), (this.parsedData = []);
        for (var n = 0, f = this.data.length; n < f; n++) {
          var v = [],
            E = this.data.charCodeAt(n);
          E > 65536
            ? ((v[0] = 240 | ((1835008 & E) >>> 18)),
              (v[1] = 128 | ((258048 & E) >>> 12)),
              (v[2] = 128 | ((4032 & E) >>> 6)),
              (v[3] = 128 | (63 & E)))
            : E > 2048
            ? ((v[0] = 224 | ((61440 & E) >>> 12)),
              (v[1] = 128 | ((4032 & E) >>> 6)),
              (v[2] = 128 | (63 & E)))
            : E > 128
            ? ((v[0] = 192 | ((1984 & E) >>> 6)), (v[1] = 128 | (63 & E)))
            : (v[0] = E),
            this.parsedData.push(v);
        }
        (this.parsedData = Array.prototype.concat.apply([], this.parsedData)),
          this.parsedData.length != this.data.length &&
            (this.parsedData.unshift(191),
            this.parsedData.unshift(187),
            this.parsedData.unshift(239));
      }
      function t(c, n) {
        (this.typeNumber = c),
          (this.errorCorrectLevel = n),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      (r.prototype = {
        getLength: function (c) {
          return this.parsedData.length;
        },
        write: function (c) {
          for (var n = 0, f = this.parsedData.length; n < f; n++)
            c.put(this.parsedData[n], 8);
        },
      }),
        (t.prototype = {
          addData: function (c) {
            var n = new r(c);
            this.dataList.push(n), (this.dataCache = null);
          },
          isDark: function (c, n) {
            if (
              c < 0 ||
              this.moduleCount <= c ||
              n < 0 ||
              this.moduleCount <= n
            )
              throw new Error(c + "," + n);
            return this.modules[c][n];
          },
          getModuleCount: function () {
            return this.moduleCount;
          },
          make: function () {
            this.makeImpl(!1, this.getBestMaskPattern());
          },
          makeImpl: function (c, n) {
            (this.moduleCount = 4 * this.typeNumber + 17),
              (this.modules = new Array(this.moduleCount));
            for (var f = 0; f < this.moduleCount; f++) {
              this.modules[f] = new Array(this.moduleCount);
              for (var v = 0; v < this.moduleCount; v++)
                this.modules[f][v] = null;
            }
            this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(c, n),
              this.typeNumber >= 7 && this.setupTypeNumber(c),
              null == this.dataCache &&
                (this.dataCache = t.createData(
                  this.typeNumber,
                  this.errorCorrectLevel,
                  this.dataList
                )),
              this.mapData(this.dataCache, n);
          },
          setupPositionProbePattern: function (c, n) {
            for (var f = -1; f <= 7; f++)
              if (!(c + f <= -1 || this.moduleCount <= c + f))
                for (var v = -1; v <= 7; v++)
                  n + v <= -1 ||
                    this.moduleCount <= n + v ||
                    (this.modules[c + f][n + v] =
                      (0 <= f && f <= 6 && (0 == v || 6 == v)) ||
                      (0 <= v && v <= 6 && (0 == f || 6 == f)) ||
                      (2 <= f && f <= 4 && 2 <= v && v <= 4));
          },
          getBestMaskPattern: function () {
            for (var c = 0, n = 0, f = 0; f < 8; f++) {
              this.makeImpl(!0, f);
              var v = d.getLostPoint(this);
              (0 == f || c > v) && ((c = v), (n = f));
            }
            return n;
          },
          createMovieClip: function (c, n, f) {
            var v = c.createEmptyMovieClip(n, f);
            this.make();
            for (var w = 0; w < this.modules.length; w++)
              for (var C = 1 * w, A = 0; A < this.modules[w].length; A++) {
                var S = 1 * A;
                this.modules[w][A] &&
                  (v.beginFill(0, 100),
                  v.moveTo(S, C),
                  v.lineTo(S + 1, C),
                  v.lineTo(S + 1, C + 1),
                  v.lineTo(S, C + 1),
                  v.endFill());
              }
            return v;
          },
          setupTimingPattern: function () {
            for (var c = 8; c < this.moduleCount - 8; c++)
              null == this.modules[c][6] && (this.modules[c][6] = c % 2 == 0);
            for (var n = 8; n < this.moduleCount - 8; n++)
              null == this.modules[6][n] && (this.modules[6][n] = n % 2 == 0);
          },
          setupPositionAdjustPattern: function () {
            for (
              var c = d.getPatternPosition(this.typeNumber), n = 0;
              n < c.length;
              n++
            )
              for (var f = 0; f < c.length; f++) {
                var v = c[n],
                  E = c[f];
                if (null == this.modules[v][E])
                  for (var w = -2; w <= 2; w++)
                    for (var C = -2; C <= 2; C++)
                      this.modules[v + w][E + C] =
                        -2 == w ||
                        2 == w ||
                        -2 == C ||
                        2 == C ||
                        (0 == w && 0 == C);
              }
          },
          setupTypeNumber: function (c) {
            for (
              var n = d.getBCHTypeNumber(this.typeNumber), f = 0;
              f < 18;
              f++
            ) {
              var v = !c && 1 == ((n >> f) & 1);
              this.modules[Math.floor(f / 3)][
                (f % 3) + this.moduleCount - 8 - 3
              ] = v;
            }
            for (f = 0; f < 18; f++)
              (v = !c && 1 == ((n >> f) & 1)),
                (this.modules[(f % 3) + this.moduleCount - 8 - 3][
                  Math.floor(f / 3)
                ] = v);
          },
          setupTypeInfo: function (c, n) {
            for (
              var v = d.getBCHTypeInfo((this.errorCorrectLevel << 3) | n),
                E = 0;
              E < 15;
              E++
            ) {
              var w = !c && 1 == ((v >> E) & 1);
              E < 6
                ? (this.modules[E][8] = w)
                : E < 8
                ? (this.modules[E + 1][8] = w)
                : (this.modules[this.moduleCount - 15 + E][8] = w);
            }
            for (E = 0; E < 15; E++)
              (w = !c && 1 == ((v >> E) & 1)),
                E < 8
                  ? (this.modules[8][this.moduleCount - E - 1] = w)
                  : E < 9
                  ? (this.modules[8][15 - E - 1 + 1] = w)
                  : (this.modules[8][15 - E - 1] = w);
            this.modules[this.moduleCount - 8][8] = !c;
          },
          mapData: function (c, n) {
            for (
              var f = -1,
                v = this.moduleCount - 1,
                E = 7,
                w = 0,
                C = this.moduleCount - 1;
              C > 0;
              C -= 2
            )
              for (6 == C && C--; ; ) {
                for (var A = 0; A < 2; A++)
                  if (null == this.modules[v][C - A]) {
                    var S = !1;
                    w < c.length && (S = 1 == ((c[w] >>> E) & 1)),
                      d.getMask(n, v, C - A) && (S = !S),
                      (this.modules[v][C - A] = S),
                      -1 == --E && (w++, (E = 7));
                  }
                if ((v += f) < 0 || this.moduleCount <= v) {
                  (v -= f), (f = -f);
                  break;
                }
              }
          },
        }),
        (t.PAD0 = 236),
        (t.PAD1 = 17),
        (t.createData = function (c, n, f) {
          for (
            var v = l.getRSBlocks(c, n), E = new b(), w = 0;
            w < f.length;
            w++
          ) {
            var C = f[w];
            E.put(C.mode, 4),
              E.put(C.getLength(), d.getLengthInBits(C.mode, c)),
              C.write(E);
          }
          var A = 0;
          for (w = 0; w < v.length; w++) A += v[w].dataCount;
          if (E.getLengthInBits() > 8 * A)
            throw new Error(
              "code length overflow. (" +
                E.getLengthInBits() +
                ">" +
                8 * A +
                ")"
            );
          for (
            E.getLengthInBits() + 4 <= 8 * A && E.put(0, 4);
            E.getLengthInBits() % 8 != 0;

          )
            E.putBit(!1);
          for (
            ;
            !(
              E.getLengthInBits() >= 8 * A ||
              (E.put(t.PAD0, 8), E.getLengthInBits() >= 8 * A)
            );

          )
            E.put(t.PAD1, 8);
          return t.createBytes(E, v);
        }),
        (t.createBytes = function (c, n) {
          for (
            var f = 0,
              v = 0,
              E = 0,
              w = new Array(n.length),
              C = new Array(n.length),
              A = 0;
            A < n.length;
            A++
          ) {
            var S = n[A].dataCount,
              M = n[A].totalCount - S;
            (v = Math.max(v, S)), (E = Math.max(E, M)), (w[A] = new Array(S));
            for (var N = 0; N < w[A].length; N++)
              w[A][N] = 255 & c.buffer[N + f];
            f += S;
            var U = d.getErrorCorrectPolynomial(M),
              D = new s(w[A], U.getLength() - 1).mod(U);
            for (
              C[A] = new Array(U.getLength() - 1), N = 0;
              N < C[A].length;
              N++
            ) {
              var K = N + D.getLength() - C[A].length;
              C[A][N] = K >= 0 ? D.get(K) : 0;
            }
          }
          var G = 0;
          for (N = 0; N < n.length; N++) G += n[N].totalCount;
          var re = new Array(G),
            ue = 0;
          for (N = 0; N < v; N++)
            for (A = 0; A < n.length; A++)
              N < w[A].length && (re[ue++] = w[A][N]);
          for (N = 0; N < E; N++)
            for (A = 0; A < n.length; A++)
              N < C[A].length && (re[ue++] = C[A][N]);
          return re;
        });
      for (
        var e = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8,
          },
          g = { L: 1, M: 0, Q: 3, H: 2 },
          u = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7,
          },
          d = {
            PATTERN_POSITION_TABLE: [
              [],
              [6, 18],
              [6, 22],
              [6, 26],
              [6, 30],
              [6, 34],
              [6, 22, 38],
              [6, 24, 42],
              [6, 26, 46],
              [6, 28, 50],
              [6, 30, 54],
              [6, 32, 58],
              [6, 34, 62],
              [6, 26, 46, 66],
              [6, 26, 48, 70],
              [6, 26, 50, 74],
              [6, 30, 54, 78],
              [6, 30, 56, 82],
              [6, 30, 58, 86],
              [6, 34, 62, 90],
              [6, 28, 50, 72, 94],
              [6, 26, 50, 74, 98],
              [6, 30, 54, 78, 102],
              [6, 28, 54, 80, 106],
              [6, 32, 58, 84, 110],
              [6, 30, 58, 86, 114],
              [6, 34, 62, 90, 118],
              [6, 26, 50, 74, 98, 122],
              [6, 30, 54, 78, 102, 126],
              [6, 26, 52, 78, 104, 130],
              [6, 30, 56, 82, 108, 134],
              [6, 34, 60, 86, 112, 138],
              [6, 30, 58, 86, 114, 142],
              [6, 34, 62, 90, 118, 146],
              [6, 30, 54, 78, 102, 126, 150],
              [6, 24, 50, 76, 102, 128, 154],
              [6, 28, 54, 80, 106, 132, 158],
              [6, 32, 58, 84, 110, 136, 162],
              [6, 26, 54, 82, 110, 138, 166],
              [6, 30, 58, 86, 114, 142, 170],
            ],
            G15: 1335,
            G18: 7973,
            G15_MASK: 21522,
            getBCHTypeInfo: function (c) {
              for (
                var n = c << 10;
                d.getBCHDigit(n) - d.getBCHDigit(d.G15) >= 0;

              )
                n ^= d.G15 << (d.getBCHDigit(n) - d.getBCHDigit(d.G15));
              return ((c << 10) | n) ^ d.G15_MASK;
            },
            getBCHTypeNumber: function (c) {
              for (
                var n = c << 12;
                d.getBCHDigit(n) - d.getBCHDigit(d.G18) >= 0;

              )
                n ^= d.G18 << (d.getBCHDigit(n) - d.getBCHDigit(d.G18));
              return (c << 12) | n;
            },
            getBCHDigit: function (c) {
              for (var n = 0; 0 != c; ) n++, (c >>>= 1);
              return n;
            },
            getPatternPosition: function (c) {
              return d.PATTERN_POSITION_TABLE[c - 1];
            },
            getMask: function (c, n, f) {
              switch (c) {
                case u.PATTERN000:
                  return (n + f) % 2 == 0;
                case u.PATTERN001:
                  return n % 2 == 0;
                case u.PATTERN010:
                  return f % 3 == 0;
                case u.PATTERN011:
                  return (n + f) % 3 == 0;
                case u.PATTERN100:
                  return (Math.floor(n / 2) + Math.floor(f / 3)) % 2 == 0;
                case u.PATTERN101:
                  return ((n * f) % 2) + ((n * f) % 3) == 0;
                case u.PATTERN110:
                  return (((n * f) % 2) + ((n * f) % 3)) % 2 == 0;
                case u.PATTERN111:
                  return (((n * f) % 3) + ((n + f) % 2)) % 2 == 0;
                default:
                  throw new Error("bad maskPattern:" + c);
              }
            },
            getErrorCorrectPolynomial: function (c) {
              for (var n = new s([1], 0), f = 0; f < c; f++)
                n = n.multiply(new s([1, o.gexp(f)], 0));
              return n;
            },
            getLengthInBits: function (c, n) {
              if (1 <= n && n < 10)
                switch (c) {
                  case e.MODE_NUMBER:
                    return 10;
                  case e.MODE_ALPHA_NUM:
                    return 9;
                  case e.MODE_8BIT_BYTE:
                  case e.MODE_KANJI:
                    return 8;
                  default:
                    throw new Error("mode:" + c);
                }
              else if (n < 27)
                switch (c) {
                  case e.MODE_NUMBER:
                    return 12;
                  case e.MODE_ALPHA_NUM:
                    return 11;
                  case e.MODE_8BIT_BYTE:
                    return 16;
                  case e.MODE_KANJI:
                    return 10;
                  default:
                    throw new Error("mode:" + c);
                }
              else {
                if (!(n < 41)) throw new Error("type:" + n);
                switch (c) {
                  case e.MODE_NUMBER:
                    return 14;
                  case e.MODE_ALPHA_NUM:
                    return 13;
                  case e.MODE_8BIT_BYTE:
                    return 16;
                  case e.MODE_KANJI:
                    return 12;
                  default:
                    throw new Error("mode:" + c);
                }
              }
            },
            getLostPoint: function (c) {
              for (var n = c.getModuleCount(), f = 0, v = 0; v < n; v++)
                for (var E = 0; E < n; E++) {
                  for (var w = 0, C = c.isDark(v, E), A = -1; A <= 1; A++)
                    if (!(v + A < 0 || n <= v + A))
                      for (var S = -1; S <= 1; S++)
                        E + S < 0 ||
                          n <= E + S ||
                          (0 == A && 0 == S) ||
                          (C == c.isDark(v + A, E + S) && w++);
                  w > 5 && (f += 3 + w - 5);
                }
              for (v = 0; v < n - 1; v++)
                for (E = 0; E < n - 1; E++) {
                  var M = 0;
                  c.isDark(v, E) && M++,
                    c.isDark(v + 1, E) && M++,
                    c.isDark(v, E + 1) && M++,
                    c.isDark(v + 1, E + 1) && M++,
                    (0 == M || 4 == M) && (f += 3);
                }
              for (v = 0; v < n; v++)
                for (E = 0; E < n - 6; E++)
                  c.isDark(v, E) &&
                    !c.isDark(v, E + 1) &&
                    c.isDark(v, E + 2) &&
                    c.isDark(v, E + 3) &&
                    c.isDark(v, E + 4) &&
                    !c.isDark(v, E + 5) &&
                    c.isDark(v, E + 6) &&
                    (f += 40);
              for (E = 0; E < n; E++)
                for (v = 0; v < n - 6; v++)
                  c.isDark(v, E) &&
                    !c.isDark(v + 1, E) &&
                    c.isDark(v + 2, E) &&
                    c.isDark(v + 3, E) &&
                    c.isDark(v + 4, E) &&
                    !c.isDark(v + 5, E) &&
                    c.isDark(v + 6, E) &&
                    (f += 40);
              var N = 0;
              for (E = 0; E < n; E++)
                for (v = 0; v < n; v++) c.isDark(v, E) && N++;
              return f + (Math.abs((100 * N) / n / n - 50) / 5) * 10;
            },
          },
          o = {
            glog: function (c) {
              if (c < 1) throw new Error("glog(" + c + ")");
              return o.LOG_TABLE[c];
            },
            gexp: function (c) {
              for (; c < 0; ) c += 255;
              for (; c >= 256; ) c -= 255;
              return o.EXP_TABLE[c];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          i = 0;
        i < 8;
        i++
      )
        o.EXP_TABLE[i] = 1 << i;
      for (i = 8; i < 256; i++)
        o.EXP_TABLE[i] =
          o.EXP_TABLE[i - 4] ^
          o.EXP_TABLE[i - 5] ^
          o.EXP_TABLE[i - 6] ^
          o.EXP_TABLE[i - 8];
      for (i = 0; i < 255; i++) o.LOG_TABLE[o.EXP_TABLE[i]] = i;
      function s(c, n) {
        if (null == c.length) throw new Error(c.length + "/" + n);
        for (var f = 0; f < c.length && 0 == c[f]; ) f++;
        this.num = new Array(c.length - f + n);
        for (var v = 0; v < c.length - f; v++) this.num[v] = c[v + f];
      }
      function l(c, n) {
        (this.totalCount = c), (this.dataCount = n);
      }
      function b() {
        (this.buffer = []), (this.length = 0);
      }
      (s.prototype = {
        get: function (c) {
          return this.num[c];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (c) {
          for (
            var n = new Array(this.getLength() + c.getLength() - 1), f = 0;
            f < this.getLength();
            f++
          )
            for (var v = 0; v < c.getLength(); v++)
              n[f + v] ^= o.gexp(o.glog(this.get(f)) + o.glog(c.get(v)));
          return new s(n, 0);
        },
        mod: function (c) {
          if (this.getLength() - c.getLength() < 0) return this;
          for (
            var n = o.glog(this.get(0)) - o.glog(c.get(0)),
              f = new Array(this.getLength()),
              v = 0;
            v < this.getLength();
            v++
          )
            f[v] = this.get(v);
          for (v = 0; v < c.getLength(); v++)
            f[v] ^= o.gexp(o.glog(c.get(v)) + n);
          return new s(f, 0).mod(c);
        },
      }),
        (l.RS_BLOCK_TABLE = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [3, 58, 36, 2, 59, 37],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12],
          [5, 122, 98, 1, 123, 99],
          [7, 73, 45, 3, 74, 46],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [4, 151, 121, 5, 152, 122],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16],
        ]),
        (l.getRSBlocks = function (c, n) {
          var f = l.getRsBlockTable(c, n);
          if (null == f)
            throw new Error(
              "bad rs block @ typeNumber:" + c + "/errorCorrectLevel:" + n
            );
          for (var v = f.length / 3, E = [], w = 0; w < v; w++)
            for (
              var C = f[3 * w + 0], A = f[3 * w + 1], S = f[3 * w + 2], M = 0;
              M < C;
              M++
            )
              E.push(new l(A, S));
          return E;
        }),
        (l.getRsBlockTable = function (c, n) {
          switch (n) {
            case g.L:
              return l.RS_BLOCK_TABLE[4 * (c - 1) + 0];
            case g.M:
              return l.RS_BLOCK_TABLE[4 * (c - 1) + 1];
            case g.Q:
              return l.RS_BLOCK_TABLE[4 * (c - 1) + 2];
            case g.H:
              return l.RS_BLOCK_TABLE[4 * (c - 1) + 3];
            default:
              return;
          }
        }),
        (b.prototype = {
          get: function (c) {
            var n = Math.floor(c / 8);
            return 1 == ((this.buffer[n] >>> (7 - (c % 8))) & 1);
          },
          put: function (c, n) {
            for (var f = 0; f < n; f++)
              this.putBit(1 == ((c >>> (n - f - 1)) & 1));
          },
          getLengthInBits: function () {
            return this.length;
          },
          putBit: function (c) {
            var n = Math.floor(this.length / 8);
            this.buffer.length <= n && this.buffer.push(0),
              c && (this.buffer[n] |= 128 >>> this.length % 8),
              this.length++;
          },
        });
      var h = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ];
      function p(c) {
        if (
          ((this.options = {
            padding: 4,
            width: 256,
            height: 256,
            typeNumber: 4,
            color: "#000000",
            background: "#ffffff",
            ecl: "M",
            image: { svg: "", width: 0, height: 0 },
          }),
          "string" == typeof c && (c = { content: c }),
          c)
        )
          for (var f in c) this.options[f] = c[f];
        if ("string" != typeof this.options.content)
          throw new Error("Expected 'content' as string!");
        if (0 === this.options.content.length)
          throw new Error("Expected 'content' to be non-empty!");
        if (!(this.options.padding >= 0))
          throw new Error("Expected 'padding' value to be non-negative!");
        if (!(this.options.width > 0 && this.options.height > 0))
          throw new Error(
            "Expected 'width' or 'height' value to be higher than zero!"
          );
        var C = this.options.content,
          A = (function E(M, N) {
            for (
              var U = (function w(M) {
                  var N = encodeURI(M)
                    .toString()
                    .replace(/\%[0-9a-fA-F]{2}/g, "a");
                  return N.length + (N.length != M ? 3 : 0);
                })(M),
                O = 1,
                D = 0,
                K = 0,
                G = h.length;
              K <= G;
              K++
            ) {
              var re = h[K];
              if (!re)
                throw new Error(
                  "Content too long: expected " + D + " but got " + U
                );
              switch (N) {
                case "L":
                  D = re[0];
                  break;
                case "M":
                  D = re[1];
                  break;
                case "Q":
                  D = re[2];
                  break;
                case "H":
                  D = re[3];
                  break;
                default:
                  throw new Error("Unknwon error correction level: " + N);
              }
              if (U <= D) break;
              O++;
            }
            if (O > h.length) throw new Error("Content too long");
            return O;
          })(C, this.options.ecl),
          S = (function v(M) {
            switch (M) {
              case "L":
                return g.L;
              case "M":
                return g.M;
              case "Q":
                return g.Q;
              case "H":
                return g.H;
              default:
                throw new Error("Unknwon error correction level: " + M);
            }
          })(this.options.ecl);
        (this.qrcode = new t(A, S)), this.qrcode.addData(C), this.qrcode.make();
      }
      (p.prototype.svg = function (c) {
        var n = this.options || {},
          f = this.qrcode.modules;
        typeof c > "u" && (c = { container: n.container || "svg" });
        for (
          var v = !(typeof n.pretty < "u" && !n.pretty),
            E = v ? "  " : "",
            w = v ? "\r\n" : "",
            C = n.width,
            A = n.height,
            S = f.length,
            M = C / (S + 2 * n.padding),
            N = A / (S + 2 * n.padding),
            U = typeof n.join < "u" && !!n.join,
            O = typeof n.swap < "u" && !!n.swap,
            D = !(typeof n.xmlDeclaration < "u" && !n.xmlDeclaration),
            K = typeof n.predefined < "u" && !!n.predefined,
            G = K
              ? E +
                '<defs><path id="qrmodule" d="M0 0 h' +
                N +
                " v" +
                M +
                ' H0 z" style="fill:' +
                n.color +
                ';shape-rendering:crispEdges;" /></defs>' +
                w
              : "",
            re =
              E +
              '<rect x="0" y="0" width="' +
              C +
              '" height="' +
              A +
              '" style="fill:' +
              n.background +
              ';shape-rendering:crispEdges;"/>' +
              w,
            ue = "",
            P = "",
            m = 0;
          m < S;
          m++
        )
          for (var _ = 0; _ < S; _++)
            if (f[_][m]) {
              var R = _ * M + n.padding * M,
                T = m * N + n.padding * N;
              if (O) {
                var F = R;
                (R = T), (T = F);
              }
              if (U) {
                var J = M + R,
                  $ = N + T;
                (R = Number.isInteger(R) ? Number(R) : R.toFixed(2)),
                  (T = Number.isInteger(T) ? Number(T) : T.toFixed(2)),
                  (J = Number.isInteger(J) ? Number(J) : J.toFixed(2)),
                  (P +=
                    "M" +
                    R +
                    "," +
                    T +
                    " V" +
                    ($ = Number.isInteger($) ? Number($) : $.toFixed(2)) +
                    " H" +
                    J +
                    " V" +
                    T +
                    " H" +
                    R +
                    " Z ");
              } else
                ue += K
                  ? E +
                    '<use x="' +
                    R.toString() +
                    '" y="' +
                    T.toString() +
                    '" href="#qrmodule" />' +
                    w
                  : E +
                    '<rect x="' +
                    R.toString() +
                    '" y="' +
                    T.toString() +
                    '" width="' +
                    M +
                    '" height="' +
                    N +
                    '" style="fill:' +
                    n.color +
                    ';shape-rendering:crispEdges;"/>' +
                    w;
            }
        U &&
          (ue =
            E +
            '<path x="0" y="0" style="fill:' +
            n.color +
            ';shape-rendering:crispEdges;" d="' +
            P +
            '" />');
        let x = "";
        if (void 0 !== this.options.image && this.options.image.svg) {
          const de = (C * this.options.image.width) / 100,
            fe = (A * this.options.image.height) / 100;
          (x += `<svg x="${C / 2 - de / 2}" y="${
            A / 2 - fe / 2
          }" width="${de}" height="${fe}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`),
            (x += this.options.image.svg + w),
            (x += "</svg>");
        }
        var z = "";
        switch (c.container) {
          case "svg":
            D && (z += '<?xml version="1.0" standalone="yes"?>' + w),
              (z +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' +
                C +
                '" height="' +
                A +
                '">' +
                w),
              (z += G + re + ue),
              (z += x),
              (z += "</svg>");
            break;
          case "svg-viewbox":
            D && (z += '<?xml version="1.0" standalone="yes"?>' + w),
              (z +=
                '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
                C +
                " " +
                A +
                '">' +
                w),
              (z += G + re + ue),
              (z += x),
              (z += "</svg>");
            break;
          case "g":
            (z += '<g width="' + C + '" height="' + A + '">' + w),
              (z += G + re + ue),
              (z += x),
              (z += "</g>");
            break;
          default:
            z += (G + re + ue + x).replace(/^\s+/, "");
        }
        return z;
      }),
        (L.exports = p);
    },
    7938: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.LIB_VERSION = void 0),
        (r.LIB_VERSION = "3.7.2");
    },
    7137: (L) => {
      "use strict";
      var r = String.prototype.replace,
        t = /%20/g;
      L.exports = {
        default: "RFC3986",
        formatters: {
          RFC1738: function (g) {
            return r.call(g, t, "+");
          },
          RFC3986: function (g) {
            return String(g);
          },
        },
        RFC1738: "RFC1738",
        RFC3986: "RFC3986",
      };
    },
    76104: (L, r, t) => {
      "use strict";
      var e = t(68102),
        g = t(10840),
        u = t(7137);
      L.exports = { formats: u, parse: g, stringify: e };
    },
    10840: (L, r, t) => {
      "use strict";
      var e = t(44122),
        g = Object.prototype.hasOwnProperty,
        u = Array.isArray,
        d = {
          allowDots: !1,
          allowPrototypes: !1,
          allowSparse: !1,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: !1,
          comma: !1,
          decoder: e.decode,
          delimiter: "&",
          depth: 5,
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        i = function (n, f) {
          return n && "string" == typeof n && f.comma && n.indexOf(",") > -1
            ? n.split(",")
            : n;
        },
        p = function (f, v, E, w) {
          if (f) {
            var C = E.allowDots ? f.replace(/\.([^.[]+)/g, "[$1]") : f,
              S = /(\[[^[\]]*])/g,
              M = E.depth > 0 && /(\[[^[\]]*])/.exec(C),
              N = M ? C.slice(0, M.index) : C,
              U = [];
            if (N) {
              if (
                !E.plainObjects &&
                g.call(Object.prototype, N) &&
                !E.allowPrototypes
              )
                return;
              U.push(N);
            }
            for (
              var O = 0;
              E.depth > 0 && null !== (M = S.exec(C)) && O < E.depth;

            ) {
              if (
                ((O += 1),
                !E.plainObjects &&
                  g.call(Object.prototype, M[1].slice(1, -1)) &&
                  !E.allowPrototypes)
              )
                return;
              U.push(M[1]);
            }
            return (
              M && U.push("[" + C.slice(M.index) + "]"),
              (function (n, f, v, E) {
                for (var w = E ? f : i(f, v), C = n.length - 1; C >= 0; --C) {
                  var A,
                    S = n[C];
                  if ("[]" === S && v.parseArrays) A = [].concat(w);
                  else {
                    A = v.plainObjects ? Object.create(null) : {};
                    var M =
                        "[" === S.charAt(0) && "]" === S.charAt(S.length - 1)
                          ? S.slice(1, -1)
                          : S,
                      N = parseInt(M, 10);
                    v.parseArrays || "" !== M
                      ? !isNaN(N) &&
                        S !== M &&
                        String(N) === M &&
                        N >= 0 &&
                        v.parseArrays &&
                        N <= v.arrayLimit
                        ? ((A = [])[N] = w)
                        : "__proto__" !== M && (A[M] = w)
                      : (A = { 0: w });
                  }
                  w = A;
                }
                return w;
              })(U, v, E, w)
            );
          }
        };
      L.exports = function (n, f) {
        var v = (function (f) {
          if (!f) return d;
          if (null != f.decoder && "function" != typeof f.decoder)
            throw new TypeError("Decoder has to be a function.");
          if (
            typeof f.charset < "u" &&
            "utf-8" !== f.charset &&
            "iso-8859-1" !== f.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          return {
            allowDots: typeof f.allowDots > "u" ? d.allowDots : !!f.allowDots,
            allowPrototypes:
              "boolean" == typeof f.allowPrototypes
                ? f.allowPrototypes
                : d.allowPrototypes,
            allowSparse:
              "boolean" == typeof f.allowSparse ? f.allowSparse : d.allowSparse,
            arrayLimit:
              "number" == typeof f.arrayLimit ? f.arrayLimit : d.arrayLimit,
            charset: typeof f.charset > "u" ? d.charset : f.charset,
            charsetSentinel:
              "boolean" == typeof f.charsetSentinel
                ? f.charsetSentinel
                : d.charsetSentinel,
            comma: "boolean" == typeof f.comma ? f.comma : d.comma,
            decoder: "function" == typeof f.decoder ? f.decoder : d.decoder,
            delimiter:
              "string" == typeof f.delimiter || e.isRegExp(f.delimiter)
                ? f.delimiter
                : d.delimiter,
            depth:
              "number" == typeof f.depth || !1 === f.depth ? +f.depth : d.depth,
            ignoreQueryPrefix: !0 === f.ignoreQueryPrefix,
            interpretNumericEntities:
              "boolean" == typeof f.interpretNumericEntities
                ? f.interpretNumericEntities
                : d.interpretNumericEntities,
            parameterLimit:
              "number" == typeof f.parameterLimit
                ? f.parameterLimit
                : d.parameterLimit,
            parseArrays: !1 !== f.parseArrays,
            plainObjects:
              "boolean" == typeof f.plainObjects
                ? f.plainObjects
                : d.plainObjects,
            strictNullHandling:
              "boolean" == typeof f.strictNullHandling
                ? f.strictNullHandling
                : d.strictNullHandling,
          };
        })(f);
        if ("" === n || null === n || typeof n > "u")
          return v.plainObjects ? Object.create(null) : {};
        for (
          var E =
              "string" == typeof n
                ? (function (f, v) {
                    var M,
                      E = { __proto__: null },
                      A = (
                        v.ignoreQueryPrefix ? f.replace(/^\?/, "") : f
                      ).split(
                        v.delimiter,
                        v.parameterLimit === 1 / 0 ? void 0 : v.parameterLimit
                      ),
                      S = -1,
                      N = v.charset;
                    if (v.charsetSentinel)
                      for (M = 0; M < A.length; ++M)
                        0 === A[M].indexOf("utf8=") &&
                          ("utf8=%E2%9C%93" === A[M]
                            ? (N = "utf-8")
                            : "utf8=%26%2310003%3B" === A[M] &&
                              (N = "iso-8859-1"),
                          (S = M),
                          (M = A.length));
                    for (M = 0; M < A.length; ++M)
                      if (M !== S) {
                        var K,
                          G,
                          U = A[M],
                          O = U.indexOf("]="),
                          D = -1 === O ? U.indexOf("=") : O + 1;
                        -1 === D
                          ? ((K = v.decoder(U, d.decoder, N, "key")),
                            (G = v.strictNullHandling ? null : ""))
                          : ((K = v.decoder(
                              U.slice(0, D),
                              d.decoder,
                              N,
                              "key"
                            )),
                            (G = e.maybeMap(
                              i(U.slice(D + 1), v),
                              function (re) {
                                return v.decoder(re, d.decoder, N, "value");
                              }
                            ))),
                          G &&
                            v.interpretNumericEntities &&
                            "iso-8859-1" === N &&
                            (G = G.replace(/&#(\d+);/g, function (f, v) {
                              return String.fromCharCode(parseInt(v, 10));
                            })),
                          U.indexOf("[]=") > -1 && (G = u(G) ? [G] : G),
                          (E[K] = g.call(E, K) ? e.combine(E[K], G) : G);
                      }
                    return E;
                  })(n, v)
                : n,
            w = v.plainObjects ? Object.create(null) : {},
            C = Object.keys(E),
            A = 0;
          A < C.length;
          ++A
        ) {
          var S = C[A],
            M = p(S, E[S], v, "string" == typeof n);
          w = e.merge(w, M, v);
        }
        return !0 === v.allowSparse ? w : e.compact(w);
      };
    },
    68102: (L, r, t) => {
      "use strict";
      var e = t(57379),
        g = t(44122),
        u = t(7137),
        d = Object.prototype.hasOwnProperty,
        o = {
          brackets: function (w) {
            return w + "[]";
          },
          comma: "comma",
          indices: function (w, C) {
            return w + "[" + C + "]";
          },
          repeat: function (w) {
            return w;
          },
        },
        i = Array.isArray,
        s = Array.prototype.push,
        l = function (E, w) {
          s.apply(E, i(w) ? w : [w]);
        },
        b = Date.prototype.toISOString,
        h = u.default,
        p = {
          addQueryPrefix: !1,
          allowDots: !1,
          charset: "utf-8",
          charsetSentinel: !1,
          delimiter: "&",
          encode: !0,
          encoder: g.encode,
          encodeValuesOnly: !1,
          format: h,
          formatter: u.formatters[h],
          indices: !1,
          serializeDate: function (w) {
            return b.call(w);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        n = {},
        f = function E(w, C, A, S, M, N, U, O, D, K, G, re, ue, P, m, _) {
          for (
            var I = w, R = _, T = 0, F = !1;
            void 0 !== (R = R.get(n)) && !F;

          ) {
            var J = R.get(w);
            if (((T += 1), typeof J < "u")) {
              if (J === T) throw new RangeError("Cyclic object value");
              F = !0;
            }
            typeof R.get(n) > "u" && (T = 0);
          }
          if (
            ("function" == typeof O
              ? (I = O(C, I))
              : I instanceof Date
              ? (I = G(I))
              : "comma" === A &&
                i(I) &&
                (I = g.maybeMap(I, function (oe) {
                  return oe instanceof Date ? G(oe) : oe;
                })),
            null === I)
          ) {
            if (M) return U && !P ? U(C, p.encoder, m, "key", re) : C;
            I = "";
          }
          if (
            (function (w) {
              return (
                "string" == typeof w ||
                "number" == typeof w ||
                "boolean" == typeof w ||
                "symbol" == typeof w ||
                "bigint" == typeof w
              );
            })(I) ||
            g.isBuffer(I)
          )
            return U
              ? [
                  ue(P ? C : U(C, p.encoder, m, "key", re)) +
                    "=" +
                    ue(U(I, p.encoder, m, "value", re)),
                ]
              : [ue(C) + "=" + ue(String(I))];
          var z,
            x = [];
          if (typeof I > "u") return x;
          if ("comma" === A && i(I))
            P && U && (I = g.maybeMap(I, U)),
              (z = [{ value: I.length > 0 ? I.join(",") || null : void 0 }]);
          else if (i(O)) z = O;
          else {
            var de = Object.keys(I);
            z = D ? de.sort(D) : de;
          }
          for (
            var fe = S && i(I) && 1 === I.length ? C + "[]" : C, be = 0;
            be < z.length;
            ++be
          ) {
            var Q = z[be],
              B = "object" == typeof Q && typeof Q.value < "u" ? Q.value : I[Q];
            if (!N || null !== B) {
              var V = i(I)
                ? "function" == typeof A
                  ? A(fe, Q)
                  : fe
                : fe + (K ? "." + Q : "[" + Q + "]");
              _.set(w, T);
              var ee = e();
              ee.set(n, _),
                l(
                  x,
                  E(
                    B,
                    V,
                    A,
                    S,
                    M,
                    N,
                    "comma" === A && P && i(I) ? null : U,
                    O,
                    D,
                    K,
                    G,
                    re,
                    ue,
                    P,
                    m,
                    ee
                  )
                );
            }
          }
          return x;
        };
      L.exports = function (E, w) {
        var S,
          C = E,
          A = (function (w) {
            if (!w) return p;
            if (
              null !== w.encoder &&
              typeof w.encoder < "u" &&
              "function" != typeof w.encoder
            )
              throw new TypeError("Encoder has to be a function.");
            var C = w.charset || p.charset;
            if (
              typeof w.charset < "u" &&
              "utf-8" !== w.charset &&
              "iso-8859-1" !== w.charset
            )
              throw new TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined"
              );
            var A = u.default;
            if (typeof w.format < "u") {
              if (!d.call(u.formatters, w.format))
                throw new TypeError("Unknown format option provided.");
              A = w.format;
            }
            var S = u.formatters[A],
              M = p.filter;
            return (
              ("function" == typeof w.filter || i(w.filter)) && (M = w.filter),
              {
                addQueryPrefix:
                  "boolean" == typeof w.addQueryPrefix
                    ? w.addQueryPrefix
                    : p.addQueryPrefix,
                allowDots:
                  typeof w.allowDots > "u" ? p.allowDots : !!w.allowDots,
                charset: C,
                charsetSentinel:
                  "boolean" == typeof w.charsetSentinel
                    ? w.charsetSentinel
                    : p.charsetSentinel,
                delimiter: typeof w.delimiter > "u" ? p.delimiter : w.delimiter,
                encode: "boolean" == typeof w.encode ? w.encode : p.encode,
                encoder: "function" == typeof w.encoder ? w.encoder : p.encoder,
                encodeValuesOnly:
                  "boolean" == typeof w.encodeValuesOnly
                    ? w.encodeValuesOnly
                    : p.encodeValuesOnly,
                filter: M,
                format: A,
                formatter: S,
                serializeDate:
                  "function" == typeof w.serializeDate
                    ? w.serializeDate
                    : p.serializeDate,
                skipNulls:
                  "boolean" == typeof w.skipNulls ? w.skipNulls : p.skipNulls,
                sort: "function" == typeof w.sort ? w.sort : null,
                strictNullHandling:
                  "boolean" == typeof w.strictNullHandling
                    ? w.strictNullHandling
                    : p.strictNullHandling,
              }
            );
          })(w);
        "function" == typeof A.filter
          ? (C = (0, A.filter)("", C))
          : i(A.filter) && (S = A.filter);
        var N = [];
        if ("object" != typeof C || null === C) return "";
        var O =
          o[
            w && w.arrayFormat in o
              ? w.arrayFormat
              : w && "indices" in w
              ? w.indices
                ? "indices"
                : "repeat"
              : "indices"
          ];
        if (w && "commaRoundTrip" in w && "boolean" != typeof w.commaRoundTrip)
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var D = "comma" === O && w && w.commaRoundTrip;
        S || (S = Object.keys(C)), A.sort && S.sort(A.sort);
        for (var K = e(), G = 0; G < S.length; ++G) {
          var re = S[G];
          (A.skipNulls && null === C[re]) ||
            l(
              N,
              f(
                C[re],
                re,
                O,
                D,
                A.strictNullHandling,
                A.skipNulls,
                A.encode ? A.encoder : null,
                A.filter,
                A.sort,
                A.allowDots,
                A.serializeDate,
                A.format,
                A.formatter,
                A.encodeValuesOnly,
                A.charset,
                K
              )
            );
        }
        var ue = N.join(A.delimiter),
          P = !0 === A.addQueryPrefix ? "?" : "";
        return (
          A.charsetSentinel &&
            (P +=
              "iso-8859-1" === A.charset
                ? "utf8=%26%2310003%3B&"
                : "utf8=%E2%9C%93&"),
          ue.length > 0 ? P + ue : ""
        );
      };
    },
    44122: (L, r, t) => {
      "use strict";
      var e = t(7137),
        g = Object.prototype.hasOwnProperty,
        u = Array.isArray,
        d = (function () {
          for (var E = [], w = 0; w < 256; ++w)
            E.push("%" + ((w < 16 ? "0" : "") + w.toString(16)).toUpperCase());
          return E;
        })(),
        i = function (w, C) {
          for (
            var A = C && C.plainObjects ? Object.create(null) : {}, S = 0;
            S < w.length;
            ++S
          )
            typeof w[S] < "u" && (A[S] = w[S]);
          return A;
        };
      L.exports = {
        arrayToObject: i,
        assign: function (w, C) {
          return Object.keys(C).reduce(function (A, S) {
            return (A[S] = C[S]), A;
          }, w);
        },
        combine: function (w, C) {
          return [].concat(w, C);
        },
        compact: function (w) {
          for (
            var C = [{ obj: { o: w }, prop: "o" }], A = [], S = 0;
            S < C.length;
            ++S
          )
            for (
              var M = C[S], N = M.obj[M.prop], U = Object.keys(N), O = 0;
              O < U.length;
              ++O
            ) {
              var D = U[O],
                K = N[D];
              "object" == typeof K &&
                null !== K &&
                -1 === A.indexOf(K) &&
                (C.push({ obj: N, prop: D }), A.push(K));
            }
          return (
            (function (w) {
              for (; w.length > 1; ) {
                var C = w.pop(),
                  A = C.obj[C.prop];
                if (u(A)) {
                  for (var S = [], M = 0; M < A.length; ++M)
                    typeof A[M] < "u" && S.push(A[M]);
                  C.obj[C.prop] = S;
                }
              }
            })(C),
            w
          );
        },
        decode: function (E, w, C) {
          var A = E.replace(/\+/g, " ");
          if ("iso-8859-1" === C) return A.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(A);
          } catch {
            return A;
          }
        },
        encode: function (w, C, A, S, M) {
          if (0 === w.length) return w;
          var N = w;
          if (
            ("symbol" == typeof w
              ? (N = Symbol.prototype.toString.call(w))
              : "string" != typeof w && (N = String(w)),
            "iso-8859-1" === A)
          )
            return escape(N).replace(/%u[0-9a-f]{4}/gi, function (K) {
              return "%26%23" + parseInt(K.slice(2), 16) + "%3B";
            });
          for (var U = "", O = 0; O < N.length; ++O) {
            var D = N.charCodeAt(O);
            45 === D ||
            46 === D ||
            95 === D ||
            126 === D ||
            (D >= 48 && D <= 57) ||
            (D >= 65 && D <= 90) ||
            (D >= 97 && D <= 122) ||
            (M === e.RFC1738 && (40 === D || 41 === D))
              ? (U += N.charAt(O))
              : D < 128
              ? (U += d[D])
              : D < 2048
              ? (U += d[192 | (D >> 6)] + d[128 | (63 & D)])
              : D < 55296 || D >= 57344
              ? (U +=
                  d[224 | (D >> 12)] +
                  d[128 | ((D >> 6) & 63)] +
                  d[128 | (63 & D)])
              : ((D =
                  65536 +
                  (((1023 & D) << 10) | (1023 & N.charCodeAt((O += 1))))),
                (U +=
                  d[240 | (D >> 18)] +
                  d[128 | ((D >> 12) & 63)] +
                  d[128 | ((D >> 6) & 63)] +
                  d[128 | (63 & D)]));
          }
          return U;
        },
        isBuffer: function (w) {
          return !(
            !w ||
            "object" != typeof w ||
            !(
              w.constructor &&
              w.constructor.isBuffer &&
              w.constructor.isBuffer(w)
            )
          );
        },
        isRegExp: function (w) {
          return "[object RegExp]" === Object.prototype.toString.call(w);
        },
        maybeMap: function (w, C) {
          if (u(w)) {
            for (var A = [], S = 0; S < w.length; S += 1) A.push(C(w[S]));
            return A;
          }
          return C(w);
        },
        merge: function E(w, C, A) {
          if (!C) return w;
          if ("object" != typeof C) {
            if (u(w)) w.push(C);
            else {
              if (!w || "object" != typeof w) return [w, C];
              ((A && (A.plainObjects || A.allowPrototypes)) ||
                !g.call(Object.prototype, C)) &&
                (w[C] = !0);
            }
            return w;
          }
          if (!w || "object" != typeof w) return [w].concat(C);
          var S = w;
          return (
            u(w) && !u(C) && (S = i(w, A)),
            u(w) && u(C)
              ? (C.forEach(function (M, N) {
                  if (g.call(w, N)) {
                    var U = w[N];
                    U && "object" == typeof U && M && "object" == typeof M
                      ? (w[N] = E(U, M, A))
                      : w.push(M);
                  } else w[N] = M;
                }),
                w)
              : Object.keys(C).reduce(function (M, N) {
                  var U = C[N];
                  return (M[N] = g.call(M, N) ? E(M[N], U, A) : U), M;
                }, S)
          );
        },
      };
    },
    45397: (L, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          ArgumentOutOfRangeError: () => re.W,
          AsyncSubject: () => l.c,
          BehaviorSubject: () => i.X,
          ConnectableObservable: () => g.c,
          EMPTY: () => oe.E,
          EmptyError: () => ue.K,
          GroupedObservable: () => u.T,
          NEVER: () => Fe,
          Notification: () => U.P,
          NotificationKind: () => U.W,
          ObjectUnsubscribedError: () => P.N,
          Observable: () => e.y,
          ReplaySubject: () => s.t,
          Scheduler: () => S.b,
          Subject: () => o.xQ,
          Subscriber: () => N.L,
          Subscription: () => M.w,
          TimeoutError: () => _.W,
          UnsubscriptionError: () => m.B,
          VirtualAction: () => A,
          VirtualTimeScheduler: () => C,
          animationFrame: () => w,
          animationFrameScheduler: () => E,
          asap: () => b.e,
          asapScheduler: () => b.E,
          async: () => h.P,
          asyncScheduler: () => h.z,
          bindCallback: () => J,
          bindNodeCallback: () => de,
          combineLatest: () => B.aj,
          concat: () => V.z,
          config: () => qe.config,
          defer: () => ee.P,
          empty: () => oe.c,
          forkJoin: () => ne,
          from: () => W.D,
          fromEvent: () => Ee,
          fromEventPattern: () => Me,
          generate: () => Z,
          identity: () => K.y,
          iif: () => te,
          interval: () => ve,
          isObservable: () => G,
          merge: () => Oe.T,
          never: () => Le,
          noop: () => D.Z,
          observable: () => d.L,
          of: () => q.of,
          onErrorResumeNext: () => ae,
          pairs: () => Pe,
          partition: () => tt,
          pipe: () => O.z,
          queue: () => p.c,
          queueScheduler: () => p.N,
          race: () => Ue.S3,
          range: () => $e,
          scheduled: () => Je.x,
          throwError: () => Ge._,
          timer: () => We.H,
          using: () => rt,
          zip: () => ze.$R,
        });
      var e = t(59488),
        g = t(53101),
        u = t(80374),
        d = t(10402),
        o = t(87922),
        i = t(13388),
        s = t(47191),
        l = t(94046),
        b = t(98704),
        h = t(22229),
        p = t(1044),
        c = t(62637),
        f = t(41680);
      const E = new (class v extends f.v {
          flush(se) {
            (this.active = !0), (this.scheduled = void 0);
            const { actions: he } = this;
            let me,
              ye = -1,
              Ie = he.length;
            se = se || he.shift();
            do {
              if ((me = se.execute(se.state, se.delay))) break;
            } while (++ye < Ie && (se = he.shift()));
            if (((this.active = !1), me)) {
              for (; ++ye < Ie && (se = he.shift()); ) se.unsubscribe();
              throw me;
            }
          }
        })(
          class n extends c.o {
            constructor(se, he) {
              super(se, he), (this.scheduler = se), (this.work = he);
            }
            requestAsyncId(se, he, me = 0) {
              return null !== me && me > 0
                ? super.requestAsyncId(se, he, me)
                : (se.actions.push(this),
                  se.scheduled ||
                    (se.scheduled = requestAnimationFrame(() =>
                      se.flush(null)
                    )));
            }
            recycleAsyncId(se, he, me = 0) {
              if ((null !== me && me > 0) || (null === me && this.delay > 0))
                return super.recycleAsyncId(se, he, me);
              0 === se.actions.length &&
                (cancelAnimationFrame(he), (se.scheduled = void 0));
            }
          }
        ),
        w = E;
      let C = (() => {
        class ce extends f.v {
          constructor(he = A, me = Number.POSITIVE_INFINITY) {
            super(he, () => this.frame),
              (this.maxFrames = me),
              (this.frame = 0),
              (this.index = -1);
          }
          flush() {
            const { actions: he, maxFrames: me } = this;
            let ye, Ie;
            for (
              ;
              (Ie = he[0]) &&
              Ie.delay <= me &&
              (he.shift(),
              (this.frame = Ie.delay),
              !(ye = Ie.execute(Ie.state, Ie.delay)));

            );
            if (ye) {
              for (; (Ie = he.shift()); ) Ie.unsubscribe();
              throw ye;
            }
          }
        }
        return (ce.frameTimeFactor = 10), ce;
      })();
      class A extends c.o {
        constructor(se, he, me = (se.index += 1)) {
          super(se, he),
            (this.scheduler = se),
            (this.work = he),
            (this.index = me),
            (this.active = !0),
            (this.index = se.index = me);
        }
        schedule(se, he = 0) {
          if (!this.id) return super.schedule(se, he);
          this.active = !1;
          const me = new A(this.scheduler, this.work);
          return this.add(me), me.schedule(se, he);
        }
        requestAsyncId(se, he, me = 0) {
          this.delay = se.frame + me;
          const { actions: ye } = se;
          return ye.push(this), ye.sort(A.sortActions), !0;
        }
        recycleAsyncId(se, he, me = 0) {}
        _execute(se, he) {
          if (!0 === this.active) return super._execute(se, he);
        }
        static sortActions(se, he) {
          return se.delay === he.delay
            ? se.index === he.index
              ? 0
              : se.index > he.index
              ? 1
              : -1
            : se.delay > he.delay
            ? 1
            : -1;
        }
      }
      var S = t(97506),
        M = t(50144),
        N = t(43619),
        U = t(29944),
        O = t(77817),
        D = t(11027),
        K = t(40601);
      function G(ce) {
        return (
          !!ce &&
          (ce instanceof e.y ||
            ("function" == typeof ce.lift && "function" == typeof ce.subscribe))
        );
      }
      var re = t(34477),
        ue = t(8685),
        P = t(35093),
        m = t(31159),
        _ = t(95025),
        I = t(32974),
        R = t(79618),
        T = t(35212),
        F = t(54234);
      function J(ce, se, he) {
        if (se) {
          if (!(0, F.K)(se))
            return (...me) =>
              J(
                ce,
                he
              )(...me).pipe(
                (0, I.U)((ye) => ((0, T.k)(ye) ? se(...ye) : se(ye)))
              );
          he = se;
        }
        return function (...me) {
          const ye = this;
          let Ie;
          const Ae = {
            context: ye,
            subject: Ie,
            callbackFunc: ce,
            scheduler: he,
          };
          return new e.y((Ce) => {
            if (he)
              return he.schedule($, 0, {
                args: me,
                subscriber: Ce,
                params: Ae,
              });
            if (!Ie) {
              Ie = new l.c();
              const Ze = (...De) => {
                Ie.next(De.length <= 1 ? De[0] : De), Ie.complete();
              };
              try {
                ce.apply(ye, [...me, Ze]);
              } catch (De) {
                (0, R._)(Ie) ? Ie.error(De) : console.warn(De);
              }
            }
            return Ie.subscribe(Ce);
          });
        };
      }
      function $(ce) {
        const { args: he, subscriber: me, params: ye } = ce,
          { callbackFunc: Ie, context: Ae, scheduler: Ce } = ye;
        let { subject: Ze } = ye;
        if (!Ze) {
          Ze = ye.subject = new l.c();
          const De = (...je) => {
            this.add(
              Ce.schedule(x, 0, {
                value: je.length <= 1 ? je[0] : je,
                subject: Ze,
              })
            );
          };
          try {
            Ie.apply(Ae, [...he, De]);
          } catch (je) {
            Ze.error(je);
          }
        }
        this.add(Ze.subscribe(me));
      }
      function x(ce) {
        const { value: se, subject: he } = ce;
        he.next(se), he.complete();
      }
      function de(ce, se, he) {
        if (se) {
          if (!(0, F.K)(se))
            return (...me) =>
              de(
                ce,
                he
              )(...me).pipe(
                (0, I.U)((ye) => ((0, T.k)(ye) ? se(...ye) : se(ye)))
              );
          he = se;
        }
        return function (...me) {
          const ye = {
            subject: void 0,
            args: me,
            callbackFunc: ce,
            scheduler: he,
            context: this,
          };
          return new e.y((Ie) => {
            const { context: Ae } = ye;
            let { subject: Ce } = ye;
            if (he)
              return he.schedule(fe, 0, {
                params: ye,
                subscriber: Ie,
                context: Ae,
              });
            if (!Ce) {
              Ce = ye.subject = new l.c();
              const Ze = (...De) => {
                const je = De.shift();
                je
                  ? Ce.error(je)
                  : (Ce.next(De.length <= 1 ? De[0] : De), Ce.complete());
              };
              try {
                ce.apply(Ae, [...me, Ze]);
              } catch (De) {
                (0, R._)(Ce) ? Ce.error(De) : console.warn(De);
              }
            }
            return Ce.subscribe(Ie);
          });
        };
      }
      function fe(ce) {
        const { params: se, subscriber: he, context: me } = ce,
          { callbackFunc: ye, args: Ie, scheduler: Ae } = se;
        let Ce = se.subject;
        if (!Ce) {
          Ce = se.subject = new l.c();
          const Ze = (...De) => {
            const je = De.shift();
            this.add(
              je
                ? Ae.schedule(Q, 0, { err: je, subject: Ce })
                : Ae.schedule(be, 0, {
                    value: De.length <= 1 ? De[0] : De,
                    subject: Ce,
                  })
            );
          };
          try {
            ye.apply(me, [...Ie, Ze]);
          } catch (De) {
            this.add(Ae.schedule(Q, 0, { err: De, subject: Ce }));
          }
        }
        this.add(Ce.subscribe(he));
      }
      function be(ce) {
        const { value: se, subject: he } = ce;
        he.next(se), he.complete();
      }
      function Q(ce) {
        const { err: se, subject: he } = ce;
        he.error(se);
      }
      var B = t(9422),
        V = t(94732),
        ee = t(73737),
        oe = t(88805),
        H = t(21633),
        W = t(96056);
      function ne(...ce) {
        if (1 === ce.length) {
          const se = ce[0];
          if ((0, T.k)(se)) return le(se, null);
          if ((0, H.K)(se) && Object.getPrototypeOf(se) === Object.prototype) {
            const he = Object.keys(se);
            return le(
              he.map((me) => se[me]),
              he
            );
          }
        }
        if ("function" == typeof ce[ce.length - 1]) {
          const se = ce.pop();
          return le(
            (ce = 1 === ce.length && (0, T.k)(ce[0]) ? ce[0] : ce),
            null
          ).pipe((0, I.U)((he) => se(...he)));
        }
        return le(ce, null);
      }
      function le(ce, se) {
        return new e.y((he) => {
          const me = ce.length;
          if (0 === me) return void he.complete();
          const ye = new Array(me);
          let Ie = 0,
            Ae = 0;
          for (let Ce = 0; Ce < me; Ce++) {
            const Ze = (0, W.D)(ce[Ce]);
            let De = !1;
            he.add(
              Ze.subscribe({
                next: (je) => {
                  De || ((De = !0), Ae++), (ye[Ce] = je);
                },
                error: (je) => he.error(je),
                complete: () => {
                  Ie++,
                    (Ie === me || !De) &&
                      (Ae === me &&
                        he.next(
                          se
                            ? se.reduce(
                                (je, Xe, Ke) => ((je[Xe] = ye[Ke]), je),
                                {}
                              )
                            : ye
                        ),
                      he.complete());
                },
              })
            );
          }
        });
      }
      var Re = t(83932);
      function Ee(ce, se, he, me) {
        return (
          (0, Re.m)(he) && ((me = he), (he = void 0)),
          me
            ? Ee(ce, se, he).pipe(
                (0, I.U)((ye) => ((0, T.k)(ye) ? me(...ye) : me(ye)))
              )
            : new e.y((ye) => {
                pe(
                  ce,
                  se,
                  function Ie(Ae) {
                    ye.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : Ae
                    );
                  },
                  ye,
                  he
                );
              })
        );
      }
      function pe(ce, se, he, me, ye) {
        let Ie;
        if (
          (function xe(ce) {
            return (
              ce &&
              "function" == typeof ce.addEventListener &&
              "function" == typeof ce.removeEventListener
            );
          })(ce)
        ) {
          const Ae = ce;
          ce.addEventListener(se, he, ye),
            (Ie = () => Ae.removeEventListener(se, he, ye));
        } else if (
          (function _e(ce) {
            return (
              ce && "function" == typeof ce.on && "function" == typeof ce.off
            );
          })(ce)
        ) {
          const Ae = ce;
          ce.on(se, he), (Ie = () => Ae.off(se, he));
        } else if (
          (function Be(ce) {
            return (
              ce &&
              "function" == typeof ce.addListener &&
              "function" == typeof ce.removeListener
            );
          })(ce)
        ) {
          const Ae = ce;
          ce.addListener(se, he), (Ie = () => Ae.removeListener(se, he));
        } else {
          if (!ce || !ce.length) throw new TypeError("Invalid event target");
          for (let Ae = 0, Ce = ce.length; Ae < Ce; Ae++)
            pe(ce[Ae], se, he, me, ye);
        }
        me.add(Ie);
      }
      function Me(ce, se, he) {
        return he
          ? Me(ce, se).pipe(
              (0, I.U)((me) => ((0, T.k)(me) ? he(...me) : he(me)))
            )
          : new e.y((me) => {
              const ye = (...Ae) => me.next(1 === Ae.length ? Ae[0] : Ae);
              let Ie;
              try {
                Ie = ce(ye);
              } catch (Ae) {
                return void me.error(Ae);
              }
              if ((0, Re.m)(se)) return () => se(ye, Ie);
            });
      }
      function Z(ce, se, he, me, ye) {
        let Ie, Ae;
        return (
          1 == arguments.length
            ? ((Ae = ce.initialState),
              (se = ce.condition),
              (he = ce.iterate),
              (Ie = ce.resultSelector || K.y),
              (ye = ce.scheduler))
            : void 0 === me || (0, F.K)(me)
            ? ((Ae = ce), (Ie = K.y), (ye = me))
            : ((Ae = ce), (Ie = me)),
          new e.y((Ce) => {
            let Ze = Ae;
            if (ye)
              return ye.schedule(X, 0, {
                subscriber: Ce,
                iterate: he,
                condition: se,
                resultSelector: Ie,
                state: Ze,
              });
            for (;;) {
              if (se) {
                let je;
                try {
                  je = se(Ze);
                } catch (Xe) {
                  return void Ce.error(Xe);
                }
                if (!je) {
                  Ce.complete();
                  break;
                }
              }
              let De;
              try {
                De = Ie(Ze);
              } catch (je) {
                return void Ce.error(je);
              }
              if ((Ce.next(De), Ce.closed)) break;
              try {
                Ze = he(Ze);
              } catch (je) {
                return void Ce.error(je);
              }
            }
          })
        );
      }
      function X(ce) {
        const { subscriber: se, condition: he } = ce;
        if (se.closed) return;
        if (ce.needIterate)
          try {
            ce.state = ce.iterate(ce.state);
          } catch (ye) {
            return void se.error(ye);
          }
        else ce.needIterate = !0;
        if (he) {
          let ye;
          try {
            ye = he(ce.state);
          } catch (Ie) {
            return void se.error(Ie);
          }
          if (!ye) return void se.complete();
          if (se.closed) return;
        }
        let me;
        try {
          me = ce.resultSelector(ce.state);
        } catch (ye) {
          return void se.error(ye);
        }
        return se.closed || (se.next(me), se.closed)
          ? void 0
          : this.schedule(ce);
      }
      function te(ce, se = oe.E, he = oe.E) {
        return (0, ee.P)(() => (ce() ? se : he));
      }
      var ie = t(43618);
      function ve(ce = 0, se = h.P) {
        return (
          (!(0, ie.k)(ce) || ce < 0) && (ce = 0),
          (!se || "function" != typeof se.schedule) && (se = h.P),
          new e.y(
            (he) => (
              he.add(
                se.schedule(we, ce, { subscriber: he, counter: 0, period: ce })
              ),
              he
            )
          )
        );
      }
      function we(ce) {
        const { subscriber: se, counter: he, period: me } = ce;
        se.next(he),
          this.schedule({ subscriber: se, counter: he + 1, period: me }, me);
      }
      var Oe = t(14685);
      const Fe = new e.y(D.Z);
      function Le() {
        return Fe;
      }
      var q = t(9556);
      function ae(...ce) {
        if (0 === ce.length) return oe.E;
        const [se, ...he] = ce;
        return 1 === ce.length && (0, T.k)(se)
          ? ae(...se)
          : new e.y((me) => {
              const ye = () => me.add(ae(...he).subscribe(me));
              return (0, W.D)(se).subscribe({
                next(Ie) {
                  me.next(Ie);
                },
                error: ye,
                complete: ye,
              });
            });
      }
      function Pe(ce, se) {
        return new e.y(
          se
            ? (he) => {
                const me = Object.keys(ce),
                  ye = new M.w();
                return (
                  ye.add(
                    se.schedule(ke, 0, {
                      keys: me,
                      index: 0,
                      subscriber: he,
                      subscription: ye,
                      obj: ce,
                    })
                  ),
                  ye
                );
              }
            : (he) => {
                const me = Object.keys(ce);
                for (let ye = 0; ye < me.length && !he.closed; ye++) {
                  const Ie = me[ye];
                  ce.hasOwnProperty(Ie) && he.next([Ie, ce[Ie]]);
                }
                he.complete();
              }
        );
      }
      function ke(ce) {
        const {
          keys: se,
          index: he,
          subscriber: me,
          subscription: ye,
          obj: Ie,
        } = ce;
        if (!me.closed)
          if (he < se.length) {
            const Ae = se[he];
            me.next([Ae, Ie[Ae]]),
              ye.add(
                this.schedule({
                  keys: se,
                  index: he + 1,
                  subscriber: me,
                  subscription: ye,
                  obj: Ie,
                })
              );
          } else me.complete();
      }
      var Ve = t(1958),
        Te = t(90508),
        He = t(6167);
      function tt(ce, se, he) {
        return [
          (0, He.h)(se, he)(new e.y((0, Te.s)(ce))),
          (0, He.h)((0, Ve.f)(se, he))(new e.y((0, Te.s)(ce))),
        ];
      }
      var Ue = t(54285);
      function $e(ce = 0, se, he) {
        return new e.y((me) => {
          void 0 === se && ((se = ce), (ce = 0));
          let ye = 0,
            Ie = ce;
          if (he)
            return he.schedule(nt, 0, {
              index: ye,
              count: se,
              start: ce,
              subscriber: me,
            });
          for (;;) {
            if (ye++ >= se) {
              me.complete();
              break;
            }
            if ((me.next(Ie++), me.closed)) break;
          }
        });
      }
      function nt(ce) {
        const { start: se, index: he, count: me, subscriber: ye } = ce;
        he >= me
          ? ye.complete()
          : (ye.next(se),
            !ye.closed &&
              ((ce.index = he + 1), (ce.start = se + 1), this.schedule(ce)));
      }
      var Ge = t(2040),
        We = t(55580);
      function rt(ce, se) {
        return new e.y((he) => {
          let me, ye;
          try {
            me = ce();
          } catch (Ce) {
            return void he.error(Ce);
          }
          try {
            ye = se(me);
          } catch (Ce) {
            return void he.error(Ce);
          }
          const Ae = (ye ? (0, W.D)(ye) : oe.E).subscribe(he);
          return () => {
            Ae.unsubscribe(), me && me.unsubscribe();
          };
        });
      }
      var ze = t(85289),
        Je = t(33505),
        qe = t(24638);
    },
    94046: (L, r, t) => {
      "use strict";
      t.d(r, { c: () => u });
      var e = t(87922),
        g = t(50144);
      class u extends e.xQ {
        constructor() {
          super(...arguments),
            (this.value = null),
            (this.hasNext = !1),
            (this.hasCompleted = !1);
        }
        _subscribe(o) {
          return this.hasError
            ? (o.error(this.thrownError), g.w.EMPTY)
            : this.hasCompleted && this.hasNext
            ? (o.next(this.value), o.complete(), g.w.EMPTY)
            : super._subscribe(o);
        }
        next(o) {
          this.hasCompleted || ((this.value = o), (this.hasNext = !0));
        }
        error(o) {
          this.hasCompleted || super.error(o);
        }
        complete() {
          (this.hasCompleted = !0),
            this.hasNext && super.next(this.value),
            super.complete();
        }
      }
    },
    13388: (L, r, t) => {
      "use strict";
      t.d(r, { X: () => u });
      var e = t(87922),
        g = t(35093);
      class u extends e.xQ {
        constructor(o) {
          super(), (this._value = o);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(o) {
          const i = super._subscribe(o);
          return i && !i.closed && o.next(this._value), i;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new g.N();
          return this._value;
        }
        next(o) {
          super.next((this._value = o));
        }
      }
    },
    29944: (L, r, t) => {
      "use strict";
      t.d(r, { P: () => o, W: () => d });
      var e = t(88805),
        g = t(9556),
        u = t(2040),
        d = (function (i) {
          return (i.NEXT = "N"), (i.ERROR = "E"), (i.COMPLETE = "C"), i;
        })(d || {});
      class o {
        constructor(s, l, b) {
          (this.kind = s),
            (this.value = l),
            (this.error = b),
            (this.hasValue = "N" === s);
        }
        observe(s) {
          switch (this.kind) {
            case "N":
              return s.next && s.next(this.value);
            case "E":
              return s.error && s.error(this.error);
            case "C":
              return s.complete && s.complete();
          }
        }
        do(s, l, b) {
          switch (this.kind) {
            case "N":
              return s && s(this.value);
            case "E":
              return l && l(this.error);
            case "C":
              return b && b();
          }
        }
        accept(s, l, b) {
          return s && "function" == typeof s.next
            ? this.observe(s)
            : this.do(s, l, b);
        }
        toObservable() {
          switch (this.kind) {
            case "N":
              return (0, g.of)(this.value);
            case "E":
              return (0, u._)(this.error);
            case "C":
              return (0, e.c)();
          }
          throw new Error("unexpected notification kind value");
        }
        static createNext(s) {
          return typeof s < "u" ? new o("N", s) : o.undefinedValueNotification;
        }
        static createError(s) {
          return new o("E", void 0, s);
        }
        static createComplete() {
          return o.completeNotification;
        }
      }
      (o.completeNotification = new o("C")),
        (o.undefinedValueNotification = new o("N", void 0));
    },
    59488: (L, r, t) => {
      "use strict";
      t.d(r, { y: () => b });
      var e = t(79618),
        g = t(43619),
        u = t(45137),
        d = t(80890),
        i = t(10402),
        s = t(77817),
        l = t(24638);
      let b = (() => {
        class p {
          constructor(n) {
            (this._isScalar = !1), n && (this._subscribe = n);
          }
          lift(n) {
            const f = new p();
            return (f.source = this), (f.operator = n), f;
          }
          subscribe(n, f, v) {
            const { operator: E } = this,
              w = (function o(p, c, n) {
                if (p) {
                  if (p instanceof g.L) return p;
                  if (p[u.b]) return p[u.b]();
                }
                return p || c || n ? new g.L(p, c, n) : new g.L(d.c);
              })(n, f, v);
            if (
              (w.add(
                E
                  ? E.call(w, this.source)
                  : this.source ||
                    (l.config.useDeprecatedSynchronousErrorHandling &&
                      !w.syncErrorThrowable)
                  ? this._subscribe(w)
                  : this._trySubscribe(w)
              ),
              l.config.useDeprecatedSynchronousErrorHandling &&
                w.syncErrorThrowable &&
                ((w.syncErrorThrowable = !1), w.syncErrorThrown))
            )
              throw w.syncErrorValue;
            return w;
          }
          _trySubscribe(n) {
            try {
              return this._subscribe(n);
            } catch (f) {
              l.config.useDeprecatedSynchronousErrorHandling &&
                ((n.syncErrorThrown = !0), (n.syncErrorValue = f)),
                (0, e._)(n) ? n.error(f) : console.warn(f);
            }
          }
          forEach(n, f) {
            return new (f = h(f))((v, E) => {
              let w;
              w = this.subscribe(
                (C) => {
                  try {
                    n(C);
                  } catch (A) {
                    E(A), w && w.unsubscribe();
                  }
                },
                E,
                v
              );
            });
          }
          _subscribe(n) {
            const { source: f } = this;
            return f && f.subscribe(n);
          }
          [i.L]() {
            return this;
          }
          pipe(...n) {
            return 0 === n.length ? this : (0, s.U)(n)(this);
          }
          toPromise(n) {
            return new (n = h(n))((f, v) => {
              let E;
              this.subscribe(
                (w) => (E = w),
                (w) => v(w),
                () => f(E)
              );
            });
          }
        }
        return (p.create = (c) => new p(c)), p;
      })();
      function h(p) {
        if ((p || (p = l.config.Promise || Promise), !p))
          throw new Error("no Promise impl found");
        return p;
      }
    },
    80890: (L, r, t) => {
      "use strict";
      t.d(r, { c: () => u });
      var e = t(24638),
        g = t(20869);
      const u = {
        closed: !0,
        next(d) {},
        error(d) {
          if (e.config.useDeprecatedSynchronousErrorHandling) throw d;
          (0, g.z)(d);
        },
        complete() {},
      };
    },
    59048: (L, r, t) => {
      "use strict";
      t.d(r, { L: () => g });
      var e = t(43619);
      class g extends e.L {
        notifyNext(d, o, i, s, l) {
          this.destination.next(o);
        }
        notifyError(d, o) {
          this.destination.error(d);
        }
        notifyComplete(d) {
          this.destination.complete();
        }
      }
    },
    47191: (L, r, t) => {
      "use strict";
      t.d(r, { t: () => s });
      var e = t(87922),
        g = t(1044),
        u = t(50144),
        d = t(87167),
        o = t(35093),
        i = t(30992);
      class s extends e.xQ {
        constructor(
          h = Number.POSITIVE_INFINITY,
          p = Number.POSITIVE_INFINITY,
          c
        ) {
          super(),
            (this.scheduler = c),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = h < 1 ? 1 : h),
            (this._windowTime = p < 1 ? 1 : p),
            p === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(h) {
          if (!this.isStopped) {
            const p = this._events;
            p.push(h), p.length > this._bufferSize && p.shift();
          }
          super.next(h);
        }
        nextTimeWindow(h) {
          this.isStopped ||
            (this._events.push(new l(this._getNow(), h)),
            this._trimBufferThenGetEvents()),
            super.next(h);
        }
        _subscribe(h) {
          const p = this._infiniteTimeWindow,
            c = p ? this._events : this._trimBufferThenGetEvents(),
            n = this.scheduler,
            f = c.length;
          let v;
          if (this.closed) throw new o.N();
          if (
            (this.isStopped || this.hasError
              ? (v = u.w.EMPTY)
              : (this.observers.push(h), (v = new i.W(this, h))),
            n && h.add((h = new d.ht(h, n))),
            p)
          )
            for (let E = 0; E < f && !h.closed; E++) h.next(c[E]);
          else for (let E = 0; E < f && !h.closed; E++) h.next(c[E].value);
          return (
            this.hasError
              ? h.error(this.thrownError)
              : this.isStopped && h.complete(),
            v
          );
        }
        _getNow() {
          return (this.scheduler || g.c).now();
        }
        _trimBufferThenGetEvents() {
          const h = this._getNow(),
            p = this._bufferSize,
            c = this._windowTime,
            n = this._events,
            f = n.length;
          let v = 0;
          for (; v < f && !(h - n[v].time < c); ) v++;
          return f > p && (v = Math.max(v, f - p)), v > 0 && n.splice(0, v), n;
        }
      }
      class l {
        constructor(h, p) {
          (this.time = h), (this.value = p);
        }
      }
    },
    97506: (L, r, t) => {
      "use strict";
      t.d(r, { b: () => e });
      let e = (() => {
        class g {
          constructor(d, o = g.now) {
            (this.SchedulerAction = d), (this.now = o);
          }
          schedule(d, o = 0, i) {
            return new this.SchedulerAction(this, d).schedule(i, o);
          }
        }
        return (g.now = () => Date.now()), g;
      })();
    },
    87922: (L, r, t) => {
      "use strict";
      t.d(r, { Yc: () => s, xQ: () => l });
      var e = t(59488),
        g = t(43619),
        u = t(50144),
        d = t(35093),
        o = t(30992),
        i = t(45137);
      class s extends g.L {
        constructor(p) {
          super(p), (this.destination = p);
        }
      }
      let l = (() => {
        class h extends e.y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [i.b]() {
            return new s(this);
          }
          lift(c) {
            const n = new b(this, this);
            return (n.operator = c), n;
          }
          next(c) {
            if (this.closed) throw new d.N();
            if (!this.isStopped) {
              const { observers: n } = this,
                f = n.length,
                v = n.slice();
              for (let E = 0; E < f; E++) v[E].next(c);
            }
          }
          error(c) {
            if (this.closed) throw new d.N();
            (this.hasError = !0), (this.thrownError = c), (this.isStopped = !0);
            const { observers: n } = this,
              f = n.length,
              v = n.slice();
            for (let E = 0; E < f; E++) v[E].error(c);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new d.N();
            this.isStopped = !0;
            const { observers: c } = this,
              n = c.length,
              f = c.slice();
            for (let v = 0; v < n; v++) f[v].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(c) {
            if (this.closed) throw new d.N();
            return super._trySubscribe(c);
          }
          _subscribe(c) {
            if (this.closed) throw new d.N();
            return this.hasError
              ? (c.error(this.thrownError), u.w.EMPTY)
              : this.isStopped
              ? (c.complete(), u.w.EMPTY)
              : (this.observers.push(c), new o.W(this, c));
          }
          asObservable() {
            const c = new e.y();
            return (c.source = this), c;
          }
        }
        return (h.create = (p, c) => new b(p, c)), h;
      })();
      class b extends l {
        constructor(p, c) {
          super(), (this.destination = p), (this.source = c);
        }
        next(p) {
          const { destination: c } = this;
          c && c.next && c.next(p);
        }
        error(p) {
          const { destination: c } = this;
          c && c.error && this.destination.error(p);
        }
        complete() {
          const { destination: p } = this;
          p && p.complete && this.destination.complete();
        }
        _subscribe(p) {
          const { source: c } = this;
          return c ? this.source.subscribe(p) : u.w.EMPTY;
        }
      }
    },
    30992: (L, r, t) => {
      "use strict";
      t.d(r, { W: () => g });
      var e = t(50144);
      class g extends e.w {
        constructor(d, o) {
          super(),
            (this.subject = d),
            (this.subscriber = o),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const d = this.subject,
            o = d.observers;
          if (
            ((this.subject = null),
            !o || 0 === o.length || d.isStopped || d.closed)
          )
            return;
          const i = o.indexOf(this.subscriber);
          -1 !== i && o.splice(i, 1);
        }
      }
    },
    43619: (L, r, t) => {
      "use strict";
      t.d(r, { L: () => s });
      var e = t(83932),
        g = t(80890),
        u = t(50144),
        d = t(45137),
        o = t(24638),
        i = t(20869);
      class s extends u.w {
        constructor(h, p, c) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = g.c;
              break;
            case 1:
              if (!h) {
                this.destination = g.c;
                break;
              }
              if ("object" == typeof h) {
                h instanceof s
                  ? ((this.syncErrorThrowable = h.syncErrorThrowable),
                    (this.destination = h),
                    h.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new l(this, h)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new l(this, h, p, c));
          }
        }
        [d.b]() {
          return this;
        }
        static create(h, p, c) {
          const n = new s(h, p, c);
          return (n.syncErrorThrowable = !1), n;
        }
        next(h) {
          this.isStopped || this._next(h);
        }
        error(h) {
          this.isStopped || ((this.isStopped = !0), this._error(h));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(h) {
          this.destination.next(h);
        }
        _error(h) {
          this.destination.error(h), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: h } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = h),
            this
          );
        }
      }
      class l extends s {
        constructor(h, p, c, n) {
          super(), (this._parentSubscriber = h);
          let f,
            v = this;
          (0, e.m)(p)
            ? (f = p)
            : p &&
              ((f = p.next),
              (c = p.error),
              (n = p.complete),
              p !== g.c &&
                ((v = Object.create(p)),
                (0, e.m)(v.unsubscribe) && this.add(v.unsubscribe.bind(v)),
                (v.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = v),
            (this._next = f),
            (this._error = c),
            (this._complete = n);
        }
        next(h) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: p } = this;
            o.config.useDeprecatedSynchronousErrorHandling &&
            p.syncErrorThrowable
              ? this.__tryOrSetError(p, this._next, h) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, h);
          }
        }
        error(h) {
          if (!this.isStopped) {
            const { _parentSubscriber: p } = this,
              { useDeprecatedSynchronousErrorHandling: c } = o.config;
            if (this._error)
              c && p.syncErrorThrowable
                ? (this.__tryOrSetError(p, this._error, h), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, h), this.unsubscribe());
            else if (p.syncErrorThrowable)
              c
                ? ((p.syncErrorValue = h), (p.syncErrorThrown = !0))
                : (0, i.z)(h),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), c)) throw h;
              (0, i.z)(h);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: h } = this;
            if (this._complete) {
              const p = () => this._complete.call(this._context);
              o.config.useDeprecatedSynchronousErrorHandling &&
              h.syncErrorThrowable
                ? (this.__tryOrSetError(h, p), this.unsubscribe())
                : (this.__tryOrUnsub(p), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(h, p) {
          try {
            h.call(this._context, p);
          } catch (c) {
            if (
              (this.unsubscribe(),
              o.config.useDeprecatedSynchronousErrorHandling)
            )
              throw c;
            (0, i.z)(c);
          }
        }
        __tryOrSetError(h, p, c) {
          if (!o.config.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            p.call(this._context, c);
          } catch (n) {
            return o.config.useDeprecatedSynchronousErrorHandling
              ? ((h.syncErrorValue = n), (h.syncErrorThrown = !0), !0)
              : ((0, i.z)(n), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: h } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            h.unsubscribe();
        }
      }
    },
    50144: (L, r, t) => {
      "use strict";
      t.d(r, { w: () => o });
      var s,
        e = t(35212),
        g = t(21633),
        u = t(83932),
        d = t(31159);
      class o {
        constructor(l) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            l && ((this._ctorUnsubscribe = !0), (this._unsubscribe = l));
        }
        unsubscribe() {
          let l;
          if (this.closed) return;
          let {
            _parentOrParents: b,
            _ctorUnsubscribe: h,
            _unsubscribe: p,
            _subscriptions: c,
          } = this;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            b instanceof o)
          )
            b.remove(this);
          else if (null !== b)
            for (let n = 0; n < b.length; ++n) b[n].remove(this);
          if ((0, u.m)(p)) {
            h && (this._unsubscribe = void 0);
            try {
              p.call(this);
            } catch (n) {
              l = n instanceof d.B ? i(n.errors) : [n];
            }
          }
          if ((0, e.k)(c)) {
            let n = -1,
              f = c.length;
            for (; ++n < f; ) {
              const v = c[n];
              if ((0, g.K)(v))
                try {
                  v.unsubscribe();
                } catch (E) {
                  (l = l || []),
                    E instanceof d.B ? (l = l.concat(i(E.errors))) : l.push(E);
                }
            }
          }
          if (l) throw new d.B(l);
        }
        add(l) {
          let b = l;
          if (!l) return o.EMPTY;
          switch (typeof l) {
            case "function":
              b = new o(l);
            case "object":
              if (b === this || b.closed || "function" != typeof b.unsubscribe)
                return b;
              if (this.closed) return b.unsubscribe(), b;
              if (!(b instanceof o)) {
                const c = b;
                (b = new o()), (b._subscriptions = [c]);
              }
              break;
            default:
              throw new Error(
                "unrecognized teardown " + l + " added to Subscription."
              );
          }
          let { _parentOrParents: h } = b;
          if (null === h) b._parentOrParents = this;
          else if (h instanceof o) {
            if (h === this) return b;
            b._parentOrParents = [h, this];
          } else {
            if (-1 !== h.indexOf(this)) return b;
            h.push(this);
          }
          const p = this._subscriptions;
          return null === p ? (this._subscriptions = [b]) : p.push(b), b;
        }
        remove(l) {
          const b = this._subscriptions;
          if (b) {
            const h = b.indexOf(l);
            -1 !== h && b.splice(h, 1);
          }
        }
      }
      function i(s) {
        return s.reduce(
          (l, b) => l.concat(b instanceof d.B ? b.errors : b),
          []
        );
      }
      o.EMPTY = (((s = new o()).closed = !0), s);
    },
    24638: (L, r, t) => {
      "use strict";
      t.d(r, { config: () => g });
      let e = !1;
      const g = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(u) {
          if (u) {
            const d = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                d.stack
            );
          } else
            e &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          e = u;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return e;
        },
      };
    },
    24323: (L, r, t) => {
      "use strict";
      t.d(r, { Ds: () => i, IY: () => d, ft: () => l });
      var e = t(43619),
        g = t(59488),
        u = t(90508);
      class d extends e.L {
        constructor(h) {
          super(), (this.parent = h);
        }
        _next(h) {
          this.parent.notifyNext(h);
        }
        _error(h) {
          this.parent.notifyError(h), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class i extends e.L {
        notifyNext(h) {
          this.destination.next(h);
        }
        notifyError(h) {
          this.destination.error(h);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function l(b, h) {
        if (h.closed) return;
        if (b instanceof g.y) return b.subscribe(h);
        let p;
        try {
          p = (0, u.s)(b)(h);
        } catch (c) {
          h.error(c);
        }
        return p;
      }
    },
    53101: (L, r, t) => {
      "use strict";
      t.d(r, { N: () => i, c: () => o });
      var e = t(87922),
        g = t(59488),
        u = t(50144),
        d = t(98153);
      class o extends g.y {
        constructor(p, c) {
          super(),
            (this.source = p),
            (this.subjectFactory = c),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(p) {
          return this.getSubject().subscribe(p);
        }
        getSubject() {
          const p = this._subject;
          return (
            (!p || p.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let p = this._connection;
          return (
            p ||
              ((this._isComplete = !1),
              (p = this._connection = new u.w()),
              p.add(this.source.subscribe(new s(this.getSubject(), this))),
              p.closed && ((this._connection = null), (p = u.w.EMPTY))),
            p
          );
        }
        refCount() {
          return (0, d.x)()(this);
        }
      }
      const i = (() => {
        const h = o.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: h._subscribe },
          _isComplete: { value: h._isComplete, writable: !0 },
          getSubject: { value: h.getSubject },
          connect: { value: h.connect },
          refCount: { value: h.refCount },
        };
      })();
      class s extends e.Yc {
        constructor(p, c) {
          super(p), (this.connectable = c);
        }
        _error(p) {
          this._unsubscribe(), super._error(p);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const p = this.connectable;
          if (p) {
            this.connectable = null;
            const c = p._connection;
            (p._refCount = 0),
              (p._subject = null),
              (p._connection = null),
              c && c.unsubscribe();
          }
        }
      }
    },
    9422: (L, r, t) => {
      "use strict";
      t.d(r, { Ms: () => l, aj: () => s });
      var e = t(54234),
        g = t(35212),
        u = t(59048),
        d = t(78540),
        o = t(75759);
      const i = {};
      function s(...h) {
        let p, c;
        return (
          (0, e.K)(h[h.length - 1]) && (c = h.pop()),
          "function" == typeof h[h.length - 1] && (p = h.pop()),
          1 === h.length && (0, g.k)(h[0]) && (h = h[0]),
          (0, o.n)(h, c).lift(new l(p))
        );
      }
      class l {
        constructor(p) {
          this.resultSelector = p;
        }
        call(p, c) {
          return c.subscribe(new b(p, this.resultSelector));
        }
      }
      class b extends u.L {
        constructor(p, c) {
          super(p),
            (this.resultSelector = c),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(p) {
          this.values.push(i), this.observables.push(p);
        }
        _complete() {
          const p = this.observables,
            c = p.length;
          if (0 === c) this.destination.complete();
          else {
            (this.active = c), (this.toRespond = c);
            for (let n = 0; n < c; n++)
              this.add((0, d.D)(this, p[n], void 0, n));
          }
        }
        notifyComplete(p) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(p, c, n) {
          const f = this.values,
            E = this.toRespond
              ? f[n] === i
                ? --this.toRespond
                : this.toRespond
              : 0;
          (f[n] = c),
            0 === E &&
              (this.resultSelector
                ? this._tryResultSelector(f)
                : this.destination.next(f.slice()));
        }
        _tryResultSelector(p) {
          let c;
          try {
            c = this.resultSelector.apply(this, p);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(c);
        }
      }
    },
    94732: (L, r, t) => {
      "use strict";
      t.d(r, { z: () => u });
      var e = t(9556),
        g = t(94061);
      function u(...d) {
        return (0, g.u)()((0, e.of)(...d));
      }
    },
    73737: (L, r, t) => {
      "use strict";
      t.d(r, { P: () => d });
      var e = t(59488),
        g = t(96056),
        u = t(88805);
      function d(o) {
        return new e.y((i) => {
          let s;
          try {
            s = o();
          } catch (b) {
            return void i.error(b);
          }
          return (s ? (0, g.D)(s) : (0, u.c)()).subscribe(i);
        });
      }
    },
    88805: (L, r, t) => {
      "use strict";
      t.d(r, { E: () => g, c: () => u });
      var e = t(59488);
      const g = new e.y((o) => o.complete());
      function u(o) {
        return o
          ? (function d(o) {
              return new e.y((i) => o.schedule(() => i.complete()));
            })(o)
          : g;
      }
    },
    96056: (L, r, t) => {
      "use strict";
      t.d(r, { D: () => d });
      var e = t(59488),
        g = t(90508),
        u = t(33505);
      function d(o, i) {
        return i ? (0, u.x)(o, i) : o instanceof e.y ? o : new e.y((0, g.s)(o));
      }
    },
    75759: (L, r, t) => {
      "use strict";
      t.d(r, { n: () => d });
      var e = t(59488),
        g = t(40060),
        u = t(71359);
      function d(o, i) {
        return i ? (0, u.r)(o, i) : new e.y((0, g.V)(o));
      }
    },
    14685: (L, r, t) => {
      "use strict";
      t.d(r, { T: () => o });
      var e = t(59488),
        g = t(54234),
        u = t(39019),
        d = t(75759);
      function o(...i) {
        let s = Number.POSITIVE_INFINITY,
          l = null,
          b = i[i.length - 1];
        return (
          (0, g.K)(b)
            ? ((l = i.pop()),
              i.length > 1 &&
                "number" == typeof i[i.length - 1] &&
                (s = i.pop()))
            : "number" == typeof b && (s = i.pop()),
          null === l && 1 === i.length && i[0] instanceof e.y
            ? i[0]
            : (0, u.J)(s)((0, d.n)(i, l))
        );
      }
    },
    9556: (L, r, t) => {
      "use strict";
      t.d(r, { of: () => d });
      var e = t(54234),
        g = t(75759),
        u = t(71359);
      function d(...o) {
        let i = o[o.length - 1];
        return (0, e.K)(i) ? (o.pop(), (0, u.r)(o, i)) : (0, g.n)(o);
      }
    },
    54285: (L, r, t) => {
      "use strict";
      t.d(r, { S3: () => o });
      var e = t(35212),
        g = t(75759),
        u = t(59048),
        d = t(78540);
      function o(...l) {
        if (1 === l.length) {
          if (!(0, e.k)(l[0])) return l[0];
          l = l[0];
        }
        return (0, g.n)(l, void 0).lift(new i());
      }
      class i {
        call(b, h) {
          return h.subscribe(new s(b));
        }
      }
      class s extends u.L {
        constructor(b) {
          super(b),
            (this.hasFirst = !1),
            (this.observables = []),
            (this.subscriptions = []);
        }
        _next(b) {
          this.observables.push(b);
        }
        _complete() {
          const b = this.observables,
            h = b.length;
          if (0 === h) this.destination.complete();
          else {
            for (let p = 0; p < h && !this.hasFirst; p++) {
              const n = (0, d.D)(this, b[p], void 0, p);
              this.subscriptions && this.subscriptions.push(n), this.add(n);
            }
            this.observables = null;
          }
        }
        notifyNext(b, h, p) {
          if (!this.hasFirst) {
            this.hasFirst = !0;
            for (let c = 0; c < this.subscriptions.length; c++)
              if (c !== p) {
                let n = this.subscriptions[c];
                n.unsubscribe(), this.remove(n);
              }
            this.subscriptions = null;
          }
          this.destination.next(h);
        }
      }
    },
    2040: (L, r, t) => {
      "use strict";
      t.d(r, { _: () => g });
      var e = t(59488);
      function g(d, o) {
        return new e.y(
          o
            ? (i) => o.schedule(u, 0, { error: d, subscriber: i })
            : (i) => i.error(d)
        );
      }
      function u({ error: d, subscriber: o }) {
        o.error(d);
      }
    },
    55580: (L, r, t) => {
      "use strict";
      t.d(r, { H: () => o });
      var e = t(59488),
        g = t(22229),
        u = t(43618),
        d = t(54234);
      function o(s = 0, l, b) {
        let h = -1;
        return (
          (0, u.k)(l)
            ? (h = Number(l) < 1 ? 1 : Number(l))
            : (0, d.K)(l) && (b = l),
          (0, d.K)(b) || (b = g.P),
          new e.y((p) => {
            const c = (0, u.k)(s) ? s : +s - b.now();
            return b.schedule(i, c, { index: 0, period: h, subscriber: p });
          })
        );
      }
      function i(s) {
        const { index: l, period: b, subscriber: h } = s;
        if ((h.next(l), !h.closed)) {
          if (-1 === b) return h.complete();
          (s.index = l + 1), this.schedule(s, b);
        }
      }
    },
    85289: (L, r, t) => {
      "use strict";
      t.d(r, { $R: () => i, mx: () => s });
      var e = t(75759),
        g = t(35212),
        u = t(43619),
        d = t(54693),
        o = t(24323);
      function i(...c) {
        const n = c[c.length - 1];
        return (
          "function" == typeof n && c.pop(), (0, e.n)(c, void 0).lift(new s(n))
        );
      }
      class s {
        constructor(n) {
          this.resultSelector = n;
        }
        call(n, f) {
          return f.subscribe(new l(n, this.resultSelector));
        }
      }
      class l extends u.L {
        constructor(n, f, v = Object.create(null)) {
          super(n),
            (this.resultSelector = f),
            (this.iterators = []),
            (this.active = 0),
            (this.resultSelector = "function" == typeof f ? f : void 0);
        }
        _next(n) {
          const f = this.iterators;
          (0, g.k)(n)
            ? f.push(new h(n))
            : f.push(
                "function" == typeof n[d.hZ]
                  ? new b(n[d.hZ]())
                  : new p(this.destination, this, n)
              );
        }
        _complete() {
          const n = this.iterators,
            f = n.length;
          if ((this.unsubscribe(), 0 !== f)) {
            this.active = f;
            for (let v = 0; v < f; v++) {
              let E = n[v];
              E.stillUnsubscribed
                ? this.destination.add(E.subscribe())
                : this.active--;
            }
          } else this.destination.complete();
        }
        notifyInactive() {
          this.active--, 0 === this.active && this.destination.complete();
        }
        checkIterators() {
          const n = this.iterators,
            f = n.length,
            v = this.destination;
          for (let C = 0; C < f; C++) {
            let A = n[C];
            if ("function" == typeof A.hasValue && !A.hasValue()) return;
          }
          let E = !1;
          const w = [];
          for (let C = 0; C < f; C++) {
            let A = n[C],
              S = A.next();
            if ((A.hasCompleted() && (E = !0), S.done))
              return void v.complete();
            w.push(S.value);
          }
          this.resultSelector ? this._tryresultSelector(w) : v.next(w),
            E && v.complete();
        }
        _tryresultSelector(n) {
          let f;
          try {
            f = this.resultSelector.apply(this, n);
          } catch (v) {
            return void this.destination.error(v);
          }
          this.destination.next(f);
        }
      }
      class b {
        constructor(n) {
          (this.iterator = n), (this.nextResult = n.next());
        }
        hasValue() {
          return !0;
        }
        next() {
          const n = this.nextResult;
          return (this.nextResult = this.iterator.next()), n;
        }
        hasCompleted() {
          const n = this.nextResult;
          return !(!n || !n.done);
        }
      }
      class h {
        constructor(n) {
          (this.array = n),
            (this.index = 0),
            (this.length = 0),
            (this.length = n.length);
        }
        [d.hZ]() {
          return this;
        }
        next(n) {
          const f = this.index++;
          return f < this.length
            ? { value: this.array[f], done: !1 }
            : { value: null, done: !0 };
        }
        hasValue() {
          return this.array.length > this.index;
        }
        hasCompleted() {
          return this.array.length === this.index;
        }
      }
      class p extends o.Ds {
        constructor(n, f, v) {
          super(n),
            (this.parent = f),
            (this.observable = v),
            (this.stillUnsubscribed = !0),
            (this.buffer = []),
            (this.isComplete = !1);
        }
        [d.hZ]() {
          return this;
        }
        next() {
          const n = this.buffer;
          return 0 === n.length && this.isComplete
            ? { value: null, done: !0 }
            : { value: n.shift(), done: !1 };
        }
        hasValue() {
          return this.buffer.length > 0;
        }
        hasCompleted() {
          return 0 === this.buffer.length && this.isComplete;
        }
        notifyComplete() {
          this.buffer.length > 0
            ? ((this.isComplete = !0), this.parent.notifyInactive())
            : this.destination.complete();
        }
        notifyNext(n) {
          this.buffer.push(n), this.parent.checkIterators();
        }
        subscribe() {
          return (0, o.ft)(this.observable, new o.IY(this));
        }
      }
    },
    94061: (L, r, t) => {
      "use strict";
      t.d(r, { u: () => g });
      var e = t(39019);
      function g() {
        return (0, e.J)(1);
      }
    },
    6167: (L, r, t) => {
      "use strict";
      t.d(r, { h: () => g });
      var e = t(43619);
      function g(o, i) {
        return function (l) {
          return l.lift(new u(o, i));
        };
      }
      class u {
        constructor(i, s) {
          (this.predicate = i), (this.thisArg = s);
        }
        call(i, s) {
          return s.subscribe(new d(i, this.predicate, this.thisArg));
        }
      }
      class d extends e.L {
        constructor(i, s, l) {
          super(i), (this.predicate = s), (this.thisArg = l), (this.count = 0);
        }
        _next(i) {
          let s;
          try {
            s = this.predicate.call(this.thisArg, i, this.count++);
          } catch (l) {
            return void this.destination.error(l);
          }
          s && this.destination.next(i);
        }
      }
    },
    80374: (L, r, t) => {
      "use strict";
      t.d(r, { T: () => b, v: () => o });
      var e = t(43619),
        g = t(50144),
        u = t(59488),
        d = t(87922);
      function o(p, c, n, f) {
        return (v) => v.lift(new i(p, c, n, f));
      }
      class i {
        constructor(c, n, f, v) {
          (this.keySelector = c),
            (this.elementSelector = n),
            (this.durationSelector = f),
            (this.subjectSelector = v);
        }
        call(c, n) {
          return n.subscribe(
            new s(
              c,
              this.keySelector,
              this.elementSelector,
              this.durationSelector,
              this.subjectSelector
            )
          );
        }
      }
      class s extends e.L {
        constructor(c, n, f, v, E) {
          super(c),
            (this.keySelector = n),
            (this.elementSelector = f),
            (this.durationSelector = v),
            (this.subjectSelector = E),
            (this.groups = null),
            (this.attemptedToUnsubscribe = !1),
            (this.count = 0);
        }
        _next(c) {
          let n;
          try {
            n = this.keySelector(c);
          } catch (f) {
            return void this.error(f);
          }
          this._group(c, n);
        }
        _group(c, n) {
          let f = this.groups;
          f || (f = this.groups = new Map());
          let E,
            v = f.get(n);
          if (this.elementSelector)
            try {
              E = this.elementSelector(c);
            } catch (w) {
              this.error(w);
            }
          else E = c;
          if (!v) {
            (v = this.subjectSelector ? this.subjectSelector() : new d.xQ()),
              f.set(n, v);
            const w = new b(n, v, this);
            if ((this.destination.next(w), this.durationSelector)) {
              let C;
              try {
                C = this.durationSelector(new b(n, v));
              } catch (A) {
                return void this.error(A);
              }
              this.add(C.subscribe(new l(n, v, this)));
            }
          }
          v.closed || v.next(E);
        }
        _error(c) {
          const n = this.groups;
          n &&
            (n.forEach((f, v) => {
              f.error(c);
            }),
            n.clear()),
            this.destination.error(c);
        }
        _complete() {
          const c = this.groups;
          c &&
            (c.forEach((n, f) => {
              n.complete();
            }),
            c.clear()),
            this.destination.complete();
        }
        removeGroup(c) {
          this.groups.delete(c);
        }
        unsubscribe() {
          this.closed ||
            ((this.attemptedToUnsubscribe = !0),
            0 === this.count && super.unsubscribe());
        }
      }
      class l extends e.L {
        constructor(c, n, f) {
          super(n), (this.key = c), (this.group = n), (this.parent = f);
        }
        _next(c) {
          this.complete();
        }
        _unsubscribe() {
          const { parent: c, key: n } = this;
          (this.key = this.parent = null), c && c.removeGroup(n);
        }
      }
      class b extends u.y {
        constructor(c, n, f) {
          super(),
            (this.key = c),
            (this.groupSubject = n),
            (this.refCountSubscription = f);
        }
        _subscribe(c) {
          const n = new g.w(),
            { refCountSubscription: f, groupSubject: v } = this;
          return f && !f.closed && n.add(new h(f)), n.add(v.subscribe(c)), n;
        }
      }
      class h extends g.w {
        constructor(c) {
          super(), (this.parent = c), c.count++;
        }
        unsubscribe() {
          const c = this.parent;
          !c.closed &&
            !this.closed &&
            (super.unsubscribe(),
            (c.count -= 1),
            0 === c.count && c.attemptedToUnsubscribe && c.unsubscribe());
        }
      }
    },
    32974: (L, r, t) => {
      "use strict";
      t.d(r, { U: () => g });
      var e = t(43619);
      function g(o, i) {
        return function (l) {
          if ("function" != typeof o)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return l.lift(new u(o, i));
        };
      }
      class u {
        constructor(i, s) {
          (this.project = i), (this.thisArg = s);
        }
        call(i, s) {
          return s.subscribe(new d(i, this.project, this.thisArg));
        }
      }
      class d extends e.L {
        constructor(i, s, l) {
          super(i),
            (this.project = s),
            (this.count = 0),
            (this.thisArg = l || this);
        }
        _next(i) {
          let s;
          try {
            s = this.project.call(this.thisArg, i, this.count++);
          } catch (l) {
            return void this.destination.error(l);
          }
          this.destination.next(s);
        }
      }
    },
    39019: (L, r, t) => {
      "use strict";
      t.d(r, { J: () => u });
      var e = t(13223),
        g = t(40601);
      function u(d = Number.POSITIVE_INFINITY) {
        return (0, e.zg)(g.y, d);
      }
    },
    13223: (L, r, t) => {
      "use strict";
      t.d(r, { VS: () => s, zg: () => d });
      var e = t(32974),
        g = t(96056),
        u = t(24323);
      function d(l, b, h = Number.POSITIVE_INFINITY) {
        return "function" == typeof b
          ? (p) =>
              p.pipe(
                d(
                  (c, n) =>
                    (0, g.D)(l(c, n)).pipe((0, e.U)((f, v) => b(c, f, n, v))),
                  h
                )
              )
          : ("number" == typeof b && (h = b), (p) => p.lift(new o(l, h)));
      }
      class o {
        constructor(b, h = Number.POSITIVE_INFINITY) {
          (this.project = b), (this.concurrent = h);
        }
        call(b, h) {
          return h.subscribe(new i(b, this.project, this.concurrent));
        }
      }
      class i extends u.Ds {
        constructor(b, h, p = Number.POSITIVE_INFINITY) {
          super(b),
            (this.project = h),
            (this.concurrent = p),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(b) {
          this.active < this.concurrent
            ? this._tryNext(b)
            : this.buffer.push(b);
        }
        _tryNext(b) {
          let h;
          const p = this.index++;
          try {
            h = this.project(b, p);
          } catch (c) {
            return void this.destination.error(c);
          }
          this.active++, this._innerSub(h);
        }
        _innerSub(b) {
          const h = new u.IY(this),
            p = this.destination;
          p.add(h);
          const c = (0, u.ft)(b, h);
          c !== h && p.add(c);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(b) {
          this.destination.next(b);
        }
        notifyComplete() {
          const b = this.buffer;
          this.active--,
            b.length > 0
              ? this._next(b.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      const s = d;
    },
    87167: (L, r, t) => {
      "use strict";
      t.d(r, { QV: () => u, ht: () => o });
      var e = t(43619),
        g = t(29944);
      function u(s, l = 0) {
        return function (h) {
          return h.lift(new d(s, l));
        };
      }
      class d {
        constructor(l, b = 0) {
          (this.scheduler = l), (this.delay = b);
        }
        call(l, b) {
          return b.subscribe(new o(l, this.scheduler, this.delay));
        }
      }
      class o extends e.L {
        constructor(l, b, h = 0) {
          super(l), (this.scheduler = b), (this.delay = h);
        }
        static dispatch(l) {
          const { notification: b, destination: h } = l;
          b.observe(h), this.unsubscribe();
        }
        scheduleMessage(l) {
          this.destination.add(
            this.scheduler.schedule(
              o.dispatch,
              this.delay,
              new i(l, this.destination)
            )
          );
        }
        _next(l) {
          this.scheduleMessage(g.P.createNext(l));
        }
        _error(l) {
          this.scheduleMessage(g.P.createError(l)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(g.P.createComplete()), this.unsubscribe();
        }
      }
      class i {
        constructor(l, b) {
          (this.notification = l), (this.destination = b);
        }
      }
    },
    98153: (L, r, t) => {
      "use strict";
      t.d(r, { x: () => g });
      var e = t(43619);
      function g() {
        return function (i) {
          return i.lift(new u(i));
        };
      }
      class u {
        constructor(i) {
          this.connectable = i;
        }
        call(i, s) {
          const { connectable: l } = this;
          l._refCount++;
          const b = new d(i, l),
            h = s.subscribe(b);
          return b.closed || (b.connection = l.connect()), h;
        }
      }
      class d extends e.L {
        constructor(i, s) {
          super(i), (this.connectable = s);
        }
        _unsubscribe() {
          const { connectable: i } = this;
          if (!i) return void (this.connection = null);
          this.connectable = null;
          const s = i._refCount;
          if (s <= 0) return void (this.connection = null);
          if (((i._refCount = s - 1), s > 1))
            return void (this.connection = null);
          const { connection: l } = this,
            b = i._connection;
          (this.connection = null), b && (!l || b === l) && b.unsubscribe();
        }
      }
    },
    71359: (L, r, t) => {
      "use strict";
      t.d(r, { r: () => u });
      var e = t(59488),
        g = t(50144);
      function u(d, o) {
        return new e.y((i) => {
          const s = new g.w();
          let l = 0;
          return (
            s.add(
              o.schedule(function () {
                l !== d.length
                  ? (i.next(d[l++]), i.closed || s.add(this.schedule()))
                  : i.complete();
              })
            ),
            s
          );
        });
      }
    },
    33505: (L, r, t) => {
      "use strict";
      t.d(r, { x: () => n });
      var e = t(59488),
        g = t(50144),
        u = t(10402),
        i = t(71359),
        s = t(54693),
        h = t(84140),
        p = t(15555);
      function n(f, v) {
        if (null != f) {
          if (
            (function b(f) {
              return f && "function" == typeof f[u.L];
            })(f)
          )
            return (function d(f, v) {
              return new e.y((E) => {
                const w = new g.w();
                return (
                  w.add(
                    v.schedule(() => {
                      const C = f[u.L]();
                      w.add(
                        C.subscribe({
                          next(A) {
                            w.add(v.schedule(() => E.next(A)));
                          },
                          error(A) {
                            w.add(v.schedule(() => E.error(A)));
                          },
                          complete() {
                            w.add(v.schedule(() => E.complete()));
                          },
                        })
                      );
                    })
                  ),
                  w
                );
              });
            })(f, v);
          if ((0, h.t)(f))
            return (function o(f, v) {
              return new e.y((E) => {
                const w = new g.w();
                return (
                  w.add(
                    v.schedule(() =>
                      f.then(
                        (C) => {
                          w.add(
                            v.schedule(() => {
                              E.next(C), w.add(v.schedule(() => E.complete()));
                            })
                          );
                        },
                        (C) => {
                          w.add(v.schedule(() => E.error(C)));
                        }
                      )
                    )
                  ),
                  w
                );
              });
            })(f, v);
          if ((0, p.z)(f)) return (0, i.r)(f, v);
          if (
            (function c(f) {
              return f && "function" == typeof f[s.hZ];
            })(f) ||
            "string" == typeof f
          )
            return (function l(f, v) {
              if (!f) throw new Error("Iterable cannot be null");
              return new e.y((E) => {
                const w = new g.w();
                let C;
                return (
                  w.add(() => {
                    C && "function" == typeof C.return && C.return();
                  }),
                  w.add(
                    v.schedule(() => {
                      (C = f[s.hZ]()),
                        w.add(
                          v.schedule(function () {
                            if (E.closed) return;
                            let A, S;
                            try {
                              const M = C.next();
                              (A = M.value), (S = M.done);
                            } catch (M) {
                              return void E.error(M);
                            }
                            S ? E.complete() : (E.next(A), this.schedule());
                          })
                        );
                    })
                  ),
                  w
                );
              });
            })(f, v);
        }
        throw new TypeError(
          ((null !== f && typeof f) || f) + " is not observable"
        );
      }
    },
    62637: (L, r, t) => {
      "use strict";
      t.d(r, { o: () => u });
      var e = t(50144);
      class g extends e.w {
        constructor(o, i) {
          super();
        }
        schedule(o, i = 0) {
          return this;
        }
      }
      class u extends g {
        constructor(o, i) {
          super(o, i),
            (this.scheduler = o),
            (this.work = i),
            (this.pending = !1);
        }
        schedule(o, i = 0) {
          if (this.closed) return this;
          this.state = o;
          const s = this.id,
            l = this.scheduler;
          return (
            null != s && (this.id = this.recycleAsyncId(l, s, i)),
            (this.pending = !0),
            (this.delay = i),
            (this.id = this.id || this.requestAsyncId(l, this.id, i)),
            this
          );
        }
        requestAsyncId(o, i, s = 0) {
          return setInterval(o.flush.bind(o, this), s);
        }
        recycleAsyncId(o, i, s = 0) {
          if (null !== s && this.delay === s && !1 === this.pending) return i;
          clearInterval(i);
        }
        execute(o, i) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const s = this._execute(o, i);
          if (s) return s;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(o, i) {
          let l,
            s = !1;
          try {
            this.work(o);
          } catch (b) {
            (s = !0), (l = (!!b && b) || new Error(b));
          }
          if (s) return this.unsubscribe(), l;
        }
        _unsubscribe() {
          const o = this.id,
            i = this.scheduler,
            s = i.actions,
            l = s.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== l && s.splice(l, 1),
            null != o && (this.id = this.recycleAsyncId(i, o, null)),
            (this.delay = null);
        }
      }
    },
    41680: (L, r, t) => {
      "use strict";
      t.d(r, { v: () => g });
      var e = t(97506);
      class g extends e.b {
        constructor(d, o = e.b.now) {
          super(d, () =>
            g.delegate && g.delegate !== this ? g.delegate.now() : o()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(d, o = 0, i) {
          return g.delegate && g.delegate !== this
            ? g.delegate.schedule(d, o, i)
            : super.schedule(d, o, i);
        }
        flush(d) {
          const { actions: o } = this;
          if (this.active) return void o.push(d);
          let i;
          this.active = !0;
          do {
            if ((i = d.execute(d.state, d.delay))) break;
          } while ((d = o.shift()));
          if (((this.active = !1), i)) {
            for (; (d = o.shift()); ) d.unsubscribe();
            throw i;
          }
        }
      }
    },
    98704: (L, r, t) => {
      "use strict";
      t.d(r, { e: () => c, E: () => p });
      let e = 1;
      const g = Promise.resolve(),
        u = {};
      function d(n) {
        return n in u && (delete u[n], !0);
      }
      const o = {
        setImmediate(n) {
          const f = e++;
          return (u[f] = !0), g.then(() => d(f) && n()), f;
        },
        clearImmediate(n) {
          d(n);
        },
      };
      var s = t(62637),
        b = t(41680);
      const p = new (class h extends b.v {
          flush(f) {
            (this.active = !0), (this.scheduled = void 0);
            const { actions: v } = this;
            let E,
              w = -1,
              C = v.length;
            f = f || v.shift();
            do {
              if ((E = f.execute(f.state, f.delay))) break;
            } while (++w < C && (f = v.shift()));
            if (((this.active = !1), E)) {
              for (; ++w < C && (f = v.shift()); ) f.unsubscribe();
              throw E;
            }
          }
        })(
          class l extends s.o {
            constructor(f, v) {
              super(f, v), (this.scheduler = f), (this.work = v);
            }
            requestAsyncId(f, v, E = 0) {
              return null !== E && E > 0
                ? super.requestAsyncId(f, v, E)
                : (f.actions.push(this),
                  f.scheduled ||
                    (f.scheduled = o.setImmediate(f.flush.bind(f, null))));
            }
            recycleAsyncId(f, v, E = 0) {
              if ((null !== E && E > 0) || (null === E && this.delay > 0))
                return super.recycleAsyncId(f, v, E);
              0 === f.actions.length &&
                (o.clearImmediate(v), (f.scheduled = void 0));
            }
          }
        ),
        c = p;
    },
    22229: (L, r, t) => {
      "use strict";
      t.d(r, { P: () => d, z: () => u });
      var e = t(62637);
      const u = new (t(41680).v)(e.o),
        d = u;
    },
    1044: (L, r, t) => {
      "use strict";
      t.d(r, { c: () => i, N: () => o });
      var e = t(62637),
        u = t(41680);
      const o = new (class d extends u.v {})(
          class g extends e.o {
            constructor(l, b) {
              super(l, b), (this.scheduler = l), (this.work = b);
            }
            schedule(l, b = 0) {
              return b > 0
                ? super.schedule(l, b)
                : ((this.delay = b),
                  (this.state = l),
                  this.scheduler.flush(this),
                  this);
            }
            execute(l, b) {
              return b > 0 || this.closed
                ? super.execute(l, b)
                : this._execute(l, b);
            }
            requestAsyncId(l, b, h = 0) {
              return (null !== h && h > 0) || (null === h && this.delay > 0)
                ? super.requestAsyncId(l, b, h)
                : l.flush(this);
            }
          }
        ),
        i = o;
    },
    54693: (L, r, t) => {
      "use strict";
      t.d(r, { hZ: () => g });
      const g = (function e() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    10402: (L, r, t) => {
      "use strict";
      t.d(r, { L: () => e });
      const e =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    45137: (L, r, t) => {
      "use strict";
      t.d(r, { b: () => e });
      const e =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
    },
    34477: (L, r, t) => {
      "use strict";
      t.d(r, { W: () => g });
      const g = (() => {
        function u() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (u.prototype = Object.create(Error.prototype)), u;
      })();
    },
    8685: (L, r, t) => {
      "use strict";
      t.d(r, { K: () => g });
      const g = (() => {
        function u() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (u.prototype = Object.create(Error.prototype)), u;
      })();
    },
    35093: (L, r, t) => {
      "use strict";
      t.d(r, { N: () => g });
      const g = (() => {
        function u() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (u.prototype = Object.create(Error.prototype)), u;
      })();
    },
    95025: (L, r, t) => {
      "use strict";
      t.d(r, { W: () => g });
      const g = (() => {
        function u() {
          return (
            Error.call(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            this
          );
        }
        return (u.prototype = Object.create(Error.prototype)), u;
      })();
    },
    31159: (L, r, t) => {
      "use strict";
      t.d(r, { B: () => g });
      const g = (() => {
        function u(d) {
          return (
            Error.call(this),
            (this.message = d
              ? `${d.length} errors occurred during unsubscription:\n${d
                  .map((o, i) => `${i + 1}) ${o.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = d),
            this
          );
        }
        return (u.prototype = Object.create(Error.prototype)), u;
      })();
    },
    79618: (L, r, t) => {
      "use strict";
      t.d(r, { _: () => g });
      var e = t(43619);
      function g(u) {
        for (; u; ) {
          const { closed: d, destination: o, isStopped: i } = u;
          if (d || i) return !1;
          u = o && o instanceof e.L ? o : null;
        }
        return !0;
      }
    },
    20869: (L, r, t) => {
      "use strict";
      function e(g) {
        setTimeout(() => {
          throw g;
        }, 0);
      }
      t.d(r, { z: () => e });
    },
    40601: (L, r, t) => {
      "use strict";
      function e(g) {
        return g;
      }
      t.d(r, { y: () => e });
    },
    35212: (L, r, t) => {
      "use strict";
      t.d(r, { k: () => e });
      const e = Array.isArray || ((g) => g && "number" == typeof g.length);
    },
    15555: (L, r, t) => {
      "use strict";
      t.d(r, { z: () => e });
      const e = (g) =>
        g && "number" == typeof g.length && "function" != typeof g;
    },
    83932: (L, r, t) => {
      "use strict";
      function e(g) {
        return "function" == typeof g;
      }
      t.d(r, { m: () => e });
    },
    43618: (L, r, t) => {
      "use strict";
      t.d(r, { k: () => g });
      var e = t(35212);
      function g(u) {
        return !(0, e.k)(u) && u - parseFloat(u) + 1 >= 0;
      }
    },
    21633: (L, r, t) => {
      "use strict";
      function e(g) {
        return null !== g && "object" == typeof g;
      }
      t.d(r, { K: () => e });
    },
    84140: (L, r, t) => {
      "use strict";
      function e(g) {
        return (
          !!g && "function" != typeof g.subscribe && "function" == typeof g.then
        );
      }
      t.d(r, { t: () => e });
    },
    54234: (L, r, t) => {
      "use strict";
      function e(g) {
        return g && "function" == typeof g.schedule;
      }
      t.d(r, { K: () => e });
    },
    11027: (L, r, t) => {
      "use strict";
      function e() {}
      t.d(r, { Z: () => e });
    },
    1958: (L, r, t) => {
      "use strict";
      function e(g, u) {
        function d() {
          return !d.pred.apply(d.thisArg, arguments);
        }
        return (d.pred = g), (d.thisArg = u), d;
      }
      t.d(r, { f: () => e });
    },
    77817: (L, r, t) => {
      "use strict";
      t.d(r, { U: () => u, z: () => g });
      var e = t(40601);
      function g(...d) {
        return u(d);
      }
      function u(d) {
        return 0 === d.length
          ? e.y
          : 1 === d.length
          ? d[0]
          : function (i) {
              return d.reduce((s, l) => l(s), i);
            };
      }
    },
    90508: (L, r, t) => {
      "use strict";
      t.d(r, { s: () => p });
      var e = t(40060),
        g = t(20869),
        d = t(54693),
        i = t(10402),
        l = t(15555),
        b = t(84140),
        h = t(21633);
      const p = (c) => {
        if (c && "function" == typeof c[i.L])
          return ((c) => (n) => {
            const f = c[i.L]();
            if ("function" != typeof f.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return f.subscribe(n);
          })(c);
        if ((0, l.z)(c)) return (0, e.V)(c);
        if ((0, b.t)(c))
          return ((c) => (n) => (
            c
              .then(
                (f) => {
                  n.closed || (n.next(f), n.complete());
                },
                (f) => n.error(f)
              )
              .then(null, g.z),
            n
          ))(c);
        if (c && "function" == typeof c[d.hZ])
          return ((c) => (n) => {
            const f = c[d.hZ]();
            for (;;) {
              let v;
              try {
                v = f.next();
              } catch (E) {
                return n.error(E), n;
              }
              if (v.done) {
                n.complete();
                break;
              }
              if ((n.next(v.value), n.closed)) break;
            }
            return (
              "function" == typeof f.return &&
                n.add(() => {
                  f.return && f.return();
                }),
              n
            );
          })(c);
        {
          const f = `You provided ${
            (0, h.K)(c) ? "an invalid object" : `'${c}'`
          } where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
          throw new TypeError(f);
        }
      };
    },
    40060: (L, r, t) => {
      "use strict";
      t.d(r, { V: () => e });
      const e = (g) => (u) => {
        for (let d = 0, o = g.length; d < o && !u.closed; d++) u.next(g[d]);
        u.complete();
      };
    },
    78540: (L, r, t) => {
      "use strict";
      t.d(r, { D: () => o });
      var e = t(43619);
      class g extends e.L {
        constructor(s, l, b) {
          super(),
            (this.parent = s),
            (this.outerValue = l),
            (this.outerIndex = b),
            (this.index = 0);
        }
        _next(s) {
          this.parent.notifyNext(
            this.outerValue,
            s,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(s) {
          this.parent.notifyError(s, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var u = t(90508),
        d = t(59488);
      function o(i, s, l, b, h = new g(i, l, b)) {
        if (!h.closed)
          return s instanceof d.y ? s.subscribe(h) : (0, u.s)(s)(h);
      }
    },
    58551: (L, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          audit: () => g,
          auditTime: () => s,
          buffer: () => l,
          bufferCount: () => c,
          bufferTime: () => w,
          bufferToggle: () => G,
          bufferWhen: () => P,
          catchError: () => I,
          combineAll: () => J,
          combineLatest: () => de,
          concat: () => be,
          concatAll: () => Q.u,
          concatMap: () => V,
          concatMapTo: () => ee,
          count: () => oe,
          debounce: () => ne,
          debounceTime: () => Se,
          defaultIfEmpty: () => _e,
          delay: () => te,
          delayWhen: () => Fe,
          dematerialize: () => ke,
          distinct: () => He,
          distinctUntilChanged: () => $e,
          distinctUntilKeyChanged: () => We,
          elementAt: () => Ce,
          endWith: () => De,
          every: () => je,
          exhaust: () => Qe,
          exhaustMap: () => ut,
          expand: () => dt,
          filter: () => ze.h,
          finalize: () => gt,
          find: () => yt,
          findIndex: () => Mt,
          first: () => xt,
          flatMap: () => B.VS,
          groupBy: () => Ct.v,
          ignoreElements: () => Zt,
          isEmpty: () => Xt,
          last: () => nr,
          map: () => it.U,
          mapTo: () => ir,
          materialize: () => ar,
          max: () => fr,
          merge: () => pr,
          mergeAll: () => gr.J,
          mergeMap: () => B.zg,
          mergeMapTo: () => mr,
          mergeScan: () => br,
          min: () => wr,
          multicast: () => Et,
          observeOn: () => Sr.QV,
          onErrorResumeNext: () => Mr,
          pairwise: () => Cr,
          partition: () => Tr,
          pluck: () => Or,
          publish: () => Lr,
          publishBehavior: () => Dr,
          publishLast: () => Br,
          publishReplay: () => jr,
          race: () => Ur,
          reduce: () => Ot,
          refCount: () => Ht.x,
          repeat: () => Wr,
          repeatWhen: () => $r,
          retry: () => Gr,
          retryWhen: () => Zr,
          sample: () => Xr,
          sampleTime: () => tn,
          scan: () => Tt,
          sequenceEqual: () => on,
          share: () => hn,
          shareReplay: () => fn,
          single: () => pn,
          skip: () => bn,
          skipLast: () => wn,
          skipUntil: () => Sn,
          skipWhile: () => Cn,
          startWith: () => An,
          subscribeOn: () => Tn,
          switchAll: () => Pn,
          switchMap: () => Rt,
          switchMapTo: () => Dn,
          take: () => ye,
          takeLast: () => At,
          takeUntil: () => kn,
          takeWhile: () => Fn,
          tap: () => $n,
          throttle: () => Gn,
          throttleTime: () => Zn,
          throwIfEmpty: () => qe,
          timeInterval: () => ei,
          timeout: () => si,
          timeoutWith: () => Vt,
          timestamp: () => oi,
          toArray: () => ui,
          window: () => li,
          windowCount: () => di,
          windowTime: () => mi,
          windowToggle: () => Ei,
          windowWhen: () => xi,
          withLatestFrom: () => Ii,
          zip: () => Oi,
          zipAll: () => Ni,
        });
      var e = t(24323);
      function g(k) {
        return function (y) {
          return y.lift(new u(k));
        };
      }
      class u {
        constructor(a) {
          this.durationSelector = a;
        }
        call(a, y) {
          return y.subscribe(new d(a, this.durationSelector));
        }
      }
      class d extends e.Ds {
        constructor(a, y) {
          super(a), (this.durationSelector = y), (this.hasValue = !1);
        }
        _next(a) {
          if (((this.value = a), (this.hasValue = !0), !this.throttled)) {
            let y;
            try {
              const { durationSelector: Y } = this;
              y = Y(a);
            } catch (Y) {
              return this.destination.error(Y);
            }
            const j = (0, e.ft)(y, new e.IY(this));
            !j || j.closed
              ? this.clearThrottle()
              : this.add((this.throttled = j));
          }
        }
        clearThrottle() {
          const { value: a, hasValue: y, throttled: j } = this;
          j && (this.remove(j), (this.throttled = void 0), j.unsubscribe()),
            y &&
              ((this.value = void 0),
              (this.hasValue = !1),
              this.destination.next(a));
        }
        notifyNext() {
          this.clearThrottle();
        }
        notifyComplete() {
          this.clearThrottle();
        }
      }
      var o = t(22229),
        i = t(55580);
      function s(k, a = o.P) {
        return g(() => (0, i.H)(k, a));
      }
      function l(k) {
        return function (y) {
          return y.lift(new b(k));
        };
      }
      class b {
        constructor(a) {
          this.closingNotifier = a;
        }
        call(a, y) {
          return y.subscribe(new h(a, this.closingNotifier));
        }
      }
      class h extends e.Ds {
        constructor(a, y) {
          super(a), (this.buffer = []), this.add((0, e.ft)(y, new e.IY(this)));
        }
        _next(a) {
          this.buffer.push(a);
        }
        notifyNext() {
          const a = this.buffer;
          (this.buffer = []), this.destination.next(a);
        }
      }
      var p = t(43619);
      function c(k, a = null) {
        return function (j) {
          return j.lift(new n(k, a));
        };
      }
      class n {
        constructor(a, y) {
          (this.bufferSize = a),
            (this.startBufferEvery = y),
            (this.subscriberClass = y && a !== y ? v : f);
        }
        call(a, y) {
          return y.subscribe(
            new this.subscriberClass(a, this.bufferSize, this.startBufferEvery)
          );
        }
      }
      class f extends p.L {
        constructor(a, y) {
          super(a), (this.bufferSize = y), (this.buffer = []);
        }
        _next(a) {
          const y = this.buffer;
          y.push(a),
            y.length == this.bufferSize &&
              (this.destination.next(y), (this.buffer = []));
        }
        _complete() {
          const a = this.buffer;
          a.length > 0 && this.destination.next(a), super._complete();
        }
      }
      class v extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.bufferSize = y),
            (this.startBufferEvery = j),
            (this.buffers = []),
            (this.count = 0);
        }
        _next(a) {
          const {
            bufferSize: y,
            startBufferEvery: j,
            buffers: Y,
            count: ge,
          } = this;
          this.count++, ge % j == 0 && Y.push([]);
          for (let Ne = Y.length; Ne--; ) {
            const Ye = Y[Ne];
            Ye.push(a),
              Ye.length === y && (Y.splice(Ne, 1), this.destination.next(Ye));
          }
        }
        _complete() {
          const { buffers: a, destination: y } = this;
          for (; a.length > 0; ) {
            let j = a.shift();
            j.length > 0 && y.next(j);
          }
          super._complete();
        }
      }
      var E = t(54234);
      function w(k) {
        let a = arguments.length,
          y = o.P;
        (0, E.K)(arguments[arguments.length - 1]) &&
          ((y = arguments[arguments.length - 1]), a--);
        let j = null;
        a >= 2 && (j = arguments[1]);
        let Y = Number.POSITIVE_INFINITY;
        return (
          a >= 3 && (Y = arguments[2]),
          function (Ne) {
            return Ne.lift(new C(k, j, Y, y));
          }
        );
      }
      class C {
        constructor(a, y, j, Y) {
          (this.bufferTimeSpan = a),
            (this.bufferCreationInterval = y),
            (this.maxBufferSize = j),
            (this.scheduler = Y);
        }
        call(a, y) {
          return y.subscribe(
            new S(
              a,
              this.bufferTimeSpan,
              this.bufferCreationInterval,
              this.maxBufferSize,
              this.scheduler
            )
          );
        }
      }
      class A {
        constructor() {
          this.buffer = [];
        }
      }
      class S extends p.L {
        constructor(a, y, j, Y, ge) {
          super(a),
            (this.bufferTimeSpan = y),
            (this.bufferCreationInterval = j),
            (this.maxBufferSize = Y),
            (this.scheduler = ge),
            (this.contexts = []);
          const Ne = this.openContext();
          if (((this.timespanOnly = null == j || j < 0), this.timespanOnly))
            this.add(
              (Ne.closeAction = ge.schedule(M, y, {
                subscriber: this,
                context: Ne,
                bufferTimeSpan: y,
              }))
            );
          else {
            const et = {
              bufferTimeSpan: y,
              bufferCreationInterval: j,
              subscriber: this,
              scheduler: ge,
            };
            this.add(
              (Ne.closeAction = ge.schedule(U, y, {
                subscriber: this,
                context: Ne,
              }))
            ),
              this.add(ge.schedule(N, j, et));
          }
        }
        _next(a) {
          const y = this.contexts,
            j = y.length;
          let Y;
          for (let ge = 0; ge < j; ge++) {
            const Ne = y[ge],
              Ye = Ne.buffer;
            Ye.push(a), Ye.length == this.maxBufferSize && (Y = Ne);
          }
          Y && this.onBufferFull(Y);
        }
        _error(a) {
          (this.contexts.length = 0), super._error(a);
        }
        _complete() {
          const { contexts: a, destination: y } = this;
          for (; a.length > 0; ) {
            const j = a.shift();
            y.next(j.buffer);
          }
          super._complete();
        }
        _unsubscribe() {
          this.contexts = null;
        }
        onBufferFull(a) {
          this.closeContext(a);
          const y = a.closeAction;
          if (
            (y.unsubscribe(), this.remove(y), !this.closed && this.timespanOnly)
          ) {
            a = this.openContext();
            const j = this.bufferTimeSpan;
            this.add(
              (a.closeAction = this.scheduler.schedule(M, j, {
                subscriber: this,
                context: a,
                bufferTimeSpan: j,
              }))
            );
          }
        }
        openContext() {
          const a = new A();
          return this.contexts.push(a), a;
        }
        closeContext(a) {
          this.destination.next(a.buffer);
          const y = this.contexts;
          (y ? y.indexOf(a) : -1) >= 0 && y.splice(y.indexOf(a), 1);
        }
      }
      function M(k) {
        const a = k.subscriber,
          y = k.context;
        y && a.closeContext(y),
          a.closed ||
            ((k.context = a.openContext()),
            (k.context.closeAction = this.schedule(k, k.bufferTimeSpan)));
      }
      function N(k) {
        const {
            bufferCreationInterval: a,
            bufferTimeSpan: y,
            subscriber: j,
            scheduler: Y,
          } = k,
          ge = j.openContext();
        j.closed ||
          (j.add(
            (ge.closeAction = Y.schedule(U, y, { subscriber: j, context: ge }))
          ),
          this.schedule(k, a));
      }
      function U(k) {
        const { subscriber: a, context: y } = k;
        a.closeContext(y);
      }
      var O = t(50144),
        D = t(78540),
        K = t(59048);
      function G(k, a) {
        return function (j) {
          return j.lift(new re(k, a));
        };
      }
      class re {
        constructor(a, y) {
          (this.openings = a), (this.closingSelector = y);
        }
        call(a, y) {
          return y.subscribe(new ue(a, this.openings, this.closingSelector));
        }
      }
      class ue extends K.L {
        constructor(a, y, j) {
          super(a),
            (this.closingSelector = j),
            (this.contexts = []),
            this.add((0, D.D)(this, y));
        }
        _next(a) {
          const y = this.contexts,
            j = y.length;
          for (let Y = 0; Y < j; Y++) y[Y].buffer.push(a);
        }
        _error(a) {
          const y = this.contexts;
          for (; y.length > 0; ) {
            const j = y.shift();
            j.subscription.unsubscribe(),
              (j.buffer = null),
              (j.subscription = null);
          }
          (this.contexts = null), super._error(a);
        }
        _complete() {
          const a = this.contexts;
          for (; a.length > 0; ) {
            const y = a.shift();
            this.destination.next(y.buffer),
              y.subscription.unsubscribe(),
              (y.buffer = null),
              (y.subscription = null);
          }
          (this.contexts = null), super._complete();
        }
        notifyNext(a, y) {
          a ? this.closeBuffer(a) : this.openBuffer(y);
        }
        notifyComplete(a) {
          this.closeBuffer(a.context);
        }
        openBuffer(a) {
          try {
            const j = this.closingSelector.call(this, a);
            j && this.trySubscribe(j);
          } catch (y) {
            this._error(y);
          }
        }
        closeBuffer(a) {
          const y = this.contexts;
          if (y && a) {
            const { buffer: j, subscription: Y } = a;
            this.destination.next(j),
              y.splice(y.indexOf(a), 1),
              this.remove(Y),
              Y.unsubscribe();
          }
        }
        trySubscribe(a) {
          const y = this.contexts,
            Y = new O.w(),
            ge = { buffer: [], subscription: Y };
          y.push(ge);
          const Ne = (0, D.D)(this, a, ge);
          !Ne || Ne.closed
            ? this.closeBuffer(ge)
            : ((Ne.context = ge), this.add(Ne), Y.add(Ne));
        }
      }
      function P(k) {
        return function (a) {
          return a.lift(new m(k));
        };
      }
      class m {
        constructor(a) {
          this.closingSelector = a;
        }
        call(a, y) {
          return y.subscribe(new _(a, this.closingSelector));
        }
      }
      class _ extends e.Ds {
        constructor(a, y) {
          super(a),
            (this.closingSelector = y),
            (this.subscribing = !1),
            this.openBuffer();
        }
        _next(a) {
          this.buffer.push(a);
        }
        _complete() {
          const a = this.buffer;
          a && this.destination.next(a), super._complete();
        }
        _unsubscribe() {
          (this.buffer = void 0), (this.subscribing = !1);
        }
        notifyNext() {
          this.openBuffer();
        }
        notifyComplete() {
          this.subscribing ? this.complete() : this.openBuffer();
        }
        openBuffer() {
          let j,
            { closingSubscription: a } = this;
          a && (this.remove(a), a.unsubscribe()),
            this.buffer && this.destination.next(this.buffer),
            (this.buffer = []);
          try {
            const { closingSelector: Y } = this;
            j = Y();
          } catch (Y) {
            return this.error(Y);
          }
          (a = new O.w()),
            (this.closingSubscription = a),
            this.add(a),
            (this.subscribing = !0),
            a.add((0, e.ft)(j, new e.IY(this))),
            (this.subscribing = !1);
        }
      }
      function I(k) {
        return function (y) {
          const j = new R(k),
            Y = y.lift(j);
          return (j.caught = Y);
        };
      }
      class R {
        constructor(a) {
          this.selector = a;
        }
        call(a, y) {
          return y.subscribe(new T(a, this.selector, this.caught));
        }
      }
      class T extends e.Ds {
        constructor(a, y, j) {
          super(a), (this.selector = y), (this.caught = j);
        }
        error(a) {
          if (!this.isStopped) {
            let y;
            try {
              y = this.selector(a, this.caught);
            } catch (ge) {
              return void super.error(ge);
            }
            this._unsubscribeAndRecycle();
            const j = new e.IY(this);
            this.add(j);
            const Y = (0, e.ft)(y, j);
            Y !== j && this.add(Y);
          }
        }
      }
      var F = t(9422);
      function J(k) {
        return (a) => a.lift(new F.Ms(k));
      }
      var $ = t(35212),
        x = t(96056);
      function de(...k) {
        let a = null;
        return (
          "function" == typeof k[k.length - 1] && (a = k.pop()),
          1 === k.length && (0, $.k)(k[0]) && (k = k[0].slice()),
          (y) => y.lift.call((0, x.D)([y, ...k]), new F.Ms(a))
        );
      }
      var fe = t(94732);
      function be(...k) {
        return (a) => a.lift.call((0, fe.z)(a, ...k));
      }
      var Q = t(94061),
        B = t(13223);
      function V(k, a) {
        return (0, B.zg)(k, a, 1);
      }
      function ee(k, a) {
        return V(() => k, a);
      }
      function oe(k) {
        return (a) => a.lift(new H(k, a));
      }
      class H {
        constructor(a, y) {
          (this.predicate = a), (this.source = y);
        }
        call(a, y) {
          return y.subscribe(new W(a, this.predicate, this.source));
        }
      }
      class W extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.predicate = y),
            (this.source = j),
            (this.count = 0),
            (this.index = 0);
        }
        _next(a) {
          this.predicate ? this._tryPredicate(a) : this.count++;
        }
        _tryPredicate(a) {
          let y;
          try {
            y = this.predicate(a, this.index++, this.source);
          } catch (j) {
            return void this.destination.error(j);
          }
          y && this.count++;
        }
        _complete() {
          this.destination.next(this.count), this.destination.complete();
        }
      }
      function ne(k) {
        return (a) => a.lift(new le(k));
      }
      class le {
        constructor(a) {
          this.durationSelector = a;
        }
        call(a, y) {
          return y.subscribe(new Re(a, this.durationSelector));
        }
      }
      class Re extends e.Ds {
        constructor(a, y) {
          super(a), (this.durationSelector = y), (this.hasValue = !1);
        }
        _next(a) {
          try {
            const y = this.durationSelector.call(this, a);
            y && this._tryNext(a, y);
          } catch (y) {
            this.destination.error(y);
          }
        }
        _complete() {
          this.emitValue(), this.destination.complete();
        }
        _tryNext(a, y) {
          let j = this.durationSubscription;
          (this.value = a),
            (this.hasValue = !0),
            j && (j.unsubscribe(), this.remove(j)),
            (j = (0, e.ft)(y, new e.IY(this))),
            j && !j.closed && this.add((this.durationSubscription = j));
        }
        notifyNext() {
          this.emitValue();
        }
        notifyComplete() {
          this.emitValue();
        }
        emitValue() {
          if (this.hasValue) {
            const a = this.value,
              y = this.durationSubscription;
            y &&
              ((this.durationSubscription = void 0),
              y.unsubscribe(),
              this.remove(y)),
              (this.value = void 0),
              (this.hasValue = !1),
              super._next(a);
          }
        }
      }
      function Se(k, a = o.P) {
        return (y) => y.lift(new Ee(k, a));
      }
      class Ee {
        constructor(a, y) {
          (this.dueTime = a), (this.scheduler = y);
        }
        call(a, y) {
          return y.subscribe(new pe(a, this.dueTime, this.scheduler));
        }
      }
      class pe extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.dueTime = y),
            (this.scheduler = j),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(a) {
          this.clearDebounce(),
            (this.lastValue = a),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                Be,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: a } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(a);
          }
        }
        clearDebounce() {
          const a = this.debouncedSubscription;
          null !== a &&
            (this.remove(a),
            a.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function Be(k) {
        k.debouncedNext();
      }
      function _e(k = null) {
        return (a) => a.lift(new xe(k));
      }
      class xe {
        constructor(a) {
          this.defaultValue = a;
        }
        call(a, y) {
          return y.subscribe(new Me(a, this.defaultValue));
        }
      }
      class Me extends p.L {
        constructor(a, y) {
          super(a), (this.defaultValue = y), (this.isEmpty = !0);
        }
        _next(a) {
          (this.isEmpty = !1), this.destination.next(a);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function Z(k) {
        return k instanceof Date && !isNaN(+k);
      }
      var X = t(29944);
      function te(k, a = o.P) {
        const j = Z(k) ? +k - a.now() : Math.abs(k);
        return (Y) => Y.lift(new ie(j, a));
      }
      class ie {
        constructor(a, y) {
          (this.delay = a), (this.scheduler = y);
        }
        call(a, y) {
          return y.subscribe(new ve(a, this.delay, this.scheduler));
        }
      }
      class ve extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.delay = y),
            (this.scheduler = j),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(a) {
          const y = a.source,
            j = y.queue,
            Y = a.scheduler,
            ge = a.destination;
          for (; j.length > 0 && j[0].time - Y.now() <= 0; )
            j.shift().notification.observe(ge);
          if (j.length > 0) {
            const Ne = Math.max(0, j[0].time - Y.now());
            this.schedule(a, Ne);
          } else this.unsubscribe(), (y.active = !1);
        }
        _schedule(a) {
          (this.active = !0),
            this.destination.add(
              a.schedule(ve.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: a,
              })
            );
        }
        scheduleNotification(a) {
          if (!0 === this.errored) return;
          const y = this.scheduler,
            j = new we(y.now() + this.delay, a);
          this.queue.push(j), !1 === this.active && this._schedule(y);
        }
        _next(a) {
          this.scheduleNotification(X.P.createNext(a));
        }
        _error(a) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(a),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(X.P.createComplete()), this.unsubscribe();
        }
      }
      class we {
        constructor(a, y) {
          (this.time = a), (this.notification = y);
        }
      }
      var Oe = t(59488);
      function Fe(k, a) {
        return a
          ? (y) => new ae(y, a).lift(new Le(k))
          : (y) => y.lift(new Le(k));
      }
      class Le {
        constructor(a) {
          this.delayDurationSelector = a;
        }
        call(a, y) {
          return y.subscribe(new q(a, this.delayDurationSelector));
        }
      }
      class q extends K.L {
        constructor(a, y) {
          super(a),
            (this.delayDurationSelector = y),
            (this.completed = !1),
            (this.delayNotifierSubscriptions = []),
            (this.index = 0);
        }
        notifyNext(a, y, j, Y, ge) {
          this.destination.next(a),
            this.removeSubscription(ge),
            this.tryComplete();
        }
        notifyError(a, y) {
          this._error(a);
        }
        notifyComplete(a) {
          const y = this.removeSubscription(a);
          y && this.destination.next(y), this.tryComplete();
        }
        _next(a) {
          const y = this.index++;
          try {
            const j = this.delayDurationSelector(a, y);
            j && this.tryDelay(j, a);
          } catch (j) {
            this.destination.error(j);
          }
        }
        _complete() {
          (this.completed = !0), this.tryComplete(), this.unsubscribe();
        }
        removeSubscription(a) {
          a.unsubscribe();
          const y = this.delayNotifierSubscriptions.indexOf(a);
          return (
            -1 !== y && this.delayNotifierSubscriptions.splice(y, 1),
            a.outerValue
          );
        }
        tryDelay(a, y) {
          const j = (0, D.D)(this, a, y);
          j &&
            !j.closed &&
            (this.destination.add(j), this.delayNotifierSubscriptions.push(j));
        }
        tryComplete() {
          this.completed &&
            0 === this.delayNotifierSubscriptions.length &&
            this.destination.complete();
        }
      }
      class ae extends Oe.y {
        constructor(a, y) {
          super(), (this.source = a), (this.subscriptionDelay = y);
        }
        _subscribe(a) {
          this.subscriptionDelay.subscribe(new Pe(a, this.source));
        }
      }
      class Pe extends p.L {
        constructor(a, y) {
          super(),
            (this.parent = a),
            (this.source = y),
            (this.sourceSubscribed = !1);
        }
        _next(a) {
          this.subscribeToSource();
        }
        _error(a) {
          this.unsubscribe(), this.parent.error(a);
        }
        _complete() {
          this.unsubscribe(), this.subscribeToSource();
        }
        subscribeToSource() {
          this.sourceSubscribed ||
            ((this.sourceSubscribed = !0),
            this.unsubscribe(),
            this.source.subscribe(this.parent));
        }
      }
      function ke() {
        return function (a) {
          return a.lift(new Ve());
        };
      }
      class Ve {
        call(a, y) {
          return y.subscribe(new Te(a));
        }
      }
      class Te extends p.L {
        constructor(a) {
          super(a);
        }
        _next(a) {
          a.observe(this.destination);
        }
      }
      function He(k, a) {
        return (y) => y.lift(new tt(k, a));
      }
      class tt {
        constructor(a, y) {
          (this.keySelector = a), (this.flushes = y);
        }
        call(a, y) {
          return y.subscribe(new Ue(a, this.keySelector, this.flushes));
        }
      }
      class Ue extends e.Ds {
        constructor(a, y, j) {
          super(a),
            (this.keySelector = y),
            (this.values = new Set()),
            j && this.add((0, e.ft)(j, new e.IY(this)));
        }
        notifyNext() {
          this.values.clear();
        }
        notifyError(a) {
          this._error(a);
        }
        _next(a) {
          this.keySelector ? this._useKeySelector(a) : this._finalizeNext(a, a);
        }
        _useKeySelector(a) {
          let y;
          const { destination: j } = this;
          try {
            y = this.keySelector(a);
          } catch (Y) {
            return void j.error(Y);
          }
          this._finalizeNext(y, a);
        }
        _finalizeNext(a, y) {
          const { values: j } = this;
          j.has(a) || (j.add(a), this.destination.next(y));
        }
      }
      function $e(k, a) {
        return (y) => y.lift(new nt(k, a));
      }
      class nt {
        constructor(a, y) {
          (this.compare = a), (this.keySelector = y);
        }
        call(a, y) {
          return y.subscribe(new Ge(a, this.compare, this.keySelector));
        }
      }
      class Ge extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.keySelector = j),
            (this.hasKey = !1),
            "function" == typeof y && (this.compare = y);
        }
        compare(a, y) {
          return a === y;
        }
        _next(a) {
          let y;
          try {
            const { keySelector: Y } = this;
            y = Y ? Y(a) : a;
          } catch (Y) {
            return this.destination.error(Y);
          }
          let j = !1;
          if (this.hasKey)
            try {
              const { compare: Y } = this;
              j = Y(this.key, y);
            } catch (Y) {
              return this.destination.error(Y);
            }
          else this.hasKey = !0;
          j || ((this.key = y), this.destination.next(a));
        }
      }
      function We(k, a) {
        return $e((y, j) => (a ? a(y[k], j[k]) : y[k] === j[k]));
      }
      var rt = t(34477),
        ze = t(6167),
        Je = t(8685);
      function qe(k = he) {
        return (a) => a.lift(new ce(k));
      }
      class ce {
        constructor(a) {
          this.errorFactory = a;
        }
        call(a, y) {
          return y.subscribe(new se(a, this.errorFactory));
        }
      }
      class se extends p.L {
        constructor(a, y) {
          super(a), (this.errorFactory = y), (this.hasValue = !1);
        }
        _next(a) {
          (this.hasValue = !0), this.destination.next(a);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let a;
            try {
              a = this.errorFactory();
            } catch (y) {
              a = y;
            }
            this.destination.error(a);
          }
        }
      }
      function he() {
        return new Je.K();
      }
      var me = t(88805);
      function ye(k) {
        return (a) => (0 === k ? (0, me.c)() : a.lift(new Ie(k)));
      }
      class Ie {
        constructor(a) {
          if (((this.total = a), this.total < 0)) throw new rt.W();
        }
        call(a, y) {
          return y.subscribe(new Ae(a, this.total));
        }
      }
      class Ae extends p.L {
        constructor(a, y) {
          super(a), (this.total = y), (this.count = 0);
        }
        _next(a) {
          const y = this.total,
            j = ++this.count;
          j <= y &&
            (this.destination.next(a),
            j === y && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Ce(k, a) {
        if (k < 0) throw new rt.W();
        const y = arguments.length >= 2;
        return (j) =>
          j.pipe(
            (0, ze.h)((Y, ge) => ge === k),
            ye(1),
            y ? _e(a) : qe(() => new rt.W())
          );
      }
      var Ze = t(9556);
      function De(...k) {
        return (a) => (0, fe.z)(a, (0, Ze.of)(...k));
      }
      function je(k, a) {
        return (y) => y.lift(new Xe(k, a, y));
      }
      class Xe {
        constructor(a, y, j) {
          (this.predicate = a), (this.thisArg = y), (this.source = j);
        }
        call(a, y) {
          return y.subscribe(
            new Ke(a, this.predicate, this.thisArg, this.source)
          );
        }
      }
      class Ke extends p.L {
        constructor(a, y, j, Y) {
          super(a),
            (this.predicate = y),
            (this.thisArg = j),
            (this.source = Y),
            (this.index = 0),
            (this.thisArg = j || this);
        }
        notifyComplete(a) {
          this.destination.next(a), this.destination.complete();
        }
        _next(a) {
          let y = !1;
          try {
            y = this.predicate.call(this.thisArg, a, this.index++, this.source);
          } catch (j) {
            return void this.destination.error(j);
          }
          y || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function Qe() {
        return (k) => k.lift(new at());
      }
      class at {
        call(a, y) {
          return y.subscribe(new st(a));
        }
      }
      class st extends e.Ds {
        constructor(a) {
          super(a), (this.hasCompleted = !1), (this.hasSubscription = !1);
        }
        _next(a) {
          this.hasSubscription ||
            ((this.hasSubscription = !0),
            this.add((0, e.ft)(a, new e.IY(this))));
        }
        _complete() {
          (this.hasCompleted = !0),
            this.hasSubscription || this.destination.complete();
        }
        notifyComplete() {
          (this.hasSubscription = !1),
            this.hasCompleted && this.destination.complete();
        }
      }
      var it = t(32974);
      function ut(k, a) {
        return a
          ? (y) =>
              y.pipe(
                ut((j, Y) =>
                  (0, x.D)(k(j, Y)).pipe((0, it.U)((ge, Ne) => a(j, ge, Y, Ne)))
                )
              )
          : (y) => y.lift(new ht(k));
      }
      class ht {
        constructor(a) {
          this.project = a;
        }
        call(a, y) {
          return y.subscribe(new ft(a, this.project));
        }
      }
      class ft extends e.Ds {
        constructor(a, y) {
          super(a),
            (this.project = y),
            (this.hasSubscription = !1),
            (this.hasCompleted = !1),
            (this.index = 0);
        }
        _next(a) {
          this.hasSubscription || this.tryNext(a);
        }
        tryNext(a) {
          let y;
          const j = this.index++;
          try {
            y = this.project(a, j);
          } catch (Y) {
            return void this.destination.error(Y);
          }
          (this.hasSubscription = !0), this._innerSub(y);
        }
        _innerSub(a) {
          const y = new e.IY(this),
            j = this.destination;
          j.add(y);
          const Y = (0, e.ft)(a, y);
          Y !== y && j.add(Y);
        }
        _complete() {
          (this.hasCompleted = !0),
            this.hasSubscription || this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(a) {
          this.destination.next(a);
        }
        notifyError(a) {
          this.destination.error(a);
        }
        notifyComplete() {
          (this.hasSubscription = !1),
            this.hasCompleted && this.destination.complete();
        }
      }
      function dt(k, a = Number.POSITIVE_INFINITY, y) {
        return (
          (a = (a || 0) < 1 ? Number.POSITIVE_INFINITY : a),
          (j) => j.lift(new pt(k, a, y))
        );
      }
      class pt {
        constructor(a, y, j) {
          (this.project = a), (this.concurrent = y), (this.scheduler = j);
        }
        call(a, y) {
          return y.subscribe(
            new ct(a, this.project, this.concurrent, this.scheduler)
          );
        }
      }
      class ct extends e.Ds {
        constructor(a, y, j, Y) {
          super(a),
            (this.project = y),
            (this.concurrent = j),
            (this.scheduler = Y),
            (this.index = 0),
            (this.active = 0),
            (this.hasCompleted = !1),
            j < Number.POSITIVE_INFINITY && (this.buffer = []);
        }
        static dispatch(a) {
          const { subscriber: y, result: j, value: Y, index: ge } = a;
          y.subscribeToProjection(j, Y, ge);
        }
        _next(a) {
          const y = this.destination;
          if (y.closed) return void this._complete();
          const j = this.index++;
          if (this.active < this.concurrent) {
            y.next(a);
            try {
              const { project: Y } = this,
                ge = Y(a, j);
              this.scheduler
                ? this.destination.add(
                    this.scheduler.schedule(ct.dispatch, 0, {
                      subscriber: this,
                      result: ge,
                      value: a,
                      index: j,
                    })
                  )
                : this.subscribeToProjection(ge, a, j);
            } catch (Y) {
              y.error(Y);
            }
          } else this.buffer.push(a);
        }
        subscribeToProjection(a, y, j) {
          this.active++, this.destination.add((0, e.ft)(a, new e.IY(this)));
        }
        _complete() {
          (this.hasCompleted = !0),
            this.hasCompleted &&
              0 === this.active &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(a) {
          this._next(a);
        }
        notifyComplete() {
          const a = this.buffer;
          this.active--,
            a && a.length > 0 && this._next(a.shift()),
            this.hasCompleted &&
              0 === this.active &&
              this.destination.complete();
        }
      }
      function gt(k) {
        return (a) => a.lift(new mt(k));
      }
      class mt {
        constructor(a) {
          this.callback = a;
        }
        call(a, y) {
          return y.subscribe(new bt(a, this.callback));
        }
      }
      class bt extends p.L {
        constructor(a, y) {
          super(a), this.add(new O.w(y));
        }
      }
      function yt(k, a) {
        if ("function" != typeof k)
          throw new TypeError("predicate is not a function");
        return (y) => y.lift(new lt(k, y, !1, a));
      }
      class lt {
        constructor(a, y, j, Y) {
          (this.predicate = a),
            (this.source = y),
            (this.yieldIndex = j),
            (this.thisArg = Y);
        }
        call(a, y) {
          return y.subscribe(
            new St(
              a,
              this.predicate,
              this.source,
              this.yieldIndex,
              this.thisArg
            )
          );
        }
      }
      class St extends p.L {
        constructor(a, y, j, Y, ge) {
          super(a),
            (this.predicate = y),
            (this.source = j),
            (this.yieldIndex = Y),
            (this.thisArg = ge),
            (this.index = 0);
        }
        notifyComplete(a) {
          const y = this.destination;
          y.next(a), y.complete(), this.unsubscribe();
        }
        _next(a) {
          const { predicate: y, thisArg: j } = this,
            Y = this.index++;
          try {
            y.call(j || this, a, Y, this.source) &&
              this.notifyComplete(this.yieldIndex ? Y : a);
          } catch (ge) {
            this.destination.error(ge);
          }
        }
        _complete() {
          this.notifyComplete(this.yieldIndex ? -1 : void 0);
        }
      }
      function Mt(k, a) {
        return (y) => y.lift(new lt(k, y, !0, a));
      }
      var _t = t(40601);
      function xt(k, a) {
        const y = arguments.length >= 2;
        return (j) =>
          j.pipe(
            k ? (0, ze.h)((Y, ge) => k(Y, ge, j)) : _t.y,
            ye(1),
            y ? _e(a) : qe(() => new Je.K())
          );
      }
      var Ct = t(80374);
      function Zt() {
        return function (a) {
          return a.lift(new Qt());
        };
      }
      class Qt {
        call(a, y) {
          return y.subscribe(new Yt(a));
        }
      }
      class Yt extends p.L {
        _next(a) {}
      }
      function Xt() {
        return (k) => k.lift(new qt());
      }
      class qt {
        call(a, y) {
          return y.subscribe(new er(a));
        }
      }
      class er extends p.L {
        constructor(a) {
          super(a);
        }
        notifyComplete(a) {
          const y = this.destination;
          y.next(a), y.complete();
        }
        _next(a) {
          this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      function At(k) {
        return function (y) {
          return 0 === k ? (0, me.c)() : y.lift(new tr(k));
        };
      }
      class tr {
        constructor(a) {
          if (((this.total = a), this.total < 0)) throw new rt.W();
        }
        call(a, y) {
          return y.subscribe(new rr(a, this.total));
        }
      }
      class rr extends p.L {
        constructor(a, y) {
          super(a),
            (this.total = y),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(a) {
          const y = this.ring,
            j = this.total,
            Y = this.count++;
          y.length < j ? y.push(a) : (y[Y % j] = a);
        }
        _complete() {
          const a = this.destination;
          let y = this.count;
          if (y > 0) {
            const j = this.count >= this.total ? this.total : this.count,
              Y = this.ring;
            for (let ge = 0; ge < j; ge++) {
              const Ne = y++ % j;
              a.next(Y[Ne]);
            }
          }
          a.complete();
        }
      }
      function nr(k, a) {
        const y = arguments.length >= 2;
        return (j) =>
          j.pipe(
            k ? (0, ze.h)((Y, ge) => k(Y, ge, j)) : _t.y,
            At(1),
            y ? _e(a) : qe(() => new Je.K())
          );
      }
      function ir(k) {
        return (a) => a.lift(new sr(k));
      }
      class sr {
        constructor(a) {
          this.value = a;
        }
        call(a, y) {
          return y.subscribe(new or(a, this.value));
        }
      }
      class or extends p.L {
        constructor(a, y) {
          super(a), (this.value = y);
        }
        _next(a) {
          this.destination.next(this.value);
        }
      }
      function ar() {
        return function (a) {
          return a.lift(new cr());
        };
      }
      class cr {
        call(a, y) {
          return y.subscribe(new ur(a));
        }
      }
      class ur extends p.L {
        constructor(a) {
          super(a);
        }
        _next(a) {
          this.destination.next(X.P.createNext(a));
        }
        _error(a) {
          const y = this.destination;
          y.next(X.P.createError(a)), y.complete();
        }
        _complete() {
          const a = this.destination;
          a.next(X.P.createComplete()), a.complete();
        }
      }
      function Tt(k, a) {
        let y = !1;
        return (
          arguments.length >= 2 && (y = !0),
          function (Y) {
            return Y.lift(new lr(k, a, y));
          }
        );
      }
      class lr {
        constructor(a, y, j = !1) {
          (this.accumulator = a), (this.seed = y), (this.hasSeed = j);
        }
        call(a, y) {
          return y.subscribe(
            new hr(a, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class hr extends p.L {
        constructor(a, y, j, Y) {
          super(a),
            (this.accumulator = y),
            (this._seed = j),
            (this.hasSeed = Y),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(a) {
          (this.hasSeed = !0), (this._seed = a);
        }
        _next(a) {
          if (this.hasSeed) return this._tryNext(a);
          (this.seed = a), this.destination.next(a);
        }
        _tryNext(a) {
          const y = this.index++;
          let j;
          try {
            j = this.accumulator(this.seed, a, y);
          } catch (Y) {
            this.destination.error(Y);
          }
          (this.seed = j), this.destination.next(j);
        }
      }
      var jt = t(77817);
      function Ot(k, a) {
        return arguments.length >= 2
          ? function (j) {
              return (0, jt.z)(Tt(k, a), At(1), _e(a))(j);
            }
          : function (j) {
              return (0, jt.z)(
                Tt((Y, ge, Ne) => k(Y, ge, Ne + 1)),
                At(1)
              )(j);
            };
      }
      function fr(k) {
        return Ot(
          "function" == typeof k
            ? (y, j) => (k(y, j) > 0 ? y : j)
            : (y, j) => (y > j ? y : j)
        );
      }
      var dr = t(14685);
      function pr(...k) {
        return (a) => a.lift.call((0, dr.T)(a, ...k));
      }
      var gr = t(39019);
      function mr(k, a, y = Number.POSITIVE_INFINITY) {
        return "function" == typeof a
          ? (0, B.zg)(() => k, a, y)
          : ("number" == typeof a && (y = a), (0, B.zg)(() => k, y));
      }
      function br(k, a, y = Number.POSITIVE_INFINITY) {
        return (j) => j.lift(new yr(k, a, y));
      }
      class yr {
        constructor(a, y, j) {
          (this.accumulator = a), (this.seed = y), (this.concurrent = j);
        }
        call(a, y) {
          return y.subscribe(
            new vr(a, this.accumulator, this.seed, this.concurrent)
          );
        }
      }
      class vr extends e.Ds {
        constructor(a, y, j, Y) {
          super(a),
            (this.accumulator = y),
            (this.acc = j),
            (this.concurrent = Y),
            (this.hasValue = !1),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(a) {
          if (this.active < this.concurrent) {
            const y = this.index++,
              j = this.destination;
            let Y;
            try {
              const { accumulator: ge } = this;
              Y = ge(this.acc, a, y);
            } catch (ge) {
              return j.error(ge);
            }
            this.active++, this._innerSub(Y);
          } else this.buffer.push(a);
        }
        _innerSub(a) {
          const y = new e.IY(this),
            j = this.destination;
          j.add(y);
          const Y = (0, e.ft)(a, y);
          Y !== y && j.add(Y);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              (!1 === this.hasValue && this.destination.next(this.acc),
              this.destination.complete()),
            this.unsubscribe();
        }
        notifyNext(a) {
          const { destination: y } = this;
          (this.acc = a), (this.hasValue = !0), y.next(a);
        }
        notifyComplete() {
          const a = this.buffer;
          this.active--,
            a.length > 0
              ? this._next(a.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                (!1 === this.hasValue && this.destination.next(this.acc),
                this.destination.complete());
        }
      }
      function wr(k) {
        return Ot(
          "function" == typeof k
            ? (y, j) => (k(y, j) < 0 ? y : j)
            : (y, j) => (y < j ? y : j)
        );
      }
      var _r = t(53101);
      function Et(k, a) {
        return function (j) {
          let Y;
          if (
            ((Y =
              "function" == typeof k
                ? k
                : function () {
                    return k;
                  }),
            "function" == typeof a)
          )
            return j.lift(new Er(Y, a));
          const ge = Object.create(j, _r.N);
          return (ge.source = j), (ge.subjectFactory = Y), ge;
        };
      }
      class Er {
        constructor(a, y) {
          (this.subjectFactory = a), (this.selector = y);
        }
        call(a, y) {
          const { selector: j } = this,
            Y = this.subjectFactory(),
            ge = j(Y).subscribe(a);
          return ge.add(y.subscribe(Y)), ge;
        }
      }
      var Sr = t(87167);
      function Mr(...k) {
        return (
          1 === k.length && (0, $.k)(k[0]) && (k = k[0]),
          (a) => a.lift(new Ft(k))
        );
      }
      class Ft {
        constructor(a) {
          this.nextSources = a;
        }
        call(a, y) {
          return y.subscribe(new xr(a, this.nextSources));
        }
      }
      class xr extends e.Ds {
        constructor(a, y) {
          super(a), (this.destination = a), (this.nextSources = y);
        }
        notifyError() {
          this.subscribeToNextSource();
        }
        notifyComplete() {
          this.subscribeToNextSource();
        }
        _error(a) {
          this.subscribeToNextSource(), this.unsubscribe();
        }
        _complete() {
          this.subscribeToNextSource(), this.unsubscribe();
        }
        subscribeToNextSource() {
          const a = this.nextSources.shift();
          if (a) {
            const y = new e.IY(this),
              j = this.destination;
            j.add(y);
            const Y = (0, e.ft)(a, y);
            Y !== y && j.add(Y);
          } else this.destination.complete();
        }
      }
      function Cr() {
        return (k) => k.lift(new Rr());
      }
      class Rr {
        call(a, y) {
          return y.subscribe(new Ir(a));
        }
      }
      class Ir extends p.L {
        constructor(a) {
          super(a), (this.hasPrev = !1);
        }
        _next(a) {
          let y;
          this.hasPrev ? (y = [this.prev, a]) : (this.hasPrev = !0),
            (this.prev = a),
            y && this.destination.next(y);
        }
      }
      var Ar = t(1958);
      function Tr(k, a) {
        return (y) => [(0, ze.h)(k, a)(y), (0, ze.h)((0, Ar.f)(k, a))(y)];
      }
      function Or(...k) {
        const a = k.length;
        if (0 === a) throw new Error("list of properties cannot be empty.");
        return (y) =>
          (0, it.U)(
            (function Nr(k, a) {
              return (j) => {
                let Y = j;
                for (let ge = 0; ge < a; ge++) {
                  const Ne = Y?.[k[ge]];
                  if (void 0 === Ne) return;
                  Y = Ne;
                }
                return Y;
              };
            })(k, a)
          )(y);
      }
      var ot = t(87922);
      function Lr(k) {
        return k ? Et(() => new ot.xQ(), k) : Et(new ot.xQ());
      }
      var Pr = t(13388);
      function Dr(k) {
        return (a) => Et(new Pr.X(k))(a);
      }
      var kr = t(94046);
      function Br() {
        return (k) => Et(new kr.c())(k);
      }
      var Ut = t(47191);
      function jr(k, a, y, j) {
        y && "function" != typeof y && (j = y);
        const Y = "function" == typeof y ? y : void 0,
          ge = new Ut.t(k, a, j);
        return (Ne) => Et(() => ge, Y)(Ne);
      }
      var Fr = t(54285);
      function Ur(...k) {
        return function (y) {
          return (
            1 === k.length && (0, $.k)(k[0]) && (k = k[0]),
            y.lift.call((0, Fr.S3)(y, ...k))
          );
        };
      }
      function Wr(k = -1) {
        return (a) =>
          0 === k ? (0, me.c)() : a.lift(new Wt(k < 0 ? -1 : k - 1, a));
      }
      class Wt {
        constructor(a, y) {
          (this.count = a), (this.source = y);
        }
        call(a, y) {
          return y.subscribe(new Hr(a, this.count, this.source));
        }
      }
      class Hr extends p.L {
        constructor(a, y, j) {
          super(a), (this.count = y), (this.source = j);
        }
        complete() {
          if (!this.isStopped) {
            const { source: a, count: y } = this;
            if (0 === y) return super.complete();
            y > -1 && (this.count = y - 1),
              a.subscribe(this._unsubscribeAndRecycle());
          }
        }
      }
      function $r(k) {
        return (a) => a.lift(new Vr(k));
      }
      class Vr {
        constructor(a) {
          this.notifier = a;
        }
        call(a, y) {
          return y.subscribe(new zr(a, this.notifier, y));
        }
      }
      class zr extends e.Ds {
        constructor(a, y, j) {
          super(a),
            (this.notifier = y),
            (this.source = j),
            (this.sourceIsBeingSubscribedTo = !0);
        }
        notifyNext() {
          (this.sourceIsBeingSubscribedTo = !0), this.source.subscribe(this);
        }
        notifyComplete() {
          if (!1 === this.sourceIsBeingSubscribedTo) return super.complete();
        }
        complete() {
          if (((this.sourceIsBeingSubscribedTo = !1), !this.isStopped)) {
            if (
              (this.retries || this.subscribeToRetries(),
              !this.retriesSubscription || this.retriesSubscription.closed)
            )
              return super.complete();
            this._unsubscribeAndRecycle(), this.notifications.next(void 0);
          }
        }
        _unsubscribe() {
          const { notifications: a, retriesSubscription: y } = this;
          a && (a.unsubscribe(), (this.notifications = void 0)),
            y && (y.unsubscribe(), (this.retriesSubscription = void 0)),
            (this.retries = void 0);
        }
        _unsubscribeAndRecycle() {
          const { _unsubscribe: a } = this;
          return (
            (this._unsubscribe = null),
            super._unsubscribeAndRecycle(),
            (this._unsubscribe = a),
            this
          );
        }
        subscribeToRetries() {
          let a;
          this.notifications = new ot.xQ();
          try {
            const { notifier: y } = this;
            a = y(this.notifications);
          } catch {
            return super.complete();
          }
          (this.retries = a),
            (this.retriesSubscription = (0, e.ft)(a, new e.IY(this)));
        }
      }
      function Gr(k = -1) {
        return (a) => a.lift(new Kr(k, a));
      }
      class Kr {
        constructor(a, y) {
          (this.count = a), (this.source = y);
        }
        call(a, y) {
          return y.subscribe(new Jr(a, this.count, this.source));
        }
      }
      class Jr extends p.L {
        constructor(a, y, j) {
          super(a), (this.count = y), (this.source = j);
        }
        error(a) {
          if (!this.isStopped) {
            const { source: y, count: j } = this;
            if (0 === j) return super.error(a);
            j > -1 && (this.count = j - 1),
              y.subscribe(this._unsubscribeAndRecycle());
          }
        }
      }
      function Zr(k) {
        return (a) => a.lift(new Qr(k, a));
      }
      class Qr {
        constructor(a, y) {
          (this.notifier = a), (this.source = y);
        }
        call(a, y) {
          return y.subscribe(new Yr(a, this.notifier, this.source));
        }
      }
      class Yr extends e.Ds {
        constructor(a, y, j) {
          super(a), (this.notifier = y), (this.source = j);
        }
        error(a) {
          if (!this.isStopped) {
            let y = this.errors,
              j = this.retries,
              Y = this.retriesSubscription;
            if (j) (this.errors = void 0), (this.retriesSubscription = void 0);
            else {
              y = new ot.xQ();
              try {
                const { notifier: ge } = this;
                j = ge(y);
              } catch (ge) {
                return super.error(ge);
              }
              Y = (0, e.ft)(j, new e.IY(this));
            }
            this._unsubscribeAndRecycle(),
              (this.errors = y),
              (this.retries = j),
              (this.retriesSubscription = Y),
              y.next(a);
          }
        }
        _unsubscribe() {
          const { errors: a, retriesSubscription: y } = this;
          a && (a.unsubscribe(), (this.errors = void 0)),
            y && (y.unsubscribe(), (this.retriesSubscription = void 0)),
            (this.retries = void 0);
        }
        notifyNext() {
          const { _unsubscribe: a } = this;
          (this._unsubscribe = null),
            this._unsubscribeAndRecycle(),
            (this._unsubscribe = a),
            this.source.subscribe(this);
        }
      }
      var Ht = t(98153);
      function Xr(k) {
        return (a) => a.lift(new qr(k));
      }
      class qr {
        constructor(a) {
          this.notifier = a;
        }
        call(a, y) {
          const j = new en(a),
            Y = y.subscribe(j);
          return Y.add((0, e.ft)(this.notifier, new e.IY(j))), Y;
        }
      }
      class en extends e.Ds {
        constructor() {
          super(...arguments), (this.hasValue = !1);
        }
        _next(a) {
          (this.value = a), (this.hasValue = !0);
        }
        notifyNext() {
          this.emitValue();
        }
        notifyComplete() {
          this.emitValue();
        }
        emitValue() {
          this.hasValue &&
            ((this.hasValue = !1), this.destination.next(this.value));
        }
      }
      function tn(k, a = o.P) {
        return (y) => y.lift(new rn(k, a));
      }
      class rn {
        constructor(a, y) {
          (this.period = a), (this.scheduler = y);
        }
        call(a, y) {
          return y.subscribe(new nn(a, this.period, this.scheduler));
        }
      }
      class nn extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.period = y),
            (this.scheduler = j),
            (this.hasValue = !1),
            this.add(j.schedule(sn, y, { subscriber: this, period: y }));
        }
        _next(a) {
          (this.lastValue = a), (this.hasValue = !0);
        }
        notifyNext() {
          this.hasValue &&
            ((this.hasValue = !1), this.destination.next(this.lastValue));
        }
      }
      function sn(k) {
        let { subscriber: a, period: y } = k;
        a.notifyNext(), this.schedule(k, y);
      }
      function on(k, a) {
        return (y) => y.lift(new an(k, a));
      }
      class an {
        constructor(a, y) {
          (this.compareTo = a), (this.comparator = y);
        }
        call(a, y) {
          return y.subscribe(new cn(a, this.compareTo, this.comparator));
        }
      }
      class cn extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.compareTo = y),
            (this.comparator = j),
            (this._a = []),
            (this._b = []),
            (this._oneComplete = !1),
            this.destination.add(y.subscribe(new un(a, this)));
        }
        _next(a) {
          this._oneComplete && 0 === this._b.length
            ? this.emit(!1)
            : (this._a.push(a), this.checkValues());
        }
        _complete() {
          this._oneComplete
            ? this.emit(0 === this._a.length && 0 === this._b.length)
            : (this._oneComplete = !0),
            this.unsubscribe();
        }
        checkValues() {
          const { _a: a, _b: y, comparator: j } = this;
          for (; a.length > 0 && y.length > 0; ) {
            let Y = a.shift(),
              ge = y.shift(),
              Ne = !1;
            try {
              Ne = j ? j(Y, ge) : Y === ge;
            } catch (Ye) {
              this.destination.error(Ye);
            }
            Ne || this.emit(!1);
          }
        }
        emit(a) {
          const { destination: y } = this;
          y.next(a), y.complete();
        }
        nextB(a) {
          this._oneComplete && 0 === this._a.length
            ? this.emit(!1)
            : (this._b.push(a), this.checkValues());
        }
        completeB() {
          this._oneComplete
            ? this.emit(0 === this._a.length && 0 === this._b.length)
            : (this._oneComplete = !0);
        }
      }
      class un extends p.L {
        constructor(a, y) {
          super(a), (this.parent = y);
        }
        _next(a) {
          this.parent.nextB(a);
        }
        _error(a) {
          this.parent.error(a), this.unsubscribe();
        }
        _complete() {
          this.parent.completeB(), this.unsubscribe();
        }
      }
      function ln() {
        return new ot.xQ();
      }
      function hn() {
        return (k) => (0, Ht.x)()(Et(ln)(k));
      }
      function fn(k, a, y) {
        let j;
        return (
          (j =
            k && "object" == typeof k
              ? k
              : { bufferSize: k, windowTime: a, refCount: !1, scheduler: y }),
          (Y) =>
            Y.lift(
              (function dn({
                bufferSize: k = Number.POSITIVE_INFINITY,
                windowTime: a = Number.POSITIVE_INFINITY,
                refCount: y,
                scheduler: j,
              }) {
                let Y,
                  Ne,
                  ge = 0,
                  Ye = !1,
                  et = !1;
                return function (It) {
                  let wt;
                  ge++,
                    !Y || Ye
                      ? ((Ye = !1),
                        (Y = new Ut.t(k, a, j)),
                        (wt = Y.subscribe(this)),
                        (Ne = It.subscribe({
                          next(Bt) {
                            Y.next(Bt);
                          },
                          error(Bt) {
                            (Ye = !0), Y.error(Bt);
                          },
                          complete() {
                            (et = !0), (Ne = void 0), Y.complete();
                          },
                        })),
                        et && (Ne = void 0))
                      : (wt = Y.subscribe(this)),
                    this.add(() => {
                      ge--,
                        wt.unsubscribe(),
                        (wt = void 0),
                        Ne &&
                          !et &&
                          y &&
                          0 === ge &&
                          (Ne.unsubscribe(), (Ne = void 0), (Y = void 0));
                    });
                };
              })(j)
            )
        );
      }
      function pn(k) {
        return (a) => a.lift(new gn(k, a));
      }
      class gn {
        constructor(a, y) {
          (this.predicate = a), (this.source = y);
        }
        call(a, y) {
          return y.subscribe(new mn(a, this.predicate, this.source));
        }
      }
      class mn extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.predicate = y),
            (this.source = j),
            (this.seenValue = !1),
            (this.index = 0);
        }
        applySingleValue(a) {
          this.seenValue
            ? this.destination.error("Sequence contains more than one element")
            : ((this.seenValue = !0), (this.singleValue = a));
        }
        _next(a) {
          const y = this.index++;
          this.predicate ? this.tryNext(a, y) : this.applySingleValue(a);
        }
        tryNext(a, y) {
          try {
            this.predicate(a, y, this.source) && this.applySingleValue(a);
          } catch (j) {
            this.destination.error(j);
          }
        }
        _complete() {
          const a = this.destination;
          this.index > 0
            ? (a.next(this.seenValue ? this.singleValue : void 0), a.complete())
            : a.error(new Je.K());
        }
      }
      function bn(k) {
        return (a) => a.lift(new yn(k));
      }
      class yn {
        constructor(a) {
          this.total = a;
        }
        call(a, y) {
          return y.subscribe(new vn(a, this.total));
        }
      }
      class vn extends p.L {
        constructor(a, y) {
          super(a), (this.total = y), (this.count = 0);
        }
        _next(a) {
          ++this.count > this.total && this.destination.next(a);
        }
      }
      function wn(k) {
        return (a) => a.lift(new _n(k));
      }
      class _n {
        constructor(a) {
          if (((this._skipCount = a), this._skipCount < 0)) throw new rt.W();
        }
        call(a, y) {
          return y.subscribe(
            0 === this._skipCount ? new p.L(a) : new En(a, this._skipCount)
          );
        }
      }
      class En extends p.L {
        constructor(a, y) {
          super(a),
            (this._skipCount = y),
            (this._count = 0),
            (this._ring = new Array(y));
        }
        _next(a) {
          const y = this._skipCount,
            j = this._count++;
          if (j < y) this._ring[j] = a;
          else {
            const Y = j % y,
              ge = this._ring,
              Ne = ge[Y];
            (ge[Y] = a), this.destination.next(Ne);
          }
        }
      }
      function Sn(k) {
        return (a) => a.lift(new Mn(k));
      }
      class Mn {
        constructor(a) {
          this.notifier = a;
        }
        call(a, y) {
          return y.subscribe(new xn(a, this.notifier));
        }
      }
      class xn extends e.Ds {
        constructor(a, y) {
          super(a), (this.hasValue = !1);
          const j = new e.IY(this);
          this.add(j), (this.innerSubscription = j);
          const Y = (0, e.ft)(y, j);
          Y !== j && (this.add(Y), (this.innerSubscription = Y));
        }
        _next(a) {
          this.hasValue && super._next(a);
        }
        notifyNext() {
          (this.hasValue = !0),
            this.innerSubscription && this.innerSubscription.unsubscribe();
        }
        notifyComplete() {}
      }
      function Cn(k) {
        return (a) => a.lift(new Rn(k));
      }
      class Rn {
        constructor(a) {
          this.predicate = a;
        }
        call(a, y) {
          return y.subscribe(new In(a, this.predicate));
        }
      }
      class In extends p.L {
        constructor(a, y) {
          super(a),
            (this.predicate = y),
            (this.skipping = !0),
            (this.index = 0);
        }
        _next(a) {
          const y = this.destination;
          this.skipping && this.tryCallPredicate(a), this.skipping || y.next(a);
        }
        tryCallPredicate(a) {
          try {
            const y = this.predicate(a, this.index++);
            this.skipping = !!y;
          } catch (y) {
            this.destination.error(y);
          }
        }
      }
      function An(...k) {
        const a = k[k.length - 1];
        return (0, E.K)(a)
          ? (k.pop(), (y) => (0, fe.z)(k, y, a))
          : (y) => (0, fe.z)(k, y);
      }
      var Pt = t(98704),
        Dt = t(43618);
      class Nt extends Oe.y {
        constructor(a, y = 0, j = Pt.e) {
          super(),
            (this.source = a),
            (this.delayTime = y),
            (this.scheduler = j),
            (!(0, Dt.k)(y) || y < 0) && (this.delayTime = 0),
            (!j || "function" != typeof j.schedule) && (this.scheduler = Pt.e);
        }
        static create(a, y = 0, j = Pt.e) {
          return new Nt(a, y, j);
        }
        static dispatch(a) {
          const { source: y, subscriber: j } = a;
          return this.add(y.subscribe(j));
        }
        _subscribe(a) {
          return this.scheduler.schedule(Nt.dispatch, this.delayTime, {
            source: this.source,
            subscriber: a,
          });
        }
      }
      function Tn(k, a = 0) {
        return function (j) {
          return j.lift(new On(k, a));
        };
      }
      class On {
        constructor(a, y) {
          (this.scheduler = a), (this.delay = y);
        }
        call(a, y) {
          return new Nt(y, this.delay, this.scheduler).subscribe(a);
        }
      }
      function Rt(k, a) {
        return "function" == typeof a
          ? (y) =>
              y.pipe(
                Rt((j, Y) =>
                  (0, x.D)(k(j, Y)).pipe((0, it.U)((ge, Ne) => a(j, ge, Y, Ne)))
                )
              )
          : (y) => y.lift(new Nn(k));
      }
      class Nn {
        constructor(a) {
          this.project = a;
        }
        call(a, y) {
          return y.subscribe(new Ln(a, this.project));
        }
      }
      class Ln extends e.Ds {
        constructor(a, y) {
          super(a), (this.project = y), (this.index = 0);
        }
        _next(a) {
          let y;
          const j = this.index++;
          try {
            y = this.project(a, j);
          } catch (Y) {
            return void this.destination.error(Y);
          }
          this._innerSub(y);
        }
        _innerSub(a) {
          const y = this.innerSubscription;
          y && y.unsubscribe();
          const j = new e.IY(this),
            Y = this.destination;
          Y.add(j),
            (this.innerSubscription = (0, e.ft)(a, j)),
            this.innerSubscription !== j && Y.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: a } = this;
          (!a || a.closed) && super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(a) {
          this.destination.next(a);
        }
      }
      function Pn() {
        return Rt(_t.y);
      }
      function Dn(k, a) {
        return a ? Rt(() => k, a) : Rt(() => k);
      }
      function kn(k) {
        return (a) => a.lift(new Bn(k));
      }
      class Bn {
        constructor(a) {
          this.notifier = a;
        }
        call(a, y) {
          const j = new jn(a),
            Y = (0, e.ft)(this.notifier, new e.IY(j));
          return Y && !j.seenValue ? (j.add(Y), y.subscribe(j)) : j;
        }
      }
      class jn extends e.Ds {
        constructor(a) {
          super(a), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
      function Fn(k, a = !1) {
        return (y) => y.lift(new Un(k, a));
      }
      class Un {
        constructor(a, y) {
          (this.predicate = a), (this.inclusive = y);
        }
        call(a, y) {
          return y.subscribe(new Wn(a, this.predicate, this.inclusive));
        }
      }
      class Wn extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.predicate = y),
            (this.inclusive = j),
            (this.index = 0);
        }
        _next(a) {
          const y = this.destination;
          let j;
          try {
            j = this.predicate(a, this.index++);
          } catch (Y) {
            return void y.error(Y);
          }
          this.nextOrComplete(a, j);
        }
        nextOrComplete(a, y) {
          const j = this.destination;
          y ? j.next(a) : (this.inclusive && j.next(a), j.complete());
        }
      }
      var vt = t(11027),
        Hn = t(83932);
      function $n(k, a, y) {
        return function (Y) {
          return Y.lift(new Vn(k, a, y));
        };
      }
      class Vn {
        constructor(a, y, j) {
          (this.nextOrObserver = a), (this.error = y), (this.complete = j);
        }
        call(a, y) {
          return y.subscribe(
            new zn(a, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class zn extends p.L {
        constructor(a, y, j, Y) {
          super(a),
            (this._tapNext = vt.Z),
            (this._tapError = vt.Z),
            (this._tapComplete = vt.Z),
            (this._tapError = j || vt.Z),
            (this._tapComplete = Y || vt.Z),
            (0, Hn.m)(y)
              ? ((this._context = this), (this._tapNext = y))
              : y &&
                ((this._context = y),
                (this._tapNext = y.next || vt.Z),
                (this._tapError = y.error || vt.Z),
                (this._tapComplete = y.complete || vt.Z));
        }
        _next(a) {
          try {
            this._tapNext.call(this._context, a);
          } catch (y) {
            return void this.destination.error(y);
          }
          this.destination.next(a);
        }
        _error(a) {
          try {
            this._tapError.call(this._context, a);
          } catch (y) {
            return void this.destination.error(y);
          }
          this.destination.error(a);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (a) {
            return void this.destination.error(a);
          }
          return this.destination.complete();
        }
      }
      const $t = { leading: !0, trailing: !1 };
      function Gn(k, a = $t) {
        return (y) => y.lift(new Kn(k, !!a.leading, !!a.trailing));
      }
      class Kn {
        constructor(a, y, j) {
          (this.durationSelector = a), (this.leading = y), (this.trailing = j);
        }
        call(a, y) {
          return y.subscribe(
            new Jn(a, this.durationSelector, this.leading, this.trailing)
          );
        }
      }
      class Jn extends e.Ds {
        constructor(a, y, j, Y) {
          super(a),
            (this.destination = a),
            (this.durationSelector = y),
            (this._leading = j),
            (this._trailing = Y),
            (this._hasValue = !1);
        }
        _next(a) {
          (this._hasValue = !0),
            (this._sendValue = a),
            this._throttled || (this._leading ? this.send() : this.throttle(a));
        }
        send() {
          const { _hasValue: a, _sendValue: y } = this;
          a && (this.destination.next(y), this.throttle(y)),
            (this._hasValue = !1),
            (this._sendValue = void 0);
        }
        throttle(a) {
          const y = this.tryDurationSelector(a);
          y && this.add((this._throttled = (0, e.ft)(y, new e.IY(this))));
        }
        tryDurationSelector(a) {
          try {
            return this.durationSelector(a);
          } catch (y) {
            return this.destination.error(y), null;
          }
        }
        throttlingDone() {
          const { _throttled: a, _trailing: y } = this;
          a && a.unsubscribe(), (this._throttled = void 0), y && this.send();
        }
        notifyNext() {
          this.throttlingDone();
        }
        notifyComplete() {
          this.throttlingDone();
        }
      }
      function Zn(k, a = o.P, y = $t) {
        return (j) => j.lift(new Qn(k, a, y.leading, y.trailing));
      }
      class Qn {
        constructor(a, y, j, Y) {
          (this.duration = a),
            (this.scheduler = y),
            (this.leading = j),
            (this.trailing = Y);
        }
        call(a, y) {
          return y.subscribe(
            new Yn(
              a,
              this.duration,
              this.scheduler,
              this.leading,
              this.trailing
            )
          );
        }
      }
      class Yn extends p.L {
        constructor(a, y, j, Y, ge) {
          super(a),
            (this.duration = y),
            (this.scheduler = j),
            (this.leading = Y),
            (this.trailing = ge),
            (this._hasTrailingValue = !1),
            (this._trailingValue = null);
        }
        _next(a) {
          this.throttled
            ? this.trailing &&
              ((this._trailingValue = a), (this._hasTrailingValue = !0))
            : (this.add(
                (this.throttled = this.scheduler.schedule(Xn, this.duration, {
                  subscriber: this,
                }))
              ),
              this.leading
                ? this.destination.next(a)
                : this.trailing &&
                  ((this._trailingValue = a), (this._hasTrailingValue = !0)));
        }
        _complete() {
          this._hasTrailingValue
            ? (this.destination.next(this._trailingValue),
              this.destination.complete())
            : this.destination.complete();
        }
        clearThrottle() {
          const a = this.throttled;
          a &&
            (this.trailing &&
              this._hasTrailingValue &&
              (this.destination.next(this._trailingValue),
              (this._trailingValue = null),
              (this._hasTrailingValue = !1)),
            a.unsubscribe(),
            this.remove(a),
            (this.throttled = null));
        }
      }
      function Xn(k) {
        const { subscriber: a } = k;
        a.clearThrottle();
      }
      var qn = t(73737);
      function ei(k = o.P) {
        return (a) =>
          (0, qn.P)(() =>
            a.pipe(
              Tt(
                ({ current: y }, j) => ({
                  value: j,
                  current: k.now(),
                  last: y,
                }),
                { current: k.now(), value: void 0, last: void 0 }
              ),
              (0, it.U)(({ current: y, last: j, value: Y }) => new ti(Y, y - j))
            )
          );
      }
      class ti {
        constructor(a, y) {
          (this.value = a), (this.interval = y);
        }
      }
      var ri = t(95025);
      function Vt(k, a, y = o.P) {
        return (j) => {
          let Y = Z(k),
            ge = Y ? +k - y.now() : Math.abs(k);
          return j.lift(new ni(ge, Y, a, y));
        };
      }
      class ni {
        constructor(a, y, j, Y) {
          (this.waitFor = a),
            (this.absoluteTimeout = y),
            (this.withObservable = j),
            (this.scheduler = Y);
        }
        call(a, y) {
          return y.subscribe(
            new kt(
              a,
              this.absoluteTimeout,
              this.waitFor,
              this.withObservable,
              this.scheduler
            )
          );
        }
      }
      class kt extends e.Ds {
        constructor(a, y, j, Y, ge) {
          super(a),
            (this.absoluteTimeout = y),
            (this.waitFor = j),
            (this.withObservable = Y),
            (this.scheduler = ge),
            this.scheduleTimeout();
        }
        static dispatchTimeout(a) {
          const { withObservable: y } = a;
          a._unsubscribeAndRecycle(), a.add((0, e.ft)(y, new e.IY(a)));
        }
        scheduleTimeout() {
          const { action: a } = this;
          a
            ? (this.action = a.schedule(this, this.waitFor))
            : this.add(
                (this.action = this.scheduler.schedule(
                  kt.dispatchTimeout,
                  this.waitFor,
                  this
                ))
              );
        }
        _next(a) {
          this.absoluteTimeout || this.scheduleTimeout(), super._next(a);
        }
        _unsubscribe() {
          (this.action = void 0),
            (this.scheduler = null),
            (this.withObservable = null);
        }
      }
      var ii = t(2040);
      function si(k, a = o.P) {
        return Vt(k, (0, ii._)(new ri.W()), a);
      }
      function oi(k = o.P) {
        return (0, it.U)((a) => new ai(a, k.now()));
      }
      class ai {
        constructor(a, y) {
          (this.value = a), (this.timestamp = y);
        }
      }
      function ci(k, a, y) {
        return 0 === y ? [a] : (k.push(a), k);
      }
      function ui() {
        return Ot(ci, []);
      }
      function li(k) {
        return function (y) {
          return y.lift(new hi(k));
        };
      }
      class hi {
        constructor(a) {
          this.windowBoundaries = a;
        }
        call(a, y) {
          const j = new fi(a),
            Y = y.subscribe(j);
          return (
            Y.closed || j.add((0, e.ft)(this.windowBoundaries, new e.IY(j))), Y
          );
        }
      }
      class fi extends e.Ds {
        constructor(a) {
          super(a), (this.window = new ot.xQ()), a.next(this.window);
        }
        notifyNext() {
          this.openWindow();
        }
        notifyError(a) {
          this._error(a);
        }
        notifyComplete() {
          this._complete();
        }
        _next(a) {
          this.window.next(a);
        }
        _error(a) {
          this.window.error(a), this.destination.error(a);
        }
        _complete() {
          this.window.complete(), this.destination.complete();
        }
        _unsubscribe() {
          this.window = null;
        }
        openWindow() {
          const a = this.window;
          a && a.complete();
          const y = this.destination,
            j = (this.window = new ot.xQ());
          y.next(j);
        }
      }
      function di(k, a = 0) {
        return function (j) {
          return j.lift(new pi(k, a));
        };
      }
      class pi {
        constructor(a, y) {
          (this.windowSize = a), (this.startWindowEvery = y);
        }
        call(a, y) {
          return y.subscribe(new gi(a, this.windowSize, this.startWindowEvery));
        }
      }
      class gi extends p.L {
        constructor(a, y, j) {
          super(a),
            (this.destination = a),
            (this.windowSize = y),
            (this.startWindowEvery = j),
            (this.windows = [new ot.xQ()]),
            (this.count = 0),
            a.next(this.windows[0]);
        }
        _next(a) {
          const y =
              this.startWindowEvery > 0
                ? this.startWindowEvery
                : this.windowSize,
            j = this.destination,
            Y = this.windowSize,
            ge = this.windows,
            Ne = ge.length;
          for (let et = 0; et < Ne && !this.closed; et++) ge[et].next(a);
          const Ye = this.count - Y + 1;
          if (
            (Ye >= 0 && Ye % y == 0 && !this.closed && ge.shift().complete(),
            ++this.count % y == 0 && !this.closed)
          ) {
            const et = new ot.xQ();
            ge.push(et), j.next(et);
          }
        }
        _error(a) {
          const y = this.windows;
          if (y) for (; y.length > 0 && !this.closed; ) y.shift().error(a);
          this.destination.error(a);
        }
        _complete() {
          const a = this.windows;
          if (a) for (; a.length > 0 && !this.closed; ) a.shift().complete();
          this.destination.complete();
        }
        _unsubscribe() {
          (this.count = 0), (this.windows = null);
        }
      }
      function mi(k) {
        let a = o.P,
          y = null,
          j = Number.POSITIVE_INFINITY;
        return (
          (0, E.K)(arguments[3]) && (a = arguments[3]),
          (0, E.K)(arguments[2])
            ? (a = arguments[2])
            : (0, Dt.k)(arguments[2]) && (j = Number(arguments[2])),
          (0, E.K)(arguments[1])
            ? (a = arguments[1])
            : (0, Dt.k)(arguments[1]) && (y = Number(arguments[1])),
          function (ge) {
            return ge.lift(new bi(k, y, j, a));
          }
        );
      }
      class bi {
        constructor(a, y, j, Y) {
          (this.windowTimeSpan = a),
            (this.windowCreationInterval = y),
            (this.maxWindowSize = j),
            (this.scheduler = Y);
        }
        call(a, y) {
          return y.subscribe(
            new vi(
              a,
              this.windowTimeSpan,
              this.windowCreationInterval,
              this.maxWindowSize,
              this.scheduler
            )
          );
        }
      }
      class yi extends ot.xQ {
        constructor() {
          super(...arguments), (this._numberOfNextedValues = 0);
        }
        next(a) {
          this._numberOfNextedValues++, super.next(a);
        }
        get numberOfNextedValues() {
          return this._numberOfNextedValues;
        }
      }
      class vi extends p.L {
        constructor(a, y, j, Y, ge) {
          super(a),
            (this.destination = a),
            (this.windowTimeSpan = y),
            (this.windowCreationInterval = j),
            (this.maxWindowSize = Y),
            (this.scheduler = ge),
            (this.windows = []);
          const Ne = this.openWindow();
          if (null !== j && j >= 0) {
            const et = {
              windowTimeSpan: y,
              windowCreationInterval: j,
              subscriber: this,
              scheduler: ge,
            };
            this.add(
              ge.schedule(zt, y, {
                subscriber: this,
                window: Ne,
                context: null,
              })
            ),
              this.add(ge.schedule(_i, j, et));
          } else
            this.add(
              ge.schedule(wi, y, {
                subscriber: this,
                window: Ne,
                windowTimeSpan: y,
              })
            );
        }
        _next(a) {
          const y = this.windows,
            j = y.length;
          for (let Y = 0; Y < j; Y++) {
            const ge = y[Y];
            ge.closed ||
              (ge.next(a),
              ge.numberOfNextedValues >= this.maxWindowSize &&
                this.closeWindow(ge));
          }
        }
        _error(a) {
          const y = this.windows;
          for (; y.length > 0; ) y.shift().error(a);
          this.destination.error(a);
        }
        _complete() {
          const a = this.windows;
          for (; a.length > 0; ) {
            const y = a.shift();
            y.closed || y.complete();
          }
          this.destination.complete();
        }
        openWindow() {
          const a = new yi();
          return this.windows.push(a), this.destination.next(a), a;
        }
        closeWindow(a) {
          a.complete();
          const y = this.windows;
          y.splice(y.indexOf(a), 1);
        }
      }
      function wi(k) {
        const { subscriber: a, windowTimeSpan: y, window: j } = k;
        j && a.closeWindow(j), (k.window = a.openWindow()), this.schedule(k, y);
      }
      function _i(k) {
        const {
            windowTimeSpan: a,
            subscriber: y,
            scheduler: j,
            windowCreationInterval: Y,
          } = k,
          ge = y.openWindow();
        let Ye = { action: this, subscription: null };
        (Ye.subscription = j.schedule(zt, a, {
          subscriber: y,
          window: ge,
          context: Ye,
        })),
          this.add(Ye.subscription),
          this.schedule(k, Y);
      }
      function zt(k) {
        const { subscriber: a, window: y, context: j } = k;
        j && j.action && j.subscription && j.action.remove(j.subscription),
          a.closeWindow(y);
      }
      function Ei(k, a) {
        return (y) => y.lift(new Si(k, a));
      }
      class Si {
        constructor(a, y) {
          (this.openings = a), (this.closingSelector = y);
        }
        call(a, y) {
          return y.subscribe(new Mi(a, this.openings, this.closingSelector));
        }
      }
      class Mi extends K.L {
        constructor(a, y, j) {
          super(a),
            (this.openings = y),
            (this.closingSelector = j),
            (this.contexts = []),
            this.add((this.openSubscription = (0, D.D)(this, y, y)));
        }
        _next(a) {
          const { contexts: y } = this;
          if (y) {
            const j = y.length;
            for (let Y = 0; Y < j; Y++) y[Y].window.next(a);
          }
        }
        _error(a) {
          const { contexts: y } = this;
          if (((this.contexts = null), y)) {
            const j = y.length;
            let Y = -1;
            for (; ++Y < j; ) {
              const ge = y[Y];
              ge.window.error(a), ge.subscription.unsubscribe();
            }
          }
          super._error(a);
        }
        _complete() {
          const { contexts: a } = this;
          if (((this.contexts = null), a)) {
            const y = a.length;
            let j = -1;
            for (; ++j < y; ) {
              const Y = a[j];
              Y.window.complete(), Y.subscription.unsubscribe();
            }
          }
          super._complete();
        }
        _unsubscribe() {
          const { contexts: a } = this;
          if (((this.contexts = null), a)) {
            const y = a.length;
            let j = -1;
            for (; ++j < y; ) {
              const Y = a[j];
              Y.window.unsubscribe(), Y.subscription.unsubscribe();
            }
          }
        }
        notifyNext(a, y, j, Y, ge) {
          if (a === this.openings) {
            let Ne;
            try {
              const { closingSelector: wt } = this;
              Ne = wt(y);
            } catch (wt) {
              return this.error(wt);
            }
            const Ye = new ot.xQ(),
              et = new O.w(),
              Lt = { window: Ye, subscription: et };
            this.contexts.push(Lt);
            const It = (0, D.D)(this, Ne, Lt);
            It.closed
              ? this.closeWindow(this.contexts.length - 1)
              : ((It.context = Lt), et.add(It)),
              this.destination.next(Ye);
          } else this.closeWindow(this.contexts.indexOf(a));
        }
        notifyError(a) {
          this.error(a);
        }
        notifyComplete(a) {
          a !== this.openSubscription &&
            this.closeWindow(this.contexts.indexOf(a.context));
        }
        closeWindow(a) {
          if (-1 === a) return;
          const { contexts: y } = this,
            j = y[a],
            { window: Y, subscription: ge } = j;
          y.splice(a, 1), Y.complete(), ge.unsubscribe();
        }
      }
      function xi(k) {
        return function (y) {
          return y.lift(new Ci(k));
        };
      }
      class Ci {
        constructor(a) {
          this.closingSelector = a;
        }
        call(a, y) {
          return y.subscribe(new Ri(a, this.closingSelector));
        }
      }
      class Ri extends K.L {
        constructor(a, y) {
          super(a),
            (this.destination = a),
            (this.closingSelector = y),
            this.openWindow();
        }
        notifyNext(a, y, j, Y, ge) {
          this.openWindow(ge);
        }
        notifyError(a) {
          this._error(a);
        }
        notifyComplete(a) {
          this.openWindow(a);
        }
        _next(a) {
          this.window.next(a);
        }
        _error(a) {
          this.window.error(a),
            this.destination.error(a),
            this.unsubscribeClosingNotification();
        }
        _complete() {
          this.window.complete(),
            this.destination.complete(),
            this.unsubscribeClosingNotification();
        }
        unsubscribeClosingNotification() {
          this.closingNotification && this.closingNotification.unsubscribe();
        }
        openWindow(a = null) {
          a && (this.remove(a), a.unsubscribe());
          const y = this.window;
          y && y.complete();
          const j = (this.window = new ot.xQ());
          let Y;
          this.destination.next(j);
          try {
            const { closingSelector: ge } = this;
            Y = ge();
          } catch (ge) {
            return this.destination.error(ge), void this.window.error(ge);
          }
          this.add((this.closingNotification = (0, D.D)(this, Y)));
        }
      }
      function Ii(...k) {
        return (a) => {
          let y;
          return (
            "function" == typeof k[k.length - 1] && (y = k.pop()),
            a.lift(new Ai(k, y))
          );
        };
      }
      class Ai {
        constructor(a, y) {
          (this.observables = a), (this.project = y);
        }
        call(a, y) {
          return y.subscribe(new Ti(a, this.observables, this.project));
        }
      }
      class Ti extends K.L {
        constructor(a, y, j) {
          super(a),
            (this.observables = y),
            (this.project = j),
            (this.toRespond = []);
          const Y = y.length;
          this.values = new Array(Y);
          for (let ge = 0; ge < Y; ge++) this.toRespond.push(ge);
          for (let ge = 0; ge < Y; ge++)
            this.add((0, D.D)(this, y[ge], void 0, ge));
        }
        notifyNext(a, y, j) {
          this.values[j] = y;
          const Y = this.toRespond;
          if (Y.length > 0) {
            const ge = Y.indexOf(j);
            -1 !== ge && Y.splice(ge, 1);
          }
        }
        notifyComplete() {}
        _next(a) {
          if (0 === this.toRespond.length) {
            const y = [a, ...this.values];
            this.project ? this._tryProject(y) : this.destination.next(y);
          }
        }
        _tryProject(a) {
          let y;
          try {
            y = this.project.apply(this, a);
          } catch (j) {
            return void this.destination.error(j);
          }
          this.destination.next(y);
        }
      }
      var Gt = t(85289);
      function Oi(...k) {
        return function (y) {
          return y.lift.call((0, Gt.$R)(y, ...k));
        };
      }
      function Ni(k) {
        return (a) => a.lift(new Gt.mx(k));
      }
    },
    91184: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      const e = t(82016);
      function g(o, i, s) {
        try {
          Reflect.apply(o, i, s);
        } catch (l) {
          setTimeout(() => {
            throw l;
          });
        }
      }
      r.default = class d extends e.EventEmitter {
        emit(i, ...s) {
          let l = "error" === i;
          const b = this._events;
          if (void 0 !== b) l = l && void 0 === b.error;
          else if (!l) return !1;
          if (l) {
            let p;
            if ((s.length > 0 && ([p] = s), p instanceof Error)) throw p;
            const c = new Error(
              "Unhandled error." + (p ? ` (${p.message})` : "")
            );
            throw ((c.context = p), c);
          }
          const h = b[i];
          if (void 0 === h) return !1;
          if ("function" == typeof h) g(h, this, s);
          else {
            const p = h.length,
              c = (function u(o) {
                const i = o.length,
                  s = new Array(i);
                for (let l = 0; l < i; l += 1) s[l] = o[l];
                return s;
              })(h);
            for (let n = 0; n < p; n += 1) g(c[n], this, s);
          }
          return !0;
        }
      };
    },
    23689: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.assertExhaustive =
          r.assertStruct =
          r.assert =
          r.AssertionError =
            void 0);
      const e = t(13921);
      function o(h, p) {
        return (function u(h) {
          var p, c;
          return (
            "string" ==
            typeof (null ===
              (c =
                null === (p = h?.prototype) || void 0 === p
                  ? void 0
                  : p.constructor) || void 0 === c
              ? void 0
              : c.name)
          );
        })(h)
          ? new h({ message: p })
          : h({ message: p });
      }
      class i extends Error {
        constructor(p) {
          super(p.message), (this.code = "ERR_ASSERTION");
        }
      }
      (r.AssertionError = i),
        (r.assert = function s(h, p = "Assertion failed.", c = i) {
          if (!h) throw p instanceof Error ? p : o(c, p);
        }),
        (r.assertStruct = function l(h, p, c = "Assertion failed", n = i) {
          try {
            (0, e.assert)(h, p);
          } catch (f) {
            throw o(
              n,
              `${c}: ${(function d(h) {
                const p = (function g(h) {
                  return "object" == typeof h && null !== h && "message" in h;
                })(h)
                  ? h.message
                  : String(h);
                return p.endsWith(".") ? p.slice(0, -1) : p;
              })(f)}.`
            );
          }
        }),
        (r.assertExhaustive = function b(h) {
          throw new Error(
            "Invalid branch reached. Should be detected during compilation."
          );
        });
    },
    73845: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.base64 = void 0);
      const e = t(13921),
        g = t(23689);
      r.base64 = (d, o = {}) => {
        var i, s;
        const l = null !== (i = o.paddingRequired) && void 0 !== i && i,
          b = null !== (s = o.characterSet) && void 0 !== s ? s : "base64";
        let h, p;
        return (
          "base64" === b
            ? (h = String.raw`[A-Za-z0-9+\/]`)
            : ((0, g.assert)("base64url" === b),
              (h = String.raw`[-_A-Za-z0-9]`)),
          (p = l
            ? new RegExp(`^(?:${h}{4})*(?:${h}{3}=|${h}{2}==)?$`, "u")
            : new RegExp(
                `^(?:${h}{4})*(?:${h}{2,3}|${h}{3}=|${h}{2}==)?$`,
                "u"
              )),
          (0, e.pattern)(d, p)
        );
      };
    },
    6468: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createDataView =
          r.concatBytes =
          r.valueToBytes =
          r.stringToBytes =
          r.numberToBytes =
          r.signedBigIntToBytes =
          r.bigIntToBytes =
          r.hexToBytes =
          r.bytesToString =
          r.bytesToNumber =
          r.bytesToSignedBigInt =
          r.bytesToBigInt =
          r.bytesToHex =
          r.assertIsBytes =
          r.isBytes =
            void 0);
      const e = t(23689),
        g = t(1506),
        u = 48,
        d = 58,
        o = 87,
        s = (function i() {
          const O = [];
          return () => {
            if (0 === O.length)
              for (let D = 0; D < 256; D++)
                O.push(D.toString(16).padStart(2, "0"));
            return O;
          };
        })();
      function l(O) {
        return O instanceof Uint8Array;
      }
      function b(O) {
        (0, e.assert)(l(O), "Value must be a Uint8Array.");
      }
      function h(O) {
        if ((b(O), 0 === O.length)) return "0x";
        const D = s(),
          K = new Array(O.length);
        for (let G = 0; G < O.length; G++) K[G] = D[O[G]];
        return (0, g.add0x)(K.join(""));
      }
      function p(O) {
        b(O);
        const D = h(O);
        return BigInt(D);
      }
      function v(O) {
        var D;
        if (
          "0x" ===
          (null === (D = O?.toLowerCase) || void 0 === D ? void 0 : D.call(O))
        )
          return new Uint8Array();
        (0, g.assertIsHexString)(O);
        const K = (0, g.remove0x)(O).toLowerCase(),
          G = K.length % 2 == 0 ? K : `0${K}`,
          re = new Uint8Array(G.length / 2);
        for (let ue = 0; ue < re.length; ue++) {
          const P = G.charCodeAt(2 * ue),
            m = G.charCodeAt(2 * ue + 1);
          re[ue] = 16 * (P - (P < d ? u : o)) + (m - (m < d ? u : o));
        }
        return re;
      }
      function E(O) {
        return (
          (0, e.assert)("bigint" == typeof O, "Value must be a bigint."),
          (0, e.assert)(O >= BigInt(0), "Value must be a non-negative bigint."),
          v(O.toString(16))
        );
      }
      function A(O) {
        return (
          (0, e.assert)("number" == typeof O, "Value must be a number."),
          (0, e.assert)(O >= 0, "Value must be a non-negative number."),
          (0, e.assert)(
            Number.isSafeInteger(O),
            "Value is not a safe integer. Use `bigIntToBytes` instead."
          ),
          v(O.toString(16))
        );
      }
      function S(O) {
        return (
          (0, e.assert)("string" == typeof O, "Value must be a string."),
          new TextEncoder().encode(O)
        );
      }
      function M(O) {
        if ("bigint" == typeof O) return E(O);
        if ("number" == typeof O) return A(O);
        if ("string" == typeof O) return O.startsWith("0x") ? v(O) : S(O);
        if (l(O)) return O;
        throw new TypeError(`Unsupported value type: "${typeof O}".`);
      }
      (r.isBytes = l),
        (r.assertIsBytes = b),
        (r.bytesToHex = h),
        (r.bytesToBigInt = p),
        (r.bytesToSignedBigInt = function c(O) {
          b(O);
          let D = BigInt(0);
          for (const K of O) D = (D << BigInt(8)) + BigInt(K);
          return BigInt.asIntN(8 * O.length, D);
        }),
        (r.bytesToNumber = function n(O) {
          b(O);
          const D = p(O);
          return (
            (0, e.assert)(
              D <= BigInt(Number.MAX_SAFE_INTEGER),
              "Number is not a safe integer. Use `bytesToBigInt` instead."
            ),
            Number(D)
          );
        }),
        (r.bytesToString = function f(O) {
          return b(O), new TextDecoder().decode(O);
        }),
        (r.hexToBytes = v),
        (r.bigIntToBytes = E),
        (r.signedBigIntToBytes = function C(O, D) {
          (0, e.assert)("bigint" == typeof O, "Value must be a bigint."),
            (0, e.assert)(
              "number" == typeof D,
              "Byte length must be a number."
            ),
            (0, e.assert)(D > 0, "Byte length must be greater than 0."),
            (0, e.assert)(
              (function w(O, D) {
                (0, e.assert)(D > 0);
                const K = O >> BigInt(31);
                return !(((~O & K) + (O & ~K)) >> BigInt(8 * D - 1));
              })(O, D),
              "Byte length is too small to represent the given value."
            );
          let K = O;
          const G = new Uint8Array(D);
          for (let re = 0; re < G.length; re++)
            (G[re] = Number(BigInt.asUintN(8, K))), (K >>= BigInt(8));
          return G.reverse();
        }),
        (r.numberToBytes = A),
        (r.stringToBytes = S),
        (r.valueToBytes = M),
        (r.concatBytes = function N(O) {
          const D = new Array(O.length);
          let K = 0;
          for (let re = 0; re < O.length; re++) {
            const ue = M(O[re]);
            (D[re] = ue), (K += ue.length);
          }
          const G = new Uint8Array(K);
          for (let re = 0, ue = 0; re < D.length; re++)
            G.set(D[re], ue), (ue += D[re].length);
          return G;
        }),
        (r.createDataView = function U(O) {
          if (typeof Buffer < "u" && O instanceof Buffer) {
            const D = O.buffer.slice(O.byteOffset, O.byteOffset + O.byteLength);
            return new DataView(D);
          }
          return new DataView(O.buffer, O.byteOffset, O.byteLength);
        });
    },
    17634: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ChecksumStruct = void 0);
      const e = t(13921),
        g = t(73845);
      r.ChecksumStruct = (0, e.size)(
        (0, g.base64)((0, e.string)(), { paddingRequired: !0 }),
        44,
        44
      );
    },
    56021: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createHex =
          r.createBytes =
          r.createBigInt =
          r.createNumber =
            void 0);
      const e = t(13921),
        g = t(23689),
        u = t(6468),
        d = t(1506),
        o = (0, e.union)([
          (0, e.number)(),
          (0, e.bigint)(),
          (0, e.string)(),
          d.StrictHexStruct,
        ]),
        i = (0, e.coerce)((0, e.number)(), o, Number),
        s = (0, e.coerce)((0, e.bigint)(), o, BigInt),
        b =
          ((0, e.union)([d.StrictHexStruct, (0, e.instance)(Uint8Array)]),
          (0, e.coerce)(
            (0, e.instance)(Uint8Array),
            (0, e.union)([d.StrictHexStruct]),
            u.hexToBytes
          )),
        h = (0, e.coerce)(
          d.StrictHexStruct,
          (0, e.instance)(Uint8Array),
          u.bytesToHex
        );
      (r.createNumber = function p(v) {
        try {
          const E = (0, e.create)(v, i);
          return (
            (0, g.assert)(
              Number.isFinite(E),
              `Expected a number-like value, got "${v}".`
            ),
            E
          );
        } catch (E) {
          throw E instanceof e.StructError
            ? new Error(`Expected a number-like value, got "${v}".`)
            : E;
        }
      }),
        (r.createBigInt = function c(v) {
          try {
            return (0, e.create)(v, s);
          } catch (E) {
            throw E instanceof e.StructError
              ? new Error(
                  `Expected a number-like value, got "${String(E.value)}".`
                )
              : E;
          }
        }),
        (r.createBytes = function n(v) {
          if ("string" == typeof v && "0x" === v.toLowerCase())
            return new Uint8Array();
          try {
            return (0, e.create)(v, b);
          } catch (E) {
            throw E instanceof e.StructError
              ? new Error(
                  `Expected a bytes-like value, got "${String(E.value)}".`
                )
              : E;
          }
        }),
        (r.createHex = function f(v) {
          if (
            (v instanceof Uint8Array && 0 === v.length) ||
            ("string" == typeof v && "0x" === v.toLowerCase())
          )
            return "0x";
          try {
            return (0, e.create)(v, h);
          } catch (E) {
            throw E instanceof e.StructError
              ? new Error(
                  `Expected a bytes-like value, got "${String(E.value)}".`
                )
              : E;
          }
        });
    },
    56722: function (L, r) {
      "use strict";
      var g,
        u,
        t =
          (this && this.__classPrivateFieldSet) ||
          function (i, s, l, b, h) {
            if ("m" === b)
              throw new TypeError("Private method is not writable");
            if ("a" === b && !h)
              throw new TypeError(
                "Private accessor was defined without a setter"
              );
            if ("function" == typeof s ? i !== s || !h : !s.has(i))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it"
              );
            return (
              "a" === b ? h.call(i, l) : h ? (h.value = l) : s.set(i, l), l
            );
          },
        e =
          (this && this.__classPrivateFieldGet) ||
          function (i, s, l, b) {
            if ("a" === l && !b)
              throw new TypeError(
                "Private accessor was defined without a getter"
              );
            if ("function" == typeof s ? i !== s || !b : !s.has(i))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it"
              );
            return "m" === l
              ? b
              : "a" === l
              ? b.call(i)
              : b
              ? b.value
              : s.get(i);
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.FrozenSet = r.FrozenMap = void 0);
      class d {
        constructor(s) {
          g.set(this, void 0), t(this, g, new Map(s), "f"), Object.freeze(this);
        }
        get size() {
          return e(this, g, "f").size;
        }
        [((g = new WeakMap()), Symbol.iterator)]() {
          return e(this, g, "f")[Symbol.iterator]();
        }
        entries() {
          return e(this, g, "f").entries();
        }
        forEach(s, l) {
          return e(this, g, "f").forEach((b, h, p) => s.call(l, b, h, this));
        }
        get(s) {
          return e(this, g, "f").get(s);
        }
        has(s) {
          return e(this, g, "f").has(s);
        }
        keys() {
          return e(this, g, "f").keys();
        }
        values() {
          return e(this, g, "f").values();
        }
        toString() {
          return `FrozenMap(${this.size}) {${
            this.size > 0
              ? ` ${[...this.entries()]
                  .map(([s, l]) => `${String(s)} => ${String(l)}`)
                  .join(", ")} `
              : ""
          }}`;
        }
      }
      r.FrozenMap = d;
      class o {
        constructor(s) {
          u.set(this, void 0), t(this, u, new Set(s), "f"), Object.freeze(this);
        }
        get size() {
          return e(this, u, "f").size;
        }
        [((u = new WeakMap()), Symbol.iterator)]() {
          return e(this, u, "f")[Symbol.iterator]();
        }
        entries() {
          return e(this, u, "f").entries();
        }
        forEach(s, l) {
          return e(this, u, "f").forEach((b, h, p) => s.call(l, b, h, this));
        }
        has(s) {
          return e(this, u, "f").has(s);
        }
        keys() {
          return e(this, u, "f").keys();
        }
        values() {
          return e(this, u, "f").values();
        }
        toString() {
          return `FrozenSet(${this.size}) {${
            this.size > 0
              ? ` ${[...this.values()].map((s) => String(s)).join(", ")} `
              : ""
          }}`;
        }
      }
      (r.FrozenSet = o),
        Object.freeze(d),
        Object.freeze(d.prototype),
        Object.freeze(o),
        Object.freeze(o.prototype);
    },
    1506: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.remove0x =
          r.add0x =
          r.assertIsStrictHexString =
          r.assertIsHexString =
          r.isStrictHexString =
          r.isHexString =
          r.StrictHexStruct =
          r.HexStruct =
            void 0);
      const e = t(13921),
        g = t(23689);
      function u(b) {
        return (0, e.is)(b, r.HexStruct);
      }
      function d(b) {
        return (0, e.is)(b, r.StrictHexStruct);
      }
      (r.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu)),
        (r.StrictHexStruct = (0, e.pattern)(
          (0, e.string)(),
          /^0x[0-9a-f]+$/iu
        )),
        (r.isHexString = u),
        (r.isStrictHexString = d),
        (r.assertIsHexString = function o(b) {
          (0, g.assert)(u(b), "Value must be a hexadecimal string.");
        }),
        (r.assertIsStrictHexString = function i(b) {
          (0, g.assert)(
            d(b),
            'Value must be a hexadecimal string, starting with "0x".'
          );
        }),
        (r.add0x = function s(b) {
          return b.startsWith("0x")
            ? b
            : b.startsWith("0X")
            ? `0x${b.substring(2)}`
            : `0x${b}`;
        }),
        (r.remove0x = function l(b) {
          return b.startsWith("0x") || b.startsWith("0X") ? b.substring(2) : b;
        });
    },
    27184: function (L, r, t) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, d, o, i) {
                void 0 === i && (i = o);
                var s = Object.getOwnPropertyDescriptor(d, o);
                (!s ||
                  ("get" in s
                    ? !d.__esModule
                    : s.writable || s.configurable)) &&
                  (s = {
                    enumerable: !0,
                    get: function () {
                      return d[o];
                    },
                  }),
                  Object.defineProperty(u, i, s);
              }
            : function (u, d, o, i) {
                void 0 === i && (i = o), (u[i] = d[o]);
              }),
        g =
          (this && this.__exportStar) ||
          function (u, d) {
            for (var o in u)
              "default" !== o &&
                !Object.prototype.hasOwnProperty.call(d, o) &&
                e(d, u, o);
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        g(t(23689), r),
        g(t(73845), r),
        g(t(6468), r),
        g(t(17634), r),
        g(t(56021), r),
        g(t(56722), r),
        g(t(1506), r),
        g(t(16261), r),
        g(t(77464), r),
        g(t(3571), r),
        g(t(6885), r),
        g(t(35127), r),
        g(t(49246), r),
        g(t(39383), r);
    },
    16261: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.validateJsonAndGetSize =
          r.getJsonRpcIdValidator =
          r.assertIsJsonRpcError =
          r.isJsonRpcError =
          r.assertIsJsonRpcFailure =
          r.isJsonRpcFailure =
          r.assertIsJsonRpcSuccess =
          r.isJsonRpcSuccess =
          r.assertIsJsonRpcResponse =
          r.isJsonRpcResponse =
          r.assertIsPendingJsonRpcResponse =
          r.isPendingJsonRpcResponse =
          r.JsonRpcResponseStruct =
          r.JsonRpcFailureStruct =
          r.JsonRpcSuccessStruct =
          r.PendingJsonRpcResponseStruct =
          r.assertIsJsonRpcRequest =
          r.isJsonRpcRequest =
          r.assertIsJsonRpcNotification =
          r.isJsonRpcNotification =
          r.JsonRpcNotificationStruct =
          r.JsonRpcRequestStruct =
          r.JsonRpcParamsStruct =
          r.JsonRpcErrorStruct =
          r.JsonRpcIdStruct =
          r.JsonRpcVersionStruct =
          r.jsonrpc2 =
          r.isValidJson =
          r.JsonStruct =
            void 0);
      const e = t(13921),
        g = t(23689),
        u = t(3571);
      function S(M, N = !1) {
        const U = new Set();
        return (function O(D, K) {
          if (void 0 === D) return [!1, 0];
          if (null === D) return [!0, K ? 0 : u.JsonSize.Null];
          const G = typeof D;
          try {
            if ("function" === G) return [!1, 0];
            if ("string" === G || D instanceof String)
              return [
                !0,
                K ? 0 : (0, u.calculateStringSize)(D) + 2 * u.JsonSize.Quote,
              ];
            if ("boolean" === G || D instanceof Boolean)
              return K
                ? [!0, 0]
                : [!0, 1 == D ? u.JsonSize.True : u.JsonSize.False];
            if ("number" === G || D instanceof Number)
              return K ? [!0, 0] : [!0, (0, u.calculateNumberSize)(D)];
            if (D instanceof Date)
              return K
                ? [!0, 0]
                : [
                    !0,
                    isNaN(D.getDate())
                      ? u.JsonSize.Null
                      : u.JsonSize.Date + 2 * u.JsonSize.Quote,
                  ];
          } catch {
            return [!1, 0];
          }
          if (!(0, u.isPlainObject)(D) && !Array.isArray(D)) return [!1, 0];
          if (U.has(D)) return [!1, 0];
          U.add(D);
          try {
            return [
              !0,
              Object.entries(D).reduce(
                (re, [ue, P], m, _) => {
                  let [I, R] = O(P, K);
                  if (!I)
                    throw new Error(
                      "JSON validation did not pass. Validation process stopped."
                    );
                  return (
                    U.delete(D),
                    K
                      ? 0
                      : re +
                        (Array.isArray(D)
                          ? 0
                          : ue.length +
                            u.JsonSize.Comma +
                            2 * u.JsonSize.Colon) +
                        R +
                        (m < _.length - 1 ? u.JsonSize.Comma : 0)
                  );
                },
                K ? 0 : 2 * u.JsonSize.Wrapper
              ),
            ];
          } catch {
            return [!1, 0];
          }
        })(M, N);
      }
      (r.JsonStruct = (0, e.define)("Json", (M) => {
        const [N] = S(M, !0);
        return !!N || "Expected a valid JSON-serializable value";
      })),
        (r.isValidJson = function d(M) {
          return (0, e.is)(M, r.JsonStruct);
        }),
        (r.jsonrpc2 = "2.0"),
        (r.JsonRpcVersionStruct = (0, e.literal)(r.jsonrpc2)),
        (r.JsonRpcIdStruct = (0, e.nullable)(
          (0, e.union)([(0, e.number)(), (0, e.string)()])
        )),
        (r.JsonRpcErrorStruct = (0, e.object)({
          code: (0, e.integer)(),
          message: (0, e.string)(),
          data: (0, e.optional)(r.JsonStruct),
          stack: (0, e.optional)((0, e.string)()),
        })),
        (r.JsonRpcParamsStruct = (0, e.optional)(
          (0, e.union)([
            (0, e.record)((0, e.string)(), r.JsonStruct),
            (0, e.array)(r.JsonStruct),
          ])
        )),
        (r.JsonRpcRequestStruct = (0, e.object)({
          id: r.JsonRpcIdStruct,
          jsonrpc: r.JsonRpcVersionStruct,
          method: (0, e.string)(),
          params: r.JsonRpcParamsStruct,
        })),
        (r.JsonRpcNotificationStruct = (0, e.omit)(r.JsonRpcRequestStruct, [
          "id",
        ])),
        (r.isJsonRpcNotification = function o(M) {
          return (0, e.is)(M, r.JsonRpcNotificationStruct);
        }),
        (r.assertIsJsonRpcNotification = function i(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcNotificationStruct,
            "Invalid JSON-RPC notification",
            N
          );
        }),
        (r.isJsonRpcRequest = function s(M) {
          return (0, e.is)(M, r.JsonRpcRequestStruct);
        }),
        (r.assertIsJsonRpcRequest = function l(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcRequestStruct,
            "Invalid JSON-RPC request",
            N
          );
        }),
        (r.PendingJsonRpcResponseStruct = (0, e.object)({
          id: r.JsonRpcIdStruct,
          jsonrpc: r.JsonRpcVersionStruct,
          result: (0, e.optional)((0, e.unknown)()),
          error: (0, e.optional)(r.JsonRpcErrorStruct),
        })),
        (r.JsonRpcSuccessStruct = (0, e.object)({
          id: r.JsonRpcIdStruct,
          jsonrpc: r.JsonRpcVersionStruct,
          result: r.JsonStruct,
        })),
        (r.JsonRpcFailureStruct = (0, e.object)({
          id: r.JsonRpcIdStruct,
          jsonrpc: r.JsonRpcVersionStruct,
          error: r.JsonRpcErrorStruct,
        })),
        (r.JsonRpcResponseStruct = (0, e.union)([
          r.JsonRpcSuccessStruct,
          r.JsonRpcFailureStruct,
        ])),
        (r.isPendingJsonRpcResponse = function b(M) {
          return (0, e.is)(M, r.PendingJsonRpcResponseStruct);
        }),
        (r.assertIsPendingJsonRpcResponse = function h(M, N) {
          (0, g.assertStruct)(
            M,
            r.PendingJsonRpcResponseStruct,
            "Invalid pending JSON-RPC response",
            N
          );
        }),
        (r.isJsonRpcResponse = function p(M) {
          return (0, e.is)(M, r.JsonRpcResponseStruct);
        }),
        (r.assertIsJsonRpcResponse = function c(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcResponseStruct,
            "Invalid JSON-RPC response",
            N
          );
        }),
        (r.isJsonRpcSuccess = function n(M) {
          return (0, e.is)(M, r.JsonRpcSuccessStruct);
        }),
        (r.assertIsJsonRpcSuccess = function f(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcSuccessStruct,
            "Invalid JSON-RPC success response",
            N
          );
        }),
        (r.isJsonRpcFailure = function v(M) {
          return (0, e.is)(M, r.JsonRpcFailureStruct);
        }),
        (r.assertIsJsonRpcFailure = function E(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcFailureStruct,
            "Invalid JSON-RPC failure response",
            N
          );
        }),
        (r.isJsonRpcError = function w(M) {
          return (0, e.is)(M, r.JsonRpcErrorStruct);
        }),
        (r.assertIsJsonRpcError = function C(M, N) {
          (0, g.assertStruct)(
            M,
            r.JsonRpcErrorStruct,
            "Invalid JSON-RPC error",
            N
          );
        }),
        (r.getJsonRpcIdValidator = function A(M) {
          const {
            permitEmptyString: N,
            permitFractions: U,
            permitNull: O,
          } = Object.assign(
            { permitEmptyString: !0, permitFractions: !1, permitNull: !0 },
            M
          );
          return (K) =>
            !!(
              ("number" == typeof K && (U || Number.isInteger(K))) ||
              ("string" == typeof K && (N || K.length > 0)) ||
              (O && null === K)
            );
        }),
        (r.validateJsonAndGetSize = S);
    },
    77464: function (L, r, t) {
      "use strict";
      var e =
        (this && this.__importDefault) ||
        function (i) {
          return i && i.__esModule ? i : { default: i };
        };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createModuleLogger = r.createProjectLogger = void 0);
      const u = (0, e(t(20563)).default)("metamask");
      (r.createProjectLogger = function d(i) {
        return u.extend(i);
      }),
        (r.createModuleLogger = function o(i, s) {
          return i.extend(s);
        });
    },
    3571: (L, r) => {
      "use strict";
      var b;
      function i(b) {
        return b.charCodeAt(0) <= 127;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.calculateNumberSize =
          r.calculateStringSize =
          r.isASCII =
          r.isPlainObject =
          r.ESCAPE_CHARACTERS_REGEXP =
          r.JsonSize =
          r.hasProperty =
          r.isObject =
          r.isNullOrUndefined =
          r.isNonEmptyArray =
            void 0),
        (r.isNonEmptyArray = function t(b) {
          return Array.isArray(b) && b.length > 0;
        }),
        (r.isNullOrUndefined = function e(b) {
          return null == b;
        }),
        (r.isObject = function g(b) {
          return !!b && "object" == typeof b && !Array.isArray(b);
        }),
        (r.hasProperty = (b, h) => Object.hasOwnProperty.call(b, h)),
        ((b = r.JsonSize || (r.JsonSize = {}))[(b.Null = 4)] = "Null"),
        (b[(b.Comma = 1)] = "Comma"),
        (b[(b.Wrapper = 1)] = "Wrapper"),
        (b[(b.True = 4)] = "True"),
        (b[(b.False = 5)] = "False"),
        (b[(b.Quote = 1)] = "Quote"),
        (b[(b.Colon = 1)] = "Colon"),
        (b[(b.Date = 24)] = "Date"),
        (r.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu),
        (r.isPlainObject = function o(b) {
          if ("object" != typeof b || null === b) return !1;
          try {
            let h = b;
            for (; null !== Object.getPrototypeOf(h); )
              h = Object.getPrototypeOf(h);
            return Object.getPrototypeOf(b) === h;
          } catch {
            return !1;
          }
        }),
        (r.isASCII = i),
        (r.calculateStringSize = function s(b) {
          var h;
          return (
            b.split("").reduce((c, n) => (i(n) ? c + 1 : c + 2), 0) +
            (null !== (h = b.match(r.ESCAPE_CHARACTERS_REGEXP)) && void 0 !== h
              ? h
              : []
            ).length
          );
        }),
        (r.calculateNumberSize = function l(b) {
          return b.toString().length;
        });
    },
    6885: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.hexToBigInt =
          r.hexToNumber =
          r.bigIntToHex =
          r.numberToHex =
            void 0);
      const e = t(23689),
        g = t(1506);
      (r.numberToHex = (s) => (
        (0, e.assert)("number" == typeof s, "Value must be a number."),
        (0, e.assert)(s >= 0, "Value must be a non-negative number."),
        (0, e.assert)(
          Number.isSafeInteger(s),
          "Value is not a safe integer. Use `bigIntToHex` instead."
        ),
        (0, g.add0x)(s.toString(16))
      )),
        (r.bigIntToHex = (s) => (
          (0, e.assert)("bigint" == typeof s, "Value must be a bigint."),
          (0, e.assert)(s >= 0, "Value must be a non-negative bigint."),
          (0, g.add0x)(s.toString(16))
        )),
        (r.hexToNumber = (s) => {
          (0, g.assertIsHexString)(s);
          const l = parseInt(s, 16);
          return (
            (0, e.assert)(
              Number.isSafeInteger(l),
              "Value is not a safe integer. Use `hexToBigInt` instead."
            ),
            l
          );
        }),
        (r.hexToBigInt = (s) => (
          (0, g.assertIsHexString)(s), BigInt((0, g.add0x)(s))
        ));
    },
    35127: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
    },
    49246: (L, r) => {
      "use strict";
      var o;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.timeSince = r.inMilliseconds = r.Duration = void 0),
        ((o = r.Duration || (r.Duration = {}))[(o.Millisecond = 1)] =
          "Millisecond"),
        (o[(o.Second = 1e3)] = "Second"),
        (o[(o.Minute = 6e4)] = "Minute"),
        (o[(o.Hour = 36e5)] = "Hour"),
        (o[(o.Day = 864e5)] = "Day"),
        (o[(o.Week = 6048e5)] = "Week"),
        (o[(o.Year = 31536e6)] = "Year");
      const g = (o, i) => {
        if (!((o) => Number.isInteger(o) && o >= 0)(o))
          throw new Error(
            `"${i}" must be a non-negative integer. Received: "${o}".`
          );
      };
      (r.inMilliseconds = function u(o, i) {
        return g(o, "count"), o * i;
      }),
        (r.timeSince = function d(o) {
          return g(o, "timestamp"), Date.now() - o;
        });
    },
    39383: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.satisfiesVersionRange =
          r.gtRange =
          r.gtVersion =
          r.assertIsSemVerRange =
          r.assertIsSemVerVersion =
          r.isValidSemVerRange =
          r.isValidSemVerVersion =
          r.VersionRangeStruct =
          r.VersionStruct =
            void 0);
      const e = t(70424),
        g = t(13921),
        u = t(23689);
      (r.VersionStruct = (0, g.refine)(
        (0, g.string)(),
        "Version",
        (p) => null !== (0, e.valid)(p) || `Expected SemVer version, got "${p}"`
      )),
        (r.VersionRangeStruct = (0, g.refine)(
          (0, g.string)(),
          "Version range",
          (p) =>
            null !== (0, e.validRange)(p) || `Expected SemVer range, got "${p}"`
        )),
        (r.isValidSemVerVersion = function d(p) {
          return (0, g.is)(p, r.VersionStruct);
        }),
        (r.isValidSemVerRange = function o(p) {
          return (0, g.is)(p, r.VersionRangeStruct);
        }),
        (r.assertIsSemVerVersion = function i(p) {
          (0, u.assertStruct)(p, r.VersionStruct);
        }),
        (r.assertIsSemVerRange = function s(p) {
          (0, u.assertStruct)(p, r.VersionRangeStruct);
        }),
        (r.gtVersion = function l(p, c) {
          return (0, e.gt)(p, c);
        }),
        (r.gtRange = function b(p, c) {
          return (0, e.gtr)(p, c);
        }),
        (r.satisfiesVersionRange = function h(p, c) {
          return (0, e.satisfies)(p, c, { includePrerelease: !0 });
        });
    },
    14248: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var e = t(97582),
        g = t(8883),
        u = (function () {
          function d() {
            this._semaphore = new g.default(1);
          }
          return (
            (d.prototype.acquire = function () {
              return e.__awaiter(this, void 0, void 0, function () {
                return e.__generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return [4, this._semaphore.acquire()];
                    case 1:
                      return [2, s.sent()[1]];
                  }
                });
              });
            }),
            (d.prototype.runExclusive = function (o) {
              return this._semaphore.runExclusive(function () {
                return o();
              });
            }),
            (d.prototype.isLocked = function () {
              return this._semaphore.isLocked();
            }),
            (d.prototype.release = function () {
              this._semaphore.release();
            }),
            d
          );
        })();
      r.default = u;
    },
    8883: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var e = t(97582),
        g = (function () {
          function u(d) {
            if (((this._maxConcurrency = d), (this._queue = []), d <= 0))
              throw new Error(
                "semaphore must be initialized to a positive value"
              );
            this._value = d;
          }
          return (
            (u.prototype.acquire = function () {
              var d = this,
                o = this.isLocked(),
                i = new Promise(function (s) {
                  return d._queue.push(s);
                });
              return o || this._dispatch(), i;
            }),
            (u.prototype.runExclusive = function (d) {
              return e.__awaiter(this, void 0, void 0, function () {
                var o, i, s;
                return e.__generator(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, this.acquire()];
                    case 1:
                      (o = l.sent()), (i = o[0]), (s = o[1]), (l.label = 2);
                    case 2:
                      return l.trys.push([2, , 4, 5]), [4, d(i)];
                    case 3:
                      return [2, l.sent()];
                    case 4:
                      return s(), [7];
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (u.prototype.isLocked = function () {
              return this._value <= 0;
            }),
            (u.prototype.release = function () {
              if (this._maxConcurrency > 1)
                throw new Error(
                  "this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead"
                );
              if (this._currentReleaser) {
                var d = this._currentReleaser;
                (this._currentReleaser = void 0), d();
              }
            }),
            (u.prototype._dispatch = function () {
              var d = this,
                o = this._queue.shift();
              if (o) {
                var i = !1;
                (this._currentReleaser = function () {
                  i || ((i = !0), d._value++, d._dispatch());
                }),
                  o([this._value--, this._currentReleaser]);
              }
            }),
            u
          );
        })();
      r.default = g;
    },
    13290: (L, r, t) => {
      "use strict";
      r.WU = void 0;
      var g = t(14248);
      Object.defineProperty(r, "WU", {
        enumerable: !0,
        get: function () {
          return g.default;
        },
      });
      t(8883), t(82292);
    },
    82292: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.withTimeout = void 0);
      var e = t(97582);
      r.withTimeout = function g(u, d, o) {
        var i = this;
        return (
          void 0 === o && (o = new Error("timeout")),
          {
            acquire: function () {
              return new Promise(function (s, l) {
                return e.__awaiter(i, void 0, void 0, function () {
                  var b, h;
                  return e.__generator(this, function (c) {
                    switch (c.label) {
                      case 0:
                        return (
                          (b = !1),
                          setTimeout(function () {
                            (b = !0), l(o);
                          }, d),
                          [4, u.acquire()]
                        );
                      case 1:
                        return (
                          (h = c.sent()),
                          b ? (Array.isArray(h) ? h[1] : h)() : s(h),
                          [2]
                        );
                    }
                  });
                });
              });
            },
            runExclusive: function (s) {
              return e.__awaiter(this, void 0, void 0, function () {
                var l, b;
                return e.__generator(this, function (h) {
                  switch (h.label) {
                    case 0:
                      (l = function () {}), (h.label = 1);
                    case 1:
                      return h.trys.push([1, , 7, 8]), [4, this.acquire()];
                    case 2:
                      return (
                        (b = h.sent()),
                        Array.isArray(b) ? ((l = b[1]), [4, s(b[0])]) : [3, 4]
                      );
                    case 3:
                      return [2, h.sent()];
                    case 4:
                      return (l = b), [4, s()];
                    case 5:
                      return [2, h.sent()];
                    case 6:
                      return [3, 8];
                    case 7:
                      return l(), [7];
                    case 8:
                      return [2];
                  }
                });
              });
            },
            release: function () {
              u.release();
            },
            isLocked: function () {
              return u.isLocked();
            },
          }
        );
      };
    },
    81979: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
      var t = (function (g) {
        return (g.typeOfFunction = "function"), (g.boolTrue = !0), g;
      })(t || {});
      function e(g, u, d) {
        if (!d || typeof d.value !== t.typeOfFunction)
          throw new TypeError(
            "Only methods can be decorated with @bind. <" +
              u +
              "> is not a method!"
          );
        return {
          configurable: t.boolTrue,
          get: function () {
            var o = d.value.bind(this);
            return (
              Object.defineProperty(this, u, {
                value: o,
                configurable: t.boolTrue,
                writable: t.boolTrue,
              }),
              o
            );
          },
        };
      }
      (r.bind = e), (r.default = e);
    },
    62662: function (L, r, t) {
      !(function (e, g) {
        "use strict";
        function u(P, m) {
          if (!P) throw new Error(m || "Assertion failed");
        }
        function d(P, m) {
          P.super_ = m;
          var _ = function () {};
          (_.prototype = m.prototype),
            (P.prototype = new _()),
            (P.prototype.constructor = P);
        }
        function o(P, m, _) {
          if (o.isBN(P)) return P;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== P &&
              (("le" === m || "be" === m) && ((_ = m), (m = 10)),
              this._init(P || 0, m || 10, _ || "be"));
        }
        var i;
        "object" == typeof e ? (e.exports = o) : (g.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          i =
            typeof window < "u" && typeof window.Buffer < "u"
              ? window.Buffer
              : t(46601).Buffer;
        } catch {}
        function s(P, m) {
          var _ = P.charCodeAt(m);
          return _ >= 48 && _ <= 57
            ? _ - 48
            : _ >= 65 && _ <= 70
            ? _ - 55
            : _ >= 97 && _ <= 102
            ? _ - 87
            : void u(!1, "Invalid character in " + P);
        }
        function l(P, m, _) {
          var I = s(P, _);
          return _ - 1 >= m && (I |= s(P, _ - 1) << 4), I;
        }
        function b(P, m, _, I) {
          for (var R = 0, T = 0, F = Math.min(P.length, _), J = m; J < F; J++) {
            var $ = P.charCodeAt(J) - 48;
            (R *= I),
              (T = $ >= 49 ? $ - 49 + 10 : $ >= 17 ? $ - 17 + 10 : $),
              u($ >= 0 && T < I, "Invalid character"),
              (R += T);
          }
          return R;
        }
        function h(P, m) {
          (P.words = m.words),
            (P.length = m.length),
            (P.negative = m.negative),
            (P.red = m.red);
        }
        if (
          ((o.isBN = function (m) {
            return (
              m instanceof o ||
              (null !== m &&
                "object" == typeof m &&
                m.constructor.wordSize === o.wordSize &&
                Array.isArray(m.words))
            );
          }),
          (o.max = function (m, _) {
            return m.cmp(_) > 0 ? m : _;
          }),
          (o.min = function (m, _) {
            return m.cmp(_) < 0 ? m : _;
          }),
          (o.prototype._init = function (m, _, I) {
            if ("number" == typeof m) return this._initNumber(m, _, I);
            if ("object" == typeof m) return this._initArray(m, _, I);
            "hex" === _ && (_ = 16), u(_ === (0 | _) && _ >= 2 && _ <= 36);
            var R = 0;
            "-" === (m = m.toString().replace(/\s+/g, ""))[0] &&
              (R++, (this.negative = 1)),
              R < m.length &&
                (16 === _
                  ? this._parseHex(m, R, I)
                  : (this._parseBase(m, _, R),
                    "le" === I && this._initArray(this.toArray(), _, I)));
          }),
          (o.prototype._initNumber = function (m, _, I) {
            m < 0 && ((this.negative = 1), (m = -m)),
              m < 67108864
                ? ((this.words = [67108863 & m]), (this.length = 1))
                : m < 4503599627370496
                ? ((this.words = [67108863 & m, (m / 67108864) & 67108863]),
                  (this.length = 2))
                : (u(m < 9007199254740992),
                  (this.words = [67108863 & m, (m / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === I && this._initArray(this.toArray(), _, I);
          }),
          (o.prototype._initArray = function (m, _, I) {
            if ((u("number" == typeof m.length), m.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(m.length / 3)),
              (this.words = new Array(this.length));
            for (var R = 0; R < this.length; R++) this.words[R] = 0;
            var T,
              F,
              J = 0;
            if ("be" === I)
              for (R = m.length - 1, T = 0; R >= 0; R -= 3)
                (this.words[T] |=
                  ((F = m[R] | (m[R - 1] << 8) | (m[R - 2] << 16)) << J) &
                  67108863),
                  (this.words[T + 1] = (F >>> (26 - J)) & 67108863),
                  (J += 24) >= 26 && ((J -= 26), T++);
            else if ("le" === I)
              for (R = 0, T = 0; R < m.length; R += 3)
                (this.words[T] |=
                  ((F = m[R] | (m[R + 1] << 8) | (m[R + 2] << 16)) << J) &
                  67108863),
                  (this.words[T + 1] = (F >>> (26 - J)) & 67108863),
                  (J += 24) >= 26 && ((J -= 26), T++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (m, _, I) {
            (this.length = Math.ceil((m.length - _) / 6)),
              (this.words = new Array(this.length));
            for (var R = 0; R < this.length; R++) this.words[R] = 0;
            var J,
              T = 0,
              F = 0;
            if ("be" === I)
              for (R = m.length - 1; R >= _; R -= 2)
                (J = l(m, _, R) << T),
                  (this.words[F] |= 67108863 & J),
                  T >= 18
                    ? ((T -= 18), (this.words[(F += 1)] |= J >>> 26))
                    : (T += 8);
            else
              for (
                R = (m.length - _) % 2 == 0 ? _ + 1 : _;
                R < m.length;
                R += 2
              )
                (J = l(m, _, R) << T),
                  (this.words[F] |= 67108863 & J),
                  T >= 18
                    ? ((T -= 18), (this.words[(F += 1)] |= J >>> 26))
                    : (T += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (m, _, I) {
            (this.words = [0]), (this.length = 1);
            for (var R = 0, T = 1; T <= 67108863; T *= _) R++;
            R--, (T = (T / _) | 0);
            for (
              var F = m.length - I,
                J = F % R,
                $ = Math.min(F, F - J) + I,
                x = 0,
                z = I;
              z < $;
              z += R
            )
              (x = b(m, z, z + R, _)),
                this.imuln(T),
                this.words[0] + x < 67108864
                  ? (this.words[0] += x)
                  : this._iaddn(x);
            if (0 !== J) {
              var de = 1;
              for (x = b(m, z, m.length, _), z = 0; z < J; z++) de *= _;
              this.imuln(de),
                this.words[0] + x < 67108864
                  ? (this.words[0] += x)
                  : this._iaddn(x);
            }
            this._strip();
          }),
          (o.prototype.copy = function (m) {
            m.words = new Array(this.length);
            for (var _ = 0; _ < this.length; _++) m.words[_] = this.words[_];
            (m.length = this.length),
              (m.negative = this.negative),
              (m.red = this.red);
          }),
          (o.prototype._move = function (m) {
            h(m, this);
          }),
          (o.prototype.clone = function () {
            var m = new o(null);
            return this.copy(m), m;
          }),
          (o.prototype._expand = function (m) {
            for (; this.length < m; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          typeof Symbol < "u" && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = p;
          } catch {
            o.prototype.inspect = p;
          }
        else o.prototype.inspect = p;
        function p() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          n = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          f = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function w(P, m, _) {
          _.negative = m.negative ^ P.negative;
          var I = (P.length + m.length) | 0;
          (_.length = I), (I = (I - 1) | 0);
          var R = 0 | P.words[0],
            T = 0 | m.words[0],
            F = R * T,
            $ = (F / 67108864) | 0;
          _.words[0] = 67108863 & F;
          for (var x = 1; x < I; x++) {
            for (
              var z = $ >>> 26,
                de = 67108863 & $,
                fe = Math.min(x, m.length - 1),
                be = Math.max(0, x - P.length + 1);
              be <= fe;
              be++
            )
              (z +=
                ((F =
                  (R = 0 | P.words[(x - be) | 0]) * (T = 0 | m.words[be]) +
                  de) /
                  67108864) |
                0),
                (de = 67108863 & F);
            (_.words[x] = 0 | de), ($ = 0 | z);
          }
          return 0 !== $ ? (_.words[x] = 0 | $) : _.length--, _._strip();
        }
        (o.prototype.toString = function (m, _) {
          var I;
          if (((_ = 0 | _ || 1), 16 === (m = m || 10) || "hex" === m)) {
            I = "";
            for (var R = 0, T = 0, F = 0; F < this.length; F++) {
              var J = this.words[F],
                $ = (16777215 & ((J << R) | T)).toString(16);
              (T = (J >>> (24 - R)) & 16777215),
                (R += 2) >= 26 && ((R -= 26), F--),
                (I =
                  0 !== T || F !== this.length - 1
                    ? c[6 - $.length] + $ + I
                    : $ + I);
            }
            for (0 !== T && (I = T.toString(16) + I); I.length % _ != 0; )
              I = "0" + I;
            return 0 !== this.negative && (I = "-" + I), I;
          }
          if (m === (0 | m) && m >= 2 && m <= 36) {
            var x = n[m],
              z = f[m];
            I = "";
            var de = this.clone();
            for (de.negative = 0; !de.isZero(); ) {
              var fe = de.modrn(z).toString(m);
              I = (de = de.idivn(z)).isZero()
                ? fe + I
                : c[x - fe.length] + fe + I;
            }
            for (this.isZero() && (I = "0" + I); I.length % _ != 0; )
              I = "0" + I;
            return 0 !== this.negative && (I = "-" + I), I;
          }
          u(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var m = this.words[0];
            return (
              2 === this.length
                ? (m += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (m += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  u(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -m : m
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          i &&
            (o.prototype.toBuffer = function (m, _) {
              return this.toArrayLike(i, m, _);
            }),
          (o.prototype.toArray = function (m, _) {
            return this.toArrayLike(Array, m, _);
          }),
          (o.prototype.toArrayLike = function (m, _, I) {
            this._strip();
            var R = this.byteLength(),
              T = I || Math.max(1, R);
            u(R <= T, "byte array longer than desired length"),
              u(T > 0, "Requested array length <= 0");
            var F = (function (m, _) {
              return m.allocUnsafe ? m.allocUnsafe(_) : new m(_);
            })(m, T);
            return this["_toArrayLike" + ("le" === _ ? "LE" : "BE")](F, R), F;
          }),
          (o.prototype._toArrayLikeLE = function (m, _) {
            for (var I = 0, R = 0, T = 0, F = 0; T < this.length; T++) {
              var J = (this.words[T] << F) | R;
              (m[I++] = 255 & J),
                I < m.length && (m[I++] = (J >> 8) & 255),
                I < m.length && (m[I++] = (J >> 16) & 255),
                6 === F
                  ? (I < m.length && (m[I++] = (J >> 24) & 255),
                    (R = 0),
                    (F = 0))
                  : ((R = J >>> 24), (F += 2));
            }
            if (I < m.length) for (m[I++] = R; I < m.length; ) m[I++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (m, _) {
            for (
              var I = m.length - 1, R = 0, T = 0, F = 0;
              T < this.length;
              T++
            ) {
              var J = (this.words[T] << F) | R;
              (m[I--] = 255 & J),
                I >= 0 && (m[I--] = (J >> 8) & 255),
                I >= 0 && (m[I--] = (J >> 16) & 255),
                6 === F
                  ? (I >= 0 && (m[I--] = (J >> 24) & 255), (R = 0), (F = 0))
                  : ((R = J >>> 24), (F += 2));
            }
            if (I >= 0) for (m[I--] = R; I >= 0; ) m[I--] = 0;
          }),
          (o.prototype._countBits = Math.clz32
            ? function (m) {
                return 32 - Math.clz32(m);
              }
            : function (m) {
                var _ = m,
                  I = 0;
                return (
                  _ >= 4096 && ((I += 13), (_ >>>= 13)),
                  _ >= 64 && ((I += 7), (_ >>>= 7)),
                  _ >= 8 && ((I += 4), (_ >>>= 4)),
                  _ >= 2 && ((I += 2), (_ >>>= 2)),
                  I + _
                );
              }),
          (o.prototype._zeroBits = function (m) {
            if (0 === m) return 26;
            var _ = m,
              I = 0;
            return (
              8191 & _ || ((I += 13), (_ >>>= 13)),
              127 & _ || ((I += 7), (_ >>>= 7)),
              15 & _ || ((I += 4), (_ >>>= 4)),
              3 & _ || ((I += 2), (_ >>>= 2)),
              1 & _ || I++,
              I
            );
          }),
          (o.prototype.bitLength = function () {
            var _ = this._countBits(this.words[this.length - 1]);
            return 26 * (this.length - 1) + _;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var m = 0, _ = 0; _ < this.length; _++) {
              var I = this._zeroBits(this.words[_]);
              if (((m += I), 26 !== I)) break;
            }
            return m;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (m) {
            return 0 !== this.negative
              ? this.abs().inotn(m).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (m) {
            return this.testn(m - 1)
              ? this.notn(m).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (m) {
            for (; this.length < m.length; ) this.words[this.length++] = 0;
            for (var _ = 0; _ < m.length; _++)
              this.words[_] = this.words[_] | m.words[_];
            return this._strip();
          }),
          (o.prototype.ior = function (m) {
            return u(0 == (this.negative | m.negative)), this.iuor(m);
          }),
          (o.prototype.or = function (m) {
            return this.length > m.length
              ? this.clone().ior(m)
              : m.clone().ior(this);
          }),
          (o.prototype.uor = function (m) {
            return this.length > m.length
              ? this.clone().iuor(m)
              : m.clone().iuor(this);
          }),
          (o.prototype.iuand = function (m) {
            var _;
            _ = this.length > m.length ? m : this;
            for (var I = 0; I < _.length; I++)
              this.words[I] = this.words[I] & m.words[I];
            return (this.length = _.length), this._strip();
          }),
          (o.prototype.iand = function (m) {
            return u(0 == (this.negative | m.negative)), this.iuand(m);
          }),
          (o.prototype.and = function (m) {
            return this.length > m.length
              ? this.clone().iand(m)
              : m.clone().iand(this);
          }),
          (o.prototype.uand = function (m) {
            return this.length > m.length
              ? this.clone().iuand(m)
              : m.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (m) {
            var _, I;
            this.length > m.length
              ? ((_ = this), (I = m))
              : ((_ = m), (I = this));
            for (var R = 0; R < I.length; R++)
              this.words[R] = _.words[R] ^ I.words[R];
            if (this !== _)
              for (; R < _.length; R++) this.words[R] = _.words[R];
            return (this.length = _.length), this._strip();
          }),
          (o.prototype.ixor = function (m) {
            return u(0 == (this.negative | m.negative)), this.iuxor(m);
          }),
          (o.prototype.xor = function (m) {
            return this.length > m.length
              ? this.clone().ixor(m)
              : m.clone().ixor(this);
          }),
          (o.prototype.uxor = function (m) {
            return this.length > m.length
              ? this.clone().iuxor(m)
              : m.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (m) {
            u("number" == typeof m && m >= 0);
            var _ = 0 | Math.ceil(m / 26),
              I = m % 26;
            this._expand(_), I > 0 && _--;
            for (var R = 0; R < _; R++)
              this.words[R] = 67108863 & ~this.words[R];
            return (
              I > 0 &&
                (this.words[R] = ~this.words[R] & (67108863 >> (26 - I))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (m) {
            return this.clone().inotn(m);
          }),
          (o.prototype.setn = function (m, _) {
            u("number" == typeof m && m >= 0);
            var I = (m / 26) | 0,
              R = m % 26;
            return (
              this._expand(I + 1),
              (this.words[I] = _
                ? this.words[I] | (1 << R)
                : this.words[I] & ~(1 << R)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (m) {
            var _, I, R;
            if (0 !== this.negative && 0 === m.negative)
              return (
                (this.negative = 0),
                (_ = this.isub(m)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== m.negative)
              return (
                (m.negative = 0),
                (_ = this.isub(m)),
                (m.negative = 1),
                _._normSign()
              );
            this.length > m.length
              ? ((I = this), (R = m))
              : ((I = m), (R = this));
            for (var T = 0, F = 0; F < R.length; F++)
              (this.words[F] =
                67108863 & (_ = (0 | I.words[F]) + (0 | R.words[F]) + T)),
                (T = _ >>> 26);
            for (; 0 !== T && F < I.length; F++)
              (this.words[F] = 67108863 & (_ = (0 | I.words[F]) + T)),
                (T = _ >>> 26);
            if (((this.length = I.length), 0 !== T))
              (this.words[this.length] = T), this.length++;
            else if (I !== this)
              for (; F < I.length; F++) this.words[F] = I.words[F];
            return this;
          }),
          (o.prototype.add = function (m) {
            var _;
            return 0 !== m.negative && 0 === this.negative
              ? ((m.negative = 0), (_ = this.sub(m)), (m.negative ^= 1), _)
              : 0 === m.negative && 0 !== this.negative
              ? ((this.negative = 0), (_ = m.sub(this)), (this.negative = 1), _)
              : this.length > m.length
              ? this.clone().iadd(m)
              : m.clone().iadd(this);
          }),
          (o.prototype.isub = function (m) {
            if (0 !== m.negative) {
              m.negative = 0;
              var _ = this.iadd(m);
              return (m.negative = 1), _._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(m),
                (this.negative = 1),
                this._normSign()
              );
            var R,
              T,
              I = this.cmp(m);
            if (0 === I)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            I > 0 ? ((R = this), (T = m)) : ((R = m), (T = this));
            for (var F = 0, J = 0; J < T.length; J++)
              (F = (_ = (0 | R.words[J]) - (0 | T.words[J]) + F) >> 26),
                (this.words[J] = 67108863 & _);
            for (; 0 !== F && J < R.length; J++)
              (F = (_ = (0 | R.words[J]) + F) >> 26),
                (this.words[J] = 67108863 & _);
            if (0 === F && J < R.length && R !== this)
              for (; J < R.length; J++) this.words[J] = R.words[J];
            return (
              (this.length = Math.max(this.length, J)),
              R !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (m) {
            return this.clone().isub(m);
          });
        var C = function (m, _, I) {
          var $,
            x,
            z,
            R = m.words,
            T = _.words,
            F = I.words,
            J = 0,
            de = 0 | R[0],
            fe = 8191 & de,
            be = de >>> 13,
            Q = 0 | R[1],
            B = 8191 & Q,
            V = Q >>> 13,
            ee = 0 | R[2],
            oe = 8191 & ee,
            H = ee >>> 13,
            W = 0 | R[3],
            ne = 8191 & W,
            le = W >>> 13,
            Re = 0 | R[4],
            Se = 8191 & Re,
            Ee = Re >>> 13,
            pe = 0 | R[5],
            Be = 8191 & pe,
            _e = pe >>> 13,
            xe = 0 | R[6],
            Me = 8191 & xe,
            Z = xe >>> 13,
            X = 0 | R[7],
            te = 8191 & X,
            ie = X >>> 13,
            ve = 0 | R[8],
            we = 8191 & ve,
            Oe = ve >>> 13,
            Fe = 0 | R[9],
            Le = 8191 & Fe,
            q = Fe >>> 13,
            ae = 0 | T[0],
            Pe = 8191 & ae,
            ke = ae >>> 13,
            Ve = 0 | T[1],
            Te = 8191 & Ve,
            He = Ve >>> 13,
            tt = 0 | T[2],
            Ue = 8191 & tt,
            $e = tt >>> 13,
            nt = 0 | T[3],
            Ge = 8191 & nt,
            We = nt >>> 13,
            rt = 0 | T[4],
            ze = 8191 & rt,
            Je = rt >>> 13,
            qe = 0 | T[5],
            ce = 8191 & qe,
            se = qe >>> 13,
            he = 0 | T[6],
            me = 8191 & he,
            ye = he >>> 13,
            Ie = 0 | T[7],
            Ae = 8191 & Ie,
            Ce = Ie >>> 13,
            Ze = 0 | T[8],
            De = 8191 & Ze,
            je = Ze >>> 13,
            Xe = 0 | T[9],
            Ke = 8191 & Xe,
            Qe = Xe >>> 13;
          (I.negative = m.negative ^ _.negative), (I.length = 19);
          var at =
            (((J + ($ = Math.imul(fe, Pe))) | 0) +
              ((8191 &
                (x = ((x = Math.imul(fe, ke)) + Math.imul(be, Pe)) | 0)) <<
                13)) |
            0;
          (J =
            ((((z = Math.imul(be, ke)) + (x >>> 13)) | 0) + (at >>> 26)) | 0),
            (at &= 67108863),
            ($ = Math.imul(B, Pe)),
            (x = ((x = Math.imul(B, ke)) + Math.imul(V, Pe)) | 0),
            (z = Math.imul(V, ke));
          var st =
            (((J + ($ = ($ + Math.imul(fe, Te)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, He)) | 0) + Math.imul(be, Te)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, He)) | 0) + (x >>> 13)) | 0) +
              (st >>> 26)) |
            0),
            (st &= 67108863),
            ($ = Math.imul(oe, Pe)),
            (x = ((x = Math.imul(oe, ke)) + Math.imul(H, Pe)) | 0),
            (z = Math.imul(H, ke)),
            ($ = ($ + Math.imul(B, Te)) | 0),
            (x = ((x = (x + Math.imul(B, He)) | 0) + Math.imul(V, Te)) | 0),
            (z = (z + Math.imul(V, He)) | 0);
          var it =
            (((J + ($ = ($ + Math.imul(fe, Ue)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, $e)) | 0) + Math.imul(be, Ue)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, $e)) | 0) + (x >>> 13)) | 0) +
              (it >>> 26)) |
            0),
            (it &= 67108863),
            ($ = Math.imul(ne, Pe)),
            (x = ((x = Math.imul(ne, ke)) + Math.imul(le, Pe)) | 0),
            (z = Math.imul(le, ke)),
            ($ = ($ + Math.imul(oe, Te)) | 0),
            (x = ((x = (x + Math.imul(oe, He)) | 0) + Math.imul(H, Te)) | 0),
            (z = (z + Math.imul(H, He)) | 0),
            ($ = ($ + Math.imul(B, Ue)) | 0),
            (x = ((x = (x + Math.imul(B, $e)) | 0) + Math.imul(V, Ue)) | 0),
            (z = (z + Math.imul(V, $e)) | 0);
          var ut =
            (((J + ($ = ($ + Math.imul(fe, Ge)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, We)) | 0) + Math.imul(be, Ge)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, We)) | 0) + (x >>> 13)) | 0) +
              (ut >>> 26)) |
            0),
            (ut &= 67108863),
            ($ = Math.imul(Se, Pe)),
            (x = ((x = Math.imul(Se, ke)) + Math.imul(Ee, Pe)) | 0),
            (z = Math.imul(Ee, ke)),
            ($ = ($ + Math.imul(ne, Te)) | 0),
            (x = ((x = (x + Math.imul(ne, He)) | 0) + Math.imul(le, Te)) | 0),
            (z = (z + Math.imul(le, He)) | 0),
            ($ = ($ + Math.imul(oe, Ue)) | 0),
            (x = ((x = (x + Math.imul(oe, $e)) | 0) + Math.imul(H, Ue)) | 0),
            (z = (z + Math.imul(H, $e)) | 0),
            ($ = ($ + Math.imul(B, Ge)) | 0),
            (x = ((x = (x + Math.imul(B, We)) | 0) + Math.imul(V, Ge)) | 0),
            (z = (z + Math.imul(V, We)) | 0);
          var ht =
            (((J + ($ = ($ + Math.imul(fe, ze)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, Je)) | 0) + Math.imul(be, ze)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, Je)) | 0) + (x >>> 13)) | 0) +
              (ht >>> 26)) |
            0),
            (ht &= 67108863),
            ($ = Math.imul(Be, Pe)),
            (x = ((x = Math.imul(Be, ke)) + Math.imul(_e, Pe)) | 0),
            (z = Math.imul(_e, ke)),
            ($ = ($ + Math.imul(Se, Te)) | 0),
            (x = ((x = (x + Math.imul(Se, He)) | 0) + Math.imul(Ee, Te)) | 0),
            (z = (z + Math.imul(Ee, He)) | 0),
            ($ = ($ + Math.imul(ne, Ue)) | 0),
            (x = ((x = (x + Math.imul(ne, $e)) | 0) + Math.imul(le, Ue)) | 0),
            (z = (z + Math.imul(le, $e)) | 0),
            ($ = ($ + Math.imul(oe, Ge)) | 0),
            (x = ((x = (x + Math.imul(oe, We)) | 0) + Math.imul(H, Ge)) | 0),
            (z = (z + Math.imul(H, We)) | 0),
            ($ = ($ + Math.imul(B, ze)) | 0),
            (x = ((x = (x + Math.imul(B, Je)) | 0) + Math.imul(V, ze)) | 0),
            (z = (z + Math.imul(V, Je)) | 0);
          var ft =
            (((J + ($ = ($ + Math.imul(fe, ce)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, se)) | 0) + Math.imul(be, ce)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, se)) | 0) + (x >>> 13)) | 0) +
              (ft >>> 26)) |
            0),
            (ft &= 67108863),
            ($ = Math.imul(Me, Pe)),
            (x = ((x = Math.imul(Me, ke)) + Math.imul(Z, Pe)) | 0),
            (z = Math.imul(Z, ke)),
            ($ = ($ + Math.imul(Be, Te)) | 0),
            (x = ((x = (x + Math.imul(Be, He)) | 0) + Math.imul(_e, Te)) | 0),
            (z = (z + Math.imul(_e, He)) | 0),
            ($ = ($ + Math.imul(Se, Ue)) | 0),
            (x = ((x = (x + Math.imul(Se, $e)) | 0) + Math.imul(Ee, Ue)) | 0),
            (z = (z + Math.imul(Ee, $e)) | 0),
            ($ = ($ + Math.imul(ne, Ge)) | 0),
            (x = ((x = (x + Math.imul(ne, We)) | 0) + Math.imul(le, Ge)) | 0),
            (z = (z + Math.imul(le, We)) | 0),
            ($ = ($ + Math.imul(oe, ze)) | 0),
            (x = ((x = (x + Math.imul(oe, Je)) | 0) + Math.imul(H, ze)) | 0),
            (z = (z + Math.imul(H, Je)) | 0),
            ($ = ($ + Math.imul(B, ce)) | 0),
            (x = ((x = (x + Math.imul(B, se)) | 0) + Math.imul(V, ce)) | 0),
            (z = (z + Math.imul(V, se)) | 0);
          var dt =
            (((J + ($ = ($ + Math.imul(fe, me)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, ye)) | 0) + Math.imul(be, me)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, ye)) | 0) + (x >>> 13)) | 0) +
              (dt >>> 26)) |
            0),
            (dt &= 67108863),
            ($ = Math.imul(te, Pe)),
            (x = ((x = Math.imul(te, ke)) + Math.imul(ie, Pe)) | 0),
            (z = Math.imul(ie, ke)),
            ($ = ($ + Math.imul(Me, Te)) | 0),
            (x = ((x = (x + Math.imul(Me, He)) | 0) + Math.imul(Z, Te)) | 0),
            (z = (z + Math.imul(Z, He)) | 0),
            ($ = ($ + Math.imul(Be, Ue)) | 0),
            (x = ((x = (x + Math.imul(Be, $e)) | 0) + Math.imul(_e, Ue)) | 0),
            (z = (z + Math.imul(_e, $e)) | 0),
            ($ = ($ + Math.imul(Se, Ge)) | 0),
            (x = ((x = (x + Math.imul(Se, We)) | 0) + Math.imul(Ee, Ge)) | 0),
            (z = (z + Math.imul(Ee, We)) | 0),
            ($ = ($ + Math.imul(ne, ze)) | 0),
            (x = ((x = (x + Math.imul(ne, Je)) | 0) + Math.imul(le, ze)) | 0),
            (z = (z + Math.imul(le, Je)) | 0),
            ($ = ($ + Math.imul(oe, ce)) | 0),
            (x = ((x = (x + Math.imul(oe, se)) | 0) + Math.imul(H, ce)) | 0),
            (z = (z + Math.imul(H, se)) | 0),
            ($ = ($ + Math.imul(B, me)) | 0),
            (x = ((x = (x + Math.imul(B, ye)) | 0) + Math.imul(V, me)) | 0),
            (z = (z + Math.imul(V, ye)) | 0);
          var pt =
            (((J + ($ = ($ + Math.imul(fe, Ae)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, Ce)) | 0) + Math.imul(be, Ae)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, Ce)) | 0) + (x >>> 13)) | 0) +
              (pt >>> 26)) |
            0),
            (pt &= 67108863),
            ($ = Math.imul(we, Pe)),
            (x = ((x = Math.imul(we, ke)) + Math.imul(Oe, Pe)) | 0),
            (z = Math.imul(Oe, ke)),
            ($ = ($ + Math.imul(te, Te)) | 0),
            (x = ((x = (x + Math.imul(te, He)) | 0) + Math.imul(ie, Te)) | 0),
            (z = (z + Math.imul(ie, He)) | 0),
            ($ = ($ + Math.imul(Me, Ue)) | 0),
            (x = ((x = (x + Math.imul(Me, $e)) | 0) + Math.imul(Z, Ue)) | 0),
            (z = (z + Math.imul(Z, $e)) | 0),
            ($ = ($ + Math.imul(Be, Ge)) | 0),
            (x = ((x = (x + Math.imul(Be, We)) | 0) + Math.imul(_e, Ge)) | 0),
            (z = (z + Math.imul(_e, We)) | 0),
            ($ = ($ + Math.imul(Se, ze)) | 0),
            (x = ((x = (x + Math.imul(Se, Je)) | 0) + Math.imul(Ee, ze)) | 0),
            (z = (z + Math.imul(Ee, Je)) | 0),
            ($ = ($ + Math.imul(ne, ce)) | 0),
            (x = ((x = (x + Math.imul(ne, se)) | 0) + Math.imul(le, ce)) | 0),
            (z = (z + Math.imul(le, se)) | 0),
            ($ = ($ + Math.imul(oe, me)) | 0),
            (x = ((x = (x + Math.imul(oe, ye)) | 0) + Math.imul(H, me)) | 0),
            (z = (z + Math.imul(H, ye)) | 0),
            ($ = ($ + Math.imul(B, Ae)) | 0),
            (x = ((x = (x + Math.imul(B, Ce)) | 0) + Math.imul(V, Ae)) | 0),
            (z = (z + Math.imul(V, Ce)) | 0);
          var ct =
            (((J + ($ = ($ + Math.imul(fe, De)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, je)) | 0) + Math.imul(be, De)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, je)) | 0) + (x >>> 13)) | 0) +
              (ct >>> 26)) |
            0),
            (ct &= 67108863),
            ($ = Math.imul(Le, Pe)),
            (x = ((x = Math.imul(Le, ke)) + Math.imul(q, Pe)) | 0),
            (z = Math.imul(q, ke)),
            ($ = ($ + Math.imul(we, Te)) | 0),
            (x = ((x = (x + Math.imul(we, He)) | 0) + Math.imul(Oe, Te)) | 0),
            (z = (z + Math.imul(Oe, He)) | 0),
            ($ = ($ + Math.imul(te, Ue)) | 0),
            (x = ((x = (x + Math.imul(te, $e)) | 0) + Math.imul(ie, Ue)) | 0),
            (z = (z + Math.imul(ie, $e)) | 0),
            ($ = ($ + Math.imul(Me, Ge)) | 0),
            (x = ((x = (x + Math.imul(Me, We)) | 0) + Math.imul(Z, Ge)) | 0),
            (z = (z + Math.imul(Z, We)) | 0),
            ($ = ($ + Math.imul(Be, ze)) | 0),
            (x = ((x = (x + Math.imul(Be, Je)) | 0) + Math.imul(_e, ze)) | 0),
            (z = (z + Math.imul(_e, Je)) | 0),
            ($ = ($ + Math.imul(Se, ce)) | 0),
            (x = ((x = (x + Math.imul(Se, se)) | 0) + Math.imul(Ee, ce)) | 0),
            (z = (z + Math.imul(Ee, se)) | 0),
            ($ = ($ + Math.imul(ne, me)) | 0),
            (x = ((x = (x + Math.imul(ne, ye)) | 0) + Math.imul(le, me)) | 0),
            (z = (z + Math.imul(le, ye)) | 0),
            ($ = ($ + Math.imul(oe, Ae)) | 0),
            (x = ((x = (x + Math.imul(oe, Ce)) | 0) + Math.imul(H, Ae)) | 0),
            (z = (z + Math.imul(H, Ce)) | 0),
            ($ = ($ + Math.imul(B, De)) | 0),
            (x = ((x = (x + Math.imul(B, je)) | 0) + Math.imul(V, De)) | 0),
            (z = (z + Math.imul(V, je)) | 0);
          var gt =
            (((J + ($ = ($ + Math.imul(fe, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(fe, Qe)) | 0) + Math.imul(be, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(be, Qe)) | 0) + (x >>> 13)) | 0) +
              (gt >>> 26)) |
            0),
            (gt &= 67108863),
            ($ = Math.imul(Le, Te)),
            (x = ((x = Math.imul(Le, He)) + Math.imul(q, Te)) | 0),
            (z = Math.imul(q, He)),
            ($ = ($ + Math.imul(we, Ue)) | 0),
            (x = ((x = (x + Math.imul(we, $e)) | 0) + Math.imul(Oe, Ue)) | 0),
            (z = (z + Math.imul(Oe, $e)) | 0),
            ($ = ($ + Math.imul(te, Ge)) | 0),
            (x = ((x = (x + Math.imul(te, We)) | 0) + Math.imul(ie, Ge)) | 0),
            (z = (z + Math.imul(ie, We)) | 0),
            ($ = ($ + Math.imul(Me, ze)) | 0),
            (x = ((x = (x + Math.imul(Me, Je)) | 0) + Math.imul(Z, ze)) | 0),
            (z = (z + Math.imul(Z, Je)) | 0),
            ($ = ($ + Math.imul(Be, ce)) | 0),
            (x = ((x = (x + Math.imul(Be, se)) | 0) + Math.imul(_e, ce)) | 0),
            (z = (z + Math.imul(_e, se)) | 0),
            ($ = ($ + Math.imul(Se, me)) | 0),
            (x = ((x = (x + Math.imul(Se, ye)) | 0) + Math.imul(Ee, me)) | 0),
            (z = (z + Math.imul(Ee, ye)) | 0),
            ($ = ($ + Math.imul(ne, Ae)) | 0),
            (x = ((x = (x + Math.imul(ne, Ce)) | 0) + Math.imul(le, Ae)) | 0),
            (z = (z + Math.imul(le, Ce)) | 0),
            ($ = ($ + Math.imul(oe, De)) | 0),
            (x = ((x = (x + Math.imul(oe, je)) | 0) + Math.imul(H, De)) | 0),
            (z = (z + Math.imul(H, je)) | 0);
          var mt =
            (((J + ($ = ($ + Math.imul(B, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(B, Qe)) | 0) + Math.imul(V, Ke)) | 0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(V, Qe)) | 0) + (x >>> 13)) | 0) +
              (mt >>> 26)) |
            0),
            (mt &= 67108863),
            ($ = Math.imul(Le, Ue)),
            (x = ((x = Math.imul(Le, $e)) + Math.imul(q, Ue)) | 0),
            (z = Math.imul(q, $e)),
            ($ = ($ + Math.imul(we, Ge)) | 0),
            (x = ((x = (x + Math.imul(we, We)) | 0) + Math.imul(Oe, Ge)) | 0),
            (z = (z + Math.imul(Oe, We)) | 0),
            ($ = ($ + Math.imul(te, ze)) | 0),
            (x = ((x = (x + Math.imul(te, Je)) | 0) + Math.imul(ie, ze)) | 0),
            (z = (z + Math.imul(ie, Je)) | 0),
            ($ = ($ + Math.imul(Me, ce)) | 0),
            (x = ((x = (x + Math.imul(Me, se)) | 0) + Math.imul(Z, ce)) | 0),
            (z = (z + Math.imul(Z, se)) | 0),
            ($ = ($ + Math.imul(Be, me)) | 0),
            (x = ((x = (x + Math.imul(Be, ye)) | 0) + Math.imul(_e, me)) | 0),
            (z = (z + Math.imul(_e, ye)) | 0),
            ($ = ($ + Math.imul(Se, Ae)) | 0),
            (x = ((x = (x + Math.imul(Se, Ce)) | 0) + Math.imul(Ee, Ae)) | 0),
            (z = (z + Math.imul(Ee, Ce)) | 0),
            ($ = ($ + Math.imul(ne, De)) | 0),
            (x = ((x = (x + Math.imul(ne, je)) | 0) + Math.imul(le, De)) | 0),
            (z = (z + Math.imul(le, je)) | 0);
          var bt =
            (((J + ($ = ($ + Math.imul(oe, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(oe, Qe)) | 0) + Math.imul(H, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(H, Qe)) | 0) + (x >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            ($ = Math.imul(Le, Ge)),
            (x = ((x = Math.imul(Le, We)) + Math.imul(q, Ge)) | 0),
            (z = Math.imul(q, We)),
            ($ = ($ + Math.imul(we, ze)) | 0),
            (x = ((x = (x + Math.imul(we, Je)) | 0) + Math.imul(Oe, ze)) | 0),
            (z = (z + Math.imul(Oe, Je)) | 0),
            ($ = ($ + Math.imul(te, ce)) | 0),
            (x = ((x = (x + Math.imul(te, se)) | 0) + Math.imul(ie, ce)) | 0),
            (z = (z + Math.imul(ie, se)) | 0),
            ($ = ($ + Math.imul(Me, me)) | 0),
            (x = ((x = (x + Math.imul(Me, ye)) | 0) + Math.imul(Z, me)) | 0),
            (z = (z + Math.imul(Z, ye)) | 0),
            ($ = ($ + Math.imul(Be, Ae)) | 0),
            (x = ((x = (x + Math.imul(Be, Ce)) | 0) + Math.imul(_e, Ae)) | 0),
            (z = (z + Math.imul(_e, Ce)) | 0),
            ($ = ($ + Math.imul(Se, De)) | 0),
            (x = ((x = (x + Math.imul(Se, je)) | 0) + Math.imul(Ee, De)) | 0),
            (z = (z + Math.imul(Ee, je)) | 0);
          var yt =
            (((J + ($ = ($ + Math.imul(ne, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(ne, Qe)) | 0) + Math.imul(le, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(le, Qe)) | 0) + (x >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            ($ = Math.imul(Le, ze)),
            (x = ((x = Math.imul(Le, Je)) + Math.imul(q, ze)) | 0),
            (z = Math.imul(q, Je)),
            ($ = ($ + Math.imul(we, ce)) | 0),
            (x = ((x = (x + Math.imul(we, se)) | 0) + Math.imul(Oe, ce)) | 0),
            (z = (z + Math.imul(Oe, se)) | 0),
            ($ = ($ + Math.imul(te, me)) | 0),
            (x = ((x = (x + Math.imul(te, ye)) | 0) + Math.imul(ie, me)) | 0),
            (z = (z + Math.imul(ie, ye)) | 0),
            ($ = ($ + Math.imul(Me, Ae)) | 0),
            (x = ((x = (x + Math.imul(Me, Ce)) | 0) + Math.imul(Z, Ae)) | 0),
            (z = (z + Math.imul(Z, Ce)) | 0),
            ($ = ($ + Math.imul(Be, De)) | 0),
            (x = ((x = (x + Math.imul(Be, je)) | 0) + Math.imul(_e, De)) | 0),
            (z = (z + Math.imul(_e, je)) | 0);
          var lt =
            (((J + ($ = ($ + Math.imul(Se, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(Se, Qe)) | 0) + Math.imul(Ee, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(Ee, Qe)) | 0) + (x >>> 13)) | 0) +
              (lt >>> 26)) |
            0),
            (lt &= 67108863),
            ($ = Math.imul(Le, ce)),
            (x = ((x = Math.imul(Le, se)) + Math.imul(q, ce)) | 0),
            (z = Math.imul(q, se)),
            ($ = ($ + Math.imul(we, me)) | 0),
            (x = ((x = (x + Math.imul(we, ye)) | 0) + Math.imul(Oe, me)) | 0),
            (z = (z + Math.imul(Oe, ye)) | 0),
            ($ = ($ + Math.imul(te, Ae)) | 0),
            (x = ((x = (x + Math.imul(te, Ce)) | 0) + Math.imul(ie, Ae)) | 0),
            (z = (z + Math.imul(ie, Ce)) | 0),
            ($ = ($ + Math.imul(Me, De)) | 0),
            (x = ((x = (x + Math.imul(Me, je)) | 0) + Math.imul(Z, De)) | 0),
            (z = (z + Math.imul(Z, je)) | 0);
          var St =
            (((J + ($ = ($ + Math.imul(Be, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(Be, Qe)) | 0) + Math.imul(_e, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(_e, Qe)) | 0) + (x >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            ($ = Math.imul(Le, me)),
            (x = ((x = Math.imul(Le, ye)) + Math.imul(q, me)) | 0),
            (z = Math.imul(q, ye)),
            ($ = ($ + Math.imul(we, Ae)) | 0),
            (x = ((x = (x + Math.imul(we, Ce)) | 0) + Math.imul(Oe, Ae)) | 0),
            (z = (z + Math.imul(Oe, Ce)) | 0),
            ($ = ($ + Math.imul(te, De)) | 0),
            (x = ((x = (x + Math.imul(te, je)) | 0) + Math.imul(ie, De)) | 0),
            (z = (z + Math.imul(ie, je)) | 0);
          var Mt =
            (((J + ($ = ($ + Math.imul(Me, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(Me, Qe)) | 0) + Math.imul(Z, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(Z, Qe)) | 0) + (x >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            ($ = Math.imul(Le, Ae)),
            (x = ((x = Math.imul(Le, Ce)) + Math.imul(q, Ae)) | 0),
            (z = Math.imul(q, Ce)),
            ($ = ($ + Math.imul(we, De)) | 0),
            (x = ((x = (x + Math.imul(we, je)) | 0) + Math.imul(Oe, De)) | 0),
            (z = (z + Math.imul(Oe, je)) | 0);
          var _t =
            (((J + ($ = ($ + Math.imul(te, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(te, Qe)) | 0) + Math.imul(ie, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(ie, Qe)) | 0) + (x >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            ($ = Math.imul(Le, De)),
            (x = ((x = Math.imul(Le, je)) + Math.imul(q, De)) | 0),
            (z = Math.imul(q, je));
          var xt =
            (((J + ($ = ($ + Math.imul(we, Ke)) | 0)) | 0) +
              ((8191 &
                (x =
                  ((x = (x + Math.imul(we, Qe)) | 0) + Math.imul(Oe, Ke)) |
                  0)) <<
                13)) |
            0;
          (J =
            ((((z = (z + Math.imul(Oe, Qe)) | 0) + (x >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863);
          var Ct =
            (((J + ($ = Math.imul(Le, Ke))) | 0) +
              ((8191 &
                (x = ((x = Math.imul(Le, Qe)) + Math.imul(q, Ke)) | 0)) <<
                13)) |
            0;
          return (
            (J =
              ((((z = Math.imul(q, Qe)) + (x >>> 13)) | 0) + (Ct >>> 26)) | 0),
            (Ct &= 67108863),
            (F[0] = at),
            (F[1] = st),
            (F[2] = it),
            (F[3] = ut),
            (F[4] = ht),
            (F[5] = ft),
            (F[6] = dt),
            (F[7] = pt),
            (F[8] = ct),
            (F[9] = gt),
            (F[10] = mt),
            (F[11] = bt),
            (F[12] = yt),
            (F[13] = lt),
            (F[14] = St),
            (F[15] = Mt),
            (F[16] = _t),
            (F[17] = xt),
            (F[18] = Ct),
            0 !== J && ((F[19] = J), I.length++),
            I
          );
        };
        function A(P, m, _) {
          (_.negative = m.negative ^ P.negative),
            (_.length = P.length + m.length);
          for (var I = 0, R = 0, T = 0; T < _.length - 1; T++) {
            var F = R;
            R = 0;
            for (
              var J = 67108863 & I,
                $ = Math.min(T, m.length - 1),
                x = Math.max(0, T - P.length + 1);
              x <= $;
              x++
            ) {
              var be = (0 | P.words[T - x]) * (0 | m.words[x]),
                Q = 67108863 & be;
              (J = 67108863 & (Q = (Q + J) | 0)),
                (R +=
                  (F =
                    ((F = (F + ((be / 67108864) | 0)) | 0) + (Q >>> 26)) |
                    0) >>> 26),
                (F &= 67108863);
            }
            (_.words[T] = J), (I = F), (F = R);
          }
          return 0 !== I ? (_.words[T] = I) : _.length--, _._strip();
        }
        function S(P, m, _) {
          return A(P, m, _);
        }
        function M(P, m) {
          (this.x = P), (this.y = m);
        }
        Math.imul || (C = w),
          (o.prototype.mulTo = function (m, _) {
            var R = this.length + m.length;
            return 10 === this.length && 10 === m.length
              ? C(this, m, _)
              : R < 63
              ? w(this, m, _)
              : R < 1024
              ? A(this, m, _)
              : S(this, m, _);
          }),
          (M.prototype.makeRBT = function (m) {
            for (
              var _ = new Array(m), I = o.prototype._countBits(m) - 1, R = 0;
              R < m;
              R++
            )
              _[R] = this.revBin(R, I, m);
            return _;
          }),
          (M.prototype.revBin = function (m, _, I) {
            if (0 === m || m === I - 1) return m;
            for (var R = 0, T = 0; T < _; T++)
              (R |= (1 & m) << (_ - T - 1)), (m >>= 1);
            return R;
          }),
          (M.prototype.permute = function (m, _, I, R, T, F) {
            for (var J = 0; J < F; J++) (R[J] = _[m[J]]), (T[J] = I[m[J]]);
          }),
          (M.prototype.transform = function (m, _, I, R, T, F) {
            this.permute(F, m, _, I, R, T);
            for (var J = 1; J < T; J <<= 1)
              for (
                var $ = J << 1,
                  x = Math.cos((2 * Math.PI) / $),
                  z = Math.sin((2 * Math.PI) / $),
                  de = 0;
                de < T;
                de += $
              )
                for (var fe = x, be = z, Q = 0; Q < J; Q++) {
                  var B = I[de + Q],
                    V = R[de + Q],
                    ee = I[de + Q + J],
                    oe = R[de + Q + J],
                    H = fe * ee - be * oe;
                  (oe = fe * oe + be * ee),
                    (I[de + Q] = B + (ee = H)),
                    (R[de + Q] = V + oe),
                    (I[de + Q + J] = B - ee),
                    (R[de + Q + J] = V - oe),
                    Q !== $ &&
                      ((H = x * fe - z * be), (be = x * be + z * fe), (fe = H));
                }
          }),
          (M.prototype.guessLen13b = function (m, _) {
            var I = 1 | Math.max(_, m),
              R = 1 & I,
              T = 0;
            for (I = (I / 2) | 0; I; I >>>= 1) T++;
            return 1 << (T + 1 + R);
          }),
          (M.prototype.conjugate = function (m, _, I) {
            if (!(I <= 1))
              for (var R = 0; R < I / 2; R++) {
                var T = m[R];
                (m[R] = m[I - R - 1]),
                  (m[I - R - 1] = T),
                  (T = _[R]),
                  (_[R] = -_[I - R - 1]),
                  (_[I - R - 1] = -T);
              }
          }),
          (M.prototype.normalize13b = function (m, _) {
            for (var I = 0, R = 0; R < _ / 2; R++) {
              var T =
                8192 * Math.round(m[2 * R + 1] / _) +
                Math.round(m[2 * R] / _) +
                I;
              (m[R] = 67108863 & T),
                (I = T < 67108864 ? 0 : (T / 67108864) | 0);
            }
            return m;
          }),
          (M.prototype.convert13b = function (m, _, I, R) {
            for (var T = 0, F = 0; F < _; F++)
              (I[2 * F] = 8191 & (T += 0 | m[F])),
                (I[2 * F + 1] = 8191 & (T >>>= 13)),
                (T >>>= 13);
            for (F = 2 * _; F < R; ++F) I[F] = 0;
            u(0 === T), u(0 == (-8192 & T));
          }),
          (M.prototype.stub = function (m) {
            for (var _ = new Array(m), I = 0; I < m; I++) _[I] = 0;
            return _;
          }),
          (M.prototype.mulp = function (m, _, I) {
            var R = 2 * this.guessLen13b(m.length, _.length),
              T = this.makeRBT(R),
              F = this.stub(R),
              J = new Array(R),
              $ = new Array(R),
              x = new Array(R),
              z = new Array(R),
              de = new Array(R),
              fe = new Array(R),
              be = I.words;
            (be.length = R),
              this.convert13b(m.words, m.length, J, R),
              this.convert13b(_.words, _.length, z, R),
              this.transform(J, F, $, x, R, T),
              this.transform(z, F, de, fe, R, T);
            for (var Q = 0; Q < R; Q++) {
              var B = $[Q] * de[Q] - x[Q] * fe[Q];
              (x[Q] = $[Q] * fe[Q] + x[Q] * de[Q]), ($[Q] = B);
            }
            return (
              this.conjugate($, x, R),
              this.transform($, x, be, F, R, T),
              this.conjugate(be, F, R),
              this.normalize13b(be, R),
              (I.negative = m.negative ^ _.negative),
              (I.length = m.length + _.length),
              I._strip()
            );
          }),
          (o.prototype.mul = function (m) {
            var _ = new o(null);
            return (
              (_.words = new Array(this.length + m.length)), this.mulTo(m, _)
            );
          }),
          (o.prototype.mulf = function (m) {
            var _ = new o(null);
            return (_.words = new Array(this.length + m.length)), S(this, m, _);
          }),
          (o.prototype.imul = function (m) {
            return this.clone().mulTo(m, this);
          }),
          (o.prototype.imuln = function (m) {
            var _ = m < 0;
            _ && (m = -m), u("number" == typeof m), u(m < 67108864);
            for (var I = 0, R = 0; R < this.length; R++) {
              var T = (0 | this.words[R]) * m,
                F = (67108863 & T) + (67108863 & I);
              (I >>= 26),
                (I += (T / 67108864) | 0),
                (I += F >>> 26),
                (this.words[R] = 67108863 & F);
            }
            return (
              0 !== I && ((this.words[R] = I), this.length++),
              _ ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (m) {
            return this.clone().imuln(m);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (m) {
            var _ = (function E(P) {
              for (var m = new Array(P.bitLength()), _ = 0; _ < m.length; _++)
                m[_] = (P.words[(_ / 26) | 0] >>> _ % 26) & 1;
              return m;
            })(m);
            if (0 === _.length) return new o(1);
            for (
              var I = this, R = 0;
              R < _.length && 0 === _[R];
              R++, I = I.sqr()
            );
            if (++R < _.length)
              for (var T = I.sqr(); R < _.length; R++, T = T.sqr())
                0 !== _[R] && (I = I.mul(T));
            return I;
          }),
          (o.prototype.iushln = function (m) {
            u("number" == typeof m && m >= 0);
            var T,
              _ = m % 26,
              I = (m - _) / 26,
              R = (67108863 >>> (26 - _)) << (26 - _);
            if (0 !== _) {
              var F = 0;
              for (T = 0; T < this.length; T++) {
                var J = this.words[T] & R;
                (this.words[T] = (((0 | this.words[T]) - J) << _) | F),
                  (F = J >>> (26 - _));
              }
              F && ((this.words[T] = F), this.length++);
            }
            if (0 !== I) {
              for (T = this.length - 1; T >= 0; T--)
                this.words[T + I] = this.words[T];
              for (T = 0; T < I; T++) this.words[T] = 0;
              this.length += I;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (m) {
            return u(0 === this.negative), this.iushln(m);
          }),
          (o.prototype.iushrn = function (m, _, I) {
            var R;
            u("number" == typeof m && m >= 0),
              (R = _ ? (_ - (_ % 26)) / 26 : 0);
            var T = m % 26,
              F = Math.min((m - T) / 26, this.length),
              J = 67108863 ^ ((67108863 >>> T) << T),
              $ = I;
            if (((R -= F), (R = Math.max(0, R)), $)) {
              for (var x = 0; x < F; x++) $.words[x] = this.words[x];
              $.length = F;
            }
            if (0 !== F)
              if (this.length > F)
                for (this.length -= F, x = 0; x < this.length; x++)
                  this.words[x] = this.words[x + F];
              else (this.words[0] = 0), (this.length = 1);
            var z = 0;
            for (x = this.length - 1; x >= 0 && (0 !== z || x >= R); x--) {
              var de = 0 | this.words[x];
              (this.words[x] = (z << (26 - T)) | (de >>> T)), (z = de & J);
            }
            return (
              $ && 0 !== z && ($.words[$.length++] = z),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (m, _, I) {
            return u(0 === this.negative), this.iushrn(m, _, I);
          }),
          (o.prototype.shln = function (m) {
            return this.clone().ishln(m);
          }),
          (o.prototype.ushln = function (m) {
            return this.clone().iushln(m);
          }),
          (o.prototype.shrn = function (m) {
            return this.clone().ishrn(m);
          }),
          (o.prototype.ushrn = function (m) {
            return this.clone().iushrn(m);
          }),
          (o.prototype.testn = function (m) {
            u("number" == typeof m && m >= 0);
            var _ = m % 26,
              I = (m - _) / 26;
            return !(this.length <= I || !(this.words[I] & (1 << _)));
          }),
          (o.prototype.imaskn = function (m) {
            u("number" == typeof m && m >= 0);
            var _ = m % 26,
              I = (m - _) / 26;
            return (
              u(0 === this.negative, "imaskn works only with positive numbers"),
              this.length <= I
                ? this
                : (0 !== _ && I++,
                  (this.length = Math.min(I, this.length)),
                  0 !== _ &&
                    (this.words[this.length - 1] &=
                      67108863 ^ ((67108863 >>> _) << _)),
                  this._strip())
            );
          }),
          (o.prototype.maskn = function (m) {
            return this.clone().imaskn(m);
          }),
          (o.prototype.iaddn = function (m) {
            return (
              u("number" == typeof m),
              u(m < 67108864),
              m < 0
                ? this.isubn(-m)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) <= m
                  ? ((this.words[0] = m - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(m),
                    (this.negative = 1),
                    this)
                : this._iaddn(m)
            );
          }),
          (o.prototype._iaddn = function (m) {
            this.words[0] += m;
            for (var _ = 0; _ < this.length && this.words[_] >= 67108864; _++)
              (this.words[_] -= 67108864),
                _ === this.length - 1
                  ? (this.words[_ + 1] = 1)
                  : this.words[_ + 1]++;
            return (this.length = Math.max(this.length, _ + 1)), this;
          }),
          (o.prototype.isubn = function (m) {
            if ((u("number" == typeof m), u(m < 67108864), m < 0))
              return this.iaddn(-m);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(m), (this.negative = 1), this
              );
            if (((this.words[0] -= m), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var _ = 0; _ < this.length && this.words[_] < 0; _++)
                (this.words[_] += 67108864), (this.words[_ + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (m) {
            return this.clone().iaddn(m);
          }),
          (o.prototype.subn = function (m) {
            return this.clone().isubn(m);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (m, _, I) {
            var T;
            this._expand(m.length + I);
            var F,
              J = 0;
            for (T = 0; T < m.length; T++) {
              F = (0 | this.words[T + I]) + J;
              var $ = (0 | m.words[T]) * _;
              (J = ((F -= 67108863 & $) >> 26) - (($ / 67108864) | 0)),
                (this.words[T + I] = 67108863 & F);
            }
            for (; T < this.length - I; T++)
              (J = (F = (0 | this.words[T + I]) + J) >> 26),
                (this.words[T + I] = 67108863 & F);
            if (0 === J) return this._strip();
            for (u(-1 === J), J = 0, T = 0; T < this.length; T++)
              (J = (F = -(0 | this.words[T]) + J) >> 26),
                (this.words[T] = 67108863 & F);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (m, _) {
            var I,
              R = this.clone(),
              T = m,
              F = 0 | T.words[T.length - 1];
            0 != (I = 26 - this._countBits(F)) &&
              ((T = T.ushln(I)), R.iushln(I), (F = 0 | T.words[T.length - 1]));
            var x,
              $ = R.length - T.length;
            if ("mod" !== _) {
              ((x = new o(null)).length = $ + 1),
                (x.words = new Array(x.length));
              for (var z = 0; z < x.length; z++) x.words[z] = 0;
            }
            var de = R.clone()._ishlnsubmul(T, 1, $);
            0 === de.negative && ((R = de), x && (x.words[$] = 1));
            for (var fe = $ - 1; fe >= 0; fe--) {
              var be =
                67108864 * (0 | R.words[T.length + fe]) +
                (0 | R.words[T.length + fe - 1]);
              for (
                be = Math.min((be / F) | 0, 67108863),
                  R._ishlnsubmul(T, be, fe);
                0 !== R.negative;

              )
                be--,
                  (R.negative = 0),
                  R._ishlnsubmul(T, 1, fe),
                  R.isZero() || (R.negative ^= 1);
              x && (x.words[fe] = be);
            }
            return (
              x && x._strip(),
              R._strip(),
              "div" !== _ && 0 !== I && R.iushrn(I),
              { div: x || null, mod: R }
            );
          }),
          (o.prototype.divmod = function (m, _, I) {
            return (
              u(!m.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === m.negative
                ? ((F = this.neg().divmod(m, _)),
                  "mod" !== _ && (R = F.div.neg()),
                  "div" !== _ &&
                    ((T = F.mod.neg()), I && 0 !== T.negative && T.iadd(m)),
                  { div: R, mod: T })
                : 0 === this.negative && 0 !== m.negative
                ? ((F = this.divmod(m.neg(), _)),
                  "mod" !== _ && (R = F.div.neg()),
                  { div: R, mod: F.mod })
                : this.negative & m.negative
                ? ((F = this.neg().divmod(m.neg(), _)),
                  "div" !== _ &&
                    ((T = F.mod.neg()), I && 0 !== T.negative && T.isub(m)),
                  { div: F.div, mod: T })
                : m.length > this.length || this.cmp(m) < 0
                ? { div: new o(0), mod: this }
                : 1 === m.length
                ? "div" === _
                  ? { div: this.divn(m.words[0]), mod: null }
                  : "mod" === _
                  ? { div: null, mod: new o(this.modrn(m.words[0])) }
                  : {
                      div: this.divn(m.words[0]),
                      mod: new o(this.modrn(m.words[0])),
                    }
                : this._wordDiv(m, _)
            );
            var R, T, F;
          }),
          (o.prototype.div = function (m) {
            return this.divmod(m, "div", !1).div;
          }),
          (o.prototype.mod = function (m) {
            return this.divmod(m, "mod", !1).mod;
          }),
          (o.prototype.umod = function (m) {
            return this.divmod(m, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (m) {
            var _ = this.divmod(m);
            if (_.mod.isZero()) return _.div;
            var I = 0 !== _.div.negative ? _.mod.isub(m) : _.mod,
              R = m.ushrn(1),
              T = m.andln(1),
              F = I.cmp(R);
            return F < 0 || (1 === T && 0 === F)
              ? _.div
              : 0 !== _.div.negative
              ? _.div.isubn(1)
              : _.div.iaddn(1);
          }),
          (o.prototype.modrn = function (m) {
            var _ = m < 0;
            _ && (m = -m), u(m <= 67108863);
            for (var I = (1 << 26) % m, R = 0, T = this.length - 1; T >= 0; T--)
              R = (I * R + (0 | this.words[T])) % m;
            return _ ? -R : R;
          }),
          (o.prototype.modn = function (m) {
            return this.modrn(m);
          }),
          (o.prototype.idivn = function (m) {
            var _ = m < 0;
            _ && (m = -m), u(m <= 67108863);
            for (var I = 0, R = this.length - 1; R >= 0; R--) {
              var T = (0 | this.words[R]) + 67108864 * I;
              (this.words[R] = (T / m) | 0), (I = T % m);
            }
            return this._strip(), _ ? this.ineg() : this;
          }),
          (o.prototype.divn = function (m) {
            return this.clone().idivn(m);
          }),
          (o.prototype.egcd = function (m) {
            u(0 === m.negative), u(!m.isZero());
            var _ = this,
              I = m.clone();
            _ = 0 !== _.negative ? _.umod(m) : _.clone();
            for (
              var R = new o(1), T = new o(0), F = new o(0), J = new o(1), $ = 0;
              _.isEven() && I.isEven();

            )
              _.iushrn(1), I.iushrn(1), ++$;
            for (var x = I.clone(), z = _.clone(); !_.isZero(); ) {
              for (
                var de = 0, fe = 1;
                !(_.words[0] & fe) && de < 26;
                ++de, fe <<= 1
              );
              if (de > 0)
                for (_.iushrn(de); de-- > 0; )
                  (R.isOdd() || T.isOdd()) && (R.iadd(x), T.isub(z)),
                    R.iushrn(1),
                    T.iushrn(1);
              for (
                var be = 0, Q = 1;
                !(I.words[0] & Q) && be < 26;
                ++be, Q <<= 1
              );
              if (be > 0)
                for (I.iushrn(be); be-- > 0; )
                  (F.isOdd() || J.isOdd()) && (F.iadd(x), J.isub(z)),
                    F.iushrn(1),
                    J.iushrn(1);
              _.cmp(I) >= 0
                ? (_.isub(I), R.isub(F), T.isub(J))
                : (I.isub(_), F.isub(R), J.isub(T));
            }
            return { a: F, b: J, gcd: I.iushln($) };
          }),
          (o.prototype._invmp = function (m) {
            u(0 === m.negative), u(!m.isZero());
            var de,
              _ = this,
              I = m.clone();
            _ = 0 !== _.negative ? _.umod(m) : _.clone();
            for (
              var R = new o(1), T = new o(0), F = I.clone();
              _.cmpn(1) > 0 && I.cmpn(1) > 0;

            ) {
              for (var J = 0, $ = 1; !(_.words[0] & $) && J < 26; ++J, $ <<= 1);
              if (J > 0)
                for (_.iushrn(J); J-- > 0; )
                  R.isOdd() && R.iadd(F), R.iushrn(1);
              for (var x = 0, z = 1; !(I.words[0] & z) && x < 26; ++x, z <<= 1);
              if (x > 0)
                for (I.iushrn(x); x-- > 0; )
                  T.isOdd() && T.iadd(F), T.iushrn(1);
              _.cmp(I) >= 0 ? (_.isub(I), R.isub(T)) : (I.isub(_), T.isub(R));
            }
            return (de = 0 === _.cmpn(1) ? R : T).cmpn(0) < 0 && de.iadd(m), de;
          }),
          (o.prototype.gcd = function (m) {
            if (this.isZero()) return m.abs();
            if (m.isZero()) return this.abs();
            var _ = this.clone(),
              I = m.clone();
            (_.negative = 0), (I.negative = 0);
            for (var R = 0; _.isEven() && I.isEven(); R++)
              _.iushrn(1), I.iushrn(1);
            for (;;) {
              for (; _.isEven(); ) _.iushrn(1);
              for (; I.isEven(); ) I.iushrn(1);
              var T = _.cmp(I);
              if (T < 0) {
                var F = _;
                (_ = I), (I = F);
              } else if (0 === T || 0 === I.cmpn(1)) break;
              _.isub(I);
            }
            return I.iushln(R);
          }),
          (o.prototype.invm = function (m) {
            return this.egcd(m).a.umod(m);
          }),
          (o.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (o.prototype.andln = function (m) {
            return this.words[0] & m;
          }),
          (o.prototype.bincn = function (m) {
            u("number" == typeof m);
            var _ = m % 26,
              I = (m - _) / 26,
              R = 1 << _;
            if (this.length <= I)
              return this._expand(I + 1), (this.words[I] |= R), this;
            for (var T = R, F = I; 0 !== T && F < this.length; F++) {
              var J = 0 | this.words[F];
              (T = (J += T) >>> 26), (this.words[F] = J &= 67108863);
            }
            return 0 !== T && ((this.words[F] = T), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (m) {
            var I,
              _ = m < 0;
            if (0 !== this.negative && !_) return -1;
            if (0 === this.negative && _) return 1;
            if ((this._strip(), this.length > 1)) I = 1;
            else {
              _ && (m = -m), u(m <= 67108863, "Number is too big");
              var R = 0 | this.words[0];
              I = R === m ? 0 : R < m ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -I : I;
          }),
          (o.prototype.cmp = function (m) {
            if (0 !== this.negative && 0 === m.negative) return -1;
            if (0 === this.negative && 0 !== m.negative) return 1;
            var _ = this.ucmp(m);
            return 0 !== this.negative ? 0 | -_ : _;
          }),
          (o.prototype.ucmp = function (m) {
            if (this.length > m.length) return 1;
            if (this.length < m.length) return -1;
            for (var _ = 0, I = this.length - 1; I >= 0; I--) {
              var R = 0 | this.words[I],
                T = 0 | m.words[I];
              if (R !== T) {
                R < T ? (_ = -1) : R > T && (_ = 1);
                break;
              }
            }
            return _;
          }),
          (o.prototype.gtn = function (m) {
            return 1 === this.cmpn(m);
          }),
          (o.prototype.gt = function (m) {
            return 1 === this.cmp(m);
          }),
          (o.prototype.gten = function (m) {
            return this.cmpn(m) >= 0;
          }),
          (o.prototype.gte = function (m) {
            return this.cmp(m) >= 0;
          }),
          (o.prototype.ltn = function (m) {
            return -1 === this.cmpn(m);
          }),
          (o.prototype.lt = function (m) {
            return -1 === this.cmp(m);
          }),
          (o.prototype.lten = function (m) {
            return this.cmpn(m) <= 0;
          }),
          (o.prototype.lte = function (m) {
            return this.cmp(m) <= 0;
          }),
          (o.prototype.eqn = function (m) {
            return 0 === this.cmpn(m);
          }),
          (o.prototype.eq = function (m) {
            return 0 === this.cmp(m);
          }),
          (o.red = function (m) {
            return new re(m);
          }),
          (o.prototype.toRed = function (m) {
            return (
              u(!this.red, "Already a number in reduction context"),
              u(0 === this.negative, "red works only with positives"),
              m.convertTo(this)._forceRed(m)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              u(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (m) {
            return (this.red = m), this;
          }),
          (o.prototype.forceRed = function (m) {
            return (
              u(!this.red, "Already a number in reduction context"),
              this._forceRed(m)
            );
          }),
          (o.prototype.redAdd = function (m) {
            return (
              u(this.red, "redAdd works only with red numbers"),
              this.red.add(this, m)
            );
          }),
          (o.prototype.redIAdd = function (m) {
            return (
              u(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, m)
            );
          }),
          (o.prototype.redSub = function (m) {
            return (
              u(this.red, "redSub works only with red numbers"),
              this.red.sub(this, m)
            );
          }),
          (o.prototype.redISub = function (m) {
            return (
              u(this.red, "redISub works only with red numbers"),
              this.red.isub(this, m)
            );
          }),
          (o.prototype.redShl = function (m) {
            return (
              u(this.red, "redShl works only with red numbers"),
              this.red.shl(this, m)
            );
          }),
          (o.prototype.redMul = function (m) {
            return (
              u(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, m),
              this.red.mul(this, m)
            );
          }),
          (o.prototype.redIMul = function (m) {
            return (
              u(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, m),
              this.red.imul(this, m)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              u(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              u(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              u(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              u(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              u(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (m) {
            return (
              u(this.red && !m.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, m)
            );
          });
        var N = { k256: null, p224: null, p192: null, p25519: null };
        function U(P, m) {
          (this.name = P),
            (this.p = new o(m, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function O() {
          U.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function D() {
          U.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function K() {
          U.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function G() {
          U.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function re(P) {
          if ("string" == typeof P) {
            var m = o._prime(P);
            (this.m = m.p), (this.prime = m);
          } else
            u(P.gtn(1), "modulus must be greater than 1"),
              (this.m = P),
              (this.prime = null);
        }
        function ue(P) {
          re.call(this, P),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (U.prototype._tmp = function () {
          var m = new o(null);
          return (m.words = new Array(Math.ceil(this.n / 13))), m;
        }),
          (U.prototype.ireduce = function (m) {
            var I,
              _ = m;
            do {
              this.split(_, this.tmp),
                (I = (_ = (_ = this.imulK(_)).iadd(this.tmp)).bitLength());
            } while (I > this.n);
            var R = I < this.n ? -1 : _.ucmp(this.p);
            return (
              0 === R
                ? ((_.words[0] = 0), (_.length = 1))
                : R > 0
                ? _.isub(this.p)
                : void 0 !== _.strip
                ? _.strip()
                : _._strip(),
              _
            );
          }),
          (U.prototype.split = function (m, _) {
            m.iushrn(this.n, 0, _);
          }),
          (U.prototype.imulK = function (m) {
            return m.imul(this.k);
          }),
          d(O, U),
          (O.prototype.split = function (m, _) {
            for (var I = 4194303, R = Math.min(m.length, 9), T = 0; T < R; T++)
              _.words[T] = m.words[T];
            if (((_.length = R), m.length <= 9))
              return (m.words[0] = 0), void (m.length = 1);
            var F = m.words[9];
            for (_.words[_.length++] = F & I, T = 10; T < m.length; T++) {
              var J = 0 | m.words[T];
              (m.words[T - 10] = ((J & I) << 4) | (F >>> 22)), (F = J);
            }
            (m.words[T - 10] = F >>>= 22),
              (m.length -= 0 === F && m.length > 10 ? 10 : 9);
          }),
          (O.prototype.imulK = function (m) {
            (m.words[m.length] = 0),
              (m.words[m.length + 1] = 0),
              (m.length += 2);
            for (var _ = 0, I = 0; I < m.length; I++) {
              var R = 0 | m.words[I];
              (m.words[I] = 67108863 & (_ += 977 * R)),
                (_ = 64 * R + ((_ / 67108864) | 0));
            }
            return (
              0 === m.words[m.length - 1] &&
                (m.length--, 0 === m.words[m.length - 1] && m.length--),
              m
            );
          }),
          d(D, U),
          d(K, U),
          d(G, U),
          (G.prototype.imulK = function (m) {
            for (var _ = 0, I = 0; I < m.length; I++) {
              var R = 19 * (0 | m.words[I]) + _,
                T = 67108863 & R;
              (R >>>= 26), (m.words[I] = T), (_ = R);
            }
            return 0 !== _ && (m.words[m.length++] = _), m;
          }),
          (o._prime = function (m) {
            if (N[m]) return N[m];
            var _;
            if ("k256" === m) _ = new O();
            else if ("p224" === m) _ = new D();
            else if ("p192" === m) _ = new K();
            else {
              if ("p25519" !== m) throw new Error("Unknown prime " + m);
              _ = new G();
            }
            return (N[m] = _), _;
          }),
          (re.prototype._verify1 = function (m) {
            u(0 === m.negative, "red works only with positives"),
              u(m.red, "red works only with red numbers");
          }),
          (re.prototype._verify2 = function (m, _) {
            u(0 == (m.negative | _.negative), "red works only with positives"),
              u(m.red && m.red === _.red, "red works only with red numbers");
          }),
          (re.prototype.imod = function (m) {
            return this.prime
              ? this.prime.ireduce(m)._forceRed(this)
              : (h(m, m.umod(this.m)._forceRed(this)), m);
          }),
          (re.prototype.neg = function (m) {
            return m.isZero() ? m.clone() : this.m.sub(m)._forceRed(this);
          }),
          (re.prototype.add = function (m, _) {
            this._verify2(m, _);
            var I = m.add(_);
            return I.cmp(this.m) >= 0 && I.isub(this.m), I._forceRed(this);
          }),
          (re.prototype.iadd = function (m, _) {
            this._verify2(m, _);
            var I = m.iadd(_);
            return I.cmp(this.m) >= 0 && I.isub(this.m), I;
          }),
          (re.prototype.sub = function (m, _) {
            this._verify2(m, _);
            var I = m.sub(_);
            return I.cmpn(0) < 0 && I.iadd(this.m), I._forceRed(this);
          }),
          (re.prototype.isub = function (m, _) {
            this._verify2(m, _);
            var I = m.isub(_);
            return I.cmpn(0) < 0 && I.iadd(this.m), I;
          }),
          (re.prototype.shl = function (m, _) {
            return this._verify1(m), this.imod(m.ushln(_));
          }),
          (re.prototype.imul = function (m, _) {
            return this._verify2(m, _), this.imod(m.imul(_));
          }),
          (re.prototype.mul = function (m, _) {
            return this._verify2(m, _), this.imod(m.mul(_));
          }),
          (re.prototype.isqr = function (m) {
            return this.imul(m, m.clone());
          }),
          (re.prototype.sqr = function (m) {
            return this.mul(m, m);
          }),
          (re.prototype.sqrt = function (m) {
            if (m.isZero()) return m.clone();
            var _ = this.m.andln(3);
            if ((u(_ % 2 == 1), 3 === _)) {
              var I = this.m.add(new o(1)).iushrn(2);
              return this.pow(m, I);
            }
            for (
              var R = this.m.subn(1), T = 0;
              !R.isZero() && 0 === R.andln(1);

            )
              T++, R.iushrn(1);
            u(!R.isZero());
            var F = new o(1).toRed(this),
              J = F.redNeg(),
              $ = this.m.subn(1).iushrn(1),
              x = this.m.bitLength();
            for (
              x = new o(2 * x * x).toRed(this);
              0 !== this.pow(x, $).cmp(J);

            )
              x.redIAdd(J);
            for (
              var z = this.pow(x, R),
                de = this.pow(m, R.addn(1).iushrn(1)),
                fe = this.pow(m, R),
                be = T;
              0 !== fe.cmp(F);

            ) {
              for (var Q = fe, B = 0; 0 !== Q.cmp(F); B++) Q = Q.redSqr();
              u(B < be);
              var V = this.pow(z, new o(1).iushln(be - B - 1));
              (de = de.redMul(V)),
                (z = V.redSqr()),
                (fe = fe.redMul(z)),
                (be = B);
            }
            return de;
          }),
          (re.prototype.invm = function (m) {
            var _ = m._invmp(this.m);
            return 0 !== _.negative
              ? ((_.negative = 0), this.imod(_).redNeg())
              : this.imod(_);
          }),
          (re.prototype.pow = function (m, _) {
            if (_.isZero()) return new o(1).toRed(this);
            if (0 === _.cmpn(1)) return m.clone();
            var R = new Array(16);
            (R[0] = new o(1).toRed(this)), (R[1] = m);
            for (var T = 2; T < R.length; T++) R[T] = this.mul(R[T - 1], m);
            var F = R[0],
              J = 0,
              $ = 0,
              x = _.bitLength() % 26;
            for (0 === x && (x = 26), T = _.length - 1; T >= 0; T--) {
              for (var z = _.words[T], de = x - 1; de >= 0; de--) {
                var fe = (z >> de) & 1;
                F !== R[0] && (F = this.sqr(F)),
                  0 !== fe || 0 !== J
                    ? ((J <<= 1),
                      (J |= fe),
                      (4 == ++$ || (0 === T && 0 === de)) &&
                        ((F = this.mul(F, R[J])), ($ = 0), (J = 0)))
                    : ($ = 0);
              }
              x = 26;
            }
            return F;
          }),
          (re.prototype.convertTo = function (m) {
            var _ = m.umod(this.m);
            return _ === m ? _.clone() : _;
          }),
          (re.prototype.convertFrom = function (m) {
            var _ = m.clone();
            return (_.red = null), _;
          }),
          (o.mont = function (m) {
            return new ue(m);
          }),
          d(ue, re),
          (ue.prototype.convertTo = function (m) {
            return this.imod(m.ushln(this.shift));
          }),
          (ue.prototype.convertFrom = function (m) {
            var _ = this.imod(m.mul(this.rinv));
            return (_.red = null), _;
          }),
          (ue.prototype.imul = function (m, _) {
            if (m.isZero() || _.isZero())
              return (m.words[0] = 0), (m.length = 1), m;
            var I = m.imul(_),
              R = I.maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              T = I.isub(R).iushrn(this.shift),
              F = T;
            return (
              T.cmp(this.m) >= 0
                ? (F = T.isub(this.m))
                : T.cmpn(0) < 0 && (F = T.iadd(this.m)),
              F._forceRed(this)
            );
          }),
          (ue.prototype.mul = function (m, _) {
            if (m.isZero() || _.isZero()) return new o(0)._forceRed(this);
            var I = m.mul(_),
              R = I.maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              T = I.isub(R).iushrn(this.shift),
              F = T;
            return (
              T.cmp(this.m) >= 0
                ? (F = T.isub(this.m))
                : T.cmpn(0) < 0 && (F = T.iadd(this.m)),
              F._forceRed(this)
            );
          }),
          (ue.prototype.invm = function (m) {
            return this.imod(m._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((L = t.nmd(L)), this);
    },
    41098: (L, r, t) => {
      "use strict";
      var e = t(90491),
        g = t(35436),
        u = g(e("String.prototype.indexOf"));
      L.exports = function (o, i) {
        var s = e(o, !!i);
        return "function" == typeof s && u(o, ".prototype.") > -1 ? g(s) : s;
      };
    },
    35436: (L, r, t) => {
      "use strict";
      var e = t(45333),
        g = t(90491),
        u = g("%Function.prototype.apply%"),
        d = g("%Function.prototype.call%"),
        o = g("%Reflect.apply%", !0) || e.call(d, u),
        i = g("%Object.getOwnPropertyDescriptor%", !0),
        s = g("%Object.defineProperty%", !0),
        l = g("%Math.max%");
      if (s)
        try {
          s({}, "a", { value: 1 });
        } catch {
          s = null;
        }
      L.exports = function (p) {
        var c = o(e, d, arguments);
        return (
          i &&
            s &&
            i(c, "length").configurable &&
            s(c, "length", {
              value: 1 + l(0, p.length - (arguments.length - 1)),
            }),
          c
        );
      };
      var b = function () {
        return o(e, u, arguments);
      };
      s ? s(L.exports, "apply", { value: b }) : (L.exports.apply = b);
    },
    46915: (L, r, t) => {
      "use strict";
      function e(d) {
        var o,
          i,
          s = "";
        if ("string" == typeof d || "number" == typeof d) s += d;
        else if ("object" == typeof d)
          if (Array.isArray(d))
            for (o = 0; o < d.length; o++)
              d[o] && (i = e(d[o])) && (s && (s += " "), (s += i));
          else for (o in d) d[o] && (s && (s += " "), (s += o));
        return s;
      }
      function g() {
        for (var d, o, i = 0, s = ""; i < arguments.length; )
          (d = arguments[i++]) && (o = e(d)) && (s && (s += " "), (s += o));
        return s;
      }
      t.r(r), t.d(r, { clsx: () => g, default: () => u });
      const u = g;
    },
    30890: (L) => {
      var r = 1e3,
        t = 60 * r,
        e = 60 * t,
        g = 24 * e;
      function l(b, h, p, c) {
        var n = h >= 1.5 * p;
        return Math.round(b / p) + " " + c + (n ? "s" : "");
      }
      L.exports = function (b, h) {
        h = h || {};
        var p = typeof b;
        if ("string" === p && b.length > 0)
          return (function o(b) {
            if (!((b = String(b)).length > 100)) {
              var h =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  b
                );
              if (h) {
                var p = parseFloat(h[1]);
                switch ((h[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * p;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * p;
                  case "days":
                  case "day":
                  case "d":
                    return p * g;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return p * e;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return p * t;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return p * r;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return p;
                  default:
                    return;
                }
              }
            }
          })(b);
        if ("number" === p && isFinite(b))
          return h.long
            ? (function s(b) {
                var h = Math.abs(b);
                return h >= g
                  ? l(b, h, g, "day")
                  : h >= e
                  ? l(b, h, e, "hour")
                  : h >= t
                  ? l(b, h, t, "minute")
                  : h >= r
                  ? l(b, h, r, "second")
                  : b + " ms";
              })(b)
            : (function i(b) {
                var h = Math.abs(b);
                return h >= g
                  ? Math.round(b / g) + "d"
                  : h >= e
                  ? Math.round(b / e) + "h"
                  : h >= t
                  ? Math.round(b / t) + "m"
                  : h >= r
                  ? Math.round(b / r) + "s"
                  : b + "ms";
              })(b);
        throw new Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(b)
        );
      };
    },
    20563: (L, r, t) => {
      (r.formatArgs = function g(s) {
        if (
          ((s[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            s[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            L.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        const l = "color: " + this.color;
        s.splice(1, 0, l, "color: inherit");
        let b = 0,
          h = 0;
        s[0].replace(/%[a-zA-Z%]/g, (p) => {
          "%%" !== p && (b++, "%c" === p && (h = b));
        }),
          s.splice(h, 0, l);
      }),
        (r.save = function u(s) {
          try {
            s ? r.storage.setItem("debug", s) : r.storage.removeItem("debug");
          } catch {}
        }),
        (r.load = function d() {
          let s;
          try {
            s = r.storage.getItem("debug");
          } catch {}
          return (
            !s &&
              typeof process < "u" &&
              "env" in process &&
              (s = process.env.DEBUG),
            s
          );
        }),
        (r.useColors = function e() {
          return (
            !(
              !(typeof window < "u" && window.process) ||
              ("renderer" !== window.process.type && !window.process.__nwjs)
            ) ||
            (!(
              typeof navigator < "u" &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ) &&
              ((typeof document < "u" &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                (typeof window < "u" &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                (typeof navigator < "u" &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }),
        (r.storage = (function o() {
          try {
            return localStorage;
          } catch {}
        })()),
        (r.destroy = (() => {
          let s = !1;
          return () => {
            s ||
              ((s = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              ));
          };
        })()),
        (r.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (r.log = console.debug || console.log || (() => {})),
        (L.exports = t(56018)(r));
      const { formatters: i } = L.exports;
      i.j = function (s) {
        try {
          return JSON.stringify(s);
        } catch (l) {
          return "[UnexpectedJSONParseError]: " + l.message;
        }
      };
    },
    56018: (L, r, t) => {
      L.exports = function e(g) {
        function d(c) {
          let n,
            v,
            E,
            f = null;
          function w(...C) {
            if (!w.enabled) return;
            const A = w,
              S = Number(new Date());
            (A.diff = S - (n || S)),
              (A.prev = n),
              (A.curr = S),
              (n = S),
              (C[0] = d.coerce(C[0])),
              "string" != typeof C[0] && C.unshift("%O");
            let N = 0;
            (C[0] = C[0].replace(/%([a-zA-Z%])/g, (O, D) => {
              if ("%%" === O) return "%";
              N++;
              const K = d.formatters[D];
              return (
                "function" == typeof K &&
                  ((O = K.call(A, C[N])), C.splice(N, 1), N--),
                O
              );
            })),
              d.formatArgs.call(A, C),
              (A.log || d.log).apply(A, C);
          }
          return (
            (w.namespace = c),
            (w.useColors = d.useColors()),
            (w.color = d.selectColor(c)),
            (w.extend = o),
            (w.destroy = d.destroy),
            Object.defineProperty(w, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== f
                  ? f
                  : (v !== d.namespaces &&
                      ((v = d.namespaces), (E = d.enabled(c))),
                    E),
              set: (C) => {
                f = C;
              },
            }),
            "function" == typeof d.init && d.init(w),
            w
          );
        }
        function o(c, n) {
          const f = d(this.namespace + (typeof n > "u" ? ":" : n) + c);
          return (f.log = this.log), f;
        }
        function b(c) {
          return c
            .toString()
            .substring(2, c.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        return (
          (d.debug = d),
          (d.default = d),
          (d.coerce = function h(c) {
            return c instanceof Error ? c.stack || c.message : c;
          }),
          (d.disable = function s() {
            const c = [
              ...d.names.map(b),
              ...d.skips.map(b).map((n) => "-" + n),
            ].join(",");
            return d.enable(""), c;
          }),
          (d.enable = function i(c) {
            let n;
            d.save(c), (d.namespaces = c), (d.names = []), (d.skips = []);
            const f = ("string" == typeof c ? c : "").split(/[\s,]+/),
              v = f.length;
            for (n = 0; n < v; n++)
              f[n] &&
                ("-" === (c = f[n].replace(/\*/g, ".*?"))[0]
                  ? d.skips.push(new RegExp("^" + c.slice(1) + "$"))
                  : d.names.push(new RegExp("^" + c + "$")));
          }),
          (d.enabled = function l(c) {
            if ("*" === c[c.length - 1]) return !0;
            let n, f;
            for (n = 0, f = d.skips.length; n < f; n++)
              if (d.skips[n].test(c)) return !1;
            for (n = 0, f = d.names.length; n < f; n++)
              if (d.names[n].test(c)) return !0;
            return !1;
          }),
          (d.humanize = t(30890)),
          (d.destroy = function p() {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
            );
          }),
          Object.keys(g).forEach((c) => {
            d[c] = g[c];
          }),
          (d.names = []),
          (d.skips = []),
          (d.formatters = {}),
          (d.selectColor = function u(c) {
            let n = 0;
            for (let f = 0; f < c.length; f++)
              (n = (n << 5) - n + c.charCodeAt(f)), (n |= 0);
            return d.colors[Math.abs(n) % d.colors.length];
          }),
          d.enable(d.load()),
          d
        );
      };
    },
    7167: function (L, r, t) {
      "use strict";
      var e = t(59344).default,
        g =
          (this && this.__importDefault) ||
          function (b) {
            return b && b.__esModule ? b : { default: b };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.BaseBlockTracker = void 0);
      const u = g(t(91184)),
        o = (b, h) => b + h,
        i = ["sync", "latest"];
      function l(b) {
        return Number.parseInt(b, 16);
      }
      r.BaseBlockTracker = class s extends u.default {
        constructor(h) {
          super(),
            (this._blockResetDuration = h.blockResetDuration || 2e4),
            (this._currentBlock = null),
            (this._isRunning = !1),
            (this._onNewListener = this._onNewListener.bind(this)),
            (this._onRemoveListener = this._onRemoveListener.bind(this)),
            (this._resetCurrentBlock = this._resetCurrentBlock.bind(this)),
            this._setupInternalEvents();
        }
        destroy() {
          var h = () => super.removeAllListeners,
            p = this;
          return e(function* () {
            p._cancelBlockResetTimeout(), yield p._maybeEnd(), h().call(p);
          })();
        }
        isRunning() {
          return this._isRunning;
        }
        getCurrentBlock() {
          return this._currentBlock;
        }
        getLatestBlock() {
          var h = this;
          return e(function* () {
            return h._currentBlock
              ? h._currentBlock
              : yield new Promise((c) => h.once("latest", c));
          })();
        }
        removeAllListeners(h) {
          return (
            h ? super.removeAllListeners(h) : super.removeAllListeners(),
            this._setupInternalEvents(),
            this._onRemoveListener(),
            this
          );
        }
        _setupInternalEvents() {
          this.removeListener("newListener", this._onNewListener),
            this.removeListener("removeListener", this._onRemoveListener),
            this.on("newListener", this._onNewListener),
            this.on("removeListener", this._onRemoveListener);
        }
        _onNewListener(h) {
          i.includes(h) && this._maybeStart();
        }
        _onRemoveListener() {
          this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
        }
        _maybeStart() {
          var h = this;
          return e(function* () {
            h._isRunning ||
              ((h._isRunning = !0),
              h._cancelBlockResetTimeout(),
              yield h._start(),
              h.emit("_started"));
          })();
        }
        _maybeEnd() {
          var h = this;
          return e(function* () {
            h._isRunning &&
              ((h._isRunning = !1),
              h._setupBlockResetTimeout(),
              yield h._end(),
              h.emit("_ended"));
          })();
        }
        _getBlockTrackerEventCount() {
          return i.map((h) => this.listenerCount(h)).reduce(o);
        }
        _newPotentialLatest(h) {
          const p = this._currentBlock;
          (p && l(h) <= l(p)) || this._setCurrentBlock(h);
        }
        _setCurrentBlock(h) {
          const p = this._currentBlock;
          (this._currentBlock = h),
            this.emit("latest", h),
            this.emit("sync", { oldBlock: p, newBlock: h });
        }
        _setupBlockResetTimeout() {
          this._cancelBlockResetTimeout(),
            (this._blockResetTimeout = setTimeout(
              this._resetCurrentBlock,
              this._blockResetDuration
            )),
            this._blockResetTimeout.unref && this._blockResetTimeout.unref();
        }
        _cancelBlockResetTimeout() {
          this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
        }
        _resetCurrentBlock() {
          this._currentBlock = null;
        }
      };
    },
    46270: function (L, r, t) {
      "use strict";
      var e = t(59344).default,
        g =
          (this && this.__importDefault) ||
          function (c) {
            return c && c.__esModule ? c : { default: c };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.PollingBlockTracker = void 0);
      const u = g(t(40519)),
        d = g(t(86641)),
        o = t(7167),
        i = t(47157),
        s = (0, i.createModuleLogger)(i.projectLogger, "polling-block-tracker"),
        l = (0, u.default)();
      function p(c, n) {
        return new Promise((f) => {
          const v = setTimeout(f, c);
          v.unref && n && v.unref();
        });
      }
      r.PollingBlockTracker = class h extends o.BaseBlockTracker {
        constructor(n = {}) {
          var f;
          if (!n.provider)
            throw new Error("PollingBlockTracker - no provider specified.");
          super({
            blockResetDuration:
              null !== (f = n.blockResetDuration) && void 0 !== f
                ? f
                : n.pollingInterval,
          }),
            (this._provider = n.provider),
            (this._pollingInterval = n.pollingInterval || 2e4),
            (this._retryTimeout = n.retryTimeout || this._pollingInterval / 10),
            (this._keepEventLoopActive =
              void 0 === n.keepEventLoopActive || n.keepEventLoopActive),
            (this._setSkipCacheFlag = n.setSkipCacheFlag || !1);
        }
        checkForLatestBlock() {
          var n = this;
          return e(function* () {
            return yield n._updateLatestBlock(), yield n.getLatestBlock();
          })();
        }
        _start() {
          var n = this;
          return e(function* () {
            n._synchronize();
          })();
        }
        _end() {
          return e(function* () {})();
        }
        _synchronize() {
          var n = this;
          return e(function* () {
            for (var f; n._isRunning; )
              try {
                yield n._updateLatestBlock();
                const v = p(n._pollingInterval, !n._keepEventLoopActive);
                n.emit("_waitingForNextIteration"), yield v;
              } catch (v) {
                const E = new Error(
                  `PollingBlockTracker - encountered an error while attempting to update latest block:\n${
                    null !== (f = v.stack) && void 0 !== f ? f : v
                  }`
                );
                try {
                  n.emit("error", E);
                } catch {
                  console.error(E);
                }
                const w = p(n._retryTimeout, !n._keepEventLoopActive);
                n.emit("_waitingForNextIteration"), yield w;
              }
          })();
        }
        _updateLatestBlock() {
          var n = this;
          return e(function* () {
            const f = yield n._fetchLatestBlock();
            n._newPotentialLatest(f);
          })();
        }
        _fetchLatestBlock() {
          var n = this;
          return e(function* () {
            const f = {
              jsonrpc: "2.0",
              id: l(),
              method: "eth_blockNumber",
              params: [],
            };
            n._setSkipCacheFlag && (f.skipCache = !0), s("Making request", f);
            const v = yield (0, d.default)((E) =>
              n._provider.sendAsync(f, E)
            )();
            if ((s("Got response", v), v.error))
              throw new Error(
                `PollingBlockTracker - encountered error fetching block:\n${v.error.message}`
              );
            return v.result;
          })();
        }
      };
    },
    52271: function (L, r, t) {
      "use strict";
      var e = t(59344).default,
        g =
          (this && this.__importDefault) ||
          function (s) {
            return s && s.__esModule ? s : { default: s };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.SubscribeBlockTracker = void 0);
      const u = g(t(40519)),
        d = t(7167),
        o = (0, u.default)();
      r.SubscribeBlockTracker = class i extends d.BaseBlockTracker {
        constructor(l = {}) {
          if (!l.provider)
            throw new Error("SubscribeBlockTracker - no provider specified.");
          super(l),
            (this._provider = l.provider),
            (this._subscriptionId = null);
        }
        checkForLatestBlock() {
          var l = this;
          return e(function* () {
            return yield l.getLatestBlock();
          })();
        }
        _start() {
          var l = this;
          return e(function* () {
            if (null == l._subscriptionId)
              try {
                const b = yield l._call("eth_blockNumber");
                (l._subscriptionId = yield l._call(
                  "eth_subscribe",
                  "newHeads"
                )),
                  l._provider.on("data", l._handleSubData.bind(l)),
                  l._newPotentialLatest(b);
              } catch (b) {
                l.emit("error", b);
              }
          })();
        }
        _end() {
          var l = this;
          return e(function* () {
            if (null != l._subscriptionId)
              try {
                yield l._call("eth_unsubscribe", l._subscriptionId),
                  (l._subscriptionId = null);
              } catch (b) {
                l.emit("error", b);
              }
          })();
        }
        _call(l, ...b) {
          return new Promise((h, p) => {
            this._provider.sendAsync(
              { id: o(), method: l, params: b, jsonrpc: "2.0" },
              (c, n) => {
                c ? p(c) : h(n.result);
              }
            );
          });
        }
        _handleSubData(l, b) {
          var h;
          "eth_subscription" === b.method &&
            (null === (h = b.params) || void 0 === h
              ? void 0
              : h.subscription) === this._subscriptionId &&
            this._newPotentialLatest(b.params.result.number);
        }
      };
    },
    21496: function (L, r, t) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, d, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(u, i, {
                    enumerable: !0,
                    get: function () {
                      return d[o];
                    },
                  });
              }
            : function (u, d, o, i) {
                void 0 === i && (i = o), (u[i] = d[o]);
              }),
        g =
          (this && this.__exportStar) ||
          function (u, d) {
            for (var o in u)
              "default" !== o &&
                !Object.prototype.hasOwnProperty.call(d, o) &&
                e(d, u, o);
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        g(t(46270), r),
        g(t(52271), r),
        g(t(32772), r);
    },
    47157: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createModuleLogger = r.projectLogger = void 0);
      const e = t(27184);
      Object.defineProperty(r, "createModuleLogger", {
        enumerable: !0,
        get: function () {
          return e.createModuleLogger;
        },
      }),
        (r.projectLogger = (0, e.createProjectLogger)("eth-block-tracker"));
    },
    32772: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 });
    },
    86641: (L) => {
      "use strict";
      const r = (t, e) =>
        function () {
          const g = e.promiseModule,
            u = new Array(arguments.length);
          for (let d = 0; d < arguments.length; d++) u[d] = arguments[d];
          return new g((d, o) => {
            u.push(
              e.errorFirst
                ? function (i, s) {
                    if (e.multiArgs) {
                      const l = new Array(arguments.length - 1);
                      for (let b = 1; b < arguments.length; b++)
                        l[b - 1] = arguments[b];
                      i ? (l.unshift(i), o(l)) : d(l);
                    } else i ? o(i) : d(s);
                  }
                : function (i) {
                    if (e.multiArgs) {
                      const s = new Array(arguments.length - 1);
                      for (let l = 0; l < arguments.length; l++)
                        s[l] = arguments[l];
                      d(s);
                    } else d(i);
                  }
            ),
              t.apply(this, u);
          });
        };
      L.exports = (t, e) => {
        e = Object.assign(
          {
            exclude: [/.+(Sync|Stream)$/],
            errorFirst: !0,
            promiseModule: Promise,
          },
          e
        );
        const g = (d) => {
          const o = (i) => ("string" == typeof i ? d === i : i.test(d));
          return e.include ? e.include.some(o) : !e.exclude.some(o);
        };
        let u;
        u =
          "function" == typeof t
            ? function () {
                return e.excludeMain
                  ? t.apply(this, arguments)
                  : r(t, e).apply(this, arguments);
              }
            : Object.create(Object.getPrototypeOf(t));
        for (const d in t) {
          const o = t[d];
          u[d] = "function" == typeof o && g(d) ? r(o, e) : o;
        }
        return u;
      };
    },
    64224: (L, r, t) => {
      var e = t(59344).default;
      const g = t(40040);
      L.exports = class u extends g {
        constructor() {
          super(), (this.allResults = []);
        }
        update() {
          return e(function* () {
            throw new Error(
              "BaseFilterWithHistory - no update method specified"
            );
          })();
        }
        addResults(o) {
          (this.allResults = this.allResults.concat(o)), super.addResults(o);
        }
        addInitialResults(o) {
          (this.allResults = this.allResults.concat(o)),
            super.addInitialResults(o);
        }
        getAllResults() {
          return this.allResults;
        }
      };
    },
    40040: (L, r, t) => {
      var e = t(59344).default;
      const g = t(91184).default;
      L.exports = class u extends g {
        constructor() {
          super(), (this.updates = []);
        }
        initialize() {
          return e(function* () {})();
        }
        update() {
          return e(function* () {
            throw new Error("BaseFilter - no update method specified");
          })();
        }
        addResults(o) {
          (this.updates = this.updates.concat(o)),
            o.forEach((i) => this.emit("update", i));
        }
        addInitialResults(o) {}
        getChangesAndClear() {
          const o = this.updates;
          return (this.updates = []), o;
        }
      };
    },
    90880: (L, r, t) => {
      var e = t(59344).default;
      const g = t(40040),
        u = t(2341),
        { incrementHexInt: d } = t(71086);
      L.exports = class o extends g {
        constructor({ provider: s }) {
          super(), (this.type = "block"), (this.provider = s);
        }
        update({ oldBlock: s, newBlock: l }) {
          var b = this;
          return e(function* () {
            const h = l,
              p = d(s),
              n = (yield u({
                provider: b.provider,
                fromBlock: p,
                toBlock: h,
              })).map((f) => f.hash);
            b.addResults(n);
          })();
        }
      };
    },
    2341: (L, r, t) => {
      var e = t(59344).default;
      function u() {
        return (
          (u = e(function* ({ provider: h, fromBlock: p, toBlock: c }) {
            p || (p = c);
            const n = d(p),
              v = d(c) - n + 1,
              E = Array(v)
                .fill()
                .map((C, A) => n + A)
                .map(i);
            return yield Promise.all(
              E.map((C) =>
                (function l(h, p, c) {
                  return b.apply(this, arguments);
                })(h, "eth_getBlockByNumber", [C, !1])
              )
            );
          })),
          u.apply(this, arguments)
        );
      }
      function d(h) {
        return null == h ? h : Number.parseInt(h, 16);
      }
      function i(h) {
        return null == h ? h : "0x" + h.toString(16);
      }
      function s(h, p) {
        return new Promise((c, n) => {
          h.sendAsync(p, (f, v) => {
            f
              ? n(f)
              : v.error
              ? n(v.error)
              : v.result
              ? c(v.result)
              : n(new Error("Result was empty"));
          });
        });
      }
      function b() {
        return (b = e(function* (h, p, c) {
          for (let n = 0; n < 3; n++)
            try {
              return yield s(h, {
                id: 1,
                jsonrpc: "2.0",
                method: p,
                params: c,
              });
            } catch (f) {
              console.error(
                `provider.sendAsync failed: ${f.stack || f.message || f}`
              );
            }
          throw new Error(`Block not found for params: ${JSON.stringify(c)}`);
        })).apply(this, arguments);
      }
      L.exports = function g(h) {
        return u.apply(this, arguments);
      };
    },
    71086: (L) => {
      function e(b) {
        return b.sort((h, p) =>
          "latest" === h || "earliest" === p
            ? 1
            : "latest" === p || "earliest" === h
            ? -1
            : d(h) - d(p)
        );
      }
      function d(b) {
        return null == b ? b : Number.parseInt(b, 16);
      }
      function i(b) {
        if (null == b) return b;
        let h = b.toString(16);
        return h.length % 2 && (h = "0" + h), "0x" + h;
      }
      function l() {
        return Math.floor(16 * Math.random()).toString(16);
      }
      L.exports = {
        minBlockRef: function r(...b) {
          return e(b)[0];
        },
        maxBlockRef: function t(...b) {
          const h = e(b);
          return h[h.length - 1];
        },
        sortBlockRefs: e,
        bnToHex: function g(b) {
          return "0x" + b.toString(16);
        },
        blockRefIsNumber: function u(b) {
          return b && !["earliest", "latest", "pending"].includes(b);
        },
        hexToInt: d,
        incrementHexInt: function o(b) {
          return null == b ? b : i(d(b) + 1);
        },
        intToHex: i,
        unsafeRandomBytes: function s(b) {
          let h = "0x";
          for (let p = 0; p < b; p++) (h += l()), (h += l());
          return h;
        },
      };
    },
    66255: (L, r, t) => {
      var e = t(59344).default;
      const g = t(13290).WU,
        { createAsyncMiddleware: u, createScaffoldMiddleware: d } = t(47547),
        o = t(74969),
        i = t(90880),
        s = t(95785),
        { intToHex: l, hexToInt: b } = t(71086);
      function p(v) {
        return c(
          e(function* (...E) {
            const w = yield v(...E);
            return l(w.id);
          })
        );
      }
      function c(v) {
        return u(
          (function () {
            var E = e(function* (w, C) {
              const A = yield v.apply(null, w.params);
              C.result = A;
            });
            return function (w, C) {
              return E.apply(this, arguments);
            };
          })()
        );
      }
      function f(v, E) {
        const w = [];
        for (let C in v) w.push(v[C]);
        return w;
      }
      L.exports = function h({ blockTracker: v, provider: E }) {
        let w = 0,
          C = {};
        const A = new g(),
          S = (function n({ mutex: v }) {
            return (E) =>
              (function () {
                var w = e(function* (C, A, S, M) {
                  (yield v.acquire())(), E(C, A, S, M);
                });
                return function (C, A, S, M) {
                  return w.apply(this, arguments);
                };
              })();
          })({ mutex: A }),
          M = d({
            eth_newFilter: S(p(U)),
            eth_newBlockFilter: S(p(D)),
            eth_newPendingTransactionFilter: S(p(G)),
            eth_uninstallFilter: S(c(I)),
            eth_getFilterChanges: S(c(ue)),
            eth_getFilterLogs: S(c(m)),
          }),
          N = (function () {
            var fe = e(function* ({ oldBlock: be, newBlock: Q }) {
              if (0 === C.length) return;
              const B = yield A.acquire();
              try {
                yield Promise.all(
                  f(C).map(
                    (function () {
                      var V = e(function* (ee) {
                        try {
                          yield ee.update({ oldBlock: be, newBlock: Q });
                        } catch (oe) {
                          console.error(oe);
                        }
                      });
                      return function (ee) {
                        return V.apply(this, arguments);
                      };
                    })()
                  )
                );
              } catch (V) {
                console.error(V);
              }
              B();
            });
            return function (Q) {
              return fe.apply(this, arguments);
            };
          })();
        return (
          (M.newLogFilter = U),
          (M.newBlockFilter = D),
          (M.newPendingTransactionFilter = G),
          (M.uninstallFilter = I),
          (M.getFilterChanges = ue),
          (M.getFilterLogs = m),
          (M.destroy = () => {
            !(function x() {
              z.apply(this, arguments);
            })();
          }),
          M
        );
        function U(fe) {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = e(function* (fe) {
            const be = new o({ provider: E, params: fe });
            return yield T(be), be;
          })).apply(this, arguments);
        }
        function D() {
          return K.apply(this, arguments);
        }
        function K() {
          return (K = e(function* () {
            const fe = new i({ provider: E });
            return yield T(fe), fe;
          })).apply(this, arguments);
        }
        function G() {
          return re.apply(this, arguments);
        }
        function re() {
          return (re = e(function* () {
            const fe = new s({ provider: E });
            return yield T(fe), fe;
          })).apply(this, arguments);
        }
        function ue(fe) {
          return P.apply(this, arguments);
        }
        function P() {
          return (P = e(function* (fe) {
            const be = b(fe),
              Q = C[be];
            if (!Q) throw new Error(`No filter for index "${be}"`);
            return Q.getChangesAndClear();
          })).apply(this, arguments);
        }
        function m(fe) {
          return _.apply(this, arguments);
        }
        function _() {
          return (_ = e(function* (fe) {
            const be = b(fe),
              Q = C[be];
            if (!Q) throw new Error(`No filter for index "${be}"`);
            let B = [];
            return "log" === Q.type && (B = Q.getAllResults()), B;
          })).apply(this, arguments);
        }
        function I(fe) {
          return R.apply(this, arguments);
        }
        function R() {
          return (
            (R = e(function* (fe) {
              const be = b(fe),
                B = !!C[be];
              return (
                B &&
                  (yield (function J(fe) {
                    return $.apply(this, arguments);
                  })(be)),
                B
              );
            })),
            R.apply(this, arguments)
          );
        }
        function T(fe) {
          return F.apply(this, arguments);
        }
        function F() {
          return (F = e(function* (fe) {
            const be = f(C).length,
              Q = yield v.getLatestBlock();
            return (
              yield fe.initialize({ currentBlock: Q }),
              w++,
              (C[w] = fe),
              (fe.id = w),
              (fe.idHex = l(w)),
              de({ prevFilterCount: be, newFilterCount: f(C).length }),
              w
            );
          })).apply(this, arguments);
        }
        function $() {
          return ($ = e(function* (fe) {
            const be = f(C).length;
            delete C[fe],
              de({ prevFilterCount: be, newFilterCount: f(C).length });
          })).apply(this, arguments);
        }
        function z() {
          return (z = e(function* () {
            const fe = f(C).length;
            (C = {}), de({ prevFilterCount: fe, newFilterCount: 0 });
          })).apply(this, arguments);
        }
        function de({ prevFilterCount: fe, newFilterCount: be }) {
          0 === fe && be > 0
            ? v.on("sync", N)
            : fe > 0 && 0 === be && v.removeListener("sync", N);
        }
      };
    },
    74969: (L, r, t) => {
      var e = t(59344).default;
      const g = t(14431),
        u = t(99998),
        d = t(64224),
        {
          hexToInt: i,
          incrementHexInt: s,
          minBlockRef: l,
          blockRefIsNumber: b,
        } = t(71086);
      L.exports = class h extends d {
        constructor({ provider: c, params: n }) {
          super(),
            (this.type = "log"),
            (this.ethQuery = new g(c)),
            (this.params = Object.assign(
              {
                fromBlock: "latest",
                toBlock: "latest",
                address: void 0,
                topics: [],
              },
              n
            )),
            this.params.address &&
              (Array.isArray(this.params.address) ||
                (this.params.address = [this.params.address]),
              (this.params.address = this.params.address.map((f) =>
                f.toLowerCase()
              )));
        }
        initialize({ currentBlock: c }) {
          var n = this;
          return e(function* () {
            let f = n.params.fromBlock;
            ["latest", "pending"].includes(f) && (f = c),
              "earliest" === f && (f = "0x0"),
              (n.params.fromBlock = f);
            const v = l(n.params.toBlock, c),
              E = Object.assign({}, n.params, { toBlock: v }),
              w = yield n._fetchLogs(E);
            n.addInitialResults(w);
          })();
        }
        update({ oldBlock: c, newBlock: n }) {
          var f = this;
          return e(function* () {
            const v = n;
            let E;
            E = c ? s(c) : n;
            const w = Object.assign({}, f.params, { fromBlock: E, toBlock: v }),
              A = (yield f._fetchLogs(w)).filter((S) => f.matchLog(S));
            f.addResults(A);
          })();
        }
        _fetchLogs(c) {
          var n = this;
          return e(function* () {
            return yield u((v) => n.ethQuery.getLogs(c, v))();
          })();
        }
        matchLog(c) {
          if (
            i(this.params.fromBlock) >= i(c.blockNumber) ||
            (b(this.params.toBlock) &&
              i(this.params.toBlock) <= i(c.blockNumber))
          )
            return !1;
          const n = c.address && c.address.toLowerCase();
          return (
            !(this.params.address && n && !this.params.address.includes(n)) &&
            this.params.topics.every((v, E) => {
              let w = c.topics[E];
              if (!w) return !1;
              w = w.toLowerCase();
              let C = Array.isArray(v) ? v : [v];
              return (
                !!C.includes(null) ||
                ((C = C.map((M) => M.toLowerCase())), C.includes(w))
              );
            })
          );
        }
      };
    },
    99998: (L) => {
      "use strict";
      const r = (e, g, u, d) =>
          function (...o) {
            return new (0, g.promiseModule)((s, l) => {
              o.push(
                g.multiArgs
                  ? (...h) => {
                      g.errorFirst ? (h[0] ? l(h) : (h.shift(), s(h))) : s(h);
                    }
                  : g.errorFirst
                  ? (h, p) => {
                      h ? l(h) : s(p);
                    }
                  : s
              ),
                Reflect.apply(e, this === u ? d : this, o);
            });
          },
        t = new WeakMap();
      L.exports = (e, g) => {
        g = {
          exclude: [/.+(?:Sync|Stream)$/],
          errorFirst: !0,
          promiseModule: Promise,
          ...g,
        };
        const u = typeof e;
        if (null === e || ("object" !== u && "function" !== u))
          throw new TypeError(
            `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
              null === e ? "null" : u
            }\``
          );
        const o = new WeakMap(),
          i = new Proxy(e, {
            apply(s, l, b) {
              const h = o.get(s);
              if (h) return Reflect.apply(h, l, b);
              const p = g.excludeMain ? s : r(s, g, i, s);
              return o.set(s, p), Reflect.apply(p, l, b);
            },
            get(s, l) {
              const b = s[l];
              if (
                !((s, l) => {
                  let b = t.get(s);
                  if ((b || ((b = {}), t.set(s, b)), l in b)) return b[l];
                  const h = (v) =>
                      "string" == typeof v || "symbol" == typeof l
                        ? l === v
                        : v.test(l),
                    p = Reflect.getOwnPropertyDescriptor(s, l),
                    c = void 0 === p || p.writable || p.configurable,
                    f =
                      (g.include ? g.include.some(h) : !g.exclude.some(h)) && c;
                  return (b[l] = f), f;
                })(s, l) ||
                b === Function.prototype[l]
              )
                return b;
              const h = o.get(b);
              if (h) return h;
              if ("function" == typeof b) {
                const p = r(b, g, i, s);
                return o.set(b, p), p;
              }
              return b;
            },
          });
        return i;
      };
    },
    34035: (L, r, t) => {
      var e = t(59344).default;
      const g = t(91184).default,
        { createAsyncMiddleware: u, createScaffoldMiddleware: d } = t(47547),
        o = t(66255),
        { unsafeRandomBytes: i, incrementHexInt: s } = t(71086),
        l = t(2341);
      function h(p) {
        return null == p
          ? null
          : {
              hash: p.hash,
              parentHash: p.parentHash,
              sha3Uncles: p.sha3Uncles,
              miner: p.miner,
              stateRoot: p.stateRoot,
              transactionsRoot: p.transactionsRoot,
              receiptsRoot: p.receiptsRoot,
              logsBloom: p.logsBloom,
              difficulty: p.difficulty,
              number: p.number,
              gasLimit: p.gasLimit,
              gasUsed: p.gasUsed,
              nonce: p.nonce,
              mixHash: p.mixHash,
              timestamp: p.timestamp,
              extraData: p.extraData,
            };
      }
      L.exports = function b({ blockTracker: p, provider: c }) {
        const n = {},
          f = o({ blockTracker: p, provider: c });
        let v = !1;
        const E = new g(),
          w = d({
            eth_subscribe: u(function C(O, D) {
              return A.apply(this, arguments);
            }),
            eth_unsubscribe: u(function S(O, D) {
              return M.apply(this, arguments);
            }),
          });
        return (
          (w.destroy = function U() {
            E.removeAllListeners();
            for (const O in n) n[O].destroy(), delete n[O];
            v = !0;
          }),
          { events: E, middleware: w }
        );
        function A() {
          return (
            (A = e(function* (O, D) {
              if (v)
                throw new Error(
                  "SubscriptionManager - attempting to use after destroying"
                );
              const K = O.params[0],
                G = i(16);
              let re;
              switch (K) {
                case "newHeads":
                  re = (function ue({ subId: m }) {
                    const _ = {
                      type: K,
                      destroy:
                        ((I = e(function* () {
                          p.removeListener("sync", _.update);
                        })),
                        function () {
                          return I.apply(this, arguments);
                        }),
                      update: (function () {
                        var I = e(function* ({ oldBlock: R, newBlock: T }) {
                          const F = T,
                            J = s(R);
                          (yield l({ provider: c, fromBlock: J, toBlock: F }))
                            .map(h)
                            .filter((z) => null !== z)
                            .forEach((z) => {
                              N(m, z);
                            });
                        });
                        return function (T) {
                          return I.apply(this, arguments);
                        };
                      })(),
                    };
                    var I;
                    return p.on("sync", _.update), _;
                  })({ subId: G });
                  break;
                case "logs":
                  const m = O.params[1];
                  re = (function P({ subId: m, filter: _ }) {
                    return (
                      _.on("update", (R) => N(m, R)),
                      {
                        type: K,
                        destroy:
                          ((R = e(function* () {
                            return yield f.uninstallFilter(_.idHex);
                          })),
                          function () {
                            return R.apply(this, arguments);
                          }),
                      }
                    );
                    var R;
                  })({ subId: G, filter: yield f.newLogFilter(m) });
                  break;
                default:
                  throw new Error(
                    `SubscriptionManager - unsupported subscription type "${K}"`
                  );
              }
              return (n[G] = re), void (D.result = G);
            })),
            A.apply(this, arguments)
          );
        }
        function M() {
          return (M = e(function* (O, D) {
            if (v)
              throw new Error(
                "SubscriptionManager - attempting to use after destroying"
              );
            const K = O.params[0],
              G = n[K];
            G
              ? (delete n[K], yield G.destroy(), (D.result = !0))
              : (D.result = !1);
          })).apply(this, arguments);
        }
        function N(O, D) {
          E.emit("notification", {
            jsonrpc: "2.0",
            method: "eth_subscription",
            params: { subscription: O, result: D },
          });
        }
      };
    },
    95785: (L, r, t) => {
      var e = t(59344).default;
      const g = t(40040),
        u = t(2341),
        { incrementHexInt: d } = t(71086);
      L.exports = class o extends g {
        constructor({ provider: s }) {
          super(), (this.type = "tx"), (this.provider = s);
        }
        update({ oldBlock: s }) {
          var l = this;
          return e(function* () {
            const b = s,
              h = d(s),
              p = yield u({ provider: l.provider, fromBlock: h, toBlock: b }),
              c = [];
            for (const n of p) c.push(...n.transactions);
            l.addResults(c);
          })();
        }
      };
    },
    14431: (L, r, t) => {
      const e = t(20498),
        g = t(40519)();
      function u(s) {
        this.currentProvider = s;
      }
      function d(s) {
        return function () {
          var b = [].slice.call(arguments),
            h = b.pop();
          this.sendAsync({ method: s, params: b }, h);
        };
      }
      function o(s, l) {
        return function () {
          var h = [].slice.call(arguments),
            p = h.pop();
          h.length < s && h.push("latest"),
            this.sendAsync({ method: l, params: h }, p);
        };
      }
      (L.exports = u),
        (u.prototype.getBalance = o(2, "eth_getBalance")),
        (u.prototype.getCode = o(2, "eth_getCode")),
        (u.prototype.getTransactionCount = o(2, "eth_getTransactionCount")),
        (u.prototype.getStorageAt = o(3, "eth_getStorageAt")),
        (u.prototype.call = o(2, "eth_call")),
        (u.prototype.protocolVersion = d("eth_protocolVersion")),
        (u.prototype.syncing = d("eth_syncing")),
        (u.prototype.coinbase = d("eth_coinbase")),
        (u.prototype.mining = d("eth_mining")),
        (u.prototype.hashrate = d("eth_hashrate")),
        (u.prototype.gasPrice = d("eth_gasPrice")),
        (u.prototype.accounts = d("eth_accounts")),
        (u.prototype.blockNumber = d("eth_blockNumber")),
        (u.prototype.getBlockTransactionCountByHash = d(
          "eth_getBlockTransactionCountByHash"
        )),
        (u.prototype.getBlockTransactionCountByNumber = d(
          "eth_getBlockTransactionCountByNumber"
        )),
        (u.prototype.getUncleCountByBlockHash = d(
          "eth_getUncleCountByBlockHash"
        )),
        (u.prototype.getUncleCountByBlockNumber = d(
          "eth_getUncleCountByBlockNumber"
        )),
        (u.prototype.sign = d("eth_sign")),
        (u.prototype.sendTransaction = d("eth_sendTransaction")),
        (u.prototype.sendRawTransaction = d("eth_sendRawTransaction")),
        (u.prototype.estimateGas = d("eth_estimateGas")),
        (u.prototype.getBlockByHash = d("eth_getBlockByHash")),
        (u.prototype.getBlockByNumber = d("eth_getBlockByNumber")),
        (u.prototype.getTransactionByHash = d("eth_getTransactionByHash")),
        (u.prototype.getTransactionByBlockHashAndIndex = d(
          "eth_getTransactionByBlockHashAndIndex"
        )),
        (u.prototype.getTransactionByBlockNumberAndIndex = d(
          "eth_getTransactionByBlockNumberAndIndex"
        )),
        (u.prototype.getTransactionReceipt = d("eth_getTransactionReceipt")),
        (u.prototype.getUncleByBlockHashAndIndex = d(
          "eth_getUncleByBlockHashAndIndex"
        )),
        (u.prototype.getUncleByBlockNumberAndIndex = d(
          "eth_getUncleByBlockNumberAndIndex"
        )),
        (u.prototype.getCompilers = d("eth_getCompilers")),
        (u.prototype.compileLLL = d("eth_compileLLL")),
        (u.prototype.compileSolidity = d("eth_compileSolidity")),
        (u.prototype.compileSerpent = d("eth_compileSerpent")),
        (u.prototype.newFilter = d("eth_newFilter")),
        (u.prototype.newBlockFilter = d("eth_newBlockFilter")),
        (u.prototype.newPendingTransactionFilter = d(
          "eth_newPendingTransactionFilter"
        )),
        (u.prototype.uninstallFilter = d("eth_uninstallFilter")),
        (u.prototype.getFilterChanges = d("eth_getFilterChanges")),
        (u.prototype.getFilterLogs = d("eth_getFilterLogs")),
        (u.prototype.getLogs = d("eth_getLogs")),
        (u.prototype.getWork = d("eth_getWork")),
        (u.prototype.submitWork = d("eth_submitWork")),
        (u.prototype.submitHashrate = d("eth_submitHashrate")),
        (u.prototype.sendAsync = function (s, l) {
          this.currentProvider.sendAsync(
            (function i(s) {
              return e({ id: g(), jsonrpc: "2.0", params: [] }, s);
            })(s),
            function (h, p) {
              if (
                (!h &&
                  p.error &&
                  (h = new Error("EthQuery - RPC Error - " + p.error.message)),
                h)
              )
                return l(h);
              l(null, p.result);
            }
          );
        });
    },
    10117: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EthereumProviderError = r.EthereumRpcError = void 0);
      const e = t(38701);
      class g extends Error {
        constructor(s, l, b) {
          if (!Number.isInteger(s))
            throw new Error('"code" must be an integer.');
          if (!l || "string" != typeof l)
            throw new Error('"message" must be a nonempty string.');
          super(l), (this.code = s), void 0 !== b && (this.data = b);
        }
        serialize() {
          const s = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (s.data = this.data),
            this.stack && (s.stack = this.stack),
            s
          );
        }
        toString() {
          return e.default(this.serialize(), o, 2);
        }
      }
      function o(i, s) {
        if ("[Circular]" !== s) return s;
      }
      (r.EthereumRpcError = g),
        (r.EthereumProviderError = class u extends g {
          constructor(s, l, b) {
            if (
              !(function d(i) {
                return Number.isInteger(i) && i >= 1e3 && i <= 4999;
              })(s)
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(s, l, b);
          }
        });
    },
    53661: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.errorValues = r.errorCodes = void 0),
        (r.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (r.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    27296: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ethErrors = void 0);
      const e = t(10117),
        g = t(65114),
        u = t(53661);
      function d(s, l) {
        const [b, h] = i(l);
        return new e.EthereumRpcError(s, b || g.getMessageFromCode(s), h);
      }
      function o(s, l) {
        const [b, h] = i(l);
        return new e.EthereumProviderError(s, b || g.getMessageFromCode(s), h);
      }
      function i(s) {
        if (s) {
          if ("string" == typeof s) return [s];
          if ("object" == typeof s && !Array.isArray(s)) {
            const { message: l, data: b } = s;
            if (l && "string" != typeof l)
              throw new Error("Must specify string message.");
            return [l || void 0, b];
          }
        }
        return [];
      }
      r.ethErrors = {
        rpc: {
          parse: (s) => d(u.errorCodes.rpc.parse, s),
          invalidRequest: (s) => d(u.errorCodes.rpc.invalidRequest, s),
          invalidParams: (s) => d(u.errorCodes.rpc.invalidParams, s),
          methodNotFound: (s) => d(u.errorCodes.rpc.methodNotFound, s),
          internal: (s) => d(u.errorCodes.rpc.internal, s),
          server: (s) => {
            if (!s || "object" != typeof s || Array.isArray(s))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            const { code: l } = s;
            if (!Number.isInteger(l) || l > -32005 || l < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return d(l, s);
          },
          invalidInput: (s) => d(u.errorCodes.rpc.invalidInput, s),
          resourceNotFound: (s) => d(u.errorCodes.rpc.resourceNotFound, s),
          resourceUnavailable: (s) =>
            d(u.errorCodes.rpc.resourceUnavailable, s),
          transactionRejected: (s) =>
            d(u.errorCodes.rpc.transactionRejected, s),
          methodNotSupported: (s) => d(u.errorCodes.rpc.methodNotSupported, s),
          limitExceeded: (s) => d(u.errorCodes.rpc.limitExceeded, s),
        },
        provider: {
          userRejectedRequest: (s) =>
            o(u.errorCodes.provider.userRejectedRequest, s),
          unauthorized: (s) => o(u.errorCodes.provider.unauthorized, s),
          unsupportedMethod: (s) =>
            o(u.errorCodes.provider.unsupportedMethod, s),
          disconnected: (s) => o(u.errorCodes.provider.disconnected, s),
          chainDisconnected: (s) =>
            o(u.errorCodes.provider.chainDisconnected, s),
          custom: (s) => {
            if (!s || "object" != typeof s || Array.isArray(s))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            const { code: l, message: b, data: h } = s;
            if (!b || "string" != typeof b)
              throw new Error('"message" must be a nonempty string');
            return new e.EthereumProviderError(l, b, h);
          },
        },
      };
    },
    90664: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getMessageFromCode =
          r.serializeError =
          r.EthereumProviderError =
          r.EthereumRpcError =
          r.ethErrors =
          r.errorCodes =
            void 0);
      const e = t(10117);
      Object.defineProperty(r, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return e.EthereumRpcError;
        },
      }),
        Object.defineProperty(r, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return e.EthereumProviderError;
          },
        });
      const g = t(65114);
      Object.defineProperty(r, "serializeError", {
        enumerable: !0,
        get: function () {
          return g.serializeError;
        },
      }),
        Object.defineProperty(r, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return g.getMessageFromCode;
          },
        });
      const u = t(27296);
      Object.defineProperty(r, "ethErrors", {
        enumerable: !0,
        get: function () {
          return u.ethErrors;
        },
      });
      const d = t(53661);
      Object.defineProperty(r, "errorCodes", {
        enumerable: !0,
        get: function () {
          return d.errorCodes;
        },
      });
    },
    65114: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.serializeError =
          r.isValidCode =
          r.getMessageFromCode =
          r.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const e = t(53661),
        g = t(10117),
        u = e.errorCodes.rpc.internal,
        o = { code: u, message: i(u) };
      function i(
        c,
        n = "Unspecified error message. This is a bug, please report it."
      ) {
        if (Number.isInteger(c)) {
          const f = c.toString();
          if (p(e.errorValues, f)) return e.errorValues[f].message;
          if (b(c)) return r.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function s(c) {
        if (!Number.isInteger(c)) return !1;
        const n = c.toString();
        return !(!e.errorValues[n] && !b(c));
      }
      function b(c) {
        return c >= -32099 && c <= -32e3;
      }
      function h(c) {
        return c && "object" == typeof c && !Array.isArray(c)
          ? Object.assign({}, c)
          : c;
      }
      function p(c, n) {
        return Object.prototype.hasOwnProperty.call(c, n);
      }
      (r.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (r.getMessageFromCode = i),
        (r.isValidCode = s),
        (r.serializeError = function l(
          c,
          { fallbackError: n = o, shouldIncludeStack: f = !1 } = {}
        ) {
          var v, E;
          if (!n || !Number.isInteger(n.code) || "string" != typeof n.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (c instanceof g.EthereumRpcError) return c.serialize();
          const w = {};
          if (
            c &&
            "object" == typeof c &&
            !Array.isArray(c) &&
            p(c, "code") &&
            s(c.code)
          ) {
            const A = c;
            (w.code = A.code),
              A.message && "string" == typeof A.message
                ? ((w.message = A.message), p(A, "data") && (w.data = A.data))
                : ((w.message = i(w.code)), (w.data = { originalError: h(c) }));
          } else {
            w.code = n.code;
            const A = null === (v = c) || void 0 === v ? void 0 : v.message;
            (w.message = A && "string" == typeof A ? A : n.message),
              (w.data = { originalError: h(c) });
          }
          const C = null === (E = c) || void 0 === E ? void 0 : E.stack;
          return f && c && C && "string" == typeof C && (w.stack = C), w;
        });
    },
    38701: (L) => {
      (L.exports = d), (d.default = d), (d.stable = l), (d.stableStringify = l);
      var r = "[...]",
        t = "[Circular]",
        e = [],
        g = [];
      function u() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER,
        };
      }
      function d(p, c, n, f) {
        var v;
        typeof f > "u" && (f = u()), i(p, "", 0, [], void 0, 0, f);
        try {
          v =
            0 === g.length
              ? JSON.stringify(p, c, n)
              : JSON.stringify(p, h(c), n);
        } catch {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var E = e.pop();
            4 === E.length
              ? Object.defineProperty(E[0], E[1], E[3])
              : (E[0][E[1]] = E[2]);
          }
        }
        return v;
      }
      function o(p, c, n, f) {
        var v = Object.getOwnPropertyDescriptor(f, n);
        void 0 !== v.get
          ? v.configurable
            ? (Object.defineProperty(f, n, { value: p }), e.push([f, n, c, v]))
            : g.push([c, n, p])
          : ((f[n] = p), e.push([f, n, c]));
      }
      function i(p, c, n, f, v, E, w) {
        var C;
        if (((E += 1), "object" == typeof p && null !== p)) {
          for (C = 0; C < f.length; C++)
            if (f[C] === p) return void o(t, p, c, v);
          if (typeof w.depthLimit < "u" && E > w.depthLimit)
            return void o(r, p, c, v);
          if (typeof w.edgesLimit < "u" && n + 1 > w.edgesLimit)
            return void o(r, p, c, v);
          if ((f.push(p), Array.isArray(p)))
            for (C = 0; C < p.length; C++) i(p[C], C, C, f, p, E, w);
          else {
            var A = Object.keys(p);
            for (C = 0; C < A.length; C++) {
              var S = A[C];
              i(p[S], S, C, f, p, E, w);
            }
          }
          f.pop();
        }
      }
      function s(p, c) {
        return p < c ? -1 : p > c ? 1 : 0;
      }
      function l(p, c, n, f) {
        typeof f > "u" && (f = u());
        var E,
          v = b(p, "", 0, [], void 0, 0, f) || p;
        try {
          E =
            0 === g.length
              ? JSON.stringify(v, c, n)
              : JSON.stringify(v, h(c), n);
        } catch {
          return JSON.stringify(
            "[unable to serialize, circular reference is too complex to analyze]"
          );
        } finally {
          for (; 0 !== e.length; ) {
            var w = e.pop();
            4 === w.length
              ? Object.defineProperty(w[0], w[1], w[3])
              : (w[0][w[1]] = w[2]);
          }
        }
        return E;
      }
      function b(p, c, n, f, v, E, w) {
        var C;
        if (((E += 1), "object" == typeof p && null !== p)) {
          for (C = 0; C < f.length; C++)
            if (f[C] === p) return void o(t, p, c, v);
          try {
            if ("function" == typeof p.toJSON) return;
          } catch {
            return;
          }
          if (typeof w.depthLimit < "u" && E > w.depthLimit)
            return void o(r, p, c, v);
          if (typeof w.edgesLimit < "u" && n + 1 > w.edgesLimit)
            return void o(r, p, c, v);
          if ((f.push(p), Array.isArray(p)))
            for (C = 0; C < p.length; C++) b(p[C], C, C, f, p, E, w);
          else {
            var A = {},
              S = Object.keys(p).sort(s);
            for (C = 0; C < S.length; C++) {
              var M = S[C];
              b(p[M], M, C, f, p, E, w), (A[M] = p[M]);
            }
            if (!(typeof v < "u")) return A;
            e.push([v, c, p]), (v[c] = A);
          }
          f.pop();
        }
      }
      function h(p) {
        return (
          (p =
            typeof p < "u"
              ? p
              : function (c, n) {
                  return n;
                }),
          function (c, n) {
            if (g.length > 0)
              for (var f = 0; f < g.length; f++) {
                var v = g[f];
                if (v[1] === c && v[0] === n) {
                  (n = v[2]), g.splice(f, 1);
                  break;
                }
              }
            return p.call(this, c, n);
          }
        );
      }
    },
    80238: (L) => {
      "use strict";
      var t = Array.prototype.slice,
        e = Object.prototype.toString;
      L.exports = function (d) {
        var o = this;
        if ("function" != typeof o || "[object Function]" !== e.call(o))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + o
          );
        for (
          var s,
            i = t.call(arguments, 1),
            b = Math.max(0, o.length - i.length),
            h = [],
            p = 0;
          p < b;
          p++
        )
          h.push("$" + p);
        if (
          ((s = Function(
            "binder",
            "return function (" +
              h.join(",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof s) {
              var n = o.apply(this, i.concat(t.call(arguments)));
              return Object(n) === n ? n : this;
            }
            return o.apply(d, i.concat(t.call(arguments)));
          })),
          o.prototype)
        ) {
          var c = function () {};
          (c.prototype = o.prototype),
            (s.prototype = new c()),
            (c.prototype = null);
        }
        return s;
      };
    },
    45333: (L, r, t) => {
      "use strict";
      var e = t(80238);
      L.exports = Function.prototype.bind || e;
    },
    90491: (L, r, t) => {
      "use strict";
      var e,
        g = SyntaxError,
        u = Function,
        d = TypeError,
        o = function (ue) {
          try {
            return u('"use strict"; return (' + ue + ").constructor;")();
          } catch {}
        },
        i = Object.getOwnPropertyDescriptor;
      if (i)
        try {
          i({}, "");
        } catch {
          i = null;
        }
      var s = function () {
          throw new d();
        },
        l = i
          ? (function () {
              try {
                return s;
              } catch {
                try {
                  return i(arguments, "callee").get;
                } catch {
                  return s;
                }
              }
            })()
          : s,
        b = t(76152)(),
        h = t(39028)(),
        p =
          Object.getPrototypeOf ||
          (h
            ? function (ue) {
                return ue.__proto__;
              }
            : null),
        c = {},
        n = typeof Uint8Array > "u" || !p ? e : p(Uint8Array),
        f = {
          "%AggregateError%": typeof AggregateError > "u" ? e : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? e : ArrayBuffer,
          "%ArrayIteratorPrototype%": b && p ? p([][Symbol.iterator]()) : e,
          "%AsyncFromSyncIteratorPrototype%": e,
          "%AsyncFunction%": c,
          "%AsyncGenerator%": c,
          "%AsyncGeneratorFunction%": c,
          "%AsyncIteratorPrototype%": c,
          "%Atomics%": typeof Atomics > "u" ? e : Atomics,
          "%BigInt%": typeof BigInt > "u" ? e : BigInt,
          "%BigInt64Array%": typeof BigInt64Array > "u" ? e : BigInt64Array,
          "%BigUint64Array%": typeof BigUint64Array > "u" ? e : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? e : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? e : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? e : Float64Array,
          "%FinalizationRegistry%":
            typeof FinalizationRegistry > "u" ? e : FinalizationRegistry,
          "%Function%": u,
          "%GeneratorFunction%": c,
          "%Int8Array%": typeof Int8Array > "u" ? e : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? e : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? e : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": b && p ? p(p([][Symbol.iterator]())) : e,
          "%JSON%": "object" == typeof JSON ? JSON : e,
          "%Map%": typeof Map > "u" ? e : Map,
          "%MapIteratorPrototype%":
            typeof Map > "u" || !b || !p ? e : p(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? e : Promise,
          "%Proxy%": typeof Proxy > "u" ? e : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? e : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? e : Set,
          "%SetIteratorPrototype%":
            typeof Set > "u" || !b || !p ? e : p(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%":
            typeof SharedArrayBuffer > "u" ? e : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": b && p ? p(""[Symbol.iterator]()) : e,
          "%Symbol%": b ? Symbol : e,
          "%SyntaxError%": g,
          "%ThrowTypeError%": l,
          "%TypedArray%": n,
          "%TypeError%": d,
          "%Uint8Array%": typeof Uint8Array > "u" ? e : Uint8Array,
          "%Uint8ClampedArray%":
            typeof Uint8ClampedArray > "u" ? e : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? e : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? e : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? e : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? e : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? e : WeakSet,
        };
      if (p)
        try {
          null.error;
        } catch (ue) {
          var v = p(p(ue));
          f["%Error.prototype%"] = v;
        }
      var E = function ue(P) {
          var m;
          if ("%AsyncFunction%" === P) m = o("async function () {}");
          else if ("%GeneratorFunction%" === P) m = o("function* () {}");
          else if ("%AsyncGeneratorFunction%" === P)
            m = o("async function* () {}");
          else if ("%AsyncGenerator%" === P) {
            var _ = ue("%AsyncGeneratorFunction%");
            _ && (m = _.prototype);
          } else if ("%AsyncIteratorPrototype%" === P) {
            var I = ue("%AsyncGenerator%");
            I && p && (m = p(I.prototype));
          }
          return (f[P] = m), m;
        },
        w = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        C = t(45333),
        A = t(68533),
        S = C.call(Function.call, Array.prototype.concat),
        M = C.call(Function.apply, Array.prototype.splice),
        N = C.call(Function.call, String.prototype.replace),
        U = C.call(Function.call, String.prototype.slice),
        O = C.call(Function.call, RegExp.prototype.exec),
        D =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        K = /\\(\\)?/g,
        re = function (P, m) {
          var I,
            _ = P;
          if ((A(w, _) && (_ = "%" + (I = w[_])[0] + "%"), A(f, _))) {
            var R = f[_];
            if ((R === c && (R = E(_)), typeof R > "u" && !m))
              throw new d(
                "intrinsic " +
                  P +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: I, name: _, value: R };
          }
          throw new g("intrinsic " + P + " does not exist!");
        };
      L.exports = function (P, m) {
        if ("string" != typeof P || 0 === P.length)
          throw new d("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof m)
          throw new d('"allowMissing" argument must be a boolean');
        if (null === O(/^%?[^%]*%?$/, P))
          throw new g(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var _ = (function (P) {
            var m = U(P, 0, 1),
              _ = U(P, -1);
            if ("%" === m && "%" !== _)
              throw new g("invalid intrinsic syntax, expected closing `%`");
            if ("%" === _ && "%" !== m)
              throw new g("invalid intrinsic syntax, expected opening `%`");
            var I = [];
            return (
              N(P, D, function (R, T, F, J) {
                I[I.length] = F ? N(J, K, "$1") : T || R;
              }),
              I
            );
          })(P),
          I = _.length > 0 ? _[0] : "",
          R = re("%" + I + "%", m),
          T = R.name,
          F = R.value,
          J = !1,
          $ = R.alias;
        $ && ((I = $[0]), M(_, S([0, 1], $)));
        for (var x = 1, z = !0; x < _.length; x += 1) {
          var de = _[x],
            fe = U(de, 0, 1),
            be = U(de, -1);
          if (
            ('"' === fe ||
              "'" === fe ||
              "`" === fe ||
              '"' === be ||
              "'" === be ||
              "`" === be) &&
            fe !== be
          )
            throw new g("property names with quotes must have matching quotes");
          if (
            (("constructor" === de || !z) && (J = !0),
            A(f, (T = "%" + (I += "." + de) + "%")))
          )
            F = f[T];
          else if (null != F) {
            if (!(de in F)) {
              if (!m)
                throw new d(
                  "base intrinsic for " +
                    P +
                    " exists, but the property is not available."
                );
              return;
            }
            if (i && x + 1 >= _.length) {
              var Q = i(F, de);
              F =
                (z = !!Q) && "get" in Q && !("originalValue" in Q.get)
                  ? Q.get
                  : F[de];
            } else (z = A(F, de)), (F = F[de]);
            z && !J && (f[T] = F);
          }
        }
        return F;
      };
    },
    39028: (L) => {
      "use strict";
      var r = { foo: {} },
        t = Object;
      L.exports = function () {
        return (
          { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof t)
        );
      };
    },
    76152: (L, r, t) => {
      "use strict";
      var e = typeof Symbol < "u" && Symbol,
        g = t(65441);
      L.exports = function () {
        return (
          "function" == typeof e &&
          "function" == typeof Symbol &&
          "symbol" == typeof e("foo") &&
          "symbol" == typeof Symbol("bar") &&
          g()
        );
      };
    },
    65441: (L) => {
      "use strict";
      L.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          g = Object(e);
        if (
          "string" == typeof e ||
          "[object Symbol]" !== Object.prototype.toString.call(e) ||
          "[object Symbol]" !== Object.prototype.toString.call(g)
        )
          return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(t).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length)
        )
          return !1;
        var d = Object.getOwnPropertySymbols(t);
        if (
          1 !== d.length ||
          d[0] !== e ||
          !Object.prototype.propertyIsEnumerable.call(t, e)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    68533: (L, r, t) => {
      "use strict";
      var e = t(45333);
      L.exports = e.call(Function.call, Object.prototype.hasOwnProperty);
    },
    66698: (L) => {
      L.exports =
        "function" == typeof Object.create
          ? function (t, e) {
              e &&
                ((t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            }
          : function (t, e) {
              if (e) {
                t.super_ = e;
                var g = function () {};
                (g.prototype = e.prototype),
                  (t.prototype = new g()),
                  (t.prototype.constructor = t);
              }
            };
    },
    15887: function (L, r, t) {
      "use strict";
      var e = t(59344).default,
        g =
          (this && this.__importDefault) ||
          function (s) {
            return s && s.__esModule ? s : { default: s };
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.JsonRpcEngine = void 0);
      const u = g(t(91184)),
        d = t(33897);
      class o extends u.default {
        constructor() {
          super(), (this._middleware = []);
        }
        push(l) {
          this._middleware.push(l);
        }
        handle(l, b) {
          if (b && "function" != typeof b)
            throw new Error('"callback" must be a function if provided.');
          return Array.isArray(l)
            ? b
              ? this._handleBatch(l, b)
              : this._handleBatch(l)
            : b
            ? this._handle(l, b)
            : this._promiseHandle(l);
        }
        asMiddleware() {
          var l = this;
          return (function () {
            var b = e(function* (h, p, c, n) {
              try {
                const [f, v, E] = yield o._runAllMiddleware(
                  h,
                  p,
                  l._middleware
                );
                return v
                  ? (yield o._runReturnHandlers(E), n(f))
                  : c(
                      (function () {
                        var w = e(function* (C) {
                          try {
                            yield o._runReturnHandlers(E);
                          } catch (A) {
                            return C(A);
                          }
                          return C();
                        });
                        return function (C) {
                          return w.apply(this, arguments);
                        };
                      })()
                    );
              } catch (f) {
                return n(f);
              }
            });
            return function (h, p, c, n) {
              return b.apply(this, arguments);
            };
          })();
        }
        _handleBatch(l, b) {
          var h = this;
          return e(function* () {
            try {
              const p = yield Promise.all(l.map(h._promiseHandle.bind(h)));
              return b ? b(null, p) : p;
            } catch (p) {
              if (b) return b(p);
              throw p;
            }
          })();
        }
        _promiseHandle(l) {
          return new Promise((b) => {
            this._handle(l, (h, p) => {
              b(p);
            });
          });
        }
        _handle(l, b) {
          var h = this;
          return e(function* () {
            if (!l || Array.isArray(l) || "object" != typeof l) {
              const f = new d.EthereumRpcError(
                d.errorCodes.rpc.invalidRequest,
                "Requests must be plain objects. Received: " + typeof l,
                { request: l }
              );
              return b(f, { id: void 0, jsonrpc: "2.0", error: f });
            }
            if ("string" != typeof l.method) {
              const f = new d.EthereumRpcError(
                d.errorCodes.rpc.invalidRequest,
                "Must specify a string method. Received: " + typeof l.method,
                { request: l }
              );
              return b(f, { id: l.id, jsonrpc: "2.0", error: f });
            }
            const p = Object.assign({}, l),
              c = { id: p.id, jsonrpc: p.jsonrpc };
            let n = null;
            try {
              yield h._processRequest(p, c);
            } catch (f) {
              n = f;
            }
            return (
              n &&
                (delete c.result, c.error || (c.error = d.serializeError(n))),
              b(n, c)
            );
          })();
        }
        _processRequest(l, b) {
          var h = this;
          return e(function* () {
            const [p, c, n] = yield o._runAllMiddleware(l, b, h._middleware);
            if (
              (o._checkForCompletion(l, b, c), yield o._runReturnHandlers(n), p)
            )
              throw p;
          })();
        }
        static _runAllMiddleware(l, b, h) {
          return e(function* () {
            const p = [];
            let c = null,
              n = !1;
            for (const f of h)
              if ((([c, n] = yield o._runMiddleware(l, b, f, p)), n)) break;
            return [c, n, p.reverse()];
          })();
        }
        static _runMiddleware(l, b, h, p) {
          return new Promise((c) => {
            const n = (v) => {
                const E = v || b.error;
                E && (b.error = d.serializeError(E)), c([E, !0]);
              },
              f = (v) => {
                b.error
                  ? n(b.error)
                  : (v &&
                      ("function" != typeof v &&
                        n(
                          new d.EthereumRpcError(
                            d.errorCodes.rpc.internal,
                            `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof v}" for request:\n${i(
                              l
                            )}`,
                            { request: l }
                          )
                        ),
                      p.push(v)),
                    c([null, !1]));
              };
            try {
              h(l, b, f, n);
            } catch (v) {
              n(v);
            }
          });
        }
        static _runReturnHandlers(l) {
          return e(function* () {
            for (const b of l)
              yield new Promise((h, p) => {
                b((c) => (c ? p(c) : h()));
              });
          })();
        }
        static _checkForCompletion(l, b, h) {
          if (!("result" in b) && !("error" in b))
            throw new d.EthereumRpcError(
              d.errorCodes.rpc.internal,
              `JsonRpcEngine: Response has no error or result for request:\n${i(
                l
              )}`,
              { request: l }
            );
          if (!h)
            throw new d.EthereumRpcError(
              d.errorCodes.rpc.internal,
              `JsonRpcEngine: Nothing ended request:\n${i(l)}`,
              { request: l }
            );
        }
      }
      function i(s) {
        return JSON.stringify(s, null, 2);
      }
      r.JsonRpcEngine = o;
    },
    34527: (L, r, t) => {
      "use strict";
      var e = t(59344).default;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createAsyncMiddleware = void 0),
        (r.createAsyncMiddleware = function g(u) {
          return (function () {
            var d = e(function* (o, i, s, l) {
              let b;
              const h = new Promise((f) => {
                b = f;
              });
              let p = null,
                c = !1;
              const n = (function () {
                var f = e(function* () {
                  (c = !0),
                    s((v) => {
                      (p = v), b();
                    }),
                    yield h;
                });
                return function () {
                  return f.apply(this, arguments);
                };
              })();
              try {
                yield u(o, i, n), c ? (yield h, p(null)) : l(null);
              } catch (f) {
                p ? p(f) : l(f);
              }
            });
            return function (o, i, s, l) {
              return d.apply(this, arguments);
            };
          })();
        });
    },
    90128: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createScaffoldMiddleware = void 0),
        (r.createScaffoldMiddleware = function t(e) {
          return (g, u, d, o) => {
            const i = e[g.method];
            return void 0 === i
              ? d()
              : "function" == typeof i
              ? i(g, u, d, o)
              : ((u.result = i), o());
          };
        });
    },
    15802: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getUniqueId = void 0);
      const t = 4294967295;
      let e = Math.floor(Math.random() * t);
      r.getUniqueId = function g() {
        return (e = (e + 1) % t), e;
      };
    },
    15608: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.createIdRemapMiddleware = void 0);
      const e = t(15802);
      r.createIdRemapMiddleware = function g() {
        return (u, d, o, i) => {
          const s = u.id,
            l = e.getUniqueId();
          (u.id = l),
            (d.id = l),
            o((b) => {
              (u.id = s), (d.id = s), b();
            });
        };
      };
    },
    47547: function (L, r, t) {
      "use strict";
      var e =
          (this && this.__createBinding) ||
          (Object.create
            ? function (u, d, o, i) {
                void 0 === i && (i = o),
                  Object.defineProperty(u, i, {
                    enumerable: !0,
                    get: function () {
                      return d[o];
                    },
                  });
              }
            : function (u, d, o, i) {
                void 0 === i && (i = o), (u[i] = d[o]);
              }),
        g =
          (this && this.__exportStar) ||
          function (u, d) {
            for (var o in u)
              "default" !== o &&
                !Object.prototype.hasOwnProperty.call(d, o) &&
                e(d, u, o);
          };
      Object.defineProperty(r, "__esModule", { value: !0 }),
        g(t(15608), r),
        g(t(34527), r),
        g(t(90128), r),
        g(t(15802), r),
        g(t(15887), r),
        g(t(64606), r);
    },
    64606: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.mergeMiddleware = void 0);
      const e = t(15887);
      r.mergeMiddleware = function g(u) {
        const d = new e.JsonRpcEngine();
        return u.forEach((o) => d.push(o)), d.asMiddleware();
      };
    },
    48183: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.EthereumProviderError = r.EthereumRpcError = void 0);
      const e = t(38701);
      class g extends Error {
        constructor(s, l, b) {
          if (!Number.isInteger(s))
            throw new Error('"code" must be an integer.');
          if (!l || "string" != typeof l)
            throw new Error('"message" must be a nonempty string.');
          super(l), (this.code = s), void 0 !== b && (this.data = b);
        }
        serialize() {
          const s = { code: this.code, message: this.message };
          return (
            void 0 !== this.data && (s.data = this.data),
            this.stack && (s.stack = this.stack),
            s
          );
        }
        toString() {
          return e.default(this.serialize(), o, 2);
        }
      }
      function o(i, s) {
        if ("[Circular]" !== s) return s;
      }
      (r.EthereumRpcError = g),
        (r.EthereumProviderError = class u extends g {
          constructor(s, l, b) {
            if (
              !(function d(i) {
                return Number.isInteger(i) && i >= 1e3 && i <= 4999;
              })(s)
            )
              throw new Error(
                '"code" must be an integer such that: 1000 <= code <= 4999'
              );
            super(s, l, b);
          }
        });
    },
    46951: (L, r) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.errorValues = r.errorCodes = void 0),
        (r.errorCodes = {
          rpc: {
            invalidInput: -32e3,
            resourceNotFound: -32001,
            resourceUnavailable: -32002,
            transactionRejected: -32003,
            methodNotSupported: -32004,
            limitExceeded: -32005,
            parse: -32700,
            invalidRequest: -32600,
            methodNotFound: -32601,
            invalidParams: -32602,
            internal: -32603,
          },
          provider: {
            userRejectedRequest: 4001,
            unauthorized: 4100,
            unsupportedMethod: 4200,
            disconnected: 4900,
            chainDisconnected: 4901,
          },
        }),
        (r.errorValues = {
          "-32700": {
            standard: "JSON RPC 2.0",
            message:
              "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
          },
          "-32600": {
            standard: "JSON RPC 2.0",
            message: "The JSON sent is not a valid Request object.",
          },
          "-32601": {
            standard: "JSON RPC 2.0",
            message: "The method does not exist / is not available.",
          },
          "-32602": {
            standard: "JSON RPC 2.0",
            message: "Invalid method parameter(s).",
          },
          "-32603": {
            standard: "JSON RPC 2.0",
            message: "Internal JSON-RPC error.",
          },
          "-32000": { standard: "EIP-1474", message: "Invalid input." },
          "-32001": { standard: "EIP-1474", message: "Resource not found." },
          "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
          "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
          "-32004": { standard: "EIP-1474", message: "Method not supported." },
          "-32005": {
            standard: "EIP-1474",
            message: "Request limit exceeded.",
          },
          4001: { standard: "EIP-1193", message: "User rejected the request." },
          4100: {
            standard: "EIP-1193",
            message:
              "The requested account and/or method has not been authorized by the user.",
          },
          4200: {
            standard: "EIP-1193",
            message:
              "The requested method is not supported by this Ethereum provider.",
          },
          4900: {
            standard: "EIP-1193",
            message: "The provider is disconnected from all chains.",
          },
          4901: {
            standard: "EIP-1193",
            message: "The provider is disconnected from the specified chain.",
          },
        });
    },
    69536: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.ethErrors = void 0);
      const e = t(48183),
        g = t(44314),
        u = t(46951);
      function d(s, l) {
        const [b, h] = i(l);
        return new e.EthereumRpcError(s, b || g.getMessageFromCode(s), h);
      }
      function o(s, l) {
        const [b, h] = i(l);
        return new e.EthereumProviderError(s, b || g.getMessageFromCode(s), h);
      }
      function i(s) {
        if (s) {
          if ("string" == typeof s) return [s];
          if ("object" == typeof s && !Array.isArray(s)) {
            const { message: l, data: b } = s;
            if (l && "string" != typeof l)
              throw new Error("Must specify string message.");
            return [l || void 0, b];
          }
        }
        return [];
      }
      r.ethErrors = {
        rpc: {
          parse: (s) => d(u.errorCodes.rpc.parse, s),
          invalidRequest: (s) => d(u.errorCodes.rpc.invalidRequest, s),
          invalidParams: (s) => d(u.errorCodes.rpc.invalidParams, s),
          methodNotFound: (s) => d(u.errorCodes.rpc.methodNotFound, s),
          internal: (s) => d(u.errorCodes.rpc.internal, s),
          server: (s) => {
            if (!s || "object" != typeof s || Array.isArray(s))
              throw new Error(
                "Ethereum RPC Server errors must provide single object argument."
              );
            const { code: l } = s;
            if (!Number.isInteger(l) || l > -32005 || l < -32099)
              throw new Error(
                '"code" must be an integer such that: -32099 <= code <= -32005'
              );
            return d(l, s);
          },
          invalidInput: (s) => d(u.errorCodes.rpc.invalidInput, s),
          resourceNotFound: (s) => d(u.errorCodes.rpc.resourceNotFound, s),
          resourceUnavailable: (s) =>
            d(u.errorCodes.rpc.resourceUnavailable, s),
          transactionRejected: (s) =>
            d(u.errorCodes.rpc.transactionRejected, s),
          methodNotSupported: (s) => d(u.errorCodes.rpc.methodNotSupported, s),
          limitExceeded: (s) => d(u.errorCodes.rpc.limitExceeded, s),
        },
        provider: {
          userRejectedRequest: (s) =>
            o(u.errorCodes.provider.userRejectedRequest, s),
          unauthorized: (s) => o(u.errorCodes.provider.unauthorized, s),
          unsupportedMethod: (s) =>
            o(u.errorCodes.provider.unsupportedMethod, s),
          disconnected: (s) => o(u.errorCodes.provider.disconnected, s),
          chainDisconnected: (s) =>
            o(u.errorCodes.provider.chainDisconnected, s),
          custom: (s) => {
            if (!s || "object" != typeof s || Array.isArray(s))
              throw new Error(
                "Ethereum Provider custom errors must provide single object argument."
              );
            const { code: l, message: b, data: h } = s;
            if (!b || "string" != typeof b)
              throw new Error('"message" must be a nonempty string');
            return new e.EthereumProviderError(l, b, h);
          },
        },
      };
    },
    33897: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.getMessageFromCode =
          r.serializeError =
          r.EthereumProviderError =
          r.EthereumRpcError =
          r.ethErrors =
          r.errorCodes =
            void 0);
      const e = t(48183);
      Object.defineProperty(r, "EthereumRpcError", {
        enumerable: !0,
        get: function () {
          return e.EthereumRpcError;
        },
      }),
        Object.defineProperty(r, "EthereumProviderError", {
          enumerable: !0,
          get: function () {
            return e.EthereumProviderError;
          },
        });
      const g = t(44314);
      Object.defineProperty(r, "serializeError", {
        enumerable: !0,
        get: function () {
          return g.serializeError;
        },
      }),
        Object.defineProperty(r, "getMessageFromCode", {
          enumerable: !0,
          get: function () {
            return g.getMessageFromCode;
          },
        });
      const u = t(69536);
      Object.defineProperty(r, "ethErrors", {
        enumerable: !0,
        get: function () {
          return u.ethErrors;
        },
      });
      const d = t(46951);
      Object.defineProperty(r, "errorCodes", {
        enumerable: !0,
        get: function () {
          return d.errorCodes;
        },
      });
    },
    44314: (L, r, t) => {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (r.serializeError =
          r.isValidCode =
          r.getMessageFromCode =
          r.JSON_RPC_SERVER_ERROR_MESSAGE =
            void 0);
      const e = t(46951),
        g = t(48183),
        u = e.errorCodes.rpc.internal,
        o = { code: u, message: i(u) };
      function i(
        c,
        n = "Unspecified error message. This is a bug, please report it."
      ) {
        if (Number.isInteger(c)) {
          const f = c.toString();
          if (p(e.errorValues, f)) return e.errorValues[f].message;
          if (b(c)) return r.JSON_RPC_SERVER_ERROR_MESSAGE;
        }
        return n;
      }
      function s(c) {
        if (!Number.isInteger(c)) return !1;
        const n = c.toString();
        return !(!e.errorValues[n] && !b(c));
      }
      function b(c) {
        return c >= -32099 && c <= -32e3;
      }
      function h(c) {
        return c && "object" == typeof c && !Array.isArray(c)
          ? Object.assign({}, c)
          : c;
      }
      function p(c, n) {
        return Object.prototype.hasOwnProperty.call(c, n);
      }
      (r.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error."),
        (r.getMessageFromCode = i),
        (r.isValidCode = s),
        (r.serializeError = function l(
          c,
          { fallbackError: n = o, shouldIncludeStack: f = !1 } = {}
        ) {
          var v, E;
          if (!n || !Number.isInteger(n.code) || "string" != typeof n.message)
            throw new Error(
              "Must provide fallback error with integer number code and string message."
            );
          if (c instanceof g.EthereumRpcError) return c.serialize();
          const w = {};
          if (
            c &&
            "object" == typeof c &&
            !Array.isArray(c) &&
            p(c, "code") &&
            s(c.code)
          ) {
            const A = c;
            (w.code = A.code),
              A.message && "string" == typeof A.message
                ? ((w.message = A.message), p(A, "data") && (w.data = A.data))
                : ((w.message = i(w.code)), (w.data = { originalError: h(c) }));
          } else {
            w.code = n.code;
            const A = null === (v = c) || void 0 === v ? void 0 : v.message;
            (w.message = A && "string" == typeof A ? A : n.message),
              (w.data = { originalError: h(c) });
          }
          const C = null === (E = c) || void 0 === E ? void 0 : E.stack;
          return f && c && C && "string" == typeof C && (w.stack = C), w;
        });
    },
    40519: (L) => {
      L.exports = function r(t) {
        var e = (t = t || {}).max || Number.MAX_SAFE_INTEGER,
          g = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
        return function () {
          return (g %= e), g++;
        };
      };
    },
    70568: (L, r, t) => {
      L.exports = t(98554)(t(96322));
    },
    98554: (L, r, t) => {
      const e = t(40773),
        g = t(67256);
      L.exports = function (u) {
        const d = e(u),
          o = g(u);
        return function (i, s) {
          switch ("string" == typeof i ? i.toLowerCase() : i) {
            case "keccak224":
              return new d(1152, 448, null, 224, s);
            case "keccak256":
              return new d(1088, 512, null, 256, s);
            case "keccak384":
              return new d(832, 768, null, 384, s);
            case "keccak512":
              return new d(576, 1024, null, 512, s);
            case "sha3-224":
              return new d(1152, 448, 6, 224, s);
            case "sha3-256":
              return new d(1088, 512, 6, 256, s);
            case "sha3-384":
              return new d(832, 768, 6, 384, s);
            case "sha3-512":
              return new d(576, 1024, 6, 512, s);
            case "shake128":
              return new o(1344, 256, 31, s);
            case "shake256":
              return new o(1088, 512, 31, s);
            default:
              throw new Error("Invald algorithm: " + i);
          }
        };
      };
    },
    40773: (L, r, t) => {
      const { Transform: e } = t(96745);
      L.exports = (g) =>
        class Kt extends e {
          constructor(d, o, i, s, l) {
            super(l),
              (this._rate = d),
              (this._capacity = o),
              (this._delimitedSuffix = i),
              (this._hashBitLength = s),
              (this._options = l),
              (this._state = new g()),
              this._state.initialize(d, o),
              (this._finalized = !1);
          }
          _transform(d, o, i) {
            let s = null;
            try {
              this.update(d, o);
            } catch (l) {
              s = l;
            }
            i(s);
          }
          _flush(d) {
            let o = null;
            try {
              this.push(this.digest());
            } catch (i) {
              o = i;
            }
            d(o);
          }
          update(d, o) {
            if (!Buffer.isBuffer(d) && "string" != typeof d)
              throw new TypeError("Data must be a string or a buffer");
            if (this._finalized) throw new Error("Digest already called");
            return (
              Buffer.isBuffer(d) || (d = Buffer.from(d, o)),
              this._state.absorb(d),
              this
            );
          }
          digest(d) {
            if (this._finalized) throw new Error("Digest already called");
            (this._finalized = !0),
              this._delimitedSuffix &&
                this._state.absorbLastFewBits(this._delimitedSuffix);
            let o = this._state.squeeze(this._hashBitLength / 8);
            return void 0 !== d && (o = o.toString(d)), this._resetState(), o;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            const d = new Kt(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._hashBitLength,
              this._options
            );
            return (
              this._state.copy(d._state), (d._finalized = this._finalized), d
            );
          }
        };
    },
    67256: (L, r, t) => {
      const { Transform: e } = t(96745);
      L.exports = (g) =>
        class Jt extends e {
          constructor(d, o, i, s) {
            super(s),
              (this._rate = d),
              (this._capacity = o),
              (this._delimitedSuffix = i),
              (this._options = s),
              (this._state = new g()),
              this._state.initialize(d, o),
              (this._finalized = !1);
          }
          _transform(d, o, i) {
            let s = null;
            try {
              this.update(d, o);
            } catch (l) {
              s = l;
            }
            i(s);
          }
          _flush() {}
          _read(d) {
            this.push(this.squeeze(d));
          }
          update(d, o) {
            if (!Buffer.isBuffer(d) && "string" != typeof d)
              throw new TypeError("Data must be a string or a buffer");
            if (this._finalized) throw new Error("Squeeze already called");
            return (
              Buffer.isBuffer(d) || (d = Buffer.from(d, o)),
              this._state.absorb(d),
              this
            );
          }
          squeeze(d, o) {
            this._finalized ||
              ((this._finalized = !0),
              this._state.absorbLastFewBits(this._delimitedSuffix));
            let i = this._state.squeeze(d);
            return void 0 !== o && (i = i.toString(o)), i;
          }
          _resetState() {
            return this._state.initialize(this._rate, this._capacity), this;
          }
          _clone() {
            const d = new Jt(
              this._rate,
              this._capacity,
              this._delimitedSuffix,
              this._options
            );
            return (
              this._state.copy(d._state), (d._finalized = this._finalized), d
            );
          }
        };
    },
    58363: (L, r) => {
      const t = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ];
      r.p1600 = function (e) {
        for (let g = 0; g < 24; ++g) {
          const u = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
            d = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
            o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
            i = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
            s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
            l = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
            b = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
            h = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
            p = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
            c = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49];
          let n = p ^ ((o << 1) | (i >>> 31)),
            f = c ^ ((i << 1) | (o >>> 31));
          const v = e[0] ^ n,
            E = e[1] ^ f,
            w = e[10] ^ n,
            C = e[11] ^ f,
            A = e[20] ^ n,
            S = e[21] ^ f,
            M = e[30] ^ n,
            N = e[31] ^ f,
            U = e[40] ^ n,
            O = e[41] ^ f;
          (n = u ^ ((s << 1) | (l >>> 31))), (f = d ^ ((l << 1) | (s >>> 31)));
          const D = e[2] ^ n,
            K = e[3] ^ f,
            G = e[12] ^ n,
            re = e[13] ^ f,
            ue = e[22] ^ n,
            P = e[23] ^ f,
            m = e[32] ^ n,
            _ = e[33] ^ f,
            I = e[42] ^ n,
            R = e[43] ^ f;
          (n = o ^ ((b << 1) | (h >>> 31))), (f = i ^ ((h << 1) | (b >>> 31)));
          const T = e[4] ^ n,
            F = e[5] ^ f,
            J = e[14] ^ n,
            $ = e[15] ^ f,
            x = e[24] ^ n,
            z = e[25] ^ f,
            de = e[34] ^ n,
            fe = e[35] ^ f,
            be = e[44] ^ n,
            Q = e[45] ^ f;
          (n = s ^ ((p << 1) | (c >>> 31))), (f = l ^ ((c << 1) | (p >>> 31)));
          const B = e[6] ^ n,
            V = e[7] ^ f,
            ee = e[16] ^ n,
            oe = e[17] ^ f,
            H = e[26] ^ n,
            W = e[27] ^ f,
            ne = e[36] ^ n,
            le = e[37] ^ f,
            Re = e[46] ^ n,
            Se = e[47] ^ f;
          (n = b ^ ((u << 1) | (d >>> 31))), (f = h ^ ((d << 1) | (u >>> 31)));
          const Ee = e[8] ^ n,
            pe = e[9] ^ f,
            Be = e[18] ^ n,
            _e = e[19] ^ f,
            xe = e[28] ^ n,
            Me = e[29] ^ f,
            Z = e[38] ^ n,
            X = e[39] ^ f,
            te = e[48] ^ n,
            ie = e[49] ^ f,
            ve = v,
            we = E,
            Oe = (C << 4) | (w >>> 28),
            Fe = (w << 4) | (C >>> 28),
            Le = (A << 3) | (S >>> 29),
            q = (S << 3) | (A >>> 29),
            ae = (N << 9) | (M >>> 23),
            Pe = (M << 9) | (N >>> 23),
            ke = (U << 18) | (O >>> 14),
            Ve = (O << 18) | (U >>> 14),
            Te = (D << 1) | (K >>> 31),
            He = (K << 1) | (D >>> 31),
            tt = (re << 12) | (G >>> 20),
            Ue = (G << 12) | (re >>> 20),
            $e = (ue << 10) | (P >>> 22),
            nt = (P << 10) | (ue >>> 22),
            Ge = (_ << 13) | (m >>> 19),
            We = (m << 13) | (_ >>> 19),
            rt = (I << 2) | (R >>> 30),
            ze = (R << 2) | (I >>> 30),
            Je = (F << 30) | (T >>> 2),
            qe = (T << 30) | (F >>> 2),
            ce = (J << 6) | ($ >>> 26),
            se = ($ << 6) | (J >>> 26),
            he = (z << 11) | (x >>> 21),
            me = (x << 11) | (z >>> 21),
            ye = (de << 15) | (fe >>> 17),
            Ie = (fe << 15) | (de >>> 17),
            Ae = (Q << 29) | (be >>> 3),
            Ce = (be << 29) | (Q >>> 3),
            Ze = (B << 28) | (V >>> 4),
            De = (V << 28) | (B >>> 4),
            je = (oe << 23) | (ee >>> 9),
            Xe = (ee << 23) | (oe >>> 9),
            Ke = (H << 25) | (W >>> 7),
            Qe = (W << 25) | (H >>> 7),
            at = (ne << 21) | (le >>> 11),
            st = (le << 21) | (ne >>> 11),
            it = (Se << 24) | (Re >>> 8),
            ut = (Re << 24) | (Se >>> 8),
            ht = (Ee << 27) | (pe >>> 5),
            ft = (pe << 27) | (Ee >>> 5),
            dt = (Be << 20) | (_e >>> 12),
            pt = (_e << 20) | (Be >>> 12),
            ct = (Me << 7) | (xe >>> 25),
            gt = (xe << 7) | (Me >>> 25),
            mt = (Z << 8) | (X >>> 24),
            bt = (X << 8) | (Z >>> 24),
            yt = (te << 14) | (ie >>> 18),
            lt = (ie << 14) | (te >>> 18);
          (e[0] = ve ^ (~tt & he)),
            (e[1] = we ^ (~Ue & me)),
            (e[10] = Ze ^ (~dt & Le)),
            (e[11] = De ^ (~pt & q)),
            (e[20] = Te ^ (~ce & Ke)),
            (e[21] = He ^ (~se & Qe)),
            (e[30] = ht ^ (~Oe & $e)),
            (e[31] = ft ^ (~Fe & nt)),
            (e[40] = Je ^ (~je & ct)),
            (e[41] = qe ^ (~Xe & gt)),
            (e[2] = tt ^ (~he & at)),
            (e[3] = Ue ^ (~me & st)),
            (e[12] = dt ^ (~Le & Ge)),
            (e[13] = pt ^ (~q & We)),
            (e[22] = ce ^ (~Ke & mt)),
            (e[23] = se ^ (~Qe & bt)),
            (e[32] = Oe ^ (~$e & ye)),
            (e[33] = Fe ^ (~nt & Ie)),
            (e[42] = je ^ (~ct & ae)),
            (e[43] = Xe ^ (~gt & Pe)),
            (e[4] = he ^ (~at & yt)),
            (e[5] = me ^ (~st & lt)),
            (e[14] = Le ^ (~Ge & Ae)),
            (e[15] = q ^ (~We & Ce)),
            (e[24] = Ke ^ (~mt & ke)),
            (e[25] = Qe ^ (~bt & Ve)),
            (e[34] = $e ^ (~ye & it)),
            (e[35] = nt ^ (~Ie & ut)),
            (e[44] = ct ^ (~ae & rt)),
            (e[45] = gt ^ (~Pe & ze)),
            (e[6] = at ^ (~yt & ve)),
            (e[7] = st ^ (~lt & we)),
            (e[16] = Ge ^ (~Ae & Ze)),
            (e[17] = We ^ (~Ce & De)),
            (e[26] = mt ^ (~ke & Te)),
            (e[27] = bt ^ (~Ve & He)),
            (e[36] = ye ^ (~it & ht)),
            (e[37] = Ie ^ (~ut & ft)),
            (e[46] = ae ^ (~rt & Je)),
            (e[47] = Pe ^ (~ze & qe)),
            (e[8] = yt ^ (~ve & tt)),
            (e[9] = lt ^ (~we & Ue)),
            (e[18] = Ae ^ (~Ze & dt)),
            (e[19] = Ce ^ (~De & pt)),
            (e[28] = ke ^ (~Te & ce)),
            (e[29] = Ve ^ (~He & se)),
            (e[38] = it ^ (~ht & Oe)),
            (e[39] = ut ^ (~ft & Fe)),
            (e[48] = rt ^ (~Je & je)),
            (e[49] = ze ^ (~qe & Xe)),
            (e[0] ^= t[2 * g]),
            (e[1] ^= t[2 * g + 1]);
        }
      };
    },
    96322: (L, r, t) => {
      const e = t(58363);
      function g() {
        (this.state = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0,
        ]),
          (this.blockSize = null),
          (this.count = 0),
          (this.squeezing = !1);
      }
      (g.prototype.initialize = function (u, d) {
        for (let o = 0; o < 50; ++o) this.state[o] = 0;
        (this.blockSize = u / 8), (this.count = 0), (this.squeezing = !1);
      }),
        (g.prototype.absorb = function (u) {
          for (let d = 0; d < u.length; ++d)
            (this.state[~~(this.count / 4)] ^= u[d] << ((this.count % 4) * 8)),
              (this.count += 1),
              this.count === this.blockSize &&
                (e.p1600(this.state), (this.count = 0));
        }),
        (g.prototype.absorbLastFewBits = function (u) {
          (this.state[~~(this.count / 4)] ^= u << ((this.count % 4) * 8)),
            128 & u && this.count === this.blockSize - 1 && e.p1600(this.state),
            (this.state[~~((this.blockSize - 1) / 4)] ^=
              128 << (((this.blockSize - 1) % 4) * 8)),
            e.p1600(this.state),
            (this.count = 0),
            (this.squeezing = !0);
        }),
        (g.prototype.squeeze = function (u) {
          this.squeezing || this.absorbLastFewBits(1);
          const d = Buffer.alloc(u);
          for (let o = 0; o < u; ++o)
            (d[o] =
              (this.state[~~(this.count / 4)] >>> ((this.count % 4) * 8)) &
              255),
              (this.count += 1),
              this.count === this.blockSize &&
                (e.p1600(this.state), (this.count = 0));
          return d;
        }),
        (g.prototype.copy = function (u) {
          for (let d = 0; d < 50; ++d) u.state[d] = this.state[d];
          (u.blockSize = this.blockSize),
            (u.count = this.count),
            (u.squeezing = this.squeezing);
        }),
        (L.exports = g);
    },
    61826: (L, r, t) => {
      var e = "function" == typeof Map && Map.prototype,
        g =
          Object.getOwnPropertyDescriptor && e
            ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
            : null,
        u = e && g && "function" == typeof g.get ? g.get : null,
        d = e && Map.prototype.forEach,
        o = "function" == typeof Set && Set.prototype,
        i =
          Object.getOwnPropertyDescriptor && o
            ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
            : null,
        s = o && i && "function" == typeof i.get ? i.get : null,
        l = o && Set.prototype.forEach,
        h =
          "function" == typeof WeakMap && WeakMap.prototype
            ? WeakMap.prototype.has
            : null,
        c =
          "function" == typeof WeakSet && WeakSet.prototype
            ? WeakSet.prototype.has
            : null,
        f =
          "function" == typeof WeakRef && WeakRef.prototype
            ? WeakRef.prototype.deref
            : null,
        v = Boolean.prototype.valueOf,
        E = Object.prototype.toString,
        w = Function.prototype.toString,
        C = String.prototype.match,
        A = String.prototype.slice,
        S = String.prototype.replace,
        M = String.prototype.toUpperCase,
        N = String.prototype.toLowerCase,
        U = RegExp.prototype.test,
        O = Array.prototype.concat,
        D = Array.prototype.join,
        K = Array.prototype.slice,
        G = Math.floor,
        re = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        ue = Object.getOwnPropertySymbols,
        P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? Symbol.prototype.toString
            : null,
        m = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        _ =
          "function" == typeof Symbol && Symbol.toStringTag && (Symbol, 1)
            ? Symbol.toStringTag
            : null,
        I = Object.prototype.propertyIsEnumerable,
        R =
          ("function" == typeof Reflect
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (q) {
                return q.__proto__;
              }
            : null);
      function T(q, ae) {
        if (
          q === 1 / 0 ||
          q === -1 / 0 ||
          q != q ||
          (q && q > -1e3 && q < 1e3) ||
          U.call(/e/, ae)
        )
          return ae;
        var Pe = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof q) {
          var ke = q < 0 ? -G(-q) : G(q);
          if (ke !== q) {
            var Ve = String(ke),
              Te = A.call(ae, Ve.length + 1);
            return (
              S.call(Ve, Pe, "$&_") +
              "." +
              S.call(S.call(Te, /([0-9]{3})/g, "$&_"), /_$/, "")
            );
          }
        }
        return S.call(ae, Pe, "$&_");
      }
      var F = t(24654),
        J = F.custom,
        $ = oe(J) ? J : null;
      function x(q, ae, Pe) {
        var ke = "double" === (Pe.quoteStyle || ae) ? '"' : "'";
        return ke + q + ke;
      }
      function z(q) {
        return S.call(String(q), /"/g, "&quot;");
      }
      function de(q) {
        return !(
          "[object Array]" !== le(q) ||
          (_ && "object" == typeof q && _ in q)
        );
      }
      function be(q) {
        return !(
          "[object RegExp]" !== le(q) ||
          (_ && "object" == typeof q && _ in q)
        );
      }
      function oe(q) {
        if (m) return q && "object" == typeof q && q instanceof Symbol;
        if ("symbol" == typeof q) return !0;
        if (!q || "object" != typeof q || !P) return !1;
        try {
          return P.call(q), !0;
        } catch {}
        return !1;
      }
      L.exports = function q(ae, Pe, ke, Ve) {
        var Te = Pe || {};
        if (
          ne(Te, "quoteStyle") &&
          "single" !== Te.quoteStyle &&
          "double" !== Te.quoteStyle
        )
          throw new TypeError(
            'option "quoteStyle" must be "single" or "double"'
          );
        if (
          ne(Te, "maxStringLength") &&
          ("number" == typeof Te.maxStringLength
            ? Te.maxStringLength < 0 && Te.maxStringLength !== 1 / 0
            : null !== Te.maxStringLength)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var He = !ne(Te, "customInspect") || Te.customInspect;
        if ("boolean" != typeof He && "symbol" !== He)
          throw new TypeError(
            "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
          );
        if (
          ne(Te, "indent") &&
          null !== Te.indent &&
          "\t" !== Te.indent &&
          !(parseInt(Te.indent, 10) === Te.indent && Te.indent > 0)
        )
          throw new TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (
          ne(Te, "numericSeparator") &&
          "boolean" != typeof Te.numericSeparator
        )
          throw new TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var tt = Te.numericSeparator;
        if (typeof ae > "u") return "undefined";
        if (null === ae) return "null";
        if ("boolean" == typeof ae) return ae ? "true" : "false";
        if ("string" == typeof ae) return Z(ae, Te);
        if ("number" == typeof ae) {
          if (0 === ae) return 1 / 0 / ae > 0 ? "0" : "-0";
          var Ue = String(ae);
          return tt ? T(ae, Ue) : Ue;
        }
        if ("bigint" == typeof ae) {
          var $e = String(ae) + "n";
          return tt ? T(ae, $e) : $e;
        }
        var nt = typeof Te.depth > "u" ? 5 : Te.depth;
        if (
          (typeof ke > "u" && (ke = 0),
          ke >= nt && nt > 0 && "object" == typeof ae)
        )
          return de(ae) ? "[Array]" : "[Object]";
        var Ge = (function Oe(q, ae) {
          var Pe;
          if ("\t" === q.indent) Pe = "\t";
          else {
            if (!("number" == typeof q.indent && q.indent > 0)) return null;
            Pe = D.call(Array(q.indent + 1), " ");
          }
          return { base: Pe, prev: D.call(Array(ae + 1), Pe) };
        })(Te, ke);
        if (typeof Ve > "u") Ve = [];
        else if (Se(Ve, ae) >= 0) return "[Circular]";
        function We(Ke, Qe, at) {
          if ((Qe && (Ve = K.call(Ve)).push(Qe), at)) {
            var st = { depth: Te.depth };
            return (
              ne(Te, "quoteStyle") && (st.quoteStyle = Te.quoteStyle),
              q(Ke, st, ke + 1, Ve)
            );
          }
          return q(Ke, Te, ke + 1, Ve);
        }
        if ("function" == typeof ae && !be(ae)) {
          var rt = (function Re(q) {
              if (q.name) return q.name;
              var ae = C.call(w.call(q), /^function\s*([\w$]+)/);
              return ae ? ae[1] : null;
            })(ae),
            ze = Le(ae, We);
          return (
            "[Function" +
            (rt ? ": " + rt : " (anonymous)") +
            "]" +
            (ze.length > 0 ? " { " + D.call(ze, ", ") + " }" : "")
          );
        }
        if (oe(ae)) {
          var Je = m
            ? S.call(String(ae), /^(Symbol\(.*\))_[^)]*$/, "$1")
            : P.call(ae);
          return "object" != typeof ae || m ? Je : te(Je);
        }
        if (
          (function Me(q) {
            return (
              !(!q || "object" != typeof q) &&
              ((typeof HTMLElement < "u" && q instanceof HTMLElement) ||
                ("string" == typeof q.nodeName &&
                  "function" == typeof q.getAttribute))
            );
          })(ae)
        ) {
          for (
            var qe = "<" + N.call(String(ae.nodeName)),
              ce = ae.attributes || [],
              se = 0;
            se < ce.length;
            se++
          )
            qe += " " + ce[se].name + "=" + x(z(ce[se].value), "double", Te);
          return (
            (qe += ">"),
            ae.childNodes && ae.childNodes.length && (qe += "..."),
            qe + "</" + N.call(String(ae.nodeName)) + ">"
          );
        }
        if (de(ae)) {
          if (0 === ae.length) return "[]";
          var he = Le(ae, We);
          return Ge &&
            !(function we(q) {
              for (var ae = 0; ae < q.length; ae++)
                if (Se(q[ae], "\n") >= 0) return !1;
              return !0;
            })(he)
            ? "[" + Fe(he, Ge) + "]"
            : "[ " + D.call(he, ", ") + " ]";
        }
        if (
          (function Q(q) {
            return !(
              "[object Error]" !== le(q) ||
              (_ && "object" == typeof q && _ in q)
            );
          })(ae)
        ) {
          var me = Le(ae, We);
          return "cause" in Error.prototype ||
            !("cause" in ae) ||
            I.call(ae, "cause")
            ? 0 === me.length
              ? "[" + String(ae) + "]"
              : "{ [" + String(ae) + "] " + D.call(me, ", ") + " }"
            : "{ [" +
                String(ae) +
                "] " +
                D.call(O.call("[cause]: " + We(ae.cause), me), ", ") +
                " }";
        }
        if ("object" == typeof ae && He) {
          if ($ && "function" == typeof ae[$] && F)
            return F(ae, { depth: nt - ke });
          if ("symbol" !== He && "function" == typeof ae.inspect)
            return ae.inspect();
        }
        if (
          (function Ee(q) {
            if (!u || !q || "object" != typeof q) return !1;
            try {
              u.call(q);
              try {
                s.call(q);
              } catch {
                return !0;
              }
              return q instanceof Map;
            } catch {}
            return !1;
          })(ae)
        ) {
          var ye = [];
          return (
            d &&
              d.call(ae, function (Ke, Qe) {
                ye.push(We(Qe, ae, !0) + " => " + We(Ke, ae));
              }),
            ve("Map", u.call(ae), ye, Ge)
          );
        }
        if (
          (function _e(q) {
            if (!s || !q || "object" != typeof q) return !1;
            try {
              s.call(q);
              try {
                u.call(q);
              } catch {
                return !0;
              }
              return q instanceof Set;
            } catch {}
            return !1;
          })(ae)
        ) {
          var Ie = [];
          return (
            l &&
              l.call(ae, function (Ke) {
                Ie.push(We(Ke, ae));
              }),
            ve("Set", s.call(ae), Ie, Ge)
          );
        }
        if (
          (function pe(q) {
            if (!h || !q || "object" != typeof q) return !1;
            try {
              h.call(q, h);
              try {
                c.call(q, c);
              } catch {
                return !0;
              }
              return q instanceof WeakMap;
            } catch {}
            return !1;
          })(ae)
        )
          return ie("WeakMap");
        if (
          (function xe(q) {
            if (!c || !q || "object" != typeof q) return !1;
            try {
              c.call(q, c);
              try {
                h.call(q, h);
              } catch {
                return !0;
              }
              return q instanceof WeakSet;
            } catch {}
            return !1;
          })(ae)
        )
          return ie("WeakSet");
        if (
          (function Be(q) {
            if (!f || !q || "object" != typeof q) return !1;
            try {
              return f.call(q), !0;
            } catch {}
            return !1;
          })(ae)
        )
          return ie("WeakRef");
        if (
          (function V(q) {
            return !(
              "[object Number]" !== le(q) ||
              (_ && "object" == typeof q && _ in q)
            );
          })(ae)
        )
          return te(We(Number(ae)));
        if (
          (function H(q) {
            if (!q || "object" != typeof q || !re) return !1;
            try {
              return re.call(q), !0;
            } catch {}
            return !1;
          })(ae)
        )
          return te(We(re.call(ae)));
        if (
          (function ee(q) {
            return !(
              "[object Boolean]" !== le(q) ||
              (_ && "object" == typeof q && _ in q)
            );
          })(ae)
        )
          return te(v.call(ae));
        if (
          (function B(q) {
            return !(
              "[object String]" !== le(q) ||
              (_ && "object" == typeof q && _ in q)
            );
          })(ae)
        )
          return te(We(String(ae)));
        if (
          !(function fe(q) {
            return !(
              "[object Date]" !== le(q) ||
              (_ && "object" == typeof q && _ in q)
            );
          })(ae) &&
          !be(ae)
        ) {
          var Ae = Le(ae, We),
            Ce = R
              ? R(ae) === Object.prototype
              : ae instanceof Object || ae.constructor === Object,
            Ze = ae instanceof Object ? "" : "null prototype",
            De =
              !Ce && _ && Object(ae) === ae && _ in ae
                ? A.call(le(ae), 8, -1)
                : Ze
                ? "Object"
                : "",
            Xe =
              (Ce || "function" != typeof ae.constructor
                ? ""
                : ae.constructor.name
                ? ae.constructor.name + " "
                : "") +
              (De || Ze
                ? "[" + D.call(O.call([], De || [], Ze || []), ": ") + "] "
                : "");
          return 0 === Ae.length
            ? Xe + "{}"
            : Ge
            ? Xe + "{" + Fe(Ae, Ge) + "}"
            : Xe + "{ " + D.call(Ae, ", ") + " }";
        }
        return String(ae);
      };
      var W =
        Object.prototype.hasOwnProperty ||
        function (q) {
          return q in this;
        };
      function ne(q, ae) {
        return W.call(q, ae);
      }
      function le(q) {
        return E.call(q);
      }
      function Se(q, ae) {
        if (q.indexOf) return q.indexOf(ae);
        for (var Pe = 0, ke = q.length; Pe < ke; Pe++)
          if (q[Pe] === ae) return Pe;
        return -1;
      }
      function Z(q, ae) {
        if (q.length > ae.maxStringLength) {
          var Pe = q.length - ae.maxStringLength,
            ke = "... " + Pe + " more character" + (Pe > 1 ? "s" : "");
          return Z(A.call(q, 0, ae.maxStringLength), ae) + ke;
        }
        return x(
          S.call(S.call(q, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, X),
          "single",
          ae
        );
      }
      function X(q) {
        var ae = q.charCodeAt(0),
          Pe = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[ae];
        return Pe
          ? "\\" + Pe
          : "\\x" + (ae < 16 ? "0" : "") + M.call(ae.toString(16));
      }
      function te(q) {
        return "Object(" + q + ")";
      }
      function ie(q) {
        return q + " { ? }";
      }
      function ve(q, ae, Pe, ke) {
        return (
          q + " (" + ae + ") {" + (ke ? Fe(Pe, ke) : D.call(Pe, ", ")) + "}"
        );
      }
      function Fe(q, ae) {
        if (0 === q.length) return "";
        var Pe = "\n" + ae.prev + ae.base;
        return Pe + D.call(q, "," + Pe) + "\n" + ae.prev;
      }
      function Le(q, ae) {
        var Pe = de(q),
          ke = [];
        if (Pe) {
          ke.length = q.length;
          for (var Ve = 0; Ve < q.length; Ve++)
            ke[Ve] = ne(q, Ve) ? ae(q[Ve], q) : "";
        }
        var He,
          Te = "function" == typeof ue ? ue(q) : [];
        if (m) {
          He = {};
          for (var tt = 0; tt < Te.length; tt++) He["$" + Te[tt]] = Te[tt];
        }
        for (var Ue in q)
          ne(q, Ue) &&
            ((Pe && String(Number(Ue)) === Ue && Ue < q.length) ||
              (m && He["$" + Ue] instanceof Symbol) ||
              (U.call(/[^\w$]/, Ue)
                ? ke.push(ae(Ue, q) + ": " + ae(q[Ue], q))
                : ke.push(Ue + ": " + ae(q[Ue], q))));
        if ("function" == typeof ue)
          for (var $e = 0; $e < Te.length; $e++)
            I.call(q, Te[$e]) &&
              ke.push("[" + ae(Te[$e]) + "]: " + ae(q[Te[$e]], q));
        return ke;
      }
    },
    24354: (L, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          Component: () => S,
          Fragment: () => A,
          cloneElement: () => be,
          createContext: () => Q,
          createElement: () => E,
          createRef: () => C,
          h: () => E,
          hydrate: () => fe,
          isValidElement: () => d,
          options: () => g,
          render: () => de,
          toChildArray: () => G,
        });
      var e,
        g,
        u,
        d,
        o,
        i,
        s,
        l,
        b,
        h = {},
        p = [],
        c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        n = Array.isArray;
      function f(B, V) {
        for (var ee in V) B[ee] = V[ee];
        return B;
      }
      function v(B) {
        var V = B.parentNode;
        V && V.removeChild(B);
      }
      function E(B, V, ee) {
        var oe,
          H,
          W,
          ne = {};
        for (W in V)
          "key" == W ? (oe = V[W]) : "ref" == W ? (H = V[W]) : (ne[W] = V[W]);
        if (
          (arguments.length > 2 &&
            (ne.children = arguments.length > 3 ? e.call(arguments, 2) : ee),
          "function" == typeof B && null != B.defaultProps)
        )
          for (W in B.defaultProps)
            void 0 === ne[W] && (ne[W] = B.defaultProps[W]);
        return w(B, ne, oe, H, null);
      }
      function w(B, V, ee, oe, H) {
        var W = {
          type: B,
          props: V,
          key: ee,
          ref: oe,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          __h: null,
          constructor: void 0,
          __v: H ?? ++u,
        };
        return null == H && null != g.vnode && g.vnode(W), W;
      }
      function C() {
        return { current: null };
      }
      function A(B) {
        return B.children;
      }
      function S(B, V) {
        (this.props = B), (this.context = V);
      }
      function M(B, V) {
        if (null == V) return B.__ ? M(B.__, B.__.__k.indexOf(B) + 1) : null;
        for (var ee; V < B.__k.length; V++)
          if (null != (ee = B.__k[V]) && null != ee.__e)
            return ee.__d || ee.__e;
        return "function" == typeof B.type ? M(B) : null;
      }
      function N(B) {
        var V, ee;
        if (null != (B = B.__) && null != B.__c) {
          for (B.__e = B.__c.base = null, V = 0; V < B.__k.length; V++)
            if (null != (ee = B.__k[V]) && null != ee.__e) {
              B.__e = B.__c.base = ee.__e;
              break;
            }
          return N(B);
        }
      }
      function U(B) {
        ((!B.__d && (B.__d = !0) && o.push(B) && !O.__r++) ||
          i !== g.debounceRendering) &&
          ((i = g.debounceRendering) || s)(O);
      }
      function O() {
        var B, V, ee, oe, H, W, ne, le, Re;
        for (o.sort(l); (B = o.shift()); )
          B.__d &&
            ((V = o.length),
            (oe = void 0),
            (H = void 0),
            (W = void 0),
            (le = (ne = (ee = B).__v).__e),
            (Re = ee.__P) &&
              ((oe = []),
              (H = []),
              ((W = f({}, ne)).__v = ne.__v + 1),
              T(
                Re,
                ne,
                W,
                ee.__n,
                void 0 !== Re.ownerSVGElement,
                null != ne.__h ? [le] : null,
                oe,
                le ?? M(ne),
                ne.__h,
                H
              ),
              F(oe, ne, H),
              ne.__e != le && N(ne)),
            o.length > V && o.sort(l));
        O.__r = 0;
      }
      function D(B, V, ee, oe, H, W, ne, le, Re, Se, Ee) {
        var pe,
          Be,
          _e,
          xe,
          Me,
          Z,
          X,
          te,
          ie,
          ve = 0,
          we = (oe && oe.__k) || p,
          Oe = we.length,
          Fe = Oe,
          Le = V.length;
        for (ee.__k = [], pe = 0; pe < Le; pe++)
          null !=
          (xe = ee.__k[pe] =
            null == (xe = V[pe]) ||
            "boolean" == typeof xe ||
            "function" == typeof xe
              ? null
              : "string" == typeof xe ||
                "number" == typeof xe ||
                "bigint" == typeof xe
              ? w(null, xe, null, null, xe)
              : n(xe)
              ? w(A, { children: xe }, null, null, null)
              : xe.__b > 0
              ? w(xe.type, xe.props, xe.key, xe.ref ? xe.ref : null, xe.__v)
              : xe)
            ? ((xe.__ = ee),
              (xe.__b = ee.__b + 1),
              -1 === (te = ue(xe, we, (X = pe + ve), Fe))
                ? (_e = h)
                : ((_e = we[te] || h), (we[te] = void 0), Fe--),
              T(B, xe, _e, H, W, ne, le, Re, Se, Ee),
              (Me = xe.__e),
              (Be = xe.ref) &&
                _e.ref != Be &&
                (_e.ref && $(_e.ref, null, xe), Ee.push(Be, xe.__c || Me, xe)),
              null != Me &&
                (null == Z && (Z = Me),
                (ie = _e === h || null === _e.__v)
                  ? -1 == te && ve--
                  : te !== X &&
                    (te === X + 1
                      ? ve++
                      : te > X
                      ? Fe > Le - X
                        ? (ve += te - X)
                        : ve--
                      : (ve = te < X && te == X - 1 ? te - X : 0)),
                (X = pe + ve),
                "function" != typeof xe.type || (te === X && _e.__k !== xe.__k)
                  ? "function" == typeof xe.type || (te === X && !ie)
                    ? void 0 !== xe.__d
                      ? ((Re = xe.__d), (xe.__d = void 0))
                      : (Re = Me.nextSibling)
                    : (Re = re(B, Me, Re))
                  : (Re = K(xe, Re, B)),
                "function" == typeof ee.type && (ee.__d = Re)))
            : (_e = we[pe]) &&
              null == _e.key &&
              _e.__e &&
              (_e.__e == Re && ((_e.__ = oe), (Re = M(_e))),
              x(_e, _e, !1),
              (we[pe] = null));
        for (ee.__e = Z, pe = Oe; pe--; )
          null != we[pe] &&
            ("function" == typeof ee.type &&
              null != we[pe].__e &&
              we[pe].__e == ee.__d &&
              (ee.__d = we[pe].__e.nextSibling),
            x(we[pe], we[pe]));
      }
      function K(B, V, ee) {
        for (var oe, H = B.__k, W = 0; H && W < H.length; W++)
          (oe = H[W]) &&
            ((oe.__ = B),
            (V =
              "function" == typeof oe.type ? K(oe, V, ee) : re(ee, oe.__e, V)));
        return V;
      }
      function G(B, V) {
        return (
          (V = V || []),
          null == B ||
            "boolean" == typeof B ||
            (n(B)
              ? B.some(function (ee) {
                  G(ee, V);
                })
              : V.push(B)),
          V
        );
      }
      function re(B, V, ee) {
        return (
          null == ee || ee.parentNode !== B
            ? B.insertBefore(V, null)
            : (V == ee && null != V.parentNode) || B.insertBefore(V, ee),
          V.nextSibling
        );
      }
      function ue(B, V, ee, oe) {
        var H = B.key,
          W = B.type,
          ne = ee - 1,
          le = ee + 1,
          Re = V[ee];
        if (null === Re || (Re && H == Re.key && W === Re.type)) return ee;
        if (oe > (null != Re ? 1 : 0))
          for (; ne >= 0 || le < V.length; ) {
            if (ne >= 0) {
              if ((Re = V[ne]) && H == Re.key && W === Re.type) return ne;
              ne--;
            }
            if (le < V.length) {
              if ((Re = V[le]) && H == Re.key && W === Re.type) return le;
              le++;
            }
          }
        return -1;
      }
      function m(B, V, ee) {
        "-" === V[0]
          ? B.setProperty(V, ee ?? "")
          : (B[V] =
              null == ee
                ? ""
                : "number" != typeof ee || c.test(V)
                ? ee
                : ee + "px");
      }
      function _(B, V, ee, oe, H) {
        var W;
        e: if ("style" === V)
          if ("string" == typeof ee) B.style.cssText = ee;
          else {
            if (("string" == typeof oe && (B.style.cssText = oe = ""), oe))
              for (V in oe) (ee && V in ee) || m(B.style, V, "");
            if (ee)
              for (V in ee) (oe && ee[V] === oe[V]) || m(B.style, V, ee[V]);
          }
        else if ("o" === V[0] && "n" === V[1])
          (W = V !== (V = V.replace(/(PointerCapture)$|Capture$/, "$1"))),
            (V = V.toLowerCase() in B ? V.toLowerCase().slice(2) : V.slice(2)),
            B.l || (B.l = {}),
            (B.l[V + W] = ee),
            ee
              ? oe
                ? (ee.u = oe.u)
                : ((ee.u = Date.now()), B.addEventListener(V, W ? R : I, W))
              : B.removeEventListener(V, W ? R : I, W);
        else if ("dangerouslySetInnerHTML" !== V) {
          if (H) V = V.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" !== V &&
            "height" !== V &&
            "href" !== V &&
            "list" !== V &&
            "form" !== V &&
            "tabIndex" !== V &&
            "download" !== V &&
            "rowSpan" !== V &&
            "colSpan" !== V &&
            "role" !== V &&
            V in B
          )
            try {
              B[V] = ee ?? "";
              break e;
            } catch {}
          "function" == typeof ee ||
            (null == ee || (!1 === ee && "-" !== V[4])
              ? B.removeAttribute(V)
              : B.setAttribute(V, ee));
        }
      }
      function I(B) {
        var V = this.l[B.type + !1];
        if (B.t) {
          if (B.t <= V.u) return;
        } else B.t = Date.now();
        return V(g.event ? g.event(B) : B);
      }
      function R(B) {
        return this.l[B.type + !0](g.event ? g.event(B) : B);
      }
      function T(B, V, ee, oe, H, W, ne, le, Re, Se) {
        var Ee,
          pe,
          Be,
          _e,
          xe,
          Me,
          Z,
          X,
          te,
          ie,
          ve,
          we,
          Oe,
          Fe,
          Le,
          q = V.type;
        if (void 0 !== V.constructor) return null;
        null != ee.__h &&
          ((Re = ee.__h), (le = V.__e = ee.__e), (V.__h = null), (W = [le])),
          (Ee = g.__b) && Ee(V);
        e: if ("function" == typeof q)
          try {
            if (
              ((X = V.props),
              (te = (Ee = q.contextType) && oe[Ee.__c]),
              (ie = Ee ? (te ? te.props.value : Ee.__) : oe),
              ee.__c
                ? (Z = (pe = V.__c = ee.__c).__ = pe.__E)
                : ("prototype" in q && q.prototype.render
                    ? (V.__c = pe = new q(X, ie))
                    : ((V.__c = pe = new S(X, ie)),
                      (pe.constructor = q),
                      (pe.render = z)),
                  te && te.sub(pe),
                  (pe.props = X),
                  pe.state || (pe.state = {}),
                  (pe.context = ie),
                  (pe.__n = oe),
                  (Be = pe.__d = !0),
                  (pe.__h = []),
                  (pe._sb = [])),
              null == pe.__s && (pe.__s = pe.state),
              null != q.getDerivedStateFromProps &&
                (pe.__s == pe.state && (pe.__s = f({}, pe.__s)),
                f(pe.__s, q.getDerivedStateFromProps(X, pe.__s))),
              (_e = pe.props),
              (xe = pe.state),
              (pe.__v = V),
              Be)
            )
              null == q.getDerivedStateFromProps &&
                null != pe.componentWillMount &&
                pe.componentWillMount(),
                null != pe.componentDidMount &&
                  pe.__h.push(pe.componentDidMount);
            else {
              if (
                (null == q.getDerivedStateFromProps &&
                  X !== _e &&
                  null != pe.componentWillReceiveProps &&
                  pe.componentWillReceiveProps(X, ie),
                !pe.__e &&
                  ((null != pe.shouldComponentUpdate &&
                    !1 === pe.shouldComponentUpdate(X, pe.__s, ie)) ||
                    V.__v === ee.__v))
              ) {
                for (
                  V.__v !== ee.__v &&
                    ((pe.props = X), (pe.state = pe.__s), (pe.__d = !1)),
                    V.__e = ee.__e,
                    V.__k = ee.__k,
                    V.__k.forEach(function (ae) {
                      ae && (ae.__ = V);
                    }),
                    ve = 0;
                  ve < pe._sb.length;
                  ve++
                )
                  pe.__h.push(pe._sb[ve]);
                (pe._sb = []), pe.__h.length && ne.push(pe);
                break e;
              }
              null != pe.componentWillUpdate &&
                pe.componentWillUpdate(X, pe.__s, ie),
                null != pe.componentDidUpdate &&
                  pe.__h.push(function () {
                    pe.componentDidUpdate(_e, xe, Me);
                  });
            }
            if (
              ((pe.context = ie),
              (pe.props = X),
              (pe.__P = B),
              (pe.__e = !1),
              (we = g.__r),
              (Oe = 0),
              "prototype" in q && q.prototype.render)
            ) {
              for (
                pe.state = pe.__s,
                  pe.__d = !1,
                  we && we(V),
                  Ee = pe.render(pe.props, pe.state, pe.context),
                  Fe = 0;
                Fe < pe._sb.length;
                Fe++
              )
                pe.__h.push(pe._sb[Fe]);
              pe._sb = [];
            } else
              do {
                (pe.__d = !1),
                  we && we(V),
                  (Ee = pe.render(pe.props, pe.state, pe.context)),
                  (pe.state = pe.__s);
              } while (pe.__d && ++Oe < 25);
            (pe.state = pe.__s),
              null != pe.getChildContext &&
                (oe = f(f({}, oe), pe.getChildContext())),
              Be ||
                null == pe.getSnapshotBeforeUpdate ||
                (Me = pe.getSnapshotBeforeUpdate(_e, xe)),
              D(
                B,
                n(
                  (Le =
                    null != Ee && Ee.type === A && null == Ee.key
                      ? Ee.props.children
                      : Ee)
                )
                  ? Le
                  : [Le],
                V,
                ee,
                oe,
                H,
                W,
                ne,
                le,
                Re,
                Se
              ),
              (pe.base = V.__e),
              (V.__h = null),
              pe.__h.length && ne.push(pe),
              Z && (pe.__E = pe.__ = null);
          } catch (ae) {
            (V.__v = null),
              (Re || null != W) &&
                ((V.__e = le), (V.__h = !!Re), (W[W.indexOf(le)] = null)),
              g.__e(ae, V, ee);
          }
        else
          null == W && V.__v === ee.__v
            ? ((V.__k = ee.__k), (V.__e = ee.__e))
            : (V.__e = (function J(B, V, ee, oe, H, W, ne, le, Re) {
                var Se,
                  Ee,
                  pe,
                  Be = ee.props,
                  _e = V.props,
                  xe = V.type,
                  Me = 0;
                if (("svg" === xe && (H = !0), null != W))
                  for (; Me < W.length; Me++)
                    if (
                      (Se = W[Me]) &&
                      "setAttribute" in Se == !!xe &&
                      (xe ? Se.localName === xe : 3 === Se.nodeType)
                    ) {
                      (B = Se), (W[Me] = null);
                      break;
                    }
                if (null == B) {
                  if (null === xe) return document.createTextNode(_e);
                  (B = H
                    ? document.createElementNS("http://www.w3.org/2000/svg", xe)
                    : document.createElement(xe, _e.is && _e)),
                    (W = null),
                    (le = !1);
                }
                if (null === xe)
                  Be === _e || (le && B.data === _e) || (B.data = _e);
                else {
                  if (
                    ((W = W && e.call(B.childNodes)),
                    (Ee = (Be = ee.props || h).dangerouslySetInnerHTML),
                    (pe = _e.dangerouslySetInnerHTML),
                    !le)
                  ) {
                    if (null != W)
                      for (Be = {}, Me = 0; Me < B.attributes.length; Me++)
                        Be[B.attributes[Me].name] = B.attributes[Me].value;
                    (pe || Ee) &&
                      ((pe &&
                        ((Ee && pe.__html == Ee.__html) ||
                          pe.__html === B.innerHTML)) ||
                        (B.innerHTML = (pe && pe.__html) || ""));
                  }
                  if (
                    ((function P(B, V, ee, oe, H) {
                      var W;
                      for (W in ee)
                        "children" === W ||
                          "key" === W ||
                          W in V ||
                          _(B, W, null, ee[W], oe);
                      for (W in V)
                        (H && "function" != typeof V[W]) ||
                          "children" === W ||
                          "key" === W ||
                          "value" === W ||
                          "checked" === W ||
                          ee[W] === V[W] ||
                          _(B, W, V[W], ee[W], oe);
                    })(B, _e, Be, H, le),
                    pe)
                  )
                    V.__k = [];
                  else if (
                    (D(
                      B,
                      n((Me = V.props.children)) ? Me : [Me],
                      V,
                      ee,
                      oe,
                      H && "foreignObject" !== xe,
                      W,
                      ne,
                      W ? W[0] : ee.__k && M(ee, 0),
                      le,
                      Re
                    ),
                    null != W)
                  )
                    for (Me = W.length; Me--; ) null != W[Me] && v(W[Me]);
                  le ||
                    ("value" in _e &&
                      void 0 !== (Me = _e.value) &&
                      (Me !== B.value ||
                        ("progress" === xe && !Me) ||
                        ("option" === xe && Me !== Be.value)) &&
                      _(B, "value", Me, Be.value, !1),
                    "checked" in _e &&
                      void 0 !== (Me = _e.checked) &&
                      Me !== B.checked &&
                      _(B, "checked", Me, Be.checked, !1));
                }
                return B;
              })(ee.__e, V, ee, oe, H, W, ne, Re, Se));
        (Ee = g.diffed) && Ee(V);
      }
      function F(B, V, ee) {
        for (var oe = 0; oe < ee.length; oe++) $(ee[oe], ee[++oe], ee[++oe]);
        g.__c && g.__c(V, B),
          B.some(function (H) {
            try {
              (B = H.__h),
                (H.__h = []),
                B.some(function (W) {
                  W.call(H);
                });
            } catch (W) {
              g.__e(W, H.__v);
            }
          });
      }
      function $(B, V, ee) {
        try {
          "function" == typeof B ? B(V) : (B.current = V);
        } catch (oe) {
          g.__e(oe, ee);
        }
      }
      function x(B, V, ee) {
        var oe, H;
        if (
          (g.unmount && g.unmount(B),
          (oe = B.ref) &&
            ((oe.current && oe.current !== B.__e) || $(oe, null, V)),
          null != (oe = B.__c))
        ) {
          if (oe.componentWillUnmount)
            try {
              oe.componentWillUnmount();
            } catch (W) {
              g.__e(W, V);
            }
          (oe.base = oe.__P = null), (B.__c = void 0);
        }
        if ((oe = B.__k))
          for (H = 0; H < oe.length; H++)
            oe[H] && x(oe[H], V, ee || "function" != typeof B.type);
        ee || null == B.__e || v(B.__e), (B.__ = B.__e = B.__d = void 0);
      }
      function z(B, V, ee) {
        return this.constructor(B, ee);
      }
      function de(B, V, ee) {
        var oe, H, W, ne;
        g.__ && g.__(B, V),
          (H = (oe = "function" == typeof ee) ? null : (ee && ee.__k) || V.__k),
          (W = []),
          (ne = []),
          T(
            V,
            (B = ((!oe && ee) || V).__k = E(A, null, [B])),
            H || h,
            h,
            void 0 !== V.ownerSVGElement,
            !oe && ee
              ? [ee]
              : H
              ? null
              : V.firstChild
              ? e.call(V.childNodes)
              : null,
            W,
            !oe && ee ? ee : H ? H.__e : V.firstChild,
            oe,
            ne
          ),
          F(W, B, ne);
      }
      function fe(B, V) {
        de(B, V, fe);
      }
      function be(B, V, ee) {
        var oe,
          H,
          W,
          ne,
          le = f({}, B.props);
        for (W in (B.type && B.type.defaultProps && (ne = B.type.defaultProps),
        V))
          "key" == W
            ? (oe = V[W])
            : "ref" == W
            ? (H = V[W])
            : (le[W] = void 0 === V[W] && void 0 !== ne ? ne[W] : V[W]);
        return (
          arguments.length > 2 &&
            (le.children = arguments.length > 3 ? e.call(arguments, 2) : ee),
          w(B.type, le, oe || B.key, H || B.ref, null)
        );
      }
      function Q(B, V) {
        var ee = {
          __c: (V = "__cC" + b++),
          __: B,
          Consumer: function (oe, H) {
            return oe.children(H);
          },
          Provider: function (oe) {
            var H, W;
            return (
              this.getChildContext ||
                ((H = []),
                ((W = {})[V] = this),
                (this.getChildContext = function () {
                  return W;
                }),
                (this.shouldComponentUpdate = function (ne) {
                  this.props.value !== ne.value &&
                    H.some(function (le) {
                      (le.__e = !0), U(le);
                    });
                }),
                (this.sub = function (ne) {
                  H.push(ne);
                  var le = ne.componentWillUnmount;
                  ne.componentWillUnmount = function () {
                    H.splice(H.indexOf(ne), 1), le && le.call(ne);
                  };
                })),
              oe.children
            );
          },
        };
        return (ee.Provider.__ = ee.Consumer.contextType = ee);
      }
      (e = p.slice),
        (g = {
          __e: function (B, V, ee, oe) {
            for (var H, W, ne; (V = V.__); )
              if ((H = V.__c) && !H.__)
                try {
                  if (
                    ((W = H.constructor) &&
                      null != W.getDerivedStateFromError &&
                      (H.setState(W.getDerivedStateFromError(B)), (ne = H.__d)),
                    null != H.componentDidCatch &&
                      (H.componentDidCatch(B, oe || {}), (ne = H.__d)),
                    ne)
                  )
                    return (H.__E = H);
                } catch (le) {
                  B = le;
                }
            throw B;
          },
        }),
        (u = 0),
        (d = function (B) {
          return null != B && void 0 === B.constructor;
        }),
        (S.prototype.setState = function (B, V) {
          var ee;
          (ee =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = f({}, this.state))),
            "function" == typeof B && (B = B(f({}, ee), this.props)),
            B && f(ee, B),
            null != B && this.__v && (V && this._sb.push(V), U(this));
        }),
        (S.prototype.forceUpdate = function (B) {
          this.__v && ((this.__e = !0), B && this.__h.push(B), U(this));
        }),
        (S.prototype.render = A),
        (o = []),
        (s =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (l = function (B, V) {
          return B.__v.__b - V.__v.__b;
        }),
        (O.__r = 0),
        (b = 0);
    },
    70491: (L, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          useCallback: () => N,
          useContext: () => U,
          useDebugValue: () => O,
          useEffect: () => w,
          useErrorBoundary: () => D,
          useId: () => K,
          useImperativeHandle: () => S,
          useLayoutEffect: () => C,
          useMemo: () => M,
          useReducer: () => E,
          useRef: () => A,
          useState: () => v,
        });
      var g,
        u,
        d,
        o,
        e = t(24354),
        i = 0,
        s = [],
        l = [],
        b = e.options.__b,
        h = e.options.__r,
        p = e.options.diffed,
        c = e.options.__c,
        n = e.options.unmount;
      function f(R, T) {
        e.options.__h && e.options.__h(u, R, i || T), (i = 0);
        var F = u.__H || (u.__H = { __: [], __h: [] });
        return R >= F.__.length && F.__.push({ __V: l }), F.__[R];
      }
      function v(R) {
        return (i = 1), E(I, R);
      }
      function E(R, T, F) {
        var J = f(g++, 2);
        if (
          ((J.t = R),
          !J.__c &&
            ((J.__ = [
              F ? F(T) : I(void 0, T),
              function (de) {
                var fe = J.__N ? J.__N[0] : J.__[0],
                  be = J.t(fe, de);
                fe !== be && ((J.__N = [be, J.__[1]]), J.__c.setState({}));
              },
            ]),
            (J.__c = u),
            !u.u))
        ) {
          var $ = function (de, fe, be) {
            if (!J.__c.__H) return !0;
            var Q = J.__c.__H.__.filter(function (V) {
              return V.__c;
            });
            if (
              Q.every(function (V) {
                return !V.__N;
              })
            )
              return !x || x.call(this, de, fe, be);
            var B = !1;
            return (
              Q.forEach(function (V) {
                if (V.__N) {
                  var ee = V.__[0];
                  (V.__ = V.__N), (V.__N = void 0), ee !== V.__[0] && (B = !0);
                }
              }),
              !(!B && J.__c.props === de) && (!x || x.call(this, de, fe, be))
            );
          };
          u.u = !0;
          var x = u.shouldComponentUpdate,
            z = u.componentWillUpdate;
          (u.componentWillUpdate = function (de, fe, be) {
            if (this.__e) {
              var Q = x;
              (x = void 0), $(de, fe, be), (x = Q);
            }
            z && z.call(this, de, fe, be);
          }),
            (u.shouldComponentUpdate = $);
        }
        return J.__N || J.__;
      }
      function w(R, T) {
        var F = f(g++, 3);
        !e.options.__s &&
          _(F.__H, T) &&
          ((F.__ = R), (F.i = T), u.__H.__h.push(F));
      }
      function C(R, T) {
        var F = f(g++, 4);
        !e.options.__s && _(F.__H, T) && ((F.__ = R), (F.i = T), u.__h.push(F));
      }
      function A(R) {
        return (
          (i = 5),
          M(function () {
            return { current: R };
          }, [])
        );
      }
      function S(R, T, F) {
        (i = 6),
          C(
            function () {
              return "function" == typeof R
                ? (R(T()),
                  function () {
                    return R(null);
                  })
                : R
                ? ((R.current = T()),
                  function () {
                    return (R.current = null);
                  })
                : void 0;
            },
            null == F ? F : F.concat(R)
          );
      }
      function M(R, T) {
        var F = f(g++, 7);
        return _(F.__H, T)
          ? ((F.__V = R()), (F.i = T), (F.__h = R), F.__V)
          : F.__;
      }
      function N(R, T) {
        return (
          (i = 8),
          M(function () {
            return R;
          }, T)
        );
      }
      function U(R) {
        var T = u.context[R.__c],
          F = f(g++, 9);
        return (
          (F.c = R),
          T ? (null == F.__ && ((F.__ = !0), T.sub(u)), T.props.value) : R.__
        );
      }
      function O(R, T) {
        e.options.useDebugValue && e.options.useDebugValue(T ? T(R) : R);
      }
      function D(R) {
        var T = f(g++, 10),
          F = v();
        return (
          (T.__ = R),
          u.componentDidCatch ||
            (u.componentDidCatch = function (J, $) {
              T.__ && T.__(J, $), F[1](J);
            }),
          [
            F[0],
            function () {
              F[1](void 0);
            },
          ]
        );
      }
      function K() {
        var R = f(g++, 11);
        if (!R.__) {
          for (var T = u.__v; null !== T && !T.__m && null !== T.__; ) T = T.__;
          var F = T.__m || (T.__m = [0, 0]);
          R.__ = "P" + F[0] + "-" + F[1]++;
        }
        return R.__;
      }
      function G() {
        for (var R; (R = s.shift()); )
          if (R.__P && R.__H)
            try {
              R.__H.__h.forEach(P), R.__H.__h.forEach(m), (R.__H.__h = []);
            } catch (T) {
              (R.__H.__h = []), e.options.__e(T, R.__v);
            }
      }
      (e.options.__b = function (R) {
        (u = null), b && b(R);
      }),
        (e.options.__r = function (R) {
          h && h(R), (g = 0);
          var T = (u = R.__c).__H;
          T &&
            (d === u
              ? ((T.__h = []),
                (u.__h = []),
                T.__.forEach(function (F) {
                  F.__N && (F.__ = F.__N), (F.__V = l), (F.__N = F.i = void 0);
                }))
              : (T.__h.forEach(P), T.__h.forEach(m), (T.__h = []), (g = 0))),
            (d = u);
        }),
        (e.options.diffed = function (R) {
          p && p(R);
          var T = R.__c;
          T &&
            T.__H &&
            (T.__H.__h.length &&
              ((1 !== s.push(T) && o === e.options.requestAnimationFrame) ||
                ((o = e.options.requestAnimationFrame) || ue)(G)),
            T.__H.__.forEach(function (F) {
              F.i && (F.__H = F.i),
                F.__V !== l && (F.__ = F.__V),
                (F.i = void 0),
                (F.__V = l);
            })),
            (d = u = null);
        }),
        (e.options.__c = function (R, T) {
          T.some(function (F) {
            try {
              F.__h.forEach(P),
                (F.__h = F.__h.filter(function (J) {
                  return !J.__ || m(J);
                }));
            } catch (J) {
              T.some(function ($) {
                $.__h && ($.__h = []);
              }),
                (T = []),
                e.options.__e(J, F.__v);
            }
          }),
            c && c(R, T);
        }),
        (e.options.unmount = function (R) {
          n && n(R);
          var T,
            F = R.__c;
          F &&
            F.__H &&
            (F.__H.__.forEach(function (J) {
              try {
                P(J);
              } catch ($) {
                T = $;
              }
            }),
            (F.__H = void 0),
            T && e.options.__e(T, F.__v));
        });
      var re = "function" == typeof requestAnimationFrame;
      function ue(R) {
        var T,
          F = function () {
            clearTimeout(J), re && cancelAnimationFrame(T), setTimeout(R);
          },
          J = setTimeout(F, 100);
        re && (T = requestAnimationFrame(F));
      }
      function P(R) {
        var T = u,
          F = R.__c;
        "function" == typeof F && ((R.__c = void 0), F()), (u = T);
      }
      function m(R) {
        var T = u;
        (R.__c = R.__()), (u = T);
      }
      function _(R, T) {
        return (
          !R ||
          R.length !== T.length ||
          T.some(function (F, J) {
            return F !== R[J];
          })
        );
      }
      function I(R, T) {
        return "function" == typeof T ? T(R) : T;
      }
    },
    97218: (L) => {
      "use strict";
      var t = {};
      function e(i, s, l) {
        l || (l = Error);
        var h = (function (p) {
          function c(n, f, v) {
            return (
              p.call(
                this,
                (function b(p, c, n) {
                  return "string" == typeof s ? s : s(p, c, n);
                })(n, f, v)
              ) || this
            );
          }
          return (
            (function r(i, s) {
              (i.prototype = Object.create(s.prototype)),
                (i.prototype.constructor = i),
                (i.__proto__ = s);
            })(c, p),
            c
          );
        })(l);
        (h.prototype.name = l.name), (h.prototype.code = i), (t[i] = h);
      }
      function g(i, s) {
        if (Array.isArray(i)) {
          var l = i.length;
          return (
            (i = i.map(function (b) {
              return String(b);
            })),
            l > 2
              ? "one of "
                  .concat(s, " ")
                  .concat(i.slice(0, l - 1).join(", "), ", or ") + i[l - 1]
              : 2 === l
              ? "one of ".concat(s, " ").concat(i[0], " or ").concat(i[1])
              : "of ".concat(s, " ").concat(i[0])
          );
        }
        return "of ".concat(s, " ").concat(String(i));
      }
      e(
        "ERR_INVALID_OPT_VALUE",
        function (i, s) {
          return 'The value "' + s + '" is invalid for option "' + i + '"';
        },
        TypeError
      ),
        e(
          "ERR_INVALID_ARG_TYPE",
          function (i, s, l) {
            var b, h;
            if (
              ("string" == typeof s &&
              (function u(i, s, l) {
                return i.substr(!l || l < 0 ? 0 : +l, s.length) === s;
              })(s, "not ")
                ? ((b = "must not be"), (s = s.replace(/^not /, "")))
                : (b = "must be"),
              (function d(i, s, l) {
                return (
                  (void 0 === l || l > i.length) && (l = i.length),
                  i.substring(l - s.length, l) === s
                );
              })(i, " argument"))
            )
              h = "The ".concat(i, " ").concat(b, " ").concat(g(s, "type"));
            else {
              var p = (function o(i, s, l) {
                return (
                  "number" != typeof l && (l = 0),
                  !(l + s.length > i.length) && -1 !== i.indexOf(s, l)
                );
              })(i, ".")
                ? "property"
                : "argument";
              h = 'The "'
                .concat(i, '" ')
                .concat(p, " ")
                .concat(b, " ")
                .concat(g(s, "type"));
            }
            return h + ". Received type ".concat(typeof l);
          },
          TypeError
        ),
        e("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        e("ERR_METHOD_NOT_IMPLEMENTED", function (i) {
          return "The " + i + " method is not implemented";
        }),
        e("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        e("ERR_STREAM_DESTROYED", function (i) {
          return "Cannot call " + i + " after a stream was destroyed";
        }),
        e("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        e("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        e("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        e(
          "ERR_STREAM_NULL_VALUES",
          "May not write null values to stream",
          TypeError
        ),
        e(
          "ERR_UNKNOWN_ENCODING",
          function (i) {
            return "Unknown encoding: " + i;
          },
          TypeError
        ),
        e(
          "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
          "stream.unshift() after end event"
        ),
        (L.exports.q = t);
    },
    70247: (L, r, t) => {
      "use strict";
      var e =
        Object.keys ||
        function (h) {
          var p = [];
          for (var c in h) p.push(c);
          return p;
        };
      L.exports = s;
      var g = t(80309),
        u = t(56563);
      t(66698)(s, g);
      for (var d = e(u.prototype), o = 0; o < d.length; o++) {
        var i = d[o];
        s.prototype[i] || (s.prototype[i] = u.prototype[i]);
      }
      function s(h) {
        if (!(this instanceof s)) return new s(h);
        g.call(this, h),
          u.call(this, h),
          (this.allowHalfOpen = !0),
          h &&
            (!1 === h.readable && (this.readable = !1),
            !1 === h.writable && (this.writable = !1),
            !1 === h.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", l)));
      }
      function l() {
        this._writableState.ended || process.nextTick(b, this);
      }
      function b(h) {
        h.end();
      }
      Object.defineProperty(s.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(s.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(s.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(s.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (p) {
            void 0 === this._readableState ||
              void 0 === this._writableState ||
              ((this._readableState.destroyed = p),
              (this._writableState.destroyed = p));
          },
        });
    },
    95096: (L, r, t) => {
      "use strict";
      L.exports = g;
      var e = t(16307);
      function g(u) {
        if (!(this instanceof g)) return new g(u);
        e.call(this, u);
      }
      t(66698)(g, e),
        (g.prototype._transform = function (u, d, o) {
          o(null, u);
        });
    },
    80309: (L, r, t) => {
      "use strict";
      var e;
      (L.exports = G), (G.ReadableState = K), t(82016);
      var h,
        u = function (W, ne) {
          return W.listeners(ne).length;
        },
        d = t(78240),
        o = t(39007).Buffer,
        i =
          (typeof global < "u"
            ? global
            : typeof window < "u"
            ? window
            : typeof self < "u"
            ? self
            : {}
          ).Uint8Array || function () {},
        b = t(94616);
      h = b && b.debuglog ? b.debuglog("stream") : function () {};
      var S,
        M,
        N,
        p = t(2960),
        c = t(65601),
        f = t(78782).getHighWaterMark,
        v = t(97218).q,
        E = v.ERR_INVALID_ARG_TYPE,
        w = v.ERR_STREAM_PUSH_AFTER_EOF,
        C = v.ERR_METHOD_NOT_IMPLEMENTED,
        A = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      t(66698)(G, d);
      var U = c.errorOrDestroy,
        O = ["error", "close", "destroy", "pause", "resume"];
      function K(H, W, ne) {
        (e = e || t(70247)),
          "boolean" != typeof ne && (ne = W instanceof e),
          (this.objectMode = !!(H = H || {}).objectMode),
          ne && (this.objectMode = this.objectMode || !!H.readableObjectMode),
          (this.highWaterMark = f(this, H, "readableHighWaterMark", ne)),
          (this.buffer = new p()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== H.emitClose),
          (this.autoDestroy = !!H.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = H.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          H.encoding &&
            (S || (S = t(72024).s),
            (this.decoder = new S(H.encoding)),
            (this.encoding = H.encoding));
      }
      function G(H) {
        if (((e = e || t(70247)), !(this instanceof G))) return new G(H);
        (this._readableState = new K(H, this, this instanceof e)),
          (this.readable = !0),
          H &&
            ("function" == typeof H.read && (this._read = H.read),
            "function" == typeof H.destroy && (this._destroy = H.destroy)),
          d.call(this);
      }
      function re(H, W, ne, le, Re) {
        h("readableAddChunk", W);
        var Ee,
          Se = H._readableState;
        if (null === W)
          (Se.reading = !1),
            (function R(H, W) {
              if ((h("onEofChunk"), !W.ended)) {
                if (W.decoder) {
                  var ne = W.decoder.end();
                  ne &&
                    ne.length &&
                    (W.buffer.push(ne),
                    (W.length += W.objectMode ? 1 : ne.length));
                }
                (W.ended = !0),
                  W.sync
                    ? T(H)
                    : ((W.needReadable = !1),
                      W.emittedReadable || ((W.emittedReadable = !0), F(H)));
              }
            })(H, Se);
        else if (
          (Re ||
            (Ee = (function P(H, W) {
              var ne;
              return (
                !(function l(H) {
                  return o.isBuffer(H) || H instanceof i;
                })(W) &&
                  "string" != typeof W &&
                  void 0 !== W &&
                  !H.objectMode &&
                  (ne = new E("chunk", ["string", "Buffer", "Uint8Array"], W)),
                ne
              );
            })(Se, W)),
          Ee)
        )
          U(H, Ee);
        else if (Se.objectMode || (W && W.length > 0))
          if (
            ("string" != typeof W &&
              !Se.objectMode &&
              Object.getPrototypeOf(W) !== o.prototype &&
              (W = (function s(H) {
                return o.from(H);
              })(W)),
            le)
          )
            Se.endEmitted ? U(H, new A()) : ue(H, Se, W, !0);
          else if (Se.ended) U(H, new w());
          else {
            if (Se.destroyed) return !1;
            (Se.reading = !1),
              Se.decoder && !ne
                ? ((W = Se.decoder.write(W)),
                  Se.objectMode || 0 !== W.length ? ue(H, Se, W, !1) : J(H, Se))
                : ue(H, Se, W, !1);
          }
        else le || ((Se.reading = !1), J(H, Se));
        return !Se.ended && (Se.length < Se.highWaterMark || 0 === Se.length);
      }
      function ue(H, W, ne, le) {
        W.flowing && 0 === W.length && !W.sync
          ? ((W.awaitDrain = 0), H.emit("data", ne))
          : ((W.length += W.objectMode ? 1 : ne.length),
            le ? W.buffer.unshift(ne) : W.buffer.push(ne),
            W.needReadable && T(H)),
          J(H, W);
      }
      Object.defineProperty(G.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (W) {
          this._readableState && (this._readableState.destroyed = W);
        },
      }),
        (G.prototype.destroy = c.destroy),
        (G.prototype._undestroy = c.undestroy),
        (G.prototype._destroy = function (H, W) {
          W(H);
        }),
        (G.prototype.push = function (H, W) {
          var le,
            ne = this._readableState;
          return (
            ne.objectMode
              ? (le = !0)
              : "string" == typeof H &&
                ((W = W || ne.defaultEncoding) !== ne.encoding &&
                  ((H = o.from(H, W)), (W = "")),
                (le = !0)),
            re(this, H, W, !1, le)
          );
        }),
        (G.prototype.unshift = function (H) {
          return re(this, H, null, !0, !1);
        }),
        (G.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (G.prototype.setEncoding = function (H) {
          S || (S = t(72024).s);
          var W = new S(H);
          (this._readableState.decoder = W),
            (this._readableState.encoding =
              this._readableState.decoder.encoding);
          for (var ne = this._readableState.buffer.head, le = ""; null !== ne; )
            (le += W.write(ne.data)), (ne = ne.next);
          return (
            this._readableState.buffer.clear(),
            "" !== le && this._readableState.buffer.push(le),
            (this._readableState.length = le.length),
            this
          );
        });
      var m = 1073741824;
      function I(H, W) {
        return H <= 0 || (0 === W.length && W.ended)
          ? 0
          : W.objectMode
          ? 1
          : H != H
          ? W.flowing && W.length
            ? W.buffer.head.data.length
            : W.length
          : (H > W.highWaterMark &&
              (W.highWaterMark = (function _(H) {
                return (
                  H >= m
                    ? (H = m)
                    : (H--,
                      (H |= H >>> 1),
                      (H |= H >>> 2),
                      (H |= H >>> 4),
                      (H |= H >>> 8),
                      (H |= H >>> 16),
                      H++),
                  H
                );
              })(H)),
            H <= W.length
              ? H
              : W.ended
              ? W.length
              : ((W.needReadable = !0), 0));
      }
      function T(H) {
        var W = H._readableState;
        h("emitReadable", W.needReadable, W.emittedReadable),
          (W.needReadable = !1),
          W.emittedReadable ||
            (h("emitReadable", W.flowing),
            (W.emittedReadable = !0),
            process.nextTick(F, H));
      }
      function F(H) {
        var W = H._readableState;
        h("emitReadable_", W.destroyed, W.length, W.ended),
          !W.destroyed &&
            (W.length || W.ended) &&
            (H.emit("readable"), (W.emittedReadable = !1)),
          (W.needReadable =
            !W.flowing && !W.ended && W.length <= W.highWaterMark),
          Q(H);
      }
      function J(H, W) {
        W.readingMore || ((W.readingMore = !0), process.nextTick($, H, W));
      }
      function $(H, W) {
        for (
          ;
          !W.reading &&
          !W.ended &&
          (W.length < W.highWaterMark || (W.flowing && 0 === W.length));

        ) {
          var ne = W.length;
          if ((h("maybeReadMore read 0"), H.read(0), ne === W.length)) break;
        }
        W.readingMore = !1;
      }
      function z(H) {
        var W = H._readableState;
        (W.readableListening = H.listenerCount("readable") > 0),
          W.resumeScheduled && !W.paused
            ? (W.flowing = !0)
            : H.listenerCount("data") > 0 && H.resume();
      }
      function de(H) {
        h("readable nexttick read 0"), H.read(0);
      }
      function be(H, W) {
        h("resume", W.reading),
          W.reading || H.read(0),
          (W.resumeScheduled = !1),
          H.emit("resume"),
          Q(H),
          W.flowing && !W.reading && H.read(0);
      }
      function Q(H) {
        var W = H._readableState;
        for (h("flow", W.flowing); W.flowing && null !== H.read(); );
      }
      function B(H, W) {
        return 0 === W.length
          ? null
          : (W.objectMode
              ? (ne = W.buffer.shift())
              : !H || H >= W.length
              ? ((ne = W.decoder
                  ? W.buffer.join("")
                  : 1 === W.buffer.length
                  ? W.buffer.first()
                  : W.buffer.concat(W.length)),
                W.buffer.clear())
              : (ne = W.buffer.consume(H, W.decoder)),
            ne);
        var ne;
      }
      function V(H) {
        var W = H._readableState;
        h("endReadable", W.endEmitted),
          W.endEmitted || ((W.ended = !0), process.nextTick(ee, W, H));
      }
      function ee(H, W) {
        if (
          (h("endReadableNT", H.endEmitted, H.length),
          !H.endEmitted &&
            0 === H.length &&
            ((H.endEmitted = !0),
            (W.readable = !1),
            W.emit("end"),
            H.autoDestroy))
        ) {
          var ne = W._writableState;
          (!ne || (ne.autoDestroy && ne.finished)) && W.destroy();
        }
      }
      function oe(H, W) {
        for (var ne = 0, le = H.length; ne < le; ne++)
          if (H[ne] === W) return ne;
        return -1;
      }
      (G.prototype.read = function (H) {
        h("read", H), (H = parseInt(H, 10));
        var W = this._readableState,
          ne = H;
        if (
          (0 !== H && (W.emittedReadable = !1),
          0 === H &&
            W.needReadable &&
            ((0 !== W.highWaterMark
              ? W.length >= W.highWaterMark
              : W.length > 0) ||
              W.ended))
        )
          return (
            h("read: emitReadable", W.length, W.ended),
            0 === W.length && W.ended ? V(this) : T(this),
            null
          );
        if (0 === (H = I(H, W)) && W.ended)
          return 0 === W.length && V(this), null;
        var Re,
          le = W.needReadable;
        return (
          h("need readable", le),
          (0 === W.length || W.length - H < W.highWaterMark) &&
            h("length less than watermark", (le = !0)),
          W.ended || W.reading
            ? h("reading or ended", (le = !1))
            : le &&
              (h("do read"),
              (W.reading = !0),
              (W.sync = !0),
              0 === W.length && (W.needReadable = !0),
              this._read(W.highWaterMark),
              (W.sync = !1),
              W.reading || (H = I(ne, W))),
          null === (Re = H > 0 ? B(H, W) : null)
            ? ((W.needReadable = W.length <= W.highWaterMark), (H = 0))
            : ((W.length -= H), (W.awaitDrain = 0)),
          0 === W.length &&
            (W.ended || (W.needReadable = !0), ne !== H && W.ended && V(this)),
          null !== Re && this.emit("data", Re),
          Re
        );
      }),
        (G.prototype._read = function (H) {
          U(this, new C("_read()"));
        }),
        (G.prototype.pipe = function (H, W) {
          var ne = this,
            le = this._readableState;
          switch (le.pipesCount) {
            case 0:
              le.pipes = H;
              break;
            case 1:
              le.pipes = [le.pipes, H];
              break;
            default:
              le.pipes.push(H);
          }
          (le.pipesCount += 1), h("pipe count=%d opts=%j", le.pipesCount, W);
          var Se =
            (W && !1 === W.end) || H === process.stdout || H === process.stderr
              ? ie
              : pe;
          function pe() {
            h("onend"), H.end();
          }
          le.endEmitted ? process.nextTick(Se) : ne.once("end", Se),
            H.on("unpipe", function Ee(ve, we) {
              h("onunpipe"),
                ve === ne &&
                  we &&
                  !1 === we.hasUnpiped &&
                  ((we.hasUnpiped = !0),
                  (function xe() {
                    h("cleanup"),
                      H.removeListener("close", X),
                      H.removeListener("finish", te),
                      H.removeListener("drain", Be),
                      H.removeListener("error", Z),
                      H.removeListener("unpipe", Ee),
                      ne.removeListener("end", pe),
                      ne.removeListener("end", ie),
                      ne.removeListener("data", Me),
                      (_e = !0),
                      le.awaitDrain &&
                        (!H._writableState || H._writableState.needDrain) &&
                        Be();
                  })());
            });
          var Be = (function x(H) {
            return function () {
              var ne = H._readableState;
              h("pipeOnDrain", ne.awaitDrain),
                ne.awaitDrain && ne.awaitDrain--,
                0 === ne.awaitDrain &&
                  u(H, "data") &&
                  ((ne.flowing = !0), Q(H));
            };
          })(ne);
          H.on("drain", Be);
          var _e = !1;
          function Me(ve) {
            h("ondata");
            var we = H.write(ve);
            h("dest.write", we),
              !1 === we &&
                (((1 === le.pipesCount && le.pipes === H) ||
                  (le.pipesCount > 1 && -1 !== oe(le.pipes, H))) &&
                  !_e &&
                  (h("false write response, pause", le.awaitDrain),
                  le.awaitDrain++),
                ne.pause());
          }
          function Z(ve) {
            h("onerror", ve),
              ie(),
              H.removeListener("error", Z),
              0 === u(H, "error") && U(H, ve);
          }
          function X() {
            H.removeListener("finish", te), ie();
          }
          function te() {
            h("onfinish"), H.removeListener("close", X), ie();
          }
          function ie() {
            h("unpipe"), ne.unpipe(H);
          }
          return (
            ne.on("data", Me),
            (function D(H, W, ne) {
              if ("function" == typeof H.prependListener)
                return H.prependListener(W, ne);
              H._events && H._events[W]
                ? Array.isArray(H._events[W])
                  ? H._events[W].unshift(ne)
                  : (H._events[W] = [ne, H._events[W]])
                : H.on(W, ne);
            })(H, "error", Z),
            H.once("close", X),
            H.once("finish", te),
            H.emit("pipe", ne),
            le.flowing || (h("pipe resume"), ne.resume()),
            H
          );
        }),
        (G.prototype.unpipe = function (H) {
          var W = this._readableState,
            ne = { hasUnpiped: !1 };
          if (0 === W.pipesCount) return this;
          if (1 === W.pipesCount)
            return (
              (H && H !== W.pipes) ||
                (H || (H = W.pipes),
                (W.pipes = null),
                (W.pipesCount = 0),
                (W.flowing = !1),
                H && H.emit("unpipe", this, ne)),
              this
            );
          if (!H) {
            var le = W.pipes,
              Re = W.pipesCount;
            (W.pipes = null), (W.pipesCount = 0), (W.flowing = !1);
            for (var Se = 0; Se < Re; Se++)
              le[Se].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var Ee = oe(W.pipes, H);
          return (
            -1 === Ee ||
              (W.pipes.splice(Ee, 1),
              (W.pipesCount -= 1),
              1 === W.pipesCount && (W.pipes = W.pipes[0]),
              H.emit("unpipe", this, ne)),
            this
          );
        }),
        (G.prototype.addListener = G.prototype.on =
          function (H, W) {
            var ne = d.prototype.on.call(this, H, W),
              le = this._readableState;
            return (
              "data" === H
                ? ((le.readableListening = this.listenerCount("readable") > 0),
                  !1 !== le.flowing && this.resume())
                : "readable" === H &&
                  !le.endEmitted &&
                  !le.readableListening &&
                  ((le.readableListening = le.needReadable = !0),
                  (le.flowing = !1),
                  (le.emittedReadable = !1),
                  h("on readable", le.length, le.reading),
                  le.length
                    ? T(this)
                    : le.reading || process.nextTick(de, this)),
              ne
            );
          }),
        (G.prototype.removeListener = function (H, W) {
          var ne = d.prototype.removeListener.call(this, H, W);
          return "readable" === H && process.nextTick(z, this), ne;
        }),
        (G.prototype.removeAllListeners = function (H) {
          var W = d.prototype.removeAllListeners.apply(this, arguments);
          return (
            ("readable" === H || void 0 === H) && process.nextTick(z, this), W
          );
        }),
        (G.prototype.resume = function () {
          var H = this._readableState;
          return (
            H.flowing ||
              (h("resume"),
              (H.flowing = !H.readableListening),
              (function fe(H, W) {
                W.resumeScheduled ||
                  ((W.resumeScheduled = !0), process.nextTick(be, H, W));
              })(this, H)),
            (H.paused = !1),
            this
          );
        }),
        (G.prototype.pause = function () {
          return (
            h("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (h("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (G.prototype.wrap = function (H) {
          var W = this,
            ne = this._readableState,
            le = !1;
          for (var Re in (H.on("end", function () {
            if ((h("wrapped end"), ne.decoder && !ne.ended)) {
              var Ee = ne.decoder.end();
              Ee && Ee.length && W.push(Ee);
            }
            W.push(null);
          }),
          H.on("data", function (Ee) {
            h("wrapped data"),
              ne.decoder && (Ee = ne.decoder.write(Ee)),
              (ne.objectMode && null == Ee) ||
                !(ne.objectMode || (Ee && Ee.length)) ||
                W.push(Ee) ||
                ((le = !0), H.pause());
          }),
          H))
            void 0 === this[Re] &&
              "function" == typeof H[Re] &&
              (this[Re] = (function (pe) {
                return function () {
                  return H[pe].apply(H, arguments);
                };
              })(Re));
          for (var Se = 0; Se < O.length; Se++)
            H.on(O[Se], this.emit.bind(this, O[Se]));
          return (
            (this._read = function (Ee) {
              h("wrapped _read", Ee), le && ((le = !1), H.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (G.prototype[Symbol.asyncIterator] = function () {
            return void 0 === M && (M = t(10457)), M(this);
          }),
        Object.defineProperty(G.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(G.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(G.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (W) {
            this._readableState && (this._readableState.flowing = W);
          },
        }),
        (G._fromList = B),
        Object.defineProperty(G.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (G.from = function (H, W) {
            return void 0 === N && (N = t(33335)), N(G, H, W);
          });
    },
    16307: (L, r, t) => {
      "use strict";
      L.exports = l;
      var e = t(97218).q,
        g = e.ERR_METHOD_NOT_IMPLEMENTED,
        u = e.ERR_MULTIPLE_CALLBACK,
        d = e.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        o = e.ERR_TRANSFORM_WITH_LENGTH_0,
        i = t(70247);
      function s(p, c) {
        var n = this._transformState;
        n.transforming = !1;
        var f = n.writecb;
        if (null === f) return this.emit("error", new u());
        (n.writechunk = null),
          (n.writecb = null),
          null != c && this.push(c),
          f(p);
        var v = this._readableState;
        (v.reading = !1),
          (v.needReadable || v.length < v.highWaterMark) &&
            this._read(v.highWaterMark);
      }
      function l(p) {
        if (!(this instanceof l)) return new l(p);
        i.call(this, p),
          (this._transformState = {
            afterTransform: s.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null,
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          p &&
            ("function" == typeof p.transform &&
              (this._transform = p.transform),
            "function" == typeof p.flush && (this._flush = p.flush)),
          this.on("prefinish", b);
      }
      function b() {
        var p = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? h(this, null, null)
          : this._flush(function (c, n) {
              h(p, c, n);
            });
      }
      function h(p, c, n) {
        if (c) return p.emit("error", c);
        if ((null != n && p.push(n), p._writableState.length)) throw new o();
        if (p._transformState.transforming) throw new d();
        return p.push(null);
      }
      t(66698)(l, i),
        (l.prototype.push = function (p, c) {
          return (
            (this._transformState.needTransform = !1),
            i.prototype.push.call(this, p, c)
          );
        }),
        (l.prototype._transform = function (p, c, n) {
          n(new g("_transform()"));
        }),
        (l.prototype._write = function (p, c, n) {
          var f = this._transformState;
          if (
            ((f.writecb = n),
            (f.writechunk = p),
            (f.writeencoding = c),
            !f.transforming)
          ) {
            var v = this._readableState;
            (f.needTransform || v.needReadable || v.length < v.highWaterMark) &&
              this._read(v.highWaterMark);
          }
        }),
        (l.prototype._read = function (p) {
          var c = this._transformState;
          null === c.writechunk || c.transforming
            ? (c.needTransform = !0)
            : ((c.transforming = !0),
              this._transform(c.writechunk, c.writeencoding, c.afterTransform));
        }),
        (l.prototype._destroy = function (p, c) {
          i.prototype._destroy.call(this, p, function (n) {
            c(n);
          });
        });
    },
    56563: (L, r, t) => {
      "use strict";
      function g(Q) {
        var B = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function be(Q, B, V) {
              var ee = Q.entry;
              for (Q.entry = null; ee; ) {
                var oe = ee.callback;
                B.pendingcb--, oe(V), (ee = ee.next);
              }
              B.corkedRequestsFree.next = Q;
            })(B, Q);
          });
      }
      var u;
      (L.exports = K), (K.WritableState = O);
      var D,
        d = { deprecate: t(90496) },
        o = t(78240),
        i = t(39007).Buffer,
        s =
          (typeof global < "u"
            ? global
            : typeof window < "u"
            ? window
            : typeof self < "u"
            ? self
            : {}
          ).Uint8Array || function () {},
        h = t(65601),
        c = t(78782).getHighWaterMark,
        n = t(97218).q,
        f = n.ERR_INVALID_ARG_TYPE,
        v = n.ERR_METHOD_NOT_IMPLEMENTED,
        E = n.ERR_MULTIPLE_CALLBACK,
        w = n.ERR_STREAM_CANNOT_PIPE,
        C = n.ERR_STREAM_DESTROYED,
        A = n.ERR_STREAM_NULL_VALUES,
        S = n.ERR_STREAM_WRITE_AFTER_END,
        M = n.ERR_UNKNOWN_ENCODING,
        N = h.errorOrDestroy;
      function U() {}
      function O(Q, B, V) {
        (u = u || t(70247)),
          "boolean" != typeof V && (V = B instanceof u),
          (this.objectMode = !!(Q = Q || {}).objectMode),
          V && (this.objectMode = this.objectMode || !!Q.writableObjectMode),
          (this.highWaterMark = c(this, Q, "writableHighWaterMark", V)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1),
          (this.decodeStrings = !(!1 === Q.decodeStrings)),
          (this.defaultEncoding = Q.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (oe) {
            !(function R(Q, B) {
              var V = Q._writableState,
                ee = V.sync,
                oe = V.writecb;
              if ("function" != typeof oe) throw new E();
              if (
                ((function I(Q) {
                  (Q.writing = !1),
                    (Q.writecb = null),
                    (Q.length -= Q.writelen),
                    (Q.writelen = 0);
                })(V),
                B)
              )
                !(function _(Q, B, V, ee, oe) {
                  --B.pendingcb,
                    V
                      ? (process.nextTick(oe, ee),
                        process.nextTick(de, Q, B),
                        (Q._writableState.errorEmitted = !0),
                        N(Q, ee))
                      : (oe(ee),
                        (Q._writableState.errorEmitted = !0),
                        N(Q, ee),
                        de(Q, B));
                })(Q, V, ee, B, oe);
              else {
                var H = $(V) || Q.destroyed;
                !H &&
                  !V.corked &&
                  !V.bufferProcessing &&
                  V.bufferedRequest &&
                  J(Q, V),
                  ee ? process.nextTick(T, Q, V, H, oe) : T(Q, V, H, oe);
              }
            })(B, oe);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== Q.emitClose),
          (this.autoDestroy = !!Q.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new g(this));
      }
      function K(Q) {
        var B = this instanceof (u = u || t(70247));
        if (!B && !D.call(K, this)) return new K(Q);
        (this._writableState = new O(Q, this, B)),
          (this.writable = !0),
          Q &&
            ("function" == typeof Q.write && (this._write = Q.write),
            "function" == typeof Q.writev && (this._writev = Q.writev),
            "function" == typeof Q.destroy && (this._destroy = Q.destroy),
            "function" == typeof Q.final && (this._final = Q.final)),
          o.call(this);
      }
      function m(Q, B, V, ee, oe, H, W) {
        (B.writelen = ee),
          (B.writecb = W),
          (B.writing = !0),
          (B.sync = !0),
          B.destroyed
            ? B.onwrite(new C("write"))
            : V
            ? Q._writev(oe, B.onwrite)
            : Q._write(oe, H, B.onwrite),
          (B.sync = !1);
      }
      function T(Q, B, V, ee) {
        V ||
          (function F(Q, B) {
            0 === B.length &&
              B.needDrain &&
              ((B.needDrain = !1), Q.emit("drain"));
          })(Q, B),
          B.pendingcb--,
          ee(),
          de(Q, B);
      }
      function J(Q, B) {
        B.bufferProcessing = !0;
        var V = B.bufferedRequest;
        if (Q._writev && V && V.next) {
          var oe = new Array(B.bufferedRequestCount),
            H = B.corkedRequestsFree;
          H.entry = V;
          for (var W = 0, ne = !0; V; )
            (oe[W] = V), V.isBuf || (ne = !1), (V = V.next), (W += 1);
          (oe.allBuffers = ne),
            m(Q, B, !0, B.length, oe, "", H.finish),
            B.pendingcb++,
            (B.lastBufferedRequest = null),
            H.next
              ? ((B.corkedRequestsFree = H.next), (H.next = null))
              : (B.corkedRequestsFree = new g(B)),
            (B.bufferedRequestCount = 0);
        } else {
          for (; V; ) {
            var le = V.chunk;
            if (
              (m(
                Q,
                B,
                !1,
                B.objectMode ? 1 : le.length,
                le,
                V.encoding,
                V.callback
              ),
              (V = V.next),
              B.bufferedRequestCount--,
              B.writing)
            )
              break;
          }
          null === V && (B.lastBufferedRequest = null);
        }
        (B.bufferedRequest = V), (B.bufferProcessing = !1);
      }
      function $(Q) {
        return (
          Q.ending &&
          0 === Q.length &&
          null === Q.bufferedRequest &&
          !Q.finished &&
          !Q.writing
        );
      }
      function x(Q, B) {
        Q._final(function (V) {
          B.pendingcb--,
            V && N(Q, V),
            (B.prefinished = !0),
            Q.emit("prefinish"),
            de(Q, B);
        });
      }
      function de(Q, B) {
        var V = $(B);
        if (
          V &&
          ((function z(Q, B) {
            !B.prefinished &&
              !B.finalCalled &&
              ("function" != typeof Q._final || B.destroyed
                ? ((B.prefinished = !0), Q.emit("prefinish"))
                : (B.pendingcb++,
                  (B.finalCalled = !0),
                  process.nextTick(x, Q, B)));
          })(Q, B),
          0 === B.pendingcb &&
            ((B.finished = !0), Q.emit("finish"), B.autoDestroy))
        ) {
          var ee = Q._readableState;
          (!ee || (ee.autoDestroy && ee.endEmitted)) && Q.destroy();
        }
        return V;
      }
      t(66698)(K, o),
        (O.prototype.getBuffer = function () {
          for (var B = this.bufferedRequest, V = []; B; )
            V.push(B), (B = B.next);
          return V;
        }),
        (function () {
          try {
            Object.defineProperty(O.prototype, "buffer", {
              get: d.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((D = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(K, Symbol.hasInstance, {
              value: function (B) {
                return (
                  !!D.call(this, B) ||
                  (this === K && B && B._writableState instanceof O)
                );
              },
            }))
          : (D = function (B) {
              return B instanceof this;
            }),
        (K.prototype.pipe = function () {
          N(this, new w());
        }),
        (K.prototype.write = function (Q, B, V) {
          var ee = this._writableState,
            oe = !1,
            H =
              !ee.objectMode &&
              (function b(Q) {
                return i.isBuffer(Q) || Q instanceof s;
              })(Q);
          return (
            H &&
              !i.isBuffer(Q) &&
              (Q = (function l(Q) {
                return i.from(Q);
              })(Q)),
            "function" == typeof B && ((V = B), (B = null)),
            H ? (B = "buffer") : B || (B = ee.defaultEncoding),
            "function" != typeof V && (V = U),
            ee.ending
              ? (function G(Q, B) {
                  var V = new S();
                  N(Q, V), process.nextTick(B, V);
                })(this, V)
              : (H ||
                  (function re(Q, B, V, ee) {
                    var oe;
                    return (
                      null === V
                        ? (oe = new A())
                        : "string" != typeof V &&
                          !B.objectMode &&
                          (oe = new f("chunk", ["string", "Buffer"], V)),
                      !oe || (N(Q, oe), process.nextTick(ee, oe), !1)
                    );
                  })(this, ee, Q, V)) &&
                (ee.pendingcb++,
                (oe = (function P(Q, B, V, ee, oe, H) {
                  if (!V) {
                    var W = (function ue(Q, B, V) {
                      return (
                        !Q.objectMode &&
                          !1 !== Q.decodeStrings &&
                          "string" == typeof B &&
                          (B = i.from(B, V)),
                        B
                      );
                    })(B, ee, oe);
                    ee !== W && ((V = !0), (oe = "buffer"), (ee = W));
                  }
                  var ne = B.objectMode ? 1 : ee.length;
                  B.length += ne;
                  var le = B.length < B.highWaterMark;
                  if ((le || (B.needDrain = !0), B.writing || B.corked)) {
                    var Re = B.lastBufferedRequest;
                    (B.lastBufferedRequest = {
                      chunk: ee,
                      encoding: oe,
                      isBuf: V,
                      callback: H,
                      next: null,
                    }),
                      Re
                        ? (Re.next = B.lastBufferedRequest)
                        : (B.bufferedRequest = B.lastBufferedRequest),
                      (B.bufferedRequestCount += 1);
                  } else m(Q, B, !1, ne, ee, oe, H);
                  return le;
                })(this, ee, H, Q, B, V))),
            oe
          );
        }),
        (K.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (K.prototype.uncork = function () {
          var Q = this._writableState;
          Q.corked &&
            (Q.corked--,
            !Q.writing &&
              !Q.corked &&
              !Q.bufferProcessing &&
              Q.bufferedRequest &&
              J(this, Q));
        }),
        (K.prototype.setDefaultEncoding = function (B) {
          if (
            ("string" == typeof B && (B = B.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((B + "").toLowerCase()) > -1
            ))
          )
            throw new M(B);
          return (this._writableState.defaultEncoding = B), this;
        }),
        Object.defineProperty(K.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(K.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (K.prototype._write = function (Q, B, V) {
          V(new v("_write()"));
        }),
        (K.prototype._writev = null),
        (K.prototype.end = function (Q, B, V) {
          var ee = this._writableState;
          return (
            "function" == typeof Q
              ? ((V = Q), (Q = null), (B = null))
              : "function" == typeof B && ((V = B), (B = null)),
            null != Q && this.write(Q, B),
            ee.corked && ((ee.corked = 1), this.uncork()),
            ee.ending ||
              (function fe(Q, B, V) {
                (B.ending = !0),
                  de(Q, B),
                  V && (B.finished ? process.nextTick(V) : Q.once("finish", V)),
                  (B.ended = !0),
                  (Q.writable = !1);
              })(this, ee, V),
            this
          );
        }),
        Object.defineProperty(K.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(K.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (B) {
            this._writableState && (this._writableState.destroyed = B);
          },
        }),
        (K.prototype.destroy = h.destroy),
        (K.prototype._undestroy = h.undestroy),
        (K.prototype._destroy = function (Q, B) {
          B(Q);
        });
    },
    10457: (L, r, t) => {
      "use strict";
      var e;
      function g(S, M, N) {
        return (
          (M = (function u(S) {
            var M = (function d(S, M) {
              if ("object" != typeof S || null === S) return S;
              var N = S[Symbol.toPrimitive];
              if (void 0 !== N) {
                var U = N.call(S, M || "default");
                if ("object" != typeof U) return U;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === M ? String : Number)(S);
            })(S, "string");
            return "symbol" == typeof M ? M : String(M);
          })(M)),
          M in S
            ? Object.defineProperty(S, M, {
                value: N,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (S[M] = N),
          S
        );
      }
      var o = t(54618),
        i = Symbol("lastResolve"),
        s = Symbol("lastReject"),
        l = Symbol("error"),
        b = Symbol("ended"),
        h = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        c = Symbol("stream");
      function n(S, M) {
        return { value: S, done: M };
      }
      function f(S) {
        var M = S[i];
        if (null !== M) {
          var N = S[c].read();
          null !== N &&
            ((S[h] = null), (S[i] = null), (S[s] = null), M(n(N, !1)));
        }
      }
      function v(S) {
        process.nextTick(f, S);
      }
      var w = Object.getPrototypeOf(function () {}),
        C = Object.setPrototypeOf(
          (g(
            (e = {
              get stream() {
                return this[c];
              },
              next: function () {
                var M = this,
                  N = this[l];
                if (null !== N) return Promise.reject(N);
                if (this[b]) return Promise.resolve(n(void 0, !0));
                if (this[c].destroyed)
                  return new Promise(function (K, G) {
                    process.nextTick(function () {
                      M[l] ? G(M[l]) : K(n(void 0, !0));
                    });
                  });
                var O,
                  U = this[h];
                if (U)
                  O = new Promise(
                    (function E(S, M) {
                      return function (N, U) {
                        S.then(function () {
                          M[b] ? N(n(void 0, !0)) : M[p](N, U);
                        }, U);
                      };
                    })(U, this)
                  );
                else {
                  var D = this[c].read();
                  if (null !== D) return Promise.resolve(n(D, !1));
                  O = new Promise(this[p]);
                }
                return (this[h] = O), O;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          g(e, "return", function () {
            var M = this;
            return new Promise(function (N, U) {
              M[c].destroy(null, function (O) {
                O ? U(O) : N(n(void 0, !0));
              });
            });
          }),
          e),
          w
        );
      L.exports = function (M) {
        var N,
          U = Object.create(
            C,
            (g((N = {}), c, { value: M, writable: !0 }),
            g(N, i, { value: null, writable: !0 }),
            g(N, s, { value: null, writable: !0 }),
            g(N, l, { value: null, writable: !0 }),
            g(N, b, { value: M._readableState.endEmitted, writable: !0 }),
            g(N, p, {
              value: function (D, K) {
                var G = U[c].read();
                G
                  ? ((U[h] = null), (U[i] = null), (U[s] = null), D(n(G, !1)))
                  : ((U[i] = D), (U[s] = K));
              },
              writable: !0,
            }),
            N)
          );
        return (
          (U[h] = null),
          o(M, function (O) {
            if (O && "ERR_STREAM_PREMATURE_CLOSE" !== O.code) {
              var D = U[s];
              return (
                null !== D &&
                  ((U[h] = null), (U[i] = null), (U[s] = null), D(O)),
                void (U[l] = O)
              );
            }
            var K = U[i];
            null !== K &&
              ((U[h] = null), (U[i] = null), (U[s] = null), K(n(void 0, !0))),
              (U[b] = !0);
          }),
          M.on("readable", v.bind(null, U)),
          U
        );
      };
    },
    2960: (L, r, t) => {
      "use strict";
      function e(v, E) {
        var w = Object.keys(v);
        if (Object.getOwnPropertySymbols) {
          var C = Object.getOwnPropertySymbols(v);
          E &&
            (C = C.filter(function (A) {
              return Object.getOwnPropertyDescriptor(v, A).enumerable;
            })),
            w.push.apply(w, C);
        }
        return w;
      }
      function g(v) {
        for (var E = 1; E < arguments.length; E++) {
          var w = null != arguments[E] ? arguments[E] : {};
          E % 2
            ? e(Object(w), !0).forEach(function (C) {
                u(v, C, w[C]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(v, Object.getOwnPropertyDescriptors(w))
            : e(Object(w)).forEach(function (C) {
                Object.defineProperty(
                  v,
                  C,
                  Object.getOwnPropertyDescriptor(w, C)
                );
              });
        }
        return v;
      }
      function u(v, E, w) {
        return (
          (E = s(E)) in v
            ? Object.defineProperty(v, E, {
                value: w,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (v[E] = w),
          v
        );
      }
      function o(v, E) {
        for (var w = 0; w < E.length; w++) {
          var C = E[w];
          (C.enumerable = C.enumerable || !1),
            (C.configurable = !0),
            "value" in C && (C.writable = !0),
            Object.defineProperty(v, s(C.key), C);
        }
      }
      function s(v) {
        var E = (function l(v, E) {
          if ("object" != typeof v || null === v) return v;
          var w = v[Symbol.toPrimitive];
          if (void 0 !== w) {
            var C = w.call(v, E || "default");
            if ("object" != typeof C) return C;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === E ? String : Number)(v);
        })(v, "string");
        return "symbol" == typeof E ? E : String(E);
      }
      var h = t(39007).Buffer,
        c = t(52361).inspect,
        n = (c && c.custom) || "inspect";
      function f(v, E, w) {
        h.prototype.copy.call(v, E, w);
      }
      L.exports = (function () {
        function v() {
          (function d(v, E) {
            if (!(v instanceof E))
              throw new TypeError("Cannot call a class as a function");
          })(this, v),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        return (
          (function i(v, E, w) {
            E && o(v.prototype, E),
              w && o(v, w),
              Object.defineProperty(v, "prototype", { writable: !1 });
          })(v, [
            {
              key: "push",
              value: function (w) {
                var C = { data: w, next: null };
                this.length > 0 ? (this.tail.next = C) : (this.head = C),
                  (this.tail = C),
                  ++this.length;
              },
            },
            {
              key: "unshift",
              value: function (w) {
                var C = { data: w, next: this.head };
                0 === this.length && (this.tail = C),
                  (this.head = C),
                  ++this.length;
              },
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var w = this.head.data;
                  return (
                    (this.head =
                      1 === this.length ? (this.tail = null) : this.head.next),
                    --this.length,
                    w
                  );
                }
              },
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              },
            },
            {
              key: "join",
              value: function (w) {
                if (0 === this.length) return "";
                for (var C = this.head, A = "" + C.data; (C = C.next); )
                  A += w + C.data;
                return A;
              },
            },
            {
              key: "concat",
              value: function (w) {
                if (0 === this.length) return h.alloc(0);
                for (var C = h.allocUnsafe(w >>> 0), A = this.head, S = 0; A; )
                  f(A.data, C, S), (S += A.data.length), (A = A.next);
                return C;
              },
            },
            {
              key: "consume",
              value: function (w, C) {
                var A;
                return (
                  w < this.head.data.length
                    ? ((A = this.head.data.slice(0, w)),
                      (this.head.data = this.head.data.slice(w)))
                    : (A =
                        w === this.head.data.length
                          ? this.shift()
                          : C
                          ? this._getString(w)
                          : this._getBuffer(w)),
                  A
                );
              },
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              },
            },
            {
              key: "_getString",
              value: function (w) {
                var C = this.head,
                  A = 1,
                  S = C.data;
                for (w -= S.length; (C = C.next); ) {
                  var M = C.data,
                    N = w > M.length ? M.length : w;
                  if (
                    ((S += N === M.length ? M : M.slice(0, w)), 0 == (w -= N))
                  ) {
                    N === M.length
                      ? (++A,
                        (this.head = C.next ? C.next : (this.tail = null)))
                      : ((this.head = C), (C.data = M.slice(N)));
                    break;
                  }
                  ++A;
                }
                return (this.length -= A), S;
              },
            },
            {
              key: "_getBuffer",
              value: function (w) {
                var C = h.allocUnsafe(w),
                  A = this.head,
                  S = 1;
                for (A.data.copy(C), w -= A.data.length; (A = A.next); ) {
                  var M = A.data,
                    N = w > M.length ? M.length : w;
                  if ((M.copy(C, C.length - w, 0, N), 0 == (w -= N))) {
                    N === M.length
                      ? (++S,
                        (this.head = A.next ? A.next : (this.tail = null)))
                      : ((this.head = A), (A.data = M.slice(N)));
                    break;
                  }
                  ++S;
                }
                return (this.length -= S), C;
              },
            },
            {
              key: n,
              value: function (w, C) {
                return c(
                  this,
                  g(g({}, C), {}, { depth: 0, customInspect: !1 })
                );
              },
            },
          ]),
          v
        );
      })();
    },
    65601: (L) => {
      "use strict";
      function t(o, i) {
        u(o, i), e(o);
      }
      function e(o) {
        (o._writableState && !o._writableState.emitClose) ||
          (o._readableState && !o._readableState.emitClose) ||
          o.emit("close");
      }
      function u(o, i) {
        o.emit("error", i);
      }
      L.exports = {
        destroy: function r(o, i) {
          var s = this;
          return (this._readableState && this._readableState.destroyed) ||
            (this._writableState && this._writableState.destroyed)
            ? (i
                ? i(o)
                : o &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      process.nextTick(u, this, o))
                    : process.nextTick(u, this, o)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(o || null, function (h) {
                !i && h
                  ? s._writableState
                    ? s._writableState.errorEmitted
                      ? process.nextTick(e, s)
                      : ((s._writableState.errorEmitted = !0),
                        process.nextTick(t, s, h))
                    : process.nextTick(t, s, h)
                  : i
                  ? (process.nextTick(e, s), i(h))
                  : process.nextTick(e, s);
              }),
              this);
        },
        undestroy: function g() {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function d(o, i) {
          var s = o._readableState,
            l = o._writableState;
          (s && s.autoDestroy) || (l && l.autoDestroy)
            ? o.destroy(i)
            : o.emit("error", i);
        },
      };
    },
    54618: (L, r, t) => {
      "use strict";
      var e = t(97218).q.ERR_STREAM_PREMATURE_CLOSE;
      function u() {}
      L.exports = function o(i, s, l) {
        if ("function" == typeof s) return o(i, null, s);
        s || (s = {}),
          (l = (function g(i) {
            var s = !1;
            return function () {
              if (!s) {
                s = !0;
                for (
                  var l = arguments.length, b = new Array(l), h = 0;
                  h < l;
                  h++
                )
                  b[h] = arguments[h];
                i.apply(this, b);
              }
            };
          })(l || u));
        var b = s.readable || (!1 !== s.readable && i.readable),
          h = s.writable || (!1 !== s.writable && i.writable),
          p = function () {
            i.writable || n();
          },
          c = i._writableState && i._writableState.finished,
          n = function () {
            (h = !1), (c = !0), b || l.call(i);
          },
          f = i._readableState && i._readableState.endEmitted,
          v = function () {
            (b = !1), (f = !0), h || l.call(i);
          },
          E = function (S) {
            l.call(i, S);
          },
          w = function () {
            var S;
            return b && !f
              ? ((!i._readableState || !i._readableState.ended) &&
                  (S = new e()),
                l.call(i, S))
              : h && !c
              ? ((!i._writableState || !i._writableState.ended) &&
                  (S = new e()),
                l.call(i, S))
              : void 0;
          },
          C = function () {
            i.req.on("finish", n);
          };
        return (
          (function d(i) {
            return i.setHeader && "function" == typeof i.abort;
          })(i)
            ? (i.on("complete", n),
              i.on("abort", w),
              i.req ? C() : i.on("request", C))
            : h && !i._writableState && (i.on("end", p), i.on("close", p)),
          i.on("end", v),
          i.on("finish", n),
          !1 !== s.error && i.on("error", E),
          i.on("close", w),
          function () {
            i.removeListener("complete", n),
              i.removeListener("abort", w),
              i.removeListener("request", C),
              i.req && i.req.removeListener("finish", n),
              i.removeListener("end", p),
              i.removeListener("close", p),
              i.removeListener("finish", n),
              i.removeListener("end", v),
              i.removeListener("error", E),
              i.removeListener("close", w);
          }
        );
      };
    },
    33335: (L) => {
      L.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    },
    84514: (L, r, t) => {
      "use strict";
      var e,
        u = t(97218).q,
        d = u.ERR_MISSING_ARGS,
        o = u.ERR_STREAM_DESTROYED;
      function i(n) {
        if (n) throw n;
      }
      function b(n) {
        n();
      }
      function h(n, f) {
        return n.pipe(f);
      }
      L.exports = function c() {
        for (var n = arguments.length, f = new Array(n), v = 0; v < n; v++)
          f[v] = arguments[v];
        var E = (function p(n) {
          return n.length && "function" == typeof n[n.length - 1] ? n.pop() : i;
        })(f);
        if ((Array.isArray(f[0]) && (f = f[0]), f.length < 2))
          throw new d("streams");
        var w,
          C = f.map(function (A, S) {
            var M = S < f.length - 1;
            return (function l(n, f, v, E) {
              E = (function g(n) {
                var f = !1;
                return function () {
                  f || ((f = !0), n.apply(void 0, arguments));
                };
              })(E);
              var w = !1;
              n.on("close", function () {
                w = !0;
              }),
                void 0 === e && (e = t(54618)),
                e(n, { readable: f, writable: v }, function (A) {
                  if (A) return E(A);
                  (w = !0), E();
                });
              var C = !1;
              return function (A) {
                if (!w && !C) {
                  if (
                    ((C = !0),
                    (function s(n) {
                      return n.setHeader && "function" == typeof n.abort;
                    })(n))
                  )
                    return n.abort();
                  if ("function" == typeof n.destroy) return n.destroy();
                  E(A || new o("pipe"));
                }
              };
            })(A, M, S > 0, function (U) {
              w || (w = U), U && C.forEach(b), !M && (C.forEach(b), E(w));
            });
          });
        return f.reduce(h);
      };
    },
    78782: (L, r, t) => {
      "use strict";
      var e = t(97218).q.ERR_INVALID_OPT_VALUE;
      L.exports = {
        getHighWaterMark: function u(d, o, i, s) {
          var l = (function g(d, o, i) {
            return null != d.highWaterMark ? d.highWaterMark : o ? d[i] : null;
          })(o, s, i);
          if (null != l) {
            if (!isFinite(l) || Math.floor(l) !== l || l < 0)
              throw new e(s ? i : "highWaterMark", l);
            return Math.floor(l);
          }
          return d.objectMode ? 16 : 16384;
        },
      };
    },
    78240: (L, r, t) => {
      L.exports = t(82016).EventEmitter;
    },
    96745: (L, r, t) => {
      ((r = L.exports = t(80309)).Stream = r),
        (r.Readable = r),
        (r.Writable = t(56563)),
        (r.Duplex = t(70247)),
        (r.Transform = t(16307)),
        (r.PassThrough = t(95096)),
        (r.finished = t(54618)),
        (r.pipeline = t(84514));
    },
    843: (L, r, t) => {
      var e = t(39007),
        g = e.Buffer;
      function u(o, i) {
        for (var s in o) i[s] = o[s];
      }
      function d(o, i, s) {
        return g(o, i, s);
      }
      g.from && g.alloc && g.allocUnsafe && g.allocUnsafeSlow
        ? (L.exports = e)
        : (u(e, r), (r.Buffer = d)),
        (d.prototype = Object.create(g.prototype)),
        u(g, d),
        (d.from = function (o, i, s) {
          if ("number" == typeof o)
            throw new TypeError("Argument must not be a number");
          return g(o, i, s);
        }),
        (d.alloc = function (o, i, s) {
          if ("number" != typeof o)
            throw new TypeError("Argument must be a number");
          var l = g(o);
          return (
            void 0 !== i
              ? "string" == typeof s
                ? l.fill(i, s)
                : l.fill(i)
              : l.fill(0),
            l
          );
        }),
        (d.allocUnsafe = function (o) {
          if ("number" != typeof o)
            throw new TypeError("Argument must be a number");
          return g(o);
        }),
        (d.allocUnsafeSlow = function (o) {
          if ("number" != typeof o)
            throw new TypeError("Argument must be a number");
          return e.SlowBuffer(o);
        });
    },
    61858: (L, r, t) => {
      const e = Symbol("SemVer ANY");
      class g {
        static get ANY() {
          return e;
        }
        constructor(p, c) {
          if (((c = u(c)), p instanceof g)) {
            if (p.loose === !!c.loose) return p;
            p = p.value;
          }
          (p = p.trim().split(/\s+/).join(" ")),
            s("comparator", p, c),
            (this.options = c),
            (this.loose = !!c.loose),
            this.parse(p),
            (this.value =
              this.semver === e ? "" : this.operator + this.semver.version),
            s("comp", this);
        }
        parse(p) {
          const n = p.match(
            this.options.loose ? d[o.COMPARATORLOOSE] : d[o.COMPARATOR]
          );
          if (!n) throw new TypeError(`Invalid comparator: ${p}`);
          (this.operator = void 0 !== n[1] ? n[1] : ""),
            "=" === this.operator && (this.operator = ""),
            (this.semver = n[2] ? new l(n[2], this.options.loose) : e);
        }
        toString() {
          return this.value;
        }
        test(p) {
          if (
            (s("Comparator.test", p, this.options.loose),
            this.semver === e || p === e)
          )
            return !0;
          if ("string" == typeof p)
            try {
              p = new l(p, this.options);
            } catch {
              return !1;
            }
          return i(p, this.operator, this.semver, this.options);
        }
        intersects(p, c) {
          if (!(p instanceof g))
            throw new TypeError("a Comparator is required");
          return "" === this.operator
            ? "" === this.value || new b(p.value, c).test(this.value)
            : "" === p.operator
            ? "" === p.value || new b(this.value, c).test(p.semver)
            : !(
                ((c = u(c)).includePrerelease &&
                  ("<0.0.0-0" === this.value || "<0.0.0-0" === p.value)) ||
                (!c.includePrerelease &&
                  (this.value.startsWith("<0.0.0") ||
                    p.value.startsWith("<0.0.0"))) ||
                !(
                  (this.operator.startsWith(">") &&
                    p.operator.startsWith(">")) ||
                  (this.operator.startsWith("<") &&
                    p.operator.startsWith("<")) ||
                  (this.semver.version === p.semver.version &&
                    this.operator.includes("=") &&
                    p.operator.includes("=")) ||
                  (i(this.semver, "<", p.semver, c) &&
                    this.operator.startsWith(">") &&
                    p.operator.startsWith("<")) ||
                  (i(this.semver, ">", p.semver, c) &&
                    this.operator.startsWith("<") &&
                    p.operator.startsWith(">"))
                )
              );
        }
      }
      L.exports = g;
      const u = t(33367),
        { safeRe: d, t: o } = t(75808),
        i = t(10269),
        s = t(14859),
        l = t(71003),
        b = t(72441);
    },
    72441: (L, r, t) => {
      class e {
        constructor(m, _) {
          if (((_ = d(_)), m instanceof e))
            return m.loose === !!_.loose &&
              m.includePrerelease === !!_.includePrerelease
              ? m
              : new e(m.raw, _);
          if (m instanceof o)
            return (
              (this.raw = m.value), (this.set = [[m]]), this.format(), this
            );
          if (
            ((this.options = _),
            (this.loose = !!_.loose),
            (this.includePrerelease = !!_.includePrerelease),
            (this.raw = m.trim().split(/\s+/).join(" ")),
            (this.set = this.raw
              .split("||")
              .map((I) => this.parseRange(I.trim()))
              .filter((I) => I.length)),
            !this.set.length)
          )
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
          if (this.set.length > 1) {
            const I = this.set[0];
            if (
              ((this.set = this.set.filter((R) => !v(R[0]))),
              0 === this.set.length)
            )
              this.set = [I];
            else if (this.set.length > 1)
              for (const R of this.set)
                if (1 === R.length && E(R[0])) {
                  this.set = [R];
                  break;
                }
          }
          this.format();
        }
        format() {
          return (
            (this.range = this.set
              .map((m) => m.join(" ").trim())
              .join("||")
              .trim()),
            this.range
          );
        }
        toString() {
          return this.range;
        }
        parseRange(m) {
          const I =
              ((this.options.includePrerelease && n) |
                (this.options.loose && f)) +
              ":" +
              m,
            R = u.get(I);
          if (R) return R;
          const T = this.options.loose;
          (m = m.replace(
            T ? l[b.HYPHENRANGELOOSE] : l[b.HYPHENRANGE],
            re(this.options.includePrerelease)
          )),
            i("hyphen replace", m),
            (m = m.replace(l[b.COMPARATORTRIM], h)),
            i("comparator trim", m),
            (m = m.replace(l[b.TILDETRIM], p)),
            i("tilde trim", m),
            (m = m.replace(l[b.CARETTRIM], c)),
            i("caret trim", m);
          let J = m
            .split(" ")
            .map((de) => C(de, this.options))
            .join(" ")
            .split(/\s+/)
            .map((de) => G(de, this.options));
          T &&
            (J = J.filter(
              (de) => (
                i("loose invalid filter", de, this.options),
                !!de.match(l[b.COMPARATORLOOSE])
              )
            )),
            i("range list", J);
          const $ = new Map(),
            x = J.map((de) => new o(de, this.options));
          for (const de of x) {
            if (v(de)) return [de];
            $.set(de.value, de);
          }
          $.size > 1 && $.has("") && $.delete("");
          const z = [...$.values()];
          return u.set(I, z), z;
        }
        intersects(m, _) {
          if (!(m instanceof e)) throw new TypeError("a Range is required");
          return this.set.some(
            (I) =>
              w(I, _) &&
              m.set.some(
                (R) =>
                  w(R, _) && I.every((T) => R.every((F) => T.intersects(F, _)))
              )
          );
        }
        test(m) {
          if (!m) return !1;
          if ("string" == typeof m)
            try {
              m = new s(m, this.options);
            } catch {
              return !1;
            }
          for (let _ = 0; _ < this.set.length; _++)
            if (ue(this.set[_], m, this.options)) return !0;
          return !1;
        }
      }
      L.exports = e;
      const u = new (t(93756))({ max: 1e3 }),
        d = t(33367),
        o = t(61858),
        i = t(14859),
        s = t(71003),
        {
          safeRe: l,
          t: b,
          comparatorTrimReplace: h,
          tildeTrimReplace: p,
          caretTrimReplace: c,
        } = t(75808),
        { FLAG_INCLUDE_PRERELEASE: n, FLAG_LOOSE: f } = t(10610),
        v = (P) => "<0.0.0-0" === P.value,
        E = (P) => "" === P.value,
        w = (P, m) => {
          let _ = !0;
          const I = P.slice();
          let R = I.pop();
          for (; _ && I.length; )
            (_ = I.every((T) => R.intersects(T, m))), (R = I.pop());
          return _;
        },
        C = (P, m) => (
          i("comp", P, m),
          (P = N(P, m)),
          i("caret", P),
          (P = S(P, m)),
          i("tildes", P),
          (P = O(P, m)),
          i("xrange", P),
          (P = K(P, m)),
          i("stars", P),
          P
        ),
        A = (P) => !P || "x" === P.toLowerCase() || "*" === P,
        S = (P, m) =>
          P.trim()
            .split(/\s+/)
            .map((_) => M(_, m))
            .join(" "),
        M = (P, m) =>
          P.replace(m.loose ? l[b.TILDELOOSE] : l[b.TILDE], (I, R, T, F, J) => {
            let $;
            return (
              i("tilde", P, I, R, T, F, J),
              A(R)
                ? ($ = "")
                : A(T)
                ? ($ = `>=${R}.0.0 <${+R + 1}.0.0-0`)
                : A(F)
                ? ($ = `>=${R}.${T}.0 <${R}.${+T + 1}.0-0`)
                : J
                ? (i("replaceTilde pr", J),
                  ($ = `>=${R}.${T}.${F}-${J} <${R}.${+T + 1}.0-0`))
                : ($ = `>=${R}.${T}.${F} <${R}.${+T + 1}.0-0`),
              i("tilde return", $),
              $
            );
          }),
        N = (P, m) =>
          P.trim()
            .split(/\s+/)
            .map((_) => U(_, m))
            .join(" "),
        U = (P, m) => {
          i("caret", P, m);
          const I = m.includePrerelease ? "-0" : "";
          return P.replace(
            m.loose ? l[b.CARETLOOSE] : l[b.CARET],
            (R, T, F, J, $) => {
              let x;
              return (
                i("caret", P, R, T, F, J, $),
                A(T)
                  ? (x = "")
                  : A(F)
                  ? (x = `>=${T}.0.0${I} <${+T + 1}.0.0-0`)
                  : A(J)
                  ? (x =
                      "0" === T
                        ? `>=${T}.${F}.0${I} <${T}.${+F + 1}.0-0`
                        : `>=${T}.${F}.0${I} <${+T + 1}.0.0-0`)
                  : $
                  ? (i("replaceCaret pr", $),
                    (x =
                      "0" === T
                        ? "0" === F
                          ? `>=${T}.${F}.${J}-${$} <${T}.${F}.${+J + 1}-0`
                          : `>=${T}.${F}.${J}-${$} <${T}.${+F + 1}.0-0`
                        : `>=${T}.${F}.${J}-${$} <${+T + 1}.0.0-0`))
                  : (i("no pr"),
                    (x =
                      "0" === T
                        ? "0" === F
                          ? `>=${T}.${F}.${J}${I} <${T}.${F}.${+J + 1}-0`
                          : `>=${T}.${F}.${J}${I} <${T}.${+F + 1}.0-0`
                        : `>=${T}.${F}.${J} <${+T + 1}.0.0-0`)),
                i("caret return", x),
                x
              );
            }
          );
        },
        O = (P, m) => (
          i("replaceXRanges", P, m),
          P.split(/\s+/)
            .map((_) => D(_, m))
            .join(" ")
        ),
        D = (P, m) =>
          (P = P.trim()).replace(
            m.loose ? l[b.XRANGELOOSE] : l[b.XRANGE],
            (I, R, T, F, J, $) => {
              i("xRange", P, I, R, T, F, J, $);
              const x = A(T),
                z = x || A(F),
                de = z || A(J);
              return (
                "=" === R && de && (R = ""),
                ($ = m.includePrerelease ? "-0" : ""),
                x
                  ? (I = ">" === R || "<" === R ? "<0.0.0-0" : "*")
                  : R && de
                  ? (z && (F = 0),
                    (J = 0),
                    ">" === R
                      ? ((R = ">="),
                        z
                          ? ((T = +T + 1), (F = 0), (J = 0))
                          : ((F = +F + 1), (J = 0)))
                      : "<=" === R &&
                        ((R = "<"), z ? (T = +T + 1) : (F = +F + 1)),
                    "<" === R && ($ = "-0"),
                    (I = `${R + T}.${F}.${J}${$}`))
                  : z
                  ? (I = `>=${T}.0.0${$} <${+T + 1}.0.0-0`)
                  : de && (I = `>=${T}.${F}.0${$} <${T}.${+F + 1}.0-0`),
                i("xRange return", I),
                I
              );
            }
          ),
        K = (P, m) => (
          i("replaceStars", P, m), P.trim().replace(l[b.STAR], "")
        ),
        G = (P, m) => (
          i("replaceGTE0", P, m),
          P.trim().replace(l[m.includePrerelease ? b.GTE0PRE : b.GTE0], "")
        ),
        re = (P) => (m, _, I, R, T, F, J, $, x, z, de, fe, be) =>
          `${(_ = A(I)
            ? ""
            : A(R)
            ? `>=${I}.0.0${P ? "-0" : ""}`
            : A(T)
            ? `>=${I}.${R}.0${P ? "-0" : ""}`
            : F
            ? `>=${_}`
            : `>=${_}${P ? "-0" : ""}`)} ${($ = A(x)
            ? ""
            : A(z)
            ? `<${+x + 1}.0.0-0`
            : A(de)
            ? `<${x}.${+z + 1}.0-0`
            : fe
            ? `<=${x}.${z}.${de}-${fe}`
            : P
            ? `<${x}.${z}.${+de + 1}-0`
            : `<=${$}`)}`.trim(),
        ue = (P, m, _) => {
          for (let I = 0; I < P.length; I++) if (!P[I].test(m)) return !1;
          if (m.prerelease.length && !_.includePrerelease) {
            for (let I = 0; I < P.length; I++)
              if (
                (i(P[I].semver),
                P[I].semver !== o.ANY && P[I].semver.prerelease.length > 0)
              ) {
                const R = P[I].semver;
                if (
                  R.major === m.major &&
                  R.minor === m.minor &&
                  R.patch === m.patch
                )
                  return !0;
              }
            return !1;
          }
          return !0;
        };
    },
    71003: (L, r, t) => {
      const e = t(14859),
        { MAX_LENGTH: g, MAX_SAFE_INTEGER: u } = t(10610),
        { safeRe: d, t: o } = t(75808),
        i = t(33367),
        { compareIdentifiers: s } = t(40709);
      class l {
        constructor(h, p) {
          if (((p = i(p)), h instanceof l)) {
            if (
              h.loose === !!p.loose &&
              h.includePrerelease === !!p.includePrerelease
            )
              return h;
            h = h.version;
          } else if ("string" != typeof h)
            throw new TypeError(
              `Invalid version. Must be a string. Got type "${typeof h}".`
            );
          if (h.length > g)
            throw new TypeError(`version is longer than ${g} characters`);
          e("SemVer", h, p),
            (this.options = p),
            (this.loose = !!p.loose),
            (this.includePrerelease = !!p.includePrerelease);
          const c = h.trim().match(p.loose ? d[o.LOOSE] : d[o.FULL]);
          if (!c) throw new TypeError(`Invalid Version: ${h}`);
          if (
            ((this.raw = h),
            (this.major = +c[1]),
            (this.minor = +c[2]),
            (this.patch = +c[3]),
            this.major > u || this.major < 0)
          )
            throw new TypeError("Invalid major version");
          if (this.minor > u || this.minor < 0)
            throw new TypeError("Invalid minor version");
          if (this.patch > u || this.patch < 0)
            throw new TypeError("Invalid patch version");
          (this.prerelease = c[4]
            ? c[4].split(".").map((n) => {
                if (/^[0-9]+$/.test(n)) {
                  const f = +n;
                  if (f >= 0 && f < u) return f;
                }
                return n;
              })
            : []),
            (this.build = c[5] ? c[5].split(".") : []),
            this.format();
        }
        format() {
          return (
            (this.version = `${this.major}.${this.minor}.${this.patch}`),
            this.prerelease.length &&
              (this.version += `-${this.prerelease.join(".")}`),
            this.version
          );
        }
        toString() {
          return this.version;
        }
        compare(h) {
          if (
            (e("SemVer.compare", this.version, this.options, h),
            !(h instanceof l))
          ) {
            if ("string" == typeof h && h === this.version) return 0;
            h = new l(h, this.options);
          }
          return h.version === this.version
            ? 0
            : this.compareMain(h) || this.comparePre(h);
        }
        compareMain(h) {
          return (
            h instanceof l || (h = new l(h, this.options)),
            s(this.major, h.major) ||
              s(this.minor, h.minor) ||
              s(this.patch, h.patch)
          );
        }
        comparePre(h) {
          if (
            (h instanceof l || (h = new l(h, this.options)),
            this.prerelease.length && !h.prerelease.length)
          )
            return -1;
          if (!this.prerelease.length && h.prerelease.length) return 1;
          if (!this.prerelease.length && !h.prerelease.length) return 0;
          let p = 0;
          do {
            const c = this.prerelease[p],
              n = h.prerelease[p];
            if (
              (e("prerelease compare", p, c, n), void 0 === c && void 0 === n)
            )
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === c) return -1;
            if (c !== n) return s(c, n);
          } while (++p);
        }
        compareBuild(h) {
          h instanceof l || (h = new l(h, this.options));
          let p = 0;
          do {
            const c = this.build[p],
              n = h.build[p];
            if (
              (e("prerelease compare", p, c, n), void 0 === c && void 0 === n)
            )
              return 0;
            if (void 0 === n) return 1;
            if (void 0 === c) return -1;
            if (c !== n) return s(c, n);
          } while (++p);
        }
        inc(h, p, c) {
          switch (h) {
            case "premajor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc("pre", p, c);
              break;
            case "preminor":
              (this.prerelease.length = 0),
                (this.patch = 0),
                this.minor++,
                this.inc("pre", p, c);
              break;
            case "prepatch":
              (this.prerelease.length = 0),
                this.inc("patch", p, c),
                this.inc("pre", p, c);
              break;
            case "prerelease":
              0 === this.prerelease.length && this.inc("patch", p, c),
                this.inc("pre", p, c);
              break;
            case "major":
              (0 !== this.minor ||
                0 !== this.patch ||
                0 === this.prerelease.length) &&
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "minor":
              (0 !== this.patch || 0 === this.prerelease.length) &&
                this.minor++,
                (this.patch = 0),
                (this.prerelease = []);
              break;
            case "patch":
              0 === this.prerelease.length && this.patch++,
                (this.prerelease = []);
              break;
            case "pre": {
              const n = Number(c) ? 1 : 0;
              if (!p && !1 === c)
                throw new Error(
                  "invalid increment argument: identifier is empty"
                );
              if (0 === this.prerelease.length) this.prerelease = [n];
              else {
                let f = this.prerelease.length;
                for (; --f >= 0; )
                  "number" == typeof this.prerelease[f] &&
                    (this.prerelease[f]++, (f = -2));
                if (-1 === f) {
                  if (p === this.prerelease.join(".") && !1 === c)
                    throw new Error(
                      "invalid increment argument: identifier already exists"
                    );
                  this.prerelease.push(n);
                }
              }
              if (p) {
                let f = [p, n];
                !1 === c && (f = [p]),
                  0 === s(this.prerelease[0], p)
                    ? isNaN(this.prerelease[1]) && (this.prerelease = f)
                    : (this.prerelease = f);
              }
              break;
            }
            default:
              throw new Error(`invalid increment argument: ${h}`);
          }
          return (
            (this.raw = this.format()),
            this.build.length && (this.raw += `+${this.build.join(".")}`),
            this
          );
        }
      }
      L.exports = l;
    },
    17521: (L, r, t) => {
      const e = t(49247);
      L.exports = (u, d) => {
        const o = e(u.trim().replace(/^[=v]+/, ""), d);
        return o ? o.version : null;
      };
    },
    10269: (L, r, t) => {
      const e = t(89196),
        g = t(86780),
        u = t(6691),
        d = t(4439),
        o = t(62473),
        i = t(19776);
      L.exports = (l, b, h, p) => {
        switch (b) {
          case "===":
            return (
              "object" == typeof l && (l = l.version),
              "object" == typeof h && (h = h.version),
              l === h
            );
          case "!==":
            return (
              "object" == typeof l && (l = l.version),
              "object" == typeof h && (h = h.version),
              l !== h
            );
          case "":
          case "=":
          case "==":
            return e(l, h, p);
          case "!=":
            return g(l, h, p);
          case ">":
            return u(l, h, p);
          case ">=":
            return d(l, h, p);
          case "<":
            return o(l, h, p);
          case "<=":
            return i(l, h, p);
          default:
            throw new TypeError(`Invalid operator: ${b}`);
        }
      };
    },
    74660: (L, r, t) => {
      const e = t(71003),
        g = t(49247),
        { safeRe: u, t: d } = t(75808);
      L.exports = (i, s) => {
        if (i instanceof e) return i;
        if (("number" == typeof i && (i = String(i)), "string" != typeof i))
          return null;
        let l = null;
        if ((s = s || {}).rtl) {
          let b;
          for (
            ;
            (b = u[d.COERCERTL].exec(i)) &&
            (!l || l.index + l[0].length !== i.length);

          )
            (!l || b.index + b[0].length !== l.index + l[0].length) && (l = b),
              (u[d.COERCERTL].lastIndex = b.index + b[1].length + b[2].length);
          u[d.COERCERTL].lastIndex = -1;
        } else l = i.match(u[d.COERCE]);
        return null === l
          ? null
          : g(`${l[2]}.${l[3] || "0"}.${l[4] || "0"}`, s);
      };
    },
    61239: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d, o) => {
        const i = new e(u, o),
          s = new e(d, o);
        return i.compare(s) || i.compareBuild(s);
      };
    },
    66999: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d) => e(u, d, !0);
    },
    22214: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d, o) => new e(u, o).compare(new e(d, o));
    },
    71183: (L, r, t) => {
      const e = t(49247);
      L.exports = (u, d) => {
        const o = e(u, null, !0),
          i = e(d, null, !0),
          s = o.compare(i);
        if (0 === s) return null;
        const l = s > 0,
          b = l ? o : i,
          h = l ? i : o,
          p = !!b.prerelease.length;
        if (h.prerelease.length && !p)
          return h.patch || h.minor
            ? b.patch
              ? "patch"
              : b.minor
              ? "minor"
              : "major"
            : "major";
        const n = p ? "pre" : "";
        return o.major !== i.major
          ? n + "major"
          : o.minor !== i.minor
          ? n + "minor"
          : o.patch !== i.patch
          ? n + "patch"
          : "prerelease";
      };
    },
    89196: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => 0 === e(u, d, o);
    },
    6691: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => e(u, d, o) > 0;
    },
    4439: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => e(u, d, o) >= 0;
    },
    66939: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d, o, i, s) => {
        "string" == typeof o && ((s = i), (i = o), (o = void 0));
        try {
          return new e(u instanceof e ? u.version : u, o).inc(d, i, s).version;
        } catch {
          return null;
        }
      };
    },
    62473: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => e(u, d, o) < 0;
    },
    19776: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => e(u, d, o) <= 0;
    },
    2136: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d) => new e(u, d).major;
    },
    57662: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d) => new e(u, d).minor;
    },
    86780: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => 0 !== e(u, d, o);
    },
    49247: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d, o = !1) => {
        if (u instanceof e) return u;
        try {
          return new e(u, d);
        } catch (i) {
          if (!o) return null;
          throw i;
        }
      };
    },
    76884: (L, r, t) => {
      const e = t(71003);
      L.exports = (u, d) => new e(u, d).patch;
    },
    38635: (L, r, t) => {
      const e = t(49247);
      L.exports = (u, d) => {
        const o = e(u, d);
        return o && o.prerelease.length ? o.prerelease : null;
      };
    },
    90640: (L, r, t) => {
      const e = t(22214);
      L.exports = (u, d, o) => e(d, u, o);
    },
    45876: (L, r, t) => {
      const e = t(61239);
      L.exports = (u, d) => u.sort((o, i) => e(i, o, d));
    },
    67100: (L, r, t) => {
      const e = t(72441);
      L.exports = (u, d, o) => {
        try {
          d = new e(d, o);
        } catch {
          return !1;
        }
        return d.test(u);
      };
    },
    64194: (L, r, t) => {
      const e = t(61239);
      L.exports = (u, d) => u.sort((o, i) => e(o, i, d));
    },
    47676: (L, r, t) => {
      const e = t(49247);
      L.exports = (u, d) => {
        const o = e(u, d);
        return o ? o.version : null;
      };
    },
    70424: (L, r, t) => {
      const e = t(75808),
        g = t(10610),
        u = t(71003),
        d = t(40709),
        o = t(49247),
        i = t(47676),
        s = t(17521),
        l = t(66939),
        b = t(71183),
        h = t(2136),
        p = t(57662),
        c = t(76884),
        n = t(38635),
        f = t(22214),
        v = t(90640),
        E = t(66999),
        w = t(61239),
        C = t(64194),
        A = t(45876),
        S = t(6691),
        M = t(62473),
        N = t(89196),
        U = t(86780),
        O = t(4439),
        D = t(19776),
        K = t(10269),
        G = t(74660),
        re = t(61858),
        ue = t(72441),
        P = t(67100),
        m = t(31250),
        _ = t(2755),
        I = t(21639),
        R = t(24816),
        T = t(82321),
        F = t(87416),
        J = t(30562),
        $ = t(73013),
        x = t(44006),
        z = t(22326),
        de = t(71538);
      L.exports = {
        parse: o,
        valid: i,
        clean: s,
        inc: l,
        diff: b,
        major: h,
        minor: p,
        patch: c,
        prerelease: n,
        compare: f,
        rcompare: v,
        compareLoose: E,
        compareBuild: w,
        sort: C,
        rsort: A,
        gt: S,
        lt: M,
        eq: N,
        neq: U,
        gte: O,
        lte: D,
        cmp: K,
        coerce: G,
        Comparator: re,
        Range: ue,
        satisfies: P,
        toComparators: m,
        maxSatisfying: _,
        minSatisfying: I,
        minVersion: R,
        validRange: T,
        outside: F,
        gtr: J,
        ltr: $,
        intersects: x,
        simplifyRange: z,
        subset: de,
        SemVer: u,
        re: e.re,
        src: e.src,
        tokens: e.t,
        SEMVER_SPEC_VERSION: g.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: g.RELEASE_TYPES,
        compareIdentifiers: d.compareIdentifiers,
        rcompareIdentifiers: d.rcompareIdentifiers,
      };
    },
    10610: (L) => {
      L.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991,
        RELEASE_TYPES: [
          "major",
          "premajor",
          "minor",
          "preminor",
          "patch",
          "prepatch",
          "prerelease",
        ],
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2,
      };
    },
    14859: (L) => {
      const r =
        "object" == typeof process &&
        process.env &&
        process.env.NODE_DEBUG &&
        /\bsemver\b/i.test(process.env.NODE_DEBUG)
          ? (...t) => console.error("SEMVER", ...t)
          : () => {};
      L.exports = r;
    },
    40709: (L) => {
      const r = /^[0-9]+$/,
        t = (g, u) => {
          const d = r.test(g),
            o = r.test(u);
          return (
            d && o && ((g = +g), (u = +u)),
            g === u ? 0 : d && !o ? -1 : o && !d ? 1 : g < u ? -1 : 1
          );
        };
      L.exports = {
        compareIdentifiers: t,
        rcompareIdentifiers: (g, u) => t(u, g),
      };
    },
    33367: (L) => {
      const r = Object.freeze({ loose: !0 }),
        t = Object.freeze({});
      L.exports = (g) => (g ? ("object" != typeof g ? r : g) : t);
    },
    75808: (L, r, t) => {
      const {
          MAX_SAFE_COMPONENT_LENGTH: e,
          MAX_SAFE_BUILD_LENGTH: g,
          MAX_LENGTH: u,
        } = t(10610),
        d = t(14859),
        o = ((r = L.exports = {}).re = []),
        i = (r.safeRe = []),
        s = (r.src = []),
        l = (r.t = {});
      let b = 0;
      const h = "[a-zA-Z0-9-]",
        p = [
          ["\\s", 1],
          ["\\d", u],
          [h, g],
        ],
        n = (f, v, E) => {
          const w = ((f) => {
              for (const [v, E] of p)
                f = f
                  .split(`${v}*`)
                  .join(`${v}{0,${E}}`)
                  .split(`${v}+`)
                  .join(`${v}{1,${E}}`);
              return f;
            })(v),
            C = b++;
          d(f, C, v),
            (l[f] = C),
            (s[C] = v),
            (o[C] = new RegExp(v, E ? "g" : void 0)),
            (i[C] = new RegExp(w, E ? "g" : void 0));
        };
      n("NUMERICIDENTIFIER", "0|[1-9]\\d*"),
        n("NUMERICIDENTIFIERLOOSE", "\\d+"),
        n("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${h}*`),
        n(
          "MAINVERSION",
          `(${s[l.NUMERICIDENTIFIER]})\\.(${s[l.NUMERICIDENTIFIER]})\\.(${
            s[l.NUMERICIDENTIFIER]
          })`
        ),
        n(
          "MAINVERSIONLOOSE",
          `(${s[l.NUMERICIDENTIFIERLOOSE]})\\.(${
            s[l.NUMERICIDENTIFIERLOOSE]
          })\\.(${s[l.NUMERICIDENTIFIERLOOSE]})`
        ),
        n(
          "PRERELEASEIDENTIFIER",
          `(?:${s[l.NUMERICIDENTIFIER]}|${s[l.NONNUMERICIDENTIFIER]})`
        ),
        n(
          "PRERELEASEIDENTIFIERLOOSE",
          `(?:${s[l.NUMERICIDENTIFIERLOOSE]}|${s[l.NONNUMERICIDENTIFIER]})`
        ),
        n(
          "PRERELEASE",
          `(?:-(${s[l.PRERELEASEIDENTIFIER]}(?:\\.${
            s[l.PRERELEASEIDENTIFIER]
          })*))`
        ),
        n(
          "PRERELEASELOOSE",
          `(?:-?(${s[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${
            s[l.PRERELEASEIDENTIFIERLOOSE]
          })*))`
        ),
        n("BUILDIDENTIFIER", `${h}+`),
        n(
          "BUILD",
          `(?:\\+(${s[l.BUILDIDENTIFIER]}(?:\\.${s[l.BUILDIDENTIFIER]})*))`
        ),
        n(
          "FULLPLAIN",
          `v?${s[l.MAINVERSION]}${s[l.PRERELEASE]}?${s[l.BUILD]}?`
        ),
        n("FULL", `^${s[l.FULLPLAIN]}$`),
        n(
          "LOOSEPLAIN",
          `[v=\\s]*${s[l.MAINVERSIONLOOSE]}${s[l.PRERELEASELOOSE]}?${
            s[l.BUILD]
          }?`
        ),
        n("LOOSE", `^${s[l.LOOSEPLAIN]}$`),
        n("GTLT", "((?:<|>)?=?)"),
        n("XRANGEIDENTIFIERLOOSE", `${s[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),
        n("XRANGEIDENTIFIER", `${s[l.NUMERICIDENTIFIER]}|x|X|\\*`),
        n(
          "XRANGEPLAIN",
          `[v=\\s]*(${s[l.XRANGEIDENTIFIER]})(?:\\.(${
            s[l.XRANGEIDENTIFIER]
          })(?:\\.(${s[l.XRANGEIDENTIFIER]})(?:${s[l.PRERELEASE]})?${
            s[l.BUILD]
          }?)?)?`
        ),
        n(
          "XRANGEPLAINLOOSE",
          `[v=\\s]*(${s[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${
            s[l.XRANGEIDENTIFIERLOOSE]
          })(?:\\.(${s[l.XRANGEIDENTIFIERLOOSE]})(?:${s[l.PRERELEASELOOSE]})?${
            s[l.BUILD]
          }?)?)?`
        ),
        n("XRANGE", `^${s[l.GTLT]}\\s*${s[l.XRANGEPLAIN]}$`),
        n("XRANGELOOSE", `^${s[l.GTLT]}\\s*${s[l.XRANGEPLAINLOOSE]}$`),
        n(
          "COERCE",
          `(^|[^\\d])(\\d{1,${e}})(?:\\.(\\d{1,${e}}))?(?:\\.(\\d{1,${e}}))?(?:$|[^\\d])`
        ),
        n("COERCERTL", s[l.COERCE], !0),
        n("LONETILDE", "(?:~>?)"),
        n("TILDETRIM", `(\\s*)${s[l.LONETILDE]}\\s+`, !0),
        (r.tildeTrimReplace = "$1~"),
        n("TILDE", `^${s[l.LONETILDE]}${s[l.XRANGEPLAIN]}$`),
        n("TILDELOOSE", `^${s[l.LONETILDE]}${s[l.XRANGEPLAINLOOSE]}$`),
        n("LONECARET", "(?:\\^)"),
        n("CARETTRIM", `(\\s*)${s[l.LONECARET]}\\s+`, !0),
        (r.caretTrimReplace = "$1^"),
        n("CARET", `^${s[l.LONECARET]}${s[l.XRANGEPLAIN]}$`),
        n("CARETLOOSE", `^${s[l.LONECARET]}${s[l.XRANGEPLAINLOOSE]}$`),
        n("COMPARATORLOOSE", `^${s[l.GTLT]}\\s*(${s[l.LOOSEPLAIN]})$|^$`),
        n("COMPARATOR", `^${s[l.GTLT]}\\s*(${s[l.FULLPLAIN]})$|^$`),
        n(
          "COMPARATORTRIM",
          `(\\s*)${s[l.GTLT]}\\s*(${s[l.LOOSEPLAIN]}|${s[l.XRANGEPLAIN]})`,
          !0
        ),
        (r.comparatorTrimReplace = "$1$2$3"),
        n(
          "HYPHENRANGE",
          `^\\s*(${s[l.XRANGEPLAIN]})\\s+-\\s+(${s[l.XRANGEPLAIN]})\\s*$`
        ),
        n(
          "HYPHENRANGELOOSE",
          `^\\s*(${s[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${
            s[l.XRANGEPLAINLOOSE]
          })\\s*$`
        ),
        n("STAR", "(<|>)?=?\\s*\\*"),
        n("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"),
        n("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
    },
    93756: (L, r, t) => {
      "use strict";
      const e = t(94439),
        g = Symbol("max"),
        u = Symbol("length"),
        d = Symbol("lengthCalculator"),
        o = Symbol("allowStale"),
        i = Symbol("maxAge"),
        s = Symbol("dispose"),
        l = Symbol("noDisposeOnSet"),
        b = Symbol("lruList"),
        h = Symbol("cache"),
        p = Symbol("updateAgeOnGet"),
        c = () => 1,
        f = (S, M, N) => {
          const U = S[h].get(M);
          if (U) {
            const O = U.value;
            if (v(S, O)) {
              if ((w(S, U), !S[o])) return;
            } else
              N && (S[p] && (U.value.now = Date.now()), S[b].unshiftNode(U));
            return O.value;
          }
        },
        v = (S, M) => {
          if (!M || (!M.maxAge && !S[i])) return !1;
          const N = Date.now() - M.now;
          return M.maxAge ? N > M.maxAge : S[i] && N > S[i];
        },
        E = (S) => {
          if (S[u] > S[g])
            for (let M = S[b].tail; S[u] > S[g] && null !== M; ) {
              const N = M.prev;
              w(S, M), (M = N);
            }
        },
        w = (S, M) => {
          if (M) {
            const N = M.value;
            S[s] && S[s](N.key, N.value),
              (S[u] -= N.length),
              S[h].delete(N.key),
              S[b].removeNode(M);
          }
        };
      class C {
        constructor(M, N, U, O, D) {
          (this.key = M),
            (this.value = N),
            (this.length = U),
            (this.now = O),
            (this.maxAge = D || 0);
        }
      }
      const A = (S, M, N, U) => {
        let O = N.value;
        v(S, O) && (w(S, N), S[o] || (O = void 0)),
          O && M.call(U, O.value, O.key, S);
      };
      L.exports = class n {
        constructor(M) {
          if (
            ("number" == typeof M && (M = { max: M }),
            M || (M = {}),
            M.max && ("number" != typeof M.max || M.max < 0))
          )
            throw new TypeError("max must be a non-negative number");
          this[g] = M.max || 1 / 0;
          const U = M.length || c;
          if (
            ((this[d] = "function" != typeof U ? c : U),
            (this[o] = M.stale || !1),
            M.maxAge && "number" != typeof M.maxAge)
          )
            throw new TypeError("maxAge must be a number");
          (this[i] = M.maxAge || 0),
            (this[s] = M.dispose),
            (this[l] = M.noDisposeOnSet || !1),
            (this[p] = M.updateAgeOnGet || !1),
            this.reset();
        }
        set max(M) {
          if ("number" != typeof M || M < 0)
            throw new TypeError("max must be a non-negative number");
          (this[g] = M || 1 / 0), E(this);
        }
        get max() {
          return this[g];
        }
        set allowStale(M) {
          this[o] = !!M;
        }
        get allowStale() {
          return this[o];
        }
        set maxAge(M) {
          if ("number" != typeof M)
            throw new TypeError("maxAge must be a non-negative number");
          (this[i] = M), E(this);
        }
        get maxAge() {
          return this[i];
        }
        set lengthCalculator(M) {
          "function" != typeof M && (M = c),
            M !== this[d] &&
              ((this[d] = M),
              (this[u] = 0),
              this[b].forEach((N) => {
                (N.length = this[d](N.value, N.key)), (this[u] += N.length);
              })),
            E(this);
        }
        get lengthCalculator() {
          return this[d];
        }
        get length() {
          return this[u];
        }
        get itemCount() {
          return this[b].length;
        }
        rforEach(M, N) {
          N = N || this;
          for (let U = this[b].tail; null !== U; ) {
            const O = U.prev;
            A(this, M, U, N), (U = O);
          }
        }
        forEach(M, N) {
          N = N || this;
          for (let U = this[b].head; null !== U; ) {
            const O = U.next;
            A(this, M, U, N), (U = O);
          }
        }
        keys() {
          return this[b].toArray().map((M) => M.key);
        }
        values() {
          return this[b].toArray().map((M) => M.value);
        }
        reset() {
          this[s] &&
            this[b] &&
            this[b].length &&
            this[b].forEach((M) => this[s](M.key, M.value)),
            (this[h] = new Map()),
            (this[b] = new e()),
            (this[u] = 0);
        }
        dump() {
          return this[b]
            .map(
              (M) =>
                !v(this, M) && {
                  k: M.key,
                  v: M.value,
                  e: M.now + (M.maxAge || 0),
                }
            )
            .toArray()
            .filter((M) => M);
        }
        dumpLru() {
          return this[b];
        }
        set(M, N, U) {
          if ((U = U || this[i]) && "number" != typeof U)
            throw new TypeError("maxAge must be a number");
          const O = U ? Date.now() : 0,
            D = this[d](N, M);
          if (this[h].has(M)) {
            if (D > this[g]) return w(this, this[h].get(M)), !1;
            const re = this[h].get(M).value;
            return (
              this[s] && (this[l] || this[s](M, re.value)),
              (re.now = O),
              (re.maxAge = U),
              (re.value = N),
              (this[u] += D - re.length),
              (re.length = D),
              this.get(M),
              E(this),
              !0
            );
          }
          const K = new C(M, N, D, O, U);
          return K.length > this[g]
            ? (this[s] && this[s](M, N), !1)
            : ((this[u] += K.length),
              this[b].unshift(K),
              this[h].set(M, this[b].head),
              E(this),
              !0);
        }
        has(M) {
          if (!this[h].has(M)) return !1;
          const N = this[h].get(M).value;
          return !v(this, N);
        }
        get(M) {
          return f(this, M, !0);
        }
        peek(M) {
          return f(this, M, !1);
        }
        pop() {
          const M = this[b].tail;
          return M ? (w(this, M), M.value) : null;
        }
        del(M) {
          w(this, this[h].get(M));
        }
        load(M) {
          this.reset();
          const N = Date.now();
          for (let U = M.length - 1; U >= 0; U--) {
            const O = M[U],
              D = O.e || 0;
            if (0 === D) this.set(O.k, O.v);
            else {
              const K = D - N;
              K > 0 && this.set(O.k, O.v, K);
            }
          }
        }
        prune() {
          this[h].forEach((M, N) => f(this, N, !1));
        }
      };
    },
    30562: (L, r, t) => {
      const e = t(87416);
      L.exports = (u, d, o) => e(u, d, ">", o);
    },
    44006: (L, r, t) => {
      const e = t(72441);
      L.exports = (u, d, o) => (
        (u = new e(u, o)), (d = new e(d, o)), u.intersects(d, o)
      );
    },
    73013: (L, r, t) => {
      const e = t(87416);
      L.exports = (u, d, o) => e(u, d, "<", o);
    },
    2755: (L, r, t) => {
      const e = t(71003),
        g = t(72441);
      L.exports = (d, o, i) => {
        let s = null,
          l = null,
          b = null;
        try {
          b = new g(o, i);
        } catch {
          return null;
        }
        return (
          d.forEach((h) => {
            b.test(h) &&
              (!s || -1 === l.compare(h)) &&
              ((s = h), (l = new e(s, i)));
          }),
          s
        );
      };
    },
    21639: (L, r, t) => {
      const e = t(71003),
        g = t(72441);
      L.exports = (d, o, i) => {
        let s = null,
          l = null,
          b = null;
        try {
          b = new g(o, i);
        } catch {
          return null;
        }
        return (
          d.forEach((h) => {
            b.test(h) &&
              (!s || 1 === l.compare(h)) &&
              ((s = h), (l = new e(s, i)));
          }),
          s
        );
      };
    },
    24816: (L, r, t) => {
      const e = t(71003),
        g = t(72441),
        u = t(6691);
      L.exports = (o, i) => {
        o = new g(o, i);
        let s = new e("0.0.0");
        if (o.test(s) || ((s = new e("0.0.0-0")), o.test(s))) return s;
        s = null;
        for (let l = 0; l < o.set.length; ++l) {
          let h = null;
          o.set[l].forEach((p) => {
            const c = new e(p.semver.version);
            switch (p.operator) {
              case ">":
                0 === c.prerelease.length ? c.patch++ : c.prerelease.push(0),
                  (c.raw = c.format());
              case "":
              case ">=":
                (!h || u(c, h)) && (h = c);
                break;
              case "<":
              case "<=":
                break;
              default:
                throw new Error(`Unexpected operation: ${p.operator}`);
            }
          }),
            h && (!s || u(s, h)) && (s = h);
        }
        return s && o.test(s) ? s : null;
      };
    },
    87416: (L, r, t) => {
      const e = t(71003),
        g = t(61858),
        { ANY: u } = g,
        d = t(72441),
        o = t(67100),
        i = t(6691),
        s = t(62473),
        l = t(19776),
        b = t(4439);
      L.exports = (p, c, n, f) => {
        let v, E, w, C, A;
        switch (((p = new e(p, f)), (c = new d(c, f)), n)) {
          case ">":
            (v = i), (E = l), (w = s), (C = ">"), (A = ">=");
            break;
          case "<":
            (v = s), (E = b), (w = i), (C = "<"), (A = "<=");
            break;
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (o(p, c, f)) return !1;
        for (let S = 0; S < c.set.length; ++S) {
          let N = null,
            U = null;
          if (
            (c.set[S].forEach((O) => {
              O.semver === u && (O = new g(">=0.0.0")),
                (N = N || O),
                (U = U || O),
                v(O.semver, N.semver, f)
                  ? (N = O)
                  : w(O.semver, U.semver, f) && (U = O);
            }),
            N.operator === C ||
              N.operator === A ||
              ((!U.operator || U.operator === C) && E(p, U.semver)))
          )
            return !1;
          if (U.operator === A && w(p, U.semver)) return !1;
        }
        return !0;
      };
    },
    22326: (L, r, t) => {
      const e = t(67100),
        g = t(22214);
      L.exports = (u, d, o) => {
        const i = [];
        let s = null,
          l = null;
        const b = u.sort((n, f) => g(n, f, o));
        for (const n of b)
          e(n, d, o)
            ? ((l = n), s || (s = n))
            : (l && i.push([s, l]), (l = null), (s = null));
        s && i.push([s, null]);
        const h = [];
        for (const [n, f] of i)
          h.push(
            n === f
              ? n
              : f || n !== b[0]
              ? f
                ? n === b[0]
                  ? `<=${f}`
                  : `${n} - ${f}`
                : `>=${n}`
              : "*"
          );
        const p = h.join(" || "),
          c = "string" == typeof d.raw ? d.raw : String(d);
        return p.length < c.length ? p : d;
      };
    },
    71538: (L, r, t) => {
      const e = t(72441),
        g = t(61858),
        { ANY: u } = g,
        d = t(67100),
        o = t(22214),
        s = [new g(">=0.0.0-0")],
        l = [new g(">=0.0.0")],
        b = (c, n, f) => {
          if (c === n) return !0;
          if (1 === c.length && c[0].semver === u) {
            if (1 === n.length && n[0].semver === u) return !0;
            c = f.includePrerelease ? s : l;
          }
          if (1 === n.length && n[0].semver === u) {
            if (f.includePrerelease) return !0;
            n = l;
          }
          const v = new Set();
          let E, w, C;
          for (const D of c)
            ">" === D.operator || ">=" === D.operator
              ? (E = h(E, D, f))
              : "<" === D.operator || "<=" === D.operator
              ? (w = p(w, D, f))
              : v.add(D.semver);
          if (v.size > 1) return null;
          if (E && w) {
            if (((C = o(E.semver, w.semver, f)), C > 0)) return null;
            if (0 === C && (">=" !== E.operator || "<=" !== w.operator))
              return null;
          }
          for (const D of v) {
            if ((E && !d(D, String(E), f)) || (w && !d(D, String(w), f)))
              return null;
            for (const K of n) if (!d(D, String(K), f)) return !1;
            return !0;
          }
          let A,
            S,
            M,
            N,
            U =
              !(!w || f.includePrerelease || !w.semver.prerelease.length) &&
              w.semver,
            O =
              !(!E || f.includePrerelease || !E.semver.prerelease.length) &&
              E.semver;
          U &&
            1 === U.prerelease.length &&
            "<" === w.operator &&
            0 === U.prerelease[0] &&
            (U = !1);
          for (const D of n) {
            if (
              ((N = N || ">" === D.operator || ">=" === D.operator),
              (M = M || "<" === D.operator || "<=" === D.operator),
              E)
            )
              if (
                (O &&
                  D.semver.prerelease &&
                  D.semver.prerelease.length &&
                  D.semver.major === O.major &&
                  D.semver.minor === O.minor &&
                  D.semver.patch === O.patch &&
                  (O = !1),
                ">" === D.operator || ">=" === D.operator)
              ) {
                if (((A = h(E, D, f)), A === D && A !== E)) return !1;
              } else if (">=" === E.operator && !d(E.semver, String(D), f))
                return !1;
            if (w)
              if (
                (U &&
                  D.semver.prerelease &&
                  D.semver.prerelease.length &&
                  D.semver.major === U.major &&
                  D.semver.minor === U.minor &&
                  D.semver.patch === U.patch &&
                  (U = !1),
                "<" === D.operator || "<=" === D.operator)
              ) {
                if (((S = p(w, D, f)), S === D && S !== w)) return !1;
              } else if ("<=" === w.operator && !d(w.semver, String(D), f))
                return !1;
            if (!D.operator && (w || E) && 0 !== C) return !1;
          }
          return !(
            (E && M && !w && 0 !== C) ||
            (w && N && !E && 0 !== C) ||
            O ||
            U
          );
        },
        h = (c, n, f) => {
          if (!c) return n;
          const v = o(c.semver, n.semver, f);
          return v > 0
            ? c
            : v < 0 || (">" === n.operator && ">=" === c.operator)
            ? n
            : c;
        },
        p = (c, n, f) => {
          if (!c) return n;
          const v = o(c.semver, n.semver, f);
          return v < 0
            ? c
            : v > 0 || ("<" === n.operator && "<=" === c.operator)
            ? n
            : c;
        };
      L.exports = (c, n, f = {}) => {
        if (c === n) return !0;
        (c = new e(c, f)), (n = new e(n, f));
        let v = !1;
        e: for (const E of c.set) {
          for (const w of n.set) {
            const C = b(E, w, f);
            if (((v = v || null !== C), C)) continue e;
          }
          if (v) return !1;
        }
        return !0;
      };
    },
    31250: (L, r, t) => {
      const e = t(72441);
      L.exports = (u, d) =>
        new e(u, d).set.map((o) =>
          o
            .map((i) => i.value)
            .join(" ")
            .trim()
            .split(" ")
        );
    },
    82321: (L, r, t) => {
      const e = t(72441);
      L.exports = (u, d) => {
        try {
          return new e(u, d).range || "*";
        } catch {
          return null;
        }
      };
    },
    83581: (L, r, t) => {
      var e = t(843).Buffer;
      function g(u, d) {
        (this._block = e.alloc(u)),
          (this._finalSize = d),
          (this._blockSize = u),
          (this._len = 0);
      }
      (g.prototype.update = function (u, d) {
        "string" == typeof u && (u = e.from(u, (d = d || "utf8")));
        for (
          var o = this._block,
            i = this._blockSize,
            s = u.length,
            l = this._len,
            b = 0;
          b < s;

        ) {
          for (var h = l % i, p = Math.min(s - b, i - h), c = 0; c < p; c++)
            o[h + c] = u[b + c];
          (b += p), (l += p) % i == 0 && this._update(o);
        }
        return (this._len += s), this;
      }),
        (g.prototype.digest = function (u) {
          var d = this._len % this._blockSize;
          (this._block[d] = 128),
            this._block.fill(0, d + 1),
            d >= this._finalSize &&
              (this._update(this._block), this._block.fill(0));
          var o = 8 * this._len;
          if (o <= 4294967295)
            this._block.writeUInt32BE(o, this._blockSize - 4);
          else {
            var i = (4294967295 & o) >>> 0;
            this._block.writeUInt32BE(
              (o - i) / 4294967296,
              this._blockSize - 8
            ),
              this._block.writeUInt32BE(i, this._blockSize - 4);
          }
          this._update(this._block);
          var l = this._hash();
          return u ? l.toString(u) : l;
        }),
        (g.prototype._update = function () {
          throw new Error("_update must be implemented by subclass");
        }),
        (L.exports = g);
    },
    97965: (L, r, t) => {
      var e = (L.exports = function (u) {
        u = u.toLowerCase();
        var d = e[u];
        if (!d)
          throw new Error(u + " is not supported (we accept pull requests)");
        return new d();
      });
      (e.sha = t(77915)),
        (e.sha1 = t(1229)),
        (e.sha224 = t(72959)),
        (e.sha256 = t(50450)),
        (e.sha384 = t(61723)),
        (e.sha512 = t(47914));
    },
    77915: (L, r, t) => {
      var e = t(66698),
        g = t(83581),
        u = t(843).Buffer,
        d = [1518500249, 1859775393, -1894007588, -899497514],
        o = new Array(80);
      function i() {
        this.init(), (this._w = o), g.call(this, 64, 56);
      }
      function s(h) {
        return (h << 5) | (h >>> 27);
      }
      function l(h) {
        return (h << 30) | (h >>> 2);
      }
      function b(h, p, c, n) {
        return 0 === h
          ? (p & c) | (~p & n)
          : 2 === h
          ? (p & c) | (p & n) | (c & n)
          : p ^ c ^ n;
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (i.prototype._update = function (h) {
          for (
            var p = this._w,
              c = 0 | this._a,
              n = 0 | this._b,
              f = 0 | this._c,
              v = 0 | this._d,
              E = 0 | this._e,
              w = 0;
            w < 16;
            ++w
          )
            p[w] = h.readInt32BE(4 * w);
          for (; w < 80; ++w)
            p[w] = p[w - 3] ^ p[w - 8] ^ p[w - 14] ^ p[w - 16];
          for (var C = 0; C < 80; ++C) {
            var A = ~~(C / 20),
              S = (s(c) + b(A, n, f, v) + E + p[C] + d[A]) | 0;
            (E = v), (v = f), (f = l(n)), (n = c), (c = S);
          }
          (this._a = (c + this._a) | 0),
            (this._b = (n + this._b) | 0),
            (this._c = (f + this._c) | 0),
            (this._d = (v + this._d) | 0),
            (this._e = (E + this._e) | 0);
        }),
        (i.prototype._hash = function () {
          var h = u.allocUnsafe(20);
          return (
            h.writeInt32BE(0 | this._a, 0),
            h.writeInt32BE(0 | this._b, 4),
            h.writeInt32BE(0 | this._c, 8),
            h.writeInt32BE(0 | this._d, 12),
            h.writeInt32BE(0 | this._e, 16),
            h
          );
        }),
        (L.exports = i);
    },
    1229: (L, r, t) => {
      var e = t(66698),
        g = t(83581),
        u = t(843).Buffer,
        d = [1518500249, 1859775393, -1894007588, -899497514],
        o = new Array(80);
      function i() {
        this.init(), (this._w = o), g.call(this, 64, 56);
      }
      function s(p) {
        return (p << 1) | (p >>> 31);
      }
      function l(p) {
        return (p << 5) | (p >>> 27);
      }
      function b(p) {
        return (p << 30) | (p >>> 2);
      }
      function h(p, c, n, f) {
        return 0 === p
          ? (c & n) | (~c & f)
          : 2 === p
          ? (c & n) | (c & f) | (n & f)
          : c ^ n ^ f;
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._a = 1732584193),
            (this._b = 4023233417),
            (this._c = 2562383102),
            (this._d = 271733878),
            (this._e = 3285377520),
            this
          );
        }),
        (i.prototype._update = function (p) {
          for (
            var c = this._w,
              n = 0 | this._a,
              f = 0 | this._b,
              v = 0 | this._c,
              E = 0 | this._d,
              w = 0 | this._e,
              C = 0;
            C < 16;
            ++C
          )
            c[C] = p.readInt32BE(4 * C);
          for (; C < 80; ++C)
            c[C] = s(c[C - 3] ^ c[C - 8] ^ c[C - 14] ^ c[C - 16]);
          for (var A = 0; A < 80; ++A) {
            var S = ~~(A / 20),
              M = (l(n) + h(S, f, v, E) + w + c[A] + d[S]) | 0;
            (w = E), (E = v), (v = b(f)), (f = n), (n = M);
          }
          (this._a = (n + this._a) | 0),
            (this._b = (f + this._b) | 0),
            (this._c = (v + this._c) | 0),
            (this._d = (E + this._d) | 0),
            (this._e = (w + this._e) | 0);
        }),
        (i.prototype._hash = function () {
          var p = u.allocUnsafe(20);
          return (
            p.writeInt32BE(0 | this._a, 0),
            p.writeInt32BE(0 | this._b, 4),
            p.writeInt32BE(0 | this._c, 8),
            p.writeInt32BE(0 | this._d, 12),
            p.writeInt32BE(0 | this._e, 16),
            p
          );
        }),
        (L.exports = i);
    },
    72959: (L, r, t) => {
      var e = t(66698),
        g = t(50450),
        u = t(83581),
        d = t(843).Buffer,
        o = new Array(64);
      function i() {
        this.init(), (this._w = o), u.call(this, 64, 56);
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._a = 3238371032),
            (this._b = 914150663),
            (this._c = 812702999),
            (this._d = 4144912697),
            (this._e = 4290775857),
            (this._f = 1750603025),
            (this._g = 1694076839),
            (this._h = 3204075428),
            this
          );
        }),
        (i.prototype._hash = function () {
          var s = d.allocUnsafe(28);
          return (
            s.writeInt32BE(this._a, 0),
            s.writeInt32BE(this._b, 4),
            s.writeInt32BE(this._c, 8),
            s.writeInt32BE(this._d, 12),
            s.writeInt32BE(this._e, 16),
            s.writeInt32BE(this._f, 20),
            s.writeInt32BE(this._g, 24),
            s
          );
        }),
        (L.exports = i);
    },
    50450: (L, r, t) => {
      var e = t(66698),
        g = t(83581),
        u = t(843).Buffer,
        d = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ],
        o = new Array(64);
      function i() {
        this.init(), (this._w = o), g.call(this, 64, 56);
      }
      function s(n, f, v) {
        return v ^ (n & (f ^ v));
      }
      function l(n, f, v) {
        return (n & f) | (v & (n | f));
      }
      function b(n) {
        return (
          ((n >>> 2) | (n << 30)) ^
          ((n >>> 13) | (n << 19)) ^
          ((n >>> 22) | (n << 10))
        );
      }
      function h(n) {
        return (
          ((n >>> 6) | (n << 26)) ^
          ((n >>> 11) | (n << 21)) ^
          ((n >>> 25) | (n << 7))
        );
      }
      function p(n) {
        return ((n >>> 7) | (n << 25)) ^ ((n >>> 18) | (n << 14)) ^ (n >>> 3);
      }
      function c(n) {
        return ((n >>> 17) | (n << 15)) ^ ((n >>> 19) | (n << 13)) ^ (n >>> 10);
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._a = 1779033703),
            (this._b = 3144134277),
            (this._c = 1013904242),
            (this._d = 2773480762),
            (this._e = 1359893119),
            (this._f = 2600822924),
            (this._g = 528734635),
            (this._h = 1541459225),
            this
          );
        }),
        (i.prototype._update = function (n) {
          for (
            var f = this._w,
              v = 0 | this._a,
              E = 0 | this._b,
              w = 0 | this._c,
              C = 0 | this._d,
              A = 0 | this._e,
              S = 0 | this._f,
              M = 0 | this._g,
              N = 0 | this._h,
              U = 0;
            U < 16;
            ++U
          )
            f[U] = n.readInt32BE(4 * U);
          for (; U < 64; ++U)
            f[U] = (c(f[U - 2]) + f[U - 7] + p(f[U - 15]) + f[U - 16]) | 0;
          for (var O = 0; O < 64; ++O) {
            var D = (N + h(A) + s(A, S, M) + d[O] + f[O]) | 0,
              K = (b(v) + l(v, E, w)) | 0;
            (N = M),
              (M = S),
              (S = A),
              (A = (C + D) | 0),
              (C = w),
              (w = E),
              (E = v),
              (v = (D + K) | 0);
          }
          (this._a = (v + this._a) | 0),
            (this._b = (E + this._b) | 0),
            (this._c = (w + this._c) | 0),
            (this._d = (C + this._d) | 0),
            (this._e = (A + this._e) | 0),
            (this._f = (S + this._f) | 0),
            (this._g = (M + this._g) | 0),
            (this._h = (N + this._h) | 0);
        }),
        (i.prototype._hash = function () {
          var n = u.allocUnsafe(32);
          return (
            n.writeInt32BE(this._a, 0),
            n.writeInt32BE(this._b, 4),
            n.writeInt32BE(this._c, 8),
            n.writeInt32BE(this._d, 12),
            n.writeInt32BE(this._e, 16),
            n.writeInt32BE(this._f, 20),
            n.writeInt32BE(this._g, 24),
            n.writeInt32BE(this._h, 28),
            n
          );
        }),
        (L.exports = i);
    },
    61723: (L, r, t) => {
      var e = t(66698),
        g = t(47914),
        u = t(83581),
        d = t(843).Buffer,
        o = new Array(160);
      function i() {
        this.init(), (this._w = o), u.call(this, 128, 112);
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._ah = 3418070365),
            (this._bh = 1654270250),
            (this._ch = 2438529370),
            (this._dh = 355462360),
            (this._eh = 1731405415),
            (this._fh = 2394180231),
            (this._gh = 3675008525),
            (this._hh = 1203062813),
            (this._al = 3238371032),
            (this._bl = 914150663),
            (this._cl = 812702999),
            (this._dl = 4144912697),
            (this._el = 4290775857),
            (this._fl = 1750603025),
            (this._gl = 1694076839),
            (this._hl = 3204075428),
            this
          );
        }),
        (i.prototype._hash = function () {
          var s = d.allocUnsafe(48);
          function l(b, h, p) {
            s.writeInt32BE(b, p), s.writeInt32BE(h, p + 4);
          }
          return (
            l(this._ah, this._al, 0),
            l(this._bh, this._bl, 8),
            l(this._ch, this._cl, 16),
            l(this._dh, this._dl, 24),
            l(this._eh, this._el, 32),
            l(this._fh, this._fl, 40),
            s
          );
        }),
        (L.exports = i);
    },
    47914: (L, r, t) => {
      var e = t(66698),
        g = t(83581),
        u = t(843).Buffer,
        d = [
          1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
          3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
          2453635748, 2937671579, 2870763221, 3664609560, 3624381080,
          2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987,
          3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103,
          633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774,
          944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983,
          1495990901, 1249150122, 1856431235, 1555081692, 3175218132,
          1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016,
          2952996808, 2566594879, 3210313671, 3203337956, 3336571891,
          1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895,
          168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372,
          1522805485, 1396182291, 2643833823, 1695183700, 2343527390,
          1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
          2730485921, 1290863460, 2820302411, 3158454273, 3259730800,
          3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804,
          1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734,
          3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877,
          3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063,
          2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
          2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
          2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
          3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
          3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
          174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
          685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
          1126000580, 2618297676, 1288033470, 3409855158, 1501505948,
          4234509866, 1607167915, 987167468, 1816402316, 1246189591,
        ],
        o = new Array(160);
      function i() {
        this.init(), (this._w = o), g.call(this, 128, 112);
      }
      function s(E, w, C) {
        return C ^ (E & (w ^ C));
      }
      function l(E, w, C) {
        return (E & w) | (C & (E | w));
      }
      function b(E, w) {
        return (
          ((E >>> 28) | (w << 4)) ^
          ((w >>> 2) | (E << 30)) ^
          ((w >>> 7) | (E << 25))
        );
      }
      function h(E, w) {
        return (
          ((E >>> 14) | (w << 18)) ^
          ((E >>> 18) | (w << 14)) ^
          ((w >>> 9) | (E << 23))
        );
      }
      function p(E, w) {
        return ((E >>> 1) | (w << 31)) ^ ((E >>> 8) | (w << 24)) ^ (E >>> 7);
      }
      function c(E, w) {
        return (
          ((E >>> 1) | (w << 31)) ^
          ((E >>> 8) | (w << 24)) ^
          ((E >>> 7) | (w << 25))
        );
      }
      function n(E, w) {
        return ((E >>> 19) | (w << 13)) ^ ((w >>> 29) | (E << 3)) ^ (E >>> 6);
      }
      function f(E, w) {
        return (
          ((E >>> 19) | (w << 13)) ^
          ((w >>> 29) | (E << 3)) ^
          ((E >>> 6) | (w << 26))
        );
      }
      function v(E, w) {
        return E >>> 0 < w >>> 0 ? 1 : 0;
      }
      e(i, g),
        (i.prototype.init = function () {
          return (
            (this._ah = 1779033703),
            (this._bh = 3144134277),
            (this._ch = 1013904242),
            (this._dh = 2773480762),
            (this._eh = 1359893119),
            (this._fh = 2600822924),
            (this._gh = 528734635),
            (this._hh = 1541459225),
            (this._al = 4089235720),
            (this._bl = 2227873595),
            (this._cl = 4271175723),
            (this._dl = 1595750129),
            (this._el = 2917565137),
            (this._fl = 725511199),
            (this._gl = 4215389547),
            (this._hl = 327033209),
            this
          );
        }),
        (i.prototype._update = function (E) {
          for (
            var w = this._w,
              C = 0 | this._ah,
              A = 0 | this._bh,
              S = 0 | this._ch,
              M = 0 | this._dh,
              N = 0 | this._eh,
              U = 0 | this._fh,
              O = 0 | this._gh,
              D = 0 | this._hh,
              K = 0 | this._al,
              G = 0 | this._bl,
              re = 0 | this._cl,
              ue = 0 | this._dl,
              P = 0 | this._el,
              m = 0 | this._fl,
              _ = 0 | this._gl,
              I = 0 | this._hl,
              R = 0;
            R < 32;
            R += 2
          )
            (w[R] = E.readInt32BE(4 * R)),
              (w[R + 1] = E.readInt32BE(4 * R + 4));
          for (; R < 160; R += 2) {
            var T = w[R - 30],
              F = w[R - 30 + 1],
              J = p(T, F),
              $ = c(F, T),
              x = n((T = w[R - 4]), (F = w[R - 4 + 1])),
              z = f(F, T),
              be = w[R - 32],
              Q = w[R - 32 + 1],
              B = ($ + w[R - 14 + 1]) | 0,
              V = (J + w[R - 14] + v(B, $)) | 0;
            (V =
              ((V = (V + x + v((B = (B + z) | 0), z)) | 0) +
                be +
                v((B = (B + Q) | 0), Q)) |
              0),
              (w[R] = V),
              (w[R + 1] = B);
          }
          for (var ee = 0; ee < 160; ee += 2) {
            (V = w[ee]), (B = w[ee + 1]);
            var oe = l(C, A, S),
              H = l(K, G, re),
              W = b(C, K),
              ne = b(K, C),
              le = h(N, P),
              Re = h(P, N),
              Se = d[ee],
              Ee = d[ee + 1],
              pe = s(N, U, O),
              Be = s(P, m, _),
              _e = (I + Re) | 0,
              xe = (D + le + v(_e, I)) | 0;
            xe =
              ((xe =
                ((xe = (xe + pe + v((_e = (_e + Be) | 0), Be)) | 0) +
                  Se +
                  v((_e = (_e + Ee) | 0), Ee)) |
                0) +
                V +
                v((_e = (_e + B) | 0), B)) |
              0;
            var Me = (ne + H) | 0,
              Z = (W + oe + v(Me, ne)) | 0;
            (D = O),
              (I = _),
              (O = U),
              (_ = m),
              (U = N),
              (m = P),
              (N = (M + xe + v((P = (ue + _e) | 0), ue)) | 0),
              (M = S),
              (ue = re),
              (S = A),
              (re = G),
              (A = C),
              (G = K),
              (C = (xe + Z + v((K = (_e + Me) | 0), _e)) | 0);
          }
          (this._al = (this._al + K) | 0),
            (this._bl = (this._bl + G) | 0),
            (this._cl = (this._cl + re) | 0),
            (this._dl = (this._dl + ue) | 0),
            (this._el = (this._el + P) | 0),
            (this._fl = (this._fl + m) | 0),
            (this._gl = (this._gl + _) | 0),
            (this._hl = (this._hl + I) | 0),
            (this._ah = (this._ah + C + v(this._al, K)) | 0),
            (this._bh = (this._bh + A + v(this._bl, G)) | 0),
            (this._ch = (this._ch + S + v(this._cl, re)) | 0),
            (this._dh = (this._dh + M + v(this._dl, ue)) | 0),
            (this._eh = (this._eh + N + v(this._el, P)) | 0),
            (this._fh = (this._fh + U + v(this._fl, m)) | 0),
            (this._gh = (this._gh + O + v(this._gl, _)) | 0),
            (this._hh = (this._hh + D + v(this._hl, I)) | 0);
        }),
        (i.prototype._hash = function () {
          var E = u.allocUnsafe(64);
          function w(C, A, S) {
            E.writeInt32BE(C, S), E.writeInt32BE(A, S + 4);
          }
          return (
            w(this._ah, this._al, 0),
            w(this._bh, this._bl, 8),
            w(this._ch, this._cl, 16),
            w(this._dh, this._dl, 24),
            w(this._eh, this._el, 32),
            w(this._fh, this._fl, 40),
            w(this._gh, this._gl, 48),
            w(this._hh, this._hl, 56),
            E
          );
        }),
        (L.exports = i);
    },
    57379: (L, r, t) => {
      "use strict";
      var e = t(90491),
        g = t(41098),
        u = t(61826),
        d = e("%TypeError%"),
        o = e("%WeakMap%", !0),
        i = e("%Map%", !0),
        s = g("WeakMap.prototype.get", !0),
        l = g("WeakMap.prototype.set", !0),
        b = g("WeakMap.prototype.has", !0),
        h = g("Map.prototype.get", !0),
        p = g("Map.prototype.set", !0),
        c = g("Map.prototype.has", !0),
        n = function (w, C) {
          for (var S, A = w; null !== (S = A.next); A = S)
            if (S.key === C)
              return (A.next = S.next), (S.next = w.next), (w.next = S), S;
        };
      L.exports = function () {
        var C,
          A,
          S,
          M = {
            assert: function (N) {
              if (!M.has(N))
                throw new d("Side channel does not contain " + u(N));
            },
            get: function (N) {
              if (o && N && ("object" == typeof N || "function" == typeof N)) {
                if (C) return s(C, N);
              } else if (i) {
                if (A) return h(A, N);
              } else if (S)
                return (function (w, C) {
                  var A = n(w, C);
                  return A && A.value;
                })(S, N);
            },
            has: function (N) {
              if (o && N && ("object" == typeof N || "function" == typeof N)) {
                if (C) return b(C, N);
              } else if (i) {
                if (A) return c(A, N);
              } else if (S)
                return (function (w, C) {
                  return !!n(w, C);
                })(S, N);
              return !1;
            },
            set: function (N, U) {
              o && N && ("object" == typeof N || "function" == typeof N)
                ? (C || (C = new o()), l(C, N, U))
                : i
                ? (A || (A = new i()), p(A, N, U))
                : (S || (S = { key: {}, next: null }),
                  (function (w, C, A) {
                    var S = n(w, C);
                    S
                      ? (S.value = A)
                      : (w.next = { key: C, next: w.next, value: A });
                  })(S, N, U));
            },
          };
        return M;
      };
    },
    72024: (L, r, t) => {
      "use strict";
      var e = t(843).Buffer,
        g =
          e.isEncoding ||
          function (C) {
            switch ((C = "" + C) && C.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function o(C) {
        var A;
        switch (
          ((this.encoding = (function d(C) {
            var A = (function u(C) {
              if (!C) return "utf8";
              for (var A; ; )
                switch (C) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return C;
                  default:
                    if (A) return;
                    (C = ("" + C).toLowerCase()), (A = !0);
                }
            })(C);
            if ("string" != typeof A && (e.isEncoding === g || !g(C)))
              throw new Error("Unknown encoding: " + C);
            return A || C;
          })(C)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = c), (this.end = n), (A = 4);
            break;
          case "utf8":
            (this.fillLast = b), (A = 4);
            break;
          case "base64":
            (this.text = f), (this.end = v), (A = 3);
            break;
          default:
            return (this.write = E), void (this.end = w);
        }
        (this.lastNeed = 0),
          (this.lastTotal = 0),
          (this.lastChar = e.allocUnsafe(A));
      }
      function i(C) {
        return C <= 127
          ? 0
          : C >> 5 == 6
          ? 2
          : C >> 4 == 14
          ? 3
          : C >> 3 == 30
          ? 4
          : C >> 6 == 2
          ? -1
          : -2;
      }
      function b(C) {
        var A = this.lastTotal - this.lastNeed,
          S = (function l(C, A, S) {
            if (128 != (192 & A[0])) return (C.lastNeed = 0), "\ufffd";
            if (C.lastNeed > 1 && A.length > 1) {
              if (128 != (192 & A[1])) return (C.lastNeed = 1), "\ufffd";
              if (C.lastNeed > 2 && A.length > 2 && 128 != (192 & A[2]))
                return (C.lastNeed = 2), "\ufffd";
            }
          })(this, C);
        return void 0 !== S
          ? S
          : this.lastNeed <= C.length
          ? (C.copy(this.lastChar, A, 0, this.lastNeed),
            this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (C.copy(this.lastChar, A, 0, C.length),
            void (this.lastNeed -= C.length));
      }
      function c(C, A) {
        if ((C.length - A) % 2 == 0) {
          var S = C.toString("utf16le", A);
          if (S) {
            var M = S.charCodeAt(S.length - 1);
            if (M >= 55296 && M <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = C[C.length - 2]),
                (this.lastChar[1] = C[C.length - 1]),
                S.slice(0, -1)
              );
          }
          return S;
        }
        return (
          (this.lastNeed = 1),
          (this.lastTotal = 2),
          (this.lastChar[0] = C[C.length - 1]),
          C.toString("utf16le", A, C.length - 1)
        );
      }
      function n(C) {
        var A = C && C.length ? this.write(C) : "";
        return this.lastNeed
          ? A +
              this.lastChar.toString(
                "utf16le",
                0,
                this.lastTotal - this.lastNeed
              )
          : A;
      }
      function f(C, A) {
        var S = (C.length - A) % 3;
        return 0 === S
          ? C.toString("base64", A)
          : ((this.lastNeed = 3 - S),
            (this.lastTotal = 3),
            1 === S
              ? (this.lastChar[0] = C[C.length - 1])
              : ((this.lastChar[0] = C[C.length - 2]),
                (this.lastChar[1] = C[C.length - 1])),
            C.toString("base64", A, C.length - S));
      }
      function v(C) {
        var A = C && C.length ? this.write(C) : "";
        return this.lastNeed
          ? A + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
          : A;
      }
      function E(C) {
        return C.toString(this.encoding);
      }
      function w(C) {
        return C && C.length ? this.write(C) : "";
      }
      (r.s = o),
        (o.prototype.write = function (C) {
          if (0 === C.length) return "";
          var A, S;
          if (this.lastNeed) {
            if (void 0 === (A = this.fillLast(C))) return "";
            (S = this.lastNeed), (this.lastNeed = 0);
          } else S = 0;
          return S < C.length
            ? A
              ? A + this.text(C, S)
              : this.text(C, S)
            : A || "";
        }),
        (o.prototype.end = function p(C) {
          var A = C && C.length ? this.write(C) : "";
          return this.lastNeed ? A + "\ufffd" : A;
        }),
        (o.prototype.text = function h(C, A) {
          var S = (function s(C, A, S) {
            var M = A.length - 1;
            if (M < S) return 0;
            var N = i(A[M]);
            return N >= 0
              ? (N > 0 && (C.lastNeed = N - 1), N)
              : --M < S || -2 === N
              ? 0
              : (N = i(A[M])) >= 0
              ? (N > 0 && (C.lastNeed = N - 2), N)
              : --M < S || -2 === N
              ? 0
              : (N = i(A[M])) >= 0
              ? (N > 0 && (2 === N ? (N = 0) : (C.lastNeed = N - 3)), N)
              : 0;
          })(this, C, A);
          if (!this.lastNeed) return C.toString("utf8", A);
          this.lastTotal = S;
          var M = C.length - (S - this.lastNeed);
          return C.copy(this.lastChar, 0, M), C.toString("utf8", A, M);
        }),
        (o.prototype.fillLast = function (C) {
          if (this.lastNeed <= C.length)
            return (
              C.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                this.lastNeed
              ),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          C.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, C.length),
            (this.lastNeed -= C.length);
        });
    },
    90496: (L) => {
      function t(e) {
        try {
          if (!global.localStorage) return !1;
        } catch {
          return !1;
        }
        var g = global.localStorage[e];
        return null != g && "true" === String(g).toLowerCase();
      }
      L.exports = function r(e, g) {
        if (t("noDeprecation")) return e;
        var u = !1;
        return function d() {
          if (!u) {
            if (t("throwDeprecation")) throw new Error(g);
            t("traceDeprecation") ? console.trace(g) : console.warn(g),
              (u = !0);
          }
          return e.apply(this, arguments);
        };
      };
    },
    20498: (L) => {
      L.exports = function t() {
        for (var e = {}, g = 0; g < arguments.length; g++) {
          var u = arguments[g];
          for (var d in u) r.call(u, d) && (e[d] = u[d]);
        }
        return e;
      };
      var r = Object.prototype.hasOwnProperty;
    },
    81171: (L) => {
      "use strict";
      L.exports = function (r) {
        r.prototype[Symbol.iterator] = function* () {
          for (let t = this.head; t; t = t.next) yield t.value;
        };
      };
    },
    94439: (L, r, t) => {
      "use strict";
      function e(i) {
        var s = this;
        if (
          (s instanceof e || (s = new e()),
          (s.tail = null),
          (s.head = null),
          (s.length = 0),
          i && "function" == typeof i.forEach)
        )
          i.forEach(function (h) {
            s.push(h);
          });
        else if (arguments.length > 0)
          for (var l = 0, b = arguments.length; l < b; l++)
            s.push(arguments[l]);
        return s;
      }
      function g(i, s, l) {
        var b = s === i.head ? new o(l, null, s, i) : new o(l, s, s.next, i);
        return (
          null === b.next && (i.tail = b),
          null === b.prev && (i.head = b),
          i.length++,
          b
        );
      }
      function u(i, s) {
        (i.tail = new o(s, i.tail, null, i)),
          i.head || (i.head = i.tail),
          i.length++;
      }
      function d(i, s) {
        (i.head = new o(s, null, i.head, i)),
          i.tail || (i.tail = i.head),
          i.length++;
      }
      function o(i, s, l, b) {
        if (!(this instanceof o)) return new o(i, s, l, b);
        (this.list = b),
          (this.value = i),
          s ? ((s.next = this), (this.prev = s)) : (this.prev = null),
          l ? ((l.prev = this), (this.next = l)) : (this.next = null);
      }
      (L.exports = e),
        (e.Node = o),
        (e.create = e),
        (e.prototype.removeNode = function (i) {
          if (i.list !== this)
            throw new Error("removing node which does not belong to this list");
          var s = i.next,
            l = i.prev;
          return (
            s && (s.prev = l),
            l && (l.next = s),
            i === this.head && (this.head = s),
            i === this.tail && (this.tail = l),
            i.list.length--,
            (i.next = null),
            (i.prev = null),
            (i.list = null),
            s
          );
        }),
        (e.prototype.unshiftNode = function (i) {
          if (i !== this.head) {
            i.list && i.list.removeNode(i);
            var s = this.head;
            (i.list = this),
              (i.next = s),
              s && (s.prev = i),
              (this.head = i),
              this.tail || (this.tail = i),
              this.length++;
          }
        }),
        (e.prototype.pushNode = function (i) {
          if (i !== this.tail) {
            i.list && i.list.removeNode(i);
            var s = this.tail;
            (i.list = this),
              (i.prev = s),
              s && (s.next = i),
              (this.tail = i),
              this.head || (this.head = i),
              this.length++;
          }
        }),
        (e.prototype.push = function () {
          for (var i = 0, s = arguments.length; i < s; i++)
            u(this, arguments[i]);
          return this.length;
        }),
        (e.prototype.unshift = function () {
          for (var i = 0, s = arguments.length; i < s; i++)
            d(this, arguments[i]);
          return this.length;
        }),
        (e.prototype.pop = function () {
          if (this.tail) {
            var i = this.tail.value;
            return (
              (this.tail = this.tail.prev),
              this.tail ? (this.tail.next = null) : (this.head = null),
              this.length--,
              i
            );
          }
        }),
        (e.prototype.shift = function () {
          if (this.head) {
            var i = this.head.value;
            return (
              (this.head = this.head.next),
              this.head ? (this.head.prev = null) : (this.tail = null),
              this.length--,
              i
            );
          }
        }),
        (e.prototype.forEach = function (i, s) {
          s = s || this;
          for (var l = this.head, b = 0; null !== l; b++)
            i.call(s, l.value, b, this), (l = l.next);
        }),
        (e.prototype.forEachReverse = function (i, s) {
          s = s || this;
          for (var l = this.tail, b = this.length - 1; null !== l; b--)
            i.call(s, l.value, b, this), (l = l.prev);
        }),
        (e.prototype.get = function (i) {
          for (var s = 0, l = this.head; null !== l && s < i; s++) l = l.next;
          if (s === i && null !== l) return l.value;
        }),
        (e.prototype.getReverse = function (i) {
          for (var s = 0, l = this.tail; null !== l && s < i; s++) l = l.prev;
          if (s === i && null !== l) return l.value;
        }),
        (e.prototype.map = function (i, s) {
          s = s || this;
          for (var l = new e(), b = this.head; null !== b; )
            l.push(i.call(s, b.value, this)), (b = b.next);
          return l;
        }),
        (e.prototype.mapReverse = function (i, s) {
          s = s || this;
          for (var l = new e(), b = this.tail; null !== b; )
            l.push(i.call(s, b.value, this)), (b = b.prev);
          return l;
        }),
        (e.prototype.reduce = function (i, s) {
          var l,
            b = this.head;
          if (arguments.length > 1) l = s;
          else {
            if (!this.head)
              throw new TypeError("Reduce of empty list with no initial value");
            (b = this.head.next), (l = this.head.value);
          }
          for (var h = 0; null !== b; h++) (l = i(l, b.value, h)), (b = b.next);
          return l;
        }),
        (e.prototype.reduceReverse = function (i, s) {
          var l,
            b = this.tail;
          if (arguments.length > 1) l = s;
          else {
            if (!this.tail)
              throw new TypeError("Reduce of empty list with no initial value");
            (b = this.tail.prev), (l = this.tail.value);
          }
          for (var h = this.length - 1; null !== b; h--)
            (l = i(l, b.value, h)), (b = b.prev);
          return l;
        }),
        (e.prototype.toArray = function () {
          for (
            var i = new Array(this.length), s = 0, l = this.head;
            null !== l;
            s++
          )
            (i[s] = l.value), (l = l.next);
          return i;
        }),
        (e.prototype.toArrayReverse = function () {
          for (
            var i = new Array(this.length), s = 0, l = this.tail;
            null !== l;
            s++
          )
            (i[s] = l.value), (l = l.prev);
          return i;
        }),
        (e.prototype.slice = function (i, s) {
          (s = s || this.length) < 0 && (s += this.length),
            (i = i || 0) < 0 && (i += this.length);
          var l = new e();
          if (s < i || s < 0) return l;
          i < 0 && (i = 0), s > this.length && (s = this.length);
          for (var b = 0, h = this.head; null !== h && b < i; b++) h = h.next;
          for (; null !== h && b < s; b++, h = h.next) l.push(h.value);
          return l;
        }),
        (e.prototype.sliceReverse = function (i, s) {
          (s = s || this.length) < 0 && (s += this.length),
            (i = i || 0) < 0 && (i += this.length);
          var l = new e();
          if (s < i || s < 0) return l;
          i < 0 && (i = 0), s > this.length && (s = this.length);
          for (var b = this.length, h = this.tail; null !== h && b > s; b--)
            h = h.prev;
          for (; null !== h && b > i; b--, h = h.prev) l.push(h.value);
          return l;
        }),
        (e.prototype.splice = function (i, s, ...l) {
          i > this.length && (i = this.length - 1),
            i < 0 && (i = this.length + i);
          for (var b = 0, h = this.head; null !== h && b < i; b++) h = h.next;
          var p = [];
          for (b = 0; h && b < s; b++)
            p.push(h.value), (h = this.removeNode(h));
          for (
            null === h && (h = this.tail),
              h !== this.head && h !== this.tail && (h = h.prev),
              b = 0;
            b < l.length;
            b++
          )
            h = g(this, h, l[b]);
          return p;
        }),
        (e.prototype.reverse = function () {
          for (
            var i = this.head, s = this.tail, l = i;
            null !== l;
            l = l.prev
          ) {
            var b = l.prev;
            (l.prev = l.next), (l.next = b);
          }
          return (this.head = s), (this.tail = i), this;
        });
      try {
        t(81171)(e);
      } catch {}
    },
    46601: () => {},
    24654: () => {},
    52361: () => {},
    94616: () => {},
    59344: (L) => {
      function r(e, g, u, d, o, i, s) {
        try {
          var l = e[i](s),
            b = l.value;
        } catch (h) {
          return void u(h);
        }
        l.done ? g(b) : Promise.resolve(b).then(d, o);
      }
      (L.exports = function t(e) {
        return function () {
          var g = this,
            u = arguments;
          return new Promise(function (d, o) {
            var i = e.apply(g, u);
            function s(b) {
              r(i, d, o, s, l, "next", b);
            }
            function l(b) {
              r(i, d, o, s, l, "throw", b);
            }
            s(void 0);
          });
        };
      }),
        (L.exports.__esModule = !0),
        (L.exports.default = L.exports);
    },
    13921: (L, r, t) => {
      "use strict";
      t.r(r),
        t.d(r, {
          Struct: () => h,
          StructError: () => e,
          any: () => D,
          array: () => K,
          assert: () => p,
          assign: () => E,
          bigint: () => G,
          boolean: () => re,
          coerce: () => W,
          create: () => c,
          date: () => ue,
          defaulted: () => ne,
          define: () => w,
          deprecated: () => C,
          dynamic: () => A,
          empty: () => Re,
          enums: () => P,
          func: () => m,
          instance: () => _,
          integer: () => I,
          intersection: () => R,
          is: () => f,
          lazy: () => S,
          literal: () => T,
          map: () => F,
          mask: () => n,
          max: () => Ee,
          min: () => pe,
          never: () => J,
          nonempty: () => Be,
          nullable: () => $,
          number: () => x,
          object: () => z,
          omit: () => M,
          optional: () => de,
          partial: () => N,
          pattern: () => _e,
          pick: () => U,
          record: () => fe,
          refine: () => Me,
          regexp: () => be,
          set: () => Q,
          size: () => xe,
          string: () => B,
          struct: () => O,
          trimmed: () => le,
          tuple: () => V,
          type: () => ee,
          union: () => oe,
          unknown: () => H,
          validate: () => v,
        });
      class e extends TypeError {
        constructor(X, te) {
          let ie;
          const { message: ve, explanation: we, ...Oe } = X,
            { path: Fe } = X,
            Le = 0 === Fe.length ? ve : `At path: ${Fe.join(".")} -- ${ve}`;
          super(we ?? Le),
            null != we && (this.cause = Le),
            Object.assign(this, Oe),
            (this.name = this.constructor.name),
            (this.failures = () => ie ?? (ie = [X, ...te()]));
        }
      }
      function u(Z) {
        return "object" == typeof Z && null != Z;
      }
      function d(Z) {
        if ("[object Object]" !== Object.prototype.toString.call(Z)) return !1;
        const X = Object.getPrototypeOf(Z);
        return null === X || X === Object.prototype;
      }
      function o(Z) {
        return "symbol" == typeof Z
          ? Z.toString()
          : "string" == typeof Z
          ? JSON.stringify(Z)
          : `${Z}`;
      }
      function s(Z, X, te, ie) {
        if (!0 === Z) return;
        !1 === Z ? (Z = {}) : "string" == typeof Z && (Z = { message: Z });
        const { path: ve, branch: we } = X,
          { type: Oe } = te,
          {
            refinement: Fe,
            message: Le = `Expected a value of type \`${Oe}\`${
              Fe ? ` with refinement \`${Fe}\`` : ""
            }, but received: \`${o(ie)}\``,
          } = Z;
        return {
          value: ie,
          type: Oe,
          refinement: Fe,
          key: ve[ve.length - 1],
          path: ve,
          branch: we,
          ...Z,
          message: Le,
        };
      }
      function* l(Z, X, te, ie) {
        (function g(Z) {
          return u(Z) && "function" == typeof Z[Symbol.iterator];
        })(Z) || (Z = [Z]);
        for (const ve of Z) {
          const we = s(ve, X, te, ie);
          we && (yield we);
        }
      }
      function* b(Z, X, te = {}) {
        const {
            path: ie = [],
            branch: ve = [Z],
            coerce: we = !1,
            mask: Oe = !1,
          } = te,
          Fe = { path: ie, branch: ve };
        if (
          we &&
          ((Z = X.coercer(Z, Fe)),
          Oe && "type" !== X.type && u(X.schema) && u(Z) && !Array.isArray(Z))
        )
          for (const q in Z) void 0 === X.schema[q] && delete Z[q];
        let Le = "valid";
        for (const q of X.validator(Z, Fe))
          (q.explanation = te.message), (Le = "not_valid"), yield [q, void 0];
        for (let [q, ae, Pe] of X.entries(Z, Fe)) {
          const ke = b(ae, Pe, {
            path: void 0 === q ? ie : [...ie, q],
            branch: void 0 === q ? ve : [...ve, ae],
            coerce: we,
            mask: Oe,
            message: te.message,
          });
          for (const Ve of ke)
            Ve[0]
              ? ((Le = null != Ve[0].refinement ? "not_refined" : "not_valid"),
                yield [Ve[0], void 0])
              : we &&
                ((ae = Ve[1]),
                void 0 === q
                  ? (Z = ae)
                  : Z instanceof Map
                  ? Z.set(q, ae)
                  : Z instanceof Set
                  ? Z.add(ae)
                  : u(Z) && (void 0 !== ae || q in Z) && (Z[q] = ae));
        }
        if ("not_valid" !== Le)
          for (const q of X.refiner(Z, Fe))
            (q.explanation = te.message),
              (Le = "not_refined"),
              yield [q, void 0];
        "valid" === Le && (yield [void 0, Z]);
      }
      class h {
        constructor(X) {
          const {
            type: te,
            schema: ie,
            validator: ve,
            refiner: we,
            coercer: Oe = (Le) => Le,
            entries: Fe = function* () {},
          } = X;
          (this.type = te),
            (this.schema = ie),
            (this.entries = Fe),
            (this.coercer = Oe),
            (this.validator = ve
              ? (Le, q) => l(ve(Le, q), q, this, Le)
              : () => []),
            (this.refiner = we
              ? (Le, q) => l(we(Le, q), q, this, Le)
              : () => []);
        }
        assert(X, te) {
          return p(X, this, te);
        }
        create(X, te) {
          return c(X, this, te);
        }
        is(X) {
          return f(X, this);
        }
        mask(X, te) {
          return n(X, this, te);
        }
        validate(X, te = {}) {
          return v(X, this, te);
        }
      }
      function p(Z, X, te) {
        const ie = v(Z, X, { message: te });
        if (ie[0]) throw ie[0];
      }
      function c(Z, X, te) {
        const ie = v(Z, X, { coerce: !0, message: te });
        if (ie[0]) throw ie[0];
        return ie[1];
      }
      function n(Z, X, te) {
        const ie = v(Z, X, { coerce: !0, mask: !0, message: te });
        if (ie[0]) throw ie[0];
        return ie[1];
      }
      function f(Z, X) {
        return !v(Z, X)[0];
      }
      function v(Z, X, te = {}) {
        const ie = b(Z, X, te),
          ve = (function i(Z) {
            const { done: X, value: te } = Z.next();
            return X ? void 0 : te;
          })(ie);
        return ve[0]
          ? [
              new e(ve[0], function* () {
                for (const Oe of ie) Oe[0] && (yield Oe[0]);
              }),
              void 0,
            ]
          : [void 0, ve[1]];
      }
      function E(...Z) {
        const X = "type" === Z[0].type,
          te = Z.map((ve) => ve.schema),
          ie = Object.assign({}, ...te);
        return X ? ee(ie) : z(ie);
      }
      function w(Z, X) {
        return new h({ type: Z, schema: null, validator: X });
      }
      function C(Z, X) {
        return new h({
          ...Z,
          refiner: (te, ie) => void 0 === te || Z.refiner(te, ie),
          validator: (te, ie) =>
            void 0 === te || (X(te, ie), Z.validator(te, ie)),
        });
      }
      function A(Z) {
        return new h({
          type: "dynamic",
          schema: null,
          *entries(X, te) {
            yield* Z(X, te).entries(X, te);
          },
          validator: (X, te) => Z(X, te).validator(X, te),
          coercer: (X, te) => Z(X, te).coercer(X, te),
          refiner: (X, te) => Z(X, te).refiner(X, te),
        });
      }
      function S(Z) {
        let X;
        return new h({
          type: "lazy",
          schema: null,
          *entries(te, ie) {
            X ?? (X = Z()), yield* X.entries(te, ie);
          },
          validator: (te, ie) => (X ?? (X = Z()), X.validator(te, ie)),
          coercer: (te, ie) => (X ?? (X = Z()), X.coercer(te, ie)),
          refiner: (te, ie) => (X ?? (X = Z()), X.refiner(te, ie)),
        });
      }
      function M(Z, X) {
        const { schema: te } = Z,
          ie = { ...te };
        for (const ve of X) delete ie[ve];
        return "type" === Z.type ? ee(ie) : z(ie);
      }
      function N(Z) {
        const X = Z instanceof h ? { ...Z.schema } : { ...Z };
        for (const te in X) X[te] = de(X[te]);
        return z(X);
      }
      function U(Z, X) {
        const { schema: te } = Z,
          ie = {};
        for (const ve of X) ie[ve] = te[ve];
        return z(ie);
      }
      function O(Z, X) {
        return (
          console.warn(
            "superstruct@0.11 - The `struct` helper has been renamed to `define`."
          ),
          w(Z, X)
        );
      }
      function D() {
        return w("any", () => !0);
      }
      function K(Z) {
        return new h({
          type: "array",
          schema: Z,
          *entries(X) {
            if (Z && Array.isArray(X))
              for (const [te, ie] of X.entries()) yield [te, ie, Z];
          },
          coercer: (X) => (Array.isArray(X) ? X.slice() : X),
          validator: (X) =>
            Array.isArray(X) ||
            `Expected an array value, but received: ${o(X)}`,
        });
      }
      function G() {
        return w("bigint", (Z) => "bigint" == typeof Z);
      }
      function re() {
        return w("boolean", (Z) => "boolean" == typeof Z);
      }
      function ue() {
        return w(
          "date",
          (Z) =>
            (Z instanceof Date && !isNaN(Z.getTime())) ||
            `Expected a valid \`Date\` object, but received: ${o(Z)}`
        );
      }
      function P(Z) {
        const X = {},
          te = Z.map((ie) => o(ie)).join();
        for (const ie of Z) X[ie] = ie;
        return new h({
          type: "enums",
          schema: X,
          validator: (ie) =>
            Z.includes(ie) ||
            `Expected one of \`${te}\`, but received: ${o(ie)}`,
        });
      }
      function m() {
        return w(
          "func",
          (Z) =>
            "function" == typeof Z ||
            `Expected a function, but received: ${o(Z)}`
        );
      }
      function _(Z) {
        return w(
          "instance",
          (X) =>
            X instanceof Z ||
            `Expected a \`${Z.name}\` instance, but received: ${o(X)}`
        );
      }
      function I() {
        return w(
          "integer",
          (Z) =>
            ("number" == typeof Z && !isNaN(Z) && Number.isInteger(Z)) ||
            `Expected an integer, but received: ${o(Z)}`
        );
      }
      function R(Z) {
        return new h({
          type: "intersection",
          schema: null,
          *entries(X, te) {
            for (const ie of Z) yield* ie.entries(X, te);
          },
          *validator(X, te) {
            for (const ie of Z) yield* ie.validator(X, te);
          },
          *refiner(X, te) {
            for (const ie of Z) yield* ie.refiner(X, te);
          },
        });
      }
      function T(Z) {
        const X = o(Z),
          te = typeof Z;
        return new h({
          type: "literal",
          schema:
            "string" === te || "number" === te || "boolean" === te ? Z : null,
          validator: (ie) =>
            ie === Z || `Expected the literal \`${X}\`, but received: ${o(ie)}`,
        });
      }
      function F(Z, X) {
        return new h({
          type: "map",
          schema: null,
          *entries(te) {
            if (Z && X && te instanceof Map)
              for (const [ie, ve] of te.entries())
                yield [ie, ie, Z], yield [ie, ve, X];
          },
          coercer: (te) => (te instanceof Map ? new Map(te) : te),
          validator: (te) =>
            te instanceof Map ||
            `Expected a \`Map\` object, but received: ${o(te)}`,
        });
      }
      function J() {
        return w("never", () => !1);
      }
      function $(Z) {
        return new h({
          ...Z,
          validator: (X, te) => null === X || Z.validator(X, te),
          refiner: (X, te) => null === X || Z.refiner(X, te),
        });
      }
      function x() {
        return w(
          "number",
          (Z) =>
            ("number" == typeof Z && !isNaN(Z)) ||
            `Expected a number, but received: ${o(Z)}`
        );
      }
      function z(Z) {
        const X = Z ? Object.keys(Z) : [],
          te = J();
        return new h({
          type: "object",
          schema: Z || null,
          *entries(ie) {
            if (Z && u(ie)) {
              const ve = new Set(Object.keys(ie));
              for (const we of X) ve.delete(we), yield [we, ie[we], Z[we]];
              for (const we of ve) yield [we, ie[we], te];
            }
          },
          validator: (ie) =>
            u(ie) || `Expected an object, but received: ${o(ie)}`,
          coercer: (ie) => (u(ie) ? { ...ie } : ie),
        });
      }
      function de(Z) {
        return new h({
          ...Z,
          validator: (X, te) => void 0 === X || Z.validator(X, te),
          refiner: (X, te) => void 0 === X || Z.refiner(X, te),
        });
      }
      function fe(Z, X) {
        return new h({
          type: "record",
          schema: null,
          *entries(te) {
            if (u(te))
              for (const ie in te) {
                const ve = te[ie];
                yield [ie, ie, Z], yield [ie, ve, X];
              }
          },
          validator: (te) =>
            u(te) || `Expected an object, but received: ${o(te)}`,
        });
      }
      function be() {
        return w("regexp", (Z) => Z instanceof RegExp);
      }
      function Q(Z) {
        return new h({
          type: "set",
          schema: null,
          *entries(X) {
            if (Z && X instanceof Set) for (const te of X) yield [te, te, Z];
          },
          coercer: (X) => (X instanceof Set ? new Set(X) : X),
          validator: (X) =>
            X instanceof Set ||
            `Expected a \`Set\` object, but received: ${o(X)}`,
        });
      }
      function B() {
        return w(
          "string",
          (Z) =>
            "string" == typeof Z || `Expected a string, but received: ${o(Z)}`
        );
      }
      function V(Z) {
        const X = J();
        return new h({
          type: "tuple",
          schema: null,
          *entries(te) {
            if (Array.isArray(te)) {
              const ie = Math.max(Z.length, te.length);
              for (let ve = 0; ve < ie; ve++) yield [ve, te[ve], Z[ve] || X];
            }
          },
          validator: (te) =>
            Array.isArray(te) || `Expected an array, but received: ${o(te)}`,
        });
      }
      function ee(Z) {
        const X = Object.keys(Z);
        return new h({
          type: "type",
          schema: Z,
          *entries(te) {
            if (u(te)) for (const ie of X) yield [ie, te[ie], Z[ie]];
          },
          validator: (te) =>
            u(te) || `Expected an object, but received: ${o(te)}`,
          coercer: (te) => (u(te) ? { ...te } : te),
        });
      }
      function oe(Z) {
        const X = Z.map((te) => te.type).join(" | ");
        return new h({
          type: "union",
          schema: null,
          coercer(te) {
            for (const ie of Z) {
              const [ve, we] = ie.validate(te, { coerce: !0 });
              if (!ve) return we;
            }
            return te;
          },
          validator(te, ie) {
            const ve = [];
            for (const we of Z) {
              const [...Oe] = b(te, we, ie),
                [Fe] = Oe;
              if (!Fe[0]) return [];
              for (const [Le] of Oe) Le && ve.push(Le);
            }
            return [
              `Expected the value to satisfy a union of \`${X}\`, but received: ${o(
                te
              )}`,
              ...ve,
            ];
          },
        });
      }
      function H() {
        return w("unknown", () => !0);
      }
      function W(Z, X, te) {
        return new h({
          ...Z,
          coercer: (ie, ve) =>
            f(ie, X) ? Z.coercer(te(ie, ve), ve) : Z.coercer(ie, ve),
        });
      }
      function ne(Z, X, te = {}) {
        return W(Z, H(), (ie) => {
          const ve = "function" == typeof X ? X() : X;
          if (void 0 === ie) return ve;
          if (!te.strict && d(ie) && d(ve)) {
            const we = { ...ie };
            let Oe = !1;
            for (const Fe in ve)
              void 0 === we[Fe] && ((we[Fe] = ve[Fe]), (Oe = !0));
            if (Oe) return we;
          }
          return ie;
        });
      }
      function le(Z) {
        return W(Z, B(), (X) => X.trim());
      }
      function Re(Z) {
        return Me(Z, "empty", (X) => {
          const te = Se(X);
          return (
            0 === te ||
            `Expected an empty ${Z.type} but received one with a size of \`${te}\``
          );
        });
      }
      function Se(Z) {
        return Z instanceof Map || Z instanceof Set ? Z.size : Z.length;
      }
      function Ee(Z, X, te = {}) {
        const { exclusive: ie } = te;
        return Me(Z, "max", (ve) =>
          ie
            ? ve < X
            : ve <= X ||
              `Expected a ${Z.type} less than ${
                ie ? "" : "or equal to "
              }${X} but received \`${ve}\``
        );
      }
      function pe(Z, X, te = {}) {
        const { exclusive: ie } = te;
        return Me(Z, "min", (ve) =>
          ie
            ? ve > X
            : ve >= X ||
              `Expected a ${Z.type} greater than ${
                ie ? "" : "or equal to "
              }${X} but received \`${ve}\``
        );
      }
      function Be(Z) {
        return Me(
          Z,
          "nonempty",
          (X) =>
            Se(X) > 0 ||
            `Expected a nonempty ${Z.type} but received an empty one`
        );
      }
      function _e(Z, X) {
        return Me(
          Z,
          "pattern",
          (te) =>
            X.test(te) ||
            `Expected a ${Z.type} matching \`/${X.source}/\` but received "${te}"`
        );
      }
      function xe(Z, X, te = X) {
        const ie = `Expected a ${Z.type}`,
          ve = X === te ? `of \`${X}\`` : `between \`${X}\` and \`${te}\``;
        return Me(Z, "size", (we) => {
          if ("number" == typeof we || we instanceof Date)
            return (
              (X <= we && we <= te) || `${ie} ${ve} but received \`${we}\``
            );
          if (we instanceof Map || we instanceof Set) {
            const { size: Oe } = we;
            return (
              (X <= Oe && Oe <= te) ||
              `${ie} with a size ${ve} but received one with a size of \`${Oe}\``
            );
          }
          {
            const { length: Oe } = we;
            return (
              (X <= Oe && Oe <= te) ||
              `${ie} with a length ${ve} but received one with a length of \`${Oe}\``
            );
          }
        });
      }
      function Me(Z, X, te) {
        return new h({
          ...Z,
          *refiner(ie, ve) {
            yield* Z.refiner(ie, ve);
            const Oe = l(te(ie, ve), ve, Z, ie);
            for (const Fe of Oe) yield { ...Fe, refinement: X };
          },
        });
      }
    },
  },
]);
