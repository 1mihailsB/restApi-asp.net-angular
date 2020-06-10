/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { CreateHouseComponent } from './create-house.component';

let component: CreateHouseComponent;
let fixture: ComponentFixture<CreateHouseComponent>;

describe('createHouse component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CreateHouseComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(CreateHouseComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});