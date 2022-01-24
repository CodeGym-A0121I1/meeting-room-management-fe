import {Component, OnInit} from '@angular/core';
import {RegistrationHistoryService} from "../../../service/registration-history.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {DetailRoomComponent} from "../detail-room/detail-room.component";
import {SignupRoomComponent} from "../sigup-room/signup-room.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Room} from "../../../model/room/Room";

@Component({
    selector: 'app-search-room',
    templateUrl: './search-room.component.html',
    styleUrls: ['./search-room.component.css']
})
export class SearchRoomComponent implements OnInit {


    roomTypes: any;
    history: any;
    rooms: any;
    areas: any;
    categorys: any;

    formHistory = new FormGroup(
        {
            // diadiem: new FormControl(''),
            // romomType: new FormControl(''),
            dateStart: new FormControl('',Validators.required),
            timeStart: new FormControl('',Validators.required),
            dateEnd: new FormControl('',Validators.required),
            timeEnd: new FormControl('',Validators.required),
            room: new  FormControl('',Validators.required),
            description: new FormControl('',Validators.required),
            // user: new FormControl(''),
        }
    )

    constructor(private historyService: RegistrationHistoryService,
                private activatedRoute: ActivatedRoute,
                private matDialog: MatDialog,
                private snackbar: MatSnackBar,
                public dailog: MatDialog,
                private router: Router) {
    }

    ngOnInit(): void {
        this.historyService.getAllRoomType().subscribe(
            (dataroomtype) => {
                this.roomTypes = dataroomtype;
            },
        );
        this.historyService.getAllRoom().subscribe(
            (dataroom) => {
                this.rooms = dataroom
            },
        );
        this.historyService.getAllAreas().subscribe(
            (dataareas) => {
                this.areas = dataareas;
            }
        );
        this.historyService.getAllCategry().subscribe(
            (datacategorys) => {
                this.categorys = datacategorys;
            }
        )
    }

    openDialogDetailRoom(room: Room) {
        const diaLog = this.dailog.open(DetailRoomComponent, {
            width: '500px',
            data: room
        });
        diaLog.afterClosed().subscribe(
            () => {
            },
            () => {
            },
            () => {
                this.ngOnInit();
            }
        );
    }

    signup(room : Room) {
        this.formHistory.value.room = room;
        console.log("Rooom room");
        console.log(this.formHistory.value.room)


      const diaLog = this.dailog.open(SignupRoomComponent, {
        width: '800px',
        data: this.formHistory
      });

        diaLog.afterClosed().subscribe(
            () => {
            },
            () => {
            },
            () => {
                this.ngOnInit();
            }
        );
    }

    onSubmit() {
        console.log("FormHistory")
        console.log(this.formHistory.value);
    }
}
