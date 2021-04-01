<script>
  import { fvWithReturn } from "../utils/future-value";
  import { startDeposit, monthlyDeposit, interest } from "../store";
  import { derived } from "svelte/store";
  import BarChart from "./bar-chart.svelte";
  import Summary from "./summary.svelte";

  let progress = derived(
    [startDeposit, monthlyDeposit, interest],
    ([$startDeposit, $monthlyDeposit]) => {
      const progress = [];
      for (var i = 0; i < 41; i++) {
        progress.push(
          fvWithReturn($interest / 100, i, $monthlyDeposit * 12, $startDeposit)
        );
      }
      return progress;
    }
  );
</script>

<section>
  <h2>Calculations</h2>
  <Summary data={$progress} />
  <BarChart data={$progress} />
</section>

<style>
  section {
    width: 100%;
  }
</style>
