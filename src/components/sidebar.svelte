<script>
  import Input from "./form/input.svelte";
  import { startDeposit, monthlyDeposit, interest } from "../store";
  import Slider from "./form/slider.svelte";
</script>

<section>
  <h2>Input</h2>
  <Input label="Start amount" bind:value={$startDeposit} />
  <Input label="Monthly deposit" bind:value={$monthlyDeposit} />
  <Slider label="Interest" bind:value={$interest} />
</section>

<style>
  section {
    color: white;
    background-color: darkblue;
    width: 200px;
    height: 100%;
    padding: 0.25rem 1rem;
  }
</style>
