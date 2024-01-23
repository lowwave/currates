## run locally
To run locally you first need to build the application (see below) or at least the server by running `yarn build:server`. This is because the server is written in **Typescript** is being run in Node environment which could not run `.ts` files natively, hence the server file has to be transpiled first. After that you can run the following command:
```
yarn dev
```
This will run the server on default `PORT 8080` and the frontend on default `PORT 5174`.

## build

```
yarn build
```
---
The application is deployed to **Render** and can be accessed here: https://currates.onrender.com/
