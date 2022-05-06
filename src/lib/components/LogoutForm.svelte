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
	export let size: string;
	const toggle = () => {
		size = 'md';
		isOpen = !isOpen;
		formOpen = isOpen;
	};

	export let authenticated = false;

	const logout = async () => {
		authenticated = false;
		isOpen = false;
	};
</script>

<Modal {isOpen} backdrop={false} {toggle}>
	<ModalHeader {toggle}>Session Logout</ModalHeader>
	<ModalBody><h2>Logout of this session?</h2></ModalBody>
	<ModalFooter>
		<Button color="primary" on:click={logout}>Logout</Button>
		<Button color="secondary" on:click={toggle}>Cancel</Button>
	</ModalFooter>
</Modal>
