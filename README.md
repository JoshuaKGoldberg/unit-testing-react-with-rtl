# Unit Testing React with RTL

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

```shell
git clone https://github.com/JoshuaKGoldberg/unit-testing-react-with-rtl
cd unit-testing-react-with-rtl
npm i
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> - Tip: use `npm test --watch` to start the test runner in watch mode
> - Tip: use `npm test filename` to only tests files matching that _`filename`_

Tests are written using:

- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) _("RTL")_

## Tests We'll Cover

1. [`src/App.test.js`](./src/App.test.js): Setting up RTL in a Jest test
2. [`src/components/FavoriteStar.test.js`](./src/components/FavoriteStar.test.js): Using `get*` queries to select elements
3. [`src/components/FavoriteStarDelayed.test.js`](./src/components/FavoriteStarDelayed.test.js): Using `query*` and `find*` queries to select elements
4. [`src/components/Select.test.js`](./src/components/Select.test.js): Using mock functions and simulating user events
5. [`src/hooks/useLocalStorageItem.test.js`](./src/hooks/useLocalStorageItem.test.js): Mocking out React hooks
