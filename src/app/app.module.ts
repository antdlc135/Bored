import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { ActivityModule } from './modules/activity/activity.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule, SharedModule, ActivityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
