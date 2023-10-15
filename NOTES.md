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

