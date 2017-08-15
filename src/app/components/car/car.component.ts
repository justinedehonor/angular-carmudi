  import { Component, OnInit, EventEmitter } from '@angular/core';
  import { CarService } from '../../services/car.service';
  import { Car } from '../../interfaces/car';
  import { Router } from '@angular/router';

  @Component({
    selector: 'app-car',
    templateUrl: './car.component.html',
    styleUrls: ['./car.component.css']
  })
  export class CarComponent implements OnInit {
    
    private cars: Car[];
    private currentPage: number = 1;
    // private pageChange: EventEmitter<number>;
    
    constructor(private carService: CarService, private router: Router) { }
    
    ngOnInit() {
      this.carService.getAllCars().subscribe((cars: Car[]) => this.cars = cars);
    }
    
    onClick(car: Car) : void {
      this.router.navigate(['/cars', car.id]);
    }
    
  }
