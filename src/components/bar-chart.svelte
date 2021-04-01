<script>
  export let data;
</script>

<div>
  <table>
    <thead>
      <th>Time (year)</th>
      <th>Deposit</th>
      <th>Return</th>
      <th>Value</th>
    </thead>
    <tbody>
      {#each data as periode, i}
        <tr>
          <th scope="row">{i}</th>
          <td>{periode.deposit}</td>
          <td>{periode.return}</td>
          <td>{periode.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
