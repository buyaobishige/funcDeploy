/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c936177d5765b77803690166cdd7b6fd"
  },
  {
    "url": "assets/css/0.styles.c0b023b8.css",
    "revision": "e25756f4dd6f4ba3d2746be2e34ad272"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fc83a47e.js",
    "revision": "f3d6ea0a512ad53309f687a476b71771"
  },
  {
    "url": "assets/js/11.6bb10719.js",
    "revision": "74a7663d612c07f1d1c08a0d5e84eb1d"
  },
  {
    "url": "assets/js/12.fa49af92.js",
    "revision": "c0d830cae4330f2a5ea6ba7bffe84e1b"
  },
  {
    "url": "assets/js/13.5a1167a1.js",
    "revision": "99fc6a0afdb2f4ac808fbb475d1d620d"
  },
  {
    "url": "assets/js/14.89c1651b.js",
    "revision": "83e61f71bfcd654a448691dc78844aba"
  },
  {
    "url": "assets/js/15.446d4ca1.js",
    "revision": "dc1259227e916f1bbd0a38df7e7ed9d5"
  },
  {
    "url": "assets/js/16.88004e01.js",
    "revision": "c67b2af3ede59c11a3f7f81facbe16e5"
  },
  {
    "url": "assets/js/17.d2415b68.js",
    "revision": "4d25347b86ea5fdbd755324393e0a5bf"
  },
  {
    "url": "assets/js/18.c8115e65.js",
    "revision": "d81861d7c8adcc13da0a0bb22a684442"
  },
  {
    "url": "assets/js/19.e7749221.js",
    "revision": "23f664ffaae8369a45a3a71cb180a2ac"
  },
  {
    "url": "assets/js/2.ed5ce42e.js",
    "revision": "e06f0cb1046eab8bf8311d53407fa8d4"
  },
  {
    "url": "assets/js/20.a853b4db.js",
    "revision": "7924af6b8aae5e4ea7de9852acd7fdea"
  },
  {
    "url": "assets/js/21.0ee145b5.js",
    "revision": "3b7eebd3c3c93a39a7cb185ddca892fe"
  },
  {
    "url": "assets/js/22.8b85fb13.js",
    "revision": "c6106e7ba8fb65e40a1379b35761bc54"
  },
  {
    "url": "assets/js/23.d77f581a.js",
    "revision": "a3091870c1a722bf250422ee58345200"
  },
  {
    "url": "assets/js/24.cbed620b.js",
    "revision": "728be315e0c18b037e373254cb7213ce"
  },
  {
    "url": "assets/js/3.a7b73d94.js",
    "revision": "5149754f81bb980e0a0373ca4072e3fb"
  },
  {
    "url": "assets/js/4.3013cf42.js",
    "revision": "109334e2c78e40daa0e472ef2e8bebaf"
  },
  {
    "url": "assets/js/5.6e6f0372.js",
    "revision": "cde1fe37c6dcf94f0bb7d1fbef2b2dd3"
  },
  {
    "url": "assets/js/6.3663231a.js",
    "revision": "293d663c24d558523127772ab73d5bbb"
  },
  {
    "url": "assets/js/7.7c2c988c.js",
    "revision": "9a339803fbc84c25158c28e9290322b1"
  },
  {
    "url": "assets/js/8.adc752e7.js",
    "revision": "51dcbba18390e3d23705a23affcd5003"
  },
  {
    "url": "assets/js/9.67ff7d0f.js",
    "revision": "d84444a3bee2e19d7fb3d7626d742b2d"
  },
  {
    "url": "assets/js/app.1a7d6fab.js",
    "revision": "64d19384cb243094422247d1b40d025d"
  },
  {
    "url": "index.html",
    "revision": "b3aa7c9aee0e9d4a2fac25dc460bd51f"
  },
  {
    "url": "lin/×JavaScript-1.html",
    "revision": "1063c9d637168e392e864e3db13fe210"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "06f1f4179094b6fdd8212943d2a7b509"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "4c85ea22e5e2afd3868096a99d778491"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "510decd9d3766125f4be3acf8418a16e"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "668b4c5b81147adbd8b3db3aed5f092b"
  },
  {
    "url": "lin/path.html",
    "revision": "385545b24c089acf5fa44f7b278736b1"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "4c3b702d2545944c114a3f307b35eb7f"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "e55d09b70ff07211649082f736f5f976"
  },
  {
    "url": "lin/Russia.html",
    "revision": "4cdfec9f5b5e328eb08ef058e691ed2d"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "ce2c4ed1ee3d5a55dc8de2f87e69e9fb"
  },
  {
    "url": "view.png",
    "revision": "da8443885965a32bc2537b3a24d62bca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
