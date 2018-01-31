import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackDashboardComponent } from './stack-dashboard.component';

describe('StackDashboardComponent', () => {
  let component: StackDashboardComponent;
  let fixture: ComponentFixture<StackDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
