import './std-js/shims.js';
import './std-js/deprefixer.js';
import {loaded, $, wait} from './std-js/functions.js';

loaded().then(async () => {
	await wait(800);
	$('#coming-soon').showModal();
});
