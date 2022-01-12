import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEquipmentComponent} from "../component/equipment-management/list-equipment/list-equipment.component";

const routes: Routes = [
  {path: "equipment", children: [
      {path: "", component: ListEquipmentComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {
}
