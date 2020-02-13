import { Input, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  memberForm:  FormGroup = new FormGroup({
    memberId: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    fatherName: new FormControl('',[Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }
  submit() {
    if (this.memberForm.valid) {

    }
  }
  
  @Input() error: string | null;
}