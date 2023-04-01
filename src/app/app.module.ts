import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './compnts/app/app.component';
import { ArticleComponent } from './compnts/article/article.component';
import { TopNavComponent } from './compnts/top-nav/top-nav.component';
import { MainComponent } from './compnts/main/main.component';
import { CardHomeComponent } from './compnts/card-home/card-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TopNavComponent,
    MainComponent,
    CardHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
