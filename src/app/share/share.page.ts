import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss']
})
export class SharePage implements OnInit {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;
  constructor(private modalController: ModalController
   )
    
   {
    //alert(this.navParams.get('firstName'))
   }
  ngOnInit() {
    //alert(this.firstName)
 
  }
  
  async closeModal() {
   const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
    await this.modalController.dismiss();
  }
}
