'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/google_fonts/Roboto/Roboto-Thin.ttf": "8e1900eabb62e4e502ee3de329e0b833",
"assets/assets/google_fonts/Roboto/Roboto-MediumItalic.ttf": "18191c4ed1413aac2700bbfa58b90774",
"assets/assets/google_fonts/Roboto/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/google_fonts/Roboto/Roboto-BoldItalic.ttf": "fa726104cd4b7e8f106e391fea744b08",
"assets/assets/google_fonts/Roboto/Roboto-BlackItalic.ttf": "fc9c6dc66452de428b034f2af1a561ce",
"assets/assets/google_fonts/Roboto/LICENSE.txt": "3b83ef96387f14655fc854ddc3c6bd57",
"assets/assets/google_fonts/Roboto/Roboto-Black.ttf": "53ab4bb513d53af898e25637a2750ffc",
"assets/assets/google_fonts/Roboto/Roboto-ThinItalic.ttf": "0d058ce1aecaa16d26b71bdab2be31b0",
"assets/assets/google_fonts/Roboto/Roboto-Italic.ttf": "270c8dce1ab3c57848d7d278cb96574f",
"assets/assets/google_fonts/Roboto/Roboto-LightItalic.ttf": "b4591abf6ddac60905ad8a2ac5ba5363",
"assets/assets/google_fonts/Roboto/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/google_fonts/Roboto/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/google_fonts/Roboto/Roboto-Bold.ttf": "2e9b3d16308e1642bf8549d58c60f5c9",
"assets/assets/google_fonts/Roboto_Condensed/RobotoCondensed-VariableFont_wght.ttf": "db98a47617ff4be3def284d81a518149",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLightItalic.ttf": "74387b9c06965b1c7066234f16d5b1a9",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraBold.ttf": "820ce552a056f8ccdb9703949cdcd954",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Black.ttf": "3541105866680308505e4b754e1e2363",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-MediumItalic.ttf": "55f67f51e9a89b2e916f1b9bef605be3",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-SemiBold.ttf": "f9d8e599ea4411e8993c7bc09918fadd",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Medium.ttf": "71b4c6d87c5477f0c7843ec6d324e298",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Thin.ttf": "9e024e12238807fd31f3a56c346fcbbc",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Regular.ttf": "f1123f4b3d926ac4f72cc8091a4b5d19",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraLight.ttf": "3c8dbc9cdab9e837f36517bd1d264042",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-BlackItalic.ttf": "3717bfcbc0c286f69c3ca13b3da885f2",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-SemiBoldItalic.ttf": "c489b1fd586b681cd542b933034eafac",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ExtraBoldItalic.ttf": "b86c432570bc98255e3c84f9efd58b12",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-BoldItalic.ttf": "b52e4a16968bbdbe2fa2256ad48d1cae",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-LightItalic.ttf": "b7dc633f951fada9d6c72196e591772c",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Light.ttf": "68680c984f72eef7b2e2cf269382f2a6",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Italic.ttf": "edff0bf76cab6192121ddb8eea6e51a3",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-ThinItalic.ttf": "19effa82b9406779599f8f93574cf374",
"assets/assets/google_fonts/Roboto_Condensed/static/RobotoCondensed-Bold.ttf": "0233b881b26ce6cc3884c6944940d11b",
"assets/assets/google_fonts/Roboto_Condensed/OFL.txt": "d0d30e4860cc10440e095be065c2b0e3",
"assets/assets/google_fonts/Roboto_Condensed/RobotoCondensed-Italic-VariableFont_wght.ttf": "df70e7fafa15ce9c4670c7d3eca8df5e",
"assets/assets/google_fonts/Roboto_Condensed/README.txt": "ec9e0bd0aa1f2beac34e1b1860009965",
"assets/assets/translations/en.json": "0c27e72a657589816917527e9038cd5a",
"assets/assets/translations/el.json": "3a0f448861c7e5bc318586325b33b122",
"assets/assets/images/portrait_blob.png": "aa9f8219e2668a437b234d4b1cfefd04",
"assets/assets/images/deloitte.png": "a50743013a6291b2dee2041ea3c30832",
"assets/assets/images/duth.png": "e0687d3d6274d9f19c7991a59ce84140",
"assets/assets/images/portrait.jpg": "5db75bfa29646a20cd7462db641f885d",
"assets/assets/images/projects/army_scheduler.png": "90040e8cf8d8a2764fa77c32b9115215",
"assets/assets/images/projects/bookings_app.jpg": "2500cedfde3f2196ea599aee4233b662",
"assets/assets/images/projects/greek_driving_exams.png": "5eeedc97372bb83489d2d1fa234dcbfb",
"assets/assets/images/projects/news_app.jpg": "72937afd0ee6e005bdd84e92b987bbad",
"assets/assets/images/projects/sos_app.jpg": "f7b155fb39a51d5b4fc16abf96116d20",
"assets/assets/images/projects/greek_driving_exams_el.png": "9a16163acd4e060c2eaa489cbf6d6061",
"assets/assets/images/projects/inventory_app.jpg": "b6658ea784ccb7689f83958d61b8bb0e",
"assets/assets/lottie/bird.json": "93e2f15af2a2d23e1429a99cf9aed684",
"assets/assets/lottie/background.json": "f66fad9976f5a150b1ffd74911a3c662",
"assets/assets/sounds/sound.mp3": "d9168662c6509ee69d34572a6d92363e",
"assets/assets/icons/mp_logo.png": "fcfc01909b9834caca129a26a433748b",
"assets/assets/icons/email.svg": "7abedc06039f3ec9f01418550990a5e5",
"assets/assets/icons/file.svg": "55e34c7e1bace869262ab0ae324571e9",
"assets/assets/icons/github.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/icons/linkedin.svg": "4b17c9586313717e568e841e662d381e",
"assets/assets/icons/projects/dart.svg": "4a0a9df85742ff469633877bd6e7bdaf",
"assets/assets/icons/projects/raspberry.svg": "c3feebe86b129163012929454eeefb49",
"assets/assets/icons/projects/firebase.svg": "a4cdca210685e2b66e70f9863d03a2de",
"assets/assets/icons/projects/widget_book.svg": "b98a83e2531423d80d61176671586fd5",
"assets/assets/icons/projects/bloc.svg": "7c234916bff5a2e32800b5d7ff1eb349",
"assets/assets/icons/projects/figma.svg": "2e9d0c50124a8764f454ac10eceeb2fa",
"assets/assets/icons/projects/play_store.svg": "1582d016534057b3f6d9e5b780d70f4f",
"assets/assets/icons/projects/sqlite.svg": "6a7290c66b4cc4b87166bf1cf08ffc04",
"assets/assets/icons/projects/flutter.svg": "030f81e13f1a723e090651610a5d8c11",
"assets/assets/icons/projects/java.svg": "3cbed2cd68a08c58972ae7bfc0296061",
"assets/assets/icons/projects/rfid.svg": "2e9e26d51881019c6a76c4edff652714",
"assets/assets/icons/projects/gemini.svg": "e6fb2cbeb2e04a07cea631da18183c40",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "84bf5f0394c213c92961aada817a9c47",
"assets/AssetManifest.bin": "e3e602852bb97d387b48942693936e90",
"assets/AssetManifest.json": "3451fd5faff31c75cf81faa3adb5aeaa",
"assets/AssetManifest.bin.json": "5c9becc4aad000dafea97b46c1241f21",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/fonts/MaterialIcons-Regular.otf": "7f7de2a279883f5164d8f4dc30b376f7",
"mp_logo.png": "e02b05faff78c535220b6b9254a30e0f",
"flutter_bootstrap.js": "ec1f14b39199f73c8f2fdc1938c4b638",
"favicon.png": "a3ac378dd9ce078de02ce8ef8eaab3dd",
"main.dart.js": "7ea6e37f92856fe2c381a6b71e5dcbbc",
"index.html": "a9ede6de8825010780dddf3b7f04c722",
"/": "a9ede6de8825010780dddf3b7f04c722",
"version.json": "009c9e65172e010890f7f65fde438006",
"manifest.json": "7d48b8890d62d78d149eeb0e5c37a975",
"icons/Icon-192.png": "469cd3d638519a8a7bae9c681130d460",
"icons/Icon-maskable-192.png": "469cd3d638519a8a7bae9c681130d460",
"icons/Icon-512.png": "852f2d02b3bea7631a0df470fe060115",
"icons/Icon-maskable-512.png": "852f2d02b3bea7631a0df470fe060115"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
