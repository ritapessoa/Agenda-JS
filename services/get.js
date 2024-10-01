export function fetchClientes(url) {
  fetch(url)
    .then((r) => r.json())
    .then((clientes) => {
      clientes.forEach((cliente) => {
        createCliente(cliente);
        console.log(cliente);
      });
    });

  // Cria a tabbela de clientes
  function createCliente(cliente) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
          <td>${cliente.id}</td>
          <td>${cliente.name}</td>
          <td>${cliente.email}</td>
          <td>${cliente.phone1}</td>
          <td>${cliente.cnpjCpf}</td>
          `;

    document.querySelector('#contacts-table>tbody').appendChild(newRow);
  }
}
