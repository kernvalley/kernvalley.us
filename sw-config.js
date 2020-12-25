---
layout: null
---
'use strict';
/*eslint no-unused-vars: 0*/
const config = {
	version: '{{ site.data.app.version | default: site.version }}',
	fresh: [
		/* Root document */
		'{{ site.pages | where: "pinned", true | map: "url" | join: "', '" }}',
		/*'{{ site.posts | where: "pinned", true | map: "url" | join: "', '" }}',*/
	].map(path => new URL(path, location.origin).href),
	stale: [
		'/css/index.min.css',
		'/js/index.min.js',
		'/img/icons.svg',
		/* Other HTML */
		'https://cdn.kernvalley.us/components/toast-message.html',
		'https://cdn.kernvalley.us/components/leaflet/map.html',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.html',
		'https://cdn.kernvalley.us/components/slide-show/slide-show.html',
		'https://cdn.kernvalley.us/components/github/user.html',

		/* JS, `customElements`, etc. */
		'https://cdn.kernvalley.us/components/toast-message.css',
		'https://cdn.kernvalley.us/components/leaflet/map.css',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.css',
		'https://cdn.kernvalley.us/components/slide-show/slide-show.css',
		'https://cdn.kernvalley.us/components/github/user.css',
		'https://cdn.polyfill.io/v3/polyfill.min.js',
		'https://cdn.kernvalley.us/components/pwa/install.js',

		/* CSS */
		'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',

		/* Images & Icons */
		'/img/apple-touch-icon.png',
		'/img/icon-512.png',
		'/img/icon-192.png',
		'/img/icon-32.png',
		'/img/favicon.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mail-send.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mark-location.svg',
		'https://cdn.kernvalley.us/img/octicons/file-media.svg',

		/* Fonts */
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
		'https://cdn.kernvalley.us/fonts/Libertine.woff',
		'https://cdn.kernvalley.us/fonts/ubuntu.woff2',
		/* Other */
	].map(path => new URL(path, location.origin).href),
	allowed: [
		/https:\/\/maps\.wikimedia\.org\/osm-intl\/*/,
		/https:\/\/secure\.gravatar\.com\/avatar\/*/,
		/https:\/\/i\.imgur\.com\/*/,
		/https:\/\/*\.githubusercontent\.com\/u\/*/,
		/https:\/\/api\.github\.com\/users\/*/,
	],
};
