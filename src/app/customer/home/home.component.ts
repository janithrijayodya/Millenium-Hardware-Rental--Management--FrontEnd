import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private http:HttpClient){
  }

  // =====serach customer======

public contact:any;
public signIn(){
  this.http.get(`http://localhost:8080/customer/search_customer_by_contact/${this.contact}`).subscribe(data=>{
    alert("you are signed in");
  })
}

}