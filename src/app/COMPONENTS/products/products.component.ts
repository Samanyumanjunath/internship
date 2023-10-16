import { Component, OnInit } from '@angular/core';
import { MOCK_PRODUCTS } from './products'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = MOCK_PRODUCTS;

  constructor() {}

  ngOnInit(): void {}
}
