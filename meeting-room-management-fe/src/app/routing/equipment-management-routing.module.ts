import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEquipmentComponent} from "../component/equipment-management/list-equipment/list-equipment.component";
import {ListEquipmentCategoryComponent} from "../component/equipment-management/list-equipment-category/list-equipment-category.component";
import {AdminGuard} from "../guards/admin/admin.guard";
import {PageNotFoundComponent} from "../component/pagenotfound/page-not-found.component";

const routes: Routes = [
  {
    path: "equipment", children: [
      {path: "", component: ListEquipmentCategoryComponent},
      {path: ":idCategory", component: ListEquipmentComponent}
    ], canActivate: [AdminGuard]
  },
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {}
