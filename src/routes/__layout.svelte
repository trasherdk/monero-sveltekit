<script>
	import { Styles } from 'sveltestrap';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<NavBar />
<slot style="margin-bottom: 2rem;" />
<Footer />
<Styles />
