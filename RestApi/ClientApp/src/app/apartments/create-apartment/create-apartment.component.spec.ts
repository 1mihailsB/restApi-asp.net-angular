/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CreateApartmentComponent } from './create-apartment.component';

let component: CreateApartmentComponent;
let fixture: ComponentFixture<CreateApartmentComponent>;

describe('createApartment component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateApartmentComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CreateApartmentComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});