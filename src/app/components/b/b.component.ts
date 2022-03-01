import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';


@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  kilo: number = 0;
  metre: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  kiloEnMetre(){
    this.kilo = this.conversionService.kiloEnMetre(this.kilo);
  }

  metreEnKilo(){ 
    this.metre = this.conversionService.metreEnKilo(this.metre);
  }

}