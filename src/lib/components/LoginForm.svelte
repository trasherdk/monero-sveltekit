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

	export let isOpen = false;
	export let formOpen = false;
	export let size: any;
	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formOpen = isOpen;
	};

	let aliasVal: string = '';
	let passwordVal: string = '';
	export let authenticated = false;

	const login = async () => {
		authenticated = true;
		isOpen = false;
	};
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Session Login</ModalHeader>
	<ModalBody>
		<Form>
			<FormGroup floating label="Enter your alias">
				<Input name="alias" value={aliasVal} />
			</FormGroup>
			<FormGroup floating label="Enter your password">
				<Input name="password" value={passwordVal} />
			</FormGroup>
		</Form>
	</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={login}>Authenticate</Button>
		<Button color="secondary" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
