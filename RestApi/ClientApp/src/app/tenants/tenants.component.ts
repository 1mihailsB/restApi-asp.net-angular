import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})

export class TenantsComponent {
  public tenants: Tenant[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private datepipe: DatePipe) {
    http.get<Tenant[]>(baseUrl + 'api/Tenants').subscribe(result => {
      this.tenants = result;
    }, error => console.error(error));
  }

  public deleteTenant(id: number) {
    this.http.delete(this.baseUrl + 'api/Tenants/' + id).subscribe(result => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/tenants']);
      });
    }, error => console.error(error));
  }

}

interface Tenant {
  id: number;
  firstName: string;
  lastName: string;
  personalCode: string;
  birthday: string;
  phoneNumber: string;
  email: string;
  apartmentId: number | null;
  apartment: Apartment | null;
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
