import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public urlImage: string;
  public ingridients: Ingredient[];
  public _id:string;
  public _v:number;

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.urlImage = imagePath;
    this.ingridients = ingredients;
     
  }
}
