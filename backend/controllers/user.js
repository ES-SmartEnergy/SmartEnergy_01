const { query, collection, onSnapshot } = require("firebase/firestore");
const { bd } = require("../firebase.js");

module.exports = function (_, res) {
    const q = query(collection(bd, "usuarios"));
    var aux = true;

    onSnapshot(q, function (QuerySnapshot) {
        const dados = QuerySnapshot.docs.map(function (doc) {
            return {
                arquivo: doc.data(),
            };
        });

        info = dados[0].arquivo;
        return res.status(200).json(info);
    });
};
