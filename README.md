# JSON Server

**Criação de usuário**
POST /users

{
"name": "Marcelo",
"email": "marcelo@email.com.br",
"password": "1234",
"age": 29
}

**Listar todos os usuários**
GET /users
SEM CORPO NA REQUISIÇÃO

**Retornar os dados de um usuário**
GET /users/:id
SEM CORPO NA REQUISIÇÃO

**Atualiza os dados de um usuário**
PATCH /users/:id

{
"password": "123"
}

**Deletar um usuário do banco**
DELETE /users/:id
SEM CORPO NA REQUISIÇÃO
