"use strict";
// Abre e fecha o Modal
const openModal = () => {
  document.getElementById("modal").classList.add("active");
};

const closeModal = () => {
  clearFields();
  document.getElementById("modal").classList.remove("active");
};

// função Get e Set localStorage
const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("dados-Contato")) ?? [];
const setLocalStorage = (dadosContato) =>
  localStorage.setItem("dados-Contato", JSON.stringify(dadosContato));

//Create
const createContato = (contato) => {
  const dadosContato = getLocalStorage();
  dadosContato.push(contato);
  setLocalStorage(dadosContato);
};
//Read
const readContato = () => getLocalStorage();

//Update
const updateContato = (index, contato) => {
  const dadosContato = readContato();
  dadosContato[index] = contato;
  setLocalStorage(dadosContato);
};
// Delete
const deleteContato = (index) => {
  const dadosContato = readContato();
  dadosContato.splice(index, 1);
  setLocalStorage(dadosContato);
};
// Valida campos
const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

//Limpa os inputs
const clearFields = () => {
  const fields = document.querySelectorAll(".modal-field");
  fields.forEach((field) => (field.value = ""));
};

//Interação com o usuário
const saveContato = () => {
  if (isValidFields()) {
    const contato = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      celular: document.getElementById("celular").value,
    };
    //Envia para o Local Storage
    const index = document.getElementById("nome").dataset.index;
    if (index == "new") {
      createContato(contato);
      updateTable();
      closeModal();
    } else {
      updateContato(index, contato); //edita
      updateTable();
      closeModal();
    }
  }
};

//Cria uma linha para cada contato
const createRow = (contato, index) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
          <td>${contato.nome}</td>
          <td>${contato.email}</td>
          <td>${contato.celular}</td>
          <td>
            <button type="button" class="button green editar" id="editar-${index}"></button>
            <button type="button" class="button red excluir"  id="excluir-${index}"></button>
          </td> 
          `;
  // inseri no html
  document.querySelector("#contacts-table>tbody").appendChild(newRow);
};
//Limpar as linhas
const clearTable = () => {
  const rows = document.querySelectorAll("#contacts-table>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
};

//Atualiza a tabela
const updateTable = () => {
  const dadosContato = readContato();
  clearTable();
  dadosContato.forEach(createRow);
};

//Preenche os campos
const fillFields = (contato) => {
  document.getElementById("nome").value = contato.nome;
  document.getElementById("email").value = contato.email;
  document.getElementById("celular").value = contato.celular;
  document.getElementById("nome").dataset.index = contato.index; //editar
};

// Editar contato
const editContato = (index) => {
  const contato = readContato()[index];
  contato.index = index;
  fillFields(contato);
  document.querySelector(
    ".modal-header>h2"
  ).textContent = `Editando ${contato.nome}`;
  openModal();
};

const editDelete = (event) => {
  if (event.target.type == "button") {
    const [action, index] = event.target.id.split("-");

    if (action == "editar") {
      editContato(index);
    } else {
      const contato = readContato()[index];
      const response = confirm(
        `Deseja realmente excluir o contato ${contato.nome}`
      );
      if (response) {
        deleteContato(index);
        updateTable();
      }
    }
  }
};

updateTable();

// Eventos
document
  .getElementById("cadastrarContato")
  .addEventListener("click", openModal);

document.getElementById("modalClose").addEventListener("click", closeModal);

document.getElementById("salvar").addEventListener("click", saveContato);

document
  .querySelector("#contacts-table>tbody")
  .addEventListener("click", editDelete);

document.getElementById("cancelar").addEventListener("click", closeModal);
