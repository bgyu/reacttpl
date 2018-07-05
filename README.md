# Introduction
This is a template for *React.js* Application. This application is using *babel* for javascript compiler (compile ES6 code to ES5),
using *webpack* for packing the source code to *dist*.

# Build
``` bash
npm run build
```
This will build the source code and generate a dist folder which containers only three files:
* bundle.js: the ultimate javascript
* index.html: the ultimate home page
* style.css: the ultimate CSS
If you don't have a web server, you can just open index.html in the browser to check the result.
*dist* folder is for distribution, the three files mentioned above are the ones you are going to use in production.

``` bash
npm run build:prod
```
This command is smilar to above one, but will generate the minimized dist for production usage.

# Run
``` bash
npm run start
```
You can see the result via: http://localhost:8080

