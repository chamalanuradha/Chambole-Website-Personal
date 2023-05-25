import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  empForm: FormGroup;
  startDate = new Date(1980, 0, 1);

  education: string[] = [
    'Diploma',
    'Bachelor',
    'Master',
    'PhD'
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, this.validateSriLankanPhoneNumber]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      experinses: ['', [Validators.required, this.validateNonNegativeNumber]],
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }



  validateSriLankanPhoneNumber(control: AbstractControl): ValidationErrors | null {
    const phoneNumberRegex = /^(?:\+94|0)(?:7[12456780])\d{7}$/;
    const phoneNumber = String(control.value).trim(); // Trim leading and trailing spaces
    const valid = phoneNumberRegex.test(phoneNumber);
    return valid ? null : { invalidPhoneNumber: true };
  }

  validateNonNegativeNumber(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value < 0) {
      return { nonNegative: true };
    }
    return null;
  }

  onSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee Updated Successfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee Added Successfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }
}
