import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-houses',
    templateUrl: './houses.component.html',
    styleUrls: ['./houses.component.scss']
})

export class HousesComponent {

  public houses: House[];


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {
    http.get<House[]>(baseUrl + 'api/Houses').subscribe(result => {
      this.houses = result;
    }, error => console.error(error));
  }

  public deleteHouse(id: number) {
    this.http.delete(this.baseUrl + 'api/Houses/'+id).subscribe(result => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/houses']);
      });
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
