import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EquipmentManagementRoutingModule} from '../../routing/equipment-management-routing.module';
import {ListEquipmentComponent} from './list-equipment/list-equipment.component';
import {ListEquipmentCategoryComponent} from './list-equipment-category/list-equipment-category.component';
import {DeleteEquipmentComponent} from './delete-equipment/delete-equipment.component';
import {UpdateEquipmentComponent} from './update-equipment/update-equipment.component';
import {ViewEquipmentComponent} from './view-equipment/view-equipment.component';
import {CreateEquipmentComponent} from './create-equipment/create-equipment.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListEquipmentComponent,
    ListEquipmentCategoryComponent,
    DeleteEquipmentComponent,
    UpdateEquipmentComponent,
    ViewEquipmentComponent,
    CreateEquipmentComponent
  ],
  imports: [
    CommonModule,
    EquipmentManagementRoutingModule,
    MatDialogModule,
    MatButtonModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
 exports:[
    CreateEquipmentComponent,
    DeleteEquipmentComponent,
    ListEquipmentComponent,
    ListEquipmentCategoryComponent,
    UpdateEquipmentComponent,
    ViewEquipmentComponent
  ]
})
export class EquipmentManagementModule {
}
