import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../sevices/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.css']
})
export class MainTemplateComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  singOut(){
    this.authenticationService.SignOut();
    this.router.navigate(['login']);
  }
}
