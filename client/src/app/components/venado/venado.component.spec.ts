import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenadoComponent } from './venado.component';

describe('VenadoComponent', () => {
  let component: VenadoComponent;
  let fixture: ComponentFixture<VenadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
