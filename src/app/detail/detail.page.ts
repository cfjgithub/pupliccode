import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss']
})
export class DETAILPAGE  implements OnInit {
  public data: any;
  constructor(private activeRoute:ActivatedRoute,
    private nav:NavController,
    private httpClient:HttpClient) {

  }
  httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
     // 返回按钮
     canGoBack() {
      this.nav.back();
    }
  content="";
  ngOnInit(){
    this.activeRoute.queryParams.subscribe(params => {
      this.data = params.title;
    this.httpClient.
            get<string>("http://后端接口地址:8080/bk/pages?key="+this.data
      ,this.httpOptions).subscribe
      (
        res=>
        {
          console.log(res);
          this.content=res;//JSON.parse(res.toString()).data.content
        }
      )
      });
    }
}