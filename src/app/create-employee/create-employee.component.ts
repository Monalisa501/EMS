import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @Input()
  employeeData: any;
  registerForm: FormGroup;
    submitted = false;
    departments = [
      {
          name: "Select department",
          value: ""
      },
      {
        name: "Sales",
        value: "Sales"
      },
      {
      
        name: "Marketing",
        value: "Marketing"
      },
      {
        name: "Account",
        value: "Account"
      },
      {
        name: "Human Resource",
        value: "Human Resource"
      }
    ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.employeeData);
    this.registerForm = this.formBuilder.group({
      
      empno: ['', Validators.required],
      Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      gender:['', Validators.required],
      department: ['', Validators.required]  
  });
  
  
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    console.log(this.registerForm.value)
    if (this.registerForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))

   
}

}
