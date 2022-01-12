import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEquipmentCategoryComponent} from "../component/equipment-management/list-equipment-category/list-equipment-category.component";

const routes: Routes = [
      {path: "equipment" , children: [
          {path: "category", component: ListEquipmentCategoryComponent}
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentManagementRoutingModule {
}
