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
	let passwordVal1: string = '';
	let passwordVal2: string = '';
	let disabled = true;

	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formState = '';
		passwordVal1 = '';
		passwordVal2 = '';
	};

	const register = async () => {
		console.log('Alias: [%s]', alias);

		const body = {
			alias: alias,
			passwd1: passwordVal1,
			passwd2: passwordVal2
		};
		const userReg = await post('/auth/login', body);

		authenticated = userReg.authenticated;
		alias = userReg.alias;
		passwordVal1 = '';
		passwordVal2 = '';
		isOpen = false;
		formState = '';
	};

	const login = () => {
		formState = 'login';
		isOpen = false;
		passwordVal1 = '';
		passwordVal2 = '';
	};

	$: formInvalid = alias.length < 8 || passwordVal1.length < 8 || passwordVal1 !== passwordVal2;
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Register Login</ModalHeader>
	<ModalBody>
		<Form>
			<FormGroup floating label="Enter your alias">
				<Input name="alias" bind:value={alias} />
			</FormGroup>
			<FormGroup floating label="Enter your password">
				<Input name="password1" bind:value={passwordVal1} type="password" />
			</FormGroup>
			<FormGroup floating label="Validate password">
				<Input name="password2" bind:value={passwordVal2} type="password" />
			</FormGroup>
		</Form>
	</ModalBody>
	<ModalFooter>
		<Button disabled={formInvalid} color="success" on:click={register}>Register</Button>
		<Button color="warning" on:click={login}>Login</Button>
		<Button color="danger" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
