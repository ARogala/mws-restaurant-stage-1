/**
 *
 * @authors Your Name (you@example.org)
 * @date    2018-07-24 07:17:29
 * @version $Id$
 */

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(reg) {
    	console.log('ServiceWorker registration successful with scope: ', reg.scope);
    }).catch(function(err) {
    	console.log('ServiceWorker registration failed: ', err);
    });
  });
}


