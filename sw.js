/*
 *
 * @authors Your Name (you@example.org)
 * @date    2018-07-24 07:18:52
 * @version $Id$
 */
let staticCacheName = 'restaurant-reviews-v1';
let urlsToCache = [
	'/',
	'index.html',
	'restaurant.html?id=1',
	'restaurant.html?id=2',
	'restaurant.html?id=3',
	'restaurant.html?id=4',
	'restaurant.html?id=5',
	'restaurant.html?id=6',
	'restaurant.html?id=7',
	'restaurant.html?id=8',
	'restaurant.html?id=9',
	'restaurant.html?id=10',
	'js/dbhelper.js',
	'js/main.js',
	'js/restaurant_info.js',
	'data/restaurants.json',
	'css/styles.css',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg',
	'img/5.jpg',
	'img/6.jpg',
	'img/7.jpg',
	'img/8.jpg',
	'img/9.jpg',
	'img/10.jpg',
	'img/SorryNoResults.png'
];


self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys().then(function(cacheNames) {
			return Promise.all(
				cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('restaurant-reviews') && cacheName != staticCacheName;
				}).map(function(cacheName) {
					return caches.delete(cacheName);
				})
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if(response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
