import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
  onClickMe(){
    this.router.navigate(['/create-employee']);
  }

}
