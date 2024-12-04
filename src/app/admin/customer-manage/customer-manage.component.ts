import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-manage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './customer-manage.component.html',
  styleUrl: './customer-manage.component.css'
})
export class CustomerManageComponent {
  constructor(private http:HttpClient){}

 // =add cus===
  public customer:any={
    customerName:"",
    customerContact:"",
    customerCity:""
  };

  public addCustomer(){
    this.http.post(" http://localhost:8080/customer/add_customer", this.customer).subscribe(data=>{
      alert("customer added")
    })
  }




  
}
