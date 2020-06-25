import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule,Routes } from '@angular/router';

import { aboutPage } from './about.page';


const routes: Routes = [
  {
    path: '',
    component: aboutPage,
    
  }
    ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
   
   /**  RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
     
    ])*/
  ], 
  declarations: [aboutPage]
})
export class aboutPageModule {
  constructor() {}
   

}
