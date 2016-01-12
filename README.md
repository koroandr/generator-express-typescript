# generator-express-typescript
[Yeoman](http://yeoman.io) generator for express.js projects written in TypeScript.

## What's in the box

This generator creates project with some fancy tools onboard:

1. [Express.js](http://expressjs.com) - simple nodejs web framework
2. [TypeScript](https://github.com/Microsoft/TypeScript) - strongly-typed version of ES6
3. [tsd](https://github.com/DefinitelyTyped/tsd) - tool for managing TypeScript definitions for JS libraries
4. [grunt](http://gruntjs.com) or [gulp](http://gulpjs.com) - build tool
5. [Dockerfile](https://www.docker.com) - to run your project as a Docker container (optional)

## Getting Started

### Run the generator

First, install yeoman (if you haven't already)

```
$ npm install -g yo
```

To install generator-express-typescript from npm, run:

```
$ npm install -g generator-express-typescript
```

Finally, initiate the generator and answer some simple questions:

```
$ yo express-typescript
```

Notice, that you should have either grunt or gulp installed globally before launching this generator
