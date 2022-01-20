import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  {
    path:'child/:id',
    component:ChildComponent
  },
  {
    path:"**",
    component:HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
