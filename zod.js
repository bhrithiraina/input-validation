// const express = require("express");
// const zod = require("zod")
// const app = express();

// const schema = zod.array(zod.number());

// app.use(express.json());

// app.post("/health-checkup", function(req, res) {
//     // kidneys = [1, 2]
//     const kidneys = req.body.kidneys;
//     const response = schema.safeParse(kidneys);
//     if (!response.success) {
//         res.status(411).json({
//             msg: "input is invalid"
//         })
//     } else {
//         res.send({
//      response
//     })
//     }
// });

// app.listen(3001);

const express = require("express");
const zod = require("zod");
const app = express();

// if this is an array of number with atleast 1 input, return true, else return false
function validateInput(obj) {
    const schema = zod.object({
        email: zod.String().email(),
        password: zod.String().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function (req, res) {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "your inputs are invalid"
        })
        return;
    }
})