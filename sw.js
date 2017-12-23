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
    "revision": "6c26dda2d673fccafa13d8714968e001"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "dc8a02915cff3960bf787d2c1fcea6d5"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "ef59167613ea1daa9fae1f3e92968d17"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "8fd9443b30a5885a14bc52c8cffd9a6f"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "73c03f5e39d625c09608956da778dae1"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "49bc5373654378ef5e73ea9348d18d18"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "260af1abb08f9253fbae472f5b25788f"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "561684338b52f1c11a9c66dd495b4d4c"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "e27f1f7c0956c22d66cb5483a19cd909"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "135ce41beedfeecac1c47588bc0f97d8"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "ac4b74b4a5dcb2c44db8c1aa25a153f0"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "a0a96ca9c0916b841a62108cadbba425"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "e61c5ec7fb1cd004002498b3acbcbfea"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "fe791a0c6690a4b3085366bad0180015"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "915f775ab2ac6a77447fe35f344a235b"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "04acfd92a9931bc4467a0fcb11c24029"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "d702042dd6353f9b306c0c003dd968fe"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "682bb699020cf23e911f76c16001abf3"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "56e3f1e90782093240fa857d52ded0d7"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "a60a29f97ad9dc4d7bbf6352fa247825"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "3a0e58573bda465d29b405918d47e682"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "de36ccabcd0c9de88188f24922d47f4b"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "2d9a403dcf7e6c54027504673b8d7097"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "38256f9c553c713606c53a9fafe4d8c2"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "d0a08525e2b846d57a7a8906b005e196"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "631823595174b0260a2bd18c6909c920"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "ed49f5a1eed79095d70bd80072cc9727"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "a31dd0ba3036d8e931cf6d833f3e87f8"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "710deda36f8006da058452c37db4ed4e"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "fccde0b87d6469eb7a74dbcddc48aedf"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "ab879a5fb87b6fff0a9efe35afbe4806"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "167d3a91f691442e8a2808dbb2d8401e"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "c0f64b3bf6673a58f06d763d09b36376"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "a54d68abaa0c7fe8bfcdd91a50bd10e4"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "c71211fa4b0ee977f7b0d9ade6850e72"
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
    "revision": "028b340227faa24c4bf0e076b18fd1da"
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
    "revision": "2f186a1119f985e1c29d599b01be2cc5"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "b93008f36b1d869ea6c4bb28ca948e15"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "69a72dbcb161f8798917387f4e9432eb"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "4a57eac5427e18809eeaa8aacda720a1"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "25e54daa2e835964d2591cd405765fba"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "8fce60e8f8028b892d5ce8c0d3ca929e"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "6f26eef86b5d65be0ae337939ad9a2bb"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "4b793bc1158dc062f35c608227d2928e"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "34acf3323abf4bbb3960f64af3c6a6f9"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "9f80ff13d5b6b6cb800fc021d25928e0"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "a44332989466702d1780ee65d9c0818f"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "0063e0272814e6b4918a91269098f30e"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "de87ccbab2b0d13a7c9e9344c15038b9"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "99a041abd6474581ef8387a3412edd5e"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "d82ff45908f369ad6bbc9f4f2a99f976"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "dc8a02915cff3960bf787d2c1fcea6d5"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "9f80ff13d5b6b6cb800fc021d25928e0"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "a3d91ec80a97348a39fc84ed954befc9"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "138af734a75ef37e24d7c7a7a9df20b1"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "ca288a43e453f59426cd30372ce4819b"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "50cdd0c6af44d4a37386e70965e0b32e"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "baddcf2c01e584bcbb079ca3af739816"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "f97a2488bcaafbdfff3e79cfc16e8ce1"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "dc8a02915cff3960bf787d2c1fcea6d5"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "ba8beb15ea51ace80a3568709255289d"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "3da9086ae801dbcdb6ed7a6e24c12c9b"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "1e4f2cb7b68220083c8763e75d9c2ecb"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "3815cbfd3fd943aa1f54d813fc68d10a"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "257ef44fefff321b2cec24c8871a55f8"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "81427b67bf3b3a033ebb2a6983dd7ae7"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "a896d32603e0f213f0fa72c30b0cd4d3"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "9b39cb496233b36b5a4e63a0e56b8ca0"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "45c6d9af974a95b58f40d08f0ea8c8ca"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "b56762f3d9e4211e022c3c7b15678940"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "451724e37d616f71f4192f3e7e87c5ad"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "f874125eedc0c632b5666cb116e019c9"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "259edc6366bf99fc9910d28dd53599fd"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "608530646e75f0ccec8e1a62184cdf15"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "46f144e43547467bf774a108a40d4450"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "b43290143e9b4c39baebfa43ff90ebd8"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "b515c899a6d3ce9d4eee9681edf020ba"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "9f80ff13d5b6b6cb800fc021d25928e0"
  },
  {
    "url": "docs/index.html",
    "revision": "9f80ff13d5b6b6cb800fc021d25928e0"
  },
  {
    "url": "examples/index.html",
    "revision": "96957eb654df0dbfb3ab3f2afafb3c3a"
  },
  {
    "url": "index.html",
    "revision": "5620e9534a7db66e5d171182021786de"
  },
  {
    "url": "redirects.json",
    "revision": "decc965b39e7a8eecabb299920c486e5"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
