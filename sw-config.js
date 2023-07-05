---
layout: null
---
'use strict';
/* eslint-env serviceworker */
/* eslint no-unused-vars: 0 */
const config = {
	version: '{{ site.data.app.version | default: site.version }}',
	fresh: [
		'/',
		'https://apps.kernvalley.us/apps.json',
		'https://news.kernvalley.us/alerts.json',
		'/manifest.json',
	].map(path => new URL(path, location.origin).href),
	stale: [
		/* Other HTML */
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}/install/prompt.html',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}/github/user.html',

		/* JS */
		'/js/index.min.js',

		/* CSS */
		'/css/index.min.css',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}/github/user.css',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}/install/prompt.css',

		/* Images & Icons */
		'/img/apple-touch-icon.png',
		'/img/icon-512.png',
		'/img/icon-192.png',
		'/img/icon-32.png',
		'/img/favicon.svg',
		'/img/icons.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mail-send.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mark-location.svg',
		'https://cdn.kernvalley.us/img/octicons/file-media.svg',
		'https://cdn.kernvalley.us/img/logos/play-badge.svg',
		'https://cdn.kernvalley.us/img/logos/instagram.svg',

		/* Fonts */
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
		'https://cdn.kernvalley.us/fonts/Libertine.woff',
	].map(path => new URL(path, location.origin).href),
	allowed: [
		'https://secure/.gravatar/.com/avatar/',
		'https://i.imgur.com',
		'https://api.githubusercontent.com/us/',
		'https://api.github.com/users/',
		/\.(jpg|png|webp|svg|gif)$/,
	],
	alloweFresh: [
		/\.(html|css|js|json)$/,
	]
};
