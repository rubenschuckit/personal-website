import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InterestComponent } from "./components/interest/interest.component";
import { HomeComponent } from "./home.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [InterestComponent, HomeComponent, AboutMeComponent],
  imports: [CommonModule, RouterModule]
})
export class HomeModule {
}
