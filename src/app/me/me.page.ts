import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController, IonItemGroup,ModalController } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import{ LOGINPAGE} from '../login/login.page'
@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MEPAGE  implements OnInit {
  public islogin:boolean;
  public data: any;
   public dataReturned:any
   @ViewChild("loginggroup",{ static: true }) loginggroup:  IonItemGroup;
  constructor(private activeRoute:ActivatedRoute,
    private nav:NavController,
    private httpClient:HttpClient,
    private modalController:ModalController
    ) {

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
    this.islogin=false
 
//alert(111)
}
async openModal(event: any) {
  const modal = await this.modalController.create({
    component: LOGINPAGE,
    componentProps: { //参数
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
      this.islogin=true
      //alert('Modal Sent Data :'+ dataReturned);
    }
  });
  //return await modal.present();
  return await modal.present().then(_ => {
    // triggered when opening the modal
    console.log('Sending: ', );
  });
}

}