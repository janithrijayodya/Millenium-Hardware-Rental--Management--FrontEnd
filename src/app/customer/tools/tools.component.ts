import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.css'
})
export class ToolsComponent {
  constructor(private http:HttpClient){
    this.getAllItems();
  }

  // =========GET ALL==========

  public  itemList : any =[];

  public getAllItems(){
    this.http.get(" http://localhost:8080/item/get_all").subscribe(data=>{
      this.itemList=data;
    })
  }
}
