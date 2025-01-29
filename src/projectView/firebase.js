// Firebase App (必要な Firebase SDK をインポート)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore 用のモジュールをインポート
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase 構成オブジェクト
const firebaseConfig = {
  apiKey: "AIzaSyDNmtnkYUpqa-n666LQuftsOPa_hwlwe1E",
  authDomain: "projectmanager-b7e04.firebaseapp.com",
  projectId: "projectmanager-b7e04",
  storageBucket: "projectmanager-b7e04.firebasestorage.app",
  messagingSenderId: "508799076112",
  appId: "1:508799076112:web:292aaa525ccfbf8f06c795",
  measurementId: "G-ZZEZZTYGPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Firestore 初期化
const db = getFirestore(app);
// Firestore インスタンスをエクスポート
export { db };