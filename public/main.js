fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => filterApp.$set({ items: json }))
