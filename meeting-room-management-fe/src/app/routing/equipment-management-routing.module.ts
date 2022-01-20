import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateEquipmentComponent} from "../component/equipment-management/create-equipment/create-equipment.component";

const routes: Routes = [
  {
    path: "equipment/create",
    component: CreateEquipmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {
}
