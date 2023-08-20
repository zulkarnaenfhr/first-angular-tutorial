import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Containers/HomePage/HomePage.component';
import { AboutPageComponent } from './Containers/about-page/about-page.component';
import { DetailsComponent } from './Containers/details/details.component';
import { ErrorComponentComponent } from './Containers/error-component/error-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
