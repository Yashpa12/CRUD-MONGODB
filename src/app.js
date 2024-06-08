const express = require("express");
const app = express();
require("../src/db/connn");
const router = require("./routers/main");
const port = process.env.PORT || 3000;

// midlleware
app.use(express.json());

app.use(router)





app.listen(port, () => {
  console.log(`connection instablished on ${port}.`);
});
