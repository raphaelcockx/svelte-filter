<script>
  export let items
  let showOnlyCompleted = false
  $: filteredItems = showOnlyCompleted ? items.filter(item => item.completed) : items

  function toggleCompleted() {
    showOnlyCompleted = !showOnlyCompleted
  }
</script>

<style>
td {
  border: 1px solid #ccc;
}

button {
  margin-bottom: 18px;
}
</style>

{#if !items}
<p>Please wait, loading data...</p>
{:else}

  <button on:click={toggleCompleted}>{#if showOnlyCompleted}Show all{:else}Show only completed{/if}</button>

  <table>
    <tr>
      <th>userId</th>
      <th>id</th>
      <th>title</th>
      <th>completed</th>
    </tr>

    {#each filteredItems as item (item.id)}
    <tr>
      <td>{item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.completed}</td>
    </tr>
    {/each}

  </table>


{/if}
