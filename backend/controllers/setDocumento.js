const { bd } = require("../firebase.js");
const { doc, setDoc } = require("firebase/firestore");

module.exports = async function criaDocumento(req, res) {

    const { nome, uid } = req.body;

    setDoc(doc(bd, "usuarios", uid), {
        nome,
        consumo: []
    }).then((userCredential) => {
        return res.status(200).json(userCredential.user.uid);
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            info = errorMessage;
            return res.status(200).json(info);
        });
}