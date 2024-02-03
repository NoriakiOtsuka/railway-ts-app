import React from "react";
import { renderToString } from "react-dom/server";

import App from "../src/App.tsx"

const path = require('path')
const express = require('express')
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  const app = renderToString(<App />);
  res.send(app);
})

app.get('/api', (req, res) => {
  res.json({message: "Hello World"});
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})
