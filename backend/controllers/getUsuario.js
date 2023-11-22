const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../firebase.js");

module.exports = function (req, res) {
    const { email, senha } = req.body;

    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Certifique-se de que userCredential.user esteja definido antes de acessar uid
            if (userCredential.user) {
                const uid = userCredential.user.uid;
                return res.status(200).json({ uid });
            } else {
                return res.status(400).json({ message: "Usuário não autenticado." });
            }
        })
        .catch((error) => {
            console.error(error);
            return res.status(400).json({ message: "Algo de errado aconteceu durante a autenticação." });
        });
}
