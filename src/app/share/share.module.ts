import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule,Routes } from '@angular/router';

import { SharePage } from './share.page';


const routes: Routes = [
  {
    path: 'share',
    component: SharePage,
    
  }
    ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
 
  ], 
  declarations: [SharePage]
})
export class SharePageModule {
  constructor() {}
   

}
