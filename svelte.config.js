import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
		files: {
			hooks: './src/hooks/index'
		},
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					'@components': path.resolve('./src/lib/components'),
					'@lib': path.resolve('./src/lib'),
					'@utils': path.resolve('./src/lib/utils'),
					'@monero': path.resolve('./static/monero-javascript')
				}
			}
		}
	}
};

export default config;
