/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditApartmentComponent } from './edit-apartment.component';

let component: EditApartmentComponent;
let fixture: ComponentFixture<EditApartmentComponent>;

describe('editApartment component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditApartmentComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditApartmentComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});