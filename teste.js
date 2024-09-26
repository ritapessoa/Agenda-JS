const url =
  "https://wms-backend-g8-380719778871.southamerica-east1.run.app/api/Client";

async function fetchClientes(url) {
  const clientesResponse = await fetch(url);
  const clientesJSON = await clientesResponse.json();

  clientesJSON.forEach((clientes) => {
    createCliente(clientes);
  });
}
function createCliente(clientes) {}
const div = document.createElement("div");
div.classList.add("numero-cliente");
div.innerHTML = `${clientes.nome}`;

console.log(div);

fetchClientes(
  "https://wms-backend-g8-380719778871.southamerica-east1.run.app/api/Client"
);
