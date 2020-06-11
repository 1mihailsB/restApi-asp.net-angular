import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-apartment',
    templateUrl: './create-apartment.component.html',
    styleUrls: ['./create-apartment.component.scss']
})

export class CreateApartmentComponent {
  public apartment: Apartment = {
    number: null,
    floor: null,
    amountOfRooms: null,
    amountOfTenants: null,
    totalArea: null,
    availableArea: null,
    houseId: null,
    house: null
  }

  public houses: House[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
    http.get<House[]>(baseUrl + 'api/Houses').subscribe(result => {
      this.houses = result;
    }, error => console.error(error));
  }

  public createApartment() {
    this.http.post<Apartment>(this.baseUrl + 'api/Apartments', this.apartment).subscribe(result => {
      this.router.navigate(['/apartments']);
      console.log(result);
    }, error => console.log(error));
  }
}

interface Apartment {
  number: number;
  floor: number;
  amountOfRooms: number;
  amountOfTenants: number;
  totalArea: number;
  availableArea: number;
  houseId: number | null;
  house: House | null;
}

interface House {
  id: number;
  number: number;
  street: string;
  city: string;
  country: string;
  postIndex: string;
}
