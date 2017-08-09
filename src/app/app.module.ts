import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarService } from './services/car.service';
import { NgxPaginationModule } from 'ngx-pagination';

const routes = [
  { path: '', component: CarComponent },
  { path: 'cars/:id', component: CarDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
