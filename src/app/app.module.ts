import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LogoComponent } from "./logo/logo.component";
import { TitleComponent } from "./title/title.component";

@NgModule({
  declarations: [AppComponent, TitleComponent, LogoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
