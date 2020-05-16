import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../image';

@Component({
  selector: 'app-representative-products',
  templateUrl: './representative-products.component.html',
  styleUrls: ['./representative-products.component.css']
})
export class RepresentativeProductsComponent implements OnInit {

  imgAdidas: Image;
  imgNike: Image;

  constructor(private http: HttpClient) {
    this.http.get<Image>("https://localhost:44326/api/Images/7").subscribe(
      result =>{
        this.imgAdidas = result;
        this.imgAdidas.imageData = 'data:image/jpg;base64,'+this.imgAdidas.imageData;
      }
    );
    this.http.get<Image>("https://localhost:44326/api/Images/405").subscribe(
      result =>{
        this.imgNike = result;
        this.imgNike.imageData = 'data:image/jpg;base64,'+this.imgNike.imageData;
      }
    );
   }

  ngOnInit() {
  }

}