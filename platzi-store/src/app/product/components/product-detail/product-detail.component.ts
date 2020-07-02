import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      /* this.product = this.productsService.getProduct(id); */
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '1',
      title: 'CAMISETA',
      image: 'assets/images/camiseta.png',
      price: 30000,
      description: 'No eliminar para no dañar el curso'
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Product = {
      id: '3',
      title: 'STIKERS1',
      image: 'assets/images/stickers1.png',
      price: 800,
      description: 'No eliminar para no dañar el curso'
    };
    this.productsService.updateProduct('3', updateProduct).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('1').subscribe(rta => {
      console.log(rta);
    });
  }

}
