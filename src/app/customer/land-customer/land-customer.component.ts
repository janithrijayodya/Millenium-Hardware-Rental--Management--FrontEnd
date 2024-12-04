import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerHeaderComponent } from '../customer-header/customer-header.component';

@Component({
  selector: 'app-land-customer',
  standalone: true,
  imports: [RouterOutlet,CustomerHeaderComponent],
  templateUrl: './land-customer.component.html',
  styleUrl: './land-customer.component.css'
})
export class LandCustomerComponent {

}
