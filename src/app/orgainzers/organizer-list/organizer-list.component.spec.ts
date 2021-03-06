import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerListComponent } from './organizer-list.component';

describe('OrganizerListComponent', () => {
  let component: OrganizerListComponent;
  let fixture: ComponentFixture<OrganizerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
