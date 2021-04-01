<script>
  export let data;

  const locale = navigator.languages[0] || "nb-NO";
  const formatter = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 2,
  });
</script>

<table id="overview">
  <caption>Investment growth the next 10 years.</caption>
  <thead>
    <th>Time</th>
    <th>Return</th>
    <th>Value</th>
  </thead>
  <tbody>
    <tr>
      <td>2 years</td>
      <td>{formatter.format(data[2].return)}</td>
      <td>{formatter.format(data[2].value)}</td>
    </tr>

    <tr>
      <td>4 years</td>
      <td>{formatter.format(data[4].return)}</td>
      <td>{formatter.format(data[4].value)}</td>
    </tr>

    <tr>
      <td>5 years</td>
      <td>{formatter.format(data[5].return)}</td>
      <td>{formatter.format(data[5].value)}</td>
    </tr>

    <tr>
      <td>10 years</td>
      <td>{formatter.format(data[10].return)}</td>
      <td>{formatter.format(data[10].value)}</td>
    </tr>
  </tbody>
</table>

<style>
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
