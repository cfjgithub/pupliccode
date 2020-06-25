import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { LOGINPAGE } from './login.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
    RouterModule.forChild([
      {
        path: 'login',
        component: LOGINPAGE
      }
    ])
  ],
  declarations: [LOGINPAGE]
})
export class LOGINPageModule {
  constructor() {}
}
