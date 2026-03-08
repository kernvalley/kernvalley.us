import { getConfig } from '@shgysk8zer0/js-utils/rollup';
import { rollupImport, rollupImportMeta } from '@shgysk8zer0/rollup-import';
import pkg from './package.json' with { type: 'json' };

export default getConfig('./js/index.js', {
	plugins: [
		rollupImport('_data/importmap.json'),
		rollupImportMeta({ baseURL: pkg.homepage }),
	],
	format: 'iife',
	minify: true,
	sourcemap: true,
});
