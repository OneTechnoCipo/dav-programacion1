import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCeRSX9DIsAOCKo5rS3nc72QmU5JjTQ2vI",
    authDomain: "pp1-programacion.firebaseapp.com",
    projectId: "pp1-programacion",
    storageBucket: "pp1-programacion.appspot.com",
    messagingSenderId: "314987603964",
    appId: "1:314987603964:web:6f17b025d07e9bf016b479",
    measurementId: "G-94K2T0CMQ5"
};
/* iniciamos la conexion entre entre la APP y firebase */
const conexion = initializeApp(firebaseConfig)

/* me conecta al servicio de base de datos de firestore */
const db =getFirestore()
const storage = getStorage(conexion)
const auth = getAuth()
export {db, storage, auth}