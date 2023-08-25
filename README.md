# Documentação - Your Contact Book API

## Rodar API Localmente

-   É importante lembrar que para rodar a API localmente você precisa ter o Node instalado na sua máquina, você consegue baixá-lo pelo site oficial: https://nodejs.org.

1.  Clone o repositório:

        git clone git@github.com:isgabriel/your-contact-book_backend.git

2.  Entre no diretório do projeto:

        cd your-contact-book_backend

3.  Instale as dependências do projeto utilizando o npm:

        npm install
    
5.  Rode as migrations para criar as tabelas no banco de dados:

        npm typeorm migration:run -c src/data-source.ts
    
6.  Inicie a API localmente:

        npm run dev

7.  Sua API já está rodando localmente na porta 3000.

        http://localhost:3000

8.  Acesse o front-end do projeto:

    <a href="https://github.com/isgabriel/your-contact-book_frontend">Acessar repositório front-end</a>

    <a href="https://your-contact-book.vercel.app">Acessar deploy front-end</a>

# Rotas

## Registro/Cadastro de Usuário

Endpoint: `POST /users/register`

### Requisição:

        {
            "name": "user",
            "email": "user@mail.com",
            "password": "Password123",
            "phone": "+55 00 000000000"
        }

### Resposta:

        {
            "id": 1,
            "name": "user",
            "email": "user@mail.com",
            "phone": "+55 00 000000000",
            "registerDate": "2023-07-26"
        }

## Logar Usuário

Endpoint: `POST /users/login`

### Requisição

        {
            "email": "user@mail.com",
            "password": "Password123"
        }

### Resposta:

        {
            "token": "eJsQc5.s*naqEhNj"
        }

## Receber Usuário Logado

Endpoint: `GET /users/dashboard/:id`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Resposta

        {
            "id": 1,
            "name": "user",
            "email": "user@mail.com",
            "password": "$2a$10$0.Bv6GXZrkzqxZrVtSITp.jgVTA8Xk9kjSHWWJE0pEdgk0v.Zr0L6",
            "phone": "+55 00 000000000",
            "registerDate": "2023-07-26",
            "contacts": []
        }

## Obter Usuários

Endpoint: `GET /users`

### Resposta

        [
            {
                "id": 1,
                "name": "user",
                "email": "user@mail.com",
                "phone": "+55 00 000000000",
                "registerDate": "2023-07-26"
            },
            {
                "id": 2,
                "name": "user2",
                "email": "user2@mail.com",
                "phone": "+55 22 222222222",
                "registerDate": "2023-07-26"
            },
            {
                "id": 3,
                "name": "user3",
                "email": "user3@mail.com",
                "phone": "+55 33 333333333",
                "registerDate": "2023-07-26"
            }

]

## Obter Usuário por ID

Endpoint: `GET /users/:id`

### Parâmetros

-   `id` (number) - ID do usuário

### Resposta

        {
            "id": 1,
            "name": "user",
            "email": "user@mail.com",
            "phone": "+55 00 000000000",
            "registerDate": "2023-07-26"
        }

## Deletar Usuário por ID

Endpoint: `DELETE /users/:id`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Resposta

-   `204 No Content`

## Atualizar Usuário

Endpoint `PATCH /users/:id`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Requisição

        {
            "name": "Updated User",
            "email": "updatedUser@mail.com",
            "phone": "+55 11 111111111"
        }

### Resposta

        {
            "id": 1,
            "name": "Updated User",
            "email": "updatedUser@mail.com",
            "phone": "+55 11 111111111",
            "registerDate": "2023-07-26"
        }

## Obter Contatos do Usuário

Endpoint: `GET /users/:id/contacts`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Responsta

        [
            {
                "id": 2,
                "name": "user2",
                "email": "user2@mail.com",
                "phone": "+55 22 222222222",
                "registerDate": "2023-07-26"
            },
            {
                "id": 3,
                "name": "user3",
                "email": "user3@mail.com",
                "phone": "+55 33 333333333",
                "registerDate": "2023-07-26"
            }
        ]

## Criar/Cadastro de Contato

Endpoint: `POST /contacts`

### Parâmetros

-   `Token` (string) - Token de autenticação

### Requisição

        {
            "name":"contact ",
            "email":"contact@mail.com",
            "phone":"+55 00 000000000"
        }

### Resposta

        {
            "id": 1,
            "name": "contact ",
            "email":"contact@mail.com",
            "phone":"+55 00 000000000",
            "registerDate": "2023-07-27"
            "user": {
            	"id": 1,
            	"name": "user",
            	"email": "user@mail.com",
            	"phone": "+55 00 000000000",
            	"registerDate": "2023-07-26"
            }
        }

## Obter Contato Específico

Endpoint: `GET /contacts/:id`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Resposta

        {
            "id": 1,
            "name": "contact ",
            "email":"contact@mail.com",
            "phone":"+55 00 000000000",
            "registerDate": "2023-07-27"
            "user": {
            	"id": 1,
            	"name": "user",
            	"email": "user@mail.com",
            	"phone": "+55 00 000000000",
            	"registerDate": "2023-07-26"
            }
        }

## Atualizar Contato Específico

Endpoint: `PATCH /contacts/:id`

### Requisição

        {
            "name": "updated contact",
            "email": "updatedmail@mail.com",
            "phone": "+55 00 222222222"
        }

### Resposta

        {
            "id": 1,
            "name": "updated contact",
            "email": "updatedmail@mail.com",
            "phone": "+55 00 222222222"
            "registerDate": "2023-07-27"
            "user": {
            	"id": 1,
            	"name": "user",
            	"email": "user@mail.com",
            	"phone": "+55 00 000000000",
            	"registerDate": "2023-07-26"
            }
        }

## Deletar Contato

Endpoint: `DELETE /contacts/:id`

### Parâmetros

-   `id` (number) - ID do usuário logado
-   `Token` (string) - Token de autenticação

### Resposta

-   `204 No Content`
