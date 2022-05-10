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

	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formState = '';
	};

	const logout = async () => {
		authenticated = false;
		alias = '';
		isOpen = false;
	};
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Session Logout</ModalHeader>
	<ModalBody>
		<h2>Logout of this session?</h2>
		<Form>
			<FormGroup>
				<Input name="alias" bind:value={alias} disabled />
			</FormGroup>
		</Form>
	</ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={logout}>Logout</Button>
		<Button color="secondary" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
