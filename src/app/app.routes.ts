import { Routes } from '@angular/router';
import { HomeComponent } from './customer/home/home.component';
import { ProfileComponent } from './customer/profile/profile.component';
import { ToolsComponent } from './customer/tools/tools.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { LandCustomerComponent } from './customer/land-customer/land-customer.component';
import { LandAdminComponent } from './admin/land-admin/land-admin.component';
import { CustomerManageComponent } from './admin/customer-manage/customer-manage.component';
import { ItemManageComponent } from './admin/item-manage/item-manage.component';
import { RentalManageComponent } from './admin/rental-manage/rental-manage.component';

export const routes: Routes = [
  {
    path: "",
    component: LandCustomerComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "tools",
        component: ToolsComponent
      }
    ]
  },
  {
    path: "admin",
    component: LandAdminComponent,
    children: [
      {
        path: "",
        component: CustomerManageComponent
      },
      {
        path: "items",
        component: ItemManageComponent
      }
    ]
  }
];

