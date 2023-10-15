# Estudos relacionados ao Bun + Azure

## Instalação do Bun.js

```bash
curl -fsSL https://bun.sh/install | bash
```

Aqui estou instalando o Bun.js usando WSL2.

> averiguar se instala no Windows. (pesquisar sobre) > parece q não tem como instalar diretamente no Windows, somente usando o WSL.
> Mais informações **[HERE](https://bun.sh/docs/installation#windows)**

## Criando um projeto

Crie uma pasta para o projeto. Pode chamar de `quickstart` ou qualquer outro nome. E, logo em seguida, digite o comando abaixo:

```bash
bun init
```

Ao digitar esse comando, criará alguns arquivos default do Bun.js, conforme a imagem abaixo:

[![bun-01.png](https://i.postimg.cc/WbSVp3XR/bun-01.png)](https://postimg.cc/0b6Fc9TZ)

[![bun-02.png](https://i.postimg.cc/3xSvPm6d/bun-02.png)](https://postimg.cc/3kGNG43T)

> observação: criar um template AZD-CLI para o Bun.js e também para o .devcontainer (conversar com a Dina Berry e Pamela Fox sobre)

No ato que você digita o comando acima, o Bun.js criará os seguintes arquivos:

- **.gitignore**: arquivo para ignorar arquivos e pastas no Git.

- **bun.lockb**: esse arquivo é o lockfile do Bun. Pois é através dele que, encontraremos os binários dos pacotes instalados no projeto. O conceito desse lock é o que o torna mais rápido e diferente do famoso `package-lock.json` file. Mais informações **[AQUI](https://bun.sh/docs/install/lockfile)**

- **index.ts**: arquivo principal do projeto. É nele que você escreverá o código do seu projeto.

- **package.json**: arquivo de configuração do projeto. Nele você encontrará as dependências do projeto, scripts, etc.

- **tsconfig.json**: arquivo de configuração do TypeScript. Nele você encontrará as configurações do TypeScript.

## Criando um Hello World diferente com Bun.js

Vamos criar um Hello World diferente com Bun.js. Dentro do arquivo `indext.ts` na raiz do projeto, inclua o seguinte bloco de código:
```ts
/**
 * file: index.ts
 * description: file responsible for run Bun.js application
 * date: 10/15/2023
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

const server = Bun.serve({
  port: 3000,
  fetch(_req) {
    return new Response('Fala, meus consagrados(as)!');
  },
});

console.log(`Application running at http://localhost:${server.port}...`);
```

Agora para executar o projeto, digite o comando abaixo:

```bash
bun index.ts
```

Mas, em vez de executar a aplicação diretamente no arquivo `index.ts`, podemos fazer o seguinte, abre o arquivo `package.json` e inclua o seguinte bloco de código:

```json
"scripts": {
  "start": "bun index.ts"
}
```

Agora, para executar o projeto, basta digitar o seguinte comando:

```bash
bun start
```

Abre o browser e digite o seguinte endereço: `http://localhost:3000` e veja o resultado!
