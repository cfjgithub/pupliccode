import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MePageModule } from './me/me.module';
import { LOGINPageModule } from './login/login.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path:'my',
    loadChildren:()=>import('./mypage/myfirst.module').then(m=>m.myfirstModule)
  },
  {
    path:'detail',
    loadChildren:()=>import('./detail/detail.module').then(m=>m.DetailPageModule)
  }, {
    path:'about',
    loadChildren:()=>import('./about/about.module').then(m=>m.aboutPageModule)
  }
  , {
    path:'me',
    loadChildren:()=>import('./me/me.module').then(m=>MePageModule)
  }
  //{
    //path:'login/:id',
    //loadChildren:()=>import('./login/login.module').then(m=>LOGINPageModule)
  //}//
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
