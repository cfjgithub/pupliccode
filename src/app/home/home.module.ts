import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule,Routes } from '@angular/router';

import { HomePage } from './home.page';
import{SharePageModule}from '../share/share.module'
import { from } from 'rxjs';
import { MePageModule } from '../me/me.module';


const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'my',
        children: [
          {
            path: '',
            loadChildren:()=>import('../mypage/myfirst.module').then(m=>m.myfirstModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren:()=>import('../about/about.module').then(m=>m.aboutPageModule)
          }
        ]
      },
      {
        path: 'me',
        children: [
          {
            path: '',
            loadChildren:()=>import('../me/me.module').then(m=>MePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '../mypage/myfirst',
        pathMatch: 'full'
      }
    ]
  }
    ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharePageModule,
    RouterModule.forChild(routes)
   
   /**  RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
     
    ])*/
  ], 
  declarations: [HomePage]
})
export class HomePageModule {

  

}
