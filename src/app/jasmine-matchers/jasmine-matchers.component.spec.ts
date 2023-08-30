import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasmineMatchersComponent } from './jasmine-matchers.component';

describe('JasmineMatchersComponent', () => {
  let component: JasmineMatchersComponent;
  let fixture: ComponentFixture<JasmineMatchersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JasmineMatchersComponent]
    });
    fixture = TestBed.createComponent(JasmineMatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
