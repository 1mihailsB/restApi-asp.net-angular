import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit-tenant',
    templateUrl: './edit-tenant.component.html',
    styleUrls: ['./edit-tenant.component.scss']
})
/** editTenant component*/
export class EditTenantComponent {
  public tenant: Tenant = {
    id: null,
    firstName: "",
    lastName: "",
    personalCode: "",
    birthday: new Date(),
    phoneNumber: "",
    email: "",
    apartmentId: null
  }

  public apartments: Apartment[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private route: ActivatedRoute) {
    http.get<Apartment[]>(baseUrl + 'api/Apartments').subscribe(result => {
      this.apartments = result;
      console.log("apartments>", this.apartments);
    }, error => console.error(error));

    http.get<Tenant>(baseUrl + 'api/Tenants/' + this.route.snapshot.params.id).subscribe(result => {
      this.tenant = result;
      console.log("edit tenant>",this.tenant);
    }, error => console.error(error));
  }

  public editTenant() {
    this.http.put<Tenant>(this.baseUrl + 'api/Tenants/' + this.tenant.id, this.tenant).subscribe(result => {
      this.router.navigate(['/tenants']);
    }, error => console.log(error));
  }
}

interface Tenant {
  id: number;
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
