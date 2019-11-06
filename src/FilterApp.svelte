<script>
	export let items
</script>

<style>
	h1 {
		color: purple;
	}
</style>

{#if !items}
<p>Please wait, loading data...</p>
{:else}
<p>Showing the items</p>
{/if}
