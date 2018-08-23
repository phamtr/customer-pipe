import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';


const routes: Routes = [
  { path: 'detail/:id/:name/:phoneNumber', component: ContactDetailComponent },
  { path: 'group', component: GroupComponent},
  { path: 'group-detail', component: GroupDetailComponent},
  { path: 'contacts/:nhom', component: ContactsComponent},
  { path: '', redirectTo: '/group', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
