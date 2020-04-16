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
    "revision": "68c4681f29a26f40369d1b1e21cca436"
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
    "url": "assets/js/11.08e5caa3.js",
    "revision": "2305e874e79eed45b0cc06d49f93d067"
  },
  {
    "url": "assets/js/12.ee27d349.js",
    "revision": "33fecb908237ffb0f3879edd87453c4d"
  },
  {
    "url": "assets/js/13.1337540b.js",
    "revision": "8d9f614a1953fbb02cbce16c319b1b2f"
  },
  {
    "url": "assets/js/14.89c1651b.js",
    "revision": "83e61f71bfcd654a448691dc78844aba"
  },
  {
    "url": "assets/js/15.a18ef3c5.js",
    "revision": "0c2c395ed5511821d4422222e7bf9e8f"
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
    "url": "assets/js/18.d3c60ff4.js",
    "revision": "7347b7f3d8c0fdc8f135b8f7312e9705"
  },
  {
    "url": "assets/js/19.8fd28c00.js",
    "revision": "e7ae1eca6b4851da89c841d1bd4a4f8e"
  },
  {
    "url": "assets/js/2.ed5ce42e.js",
    "revision": "e06f0cb1046eab8bf8311d53407fa8d4"
  },
  {
    "url": "assets/js/20.085779e3.js",
    "revision": "7ca5dc9900ac1b44c8d7f73566ca1ef2"
  },
  {
    "url": "assets/js/21.fdba249e.js",
    "revision": "41f859230e7679ac9f156c7d236b21df"
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
    "url": "assets/js/4.e2819a71.js",
    "revision": "24446489b559d6aa7a7ed80f74b21402"
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
    "url": "assets/js/9.d23f06c2.js",
    "revision": "6b32dacd74837790fed2be3e26021340"
  },
  {
    "url": "assets/js/app.483c2d47.js",
    "revision": "df700f60577dcaacefe422df25f4cc88"
  },
  {
    "url": "index.html",
    "revision": "718411c8fe23bed0ffb96852934c268b"
  },
  {
    "url": "lin/×JavaScript-1.html",
    "revision": "cef03bb65f8b126b23f98e6e2e8c0b50"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "0ad0ad1859212402aac453420f68e10e"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "cfa86a473eb9c3e5d25f3d890b7aad6d"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "724b79eaa1d236aba67c620efbcacda0"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "f2d16cbc140ddcd3055bd9eb8f5167d9"
  },
  {
    "url": "lin/path.html",
    "revision": "c37abaa9f2e2e6bf04df8fe9686aabf9"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "aa778ad3db28d9de7c87efa1f80bd77e"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "2a6e3e0d26ea8c1c90d7c63077535b97"
  },
  {
    "url": "lin/Russia.html",
    "revision": "b598f7a27e7b63c2433b4eb9a6c2a0f8"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "d7055b035b9515bf9e8eb76e4b6f8949"
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
