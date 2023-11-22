const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const { GoogleAuthProvider } = require("firebase/auth");


const firebaseConfig = {
    apiKey: "AIzaSyA4u_3ffGHzRbwkJOcm4DrDYfrz2lTGEDU",
    authDomain: "smart-energy-695e0.firebaseapp.com",
    databaseURL: "https://smart-energy-695e0-default-rtdb.firebaseio.com",
    projectId: "smart-energy-695e0",
    storageBucket: "smart-energy-695e0.appspot.com",
    messagingSenderId: "536359670950",
    appId: "1:536359670950:web:540bc3d7f7121f3082d067",
    measurementId: "G-QCK30NSH21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

// Acesso ao Banco de dados
exports.bd = bd;

// Autenticador email-senha
const auth = getAuth(app);
exports.auth = auth;

// autenticador Google (Abortado por enquanto)
const provider = new GoogleAuthProvider();

exports.provider = provider
