const express = require('express');
const bodyParser = require('body-parser').json();
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        status: "error",
        message: "Bad request"
    });
});

