# Agenda em JavaScript
Este projeto é uma aplicação de agenda simples que permite criar, ler, atualizar e excluir entradas de contatos. Todos os dados são armazenados localmente no navegador usando o Local Storage.

## Requisitos
Navegador moderno com suporte a Local Storage.

## Instalação 
Clone este repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
Abra o arquivo index.html no seu navegador para visualizar a aplicação.

## Uso

* Criar
Para adicionar um novo contato:

Preencha o formulário com os detalhes do contato (nome, e-mail e celular).
Clique no botão "Salvar" para salvar o contato. O contato será armazenado no Local Storage e exibido na lista de contatos.

* Ler
A lista de contatos será exibida automaticamente na página principal. Os contatos são lidos diretamente do Local Storage.

* Atualizar
Para atualizar um contato existente:

Encontre o contato que deseja atualizar na lista de contatos.
Clique no botão verde ao lado do contato.
Faça as alterações necessárias e clique em "Salvar". As mudanças serão atualizadas no Local Storage.

* Excluir
Para excluir um contato:

Encontre o contato que deseja excluir na lista de contatos.
Clique no botão vermelho ao lado do contato. O contato será removido do Local Storage e da lista de contatos.

Funcionamento Interno 

Local Storage: Os dados da agenda são armazenados no Local Storage do navegador, que permite persistir dados entre sessões.

CRUD Operations:

Create: Adiciona novos contatos ao Local Storage.

Read: Recupera e exibe contatos do Local Storage.

Update: Modifica contatos existentes e atualiza o Local Storage.

Delete: Remove contatos do Local Storage.
