import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
 
  signUpForm:FormGroup=this.formBuilder.group({
    user_email : ['', [Validators.required, Validators.email, Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$')]],
    username : ['', Validators.required],
    password : ['', Validators.required],
    confPassword : ['']
  })

  //Self-Note : Validators.email only checks for @ symbol and not . in email

  showConfirmPassword:boolean=false
  confirmPasswordFailError:boolean=false
  hidePasswordValue:boolean=true

  constructor(private formBuilder : FormBuilder){
    
  }

  ngOnInit()
  {
    this.signUpForm.get('password')?.valueChanges.subscribe((passData:any)=>{
      if(passData && passData.length!=0)
      {
        this.showConfirmPassword=true
      }
      else
      {
        this.showConfirmPassword=false
        this.signUpForm.get('confPassword')?.patchValue('')
      }
    })

    this.signUpForm.get('confPassword')?.valueChanges.subscribe((confPassData:any)=>{
      if(confPassData != this.signUpForm.get('password')?.value)
      {
        this.confirmPasswordFailError=true
      }
      else
      {
        this.confirmPasswordFailError=false
      }
    })
  }

  callSignUp(){
    console.log("Form", this.signUpForm)
  }

  togglePassword(type:string){
    if(type=='show')
    {
      this.hidePasswordValue=false
      console.log("Show Password")
    }
    else if(type=='hide')
    {
      this.hidePasswordValue=true
      console.log("Hide Password")
    }
  }
}
