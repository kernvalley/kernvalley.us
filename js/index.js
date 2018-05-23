import './std-js/shims.js';
import './std-js/deprefixer.js';
import {loaded, $, wait, registerServiceWorker} from './std-js/functions.js';
import webShareApi from './std-js/webShareApi.js';
import {
	facebook,
	twitter,
	googlePlus,
	linkedIn,
	reddit,
	gmail,
} from './std-js/share-config.js';

webShareApi(facebook, twitter, googlePlus, linkedIn, reddit, gmail);

loaded().then(async () => {
	if (document.documentElement.dataset.hasOwnProperty('serviceWorker')) {
		registerServiceWorker(document.documentElement.dataset.serviceWorker);
	}
	await wait(800);
	$('#coming-soon').showModal();
});
