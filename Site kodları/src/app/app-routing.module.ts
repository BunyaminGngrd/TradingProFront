import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './pages/main/main.component';
import { SelectpageComponent } from './pages/selectpage/selectpage.component'; // SelectpageComponent'i ekleyin
import { ChangeComponent } from './pages/change/change.component'; // SelectpageComponent'i ekleyin
import { ChangeallComponent } from './pages/changeall/changeall.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'',
    component:LayoutComponent,
    children:  [
      {
        path:'main',
        component: MainComponent
      },
      {
        path:'select',
        component: SelectpageComponent // SelectpageComponent yolunu ekleyin
      },
      {
        path:'change',
        component: ChangeComponent // SelectpageComponent yolunu ekleyin
      },
      {
        path:'changeall',
        component: ChangeallComponent // SelectpageComponent yolunu ekleyin
      }
    ]
  },
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
