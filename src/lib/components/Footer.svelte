<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
	import Daemon from '$lib/components/monero/Daemon.svelte';

	let isLoggedIn = false;
	let daemon = false;
	let ticker = false;
	const toggleLogin = () => (daemon = ticker = isLoggedIn = !isLoggedIn);
</script>

<!--div id="sticky-footer" class="navbar fixed-bottom flex-shrink-0 p-1 bg-dark text-white-50"-->
<Row
	cols={2}
	class="navbar fixed-bottom justify-content-between bg-dark text-white-50 p-2"
	style="width:100%"
>
	<Col class="">
		<Daemon connected={daemon} on:click={toggleLogin} />
		<span class="box {daemon ? 'green' : 'red'}" on:click={toggleLogin}>
			monerod
			{#if !daemon}
				<Icon name="emoji-frown-fill" />
			{:else}
				<Icon name="emoji-sunglasses" />
			{/if}
		</span>
		<span class="box {ticker ? 'green' : 'red'}" on:click={toggleLogin}>
			Ticker <Icon name="bar-chart-fill" />
		</span>
		<span class="box {isLoggedIn ? 'green' : 'red'}" on:click={toggleLogin}>
			Control <Icon name="cloud" class="" />
		</span>
	</Col>
	<Col class="ms-auto">
		<small>Copyright &copy; {new Date().getFullYear()} TrasherDK</small>
	</Col>
</Row>

<!--/div-->
<svelte:head>
	<style>
		.box {
			border: 2px solid rgb(134, 125, 125);
			padding: 1px 3px 1px 3px;
			border-radius: 5px;
			/*margin-right: 1ch;
    font: size 1.5rem;*/
			font-weight: bold;
			user-select: none;
		}
		.box.green {
			color: #15ec15;
		}
		.box.red {
			color: #f83d3d;
		}
	</style>
</svelte:head>
