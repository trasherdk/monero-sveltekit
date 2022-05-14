<script context="module">
	export async function load({ session }) {
		if (session.user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<script lang="ts">
	//	import monerojs from 'monero-javascript';
	import { onMount } from 'svelte';
	import { Button, Col, Row, Image, Icon } from 'sveltestrap';

	export let connected = false;
	const toggle = () => (connected = !connected);
</script>

<span class="box {connected ? 'green' : 'red'}" on:click={toggle}>
	Control
	<Icon name="cloud" />
</span>
