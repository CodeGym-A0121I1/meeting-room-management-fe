import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewEquipmentComponent} from "../component/equipment-management/view-equipment/view-equipment.component";

const routes: Routes = [
  {
    path: 'equipment/detail/:id', component:ViewEquipmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule { }
