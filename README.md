# Notes

This project was created in about 12 hours

The main idea was to create a scalable app with a simple architecture and good coding practices

Some features:

- I use scss (sass) and BEM for styling, centralizing main styles, and using local files for each component.
- I use a simple store (Context + useReducer) for better use of state updates avoiding prop drilling.
- I use a basic implementation of Typescript for each component and the store.
- I tested all functions (unit and integration tests) using React Testing Library.
- I tried to give a "gaming" look on the UI, adapted the layout for iPads (landscape)
- Bonuses and Scores are flexible, added to each "item"

If more time:

- Better use of Typescript
- Adapt for mobile views
- Complete integration tests
- Better logic handling (more flexibility for bonuses, points, scores, etc)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
