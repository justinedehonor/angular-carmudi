import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

import { CarService } from './services/car.service';

import { FilterPipe } from './pipes/filter.pipe';

const routes = [
  { path: '', component: CarComponent },
  { path: 'cars/:id', component: CarDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
