# SITE DESPESAS REPÚLICA

### Tecnologias utilizadas
- JavaScript
- HTML5
- CSS3

### Dependências
* [Node.js](https://nodejs.org/en/download/)

### Inicializar projeto
Obs: por a aplicação realizar manipulação em arquivos, é necessário executar o projeto em um servidor local ou remoto para funcionar adequadamente. 

Para executa-lo localmente basta seguir os seguintes comandos no terminal

1. Navegue até a pasta onde se encontra seu projeto:

    ```JS
    cd c:\Users\MyUser\site-despesas-republica\
    ```

2. Baixe as dependências do projeto via `npm`:

    ```JS
        npm install
    ``` 

    Obs: Para executar o comando acima é necessário ter o `Node.js` instalado na máquina

3. Após isso, inicialize o servidor local executando o seguinte comando:

    ```JS
        npm run dev
    ```

    Após executar o comando, será exibido algo semelhante a isto no terminal:

    ```JS
        <i> [webpack-dev-server] Project is running at:
        <i> [webpack-dev-server] Loopback: http://localhost:8080/
        <i> [webpack-dev-server] On Your Network (IPv4): http://10.0.0.102:8080/
    ```

4. Basta então acessar seu navegador no endereço http://localhost:8080/ e pronto.


### Telas da aplicação
- Cadastro de estudantes
- Cadastro de despesas
- Baixar estudantes (download do arquivo em .txt)
- Baixar despesas (download do arquivo em .txt)
- Relatório do mês
