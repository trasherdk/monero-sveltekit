<script lang="ts">
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

	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formState = '';
	};

	const login = async () => {
		console.log('Alias: [%s] Password: [%s]', alias, passwordVal);

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
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Session Login</ModalHeader>
	<ModalBody>
		<Form>
			<FormGroup floating label="Enter your alias">
				<Input name="alias" bind:value={alias} />
			</FormGroup>
			<FormGroup floating label="Enter your password">
				<Input name="password" bind:value={passwordVal} />
			</FormGroup>
		</Form>
	</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={login}>Authenticate</Button>
		<Button color="secondary" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
