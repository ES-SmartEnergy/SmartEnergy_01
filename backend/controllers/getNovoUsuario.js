const { createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../firebase.js");
const { bd } = require("../firebase.js");
const { doc, setDoc } = require("firebase/firestore");


module.exports = function (req, res) {

    /*email = "wellington@cefet.com"
    password = "cefetquente"*/

    /*email = "brunindograu@cefet.com"
    password = "cefetquente"*/

    const { email, senha, nome } = req.body;

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            return res.status(200).json(userCredential.user.uid);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            info = errorMessage;
            return res.status(200).json(info);
        });

}

