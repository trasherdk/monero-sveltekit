<script lang="ts">
	import {
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Icon,
		Image
	} from 'sveltestrap';

	import LoginForm from '$lib/components/LoginForm.svelte';
	import LogoutForm from '$lib/components/LogoutForm.svelte';
	type FormStateType = '' | 'login' | 'logout' | 'register';

	let formState = '';
	let isLoggedIn = false;
	let loginForm = false;
	let logoutForm = false;
	let alias = '';

	// variable that control whether mobile menu is open or closed
	let isOpen = false;

	const toggleOpen = () => (isOpen = !isOpen);
	const toggleLogin = () => {
		console.log('toggleLogin', formState, isLoggedIn);
		formState = isLoggedIn ? 'logout' : 'login';
	};

	const handleUpdate = () => {
		return {};
	};
</script>

<Navbar color="light" light expand="md">
	<NavbarBrand href="/"
		><Image
			src="/images/fumlersoft-shield-cut-100x100.png"
			style="height:70px;position:absolute;top:50px"
		/> Monero Sveltekit</NavbarBrand
	>
	<NavbarToggler on:click={toggleOpen} />
	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="" style="width:50%" navbar>
			<NavItem>
				<NavLink href="/AliceBob">Alice & Bob</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/about">About</NavLink>
			</NavItem>
		</Nav>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink on:click={toggleLogin}>
					{#if !isLoggedIn}
						<span style="color:red;font-size:1rem;font-weight:bold">Login</span>
						<Icon name="lock" style="color:red;font-size:1rem" />
					{:else}
						<span style="color:green;font-size:1rem;font-weight:bold">{alias}</span>
						<Icon name="unlock" style="color:green;font-size:1rem" />
					{/if}
				</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>

<LoginForm
	bind:authenticated={isLoggedIn}
	bind:formState
	bind:alias
	isOpen={formState == 'login'}
	size="sm"
/>

<LogoutForm
	bind:authenticated={isLoggedIn}
	bind:formState
	bind:alias
	isOpen={formState == 'logout'}
	size="sm"
/>
