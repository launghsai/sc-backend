const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    code: 200,
    detail: "Successfully.... Hello",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
