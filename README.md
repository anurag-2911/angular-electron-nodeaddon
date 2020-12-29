# angular-electron-nodeaddon
Simple example to demonstrate use of c++ node addon in an angular application which is built on electron.

Here node-addon\cpp\code\helloworldexample.cpp is the cpp file.

It is built into .node file by using N-API (https://nodejs.org/api/n-api.html) which calls node-gyp to build the c++ project to .node file.

Commands:

1. npm install 

2. To just build node addon : npm run build-nodeaddon : this will go to c++ project path where binding.gyp file is present and build the cpp files and copy the .node file from node-addon\build\Release\testaddon.node to ./node_modules.Same is accessed in index.js by declaring 
const testAddon = require('testaddon');

3. To run the electron application : npm run start

Application desciption :

It is a very basic application to show how c++ node addon is used in angular template.

In index.js it gets calls testAddon.hello() and gets value from testaddon.node(addon\cpp\code\helloworldexample.cpp\helloworldexample).
Then it passes that value to Angular(src\app\app.component.ts) welcomeMsg variable which is displayed in the UI.

