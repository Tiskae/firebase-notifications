// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoc5OjPkLDteyleC-wZVQ6i955l5PIE94",
  authDomain: "fir-notifications-ac668.firebaseapp.com",
  projectId: "fir-notifications-ac668",
  storageBucket: "fir-notifications-ac668.appspot.com",
  messagingSenderId: "334234918196",
  appId: "1:334234918196:web:f745c78fca7df7899f5961",
  measurementId: "G-LX5H190LXL",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/logo192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
