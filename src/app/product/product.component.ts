import { Component, OnInit } from '@angular/core';
import { ProductType } from './product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductType[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.productService.getList().subscribe(data => {
      console.log(data)
      this.products = data;
    });
  }
  onHandleRemove(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.productService.getList().subscribe(data => {
        // console.log(data)
        this.products = data;
      });
    });
  }

}
