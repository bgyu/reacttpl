# Introduction
This is a template for [React.js](https://reactjs.org) Application. This application is using [babel](https://babeljs.io/) for javascript compiler (compile ES6 code to ES5),
using [webpack](https://webpack.js.org/) for packing the source code to **dist**.

# How to start
To compile and run this program. First you need to install the latest [node.js](https://nodejs.org/en/). Then go to the root folder (reacttpl),
run the following command:
```bash
npm install
```
This command will install all necessary node packages (see **package.json**).
Finally, check the following commands to compile the code and run it.

# Build
```bash
npm run build
```
This will build the source code and generate a dist folder which containers only three files:
* **bundle.js**: the ultimate javascript
* **index.html**: the ultimate home page
* **style.css**: the ultimate CSS

If you don't have a web server, you can just open index.html in the browser to check the result.
**dist** folder is for distribution, the three files mentioned above are the ones you are going to use in production.

```bash
npm run build:prod
```
This command is smilar to above one, but will generate the minimized dist for production usage.

# Run
```bash
npm run start
```
You can see the result via: http://localhost:8080
This command is using **webpack-dev-server** to start a web server to serve the web pages.

