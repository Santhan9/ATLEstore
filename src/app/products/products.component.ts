import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    { name: 'MacBook Pro', price: 1500, imageUrl: 'assets/download (1).jpg' },
    { name: 'MacBook Air', price: 1200, imageUrl: 'assets/mac book air.webp' },
    { name: 'iPhone 12', price: 999, imageUrl: 'assets/download.webp' },
    { name: 'iPad Pro', price: 799, imageUrl: 'assets/mac book air.webp' },
    { name: 'Apple Watch', price: 399, imageUrl: 'assets/apple watch.jpg' },
    { name: 'AirPods Pro', price: 249, imageUrl: 'assets/airpods pro.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


