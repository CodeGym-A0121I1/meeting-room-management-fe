import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEquipmentComponent} from "../component/equipment-management/list-equipment/list-equipment.component";
import {ListEquipmentCategoryComponent} from "../component/equipment-management/list-equipment-category/list-equipment-category.component";
import {AdminGuard} from "../guards/admin.guard";
import {CreateEquipmentComponent} from "../component/equipment-management/create-equipment/create-equipment.component";
import {ViewEquipmentComponent} from "../component/equipment-management/view-equipment/view-equipment.component";

const routes: Routes = [
  {
    path: "equipment", children: [
      {path: "", component: ListEquipmentCategoryComponent},
      {path: "create", component: CreateEquipmentComponent},
      {path: ":idCategory", component: ListEquipmentComponent},
      {path: "detail/:idEquipment", component: ViewEquipmentComponent}
    ], canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {
}
