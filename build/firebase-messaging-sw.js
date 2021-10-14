import firebase from "firebase/compat";

const firebaseConfig = {
    messagingSenderId: "763547875183",
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