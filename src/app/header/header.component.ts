import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // TODO Q5 à décommenter
    //  firebase.auth().onAuthStateChanged(
    //    (user) => {
    //      if (user) {
    //        this.isAuth = true;
    //      } else {
    //        this.isAuth = false;
    //      }
    //    }
    //  );
  }

  onSignOut(): void {
    // TODO Q5 à décommenter
    //  this.authService.signOutUser();
  }

}
