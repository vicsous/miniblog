# Miniblog

Gerando ReactApp:
### `npx create-react-app miniblog`

Instalação de Tailwind:
### `npm install -D tailwindcss postcss autoprefixer`
### `npx tailwindcss init -p`

Criando main/tailwind.config.js
### module.exports = {
### content: [
###     "./src/**/*.{js,jsx,ts,tsx}",
###   ],
###   theme: {
###     extend: {},
###   },
###   plugins: [],
### }

Adicionar aos arquivos css:
@tailwind base;
@tailwind components;
@tailwind utilities;

# Using npm
### npm install @tailwindcss/forms

Add require('@tailwindcss/forms') to main/tailwind.config.js plugins