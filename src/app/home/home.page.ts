import { Component, ViewChild } from '@angular/core';
import { NavController,IonTabs ,ModalController} from '@ionic/angular';
import{ SharePage} from '../share/share.page'
import { RouterModule,Routes,Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataReturned:string;
  
  @ViewChild("homeTabs",{ static: true }) homeTabs: IonTabs;
  constructor(public nav: NavController,public router :Router,
   public  modalController:ModalController)
  
  { }
  goRead(event:any)
  {
     this.router.navigateByUrl("/detail")
  }
  ngAfterViewInit() {
   this.homeTabs.select("about");
  
}

async openModal(event: any) {
  const modal = await this.modalController.create({
    component: SharePage,
    componentProps: { //参数
      'firstName': 'Douglas',
      'lastName': 'Adams',
      'middleInitial': 'N'
    }
  });  
  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned !== null) {
      this.dataReturned = dataReturned.data;
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
