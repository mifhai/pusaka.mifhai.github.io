'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b8f4be30a9db469ad794284a40967a66",
"index.html": "901440cb908dedcbe902eca20ef10624",
"/": "901440cb908dedcbe902eca20ef10624",
"main.dart.js": "e080b319049ee8bbb64eba4a2facd860",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba01399d5f737823e5cb415417733c04",
"assets/AssetManifest.json": "36ef4a6d648bb96d690efbe065b8c281",
"assets/NOTICES": "5c2ee14bc1534cbc3932101d7044d99d",
"assets/FontManifest.json": "217efda40614cacd4c3bf9064a4ad924",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "43398e219709246ba91036e1a1f4f76f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/banner_menu_konghucu.png": "deaf9089b50eab2b6754947bc796692a",
"assets/assets/images/kelenteng.png": "3cfacd52aa51fcf8ce339ea600463d5b",
"assets/assets/images/banner_menu_guru.png": "30d95f30a6ecf3a2ccf7664a96d9b882",
"assets/assets/images/gereja.png": "686e656b2c102b536d14849b5f40d515",
"assets/assets/images/mosque.png": "e92162ef2cbcfb9bc5daae849e624026",
"assets/assets/images/vihara.png": "a069ed9144aa76b0468d17ddc99465d5",
"assets/assets/images/banner2.png": "2fddacc7d93a498b8e19267965f17662",
"assets/assets/images/banner_keagamaan.png": "0030c9a32bf416187990bd8dfacc0ea6",
"assets/assets/images/pura.png": "6016d5b55098fc6486a7d3e24edfa4fd",
"assets/assets/images/banner1.png": "5a03e95cd7801191ed668d57a5384086",
"assets/assets/images/materi.jpg": "b3fc23ed272733415091f029edb4133c",
"assets/assets/images/image_loading.png": "ca1fc7e6f4766cd440717936932e2cd6",
"assets/assets/images/banner_menu_hindu.png": "d312a1bc45aac81a8812648f4bbf6824",
"assets/assets/images/banner_menu_kristen.png": "be6475f0553586f7c03136cb53c1a44a",
"assets/assets/images/banner_menu_katolik.png": "5a5034070491c028938893ed09c28a3e",
"assets/assets/images/katedral.png": "2afd744dba146288d0e209b0fa53ac84",
"assets/assets/images/banner_menu_islam.png": "f858c2d1dfaeb2c2b494946384f92fe4",
"assets/assets/images/image_slide_loading.png": "0390c98a3a999dfc9ad4425389863c55",
"assets/assets/images/banner_menu_buddha.png": "945f20c2e40119d9509133997fe81057",
"assets/assets/icons/menu_jadwal.svg": "7814e6215cd332e3837eefb4c2f35517",
"assets/assets/icons/menu_konghucu.svg": "a648eddefecdbafb096c2f19f5a156c7",
"assets/assets/icons/menu_videocall.svg": "663f2df88870d8c189cce9d9d788d2ee",
"assets/assets/icons/bantuan.svg": "f95fb42df07a701b0ca74772e50d2372",
"assets/assets/icons/katolik.svg": "b1e8feda94b1f159b1768069f8b80887",
"assets/assets/icons/menu_quran.svg": "b93485ac728ee5e23fe33dac0da887d2",
"assets/assets/icons/beasiswa.svg": "022aca6c32f6930ad6e38eeef4162589",
"assets/assets/icons/logo_pusaka.png": "658fa528e316c8f79f42bb22aaaa04de",
"assets/assets/icons/menu_nikah.svg": "00f6b5e187a484592392fc343d9c0059",
"assets/assets/icons/menu_estimasi.svg": "195c56f87212245f5491d4c90e89c910",
"assets/assets/icons/menu_kitab_islam.svg": "49f946953ae4ff04e4545f3a97aa7b30",
"assets/assets/icons/menu_buddha.svg": "2b8c99c0935dd29809cb5bba2f7e2d42",
"assets/assets/icons/menu_epustaka.svg": "b1f336377ba6927c165319500857c54a",
"assets/assets/icons/menu_perkumpulan.svg": "82c7491d279aaf412e9b10f7492c6e4d",
"assets/assets/icons/menu_waqaf.svg": "b59a2a922aaa4df0951ae90ce30e5657",
"assets/assets/icons/menu_syarat_nikah.svg": "8611167f53c9e8832b471daf9a383475",
"assets/assets/icons/menu_kitab_buddha.svg": "05a2dcd6763e331016551882089aa905",
"assets/assets/icons/menu_kitab_hindu.svg": "6d5c23f48b49fb238ab1ec2ae9c28c11",
"assets/assets/icons/menu_ebook.svg": "ac61fe9d74c764a50e71616752edd26b",
"assets/assets/icons/menu_pelunasan.svg": "66d97e3bee3d93feded4e399bff07662",
"assets/assets/icons/menu_haji.svg": "3f613b95be3cc3db4319b442891d7e50",
"assets/assets/icons/menu_ormas.svg": "eaf47cf92bd5fd937070b285423f69d6",
"assets/assets/icons/menu_kartu_nikah.svg": "904660cc43ce9c3429d0d3dbf5f5697d",
"assets/assets/icons/menu_kaaba.svg": "fdc6331445c7a3884a2d7760ae653bcb",
"assets/assets/icons/kristen.svg": "04cff305ee610f313ccfa4c81460fb04",
"assets/assets/icons/menu_nilai.svg": "32409eca257d2a76d6ec47a3ff383bc1",
"assets/assets/icons/menu_pembatalan.svg": "6082a3f99600fb398b814b97692d8c50",
"assets/assets/icons/menu_forum.svg": "4bac0f3aeab7fa4104fd112d78c01d8e",
"assets/assets/icons/menu_evideo.svg": "7f2994fa1fb4b91348aaddf804e0a73c",
"assets/assets/icons/menu_pemuka.svg": "7c764acdd42c5aff50dcfdd54986fa65",
"assets/assets/icons/menu_absensi.svg": "9a9b27ace4cb0b700feb4d2201572590",
"assets/assets/icons/menu_place_hindu.svg": "866b3d2955d36ea8462a7450887bf78d",
"assets/assets/icons/menu_place_kristen.svg": "08fe0e22f908609a5076598768ed1385",
"assets/assets/icons/menu_alkitab.svg": "8e55edd661ac8f3b42a949a84585d59f",
"assets/assets/icons/menu_sekolah.svg": "c873edd9cb816b80e50a9b423d3564db",
"assets/assets/icons/menu_mapel.svg": "8514fea8b18b930876260ff4fda3a48f",
"assets/assets/icons/badge.svg": "a86b2003e5929b31c66f55745aa9572c",
"assets/assets/icons/menu_zakat.svg": "a4eb66ec6ca0f6aa0d8938c838c6f9af",
"assets/assets/icons/menu_katolik.svg": "915bb99e8fb0c1ff89cfe7d9f4e8fa7f",
"assets/assets/icons/menu_yayasan.svg": "8d5be7bb2433eaaf6d641c6767931ad1",
"assets/assets/icons/menu_place_khonghucu.svg": "aafb08b7a0eff6b50af2932b50a003ef",
"assets/assets/icons/menu_halal.svg": "f7a63fd6338aea7a6cb44cd3dd9db99a",
"assets/assets/icons/menu_kitab_kristen.svg": "946648c77722cb0e6e05a501f5f57332",
"assets/assets/icons/menu_perpusnas.svg": "ee5bc5978831ae8fc7f832e4a5fe475c",
"assets/assets/icons/konghucu.svg": "2126cf6db61b328c1c93f66441448d72",
"assets/assets/icons/logo.png": "ed15c4115cf24595238169b31e596613",
"assets/assets/icons/menu_kiblat.svg": "cf055a19a2635b8d0e3daa58481736c5",
"assets/assets/icons/menu_hindu.svg": "7290979690829ae6cb730806a6f48672",
"assets/assets/icons/menu_masjid.svg": "7849c3ea1623c0c6682fdf68840e16f5",
"assets/assets/icons/menu_doa.svg": "efe0228ce13e29a23e312ef943549814",
"assets/assets/icons/menu_kitab_khonghucu.svg": "bcb75059a7d72c387447520a15609e67",
"assets/assets/icons/hindu.svg": "2a988d9cb09415ad27f51508dce4db04",
"assets/assets/icons/menu_pembayaran.svg": "26d4aa3e4797a7527933cabc5fa5eb36",
"assets/assets/icons/menu_tugas.svg": "dc7cc4b322d0e9fabe9468c500ef83e5",
"assets/assets/icons/menu_pray.svg": "a271acd77227526f62889800515e44cb",
"assets/assets/icons/menu_video.svg": "683f6eefb8b7ee41fb2a104c7f3611aa",
"assets/assets/icons/menu_place_islam.svg": "623e2cf9a2cbf4b196243aac24924712",
"assets/assets/icons/menu_khutbah.svg": "76a2a8dac412e3d33b90daa3fd7e8124",
"assets/assets/icons/buddha.svg": "2b8c99c0935dd29809cb5bba2f7e2d42",
"assets/assets/icons/menu_place_buddha.svg": "b4bbb145ca5c7a4773bced9c07eb64f3",
"assets/assets/icons/menu_place_katolik.svg": "08fe0e22f908609a5076598768ed1385",
"assets/assets/icons/islam.svg": "4b0cbaccc869c7ad1d3cb8151dfb4e39",
"assets/assets/icons/menu_umrah.svg": "b2e2090850a8cb1d601dae880e171238",
"assets/assets/icons/menu_legalisasi.svg": "3657f086e43a7577a1544345952d70da",
"assets/assets/icons/menu_kristen.svg": "5a01613ee712de5053071fd525b3bc8f",
"assets/assets/icons/menu_islam.svg": "9376dc3a63e8b71a5cf7be44a34614a2",
"assets/assets/icons/menu_lembaga.svg": "9595c285906fc336ded14fa6e47a93f2",
"assets/assets/icons/menu_materi.svg": "82f18799a75ca0c2c65cdaf4ba3f2d50",
"assets/assets/icons/menu_umat.svg": "54561b791bfc6f3a73161cc2e8dcc80c",
"assets/assets/icons/menu_kitab_katolik.svg": "946648c77722cb0e6e05a501f5f57332",
"assets/assets/fonts/Inter-Medium.ttf": "1aa99aa25c72307cb7f16fae35e8c9d1",
"assets/assets/fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"assets/assets/fonts/DMSans-Medium.ttf": "24bfda9719b2ba60b94a0f9412757d10",
"assets/assets/fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"assets/assets/fonts/Inter-Light.ttf": "d4be01c95657978131342b1dcf829a45",
"assets/assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/assets/fonts/SourceSansPro-Bold.ttf": "8669b8706bbbdd1482e2fccc4ed96850",
"assets/assets/fonts/ArefRuqaa-Regular.ttf": "dd6dc03ae778869ffc77a78aeee103ba",
"assets/assets/fonts/OmarNaskh-Medium.ttf": "c54c37260e4fa1c5a954e4da42dc4122",
"assets/assets/fonts/OmarNaskh-Regular.ttf": "8c3146f6774a44cbcda7ddf5be5ec39f",
"assets/assets/fonts/Inter-Bold.ttf": "cef517a165e8157d9f14a0911190948d",
"assets/assets/fonts/SourceSansPro-Light.ttf": "81cd217e4a8160a930c6d5fb8d1e8e82",
"assets/assets/fonts/ArefRuqaa-Bold.ttf": "0a0a2a7ac3c10c95241a1dab54e29808",
"assets/assets/fonts/Inter-Regular.ttf": "eba360005eef21ac6807e45dc8422042",
"assets/assets/fonts/OmarNaskh-Bold.ttf": "875c66f4957dde6f18c71b0a1d272190",
"assets/assets/fonts/SourceSansPro-SemiBold.ttf": "83476a890be79f84e97b792c9c40d743",
"assets/assets/fonts/SecularOne-Regular.ttf": "874b0ac67f6fac73dcbfc0c10e4dff0d",
"assets/assets/fonts/Inter-SemiBold.ttf": "3e87064b7567bef4ecd2ba977ce028bc",
"assets/assets/fonts/LPMQ.ttf": "68ca40645bc89c222b980c49d26bbc85",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
