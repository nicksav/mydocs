self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "1365210af195d18ab773f23bb6aa4665"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "643718426d0a7d60036217ba988155be"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "eb512e79165f504fd4da4d2758d5584b"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "042a7e9fdd293212aca19150aef71b0d"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "50c62448d4014e5fb411887c05c2935b"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "fed84e16b6ccfe88ee7ffaae5dfefd34"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "eed73af41f4e55d335b5b3fa8c78538d"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "84892991321e7998ca4c80ae21175f78"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "61821c45a353e259bb83f9b0d338f5e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "913e1b81006831c72a7bca38e4125edb"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "29d79a7e648876504496211f003c4076"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "386d71707992eb91fc53df303e99c2e7"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "6b6b78894033fd91ce75affb548d8e67"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "b9509f415a899970396c5cf61dc0e6a0"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "4c2767f364febfaf08e0bd9fb6f1cd94"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "cd93c9a569232ea30bb22244eebff1e0"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "e707568440725d56f34b93b0bb2350a4"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/bootstrap-grid.css",
    "revision": "ed38d6758667b540407ea1dbff88e9b7"
  },
  {
    "url": "dist/css/bootstrap-grid.min.css",
    "revision": "c9654d9c891fe3e57fde9cd355a916a4"
  },
  {
    "url": "dist/css/bootstrap-reboot.css",
    "revision": "fed2ed54cfcd38b420eb9c375622656c"
  },
  {
    "url": "dist/css/bootstrap-reboot.min.css",
    "revision": "38e73bab749ee7eba9bed51d6982a19e"
  },
  {
    "url": "dist/css/bootstrap.css",
    "revision": "4f7e8fdce7bff9529bda8127c4489bb4"
  },
  {
    "url": "dist/css/bootstrap.min.css",
    "revision": "c17816ad4ffc1d70975af97fb0725a2d"
  },
  {
    "url": "dist/js/bootstrap.bundle.js",
    "revision": "391328c786dc4bfe80805961dc9f9188"
  },
  {
    "url": "dist/js/bootstrap.bundle.min.js",
    "revision": "bd1c27f418b84481c013bf7759464790"
  },
  {
    "url": "dist/js/bootstrap.js",
    "revision": "a78f611be0b4f9a97d1480a8140757ac"
  },
  {
    "url": "dist/js/bootstrap.min.js",
    "revision": "981695ea69b53d7a390d80ac80fbfff9"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "6b4fe548149d69a7a1e2e6dfaf1fbeb6"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "d493cb2f6baf15f5604c932d50d9e9f7"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "1aaa6f44d88b90372fadded06322519a"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "db3b51b09a79f50a571f765fac46c432"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "7b4c3350d47c26d57179bc0e597ac3b4"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "7b0b37e121c5e22aaa168deaf4c03865"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "afe78ef53e76838daaebc8b53634ffdb"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "0f5d67bc66ef8f1758fa3a27d23c7985"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "7449aee7d7823059542732d2a6dd7501"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "403c214003217e644d340f52e4854cdb"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "9bd33ee7449fc29c278d4095ec9464ef"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "94ca05d7a3b41eb5e9c6dd3e7d232b0b"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "b7c14721ec5ee5bada3742bff95e4b7a"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "f04341b89be3d21f83fe7340bf048880"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "7a69f1bef067c4ab28aa6808847c7952"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "27b99c0ca4ad029c2bff15d24cc09a3d"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "c022805d0d32f17de3e01ba1b5c7dd5f"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "ba67ed0b3419a982324c8b7af11a9fb3"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "13c5db067bfcfe67fff54f129e512617"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "b52ab16d9d35bca50bfe9556af639f82"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "a48d05d02be4629d0310f03c64373c72"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "418d497f4642723e73b284c96487c46f"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "e0f6185626c9a733c01e57a715a69fa7"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "8639d4fea7d7577691b84a31ebdb4b4a"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "e2dff33c5538df1eaf831e458b7ffddc"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "7755cb0d393b7368ff9b7d6cd73c915b"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "0273ffef4ab9d4857d2dc774b0dbb478"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "f1069f5c184ba6507cf6324d7cb03d58"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "36ccbe976e7e355e355969ce1c9adaa2"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "c7ca78b6f9980edff995bc4abe52cf6a"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "7690bdc446f783041442688e24c50ddd"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "bfc137709ba1d4504eef0ea4720cd0c1"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "bd2795b201db5ff13b1984f8abb6e6be"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "46a39ebec093d747fa856ddff27752b7"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "cea5bfab8f41f0e77d26761499b498ec"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "b6cf65de0e6e62e7cc86cc34fa64bdc4"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "750f2ac42509b1d901295d087cac5ef6"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "a30e42252fbca562ea09080f5ac6da54"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "14ed354965a5aef8409d40f9bc71d3a4"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "1d0127b6309e72780dd3e87093a9d7e3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "60ab17e2c5af81defdf5a93e1865a89c"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "cea2ce48e209721ca537d8ffcad510b9"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "23f3d648bd4641aaabc51676ed84ca6f"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "1a634e4a3281204f8d46c5fdaea35a96"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "b4dad13478f4dc6acd5a366efcde174e"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "041900abf4b6c5525641775885200d5a"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/justified-nav/index.html",
    "revision": "1709885cd4375a48ab7104c9c1bc752d"
  },
  {
    "url": "docs/4.0/examples/justified-nav/justified-nav.css",
    "revision": "07d212d65b8909d7106e51b4f13936e5"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/index.html",
    "revision": "526182d9c63d8d3befa2380347f4cb6e"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/narrow-jumbotron.css",
    "revision": "4e5fb23757fb40f595167cd4e14447de"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "35d8cd3a5a267e316ab45f480a191eeb"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/index.html",
    "revision": "1ce40c76fb831fb9bfb81f7a04705555"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-top/index.html",
    "revision": "86ce704638e9227d79683e9928ad258a"
  },
  {
    "url": "docs/4.0/examples/navbar-top/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "cb279d345c72f6f4fab4a17df396696e"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "6263d8ff8ab234d8b1e6d29216021af8"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "77eca95a4f55dd917ba95db9ac28bac9"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "fe67880b053d4a4a9f318db8e0e71fb2"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "ffaf0fd56864daafaa2ea23a3f2a8a4c"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "db2571d976d8b910af2dd7fee0a97794"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "3ef960de8ed9de239dbebf855d3e693e"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "f8234debe0727d830d378804fa6920ba"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "564c98a3e0fb945b7cfa4941a9bfc072"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "a3501bda7dcdde8a731e60988375ff71"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron-narrow.png",
    "revision": "da2fea942e2b79e889461234b2dce637"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "56e944951506af4971317a0e1d6a6b53"
  },
  {
    "url": "docs/4.0/examples/screenshots/justified-nav.png",
    "revision": "4f24d1d5953e79423cbe0254adf1ab5e"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "88f890990c2f75a00cec172d401aef10"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "c3af88c33126f669f2006f9e2c629fa2"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "a289e262bb99e84a494fad461082e8f3"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar.png",
    "revision": "c93f7634deb8db461efd121fae384de7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "983be61f621aac2d19131df71a8ae309"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "11f97fb403f227e059e00c4afa6a12fd"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "a12386401c848ad90d4e3627858e973d"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "3047deed467cfc70d9ab33b1ac75cda6"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "525e473da6359f1db1c5c1769190c438"
  },
  {
    "url": "docs/4.0/examples/signin/index.html",
    "revision": "b4194ddd0649c17ca4cd965b044b84ca"
  },
  {
    "url": "docs/4.0/examples/signin/signin.css",
    "revision": "04ce7b8379c81529b418edbdb4e677aa"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "c7e901f8203094969c3e25ff764531ca"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "61f4c1014db3fd049b854a8127bddc0c"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "c5c610f36d8c2a89e7d587880ee0cd68"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "0cd4be44abfd7e0a43438dc5f072d1e4"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "9a79ac79c088c8913be8f1b73cad5352"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "bf1ef13255a7a104f1a4bc40280fa8c0"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "ecbb83669f2996ed55560962156cf192"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "64deb06d57df115c50354e82534fcddb"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "170bb196e64f73ef84da733dabe0ee91"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "375264fdf9ec656338cd4afea54f3eff"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "40e29f9214e25afad8e3e2ab4009bc2e"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "313722dfedb0fbdd6fcb8a7b0912ce77"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "88cc2366214dd32934d25e7fbe93ed6d"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "1a4bcc1293321d793860184e185e6b3f"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "ed3edf92523344e40222895405408370"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "f1b4fec8885320540cfd4919ed9f1d89"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "8058df85e68570643ca3cf67d6b2db06"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "868d9318609f2b504c947f4274c6335f"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "934eac59452ca4b17bdda893082c3324"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "6b4863fd256728b4d53ab84d169f60ab"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "d493cb2f6baf15f5604c932d50d9e9f7"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "ed3edf92523344e40222895405408370"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "ebcd65c755a049becc881434fdaee5be"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "f7315e61a9083e37f8c6f196235eaafb"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "9cea8afacd06d404cef35124691ec08f"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "33ef85e4244d15d1b4ac58a1724d48bf"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "c15d27a8a7122f2ea03ddac990f0f06d"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "ac5464ef076fb6e05f7364321fe2cd7e"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "d493cb2f6baf15f5604c932d50d9e9f7"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "465b19011afaf4f6d6838f666c255be5"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "aac18b8f0cd28ad70dc1e5c1222c5bd2"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "c1404ed07dbf79d9ebffbde1b64d99f8"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "bb79d317ca3112556296afae7214924d"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "b574a95d461d505301a0d66affba61e1"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "25a5b6ec0153e5efbab40c795bb0f961"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "fb843d3fc71d8f05f3ff8af711b9f3f7"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "ad8456fd649bc49b632ff99ba37812e0"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "0269e6680458cfc662792123d6f3d7e4"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "54a7143f1b28e09db67110dbb09d05b7"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "c5364444f00dcdbbe060f579b3717734"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "5b0dd3f27ce50725ec186da37386328d"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "3ba7b048bf04f8119ab08da66f91bc1a"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "a9cdcd9d33b92c999b646a2e673401c3"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "af01fc6a96bb988a4d6cfbea316ac939"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "0cc9a9a70e056d36438d307aeacde91d"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "fc28f063643ea5c084c8a21cb536336d"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "ed3edf92523344e40222895405408370"
  },
  {
    "url": "docs/index.html",
    "revision": "ed3edf92523344e40222895405408370"
  },
  {
    "url": "examples/index.html",
    "revision": "f6927845f2342f59dcff0db850f3e320"
  },
  {
    "url": "index.html",
    "revision": "c08f240840b0c4cc5742cbea749cf1e3"
  },
  {
    "url": "redirects.json",
    "revision": "199aa5803d5d20e493a67bc7af25da14"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
