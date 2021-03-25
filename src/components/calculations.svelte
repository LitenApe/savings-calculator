<script>
  import { fvWithReturn } from "../utils/future-value";
  import { startDeposit, monthlyDeposit, interest } from "../store";
  import { derived } from "svelte/store";

  let progress = derived(
    [startDeposit, monthlyDeposit, interest],
    ([$startDeposit, $monthlyDeposit]) => {
      const progress = [];
      for (var i = 0; i < 41; i++) {
        progress.push(
          fvWithReturn($interest / 100, i, $monthlyDeposit, $startDeposit)
        );
      }
      return progress;
    }
  );
</script>

<section>
  <h2>Calculations</h2>

  <table>
    <thead>
      <th>Time (year)</th>
      <th>Value</th>
      <th>Return</th>
    </thead>
    <tbody>
      <tr>
        <td>10</td>
        <td>{$progress[10].value}</td>
        <td>{$progress[10].return}</td>
      </tr>

      <tr>
        <td>20</td>
        <td>{$progress[20].value}</td>
        <td>{$progress[20].return}</td>
      </tr>

      <tr>
        <td>30</td>
        <td>{$progress[30].value}</td>
        <td>{$progress[30].return}</td>
      </tr>

      <tr>
        <td>40</td>
        <td>{$progress[40].value}</td>
        <td>{$progress[40].return}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <th>Time (year)</th>
      <th>Value</th>
      <th>Return</th>
    </thead>
    <tbody>
      {#each $progress as periode, i}
        <tr>
          <td>{i}</td>
          <td>{periode.value}</td>
          <td>{periode.return}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
