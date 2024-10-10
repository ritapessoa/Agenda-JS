// URL da API
const url =
  "https://wms-backend-g8-380719778871.southamerica-east1.run.app/api/Client";

//
function fetchClientes() {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      json.forEach((cliente) => {
        createCliente(cliente);
        console.log(cliente);
      });
    });
}

// Cria a tabbela de clientes
function createCliente(cliente) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
          <td>${cliente.id}</td>
          <td>${cliente.name}</td>
          <td>${cliente.email}</td>
          <td>${cliente.phone1}</td>
          <td>${cliente.cnpjCpf}</td>
          `;

  document.querySelector("#contacts-table>tbody").appendChild(newRow);
}

// Chama a função
fetchClientes(url);
