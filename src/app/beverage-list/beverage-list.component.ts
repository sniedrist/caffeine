import { Component } from '@angular/core';
import { beverages } from '../beverages';

@Component({
  selector: 'app-beverage-list',
  templateUrl: './beverage-list.component.html',
  styleUrls: ['./beverage-list.component.css']
})
export class BeverageListComponent {
  displayedColumns= ["name", "description", "caffeine", "servings"];
  beverages = beverages;
  total = 0;

  onBlurEvent() {
    let caffeine: number = 0;
    this.beverages.forEach(beverage => caffeine += (beverage.caffeine * beverage.servings));
    this.total = caffeine;
  }
}