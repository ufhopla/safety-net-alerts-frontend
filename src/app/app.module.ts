import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { ProfileComponent } from './pages/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirestationUrlComponent } from './pages/url-page/firestation-url/firestation-url.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BoardMedicalAssistComponent } from './pages/board-medical-assist/board-medical-assist.component';
import { MailByCityComponent } from './pages/mail-by-city/mail-by-city.component';
import { FirestationsComponent } from './pages/firestations/firestations.component';
import { UrlFindByNameComponent } from './pages/url-page/url-find-by-name/url-find-by-name.component';
import { ChildAlertComponent } from './pages/child-alert/child-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    HomeComponent,
    FirestationUrlComponent,
    PageNotFoundComponent,
    BoardMedicalAssistComponent,
    MailByCityComponent,
    ChildAlertComponent,
    FirestationsComponent,
    UrlFindByNameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
