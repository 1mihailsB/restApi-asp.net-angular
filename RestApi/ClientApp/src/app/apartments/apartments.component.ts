import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-apartments',
    templateUrl: './apartments.component.html',
    styleUrls: ['./apartments.component.scss']
})

export class ApartmentsComponent {
  public apartments: Apartment[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
      http.get<Apartment[]>(baseUrl + 'api/Apartments').subscribe(result => {
        this.apartments = result;
      }, error => console.error(error));
  }

  public deleteApartment(id: number) {
    this.http.delete(this.baseUrl + 'api/Apartments/' + id).subscribe(result => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/apartments']);
      });
    }, error => console.error(error));
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
