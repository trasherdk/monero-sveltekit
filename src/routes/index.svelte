<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
</script>

<svelte:head>
	<title>Monero SvelteKit</title>
</svelte:head>

<div class="container mt-2 mb-5">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>Monero on/off ramp</h1>
		</Col>
	</Row>
	<Row cols={3} class="mt-4">
		<Col>
			<h2><Image title="Monero Logo" width="30" src="/images/monero-logo.svg" /> Monero price</h2>
			<p class="mt-4">This section will contain a live updated price chart.</p>
			<br />
			<figure>
				<Image
					src="/images/chart-example.png"
					style="width:100%;border: 1px solid lightgray"
					class="p-2 mb-1"
				/>
				<figcaption class="fs-7 fw-lighter">
					This is what a live price chart would look like.
				</figcaption>
			</figure>
			<Button
				href="https://techanjs.fumlersoft.dk/plot/feed-random/"
				target="_blank"
				color="info"
				outline><Image alt="chart" width="25" src="/images/chart.png" /> Price chart example</Button
			>
		</Col>
		<Col>
			<h2>⚙️ Monero Daemon</h2>
			<p class="mt-4">This section is for Monero daemon status.</p>
			<br />
			<Button href="#" color="info" outline>Nothing to see here</Button>
		</Col>
		<Col>
			<Row cols={1} class="mb-2">
				<Col>
					<h2>📑 Monero Wallet</h2>
					<p class="mt-4">This section is for wallet information.</p>
					<br />
					<Button href="#" color="info" outline>Nothing to see here</Button>
				</Col>
			</Row>
			<Row cols={1} class="border-bottom mb-2" />
			<Col>
				<h2>💄 What else do I need?</h2>
				<br />
				<Button href="#" color="info" outline>Nothing to see here</Button>
			</Col>
		</Col>
	</Row>
</div>
