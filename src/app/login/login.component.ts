import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:any ='';
  password:any ='';
  isValid:any = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate(){
    if(this.username=='lizu' && this.password == 'lizu'){
      this.router.navigate(['/dashboard']);
      this.isValid = 'true';
    }
    else{
      this.isValid ='false';
    }

  }
}
