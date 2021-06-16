import firebase from 'firebase/app';
//Importante importar o serviço de auth
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAwiW1pTod8jxV8MlhtbzMzs27VR1l8CLk",
    authDomain: "coffee-a7e8c.firebaseapp.com",
    databaseURL: "https://coffee-a7e8c.firebaseio.com",
    projectId: "coffee-a7e8c",
    storageBucket: "coffee-a7e8c.appspot.com",
    messagingSenderId: "108957040793",
    appId: "1:108957040793:web:fac475e46249060ed8b808"
}

firebase.initializeApp(config);

//Iniciar o serviço de auth
export const auth = firebase.auth();

//Iniciar o google sing in
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

//Exporta a função de login
export const singInWithGoogle = () => auth.signInWithPopup(provider);