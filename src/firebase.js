// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
// const analytics = getAnalytics(app);

export const getTokenFunc = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BCeT_JawY-w_rHN2SwsZcnJwkRuEW6g3cQaH9wgeGs40TsaQoYC_Hg4fTNNTsA-H8bg2x9qkpJCwU6U0tBdck4Q",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
