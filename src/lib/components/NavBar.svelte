<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Icon
	} from 'sveltestrap';

	// variable that control whether mobile menu is open or closed
	let isOpen = false;
	let isLoggedIn = false;

	const toggleOpen = () => (isOpen = !isOpen);
	const toggleLogin = () => (isLoggedIn = !isLoggedIn);

	const handleUpdate = () => {
		return {};
	};
</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">Monero Sveltekit</NavbarBrand>
	<NavbarToggler on:click={toggleOpen} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>
			{#if !isLoggedIn}
				<NavItem>
					<NavLink on:click={toggleLogin}><Icon name="key-fill" style="color:red" /> Login</NavLink>
				</NavItem>
			{:else}
				<NavItem>
					<NavLink on:click={toggleLogin}
						><Icon name="key-fill" style="color:green" /> Logout</NavLink
					>
				</NavItem>
			{/if}
		</Nav>
	</Collapse>
</Navbar>
