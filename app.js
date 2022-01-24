import {upload} from './upload';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByAxGCMtw_Oa3KMTBZKdYfir4GecPC3gE",
  authDomain: "minin-file-upload.firebaseapp.com",
  projectId: "minin-file-upload",
  storageBucket: "minin-file-upload.appspot.com",
  messagingSenderId: "686299634976",
  appId: "1:686299634976:web:cfa4627fea430dbbd40b45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

upload('#file', {
  multi: true,
  accept: ['.png', '.jpg', '.jpeg', '.gif'],
  onUpload(files) {
    console.log('Files', files);
  }
});
