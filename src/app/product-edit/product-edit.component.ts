import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductType } from '../product/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: ProductType = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    desc: '',
    status: true
  };
  constructor(
    private productService:ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo() {
    this.activatedRoute.params.subscribe(params => {
      this.productService.get(params.id).subscribe(data => {
        this.product = data;
      });
    });
  }
  onUpdateProduct() {
    this.productService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    });
  }
}
