<script lang="ts">
	import { onMount } from 'svelte';
	import {
		Button,
		ButtonGroup,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader,
		Form,
		FormGroup,
		Input,
		Label
	} from 'sveltestrap';
	import { post } from '$utils/post';

	export let isOpen = false;
	export let formState = '';
	export let size: any;
	export let alias: string = '';
	export let authenticated = false;
	let passwordVal: string = '';
	$: formInvalid = !(alias.length > 7 && passwordVal.length > 7);

	onMount(() => {
		console.log('onMount[LoginForm] Enter: ');
		formInvalid = true;
	});

	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formState = '';
		passwordVal = '';
	};

	const login = async () => {
		console.log('Alias: [%s]', alias);

		const body = {
			alias: alias,
			passwd: passwordVal
		};
		const userAuth = await post('/auth/login', body);

		authenticated = userAuth.authenticated;
		alias = userAuth.alias;
		passwordVal = '';
		isOpen = false;
		formState = '';
	};

	const register = () => {
		isOpen = false;
		formState = 'register';
		passwordVal = '';
	};

	const formValid = () => alias.length > 7 && passwordVal.length > 7;
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Session Login</ModalHeader>
	<ModalBody>
		<Form>
			<FormGroup floating label="Enter your alias">
				<Input name="alias" bind:value={alias} />
			</FormGroup>
			<FormGroup floating label="Enter your password">
				<Input name="password" bind:value={passwordVal} type="password" />
			</FormGroup>
		</Form>
	</ModalBody>
	<ModalFooter>
		<span>{passwordVal} {formInvalid} {formValid()}</span>
		<Button disabled={formInvalid} color="success" on:click={login}>Login</Button>
		<Button color="warning" on:click={register}>Register</Button>
		<Button color="danger" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
