import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../interfaces/car';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cars: Car[], term: any): any {
    // check if search term is undefined
    if (term === undefined) return cars; 
    
    // return update cars array
    return cars.filter((car: Car) => car.name.toLowerCase().includes(term.toLowerCase()));
  }

}
