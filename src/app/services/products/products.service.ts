import { Injectable } from '@angular/core';
import { ProductModel } from 'app/models/product.model';
import { BehaviorSubject } from 'rxjs';
import { InsuranceProducts } from 'app/services/products/InsuranceProducts.json';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public productsSource = new BehaviorSubject<ProductModel[]>([]);
  public products = this.productsSource.asObservable();

  private favouritesSource = new BehaviorSubject<ProductModel[]>([]);
  public favourites = this.favouritesSource.asObservable();

  constructor() {
    this.productsSource.next(InsuranceProducts);
  }

  rootReducer(state, action) {
    switch (action.type) {
      case 'FAVOURITES_ADD':
        const newFavouritesState = state.concat(action.payload);
        this.favouritesSource.next(newFavouritesState);
        break;
      case 'FAVOURITES_REMOVE':
        this.favouritesSource.next(action.payload);
        break;
      default:
        break;
    }
  }

  addFavourite = products => ({
    type: 'FAVOURITES_ADD',
    payload: products
  });

  removeFavourite = products => ({
    type: 'FAVOURITES_REMOVE',
    payload: products
  });

  addToFavourites(selectedProducts: ProductModel[]) {
    const currentFavourites = this.favouritesSource.getValue();
    const finalSelection = selectedProducts.filter(
      s => currentFavourites.indexOf(s) === -1
    );
    const action = this.addFavourite(finalSelection);
    this.rootReducer(currentFavourites, action);
   
  }

  removeFromFavourites(productsToRemove: ProductModel[]) {
    const currentFavourites = this.favouritesSource.getValue();
    const finalSelection = currentFavourites.filter(
      f => productsToRemove.indexOf(f) === -1
    );
    const action = this.removeFavourite(finalSelection);
    this.rootReducer(currentFavourites, action);
  }
}
