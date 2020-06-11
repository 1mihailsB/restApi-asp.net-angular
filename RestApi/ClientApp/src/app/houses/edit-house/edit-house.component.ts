import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.scss']
})

export class EditHouseComponent {

  public house: House = {
    id: null,
    number: null,
    street: "",
    city: "",
    country: "",
    postIndex: ""
  };

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private route: ActivatedRoute) {
    http.get<House>(baseUrl + 'api/Houses/' + this.route.snapshot.params.id).subscribe(result => {
      this.house = result;
    }, error => console.error(error));
  }

  public editHouse() {
    this.http.put<House>(this.baseUrl + 'api/Houses/'+this.house.id, this.house).subscribe(result => {
      this.router.navigate(['/houses']);
    }, error => console.log(error));
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
