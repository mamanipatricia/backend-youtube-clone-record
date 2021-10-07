# YouTube clone Backend

A Node.js project using Typescript and Express.js

## System Requirements

- [git](https://git-scm.com/) v2.13 or greater
- [NodeJS](https://nodejs.org) `12 || 14 || 15 || 16`
- [npm](https://www.npmjs.com/) v6 or greater
- [MongoDB](https://www.mongodb.com/) v4.0 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

## Steps to run the project

1. Clone the project
2. Install packages

   ```shell=
   $ npm i
   ```

3. Configure environment variables

```shell
$ cp .env.example .env
```

4. Configure the Database
   Run MongoDB locally or configure on [Mongo Atlas](https://www.mongodb.com/en/cloud/atlas)

> Please, be sure to update correctly the environment variables in created `.env` file.

5. Run the project

```shell=
$ npm run dev
```

## Build the project

```shell=
$ npm run build
```

## Deploy the project

This project is deployed on AWS.
The services used are:

- EC2
- VPC
- Route53

The diagram of the backend Infrastructure [is here](https://slides.com/d/Z1OkMFM/live).

Once the Infrastructure is created, you can run this [script](https://gist.github.com/mamanipatricia/87dae38b7d645364d91fb27b75188406) as a superuser `sudo su` to deploy the project automatically.

**PS:**

- I suggest you to create an Ubuntu Image or any Linux Distribution for your EC2 instance.

## Available Scripts

Below is a list of all the scripts this project has available:
| Npm Script | Description |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `build-ts` | Compiles all source `.ts` files to `.js` files in the `dist` folder |
| `build` | Full build. Runs ALL tasks (`build-ts`, `lint`) |
| `dev` | Performs a full build and then serves the app in watch mode |
| `lint` | Runs ESLint on project files |
| `prettier:check` | Check if your files are formatted |
| `prettier:fix` | This rewrites all processed files in place |
| `lint` | Runs ESLint on project files |
| `serve-debug` | Runs the app with the --inspect flag |
| `start` | Runs node on `dist/server.js` which is the apps entry point |
| `watch-debug` | The same as `watch` but includes the --inspect flag so you can attach a debugger |
| `watch-ts` | Same as `build-ts` but continuously watches `.ts` files and re-compiles when needed |
