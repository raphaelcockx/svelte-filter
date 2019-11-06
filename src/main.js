import FilterApp from './FilterApp.svelte'

const filterApp = new FilterApp({
  target: document.querySelector('#filterApp'),
  props: {
    name: 'world'
  }
})

export default filterApp
