import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipmentManagementModule} from "../component/equipment-management/equipment-management.module";

const routes: Routes = [
  {path: "equipment", redirectTo: "equipment", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
