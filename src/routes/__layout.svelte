<script>
	import '@fontsource/courier-prime';
	import { Styles } from 'sveltestrap';
	import NavBar from '$components/NavBar.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<NavBar />
<slot style="margin-bottom: 2rem;" />
<Footer />
<Styles />
