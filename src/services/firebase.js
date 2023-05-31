import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";


let app

try {
    app = getApp()
} catch (error) {
    const firebaseConfig = {
        apiKey: "AIzaSyCQe6g7i17Y3jIjTpjhfMiB7kj9jvfLOR0",
        authDomain: "academico-169f6.firebaseapp.com",
        databaseURL: "https://academico-169f6-default-rtdb.firebaseio.com",
        projectId: "academico-169f6",
        storageBucket: "academico-169f6.appspot.com",
        messagingSenderId: "981273295312",
        appId: "1:981273295312:web:9f284e31cea8be242621d5"
      };

    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db }