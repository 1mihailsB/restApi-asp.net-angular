import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { TenantsComponent } from './tenants/tenants.component';
import { CreateTenantComponent } from './tenants/create-tenant/create-tenant.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { CreateApartmentComponent } from './apartments/create-apartment/create-apartment.component';
import { EditApartmentComponent } from './apartments/edit-apartment/edit-apartment.component'
import { HousesComponent } from './houses/houses.component';
import { CreateHouseComponent } from './houses/create-house/create-house.component'
import { EditHouseComponent } from './houses/edit-house/edit-house.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    TenantsComponent,
    CreateTenantComponent,
    ApartmentsComponent,
    CreateApartmentComponent,
    EditApartmentComponent,
    HousesComponent,
    CreateHouseComponent,
    EditHouseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'tenants', component: TenantsComponent },
      { path: 'create-tenant', component: CreateTenantComponent },
      { path: 'apartments', component: ApartmentsComponent },
      { path: 'create-apartment', component: CreateApartmentComponent },
      { path: 'edit-apartment/:id', component: EditApartmentComponent},
      { path: 'houses', component: HousesComponent },
      { path: 'create-house', component: CreateHouseComponent },
      { path: 'edit-house/:id', component: EditHouseComponent }
    ]),
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
