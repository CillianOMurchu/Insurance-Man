import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';

// firebase modules -- reduce later
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'app/material.module';

// layouts
import { HomeComponent } from 'app/layouts/home/home.component';
import { InsuranceManagerComponent } from 'app/layouts/insurance-manager/insurance-manager.component';
import { NoAccessComponent } from 'app/layouts/no-access/no-access.component';

// components
import { HeaderComponent } from 'app/components/common/header/header.component';
import { FooterComponent } from 'app/components/common/footer/footer.component';
import { LogoComponent } from 'app/components/common/logo/logo.component';
import { SocialButtonComponent } from 'app/components/common/social-button/social-button.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FavouritesModalComponent } from './modals/favourites-modal/favourites-modal.component';
import { FilterInputComponent } from './components/common/filter-input/filter-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsuranceManagerComponent,
    NoAccessComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    SocialButtonComponent,
    ProductsTableComponent,
    FavouritesModalComponent,
    FilterInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  entryComponents: [FavouritesModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
