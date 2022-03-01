import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  constructor() { }

  dinarEnDollar(dinar: number): number {
    let dollar = Math.round((dinar * 2.30)*100)/100;
    return dollar;
  }
    
  dollarEnDinar(dollar: number): number { 
    let dinar = Math.round((dollar * 0.43)*100)/100;
    return dinar;
  }

  kiloEnMetre(kilo: number): number {
    let metre = Math.round((kilo * 1000) * 100) / 100;
    return metre;
  }

  metreEnKilo(metre: number): number {
    let kilo = Math.round((metre * 0.001)* 100) / 100;
    return kilo;
  }
  

}