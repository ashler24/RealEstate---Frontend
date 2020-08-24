import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor(public service: DataService, public router: Router) { }

  ngOnInit() {
  }

  AddFlat()
  { 
    this.router.navigate(['/addflat'])
  }

  AddHouse()
  { 
    this.router.navigate(['/addhouse'])
  }

  ShowFlat()
  { 
    this.router.navigate(['/showflat'])
  }

  ShowHouse()
  { 
    this.router.navigate(['/showhouse'])
  }

}
