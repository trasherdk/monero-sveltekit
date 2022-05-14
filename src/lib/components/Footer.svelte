<script lang="ts">
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';
	import Daemon from '$lib/components/Daemon.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import Control from '$lib/components/Control.svelte';

	let isLoggedIn = false;
	let daemon = false;
	let ticker = false;
	let control = false;

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
		<Ticker connected={ticker} on:click={toggleLogin} />
		<Control connected={control} on:click={toggleLogin} />
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
