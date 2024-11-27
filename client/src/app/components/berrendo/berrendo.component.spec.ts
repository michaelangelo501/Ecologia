import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerrendoComponent } from './berrendo.component';

describe('BerrendoComponent', () => {
  let component: BerrendoComponent;
  let fixture: ComponentFixture<BerrendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerrendoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerrendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
