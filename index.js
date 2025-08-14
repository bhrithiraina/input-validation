const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = Number(req.query.kidneyId);

  if (username !== "bhrithi" || password !== "pass") {
    res.status(400).json({msg: "Somethings up with your input"});
  } else {

    if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(400).json({ msg: "Somethings up with your input" });
    } else {
       // do something with kidney here 
        res.json ({
            msg: "your kidney is fine"
        })
    }
  }
});

app.listen(3000);

