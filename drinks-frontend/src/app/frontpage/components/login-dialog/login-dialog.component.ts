import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { BarCodeService } from 'src/app/services/bar-code-service/bar-code.service';

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
  

  constructor(
    private fb: FormBuilder,
    private barCodeService: BarCodeService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      barCode: [this.initalBarCode, [
        Validators.required,
        Validators.pattern('^[A-Za-z]{10}$'),
        this.isBarCodeAvailable()
      ]]
    });
  }

  public isBarCodeAvailable(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      console.log(this.barCodeService.isBarCodeAvailable(control.value))
      return this.barCodeService.isBarCodeAvailable(control.value) ? { availabilityError: true} : null;
    }
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
