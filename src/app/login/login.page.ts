import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
@Component({
  selector: 'app-me',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LOGINPAGE  implements OnInit {
  public data: any;
  id:number;
  constructor(

    private http: HTTP,
    private modalController:ModalController
    
    ) {

  }

  content="";
  ngOnInit(){
   // this.id = this.activatedRoute.snapshot.params["id"];
    }

     async  update()
    {
      this.http.post(
        'https://google.com/',             //URL
        {id: 12, message: 'test'},         //Data 
        { Authorization: 'OAuth2: token' } // Headers
       )
       .then(response => {
          // prints 200
          console.log(response.status);
          try {
            response.data = JSON.parse(response.data);
            // prints test
            console.log(response.data.message);
          } catch(e) {
            console.error('JSON parsing error');
          }
       })
       .catch(response => {
         // prints 403
         console.log(response.status);
   
         // prints Permission denied
         console.log(response.error);
       });


        const onClosedData: string = "Wrapped Up!";
         await this.modalController.dismiss(onClosedData);
         await this.modalController.dismiss();
     

    }
}