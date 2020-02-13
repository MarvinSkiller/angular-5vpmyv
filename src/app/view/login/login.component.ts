import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../sevices/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.email]),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.SignOut();
  }

  submit() {
    if (this.form.valid) {
      this.authenticationService.SignIn(this.form.value.username, this.form.value.password);
    } else {
      this.error = 'Username or password invalid';
    }
  }

  @Input() error: string | null;

}
