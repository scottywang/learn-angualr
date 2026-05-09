import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RwdLayoutComponent } from './rwd-layout.component';

describe('RwdLayoutComponent', () => {
  let component: RwdLayoutComponent;
  let fixture: ComponentFixture<RwdLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RwdLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RwdLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
