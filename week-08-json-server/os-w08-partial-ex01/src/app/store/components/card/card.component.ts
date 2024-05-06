import { Component } from '@angular/core';
import { ApiProductsService } from "../../../shared/services/api-products.service";
import { Product } from "../../model/product.entity";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  products: Product[] = [];

  constructor(private apiProductsService: ApiProductsService) {
  }
  ngOnInit(): void {
    this.apiProductsService.getAllProducts()
      .subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
