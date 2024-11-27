import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorregoComponent } from './borrego.component';

describe('BorregoComponent', () => {
  let component: BorregoComponent;
  let fixture: ComponentFixture<BorregoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BorregoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorregoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
