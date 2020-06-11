import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-tenant',
    templateUrl: './create-tenant.component.html',
    styleUrls: ['./create-tenant.component.scss']
})

export class CreateTenantComponent {
  public tenant: Tenant = {
    firstName: "",
    lastName: "",
    personalCode: "",
    birthday: new Date(),
    phoneNumber: "",
    email: "",
    apartmentId: null
  }

  public apartments: Apartment[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
    http.get<Apartment[]>(baseUrl + 'api/Apartments').subscribe(result => {
      this.apartments = result;
      console.log(this.tenant);
    }, error => console.error(error));
  }

  public createTenant() {
    this.http.post<Tenant>(this.baseUrl + 'api/Tenants', this.tenant).subscribe(result => {
      this.router.navigate(['/tenants']);
      console.log(result);
    }, error => console.log(error));
  }
}

interface Tenant {
  firstName: string;
  lastName: string;
  personalCode: string;
  birthday: Date;
  phoneNumber: string;
  email: string;
  apartmentId: number | null;
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
