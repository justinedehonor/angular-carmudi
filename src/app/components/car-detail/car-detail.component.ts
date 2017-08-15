import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  private car: Car;
  private test: string;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let id = params['id'];
      this.carService.getCarById(id).subscribe((car: Car) => {
        this.car = car;
        this.car.description = this.excerpt(this.car.description);
      });
      
      // this.excerpt("Wew");
    });
  }

  excerpt(text: string) : string {
    return text.split(" ").splice(0, 35).join(" ");
  }

}
