/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { EditTenantComponent } from './edit-tenant.component';

let component: EditTenantComponent;
let fixture: ComponentFixture<EditTenantComponent>;

describe('editTenant component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditTenantComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(EditTenantComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});