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

// ========== DELETE CUSTOMER ==========

public deleteCustomer(customerID:any){
  this.http.delete(` http://localhost:8080/customer/delete_by_id/${customerID}`,{ responseType: 'text' }).subscribe(data=>{
    alert("customerID has been deleted !");
  })
}
 // ================ GET ALL CUSTOMERS========

 public customerList:any =[];

 public getAllCustomers(){
   this.http.get(" http://localhost:8080/customer/get_all").subscribe(data=>{
     this.customerList=data;
   })
 }

//  ==============update customer====
public searchedCus:any = {};

public view(customer:any){
  this.searchedCus=customer;
}

public updateCustomer(){
  this.http.put(" http://localhost:8080/customer/update_customer",this.searchedCus,{ responseType: 'text' }).subscribe(data=>{
   alert("updated");
  })
}

  
}
