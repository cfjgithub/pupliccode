import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { myfirstcomponent } from './myfirst.page';
import { from } from 'rxjs';
const routes: Routes = [

  {
    path: '',
    component: myfirstcomponent
  },
  //{
   // path: 'detail',
   // loadChildren:'../detail/detail.module#DetailPageModule'
  //}
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [myfirstcomponent]
})
export class myfirstModule 
{
  constructor() {}
}
