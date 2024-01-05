import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionPageComponent } from './pages/section-page/section-page.component';
import { TimePageComponent } from './pages/time-page/time-page.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MenuComponent,
    SectionPageComponent,
    TimePageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
