# Conversor de Moedas em React

Um aplicativo web simples para conversão de moedas, desenvolvido com React.js e utilizando a [ExchangeRate-API](https://www.exchangerate-api.com/).

## Funcionalidades

* **Seleção de Moedas:** Permite ao usuário escolher as moedas de origem e destino para a conversão.
* **Validação de Entrada:** Verifica se o valor inserido para conversão é válido e maior que zero.
* **Integração com API:** Busca cotações de moedas em tempo real através da ExchangeRate-API.
* **Exibição Instantânea:** Mostra o resultado da conversão de forma rápida e clara.
* **Tratamento de Erros:** Apresenta mensagens informativas em caso de problemas na conversão ou na comunicação com a API.

## Tecnologias Utilizadas

* **React.js:** Biblioteca JavaScript para construção de interfaces de usuário.
* **Vite:** Ferramenta de build rápida para projetos web.
* **JavaScript (ES6+):** Linguagem de programação principal.
* **CSS:** Para estilização da interface.
* **ExchangeRate-API:** API externa para obter as taxas de câmbio.

## Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado:

* [**Node.js**](https://nodejs.org/): Inclui o npm (Node Package Manager).

## Como Usar

Siga os passos abaixo para clonar e executar o projeto:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/jeremias-souza-dev/conversor-moedas-react.git](https://github.com/jeremias-souza-dev/conversor-moedas-react.git)
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd conversor-moedas-react
    ```
3.  **Instale as dependências:**
    ```bash
    npm install
    ```
4.  **Execute o aplicativo em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```
    Isso iniciará o servidor de desenvolvimento e a aplicação estará acessível no seu navegador (geralmente em `http://localhost:5173/`).

## Configuração da API

Este projeto utiliza a [ExchangeRate-API](https://www.exchangerate-api.com/) para obter as taxas de câmbio. Para que a aplicação funcione corretamente, você precisará de uma chave de API:

1.  **Crie uma conta:** Acesse [https://app.exchangerate-api.com/](https://app.exchangerate-api.com/) e crie sua conta (o plano gratuito é suficiente para este projeto).
2.  **Confirme seu e-mail:** Não se esqueça de confirmar seu endereço de e-mail na sua dashboard da API.
3.  **Obtenha sua chave:** Após a confirmação, você encontrará sua `apiKey` na dashboard.
4.  **Atualize o código:** Insira sua chave de API no arquivo `src/App.jsx`, na linha onde `apiKey` é definida (atualmente `"96567d09a133bcaeeacfbda8"`).

## Captura de Tela

Veja uma captura de tela do aplicativo em funcionamento:

![Captura de Tela](Captura%20de%20tela%202025-08-14%20065326.png)
