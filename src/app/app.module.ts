import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRippleModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';

import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';

import { EditComponent } from './edit/edit.component';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { NeedAuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    AddUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatBadgeModule,
    RouterModule.forRoot([
      { path: '', component: AddComponent }, // if there is nothing to show it;ll show this (the homepage-product list)
      { path: 'list', component: ListComponent,  },
      { path: 'stuffs/edit/:stuffId', component: EditComponent, },
      { path: 'adduser', component: AddUserComponent },
      { path: 'login', component: LoginComponent },
      ])
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent],
  exports: [MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule]
})
export class AppModule { }

