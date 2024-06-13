<H1 align ="center" > DSM-G06-PI3-2024-1 - Robotics Atendimentos 🤖  </h1>

## Descrição do Projeto 📝
Este repositório contém o projeto desenvolvido pelo GRUPO 06 para o Projeto Interdisciplinar do 3º semestre do curso de Desenvolvimento de Software Multiplataforma (DSM) em 2024/1. O projeto "Robotics Atendimentos" visa solucionar o problema da ausência de registros de atendimentos de uma equipe de suporte técnico, permitindo a otimização dos processos e a melhoria da gestão.


## Equipe 👥
* **- [Dimerson Vicente Ferreira](https://www.linkedin.com/in/dimerson-ferreira/): Responsável pelo design do sistema e criação do banco de dados.**
* **- [Eduardo Vilas Boas Freitas](https://www.linkedin.com/in/eduardo-vilas-boas-062942204/): Desenvolvedor do frontend e desing do sistema.**
* **- [Rafael Verissimo da Silva](https://www.linkedin.com/in/rafael-ver%C3%ADssimo-da-silva-94a674227/): Desenvolvedor do backend, Product Owner (PO) e documentação do projeto.**


## Tecnologias Utilizadas 🚀
* **Frontend: Next.js (React Framework) ⚛️**
* **Backend: Node.js com Express.js 🖥️**
* **Banco de Dados: MongoDB (NoSQL Database) 🍃**


## Funcionalidades Principais ✨
* **Registro de Atendimentos e Chamados:** Permite o registro eletrônico de todos os atendimentos e chamados realizados pela equipe de TI.
* **Categorização de Problemas:** Classifica os tickets por categorias predefinidas (Hardware, Software, Rede, etc.).
* **Acompanhamento do Status dos Tickets:** Monitora o progresso dos tickets, desde a abertura até o fechamento.


## Documentação da API 📖
A documentação completa da API REST utilizada neste projeto, incluindo exemplos de requisições e respostas, pode ser encontrada em:
[DOCUMENTAÇÃO-API-GP-06](https://documenter.getpostman.com/view/34861590/2sA3XMhN9m)


## Como Executar o Projeto local ▶️

**Clonar o Repositório:**
```
Bash

git clone https://github.com/FatecFranca/DSM-G06-PI3-2024-1.git
```

**Instalar as Dependências (Frontend e Backend):**
```
Bash
cd client
npm install
cd ../server
npm install
```

## Configurar o MongoDB:

* Certifique-se de ter o MongoDB instalado e em execução.
* Crie um banco de dados chamado robotics-atendimentos.
* Crie um arquivo **.env** na raiz do diretório do backend e adicione a seguinte linha:

```
DATABASE_URL=mongodb://localhost:27017/robotics-atendimentos
//(Substitua localhost e 27017 pelos valores corretos se o seu MongoDB estiver em outro host ou porta)
```

## Iniciar o servidor 🗄️
```
cd server/
npm start
```

## Iniciar o aplicativo 📱
```
cd ../client
npm run dev
```

## Telas 📸
O frontend foi desenvolvido utilizando o Next.js, um framework React que oferece recursos como roteamento, renderização do lado do servidor (SSR) e otimizações de performance. A interface é totalmente responsiva, adaptando-se a diferentes tamanhos de tela, incluindo dispositivos móveis.

* **Tela de login**
  * Desktop
 ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/24175202-a2de-44e2-9fb5-84e345389a03) 
  * Mobile

    ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/13e96ace-a7b4-4c97-81fe-78bd02653b99)


* **Tela de tickets**
  * Desktop
 ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/d43d000a-e5d9-471d-b666-62e331bf62bf)
  * Mobile
  
    ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/fde72c05-65e6-43bb-a211-dc4d3391e867)


* **Tela de abertura de ticket**
  * Desktop
 ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/b7961278-9c7c-43c6-b285-04da96bc4cbf)
  * Mobile

    ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/b704af02-28ba-44fe-b347-199299203d0c)


* **Tela de edição de ticket**
  * Desktop
 ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/e1c44a0b-feeb-4b91-a775-5c8c3ad1c90b)
  * Mobile

    ![image](https://github.com/FatecFranca/DSM-G06-PI3-2024-1/assets/111711287/7f81a7a2-0f55-4a76-a816-f16aa6e041b5)




## Contribuições 🤝
Contribuições são bem-vindas!

## Licença 📄

**Este projeto está licenciado sob a [Licença MIT].**
