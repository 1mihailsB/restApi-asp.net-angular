/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditHouseComponent } from './edit-house.component';

let component: EditHouseComponent;
let fixture: ComponentFixture<EditHouseComponent>;

describe('editHouse component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditHouseComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditHouseComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});