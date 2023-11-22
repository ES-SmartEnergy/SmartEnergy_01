const express = require("express")
const getDocumentoDado = require("../controllers/getDocumentoDado.js")
const getUsuario = require("../controllers/getUsuario.js")
const getNovoUsuario = require("../controllers/getNovoUsuario.js")
const setDocumento = require("../controllers/setDocumento.js")

const router = express.Router()

router.post("/dados", getDocumentoDado)

//router.post("/home", getDocumentoHome)

//router.get("/login", getUsuario)

router.post("/login", getUsuario)

router.post("/criardocumeto", setDocumento)

router.post("/registrar", getNovoUsuario)

module.exports = router;
