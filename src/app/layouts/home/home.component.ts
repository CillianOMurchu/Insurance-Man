import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayFakeCredentials = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {
  }

  displayFakeCredentialsToggle() {
    this.displayFakeCredentials = !this.displayFakeCredentials;
  }

  copyFunction(type) {
    var copyText =
      type === 'name'
        ? (document.getElementById('nameInput') as HTMLInputElement)
        : (document.getElementById('passwordInput') as HTMLInputElement);
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
  }
}
