import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule

@Component({
  selector: 'app-produit',
  standalone: true,
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
  imports: [CommonModule] // Ajouter CommonModule ici
})
export class ProduitComponent implements OnInit {
  produits: any[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((data: any[]) => {
      this.produits = data;
    });
  }
}