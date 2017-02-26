# `Oddle Test`

This project uses [react boilerplate][react-boilerplate] to quickly start the web development.

## Getting Started

To get you started you can install the dependencies:

### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

Now browse to the app at [`localhost:3000/`][local-app-url].

### Deployment to Heroku

Below are based on the deployment steps in react-boilerplate

Step 1: Create a Procfile with the following line: web: npm run start:prod. We do this because Heroku runs npm run start by default, so we need this setting to override the default run command.

Step 2: Install the Node.js buildpack for your Heroku app by running the following command: heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v98 -a [app-name]. Make sure to replace #v98 with whatever the latest buildpack is, which you can [find here][heroku-buildpack-node].

Step 3: Add this line to your package.json file in the scripts area: "heroku-postbuild": "npm run build". This is so Heroku can build your production assets when deploying (more of which you can read about here). Then, adjust the prebuild script in your package.json file so it looks like this: "prebuild": "npm run build:clean", to avoid having Heroku attempt to run Jest tests (which are unsupported with this buildpack).

Step 4: Run "heroku config:set NPM_CONFIG_PRODUCTION=false -a [app-name]" so that Heroku can compile the NPM modules included in your devDependencies (since many of these packages are required for the build process).

Step 5: This project is manually deployed to Heroku (using github)

[react-boilerplate]: https://github.com/react-boilerplate/react-boilerplate
[local-app-url]: http://localhost:3000/
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[heroku-buildpack-node]: https://github.com/heroku/heroku-buildpack-nodejs/releases

