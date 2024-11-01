import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitComponent } from './produit.component';

describe('ProduitComponent', () => {
  let component: ProduitComponent;
  let fixture: ComponentFixture<ProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});