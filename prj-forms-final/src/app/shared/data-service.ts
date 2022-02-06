import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({
    providedIn:'root'
})
export class DataStorageService{
    constructor(private http:HttpClient, private rservice:RecipeService){

    }

    getData(){
        this.http.get<Recipe[]>('http://127.0.0.1:3000/getRecipe').subscribe((response)=>{
            console.log(response)
            this.rservice.setData(response);
        });
    
}

addData(recipe:Recipe){
    this.http.post('http://127.0.0.1:3000/add',recipe).subscribe((response)=>{
        console.log(response);
        console.log(recipe);

        this.rservice.addRecipe(response[0]);
    });
}
updateData(recipe:Recipe,id:number){
    console.log(recipe);
    console.log(this.rservice.getRecipe(id));
    this.http.put<Recipe>('http://127.0.0.1:3000/updateRecipe/'+this.rservice.getRecipe(id)._id,recipe).subscribe((response)=>{
        
        this.rservice.updateRecipe(id,response);
    });
}

deleteData(id:number){
    
    this.http.delete('http://127.0.0.1:3000/deleteById/'+this.rservice.getRecipe(id)._id).subscribe((response)=>{
        console.log(response);
        this.rservice.deleteRecipe(id);

    });

}



}