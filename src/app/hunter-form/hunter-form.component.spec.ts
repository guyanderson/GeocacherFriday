import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HunterFormComponent } from './hunter-form.component';

describe('HunterFormComponent', () => {
  let component: HunterFormComponent;
  let fixture: ComponentFixture<HunterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HunterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HunterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
