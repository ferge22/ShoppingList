import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pasta', 'My sweet pasta', 'https://i.pinimg.com/originals/7d/62/9d/7d629d29f89b134033f97bb981f613be.jpg'),
    new Recipe('Pasta2', 'My sweet pasta2', 'https://i.pinimg.com/originals/7d/62/9d/7d629d29f89b134033f97bb981f613be.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

}
