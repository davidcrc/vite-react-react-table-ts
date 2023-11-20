# Setup

```bash
npm create vite@latest vite-react-react-table-ts -- --template react-ts
```

```bash
cd vite-react-react-table-ts &&  npm install
```

# Add Tailwind

- https://tailwindcss.com/docs/guides/vite

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

```bash
npm add -D sass
```

- remove App.css and index.css

- create them.scss, and import theme.ts on main.tsx

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

#root {
  @apply h-full overflow-hidden;
}

p {
  margin: 0;
}
```

<!--  -->

# Add Alias

- update vite.config.ts

```bash
npm i path
```

```ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.url, "./src/"),

      routes: `${path.resolve(import.meta.url, "./src/routes/")}`,

      services: `${path.resolve(import.meta.url, "./src/services/")}`,
    },
  },
});
```

- update tsconfig.json

```json
{
  "compilerOptions": {
    // ...
    "paths": {
      "@/*": ["./src/*", "./dist/*"],
      "routes/*": ["./src/routes/*"],
      "services/*": ["./src/services/*"]
    }
  }
}
```

<!--  -->

# Sort imports

```bash
npm install --save-dev eslint-plugin-simple-import-sort
```

```js
{
  "plugins": ["simple-import-sort"],
  "rules": {
    "simple-import-sort/imports": "error"
  }
}
```

<!--  -->

# React table

```bash
npm install @tanstack/react-table
```

# Faker

```bash
npm i @faker-js/faker
```

# Xsls

```bash
npm i xlsx
```

```bash
npm i --save-dev @types/xlsx
```
