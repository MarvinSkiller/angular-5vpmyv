import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './core/material.module';
import {MAT_SNACK_BAR_DATA} from '@angular/material';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTemplateComponent } from './template/main-template/main-template.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { MainMenuComponent } from './template/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './sevices/authentication.service';
import { AuthGuard } from './core/auth.guard';
import { RegisterMemberComponent } from './view/register-member/register-member.component';
import { MemberService } from './sevices/member.service';
import { MessageComponent } from './view/message/message.component';
import { PaymentComponent } from './view/payment/payment.component';
import { PaymentService } from './sevices/payment.service';
import { MembersComponent } from './view/members/members.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    MainMenuComponent,
    RegisterMemberComponent,
    MessageComponent,
    PaymentComponent,
    MembersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthenticationService, 
    AuthGuard, 
    MemberService, 
    AngularFirestore,
    PaymentService,
    { provide: MAT_SNACK_BAR_DATA, useValue: {} }
  ],
  entryComponents: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
