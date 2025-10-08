import { Component } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { ProductsViews } from 'app/models/product-views.model';

@Component({
  selector: 'app-insurance-manager',
  templateUrl: './insurance-manager.component.html',
  styleUrls: ['./insurance-manager.component.scss']
})
export class InsuranceManagerComponent {
  productsView = ProductsViews.PRODUCTS;

  constructor(public auth: AuthService) {}
}
