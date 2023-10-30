const express = require("express")
const getDocumento = require("../controllers/user.js")

const router = express.Router()

router.get("/dados", getDocumento)

module.exports = router;
