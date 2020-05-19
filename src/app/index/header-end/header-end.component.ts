import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Image } from '../image';

@Component({
  selector: 'app-header-end',
  templateUrl: './header-end.component.html',
  styleUrls: ['./header-end.component.css']
})
export class HeaderEndComponent implements OnInit {

  ListNike: Image[];
  constructor(private http: HttpClient) {
    
  }
  private settingImg(){
    var prod;
    for(prod of this.ListNike){
      prod.imageData = 'data:image/jpg;base64,'+ prod.imageData;
    }
  }
  ngOnInit() {
    this.http.get<Image[]>('https://demacia-shop.azurewebsites.net/api/Images/ImgsProduct/64').subscribe(result =>{
      this.ListNike = result;
      this.settingImg();
    })
  }

}