import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipsComponent } from './my-components/tips/tips.component';
import { TipsListComponent } from './my-components/tips-list/tips-list.component';
import { AddTipComponent } from './my-components/add-tip/add-tip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TipsComponent,
    TipsListComponent,
    AddTipComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
