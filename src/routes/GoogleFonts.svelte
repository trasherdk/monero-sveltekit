<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
	import GoogleFont, { getFontStyle } from '@svelte-web-fonts/google';
	import type { GoogleFontDefinition, GoogleFontVariant } from '@svelte-web-fonts/google';

	const fonts: GoogleFontDefinition[] = [
		{
			family: 'Style Script',
			variants: ['200']
		},
		{
			family: 'Roboto',
			variants: ['100', '400italic']
		}
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<GoogleFont {fonts} display="swap" />
</svelte:head>

<!-- Used for illustration purposes -->
<div class="container mt-2 mb-5">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>
				{#each fonts as font}
					{#each font.variants as variant}
						<p style={getFontStyle(font.family, variant)}>
							{font.family}
						</p>
					{/each}
				{/each}
			</h1>
		</Col>
	</Row>
</div>
