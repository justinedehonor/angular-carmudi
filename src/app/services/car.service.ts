import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../interfaces/car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  constructor(private http: Http) { }

  getAllCars() : Observable<Car[]> {
    return this.http.get('http://localhost:3000/cars/').map((response: Response) => response.json());
  }

  getCarById(id: Number) : Observable<Car> {
    return this.http.get(`http://localhost:3000/cars/${id}`).map((response: Response) => response.json());
  }

}
