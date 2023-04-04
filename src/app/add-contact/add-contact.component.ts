import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  reactiveForm: FormGroup;

  public items: number[] =[1];
  noOfTimesClicked: number = 1;

  arrOfPhoneNumbers: FormControl[] = new Array(this.noOfTimesClicked);

   

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fname: new FormControl(),
      phoneNumber: new FormArray([]),
      // type: new FormControl('personal'),
      email: new FormControl(null),

    }); 
  }

  showOutput(){
    (<FormArray>this.reactiveForm.get('phoneNumber')).push(
      new FormGroup({
        number: new FormControl(null),
        ptype: new FormControl(null)
      })
    )

    // this.reactiveForm
    //  this.items.push(++this.noOfTimesClicked);
    //  console.log(this.items);
}

onSubmit(){
  console.log(this.reactiveForm.value)
}
}
