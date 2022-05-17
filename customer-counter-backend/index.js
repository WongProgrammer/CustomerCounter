const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))