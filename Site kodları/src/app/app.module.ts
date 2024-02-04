// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';
import { DataService } from './pages/main/data.service'; // DataService'yi ekleyin
import { SelectpageComponent } from './pages/selectpage/selectpage.component';
import { ChangeComponent } from './pages/change/change.component';
import { ChangeallComponent } from './pages/changeall/changeall.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    MainComponent,
    SelectpageComponent,
    ChangeComponent,
    ChangeallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService], // DataService'yi burada ekleyin
  bootstrap: [AppComponent]
})
export class AppModule { }
