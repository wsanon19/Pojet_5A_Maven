import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeanComponent } from './jean.component';

describe('JeanComponent', () => {
  let component: JeanComponent;
  let fixture: ComponentFixture<JeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
