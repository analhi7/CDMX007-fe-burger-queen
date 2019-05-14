import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesyunosComponent } from './desyunos.component';

describe('DesyunosComponent', () => {
  let component: DesyunosComponent;
  let fixture: ComponentFixture<DesyunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesyunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesyunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
