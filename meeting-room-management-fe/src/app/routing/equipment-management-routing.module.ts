import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EquipmentManagementModule} from "../component/equipment-management/equipment-management.module";
import {ListEquipmentComponent} from "../component/equipment-management/list-equipment/list-equipment.component";
import {ListEquipmentCategoryComponent} from "../component/equipment-management/list-equipment-category/list-equipment-category.component";

const routes: Routes = [
  {path: "equipments", component: ListEquipmentCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {
}
