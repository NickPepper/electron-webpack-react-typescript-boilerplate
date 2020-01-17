# electron-webpack-react-typescript-boilerplate
> Шаблон для быстрого старта проекта с использованием ['Electron'](https://electronjs.org/), ['React'](https://reactjs.org/), ['TypeScript'](https://www.typescriptlang.org/index.html), ['Spectron'](https://electronjs.org/spectron), ['Mocha'](https://mochajs.org/), ['Visual Studio Code'](https://code.visualstudio.com/) и [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Спасибо чудесным силам небесным...


## Прежде всего
После клонирования данного репо:

```bash
% yarn update
% yarn dev
```

HINT: Когда TSLint'у на ровном месте начинает казаться, что он окружён врагами, лечится так: в Visual Studio Code (это, кстати, единственная нормальная вещь среди всех упомянутых выше пакетов) жмём `Command+Shift+P` и вводим `TypeScript: Restart TS Server`.


### Команды yarn

```bash
# запуск в девелоперском режиме
% yarn dev

# компилируем сырцы webpack'ом
% yarn compile

# собираем релизную сборку (для Маков - под Маком, для Линухов - под Линухом, для Виндищ - из-под Виндищи)
% yarn dist

# компилирует и создаёт неупакованную сборку electron-builder'ом
% yarn dist:dir

# удаляет папку dist/
% yarn cleanup

# собираем новый дистрибутив, после чего прогоняяем по нему все тесты
% yarn test
```
