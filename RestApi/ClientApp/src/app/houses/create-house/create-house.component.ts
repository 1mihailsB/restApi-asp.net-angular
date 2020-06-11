import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  private http: HttpClient;
  private baseUrl: string;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public createHouse() {
    this.http.post<House>(this.baseUrl + 'api/Houses', this.house).subscribe(result => {
      this.router.navigate(['/houses']);
    }, error => console.log(error));
  }
}

interface House {
  number: number;
  street: string;
  city: string;
  country: string;
  postIndex: string;
}
