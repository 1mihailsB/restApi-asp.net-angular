import { Component } from '@angular/core';

@Component({
    selector: 'app-create-house',
    templateUrl: './create-house.component.html',
    styleUrls: ['./create-house.component.scss']
})
/** createHouse component*/
export class CreateHouseComponent {
  public house: House = {
    number: null,
    street: "",
    city: "",
    country: "",
    postIndex: ""
  };
  
  constructor() {
    console.log(this.house);
  }

  public printHouse() {
    console.log(this.house);
  }
}

interface House {
  number: number;
  street: string;
  city: string;
  country: string;
  postIndex: string;
}
