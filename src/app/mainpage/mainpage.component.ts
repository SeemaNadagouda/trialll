import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormGroupDirective, NgForm, Validators, EmailValidator, FormControl } from '@angular/forms';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatChipInputEvent } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

export interface Fruit {
  name: string;
}
 export class MyErrorStateMatcher implements ErrorStateMatcher {
 
   isErrorState(control1: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
   
  
     return !!(control1 && control1.invalid && (control1.dirty || control1.touched || isSubmitted) && MainpageComponent.ty);
   }
 }

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  emails: any;
  val:any;
    emailFormcontrol = new FormControl('', [
   Validators.required,
    Validators.email,
   ]);

  matcher = new MyErrorStateMatcher();
  static isMultiValid: any;

  static ty : any ;
  //ty=MainpageComponent.isMultiValid();
  // ty=MainpageComponent.isMultiValid();
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }



  public static isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  public isMultiValid(): any {
   //control1?: Formcontrol1
  let c1,control1,tempEmail: string;
  c1=this.emails;
  control1=this.emails;
  console.log(control1);
   tempEmail = this.emails;
  let invalid = false;
  let regex =/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  let ii: number;
  var emails = control1.split(',');
  ii=emails.length;
  console.log(ii);

  let gh: string;
  if(! (this.val==ii)){
    gh="nam";
    return ii;
  }
 
  if(tempEmail.indexOf(',') > -1){
  
   

    var emails = control1.split(',');
   
      for (let email of emails) {
        email = email.trim();
        console.log(email);
        let isValid = MainpageComponent.isValid(email)
        if(!isValid){
          return false;
          //{"email not valid":isValid}
        }
      }
      return true;
  }
  else{
    //let email = c1.split(',');
   let email = c1.trim();
    let isValid = MainpageComponent.isValid(email);
    if(isValid ){
      
      return true;
    }
      else if(email == "" || ! regex.test(email)){
        invalid = true;
        return false;
        //  {
        //     "email not valid": invalid
        // };
    }
    console.log("valid");
    return true;

   }
  }
//hjbn

visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: string[] = [' ', ','];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  //dialog

  animal: string;
  name: string;

 

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
