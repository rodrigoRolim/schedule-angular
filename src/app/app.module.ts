import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ContactsModule } from './contacts/contacts.module';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ContactsModule
  ],
  exports: [ AppComponent ],
  entryComponents: [ AppComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
