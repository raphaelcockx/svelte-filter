import FilterApp from './FilterApp.svelte'

const filterApp = new FilterApp({
  target: document.querySelector('#filterApp'),
  props: {
    items: null
  }
})

export default filterApp
