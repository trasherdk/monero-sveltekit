<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
</script>

<svelte:head>
	<title>Monero SvelteKit</title>
</svelte:head>

<div class="container mt-4">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>Monero + Monero Javascript + SvelteKit = ♥️</h1>
		</Col>
	</Row>
	<Row cols={3} class="mt-5">
		<Col>
			<h2><Image alt="Monero Logo" width="50" src="/monero-logo.svg" /> Monero</h2>
			<p>
				Monero is a private, secure, untraceable, decentralised digital currency. You are your bank,
				you control your funds, and nobody can trace your transfers unless you allow them to do so..
			</p>
			<p>Check Monero out here:</p>
			<Button
				href="https://github.com/monero-project/monero/tree/v0.17.3.0#introduction"
				target="_blank"
				color="info"
				outline><Icon name="github" style="color:gray" /> Monero project</Button
			>
			and here:
			<Button href="https://www.getmonero.org/" target="_blank" color="info" outline
				><Image alt="Monero Logo" width="25" src="/monero-logo.svg" /> Monero website</Button
			>
		</Col>
		<Col>
			<h2>⚙️ Monero Javascript</h2>
			<ul>
				<li>
					A Node.js library for creating Monero applications using RPC and WebAssembly bindings to
					<Button
						href="https://github.com/monero-project/monero/releases/tag/v0.17.3.0"
						target="_blank"
						outline>monero v0.17.3.0 'Oxygen Orion'</Button
					>
				</li>
				<li>Supports wallet and daemon RPC clients.</li>
				<li>Supports client-side wallets in Node.js or the browser using WebAssembly.</li>
				<li>Supports multisig, view-only, and offline wallets.</li>
				<li>Wallet types are interchangeable by conforming to a common interface.</li>
				<li>
					Uses a clearly defined data model and API specification intended to be intuitive and
					robust.
				</li>
				<li>Query wallet transactions, transfers, and outputs by their properties.</li>
				<li>Fetch and process binary data from the daemon (e.g. raw blocks).</li>
				<li>
					Receive notifications when blocks are added to the chain or when wallets sync, send, or
					receive.
				</li>
				Over 280 passing Mocha tests.
			</ul>
			<p>Here you can find more about it:</p>
			<Button
				href="https://github.com/monero-ecosystem/monero-javascript#monero-javascript-library"
				target="_blank"
				color="info"
				outline>Docs</Button
			>
		</Col>
		<Col>
			<Row cols={1} class="mb-2">
				<Col>
					<h2>📑 SvelteKit</h2>
					<p>
						The full power of this site comes from SvelteKit. It's a framework built on top of
						Svelte and brings features like routing to this template. Visit the SvelteKit site here:
					</p>
					<Button href="https://kit.svelte.dev/docs" target="_blank" color="info" outline
						>Sveltekit Docs</Button
					>
				</Col>
			</Row>
			<Row cols={1} class="border-bottom mb-2" />
			<Col>
				<h2>💄 Sveltestrap</h2>
				<p>
					This template uses Bootstrap (by twitter) in the newest version 5 as CSS-framework. On
					this page, it's implemented with
					<Button
						href="https://sveltestrap.js.org/?path=/story/components--get-started"
						target="_blank"
						color="info"
						outline
					>
						Sveltestrap Docs</Button
					>
				</p>
				<p>Check Bootstrap out here:</p>
				<Button
					href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
					target="_blank"
					color="info"
					outline>Bootstrap Docs</Button
				>
			</Col>
		</Col>
	</Row>
</div>
