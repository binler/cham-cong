import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyCoQfDrUGVHCKmz_ONOo-Ez4ZIzhsBTdEo",
  authDomain: "cham-cong-e9d90.firebaseapp.com",
  databaseURL: "https://cham-cong-e9d90.firebaseio.com",
  projectId: "cham-cong-e9d90",
  storageBucket: "cham-cong-e9d90.appspot.com",
  messagingSenderId: "36295154637"
});

export const db = app.database();