import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-apartment',
    templateUrl: './edit-apartment.component.html',
    styleUrls: ['./edit-apartment.component.scss']
})

export class EditApartmentComponent {
  public apartment: Apartment = {
    id: null,
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

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private route: ActivatedRoute) {
    http.get<House[]>(baseUrl + 'api/Houses').subscribe(result => {
      this.houses = result;
    }, error => console.error(error));

    http.get<Apartment>(baseUrl + 'api/Apartments/' + this.route.snapshot.params.id).subscribe(result => {
      this.apartment = result;
    }, error => console.error(error));
  }

  public editApartment() {
    this.http.put<Apartment>(this.baseUrl + 'api/Apartments/' + this.apartment.id, this.apartment).subscribe(result => {
      this.router.navigate(['/apartments']);
    }, error => console.log(error));
  }
}

interface Apartment {
  id: number;
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
