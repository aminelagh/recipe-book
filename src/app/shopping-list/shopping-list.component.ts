import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {

  private items: Ingredient[] = [];

  constructor(private sls: ShoppingListService) {
  }

  ngOnInit(): void {
    this.items = [];
    this.items = this.sls.getIgredients();
  }

}
