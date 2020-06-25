
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonTabButton, IonTabs, IonSegment, 
  IonSlides ,ModalController} from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule,Routes,Router } from '@angular/router';

import { from } from 'rxjs';


@Component({
  selector:'my-first',
  templateUrl:'myfirst.page.html'
})

export class myfirstcomponent implements OnInit
{
  @ViewChild("cateorySegment",{ static: true }) cateorySegment:  IonSlides;
  segment = 0;  
  messages = [
        {'id' : 1},
        {'id' : 2},
    
] ;
  categories=[];
   httpOptions = {
    headers: new HttpHeaders({'content-Type': 'application/json'})
  };
   titles=[]
   constructor(private httpClient: HttpClient,private nav:NavController,
    private router:Router,private modalController :ModalController) {
  }
   // 返回按钮
   canGoBack() {
    this.nav.back();
  }
  swipeEvnet(event) {
    //向左滑
    if (event.direction == 2) {
      if (this.titles.indexOf(this.segment) < 3) {
        this.segment = this.titles[this.titles.indexOf(this.segment) + 1];
    }
    //向右滑}}
    if (event.direction == 4) {
      if (this.titles.indexOf(this.segment) > 0) {
        this.segment = this.titles[this.titles.indexOf(this.segment) - 1];
      }
    }
  }
}

  goDetail(title:any)
  {

    console.log(title);
    this.router.navigate(['/detail'], {
      queryParams: {
        title: title 
      }
    });
   
  }


  async segmentChanged(ev: any) {  
    await this.cateorySegment.slideTo(this.segment);  
  
  }  
  async slideChanged() {  
    this.segment = await this.cateorySegment.getActiveIndex();  
  }  
  ngOnInit()
  {


        this.httpClient.
        get<[]>("http://后端接口地址:8080/bk/categories"
  ,this.httpOptions).subscribe
  (
    res=>
    {

        console.log(res);
        this.categories=res;
        console.log(this.categories)
        this.titles=JSON.parse( this.categories.find(p=>p.key==='general').list);
      
    }

  
  );
  this.segment=1;
  }
  ionViewDidLoad() {
    //this.cateoryTabs.select(1, { animate: false });
}
  ngAfterViewInit() {

  
    }
  
  doOnClick(key: any)
  {   
      //  console.log('====='+this.categories.find(p=>p.key===key));
       this.titles=JSON.parse( this.categories.find(p=>p.key===key).list);
     //  console.log(this.titles)

  }


}
interface Thingy {
	data: any;
}
