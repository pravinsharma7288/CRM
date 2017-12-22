import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupDataComponent } from './signup-data.component';

describe('SignupDataComponent', () => {
  let component: SignupDataComponent;
  let fixture: ComponentFixture<SignupDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
