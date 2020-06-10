/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TenantsComponent } from './tenants.component';

let component: TenantsComponent;
let fixture: ComponentFixture<TenantsComponent>;

describe('Tenants component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TenantsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TenantsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});