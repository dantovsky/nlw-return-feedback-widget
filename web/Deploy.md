# Deploy NLW - Impulse
https://efficient-sloth-d85.notion.site/Deploy-NLW-Impulse-83c4b94a74094deb99d1aede12bb16ee

---

Nesse documento nós faremos o deploy da aplicação Feedget, desenvolvida durante a Next Level Week Return, de maneira gratuita, utilizando o Heroku e a Vercel.

# Deploy do servidor da aplicação

Nosso primeiro passo será fazer o upload do nosso servidor, é ele que irá conectar com nosso banco de dados e salvar os dados que serão utilizados pelo nosso front-end.

## Enviando a aplicação ao Heroku

Finalmente a parte que você tanto esperava, o **deploy!** Agora que estamos 100% preparados com nossa aplicação, com banco de dados PostgreSQL e só esperando para ser colocada em produção, vamos começar acessando a página do [Heroku](https://www.heroku.com/), para isso, [clique aqui](https://www.heroku.com/).

### Preparando o deploy

Estando na página inicial do Heroku, no canto superior direito existem duas opções: Log In e Sign Up, para você logar ou se cadastrar. Basta clicar em uma delas e seguir os passos. Caso você já tenha uma conta basta logar nela. 

Feito isso, você deverá ter a seguinte tela:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4b071dc-54b9-4c7d-9a13-5ff3b8a5f07e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f4b071dc-54b9-4c7d-9a13-5ff3b8a5f07e/Untitled.png)

Apenas clique no botão "Create New App" e você terá a seguinte tela, onde eu dei um nome para o meu App (o nome deve ser único):

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdfdba41-a104-4c5b-983a-93f48ce2df18/Untitled.png)

Agora clique em `Create app` e você vai ser redirecionado para essa tela, onde vamos selecionar "Heroku Git":

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32a42cf2-f463-4b87-9491-48cb1e26f45f/Untitled.png)

### Instalando e configurando a CLI

Com o App criado, vamos agora à instalação da CLI. Para isso, basta seguir a [documentação oficial do heroku](https://devcenter.heroku.com/articles/heroku-cli). Faça somente a instalação, pois a configuração faremos a seguir de outra maneira. Portanto, deixe de seguir a documentação no passo em que ela indicar para fazer login (”heroku login").

Após feita a instalação, vamos iniciar agora a configuração do deploy via CLI. Execute os seguintes comandos no seu terminal: 

1. `heroku login`
    - Uma página será aberta para acessar sua conta do Heroku.
2. `heroku buildpacks:set https://github.com/timanovsky/subdir-heroku-buildpack`
3. `heroku buildpacks:add heroku/nodejs`
4. `heroku config:set PROJECT_PATH=server`
    - A env `PROJECT_PATH` serve para informar em qual pasta o nosso projeto está e
    deverá ser rodado.
5. `heroku git:remote -a NOME_DO_PROJETO`
    - Lembre-se de alterar no comando para o nome do seu projeto no github.
6. `git push heroku main`

## Preparando o banco de dados

Bacana, por enquanto tudo certo! Agora vamos configurar nosso banco de dados.

### Criando a instância do banco de dados

Primeiramente, basta acessar o menu no canto superior direito e depois clicar em Elements.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4a72d8fd-be94-4d1b-ba97-e024e44d1bf8/Untitled.png)

Você será levado a uma página com diversas extensões para adicionar ao seu projeto, vamos adicionar então o Heroku Postgres:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a96da77-7186-4529-b1fd-e2af6eabdc0c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a96da77-7186-4529-b1fd-e2af6eabdc0c/Untitled.png)

Feito isto, você será redirecionado para uma página onde será feita a instalação da extensão. Basta clicar em Install Heroku Postgres.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5167a95c-0581-4cfc-b9bf-cf76f811b218/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5167a95c-0581-4cfc-b9bf-cf76f811b218/Untitled.png)

Agora é só selecionar o app que você acabou de criar, clicar no botão **Submit Order Form** e pronto!

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5bb64b08-ca85-4070-bbaf-d2a139e76976/Untitled.png)

Agora na página que você foi redirecionado, clique no nome da extensão instalada:

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2d870bab-7bb8-4f47-9da2-8da1c424b9e0/Untitled.png)

### Configurando credenciais do banco de dados

Você verá que o Heroku automaticamente vai adicionar um **DATABASE_URL**. No Heroku, a env de **PORT** não é necessária adicionar, pois, essa informação é gerenciada automaticamente por eles. Já a env de **PROJECT_PATH** foi adicionada no passo de [Instalando e configurando a CLI](https://www.notion.so/Instalando-e-configurando-a-CLI-405bd1f427944418930bb0effe8860a4), ela serve para falar em qual pasta o nosso projeto está e deverá ser executado.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df7aa54f-33d6-45c0-9764-386e4e5fefc6/Untitled.png)

### Executando as migrations

Execute o comando abaixo no terminal em que estava configurando o projeto.

```tsx
heroku run npx prisma migrate deploy
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d71205f7-6efc-4812-a079-a0c168f0c814/Untitled.png)

Prontinho! Suas migrations foram executadas! Agora você poderá acessar seu servidor clicando no botão "Open app" e copiando a URL da página.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1da7974a-5973-40bd-8a04-f7cbd7f69fba/Untitled.png)