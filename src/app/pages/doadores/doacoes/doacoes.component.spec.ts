import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacoesComponent } from './doacoes.component';

describe('DoacoesComponent', () => {
  let component: DoacoesComponent;
  let fixture: ComponentFixture<DoacoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoacoesComponent]
    });
    fixture = TestBed.createComponent(DoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
