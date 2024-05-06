import { Component } from '@angular/core';
import { ApiProductsService } from "../../../shared/services/api-products.service";
import { Product } from "../../model/product.entity";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  products: Product[] = [];
  product: any = {};
  addIsDisable: boolean = false;
  updateIsDisable: boolean = true;

  constructor(private apiProductsService: ApiProductsService) { }

  ngOnInit() {
    this.apiProductsService.getAllProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  getProductById(id: number) {
    this.apiProductsService.getProductById(id)
      .subscribe((product: Product) => {
        this.product = product;
      });
    this.updateIsDisable = false;
    this.addIsDisable = true;
  }

  createProduct() {
    this.apiProductsService.create(this.product)
      .subscribe((response: Product) => {
        console.log('Product created successfully', response);
        this.products.push(response);
      });
  }

  deleteProduct(id: number) {
    this.apiProductsService.delete(id)
      .subscribe(() => {
        this.products = this.products.filter(product => product.id!== id);
      });
  }

  updateProduct(id: number, newProduct: Product) {
    const index = this.products.findIndex(product => product.id === id);
    if (index!== -1) {
      this.products[index] = newProduct;
      if (this.products[index].id === id) {
        this.apiProductsService.update(id, newProduct).subscribe(
          (response: Product) => {
            console.log('Product updated successfully', response);
          },
          (error) => {
            console.error('Failed to update product', error);
          }
        );
      }
      this.addIsDisable = false;
      this.updateIsDisable = true;
    } else {
      console.log('No product found with the specified ID.');
    }
  }


}
