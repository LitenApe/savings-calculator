<script>
	import Calculations from "./components/calculations.svelte";
	import Sidebar from "./components/sidebar.svelte";
</script>

<main>
	<h1>Savings Calculator</h1>
	<div>
		<Sidebar />
		<Calculations />
	</div>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	main {
		height: 100%;
	}

	h1 {
		width: 1px;
		height: 1px;

		position: absolute;
		overflow: hidden;
	}

	div {
		display: flex;
		height: 100%;
	}
</style>
