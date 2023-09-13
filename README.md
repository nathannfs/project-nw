# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## PNPM - cria um link simbólico, instalando uma única vez e cria referências para esse lugar

#### Criar um novo projeto com Vite

```
pnpm create vite
```

### Radix - é uma biblioteca que traz vários componentes em aplicações web, mas sem a estilização, apenas o funcionamento

### Shadcn/ui - é uma biblioteca que são vários componentes implementados usando tailwind, ele são todos os componentes do Radix e mais alguns, mas com style guide seguindo um estilo padrão

### Instalar e configurar o Shadcn/ui usando Vite

#### Adicionar Tailwind e configuração

```
pnpm add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

```

#### Editar o tsconfig.json

```
"baseUrl": ".",
"paths": {
  "@/*": ["./src/*"]
}

```

#### Para importar paths sem erros

```

npm i -D @types/node

 resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
```

#### Configuração do components.json - são feitas essas perguntas para configurar

```
// Instalação de componentes
pnpm dlx shadcn-ui@latest init

Would you like to use TypeScript (recommended)? no / yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › › src/index.css
Do you want to use CSS variables for colors? › no / yes
Where is your tailwind.config.js located? › tailwind.config.js
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
Are you using React Server Components? › no / yes (no)
```

#### Utilização de componentes

```
pnpm dlx shadcn-ui@latest add button

```
