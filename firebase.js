import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXp8u5kh031Mhs-mPsbSO4ezr4m-2lUQA",
  authDomain: "melkbot-pwa.firebaseapp.com",
  projectId: "melkbot-pwa",
  storageBucket: "melkbot-pwa.appspot.com",
  messagingSenderId: "844924778037",
  appId: "1:844924778037:web:a694ae054ad99a4c35e37c",
  measurementId: "G-Y4ZB75M1T1"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: 'BPPbXm-ZilO3HStrf7UHB8oWfizPeaQuh28U8pfYtQdykBt8dgQdIsPoeshTMdIhJQcOJD7EaxYPcfSaWungQPs',
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
