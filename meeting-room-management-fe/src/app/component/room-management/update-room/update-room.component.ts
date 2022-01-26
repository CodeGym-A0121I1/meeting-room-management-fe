import {Component, Inject, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";
import {SelectEquipmentComponent} from "../select-equipment/select-equipment.component";
import {MatDialog} from "@angular/material/dialog";
import {CategoryDTO} from "../../../model/dto/CategoryDTO";
import {EquipmentService} from "../../../service/equipment.service";
import {Room} from "../../../model/room/Room";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  constructor(private service: RoomService,
              private equipmentService: EquipmentService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog,
              private route: Router,
              private fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  updateRoom!: FormGroup;
  selectedImage: any = null;
  areas!: any[];
  floors!: any[];
  roomTypes!: any[];
  equipList!: any[];
  categoryWithEquipments: Array<CategoryDTO> = [];
  roomDTO: Room = new class implements Room {
    area: any;
    capacity: number;
    equipmentList: Array<any>;
    floor: any;
    id: string;
    image: string;
    name: string;
    roomType: any;
    status: any;
  };

  ngOnInit(): void {

    this.updateRoom = this.fb.group(
      {
        id: ['', Validators.required],
        name: ['', Validators.required],
        capacity: ['', [Validators.pattern("\\d+"), Validators.required]],
        image: ['', Validators.required],
        status: ['USING', Validators.required],
        area: ['', Validators.required],
        floor: ['', Validators.required],
        roomType: ['', Validators.required]

      })

    this.service.getAllAreas().subscribe(data => (
      this.areas = data
    ));
    this.service.getAllFloors().subscribe(data => (
      this.floors = data
    ));
    this.service.getAllRoomTypes().subscribe(data => (
      this.roomTypes = data
    ));
    this.service.getById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
      this.equipList = data.equipmentList;
      this.categoryWithEquipments = this.equipmentService.classifyEquipmentByCategory(this.equipList)
      this.updateRoom.setValue({
          id: data.id,
          name: data.name,
          capacity: data.capacity,
          image: data.image,
          status: data.status,
          area: data.area,
          floor: data.floor,
          roomType: data.roomType
        }
      );
    })
  }

  isChange: boolean = false;

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.updateRoom.patchValue({image: url});
        });
      })
    ).subscribe();
    this.isChange = true;
  }

  openDialogChooseEquipments(): void {
    this.matDialog.open(SelectEquipmentComponent, {
      width: "1000px",
      data: [this.equipList, this.updateRoom.value.id]
    }).afterClosed().subscribe(
      data => {
        this.equipList = data;
        this.categoryWithEquipments = this.equipmentService.classifyEquipmentByCategory(data)
      }
    );
  }

  save() {
    console.log(this.isChange)
    this.covertToDto();
    if (this.isChange) {

      const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.updateRoom.patchValue({image: url});
            // Call API to create vaccine
            this.service.updateRoom(this.roomDTO).subscribe(() => {
              this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
              this.route.navigateByUrl("/room");
            })
          });
        })
      ).subscribe();
    } else {
      this.service.updateRoom(this.roomDTO).subscribe(() => {
        this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
        this.route.navigateByUrl("/room");
      });
    }


  }

  covertToDto() {
    this.roomDTO.name = this.updateRoom.value.name;
    this.roomDTO.id = this.updateRoom.value.id;
    this.roomDTO.floor = this.updateRoom.value.floor;
    this.roomDTO.area = this.updateRoom.value.area;
    this.roomDTO.image = this.updateRoom.value.image;
    this.roomDTO.capacity = this.updateRoom.value.capacity;
    this.roomDTO.status = this.updateRoom.value.status;
    this.roomDTO.roomType = this.updateRoom.value.roomType;
    this.roomDTO.equipmentList = this.equipList;
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}

