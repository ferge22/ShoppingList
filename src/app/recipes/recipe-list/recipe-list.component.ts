import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pasta', 'My sweet pasta', 'linkas'),
    new Recipe('Pasta2', 'My sweet pasta2', 'linkas2')
  ];

  constructor() { }

  ngOnInit() {

  }

}
