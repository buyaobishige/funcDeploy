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
    "revision": "ffca5273d966293b7d7b76742cfab9b8"
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
    "url": "assets/js/11.474f79e0.js",
    "revision": "c78e27f3300478f2d0cfeffa230dbf7d"
  },
  {
    "url": "assets/js/12.ee27d349.js",
    "revision": "33fecb908237ffb0f3879edd87453c4d"
  },
  {
    "url": "assets/js/13.5e34d0dc.js",
    "revision": "9e60a709dfa5525616629705f938020a"
  },
  {
    "url": "assets/js/14.d4f478e8.js",
    "revision": "5f354ae5280732a5ed56a06d426d403f"
  },
  {
    "url": "assets/js/15.6e4aa32b.js",
    "revision": "b892058065ffd4a31422cbc8f8f54dd8"
  },
  {
    "url": "assets/js/16.874396f2.js",
    "revision": "a55539f5eeb41cdb81f0bd6e6348ef38"
  },
  {
    "url": "assets/js/17.d2415b68.js",
    "revision": "4d25347b86ea5fdbd755324393e0a5bf"
  },
  {
    "url": "assets/js/18.6b6a856f.js",
    "revision": "6ddf6e426a45dc6b784c3538670eab9e"
  },
  {
    "url": "assets/js/19.a6717b1a.js",
    "revision": "ef172606dcc5671c54b1722eb05f338f"
  },
  {
    "url": "assets/js/2.ed5ce42e.js",
    "revision": "e06f0cb1046eab8bf8311d53407fa8d4"
  },
  {
    "url": "assets/js/20.39870b27.js",
    "revision": "8ff931d25c4eea7e119d8293be210fa5"
  },
  {
    "url": "assets/js/21.d9c77e20.js",
    "revision": "e0fb7fd0dc63ef07cea2eb65d496f0fc"
  },
  {
    "url": "assets/js/22.08c5b6a2.js",
    "revision": "ad90fb074d5b066f83dfe81cc79ef725"
  },
  {
    "url": "assets/js/23.7badaf14.js",
    "revision": "a6671b0846f9ae54f0163619fb95bcdc"
  },
  {
    "url": "assets/js/24.313623c7.js",
    "revision": "d7715c4123ceee1279881e63ee14bd0e"
  },
  {
    "url": "assets/js/25.123d685c.js",
    "revision": "a02e141ca3d2c2b1b1da087083786ef0"
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
    "url": "assets/js/6.c3848878.js",
    "revision": "acf2a47c870d708864bab84d0077bf32"
  },
  {
    "url": "assets/js/7.7c2c988c.js",
    "revision": "9a339803fbc84c25158c28e9290322b1"
  },
  {
    "url": "assets/js/8.0e97dd65.js",
    "revision": "ceb7195b9ef00b4247ae7b266e543f62"
  },
  {
    "url": "assets/js/9.67ff7d0f.js",
    "revision": "d84444a3bee2e19d7fb3d7626d742b2d"
  },
  {
    "url": "assets/js/app.2a1a1ab8.js",
    "revision": "ee4337f78870fff3027ed4dae425f12f"
  },
  {
    "url": "index.html",
    "revision": "9e24a6ce8ff6f2321e62bc3ce8479e05"
  },
  {
    "url": "lin/×JavaScript-1.html",
    "revision": "c743da79b5cdb4ad60eccdcddac6521f"
  },
  {
    "url": "lin/4thweek.html",
    "revision": "afdbf782b375276bef6da54eb33ea6da"
  },
  {
    "url": "lin/cocos1.html",
    "revision": "d10af2e1f7ea0547ef3285aa513665e5"
  },
  {
    "url": "lin/js1mod.html",
    "revision": "bea1584a5c18e64bc6a6f5e550f0bcab"
  },
  {
    "url": "lin/jsbasic.html",
    "revision": "e94849dbabc5fd492f6e7ad2b565fe42"
  },
  {
    "url": "lin/path.html",
    "revision": "0cb6c52700a4ee829e3b9cfa87ad4e7b"
  },
  {
    "url": "lin/readingActivity.html",
    "revision": "f320b307d4cc88efce13ec8ce2e60935"
  },
  {
    "url": "lin/rhj1.html",
    "revision": "180d5519aac8d639bdc530b3bcb0e078"
  },
  {
    "url": "lin/rhj2.html",
    "revision": "b08e09b3c76d8d00e35f0d424ec4d9d2"
  },
  {
    "url": "lin/Russia.html",
    "revision": "4d633786f7b83fbc5500cc0832e5bc45"
  },
  {
    "url": "lin/writingActivity.html",
    "revision": "c4f219e98601a8b363e059f0e5f468b7"
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
