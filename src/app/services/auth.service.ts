import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() {
  }

  createNewUser(email: string, password: string): any {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string): any {
    // TODO Q2.1
  }

  signOutUser(): void {
    // TODO Q2.2
  }
}

