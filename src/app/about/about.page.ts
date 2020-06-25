import { Component,ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';
import { RouterModule,Routes,Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class aboutPage {

  titles=
  [
   {"title":"实践中的微服务:从架构到自动化运维（结束篇）","imgUrl":"../assets/img/wfw.png"},
   {"title":"物联网架构","imgUrl":"../assets/img/iot.png"},
   {"title":"hdfs","imgUrl":"../assets/img/hdfs.png"}
 
  ]

 
  @ViewChild('mySlider',{static:true}) slides: IonSlides;
  mySlideOptions = {
    initialSlide: 1,
    loop: true,
    pager:true
  };

  constructor(public nav: NavController,public router :Router) { }
  public ngOnInit() {
 
}
slideChanged() { 
  this.slides.getActiveIndex().then(index => {
   //  alert(index)
  });
}
user_ionSlideTap(event:any,title:any)
  {

     this.router.navigate(['/detail'], {
      queryParams: {
        title: title
      }
    });
  
}
  
 
}
