import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { ConversionService } from 'src/app/services/conversion.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent  implements OnInit {

  dinar: number = 0;
  dollar: number = 0;

  constructor(private conversionService: ConversionService) { }

  ngOnInit(): void {
  }

  dinarEnDollar(){
    this.dollar = this.conversionService.dinarEnDollar(this.dinar);
  }

  dollarEnDinar(){ 
    this.dinar = this.conversionService.dollarEnDinar(this.dollar);
  }

}

