import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome : any;
  @Output() cancelRegister  = new EventEmitter();
  constructor(private authService : AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  model: any = {};

  register(){
    this.authService.register(this.model).subscribe(() =>{
      this.alertify.success("Registration successfully");
    }, error => {
   this.alertify.error(error);
    });
  }


  cancel(){
    this.cancelRegister.emit(false);
    
  }
}
