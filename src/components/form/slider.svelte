<script>
  export let label;
  export let value;
</script>

<label>
  {label} <span aria-hidden="true">({value})</span>
  <input type="range" bind:value />
</label>
