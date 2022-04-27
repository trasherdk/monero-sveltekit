<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
	import EasyQr from '$lib/components/EasyQR.svelte';

	const logo = '/images/fumlersoft-shield-cut-100x100.png';
	const qr =
		'53MMg1e6NL11gjhNsNfCjveLAn7vgP77iYeDeqoLEAXP1PQEKBNnw2WPHJ6viM7pAjEWms6yK3oDjdtVmyvxRWqaM3Xm268';
</script>

<svelte:head>
	<title>Alice & Bob - Monero SvelteKit</title>
</svelte:head>

<div class="container mt-2 mb-5">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>Alice and Bob doing the Monero thing</h1>
		</Col>
	</Row>
	<Row cols={3} class="mt-5">
		<Col>
			<h3 class="mb-2 border-bottom">Alice</h3>
		</Col>
		<Col>
			<h3 class="mb-2 border-bottom">Exchange</h3>
			<Row cols={2}>
				<Col>Some description.</Col>
				<Col>
					<EasyQr codeValue={qr} {logo} />
				</Col>
			</Row>
		</Col>
		<Col>
			<h3 class="mb-2 border-bottom">Bob</h3>
		</Col>
	</Row>
</div>
