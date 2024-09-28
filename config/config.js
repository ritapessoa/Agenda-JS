const url =
  "https://wms-backend-g8-380719778871.southamerica-east1.run.app/api/Client";

function fetchClientes(url) {
  fetch(url)
    .then((response) => response.json())
    .then((clientes) => {
      clientes.forEach((cliente, index) => {
        createCliente(cliente, index);
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
