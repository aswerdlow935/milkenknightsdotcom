importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "404.html",
    "revision": "f3880c4d4e4ac3006ca18b14c53629ae"
  },
  {
    "url": "about.html",
    "revision": "1505aff5c1b30467dd8d3e5f38fc4b18"
  },
  {
    "url": "achievements.html",
    "revision": "b8810c71cae659a6ae9a647f56941b7e"
  },
  {
    "url": "assets/css/font-awesome.min.css",
    "revision": "4083f5d376eb849a458cc790b53ba080"
  },
  {
    "url": "assets/css/ie8.css",
    "revision": "be4c8e8d6e19a29479ca0250e917203b"
  },
  {
    "url": "assets/css/ie9.css",
    "revision": "2bc31e67edfdff22bb6f24ac304d1cf0"
  },
  {
    "url": "assets/css/images/bg01.jpg",
    "revision": "08e27e2e490424e7e33a0d15d89f6a0f"
  },
  {
    "url": "assets/css/images/bg01.png",
    "revision": "f7c7329b01a70ed56df466e1d4e044c6"
  },
  {
    "url": "assets/css/images/bg02.png",
    "revision": "5da8cc5cf2b9e67603e8b631e8a7ef18"
  },
  {
    "url": "assets/css/images/bg03.png",
    "revision": "ce461c4489eeb6af5549dfb861df2ed5"
  },
  {
    "url": "assets/css/main.css",
    "revision": "15b5ba9fa4a73c3815a18677de37c9ec"
  },
  {
    "url": "assets/css/main1.css",
    "revision": "15b5ba9fa4a73c3815a18677de37c9ec"
  },
  {
    "url": "assets/css/sourcesanspro.css",
    "revision": "da1811c83db09689b44f0acda3cf6ab7"
  },
  {
    "url": "assets/fonts/fontawesome-webfont.svg",
    "revision": "3558944309282c860f2acb6c26ebf970"
  },
  {
    "url": "assets/js/ie/html5shiv.js",
    "revision": "62ac572189514315ebfb31c43a225009"
  },
  {
    "url": "assets/js/ie/respond.min.js",
    "revision": "9cccbcd9bc6aed2bb14df1013e185ce3"
  },
  {
    "url": "assets/js/jquery.dropotron.min.js",
    "revision": "19a18a4d6c0f6d063e932a316f18c626"
  },
  {
    "url": "assets/js/jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "assets/js/main.js",
    "revision": "1f7f748c26237f3af76408a24df9b4b2"
  },
  {
    "url": "assets/js/OLD_jquery.min.js",
    "revision": "895323ed2f7258af4fae2c738c8aea49"
  },
  {
    "url": "assets/js/skel.min.js",
    "revision": "df4f8930f3747bbadcdeb7dfe326ed73"
  },
  {
    "url": "assets/js/util.js",
    "revision": "e620d8b66b577cd585b8d2ad84afb34c"
  },
  {
    "url": "assets/js/workbox-sw.js",
    "revision": "93b96b567b054ba5d88cd79081f2e005"
  },
  {
    "url": "assets/js/workbox/workbox-background-sync.dev.js",
    "revision": "fe6774c22362ef1e34db105aae403617"
  },
  {
    "url": "assets/js/workbox/workbox-background-sync.prod.js",
    "revision": "9211e08e7e33b9881564cd9cf3402211"
  },
  {
    "url": "assets/js/workbox/workbox-broadcast-cache-update.dev.js",
    "revision": "8eb4344bc652fd3b135a4b678c2c557f"
  },
  {
    "url": "assets/js/workbox/workbox-broadcast-cache-update.prod.js",
    "revision": "296f00b3763d3f15393d78d91cb41be6"
  },
  {
    "url": "assets/js/workbox/workbox-cache-expiration.dev.js",
    "revision": "a4fb80f8ce617e9ef71fa5e019018a9e"
  },
  {
    "url": "assets/js/workbox/workbox-cache-expiration.prod.js",
    "revision": "c9e87b1a8c78ff60b86544874cc14892"
  },
  {
    "url": "assets/js/workbox/workbox-cacheable-response.dev.js",
    "revision": "5302fcb5ad1e831106b2564515a39a1c"
  },
  {
    "url": "assets/js/workbox/workbox-cacheable-response.prod.js",
    "revision": "2421c36226a8e1d70cf13a64c4b9aa0b"
  },
  {
    "url": "assets/js/workbox/workbox-core.dev.js",
    "revision": "4d61237e37ceef8494f7a56ae9f7cca9"
  },
  {
    "url": "assets/js/workbox/workbox-core.prod.js",
    "revision": "65e9fe4b5f0aac359cee12b34ecdcb59"
  },
  {
    "url": "assets/js/workbox/workbox-google-analytics.dev.js",
    "revision": "704ba152d7f0691c2e0192cc963af0cd"
  },
  {
    "url": "assets/js/workbox/workbox-google-analytics.prod.js",
    "revision": "c4ba61233ec54213dd09ef89bbdc53ff"
  },
  {
    "url": "assets/js/workbox/workbox-precaching.dev.js",
    "revision": "412b0f74a372166559d946a9b310e9dd"
  },
  {
    "url": "assets/js/workbox/workbox-precaching.prod.js",
    "revision": "92b8b761b81970e9beab93b6602a57c8"
  },
  {
    "url": "assets/js/workbox/workbox-range-requests.dev.js",
    "revision": "c4aa28a053c374e83682ca6fb96a8bf7"
  },
  {
    "url": "assets/js/workbox/workbox-range-requests.prod.js",
    "revision": "f51ab671547419c4fa4042b634af23f7"
  },
  {
    "url": "assets/js/workbox/workbox-routing.dev.js",
    "revision": "8c82a5df800f0b98aabe8811190fec4a"
  },
  {
    "url": "assets/js/workbox/workbox-routing.prod.js",
    "revision": "408061ddc88831aea02820c557411f91"
  },
  {
    "url": "assets/js/workbox/workbox-strategies.dev.js",
    "revision": "31997743c8928adcb0bc278917dc054a"
  },
  {
    "url": "assets/js/workbox/workbox-strategies.prod.js",
    "revision": "7e031ce45a8a0d5e30fc4577b3dd3457"
  },
  {
    "url": "assets/js/workbox/workbox-sw.js",
    "revision": "93b96b567b054ba5d88cd79081f2e005"
  },
  {
    "url": "azscout.html",
    "revision": "1baa1aa976d9936674780fcd815d7fcc"
  },
  {
    "url": "banner/banner.html",
    "revision": "1991e133b437fdae77692e87d5225d70"
  },
  {
    "url": "banner/banners.css",
    "revision": "ca8fecde3bea2047761e5046848ca3bf"
  },
  {
    "url": "banner/example.css",
    "revision": "f29a6d05a3071c091620b5343225006a"
  },
  {
    "url": "banner/images/mklive.png",
    "revision": "e98e2fe0317f86955a1b01febe5686e8"
  },
  {
    "url": "banner/images/mklive.svg",
    "revision": "0f7e30320d22d974d9c8baa6562b70fe"
  },
  {
    "url": "calendar.html",
    "revision": "05554cc96973eac7cf0232bbc4db7703"
  },
  {
    "url": "downloads.html",
    "revision": "786dcbb78aca958e7cdea7a3da7e1df2"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "0ed2bc9e332735ae79aa87621a446dd6"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0833313723840e9122a00a5b1f68deaf"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "0425b5e974cde5e0097e0c769c258b4b"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "b0ee21790682ead838161236765784f1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "dfa9ea38892069f0e3f776761de6df13"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "55373e1ed00e36ae3a3e076cc0963d00"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "23895283e42981ca4c168d36229d9e31"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "84cdbe7242cf4a624bfdd1d8176c896c"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "6fddfbe6a5fd018baa75aaa59dfaa94d"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "205536df0edb8789c81818edc397e99d"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "3ad0e410b34d51af2a8f7656e544c4f5"
  },
  {
    "url": "images/1836gifv3.gif",
    "revision": "44ae088bfe0eba5babb3aeea252b86a8"
  },
  {
    "url": "images/a01.jpg",
    "revision": "b589422a65caa217f2829f53b089044f"
  },
  {
    "url": "images/a02.jpg",
    "revision": "41d4c31ff07dae175d808941c6c66a9a"
  },
  {
    "url": "images/a03.jpg",
    "revision": "2a0f610007393d561c6d891722ea1052"
  },
  {
    "url": "images/a04.jpg",
    "revision": "eea03ab8701f118383e14c23a97cad8d"
  },
  {
    "url": "images/a05.jpg",
    "revision": "c08ed33678cc18414673f78dc59f5043"
  },
  {
    "url": "images/a06.jpg",
    "revision": "415b714c9f045c3647af6143c96b8d1e"
  },
  {
    "url": "images/banner.jpg",
    "revision": "b248de02f7b6a4f34ca3bfeeb41caa82"
  },
  {
    "url": "images/banner.png",
    "revision": "61a7edc1995b86471d990649a9592339"
  },
  {
    "url": "images/frc.png",
    "revision": "be1955b7540ac33509853e98f84a0e82"
  },
  {
    "url": "images/header.png",
    "revision": "eaea753d977ab497eaa8d135bada6ecb"
  },
  {
    "url": "images/hubshot.png",
    "revision": "772cd52ef7174ae0a11fc84f9b2e67ab"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "b597a06a00ace614fad6bcbcd66841c9"
  },
  {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "b5159f3477af8af2db05c2eb67c02f09"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "a8c8086a46d3db4e210d305fc3cfb7aa"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "8f2d4c44abde15093e267d3dc1c89d39"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "fc1f1dae2a0dd5f2963001c47054f62b"
  },
  {
    "url": "images/icons/mstile-144x144.png",
    "revision": "a2f39a1d2031e027cb9ef1f5a746b8b0"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "44d8903896e00edf1b4a4f4db9b33381"
  },
  {
    "url": "images/icons/mstile-310x150.png",
    "revision": "631f63df08b378c935c8f5cd5f468baf"
  },
  {
    "url": "images/icons/mstile-310x310.png",
    "revision": "4c25938ae50044181c4f0e354cc7629a"
  },
  {
    "url": "images/icons/mstile-70x70.png",
    "revision": "8ae5fba9f7383926633b499258dd485b"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "b2dcae62a6f7ea185828d39c4849454e"
  },
  {
    "url": "images/logo.png",
    "revision": "8047d5f6c1837d5c10ec1161afb936e9"
  },
  {
    "url": "images/mcs.jpg",
    "revision": "9a99d70935227bb439f11838e23f00c1"
  },
  {
    "url": "images/oldlogoprofile.gif",
    "revision": "a048abec16675f07ce4c66438abc7229"
  },
  {
    "url": "images/pic01.jpg",
    "revision": "3777e21bc8737f23582d6a53ad8241d4"
  },
  {
    "url": "images/pic02.jpg",
    "revision": "b62221ba2ff373ae731a8e17a48a2bdd"
  },
  {
    "url": "images/pic03.jpg",
    "revision": "7f0f033e4dda8eac54d3ec3fa295f027"
  },
  {
    "url": "images/pic04.jpg",
    "revision": "bfff2374358cd46860d8e8947aa00c81"
  },
  {
    "url": "images/sponsors/1.png",
    "revision": "b10b8ec5be71e89103a6633eba7d87fa"
  },
  {
    "url": "images/sponsors/10.png",
    "revision": "79accb32c88665f6b3dcda6d87cf4383"
  },
  {
    "url": "images/sponsors/11.jpg",
    "revision": "c71ce7efc310a4effa5cb9f76727f58d"
  },
  {
    "url": "images/sponsors/12.png",
    "revision": "292077068be525d1718aac2afe5fc004"
  },
  {
    "url": "images/sponsors/13.png",
    "revision": "f3a6d035838d83ce8f2f97743655a4c9"
  },
  {
    "url": "images/sponsors/14.png",
    "revision": "e3a41751c23ecc98748df1b5e573783b"
  },
  {
    "url": "images/sponsors/15.png",
    "revision": "6a808933d07fa40c610e7b59f019e1e2"
  },
  {
    "url": "images/sponsors/16.gif",
    "revision": "710c18b8b0bb33c11f7f3b0ea38ca195"
  },
  {
    "url": "images/sponsors/17.gif",
    "revision": "b283b3a16608834bafcd731466d6e74a"
  },
  {
    "url": "images/sponsors/18.png",
    "revision": "effbcbe5bdeb8e4f5dcff94c43ff9670"
  },
  {
    "url": "images/sponsors/19.png",
    "revision": "d2987fb7d1898e3ac6e3ee1cf99fa94c"
  },
  {
    "url": "images/sponsors/2.png",
    "revision": "d7995c812904d52853f5ee6b086c00b0"
  },
  {
    "url": "images/sponsors/3.gif",
    "revision": "1f61c48b8dce886b922356fe1c1f037d"
  },
  {
    "url": "images/sponsors/4.png",
    "revision": "aa35d358ed6f39233440c85c85510af4"
  },
  {
    "url": "images/sponsors/5.png",
    "revision": "cec87913053f418763c11d9d543915c0"
  },
  {
    "url": "images/sponsors/6.png",
    "revision": "1773c15c1eb791bdb9dfb74b4d0d6817"
  },
  {
    "url": "images/sponsors/7.png",
    "revision": "516ad3bd2a688a1ee66bc223b5fcf947"
  },
  {
    "url": "images/sponsors/8.png",
    "revision": "f4440a8bfc1b77d6e86e70512f0001ad"
  },
  {
    "url": "images/sponsors/9.png",
    "revision": "0ec6356cc99122018a8dc8d0d1b6d66c"
  },
  {
    "url": "images/stream.png",
    "revision": "bf8fb600c4b741b3bc7887fd295279c2"
  },
  {
    "url": "index.html",
    "revision": "b6b01a74ec62ccf9801558da322ab5c1"
  },
  {
    "url": "join.html",
    "revision": "8b3aa3df7fe46920fee0594661b7b7e6"
  },
  {
    "url": "left-sidebar.html",
    "revision": "5de0c8a800afd119ae0439c854b3b909"
  },
  {
    "url": "live.html",
    "revision": "73531af2cdc2868b7f03af6d3bfa010f"
  },
  {
    "url": "media.html",
    "revision": "68da6bd3e61461e313ebd35a788aa7f4"
  },
  {
    "url": "ocscout.html",
    "revision": "36f8918c57df9ff930be47605dbb16e8"
  },
  {
    "url": "password_template.html",
    "revision": "0d71a2a8606dd259132557f40332f1c0"
  },
  {
    "url": "protected.html",
    "revision": "41ab6f9eff4d4fae67e3d5f77e47356b"
  },
  {
    "url": "resources.html",
    "revision": "374d82f226da7867d4e740a4c7c7d0d2"
  },
  {
    "url": "robots/2018.html",
    "revision": "8a35fa940510a40b5541f0ee1456f0b2"
  },
  {
    "url": "robots/assets/css/font-awesome.min.css",
    "revision": "4083f5d376eb849a458cc790b53ba080"
  },
  {
    "url": "robots/assets/css/ie8.css",
    "revision": "493bd1a2f65b116754e56a0176a4431c"
  },
  {
    "url": "robots/assets/css/main.css",
    "revision": "77f116d69585d31ee8a2351338c10093"
  },
  {
    "url": "robots/assets/fonts/fontawesome-webfont.svg",
    "revision": "3558944309282c860f2acb6c26ebf970"
  },
  {
    "url": "robots/assets/js/ie/html5shiv.js",
    "revision": "62ac572189514315ebfb31c43a225009"
  },
  {
    "url": "robots/assets/js/ie/respond.min.js",
    "revision": "9cccbcd9bc6aed2bb14df1013e185ce3"
  },
  {
    "url": "robots/assets/js/jquery.min.js",
    "revision": "895323ed2f7258af4fae2c738c8aea49"
  },
  {
    "url": "robots/assets/js/jquery.scrolly.min.js",
    "revision": "cdaa947ce14cf917fd3fbb34bbf69292"
  },
  {
    "url": "robots/assets/js/jquery.scrollzer.min.js",
    "revision": "17e12390dd8449f6a59ade5c4997b79a"
  },
  {
    "url": "robots/assets/js/main.js",
    "revision": "c9ee43550e30c2e1d8e1bfa49546c49e"
  },
  {
    "url": "robots/assets/js/skel.min.js",
    "revision": "df4f8930f3747bbadcdeb7dfe326ed73"
  },
  {
    "url": "robots/assets/js/util.js",
    "revision": "e620d8b66b577cd585b8d2ad84afb34c"
  },
  {
    "url": "robots/images/2018/avatar.jpg",
    "revision": "a502f9cdd679bd42003fea683c8714f2"
  },
  {
    "url": "robots/images/2018/drive.png",
    "revision": "23899afeb18a4fbebc27fbd2cb58ca95"
  },
  {
    "url": "robots/images/2018/failure.jpg",
    "revision": "1ef526995c042f4db18dba7d833fd39f"
  },
  {
    "url": "robots/images/2018/intakespring.gif",
    "revision": "187e395789601e64105fe94a1bc39ef6"
  },
  {
    "url": "robots/images/2018/java.png",
    "revision": "fa9badf7337d7eea00c7b5f8ce6fe32b"
  },
  {
    "url": "robots/images/2018/pic03.jpg",
    "revision": "122ff075127f38af3f22c2cbae4ed3a4"
  },
  {
    "url": "robots/images/2018/redundancies.jpg",
    "revision": "a7884acde860d38738269793117b18fc"
  },
  {
    "url": "robots/images/2018/size.jpg",
    "revision": "347829d3cb36e6ff7928538316e3f172"
  },
  {
    "url": "robots/images/2018/wheels.gif",
    "revision": "0194b09b02f7dbf48345d0bafe042708"
  },
  {
    "url": "robots/images/banner.jpg",
    "revision": "a6f92884a27b49f0be618c3374694bb2"
  },
  {
    "url": "robots/images/pic01.jpg",
    "revision": "587b57091fe2aebb4bc39ed836a438f2"
  },
  {
    "url": "robots/images/pic02.jpg",
    "revision": "be1d5eb617466d97db51bc5e4907444a"
  },
  {
    "url": "service-worker.js",
    "revision": "a72bad927d3cf500f152d46c5079208c"
  },
  {
    "url": "template.html",
    "revision": "56db28de11a414d6eba78a3327b2f95e"
  },
  {
    "url": "test.html",
    "revision": "3499140ebae6846e963b0c2d8650ede1"
  },
  {
    "url": "thanks.html",
    "revision": "2b61d63324a8a83f73c8e3adce3ad783"
  },
  {
    "url": "two-sidebar.html",
    "revision": "081fb35a3802123d9084ba066bd4652d"
  }
]);
workbox.googleAnalytics.initialize();
workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
    // Cache CSS files
    /.*\.css/,
    // Use cache but update in the background ASAP
    workbox.strategies.staleWhileRevalidate({
        // Use a custom cache name
        cacheName: 'css-cache',
    })
);

workbox.routing.registerRoute(
    // Cache image files
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                // Cache only 20 images
                maxEntries: 20,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
            })
        ],
    })
);
