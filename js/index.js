import 'https://cdn.kernvalley.us/js/std-js/shims.js';
import 'https://cdn.kernvalley.us/js/std-js/deprefixer.js';
import 'https://unpkg.com/@webcomponents/custom-elements@1.4.2/custom-elements.min.js';
import 'https://cdn.kernvalley.us/components/share-button.js';
import 'https://cdn.kernvalley.us/components/github/user.js';
import 'https://cdn.kernvalley.us/components/current-year.js';
import 'https://cdn.kernvalley.us/components/pwa/install.js';
import 'https://cdn.kernvalley.us/components/ad/block.js';
import 'https://cdn.kernvalley.us/components/app/list-button.js';
import { init } from 'https://cdn.kernvalley.us/js/std-js/data-handlers.js';
import { $, ready } from 'https://cdn.kernvalley.us/js/std-js/functions.js';
import { loadScript } from 'https://cdn.kernvalley.us/js/std-js/loader.js';
import { importGa, externalHandler, telHandler, mailtoHandler } from 'https://cdn.kernvalley.us/js/std-js/google-analytics.js';
import { GA } from './consts.js';

if (typeof GA === 'string' && GA.length !== 0) {
	requestIdleCallback(async () => {
		importGa(GA).then(async ({ ga }) => {
			ga('create', GA, 'auto');
			ga('set', 'transport', 'beacon');
			ga('send', 'pageview');

			await ready();

			$('a[rel~="external"]').click(externalHandler, { passive: true, capture: true });
			$('a[href^="tel:"]').click(telHandler, { passive: true, capture: true });
			$('a[href^="mailto:"]').click(mailtoHandler, { passive: true, capture: true });
		});
	});
}

loadScript('https://cdn.polyfill.io/v3/polyfill.min.js').catch(console.error).finally(() => init());


$(document.documentElement).toggleClass({
	'no-dialog': document.createElement('dialog') instanceof HTMLUnknownElement,
	'no-details': document.createElement('details') instanceof HTMLUnknownElement,
	'js': true,
	'no-js': false,
});

cookieStore.get({ name: 'theme' }).then(async cookie =>{
	await $.ready;
	const $ads = $('ad-block:not([theme]), ad-block[theme="auto"]');

	const setTheme = async ({ name, value = 'auto' }) => {
		if (name === 'theme') {
			Promise.all([
				$(':root, [data-theme]').data({ theme: value }),
				$('[theme]:not(ad-block)').attr({ theme: value }),
				$ads.attr({ theme: value }),
			]);
		}
	};

	if (cookie && typeof cookie.value === 'string') {
		setTheme(cookie);
	}

	cookieStore.addEventListener('change', ({ changed, deleted }) => {
		const cookie = [...changed, ...deleted].find(({ name }) => name === 'theme');

		if (cookie) {
			setTheme(cookie);
		}
	});
});
