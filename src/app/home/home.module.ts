import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { InterestComponent } from './components/interest/interest.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AboutMeComponent,
    InterestComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
