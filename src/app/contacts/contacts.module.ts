import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { SharedComponent } from './shared/shared.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ContactsComponent,
    SharedComponent,
    ContactListComponent,
    ContactComponent
  ],
  declarations: [
    ContactsComponent,
    SharedComponent,
    ContactListComponent,
    ContactComponent
  ]
})
export class ContactsModule { }
