import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { AboutSiteComponent } from './about/about-site.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-site', component: AboutSiteComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
