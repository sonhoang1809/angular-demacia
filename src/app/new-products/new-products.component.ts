import { Component, OnInit } from "@angular/core";
import { Image } from "../image";
import { HttpClient } from "@angular/common/http";
//import 'rxjs/add/operator/map'
//import { Http , Response} from "@angular/http";

@Component({
  selector: "app-new-products",
  templateUrl: "./new-products.component.html",
  styleUrls: ["./new-products.component.css"]
})
export class NewProductsComponent implements OnInit {
  topImg: Image[];
  img: any = {};
  apiLink: "https://demacia-shop.azurewebsites.net/api/news";
  constructor(private http: HttpClient) {
    this.http.get<Image[]>(this.apiLink).subscribe(result => {
      this.topImg = result;
    });
    //console.log(this.topImg);
    //this.getImages();
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

  ngOnInit() {}
}
