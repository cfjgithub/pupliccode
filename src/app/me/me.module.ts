import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import {LOGINPageModule} from '../login/login.module'
import { MEPAGE } from './me.page';

const routes: Routes = [
  {
    path: '',
    component: MEPAGE
  }
    ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild(routes),
    LOGINPageModule
  ],
  declarations: [MEPAGE]
})
export class MePageModule {
  constructor() {}
}
