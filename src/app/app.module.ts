import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnePlayerComponent } from './games/one-player/one-player.component';
import { TwoPlayerComponent } from './games/two-player/two-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnePlayerComponent,
    TwoPlayerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
