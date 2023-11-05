import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ProfilePageComponent } from './components/profile_page/profile-page/profile-page.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';
import { FeedPageComponent } from './components/feed-page/feed-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ProfilePageComponent,
    ViewDialogComponent,
    FeedPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
