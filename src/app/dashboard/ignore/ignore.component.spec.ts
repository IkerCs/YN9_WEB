import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgnoreComponent } from './ignore.component';

describe('IgnoreComponent', () => {
  let component: IgnoreComponent;
  let fixture: ComponentFixture<IgnoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgnoreComponent]
    });
    fixture = TestBed.createComponent(IgnoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
