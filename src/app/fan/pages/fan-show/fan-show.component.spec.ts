import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanShowComponent } from './fan-show.component';

describe('FanShowComponent', () => {
  let component: FanShowComponent;
  let fixture: ComponentFixture<FanShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FanShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
