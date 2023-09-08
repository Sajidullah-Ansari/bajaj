const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);






// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const numbers = data.filter(item => typeof item === 'string' && /^[0-9]+$/.test(item));
        const alphabets = data.filter(item => typeof item === 'string' && /^[A-Za-z]$/.test(item));
        const highestAlphabet = alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0] || [];

        res.status(200).json({
            "is_success": true,
            "user_id": "parv_jain_24012003",
            "email": "pj4241@srmist.edu.in",
            "roll_number": "RA2011003011035",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet": highestAlphabet ? [highestAlphabet] : []
        });
    } catch (error) {
        res.status(400).json({
            "is_success": false,
            "error": error.message
        });
    }
});

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });









module.exports = app;
module.exports.handler = serverless(app);
