<script>
  export let items

  let showCompleted = false
  let showUser = null

  $: filteredItems = (function() {
    var filteredItems = items

    if(filteredItems) {
      if(!showCompleted) {
        filteredItems = filteredItems.filter(item => !item.completed)
      }

      if(showUser) {
        filteredItems = filteredItems.filter(item => item.userId === showUser)
      }
    }

    return filteredItems
  })()

  function toggleCompleted() {
    showCompleted = !showCompleted
  }
 </script>

<style>
td {
  border: 1px solid #ccc;
}
</style>

{#if !filteredItems}
  <p>Please wait, loading data...</p>
{:else}
  <p>Show items for user <input type=number bind:value={showUser} /></p>

  <p><input type=checkbox bind:checked={showCompleted}>Show completed items</p>

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
