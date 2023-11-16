## Getting Started with Create React App

1. npx create-react-app my-react-app
2. cd my-react-app
3. npm run start

![alt text](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231115234503.png)


This strategy would take a lot of time to start our react project. There is another utility to opt, using vite:

1. npm create vite@latest
2. cd project-name
3. npm run dev
![alt text](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231115234537.png)

### Note: 
*Got Confused which type of command should we use to start our particular app (vite or basic app)?*
*Go to the `packge.json -> scripts` and choose the appropriate commands to run app.*

## About Components
Always capitalize first letter of components that have been exported in both vite and basic react app.
Use uppercase letter in file names as it is the best practice.

## How to create custom react with JSX
In this section, there is an idea implemented by me in order to have a glance over the inner working of `REACT JSX`. 
How does it work with simple HTML code when it is unable to read/implement it directly? By directly, I mean, It converts into JavaScript code under the hood to make it readable to display our actual HTML code.
![alt text](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231116230640.png)
This is the simple JSX code that will be converted into JavaScript code in order to run it. In the following, we can see how that code is converted to the JavaScript code.

1. Create a folder named as `custom-react`
2. Create `index.html` and `custom_react.js` in which we will see how react jsx will convert for its readability.

![alt text](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231116225620.png)
In this file, the `body` has `#root` in which JSX html would be injected by `custom_react.js` 
![](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231116225922.png)

![](https://github.com/abdulrehmanamerbaig/react/blob/master/Tutorial/Pasted%20image%2020231116230045.png)
The `custom_react.js` is the implementation of JSX html code, I have attached a picture of function `Link()`, using JavaScript. You can have an idea of how does each attributes make and implemented under the hood.

*Save it -> Go Live with `index.html` file and you'll see a button of `a` tag that will redirect you to `href: 'google.com'` in a new page `target: _blank` when you'll click on it.*

### `_______________________________________________________________`

