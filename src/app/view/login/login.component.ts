import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate(['view/home']);
    } else {
      this.error = 'Username or password invalid';
    }
  }

  @Input() error: string | null;

}
