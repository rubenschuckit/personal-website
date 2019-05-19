import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterestComponent } from './components/interest/interest.component';
import { HomeComponent } from './home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

@NgModule({
  declarations: [
    InterestComponent,
    HomeComponent,
    AboutMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule {
}
