# angular2do (Without service)
This is a angular 2 do Start up application for Beginners. 


## Setup project

###Required

#### npm
> Node package manager.
    
#### tsd 
TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.
`
    npm install -g tsd@^0.6.0
`

#### tsc 
TypeScript is a language for application scale JavaScript development.
`
    npm install -g typescript@^1.5.0-beta
`

#### http-server 
A simple zero-configuration command-line http server.
`
    npm install -g http-server
`

---


### Run compiler
```
tsc --watch -m commonjs -t es5 --emitDecoratorMetadata *.ts
```

### Start Server
From the directory that contains index.html:
```
    http-server
```

*Then visit localhost:8080/index.html*