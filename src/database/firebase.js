import firebase from "firebase/compat";
const firebaseConfig = {
    apiKey: "AIzaSyD2QyLYaQeAJzBu7e6dVdfTQO9babBI90E",
    authDomain: "vcsa-intention-prayers.firebaseapp.com",
    projectId: "vcsa-intention-prayers",
    storageBucket: "vcsa-intention-prayers.appspot.com",
    messagingSenderId: "763547875183",
    appId: "1:763547875183:web:e9f96747ab5c98696fda9a",
    measurementId: "G-5VZYKNBCWS"
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
export default db;

export const messaging = firebase.messaging();
const vapidKeys = "BNtkBrqlSTEQiDwnil8qUGw0H5SVQhoW4Obv_4ffPv-FYLl9SUe_z2Jhs2EYKxphqIoid2iOT4uKe1KaAooRTks";

export const getToken = async (setTokenFound) => {
    let currentToken = '';
    try {
        currentToken = await messaging.getToken({vapidKey: vapidKeys});
        console.log(currentToken);
        setTokenFound(currentToken !== '');
    } catch (error) {
        console.log('An error occurred while retrieving token.', error);
    }
    return currentToken;
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });