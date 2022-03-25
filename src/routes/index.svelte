<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
</script>

<svelte:head>
	<title>Monero SvelteKit</title>
</svelte:head>

<div class="container mt-4">
	<Row cols={1} class="border-bottom">
		<Col>
			<h1>Monero price graph</h1>
		</Col>
	</Row>
	<Row cols={3} class="mt-5">
		<Col>
			<h2><Image alt="Monero Logo" width="50" src="/monero-logo.svg" /> Monero price</h2>
			<p>This section will contain a live updated price chart.</p>
			<p>Check a static example out here:</p>
			<Button href="https://techanjs.fumlersoft.dk/plot/ohlc/" target="_blank" color="info" outline
				><Image alt="chart" width="25" src="/chart.png" /> Price chart</Button
			>
		</Col>
		<Col>
			<h2>⚙️ Monero Daemon</h2>
			<p>Here you can find more about it:</p>
			<Button href="#" color="info" outline>Nothing</Button>
		</Col>
		<Col>
			<Row cols={1} class="mb-2">
				<Col>
					<h2>📑 Monero Wallet</h2>
					<p />
					<Button href="#" color="info" outline>Nothing</Button>
				</Col>
			</Row>
			<Row cols={1} class="border-bottom mb-2" />
			<Col>
				<h2>💄 What else do I need?</h2>
				<p />
				<Button href="#" color="info" outline>Nothing</Button>
			</Col>
		</Col>
	</Row>
</div>
