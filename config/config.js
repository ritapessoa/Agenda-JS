const URL =
  "https://wms-backend-g8-380719778871.southamerica-east1.run.app/api/Client";

fetch(url)
  .then((response) => response.json())
  .then((nome) => console.log(nome));
