## Getting Started with Create React App

1. npx create-react-app my-react-app
2. cd my-react-app
3. npm run start
![[Pasted image 20231115234503.png]]

This strategy would take a lot of time to start our react project. There is another utility to opt, using vite:

1. npm create vite@latest
2. cd project-name
3. npm run dev
![[Pasted image 20231115234537.png]]

### Note: 
Got Confused which type of command should we use to start our particular app (vite or basic app)?
Go to the `packge.json -> scripts` and choose the appropriate commands to run app.

## About Components
Always capitalize first letter of components that have been exported in both vite and basic react app.
Use uppercase letter in file names as it is the best practice.

## How to create custom react with JSX
In this section, there is an idea implemented by me in order to have a glance over the inner working of `REACT JSX`. 
How does it work with simple HTML code when it is unable to read/implement it directly? By directly, I mean, It converts into JavaScript code under the hood to make it readable to display our actual HTML code.
![[Pasted image 20231116230640.png]]
This is the simple JSX code that will be converted into JavaScript code in order to run it. In the following, we can see how that code is converted to the JavaScript code.

1. Create a folder named as `custom-react`
2. Create `index.html` and `custom_react.js` in which we will see how react jsx will convert for its readability.

![[Pasted image 20231116225620.png]]
In this file, the `body` has `#root` in which JSX html would be injected by `custom_react.js` 
![[Pasted image 20231116225922.png]]
![[Pasted image 20231116230045.png]]
The `custom_react.js` is the implementation of JSX html code, I have attached a picture of function `Link()`, using JavaScript. You can have an idea of how does each attributes make and implemented under the hood.

*Save it -> Go Live with `index.html` file and you'll see a button of `a` tag that will redirect you to `href: 'google.com'` in a new page `target: _blank` when you'll click on it.*

### `_______________________________________________________________`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
