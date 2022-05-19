import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule , IonicRouteStrategy } from '@ionic/angular';
// import { IonicStorageModule } from '@ionic/storage';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { RouteReuseStrategy } from '@angular/router';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy,
     useClass: IonicRouteStrategy },
     YoutubeVideoPlayer],
  bootstrap: [AppComponent],
})
export class AppModule {}
