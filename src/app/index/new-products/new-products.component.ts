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

  adidasImageNews: Image[];
  nikeImageNews: Image[];
  //apiLink: "https://localhost:44326/api/products/Get3NewAdidas";
  constructor(private http: HttpClient) {
    this.http.get<Image[]>('https://localhost:44326/api/images/ImgsNewProduct/1').subscribe(result => {
      this.adidasImageNews = result;
    });
    this.http.get<Image[]>('https://localhost:44326/api/images/ImgsNewProduct/2').subscribe(result => {
      this.nikeImageNews = result;
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
