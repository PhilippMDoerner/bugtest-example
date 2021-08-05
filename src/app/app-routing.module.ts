import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstChildComponent } from './Components/first-child-component';
import { SecondChildComponent } from './Components/second-child-component';

const routes: Routes = [
  {
    path: `firstchild`,
    component: FirstChildComponent
  },
  {
    path: `secondchild`,
    component: SecondChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
