# electron-webpack-react-typescript-boilerplate
> Шаблон для быстрого старта проекта с использованием ['Electron'](https://electronjs.org/), ['React'](https://reactjs.org/), ['TypeScript'](https://www.typescriptlang.org/index.html), ['Spectron'](https://electronjs.org/spectron), ['Mocha'](https://mochajs.org/), ['Visual Studio Code'](https://code.visualstudio.com/) и [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Спасибо чудесным силам небесным...


## Прежде всего
После клонирования данного репо:

```bash
% yarn update
% yarn dev
```

Когда TSLint'у на ровном месте начинает казаться, что он окружён врагами, лечится так: в Visual Studio Code (это, кстати, единственная нормальная вещь среди всех упомянутых выше пакетов) жмём `Command+Shift+P` и вводим `TypeScript: Restart TS Server`.


### Команды yarn

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir

# remove the dist/ folder
yarn cleanup

# build a new dist and run all the tests after that
yarn test
```
