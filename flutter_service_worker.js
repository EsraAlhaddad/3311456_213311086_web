'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "12e6454dde9e1d47a51d4f09d61f1778",
".git/config": "964d9ca975214bf424698b727dd6a368",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "647724fdf942dee8897f98dcfc314d0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad311c647e869f40b02f8e3c907fac75",
".git/logs/refs/heads/main": "3e4a1cc8252174f1afc4c560f8a69167",
".git/logs/refs/remotes/origin/main": "763c711ac65ed38a52f7f785cf670510",
".git/objects/04/935480b3d9e5044f1e2cc92fac0e33a3ea2e55": "7cde5dc341cd44bed1d1d75084f112b8",
".git/objects/07/13e57f6a802aeb9d2631fb8fc71d33425bbb73": "5a62735f1c536ec894cc983671600815",
".git/objects/08/0e0807ffbdde37d5642663f30cd9c79d2c50e9": "7edac4b20d006e8473701cb1ec0d5fe1",
".git/objects/0c/1eb6583df78de13dcc96e9f192c31be0937bfe": "25e34ae4d722c4979a79c20df86a3445",
".git/objects/0d/7c033e6c4b75cf5b868aa4ceef69adaded3c33": "cf9065596b10ea778de1037fcd1c4355",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/26/74fdaa0021554a09b9bd9c33ae91ba28e71d5b": "e9683bc0413e84fa043bc83088d53f28",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3e/7a37d55d89bcf9daa4e30120f9be97edbfa0da": "9665d869e5baab545fe3daa78199072e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/45c708687f9d55fd4b0c72fb496aae8879df50": "f298d9dd8ef1a9d53a7eb4c4df0ed032",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/a43959c2e52324579c064153cbefdca43f636b": "220657279cd0f4d205ad3883a66b5d70",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb5d1f1b8503aa26f2a20e9d5fd92c3e99d999": "f799c343dec18373fe92b2656e15f848",
".git/objects/81/03b24fee6f8e3ccf0d90e84d6c325f5363c0e7": "7e2a00fc362115cc2129bcadcb3df1bc",
".git/objects/83/c44ca4fffa0a2a0b4e2bc669c114152133f1a4": "a59a0e659beebcf6c1a940c501771cfe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ce9642b37739077fdd00b8a485f099fa04f623": "6e0246eda8f0815adebe826f6e470440",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/e632b4ffa66dea65db8e4f053d37d53e6674f3": "d6b45b3bd1eb555ba4fff14b3b0b3b2e",
".git/objects/94/88b3aaa44a766ec146823494cf2e82be5812df": "e9a790e2db443a1e68b6579bd84fab69",
".git/objects/9a/f72ec7fa8494bc6afef9cdbc2c62c15ffe460e": "54ca45b4d6f21cabf4e1f7620f3618f2",
".git/objects/9e/eb69c39e0f71d2bb94ae5247d6d4ca9b5487c1": "eb19e72fd8262abd835cfcf253c6cff6",
".git/objects/a0/a06abdc6bbbaf2e03d465acd7d24d725ac9b74": "4fd4618c4886a6b6e04231d233c7fba9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/52cfb5310d421a4e64f86093fe0a0c9012d92f": "06bb26eb85939a74e93aac1a1b83cb59",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/b3/be448161acb54df6d1f602bd688c1f98e80e89": "cbbf82fb3b3c095d7693310b3cafd27d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3593b6ea327701d901ba77104e0b309ea5df5b": "cb29c6ed87cb4aa2844ecbba71550eca",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/d02ed6740be6c6ff4c318f51ea7e821b8e5a98": "93a79f215bfbcb53118a5d021cc44fd9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/54ba13242159a2786c65214b68ba48c3d226a6": "1cc4c7f1f276d16cfe68b3fe913340fa",
".git/objects/fa/611bc195bb99546425a49eb3865ca96ed810ce": "08d0d47fe3b9fa2aeddf60610ae70f0d",
".git/refs/heads/main": "90ecf227fc654510e794f5d61ab35d46",
".git/refs/remotes/origin/main": "90ecf227fc654510e794f5d61ab35d46",
"assets/AssetManifest.json": "c965d71d585921bb71beaa935b4d3510",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/ankara.jpg": "8cb264cbd54af23f3d3111bb9633b590",
"assets/images/antalya.jpg": "38011b6b0dcb0788fff77ea937221763",
"assets/images/cloudy.png": "5364f68c6359185c4cb7e75affb990fa",
"assets/images/istanbul.jpg": "033783642933565dc1b8aa1131efe80d",
"assets/images/izmir.jpg": "65ce7f0cbf568444009ed07bc825995c",
"assets/images/konya.jpg": "b8e04668d31edb96dcd4480dca4214c1",
"assets/images/login_screen.jpg": "90234ccd1bdbf909a3a6f1f550f5940d",
"assets/images/logo.png": "349a90af32717e2e6fcbc038267da7e2",
"assets/images/resim.jpg": "0a7fcad67fb95c535d82b0fea2f552bf",
"assets/images/screen_2.jpg": "23a046408221545f1b994a9d446f5ff2",
"assets/images/screen_3.jpg": "217e5253432e6c643677c1979ea3f649",
"assets/images/signup.png": "43b8fc83ddb2124f7df0d0f18605982b",
"assets/images/trabzon.jpg": "e4f4a2c98b12d8d86fe5ed8cd4d026b5",
"assets/images/user.png": "b91810d0dec88867d9639d75c53a4413",
"assets/images/welcome_screen.jpg": "abda5226922814784e5825248cc2c509",
"assets/NOTICES": "63e5f72d0d6d934036a4824b289d7f59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "44f36ed8d0f61e4efcf36c7f8aff63cf",
"/": "44f36ed8d0f61e4efcf36c7f8aff63cf",
"main.dart.js": "3483ae2a682f3e8d96b87d119c7b63b6",
"manifest.json": "60d6354d90212284538fe54db9ce5701",
"version.json": "75a0f04c457dac0984110486f4b2ad25"
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
