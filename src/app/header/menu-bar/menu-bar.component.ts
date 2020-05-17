import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../../image';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  adidasMenuImg: Image;
  nikeMenuImg: Image;
  pumaMenuImg: Image;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Image>('https://demacia-shop.azurewebsites.net/api/Images/ImgsMenuAdidas').subscribe(result =>{
      this.adidasMenuImg=result;
      this.adidasMenuImg.imageData = 'data:image/jpg;base64,'+this.adidasMenuImg.imageData;
    });
    this.http.get<Image>('https://demacia-shop.azurewebsites.net/api/Images/ImgsMenuNike').subscribe(result =>{
      this.nikeMenuImg=result;
      this.nikeMenuImg.imageData = 'data:image/jpg;base64,'+this.nikeMenuImg.imageData;
    });
    //this.http.get<Image>('https://localhost:44326/api/Images/ImgsMenuPuma').subscribe(result =>{
    //  this.nikeMenuImg=result;
   // });
  }

}