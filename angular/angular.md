# Angular // Cheatsheet

## Requirements
- - - 
* Node.js
* Npm
* Text editor
* Terminal/cmd

## Installing Angular CLI
- - -
__Why do we need angular CLI?__ we will install angular CLI
to make our work more easier in the terminal. creating components
etc etc.


#### Commands on how to install angular cli
```bash
    > npm install @angular/cli
```
Wait for the terminal to finish installing angular CLI, after
that lets start our very first angular App....


## Creating our first App 
- - - 
1. First thing you do is create a _folder_ for the project
```bash
    > mkdir angular_proj
```

2. Secondly, we will create our first angular project by 
typing in the command in the _terminal/bash_.
```bash
    > ng new a4app
```
wait for the terminal to finish creating the currently needed
folders for later.

3. inside our folder, you will see a bunch of files created for
us by angular CLI. in the terminal again, type in the terminal.
```bash
    > ng serve
```
this will start a server and see the result when we edit
our angular files.

4. To test our app, go inside our project folder and go to 
>>> src/app/app.component.ts

## Understanding files and directories in our project
- - - 
#### the 'src' folder
the __src__ folder has all of our main components and main
files that we will edit more often. that is located in.
```bash
    > <ourDirectory>/src
```

#### css/html/ts files
Inside our __'src/app/'__ directory. you will see a bunch of files
that has the file extension of _html/css/ts_ those files are the one's$
that we will edit and manipulate. it is located on.
```bash
    > <ourDirectory>/src/app/
```

## Testing our angular app
- - - 
Go to our angular directory and head to the
```bash
    > src/app/app.component.ts
```
Inside you will see the 'title = App works!', You can change the value
of this and the browser will automatically refresh and change the content.

## Components
- - -
Components are like parts of our web app. you can organize your components
by creating folders on individual components. you can use angular cli to create component
files with boilerplates like this:
```bash
    > ng g component <nameoffolder>
```
this will automatically create files for us by angular cli.

when we wan't to use our components to our __'app.component.ts'__ we need to find
the __'@component selector'__ on our component _.ts_ file and see what's the keyword or
xml tag element. so that we can put it on our main app html. and se e what 's the keyboarword or
ehtmlxml tag element. so that we can put it on our main app html.

## Using bootstrap for angular
- - - 
to install and use bootstrap for angular. you need to install
the ngx npm package. type the command in the terminal.
```bash
    > npm install ngx-bootstrap bootstrap --save
```
__REMEMBER__ type the command inside of our angular project.

