<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  export let data;

  let xAxisContainer;
  let yAxisContainer;

  export function getTickValues(values, range, pixelsPerLabel) {
    const numberOfTicks = Math.floor(range / pixelsPerLabel);
    const periodOfValuePicking = Math.ceil(values.length / numberOfTicks);

    return values.reduce((acc, label, index) => {
      if (index % periodOfValuePicking === 0) {
        acc.push(label);
      }
      return acc;
    }, []);
  }

  onMount(() => {
    const xAxisContainer = d3.select("#x-axis-container");
    const yAxisContainer = d3.select("#y-axis-container");

    const margin = 20;
    const width = 600 - margin * 2;
    const height = 400 - margin * 2;

    const x = d3
      .scaleBand()
      .padding(0.1)
      .range([margin, width - margin])
      .domain(data.map((_, i) => i));

    const y = d3
      .scaleLinear()
      .range(height - margin, margin)
      .domain(d3.extent(data, (periode) => periode.value));

    const xAxis = d3.axisBottom(x).tickValues(
      getTickValues(
        data.map((_, i) => i),
        width - margin * 2,
        25
      )
    );
    const yAxis = d3.axisLeft(y);

    xAxisContainer
      .call(xAxis)
      .attr("transform", `translate(0, ${height - margin})`);

    yAxisContainer.call(yAxis).attr("transform", `translate(${margin}, 0)`);
  });
</script>

<div>
  <svg width="600" height="400">
    <g id="data-container">
      {#each data as periode, i}
        <rect
          x={i}
          y={periode.value}
          width="10"
          height={periode.value}
          fill="#123fff"
        />
      {/each}
    </g>
    <g id="x-axis-container" />
    <g id="y-axis-container" />
  </svg>

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
