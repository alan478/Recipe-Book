import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dsService:DataStorageService){

  }
  getData(){
    this.dsService.getData();
    console.log("get data");
  }
}
