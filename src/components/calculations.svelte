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

  <table id="overview">
    <caption>Investment growth the next 40 years.</caption>
    <thead>
      <th>Time</th>
      <th>Return</th>
      <th>Value</th>
    </thead>
    <tbody>
      <tr>
        <td>10 years</td>
        <td>{$progress[10].return}</td>
        <td>{$progress[10].value}</td>
      </tr>

      <tr>
        <td>20 years</td>
        <td>{$progress[20].return}</td>
        <td>{$progress[20].value}</td>
      </tr>

      <tr>
        <td>30 years</td>
        <td>{$progress[30].return}</td>
        <td>{$progress[30].value}</td>
      </tr>

      <tr>
        <td>40 years</td>
        <td>{$progress[40].return}</td>
        <td>{$progress[40].value}</td>
      </tr>
    </tbody>
  </table>

  <table>
    <thead>
      <th>Time (year)</th>
      <th>Deposit</th>
      <th>Return</th>
      <th>Value</th>
    </thead>
    <tbody>
      {#each $progress as periode, i}
        <tr>
          <th scope="row">{i}</th>
          <td>{periode.deposit}</td>
          <td>{periode.return}</td>
          <td>{periode.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  section {
    width: 100%;
  }

  #overview {
    display: block;
    width: 100%;
    padding: 0 1rem;

    max-width: 500px;
    margin: 0 auto;
  }

  #overview > caption {
    display: block;
  }

  #overview > thead > th {
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute;
  }

  #overview > tbody {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #overview > tbody > tr {
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;

    padding: 0.25rem 1rem;
  }

  #overview > tbody > tr > td:nth-child(2) {
    color: green;
  }

  #overview > tbody > tr > td:last-child {
    font-weight: bold;
  }
</style>
