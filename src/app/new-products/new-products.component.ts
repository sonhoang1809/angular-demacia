import { Component, OnInit } from "@angular/core";
import { Image } from "../image";
import { HttpClient } from "@angular/common/http";
import { Product } from "../product";
//import 'rxjs/add/operator/map'
//import { Http , Response} from "@angular/http";

@Component({
  selector: "app-new-products",
  templateUrl: "./new-products.component.html",
  styleUrls: ["./new-products.component.css"]
})
export class NewProductsComponent implements OnInit {

  adidasNews: Product[];
  nikeNews: Product[];
  //apiLink: "https://localhost:44326/api/products/Get3NewAdidas";
  constructor(private http: HttpClient) {
    this.http.get<Product[]>('https://localhost:44326/api/products/Get3NewAdidas').subscribe(result => {
      this.adidasNews = result;
    });
    this.http.get<Product[]>('https://localhost:44326/api/products/Get3NewNike').subscribe(result => {
      this.nikeNews = result;
    });
  }

  // getData() {
  //   return this.http
  //     .get(this.apiLink)
  //     .map((response: Response) => response.json);
  // }
  // getImages() {
  //   this.getData().subscribe(result => {
  //     console.log(result);
  //     this.img = result;
  //   });
  // }

  ngOnInit() {
    
  }
}
