import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductType } from '../product/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  
  product: ProductType = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    desc: '',
    status: true
  };
  files = null;

  constructor(
    private productSevice: ProductService,
    private router: Router,
    ) { }

  onFileSlted(event:any){
      this.files = event.taget.file[0];
    }
  ngOnInit(): void {
  }
  
  onAddProduct(){
    const formdata = new FormData();
    // formdata.append('image');
    this.productSevice.addProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    });
  }

}
