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

	const toggle = () => (isOpen = !isOpen);

	const handleUpdate = () => {
		return {};
	};
</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/">Monero Sveltekit</NavbarBrand>
	<NavbarToggler on:click={toggle} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/login"><Icon name="key-fill" style="color:red" /> Login</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>Logout</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
