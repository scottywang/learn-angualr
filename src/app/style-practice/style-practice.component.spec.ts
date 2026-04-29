import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePracticeComponent } from './style-practice.component';

describe('StylePracticeComponent', () => {
  let component: StylePracticeComponent;
  let fixture: ComponentFixture<StylePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylePracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
