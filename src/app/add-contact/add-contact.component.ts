import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit, OnChanges{

  reactiveForm: FormGroup;

  public items: number[] =[1];
  noOfTimesClicked: number = 1;

  constructor() {
    // for (let i = 0; i < this.noOfTimesClicked; i++) {
    //   this.items.push(i);
    // }
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      fname: new FormControl(),
    });

    
    
  }

  // showOutput(){
  //     // for (let i = 0; i < this.noOfTimesClicked; i++) {
  //     //   this.items.push(i);
  //     // }
  //     for (let i = 0; i < 1; i++) {
  //       this.items.push(i);
  //     }
  //   this.noOfTimesClicked++;
  //   console.log(this.items);
  // }

  showOutput(){
    

      this.items.push(++this.noOfTimesClicked);

    // for (let i = 0; i < 1; i++) {
    //   this.items.push(i);
    // }
  console.log(this.items);
}
}
