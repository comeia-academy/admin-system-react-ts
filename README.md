# admin-system-react-academy

## Descrição

Este é um modelo base para o Sistema Administrativo utilizado no módulo de React da turma do Comeia Academy 2023.

## Configuração

Para configurar este projeto localmente, siga estas etapas:

1. Clone o repositório: `git clone https://github.com/ComeiaLab/admin-system-react-academy.git`
2. Instale as dependências: `npm install`
3. Crie os arquivos `.env.development.local` e `.env.production.local` baseado nos arquivos `.env.development.example` e `.env.production.example`, e preencha as variáveis de ambiente necessárias.
4. Execute o projeto: `npm run dev`

## Scripts

Este projeto utiliza npm como gerenciador de pacotes e inclui os seguintes scripts principais:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Constrói o projeto para produção.
- `npm run mock`: Inicia uma isntância do JSON Server consumindo o arquivo `/mock/db.json`.

## Estrutura do Projeto

Este projeto inclui os seguintes arquivos e diretórios principais:

- `mock`: Armazena o arquivo `db.json`, que será utilizando como mock pelo json-server
- `src`: Armazena todo o código da aplicação
- `.env.development.example`: Arquivo de exemplo para configurar variáveis de ambiente para desenvolvimento
- `.env.production.example`: Arquivo de exemplo para configurar variáveis de ambiente para produção
- `index.html`: Arquivo HTML principal
- `package-lock.json`: Contém versões exatas das dependências do npm
- `package.json`: Lista as dependências do npm
- `tsconfig.json`: Opções de configuração para TypeScript
- `vercel.json`: Configura as rotas para deploy na Vercel
- `vite.config.ts`: Opções de configuração do Vite

## Sobre o Vite

Este projeto utiliza [Vite](https://vitejs.dev/) como ferramenta de build. Vite é uma ferramenta de build moderna criada por Evan You, o criador do Vue.js. Ela oferece um ambiente de desenvolvimento mais rápido e uma experiência de usuário melhorada em comparação com algumas outras ferramentas de build. Além disso, ela tem suporte nativo para ES Modules, o que torna o processo de desenvolvimento mais eficiente.

Vite oferece vários recursos, como:

- Servidor de desenvolvimento extremamente rápido com Hot Module Replacement (HMR)
- Otimização de build que gera um pequeno pacote de produção
- Suporte para TypeScript, CSS, LESS, Stylus, JSX, e uma variedade de outras linguagens e pré-processadores
- Suporte para módulos CSS, PostCSS e CSS pré-compilados.

Você pode configurar o comportamento do Vite editando o arquivo `vite.config.ts`. Consulte a [documentação do Vite](https://vitejs.dev/guide/) para obter mais informações sobre como trabalhar com Vite.

## Sobre o JSON Server

Este projeto utiliza [JSON Server](https://github.com/typicode/json-server) para simular uma API REST. JSON Server é uma ferramenta extremamente útil durante o desenvolvimento, pois permite que você crie rapidamente uma API REST falsa baseada em um simples arquivo JSON.

Os principais recursos do JSON Server incluem:

- Geração automática de rotas de API REST com base na estrutura do arquivo JSON
- Suporte para as operações HTTP mais comuns, como GET, POST, PUT, PATCH e DELETE
- Suporte para filtragem, classificação e paginação de dados
- Capacidade de personalizar o comportamento da API usando JavaScript

Por favor, verifique a [documentação do JSON Server](https://github.com/typicode/json-server) para obter mais informações sobre como trabalhar com esta ferramenta.

## Contribuindo

Se você deseja contribuir para este projeto, sinta-se à vontade para fazer fork do repositório, fazer suas alterações e abrir um pull request. Agradecemos todas as contribuições!

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
