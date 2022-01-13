import {Component, Inject, OnInit} from '@angular/core';
import {RoomService} from "../../../service/room.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs/operators";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  constructor(private service: RoomService,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar,
              private route: Router,
              private fb: FormBuilder,
              @Inject(AngularFireStorage) private storage: AngularFireStorage) {
  }

  updateRoom!: FormGroup;
  selectedImage: any = null;
  areas!: any[] ;
  floors!: any[] ;
  roomTypes!: any[] ;

  ngOnInit(): void {

    this.updateRoom = this.fb.group(
      {
        id: ['', Validators.required],
        name: ['', Validators.required],
        capacity: ['', Validators.required],
        image: ['', Validators.required],
        status: ['', Validators.required],
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
    this.service.getAllTypes().subscribe(data => (
      this.roomTypes = data
    ));
    this.service.getById(this.activatedRoute.snapshot.params['id']).subscribe(data => {
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
      console.log(this.updateRoom.value)
    })
  }

  // onUpdate() {
  //   this.service.updateRoom(this.updateRoom.value,this.activatedRoute.snapshot.params['id']).subscribe(()=>{
  //     this.snackBar.open("Bạn đã cập nhật thành công","Ok");
  //     this.route.navigateByUrl("/employee");
  //   })
  // }
isChange:boolean=false;
  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    this.isChange=true;
  }

  save() {
    // upload image to firebase
    // const nameImg = this.getCurrentDateTime();

    // console.log(this.selectedImage.name);
    if(this.isChange==true){
//hihi
      const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
      const fileRef = this.storage.ref(nameImg);
      this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.updateRoom.patchValue({image: url});
            // Call API to create vaccine
            this.service.updateRoom( this.activatedRoute.snapshot.params['id'],this.updateRoom.value).subscribe(() => {
              console.log(this.updateRoom.value)
              this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
              this.route.navigateByUrl("/");
            })
          });
        })
      ).subscribe();
    }else {
      this.service.updateRoom( this.activatedRoute.snapshot.params['id'],this.updateRoom.value).subscribe(() => {
        console.log(this.updateRoom.value)
        this.snackBar.open("Bạn đã cập nhật thành công", "Ok");
        this.route.navigateByUrl("/");
      });
    }


  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }
}

