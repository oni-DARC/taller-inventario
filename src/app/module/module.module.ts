import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { AppRoutingModule } from '../app.routes';  
import { AppComponent } from '../app.component';  
import { DashboardComponent } from '../components/dashboard/dashboard.component'; 
import { LoginComponent } from '../components/login/login.component';  

@NgModule({
  declarations: [
    // AppComponent,
    DashboardComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Asegúrate de que FormsModule esté en imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }