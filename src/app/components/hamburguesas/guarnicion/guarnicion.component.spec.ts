import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarnicionComponent } from './guarnicion.component';

describe('GuarnicionComponent', () => {
  let component: GuarnicionComponent;
  let fixture: ComponentFixture<GuarnicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarnicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarnicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
