import { Component } from '@angular/core';
import {HeaderComponent} from './header.component'
import {RecipesComponent} from './recipes/recipes.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
