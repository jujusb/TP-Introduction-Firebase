import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFirstFirebaseBookShelvesProject';
  constructor() {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    //TODO Q1
    const firebaseConfig = {
      apiKey: "AIzaSyC-SoQ1WQcVSUGFqB4r7Q9L--c_ouWKRgo",
      authDomain: "something-fa053.firebaseapp.com",
      projectId: "something-fa053",
      storageBucket: "something-fa053.appspot.com",
      messagingSenderId: "197017811078",
      appId: "1:197017811078:web:2a6b13eb5cdda17b6fb907",
      databaseURL: "https://something-fa053-default-rtdb.europe-west1.firebasedatabase.app/"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

}
