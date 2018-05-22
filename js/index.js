import './std-js/shims.js';
import './std-js/deprefixer.js';
import {loaded, $, wait, registerServiceWorker} from './std-js/functions.js';

loaded().then(async () => {
	if (document.documentElement.dataset.hasOwnProperty('serviceWorker')) {
		registerServiceWorker(document.documentElement.dataset.serviceWorker);
	}
	await wait(800);
	$('#coming-soon').showModal();
});
