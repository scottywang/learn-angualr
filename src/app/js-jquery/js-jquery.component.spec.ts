import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsJqueryComponent } from './js-jquery.component';

describe('JsJqueryComponent', () => {
  let component: JsJqueryComponent;
  let fixture: ComponentFixture<JsJqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsJqueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsJqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
