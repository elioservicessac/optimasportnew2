import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [

  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('../pages/schedule/schedule.module').then(m => m.SchedulePageModule)
      },
      {
        path: 'support',
        loadChildren: () => import('../pages/support/support.module').then(m => m.SupportPageModule)
      },
      {
        path: 'tutorial',
        loadChildren: () => import('../pages/tutorial/tutorial.module').then(m => m.TutorialPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../pages/account/account.module').then(m => m.AccountPageModule)
      },

    ]
  },

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
