cd stc-test

npm install

npm run dev

ТЗ:
В одной конторе наконец решили автоматизировать документооборот при помощи модного ИИ. 
Для обучения ИИ модели нужен инструмент по разметке входящих документов заранее заданными произвольными метками.
Метки нужно соотнести с текстом документа, представляющего собой простой текстовый файл с переводами строк.

Задача
Изготовить React-компонент по приложенным макетам и строго соответствующий типу:

type Label = {
    color: string
    label: string
}

type TextLabel = {
    start: integer // начало фрагмента
    end: integer // конец фрагмента
    label: string // метка
}

type TextLabelingProps = {
    labels: Label[]
    text: string
    labeling: TextLabel[]
    onChange: (TextLabel[])=>void
} 

Сценарий взаимодействия:
1. Пользователь видит панель с документом и панель с метками
2. Пользователь при помощи мыши выбирает нужную метку
3. Пользователь отмечает соотвествующие выбранной метке фрагменты документа
4. Пользователь повторяет шаги 2-3 до тех пор, пока не разметит весь длокумент

Требования:
1. Соотвествие типу
2. Соответствие макету
3. Соответствие сценарию


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
