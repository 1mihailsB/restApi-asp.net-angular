import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public tenants: Tenant[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tenant[]>(baseUrl + 'api/Tenants').subscribe(result => {
      this.tenants = result;
      console.log("tenants>", this.tenants);
      console.log("bday>", this.tenants[0].birthday)
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
