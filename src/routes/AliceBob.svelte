<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
	import EasyQr from '$lib/components/EasyQR.svelte';
	import generatePayload from 'promptpay-qr';
	import { copy as svelteCopy } from 'svelte-copy';
	import { shortenAddress } from '$utils/monero';

	const titlogo = '/images/fumlersoft-shield-cut-100x100.png';
	const titqr = '00020101021129390016A000000677010111031500499909148250453037645802TH63047F59';
	const titphone = '087-013-3224';

	const xmrqr =
		'53MMg1e6NL11gjhNsNfCjveLAn7vgP77iYeDeqoLEAXP1PQEKBNnw2WPHJ6viM7pAjEWms6yK3oDjdtVmyvxRWqaM3Xm268';
	const xmrlogo = '/images/monero-logo.svg';

	const titqrcode = generatePayload(titphone, { amount: 123.45 });
</script>

<sveltekit:head>
	<title>Alice & Bob - Monero SveltekitKit</title>
	<style>
		.container-80 {
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
		.container-90 {
			width: 90%;
			margin-left: auto;
			margin-right: auto;
		}
		.courier-mono {
			font-family: 'Courier Prime', monospace;
			font-size: 16px;
		}
		.center {
			text-align: center;
		}
		.nowrap {
			white-space: nowrap;
		}
	</style>
</sveltekit:head>

<div class="container-90 mt-2 mb-5">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>Alice and Bob doing the Monero thing</h1>
		</Col>
	</Row>
	<Row cols={3} class="mt-5">
		<Col style="width:25%">
			<h3 class="mb-2 border-bottom">Alice</h3>
		</Col>
		<Col style="width:50%">
			<h3 class="mb-2 border-bottom">Exchange</h3>
			<Row cols={2}>
				<Col>
					<h4>Prompt Pay Mobile</h4>
					<div class="qr-wrapper">
						<EasyQr id="promptpay-qr" codeValue={titqrcode} logo={titlogo} />
					</div>
				</Col>
				<Col>
					<h4>Monero (Stagenet)</h4>
					<div class="qr-wrapper">
						<EasyQr id="monero-qr" codeValue={xmrqr} logo={xmrlogo} />

						<div class="courier-mono center nowrap" use:svelteCopy={xmrqr}>
							{shortenAddress(xmrqr, 8)}
							<Icon name="clipboard" />
						</div>
					</div>
				</Col>
			</Row>
		</Col>
		<Col style="width: 25%">
			<h3 class="mb-2 border-bottom">Bob</h3>
		</Col>
	</Row>
</div>

<style>
	.qr-wrapper {
		width: 200px;
	}
</style>
