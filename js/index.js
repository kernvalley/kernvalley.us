import '@shgysk8zer0/kazoo/theme-cookie.js';
import { createPolicy } from '@shgysk8zer0/kazoo/trust.js';
import { getGooglePolicy } from '@shgysk8zer0/kazoo/trust-policies.js';
import { getAlerts } from './functions.js';
import { init } from '@shgysk8zer0/kazoo/data-handlers.js';
import { getCustomElement } from '@shgysk8zer0/kazoo/custom-elements.js';
import { ready, on, toggleClass, css } from '@shgysk8zer0/kazoo/dom.js';
import { importGa, externalHandler, telHandler, mailtoHandler } from '@shgysk8zer0/kazoo/google-analytics.js';
import { GA } from './consts.js';
import './components.js';

if (typeof GA === 'string' && GA.length !== 0) {
	const policy = getGooglePolicy();
	scheduler.postTask(() => {
		requestIdleCallback(async () => {
			const { ga, hasGa } = await importGa(GA, {}, { policy });

			if (hasGa()) {
				ga('create', GA, 'auto');
				ga('set', 'transport', 'beacon');
				ga('send', 'pageview');

				on('a[rel~="external"]', 'click', externalHandler, { passive: true, capture: true });
				on('a[href^="tel:"]', 'click', telHandler, { passive: true, capture: true });
				on('a[href^="mailto:"]', 'click', mailtoHandler, { passive: true, capture: true });
			}
		});
	}, { priority: 'background' });
} else {
	createPolicy('goog#html', {});
	createPolicy('goog#script-url', {});
	getGooglePolicy();
}

toggleClass([document.documentElement], {
	'no-dialog': document.createElement('dialog') instanceof HTMLUnknownElement,
	'no-details': document.createElement('details') instanceof HTMLUnknownElement,
	'js': true,
	'no-js': false,
});

ready().then(() => {
	init();

	getAlerts().then(alerts => {
		if (alerts.length !== 0) {
			const container = document.createElement('section');
			container.classList.add('flex', 'column');
			css([container], {
				'gap': '1.5em',
				'justify-content': 'space-around',
				'padding': '0.8em 10% 0.8em 10%',
			});

			container.append(...alerts);
			document.getElementById('main').prepend(container);
		}
	});

	getCustomElement('install-prompt').then(HTMLInstallPromptElement => {
		on('#install-btn', ['click'], () => new HTMLInstallPromptElement().show())
			.forEach(el => el.hidden = false);
	});
});
