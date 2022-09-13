import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '@modules/register/services/register.service';

@Component({
  selector: 'psf-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({});

  constructor(private _registerModule: RegisterService) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup (
      {
        name: new FormControl('',[
          Validators.required
        ]),
        email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]),
        checkrole: new FormControl()
      }
    )
  }
  sendRegister(): void {
    const{name, email, password, checkrole} = this.formRegister.value
    let role = 'user'
    if(checkrole) {
      role = 'artist'
    }
    this._registerModule.createUser(name, email, password, role)
    .subscribe({next(resp) {
    },
    error(msg) {
    }
    })
  }
}
