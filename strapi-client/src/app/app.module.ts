import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ItemComponent } from './collection/item/item.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { GdprComponent } from './gdpr/gdpr.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    ItemComponent,
    AboutComponent,
    ContactComponent,
    PrivacyComponent,
    TermsComponent,
    GdprComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
