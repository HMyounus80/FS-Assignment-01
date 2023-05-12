const express = require('express');

const app = express();

app.use(require("./routes"))

app.listen(4040, () => {
    console.log("Server listening on port 4040");
});