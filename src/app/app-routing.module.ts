import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AllContactsComponent } from './all-contacts/all-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // AllContactsComponent
  {
    path: '' , component: AllContactsComponent
  },
  // AddContactComponent
  {
    path: 'add-contact' , component: AddContactComponent
  },
  // EditContactComponent
  {
    path: 'edit-contact/:id' , component: EditContactComponent
  },
  // ViewContactComponent
  {
    path: 'view-contact/:id' , component: ViewContactComponent
  },
  // PageNotFoundComponent
  {
    path: '**' , component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
