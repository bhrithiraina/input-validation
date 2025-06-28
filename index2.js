const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: "Sorry you are not of age yet"
        })
    }
}



app.get("/ride1", function(req, res) {
        res.json({
        msg: "you have successfully riden the ride 1"
    })
})

app.get("/ride2", function(req, res) {
        res.json({
        msg: "you have successfully riden the ride 2",
        })
})

app.use(isOldEnoughMiddleware);

app.listen(3000); 

