# Why?

This repo is a template for bootstrapping applications that use:
- Typescript
- MongoDB (with Mongoose)
- Express
- Jest

It's goal is to provide a quick start for any app development in the TS ecosystem without wasting time on fundamental research and bootstrapping.

🚨 The use case for this starter kit is server-side NodeJS apps only 🚨

# Setup
Run the command below to install all modules
```
npm i
```

Initialise Environment Variables in ./src/config.ts

```javascript
export const config = {
    "mongoUrl": ""
}

```


Initialise the app

```
npm start
```