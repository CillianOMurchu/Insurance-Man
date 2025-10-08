import { Component, OnInit } from '@angular/core';
import { ProductsViews } from 'app/models/product-views.model';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ProductsService } from 'app/services/products/products.service';
@Component({
  selector: 'app-favourites-modal',
  templateUrl: './favourites-modal.component.html',
  styleUrls: ['./favourites-modal.component.scss']
})
export class FavouritesModalComponent implements OnInit {
  productsView = ProductsViews.FAVOURITES;
  isEmpty = false;

  constructor(
    public dialogRef: MatDialogRef<FavouritesModalComponent>,
    public dialog: MatDialog,
    public productsService: ProductsService
  ) {
    this.dialog = dialog;
  }

  ngOnInit() {
    this.productsService.favourites.subscribe(res => this.isEmpty = res.length === 0);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
