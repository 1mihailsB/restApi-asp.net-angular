import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
    selector: 'app-houses',
    templateUrl: './houses.component.html',
    styleUrls: ['./houses.component.scss']
})

export class HousesComponent {

  public houses: House[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<House[]>(baseUrl + 'api/Houses').subscribe(result => {
      this.houses = result;
      console.log("houses>", this.houses);
    }, error => console.error(error));
  }
}

interface House {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postIndex: string;
}
