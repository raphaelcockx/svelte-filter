<script>
	export let items
</script>

<style>
td {
  border: 1px solid #ccc;
}
</style>

{#if !items}
<p>Please wait, loading data...</p>
{:else}

  <table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>completed</th>
    </tr>

    {#each items as item (item.id)}
    <tr>
      <td>{item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.completed}</td>
    </tr>
    {/each}

  </table>


{/if}
