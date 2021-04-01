<script>
  import * as d3 from "d3";
  import { onMount } from "svelte";

  export let data;

  const locale = navigator.languages[0] || "nb-NO";
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  });

  let container;
  let xAxisContainer;
  let yAxisContainer;
  let x;
  let y;

  const margin = 20;
  let width = 600 - margin * 2;
  const height = 400 - margin * 2;

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
    width = container.clientWidth - margin * 2;

    xAxisContainer = d3.select("#x-axis-container");
    yAxisContainer = d3.select("#y-axis-container");

    x = d3
      .scaleBand()
      .padding(0.1)
      .range([margin, width - margin])
      .domain(data.map((_, i) => i));

    y = d3
      .scaleLinear()
      .range([height - margin, margin])
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

<div bind:this={container}>
  <svg {width} height="400">
    <g id="data-container">
      {#if x != null}
        {#each data as _, i}
          <rect
            x={x(i)}
            y={y(i)}
            width={x.bandwidth()}
            height={y(i)}
            fill="#123fff"
          />
        {/each}
      {/if}
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
          <td>{formatter.format(periode.deposit)}</td>
          <td>{formatter.format(periode.return)}</td>
          <td>{formatter.format(periode.value)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
