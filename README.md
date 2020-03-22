This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### General overlay of application functionality

The application must : 

- Take input
  - Search title 
  - Year
  - Genre
  - Cast Member(s) => adds tags search input beneath in UI

  - Take either search for movies on, the basis of one parameter, or the combination of multiple parameters

- Display based on input
  - A limit of results to be displayed per search => 25 per page, this may be customisable

  - Sorting
    - Screen to indicate null results for input search parameters
    - Have the ability to sort either by (a-z || 0-9)
      - Release date
      - Title
      - Cast

### Unused code
/* Set base of 4, and raise it to the power of the current page number
  let upperLimit = Math.pow(4, currentPage)
  let lowerLimit = 0 

  // Declare current page based on page number; based on 4 cards per slide
  let pageCards = []
  
  // Create slides of four
  for (let i = 0; i < movies.length; i++) {
    if ( (i >= lowerLimit) && (i <= upperLimit) ) {
      pageCards.push(movies[i])
      lowerLimit += 4
      console.log(i)
    }
    else if (i > 8 ) {

    } 
  }
*/