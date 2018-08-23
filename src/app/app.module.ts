import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupComponent } from './group/group.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { GroupPipe } from './group.pipe';
import { FilterPipe } from './filter.pipe';
import { GroupDetailComponent } from './group-detail/group-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    GroupComponent,
    PageNotFoundComponent,
    ContactDetailComponent,
    GroupPipe,
    FilterPipe,
    GroupDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
