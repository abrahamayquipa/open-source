import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './store/pages/home/home.component';
import { BundlesComponent } from './store/pages/bundles/bundles.component';
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import { MatToolbar } from "@angular/material/toolbar";
import { NotFoundComponent } from './public/pages/not-found/not-found.component';
import { CardComponent } from './store/components/card/card.component';
import { MatCard } from "@angular/material/card";
import { MatCardImage } from "@angular/material/card";
import { MatCardTitle } from "@angular/material/card";
import { MatCardSubtitle } from "@angular/material/card";
import { MatCardContent } from "@angular/material/card";
import { ProductFormComponent} from "./store/components/product-form/product-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BundlesComponent,
    ToolbarComponent,
    NotFoundComponent,
    CardComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbar,
    MatCard,
    MatCardImage,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
