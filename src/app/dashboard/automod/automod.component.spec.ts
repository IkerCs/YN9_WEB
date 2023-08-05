import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomodComponent } from './automod.component';

describe('AutomodComponent', () => {
  let component: AutomodComponent;
  let fixture: ComponentFixture<AutomodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomodComponent]
    });
    fixture = TestBed.createComponent(AutomodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
