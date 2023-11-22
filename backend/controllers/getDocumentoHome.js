const { doc, getDoc } = require("firebase/firestore");
const { bd } = require("../firebase.js");

module.exports = async function (req, res) {
    /*const q = query(collection(bd, "usuarios"));
    var aux = true;

    onSnapshot(q, function (QuerySnapshot) {
        const dados = QuerySnapshot.docs.map(function (doc) {
            return {
                arquivo: doc.data(),
            };
        });
        console.log(dados)
        info = dados[0].arquivo;
        return res.status(200).json(info);
    });*/

    const { uid } = req.body;    

    const docRef = doc( bd, 'usuarios', uid, 'dias_anteriores', 'dados_brutos');
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return res.status(200).json(docSnap.data());
    } else {
        return res.status(500);
    }
};



