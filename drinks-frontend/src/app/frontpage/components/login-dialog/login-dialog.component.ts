import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  @Input() initalBarCode!: string;
  @Output() submitClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() newClicked: EventEmitter<string> = new EventEmitter<string>();
  loginForm!: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      barCode: [this.initalBarCode, [
        Validators.required,
        Validators.pattern('^[A-Za-z]{10}$')
      ]]
    });
  }

  public submitLoginForm() {
    this.submitClicked.emit(this.barCode.value);
  }

  public createNewBar() {
    this.newClicked.emit();
  }

  get barCode() {
    return this.loginForm.get('barCode') as FormControl;
  }

}
