import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HunterFormComponent } from './hunter-form/hunter-form.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [

   {
      path: '',
      component: WelcomeComponent
   },
   {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'form',
      component: HunterFormComponent
   },
   {
      path: 'admin',
      component: AdminComponent
   }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
