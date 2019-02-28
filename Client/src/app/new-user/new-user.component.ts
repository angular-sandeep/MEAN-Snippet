import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import 'jquery';
@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.css"]
})
export class NewUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", Validators.required],
      mobile: ["", Validators.required],
      role: ["", Validators.required]
    });
      $('select').formSelect();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert(JSON.stringify(this.registerForm.value));
  }
}
