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
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/ms-icon-310x310.png",
    };
    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});