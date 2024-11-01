import { Component } from '@angular/core';
import { ProduitComponent } from "./produit/produit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProduitComponent]
})
export class AppComponent {
  title = 'factures';
}
