/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ApartmentsComponent } from './apartments.component';

let component: ApartmentsComponent;
let fixture: ComponentFixture<ApartmentsComponent>;

describe('apartments component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ApartmentsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ApartmentsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});