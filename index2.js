const express = require("express");
const app = express();

app.get("/ride1",  function(req, res) {
    res.json({
        msg: "you have successfully riden the ride"
    })
})

app.listen(3000);